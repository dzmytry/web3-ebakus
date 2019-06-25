const wasmSupported = (() => {
  try {
    if (
      typeof WebAssembly === 'object' &&
      typeof WebAssembly.instantiate === 'function'
    ) {
      const module = new WebAssembly.Module(
        Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
      )
      if (module instanceof WebAssembly.Module)
        return new WebAssembly.Instance(module) instanceof WebAssembly.Instance
    }
  } catch (e) {}
  return false
})()

const hex2uint8 = (buffer, s, byteOffset) => {
  let result = new Uint8Array(buffer, byteOffset, s.length / 2)
  for (let i = 0; i < s.length / 2; i++) {
    result[i] = parseInt(s.substr(2 * i, 2), 16)
  }
  return result
}

export { wasmSupported, hex2uint8 }
