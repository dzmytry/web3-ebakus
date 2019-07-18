import clz from 'clz-buffer'
import { keccak256 } from 'eth-lib/lib/hash'

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

onmessage = function(e) {
  let { hash, targetDifficulty } = e.data
  let currentWorkNonce = 0

  const mainThreadUpdate = throttled(500, () => {
    // emit the final workNonce calculated for transaction
    postMessage({
      cmd: 'current',
      workNonce: currentWorkNonce,
    })
  })

  function calculateWorkNonce() {
    let bits = Math.log2(targetDifficulty)
    bits = Math.ceil(bits)
    const target = bits

    const heap = new ArrayBuffer(128)
    const input = new Uint8Array(heap, 64, 64)

    const rlpHash = new Uint8Array(new Buffer(keccak256(hash).slice(2), 'hex'))
    input.set(rlpHash)

    const inputDataView = new DataView(heap, input.byteOffset, input.byteLength)

    let bestBit = 0
    do {
      // set in big-endian
      inputDataView.setUint32(60, currentWorkNonce)

      const outputHash = new Uint8Array(
        new Buffer(keccak256(input).slice(2), 'hex')
      )
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

  calculateWorkNonce()

  // emit the final workNonce calculated for transaction
  postMessage({
    cmd: 'finished',
    workNonce: currentWorkNonce,
  })
}

// emit to main thread that worker has finished loading
postMessage({
  cmd: 'ready',
})
