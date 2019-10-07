/**
 * Web3 module to add transaction PoW for Ebakus.
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @date 2018
 */

import RLP from 'eth-lib/lib/rlp'
import Bytes from 'eth-lib/lib/bytes'

import signTransaction, {
  setWeb3Provider as signTransactionSetWeb3Provider,
} from './common/signTransaction'
import { wasmSupported } from './common/utils'
import CalculateWorkNonceWorker from 'worker-loader?name=[name].[ext]&publicPath=./node_modules/web3-ebakus/lib/!./node/calculateWorkNonce.js'

const ebakus = web3 => {
  /*
   * calculateWorkForTransaction is used for running the wanted Proof of Work
   * for the transaction from the Ebakus blockchain
   */
  web3.eth.calculateWorkForTransaction = function calculateWorkForTransaction(
    tx,
    targetDifficulty,
    ctrl,
    callback
  ) {
    const _this = this
    let error = false

    callback = callback || (() => {})

    if (!wasmSupported) {
      error = new Error(
        "Wasm is not supported by browser. CryptoNight can't load."
      )

      callback(error)
      return Promise.reject(error)
    }

    if (!tx) {
      error = new Error('No transaction object given!')

      callback(error)
      return Promise.reject(error)
    }

    const handleTx = async tx => {
      let currentWorkNonce = 0
      let isRunning = false
      let worker, workerReject

      // allow the user to check status of the worker
      if (ctrl !== null && typeof ctrl === 'object') {
        ctrl.isRunning = () => isRunning
        ctrl.getCurrentWorkNonce = () => currentWorkNonce
        ctrl.kill = () => {
          isRunning = false
          currentWorkNonce = 0

          worker && worker.terminate()
          workerReject && workerReject('Worker terminated by user')
        }
      }

      try {
        if (!targetDifficulty) {
          targetDifficulty = await web3.eth.suggestDifficulty(tx.to)
        }

        if (!tx.nonce && tx.nonce !== 0) {
          tx.nonce = await web3.eth.getTransactionCount(tx.to)
        }

        // if (!tx.gas) {
        //   tx.gas = await  web3.eth.estimateGas(tx)
        // }

        tx = web3.extend.formatters.inputCallFormatter(tx)

        const rlpEncoded = RLP.encode([
          Bytes.fromNat(tx.nonce),
          Bytes.fromNat(tx.gas),
          tx.to ? tx.to.toLowerCase() : '',
          Bytes.fromNat(tx.value || '0x'),
          tx.data || '0x',
        ])

        const job = {
          hash: rlpEncoded,
          targetDifficulty,
        }

        return new Promise(function(resolve, reject) {
          worker = new CalculateWorkNonceWorker()
          workerReject = reject

          /**
           * worker can emit the following payloads:
           * 1. { cmd: 'ready' }
           * 2. { cmd: 'current', workNonce: number }
           * 3. { cmd: 'finished', workNonce: number }
           */
          worker.on('message', data => {
            const { cmd, workNonce } = data

            switch (cmd) {
              case 'ready': {
                isRunning = true
                worker.postMessage(job)
                break
              }

              case 'current': {
                currentWorkNonce = workNonce
                break
              }

              case 'finished': {
                tx.workNonce = web3.utils.numberToHex(workNonce)
                currentWorkNonce = tx.workNonce

                isRunning = false
                worker.terminate()

                callback(null, tx)
                resolve(tx)
                break
              }

              default: {
                console.warn('Unknown data from worker', data)
              }
            }
          })

          worker.on('error', e => {
            throw e
          })

          worker.on('exit', exitCode => {
            if (exitCode === 1) {
              return null
            }
            const err = new Error(`Worker has stopped with code ${exitCode}`)
            callback(err)
            return Promise.reject(err)
          })
        })
      } catch (e) {
        callback(e)
        return Promise.reject(e)
      }
    }

    return Promise.resolve(handleTx(tx))
  }

  // extend web3 eth methods
  web3.eth.extend({
    methods: [
      {
        name: 'suggestDifficulty',
        call: 'eth_suggestDifficulty',
        params: 1,
        inputFormatter: [web3.utils.toChecksumAddress],
        outputFormatter: web3.utils.toFloat,
      },
    ],
  })

  // keep ref to web3 original function
  const superAddAccountFunctions = web3.eth.accounts._addAccountFunctions

  // extend web3 accounts functions
  web3.eth.accounts._addAccountFunctions = function(account) {
    const _this = this

    account = superAddAccountFunctions.call(_this, account)

    account.signTransaction = (tx, callback) => {
      return signTransaction(tx, account.privateKey, callback)
    }
    account.calculateWorkForTransaction = web3.eth.calculateWorkForTransaction

    return account
  }

  web3.eth.accounts.signTransaction = function(tx, privateKey, callback) {
    return signTransaction(tx, privateKey, callback)
  }

  signTransactionSetWeb3Provider(web3)

  // add ebakus db methods to web3
  web3.extend({
    property: 'db',
    methods: [
      {
        name: 'get',
        call: 'db_get',
        params: 5,
        inputFormatter: [
          web3.utils.inputAddressFormatter,
          null,
          null,
          null,
          web3.utils.inputBlockNumberFormatter,
        ],
      },
      {
        name: 'select',
        call: 'db_select',
        params: 5,
        inputFormatter: [
          web3.utils.inputAddressFormatter,
          null,
          null,
          null,
          web3.utils.inputBlockNumberFormatter,
        ],
      },
      {
        name: 'next',
        call: 'db_next',
        params: 1,
        inputFormatter: [null],
      },
    ],
  })

  return web3
}

export default ebakus
