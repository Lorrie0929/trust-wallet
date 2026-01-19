"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [6540], {
    64837: (e, n, t) => {
      e = t.nmd(e);
      var o = t(65606);
      ! function() {
        function t(e, n) {
          Object.defineProperty(u.prototype, e, {
            get: function() {
              console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", n[0], n[1])
            }
          })
        }

        function r(e) {
          return null === e || "object" != typeof e ? null : "function" == typeof(e = W && e[W] || e["@@iterator"]) ? e : null
        }

        function i(e, n) {
          var t = (e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass") + "." + n;
          X[t] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", n, e), X[t] = !0)
        }

        function u(e, n, t) {
          this.props = e, this.context = n, this.refs = Z, this.updater = t || N
        }

        function a() {}

        function c(e, n, t) {
          this.props = e, this.context = n, this.refs = Z, this.updater = t || N
        }

        function l(e) {
          return "" + e
        }

        function f(e) {
          try {
            l(e);
            var n = !1
          } catch {
            n = !0
          }
          if (n) {
            var t = (n = console).error,
              o = "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
            return t.call(n, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", o), l(e)
          }
        }

        function s(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.$$typeof === fe ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case U:
              return "Fragment";
            case q:
              return "Portal";
            case Y:
              return "Profiler";
            case F:
              return "StrictMode";
            case V:
              return "Suspense";
            case z:
              return "SuspenseList"
          }
          if ("object" == typeof e) switch ("number" == typeof e.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
            case P:
              return (e.displayName || "Context") + ".Provider";
            case H:
              return (e.t.displayName || "Context") + ".Consumer";
            case B:
              var n = e.render;
              return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case G:
              return null !== (n = e.displayName || null) ? n : s(e.type) || "Memo";
            case K:
              n = e.o, e = e.i;
              try {
                return s(e(n))
              } catch {}
          }
          return null
        }

        function p(e) {
          return "string" == typeof e || "function" == typeof e || e === U || e === Y || e === F || e === V || e === z || e === J || "object" == typeof e && null !== e && (e.$$typeof === K || e.$$typeof === G || e.$$typeof === P || e.$$typeof === H || e.$$typeof === B || e.$$typeof === de || void 0 !== e.getModuleId)
        }

        function d() {}

        function y(e) {
          if (void 0 === me) try {
            throw Error()
          } catch (e) {
            var n = e.stack.trim().match(/\n( *(at )?)/);
            me = n && n[1] || "", he = e.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : e.stack.indexOf("@") > -1 ? "@unknown:0:0" : ""
          }
          return "\n" + me + e + he
        }

        function m(e, n) {
          if (!e || ge) return "";
          var t, o = we.get(e);
          if (void 0 !== o) return o;
          ge = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0, t = se.H, se.H = null,
            function() {
              if (0 === ye) {
                te = console.log, oe = console.info, re = console.warn, ie = console.error, ue = console.group, ae = console.groupCollapsed, ce = console.groupEnd;
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: d,
                  writable: !0
                };
                Object.defineProperties(console, {
                  info: e,
                  log: e,
                  warn: e,
                  error: e,
                  group: e,
                  groupCollapsed: e,
                  groupEnd: e
                })
              }
              ye++
            }();
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
                        var o = e
                      }
                      Reflect.construct(e, [], t)
                    } else {
                      try {
                        t.call()
                      } catch (e) {
                        o = e
                      }
                      e.call(t.prototype)
                    }
                  } else {
                    try {
                      throw Error()
                    } catch (e) {
                      o = e
                    }(t = e()) && "function" == typeof t.catch && t.catch(function() {})
                  }
                } catch (e) {
                  if (e && o && "string" == typeof e.stack) return [e.stack, o.stack]
                }
                return [null, null]
              }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot"
            });
            var u = r.DetermineComponentFrameRoot(),
              a = u[0],
              c = u[1];
            if (a && c) {
              var l = a.split("\n"),
                f = c.split("\n");
              for (u = i = 0; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
              for (; u < f.length && !f[u].includes("DetermineComponentFrameRoot");) u++;
              if (i === l.length || u === f.length)
                for (i = l.length - 1, u = f.length - 1; i >= 1 && u >= 0 && l[i] !== f[u];) u--;
              for (; i >= 1 && u >= 0; i--, u--)
                if (l[i] !== f[u]) {
                  if (1 !== i || 1 !== u)
                    do {
                      if (i--, 0 > --u || l[i] !== f[u]) {
                        var s = "\n" + l[i].replace(" at new ", " at ");
                        return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), "function" == typeof e && we.set(e, s), s
                      }
                    } while (i >= 1 && u >= 0);
                  break
                }
            }
          } finally {
            ge = !1, se.H = t,
              function() {
                if (0 === --ye) {
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                  };
                  Object.defineProperties(console, {
                    log: Q({}, e, {
                      value: te
                    }),
                    info: Q({}, e, {
                      value: oe
                    }),
                    warn: Q({}, e, {
                      value: re
                    }),
                    error: Q({}, e, {
                      value: ie
                    }),
                    group: Q({}, e, {
                      value: ue
                    }),
                    groupCollapsed: Q({}, e, {
                      value: ae
                    }),
                    groupEnd: Q({}, e, {
                      value: ce
                    })
                  })
                }
                0 > ye && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
              }(), Error.prepareStackTrace = o
          }
          return l = (l = e ? e.displayName || e.name : "") ? y(l) : "", "function" == typeof e && we.set(e, l), l
        }

        function h(e) {
          if (null == e) return "";
          if ("function" == typeof e) {
            var n = e.prototype;
            return m(e, !(!n || !n.isReactComponent))
          }
          if ("string" == typeof e) return y(e);
          switch (e) {
            case V:
              return y("Suspense");
            case z:
              return y("SuspenseList")
          }
          if ("object" == typeof e) switch (e.$$typeof) {
            case B:
              return m(e.render, !1);
            case G:
              return h(e.type);
            case K:
              n = e.o, e = e.i;
              try {
                return h(e(n))
              } catch {}
          }
          return ""
        }

        function b() {
          var e = se.A;
          return null === e ? null : e.getOwner()
        }

        function v(e) {
          if (pe.call(e, "key")) {
            var n = Object.getOwnPropertyDescriptor(e, "key").get;
            if (n && n.isReactWarning) return !1
          }
          return void 0 !== e.key
        }

        function g() {
          var e = s(this.type);
          return Oe[e] || (Oe[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), void 0 !== (e = this.props.ref) ? e : null
        }

        function w(e, n, t, o, r, i) {
          return t = i.ref, Object.defineProperty(e = {
            $$typeof: I,
            type: e,
            key: n,
            props: i,
            u: r
          }, "ref", null !== (void 0 !== t ? t : null) ? {
            enumerable: !1,
            get: g
          } : {
            enumerable: !1,
            value: null
          }), e.l = {}, Object.defineProperty(e.l, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
          }), Object.defineProperty(e, "p", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
          }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e
        }

        function _(e, n) {
          if ("object" == typeof e && e && e.$$typeof !== _e)
            if (le(e))
              for (var t = 0; t < e.length; t++) {
                var o = e[t];
                O(o) && j(o, n)
              } else if (O(e)) e.l && (e.l.validated = 1);
              else if ("function" == typeof(t = r(e)) && t !== e.entries && (t = t.call(e)) !== e)
            for (; !(e = t.next()).done;) O(e.value) && j(e.value, n)
        }

        function O(e) {
          return "object" == typeof e && null !== e && e.$$typeof === I
        }

        function j(e, n) {
          if (e.l && !e.l.validated && null == e.key && (e.l.validated = 1, n = function(e) {
              var n = "",
                t = b();
              return t && (t = s(t.type)) && (n = "\n\nCheck the render method of `" + t + "`."), n || (e = s(e)) && (n = "\n\nCheck the top-level render call using <" + e + ">."), n
            }(n), !je[n])) {
            je[n] = !0;
            var t = "";
            e && null != e.u && e.u !== b() && (t = null, "number" == typeof e.u.tag ? t = s(e.u.type) : "string" == typeof e.u.name && (t = e.u.name), t = " It was passed a child from " + t + ".");
            var o = se.getCurrentStack;
            se.getCurrentStack = function() {
              var n = h(e.type);
              return o && (n += o() || ""), n
            }, console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', n, t), se.getCurrentStack = o
          }
        }

        function S(e, n) {
          return "object" == typeof e && null !== e && null != e.key ? (f(e.key), function(e) {
            var n = {
              "=": "=0",
              ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(e) {
              return n[e]
            })
          }("" + e.key)) : n.toString(36)
        }

        function k() {}

        function R(e, n, t, o, i) {
          var u = typeof e;
          ("undefined" === u || "boolean" === u) && (e = null);
          var a = !1;
          if (null === e) a = !0;
          else switch (u) {
            case "bigint":
            case "string":
            case "number":
              a = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case I:
                case q:
                  a = !0;
                  break;
                case K:
                  return R((a = e.i)(e.o), n, t, o, i)
              }
          }
          if (a) {
            i = i(a = e);
            var c = "" === o ? "." + S(a, 0) : o;
            return le(i) ? (t = "", null != c && (t = c.replace(ke, "$&/") + "/"), R(i, n, t, "", function(e) {
              return e
            })) : null != i && (O(i) && (null != i.key && (a && a.key === i.key || f(i.key)), t = function(e, n) {
              return (n = w(e.type, n, void 0, 0, e.u, e.props)).l.validated = e.l.validated, n
            }(i, t + (null == i.key || a && a.key === i.key ? "" : ("" + i.key).replace(ke, "$&/") + "/") + c), "" !== o && null != a && O(a) && null == a.key && a.l && !a.l.validated && (t.l.validated = 2), i = t), n.push(i)), 1
          }
          if (a = 0, c = "" === o ? "." : o + ":", le(e))
            for (var l = 0; l < e.length; l++) a += R(o = e[l], n, t, u = c + S(o, l), i);
          else if ("function" == typeof(l = r(e)))
            for (l === e.entries && (Se || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Se = !0), e = l.call(e), l = 0; !(o = e.next()).done;) a += R(o = o.value, n, t, u = c + S(o, l++), i);
          else if ("object" === u) {
            if ("function" == typeof e.then) return R(function(e) {
              switch (e.status) {
                case "fulfilled":
                  return e.value;
                case "rejected":
                  throw e.reason;
                default:
                  switch ("string" == typeof e.status ? e.then(k, k) : (e.status = "pending", e.then(function(n) {
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
            }(e), n, t, o, i);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" == (n = e + "") ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.")
          }
          return a
        }

        function E(e, n, t) {
          if (null == e) return e;
          var o = [],
            r = 0;
          return R(e, o, "", "", function(e) {
            return n.call(t, e, r++)
          }), o
        }

        function C(e) {
          if (-1 === e.m) {
            var n = e.h;
            (n = n()).then(function(n) {
              (0 === e.m || -1 === e.m) && (e.m = 1, e.h = n)
            }, function(n) {
              (0 === e.m || -1 === e.m) && (e.m = 2, e.h = n)
            }), -1 === e.m && (e.m = 0, e.h = n)
          }
          if (1 === e.m) return void 0 === (n = e.h) && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", n), "default" in n || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", n), n.default;
          throw e.h
        }

        function T() {
          var e = se.H;
          return null === e && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e
        }

        function x() {}

        function A(n) {
          if (null === Ce) try {
            var t = ("require" + Math.random()).slice(0, 7);
            Ce = (e && e[t]).call(e, "timers").setImmediate
          } catch {
            Ce = function(e) {
              !1 === Ee && (Ee = !0, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var n = new MessageChannel;
              n.port1.onmessage = e, n.port2.postMessage(void 0)
            }
          }
          return Ce(n)
        }

        function L(e) {
          return e.length > 1 && "function" == typeof AggregateError ? new AggregateError(e) : e[0]
        }

        function M(e, n) {
          n !== Te - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Te = n
        }

        function D(e, n, t) {
          var o = se.actQueue;
          if (null !== o)
            if (0 !== o.length) try {
              return $(o), void A(function() {
                return D(e, n, t)
              })
            } catch (e) {
              se.thrownErrors.push(e)
            } else se.actQueue = null;
          se.thrownErrors.length > 0 ? (o = L(se.thrownErrors), se.thrownErrors.length = 0, t(o)) : n(e)
        }

        function $(e) {
          if (!Ae) {
            Ae = !0;
            var n = 0;
            try {
              for (; n < e.length; n++)
                for (var t = e[n];;) {
                  se.didUsePromise = !1;
                  var o = t(!1);
                  if (null === o) break;
                  if (se.didUsePromise) return e[n] = t, void e.splice(0, n);
                  t = o
                }
              e.length = 0
            } catch (t) {
              e.splice(0, n + 1), se.thrownErrors.push(t)
            } finally {
              Ae = !1
            }
          }
        }
        "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var I = Symbol.for("react.transitional.element"),
          q = Symbol.for("react.portal"),
          U = Symbol.for("react.fragment"),
          F = Symbol.for("react.strict_mode"),
          Y = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var H = Symbol.for("react.consumer"),
          P = Symbol.for("react.context"),
          B = Symbol.for("react.forward_ref"),
          V = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          G = Symbol.for("react.memo"),
          K = Symbol.for("react.lazy"),
          J = Symbol.for("react.offscreen"),
          W = Symbol.iterator,
          X = {},
          N = {
            isMounted: function() {
              return !1
            },
            enqueueForceUpdate: function(e) {
              i(e, "forceUpdate")
            },
            enqueueReplaceState: function(e) {
              i(e, "replaceState")
            },
            enqueueSetState: function(e) {
              i(e, "setState")
            }
          },
          Q = Object.assign,
          Z = {};
        Object.freeze(Z), u.prototype.isReactComponent = {}, u.prototype.setState = function(e, n) {
          if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e, n, "setState")
        }, u.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        };
        var ee, ne = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        };
        for (ee in ne) ne.hasOwnProperty(ee) && t(ee, ne[ee]);
        a.prototype = u.prototype, (ne = c.prototype = new a).constructor = c, Q(ne, u.prototype), ne.isPureReactComponent = !0;
        var te, oe, re, ie, ue, ae, ce, le = Array.isArray,
          fe = Symbol.for("react.client.reference"),
          se = {
            H: null,
            A: null,
            T: null,
            S: null,
            actQueue: null,
            isBatchingLegacy: !1,
            didScheduleLegacyUpdate: !1,
            didUsePromise: !1,
            thrownErrors: [],
            getCurrentStack: null
          },
          pe = {}.hasOwnProperty,
          de = Symbol.for("react.client.reference"),
          ye = 0;
        d.v = !0;
        var me, he, be, ve, ge = !1,
          we = new("function" == typeof WeakMap ? WeakMap : Map),
          _e = Symbol.for("react.client.reference"),
          Oe = {},
          je = {},
          Se = !1,
          ke = /\/+/g,
          Re = "function" == typeof reportError ? reportError : function(e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
              var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? e.message + "" : e + "",
                error: e
              });
              if (!window.dispatchEvent(n)) return
            } else if ("object" == typeof o && "function" == typeof o.emit) return void o.emit("uncaughtException", e);
            console.error(e)
          },
          Ee = !1,
          Ce = null,
          Te = 0,
          xe = !1,
          Ae = !1,
          Le = "function" == typeof queueMicrotask ? function(e) {
            queueMicrotask(function() {
              return queueMicrotask(e)
            })
          } : A;
        n.Children = {
          map: E,
          forEach: function(e, n, t) {
            E(e, function() {
              n.apply(this, arguments)
            }, t)
          },
          count: function(e) {
            var n = 0;
            return E(e, function() {
              n++
            }), n
          },
          toArray: function(e) {
            return E(e, function(e) {
              return e
            }) || []
          },
          only: function(e) {
            if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
          }
        }, n.Component = u, n.Fragment = U, n.Profiler = Y, n.PureComponent = c, n.StrictMode = F, n.Suspense = V, n._ = se, n.act = function(e) {
          var n = se.actQueue,
            t = Te;
          Te++;
          var o = se.actQueue = null !== n ? n : [],
            r = !1;
          try {
            var i = e()
          } catch (e) {
            se.thrownErrors.push(e)
          }
          if (se.thrownErrors.length > 0) throw M(0, t), e = L(se.thrownErrors), se.thrownErrors.length = 0, e;
          if (null !== i && "object" == typeof i && "function" == typeof i.then) {
            var u = i;
            return Le(function() {
              r || xe || (xe = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))
            }), {
              then: function(e, n) {
                r = !0, u.then(function(r) {
                  if (M(0, t), 0 === t) {
                    try {
                      $(o), A(function() {
                        return D(r, e, n)
                      })
                    } catch (e) {
                      se.thrownErrors.push(e)
                    }
                    if (se.thrownErrors.length > 0) {
                      var i = L(se.thrownErrors);
                      se.thrownErrors.length = 0, n(i)
                    }
                  } else e(r)
                }, function(e) {
                  M(0, t), se.thrownErrors.length > 0 && (e = L(se.thrownErrors), se.thrownErrors.length = 0), n(e)
                })
              }
            }
          }
          var a = i;
          if (M(0, t), 0 === t && ($(o), 0 !== o.length && Le(function() {
              r || xe || (xe = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))
            }), se.actQueue = null), se.thrownErrors.length > 0) throw e = L(se.thrownErrors), se.thrownErrors.length = 0, e;
          return {
            then: function(e, n) {
              r = !0, 0 === t ? (se.actQueue = o, A(function() {
                return D(a, e, n)
              })) : e(a)
            }
          }
        }, n.cache = function(e) {
          return function() {
            return e.apply(null, arguments)
          }
        }, n.cloneElement = function(e, n, t) {
          if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
          var o, r = Q({}, e.props),
            i = e.key,
            u = e.u;
          if (null != n)
            for (a in (o = !(pe.call(n, "ref") && (o = Object.getOwnPropertyDescriptor(n, "ref").get) && o.isReactWarning) && void 0 !== n.ref) && (u = b()), v(n) && (f(n.key), i = "" + n.key), n) !pe.call(n, a) || "key" === a || "__self" === a || "__source" === a || "ref" === a && void 0 === n.ref || (r[a] = n[a]);
          var a = arguments.length - 2;
          if (1 === a) r.children = t;
          else if (a > 1) {
            o = Array(a);
            for (var c = 0; a > c; c++) o[c] = arguments[c + 2];
            r.children = o
          }
          for (r = w(e.type, i, void 0, 0, u, r), i = 2; arguments.length > i; i++) _(arguments[i], r.type);
          return r
        }, n.createContext = function(e) {
          return (e = {
            $$typeof: P,
            O: e,
            j: e,
            k: 0,
            Provider: null,
            Consumer: null
          }).Provider = e, e.Consumer = {
            $$typeof: H,
            t: e
          }, e.R = null, e.C = null, e
        }, n.createElement = function(e, n, t) {
          if (p(e))
            for (var o = 2; arguments.length > o; o++) _(arguments[o], e);
          else {
            if (o = "", (void 0 === e || "object" == typeof e && null !== e && 0 === Object.keys(e).length) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), null === e) var r = "null";
            else le(e) ? r = "array" : void 0 !== e && e.$$typeof === I ? (r = "<" + (s(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : r = typeof e;
            console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", r, o)
          }
          var i;
          if (o = {}, r = null, null != n)
            for (i in ve || !("L" in n) || "key" in n || (ve = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), v(n) && (f(n.key), r = "" + n.key), n) pe.call(n, i) && "key" !== i && "__self" !== i && "__source" !== i && (o[i] = n[i]);
          var u = arguments.length - 2;
          if (1 === u) o.children = t;
          else if (u > 1) {
            for (var a = Array(u), c = 0; u > c; c++) a[c] = arguments[c + 2];
            Object.freeze && Object.freeze(a), o.children = a
          }
          if (e && e.defaultProps)
            for (i in u = e.defaultProps) void 0 === o[i] && (o[i] = u[i]);
          return r && function(e, n) {
            function t() {
              be || (be = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", n))
            }
            t.isReactWarning = !0, Object.defineProperty(e, "key", {
              get: t,
              configurable: !0
            })
          }(o, "function" == typeof e ? e.displayName || e.name || "Unknown" : e), w(e, r, void 0, 0, b(), o)
        }, n.createRef = function() {
          var e = {
            current: null
          };
          return Object.seal(e), e
        }, n.forwardRef = function(e) {
          null != e && e.$$typeof === G ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" != typeof e ? console.error("forwardRef requires a render function but was given %s.", null === e ? "null" : typeof e) : 0 !== e.length && 2 !== e.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === e.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), null != e && null != e.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
          var n, t = {
            $$typeof: B,
            render: e
          };
          return Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n
            },
            set: function(t) {
              n = t, e.name || e.displayName || (Object.defineProperty(e, "name", {
                value: t
              }), e.displayName = t)
            }
          }), t
        }, n.isValidElement = O, n.lazy = function(e) {
          return {
            $$typeof: K,
            o: {
              m: -1,
              h: e
            },
            i: C
          }
        }, n.memo = function(e, n) {
          var t;
          return p(e) || console.error("memo: The first argument must be a component. Instead received: %s", null === e ? "null" : typeof e), Object.defineProperty(n = {
            $$typeof: G,
            type: e,
            compare: void 0 === n ? null : n
          }, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return t
            },
            set: function(n) {
              t = n, e.name || e.displayName || (Object.defineProperty(e, "name", {
                value: n
              }), e.displayName = n)
            }
          }), n
        }, n.startTransition = function(e) {
          var n = se.T,
            t = {};
          se.T = t, t.M = new Set;
          try {
            var o = e(),
              r = se.S;
            null !== r && r(t, o), "object" == typeof o && null !== o && "function" == typeof o.then && o.then(x, Re)
          } catch (e) {
            Re(e)
          } finally {
            null === n && t.M && (e = t.M.size, t.M.clear(), e > 10 && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), se.T = n
          }
        }, n.unstable_useCacheRefresh = function() {
          return T().useCacheRefresh()
        }, n.use = function(e) {
          return T().use(e)
        }, n.useActionState = function(e, n, t) {
          return T().useActionState(e, n, t)
        }, n.useCallback = function(e, n) {
          return T().useCallback(e, n)
        }, n.useContext = function(e) {
          var n = T();
          return e.$$typeof === H && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), n.useContext(e)
        }, n.useDebugValue = function(e, n) {
          return T().useDebugValue(e, n)
        }, n.useDeferredValue = function(e, n) {
          return T().useDeferredValue(e, n)
        }, n.useEffect = function(e, n) {
          return T().useEffect(e, n)
        }, n.useId = function() {
          return T().useId()
        }, n.useImperativeHandle = function(e, n, t) {
          return T().useImperativeHandle(e, n, t)
        }, n.useInsertionEffect = function(e, n) {
          return T().useInsertionEffect(e, n)
        }, n.useLayoutEffect = function(e, n) {
          return T().useLayoutEffect(e, n)
        }, n.useMemo = function(e, n) {
          return T().useMemo(e, n)
        }, n.useOptimistic = function(e, n) {
          return T().useOptimistic(e, n)
        }, n.useReducer = function(e, n, t) {
          return T().useReducer(e, n, t)
        }, n.useRef = function(e) {
          return T().useRef(e)
        }, n.useState = function(e) {
          return T().useState(e)
        }, n.useSyncExternalStore = function(e, n, t) {
          return T().useSyncExternalStore(e, n, t)
        }, n.useTransition = function() {
          return T().useTransition()
        }, n.version = "19.0.0", "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())
      }()
    },
    96540: (e, n, t) => {
      e.exports = t(64837)
    }
  }
]);
