/**
 * Web3 module to add transaction PoW for Ebakus.
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @date 2018
 */

import RLP from 'eth-lib/lib/rlp';
import Bytes from 'eth-lib/lib/bytes';
import calculatePowNonce from './calculateWorkNonce.node.js';

const wasmSupported = (() => {
  try {
    if (
      typeof WebAssembly === 'object' &&
      typeof WebAssembly.instantiate === 'function'
    ) {
      const module = new WebAssembly.Module(
        Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
      );
      if (module instanceof WebAssembly.Module)
        return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
    }
  } catch (e) {}
  return false;
})();

const ebakus = web3 => {
  /*
   * calculateWorkForTransaction is used for running the wanted Proof of Work
   * for the transaction from the Ebakus blockchain
   */
  web3.eth.calculateWorkForTransaction = function calculateWorkForTransaction(
    tx,
    targetDifficulty,
    callback
  ) {
    const _this = this;
    let error = false;

    callback = callback || function() {};

    if (!wasmSupported) {
      error = new Error(
        "Wasm is not supported by browser. CryptoNight can't load."
      );

      callback(error);
      return Promise.reject(error);
    }

    if (!tx) {
      error = new Error('No transaction object given!');

      callback(error);
      return Promise.reject(error);
    }

    const handleTx = tx => {
      if (!targetDifficulty) {
        error = new Error('"targetDifficulty" is missing');
      }

      if (!tx.gas && !tx.gasLimit) {
        error = new Error('"gas" is missing');
      }

      if (tx.nonce < 0 || tx.gas < 0 || tx.chainId < 0) {
        error = new Error('Gas, nonce or chainId is lower than 0');
      }

      if (error) {
        callback(error);
        return Promise.reject(error);
      }

      try {
        tx = web3.extend.formatters.inputCallFormatter(tx);

        let transaction = tx;
        transaction.to = tx.to || '0x';
        transaction.data = tx.data || '0x';
        transaction.value = tx.value || '0x';
        transaction.chainId = web3.utils.numberToHex(tx.chainId);
        transaction.workNonce = '0x';

        const rlpEncoded = RLP.encode([
          Bytes.fromNat(transaction.nonce),
          Bytes.fromNat(transaction.gas),
          transaction.to.toLowerCase(),
          Bytes.fromNat(transaction.value),
          transaction.data,
        ]);

        return calculatePowNonce.then(calc => {
          const workNonce = calc(rlpEncoded, targetDifficulty);
          console.log('workNonce2: ', workNonce);

          tx.workNonce = web3.utils.numberToHex(workNonce);

          callback(null, tx);
          return tx;
        });
      } catch (e) {
        callback(e);
        return Promise.reject(e);
      }
    };

    return Promise.resolve(handleTx(tx));
  };

  // keep ref to web3 original function
  const superAddAccountFunctions = web3.eth.accounts._addAccountFunctions;

  // extend web3 accounts functions
  web3.eth.accounts._addAccountFunctions = function(account) {
    const _this = this;

    account = superAddAccountFunctions.call(_this, account);

    account.calculateWorkForTransaction = web3.eth.calculateWorkForTransaction;

    return account;
  };

  return web3;
};

export default ebakus;
