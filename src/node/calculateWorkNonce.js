import clz from 'clz-buffer'
import { parentPort } from 'worker_threads'
import { hex2uint8 } from '../common/utils'
import { sha3_256 } from 'js-sha3'

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

function calculateWorkNonce(hash, targetDifficulty) {
  let currentWorkNonce = 0

  let bits = Math.log2(targetDifficulty)
  bits = Math.ceil(bits)
  const target = bits

  var heap = new ArrayBuffer(128)
  var input = new Uint8Array(heap, 64, 64)
  const rlpIntArray = hex2uint8(heap, hash, 64)
  const rlpHash = new Uint8Array(sha3_256.arrayBuffer(rlpIntArray))
  input.set(rlpHash)

  const inputDataView = new DataView(heap, input.byteOffset, input.byteLength)

  let bestBit = 0
  do {
    // set in big-endian
    inputDataView.setUint32(60, currentWorkNonce)

    const outputHash = new Uint8Array(sha3_256.arrayBuffer(input))
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

parentPort.on('message', data => {
  const { hash, targetDifficulty } = data
  calculateWorkNonce(hash, targetDifficulty)

  // emit the final workNonce calculated for transaction
  parentPort.postMessage({
    cmd: 'finished',
    workNonce: currentWorkNonce,
  })
})

parentPort.postMessage({
  cmd: 'ready',
})
