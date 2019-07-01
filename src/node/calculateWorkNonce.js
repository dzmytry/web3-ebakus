import clz from 'clz-buffer'
import { keccak256 } from 'eth-lib/lib/hash'
import { parentPort } from 'worker_threads'

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

const mainThreadUpdate = throttled(500, currentWorkNonce => {
  // emit the current workNonce calculated for transaction
  parentPort.postMessage({
    cmd: 'current',
    workNonce: currentWorkNonce,
  })
})

function calculateWorkNonce(hash, targetDifficulty) {
  let currentWorkNonce = 0

  let bits = Math.log2(targetDifficulty)
  bits = Math.ceil(bits)
  const target = bits

  const heap = new ArrayBuffer(hash.length * 2)
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
        // emit the final workNonce calculated for transaction
        parentPort.postMessage({
          cmd: 'finished',
          workNonce: currentWorkNonce,
        })

        break
      }
    }

    currentWorkNonce++

    mainThreadUpdate(currentWorkNonce)
  } while (bestBit <= target)
}

parentPort.on('message', data => {
  const { hash, targetDifficulty } = data
  calculateWorkNonce(hash, targetDifficulty)
})

parentPort.postMessage({
  cmd: 'ready',
})
