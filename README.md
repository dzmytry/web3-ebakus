# web3-ebakus

Web3 functionality for [Ebakus](https://ebakus.com).

## Installation

### Node.js

```bash
npm install --save web3-ebakus
npm install --save web3 # web3 is needed as dependency
```

### In the Browser

Build running the following from the root folder of the repository:

```bash
npm run-script build
```

Then include `lib/web3-ebakus.browser.js` in your html file.
This will expose the `Web3Ebakus` object on the window object.

## Usage

```js
import ebakus from 'web3-ebakus'
import Web3 from 'web3'

const web3 = Web3Ebakus(new Web3())
```

You can also have a look at the [example page](example/index.html).

## Methods

### web3.eth.suggestDifficulty()

The `suggestDifficulty` retrieves the currently suggested difficulty of the network which can be used for `calculateWorkForTransaction`.

```js
web3.eth.suggestDifficulty().then(difficulty => console.log)
```

### web3.eth.calculateWorkForTransaction(transaction, targetDifficulty, ctrlWorkForTransactionState, callback)

The `calculateWorkForTransaction` calculates the PoW needed for a transaction in order to be added in a block by a block producer.

```js
const tx = {
  /* transaction object */
}
web3.eth.calculateWorkForTransaction(tx, /* targetDifficulty */ 1).then(tx => {
  /* do something with tx */
})
```

> is also available for `Account` objects, which is useful for chaining

The `ctrlWorkForTransactionState` and `callback` parameters are optional.

> IMPORTANT: `ctrlWorkForTransactionState` is not supported in **node.js**, where the function signature accepts only 3 parameters instead of 4.

- `ctrlWorkForTransactionState`: this is an object that will be populated with some useful methods when passed.

  - `isRunning()`: state of worker
  - `getCurrentWorkNonce()`: returns the current workNonce while worker is running
  - `kill()`: kills the worker

  Example:

  ```js
  let ctrl = {}

  // log worker state every 500ms
  const logger = setInterval(() => {
    console.log('isRunning', ctrl.isRunning())
    console.log('getCurrentWorkNonce', ctrl.getCurrentWorkNonce())

    // stop logging once worker finished
    if (!ctrl.isRunning() && ctrl.getCurrentWorkNonce() > 0) {
      clearInterval(logger)
    }
  }, 500)

  // kill worker after 3seconds
  // setTimeout(() => {
  //   ctrl.kill();
  // }, 3000);

  web3.eth.calculateWorkForTransaction(transaction, 1, ctrl).then(tx => {
    /* do something with tx */
  })
  ```

- `callback`: you can read more [here](https://web3js.readthedocs.io/en/1.0/callbacks-promises-events.html)
