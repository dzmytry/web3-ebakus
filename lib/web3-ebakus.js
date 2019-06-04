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
      n((n.s = 7))
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
      }.call(this, n(6).Worker))
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
        d = n(4),
        b = n.n(d)
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
      var y = function(e) {
          return null == e
        },
        p = function(e) {
          for (; e && e.startsWith('0x0'); ) e = '0x'.concat(e.slice(3))
          return e
        },
        h = function(e) {
          return e.length % 2 == 1 && (e = e.replace('0x', '0x0')), e
        }
      function g(e) {
        return (g =
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
      var x = (function() {
          try {
            if (
              'object' ===
                ('undefined' == typeof WebAssembly
                  ? 'undefined'
                  : g(WebAssembly)) &&
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
        w = n(5),
        v = n.n(w)
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
      t.default = function(e) {
        ;(e.eth.calculateWorkForTransaction = function(t, n, r) {
          var o = !1
          return (
            (r = r || function() {}),
            x
              ? t
                ? Promise.resolve(
                    (function(t) {
                      if (
                        (n || (o = new Error('"targetDifficulty" is missing')),
                        t.gas || (o = new Error('"gas" is missing')),
                        (t.nonce < 0 || t.gas < 0 || t.chainId < 0) &&
                          (o = new Error(
                            'Gas, nonce or chainId is lower than 0'
                          )),
                        o)
                      )
                        return r(o), Promise.reject(o)
                      try {
                        t = e.extend.formatters.inputCallFormatter(t)
                        var c = {
                          hash: a.a.encode([
                            i.a.fromNat(t.nonce),
                            i.a.fromNat('0x'),
                            i.a.fromNat(t.gas),
                            t.to ? t.to.toLowerCase() : '',
                            i.a.fromNat(t.value || '0x'),
                            t.data || '0x',
                            i.a.fromNat(
                              e.utils.numberToHex(t.chainId) || '0x1'
                            ),
                            '0x',
                            '0x',
                          ]),
                          targetDifficulty: n,
                        }
                        return new Promise(function(n, o) {
                          var a = 0,
                            i = !1,
                            u = new v.a()
                          u.on('message', function(o) {
                            var s = o.cmd,
                              f = o.workNonce
                            switch (s) {
                              case 'ready':
                                ;(i = !0), u.postMessage(c)
                                break
                              case 'current':
                                a = f
                                break
                              case 'finished':
                                ;(t.workNonce = e.utils.numberToHex(f)),
                                  (i = !1),
                                  u.terminate(),
                                  r(null, t),
                                  n(t)
                                break
                              default:
                                console.warn('Unknown data from worker', o)
                            }
                          }),
                            'object' ===
                              ('undefined' == typeof ctrl
                                ? 'undefined'
                                : k(ctrl)) &&
                              ((ctrl.isRunning = function() {
                                return i
                              }),
                              (ctrl.getCurrentWorkNonce = function() {
                                return a
                              }),
                              (ctrl.kill = function() {
                                ;(i = !1),
                                  (a = 0),
                                  u.terminate(),
                                  o('Worker terminated by user')
                              })),
                            u.on('error', function(e) {
                              throw e
                            }),
                            u.on('exit', function(e) {
                              if (1 === e) return null
                              var t = new Error(
                                'Worker has stopped with code '.concat(e)
                              )
                              return r(t), Promise.reject(t)
                            })
                        })
                      } catch (e) {
                        return r(e), Promise.reject(e)
                      }
                    })(t)
                  )
                : ((o = new Error('No transaction object given!')),
                  r(o),
                  Promise.reject(o))
              : ((o = new Error(
                  "Wasm is not supported by browser. CryptoNight can't load."
                )),
                r(o),
                Promise.reject(o))
          )
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
                        d = l.a.keccak256(f),
                        m = s.a.makeSigner(
                          2 * b.a.toNumber(u.chainId || '0x1') + 35
                        )(l.a.keccak256(f), t),
                        y = a.a
                          .decode(f)
                          .slice(0, 6)
                          .concat(s.a.decodeSignature(m))
                      ;(y[6] = h(p(y[6]))),
                        (y[7] = h(p(y[7]))),
                        (y[8] = h(p(y[8])))
                      var g = a.a.encode(y),
                        x = a.a.decode(g)
                      o = {
                        messageHash: d,
                        v: p(x[6]),
                        r: p(x[7]),
                        s: p(x[8]),
                        rawTransaction: g,
                      }
                    } catch (e) {
                      return n(e), Promise.reject(e)
                    }
                    return n(null, o), o
                  }
                  return void 0 !== e.nonce && void 0 !== e.chainId
                    ? Promise.resolve(u(e))
                    : Promise.all([
                        y(e.chainId) ? r.eth.net.getId() : e.chainId,
                        y(e.nonce)
                          ? r.eth.getTransactionCount(
                              r.eth.accounts.privateKeyToAccount(t).address
                            )
                          : e.nonce,
                      ]).then(function(t) {
                        if (y(t[0]) || y(t[1]))
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
