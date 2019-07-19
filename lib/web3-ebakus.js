/*!
 * Web3 module to add transaction PoW for Ebakus. v1.0.0
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @website https://www.ebakus.com/
 *
 * @copyright Ebakus 2019
 * @license MIT
 */
!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['web3-ebakus'] = t())
    : (e.Web3Ebakus = t())
})(global, function() {
  return (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var o = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 6))
    )
  })([
    function(e, t) {
      e.exports = require('eth-lib/lib/bytes')
    },
    function(e, t) {
      e.exports = require('eth-lib/lib/rlp')
    },
    function(e, t) {
      e.exports = require('eth-lib/lib/account')
    },
    function(e, t) {
      e.exports = require('eth-lib/lib/hash')
    },
    function(e, t) {
      e.exports = require('eth-lib/lib/nat')
    },
    function(e, t, n) {
      ;(function(t) {
        e.exports = function() {
          return new t('./node_modules/web3-ebakus/lib/calculateWorkNonce.js')
        }
      }.call(this, n(8).Worker))
    },
    function(e, t, n) {
      n(7), (e.exports = n(9))
    },
    function(e, t) {
      e.exports = require('@babel/polyfill')
    },
    function(e, t) {
      e.exports = require('worker_threads')
    },
    function(e, t, n) {
      'use strict'
      n.r(t)
      var r,
        o = n(1),
        a = n.n(o),
        u = n(0),
        c = n.n(u),
        i = n(2),
        s = n.n(i),
        l = n(3),
        f = n.n(l),
        b = n(4),
        d = n.n(b)
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var p = function(e) {
          return null == e
        },
        y = function(e) {
          for (; e && e.startsWith('0x0'); ) e = '0x'.concat(e.slice(3))
          return e
        },
        h = function(e) {
          return e.length % 2 == 1 && (e = e.replace('0x', '0x0')), e
        }
      function v(e) {
        return (v =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var g = (function() {
          try {
            if (
              'object' ===
                ('undefined' == typeof WebAssembly
                  ? 'undefined'
                  : v(WebAssembly)) &&
              'function' == typeof WebAssembly.instantiate
            ) {
              var e = new WebAssembly.Module(
                Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
              )
              if (e instanceof WebAssembly.Module)
                return (
                  new WebAssembly.Instance(e) instanceof WebAssembly.Instance
                )
            }
          } catch (e) {}
          return !1
        })(),
        x = n(5),
        w = n.n(x)
      function k(e) {
        return (k =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function j(e, t, n, r, o, a, u) {
        try {
          var c = e[a](u),
            i = c.value
        } catch (e) {
          return void n(e)
        }
        c.done ? t(i) : Promise.resolve(i).then(r, o)
      }
      t.default = function(e) {
        ;(e.eth.calculateWorkForTransaction = function(t, n, r, o) {
          var u = !1
          if (((o = o || function() {}), !g))
            return (
              (u = new Error(
                "Wasm is not supported by browser. CryptoNight can't load."
              )),
              o(u),
              Promise.reject(u)
            )
          if (!t)
            return (
              (u = new Error('No transaction object given!')),
              o(u),
              Promise.reject(u)
            )
          var i,
            s,
            l = ((i = regeneratorRuntime.mark(function t(u) {
              var i, s, l, f, b, d
              return regeneratorRuntime.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((i = 0),
                          (s = !1),
                          null !== r &&
                            'object' === k(r) &&
                            ((r.isRunning = function() {
                              return s
                            }),
                            (r.getCurrentWorkNonce = function() {
                              return i
                            }),
                            (r.kill = function() {
                              ;(s = !1),
                                (i = 0),
                                l && l.terminate(),
                                f && f('Worker terminated by user')
                            })),
                          (t.prev = 3),
                          n)
                        ) {
                          t.next = 8
                          break
                        }
                        return (t.next = 7), e.eth.suggestDifficulty(u.to)
                      case 7:
                        n = t.sent
                      case 8:
                        if (u.nonce || 0 === u.nonce) {
                          t.next = 12
                          break
                        }
                        return (t.next = 11), e.eth.getTransactionCount(u.to)
                      case 11:
                        u.nonce = t.sent
                      case 12:
                        return (
                          (u = e.extend.formatters.inputCallFormatter(u)),
                          (b = a.a.encode([
                            c.a.fromNat(u.nonce),
                            c.a.fromNat(u.gas),
                            u.to ? u.to.toLowerCase() : '',
                            c.a.fromNat(u.value || '0x'),
                            u.data || '0x',
                          ])),
                          (d = { hash: b, targetDifficulty: n }),
                          t.abrupt(
                            'return',
                            new Promise(function(t, n) {
                              ;(l = new w.a()),
                                (f = n),
                                l.on('message', function(n) {
                                  var r = n.cmd,
                                    a = n.workNonce
                                  switch (r) {
                                    case 'ready':
                                      ;(s = !0), l.postMessage(d)
                                      break
                                    case 'current':
                                      i = a
                                      break
                                    case 'finished':
                                      ;(u.workNonce = e.utils.numberToHex(a)),
                                        (i = u.workNonce),
                                        (s = !1),
                                        l.terminate(),
                                        o(null, u),
                                        t(u)
                                      break
                                    default:
                                      console.warn(
                                        'Unknown data from worker',
                                        n
                                      )
                                  }
                                }),
                                l.on('error', function(e) {
                                  throw e
                                }),
                                l.on('exit', function(e) {
                                  if (1 === e) return null
                                  var t = new Error(
                                    'Worker has stopped with code '.concat(e)
                                  )
                                  return o(t), Promise.reject(t)
                                })
                            })
                          )
                        )
                      case 18:
                        return (
                          (t.prev = 18),
                          (t.t0 = t.catch(3)),
                          o(t.t0),
                          t.abrupt('return', Promise.reject(t.t0))
                        )
                      case 22:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                this,
                [[3, 18]]
              )
            })),
            (s = function() {
              var e = this,
                t = arguments
              return new Promise(function(n, r) {
                var o = i.apply(e, t)
                function a(e) {
                  j(o, n, r, a, u, 'next', e)
                }
                function u(e) {
                  j(o, n, r, a, u, 'throw', e)
                }
                a(void 0)
              })
            }),
            function(e) {
              return s.apply(this, arguments)
            })
          return Promise.resolve(l(t))
        }),
          e.eth.extend({
            methods: [
              {
                name: 'suggestDifficulty',
                call: 'eth_suggestDifficulty',
                params: 1,
                inputFormatter: [e.utils.toChecksumAddress],
                outputFormatter: e.utils.toFloat,
              },
            ],
          })
        var t = e.eth.accounts._addAccountFunctions
        return (
          (e.eth.accounts._addAccountFunctions = function(n) {
            return (
              ((n = t.call(this, n)).signTransaction = function(e, t) {
                return (function(e, t, n) {
                  var o,
                    u = !1
                  if (((n = n || function() {}), !e))
                    return (
                      (u = new Error('No transaction object given!')),
                      n(u),
                      Promise.reject(u)
                    )
                  function i(e) {
                    if (
                      (e.gas || e.gasLimit || (u = new Error('gas is missing')),
                      (e.nonce < 0 ||
                        e.gas < 0 ||
                        e.workNonce < 0 ||
                        e.chainId < 0) &&
                        (u = new Error(
                          'Gas, gasPrice, nonce or chainId is lower than 0'
                        )),
                      u)
                    )
                      return n(u), Promise.reject(u)
                    try {
                      var i = (e = r.extend.formatters.inputCallFormatter(e))
                      ;(i.to = e.to || '0x'),
                        (i.data = e.data || '0x'),
                        (i.value = e.value || '0x'),
                        (i.chainId = r.utils.numberToHex(e.chainId))
                      var l = a.a.encode([
                          c.a.fromNat(i.nonce),
                          c.a.fromNat(i.workNonce || '0x'),
                          c.a.fromNat(i.gas),
                          i.to.toLowerCase(),
                          c.a.fromNat(i.value),
                          i.data,
                          c.a.fromNat(i.chainId || '0x1'),
                          '0x',
                          '0x',
                        ]),
                        b = f.a.keccak256(l),
                        m = s.a.makeSigner(
                          2 * d.a.toNumber(i.chainId || '0x1') + 35
                        )(f.a.keccak256(l), t),
                        p = a.a
                          .decode(l)
                          .slice(0, 6)
                          .concat(s.a.decodeSignature(m))
                      ;(p[6] = h(y(p[6]))),
                        (p[7] = h(y(p[7]))),
                        (p[8] = h(y(p[8])))
                      var v = a.a.encode(p),
                        g = a.a.decode(v)
                      o = {
                        messageHash: b,
                        v: y(g[6]),
                        r: y(g[7]),
                        s: y(g[8]),
                        rawTransaction: v,
                      }
                    } catch (e) {
                      return n(e), Promise.reject(e)
                    }
                    return n(null, o), o
                  }
                  return void 0 !== e.nonce && void 0 !== e.chainId
                    ? Promise.resolve(i(e))
                    : Promise.all([
                        p(e.chainId) ? r.eth.net.getId() : e.chainId,
                        p(e.nonce)
                          ? r.eth.getTransactionCount(
                              r.eth.accounts.privateKeyToAccount(t).address
                            )
                          : e.nonce,
                      ]).then(function(t) {
                        if (p(t[0]) || p(t[1]))
                          throw new Error(
                            "One of the values 'chainId', or 'nonce' couldn't be fetched: ".concat(
                              JSON.stringify(t)
                            )
                          )
                        return i(
                          (function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n)
                              'function' ==
                                typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                  Object.getOwnPropertySymbols(n).filter(
                                    function(e) {
                                      return Object.getOwnPropertyDescriptor(
                                        n,
                                        e
                                      ).enumerable
                                    }
                                  )
                                )),
                                r.forEach(function(t) {
                                  m(e, t, n[t])
                                })
                            }
                            return e
                          })({}, e, { chainId: t[0], nonce: t[1] })
                        )
                      })
                })(e, n.privateKey, t)
              }),
              (n.calculateWorkForTransaction =
                e.eth.calculateWorkForTransaction),
              n
            )
          }),
          (r = e),
          e.extend({
            property: 'db',
            methods: [
              {
                name: 'get',
                call: 'db_get',
                params: 5,
                inputFormatter: [
                  e.utils.inputAddressFormatter,
                  null,
                  null,
                  null,
                  e.utils.inputBlockNumberFormatter,
                ],
              },
              {
                name: 'select',
                call: 'db_select',
                params: 5,
                inputFormatter: [
                  e.utils.inputAddressFormatter,
                  null,
                  null,
                  null,
                  e.utils.inputBlockNumberFormatter,
                ],
              },
              {
                name: 'next',
                call: 'db_next',
                params: 1,
                inputFormatter: [null],
              },
            ],
          }),
          e
        )
      }
    },
  ]).default
})
