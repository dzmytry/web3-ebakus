/*!
 * Extend Web3 for Ebakus Blockchain v0.1.1
 *
 * @author Ebakus AG <chris@ebakus.com>
 * @website https://www.ebakus.com/
 *
 * @copyright Ebakus 2019
 * @license MIT
 */ !(function(e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var o = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
  }
  ;(r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t]
            }.bind(null, o)
          )
      return n
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ''),
    r((r.s = 3))
})([
  function(e, t) {
    e.exports = require('worker_threads')
  },
  function(e, t) {
    const r = '0123456789abcdef'.split(''),
      n = [1, 256, 65536, 16777216],
      o = [0, 8, 16, 24],
      a = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648,
      ],
      c = e => {
        var t,
          r,
          n,
          o,
          c,
          f,
          s,
          i,
          u,
          l,
          p,
          d,
          b,
          k,
          y,
          v,
          g,
          h,
          x,
          w,
          m,
          M,
          O,
          j,
          P,
          B,
          _,
          A,
          C,
          S,
          I,
          U,
          D,
          T,
          N,
          q,
          z,
          L,
          V,
          E,
          F,
          G,
          H,
          J,
          K,
          Q,
          R,
          W,
          X,
          Y,
          Z,
          $,
          ee,
          te,
          re,
          ne,
          oe,
          ae,
          ce,
          fe,
          se,
          ie,
          ue
        for (n = 0; n < 48; n += 2)
          (o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
            (c = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
            (f = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
            (s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
            (i = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
            (u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
            (l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
            (p = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
            (t =
              (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^
              ((f << 1) | (s >>> 31))),
            (r =
              (b = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^
              ((s << 1) | (f >>> 31))),
            (e[0] ^= t),
            (e[1] ^= r),
            (e[10] ^= t),
            (e[11] ^= r),
            (e[20] ^= t),
            (e[21] ^= r),
            (e[30] ^= t),
            (e[31] ^= r),
            (e[40] ^= t),
            (e[41] ^= r),
            (t = o ^ ((i << 1) | (u >>> 31))),
            (r = c ^ ((u << 1) | (i >>> 31))),
            (e[2] ^= t),
            (e[3] ^= r),
            (e[12] ^= t),
            (e[13] ^= r),
            (e[22] ^= t),
            (e[23] ^= r),
            (e[32] ^= t),
            (e[33] ^= r),
            (e[42] ^= t),
            (e[43] ^= r),
            (t = f ^ ((l << 1) | (p >>> 31))),
            (r = s ^ ((p << 1) | (l >>> 31))),
            (e[4] ^= t),
            (e[5] ^= r),
            (e[14] ^= t),
            (e[15] ^= r),
            (e[24] ^= t),
            (e[25] ^= r),
            (e[34] ^= t),
            (e[35] ^= r),
            (e[44] ^= t),
            (e[45] ^= r),
            (t = i ^ ((d << 1) | (b >>> 31))),
            (r = u ^ ((b << 1) | (d >>> 31))),
            (e[6] ^= t),
            (e[7] ^= r),
            (e[16] ^= t),
            (e[17] ^= r),
            (e[26] ^= t),
            (e[27] ^= r),
            (e[36] ^= t),
            (e[37] ^= r),
            (e[46] ^= t),
            (e[47] ^= r),
            (t = l ^ ((o << 1) | (c >>> 31))),
            (r = p ^ ((c << 1) | (o >>> 31))),
            (e[8] ^= t),
            (e[9] ^= r),
            (e[18] ^= t),
            (e[19] ^= r),
            (e[28] ^= t),
            (e[29] ^= r),
            (e[38] ^= t),
            (e[39] ^= r),
            (e[48] ^= t),
            (e[49] ^= r),
            (k = e[0]),
            (y = e[1]),
            (Q = (e[11] << 4) | (e[10] >>> 28)),
            (R = (e[10] << 4) | (e[11] >>> 28)),
            (A = (e[20] << 3) | (e[21] >>> 29)),
            (C = (e[21] << 3) | (e[20] >>> 29)),
            (fe = (e[31] << 9) | (e[30] >>> 23)),
            (se = (e[30] << 9) | (e[31] >>> 23)),
            (G = (e[40] << 18) | (e[41] >>> 14)),
            (H = (e[41] << 18) | (e[40] >>> 14)),
            (T = (e[2] << 1) | (e[3] >>> 31)),
            (N = (e[3] << 1) | (e[2] >>> 31)),
            (v = (e[13] << 12) | (e[12] >>> 20)),
            (g = (e[12] << 12) | (e[13] >>> 20)),
            (W = (e[22] << 10) | (e[23] >>> 22)),
            (X = (e[23] << 10) | (e[22] >>> 22)),
            (S = (e[33] << 13) | (e[32] >>> 19)),
            (I = (e[32] << 13) | (e[33] >>> 19)),
            (ie = (e[42] << 2) | (e[43] >>> 30)),
            (ue = (e[43] << 2) | (e[42] >>> 30)),
            (te = (e[5] << 30) | (e[4] >>> 2)),
            (re = (e[4] << 30) | (e[5] >>> 2)),
            (q = (e[14] << 6) | (e[15] >>> 26)),
            (z = (e[15] << 6) | (e[14] >>> 26)),
            (h = (e[25] << 11) | (e[24] >>> 21)),
            (x = (e[24] << 11) | (e[25] >>> 21)),
            (Y = (e[34] << 15) | (e[35] >>> 17)),
            (Z = (e[35] << 15) | (e[34] >>> 17)),
            (U = (e[45] << 29) | (e[44] >>> 3)),
            (D = (e[44] << 29) | (e[45] >>> 3)),
            (j = (e[6] << 28) | (e[7] >>> 4)),
            (P = (e[7] << 28) | (e[6] >>> 4)),
            (ne = (e[17] << 23) | (e[16] >>> 9)),
            (oe = (e[16] << 23) | (e[17] >>> 9)),
            (L = (e[26] << 25) | (e[27] >>> 7)),
            (V = (e[27] << 25) | (e[26] >>> 7)),
            (w = (e[36] << 21) | (e[37] >>> 11)),
            (m = (e[37] << 21) | (e[36] >>> 11)),
            ($ = (e[47] << 24) | (e[46] >>> 8)),
            (ee = (e[46] << 24) | (e[47] >>> 8)),
            (J = (e[8] << 27) | (e[9] >>> 5)),
            (K = (e[9] << 27) | (e[8] >>> 5)),
            (B = (e[18] << 20) | (e[19] >>> 12)),
            (_ = (e[19] << 20) | (e[18] >>> 12)),
            (ae = (e[29] << 7) | (e[28] >>> 25)),
            (ce = (e[28] << 7) | (e[29] >>> 25)),
            (E = (e[38] << 8) | (e[39] >>> 24)),
            (F = (e[39] << 8) | (e[38] >>> 24)),
            (M = (e[48] << 14) | (e[49] >>> 18)),
            (O = (e[49] << 14) | (e[48] >>> 18)),
            (e[0] = k ^ (~v & h)),
            (e[1] = y ^ (~g & x)),
            (e[10] = j ^ (~B & A)),
            (e[11] = P ^ (~_ & C)),
            (e[20] = T ^ (~q & L)),
            (e[21] = N ^ (~z & V)),
            (e[30] = J ^ (~Q & W)),
            (e[31] = K ^ (~R & X)),
            (e[40] = te ^ (~ne & ae)),
            (e[41] = re ^ (~oe & ce)),
            (e[2] = v ^ (~h & w)),
            (e[3] = g ^ (~x & m)),
            (e[12] = B ^ (~A & S)),
            (e[13] = _ ^ (~C & I)),
            (e[22] = q ^ (~L & E)),
            (e[23] = z ^ (~V & F)),
            (e[32] = Q ^ (~W & Y)),
            (e[33] = R ^ (~X & Z)),
            (e[42] = ne ^ (~ae & fe)),
            (e[43] = oe ^ (~ce & se)),
            (e[4] = h ^ (~w & M)),
            (e[5] = x ^ (~m & O)),
            (e[14] = A ^ (~S & U)),
            (e[15] = C ^ (~I & D)),
            (e[24] = L ^ (~E & G)),
            (e[25] = V ^ (~F & H)),
            (e[34] = W ^ (~Y & $)),
            (e[35] = X ^ (~Z & ee)),
            (e[44] = ae ^ (~fe & ie)),
            (e[45] = ce ^ (~se & ue)),
            (e[6] = w ^ (~M & k)),
            (e[7] = m ^ (~O & y)),
            (e[16] = S ^ (~U & j)),
            (e[17] = I ^ (~D & P)),
            (e[26] = E ^ (~G & T)),
            (e[27] = F ^ (~H & N)),
            (e[36] = Y ^ (~$ & J)),
            (e[37] = Z ^ (~ee & K)),
            (e[46] = fe ^ (~ie & te)),
            (e[47] = se ^ (~ue & re)),
            (e[8] = M ^ (~k & v)),
            (e[9] = O ^ (~y & g)),
            (e[18] = U ^ (~j & B)),
            (e[19] = D ^ (~P & _)),
            (e[28] = G ^ (~T & q)),
            (e[29] = H ^ (~N & z)),
            (e[38] = $ ^ (~J & Q)),
            (e[39] = ee ^ (~K & R)),
            (e[48] = ie ^ (~te & ne)),
            (e[49] = ue ^ (~re & oe)),
            (e[0] ^= a[n]),
            (e[1] ^= a[n + 1])
      },
      f = e => t => {
        var a
        if ('0x' === t.slice(0, 2)) {
          a = []
          for (var f = 2, s = t.length; f < s; f += 2)
            a.push(parseInt(t.slice(f, f + 2), 16))
        } else a = t
        return ((e, t) => {
          for (
            var a,
              f = t.length,
              s = e.blocks,
              i = e.blockCount << 2,
              u = e.blockCount,
              l = e.outputBlocks,
              p = e.s,
              d = 0;
            d < f;

          ) {
            if (e.reset)
              for (e.reset = !1, s[0] = e.block, y = 1; y < u + 1; ++y) s[y] = 0
            if ('string' != typeof t)
              for (y = e.start; d < f && y < i; ++d)
                s[y >> 2] |= t[d] << o[3 & y++]
            else
              for (y = e.start; d < f && y < i; ++d)
                (a = t.charCodeAt(d)) < 128
                  ? (s[y >> 2] |= a << o[3 & y++])
                  : a < 2048
                  ? ((s[y >> 2] |= (192 | (a >> 6)) << o[3 & y++]),
                    (s[y >> 2] |= (128 | (63 & a)) << o[3 & y++]))
                  : a < 55296 || a >= 57344
                  ? ((s[y >> 2] |= (224 | (a >> 12)) << o[3 & y++]),
                    (s[y >> 2] |= (128 | ((a >> 6) & 63)) << o[3 & y++]),
                    (s[y >> 2] |= (128 | (63 & a)) << o[3 & y++]))
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & t.charCodeAt(++d)))),
                    (s[y >> 2] |= (240 | (a >> 18)) << o[3 & y++]),
                    (s[y >> 2] |= (128 | ((a >> 12) & 63)) << o[3 & y++]),
                    (s[y >> 2] |= (128 | ((a >> 6) & 63)) << o[3 & y++]),
                    (s[y >> 2] |= (128 | (63 & a)) << o[3 & y++]))
            if (((e.lastByteIndex = y), y >= i)) {
              for (e.start = y - i, e.block = s[u], y = 0; y < u; ++y)
                p[y] ^= s[y]
              c(p), (e.reset = !0)
            } else e.start = y
          }
          if (
            ((s[(y = e.lastByteIndex) >> 2] |= n[3 & y]), e.lastByteIndex === i)
          )
            for (s[0] = s[u], y = 1; y < u + 1; ++y) s[y] = 0
          for (s[u - 1] |= 2147483648, y = 0; y < u; ++y) p[y] ^= s[y]
          c(p)
          for (var b, k = '', y = 0, v = 0; v < l; ) {
            for (y = 0; y < u && v < l; ++y, ++v)
              (b = p[y]),
                (k +=
                  r[(b >> 4) & 15] +
                  r[15 & b] +
                  r[(b >> 12) & 15] +
                  r[(b >> 8) & 15] +
                  r[(b >> 20) & 15] +
                  r[(b >> 16) & 15] +
                  r[(b >> 28) & 15] +
                  r[(b >> 24) & 15])
            v % u == 0 && (c(p), (y = 0))
          }
          return '0x' + k
        })(
          (e => ({
            blocks: [],
            reset: !0,
            block: 0,
            start: 0,
            blockCount: (1600 - (e << 1)) >> 5,
            outputBlocks: e >> 5,
            s: (e => [].concat(e, e, e, e, e))([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          }))(e),
          a
        )
      }
    e.exports = {
      keccak256: f(256),
      keccak512: f(512),
      keccak256s: f(256),
      keccak512s: f(512),
    }
  },
  function(e, t) {
    e.exports = function(e) {
      for (var t = 0, r = 0; r < e.length; r++, t += 8)
        if (0 !== e[r]) {
          t += Math.clz32(e[r]) - 24
          break
        }
      return t
    }
  },
  function(e, t, r) {
    'use strict'
    r.r(t)
    var n,
      o,
      a = r(2),
      c = r.n(a),
      f = r(1),
      s = r(0),
      i =
        (500,
        (n = function(e) {
          s.parentPort.postMessage({ cmd: 'current', workNonce: e })
        }),
        (o = 0),
        function() {
          var e = new Date().getTime()
          if (!(e - o < 500)) return (o = e), n.apply(void 0, arguments)
        })
    s.parentPort.on('message', function(e) {
      !(function(e, t) {
        var r = 0,
          n = Math.log2(t),
          o = (n = Math.ceil(n)),
          a = new ArrayBuffer(128),
          u = new Uint8Array(a, 64, 64),
          l = new Uint8Array(new Buffer(Object(f.keccak256)(e).slice(2), 'hex'))
        u.set(l)
        var p = new DataView(a, u.byteOffset, u.byteLength),
          d = 0
        do {
          p.setUint32(60, r)
          var b = new Uint8Array(
              new Buffer(Object(f.keccak256)(u).slice(2), 'hex')
            ),
            k = c()(b)
          if (k > d && (d = k) >= o) {
            s.parentPort.postMessage({ cmd: 'finished', workNonce: r })
            break
          }
          i(++r)
        } while (d <= o)
      })(e.hash, e.targetDifficulty)
    }),
      s.parentPort.postMessage({ cmd: 'ready' })
  },
])
