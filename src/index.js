/**
 * Web3 module to add transaction PoW for Ebakus.
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @date 2018
 */

import RLP from 'eth-lib/lib/rlp';
import Bytes from 'eth-lib/lib/bytes';
import calculateWorkNonce from './calculateWorkNonce.node.js';

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

      if (!tx.gas) {
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

        const rlpEncoded = RLP.encode([
          Bytes.fromNat(tx.nonce),
          Bytes.fromNat(/* workNonce */ '0x'),
          Bytes.fromNat(tx.gas),
          tx.to ? tx.to.toLowerCase() : '',
          Bytes.fromNat(tx.value || '0x'),
          tx.data,
          Bytes.fromNat(web3.utils.numberToHex(tx.chainId) || '0x1'),
          '0x',
          '0x',
        ]);

        return calculateWorkNonce.then(calcFn => {
          const workNonce = calcFn(rlpEncoded, targetDifficulty);

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
