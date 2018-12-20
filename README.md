# web3-ebakus

Web3 functionality for [Ebakus](https://ebakus.com).

## Installation

### Node.js

``` bash
npm install --save web3-ebakus
npm install --save web3 # web3 is needed as dependency
```

### In the Browser

Build running the following from the root folder of the repository:

```bash
npm run-script build
```

Then include `lib/ebakus.js` in your html file.
This will expose the `Web3Ebakus` object on the window object.

## Usage

```js
import ebakus from 'web3-ebakus';
import Web3 from 'web3';

const web3 = Web3Ebakus(new Web3());

const tx = { /* transaction object */ };
web3.eth.calculateWorkForTransaction(tx, /* targetDifficulty */ 1000);
  .then(tx => { /* do something with tx */ })
```

The `calculateWorkForTransaction` is also available for `Account` objects, which is useful for chaining.

## Advanced

The `calculateWorkForTransaction` accepts two additional arguments.

`function calculateWorkForTransaction(transaction, targetDifficulty, ctrlWorkForTransactionState, callback)`

* `ctrlWorkForTransactionState`: this is an object that will be populated with some useful methods when passed.

  * `isRunning()`: state of worker
  * `getCurrentWorkNonce()`: returns the current workNonce while worker is running
  * `kill()`: kills the worker

  Example:
  ```js
    let ctrl = {};

    // log worker state every 500ms
    const logger = setInterval(() => {
      console.log('isRunning', ctrl.isRunning());
      console.log('getCurrentWorkNonce', ctrl.getCurrentWorkNonce());

      // stop logging once worker finished
      if (!ctrl.isRunning() && ctrl.getCurrentWorkNonce() > 0) {
        clearInterval(logger);
      }
    }, 500);

    // kill worker after 3seconds
    // setTimeout(() => {
    //   ctrl.kill();
    // }, 3000);

    web3.eth.calculateWorkForTransaction(transaction, 1000, ctrl)
      .then(tx => { /* do something with tx */ })
  ```

* `callback`: you can read more [here](https://web3js.readthedocs.io/en/1.0/callbacks-promises-events.html)