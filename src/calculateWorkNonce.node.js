import clz from 'clz-buffer';
import Module from './cryptonight.js';

export default new Promise(function(resolve, reject) {
  Module.ready.then(api => {
    function hex2uint8(buffer, s) {
      let result = new Uint8Array(
        buffer,
        api.Malloc(s.length / 2),
        s.length / 2
      );
      for (let i = 0; i < s.length / 2; i++) {
        result[i] = parseInt(s.substr(2 * i, 2), 16);
      }
      return result;
    }

    function getCryptoNightBigEndian(input, output) {
      api.cryptonight(
        output.byteOffset,
        input.byteOffset,
        input.byteLength,
        /* lite */ 0,
        /* variant */ 2
      );

      // reverse from little-endian to big-endian
      output.reverse();
    }

    // calculate a cryptonight hash
    function calculatePowNonce(hash, targetDifficulty) {
      let currentWorkNonce = 0;

      let bits = Math.log2(targetDifficulty);
      bits = Math.ceil(bits);
      const target = bits;

      const heap = Module.HEAPU8.buffer;
      const input = new Uint8Array(heap, api.Malloc(64), 64);

      const rlpIntArray = hex2uint8(heap, hash);
      const rlpHash = new Uint8Array(heap, api.Malloc(32), 32);
      getCryptoNightBigEndian(rlpIntArray, rlpHash);

      input.set(rlpHash, 0);

      const inputDataView = new DataView(
        heap,
        input.byteOffset,
        input.byteLength
      );

      const outputMalloc = api.Malloc(32);
      let bestBit = 0;
      do {
        // set in big-endian
        inputDataView.setUint32(60, currentWorkNonce);

        const outputHash = new Uint8Array(heap, outputMalloc, 32);
        getCryptoNightBigEndian(input, outputHash);

        const firstBit = clz(outputHash);

        if (firstBit > bestBit) {
          bestBit = firstBit;

          if (bestBit >= target) {
            break;
          }
        }

        currentWorkNonce++;
      } while (bestBit <= target);

      return currentWorkNonce;
    }

    resolve(calculatePowNonce);
  });
});
