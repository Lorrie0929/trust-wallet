try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e.l = e.l || {}, e.l[n] = "edfed7cc-60a5-427a-bbac-69e2fc27fdae", e.u = "sentry-dbid-edfed7cc-60a5-427a-bbac-69e2fc27fdae")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (() => {
  var e, n, t = {
      4146: (e, n, t) => {
        "use strict";
        var r = t(44363),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
          },
          a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
          },
          s = {};

        function l(e) {
          return r.isMemo(e) ? a : s[e.$$typeof] || i
        }
        s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
        }, s[r.Memo] = a;
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          h = Object.getOwnPropertyDescriptor,
          d = Object.getPrototypeOf,
          p = Object.prototype;
        e.exports = function e(n, t, r) {
          if ("string" != typeof t) {
            if (p) {
              var i = d(t);
              i && i !== p && e(n, i, r)
            }
            var a = c(t);
            f && (a = a.concat(f(t)));
            for (var s = l(n), g = l(t), A = 0; A < a.length; ++A) {
              var m = a[A];
              if (!(o[m] || r && r[m] || g && g[m] || s && s[m])) {
                var v = h(t, m);
                try {
                  u(n, m, v)
                } catch {}
              }
            }
          }
          return n
        }
      },
      6221: (e, n, t) => {
        "use strict";
        var r = t(96540);

        function i(e) {
          var n = "https://react.dev/errors/" + e;
          if (arguments.length > 1) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; arguments.length > t; t++) n += "&args[]=" + encodeURIComponent(arguments[t])
          }
          return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }

        function o() {}
        var a = {
            d: {
              f: o,
              r: function() {
                throw Error(i(522))
              },
              D: o,
              C: o,
              L: o,
              m: o,
              X: o,
              S: o,
              M: o
            },
            p: 0,
            findDOMNode: null
          },
          s = Symbol.for("react.portal"),
          l = r.h;

        function u(e, n) {
          return "font" === e ? "" : "string" == typeof n ? "use-credentials" === n ? n : "" : void 0
        }
        n.v = a, n.createPortal = function(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          if (!n || 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType) throw Error(i(299));
          return function(e, n, t) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return {
              $$typeof: s,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: n,
              implementation: t
            }
          }(e, n, null, t)
        }, n.flushSync = function(e) {
          var n = l.T,
            t = a.p;
          try {
            if (l.T = null, a.p = 2, e) return e()
          } finally {
            l.T = n, a.p = t, a.d.f()
          }
        }, n.preconnect = function(e, n) {
          "string" == typeof e && (n = n ? "string" == typeof(n = n.crossOrigin) ? "use-credentials" === n ? n : "" : void 0 : null, a.d.C(e, n))
        }, n.prefetchDNS = function(e) {
          "string" == typeof e && a.d.D(e)
        }, n.preinit = function(e, n) {
          if ("string" == typeof e && n && "string" == typeof n.as) {
            var t = n.as,
              r = u(t, n.crossOrigin),
              i = "string" == typeof n.integrity ? n.integrity : void 0,
              o = "string" == typeof n.fetchPriority ? n.fetchPriority : void 0;
            "style" === t ? a.d.S(e, "string" == typeof n.precedence ? n.precedence : void 0, {
              crossOrigin: r,
              integrity: i,
              fetchPriority: o
            }) : "script" === t && a.d.X(e, {
              crossOrigin: r,
              integrity: i,
              fetchPriority: o,
              nonce: "string" == typeof n.nonce ? n.nonce : void 0
            })
          }
        }, n.preinitModule = function(e, n) {
          if ("string" == typeof e)
            if ("object" == typeof n && null !== n) {
              if (null == n.as || "script" === n.as) {
                var t = u(n.as, n.crossOrigin);
                a.d.M(e, {
                  crossOrigin: t,
                  integrity: "string" == typeof n.integrity ? n.integrity : void 0,
                  nonce: "string" == typeof n.nonce ? n.nonce : void 0
                })
              }
            } else null == n && a.d.M(e)
        }, n.preload = function(e, n) {
          if ("string" == typeof e && "object" == typeof n && null !== n && "string" == typeof n.as) {
            var t = n.as,
              r = u(t, n.crossOrigin);
            a.d.L(e, t, {
              crossOrigin: r,
              integrity: "string" == typeof n.integrity ? n.integrity : void 0,
              nonce: "string" == typeof n.nonce ? n.nonce : void 0,
              type: "string" == typeof n.type ? n.type : void 0,
              fetchPriority: "string" == typeof n.fetchPriority ? n.fetchPriority : void 0,
              referrerPolicy: "string" == typeof n.referrerPolicy ? n.referrerPolicy : void 0,
              imageSrcSet: "string" == typeof n.imageSrcSet ? n.imageSrcSet : void 0,
              imageSizes: "string" == typeof n.imageSizes ? n.imageSizes : void 0,
              media: "string" == typeof n.media ? n.media : void 0
            })
          }
        }, n.preloadModule = function(e, n) {
          if ("string" == typeof e)
            if (n) {
              var t = u(n.as, n.crossOrigin);
              a.d.m(e, {
                as: "string" == typeof n.as && "script" !== n.as ? n.as : void 0,
                crossOrigin: t,
                integrity: "string" == typeof n.integrity ? n.integrity : void 0
              })
            } else a.d.m(e)
        }, n.requestFormReset = function(e) {
          a.d.r(e)
        }, n.unstable_batchedUpdates = function(e, n) {
          return e(n)
        }, n.useFormState = function(e, n, t) {
          return l.H.useFormState(e, n, t)
        }, n.useFormStatus = function() {
          return l.H.useHostTransitionStatus()
        }, n.version = "19.0.0"
      },
      10540: e => {
        "use strict";
        e.exports = function(e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
        }
      },
      14545: (e, n) => {
        n.isatty = function() {
          return !1
        }, n.ReadStream = function() {
          throw Error("tty.ReadStream is not implemented")
        }, n.WriteStream = function() {
          throw Error("tty.WriteStream is not implemented")
        }
      },
      22799: (e, n) => {
        "use strict";
        var t = "function" == typeof Symbol && Symbol.for,
          r = t ? Symbol.for("react.element") : 60103,
          i = t ? Symbol.for("react.portal") : 60106,
          o = t ? Symbol.for("react.fragment") : 60107,
          a = t ? Symbol.for("react.strict_mode") : 60108,
          s = t ? Symbol.for("react.profiler") : 60114,
          l = t ? Symbol.for("react.provider") : 60109,
          u = t ? Symbol.for("react.context") : 60110,
          c = t ? Symbol.for("react.async_mode") : 60111,
          f = t ? Symbol.for("react.concurrent_mode") : 60111,
          h = t ? Symbol.for("react.forward_ref") : 60112,
          d = t ? Symbol.for("react.suspense") : 60113,
          p = t ? Symbol.for("react.suspense_list") : 60120,
          g = t ? Symbol.for("react.memo") : 60115,
          A = t ? Symbol.for("react.lazy") : 60116,
          m = t ? Symbol.for("react.block") : 60121,
          v = t ? Symbol.for("react.fundamental") : 60117,
          b = t ? Symbol.for("react.responder") : 60118,
          C = t ? Symbol.for("react.scope") : 60119;

        function y(e) {
          if ("object" == typeof e && null !== e) {
            var n = e.$$typeof;
            switch (n) {
              case r:
                switch (e = e.type) {
                  case c:
                  case f:
                  case o:
                  case s:
                  case a:
                  case d:
                    return e;
                  default:
                    switch (e = e && e.$$typeof) {
                      case u:
                      case h:
                      case A:
                      case g:
                      case l:
                        return e;
                      default:
                        return n
                    }
                }
              case i:
                return n
            }
          }
        }

        function k(e) {
          return y(e) === f
        }
        n.AsyncMode = c, n.ConcurrentMode = f, n.ContextConsumer = u, n.ContextProvider = l, n.Element = r, n.ForwardRef = h, n.Fragment = o, n.Lazy = A, n.Memo = g, n.Portal = i, n.Profiler = s, n.StrictMode = a, n.Suspense = d, n.isAsyncMode = function(e) {
          return k(e) || y(e) === c
        }, n.isConcurrentMode = k, n.isContextConsumer = function(e) {
          return y(e) === u
        }, n.isContextProvider = function(e) {
          return y(e) === l
        }, n.isElement = function(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r
        }, n.isForwardRef = function(e) {
          return y(e) === h
        }, n.isFragment = function(e) {
          return y(e) === o
        }, n.isLazy = function(e) {
          return y(e) === A
        }, n.isMemo = function(e) {
          return y(e) === g
        }, n.isPortal = function(e) {
          return y(e) === i
        }, n.isProfiler = function(e) {
          return y(e) === s
        }, n.isStrictMode = function(e) {
          return y(e) === a
        }, n.isSuspense = function(e) {
          return y(e) === d
        }, n.isValidElementType = function(e) {
          return "string" == typeof e || "function" == typeof e || e === o || e === f || e === s || e === a || e === d || e === p || "object" == typeof e && null !== e && (e.$$typeof === A || e.$$typeof === g || e.$$typeof === l || e.$$typeof === u || e.$$typeof === h || e.$$typeof === v || e.$$typeof === b || e.$$typeof === C || e.$$typeof === m)
        }, n.typeOf = y
      },
      29698: (e, n) => {
        "use strict";
        var t = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");

        function i(e, n, r) {
          var i = null;
          if (void 0 !== r && (i = "" + r), void 0 !== n.key && (i = "" + n.key), "key" in n)
            for (var o in r = {}, n) "key" !== o && (r[o] = n[o]);
          else r = n;
          return n = r.ref, {
            $$typeof: t,
            type: e,
            key: i,
            ref: void 0 !== n ? n : null,
            props: r
          }
        }
        n.Fragment = r, n.jsx = i, n.jsxs = i
      },
      29869: (e, n, t) => {
        "use strict";
        var r = t(65606),
          i = Symbol.for("react.transitional.element"),
          o = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          s = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          u = Symbol.for("react.consumer"),
          c = Symbol.for("react.context"),
          f = Symbol.for("react.forward_ref"),
          h = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          g = Symbol.iterator,
          A = {
            isMounted: function() {
              return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
          },
          m = Object.assign,
          v = {};

        function b(e, n, t) {
          this.props = e, this.context = n, this.refs = v, this.updater = t || A
        }

        function C() {}

        function y(e, n, t) {
          this.props = e, this.context = n, this.refs = v, this.updater = t || A
        }
        b.prototype.isReactComponent = {}, b.prototype.setState = function(e, n) {
          if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e, n, "setState")
        }, b.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, C.prototype = b.prototype;
        var k = y.prototype = new C;
        k.constructor = y, m(k, b.prototype), k.isPureReactComponent = !0;
        var w = Array.isArray,
          E = {
            H: null,
            A: null,
            T: null,
            S: null
          },
          B = {}.hasOwnProperty;

        function x(e, n, t, r, o, a) {
          return t = a.ref, {
            $$typeof: i,
            type: e,
            key: n,
            ref: void 0 !== t ? t : null,
            props: a
          }
        }

        function S(e) {
          return "object" == typeof e && null !== e && e.$$typeof === i
        }
        var L = /\/+/g;

        function F(e, n) {
          return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var n = {
              "=": "=0",
              ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(e) {
              return n[e]
            })
          }("" + e.key) : n.toString(36)
        }

        function T() {}

        function M(e, n, t, r, a) {
          var s = typeof e;
          ("undefined" === s || "boolean" === s) && (e = null);
          var l = !1;
          if (null === e) l = !0;
          else switch (s) {
            case "bigint":
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case i:
                case o:
                  l = !0;
                  break;
                case p:
                  return M((l = e.k)(e.B), n, t, r, a)
              }
          }
          if (l) return a = a(e), l = "" === r ? "." + F(e, 0) : r, w(a) ? (t = "", null != l && (t = l.replace(L, "$&/") + "/"), M(a, n, t, "", function(e) {
            return e
          })) : null != a && (S(a) && (a = function(e, n) {
            return x(e.type, n, void 0, 0, 0, e.props)
          }(a, t + (null == a.key || e && e.key === a.key ? "" : ("" + a.key).replace(L, "$&/") + "/") + l)), n.push(a)), 1;
          l = 0;
          var u = "" === r ? "." : r + ":";
          if (w(e))
            for (var c = 0; c < e.length; c++) l += M(r = e[c], n, t, s = u + F(r, c), a);
          else if (c = function(e) {
              return null === e || "object" != typeof e ? null : "function" == typeof(e = g && e[g] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof c)
            for (e = c.call(e), c = 0; !(r = e.next()).done;) l += M(r = r.value, n, t, s = u + F(r, c++), a);
          else if ("object" === s) {
            if ("function" == typeof e.then) return M(function(e) {
              switch (e.status) {
                case "fulfilled":
                  return e.value;
                case "rejected":
                  throw e.reason;
                default:
                  switch ("string" == typeof e.status ? e.then(T, T) : (e.status = "pending", e.then(function(n) {
                      "pending" === e.status && (e.status = "fulfilled", e.value = n)
                    }, function(n) {
                      "pending" === e.status && (e.status = "rejected", e.reason = n)
                    })), e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason
                  }
              }
              throw e
            }(e), n, t, r, a);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" == (n = e + "") ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.")
          }
          return l
        }

        function R(e, n, t) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return M(e, r, "", "", function(e) {
            return n.call(t, e, i++)
          }), r
        }

        function H(e) {
          if (-1 === e.F) {
            var n = e.R;
            (n = n()).then(function(n) {
              (0 === e.F || -1 === e.F) && (e.F = 1, e.R = n)
            }, function(n) {
              (0 === e.F || -1 === e.F) && (e.F = 2, e.R = n)
            }), -1 === e.F && (e.F = 0, e.R = n)
          }
          if (1 === e.F) return e.R.default;
          throw e.R
        }
        var N = "function" == typeof reportError ? reportError : function(e) {
          if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message: "object" == typeof e && null !== e && "string" == typeof e.message ? e.message + "" : e + "",
              error: e
            });
            if (!window.dispatchEvent(n)) return
          } else if ("object" == typeof r && "function" == typeof r.emit) return void r.emit("uncaughtException", e);
          console.error(e)
        };

        function I() {}
        n.Children = {
          map: R,
          forEach: function(e, n, t) {
            R(e, function() {
              n.apply(this, arguments)
            }, t)
          },
          count: function(e) {
            var n = 0;
            return R(e, function() {
              n++
            }), n
          },
          toArray: function(e) {
            return R(e, function(e) {
              return e
            }) || []
          },
          only: function(e) {
            if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
          }
        }, n.Component = b, n.Fragment = a, n.Profiler = l, n.PureComponent = y, n.StrictMode = s, n.Suspense = h, n.h = E, n.act = function() {
          throw Error("act(...) is not supported in production builds of React.")
        }, n.cache = function(e) {
          return function() {
            return e.apply(null, arguments)
          }
        }, n.cloneElement = function(e, n, t) {
          if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
          var r = m({}, e.props),
            i = e.key;
          if (null != n)
            for (o in n.ref, void 0 !== n.key && (i = "" + n.key), n) !B.call(n, o) || "key" === o || "__self" === o || "__source" === o || "ref" === o && void 0 === n.ref || (r[o] = n[o]);
          var o = arguments.length - 2;
          if (1 === o) r.children = t;
          else if (o > 1) {
            for (var a = Array(o), s = 0; o > s; s++) a[s] = arguments[s + 2];
            r.children = a
          }
          return x(e.type, i, void 0, 0, 0, r)
        }, n.createContext = function(e) {
          return (e = {
            $$typeof: c,
            N: e,
            I: e,
            _: 0,
            Provider: null,
            Consumer: null
          }).Provider = e, e.Consumer = {
            $$typeof: u,
            j: e
          }, e
        }, n.createElement = function(e, n, t) {
          var r, i = {},
            o = null;
          if (null != n)
            for (r in void 0 !== n.key && (o = "" + n.key), n) B.call(n, r) && "key" !== r && "__self" !== r && "__source" !== r && (i[r] = n[r]);
          var a = arguments.length - 2;
          if (1 === a) i.children = t;
          else if (a > 1) {
            for (var s = Array(a), l = 0; a > l; l++) s[l] = arguments[l + 2];
            i.children = s
          }
          if (e && e.defaultProps)
            for (r in a = e.defaultProps) void 0 === i[r] && (i[r] = a[r]);
          return x(e, o, void 0, 0, 0, i)
        }, n.createRef = function() {
          return {
            current: null
          }
        }, n.forwardRef = function(e) {
          return {
            $$typeof: f,
            render: e
          }
        }, n.isValidElement = S, n.lazy = function(e) {
          return {
            $$typeof: p,
            B: {
              F: -1,
              R: e
            },
            k: H
          }
        }, n.memo = function(e, n) {
          return {
            $$typeof: d,
            type: e,
            compare: void 0 === n ? null : n
          }
        }, n.startTransition = function(e) {
          var n = E.T,
            t = {};
          E.T = t;
          try {
            var r = e(),
              i = E.S;
            null !== i && i(t, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(I, N)
          } catch (e) {
            N(e)
          } finally {
            E.T = n
          }
        }, n.unstable_useCacheRefresh = function() {
          return E.H.useCacheRefresh()
        }, n.use = function(e) {
          return E.H.use(e)
        }, n.useActionState = function(e, n, t) {
          return E.H.useActionState(e, n, t)
        }, n.useCallback = function(e, n) {
          return E.H.useCallback(e, n)
        }, n.useContext = function(e) {
          return E.H.useContext(e)
        }, n.useDebugValue = function() {}, n.useDeferredValue = function(e, n) {
          return E.H.useDeferredValue(e, n)
        }, n.useEffect = function(e, n) {
          return E.H.useEffect(e, n)
        }, n.useId = function() {
          return E.H.useId()
        }, n.useImperativeHandle = function(e, n, t) {
          return E.H.useImperativeHandle(e, n, t)
        }, n.useInsertionEffect = function(e, n) {
          return E.H.useInsertionEffect(e, n)
        }, n.useLayoutEffect = function(e, n) {
          return E.H.useLayoutEffect(e, n)
        }, n.useMemo = function(e, n) {
          return E.H.useMemo(e, n)
        }, n.useOptimistic = function(e, n) {
          return E.H.useOptimistic(e, n)
        }, n.useReducer = function(e, n, t) {
          return E.H.useReducer(e, n, t)
        }, n.useRef = function(e) {
          return E.H.useRef(e)
        }, n.useState = function(e) {
          return E.H.useState(e)
        }, n.useSyncExternalStore = function(e, n, t) {
          return E.H.useSyncExternalStore(e, n, t)
        }, n.useTransition = function() {
          return E.H.useTransition()
        }, n.version = "19.0.0"
      },
      37007: e => {
        "use strict";
        var n, t = "object" == typeof Reflect ? Reflect : null,
          r = t && "function" == typeof t.apply ? t.apply : function(e, n, t) {
            return function() {}.apply.call(e, n, t)
          };
        n = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function(e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
          return Object.getOwnPropertyNames(e)
        };
        var i = Number.isNaN || function(e) {
          return e != e
        };

        function o() {
          o.init.call(this)
        }
        e.exports = o, e.exports.once = function(e, n) {
          return new Promise(function(t, r) {
            function i(t) {
              e.removeListener(n, o), r(t)
            }

            function o() {
              "function" == typeof e.removeListener && e.removeListener("error", i), t([].slice.call(arguments))
            }
            g(e, n, o, {
              once: !0
            }), "error" !== n && function(e, n) {
              "function" == typeof e.on && g(e, "error", n, {
                once: !0
              })
            }(e, i)
          })
        }, o.EventEmitter = o, o.prototype.O = void 0, o.prototype.P = 0, o.prototype.V = void 0;
        var a = 10;

        function s(e) {
          if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function l(e) {
          return void 0 === e.V ? o.defaultMaxListeners : e.V
        }

        function u(e, n, t, r) {
          var i, o, a;
          if (s(t), void 0 === (o = e.O) ? (o = e.O = Object.create(null), e.P = 0) : (void 0 !== o.newListener && (e.emit("newListener", n, t.listener ? t.listener : t), o = e.O), a = o[n]), void 0 === a) a = o[n] = t, ++e.P;
          else if ("function" == typeof a ? a = o[n] = r ? [t, a] : [a, t] : r ? a.unshift(t) : a.push(t), (i = l(e)) > 0 && a.length > i && !a.warned) {
            a.warned = !0;
            var u = Error("Possible EventEmitter memory leak detected. " + a.length + " " + n + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = n, u.count = a.length,
              function(e) {
                console && console.warn && console.warn(e)
              }(u)
          }
          return e
        }

        function c() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function f(e, n, t) {
          var r = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: n,
              listener: t
            },
            i = c.bind(r);
          return i.listener = t, r.wrapFn = i, i
        }

        function h(e, n, t) {
          var r = e.O;
          if (void 0 === r) return [];
          var i = r[n];
          return void 0 === i ? [] : "function" == typeof i ? t ? [i.listener || i] : [i] : t ? function(e) {
            for (var n = Array(e.length), t = 0; t < n.length; ++t) n[t] = e[t].listener || e[t];
            return n
          }(i) : p(i, i.length)
        }

        function d(e) {
          var n = this.O;
          if (void 0 !== n) {
            var t = n[e];
            if ("function" == typeof t) return 1;
            if (void 0 !== t) return t.length
          }
          return 0
        }

        function p(e, n) {
          for (var t = Array(n), r = 0; n > r; ++r) t[r] = e[r];
          return t
        }

        function g(e, n, t, r) {
          if ("function" == typeof e.on) r.once ? e.once(n, t) : e.on(n, t);
          else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(n, function i(o) {
              r.once && e.removeEventListener(n, i), t(o)
            })
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function() {
            return a
          },
          set: function(e) {
            if ("number" != typeof e || 0 > e || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            a = e
          }
        }), o.init = function() {
          (void 0 === this.O || this.O === Object.getPrototypeOf(this).O) && (this.O = Object.create(null), this.P = 0), this.V = this.V || void 0
        }, o.prototype.setMaxListeners = function(e) {
          if ("number" != typeof e || 0 > e || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
          return this.V = e, this
        }, o.prototype.getMaxListeners = function() {
          return l(this)
        }, o.prototype.emit = function(e) {
          for (var n = [], t = 1; arguments.length > t; t++) n.push(arguments[t]);
          var i = "error" === e,
            o = this.O;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            var a;
            if (n.length > 0 && (a = n[0]), a instanceof Error) throw a;
            var s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw s.context = a, s
          }
          var l = o[e];
          if (void 0 === l) return !1;
          if ("function" == typeof l) r(l, this, n);
          else {
            var u = l.length,
              c = p(l, u);
            for (t = 0; u > t; ++t) r(c[t], this, n)
          }
          return !0
        }, o.prototype.addListener = function(e, n) {
          return u(this, e, n, !1)
        }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, n) {
          return u(this, e, n, !0)
        }, o.prototype.once = function(e, n) {
          return s(n), this.on(e, f(this, e, n)), this
        }, o.prototype.prependOnceListener = function(e, n) {
          return s(n), this.prependListener(e, f(this, e, n)), this
        }, o.prototype.removeListener = function(e, n) {
          var t, r, i, o, a;
          if (s(n), void 0 === (r = this.O)) return this;
          if (void 0 === (t = r[e])) return this;
          if (t === n || t.listener === n) 0 === --this.P ? this.O = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, t.listener || n));
          else if ("function" != typeof t) {
            for (i = -1, o = t.length - 1; o >= 0; o--)
              if (t[o] === n || t[o].listener === n) {
                a = t[o].listener, i = o;
                break
              } if (0 > i) return this;
            0 === i ? t.shift() : function(e, n) {
              for (; n + 1 < e.length; n++) e[n] = e[n + 1];
              e.pop()
            }(t, i), 1 === t.length && (r[e] = t[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || n)
          }
          return this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e) {
          var n, t, r;
          if (void 0 === (t = this.O)) return this;
          if (void 0 === t.removeListener) return 0 === arguments.length ? (this.O = Object.create(null), this.P = 0) : void 0 !== t[e] && (0 === --this.P ? this.O = Object.create(null) : delete t[e]), this;
          if (0 === arguments.length) {
            var i, o = Object.keys(t);
            for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this.O = Object.create(null), this.P = 0, this
          }
          if ("function" == typeof(n = t[e])) this.removeListener(e, n);
          else if (void 0 !== n)
            for (r = n.length - 1; r >= 0; r--) this.removeListener(e, n[r]);
          return this
        }, o.prototype.listeners = function(e) {
          return h(this, e, !0)
        }, o.prototype.rawListeners = function(e) {
          return h(this, e, !1)
        }, o.listenerCount = function(e, n) {
          return "function" == typeof e.listenerCount ? e.listenerCount(n) : d.call(e, n)
        }, o.prototype.listenerCount = d, o.prototype.eventNames = function() {
          return this.P > 0 ? n(this.O) : []
        }
      },
      40961: (e, n, t) => {
        "use strict";
        (function e() {
          if ("u" >= typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
          } catch (e) {
            console.error(e)
          }
        })(), e.exports = t(6221)
      },
      41113: e => {
        "use strict";
        e.exports = function(e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e))
          }
        }
      },
      44363: (e, n, t) => {
        "use strict";
        e.exports = t(22799)
      },
      55056: (e, n, t) => {
        "use strict";
        e.exports = function(e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n)
        }
      },
      65606: e => {
        var n, t, r = e.exports = {};

        function i() {
          throw Error("setTimeout has not been defined")
        }

        function o() {
          throw Error("clearTimeout has not been defined")
        }

        function a(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
          try {
            return n(e, 0)
          } catch {
            try {
              return n.call(null, e, 0)
            } catch {
              return n.call(this, e, 0)
            }
          }
        }! function() {
          try {
            n = "function" == typeof setTimeout ? setTimeout : i
          } catch {
            n = i
          }
          try {
            t = "function" == typeof clearTimeout ? clearTimeout : o
          } catch {
            t = o
          }
        }();
        var s, l = [],
          u = !1,
          c = -1;

        function f() {
          !u || !s || (u = !1, s.length ? l = s.concat(l) : c = -1, l.length && h())
        }

        function h() {
          if (!u) {
            var e = a(f);
            u = !0;
            for (var n = l.length; n;) {
              for (s = l, l = []; ++c < n;) s && s[c].run();
              c = -1, n = l.length
            }
            s = null, u = !1,
              function(e) {
                if (t === clearTimeout) return clearTimeout(e);
                if ((t === o || !t) && clearTimeout) return t = clearTimeout, clearTimeout(e);
                try {
                  return t(e)
                } catch {
                  try {
                    return t.call(null, e)
                  } catch {
                    return t.call(this, e)
                  }
                }
              }(e)
          }
        }

        function d(e, n) {
          this.fun = e, this.array = n
        }

        function p() {}
        r.nextTick = function(e) {
          var n = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var t = 1; arguments.length > t; t++) n[t - 1] = arguments[t];
          l.push(new d(e, n)), 1 === l.length && !u && a(h)
        }, d.prototype.run = function() {
          this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
          return []
        }, r.binding = function(e) {
          throw Error("process.binding is not supported")
        }, r.cwd = function() {
          return "/"
        }, r.chdir = function(e) {
          throw Error("process.chdir is not supported")
        }, r.umask = function() {
          return 0
        }
      },
      65848: (e, n, t) => {
        "use strict";
        var r, i;
        r = t(86047), i = t(67909), r.version, n.F0 = r.renderToString, r.renderToStaticMarkup, i.renderToReadableStream, i.resume && i.resume
      },
      67909: (e, n, t) => {
        "use strict";
        var r = t(96540),
          i = t(40961);

        function o(e) {
          var n = "https://react.dev/errors/" + e;
          if (arguments.length > 1) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; arguments.length > t; t++) n += "&args[]=" + encodeURIComponent(arguments[t])
          }
          return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var a = Symbol.for("react.transitional.element"),
          s = Symbol.for("react.portal"),
          l = Symbol.for("react.fragment"),
          u = Symbol.for("react.strict_mode"),
          c = Symbol.for("react.profiler"),
          f = Symbol.for("react.provider"),
          h = Symbol.for("react.consumer"),
          d = Symbol.for("react.context"),
          p = Symbol.for("react.forward_ref"),
          g = Symbol.for("react.suspense"),
          A = Symbol.for("react.suspense_list"),
          m = Symbol.for("react.memo"),
          v = Symbol.for("react.lazy"),
          b = Symbol.for("react.scope"),
          C = Symbol.for("react.debug_trace_mode"),
          y = Symbol.for("react.offscreen"),
          k = Symbol.for("react.legacy_hidden"),
          w = Symbol.for("react.memo_cache_sentinel"),
          E = Symbol.iterator,
          B = Array.isArray;

        function x(e, n) {
          var t = 3 & e.length,
            r = e.length - t,
            i = n;
          for (n = 0; r > n;) {
            var o = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24;
            ++n, i = 27492 + (65535 & (i = 5 * (65535 & (i = (i ^= o = 461845907 * (65535 & (o = (o = 3432918353 * (65535 & o) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295) << 15 | o >>> 17)) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295) << 13 | i >>> 19)) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295)) + (((i >>> 16) + 58964 & 65535) << 16)
          }
          switch (o = 0, t) {
            case 3:
              o ^= (255 & e.charCodeAt(n + 2)) << 16;
            case 2:
              o ^= (255 & e.charCodeAt(n + 1)) << 8;
            case 1:
              i ^= 461845907 * (65535 & (o = (o = 3432918353 * (65535 & (o ^= 255 & e.charCodeAt(n))) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295) << 15 | o >>> 17)) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295
          }
          return i ^= e.length, i = 2246822507 * (65535 & (i ^= i >>> 16)) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, ((i = 3266489909 * (65535 & (i ^= i >>> 13)) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295) ^ i >>> 16) >>> 0
        }
        var S = new MessageChannel,
          L = [];

        function F(e) {
          L.push(e), S.port2.postMessage(null)
        }

        function T(e) {
          setTimeout(function() {
            throw e
          })
        }
        S.port1.onmessage = function() {
          var e = L.shift();
          e && e()
        };
        var M = Promise,
          R = "function" == typeof queueMicrotask ? queueMicrotask : function(e) {
            M.resolve(null).then(e).catch(T)
          },
          H = null,
          N = 0;

        function I(e, n) {
          if (0 !== n.byteLength)
            if (n.byteLength > 2048) N > 0 && (e.enqueue(new Uint8Array(H.buffer, 0, N)), H = new Uint8Array(2048), N = 0), e.enqueue(n);
            else {
              var t = H.length - N;
              t < n.byteLength && (0 === t ? e.enqueue(H) : (H.set(n.subarray(0, t), N), e.enqueue(H), n = n.subarray(t)), H = new Uint8Array(2048), N = 0), H.set(n, N), N += n.byteLength
            }
        }

        function _(e, n) {
          return I(e, n), !0
        }

        function j(e) {
          H && N > 0 && (e.enqueue(new Uint8Array(H.buffer, 0, N)), H = null, N = 0)
        }
        var O = new TextEncoder;

        function P(e) {
          return O.encode(e)
        }

        function D(e) {
          return O.encode(e)
        }

        function V(e, n) {
          "function" == typeof e.error ? e.error(n) : e.close()
        }
        var W = Object.assign,
          Z = {}.hasOwnProperty,
          U = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
          $ = {},
          G = {};

        function z(e) {
          return !!Z.call(G, e) || !Z.call($, e) && (U.test(e) ? G[e] = !0 : ($[e] = !0, !1))
        }
        var Y = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),
          q = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
          ]),
          K = /["'&<>]/;

        function X(e) {
          if ("boolean" == typeof e || "number" == typeof e || "bigint" == typeof e) return "" + e;
          e = "" + e;
          var n = K.exec(e);
          if (n) {
            var t, r = "",
              i = 0;
            for (t = n.index; t < e.length; t++) {
              switch (e.charCodeAt(t)) {
                case 34:
                  n = "&quot;";
                  break;
                case 38:
                  n = "&amp;";
                  break;
                case 39:
                  n = "&#x27;";
                  break;
                case 60:
                  n = "&lt;";
                  break;
                case 62:
                  n = "&gt;";
                  break;
                default:
                  continue
              }
              i !== t && (r += e.slice(i, t)), i = t + 1, r += n
            }
            e = i !== t ? r + e.slice(i, t) : r
          }
          return e
        }
        var Q = /([A-Z])/g,
          J = /^ms-/,
          ee = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

        function ne(e) {
          return ee.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
        }
        var te = r.h,
          re = i.v,
          ie = {
            pending: !1,
            data: null,
            method: null,
            action: null
          },
          oe = re.d;
        re.d = {
          f: oe.f,
          r: oe.r,
          D: function(e) {
            var n = ai || null;
            if (n) {
              var t, r, i = n.resumableState,
                o = n.renderState;
              "string" == typeof e && e && (i.dnsResources.hasOwnProperty(e) || (i.dnsResources[e] = null, (r = (i = o.headers) && i.remainingCapacity > 0) && (t = "<" + ("" + e).replace(Zt, Ut) + ">; rel=dns-prefetch", r = (i.remainingCapacity -= t.length + 2) >= 0), r ? (o.resets.dns[e] = null, i.preconnects && (i.preconnects += ", "), i.preconnects += t) : (Qe(t = [], {
                href: e,
                rel: "dns-prefetch"
              }), o.preconnects.add(t))), Zi(n))
            } else oe.D(e)
          },
          C: function(e, n) {
            var t = ai || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if ("string" == typeof e && e) {
                var o, a, s = "use-credentials" === n ? "credentials" : "string" == typeof n ? "anonymous" : "default";
                r.connectResources[s].hasOwnProperty(e) || (r.connectResources[s][e] = null, (a = (r = i.headers) && r.remainingCapacity > 0) && (a = "<" + ("" + e).replace(Zt, Ut) + ">; rel=preconnect", "string" == typeof n && (a += '; crossorigin="' + ("" + n).replace($t, Gt) + '"'), o = a, a = (r.remainingCapacity -= o.length + 2) >= 0), a ? (i.resets.connect[s][e] = null, r.preconnects && (r.preconnects += ", "), r.preconnects += o) : (Qe(s = [], {
                  rel: "preconnect",
                  href: e,
                  crossOrigin: n
                }), i.preconnects.add(s))), Zi(t)
              }
            } else oe.C(e, n)
          },
          L: function(e, n, t) {
            var r = ai || null;
            if (r) {
              var i = r.resumableState,
                o = r.renderState;
              if (n && e) {
                switch (n) {
                  case "image":
                    if (t) var a = t.imageSrcSet,
                      s = t.imageSizes,
                      l = t.fetchPriority;
                    var u, c = a ? a + "\n" + (s || "") : e;
                    if (i.imageResources.hasOwnProperty(c)) return;
                    i.imageResources[c] = ae, (i = o.headers) && i.remainingCapacity > 0 && "high" === l && (u = Wt(e, n, t), (i.remainingCapacity -= u.length + 2) >= 0) ? (o.resets.image[c] = ae, i.highImagePreloads && (i.highImagePreloads += ", "), i.highImagePreloads += u) : (Qe(i = [], W({
                      rel: "preload",
                      href: a ? void 0 : e,
                      as: n
                    }, t)), "high" === l ? o.highImagePreloads.add(i) : (o.bulkPreloads.add(i), o.preloads.images.set(c, i)));
                    break;
                  case "style":
                    if (i.styleResources.hasOwnProperty(e)) return;
                    Qe(a = [], W({
                      rel: "preload",
                      href: e,
                      as: n
                    }, t)), i.styleResources[e] = !t || "string" != typeof t.crossOrigin && "string" != typeof t.integrity ? ae : [t.crossOrigin, t.integrity], o.preloads.stylesheets.set(e, a), o.bulkPreloads.add(a);
                    break;
                  case "script":
                    if (i.scriptResources.hasOwnProperty(e)) return;
                    a = [], o.preloads.scripts.set(e, a), o.bulkPreloads.add(a), Qe(a, W({
                      rel: "preload",
                      href: e,
                      as: n
                    }, t)), i.scriptResources[e] = !t || "string" != typeof t.crossOrigin && "string" != typeof t.integrity ? ae : [t.crossOrigin, t.integrity];
                    break;
                  default:
                    if (i.unknownResources.hasOwnProperty(n)) {
                      if ((a = i.unknownResources[n]).hasOwnProperty(e)) return
                    } else a = {}, i.unknownResources[n] = a;
                    a[e] = ae, (i = o.headers) && i.remainingCapacity > 0 && "font" === n && (c = Wt(e, n, t), (i.remainingCapacity -= c.length + 2) >= 0) ? (o.resets.font[e] = ae, i.fontPreloads && (i.fontPreloads += ", "), i.fontPreloads += c) : "font" === (Qe(i = [], e = W({
                      rel: "preload",
                      href: e,
                      as: n
                    }, t)), n) ? o.fontPreloads.add(i) : o.bulkPreloads.add(i)
                }
                Zi(r)
              }
            } else oe.L(e, n, t)
          },
          m: function(e, n) {
            var t = ai || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if (e) {
                var o = n && "string" == typeof n.as ? n.as : "script";
                if ("script" === o) {
                  if (r.moduleScriptResources.hasOwnProperty(e)) return;
                  o = [], r.moduleScriptResources[e] = !n || "string" != typeof n.crossOrigin && "string" != typeof n.integrity ? ae : [n.crossOrigin, n.integrity], i.preloads.moduleScripts.set(e, o)
                } else {
                  if (r.moduleUnknownResources.hasOwnProperty(o)) {
                    var a = r.unknownResources[o];
                    if (a.hasOwnProperty(e)) return
                  } else a = {}, r.moduleUnknownResources[o] = a;
                  o = [], a[e] = ae
                }
                Qe(o, W({
                  rel: "modulepreload",
                  href: e
                }, n)), i.bulkPreloads.add(o), Zi(t)
              }
            } else oe.m(e, n)
          },
          X: function(e, n) {
            var t = ai || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if (e) {
                var o = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
                null !== o && (r.scriptResources[e] = null, n = W({
                  src: e,
                  async: !0
                }, n), o && (2 === o.length && Vt(n, o), e = i.preloads.scripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), rn(e, n), Zi(t))
              }
            } else oe.X(e, n)
          },
          S: function(e, n, t) {
            var r = ai || null;
            if (r) {
              var i = r.resumableState,
                o = r.renderState;
              if (e) {
                n = n || "default";
                var a = o.styles.get(n),
                  s = i.styleResources.hasOwnProperty(e) ? i.styleResources[e] : void 0;
                null !== s && (i.styleResources[e] = null, a || (a = {
                  precedence: P(X(n)),
                  rules: [],
                  hrefs: [],
                  sheets: new Map
                }, o.styles.set(n, a)), n = {
                  state: 0,
                  props: W({
                    rel: "stylesheet",
                    href: e,
                    "data-precedence": n
                  }, t)
                }, s && (2 === s.length && Vt(n.props, s), (o = o.preloads.stylesheets.get(e)) && o.length > 0 ? o.length = 0 : n.state = 1), a.sheets.set(e, n), Zi(r))
              }
            } else oe.S(e, n, t)
          },
          M: function(e, n) {
            var t = ai || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if (e) {
                var o = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
                null !== o && (r.moduleScriptResources[e] = null, n = W({
                  src: e,
                  type: "module",
                  async: !0
                }, n), o && (2 === o.length && Vt(n, o), e = i.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), rn(e, n), Zi(t))
              }
            } else oe.M(e, n)
          }
        };
        var ae = [];
        D('"></template>');
        var se = D("<script>"),
          le = D("<\/script>"),
          ue = D('<script src="'),
          ce = D('<script type="module" src="'),
          fe = D('" nonce="'),
          he = D('" integrity="'),
          de = D('" crossorigin="'),
          pe = D('" async=""><\/script>'),
          ge = /(<\/|<)(s)(cript)/gi;

        function Ae(e, n, t, r) {
          return n + ("s" === t ? "\\u0073" : "\\u0053") + r
        }
        var me = D('<script type="importmap">'),
          ve = D("<\/script>");

        function be(e, n, t, r, i, o) {
          var a = void 0 === n ? se : D('<script nonce="' + X(n) + '">'),
            s = e.idPrefix;
          t = [];
          var l = e.bootstrapScriptContent,
            u = e.bootstrapScripts,
            c = e.bootstrapModules;
          if (void 0 !== l && t.push(a, P(("" + l).replace(ge, Ae)), le), l = [], void 0 !== r && (l.push(me), l.push(P(("" + JSON.stringify(r)).replace(ge, Ae))), l.push(ve)), r = i ? {
              preconnects: "",
              fontPreloads: "",
              highImagePreloads: "",
              remainingCapacity: 2 + ("number" == typeof o ? o : 2e3)
            } : null, i = {
              placeholderPrefix: D(s + "P:"),
              segmentPrefix: D(s + "S:"),
              boundaryPrefix: D(s + "B:"),
              startInlineScript: a,
              htmlChunks: null,
              headChunks: null,
              externalRuntimeScript: null,
              bootstrapChunks: t,
              importMapChunks: l,
              onHeaders: i,
              headers: r,
              resets: {
                font: {},
                dns: {},
                connect: {
                  default: {},
                  anonymous: {},
                  credentials: {}
                },
                image: {},
                style: {}
              },
              charsetChunks: [],
              viewportChunks: [],
              hoistableChunks: [],
              preconnects: new Set,
              fontPreloads: new Set,
              highImagePreloads: new Set,
              styles: new Map,
              bootstrapScripts: new Set,
              scripts: new Set,
              bulkPreloads: new Set,
              preloads: {
                images: new Map,
                stylesheets: new Map,
                scripts: new Map,
                moduleScripts: new Map
              },
              nonce: n,
              hoistableState: null,
              stylesToHoist: !1
            }, void 0 !== u)
            for (r = 0; r < u.length; r++) {
              var f = u[r];
              s = a = void 0, l = {
                rel: "preload",
                as: "script",
                fetchPriority: "low",
                nonce: n
              }, "string" == typeof f ? l.href = o = f : (l.href = o = f.src, l.integrity = s = "string" == typeof f.integrity ? f.integrity : void 0, l.crossOrigin = a = "string" == typeof f || null == f.crossOrigin ? void 0 : "use-credentials" === f.crossOrigin ? "use-credentials" : "");
              var h = o;
              (f = e).scriptResources[h] = null, f.moduleScriptResources[h] = null, Qe(f = [], l), i.bootstrapScripts.add(f), t.push(ue, P(X(o))), n && t.push(fe, P(X(n))), "string" == typeof s && t.push(he, P(X(s))), "string" == typeof a && t.push(de, P(X(a))), t.push(pe)
            }
          if (void 0 !== c)
            for (u = 0; u < c.length; u++) a = o = void 0, s = {
              rel: "modulepreload",
              fetchPriority: "low",
              nonce: n
            }, "string" == typeof(l = c[u]) ? s.href = r = l : (s.href = r = l.src, s.integrity = a = "string" == typeof l.integrity ? l.integrity : void 0, s.crossOrigin = o = "string" == typeof l || null == l.crossOrigin ? void 0 : "use-credentials" === l.crossOrigin ? "use-credentials" : ""), f = r, (l = e).scriptResources[f] = null, l.moduleScriptResources[f] = null, Qe(l = [], s), i.bootstrapScripts.add(l), t.push(ce, P(X(r))), n && t.push(fe, P(X(n))), "string" == typeof a && t.push(he, P(X(a))), "string" == typeof o && t.push(de, P(X(o))), t.push(pe);
          return i
        }

        function Ce(e, n, t, r, i) {
          return {
            idPrefix: void 0 === e ? "" : e,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: t,
            bootstrapScripts: r,
            bootstrapModules: i,
            instructions: 0,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: {
              default: {},
              anonymous: {},
              credentials: {}
            },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {}
          }
        }

        function ye(e, n, t) {
          return {
            insertionMode: e,
            selectedValue: n,
            tagScope: t
          }
        }

        function ke(e) {
          return ye("http://www.w3.org/2000/svg" === e ? 3 : "http://www.w3.org/1998/Math/MathML" === e ? 4 : 0, null, 0)
        }

        function we(e, n, t) {
          switch (n) {
            case "noscript":
              return ye(2, null, 1 | e.tagScope);
            case "select":
              return ye(2, null != t.value ? t.value : t.defaultValue, e.tagScope);
            case "svg":
              return ye(3, null, e.tagScope);
            case "picture":
              return ye(2, null, 2 | e.tagScope);
            case "math":
              return ye(4, null, e.tagScope);
            case "foreignObject":
              return ye(2, null, e.tagScope);
            case "table":
              return ye(5, null, e.tagScope);
            case "thead":
            case "tbody":
            case "tfoot":
              return ye(6, null, e.tagScope);
            case "colgroup":
              return ye(8, null, e.tagScope);
            case "tr":
              return ye(7, null, e.tagScope)
          }
          return 5 > e.insertionMode ? 0 === e.insertionMode ? ye("html" === n ? 1 : 2, null, e.tagScope) : 1 === e.insertionMode ? ye(2, null, e.tagScope) : e : ye(2, null, e.tagScope)
        }
        var Ee = D("\x3c!-- --\x3e");

        function Be(e, n, t, r) {
          return "" === n ? r : (r && e.push(Ee), e.push(P(X(n))), !0)
        }
        var xe = new Map,
          Se = D(' style="'),
          Le = D(":"),
          Fe = D(";");

        function Te(e, n) {
          if ("object" != typeof n) throw Error(o(62));
          var t, r = !0;
          for (t in n)
            if (Z.call(n, t)) {
              var i = n[t];
              if (null != i && "boolean" != typeof i && "" !== i) {
                if (0 === t.indexOf("--")) {
                  var a = P(X(t));
                  i = P(X(("" + i).trim()))
                } else void 0 === (a = xe.get(t)) && (a = D(X(t.replace(Q, "-$1").toLowerCase().replace(J, "-ms-"))), xe.set(t, a)), i = "number" == typeof i ? 0 === i || Y.has(t) ? P("" + i) : P(i + "px") : P(X(("" + i).trim()));
                r ? (r = !1, e.push(Se, a, Le, i)) : e.push(Fe, a, Le, i)
              }
            } r || e.push(He)
        }
        var Me = D(" "),
          Re = D('="'),
          He = D('"'),
          Ne = D('=""');

        function Ie(e, n, t) {
          t && "function" != typeof t && "symbol" != typeof t && e.push(Me, P(n), Ne)
        }

        function _e(e, n, t) {
          "function" != typeof t && "symbol" != typeof t && "boolean" != typeof t && e.push(Me, P(n), Re, P(X(t)), He)
        }
        var je = D(X("javascript:throw new Error('React form unexpectedly submitted.')")),
          Oe = D('<input type="hidden"');

        function Pe(e, n) {
          this.push(Oe), De(e), _e(this, "name", n), _e(this, "value", e), this.push($e)
        }

        function De(e) {
          if ("string" != typeof e) throw Error(o(480))
        }

        function Ve(e, n) {
          if ("function" == typeof n.$$FORM_ACTION) {
            var t = e.nextFormID++;
            e = e.idPrefix + t;
            try {
              var r = n.$$FORM_ACTION(e);
              if (r) {
                var i = r.data;
                i?.forEach(De)
              }
              return r
            } catch (e) {
              if ("object" == typeof e && null !== e && "function" == typeof e.then) throw e
            }
          }
          return null
        }

        function We(e, n, t, r, i, o, a, s) {
          var l = null;
          if ("function" == typeof r) {
            var u = Ve(n, r);
            null !== u ? (s = u.name, r = u.action || "", i = u.encType, o = u.method, a = u.target, l = u.data) : (e.push(Me, P("formAction"), Re, je, He), a = o = i = r = s = null, qe(n, t))
          }
          return null != s && Ze(e, "name", s), null != r && Ze(e, "formAction", r), null != i && Ze(e, "formEncType", i), null != o && Ze(e, "formMethod", o), null != a && Ze(e, "formTarget", a), l
        }

        function Ze(e, n, t) {
          switch (n) {
            case "className":
              _e(e, "class", t);
              break;
            case "tabIndex":
              _e(e, "tabindex", t);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              _e(e, n, t);
              break;
            case "style":
              Te(e, t);
              break;
            case "src":
            case "href":
              if ("" === t) break;
            case "action":
            case "formAction":
              if (null == t || "function" == typeof t || "symbol" == typeof t || "boolean" == typeof t) break;
              t = ne("" + t), e.push(Me, P(n), Re, P(X(t)), He);
              break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
              break;
            case "autoFocus":
            case "multiple":
            case "muted":
              Ie(e, n.toLowerCase(), t);
              break;
            case "xlinkHref":
              if ("function" == typeof t || "symbol" == typeof t || "boolean" == typeof t) break;
              t = ne("" + t), e.push(Me, P("xlink:href"), Re, P(X(t)), He);
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              "function" != typeof t && "symbol" != typeof t && e.push(Me, P(n), Re, P(X(t)), He);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              t && "function" != typeof t && "symbol" != typeof t && e.push(Me, P(n), Ne);
              break;
            case "capture":
            case "download":
              !0 === t ? e.push(Me, P(n), Ne) : !1 !== t && "function" != typeof t && "symbol" != typeof t && e.push(Me, P(n), Re, P(X(t)), He);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              "function" != typeof t && "symbol" != typeof t && !isNaN(t) && t >= 1 && e.push(Me, P(n), Re, P(X(t)), He);
              break;
            case "rowSpan":
            case "start":
              "function" == typeof t || "symbol" == typeof t || isNaN(t) || e.push(Me, P(n), Re, P(X(t)), He);
              break;
            case "xlinkActuate":
              _e(e, "xlink:actuate", t);
              break;
            case "xlinkArcrole":
              _e(e, "xlink:arcrole", t);
              break;
            case "xlinkRole":
              _e(e, "xlink:role", t);
              break;
            case "xlinkShow":
              _e(e, "xlink:show", t);
              break;
            case "xlinkTitle":
              _e(e, "xlink:title", t);
              break;
            case "xlinkType":
              _e(e, "xlink:type", t);
              break;
            case "xmlBase":
              _e(e, "xml:base", t);
              break;
            case "xmlLang":
              _e(e, "xml:lang", t);
              break;
            case "xmlSpace":
              _e(e, "xml:space", t);
              break;
            default:
              if ((2 >= n.length || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && z(n = q.get(n) || n)) {
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return;
                  case "boolean":
                    var r = n.toLowerCase().slice(0, 5);
                    if ("data-" !== r && "aria-" !== r) return
                }
                e.push(Me, P(n), Re, P(X(t)), He)
              }
          }
        }
        var Ue = D(">"),
          $e = D("/>");

        function Ge(e, n, t) {
          if (null != n) {
            if (null != t) throw Error(o(60));
            if ("object" != typeof n || !("W" in n)) throw Error(o(61));
            null != (n = n.W) && e.push(P("" + n))
          }
        }
        var ze = D(' selected=""'),
          Ye = D('addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});');

        function qe(e, n) {
          !(16 & e.instructions) && (e.instructions |= 16, n.bootstrapChunks.unshift(n.startInlineScript, Ye, le))
        }
        var Ke = D("\x3c!--F!--\x3e"),
          Xe = D("\x3c!--F--\x3e");

        function Qe(e, n) {
          for (var t in e.push(un("link")), n)
            if (Z.call(n, t)) {
              var r = n[t];
              if (null != r) switch (t) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, "link"));
                default:
                  Ze(e, t, r)
              }
            } return e.push($e), null
        }
        var Je = /(<\/|<)(s)(tyle)/gi;

        function en(e, n, t, r) {
          return n + ("s" === t ? "\\73 " : "\\53 ") + r
        }

        function nn(e, n, t) {
          for (var r in e.push(un(t)), n)
            if (Z.call(n, r)) {
              var i = n[r];
              if (null != i) switch (r) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, t));
                default:
                  Ze(e, r, i)
              }
            } return e.push($e), null
        }

        function tn(e, n) {
          e.push(un("title"));
          var t, r = null,
            i = null;
          for (t in n)
            if (Z.call(n, t)) {
              var o = n[t];
              if (null != o) switch (t) {
                case "children":
                  r = o;
                  break;
                case "dangerouslySetInnerHTML":
                  i = o;
                  break;
                default:
                  Ze(e, t, o)
              }
            } return e.push(Ue), "function" != typeof(n = Array.isArray(r) ? 2 > r.length ? r[0] : null : r) && "symbol" != typeof n && null != n && e.push(P(X("" + n))), Ge(e, i, r), e.push(hn("title")), null
        }

        function rn(e, n) {
          e.push(un("script"));
          var t, r = null,
            i = null;
          for (t in n)
            if (Z.call(n, t)) {
              var o = n[t];
              if (null != o) switch (t) {
                case "children":
                  r = o;
                  break;
                case "dangerouslySetInnerHTML":
                  i = o;
                  break;
                default:
                  Ze(e, t, o)
              }
            } return e.push(Ue), Ge(e, i, r), "string" == typeof r && e.push(P(("" + r).replace(ge, Ae))), e.push(hn("script")), null
        }

        function on(e, n, t) {
          e.push(un(t));
          var r, i = t = null;
          for (r in n)
            if (Z.call(n, r)) {
              var o = n[r];
              if (null != o) switch (r) {
                case "children":
                  t = o;
                  break;
                case "dangerouslySetInnerHTML":
                  i = o;
                  break;
                default:
                  Ze(e, r, o)
              }
            } return e.push(Ue), Ge(e, i, t), "string" == typeof t ? (e.push(P(X(t))), null) : t
        }
        var an = D("\n"),
          sn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
          ln = new Map;

        function un(e) {
          var n = ln.get(e);
          if (void 0 === n) {
            if (!sn.test(e)) throw Error(o(65, e));
            n = D("<" + e), ln.set(e, n)
          }
          return n
        }
        var cn = D("<!DOCTYPE html>"),
          fn = new Map;

        function hn(e) {
          var n = fn.get(e);
          return void 0 === n && (n = D("</" + e + ">"), fn.set(e, n)), n
        }

        function dn(e, n) {
          n = n.bootstrapChunks;
          for (var t = 0; t < n.length - 1; t++) I(e, n[t]);
          return t >= n.length || (t = n[t], n.length = 0, _(e, t))
        }
        var pn = D('<template id="'),
          gn = D('"></template>'),
          An = D("\x3c!--$--\x3e"),
          mn = D('\x3c!--$?--\x3e<template id="'),
          vn = D('"></template>'),
          bn = D("\x3c!--$!--\x3e"),
          Cn = D("\x3c!--/$--\x3e"),
          yn = D("<template"),
          kn = D('"'),
          wn = D(' data-dgst="');
        D(' data-msg="'), D(' data-stck="'), D(' data-cstck="');
        var En = D("></template>");

        function Bn(e, n, t) {
          if (I(e, mn), null === t) throw Error(o(395));
          return I(e, n.boundaryPrefix), I(e, P(t.toString(16))), _(e, vn)
        }
        var xn = D('<div hidden id="'),
          Sn = D('">'),
          Ln = D("</div>"),
          Fn = D('<svg aria-hidden="true" style="display:none" id="'),
          Tn = D('">'),
          Mn = D("</svg>"),
          Rn = D('<math aria-hidden="true" style="display:none" id="'),
          Hn = D('">'),
          Nn = D("</math>"),
          In = D('<table hidden id="'),
          _n = D('">'),
          jn = D("</table>"),
          On = D('<table hidden><tbody id="'),
          Pn = D('">'),
          Dn = D("</tbody></table>"),
          Vn = D('<table hidden><tr id="'),
          Wn = D('">'),
          Zn = D("</tr></table>"),
          Un = D('<table hidden><colgroup id="'),
          $n = D('">'),
          Gn = D("</colgroup></table>"),
          zn = D('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),
          Yn = D('$RS("'),
          qn = D('","'),
          Kn = D('")<\/script>');
        D('<template data-rsi="" data-sid="'), D('" data-pid="');
        var Xn = D('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'),
          Qn = D('$RC("'),
          Jn = D('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'),
          et = D('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'),
          nt = D('$RR("'),
          tt = D('","'),
          rt = D('",'),
          it = D('"'),
          ot = D(")<\/script>");
        D('<template data-rci="" data-bid="'), D('<template data-rri="" data-bid="'), D('" data-sid="'), D('" data-sty="');
        var at = D('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'),
          st = D('$RX("'),
          lt = D('"'),
          ut = D(","),
          ct = D(")<\/script>");
        D('<template data-rxi="" data-bid="'), D('" data-dgst="'), D('" data-msg="'), D('" data-stck="'), D('" data-cstck="');
        var ft = /[<\u2028\u2029]/g;

        function ht(e) {
          return JSON.stringify(e).replace(ft, function(e) {
            switch (e) {
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default:
                throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
            }
          })
        }
        var dt = /[&><\u2028\u2029]/g;

        function pt(e) {
          return JSON.stringify(e).replace(dt, function(e) {
            switch (e) {
              case "&":
                return "\\u0026";
              case ">":
                return "\\u003e";
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default:
                throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
            }
          })
        }
        var gt = D('<style media="not all" data-precedence="'),
          At = D('" data-href="'),
          mt = D('">'),
          vt = D("</style>"),
          bt = !1,
          Ct = !0;

        function yt(e) {
          var n = e.rules,
            t = e.hrefs,
            r = 0;
          if (t.length) {
            for (I(this, gt), I(this, e.precedence), I(this, At); r < t.length - 1; r++) I(this, t[r]), I(this, Ft);
            for (I(this, t[r]), I(this, mt), r = 0; r < n.length; r++) I(this, n[r]);
            Ct = _(this, vt), bt = !0, n.length = 0, t.length = 0
          }
        }

        function kt(e) {
          return 2 !== e.state && (bt = !0)
        }

        function wt(e, n, t) {
          return bt = !1, Ct = !0, n.styles.forEach(yt, e), n.stylesheets.forEach(kt), bt && (t.stylesToHoist = !0), Ct
        }

        function Et(e) {
          for (var n = 0; n < e.length; n++) I(this, e[n]);
          e.length = 0
        }
        var Bt = [];

        function xt(e) {
          Qe(Bt, e.props);
          for (var n = 0; n < Bt.length; n++) I(this, Bt[n]);
          Bt.length = 0, e.state = 2
        }
        var St = D('<style data-precedence="'),
          Lt = D('" data-href="'),
          Ft = D(" "),
          Tt = D('">'),
          Mt = D("</style>");

        function Rt(e) {
          var n = e.sheets.size > 0;
          e.sheets.forEach(xt, this), e.sheets.clear();
          var t = e.rules,
            r = e.hrefs;
          if (!n || r.length) {
            if (I(this, St), I(this, e.precedence), e = 0, r.length) {
              for (I(this, Lt); e < r.length - 1; e++) I(this, r[e]), I(this, Ft);
              I(this, r[e])
            }
            for (I(this, Tt), e = 0; e < t.length; e++) I(this, t[e]);
            I(this, Mt), t.length = 0, r.length = 0
          }
        }

        function Ht(e) {
          if (0 === e.state) {
            e.state = 1;
            var n = e.props;
            for (Qe(Bt, {
                rel: "preload",
                as: "style",
                href: e.props.href,
                crossOrigin: n.crossOrigin,
                fetchPriority: n.fetchPriority,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy
              }), e = 0; e < Bt.length; e++) I(this, Bt[e]);
            Bt.length = 0
          }
        }

        function Nt(e) {
          e.sheets.forEach(Ht, this), e.sheets.clear()
        }
        var It = D("["),
          _t = D(",["),
          jt = D(","),
          Ot = D("]");

        function Pt(e, n, t) {
          var r = n.toLowerCase();
          switch (typeof t) {
            case "function":
            case "symbol":
              return
          }
          switch (n) {
            case "innerHTML":
            case "dangerouslySetInnerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "style":
            case "ref":
              return;
            case "className":
              r = "class", n = "" + t;
              break;
            case "hidden":
              if (!1 === t) return;
              n = "";
              break;
            case "src":
            case "href":
              n = "" + (t = ne(t));
              break;
            default:
              if (n.length > 2 && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1]) || !z(n)) return;
              n = "" + t
          }
          I(e, jt), I(e, P(pt(r))), I(e, jt), I(e, P(pt(n)))
        }

        function Dt() {
          return {
            styles: new Set,
            stylesheets: new Set
          }
        }

        function Vt(e, n) {
          null == e.crossOrigin && (e.crossOrigin = n[0]), null == e.integrity && (e.integrity = n[1])
        }

        function Wt(e, n, t) {
          for (var r in n = "<" + (e = ("" + e).replace(Zt, Ut)) + '>; rel=preload; as="' + (n = ("" + n).replace($t, Gt)) + '"', t) Z.call(t, r) && "string" == typeof(e = t[r]) && (n += "; " + r.toLowerCase() + '="' + ("" + e).replace($t, Gt) + '"');
          return n
        }
        var Zt = /[<>\r\n]/g;

        function Ut(e) {
          switch (e) {
            case "<":
              return "%3C";
            case ">":
              return "%3E";
            case "\n":
              return "%0A";
            case "\r":
              return "%0D";
            default:
              throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
          }
        }
        var $t = /["';,\r\n]/g;

        function Gt(e) {
          switch (e) {
            case '"':
              return "%22";
            case "'":
              return "%27";
            case ";":
              return "%3B";
            case ",":
              return "%2C";
            case "\n":
              return "%0A";
            case "\r":
              return "%0D";
            default:
              throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
          }
        }

        function zt(e) {
          this.styles.add(e)
        }

        function Yt(e) {
          this.stylesheets.add(e)
        }
        var qt = function() {}.bind,
          Kt = Symbol.for("react.client.reference");

        function Xt(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.$$typeof === Kt ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case l:
              return "Fragment";
            case s:
              return "Portal";
            case c:
              return "Profiler";
            case u:
              return "StrictMode";
            case g:
              return "Suspense";
            case A:
              return "SuspenseList"
          }
          if ("object" == typeof e) switch (e.$$typeof) {
            case d:
              return (e.displayName || "Context") + ".Provider";
            case h:
              return (e.j.displayName || "Context") + ".Consumer";
            case p:
              var n = e.render;
              return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case m:
              return null !== (n = e.displayName || null) ? n : Xt(e.type) || "Memo";
            case v:
              n = e.B, e = e.k;
              try {
                return Xt(e(n))
              } catch {}
          }
          return null
        }
        var Qt = {},
          Jt = null;

        function er(e, n) {
          if (e !== n) {
            e.context.N = e.parentValue, e = e.parent;
            var t = n.parent;
            if (null === e) {
              if (null !== t) throw Error(o(401))
            } else {
              if (null === t) throw Error(o(401));
              er(e, t)
            }
            n.context.N = n.value
          }
        }

        function nr(e) {
          e.context.N = e.parentValue, null !== (e = e.parent) && nr(e)
        }

        function tr(e) {
          var n = e.parent;
          null !== n && tr(n), e.context.N = e.value
        }

        function rr(e, n) {
          if (e.context.N = e.parentValue, null === (e = e.parent)) throw Error(o(402));
          e.depth === n.depth ? er(e, n) : rr(e, n)
        }

        function ir(e, n) {
          var t = n.parent;
          if (null === t) throw Error(o(402));
          e.depth === t.depth ? er(e, t) : ir(e, t), n.context.N = n.value
        }

        function or(e) {
          var n = Jt;
          n !== e && (null === n ? tr(e) : null === e ? nr(n) : n.depth === e.depth ? er(n, e) : n.depth > e.depth ? rr(n, e) : ir(n, e), Jt = e)
        }
        var ar = {
            isMounted: function() {
              return !1
            },
            enqueueSetState: function(e, n) {
              null !== (e = e.Z).queue && e.queue.push(n)
            },
            enqueueReplaceState: function(e, n) {
              (e = e.Z).replace = !0, e.queue = [n]
            },
            enqueueForceUpdate: function() {}
          },
          sr = {
            id: 1,
            overflow: ""
          };

        function lr(e, n, t) {
          var r = e.id;
          e = e.overflow;
          var i = 32 - ur(r) - 1;
          r &= ~(1 << i), t += 1;
          var o = 32 - ur(n) + i;
          if (o > 30) {
            var a = i - i % 5;
            return o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, {
              id: 1 << 32 - ur(n) + i | t << i | r,
              overflow: o + e
            }
          }
          return {
            id: 1 << o | t << i | r,
            overflow: e
          }
        }
        var ur = Math.clz32 ? Math.clz32 : function(e) {
            return 0 == (e >>>= 0) ? 32 : 31 - (cr(e) / fr | 0) | 0
          },
          cr = Math.log,
          fr = Math.LN2,
          hr = Error(o(460));

        function dr() {}
        var pr = null;

        function gr() {
          if (null === pr) throw Error(o(459));
          var e = pr;
          return pr = null, e
        }
        var Ar = "function" == typeof Object.is ? Object.is : function(e, n) {
            return e === n && (0 !== e || 1 / e == 1 / n) || e != e && n != n
          },
          mr = null,
          vr = null,
          br = null,
          Cr = null,
          yr = null,
          kr = null,
          wr = !1,
          Er = !1,
          Br = 0,
          xr = 0,
          Sr = -1,
          Lr = 0,
          Fr = null,
          Tr = null,
          Mr = 0;

        function Rr() {
          if (null === mr) throw Error(o(321));
          return mr
        }

        function Hr() {
          if (Mr > 0) throw Error(o(312));
          return {
            memoizedState: null,
            queue: null,
            next: null
          }
        }

        function Nr() {
          return null === kr ? null === yr ? (wr = !1, yr = kr = Hr()) : (wr = !0, kr = yr) : null === kr.next ? (wr = !1, kr = kr.next = Hr()) : (wr = !0, kr = kr.next), kr
        }

        function Ir() {
          var e = Fr;
          return Fr = null, e
        }

        function _r() {
          Cr = br = vr = mr = null, Er = !1, yr = null, Mr = 0, kr = Tr = null
        }

        function jr(e, n) {
          return "function" == typeof n ? n(e) : n
        }

        function Or(e, n, t) {
          if (mr = Rr(), kr = Nr(), wr) {
            var r = kr.queue;
            if (n = r.dispatch, null !== Tr && void 0 !== (t = Tr.get(r))) {
              Tr.delete(r), r = kr.memoizedState;
              do {
                r = e(r, t.action), t = t.next
              } while (null !== t);
              return kr.memoizedState = r, [r, n]
            }
            return [kr.memoizedState, n]
          }
          return e = e === jr ? "function" == typeof n ? n() : n : void 0 !== t ? t(n) : n, kr.memoizedState = e, e = (e = kr.queue = {
            last: null,
            dispatch: null
          }).dispatch = Dr.bind(null, mr, e), [kr.memoizedState, e]
        }

        function Pr(e, n) {
          if (mr = Rr(), n = void 0 === n ? null : n, null !== (kr = Nr())) {
            var t = kr.memoizedState;
            if (null !== t && null !== n) {
              var r = t[1];
              e: if (null === r) r = !1;
                else {
                  for (var i = 0; i < r.length && i < n.length; i++)
                    if (!Ar(n[i], r[i])) {
                      r = !1;
                      break e
                    } r = !0
                }
              if (r) return t[0]
            }
          }
          return e = e(), kr.memoizedState = [e, n], e
        }

        function Dr(e, n, t) {
          if (Mr >= 25) throw Error(o(301));
          if (e === mr)
            if (Er = !0, e = {
                action: t,
                next: null
              }, null === Tr && (Tr = new Map), void 0 === (t = Tr.get(n))) Tr.set(n, e);
            else {
              for (n = t; null !== n.next;) n = n.next;
              n.next = e
            }
        }

        function Vr() {
          throw Error(o(394))
        }

        function Wr() {
          throw Error(o(479))
        }

        function Zr(e, n, t) {
          Rr();
          var r = xr++,
            i = br;
          if ("function" == typeof e.$$FORM_ACTION) {
            var o = null,
              a = Cr;
            i = i.formState;
            var s = e.$$IS_SIGNATURE_EQUAL;
            if (null !== i && "function" == typeof s) {
              var l = i[1];
              s.call(e, i[2], i[3]) && l === (o = void 0 !== t ? "p" + t : "k" + x(JSON.stringify([a, null, r]), 0)) && (Sr = r, n = i[0])
            }
            var u = e.bind(null, n);
            return e = function(e) {
              u(e)
            }, "function" == typeof u.$$FORM_ACTION && (e.$$FORM_ACTION = function(e) {
              e = u.$$FORM_ACTION(e), void 0 !== t && (t += "", e.action = t);
              var n = e.data;
              return n && (null === o && (o = void 0 !== t ? "p" + t : "k" + x(JSON.stringify([a, null, r]), 0)), n.append("$ACTION_KEY", o)), e
            }), [n, e, !1]
          }
          var c = e.bind(null, n);
          return [n, function(e) {
            c(e)
          }, !1]
        }

        function Ur(e) {
          var n = Lr;
          return Lr += 1, null === Fr && (Fr = []),
            function(e, n, t) {
              switch (void 0 === (t = e[t]) ? e.push(n) : t !== n && (n.then(dr, dr), n = t), n.status) {
                case "fulfilled":
                  return n.value;
                case "rejected":
                  throw n.reason;
                default:
                  switch ("string" == typeof n.status ? n.then(dr, dr) : ((e = n).status = "pending", e.then(function(e) {
                      if ("pending" === n.status) {
                        var t = n;
                        t.status = "fulfilled", t.value = e
                      }
                    }, function(e) {
                      if ("pending" === n.status) {
                        var t = n;
                        t.status = "rejected", t.reason = e
                      }
                    })), n.status) {
                    case "fulfilled":
                      return n.value;
                    case "rejected":
                      throw n.reason
                  }
                  throw pr = n, hr
              }
            }(Fr, e, n)
        }

        function $r() {
          throw Error(o(393))
        }

        function Gr() {}
        var zr = {
          readContext: function(e) {
            return e.N
          },
          use: function(e) {
            if (null !== e && "object" == typeof e) {
              if ("function" == typeof e.then) return Ur(e);
              if (e.$$typeof === d) return e.N
            }
            throw Error(o(438, e + ""))
          },
          useContext: function(e) {
            return Rr(), e.N
          },
          useMemo: Pr,
          useReducer: Or,
          useRef: function(e) {
            mr = Rr();
            var n = (kr = Nr()).memoizedState;
            return null === n ? (e = {
              current: e
            }, kr.memoizedState = e) : n
          },
          useState: function(e) {
            return Or(jr, e)
          },
          useInsertionEffect: Gr,
          useLayoutEffect: Gr,
          useCallback: function(e, n) {
            return Pr(function() {
              return e
            }, n)
          },
          useImperativeHandle: Gr,
          useEffect: Gr,
          useDebugValue: Gr,
          useDeferredValue: function(e, n) {
            return Rr(), void 0 !== n ? n : e
          },
          useTransition: function() {
            return Rr(), [!1, Vr]
          },
          useId: function() {
            var e = vr.treeContext,
              n = e.overflow;
            e = ((e = e.id) & ~(1 << 32 - ur(e) - 1)).toString(32) + n;
            var t = Kr;
            if (null === t) throw Error(o(404));
            return n = Br++, e = ":" + t.idPrefix + "R" + e, n > 0 && (e += "H" + n.toString(32)), e + ":"
          },
          useSyncExternalStore: function(e, n, t) {
            if (void 0 === t) throw Error(o(407));
            return t()
          },
          useCacheRefresh: function() {
            return $r
          },
          useMemoCache: function(e) {
            for (var n = Array(e), t = 0; e > t; t++) n[t] = w;
            return n
          },
          useHostTransitionStatus: function() {
            return Rr(), ie
          },
          useOptimistic: function(e) {
            return Rr(), [e, Wr]
          }
        };
        zr.useFormState = Zr, zr.useActionState = Zr;
        var Yr, qr, Kr = null,
          Xr = {
            getCacheForType: function() {
              throw Error(o(248))
            }
          };

        function Qr(e) {
          if (void 0 === Yr) try {
            throw Error()
          } catch (e) {
            var n = e.stack.trim().match(/\n( *(at )?)/);
            Yr = n && n[1] || "", qr = e.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : e.stack.indexOf("@") > -1 ? "@unknown:0:0" : ""
          }
          return "\n" + Yr + e + qr
        }
        var Jr = !1;

        function ei(e, n) {
          if (!e || Jr) return "";
          Jr = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function() {
                try {
                  if (n) {
                    var t = function() {
                      throw Error()
                    };
                    if (Object.defineProperty(t.prototype, "props", {
                        set: function() {
                          throw Error()
                        }
                      }), "object" == typeof Reflect && Reflect.construct) {
                      try {
                        Reflect.construct(t, [])
                      } catch (e) {
                        var r = e
                      }
                      Reflect.construct(e, [], t)
                    } else {
                      try {
                        t.call()
                      } catch (e) {
                        r = e
                      }
                      e.call(t.prototype)
                    }
                  } else {
                    try {
                      throw Error()
                    } catch (e) {
                      r = e
                    }(t = e()) && "function" == typeof t.catch && t.catch(function() {})
                  }
                } catch (e) {
                  if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                }
                return [null, null]
              }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot"
            });
            var o = r.DetermineComponentFrameRoot(),
              a = o[0],
              s = o[1];
            if (a && s) {
              var l = a.split("\n"),
                u = s.split("\n");
              for (i = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot");) r++;
              for (; i < u.length && !u[i].includes("DetermineComponentFrameRoot");) i++;
              if (r === l.length || i === u.length)
                for (r = l.length - 1, i = u.length - 1; r >= 1 && i >= 0 && l[r] !== u[i];) i--;
              for (; r >= 1 && i >= 0; r--, i--)
                if (l[r] !== u[i]) {
                  if (1 !== r || 1 !== i)
                    do {
                      if (r--, 0 > --i || l[r] !== u[i]) {
                        var c = "\n" + l[r].replace(" at new ", " at ");
                        return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                      }
                    } while (r >= 1 && i >= 0);
                  break
                }
            }
          } finally {
            Jr = !1, Error.prepareStackTrace = t
          }
          return (t = e ? e.displayName || e.name : "") ? Qr(t) : ""
        }

        function ni(e) {
          if ("string" == typeof e) return Qr(e);
          if ("function" == typeof e) return e.prototype && e.prototype.isReactComponent ? e = ei(e, !0) : ei(e, !1);
          if ("object" == typeof e && null !== e) {
            switch (e.$$typeof) {
              case p:
                return ei(e.render, !1);
              case m:
                return ei(e.type, !1);
              case v:
                var n = e,
                  t = n.B;
                n = n.k;
                try {
                  e = n(t)
                } catch {
                  return Qr("Lazy")
                }
                return ni(e)
            }
            if ("string" == typeof e.name) return t = e.env, Qr(e.name + (t ? " [" + t + "]" : ""))
          }
          switch (e) {
            case A:
              return Qr("SuspenseList");
            case g:
              return Qr("Suspense")
          }
          return ""
        }

        function ti(e) {
          if ("object" == typeof e && null !== e && "string" == typeof e.environmentName) {
            var n = e.environmentName;
            "string" == typeof(e = [e].slice(0))[0] ? e.splice(0, 1, "%c%s%c " + e[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + n + " ", ""): e.splice(0, 0, "%c%s%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + n + " ", ""), e.unshift(console), (n = qt.apply(console.error, e))()
          } else console.error(e);
          return null
        }

        function ri() {}

        function ii(e, n, t, r, i, o, a, s, l, u, c) {
          var f = new Set;
          this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = n, this.rootFormatContext = t, this.progressiveChunkSize = void 0 === r ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedRootSegment = null, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === i ? ti : i, this.onPostpone = void 0 === u ? ri : u, this.onAllReady = void 0 === o ? ri : o, this.onShellReady = void 0 === a ? ri : a, this.onShellError = void 0 === s ? ri : s, this.onFatalError = void 0 === l ? ri : l, this.formState = void 0 === c ? null : c
        }

        function oi(e, n, t, r, i, o, a, s, l, u, c, f) {
          return (t = fi(n = new ii(n, t, r, i, o, a, s, l, u, c, f), 0, null, r, !1, !1)).parentFlushed = !0, hi(e = ui(n, null, e, -1, null, t, null, n.abortableTasks, null, r, null, sr, null, !1)), n.pingedTasks.push(e), n
        }
        var ai = null;

        function si(e, n) {
          e.pingedTasks.push(n), 1 === e.pingedTasks.length && (e.flushScheduled = null !== e.destination, null !== e.trackedPostpones || 10 === e.status ? R(function() {
            return Ii(e)
          }) : F(function() {
            return Ii(e)
          }))
        }

        function li(e, n) {
          return {
            status: 0,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: n,
            errorDigest: null,
            contentState: Dt(),
            fallbackState: Dt(),
            trackedContentKeyPath: null,
            trackedFallbackNode: null
          }
        }

        function ui(e, n, t, r, i, o, a, s, l, u, c, f, h, d) {
          e.allPendingTasks++, null === i ? e.pendingRootTasks++ : i.pendingTasks++;
          var p = {
            replay: null,
            node: t,
            childIndex: r,
            ping: function() {
              return si(e, p)
            },
            blockedBoundary: i,
            blockedSegment: o,
            hoistableState: a,
            abortSet: s,
            keyPath: l,
            formatContext: u,
            context: c,
            treeContext: f,
            componentStack: h,
            thenableState: n,
            isFallback: d
          };
          return s.add(p), p
        }

        function ci(e, n, t, r, i, o, a, s, l, u, c, f, h, d) {
          e.allPendingTasks++, null === o ? e.pendingRootTasks++ : o.pendingTasks++, t.pendingTasks++;
          var p = {
            replay: t,
            node: r,
            childIndex: i,
            ping: function() {
              return si(e, p)
            },
            blockedBoundary: o,
            blockedSegment: null,
            hoistableState: a,
            abortSet: s,
            keyPath: l,
            formatContext: u,
            context: c,
            treeContext: f,
            componentStack: h,
            thenableState: n,
            isFallback: d
          };
          return s.add(p), p
        }

        function fi(e, n, t, r, i, o) {
          return {
            status: 0,
            id: -1,
            index: n,
            parentFlushed: !1,
            chunks: [],
            children: [],
            parentFormatContext: r,
            boundary: t,
            lastPushedText: i,
            textEmbedded: o
          }
        }

        function hi(e) {
          var n = e.node;
          "object" == typeof n && null !== n && n.$$typeof === a && (e.componentStack = {
            parent: e.componentStack,
            type: n.type
          })
        }

        function di(e) {
          var n = {};
          return e && Object.defineProperty(n, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
              try {
                var t = "",
                  r = e;
                do {
                  t += ni(r.type), r = r.parent
                } while (r);
                var i = t
              } catch (e) {
                i = "\nError generating stack: " + e.message + "\n" + e.stack
              }
              return Object.defineProperty(n, "componentStack", {
                value: i
              }), i
            }
          }), n
        }

        function pi(e, n, t) {
          if (null == (n = (e = e.onError)(n, t)) || "string" == typeof n) return n
        }

        function gi(e, n) {
          var t = e.onShellError,
            r = e.onFatalError;
          t(n), r(n), null !== e.destination ? (e.status = 14, V(e.destination, n)) : (e.status = 13, e.fatalError = n)
        }

        function Ai(e, n, t, r, i, o) {
          var a = n.thenableState;
          for (n.thenableState = null, mr = {}, vr = n, br = e, Cr = t, xr = Br = 0, Sr = -1, Lr = 0, Fr = a, e = r(i, o); Er;) Er = !1, xr = Br = 0, Sr = -1, Lr = 0, Mr += 1, kr = null, e = r(i, o);
          return _r(), e
        }

        function mi(e, n, t, r, i, o, a) {
          var s = !1;
          if (0 !== o && null !== e.formState) {
            var l = n.blockedSegment;
            if (null !== l) {
              s = !0, l = l.chunks;
              for (var u = 0; o > u; u++) u === a ? l.push(Ke) : l.push(Xe)
            }
          }
          o = n.keyPath, n.keyPath = t, i ? (t = n.treeContext, n.treeContext = lr(t, 1, 0), xi(e, n, r, -1), n.treeContext = t) : s ? xi(e, n, r, -1) : Ci(e, n, r, -1), n.keyPath = o
        }

        function vi(e, n, t, i, a, s) {
          if ("function" == typeof i)
            if (i.prototype && i.prototype.isReactComponent) {
              var w = a;
              if ("ref" in a)
                for (var E in w = {}, a) "ref" !== E && (w[E] = a[E]);
              var x = i.defaultProps;
              if (x)
                for (var S in w === a && (w = W({}, w, a)), x) void 0 === w[S] && (w[S] = x[S]);
              a = w, w = Qt, "object" == typeof(x = i.contextType) && null !== x && (w = x.N);
              var L = void 0 !== (w = new i(a, w)).state ? w.state : null;
              if (w.updater = ar, w.props = a, w.state = L, x = {
                  queue: [],
                  replace: !1
                }, w.Z = x, s = i.contextType, w.context = "object" == typeof s && null !== s ? s.N : Qt, "function" == typeof(s = i.getDerivedStateFromProps) && (L = null == (s = s(a, L)) ? L : W({}, L, s), w.state = L), "function" != typeof i.getDerivedStateFromProps && "function" != typeof w.getSnapshotBeforeUpdate && ("function" == typeof w.UNSAFE_componentWillMount || "function" == typeof w.componentWillMount))
                if (i = w.state, "function" == typeof w.componentWillMount && w.componentWillMount(), "function" == typeof w.UNSAFE_componentWillMount && w.UNSAFE_componentWillMount(), i !== w.state && ar.enqueueReplaceState(w, w.state, null), null !== x.queue && x.queue.length > 0)
                  if (i = x.queue, s = x.replace, x.queue = null, x.replace = !1, s && 1 === i.length) w.state = i[0];
                  else {
                    for (x = s ? i[0] : w.state, L = !0, s = s ? 1 : 0; s < i.length; s++) null != (S = "function" == typeof(S = i[s]) ? S.call(w, x, a, void 0) : S) && (L ? (L = !1, x = W({}, x, S)) : W(x, S));
                    w.state = x
                  }
              else x.queue = null;
              if (i = w.render(), 12 === e.status) throw null;
              a = n.keyPath, n.keyPath = t, Ci(e, n, i, -1), n.keyPath = a
            } else {
              if (i = Ai(e, n, t, i, a, void 0), 12 === e.status) throw null;
              mi(e, n, t, i, 0 !== Br, xr, Sr)
            }
          else {
            if ("string" != typeof i) {
              switch (i) {
                case k:
                case C:
                case u:
                case c:
                case l:
                  return i = n.keyPath, n.keyPath = t, Ci(e, n, a.children, -1), void(n.keyPath = i);
                case y:
                  return void("hidden" !== a.mode && (i = n.keyPath, n.keyPath = t, Ci(e, n, a.children, -1), n.keyPath = i));
                case A:
                  return i = n.keyPath, n.keyPath = t, Ci(e, n, a.children, -1), void(n.keyPath = i);
                case b:
                  throw Error(o(343));
                case g:
                  e: if (null !== n.replay) {
                    i = n.keyPath, n.keyPath = t, t = a.children;
                    try {
                      xi(e, n, t, -1)
                    } finally {
                      n.keyPath = i
                    }
                  } else {
                    i = n.keyPath;
                    var F = n.blockedBoundary,
                      T = n.hoistableState;
                    s = n.blockedSegment, S = a.fallback, a = a.children;
                    var M = new Set;
                    E = li(0, M), null !== e.trackedPostpones && (E.trackedContentKeyPath = t);
                    var R = fi(0, s.chunks.length, E, n.formatContext, !1, !1);
                    s.children.push(R), s.lastPushedText = !1;
                    var H = fi(0, 0, null, n.formatContext, !1, !1);
                    if (H.parentFlushed = !0, null !== e.trackedPostpones) {
                      x = [(w = [t[0], "Suspense Fallback", t[2]])[1], w[2],
                        [], null
                      ], e.trackedPostpones.workingMap.set(w, x), E.trackedFallbackNode = x, n.blockedSegment = R, n.keyPath = w, R.status = 6;
                      try {
                        xi(e, n, S, -1), R.lastPushedText && R.textEmbedded && R.chunks.push(Ee), R.status = 1
                      } catch (n) {
                        throw R.status = 12 === e.status ? 3 : 4, n
                      } finally {
                        n.blockedSegment = s, n.keyPath = i
                      }
                      hi(n = ui(e, null, a, -1, E, H, E.contentState, n.abortSet, t, n.formatContext, n.context, n.treeContext, n.componentStack, n.isFallback)), e.pingedTasks.push(n)
                    } else {
                      n.blockedBoundary = E, n.hoistableState = E.contentState, n.blockedSegment = H, n.keyPath = t, H.status = 6;
                      try {
                        if (xi(e, n, a, -1), H.lastPushedText && H.textEmbedded && H.chunks.push(Ee), H.status = 1, Hi(E, H), 0 === E.pendingTasks && 0 === E.status) {
                          E.status = 1;
                          break e
                        }
                      } catch (t) {
                        E.status = 4, 12 === e.status ? (H.status = 3, w = e.fatalError) : (H.status = 4, w = t), L = pi(e, w, x = di(n.componentStack)), E.errorDigest = L, wi(e, E)
                      } finally {
                        n.blockedBoundary = F, n.hoistableState = T, n.blockedSegment = s, n.keyPath = i
                      }
                      hi(n = ui(e, null, S, -1, F, R, E.fallbackState, M, [t[0], "Suspense Fallback", t[2]], n.formatContext, n.context, n.treeContext, n.componentStack, !0)), e.pingedTasks.push(n)
                    }
                  }
                  return
              }
              if ("object" == typeof i && null !== i) switch (i.$$typeof) {
                case p:
                  if ("ref" in a)
                    for (R in w = {}, a) "ref" !== R && (w[R] = a[R]);
                  else w = a;
                  return void mi(e, n, t, i = Ai(e, n, t, i.render, w, s), 0 !== Br, xr, Sr);
                case m:
                  return void vi(e, n, t, i.type, a, s);
                case f:
                case d:
                  if (x = a.children, w = n.keyPath, a = a.value, L = i.N, i.N = a, Jt = i = {
                      parent: s = Jt,
                      depth: null === s ? 0 : s.depth + 1,
                      context: i,
                      parentValue: L,
                      value: a
                    }, n.context = i, n.keyPath = t, Ci(e, n, x, -1), null === (e = Jt)) throw Error(o(403));
                  return e.context.N = e.parentValue, e = Jt = e.parent, n.context = e, void(n.keyPath = w);
                case h:
                  return i = (a = a.children)(i.j.N), a = n.keyPath, n.keyPath = t, Ci(e, n, i, -1), void(n.keyPath = a);
                case v:
                  if (i = (w = i.k)(i.B), 12 === e.status) throw null;
                  return void vi(e, n, t, i, a, s)
              }
              throw Error(o(130, null == i ? i : typeof i, ""))
            }
            if (null === (w = n.blockedSegment)) w = a.children, x = n.formatContext, L = n.keyPath, n.formatContext = we(x, i, a), n.keyPath = t, xi(e, n, w, -1), n.formatContext = x, n.keyPath = L;
            else {
              L = function(e, n, t, i, a, s, l, u, c) {
                switch (n) {
                  case "div":
                  case "span":
                  case "svg":
                  case "path":
                  case "g":
                  case "p":
                  case "li":
                  case "annotation-xml":
                  case "color-profile":
                  case "font-face":
                  case "font-face-src":
                  case "font-face-uri":
                  case "font-face-format":
                  case "font-face-name":
                  case "missing-glyph":
                    break;
                  case "a":
                    e.push(un("a"));
                    var f, h = null,
                      d = null;
                    for (f in t)
                      if (Z.call(t, f)) {
                        var p = t[f];
                        if (null != p) switch (f) {
                          case "children":
                            h = p;
                            break;
                          case "dangerouslySetInnerHTML":
                            d = p;
                            break;
                          case "href":
                            "" === p ? _e(e, "href", "") : Ze(e, f, p);
                            break;
                          default:
                            Ze(e, f, p)
                        }
                      } if (e.push(Ue), Ge(e, d, h), "string" == typeof h) {
                      e.push(P(X(h)));
                      var g = null
                    } else g = h;
                    return g;
                  case "select":
                    e.push(un("select"));
                    var A, m = null,
                      v = null;
                    for (A in t)
                      if (Z.call(t, A)) {
                        var b = t[A];
                        if (null != b) switch (A) {
                          case "children":
                            m = b;
                            break;
                          case "dangerouslySetInnerHTML":
                            v = b;
                            break;
                          case "defaultValue":
                          case "value":
                            break;
                          default:
                            Ze(e, A, b)
                        }
                      } return e.push(Ue), Ge(e, v, m), m;
                  case "option":
                    var C = l.selectedValue;
                    e.push(un("option"));
                    var y, k = null,
                      w = null,
                      E = null,
                      x = null;
                    for (y in t)
                      if (Z.call(t, y)) {
                        var S = t[y];
                        if (null != S) switch (y) {
                          case "children":
                            k = S;
                            break;
                          case "selected":
                            E = S;
                            break;
                          case "dangerouslySetInnerHTML":
                            x = S;
                            break;
                          case "value":
                            w = S;
                          default:
                            Ze(e, y, S)
                        }
                      } if (null != C) {
                      var L = null !== w ? "" + w : function(e) {
                        var n = "";
                        return r.Children.forEach(e, function(e) {
                          null != e && (n += e)
                        }), n
                      }(k);
                      if (B(C)) {
                        for (var F = 0; F < C.length; F++)
                          if ("" + C[F] === L) {
                            e.push(ze);
                            break
                          }
                      } else "" + C === L && e.push(ze)
                    } else E && e.push(ze);
                    return e.push(Ue), Ge(e, x, k), k;
                  case "textarea":
                    e.push(un("textarea"));
                    var T, M = null,
                      R = null,
                      H = null;
                    for (T in t)
                      if (Z.call(t, T)) {
                        var N = t[T];
                        if (null != N) switch (T) {
                          case "children":
                            H = N;
                            break;
                          case "value":
                            M = N;
                            break;
                          case "defaultValue":
                            R = N;
                            break;
                          case "dangerouslySetInnerHTML":
                            throw Error(o(91));
                          default:
                            Ze(e, T, N)
                        }
                      } if (null === M && null !== R && (M = R), e.push(Ue), null != H) {
                      if (null != M) throw Error(o(92));
                      if (B(H)) {
                        if (H.length > 1) throw Error(o(93));
                        M = "" + H[0]
                      }
                      M = "" + H
                    }
                    return "string" == typeof M && "\n" === M[0] && e.push(an), null !== M && e.push(P(X("" + M))), null;
                  case "input":
                    e.push(un("input"));
                    var I, _ = null,
                      j = null,
                      O = null,
                      D = null,
                      V = null,
                      U = null,
                      $ = null,
                      G = null,
                      Y = null;
                    for (I in t)
                      if (Z.call(t, I)) {
                        var q = t[I];
                        if (null != q) switch (I) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(399, "input"));
                          case "name":
                            _ = q;
                            break;
                          case "formAction":
                            j = q;
                            break;
                          case "formEncType":
                            O = q;
                            break;
                          case "formMethod":
                            D = q;
                            break;
                          case "formTarget":
                            V = q;
                            break;
                          case "defaultChecked":
                            Y = q;
                            break;
                          case "defaultValue":
                            $ = q;
                            break;
                          case "checked":
                            G = q;
                            break;
                          case "value":
                            U = q;
                            break;
                          default:
                            Ze(e, I, q)
                        }
                      } var K = We(e, i, a, j, O, D, V, _);
                    return null !== G ? Ie(e, "checked", G) : null !== Y && Ie(e, "checked", Y), null !== U ? Ze(e, "value", U) : null !== $ && Ze(e, "value", $), e.push($e), K?.forEach(Pe, e), null;
                  case "button":
                    e.push(un("button"));
                    var Q, J = null,
                      ee = null,
                      te = null,
                      re = null,
                      ie = null,
                      oe = null,
                      se = null;
                    for (Q in t)
                      if (Z.call(t, Q)) {
                        var le = t[Q];
                        if (null != le) switch (Q) {
                          case "children":
                            J = le;
                            break;
                          case "dangerouslySetInnerHTML":
                            ee = le;
                            break;
                          case "name":
                            te = le;
                            break;
                          case "formAction":
                            re = le;
                            break;
                          case "formEncType":
                            ie = le;
                            break;
                          case "formMethod":
                            oe = le;
                            break;
                          case "formTarget":
                            se = le;
                            break;
                          default:
                            Ze(e, Q, le)
                        }
                      } var ue = We(e, i, a, re, ie, oe, se, te);
                    if (e.push(Ue), ue?.forEach(Pe, e), Ge(e, ee, J), "string" == typeof J) {
                      e.push(P(X(J)));
                      var ce = null
                    } else ce = J;
                    return ce;
                  case "form":
                    e.push(un("form"));
                    var fe, he = null,
                      de = null,
                      pe = null,
                      ge = null,
                      Ae = null,
                      me = null;
                    for (fe in t)
                      if (Z.call(t, fe)) {
                        var ve = t[fe];
                        if (null != ve) switch (fe) {
                          case "children":
                            he = ve;
                            break;
                          case "dangerouslySetInnerHTML":
                            de = ve;
                            break;
                          case "action":
                            pe = ve;
                            break;
                          case "encType":
                            ge = ve;
                            break;
                          case "method":
                            Ae = ve;
                            break;
                          case "target":
                            me = ve;
                            break;
                          default:
                            Ze(e, fe, ve)
                        }
                      } var be = null,
                      Ce = null;
                    if ("function" == typeof pe) {
                      var ye = Ve(i, pe);
                      null !== ye ? (pe = ye.action || "", ge = ye.encType, Ae = ye.method, me = ye.target, be = ye.data, Ce = ye.name) : (e.push(Me, P("action"), Re, je, He), me = Ae = ge = pe = null, qe(i, a))
                    }
                    if (null != pe && Ze(e, "action", pe), null != ge && Ze(e, "encType", ge), null != Ae && Ze(e, "method", Ae), null != me && Ze(e, "target", me), e.push(Ue), null !== Ce && (e.push(Oe), _e(e, "name", Ce), e.push($e), be?.forEach(Pe, e)), Ge(e, de, he), "string" == typeof he) {
                      e.push(P(X(he)));
                      var ke = null
                    } else ke = he;
                    return ke;
                  case "menuitem":
                    for (var we in e.push(un("menuitem")), t)
                      if (Z.call(t, we)) {
                        var Be = t[we];
                        if (null != Be) switch (we) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(400));
                          default:
                            Ze(e, we, Be)
                        }
                      } return e.push(Ue), null;
                  case "object":
                    e.push(un("object"));
                    var xe, Se = null,
                      Le = null;
                    for (xe in t)
                      if (Z.call(t, xe)) {
                        var Fe = t[xe];
                        if (null != Fe) switch (xe) {
                          case "children":
                            Se = Fe;
                            break;
                          case "dangerouslySetInnerHTML":
                            Le = Fe;
                            break;
                          case "data":
                            var Ne = ne("" + Fe);
                            if ("" === Ne) break;
                            e.push(Me, P("data"), Re, P(X(Ne)), He);
                            break;
                          default:
                            Ze(e, xe, Fe)
                        }
                      } if (e.push(Ue), Ge(e, Le, Se), "string" == typeof Se) {
                      e.push(P(X(Se)));
                      var De = null
                    } else De = Se;
                    return De;
                  case "title":
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp) var Ye = tn(e, t);
                    else c ? Ye = null : (tn(a.hoistableChunks, t), Ye = void 0);
                    return Ye;
                  case "link":
                    var Ke = t.rel,
                      Xe = t.href,
                      sn = t.precedence;
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp || "string" != typeof Ke || "string" != typeof Xe || "" === Xe) {
                      Qe(e, t);
                      var ln = null
                    } else if ("stylesheet" === t.rel)
                      if ("string" != typeof sn || null != t.disabled || t.onLoad || t.onError) ln = Qe(e, t);
                      else {
                        var fn = a.styles.get(sn),
                          dn = i.styleResources.hasOwnProperty(Xe) ? i.styleResources[Xe] : void 0;
                        if (null !== dn) {
                          i.styleResources[Xe] = null, fn || (fn = {
                            precedence: P(X(sn)),
                            rules: [],
                            hrefs: [],
                            sheets: new Map
                          }, a.styles.set(sn, fn));
                          var pn = {
                            state: 0,
                            props: W({}, t, {
                              "data-precedence": t.precedence,
                              precedence: null
                            })
                          };
                          if (dn) {
                            2 === dn.length && Vt(pn.props, dn);
                            var gn = a.preloads.stylesheets.get(Xe);
                            gn && gn.length > 0 ? gn.length = 0 : pn.state = 1
                          }
                          fn.sheets.set(Xe, pn), s && s.stylesheets.add(pn)
                        } else if (fn) {
                          var An = fn.sheets.get(Xe);
                          An && s && s.stylesheets.add(An)
                        }
                        u && e.push(Ee), ln = null
                      }
                    else t.onLoad || t.onError ? ln = Qe(e, t) : (u && e.push(Ee), ln = c ? null : Qe(a.hoistableChunks, t));
                    return ln;
                  case "script":
                    var mn = t.async;
                    if ("string" != typeof t.src || !t.src || !mn || "function" == typeof mn || "symbol" == typeof mn || t.onLoad || t.onError || 3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp) var vn = rn(e, t);
                    else {
                      var bn = t.src;
                      if ("module" === t.type) var Cn = i.moduleScriptResources,
                        yn = a.preloads.moduleScripts;
                      else Cn = i.scriptResources, yn = a.preloads.scripts;
                      var kn = Cn.hasOwnProperty(bn) ? Cn[bn] : void 0;
                      if (null !== kn) {
                        Cn[bn] = null;
                        var wn = t;
                        if (kn) {
                          2 === kn.length && Vt(wn = W({}, t), kn);
                          var En = yn.get(bn);
                          En && (En.length = 0)
                        }
                        var Bn = [];
                        a.scripts.add(Bn), rn(Bn, wn)
                      }
                      u && e.push(Ee), vn = null
                    }
                    return vn;
                  case "style":
                    var xn = t.precedence,
                      Sn = t.href;
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp || "string" != typeof xn || "string" != typeof Sn || "" === Sn) {
                      e.push(un("style"));
                      var Ln, Fn = null,
                        Tn = null;
                      for (Ln in t)
                        if (Z.call(t, Ln)) {
                          var Mn = t[Ln];
                          if (null != Mn) switch (Ln) {
                            case "children":
                              Fn = Mn;
                              break;
                            case "dangerouslySetInnerHTML":
                              Tn = Mn;
                              break;
                            default:
                              Ze(e, Ln, Mn)
                          }
                        } e.push(Ue);
                      var Rn = Array.isArray(Fn) ? 2 > Fn.length ? Fn[0] : null : Fn;
                      "function" != typeof Rn && "symbol" != typeof Rn && null != Rn && e.push(P(("" + Rn).replace(Je, en))), Ge(e, Tn, Fn), e.push(hn("style"));
                      var Hn = null
                    } else {
                      var Nn = a.styles.get(xn);
                      if (null !== (i.styleResources.hasOwnProperty(Sn) ? i.styleResources[Sn] : void 0)) {
                        i.styleResources[Sn] = null, Nn ? Nn.hrefs.push(P(X(Sn))) : (Nn = {
                          precedence: P(X(xn)),
                          rules: [],
                          hrefs: [P(X(Sn))],
                          sheets: new Map
                        }, a.styles.set(xn, Nn));
                        var In, _n = Nn.rules,
                          jn = null,
                          On = null;
                        for (In in t)
                          if (Z.call(t, In)) {
                            var Pn = t[In];
                            if (null != Pn) switch (In) {
                              case "children":
                                jn = Pn;
                                break;
                              case "dangerouslySetInnerHTML":
                                On = Pn
                            }
                          } var Dn = Array.isArray(jn) ? 2 > jn.length ? jn[0] : null : jn;
                        "function" != typeof Dn && "symbol" != typeof Dn && null != Dn && _n.push(P(("" + Dn).replace(Je, en))), Ge(_n, On, jn)
                      }
                      Nn && s && s.styles.add(Nn), u && e.push(Ee), Hn = void 0
                    }
                    return Hn;
                  case "meta":
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp) var Vn = nn(e, t, "meta");
                    else u && e.push(Ee), Vn = c ? null : "string" == typeof t.charSet ? nn(a.charsetChunks, t, "meta") : "viewport" === t.name ? nn(a.viewportChunks, t, "meta") : nn(a.hoistableChunks, t, "meta");
                    return Vn;
                  case "listing":
                  case "pre":
                    e.push(un(n));
                    var Wn, Zn = null,
                      Un = null;
                    for (Wn in t)
                      if (Z.call(t, Wn)) {
                        var $n = t[Wn];
                        if (null != $n) switch (Wn) {
                          case "children":
                            Zn = $n;
                            break;
                          case "dangerouslySetInnerHTML":
                            Un = $n;
                            break;
                          default:
                            Ze(e, Wn, $n)
                        }
                      } if (e.push(Ue), null != Un) {
                      if (null != Zn) throw Error(o(60));
                      if ("object" != typeof Un || !("W" in Un)) throw Error(o(61));
                      var Gn = Un.W;
                      null != Gn && ("string" == typeof Gn && Gn.length > 0 && "\n" === Gn[0] ? e.push(an, P(Gn)) : e.push(P("" + Gn)))
                    }
                    return "string" == typeof Zn && "\n" === Zn[0] && e.push(an), Zn;
                  case "img":
                    var zn = t.src,
                      Yn = t.srcSet;
                    if (!("lazy" === t.loading || !zn && !Yn || "string" != typeof zn && null != zn || "string" != typeof Yn && null != Yn || "low" === t.fetchPriority || 3 & l.tagScope) && ("string" != typeof zn || ":" !== zn[4] || "d" !== zn[0] && "D" !== zn[0] || "a" !== zn[1] && "A" !== zn[1] || "t" !== zn[2] && "T" !== zn[2] || "a" !== zn[3] && "A" !== zn[3]) && ("string" != typeof Yn || ":" !== Yn[4] || "d" !== Yn[0] && "D" !== Yn[0] || "a" !== Yn[1] && "A" !== Yn[1] || "t" !== Yn[2] && "T" !== Yn[2] || "a" !== Yn[3] && "A" !== Yn[3])) {
                      var qn = "string" == typeof t.sizes ? t.sizes : void 0,
                        Kn = Yn ? Yn + "\n" + (qn || "") : zn,
                        Xn = a.preloads.images,
                        Qn = Xn.get(Kn);
                      if (Qn)("high" === t.fetchPriority || 10 > a.highImagePreloads.size) && (Xn.delete(Kn), a.highImagePreloads.add(Qn));
                      else if (!i.imageResources.hasOwnProperty(Kn)) {
                        i.imageResources[Kn] = ae;
                        var Jn, et = t.crossOrigin,
                          nt = "string" == typeof et ? "use-credentials" === et ? et : "" : void 0,
                          tt = a.headers;
                        tt && tt.remainingCapacity > 0 && ("high" === t.fetchPriority || 500 > tt.highImagePreloads.length) && (Jn = Wt(zn, "image", {
                          imageSrcSet: t.srcSet,
                          imageSizes: t.sizes,
                          crossOrigin: nt,
                          integrity: t.integrity,
                          nonce: t.nonce,
                          type: t.type,
                          fetchPriority: t.fetchPriority,
                          referrerPolicy: t.refererPolicy
                        }), (tt.remainingCapacity -= Jn.length + 2) >= 0) ? (a.resets.image[Kn] = ae, tt.highImagePreloads && (tt.highImagePreloads += ", "), tt.highImagePreloads += Jn) : (Qe(Qn = [], {
                          rel: "preload",
                          as: "image",
                          href: Yn ? void 0 : zn,
                          imageSrcSet: Yn,
                          imageSizes: qn,
                          crossOrigin: nt,
                          integrity: t.integrity,
                          type: t.type,
                          fetchPriority: t.fetchPriority,
                          referrerPolicy: t.referrerPolicy
                        }), "high" === t.fetchPriority || 10 > a.highImagePreloads.size ? a.highImagePreloads.add(Qn) : (a.bulkPreloads.add(Qn), Xn.set(Kn, Qn)))
                      }
                    }
                    return nn(e, t, "img");
                  case "base":
                  case "area":
                  case "br":
                  case "col":
                  case "embed":
                  case "hr":
                  case "keygen":
                  case "param":
                  case "source":
                  case "track":
                  case "wbr":
                    return nn(e, t, n);
                  case "head":
                    if (2 > l.insertionMode && null === a.headChunks) {
                      a.headChunks = [];
                      var rt = on(a.headChunks, t, "head")
                    } else rt = on(e, t, "head");
                    return rt;
                  case "html":
                    if (0 === l.insertionMode && null === a.htmlChunks) {
                      a.htmlChunks = [cn];
                      var it = on(a.htmlChunks, t, "html")
                    } else it = on(e, t, "html");
                    return it;
                  default:
                    if (-1 !== n.indexOf("-")) {
                      e.push(un(n));
                      var ot, at = null,
                        st = null;
                      for (ot in t)
                        if (Z.call(t, ot)) {
                          var lt = t[ot];
                          if (null != lt) {
                            var ut = ot;
                            switch (ot) {
                              case "children":
                                at = lt;
                                break;
                              case "dangerouslySetInnerHTML":
                                st = lt;
                                break;
                              case "style":
                                Te(e, lt);
                                break;
                              case "suppressContentEditableWarning":
                              case "suppressHydrationWarning":
                              case "ref":
                                break;
                              case "className":
                                ut = "class";
                              default:
                                if (z(ot) && "function" != typeof lt && "symbol" != typeof lt && !1 !== lt) {
                                  if (!0 === lt) lt = "";
                                  else if ("object" == typeof lt) continue;
                                  e.push(Me, P(ut), Re, P(X(lt)), He)
                                }
                            }
                          }
                        } return e.push(Ue), Ge(e, st, at), at
                    }
                }
                return on(e, t, n)
              }(w.chunks, i, a, e.resumableState, e.renderState, n.hoistableState, n.formatContext, w.lastPushedText, n.isFallback), w.lastPushedText = !1, x = n.formatContext, s = n.keyPath, n.formatContext = we(x, i, a), n.keyPath = t, xi(e, n, L, -1), n.formatContext = x, n.keyPath = s;
              e: {
                switch (n = w.chunks, e = e.resumableState, i) {
                  case "title":
                  case "style":
                  case "script":
                  case "area":
                  case "base":
                  case "br":
                  case "col":
                  case "embed":
                  case "hr":
                  case "img":
                  case "input":
                  case "keygen":
                  case "link":
                  case "meta":
                  case "param":
                  case "source":
                  case "track":
                  case "wbr":
                    break e;
                  case "body":
                    if (1 >= x.insertionMode) {
                      e.hasBody = !0;
                      break e
                    }
                    break;
                  case "html":
                    if (0 === x.insertionMode) {
                      e.hasHtml = !0;
                      break e
                    }
                }
                n.push(hn(i))
              }
              w.lastPushedText = !1
            }
          }
        }

        function bi(e, n, t, r, i) {
          var o = n.replay,
            a = n.blockedBoundary,
            s = fi(0, 0, null, n.formatContext, !1, !1);
          s.id = t, s.parentFlushed = !0;
          try {
            n.replay = null, n.blockedSegment = s, xi(e, n, r, i), s.status = 1, null === a ? e.completedRootSegment = s : (Hi(a, s), a.parentFlushed && e.partialBoundaries.push(a))
          } finally {
            n.replay = o, n.blockedSegment = null
          }
        }

        function Ci(e, n, t, r) {
          null !== n.replay && "number" == typeof n.replay.slots ? bi(e, n, n.replay.slots, t, r) : (n.node = t, n.childIndex = r, t = n.componentStack, hi(n), yi(e, n), n.componentStack = t)
        }

        function yi(e, n) {
          var t = n.node,
            r = n.childIndex;
          if (null !== t) {
            if ("object" == typeof t) {
              switch (t.$$typeof) {
                case a:
                  var i = t.type,
                    l = t.key,
                    u = t.props,
                    c = void 0 !== (t = u.ref) ? t : null,
                    f = Xt(i),
                    h = l ?? (-1 === r ? 0 : r);
                  if (l = [n.keyPath, f, h], null !== n.replay) e: {
                    var p = n.replay;
                    for (r = p.nodes, t = 0; t < r.length; t++) {
                      var A = r[t];
                      if (h === A[1]) {
                        if (4 === A.length) {
                          if (null !== f && f !== A[0]) throw Error(o(490, A[0], f));
                          var m = A[2];
                          f = A[3], h = n.node, n.replay = {
                            nodes: m,
                            slots: f,
                            pendingTasks: 1
                          };
                          try {
                            if (vi(e, n, l, i, u, c), 1 === n.replay.pendingTasks && n.replay.nodes.length > 0) throw Error(o(488));
                            n.replay.pendingTasks--
                          } catch (t) {
                            if ("object" == typeof t && null !== t && (t === hr || "function" == typeof t.then)) throw n.node === h && (n.replay = p), t;
                            n.replay.pendingTasks--, u = di(n.componentStack), Li(e, l = n.blockedBoundary, m, f, i = t, u = pi(e, i, u))
                          }
                          n.replay = p
                        } else {
                          if (i !== g) throw Error(o(490, "Suspense", Xt(i) || "Unknown"));
                          n: {
                            p = void 0,
                            i = A[5],
                            c = A[2],
                            f = A[3],
                            h = null === A[4] ? [] : A[4][2],
                            A = null === A[4] ? null : A[4][3];
                            var b = n.keyPath,
                              C = n.replay,
                              y = n.blockedBoundary,
                              k = n.hoistableState,
                              w = u.children;u = u.fallback;
                            var x = new Set,
                              S = li(0, x);S.parentFlushed = !0,
                            S.rootSegmentID = i,
                            n.blockedBoundary = S,
                            n.hoistableState = S.contentState,
                            n.keyPath = l,
                            n.replay = {
                              nodes: c,
                              slots: f,
                              pendingTasks: 1
                            };
                            try {
                              if (xi(e, n, w, -1), 1 === n.replay.pendingTasks && n.replay.nodes.length > 0) throw Error(o(488));
                              if (n.replay.pendingTasks--, 0 === S.pendingTasks && 0 === S.status) {
                                S.status = 1, e.completedBoundaries.push(S);
                                break n
                              }
                            } catch (t) {
                              S.status = 4, p = pi(e, t, m = di(n.componentStack)), S.errorDigest = p, n.replay.pendingTasks--, e.clientRenderedBoundaries.push(S)
                            } finally {
                              n.blockedBoundary = y, n.hoistableState = k, n.replay = C, n.keyPath = b
                            }
                            hi(n = ci(e, null, {
                              nodes: h,
                              slots: A,
                              pendingTasks: 0
                            }, u, -1, y, S.fallbackState, x, [l[0], "Suspense Fallback", l[2]], n.formatContext, n.context, n.treeContext, n.componentStack, !0)),
                            e.pingedTasks.push(n)
                          }
                        }
                        r.splice(t, 1);
                        break e
                      }
                    }
                  }
                  else vi(e, n, l, i, u, c);
                  return;
                case s:
                  throw Error(o(257));
                case v:
                  if (t = (m = t.k)(t.B), 12 === e.status) throw null;
                  return void Ci(e, n, t, r)
              }
              if (B(t)) return void ki(e, n, t, r);
              if ((m = null === t || "object" != typeof t ? null : "function" == typeof(m = E && t[E] || t["@@iterator"]) ? m : null) && (m = m.call(t))) {
                if (!(t = m.next()).done) {
                  u = [];
                  do {
                    u.push(t.value), t = m.next()
                  } while (!t.done);
                  ki(e, n, u, r)
                }
                return
              }
              if ("function" == typeof t.then) return n.thenableState = null, Ci(e, n, Ur(t), r);
              if (t.$$typeof === d) return Ci(e, n, t.N, r);
              throw r = {}.toString.call(t), Error(o(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r))
            }
            "string" == typeof t ? null !== (r = n.blockedSegment) && (r.lastPushedText = Be(r.chunks, t, e.renderState, r.lastPushedText)) : ("number" == typeof t || "bigint" == typeof t) && null !== (r = n.blockedSegment) && (r.lastPushedText = Be(r.chunks, "" + t, e.renderState, r.lastPushedText))
          }
        }

        function ki(e, n, t, r) {
          var i = n.keyPath;
          if (-1 === r || (n.keyPath = [n.keyPath, "Fragment", r], null === n.replay)) {
            if (a = n.treeContext, s = t.length, null !== n.replay && null !== (l = n.replay.slots) && "object" == typeof l) {
              for (r = 0; s > r; r++) u = t[r], n.treeContext = lr(a, s, r), "number" == typeof(c = l[r]) ? (bi(e, n, c, u, r), delete l[r]) : xi(e, n, u, r);
              return n.treeContext = a, void(n.keyPath = i)
            }
            for (l = 0; s > l; l++) r = t[l], n.treeContext = lr(a, s, l), xi(e, n, r, l);
            n.treeContext = a, n.keyPath = i
          } else {
            for (var a = n.replay, s = a.nodes, l = 0; l < s.length; l++) {
              var u = s[l];
              if (u[1] === r) {
                r = u[2], u = u[3], n.replay = {
                  nodes: r,
                  slots: u,
                  pendingTasks: 1
                };
                try {
                  if (ki(e, n, t, -1), 1 === n.replay.pendingTasks && n.replay.nodes.length > 0) throw Error(o(488));
                  n.replay.pendingTasks--
                } catch (i) {
                  if ("object" == typeof i && null !== i && (i === hr || "function" == typeof i.then)) throw i;
                  n.replay.pendingTasks--, t = di(n.componentStack);
                  var c = n.blockedBoundary;
                  Li(e, c, r, u, i, t = pi(e, i, t))
                }
                n.replay = a, s.splice(l, 1);
                break
              }
            }
            n.keyPath = i
          }
        }

        function wi(e, n) {
          null !== (e = e.trackedPostpones) && null !== (n = n.trackedContentKeyPath) && void 0 !== (n = e.workingMap.get(n)) && (n.length = 4, n[2] = [], n[3] = null)
        }

        function Ei(e, n, t) {
          return ci(e, t, n.replay, n.node, n.childIndex, n.blockedBoundary, n.hoistableState, n.abortSet, n.keyPath, n.formatContext, n.context, n.treeContext, n.componentStack, n.isFallback)
        }

        function Bi(e, n, t) {
          var r = n.blockedSegment,
            i = fi(0, r.chunks.length, null, n.formatContext, r.lastPushedText, !0);
          return r.children.push(i), r.lastPushedText = !1, ui(e, t, n.node, n.childIndex, n.blockedBoundary, i, n.hoistableState, n.abortSet, n.keyPath, n.formatContext, n.context, n.treeContext, n.componentStack, n.isFallback)
        }

        function xi(e, n, t, r) {
          var i = n.formatContext,
            o = n.context,
            a = n.keyPath,
            s = n.treeContext,
            l = n.componentStack,
            u = n.blockedSegment;
          if (null === u) try {
            return Ci(e, n, t, r)
          } catch (u) {
            if (_r(), "object" == typeof(t = u === hr ? gr() : u) && null !== t) {
              if ("function" == typeof t.then) return e = Ei(e, n, r = Ir()).ping, t.then(e, e), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void or(o);
              if ("Maximum call stack size exceeded" === t.message) return t = Ei(e, n, t = Ir()), e.pingedTasks.push(t), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void or(o)
            }
          } else {
            var c = u.children.length,
              f = u.chunks.length;
            try {
              return Ci(e, n, t, r)
            } catch (h) {
              if (_r(), u.children.length = c, u.chunks.length = f, "object" == typeof(t = h === hr ? gr() : h) && null !== t) {
                if ("function" == typeof t.then) return e = Bi(e, n, r = Ir()).ping, t.then(e, e), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void or(o);
                if ("Maximum call stack size exceeded" === t.message) return t = Bi(e, n, t = Ir()), e.pingedTasks.push(t), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void or(o)
              }
            }
          }
          throw n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, or(o), t
        }

        function Si(e) {
          var n = e.blockedBoundary;
          null !== (e = e.blockedSegment) && (e.status = 3, Ni(this, n, e))
        }

        function Li(e, n, t, r, i, a) {
          for (var s = 0; s < t.length; s++) {
            var l = t[s];
            if (4 === l.length) Li(e, n, l[2], l[3], i, a);
            else {
              l = l[5];
              var u = e,
                c = a,
                f = li(0, new Set);
              f.parentFlushed = !0, f.rootSegmentID = l, f.status = 4, f.errorDigest = c, f.parentFlushed && u.clientRenderedBoundaries.push(f)
            }
          }
          if (t.length = 0, null !== r) {
            if (null === n) throw Error(o(487));
            if (4 !== n.status && (n.status = 4, n.errorDigest = a, n.parentFlushed && e.clientRenderedBoundaries.push(n)), "object" == typeof r)
              for (var h in r) delete r[h]
          }
        }

        function Fi(e, n, t) {
          var r = e.blockedBoundary,
            i = e.blockedSegment;
          if (null !== i) {
            if (6 === i.status) return;
            i.status = 3
          }
          if (i = di(e.componentStack), null === r) {
            if (13 !== n.status && 14 !== n.status) {
              if (null === (r = e.replay)) return pi(n, t, i), void gi(n, t);
              r.pendingTasks--, 0 === r.pendingTasks && r.nodes.length > 0 && (e = pi(n, t, i), Li(n, null, r.nodes, r.slots, t, e)), n.pendingRootTasks--, 0 === n.pendingRootTasks && Mi(n)
            }
          } else r.pendingTasks--, 4 !== r.status && (r.status = 4, e = pi(n, t, i), r.status = 4, r.errorDigest = e, wi(n, r), r.parentFlushed && n.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(e) {
            return Fi(e, n, t)
          }), r.fallbackAbortableTasks.clear();
          n.allPendingTasks--, 0 === n.allPendingTasks && Ri(n)
        }

        function Ti(e, n) {
          try {
            var t = e.renderState,
              r = t.onHeaders;
            if (r) {
              var i = t.headers;
              if (i) {
                t.headers = null;
                var o = i.preconnects;
                if (i.fontPreloads && (o && (o += ", "), o += i.fontPreloads), i.highImagePreloads && (o && (o += ", "), o += i.highImagePreloads), !n) {
                  var a = t.styles.values(),
                    s = a.next();
                  e: for (; i.remainingCapacity > 0 && !s.done; s = a.next())
                    for (var l = s.value.sheets.values(), u = l.next(); i.remainingCapacity > 0 && !u.done; u = l.next()) {
                      var c = u.value,
                        f = c.props,
                        h = f.href,
                        d = c.props,
                        p = Wt(d.href, "style", {
                          crossOrigin: d.crossOrigin,
                          integrity: d.integrity,
                          nonce: d.nonce,
                          type: d.type,
                          fetchPriority: d.fetchPriority,
                          referrerPolicy: d.referrerPolicy,
                          media: d.media
                        });
                      if (0 > (i.remainingCapacity -= p.length + 2)) break e;
                      t.resets.style[h] = ae, o && (o += ", "), o += p, t.resets.style[h] = "string" == typeof f.crossOrigin || "string" == typeof f.integrity ? [f.crossOrigin, f.integrity] : ae
                    }
                }
                r(o ? {
                  Link: o
                } : {})
              }
            }
          } catch (n) {
            pi(e, n, {})
          }
        }

        function Mi(e) {
          null === e.trackedPostpones && Ti(e, !0), e.onShellError = ri, (e = e.onShellReady)()
        }

        function Ri(e) {
          Ti(e, null === e.trackedPostpones || null === e.completedRootSegment || 5 !== e.completedRootSegment.status), (e = e.onAllReady)()
        }

        function Hi(e, n) {
          if (0 === n.chunks.length && 1 === n.children.length && null === n.children[0].boundary && -1 === n.children[0].id) {
            var t = n.children[0];
            t.id = n.id, t.parentFlushed = !0, 1 === t.status && Hi(e, t)
          } else e.completedSegments.push(n)
        }

        function Ni(e, n, t) {
          if (null === n) {
            if (null !== t && t.parentFlushed) {
              if (null !== e.completedRootSegment) throw Error(o(389));
              e.completedRootSegment = t
            }
            e.pendingRootTasks--, 0 === e.pendingRootTasks && Mi(e)
          } else n.pendingTasks--, 4 !== n.status && (0 === n.pendingTasks ? (0 === n.status && (n.status = 1), null !== t && t.parentFlushed && 1 === t.status && Hi(n, t), n.parentFlushed && e.completedBoundaries.push(n), 1 === n.status && (n.fallbackAbortableTasks.forEach(Si, e), n.fallbackAbortableTasks.clear())) : null !== t && t.parentFlushed && 1 === t.status && (Hi(n, t), 1 === n.completedSegments.length && n.parentFlushed && e.partialBoundaries.push(n)));
          e.allPendingTasks--, 0 === e.allPendingTasks && Ri(e)
        }

        function Ii(e) {
          if (14 !== e.status && 13 !== e.status) {
            var n = Jt,
              t = te.H;
            te.H = zr;
            var r = te.A;
            te.A = Xr;
            var i = ai;
            ai = e;
            var a = Kr;
            Kr = e.resumableState;
            try {
              var s, l = e.pingedTasks;
              for (s = 0; s < l.length; s++) {
                var u = l[s],
                  c = e,
                  f = u.blockedSegment;
                if (null === f) {
                  var h = c;
                  if (0 !== u.replay.pendingTasks) {
                    or(u.context);
                    try {
                      if ("number" == typeof u.replay.slots ? bi(h, u, u.replay.slots, u.node, u.childIndex) : yi(h, u), 1 === u.replay.pendingTasks && u.replay.nodes.length > 0) throw Error(o(488));
                      u.replay.pendingTasks--, u.abortSet.delete(u), Ni(h, u.blockedBoundary, null)
                    } catch (e) {
                      _r();
                      var d = e === hr ? gr() : e;
                      if ("object" == typeof d && null !== d && "function" == typeof d.then) {
                        var p = u.ping;
                        d.then(p, p), u.thenableState = Ir()
                      } else {
                        u.replay.pendingTasks--, u.abortSet.delete(u);
                        var g = di(u.componentStack);
                        c = void 0;
                        var A = h,
                          m = u.blockedBoundary,
                          v = 12 === h.status ? h.fatalError : d;
                        Li(A, m, u.replay.nodes, u.replay.slots, v, c = pi(A, v, g)), h.pendingRootTasks--, 0 === h.pendingRootTasks && Mi(h), h.allPendingTasks--, 0 === h.allPendingTasks && Ri(h)
                      }
                    }
                  }
                } else if (h = void 0, 0 === (A = f).status) {
                  A.status = 6, or(u.context);
                  var b = A.children.length,
                    C = A.chunks.length;
                  try {
                    yi(c, u), A.lastPushedText && A.textEmbedded && A.chunks.push(Ee), u.abortSet.delete(u), A.status = 1, Ni(c, u.blockedBoundary, A)
                  } catch (e) {
                    _r(), A.children.length = b, A.chunks.length = C;
                    var y = e === hr ? gr() : 12 === c.status ? c.fatalError : e;
                    if ("object" == typeof y && null !== y && "function" == typeof y.then) {
                      A.status = 0, u.thenableState = Ir();
                      var k = u.ping;
                      y.then(k, k)
                    } else {
                      var w = di(u.componentStack);
                      u.abortSet.delete(u), A.status = 4;
                      var E = u.blockedBoundary;
                      h = pi(c, y, w), null === E ? gi(c, y) : (E.pendingTasks--, 4 !== E.status && (E.status = 4, E.errorDigest = h, wi(c, E), E.parentFlushed && c.clientRenderedBoundaries.push(E))), c.allPendingTasks--, 0 === c.allPendingTasks && Ri(c)
                    }
                  }
                }
              }
              l.splice(0, s), null !== e.destination && Vi(e, e.destination)
            } catch (n) {
              pi(e, n, {}), gi(e, n)
            } finally {
              Kr = a, te.H = t, te.A = r, t === zr && or(n), ai = i
            }
          }
        }

        function _i(e, n, t, r) {
          switch (t.parentFlushed = !0, t.status) {
            case 0:
              t.id = e.nextSegmentId++;
            case 5:
              return r = t.id, t.lastPushedText = !1, t.textEmbedded = !1, e = e.renderState, I(n, pn), I(n, e.placeholderPrefix), I(n, e = P(r.toString(16))), _(n, gn);
            case 1:
              t.status = 2;
              var i = !0,
                a = t.chunks,
                s = 0;
              t = t.children;
              for (var l = 0; l < t.length; l++) {
                for (i = t[l]; s < i.index; s++) I(n, a[s]);
                i = ji(e, n, i, r)
              }
              for (; s < a.length - 1; s++) I(n, a[s]);
              return s < a.length && (i = _(n, a[s])), i;
            default:
              throw Error(o(390))
          }
        }

        function ji(e, n, t, r) {
          var i = t.boundary;
          if (null === i) return _i(e, n, t, r);
          if (i.parentFlushed = !0, 4 === i.status) i = i.errorDigest, _(n, bn), I(n, yn), i && (I(n, wn), I(n, P(X(i))), I(n, kn)), _(n, En), _i(e, n, t, r);
          else if (1 !== i.status) 0 === i.status && (i.rootSegmentID = e.nextSegmentId++), i.completedSegments.length > 0 && e.partialBoundaries.push(i), Bn(n, e.renderState, i.rootSegmentID), r && ((i = i.fallbackState).styles.forEach(zt, r), i.stylesheets.forEach(Yt, r)), _i(e, n, t, r);
          else if (i.byteSize > e.progressiveChunkSize) i.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(i), Bn(n, e.renderState, i.rootSegmentID), _i(e, n, t, r);
          else {
            if (r && ((t = i.contentState).styles.forEach(zt, r), t.stylesheets.forEach(Yt, r)), _(n, An), 1 !== (t = i.completedSegments).length) throw Error(o(391));
            ji(e, n, t[0], r)
          }
          return _(n, Cn)
        }

        function Oi(e, n, t, r) {
          return function(e, n, t, r) {
              switch (t.insertionMode) {
                case 0:
                case 1:
                case 2:
                  return I(e, xn), I(e, n.segmentPrefix), I(e, P(r.toString(16))), _(e, Sn);
                case 3:
                  return I(e, Fn), I(e, n.segmentPrefix), I(e, P(r.toString(16))), _(e, Tn);
                case 4:
                  return I(e, Rn), I(e, n.segmentPrefix), I(e, P(r.toString(16))), _(e, Hn);
                case 5:
                  return I(e, In), I(e, n.segmentPrefix), I(e, P(r.toString(16))), _(e, _n);
                case 6:
                  return I(e, On), I(e, n.segmentPrefix), I(e, P(r.toString(16))), _(e, Pn);
                case 7:
                  return I(e, Vn), I(e, n.segmentPrefix), I(e, P(r.toString(16))), _(e, Wn);
                case 8:
                  return I(e, Un), I(e, n.segmentPrefix), I(e, P(r.toString(16))), _(e, $n);
                default:
                  throw Error(o(397))
              }
            }(n, e.renderState, t.parentFormatContext, t.id), ji(e, n, t, r),
            function(e, n) {
              switch (n.insertionMode) {
                case 0:
                case 1:
                case 2:
                  return _(e, Ln);
                case 3:
                  return _(e, Mn);
                case 4:
                  return _(e, Nn);
                case 5:
                  return _(e, jn);
                case 6:
                  return _(e, Dn);
                case 7:
                  return _(e, Zn);
                case 8:
                  return _(e, Gn);
                default:
                  throw Error(o(397))
              }
            }(n, t.parentFormatContext)
        }

        function Pi(e, n, t) {
          for (var r = t.completedSegments, i = 0; i < r.length; i++) Di(e, n, t, r[i]);
          r.length = 0, wt(n, t.contentState, e.renderState), r = e.resumableState, e = e.renderState, i = t.rootSegmentID, t = t.contentState;
          var a = e.stylesToHoist;
          return e.stylesToHoist = !1, I(n, e.startInlineScript), a ? 2 & r.instructions ? 8 & r.instructions ? I(n, nt) : (r.instructions |= 8, I(n, et)) : (r.instructions |= 10, I(n, Jn)) : 2 & r.instructions ? I(n, Qn) : (r.instructions |= 2, I(n, Xn)), r = P(i.toString(16)), I(n, e.boundaryPrefix), I(n, r), I(n, tt), I(n, e.segmentPrefix), I(n, r), a ? (I(n, rt), function(e, n) {
            I(e, It);
            var t = It;
            n.stylesheets.forEach(function(n) {
              if (2 !== n.state)
                if (3 === n.state) I(e, t), I(e, P(pt("" + n.props.href))), I(e, Ot), t = _t;
                else {
                  I(e, t);
                  var r = n.props["data-precedence"],
                    i = n.props,
                    a = ne("" + n.props.href);
                  for (var s in I(e, P(pt(a))), r = "" + r, I(e, jt), I(e, P(pt(r))), i)
                    if (Z.call(i, s) && null != (r = i[s])) switch (s) {
                      case "href":
                      case "rel":
                      case "precedence":
                      case "data-precedence":
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(399, "link"));
                      default:
                        Pt(e, s, r)
                    }
                  I(e, Ot), t = _t, n.state = 3
                }
            }), I(e, Ot)
          }(n, t)) : I(n, it), t = _(n, ot), dn(n, e) && t
        }

        function Di(e, n, t, r) {
          if (2 === r.status) return !0;
          var i = t.contentState,
            a = r.id;
          if (-1 === a) {
            if (-1 === (r.id = t.rootSegmentID)) throw Error(o(392));
            return Oi(e, n, r, i)
          }
          return a === t.rootSegmentID ? Oi(e, n, r, i) : (Oi(e, n, r, i), t = e.resumableState, I(n, (e = e.renderState).startInlineScript), 1 & t.instructions ? I(n, Yn) : (t.instructions |= 1, I(n, zn)), I(n, e.segmentPrefix), I(n, a = P(a.toString(16))), I(n, qn), I(n, e.placeholderPrefix), I(n, a), n = _(n, Kn))
        }

        function Vi(e, n) {
          H = new Uint8Array(2048), N = 0;
          try {
            if (0 >= e.pendingRootTasks) {
              var t, r = e.completedRootSegment;
              if (null !== r) {
                if (5 === r.status) return;
                var i, o = e.renderState,
                  a = o.htmlChunks,
                  s = o.headChunks;
                if (a) {
                  for (i = 0; i < a.length; i++) I(n, a[i]);
                  if (s)
                    for (i = 0; i < s.length; i++) I(n, s[i]);
                  else I(n, un("head")), I(n, Ue)
                } else if (s)
                  for (i = 0; i < s.length; i++) I(n, s[i]);
                var l = o.charsetChunks;
                for (i = 0; i < l.length; i++) I(n, l[i]);
                l.length = 0, o.preconnects.forEach(Et, n), o.preconnects.clear();
                var u = o.viewportChunks;
                for (i = 0; i < u.length; i++) I(n, u[i]);
                u.length = 0, o.fontPreloads.forEach(Et, n), o.fontPreloads.clear(), o.highImagePreloads.forEach(Et, n), o.highImagePreloads.clear(), o.styles.forEach(Rt, n);
                var c = o.importMapChunks;
                for (i = 0; i < c.length; i++) I(n, c[i]);
                c.length = 0, o.bootstrapScripts.forEach(Et, n), o.scripts.forEach(Et, n), o.scripts.clear(), o.bulkPreloads.forEach(Et, n), o.bulkPreloads.clear();
                var f = o.hoistableChunks;
                for (i = 0; i < f.length; i++) I(n, f[i]);
                f.length = 0, a && null === s && I(n, hn("head")), ji(e, n, r, null), e.completedRootSegment = null, dn(n, e.renderState)
              }
              var h = e.renderState;
              r = 0;
              var d = h.viewportChunks;
              for (r = 0; r < d.length; r++) I(n, d[r]);
              d.length = 0, h.preconnects.forEach(Et, n), h.preconnects.clear(), h.fontPreloads.forEach(Et, n), h.fontPreloads.clear(), h.highImagePreloads.forEach(Et, n), h.highImagePreloads.clear(), h.styles.forEach(Nt, n), h.scripts.forEach(Et, n), h.scripts.clear(), h.bulkPreloads.forEach(Et, n), h.bulkPreloads.clear();
              var p = h.hoistableChunks;
              for (r = 0; r < p.length; r++) I(n, p[r]);
              p.length = 0;
              var g = e.clientRenderedBoundaries;
              for (t = 0; t < g.length; t++) {
                var A = g[t];
                h = n;
                var m = e.resumableState,
                  v = e.renderState,
                  b = A.rootSegmentID,
                  C = A.errorDigest;
                I(h, v.startInlineScript), 4 & m.instructions ? I(h, st) : (m.instructions |= 4, I(h, at)), I(h, v.boundaryPrefix), I(h, P(b.toString(16))), I(h, lt), C && (I(h, ut), I(h, P(ht(C || ""))));
                var y = _(h, ct);
                if (!y) return e.destination = null, t++, void g.splice(0, t)
              }
              g.splice(0, t);
              var k = e.completedBoundaries;
              for (t = 0; t < k.length; t++)
                if (!Pi(e, n, k[t])) return e.destination = null, t++, void k.splice(0, t);
              k.splice(0, t), j(n), H = new Uint8Array(2048), N = 0;
              var w = e.partialBoundaries;
              for (t = 0; t < w.length; t++) {
                var E = w[t];
                e: {
                  g = e,
                  A = n;
                  var B = E.completedSegments;
                  for (y = 0; y < B.length; y++)
                    if (!Di(g, A, E, B[y])) {
                      y++, B.splice(0, y);
                      var x = !1;
                      break e
                    } B.splice(0, y),
                  x = wt(A, E.contentState, g.renderState)
                }
                if (!x) return e.destination = null, t++, void w.splice(0, t)
              }
              w.splice(0, t);
              var S = e.completedBoundaries;
              for (t = 0; t < S.length; t++)
                if (!Pi(e, n, S[t])) return e.destination = null, t++, void S.splice(0, t);
              S.splice(0, t)
            }
          } finally {
            0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length ? (e.flushScheduled = !1, (t = e.resumableState).hasBody && I(n, hn("body")), t.hasHtml && I(n, hn("html")), j(n), e.status = 14, n.close(), e.destination = null) : j(n)
          }
        }

        function Wi(e) {
          e.flushScheduled = null !== e.destination, R(function() {
            return Ii(e)
          }), F(function() {
            10 === e.status && (e.status = 11), null === e.trackedPostpones && Ti(e, 0 === e.pendingRootTasks)
          })
        }

        function Zi(e) {
          !1 === e.flushScheduled && 0 === e.pingedTasks.length && null !== e.destination && (e.flushScheduled = !0, F(function() {
            var n = e.destination;
            n ? Vi(e, n) : e.flushScheduled = !1
          }))
        }

        function Ui(e, n) {
          if (13 === e.status) e.status = 14, V(n, e.fatalError);
          else if (14 !== e.status && null === e.destination) {
            e.destination = n;
            try {
              Vi(e, n)
            } catch (n) {
              pi(e, n, {}), gi(e, n)
            }
          }
        }

        function $i(e, n) {
          (11 === e.status || 10 === e.status) && (e.status = 12);
          try {
            var t = e.abortableTasks;
            if (t.size > 0) {
              var r = void 0 === n ? Error(o(432)) : "object" == typeof n && null !== n && "function" == typeof n.then ? Error(o(530)) : n;
              e.fatalError = r, t.forEach(function(n) {
                return Fi(n, e, r)
              }), t.clear()
            }
            null !== e.destination && Vi(e, e.destination)
          } catch (n) {
            pi(e, n, {}), gi(e, n)
          }
        }

        function Gi() {
          var e = r.version;
          if ("19.0.0" !== e) throw Error(o(527, e, "19.0.0"))
        }
        Gi(), Gi(), n.prerender = function(e, n) {
          return new Promise(function(t, r) {
            var i, o = n ? n.onHeaders : void 0;
            o && (i = function(e) {
              o(new Headers(e))
            });
            var a = Ce(n ? n.identifierPrefix : void 0, n && n.unstable_externalRuntimeSrc, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0),
              s = function(e, n, t, r, i, o, a, s, l, u, c) {
                return (e = oi(e, n, t, r, i, o, a, void 0, void 0, u, c, void 0)).trackedPostpones = {
                  workingMap: new Map,
                  rootNodes: [],
                  rootSlots: null
                }, e
              }(e, a, be(a, void 0, n ? n.unstable_externalRuntimeSrc : void 0, n ? n.importMap : void 0, i, n ? n.maxHeadersLength : void 0), ke(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, function() {
                var e = {
                  prelude: new ReadableStream({
                    type: "bytes",
                    pull: function(e) {
                      Ui(s, e)
                    },
                    cancel: function(e) {
                      s.destination = null, $i(s, e)
                    }
                  }, {
                    highWaterMark: 0
                  })
                };
                t(e)
              }, 0, 0, r, n ? n.onPostpone : void 0);
            if (n && n.signal) {
              var l = n.signal;
              if (l.aborted) $i(s, l.reason);
              else {
                var u = function() {
                  $i(s, l.reason), l.removeEventListener("abort", u)
                };
                l.addEventListener("abort", u)
              }
            }
            Wi(s)
          })
        }, n.renderToReadableStream = function(e, n) {
          return new Promise(function(t, r) {
            var i, o, a, s = new Promise(function(e, n) {
                o = e, i = n
              }),
              l = n ? n.onHeaders : void 0;
            l && (a = function(e) {
              l(new Headers(e))
            });
            var u = Ce(n ? n.identifierPrefix : void 0, n && n.unstable_externalRuntimeSrc, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0),
              c = oi(e, u, be(u, n ? n.nonce : void 0, n ? n.unstable_externalRuntimeSrc : void 0, n ? n.importMap : void 0, a, n ? n.maxHeadersLength : void 0), ke(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, o, function() {
                var e = new ReadableStream({
                  type: "bytes",
                  pull: function(e) {
                    Ui(c, e)
                  },
                  cancel: function(e) {
                    c.destination = null, $i(c, e)
                  }
                }, {
                  highWaterMark: 0
                });
                e.allReady = s, t(e)
              }, function(e) {
                s.catch(function() {}), r(e)
              }, i, n ? n.onPostpone : void 0, n ? n.formState : void 0);
            if (n && n.signal) {
              var f = n.signal;
              if (f.aborted) $i(c, f.reason);
              else {
                var h = function() {
                  $i(c, f.reason), f.removeEventListener("abort", h)
                };
                f.addEventListener("abort", h)
              }
            }
            Wi(c)
          })
        }, n.version = "19.0.0"
      },
      71354: e => {
        "use strict";
        e.exports = function(e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t))));
            return [n].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), " */")]).join("\n")
          }
          return "" + n
        }
      },
      73065: function(e, n, t) {
        var r, i;
        ! function() {
          "use strict";
          r = function() {
            var e = function() {},
              n = "undefined",
              t = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent),
              r = ["trace", "debug", "info", "warn", "error"],
              i = {},
              o = null;

            function a(e, n) {
              var t = e[n];
              if ("function" == typeof t.bind) return t.bind(e);
              try {
                return function() {}.bind.call(t, e)
              } catch {
                return function() {
                  return function() {}.apply.call(t, e, arguments)
                }
              }
            }

            function s() {
              console.log && (console.log.apply ? console.log.apply(console, arguments) : function() {}.apply.call(console.log, console, arguments)), console.trace && console.trace()
            }

            function l() {
              for (var t = this.getLevel(), i = 0; r.length > i; i++) {
                var o = r[i];
                this[o] = t > i ? e : this.methodFactory(o, t, this.name)
              }
              if (this.log = this.debug, typeof console === n && t < this.levels.SILENT) return "No console available for logging"
            }

            function u(e) {
              return function() {
                typeof console !== n && (l.call(this), this[e].apply(this, arguments))
              }
            }

            function c(r, i, o) {
              return function(r) {
                return "debug" === r && (r = "log"), typeof console !== n && ("trace" === r && t ? s : void 0 !== console[r] ? a(console, r) : void 0 !== console.log ? a(console, "log") : e)
              }(r) || u.apply(this, arguments)
            }

            function f(e, t) {
              var a, s, u, f = this,
                h = "loglevel";

              function d() {
                var e;
                if (typeof window !== n && h) {
                  try {
                    e = window.localStorage[h]
                  } catch {}
                  if (typeof e === n) try {
                    var t = window.document.cookie,
                      r = encodeURIComponent(h),
                      i = t.indexOf(r + "="); - 1 !== i && (e = /^([^;]+)/.exec(t.slice(i + r.length + 1))[1])
                  } catch {}
                  return void 0 === f.levels[e] && (e = void 0), e
                }
              }

              function p(e) {
                var n = e;
                if ("string" == typeof n && void 0 !== f.levels[n.toUpperCase()] && (n = f.levels[n.toUpperCase()]), "number" == typeof n && n >= 0 && n <= f.levels.SILENT) return n;
                throw new TypeError("log.setLevel() called with invalid level: " + e)
              }
              "string" == typeof e ? h += ":" + e : "symbol" == typeof e && (h = void 0), f.name = e, f.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
              }, f.methodFactory = t || c, f.getLevel = function() {
                return u ?? s ?? a
              }, f.setLevel = function(e, t) {
                return u = p(e), !1 !== t && function(e) {
                  var t = (r[e] || "silent").toUpperCase();
                  if (typeof window !== n && h) {
                    try {
                      return void(window.localStorage[h] = t)
                    } catch {}
                    try {
                      window.document.cookie = encodeURIComponent(h) + "=" + t + ";"
                    } catch {}
                  }
                }(u), l.call(f)
              }, f.setDefaultLevel = function(e) {
                s = p(e), d() || f.setLevel(e, !1)
              }, f.resetLevel = function() {
                u = null,
                  function() {
                    if (typeof window !== n && h) {
                      try {
                        window.localStorage.removeItem(h)
                      } catch {}
                      try {
                        window.document.cookie = encodeURIComponent(h) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                      } catch {}
                    }
                  }(), l.call(f)
              }, f.enableAll = function(e) {
                f.setLevel(f.levels.TRACE, e)
              }, f.disableAll = function(e) {
                f.setLevel(f.levels.SILENT, e)
              }, f.rebuild = function() {
                if (o !== f && (a = p(o.getLevel())), l.call(f), o === f)
                  for (var e in i) i[e].rebuild()
              }, a = p(o ? o.getLevel() : "WARN");
              var g = d();
              null != g && (u = p(g)), l.call(f)
            }(o = new f).getLogger = function(e) {
              if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
              var n = i[e];
              return n || (n = i[e] = new f(e, o.methodFactory)), n
            };
            var h = typeof window !== n ? window.log : void 0;
            return o.noConflict = function() {
              return typeof window !== n && window.log === o && (window.log = h), o
            }, o.getLoggers = function() {
              return i
            }, o.default = o, o
          }, void 0 !== (i = r()) && (e.exports = i)
        }()
      },
      74848: (e, n, t) => {
        "use strict";
        e.exports = t(29698)
      },
      76314: e => {
        "use strict";
        e.exports = function(e) {
          var n = [];
          return n.toString = function() {
            return this.map(function(n) {
              var t = "",
                r = "u" > typeof n[5];
              return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), r && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
            }).join("")
          }, n.i = function(e, t, r, i, o) {
            "string" == typeof e && (e = [
              [null, e, void 0]
            ]);
            var a = {};
            if (r)
              for (var s = 0; s < this.length; s++) {
                var l = this[s][0];
                null != l && (a[l] = !0)
              }
            for (var u = 0; u < e.length; u++) {
              var c = [].concat(e[u]);
              r && a[c[0]] || ("u" > typeof o && (typeof c[5] > "u" || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = o), t && (c[2] && (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}")), c[2] = t), i && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = i) : c[4] = "".concat(i)), n.push(c))
            }
          }, n
        }
      },
      77659: e => {
        "use strict";
        var n = {};
        e.exports = function(e, t) {
          var r = function(e) {
            if (typeof n[e] > "u") {
              var t = document.querySelector(e);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                t = t.contentDocument.head
              } catch {
                t = null
              }
              n[e] = t
            }
            return n[e]
          }(e);
          if (!r) throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r.appendChild(t)
        }
      },
      85072: e => {
        "use strict";
        var n = [];

        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break
            } return t
        }

        function r(e, r) {
          for (var o = {}, a = [], s = 0; s < e.length; s++) {
            var l = e[s],
              u = r.base ? l[0] + r.base : l[0],
              c = o[u] || 0,
              f = "".concat(u, " ").concat(c);
            o[u] = c + 1;
            var h = t(f),
              d = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5]
              };
            if (-1 !== h) n[h].references++, n[h].updater(d);
            else {
              var p = i(d, r);
              r.byIndex = s, n.splice(s, 0, {
                identifier: f,
                updater: p,
                references: 1
              })
            }
            a.push(f)
          }
          return a
        }

        function i(e, n) {
          var t = n.domAPI(n);
          return t.update(e),
            function(n) {
              if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
                t.update(e = n)
              } else t.remove()
            }
        }
        e.exports = function(e, i) {
          var o = r(e = e || [], i = i || {});
          return function(e) {
            e = e || [];
            for (var a = 0; a < o.length; a++) {
              var s = t(o[a]);
              n[s].references--
            }
            for (var l = r(e, i), u = 0; u < o.length; u++) {
              var c = t(o[u]);
              0 === n[c].references && (n[c].updater(), n.splice(c, 1))
            }
            o = l
          }
        }
      },
      86047: (e, n, t) => {
        "use strict";
        var r = t(96540),
          i = t(40961);

        function o(e) {
          var n = "https://react.dev/errors/" + e;
          if (arguments.length > 1) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; arguments.length > t; t++) n += "&args[]=" + encodeURIComponent(arguments[t])
          }
          return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var a = Symbol.for("react.transitional.element"),
          s = Symbol.for("react.portal"),
          l = Symbol.for("react.fragment"),
          u = Symbol.for("react.strict_mode"),
          c = Symbol.for("react.profiler"),
          f = Symbol.for("react.provider"),
          h = Symbol.for("react.consumer"),
          d = Symbol.for("react.context"),
          p = Symbol.for("react.forward_ref"),
          g = Symbol.for("react.suspense"),
          A = Symbol.for("react.suspense_list"),
          m = Symbol.for("react.memo"),
          v = Symbol.for("react.lazy"),
          b = Symbol.for("react.scope"),
          C = Symbol.for("react.debug_trace_mode"),
          y = Symbol.for("react.offscreen"),
          k = Symbol.for("react.legacy_hidden"),
          w = Symbol.for("react.memo_cache_sentinel"),
          E = Symbol.iterator,
          B = Array.isArray;

        function x(e, n) {
          var t = 3 & e.length,
            r = e.length - t,
            i = n;
          for (n = 0; r > n;) {
            var o = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24;
            ++n, i = 27492 + (65535 & (i = 5 * (65535 & (i = (i ^= o = 461845907 * (65535 & (o = (o = 3432918353 * (65535 & o) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295) << 15 | o >>> 17)) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295) << 13 | i >>> 19)) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295)) + (((i >>> 16) + 58964 & 65535) << 16)
          }
          switch (o = 0, t) {
            case 3:
              o ^= (255 & e.charCodeAt(n + 2)) << 16;
            case 2:
              o ^= (255 & e.charCodeAt(n + 1)) << 8;
            case 1:
              i ^= 461845907 * (65535 & (o = (o = 3432918353 * (65535 & (o ^= 255 & e.charCodeAt(n))) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295) << 15 | o >>> 17)) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295
          }
          return i ^= e.length, i = 2246822507 * (65535 & (i ^= i >>> 16)) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, ((i = 3266489909 * (65535 & (i ^= i >>> 13)) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295) ^ i >>> 16) >>> 0
        }
        var S = Object.assign,
          L = {}.hasOwnProperty,
          F = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
          T = {},
          M = {};

        function R(e) {
          return !!L.call(M, e) || !L.call(T, e) && (F.test(e) ? M[e] = !0 : (T[e] = !0, !1))
        }
        var H = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),
          N = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
          ]),
          I = /["'&<>]/;

        function _(e) {
          if ("boolean" == typeof e || "number" == typeof e || "bigint" == typeof e) return "" + e;
          e = "" + e;
          var n = I.exec(e);
          if (n) {
            var t, r = "",
              i = 0;
            for (t = n.index; t < e.length; t++) {
              switch (e.charCodeAt(t)) {
                case 34:
                  n = "&quot;";
                  break;
                case 38:
                  n = "&amp;";
                  break;
                case 39:
                  n = "&#x27;";
                  break;
                case 60:
                  n = "&lt;";
                  break;
                case 62:
                  n = "&gt;";
                  break;
                default:
                  continue
              }
              i !== t && (r += e.slice(i, t)), i = t + 1, r += n
            }
            e = i !== t ? r + e.slice(i, t) : r
          }
          return e
        }
        var j = /([A-Z])/g,
          O = /^ms-/,
          P = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

        function D(e) {
          return P.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
        }
        var V = r.h,
          W = i.v,
          Z = {
            pending: !1,
            data: null,
            method: null,
            action: null
          },
          U = W.d;
        W.d = {
          f: U.f,
          r: U.r,
          D: function(e) {
            var n = at || null;
            if (n) {
              var t, r, i = n.resumableState,
                o = n.renderState;
              "string" == typeof e && e && (i.dnsResources.hasOwnProperty(e) || (i.dnsResources[e] = null, (r = (i = o.headers) && i.remainingCapacity > 0) && (t = "<" + ("" + e).replace(Ve, We) + ">; rel=dns-prefetch", r = (i.remainingCapacity -= t.length + 2) >= 0), r ? (o.resets.dns[e] = null, i.preconnects && (i.preconnects += ", "), i.preconnects += t) : (le(t = [], {
                href: e,
                rel: "dns-prefetch"
              }), o.preconnects.add(t))), Wt(n))
            } else U.D(e)
          },
          C: function(e, n) {
            var t = at || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if ("string" == typeof e && e) {
                var o, a, s = "use-credentials" === n ? "credentials" : "string" == typeof n ? "anonymous" : "default";
                r.connectResources[s].hasOwnProperty(e) || (r.connectResources[s][e] = null, (a = (r = i.headers) && r.remainingCapacity > 0) && (a = "<" + ("" + e).replace(Ve, We) + ">; rel=preconnect", "string" == typeof n && (a += '; crossorigin="' + ("" + n).replace(Ze, Ue) + '"'), o = a, a = (r.remainingCapacity -= o.length + 2) >= 0), a ? (i.resets.connect[s][e] = null, r.preconnects && (r.preconnects += ", "), r.preconnects += o) : (le(s = [], {
                  rel: "preconnect",
                  href: e,
                  crossOrigin: n
                }), i.preconnects.add(s))), Wt(t)
              }
            } else U.C(e, n)
          },
          L: function(e, n, t) {
            var r = at || null;
            if (r) {
              var i = r.resumableState,
                o = r.renderState;
              if (n && e) {
                switch (n) {
                  case "image":
                    if (t) var a = t.imageSrcSet,
                      s = t.imageSizes,
                      l = t.fetchPriority;
                    var u, c = a ? a + "\n" + (s || "") : e;
                    if (i.imageResources.hasOwnProperty(c)) return;
                    i.imageResources[c] = $, (i = o.headers) && i.remainingCapacity > 0 && "high" === l && (u = De(e, n, t), (i.remainingCapacity -= u.length + 2) >= 0) ? (o.resets.image[c] = $, i.highImagePreloads && (i.highImagePreloads += ", "), i.highImagePreloads += u) : (le(i = [], S({
                      rel: "preload",
                      href: a ? void 0 : e,
                      as: n
                    }, t)), "high" === l ? o.highImagePreloads.add(i) : (o.bulkPreloads.add(i), o.preloads.images.set(c, i)));
                    break;
                  case "style":
                    if (i.styleResources.hasOwnProperty(e)) return;
                    le(a = [], S({
                      rel: "preload",
                      href: e,
                      as: n
                    }, t)), i.styleResources[e] = !t || "string" != typeof t.crossOrigin && "string" != typeof t.integrity ? $ : [t.crossOrigin, t.integrity], o.preloads.stylesheets.set(e, a), o.bulkPreloads.add(a);
                    break;
                  case "script":
                    if (i.scriptResources.hasOwnProperty(e)) return;
                    a = [], o.preloads.scripts.set(e, a), o.bulkPreloads.add(a), le(a, S({
                      rel: "preload",
                      href: e,
                      as: n
                    }, t)), i.scriptResources[e] = !t || "string" != typeof t.crossOrigin && "string" != typeof t.integrity ? $ : [t.crossOrigin, t.integrity];
                    break;
                  default:
                    if (i.unknownResources.hasOwnProperty(n)) {
                      if ((a = i.unknownResources[n]).hasOwnProperty(e)) return
                    } else a = {}, i.unknownResources[n] = a;
                    a[e] = $, (i = o.headers) && i.remainingCapacity > 0 && "font" === n && (c = De(e, n, t), (i.remainingCapacity -= c.length + 2) >= 0) ? (o.resets.font[e] = $, i.fontPreloads && (i.fontPreloads += ", "), i.fontPreloads += c) : "font" === (le(i = [], e = S({
                      rel: "preload",
                      href: e,
                      as: n
                    }, t)), n) ? o.fontPreloads.add(i) : o.bulkPreloads.add(i)
                }
                Wt(r)
              }
            } else U.L(e, n, t)
          },
          m: function(e, n) {
            var t = at || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if (e) {
                var o = n && "string" == typeof n.as ? n.as : "script";
                if ("script" === o) {
                  if (r.moduleScriptResources.hasOwnProperty(e)) return;
                  o = [], r.moduleScriptResources[e] = !n || "string" != typeof n.crossOrigin && "string" != typeof n.integrity ? $ : [n.crossOrigin, n.integrity], i.preloads.moduleScripts.set(e, o)
                } else {
                  if (r.moduleUnknownResources.hasOwnProperty(o)) {
                    var a = r.unknownResources[o];
                    if (a.hasOwnProperty(e)) return
                  } else a = {}, r.moduleUnknownResources[o] = a;
                  o = [], a[e] = $
                }
                le(o, S({
                  rel: "modulepreload",
                  href: e
                }, n)), i.bulkPreloads.add(o), Wt(t)
              }
            } else U.m(e, n)
          },
          X: function(e, n) {
            var t = at || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if (e) {
                var o = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
                null !== o && (r.scriptResources[e] = null, n = S({
                  src: e,
                  async: !0
                }, n), o && (2 === o.length && Pe(n, o), e = i.preloads.scripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), de(e, n), Wt(t))
              }
            } else U.X(e, n)
          },
          S: function(e, n, t) {
            var r = at || null;
            if (r) {
              var i = r.resumableState,
                o = r.renderState;
              if (e) {
                n = n || "default";
                var a = o.styles.get(n),
                  s = i.styleResources.hasOwnProperty(e) ? i.styleResources[e] : void 0;
                null !== s && (i.styleResources[e] = null, a || (a = {
                  precedence: _(n),
                  rules: [],
                  hrefs: [],
                  sheets: new Map
                }, o.styles.set(n, a)), n = {
                  state: 0,
                  props: S({
                    rel: "stylesheet",
                    href: e,
                    "data-precedence": n
                  }, t)
                }, s && (2 === s.length && Pe(n.props, s), (o = o.preloads.stylesheets.get(e)) && o.length > 0 ? o.length = 0 : n.state = 1), a.sheets.set(e, n), Wt(r))
              }
            } else U.S(e, n, t)
          },
          M: function(e, n) {
            var t = at || null;
            if (t) {
              var r = t.resumableState,
                i = t.renderState;
              if (e) {
                var o = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
                null !== o && (r.moduleScriptResources[e] = null, n = S({
                  src: e,
                  type: "module",
                  async: !0
                }, n), o && (2 === o.length && Pe(n, o), e = i.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), de(e, n), Wt(t))
              }
            } else U.M(e, n)
          }
        };
        var $ = [],
          G = /(<\/|<)(s)(cript)/gi;

        function z(e, n, t, r) {
          return n + ("s" === t ? "\\u0073" : "\\u0053") + r
        }

        function Y(e, n, t) {
          return {
            insertionMode: e,
            selectedValue: n,
            tagScope: t
          }
        }

        function q(e, n, t) {
          switch (n) {
            case "noscript":
              return Y(2, null, 1 | e.tagScope);
            case "select":
              return Y(2, null != t.value ? t.value : t.defaultValue, e.tagScope);
            case "svg":
              return Y(3, null, e.tagScope);
            case "picture":
              return Y(2, null, 2 | e.tagScope);
            case "math":
              return Y(4, null, e.tagScope);
            case "foreignObject":
              return Y(2, null, e.tagScope);
            case "table":
              return Y(5, null, e.tagScope);
            case "thead":
            case "tbody":
            case "tfoot":
              return Y(6, null, e.tagScope);
            case "colgroup":
              return Y(8, null, e.tagScope);
            case "tr":
              return Y(7, null, e.tagScope)
          }
          return 5 > e.insertionMode ? 0 === e.insertionMode ? Y("html" === n ? 1 : 2, null, e.tagScope) : 1 === e.insertionMode ? Y(2, null, e.tagScope) : e : Y(2, null, e.tagScope)
        }
        var K = new Map;

        function X(e, n) {
          if ("object" != typeof n) throw Error(o(62));
          var t, r = !0;
          for (t in n)
            if (L.call(n, t)) {
              var i = n[t];
              if (null != i && "boolean" != typeof i && "" !== i) {
                if (0 === t.indexOf("--")) {
                  var a = _(t);
                  i = _(("" + i).trim())
                } else void 0 === (a = K.get(t)) && (a = _(t.replace(j, "-$1").toLowerCase().replace(O, "-ms-")), K.set(t, a)), i = "number" == typeof i ? 0 === i || H.has(t) ? "" + i : i + "px" : _(("" + i).trim());
                r ? (r = !1, e.push(' style="', a, ":", i)) : e.push(";", a, ":", i)
              }
            } r || e.push('"')
        }

        function Q(e, n, t) {
          t && "function" != typeof t && "symbol" != typeof t && e.push(" ", n, '=""')
        }

        function J(e, n, t) {
          "function" != typeof t && "symbol" != typeof t && "boolean" != typeof t && e.push(" ", n, '="', _(t), '"')
        }
        var ee = _("javascript:throw new Error('React form unexpectedly submitted.')");

        function ne(e, n) {
          this.push('<input type="hidden"'), te(e), J(this, "name", n), J(this, "value", e), this.push("/>")
        }

        function te(e) {
          if ("string" != typeof e) throw Error(o(480))
        }

        function re(e, n) {
          if ("function" == typeof n.$$FORM_ACTION) {
            var t = e.nextFormID++;
            e = e.idPrefix + t;
            try {
              var r = n.$$FORM_ACTION(e);
              if (r) {
                var i = r.data;
                i?.forEach(te)
              }
              return r
            } catch (e) {
              if ("object" == typeof e && null !== e && "function" == typeof e.then) throw e
            }
          }
          return null
        }

        function ie(e, n, t, r, i, o, a, s) {
          var l = null;
          if ("function" == typeof r) {
            var u = re(n, r);
            null !== u ? (s = u.name, r = u.action || "", i = u.encType, o = u.method, a = u.target, l = u.data) : (e.push(" ", "formAction", '="', ee, '"'), a = o = i = r = s = null, se(n, t))
          }
          return null != s && oe(e, "name", s), null != r && oe(e, "formAction", r), null != i && oe(e, "formEncType", i), null != o && oe(e, "formMethod", o), null != a && oe(e, "formTarget", a), l
        }

        function oe(e, n, t) {
          switch (n) {
            case "className":
              J(e, "class", t);
              break;
            case "tabIndex":
              J(e, "tabindex", t);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              J(e, n, t);
              break;
            case "style":
              X(e, t);
              break;
            case "src":
            case "href":
              if ("" === t) break;
            case "action":
            case "formAction":
              if (null == t || "function" == typeof t || "symbol" == typeof t || "boolean" == typeof t) break;
              t = D("" + t), e.push(" ", n, '="', _(t), '"');
              break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
              break;
            case "autoFocus":
            case "multiple":
            case "muted":
              Q(e, n.toLowerCase(), t);
              break;
            case "xlinkHref":
              if ("function" == typeof t || "symbol" == typeof t || "boolean" == typeof t) break;
              t = D("" + t), e.push(" ", "xlink:href", '="', _(t), '"');
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              "function" != typeof t && "symbol" != typeof t && e.push(" ", n, '="', _(t), '"');
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              t && "function" != typeof t && "symbol" != typeof t && e.push(" ", n, '=""');
              break;
            case "capture":
            case "download":
              !0 === t ? e.push(" ", n, '=""') : !1 !== t && "function" != typeof t && "symbol" != typeof t && e.push(" ", n, '="', _(t), '"');
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              "function" != typeof t && "symbol" != typeof t && !isNaN(t) && t >= 1 && e.push(" ", n, '="', _(t), '"');
              break;
            case "rowSpan":
            case "start":
              "function" == typeof t || "symbol" == typeof t || isNaN(t) || e.push(" ", n, '="', _(t), '"');
              break;
            case "xlinkActuate":
              J(e, "xlink:actuate", t);
              break;
            case "xlinkArcrole":
              J(e, "xlink:arcrole", t);
              break;
            case "xlinkRole":
              J(e, "xlink:role", t);
              break;
            case "xlinkShow":
              J(e, "xlink:show", t);
              break;
            case "xlinkTitle":
              J(e, "xlink:title", t);
              break;
            case "xlinkType":
              J(e, "xlink:type", t);
              break;
            case "xmlBase":
              J(e, "xml:base", t);
              break;
            case "xmlLang":
              J(e, "xml:lang", t);
              break;
            case "xmlSpace":
              J(e, "xml:space", t);
              break;
            default:
              if ((2 >= n.length || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && R(n = N.get(n) || n)) {
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return;
                  case "boolean":
                    var r = n.toLowerCase().slice(0, 5);
                    if ("data-" !== r && "aria-" !== r) return
                }
                e.push(" ", n, '="', _(t), '"')
              }
          }
        }

        function ae(e, n, t) {
          if (null != n) {
            if (null != t) throw Error(o(60));
            if ("object" != typeof n || !("W" in n)) throw Error(o(61));
            null != (n = n.W) && e.push("" + n)
          }
        }

        function se(e, n) {
          !(16 & e.instructions) && (e.instructions |= 16, n.bootstrapChunks.unshift(n.startInlineScript, 'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});', "<\/script>"))
        }

        function le(e, n) {
          for (var t in e.push(me("link")), n)
            if (L.call(n, t)) {
              var r = n[t];
              if (null != r) switch (t) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, "link"));
                default:
                  oe(e, t, r)
              }
            } return e.push("/>"), null
        }
        var ue = /(<\/|<)(s)(tyle)/gi;

        function ce(e, n, t, r) {
          return n + ("s" === t ? "\\73 " : "\\53 ") + r
        }

        function fe(e, n, t) {
          for (var r in e.push(me(t)), n)
            if (L.call(n, r)) {
              var i = n[r];
              if (null != i) switch (r) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(399, t));
                default:
                  oe(e, r, i)
              }
            } return e.push("/>"), null
        }

        function he(e, n) {
          e.push(me("title"));
          var t, r = null,
            i = null;
          for (t in n)
            if (L.call(n, t)) {
              var o = n[t];
              if (null != o) switch (t) {
                case "children":
                  r = o;
                  break;
                case "dangerouslySetInnerHTML":
                  i = o;
                  break;
                default:
                  oe(e, t, o)
              }
            } return e.push(">"), "function" != typeof(n = Array.isArray(r) ? 2 > r.length ? r[0] : null : r) && "symbol" != typeof n && null != n && e.push(_("" + n)), ae(e, i, r), e.push(be("title")), null
        }

        function de(e, n) {
          e.push(me("script"));
          var t, r = null,
            i = null;
          for (t in n)
            if (L.call(n, t)) {
              var o = n[t];
              if (null != o) switch (t) {
                case "children":
                  r = o;
                  break;
                case "dangerouslySetInnerHTML":
                  i = o;
                  break;
                default:
                  oe(e, t, o)
              }
            } return e.push(">"), ae(e, i, r), "string" == typeof r && e.push(("" + r).replace(G, z)), e.push(be("script")), null
        }

        function pe(e, n, t) {
          e.push(me(t));
          var r, i = t = null;
          for (r in n)
            if (L.call(n, r)) {
              var o = n[r];
              if (null != o) switch (r) {
                case "children":
                  t = o;
                  break;
                case "dangerouslySetInnerHTML":
                  i = o;
                  break;
                default:
                  oe(e, r, o)
              }
            } return e.push(">"), ae(e, i, t), "string" == typeof t ? (e.push(_(t)), null) : t
        }
        var ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
          Ae = new Map;

        function me(e) {
          var n = Ae.get(e);
          if (void 0 === n) {
            if (!ge.test(e)) throw Error(o(65, e));
            n = "<" + e, Ae.set(e, n)
          }
          return n
        }
        var ve = new Map;

        function be(e) {
          var n = ve.get(e);
          return void 0 === n && (n = "</" + e + ">", ve.set(e, n)), n
        }

        function Ce(e, n) {
          n = n.bootstrapChunks;
          for (var t = 0; t < n.length - 1; t++) e.push(n[t]);
          return t >= n.length || (t = n[t], n.length = 0, e.push(t))
        }

        function ye(e, n, t) {
          if (e.push('\x3c!--$?--\x3e<template id="'), null === t) throw Error(o(395));
          return e.push(n.boundaryPrefix), n = t.toString(16), e.push(n), e.push('"></template>')
        }
        var ke = /[<\u2028\u2029]/g;

        function we(e) {
          return JSON.stringify(e).replace(ke, function(e) {
            switch (e) {
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default:
                throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
            }
          })
        }
        var Ee = /[&><\u2028\u2029]/g;

        function Be(e) {
          return JSON.stringify(e).replace(Ee, function(e) {
            switch (e) {
              case "&":
                return "\\u0026";
              case ">":
                return "\\u003e";
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default:
                throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
            }
          })
        }
        var xe = !1,
          Se = !0;

        function Le(e) {
          var n = e.rules,
            t = e.hrefs,
            r = 0;
          if (t.length) {
            for (this.push('<style media="not all" data-precedence="'), this.push(e.precedence), this.push('" data-href="'); r < t.length - 1; r++) this.push(t[r]), this.push(" ");
            for (this.push(t[r]), this.push('">'), r = 0; r < n.length; r++) this.push(n[r]);
            Se = this.push("</style>"), xe = !0, n.length = 0, t.length = 0
          }
        }

        function Fe(e) {
          return 2 !== e.state && (xe = !0)
        }

        function Te(e, n, t) {
          return xe = !1, Se = !0, n.styles.forEach(Le, e), n.stylesheets.forEach(Fe), xe && (t.stylesToHoist = !0), Se
        }

        function Me(e) {
          for (var n = 0; n < e.length; n++) this.push(e[n]);
          e.length = 0
        }
        var Re = [];

        function He(e) {
          le(Re, e.props);
          for (var n = 0; n < Re.length; n++) this.push(Re[n]);
          Re.length = 0, e.state = 2
        }

        function Ne(e) {
          var n = e.sheets.size > 0;
          e.sheets.forEach(He, this), e.sheets.clear();
          var t = e.rules,
            r = e.hrefs;
          if (!n || r.length) {
            if (this.push('<style data-precedence="'), this.push(e.precedence), e = 0, r.length) {
              for (this.push('" data-href="'); e < r.length - 1; e++) this.push(r[e]), this.push(" ");
              this.push(r[e])
            }
            for (this.push('">'), e = 0; e < t.length; e++) this.push(t[e]);
            this.push("</style>"), t.length = 0, r.length = 0
          }
        }

        function Ie(e) {
          if (0 === e.state) {
            e.state = 1;
            var n = e.props;
            for (le(Re, {
                rel: "preload",
                as: "style",
                href: e.props.href,
                crossOrigin: n.crossOrigin,
                fetchPriority: n.fetchPriority,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy
              }), e = 0; e < Re.length; e++) this.push(Re[e]);
            Re.length = 0
          }
        }

        function _e(e) {
          e.sheets.forEach(Ie, this), e.sheets.clear()
        }

        function je(e, n, t) {
          var r = n.toLowerCase();
          switch (typeof t) {
            case "function":
            case "symbol":
              return
          }
          switch (n) {
            case "innerHTML":
            case "dangerouslySetInnerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "style":
            case "ref":
              return;
            case "className":
              r = "class", n = "" + t;
              break;
            case "hidden":
              if (!1 === t) return;
              n = "";
              break;
            case "src":
            case "href":
              n = "" + (t = D(t));
              break;
            default:
              if (n.length > 2 && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1]) || !R(n)) return;
              n = "" + t
          }
          e.push(","), r = Be(r), e.push(r), e.push(","), r = Be(n), e.push(r)
        }

        function Oe() {
          return {
            styles: new Set,
            stylesheets: new Set
          }
        }

        function Pe(e, n) {
          null == e.crossOrigin && (e.crossOrigin = n[0]), null == e.integrity && (e.integrity = n[1])
        }

        function De(e, n, t) {
          for (var r in n = "<" + (e = ("" + e).replace(Ve, We)) + '>; rel=preload; as="' + (n = ("" + n).replace(Ze, Ue)) + '"', t) L.call(t, r) && "string" == typeof(e = t[r]) && (n += "; " + r.toLowerCase() + '="' + ("" + e).replace(Ze, Ue) + '"');
          return n
        }
        var Ve = /[<>\r\n]/g;

        function We(e) {
          switch (e) {
            case "<":
              return "%3C";
            case ">":
              return "%3E";
            case "\n":
              return "%0A";
            case "\r":
              return "%0D";
            default:
              throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
          }
        }
        var Ze = /["';,\r\n]/g;

        function Ue(e) {
          switch (e) {
            case '"':
              return "%22";
            case "'":
              return "%27";
            case ";":
              return "%3B";
            case ",":
              return "%2C";
            case "\n":
              return "%0A";
            case "\r":
              return "%0D";
            default:
              throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
          }
        }

        function $e(e) {
          this.styles.add(e)
        }

        function Ge(e) {
          this.stylesheets.add(e)
        }

        function ze(e, n, t, r) {
          return t.generateStaticMarkup ? (e.push(_(n)), !1) : ("" === n ? e = r : (r && e.push("\x3c!-- --\x3e"), e.push(_(n)), e = !0), e)
        }

        function Ye(e, n, t, r) {
          n.generateStaticMarkup || t && r && e.push("\x3c!-- --\x3e")
        }
        var qe = function() {}.bind,
          Ke = Symbol.for("react.client.reference");

        function Xe(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.$$typeof === Ke ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case l:
              return "Fragment";
            case s:
              return "Portal";
            case c:
              return "Profiler";
            case u:
              return "StrictMode";
            case g:
              return "Suspense";
            case A:
              return "SuspenseList"
          }
          if ("object" == typeof e) switch (e.$$typeof) {
            case d:
              return (e.displayName || "Context") + ".Provider";
            case h:
              return (e.j.displayName || "Context") + ".Consumer";
            case p:
              var n = e.render;
              return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case m:
              return null !== (n = e.displayName || null) ? n : Xe(e.type) || "Memo";
            case v:
              n = e.B, e = e.k;
              try {
                return Xe(e(n))
              } catch {}
          }
          return null
        }
        var Qe = {},
          Je = null;

        function en(e, n) {
          if (e !== n) {
            e.context.I = e.parentValue, e = e.parent;
            var t = n.parent;
            if (null === e) {
              if (null !== t) throw Error(o(401))
            } else {
              if (null === t) throw Error(o(401));
              en(e, t)
            }
            n.context.I = n.value
          }
        }

        function nn(e) {
          e.context.I = e.parentValue, null !== (e = e.parent) && nn(e)
        }

        function tn(e) {
          var n = e.parent;
          null !== n && tn(n), e.context.I = e.value
        }

        function rn(e, n) {
          if (e.context.I = e.parentValue, null === (e = e.parent)) throw Error(o(402));
          e.depth === n.depth ? en(e, n) : rn(e, n)
        }

        function on(e, n) {
          var t = n.parent;
          if (null === t) throw Error(o(402));
          e.depth === t.depth ? en(e, t) : on(e, t), n.context.I = n.value
        }

        function an(e) {
          var n = Je;
          n !== e && (null === n ? tn(e) : null === e ? nn(n) : n.depth === e.depth ? en(n, e) : n.depth > e.depth ? rn(n, e) : on(n, e), Je = e)
        }
        var sn = {
            isMounted: function() {
              return !1
            },
            enqueueSetState: function(e, n) {
              null !== (e = e.Z).queue && e.queue.push(n)
            },
            enqueueReplaceState: function(e, n) {
              (e = e.Z).replace = !0, e.queue = [n]
            },
            enqueueForceUpdate: function() {}
          },
          ln = {
            id: 1,
            overflow: ""
          };

        function un(e, n, t) {
          var r = e.id;
          e = e.overflow;
          var i = 32 - cn(r) - 1;
          r &= ~(1 << i), t += 1;
          var o = 32 - cn(n) + i;
          if (o > 30) {
            var a = i - i % 5;
            return o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, {
              id: 1 << 32 - cn(n) + i | t << i | r,
              overflow: o + e
            }
          }
          return {
            id: 1 << o | t << i | r,
            overflow: e
          }
        }
        var cn = Math.clz32 ? Math.clz32 : function(e) {
            return 0 == (e >>>= 0) ? 32 : 31 - (fn(e) / hn | 0) | 0
          },
          fn = Math.log,
          hn = Math.LN2,
          dn = Error(o(460));

        function pn() {}
        var gn = null;

        function An() {
          if (null === gn) throw Error(o(459));
          var e = gn;
          return gn = null, e
        }
        var mn = "function" == typeof Object.is ? Object.is : function(e, n) {
            return e === n && (0 !== e || 1 / e == 1 / n) || e != e && n != n
          },
          vn = null,
          bn = null,
          Cn = null,
          yn = null,
          kn = null,
          wn = null,
          En = !1,
          Bn = !1,
          xn = 0,
          Sn = 0,
          Ln = -1,
          Fn = 0,
          Tn = null,
          Mn = null,
          Rn = 0;

        function Hn() {
          if (null === vn) throw Error(o(321));
          return vn
        }

        function Nn() {
          if (Rn > 0) throw Error(o(312));
          return {
            memoizedState: null,
            queue: null,
            next: null
          }
        }

        function In() {
          return null === wn ? null === kn ? (En = !1, kn = wn = Nn()) : (En = !0, wn = kn) : null === wn.next ? (En = !1, wn = wn.next = Nn()) : (En = !0, wn = wn.next), wn
        }

        function _n() {
          var e = Tn;
          return Tn = null, e
        }

        function jn() {
          yn = Cn = bn = vn = null, Bn = !1, kn = null, Rn = 0, wn = Mn = null
        }

        function On(e, n) {
          return "function" == typeof n ? n(e) : n
        }

        function Pn(e, n, t) {
          if (vn = Hn(), wn = In(), En) {
            var r = wn.queue;
            if (n = r.dispatch, null !== Mn && void 0 !== (t = Mn.get(r))) {
              Mn.delete(r), r = wn.memoizedState;
              do {
                r = e(r, t.action), t = t.next
              } while (null !== t);
              return wn.memoizedState = r, [r, n]
            }
            return [wn.memoizedState, n]
          }
          return e = e === On ? "function" == typeof n ? n() : n : void 0 !== t ? t(n) : n, wn.memoizedState = e, e = (e = wn.queue = {
            last: null,
            dispatch: null
          }).dispatch = Vn.bind(null, vn, e), [wn.memoizedState, e]
        }

        function Dn(e, n) {
          if (vn = Hn(), n = void 0 === n ? null : n, null !== (wn = In())) {
            var t = wn.memoizedState;
            if (null !== t && null !== n) {
              var r = t[1];
              e: if (null === r) r = !1;
                else {
                  for (var i = 0; i < r.length && i < n.length; i++)
                    if (!mn(n[i], r[i])) {
                      r = !1;
                      break e
                    } r = !0
                }
              if (r) return t[0]
            }
          }
          return e = e(), wn.memoizedState = [e, n], e
        }

        function Vn(e, n, t) {
          if (Rn >= 25) throw Error(o(301));
          if (e === vn)
            if (Bn = !0, e = {
                action: t,
                next: null
              }, null === Mn && (Mn = new Map), void 0 === (t = Mn.get(n))) Mn.set(n, e);
            else {
              for (n = t; null !== n.next;) n = n.next;
              n.next = e
            }
        }

        function Wn() {
          throw Error(o(394))
        }

        function Zn() {
          throw Error(o(479))
        }

        function Un(e, n, t) {
          Hn();
          var r = Sn++,
            i = Cn;
          if ("function" == typeof e.$$FORM_ACTION) {
            var o = null,
              a = yn;
            i = i.formState;
            var s = e.$$IS_SIGNATURE_EQUAL;
            if (null !== i && "function" == typeof s) {
              var l = i[1];
              s.call(e, i[2], i[3]) && l === (o = void 0 !== t ? "p" + t : "k" + x(JSON.stringify([a, null, r]), 0)) && (Ln = r, n = i[0])
            }
            var u = e.bind(null, n);
            return e = function(e) {
              u(e)
            }, "function" == typeof u.$$FORM_ACTION && (e.$$FORM_ACTION = function(e) {
              e = u.$$FORM_ACTION(e), void 0 !== t && (t += "", e.action = t);
              var n = e.data;
              return n && (null === o && (o = void 0 !== t ? "p" + t : "k" + x(JSON.stringify([a, null, r]), 0)), n.append("$ACTION_KEY", o)), e
            }), [n, e, !1]
          }
          var c = e.bind(null, n);
          return [n, function(e) {
            c(e)
          }, !1]
        }

        function $n(e) {
          var n = Fn;
          return Fn += 1, null === Tn && (Tn = []),
            function(e, n, t) {
              switch (void 0 === (t = e[t]) ? e.push(n) : t !== n && (n.then(pn, pn), n = t), n.status) {
                case "fulfilled":
                  return n.value;
                case "rejected":
                  throw n.reason;
                default:
                  switch ("string" == typeof n.status ? n.then(pn, pn) : ((e = n).status = "pending", e.then(function(e) {
                      if ("pending" === n.status) {
                        var t = n;
                        t.status = "fulfilled", t.value = e
                      }
                    }, function(e) {
                      if ("pending" === n.status) {
                        var t = n;
                        t.status = "rejected", t.reason = e
                      }
                    })), n.status) {
                    case "fulfilled":
                      return n.value;
                    case "rejected":
                      throw n.reason
                  }
                  throw gn = n, dn
              }
            }(Tn, e, n)
        }

        function Gn() {
          throw Error(o(393))
        }

        function zn() {}
        var Yn = {
          readContext: function(e) {
            return e.I
          },
          use: function(e) {
            if (null !== e && "object" == typeof e) {
              if ("function" == typeof e.then) return $n(e);
              if (e.$$typeof === d) return e.I
            }
            throw Error(o(438, e + ""))
          },
          useContext: function(e) {
            return Hn(), e.I
          },
          useMemo: Dn,
          useReducer: Pn,
          useRef: function(e) {
            vn = Hn();
            var n = (wn = In()).memoizedState;
            return null === n ? (e = {
              current: e
            }, wn.memoizedState = e) : n
          },
          useState: function(e) {
            return Pn(On, e)
          },
          useInsertionEffect: zn,
          useLayoutEffect: zn,
          useCallback: function(e, n) {
            return Dn(function() {
              return e
            }, n)
          },
          useImperativeHandle: zn,
          useEffect: zn,
          useDebugValue: zn,
          useDeferredValue: function(e, n) {
            return Hn(), void 0 !== n ? n : e
          },
          useTransition: function() {
            return Hn(), [!1, Wn]
          },
          useId: function() {
            var e = bn.treeContext,
              n = e.overflow;
            e = ((e = e.id) & ~(1 << 32 - cn(e) - 1)).toString(32) + n;
            var t = Xn;
            if (null === t) throw Error(o(404));
            return n = xn++, e = ":" + t.idPrefix + "R" + e, n > 0 && (e += "H" + n.toString(32)), e + ":"
          },
          useSyncExternalStore: function(e, n, t) {
            if (void 0 === t) throw Error(o(407));
            return t()
          },
          useCacheRefresh: function() {
            return Gn
          },
          useMemoCache: function(e) {
            for (var n = Array(e), t = 0; e > t; t++) n[t] = w;
            return n
          },
          useHostTransitionStatus: function() {
            return Hn(), Z
          },
          useOptimistic: function(e) {
            return Hn(), [e, Zn]
          }
        };
        Yn.useFormState = Un, Yn.useActionState = Un;
        var qn, Kn, Xn = null,
          Qn = {
            getCacheForType: function() {
              throw Error(o(248))
            }
          };

        function Jn(e) {
          if (void 0 === qn) try {
            throw Error()
          } catch (e) {
            var n = e.stack.trim().match(/\n( *(at )?)/);
            qn = n && n[1] || "", Kn = e.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : e.stack.indexOf("@") > -1 ? "@unknown:0:0" : ""
          }
          return "\n" + qn + e + Kn
        }
        var et = !1;

        function nt(e, n) {
          if (!e || et) return "";
          et = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function() {
                try {
                  if (n) {
                    var t = function() {
                      throw Error()
                    };
                    if (Object.defineProperty(t.prototype, "props", {
                        set: function() {
                          throw Error()
                        }
                      }), "object" == typeof Reflect && Reflect.construct) {
                      try {
                        Reflect.construct(t, [])
                      } catch (e) {
                        var r = e
                      }
                      Reflect.construct(e, [], t)
                    } else {
                      try {
                        t.call()
                      } catch (e) {
                        r = e
                      }
                      e.call(t.prototype)
                    }
                  } else {
                    try {
                      throw Error()
                    } catch (e) {
                      r = e
                    }(t = e()) && "function" == typeof t.catch && t.catch(function() {})
                  }
                } catch (e) {
                  if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                }
                return [null, null]
              }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot"
            });
            var o = r.DetermineComponentFrameRoot(),
              a = o[0],
              s = o[1];
            if (a && s) {
              var l = a.split("\n"),
                u = s.split("\n");
              for (i = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot");) r++;
              for (; i < u.length && !u[i].includes("DetermineComponentFrameRoot");) i++;
              if (r === l.length || i === u.length)
                for (r = l.length - 1, i = u.length - 1; r >= 1 && i >= 0 && l[r] !== u[i];) i--;
              for (; r >= 1 && i >= 0; r--, i--)
                if (l[r] !== u[i]) {
                  if (1 !== r || 1 !== i)
                    do {
                      if (r--, 0 > --i || l[r] !== u[i]) {
                        var c = "\n" + l[r].replace(" at new ", " at ");
                        return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                      }
                    } while (r >= 1 && i >= 0);
                  break
                }
            }
          } finally {
            et = !1, Error.prepareStackTrace = t
          }
          return (t = e ? e.displayName || e.name : "") ? Jn(t) : ""
        }

        function tt(e) {
          if ("string" == typeof e) return Jn(e);
          if ("function" == typeof e) return e.prototype && e.prototype.isReactComponent ? e = nt(e, !0) : nt(e, !1);
          if ("object" == typeof e && null !== e) {
            switch (e.$$typeof) {
              case p:
                return nt(e.render, !1);
              case m:
                return nt(e.type, !1);
              case v:
                var n = e,
                  t = n.B;
                n = n.k;
                try {
                  e = n(t)
                } catch {
                  return Jn("Lazy")
                }
                return tt(e)
            }
            if ("string" == typeof e.name) return t = e.env, Jn(e.name + (t ? " [" + t + "]" : ""))
          }
          switch (e) {
            case A:
              return Jn("SuspenseList");
            case g:
              return Jn("Suspense")
          }
          return ""
        }

        function rt(e) {
          if ("object" == typeof e && null !== e && "string" == typeof e.environmentName) {
            var n = e.environmentName;
            "string" == typeof(e = [e].slice(0))[0] ? e.splice(0, 1, "[%s] " + e[0], " " + n + " "): e.splice(0, 0, "[%s] ", " " + n + " "), e.unshift(console), (n = qe.apply(console.error, e))()
          } else console.error(e);
          return null
        }

        function it() {}

        function ot(e, n, t, r, i, o, a, s, l, u, c) {
          var f = new Set;
          this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = n, this.rootFormatContext = t, this.progressiveChunkSize = void 0 === r ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedRootSegment = null, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === i ? rt : i, this.onPostpone = void 0 === u ? it : u, this.onAllReady = void 0 === o ? it : o, this.onShellReady = void 0 === a ? it : a, this.onShellError = void 0 === s ? it : s, this.onFatalError = void 0 === l ? it : l, this.formState = void 0 === c ? null : c
        }
        var at = null;

        function st(e, n) {
          e.pingedTasks.push(n), 1 === e.pingedTasks.length && (e.flushScheduled = null !== e.destination, It(e))
        }

        function lt(e, n) {
          return {
            status: 0,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: n,
            errorDigest: null,
            contentState: Oe(),
            fallbackState: Oe(),
            trackedContentKeyPath: null,
            trackedFallbackNode: null
          }
        }

        function ut(e, n, t, r, i, o, a, s, l, u, c, f, h, d) {
          e.allPendingTasks++, null === i ? e.pendingRootTasks++ : i.pendingTasks++;
          var p = {
            replay: null,
            node: t,
            childIndex: r,
            ping: function() {
              return st(e, p)
            },
            blockedBoundary: i,
            blockedSegment: o,
            hoistableState: a,
            abortSet: s,
            keyPath: l,
            formatContext: u,
            context: c,
            treeContext: f,
            componentStack: h,
            thenableState: n,
            isFallback: d
          };
          return s.add(p), p
        }

        function ct(e, n, t, r, i, o, a, s, l, u, c, f, h, d) {
          e.allPendingTasks++, null === o ? e.pendingRootTasks++ : o.pendingTasks++, t.pendingTasks++;
          var p = {
            replay: t,
            node: r,
            childIndex: i,
            ping: function() {
              return st(e, p)
            },
            blockedBoundary: o,
            blockedSegment: null,
            hoistableState: a,
            abortSet: s,
            keyPath: l,
            formatContext: u,
            context: c,
            treeContext: f,
            componentStack: h,
            thenableState: n,
            isFallback: d
          };
          return s.add(p), p
        }

        function ft(e, n, t, r, i, o) {
          return {
            status: 0,
            id: -1,
            index: n,
            parentFlushed: !1,
            chunks: [],
            children: [],
            parentFormatContext: r,
            boundary: t,
            lastPushedText: i,
            textEmbedded: o
          }
        }

        function ht(e) {
          var n = e.node;
          "object" == typeof n && null !== n && n.$$typeof === a && (e.componentStack = {
            parent: e.componentStack,
            type: n.type
          })
        }

        function dt(e) {
          var n = {};
          return e && Object.defineProperty(n, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
              try {
                var t = "",
                  r = e;
                do {
                  t += tt(r.type), r = r.parent
                } while (r);
                var i = t
              } catch (e) {
                i = "\nError generating stack: " + e.message + "\n" + e.stack
              }
              return Object.defineProperty(n, "componentStack", {
                value: i
              }), i
            }
          }), n
        }

        function pt(e, n, t) {
          if (null == (n = (e = e.onError)(n, t)) || "string" == typeof n) return n
        }

        function gt(e, n) {
          var t = e.onShellError,
            r = e.onFatalError;
          t(n), r(n), null !== e.destination ? (e.status = 14, e.destination.destroy(n)) : (e.status = 13, e.fatalError = n)
        }

        function At(e, n, t, r, i, o) {
          var a = n.thenableState;
          for (n.thenableState = null, vn = {}, bn = n, Cn = e, yn = t, Sn = xn = 0, Ln = -1, Fn = 0, Tn = a, e = r(i, o); Bn;) Bn = !1, Sn = xn = 0, Ln = -1, Fn = 0, Rn += 1, wn = null, e = r(i, o);
          return jn(), e
        }

        function mt(e, n, t, r, i, o, a) {
          var s = !1;
          if (0 !== o && null !== e.formState) {
            var l = n.blockedSegment;
            if (null !== l) {
              s = !0, l = l.chunks;
              for (var u = 0; o > u; u++) u === a ? l.push("\x3c!--F!--\x3e") : l.push("\x3c!--F--\x3e")
            }
          }
          o = n.keyPath, n.keyPath = t, i ? (t = n.treeContext, n.treeContext = un(t, 1, 0), xt(e, n, r, -1), n.treeContext = t) : s ? xt(e, n, r, -1) : Ct(e, n, r, -1), n.keyPath = o
        }

        function vt(e, n, t, i, a, s) {
          if ("function" == typeof i)
            if (i.prototype && i.prototype.isReactComponent) {
              var w = a;
              if ("ref" in a)
                for (var E in w = {}, a) "ref" !== E && (w[E] = a[E]);
              var x = i.defaultProps;
              if (x)
                for (var F in w === a && (w = S({}, w, a)), x) void 0 === w[F] && (w[F] = x[F]);
              a = w, w = Qe, "object" == typeof(x = i.contextType) && null !== x && (w = x.I);
              var T = void 0 !== (w = new i(a, w)).state ? w.state : null;
              if (w.updater = sn, w.props = a, w.state = T, x = {
                  queue: [],
                  replace: !1
                }, w.Z = x, s = i.contextType, w.context = "object" == typeof s && null !== s ? s.I : Qe, "function" == typeof(s = i.getDerivedStateFromProps) && (T = null == (s = s(a, T)) ? T : S({}, T, s), w.state = T), "function" != typeof i.getDerivedStateFromProps && "function" != typeof w.getSnapshotBeforeUpdate && ("function" == typeof w.UNSAFE_componentWillMount || "function" == typeof w.componentWillMount))
                if (i = w.state, "function" == typeof w.componentWillMount && w.componentWillMount(), "function" == typeof w.UNSAFE_componentWillMount && w.UNSAFE_componentWillMount(), i !== w.state && sn.enqueueReplaceState(w, w.state, null), null !== x.queue && x.queue.length > 0)
                  if (i = x.queue, s = x.replace, x.queue = null, x.replace = !1, s && 1 === i.length) w.state = i[0];
                  else {
                    for (x = s ? i[0] : w.state, T = !0, s = s ? 1 : 0; s < i.length; s++) null != (F = "function" == typeof(F = i[s]) ? F.call(w, x, a, void 0) : F) && (T ? (T = !1, x = S({}, x, F)) : S(x, F));
                    w.state = x
                  }
              else x.queue = null;
              if (i = w.render(), 12 === e.status) throw null;
              a = n.keyPath, n.keyPath = t, Ct(e, n, i, -1), n.keyPath = a
            } else {
              if (i = At(e, n, t, i, a, void 0), 12 === e.status) throw null;
              mt(e, n, t, i, 0 !== xn, Sn, Ln)
            }
          else {
            if ("string" != typeof i) {
              switch (i) {
                case k:
                case C:
                case u:
                case c:
                case l:
                  return i = n.keyPath, n.keyPath = t, Ct(e, n, a.children, -1), void(n.keyPath = i);
                case y:
                  return void("hidden" !== a.mode && (i = n.keyPath, n.keyPath = t, Ct(e, n, a.children, -1), n.keyPath = i));
                case A:
                  return i = n.keyPath, n.keyPath = t, Ct(e, n, a.children, -1), void(n.keyPath = i);
                case b:
                  throw Error(o(343));
                case g:
                  e: if (null !== n.replay) {
                    i = n.keyPath, n.keyPath = t, t = a.children;
                    try {
                      xt(e, n, t, -1)
                    } finally {
                      n.keyPath = i
                    }
                  } else {
                    i = n.keyPath;
                    var M = n.blockedBoundary,
                      H = n.hoistableState;
                    s = n.blockedSegment, F = a.fallback, a = a.children;
                    var N = new Set;
                    E = lt(0, N), null !== e.trackedPostpones && (E.trackedContentKeyPath = t);
                    var I = ft(0, s.chunks.length, E, n.formatContext, !1, !1);
                    s.children.push(I), s.lastPushedText = !1;
                    var j = ft(0, 0, null, n.formatContext, !1, !1);
                    if (j.parentFlushed = !0, null !== e.trackedPostpones) {
                      x = [(w = [t[0], "Suspense Fallback", t[2]])[1], w[2],
                        [], null
                      ], e.trackedPostpones.workingMap.set(w, x), E.trackedFallbackNode = x, n.blockedSegment = I, n.keyPath = w, I.status = 6;
                      try {
                        xt(e, n, F, -1), Ye(I.chunks, e.renderState, I.lastPushedText, I.textEmbedded), I.status = 1
                      } catch (n) {
                        throw I.status = 12 === e.status ? 3 : 4, n
                      } finally {
                        n.blockedSegment = s, n.keyPath = i
                      }
                      ht(n = ut(e, null, a, -1, E, j, E.contentState, n.abortSet, t, n.formatContext, n.context, n.treeContext, n.componentStack, n.isFallback)), e.pingedTasks.push(n)
                    } else {
                      n.blockedBoundary = E, n.hoistableState = E.contentState, n.blockedSegment = j, n.keyPath = t, j.status = 6;
                      try {
                        if (xt(e, n, a, -1), Ye(j.chunks, e.renderState, j.lastPushedText, j.textEmbedded), j.status = 1, Ht(E, j), 0 === E.pendingTasks && 0 === E.status) {
                          E.status = 1;
                          break e
                        }
                      } catch (t) {
                        E.status = 4, 12 === e.status ? (j.status = 3, w = e.fatalError) : (j.status = 4, w = t), T = pt(e, w, x = dt(n.componentStack)), E.errorDigest = T, wt(e, E)
                      } finally {
                        n.blockedBoundary = M, n.hoistableState = H, n.blockedSegment = s, n.keyPath = i
                      }
                      ht(n = ut(e, null, F, -1, M, I, E.fallbackState, N, [t[0], "Suspense Fallback", t[2]], n.formatContext, n.context, n.treeContext, n.componentStack, !0)), e.pingedTasks.push(n)
                    }
                  }
                  return
              }
              if ("object" == typeof i && null !== i) switch (i.$$typeof) {
                case p:
                  if ("ref" in a)
                    for (I in w = {}, a) "ref" !== I && (w[I] = a[I]);
                  else w = a;
                  return void mt(e, n, t, i = At(e, n, t, i.render, w, s), 0 !== xn, Sn, Ln);
                case m:
                  return void vt(e, n, t, i.type, a, s);
                case f:
                case d:
                  if (x = a.children, w = n.keyPath, a = a.value, T = i.I, i.I = a, Je = i = {
                      parent: s = Je,
                      depth: null === s ? 0 : s.depth + 1,
                      context: i,
                      parentValue: T,
                      value: a
                    }, n.context = i, n.keyPath = t, Ct(e, n, x, -1), null === (e = Je)) throw Error(o(403));
                  return e.context.I = e.parentValue, e = Je = e.parent, n.context = e, void(n.keyPath = w);
                case h:
                  return i = (a = a.children)(i.j.I), a = n.keyPath, n.keyPath = t, Ct(e, n, i, -1), void(n.keyPath = a);
                case v:
                  if (i = (w = i.k)(i.B), 12 === e.status) throw null;
                  return void vt(e, n, t, i, a, s)
              }
              throw Error(o(130, null == i ? i : typeof i, ""))
            }
            if (null === (w = n.blockedSegment)) w = a.children, x = n.formatContext, T = n.keyPath, n.formatContext = q(x, i, a), n.keyPath = t, xt(e, n, w, -1), n.formatContext = x, n.keyPath = T;
            else {
              T = function(e, n, t, i, a, s, l, u, c) {
                switch (n) {
                  case "div":
                  case "span":
                  case "svg":
                  case "path":
                  case "g":
                  case "p":
                  case "li":
                  case "annotation-xml":
                  case "color-profile":
                  case "font-face":
                  case "font-face-src":
                  case "font-face-uri":
                  case "font-face-format":
                  case "font-face-name":
                  case "missing-glyph":
                    break;
                  case "a":
                    e.push(me("a"));
                    var f, h = null,
                      d = null;
                    for (f in t)
                      if (L.call(t, f)) {
                        var p = t[f];
                        if (null != p) switch (f) {
                          case "children":
                            h = p;
                            break;
                          case "dangerouslySetInnerHTML":
                            d = p;
                            break;
                          case "href":
                            "" === p ? J(e, "href", "") : oe(e, f, p);
                            break;
                          default:
                            oe(e, f, p)
                        }
                      } if (e.push(">"), ae(e, d, h), "string" == typeof h) {
                      e.push(_(h));
                      var g = null
                    } else g = h;
                    return g;
                  case "select":
                    e.push(me("select"));
                    var A, m = null,
                      v = null;
                    for (A in t)
                      if (L.call(t, A)) {
                        var b = t[A];
                        if (null != b) switch (A) {
                          case "children":
                            m = b;
                            break;
                          case "dangerouslySetInnerHTML":
                            v = b;
                            break;
                          case "defaultValue":
                          case "value":
                            break;
                          default:
                            oe(e, A, b)
                        }
                      } return e.push(">"), ae(e, v, m), m;
                  case "option":
                    var C = l.selectedValue;
                    e.push(me("option"));
                    var y, k = null,
                      w = null,
                      E = null,
                      x = null;
                    for (y in t)
                      if (L.call(t, y)) {
                        var F = t[y];
                        if (null != F) switch (y) {
                          case "children":
                            k = F;
                            break;
                          case "selected":
                            E = F;
                            break;
                          case "dangerouslySetInnerHTML":
                            x = F;
                            break;
                          case "value":
                            w = F;
                          default:
                            oe(e, y, F)
                        }
                      } if (null != C) {
                      var T = null !== w ? "" + w : function(e) {
                        var n = "";
                        return r.Children.forEach(e, function(e) {
                          null != e && (n += e)
                        }), n
                      }(k);
                      if (B(C)) {
                        for (var M = 0; M < C.length; M++)
                          if ("" + C[M] === T) {
                            e.push(' selected=""');
                            break
                          }
                      } else "" + C === T && e.push(' selected=""')
                    } else E && e.push(' selected=""');
                    return e.push(">"), ae(e, x, k), k;
                  case "textarea":
                    e.push(me("textarea"));
                    var H, N = null,
                      I = null,
                      j = null;
                    for (H in t)
                      if (L.call(t, H)) {
                        var O = t[H];
                        if (null != O) switch (H) {
                          case "children":
                            j = O;
                            break;
                          case "value":
                            N = O;
                            break;
                          case "defaultValue":
                            I = O;
                            break;
                          case "dangerouslySetInnerHTML":
                            throw Error(o(91));
                          default:
                            oe(e, H, O)
                        }
                      } if (null === N && null !== I && (N = I), e.push(">"), null != j) {
                      if (null != N) throw Error(o(92));
                      if (B(j)) {
                        if (j.length > 1) throw Error(o(93));
                        N = "" + j[0]
                      }
                      N = "" + j
                    }
                    return "string" == typeof N && "\n" === N[0] && e.push("\n"), null !== N && e.push(_("" + N)), null;
                  case "input":
                    e.push(me("input"));
                    var P, V = null,
                      W = null,
                      Z = null,
                      U = null,
                      G = null,
                      z = null,
                      Y = null,
                      q = null,
                      K = null;
                    for (P in t)
                      if (L.call(t, P)) {
                        var te = t[P];
                        if (null != te) switch (P) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(399, "input"));
                          case "name":
                            V = te;
                            break;
                          case "formAction":
                            W = te;
                            break;
                          case "formEncType":
                            Z = te;
                            break;
                          case "formMethod":
                            U = te;
                            break;
                          case "formTarget":
                            G = te;
                            break;
                          case "defaultChecked":
                            K = te;
                            break;
                          case "defaultValue":
                            Y = te;
                            break;
                          case "checked":
                            q = te;
                            break;
                          case "value":
                            z = te;
                            break;
                          default:
                            oe(e, P, te)
                        }
                      } var ge = ie(e, i, a, W, Z, U, G, V);
                    return null !== q ? Q(e, "checked", q) : null !== K && Q(e, "checked", K), null !== z ? oe(e, "value", z) : null !== Y && oe(e, "value", Y), e.push("/>"), ge?.forEach(ne, e), null;
                  case "button":
                    e.push(me("button"));
                    var Ae, ve = null,
                      Ce = null,
                      ye = null,
                      ke = null,
                      we = null,
                      Ee = null,
                      Be = null;
                    for (Ae in t)
                      if (L.call(t, Ae)) {
                        var xe = t[Ae];
                        if (null != xe) switch (Ae) {
                          case "children":
                            ve = xe;
                            break;
                          case "dangerouslySetInnerHTML":
                            Ce = xe;
                            break;
                          case "name":
                            ye = xe;
                            break;
                          case "formAction":
                            ke = xe;
                            break;
                          case "formEncType":
                            we = xe;
                            break;
                          case "formMethod":
                            Ee = xe;
                            break;
                          case "formTarget":
                            Be = xe;
                            break;
                          default:
                            oe(e, Ae, xe)
                        }
                      } var Se = ie(e, i, a, ke, we, Ee, Be, ye);
                    if (e.push(">"), Se?.forEach(ne, e), ae(e, Ce, ve), "string" == typeof ve) {
                      e.push(_(ve));
                      var Le = null
                    } else Le = ve;
                    return Le;
                  case "form":
                    e.push(me("form"));
                    var Fe, Te = null,
                      Me = null,
                      Re = null,
                      He = null,
                      Ne = null,
                      Ie = null;
                    for (Fe in t)
                      if (L.call(t, Fe)) {
                        var _e = t[Fe];
                        if (null != _e) switch (Fe) {
                          case "children":
                            Te = _e;
                            break;
                          case "dangerouslySetInnerHTML":
                            Me = _e;
                            break;
                          case "action":
                            Re = _e;
                            break;
                          case "encType":
                            He = _e;
                            break;
                          case "method":
                            Ne = _e;
                            break;
                          case "target":
                            Ie = _e;
                            break;
                          default:
                            oe(e, Fe, _e)
                        }
                      } var je = null,
                      Oe = null;
                    if ("function" == typeof Re) {
                      var Ve = re(i, Re);
                      null !== Ve ? (Re = Ve.action || "", He = Ve.encType, Ne = Ve.method, Ie = Ve.target, je = Ve.data, Oe = Ve.name) : (e.push(" ", "action", '="', ee, '"'), Ie = Ne = He = Re = null, se(i, a))
                    }
                    if (null != Re && oe(e, "action", Re), null != He && oe(e, "encType", He), null != Ne && oe(e, "method", Ne), null != Ie && oe(e, "target", Ie), e.push(">"), null !== Oe && (e.push('<input type="hidden"'), J(e, "name", Oe), e.push("/>"), je?.forEach(ne, e)), ae(e, Me, Te), "string" == typeof Te) {
                      e.push(_(Te));
                      var We = null
                    } else We = Te;
                    return We;
                  case "menuitem":
                    for (var Ze in e.push(me("menuitem")), t)
                      if (L.call(t, Ze)) {
                        var Ue = t[Ze];
                        if (null != Ue) switch (Ze) {
                          case "children":
                          case "dangerouslySetInnerHTML":
                            throw Error(o(400));
                          default:
                            oe(e, Ze, Ue)
                        }
                      } return e.push(">"), null;
                  case "object":
                    e.push(me("object"));
                    var $e, Ge = null,
                      ze = null;
                    for ($e in t)
                      if (L.call(t, $e)) {
                        var Ye = t[$e];
                        if (null != Ye) switch ($e) {
                          case "children":
                            Ge = Ye;
                            break;
                          case "dangerouslySetInnerHTML":
                            ze = Ye;
                            break;
                          case "data":
                            var qe = D("" + Ye);
                            if ("" === qe) break;
                            e.push(" ", "data", '="', _(qe), '"');
                            break;
                          default:
                            oe(e, $e, Ye)
                        }
                      } if (e.push(">"), ae(e, ze, Ge), "string" == typeof Ge) {
                      e.push(_(Ge));
                      var Ke = null
                    } else Ke = Ge;
                    return Ke;
                  case "title":
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp) var Xe = he(e, t);
                    else c ? Xe = null : (he(a.hoistableChunks, t), Xe = void 0);
                    return Xe;
                  case "link":
                    var Qe = t.rel,
                      Je = t.href,
                      en = t.precedence;
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp || "string" != typeof Qe || "string" != typeof Je || "" === Je) {
                      le(e, t);
                      var nn = null
                    } else if ("stylesheet" === t.rel)
                      if ("string" != typeof en || null != t.disabled || t.onLoad || t.onError) nn = le(e, t);
                      else {
                        var tn = a.styles.get(en),
                          rn = i.styleResources.hasOwnProperty(Je) ? i.styleResources[Je] : void 0;
                        if (null !== rn) {
                          i.styleResources[Je] = null, tn || (tn = {
                            precedence: _(en),
                            rules: [],
                            hrefs: [],
                            sheets: new Map
                          }, a.styles.set(en, tn));
                          var on = {
                            state: 0,
                            props: S({}, t, {
                              "data-precedence": t.precedence,
                              precedence: null
                            })
                          };
                          if (rn) {
                            2 === rn.length && Pe(on.props, rn);
                            var an = a.preloads.stylesheets.get(Je);
                            an && an.length > 0 ? an.length = 0 : on.state = 1
                          }
                          tn.sheets.set(Je, on), s && s.stylesheets.add(on)
                        } else if (tn) {
                          var sn = tn.sheets.get(Je);
                          sn && s && s.stylesheets.add(sn)
                        }
                        u && e.push("\x3c!-- --\x3e"), nn = null
                      }
                    else t.onLoad || t.onError ? nn = le(e, t) : (u && e.push("\x3c!-- --\x3e"), nn = c ? null : le(a.hoistableChunks, t));
                    return nn;
                  case "script":
                    var ln = t.async;
                    if ("string" != typeof t.src || !t.src || !ln || "function" == typeof ln || "symbol" == typeof ln || t.onLoad || t.onError || 3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp) var un = de(e, t);
                    else {
                      var cn = t.src;
                      if ("module" === t.type) var fn = i.moduleScriptResources,
                        hn = a.preloads.moduleScripts;
                      else fn = i.scriptResources, hn = a.preloads.scripts;
                      var dn = fn.hasOwnProperty(cn) ? fn[cn] : void 0;
                      if (null !== dn) {
                        fn[cn] = null;
                        var pn = t;
                        if (dn) {
                          2 === dn.length && Pe(pn = S({}, t), dn);
                          var gn = hn.get(cn);
                          gn && (gn.length = 0)
                        }
                        var An = [];
                        a.scripts.add(An), de(An, pn)
                      }
                      u && e.push("\x3c!-- --\x3e"), un = null
                    }
                    return un;
                  case "style":
                    var mn = t.precedence,
                      vn = t.href;
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp || "string" != typeof mn || "string" != typeof vn || "" === vn) {
                      e.push(me("style"));
                      var bn, Cn = null,
                        yn = null;
                      for (bn in t)
                        if (L.call(t, bn)) {
                          var kn = t[bn];
                          if (null != kn) switch (bn) {
                            case "children":
                              Cn = kn;
                              break;
                            case "dangerouslySetInnerHTML":
                              yn = kn;
                              break;
                            default:
                              oe(e, bn, kn)
                          }
                        } e.push(">");
                      var wn = Array.isArray(Cn) ? 2 > Cn.length ? Cn[0] : null : Cn;
                      "function" != typeof wn && "symbol" != typeof wn && null != wn && e.push(("" + wn).replace(ue, ce)), ae(e, yn, Cn), e.push(be("style"));
                      var En = null
                    } else {
                      var Bn = a.styles.get(mn);
                      if (null !== (i.styleResources.hasOwnProperty(vn) ? i.styleResources[vn] : void 0)) {
                        i.styleResources[vn] = null, Bn ? Bn.hrefs.push(_(vn)) : (Bn = {
                          precedence: _(mn),
                          rules: [],
                          hrefs: [_(vn)],
                          sheets: new Map
                        }, a.styles.set(mn, Bn));
                        var xn, Sn = Bn.rules,
                          Ln = null,
                          Fn = null;
                        for (xn in t)
                          if (L.call(t, xn)) {
                            var Tn = t[xn];
                            if (null != Tn) switch (xn) {
                              case "children":
                                Ln = Tn;
                                break;
                              case "dangerouslySetInnerHTML":
                                Fn = Tn
                            }
                          } var Mn = Array.isArray(Ln) ? 2 > Ln.length ? Ln[0] : null : Ln;
                        "function" != typeof Mn && "symbol" != typeof Mn && null != Mn && Sn.push(("" + Mn).replace(ue, ce)), ae(Sn, Fn, Ln)
                      }
                      Bn && s && s.styles.add(Bn), u && e.push("\x3c!-- --\x3e"), En = void 0
                    }
                    return En;
                  case "meta":
                    if (3 === l.insertionMode || 1 & l.tagScope || null != t.itemProp) var Rn = fe(e, t, "meta");
                    else u && e.push("\x3c!-- --\x3e"), Rn = c ? null : "string" == typeof t.charSet ? fe(a.charsetChunks, t, "meta") : "viewport" === t.name ? fe(a.viewportChunks, t, "meta") : fe(a.hoistableChunks, t, "meta");
                    return Rn;
                  case "listing":
                  case "pre":
                    e.push(me(n));
                    var Hn, Nn = null,
                      In = null;
                    for (Hn in t)
                      if (L.call(t, Hn)) {
                        var _n = t[Hn];
                        if (null != _n) switch (Hn) {
                          case "children":
                            Nn = _n;
                            break;
                          case "dangerouslySetInnerHTML":
                            In = _n;
                            break;
                          default:
                            oe(e, Hn, _n)
                        }
                      } if (e.push(">"), null != In) {
                      if (null != Nn) throw Error(o(60));
                      if ("object" != typeof In || !("W" in In)) throw Error(o(61));
                      var jn = In.W;
                      null != jn && ("string" == typeof jn && jn.length > 0 && "\n" === jn[0] ? e.push("\n", jn) : e.push("" + jn))
                    }
                    return "string" == typeof Nn && "\n" === Nn[0] && e.push("\n"), Nn;
                  case "img":
                    var On = t.src,
                      Pn = t.srcSet;
                    if (!("lazy" === t.loading || !On && !Pn || "string" != typeof On && null != On || "string" != typeof Pn && null != Pn || "low" === t.fetchPriority || 3 & l.tagScope) && ("string" != typeof On || ":" !== On[4] || "d" !== On[0] && "D" !== On[0] || "a" !== On[1] && "A" !== On[1] || "t" !== On[2] && "T" !== On[2] || "a" !== On[3] && "A" !== On[3]) && ("string" != typeof Pn || ":" !== Pn[4] || "d" !== Pn[0] && "D" !== Pn[0] || "a" !== Pn[1] && "A" !== Pn[1] || "t" !== Pn[2] && "T" !== Pn[2] || "a" !== Pn[3] && "A" !== Pn[3])) {
                      var Dn = "string" == typeof t.sizes ? t.sizes : void 0,
                        Vn = Pn ? Pn + "\n" + (Dn || "") : On,
                        Wn = a.preloads.images,
                        Zn = Wn.get(Vn);
                      if (Zn)("high" === t.fetchPriority || 10 > a.highImagePreloads.size) && (Wn.delete(Vn), a.highImagePreloads.add(Zn));
                      else if (!i.imageResources.hasOwnProperty(Vn)) {
                        i.imageResources[Vn] = $;
                        var Un, $n = t.crossOrigin,
                          Gn = "string" == typeof $n ? "use-credentials" === $n ? $n : "" : void 0,
                          zn = a.headers;
                        zn && zn.remainingCapacity > 0 && ("high" === t.fetchPriority || 500 > zn.highImagePreloads.length) && (Un = De(On, "image", {
                          imageSrcSet: t.srcSet,
                          imageSizes: t.sizes,
                          crossOrigin: Gn,
                          integrity: t.integrity,
                          nonce: t.nonce,
                          type: t.type,
                          fetchPriority: t.fetchPriority,
                          referrerPolicy: t.refererPolicy
                        }), (zn.remainingCapacity -= Un.length + 2) >= 0) ? (a.resets.image[Vn] = $, zn.highImagePreloads && (zn.highImagePreloads += ", "), zn.highImagePreloads += Un) : (le(Zn = [], {
                          rel: "preload",
                          as: "image",
                          href: Pn ? void 0 : On,
                          imageSrcSet: Pn,
                          imageSizes: Dn,
                          crossOrigin: Gn,
                          integrity: t.integrity,
                          type: t.type,
                          fetchPriority: t.fetchPriority,
                          referrerPolicy: t.referrerPolicy
                        }), "high" === t.fetchPriority || 10 > a.highImagePreloads.size ? a.highImagePreloads.add(Zn) : (a.bulkPreloads.add(Zn), Wn.set(Vn, Zn)))
                      }
                    }
                    return fe(e, t, "img");
                  case "base":
                  case "area":
                  case "br":
                  case "col":
                  case "embed":
                  case "hr":
                  case "keygen":
                  case "param":
                  case "source":
                  case "track":
                  case "wbr":
                    return fe(e, t, n);
                  case "head":
                    if (2 > l.insertionMode && null === a.headChunks) {
                      a.headChunks = [];
                      var Yn = pe(a.headChunks, t, "head")
                    } else Yn = pe(e, t, "head");
                    return Yn;
                  case "html":
                    if (0 === l.insertionMode && null === a.htmlChunks) {
                      a.htmlChunks = [""];
                      var qn = pe(a.htmlChunks, t, "html")
                    } else qn = pe(e, t, "html");
                    return qn;
                  default:
                    if (-1 !== n.indexOf("-")) {
                      e.push(me(n));
                      var Kn, Xn = null,
                        Qn = null;
                      for (Kn in t)
                        if (L.call(t, Kn)) {
                          var Jn = t[Kn];
                          if (null != Jn) {
                            var et = Kn;
                            switch (Kn) {
                              case "children":
                                Xn = Jn;
                                break;
                              case "dangerouslySetInnerHTML":
                                Qn = Jn;
                                break;
                              case "style":
                                X(e, Jn);
                                break;
                              case "suppressContentEditableWarning":
                              case "suppressHydrationWarning":
                              case "ref":
                                break;
                              case "className":
                                et = "class";
                              default:
                                if (R(Kn) && "function" != typeof Jn && "symbol" != typeof Jn && !1 !== Jn) {
                                  if (!0 === Jn) Jn = "";
                                  else if ("object" == typeof Jn) continue;
                                  e.push(" ", et, '="', _(Jn), '"')
                                }
                            }
                          }
                        } return e.push(">"), ae(e, Qn, Xn), Xn
                    }
                }
                return pe(e, t, n)
              }(w.chunks, i, a, e.resumableState, e.renderState, n.hoistableState, n.formatContext, w.lastPushedText, n.isFallback), w.lastPushedText = !1, x = n.formatContext, s = n.keyPath, n.formatContext = q(x, i, a), n.keyPath = t, xt(e, n, T, -1), n.formatContext = x, n.keyPath = s;
              e: {
                switch (n = w.chunks, e = e.resumableState, i) {
                  case "title":
                  case "style":
                  case "script":
                  case "area":
                  case "base":
                  case "br":
                  case "col":
                  case "embed":
                  case "hr":
                  case "img":
                  case "input":
                  case "keygen":
                  case "link":
                  case "meta":
                  case "param":
                  case "source":
                  case "track":
                  case "wbr":
                    break e;
                  case "body":
                    if (1 >= x.insertionMode) {
                      e.hasBody = !0;
                      break e
                    }
                    break;
                  case "html":
                    if (0 === x.insertionMode) {
                      e.hasHtml = !0;
                      break e
                    }
                }
                n.push(be(i))
              }
              w.lastPushedText = !1
            }
          }
        }

        function bt(e, n, t, r, i) {
          var o = n.replay,
            a = n.blockedBoundary,
            s = ft(0, 0, null, n.formatContext, !1, !1);
          s.id = t, s.parentFlushed = !0;
          try {
            n.replay = null, n.blockedSegment = s, xt(e, n, r, i), s.status = 1, null === a ? e.completedRootSegment = s : (Ht(a, s), a.parentFlushed && e.partialBoundaries.push(a))
          } finally {
            n.replay = o, n.blockedSegment = null
          }
        }

        function Ct(e, n, t, r) {
          null !== n.replay && "number" == typeof n.replay.slots ? bt(e, n, n.replay.slots, t, r) : (n.node = t, n.childIndex = r, t = n.componentStack, ht(n), yt(e, n), n.componentStack = t)
        }

        function yt(e, n) {
          var t = n.node,
            r = n.childIndex;
          if (null !== t) {
            if ("object" == typeof t) {
              switch (t.$$typeof) {
                case a:
                  var i = t.type,
                    l = t.key,
                    u = t.props,
                    c = void 0 !== (t = u.ref) ? t : null,
                    f = Xe(i),
                    h = l ?? (-1 === r ? 0 : r);
                  if (l = [n.keyPath, f, h], null !== n.replay) e: {
                    var p = n.replay;
                    for (r = p.nodes, t = 0; t < r.length; t++) {
                      var A = r[t];
                      if (h === A[1]) {
                        if (4 === A.length) {
                          if (null !== f && f !== A[0]) throw Error(o(490, A[0], f));
                          var m = A[2];
                          f = A[3], h = n.node, n.replay = {
                            nodes: m,
                            slots: f,
                            pendingTasks: 1
                          };
                          try {
                            if (vt(e, n, l, i, u, c), 1 === n.replay.pendingTasks && n.replay.nodes.length > 0) throw Error(o(488));
                            n.replay.pendingTasks--
                          } catch (t) {
                            if ("object" == typeof t && null !== t && (t === dn || "function" == typeof t.then)) throw n.node === h && (n.replay = p), t;
                            n.replay.pendingTasks--, u = dt(n.componentStack), Lt(e, l = n.blockedBoundary, m, f, i = t, u = pt(e, i, u))
                          }
                          n.replay = p
                        } else {
                          if (i !== g) throw Error(o(490, "Suspense", Xe(i) || "Unknown"));
                          n: {
                            p = void 0,
                            i = A[5],
                            c = A[2],
                            f = A[3],
                            h = null === A[4] ? [] : A[4][2],
                            A = null === A[4] ? null : A[4][3];
                            var b = n.keyPath,
                              C = n.replay,
                              y = n.blockedBoundary,
                              k = n.hoistableState,
                              w = u.children;u = u.fallback;
                            var x = new Set,
                              S = lt(0, x);S.parentFlushed = !0,
                            S.rootSegmentID = i,
                            n.blockedBoundary = S,
                            n.hoistableState = S.contentState,
                            n.keyPath = l,
                            n.replay = {
                              nodes: c,
                              slots: f,
                              pendingTasks: 1
                            };
                            try {
                              if (xt(e, n, w, -1), 1 === n.replay.pendingTasks && n.replay.nodes.length > 0) throw Error(o(488));
                              if (n.replay.pendingTasks--, 0 === S.pendingTasks && 0 === S.status) {
                                S.status = 1, e.completedBoundaries.push(S);
                                break n
                              }
                            } catch (t) {
                              S.status = 4, p = pt(e, t, m = dt(n.componentStack)), S.errorDigest = p, n.replay.pendingTasks--, e.clientRenderedBoundaries.push(S)
                            } finally {
                              n.blockedBoundary = y, n.hoistableState = k, n.replay = C, n.keyPath = b
                            }
                            ht(n = ct(e, null, {
                              nodes: h,
                              slots: A,
                              pendingTasks: 0
                            }, u, -1, y, S.fallbackState, x, [l[0], "Suspense Fallback", l[2]], n.formatContext, n.context, n.treeContext, n.componentStack, !0)),
                            e.pingedTasks.push(n)
                          }
                        }
                        r.splice(t, 1);
                        break e
                      }
                    }
                  }
                  else vt(e, n, l, i, u, c);
                  return;
                case s:
                  throw Error(o(257));
                case v:
                  if (t = (m = t.k)(t.B), 12 === e.status) throw null;
                  return void Ct(e, n, t, r)
              }
              if (B(t)) return void kt(e, n, t, r);
              if ((m = null === t || "object" != typeof t ? null : "function" == typeof(m = E && t[E] || t["@@iterator"]) ? m : null) && (m = m.call(t))) {
                if (!(t = m.next()).done) {
                  u = [];
                  do {
                    u.push(t.value), t = m.next()
                  } while (!t.done);
                  kt(e, n, u, r)
                }
                return
              }
              if ("function" == typeof t.then) return n.thenableState = null, Ct(e, n, $n(t), r);
              if (t.$$typeof === d) return Ct(e, n, t.I, r);
              throw r = {}.toString.call(t), Error(o(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r))
            }
            "string" == typeof t ? null !== (r = n.blockedSegment) && (r.lastPushedText = ze(r.chunks, t, e.renderState, r.lastPushedText)) : ("number" == typeof t || "bigint" == typeof t) && null !== (r = n.blockedSegment) && (r.lastPushedText = ze(r.chunks, "" + t, e.renderState, r.lastPushedText))
          }
        }

        function kt(e, n, t, r) {
          var i = n.keyPath;
          if (-1 === r || (n.keyPath = [n.keyPath, "Fragment", r], null === n.replay)) {
            if (a = n.treeContext, s = t.length, null !== n.replay && null !== (l = n.replay.slots) && "object" == typeof l) {
              for (r = 0; s > r; r++) u = t[r], n.treeContext = un(a, s, r), "number" == typeof(c = l[r]) ? (bt(e, n, c, u, r), delete l[r]) : xt(e, n, u, r);
              return n.treeContext = a, void(n.keyPath = i)
            }
            for (l = 0; s > l; l++) r = t[l], n.treeContext = un(a, s, l), xt(e, n, r, l);
            n.treeContext = a, n.keyPath = i
          } else {
            for (var a = n.replay, s = a.nodes, l = 0; l < s.length; l++) {
              var u = s[l];
              if (u[1] === r) {
                r = u[2], u = u[3], n.replay = {
                  nodes: r,
                  slots: u,
                  pendingTasks: 1
                };
                try {
                  if (kt(e, n, t, -1), 1 === n.replay.pendingTasks && n.replay.nodes.length > 0) throw Error(o(488));
                  n.replay.pendingTasks--
                } catch (i) {
                  if ("object" == typeof i && null !== i && (i === dn || "function" == typeof i.then)) throw i;
                  n.replay.pendingTasks--, t = dt(n.componentStack);
                  var c = n.blockedBoundary;
                  Lt(e, c, r, u, i, t = pt(e, i, t))
                }
                n.replay = a, s.splice(l, 1);
                break
              }
            }
            n.keyPath = i
          }
        }

        function wt(e, n) {
          null !== (e = e.trackedPostpones) && null !== (n = n.trackedContentKeyPath) && void 0 !== (n = e.workingMap.get(n)) && (n.length = 4, n[2] = [], n[3] = null)
        }

        function Et(e, n, t) {
          return ct(e, t, n.replay, n.node, n.childIndex, n.blockedBoundary, n.hoistableState, n.abortSet, n.keyPath, n.formatContext, n.context, n.treeContext, n.componentStack, n.isFallback)
        }

        function Bt(e, n, t) {
          var r = n.blockedSegment,
            i = ft(0, r.chunks.length, null, n.formatContext, r.lastPushedText, !0);
          return r.children.push(i), r.lastPushedText = !1, ut(e, t, n.node, n.childIndex, n.blockedBoundary, i, n.hoistableState, n.abortSet, n.keyPath, n.formatContext, n.context, n.treeContext, n.componentStack, n.isFallback)
        }

        function xt(e, n, t, r) {
          var i = n.formatContext,
            o = n.context,
            a = n.keyPath,
            s = n.treeContext,
            l = n.componentStack,
            u = n.blockedSegment;
          if (null === u) try {
            return Ct(e, n, t, r)
          } catch (u) {
            if (jn(), "object" == typeof(t = u === dn ? An() : u) && null !== t) {
              if ("function" == typeof t.then) return e = Et(e, n, r = _n()).ping, t.then(e, e), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void an(o);
              if ("Maximum call stack size exceeded" === t.message) return t = Et(e, n, t = _n()), e.pingedTasks.push(t), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void an(o)
            }
          } else {
            var c = u.children.length,
              f = u.chunks.length;
            try {
              return Ct(e, n, t, r)
            } catch (h) {
              if (jn(), u.children.length = c, u.chunks.length = f, "object" == typeof(t = h === dn ? An() : h) && null !== t) {
                if ("function" == typeof t.then) return e = Bt(e, n, r = _n()).ping, t.then(e, e), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void an(o);
                if ("Maximum call stack size exceeded" === t.message) return t = Bt(e, n, t = _n()), e.pingedTasks.push(t), n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, n.componentStack = l, void an(o)
              }
            }
          }
          throw n.formatContext = i, n.context = o, n.keyPath = a, n.treeContext = s, an(o), t
        }

        function St(e) {
          var n = e.blockedBoundary;
          null !== (e = e.blockedSegment) && (e.status = 3, Nt(this, n, e))
        }

        function Lt(e, n, t, r, i, a) {
          for (var s = 0; s < t.length; s++) {
            var l = t[s];
            if (4 === l.length) Lt(e, n, l[2], l[3], i, a);
            else {
              l = l[5];
              var u = e,
                c = a,
                f = lt(0, new Set);
              f.parentFlushed = !0, f.rootSegmentID = l, f.status = 4, f.errorDigest = c, f.parentFlushed && u.clientRenderedBoundaries.push(f)
            }
          }
          if (t.length = 0, null !== r) {
            if (null === n) throw Error(o(487));
            if (4 !== n.status && (n.status = 4, n.errorDigest = a, n.parentFlushed && e.clientRenderedBoundaries.push(n)), "object" == typeof r)
              for (var h in r) delete r[h]
          }
        }

        function Ft(e, n, t) {
          var r = e.blockedBoundary,
            i = e.blockedSegment;
          if (null !== i) {
            if (6 === i.status) return;
            i.status = 3
          }
          if (i = dt(e.componentStack), null === r) {
            if (13 !== n.status && 14 !== n.status) {
              if (null === (r = e.replay)) return pt(n, t, i), void gt(n, t);
              r.pendingTasks--, 0 === r.pendingTasks && r.nodes.length > 0 && (e = pt(n, t, i), Lt(n, null, r.nodes, r.slots, t, e)), n.pendingRootTasks--, 0 === n.pendingRootTasks && Mt(n)
            }
          } else r.pendingTasks--, 4 !== r.status && (r.status = 4, e = pt(n, t, i), r.status = 4, r.errorDigest = e, wt(n, r), r.parentFlushed && n.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(e) {
            return Ft(e, n, t)
          }), r.fallbackAbortableTasks.clear();
          n.allPendingTasks--, 0 === n.allPendingTasks && Rt(n)
        }

        function Tt(e, n) {
          try {
            var t = e.renderState,
              r = t.onHeaders;
            if (r) {
              var i = t.headers;
              if (i) {
                t.headers = null;
                var o = i.preconnects;
                if (i.fontPreloads && (o && (o += ", "), o += i.fontPreloads), i.highImagePreloads && (o && (o += ", "), o += i.highImagePreloads), !n) {
                  var a = t.styles.values(),
                    s = a.next();
                  e: for (; i.remainingCapacity > 0 && !s.done; s = a.next())
                    for (var l = s.value.sheets.values(), u = l.next(); i.remainingCapacity > 0 && !u.done; u = l.next()) {
                      var c = u.value,
                        f = c.props,
                        h = f.href,
                        d = c.props,
                        p = De(d.href, "style", {
                          crossOrigin: d.crossOrigin,
                          integrity: d.integrity,
                          nonce: d.nonce,
                          type: d.type,
                          fetchPriority: d.fetchPriority,
                          referrerPolicy: d.referrerPolicy,
                          media: d.media
                        });
                      if (0 > (i.remainingCapacity -= p.length + 2)) break e;
                      t.resets.style[h] = $, o && (o += ", "), o += p, t.resets.style[h] = "string" == typeof f.crossOrigin || "string" == typeof f.integrity ? [f.crossOrigin, f.integrity] : $
                    }
                }
                r(o ? {
                  Link: o
                } : {})
              }
            }
          } catch (n) {
            pt(e, n, {})
          }
        }

        function Mt(e) {
          null === e.trackedPostpones && Tt(e, !0), e.onShellError = it, (e = e.onShellReady)()
        }

        function Rt(e) {
          Tt(e, null === e.trackedPostpones || null === e.completedRootSegment || 5 !== e.completedRootSegment.status), (e = e.onAllReady)()
        }

        function Ht(e, n) {
          if (0 === n.chunks.length && 1 === n.children.length && null === n.children[0].boundary && -1 === n.children[0].id) {
            var t = n.children[0];
            t.id = n.id, t.parentFlushed = !0, 1 === t.status && Ht(e, t)
          } else e.completedSegments.push(n)
        }

        function Nt(e, n, t) {
          if (null === n) {
            if (null !== t && t.parentFlushed) {
              if (null !== e.completedRootSegment) throw Error(o(389));
              e.completedRootSegment = t
            }
            e.pendingRootTasks--, 0 === e.pendingRootTasks && Mt(e)
          } else n.pendingTasks--, 4 !== n.status && (0 === n.pendingTasks ? (0 === n.status && (n.status = 1), null !== t && t.parentFlushed && 1 === t.status && Ht(n, t), n.parentFlushed && e.completedBoundaries.push(n), 1 === n.status && (n.fallbackAbortableTasks.forEach(St, e), n.fallbackAbortableTasks.clear())) : null !== t && t.parentFlushed && 1 === t.status && (Ht(n, t), 1 === n.completedSegments.length && n.parentFlushed && e.partialBoundaries.push(n)));
          e.allPendingTasks--, 0 === e.allPendingTasks && Rt(e)
        }

        function It(e) {
          if (14 !== e.status && 13 !== e.status) {
            var n = Je,
              t = V.H;
            V.H = Yn;
            var r = V.A;
            V.A = Qn;
            var i = at;
            at = e;
            var a = Xn;
            Xn = e.resumableState;
            try {
              var s, l = e.pingedTasks;
              for (s = 0; s < l.length; s++) {
                var u = l[s],
                  c = e,
                  f = u.blockedSegment;
                if (null === f) {
                  var h = c;
                  if (0 !== u.replay.pendingTasks) {
                    an(u.context);
                    try {
                      if ("number" == typeof u.replay.slots ? bt(h, u, u.replay.slots, u.node, u.childIndex) : yt(h, u), 1 === u.replay.pendingTasks && u.replay.nodes.length > 0) throw Error(o(488));
                      u.replay.pendingTasks--, u.abortSet.delete(u), Nt(h, u.blockedBoundary, null)
                    } catch (e) {
                      jn();
                      var d = e === dn ? An() : e;
                      if ("object" == typeof d && null !== d && "function" == typeof d.then) {
                        var p = u.ping;
                        d.then(p, p), u.thenableState = _n()
                      } else {
                        u.replay.pendingTasks--, u.abortSet.delete(u);
                        var g = dt(u.componentStack);
                        c = void 0;
                        var A = h,
                          m = u.blockedBoundary,
                          v = 12 === h.status ? h.fatalError : d;
                        Lt(A, m, u.replay.nodes, u.replay.slots, v, c = pt(A, v, g)), h.pendingRootTasks--, 0 === h.pendingRootTasks && Mt(h), h.allPendingTasks--, 0 === h.allPendingTasks && Rt(h)
                      }
                    }
                  }
                } else if (h = void 0, 0 === (A = f).status) {
                  A.status = 6, an(u.context);
                  var b = A.children.length,
                    C = A.chunks.length;
                  try {
                    yt(c, u), Ye(A.chunks, c.renderState, A.lastPushedText, A.textEmbedded), u.abortSet.delete(u), A.status = 1, Nt(c, u.blockedBoundary, A)
                  } catch (e) {
                    jn(), A.children.length = b, A.chunks.length = C;
                    var y = e === dn ? An() : 12 === c.status ? c.fatalError : e;
                    if ("object" == typeof y && null !== y && "function" == typeof y.then) {
                      A.status = 0, u.thenableState = _n();
                      var k = u.ping;
                      y.then(k, k)
                    } else {
                      var w = dt(u.componentStack);
                      u.abortSet.delete(u), A.status = 4;
                      var E = u.blockedBoundary;
                      h = pt(c, y, w), null === E ? gt(c, y) : (E.pendingTasks--, 4 !== E.status && (E.status = 4, E.errorDigest = h, wt(c, E), E.parentFlushed && c.clientRenderedBoundaries.push(E))), c.allPendingTasks--, 0 === c.allPendingTasks && Rt(c)
                    }
                  }
                }
              }
              l.splice(0, s), null !== e.destination && Vt(e, e.destination)
            } catch (n) {
              pt(e, n, {}), gt(e, n)
            } finally {
              Xn = a, V.H = t, V.A = r, t === Yn && an(n), at = i
            }
          }
        }

        function _t(e, n, t, r) {
          switch (t.parentFlushed = !0, t.status) {
            case 0:
              t.id = e.nextSegmentId++;
            case 5:
              return r = t.id, t.lastPushedText = !1, t.textEmbedded = !1, e = e.renderState, n.push('<template id="'), n.push(e.placeholderPrefix), e = r.toString(16), n.push(e), n.push('"></template>');
            case 1:
              t.status = 2;
              var i = !0,
                a = t.chunks,
                s = 0;
              t = t.children;
              for (var l = 0; l < t.length; l++) {
                for (i = t[l]; s < i.index; s++) n.push(a[s]);
                i = jt(e, n, i, r)
              }
              for (; s < a.length - 1; s++) n.push(a[s]);
              return s < a.length && (i = n.push(a[s])), i;
            default:
              throw Error(o(390))
          }
        }

        function jt(e, n, t, r) {
          var i = t.boundary;
          if (null === i) return _t(e, n, t, r);
          if (i.parentFlushed = !0, 4 === i.status) return e.renderState.generateStaticMarkup || (i = i.errorDigest, n.push("\x3c!--$!--\x3e"), n.push("<template"), i && (n.push(' data-dgst="'), i = _(i), n.push(i), n.push('"')), n.push("></template>")), _t(e, n, t, r), !!e.renderState.generateStaticMarkup || n.push("\x3c!--/$--\x3e");
          if (1 !== i.status) return 0 === i.status && (i.rootSegmentID = e.nextSegmentId++), i.completedSegments.length > 0 && e.partialBoundaries.push(i), ye(n, e.renderState, i.rootSegmentID), r && ((i = i.fallbackState).styles.forEach($e, r), i.stylesheets.forEach(Ge, r)), _t(e, n, t, r), n.push("\x3c!--/$--\x3e");
          if (i.byteSize > e.progressiveChunkSize) return i.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(i), ye(n, e.renderState, i.rootSegmentID), _t(e, n, t, r), n.push("\x3c!--/$--\x3e");
          if (r && ((t = i.contentState).styles.forEach($e, r), t.stylesheets.forEach(Ge, r)), e.renderState.generateStaticMarkup || n.push("\x3c!--$--\x3e"), 1 !== (t = i.completedSegments).length) throw Error(o(391));
          return jt(e, n, t[0], r), !!e.renderState.generateStaticMarkup || n.push("\x3c!--/$--\x3e")
        }

        function Ot(e, n, t, r) {
          return function(e, n, t, r) {
              switch (t.insertionMode) {
                case 0:
                case 1:
                case 2:
                  return e.push('<div hidden id="'), e.push(n.segmentPrefix), n = r.toString(16), e.push(n), e.push('">');
                case 3:
                  return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = r.toString(16), e.push(n), e.push('">');
                case 4:
                  return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = r.toString(16), e.push(n), e.push('">');
                case 5:
                  return e.push('<table hidden id="'), e.push(n.segmentPrefix), n = r.toString(16), e.push(n), e.push('">');
                case 6:
                  return e.push('<table hidden><tbody id="'), e.push(n.segmentPrefix), n = r.toString(16), e.push(n), e.push('">');
                case 7:
                  return e.push('<table hidden><tr id="'), e.push(n.segmentPrefix), n = r.toString(16), e.push(n), e.push('">');
                case 8:
                  return e.push('<table hidden><colgroup id="'), e.push(n.segmentPrefix), n = r.toString(16), e.push(n), e.push('">');
                default:
                  throw Error(o(397))
              }
            }(n, e.renderState, t.parentFormatContext, t.id), jt(e, n, t, r),
            function(e, n) {
              switch (n.insertionMode) {
                case 0:
                case 1:
                case 2:
                  return e.push("</div>");
                case 3:
                  return e.push("</svg>");
                case 4:
                  return e.push("</math>");
                case 5:
                  return e.push("</table>");
                case 6:
                  return e.push("</tbody></table>");
                case 7:
                  return e.push("</tr></table>");
                case 8:
                  return e.push("</colgroup></table>");
                default:
                  throw Error(o(397))
              }
            }(n, t.parentFormatContext)
        }

        function Pt(e, n, t) {
          for (var r = t.completedSegments, i = 0; i < r.length; i++) Dt(e, n, t, r[i]);
          r.length = 0, Te(n, t.contentState, e.renderState), r = e.resumableState, e = e.renderState, i = t.rootSegmentID, t = t.contentState;
          var a = e.stylesToHoist;
          return e.stylesToHoist = !1, n.push(e.startInlineScript), a ? 2 & r.instructions ? 8 & r.instructions ? n.push('$RR("') : (r.instructions |= 8, n.push('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("')) : (r.instructions |= 10, n.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("')) : 2 & r.instructions ? n.push('$RC("') : (r.instructions |= 2, n.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("')), r = i.toString(16), n.push(e.boundaryPrefix), n.push(r), n.push('","'), n.push(e.segmentPrefix), n.push(r), a ? (n.push('",'), function(e, n) {
            e.push("[");
            var t = "[";
            n.stylesheets.forEach(function(n) {
              if (2 !== n.state)
                if (3 === n.state) e.push(t), n = Be("" + n.props.href), e.push(n), e.push("]"), t = ",[";
                else {
                  e.push(t);
                  var r = n.props["data-precedence"],
                    i = n.props,
                    a = D("" + n.props.href);
                  for (var s in a = Be(a), e.push(a), r = "" + r, e.push(","), r = Be(r), e.push(r), i)
                    if (L.call(i, s) && null != (r = i[s])) switch (s) {
                      case "href":
                      case "rel":
                      case "precedence":
                      case "data-precedence":
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(399, "link"));
                      default:
                        je(e, s, r)
                    }
                  e.push("]"), t = ",[", n.state = 3
                }
            }), e.push("]")
          }(n, t)) : n.push('"'), t = n.push(")<\/script>"), Ce(n, e) && t
        }

        function Dt(e, n, t, r) {
          if (2 === r.status) return !0;
          var i = t.contentState,
            a = r.id;
          if (-1 === a) {
            if (-1 === (r.id = t.rootSegmentID)) throw Error(o(392));
            return Ot(e, n, r, i)
          }
          return a === t.rootSegmentID ? Ot(e, n, r, i) : (Ot(e, n, r, i), t = e.resumableState, e = e.renderState, n.push(e.startInlineScript), 1 & t.instructions ? n.push('$RS("') : (t.instructions |= 1, n.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), a = a.toString(16), n.push(a), n.push('","'), n.push(e.placeholderPrefix), n.push(a), n = n.push('")<\/script>'))
        }

        function Vt(e, n) {
          try {
            if (0 >= e.pendingRootTasks) {
              var t, r = e.completedRootSegment;
              if (null !== r) {
                if (5 === r.status) return;
                var i, o = e.renderState,
                  a = o.htmlChunks,
                  s = o.headChunks;
                if (a) {
                  for (i = 0; i < a.length; i++) n.push(a[i]);
                  if (s)
                    for (i = 0; i < s.length; i++) n.push(s[i]);
                  else {
                    var l = me("head");
                    n.push(l), n.push(">")
                  }
                } else if (s)
                  for (i = 0; i < s.length; i++) n.push(s[i]);
                var u = o.charsetChunks;
                for (i = 0; i < u.length; i++) n.push(u[i]);
                u.length = 0, o.preconnects.forEach(Me, n), o.preconnects.clear();
                var c = o.viewportChunks;
                for (i = 0; i < c.length; i++) n.push(c[i]);
                c.length = 0, o.fontPreloads.forEach(Me, n), o.fontPreloads.clear(), o.highImagePreloads.forEach(Me, n), o.highImagePreloads.clear(), o.styles.forEach(Ne, n);
                var f = o.importMapChunks;
                for (i = 0; i < f.length; i++) n.push(f[i]);
                f.length = 0, o.bootstrapScripts.forEach(Me, n), o.scripts.forEach(Me, n), o.scripts.clear(), o.bulkPreloads.forEach(Me, n), o.bulkPreloads.clear();
                var h = o.hoistableChunks;
                for (i = 0; i < h.length; i++) n.push(h[i]);
                if (h.length = 0, a && null === s) {
                  var d = be("head");
                  n.push(d)
                }
                jt(e, n, r, null), e.completedRootSegment = null, Ce(n, e.renderState)
              }
              var p = e.renderState;
              r = 0;
              var g = p.viewportChunks;
              for (r = 0; r < g.length; r++) n.push(g[r]);
              g.length = 0, p.preconnects.forEach(Me, n), p.preconnects.clear(), p.fontPreloads.forEach(Me, n), p.fontPreloads.clear(), p.highImagePreloads.forEach(Me, n), p.highImagePreloads.clear(), p.styles.forEach(_e, n), p.scripts.forEach(Me, n), p.scripts.clear(), p.bulkPreloads.forEach(Me, n), p.bulkPreloads.clear();
              var A = p.hoistableChunks;
              for (r = 0; r < A.length; r++) n.push(A[r]);
              A.length = 0;
              var m = e.clientRenderedBoundaries;
              for (t = 0; t < m.length; t++) {
                var v = m[t];
                p = n;
                var b = e.resumableState,
                  C = e.renderState,
                  y = v.rootSegmentID,
                  k = v.errorDigest;
                p.push(C.startInlineScript), 4 & b.instructions ? p.push('$RX("') : (b.instructions |= 4, p.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')), p.push(C.boundaryPrefix);
                var w = y.toString(16);
                if (p.push(w), p.push('"'), k) {
                  p.push(",");
                  var E = we(k || "");
                  p.push(E)
                }
                var B = p.push(")<\/script>");
                if (!B) return e.destination = null, t++, void m.splice(0, t)
              }
              m.splice(0, t);
              var x = e.completedBoundaries;
              for (t = 0; t < x.length; t++)
                if (!Pt(e, n, x[t])) return e.destination = null, t++, void x.splice(0, t);
              x.splice(0, t);
              var S = e.partialBoundaries;
              for (t = 0; t < S.length; t++) {
                var L = S[t];
                e: {
                  m = e,
                  v = n;
                  var F = L.completedSegments;
                  for (B = 0; B < F.length; B++)
                    if (!Dt(m, v, L, F[B])) {
                      B++, F.splice(0, B);
                      var T = !1;
                      break e
                    } F.splice(0, B),
                  T = Te(v, L.contentState, m.renderState)
                }
                if (!T) return e.destination = null, t++, void S.splice(0, t)
              }
              S.splice(0, t);
              var M = e.completedBoundaries;
              for (t = 0; t < M.length; t++)
                if (!Pt(e, n, M[t])) return e.destination = null, t++, void M.splice(0, t);
              M.splice(0, t)
            }
          } finally {
            0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && (e.flushScheduled = !1, (t = e.resumableState).hasBody && (S = be("body"), n.push(S)), t.hasHtml && (t = be("html"), n.push(t)), e.status = 14, n.push(null), e.destination = null)
          }
        }

        function Wt(e) {
          if (!1 === e.flushScheduled && 0 === e.pingedTasks.length && null !== e.destination) {
            e.flushScheduled = !0;
            var n = e.destination;
            n ? Vt(e, n) : e.flushScheduled = !1
          }
        }

        function Zt(e, n) {
          (11 === e.status || 10 === e.status) && (e.status = 12);
          try {
            var t = e.abortableTasks;
            if (t.size > 0) {
              var r = void 0 === n ? Error(o(432)) : "object" == typeof n && null !== n && "function" == typeof n.then ? Error(o(530)) : n;
              e.fatalError = r, t.forEach(function(n) {
                return Ft(n, e, r)
              }), t.clear()
            }
            null !== e.destination && Vt(e, e.destination)
          } catch (n) {
            pt(e, n, {}), gt(e, n)
          }
        }

        function Ut() {}

        function $t(e, n, t, r) {
          var i = !1,
            a = null,
            s = "",
            l = !1;
          if (n = function(e) {
              return {
                idPrefix: void 0 === e ? "" : e,
                nextFormID: 0,
                streamingFormat: 0,
                bootstrapScriptContent: void 0,
                bootstrapScripts: void 0,
                bootstrapModules: void 0,
                instructions: 0,
                hasBody: !1,
                hasHtml: !1,
                unknownResources: {},
                dnsResources: {},
                connectResources: {
                  default: {},
                  anonymous: {},
                  credentials: {}
                },
                imageResources: {},
                styleResources: {},
                scriptResources: {},
                moduleUnknownResources: {},
                moduleScriptResources: {}
              }
            }(n ? n.identifierPrefix : void 0), e = function(e, n, t, r, i, o, a, s) {
              return (t = ft(n = new ot(n, t, r, 1 / 0, o, void 0, s, void 0, void 0, void 0, void 0), 0, null, r, !1, !1)).parentFlushed = !0, ht(e = ut(n, null, e, -1, null, t, null, n.abortableTasks, null, r, null, ln, null, !1)), n.pingedTasks.push(e), n
            }(e, n, function(e, n) {
              var t = e.idPrefix,
                r = [],
                i = e.bootstrapScriptContent,
                o = e.bootstrapScripts,
                a = e.bootstrapModules;
              void 0 !== i && r.push("<script>", ("" + i).replace(G, z), "<\/script>"), i = t + "P:";
              var s = t + "S:";
              t += "B:";
              var l = new Set,
                u = new Set,
                c = new Set,
                f = new Map,
                h = new Set,
                d = new Set,
                p = new Set,
                g = {
                  images: new Map,
                  stylesheets: new Map,
                  scripts: new Map,
                  moduleScripts: new Map
                };
              if (void 0 !== o)
                for (var A = 0; A < o.length; A++) {
                  var m, v = o[A],
                    b = void 0,
                    C = void 0,
                    y = {
                      rel: "preload",
                      as: "script",
                      fetchPriority: "low",
                      nonce: void 0
                    };
                  "string" == typeof v ? y.href = m = v : (y.href = m = v.src, y.integrity = C = "string" == typeof v.integrity ? v.integrity : void 0, y.crossOrigin = b = "string" == typeof v || null == v.crossOrigin ? void 0 : "use-credentials" === v.crossOrigin ? "use-credentials" : "");
                  var k = m;
                  (v = e).scriptResources[k] = null, v.moduleScriptResources[k] = null, le(v = [], y), h.add(v), r.push('<script src="', _(m)), "string" == typeof C && r.push('" integrity="', _(C)), "string" == typeof b && r.push('" crossorigin="', _(b)), r.push('" async=""><\/script>')
                }
              if (void 0 !== a)
                for (o = 0; o < a.length; o++) b = m = void 0, C = {
                  rel: "modulepreload",
                  fetchPriority: "low",
                  nonce: void 0
                }, "string" == typeof(y = a[o]) ? C.href = A = y : (C.href = A = y.src, C.integrity = b = "string" == typeof y.integrity ? y.integrity : void 0, C.crossOrigin = m = "string" == typeof y || null == y.crossOrigin ? void 0 : "use-credentials" === y.crossOrigin ? "use-credentials" : ""), v = A, (y = e).scriptResources[v] = null, y.moduleScriptResources[v] = null, le(y = [], C), h.add(y), r.push('<script type="module" src="', _(A)), "string" == typeof b && r.push('" integrity="', _(b)), "string" == typeof m && r.push('" crossorigin="', _(m)), r.push('" async=""><\/script>');
              return {
                placeholderPrefix: i,
                segmentPrefix: s,
                boundaryPrefix: t,
                startInlineScript: "<script>",
                htmlChunks: null,
                headChunks: null,
                externalRuntimeScript: null,
                bootstrapChunks: r,
                importMapChunks: [],
                onHeaders: void 0,
                headers: null,
                resets: {
                  font: {},
                  dns: {},
                  connect: {
                    default: {},
                    anonymous: {},
                    credentials: {}
                  },
                  image: {},
                  style: {}
                },
                charsetChunks: [],
                viewportChunks: [],
                hoistableChunks: [],
                preconnects: l,
                fontPreloads: u,
                highImagePreloads: c,
                styles: f,
                bootstrapScripts: h,
                scripts: d,
                bulkPreloads: p,
                preloads: g,
                stylesToHoist: !1,
                generateStaticMarkup: n
              }
            }(n, t), Y(0, null, 0), 0, Ut, 0, function() {
              l = !0
            }), e.flushScheduled = null !== e.destination, It(e), 10 === e.status && (e.status = 11), null === e.trackedPostpones && Tt(e, 0 === e.pendingRootTasks), Zt(e, r), function(e, n) {
              if (13 === e.status) e.status = 14, n.destroy(e.fatalError);
              else if (14 !== e.status && null === e.destination) {
                e.destination = n;
                try {
                  Vt(e, n)
                } catch (n) {
                  pt(e, n, {}), gt(e, n)
                }
              }
            }(e, {
              push: function(e) {
                return null !== e && (s += e), !0
              },
              destroy: function(e) {
                i = !0, a = e
              }
            }), i && a !== r) throw a;
          if (!l) throw Error(o(426));
          return s
        }
        n.renderToStaticMarkup = function(e, n) {
          return $t(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
        }, n.renderToString = function(e, n) {
          return $t(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
        }, n.version = "19.0.0"
      },
      90251: function(e, n, t) {
        var r, i;
        r = function(e) {
          "use strict";
          var n, t, r = {
              template: "[%t] %l:",
              levelFormatter: function(e) {
                return e.toUpperCase()
              },
              nameFormatter: function(e) {
                return e || "root"
              },
              timestampFormatter: function(e) {
                return e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
              },
              format: void 0
            },
            i = {},
            o = {
              reg: function(e) {
                if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger");
                n = e
              },
              apply: function(e, t) {
                if (!e || !e.setLevel) throw new TypeError("Argument is not a logger");
                var o = e.methodFactory,
                  a = e.name || "",
                  s = i[a] || i[""] || r;
                return i[a] || (e.methodFactory = function(e, n, t) {
                  var r = o(e, n, t),
                    s = i[t] || i[""],
                    l = -1 !== s.template.indexOf("%t"),
                    u = -1 !== s.template.indexOf("%l"),
                    c = -1 !== s.template.indexOf("%n");
                  return function() {
                    for (var n = "", o = arguments.length, f = Array(o), h = 0; o > h; h++) f[h] = arguments[h];
                    if (a || !i[t]) {
                      var d = s.timestampFormatter(new Date),
                        p = s.levelFormatter(e),
                        g = s.nameFormatter(t);
                      s.format ? n += s.format(p, g, d) : (n += s.template, l && (n = n.replace(/%t/, d)), u && (n = n.replace(/%l/, p)), c && (n = n.replace(/%n/, g))), f.length && "string" == typeof f[0] ? f[0] = n + " " + f[0] : f.unshift(n)
                    }
                    r.apply(void 0, f)
                  }
                }), (t = t || {}).template && (t.format = void 0), i[a] = function(e) {
                  for (var n, t = 1, r = arguments.length; r > t; t++)
                    for (n in arguments[t])({}).hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                  return e
                }({}, s, t), e.setLevel(e.getLevel()), n || e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), e
              }
            };
          return e && (t = e.prefix, o.noConflict = function() {
            return e.prefix === o && (e.prefix = t), o
          }), o
        }, void 0 !== (i = r(t)) && (e.exports = i)
      },
      92055: (e, n, t) => {
        "use strict";
        t.d(n, {
          A: () => s
        });
        var r = t(71354),
          i = t.n(r),
          o = t(76314),
          a = t.n(o)()(i());
        a.push([e.id, "/* Token Scanner Styles */\n\n/* Skeleton loader styles */\n\n.skeleton {\n  --start-color: rgba(156, 163, 175, 0.15);\n  --end-color: rgba(156, 163, 175, 0.05);\n\n  background-image: linear-gradient(\n    270deg,\n    rgba(156, 163, 175, 0.15),\n    rgba(156, 163, 175, 0.05),\n    rgba(156, 163, 175, 0.05),\n    rgba(156, 163, 175, 0.15)\n  );\n\n  background-image: linear-gradient(\n    270deg,\n    var(--start-color),\n    var(--end-color),\n    var(--end-color),\n    var(--start-color)\n  );\n  background-size: 400% 100%;\n  animation: skeleton-bg-position 3s ease-in-out infinite;\n  border-radius: 6px;\n  cursor: default;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n@keyframes skeleton-bg-position {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n/* Badge chip - CSS variables for theming */\n\n.trust-token-highlight {\n  --badge-bg: rgba(72, 255, 145, 0.16);\n  --badge-bg-hover: rgba(72, 255, 145, 0.24);\n  --badge-token-name: #48ff91;\n  --badge-token-price: #91ffbd;\n  --badge-blockchain-border: #121513;\n\n  background: rgba(72, 255, 145, 0.16) !important;\n\n  background: var(--badge-bg) !important;\n  border-radius: 10000px !important;\n  padding: 2px 5px 2px 4px !important;\n  cursor: pointer !important;\n  transition: all 0.2s ease !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  margin: 0 2px !important;\n  -webkit-text-decoration: none !important;\n  text-decoration: none !important;\n  position: relative !important;\n  vertical-align: middle !important;\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif !important;\n  font-size: 12px !important;\n  font-style: normal !important;\n  font-weight: 600 !important;\n  line-height: 18px !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.trust-token-highlight:hover {\n  background: var(--badge-bg-hover) !important;\n  transform: scale(1.02) !important;\n}\n\n/* Light theme for badge - Twitter/X light theme detection */\n\nbody[style*='background-color: rgb(255, 255, 255)'] .trust-token-highlight,\nbody[style*='background-color: rgb(242, 242, 242)'] .trust-token-highlight {\n  --badge-bg: rgba(5, 0, 255, 0.16);\n  --badge-bg-hover: rgba(5, 0, 255, 0.16);\n  --badge-token-name: #0500ff;\n  --badge-token-price: #524fff;\n  --badge-blockchain-border: #ffffff;\n}\n\n/* Logo container with badge overlay */\n\n.trust-token-logo-container {\n  position: relative !important;\n  width: 20px !important;\n  height: 20px !important;\n  flex-shrink: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n/* Main token logo */\n\n.trust-token-main-logo {\n  width: 16px !important;\n  height: 16px !important;\n  border-radius: 50% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  display: block !important;\n}\n\n/* Blockchain badge (small overlay logo) */\n\n.trust-token-blockchain-logo {\n  position: absolute !important;\n  bottom: 0.5px !important;\n  right: 0.5px !important;\n  width: 6px !important;\n  height: 6px !important;\n  border-radius: 50% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  background-color: var(--badge-blockchain-border) !important;\n  border: 0.4px solid var(--badge-blockchain-border) !important;\n  display: block !important;\n}\n\n.trust-token-name {\n  margin-left: 4px !important;\n  color: var(--badge-token-name) !important;\n}\n\n.trust-token-price-text {\n  color: var(--badge-token-price) !important;\n}\n\n.trust-token-name,\n.trust-token-price-text {\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif !important;\n  font-size: 12px !important;\n  font-style: normal !important;\n  font-weight: 600 !important;\n  line-height: 18px !important;\n}\n\n/* CSS Variables for theming - Dark theme (default) */\n\n.trust-token-popup-container {\n  --popup-bg: #121513;\n  --popup-text: #ffffff;\n  --popup-text-secondary: #9ca3af;\n  --popup-text-error: #eaecef;\n  --popup-card-bg: #2b2b2e;\n  --popup-hover-row: rgba(255, 255, 255, 0.08);\n  --popup-recent-badge-bg: rgba(255, 255, 255, 0.12);\n  --popup-button-bg: rgba(72, 255, 145, 0.16);\n  --popup-button-hover-bg: #3a6d50;\n  --popup-swap-button-hover: #3dd98c;\n  --popup-primary: #48ff91;\n  --button-primary: #1b1b1c;\n  --popup-price-positive: #23be7d;\n  --popup-price-negative: #ff4848;\n  --popup-powered-text: rgba(234, 236, 239, 0.6);\n  --popup-shadow: rgba(0, 0, 0, 0.5);\n}\n\n/* Light theme - Twitter/X light theme detection */\n\nbody[style*='background-color: rgb(255, 255, 255)'] .trust-token-popup-container,\nbody[style*='background-color: rgb(242, 242, 242)'] .trust-token-popup-container {\n  --popup-bg: #ffffff;\n  --popup-text: #252525;\n  --popup-text-error: #252525;\n  --popup-text-secondary: rgba(37, 37, 37, 0.72);\n  --popup-card-bg: #f0f0f2;\n  --popup-button-bg: rgba(5, 0, 255, 0.12);\n  --popup-button-hover-bg: rgba(5, 0, 255, 0.2);\n  --popup-swap-button-hover: #0400cc;\n  --popup-hover-row: rgba(0, 0, 0, 0.06);\n  --popup-recent-badge-bg: rgba(0, 0, 0, 0.08);\n  --popup-primary: #0500ff;\n  --popup-price-positive: #0aa838;\n  --button-primary: #fff;\n  --popup-price-negative: #ff4848;\n  --popup-powered-text: rgba(107, 114, 128, 0.6);\n  --popup-shadow: rgba(0, 0, 0, 0.15);\n}\n\n.trust-token-popup {\n  position: absolute;\n  z-index: 10000;\n  pointer-events: auto;\n  animation: trust-token-popup-fade-in 0.2s ease-out;\n}\n\n.trust-token-popup-container {\n  background: var(--popup-bg);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px var(--popup-shadow);\n  padding: 16px;\n  width: 300px;\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif;\n  color: var(--popup-text);\n  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.trust-token-popup-container.trust-token-list-view {\n  width: 600px;\n  padding: 16px 8px;\n}\n\n/* Header */\n\n.trust-token-popup-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.trust-token-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.trust-token-popup-logo-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.trust-token-popup-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-popup-chain-badge {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--popup-bg);\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-header-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.trust-token-popup-symbol {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--popup-text);\n  line-height: 24px;\n}\n\n.trust-token-popup-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  line-height: 18px;\n}\n\n.trust-token-swap-button {\n  background: var(--popup-primary);\n  color: var(--button-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n  transition:\n    background 0.2s ease, opacity 0.2s ease;\n}\n\n.trust-token-swap-button:hover:not(:disabled) {\n  background: var(--popup-swap-button-hover);\n}\n\n.trust-token-swap-button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n/* Price Card */\n\n.trust-token-price-card {\n  background: var(--popup-card-bg);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 8px;\n}\n\n.trust-token-price-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  margin-bottom: 8px;\n}\n\n.trust-token-price-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.trust-token-price-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--popup-primary);\n  line-height: 25px;\n}\n\n.trust-token-price-change {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 12px;\n}\n\n.trust-token-price-change svg {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.trust-token-price-change.positive {\n  color: var(--popup-price-positive);\n}\n\n.trust-token-price-change.negative {\n  color: var(--popup-price-negative);\n}\n\n/* Stats Row */\n\n.trust-token-stats-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 8px;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.trust-token-stat-card {\n  background: var(--popup-card-bg);\n  border-radius: 12px;\n  padding: 16px;\n}\n\n.trust-token-stat-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--popup-text-secondary);\n  margin-bottom: 8px;\n}\n\n.trust-token-stat-value {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 700;\n  color: var(--popup-text);\n}\n\n/* Similar Tokens Button */\n\n.trust-token-similar-button {\n  width: 100%;\n  background: var(--popup-button-bg);\n  color: var(--popup-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  white-space: nowrap;\n  transition: background 0.2s ease;\n  line-height: 21px;\n  margin-bottom: 12px;\n}\n\n.trust-token-similar-button:hover {\n  background: var(--popup-button-hover-bg);\n}\n\n.trust-token-similar-button svg {\n  flex-shrink: 0;\n}\n\n/* Similar Tokens List View */\n\n.trust-token-list-header {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;\n  grid-gap: 12px;\n  gap: 12px;\n  padding: 12px 8px;\n}\n\n.trust-token-list-header-col {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--popup-text-secondary);\n  letter-spacing: 0.5px;\n  list-style: 21px;\n  gap: 12px;\n  text-align: left;\n}\n\n/* Scrollable container */\n\n.trust-token-list-scroll {\n  height: 380px;\n  min-height: 380px;\n  max-height: 380px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 16px;\n  padding-right: 4px;\n  overscroll-behavior: contain;\n}\n\n/* Scrollbar styling */\n\n.trust-token-list-scroll::-webkit-scrollbar {\n  width: 6px;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-thumb {\n  background: var(--popup-text-secondary);\n  border-radius: 3px;\n  opacity: 0.4;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-thumb:hover {\n  background: var(--popup-text);\n}\n\n/* List row */\n\n.trust-token-list-row {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;\n  grid-gap: 12px;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: 12px;\n  transition: background 0.2s ease;\n  cursor: pointer;\n}\n\n.trust-token-list-row:hover {\n  background: var(--popup-hover-row);\n}\n\n.trust-token-list-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.trust-token-list-col-numeric {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--popup-text);\n  line-height: 24px;\n}\n\n.trust-token-list-col:first-child {\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 12px;\n}\n\n.trust-token-list-logo-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.trust-token-list-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-list-chain-badge {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--popup-bg);\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-list-name-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.trust-token-list-symbol-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.trust-token-list-symbol {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--popup-text);\n  line-height: 20px;\n}\n\n.trust-token-list-recent-badge {\n  background: var(--popup-recent-badge-bg);\n  color: var(--popup-text-secondary);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 0px 8px;\n  border-radius: 40px;\n  line-height: 15px;\n}\n\n.trust-token-list-chain {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  line-height: 16px;\n}\n\n.trust-token-list-change {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 16px;\n}\n\n.trust-token-list-change.positive {\n  color: var(--popup-price-positive);\n}\n\n.trust-token-list-change.negative {\n  color: var(--popup-price-negative);\n}\n\n/* Footer */\n\n.trust-token-popup-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Add horizontal padding in list view to align with Name column */\n\n.trust-token-list-view .trust-token-popup-footer {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.trust-token-powered {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--popup-powered-text);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.trust-token-powered-brand {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-weight: 600;\n  color: var(--popup-text);\n}\n\n.trust-token-dismiss {\n  background: transparent;\n  border: none;\n  color: var(--popup-powered-text);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.trust-token-dismiss:hover {\n  background: var(--popup-card-bg);\n  color: var(--popup-text);\n}\n\n/* Menu button */\n\n.trust-token-menu-button {\n  background: transparent;\n  border: none;\n  color: var(--popup-powered-text);\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: background 0.2s ease;\n}\n\n.trust-token-menu-button:hover {\n  background: var(--popup-card-bg);\n}\n\n/* Overlay to darken the popup - only darkens content, not the footer */\n\n.trust-token-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 44px; /* Leave space for footer (adjust based on footer height) */\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 16px 16px 0 0;\n  z-index: 1;\n  pointer-events: auto;\n}\n\n/* Mini menu popup */\n\n.trust-token-menu-popup {\n  position: absolute;\n  bottom: 50px; /* Increased from 20px to 40px (20px higher) */\n  right: 20px;\n  background: var(--popup-bg);\n  border-radius: 12px;\n  box-shadow: 0 4px 16px var(--popup-shadow);\n  padding: 8px;\n  z-index: 2;\n  min-width: 280px;\n  animation: trust-token-menu-fade-in 0.15s ease-out;\n}\n\n.trust-token-menu-item {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  gap: 12px;\n}\n\n.trust-token-menu-item-text {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--popup-text);\n  text-align: left;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 0;\n}\n\n/* Custom toggle switch */\n\n.trust-token-toggle {\n  width: 44px;\n  height: 24px;\n  background: rgba(156, 163, 175, 0.3);\n  border-radius: 12px;\n  position: relative;\n  transition: background 0.2s ease;\n  flex-shrink: 0;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.trust-token-toggle:hover {\n  opacity: 0.8;\n}\n\n.trust-token-toggle.enabled {\n  background: var(--popup-primary);\n}\n\n.trust-token-toggle-thumb {\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.trust-token-toggle.enabled .trust-token-toggle-thumb {\n  transform: translateX(20px);\n}\n\n/* Error state */\n\n.trust-token-error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 20px;\n  text-align: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.trust-token-error-illustration {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.trust-token-error-illustration svg {\n  width: 100%;\n  height: 100%;\n}\n\n.trust-token-error-message {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--popup-text-error);\n  line-height: 30px;\n}\n\n.trust-token-retry-button {\n  background: var(--popup-primary);\n  color: var(--button-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 12px 16px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.trust-token-retry-button:hover {\n  opacity: 0.9;\n}\n\n/* Animations */\n\n@keyframes trust-token-popup-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-8px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes trust-token-menu-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n", "", {
          version: 3,
          sources: ["webpack://./app/src/tokenScanner/style.css"],
          names: [],
          mappings: "AAAA,yBAAyB;;AAEzB,2BAA2B;;AAC3B;EACE,wCAAwC;EACxC,sCAAsC;;EAEtC;;;;;;GAMC;;EAND;;;;;;GAMC;EACD,0BAA0B;EAC1B,uDAAuD;EACvD,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;AACnB;;AAEA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,4BAA4B;EAC9B;AACF;;AAEA,2CAA2C;;AAC3C;EACE,oCAAoC;EACpC,0CAA0C;EAC1C,2BAA2B;EAC3B,4BAA4B;EAC5B,kCAAkC;;EAElC,+CAAsC;;EAAtC,sCAAsC;EACtC,iCAAiC;EACjC,mCAAmC;EACnC,0BAA0B;EAC1B,oCAAoC;EACpC,+BAA+B;EAC/B,8BAA8B;EAC9B,wBAAwB;EACxB,wCAAgC;EAAhC,gCAAgC;EAChC,6BAA6B;EAC7B,iCAAiC;EACjC;;;;;yBAKuB;EACvB,0BAA0B;EAC1B,6BAA6B;EAC7B,2BAA2B;EAC3B,4BAA4B;EAC5B,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,4CAA4C;EAC5C,iCAAiC;AACnC;;AAEA,4DAA4D;;AAC5D;;EAEE,iCAAiC;EACjC,uCAAuC;EACvC,2BAA2B;EAC3B,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA,sCAAsC;;AACtC;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,uBAAuB;EACvB,yBAAyB;EACzB,wBAAwB;EACxB,8BAA8B;EAC9B,kCAAkC;AACpC;;AAEA,oBAAoB;;AACpB;EACE,sBAAsB;EACtB,uBAAuB;EACvB,6BAA6B;EAC7B,+BAA4B;KAA5B,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA,0CAA0C;;AAC1C;EACE,6BAA6B;EAC7B,wBAAwB;EACxB,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;EACtB,6BAA6B;EAC7B,+BAA4B;KAA5B,4BAA4B;EAC5B,2DAA2D;EAC3D,6DAA6D;EAC7D,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;;EAEE;;;;;yBAKuB;EACvB,0BAA0B;EAC1B,6BAA6B;EAC7B,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA,qDAAqD;;AACrD;EACE,mBAAmB;EACnB,qBAAqB;EACrB,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;EACxB,4CAA4C;EAC5C,kDAAkD;EAClD,2CAA2C;EAC3C,gCAAgC;EAChC,kCAAkC;EAClC,wBAAwB;EACxB,yBAAyB;EACzB,+BAA+B;EAC/B,+BAA+B;EAC/B,8CAA8C;EAC9C,kCAAkC;AACpC;;AAEA,kDAAkD;;AAClD;;EAEE,mBAAmB;EACnB,qBAAqB;EACrB,2BAA2B;EAC3B,8CAA8C;EAC9C,wBAAwB;EACxB,wCAAwC;EACxC,6CAA6C;EAC7C,kCAAkC;EAClC,sCAAsC;EACtC,4CAA4C;EAC5C,wBAAwB;EACxB,+BAA+B;EAC/B,sBAAsB;EACtB,+BAA+B;EAC/B,8CAA8C;EAC9C,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,oBAAoB;EACpB,kDAAkD;AACpD;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ;;;;;cAKY;EACZ,wBAAwB;EACxB,mDAAmD;AACrD;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA,WAAW;;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oBAAiB;KAAjB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,oBAAiB;KAAjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;EAChC,4BAA4B;EAC5B,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,mBAAmB;EACnB;2CAEmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA,eAAe;;AACf;EACE,gCAAgC;EAChC,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA,cAAc;;AACd;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAQ;EAAR,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA,0BAA0B;;AAC1B;EACE,WAAW;EACX,kCAAkC;EAClC,2BAA2B;EAC3B,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,mBAAmB;EACnB,gCAAgC;EAChC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,cAAc;AAChB;;AAEA,6BAA6B;;AAC7B;EACE,aAAa;EACb,4CAA4C;EAC5C,cAAS;EAAT,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kCAAkC;EAClC,qBAAqB;EACrB,gBAAgB;EAChB,SAAS;EACT,gBAAgB;AAClB;;AAEA,yBAAyB;;AACzB;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA,sBAAsB;;AACtB;EACE,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,aAAa;;AACb;EACE,aAAa;EACb,4CAA4C;EAC5C,cAAS;EAAT,SAAS;EACT,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oBAAiB;KAAjB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,oBAAiB;KAAjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;EACxC,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA,WAAW;;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA,kEAAkE;;AAClE;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,wBAAwB;AAC1B;;AAEA,gBAAgB;;AAChB;EACE,uBAAuB;EACvB,YAAY;EACZ,gCAAgC;EAChC,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA,uEAAuE;;AACvE;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY,EAAE,2DAA2D;EACzE,8BAA8B;EAC9B,4BAA4B;EAC5B,UAAU;EACV,oBAAoB;AACtB;;AAEA,oBAAoB;;AACpB;EACE,kBAAkB;EAClB,YAAY,EAAE,8CAA8C;EAC5D,WAAW;EACX,2BAA2B;EAC3B,mBAAmB;EACnB,0CAA0C;EAC1C,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,gBAAgB;EAChB,OAAO;EACP,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA,yBAAyB;;AACzB;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;EAClB,gCAAgC;EAChC,cAAc;EACd,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,wCAAwC;AAC1C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,gBAAgB;;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;EAChC,4BAA4B;EAC5B,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA,eAAe;;AACf;EACE;IACE,UAAU;IACV,uCAAuC;EACzC;EACA;IACE,UAAU;IACV,iCAAiC;EACnC;AACF;;AAEA;EACE;IACE,UAAU;IACV,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF",
          sourcesContent: ["/* Token Scanner Styles */\n\n/* Skeleton loader styles */\n.skeleton {\n  --start-color: rgba(156, 163, 175, 0.15);\n  --end-color: rgba(156, 163, 175, 0.05);\n\n  background-image: linear-gradient(\n    270deg,\n    var(--start-color),\n    var(--end-color),\n    var(--end-color),\n    var(--start-color)\n  );\n  background-size: 400% 100%;\n  animation: skeleton-bg-position 3s ease-in-out infinite;\n  border-radius: 6px;\n  cursor: default;\n  pointer-events: none;\n  user-select: none;\n}\n\n@keyframes skeleton-bg-position {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n/* Badge chip - CSS variables for theming */\n.trust-token-highlight {\n  --badge-bg: rgba(72, 255, 145, 0.16);\n  --badge-bg-hover: rgba(72, 255, 145, 0.24);\n  --badge-token-name: #48ff91;\n  --badge-token-price: #91ffbd;\n  --badge-blockchain-border: #121513;\n\n  background: var(--badge-bg) !important;\n  border-radius: 10000px !important;\n  padding: 2px 5px 2px 4px !important;\n  cursor: pointer !important;\n  transition: all 0.2s ease !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  margin: 0 2px !important;\n  text-decoration: none !important;\n  position: relative !important;\n  vertical-align: middle !important;\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif !important;\n  font-size: 12px !important;\n  font-style: normal !important;\n  font-weight: 600 !important;\n  line-height: 18px !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.trust-token-highlight:hover {\n  background: var(--badge-bg-hover) !important;\n  transform: scale(1.02) !important;\n}\n\n/* Light theme for badge - Twitter/X light theme detection */\nbody[style*='background-color: rgb(255, 255, 255)'] .trust-token-highlight,\nbody[style*='background-color: rgb(242, 242, 242)'] .trust-token-highlight {\n  --badge-bg: rgba(5, 0, 255, 0.16);\n  --badge-bg-hover: rgba(5, 0, 255, 0.16);\n  --badge-token-name: #0500ff;\n  --badge-token-price: #524fff;\n  --badge-blockchain-border: #ffffff;\n}\n\n/* Logo container with badge overlay */\n.trust-token-logo-container {\n  position: relative !important;\n  width: 20px !important;\n  height: 20px !important;\n  flex-shrink: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n/* Main token logo */\n.trust-token-main-logo {\n  width: 16px !important;\n  height: 16px !important;\n  border-radius: 50% !important;\n  object-fit: cover !important;\n  display: block !important;\n}\n\n/* Blockchain badge (small overlay logo) */\n.trust-token-blockchain-logo {\n  position: absolute !important;\n  bottom: 0.5px !important;\n  right: 0.5px !important;\n  width: 6px !important;\n  height: 6px !important;\n  border-radius: 50% !important;\n  object-fit: cover !important;\n  background-color: var(--badge-blockchain-border) !important;\n  border: 0.4px solid var(--badge-blockchain-border) !important;\n  display: block !important;\n}\n\n.trust-token-name {\n  margin-left: 4px !important;\n  color: var(--badge-token-name) !important;\n}\n\n.trust-token-price-text {\n  color: var(--badge-token-price) !important;\n}\n\n.trust-token-name,\n.trust-token-price-text {\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif !important;\n  font-size: 12px !important;\n  font-style: normal !important;\n  font-weight: 600 !important;\n  line-height: 18px !important;\n}\n\n/* CSS Variables for theming - Dark theme (default) */\n.trust-token-popup-container {\n  --popup-bg: #121513;\n  --popup-text: #ffffff;\n  --popup-text-secondary: #9ca3af;\n  --popup-text-error: #eaecef;\n  --popup-card-bg: #2b2b2e;\n  --popup-hover-row: rgba(255, 255, 255, 0.08);\n  --popup-recent-badge-bg: rgba(255, 255, 255, 0.12);\n  --popup-button-bg: rgba(72, 255, 145, 0.16);\n  --popup-button-hover-bg: #3a6d50;\n  --popup-swap-button-hover: #3dd98c;\n  --popup-primary: #48ff91;\n  --button-primary: #1b1b1c;\n  --popup-price-positive: #23be7d;\n  --popup-price-negative: #ff4848;\n  --popup-powered-text: rgba(234, 236, 239, 0.6);\n  --popup-shadow: rgba(0, 0, 0, 0.5);\n}\n\n/* Light theme - Twitter/X light theme detection */\nbody[style*='background-color: rgb(255, 255, 255)'] .trust-token-popup-container,\nbody[style*='background-color: rgb(242, 242, 242)'] .trust-token-popup-container {\n  --popup-bg: #ffffff;\n  --popup-text: #252525;\n  --popup-text-error: #252525;\n  --popup-text-secondary: rgba(37, 37, 37, 0.72);\n  --popup-card-bg: #f0f0f2;\n  --popup-button-bg: rgba(5, 0, 255, 0.12);\n  --popup-button-hover-bg: rgba(5, 0, 255, 0.2);\n  --popup-swap-button-hover: #0400cc;\n  --popup-hover-row: rgba(0, 0, 0, 0.06);\n  --popup-recent-badge-bg: rgba(0, 0, 0, 0.08);\n  --popup-primary: #0500ff;\n  --popup-price-positive: #0aa838;\n  --button-primary: #fff;\n  --popup-price-negative: #ff4848;\n  --popup-powered-text: rgba(107, 114, 128, 0.6);\n  --popup-shadow: rgba(0, 0, 0, 0.15);\n}\n\n.trust-token-popup {\n  position: absolute;\n  z-index: 10000;\n  pointer-events: auto;\n  animation: trust-token-popup-fade-in 0.2s ease-out;\n}\n\n.trust-token-popup-container {\n  background: var(--popup-bg);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px var(--popup-shadow);\n  padding: 16px;\n  width: 300px;\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif;\n  color: var(--popup-text);\n  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.trust-token-popup-container.trust-token-list-view {\n  width: 600px;\n  padding: 16px 8px;\n}\n\n/* Header */\n.trust-token-popup-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.trust-token-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.trust-token-popup-logo-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.trust-token-popup-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.trust-token-popup-chain-badge {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--popup-bg);\n  object-fit: cover;\n}\n\n.trust-token-header-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.trust-token-popup-symbol {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--popup-text);\n  line-height: 24px;\n}\n\n.trust-token-popup-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  line-height: 18px;\n}\n\n.trust-token-swap-button {\n  background: var(--popup-primary);\n  color: var(--button-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n  transition:\n    background 0.2s ease,\n    opacity 0.2s ease;\n}\n\n.trust-token-swap-button:hover:not(:disabled) {\n  background: var(--popup-swap-button-hover);\n}\n\n.trust-token-swap-button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n/* Price Card */\n.trust-token-price-card {\n  background: var(--popup-card-bg);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 8px;\n}\n\n.trust-token-price-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  margin-bottom: 8px;\n}\n\n.trust-token-price-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.trust-token-price-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--popup-primary);\n  line-height: 25px;\n}\n\n.trust-token-price-change {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 12px;\n}\n\n.trust-token-price-change svg {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.trust-token-price-change.positive {\n  color: var(--popup-price-positive);\n}\n\n.trust-token-price-change.negative {\n  color: var(--popup-price-negative);\n}\n\n/* Stats Row */\n.trust-token-stats-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.trust-token-stat-card {\n  background: var(--popup-card-bg);\n  border-radius: 12px;\n  padding: 16px;\n}\n\n.trust-token-stat-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--popup-text-secondary);\n  margin-bottom: 8px;\n}\n\n.trust-token-stat-value {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 700;\n  color: var(--popup-text);\n}\n\n/* Similar Tokens Button */\n.trust-token-similar-button {\n  width: 100%;\n  background: var(--popup-button-bg);\n  color: var(--popup-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  white-space: nowrap;\n  transition: background 0.2s ease;\n  line-height: 21px;\n  margin-bottom: 12px;\n}\n\n.trust-token-similar-button:hover {\n  background: var(--popup-button-hover-bg);\n}\n\n.trust-token-similar-button svg {\n  flex-shrink: 0;\n}\n\n/* Similar Tokens List View */\n.trust-token-list-header {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;\n  gap: 12px;\n  padding: 12px 8px;\n}\n\n.trust-token-list-header-col {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--popup-text-secondary);\n  letter-spacing: 0.5px;\n  list-style: 21px;\n  gap: 12px;\n  text-align: left;\n}\n\n/* Scrollable container */\n.trust-token-list-scroll {\n  height: 380px;\n  min-height: 380px;\n  max-height: 380px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 16px;\n  padding-right: 4px;\n  overscroll-behavior: contain;\n}\n\n/* Scrollbar styling */\n.trust-token-list-scroll::-webkit-scrollbar {\n  width: 6px;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-thumb {\n  background: var(--popup-text-secondary);\n  border-radius: 3px;\n  opacity: 0.4;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-thumb:hover {\n  background: var(--popup-text);\n}\n\n/* List row */\n.trust-token-list-row {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: 12px;\n  transition: background 0.2s ease;\n  cursor: pointer;\n}\n\n.trust-token-list-row:hover {\n  background: var(--popup-hover-row);\n}\n\n.trust-token-list-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.trust-token-list-col-numeric {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--popup-text);\n  line-height: 24px;\n}\n\n.trust-token-list-col:first-child {\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 12px;\n}\n\n.trust-token-list-logo-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.trust-token-list-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.trust-token-list-chain-badge {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--popup-bg);\n  object-fit: cover;\n}\n\n.trust-token-list-name-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.trust-token-list-symbol-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.trust-token-list-symbol {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--popup-text);\n  line-height: 20px;\n}\n\n.trust-token-list-recent-badge {\n  background: var(--popup-recent-badge-bg);\n  color: var(--popup-text-secondary);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 0px 8px;\n  border-radius: 40px;\n  line-height: 15px;\n}\n\n.trust-token-list-chain {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  line-height: 16px;\n}\n\n.trust-token-list-change {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 16px;\n}\n\n.trust-token-list-change.positive {\n  color: var(--popup-price-positive);\n}\n\n.trust-token-list-change.negative {\n  color: var(--popup-price-negative);\n}\n\n/* Footer */\n.trust-token-popup-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Add horizontal padding in list view to align with Name column */\n.trust-token-list-view .trust-token-popup-footer {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.trust-token-powered {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--popup-powered-text);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.trust-token-powered-brand {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-weight: 600;\n  color: var(--popup-text);\n}\n\n.trust-token-dismiss {\n  background: transparent;\n  border: none;\n  color: var(--popup-powered-text);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.trust-token-dismiss:hover {\n  background: var(--popup-card-bg);\n  color: var(--popup-text);\n}\n\n/* Menu button */\n.trust-token-menu-button {\n  background: transparent;\n  border: none;\n  color: var(--popup-powered-text);\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: background 0.2s ease;\n}\n\n.trust-token-menu-button:hover {\n  background: var(--popup-card-bg);\n}\n\n/* Overlay to darken the popup - only darkens content, not the footer */\n.trust-token-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 44px; /* Leave space for footer (adjust based on footer height) */\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 16px 16px 0 0;\n  z-index: 1;\n  pointer-events: auto;\n}\n\n/* Mini menu popup */\n.trust-token-menu-popup {\n  position: absolute;\n  bottom: 50px; /* Increased from 20px to 40px (20px higher) */\n  right: 20px;\n  background: var(--popup-bg);\n  border-radius: 12px;\n  box-shadow: 0 4px 16px var(--popup-shadow);\n  padding: 8px;\n  z-index: 2;\n  min-width: 280px;\n  animation: trust-token-menu-fade-in 0.15s ease-out;\n}\n\n.trust-token-menu-item {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  gap: 12px;\n}\n\n.trust-token-menu-item-text {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--popup-text);\n  text-align: left;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 0;\n}\n\n/* Custom toggle switch */\n.trust-token-toggle {\n  width: 44px;\n  height: 24px;\n  background: rgba(156, 163, 175, 0.3);\n  border-radius: 12px;\n  position: relative;\n  transition: background 0.2s ease;\n  flex-shrink: 0;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.trust-token-toggle:hover {\n  opacity: 0.8;\n}\n\n.trust-token-toggle.enabled {\n  background: var(--popup-primary);\n}\n\n.trust-token-toggle-thumb {\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.trust-token-toggle.enabled .trust-token-toggle-thumb {\n  transform: translateX(20px);\n}\n\n/* Error state */\n.trust-token-error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 20px;\n  text-align: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.trust-token-error-illustration {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.trust-token-error-illustration svg {\n  width: 100%;\n  height: 100%;\n}\n\n.trust-token-error-message {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--popup-text-error);\n  line-height: 30px;\n}\n\n.trust-token-retry-button {\n  background: var(--popup-primary);\n  color: var(--button-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 12px 16px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.trust-token-retry-button:hover {\n  opacity: 0.9;\n}\n\n/* Animations */\n@keyframes trust-token-popup-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-8px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes trust-token-menu-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n"],
          sourceRoot: ""
        }]);
        const s = a
      },
      96540: (e, n, t) => {
        "use strict";
        e.exports = t(29869)
      },
      96815: function(e, n) {
        var t, r;
        "u" > typeof globalThis ? globalThis : "u" > typeof self && self, void 0 !== (r = "function" == typeof(t = function(e) {
          "use strict";
          if (!globalThis.chrome?.runtime?.id) throw Error("This script should only be loaded in a browser extension.");
          if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
            const n = "The message port closed before a response was received.",
              t = e => {
                const t = {
                  alarms: {
                    clear: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    clearAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    get: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  bookmarks: {
                    create: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getChildren: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getRecent: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getSubTree: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getTree: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    move: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeTree: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  },
                  browserAction: {
                    disable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    enable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    getBadgeBackgroundColor: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getBadgeText: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getPopup: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getTitle: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    openPopup: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    setBadgeBackgroundColor: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setBadgeText: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setIcon: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    }
                  },
                  browsingData: {
                    remove: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    removeCache: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeCookies: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeDownloads: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeFormData: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeHistory: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeLocalStorage: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removePasswords: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removePluginData: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    settings: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  commands: {
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  contextMenus: {
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  },
                  cookies: {
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAllCookieStores: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    set: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  devtools: {
                    inspectedWindow: {
                      eval: {
                        minArgs: 1,
                        maxArgs: 2,
                        singleCallbackArg: !1
                      }
                    },
                    panels: {
                      create: {
                        minArgs: 3,
                        maxArgs: 3,
                        singleCallbackArg: !0
                      },
                      elements: {
                        createSidebarPane: {
                          minArgs: 1,
                          maxArgs: 1
                        }
                      }
                    }
                  },
                  downloads: {
                    cancel: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    download: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    erase: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getFileIcon: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    open: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    pause: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeFile: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    resume: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    show: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    }
                  },
                  extension: {
                    isAllowedFileSchemeAccess: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    isAllowedIncognitoAccess: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  history: {
                    addUrl: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    deleteAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    deleteRange: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    deleteUrl: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getVisits: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  i18n: {
                    detectLanguage: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAcceptLanguages: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  identity: {
                    launchWebAuthFlow: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  idle: {
                    queryState: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  management: {
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getSelf: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    setEnabled: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    uninstallSelf: {
                      minArgs: 0,
                      maxArgs: 1
                    }
                  },
                  notifications: {
                    clear: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    create: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getPermissionLevel: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  },
                  pageAction: {
                    getPopup: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getTitle: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    hide: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setIcon: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    show: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    }
                  },
                  permissions: {
                    contains: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    request: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  runtime: {
                    getBackgroundPage: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getPlatformInfo: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    openOptionsPage: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    requestUpdateCheck: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    sendMessage: {
                      minArgs: 1,
                      maxArgs: 3
                    },
                    sendNativeMessage: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    setUninstallURL: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  sessions: {
                    getDevices: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getRecentlyClosed: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    restore: {
                      minArgs: 0,
                      maxArgs: 1
                    }
                  },
                  storage: {
                    local: {
                      clear: {
                        minArgs: 0,
                        maxArgs: 0
                      },
                      get: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1
                      }
                    },
                    managed: {
                      get: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1
                      }
                    },
                    sync: {
                      clear: {
                        minArgs: 0,
                        maxArgs: 0
                      },
                      get: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1
                      }
                    }
                  },
                  tabs: {
                    captureVisibleTab: {
                      minArgs: 0,
                      maxArgs: 2
                    },
                    create: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    detectLanguage: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    discard: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    duplicate: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    executeScript: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getCurrent: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getZoom: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getZoomSettings: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    goBack: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    goForward: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    highlight: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    insertCSS: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    move: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    query: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    reload: {
                      minArgs: 0,
                      maxArgs: 2
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeCSS: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    sendMessage: {
                      minArgs: 2,
                      maxArgs: 3
                    },
                    setZoom: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    setZoomSettings: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    update: {
                      minArgs: 1,
                      maxArgs: 2
                    }
                  },
                  topSites: {
                    get: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  webNavigation: {
                    getAllFrames: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getFrame: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  webRequest: {
                    handlerBehaviorChanged: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  windows: {
                    create: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getCurrent: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getLastFocused: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  }
                };
                if (0 === Object.keys(t).length) throw Error("api-metadata.json has not been included in browser-polyfill");
                class r extends WeakMap {
                  constructor(e, n = void 0) {
                    super(n), this.createItem = e
                  }
                  get(e) {
                    return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                  }
                }
                const i = (n, t) => (...r) => {
                    e.runtime.lastError ? n.reject(Error(e.runtime.lastError.message)) : t.singleCallbackArg || 1 >= r.length && !1 !== t.singleCallbackArg ? n.resolve(r[0]) : n.resolve(r)
                  },
                  o = e => 1 == e ? "argument" : "arguments",
                  a = (e, n, t) => new Proxy(n, {
                    apply: (n, r, i) => t.call(r, e, ...i)
                  });
                let s = Function.call.bind({}.hasOwnProperty);
                const l = (e, n = {}, t = {}) => {
                    let r = Object.create(null),
                      u = {
                        has: (n, t) => t in e || t in r,
                        get(u, c, f) {
                          if (c in r) return r[c];
                          if (!(c in e)) return;
                          let h = e[c];
                          if ("function" == typeof h)
                            if ("function" == typeof n[c]) h = a(e, e[c], n[c]);
                            else if (s(t, c)) {
                            let n = ((e, n) => function(t, ...r) {
                              if (r.length < n.minArgs) throw Error(`Expected at least ${n.minArgs} ${o(n.minArgs)} for ${e}(), got ${r.length}`);
                              if (r.length > n.maxArgs) throw Error(`Expected at most ${n.maxArgs} ${o(n.maxArgs)} for ${e}(), got ${r.length}`);
                              return new Promise((o, a) => {
                                if (n.fallbackToNoCallback) try {
                                  t[e](...r, i({
                                    resolve: o,
                                    reject: a
                                  }, n))
                                } catch (i) {
                                  console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", i), t[e](...r), n.fallbackToNoCallback = !1, n.noCallback = !0, o()
                                } else n.noCallback ? (t[e](...r), o()) : t[e](...r, i({
                                  resolve: o,
                                  reject: a
                                }, n))
                              })
                            })(c, t[c]);
                            h = a(e, e[c], n)
                          } else h = h.bind(e);
                          else if ("object" == typeof h && null !== h && (s(n, c) || s(t, c))) h = l(h, n[c], t[c]);
                          else {
                            if (!s(t, "*")) return Object.defineProperty(r, c, {
                              configurable: !0,
                              enumerable: !0,
                              get: () => e[c],
                              set(n) {
                                e[c] = n
                              }
                            }), h;
                            h = l(h, n[c], t["*"])
                          }
                          return r[c] = h, h
                        },
                        set: (n, t, i, o) => (t in r ? r[t] = i : e[t] = i, !0),
                        defineProperty: (e, n, t) => Reflect.defineProperty(r, n, t),
                        deleteProperty: (e, n) => Reflect.deleteProperty(r, n)
                      };
                    return new Proxy(Object.create(e), u)
                  },
                  u = e => ({
                    addListener(n, t, ...r) {
                      n.addListener(e.get(t), ...r)
                    },
                    hasListener: (n, t) => n.hasListener(e.get(t)),
                    removeListener(n, t) {
                      n.removeListener(e.get(t))
                    }
                  }),
                  c = new r(e => "function" != typeof e ? e : function(n) {
                    const t = l(n, {}, {
                      getContent: {
                        minArgs: 0,
                        maxArgs: 0
                      }
                    });
                    e(t)
                  }),
                  f = new r(e => "function" != typeof e ? e : function(n, t, r) {
                    let i, o, a = !1,
                      s = new Promise(e => {
                        i = function(n) {
                          a = !0, e(n)
                        }
                      });
                    try {
                      o = e(n, t, i)
                    } catch (e) {
                      o = Promise.reject(e)
                    }
                    const l = !0 !== o && (e => e && "object" == typeof e && "function" == typeof e.then)(o);
                    return !(!0 !== o && !l && !a || ((l ? o : s).then(e => {
                      r(e)
                    }, e => {
                      let n;
                      n = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", r({
                        U: !0,
                        message: n
                      })
                    }).catch(e => {
                      console.error("Failed to send onMessage rejected reply", e)
                    }), 0))
                  }),
                  h = ({
                    reject: t,
                    resolve: r
                  }, i) => {
                    e.runtime.lastError ? e.runtime.lastError.message === n ? r() : t(Error(e.runtime.lastError.message)) : i && i.U ? t(Error(i.message)) : r(i)
                  },
                  d = (e, n, t, ...r) => {
                    if (r.length < n.minArgs) throw Error(`Expected at least ${n.minArgs} ${o(n.minArgs)} for ${e}(), got ${r.length}`);
                    if (r.length > n.maxArgs) throw Error(`Expected at most ${n.maxArgs} ${o(n.maxArgs)} for ${e}(), got ${r.length}`);
                    return new Promise((e, n) => {
                      const i = h.bind(null, {
                        resolve: e,
                        reject: n
                      });
                      r.push(i), t.sendMessage(...r)
                    })
                  },
                  p = {
                    devtools: {
                      network: {
                        onRequestFinished: u(c)
                      }
                    },
                    runtime: {
                      onMessage: u(f),
                      onMessageExternal: u(f),
                      sendMessage: d.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                      })
                    },
                    tabs: {
                      sendMessage: d.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                      })
                    }
                  },
                  g = {
                    clear: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    set: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  };
                return t.privacy = {
                  network: {
                    "*": g
                  },
                  services: {
                    "*": g
                  },
                  websites: {
                    "*": g
                  }
                }, l(e, p, t)
              };
            e.exports = t(chrome)
          } else e.exports = globalThis.browser
        }) ? t(e) : t) && (e.exports = r)
      },
      97825: e => {
        "use strict";
        e.exports = function(e) {
          if (typeof document > "u") return {
            update: function() {},
            remove: function() {}
          };
          var n = e.insertStyleElement(e);
          return {
            update: function(t) {
              ! function(e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {"));
                var i = "u" > typeof t.layer;
                i && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), r += t.css, i && (r += "}"), t.media && (r += "}"), t.supports && (r += "}");
                var o = t.sourceMap;
                o && "u" > typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), n.styleTagTransform(r, e, n.options)
              }(n, e, t)
            },
            remove: function() {
              ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
              }(n)
            }
          }
        }
      }
    },
    r = {};

  function i(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var o = r[e] = {
      id: e,
      exports: {}
    };
    return t[e].call(o.exports, o, o.exports, i), o.exports
  }
  i.n = e => {
    var n = e && e.$ ? () => e.default : () => e;
    return i.d(n, {
      a: n
    }), n
  }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(t, r) {
    if (1 & r && (t = this(t)), 8 & r || "object" == typeof t && t && (4 & r && t.$ || 16 & r && "function" == typeof t.then)) return t;
    var o = Object.create(null);
    i.r(o);
    var a = {};
    e = e || [null, n({}), n([]), n(n)];
    for (var s = 2 & r && t;
      "object" == typeof s && !~e.indexOf(s); s = n(s)) Object.getOwnPropertyNames(s).forEach(e => a[e] = () => t[e]);
    return a.default = () => t, i.d(o, a), o
  }, i.d = (e, n) => {
    for (var t in n) i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: n[t]
    })
  }, i.o = (e, n) => ({}.hasOwnProperty.call(e, n)), i.r = e => {
    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "$", {
      value: !0
    })
  }, i.nc = void 0, (() => {
    "use strict";
    var e = i(85072),
      n = i.n(e),
      t = i(97825),
      r = i.n(t),
      o = i(77659),
      a = i.n(o),
      s = i(55056),
      l = i.n(s),
      u = i(10540),
      c = i.n(u),
      f = i(41113),
      h = i.n(f),
      d = i(92055),
      p = {};
    p.styleTagTransform = h(), p.setAttributes = l(), p.insert = a().bind(null, "head"), p.domAPI = r(), p.insertStyleElement = c(), n()(d.A, p), d.A && d.A.locals && d.A.locals;
    const g = {
      name: "token-scanner-enabled",
      default: !0
    };
    var A, m = ((A = m || {}).INTERNAL = "INTERNAL", A.PUBLIC = "PUBLIC", A);

    function v(e, n) {
      return `${n}_${e}`
    }

    function b(e) {
      return v(e, "INTERNAL")
    }

    function C(e) {
      return v(e, "PUBLIC")
    }
    const y = {
      RESET: b("Reset"),
      LOCK: b("Lock"),
      LOCK_CALLBACK: b("Lock_callback"),
      AUTHENTICATE: b("Authenticate"),
      REGISTER_DEVICE: b("RegisterDevice"),
      APP_DISPLAYED: b("AppDisplayed"),
      WARNING_DISPLAYED: b("WarningDisplayed"),
      ICON_THEME_CHANGED: b("IconThemeChanged"),
      OPEN_POPUP: b("OpenPopup"),
      GET_APP_SETTINGS: C("GetAppSettings"),
      GET_APP_NODES: C("GetAppNodes"),
      GET_STORE: b("GetStore"),
      GET_REDUX_STATE: b("GetReduxState"),
      DISPATCH_REDUX_ACTION: b("DispatchReduxAction"),
      PING: C("Ping"),
      GET_ONE_TAP_SETTINGS: C("GetOneTapSettings"),
      ONE_TAP_DISMISS: C("OneTapDismiss"),
      ONE_TAP_CONNECT: C("OneTapConnect"),
      GET_TOKEN_SCANNER_I18N: C("GetTokenScannerI18n"),
      GET_TOKEN_SCANNER_ENABLED: C("GetTokenScannerEnabled"),
      GET_TOKEN_BASIC_INFO: C("GetTokenBasicInfo"),
      GET_TOKEN_MARKET_DATA: C("GetTokenMarketData"),
      GET_SIMILAR_TOKENS_COUNT: C("GetSimilarTokensCount"),
      GET_SIMILAR_TOKENS: C("GetSimilarTokens"),
      OPEN_SWAP_PAGE: C("OpenSwapPage"),
      GET_FEATURE_FLAG: C("GetFeatureFlag"),
      SET_TOKEN_SCANNER_ENABLED: C("SetTokenScannerEnabled"),
      TRACK_ANALYTICS: C("TrackAnalytics"),
      ANNOUNCEMENT_DISPLAYED: b("AnnouncementDisplayed"),
      FETCH_ANNOUNCEMENTS: b("FetchAnnouncements"),
      FETCH_USER_VIP_TIER_DATA: b("FetchUserVipTierData"),
      FETCH_FUNDING_METHODS: b("FetchFundingMethods"),
      ROUTE_CHANGED: b("RouteChanged")
    };
    var k = i(73065),
      w = i.n(k),
      E = i(90251),
      B = i.n(E),
      x = i(14545),
      S = i.t(x, 2),
      L = i(65606);
    const {
      env: F = {},
      argv: T = [],
      platform: M = ""
    } = typeof L > "u" ? {} : L, R = "NO_COLOR" in F || T.includes("--no-color"), H = "FORCE_COLOR" in F || T.includes("--color"), N = "win32" === M, I = "dumb" === F.TERM, _ = S && x.isatty && x.isatty(1) && F.TERM && !I, j = !R && (H || N && !I || _ || "CI" in F && ("GITHUB_ACTIONS" in F || "GITLAB_CI" in F || "CIRCLECI" in F)), O = (e, n, t, r, i = n.substring(0, e) + r, o = n.substring(e + t.length), a = o.indexOf(t)) => i + (0 > a ? o : O(a, o, t, r)), P = (e, n, t) => ((e, n, t = e, r = e.length + 1) => i => i || "" !== i && void 0 !== i ? ((e, n, t, r, i) => 0 > e ? t + n + r : t + O(e, n, r, i) + r)(("" + i).indexOf(n, r), i, e, n, t) : "")(`[${e}m`, `[${n}m`, t), D = {
      reset: P(0, 0),
      bold: P(1, 22, "[22m[1m"),
      dim: P(2, 22, "[22m[2m"),
      italic: P(3, 23),
      underline: P(4, 24),
      inverse: P(7, 27),
      hidden: P(8, 28),
      strikethrough: P(9, 29),
      black: P(30, 39),
      red: P(31, 39),
      green: P(32, 39),
      yellow: P(33, 39),
      blue: P(34, 39),
      magenta: P(35, 39),
      cyan: P(36, 39),
      white: P(37, 39),
      gray: P(90, 39),
      bgBlack: P(40, 49),
      bgRed: P(41, 49),
      bgGreen: P(42, 49),
      bgYellow: P(43, 49),
      bgBlue: P(44, 49),
      bgMagenta: P(45, 49),
      bgCyan: P(46, 49),
      bgWhite: P(47, 49),
      blackBright: P(90, 39),
      redBright: P(91, 39),
      greenBright: P(92, 39),
      yellowBright: P(93, 39),
      blueBright: P(94, 39),
      magentaBright: P(95, 39),
      cyanBright: P(96, 39),
      whiteBright: P(97, 39),
      bgBlackBright: P(100, 49),
      bgRedBright: P(101, 49),
      bgGreenBright: P(102, 49),
      bgYellowBright: P(103, 49),
      bgBlueBright: P(104, 49),
      bgMagentaBright: P(105, 49),
      bgCyanBright: P(106, 49),
      bgWhiteBright: P(107, 49)
    }, {
      reset: V,
      bold: W,
      dim: Z,
      italic: U,
      underline: $,
      inverse: G,
      hidden: z,
      strikethrough: Y,
      black: q,
      red: K,
      green: X,
      yellow: Q,
      blue: J,
      magenta: ee,
      cyan: ne,
      white: te,
      gray: re,
      bgBlack: ie,
      bgRed: oe,
      bgGreen: ae,
      bgYellow: se,
      bgBlue: le,
      bgMagenta: ue,
      bgCyan: ce,
      bgWhite: fe,
      blackBright: he,
      redBright: de,
      greenBright: pe,
      yellowBright: ge,
      blueBright: Ae,
      magentaBright: me,
      cyanBright: ve,
      whiteBright: be,
      bgBlackBright: Ce,
      bgRedBright: ye,
      bgGreenBright: ke,
      bgYellowBright: we,
      bgBlueBright: Ee,
      bgMagentaBright: Be,
      bgCyanBright: xe,
      bgWhiteBright: Se
    } = (({
      useColor: e = j
    } = {}) => e ? D : Object.keys(D).reduce((e, n) => ({
      ...e,
      [n]: String
    }), {}))();
    w().setLevel("silent");
    var Le = (e => (e.TRACE = "TRACE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e))(Le || {});
    const Fe = {
      TRACE: ee,
      DEBUG: ne,
      INFO: J,
      WARN: Q,
      ERROR: K
    };
    B().reg(w()), B().apply(w(), {
      format: (e, n, t) => `${re(`[${t}]`)} ${Fe[e](e)}${"root"===n?"":X(` [${n}:]`)}`
    });
    const Te = w().error.bind(w());
    w().error = (...e) => Te(...e);
    const Me = w();
    var Re = (e => (e[e.Bitcoin = 0] = "Bitcoin", e[e.Ethereum = 60] = "Ethereum", e[e.Tron = 195] = "Tron", e[e.Solana = 501] = "Solana", e[e.Arbitrum = 42161] = "Arbitrum", e[e.Base = 8453] = "Base", e[e.SmartChain = 20000714] = "SmartChain", e))(Re || {}),
      He = (e => (e[e.CRYPTO = 0] = "CRYPTO", e[e.NFT = 1] = "NFT", e[e.APPROVALS = 2] = "APPROVALS", e))(He || {}),
      Ne = (e => (e[e.RWA = 0] = "RWA", e[e.AI = 1] = "AI", e[e.MEMES = 2] = "MEMES", e))(Ne || {}),
      Ie = (e => (e[e.TOP = 0] = "TOP", e[e.BNB = 1] = "BNB", e[e.ETH = 2] = "ETH", e[e.SOL = 3] = "SOL", e))(Ie || {}),
      _e = (e => (e[e.HOLDINGS = 0] = "HOLDINGS", e[e.HISTORY = 1] = "HISTORY", e[e.ABOUT = 2] = "ABOUT", e))(_e || {});
    Promise.resolve(!1), Promise.resolve(!0);
    var je = Promise.resolve();

    function Oe(e, n) {
      return e || (e = 0), new Promise(function(t) {
        return setTimeout(function() {
          return t(n)
        }, e)
      })
    }

    function Pe() {
      return Math.random().toString(36).substring(2)
    }
    var De = 0;

    function Ve() {
      var e = 1e3 * Date.now();
      return De >= e && (e = De + 1), De = e, e
    }
    var We = {
      create: function(e) {
        var n = {
          time: Ve(),
          messagesCallback: null,
          bc: new BroadcastChannel(e),
          subFns: []
        };
        return n.bc.onmessage = function(e) {
          n.messagesCallback && n.messagesCallback(e.data)
        }, n
      },
      close: function(e) {
        e.bc.close(), e.subFns = []
      },
      onMessage: function(e, n) {
        e.messagesCallback = n
      },
      postMessage: function(e, n) {
        try {
          return e.bc.postMessage(n, !1), je
        } catch (e) {
          return Promise.reject(e)
        }
      },
      canBeUsed: function() {
        if ("u" > typeof globalThis && globalThis.Deno && globalThis.Deno.args) return !0;
        if (("u" > typeof window || "u" > typeof self) && "function" == typeof BroadcastChannel) {
          if (BroadcastChannel.G) throw Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
          return !0
        }
        return !1
      },
      type: "native",
      averageResponseTime: function() {
        return 150
      },
      microSeconds: Ve
    };
    class Ze {
      ttl;
      map = new Map;
      Y = !1;
      constructor(e) {
        this.ttl = e
      }
      has(e) {
        return this.map.has(e)
      }
      add(e) {
        this.map.set(e, Ue()), this.Y || (this.Y = !0, setTimeout(() => {
          this.Y = !1,
            function(e) {
              const n = Ue() - e.ttl,
                t = e.map[Symbol.iterator]();
              for (;;) {
                const r = t.next().value;
                if (!r) return;
                const i = r[0];
                if (r[1] >= n) return;
                e.map.delete(i)
              }
            }(this)
        }, 0))
      }
      clear() {
        this.map.clear()
      }
    }

    function Ue() {
      return Date.now()
    }

    function $e() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = JSON.parse(JSON.stringify(e));
      return typeof n.webWorkerSupport > "u" && (n.webWorkerSupport = !0), n.idb || (n.idb = {}), n.idb.ttl || (n.idb.ttl = 45e3), n.idb.fallbackInterval || (n.idb.fallbackInterval = 150), e.idb && "function" == typeof e.idb.onclose && (n.idb.onclose = e.idb.onclose), n.localstorage || (n.localstorage = {}), n.localstorage.removeTimeout || (n.localstorage.removeTimeout = 6e4), e.methods && (n.methods = e.methods), n.node || (n.node = {}), n.node.ttl || (n.node.ttl = 12e4), n.node.maxParallelWrites || (n.node.maxParallelWrites = 2048), typeof n.node.useFastPath > "u" && (n.node.useFastPath = !0), n
    }
    var Ge = "messages",
      ze = {
        durability: "relaxed"
      };

    function Ye() {
      if ("u" > typeof indexedDB) return indexedDB;
      if ("u" > typeof window) {
        if ("u" > typeof window.mozIndexedDB) return window.mozIndexedDB;
        if ("u" > typeof window.webkitIndexedDB) return window.webkitIndexedDB;
        if ("u" > typeof window.msIndexedDB) return window.msIndexedDB
      }
      return !1
    }

    function qe(e) {
      e.commit && e.commit()
    }

    function Ke(e) {
      e.closed || Xe(e).then(function() {
        return Oe(e.options.idb.fallbackInterval)
      }).then(function() {
        return Ke(e)
      })
    }

    function Xe(e) {
      return e.closed || !e.messagesCallback ? je : function(e, n) {
        var t = e.transaction(Ge, "readonly", ze),
          r = t.objectStore(Ge),
          i = [],
          o = IDBKeyRange.bound(n + 1, 1 / 0);
        if (r.getAll) {
          var a = r.getAll(o);
          return new Promise(function(e, n) {
            a.onerror = function(e) {
              return n(e)
            }, a.onsuccess = function(n) {
              e(n.target.result)
            }
          })
        }
        return new Promise(function(e, a) {
          var s = function() {
            try {
              return o = IDBKeyRange.bound(n + 1, 1 / 0), r.openCursor(o)
            } catch {
              return r.openCursor()
            }
          }();
          s.onerror = function(e) {
            return a(e)
          }, s.onsuccess = function(r) {
            var o = r.target.result;
            o ? o.value.id < n + 1 ? o.continue(n + 1) : (i.push(o.value), o.continue()) : (qe(t), e(i))
          }
        })
      }(e.db, e.lastCursorId).then(function(n) {
        var t = n.filter(function(e) {
          return !!e
        }).map(function(n) {
          return n.id > e.lastCursorId && (e.lastCursorId = n.id), n
        }).filter(function(n) {
          return function(e, n) {
            return !(e.uuid === n.uuid || n.eMIs.has(e.id) || e.data.time < n.messagesCallbackTime)
          }(n, e)
        }).sort(function(e, n) {
          return e.time - n.time
        });
        return t.forEach(function(n) {
          e.messagesCallback && (e.eMIs.add(n.id), e.messagesCallback(n.data))
        }), je
      })
    }
    var Qe = {
      create: function(e, n) {
        return n = $e(n),
          function(e) {
            var n = "pubkey.broadcast-channel-0-" + e,
              t = Ye().open(n);
            return t.onupgradeneeded = function(e) {
              e.target.result.createObjectStore(Ge, {
                keyPath: "id",
                autoIncrement: !0
              })
            }, new Promise(function(e, n) {
              t.onerror = function(e) {
                return n(e)
              }, t.onsuccess = function() {
                e(t.result)
              }
            })
          }(e).then(function(t) {
            var r = {
              closed: !1,
              lastCursorId: 0,
              channelName: e,
              options: n,
              uuid: Pe(),
              eMIs: new Ze(2 * n.idb.ttl),
              writeBlockPromise: je,
              messagesCallback: null,
              readQueuePromises: [],
              db: t
            };
            return t.onclose = function() {
              r.closed = !0, n.idb.onclose && n.idb.onclose()
            }, Ke(r), r
          })
      },
      close: function(e) {
        e.closed = !0, e.db.close()
      },
      onMessage: function(e, n, t) {
        e.messagesCallbackTime = t, e.messagesCallback = n, Xe(e)
      },
      postMessage: function(e, n) {
        return e.writeBlockPromise = e.writeBlockPromise.then(function() {
          return function(e, n, t) {
            var r = {
                uuid: n,
                time: Date.now(),
                data: t
              },
              i = e.transaction([Ge], "readwrite", ze);
            return new Promise(function(e, n) {
              i.oncomplete = function() {
                return e()
              }, i.onerror = function(e) {
                return n(e)
              }, i.objectStore(Ge).add(r), qe(i)
            })
          }(e.db, e.uuid, n)
        }).then(function() {
          0 === Math.floor(11 * Math.random() + 0) && function(e) {
            (function(e, n) {
              var t = Date.now() - n,
                r = e.transaction(Ge, "readonly", ze),
                i = r.objectStore(Ge),
                o = [];
              return new Promise(function(e) {
                i.openCursor().onsuccess = function(n) {
                  var i = n.target.result;
                  if (i) {
                    var a = i.value;
                    a.time < t ? (o.push(a), i.continue()) : (qe(r), e(o))
                  } else e(o)
                }
              })
            })(e.db, e.options.idb.ttl).then(function(n) {
              return function(e, n) {
                if (e.closed) return Promise.resolve([]);
                var t = e.db.transaction(Ge, "readwrite", ze).objectStore(Ge);
                return Promise.all(n.map(function(e) {
                  var n = t.delete(e);
                  return new Promise(function(e) {
                    n.onsuccess = function() {
                      return e()
                    }
                  })
                }))
              }(e, n.map(function(e) {
                return e.id
              }))
            })
          }(e)
        }), e.writeBlockPromise
      },
      canBeUsed: function() {
        return !!Ye()
      },
      type: "idb",
      averageResponseTime: function(e) {
        return 2 * e.idb.fallbackInterval
      },
      microSeconds: Ve
    };

    function Je() {
      var e;
      if (typeof window > "u") return null;
      try {
        e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage
      } catch {}
      return e
    }

    function en(e) {
      return "pubkey.broadcastChannel-" + e
    }

    function nn() {
      var e = Je();
      if (!e) return !1;
      try {
        var n = "__broadcastchannel_check";
        e.setItem(n, "works"), e.removeItem(n)
      } catch {
        return !1
      }
      return !0
    }
    var tn = {
        create: function(e, n) {
          if (n = $e(n), !nn()) throw Error("BroadcastChannel: localstorage cannot be used");
          var t = Pe(),
            r = new Ze(n.localstorage.removeTimeout),
            i = {
              channelName: e,
              uuid: t,
              eMIs: r
            };
          return i.listener = function(e, n) {
            var t = en(e),
              r = function(e) {
                e.key === t && n(JSON.parse(e.newValue))
              };
            return window.addEventListener("storage", r), r
          }(e, function(e) {
            i.messagesCallback && e.uuid !== t && (!e.token || r.has(e.token) || e.data.time && e.data.time < i.messagesCallbackTime || (r.add(e.token), i.messagesCallback(e.data)))
          }), i
        },
        close: function(e) {
          ! function(e) {
            window.removeEventListener("storage", e)
          }(e.listener)
        },
        onMessage: function(e, n, t) {
          e.messagesCallbackTime = t, e.messagesCallback = n
        },
        postMessage: function(e, n) {
          return new Promise(function(t) {
            Oe().then(function() {
              var r = en(e.channelName),
                i = {
                  token: Pe(),
                  time: Date.now(),
                  data: n,
                  uuid: e.uuid
                },
                o = JSON.stringify(i);
              Je().setItem(r, o);
              var a = document.createEvent("Event");
              a.initEvent("storage", !0, !0), a.key = r, a.newValue = o, window.dispatchEvent(a), t()
            })
          })
        },
        canBeUsed: nn,
        type: "localstorage",
        averageResponseTime: function() {
          var e = navigator.userAgent.toLowerCase();
          return e.includes("safari") && !e.includes("chrome") ? 240 : 120
        },
        microSeconds: Ve
      },
      rn = Ve,
      on = new Set,
      an = {
        create: function(e) {
          var n = {
            time: rn(),
            name: e,
            messagesCallback: null
          };
          return on.add(n), n
        },
        close: function(e) {
          on.delete(e)
        },
        onMessage: function(e, n) {
          e.messagesCallback = n
        },
        postMessage: function(e, n) {
          return new Promise(function(t) {
            return setTimeout(function() {
              Array.from(on).forEach(function(t) {
                t.name === e.name && t !== e && t.messagesCallback && t.time < n.time && t.messagesCallback(n)
              }), t()
            }, 5)
          })
        },
        canBeUsed: function() {
          return !0
        },
        type: "simulate",
        averageResponseTime: function() {
          return 5
        },
        microSeconds: rn
      },
      sn = [We, Qe, tn],
      ln = new Set,
      un = 0,
      cn = function(e, n) {
        this.id = un++, ln.add(this), this.name = e, this.options = $e(n), this.method = function(e) {
            var n = [].concat(e.methods, sn).filter(Boolean);
            if (e.type) {
              if ("simulate" === e.type) return an;
              var t = n.find(function(n) {
                return n.type === e.type
              });
              if (t) return t;
              throw Error("method-type " + e.type + " not found")
            }
            e.webWorkerSupport || (n = n.filter(function(e) {
              return "idb" !== e.type
            }));
            var r = n.find(function(e) {
              return e.canBeUsed()
            });
            if (r) return r;
            throw Error("No usable method found in " + JSON.stringify(sn.map(function(e) {
              return e.type
            })))
          }(this.options), this.q = !1, this.K = null, this.J = {
            message: [],
            internal: []
          }, this.ee = new Set, this.ne = [], this.te = null,
          function(e) {
            var n = e.method.create(e.name, e.options);
            ! function(e) {
              return e && "function" == typeof e.then
            }(n) ? e.re = n: (e.te = n, n.then(function(n) {
              e.re = n
            }))
          }(this)
      };

    function fn(e, n, t) {
      var r = {
        time: e.method.microSeconds(),
        type: n,
        data: t
      };
      return (e.te ? e.te : je).then(function() {
        var n = e.method.postMessage(e.re, r);
        return e.ee.add(n), n.catch().then(function() {
          return e.ee.delete(n)
        }), n
      })
    }

    function hn(e) {
      return e.J.message.length > 0 || e.J.internal.length > 0
    }

    function dn(e, n, t) {
      e.J[n].push(t),
        function(e) {
          if (!e.q && hn(e)) {
            var n = function(n) {
                e.J[n.type].forEach(function(e) {
                  n.time >= e.time && e.fn(n.data)
                })
              },
              t = e.method.microSeconds();
            e.te ? e.te.then(function() {
              e.q = !0, e.method.onMessage(e.re, n, t)
            }) : (e.q = !0, e.method.onMessage(e.re, n, t))
          }
        }(e)
    }

    function pn(e, n, t) {
      e.J[n] = e.J[n].filter(function(e) {
          return e !== t
        }),
        function(e) {
          if (e.q && !hn(e)) {
            e.q = !1;
            var n = e.method.microSeconds();
            e.method.onMessage(e.re, null, n)
          }
        }(e)
    }
    cn.G = !0, cn.prototype = {
      postMessage: function(e) {
        if (this.closed) throw Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(e));
        return fn(this, "message", e)
      },
      postInternal: function(e) {
        return fn(this, "internal", e)
      },
      set onmessage(e) {
        var n = {
          time: this.method.microSeconds(),
          fn: e
        };
        pn(this, "message", this.K), e && "function" == typeof e ? (this.K = n, dn(this, "message", n)) : this.K = null
      },
      addEventListener: function(e, n) {
        dn(this, e, {
          time: this.method.microSeconds(),
          fn: n
        })
      },
      removeEventListener: function(e, n) {
        pn(this, e, this.J[e].find(function(e) {
          return e.fn === n
        }))
      },
      close: function() {
        var e = this;
        if (!this.closed) {
          ln.delete(this), this.closed = !0;
          var n = this.te ? this.te : je;
          return this.K = null, this.J.message = [], n.then(function() {
            return Promise.all(Array.from(e.ee))
          }).then(function() {
            return Promise.all(e.ne.map(function(e) {
              return e()
            }))
          }).then(function() {
            return e.method.close(e.re)
          })
        }
      },
      get type() {
        return this.method.type
      },
      get isClosed() {
        return this.closed
      }
    };
    class gn {
      constructor() {
        this.listeners = {}
      }
      addListener(e, n) {
        const t = this.listeners[e] || [];
        t.push(n), this.listeners[e] = t
      }
      once(e, n) {
        this.addListener(e, t => (delete this.listeners[e], n(t)))
      }
      emit(e, n) {
        return new Promise((t, r) => {
          const i = (e => `${e}_${((e=21)=>{let n="",t=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)n+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&t[e]];return n})()}_callback`)(e);
          this.once(i, e => ((e, n, t) => new Promise((n, r) => {
            var i = e => {
                try {
                  a(t.next(e))
                } catch (e) {
                  r(e)
                }
              },
              o = e => {
                try {
                  a(t.throw(e))
                } catch (e) {
                  r(e)
                }
              },
              a = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
            a((t = t.apply(e, null)).next())
          }))(this, 0, function*() {
            var n;
            null != (n = e.data) && n.error ? r(e.data.error) : t(e.data.params)
          })), this.send({
            method: e,
            data: {
              cbMethod: i,
              params: n
            }
          })
        })
      }
      disconnect() {}
    }
    var An, mn = (e, n, t) => new Promise((r, i) => {
      var o = e => {
          try {
            s(t.next(e))
          } catch (e) {
            i(e)
          }
        },
        a = e => {
          try {
            s(t.throw(e))
          } catch (e) {
            i(e)
          }
        },
        s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
      s((t = t.apply(e, n)).next())
    });
    class vn extends gn {
      constructor(e) {
        super(), this.port = new cn(e), this.port.addEventListener("message", e => {
          const n = e.method;
          !n || !this.listeners[n] || this.listeners[n].forEach(n => n(e))
        })
      }
      listen(e) {
        const n = n => {
          e(n)
        };
        return this.port.addEventListener("message", n), () => this.port.removeEventListener("message", n)
      }
      send(e) {
        return mn(this, null, function*() {
          yield this.port.postMessage(e)
        })
      }
      disconnect() {
        return mn(this, null, function*() {
          yield this.port.close()
        })
      }
    }
    i(37007);
    const bn = "object" == typeof chrome && null != (An = null == chrome ? void 0 : chrome.runtime) && An.id ? i(96815) : {};
    bn.action = bn.action || bn.browserAction;
    var Cn = 1e6,
      yn = 1e6,
      kn = "[big.js] ",
      wn = kn + "Invalid ",
      En = wn + "decimal places",
      Bn = wn + "rounding mode",
      xn = kn + "Division by zero",
      Sn = {},
      Ln = void 0,
      Fn = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

    function Tn(e, n, t, r) {
      var i = e.c;
      if (t === Ln && (t = e.constructor.RM), 0 !== t && 1 !== t && 2 !== t && 3 !== t) throw Error(Bn);
      if (1 > n) r = 3 === t && (r || !!i[0]) || 0 === n && (1 === t && i[0] >= 5 || 2 === t && (i[0] > 5 || 5 === i[0] && (r || i[1] !== Ln))), i.length = 1, r ? (e.e = e.e - n + 1, i[0] = 1) : i[0] = e.e = 0;
      else if (n < i.length) {
        if (r = 1 === t && i[n] >= 5 || 2 === t && (i[n] > 5 || 5 === i[n] && (r || i[n + 1] !== Ln || 1 & i[n - 1])) || 3 === t && (r || !!i[0]), i.length = n, r)
          for (; ++i[--n] > 9;)
            if (i[n] = 0, 0 === n) {
              ++e.e, i.unshift(1);
              break
            } for (n = i.length; !i[--n];) i.pop()
      }
      return e
    }

    function Mn(e, n, t) {
      var r = e.e,
        i = e.c.join(""),
        o = i.length;
      if (n) i = i.charAt(0) + (o > 1 ? "." + i.slice(1) : "") + (0 > r ? "e" : "e+") + r;
      else if (0 > r) {
        for (; ++r;) i = "0" + i;
        i = "0." + i
      } else if (r > 0)
        if (++r > o)
          for (r -= o; r--;) i += "0";
        else o > r && (i = i.slice(0, r) + "." + i.slice(r));
      else o > 1 && (i = i.charAt(0) + "." + i.slice(1));
      return 0 > e.s && t ? "-" + i : i
    }
    Sn.abs = function() {
      var e = new this.constructor(this);
      return e.s = 1, e
    }, Sn.cmp = function(e) {
      var n, t = this,
        r = t.c,
        i = (e = new t.constructor(e)).c,
        o = t.s,
        a = e.s,
        s = t.e,
        l = e.e;
      if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -a : 0;
      if (o != a) return o;
      if (n = 0 > o, s != l) return s > l ^ n ? 1 : -1;
      for (a = (s = r.length) < (l = i.length) ? s : l, o = -1; ++o < a;)
        if (r[o] != i[o]) return r[o] > i[o] ^ n ? 1 : -1;
      return s == l ? 0 : s > l ^ n ? 1 : -1
    }, Sn.div = function(e) {
      var n = this,
        t = n.constructor,
        r = n.c,
        i = (e = new t(e)).c,
        o = n.s == e.s ? 1 : -1,
        a = t.DP;
      if (a !== ~~a || 0 > a || a > Cn) throw Error(En);
      if (!i[0]) throw Error(xn);
      if (!r[0]) return e.s = o, e.c = [e.e = 0], e;
      var s, l, u, c, f, h = i.slice(),
        d = s = i.length,
        p = r.length,
        g = r.slice(0, s),
        A = g.length,
        m = e,
        v = m.c = [],
        b = 0,
        C = a + (m.e = n.e - e.e) + 1;
      for (m.s = o, o = 0 > C ? 0 : C, h.unshift(0); A++ < s;) g.push(0);
      do {
        for (u = 0; 10 > u; u++) {
          if (s != (A = g.length)) c = s > A ? 1 : -1;
          else
            for (f = -1, c = 0; ++f < s;)
              if (i[f] != g[f]) {
                c = i[f] > g[f] ? 1 : -1;
                break
              } if (c >= 0) break;
          for (l = A == s ? i : h; A;) {
            if (g[--A] < l[A]) {
              for (f = A; f && !g[--f];) g[f] = 9;
              --g[f], g[A] += 10
            }
            g[A] -= l[A]
          }
          for (; !g[0];) g.shift()
        }
        v[b++] = c ? u : ++u, g[0] && c ? g[A] = r[d] || 0 : g = [r[d]]
      } while ((d++ < p || g[0] !== Ln) && o--);
      return !v[0] && 1 != b && (v.shift(), m.e--, C--), b > C && Tn(m, C, t.RM, g[0] !== Ln), m
    }, Sn.eq = function(e) {
      return 0 === this.cmp(e)
    }, Sn.gt = function(e) {
      return this.cmp(e) > 0
    }, Sn.gte = function(e) {
      return this.cmp(e) > -1
    }, Sn.lt = function(e) {
      return 0 > this.cmp(e)
    }, Sn.lte = function(e) {
      return 1 > this.cmp(e)
    }, Sn.minus = Sn.sub = function(e) {
      var n, t, r, i, o = this,
        a = o.constructor,
        s = o.s,
        l = (e = new a(e)).s;
      if (s != l) return e.s = -l, o.plus(e);
      var u = o.c.slice(),
        c = o.e,
        f = e.c,
        h = e.e;
      if (!u[0] || !f[0]) return f[0] ? e.s = -l : u[0] ? e = new a(o) : e.s = 1, e;
      if (s = c - h) {
        for ((i = 0 > s) ? (s = -s, r = u) : (h = c, r = f), r.reverse(), l = s; l--;) r.push(0);
        r.reverse()
      } else
        for (t = ((i = u.length < f.length) ? u : f).length, s = l = 0; t > l; l++)
          if (u[l] != f[l]) {
            i = u[l] < f[l];
            break
          } if (i && (r = u, u = f, f = r, e.s = -e.s), (l = (t = f.length) - (n = u.length)) > 0)
        for (; l--;) u[n++] = 0;
      for (l = n; t > s;) {
        if (u[--t] < f[t]) {
          for (n = t; n && !u[--n];) u[n] = 9;
          --u[n], u[t] += 10
        }
        u[t] -= f[t]
      }
      for (; 0 === u[--l];) u.pop();
      for (; 0 === u[0];) u.shift(), --h;
      return u[0] || (e.s = 1, u = [h = 0]), e.c = u, e.e = h, e
    }, Sn.mod = function(e) {
      var n, t = this,
        r = t.constructor,
        i = t.s,
        o = (e = new r(e)).s;
      if (!e.c[0]) throw Error(xn);
      return t.s = e.s = 1, n = 1 == e.cmp(t), t.s = i, e.s = o, n ? new r(t) : (i = r.DP, o = r.RM, r.DP = r.RM = 0, t = t.div(e), r.DP = i, r.RM = o, this.minus(t.times(e)))
    }, Sn.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, e
    }, Sn.plus = Sn.add = function(e) {
      var n, t, r, i = this,
        o = i.constructor;
      if (e = new o(e), i.s != e.s) return e.s = -e.s, i.minus(e);
      var a = i.e,
        s = i.c,
        l = e.e,
        u = e.c;
      if (!s[0] || !u[0]) return u[0] || (s[0] ? e = new o(i) : e.s = i.s), e;
      if (s = s.slice(), n = a - l) {
        for (n > 0 ? (l = a, r = u) : (n = -n, r = s), r.reverse(); n--;) r.push(0);
        r.reverse()
      }
      for (0 > s.length - u.length && (r = u, u = s, s = r), n = u.length, t = 0; n; s[n] %= 10) t = (s[--n] = s[n] + u[n] + t) / 10 | 0;
      for (t && (s.unshift(t), ++l), n = s.length; 0 === s[--n];) s.pop();
      return e.c = s, e.e = l, e
    }, Sn.pow = function(e) {
      var n = this,
        t = new n.constructor("1"),
        r = t,
        i = 0 > e;
      if (e !== ~~e || -yn > e || e > yn) throw Error(wn + "exponent");
      for (i && (e = -e); 1 & e && (r = r.times(n)), e >>= 1;) n = n.times(n);
      return i ? t.div(r) : r
    }, Sn.prec = function(e, n) {
      if (e !== ~~e || 1 > e || e > Cn) throw Error(wn + "precision");
      return Tn(new this.constructor(this), e, n)
    }, Sn.round = function(e, n) {
      if (e === Ln) e = 0;
      else if (e !== ~~e || -Cn > e || e > Cn) throw Error(En);
      return Tn(new this.constructor(this), e + this.e + 1, n)
    }, Sn.sqrt = function() {
      var e, n, t, r = this,
        i = r.constructor,
        o = r.s,
        a = r.e,
        s = new i("0.5");
      if (!r.c[0]) return new i(r);
      if (0 > o) throw Error(kn + "No square root");
      0 === (o = Math.sqrt(r + "")) || o === 1 / 0 ? ((n = r.c.join("")).length + a & 1 || (n += "0"), a = ((a + 1) / 2 | 0) - (0 > a || 1 & a), e = new i(((o = Math.sqrt(n)) == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + a)) : e = new i(o + ""), a = e.e + (i.DP += 4);
      do {
        t = e, e = s.times(t.plus(r.div(t)))
      } while (t.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
      return Tn(e, (i.DP -= 4) + e.e + 1, i.RM)
    }, Sn.times = Sn.mul = function(e) {
      var n, t = this,
        r = t.constructor,
        i = t.c,
        o = (e = new r(e)).c,
        a = i.length,
        s = o.length,
        l = t.e,
        u = e.e;
      if (e.s = t.s == e.s ? 1 : -1, !i[0] || !o[0]) return e.c = [e.e = 0], e;
      for (e.e = l + u, s > a && (n = i, i = o, o = n, u = a, a = s, s = u), n = Array(u = a + s); u--;) n[u] = 0;
      for (l = s; l--;) {
        for (s = 0, u = a + l; u > l;) s = n[u] + o[l] * i[u - l - 1] + s, n[u--] = s % 10, s = s / 10 | 0;
        n[u] = s
      }
      for (s ? ++e.e : n.shift(), l = n.length; !n[--l];) n.pop();
      return e.c = n, e
    }, Sn.toExponential = function(e, n) {
      var t = this,
        r = t.c[0];
      if (e !== Ln) {
        if (e !== ~~e || 0 > e || e > Cn) throw Error(En);
        for (t = Tn(new t.constructor(t), ++e, n); t.c.length < e;) t.c.push(0)
      }
      return Mn(t, !0, !!r)
    }, Sn.toFixed = function(e, n) {
      var t = this,
        r = t.c[0];
      if (e !== Ln) {
        if (e !== ~~e || 0 > e || e > Cn) throw Error(En);
        for (e = e + (t = Tn(new t.constructor(t), e + t.e + 1, n)).e + 1; t.c.length < e;) t.c.push(0)
      }
      return Mn(t, !1, !!r)
    }, Sn[Symbol.for("nodejs.util.inspect.custom")] = Sn.toJSON = Sn.toString = function() {
      var e = this,
        n = e.constructor;
      return Mn(e, e.e <= n.NE || e.e >= n.PE, !!e.c[0])
    }, Sn.toNumber = function() {
      var e = +Mn(this, !0, !0);
      if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(kn + "Imprecise conversion");
      return e
    }, Sn.toPrecision = function(e, n) {
      var t = this,
        r = t.constructor,
        i = t.c[0];
      if (e !== Ln) {
        if (e !== ~~e || 1 > e || e > Cn) throw Error(wn + "precision");
        for (t = Tn(new r(t), e, n); t.c.length < e;) t.c.push(0)
      }
      return Mn(t, e <= t.e || t.e <= r.NE || t.e >= r.PE, !!i)
    }, Sn.valueOf = function() {
      var e = this,
        n = e.constructor;
      if (!0 === n.strict) throw Error(kn + "valueOf disallowed");
      return Mn(e, e.e <= n.NE || e.e >= n.PE, !0)
    };
    var Rn = function e() {
      function n(t) {
        var r = this;
        if (!(r instanceof n)) return t === Ln ? e() : new n(t);
        if (t instanceof n) r.s = t.s, r.e = t.e, r.c = t.c.slice();
        else {
          if ("string" != typeof t) {
            if (!0 === n.strict && "bigint" != typeof t) throw TypeError(wn + "value");
            t = 0 === t && 0 > 1 / t ? "-0" : t + ""
          }! function(e, n) {
            var t, r, i;
            if (!Fn.test(n)) throw Error(wn + "number");
            for (e.s = "-" == n.charAt(0) ? (n = n.slice(1), -1) : 1, (t = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (r = n.search(/e/i)) > 0 ? (0 > t && (t = r), t += +n.slice(r + 1), n = n.substring(0, r)) : 0 > t && (t = n.length), i = n.length, r = 0; i > r && "0" == n.charAt(r);) ++r;
            if (r == i) e.c = [e.e = 0];
            else {
              for (; i > 0 && "0" == n.charAt(--i););
              for (e.e = t - r - 1, e.c = [], t = 0; i >= r;) e.c[t++] = +n.charAt(r++)
            }
          }(r, t)
        }
        r.constructor = n
      }
      return n.prototype = Sn, n.DP = 20, n.RM = 1, n.NE = -7, n.PE = 21, n.strict = !1, n.roundDown = 0, n.roundHalfUp = 1, n.roundHalfEven = 2, n.roundUp = 3, n
    }();
    const Hn = Rn;
    var Nn = Math.pow,
      In = (e => (e.FIAT = "FIAT", e.CRYPTO = "CRYPTO", e.PERCENT = "PERCENT", e))(In || {});
    const _n = ({
      type: e,
      amount: n,
      locale: t,
      currency: r,
      maxSignificantDecimals: i,
      tinyThreshold: o,
      compact: a
    }) => {
      if (null == n || "" === n) return "";
      const {
        prefix: s,
        formattedAmount: l,
        suffix: u
      } = function({
        type: e,
        amount: n,
        locale: t,
        currency: r,
        maxSignificantDecimals: i,
        tinyThreshold: o,
        compact: a
      }) {
        const s = o ?? ("CRYPTO" === e ? 4 : 2),
          l = i ?? ("CRYPTO" === e ? 4 : 2),
          u = ((e, n) => {
            const t = new Hn(e).toFixed(),
              [r, i] = t.split(".");
            if (!i) return e;
            const o = i.split(/[1-9]/, 1).pop().length;
            if (!o) {
              const t = e.toString().split(".");
              return t[1] = t[1].substring(0, n), parseFloat(t.join("."))
            }
            const a = i.slice(0, o + 1),
              s = i.slice(o + 1, o + n);
            return parseFloat(r + "." + a + s)
          })(+n, l),
          c = Number.isInteger(+u),
          f = Math.abs(u) < 1 / Nn(10, s) && 0 !== Math.abs(u),
          h = "PERCENT" === e ? u / 100 : u;
        let d = {
          signDisplay: "auto",
          style: "currency",
          currency: r,
          currencyDisplay: "symbol",
          maximumFractionDigits: l,
          minimumFractionDigits: l,
          useGrouping: !0,
          roundingMode: "trunc",
          notation: a ? "compact" : void 0
        };
        switch (e) {
          case "CRYPTO":
            d = {
              signDisplay: "auto",
              style: "decimal",
              maximumFractionDigits: c ? 0 : l,
              useGrouping: !0,
              roundingMode: "trunc",
              notation: a ? "compact" : void 0
            };
            break;
          case "PERCENT":
            d = {
              signDisplay: "always",
              style: "percent",
              maximumFractionDigits: l,
              minimumFractionDigits: l,
              useGrouping: !0,
              roundingMode: "trunc"
            }
        }
        const p = new Intl.NumberFormat(t, d).formatToParts(f ? 1 / Nn(10, s) : +h);
        let g = f ? "<" : "",
          A = "",
          m = "";
        return p.forEach(n => {
          "currency" === n.type ? "FIAT" !== e || m.length ? A = " " + n.value : g += n.value : ["integer", "fraction", "decimal", "group"].includes(n.type) ? m += n.value : "plusSign" === n.type || "minusSign" === n.type ? g += n.value : "percentSign" === n.type ? A = n.value : "compact" === n.type && (A += n.value)
        }), "CRYPTO" === e && r && !A.includes(r) && (A += " " + r), {
          prefix: g,
          formattedAmount: m,
          strippedAmount: u.toString(),
          suffix: A
        }
      }({
        type: e,
        amount: n,
        locale: t,
        currency: r,
        maxSignificantDecimals: i,
        tinyThreshold: o,
        compact: a
      });
      return `${s}${l}${u}`
    };
    var jn = Object.defineProperty,
      On = Object.defineProperties,
      Pn = Object.getOwnPropertyDescriptors,
      Dn = Object.getOwnPropertySymbols,
      Vn = {}.hasOwnProperty,
      Wn = {}.propertyIsEnumerable,
      Zn = (e, n, t) => n in e ? jn(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }) : e[n] = t,
      Un = (e, n) => {
        for (var t in n || (n = {})) Vn.call(n, t) && Zn(e, t, n[t]);
        if (Dn)
          for (var t of Dn(n)) Wn.call(n, t) && Zn(e, t, n[t]);
        return e
      },
      $n = (e, n) => On(e, Pn(n));

    function Gn() {
      const e = document.getElementById("in-page-channel-node-id");
      if (!e) return null;
      const n = e.getAttribute("data-channel-name");
      return n ? new vn(n) : null
    }

    function zn(e, n) {
      return ((e, n, t) => new Promise((n, r) => {
        var i = e => {
            try {
              a(t.next(e))
            } catch (e) {
              r(e)
            }
          },
          o = e => {
            try {
              a(t.throw(e))
            } catch (e) {
              r(e)
            }
          },
          a = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
        a((t = t.apply(e, null)).next())
      }))(this, 0, function*() {
        try {
          const t = Gn();
          if (!t) return;
          yield t.emit(y.TRACK_ANALYTICS, {
            analyticsData: {
              event: e,
              props: $n(Un({}, n), {
                pageViewSource: e
              })
            }
          })
        } catch (e) {
          Me.error("Token Scanner: Failed to track analytics:", e)
        }
      })
    }

    function Yn(e) {
      return null === e ? "N/A" : _n({
        type: In.FIAT,
        amount: e,
        locale: "en-US",
        currency: "USD",
        maxSignificantDecimals: 2
      })
    }

    function qn(e) {
      return null === e ? "N/A" : _n({
        type: In.PERCENT,
        amount: e,
        locale: "en-US",
        maxSignificantDecimals: 2
      })
    }

    function Kn(e) {
      return null === e ? "N/A" : _n({
        type: In.FIAT,
        amount: e,
        locale: "en-US",
        currency: "USD",
        compact: !0,
        maxSignificantDecimals: 2
      })
    }

    function Xn(e) {
      return null === e ? "N/A" : _n({
        type: In.FIAT,
        amount: e,
        locale: "en-US",
        currency: "USD",
        compact: !0,
        maxSignificantDecimals: 2
      })
    }
    var Qn = (e, n, t) => new Promise((r, i) => {
      var o = e => {
          try {
            s(t.next(e))
          } catch (e) {
            i(e)
          }
        },
        a = e => {
          try {
            s(t.throw(e))
          } catch (e) {
            i(e)
          }
        },
        s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
      s((t = t.apply(e, n)).next())
    });
    const Jn = new Set,
      et = new Set,
      nt = new Map;
    let tt = new WeakSet,
      rt = null,
      it = !1;

    function ot(e) {
      return nt.get(e)
    }

    function at(e) {
      const n = [],
        t = /\$([A-Z0-9]{2,})\b/g;
      let r;
      for (; null !== (r = t.exec(e));) {
        const e = r[1].toUpperCase();
        /^\d+$/.test(e) || et.has(e) || n.push({
          symbol: e,
          index: r.index,
          length: r[0].length
        })
      }
      return n
    }

    function st(e) {
      return Qn(this, null, function*() {
        const n = new Map,
          t = e.filter(e => Jn.has(e) ? (n.set(e, !0), !1) : !et.has(e) || (n.set(e, !1), !1));
        if (0 === t.length) return n;
        try {
          const e = Gn();
          if (!e) return t.forEach(e => n.set(e, !1)), n;
          Me.debug(`Token Scanner: Batch validating ${t.length} symbols:`, t);
          const r = yield e.emit(y.GET_TOKEN_BASIC_INFO, {
            symbols: t
          });
          if (r && r.success && r.data && Array.isArray(r.data)) {
            const e = new Set;
            r.data.forEach(t => {
              const r = t.symbol.toUpperCase();
              Jn.add(r), e.add(r), nt.set(r, {
                logo: t.logo,
                price: t.price,
                blockchainId: t.blockchainId,
                name: t.name,
                assetId: t.assetId,
                key: t.key,
                networkName: t.networkName
              }), n.set(r, !0)
            }), t.forEach(t => {
              e.has(t) || (et.add(t), n.set(t, !1))
            }), Me.debug(`Token Scanner: Batch validation complete. Valid: ${e.size}, Failed: ${t.length-e.size}`)
          } else t.forEach(e => {
            et.add(e), n.set(e, !1)
          })
        } catch (e) {
          Me.error("Token Scanner: Failed to batch validate symbols:", e), t.forEach(e => {
            et.add(e), n.set(e, !1)
          })
        }
        return n
      })
    }

    function lt(e) {
      return Qn(this, null, function*() {
        var n;
        return null != (n = (yield st([e])).get(e)) && n
      })
    }

    function ut(e) {
      var n;
      const t = document.createElement("span");
      t.className = "trust-token-highlight", t.setAttribute("data-token-symbol", e);
      const r = nt.get(e),
        i = r?.logo,
        o = r?.blockchainId ? function(e) {
          return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${e}/info/logo.png`
        }(r.blockchainId) : "/",
        a = Yn(null != (n = r?.price) ? n : null),
        s = document.createElement("div");
      s.className = "trust-token-logo-container";
      const l = document.createElement("img");
      l.className = "trust-token-main-logo", l.src = i ?? "/", l.alt = "Token logo", l.width = 16, l.height = 16, l.onerror = () => {
        l.src = "/"
      };
      const u = document.createElement("img");
      u.className = "trust-token-blockchain-logo", u.src = o, u.alt = "Blockchain", u.width = 4, u.height = 4, u.onerror = () => {
        u.src = "/"
      }, s.appendChild(l), s.appendChild(u);
      const c = document.createElement("span");
      c.className = "trust-token-name", c.textContent = e + " · ";
      const f = document.createElement("span");
      return f.className = "trust-token-price-text", f.textContent = a, t.appendChild(s), t.appendChild(c), t.appendChild(f), t.addEventListener("click", e => {
        e.preventDefault(), e.stopPropagation()
      }), t
    }

    function ct() {
      if (!it) {
        it = !0;
        try {
          const e = document.querySelectorAll('[data-testid="tweetText"], [data-testid="card.layoutLarge.detail"], article [lang]');
          if (0 === e.length) return void(it = !1);
          const n = [];
          e.forEach(e => {
            const t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
              acceptNode: e => {
                const n = e.parentElement;
                return n && ("SCRIPT" === n.tagName || "STYLE" === n.tagName) || n?.classList.contains("trust-token-highlight") || n?.closest(".trust-token-highlight") || n?.closest(".trust-token-popup") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
              }
            });
            let r;
            for (; r = t.nextNode();) r.textContent && r.textContent.trim().length > 0 && n.push(r)
          }), Me.debug("Token Scanner: Found", n.length, "text nodes to process in", e.length, "tweet containers");
          const t = new Set;
          n.forEach(e => {
            at(e.textContent || "").forEach(e => t.add(e.symbol))
          }), Me.debug(`Token Scanner: Found ${t.size} unique symbols to validate`), t.size > 0 && st(Array.from(t)).then(() => {
            n.forEach(e => {
              (function(e) {
                return Qn(this, null, function*() {
                  var n, t;
                  if (tt.has(e) || null != (n = e.parentElement) && n.classList.contains("trust-token-highlight") || null != (t = e.parentElement) && t.closest(".trust-token-highlight")) return;
                  const r = at(e.textContent || "");
                  if (0 === r.length) return void tt.add(e);
                  tt.add(e), r.sort((e, n) => n.index - e.index);
                  let i = e;
                  for (let e = 0; e < r.length; e++) {
                    const n = r[e],
                      t = e === r.length - 1,
                      o = i.textContent || "",
                      a = o.substring(0, n.index),
                      s = o.substring(n.index, n.index + n.length),
                      l = o.substring(n.index + n.length),
                      u = document.createTextNode(s),
                      c = i.parentNode;
                    if (c) {
                      if (t && a) {
                        const e = document.createTextNode(l);
                        c.insertBefore(e, i.nextSibling), c.insertBefore(u, e), i.textContent = a, tt.add(e)
                      } else {
                        const e = document.createTextNode(a),
                          n = document.createTextNode(l);
                        c.insertBefore(n, i), c.insertBefore(u, n), c.insertBefore(e, u), c.removeChild(i), tt.add(e), tt.add(n), i = e
                      }
                      lt(n.symbol).then(e => {
                        if (e && u.parentNode) {
                          const e = ut(n.symbol);
                          u.parentNode.replaceChild(e, u)
                        }
                      })
                    }
                  }
                })
              })(e).catch(e => {
                Me.error("Token Scanner: Error processing text node:", e)
              })
            })
          })
        } finally {
          it = !1
        }
      }
    }
    var ft = i(74848),
      ht = i(65848),
      dt = function(e, n) {
        return (dt = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, n) {
            e.__proto__ = n
          } || function(e, n) {
            for (var t in n)({}).hasOwnProperty.call(n, t) && (e[t] = n[t])
          })(e, n)
      };

    function pt(e, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + n + " is not a constructor or null");

      function t() {
        this.constructor = e
      }
      dt(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
    }
    var gt = function() {
      return gt = Object.assign || function(e) {
        for (var n, t = 1, r = arguments.length; r > t; t++)
          for (var i in n = arguments[t])({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e
      }, gt.apply(this, arguments)
    };

    function At(e, n) {
      var t = {};
      for (var r in e)({}).hasOwnProperty.call(e, r) && 0 > n.indexOf(r) && (t[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > n.indexOf(r[i]) && {}.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]])
      }
      return t
    }

    function mt(e, n, t) {
      if (t || 2 === arguments.length)
        for (var r, i = 0, o = n.length; o > i; i++)(r || !(i in n)) && (r || (r = [].slice.call(n, 0, i)), r[i] = n[i]);
      return e.concat(r || [].slice.call(n))
    }

    function vt(e, n) {
      var t = n && n.cache ? n.cache : Lt,
        r = n && n.serializer ? n.serializer : xt;
      return (n && n.strategy ? n.strategy : kt)(e, {
        cache: t,
        serializer: r
      })
    }

    function bt(e, n, t, r) {
      var i = function(e) {
          return null == e || "number" == typeof e || "boolean" == typeof e
        }(r) ? r : t(r),
        o = n.get(i);
      return typeof o > "u" && (o = e.call(this, r), n.set(i, o)), o
    }

    function Ct(e, n, t) {
      var r = [].slice.call(arguments, 3),
        i = t(r),
        o = n.get(i);
      return typeof o > "u" && (o = e.apply(this, r), n.set(i, o)), o
    }

    function yt(e, n, t, r, i) {
      return t.bind(n, e, r, i)
    }

    function kt(e, n) {
      return yt(e, this, 1 === e.length ? bt : Ct, n.cache.create(), n.serializer)
    }
    "function" == typeof SuppressedError && SuppressedError;
    var wt, Et, Bt, xt = function() {
        return JSON.stringify(arguments)
      },
      St = function() {
        function e() {
          this.cache = Object.create(null)
        }
        return e.prototype.get = function(e) {
          return this.cache[e]
        }, e.prototype.set = function(e, n) {
          this.cache[e] = n
        }, e
      }(),
      Lt = {
        create: function() {
          return new St
        }
      },
      Ft = {
        variadic: function(e, n) {
          return yt(e, this, Ct, n.cache.create(), n.serializer)
        },
        monadic: function(e, n) {
          return yt(e, this, bt, n.cache.create(), n.serializer)
        }
      };

    function Tt(e) {
      return e.type === Et.literal
    }

    function Mt(e) {
      return e.type === Et.argument
    }

    function Rt(e) {
      return e.type === Et.number
    }

    function Ht(e) {
      return e.type === Et.date
    }

    function Nt(e) {
      return e.type === Et.time
    }

    function It(e) {
      return e.type === Et.select
    }

    function _t(e) {
      return e.type === Et.plural
    }

    function jt(e) {
      return e.type === Et.pound
    }

    function Ot(e) {
      return e.type === Et.tag
    }

    function Pt(e) {
      return !(!e || "object" != typeof e || e.type !== Bt.number)
    }

    function Dt(e) {
      return !(!e || "object" != typeof e || e.type !== Bt.dateTime)
    }! function(e) {
      e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
    }(wt || (wt = {})),
    function(e) {
      e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
    }(Et || (Et = {})),
    function(e) {
      e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
    }(Bt || (Bt = {}));
    var Vt = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
      Wt = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

    function Zt(e) {
      var n = {};
      return e.replace(Wt, function(e) {
        var t = e.length;
        switch (e[0]) {
          case "G":
            n.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
            break;
          case "y":
            n.year = 2 === t ? "2-digit" : "numeric";
            break;
          case "Y":
          case "u":
          case "U":
          case "r":
            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
          case "q":
          case "Q":
            throw new RangeError("`q/Q` (quarter) patterns are not supported");
          case "M":
          case "L":
            n.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
            break;
          case "w":
          case "W":
            throw new RangeError("`w/W` (week) patterns are not supported");
          case "d":
            n.day = ["numeric", "2-digit"][t - 1];
            break;
          case "D":
          case "F":
          case "g":
            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
          case "E":
            n.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
            break;
          case "e":
            if (4 > t) throw new RangeError("`e..eee` (weekday) patterns are not supported");
            n.weekday = ["short", "long", "narrow", "short"][t - 4];
            break;
          case "c":
            if (4 > t) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
            n.weekday = ["short", "long", "narrow", "short"][t - 4];
            break;
          case "a":
            n.hour12 = !0;
            break;
          case "b":
          case "B":
            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
          case "h":
            n.hourCycle = "h12", n.hour = ["numeric", "2-digit"][t - 1];
            break;
          case "H":
            n.hourCycle = "h23", n.hour = ["numeric", "2-digit"][t - 1];
            break;
          case "K":
            n.hourCycle = "h11", n.hour = ["numeric", "2-digit"][t - 1];
            break;
          case "k":
            n.hourCycle = "h24", n.hour = ["numeric", "2-digit"][t - 1];
            break;
          case "j":
          case "J":
          case "C":
            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
          case "m":
            n.minute = ["numeric", "2-digit"][t - 1];
            break;
          case "s":
            n.second = ["numeric", "2-digit"][t - 1];
            break;
          case "S":
          case "A":
            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
          case "z":
            n.timeZoneName = 4 > t ? "short" : "long";
            break;
          case "Z":
          case "O":
          case "v":
          case "V":
          case "X":
          case "x":
            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
        }
        return ""
      }), n
    }
    var Ut = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

    function $t(e) {
      return e.replace(/^(.*?)-/, "")
    }
    var Gt = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
      zt = /^(@+)?(\+|#+)?[rs]?$/g,
      Yt = /(\*)(0+)|(#+)(0+)|(0+)/g,
      qt = /^(0+)$/;

    function Kt(e) {
      var n = {};
      return "r" === e[e.length - 1] ? n.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (n.roundingPriority = "lessPrecision"), e.replace(zt, function(e, t, r) {
        return "string" != typeof r ? (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length) : "+" === r ? n.minimumSignificantDigits = t.length : "#" === t[0] ? n.maximumSignificantDigits = t.length : (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length + ("string" == typeof r ? r.length : 0)), ""
      }), n
    }

    function Xt(e) {
      switch (e) {
        case "sign-auto":
          return {
            signDisplay: "auto"
          };
        case "sign-accounting":
        case "()":
          return {
            currencySign: "accounting"
          };
        case "sign-always":
        case "+!":
          return {
            signDisplay: "always"
          };
        case "sign-accounting-always":
        case "()!":
          return {
            signDisplay: "always", currencySign: "accounting"
          };
        case "sign-except-zero":
        case "+?":
          return {
            signDisplay: "exceptZero"
          };
        case "sign-accounting-except-zero":
        case "()?":
          return {
            signDisplay: "exceptZero", currencySign: "accounting"
          };
        case "sign-never":
        case "+_":
          return {
            signDisplay: "never"
          }
      }
    }

    function Qt(e) {
      var n;
      if ("E" === e[0] && "E" === e[1] ? (n = {
          notation: "engineering"
        }, e = e.slice(2)) : "E" === e[0] && (n = {
          notation: "scientific"
        }, e = e.slice(1)), n) {
        var t = e.slice(0, 2);
        if ("+!" === t ? (n.signDisplay = "always", e = e.slice(2)) : "+?" === t && (n.signDisplay = "exceptZero", e = e.slice(2)), !qt.test(e)) throw Error("Malformed concise eng/scientific notation");
        n.minimumIntegerDigits = e.length
      }
      return n
    }

    function Jt(e) {
      return Xt(e) || {}
    }

    function er(e) {
      for (var n = {}, t = 0, r = e; t < r.length; t++) {
        var i = r[t];
        switch (i.stem) {
          case "percent":
          case "%":
            n.style = "percent";
            continue;
          case "%x100":
            n.style = "percent", n.scale = 100;
            continue;
          case "currency":
            n.style = "currency", n.currency = i.options[0];
            continue;
          case "group-off":
          case ",_":
            n.useGrouping = !1;
            continue;
          case "precision-integer":
          case ".":
            n.maximumFractionDigits = 0;
            continue;
          case "measure-unit":
          case "unit":
            n.style = "unit", n.unit = $t(i.options[0]);
            continue;
          case "compact-short":
          case "K":
            n.notation = "compact", n.compactDisplay = "short";
            continue;
          case "compact-long":
          case "KK":
            n.notation = "compact", n.compactDisplay = "long";
            continue;
          case "scientific":
            n = gt(gt(gt({}, n), {
              notation: "scientific"
            }), i.options.reduce(function(e, n) {
              return gt(gt({}, e), Jt(n))
            }, {}));
            continue;
          case "engineering":
            n = gt(gt(gt({}, n), {
              notation: "engineering"
            }), i.options.reduce(function(e, n) {
              return gt(gt({}, e), Jt(n))
            }, {}));
            continue;
          case "notation-simple":
            n.notation = "standard";
            continue;
          case "unit-width-narrow":
            n.currencyDisplay = "narrowSymbol", n.unitDisplay = "narrow";
            continue;
          case "unit-width-short":
            n.currencyDisplay = "code", n.unitDisplay = "short";
            continue;
          case "unit-width-full-name":
            n.currencyDisplay = "name", n.unitDisplay = "long";
            continue;
          case "unit-width-iso-code":
            n.currencyDisplay = "symbol";
            continue;
          case "scale":
            n.scale = parseFloat(i.options[0]);
            continue;
          case "rounding-mode-floor":
            n.roundingMode = "floor";
            continue;
          case "rounding-mode-ceiling":
            n.roundingMode = "ceil";
            continue;
          case "rounding-mode-down":
            n.roundingMode = "trunc";
            continue;
          case "rounding-mode-up":
            n.roundingMode = "expand";
            continue;
          case "rounding-mode-half-even":
            n.roundingMode = "halfEven";
            continue;
          case "rounding-mode-half-down":
            n.roundingMode = "halfTrunc";
            continue;
          case "rounding-mode-half-up":
            n.roundingMode = "halfExpand";
            continue;
          case "integer-width":
            if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
            i.options[0].replace(Yt, function(e, t, r, i, o, a) {
              if (t) n.minimumIntegerDigits = r.length;
              else {
                if (i && o) throw Error("We currently do not support maximum integer digits");
                if (a) throw Error("We currently do not support exact integer digits")
              }
              return ""
            });
            continue
        }
        if (qt.test(i.stem)) n.minimumIntegerDigits = i.stem.length;
        else if (Gt.test(i.stem)) {
          if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
          i.stem.replace(Gt, function(e, t, r, i, o, a) {
            return "*" === r ? n.minimumFractionDigits = t.length : i && "#" === i[0] ? n.maximumFractionDigits = i.length : o && a ? (n.minimumFractionDigits = o.length, n.maximumFractionDigits = o.length + a.length) : (n.minimumFractionDigits = t.length, n.maximumFractionDigits = t.length), ""
          });
          var o = i.options[0];
          "w" === o ? n = gt(gt({}, n), {
            trailingZeroDisplay: "stripIfInteger"
          }) : o && (n = gt(gt({}, n), Kt(o)))
        } else if (zt.test(i.stem)) n = gt(gt({}, n), Kt(i.stem));
        else {
          var a = Xt(i.stem);
          a && (n = gt(gt({}, n), a));
          var s = Qt(i.stem);
          s && (n = gt(gt({}, n), s))
        }
      }
      return n
    }
    var nr = {
      "001": ["H", "h"],
      419: ["h", "H", "hB", "hb"],
      AC: ["H", "h", "hb", "hB"],
      AD: ["H", "hB"],
      AE: ["h", "hB", "hb", "H"],
      AF: ["H", "hb", "hB", "h"],
      AG: ["h", "hb", "H", "hB"],
      AI: ["H", "h", "hb", "hB"],
      AL: ["h", "H", "hB"],
      AM: ["H", "hB"],
      AO: ["H", "hB"],
      AR: ["h", "H", "hB", "hb"],
      AS: ["h", "H"],
      AT: ["H", "hB"],
      AU: ["h", "hb", "H", "hB"],
      AW: ["H", "hB"],
      AX: ["H"],
      AZ: ["H", "hB", "h"],
      BA: ["H", "hB", "h"],
      BB: ["h", "hb", "H", "hB"],
      BD: ["h", "hB", "H"],
      BE: ["H", "hB"],
      BF: ["H", "hB"],
      BG: ["H", "hB", "h"],
      BH: ["h", "hB", "hb", "H"],
      BI: ["H", "h"],
      BJ: ["H", "hB"],
      BL: ["H", "hB"],
      BM: ["h", "hb", "H", "hB"],
      BN: ["hb", "hB", "h", "H"],
      BO: ["h", "H", "hB", "hb"],
      BQ: ["H"],
      BR: ["H", "hB"],
      BS: ["h", "hb", "H", "hB"],
      BT: ["h", "H"],
      BW: ["H", "h", "hb", "hB"],
      BY: ["H", "h"],
      BZ: ["H", "h", "hb", "hB"],
      CA: ["h", "hb", "H", "hB"],
      CC: ["H", "h", "hb", "hB"],
      CD: ["hB", "H"],
      CF: ["H", "h", "hB"],
      CG: ["H", "hB"],
      CH: ["H", "hB", "h"],
      CI: ["H", "hB"],
      CK: ["H", "h", "hb", "hB"],
      CL: ["h", "H", "hB", "hb"],
      CM: ["H", "h", "hB"],
      CN: ["H", "hB", "hb", "h"],
      CO: ["h", "H", "hB", "hb"],
      CP: ["H"],
      CR: ["h", "H", "hB", "hb"],
      CU: ["h", "H", "hB", "hb"],
      CV: ["H", "hB"],
      CW: ["H", "hB"],
      CX: ["H", "h", "hb", "hB"],
      CY: ["h", "H", "hb", "hB"],
      CZ: ["H"],
      DE: ["H", "hB"],
      DG: ["H", "h", "hb", "hB"],
      DJ: ["h", "H"],
      DK: ["H"],
      DM: ["h", "hb", "H", "hB"],
      DO: ["h", "H", "hB", "hb"],
      DZ: ["h", "hB", "hb", "H"],
      EA: ["H", "h", "hB", "hb"],
      EC: ["h", "H", "hB", "hb"],
      EE: ["H", "hB"],
      EG: ["h", "hB", "hb", "H"],
      EH: ["h", "hB", "hb", "H"],
      ER: ["h", "H"],
      ES: ["H", "hB", "h", "hb"],
      ET: ["hB", "hb", "h", "H"],
      FI: ["H"],
      FJ: ["h", "hb", "H", "hB"],
      FK: ["H", "h", "hb", "hB"],
      FM: ["h", "hb", "H", "hB"],
      FO: ["H", "h"],
      FR: ["H", "hB"],
      GA: ["H", "hB"],
      GB: ["H", "h", "hb", "hB"],
      GD: ["h", "hb", "H", "hB"],
      GE: ["H", "hB", "h"],
      GF: ["H", "hB"],
      GG: ["H", "h", "hb", "hB"],
      GH: ["h", "H"],
      GI: ["H", "h", "hb", "hB"],
      GL: ["H", "h"],
      GM: ["h", "hb", "H", "hB"],
      GN: ["H", "hB"],
      GP: ["H", "hB"],
      GQ: ["H", "hB", "h", "hb"],
      GR: ["h", "H", "hb", "hB"],
      GT: ["h", "H", "hB", "hb"],
      GU: ["h", "hb", "H", "hB"],
      GW: ["H", "hB"],
      GY: ["h", "hb", "H", "hB"],
      HK: ["h", "hB", "hb", "H"],
      HN: ["h", "H", "hB", "hb"],
      HR: ["H", "hB"],
      HU: ["H", "h"],
      IC: ["H", "h", "hB", "hb"],
      ID: ["H"],
      IE: ["H", "h", "hb", "hB"],
      IL: ["H", "hB"],
      IM: ["H", "h", "hb", "hB"],
      IN: ["h", "H"],
      IO: ["H", "h", "hb", "hB"],
      IQ: ["h", "hB", "hb", "H"],
      IR: ["hB", "H"],
      IS: ["H"],
      IT: ["H", "hB"],
      JE: ["H", "h", "hb", "hB"],
      JM: ["h", "hb", "H", "hB"],
      JO: ["h", "hB", "hb", "H"],
      JP: ["H", "K", "h"],
      KE: ["hB", "hb", "H", "h"],
      KG: ["H", "h", "hB", "hb"],
      KH: ["hB", "h", "H", "hb"],
      KI: ["h", "hb", "H", "hB"],
      KM: ["H", "h", "hB", "hb"],
      KN: ["h", "hb", "H", "hB"],
      KP: ["h", "H", "hB", "hb"],
      KR: ["h", "H", "hB", "hb"],
      KW: ["h", "hB", "hb", "H"],
      KY: ["h", "hb", "H", "hB"],
      KZ: ["H", "hB"],
      LA: ["H", "hb", "hB", "h"],
      LB: ["h", "hB", "hb", "H"],
      LC: ["h", "hb", "H", "hB"],
      LI: ["H", "hB", "h"],
      LK: ["H", "h", "hB", "hb"],
      LR: ["h", "hb", "H", "hB"],
      LS: ["h", "H"],
      LT: ["H", "h", "hb", "hB"],
      LU: ["H", "h", "hB"],
      LV: ["H", "hB", "hb", "h"],
      LY: ["h", "hB", "hb", "H"],
      MA: ["H", "h", "hB", "hb"],
      MC: ["H", "hB"],
      MD: ["H", "hB"],
      ME: ["H", "hB", "h"],
      MF: ["H", "hB"],
      MG: ["H", "h"],
      MH: ["h", "hb", "H", "hB"],
      MK: ["H", "h", "hb", "hB"],
      ML: ["H"],
      MM: ["hB", "hb", "H", "h"],
      MN: ["H", "h", "hb", "hB"],
      MO: ["h", "hB", "hb", "H"],
      MP: ["h", "hb", "H", "hB"],
      MQ: ["H", "hB"],
      MR: ["h", "hB", "hb", "H"],
      MS: ["H", "h", "hb", "hB"],
      MT: ["H", "h"],
      MU: ["H", "h"],
      MV: ["H", "h"],
      MW: ["h", "hb", "H", "hB"],
      MX: ["h", "H", "hB", "hb"],
      MY: ["hb", "hB", "h", "H"],
      MZ: ["H", "hB"],
      NA: ["h", "H", "hB", "hb"],
      NC: ["H", "hB"],
      NE: ["H"],
      NF: ["H", "h", "hb", "hB"],
      NG: ["H", "h", "hb", "hB"],
      NI: ["h", "H", "hB", "hb"],
      NL: ["H", "hB"],
      NO: ["H", "h"],
      NP: ["H", "h", "hB"],
      NR: ["H", "h", "hb", "hB"],
      NU: ["H", "h", "hb", "hB"],
      NZ: ["h", "hb", "H", "hB"],
      OM: ["h", "hB", "hb", "H"],
      PA: ["h", "H", "hB", "hb"],
      PE: ["h", "H", "hB", "hb"],
      PF: ["H", "h", "hB"],
      PG: ["h", "H"],
      PH: ["h", "hB", "hb", "H"],
      PK: ["h", "hB", "H"],
      PL: ["H", "h"],
      PM: ["H", "hB"],
      PN: ["H", "h", "hb", "hB"],
      PR: ["h", "H", "hB", "hb"],
      PS: ["h", "hB", "hb", "H"],
      PT: ["H", "hB"],
      PW: ["h", "H"],
      PY: ["h", "H", "hB", "hb"],
      QA: ["h", "hB", "hb", "H"],
      RE: ["H", "hB"],
      RO: ["H", "hB"],
      RS: ["H", "hB", "h"],
      RU: ["H"],
      RW: ["H", "h"],
      SA: ["h", "hB", "hb", "H"],
      SB: ["h", "hb", "H", "hB"],
      SC: ["H", "h", "hB"],
      SD: ["h", "hB", "hb", "H"],
      SE: ["H"],
      SG: ["h", "hb", "H", "hB"],
      SH: ["H", "h", "hb", "hB"],
      SI: ["H", "hB"],
      SJ: ["H"],
      SK: ["H"],
      SL: ["h", "hb", "H", "hB"],
      SM: ["H", "h", "hB"],
      SN: ["H", "h", "hB"],
      SO: ["h", "H"],
      SR: ["H", "hB"],
      SS: ["h", "hb", "H", "hB"],
      ST: ["H", "hB"],
      SV: ["h", "H", "hB", "hb"],
      SX: ["H", "h", "hb", "hB"],
      SY: ["h", "hB", "hb", "H"],
      SZ: ["h", "hb", "H", "hB"],
      TA: ["H", "h", "hb", "hB"],
      TC: ["h", "hb", "H", "hB"],
      TD: ["h", "H", "hB"],
      TF: ["H", "h", "hB"],
      TG: ["H", "hB"],
      TH: ["H", "h"],
      TJ: ["H", "h"],
      TL: ["H", "hB", "hb", "h"],
      TM: ["H", "h"],
      TN: ["h", "hB", "hb", "H"],
      TO: ["h", "H"],
      TR: ["H", "hB"],
      TT: ["h", "hb", "H", "hB"],
      TW: ["hB", "hb", "h", "H"],
      TZ: ["hB", "hb", "H", "h"],
      UA: ["H", "hB", "h"],
      UG: ["hB", "hb", "H", "h"],
      UM: ["h", "hb", "H", "hB"],
      US: ["h", "hb", "H", "hB"],
      UY: ["h", "H", "hB", "hb"],
      UZ: ["H", "hB", "h"],
      VA: ["H", "h", "hB"],
      VC: ["h", "hb", "H", "hB"],
      VE: ["h", "H", "hB", "hb"],
      VG: ["h", "hb", "H", "hB"],
      VI: ["h", "hb", "H", "hB"],
      VN: ["H", "h"],
      VU: ["h", "H"],
      WF: ["H", "hB"],
      WS: ["h", "H"],
      XK: ["H", "hB", "h"],
      YE: ["h", "hB", "hb", "H"],
      YT: ["H", "hB"],
      ZA: ["H", "h", "hb", "hB"],
      ZM: ["h", "hb", "H", "hB"],
      ZW: ["H", "h"],
      "af-ZA": ["H", "h", "hB", "hb"],
      "ar-001": ["h", "hB", "hb", "H"],
      "ca-ES": ["H", "h", "hB"],
      "en-001": ["h", "hb", "H", "hB"],
      "en-HK": ["h", "hb", "H", "hB"],
      "en-IL": ["H", "h", "hb", "hB"],
      "en-MY": ["h", "hb", "H", "hB"],
      "es-BR": ["H", "h", "hB", "hb"],
      "es-ES": ["H", "h", "hB", "hb"],
      "es-GQ": ["H", "h", "hB", "hb"],
      "fr-CA": ["H", "h", "hB"],
      "gl-ES": ["H", "h", "hB"],
      "gu-IN": ["hB", "hb", "h", "H"],
      "hi-IN": ["hB", "h", "H"],
      "it-CH": ["H", "h", "hB"],
      "it-IT": ["H", "h", "hB"],
      "kn-IN": ["hB", "h", "H"],
      "ml-IN": ["hB", "h", "H"],
      "mr-IN": ["hB", "hb", "h", "H"],
      "pa-IN": ["hB", "hb", "h", "H"],
      "ta-IN": ["hB", "h", "hb", "H"],
      "te-IN": ["hB", "h", "H"],
      "zu-ZA": ["H", "hB", "hb", "h"]
    };

    function tr(e) {
      var n = e.hourCycle;
      if (void 0 === n && e.hourCycles && e.hourCycles.length && (n = e.hourCycles[0]), n) switch (n) {
        case "h24":
          return "k";
        case "h23":
          return "H";
        case "h12":
          return "h";
        case "h11":
          return "K";
        default:
          throw Error("Invalid hourCycle")
      }
      var t, r = e.language;
      return "root" !== r && (t = e.maximize().region), (nr[t || ""] || nr[r || ""] || nr["".concat(r, "-001")] || nr["001"])[0]
    }
    var rr, ir = RegExp("^".concat(Vt.source, "*")),
      or = RegExp("".concat(Vt.source, "*$"));

    function ar(e, n) {
      return {
        start: e,
        end: n
      }
    }
    var sr = !!"".startsWith && !0,
      lr = !!String.fromCodePoint,
      ur = !!Object.fromEntries,
      cr = !!"".codePointAt,
      fr = !!"".trimStart,
      hr = !!"".trimEnd,
      dr = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 9007199254740991 >= Math.abs(e)
      },
      pr = !0;
    try {
      pr = "a" === (null === (rr = kr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === rr ? void 0 : rr[0])
    } catch {
      pr = !1
    }
    var gr, Ar = sr ? function(e, n, t) {
        return e.startsWith(n, t)
      } : function(e, n, t) {
        return e.slice(t, t + n.length) === n
      },
      mr = lr ? String.fromCodePoint : function() {
        for (var e = [], n = 0; arguments.length > n; n++) e[n] = arguments[n];
        for (var t, r = "", i = e.length, o = 0; i > o;) {
          if ((t = e[o++]) > 1114111) throw RangeError(t + " is not a valid code point");
          r += 65536 > t ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
        }
        return r
      },
      vr = ur ? Object.fromEntries : function(e) {
        for (var n = {}, t = 0, r = e; t < r.length; t++) {
          var i = r[t],
            o = i[0],
            a = i[1];
          n[o] = a
        }
        return n
      },
      br = cr ? function(e, n) {
        return e.codePointAt(n)
      } : function(e, n) {
        var t = e.length;
        if (n >= 0 && t > n) {
          var r, i = e.charCodeAt(n);
          return 55296 > i || i > 56319 || n + 1 === t || 56320 > (r = e.charCodeAt(n + 1)) || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536
        }
      },
      Cr = fr ? function(e) {
        return e.trimStart()
      } : function(e) {
        return e.replace(ir, "")
      },
      yr = hr ? function(e) {
        return e.trimEnd()
      } : function(e) {
        return e.replace(or, "")
      };

    function kr(e, n) {
      return RegExp(e, n)
    }
    if (pr) {
      var wr = kr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
      gr = function(e, n) {
        var t;
        return wr.lastIndex = n, null !== (t = wr.exec(e)[1]) && void 0 !== t ? t : ""
      }
    } else gr = function(e, n) {
      for (var t = [];;) {
        var r = br(e, n);
        if (void 0 === r || Lr(r) || Fr(r)) break;
        t.push(r), n += 65536 > r ? 1 : 2
      }
      return mr.apply(void 0, t)
    };
    var Er, Br = function() {
      function e(e, n) {
        void 0 === n && (n = {}), this.message = e, this.position = {
          offset: 0,
          line: 1,
          column: 1
        }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons
      }
      return e.prototype.parse = function() {
        if (0 !== this.offset()) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1)
      }, e.prototype.parseMessage = function(e, n, t) {
        for (var r = []; !this.isEOF();) {
          var i = this.char();
          if (123 === i) {
            if ((o = this.parseArgument(e, t)).err) return o;
            r.push(o.val)
          } else {
            if (125 === i && e > 0) break;
            if (35 !== i || "plural" !== n && "selectordinal" !== n) {
              if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                if (t) break;
                return this.error(wt.UNMATCHED_CLOSING_TAG, ar(this.clonePosition(), this.clonePosition()))
              }
              if (60 === i && !this.ignoreTag && xr(this.peek() || 0)) {
                if ((o = this.parseTag(e, n)).err) return o;
                r.push(o.val)
              } else {
                var o;
                if ((o = this.parseLiteral(e, n)).err) return o;
                r.push(o.val)
              }
            } else {
              var a = this.clonePosition();
              this.bump(), r.push({
                type: Et.pound,
                location: ar(a, this.clonePosition())
              })
            }
          }
        }
        return {
          val: r,
          err: null
        }
      }, e.prototype.parseTag = function(e, n) {
        var t = this.clonePosition();
        this.bump();
        var r = this.parseTagName();
        if (this.bumpSpace(), this.bumpIf("/>")) return {
          val: {
            type: Et.literal,
            value: "<".concat(r, "/>"),
            location: ar(t, this.clonePosition())
          },
          err: null
        };
        if (this.bumpIf(">")) {
          var i = this.parseMessage(e + 1, n, !0);
          if (i.err) return i;
          var o = i.val,
            a = this.clonePosition();
          if (this.bumpIf("</")) {
            if (this.isEOF() || !xr(this.char())) return this.error(wt.INVALID_TAG, ar(a, this.clonePosition()));
            var s = this.clonePosition();
            return r !== this.parseTagName() ? this.error(wt.UNMATCHED_CLOSING_TAG, ar(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
              val: {
                type: Et.tag,
                value: r,
                children: o,
                location: ar(t, this.clonePosition())
              },
              err: null
            } : this.error(wt.INVALID_TAG, ar(a, this.clonePosition())))
          }
          return this.error(wt.UNCLOSED_TAG, ar(t, this.clonePosition()))
        }
        return this.error(wt.INVALID_TAG, ar(t, this.clonePosition()))
      }, e.prototype.parseTagName = function() {
        var e = this.offset();
        for (this.bump(); !this.isEOF() && Sr(this.char());) this.bump();
        return this.message.slice(e, this.offset())
      }, e.prototype.parseLiteral = function(e, n) {
        for (var t = this.clonePosition(), r = "";;) {
          var i = this.tryParseQuote(n);
          if (i) r += i;
          else {
            var o = this.tryParseUnquoted(e, n);
            if (o) r += o;
            else {
              var a = this.tryParseLeftAngleBracket();
              if (!a) break;
              r += a
            }
          }
        }
        var s = ar(t, this.clonePosition());
        return {
          val: {
            type: Et.literal,
            value: r,
            location: s
          },
          err: null
        }
      }, e.prototype.tryParseLeftAngleBracket = function() {
        return this.isEOF() || 60 !== this.char() || !this.ignoreTag && function(e) {
          return xr(e) || 47 === e
        }(this.peek() || 0) ? null : (this.bump(), "<")
      }, e.prototype.tryParseQuote = function(e) {
        if (this.isEOF() || 39 !== this.char()) return null;
        switch (this.peek()) {
          case 39:
            return this.bump(), this.bump(), "'";
          case 123:
          case 60:
          case 62:
          case 125:
            break;
          case 35:
            if ("plural" === e || "selectordinal" === e) break;
            return null;
          default:
            return null
        }
        this.bump();
        var n = [this.char()];
        for (this.bump(); !this.isEOF();) {
          var t = this.char();
          if (39 === t) {
            if (39 !== this.peek()) {
              this.bump();
              break
            }
            n.push(39), this.bump()
          } else n.push(t);
          this.bump()
        }
        return mr.apply(void 0, n)
      }, e.prototype.tryParseUnquoted = function(e, n) {
        if (this.isEOF()) return null;
        var t = this.char();
        return 60 === t || 123 === t || 35 === t && ("plural" === n || "selectordinal" === n) || 125 === t && e > 0 ? null : (this.bump(), mr(t))
      }, e.prototype.parseArgument = function(e, n) {
        var t = this.clonePosition();
        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(wt.EXPECT_ARGUMENT_CLOSING_BRACE, ar(t, this.clonePosition()));
        if (125 === this.char()) return this.bump(), this.error(wt.EMPTY_ARGUMENT, ar(t, this.clonePosition()));
        var r = this.parseIdentifierIfPossible().value;
        if (!r) return this.error(wt.MALFORMED_ARGUMENT, ar(t, this.clonePosition()));
        if (this.bumpSpace(), this.isEOF()) return this.error(wt.EXPECT_ARGUMENT_CLOSING_BRACE, ar(t, this.clonePosition()));
        switch (this.char()) {
          case 125:
            return this.bump(), {
              val: {
                type: Et.argument,
                value: r,
                location: ar(t, this.clonePosition())
              },
              err: null
            };
          case 44:
            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(wt.EXPECT_ARGUMENT_CLOSING_BRACE, ar(t, this.clonePosition())) : this.parseArgumentOptions(e, n, r, t);
          default:
            return this.error(wt.MALFORMED_ARGUMENT, ar(t, this.clonePosition()))
        }
      }, e.prototype.parseIdentifierIfPossible = function() {
        var e = this.clonePosition(),
          n = this.offset(),
          t = gr(this.message, n),
          r = n + t.length;
        return this.bumpTo(r), {
          value: t,
          location: ar(e, this.clonePosition())
        }
      }, e.prototype.parseArgumentOptions = function(e, n, t, r) {
        var i, o = this.clonePosition(),
          a = this.parseIdentifierIfPossible().value,
          s = this.clonePosition();
        switch (a) {
          case "":
            return this.error(wt.EXPECT_ARGUMENT_TYPE, ar(o, s));
          case "number":
          case "date":
          case "time":
            this.bumpSpace();
            var l = null;
            if (this.bumpIf(",")) {
              this.bumpSpace();
              var u = this.clonePosition();
              if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
              if (0 === (d = yr(m.val)).length) return this.error(wt.EXPECT_ARGUMENT_STYLE, ar(this.clonePosition(), this.clonePosition()));
              l = {
                style: d,
                styleLocation: ar(u, this.clonePosition())
              }
            }
            if ((v = this.tryParseArgumentClose(r)).err) return v;
            var c = ar(r, this.clonePosition());
            if (l && Ar(l?.style, "::", 0)) {
              var f = Cr(l.style.slice(2));
              if ("number" === a) return (m = this.parseNumberSkeletonFromString(f, l.styleLocation)).err ? m : {
                val: {
                  type: Et.number,
                  value: t,
                  location: c,
                  style: m.val
                },
                err: null
              };
              if (0 === f.length) return this.error(wt.EXPECT_DATE_TIME_SKELETON, c);
              var h = f;
              this.locale && (h = function(e, n) {
                for (var t = "", r = 0; r < e.length; r++) {
                  var i = e.charAt(r);
                  if ("j" === i) {
                    for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i;) o++, r++;
                    var a = 1 + (1 & o),
                      s = 2 > o ? 1 : 3 + (o >> 1),
                      l = tr(n);
                    for (("H" == l || "k" == l) && (s = 0); s-- > 0;) t += "a";
                    for (; a-- > 0;) t = l + t
                  } else t += "J" === i ? "H" : i
                }
                return t
              }(f, this.locale));
              var d = {
                type: Bt.dateTime,
                pattern: h,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Zt(h) : {}
              };
              return {
                val: {
                  type: "date" === a ? Et.date : Et.time,
                  value: t,
                  location: c,
                  style: d
                },
                err: null
              }
            }
            return {
              val: {
                type: "number" === a ? Et.number : "date" === a ? Et.date : Et.time,
                value: t,
                location: c,
                style: null !== (i = l?.style) && void 0 !== i ? i : null
              }, err: null
            };
          case "plural":
          case "selectordinal":
          case "select":
            var p = this.clonePosition();
            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(wt.EXPECT_SELECT_ARGUMENT_OPTIONS, ar(p, gt({}, p)));
            this.bumpSpace();
            var g = this.parseIdentifierIfPossible(),
              A = 0;
            if ("select" !== a && "offset" === g.value) {
              if (!this.bumpIf(":")) return this.error(wt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ar(this.clonePosition(), this.clonePosition()));
              var m;
              if (this.bumpSpace(), (m = this.tryParseDecimalInteger(wt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, wt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
              this.bumpSpace(), g = this.parseIdentifierIfPossible(), A = m.val
            }
            var v, b = this.tryParsePluralOrSelectOptions(e, a, n, g);
            if (b.err) return b;
            if ((v = this.tryParseArgumentClose(r)).err) return v;
            var C = ar(r, this.clonePosition());
            return "select" === a ? {
              val: {
                type: Et.select,
                value: t,
                options: vr(b.val),
                location: C
              },
              err: null
            } : {
              val: {
                type: Et.plural,
                value: t,
                options: vr(b.val),
                offset: A,
                pluralType: "plural" === a ? "cardinal" : "ordinal",
                location: C
              },
              err: null
            };
          default:
            return this.error(wt.INVALID_ARGUMENT_TYPE, ar(o, s))
        }
      }, e.prototype.tryParseArgumentClose = function(e) {
        return this.isEOF() || 125 !== this.char() ? this.error(wt.EXPECT_ARGUMENT_CLOSING_BRACE, ar(e, this.clonePosition())) : (this.bump(), {
          val: !0,
          err: null
        })
      }, e.prototype.parseSimpleArgStyleIfPossible = function() {
        for (var e = 0, n = this.clonePosition(); !this.isEOF();) switch (this.char()) {
          case 39:
            this.bump();
            var t = this.clonePosition();
            if (!this.bumpUntil("'")) return this.error(wt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ar(t, this.clonePosition()));
            this.bump();
            break;
          case 123:
            e += 1, this.bump();
            break;
          case 125:
            if (0 >= e) return {
              val: this.message.slice(n.offset, this.offset()),
              err: null
            };
            e -= 1;
            break;
          default:
            this.bump()
        }
        return {
          val: this.message.slice(n.offset, this.offset()),
          err: null
        }
      }, e.prototype.parseNumberSkeletonFromString = function(e, n) {
        var t = [];
        try {
          t = function(e) {
            if (0 === e.length) throw Error("Number skeleton cannot be empty");
            for (var n = [], t = 0, r = e.split(Ut).filter(function(e) {
                return e.length > 0
              }); t < r.length; t++) {
              var i = r[t].split("/");
              if (0 === i.length) throw Error("Invalid number skeleton");
              for (var o = i[0], a = i.slice(1), s = 0, l = a; s < l.length; s++)
                if (0 === l[s].length) throw Error("Invalid number skeleton");
              n.push({
                stem: o,
                options: a
              })
            }
            return n
          }(e)
        } catch {
          return this.error(wt.INVALID_NUMBER_SKELETON, n)
        }
        return {
          val: {
            type: Bt.number,
            tokens: t,
            location: n,
            parsedOptions: this.shouldParseSkeletons ? er(t) : {}
          },
          err: null
        }
      }, e.prototype.tryParsePluralOrSelectOptions = function(e, n, t, r) {
        for (var i, o = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
          if (0 === l.length) {
            var c = this.clonePosition();
            if ("select" === n || !this.bumpIf("=")) break;
            var f = this.tryParseDecimalInteger(wt.EXPECT_PLURAL_ARGUMENT_SELECTOR, wt.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err) return f;
            u = ar(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
          }
          if (s.has(l)) return this.error("select" === n ? wt.DUPLICATE_SELECT_ARGUMENT_SELECTOR : wt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
          "other" === l && (o = !0), this.bumpSpace();
          var h = this.clonePosition();
          if (!this.bumpIf("{")) return this.error("select" === n ? wt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : wt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ar(this.clonePosition(), this.clonePosition()));
          var d = this.parseMessage(e + 1, n, t);
          if (d.err) return d;
          var p = this.tryParseArgumentClose(h);
          if (p.err) return p;
          a.push([l, {
            value: d.val,
            location: ar(h, this.clonePosition())
          }]), s.add(l), this.bumpSpace(), l = (i = this.parseIdentifierIfPossible()).value, u = i.location
        }
        return 0 === a.length ? this.error("select" === n ? wt.EXPECT_SELECT_ARGUMENT_SELECTOR : wt.EXPECT_PLURAL_ARGUMENT_SELECTOR, ar(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(wt.MISSING_OTHER_CLAUSE, ar(this.clonePosition(), this.clonePosition())) : {
          val: a,
          err: null
        }
      }, e.prototype.tryParseDecimalInteger = function(e, n) {
        var t = 1,
          r = this.clonePosition();
        this.bumpIf("+") || this.bumpIf("-") && (t = -1);
        for (var i = !1, o = 0; !this.isEOF();) {
          var a = this.char();
          if (48 > a || a > 57) break;
          i = !0, o = 10 * o + (a - 48), this.bump()
        }
        var s = ar(r, this.clonePosition());
        return i ? dr(o *= t) ? {
          val: o,
          err: null
        } : this.error(n, s) : this.error(e, s)
      }, e.prototype.offset = function() {
        return this.position.offset
      }, e.prototype.isEOF = function() {
        return this.offset() === this.message.length
      }, e.prototype.clonePosition = function() {
        return {
          offset: this.position.offset,
          line: this.position.line,
          column: this.position.column
        }
      }, e.prototype.char = function() {
        var e = this.position.offset;
        if (e >= this.message.length) throw Error("out of bound");
        var n = br(this.message, e);
        if (void 0 === n) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        return n
      }, e.prototype.error = function(e, n) {
        return {
          val: null,
          err: {
            kind: e,
            message: this.message,
            location: n
          }
        }
      }, e.prototype.bump = function() {
        if (!this.isEOF()) {
          var e = this.char();
          10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += 65536 > e ? 1 : 2)
        }
      }, e.prototype.bumpIf = function(e) {
        if (Ar(this.message, e, this.offset())) {
          for (var n = 0; n < e.length; n++) this.bump();
          return !0
        }
        return !1
      }, e.prototype.bumpUntil = function(e) {
        var n = this.offset(),
          t = this.message.indexOf(e, n);
        return 0 > t ? (this.bumpTo(this.message.length), !1) : (this.bumpTo(t), !0)
      }, e.prototype.bumpTo = function(e) {
        if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
        for (e = Math.min(e, this.message.length);;) {
          var n = this.offset();
          if (n === e) break;
          if (n > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          if (this.bump(), this.isEOF()) break
        }
      }, e.prototype.bumpSpace = function() {
        for (; !this.isEOF() && Lr(this.char());) this.bump()
      }, e.prototype.peek = function() {
        if (this.isEOF()) return null;
        var e = this.char(),
          n = this.offset();
        return this.message.charCodeAt(n + (65536 > e ? 1 : 2)) ?? null
      }, e
    }();

    function xr(e) {
      return e >= 97 && 122 >= e || e >= 65 && 90 >= e
    }

    function Sr(e) {
      return 45 === e || 46 === e || e >= 48 && 57 >= e || 95 === e || e >= 97 && 122 >= e || e >= 65 && 90 >= e || 183 == e || e >= 192 && 214 >= e || e >= 216 && 246 >= e || e >= 248 && 893 >= e || e >= 895 && 8191 >= e || e >= 8204 && 8205 >= e || e >= 8255 && 8256 >= e || e >= 8304 && 8591 >= e || e >= 11264 && 12271 >= e || e >= 12289 && 55295 >= e || e >= 63744 && 64975 >= e || e >= 65008 && 65533 >= e || e >= 65536 && 983039 >= e
    }

    function Lr(e) {
      return e >= 9 && 13 >= e || 32 === e || 133 === e || e >= 8206 && 8207 >= e || 8232 === e || 8233 === e
    }

    function Fr(e) {
      return e >= 33 && 35 >= e || 36 === e || e >= 37 && 39 >= e || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && 47 >= e || e >= 58 && 59 >= e || e >= 60 && 62 >= e || e >= 63 && 64 >= e || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && 165 >= e || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && 8213 >= e || e >= 8214 && 8215 >= e || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && 8220 >= e || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && 8231 >= e || e >= 8240 && 8248 >= e || 8249 === e || 8250 === e || e >= 8251 && 8254 >= e || e >= 8257 && 8259 >= e || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && 8273 >= e || 8274 === e || 8275 === e || e >= 8277 && 8286 >= e || e >= 8592 && 8596 >= e || e >= 8597 && 8601 >= e || e >= 8602 && 8603 >= e || e >= 8604 && 8607 >= e || 8608 === e || e >= 8609 && 8610 >= e || 8611 === e || e >= 8612 && 8613 >= e || 8614 === e || e >= 8615 && 8621 >= e || 8622 === e || e >= 8623 && 8653 >= e || e >= 8654 && 8655 >= e || e >= 8656 && 8657 >= e || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && 8691 >= e || e >= 8692 && 8959 >= e || e >= 8960 && 8967 >= e || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && 8991 >= e || e >= 8992 && 8993 >= e || e >= 8994 && 9e3 >= e || 9001 === e || 9002 === e || e >= 9003 && 9083 >= e || 9084 === e || e >= 9085 && 9114 >= e || e >= 9115 && 9139 >= e || e >= 9140 && 9179 >= e || e >= 9180 && 9185 >= e || e >= 9186 && 9254 >= e || e >= 9255 && 9279 >= e || e >= 9280 && 9290 >= e || e >= 9291 && 9311 >= e || e >= 9472 && 9654 >= e || 9655 === e || e >= 9656 && 9664 >= e || 9665 === e || e >= 9666 && 9719 >= e || e >= 9720 && 9727 >= e || e >= 9728 && 9838 >= e || 9839 === e || e >= 9840 && 10087 >= e || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && 10175 >= e || e >= 10176 && 10180 >= e || 10181 === e || 10182 === e || e >= 10183 && 10213 >= e || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && 10239 >= e || e >= 10240 && 10495 >= e || e >= 10496 && 10626 >= e || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && 10711 >= e || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && 10747 >= e || 10748 === e || 10749 === e || e >= 10750 && 11007 >= e || e >= 11008 && 11055 >= e || e >= 11056 && 11076 >= e || e >= 11077 && 11078 >= e || e >= 11079 && 11084 >= e || e >= 11085 && 11123 >= e || e >= 11124 && 11125 >= e || e >= 11126 && 11157 >= e || 11158 === e || e >= 11159 && 11263 >= e || e >= 11776 && 11777 >= e || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && 11784 >= e || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && 11798 >= e || 11799 === e || e >= 11800 && 11801 >= e || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && 11807 >= e || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && 11822 >= e || 11823 === e || e >= 11824 && 11833 >= e || e >= 11834 && 11835 >= e || e >= 11836 && 11839 >= e || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && 11855 >= e || e >= 11856 && 11857 >= e || 11858 === e || e >= 11859 && 11903 >= e || e >= 12289 && 12291 >= e || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && 12307 >= e || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && 12319 >= e || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && 65094 >= e
    }

    function Tr(e) {
      e.forEach(function(e) {
        if (delete e.location, It(e) || _t(e))
          for (var n in e.options) delete e.options[n].location, Tr(e.options[n].value);
        else Rt(e) && Pt(e.style) || (Ht(e) || Nt(e)) && Dt(e.style) ? delete e.style.location : Ot(e) && Tr(e.children)
      })
    }

    function Mr(e, n) {
      void 0 === n && (n = {}), n = gt({
        shouldParseSkeletons: !0,
        requiresOtherClause: !0
      }, n);
      var t = new Br(e, n).parse();
      if (t.err) {
        var r = SyntaxError(wt[t.err.kind]);
        throw r.location = t.err.location, r.originalMessage = t.err.message, r
      }
      return n?.captureLocation || Tr(t.val), t.val
    }! function(e) {
      e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
    }(Er || (Er = {}));
    var Rr, Hr = function(e) {
        function n(n, t, r) {
          var i = e.call(this, n) || this;
          return i.code = t, i.originalMessage = r, i
        }
        return pt(n, e), n.prototype.toString = function() {
          return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
        }, n
      }(Error),
      Nr = function(e) {
        function n(n, t, r, i) {
          return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(t, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Er.INVALID_VALUE, i) || this
        }
        return pt(n, e), n
      }(Hr),
      Ir = function(e) {
        function n(n, t, r) {
          return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(t), Er.INVALID_VALUE, r) || this
        }
        return pt(n, e), n
      }(Hr),
      _r = function(e) {
        function n(n, t) {
          return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(t, '"'), Er.MISSING_VALUE, t) || this
        }
        return pt(n, e), n
      }(Hr);

    function jr(e) {
      return "function" == typeof e
    }

    function Or(e, n, t, r, i, o, a) {
      if (1 === e.length && Tt(e[0])) return [{
        type: Rr.literal,
        value: e[0].value
      }];
      for (var s = [], l = 0, u = e; l < u.length; l++) {
        var c = u[l];
        if (Tt(c)) s.push({
          type: Rr.literal,
          value: c.value
        });
        else if (jt(c)) "number" == typeof o && s.push({
          type: Rr.literal,
          value: t.getNumberFormat(n).format(o)
        });
        else {
          var f = c.value;
          if (!i || !(f in i)) throw new _r(f, a);
          var h = i[f];
          if (Mt(c))(!h || "string" == typeof h || "number" == typeof h) && (h = "string" == typeof h || "number" == typeof h ? h + "" : ""), s.push({
            type: "string" == typeof h ? Rr.literal : Rr.object,
            value: h
          });
          else if (Ht(c)) {
            var d = "string" == typeof c.style ? r.date[c.style] : Dt(c.style) ? c.style.parsedOptions : void 0;
            s.push({
              type: Rr.literal,
              value: t.getDateTimeFormat(n, d).format(h)
            })
          } else if (Nt(c)) d = "string" == typeof c.style ? r.time[c.style] : Dt(c.style) ? c.style.parsedOptions : r.time.medium, s.push({
            type: Rr.literal,
            value: t.getDateTimeFormat(n, d).format(h)
          });
          else if (Rt(c))(d = "string" == typeof c.style ? r.number[c.style] : Pt(c.style) ? c.style.parsedOptions : void 0) && d.scale && (h *= d.scale || 1), s.push({
            type: Rr.literal,
            value: t.getNumberFormat(n, d).format(h)
          });
          else {
            if (Ot(c)) {
              var p = c.children,
                g = c.value,
                A = i[g];
              if (!jr(A)) throw new Ir(g, "function", a);
              var m = A(Or(p, n, t, r, i, o).map(function(e) {
                return e.value
              }));
              Array.isArray(m) || (m = [m]), s.push.apply(s, m.map(function(e) {
                return {
                  type: "string" == typeof e ? Rr.literal : Rr.object,
                  value: e
                }
              }))
            }
            if (It(c)) {
              if (!(v = c.options[h] || c.options.other)) throw new Nr(c.value, h, Object.keys(c.options), a);
              s.push.apply(s, Or(v.value, n, t, r, i))
            } else if (_t(c)) {
              var v;
              if (!(v = c.options["=".concat(h)])) {
                if (!Intl.PluralRules) throw new Hr('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Er.MISSING_INTL_API, a);
                var b = t.getPluralRules(n, {
                  type: c.pluralType
                }).select(h - (c.offset || 0));
                v = c.options[b] || c.options.other
              }
              if (!v) throw new Nr(c.value, h, Object.keys(c.options), a);
              s.push.apply(s, Or(v.value, n, t, r, i, h - (c.offset || 0)))
            }
          }
        }
      }
      return function(e) {
        return 2 > e.length ? e : e.reduce(function(e, n) {
          var t = e[e.length - 1];
          return t && t.type === Rr.literal && n.type === Rr.literal ? t.value += n.value : e.push(n), e
        }, [])
      }(s)
    }

    function Pr(e) {
      return {
        create: function() {
          return {
            get: function(n) {
              return e[n]
            },
            set: function(n, t) {
              e[n] = t
            }
          }
        }
      }
    }! function(e) {
      e[e.literal = 0] = "literal", e[e.object = 1] = "object"
    }(Rr || (Rr = {}));
    var Dr, Vr = function() {
      function e(n, t, r, i) {
        void 0 === t && (t = e.defaultLocale);
        var o = this;
        if (this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }, this.format = function(e) {
            var n = o.formatToParts(e);
            if (1 === n.length) return n[0].value;
            var t = n.reduce(function(e, n) {
              return e.length && n.type === Rr.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += n.value : e.push(n.value), e
            }, []);
            return t.length > 1 ? t : t[0] || ""
          }, this.formatToParts = function(e) {
            return Or(o.ast, o.locales, o.formatters, o.formats, e, void 0, o.message)
          }, this.resolvedOptions = function() {
            var e;
            return {
              locale: (null === (e = o.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
            }
          }, this.getAst = function() {
            return o.ast
          }, this.locales = t, this.resolvedLocale = e.resolveLocale(t), "string" == typeof n) {
          if (this.message = n, !e.ie) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
          var a = i || {},
            s = (a.formatters, At(a, ["formatters"]));
          this.ast = e.ie(n, gt(gt({}, s), {
            locale: this.resolvedLocale
          }))
        } else this.ast = n;
        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
        this.formats = function(e, n) {
          return n ? Object.keys(e).reduce(function(t, r) {
            return t[r] = function(e, n) {
              return n ? gt(gt(gt({}, e || {}), n || {}), Object.keys(e).reduce(function(t, r) {
                return t[r] = gt(gt({}, e[r]), n[r] || {}), t
              }, {})) : e
            }(e[r], n[r]), t
          }, gt({}, e)) : e
        }(e.formats, r), this.formatters = i && i.formatters || function(e) {
          return void 0 === e && (e = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: vt(function() {
              for (var e, n = [], t = 0; arguments.length > t; t++) n[t] = arguments[t];
              return new((e = Intl.NumberFormat).bind.apply(e, mt([void 0], n, !1)))
            }, {
              cache: Pr(e.number),
              strategy: Ft.variadic
            }),
            getDateTimeFormat: vt(function() {
              for (var e, n = [], t = 0; arguments.length > t; t++) n[t] = arguments[t];
              return new((e = Intl.DateTimeFormat).bind.apply(e, mt([void 0], n, !1)))
            }, {
              cache: Pr(e.dateTime),
              strategy: Ft.variadic
            }),
            getPluralRules: vt(function() {
              for (var e, n = [], t = 0; arguments.length > t; t++) n[t] = arguments[t];
              return new((e = Intl.PluralRules).bind.apply(e, mt([void 0], n, !1)))
            }, {
              cache: Pr(e.pluralRules),
              strategy: Ft.variadic
            })
          }
        }(this.formatterCache)
      }
      return Object.defineProperty(e, "defaultLocale", {
        get: function() {
          return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
        },
        enumerable: !1,
        configurable: !0
      }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
        if ("u" >= typeof Intl.Locale) {
          var n = Intl.NumberFormat.supportedLocalesOf(e);
          return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
        }
      }, e.ie = Mr, e.formats = {
        number: {
          integer: {
            maximumFractionDigits: 0
          },
          currency: {
            style: "currency"
          },
          percent: {
            style: "percent"
          }
        },
        date: {
          short: {
            month: "numeric",
            day: "numeric",
            year: "2-digit"
          },
          medium: {
            month: "short",
            day: "numeric",
            year: "numeric"
          },
          long: {
            month: "long",
            day: "numeric",
            year: "numeric"
          },
          full: {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
          }
        },
        time: {
          short: {
            hour: "numeric",
            minute: "numeric"
          },
          medium: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          },
          long: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short"
          },
          full: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short"
          }
        }
      }, e
    }();
    ! function(e) {
      e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
    }(Dr || (Dr = {}));
    var Wr = function(e) {
        function n(t, r, i) {
          var o = this,
            a = i ? i instanceof Error ? i : Error(i + "") : void 0;
          return (o = e.call(this, "[@formatjs/intl Error ".concat(t, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = t, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, n), o
        }
        return pt(n, e), n
      }(Error),
      Zr = function(e) {
        function n(n, t) {
          return e.call(this, Dr.UNSUPPORTED_FORMATTER, n, t) || this
        }
        return pt(n, e), n
      }(Wr),
      Ur = function(e) {
        function n(n, t) {
          return e.call(this, Dr.INVALID_CONFIG, n, t) || this
        }
        return pt(n, e), n
      }(Wr),
      $r = function(e) {
        function n(n, t) {
          return e.call(this, Dr.MISSING_DATA, n, t) || this
        }
        return pt(n, e), n
      }(Wr),
      Gr = function(e) {
        function n(n, t, r) {
          var i = e.call(this, Dr.FORMAT_ERROR, "".concat(n, "\nLocale: ").concat(t, "\n"), r) || this;
          return i.locale = t, i
        }
        return pt(n, e), n
      }(Wr),
      zr = function(e) {
        function n(n, t, r, i) {
          var o = e.call(this, "".concat(n, "\nMessageID: ").concat(r?.id, "\nDefault Message: ").concat(r?.defaultMessage, "\nDescription: ").concat(r?.description, "\n"), t, i) || this;
          return o.descriptor = r, o.locale = t, o
        }
        return pt(n, e), n
      }(Gr),
      Yr = function(e) {
        function n(n, t) {
          var r = e.call(this, Dr.MISSING_TRANSLATION, 'Missing message: "'.concat(n.id, '" for locale "').concat(t, '", using ').concat(n.defaultMessage ? "default message (".concat("string" == typeof n.defaultMessage ? n.defaultMessage : n.defaultMessage.map(function(e) {
            var n;
            return null !== (n = e.value) && void 0 !== n ? n : JSON.stringify(e)
          }).join(), ")") : "id", " as fallback.")) || this;
          return r.descriptor = n, r
        }
        return pt(n, e), n
      }(Wr);

    function qr(e, n, t) {
      return void 0 === t && (t = {}), n.reduce(function(n, r) {
        return r in e ? n[r] = e[r] : r in t && (n[r] = t[r]), n
      }, {})
    }
    var Kr = {
      formats: {},
      messages: {},
      timeZone: void 0,
      defaultLocale: "en",
      defaultFormats: {},
      fallbackOnEmptyString: !0,
      onError: function(e) {},
      onWarn: function(e) {}
    };

    function Xr(e) {
      return {
        create: function() {
          return {
            get: function(n) {
              return e[n]
            },
            set: function(n, t) {
              e[n] = t
            }
          }
        }
      }
    }

    function Qr(e, n, t, r) {
      var i, o = e && e[n];
      if (o && (i = o[t]), i) return i;
      r(new Zr("No ".concat(n, " format named: ").concat(t)))
    }
    var Jr = i(96540);

    function ei(e) {
      ! function(e, n, t) {
        if (void 0 === t && (t = Error), !e) throw new t("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }(e)
    }
    var ni = gt(gt({}, Kr), {
      textComponent: Jr.Fragment
    });

    function ti(e, n) {
      return Object.keys(e).reduce(function(t, r) {
        return t[r] = gt({
          timeZone: n
        }, e[r]), t
      }, {})
    }

    function ri(e, n) {
      return Object.keys(gt(gt({}, e), n)).reduce(function(t, r) {
        return t[r] = gt(gt({}, e[r] || {}), n[r] || {}), t
      }, {})
    }

    function ii(e, n) {
      if (!n) return e;
      var t = Vr.formats;
      return gt(gt(gt({}, t), e), {
        date: ri(ti(t.date, n), ti(e.date || {}, n)),
        time: ri(ti(t.time, n), ti(e.time || {}, n))
      })
    }
    var oi = function(e, n, t, r, i) {
        var o = e.locale,
          a = e.formats,
          s = e.messages,
          l = e.defaultLocale,
          u = e.defaultFormats,
          c = e.fallbackOnEmptyString,
          f = e.onError,
          h = e.timeZone,
          d = e.defaultRichTextElements;
        void 0 === t && (t = {
          id: ""
        });
        var p = t.id,
          g = t.defaultMessage;
        ! function(e, n, t) {
          if (void 0 === t && (t = Error), !e) throw new t("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
        }(!!p);
        var A = p + "",
          m = s && {}.hasOwnProperty.call(s, A) && s[A];
        if (Array.isArray(m) && 1 === m.length && m[0].type === Et.literal) return m[0].value;
        if (!r && m && "string" == typeof m && !d) return m.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (r = gt(gt({}, d), r || {}), a = ii(a, h), u = ii(u, h), !m) {
          if (!1 === c && "" === m) return m;
          if ((!g || o && o.toLowerCase() !== l.toLowerCase()) && f(new Yr(t, o)), g) try {
            return n.getMessageFormat(g, l, u, i).format(r)
          } catch (e) {
            return f(new zr('Error formatting default message for: "'.concat(A, '", rendering default message verbatim'), o, t, e)), "string" == typeof g ? g : A
          }
          return A
        }
        try {
          return n.getMessageFormat(m, o, a, gt({
            formatters: n
          }, i || {})).format(r)
        } catch (e) {
          f(new zr('Error formatting message: "'.concat(A, '", using ').concat(g ? "default message" : "id", " as fallback."), o, t, e))
        }
        if (g) try {
          return n.getMessageFormat(g, l, u, i).format(r)
        } catch (e) {
          f(new zr('Error formatting the default message for: "'.concat(A, '", rendering message verbatim'), o, t, e))
        }
        return "string" == typeof m ? m : "string" == typeof g ? g : A
      },
      ai = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

    function si(e, n, t, r) {
      var i = e.locale,
        o = e.formats,
        a = e.onError,
        s = e.timeZone;
      void 0 === r && (r = {});
      var l = r.format,
        u = gt(gt({}, s && {
          timeZone: s
        }), l && Qr(o, n, l, a)),
        c = qr(r, ai, u);
      return "time" === n && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = gt(gt({}, c), {
        hour: "numeric",
        minute: "numeric"
      })), t(i, c)
    }

    function li(e, n) {
      for (var t = [], r = 2; arguments.length > r; r++) t[r - 2] = arguments[r];
      var i = t[0],
        o = t[1],
        a = void 0 === o ? {} : o,
        s = "string" == typeof i ? new Date(i || 0) : i;
      try {
        return si(e, "date", n, a).format(s)
      } catch (n) {
        e.onError(new Gr("Error formatting date.", e.locale, n))
      }
      return s + ""
    }

    function ui(e, n) {
      for (var t = [], r = 2; arguments.length > r; r++) t[r - 2] = arguments[r];
      var i = t[0],
        o = t[1],
        a = void 0 === o ? {} : o,
        s = "string" == typeof i ? new Date(i || 0) : i;
      try {
        return si(e, "time", n, a).format(s)
      } catch (n) {
        e.onError(new Gr("Error formatting time.", e.locale, n))
      }
      return s + ""
    }

    function ci(e, n) {
      for (var t = [], r = 2; arguments.length > r; r++) t[r - 2] = arguments[r];
      var i = t[0],
        o = t[1],
        a = t[2],
        s = void 0 === a ? {} : a,
        l = "string" == typeof i ? new Date(i || 0) : i,
        u = "string" == typeof o ? new Date(o || 0) : o;
      try {
        return si(e, "dateTimeRange", n, s).formatRange(l, u)
      } catch (n) {
        e.onError(new Gr("Error formatting date time range.", e.locale, n))
      }
      return l + ""
    }

    function fi(e, n) {
      for (var t = [], r = 2; arguments.length > r; r++) t[r - 2] = arguments[r];
      var i = t[0],
        o = t[1],
        a = void 0 === o ? {} : o,
        s = "string" == typeof i ? new Date(i || 0) : i;
      try {
        return si(e, "date", n, a).formatToParts(s)
      } catch (n) {
        e.onError(new Gr("Error formatting date.", e.locale, n))
      }
      return []
    }

    function hi(e, n) {
      for (var t = [], r = 2; arguments.length > r; r++) t[r - 2] = arguments[r];
      var i = t[0],
        o = t[1],
        a = void 0 === o ? {} : o,
        s = "string" == typeof i ? new Date(i || 0) : i;
      try {
        return si(e, "time", n, a).formatToParts(s)
      } catch (n) {
        e.onError(new Gr("Error formatting time.", e.locale, n))
      }
      return []
    }
    var di = ["style", "type", "fallback", "languageDisplay"];

    function pi(e, n, t, r) {
      var i = e.locale,
        o = e.onError;
      Intl.DisplayNames || o(new Hr('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Er.MISSING_INTL_API));
      var a = qr(r, di);
      try {
        return n(i, a).of(t)
      } catch (e) {
        o(new Gr("Error formatting display name.", i, e))
      }
    }
    var gi = ["type", "style"],
      Ai = Date.now();

    function mi(e, n, t, r) {
      void 0 === r && (r = {});
      var i = vi(e, n, t, r).reduce(function(e, n) {
        var t = n.value;
        return "string" != typeof t ? e.push(t) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += t : e.push(t), e
      }, []);
      return 1 === i.length ? i[0] : 0 === i.length ? "" : i
    }

    function vi(e, n, t, r) {
      var i = e.locale,
        o = e.onError;
      void 0 === r && (r = {}), Intl.ListFormat || o(new Hr('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Er.MISSING_INTL_API));
      var a = qr(r, gi);
      try {
        var s = {},
          l = t.map(function(e, n) {
            if ("object" == typeof e) {
              var t = function(e) {
                return "".concat(Ai, "_").concat(e, "_").concat(Ai)
              }(n);
              return s[t] = e, t
            }
            return e + ""
          });
        return n(i, a).formatToParts(l).map(function(e) {
          return "literal" === e.type ? e : gt(gt({}, e), {
            value: s[e.value] || e.value
          })
        })
      } catch (e) {
        o(new Gr("Error formatting list.", i, e))
      }
      return t
    }
    var bi = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

    function Ci(e, n, t) {
      var r = e.locale,
        i = e.formats,
        o = e.onError;
      void 0 === t && (t = {});
      var a = t.format,
        s = a && Qr(i, "number", a, o) || {};
      return n(r, qr(t, bi, s))
    }

    function yi(e, n, t, r) {
      void 0 === r && (r = {});
      try {
        return Ci(e, n, r).format(t)
      } catch (n) {
        e.onError(new Gr("Error formatting number.", e.locale, n))
      }
      return t + ""
    }

    function ki(e, n, t, r) {
      void 0 === r && (r = {});
      try {
        return Ci(e, n, r).formatToParts(t)
      } catch (n) {
        e.onError(new Gr("Error formatting number.", e.locale, n))
      }
      return []
    }
    var wi = ["type"];

    function Ei(e, n, t, r) {
      var i = e.locale,
        o = e.onError;
      void 0 === r && (r = {}), Intl.PluralRules || o(new Hr('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Er.MISSING_INTL_API));
      var a = qr(r, wi);
      try {
        return n(i, a).select(t)
      } catch (e) {
        o(new Gr("Error formatting plural.", i, e))
      }
      return "other"
    }
    var Bi = ["numeric", "style"];

    function xi(e, n, t, r, i) {
      void 0 === i && (i = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Hr('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Er.MISSING_INTL_API));
      try {
        return function(e, n, t) {
          var r = e.locale,
            i = e.formats,
            o = e.onError;
          void 0 === t && (t = {});
          var a = t.format,
            s = !!a && Qr(i, "relative", a, o) || {};
          return n(r, qr(t, Bi, s))
        }(e, n, i).format(t, r)
      } catch (n) {
        e.onError(new Gr("Error formatting relative time.", e.locale, n))
      }
      return t + ""
    }

    function Si(e) {
      return e && Object.keys(e).reduce(function(n, t) {
        var r = e[t];
        return n[t] = jr(r) ? function(e) {
          return function(n) {
            return e(Jr.Children.toArray(n))
          }
        }(r) : r, n
      }, {})
    }
    var Li = function(e, n, t, r) {
        for (var i = [], o = 4; arguments.length > o; o++) i[o - 4] = arguments[o];
        var a = Si(r),
          s = oi.apply(void 0, mt([e, n, t, a], i, !1));
        return Array.isArray(s) ? Jr.Children.toArray(s) : s
      },
      Fi = function(e, n) {
        var t = e.defaultRichTextElements,
          r = At(e, ["defaultRichTextElements"]),
          i = Si(t),
          o = function(e, n) {
            var t = function(e) {
                void 0 === e && (e = {
                  dateTime: {},
                  number: {},
                  message: {},
                  relativeTime: {},
                  pluralRules: {},
                  list: {},
                  displayNames: {}
                });
                var n = Intl.RelativeTimeFormat,
                  t = Intl.ListFormat,
                  r = Intl.DisplayNames,
                  i = vt(function() {
                    for (var e, n = [], t = 0; arguments.length > t; t++) n[t] = arguments[t];
                    return new((e = Intl.DateTimeFormat).bind.apply(e, mt([void 0], n, !1)))
                  }, {
                    cache: Xr(e.dateTime),
                    strategy: Ft.variadic
                  }),
                  o = vt(function() {
                    for (var e, n = [], t = 0; arguments.length > t; t++) n[t] = arguments[t];
                    return new((e = Intl.NumberFormat).bind.apply(e, mt([void 0], n, !1)))
                  }, {
                    cache: Xr(e.number),
                    strategy: Ft.variadic
                  }),
                  a = vt(function() {
                    for (var e, n = [], t = 0; arguments.length > t; t++) n[t] = arguments[t];
                    return new((e = Intl.PluralRules).bind.apply(e, mt([void 0], n, !1)))
                  }, {
                    cache: Xr(e.pluralRules),
                    strategy: Ft.variadic
                  });
                return {
                  getDateTimeFormat: i,
                  getNumberFormat: o,
                  getMessageFormat: vt(function(e, n, t, r) {
                    return new Vr(e, n, t, gt({
                      formatters: {
                        getNumberFormat: o,
                        getDateTimeFormat: i,
                        getPluralRules: a
                      }
                    }, r || {}))
                  }, {
                    cache: Xr(e.message),
                    strategy: Ft.variadic
                  }),
                  getRelativeTimeFormat: vt(function() {
                    for (var e = [], t = 0; arguments.length > t; t++) e[t] = arguments[t];
                    return new(n.bind.apply(n, mt([void 0], e, !1)))
                  }, {
                    cache: Xr(e.relativeTime),
                    strategy: Ft.variadic
                  }),
                  getPluralRules: a,
                  getListFormat: vt(function() {
                    for (var e = [], n = 0; arguments.length > n; n++) e[n] = arguments[n];
                    return new(t.bind.apply(t, mt([void 0], e, !1)))
                  }, {
                    cache: Xr(e.list),
                    strategy: Ft.variadic
                  }),
                  getDisplayNames: vt(function() {
                    for (var e = [], n = 0; arguments.length > n; n++) e[n] = arguments[n];
                    return new(r.bind.apply(r, mt([void 0], e, !1)))
                  }, {
                    cache: Xr(e.displayNames),
                    strategy: Ft.variadic
                  })
                }
              }(n),
              r = gt(gt({}, Kr), e),
              i = r.locale,
              o = r.defaultLocale,
              a = r.onError;
            return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new $r('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new $r('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Ur('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
              function(e) {
                e.onWarn && e.defaultRichTextElements && function(e) {
                  return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
                }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
              }(r), gt(gt({}, r), {
                formatters: t,
                formatNumber: yi.bind(null, r, t.getNumberFormat),
                formatNumberToParts: ki.bind(null, r, t.getNumberFormat),
                formatRelativeTime: xi.bind(null, r, t.getRelativeTimeFormat),
                formatDate: li.bind(null, r, t.getDateTimeFormat),
                formatDateToParts: fi.bind(null, r, t.getDateTimeFormat),
                formatTime: ui.bind(null, r, t.getDateTimeFormat),
                formatDateTimeRange: ci.bind(null, r, t.getDateTimeFormat),
                formatTimeToParts: hi.bind(null, r, t.getDateTimeFormat),
                formatPlural: Ei.bind(null, r, t.getPluralRules),
                formatMessage: oi.bind(null, r, t),
                $t: oi.bind(null, r, t),
                formatList: mi.bind(null, r, t.getListFormat),
                formatListToParts: vi.bind(null, r, t.getListFormat),
                formatDisplayName: pi.bind(null, r, t.getDisplayNames)
              })
          }(gt(gt(gt({}, ni), r), {
            defaultRichTextElements: i
          }), n),
          a = {
            locale: o.locale,
            timeZone: o.timeZone,
            fallbackOnEmptyString: o.fallbackOnEmptyString,
            formats: o.formats,
            defaultLocale: o.defaultLocale,
            defaultFormats: o.defaultFormats,
            messages: o.messages,
            onError: o.onError,
            defaultRichTextElements: i
          };
        return gt(gt({}, o), {
          formatMessage: Li.bind(null, a, o.formatters),
          $t: Li.bind(null, a, o.formatters)
        })
      };
    i(4146);
    var Ti = "u" > typeof window && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = Jr.createContext(null)) : Jr.createContext(null),
      Mi = (Ti.Consumer, Ti.Provider),
      Ri = Ti;

    function Hi(e) {
      return {
        locale: e.locale,
        timeZone: e.timeZone,
        fallbackOnEmptyString: e.fallbackOnEmptyString,
        formats: e.formats,
        textComponent: e.textComponent,
        messages: e.messages,
        defaultLocale: e.defaultLocale,
        defaultFormats: e.defaultFormats,
        onError: e.onError,
        onWarn: e.onWarn,
        wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
        defaultRichTextElements: e.defaultRichTextElements
      }
    }
    var Ni = function(e) {
      function n() {
        var n = null !== e && e.apply(this, arguments) || this;
        return n.cache = {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        }, n.state = {
          cache: n.cache,
          intl: Fi(Hi(n.props), n.cache),
          prevConfig: Hi(n.props)
        }, n
      }
      return pt(n, e), n.getDerivedStateFromProps = function(e, n) {
        var t = n.prevConfig,
          r = n.cache,
          i = Hi(e);
        return function(e, n) {
          if (e === n) return !0;
          if (!e || !n) return !1;
          var t = Object.keys(e),
            r = Object.keys(n),
            i = t.length;
          if (r.length !== i) return !1;
          for (var o = 0; i > o; o++) {
            var a = t[o];
            if (e[a] !== n[a] || !{}.hasOwnProperty.call(n, a)) return !1
          }
          return !0
        }(t, i) ? null : {
          intl: Fi(i, r),
          prevConfig: i
        }
      }, n.prototype.render = function() {
        return ei(this.state.intl), Jr.createElement(Mi, {
          value: this.state.intl
        }, this.props.children)
      }, n.displayName = "IntlProvider", n.defaultProps = ni, n
    }(Jr.PureComponent);
    const Ii = Ni,
      _i = ({
        width: e,
        height: n,
        colorClass: t
      }) => (0, ft.jsx)("svg", {
        className: t,
        fill: "none",
        width: e ?? 24,
        height: n ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, ft.jsx)("path", {
          d: "M9.23047 2.7998C10.1056 2.7998 10.8154 3.50961 10.8154 4.38477C10.8153 5.25985 10.1056 5.96875 9.23047 5.96875H5.96875V18.0312H18.0312V14.7695C18.0312 13.8944 18.7401 13.1847 19.6152 13.1846C20.4904 13.1846 21.2002 13.8944 21.2002 14.7695V18.2305C21.2002 19.8704 19.8704 21.2002 18.2305 21.2002H5.76953C4.12967 21.2002 2.7998 19.8704 2.7998 18.2305V5.76953C2.7998 4.12967 4.12967 2.7998 5.76953 2.7998H9.23047ZM18.2373 14.6279C18.2326 14.6745 18.2305 14.7217 18.2305 14.7695L18.2383 14.6279C18.243 14.5813 18.2496 14.5354 18.2588 14.4902L18.2373 14.6279ZM18.3389 14.2305C18.3214 14.2717 18.3064 14.3142 18.293 14.3574L18.3398 14.2305C18.3573 14.1891 18.3762 14.1485 18.3975 14.1094L18.3389 14.2305ZM18.6357 13.79C18.6045 13.8213 18.5751 13.8545 18.5469 13.8887L18.6367 13.79C18.6679 13.7589 18.7004 13.7292 18.7344 13.7012L18.6357 13.79ZM19.6152 2.7998C20.4904 2.7998 21.2002 3.50961 21.2002 4.38477V9.92285C21.2002 10.798 20.4904 11.5078 19.6152 11.5078C18.7401 11.5077 18.0312 10.798 18.0312 9.92285V8.20898L13.1201 13.1201C12.54 13.7002 11.6224 13.737 11 13.2295L10.8799 13.1201C10.2611 12.5013 10.2611 11.4987 10.8799 10.8799L15.79 5.96875H14.0771C13.202 5.96875 12.4923 5.25985 12.4922 4.38477C12.4922 3.50961 13.202 2.7998 14.0771 2.7998H19.6152ZM19.2031 13.4473C19.1599 13.4607 19.1174 13.4757 19.0762 13.4932L19.2041 13.4473C19.2472 13.4339 19.2911 13.4223 19.3359 13.4131L19.2031 13.4473ZM12 13.3848C12.0614 13.3848 12.1226 13.3792 12.1836 13.3711C12.1226 13.3792 12.0614 13.3848 12 13.3848ZM11.7812 13.3662C11.7975 13.3688 11.8138 13.3711 11.8301 13.373C11.8138 13.371 11.7975 13.3688 11.7812 13.3662ZM12.207 13.3682C12.2653 13.3594 12.3229 13.3463 12.3799 13.3301C12.3229 13.3464 12.2653 13.3594 12.207 13.3682ZM11.5752 13.3164C11.5937 13.3223 11.6122 13.3279 11.6309 13.333C11.6122 13.3279 11.5937 13.3224 11.5752 13.3164ZM12.4102 13.3203C12.4632 13.3039 12.5162 13.2866 12.5674 13.2637L12.583 13.2559C12.5268 13.282 12.4687 13.3021 12.4102 13.3203ZM11.2373 13.1572C11.2983 13.1975 11.3624 13.2312 11.4277 13.2607C11.3584 13.2293 11.291 13.192 11.2266 13.1484L11.2373 13.1572ZM12.7617 13.1562C12.7329 13.1753 12.7037 13.1933 12.6738 13.21L12.7764 13.1475C12.8098 13.1248 12.8422 13.1001 12.874 13.0742L12.7617 13.1562ZM10.7734 12.6445C10.8157 12.7249 10.8667 12.8016 10.9258 12.874L10.8438 12.7617C10.8183 12.7232 10.7946 12.6839 10.7734 12.6436V12.6445ZM10.6475 12.2871C10.6543 12.3195 10.6607 12.3519 10.6699 12.3838C10.6608 12.3519 10.6543 12.3195 10.6475 12.2871ZM10.6221 12.1191C10.6248 12.1508 10.6279 12.1824 10.6328 12.2139C10.6279 12.1824 10.6248 12.1508 10.6221 12.1191ZM10.6182 11.9336C10.6162 11.9746 10.6155 12.0156 10.6172 12.0566C10.6155 12.0156 10.6162 11.9746 10.6182 11.9336ZM10.6357 11.7666C10.6287 11.8081 10.6233 11.8497 10.6201 11.8916C10.6234 11.8497 10.6287 11.8081 10.6357 11.7666ZM10.6836 11.5703C10.6668 11.6221 10.6521 11.6744 10.6416 11.7275C10.6522 11.6745 10.6668 11.6221 10.6836 11.5703ZM10.8184 11.2793C10.7933 11.3203 10.7694 11.3615 10.749 11.4043C10.7694 11.3615 10.7933 11.3202 10.8184 11.2793ZM19.2031 11.2451C19.2465 11.2586 19.2908 11.2701 19.3359 11.2793L19.2041 11.2451C19.1606 11.2316 19.1177 11.2168 19.0762 11.1992L19.2031 11.2451ZM10.8428 11.2373C10.8378 11.2449 10.8339 11.2531 10.8291 11.2607C10.8584 11.2144 10.8904 11.1693 10.9258 11.126L10.8428 11.2373ZM18.6357 10.9023C18.667 10.9336 18.7002 10.963 18.7344 10.9912L18.6367 10.9023C18.6053 10.8709 18.5752 10.838 18.5469 10.8037L18.6357 10.9023ZM18.3389 10.4619C18.3564 10.5034 18.3761 10.5437 18.3975 10.583L18.3398 10.4619C18.3223 10.4205 18.3064 10.3783 18.293 10.335L18.3389 10.4619ZM18.2305 9.92285C18.2305 10.0185 18.2403 10.1119 18.2588 10.2021L18.2383 10.0645C18.2336 10.018 18.2305 9.97059 18.2305 9.92285ZM9.37207 5.76172C9.3256 5.76643 9.27818 5.76953 9.23047 5.76953C9.32615 5.76953 9.41954 5.7597 9.50977 5.74121L9.37207 5.76172ZM9.76953 5.66016C9.72815 5.67765 9.68589 5.69356 9.64258 5.70703L9.76953 5.66113C9.81099 5.6436 9.85135 5.62388 9.89062 5.60254L9.76953 5.66016ZM13.5381 5.66113C13.5794 5.67859 13.6218 5.69358 13.665 5.70703L13.5381 5.66016C13.4967 5.64267 13.4562 5.62381 13.417 5.60254L13.5381 5.66113ZM10.21 5.36328C10.1785 5.39474 10.1457 5.42479 10.1113 5.45312L10.21 5.36426C10.2412 5.33297 10.2706 5.29978 10.2988 5.26562L10.21 5.36328ZM13.0977 5.36426C13.1289 5.39555 13.1621 5.42493 13.1963 5.45312L13.0977 5.36328C13.0665 5.33214 13.0368 5.2996 13.0088 5.26562L13.0977 5.36426ZM10.7266 11.457C10.7107 11.4944 10.696 11.532 10.6836 11.5703C10.696 11.532 10.7107 11.4943 10.7266 11.457Z",
          fill: "currentColor"
        })
      }),
      ji = ({
        width: e,
        height: n,
        colorClass: t
      }) => (0, ft.jsx)("svg", {
        className: t,
        fill: "none",
        width: e ?? 24,
        height: n ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, ft.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.33477 14.504C4.00791 14.8309 3.91014 15.3225 4.08703 15.7495C4.26392 16.1766 4.68065 16.455 5.14289 16.455H18.8571C19.3194 16.455 19.7361 16.1766 19.913 15.7495C20.0899 15.3225 19.9921 14.8309 19.6652 14.504L13.2122 8.05088C12.5427 7.38157 11.4573 7.38157 10.7878 8.05088L4.33477 14.504Z",
          fill: "currentColor"
        })
      }),
      Oi = ({
        width: e,
        height: n,
        colorClass: t
      }) => (0, ft.jsx)("svg", {
        className: t,
        fill: "none",
        width: e ?? 24,
        height: n ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, ft.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.33477 9.49596C4.00791 9.1691 3.91014 8.67754 4.08703 8.25049C4.26392 7.82343 4.68065 7.54498 5.14289 7.54498H18.8571C19.3194 7.54498 19.7361 7.82343 19.913 8.25049C20.0899 8.67754 19.9921 9.1691 19.6652 9.49596L13.2122 15.9491C12.5427 16.6184 11.4573 16.6184 10.7878 15.9491L4.33477 9.49596Z",
          fill: "currentColor"
        })
      }),
      Pi = ({
        width: e,
        height: n,
        colorClass: t
      }) => (0, ft.jsx)("svg", {
        className: t,
        fill: "none",
        width: e ?? 24,
        height: n ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, ft.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.89784 4.3613C8.53455 3.84231 9.47374 3.87891 10.0672 4.47213L16.0703 10.4752L16.2183 10.6387C16.862 11.4278 16.8618 12.5676 16.2183 13.3568L16.0703 13.5203L10.0672 19.5234C9.47365 20.1167 8.53456 20.1534 7.89784 19.6342L7.77429 19.5234C7.14124 18.8903 7.1414 17.8636 7.77429 17.2304L13.007 11.9977L7.77429 6.76507C7.14142 6.13189 7.14125 5.10521 7.77429 4.47213L7.89784 4.3613ZM9.12334 19.4207C9.08994 19.4272 9.05628 19.432 9.0225 19.4352L9.12334 19.4207C9.15666 19.4142 9.19058 19.4058 9.22327 19.3962L9.12334 19.4207ZM9.59119 4.79463C9.61901 4.81732 9.64611 4.84139 9.67205 4.86731C9.62011 4.81537 9.5648 4.76999 9.5058 4.73104L9.59119 4.79463ZM9.12334 4.5757C9.15697 4.5822 9.19028 4.59046 9.22327 4.60023L9.12334 4.5757C9.08965 4.56916 9.05658 4.56442 9.0225 4.56116L9.12334 4.5757Z",
          fill: "currentColor"
        })
      });

    function Di() {
      var e = Jr.useContext(Ri);
      return ei(e), e
    }
    const Vi = ({
        width: e,
        height: n,
        colorClass: t
      }) => (0, ft.jsxs)("svg", {
        className: t,
        fill: "none",
        width: e ?? 24,
        height: n ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, ft.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.8292 10.3301C20.7517 10.3301 21.5 11.0776 21.5 12C21.5 17.2465 17.2465 21.5 12 21.5C10.2842 21.5 8.67368 21.043 7.2839 20.2467L6.42577 21.1057C6.06548 21.466 5.53524 21.5895 5.05653 21.4322L4.96108 21.3974C4.4589 21.1894 4.13153 20.6992 4.1315 20.1557V16.2407C4.13166 15.4985 4.73358 14.8973 5.47577 14.8973H9.38995C9.93358 14.8973 10.4236 15.2246 10.6316 15.7269L10.6673 15.8214C10.8142 16.2681 10.7161 16.76 10.4095 17.1166L10.3408 17.1915L9.78423 17.7464C10.4716 18.0116 11.2179 18.1594 12 18.1594C15.4016 18.1594 18.1594 15.4016 18.1594 12C18.1594 11.0776 18.9068 10.3302 19.8292 10.3301ZM9.47737 20.7819C9.57769 20.8107 9.67896 20.8368 9.78066 20.8622L9.47826 20.781C9.37796 20.7523 9.27829 20.7221 9.17944 20.69L9.47737 20.7819ZM8.3115 20.3591C8.49967 20.4422 8.69137 20.5187 8.88596 20.5892L8.59695 20.4786C8.40551 20.4017 8.21706 20.319 8.0323 20.2298L8.3115 20.3591ZM7.22592 19.7891C7.39959 19.8958 7.57732 19.9964 7.75845 20.0915L7.48995 19.9443L7.22592 19.7891ZM10.5121 18.3547C10.6316 18.3826 10.7524 18.4067 10.8743 18.4279L10.5121 18.3547C10.3924 18.3269 10.275 18.2954 10.158 18.2611L10.5121 18.3547ZM16.1497 17.0346C16.0692 17.101 15.9871 17.1656 15.9035 17.2281L16.1497 17.0346C16.2302 16.9681 16.3098 16.8996 16.3869 16.8294L16.1497 17.0346ZM17.0131 16.1746L17.0346 16.1506C17.0475 16.1349 17.0592 16.1182 17.072 16.1024C17.0525 16.1266 17.033 16.1508 17.0131 16.1746ZM5.18498 15.3058C5.17318 15.3095 5.16178 15.3142 5.15019 15.3183C5.19186 15.3035 5.23455 15.2907 5.27864 15.2817L5.18498 15.3058ZM18.3191 13.6306L18.3922 13.3148C18.3972 13.2906 18.4009 13.2661 18.4056 13.2417C18.3804 13.3727 18.352 13.5025 18.3191 13.6306ZM18.9988 10.9929C18.9903 10.9999 18.9829 11.008 18.9747 11.0152C19.0145 10.9806 19.0557 10.9476 19.0996 10.918L18.9988 10.9929ZM19.8292 10.695C19.7391 10.695 19.6511 10.7043 19.5661 10.7217L19.6963 10.7021C19.74 10.6977 19.7844 10.695 19.8292 10.695Z",
          fill: "currentColor"
        }), (0, ft.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 2.5C13.7154 2.5 15.3256 2.95649 16.7152 3.75239L17.5742 2.89427L17.6483 2.82559C18.0304 2.49678 18.568 2.40748 19.0389 2.60258L19.1308 2.64451C19.5808 2.87169 19.8684 3.33462 19.8685 3.84427V7.75934C19.8684 8.50154 19.2664 9.10272 18.5242 9.10272H14.61C14.1005 9.10272 13.6376 8.81556 13.4103 8.36592L13.3684 8.27315C13.1604 7.77095 13.2748 7.1928 13.6592 6.80845L14.2149 6.25272C13.5278 5.9878 12.7817 5.84061 12 5.84061C8.59843 5.84062 5.84063 8.59844 5.84061 12C5.84061 12.9224 5.09315 13.6707 4.17075 13.6708C3.24828 13.6708 2.5 12.9225 2.5 12C2.50002 6.75351 6.7535 2.50001 12 2.5ZM4.30366 13.2979C4.25995 13.3023 4.21563 13.305 4.17075 13.305C4.2609 13.305 4.34889 13.2957 4.4339 13.2783L4.30366 13.2979ZM5.00033 13.0071C4.96824 13.0336 4.93498 13.0587 4.90042 13.082L5.00033 13.0071C5.03249 12.9805 5.06363 12.9518 5.0931 12.9223L5.00033 13.0071ZM5.60779 10.6852C5.60397 10.7038 5.60075 10.7226 5.59709 10.7414C5.62156 10.6161 5.64939 10.492 5.68094 10.3694L5.60779 10.6852ZM6.96545 7.84944C6.89887 7.9301 6.83458 8.01268 6.77188 8.09653L6.96545 7.84944C7.03202 7.76875 7.1003 7.69041 7.17061 7.61305L6.96545 7.84944ZM7.84944 6.96545C7.76894 7.03189 7.69024 7.10045 7.61305 7.17061L7.84944 6.96545C7.92992 6.89903 8.01287 6.83444 8.09653 6.77188L7.84944 6.96545ZM10.6852 5.60779C10.5789 5.62953 10.4737 5.65411 10.3694 5.68094L10.6852 5.60779C10.7913 5.58607 10.8983 5.5672 11.0063 5.5507L10.6852 5.60779ZM7.26338 4.1877C7.15811 4.25166 7.05538 4.31947 6.95296 4.38751C7.17751 4.23834 7.40815 4.0975 7.64606 3.96826L7.26338 4.1877ZM16.51 4.05568L16.7741 4.21089C16.6004 4.10425 16.4227 4.00361 16.2415 3.9085L16.51 4.05568ZM15.4031 3.52136C15.5945 3.59828 15.7829 3.681 15.9677 3.77023L15.6885 3.64089C15.5003 3.55777 15.3086 3.4813 15.114 3.41075L15.4031 3.52136ZM14.5217 3.21897C14.622 3.24773 14.7217 3.27788 14.8206 3.30995L14.5226 3.21808C14.4223 3.18932 14.321 3.16318 14.2193 3.13779L14.5217 3.21897Z",
          fill: "currentColor"
        })]
      }),
      Wi = ({
        width: e,
        height: n
      }) => (0, ft.jsxs)("svg", {
        fill: "none",
        width: e ?? 96,
        height: n ?? 96,
        viewBox: "0 0 96 96",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, ft.jsxs)("g", {
          clipPath: "url(#clip0_25_36815)",
          children: [(0, ft.jsx)("path", {
            d: "M7.96582 59.941V23.0565C7.96582 22.0109 8.62351 21.0783 9.60846 20.7273L43.3409 8.70626C44.951 8.1325 46.6437 9.32625 46.6437 11.0355V47.8302C46.6437 48.8737 45.9886 49.8048 45.0065 50.1574L11.274 62.2683C9.66304 62.8467 7.96582 61.6527 7.96582 59.941Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, ft.jsx)("path", {
            d: "M7.90752 60.6488C8.71075 61.2145 10.0878 61.2464 10.0878 61.2464C8.69709 61.1351 7.69261 59.7198 7.686 57.5581L5.50295 56.7348C5.51018 58.8942 7.1043 60.0832 7.90752 60.6488Z",
            fill: "url(#paint0_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M7.69912 24.7121L5.52396 23.8345L5.52405 56.7494L7.6988 57.5757L7.69912 24.7121Z",
            fill: "url(#paint1_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M10.3448 19.9372L8.10352 19.129C6.5982 19.4323 5.52346 21.5357 5.5306 23.8321L7.70048 24.704C7.69335 22.4076 8.88966 20.5215 10.3448 19.9372Z",
            fill: "url(#paint2_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M5.56673 30.3743L7.70278 28.504L7.741 38.3789L5.60495 40.2492L5.56673 30.3743Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M5.55144 41.6915L7.66362 39.9392L7.66981 42.4359L5.55968 44.1887L5.55144 41.6915Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M10.6875 47.3547L11.4947 47.0193L11.5009 49.516L10.6958 49.8519L10.6875 47.3547Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M10.6887 46.2746L11.4958 45.9392L11.502 46.6677L10.6968 47.0036L10.6887 46.2746Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M13.5259 25.424C12.2541 25.8889 11.2083 27.4012 11.2011 28.7793L11.0767 54.4911C11.0719 55.8701 12.1059 56.6162 13.3803 56.1523L38.66 46.8785C39.9319 46.4136 40.9792 44.9049 40.9839 43.5258L41.1079 17.7991C41.1126 16.42 40.0787 15.6739 38.8069 16.1389L13.5259 25.424Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("mask", {
            id: "mask0_25_36815",
            style: {
              maskType: "alpha"
            },
            maskUnits: "userSpaceOnUse",
            x: "17",
            y: "24",
            width: "19",
            height: "27",
            children: (0, ft.jsx)("path", {
              d: "M18.7309 30.3774C17.9978 30.6454 17.3949 31.5172 17.3907 32.3117L17.3189 48.8433C17.3162 49.6383 17.9123 50.0684 18.6469 49.8009L33.7438 44.2772C34.477 44.0092 35.0807 43.1395 35.0835 42.3445L35.155 25.8042C35.1578 25.0092 34.5617 24.5791 33.8285 24.8471L18.7309 30.3774Z",
              fill: "#1B1B1C",
              stroke: "#0500FF",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          }), (0, ft.jsxs)("g", {
            mask: "url(#mask0_25_36815)",
            children: [(0, ft.jsx)("path", {
              d: "M36.1719 42.9336L17.3439 35.8448",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M36.1201 37.3867L17.3295 30.4783",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M36.1113 31.5156L19.7397 25.4701",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M36.1016 26.002L19.73 19.9565",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M34.1045 45.9648L13.8838 38.1375",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M29.8418 47.9219L9.62113 40.0946",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M25.6045 49.9356L5.38382 42.1082",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M21.0527 51.8359L0.832065 44.0086",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M30.8759 21.2617L30.876 41.3779L3.69678 50.9976",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, ft.jsx)("path", {
              d: "M25.2349 18.5664L25.2349 39.3196L-1.94434 48.9393",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, ft.jsx)("path", {
              d: "M20.0953 16.627L20.0952 37.3801L-7.08398 46.9999",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            })]
          }), (0, ft.jsx)("path", {
            d: "M27.3877 38.3038C27.3877 38.6047 27.5761 39.1658 28.0784 38.9706L31.0445 37.8866C31.2388 37.8142 31.3979 37.5827 31.3979 37.3713L31.3537 33.598C31.3537 33.2281 31.0113 33.1562 30.8171 33.228L27.7411 34.3561C27.5468 34.4286 27.3877 34.6601 27.3877 34.8715V38.3038Z",
            fill: "#1B1B1C",
            stroke: "#CC2121",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M21.0757 40.7373C21.0757 41.0383 21.2641 41.5994 21.7664 41.4042L24.7325 40.3202C24.9268 40.2477 25.0859 40.0163 25.0859 39.8049L25.0417 36.0316C25.0417 35.6616 24.6993 35.5898 24.505 35.6616L21.429 36.7897C21.2348 36.8622 21.0757 37.0936 21.0757 37.3051V40.7373Z",
            fill: "#1B1B1C",
            stroke: "#CC2121",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M33.9769 24.8014C34.0748 24.9667 34.1305 25.1743 34.1292 25.4186L34.0577 41.9589C34.0549 42.7539 33.4512 43.6236 32.718 43.8916L17.6217 49.4139C17.5713 49.4325 17.5205 49.4476 17.4708 49.4597C17.694 49.8349 18.136 49.9861 18.645 49.7996L33.7413 44.2774C34.4745 44.0093 35.0782 43.1396 35.081 42.3446L35.1525 25.8043C35.1555 25.0642 34.6389 24.6418 33.9764 24.8029L33.9769 24.8014Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M35.083 42.345L35.1546 25.8047C35.1575 25.0646 34.6409 24.6422 33.9784 24.8033C34.0763 24.9686 34.1319 25.1762 34.1307 25.4205L34.0591 41.9608L35.0824 42.3465L35.083 42.345Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M20.3336 19.4122C19.8119 19.6018 19.3821 20.2209 19.3781 20.7859L19.3053 26.1596C19.3024 26.7249 19.7257 27.0316 20.2484 26.8424L30.9915 22.9349C31.5132 22.7453 31.9437 22.1276 31.9466 21.5623L32.0192 16.4392C32.0222 15.8738 31.5989 15.5672 31.0772 15.7568L20.3336 19.4122Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M31.1826 15.6992C31.252 15.8169 31.2913 15.9646 31.2901 16.1383L31.2901 21.2944C31.2871 21.8597 30.7841 22.4683 30.2624 22.6579L19.5197 26.5644C19.4839 26.5776 19.4477 26.5882 19.4124 26.5968C19.5706 26.8639 20.0774 27.0543 20.4396 26.9224L31.1822 23.0159C31.7039 22.8264 32.1883 22.2369 32.1913 21.6716L32.1913 16.4839C32.1943 15.9576 31.6536 15.5866 31.1822 15.7003L31.1826 15.6992Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M32.1234 21.5784L32.1959 16.4703C32.199 15.944 31.6419 15.6315 31.1705 15.7452C31.2399 15.8628 31.2925 15.966 31.2925 16.2499L31.2925 21.3093L32.123 21.5794L32.1234 21.5784Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 23.8828)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 22.3262)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 21.5469)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 20.7695)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 19.9902)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 23.3789)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 21.8203)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 21.043)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 20.2617)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 19.4844)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 22.9141)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 21.3574)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 20.5781)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 19.8008)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 19.0215)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 22.4102)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 20.8535)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 20.0742)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 19.2969)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 18.5176)",
            fill: "#CC2121"
          }), (0, ft.jsx)("path", {
            d: "M51.9169 45.2174C51.538 45.076 50.9175 45.076 50.5372 45.2174L48.5247 46.0289C48.1457 46.1703 47.8354 46.6216 47.8354 47.0341V48.9972C47.8354 49.4084 48.1457 49.861 48.5247 50.0024L54.9679 52.3941C55.3468 52.5355 55.9674 52.5355 56.3476 52.3941L60.4438 53.0886C60.8227 52.9472 61.133 52.4958 61.133 52.0834L59.0494 48.6143C59.0494 48.2031 58.7391 47.7505 58.3602 47.6091L51.9169 45.2174Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M60.1879 53.4027C60.1879 54.052 59.6979 54.4023 59.0995 54.1811L48.9239 50.4039C48.3255 50.1806 47.8354 49.4678 47.8354 48.8164L47.8354 47.3721C47.8354 46.7227 48.3255 46.3725 48.9239 46.5937L59.0995 50.3709C59.6979 50.5942 60.1879 51.307 60.1879 51.9584V53.4027Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, ft.jsx)("path", {
            d: "M48.9615 46.6073C48.3631 46.384 48.3631 46.0214 48.9615 45.7982L50.3123 45.2788C50.9108 45.0555 51.8908 45.0555 52.4912 45.2788L62.6668 49.056C63.2652 49.2792 63.2652 49.6418 62.6668 49.8651L61.316 50.3845C60.7176 50.6077 59.7375 50.6077 59.1371 50.3845L48.9615 46.6073Z",
            fill: "#FFAEFE",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M46.9238 47.065C46.5448 46.9236 45.9243 46.9236 45.5441 47.065L43.5315 47.8765C43.1526 48.0179 42.8423 48.4693 42.8423 48.8817V50.8448C42.8423 51.256 43.1526 51.7087 43.5315 51.8501L49.9747 54.2418C50.3537 54.3832 50.9742 54.3832 51.3544 54.2418L55.4506 54.9362C55.8295 54.7949 56.1398 54.3435 56.1398 53.931L54.0562 50.462C54.0562 50.0508 53.746 49.5981 53.367 49.4568L46.9238 47.065Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M55.1947 55.2503C55.1947 55.8997 54.7047 56.2499 54.1063 56.0287L43.9307 52.2515C43.3323 52.0282 42.8423 51.3154 42.8423 50.664L42.8423 49.2197C42.8423 48.5704 43.3323 48.2201 43.9307 48.4414L54.1063 52.2185C54.7047 52.4418 55.1947 53.1546 55.1947 53.806V55.2503Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, ft.jsx)("path", {
            d: "M47.8906 54.0742L48.6904 50.6367L49.4822 50.9311V54.6748L47.8906 54.0742Z",
            fill: "#1B1B1C"
          }), (0, ft.jsx)("path", {
            d: "M43.9703 48.4549C43.3719 48.2317 43.3719 47.8691 43.9703 47.6458L45.3211 47.1264C45.9195 46.9032 46.8995 46.9032 47.5 47.1264L57.6756 50.9036C58.274 51.1269 58.274 51.4895 57.6756 51.7127L56.3248 52.2321C55.7263 52.4554 54.7463 52.4554 54.1459 52.2321L43.9703 48.4549Z",
            fill: "url(#paint3_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M60.6578 40.7417C60.0593 40.5184 59.0793 40.5184 58.4789 40.7417L48.3033 44.5189C47.7048 44.7421 47.2148 45.455 47.2148 46.1063V58.3925C47.2148 59.0418 47.7048 59.7567 48.3033 59.9799L58.4789 63.7571C59.0773 63.9804 60.0573 63.9804 60.6578 63.7571L70.8333 59.9799C71.4318 59.7567 71.9218 59.0438 71.9218 58.3925V46.1063C71.9218 45.457 71.4318 44.7421 70.8333 44.5189L60.6578 40.7417Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M59.5673 62.9789C59.5673 63.6282 59.0773 63.9785 58.4789 63.7572L48.3033 59.98C47.7048 59.7568 47.2148 59.0439 47.2148 58.3926V46.1065C47.2148 45.4571 47.7048 45.1068 48.3033 45.3281L58.4789 49.1053C59.0773 49.3285 59.5673 50.0414 59.5673 50.6927V62.9789Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, ft.jsx)("path", {
            d: "M59.5713 62.9789C59.5713 63.6282 60.0613 63.9785 60.6597 63.7572L70.8353 59.98C71.4338 59.7568 71.9238 59.0439 71.9238 58.3926V46.1065C71.9238 45.4571 71.4338 45.1068 70.8353 45.3281L60.6597 49.1053C60.0613 49.3285 59.5713 50.0414 59.5713 50.6927V62.9789Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M70.4427 55.7476V55.4704C70.4427 54.4404 69.4237 53.7203 68.4528 54.0641C67.8571 54.2751 67.459 54.8385 67.459 55.4704V55.7476C67.459 56.7809 68.4841 57.5013 69.4563 57.1512C70.0481 56.938 70.4427 56.3766 70.4427 55.7476Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M48.3033 45.328C47.7049 45.1047 47.7049 44.7421 48.3033 44.5189L58.4789 40.7417C59.0773 40.5184 60.0573 40.5184 60.6578 40.7417L70.8334 44.5189C71.4318 44.7421 71.4318 45.1047 70.8334 45.328L60.6578 49.1052C60.0594 49.3284 59.0793 49.3284 58.4789 49.1052L48.3033 45.328Z",
            fill: "url(#paint4_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M77.6901 59.5193L68.6221 56.3624L68.5534 56.2087C68.318 55.6817 68.5395 55.0627 69.0559 54.8047L78.1239 57.9615C81.3649 58.8641 83.4472 61.1399 83.4472 64.5042V66.4948C83.4472 69.0207 85.0613 71.264 87.4563 72.0666L92.6606 73.5998C96.4528 74.8707 96.7286 80.1289 93.0901 81.7896L66.749 92.5591L66.0776 91.088L92.4187 80.3186C94.7225 79.2671 94.5479 75.9377 92.1467 75.133L86.9425 73.5998C83.8885 72.5763 81.8302 69.7157 81.8302 66.4948V64.5042C81.8302 61.8659 80.2317 60.2271 77.6901 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, ft.jsx)("path", {
            d: "M77.6905 59.5193L68.6225 56.3624L68.5539 56.2087C68.3184 55.6817 68.5399 55.0627 69.0563 54.8047L78.1243 57.9615C81.3653 58.8641 83.4476 61.1399 83.4476 64.5042V66.4948H81.8306V64.5042C81.8306 61.8659 80.2321 60.2271 77.6905 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, ft.jsx)("path", {
            d: "M42.5664 8.36625L40.1549 7.77431L8.05203 19.1136L10.349 19.944L42.5664 8.36625Z",
            fill: "url(#paint5_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M41.0249 27.496L44.2537 26.4355",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, ft.jsx)("path", {
            d: "M41.3149 28.7865L43.9628 27.9082",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, ft.jsx)("path", {
            d: "M40.6772 30.4113L44.6018 29.0469",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, ft.jsx)("path", {
            d: "M41.7568 31.3939L43.5221 30.8301",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          })]
        }), (0, ft.jsxs)("defs", {
          children: [(0, ft.jsxs)("linearGradient", {
            id: "paint0_linear_25_36815",
            x1: "8.22364",
            y1: "57.2971",
            x2: "7.50162",
            y2: "60.7907",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint1_linear_25_36815",
            x1: "10.6118",
            y1: "24.886",
            x2: "4.01326",
            y2: "56.814",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint2_linear_25_36815",
            x1: "8.49714",
            y1: "19.2104",
            x2: "7.37564",
            y2: "24.6369",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint3_linear_25_36815",
            x1: "50.8229",
            y1: "46.959",
            x2: "50.8229",
            y2: "52.3996",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint4_linear_25_36815",
            x1: "59.5683",
            y1: "40.5742",
            x2: "59.5683",
            y2: "49.2726",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint5_linear_25_36815",
            x1: "27.4803",
            y1: "5.15485",
            x2: "23.8472",
            y2: "22.7337",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsx)("clipPath", {
            id: "clip0_25_36815",
            children: (0, ft.jsx)("rect", {
              width: "96",
              height: "97.92",
              fill: "white",
              transform: "translate(0.668945)"
            })
          })]
        })]
      }),
      Zi = ({
        width: e,
        height: n
      }) => (0, ft.jsxs)("svg", {
        fill: "none",
        width: e ?? 96,
        height: n ?? 96,
        viewBox: "0 0 96 96",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, ft.jsxs)("g", {
          clipPath: "url(#clip0_25_36391)",
          children: [(0, ft.jsx)("path", {
            d: "M7.96533 59.941V23.0565C7.96533 22.0109 8.62302 21.0783 9.60797 20.7273L43.3404 8.70626C44.9505 8.1325 46.6432 9.32625 46.6432 11.0355V47.8302C46.6432 48.8737 45.9881 49.8048 45.006 50.1574L11.2736 62.2683C9.66255 62.8467 7.96533 61.6527 7.96533 59.941Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, ft.jsx)("path", {
            d: "M7.90655 60.6488C8.70977 61.2145 10.0868 61.2464 10.0868 61.2464C8.69612 61.1351 7.69163 59.7198 7.68502 57.5581L5.50198 56.7348C5.5092 58.8942 7.10332 60.0832 7.90655 60.6488Z",
            fill: "url(#paint0_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M7.69766 24.7121L5.5225 23.8345L5.52259 56.7494L7.69733 57.5757L7.69766 24.7121Z",
            fill: "url(#paint1_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M10.3448 19.9372L8.10352 19.129C6.5982 19.4323 5.52346 21.5357 5.5306 23.8321L7.70049 24.704C7.69335 22.4076 8.88966 20.5215 10.3448 19.9372Z",
            fill: "url(#paint2_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M5.56526 30.3743L7.70131 28.504L7.73953 38.3789L5.60348 40.2492L5.56526 30.3743Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M5.55144 41.6915L7.66362 39.9392L7.66981 42.4359L5.55968 44.1887L5.55144 41.6915Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M10.687 47.3547L11.4942 47.0193L11.5004 49.516L10.6953 49.8519L10.687 47.3547Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M10.6887 46.2746L11.4958 45.9392L11.502 46.6677L10.6968 47.0036L10.6887 46.2746Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M13.5264 25.424C12.2546 25.8889 11.2088 27.4012 11.2015 28.7793L11.0771 54.4911C11.0724 55.8701 12.1064 56.6162 13.3808 56.1523L38.6605 46.8785C39.9323 46.4136 40.9797 44.9049 40.9844 43.5258L41.1084 17.7991C41.1131 16.42 40.0792 15.6739 38.8073 16.1389L13.5264 25.424Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("mask", {
            id: "mask0_25_36391",
            style: {
              maskType: "alpha"
            },
            maskUnits: "userSpaceOnUse",
            x: "17",
            y: "24",
            width: "19",
            height: "27",
            children: (0, ft.jsx)("path", {
              d: "M18.7309 30.3774C17.9978 30.6454 17.3949 31.5172 17.3907 32.3117L17.3189 48.8433C17.3162 49.6383 17.9123 50.0684 18.6469 49.8009L33.7438 44.2772C34.477 44.0092 35.0807 43.1395 35.0835 42.3445L35.155 25.8042C35.1578 25.0092 34.5617 24.5791 33.8285 24.8471L18.7309 30.3774Z",
              fill: "#1B1B1C",
              stroke: "#0500FF",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          }), (0, ft.jsxs)("g", {
            mask: "url(#mask0_25_36391)",
            children: [(0, ft.jsx)("path", {
              d: "M36.1694 42.9336L17.3414 35.8448",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M36.1187 37.3867L17.3281 30.4783",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M36.1094 31.5156L19.7378 25.4701",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M36.0996 26.002L19.728 19.9565",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M34.103 45.9648L13.8824 38.1375",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M29.8394 47.9219L9.61869 40.0946",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M25.6035 49.9375L5.38285 42.1102",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M21.0513 51.8359L0.8306 44.0086",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, ft.jsx)("path", {
              d: "M30.8744 21.2617L30.8745 41.3779L3.69531 50.9976",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, ft.jsx)("path", {
              d: "M25.2339 18.5664L25.2339 39.3196L-1.94531 48.9393",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, ft.jsx)("path", {
              d: "M20.0933 16.627L20.0933 37.3801L-7.08594 46.9999",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            })]
          }), (0, ft.jsx)("path", {
            d: "M27.3882 38.3038C27.3882 38.6047 27.5766 39.1658 28.0789 38.9706L31.045 37.8866C31.2393 37.8142 31.3984 37.5827 31.3984 37.3713L31.3542 33.598C31.3542 33.2281 31.0118 33.1562 30.8175 33.228L27.7415 34.3561C27.5473 34.4286 27.3882 34.6601 27.3882 34.8715V38.3038Z",
            fill: "#CC2121",
            stroke: "#1B1B1C",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M21.0747 40.7373C21.0747 41.0382 21.2631 41.5994 21.7654 41.4042L24.7316 40.3202C24.9258 40.2477 25.0849 40.0163 25.0849 39.8049L25.0407 36.0316C25.0407 35.6616 24.6984 35.5898 24.5041 35.6616L21.4281 36.7897C21.2338 36.8622 21.0747 37.0936 21.0747 37.3051V40.7373Z",
            fill: "#CC2121",
            stroke: "#1B1B1C",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M33.9774 24.8014C34.0753 24.9667 34.131 25.1743 34.1297 25.4186L34.0582 41.9589C34.0554 42.7539 33.4517 43.6236 32.7185 43.8916L17.6221 49.4139C17.5717 49.4325 17.521 49.4476 17.4713 49.4597C17.6945 49.8349 18.1365 49.9861 18.6454 49.7996L33.7418 44.2774C34.475 44.0093 35.0787 43.1396 35.0815 42.3446L35.153 25.8043C35.156 25.0642 34.6394 24.6418 33.9769 24.8029L33.9774 24.8014Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M35.082 42.345L35.1536 25.8047C35.1566 25.0646 34.6399 24.6422 33.9774 24.8033C34.0753 24.9686 34.131 25.1762 34.1297 25.4205L34.0581 41.9608L35.0815 42.3465L35.082 42.345Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M20.3331 19.4122C19.8114 19.6018 19.3816 20.2209 19.3776 20.7859L19.3049 26.1596C19.3019 26.7249 19.7252 27.0316 20.248 26.8424L30.991 22.9349C31.5127 22.7453 31.9432 22.1276 31.9462 21.5623L32.0187 16.4392C32.0217 15.8738 31.5984 15.5672 31.0767 15.7568L20.3331 19.4122Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M31.1831 15.6992C31.2525 15.8169 31.2918 15.9646 31.2906 16.1383L31.2906 21.2944C31.2876 21.8597 30.7846 22.4683 30.2629 22.6579L19.5202 26.5644C19.4844 26.5776 19.4482 26.5882 19.4129 26.5968C19.5711 26.8639 20.0779 27.0543 20.4401 26.9224L31.1827 23.0159C31.7044 22.8264 32.1888 22.2369 32.1918 21.6716L32.1917 16.4839C32.1948 15.9576 31.6541 15.5866 31.1827 15.7003L31.1831 15.6992Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M32.1224 21.5784L32.195 16.4703C32.198 15.944 31.6409 15.6315 31.1696 15.7452C31.239 15.8628 31.2916 15.966 31.2916 16.2499L31.2916 21.3093L32.122 21.5794L32.1224 21.5784Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 23.8789)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 22.3223)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 21.543)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 20.7656)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 19.9863)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 23.375)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 21.8184)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 21.0391)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 20.2617)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 19.4824)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 22.9141)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 21.3555)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 20.5781)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 19.7969)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 19.0195)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 22.4062)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 20.8496)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 20.0703)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 19.293)",
            fill: "#CC2121"
          }), (0, ft.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 18.5137)",
            fill: "#CC2121"
          }), (0, ft.jsx)("path", {
            d: "M51.9174 45.2174C51.5385 45.076 50.9179 45.076 50.5377 45.2174L48.5251 46.0289C48.1462 46.1703 47.8359 46.6216 47.8359 47.0341V48.9972C47.8359 49.4084 48.1462 49.861 48.5251 50.0024L54.9684 52.3941C55.3473 52.5355 55.9679 52.5355 56.3481 52.3941L60.4443 53.0886C60.8232 52.9472 61.1335 52.4958 61.1335 52.0834L59.0499 48.6143C59.0499 48.2031 58.7396 47.7505 58.3607 47.6091L51.9174 45.2174Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M60.1884 53.4027C60.1884 54.052 59.6984 54.4023 59.1 54.1811L48.9244 50.4039C48.3259 50.1806 47.8359 49.4678 47.8359 48.8164L47.8359 47.3721C47.8359 46.7227 48.3259 46.3725 48.9244 46.5937L59.1 50.3709C59.6984 50.5942 60.1884 51.307 60.1884 51.9584V53.4027Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, ft.jsx)("path", {
            d: "M48.9615 46.6073C48.3631 46.384 48.3631 46.0214 48.9615 45.7982L50.3123 45.2788C50.9108 45.0555 51.8908 45.0555 52.4912 45.2788L62.6668 49.056C63.2652 49.2792 63.2652 49.6418 62.6668 49.8651L61.316 50.3845C60.7176 50.6077 59.7375 50.6077 59.1371 50.3845L48.9615 46.6073Z",
            fill: "#FFAEFE",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M46.9243 47.065C46.5453 46.9236 45.9248 46.9236 45.5446 47.065L43.532 47.8765C43.153 48.0179 42.8428 48.4693 42.8428 48.8817V50.8448C42.8428 51.256 43.153 51.7087 43.532 51.8501L49.9752 54.2418C50.3542 54.3832 50.9747 54.3832 51.3549 54.2418L55.4511 54.9362C55.83 54.7949 56.1403 54.3435 56.1403 53.931L54.0567 50.462C54.0567 50.0508 53.7464 49.5981 53.3675 49.4568L46.9243 47.065Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M55.1952 55.2503C55.1952 55.8997 54.7052 56.2499 54.1068 56.0287L43.9312 52.2515C43.3328 52.0282 42.8428 51.3154 42.8428 50.664L42.8428 49.2197C42.8428 48.5704 43.3328 48.2201 43.9312 48.4414L54.1068 52.2185C54.7052 52.4418 55.1952 53.1546 55.1952 53.806V55.2503Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, ft.jsx)("path", {
            d: "M47.8911 54.0742L48.6909 50.6367L49.4827 50.9311V54.6748L47.8911 54.0742Z",
            fill: "#1B1B1C"
          }), (0, ft.jsx)("path", {
            d: "M43.9703 48.4549C43.3719 48.2317 43.3719 47.8691 43.9703 47.6458L45.3211 47.1264C45.9195 46.9032 46.8995 46.9032 47.5 47.1264L57.6756 50.9036C58.274 51.1269 58.274 51.4895 57.6756 51.7127L56.3248 52.2321C55.7263 52.4554 54.7463 52.4554 54.1459 52.2321L43.9703 48.4549Z",
            fill: "url(#paint3_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M60.6582 40.7417C60.0598 40.5184 59.0798 40.5184 58.4793 40.7417L48.3038 44.5189C47.7053 44.7421 47.2153 45.455 47.2153 46.1063V58.3925C47.2153 59.0418 47.7053 59.7567 48.3038 59.9799L58.4793 63.7571C59.0778 63.9804 60.0578 63.9804 60.6582 63.7571L70.8338 59.9799C71.4323 59.7567 71.9223 59.0438 71.9223 58.3925V46.1063C71.9223 45.457 71.4323 44.7421 70.8338 44.5189L60.6582 40.7417Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M59.5678 62.9789C59.5678 63.6282 59.0778 63.9785 58.4793 63.7572L48.3038 59.98C47.7053 59.7568 47.2153 59.0439 47.2153 58.3926V46.1065C47.2153 45.4571 47.7053 45.1068 48.3038 45.3281L58.4793 49.1053C59.0778 49.3285 59.5678 50.0414 59.5678 50.6927V62.9789Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, ft.jsx)("path", {
            d: "M59.5718 62.9789C59.5718 63.6282 60.0618 63.9785 60.6602 63.7572L70.8358 59.98C71.4342 59.7568 71.9242 59.0439 71.9242 58.3926V46.1065C71.9242 45.4571 71.4342 45.1068 70.8358 45.3281L60.6602 49.1053C60.0618 49.3285 59.5718 50.0414 59.5718 50.6927V62.9789Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M70.4432 55.7476V55.4704C70.4432 54.4404 69.4242 53.7203 68.4533 54.0641C67.8576 54.2751 67.4595 54.8385 67.4595 55.4704V55.7476C67.4595 56.7809 68.4846 57.5013 69.4568 57.1512C70.0486 56.938 70.4432 56.3766 70.4432 55.7476Z",
            fill: "#0500FF"
          }), (0, ft.jsx)("path", {
            d: "M48.3033 45.328C47.7049 45.1047 47.7049 44.7421 48.3033 44.5189L58.4789 40.7417C59.0773 40.5184 60.0573 40.5184 60.6578 40.7417L70.8334 44.5189C71.4318 44.7421 71.4318 45.1047 70.8334 45.328L60.6578 49.1052C60.0594 49.3284 59.0793 49.3284 58.4789 49.1052L48.3033 45.328Z",
            fill: "url(#paint4_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M77.6911 59.5193L68.623 56.3624L68.5544 56.2087C68.319 55.6817 68.5405 55.0627 69.0568 54.8047L78.1249 57.9615C81.3658 58.8641 83.4482 61.1399 83.4482 64.5042V66.4948C83.4482 69.0207 85.0623 71.264 87.4573 72.0666L92.6615 73.5998C96.4538 74.8707 96.7296 80.1289 93.0911 81.7896L66.75 92.5591L66.0786 91.088L92.4197 80.3186C94.7235 79.2671 94.5489 75.9377 92.1477 75.133L86.9435 73.5998C83.8895 72.5763 81.8312 69.7157 81.8312 66.4948V64.5042C81.8312 61.8659 80.2327 60.2271 77.6911 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, ft.jsx)("path", {
            d: "M77.691 59.5193L68.623 56.3624L68.5543 56.2087C68.3189 55.6817 68.5404 55.0627 69.0568 54.8047L78.1248 57.9615C81.3658 58.8641 83.4481 61.1399 83.4481 64.5042V66.4948H81.8311V64.5042C81.8311 61.8659 80.2326 60.2271 77.691 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, ft.jsx)("path", {
            d: "M42.5654 8.36625L40.1539 7.77431L8.05105 19.1136L10.348 19.944L42.5654 8.36625Z",
            fill: "url(#paint5_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, ft.jsx)("path", {
            d: "M41.0239 27.496L44.2527 26.4355",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, ft.jsx)("path", {
            d: "M41.3149 28.7865L43.9628 27.9082",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, ft.jsx)("path", {
            d: "M40.6763 30.4113L44.6008 29.0469",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, ft.jsx)("path", {
            d: "M41.7563 31.3939L43.5216 30.8301",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          })]
        }), (0, ft.jsxs)("defs", {
          children: [(0, ft.jsxs)("linearGradient", {
            id: "paint0_linear_25_36391",
            x1: "8.22267",
            y1: "57.2971",
            x2: "7.50065",
            y2: "60.7907",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint1_linear_25_36391",
            x1: "10.6104",
            y1: "24.886",
            x2: "4.0118",
            y2: "56.814",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint2_linear_25_36391",
            x1: "8.49714",
            y1: "19.2104",
            x2: "7.37564",
            y2: "24.6369",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint3_linear_25_36391",
            x1: "50.8229",
            y1: "46.959",
            x2: "50.8229",
            y2: "52.3996",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint4_linear_25_36391",
            x1: "59.5683",
            y1: "40.5742",
            x2: "59.5683",
            y2: "49.2726",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsxs)("linearGradient", {
            id: "paint5_linear_25_36391",
            x1: "27.4793",
            y1: "5.15485",
            x2: "23.8463",
            y2: "22.7337",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, ft.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, ft.jsx)("clipPath", {
            id: "clip0_25_36391",
            children: (0, ft.jsx)("rect", {
              width: "96",
              height: "97.92",
              fill: "white",
              transform: "translate(0.668945)"
            })
          })]
        })]
      }),
      Ui = e => `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${e}/info/logo.png`;

    function $i({
      token: e,
      index: n,
      onClick: t
    }) {
      var r, i;
      const {
        formatMessage: o
      } = Di(), a = e.isLoading ? "" : Yn(e.price), s = e.isLoading ? "" : qn(e.change24h), l = e.isLoading ? "" : Kn(e.marketCap), u = e.isLoading ? "" : Xn(e.volume24h), c = null != (i = null == (r = s?.startsWith) ? void 0 : r.call(s, "+")) && i;
      return (0, ft.jsxs)("div", {
        className: "trust-token-list-row",
        onClick: () => {
          t && !e.isLoading && t(e)
        },
        style: {
          cursor: e.isLoading ? "default" : "pointer"
        },
        children: [(0, ft.jsx)("div", {
          className: "trust-token-list-col ",
          children: e.isLoading ? (0, ft.jsxs)(ft.Fragment, {
            children: [(0, ft.jsx)("div", {
              className: "skeleton",
              style: {
                width: "40px",
                height: "40px",
                borderRadius: "50%"
              }
            }), (0, ft.jsxs)("div", {
              className: "trust-token-list-name-info",
              children: [(0, ft.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "80px",
                  height: "20px",
                  marginBottom: "4px"
                }
              }), (0, ft.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "60px",
                  height: "16px"
                }
              })]
            })]
          }) : (0, ft.jsxs)(ft.Fragment, {
            children: [(0, ft.jsxs)("div", {
              className: "trust-token-list-logo-container",
              children: [(0, ft.jsx)("img", {
                className: "trust-token-list-logo",
                src: e.logo,
                alt: e.symbol,
                width: 40,
                height: 40
              }), (0, ft.jsx)("img", {
                className: "trust-token-list-chain-badge",
                src: Ui(e.chainId),
                alt: e.chainName,
                width: 16,
                height: 16
              })]
            }), (0, ft.jsxs)("div", {
              className: "trust-token-list-name-info",
              children: [(0, ft.jsxs)("div", {
                className: "trust-token-list-symbol-row",
                children: [(0, ft.jsx)("span", {
                  className: "trust-token-list-symbol",
                  children: e.symbol
                }), e.isRecent && (0, ft.jsx)("span", {
                  className: "trust-token-list-recent-badge",
                  children: o({
                    id: "token-scanner.list.recent",
                    defaultMessage: "Recent"
                  })
                })]
              }), (0, ft.jsx)("div", {
                className: "trust-token-list-chain",
                children: e.networkName || e.chainName
              })]
            })]
          })
        }), (0, ft.jsx)("div", {
          className: "trust-token-list-col ",
          children: e.isLoading ? (0, ft.jsxs)(ft.Fragment, {
            children: [(0, ft.jsx)("div", {
              className: "skeleton",
              style: {
                width: "70px",
                height: "20px",
                marginBottom: "4px"
              }
            }), (0, ft.jsx)("div", {
              className: "skeleton",
              style: {
                width: "50px",
                height: "16px"
              }
            })]
          }) : (0, ft.jsxs)(ft.Fragment, {
            children: [(0, ft.jsx)("div", {
              className: "trust-token-list-col-numeric",
              children: a
            }), (0, ft.jsx)("div", {
              className: "trust-token-list-change " + (c ? "positive" : "negative"),
              children: s
            })]
          })
        }), (0, ft.jsx)("div", {
          className: "trust-token-list-col trust-token-list-col-numeric",
          children: e.isLoading ? (0, ft.jsx)("div", {
            className: "skeleton",
            style: {
              width: "70px",
              height: "20px"
            }
          }) : l
        }), (0, ft.jsx)("div", {
          className: "trust-token-list-col trust-token-list-col-numeric",
          children: e.isLoading ? (0, ft.jsx)("div", {
            className: "skeleton",
            style: {
              width: "70px",
              height: "20px"
            }
          }) : u
        })]
      }, e.assetId || n)
    }
    const Gi = ({
        width: e,
        height: n
      }) => (0, ft.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 113,
        height: n ?? 31,
        viewBox: "0 0 113 31",
        children: [(0, ft.jsx)("path", {
          d: "M51.0146 7.22656H56.4012V10.2437C58.166 7.53213 60.1968 7.22656 63.1698 7.22656V12.5585H61.8159C58.2534 12.5585 56.5478 14.235 56.5478 17.5558V23.2234H51.0146V7.22656Z",
          fill: "#48FF91"
        }), (0, ft.jsx)("path", {
          d: "M81.1414 23.2225H75.6092V21.6974C74.401 23.0993 72.7547 23.7086 70.7248 23.7086C66.8699 23.7086 64.6904 21.4229 64.6904 17.2192V7.22559H70.2227V15.9715C70.2227 17.9507 71.1939 19.1081 72.8412 19.1081C74.4885 19.1081 75.6082 17.9798 75.6082 16.0618V7.22559H81.1405V23.2225H81.1414Z",
          fill: "#48FF91"
        }), (0, ft.jsx)("path", {
          d: "M82.4941 18.2844H87.6757C87.9117 19.4418 88.7062 19.9288 90.6176 19.9288C92.1784 19.9288 93.0904 19.564 93.0904 18.8937C93.0904 18.3747 92.6485 18.039 91.3848 17.7654L87.2056 16.8205C84.4094 16.1821 82.9962 14.5668 82.9962 11.9755C82.9962 8.56159 85.4972 6.79492 90.3534 6.79492C95.2097 6.79492 97.5931 8.51646 98.0068 12.2049H92.8572C92.7698 11.2309 91.7675 10.6348 90.1203 10.6348C88.7964 10.6348 87.9446 11.0607 87.9446 11.7019C87.9446 12.2501 88.5021 12.676 89.6229 12.9524L94.0071 14.0196C96.8908 14.7191 98.2757 16.183 98.2757 18.5589C98.2757 21.8506 95.4203 23.8007 90.5669 23.8007C85.7134 23.8007 82.5026 21.6983 82.5026 18.2844H82.497H82.4941Z",
          fill: "#48FF91"
        }), (0, ft.jsx)("path", {
          d: "M113.006 12.2012V7.22559H99.3506V12.204H103.426V23.2225H108.93V12.2012H113.006Z",
          fill: "#48FF91"
        }), (0, ft.jsx)("path", {
          d: "M49.4741 12.2012V7.22559H35.8193V12.204H39.8942V23.2225H45.3992V12.2012H49.4741Z",
          fill: "#48FF91"
        }), (0, ft.jsx)("path", {
          d: "M0 4.41433L13.5815 0V30.559C3.88028 26.4841 0 18.6746 0 14.2612V4.41433Z",
          fill: "#48FF91"
        }), (0, ft.jsx)("path", {
          d: "M27.1635 4.41433L13.582 0V30.559C23.2832 26.4841 27.1635 18.6746 27.1635 14.2612V4.41433Z",
          fill: "url(#paint0_linear_6034_27192)"
        }), (0, ft.jsx)("defs", {
          children: (0, ft.jsxs)("linearGradient", {
            id: "paint0_linear_6034_27192",
            x1: "13.0085",
            y1: "34.3998",
            x2: "24.1247",
            y2: "-5.80867",
            gradientUnits: "userSpaceOnUse",
            children: [(0, ft.jsx)("stop", {
              offset: "0.26",
              stopColor: "#48FF91"
            }), (0, ft.jsx)("stop", {
              offset: "0.66",
              stopColor: "#0094FF"
            }), (0, ft.jsx)("stop", {
              offset: "0.8",
              stopColor: "#0038FF"
            }), (0, ft.jsx)("stop", {
              offset: "0.89",
              stopColor: "#0500FF"
            })]
          })
        })]
      }),
      zi = ({
        width: e,
        height: n,
        colorClass: t
      }) => (0, ft.jsx)("svg", {
        className: t,
        width: e ?? 12,
        height: n ?? 12,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, ft.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.42746 2.42857C7.42746 3.21755 6.78786 3.85714 5.99888 3.85714C5.20991 3.85714 4.57031 3.21755 4.57031 2.42857C4.57031 1.63959 5.20991 1 5.99888 1C6.78786 1 7.42746 1.63959 7.42746 2.42857ZM7.42746 6C7.42746 6.78898 6.78786 7.42857 5.99888 7.42857C5.20991 7.42857 4.57031 6.78898 4.57031 6C4.57031 5.21102 5.20991 4.57143 5.99888 4.57143C6.78786 4.57143 7.42746 5.21102 7.42746 6ZM5.99888 11C6.78786 11 7.42746 10.3604 7.42746 9.57143C7.42746 8.78243 6.78786 8.14286 5.99888 8.14286C5.20991 8.14286 4.57031 8.78243 4.57031 9.57143C4.57031 10.3604 5.20991 11 5.99888 11Z",
          fill: "currentColor"
        })
      });

    function Yi() {
      const {
        formatMessage: e
      } = Di();
      return (0, ft.jsxs)("div", {
        className: "trust-token-popup-footer",
        children: [(0, ft.jsxs)("div", {
          className: "trust-token-powered",
          children: [e({
            id: "token-scanner.popup.powered-by",
            defaultMessage: "Powered by"
          }), " ", (0, ft.jsx)("span", {
            className: "trust-token-powered-brand",
            children: (0, ft.jsx)(Gi, {
              width: 56,
              height: 16
            })
          })]
        }), (0, ft.jsx)("button", {
          className: "trust-token-menu-button",
          "aria-label": "Menu",
          children: (0, ft.jsx)(zi, {
            colorClass: "text-utility-1-default"
          })
        })]
      })
    }

    function qi({
      token: e,
      isLoading: n = !1,
      hasError: t = !1,
      onRetry: r,
      onSimilarTokenClick: i,
      similarTokensCount: o = 0,
      similarTokens: a
    }) {
      var s, l, u, c, f, h;
      const {
        formatMessage: d
      } = Di(), p = null != (u = null == (l = null == (s = e?.change24h) ? void 0 : s.startsWith) ? void 0 : l.call(s, "+")) && u, g = null != (h = null == (f = null == (c = e?.change24h) ? void 0 : c.replace) ? void 0 : f.call(c, /[+-]/, "")) ? h : "", A = e?.logo || "/", [m, v] = (0, Jr.useState)(!1), [b, C] = (0, Jr.useState)(() => {
        const e = document.body.style.backgroundColor;
        return !e.includes("255, 255, 255") && !e.includes("242, 242, 242")
      }), y = b ? Wi : Zi;
      if (a || m) {
        const e = a || [];
        return (0, ft.jsxs)("div", {
          className: "trust-token-popup-container",
          children: [(0, ft.jsxs)("div", {
            className: "trust-token-list-header",
            children: [(0, ft.jsx)("div", {
              className: "trust-token-list-header-col",
              children: d({
                id: "token-scanner.popup.name-label",
                defaultMessage: "Name"
              })
            }), (0, ft.jsx)("div", {
              className: "trust-token-list-header-col",
              children: d({
                id: "token-scanner.popup.price-label",
                defaultMessage: "Price"
              })
            }), (0, ft.jsx)("div", {
              className: "trust-token-list-header-col ",
              children: d({
                id: "token-scanner.popup.market-cap-label",
                defaultMessage: "Market Cap"
              })
            }), (0, ft.jsx)("div", {
              className: "trust-token-list-header-col ",
              children: d({
                id: "token-scanner.popup.volume-label",
                defaultMessage: "24H Volume"
              })
            })]
          }), (0, ft.jsx)("div", {
            className: "trust-token-list-scroll",
            children: e.map((e, n) => (0, ft.jsx)($i, {
              token: e,
              index: n,
              onClick: i
            }, e.assetId || n))
          }), (0, ft.jsx)(Yi, {})]
        })
      }
      return (0, ft.jsxs)("div", {
        className: "trust-token-popup-container",
        children: [(0, ft.jsxs)("div", {
          className: "trust-token-popup-header",
          children: [(0, ft.jsxs)("div", {
            className: "trust-token-header-left",
            children: [(0, ft.jsxs)("div", {
              className: "trust-token-popup-logo-container",
              children: [(0, ft.jsx)("img", {
                className: "trust-token-popup-logo",
                src: A,
                alt: e.symbol + " logo",
                width: 40,
                height: 40
              }), e.chainId && (0, ft.jsx)("img", {
                className: "trust-token-popup-chain-badge",
                src: (k = e.chainId, `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${k}/info/logo.png`),
                alt: e.chainName || "",
                width: 16,
                height: 16
              })]
            }), (0, ft.jsxs)("div", {
              className: "trust-token-header-info",
              children: [(0, ft.jsx)("div", {
                className: "trust-token-popup-symbol",
                children: e.symbol
              }), (0, ft.jsx)("div", {
                className: "trust-token-popup-name",
                children: e.name
              })]
            })]
          }), (0, ft.jsxs)("button", {
            className: "trust-token-swap-button",
            disabled: n || t,
            children: [d({
              id: "token-scanner.popup.swap-button",
              defaultMessage: "Swap in Trust"
            }), (0, ft.jsx)(_i, {
              width: 16,
              height: 16
            })]
          })]
        }), t ? (0, ft.jsxs)("div", {
          className: "trust-token-error-state",
          children: [(0, ft.jsx)("div", {
            className: "trust-token-error-illustration",
            children: (0, ft.jsx)(y, {})
          }), (0, ft.jsx)("div", {
            className: "trust-token-error-message",
            children: d({
              id: "token-scanner.error.message",
              defaultMessage: "Could not load prices"
            })
          }), (0, ft.jsxs)("button", {
            className: "trust-token-retry-button",
            onClick: r,
            children: [d({
              id: "token-scanner.error.retry",
              defaultMessage: "Try again"
            }), (0, ft.jsx)(Vi, {
              width: 16,
              height: 16
            })]
          })]
        }) : (0, ft.jsxs)(ft.Fragment, {
          children: [(0, ft.jsx)("div", {
            className: "trust-token-price-card",
            children: (0, ft.jsxs)("div", {
              className: "trust-token-price-row",
              children: [(0, ft.jsxs)("div", {
                children: [(0, ft.jsx)("div", {
                  className: "trust-token-price-label",
                  children: d({
                    id: "token-scanner.popup.price-label",
                    defaultMessage: "Price"
                  })
                }), n ? (0, ft.jsx)("div", {
                  className: "skeleton",
                  style: {
                    width: "80px",
                    height: "24px"
                  }
                }) : (0, ft.jsx)("div", {
                  className: "trust-token-price-value",
                  children: e.price
                })]
              }), n ? (0, ft.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "60px",
                  height: "20px"
                }
              }) : (0, ft.jsxs)("div", {
                className: "trust-token-price-change " + (p ? "positive" : "negative"),
                children: [p ? (0, ft.jsx)(ji, {
                  width: 16,
                  height: 16
                }) : (0, ft.jsx)(Oi, {
                  width: 16,
                  height: 16
                }), g]
              })]
            })
          }), (0, ft.jsxs)("div", {
            className: "trust-token-stats-row",
            children: [(0, ft.jsxs)("div", {
              className: "trust-token-stat-card",
              children: [(0, ft.jsx)("div", {
                className: "trust-token-stat-label",
                children: d({
                  id: "token-scanner.popup.market-cap-label",
                  defaultMessage: "Market Cap"
                })
              }), n ? (0, ft.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "70px",
                  height: "20px"
                }
              }) : (0, ft.jsx)("div", {
                className: "trust-token-stat-value",
                children: e.marketCap
              })]
            }), (0, ft.jsxs)("div", {
              className: "trust-token-stat-card",
              children: [(0, ft.jsx)("div", {
                className: "trust-token-stat-label",
                children: d({
                  id: "token-scanner.popup.volume-label",
                  defaultMessage: "24H Volume"
                })
              }), n ? (0, ft.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "70px",
                  height: "20px"
                }
              }) : (0, ft.jsx)("div", {
                className: "trust-token-stat-value",
                children: e.volume24h
              })]
            })]
          }), !n && o > 0 && (0, ft.jsxs)("button", {
            className: "trust-token-similar-button",
            onClick: () => v(!0),
            children: [d({
              id: "token-scanner.popup.similar-tokens",
              defaultMessage: "{count} tokens with similar name"
            }, {
              count: o
            }), (0, ft.jsx)(Pi, {
              width: 20,
              height: 20
            })]
          })]
        }), (0, ft.jsx)(Yi, {})]
      });
      var k
    }
    var Ki = (e => (e.TERMS_OF_SERVICE = "Terms Of Service View", e.PRIVACY_POLICY = "Privacy Policy View", e.SUPPORT = "Support View", e.HELP_CENTER = "Help Center View", e.TESTNET_FAUCET = "Testnet Faucet View", e.OPENSEA = "Opensea View", e.BLOCKCHAIN_EXPLORER = "Blockchain Explorer View", e.FIAT_OFF_RAMPS_PROVIDER = "Fiat Off-Ramps Provider View", e.FIAT_ON_RAMPS_PROVIDER = "Fiat On-Ramps Provider View", e.EXTENSION_OPENED = "Extension Opened View", e.ONBOARDING_WELCOME = "Onboarding Welcome View", e.ONBOARDING_PASSWORD_CREATE = "Onboarding Password Create View", e.ONBOARDING_PASSWORD_VERIFY = "Onboarding Password Verify View", e.ONBOARDING_BACKUP_SEEDPHRASE_INITIAL = "Backup Seed Phrase Initial View", e.ONBOARDING_BACKUP_SEEDPHRASE_CONFIRM = "Backup Seed Phrase Confirm View", e.ONBOARDING_CHOOSE_AUTHENTICATION = "Onboarding Choose Authentication View", e.ONBOARDING_CHOOSE_IMPORT_SOURCE = "Onboarding Choose Import Source View", e.ONBOARDING_CHOOSE_TW_METHOD = "Onboarding Choose Trust Wallet Method View", e.ONBOARDING_IMPORT_MNEMONIC_OR_PRIVATE_KEY = "Onboarding Import Mnemonic or Private Key View", e.ONBOARDING_IMPORT_WITH_QR = "Onboarding Import With QR View", e.ONBOARDING_SET_ANALYTICS = "Onboarding Set Analytics View", e.ONBOARDING_COMPLETED = "Onboarding Completed View", e.ONBOARDING_MAX_ACCOUNTS_REACHED = "Max Accounts Reached View", e.ONBOARDING_VERIFY_SAFETY = "Onboarding Verify Safety View", e.ONBOARDING_IMPORT_MNEMONIC_SOLANA_DERIVATION = "Onboarding Input Mnemonic Solana Derivation View", e.ONBOARDING_SET_BIOMETRICS = "Onboarding Set Biometrics View", e.ONBOARDING_CONNECT_LEDGER_DEVICE = "Onboarding Connect Ledger Device View", e.ONBOARDING_IMPORT_LEDGER_ADDRESSES = "Onboarding Import Ledger Addresses View", e.HOME = "Home View", e.HOME_CRYPTO = "Home Crypto View", e.HOME_NFT = "Home NFT View", e.HOME_APPROVALS = "Home Approvals View", e.UNLOCK = "Unlock View", e.SETTINGS = "Settings View", e.SETTINGS_HELP = "Settings Help View", e.SETTINGS_LANGUAGE = "Settings Language View", e.SETTINGS_COLOR_MODE = "Settings Color Mode View", e.SETTINGS_ALL_CONNECTED_DAPPS = "Settings All Connected DApps View", e.SETTINGS_CONNECTED_DAPP = "Settings Connected Dapp View", e.SETTINGS_BLACKLISTED_DAPP = "Settings All Blacklisted Dapps View", e.SETTINGS_MANAGE_WALLETS = "Settings Manage Wallets View", e.SETTINGS_MANAGE_WALLET = "Settings Manage Wallet View", e.SETTINGS_MANAGE_ACCOUNT = "Settings Manage Account View", e.SETTINGS_NETWORKS = "Settings Networks View", e.SETTINGS_ADD_CUSTOM_NETWORK = "Settings Add Custom Network View", e.SETTINGS_DEVELOPER = "Settings Developer View", e.SETTINGS_DEVELOPER_FAUCETS = "Settings Developer Faucets View", e.SETTINGS_NOTIFICATIONS = "Settings Notification View", e.SETTINGS_ADDRESS_BOOK = "Settings Address Book View", e.SETTINGS_FIATS = "Settings Fiats View", e.SETTINGS_REVEAL_PRIVATE_KEY = "Settings Reveal Private Key View", e.ADDRESSES = "Addresses View", e.RECEIVE = "Receive View", e.NFT_COLLECTION = "NFT Collection View", e.NFT_ITEM = "NFT Item View", e.NFT_REPORTED_COLLECTIONS = "NFT Reported Collections View", e.MANAGE_CRYPTO = "Manage Crypto View", e.CUSTOM_ASSET_SELECT_NETWORK = "Select Custom Asset Network View", e.CUSTOM_ASSET_ADD_ASSET = "Add Custom Asset View", e.CUSTOM_ASSET_ADD_ASSET_MANUALLY = "Add Custom Asset Manually View", e.HISTORY = "History View", e.TRANSACTION = "Transaction View", e.ASSET = "Asset View", e.SWAP = "Swap View", e.TRENDING_TOKENS = "Hot Tokens View", e.HOT_TOKEN_DETAILS = "Hot Token Details View", e.FUND = "Fund View", e.FUND_CEX_FUNDING_PROVIDERS = "Fund Cex Funding Providers View", e.FUND_CEX_ASSET_SELECT = "Fund Cex Asset Select View", e.FUND_CEX_PLATFORM = "Fund Cex Platform View", e.FUND_CEX_QR = "Fund Cex QR View", e.EARN_STAKING_LIST = "Earn Staking List View", e.EARN_STAKING = "Earn Staking View", e.EARN_DELEGATE = "Earn Asset Delegate View", e.EARN_UNDELEGATE = "Earn Asset Undelegate View", e.EARN_REDELEGATE = "Earn Asset Redelegate View", e.EARN_CLAIM_REWARDS = "Earn Asset Claim Rewards View", e.EARN_COMPOUND = "Earn Asset Compound View", e.SEND_SELECT_CRYPTO = "Send Select Crypto View", e.SEND_PREPARE_CRYPTO = "Send Prepare Crypto View", e.SEND_PREPARE_NFT = "Send Prepare NFT View", e.SEND_CONFIRM_CRYPTO = "Send Confirm Crypto View", e.SEND_CONFIRM_NFT = "Send Confirm NFT View", e.SEND_ADDRESS_BOOK = "Send Address Book View", e.NOTIFICATION_ADD_ASSET = "Notification Add Asset View", e.NOTIFICATION_ADD_NETWORK = "Notification Add Network View", e.NOTIFICATION_APPROVE_ASSET = "Notification Approve Asset View", e.NOTIFICATION_BNB_STAKING_SELECT_NETWORK = "Notification BNB Staking Select Network View", e.NOTIFICATION_BNB_STAKING_CONFIRMATION = "Notification BNB Staking Confirmation View", e.NOTIFICATION_CONNECT_DAPP = "Notification Connect DApp View", e.NOTIFICATION_ETH_DECRYPT = "Notification ETH Decrypt View", e.NOTIFICATION_GET_ENCRYPTED_PUBLIC_KEY = "Notification Get Encrypted Public Key View", e.NOTIFICATION_DAPP_CONNECT_PERMISSION_DENIED = "Notification Dapp Connect Permission Denied View", e.NOTIFICATION_SEND_TRANSACTION = "Notification Send Transaction View", e.NOTIFICATION_SIGN_MESSAGE = "Notification Sign Message View", e.NOTIFICATION_SIGN_SOLANA_RAW_TRANSACTION = "Notification Sign Solana Raw Transaction View", e.NOTIFICATION_SWITCH_NETWORK = "Notification Switch Network View", e.NOTIFICATION_SWITCH_WALLET = "Notification Switch Wallet View", e.NOTIFICATION_UNSUPPORTED_NETWORK = "Notification Unsupported Network View", e.FIAT_ON_RAMPS = "Fiat On-Ramps View", e.FIAT_OFF_RAMPS = "Fiat Off-Ramps View", e.MARKET_SENTIMENT_ARTICLES = "Market Sentiment Articles View", e.MARKET_SENTIMENT_POSTS = "Market Sentiment Posts View", e.DISCOVER = "Discover View", e))(Ki || {}),
      Xi = (e => (e.WALLET_CREATE_NEW_INITIATED = "Create New Wallet Initiated", e.WALLET_IMPORT_MNEMONIC_INITIATED = "Import Mnemonic Wallet Initiated", e.WALLET_IMPORT_QR_INITIATED = "Import QR Wallet Initiated", e.WALLET_IMPORT_LEDGER_INITIATED = "Import Ledger Wallet Initiated", e.WALLET_IMPORT_SOURCE_SELECTED = "Import Source Selected", e.WALLET_IMPORT_TW_METHOD_SELECTED = "Import Trust Wallet Method Selected", e.WALLET_CREATED = "Wallet Created", e.AUTHENTICATION_SETUP_INITIATED = "Authentication Setup Initiated", e.AUTHENTICATION_SETUP_COMPLETED = "Authentication Setup Completed", e.BIOMETRICS_SET = "Biometrics Set", e.BACKUP_SEED_PHRASE_COMPLETED = "Backup Seed Phrased Completed", e.PASSWORD_CREATED = "Password Created", e.PASSWORD_VERIFIED = "Password Verified", e.TOGGLE_DATA_ANALYTICS = "Toggle Data Analytics", e.TOGGLE_DEFAULT_WALLET = "Toggle Default Wallet", e.TOGGLE_SIDEPANEL = "Toggle Sidepanel", e.TOGGLE_ONE_TAP = "Toggle OneTap", e.TOGGLE_BIOMETRICS = "Toggle Biometrics", e.RESET_WALLET = "Reset Wallet", e.COPY_ADDRESS = "Copy Address", e.SUB_ACCOUNT_CREATE = "Sub Account Create", e.SWITCH_WALLET = "Switch Wallet", e.OPEN_FULLSCREEN = "Open Fullscreen", e.OPEN_SIDEPANEL = "Open Sidepanel", e.REFRESH_BALANCE = "Refresh Balance", e.WALLET_HAS_BALANCE = "Wallet Has Balance", e.WALLET_LOCK = "Wallet Lock", e.WALLET_REVEAL_SEED_PHRASE = "Wallet Reveal Seed Phrase", e.CHANGE_WALLET_NAME = "Change Wallet Name", e.REMOVE_WALLET = "Remove Wallet", e.REMOVE_ACCOUNT = "Remove Account", e.CHANGE_LANGUAGE = "Change Language", e.CHANGE_COLOR_MODE = "Change Color Mode", e.CHANGE_BASE_CURRENCY = "Change Base Currency", e.REMOVE_BLACKLISTED_DAPP = "Remove Blacklisted DApp", e.REVOKE_DAPP_ACCESS = "Revoke DApp Access", e.REVOKE_ALL_DAPP_ACCESS = "Revoke All DApp Access", e.ADD_CUSTOM_NETWORK = "Add Custom Network", e.SWITCH_NETWORK = "Switch Network", e.SWITCH_FILTERING_NETWORK = "Switch Filtering Network", e.REMOVE_CUSTOM_NETWORK = "Remove Custom Network", e.TOGGLE_TRANSACTION_NONCE = "Toggle Transaction Nonce Setting", e.TOGGLE_TESTNETS = "Toggle Testnets Setting", e.TOGGLE_ADVANCED_GAS_CONTROLS = "Toggle Advanced Gas Controls Setting", e.TOGGLE_ADVANCED_TRANSACTION_DATA = "Toggle Advanced Transaction Data Setting", e.TOGGLE_PUSH_NOTIFICATIONS = "Toggle Push Notifications", e.UPDATE_PUSH_NOTIFICATIONS_TOPICS = "Update Topics of Push Notifications", e.TOGGLE_HOMESCREEN_ASSET_VISIBILITY = "Toggle Homescreen Asset Visibility", e.ADD_CUSTOM_ASSET = "Add Custom Asset", e.SWAP_TRANSACTION = "Swap Transaction", e.SWAP_APPROVAL_TRANSACTION = "Swap Approval Transaction", e.HOT_TOKEN_SELECTED = "Hot Token Selected", e.HOT_TOKEN_SWAP_INTENT_INITIATED = "Hot Token Swap Intent Initiated", e.HOME_CARD_CARD_CLICK = "home_card:card_click", e.SECURITY_SCANNER_RISK_ACTION = "Security Scanner Risk Action", e.EARN_NATIVE_STAKING_BANNER = "Earn Native Staking Banner", e.EARN_TRANSACTION = "Earn Transaction", e.SEND_CRYPTO_TRANSACTION = "Send Crypto Transaction", e.SEND_NFT_TRANSACTION = "Send NFT Transaction", e.SEND_REGISTER_TOKEN_TRANSACTION = "Send Register Token Transaction", e.SEND_TRUST_LINE_TRANSACTION = "Send Trust Line Transaction", e.RECEIVE_CEX_FUNDING_CLICK = "Receive Cex Funding Click", e.FUND_BUY_CRYPTO_CLICK = "Fund Buy Crypto Click", e.FUND_CEX_DEPOSIT_CLICK = "Fund Cex Deposit Click", e.FUND_RECEIVE_CRYPTO_CLICK = "Fund Receive Crypto Click", e.FUND_BUY_LOCALLY_CLICK = "Fund Buy Locally Click", e.FUND_CEX_DEPOSIT_SUCCESS = "Fund Cex Deposit Success", e.FUND_CEX_PLATFORM_SELECT = "Fund Cex Platform Select", e.FUND_CEX_QR_RETURN_HOME = "Fund Cex QR Return Home", e.CONNECT_DAPP = "Connect DApp", e.SIGN_MESSAGE = "Sign Message", e.APPROVE_ASSET = "Approve Asset", e.GIVE_ENCRYPTED_PUBLIC_KEY = "Give Encrypted Public Key", e.SIGN_RAW_TRANSACTION = "Sign Raw Transaction", e.UNLOCK = "Unlock", e.CLICK_MARKET_SENTIMENT_ARTICLE = "Click Market Sentiment Article", e.CLICK_MARKET_SENTIMENT_POST = "Click Market Sentiment Post", e.DISCOVER_DAPP_CLICK = "Discover DApp Click", e.NAVIGATION_TAB_CLICK = "Navigation Tab Click", e.SAVE_ADDRESS_BOOK_WALLET = "Save Address Book Wallet", e.REVEAL_PRIVATE_KEY = "Reveal Private Key", e.TOGGLE_DASHBOARD_BALANCE = "Toggle Dashboard Balance", e.TOKEN_SCANNER_POPUP_OPENED = "Token Scanner Popup Opened", e.TOKEN_SCANNER_SWAP_CLICKED = "Token Scanner Swap Clicked", e.TOKEN_SCANNER_TOGGLED = "Token Scanner Toggled", e.TOKEN_SCANNER_TOKEN_SELECTED = "Token Scanner Token Selected", e.SEND_TRONIFY_TRANSACTION_TRX_GAS_CREATED = "send_tronify_transaction_trx_gas_created", e.SEND_TRONIFY_TRANSACTION_USDT_GAS_CREATED = "send_tronify_transaction_usdt_gas_created", e))(Xi || {}),
      Qi = (e => (e.INTERNAL = "internal", e.EXTERNAL = "external", e))(Qi || {}),
      Ji = (e => (e.TOTAL_ACCOUNTS_OWNED = "totalAccountsOwned", e.ONBOARDING_AUTH_TYPE = "onboardingAuthType", e.ONBOARDING_SETUP_TYPE = "onboardingSetupType", e.ONBOARDING_SELECTED_WALLET = "onboardingSelectedWallet", e.ONBOARDING_WALLET_TYPE = "onboardingWalletType", e))(Ji || {}),
      eo = (e => (e.ALPHA_TOKENS = "alpha_tokens", e.POPULAR_TOKENS = "popular_tokens", e.TOP_MOVERS = "top_movers", e.EARN = "earn", e))(eo || {}),
      no = Object.defineProperty,
      to = Object.defineProperties,
      ro = Object.getOwnPropertyDescriptors,
      io = Object.getOwnPropertySymbols,
      oo = {}.hasOwnProperty,
      ao = {}.propertyIsEnumerable,
      so = (e, n, t) => n in e ? no(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }) : e[n] = t,
      lo = (e, n) => {
        for (var t in n || (n = {})) oo.call(n, t) && so(e, t, n[t]);
        if (io)
          for (var t of io(n)) ao.call(n, t) && so(e, t, n[t]);
        return e
      },
      uo = (e, n) => to(e, ro(n)),
      co = (e, n, t) => new Promise((r, i) => {
        var o = e => {
            try {
              s(t.next(e))
            } catch (e) {
              i(e)
            }
          },
          a = e => {
            try {
              s(t.throw(e))
            } catch (e) {
              i(e)
            }
          },
          s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
        s((t = t.apply(e, n)).next())
      });
    let fo = null,
      ho = null,
      po = null,
      go = null,
      Ao = "en",
      mo = {},
      vo = !1,
      bo = null,
      Co = 0;
    const yo = new Map;
    let ko = null;

    function wo() {
      fo && (fo.remove(), fo = null), ho = null, po && (clearTimeout(po), po = null), go && (clearTimeout(go), go = null), ko && (yo.delete(ko), ko = null, Me.debug("Token Scanner: Cleared similar tokens cache for", ko))
    }

    function Eo() {
      go && clearTimeout(go), go = setTimeout(() => {
        wo()
      }, 200)
    }

    function Bo(e, n, t) {
      return co(this, null, function*() {
        if (!fo) return;
        const r = ot(e);
        if (!r) return void Me.error("Token Scanner: No cached metadata for similar tokens list");
        const i = r.key;
        ko = i;
        const o = uo(lo({}, n), {
            isRecent: !0
          }),
          a = [o, ...[, , , , , ].fill(null).map((e, n) => ({
            name: "",
            symbol: "",
            chainName: "",
            chainId: "",
            logo: "",
            price: null,
            change24h: null,
            marketCap: null,
            volume24h: null,
            assetId: "loading-" + n,
            isRecent: !1,
            isLoading: !0,
            networkName: ""
          }))],
          s = {
            symbol: e,
            name: e,
            price: "",
            change24h: "",
            marketCap: "",
            volume24h: "",
            logo: "",
            assetId: ""
          },
          l = yo.get(i);
        if (!l) {
          fo.innerHTML = (0, ht.F0)((0, ft.jsx)(Ii, {
            locale: Ao,
            messages: mo,
            children: (0, ft.jsx)(qi, {
              token: s,
              isLoading: !1,
              similarTokens: a
            })
          }));
          const e = fo.querySelector(".trust-token-popup-container");
          e && e.classList.add("trust-token-list-view")
        }
        let u;
        if (l) Me.debug("Token Scanner: Using cached similar tokens data for " + i), u = l.map(e => uo(lo({}, e), {
          isRecent: bo === e.assetId
        }));
        else try {
          const e = yield t.emit(y.GET_SIMILAR_TOKENS, {
            symbol: i
          });
          if (!e || !e.success || !e.data) return void Me.error("Token Scanner: Failed to fetch similar tokens");
          u = e.data.map(e => uo(lo({}, e), {
            isRecent: bo === e.assetId
          })), u = u.filter(e => e.assetId !== o.assetId), u = [o, ...u], yo.set(i, u), Me.debug("Token Scanner: Cached similar tokens data for " + i)
        } catch (e) {
          return void Me.error("Token Scanner: Failed to fetch similar tokens:", e)
        }
        if (!fo) return;
        fo.innerHTML = (0, ht.F0)((0, ft.jsx)(Ii, {
          locale: Ao,
          messages: mo,
          children: (0, ft.jsx)(qi, {
            token: s,
            isLoading: !1,
            similarTokens: u
          })
        }));
        const c = fo.querySelector(".trust-token-popup-container");
        c && c.classList.add("trust-token-list-view");
        const f = fo.querySelector(".trust-token-list-scroll");
        f && f.addEventListener("wheel", e => {
          const n = e,
            t = n.currentTarget,
            r = 0 === t.scrollTop,
            i = t.scrollTop + t.clientHeight >= t.scrollHeight;
          (n.deltaY > 0 && !i || 0 > n.deltaY && !r) && n.stopPropagation()
        }), fo.querySelectorAll(".trust-token-list-row").forEach((e, n) => {
          const r = u[n];
          r && e.addEventListener("click", e => {
            e.preventDefault(), e.stopPropagation(), Me.debug("Token Scanner: Similar token clicked:", r), r.isRecent || zn(Xi.TOKEN_SCANNER_TOKEN_SELECTED, {
                assetSymbol: r.symbol,
                assetId: r.assetId,
                chainName: r.chainName,
                source: "similar_tokens_list"
              }),
              function(e, n, t, r, i) {
                if (!fo) return;
                bo = r.assetId;
                const o = {
                  symbol: e,
                  name: n,
                  price: Yn(r.price),
                  change24h: qn(r.change24h),
                  marketCap: Kn(r.marketCap),
                  volume24h: Xn(r.volume24h),
                  logo: r.logo,
                  assetId: r.assetId,
                  chainId: r.chainId,
                  chainName: t
                };
                fo.innerHTML = (0, ht.F0)((0, ft.jsx)(Ii, {
                  locale: Ao,
                  messages: mo,
                  children: (0, ft.jsx)(qi, {
                    token: o,
                    isLoading: !1,
                    similarTokensCount: Co
                  })
                }));
                const a = fo.querySelector(".trust-token-popup-container");
                a && a.classList.remove("trust-token-list-view");
                const s = fo.querySelector(".trust-token-swap-button");
                s && s.addEventListener("click", n => co(null, null, function*() {
                  n.preventDefault(), n.stopPropagation();
                  const t = yield i.emit(y.OPEN_SWAP_PAGE, {
                    assetId: r.assetId
                  });
                  t && t.success && (zn(Xi.TOKEN_SCANNER_SWAP_CLICKED, {
                    assetSymbol: e,
                    assetId: r.assetId
                  }), wo())
                }));
                const l = fo.querySelector(".trust-token-similar-button");
                l && l.addEventListener("click", o => {
                  o.preventDefault(), o.stopPropagation(), ko ? Bo(ko, {
                    symbol: e,
                    name: n,
                    chainName: t,
                    chainId: r.chainId,
                    logo: r.logo,
                    price: r.price,
                    change24h: r.change24h,
                    marketCap: r.marketCap,
                    volume24h: r.volume24h,
                    assetId: r.assetId,
                    networkName: r.networkName
                  }, i) : Me.error("Token Scanner: No cache key available for similar tokens")
                });
                const u = fo.querySelector(".trust-token-menu-button");
                u && xo(u, i)
              }(r.symbol, r.name, r.networkName, {
                price: r.price,
                change24h: r.change24h,
                marketCap: r.marketCap,
                volume24h: r.volume24h,
                logo: r.logo,
                assetId: r.assetId,
                chainId: r.chainId,
                networkName: r.networkName
              }, t)
          })
        });
        const h = fo.querySelector(".trust-token-menu-button");
        h && xo(h, t)
      })
    }

    function xo(e, n) {
      e.addEventListener("click", e => {
        e.preventDefault(), e.stopPropagation();
        const t = fo?.querySelector(".trust-token-overlay"),
          r = fo?.querySelector(".trust-token-menu-popup");
        if (t && r) return t.remove(), void r.remove();
        const i = document.createElement("div");
        i.className = "trust-token-overlay", i.addEventListener("click", e => {
          var n;
          e.preventDefault(), e.stopPropagation(), i.remove(), null == (n = fo?.querySelector(".trust-token-menu-popup")) || n.remove()
        });
        const o = mo["token-scanner.menu.allow-ticker-widget"] || mo["settings.token-scanner-enable"] || "Allow ticker widget on X",
          a = document.createElement("div");
        a.className = "trust-token-menu-popup", a.innerHTML = `\n      <div class="trust-token-menu-item">\n        <span class="trust-token-menu-item-text">${o}</span>\n        <button class="trust-token-toggle ${vo?"enabled":""}" aria-label="Toggle">\n          <div class="trust-token-toggle-thumb"></div>\n        </button>\n      </div>\n    `;
        const s = a.querySelector(".trust-token-toggle");
        s && s.addEventListener("click", e => co(null, null, function*() {
          e.preventDefault(), e.stopPropagation(), yield function(e, n) {
            return co(this, null, function*() {
              try {
                Me.debug("Token Scanner: Setting enabled state to", n);
                const t = yield e.emit(y.SET_TOKEN_SCANNER_ENABLED, {
                  enabled: n
                });
                t && t.success && (Me.debug("Token Scanner: Successfully set enabled state to", n), vo = n, zn(Xi.TOKEN_SCANNER_TOGGLED, {
                  enabled: n
                }), n || (document.querySelectorAll(".trust-token-highlight").forEach(e => {
                  const n = e.parentNode;
                  if (n) {
                    const t = e.getAttribute("data-token-symbol");
                    if (t) {
                      const r = document.createTextNode(t);
                      n.replaceChild(r, e)
                    }
                  }
                }), tt = new WeakSet, wo()))
              } catch (e) {
                Me.error("Token Scanner: Failed to handle toggle:", e)
              }
            })
          }(n, !vo)
        })), a.addEventListener("click", e => {
          e.stopPropagation()
        });
        const l = fo?.querySelector(".trust-token-popup-container");
        l && (l.appendChild(i), l.appendChild(a))
      })
    }

    function So(e, n) {
      return co(this, null, function*() {
        var t;
        if (Me.debug("Token Scanner: Showing popup for", e), !fo || ho !== n) {
          fo && (fo.remove(), fo = null);
          try {
            const r = Gn();
            if (!r) return void Me.debug("Token Scanner: Trust Wallet channel not ready");
            const i = ot(e);
            if (!i || !i.assetId) return void Me.debug("Token Scanner: No cached metadata for", e);
            ko = i.key;
            const o = {
                symbol: e,
                name: i.name,
                price: "N/A",
                change24h: "N/A",
                marketCap: "N/A",
                volume24h: "N/A",
                logo: i.logo || "",
                assetId: i.assetId
              },
              a = document.createElement("div");
            a.className = "trust-token-popup", a.innerHTML = (0, ht.F0)((0, ft.jsx)(Ii, {
                locale: Ao,
                messages: mo,
                children: (0, ft.jsx)(qi, {
                  token: o,
                  isLoading: !0
                })
              })),
              function(e, n) {
                const t = n.getBoundingClientRect(),
                  r = window.pageYOffset || document.documentElement.scrollTop,
                  i = window.pageXOffset || document.documentElement.scrollLeft;
                e.style.cssText = `\n    position: absolute;\n    top: ${t.bottom+r+8}px;\n    left: ${t.left+i}px;\n    z-index: 10000;\n    pointer-events: auto;\n  `;
                const o = e.getBoundingClientRect(),
                  a = window.innerWidth,
                  s = window.innerHeight;
                o.right > a && (e.style.left = t.right + i - o.width + "px"), o.bottom > s && (e.style.top = t.top + r - o.height - 8 + "px")
              }(a, n),
              function(e) {
                e.addEventListener("mouseenter", () => {
                  go && (clearTimeout(go), go = null)
                }), e.addEventListener("mouseleave", () => {
                  Eo()
                })
              }(a), document.body.appendChild(a), fo = a, ho = n;
            const s = yield r.emit(y.GET_TOKEN_MARKET_DATA, {
              assetId: i.assetId
            });
            if (!s || !s.success || !s.data) {
              if (!fo || ho !== n) return;
              const t = () => {
                fo && (fo.remove(), fo = null, ho = null),
                  function(e) {
                    Jn.delete(e), et.delete(e), nt.delete(e)
                  }(e), So(e, n)
              };
              fo.innerHTML = (0, ht.F0)((0, ft.jsx)(Ii, {
                locale: Ao,
                messages: mo,
                children: (0, ft.jsx)(qi, {
                  token: o,
                  hasError: !0
                })
              }));
              const r = fo.querySelector(".trust-token-retry-button");
              return void(r && r.addEventListener("click", e => {
                e.preventDefault(), e.stopPropagation(), t()
              }))
            }
            const {
              data: l
            } = s;
            if (!fo || ho !== n) return;
            bo = l.assetId, zn(Xi.TOKEN_SCANNER_POPUP_OPENED, {
              assetSymbol: l.symbol,
              assetId: l.assetId
            });
            let u = 0;
            try {
              const e = i.key,
                n = yield r.emit(y.GET_SIMILAR_TOKENS_COUNT, {
                  symbol: e
                });
              n && n.success && "number" == typeof n.count && (u = n.count, Co = u, Me.debug(`Token Scanner: Found ${u} similar tokens for ${e}`))
            } catch (e) {
              Me.error("Token Scanner: Failed to fetch similar tokens count:", e)
            }
            const c = {
              symbol: e,
              name: l.name,
              price: Yn(i.price),
              change24h: qn(l.change24h),
              marketCap: Kn(l.marketCap),
              volume24h: Xn(l.volume24h),
              logo: null != (t = l.logo) ? t : "",
              assetId: l.assetId,
              chainId: l.blockchainId,
              chainName: l.name,
              networkName: i.networkName || l.name || "Unknown"
            };
            fo.innerHTML = (0, ht.F0)((0, ft.jsx)(Ii, {
              locale: Ao,
              messages: mo,
              children: (0, ft.jsx)(qi, {
                token: c,
                isLoading: !1,
                similarTokensCount: u
              })
            }));
            const f = fo.querySelector(".trust-token-swap-button");
            f && f.addEventListener("click", e => co(null, null, function*() {
              e.preventDefault(), e.stopPropagation();
              const n = yield r.emit(y.OPEN_SWAP_PAGE, {
                assetId: l.assetId
              });
              n && n.success && (zn(Xi.TOKEN_SCANNER_SWAP_CLICKED, {
                assetSymbol: l.symbol,
                assetId: l.assetId
              }), wo())
            }));
            const h = fo.querySelector(".trust-token-similar-button");
            h && h.addEventListener("click", n => {
              var t;
              n.preventDefault(), n.stopPropagation(), Bo(e, {
                symbol: e,
                name: l.name,
                chainName: l.name,
                chainId: l.blockchainId,
                logo: null != (t = l.logo) ? t : "",
                price: i.price,
                change24h: l.change24h,
                marketCap: l.marketCap,
                volume24h: l.volume24h,
                assetId: l.assetId,
                networkName: i.networkName || l.name || "Unknown"
              }, r)
            });
            const d = fo.querySelector(".trust-token-menu-button");
            d && xo(d, r)
          } catch (e) {
            Me.error("Token Scanner: Failed to show popup:", e)
          }
        }
      })
    }
    var Lo = (e, n, t) => new Promise((r, i) => {
      var o = e => {
          try {
            s(t.next(e))
          } catch (e) {
            i(e)
          }
        },
        a = e => {
          try {
            s(t.throw(e))
          } catch (e) {
            i(e)
          }
        },
        s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
      s((t = t.apply(e, n)).next())
    });

    function Fo(e, n, t, r) {
      let i;
      const o = new Promise(e => {
        i = setTimeout(() => {
          Me.warn(`Token Scanner: ${r} timed out after ${n}ms, using fallback value`), e(t)
        }, n)
      });
      return Promise.race([e.finally(() => clearTimeout(i)), o])
    }
    Me.debug("Token Scanner: Script loaded, starting init..."),
      function() {
        return Lo(this, null, function*() {
          Me.debug("Token Scanner: Starting initialization...");
          const e = yield function() {
            return Lo(this, null, function*() {
              try {
                const e = Gn();
                if (!e) return Me.debug("Token Scanner: Trust Wallet channel not ready, feature disabled"), !1;
                Me.debug("Token Scanner: Checking feature flag...");
                const n = yield Fo(e.emit(y.GET_FEATURE_FLAG, {
                  experiment: g
                }), 3e3, null, "GET_FEATURE_FLAG");
                return n && "boolean" == typeof n.enabled ? (Me.debug("Token Scanner: Feature flag response:", n), n.enabled) : (Me.debug("Token Scanner: Invalid feature flag response, using default"), !1)
              } catch (e) {
                return Me.error("Token Scanner: Feature flag check failed:", e), !1
              }
            })
          }();
          if (Me.debug("Token Scanner: Feature enabled?", e), !e) return void Me.debug("Token Scanner: Feature disabled, exiting");
          const n = function() {
            const e = window.location.hostname.toLowerCase();
            return "x.com" === e || "twitter.com" === e
          }();
          if (Me.debug("Token Scanner: On X platform?", n, "URL:", window.location.href), !n) return void Me.debug("Token Scanner: Not on X platform, exiting");
          Me.debug("Token Scanner: Waiting for page to be ready..."), yield new Promise(e => setTimeout(e, 1e3)), Me.debug("Token Scanner: Fetching locale and translations..."), yield function() {
            return Lo(this, null, function*() {
              try {
                const e = Gn();
                if (!e) return void Me.debug("Token Scanner: Trust Wallet channel not ready for locale fetch");
                Me.debug("Token Scanner: Fetching locale and translations...");
                const n = yield Fo(e.emit(y.GET_TOKEN_SCANNER_I18N, {}), 3e3, null, "GET_TOKEN_SCANNER_I18N");
                n && n.locale && n.messages && (function(e, n) {
                  Ao = e, mo = n
                }(n.locale, n.messages), Me.debug("Token Scanner: Locale set to:", n.locale))
              } catch (e) {
                Me.error("Token Scanner: Failed to fetch locale:", e)
              }
            })
          }();
          const t = yield function() {
            return Lo(this, null, function*() {
              try {
                const e = Gn();
                if (!e) return Me.debug("Token Scanner: Trust Wallet channel not ready for user enabled check"), !0;
                Me.debug("Token Scanner: Checking user enabled state...");
                const n = yield Fo(e.emit(y.GET_TOKEN_SCANNER_ENABLED, {}), 3e3, null, "GET_TOKEN_SCANNER_ENABLED");
                return n && "boolean" == typeof n.enabled ? (Me.debug("Token Scanner: User enabled state:", n.enabled), n.enabled) : (Me.debug("Token Scanner: Invalid response, defaulting to enabled"), !0)
              } catch (e) {
                return Me.error("Token Scanner: Failed to check user enabled state:", e), !0
              }
            })
          }();
          Me.debug("Token Scanner: User enabled state:", t),
            function(e) {
              vo = e
            }(t), t ? (Me.debug("Token Scanner: Starting page scan..."), ct(), Me.debug("Token Scanner: Page scan completed"), document.addEventListener("mouseover", e => {
              const n = e.target,
                t = n.classList.contains("trust-token-highlight") ? n : n.closest(".trust-token-highlight");
              if (t) {
                const e = t.getAttribute("data-token-symbol");
                e && function(e, n) {
                  go && (clearTimeout(go), go = null), po && clearTimeout(po), po = setTimeout(() => {
                    So(e, n)
                  }, 300)
                }(e, t)
              }
            }), document.addEventListener("mouseout", e => {
              const n = e.target;
              (n.classList.contains("trust-token-highlight") ? n : n.closest(".trust-token-highlight")) && (po && (clearTimeout(po), po = null), Eo())
            }), document.addEventListener("click", e => {
              const n = e.target;
              !n.classList.contains("trust-token-highlight") && !n.closest(".trust-token-popup") && wo()
            }), new MutationObserver(e => {
              vo && e.some(e => Array.from(e.addedNodes).some(e => {
                var n, t;
                return !(e instanceof HTMLElement && (e.classList.contains("trust-token-highlight") || e.classList.contains("trust-token-popup")) || null != (n = e.parentElement) && n.classList.contains("trust-token-highlight") || null != (t = e.parentElement) && t.closest(".trust-token-popup"))
              })) && (rt && clearTimeout(rt), rt = setTimeout(() => {
                ct()
              }, 500))
            }).observe(document.body, {
              childList: !0,
              subtree: !0
            })) : Me.debug("Token Scanner: User disabled token scanner, exiting")
        })
      }().catch(e => {
        Me.error("Token Scanner: Initialization failed:", e)
      })
  })()
})();
