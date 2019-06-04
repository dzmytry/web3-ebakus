import clz from 'clz-buffer'
import { parentPort } from 'worker_threads'
import Module from '../common/cryptonight'
import { hex2uint8 } from '../common/utils'

let currentWorkNonce = 0

const throttled = (delay, fn) => {
  let lastCall = 0
  return function(...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

const mainThreadUpdate = throttled(500, () => {
  // emit the final workNonce calculated for transaction
  parentPort.postMessage({
    cmd: 'current',
    workNonce: currentWorkNonce,
  })
})

Module.ready.then(api => {
  function getCryptoNightBigEndian(input, output) {
    api.cryptonight(
      output.byteOffset,
      input.byteOffset,
      input.byteLength,
      /* lite */ 0,
      /* variant */ 2
    )

    // reverse from little-endian to big-endian
    output.reverse()
  }

  // calculate a cryptonight hash
  function calculateWorkNonce(hash, targetDifficulty) {
    let currentWorkNonce = 0

    let bits = Math.log2(targetDifficulty)
    bits = Math.ceil(bits)
    const target = bits

    const heap = Module.HEAPU8.buffer
    const input = new Uint8Array(heap, api.Malloc(64), 64)

    const rlpIntArray = hex2uint8(heap, hash, api.Malloc(hash.length / 2))
    const rlpHash = new Uint8Array(heap, api.Malloc(32), 32)
    getCryptoNightBigEndian(rlpIntArray, rlpHash)

    input.set(rlpHash, 0)

    const inputDataView = new DataView(heap, input.byteOffset, input.byteLength)

    const outputMalloc = api.Malloc(32)
    let bestBit = 0
    do {
      // set in big-endian
      inputDataView.setUint32(60, currentWorkNonce)

      const outputHash = new Uint8Array(heap, outputMalloc, 32)
      getCryptoNightBigEndian(input, outputHash)

      const firstBit = clz(outputHash)

      if (firstBit > bestBit) {
        bestBit = firstBit

        if (bestBit >= target) {
          break
        }
      }

      currentWorkNonce++

      mainThreadUpdate()
    } while (bestBit <= target)
  }

  parentPort.postMessage({
    cmd: 'ready',
  })

  parentPort.on('message', data => {
    const { hash, targetDifficulty } = data
    calculateWorkNonce(hash, targetDifficulty)

    // emit the final workNonce calculated for transaction
    parentPort.postMessage({
      cmd: 'finished',
      workNonce: currentWorkNonce,
    })
  })
})
