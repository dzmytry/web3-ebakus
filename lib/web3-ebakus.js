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
        c = n(0),
        i = n.n(c),
        u = n(2),
        s = n.n(u),
        f = n(3),
        l = n.n(f),
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
      function x(e) {
        return (x =
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
      var v = (function() {
          try {
            if (
              'object' ===
                ('undefined' == typeof WebAssembly
                  ? 'undefined'
                  : x(WebAssembly)) &&
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
        g = n(5),
        w = n.n(g)
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
      function j(e, t, n, r, o, a, c) {
        try {
          var i = e[a](c),
            u = i.value
        } catch (e) {
          return void n(e)
        }
        i.done ? t(u) : Promise.resolve(u).then(r, o)
      }
      t.default = function(e) {
        ;(e.eth.calculateWorkForTransaction = function(t, n, r, o) {
          var c = !1
          if (((o = o || function() {}), !v))
            return (
              (c = new Error(
                "Wasm is not supported by browser. CryptoNight can't load."
              )),
              o(c),
              Promise.reject(c)
            )
          if (!t)
            return (
              (c = new Error('No transaction object given!')),
              o(c),
              Promise.reject(c)
            )
          var u,
            s,
            f = ((u = regeneratorRuntime.mark(function t(c) {
              var u, s, f, l, b, d
              return regeneratorRuntime.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((u = 0),
                          (s = !1),
                          null !== r &&
                            'object' === k(r) &&
                            ((r.isRunning = function() {
                              return s
                            }),
                            (r.getCurrentWorkNonce = function() {
                              return u
                            }),
                            (r.kill = function() {
                              ;(s = !1),
                                (u = 0),
                                f && f.terminate(),
                                l && l('Worker terminated by user')
                            })),
                          (t.prev = 3),
                          n)
                        ) {
                          t.next = 8
                          break
                        }
                        return (t.next = 7), e.eth.suggestDifficulty(c.to)
                      case 7:
                        n = t.sent
                      case 8:
                        if (c.chainId) {
                          t.next = 12
                          break
                        }
                        return (t.next = 11), e.eth.net.getId()
                      case 11:
                        c.chainId = t.sent
                      case 12:
                        if (c.nonce || 0 === c.nonce) {
                          t.next = 16
                          break
                        }
                        return (t.next = 15), e.eth.getTransactionCount(c.to)
                      case 15:
                        c.nonce = t.sent
                      case 16:
                        return (
                          (c = e.extend.formatters.inputCallFormatter(c)),
                          (b = a.a.encode([
                            i.a.fromNat(c.nonce),
                            i.a.fromNat('0x'),
                            i.a.fromNat(c.gas),
                            c.to ? c.to.toLowerCase() : '',
                            i.a.fromNat(c.value || '0x'),
                            c.data || '0x',
                            i.a.fromNat(
                              e.utils.numberToHex(c.chainId) || '0x1'
                            ),
                            '0x',
                            '0x',
                          ])),
                          (d = { hash: b, targetDifficulty: n }),
                          t.abrupt(
                            'return',
                            new Promise(function(t, n) {
                              ;(f = new w.a()),
                                (l = n),
                                f.on('message', function(n) {
                                  var r = n.cmd,
                                    a = n.workNonce
                                  switch (r) {
                                    case 'ready':
                                      ;(s = !0), f.postMessage(d)
                                      break
                                    case 'current':
                                      u = a
                                      break
                                    case 'finished':
                                      ;(c.workNonce = e.utils.numberToHex(a)),
                                        (u = c.workNonce),
                                        (s = !1),
                                        f.terminate(),
                                        o(null, c),
                                        t(c)
                                      break
                                    default:
                                      console.warn(
                                        'Unknown data from worker',
                                        n
                                      )
                                  }
                                }),
                                f.on('error', function(e) {
                                  throw e
                                }),
                                f.on('exit', function(e) {
                                  if (1 === e) return null
                                  var t = new Error(
                                    'Worker has stopped with code '.concat(e)
                                  )
                                  return o(t), Promise.reject(t)
                                })
                            })
                          )
                        )
                      case 22:
                        return (
                          (t.prev = 22),
                          (t.t0 = t.catch(3)),
                          o(t.t0),
                          t.abrupt('return', Promise.reject(t.t0))
                        )
                      case 26:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                this,
                [[3, 22]]
              )
            })),
            (s = function() {
              var e = this,
                t = arguments
              return new Promise(function(n, r) {
                var o = u.apply(e, t)
                function a(e) {
                  j(o, n, r, a, c, 'next', e)
                }
                function c(e) {
                  j(o, n, r, a, c, 'throw', e)
                }
                a(void 0)
              })
            }),
            function(e) {
              return s.apply(this, arguments)
            })
          return Promise.resolve(f(t))
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
                    c = !1
                  if (((n = n || function() {}), !e))
                    return (
                      (c = new Error('No transaction object given!')),
                      n(c),
                      Promise.reject(c)
                    )
                  function u(e) {
                    if (
                      (e.gas || e.gasLimit || (c = new Error('gas is missing')),
                      (e.nonce < 0 ||
                        e.gas < 0 ||
                        e.workNonce < 0 ||
                        e.chainId < 0) &&
                        (c = new Error(
                          'Gas, gasPrice, nonce or chainId is lower than 0'
                        )),
                      c)
                    )
                      return n(c), Promise.reject(c)
                    try {
                      var u = (e = r.extend.formatters.inputCallFormatter(e))
                      ;(u.to = e.to || '0x'),
                        (u.data = e.data || '0x'),
                        (u.value = e.value || '0x'),
                        (u.chainId = r.utils.numberToHex(e.chainId))
                      var f = a.a.encode([
                          i.a.fromNat(u.nonce),
                          i.a.fromNat(u.workNonce || '0x'),
                          i.a.fromNat(u.gas),
                          u.to.toLowerCase(),
                          i.a.fromNat(u.value),
                          u.data,
                          i.a.fromNat(u.chainId || '0x1'),
                          '0x',
                          '0x',
                        ]),
                        b = l.a.keccak256(f),
                        m = s.a.makeSigner(
                          2 * d.a.toNumber(u.chainId || '0x1') + 35
                        )(l.a.keccak256(f), t),
                        p = a.a
                          .decode(f)
                          .slice(0, 6)
                          .concat(s.a.decodeSignature(m))
                      ;(p[6] = h(y(p[6]))),
                        (p[7] = h(y(p[7]))),
                        (p[8] = h(y(p[8])))
                      var x = a.a.encode(p),
                        v = a.a.decode(x)
                      o = {
                        messageHash: b,
                        v: y(v[6]),
                        r: y(v[7]),
                        s: y(v[8]),
                        rawTransaction: x,
                      }
                    } catch (e) {
                      return n(e), Promise.reject(e)
                    }
                    return n(null, o), o
                  }
                  return void 0 !== e.nonce && void 0 !== e.chainId
                    ? Promise.resolve(u(e))
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
                        return u(
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
          e
        )
      }
    },
  ]).default
})
