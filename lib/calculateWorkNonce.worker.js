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
    r((r.s = 5))
})([
  function(t, e, r) {
    ;(function(n, o) {
      var i
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
        var u = 'input is invalid type',
          a = 'object' == typeof window,
          s = a ? window : {}
        s.JS_SHA3_NO_WINDOW && (a = !1)
        var f = !a && 'object' == typeof self
        !s.JS_SHA3_NO_NODE_JS &&
        'object' == typeof n &&
        n.versions &&
        n.versions.node
          ? (s = o)
          : f && (s = self)
        var c = !s.JS_SHA3_NO_COMMON_JS && 'object' == typeof t && t.exports,
          h = r(4),
          l = !s.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          p = '0123456789abcdef'.split(''),
          y = [4, 1024, 262144, 67108864],
          d = [0, 8, 16, 24],
          b = [
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
          v = [224, 256, 384, 512],
          w = [128, 256],
          m = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
          g = { 128: 168, 256: 136 }
        ;(!s.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function(t) {
            return '[object Array]' === Object.prototype.toString.call(t)
          }),
          !l ||
            (!s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function(t) {
              return (
                'object' == typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              )
            })
        for (
          var A = function(t, e, r) {
              return function(n) {
                return new W(t, e, t).update(n)[r]()
              }
            },
            _ = function(t, e, r) {
              return function(n, o) {
                return new W(t, e, o).update(n)[r]()
              }
            },
            B = function(t, e, r) {
              return function(e, n, o, i) {
                return O['cshake' + t].update(e, n, o, i)[r]()
              }
            },
            k = function(t, e, r) {
              return function(e, n, o, i) {
                return O['kmac' + t].update(e, n, o, i)[r]()
              }
            },
            S = function(t, e, r, n) {
              for (var o = 0; o < m.length; ++o) {
                var i = m[o]
                t[i] = e(r, n, i)
              }
              return t
            },
            x = function(t, e) {
              var r = A(t, e, 'hex')
              return (
                (r.create = function() {
                  return new W(t, e, t)
                }),
                (r.update = function(t) {
                  return r.create().update(t)
                }),
                S(r, A, t, e)
              )
            },
            M = [
              {
                name: 'keccak',
                padding: [1, 256, 65536, 16777216],
                bits: v,
                createMethod: x,
              },
              {
                name: 'sha3',
                padding: [6, 1536, 393216, 100663296],
                bits: v,
                createMethod: x,
              },
              {
                name: 'shake',
                padding: [31, 7936, 2031616, 520093696],
                bits: w,
                createMethod: function(t, e) {
                  var r = _(t, e, 'hex')
                  return (
                    (r.create = function(r) {
                      return new W(t, e, r)
                    }),
                    (r.update = function(t, e) {
                      return r.create(e).update(t)
                    }),
                    S(r, _, t, e)
                  )
                },
              },
              {
                name: 'cshake',
                padding: y,
                bits: w,
                createMethod: function(t, e) {
                  var r = g[t],
                    n = B(t, 0, 'hex')
                  return (
                    (n.create = function(n, o, i) {
                      return o || i
                        ? new W(t, e, n).bytepad([o, i], r)
                        : O['shake' + t].create(n)
                    }),
                    (n.update = function(t, e, r, o) {
                      return n.create(e, r, o).update(t)
                    }),
                    S(n, B, t, e)
                  )
                },
              },
              {
                name: 'kmac',
                padding: y,
                bits: w,
                createMethod: function(t, e) {
                  var r = g[t],
                    n = k(t, 0, 'hex')
                  return (
                    (n.create = function(n, o, i) {
                      return new I(t, e, o)
                        .bytepad(['KMAC', i], r)
                        .bytepad([n], r)
                    }),
                    (n.update = function(t, e, r, o) {
                      return n.create(t, r, o).update(e)
                    }),
                    S(n, k, t, e)
                  )
                },
              },
            ],
            O = {},
            T = [],
            j = 0;
          j < M.length;
          ++j
        )
          for (var C = M[j], E = C.bits, z = 0; z < E.length; ++z) {
            var N = C.name + '_' + E[z]
            if (
              (T.push(N),
              (O[N] = C.createMethod(E[z], C.padding)),
              'sha3' !== C.name)
            ) {
              var U = C.name + E[z]
              T.push(U), (O[U] = O[N])
            }
          }
        function W(t, e, r) {
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
        function I(t, e, r) {
          W.call(this, t, e, r)
        }
        ;(W.prototype.update = function(t) {
          if (this.finalized) throw new Error('finalize already called')
          var e,
            r = typeof t
          if ('string' !== r) {
            if ('object' !== r) throw new Error(u)
            if (null === t) throw new Error(u)
            if (l && t.constructor === ArrayBuffer) t = new Uint8Array(t)
            else if (!(Array.isArray(t) || (l && ArrayBuffer.isView(t))))
              throw new Error(u)
            e = !0
          }
          for (
            var n,
              o,
              i = this.blocks,
              a = this.byteCount,
              s = t.length,
              f = this.blockCount,
              c = 0,
              h = this.s;
            c < s;

          ) {
            if (this.reset)
              for (this.reset = !1, i[0] = this.block, n = 1; n < f + 1; ++n)
                i[n] = 0
            if (e)
              for (n = this.start; c < s && n < a; ++c)
                i[n >> 2] |= t[c] << d[3 & n++]
            else
              for (n = this.start; c < s && n < a; ++c)
                (o = t.charCodeAt(c)) < 128
                  ? (i[n >> 2] |= o << d[3 & n++])
                  : o < 2048
                  ? ((i[n >> 2] |= (192 | (o >> 6)) << d[3 & n++]),
                    (i[n >> 2] |= (128 | (63 & o)) << d[3 & n++]))
                  : o < 55296 || o >= 57344
                  ? ((i[n >> 2] |= (224 | (o >> 12)) << d[3 & n++]),
                    (i[n >> 2] |= (128 | ((o >> 6) & 63)) << d[3 & n++]),
                    (i[n >> 2] |= (128 | (63 & o)) << d[3 & n++]))
                  : ((o =
                      65536 +
                      (((1023 & o) << 10) | (1023 & t.charCodeAt(++c)))),
                    (i[n >> 2] |= (240 | (o >> 18)) << d[3 & n++]),
                    (i[n >> 2] |= (128 | ((o >> 12) & 63)) << d[3 & n++]),
                    (i[n >> 2] |= (128 | ((o >> 6) & 63)) << d[3 & n++]),
                    (i[n >> 2] |= (128 | (63 & o)) << d[3 & n++]))
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = i[f], n = 0; n < f; ++n)
                h[n] ^= i[n]
              J(h), (this.reset = !0)
            } else this.start = n
          }
          return this
        }),
          (W.prototype.encode = function(t, e) {
            var r = 255 & t,
              n = 1,
              o = [r]
            for (r = 255 & (t >>= 8); r > 0; )
              o.unshift(r), (r = 255 & (t >>= 8)), ++n
            return e ? o.push(n) : o.unshift(n), this.update(o), o.length
          }),
          (W.prototype.encodeString = function(t) {
            var e,
              r = typeof t
            if ('string' !== r) {
              if ('object' !== r) throw new Error(u)
              if (null === t) throw new Error(u)
              if (l && t.constructor === ArrayBuffer) t = new Uint8Array(t)
              else if (!(Array.isArray(t) || (l && ArrayBuffer.isView(t))))
                throw new Error(u)
              e = !0
            }
            var n = 0,
              o = t.length
            if (e) n = o
            else
              for (var i = 0; i < t.length; ++i) {
                var a = t.charCodeAt(i)
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & t.charCodeAt(++i)))),
                    (n += 4))
              }
            return (n += this.encode(8 * n)), this.update(t), n
          }),
          (W.prototype.bytepad = function(t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n)
              r += this.encodeString(t[n])
            var o = e - (r % e),
              i = []
            return (i.length = o), this.update(i), this
          }),
          (W.prototype.finalize = function() {
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
              J(n)
            }
          }),
          (W.prototype.toString = W.prototype.hex = function() {
            this.finalize()
            for (
              var t,
                e = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                o = this.extraBytes,
                i = 0,
                u = 0,
                a = '';
              u < n;

            ) {
              for (i = 0; i < e && u < n; ++i, ++u)
                (t = r[i]),
                  (a +=
                    p[(t >> 4) & 15] +
                    p[15 & t] +
                    p[(t >> 12) & 15] +
                    p[(t >> 8) & 15] +
                    p[(t >> 20) & 15] +
                    p[(t >> 16) & 15] +
                    p[(t >> 28) & 15] +
                    p[(t >> 24) & 15])
              u % e == 0 && (J(r), (i = 0))
            }
            return (
              o &&
                ((t = r[i]),
                (a += p[(t >> 4) & 15] + p[15 & t]),
                o > 1 && (a += p[(t >> 12) & 15] + p[(t >> 8) & 15]),
                o > 2 && (a += p[(t >> 20) & 15] + p[(t >> 16) & 15])),
              a
            )
          }),
          (W.prototype.arrayBuffer = function() {
            this.finalize()
            var t,
              e = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              o = this.extraBytes,
              i = 0,
              u = 0,
              a = this.outputBits >> 3
            t = o ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a)
            for (var s = new Uint32Array(t); u < n; ) {
              for (i = 0; i < e && u < n; ++i, ++u) s[u] = r[i]
              u % e == 0 && J(r)
            }
            return o && ((s[i] = r[i]), (t = t.slice(0, a))), t
          }),
          (W.prototype.buffer = W.prototype.arrayBuffer),
          (W.prototype.digest = W.prototype.array = function() {
            this.finalize()
            for (
              var t,
                e,
                r = this.blockCount,
                n = this.s,
                o = this.outputBlocks,
                i = this.extraBytes,
                u = 0,
                a = 0,
                s = [];
              a < o;

            ) {
              for (u = 0; u < r && a < o; ++u, ++a)
                (t = a << 2),
                  (e = n[u]),
                  (s[t] = 255 & e),
                  (s[t + 1] = (e >> 8) & 255),
                  (s[t + 2] = (e >> 16) & 255),
                  (s[t + 3] = (e >> 24) & 255)
              a % r == 0 && J(n)
            }
            return (
              i &&
                ((t = a << 2),
                (e = n[u]),
                (s[t] = 255 & e),
                i > 1 && (s[t + 1] = (e >> 8) & 255),
                i > 2 && (s[t + 2] = (e >> 16) & 255)),
              s
            )
          }),
          (I.prototype = new W()),
          (I.prototype.finalize = function() {
            return (
              this.encode(this.outputBits, !0), W.prototype.finalize.call(this)
            )
          })
        var J = function(t) {
          var e,
            r,
            n,
            o,
            i,
            u,
            a,
            s,
            f,
            c,
            h,
            l,
            p,
            y,
            d,
            v,
            w,
            m,
            g,
            A,
            _,
            B,
            k,
            S,
            x,
            M,
            O,
            T,
            j,
            C,
            E,
            z,
            N,
            U,
            W,
            I,
            J,
            D,
            H,
            L,
            R,
            V,
            F,
            P,
            Y,
            K,
            q,
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
            ut,
            at,
            st,
            ft,
            ct
          for (n = 0; n < 48; n += 2)
            (o = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (u = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (s = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (e =
                (l = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
                ((u << 1) | (a >>> 31))),
              (r =
                (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
                ((a << 1) | (u >>> 31))),
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
              (e = o ^ ((s << 1) | (f >>> 31))),
              (r = i ^ ((f << 1) | (s >>> 31))),
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
              (e = u ^ ((c << 1) | (h >>> 31))),
              (r = a ^ ((h << 1) | (c >>> 31))),
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
              (e = s ^ ((l << 1) | (p >>> 31))),
              (r = f ^ ((p << 1) | (l >>> 31))),
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
              (y = t[0]),
              (d = t[1]),
              (K = (t[11] << 4) | (t[10] >>> 28)),
              (q = (t[10] << 4) | (t[11] >>> 28)),
              (T = (t[20] << 3) | (t[21] >>> 29)),
              (j = (t[21] << 3) | (t[20] >>> 29)),
              (at = (t[31] << 9) | (t[30] >>> 23)),
              (st = (t[30] << 9) | (t[31] >>> 23)),
              (V = (t[40] << 18) | (t[41] >>> 14)),
              (F = (t[41] << 18) | (t[40] >>> 14)),
              (U = (t[2] << 1) | (t[3] >>> 31)),
              (W = (t[3] << 1) | (t[2] >>> 31)),
              (v = (t[13] << 12) | (t[12] >>> 20)),
              (w = (t[12] << 12) | (t[13] >>> 20)),
              (G = (t[22] << 10) | (t[23] >>> 22)),
              (Q = (t[23] << 10) | (t[22] >>> 22)),
              (C = (t[33] << 13) | (t[32] >>> 19)),
              (E = (t[32] << 13) | (t[33] >>> 19)),
              (ft = (t[42] << 2) | (t[43] >>> 30)),
              (ct = (t[43] << 2) | (t[42] >>> 30)),
              (et = (t[5] << 30) | (t[4] >>> 2)),
              (rt = (t[4] << 30) | (t[5] >>> 2)),
              (I = (t[14] << 6) | (t[15] >>> 26)),
              (J = (t[15] << 6) | (t[14] >>> 26)),
              (m = (t[25] << 11) | (t[24] >>> 21)),
              (g = (t[24] << 11) | (t[25] >>> 21)),
              (X = (t[34] << 15) | (t[35] >>> 17)),
              (Z = (t[35] << 15) | (t[34] >>> 17)),
              (z = (t[45] << 29) | (t[44] >>> 3)),
              (N = (t[44] << 29) | (t[45] >>> 3)),
              (S = (t[6] << 28) | (t[7] >>> 4)),
              (x = (t[7] << 28) | (t[6] >>> 4)),
              (nt = (t[17] << 23) | (t[16] >>> 9)),
              (ot = (t[16] << 23) | (t[17] >>> 9)),
              (D = (t[26] << 25) | (t[27] >>> 7)),
              (H = (t[27] << 25) | (t[26] >>> 7)),
              (A = (t[36] << 21) | (t[37] >>> 11)),
              (_ = (t[37] << 21) | (t[36] >>> 11)),
              ($ = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (P = (t[8] << 27) | (t[9] >>> 5)),
              (Y = (t[9] << 27) | (t[8] >>> 5)),
              (M = (t[18] << 20) | (t[19] >>> 12)),
              (O = (t[19] << 20) | (t[18] >>> 12)),
              (it = (t[29] << 7) | (t[28] >>> 25)),
              (ut = (t[28] << 7) | (t[29] >>> 25)),
              (L = (t[38] << 8) | (t[39] >>> 24)),
              (R = (t[39] << 8) | (t[38] >>> 24)),
              (B = (t[48] << 14) | (t[49] >>> 18)),
              (k = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = y ^ (~v & m)),
              (t[1] = d ^ (~w & g)),
              (t[10] = S ^ (~M & T)),
              (t[11] = x ^ (~O & j)),
              (t[20] = U ^ (~I & D)),
              (t[21] = W ^ (~J & H)),
              (t[30] = P ^ (~K & G)),
              (t[31] = Y ^ (~q & Q)),
              (t[40] = et ^ (~nt & it)),
              (t[41] = rt ^ (~ot & ut)),
              (t[2] = v ^ (~m & A)),
              (t[3] = w ^ (~g & _)),
              (t[12] = M ^ (~T & C)),
              (t[13] = O ^ (~j & E)),
              (t[22] = I ^ (~D & L)),
              (t[23] = J ^ (~H & R)),
              (t[32] = K ^ (~G & X)),
              (t[33] = q ^ (~Q & Z)),
              (t[42] = nt ^ (~it & at)),
              (t[43] = ot ^ (~ut & st)),
              (t[4] = m ^ (~A & B)),
              (t[5] = g ^ (~_ & k)),
              (t[14] = T ^ (~C & z)),
              (t[15] = j ^ (~E & N)),
              (t[24] = D ^ (~L & V)),
              (t[25] = H ^ (~R & F)),
              (t[34] = G ^ (~X & $)),
              (t[35] = Q ^ (~Z & tt)),
              (t[44] = it ^ (~at & ft)),
              (t[45] = ut ^ (~st & ct)),
              (t[6] = A ^ (~B & y)),
              (t[7] = _ ^ (~k & d)),
              (t[16] = C ^ (~z & S)),
              (t[17] = E ^ (~N & x)),
              (t[26] = L ^ (~V & U)),
              (t[27] = R ^ (~F & W)),
              (t[36] = X ^ (~$ & P)),
              (t[37] = Z ^ (~tt & Y)),
              (t[46] = at ^ (~ft & et)),
              (t[47] = st ^ (~ct & rt)),
              (t[8] = B ^ (~y & v)),
              (t[9] = k ^ (~d & w)),
              (t[18] = z ^ (~S & M)),
              (t[19] = N ^ (~x & O)),
              (t[28] = V ^ (~U & I)),
              (t[29] = F ^ (~W & J)),
              (t[38] = $ ^ (~P & K)),
              (t[39] = tt ^ (~Y & q)),
              (t[48] = ft ^ (~et & nt)),
              (t[49] = ct ^ (~rt & ot)),
              (t[0] ^= b[n]),
              (t[1] ^= b[n + 1])
        }
        if (c) t.exports = O
        else {
          for (j = 0; j < T.length; ++j) s[T[j]] = O[T[j]]
          h &&
            (void 0 ===
              (i = function() {
                return O
              }.call(e, r, e, t)) ||
              (t.exports = i))
        }
      })()
    }.call(this, r(2), r(3)))
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
    var r,
      n,
      o = (t.exports = {})
    function i() {
      throw new Error('setTimeout has not been defined')
    }
    function u() {
      throw new Error('clearTimeout has not been defined')
    }
    function a(t) {
      if (r === setTimeout) return setTimeout(t, 0)
      if ((r === i || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0)
      try {
        return r(t, 0)
      } catch (e) {
        try {
          return r.call(null, t, 0)
        } catch (e) {
          return r.call(this, t, 0)
        }
      }
    }
    !(function() {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : i
      } catch (t) {
        r = i
      }
      try {
        n = 'function' == typeof clearTimeout ? clearTimeout : u
      } catch (t) {
        n = u
      }
    })()
    var s,
      f = [],
      c = !1,
      h = -1
    function l() {
      c &&
        s &&
        ((c = !1), s.length ? (f = s.concat(f)) : (h = -1), f.length && p())
    }
    function p() {
      if (!c) {
        var t = a(l)
        c = !0
        for (var e = f.length; e; ) {
          for (s = f, f = []; ++h < e; ) s && s[h].run()
          ;(h = -1), (e = f.length)
        }
        ;(s = null),
          (c = !1),
          (function(t) {
            if (n === clearTimeout) return clearTimeout(t)
            if ((n === u || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t)
            try {
              n(t)
            } catch (e) {
              try {
                return n.call(null, t)
              } catch (e) {
                return n.call(this, t)
              }
            }
          })(t)
      }
    }
    function y(t, e) {
      ;(this.fun = t), (this.array = e)
    }
    function d() {}
    ;(o.nextTick = function(t) {
      var e = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]
      f.push(new y(t, e)), 1 !== f.length || c || a(p)
    }),
      (y.prototype.run = function() {
        this.fun.apply(null, this.array)
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = d),
      (o.addListener = d),
      (o.once = d),
      (o.off = d),
      (o.removeListener = d),
      (o.removeAllListeners = d),
      (o.emit = d),
      (o.prependListener = d),
      (o.prependOnceListener = d),
      (o.listeners = function(t) {
        return []
      }),
      (o.binding = function(t) {
        throw new Error('process.binding is not supported')
      }),
      (o.cwd = function() {
        return '/'
      }),
      (o.chdir = function(t) {
        throw new Error('process.chdir is not supported')
      }),
      (o.umask = function() {
        return 0
      })
  },
  function(t, e) {
    var r
    r = (function() {
      return this
    })()
    try {
      r = r || new Function('return this')()
    } catch (t) {
      'object' == typeof window && (r = window)
    }
    t.exports = r
  },
  function(t, e) {
    ;(function(e) {
      t.exports = e
    }.call(this, {}))
  },
  function(t, e, r) {
    'use strict'
    r.r(e)
    var n = r(1),
      o = r.n(n)
    function i(t) {
      return (i =
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
              : i(WebAssembly)) &&
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
    var u = r(0)
    ;(onmessage = function(t) {
      var e,
        r,
        n = t.data,
        i = n.hash,
        a = n.targetDifficulty,
        s = 0,
        f = (500,
        (e = function() {
          postMessage({ cmd: 'current', workNonce: s })
        }),
        (r = 0),
        function() {
          var t = new Date().getTime()
          if (!(t - r < 500)) return (r = t), e.apply(void 0, arguments)
        })
      !(function() {
        var t = Math.log2(a),
          e = (t = Math.ceil(t))
        i = i.slice(2)
        var r = new ArrayBuffer(128),
          n = new Uint8Array(r, 64, 64),
          c = (function(t, e, r) {
            for (
              var n = new Uint8Array(t, r, e.length / 2), o = 0;
              o < e.length / 2;
              o++
            )
              n[o] = parseInt(e.substr(2 * o, 2), 16)
            return n
          })(r, i, 64),
          h = new Uint8Array(u.sha3_256.arrayBuffer(c))
        n.set(h)
        var l = new DataView(r, n.byteOffset, n.byteLength),
          p = 0
        do {
          l.setUint32(60, s)
          var y = new Uint8Array(u.sha3_256.arrayBuffer(n)),
            d = o()(y)
          if (d > p && (p = d) >= e) break
          s++, f()
        } while (p <= e)
      })(),
        postMessage({ cmd: 'finished', workNonce: s })
    }),
      postMessage({ cmd: 'ready' })
  },
])
