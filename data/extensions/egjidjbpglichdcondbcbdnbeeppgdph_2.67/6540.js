try {
  let n = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new n.Error).stack;
  t && (n.t = n.t || {}, n.t[t] = "232f4824-b9a5-4fdc-bc1d-88a333a8dc7f", n.o = "sentry-dbid-232f4824-b9a5-4fdc-bc1d-88a333a8dc7f")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [6540], {
    29869: (n, t, e) => {
      var r = e(65606),
        o = Symbol.for("react.transitional.element"),
        u = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        f = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        l = Symbol.for("react.consumer"),
        a = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        b = Symbol.iterator,
        h = {
          isMounted: function() {
            return !1
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        v = Object.assign,
        w = {};

      function m(n, t, e) {
        this.props = n, this.context = t, this.refs = w, this.updater = e || h
      }

      function g() {}

      function j(n, t, e) {
        this.props = n, this.context = t, this.refs = w, this.updater = e || h
      }
      m.prototype.isReactComponent = {}, m.prototype.setState = function(n, t) {
        if ("object" != typeof n && "function" != typeof n && null != n) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, n, t, "setState")
      }, m.prototype.forceUpdate = function(n) {
        this.updater.enqueueForceUpdate(this, n, "forceUpdate")
      }, g.prototype = m.prototype;
      var S = j.prototype = new g;
      S.constructor = j, v(S, m.prototype), S.isPureReactComponent = !0;
      var $ = Array.isArray,
        _ = {
          H: null,
          A: null,
          T: null,
          S: null
        },
        E = {}.hasOwnProperty;

      function k(n, t, e, r, u, i) {
        return e = i.ref, {
          $$typeof: o,
          type: n,
          key: t,
          ref: void 0 !== e ? e : null,
          props: i
        }
      }

      function R(n) {
        return "object" == typeof n && null !== n && n.$$typeof === o
      }
      var T = /\/+/g;

      function A(n, t) {
        return "object" == typeof n && null !== n && null != n.key ? function(n) {
          var t = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + n.replace(/[=:]/g, function(n) {
            return t[n]
          })
        }("" + n.key) : t.toString(36)
      }

      function O() {}

      function q(n, t, e, r, i) {
        var f = typeof n;
        ("undefined" === f || "boolean" === f) && (n = null);
        var c = !1;
        if (null === n) c = !0;
        else switch (f) {
          case "bigint":
          case "string":
          case "number":
            c = !0;
            break;
          case "object":
            switch (n.$$typeof) {
              case o:
              case u:
                c = !0;
                break;
              case p:
                return q((c = n.u)(n.i), t, e, r, i)
            }
        }
        if (c) return i = i(n), c = "" === r ? "." + A(n, 0) : r, $(i) ? (e = "", null != c && (e = c.replace(T, "$&/") + "/"), q(i, t, e, "", function(n) {
          return n
        })) : null != i && (R(i) && (i = function(n, t) {
          return k(n.type, t, void 0, 0, 0, n.props)
        }(i, e + (null == i.key || n && n.key === i.key ? "" : ("" + i.key).replace(T, "$&/") + "/") + c)), t.push(i)), 1;
        c = 0;
        var l = "" === r ? "." : r + ":";
        if ($(n))
          for (var a = 0; a < n.length; a++) c += q(r = n[a], t, e, f = l + A(r, a), i);
        else if (a = function(n) {
            return null === n || "object" != typeof n ? null : "function" == typeof(n = b && n[b] || n["@@iterator"]) ? n : null
          }(n), "function" == typeof a)
          for (n = a.call(n), a = 0; !(r = n.next()).done;) c += q(r = r.value, t, e, f = l + A(r, a++), i);
        else if ("object" === f) {
          if ("function" == typeof n.then) return q(function(n) {
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw n.reason;
              default:
                switch ("string" == typeof n.status ? n.then(O, O) : (n.status = "pending", n.then(function(t) {
                    "pending" === n.status && (n.status = "fulfilled", n.value = t)
                  }, function(t) {
                    "pending" === n.status && (n.status = "rejected", n.reason = t)
                  })), n.status) {
                  case "fulfilled":
                    return n.value;
                  case "rejected":
                    throw n.reason
                }
            }
            throw n
          }(n), t, e, r, i);
          throw Error("Objects are not valid as a React child (found: " + ("[object Object]" == (t = n + "") ? "object with keys {" + Object.keys(n).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
        }
        return c
      }

      function x(n, t, e) {
        if (null == n) return n;
        var r = [],
          o = 0;
        return q(n, r, "", "", function(n) {
          return t.call(e, n, o++)
        }), r
      }

      function C(n) {
        if (-1 === n.l) {
          var t = n.p;
          (t = t()).then(function(t) {
            (0 === n.l || -1 === n.l) && (n.l = 1, n.p = t)
          }, function(t) {
            (0 === n.l || -1 === n.l) && (n.l = 2, n.p = t)
          }), -1 === n.l && (n.l = 0, n.p = t)
        }
        if (1 === n.l) return n.p.default;
        throw n.p
      }
      var U = "function" == typeof reportError ? reportError : function(n) {
        if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: "object" == typeof n && null !== n && "string" == typeof n.message ? n.message + "" : n + "",
            error: n
          });
          if (!window.dispatchEvent(t)) return
        } else if ("object" == typeof r && "function" == typeof r.emit) return void r.emit("uncaughtException", n);
        console.error(n)
      };

      function z() {}
      t.Children = {
        map: x,
        forEach: function(n, t, e) {
          x(n, function() {
            t.apply(this, arguments)
          }, e)
        },
        count: function(n) {
          var t = 0;
          return x(n, function() {
            t++
          }), t
        },
        toArray: function(n) {
          return x(n, function(n) {
            return n
          }) || []
        },
        only: function(n) {
          if (!R(n)) throw Error("React.Children.only expected to receive a single React element child.");
          return n
        }
      }, t.Component = m, t.Fragment = i, t.Profiler = c, t.PureComponent = j, t.StrictMode = f, t.Suspense = y, t.h = _, t.act = function() {
        throw Error("act(...) is not supported in production builds of React.")
      }, t.cache = function(n) {
        return function() {
          return n.apply(null, arguments)
        }
      }, t.cloneElement = function(n, t, e) {
        if (null == n) throw Error("The argument must be a React element, but you passed " + n + ".");
        var r = v({}, n.props),
          o = n.key;
        if (null != t)
          for (u in t.ref, void 0 !== t.key && (o = "" + t.key), t) !E.call(t, u) || "key" === u || "__self" === u || "__source" === u || "ref" === u && void 0 === t.ref || (r[u] = t[u]);
        var u = arguments.length - 2;
        if (1 === u) r.children = e;
        else if (u > 1) {
          for (var i = Array(u), f = 0; u > f; f++) i[f] = arguments[f + 2];
          r.children = i
        }
        return k(n.type, o, void 0, 0, 0, r)
      }, t.createContext = function(n) {
        return (n = {
          $$typeof: a,
          v: n,
          m: n,
          j: 0,
          Provider: null,
          Consumer: null
        }).Provider = n, n.Consumer = {
          $$typeof: l,
          $: n
        }, n
      }, t.createElement = function(n, t, e) {
        var r, o = {},
          u = null;
        if (null != t)
          for (r in void 0 !== t.key && (u = "" + t.key), t) E.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (o[r] = t[r]);
        var i = arguments.length - 2;
        if (1 === i) o.children = e;
        else if (i > 1) {
          for (var f = Array(i), c = 0; i > c; c++) f[c] = arguments[c + 2];
          o.children = f
        }
        if (n && n.defaultProps)
          for (r in i = n.defaultProps) void 0 === o[r] && (o[r] = i[r]);
        return k(n, u, void 0, 0, 0, o)
      }, t.createRef = function() {
        return {
          current: null
        }
      }, t.forwardRef = function(n) {
        return {
          $$typeof: s,
          render: n
        }
      }, t.isValidElement = R, t.lazy = function(n) {
        return {
          $$typeof: p,
          i: {
            l: -1,
            p: n
          },
          u: C
        }
      }, t.memo = function(n, t) {
        return {
          $$typeof: d,
          type: n,
          compare: void 0 === t ? null : t
        }
      }, t.startTransition = function(n) {
        var t = _.T,
          e = {};
        _.T = e;
        try {
          var r = n(),
            o = _.S;
          null !== o && o(e, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(z, U)
        } catch (n) {
          U(n)
        } finally {
          _.T = t
        }
      }, t.unstable_useCacheRefresh = function() {
        return _.H.useCacheRefresh()
      }, t.use = function(n) {
        return _.H.use(n)
      }, t.useActionState = function(n, t, e) {
        return _.H.useActionState(n, t, e)
      }, t.useCallback = function(n, t) {
        return _.H.useCallback(n, t)
      }, t.useContext = function(n) {
        return _.H.useContext(n)
      }, t.useDebugValue = function() {}, t.useDeferredValue = function(n, t) {
        return _.H.useDeferredValue(n, t)
      }, t.useEffect = function(n, t) {
        return _.H.useEffect(n, t)
      }, t.useId = function() {
        return _.H.useId()
      }, t.useImperativeHandle = function(n, t, e) {
        return _.H.useImperativeHandle(n, t, e)
      }, t.useInsertionEffect = function(n, t) {
        return _.H.useInsertionEffect(n, t)
      }, t.useLayoutEffect = function(n, t) {
        return _.H.useLayoutEffect(n, t)
      }, t.useMemo = function(n, t) {
        return _.H.useMemo(n, t)
      }, t.useOptimistic = function(n, t) {
        return _.H.useOptimistic(n, t)
      }, t.useReducer = function(n, t, e) {
        return _.H.useReducer(n, t, e)
      }, t.useRef = function(n) {
        return _.H.useRef(n)
      }, t.useState = function(n) {
        return _.H.useState(n)
      }, t.useSyncExternalStore = function(n, t, e) {
        return _.H.useSyncExternalStore(n, t, e)
      }, t.useTransition = function() {
        return _.H.useTransition()
      }, t.version = "19.0.0"
    },
    96540: (n, t, e) => {
      n.exports = e(29869)
    }
  }
]);
