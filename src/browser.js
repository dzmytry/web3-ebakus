/**
 * Web3 module to add transaction PoW for Ebakus.
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @date 2018
 */

import Bytes from 'eth-lib/lib/bytes'
import RLP from 'eth-lib/lib/rlp'

import Worker from 'worker-loader?inline&name=[name].[ext]!./web/calculateWorkNonce.worker.js'

import signTransaction, {
  setWeb3Provider as signTransactionSetWeb3Provider,
} from './common/signTransaction'
import { wasmSupported } from './common/utils'

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

    const calculatePowNonce = async tx => {
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

        if (!tx.chainId) {
          tx.chainId = await web3.eth.net.getId()
        }

        if (!tx.nonce && tx.nonce !== 0) {
          tx.nonce = await web3.eth.getTransactionCount(tx.to)
        }

        // if (!tx.gas) {
        //   tx.gas = await this.estimateGas(tx)
        // }

        tx = web3.extend.formatters.inputCallFormatter(tx)

        const rlpEncoded = RLP.encode([
          Bytes.fromNat(tx.nonce),
          Bytes.fromNat(/* workNonce */ '0x'),
          Bytes.fromNat(tx.gas),
          tx.to ? tx.to.toLowerCase() : '',
          Bytes.fromNat(tx.value || '0x'),
          tx.data || '0x',
          Bytes.fromNat(web3.utils.numberToHex(tx.chainId) || '0x1'),
          '0x',
          '0x',
        ])

        const job = {
          hash: rlpEncoded,
          targetDifficulty,
        }

        return new Promise(function(resolve, reject) {
          worker = new Worker()
          workerReject = reject

          /**
           * worker can emit the following payloads:
           * 1. { cmd: 'ready' }
           * 2. { cmd: 'current', workNonce: number }
           * 3. { cmd: 'finished', workNonce: number }
           */
          worker.onmessage = function onMessage(e) {
            const {
              target: wrk,
              data: { cmd, workNonce },
            } = e

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
                console.log('TCL: onMessage -> finished')
                tx.workNonce = web3.utils.numberToHex(workNonce)

                isRunning = false
                wrk.terminate()

                callback(null, tx)
                resolve(tx)
                break
              }

              default: {
                console.warn('Unknown data from worker', e.data)
              }
            }
          }
        })
      } catch (err) {
        console.log('TCL: err', err)
        callback(err)
        return Promise.reject(err)
      }
    }

    return Promise.resolve(calculatePowNonce(tx))
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

  // keep ref to web3 original method
  const superAddAccountFunctions = web3.eth.accounts._addAccountFunctions

  // extend web3 accounts methods
  web3.eth.accounts._addAccountFunctions = function(account) {
    const _this = this

    account = superAddAccountFunctions.call(_this, account)

    account.signTransaction = (tx, callback) => {
      return signTransaction(tx, account.privateKey, callback)
    }
    account.calculateWorkForTransaction = web3.eth.calculateWorkForTransaction

    return account
  }

  signTransactionSetWeb3Provider(web3)

  return web3
}

export default ebakus
