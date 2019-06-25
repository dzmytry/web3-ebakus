/*!
 * Web3 module to add transaction PoW for Ebakus. v1.0.0
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @website https://www.ebakus.com/
 *
 * @copyright Ebakus 2019
 * @license MIT
 */ !(function(t) {
  var e = {}
  function r(n) {
    if (e[n]) return e[n].exports
    var o = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
  }
  ;(r.m = t),
    (r.c = e),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function(e) {
              return t[e]
            }.bind(null, o)
          )
      return n
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = ''),
    r((r.s = 4))
})([
  function(t, e) {
    t.exports = require('worker_threads')
  },
  function(t, e, r) {
    var n
    /**
     * [js-sha3]{@link https://github.com/emn178/js-sha3}
     *
     * @version 0.8.0
     * @author Chen, Yi-Cyuan [emn178@gmail.com]
     * @copyright Chen, Yi-Cyuan 2015-2018
     * @license MIT
     */
    /**
     * [js-sha3]{@link https://github.com/emn178/js-sha3}
     *
     * @version 0.8.0
     * @author Chen, Yi-Cyuan [emn178@gmail.com]
     * @copyright Chen, Yi-Cyuan 2015-2018
     * @license MIT
     */
    !(function() {
      'use strict'
      var o = 'input is invalid type',
        i = 'object' == typeof window,
        a = i ? window : {}
      a.JS_SHA3_NO_WINDOW && (i = !1)
      var s = !i && 'object' == typeof self
      !a.JS_SHA3_NO_NODE_JS &&
      'object' == typeof process &&
      process.versions &&
      process.versions.node
        ? (a = global)
        : s && (a = self)
      var u = !a.JS_SHA3_NO_COMMON_JS && 'object' == typeof t && t.exports,
        f = r(3),
        c = !a.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
        h = '0123456789abcdef'.split(''),
        p = [4, 1024, 262144, 67108864],
        l = [0, 8, 16, 24],
        y = [
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
        d = [224, 256, 384, 512],
        b = [128, 256],
        v = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
        A = { 128: 168, 256: 136 }
      ;(!a.JS_SHA3_NO_NODE_JS && Array.isArray) ||
        (Array.isArray = function(t) {
          return '[object Array]' === Object.prototype.toString.call(t)
        }),
        !c ||
          (!a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
          (ArrayBuffer.isView = function(t) {
            return (
              'object' == typeof t &&
              t.buffer &&
              t.buffer.constructor === ArrayBuffer
            )
          })
      for (
        var w = function(t, e, r) {
            return function(n) {
              return new U(t, e, t).update(n)[r]()
            }
          },
          g = function(t, e, r) {
            return function(n, o) {
              return new U(t, e, o).update(n)[r]()
            }
          },
          m = function(t, e, r) {
            return function(e, n, o, i) {
              return x['cshake' + t].update(e, n, o, i)[r]()
            }
          },
          _ = function(t, e, r) {
            return function(e, n, o, i) {
              return x['kmac' + t].update(e, n, o, i)[r]()
            }
          },
          B = function(t, e, r, n) {
            for (var o = 0; o < v.length; ++o) {
              var i = v[o]
              t[i] = e(r, n, i)
            }
            return t
          },
          k = function(t, e) {
            var r = w(t, e, 'hex')
            return (
              (r.create = function() {
                return new U(t, e, t)
              }),
              (r.update = function(t) {
                return r.create().update(t)
              }),
              B(r, w, t, e)
            )
          },
          S = [
            {
              name: 'keccak',
              padding: [1, 256, 65536, 16777216],
              bits: d,
              createMethod: k,
            },
            {
              name: 'sha3',
              padding: [6, 1536, 393216, 100663296],
              bits: d,
              createMethod: k,
            },
            {
              name: 'shake',
              padding: [31, 7936, 2031616, 520093696],
              bits: b,
              createMethod: function(t, e) {
                var r = g(t, e, 'hex')
                return (
                  (r.create = function(r) {
                    return new U(t, e, r)
                  }),
                  (r.update = function(t, e) {
                    return r.create(e).update(t)
                  }),
                  B(r, g, t, e)
                )
              },
            },
            {
              name: 'cshake',
              padding: p,
              bits: b,
              createMethod: function(t, e) {
                var r = A[t],
                  n = m(t, 0, 'hex')
                return (
                  (n.create = function(n, o, i) {
                    return o || i
                      ? new U(t, e, n).bytepad([o, i], r)
                      : x['shake' + t].create(n)
                  }),
                  (n.update = function(t, e, r, o) {
                    return n.create(e, r, o).update(t)
                  }),
                  B(n, m, t, e)
                )
              },
            },
            {
              name: 'kmac',
              padding: p,
              bits: b,
              createMethod: function(t, e) {
                var r = A[t],
                  n = _(t, 0, 'hex')
                return (
                  (n.create = function(n, o, i) {
                    return new W(t, e, o)
                      .bytepad(['KMAC', i], r)
                      .bytepad([n], r)
                  }),
                  (n.update = function(t, e, r, o) {
                    return n.create(t, r, o).update(e)
                  }),
                  B(n, _, t, e)
                )
              },
            },
          ],
          x = {},
          M = [],
          O = 0;
        O < S.length;
        ++O
      )
        for (var j = S[O], C = j.bits, z = 0; z < C.length; ++z) {
          var E = j.name + '_' + C[z]
          if (
            (M.push(E),
            (x[E] = j.createMethod(C[z], j.padding)),
            'sha3' !== j.name)
          ) {
            var N = j.name + C[z]
            M.push(N), (x[N] = x[E])
          }
        }
      function U(t, e, r) {
        ;(this.blocks = []),
          (this.s = []),
          (this.padding = e),
          (this.outputBits = r),
          (this.reset = !0),
          (this.finalized = !1),
          (this.block = 0),
          (this.start = 0),
          (this.blockCount = (1600 - (t << 1)) >> 5),
          (this.byteCount = this.blockCount << 2),
          (this.outputBlocks = r >> 5),
          (this.extraBytes = (31 & r) >> 3)
        for (var n = 0; n < 50; ++n) this.s[n] = 0
      }
      function W(t, e, r) {
        U.call(this, t, e, r)
      }
      ;(U.prototype.update = function(t) {
        if (this.finalized) throw new Error('finalize already called')
        var e,
          r = typeof t
        if ('string' !== r) {
          if ('object' !== r) throw new Error(o)
          if (null === t) throw new Error(o)
          if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t)
          else if (!(Array.isArray(t) || (c && ArrayBuffer.isView(t))))
            throw new Error(o)
          e = !0
        }
        for (
          var n,
            i,
            a = this.blocks,
            s = this.byteCount,
            u = t.length,
            f = this.blockCount,
            h = 0,
            p = this.s;
          h < u;

        ) {
          if (this.reset)
            for (this.reset = !1, a[0] = this.block, n = 1; n < f + 1; ++n)
              a[n] = 0
          if (e)
            for (n = this.start; h < u && n < s; ++h)
              a[n >> 2] |= t[h] << l[3 & n++]
          else
            for (n = this.start; h < u && n < s; ++h)
              (i = t.charCodeAt(h)) < 128
                ? (a[n >> 2] |= i << l[3 & n++])
                : i < 2048
                ? ((a[n >> 2] |= (192 | (i >> 6)) << l[3 & n++]),
                  (a[n >> 2] |= (128 | (63 & i)) << l[3 & n++]))
                : i < 55296 || i >= 57344
                ? ((a[n >> 2] |= (224 | (i >> 12)) << l[3 & n++]),
                  (a[n >> 2] |= (128 | ((i >> 6) & 63)) << l[3 & n++]),
                  (a[n >> 2] |= (128 | (63 & i)) << l[3 & n++]))
                : ((i =
                    65536 + (((1023 & i) << 10) | (1023 & t.charCodeAt(++h)))),
                  (a[n >> 2] |= (240 | (i >> 18)) << l[3 & n++]),
                  (a[n >> 2] |= (128 | ((i >> 12) & 63)) << l[3 & n++]),
                  (a[n >> 2] |= (128 | ((i >> 6) & 63)) << l[3 & n++]),
                  (a[n >> 2] |= (128 | (63 & i)) << l[3 & n++]))
          if (((this.lastByteIndex = n), n >= s)) {
            for (this.start = n - s, this.block = a[f], n = 0; n < f; ++n)
              p[n] ^= a[n]
            I(p), (this.reset = !0)
          } else this.start = n
        }
        return this
      }),
        (U.prototype.encode = function(t, e) {
          var r = 255 & t,
            n = 1,
            o = [r]
          for (r = 255 & (t >>= 8); r > 0; )
            o.unshift(r), (r = 255 & (t >>= 8)), ++n
          return e ? o.push(n) : o.unshift(n), this.update(o), o.length
        }),
        (U.prototype.encodeString = function(t) {
          var e,
            r = typeof t
          if ('string' !== r) {
            if ('object' !== r) throw new Error(o)
            if (null === t) throw new Error(o)
            if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t)
            else if (!(Array.isArray(t) || (c && ArrayBuffer.isView(t))))
              throw new Error(o)
            e = !0
          }
          var n = 0,
            i = t.length
          if (e) n = i
          else
            for (var a = 0; a < t.length; ++a) {
              var s = t.charCodeAt(a)
              s < 128
                ? (n += 1)
                : s < 2048
                ? (n += 2)
                : s < 55296 || s >= 57344
                ? (n += 3)
                : ((s =
                    65536 + (((1023 & s) << 10) | (1023 & t.charCodeAt(++a)))),
                  (n += 4))
            }
          return (n += this.encode(8 * n)), this.update(t), n
        }),
        (U.prototype.bytepad = function(t, e) {
          for (var r = this.encode(e), n = 0; n < t.length; ++n)
            r += this.encodeString(t[n])
          var o = e - (r % e),
            i = []
          return (i.length = o), this.update(i), this
        }),
        (U.prototype.finalize = function() {
          if (!this.finalized) {
            this.finalized = !0
            var t = this.blocks,
              e = this.lastByteIndex,
              r = this.blockCount,
              n = this.s
            if (
              ((t[e >> 2] |= this.padding[3 & e]),
              this.lastByteIndex === this.byteCount)
            )
              for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0
            for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e]
            I(n)
          }
        }),
        (U.prototype.toString = U.prototype.hex = function() {
          this.finalize()
          for (
            var t,
              e = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              o = this.extraBytes,
              i = 0,
              a = 0,
              s = '';
            a < n;

          ) {
            for (i = 0; i < e && a < n; ++i, ++a)
              (t = r[i]),
                (s +=
                  h[(t >> 4) & 15] +
                  h[15 & t] +
                  h[(t >> 12) & 15] +
                  h[(t >> 8) & 15] +
                  h[(t >> 20) & 15] +
                  h[(t >> 16) & 15] +
                  h[(t >> 28) & 15] +
                  h[(t >> 24) & 15])
            a % e == 0 && (I(r), (i = 0))
          }
          return (
            o &&
              ((t = r[i]),
              (s += h[(t >> 4) & 15] + h[15 & t]),
              o > 1 && (s += h[(t >> 12) & 15] + h[(t >> 8) & 15]),
              o > 2 && (s += h[(t >> 20) & 15] + h[(t >> 16) & 15])),
            s
          )
        }),
        (U.prototype.arrayBuffer = function() {
          this.finalize()
          var t,
            e = this.blockCount,
            r = this.s,
            n = this.outputBlocks,
            o = this.extraBytes,
            i = 0,
            a = 0,
            s = this.outputBits >> 3
          t = o ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(s)
          for (var u = new Uint32Array(t); a < n; ) {
            for (i = 0; i < e && a < n; ++i, ++a) u[a] = r[i]
            a % e == 0 && I(r)
          }
          return o && ((u[i] = r[i]), (t = t.slice(0, s))), t
        }),
        (U.prototype.buffer = U.prototype.arrayBuffer),
        (U.prototype.digest = U.prototype.array = function() {
          this.finalize()
          for (
            var t,
              e,
              r = this.blockCount,
              n = this.s,
              o = this.outputBlocks,
              i = this.extraBytes,
              a = 0,
              s = 0,
              u = [];
            s < o;

          ) {
            for (a = 0; a < r && s < o; ++a, ++s)
              (t = s << 2),
                (e = n[a]),
                (u[t] = 255 & e),
                (u[t + 1] = (e >> 8) & 255),
                (u[t + 2] = (e >> 16) & 255),
                (u[t + 3] = (e >> 24) & 255)
            s % r == 0 && I(n)
          }
          return (
            i &&
              ((t = s << 2),
              (e = n[a]),
              (u[t] = 255 & e),
              i > 1 && (u[t + 1] = (e >> 8) & 255),
              i > 2 && (u[t + 2] = (e >> 16) & 255)),
            u
          )
        }),
        (W.prototype = new U()),
        (W.prototype.finalize = function() {
          return (
            this.encode(this.outputBits, !0), U.prototype.finalize.call(this)
          )
        })
      var I = function(t) {
        var e,
          r,
          n,
          o,
          i,
          a,
          s,
          u,
          f,
          c,
          h,
          p,
          l,
          d,
          b,
          v,
          A,
          w,
          g,
          m,
          _,
          B,
          k,
          S,
          x,
          M,
          O,
          j,
          C,
          z,
          E,
          N,
          U,
          W,
          I,
          J,
          P,
          D,
          H,
          R,
          V,
          F,
          T,
          Y,
          q,
          K,
          L,
          G,
          Q,
          X,
          Z,
          $,
          tt,
          et,
          rt,
          nt,
          ot,
          it,
          at,
          st,
          ut,
          ft,
          ct
        for (n = 0; n < 48; n += 2)
          (o = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
            (i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
            (a = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
            (s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
            (u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
            (f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
            (c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
            (h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
            (e =
              (p = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
              ((a << 1) | (s >>> 31))),
            (r =
              (l = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
              ((s << 1) | (a >>> 31))),
            (t[0] ^= e),
            (t[1] ^= r),
            (t[10] ^= e),
            (t[11] ^= r),
            (t[20] ^= e),
            (t[21] ^= r),
            (t[30] ^= e),
            (t[31] ^= r),
            (t[40] ^= e),
            (t[41] ^= r),
            (e = o ^ ((u << 1) | (f >>> 31))),
            (r = i ^ ((f << 1) | (u >>> 31))),
            (t[2] ^= e),
            (t[3] ^= r),
            (t[12] ^= e),
            (t[13] ^= r),
            (t[22] ^= e),
            (t[23] ^= r),
            (t[32] ^= e),
            (t[33] ^= r),
            (t[42] ^= e),
            (t[43] ^= r),
            (e = a ^ ((c << 1) | (h >>> 31))),
            (r = s ^ ((h << 1) | (c >>> 31))),
            (t[4] ^= e),
            (t[5] ^= r),
            (t[14] ^= e),
            (t[15] ^= r),
            (t[24] ^= e),
            (t[25] ^= r),
            (t[34] ^= e),
            (t[35] ^= r),
            (t[44] ^= e),
            (t[45] ^= r),
            (e = u ^ ((p << 1) | (l >>> 31))),
            (r = f ^ ((l << 1) | (p >>> 31))),
            (t[6] ^= e),
            (t[7] ^= r),
            (t[16] ^= e),
            (t[17] ^= r),
            (t[26] ^= e),
            (t[27] ^= r),
            (t[36] ^= e),
            (t[37] ^= r),
            (t[46] ^= e),
            (t[47] ^= r),
            (e = c ^ ((o << 1) | (i >>> 31))),
            (r = h ^ ((i << 1) | (o >>> 31))),
            (t[8] ^= e),
            (t[9] ^= r),
            (t[18] ^= e),
            (t[19] ^= r),
            (t[28] ^= e),
            (t[29] ^= r),
            (t[38] ^= e),
            (t[39] ^= r),
            (t[48] ^= e),
            (t[49] ^= r),
            (d = t[0]),
            (b = t[1]),
            (K = (t[11] << 4) | (t[10] >>> 28)),
            (L = (t[10] << 4) | (t[11] >>> 28)),
            (j = (t[20] << 3) | (t[21] >>> 29)),
            (C = (t[21] << 3) | (t[20] >>> 29)),
            (st = (t[31] << 9) | (t[30] >>> 23)),
            (ut = (t[30] << 9) | (t[31] >>> 23)),
            (F = (t[40] << 18) | (t[41] >>> 14)),
            (T = (t[41] << 18) | (t[40] >>> 14)),
            (W = (t[2] << 1) | (t[3] >>> 31)),
            (I = (t[3] << 1) | (t[2] >>> 31)),
            (v = (t[13] << 12) | (t[12] >>> 20)),
            (A = (t[12] << 12) | (t[13] >>> 20)),
            (G = (t[22] << 10) | (t[23] >>> 22)),
            (Q = (t[23] << 10) | (t[22] >>> 22)),
            (z = (t[33] << 13) | (t[32] >>> 19)),
            (E = (t[32] << 13) | (t[33] >>> 19)),
            (ft = (t[42] << 2) | (t[43] >>> 30)),
            (ct = (t[43] << 2) | (t[42] >>> 30)),
            (et = (t[5] << 30) | (t[4] >>> 2)),
            (rt = (t[4] << 30) | (t[5] >>> 2)),
            (J = (t[14] << 6) | (t[15] >>> 26)),
            (P = (t[15] << 6) | (t[14] >>> 26)),
            (w = (t[25] << 11) | (t[24] >>> 21)),
            (g = (t[24] << 11) | (t[25] >>> 21)),
            (X = (t[34] << 15) | (t[35] >>> 17)),
            (Z = (t[35] << 15) | (t[34] >>> 17)),
            (N = (t[45] << 29) | (t[44] >>> 3)),
            (U = (t[44] << 29) | (t[45] >>> 3)),
            (S = (t[6] << 28) | (t[7] >>> 4)),
            (x = (t[7] << 28) | (t[6] >>> 4)),
            (nt = (t[17] << 23) | (t[16] >>> 9)),
            (ot = (t[16] << 23) | (t[17] >>> 9)),
            (D = (t[26] << 25) | (t[27] >>> 7)),
            (H = (t[27] << 25) | (t[26] >>> 7)),
            (m = (t[36] << 21) | (t[37] >>> 11)),
            (_ = (t[37] << 21) | (t[36] >>> 11)),
            ($ = (t[47] << 24) | (t[46] >>> 8)),
            (tt = (t[46] << 24) | (t[47] >>> 8)),
            (Y = (t[8] << 27) | (t[9] >>> 5)),
            (q = (t[9] << 27) | (t[8] >>> 5)),
            (M = (t[18] << 20) | (t[19] >>> 12)),
            (O = (t[19] << 20) | (t[18] >>> 12)),
            (it = (t[29] << 7) | (t[28] >>> 25)),
            (at = (t[28] << 7) | (t[29] >>> 25)),
            (R = (t[38] << 8) | (t[39] >>> 24)),
            (V = (t[39] << 8) | (t[38] >>> 24)),
            (B = (t[48] << 14) | (t[49] >>> 18)),
            (k = (t[49] << 14) | (t[48] >>> 18)),
            (t[0] = d ^ (~v & w)),
            (t[1] = b ^ (~A & g)),
            (t[10] = S ^ (~M & j)),
            (t[11] = x ^ (~O & C)),
            (t[20] = W ^ (~J & D)),
            (t[21] = I ^ (~P & H)),
            (t[30] = Y ^ (~K & G)),
            (t[31] = q ^ (~L & Q)),
            (t[40] = et ^ (~nt & it)),
            (t[41] = rt ^ (~ot & at)),
            (t[2] = v ^ (~w & m)),
            (t[3] = A ^ (~g & _)),
            (t[12] = M ^ (~j & z)),
            (t[13] = O ^ (~C & E)),
            (t[22] = J ^ (~D & R)),
            (t[23] = P ^ (~H & V)),
            (t[32] = K ^ (~G & X)),
            (t[33] = L ^ (~Q & Z)),
            (t[42] = nt ^ (~it & st)),
            (t[43] = ot ^ (~at & ut)),
            (t[4] = w ^ (~m & B)),
            (t[5] = g ^ (~_ & k)),
            (t[14] = j ^ (~z & N)),
            (t[15] = C ^ (~E & U)),
            (t[24] = D ^ (~R & F)),
            (t[25] = H ^ (~V & T)),
            (t[34] = G ^ (~X & $)),
            (t[35] = Q ^ (~Z & tt)),
            (t[44] = it ^ (~st & ft)),
            (t[45] = at ^ (~ut & ct)),
            (t[6] = m ^ (~B & d)),
            (t[7] = _ ^ (~k & b)),
            (t[16] = z ^ (~N & S)),
            (t[17] = E ^ (~U & x)),
            (t[26] = R ^ (~F & W)),
            (t[27] = V ^ (~T & I)),
            (t[36] = X ^ (~$ & Y)),
            (t[37] = Z ^ (~tt & q)),
            (t[46] = st ^ (~ft & et)),
            (t[47] = ut ^ (~ct & rt)),
            (t[8] = B ^ (~d & v)),
            (t[9] = k ^ (~b & A)),
            (t[18] = N ^ (~S & M)),
            (t[19] = U ^ (~x & O)),
            (t[28] = F ^ (~W & J)),
            (t[29] = T ^ (~I & P)),
            (t[38] = $ ^ (~Y & K)),
            (t[39] = tt ^ (~q & L)),
            (t[48] = ft ^ (~et & nt)),
            (t[49] = ct ^ (~rt & ot)),
            (t[0] ^= y[n]),
            (t[1] ^= y[n + 1])
      }
      if (u) t.exports = x
      else {
        for (O = 0; O < M.length; ++O) a[M[O]] = x[M[O]]
        f &&
          (void 0 ===
            (n = function() {
              return x
            }.call(e, r, e, t)) ||
            (t.exports = n))
      }
    })()
  },
  function(t, e) {
    t.exports = function(t) {
      for (var e = 0, r = 0; r < t.length; r++, e += 8)
        if (0 !== t[r]) {
          e += Math.clz32(t[r]) - 24
          break
        }
      return e
    }
  },
  function(t, e) {
    ;(function(e) {
      t.exports = e
    }.call(this, {}))
  },
  function(t, e, r) {
    'use strict'
    r.r(e)
    var n = r(2),
      o = r.n(n),
      i = r(0)
    function a(t) {
      return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    !(function() {
      try {
        if (
          'object' ===
            ('undefined' == typeof WebAssembly
              ? 'undefined'
              : a(WebAssembly)) &&
          'function' == typeof WebAssembly.instantiate
        ) {
          var t = new WebAssembly.Module(
            Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
          )
          if (t instanceof WebAssembly.Module)
            new WebAssembly.Instance(t), WebAssembly.Instance
        }
      } catch (t) {}
    })()
    var s,
      u,
      f = r(1),
      c = (500,
      (s = function() {
        i.parentPort.postMessage({ cmd: 'current', workNonce: 0 })
      }),
      (u = 0),
      function() {
        var t = new Date().getTime()
        if (!(t - u < 500)) return (u = t), s.apply(void 0, arguments)
      })
    i.parentPort.on('message', function(t) {
      !(function(t, e) {
        var r = 0,
          n = Math.log2(e),
          i = (n = Math.ceil(n)),
          a = new ArrayBuffer(128),
          s = new Uint8Array(a, 64, 64),
          u = (function(t, e, r) {
            for (
              var n = new Uint8Array(t, r, e.length / 2), o = 0;
              o < e.length / 2;
              o++
            )
              n[o] = parseInt(e.substr(2 * o, 2), 16)
            return n
          })(a, t, 64),
          h = new Uint8Array(f.sha3_256.arrayBuffer(u))
        s.set(h)
        var p = new DataView(a, s.byteOffset, s.byteLength),
          l = 0
        do {
          p.setUint32(60, r)
          var y = new Uint8Array(f.sha3_256.arrayBuffer(s)),
            d = o()(y)
          if (d > l && (l = d) >= i) break
          r++, c()
        } while (l <= i)
      })(t.hash, t.targetDifficulty),
        i.parentPort.postMessage({ cmd: 'finished', workNonce: 0 })
    }),
      i.parentPort.postMessage({ cmd: 'ready' })
  },
])
