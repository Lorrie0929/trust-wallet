(() => {
  var e, t, n = {
      4146: (e, t, n) => {
        "use strict";
        var r = n(44363),
          o = {
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
          i = {
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
          return r.isMemo(e) ? a : s[e.$$typeof] || o
        }
        s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
        }, s[r.Memo] = a;
        var c = Object.defineProperty,
          u = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          h = Object.getPrototypeOf,
          p = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (p) {
              var o = h(n);
              o && o !== p && e(t, o, r)
            }
            var a = u(n);
            f && (a = a.concat(f(n)));
            for (var s = l(t), m = l(n), g = 0; g < a.length; ++g) {
              var y = a[g];
              if (!(i[y] || r && r[y] || m && m[y] || s && s[y])) {
                var v = d(n, y);
                try {
                  c(t, y, v)
                } catch {}
              }
            }
          }
          return t
        }
      },
      10540: e => {
        "use strict";
        e.exports = function(e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
        }
      },
      14545: (e, t) => {
        t.isatty = function() {
          return !1
        }, t.ReadStream = function() {
          throw Error("tty.ReadStream is not implemented")
        }, t.WriteStream = function() {
          throw Error("tty.WriteStream is not implemented")
        }
      },
      26536: (e, t, n) => {
        "use strict";
        ! function() {
          function e(t) {
            if (null == t) return null;
            if ("function" == typeof t) return t.$$typeof === D ? null : t.displayName || t.name || null;
            if ("string" == typeof t) return t;
            switch (t) {
              case v:
                return "Fragment";
              case y:
                return "Portal";
              case k:
                return "Profiler";
              case b:
                return "StrictMode";
              case M:
                return "Suspense";
              case I:
                return "SuspenseList"
            }
            if ("object" == typeof t) switch ("number" == typeof t.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), t.$$typeof) {
              case R:
                return (t.displayName || "Context") + ".Provider";
              case L:
                return (t.l.displayName || "Context") + ".Consumer";
              case E:
                var n = t.render;
                return (t = t.displayName) || (t = "" !== (t = n.displayName || n.name || "") ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
              case O:
                return null !== (n = t.displayName || null) ? n : e(t.type) || "Memo";
              case H:
                n = t.u, t = t.h;
                try {
                  return e(t(n))
                } catch {}
            }
            return null
          }

          function r(e) {
            return "" + e
          }

          function o(e) {
            try {
              r(e);
              var t = !1
            } catch {
              t = !0
            }
            if (t) {
              var n = (t = console).error,
                o = "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
              return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", o), r(e)
            }
          }

          function i() {}

          function a(e) {
            if (void 0 === z) try {
              throw Error()
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              z = t && t[1] || "", Z = e.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : e.stack.indexOf("@") > -1 ? "@unknown:0:0" : ""
            }
            return "\n" + z + e + Z
          }

          function s(e, t) {
            if (!e || G) return "";
            var n, r = q.get(e);
            if (void 0 !== r) return r;
            G = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0, n = N.H, N.H = null,
              function() {
                if (0 === W) {
                  w = console.log, x = console.info, C = console.warn, S = console.error, T = console.group, F = console.groupCollapsed, A = console.groupEnd;
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
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
                W++
              }();
            try {
              var o = {
                DetermineComponentFrameRoot: function() {
                  try {
                    if (t) {
                      var n = function() {
                        throw Error()
                      };
                      if (Object.defineProperty(n.prototype, "props", {
                          set: function() {
                            throw Error()
                          }
                        }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                          Reflect.construct(n, [])
                        } catch (e) {
                          var r = e
                        }
                        Reflect.construct(e, [], n)
                      } else {
                        try {
                          n.call()
                        } catch (e) {
                          r = e
                        }
                        e.call(n.prototype)
                      }
                    } else {
                      try {
                        throw Error()
                      } catch (e) {
                        r = e
                      }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                    }
                  } catch (e) {
                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                  }
                  return [null, null]
                }
              };
              o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
              var s = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
              s && s.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
              });
              var l = o.DetermineComponentFrameRoot(),
                c = l[0],
                u = l[1];
              if (c && u) {
                var f = c.split("\n"),
                  d = u.split("\n");
                for (l = s = 0; s < f.length && !f[s].includes("DetermineComponentFrameRoot");) s++;
                for (; l < d.length && !d[l].includes("DetermineComponentFrameRoot");) l++;
                if (s === f.length || l === d.length)
                  for (s = f.length - 1, l = d.length - 1; s >= 1 && l >= 0 && f[s] !== d[l];) l--;
                for (; s >= 1 && l >= 0; s--, l--)
                  if (f[s] !== d[l]) {
                    if (1 !== s || 1 !== l)
                      do {
                        if (s--, 0 > --l || f[s] !== d[l]) {
                          var h = "\n" + f[s].replace(" at new ", " at ");
                          return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), "function" == typeof e && q.set(e, h), h
                        }
                      } while (s >= 1 && l >= 0);
                    break
                  }
              }
            } finally {
              G = !1, N.H = n,
                function() {
                  if (0 === --W) {
                    var e = {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0
                    };
                    Object.defineProperties(console, {
                      log: P({}, e, {
                        value: w
                      }),
                      info: P({}, e, {
                        value: x
                      }),
                      warn: P({}, e, {
                        value: C
                      }),
                      error: P({}, e, {
                        value: S
                      }),
                      group: P({}, e, {
                        value: T
                      }),
                      groupCollapsed: P({}, e, {
                        value: F
                      }),
                      groupEnd: P({}, e, {
                        value: A
                      })
                    })
                  }
                  0 > W && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
                }(), Error.prepareStackTrace = r
            }
            return f = (f = e ? e.displayName || e.name : "") ? a(f) : "", "function" == typeof e && q.set(e, f), f
          }

          function l(e) {
            if (null == e) return "";
            if ("function" == typeof e) {
              var t = e.prototype;
              return s(e, !(!t || !t.isReactComponent))
            }
            if ("string" == typeof e) return a(e);
            switch (e) {
              case M:
                return a("Suspense");
              case I:
                return a("SuspenseList")
            }
            if ("object" == typeof e) switch (e.$$typeof) {
              case E:
                return s(e.render, !1);
              case O:
                return l(e.type);
              case H:
                t = e.u, e = e.h;
                try {
                  return l(e(t))
                } catch {}
            }
            return ""
          }

          function c() {
            var e = N.A;
            return null === e ? null : e.getOwner()
          }

          function u() {
            var t = e(this.type);
            return K[t] || (K[t] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), void 0 !== (t = this.props.ref) ? t : null
          }

          function f(t, n, r, i, a, s) {
            if ("string" == typeof t || "function" == typeof t || t === v || t === k || t === b || t === M || t === I || t === B || "object" == typeof t && null !== t && (t.$$typeof === H || t.$$typeof === O || t.$$typeof === R || t.$$typeof === L || t.$$typeof === E || t.$$typeof === V || void 0 !== t.getModuleId)) {
              var l = n.children;
              if (void 0 !== l)
                if (i)
                  if (U(l)) {
                    for (i = 0; i < l.length; i++) d(l[i], t);
                    Object.freeze && Object.freeze(l)
                  } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else d(l, t)
            } else l = "", (void 0 === t || "object" == typeof t && null !== t && 0 === Object.keys(t).length) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), null === t ? i = "null" : U(t) ? i = "array" : void 0 !== t && t.$$typeof === g ? (i = "<" + (e(t.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : i = typeof t, console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, l);
            if (_.call(n, "key")) {
              l = e(t);
              var f = Object.keys(n).filter(function(e) {
                return "key" !== e
              });
              i = f.length > 0 ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", X[l + i] || (f = f.length > 0 ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', i, l, f, l), X[l + i] = !0)
            }
            if (l = null, void 0 !== r && (o(r), l = "" + r), function(e) {
                if (_.call(e, "key")) {
                  var t = Object.getOwnPropertyDescriptor(e, "key").get;
                  if (t && t.isReactWarning) return !1
                }
                return void 0 !== e.key
              }(n) && (o(n.key), l = "" + n.key), "key" in n)
              for (var h in r = {}, n) "key" !== h && (r[h] = n[h]);
            else r = n;
            return l && function(e, t) {
                function n() {
                  $ || ($ = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t))
                }
                n.isReactWarning = !0, Object.defineProperty(e, "key", {
                  get: n,
                  configurable: !0
                })
              }(r, "function" == typeof t ? t.displayName || t.name || "Unknown" : t),
              function(e, t, n, r, o, i) {
                return n = i.ref, Object.defineProperty(e = {
                  $$typeof: g,
                  type: e,
                  key: t,
                  props: i,
                  v: o
                }, "ref", null !== (void 0 !== n ? n : null) ? {
                  enumerable: !1,
                  get: u
                } : {
                  enumerable: !1,
                  value: null
                }), e.F = {}, Object.defineProperty(e.F, "validated", {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: 0
                }), Object.defineProperty(e, "R", {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: null
                }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e
              }(t, l, s, 0, c(), r)
          }

          function d(e, t) {
            if ("object" == typeof e && e && e.$$typeof !== Y)
              if (U(e))
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  h(r) && p(r, t)
                } else if (h(e)) e.F && (e.F.validated = 1);
                else if ("function" == typeof(n = null === e || "object" != typeof e ? null : "function" == typeof(n = j && e[j] || e["@@iterator"]) ? n : null) && n !== e.entries && (n = n.call(e)) !== e)
              for (; !(e = n.next()).done;) h(e.value) && p(e.value, t)
          }

          function h(e) {
            return "object" == typeof e && null !== e && e.$$typeof === g
          }

          function p(t, n) {
            if (t.F && !t.F.validated && null == t.key && (t.F.validated = 1, n = function(t) {
                var n = "",
                  r = c();
                return r && (r = e(r.type)) && (n = "\n\nCheck the render method of `" + r + "`."), n || (t = e(t)) && (n = "\n\nCheck the top-level render call using <" + t + ">."), n
              }(n), !J[n])) {
              J[n] = !0;
              var r = "";
              t && null != t.v && t.v !== c() && (r = null, "number" == typeof t.v.tag ? r = e(t.v.type) : "string" == typeof t.v.name && (r = t.v.name), r = " It was passed a child from " + r + ".");
              var o = N.getCurrentStack;
              N.getCurrentStack = function() {
                var e = l(t.type);
                return o && (e += o() || ""), e
              }, console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', n, r), N.getCurrentStack = o
            }
          }
          var m = n(96540),
            g = Symbol.for("react.transitional.element"),
            y = Symbol.for("react.portal"),
            v = Symbol.for("react.fragment"),
            b = Symbol.for("react.strict_mode"),
            k = Symbol.for("react.profiler");
          Symbol.for("react.provider");
          var w, x, C, S, T, F, A, L = Symbol.for("react.consumer"),
            R = Symbol.for("react.context"),
            E = Symbol.for("react.forward_ref"),
            M = Symbol.for("react.suspense"),
            I = Symbol.for("react.suspense_list"),
            O = Symbol.for("react.memo"),
            H = Symbol.for("react.lazy"),
            B = Symbol.for("react.offscreen"),
            j = Symbol.iterator,
            D = Symbol.for("react.client.reference"),
            N = m.I,
            _ = {}.hasOwnProperty,
            P = Object.assign,
            V = Symbol.for("react.client.reference"),
            U = Array.isArray,
            W = 0;
          i.O = !0;
          var z, Z, $, G = !1,
            q = new("function" == typeof WeakMap ? WeakMap : Map),
            Y = Symbol.for("react.client.reference"),
            K = {},
            X = {},
            J = {};
          t.Fragment = v, t.jsx = function(e, t, n, r, o) {
            return f(e, t, n, !1, 0, o)
          }, t.jsxs = function(e, t, n, r, o) {
            return f(e, t, n, !0, 0, o)
          }
        }()
      },
      31557: (e, t, n) => {
        "use strict";
        ! function() {
          function e() {}

          function r(e) {
            return "" + e
          }

          function o(e, t) {
            return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
          }

          function i(e) {
            return null === e ? "`null`" : void 0 === e ? "`undefined`" : "" === e ? "an empty string" : 'something with type "' + typeof e + '"'
          }

          function a(e) {
            return null === e ? "`null`" : void 0 === e ? "`undefined`" : "" === e ? "an empty string" : "string" == typeof e ? JSON.stringify(e) : "number" == typeof e ? "`" + e + "`" : 'something with type "' + typeof e + '"'
          }

          function s() {
            var e = f.H;
            return null === e && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e
          }
          "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
          var l = n(96540),
            c = {
              d: {
                f: e,
                r: function() {
                  throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")
                },
                D: e,
                C: e,
                L: e,
                m: e,
                X: e,
                S: e,
                M: e
              },
              p: 0,
              findDOMNode: null
            },
            u = Symbol.for("react.portal"),
            f = l.I;
          "function" == typeof Map && null != Map.prototype && "function" == typeof Map.prototype.forEach && "function" == typeof Set && null != Set.prototype && "function" == typeof Set.prototype.clear && "function" == typeof Set.prototype.forEach || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), t.B = c, t.createPortal = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error("Target container is not a DOM element.");
            return function(e, t, n) {
              var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              try {
                r(o);
                var i = !1
              } catch {
                i = !0
              }
              return i && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", "function" == typeof Symbol && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object"), r(o)), {
                $$typeof: u,
                key: null == o ? null : "" + o,
                children: e,
                containerInfo: t,
                implementation: n
              }
            }(e, t, null, n)
          }, t.flushSync = function(e) {
            var t = f.T,
              n = c.p;
            try {
              if (f.T = null, c.p = 2, e) return e()
            } finally {
              f.T = t, c.p = n, c.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")
            }
          }, t.preconnect = function(e, t) {
            "string" == typeof e && e ? null != t && "object" != typeof t ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", a(t)) : null != t && "string" != typeof t.crossOrigin && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", i(t.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", i(e)), "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, c.d.C(e, t))
          }, t.prefetchDNS = function(e) {
            if ("string" == typeof e && e) {
              if (arguments.length > 1) {
                var t = arguments[1];
                "object" == typeof t && t.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", a(t)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", a(t))
              }
            } else console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", i(e));
            "string" == typeof e && c.d.D(e)
          }, t.preinit = function(e, t) {
            if ("string" == typeof e && e ? null == t || "object" != typeof t ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", a(t)) : "style" !== t.as && "script" !== t.as && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', a(t.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", i(e)), "string" == typeof e && t && "string" == typeof t.as) {
              var n = t.as,
                r = o(n, t.crossOrigin),
                s = "string" == typeof t.integrity ? t.integrity : void 0,
                l = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
              "style" === n ? c.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: s,
                fetchPriority: l
              }) : "script" === n && c.d.X(e, {
                crossOrigin: r,
                integrity: s,
                fetchPriority: l,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
              })
            }
          }, t.preinitModule = function(e, t) {
            var n = "";
            "string" == typeof e && e || (n += " The `href` argument encountered was " + i(e) + "."), void 0 !== t && "object" != typeof t ? n += " The `options` argument encountered was " + i(t) + "." : t && "as" in t && "script" !== t.as && (n += " The `as` option encountered was " + a(t.as) + "."), n ? console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", n) : "script" === (n = t && "string" == typeof t.as ? t.as : "script") || (n = a(n), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', n, e)), "string" == typeof e && ("object" == typeof t && null !== t ? (null == t.as || "script" === t.as) && (n = o(t.as, t.crossOrigin), c.d.M(e, {
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
              nonce: "string" == typeof t.nonce ? t.nonce : void 0
            })) : null == t && c.d.M(e))
          }, t.preload = function(e, t) {
            var n = "";
            if ("string" == typeof e && e || (n += " The `href` argument encountered was " + i(e) + "."), null == t || "object" != typeof t ? n += " The `options` argument encountered was " + i(t) + "." : "string" == typeof t.as && t.as || (n += " The `as` option encountered was " + i(t.as) + "."), n && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', n), "string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
              var r = o(n = t.as, t.crossOrigin);
              c.d.L(e, n, {
                crossOrigin: r,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                type: "string" == typeof t.type ? t.type : void 0,
                fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" == typeof t.media ? t.media : void 0
              })
            }
          }, t.preloadModule = function(e, t) {
            var n = "";
            "string" == typeof e && e || (n += " The `href` argument encountered was " + i(e) + "."), void 0 !== t && "object" != typeof t ? n += " The `options` argument encountered was " + i(t) + "." : t && "as" in t && "string" != typeof t.as && (n += " The `as` option encountered was " + i(t.as) + "."), n && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', n), "string" == typeof e && (t ? (n = o(t.as, t.crossOrigin), c.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0
            })) : c.d.m(e))
          }, t.requestFormReset = function(e) {
            c.d.r(e)
          }, t.unstable_batchedUpdates = function(e, t) {
            return e(t)
          }, t.useFormState = function(e, t, n) {
            return s().useFormState(e, t, n)
          }, t.useFormStatus = function() {
            return s().useHostTransitionStatus()
          }, t.version = "19.0.0", "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())
        }()
      },
      31601: e => {
        "use strict";
        e.exports = function(e) {
          return e[1]
        }
      },
      37007: e => {
        "use strict";
        var t, n = "object" == typeof Reflect ? Reflect : null,
          r = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
            return function() {}.apply.call(e, t, n)
          };
        t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
          return Object.getOwnPropertyNames(e)
        };
        var o = Number.isNaN || function(e) {
          return e != e
        };

        function i() {
          i.init.call(this)
        }
        e.exports = i, e.exports.once = function(e, t) {
          return new Promise(function(n, r) {
            function o(n) {
              e.removeListener(t, i), r(n)
            }

            function i() {
              "function" == typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments))
            }
            m(e, t, i, {
              once: !0
            }), "error" !== t && function(e, t) {
              "function" == typeof e.on && m(e, "error", t, {
                once: !0
              })
            }(e, o)
          })
        }, i.EventEmitter = i, i.prototype.j = void 0, i.prototype.N = 0, i.prototype._ = void 0;
        var a = 10;

        function s(e) {
          if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function l(e) {
          return void 0 === e._ ? i.defaultMaxListeners : e._
        }

        function c(e, t, n, r) {
          var o, i, a;
          if (s(n), void 0 === (i = e.j) ? (i = e.j = Object.create(null), e.N = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e.j), a = i[t]), void 0 === a) a = i[t] = n, ++e.N;
          else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (o = l(e)) > 0 && a.length > o && !a.warned) {
            a.warned = !0;
            var c = Error("Possible EventEmitter memory leak detected. " + a.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = a.length,
              function(e) {
                console && console.warn && console.warn(e)
              }(c)
          }
          return e
        }

        function u() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function f(e, t, n) {
          var r = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: n
            },
            o = u.bind(r);
          return o.listener = n, r.wrapFn = o, o
        }

        function d(e, t, n) {
          var r = e.j;
          if (void 0 === r) return [];
          var o = r[t];
          return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) {
            for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
          }(o) : p(o, o.length)
        }

        function h(e) {
          var t = this.j;
          if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length
          }
          return 0
        }

        function p(e, t) {
          for (var n = Array(t), r = 0; t > r; ++r) n[r] = e[r];
          return n
        }

        function m(e, t, n, r) {
          if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
          else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, function o(i) {
              r.once && e.removeEventListener(t, o), n(i)
            })
          }
        }
        Object.defineProperty(i, "defaultMaxListeners", {
          enumerable: !0,
          get: function() {
            return a
          },
          set: function(e) {
            if ("number" != typeof e || 0 > e || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            a = e
          }
        }), i.init = function() {
          (void 0 === this.j || this.j === Object.getPrototypeOf(this).j) && (this.j = Object.create(null), this.N = 0), this._ = this._ || void 0
        }, i.prototype.setMaxListeners = function(e) {
          if ("number" != typeof e || 0 > e || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
          return this._ = e, this
        }, i.prototype.getMaxListeners = function() {
          return l(this)
        }, i.prototype.emit = function(e) {
          for (var t = [], n = 1; arguments.length > n; n++) t.push(arguments[n]);
          var o = "error" === e,
            i = this.j;
          if (void 0 !== i) o = o && void 0 === i.error;
          else if (!o) return !1;
          if (o) {
            var a;
            if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
            var s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw s.context = a, s
          }
          var l = i[e];
          if (void 0 === l) return !1;
          if ("function" == typeof l) r(l, this, t);
          else {
            var c = l.length,
              u = p(l, c);
            for (n = 0; c > n; ++n) r(u[n], this, t)
          }
          return !0
        }, i.prototype.addListener = function(e, t) {
          return c(this, e, t, !1)
        }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
          return c(this, e, t, !0)
        }, i.prototype.once = function(e, t) {
          return s(t), this.on(e, f(this, e, t)), this
        }, i.prototype.prependOnceListener = function(e, t) {
          return s(t), this.prependListener(e, f(this, e, t)), this
        }, i.prototype.removeListener = function(e, t) {
          var n, r, o, i, a;
          if (s(t), void 0 === (r = this.j)) return this;
          if (void 0 === (n = r[e])) return this;
          if (n === t || n.listener === t) 0 === --this.N ? this.j = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
          else if ("function" != typeof n) {
            for (o = -1, i = n.length - 1; i >= 0; i--)
              if (n[i] === t || n[i].listener === t) {
                a = n[i].listener, o = i;
                break
              } if (0 > o) return this;
            0 === o ? n.shift() : function(e, t) {
              for (; t + 1 < e.length; t++) e[t] = e[t + 1];
              e.pop()
            }(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
          }
          return this
        }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
          var t, n, r;
          if (void 0 === (n = this.j)) return this;
          if (void 0 === n.removeListener) return 0 === arguments.length ? (this.j = Object.create(null), this.N = 0) : void 0 !== n[e] && (0 === --this.N ? this.j = Object.create(null) : delete n[e]), this;
          if (0 === arguments.length) {
            var o, i = Object.keys(n);
            for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
            return this.removeAllListeners("removeListener"), this.j = Object.create(null), this.N = 0, this
          }
          if ("function" == typeof(t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
          return this
        }, i.prototype.listeners = function(e) {
          return d(this, e, !0)
        }, i.prototype.rawListeners = function(e) {
          return d(this, e, !1)
        }, i.listenerCount = function(e, t) {
          return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
        }, i.prototype.listenerCount = h, i.prototype.eventNames = function() {
          return this.N > 0 ? t(this.j) : []
        }
      },
      40961: (e, t, n) => {
        "use strict";
        e.exports = n(31557)
      },
      41113: e => {
        "use strict";
        e.exports = function(e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e))
          }
        }
      },
      44363: (e, t, n) => {
        "use strict";
        e.exports = n(98413)
      },
      55056: (e, t, n) => {
        "use strict";
        e.exports = function(e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t)
        }
      },
      56571: (e, t, n) => {
        "use strict";
        ! function() {
          function e(e, t, n, r) {
            return t + ("s" === n ? "\\73 " : "\\53 ") + r
          }

          function r(e, t, n, r) {
            return t + ("s" === n ? "\\u0073" : "\\u0053") + r
          }

          function o(e) {
            return {}.toString.call(e).replace(/^\[object (.*)\]$/, function(e, t) {
              return t
            })
          }

          function i(e) {
            var t = JSON.stringify(e);
            return '"' + e + '"' === t ? e : t
          }

          function a(e) {
            switch (typeof e) {
              case "string":
                return JSON.stringify(e.length > 10 ? e.slice(0, 10) + "..." : e);
              case "object":
                return cn(e) ? "[...]" : null !== e && e.$$typeof === dn ? "client" : "Object" === (e = o(e)) ? "{...}" : e;
              case "function":
                return e.$$typeof === dn ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
              default:
                return e + ""
            }
          }

          function s(e) {
            if ("string" == typeof e) return e;
            switch (e) {
              case Jt:
                return "Suspense";
              case Qt:
                return "SuspenseList"
            }
            if ("object" == typeof e) switch (e.$$typeof) {
              case Xt:
                return s(e.render);
              case en:
                return s(e.type);
              case tn:
                var t = e.u;
                e = e.h;
                try {
                  return s(e(t))
                } catch {}
            }
            return ""
          }

          function l(e, t) {
            var n = o(e);
            if ("Object" !== n && "Array" !== n) return n;
            var r = -1,
              c = 0;
            if (cn(e))
              if (fn.has(e)) {
                var u = fn.get(e);
                n = "<" + s(u) + ">";
                for (var f = 0; f < e.length; f++) {
                  var d = e[f];
                  d = "string" == typeof d ? d : "object" == typeof d && null !== d ? "{" + l(d) + "}" : "{" + a(d) + "}", "" + f === t ? (r = n.length, c = d.length, n += d) : n = 15 > d.length && 40 > n.length + d.length ? n + d : n + "{...}"
                }
                n += "</" + s(u) + ">"
              } else {
                for (n = "[", u = 0; u < e.length; u++) u > 0 && (n += ", "), f = "object" == typeof(f = e[u]) && null !== f ? l(f) : a(f), "" + u === t ? (r = n.length, c = f.length, n += f) : n = 10 > f.length && 40 > n.length + f.length ? n + f : n + "...";
                n += "]"
              }
            else if (e.$$typeof === Wt) n = "<" + s(e.type) + "/>";
            else {
              if (e.$$typeof === dn) return "client";
              if (un.has(e)) {
                for (n = "<" + (s(n = un.get(e)) || "..."), u = Object.keys(e), f = 0; f < u.length; f++) {
                  n += " ", n += i(d = u[f]) + "=";
                  var h = e[d],
                    p = d === t && "object" == typeof h && null !== h ? l(h) : a(h);
                  "string" != typeof h && (p = "{" + p + "}"), d === t ? (r = n.length, c = p.length, n += p) : n = 10 > p.length && 40 > n.length + p.length ? n + p : n + "..."
                }
                n += ">"
              } else {
                for (n = "{", u = Object.keys(e), f = 0; f < u.length; f++) f > 0 && (n += ", "), n += i(d = u[f]) + ": ", h = "object" == typeof(h = e[d]) && null !== h ? l(h) : a(h), d === t ? (r = n.length, c = h.length, n += h) : n = 10 > h.length && 40 > n.length + h.length ? n + h : n + "...";
                n += "}"
              }
            }
            return void 0 === t ? n : r > -1 && c > 0 ? "\n  " + n + "\n  " + (e = " ".repeat(r) + "^".repeat(c)) : "\n  " + n
          }

          function c(e, t) {
            var n = 3 & e.length,
              r = e.length - n,
              o = t;
            for (t = 0; r > t;) {
              var i = 255 & e.charCodeAt(t) | (255 & e.charCodeAt(++t)) << 8 | (255 & e.charCodeAt(++t)) << 16 | (255 & e.charCodeAt(++t)) << 24;
              ++t, o = 27492 + (65535 & (o = 5 * (65535 & (o = (o ^= i = 461845907 * (65535 & (i = (i = 3432918353 * (65535 & i) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295) << 15 | i >>> 17)) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + (((o >>> 16) + 58964 & 65535) << 16)
            }
            switch (i = 0, n) {
              case 3:
                i ^= (255 & e.charCodeAt(t + 2)) << 16;
              case 2:
                i ^= (255 & e.charCodeAt(t + 1)) << 8;
              case 1:
                o ^= 461845907 * (65535 & (i = (i = 3432918353 * (65535 & (i ^= 255 & e.charCodeAt(t))) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295) << 15 | i >>> 17)) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295
            }
            return o ^= e.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, ((o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295) ^ o >>> 16) >>> 0
          }

          function u(e) {
            return "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object"
          }

          function f(e) {
            try {
              return d(e), !1
            } catch {
              return !0
            }
          }

          function d(e) {
            return "" + e
          }

          function h(e, t) {
            if (f(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, u(e)), d(e)
          }

          function p(e, t) {
            if (f(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, u(e)), d(e)
          }

          function m(e) {
            if (f(e)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", u(e)), d(e)
          }

          function g(e) {
            return !!pn.call(yn, e) || !pn.call(gn, e) && (mn.test(e) ? yn[e] = !0 : (gn[e] = !0, console.error("Invalid attribute name: `%s`", e), !1))
          }

          function y(e, t) {
            kn[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || null == t.value || console.error("select" === e ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || null == t.checked || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
          }

          function v(e, t) {
            if (pn.call(xn, t) && xn[t]) return !0;
            if (Sn.test(t)) {
              if (e = "aria-" + t.slice(4).toLowerCase(), null == (e = wn.hasOwnProperty(e) ? e : null)) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), xn[t] = !0;
              if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), xn[t] = !0
            }
            if (Cn.test(t)) {
              if (e = t.toLowerCase(), null == (e = wn.hasOwnProperty(e) ? e : null)) return xn[t] = !0, !1;
              t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), xn[t] = !0)
            }
            return !0
          }

          function b(e, t, n, r) {
            if (pn.call(An, t) && An[t]) return !0;
            var o = t.toLowerCase();
            if ("onfocusin" === o || "onfocusout" === o) return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), An[t] = !0;
            if ("function" == typeof n && ("form" === e && "action" === t || "input" === e && "formAction" === t || "button" === e && "formAction" === t)) return !0;
            if (null != r) {
              if (e = r.possibleRegistrationNames, r.registrationNameDependencies.hasOwnProperty(t)) return !0;
              if (null != (r = e.hasOwnProperty(o) ? e[o] : null)) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, r), An[t] = !0;
              if (Ln.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), An[t] = !0
            } else if (Ln.test(t)) return Rn.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), An[t] = !0;
            if (En.test(t) || Mn.test(t)) return !0;
            if ("innerhtml" === o) return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), An[t] = !0;
            if ("aria" === o) return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), An[t] = !0;
            if ("is" === o && null != n && "string" != typeof n) return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), An[t] = !0;
            if ("number" == typeof n && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), An[t] = !0;
            if (Fn.hasOwnProperty(o)) {
              if ((o = Fn[o]) !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, o), An[t] = !0
            } else if (t !== o) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), An[t] = !0;
            switch (t) {
              case "dangerouslySetInnerHTML":
              case "children":
              case "style":
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "defaultValue":
              case "defaultChecked":
              case "innerHTML":
              case "ref":
              case "innerText":
              case "textContent":
                return !0
            }
            switch (typeof n) {
              case "boolean":
                switch (t) {
                  case "autoFocus":
                  case "checked":
                  case "multiple":
                  case "muted":
                  case "selected":
                  case "contentEditable":
                  case "spellCheck":
                  case "draggable":
                  case "value":
                  case "autoReverse":
                  case "externalResourcesRequired":
                  case "focusable":
                  case "preserveAlpha":
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
                  case "capture":
                  case "download":
                  case "inert":
                    return !0;
                  default:
                    return "data-" === (o = t.toLowerCase().slice(0, 5)) || "aria-" === o || (n ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), An[t] = !0)
                }
              case "function":
              case "symbol":
                return An[t] = !0, !1;
              case "string":
                if ("false" === n || "true" === n) {
                  switch (t) {
                    case "checked":
                    case "selected":
                    case "multiple":
                    case "muted":
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
                    case "inert":
                      break;
                    default:
                      return !0
                  }
                  console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, "false" === n ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), An[t] = !0
                }
            }
            return !0
          }

          function k(e) {
            return e.replace(Hn, function(e, t) {
              return t.toUpperCase()
            })
          }

          function w(e) {
            if ("boolean" == typeof e || "number" == typeof e || "bigint" == typeof e) return "" + e;
            m(e), e = "" + e;
            var t = Pn.exec(e);
            if (t) {
              var n, r = "",
                o = 0;
              for (n = t.index; n < e.length; n++) {
                switch (e.charCodeAt(n)) {
                  case 34:
                    t = "&quot;";
                    break;
                  case 38:
                    t = "&amp;";
                    break;
                  case 39:
                    t = "&#x27;";
                    break;
                  case 60:
                    t = "&lt;";
                    break;
                  case 62:
                    t = "&gt;";
                    break;
                  default:
                    continue
                }
                o !== n && (r += e.slice(o, n)), o = n + 1, r += t
              }
              e = o !== n ? r + e.slice(o, n) : r
            }
            return e
          }

          function x(e) {
            return Wn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
          }

          function C(e) {
            return m(e), ("" + e).replace(tr, r)
          }

          function S(e, t, n) {
            return {
              insertionMode: e,
              selectedValue: t,
              tagScope: n
            }
          }

          function T(e, t, n) {
            switch (t) {
              case "noscript":
                return S(ir, null, 1 | e.tagScope);
              case "select":
                return S(ir, null != n.value ? n.value : n.defaultValue, e.tagScope);
              case "svg":
                return S(ar, null, e.tagScope);
              case "picture":
                return S(ir, null, 2 | e.tagScope);
              case "math":
                return S(sr, null, e.tagScope);
              case "foreignObject":
                return S(ir, null, e.tagScope);
              case "table":
                return S(lr, null, e.tagScope);
              case "thead":
              case "tbody":
              case "tfoot":
                return S(cr, null, e.tagScope);
              case "colgroup":
                return S(fr, null, e.tagScope);
              case "tr":
                return S(ur, null, e.tagScope)
            }
            return e.insertionMode < lr ? e.insertionMode === rr ? S("html" === t ? or : ir, null, e.tagScope) : e.insertionMode === or ? S(ir, null, e.tagScope) : e : S(ir, null, e.tagScope)
          }

          function F(e, t) {
            if ("object" != typeof t) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
            var n, r = !0;
            for (n in t)
              if (pn.call(t, n)) {
                var o = t[n];
                if (null != o && "boolean" != typeof o && "" !== o) {
                  if (0 === n.indexOf("--")) {
                    var i = w(n);
                    p(o, n), o = w(("" + o).trim())
                  } else {
                    var a = o;
                    if ((i = n).indexOf("-") > -1) {
                      var s = i;
                      jn.hasOwnProperty(s) && jn[s] || (jn[s] = !0, console.error("Unsupported style property %s. Did you mean %s?", s, k(s.replace(On, "ms-"))))
                    } else if (In.test(i)) s = i, jn.hasOwnProperty(s) && jn[s] || (jn[s] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
                    else if (Bn.test(a)) {
                      s = i;
                      var l = a;
                      Dn.hasOwnProperty(l) && Dn[l] || (Dn[l] = !0, console.error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', s, l.replace(Bn, "")))
                    }
                    "number" == typeof a && (isNaN(a) ? Nn || (Nn = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", i)) : isFinite(a) || _n || (_n = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", i))), i = n, void 0 !== (a = dr.get(i)) || (a = w(i.replace(Vn, "-$1").toLowerCase().replace(Un, "-ms-")), dr.set(i, a)), i = a, "number" == typeof o ? o = 0 === o || vn.has(n) ? "" + o : o + "px" : (p(o, n), o = w(("" + o).trim()))
                  }
                  r ? (r = !1, e.push(hr, i, pr, o)) : e.push(mr, i, pr, o)
                }
              } r || e.push(vr)
          }

          function A(e, t, n) {
            n && "function" != typeof n && "symbol" != typeof n && e.push(gr, t, br)
          }

          function L(e, t, n) {
            "function" != typeof n && "symbol" != typeof n && "boolean" != typeof n && e.push(gr, t, yr, w(n), vr)
          }

          function R(e, t) {
            this.push('<input type="hidden"'), E(e), L(this, "name", t), L(this, "value", e), this.push(xr)
          }

          function E(e) {
            if ("string" != typeof e) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.")
          }

          function M(e, t) {
            if ("function" == typeof t.$$FORM_ACTION) {
              var n = e.nextFormID++;
              e = e.idPrefix + n;
              try {
                var r = t.$$FORM_ACTION(e);
                if (r) {
                  var o = r.data;
                  o?.forEach(E)
                }
                return r
              } catch (e) {
                if ("object" == typeof e && null !== e && "function" == typeof e.then) throw e;
                console.error("Failed to serialize an action for progressive enhancement:\n%s", e)
              }
            }
            return null
          }

          function I(e, t, n, r, o, i, a, s) {
            var l = null;
            if ("function" == typeof r) {
              null === s || Mr || (Mr = !0, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')), null === o && null === i || Or || (Or = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), null === a || Ir || (Ir = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
              var c = M(t, r);
              null !== c ? (s = c.name, r = c.action || "", o = c.encType, i = c.method, a = c.target, l = c.data) : (e.push(gr, "formAction", yr, kr, vr), a = i = o = r = s = null, j(t, n))
            }
            return null != s && O(e, "name", s), null != r && O(e, "formAction", r), null != o && O(e, "formEncType", o), null != i && O(e, "formMethod", i), null != a && O(e, "formTarget", a), l
          }

          function O(e, t, n) {
            switch (t) {
              case "className":
                L(e, "class", n);
                break;
              case "tabIndex":
                L(e, "tabindex", n);
                break;
              case "dir":
              case "role":
              case "viewBox":
              case "width":
              case "height":
                L(e, t, n);
                break;
              case "style":
                F(e, n);
                break;
              case "src":
              case "href":
                if ("" === n) {
                  console.error("src" === t ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', t, t);
                  break
                }
              case "action":
              case "formAction":
                if (null == n || "function" == typeof n || "symbol" == typeof n || "boolean" == typeof n) break;
                h(n, t), n = x("" + n), e.push(gr, t, yr, w(n), vr);
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
                A(e, t.toLowerCase(), n);
                break;
              case "xlinkHref":
                if ("function" == typeof n || "symbol" == typeof n || "boolean" == typeof n) break;
                h(n, t), n = x("" + n), e.push(gr, "xlink:href", yr, w(n), vr);
                break;
              case "contentEditable":
              case "spellCheck":
              case "draggable":
              case "value":
              case "autoReverse":
              case "externalResourcesRequired":
              case "focusable":
              case "preserveAlpha":
                "function" != typeof n && "symbol" != typeof n && e.push(gr, t, yr, w(n), vr);
                break;
              case "inert":
                "" !== n || nr[t] || (nr[t] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", t));
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
                n && "function" != typeof n && "symbol" != typeof n && e.push(gr, t, br);
                break;
              case "capture":
              case "download":
                !0 === n ? e.push(gr, t, br) : !1 !== n && "function" != typeof n && "symbol" != typeof n && e.push(gr, t, yr, w(n), vr);
                break;
              case "cols":
              case "rows":
              case "size":
              case "span":
                "function" != typeof n && "symbol" != typeof n && !isNaN(n) && n >= 1 && e.push(gr, t, yr, w(n), vr);
                break;
              case "rowSpan":
              case "start":
                "function" == typeof n || "symbol" == typeof n || isNaN(n) || e.push(gr, t, yr, w(n), vr);
                break;
              case "xlinkActuate":
                L(e, "xlink:actuate", n);
                break;
              case "xlinkArcrole":
                L(e, "xlink:arcrole", n);
                break;
              case "xlinkRole":
                L(e, "xlink:role", n);
                break;
              case "xlinkShow":
                L(e, "xlink:show", n);
                break;
              case "xlinkTitle":
                L(e, "xlink:title", n);
                break;
              case "xlinkType":
                L(e, "xlink:type", n);
                break;
              case "xmlBase":
                L(e, "xml:base", n);
                break;
              case "xmlLang":
                L(e, "xml:lang", n);
                break;
              case "xmlSpace":
                L(e, "xml:space", n);
                break;
              default:
                if ((2 >= t.length || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && g(t = bn.get(t) || t)) {
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return;
                    case "boolean":
                      var r = t.toLowerCase().slice(0, 5);
                      if ("data-" !== r && "aria-" !== r) return
                  }
                  e.push(gr, t, yr, w(n), vr)
                }
            }
          }

          function H(e, t, n) {
            if (null != t) {
              if (null != n) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              if ("object" != typeof t || !("P" in t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
              null != (t = t.P) && (m(t), e.push("" + t))
            }
          }

          function B(e, t) {
            var n = e[t];
            null != n && (n = cn(n), e.multiple && !n ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && n && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t))
          }

          function j(e, t) {
            (16 & e.instructions) === qn && (e.instructions |= 16, t.bootstrapChunks.unshift(t.startInlineScript, Hr, "<\/script>"))
          }

          function D(e, t) {
            for (var n in e.push(W("link")), t)
              if (pn.call(t, n)) {
                var r = t[n];
                if (null != r) switch (n) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                  default:
                    O(e, n, r)
                }
              } return e.push(xr), null
          }

          function N(t) {
            return m(t), ("" + t).replace(Br, e)
          }

          function _(e, t, n) {
            for (var r in e.push(W(n)), t)
              if (pn.call(t, r)) {
                var o = t[r];
                if (null != o) switch (r) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                  default:
                    O(e, r, o)
                }
              } return e.push(xr), null
          }

          function P(e, t) {
            e.push(W("title"));
            var n, r = null,
              o = null;
            for (n in t)
              if (pn.call(t, n)) {
                var i = t[n];
                if (null != i) switch (n) {
                  case "children":
                    r = i;
                    break;
                  case "dangerouslySetInnerHTML":
                    o = i;
                    break;
                  default:
                    O(e, n, i)
                }
              } return e.push(wr), "function" != typeof(t = Array.isArray(r) ? 2 > r.length ? r[0] : null : r) && "symbol" != typeof t && null != t && e.push(w("" + t)), H(e, o, r), e.push(z("title")), null
          }

          function V(e, t) {
            e.push(W("script"));
            var n, r = null,
              o = null;
            for (n in t)
              if (pn.call(t, n)) {
                var i = t[n];
                if (null != i) switch (n) {
                  case "children":
                    r = i;
                    break;
                  case "dangerouslySetInnerHTML":
                    o = i;
                    break;
                  default:
                    O(e, n, i)
                }
              } return e.push(wr), null != r && "string" != typeof r && console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", t = "number" == typeof r ? "a number for children" : Array.isArray(r) ? "an array for children" : "something unexpected for children"), H(e, o, r), "string" == typeof r && e.push(C(r)), e.push(z("script")), null
          }

          function U(e, t, n) {
            e.push(W(n));
            var r, o = n = null;
            for (r in t)
              if (pn.call(t, r)) {
                var i = t[r];
                if (null != i) switch (r) {
                  case "children":
                    n = i;
                    break;
                  case "dangerouslySetInnerHTML":
                    o = i;
                    break;
                  default:
                    O(e, r, i)
                }
              } return e.push(wr), H(e, o, n), "string" == typeof n ? (e.push(w(n)), null) : n
          }

          function W(e) {
            var t = Nr.get(e);
            if (void 0 === t) {
              if (!Dr.test(e)) throw Error("Invalid tag: " + e);
              t = "<" + e, Nr.set(e, t)
            }
            return t
          }

          function z(e) {
            var t = _r.get(e);
            return void 0 === t && (t = "</" + e + ">", _r.set(e, t)), t
          }

          function Z(e, t) {
            t = t.bootstrapChunks;
            for (var n = 0; n < t.length - 1; n++) e.push(t[n]);
            return n >= t.length || (n = t[n], t.length = 0, e.push(n))
          }

          function $(e, t, n) {
            if (e.push(Wr), null === n) throw Error("An ID must have been assigned before we can complete the boundary.");
            return e.push(t.boundaryPrefix), t = n.toString(16), e.push(t), e.push(zr)
          }

          function G(e) {
            return JSON.stringify(e).replace(Po, function(e) {
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

          function q(e) {
            return JSON.stringify(e).replace(Vo, function(e) {
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

          function Y(e) {
            var t = e.rules,
              n = e.hrefs;
            t.length > 0 && 0 === n.length && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
            var r = 0;
            if (n.length) {
              for (this.push(Uo), this.push(e.precedence), this.push(Wo); r < n.length - 1; r++) this.push(n[r]), this.push(Xo);
              for (this.push(n[r]), this.push(zo), r = 0; r < t.length; r++) this.push(t[r]);
              Go = this.push(Zo), $o = !0, t.length = 0, n.length = 0
            }
          }

          function K(e) {
            return e.state !== ai && ($o = !0)
          }

          function X(e, t, n) {
            return $o = !1, Go = !0, t.styles.forEach(Y, e), t.stylesheets.forEach(K), $o && (n.stylesToHoist = !0), Go
          }

          function J(e) {
            for (var t = 0; t < e.length; t++) this.push(e[t]);
            e.length = 0
          }

          function Q(e) {
            D(qo, e.props);
            for (var t = 0; t < qo.length; t++) this.push(qo[t]);
            qo.length = 0, e.state = ai
          }

          function ee(e) {
            var t = e.sheets.size > 0;
            e.sheets.forEach(Q, this), e.sheets.clear();
            var n = e.rules,
              r = e.hrefs;
            if (!t || r.length) {
              if (this.push(Yo), this.push(e.precedence), e = 0, r.length) {
                for (this.push(Ko); e < r.length - 1; e++) this.push(r[e]), this.push(Xo);
                this.push(r[e])
              }
              for (this.push(Jo), e = 0; e < n.length; e++) this.push(n[e]);
              this.push(Qo), n.length = 0, r.length = 0
            }
          }

          function te(e) {
            if (e.state === oi) {
              e.state = ii;
              var t = e.props;
              for (D(qo, {
                  rel: "preload",
                  as: "style",
                  href: e.props.href,
                  crossOrigin: t.crossOrigin,
                  fetchPriority: t.fetchPriority,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy
                }), e = 0; e < qo.length; e++) this.push(qo[e]);
              qo.length = 0
            }
          }

          function ne(e) {
            e.sheets.forEach(te, this), e.sheets.clear()
          }

          function re(e, t, n) {
            var r = t.toLowerCase();
            switch (typeof n) {
              case "function":
              case "symbol":
                return
            }
            switch (t) {
              case "innerHTML":
              case "dangerouslySetInnerHTML":
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "style":
              case "ref":
                return;
              case "className":
                h(n, r = "class"), t = "" + n;
                break;
              case "hidden":
                if (!1 === n) return;
                t = "";
                break;
              case "src":
              case "href":
                h(n = x(n), r), t = "" + n;
                break;
              default:
                if (t.length > 2 && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]) || !g(t)) return;
                h(n, r), t = "" + n
            }
            e.push(ni), r = q(r), e.push(r), e.push(ni), r = q(t), e.push(r)
          }

          function oe() {
            return {
              styles: new Set,
              stylesheets: new Set
            }
          }

          function ie(e, t, n, r) {
            (e.scriptResources.hasOwnProperty(n) || e.moduleScriptResources.hasOwnProperty(n)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', n), e.scriptResources[n] = Qn, e.moduleScriptResources[n] = Qn, D(e = [], r), t.bootstrapScripts.add(e)
          }

          function ae(e, t) {
            null == e.crossOrigin && (e.crossOrigin = t[0]), null == e.integrity && (e.integrity = t[1])
          }

          function se(e, t, n) {
            for (var r in t = "<" + (e = le(e)) + '>; rel=preload; as="' + (t = ue(t, "as")) + '"', n) pn.call(n, r) && "string" == typeof(e = n[r]) && (t += "; " + r.toLowerCase() + '="' + ue(e, r) + '"');
            return t
          }

          function le(e) {
            return h(e, "href"), ("" + e).replace(li, ce)
          }

          function ce(e) {
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

          function ue(e, t) {
            return f(e) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", t, u(e)), d(e)), ("" + e).replace(ci, fe)
          }

          function fe(e) {
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

          function de(e) {
            this.styles.add(e)
          }

          function he(e) {
            this.stylesheets.add(e)
          }

          function pe(e, t, n, r) {
            return n.generateStaticMarkup ? (e.push(w(t)), !1) : ("" === t ? e = r : (r && e.push("\x3c!-- --\x3e"), e.push(w(t)), e = !0), e)
          }

          function me(e, t, n, r) {
            t.generateStaticMarkup || n && r && e.push("\x3c!-- --\x3e")
          }

          function ge(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.$$typeof === di ? null : e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
              case Zt:
                return "Fragment";
              case zt:
                return "Portal";
              case Gt:
                return "Profiler";
              case $t:
                return "StrictMode";
              case Jt:
                return "Suspense";
              case Qt:
                return "SuspenseList"
            }
            if ("object" == typeof e) switch ("number" == typeof e.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
              case Kt:
                return (e.displayName || "Context") + ".Provider";
              case Yt:
                return (e.l.displayName || "Context") + ".Consumer";
              case Xt:
                var t = e.render;
                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case en:
                return null !== (t = e.displayName || null) ? t : ge(e.type) || "Memo";
              case tn:
                t = e.u, e = e.h;
                try {
                  return ge(e(t))
                } catch {}
            }
            return null
          }

          function ye(e, t) {
            if (e !== t) {
              e.context.V = e.parentValue, e = e.parent;
              var n = t.parent;
              if (null === e) {
                if (null !== n) throw Error("The stacks must reach the root at the same time. This is a bug in React.")
              } else {
                if (null === n) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                ye(e, n)
              }
              t.context.V = t.value
            }
          }

          function ve(e) {
            e.context.V = e.parentValue, null !== (e = e.parent) && ve(e)
          }

          function be(e) {
            var t = e.parent;
            null !== t && be(t), e.context.V = e.value
          }

          function ke(e, t) {
            if (e.context.V = e.parentValue, null === (e = e.parent)) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
            e.depth === t.depth ? ye(e, t) : ke(e, t)
          }

          function we(e, t) {
            var n = t.parent;
            if (null === n) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
            e.depth === n.depth ? ye(e, n) : we(e, n), t.context.V = t.value
          }

          function xe(e) {
            var t = gi;
            t !== e && (null === t ? be(e) : null === e ? ve(t) : t.depth === e.depth ? ye(t, e) : t.depth > e.depth ? ke(t, e) : we(t, e), gi = e)
          }

          function Ce(e) {
            if (null !== e && "function" != typeof e) {
              var t = e + "";
              Ai.has(t) || (Ai.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e))
            }
          }

          function Se(e, t) {
            var n = (e = (e = e.constructor) && ge(e) || "ReactClass") + "." + t;
            yi[n] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", t, e), yi[n] = !0)
          }

          function Te(e, t, n) {
            var r = e.id;
            e = e.overflow;
            var o = 32 - Ei(r) - 1;
            r &= ~(1 << o), n += 1;
            var i = 32 - Ei(t) + o;
            if (i > 30) {
              var a = o - o % 5;
              return i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, {
                id: 1 << 32 - Ei(t) + o | n << o | r,
                overflow: i + e
              }
            }
            return {
              id: 1 << i | n << o | r,
              overflow: e
            }
          }

          function Fe() {}

          function Ae() {
            if (null === Hi) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
            var e = Hi;
            return Hi = null, e
          }

          function Le() {
            if (null === ji) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
            return Xi && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"), ji
          }

          function Re() {
            if (Ki > 0) throw Error("Rendered more hooks than during the previous render");
            return {
              memoizedState: null,
              queue: null,
              next: null
            }
          }

          function Ee() {
            return null === Vi ? null === Pi ? (Ui = !1, Pi = Vi = Re()) : (Ui = !0, Vi = Pi) : null === Vi.next ? (Ui = !1, Vi = Vi.next = Re()) : (Ui = !0, Vi = Vi.next), Vi
          }

          function Me() {
            var e = qi;
            return qi = null, e
          }

          function Ie() {
            Xi = !1, _i = Ni = Di = ji = null, Wi = !1, Pi = null, Ki = 0, Vi = Yi = null
          }

          function Oe(e) {
            return Xi && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e.V
          }

          function He(e, t) {
            return "function" == typeof t ? t(e) : t
          }

          function Be(e, t, n) {
            if (e !== He && (pi = "useReducer"), ji = Le(), Vi = Ee(), Ui) {
              if (t = (n = Vi.queue).dispatch, null !== Yi) {
                var r = Yi.get(n);
                if (void 0 !== r) {
                  Yi.delete(n), n = Vi.memoizedState;
                  do {
                    var o = r.action;
                    Xi = !0, n = e(n, o), Xi = !1, r = r.next
                  } while (null !== r);
                  return Vi.memoizedState = n, [n, t]
                }
              }
              return [Vi.memoizedState, t]
            }
            return Xi = !0, e = e === He ? "function" == typeof t ? t() : t : void 0 !== n ? n(t) : t, Xi = !1, Vi.memoizedState = e, e = (e = Vi.queue = {
              last: null,
              dispatch: null
            }).dispatch = De.bind(null, ji, e), [Vi.memoizedState, e]
          }

          function je(e, t) {
            if (ji = Le(), t = void 0 === t ? null : t, null !== (Vi = Ee())) {
              var n = Vi.memoizedState;
              if (null !== n && null !== t) {
                e: {
                  var r = n[1];
                  if (null === r) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", pi),
                  r = !1;
                  else {
                    t.length !== r.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", pi, "[" + t.join(", ") + "]", "[" + r.join(", ") + "]");
                    for (var o = 0; o < r.length && o < t.length; o++)
                      if (!Bi(t[o], r[o])) {
                        r = !1;
                        break e
                      } r = !0
                  }
                }
                if (r) return n[0]
              }
            }
            return Xi = !0, e = e(), Xi = !1, Vi.memoizedState = [e, t], e
          }

          function De(e, t, n) {
            if (Ki >= 25) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            if (e === ji)
              if (Wi = !0, e = {
                  action: n,
                  next: null
                }, null === Yi && (Yi = new Map), void 0 === (n = Yi.get(t))) Yi.set(t, e);
              else {
                for (t = n; null !== t.next;) t = t.next;
                t.next = e
              }
          }

          function Ne() {
            throw Error("startTransition cannot be called during server rendering.")
          }

          function _e() {
            throw Error("Cannot update optimistic state while rendering.")
          }

          function Pe(e, t, n) {
            Le();
            var r = Zi++,
              o = Ni;
            if ("function" == typeof e.$$FORM_ACTION) {
              var i = null,
                a = _i;
              o = o.formState;
              var s = e.$$IS_SIGNATURE_EQUAL;
              if (null !== o && "function" == typeof s) {
                var l = o[1];
                s.call(e, o[2], o[3]) && l === (i = void 0 !== n ? "p" + n : "k" + c(JSON.stringify([a, null, r]), 0)) && ($i = r, t = o[0])
              }
              var u = e.bind(null, t);
              return e = function(e) {
                u(e)
              }, "function" == typeof u.$$FORM_ACTION && (e.$$FORM_ACTION = function(e) {
                e = u.$$FORM_ACTION(e), void 0 !== n && (h(n, "target"), n += "", e.action = n);
                var t = e.data;
                return t && (null === i && (i = void 0 !== n ? "p" + n : "k" + c(JSON.stringify([a, null, r]), 0)), t.append("$ACTION_KEY", i)), e
              }), [t, e, !1]
            }
            var f = e.bind(null, t);
            return [t, function(e) {
              f(e)
            }, !1]
          }

          function Ve(e) {
            var t = Gi;
            return Gi += 1, null === qi && (qi = []),
              function(e, t, n) {
                switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Fe, Fe), t = n), t.status) {
                  case "fulfilled":
                    return t.value;
                  case "rejected":
                    throw t.reason;
                  default:
                    switch ("string" == typeof t.status ? t.then(Fe, Fe) : ((e = t).status = "pending", e.then(function(e) {
                        if ("pending" === t.status) {
                          var n = t;
                          n.status = "fulfilled", n.value = e
                        }
                      }, function(e) {
                        if ("pending" === t.status) {
                          var n = t;
                          n.status = "rejected", n.reason = e
                        }
                      })), t.status) {
                      case "fulfilled":
                        return t.value;
                      case "rejected":
                        throw t.reason
                    }
                    throw Hi = t, Oi
                }
              }(qi, e, t)
          }

          function Ue() {
            throw Error("Cache cannot be refreshed during server rendering.")
          }

          function We() {}

          function ze() {}

          function Ze(e) {
            if (void 0 === ua) try {
              throw Error()
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              ua = t && t[1] || "", fa = e.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : e.stack.indexOf("@") > -1 ? "@unknown:0:0" : ""
            }
            return "\n" + ua + e + fa
          }

          function $e(e, t) {
            if (!e || da) return "";
            var n, r = ha.get(e);
            if (void 0 !== r) return r;
            da = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0, n = zn.H, zn.H = null,
              function() {
                if (0 === ca) {
                  Qi = console.log, ea = console.info, ta = console.warn, na = console.error, ra = console.group, oa = console.groupCollapsed, ia = console.groupEnd;
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: ze,
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
                ca++
              }();
            try {
              var o = {
                DetermineComponentFrameRoot: function() {
                  try {
                    if (t) {
                      var n = function() {
                        throw Error()
                      };
                      if (Object.defineProperty(n.prototype, "props", {
                          set: function() {
                            throw Error()
                          }
                        }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                          Reflect.construct(n, [])
                        } catch (e) {
                          var r = e
                        }
                        Reflect.construct(e, [], n)
                      } else {
                        try {
                          n.call()
                        } catch (e) {
                          r = e
                        }
                        e.call(n.prototype)
                      }
                    } else {
                      try {
                        throw Error()
                      } catch (e) {
                        r = e
                      }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                    }
                  } catch (e) {
                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                  }
                  return [null, null]
                }
              };
              o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
              var i = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
              i && i.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
              });
              var a = o.DetermineComponentFrameRoot(),
                s = a[0],
                l = a[1];
              if (s && l) {
                var c = s.split("\n"),
                  u = l.split("\n");
                for (a = i = 0; i < c.length && !c[i].includes("DetermineComponentFrameRoot");) i++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (i === c.length || a === u.length)
                  for (i = c.length - 1, a = u.length - 1; i >= 1 && a >= 0 && c[i] !== u[a];) a--;
                for (; i >= 1 && a >= 0; i--, a--)
                  if (c[i] !== u[a]) {
                    if (1 !== i || 1 !== a)
                      do {
                        if (i--, 0 > --a || c[i] !== u[a]) {
                          var f = "\n" + c[i].replace(" at new ", " at ");
                          return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), "function" == typeof e && ha.set(e, f), f
                        }
                      } while (i >= 1 && a >= 0);
                    break
                  }
              }
            } finally {
              da = !1, zn.H = n,
                function() {
                  if (0 === --ca) {
                    var e = {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0
                    };
                    Object.defineProperties(console, {
                      log: hn({}, e, {
                        value: Qi
                      }),
                      info: hn({}, e, {
                        value: ea
                      }),
                      warn: hn({}, e, {
                        value: ta
                      }),
                      error: hn({}, e, {
                        value: na
                      }),
                      group: hn({}, e, {
                        value: ra
                      }),
                      groupCollapsed: hn({}, e, {
                        value: oa
                      }),
                      groupEnd: hn({}, e, {
                        value: ia
                      })
                    })
                  }
                  0 > ca && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
                }(), Error.prepareStackTrace = r
            }
            return c = (c = e ? e.displayName || e.name : "") ? Ze(c) : "", "function" == typeof e && ha.set(e, c), c
          }

          function Ge(e) {
            if ("string" == typeof e) return Ze(e);
            if ("function" == typeof e) return e.prototype && e.prototype.isReactComponent ? e = $e(e, !0) : $e(e, !1);
            if ("object" == typeof e && null !== e) {
              switch (e.$$typeof) {
                case Xt:
                  return $e(e.render, !1);
                case en:
                  return $e(e.type, !1);
                case tn:
                  var t = e,
                    n = t.u;
                  t = t.h;
                  try {
                    e = t(n)
                  } catch {
                    return Ze("Lazy")
                  }
                  return Ge(e)
              }
              if ("string" == typeof e.name) return n = e.env, Ze(e.name + (n ? " [" + n + "]" : ""))
            }
            switch (e) {
              case Qt:
                return Ze("SuspenseList");
              case Jt:
                return Ze("Suspense")
            }
            return ""
          }

          function qe(e) {
            try {
              var t = "";
              do {
                t += Ge(e.type), e = e.parent
              } while (e);
              return t
            } catch (e) {
              return "\nError generating stack: " + e.message + "\n" + e.stack
            }
          }

          function Ye(e) {
            if ("object" == typeof e && null !== e && "string" == typeof e.environmentName) {
              var t = e.environmentName;
              "string" == typeof(e = [e].slice(0))[0] ? e.splice(0, 1, "[%s] " + e[0], " " + t + " "): e.splice(0, 0, "[%s] ", " " + t + " "), e.unshift(console), (t = fi.apply(console.error, e))()
            } else console.error(e);
            return null
          }

          function Ke() {}

          function Xe(e, t, n, r, o, i, a, s, l, c, u) {
            var f = new Set;
            this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = void 0 === r ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedRootSegment = null, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === o ? Ye : o, this.onPostpone = void 0 === c ? Ke : c, this.onAllReady = void 0 === i ? Ke : i, this.onShellReady = void 0 === a ? Ke : a, this.onShellError = void 0 === s ? Ke : s, this.onFatalError = void 0 === l ? Ke : l, this.formState = void 0 === u ? null : u, this.didWarnForKey = null
          }

          function Je(e, t) {
            e.pingedTasks.push(t), 1 === e.pingedTasks.length && (e.flushScheduled = null !== e.destination, Et(e))
          }

          function Qe(e, t) {
            return {
              status: wa,
              rootSegmentID: -1,
              parentFlushed: !1,
              pendingTasks: 0,
              completedSegments: [],
              byteSize: 0,
              fallbackAbortableTasks: t,
              errorDigest: null,
              contentState: oe(),
              fallbackState: oe(),
              trackedContentKeyPath: null,
              trackedFallbackNode: null,
              errorMessage: null,
              errorStack: null,
              errorComponentStack: null
            }
          }

          function et(e, t, n, r, o, i, a, s, l, c, u, f, d, h) {
            e.allPendingTasks++, null === o ? e.pendingRootTasks++ : o.pendingTasks++;
            var p = {
              replay: null,
              node: n,
              childIndex: r,
              ping: function() {
                return Je(e, p)
              },
              blockedBoundary: o,
              blockedSegment: i,
              hoistableState: a,
              abortSet: s,
              keyPath: l,
              formatContext: c,
              context: u,
              treeContext: f,
              componentStack: d,
              thenableState: t,
              isFallback: h
            };
            return s.add(p), p
          }

          function tt(e, t, n, r, o, i, a, s, l, c, u, f, d, h) {
            e.allPendingTasks++, null === i ? e.pendingRootTasks++ : i.pendingTasks++, n.pendingTasks++;
            var p = {
              replay: n,
              node: r,
              childIndex: o,
              ping: function() {
                return Je(e, p)
              },
              blockedBoundary: i,
              blockedSegment: null,
              hoistableState: a,
              abortSet: s,
              keyPath: l,
              formatContext: c,
              context: u,
              treeContext: f,
              componentStack: d,
              thenableState: t,
              isFallback: h
            };
            return s.add(p), p
          }

          function nt(e, t, n, r, o, i) {
            return {
              status: wa,
              id: -1,
              index: t,
              parentFlushed: !1,
              chunks: [],
              children: [],
              parentFormatContext: r,
              boundary: n,
              lastPushedText: o,
              textEmbedded: i
            }
          }

          function rt() {
            return null === sa || null === sa.componentStack ? "" : qe(sa.componentStack)
          }

          function ot(e, t) {
            if (null != t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                "string" == typeof r.name && (e.componentStack = {
                  parent: e.componentStack,
                  type: r,
                  owner: r.owner,
                  stack: null
                })
              }
          }

          function it(e) {
            var t = e.node;
            if ("object" == typeof t && null !== t) switch (t.$$typeof) {
              case Wt:
                var n = t.type,
                  r = t.v;
                ot(e, t.R), e.componentStack = {
                  parent: e.componentStack,
                  type: n,
                  owner: r,
                  stack: null
                };
                break;
              case tn:
                ot(e, t.R);
                break;
              default:
                "function" == typeof t.then && ot(e, t.R)
            }
          }

          function at(e) {
            var t = {};
            return e && Object.defineProperty(t, "componentStack", {
              configurable: !0,
              enumerable: !0,
              get: function() {
                var n = qe(e);
                return Object.defineProperty(t, "componentStack", {
                  value: n
                }), n
              }
            }), t
          }

          function st(e, t, n, r, o) {
            e.errorDigest = t, n instanceof Error ? (t = n.message + "", n = n.stack + "") : (t = "object" == typeof n && null !== n ? l(n) : n + "", n = null), o = o ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n", e.errorMessage = o + t, e.errorStack = null !== n ? o + n : null, e.errorComponentStack = r.componentStack
          }

          function lt(e, t, n) {
            if (null == (t = (e = e.onError)(t, n)) || "string" == typeof t) return t;
            console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof t)
          }

          function ct(e, t) {
            var n = e.onShellError,
              r = e.onFatalError;
            n(t), r(t), null !== e.destination ? (e.status = Ta, e.destination.destroy(t)) : (e.status = 13, e.fatalError = t)
          }

          function ut(e, t, n, r, o, i) {
            var a = t.thenableState;
            for (t.thenableState = null, ji = {}, Di = t, Ni = e, _i = n, Xi = !1, Zi = zi = 0, $i = -1, Gi = 0, qi = a, e = ma(r, o, i); Wi;) Wi = !1, Zi = zi = 0, $i = -1, Gi = 0, Ki += 1, Vi = null, e = r(o, i);
            return Ie(), e
          }

          function ft(e, t, n, r, o, i, a) {
            var s = !1;
            if (0 !== i && null !== e.formState) {
              var l = t.blockedSegment;
              if (null !== l) {
                s = !0, l = l.chunks;
                for (var c = 0; i > c; c++) c === a ? l.push("\x3c!--F!--\x3e") : l.push("\x3c!--F--\x3e")
              }
            }
            i = t.keyPath, t.keyPath = n, o ? (n = t.treeContext, t.treeContext = Te(n, 1, 0), kt(e, t, r, -1), t.treeContext = n) : s ? kt(e, t, r, -1) : pt(e, t, r, -1), t.keyPath = i
          }

          function dt(e, t, n, r, o, i) {
            if ("function" == typeof r)
              if (r.prototype && r.prototype.isReactComponent) {
                var a = o;
                if ("ref" in o)
                  for (var s in a = {}, o) "ref" !== s && (a[s] = o[s]);
                var l = r.defaultProps;
                if (l)
                  for (var c in a === o && (a = hn({}, a, o)), l) void 0 === a[c] && (a[c] = l[c]);
                var u = a,
                  f = hi,
                  d = r.contextType;
                if ("contextType" in r && null !== d && (void 0 === d || d.$$typeof !== Kt) && !Fi.has(r)) {
                  Fi.add(r);
                  var p = void 0 === d ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" != typeof d ? " However, it is set to a " + typeof d + "." : d.$$typeof === Yt ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.";
                  console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ge(r) || "Component", p)
                }
                "object" == typeof d && null !== d && (f = d.V);
                var k = new r(u, f);
                if ("function" == typeof r.getDerivedStateFromProps && (null === k.state || void 0 === k.state)) {
                  var C = ge(r) || "Component";
                  bi.has(C) || (bi.add(C), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", C, null === k.state ? "null" : "undefined", C))
                }
                if ("function" == typeof r.getDerivedStateFromProps || "function" == typeof k.getSnapshotBeforeUpdate) {
                  var S = null,
                    E = null,
                    Z = null;
                  if ("function" == typeof k.componentWillMount && !0 !== k.componentWillMount.U ? S = "componentWillMount" : "function" == typeof k.UNSAFE_componentWillMount && (S = "UNSAFE_componentWillMount"), "function" == typeof k.componentWillReceiveProps && !0 !== k.componentWillReceiveProps.U ? E = "componentWillReceiveProps" : "function" == typeof k.UNSAFE_componentWillReceiveProps && (E = "UNSAFE_componentWillReceiveProps"), "function" == typeof k.componentWillUpdate && !0 !== k.componentWillUpdate.U ? Z = "componentWillUpdate" : "function" == typeof k.UNSAFE_componentWillUpdate && (Z = "UNSAFE_componentWillUpdate"), null !== S || null !== E || null !== Z) {
                    var $ = ge(r) || "Component",
                      G = "function" == typeof r.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    wi.has($) || (wi.add($), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", $, G, null !== S ? "\n  " + S : "", null !== E ? "\n  " + E : "", null !== Z ? "\n  " + Z : ""))
                  }
                }
                var q = ge(r) || "Component";
                k.render || (r.prototype && "function" == typeof r.prototype.render ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", q) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", q)), !k.getInitialState || k.getInitialState.isReactClassApproved || k.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", q), k.getDefaultProps && !k.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", q), k.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", q), r.childContextTypes && !Ti.has(r) && (Ti.add(r), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", q)), r.contextTypes && !Si.has(r) && (Si.add(r), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", q)), "function" == typeof k.componentShouldUpdate && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", q), r.prototype && r.prototype.isPureReactComponent && "u" > typeof k.shouldComponentUpdate && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ge(r) || "A pure component"), "function" == typeof k.componentDidUnmount && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", q), "function" == typeof k.componentDidReceiveProps && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", q), "function" == typeof k.componentWillRecieveProps && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", q), "function" == typeof k.UNSAFE_componentWillRecieveProps && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", q);
                var Y = k.props !== u;
                void 0 !== k.props && Y && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", q), k.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", q, q), "function" != typeof k.getSnapshotBeforeUpdate || "function" == typeof k.componentDidUpdate || ki.has(r) || (ki.add(r), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ge(r))), "function" == typeof k.getDerivedStateFromProps && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", q), "function" == typeof k.getDerivedStateFromError && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", q), "function" == typeof r.getSnapshotBeforeUpdate && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", q);
                var K = k.state;
                K && ("object" != typeof K || cn(K)) && console.error("%s.state: must be set to an object or null", q), "function" == typeof k.getChildContext && "object" != typeof r.childContextTypes && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", q);
                var X = void 0 !== k.state ? k.state : null;
                k.updater = Li, k.props = u, k.state = X;
                var J = {
                  queue: [],
                  replace: !1
                };
                k.W = J;
                var Q = r.contextType;
                if (k.context = "object" == typeof Q && null !== Q ? Q.V : hi, k.state === u) {
                  var ee = ge(r) || "Component";
                  xi.has(ee) || (xi.add(ee), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", ee))
                }
                var te = r.getDerivedStateFromProps;
                if ("function" == typeof te) {
                  var ne = te(u, X);
                  if (void 0 === ne) {
                    var re = ge(r) || "Component";
                    Ci.has(re) || (Ci.add(re), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", re))
                  }
                  var oe = null == ne ? X : hn({}, X, ne);
                  k.state = oe
                }
                if ("function" != typeof r.getDerivedStateFromProps && "function" != typeof k.getSnapshotBeforeUpdate && ("function" == typeof k.UNSAFE_componentWillMount || "function" == typeof k.componentWillMount)) {
                  var ie = k.state;
                  if ("function" == typeof k.componentWillMount) {
                    if (!0 !== k.componentWillMount.U) {
                      var le = ge(r) || "Unknown";
                      vi[le] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", le), vi[le] = !0)
                    }
                    k.componentWillMount()
                  }
                  if ("function" == typeof k.UNSAFE_componentWillMount && k.UNSAFE_componentWillMount(), ie !== k.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ge(r) || "Component"), Li.enqueueReplaceState(k, k.state, null)), null !== J.queue && J.queue.length > 0) {
                    var ce = J.queue,
                      ue = J.replace;
                    if (J.queue = null, J.replace = !1, ue && 1 === ce.length) k.state = ce[0];
                    else {
                      for (var fe = ue ? ce[0] : k.state, de = !0, he = ue ? 1 : 0; he < ce.length; he++) {
                        var pe = ce[he],
                          ye = "function" == typeof pe ? pe.call(k, fe, u, void 0) : pe;
                        null != ye && (de ? (de = !1, fe = hn({}, fe, ye)) : hn(fe, ye))
                      }
                      k.state = fe
                    }
                  } else J.queue = null
                }
                var ve = ya(k);
                if (12 === e.status) throw null;
                k.props !== u && (Ma || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ge(r) || "a component"), Ma = !0);
                var be = t.keyPath;
                t.keyPath = n, pt(e, t, ve, -1), t.keyPath = be
              } else {
                if (r.prototype && "function" == typeof r.prototype.render) {
                  var ke = ge(r) || "Unknown";
                  Aa[ke] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ke, ke), Aa[ke] = !0)
                }
                var we = ut(e, t, n, r, o, void 0);
                if (12 === e.status) throw null;
                var xe = 0 !== zi,
                  Ce = Zi,
                  Se = $i;
                if (r.contextTypes) {
                  var Te = ge(r) || "Unknown";
                  La[Te] || (La[Te] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", Te))
                }
                if (r && r.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", r.displayName || r.name || "Component"), "function" == typeof r.getDerivedStateFromProps) {
                  var Fe = ge(r) || "Unknown";
                  Ea[Fe] || (console.error("%s: Function components do not support getDerivedStateFromProps.", Fe), Ea[Fe] = !0)
                }
                if ("object" == typeof r.contextType && null !== r.contextType) {
                  var Ae = ge(r) || "Unknown";
                  Ra[Ae] || (console.error("%s: Function components do not support contextType.", Ae), Ra[Ae] = !0)
                }
                ft(e, t, n, we, xe, Ce, Se)
              }
            else {
              if ("string" != typeof r) {
                switch (r) {
                  case an:
                  case rn:
                  case $t:
                  case Gt:
                  case Zt:
                    var Le = t.keyPath;
                    return t.keyPath = n, pt(e, t, o.children, -1), void(t.keyPath = Le);
                  case on:
                    if ("hidden" !== o.mode) {
                      var Re = t.keyPath;
                      t.keyPath = n, pt(e, t, o.children, -1), t.keyPath = Re
                    }
                    return;
                  case Qt:
                    var Ee = t.keyPath;
                    return t.keyPath = n, pt(e, t, o.children, -1), void(t.keyPath = Ee);
                  case nn:
                    throw Error("ReactDOMServer does not yet support scope components.");
                  case Jt:
                    e: if (null !== t.replay) {
                      var Me = t.keyPath;
                      t.keyPath = n;
                      var Ie = o.children;
                      try {
                        kt(e, t, Ie, -1)
                      } finally {
                        t.keyPath = Me
                      }
                    } else {
                      var Oe = t.keyPath,
                        He = t.blockedBoundary,
                        Be = t.hoistableState,
                        je = t.blockedSegment,
                        De = o.fallback,
                        Ne = o.children,
                        _e = new Set,
                        Pe = Qe(0, _e);
                      null !== e.trackedPostpones && (Pe.trackedContentKeyPath = n);
                      var Ve = nt(0, je.chunks.length, Pe, t.formatContext, !1, !1);
                      je.children.push(Ve), je.lastPushedText = !1;
                      var Ue = nt(0, 0, null, t.formatContext, !1, !1);
                      if (Ue.parentFlushed = !0, null !== e.trackedPostpones) {
                        var We = [n[0], "Suspense Fallback", n[2]],
                          ze = [We[1], We[2],
                            [], null
                          ];
                        e.trackedPostpones.workingMap.set(We, ze), Pe.trackedFallbackNode = ze, t.blockedSegment = Ve, t.keyPath = We, Ve.status = 6;
                        try {
                          kt(e, t, De, -1), me(Ve.chunks, e.renderState, Ve.lastPushedText, Ve.textEmbedded), Ve.status = xa
                        } catch (t) {
                          throw Ve.status = 12 === e.status ? 3 : 4, t
                        } finally {
                          t.blockedSegment = je, t.keyPath = Oe
                        }
                        var Ze = et(e, null, Ne, -1, Pe, Ue, Pe.contentState, t.abortSet, n, t.formatContext, t.context, t.treeContext, t.componentStack, t.isFallback);
                        it(Ze), e.pingedTasks.push(Ze)
                      } else {
                        t.blockedBoundary = Pe, t.hoistableState = Pe.contentState, t.blockedSegment = Ue, t.keyPath = n, Ue.status = 6;
                        try {
                          if (kt(e, t, Ne, -1), me(Ue.chunks, e.renderState, Ue.lastPushedText, Ue.textEmbedded), Ue.status = xa, Lt(Pe, Ue), 0 === Pe.pendingTasks && Pe.status === wa) {
                            Pe.status = xa;
                            break e
                          }
                        } catch (n) {
                          if (Pe.status = ka, 12 === e.status) {
                            Ue.status = 3;
                            var $e = e.fatalError
                          } else Ue.status = 4, $e = n;
                          var Ge = at(t.componentStack);
                          st(Pe, lt(e, $e, Ge), $e, Ge, !1), yt(e, Pe)
                        } finally {
                          t.blockedBoundary = He, t.hoistableState = Be, t.blockedSegment = je, t.keyPath = Oe
                        }
                        var qe = et(e, null, De, -1, He, Ve, Pe.fallbackState, _e, [n[0], "Suspense Fallback", n[2]], t.formatContext, t.context, t.treeContext, t.componentStack, !0);
                        it(qe), e.pingedTasks.push(qe)
                      }
                    }
                    return
                }
                if ("object" == typeof r && null !== r) switch (r.$$typeof) {
                  case Xt:
                    if ("ref" in o) {
                      var Ye = {};
                      for (var Ke in o) "ref" !== Ke && (Ye[Ke] = o[Ke])
                    } else Ye = o;
                    return void ft(e, t, n, ut(e, t, n, r.render, Ye, i), 0 !== zi, Zi, $i);
                  case en:
                    return void dt(e, t, n, r.type, o, i);
                  case qt:
                  case Kt:
                    var Xe = o.value,
                      Je = o.children,
                      tt = t.context,
                      rt = t.keyPath,
                      ot = r.V;
                    r.V = Xe, void 0 !== r.Z && null !== r.Z && r.Z !== mi && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r.Z = mi;
                    var ct = {
                      parent: gi,
                      depth: null === gi ? 0 : gi.depth + 1,
                      context: r,
                      parentValue: ot,
                      value: Xe
                    };
                    gi = ct, t.context = ct, t.keyPath = n, pt(e, t, Je, -1);
                    var ht = gi;
                    if (null === ht) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                    ht.context !== r && console.error("The parent context is not the expected context. This is probably a bug in React."), ht.context.V = ht.parentValue, void 0 !== r.Z && null !== r.Z && r.Z !== mi && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r.Z = mi;
                    var mt = gi = ht.parent;
                    return t.context = mt, t.keyPath = rt, void(tt !== t.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React."));
                  case Yt:
                    var gt = r.l,
                      vt = o.children;
                    "function" != typeof vt && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
                    var bt = vt(gt.V),
                      wt = t.keyPath;
                    return t.keyPath = n, pt(e, t, bt, -1), void(t.keyPath = wt);
                  case tn:
                    var xt = ba(r);
                    if (12 === e.status) throw null;
                    return void dt(e, t, n, xt, o, i)
                }
                var Ct = "";
                throw (void 0 === r || "object" == typeof r && null !== r && 0 === Object.keys(r).length) && (Ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (null == r ? r : typeof r) + "." + Ct)
              }
              var St = t.blockedSegment;
              if (null === St) {
                var Tt = o.children,
                  Ft = t.formatContext,
                  At = t.keyPath;
                t.formatContext = T(Ft, r, o), t.keyPath = n, kt(e, t, Tt, -1), t.formatContext = Ft, t.keyPath = At
              } else {
                var Rt = function(e, t, n, r, o, i, a, s, l) {
                  (function(e, t) {
                    var n, r = [];
                    for (n in t) v(e, n) || r.push(n);
                    t = r.map(function(e) {
                      return "`" + e + "`"
                    }).join(", "), 1 === r.length ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : r.length > 1 && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e)
                  })(t, n), "input" !== t && "textarea" !== t && "select" !== t || null == n || null !== n.value || Tn || (Tn = !0, "select" === t && n.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
                  e: if (-1 === t.indexOf("-")) var c = !1;
                    else switch (t) {
                      case "annotation-xml":
                      case "color-profile":
                      case "font-face":
                      case "font-face-src":
                      case "font-face-uri":
                      case "font-face-format":
                      case "font-face-name":
                      case "missing-glyph":
                        c = !1;
                        break e;
                      default:
                        c = !0
                    }
                  switch (c || "string" == typeof n.is || function(e, t) {
                      var n, r = [];
                      for (n in t) b(e, n, t[n], null) || r.push(n);
                      t = r.map(function(e) {
                        return "`" + e + "`"
                      }).join(", "), 1 === r.length ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : r.length > 1 && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e)
                    }(t, n), !n.suppressContentEditableWarning && n.contentEditable && null != n.children && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), a.insertionMode !== ar && a.insertionMode !== sr && -1 === t.indexOf("-") && t.toLowerCase() !== t && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
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
                      e.push(W("a"));
                      var u, f = null,
                        d = null;
                      for (u in n)
                        if (pn.call(n, u)) {
                          var p = n[u];
                          if (null != p) switch (u) {
                            case "children":
                              f = p;
                              break;
                            case "dangerouslySetInnerHTML":
                              d = p;
                              break;
                            case "href":
                              "" === p ? L(e, "href", "") : O(e, u, p);
                              break;
                            default:
                              O(e, u, p)
                          }
                        } if (e.push(wr), H(e, d, f), "string" == typeof f) {
                        e.push(w(f));
                        var k = null
                      } else k = f;
                      return k;
                    case "select":
                      y("select", n), B(n, "value"), B(n, "defaultValue"), void 0 === n.value || void 0 === n.defaultValue || Tr || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), Tr = !0), e.push(W("select"));
                      var C, S = null,
                        T = null;
                      for (C in n)
                        if (pn.call(n, C)) {
                          var E = n[C];
                          if (null != E) switch (C) {
                            case "children":
                              S = E;
                              break;
                            case "dangerouslySetInnerHTML":
                              T = E;
                              break;
                            case "defaultValue":
                            case "value":
                              break;
                            default:
                              O(e, C, E)
                          }
                        } return e.push(wr), H(e, T, S), S;
                    case "option":
                      var Z = a.selectedValue;
                      e.push(W("option"));
                      var $, G = null,
                        q = null,
                        Y = null,
                        K = null;
                      for ($ in n)
                        if (pn.call(n, $)) {
                          var X = n[$];
                          if (null != X) switch ($) {
                            case "children":
                              G = X;
                              break;
                            case "selected":
                              Y = X, Rr || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Rr = !0);
                              break;
                            case "dangerouslySetInnerHTML":
                              K = X;
                              break;
                            case "value":
                              q = X;
                            default:
                              O(e, $, X)
                          }
                        } if (null != Z) {
                        if (null !== q) {
                          h(q, "value");
                          var J = "" + q
                        } else null === K || Lr || (Lr = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), J = function(e) {
                          var t = "";
                          return Vt.Children.forEach(e, function(e) {
                            null != e && (t += e, Ar || "string" == typeof e || "number" == typeof e || "bigint" == typeof e || (Ar = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))
                          }), t
                        }(G);
                        if (cn(Z)) {
                          for (var Q = 0; Q < Z.length; Q++)
                            if (h(Z[Q], "value"), "" + Z[Q] === J) {
                              e.push(' selected=""');
                              break
                            }
                        } else h(Z, "select.value"), "" + Z === J && e.push(' selected=""')
                      } else Y && e.push(' selected=""');
                      return e.push(wr), H(e, K, G), G;
                    case "textarea":
                      y("textarea", n), void 0 === n.value || void 0 === n.defaultValue || Fr || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), Fr = !0), e.push(W("textarea"));
                      var ee, te = null,
                        ne = null,
                        re = null;
                      for (ee in n)
                        if (pn.call(n, ee)) {
                          var oe = n[ee];
                          if (null != oe) switch (ee) {
                            case "children":
                              re = oe;
                              break;
                            case "value":
                              te = oe;
                              break;
                            case "defaultValue":
                              ne = oe;
                              break;
                            case "dangerouslySetInnerHTML":
                              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                            default:
                              O(e, ee, oe)
                          }
                        } if (null === te && null !== ne && (te = ne), e.push(wr), null != re) {
                        if (console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), null != te) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                        if (cn(re)) {
                          if (re.length > 1) throw Error("<textarea> can only have at most one child.");
                          m(re[0]), te = "" + re[0]
                        }
                        m(re), te = "" + re
                      }
                      return "string" == typeof te && "\n" === te[0] && e.push(jr), null !== te && (h(te, "value"), e.push(w("" + te))), null;
                    case "input":
                      y("input", n), e.push(W("input"));
                      var ie, le = null,
                        ce = null,
                        ue = null,
                        fe = null,
                        de = null,
                        he = null,
                        pe = null,
                        me = null,
                        ge = null;
                      for (ie in n)
                        if (pn.call(n, ie)) {
                          var ye = n[ie];
                          if (null != ye) switch (ie) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                            case "name":
                              le = ye;
                              break;
                            case "formAction":
                              ce = ye;
                              break;
                            case "formEncType":
                              ue = ye;
                              break;
                            case "formMethod":
                              fe = ye;
                              break;
                            case "formTarget":
                              de = ye;
                              break;
                            case "defaultChecked":
                              ge = ye;
                              break;
                            case "defaultValue":
                              pe = ye;
                              break;
                            case "checked":
                              me = ye;
                              break;
                            case "value":
                              he = ye;
                              break;
                            default:
                              O(e, ie, ye)
                          }
                        } null === ce || "image" === n.type || "submit" === n.type || Er || (Er = !0, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
                      var ve = I(e, r, o, ce, ue, fe, de, le);
                      return null === me || null === ge || Sr || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), Sr = !0), null === he || null === pe || Cr || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), Cr = !0), null !== me ? A(e, "checked", me) : null !== ge && A(e, "checked", ge), null !== he ? O(e, "value", he) : null !== pe && O(e, "value", pe), e.push(xr), ve?.forEach(R, e), null;
                    case "button":
                      e.push(W("button"));
                      var be, ke = null,
                        we = null,
                        xe = null,
                        Ce = null,
                        Se = null,
                        Te = null,
                        Fe = null;
                      for (be in n)
                        if (pn.call(n, be)) {
                          var Ae = n[be];
                          if (null != Ae) switch (be) {
                            case "children":
                              ke = Ae;
                              break;
                            case "dangerouslySetInnerHTML":
                              we = Ae;
                              break;
                            case "name":
                              xe = Ae;
                              break;
                            case "formAction":
                              Ce = Ae;
                              break;
                            case "formEncType":
                              Se = Ae;
                              break;
                            case "formMethod":
                              Te = Ae;
                              break;
                            case "formTarget":
                              Fe = Ae;
                              break;
                            default:
                              O(e, be, Ae)
                          }
                        } null === Ce || null == n.type || "submit" === n.type || Er || (Er = !0, console.error('A button can only specify a formAction along with type="submit" or no type.'));
                      var Le = I(e, r, o, Ce, Se, Te, Fe, xe);
                      if (e.push(wr), Le?.forEach(R, e), H(e, we, ke), "string" == typeof ke) {
                        e.push(w(ke));
                        var Re = null
                      } else Re = ke;
                      return Re;
                    case "form":
                      e.push(W("form"));
                      var Ee, Me = null,
                        Ie = null,
                        Oe = null,
                        He = null,
                        Be = null,
                        je = null;
                      for (Ee in n)
                        if (pn.call(n, Ee)) {
                          var De = n[Ee];
                          if (null != De) switch (Ee) {
                            case "children":
                              Me = De;
                              break;
                            case "dangerouslySetInnerHTML":
                              Ie = De;
                              break;
                            case "action":
                              Oe = De;
                              break;
                            case "encType":
                              He = De;
                              break;
                            case "method":
                              Be = De;
                              break;
                            case "target":
                              je = De;
                              break;
                            default:
                              O(e, Ee, De)
                          }
                        } var Ne = null,
                        _e = null;
                      if ("function" == typeof Oe) {
                        null === He && null === Be || Or || (Or = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), null === je || Ir || (Ir = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
                        var Pe = M(r, Oe);
                        null !== Pe ? (Oe = Pe.action || "", He = Pe.encType, Be = Pe.method, je = Pe.target, Ne = Pe.data, _e = Pe.name) : (e.push(gr, "action", yr, kr, vr), je = Be = He = Oe = null, j(r, o))
                      }
                      if (null != Oe && O(e, "action", Oe), null != He && O(e, "encType", He), null != Be && O(e, "method", Be), null != je && O(e, "target", je), e.push(wr), null !== _e && (e.push('<input type="hidden"'), L(e, "name", _e), e.push(xr), Ne?.forEach(R, e)), H(e, Ie, Me), "string" == typeof Me) {
                        e.push(w(Me));
                        var Ve = null
                      } else Ve = Me;
                      return Ve;
                    case "menuitem":
                      for (var Ue in e.push(W("menuitem")), n)
                        if (pn.call(n, Ue)) {
                          var We = n[Ue];
                          if (null != We) switch (Ue) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                            default:
                              O(e, Ue, We)
                          }
                        } return e.push(wr), null;
                    case "object":
                      e.push(W("object"));
                      var ze, Ze = null,
                        $e = null;
                      for (ze in n)
                        if (pn.call(n, ze)) {
                          var Ge = n[ze];
                          if (null != Ge) switch (ze) {
                            case "children":
                              Ze = Ge;
                              break;
                            case "dangerouslySetInnerHTML":
                              $e = Ge;
                              break;
                            case "data":
                              h(Ge, "data");
                              var qe = x("" + Ge);
                              if ("" === qe) {
                                console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', ze, ze);
                                break
                              }
                              e.push(gr, "data", yr, w(qe), vr);
                              break;
                            default:
                              O(e, ze, Ge)
                          }
                        } if (e.push(wr), H(e, $e, Ze), "string" == typeof Ze) {
                        e.push(w(Ze));
                        var Ye = null
                      } else Ye = Ze;
                      return Ye;
                    case "title":
                      var Ke = a.insertionMode,
                        Xe = !!(1 & a.tagScope);
                      if (pn.call(n, "children")) {
                        var Je = n.children,
                          Qe = Array.isArray(Je) ? 2 > Je.length ? Je[0] : null : Je;
                        Array.isArray(Je) && Je.length > 1 ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be commong to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", Je.length) : "function" == typeof Qe || "symbol" == typeof Qe ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", "function" == typeof Qe ? "a Function" : "a Sybmol") : Qe && Qe.toString === {}.toString && (null != Qe.$$typeof ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."))
                      }
                      if (Ke === ar || Xe || null != n.itemProp) var et = P(e, n);
                      else l ? et = null : (P(o.hoistableChunks, n), et = void 0);
                      return et;
                    case "link":
                      var tt = n.rel,
                        nt = n.href,
                        rt = n.precedence;
                      if (a.insertionMode === ar || 1 & a.tagScope || null != n.itemProp || "string" != typeof tt || "string" != typeof nt || "" === nt) {
                        "stylesheet" === tt && "string" == typeof n.precedence && ("string" == typeof nt && nt || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', null === nt ? "`null`" : void 0 === nt ? "`undefined`" : "" === nt ? "an empty string" : 'something with type "' + typeof nt + '"')), D(e, n);
                        var ot = null
                      } else if ("stylesheet" === n.rel)
                        if ("string" != typeof rt || null != n.disabled || n.onLoad || n.onError) {
                          if ("string" == typeof rt)
                            if (null != n.disabled) console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
                            else if (n.onLoad || n.onError) {
                            var it = n.onLoad && n.onError ? "`onLoad` and `onError` props" : n.onLoad ? "`onLoad` prop" : "`onError` prop";
                            console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', it, it)
                          }
                          ot = D(e, n)
                        } else {
                          var at = o.styles.get(rt),
                            st = r.styleResources.hasOwnProperty(nt) ? r.styleResources[nt] : void 0;
                          if (st !== Qn) {
                            r.styleResources[nt] = Qn, at || (at = {
                              precedence: w(rt),
                              rules: [],
                              hrefs: [],
                              sheets: new Map
                            }, o.styles.set(rt, at));
                            var lt = {
                              state: oi,
                              props: hn({}, n, {
                                "data-precedence": n.precedence,
                                precedence: null
                              })
                            };
                            if (st) {
                              2 === st.length && ae(lt.props, st);
                              var ct = o.preloads.stylesheets.get(nt);
                              ct && ct.length > 0 ? ct.length = 0 : lt.state = ii
                            }
                            at.sheets.set(nt, lt), i && i.stylesheets.add(lt)
                          } else if (at) {
                            var ut = at.sheets.get(nt);
                            ut && i && i.stylesheets.add(ut)
                          }
                          s && e.push("\x3c!-- --\x3e"), ot = null
                        }
                      else n.onLoad || n.onError ? ot = D(e, n) : (s && e.push("\x3c!-- --\x3e"), ot = l ? null : D(o.hoistableChunks, n));
                      return ot;
                    case "script":
                      var ft = n.async;
                      if ("string" != typeof n.src || !n.src || !ft || "function" == typeof ft || "symbol" == typeof ft || n.onLoad || n.onError || a.insertionMode === ar || 1 & a.tagScope || null != n.itemProp) var dt = V(e, n);
                      else {
                        var ht = n.src;
                        if ("module" === n.type) var pt = r.moduleScriptResources,
                          mt = o.preloads.moduleScripts;
                        else pt = r.scriptResources, mt = o.preloads.scripts;
                        var gt = pt.hasOwnProperty(ht) ? pt[ht] : void 0;
                        if (gt !== Qn) {
                          pt[ht] = Qn;
                          var yt = n;
                          if (gt) {
                            2 === gt.length && ae(yt = hn({}, n), gt);
                            var vt = mt.get(ht);
                            vt && (vt.length = 0)
                          }
                          var bt = [];
                          o.scripts.add(bt), V(bt, yt)
                        }
                        s && e.push("\x3c!-- --\x3e"), dt = null
                      }
                      return dt;
                    case "style":
                      var kt = a.insertionMode,
                        wt = !!(1 & a.tagScope);
                      if (pn.call(n, "children")) {
                        var xt = n.children,
                          Ct = Array.isArray(xt) ? 2 > xt.length ? xt[0] : null : xt;
                        ("function" == typeof Ct || "symbol" == typeof Ct || Array.isArray(Ct)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", "function" == typeof Ct ? "a Function" : "symbol" == typeof Ct ? "a Sybmol" : "an Array")
                      }
                      var St = n.precedence,
                        Tt = n.href;
                      if (kt === ar || wt || null != n.itemProp || "string" != typeof St || "string" != typeof Tt || "" === Tt) {
                        e.push(W("style"));
                        var Ft, At = null,
                          Lt = null;
                        for (Ft in n)
                          if (pn.call(n, Ft)) {
                            var Rt = n[Ft];
                            if (null != Rt) switch (Ft) {
                              case "children":
                                At = Rt;
                                break;
                              case "dangerouslySetInnerHTML":
                                Lt = Rt;
                                break;
                              default:
                                O(e, Ft, Rt)
                            }
                          } e.push(wr);
                        var Et = Array.isArray(At) ? 2 > At.length ? At[0] : null : At;
                        "function" != typeof Et && "symbol" != typeof Et && null != Et && e.push(N(Et)), H(e, Lt, At), e.push(z("style"));
                        var Mt = null
                      } else {
                        Tt.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', Tt);
                        var It = o.styles.get(St),
                          Ot = r.styleResources.hasOwnProperty(Tt) ? r.styleResources[Tt] : void 0;
                        if (Ot !== Qn) {
                          r.styleResources[Tt] = Qn, Ot && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', Tt), It ? It.hrefs.push(w(Tt)) : (It = {
                            precedence: w(St),
                            rules: [],
                            hrefs: [w(Tt)],
                            sheets: new Map
                          }, o.styles.set(St, It));
                          var Ht, Bt = It.rules,
                            jt = null,
                            Dt = null;
                          for (Ht in n)
                            if (pn.call(n, Ht)) {
                              var Nt = n[Ht];
                              if (null != Nt) switch (Ht) {
                                case "children":
                                  jt = Nt;
                                  break;
                                case "dangerouslySetInnerHTML":
                                  Dt = Nt
                              }
                            } var _t = Array.isArray(jt) ? 2 > jt.length ? jt[0] : null : jt;
                          "function" != typeof _t && "symbol" != typeof _t && null != _t && Bt.push(N(_t)), H(Bt, Dt, jt)
                        }
                        It && i && i.styles.add(It), s && e.push("\x3c!-- --\x3e"), Mt = void 0
                      }
                      return Mt;
                    case "meta":
                      if (a.insertionMode === ar || 1 & a.tagScope || null != n.itemProp) var Pt = _(e, n, "meta");
                      else s && e.push("\x3c!-- --\x3e"), Pt = l ? null : "string" == typeof n.charSet ? _(o.charsetChunks, n, "meta") : "viewport" === n.name ? _(o.viewportChunks, n, "meta") : _(o.hoistableChunks, n, "meta");
                      return Pt;
                    case "listing":
                    case "pre":
                      e.push(W(t));
                      var Ut, Wt = null,
                        zt = null;
                      for (Ut in n)
                        if (pn.call(n, Ut)) {
                          var Zt = n[Ut];
                          if (null != Zt) switch (Ut) {
                            case "children":
                              Wt = Zt;
                              break;
                            case "dangerouslySetInnerHTML":
                              zt = Zt;
                              break;
                            default:
                              O(e, Ut, Zt)
                          }
                        } if (e.push(wr), null != zt) {
                        if (null != Wt) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                        if ("object" != typeof zt || !("P" in zt)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
                        var $t = zt.P;
                        null != $t && ("string" == typeof $t && $t.length > 0 && "\n" === $t[0] ? e.push(jr, $t) : (m($t), e.push("" + $t)))
                      }
                      return "string" == typeof Wt && "\n" === Wt[0] && e.push(jr), Wt;
                    case "img":
                      var Gt = n.src,
                        qt = n.srcSet;
                      if (!("lazy" === n.loading || !Gt && !qt || "string" != typeof Gt && null != Gt || "string" != typeof qt && null != qt || "low" === n.fetchPriority || 3 & a.tagScope) && ("string" != typeof Gt || ":" !== Gt[4] || "d" !== Gt[0] && "D" !== Gt[0] || "a" !== Gt[1] && "A" !== Gt[1] || "t" !== Gt[2] && "T" !== Gt[2] || "a" !== Gt[3] && "A" !== Gt[3]) && ("string" != typeof qt || ":" !== qt[4] || "d" !== qt[0] && "D" !== qt[0] || "a" !== qt[1] && "A" !== qt[1] || "t" !== qt[2] && "T" !== qt[2] || "a" !== qt[3] && "A" !== qt[3])) {
                        var Yt = "string" == typeof n.sizes ? n.sizes : void 0,
                          Kt = qt ? qt + "\n" + (Yt || "") : Gt,
                          Xt = o.preloads.images,
                          Jt = Xt.get(Kt);
                        if (Jt)("high" === n.fetchPriority || 10 > o.highImagePreloads.size) && (Xt.delete(Kt), o.highImagePreloads.add(Jt));
                        else if (!r.imageResources.hasOwnProperty(Kt)) {
                          r.imageResources[Kt] = er;
                          var Qt, en = n.crossOrigin,
                            tn = "string" == typeof en ? "use-credentials" === en ? en : "" : void 0,
                            nn = o.headers;
                          nn && nn.remainingCapacity > 0 && ("high" === n.fetchPriority || 500 > nn.highImagePreloads.length) && (Qt = se(Gt, "image", {
                            imageSrcSet: n.srcSet,
                            imageSizes: n.sizes,
                            crossOrigin: tn,
                            integrity: n.integrity,
                            nonce: n.nonce,
                            type: n.type,
                            fetchPriority: n.fetchPriority,
                            referrerPolicy: n.refererPolicy
                          }), (nn.remainingCapacity -= Qt.length + 2) >= 0) ? (o.resets.image[Kt] = er, nn.highImagePreloads && (nn.highImagePreloads += ", "), nn.highImagePreloads += Qt) : (D(Jt = [], {
                            rel: "preload",
                            as: "image",
                            href: qt ? void 0 : Gt,
                            imageSrcSet: qt,
                            imageSizes: Yt,
                            crossOrigin: tn,
                            integrity: n.integrity,
                            type: n.type,
                            fetchPriority: n.fetchPriority,
                            referrerPolicy: n.referrerPolicy
                          }), "high" === n.fetchPriority || 10 > o.highImagePreloads.size ? o.highImagePreloads.add(Jt) : (o.bulkPreloads.add(Jt), Xt.set(Kt, Jt)))
                        }
                      }
                      return _(e, n, "img");
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
                      return _(e, n, t);
                    case "head":
                      if (a.insertionMode < ir && null === o.headChunks) {
                        o.headChunks = [];
                        var rn = U(o.headChunks, n, "head")
                      } else rn = U(e, n, "head");
                      return rn;
                    case "html":
                      if (a.insertionMode === rr && null === o.htmlChunks) {
                        o.htmlChunks = [ui];
                        var on = U(o.htmlChunks, n, "html")
                      } else on = U(e, n, "html");
                      return on;
                    default:
                      if (-1 !== t.indexOf("-")) {
                        e.push(W(t));
                        var an, sn = null,
                          ln = null;
                        for (an in n)
                          if (pn.call(n, an)) {
                            var un = n[an];
                            if (null != un) {
                              var fn = an;
                              switch (an) {
                                case "children":
                                  sn = un;
                                  break;
                                case "dangerouslySetInnerHTML":
                                  ln = un;
                                  break;
                                case "style":
                                  F(e, un);
                                  break;
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "ref":
                                  break;
                                case "className":
                                  fn = "class";
                                default:
                                  if (g(an) && "function" != typeof un && "symbol" != typeof un && !1 !== un) {
                                    if (!0 === un) un = "";
                                    else if ("object" == typeof un) continue;
                                    e.push(gr, fn, yr, w(un), vr)
                                  }
                              }
                            }
                          } return e.push(wr), H(e, ln, sn), sn
                      }
                  }
                  return U(e, n, t)
                }(St.chunks, r, o, e.resumableState, e.renderState, t.hoistableState, t.formatContext, St.lastPushedText, t.isFallback);
                St.lastPushedText = !1;
                var Et = t.formatContext,
                  Mt = t.keyPath;
                t.formatContext = T(Et, r, o), t.keyPath = n, kt(e, t, Rt, -1), t.formatContext = Et, t.keyPath = Mt;
                e: {
                  var It = St.chunks,
                    Ot = e.resumableState;
                  switch (r) {
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
                      if (Et.insertionMode <= or) {
                        Ot.hasBody = !0;
                        break e
                      }
                      break;
                    case "html":
                      if (Et.insertionMode === rr) {
                        Ot.hasHtml = !0;
                        break e
                      }
                  }
                  It.push(z(r))
                }
                St.lastPushedText = !1
              }
            }
          }

          function ht(e, t, n, r, o) {
            var i = t.replay,
              a = t.blockedBoundary,
              s = nt(0, 0, null, t.formatContext, !1, !1);
            s.id = n, s.parentFlushed = !0;
            try {
              t.replay = null, t.blockedSegment = s, kt(e, t, r, o), s.status = xa, null === a ? e.completedRootSegment = s : (Lt(a, s), a.parentFlushed && e.partialBoundaries.push(a))
            } finally {
              t.replay = i, t.blockedSegment = null
            }
          }

          function pt(e, t, n, r) {
            null !== t.replay && "number" == typeof t.replay.slots ? ht(e, t, t.replay.slots, n, r) : (t.node = n, t.childIndex = r, n = t.componentStack, it(t), mt(e, t), t.componentStack = n)
          }

          function mt(e, t) {
            var n = t.node,
              r = t.childIndex;
            if (null !== n) {
              if ("object" == typeof n) {
                switch (n.$$typeof) {
                  case Wt:
                    var o = n.type,
                      i = n.key,
                      a = n.props,
                      s = void 0 !== (n = a.ref) ? n : null,
                      l = ge(o),
                      c = i ?? (-1 === r ? 0 : r),
                      u = [t.keyPath, l, c];
                    if (null !== t.replay) {
                      var f = t.replay;
                      for (r = f.nodes, n = 0; n < r.length; n++)
                        if (c === (i = r[n])[1]) {
                          if (4 === i.length) {
                            if (null !== l && l !== i[0]) throw Error("Expected the resume to render <" + i[0] + "> in this slot but instead it rendered <" + l + ">. The tree doesn't match so React will fallback to client rendering.");
                            var d = i[2];
                            i = i[3], l = t.node, t.replay = {
                              nodes: d,
                              slots: i,
                              pendingTasks: 1
                            };
                            try {
                              if (dt(e, t, u, o, a, s), 1 === t.replay.pendingTasks && t.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                              t.replay.pendingTasks--
                            } catch (n) {
                              if ("object" == typeof n && null !== n && (n === Oi || "function" == typeof n.then)) throw t.node === l && (t.replay = f), n;
                              t.replay.pendingTasks--, a = at(t.componentStack), wt(e, t.blockedBoundary, n, a, d, i)
                            }
                            t.replay = f
                          } else {
                            if (o !== Jt) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (ge(o) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                            e: {
                              o = void 0,
                              s = i[5],
                              f = i[2],
                              l = i[3],
                              c = null === i[4] ? [] : i[4][2],
                              i = null === i[4] ? null : i[4][3];
                              var h = t.keyPath,
                                p = t.replay,
                                m = t.blockedBoundary,
                                g = t.hoistableState,
                                y = a.children;a = a.fallback;
                              var v = new Set,
                                b = Qe(0, v);b.parentFlushed = !0,
                              b.rootSegmentID = s,
                              t.blockedBoundary = b,
                              t.hoistableState = b.contentState,
                              t.keyPath = u,
                              t.replay = {
                                nodes: f,
                                slots: l,
                                pendingTasks: 1
                              };
                              try {
                                if (kt(e, t, y, -1), 1 === t.replay.pendingTasks && t.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                if (t.replay.pendingTasks--, 0 === b.pendingTasks && b.status === wa) {
                                  b.status = xa, e.completedBoundaries.push(b);
                                  break e
                                }
                              } catch (n) {
                                b.status = ka, st(b, o = lt(e, n, d = at(t.componentStack)), n, d, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(b)
                              } finally {
                                t.blockedBoundary = m, t.hoistableState = g, t.replay = p, t.keyPath = h
                              }
                              it(d = tt(e, null, {
                                nodes: c,
                                slots: i,
                                pendingTasks: 0
                              }, a, -1, m, b.fallbackState, v, [u[0], "Suspense Fallback", u[2]], t.formatContext, t.context, t.treeContext, t.componentStack, !0)),
                              e.pingedTasks.push(d)
                            }
                          }
                          r.splice(n, 1);
                          break
                        }
                    } else dt(e, t, u, o, a, s);
                    return;
                  case zt:
                    throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                  case tn:
                    if (n = ba(n), 12 === e.status) throw null;
                    return void pt(e, t, n, r)
                }
                if (cn(n)) return void gt(e, t, n, r);
                if ((a = null === n || "object" != typeof n ? null : "function" == typeof(d = ln && n[ln] || n["@@iterator"]) ? d : null) && (d = a.call(n))) {
                  if (d === n ? (-1 !== r || null === t.componentStack || "function" != typeof t.componentStack.type || "[object GeneratorFunction]" !== {}.toString.call(t.componentStack.type) || "[object Generator]" !== {}.toString.call(d)) && (Ia || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), Ia = !0) : n.entries !== a || Oa || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Oa = !0), !(n = d.next()).done) {
                    a = [];
                    do {
                      a.push(n.value), n = d.next()
                    } while (!n.done);
                    gt(e, t, a, r)
                  }
                  return
                }
                if ("function" == typeof n.then) return t.thenableState = null, pt(e, t, Ve(n), r);
                if (n.$$typeof === Kt) return pt(e, t, n.V, r);
                throw r = {}.toString.call(n), Error("Objects are not valid as a React child (found: " + ("[object Object]" === r ? "object with keys {" + Object.keys(n).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
              }
              "string" == typeof n ? null !== (r = t.blockedSegment) && (r.lastPushedText = pe(r.chunks, n, e.renderState, r.lastPushedText)) : "number" == typeof n || "bigint" == typeof n ? null !== (r = t.blockedSegment) && (r.lastPushedText = pe(r.chunks, "" + n, e.renderState, r.lastPushedText)) : ("function" == typeof n && (r = n.displayName || n.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", r, r)), "symbol" == typeof n && console.error("Symbols are not valid as a React child.\n  %s", n + ""))
            }
          }

          function gt(e, t, n, r) {
            var o = t.keyPath,
              i = t.componentStack;
            if (ot(t, t.node.R), -1 !== r && (t.keyPath = [t.keyPath, "Fragment", r], null !== t.replay)) {
              for (var a = t.replay, s = a.nodes, l = 0; l < s.length; l++) {
                var c = s[l];
                if (c[1] === r) {
                  r = c[2], c = c[3], t.replay = {
                    nodes: r,
                    slots: c,
                    pendingTasks: 1
                  };
                  try {
                    if (gt(e, t, n, -1), 1 === t.replay.pendingTasks && t.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                    t.replay.pendingTasks--
                  } catch (o) {
                    if ("object" == typeof o && null !== o && (o === Oi || "function" == typeof o.then)) throw o;
                    t.replay.pendingTasks--, n = at(t.componentStack), wt(e, t.blockedBoundary, o, n, r, c)
                  }
                  t.replay = a, s.splice(l, 1);
                  break
                }
              }
              return t.keyPath = o, void(t.componentStack = i)
            }
            if (a = t.treeContext, s = n.length, null !== t.replay && null !== (l = t.replay.slots) && "object" == typeof l) {
              for (r = 0; s > r; r++) {
                c = n[r], t.treeContext = Te(a, s, r);
                var u = l[r];
                "number" == typeof u ? (ht(e, t, u, c, r), delete l[r]) : kt(e, t, c, r)
              }
              return t.treeContext = a, t.keyPath = o, void(t.componentStack = i)
            }
            for (l = 0; s > l; l++) {
              var f = e;
              if (c = t, null !== (u = r = n[l]) && "object" == typeof u && (u.$$typeof === Wt || u.$$typeof === zt) && u.F && (!u.F.validated && null == u.key || 2 === u.F.validated)) {
                if ("object" != typeof u.F) throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                u.F.validated = 1;
                var d = f.didWarnForKey;
                if (null == d && (d = f.didWarnForKey = new WeakSet), null !== (f = c.componentStack) && !d.has(f)) {
                  d.add(f);
                  var h = ge(u.type);
                  d = u.v;
                  var p = f.owner;
                  if (f = "", p && "u" > typeof p.type) {
                    var m = ge(p.type);
                    m && (f = "\n\nCheck the render method of `" + m + "`.")
                  }
                  f || h && (f = "\n\nCheck the top-level render call using <" + h + ">."), h = "", null != d && p !== d && (p = null, "u" > typeof d.type ? p = ge(d.type) : "string" == typeof d.name && (p = d.name), p && (h = " It was passed a child from " + p + ".")), d = c.componentStack, c.componentStack = {
                    parent: c.componentStack,
                    type: u.type,
                    owner: u.v,
                    stack: null
                  }, console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', f, h), c.componentStack = d
                }
              }
              t.treeContext = Te(a, s, l), kt(e, t, r, l)
            }
            t.treeContext = a, t.keyPath = o, t.componentStack = i
          }

          function yt(e, t) {
            null !== (e = e.trackedPostpones) && null !== (t = t.trackedContentKeyPath) && void 0 !== (t = e.workingMap.get(t)) && (t.length = 4, t[2] = [], t[3] = null)
          }

          function vt(e, t, n) {
            return tt(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.componentStack, t.isFallback)
          }

          function bt(e, t, n) {
            var r = t.blockedSegment,
              o = nt(0, r.chunks.length, null, t.formatContext, r.lastPushedText, !0);
            return r.children.push(o), r.lastPushedText = !1, et(e, n, t.node, t.childIndex, t.blockedBoundary, o, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.componentStack, t.isFallback)
          }

          function kt(e, t, n, r) {
            var o = t.formatContext,
              i = t.context,
              a = t.keyPath,
              s = t.treeContext,
              l = t.componentStack,
              c = t.blockedSegment;
            if (null === c) try {
              return pt(e, t, n, r)
            } catch (c) {
              if (Ie(), "object" == typeof(n = c === Oi ? Ae() : c) && null !== n) {
                if ("function" == typeof n.then) return e = vt(e, t, r = Me()).ping, n.then(e, e), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void xe(i);
                if ("Maximum call stack size exceeded" === n.message) return n = vt(e, t, n = Me()), e.pingedTasks.push(n), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void xe(i)
              }
            } else {
              var u = c.children.length,
                f = c.chunks.length;
              try {
                return pt(e, t, n, r)
              } catch (d) {
                if (Ie(), c.children.length = u, c.chunks.length = f, "object" == typeof(n = d === Oi ? Ae() : d) && null !== n) {
                  if ("function" == typeof n.then) return e = bt(e, t, r = Me()).ping, n.then(e, e), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void xe(i);
                  if ("Maximum call stack size exceeded" === n.message) return n = bt(e, t, n = Me()), e.pingedTasks.push(n), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void xe(i)
                }
              }
            }
            throw t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, xe(i), n
          }

          function wt(e, t, n, r, o, i) {
            Ct(e, t, o, i, n, lt(e, n, r), r, !1)
          }

          function xt(e) {
            var t = e.blockedBoundary;
            null !== (e = e.blockedSegment) && (e.status = 3, Rt(this, t, e))
          }

          function Ct(e, t, n, r, o, i, a, s) {
            for (var l = 0; l < n.length; l++) {
              var c = n[l];
              if (4 === c.length) Ct(e, t, c[2], c[3], o, i, a, s);
              else {
                var u = e;
                c = c[5];
                var f = o,
                  d = i,
                  h = a,
                  p = s,
                  m = Qe(0, new Set);
                m.parentFlushed = !0, m.rootSegmentID = c, m.status = ka, st(m, d, f, h, p), m.parentFlushed && u.clientRenderedBoundaries.push(m)
              }
            }
            if (n.length = 0, null !== r) {
              if (null === t) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
              if (t.status !== ka && (t.status = ka, st(t, i, o, a, s), t.parentFlushed && e.clientRenderedBoundaries.push(t)), "object" == typeof r)
                for (var g in r) delete r[g]
            }
          }

          function St(e, t, n) {
            var r = e.blockedBoundary,
              o = e.blockedSegment;
            if (null !== o) {
              if (6 === o.status) return;
              o.status = 3
            }
            if (o = at(e.componentStack), null === r) {
              if (13 !== t.status && t.status !== Ta) {
                if (null === (r = e.replay)) return lt(t, n, o), void ct(t, n);
                r.pendingTasks--, 0 === r.pendingTasks && r.nodes.length > 0 && (e = lt(t, n, o), Ct(t, null, r.nodes, r.slots, n, e, o, !0)), t.pendingRootTasks--, 0 === t.pendingRootTasks && Ft(t)
              }
            } else r.pendingTasks--, r.status !== ka && (r.status = ka, e = lt(t, n, o), r.status = ka, st(r, e, n, o, !0), yt(t, r), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(e) {
              return St(e, t, n)
            }), r.fallbackAbortableTasks.clear();
            t.allPendingTasks--, 0 === t.allPendingTasks && At(t)
          }

          function Tt(e, t) {
            try {
              var n = e.renderState,
                r = n.onHeaders;
              if (r) {
                var o = n.headers;
                if (o) {
                  n.headers = null;
                  var i = o.preconnects;
                  if (o.fontPreloads && (i && (i += ", "), i += o.fontPreloads), o.highImagePreloads && (i && (i += ", "), i += o.highImagePreloads), !t) {
                    var a = n.styles.values(),
                      s = a.next();
                    e: for (; o.remainingCapacity > 0 && !s.done; s = a.next())
                      for (var l = s.value.sheets.values(), c = l.next(); o.remainingCapacity > 0 && !c.done; c = l.next()) {
                        var u = c.value,
                          f = u.props,
                          d = f.href,
                          h = u.props,
                          p = se(h.href, "style", {
                            crossOrigin: h.crossOrigin,
                            integrity: h.integrity,
                            nonce: h.nonce,
                            type: h.type,
                            fetchPriority: h.fetchPriority,
                            referrerPolicy: h.referrerPolicy,
                            media: h.media
                          });
                        if (0 > (o.remainingCapacity -= p.length + 2)) break e;
                        n.resets.style[d] = er, i && (i += ", "), i += p, n.resets.style[d] = "string" == typeof f.crossOrigin || "string" == typeof f.integrity ? [f.crossOrigin, f.integrity] : er
                      }
                  }
                  r(i ? {
                    Link: i
                  } : {})
                }
              }
            } catch (t) {
              lt(e, t, {})
            }
          }

          function Ft(e) {
            null === e.trackedPostpones && Tt(e, !0), e.onShellError = Ke, (e = e.onShellReady)()
          }

          function At(e) {
            Tt(e, null === e.trackedPostpones || null === e.completedRootSegment || e.completedRootSegment.status !== Sa), (e = e.onAllReady)()
          }

          function Lt(e, t) {
            if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary && -1 === t.children[0].id) {
              var n = t.children[0];
              n.id = t.id, n.parentFlushed = !0, n.status === xa && Lt(e, n)
            } else e.completedSegments.push(t)
          }

          function Rt(e, t, n) {
            if (null === t) {
              if (null !== n && n.parentFlushed) {
                if (null !== e.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
                e.completedRootSegment = n
              }
              e.pendingRootTasks--, 0 === e.pendingRootTasks && Ft(e)
            } else t.pendingTasks--, t.status !== ka && (0 === t.pendingTasks ? (t.status === wa && (t.status = xa), null !== n && n.parentFlushed && n.status === xa && Lt(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.status === xa && (t.fallbackAbortableTasks.forEach(xt, e), t.fallbackAbortableTasks.clear())) : null !== n && n.parentFlushed && n.status === xa && (Lt(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)));
            e.allPendingTasks--, 0 === e.allPendingTasks && At(e)
          }

          function Et(e) {
            if (e.status !== Ta && 13 !== e.status) {
              var t = gi,
                n = zn.H;
              zn.H = Ji;
              var r = zn.A;
              zn.A = la;
              var o = Fa;
              Fa = e;
              var i = zn.getCurrentStack;
              zn.getCurrentStack = rt;
              var a = aa;
              aa = e.resumableState;
              try {
                var s, l = e.pingedTasks;
                for (s = 0; s < l.length; s++) {
                  var c = e,
                    u = l[s],
                    f = u.blockedSegment;
                  if (null === f) {
                    var d = void 0,
                      h = c;
                    if (0 !== (c = u).replay.pendingTasks) {
                      xe(c.context), d = sa, sa = c;
                      try {
                        if ("number" == typeof c.replay.slots ? ht(h, c, c.replay.slots, c.node, c.childIndex) : mt(h, c), 1 === c.replay.pendingTasks && c.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        c.replay.pendingTasks--, c.abortSet.delete(c), Rt(h, c.blockedBoundary, null)
                      } catch (e) {
                        Ie();
                        var p = e === Oi ? Ae() : e;
                        if ("object" == typeof p && null !== p && "function" == typeof p.then) {
                          var m = c.ping;
                          p.then(m, m), c.thenableState = Me()
                        } else {
                          c.replay.pendingTasks--, c.abortSet.delete(c);
                          var g = at(c.componentStack);
                          wt(h, c.blockedBoundary, 12 === h.status ? h.fatalError : p, g, c.replay.nodes, c.replay.slots), h.pendingRootTasks--, 0 === h.pendingRootTasks && Ft(h), h.allPendingTasks--, 0 === h.allPendingTasks && At(h)
                        }
                      } finally {
                        sa = d
                      }
                    }
                  } else {
                    h = d = void 0;
                    var y = u,
                      v = f;
                    if (v.status === wa) {
                      v.status = 6, xe(y.context), h = sa, sa = y;
                      var b = v.children.length,
                        k = v.chunks.length;
                      try {
                        mt(c, y), me(v.chunks, c.renderState, v.lastPushedText, v.textEmbedded), y.abortSet.delete(y), v.status = xa, Rt(c, y.blockedBoundary, v)
                      } catch (e) {
                        Ie(), v.children.length = b, v.chunks.length = k;
                        var w = e === Oi ? Ae() : 12 === c.status ? c.fatalError : e;
                        if ("object" == typeof w && null !== w && "function" == typeof w.then) {
                          v.status = wa, y.thenableState = Me();
                          var x = y.ping;
                          w.then(x, x)
                        } else {
                          var C = at(y.componentStack);
                          y.abortSet.delete(y), v.status = 4;
                          var S = y.blockedBoundary;
                          d = lt(c, w, C), null === S ? ct(c, w) : (S.pendingTasks--, S.status !== ka && (S.status = ka, st(S, d, w, C, !1), yt(c, S), S.parentFlushed && c.clientRenderedBoundaries.push(S))), c.allPendingTasks--, 0 === c.allPendingTasks && At(c)
                        }
                      } finally {
                        sa = h
                      }
                    }
                  }
                }
                l.splice(0, s), null !== e.destination && jt(e, e.destination)
              } catch (t) {
                lt(e, t, {}), ct(e, t)
              } finally {
                aa = a, zn.H = n, zn.A = r, zn.getCurrentStack = i, n === Ji && xe(t), Fa = o
              }
            }
          }

          function Mt(e, t, n, r) {
            switch (n.parentFlushed = !0, n.status) {
              case wa:
                n.id = e.nextSegmentId++;
              case Sa:
                return r = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, t.push(Pr), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push(Vr);
              case xa:
                n.status = Ca;
                var o = !0,
                  i = n.chunks,
                  a = 0;
                n = n.children;
                for (var s = 0; s < n.length; s++) {
                  for (o = n[s]; a < o.index; a++) t.push(i[a]);
                  o = It(e, t, o, r)
                }
                for (; a < i.length - 1; a++) t.push(i[a]);
                return a < i.length && (o = t.push(i[a])), o;
              default:
                throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.")
            }
          }

          function It(e, t, n, r) {
            var o = n.boundary;
            if (null === o) return Mt(e, t, n, r);
            if (o.parentFlushed = !0, o.status === ka) {
              if (!e.renderState.generateStaticMarkup) {
                var i = o.errorDigest,
                  a = o.errorMessage,
                  s = o.errorStack;
                o = o.errorComponentStack, t.push(Zr), t.push(Gr), i && (t.push(Yr), i = w(i), t.push(i), t.push(qr)), a && (t.push(Kr), a = w(a), t.push(a), t.push(qr)), s && (t.push(Xr), s = w(s), t.push(s), t.push(qr)), o && (t.push(Jr), s = w(o), t.push(s), t.push(qr)), t.push(Qr)
              }
              return Mt(e, t, n, r), !!e.renderState.generateStaticMarkup || t.push($r)
            }
            if (o.status !== xa) return o.status === wa && (o.rootSegmentID = e.nextSegmentId++), o.completedSegments.length > 0 && e.partialBoundaries.push(o), $(t, e.renderState, o.rootSegmentID), r && ((s = o.fallbackState).styles.forEach(de, r), s.stylesheets.forEach(he, r)), Mt(e, t, n, r), t.push($r);
            if (o.byteSize > e.progressiveChunkSize) return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), $(t, e.renderState, o.rootSegmentID), Mt(e, t, n, r), t.push($r);
            if (r && ((n = o.contentState).styles.forEach(de, r), n.stylesheets.forEach(he, r)), e.renderState.generateStaticMarkup || t.push(Ur), 1 !== (n = o.completedSegments).length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            return It(e, t, n[0], r), !!e.renderState.generateStaticMarkup || t.push($r)
          }

          function Ot(e, t, n, r) {
            return function(e, t, n, r) {
                switch (n.insertionMode) {
                  case rr:
                  case or:
                  case ir:
                    return e.push(eo), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(to);
                  case ar:
                    return e.push(ro), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(oo);
                  case sr:
                    return e.push(ao), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(so);
                  case lr:
                    return e.push(co), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(uo);
                  case cr:
                    return e.push(ho), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(po);
                  case ur:
                    return e.push(go), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(yo);
                  case fr:
                    return e.push(bo), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(ko);
                  default:
                    throw Error("Unknown insertion mode. This is a bug in React.")
                }
              }(t, e.renderState, n.parentFormatContext, n.id), It(e, t, n, r),
              function(e, t) {
                switch (t.insertionMode) {
                  case rr:
                  case or:
                  case ir:
                    return e.push(no);
                  case ar:
                    return e.push(io);
                  case sr:
                    return e.push(lo);
                  case lr:
                    return e.push(fo);
                  case cr:
                    return e.push(mo);
                  case ur:
                    return e.push(vo);
                  case fr:
                    return e.push(wo);
                  default:
                    throw Error("Unknown insertion mode. This is a bug in React.")
                }
              }(t, n.parentFormatContext)
          }

          function Ht(e, t, n) {
            for (var r = n.completedSegments, o = 0; o < r.length; o++) Bt(e, t, n, r[o]);
            r.length = 0, X(t, n.contentState, e.renderState), r = e.resumableState, e = e.renderState, o = n.rootSegmentID, n = n.contentState;
            var i = e.stylesToHoist;
            return e.stylesToHoist = !1, t.push(e.startInlineScript), i ? (r.instructions & Kn) === qn ? (r.instructions = r.instructions | Jn | Kn, t.push(Lo)) : (r.instructions & Jn) === qn ? (r.instructions |= Jn, t.push(Ro)) : t.push(Eo) : (r.instructions & Kn) === qn ? (r.instructions |= Kn, t.push(Fo)) : t.push(Ao), r = o.toString(16), t.push(e.boundaryPrefix), t.push(r), t.push(Mo), t.push(e.segmentPrefix), t.push(r), i ? (t.push(Io), function(e, t) {
              e.push(ei);
              var n = ei;
              t.stylesheets.forEach(function(t) {
                if (t.state !== ai)
                  if (t.state === si) e.push(n), h(t = t.props.href, "href"), t = q("" + t), e.push(t), e.push(ri), n = ti;
                  else {
                    e.push(n);
                    var r = t.props["data-precedence"],
                      o = t.props,
                      i = x("" + t.props.href);
                    for (var a in i = q(i), e.push(i), h(r, "precedence"), r = "" + r, e.push(ni), r = q(r), e.push(r), o)
                      if (pn.call(o, a) && null != (r = o[a])) switch (a) {
                        case "href":
                        case "rel":
                        case "precedence":
                        case "data-precedence":
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        default:
                          re(e, a, r)
                      }
                    e.push(ri), n = ti, t.state = si
                  }
              }), e.push(ri)
            }(t, n)) : t.push(Oo), n = t.push(Ho), Z(t, e) && n
          }

          function Bt(e, t, n, r) {
            if (r.status === Ca) return !0;
            var o = n.contentState,
              i = r.id;
            if (-1 === i) {
              if (-1 === (r.id = n.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
              return Ot(e, t, r, o)
            }
            return i === n.rootSegmentID ? Ot(e, t, r, o) : (Ot(e, t, r, o), n = e.resumableState, e = e.renderState, t.push(e.startInlineScript), (n.instructions & Yn) === qn ? (n.instructions |= Yn, t.push(xo)) : t.push(Co), t.push(e.segmentPrefix), i = i.toString(16), t.push(i), t.push(So), t.push(e.placeholderPrefix), t.push(i), t = t.push(To))
          }

          function jt(e, t) {
            try {
              if (0 >= e.pendingRootTasks) {
                var n, r = e.completedRootSegment;
                if (null !== r) {
                  if (r.status === Sa) return;
                  var o, i = e.renderState,
                    a = i.htmlChunks,
                    s = i.headChunks;
                  if (a) {
                    for (o = 0; o < a.length; o++) t.push(a[o]);
                    if (s)
                      for (o = 0; o < s.length; o++) t.push(s[o]);
                    else {
                      var l = W("head");
                      t.push(l), t.push(wr)
                    }
                  } else if (s)
                    for (o = 0; o < s.length; o++) t.push(s[o]);
                  var c = i.charsetChunks;
                  for (o = 0; o < c.length; o++) t.push(c[o]);
                  c.length = 0, i.preconnects.forEach(J, t), i.preconnects.clear();
                  var u = i.viewportChunks;
                  for (o = 0; o < u.length; o++) t.push(u[o]);
                  u.length = 0, i.fontPreloads.forEach(J, t), i.fontPreloads.clear(), i.highImagePreloads.forEach(J, t), i.highImagePreloads.clear(), i.styles.forEach(ee, t);
                  var f = i.importMapChunks;
                  for (o = 0; o < f.length; o++) t.push(f[o]);
                  f.length = 0, i.bootstrapScripts.forEach(J, t), i.scripts.forEach(J, t), i.scripts.clear(), i.bulkPreloads.forEach(J, t), i.bulkPreloads.clear();
                  var d = i.hoistableChunks;
                  for (o = 0; o < d.length; o++) t.push(d[o]);
                  if (d.length = 0, a && null === s) {
                    var h = z("head");
                    t.push(h)
                  }
                  It(e, t, r, null), e.completedRootSegment = null, Z(t, e.renderState)
                }
                var p = e.renderState;
                r = 0;
                var m = p.viewportChunks;
                for (r = 0; r < m.length; r++) t.push(m[r]);
                m.length = 0, p.preconnects.forEach(J, t), p.preconnects.clear(), p.fontPreloads.forEach(J, t), p.fontPreloads.clear(), p.highImagePreloads.forEach(J, t), p.highImagePreloads.clear(), p.styles.forEach(ne, t), p.scripts.forEach(J, t), p.scripts.clear(), p.bulkPreloads.forEach(J, t), p.bulkPreloads.clear();
                var g = p.hoistableChunks;
                for (r = 0; r < g.length; r++) t.push(g[r]);
                g.length = 0;
                var y = e.clientRenderedBoundaries;
                for (n = 0; n < y.length; n++) {
                  var v = y[n];
                  p = t;
                  var b = e.resumableState,
                    k = e.renderState,
                    w = v.rootSegmentID,
                    x = v.errorDigest,
                    C = v.errorMessage,
                    S = v.errorStack,
                    T = v.errorComponentStack;
                  p.push(k.startInlineScript), (b.instructions & Xn) === qn ? (b.instructions |= Xn, p.push(Bo)) : p.push(jo), p.push(k.boundaryPrefix);
                  var F = w.toString(16);
                  if (p.push(F), p.push(Do), x || C || S || T) {
                    p.push(No);
                    var A = G(x || "");
                    p.push(A)
                  }
                  if (C || S || T) {
                    p.push(No);
                    var L = G(C || "");
                    p.push(L)
                  }
                  if (S || T) {
                    p.push(No);
                    var R = G(S || "");
                    p.push(R)
                  }
                  if (T) {
                    p.push(No);
                    var E = G(T);
                    p.push(E)
                  }
                  var M = p.push(_o);
                  if (!M) return e.destination = null, n++, void y.splice(0, n)
                }
                y.splice(0, n);
                var I = e.completedBoundaries;
                for (n = 0; n < I.length; n++)
                  if (!Ht(e, t, I[n])) return e.destination = null, n++, void I.splice(0, n);
                I.splice(0, n);
                var O = e.partialBoundaries;
                for (n = 0; n < O.length; n++) {
                  e: {
                    y = e,
                    v = t;
                    var H = O[n],
                      B = H.completedSegments;
                    for (M = 0; M < B.length; M++)
                      if (!Bt(y, v, H, B[M])) {
                        M++, B.splice(0, M);
                        var j = !1;
                        break e
                      } B.splice(0, M),
                    j = X(v, H.contentState, y.renderState)
                  }
                  if (!j) return e.destination = null,
                  n++,
                  void O.splice(0, n)
                }
                O.splice(0, n);
                var D = e.completedBoundaries;
                for (n = 0; n < D.length; n++)
                  if (!Ht(e, t, D[n])) return e.destination = null, n++, void D.splice(0, n);
                D.splice(0, n)
              }
            } finally {
              0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && (e.flushScheduled = !1, (n = e.resumableState).hasBody && (O = z("body"), t.push(O)), n.hasHtml && (n = z("html"), t.push(n)), 0 !== e.abortableTasks.size && console.error("There was still abortable task at the root when we closed. This is a bug in React."), e.status = Ta, t.push(null), e.destination = null)
            }
          }

          function Dt(e) {
            if (!1 === e.flushScheduled && 0 === e.pingedTasks.length && null !== e.destination) {
              e.flushScheduled = !0;
              var t = e.destination;
              t ? jt(e, t) : e.flushScheduled = !1
            }
          }

          function Nt(e, t) {
            (11 === e.status || 10 === e.status) && (e.status = 12);
            try {
              var n = e.abortableTasks;
              if (n.size > 0) {
                var r = void 0 === t ? Error("The render was aborted by the server without a reason.") : "object" == typeof t && null !== t && "function" == typeof t.then ? Error("The render was aborted by the server with a promise.") : t;
                e.fatalError = r, n.forEach(function(t) {
                  return St(t, e, r)
                }), n.clear()
              }
              null !== e.destination && jt(e, e.destination)
            } catch (t) {
              lt(e, t, {}), ct(e, t)
            }
          }

          function _t() {}

          function Pt(e, t, n, r) {
            var o = !1,
              i = null,
              a = "",
              s = !1;
            if (t = function(e) {
                return {
                  idPrefix: void 0 === e ? "" : e,
                  nextFormID: 0,
                  streamingFormat: 0,
                  bootstrapScriptContent: void 0,
                  bootstrapScripts: void 0,
                  bootstrapModules: void 0,
                  instructions: qn,
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
              }(t ? t.identifierPrefix : void 0), e = function(e, t, n, r, o, i, a, s) {
                return (n = nt(t = new Xe(t, n, r, 1 / 0, i, void 0, s, void 0, void 0, void 0, void 0), 0, null, r, !1, !1)).parentFlushed = !0, it(e = et(t, null, e, -1, null, n, null, t.abortableTasks, null, r, null, Ri, null, !1)), t.pingedTasks.push(e), t
              }(e, t, function(e, t) {
                var n = e.idPrefix,
                  r = [],
                  o = e.bootstrapScriptContent,
                  i = e.bootstrapScripts,
                  a = e.bootstrapModules;
                if (void 0 !== o && r.push("<script>", C(o), "<\/script>"), n = {
                    placeholderPrefix: n + "P:",
                    segmentPrefix: n + "S:",
                    boundaryPrefix: n + "B:",
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
                    nonce: void 0,
                    hoistableState: null,
                    stylesToHoist: !1
                  }, void 0 !== i)
                  for (o = 0; o < i.length; o++) {
                    var s, l = i[o],
                      c = void 0,
                      u = void 0,
                      f = {
                        rel: "preload",
                        as: "script",
                        fetchPriority: "low",
                        nonce: void 0
                      };
                    "string" == typeof l ? f.href = s = l : (f.href = s = l.src, f.integrity = u = "string" == typeof l.integrity ? l.integrity : void 0, f.crossOrigin = c = "string" == typeof l || null == l.crossOrigin ? void 0 : "use-credentials" === l.crossOrigin ? "use-credentials" : ""), ie(e, n, s, f), r.push('<script src="', w(s)), "string" == typeof u && r.push('" integrity="', w(u)), "string" == typeof c && r.push('" crossorigin="', w(c)), r.push('" async=""><\/script>')
                  }
                if (void 0 !== a)
                  for (i = 0; i < a.length; i++) c = s = void 0, u = {
                    rel: "modulepreload",
                    fetchPriority: "low",
                    nonce: void 0
                  }, "string" == typeof(o = a[i]) ? u.href = l = o : (u.href = l = o.src, u.integrity = c = "string" == typeof o.integrity ? o.integrity : void 0, u.crossOrigin = s = "string" == typeof o || null == o.crossOrigin ? void 0 : "use-credentials" === o.crossOrigin ? "use-credentials" : ""), ie(e, n, l, u), r.push('<script type="module" src="', w(l)), "string" == typeof c && r.push('" integrity="', w(c)), "string" == typeof s && r.push('" crossorigin="', w(s)), r.push('" async=""><\/script>');
                return {
                  placeholderPrefix: n.placeholderPrefix,
                  segmentPrefix: n.segmentPrefix,
                  boundaryPrefix: n.boundaryPrefix,
                  startInlineScript: n.startInlineScript,
                  htmlChunks: n.htmlChunks,
                  headChunks: n.headChunks,
                  externalRuntimeScript: n.externalRuntimeScript,
                  bootstrapChunks: n.bootstrapChunks,
                  importMapChunks: n.importMapChunks,
                  onHeaders: n.onHeaders,
                  headers: n.headers,
                  resets: n.resets,
                  charsetChunks: n.charsetChunks,
                  viewportChunks: n.viewportChunks,
                  hoistableChunks: n.hoistableChunks,
                  preconnects: n.preconnects,
                  fontPreloads: n.fontPreloads,
                  highImagePreloads: n.highImagePreloads,
                  styles: n.styles,
                  bootstrapScripts: n.bootstrapScripts,
                  scripts: n.scripts,
                  bulkPreloads: n.bulkPreloads,
                  preloads: n.preloads,
                  stylesToHoist: n.stylesToHoist,
                  generateStaticMarkup: t
                }
              }(t, n), S(rr, null, 0), 0, _t, 0, function() {
                s = !0
              }), function(e) {
                e.flushScheduled = null !== e.destination, Et(e), 10 === e.status && (e.status = 11), null === e.trackedPostpones && Tt(e, 0 === e.pendingRootTasks)
              }(e), Nt(e, r), function(e, t) {
                if (13 === e.status) e.status = Ta, t.destroy(e.fatalError);
                else if (e.status !== Ta && null === e.destination) {
                  e.destination = t;
                  try {
                    jt(e, t)
                  } catch (t) {
                    lt(e, t, {}), ct(e, t)
                  }
                }
              }(e, {
                push: function(e) {
                  return null !== e && (a += e), !0
                },
                destroy: function(e) {
                  o = !0, i = e
                }
              }), o && i !== r) throw i;
            if (!s) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
            return a
          }
          var Vt = n(96540),
            Ut = n(40961),
            Wt = Symbol.for("react.transitional.element"),
            zt = Symbol.for("react.portal"),
            Zt = Symbol.for("react.fragment"),
            $t = Symbol.for("react.strict_mode"),
            Gt = Symbol.for("react.profiler"),
            qt = Symbol.for("react.provider"),
            Yt = Symbol.for("react.consumer"),
            Kt = Symbol.for("react.context"),
            Xt = Symbol.for("react.forward_ref"),
            Jt = Symbol.for("react.suspense"),
            Qt = Symbol.for("react.suspense_list"),
            en = Symbol.for("react.memo"),
            tn = Symbol.for("react.lazy"),
            nn = Symbol.for("react.scope"),
            rn = Symbol.for("react.debug_trace_mode"),
            on = Symbol.for("react.offscreen"),
            an = Symbol.for("react.legacy_hidden"),
            sn = Symbol.for("react.memo_cache_sentinel"),
            ln = Symbol.iterator,
            cn = Array.isArray,
            un = new WeakMap,
            fn = new WeakMap,
            dn = Symbol.for("react.client.reference"),
            hn = Object.assign,
            pn = {}.hasOwnProperty,
            mn = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            gn = {},
            yn = {},
            vn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),
            bn = new Map([
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
            kn = {
              button: !0,
              checkbox: !0,
              image: !0,
              hidden: !0,
              radio: !0,
              reset: !0,
              submit: !0
            },
            wn = {
              "aria-current": 0,
              "aria-description": 0,
              "aria-details": 0,
              "aria-disabled": 0,
              "aria-hidden": 0,
              "aria-invalid": 0,
              "aria-keyshortcuts": 0,
              "aria-label": 0,
              "aria-roledescription": 0,
              "aria-autocomplete": 0,
              "aria-checked": 0,
              "aria-expanded": 0,
              "aria-haspopup": 0,
              "aria-level": 0,
              "aria-modal": 0,
              "aria-multiline": 0,
              "aria-multiselectable": 0,
              "aria-orientation": 0,
              "aria-placeholder": 0,
              "aria-pressed": 0,
              "aria-readonly": 0,
              "aria-required": 0,
              "aria-selected": 0,
              "aria-sort": 0,
              "aria-valuemax": 0,
              "aria-valuemin": 0,
              "aria-valuenow": 0,
              "aria-valuetext": 0,
              "aria-atomic": 0,
              "aria-busy": 0,
              "aria-live": 0,
              "aria-relevant": 0,
              "aria-dropeffect": 0,
              "aria-grabbed": 0,
              "aria-activedescendant": 0,
              "aria-colcount": 0,
              "aria-colindex": 0,
              "aria-colspan": 0,
              "aria-controls": 0,
              "aria-describedby": 0,
              "aria-errormessage": 0,
              "aria-flowto": 0,
              "aria-labelledby": 0,
              "aria-owns": 0,
              "aria-posinset": 0,
              "aria-rowcount": 0,
              "aria-rowindex": 0,
              "aria-rowspan": 0,
              "aria-setsize": 0
            },
            xn = {},
            Cn = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Sn = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Tn = !1,
            Fn = {
              accept: "accept",
              acceptcharset: "acceptCharset",
              "accept-charset": "acceptCharset",
              accesskey: "accessKey",
              action: "action",
              allowfullscreen: "allowFullScreen",
              alt: "alt",
              as: "as",
              async: "async",
              autocapitalize: "autoCapitalize",
              autocomplete: "autoComplete",
              autocorrect: "autoCorrect",
              autofocus: "autoFocus",
              autoplay: "autoPlay",
              autosave: "autoSave",
              capture: "capture",
              cellpadding: "cellPadding",
              cellspacing: "cellSpacing",
              challenge: "challenge",
              charset: "charSet",
              checked: "checked",
              children: "children",
              cite: "cite",
              class: "className",
              classid: "classID",
              classname: "className",
              cols: "cols",
              colspan: "colSpan",
              content: "content",
              contenteditable: "contentEditable",
              contextmenu: "contextMenu",
              controls: "controls",
              controlslist: "controlsList",
              coords: "coords",
              crossorigin: "crossOrigin",
              dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
              data: "data",
              datetime: "dateTime",
              default: "default",
              defaultchecked: "defaultChecked",
              defaultvalue: "defaultValue",
              defer: "defer",
              dir: "dir",
              disabled: "disabled",
              disablepictureinpicture: "disablePictureInPicture",
              disableremoteplayback: "disableRemotePlayback",
              download: "download",
              draggable: "draggable",
              enctype: "encType",
              enterkeyhint: "enterKeyHint",
              fetchpriority: "fetchPriority",
              for: "htmlFor",
              form: "form",
              formmethod: "formMethod",
              formaction: "formAction",
              formenctype: "formEncType",
              formnovalidate: "formNoValidate",
              formtarget: "formTarget",
              frameborder: "frameBorder",
              headers: "headers",
              height: "height",
              hidden: "hidden",
              high: "high",
              href: "href",
              hreflang: "hrefLang",
              htmlfor: "htmlFor",
              httpequiv: "httpEquiv",
              "http-equiv": "httpEquiv",
              icon: "icon",
              id: "id",
              imagesizes: "imageSizes",
              imagesrcset: "imageSrcSet",
              inert: "inert",
              innerhtml: "innerHTML",
              inputmode: "inputMode",
              integrity: "integrity",
              is: "is",
              itemid: "itemID",
              itemprop: "itemProp",
              itemref: "itemRef",
              itemscope: "itemScope",
              itemtype: "itemType",
              keyparams: "keyParams",
              keytype: "keyType",
              kind: "kind",
              label: "label",
              lang: "lang",
              list: "list",
              loop: "loop",
              low: "low",
              manifest: "manifest",
              marginwidth: "marginWidth",
              marginheight: "marginHeight",
              max: "max",
              maxlength: "maxLength",
              media: "media",
              mediagroup: "mediaGroup",
              method: "method",
              min: "min",
              minlength: "minLength",
              multiple: "multiple",
              muted: "muted",
              name: "name",
              nomodule: "noModule",
              nonce: "nonce",
              novalidate: "noValidate",
              open: "open",
              optimum: "optimum",
              pattern: "pattern",
              placeholder: "placeholder",
              playsinline: "playsInline",
              poster: "poster",
              preload: "preload",
              profile: "profile",
              radiogroup: "radioGroup",
              readonly: "readOnly",
              referrerpolicy: "referrerPolicy",
              rel: "rel",
              required: "required",
              reversed: "reversed",
              role: "role",
              rows: "rows",
              rowspan: "rowSpan",
              sandbox: "sandbox",
              scope: "scope",
              scoped: "scoped",
              scrolling: "scrolling",
              seamless: "seamless",
              selected: "selected",
              shape: "shape",
              size: "size",
              sizes: "sizes",
              span: "span",
              spellcheck: "spellCheck",
              src: "src",
              srcdoc: "srcDoc",
              srclang: "srcLang",
              srcset: "srcSet",
              start: "start",
              step: "step",
              style: "style",
              summary: "summary",
              tabindex: "tabIndex",
              target: "target",
              title: "title",
              type: "type",
              usemap: "useMap",
              value: "value",
              width: "width",
              wmode: "wmode",
              wrap: "wrap",
              about: "about",
              accentheight: "accentHeight",
              "accent-height": "accentHeight",
              accumulate: "accumulate",
              additive: "additive",
              alignmentbaseline: "alignmentBaseline",
              "alignment-baseline": "alignmentBaseline",
              allowreorder: "allowReorder",
              alphabetic: "alphabetic",
              amplitude: "amplitude",
              arabicform: "arabicForm",
              "arabic-form": "arabicForm",
              ascent: "ascent",
              attributename: "attributeName",
              attributetype: "attributeType",
              autoreverse: "autoReverse",
              azimuth: "azimuth",
              basefrequency: "baseFrequency",
              baselineshift: "baselineShift",
              "baseline-shift": "baselineShift",
              baseprofile: "baseProfile",
              bbox: "bbox",
              begin: "begin",
              bias: "bias",
              by: "by",
              calcmode: "calcMode",
              capheight: "capHeight",
              "cap-height": "capHeight",
              clip: "clip",
              clippath: "clipPath",
              "clip-path": "clipPath",
              clippathunits: "clipPathUnits",
              cliprule: "clipRule",
              "clip-rule": "clipRule",
              color: "color",
              colorinterpolation: "colorInterpolation",
              "color-interpolation": "colorInterpolation",
              colorinterpolationfilters: "colorInterpolationFilters",
              "color-interpolation-filters": "colorInterpolationFilters",
              colorprofile: "colorProfile",
              "color-profile": "colorProfile",
              colorrendering: "colorRendering",
              "color-rendering": "colorRendering",
              contentscripttype: "contentScriptType",
              contentstyletype: "contentStyleType",
              cursor: "cursor",
              cx: "cx",
              cy: "cy",
              d: "d",
              datatype: "datatype",
              decelerate: "decelerate",
              descent: "descent",
              diffuseconstant: "diffuseConstant",
              direction: "direction",
              display: "display",
              divisor: "divisor",
              dominantbaseline: "dominantBaseline",
              "dominant-baseline": "dominantBaseline",
              dur: "dur",
              dx: "dx",
              dy: "dy",
              edgemode: "edgeMode",
              elevation: "elevation",
              enablebackground: "enableBackground",
              "enable-background": "enableBackground",
              end: "end",
              exponent: "exponent",
              externalresourcesrequired: "externalResourcesRequired",
              fill: "fill",
              fillopacity: "fillOpacity",
              "fill-opacity": "fillOpacity",
              fillrule: "fillRule",
              "fill-rule": "fillRule",
              filter: "filter",
              filterres: "filterRes",
              filterunits: "filterUnits",
              floodopacity: "floodOpacity",
              "flood-opacity": "floodOpacity",
              floodcolor: "floodColor",
              "flood-color": "floodColor",
              focusable: "focusable",
              fontfamily: "fontFamily",
              "font-family": "fontFamily",
              fontsize: "fontSize",
              "font-size": "fontSize",
              fontsizeadjust: "fontSizeAdjust",
              "font-size-adjust": "fontSizeAdjust",
              fontstretch: "fontStretch",
              "font-stretch": "fontStretch",
              fontstyle: "fontStyle",
              "font-style": "fontStyle",
              fontvariant: "fontVariant",
              "font-variant": "fontVariant",
              fontweight: "fontWeight",
              "font-weight": "fontWeight",
              format: "format",
              from: "from",
              fx: "fx",
              fy: "fy",
              g1: "g1",
              g2: "g2",
              glyphname: "glyphName",
              "glyph-name": "glyphName",
              glyphorientationhorizontal: "glyphOrientationHorizontal",
              "glyph-orientation-horizontal": "glyphOrientationHorizontal",
              glyphorientationvertical: "glyphOrientationVertical",
              "glyph-orientation-vertical": "glyphOrientationVertical",
              glyphref: "glyphRef",
              gradienttransform: "gradientTransform",
              gradientunits: "gradientUnits",
              hanging: "hanging",
              horizadvx: "horizAdvX",
              "horiz-adv-x": "horizAdvX",
              horizoriginx: "horizOriginX",
              "horiz-origin-x": "horizOriginX",
              ideographic: "ideographic",
              imagerendering: "imageRendering",
              "image-rendering": "imageRendering",
              in2: "in2",
              in: "in",
              inlist: "inlist",
              intercept: "intercept",
              k1: "k1",
              k2: "k2",
              k3: "k3",
              k4: "k4",
              k: "k",
              kernelmatrix: "kernelMatrix",
              kernelunitlength: "kernelUnitLength",
              kerning: "kerning",
              keypoints: "keyPoints",
              keysplines: "keySplines",
              keytimes: "keyTimes",
              lengthadjust: "lengthAdjust",
              letterspacing: "letterSpacing",
              "letter-spacing": "letterSpacing",
              lightingcolor: "lightingColor",
              "lighting-color": "lightingColor",
              limitingconeangle: "limitingConeAngle",
              local: "local",
              markerend: "markerEnd",
              "marker-end": "markerEnd",
              markerheight: "markerHeight",
              markermid: "markerMid",
              "marker-mid": "markerMid",
              markerstart: "markerStart",
              "marker-start": "markerStart",
              markerunits: "markerUnits",
              markerwidth: "markerWidth",
              mask: "mask",
              maskcontentunits: "maskContentUnits",
              maskunits: "maskUnits",
              mathematical: "mathematical",
              mode: "mode",
              numoctaves: "numOctaves",
              offset: "offset",
              opacity: "opacity",
              operator: "operator",
              order: "order",
              orient: "orient",
              orientation: "orientation",
              origin: "origin",
              overflow: "overflow",
              overlineposition: "overlinePosition",
              "overline-position": "overlinePosition",
              overlinethickness: "overlineThickness",
              "overline-thickness": "overlineThickness",
              paintorder: "paintOrder",
              "paint-order": "paintOrder",
              panose1: "panose1",
              "panose-1": "panose1",
              pathlength: "pathLength",
              patterncontentunits: "patternContentUnits",
              patterntransform: "patternTransform",
              patternunits: "patternUnits",
              pointerevents: "pointerEvents",
              "pointer-events": "pointerEvents",
              points: "points",
              pointsatx: "pointsAtX",
              pointsaty: "pointsAtY",
              pointsatz: "pointsAtZ",
              popover: "popover",
              popovertarget: "popoverTarget",
              popovertargetaction: "popoverTargetAction",
              prefix: "prefix",
              preservealpha: "preserveAlpha",
              preserveaspectratio: "preserveAspectRatio",
              primitiveunits: "primitiveUnits",
              property: "property",
              r: "r",
              radius: "radius",
              refx: "refX",
              refy: "refY",
              renderingintent: "renderingIntent",
              "rendering-intent": "renderingIntent",
              repeatcount: "repeatCount",
              repeatdur: "repeatDur",
              requiredextensions: "requiredExtensions",
              requiredfeatures: "requiredFeatures",
              resource: "resource",
              restart: "restart",
              result: "result",
              results: "results",
              rotate: "rotate",
              rx: "rx",
              ry: "ry",
              scale: "scale",
              security: "security",
              seed: "seed",
              shaperendering: "shapeRendering",
              "shape-rendering": "shapeRendering",
              slope: "slope",
              spacing: "spacing",
              specularconstant: "specularConstant",
              specularexponent: "specularExponent",
              speed: "speed",
              spreadmethod: "spreadMethod",
              startoffset: "startOffset",
              stddeviation: "stdDeviation",
              stemh: "stemh",
              stemv: "stemv",
              stitchtiles: "stitchTiles",
              stopcolor: "stopColor",
              "stop-color": "stopColor",
              stopopacity: "stopOpacity",
              "stop-opacity": "stopOpacity",
              strikethroughposition: "strikethroughPosition",
              "strikethrough-position": "strikethroughPosition",
              strikethroughthickness: "strikethroughThickness",
              "strikethrough-thickness": "strikethroughThickness",
              string: "string",
              stroke: "stroke",
              strokedasharray: "strokeDasharray",
              "stroke-dasharray": "strokeDasharray",
              strokedashoffset: "strokeDashoffset",
              "stroke-dashoffset": "strokeDashoffset",
              strokelinecap: "strokeLinecap",
              "stroke-linecap": "strokeLinecap",
              strokelinejoin: "strokeLinejoin",
              "stroke-linejoin": "strokeLinejoin",
              strokemiterlimit: "strokeMiterlimit",
              "stroke-miterlimit": "strokeMiterlimit",
              strokewidth: "strokeWidth",
              "stroke-width": "strokeWidth",
              strokeopacity: "strokeOpacity",
              "stroke-opacity": "strokeOpacity",
              suppresscontenteditablewarning: "suppressContentEditableWarning",
              suppresshydrationwarning: "suppressHydrationWarning",
              surfacescale: "surfaceScale",
              systemlanguage: "systemLanguage",
              tablevalues: "tableValues",
              targetx: "targetX",
              targety: "targetY",
              textanchor: "textAnchor",
              "text-anchor": "textAnchor",
              textdecoration: "textDecoration",
              "text-decoration": "textDecoration",
              textlength: "textLength",
              textrendering: "textRendering",
              "text-rendering": "textRendering",
              to: "to",
              transform: "transform",
              transformorigin: "transformOrigin",
              "transform-origin": "transformOrigin",
              typeof: "typeof",
              u1: "u1",
              u2: "u2",
              underlineposition: "underlinePosition",
              "underline-position": "underlinePosition",
              underlinethickness: "underlineThickness",
              "underline-thickness": "underlineThickness",
              unicode: "unicode",
              unicodebidi: "unicodeBidi",
              "unicode-bidi": "unicodeBidi",
              unicoderange: "unicodeRange",
              "unicode-range": "unicodeRange",
              unitsperem: "unitsPerEm",
              "units-per-em": "unitsPerEm",
              unselectable: "unselectable",
              valphabetic: "vAlphabetic",
              "v-alphabetic": "vAlphabetic",
              values: "values",
              vectoreffect: "vectorEffect",
              "vector-effect": "vectorEffect",
              version: "version",
              vertadvy: "vertAdvY",
              "vert-adv-y": "vertAdvY",
              vertoriginx: "vertOriginX",
              "vert-origin-x": "vertOriginX",
              vertoriginy: "vertOriginY",
              "vert-origin-y": "vertOriginY",
              vhanging: "vHanging",
              "v-hanging": "vHanging",
              videographic: "vIdeographic",
              "v-ideographic": "vIdeographic",
              viewbox: "viewBox",
              viewtarget: "viewTarget",
              visibility: "visibility",
              vmathematical: "vMathematical",
              "v-mathematical": "vMathematical",
              vocab: "vocab",
              widths: "widths",
              wordspacing: "wordSpacing",
              "word-spacing": "wordSpacing",
              writingmode: "writingMode",
              "writing-mode": "writingMode",
              x1: "x1",
              x2: "x2",
              x: "x",
              xchannelselector: "xChannelSelector",
              xheight: "xHeight",
              "x-height": "xHeight",
              xlinkactuate: "xlinkActuate",
              "xlink:actuate": "xlinkActuate",
              xlinkarcrole: "xlinkArcrole",
              "xlink:arcrole": "xlinkArcrole",
              xlinkhref: "xlinkHref",
              "xlink:href": "xlinkHref",
              xlinkrole: "xlinkRole",
              "xlink:role": "xlinkRole",
              xlinkshow: "xlinkShow",
              "xlink:show": "xlinkShow",
              xlinktitle: "xlinkTitle",
              "xlink:title": "xlinkTitle",
              xlinktype: "xlinkType",
              "xlink:type": "xlinkType",
              xmlbase: "xmlBase",
              "xml:base": "xmlBase",
              xmllang: "xmlLang",
              "xml:lang": "xmlLang",
              xmlns: "xmlns",
              "xml:space": "xmlSpace",
              xmlnsxlink: "xmlnsXlink",
              "xmlns:xlink": "xmlnsXlink",
              xmlspace: "xmlSpace",
              y1: "y1",
              y2: "y2",
              y: "y",
              ychannelselector: "yChannelSelector",
              z: "z",
              zoomandpan: "zoomAndPan"
            },
            An = {},
            Ln = /^on./,
            Rn = /^on[^A-Z]/,
            En = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Mn = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            In = /^(?:webkit|moz|o)[A-Z]/,
            On = /^-ms-/,
            Hn = /-(.)/g,
            Bn = /;\s*$/,
            jn = {},
            Dn = {},
            Nn = !1,
            _n = !1,
            Pn = /["'&<>]/,
            Vn = /([A-Z])/g,
            Un = /^ms-/,
            Wn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,
            zn = Vt.I,
            Zn = Ut.B,
            $n = Object.freeze({
              pending: !1,
              data: null,
              method: null,
              action: null
            }),
            Gn = Zn.d;
          Zn.d = {
            f: Gn.f,
            r: Gn.r,
            D: function(e) {
              var t = Fa || null;
              if (t) {
                var n, r, o = t.resumableState,
                  i = t.renderState;
                "string" == typeof e && e && (o.dnsResources.hasOwnProperty(e) || (o.dnsResources[e] = Qn, (r = (o = i.headers) && o.remainingCapacity > 0) && (n = "<" + le(e) + ">; rel=dns-prefetch", r = (o.remainingCapacity -= n.length + 2) >= 0), r ? (i.resets.dns[e] = Qn, o.preconnects && (o.preconnects += ", "), o.preconnects += n) : (D(n = [], {
                  href: e,
                  rel: "dns-prefetch"
                }), i.preconnects.add(n))), Dt(t))
              } else Gn.D(e)
            },
            C: function(e, t) {
              var n = Fa || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if ("string" == typeof e && e) {
                  var i, a, s = "use-credentials" === t ? "credentials" : "string" == typeof t ? "anonymous" : "default";
                  r.connectResources[s].hasOwnProperty(e) || (r.connectResources[s][e] = Qn, (a = (r = o.headers) && r.remainingCapacity > 0) && (a = "<" + le(e) + ">; rel=preconnect", "string" == typeof t && (a += '; crossorigin="' + ue(t, "crossOrigin") + '"'), i = a, a = (r.remainingCapacity -= i.length + 2) >= 0), a ? (o.resets.connect[s][e] = Qn, r.preconnects && (r.preconnects += ", "), r.preconnects += i) : (D(s = [], {
                    rel: "preconnect",
                    href: e,
                    crossOrigin: t
                  }), o.preconnects.add(s))), Dt(n)
                }
              } else Gn.C(e, t)
            },
            L: function(e, t, n) {
              var r = Fa || null;
              if (r) {
                var o = r.resumableState,
                  i = r.renderState;
                if (t && e) {
                  switch (t) {
                    case "image":
                      if (n) var a = n.imageSrcSet,
                        s = n.imageSizes,
                        l = n.fetchPriority;
                      var c, u = a ? a + "\n" + (s || "") : e;
                      if (o.imageResources.hasOwnProperty(u)) return;
                      o.imageResources[u] = er, (o = i.headers) && o.remainingCapacity > 0 && "high" === l && (c = se(e, t, n), (o.remainingCapacity -= c.length + 2) >= 0) ? (i.resets.image[u] = er, o.highImagePreloads && (o.highImagePreloads += ", "), o.highImagePreloads += c) : (D(o = [], hn({
                        rel: "preload",
                        href: a ? void 0 : e,
                        as: t
                      }, n)), "high" === l ? i.highImagePreloads.add(o) : (i.bulkPreloads.add(o), i.preloads.images.set(u, o)));
                      break;
                    case "style":
                      if (o.styleResources.hasOwnProperty(e)) return;
                      D(a = [], hn({
                        rel: "preload",
                        href: e,
                        as: t
                      }, n)), o.styleResources[e] = !n || "string" != typeof n.crossOrigin && "string" != typeof n.integrity ? er : [n.crossOrigin, n.integrity], i.preloads.stylesheets.set(e, a), i.bulkPreloads.add(a);
                      break;
                    case "script":
                      if (o.scriptResources.hasOwnProperty(e)) return;
                      a = [], i.preloads.scripts.set(e, a), i.bulkPreloads.add(a), D(a, hn({
                        rel: "preload",
                        href: e,
                        as: t
                      }, n)), o.scriptResources[e] = !n || "string" != typeof n.crossOrigin && "string" != typeof n.integrity ? er : [n.crossOrigin, n.integrity];
                      break;
                    default:
                      if (o.unknownResources.hasOwnProperty(t)) {
                        if ((a = o.unknownResources[t]).hasOwnProperty(e)) return
                      } else a = {}, o.unknownResources[t] = a;
                      a[e] = er, (o = i.headers) && o.remainingCapacity > 0 && "font" === t && (u = se(e, t, n), (o.remainingCapacity -= u.length + 2) >= 0) ? (i.resets.font[e] = er, o.fontPreloads && (o.fontPreloads += ", "), o.fontPreloads += u) : "font" === (D(o = [], e = hn({
                        rel: "preload",
                        href: e,
                        as: t
                      }, n)), t) ? i.fontPreloads.add(o) : i.bulkPreloads.add(o)
                  }
                  Dt(r)
                }
              } else Gn.L(e, t, n)
            },
            m: function(e, t) {
              var n = Fa || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if (e) {
                  var i = t && "string" == typeof t.as ? t.as : "script";
                  if ("script" === i) {
                    if (r.moduleScriptResources.hasOwnProperty(e)) return;
                    i = [], r.moduleScriptResources[e] = !t || "string" != typeof t.crossOrigin && "string" != typeof t.integrity ? er : [t.crossOrigin, t.integrity], o.preloads.moduleScripts.set(e, i)
                  } else {
                    if (r.moduleUnknownResources.hasOwnProperty(i)) {
                      var a = r.unknownResources[i];
                      if (a.hasOwnProperty(e)) return
                    } else a = {}, r.moduleUnknownResources[i] = a;
                    i = [], a[e] = er
                  }
                  D(i, hn({
                    rel: "modulepreload",
                    href: e
                  }, t)), o.bulkPreloads.add(i), Dt(n)
                }
              } else Gn.m(e, t)
            },
            X: function(e, t) {
              var n = Fa || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if (e) {
                  var i = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
                  i !== Qn && (r.scriptResources[e] = Qn, t = hn({
                    src: e,
                    async: !0
                  }, t), i && (2 === i.length && ae(t, i), e = o.preloads.scripts.get(e)) && (e.length = 0), e = [], o.scripts.add(e), V(e, t), Dt(n))
                }
              } else Gn.X(e, t)
            },
            S: function(e, t, n) {
              var r = Fa || null;
              if (r) {
                var o = r.resumableState,
                  i = r.renderState;
                if (e) {
                  t = t || "default";
                  var a = i.styles.get(t),
                    s = o.styleResources.hasOwnProperty(e) ? o.styleResources[e] : void 0;
                  s !== Qn && (o.styleResources[e] = Qn, a || (a = {
                    precedence: w(t),
                    rules: [],
                    hrefs: [],
                    sheets: new Map
                  }, i.styles.set(t, a)), t = {
                    state: oi,
                    props: hn({
                      rel: "stylesheet",
                      href: e,
                      "data-precedence": t
                    }, n)
                  }, s && (2 === s.length && ae(t.props, s), (i = i.preloads.stylesheets.get(e)) && i.length > 0 ? i.length = 0 : t.state = ii), a.sheets.set(e, t), Dt(r))
                }
              } else Gn.S(e, t, n)
            },
            M: function(e, t) {
              var n = Fa || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if (e) {
                  var i = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
                  i !== Qn && (r.moduleScriptResources[e] = Qn, t = hn({
                    src: e,
                    type: "module",
                    async: !0
                  }, t), i && (2 === i.length && ae(t, i), e = o.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], o.scripts.add(e), V(e, t), Dt(n))
                }
              } else Gn.M(e, t)
            }
          };
          var qn = 0,
            Yn = 1,
            Kn = 2,
            Xn = 4,
            Jn = 8,
            Qn = null,
            er = [];
          Object.freeze(er);
          var tr = /(<\/|<)(s)(cript)/gi,
            nr = {},
            rr = 0,
            or = 1,
            ir = 2,
            ar = 3,
            sr = 4,
            lr = 5,
            cr = 6,
            ur = 7,
            fr = 8,
            dr = new Map,
            hr = ' style="',
            pr = ":",
            mr = ";",
            gr = " ",
            yr = '="',
            vr = '"',
            br = '=""',
            kr = w("javascript:throw new Error('React form unexpectedly submitted.')"),
            wr = ">",
            xr = "/>",
            Cr = !1,
            Sr = !1,
            Tr = !1,
            Fr = !1,
            Ar = !1,
            Lr = !1,
            Rr = !1,
            Er = !1,
            Mr = !1,
            Ir = !1,
            Or = !1,
            Hr = 'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});',
            Br = /(<\/|<)(s)(tyle)/gi,
            jr = "\n",
            Dr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
            Nr = new Map,
            _r = new Map,
            Pr = '<template id="',
            Vr = '"></template>',
            Ur = "\x3c!--$--\x3e",
            Wr = '\x3c!--$?--\x3e<template id="',
            zr = '"></template>',
            Zr = "\x3c!--$!--\x3e",
            $r = "\x3c!--/$--\x3e",
            Gr = "<template",
            qr = '"',
            Yr = ' data-dgst="',
            Kr = ' data-msg="',
            Xr = ' data-stck="',
            Jr = ' data-cstck="',
            Qr = "></template>",
            eo = '<div hidden id="',
            to = '">',
            no = "</div>",
            ro = '<svg aria-hidden="true" style="display:none" id="',
            oo = '">',
            io = "</svg>",
            ao = '<math aria-hidden="true" style="display:none" id="',
            so = '">',
            lo = "</math>",
            co = '<table hidden id="',
            uo = '">',
            fo = "</table>",
            ho = '<table hidden><tbody id="',
            po = '">',
            mo = "</tbody></table>",
            go = '<table hidden><tr id="',
            yo = '">',
            vo = "</tr></table>",
            bo = '<table hidden><colgroup id="',
            ko = '">',
            wo = "</colgroup></table>",
            xo = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
            Co = '$RS("',
            So = '","',
            To = '")<\/script>',
            Fo = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("',
            Ao = '$RC("',
            Lo = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("',
            Ro = '$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("',
            Eo = '$RR("',
            Mo = '","',
            Io = '",',
            Oo = '"',
            Ho = ")<\/script>",
            Bo = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("',
            jo = '$RX("',
            Do = '"',
            No = ",",
            _o = ")<\/script>",
            Po = /[<\u2028\u2029]/g,
            Vo = /[&><\u2028\u2029]/g,
            Uo = '<style media="not all" data-precedence="',
            Wo = '" data-href="',
            zo = '">',
            Zo = "</style>",
            $o = !1,
            Go = !0,
            qo = [],
            Yo = '<style data-precedence="',
            Ko = '" data-href="',
            Xo = " ",
            Jo = '">',
            Qo = "</style>",
            ei = "[",
            ti = ",[",
            ni = ",",
            ri = "]",
            oi = 0,
            ii = 1,
            ai = 2,
            si = 3,
            li = /[<>\r\n]/g,
            ci = /["';,\r\n]/g,
            ui = "",
            fi = function() {}.bind,
            di = Symbol.for("react.client.reference"),
            hi = {};
          Object.freeze(hi);
          var pi, mi = {},
            gi = null,
            yi = {},
            vi = {},
            bi = new Set,
            ki = new Set,
            wi = new Set,
            xi = new Set,
            Ci = new Set,
            Si = new Set,
            Ti = new Set,
            Fi = new Set,
            Ai = new Set,
            Li = {
              isMounted: function() {
                return !1
              },
              enqueueSetState: function(e, t, n) {
                var r = e.W;
                null === r.queue ? Se(e, "setState") : (r.queue.push(t), null != n && Ce(n))
              },
              enqueueReplaceState: function(e, t, n) {
                (e = e.W).replace = !0, e.queue = [t], null != n && Ce(n)
              },
              enqueueForceUpdate: function(e, t) {
                null === e.W.queue ? Se(e, "forceUpdate") : null != t && Ce(t)
              }
            },
            Ri = {
              id: 1,
              overflow: ""
            },
            Ei = Math.clz32 ? Math.clz32 : function(e) {
              return 0 == (e >>>= 0) ? 32 : 31 - (Mi(e) / Ii | 0) | 0
            },
            Mi = Math.log,
            Ii = Math.LN2,
            Oi = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"),
            Hi = null,
            Bi = "function" == typeof Object.is ? Object.is : function(e, t) {
              return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            },
            ji = null,
            Di = null,
            Ni = null,
            _i = null,
            Pi = null,
            Vi = null,
            Ui = !1,
            Wi = !1,
            zi = 0,
            Zi = 0,
            $i = -1,
            Gi = 0,
            qi = null,
            Yi = null,
            Ki = 0,
            Xi = !1,
            Ji = {
              readContext: Oe,
              use: function(e) {
                if (null !== e && "object" == typeof e) {
                  if ("function" == typeof e.then) return Ve(e);
                  if (e.$$typeof === Kt) return Oe(e)
                }
                throw Error("An unsupported type was passed to use(): " + e)
              },
              useContext: function(e) {
                return pi = "useContext", Le(), e.V
              },
              useMemo: je,
              useReducer: Be,
              useRef: function(e) {
                ji = Le();
                var t = (Vi = Ee()).memoizedState;
                return null === t ? (Object.seal(e = {
                  current: e
                }), Vi.memoizedState = e) : t
              },
              useState: function(e) {
                return pi = "useState", Be(He, e)
              },
              useInsertionEffect: We,
              useLayoutEffect: We,
              useCallback: function(e, t) {
                return je(function() {
                  return e
                }, t)
              },
              useImperativeHandle: We,
              useEffect: We,
              useDebugValue: We,
              useDeferredValue: function(e, t) {
                return Le(), void 0 !== t ? t : e
              },
              useTransition: function() {
                return Le(), [!1, Ne]
              },
              useId: function() {
                var e = Di.treeContext,
                  t = e.overflow;
                e = ((e = e.id) & ~(1 << 32 - Ei(e) - 1)).toString(32) + t;
                var n = aa;
                if (null === n) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
                return t = zi++, e = ":" + n.idPrefix + "R" + e, t > 0 && (e += "H" + t.toString(32)), e + ":"
              },
              useSyncExternalStore: function(e, t, n) {
                if (void 0 === n) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
                return n()
              },
              useCacheRefresh: function() {
                return Ue
              },
              useMemoCache: function(e) {
                for (var t = Array(e), n = 0; e > n; n++) t[n] = sn;
                return t
              },
              useHostTransitionStatus: function() {
                return Le(), $n
              },
              useOptimistic: function(e) {
                return Le(), [e, _e]
              }
            };
          Ji.useFormState = Pe, Ji.useActionState = Pe;
          var Qi, ea, ta, na, ra, oa, ia, aa = null,
            sa = null,
            la = {
              getCacheForType: function() {
                throw Error("Not implemented.")
              },
              getOwner: function() {
                return null === sa ? null : sa.componentStack
              }
            },
            ca = 0;
          ze.O = !0;
          var ua, fa, da = !1,
            ha = new("function" == typeof WeakMap ? WeakMap : Map),
            pa = {
              "react-stack-bottom-frame": function(e, t, n) {
                return e(t, n)
              }
            },
            ma = pa["react-stack-bottom-frame"].bind(pa),
            ga = {
              "react-stack-bottom-frame": function(e) {
                return e.render()
              }
            },
            ya = ga["react-stack-bottom-frame"].bind(ga),
            va = {
              "react-stack-bottom-frame": function(e) {
                return (0, e.h)(e.u)
              }
            },
            ba = va["react-stack-bottom-frame"].bind(va),
            ka = 4,
            wa = 0,
            xa = 1,
            Ca = 2,
            Sa = 5,
            Ta = 14,
            Fa = null,
            Aa = {},
            La = {},
            Ra = {},
            Ea = {},
            Ma = !1,
            Ia = !1,
            Oa = !1;
          t.renderToStaticMarkup = function(e, t) {
            return Pt(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
          }, t.renderToString = function(e, t) {
            return Pt(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
          }, t.version = "19.0.0"
        }()
      },
      59373: (e, t, n) => {
        "use strict";
        ! function() {
          function e(e, t, n, r) {
            return t + ("s" === n ? "\\73 " : "\\53 ") + r
          }

          function r(e, t, n, r) {
            return t + ("s" === n ? "\\u0073" : "\\u0053") + r
          }

          function o(e) {
            return {}.toString.call(e).replace(/^\[object (.*)\]$/, function(e, t) {
              return t
            })
          }

          function i(e) {
            var t = JSON.stringify(e);
            return '"' + e + '"' === t ? e : t
          }

          function a(e) {
            switch (typeof e) {
              case "string":
                return JSON.stringify(e.length > 10 ? e.slice(0, 10) + "..." : e);
              case "object":
                return wn(e) ? "[...]" : null !== e && e.$$typeof === Sn ? "client" : "Object" === (e = o(e)) ? "{...}" : e;
              case "function":
                return e.$$typeof === Sn ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
              default:
                return e + ""
            }
          }

          function s(e) {
            if ("string" == typeof e) return e;
            switch (e) {
              case fn:
                return "Suspense";
              case dn:
                return "SuspenseList"
            }
            if ("object" == typeof e) switch (e.$$typeof) {
              case un:
                return s(e.render);
              case hn:
                return s(e.type);
              case pn:
                var t = e.u;
                e = e.h;
                try {
                  return s(e(t))
                } catch {}
            }
            return ""
          }

          function l(e, t) {
            var n = o(e);
            if ("Object" !== n && "Array" !== n) return n;
            var r = -1,
              c = 0;
            if (wn(e))
              if (Cn.has(e)) {
                var u = Cn.get(e);
                n = "<" + s(u) + ">";
                for (var f = 0; f < e.length; f++) {
                  var d = e[f];
                  d = "string" == typeof d ? d : "object" == typeof d && null !== d ? "{" + l(d) + "}" : "{" + a(d) + "}", "" + f === t ? (r = n.length, c = d.length, n += d) : n = 15 > d.length && 40 > n.length + d.length ? n + d : n + "{...}"
                }
                n += "</" + s(u) + ">"
              } else {
                for (n = "[", u = 0; u < e.length; u++) u > 0 && (n += ", "), f = "object" == typeof(f = e[u]) && null !== f ? l(f) : a(f), "" + u === t ? (r = n.length, c = f.length, n += f) : n = 10 > f.length && 40 > n.length + f.length ? n + f : n + "...";
                n += "]"
              }
            else if (e.$$typeof === tn) n = "<" + s(e.type) + "/>";
            else {
              if (e.$$typeof === Sn) return "client";
              if (xn.has(e)) {
                for (n = "<" + (s(n = xn.get(e)) || "..."), u = Object.keys(e), f = 0; f < u.length; f++) {
                  n += " ", n += i(d = u[f]) + "=";
                  var h = e[d],
                    p = d === t && "object" == typeof h && null !== h ? l(h) : a(h);
                  "string" != typeof h && (p = "{" + p + "}"), d === t ? (r = n.length, c = p.length, n += p) : n = 10 > p.length && 40 > n.length + p.length ? n + p : n + "..."
                }
                n += ">"
              } else {
                for (n = "{", u = Object.keys(e), f = 0; f < u.length; f++) f > 0 && (n += ", "), n += i(d = u[f]) + ": ", h = "object" == typeof(h = e[d]) && null !== h ? l(h) : a(h), d === t ? (r = n.length, c = h.length, n += h) : n = 10 > h.length && 40 > n.length + h.length ? n + h : n + "...";
                n += "}"
              }
            }
            return void 0 === t ? n : r > -1 && c > 0 ? "\n  " + n + "\n  " + (e = " ".repeat(r) + "^".repeat(c)) : "\n  " + n
          }

          function c(e, t) {
            var n = 3 & e.length,
              r = e.length - n,
              o = t;
            for (t = 0; r > t;) {
              var i = 255 & e.charCodeAt(t) | (255 & e.charCodeAt(++t)) << 8 | (255 & e.charCodeAt(++t)) << 16 | (255 & e.charCodeAt(++t)) << 24;
              ++t, o = 27492 + (65535 & (o = 5 * (65535 & (o = (o ^= i = 461845907 * (65535 & (i = (i = 3432918353 * (65535 & i) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295) << 15 | i >>> 17)) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + (((o >>> 16) + 58964 & 65535) << 16)
            }
            switch (i = 0, n) {
              case 3:
                i ^= (255 & e.charCodeAt(t + 2)) << 16;
              case 2:
                i ^= (255 & e.charCodeAt(t + 1)) << 8;
              case 1:
                o ^= 461845907 * (65535 & (i = (i = 3432918353 * (65535 & (i ^= 255 & e.charCodeAt(t))) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295) << 15 | i >>> 17)) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295
            }
            return o ^= e.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, ((o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295) ^ o >>> 16) >>> 0
          }

          function u(e) {
            Fn.push(e), Tn.port2.postMessage(null)
          }

          function f(e) {
            setTimeout(function() {
              throw e
            })
          }

          function d(e, t) {
            if (0 !== t.byteLength)
              if (t.byteLength > 2048) En > 0 && (e.enqueue(new Uint8Array(Rn.buffer, 0, En)), Rn = new Uint8Array(2048), En = 0), e.enqueue(t);
              else {
                var n = Rn.length - En;
                n < t.byteLength && (0 === n ? e.enqueue(Rn) : (Rn.set(t.subarray(0, n), En), e.enqueue(Rn), t = t.subarray(n)), Rn = new Uint8Array(2048), En = 0), Rn.set(t, En), En += t.byteLength
              }
          }

          function h(e, t) {
            return d(e, t), !0
          }

          function p(e) {
            Rn && En > 0 && (e.enqueue(new Uint8Array(Rn.buffer, 0, En)), Rn = null, En = 0)
          }

          function m(e) {
            return Mn.encode(e)
          }

          function g(e) {
            return (e = Mn.encode(e)).byteLength > 2048 && console.error("precomputed chunks must be smaller than the view size configured for this host. This is a bug in React."), e
          }

          function y(e, t) {
            "function" == typeof e.error ? e.error(t) : e.close()
          }

          function v(e) {
            return "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object"
          }

          function b(e) {
            try {
              return k(e), !1
            } catch {
              return !0
            }
          }

          function k(e) {
            return "" + e
          }

          function w(e, t) {
            if (b(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, v(e)), k(e)
          }

          function x(e, t) {
            if (b(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, v(e)), k(e)
          }

          function C(e) {
            if (b(e)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", v(e)), k(e)
          }

          function S(e) {
            return !!On.call(jn, e) || !On.call(Bn, e) && (Hn.test(e) ? jn[e] = !0 : (Bn[e] = !0, console.error("Invalid attribute name: `%s`", e), !1))
          }

          function T(e, t) {
            _n[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || null == t.value || console.error("select" === e ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || null == t.checked || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
          }

          function F(e, t) {
            if (On.call(Vn, t) && Vn[t]) return !0;
            if (Wn.test(t)) {
              if (e = "aria-" + t.slice(4).toLowerCase(), null == (e = Pn.hasOwnProperty(e) ? e : null)) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Vn[t] = !0;
              if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), Vn[t] = !0
            }
            if (Un.test(t)) {
              if (e = t.toLowerCase(), null == (e = Pn.hasOwnProperty(e) ? e : null)) return Vn[t] = !0, !1;
              t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), Vn[t] = !0)
            }
            return !0
          }

          function A(e, t, n, r) {
            if (On.call($n, t) && $n[t]) return !0;
            var o = t.toLowerCase();
            if ("onfocusin" === o || "onfocusout" === o) return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), $n[t] = !0;
            if ("function" == typeof n && ("form" === e && "action" === t || "input" === e && "formAction" === t || "button" === e && "formAction" === t)) return !0;
            if (null != r) {
              if (e = r.possibleRegistrationNames, r.registrationNameDependencies.hasOwnProperty(t)) return !0;
              if (null != (r = e.hasOwnProperty(o) ? e[o] : null)) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, r), $n[t] = !0;
              if (Gn.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), $n[t] = !0
            } else if (Gn.test(t)) return qn.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), $n[t] = !0;
            if (Yn.test(t) || Kn.test(t)) return !0;
            if ("innerhtml" === o) return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), $n[t] = !0;
            if ("aria" === o) return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), $n[t] = !0;
            if ("is" === o && null != n && "string" != typeof n) return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), $n[t] = !0;
            if ("number" == typeof n && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), $n[t] = !0;
            if (Zn.hasOwnProperty(o)) {
              if ((o = Zn[o]) !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, o), $n[t] = !0
            } else if (t !== o) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), $n[t] = !0;
            switch (t) {
              case "dangerouslySetInnerHTML":
              case "children":
              case "style":
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "defaultValue":
              case "defaultChecked":
              case "innerHTML":
              case "ref":
              case "innerText":
              case "textContent":
                return !0
            }
            switch (typeof n) {
              case "boolean":
                switch (t) {
                  case "autoFocus":
                  case "checked":
                  case "multiple":
                  case "muted":
                  case "selected":
                  case "contentEditable":
                  case "spellCheck":
                  case "draggable":
                  case "value":
                  case "autoReverse":
                  case "externalResourcesRequired":
                  case "focusable":
                  case "preserveAlpha":
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
                  case "capture":
                  case "download":
                  case "inert":
                    return !0;
                  default:
                    return "data-" === (o = t.toLowerCase().slice(0, 5)) || "aria-" === o || (n ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), $n[t] = !0)
                }
              case "function":
              case "symbol":
                return $n[t] = !0, !1;
              case "string":
                if ("false" === n || "true" === n) {
                  switch (t) {
                    case "checked":
                    case "selected":
                    case "multiple":
                    case "muted":
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
                    case "inert":
                      break;
                    default:
                      return !0
                  }
                  console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, "false" === n ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), $n[t] = !0
                }
            }
            return !0
          }

          function L(e) {
            return e.replace(Qn, function(e, t) {
              return t.toUpperCase()
            })
          }

          function R(e) {
            if ("boolean" == typeof e || "number" == typeof e || "bigint" == typeof e) return "" + e;
            C(e), e = "" + e;
            var t = ir.exec(e);
            if (t) {
              var n, r = "",
                o = 0;
              for (n = t.index; n < e.length; n++) {
                switch (e.charCodeAt(n)) {
                  case 34:
                    t = "&quot;";
                    break;
                  case 38:
                    t = "&amp;";
                    break;
                  case 39:
                    t = "&#x27;";
                    break;
                  case 60:
                    t = "&lt;";
                    break;
                  case 62:
                    t = "&gt;";
                    break;
                  default:
                    continue
                }
                o !== n && (r += e.slice(o, n)), o = n + 1, r += t
              }
              e = o !== n ? r + e.slice(o, n) : r
            }
            return e
          }

          function E(e) {
            return lr.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
          }

          function M(e) {
            return C(e), ("" + e).replace(Lr, r)
          }

          function I(e, t, n, r, o, i) {
            var a = void 0 === t ? kr : g('<script nonce="' + R(t) + '">'),
              s = e.idPrefix;
            n = [];
            var l = e.bootstrapScriptContent,
              c = e.bootstrapScripts,
              u = e.bootstrapModules;
            if (void 0 !== l && n.push(a, m(M(l)), wr), l = [], void 0 !== r && (l.push(Rr), l.push(m(M(JSON.stringify(r)))), l.push(Er)), o && "number" == typeof i && 0 >= i && console.error("React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.", 0 === i ? "zero" : i), r = o ? {
                preconnects: "",
                fontPreloads: "",
                highImagePreloads: "",
                remainingCapacity: 2 + ("number" == typeof i ? i : 2e3)
              } : null, o = {
                placeholderPrefix: g(s + "P:"),
                segmentPrefix: g(s + "S:"),
                boundaryPrefix: g(s + "B:"),
                startInlineScript: a,
                htmlChunks: null,
                headChunks: null,
                externalRuntimeScript: null,
                bootstrapChunks: n,
                importMapChunks: l,
                onHeaders: o,
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
                nonce: t,
                hoistableState: null,
                stylesToHoist: !1
              }, void 0 !== c)
              for (r = 0; r < c.length; r++) {
                l = s = void 0;
                var f = {
                  rel: "preload",
                  as: "script",
                  fetchPriority: "low",
                  nonce: t
                };
                "string" == typeof(i = c[r]) ? f.href = a = i: (f.href = a = i.src, f.integrity = l = "string" == typeof i.integrity ? i.integrity : void 0, f.crossOrigin = s = "string" == typeof i || null == i.crossOrigin ? void 0 : "use-credentials" === i.crossOrigin ? "use-credentials" : ""), ye(e, o, a, f), n.push(xr, m(R(a))), t && n.push(Sr, m(R(t))), "string" == typeof l && n.push(Tr, m(R(l))), "string" == typeof s && n.push(Fr, m(R(s))), n.push(Ar)
              }
            if (void 0 !== u)
              for (c = 0; c < u.length; c++) s = a = void 0, l = {
                rel: "modulepreload",
                fetchPriority: "low",
                nonce: t
              }, "string" == typeof(r = u[c]) ? l.href = i = r : (l.href = i = r.src, l.integrity = s = "string" == typeof r.integrity ? r.integrity : void 0, l.crossOrigin = a = "string" == typeof r || null == r.crossOrigin ? void 0 : "use-credentials" === r.crossOrigin ? "use-credentials" : ""), ye(e, o, i, l), n.push(Cr, m(R(i))), t && n.push(Sr, m(R(t))), "string" == typeof s && n.push(Tr, m(R(s))), "string" == typeof a && n.push(Fr, m(R(a))), n.push(Ar);
            return o
          }

          function O(e, t, n, r, o) {
            return {
              idPrefix: void 0 === e ? "" : e,
              nextFormID: 0,
              streamingFormat: 0,
              bootstrapScriptContent: n,
              bootstrapScripts: r,
              bootstrapModules: o,
              instructions: hr,
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

          function H(e, t, n) {
            return {
              insertionMode: e,
              selectedValue: t,
              tagScope: n
            }
          }

          function B(e) {
            return H("http://www.w3.org/2000/svg" === e ? Br : "http://www.w3.org/1998/Math/MathML" === e ? jr : Ir, null, 0)
          }

          function j(e, t, n) {
            switch (t) {
              case "noscript":
                return H(Hr, null, 1 | e.tagScope);
              case "select":
                return H(Hr, null != n.value ? n.value : n.defaultValue, e.tagScope);
              case "svg":
                return H(Br, null, e.tagScope);
              case "picture":
                return H(Hr, null, 2 | e.tagScope);
              case "math":
                return H(jr, null, e.tagScope);
              case "foreignObject":
                return H(Hr, null, e.tagScope);
              case "table":
                return H(Dr, null, e.tagScope);
              case "thead":
              case "tbody":
              case "tfoot":
                return H(Nr, null, e.tagScope);
              case "colgroup":
                return H(Pr, null, e.tagScope);
              case "tr":
                return H(_r, null, e.tagScope)
            }
            return e.insertionMode < Dr ? e.insertionMode === Ir ? H("html" === t ? Or : Hr, null, e.tagScope) : e.insertionMode === Or ? H(Hr, null, e.tagScope) : e : H(Hr, null, e.tagScope)
          }

          function D(e, t, n, r) {
            return "" === t ? r : (r && e.push(Vr), e.push(m(R(t))), !0)
          }

          function N(e, t) {
            if ("object" != typeof t) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
            var n, r = !0;
            for (n in t)
              if (On.call(t, n)) {
                var o = t[n];
                if (null != o && "boolean" != typeof o && "" !== o) {
                  if (0 === n.indexOf("--")) {
                    var i = m(R(n));
                    x(o, n), o = m(R(("" + o).trim()))
                  } else {
                    var a = o;
                    if ((i = n).indexOf("-") > -1) {
                      var s = i;
                      tr.hasOwnProperty(s) && tr[s] || (tr[s] = !0, console.error("Unsupported style property %s. Did you mean %s?", s, L(s.replace(Jn, "ms-"))))
                    } else if (Xn.test(i)) s = i, tr.hasOwnProperty(s) && tr[s] || (tr[s] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
                    else if (er.test(a)) {
                      s = i;
                      var l = a;
                      nr.hasOwnProperty(l) && nr[l] || (nr[l] = !0, console.error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', s, l.replace(er, "")))
                    }
                    "number" == typeof a && (isNaN(a) ? rr || (rr = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", i)) : isFinite(a) || or || (or = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", i))), i = n, void 0 !== (a = Ur.get(i)) || (a = g(R(i.replace(ar, "-$1").toLowerCase().replace(sr, "-ms-"))), Ur.set(i, a)), i = a, "number" == typeof o ? o = 0 === o || Dn.has(n) ? m("" + o) : m(o + "px") : (x(o, n), o = m(R(("" + o).trim())))
                  }
                  r ? (r = !1, e.push(Wr, i, zr, o)) : e.push(Zr, i, zr, o)
                }
              } r || e.push(qr)
          }

          function _(e, t, n) {
            n && "function" != typeof n && "symbol" != typeof n && e.push($r, m(t), Yr)
          }

          function P(e, t, n) {
            "function" != typeof n && "symbol" != typeof n && "boolean" != typeof n && e.push($r, m(t), Gr, m(R(n)), qr)
          }

          function V(e, t) {
            this.push(Xr), U(e), P(this, "name", t), P(this, "value", e), this.push(Qr)
          }

          function U(e) {
            if ("string" != typeof e) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.")
          }

          function W(e, t) {
            if ("function" == typeof t.$$FORM_ACTION) {
              var n = e.nextFormID++;
              e = e.idPrefix + n;
              try {
                var r = t.$$FORM_ACTION(e);
                if (r) {
                  var o = r.data;
                  o?.forEach(U)
                }
                return r
              } catch (e) {
                if ("object" == typeof e && null !== e && "function" == typeof e.then) throw e;
                console.error("Failed to serialize an action for progressive enhancement:\n%s", e)
              }
            }
            return null
          }

          function z(e, t, n, r, o, i, a, s) {
            var l = null;
            if ("function" == typeof r) {
              null === s || lo || (lo = !0, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')), null === o && null === i || uo || (uo = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), null === a || co || (co = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
              var c = W(t, r);
              null !== c ? (s = c.name, r = c.action || "", o = c.encType, i = c.method, a = c.target, l = c.data) : (e.push($r, m("formAction"), Gr, Kr, qr), a = i = o = r = s = null, q(t, n))
            }
            return null != s && Z(e, "name", s), null != r && Z(e, "formAction", r), null != o && Z(e, "formEncType", o), null != i && Z(e, "formMethod", i), null != a && Z(e, "formTarget", a), l
          }

          function Z(e, t, n) {
            switch (t) {
              case "className":
                P(e, "class", n);
                break;
              case "tabIndex":
                P(e, "tabindex", n);
                break;
              case "dir":
              case "role":
              case "viewBox":
              case "width":
              case "height":
                P(e, t, n);
                break;
              case "style":
                N(e, n);
                break;
              case "src":
              case "href":
                if ("" === n) {
                  console.error("src" === t ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', t, t);
                  break
                }
              case "action":
              case "formAction":
                if (null == n || "function" == typeof n || "symbol" == typeof n || "boolean" == typeof n) break;
                w(n, t), n = E("" + n), e.push($r, m(t), Gr, m(R(n)), qr);
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
                _(e, t.toLowerCase(), n);
                break;
              case "xlinkHref":
                if ("function" == typeof n || "symbol" == typeof n || "boolean" == typeof n) break;
                w(n, t), n = E("" + n), e.push($r, m("xlink:href"), Gr, m(R(n)), qr);
                break;
              case "contentEditable":
              case "spellCheck":
              case "draggable":
              case "value":
              case "autoReverse":
              case "externalResourcesRequired":
              case "focusable":
              case "preserveAlpha":
                "function" != typeof n && "symbol" != typeof n && e.push($r, m(t), Gr, m(R(n)), qr);
                break;
              case "inert":
                "" !== n || Mr[t] || (Mr[t] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", t));
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
                n && "function" != typeof n && "symbol" != typeof n && e.push($r, m(t), Yr);
                break;
              case "capture":
              case "download":
                !0 === n ? e.push($r, m(t), Yr) : !1 !== n && "function" != typeof n && "symbol" != typeof n && e.push($r, m(t), Gr, m(R(n)), qr);
                break;
              case "cols":
              case "rows":
              case "size":
              case "span":
                "function" != typeof n && "symbol" != typeof n && !isNaN(n) && n >= 1 && e.push($r, m(t), Gr, m(R(n)), qr);
                break;
              case "rowSpan":
              case "start":
                "function" == typeof n || "symbol" == typeof n || isNaN(n) || e.push($r, m(t), Gr, m(R(n)), qr);
                break;
              case "xlinkActuate":
                P(e, "xlink:actuate", n);
                break;
              case "xlinkArcrole":
                P(e, "xlink:arcrole", n);
                break;
              case "xlinkRole":
                P(e, "xlink:role", n);
                break;
              case "xlinkShow":
                P(e, "xlink:show", n);
                break;
              case "xlinkTitle":
                P(e, "xlink:title", n);
                break;
              case "xlinkType":
                P(e, "xlink:type", n);
                break;
              case "xmlBase":
                P(e, "xml:base", n);
                break;
              case "xmlLang":
                P(e, "xml:lang", n);
                break;
              case "xmlSpace":
                P(e, "xml:space", n);
                break;
              default:
                if ((2 >= t.length || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && S(t = Nn.get(t) || t)) {
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return;
                    case "boolean":
                      var r = t.toLowerCase().slice(0, 5);
                      if ("data-" !== r && "aria-" !== r) return
                  }
                  e.push($r, m(t), Gr, m(R(n)), qr)
                }
            }
          }

          function $(e, t, n) {
            if (null != t) {
              if (null != n) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              if ("object" != typeof t || !("P" in t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
              null != (t = t.P) && (C(t), e.push(m("" + t)))
            }
          }

          function G(e, t) {
            var n = e[t];
            null != n && (n = wn(n), e.multiple && !n ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && n && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t))
          }

          function q(e, t) {
            (16 & e.instructions) === hr && (e.instructions |= 16, t.bootstrapChunks.unshift(t.startInlineScript, ho, wr))
          }

          function Y(e, t) {
            for (var n in e.push(te("link")), t)
              if (On.call(t, n)) {
                var r = t[n];
                if (null != r) switch (n) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                  default:
                    Z(e, n, r)
                }
              } return e.push(Qr), null
          }

          function K(t) {
            return C(t), ("" + t).replace(go, e)
          }

          function X(e, t, n) {
            for (var r in e.push(te(n)), t)
              if (On.call(t, r)) {
                var o = t[r];
                if (null != o) switch (r) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                  default:
                    Z(e, r, o)
                }
              } return e.push(Qr), null
          }

          function J(e, t) {
            e.push(te("title"));
            var n, r = null,
              o = null;
            for (n in t)
              if (On.call(t, n)) {
                var i = t[n];
                if (null != i) switch (n) {
                  case "children":
                    r = i;
                    break;
                  case "dangerouslySetInnerHTML":
                    o = i;
                    break;
                  default:
                    Z(e, n, i)
                }
              } return e.push(Jr), "function" != typeof(t = Array.isArray(r) ? 2 > r.length ? r[0] : null : r) && "symbol" != typeof t && null != t && e.push(m(R("" + t))), $(e, o, r), e.push(ne("title")), null
          }

          function Q(e, t) {
            e.push(te("script"));
            var n, r = null,
              o = null;
            for (n in t)
              if (On.call(t, n)) {
                var i = t[n];
                if (null != i) switch (n) {
                  case "children":
                    r = i;
                    break;
                  case "dangerouslySetInnerHTML":
                    o = i;
                    break;
                  default:
                    Z(e, n, i)
                }
              } return e.push(Jr), null != r && "string" != typeof r && console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", t = "number" == typeof r ? "a number for children" : Array.isArray(r) ? "an array for children" : "something unexpected for children"), $(e, o, r), "string" == typeof r && e.push(m(M(r))), e.push(ne("script")), null
          }

          function ee(e, t, n) {
            e.push(te(n));
            var r, o = n = null;
            for (r in t)
              if (On.call(t, r)) {
                var i = t[r];
                if (null != i) switch (r) {
                  case "children":
                    n = i;
                    break;
                  case "dangerouslySetInnerHTML":
                    o = i;
                    break;
                  default:
                    Z(e, r, i)
                }
              } return e.push(Jr), $(e, o, n), "string" == typeof n ? (e.push(m(R(n))), null) : n
          }

          function te(e) {
            var t = bo.get(e);
            if (void 0 === t) {
              if (!vo.test(e)) throw Error("Invalid tag: " + e);
              t = g("<" + e), bo.set(e, t)
            }
            return t
          }

          function ne(e) {
            var t = wo.get(e);
            return void 0 === t && (t = g("</" + e + ">"), wo.set(e, t)), t
          }

          function re(e, t) {
            t = t.bootstrapChunks;
            for (var n = 0; n < t.length - 1; n++) d(e, t[n]);
            return n >= t.length || (n = t[n], t.length = 0, h(e, n))
          }

          function oe(e, t, n) {
            if (d(e, To), null === n) throw Error("An ID must have been assigned before we can complete the boundary.");
            return d(e, t.boundaryPrefix), d(e, m(n.toString(16))), h(e, Fo)
          }

          function ie(e) {
            return JSON.stringify(e).replace(wi, function(e) {
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

          function ae(e) {
            return JSON.stringify(e).replace(xi, function(e) {
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

          function se(e) {
            var t = e.rules,
              n = e.hrefs;
            t.length > 0 && 0 === n.length && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
            var r = 0;
            if (n.length) {
              for (d(this, Ci), d(this, e.precedence), d(this, Si); r < n.length - 1; r++) d(this, n[r]), d(this, Ii);
              for (d(this, n[r]), d(this, Ti), r = 0; r < t.length; r++) d(this, t[r]);
              Li = h(this, Fi), Ai = !0, t.length = 0, n.length = 0
            }
          }

          function le(e) {
            return e.state !== Vi && (Ai = !0)
          }

          function ce(e, t, n) {
            return Ai = !1, Li = !0, t.styles.forEach(se, e), t.stylesheets.forEach(le), Ai && (n.stylesToHoist = !0), Li
          }

          function ue(e) {
            for (var t = 0; t < e.length; t++) d(this, e[t]);
            e.length = 0
          }

          function fe(e) {
            Y(Ri, e.props);
            for (var t = 0; t < Ri.length; t++) d(this, Ri[t]);
            Ri.length = 0, e.state = Vi
          }

          function de(e) {
            var t = e.sheets.size > 0;
            e.sheets.forEach(fe, this), e.sheets.clear();
            var n = e.rules,
              r = e.hrefs;
            if (!t || r.length) {
              if (d(this, Ei), d(this, e.precedence), e = 0, r.length) {
                for (d(this, Mi); e < r.length - 1; e++) d(this, r[e]), d(this, Ii);
                d(this, r[e])
              }
              for (d(this, Oi), e = 0; e < n.length; e++) d(this, n[e]);
              d(this, Hi), n.length = 0, r.length = 0
            }
          }

          function he(e) {
            if (e.state === _i) {
              e.state = Pi;
              var t = e.props;
              for (Y(Ri, {
                  rel: "preload",
                  as: "style",
                  href: e.props.href,
                  crossOrigin: t.crossOrigin,
                  fetchPriority: t.fetchPriority,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy
                }), e = 0; e < Ri.length; e++) d(this, Ri[e]);
              Ri.length = 0
            }
          }

          function pe(e) {
            e.sheets.forEach(he, this), e.sheets.clear()
          }

          function me(e, t, n) {
            var r = t.toLowerCase();
            switch (typeof n) {
              case "function":
              case "symbol":
                return
            }
            switch (t) {
              case "innerHTML":
              case "dangerouslySetInnerHTML":
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "style":
              case "ref":
                return;
              case "className":
                w(n, r = "class"), t = "" + n;
                break;
              case "hidden":
                if (!1 === n) return;
                t = "";
                break;
              case "src":
              case "href":
                w(n = E(n), r), t = "" + n;
                break;
              default:
                if (t.length > 2 && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]) || !S(t)) return;
                w(n, r), t = "" + n
            }
            d(e, Di), d(e, m(ae(r))), d(e, Di), d(e, m(ae(t)))
          }

          function ge() {
            return {
              styles: new Set,
              stylesheets: new Set
            }
          }

          function ye(e, t, n, r) {
            (e.scriptResources.hasOwnProperty(n) || e.moduleScriptResources.hasOwnProperty(n)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', n), e.scriptResources[n] = vr, e.moduleScriptResources[n] = vr, Y(e = [], r), t.bootstrapScripts.add(e)
          }

          function ve(e, t) {
            null == e.crossOrigin && (e.crossOrigin = t[0]), null == e.integrity && (e.integrity = t[1])
          }

          function be(e, t, n) {
            for (var r in t = "<" + (e = ke(e)) + '>; rel=preload; as="' + (t = xe(t, "as")) + '"', n) On.call(n, r) && "string" == typeof(e = n[r]) && (t += "; " + r.toLowerCase() + '="' + xe(e, r) + '"');
            return t
          }

          function ke(e) {
            return w(e, "href"), ("" + e).replace(Wi, we)
          }

          function we(e) {
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

          function xe(e, t) {
            return b(e) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", t, v(e)), k(e)), ("" + e).replace(zi, Ce)
          }

          function Ce(e) {
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

          function Se(e) {
            this.styles.add(e)
          }

          function Te(e) {
            this.stylesheets.add(e)
          }

          function Fe(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.$$typeof === $i ? null : e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
              case rn:
                return "Fragment";
              case nn:
                return "Portal";
              case an:
                return "Profiler";
              case on:
                return "StrictMode";
              case fn:
                return "Suspense";
              case dn:
                return "SuspenseList"
            }
            if ("object" == typeof e) switch ("number" == typeof e.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
              case cn:
                return (e.displayName || "Context") + ".Provider";
              case ln:
                return (e.l.displayName || "Context") + ".Consumer";
              case un:
                var t = e.render;
                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case hn:
                return null !== (t = e.displayName || null) ? t : Fe(e.type) || "Memo";
              case pn:
                t = e.u, e = e.h;
                try {
                  return Fe(e(t))
                } catch {}
            }
            return null
          }

          function Ae(e, t) {
            if (e !== t) {
              e.context.$ = e.parentValue, e = e.parent;
              var n = t.parent;
              if (null === e) {
                if (null !== n) throw Error("The stacks must reach the root at the same time. This is a bug in React.")
              } else {
                if (null === n) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                Ae(e, n)
              }
              t.context.$ = t.value
            }
          }

          function Le(e) {
            e.context.$ = e.parentValue, null !== (e = e.parent) && Le(e)
          }

          function Re(e) {
            var t = e.parent;
            null !== t && Re(t), e.context.$ = e.value
          }

          function Ee(e, t) {
            if (e.context.$ = e.parentValue, null === (e = e.parent)) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
            e.depth === t.depth ? Ae(e, t) : Ee(e, t)
          }

          function Me(e, t) {
            var n = t.parent;
            if (null === n) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
            e.depth === n.depth ? Ae(e, n) : Me(e, n), t.context.$ = t.value
          }

          function Ie(e) {
            var t = Ki;
            t !== e && (null === t ? Re(e) : null === e ? Le(t) : t.depth === e.depth ? Ae(t, e) : t.depth > e.depth ? Ee(t, e) : Me(t, e), Ki = e)
          }

          function Oe(e) {
            if (null !== e && "function" != typeof e) {
              var t = e + "";
              sa.has(t) || (sa.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e))
            }
          }

          function He(e, t) {
            var n = (e = (e = e.constructor) && Fe(e) || "ReactClass") + "." + t;
            Xi[n] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", t, e), Xi[n] = !0)
          }

          function Be(e, t, n) {
            var r = e.id;
            e = e.overflow;
            var o = 32 - ua(r) - 1;
            r &= ~(1 << o), n += 1;
            var i = 32 - ua(t) + o;
            if (i > 30) {
              var a = o - o % 5;
              return i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, {
                id: 1 << 32 - ua(t) + o | n << o | r,
                overflow: i + e
              }
            }
            return {
              id: 1 << i | n << o | r,
              overflow: e
            }
          }

          function je() {}

          function De() {
            if (null === pa) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
            var e = pa;
            return pa = null, e
          }

          function Ne() {
            if (null === ga) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
            return Ma && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"), ga
          }

          function _e() {
            if (Ea > 0) throw Error("Rendered more hooks than during the previous render");
            return {
              memoizedState: null,
              queue: null,
              next: null
            }
          }

          function Pe() {
            return null === wa ? null === ka ? (xa = !1, ka = wa = _e()) : (xa = !0, wa = ka) : null === wa.next ? (xa = !1, wa = wa.next = _e()) : (xa = !0, wa = wa.next), wa
          }

          function Ve() {
            var e = La;
            return La = null, e
          }

          function Ue() {
            Ma = !1, ba = va = ya = ga = null, Ca = !1, ka = null, Ea = 0, wa = Ra = null
          }

          function We(e) {
            return Ma && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e.$
          }

          function ze(e, t) {
            return "function" == typeof t ? t(e) : t
          }

          function Ze(e, t, n) {
            if (e !== ze && (qi = "useReducer"), ga = Ne(), wa = Pe(), xa) {
              if (t = (n = wa.queue).dispatch, null !== Ra) {
                var r = Ra.get(n);
                if (void 0 !== r) {
                  Ra.delete(n), n = wa.memoizedState;
                  do {
                    var o = r.action;
                    Ma = !0, n = e(n, o), Ma = !1, r = r.next
                  } while (null !== r);
                  return wa.memoizedState = n, [n, t]
                }
              }
              return [wa.memoizedState, t]
            }
            return Ma = !0, e = e === ze ? "function" == typeof t ? t() : t : void 0 !== n ? n(t) : t, Ma = !1, wa.memoizedState = e, e = (e = wa.queue = {
              last: null,
              dispatch: null
            }).dispatch = Ge.bind(null, ga, e), [wa.memoizedState, e]
          }

          function $e(e, t) {
            if (ga = Ne(), t = void 0 === t ? null : t, null !== (wa = Pe())) {
              var n = wa.memoizedState;
              if (null !== n && null !== t) {
                e: {
                  var r = n[1];
                  if (null === r) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", qi),
                  r = !1;
                  else {
                    t.length !== r.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", qi, "[" + t.join(", ") + "]", "[" + r.join(", ") + "]");
                    for (var o = 0; o < r.length && o < t.length; o++)
                      if (!ma(t[o], r[o])) {
                        r = !1;
                        break e
                      } r = !0
                  }
                }
                if (r) return n[0]
              }
            }
            return Ma = !0, e = e(), Ma = !1, wa.memoizedState = [e, t], e
          }

          function Ge(e, t, n) {
            if (Ea >= 25) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            if (e === ga)
              if (Ca = !0, e = {
                  action: n,
                  next: null
                }, null === Ra && (Ra = new Map), void 0 === (n = Ra.get(t))) Ra.set(t, e);
              else {
                for (t = n; null !== t.next;) t = t.next;
                t.next = e
              }
          }

          function qe() {
            throw Error("startTransition cannot be called during server rendering.")
          }

          function Ye() {
            throw Error("Cannot update optimistic state while rendering.")
          }

          function Ke(e, t, n) {
            Ne();
            var r = Ta++,
              o = va;
            if ("function" == typeof e.$$FORM_ACTION) {
              var i = null,
                a = ba;
              o = o.formState;
              var s = e.$$IS_SIGNATURE_EQUAL;
              if (null !== o && "function" == typeof s) {
                var l = o[1];
                s.call(e, o[2], o[3]) && l === (i = void 0 !== n ? "p" + n : "k" + c(JSON.stringify([a, null, r]), 0)) && (Fa = r, t = o[0])
              }
              var u = e.bind(null, t);
              return e = function(e) {
                u(e)
              }, "function" == typeof u.$$FORM_ACTION && (e.$$FORM_ACTION = function(e) {
                e = u.$$FORM_ACTION(e), void 0 !== n && (w(n, "target"), n += "", e.action = n);
                var t = e.data;
                return t && (null === i && (i = void 0 !== n ? "p" + n : "k" + c(JSON.stringify([a, null, r]), 0)), t.append("$ACTION_KEY", i)), e
              }), [t, e, !1]
            }
            var f = e.bind(null, t);
            return [t, function(e) {
              f(e)
            }, !1]
          }

          function Xe(e) {
            var t = Aa;
            return Aa += 1, null === La && (La = []),
              function(e, t, n) {
                switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(je, je), t = n), t.status) {
                  case "fulfilled":
                    return t.value;
                  case "rejected":
                    throw t.reason;
                  default:
                    switch ("string" == typeof t.status ? t.then(je, je) : ((e = t).status = "pending", e.then(function(e) {
                        if ("pending" === t.status) {
                          var n = t;
                          n.status = "fulfilled", n.value = e
                        }
                      }, function(e) {
                        if ("pending" === t.status) {
                          var n = t;
                          n.status = "rejected", n.reason = e
                        }
                      })), t.status) {
                      case "fulfilled":
                        return t.value;
                      case "rejected":
                        throw t.reason
                    }
                    throw pa = t, ha
                }
              }(La, e, t)
          }

          function Je() {
            throw Error("Cache cannot be refreshed during server rendering.")
          }

          function Qe() {}

          function et() {}

          function tt(e) {
            if (void 0 === za) try {
              throw Error()
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              za = t && t[1] || "", Za = e.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : e.stack.indexOf("@") > -1 ? "@unknown:0:0" : ""
            }
            return "\n" + za + e + Za
          }

          function nt(e, t) {
            if (!e || $a) return "";
            var n, r = Ga.get(e);
            if (void 0 !== r) return r;
            $a = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0, n = cr.H, cr.H = null,
              function() {
                if (0 === Wa) {
                  Oa = console.log, Ha = console.info, Ba = console.warn, ja = console.error, Da = console.group, Na = console.groupCollapsed, _a = console.groupEnd;
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: et,
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
                Wa++
              }();
            try {
              var o = {
                DetermineComponentFrameRoot: function() {
                  try {
                    if (t) {
                      var n = function() {
                        throw Error()
                      };
                      if (Object.defineProperty(n.prototype, "props", {
                          set: function() {
                            throw Error()
                          }
                        }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                          Reflect.construct(n, [])
                        } catch (e) {
                          var r = e
                        }
                        Reflect.construct(e, [], n)
                      } else {
                        try {
                          n.call()
                        } catch (e) {
                          r = e
                        }
                        e.call(n.prototype)
                      }
                    } else {
                      try {
                        throw Error()
                      } catch (e) {
                        r = e
                      }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                    }
                  } catch (e) {
                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                  }
                  return [null, null]
                }
              };
              o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
              var i = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
              i && i.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
              });
              var a = o.DetermineComponentFrameRoot(),
                s = a[0],
                l = a[1];
              if (s && l) {
                var c = s.split("\n"),
                  u = l.split("\n");
                for (a = i = 0; i < c.length && !c[i].includes("DetermineComponentFrameRoot");) i++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (i === c.length || a === u.length)
                  for (i = c.length - 1, a = u.length - 1; i >= 1 && a >= 0 && c[i] !== u[a];) a--;
                for (; i >= 1 && a >= 0; i--, a--)
                  if (c[i] !== u[a]) {
                    if (1 !== i || 1 !== a)
                      do {
                        if (i--, 0 > --a || c[i] !== u[a]) {
                          var f = "\n" + c[i].replace(" at new ", " at ");
                          return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), "function" == typeof e && Ga.set(e, f), f
                        }
                      } while (i >= 1 && a >= 0);
                    break
                  }
              }
            } finally {
              $a = !1, cr.H = n,
                function() {
                  if (0 === --Wa) {
                    var e = {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0
                    };
                    Object.defineProperties(console, {
                      log: In({}, e, {
                        value: Oa
                      }),
                      info: In({}, e, {
                        value: Ha
                      }),
                      warn: In({}, e, {
                        value: Ba
                      }),
                      error: In({}, e, {
                        value: ja
                      }),
                      group: In({}, e, {
                        value: Da
                      }),
                      groupCollapsed: In({}, e, {
                        value: Na
                      }),
                      groupEnd: In({}, e, {
                        value: _a
                      })
                    })
                  }
                  0 > Wa && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
                }(), Error.prepareStackTrace = r
            }
            return c = (c = e ? e.displayName || e.name : "") ? tt(c) : "", "function" == typeof e && Ga.set(e, c), c
          }

          function rt(e) {
            if ("string" == typeof e) return tt(e);
            if ("function" == typeof e) return e.prototype && e.prototype.isReactComponent ? e = nt(e, !0) : nt(e, !1);
            if ("object" == typeof e && null !== e) {
              switch (e.$$typeof) {
                case un:
                  return nt(e.render, !1);
                case hn:
                  return nt(e.type, !1);
                case pn:
                  var t = e,
                    n = t.u;
                  t = t.h;
                  try {
                    e = t(n)
                  } catch {
                    return tt("Lazy")
                  }
                  return rt(e)
              }
              if ("string" == typeof e.name) return n = e.env, tt(e.name + (n ? " [" + n + "]" : ""))
            }
            switch (e) {
              case dn:
                return tt("SuspenseList");
              case fn:
                return tt("Suspense")
            }
            return ""
          }

          function ot(e) {
            try {
              var t = "";
              do {
                t += rt(e.type), e = e.parent
              } while (e);
              return t
            } catch (e) {
              return "\nError generating stack: " + e.message + "\n" + e.stack
            }
          }

          function it(e) {
            if ("object" == typeof e && null !== e && "string" == typeof e.environmentName) {
              var t = e.environmentName;
              "string" == typeof(e = [e].slice(0))[0] ? e.splice(0, 1, "%c%s%c " + e[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""): e.splice(0, 0, "%c%s%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""), e.unshift(console), (t = Zi.apply(console.error, e))()
            } else console.error(e);
            return null
          }

          function at() {}

          function st(e, t, n, r, o, i, a, s, l, c, u) {
            var f = new Set;
            this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = void 0 === r ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedRootSegment = null, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === o ? it : o, this.onPostpone = void 0 === c ? at : c, this.onAllReady = void 0 === i ? at : i, this.onShellReady = void 0 === a ? at : a, this.onShellError = void 0 === s ? at : s, this.onFatalError = void 0 === l ? at : l, this.formState = void 0 === u ? null : u, this.didWarnForKey = null
          }

          function lt(e, t, n, r, o, i, a, s, l, c, u, f) {
            return (n = ht(t = new st(t, n, r, o, i, a, s, l, c, u, f), 0, null, r, !1, !1)).parentFlushed = !0, gt(e = ft(t, null, e, -1, null, n, null, t.abortableTasks, null, r, null, ca, null, !1)), t.pingedTasks.push(e), t
          }

          function ct(e, t) {
            e.pingedTasks.push(t), 1 === e.pingedTasks.length && (e.flushScheduled = null !== e.destination, null !== e.trackedPostpones || 10 === e.status ? Ln(function() {
              return Vt(e)
            }) : u(function() {
              return Vt(e)
            }))
          }

          function ut(e, t) {
            return {
              status: ts,
              rootSegmentID: -1,
              parentFlushed: !1,
              pendingTasks: 0,
              completedSegments: [],
              byteSize: 0,
              fallbackAbortableTasks: t,
              errorDigest: null,
              contentState: ge(),
              fallbackState: ge(),
              trackedContentKeyPath: null,
              trackedFallbackNode: null,
              errorMessage: null,
              errorStack: null,
              errorComponentStack: null
            }
          }

          function ft(e, t, n, r, o, i, a, s, l, c, u, f, d, h) {
            e.allPendingTasks++, null === o ? e.pendingRootTasks++ : o.pendingTasks++;
            var p = {
              replay: null,
              node: n,
              childIndex: r,
              ping: function() {
                return ct(e, p)
              },
              blockedBoundary: o,
              blockedSegment: i,
              hoistableState: a,
              abortSet: s,
              keyPath: l,
              formatContext: c,
              context: u,
              treeContext: f,
              componentStack: d,
              thenableState: t,
              isFallback: h
            };
            return s.add(p), p
          }

          function dt(e, t, n, r, o, i, a, s, l, c, u, f, d, h) {
            e.allPendingTasks++, null === i ? e.pendingRootTasks++ : i.pendingTasks++, n.pendingTasks++;
            var p = {
              replay: n,
              node: r,
              childIndex: o,
              ping: function() {
                return ct(e, p)
              },
              blockedBoundary: i,
              blockedSegment: null,
              hoistableState: a,
              abortSet: s,
              keyPath: l,
              formatContext: c,
              context: u,
              treeContext: f,
              componentStack: d,
              thenableState: t,
              isFallback: h
            };
            return s.add(p), p
          }

          function ht(e, t, n, r, o, i) {
            return {
              status: ts,
              id: -1,
              index: t,
              parentFlushed: !1,
              chunks: [],
              children: [],
              parentFormatContext: r,
              boundary: n,
              lastPushedText: o,
              textEmbedded: i
            }
          }

          function pt() {
            return null === Va || null === Va.componentStack ? "" : ot(Va.componentStack)
          }

          function mt(e, t) {
            if (null != t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                "string" == typeof r.name && (e.componentStack = {
                  parent: e.componentStack,
                  type: r,
                  owner: r.owner,
                  stack: null
                })
              }
          }

          function gt(e) {
            var t = e.node;
            if ("object" == typeof t && null !== t) switch (t.$$typeof) {
              case tn:
                var n = t.type,
                  r = t.v;
                mt(e, t.R), e.componentStack = {
                  parent: e.componentStack,
                  type: n,
                  owner: r,
                  stack: null
                };
                break;
              case pn:
                mt(e, t.R);
                break;
              default:
                "function" == typeof t.then && mt(e, t.R)
            }
          }

          function yt(e) {
            var t = {};
            return e && Object.defineProperty(t, "componentStack", {
              configurable: !0,
              enumerable: !0,
              get: function() {
                var n = ot(e);
                return Object.defineProperty(t, "componentStack", {
                  value: n
                }), n
              }
            }), t
          }

          function vt(e, t, n, r, o) {
            e.errorDigest = t, n instanceof Error ? (t = n.message + "", n = n.stack + "") : (t = "object" == typeof n && null !== n ? l(n) : n + "", n = null), o = o ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n", e.errorMessage = o + t, e.errorStack = null !== n ? o + n : null, e.errorComponentStack = r.componentStack
          }

          function bt(e, t, n) {
            if (null == (t = (e = e.onError)(t, n)) || "string" == typeof t) return t;
            console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof t)
          }

          function kt(e, t) {
            var n = e.onShellError,
              r = e.onFatalError;
            n(t), r(t), null !== e.destination ? (e.status = is, y(e.destination, t)) : (e.status = 13, e.fatalError = t)
          }

          function wt(e, t, n, r, o, i) {
            var a = t.thenableState;
            for (t.thenableState = null, ga = {}, ya = t, va = e, ba = n, Ma = !1, Ta = Sa = 0, Fa = -1, Aa = 0, La = a, e = Ya(r, o, i); Ca;) Ca = !1, Ta = Sa = 0, Fa = -1, Aa = 0, Ea += 1, wa = null, e = r(o, i);
            return Ue(), e
          }

          function xt(e, t, n, r, o, i, a) {
            var s = !1;
            if (0 !== i && null !== e.formState) {
              var l = t.blockedSegment;
              if (null !== l) {
                s = !0, l = l.chunks;
                for (var c = 0; i > c; c++) c === a ? l.push(po) : l.push(mo)
              }
            }
            i = t.keyPath, t.keyPath = n, o ? (n = t.treeContext, t.treeContext = Be(n, 1, 0), Mt(e, t, r, -1), t.treeContext = n) : s ? Mt(e, t, r, -1) : Tt(e, t, r, -1), t.keyPath = i
          }

          function Ct(e, t, n, r, o, i) {
            if ("function" == typeof r)
              if (r.prototype && r.prototype.isReactComponent) {
                var a = o;
                if ("ref" in o)
                  for (var s in a = {}, o) "ref" !== s && (a[s] = o[s]);
                var l = r.defaultProps;
                if (l)
                  for (var c in a === o && (a = In({}, a, o)), l) void 0 === a[c] && (a[c] = l[c]);
                var u = a,
                  f = Gi,
                  d = r.contextType;
                if ("contextType" in r && null !== d && (void 0 === d || d.$$typeof !== cn) && !aa.has(r)) {
                  aa.add(r);
                  var h = void 0 === d ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" != typeof d ? " However, it is set to a " + typeof d + "." : d.$$typeof === ln ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.";
                  console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Fe(r) || "Component", h)
                }
                "object" == typeof d && null !== d && (f = d.$);
                var p = new r(u, f);
                if ("function" == typeof r.getDerivedStateFromProps && (null === p.state || void 0 === p.state)) {
                  var g = Fe(r) || "Component";
                  Qi.has(g) || (Qi.add(g), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", g, null === p.state ? "null" : "undefined", g))
                }
                if ("function" == typeof r.getDerivedStateFromProps || "function" == typeof p.getSnapshotBeforeUpdate) {
                  var y = null,
                    v = null,
                    b = null;
                  if ("function" == typeof p.componentWillMount && !0 !== p.componentWillMount.U ? y = "componentWillMount" : "function" == typeof p.UNSAFE_componentWillMount && (y = "UNSAFE_componentWillMount"), "function" == typeof p.componentWillReceiveProps && !0 !== p.componentWillReceiveProps.U ? v = "componentWillReceiveProps" : "function" == typeof p.UNSAFE_componentWillReceiveProps && (v = "UNSAFE_componentWillReceiveProps"), "function" == typeof p.componentWillUpdate && !0 !== p.componentWillUpdate.U ? b = "componentWillUpdate" : "function" == typeof p.UNSAFE_componentWillUpdate && (b = "UNSAFE_componentWillUpdate"), null !== y || null !== v || null !== b) {
                    var k = Fe(r) || "Component",
                      x = "function" == typeof r.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    ta.has(k) || (ta.add(k), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", k, x, null !== y ? "\n  " + y : "", null !== v ? "\n  " + v : "", null !== b ? "\n  " + b : ""))
                  }
                }
                var L = Fe(r) || "Component";
                p.render || (r.prototype && "function" == typeof r.prototype.render ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", L) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", L)), !p.getInitialState || p.getInitialState.isReactClassApproved || p.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", L), p.getDefaultProps && !p.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", L), p.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", L), r.childContextTypes && !ia.has(r) && (ia.add(r), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", L)), r.contextTypes && !oa.has(r) && (oa.add(r), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", L)), "function" == typeof p.componentShouldUpdate && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", L), r.prototype && r.prototype.isPureReactComponent && "u" > typeof p.shouldComponentUpdate && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Fe(r) || "A pure component"), "function" == typeof p.componentDidUnmount && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", L), "function" == typeof p.componentDidReceiveProps && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", L), "function" == typeof p.componentWillRecieveProps && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", L), "function" == typeof p.UNSAFE_componentWillRecieveProps && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", L);
                var M = p.props !== u;
                void 0 !== p.props && M && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", L), p.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", L, L), "function" != typeof p.getSnapshotBeforeUpdate || "function" == typeof p.componentDidUpdate || ea.has(r) || (ea.add(r), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Fe(r))), "function" == typeof p.getDerivedStateFromProps && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", L), "function" == typeof p.getDerivedStateFromError && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", L), "function" == typeof r.getSnapshotBeforeUpdate && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", L);
                var I = p.state;
                I && ("object" != typeof I || wn(I)) && console.error("%s.state: must be set to an object or null", L), "function" == typeof p.getChildContext && "object" != typeof r.childContextTypes && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", L);
                var O = void 0 !== p.state ? p.state : null;
                p.updater = la, p.props = u, p.state = O;
                var H = {
                  queue: [],
                  replace: !1
                };
                p.W = H;
                var B = r.contextType;
                if (p.context = "object" == typeof B && null !== B ? B.$ : Gi, p.state === u) {
                  var D = Fe(r) || "Component";
                  na.has(D) || (na.add(D), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", D))
                }
                var U = r.getDerivedStateFromProps;
                if ("function" == typeof U) {
                  var re = U(u, O);
                  if (void 0 === re) {
                    var oe = Fe(r) || "Component";
                    ra.has(oe) || (ra.add(oe), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", oe))
                  }
                  var ie = null == re ? O : In({}, O, re);
                  p.state = ie
                }
                if ("function" != typeof r.getDerivedStateFromProps && "function" != typeof p.getSnapshotBeforeUpdate && ("function" == typeof p.UNSAFE_componentWillMount || "function" == typeof p.componentWillMount)) {
                  var ae = p.state;
                  if ("function" == typeof p.componentWillMount) {
                    if (!0 !== p.componentWillMount.U) {
                      var se = Fe(r) || "Unknown";
                      Ji[se] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", se), Ji[se] = !0)
                    }
                    p.componentWillMount()
                  }
                  if ("function" == typeof p.UNSAFE_componentWillMount && p.UNSAFE_componentWillMount(), ae !== p.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Fe(r) || "Component"), la.enqueueReplaceState(p, p.state, null)), null !== H.queue && H.queue.length > 0) {
                    var le = H.queue,
                      ce = H.replace;
                    if (H.queue = null, H.replace = !1, ce && 1 === le.length) p.state = le[0];
                    else {
                      for (var ue = ce ? le[0] : p.state, fe = !0, de = ce ? 1 : 0; de < le.length; de++) {
                        var he = le[de],
                          pe = "function" == typeof he ? he.call(p, ue, u, void 0) : he;
                        null != pe && (fe ? (fe = !1, ue = In({}, ue, pe)) : In(ue, pe))
                      }
                      p.state = ue
                    }
                  } else H.queue = null
                }
                var me = Xa(p);
                if (12 === e.status) throw null;
                p.props !== u && (fs || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Fe(r) || "a component"), fs = !0);
                var ge = t.keyPath;
                t.keyPath = n, Tt(e, t, me, -1), t.keyPath = ge
              } else {
                if (r.prototype && "function" == typeof r.prototype.render) {
                  var ye = Fe(r) || "Unknown";
                  ss[ye] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ye, ye), ss[ye] = !0)
                }
                var ke = wt(e, t, n, r, o, void 0);
                if (12 === e.status) throw null;
                var we = 0 !== Sa,
                  xe = Ta,
                  Ce = Fa;
                if (r.contextTypes) {
                  var Se = Fe(r) || "Unknown";
                  ls[Se] || (ls[Se] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", Se))
                }
                if (r && r.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", r.displayName || r.name || "Component"), "function" == typeof r.getDerivedStateFromProps) {
                  var Te = Fe(r) || "Unknown";
                  us[Te] || (console.error("%s: Function components do not support getDerivedStateFromProps.", Te), us[Te] = !0)
                }
                if ("object" == typeof r.contextType && null !== r.contextType) {
                  var Ae = Fe(r) || "Unknown";
                  cs[Ae] || (console.error("%s: Function components do not support contextType.", Ae), cs[Ae] = !0)
                }
                xt(e, t, n, ke, we, xe, Ce)
              }
            else {
              if ("string" != typeof r) {
                switch (r) {
                  case vn:
                  case gn:
                  case on:
                  case an:
                  case rn:
                    var Le = t.keyPath;
                    return t.keyPath = n, Tt(e, t, o.children, -1), void(t.keyPath = Le);
                  case yn:
                    if ("hidden" !== o.mode) {
                      var Re = t.keyPath;
                      t.keyPath = n, Tt(e, t, o.children, -1), t.keyPath = Re
                    }
                    return;
                  case dn:
                    var Ee = t.keyPath;
                    return t.keyPath = n, Tt(e, t, o.children, -1), void(t.keyPath = Ee);
                  case mn:
                    throw Error("ReactDOMServer does not yet support scope components.");
                  case fn:
                    e: if (null !== t.replay) {
                      var Me = t.keyPath;
                      t.keyPath = n;
                      var Ie = o.children;
                      try {
                        Mt(e, t, Ie, -1)
                      } finally {
                        t.keyPath = Me
                      }
                    } else {
                      var Oe = t.keyPath,
                        He = t.blockedBoundary,
                        Be = t.hoistableState,
                        je = t.blockedSegment,
                        De = o.fallback,
                        Ne = o.children,
                        _e = new Set,
                        Pe = ut(0, _e);
                      null !== e.trackedPostpones && (Pe.trackedContentKeyPath = n);
                      var Ve = ht(0, je.chunks.length, Pe, t.formatContext, !1, !1);
                      je.children.push(Ve), je.lastPushedText = !1;
                      var Ue = ht(0, 0, null, t.formatContext, !1, !1);
                      if (Ue.parentFlushed = !0, null !== e.trackedPostpones) {
                        var We = [n[0], "Suspense Fallback", n[2]],
                          ze = [We[1], We[2],
                            [], null
                          ];
                        e.trackedPostpones.workingMap.set(We, ze), Pe.trackedFallbackNode = ze, t.blockedSegment = Ve, t.keyPath = We, Ve.status = 6;
                        try {
                          Mt(e, t, De, -1), Ve.lastPushedText && Ve.textEmbedded && Ve.chunks.push(Vr), Ve.status = ns
                        } catch (t) {
                          throw Ve.status = 12 === e.status ? 3 : 4, t
                        } finally {
                          t.blockedSegment = je, t.keyPath = Oe
                        }
                        var Ze = ft(e, null, Ne, -1, Pe, Ue, Pe.contentState, t.abortSet, n, t.formatContext, t.context, t.treeContext, t.componentStack, t.isFallback);
                        gt(Ze), e.pingedTasks.push(Ze)
                      } else {
                        t.blockedBoundary = Pe, t.hoistableState = Pe.contentState, t.blockedSegment = Ue, t.keyPath = n, Ue.status = 6;
                        try {
                          if (Mt(e, t, Ne, -1), Ue.lastPushedText && Ue.textEmbedded && Ue.chunks.push(Vr), Ue.status = ns, _t(Pe, Ue), 0 === Pe.pendingTasks && Pe.status === ts) {
                            Pe.status = ns;
                            break e
                          }
                        } catch (n) {
                          if (Pe.status = es, 12 === e.status) {
                            Ue.status = 3;
                            var $e = e.fatalError
                          } else Ue.status = 4, $e = n;
                          var Ge = yt(t.componentStack);
                          vt(Pe, bt(e, $e, Ge), $e, Ge, !1), Lt(e, Pe)
                        } finally {
                          t.blockedBoundary = He, t.hoistableState = Be, t.blockedSegment = je, t.keyPath = Oe
                        }
                        var qe = ft(e, null, De, -1, He, Ve, Pe.fallbackState, _e, [n[0], "Suspense Fallback", n[2]], t.formatContext, t.context, t.treeContext, t.componentStack, !0);
                        gt(qe), e.pingedTasks.push(qe)
                      }
                    }
                    return
                }
                if ("object" == typeof r && null !== r) switch (r.$$typeof) {
                  case un:
                    if ("ref" in o) {
                      var Ye = {};
                      for (var Ke in o) "ref" !== Ke && (Ye[Ke] = o[Ke])
                    } else Ye = o;
                    return void xt(e, t, n, wt(e, t, n, r.render, Ye, i), 0 !== Sa, Ta, Fa);
                  case hn:
                    return void Ct(e, t, n, r.type, o, i);
                  case sn:
                  case cn:
                    var Xe = o.value,
                      Je = o.children,
                      Qe = t.context,
                      et = t.keyPath,
                      tt = r.$;
                    r.$ = Xe, void 0 !== r.G && null !== r.G && r.G !== Yi && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r.G = Yi;
                    var nt = {
                      parent: Ki,
                      depth: null === Ki ? 0 : Ki.depth + 1,
                      context: r,
                      parentValue: tt,
                      value: Xe
                    };
                    Ki = nt, t.context = nt, t.keyPath = n, Tt(e, t, Je, -1);
                    var rt = Ki;
                    if (null === rt) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                    rt.context !== r && console.error("The parent context is not the expected context. This is probably a bug in React."), rt.context.$ = rt.parentValue, void 0 !== r.G && null !== r.G && r.G !== Yi && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r.G = Yi;
                    var ot = Ki = rt.parent;
                    return t.context = ot, t.keyPath = et, void(Qe !== t.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React."));
                  case ln:
                    var it = r.l,
                      at = o.children;
                    "function" != typeof at && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
                    var st = at(it.$),
                      lt = t.keyPath;
                    return t.keyPath = n, Tt(e, t, st, -1), void(t.keyPath = lt);
                  case pn:
                    var ct = Qa(r);
                    if (12 === e.status) throw null;
                    return void Ct(e, t, n, ct, o, i)
                }
                var dt = "";
                throw (void 0 === r || "object" == typeof r && null !== r && 0 === Object.keys(r).length) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (null == r ? r : typeof r) + "." + dt)
              }
              var pt = t.blockedSegment;
              if (null === pt) {
                var mt = o.children,
                  kt = t.formatContext,
                  St = t.keyPath;
                t.formatContext = j(kt, r, o), t.keyPath = n, Mt(e, t, mt, -1), t.formatContext = kt, t.keyPath = St
              } else {
                var Ft = function(e, t, n, r, o, i, a, s, l) {
                  (function(e, t) {
                    var n, r = [];
                    for (n in t) F(e, n) || r.push(n);
                    t = r.map(function(e) {
                      return "`" + e + "`"
                    }).join(", "), 1 === r.length ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : r.length > 1 && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e)
                  })(t, n), "input" !== t && "textarea" !== t && "select" !== t || null == n || null !== n.value || zn || (zn = !0, "select" === t && n.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
                  e: if (-1 === t.indexOf("-")) var c = !1;
                    else switch (t) {
                      case "annotation-xml":
                      case "color-profile":
                      case "font-face":
                      case "font-face-src":
                      case "font-face-uri":
                      case "font-face-format":
                      case "font-face-name":
                      case "missing-glyph":
                        c = !1;
                        break e;
                      default:
                        c = !0
                    }
                  switch (c || "string" == typeof n.is || function(e, t) {
                      var n, r = [];
                      for (n in t) A(e, n, t[n], null) || r.push(n);
                      t = r.map(function(e) {
                        return "`" + e + "`"
                      }).join(", "), 1 === r.length ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : r.length > 1 && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e)
                    }(t, n), !n.suppressContentEditableWarning && n.contentEditable && null != n.children && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), a.insertionMode !== Br && a.insertionMode !== jr && -1 === t.indexOf("-") && t.toLowerCase() !== t && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
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
                      e.push(te("a"));
                      var u, f = null,
                        d = null;
                      for (u in n)
                        if (On.call(n, u)) {
                          var h = n[u];
                          if (null != h) switch (u) {
                            case "children":
                              f = h;
                              break;
                            case "dangerouslySetInnerHTML":
                              d = h;
                              break;
                            case "href":
                              "" === h ? P(e, "href", "") : Z(e, u, h);
                              break;
                            default:
                              Z(e, u, h)
                          }
                        } if (e.push(Jr), $(e, d, f), "string" == typeof f) {
                        e.push(m(R(f)));
                        var p = null
                      } else p = f;
                      return p;
                    case "select":
                      T("select", n), G(n, "value"), G(n, "defaultValue"), void 0 === n.value || void 0 === n.defaultValue || no || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), no = !0), e.push(te("select"));
                      var g, y = null,
                        v = null;
                      for (g in n)
                        if (On.call(n, g)) {
                          var b = n[g];
                          if (null != b) switch (g) {
                            case "children":
                              y = b;
                              break;
                            case "dangerouslySetInnerHTML":
                              v = b;
                              break;
                            case "defaultValue":
                            case "value":
                              break;
                            default:
                              Z(e, g, b)
                          }
                        } return e.push(Jr), $(e, v, y), y;
                    case "option":
                      var k = a.selectedValue;
                      e.push(te("option"));
                      var x, L = null,
                        M = null,
                        I = null,
                        O = null;
                      for (x in n)
                        if (On.call(n, x)) {
                          var H = n[x];
                          if (null != H) switch (x) {
                            case "children":
                              L = H;
                              break;
                            case "selected":
                              I = H, ao || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ao = !0);
                              break;
                            case "dangerouslySetInnerHTML":
                              O = H;
                              break;
                            case "value":
                              M = H;
                            default:
                              Z(e, x, H)
                          }
                        } if (null != k) {
                        if (null !== M) {
                          w(M, "value");
                          var B = "" + M
                        } else null === O || io || (io = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), B = function(e) {
                          var t = "";
                          return Qt.Children.forEach(e, function(e) {
                            null != e && (t += e, oo || "string" == typeof e || "number" == typeof e || "bigint" == typeof e || (oo = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))
                          }), t
                        }(L);
                        if (wn(k)) {
                          for (var j = 0; j < k.length; j++)
                            if (w(k[j], "value"), "" + k[j] === B) {
                              e.push(fo);
                              break
                            }
                        } else w(k, "select.value"), "" + k === B && e.push(fo)
                      } else I && e.push(fo);
                      return e.push(Jr), $(e, O, L), L;
                    case "textarea":
                      T("textarea", n), void 0 === n.value || void 0 === n.defaultValue || ro || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), ro = !0), e.push(te("textarea"));
                      var D, U = null,
                        re = null,
                        oe = null;
                      for (D in n)
                        if (On.call(n, D)) {
                          var ie = n[D];
                          if (null != ie) switch (D) {
                            case "children":
                              oe = ie;
                              break;
                            case "value":
                              U = ie;
                              break;
                            case "defaultValue":
                              re = ie;
                              break;
                            case "dangerouslySetInnerHTML":
                              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                            default:
                              Z(e, D, ie)
                          }
                        } if (null === U && null !== re && (U = re), e.push(Jr), null != oe) {
                        if (console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), null != U) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                        if (wn(oe)) {
                          if (oe.length > 1) throw Error("<textarea> can only have at most one child.");
                          C(oe[0]), U = "" + oe[0]
                        }
                        C(oe), U = "" + oe
                      }
                      return "string" == typeof U && "\n" === U[0] && e.push(yo), null !== U && (w(U, "value"), e.push(m(R("" + U)))), null;
                    case "input":
                      T("input", n), e.push(te("input"));
                      var ae, se = null,
                        le = null,
                        ce = null,
                        ue = null,
                        fe = null,
                        de = null,
                        he = null,
                        pe = null,
                        me = null;
                      for (ae in n)
                        if (On.call(n, ae)) {
                          var ge = n[ae];
                          if (null != ge) switch (ae) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                            case "name":
                              se = ge;
                              break;
                            case "formAction":
                              le = ge;
                              break;
                            case "formEncType":
                              ce = ge;
                              break;
                            case "formMethod":
                              ue = ge;
                              break;
                            case "formTarget":
                              fe = ge;
                              break;
                            case "defaultChecked":
                              me = ge;
                              break;
                            case "defaultValue":
                              he = ge;
                              break;
                            case "checked":
                              pe = ge;
                              break;
                            case "value":
                              de = ge;
                              break;
                            default:
                              Z(e, ae, ge)
                          }
                        } null === le || "image" === n.type || "submit" === n.type || so || (so = !0, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
                      var ye = z(e, r, o, le, ce, ue, fe, se);
                      return null === pe || null === me || to || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), to = !0), null === de || null === he || eo || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), eo = !0), null !== pe ? _(e, "checked", pe) : null !== me && _(e, "checked", me), null !== de ? Z(e, "value", de) : null !== he && Z(e, "value", he), e.push(Qr), ye?.forEach(V, e), null;
                    case "button":
                      e.push(te("button"));
                      var ke, we = null,
                        xe = null,
                        Ce = null,
                        Se = null,
                        Te = null,
                        Fe = null,
                        Ae = null;
                      for (ke in n)
                        if (On.call(n, ke)) {
                          var Le = n[ke];
                          if (null != Le) switch (ke) {
                            case "children":
                              we = Le;
                              break;
                            case "dangerouslySetInnerHTML":
                              xe = Le;
                              break;
                            case "name":
                              Ce = Le;
                              break;
                            case "formAction":
                              Se = Le;
                              break;
                            case "formEncType":
                              Te = Le;
                              break;
                            case "formMethod":
                              Fe = Le;
                              break;
                            case "formTarget":
                              Ae = Le;
                              break;
                            default:
                              Z(e, ke, Le)
                          }
                        } null === Se || null == n.type || "submit" === n.type || so || (so = !0, console.error('A button can only specify a formAction along with type="submit" or no type.'));
                      var Re = z(e, r, o, Se, Te, Fe, Ae, Ce);
                      if (e.push(Jr), Re?.forEach(V, e), $(e, xe, we), "string" == typeof we) {
                        e.push(m(R(we)));
                        var Ee = null
                      } else Ee = we;
                      return Ee;
                    case "form":
                      e.push(te("form"));
                      var Me, Ie = null,
                        Oe = null,
                        He = null,
                        Be = null,
                        je = null,
                        De = null;
                      for (Me in n)
                        if (On.call(n, Me)) {
                          var Ne = n[Me];
                          if (null != Ne) switch (Me) {
                            case "children":
                              Ie = Ne;
                              break;
                            case "dangerouslySetInnerHTML":
                              Oe = Ne;
                              break;
                            case "action":
                              He = Ne;
                              break;
                            case "encType":
                              Be = Ne;
                              break;
                            case "method":
                              je = Ne;
                              break;
                            case "target":
                              De = Ne;
                              break;
                            default:
                              Z(e, Me, Ne)
                          }
                        } var _e = null,
                        Pe = null;
                      if ("function" == typeof He) {
                        null === Be && null === je || uo || (uo = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), null === De || co || (co = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
                        var Ve = W(r, He);
                        null !== Ve ? (He = Ve.action || "", Be = Ve.encType, je = Ve.method, De = Ve.target, _e = Ve.data, Pe = Ve.name) : (e.push($r, m("action"), Gr, Kr, qr), De = je = Be = He = null, q(r, o))
                      }
                      if (null != He && Z(e, "action", He), null != Be && Z(e, "encType", Be), null != je && Z(e, "method", je), null != De && Z(e, "target", De), e.push(Jr), null !== Pe && (e.push(Xr), P(e, "name", Pe), e.push(Qr), _e?.forEach(V, e)), $(e, Oe, Ie), "string" == typeof Ie) {
                        e.push(m(R(Ie)));
                        var Ue = null
                      } else Ue = Ie;
                      return Ue;
                    case "menuitem":
                      for (var We in e.push(te("menuitem")), n)
                        if (On.call(n, We)) {
                          var ze = n[We];
                          if (null != ze) switch (We) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                            default:
                              Z(e, We, ze)
                          }
                        } return e.push(Jr), null;
                    case "object":
                      e.push(te("object"));
                      var Ze, $e = null,
                        Ge = null;
                      for (Ze in n)
                        if (On.call(n, Ze)) {
                          var qe = n[Ze];
                          if (null != qe) switch (Ze) {
                            case "children":
                              $e = qe;
                              break;
                            case "dangerouslySetInnerHTML":
                              Ge = qe;
                              break;
                            case "data":
                              w(qe, "data");
                              var Ye = E("" + qe);
                              if ("" === Ye) {
                                console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', Ze, Ze);
                                break
                              }
                              e.push($r, m("data"), Gr, m(R(Ye)), qr);
                              break;
                            default:
                              Z(e, Ze, qe)
                          }
                        } if (e.push(Jr), $(e, Ge, $e), "string" == typeof $e) {
                        e.push(m(R($e)));
                        var Ke = null
                      } else Ke = $e;
                      return Ke;
                    case "title":
                      var Xe = a.insertionMode,
                        Je = !!(1 & a.tagScope);
                      if (On.call(n, "children")) {
                        var Qe = n.children,
                          et = Array.isArray(Qe) ? 2 > Qe.length ? Qe[0] : null : Qe;
                        Array.isArray(Qe) && Qe.length > 1 ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be commong to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", Qe.length) : "function" == typeof et || "symbol" == typeof et ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", "function" == typeof et ? "a Function" : "a Sybmol") : et && et.toString === {}.toString && (null != et.$$typeof ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."))
                      }
                      if (Xe === Br || Je || null != n.itemProp) var tt = J(e, n);
                      else l ? tt = null : (J(o.hoistableChunks, n), tt = void 0);
                      return tt;
                    case "link":
                      var nt = n.rel,
                        rt = n.href,
                        ot = n.precedence;
                      if (a.insertionMode === Br || 1 & a.tagScope || null != n.itemProp || "string" != typeof nt || "string" != typeof rt || "" === rt) {
                        "stylesheet" === nt && "string" == typeof n.precedence && ("string" == typeof rt && rt || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', null === rt ? "`null`" : void 0 === rt ? "`undefined`" : "" === rt ? "an empty string" : 'something with type "' + typeof rt + '"')), Y(e, n);
                        var it = null
                      } else if ("stylesheet" === n.rel)
                        if ("string" != typeof ot || null != n.disabled || n.onLoad || n.onError) {
                          if ("string" == typeof ot)
                            if (null != n.disabled) console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
                            else if (n.onLoad || n.onError) {
                            var at = n.onLoad && n.onError ? "`onLoad` and `onError` props" : n.onLoad ? "`onLoad` prop" : "`onError` prop";
                            console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', at, at)
                          }
                          it = Y(e, n)
                        } else {
                          var st = o.styles.get(ot),
                            lt = r.styleResources.hasOwnProperty(rt) ? r.styleResources[rt] : void 0;
                          if (lt !== vr) {
                            r.styleResources[rt] = vr, st || (st = {
                              precedence: m(R(ot)),
                              rules: [],
                              hrefs: [],
                              sheets: new Map
                            }, o.styles.set(ot, st));
                            var ct = {
                              state: _i,
                              props: In({}, n, {
                                "data-precedence": n.precedence,
                                precedence: null
                              })
                            };
                            if (lt) {
                              2 === lt.length && ve(ct.props, lt);
                              var ut = o.preloads.stylesheets.get(rt);
                              ut && ut.length > 0 ? ut.length = 0 : ct.state = Pi
                            }
                            st.sheets.set(rt, ct), i && i.stylesheets.add(ct)
                          } else if (st) {
                            var ft = st.sheets.get(rt);
                            ft && i && i.stylesheets.add(ft)
                          }
                          s && e.push(Vr), it = null
                        }
                      else n.onLoad || n.onError ? it = Y(e, n) : (s && e.push(Vr), it = l ? null : Y(o.hoistableChunks, n));
                      return it;
                    case "script":
                      var dt = n.async;
                      if ("string" != typeof n.src || !n.src || !dt || "function" == typeof dt || "symbol" == typeof dt || n.onLoad || n.onError || a.insertionMode === Br || 1 & a.tagScope || null != n.itemProp) var ht = Q(e, n);
                      else {
                        var pt = n.src;
                        if ("module" === n.type) var mt = r.moduleScriptResources,
                          gt = o.preloads.moduleScripts;
                        else mt = r.scriptResources, gt = o.preloads.scripts;
                        var yt = mt.hasOwnProperty(pt) ? mt[pt] : void 0;
                        if (yt !== vr) {
                          mt[pt] = vr;
                          var vt = n;
                          if (yt) {
                            2 === yt.length && ve(vt = In({}, n), yt);
                            var bt = gt.get(pt);
                            bt && (bt.length = 0)
                          }
                          var kt = [];
                          o.scripts.add(kt), Q(kt, vt)
                        }
                        s && e.push(Vr), ht = null
                      }
                      return ht;
                    case "style":
                      var wt = a.insertionMode,
                        xt = !!(1 & a.tagScope);
                      if (On.call(n, "children")) {
                        var Ct = n.children,
                          St = Array.isArray(Ct) ? 2 > Ct.length ? Ct[0] : null : Ct;
                        ("function" == typeof St || "symbol" == typeof St || Array.isArray(St)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", "function" == typeof St ? "a Function" : "symbol" == typeof St ? "a Sybmol" : "an Array")
                      }
                      var Tt = n.precedence,
                        Ft = n.href;
                      if (wt === Br || xt || null != n.itemProp || "string" != typeof Tt || "string" != typeof Ft || "" === Ft) {
                        e.push(te("style"));
                        var At, Lt = null,
                          Rt = null;
                        for (At in n)
                          if (On.call(n, At)) {
                            var Et = n[At];
                            if (null != Et) switch (At) {
                              case "children":
                                Lt = Et;
                                break;
                              case "dangerouslySetInnerHTML":
                                Rt = Et;
                                break;
                              default:
                                Z(e, At, Et)
                            }
                          } e.push(Jr);
                        var Mt = Array.isArray(Lt) ? 2 > Lt.length ? Lt[0] : null : Lt;
                        "function" != typeof Mt && "symbol" != typeof Mt && null != Mt && e.push(m(K(Mt))), $(e, Rt, Lt), e.push(ne("style"));
                        var It = null
                      } else {
                        Ft.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', Ft);
                        var Ot = o.styles.get(Tt),
                          Ht = r.styleResources.hasOwnProperty(Ft) ? r.styleResources[Ft] : void 0;
                        if (Ht !== vr) {
                          r.styleResources[Ft] = vr, Ht && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', Ft), Ot ? Ot.hrefs.push(m(R(Ft))) : (Ot = {
                            precedence: m(R(Tt)),
                            rules: [],
                            hrefs: [m(R(Ft))],
                            sheets: new Map
                          }, o.styles.set(Tt, Ot));
                          var Bt, jt = Ot.rules,
                            Dt = null,
                            Nt = null;
                          for (Bt in n)
                            if (On.call(n, Bt)) {
                              var _t = n[Bt];
                              if (null != _t) switch (Bt) {
                                case "children":
                                  Dt = _t;
                                  break;
                                case "dangerouslySetInnerHTML":
                                  Nt = _t
                              }
                            } var Pt = Array.isArray(Dt) ? 2 > Dt.length ? Dt[0] : null : Dt;
                          "function" != typeof Pt && "symbol" != typeof Pt && null != Pt && jt.push(m(K(Pt))), $(jt, Nt, Dt)
                        }
                        Ot && i && i.styles.add(Ot), s && e.push(Vr), It = void 0
                      }
                      return It;
                    case "meta":
                      if (a.insertionMode === Br || 1 & a.tagScope || null != n.itemProp) var Vt = X(e, n, "meta");
                      else s && e.push(Vr), Vt = l ? null : "string" == typeof n.charSet ? X(o.charsetChunks, n, "meta") : "viewport" === n.name ? X(o.viewportChunks, n, "meta") : X(o.hoistableChunks, n, "meta");
                      return Vt;
                    case "listing":
                    case "pre":
                      e.push(te(t));
                      var Ut, Wt = null,
                        zt = null;
                      for (Ut in n)
                        if (On.call(n, Ut)) {
                          var Zt = n[Ut];
                          if (null != Zt) switch (Ut) {
                            case "children":
                              Wt = Zt;
                              break;
                            case "dangerouslySetInnerHTML":
                              zt = Zt;
                              break;
                            default:
                              Z(e, Ut, Zt)
                          }
                        } if (e.push(Jr), null != zt) {
                        if (null != Wt) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                        if ("object" != typeof zt || !("P" in zt)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
                        var $t = zt.P;
                        null != $t && ("string" == typeof $t && $t.length > 0 && "\n" === $t[0] ? e.push(yo, m($t)) : (C($t), e.push(m("" + $t))))
                      }
                      return "string" == typeof Wt && "\n" === Wt[0] && e.push(yo), Wt;
                    case "img":
                      var Gt = n.src,
                        qt = n.srcSet;
                      if (!("lazy" === n.loading || !Gt && !qt || "string" != typeof Gt && null != Gt || "string" != typeof qt && null != qt || "low" === n.fetchPriority || 3 & a.tagScope) && ("string" != typeof Gt || ":" !== Gt[4] || "d" !== Gt[0] && "D" !== Gt[0] || "a" !== Gt[1] && "A" !== Gt[1] || "t" !== Gt[2] && "T" !== Gt[2] || "a" !== Gt[3] && "A" !== Gt[3]) && ("string" != typeof qt || ":" !== qt[4] || "d" !== qt[0] && "D" !== qt[0] || "a" !== qt[1] && "A" !== qt[1] || "t" !== qt[2] && "T" !== qt[2] || "a" !== qt[3] && "A" !== qt[3])) {
                        var Yt = "string" == typeof n.sizes ? n.sizes : void 0,
                          Kt = qt ? qt + "\n" + (Yt || "") : Gt,
                          Xt = o.preloads.images,
                          Jt = Xt.get(Kt);
                        if (Jt)("high" === n.fetchPriority || 10 > o.highImagePreloads.size) && (Xt.delete(Kt), o.highImagePreloads.add(Jt));
                        else if (!r.imageResources.hasOwnProperty(Kt)) {
                          r.imageResources[Kt] = br;
                          var en, tn = n.crossOrigin,
                            nn = "string" == typeof tn ? "use-credentials" === tn ? tn : "" : void 0,
                            rn = o.headers;
                          rn && rn.remainingCapacity > 0 && ("high" === n.fetchPriority || 500 > rn.highImagePreloads.length) && (en = be(Gt, "image", {
                            imageSrcSet: n.srcSet,
                            imageSizes: n.sizes,
                            crossOrigin: nn,
                            integrity: n.integrity,
                            nonce: n.nonce,
                            type: n.type,
                            fetchPriority: n.fetchPriority,
                            referrerPolicy: n.refererPolicy
                          }), (rn.remainingCapacity -= en.length + 2) >= 0) ? (o.resets.image[Kt] = br, rn.highImagePreloads && (rn.highImagePreloads += ", "), rn.highImagePreloads += en) : (Y(Jt = [], {
                            rel: "preload",
                            as: "image",
                            href: qt ? void 0 : Gt,
                            imageSrcSet: qt,
                            imageSizes: Yt,
                            crossOrigin: nn,
                            integrity: n.integrity,
                            type: n.type,
                            fetchPriority: n.fetchPriority,
                            referrerPolicy: n.referrerPolicy
                          }), "high" === n.fetchPriority || 10 > o.highImagePreloads.size ? o.highImagePreloads.add(Jt) : (o.bulkPreloads.add(Jt), Xt.set(Kt, Jt)))
                        }
                      }
                      return X(e, n, "img");
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
                      return X(e, n, t);
                    case "head":
                      if (a.insertionMode < Hr && null === o.headChunks) {
                        o.headChunks = [];
                        var on = ee(o.headChunks, n, "head")
                      } else on = ee(e, n, "head");
                      return on;
                    case "html":
                      if (a.insertionMode === Ir && null === o.htmlChunks) {
                        o.htmlChunks = [ko];
                        var an = ee(o.htmlChunks, n, "html")
                      } else an = ee(e, n, "html");
                      return an;
                    default:
                      if (-1 !== t.indexOf("-")) {
                        e.push(te(t));
                        var sn, ln = null,
                          cn = null;
                        for (sn in n)
                          if (On.call(n, sn)) {
                            var un = n[sn];
                            if (null != un) {
                              var fn = sn;
                              switch (sn) {
                                case "children":
                                  ln = un;
                                  break;
                                case "dangerouslySetInnerHTML":
                                  cn = un;
                                  break;
                                case "style":
                                  N(e, un);
                                  break;
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "ref":
                                  break;
                                case "className":
                                  fn = "class";
                                default:
                                  if (S(sn) && "function" != typeof un && "symbol" != typeof un && !1 !== un) {
                                    if (!0 === un) un = "";
                                    else if ("object" == typeof un) continue;
                                    e.push($r, m(fn), Gr, m(R(un)), qr)
                                  }
                              }
                            }
                          } return e.push(Jr), $(e, cn, ln), ln
                      }
                  }
                  return ee(e, n, t)
                }(pt.chunks, r, o, e.resumableState, e.renderState, t.hoistableState, t.formatContext, pt.lastPushedText, t.isFallback);
                pt.lastPushedText = !1;
                var At = t.formatContext,
                  Rt = t.keyPath;
                t.formatContext = j(At, r, o), t.keyPath = n, Mt(e, t, Ft, -1), t.formatContext = At, t.keyPath = Rt;
                e: {
                  var Et = pt.chunks,
                    It = e.resumableState;
                  switch (r) {
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
                      if (At.insertionMode <= Or) {
                        It.hasBody = !0;
                        break e
                      }
                      break;
                    case "html":
                      if (At.insertionMode === Ir) {
                        It.hasHtml = !0;
                        break e
                      }
                  }
                  Et.push(ne(r))
                }
                pt.lastPushedText = !1
              }
            }
          }

          function St(e, t, n, r, o) {
            var i = t.replay,
              a = t.blockedBoundary,
              s = ht(0, 0, null, t.formatContext, !1, !1);
            s.id = n, s.parentFlushed = !0;
            try {
              t.replay = null, t.blockedSegment = s, Mt(e, t, r, o), s.status = ns, null === a ? e.completedRootSegment = s : (_t(a, s), a.parentFlushed && e.partialBoundaries.push(a))
            } finally {
              t.replay = i, t.blockedSegment = null
            }
          }

          function Tt(e, t, n, r) {
            null !== t.replay && "number" == typeof t.replay.slots ? St(e, t, t.replay.slots, n, r) : (t.node = n, t.childIndex = r, n = t.componentStack, gt(t), Ft(e, t), t.componentStack = n)
          }

          function Ft(e, t) {
            var n = t.node,
              r = t.childIndex;
            if (null !== n) {
              if ("object" == typeof n) {
                switch (n.$$typeof) {
                  case tn:
                    var o = n.type,
                      i = n.key,
                      a = n.props,
                      s = void 0 !== (n = a.ref) ? n : null,
                      l = Fe(o),
                      c = i ?? (-1 === r ? 0 : r),
                      u = [t.keyPath, l, c];
                    if (null !== t.replay) {
                      var f = t.replay;
                      for (r = f.nodes, n = 0; n < r.length; n++)
                        if (c === (i = r[n])[1]) {
                          if (4 === i.length) {
                            if (null !== l && l !== i[0]) throw Error("Expected the resume to render <" + i[0] + "> in this slot but instead it rendered <" + l + ">. The tree doesn't match so React will fallback to client rendering.");
                            var d = i[2];
                            i = i[3], l = t.node, t.replay = {
                              nodes: d,
                              slots: i,
                              pendingTasks: 1
                            };
                            try {
                              if (Ct(e, t, u, o, a, s), 1 === t.replay.pendingTasks && t.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                              t.replay.pendingTasks--
                            } catch (n) {
                              if ("object" == typeof n && null !== n && (n === ha || "function" == typeof n.then)) throw t.node === l && (t.replay = f), n;
                              t.replay.pendingTasks--, a = yt(t.componentStack), It(e, t.blockedBoundary, n, a, d, i)
                            }
                            t.replay = f
                          } else {
                            if (o !== fn) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Fe(o) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                            e: {
                              o = void 0,
                              s = i[5],
                              f = i[2],
                              l = i[3],
                              c = null === i[4] ? [] : i[4][2],
                              i = null === i[4] ? null : i[4][3];
                              var h = t.keyPath,
                                p = t.replay,
                                m = t.blockedBoundary,
                                g = t.hoistableState,
                                y = a.children;a = a.fallback;
                              var v = new Set,
                                b = ut(0, v);b.parentFlushed = !0,
                              b.rootSegmentID = s,
                              t.blockedBoundary = b,
                              t.hoistableState = b.contentState,
                              t.keyPath = u,
                              t.replay = {
                                nodes: f,
                                slots: l,
                                pendingTasks: 1
                              };
                              try {
                                if (Mt(e, t, y, -1), 1 === t.replay.pendingTasks && t.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                if (t.replay.pendingTasks--, 0 === b.pendingTasks && b.status === ts) {
                                  b.status = ns, e.completedBoundaries.push(b);
                                  break e
                                }
                              } catch (n) {
                                b.status = es, vt(b, o = bt(e, n, d = yt(t.componentStack)), n, d, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(b)
                              } finally {
                                t.blockedBoundary = m, t.hoistableState = g, t.replay = p, t.keyPath = h
                              }
                              gt(d = dt(e, null, {
                                nodes: c,
                                slots: i,
                                pendingTasks: 0
                              }, a, -1, m, b.fallbackState, v, [u[0], "Suspense Fallback", u[2]], t.formatContext, t.context, t.treeContext, t.componentStack, !0)),
                              e.pingedTasks.push(d)
                            }
                          }
                          r.splice(n, 1);
                          break
                        }
                    } else Ct(e, t, u, o, a, s);
                    return;
                  case nn:
                    throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                  case pn:
                    if (n = Qa(n), 12 === e.status) throw null;
                    return void Tt(e, t, n, r)
                }
                if (wn(n)) return void At(e, t, n, r);
                if ((a = null === n || "object" != typeof n ? null : "function" == typeof(d = kn && n[kn] || n["@@iterator"]) ? d : null) && (d = a.call(n))) {
                  if (d === n ? (-1 !== r || null === t.componentStack || "function" != typeof t.componentStack.type || "[object GeneratorFunction]" !== {}.toString.call(t.componentStack.type) || "[object Generator]" !== {}.toString.call(d)) && (ds || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), ds = !0) : n.entries !== a || hs || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), hs = !0), !(n = d.next()).done) {
                    a = [];
                    do {
                      a.push(n.value), n = d.next()
                    } while (!n.done);
                    At(e, t, a, r)
                  }
                  return
                }
                if ("function" == typeof n.then) return t.thenableState = null, Tt(e, t, Xe(n), r);
                if (n.$$typeof === cn) return Tt(e, t, n.$, r);
                throw r = {}.toString.call(n), Error("Objects are not valid as a React child (found: " + ("[object Object]" === r ? "object with keys {" + Object.keys(n).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
              }
              "string" == typeof n ? null !== (r = t.blockedSegment) && (r.lastPushedText = D(r.chunks, n, e.renderState, r.lastPushedText)) : "number" == typeof n || "bigint" == typeof n ? null !== (r = t.blockedSegment) && (r.lastPushedText = D(r.chunks, "" + n, e.renderState, r.lastPushedText)) : ("function" == typeof n && (r = n.displayName || n.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", r, r)), "symbol" == typeof n && console.error("Symbols are not valid as a React child.\n  %s", n + ""))
            }
          }

          function At(e, t, n, r) {
            var o = t.keyPath,
              i = t.componentStack;
            if (mt(t, t.node.R), -1 !== r && (t.keyPath = [t.keyPath, "Fragment", r], null !== t.replay)) {
              for (var a = t.replay, s = a.nodes, l = 0; l < s.length; l++) {
                var c = s[l];
                if (c[1] === r) {
                  r = c[2], c = c[3], t.replay = {
                    nodes: r,
                    slots: c,
                    pendingTasks: 1
                  };
                  try {
                    if (At(e, t, n, -1), 1 === t.replay.pendingTasks && t.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                    t.replay.pendingTasks--
                  } catch (o) {
                    if ("object" == typeof o && null !== o && (o === ha || "function" == typeof o.then)) throw o;
                    t.replay.pendingTasks--, n = yt(t.componentStack), It(e, t.blockedBoundary, o, n, r, c)
                  }
                  t.replay = a, s.splice(l, 1);
                  break
                }
              }
              return t.keyPath = o, void(t.componentStack = i)
            }
            if (a = t.treeContext, s = n.length, null !== t.replay && null !== (l = t.replay.slots) && "object" == typeof l) {
              for (r = 0; s > r; r++) {
                c = n[r], t.treeContext = Be(a, s, r);
                var u = l[r];
                "number" == typeof u ? (St(e, t, u, c, r), delete l[r]) : Mt(e, t, c, r)
              }
              return t.treeContext = a, t.keyPath = o, void(t.componentStack = i)
            }
            for (l = 0; s > l; l++) {
              var f = e;
              if (c = t, null !== (u = r = n[l]) && "object" == typeof u && (u.$$typeof === tn || u.$$typeof === nn) && u.F && (!u.F.validated && null == u.key || 2 === u.F.validated)) {
                if ("object" != typeof u.F) throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                u.F.validated = 1;
                var d = f.didWarnForKey;
                if (null == d && (d = f.didWarnForKey = new WeakSet), null !== (f = c.componentStack) && !d.has(f)) {
                  d.add(f);
                  var h = Fe(u.type);
                  d = u.v;
                  var p = f.owner;
                  if (f = "", p && "u" > typeof p.type) {
                    var m = Fe(p.type);
                    m && (f = "\n\nCheck the render method of `" + m + "`.")
                  }
                  f || h && (f = "\n\nCheck the top-level render call using <" + h + ">."), h = "", null != d && p !== d && (p = null, "u" > typeof d.type ? p = Fe(d.type) : "string" == typeof d.name && (p = d.name), p && (h = " It was passed a child from " + p + ".")), d = c.componentStack, c.componentStack = {
                    parent: c.componentStack,
                    type: u.type,
                    owner: u.v,
                    stack: null
                  }, console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', f, h), c.componentStack = d
                }
              }
              t.treeContext = Be(a, s, l), Mt(e, t, r, l)
            }
            t.treeContext = a, t.keyPath = o, t.componentStack = i
          }

          function Lt(e, t) {
            null !== (e = e.trackedPostpones) && null !== (t = t.trackedContentKeyPath) && void 0 !== (t = e.workingMap.get(t)) && (t.length = 4, t[2] = [], t[3] = null)
          }

          function Rt(e, t, n) {
            return dt(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.componentStack, t.isFallback)
          }

          function Et(e, t, n) {
            var r = t.blockedSegment,
              o = ht(0, r.chunks.length, null, t.formatContext, r.lastPushedText, !0);
            return r.children.push(o), r.lastPushedText = !1, ft(e, n, t.node, t.childIndex, t.blockedBoundary, o, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.componentStack, t.isFallback)
          }

          function Mt(e, t, n, r) {
            var o = t.formatContext,
              i = t.context,
              a = t.keyPath,
              s = t.treeContext,
              l = t.componentStack,
              c = t.blockedSegment;
            if (null === c) try {
              return Tt(e, t, n, r)
            } catch (c) {
              if (Ue(), "object" == typeof(n = c === ha ? De() : c) && null !== n) {
                if ("function" == typeof n.then) return e = Rt(e, t, r = Ve()).ping, n.then(e, e), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void Ie(i);
                if ("Maximum call stack size exceeded" === n.message) return n = Rt(e, t, n = Ve()), e.pingedTasks.push(n), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void Ie(i)
              }
            } else {
              var u = c.children.length,
                f = c.chunks.length;
              try {
                return Tt(e, t, n, r)
              } catch (d) {
                if (Ue(), c.children.length = u, c.chunks.length = f, "object" == typeof(n = d === ha ? De() : d) && null !== n) {
                  if ("function" == typeof n.then) return e = Et(e, t, r = Ve()).ping, n.then(e, e), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void Ie(i);
                  if ("Maximum call stack size exceeded" === n.message) return n = Et(e, t, n = Ve()), e.pingedTasks.push(n), t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, t.componentStack = l, void Ie(i)
                }
              }
            }
            throw t.formatContext = o, t.context = i, t.keyPath = a, t.treeContext = s, Ie(i), n
          }

          function It(e, t, n, r, o, i) {
            Ht(e, t, o, i, n, bt(e, n, r), r, !1)
          }

          function Ot(e) {
            var t = e.blockedBoundary;
            null !== (e = e.blockedSegment) && (e.status = 3, Pt(this, t, e))
          }

          function Ht(e, t, n, r, o, i, a, s) {
            for (var l = 0; l < n.length; l++) {
              var c = n[l];
              if (4 === c.length) Ht(e, t, c[2], c[3], o, i, a, s);
              else {
                var u = e;
                c = c[5];
                var f = o,
                  d = i,
                  h = a,
                  p = s,
                  m = ut(0, new Set);
                m.parentFlushed = !0, m.rootSegmentID = c, m.status = es, vt(m, d, f, h, p), m.parentFlushed && u.clientRenderedBoundaries.push(m)
              }
            }
            if (n.length = 0, null !== r) {
              if (null === t) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
              if (t.status !== es && (t.status = es, vt(t, i, o, a, s), t.parentFlushed && e.clientRenderedBoundaries.push(t)), "object" == typeof r)
                for (var g in r) delete r[g]
            }
          }

          function Bt(e, t, n) {
            var r = e.blockedBoundary,
              o = e.blockedSegment;
            if (null !== o) {
              if (6 === o.status) return;
              o.status = 3
            }
            if (o = yt(e.componentStack), null === r) {
              if (13 !== t.status && t.status !== is) {
                if (null === (r = e.replay)) return bt(t, n, o), void kt(t, n);
                r.pendingTasks--, 0 === r.pendingTasks && r.nodes.length > 0 && (e = bt(t, n, o), Ht(t, null, r.nodes, r.slots, n, e, o, !0)), t.pendingRootTasks--, 0 === t.pendingRootTasks && Dt(t)
              }
            } else r.pendingTasks--, r.status !== es && (r.status = es, e = bt(t, n, o), r.status = es, vt(r, e, n, o, !0), Lt(t, r), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(e) {
              return Bt(e, t, n)
            }), r.fallbackAbortableTasks.clear();
            t.allPendingTasks--, 0 === t.allPendingTasks && Nt(t)
          }

          function jt(e, t) {
            try {
              var n = e.renderState,
                r = n.onHeaders;
              if (r) {
                var o = n.headers;
                if (o) {
                  n.headers = null;
                  var i = o.preconnects;
                  if (o.fontPreloads && (i && (i += ", "), i += o.fontPreloads), o.highImagePreloads && (i && (i += ", "), i += o.highImagePreloads), !t) {
                    var a = n.styles.values(),
                      s = a.next();
                    e: for (; o.remainingCapacity > 0 && !s.done; s = a.next())
                      for (var l = s.value.sheets.values(), c = l.next(); o.remainingCapacity > 0 && !c.done; c = l.next()) {
                        var u = c.value,
                          f = u.props,
                          d = f.href,
                          h = u.props,
                          p = be(h.href, "style", {
                            crossOrigin: h.crossOrigin,
                            integrity: h.integrity,
                            nonce: h.nonce,
                            type: h.type,
                            fetchPriority: h.fetchPriority,
                            referrerPolicy: h.referrerPolicy,
                            media: h.media
                          });
                        if (0 > (o.remainingCapacity -= p.length + 2)) break e;
                        n.resets.style[d] = br, i && (i += ", "), i += p, n.resets.style[d] = "string" == typeof f.crossOrigin || "string" == typeof f.integrity ? [f.crossOrigin, f.integrity] : br
                      }
                  }
                  r(i ? {
                    Link: i
                  } : {})
                }
              }
            } catch (t) {
              bt(e, t, {})
            }
          }

          function Dt(e) {
            null === e.trackedPostpones && jt(e, !0), e.onShellError = at, (e = e.onShellReady)()
          }

          function Nt(e) {
            jt(e, null === e.trackedPostpones || null === e.completedRootSegment || e.completedRootSegment.status !== os), (e = e.onAllReady)()
          }

          function _t(e, t) {
            if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary && -1 === t.children[0].id) {
              var n = t.children[0];
              n.id = t.id, n.parentFlushed = !0, n.status === ns && _t(e, n)
            } else e.completedSegments.push(t)
          }

          function Pt(e, t, n) {
            if (null === t) {
              if (null !== n && n.parentFlushed) {
                if (null !== e.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
                e.completedRootSegment = n
              }
              e.pendingRootTasks--, 0 === e.pendingRootTasks && Dt(e)
            } else t.pendingTasks--, t.status !== es && (0 === t.pendingTasks ? (t.status === ts && (t.status = ns), null !== n && n.parentFlushed && n.status === ns && _t(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.status === ns && (t.fallbackAbortableTasks.forEach(Ot, e), t.fallbackAbortableTasks.clear())) : null !== n && n.parentFlushed && n.status === ns && (_t(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)));
            e.allPendingTasks--, 0 === e.allPendingTasks && Nt(e)
          }

          function Vt(e) {
            if (e.status !== is && 13 !== e.status) {
              var t = Ki,
                n = cr.H;
              cr.H = Ia;
              var r = cr.A;
              cr.A = Ua;
              var o = as;
              as = e;
              var i = cr.getCurrentStack;
              cr.getCurrentStack = pt;
              var a = Pa;
              Pa = e.resumableState;
              try {
                var s, l = e.pingedTasks;
                for (s = 0; s < l.length; s++) {
                  var c = e,
                    u = l[s],
                    f = u.blockedSegment;
                  if (null === f) {
                    var d = void 0,
                      h = c;
                    if (0 !== (c = u).replay.pendingTasks) {
                      Ie(c.context), d = Va, Va = c;
                      try {
                        if ("number" == typeof c.replay.slots ? St(h, c, c.replay.slots, c.node, c.childIndex) : Ft(h, c), 1 === c.replay.pendingTasks && c.replay.nodes.length > 0) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        c.replay.pendingTasks--, c.abortSet.delete(c), Pt(h, c.blockedBoundary, null)
                      } catch (e) {
                        Ue();
                        var p = e === ha ? De() : e;
                        if ("object" == typeof p && null !== p && "function" == typeof p.then) {
                          var m = c.ping;
                          p.then(m, m), c.thenableState = Ve()
                        } else {
                          c.replay.pendingTasks--, c.abortSet.delete(c);
                          var g = yt(c.componentStack);
                          It(h, c.blockedBoundary, 12 === h.status ? h.fatalError : p, g, c.replay.nodes, c.replay.slots), h.pendingRootTasks--, 0 === h.pendingRootTasks && Dt(h), h.allPendingTasks--, 0 === h.allPendingTasks && Nt(h)
                        }
                      } finally {
                        Va = d
                      }
                    }
                  } else {
                    h = d = void 0;
                    var y = u,
                      v = f;
                    if (v.status === ts) {
                      v.status = 6, Ie(y.context), h = Va, Va = y;
                      var b = v.children.length,
                        k = v.chunks.length;
                      try {
                        Ft(c, y), v.lastPushedText && v.textEmbedded && v.chunks.push(Vr), y.abortSet.delete(y), v.status = ns, Pt(c, y.blockedBoundary, v)
                      } catch (e) {
                        Ue(), v.children.length = b, v.chunks.length = k;
                        var w = e === ha ? De() : 12 === c.status ? c.fatalError : e;
                        if ("object" == typeof w && null !== w && "function" == typeof w.then) {
                          v.status = ts, y.thenableState = Ve();
                          var x = y.ping;
                          w.then(x, x)
                        } else {
                          var C = yt(y.componentStack);
                          y.abortSet.delete(y), v.status = 4;
                          var S = y.blockedBoundary;
                          d = bt(c, w, C), null === S ? kt(c, w) : (S.pendingTasks--, S.status !== es && (S.status = es, vt(S, d, w, C, !1), Lt(c, S), S.parentFlushed && c.clientRenderedBoundaries.push(S))), c.allPendingTasks--, 0 === c.allPendingTasks && Nt(c)
                        }
                      } finally {
                        Va = h
                      }
                    }
                  }
                }
                l.splice(0, s), null !== e.destination && Gt(e, e.destination)
              } catch (t) {
                bt(e, t, {}), kt(e, t)
              } finally {
                Pa = a, cr.H = n, cr.A = r, cr.getCurrentStack = i, n === Ia && Ie(t), as = o
              }
            }
          }

          function Ut(e, t, n, r) {
            switch (n.parentFlushed = !0, n.status) {
              case ts:
                n.id = e.nextSegmentId++;
              case os:
                return r = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, d(t, xo), d(t, e.placeholderPrefix), d(t, e = m(r.toString(16))), h(t, Co);
              case ns:
                n.status = rs;
                var o = !0,
                  i = n.chunks,
                  a = 0;
                n = n.children;
                for (var s = 0; s < n.length; s++) {
                  for (o = n[s]; a < o.index; a++) d(t, i[a]);
                  o = Wt(e, t, o, r)
                }
                for (; a < i.length - 1; a++) d(t, i[a]);
                return a < i.length && (o = h(t, i[a])), o;
              default:
                throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.")
            }
          }

          function Wt(e, t, n, r) {
            var o = n.boundary;
            if (null === o) return Ut(e, t, n, r);
            if (o.parentFlushed = !0, o.status === es) {
              var i = o.errorDigest,
                a = o.errorMessage,
                s = o.errorStack;
              o = o.errorComponentStack, h(t, Ao), d(t, Ro), i && (d(t, Mo), d(t, m(R(i))), d(t, Eo)), a && (d(t, Io), d(t, m(R(a))), d(t, Eo)), s && (d(t, Oo), d(t, m(R(s))), d(t, Eo)), o && (d(t, Ho), d(t, m(R(o))), d(t, Eo)), h(t, Bo), Ut(e, t, n, r)
            } else if (o.status !== ns) o.status === ts && (o.rootSegmentID = e.nextSegmentId++), o.completedSegments.length > 0 && e.partialBoundaries.push(o), oe(t, e.renderState, o.rootSegmentID), r && ((o = o.fallbackState).styles.forEach(Se, r), o.stylesheets.forEach(Te, r)), Ut(e, t, n, r);
            else if (o.byteSize > e.progressiveChunkSize) o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), oe(t, e.renderState, o.rootSegmentID), Ut(e, t, n, r);
            else {
              if (r && ((n = o.contentState).styles.forEach(Se, r), n.stylesheets.forEach(Te, r)), h(t, So), 1 !== (n = o.completedSegments).length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
              Wt(e, t, n[0], r)
            }
            return h(t, Lo)
          }

          function zt(e, t, n, r) {
            return function(e, t, n, r) {
                switch (n.insertionMode) {
                  case Ir:
                  case Or:
                  case Hr:
                    return d(e, jo), d(e, t.segmentPrefix), d(e, m(r.toString(16))), h(e, Do);
                  case Br:
                    return d(e, _o), d(e, t.segmentPrefix), d(e, m(r.toString(16))), h(e, Po);
                  case jr:
                    return d(e, Uo), d(e, t.segmentPrefix), d(e, m(r.toString(16))), h(e, Wo);
                  case Dr:
                    return d(e, Zo), d(e, t.segmentPrefix), d(e, m(r.toString(16))), h(e, $o);
                  case Nr:
                    return d(e, qo), d(e, t.segmentPrefix), d(e, m(r.toString(16))), h(e, Yo);
                  case _r:
                    return d(e, Xo), d(e, t.segmentPrefix), d(e, m(r.toString(16))), h(e, Jo);
                  case Pr:
                    return d(e, ei), d(e, t.segmentPrefix), d(e, m(r.toString(16))), h(e, ti);
                  default:
                    throw Error("Unknown insertion mode. This is a bug in React.")
                }
              }(t, e.renderState, n.parentFormatContext, n.id), Wt(e, t, n, r),
              function(e, t) {
                switch (t.insertionMode) {
                  case Ir:
                  case Or:
                  case Hr:
                    return h(e, No);
                  case Br:
                    return h(e, Vo);
                  case jr:
                    return h(e, zo);
                  case Dr:
                    return h(e, Go);
                  case Nr:
                    return h(e, Ko);
                  case _r:
                    return h(e, Qo);
                  case Pr:
                    return h(e, ni);
                  default:
                    throw Error("Unknown insertion mode. This is a bug in React.")
                }
              }(t, n.parentFormatContext)
          }

          function Zt(e, t, n) {
            for (var r = n.completedSegments, o = 0; o < r.length; o++) $t(e, t, n, r[o]);
            r.length = 0, ce(t, n.contentState, e.renderState), r = e.resumableState, e = e.renderState, o = n.rootSegmentID, n = n.contentState;
            var i = e.stylesToHoist;
            return e.stylesToHoist = !1, d(t, e.startInlineScript), i ? (r.instructions & mr) === hr ? (r.instructions = r.instructions | yr | mr, d(t, ci)) : (r.instructions & yr) === hr ? (r.instructions |= yr, d(t, ui)) : d(t, fi) : (r.instructions & mr) === hr ? (r.instructions |= mr, d(t, si)) : d(t, li), r = m(o.toString(16)), d(t, e.boundaryPrefix), d(t, r), d(t, di), d(t, e.segmentPrefix), d(t, r), i ? (d(t, hi), function(e, t) {
              d(e, Bi);
              var n = Bi;
              t.stylesheets.forEach(function(t) {
                if (t.state !== Vi)
                  if (t.state === Ui) d(e, n), w(t = t.props.href, "href"), d(e, m(ae("" + t))), d(e, Ni), n = ji;
                  else {
                    d(e, n);
                    var r = t.props["data-precedence"],
                      o = t.props,
                      i = E("" + t.props.href);
                    for (var a in d(e, m(ae(i))), w(r, "precedence"), r = "" + r, d(e, Di), d(e, m(ae(r))), o)
                      if (On.call(o, a) && null != (r = o[a])) switch (a) {
                        case "href":
                        case "rel":
                        case "precedence":
                        case "data-precedence":
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        default:
                          me(e, a, r)
                      }
                    d(e, Ni), n = ji, t.state = Ui
                  }
              }), d(e, Ni)
            }(t, n)) : d(t, pi), n = h(t, mi), re(t, e) && n
          }

          function $t(e, t, n, r) {
            if (r.status === rs) return !0;
            var o = n.contentState,
              i = r.id;
            if (-1 === i) {
              if (-1 === (r.id = n.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
              return zt(e, t, r, o)
            }
            return i === n.rootSegmentID ? zt(e, t, r, o) : (zt(e, t, r, o), n = e.resumableState, d(t, (e = e.renderState).startInlineScript), (n.instructions & pr) === hr ? (n.instructions |= pr, d(t, ri)) : d(t, oi), d(t, e.segmentPrefix), d(t, i = m(i.toString(16))), d(t, ii), d(t, e.placeholderPrefix), d(t, i), t = h(t, ai))
          }

          function Gt(e, t) {
            Rn = new Uint8Array(2048), En = 0;
            try {
              if (0 >= e.pendingRootTasks) {
                var n, r = e.completedRootSegment;
                if (null !== r) {
                  if (r.status === os) return;
                  var o, i = e.renderState,
                    a = i.htmlChunks,
                    s = i.headChunks;
                  if (a) {
                    for (o = 0; o < a.length; o++) d(t, a[o]);
                    if (s)
                      for (o = 0; o < s.length; o++) d(t, s[o]);
                    else d(t, te("head")), d(t, Jr)
                  } else if (s)
                    for (o = 0; o < s.length; o++) d(t, s[o]);
                  var l = i.charsetChunks;
                  for (o = 0; o < l.length; o++) d(t, l[o]);
                  l.length = 0, i.preconnects.forEach(ue, t), i.preconnects.clear();
                  var c = i.viewportChunks;
                  for (o = 0; o < c.length; o++) d(t, c[o]);
                  c.length = 0, i.fontPreloads.forEach(ue, t), i.fontPreloads.clear(), i.highImagePreloads.forEach(ue, t), i.highImagePreloads.clear(), i.styles.forEach(de, t);
                  var u = i.importMapChunks;
                  for (o = 0; o < u.length; o++) d(t, u[o]);
                  u.length = 0, i.bootstrapScripts.forEach(ue, t), i.scripts.forEach(ue, t), i.scripts.clear(), i.bulkPreloads.forEach(ue, t), i.bulkPreloads.clear();
                  var f = i.hoistableChunks;
                  for (o = 0; o < f.length; o++) d(t, f[o]);
                  f.length = 0, a && null === s && d(t, ne("head")), Wt(e, t, r, null), e.completedRootSegment = null, re(t, e.renderState)
                }
                var g = e.renderState;
                r = 0;
                var y = g.viewportChunks;
                for (r = 0; r < y.length; r++) d(t, y[r]);
                y.length = 0, g.preconnects.forEach(ue, t), g.preconnects.clear(), g.fontPreloads.forEach(ue, t), g.fontPreloads.clear(), g.highImagePreloads.forEach(ue, t), g.highImagePreloads.clear(), g.styles.forEach(pe, t), g.scripts.forEach(ue, t), g.scripts.clear(), g.bulkPreloads.forEach(ue, t), g.bulkPreloads.clear();
                var v = g.hoistableChunks;
                for (r = 0; r < v.length; r++) d(t, v[r]);
                v.length = 0;
                var b = e.clientRenderedBoundaries;
                for (n = 0; n < b.length; n++) {
                  var k = b[n];
                  g = t;
                  var w = e.resumableState,
                    x = e.renderState,
                    C = k.rootSegmentID,
                    S = k.errorDigest,
                    T = k.errorMessage,
                    F = k.errorStack,
                    A = k.errorComponentStack;
                  d(g, x.startInlineScript), (w.instructions & gr) === hr ? (w.instructions |= gr, d(g, gi)) : d(g, yi), d(g, x.boundaryPrefix), d(g, m(C.toString(16))), d(g, vi), (S || T || F || A) && (d(g, bi), d(g, m(ie(S || "")))), (T || F || A) && (d(g, bi), d(g, m(ie(T || "")))), (F || A) && (d(g, bi), d(g, m(ie(F || "")))), A && (d(g, bi), d(g, m(ie(A))));
                  var L = h(g, ki);
                  if (!L) return e.destination = null, n++, void b.splice(0, n)
                }
                b.splice(0, n);
                var R = e.completedBoundaries;
                for (n = 0; n < R.length; n++)
                  if (!Zt(e, t, R[n])) return e.destination = null, n++, void R.splice(0, n);
                R.splice(0, n), p(t), Rn = new Uint8Array(2048), En = 0;
                var E = e.partialBoundaries;
                for (n = 0; n < E.length; n++) {
                  e: {
                    b = e,
                    k = t;
                    var M = E[n],
                      I = M.completedSegments;
                    for (L = 0; L < I.length; L++)
                      if (!$t(b, k, M, I[L])) {
                        L++, I.splice(0, L);
                        var O = !1;
                        break e
                      } I.splice(0, L),
                    O = ce(k, M.contentState, b.renderState)
                  }
                  if (!O) return e.destination = null,
                  n++,
                  void E.splice(0, n)
                }
                E.splice(0, n);
                var H = e.completedBoundaries;
                for (n = 0; n < H.length; n++)
                  if (!Zt(e, t, H[n])) return e.destination = null, n++, void H.splice(0, n);
                H.splice(0, n)
              }
            } finally {
              0 === e.allPendingTasks && 0 === e.pingedTasks.length && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length ? (e.flushScheduled = !1, (n = e.resumableState).hasBody && d(t, ne("body")), n.hasHtml && d(t, ne("html")), p(t), 0 !== e.abortableTasks.size && console.error("There was still abortable task at the root when we closed. This is a bug in React."), e.status = is, t.close(), e.destination = null) : p(t)
            }
          }

          function qt(e) {
            e.flushScheduled = null !== e.destination, Ln(function() {
              return Vt(e)
            }), u(function() {
              10 === e.status && (e.status = 11), null === e.trackedPostpones && jt(e, 0 === e.pendingRootTasks)
            })
          }

          function Yt(e) {
            !1 === e.flushScheduled && 0 === e.pingedTasks.length && null !== e.destination && (e.flushScheduled = !0, u(function() {
              var t = e.destination;
              t ? Gt(e, t) : e.flushScheduled = !1
            }))
          }

          function Kt(e, t) {
            if (13 === e.status) e.status = is, y(t, e.fatalError);
            else if (e.status !== is && null === e.destination) {
              e.destination = t;
              try {
                Gt(e, t)
              } catch (t) {
                bt(e, t, {}), kt(e, t)
              }
            }
          }

          function Xt(e, t) {
            (11 === e.status || 10 === e.status) && (e.status = 12);
            try {
              var n = e.abortableTasks;
              if (n.size > 0) {
                var r = void 0 === t ? Error("The render was aborted by the server without a reason.") : "object" == typeof t && null !== t && "function" == typeof t.then ? Error("The render was aborted by the server with a promise.") : t;
                e.fatalError = r, n.forEach(function(t) {
                  return Bt(t, e, r)
                }), n.clear()
              }
              null !== e.destination && Gt(e, e.destination)
            } catch (t) {
              bt(e, t, {}), kt(e, t)
            }
          }

          function Jt() {
            var e = Qt.version;
            if ("19.0.0" !== e) throw Error('Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      ' + e + "\n  - react-dom:  19.0.0\nLearn more: https://react.dev/warnings/version-mismatch")
          }
          var Qt = n(96540),
            en = n(40961),
            tn = Symbol.for("react.transitional.element"),
            nn = Symbol.for("react.portal"),
            rn = Symbol.for("react.fragment"),
            on = Symbol.for("react.strict_mode"),
            an = Symbol.for("react.profiler"),
            sn = Symbol.for("react.provider"),
            ln = Symbol.for("react.consumer"),
            cn = Symbol.for("react.context"),
            un = Symbol.for("react.forward_ref"),
            fn = Symbol.for("react.suspense"),
            dn = Symbol.for("react.suspense_list"),
            hn = Symbol.for("react.memo"),
            pn = Symbol.for("react.lazy"),
            mn = Symbol.for("react.scope"),
            gn = Symbol.for("react.debug_trace_mode"),
            yn = Symbol.for("react.offscreen"),
            vn = Symbol.for("react.legacy_hidden"),
            bn = Symbol.for("react.memo_cache_sentinel"),
            kn = Symbol.iterator,
            wn = Array.isArray,
            xn = new WeakMap,
            Cn = new WeakMap,
            Sn = Symbol.for("react.client.reference"),
            Tn = new MessageChannel,
            Fn = [];
          Tn.port1.onmessage = function() {
            var e = Fn.shift();
            e && e()
          };
          var An = Promise,
            Ln = "function" == typeof queueMicrotask ? queueMicrotask : function(e) {
              An.resolve(null).then(e).catch(f)
            },
            Rn = null,
            En = 0,
            Mn = new TextEncoder,
            In = Object.assign,
            On = {}.hasOwnProperty,
            Hn = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Bn = {},
            jn = {},
            Dn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),
            Nn = new Map([
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
            _n = {
              button: !0,
              checkbox: !0,
              image: !0,
              hidden: !0,
              radio: !0,
              reset: !0,
              submit: !0
            },
            Pn = {
              "aria-current": 0,
              "aria-description": 0,
              "aria-details": 0,
              "aria-disabled": 0,
              "aria-hidden": 0,
              "aria-invalid": 0,
              "aria-keyshortcuts": 0,
              "aria-label": 0,
              "aria-roledescription": 0,
              "aria-autocomplete": 0,
              "aria-checked": 0,
              "aria-expanded": 0,
              "aria-haspopup": 0,
              "aria-level": 0,
              "aria-modal": 0,
              "aria-multiline": 0,
              "aria-multiselectable": 0,
              "aria-orientation": 0,
              "aria-placeholder": 0,
              "aria-pressed": 0,
              "aria-readonly": 0,
              "aria-required": 0,
              "aria-selected": 0,
              "aria-sort": 0,
              "aria-valuemax": 0,
              "aria-valuemin": 0,
              "aria-valuenow": 0,
              "aria-valuetext": 0,
              "aria-atomic": 0,
              "aria-busy": 0,
              "aria-live": 0,
              "aria-relevant": 0,
              "aria-dropeffect": 0,
              "aria-grabbed": 0,
              "aria-activedescendant": 0,
              "aria-colcount": 0,
              "aria-colindex": 0,
              "aria-colspan": 0,
              "aria-controls": 0,
              "aria-describedby": 0,
              "aria-errormessage": 0,
              "aria-flowto": 0,
              "aria-labelledby": 0,
              "aria-owns": 0,
              "aria-posinset": 0,
              "aria-rowcount": 0,
              "aria-rowindex": 0,
              "aria-rowspan": 0,
              "aria-setsize": 0
            },
            Vn = {},
            Un = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Wn = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            zn = !1,
            Zn = {
              accept: "accept",
              acceptcharset: "acceptCharset",
              "accept-charset": "acceptCharset",
              accesskey: "accessKey",
              action: "action",
              allowfullscreen: "allowFullScreen",
              alt: "alt",
              as: "as",
              async: "async",
              autocapitalize: "autoCapitalize",
              autocomplete: "autoComplete",
              autocorrect: "autoCorrect",
              autofocus: "autoFocus",
              autoplay: "autoPlay",
              autosave: "autoSave",
              capture: "capture",
              cellpadding: "cellPadding",
              cellspacing: "cellSpacing",
              challenge: "challenge",
              charset: "charSet",
              checked: "checked",
              children: "children",
              cite: "cite",
              class: "className",
              classid: "classID",
              classname: "className",
              cols: "cols",
              colspan: "colSpan",
              content: "content",
              contenteditable: "contentEditable",
              contextmenu: "contextMenu",
              controls: "controls",
              controlslist: "controlsList",
              coords: "coords",
              crossorigin: "crossOrigin",
              dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
              data: "data",
              datetime: "dateTime",
              default: "default",
              defaultchecked: "defaultChecked",
              defaultvalue: "defaultValue",
              defer: "defer",
              dir: "dir",
              disabled: "disabled",
              disablepictureinpicture: "disablePictureInPicture",
              disableremoteplayback: "disableRemotePlayback",
              download: "download",
              draggable: "draggable",
              enctype: "encType",
              enterkeyhint: "enterKeyHint",
              fetchpriority: "fetchPriority",
              for: "htmlFor",
              form: "form",
              formmethod: "formMethod",
              formaction: "formAction",
              formenctype: "formEncType",
              formnovalidate: "formNoValidate",
              formtarget: "formTarget",
              frameborder: "frameBorder",
              headers: "headers",
              height: "height",
              hidden: "hidden",
              high: "high",
              href: "href",
              hreflang: "hrefLang",
              htmlfor: "htmlFor",
              httpequiv: "httpEquiv",
              "http-equiv": "httpEquiv",
              icon: "icon",
              id: "id",
              imagesizes: "imageSizes",
              imagesrcset: "imageSrcSet",
              inert: "inert",
              innerhtml: "innerHTML",
              inputmode: "inputMode",
              integrity: "integrity",
              is: "is",
              itemid: "itemID",
              itemprop: "itemProp",
              itemref: "itemRef",
              itemscope: "itemScope",
              itemtype: "itemType",
              keyparams: "keyParams",
              keytype: "keyType",
              kind: "kind",
              label: "label",
              lang: "lang",
              list: "list",
              loop: "loop",
              low: "low",
              manifest: "manifest",
              marginwidth: "marginWidth",
              marginheight: "marginHeight",
              max: "max",
              maxlength: "maxLength",
              media: "media",
              mediagroup: "mediaGroup",
              method: "method",
              min: "min",
              minlength: "minLength",
              multiple: "multiple",
              muted: "muted",
              name: "name",
              nomodule: "noModule",
              nonce: "nonce",
              novalidate: "noValidate",
              open: "open",
              optimum: "optimum",
              pattern: "pattern",
              placeholder: "placeholder",
              playsinline: "playsInline",
              poster: "poster",
              preload: "preload",
              profile: "profile",
              radiogroup: "radioGroup",
              readonly: "readOnly",
              referrerpolicy: "referrerPolicy",
              rel: "rel",
              required: "required",
              reversed: "reversed",
              role: "role",
              rows: "rows",
              rowspan: "rowSpan",
              sandbox: "sandbox",
              scope: "scope",
              scoped: "scoped",
              scrolling: "scrolling",
              seamless: "seamless",
              selected: "selected",
              shape: "shape",
              size: "size",
              sizes: "sizes",
              span: "span",
              spellcheck: "spellCheck",
              src: "src",
              srcdoc: "srcDoc",
              srclang: "srcLang",
              srcset: "srcSet",
              start: "start",
              step: "step",
              style: "style",
              summary: "summary",
              tabindex: "tabIndex",
              target: "target",
              title: "title",
              type: "type",
              usemap: "useMap",
              value: "value",
              width: "width",
              wmode: "wmode",
              wrap: "wrap",
              about: "about",
              accentheight: "accentHeight",
              "accent-height": "accentHeight",
              accumulate: "accumulate",
              additive: "additive",
              alignmentbaseline: "alignmentBaseline",
              "alignment-baseline": "alignmentBaseline",
              allowreorder: "allowReorder",
              alphabetic: "alphabetic",
              amplitude: "amplitude",
              arabicform: "arabicForm",
              "arabic-form": "arabicForm",
              ascent: "ascent",
              attributename: "attributeName",
              attributetype: "attributeType",
              autoreverse: "autoReverse",
              azimuth: "azimuth",
              basefrequency: "baseFrequency",
              baselineshift: "baselineShift",
              "baseline-shift": "baselineShift",
              baseprofile: "baseProfile",
              bbox: "bbox",
              begin: "begin",
              bias: "bias",
              by: "by",
              calcmode: "calcMode",
              capheight: "capHeight",
              "cap-height": "capHeight",
              clip: "clip",
              clippath: "clipPath",
              "clip-path": "clipPath",
              clippathunits: "clipPathUnits",
              cliprule: "clipRule",
              "clip-rule": "clipRule",
              color: "color",
              colorinterpolation: "colorInterpolation",
              "color-interpolation": "colorInterpolation",
              colorinterpolationfilters: "colorInterpolationFilters",
              "color-interpolation-filters": "colorInterpolationFilters",
              colorprofile: "colorProfile",
              "color-profile": "colorProfile",
              colorrendering: "colorRendering",
              "color-rendering": "colorRendering",
              contentscripttype: "contentScriptType",
              contentstyletype: "contentStyleType",
              cursor: "cursor",
              cx: "cx",
              cy: "cy",
              d: "d",
              datatype: "datatype",
              decelerate: "decelerate",
              descent: "descent",
              diffuseconstant: "diffuseConstant",
              direction: "direction",
              display: "display",
              divisor: "divisor",
              dominantbaseline: "dominantBaseline",
              "dominant-baseline": "dominantBaseline",
              dur: "dur",
              dx: "dx",
              dy: "dy",
              edgemode: "edgeMode",
              elevation: "elevation",
              enablebackground: "enableBackground",
              "enable-background": "enableBackground",
              end: "end",
              exponent: "exponent",
              externalresourcesrequired: "externalResourcesRequired",
              fill: "fill",
              fillopacity: "fillOpacity",
              "fill-opacity": "fillOpacity",
              fillrule: "fillRule",
              "fill-rule": "fillRule",
              filter: "filter",
              filterres: "filterRes",
              filterunits: "filterUnits",
              floodopacity: "floodOpacity",
              "flood-opacity": "floodOpacity",
              floodcolor: "floodColor",
              "flood-color": "floodColor",
              focusable: "focusable",
              fontfamily: "fontFamily",
              "font-family": "fontFamily",
              fontsize: "fontSize",
              "font-size": "fontSize",
              fontsizeadjust: "fontSizeAdjust",
              "font-size-adjust": "fontSizeAdjust",
              fontstretch: "fontStretch",
              "font-stretch": "fontStretch",
              fontstyle: "fontStyle",
              "font-style": "fontStyle",
              fontvariant: "fontVariant",
              "font-variant": "fontVariant",
              fontweight: "fontWeight",
              "font-weight": "fontWeight",
              format: "format",
              from: "from",
              fx: "fx",
              fy: "fy",
              g1: "g1",
              g2: "g2",
              glyphname: "glyphName",
              "glyph-name": "glyphName",
              glyphorientationhorizontal: "glyphOrientationHorizontal",
              "glyph-orientation-horizontal": "glyphOrientationHorizontal",
              glyphorientationvertical: "glyphOrientationVertical",
              "glyph-orientation-vertical": "glyphOrientationVertical",
              glyphref: "glyphRef",
              gradienttransform: "gradientTransform",
              gradientunits: "gradientUnits",
              hanging: "hanging",
              horizadvx: "horizAdvX",
              "horiz-adv-x": "horizAdvX",
              horizoriginx: "horizOriginX",
              "horiz-origin-x": "horizOriginX",
              ideographic: "ideographic",
              imagerendering: "imageRendering",
              "image-rendering": "imageRendering",
              in2: "in2",
              in: "in",
              inlist: "inlist",
              intercept: "intercept",
              k1: "k1",
              k2: "k2",
              k3: "k3",
              k4: "k4",
              k: "k",
              kernelmatrix: "kernelMatrix",
              kernelunitlength: "kernelUnitLength",
              kerning: "kerning",
              keypoints: "keyPoints",
              keysplines: "keySplines",
              keytimes: "keyTimes",
              lengthadjust: "lengthAdjust",
              letterspacing: "letterSpacing",
              "letter-spacing": "letterSpacing",
              lightingcolor: "lightingColor",
              "lighting-color": "lightingColor",
              limitingconeangle: "limitingConeAngle",
              local: "local",
              markerend: "markerEnd",
              "marker-end": "markerEnd",
              markerheight: "markerHeight",
              markermid: "markerMid",
              "marker-mid": "markerMid",
              markerstart: "markerStart",
              "marker-start": "markerStart",
              markerunits: "markerUnits",
              markerwidth: "markerWidth",
              mask: "mask",
              maskcontentunits: "maskContentUnits",
              maskunits: "maskUnits",
              mathematical: "mathematical",
              mode: "mode",
              numoctaves: "numOctaves",
              offset: "offset",
              opacity: "opacity",
              operator: "operator",
              order: "order",
              orient: "orient",
              orientation: "orientation",
              origin: "origin",
              overflow: "overflow",
              overlineposition: "overlinePosition",
              "overline-position": "overlinePosition",
              overlinethickness: "overlineThickness",
              "overline-thickness": "overlineThickness",
              paintorder: "paintOrder",
              "paint-order": "paintOrder",
              panose1: "panose1",
              "panose-1": "panose1",
              pathlength: "pathLength",
              patterncontentunits: "patternContentUnits",
              patterntransform: "patternTransform",
              patternunits: "patternUnits",
              pointerevents: "pointerEvents",
              "pointer-events": "pointerEvents",
              points: "points",
              pointsatx: "pointsAtX",
              pointsaty: "pointsAtY",
              pointsatz: "pointsAtZ",
              popover: "popover",
              popovertarget: "popoverTarget",
              popovertargetaction: "popoverTargetAction",
              prefix: "prefix",
              preservealpha: "preserveAlpha",
              preserveaspectratio: "preserveAspectRatio",
              primitiveunits: "primitiveUnits",
              property: "property",
              r: "r",
              radius: "radius",
              refx: "refX",
              refy: "refY",
              renderingintent: "renderingIntent",
              "rendering-intent": "renderingIntent",
              repeatcount: "repeatCount",
              repeatdur: "repeatDur",
              requiredextensions: "requiredExtensions",
              requiredfeatures: "requiredFeatures",
              resource: "resource",
              restart: "restart",
              result: "result",
              results: "results",
              rotate: "rotate",
              rx: "rx",
              ry: "ry",
              scale: "scale",
              security: "security",
              seed: "seed",
              shaperendering: "shapeRendering",
              "shape-rendering": "shapeRendering",
              slope: "slope",
              spacing: "spacing",
              specularconstant: "specularConstant",
              specularexponent: "specularExponent",
              speed: "speed",
              spreadmethod: "spreadMethod",
              startoffset: "startOffset",
              stddeviation: "stdDeviation",
              stemh: "stemh",
              stemv: "stemv",
              stitchtiles: "stitchTiles",
              stopcolor: "stopColor",
              "stop-color": "stopColor",
              stopopacity: "stopOpacity",
              "stop-opacity": "stopOpacity",
              strikethroughposition: "strikethroughPosition",
              "strikethrough-position": "strikethroughPosition",
              strikethroughthickness: "strikethroughThickness",
              "strikethrough-thickness": "strikethroughThickness",
              string: "string",
              stroke: "stroke",
              strokedasharray: "strokeDasharray",
              "stroke-dasharray": "strokeDasharray",
              strokedashoffset: "strokeDashoffset",
              "stroke-dashoffset": "strokeDashoffset",
              strokelinecap: "strokeLinecap",
              "stroke-linecap": "strokeLinecap",
              strokelinejoin: "strokeLinejoin",
              "stroke-linejoin": "strokeLinejoin",
              strokemiterlimit: "strokeMiterlimit",
              "stroke-miterlimit": "strokeMiterlimit",
              strokewidth: "strokeWidth",
              "stroke-width": "strokeWidth",
              strokeopacity: "strokeOpacity",
              "stroke-opacity": "strokeOpacity",
              suppresscontenteditablewarning: "suppressContentEditableWarning",
              suppresshydrationwarning: "suppressHydrationWarning",
              surfacescale: "surfaceScale",
              systemlanguage: "systemLanguage",
              tablevalues: "tableValues",
              targetx: "targetX",
              targety: "targetY",
              textanchor: "textAnchor",
              "text-anchor": "textAnchor",
              textdecoration: "textDecoration",
              "text-decoration": "textDecoration",
              textlength: "textLength",
              textrendering: "textRendering",
              "text-rendering": "textRendering",
              to: "to",
              transform: "transform",
              transformorigin: "transformOrigin",
              "transform-origin": "transformOrigin",
              typeof: "typeof",
              u1: "u1",
              u2: "u2",
              underlineposition: "underlinePosition",
              "underline-position": "underlinePosition",
              underlinethickness: "underlineThickness",
              "underline-thickness": "underlineThickness",
              unicode: "unicode",
              unicodebidi: "unicodeBidi",
              "unicode-bidi": "unicodeBidi",
              unicoderange: "unicodeRange",
              "unicode-range": "unicodeRange",
              unitsperem: "unitsPerEm",
              "units-per-em": "unitsPerEm",
              unselectable: "unselectable",
              valphabetic: "vAlphabetic",
              "v-alphabetic": "vAlphabetic",
              values: "values",
              vectoreffect: "vectorEffect",
              "vector-effect": "vectorEffect",
              version: "version",
              vertadvy: "vertAdvY",
              "vert-adv-y": "vertAdvY",
              vertoriginx: "vertOriginX",
              "vert-origin-x": "vertOriginX",
              vertoriginy: "vertOriginY",
              "vert-origin-y": "vertOriginY",
              vhanging: "vHanging",
              "v-hanging": "vHanging",
              videographic: "vIdeographic",
              "v-ideographic": "vIdeographic",
              viewbox: "viewBox",
              viewtarget: "viewTarget",
              visibility: "visibility",
              vmathematical: "vMathematical",
              "v-mathematical": "vMathematical",
              vocab: "vocab",
              widths: "widths",
              wordspacing: "wordSpacing",
              "word-spacing": "wordSpacing",
              writingmode: "writingMode",
              "writing-mode": "writingMode",
              x1: "x1",
              x2: "x2",
              x: "x",
              xchannelselector: "xChannelSelector",
              xheight: "xHeight",
              "x-height": "xHeight",
              xlinkactuate: "xlinkActuate",
              "xlink:actuate": "xlinkActuate",
              xlinkarcrole: "xlinkArcrole",
              "xlink:arcrole": "xlinkArcrole",
              xlinkhref: "xlinkHref",
              "xlink:href": "xlinkHref",
              xlinkrole: "xlinkRole",
              "xlink:role": "xlinkRole",
              xlinkshow: "xlinkShow",
              "xlink:show": "xlinkShow",
              xlinktitle: "xlinkTitle",
              "xlink:title": "xlinkTitle",
              xlinktype: "xlinkType",
              "xlink:type": "xlinkType",
              xmlbase: "xmlBase",
              "xml:base": "xmlBase",
              xmllang: "xmlLang",
              "xml:lang": "xmlLang",
              xmlns: "xmlns",
              "xml:space": "xmlSpace",
              xmlnsxlink: "xmlnsXlink",
              "xmlns:xlink": "xmlnsXlink",
              xmlspace: "xmlSpace",
              y1: "y1",
              y2: "y2",
              y: "y",
              ychannelselector: "yChannelSelector",
              z: "z",
              zoomandpan: "zoomAndPan"
            },
            $n = {},
            Gn = /^on./,
            qn = /^on[^A-Z]/,
            Yn = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Kn = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Xn = /^(?:webkit|moz|o)[A-Z]/,
            Jn = /^-ms-/,
            Qn = /-(.)/g,
            er = /;\s*$/,
            tr = {},
            nr = {},
            rr = !1,
            or = !1,
            ir = /["'&<>]/,
            ar = /([A-Z])/g,
            sr = /^ms-/,
            lr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,
            cr = Qt.I,
            ur = en.B,
            fr = Object.freeze({
              pending: !1,
              data: null,
              method: null,
              action: null
            }),
            dr = ur.d;
          ur.d = {
            f: dr.f,
            r: dr.r,
            D: function(e) {
              var t = as || null;
              if (t) {
                var n, r, o = t.resumableState,
                  i = t.renderState;
                "string" == typeof e && e && (o.dnsResources.hasOwnProperty(e) || (o.dnsResources[e] = vr, (r = (o = i.headers) && o.remainingCapacity > 0) && (n = "<" + ke(e) + ">; rel=dns-prefetch", r = (o.remainingCapacity -= n.length + 2) >= 0), r ? (i.resets.dns[e] = vr, o.preconnects && (o.preconnects += ", "), o.preconnects += n) : (Y(n = [], {
                  href: e,
                  rel: "dns-prefetch"
                }), i.preconnects.add(n))), Yt(t))
              } else dr.D(e)
            },
            C: function(e, t) {
              var n = as || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if ("string" == typeof e && e) {
                  var i, a, s = "use-credentials" === t ? "credentials" : "string" == typeof t ? "anonymous" : "default";
                  r.connectResources[s].hasOwnProperty(e) || (r.connectResources[s][e] = vr, (a = (r = o.headers) && r.remainingCapacity > 0) && (a = "<" + ke(e) + ">; rel=preconnect", "string" == typeof t && (a += '; crossorigin="' + xe(t, "crossOrigin") + '"'), i = a, a = (r.remainingCapacity -= i.length + 2) >= 0), a ? (o.resets.connect[s][e] = vr, r.preconnects && (r.preconnects += ", "), r.preconnects += i) : (Y(s = [], {
                    rel: "preconnect",
                    href: e,
                    crossOrigin: t
                  }), o.preconnects.add(s))), Yt(n)
                }
              } else dr.C(e, t)
            },
            L: function(e, t, n) {
              var r = as || null;
              if (r) {
                var o = r.resumableState,
                  i = r.renderState;
                if (t && e) {
                  switch (t) {
                    case "image":
                      if (n) var a = n.imageSrcSet,
                        s = n.imageSizes,
                        l = n.fetchPriority;
                      var c, u = a ? a + "\n" + (s || "") : e;
                      if (o.imageResources.hasOwnProperty(u)) return;
                      o.imageResources[u] = br, (o = i.headers) && o.remainingCapacity > 0 && "high" === l && (c = be(e, t, n), (o.remainingCapacity -= c.length + 2) >= 0) ? (i.resets.image[u] = br, o.highImagePreloads && (o.highImagePreloads += ", "), o.highImagePreloads += c) : (Y(o = [], In({
                        rel: "preload",
                        href: a ? void 0 : e,
                        as: t
                      }, n)), "high" === l ? i.highImagePreloads.add(o) : (i.bulkPreloads.add(o), i.preloads.images.set(u, o)));
                      break;
                    case "style":
                      if (o.styleResources.hasOwnProperty(e)) return;
                      Y(a = [], In({
                        rel: "preload",
                        href: e,
                        as: t
                      }, n)), o.styleResources[e] = !n || "string" != typeof n.crossOrigin && "string" != typeof n.integrity ? br : [n.crossOrigin, n.integrity], i.preloads.stylesheets.set(e, a), i.bulkPreloads.add(a);
                      break;
                    case "script":
                      if (o.scriptResources.hasOwnProperty(e)) return;
                      a = [], i.preloads.scripts.set(e, a), i.bulkPreloads.add(a), Y(a, In({
                        rel: "preload",
                        href: e,
                        as: t
                      }, n)), o.scriptResources[e] = !n || "string" != typeof n.crossOrigin && "string" != typeof n.integrity ? br : [n.crossOrigin, n.integrity];
                      break;
                    default:
                      if (o.unknownResources.hasOwnProperty(t)) {
                        if ((a = o.unknownResources[t]).hasOwnProperty(e)) return
                      } else a = {}, o.unknownResources[t] = a;
                      a[e] = br, (o = i.headers) && o.remainingCapacity > 0 && "font" === t && (u = be(e, t, n), (o.remainingCapacity -= u.length + 2) >= 0) ? (i.resets.font[e] = br, o.fontPreloads && (o.fontPreloads += ", "), o.fontPreloads += u) : "font" === (Y(o = [], e = In({
                        rel: "preload",
                        href: e,
                        as: t
                      }, n)), t) ? i.fontPreloads.add(o) : i.bulkPreloads.add(o)
                  }
                  Yt(r)
                }
              } else dr.L(e, t, n)
            },
            m: function(e, t) {
              var n = as || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if (e) {
                  var i = t && "string" == typeof t.as ? t.as : "script";
                  if ("script" === i) {
                    if (r.moduleScriptResources.hasOwnProperty(e)) return;
                    i = [], r.moduleScriptResources[e] = !t || "string" != typeof t.crossOrigin && "string" != typeof t.integrity ? br : [t.crossOrigin, t.integrity], o.preloads.moduleScripts.set(e, i)
                  } else {
                    if (r.moduleUnknownResources.hasOwnProperty(i)) {
                      var a = r.unknownResources[i];
                      if (a.hasOwnProperty(e)) return
                    } else a = {}, r.moduleUnknownResources[i] = a;
                    i = [], a[e] = br
                  }
                  Y(i, In({
                    rel: "modulepreload",
                    href: e
                  }, t)), o.bulkPreloads.add(i), Yt(n)
                }
              } else dr.m(e, t)
            },
            X: function(e, t) {
              var n = as || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if (e) {
                  var i = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
                  i !== vr && (r.scriptResources[e] = vr, t = In({
                    src: e,
                    async: !0
                  }, t), i && (2 === i.length && ve(t, i), e = o.preloads.scripts.get(e)) && (e.length = 0), e = [], o.scripts.add(e), Q(e, t), Yt(n))
                }
              } else dr.X(e, t)
            },
            S: function(e, t, n) {
              var r = as || null;
              if (r) {
                var o = r.resumableState,
                  i = r.renderState;
                if (e) {
                  t = t || "default";
                  var a = i.styles.get(t),
                    s = o.styleResources.hasOwnProperty(e) ? o.styleResources[e] : void 0;
                  s !== vr && (o.styleResources[e] = vr, a || (a = {
                    precedence: m(R(t)),
                    rules: [],
                    hrefs: [],
                    sheets: new Map
                  }, i.styles.set(t, a)), t = {
                    state: _i,
                    props: In({
                      rel: "stylesheet",
                      href: e,
                      "data-precedence": t
                    }, n)
                  }, s && (2 === s.length && ve(t.props, s), (i = i.preloads.stylesheets.get(e)) && i.length > 0 ? i.length = 0 : t.state = Pi), a.sheets.set(e, t), Yt(r))
                }
              } else dr.S(e, t, n)
            },
            M: function(e, t) {
              var n = as || null;
              if (n) {
                var r = n.resumableState,
                  o = n.renderState;
                if (e) {
                  var i = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
                  i !== vr && (r.moduleScriptResources[e] = vr, t = In({
                    src: e,
                    type: "module",
                    async: !0
                  }, t), i && (2 === i.length && ve(t, i), e = o.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], o.scripts.add(e), Q(e, t), Yt(n))
                }
              } else dr.M(e, t)
            }
          };
          var hr = 0,
            pr = 1,
            mr = 2,
            gr = 4,
            yr = 8,
            vr = null,
            br = [];
          Object.freeze(br), g('"></template>');
          var kr = g("<script>"),
            wr = g("<\/script>"),
            xr = g('<script src="'),
            Cr = g('<script type="module" src="'),
            Sr = g('" nonce="'),
            Tr = g('" integrity="'),
            Fr = g('" crossorigin="'),
            Ar = g('" async=""><\/script>'),
            Lr = /(<\/|<)(s)(cript)/gi,
            Rr = g('<script type="importmap">'),
            Er = g("<\/script>"),
            Mr = {},
            Ir = 0,
            Or = 1,
            Hr = 2,
            Br = 3,
            jr = 4,
            Dr = 5,
            Nr = 6,
            _r = 7,
            Pr = 8,
            Vr = g("\x3c!-- --\x3e"),
            Ur = new Map,
            Wr = g(' style="'),
            zr = g(":"),
            Zr = g(";"),
            $r = g(" "),
            Gr = g('="'),
            qr = g('"'),
            Yr = g('=""'),
            Kr = g(R("javascript:throw new Error('React form unexpectedly submitted.')")),
            Xr = g('<input type="hidden"'),
            Jr = g(">"),
            Qr = g("/>"),
            eo = !1,
            to = !1,
            no = !1,
            ro = !1,
            oo = !1,
            io = !1,
            ao = !1,
            so = !1,
            lo = !1,
            co = !1,
            uo = !1,
            fo = g(' selected=""'),
            ho = g('addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});'),
            po = g("\x3c!--F!--\x3e"),
            mo = g("\x3c!--F--\x3e"),
            go = /(<\/|<)(s)(tyle)/gi,
            yo = g("\n"),
            vo = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
            bo = new Map,
            ko = g("<!DOCTYPE html>"),
            wo = new Map,
            xo = g('<template id="'),
            Co = g('"></template>'),
            So = g("\x3c!--$--\x3e"),
            To = g('\x3c!--$?--\x3e<template id="'),
            Fo = g('"></template>'),
            Ao = g("\x3c!--$!--\x3e"),
            Lo = g("\x3c!--/$--\x3e"),
            Ro = g("<template"),
            Eo = g('"'),
            Mo = g(' data-dgst="'),
            Io = g(' data-msg="'),
            Oo = g(' data-stck="'),
            Ho = g(' data-cstck="'),
            Bo = g("></template>"),
            jo = g('<div hidden id="'),
            Do = g('">'),
            No = g("</div>"),
            _o = g('<svg aria-hidden="true" style="display:none" id="'),
            Po = g('">'),
            Vo = g("</svg>"),
            Uo = g('<math aria-hidden="true" style="display:none" id="'),
            Wo = g('">'),
            zo = g("</math>"),
            Zo = g('<table hidden id="'),
            $o = g('">'),
            Go = g("</table>"),
            qo = g('<table hidden><tbody id="'),
            Yo = g('">'),
            Ko = g("</tbody></table>"),
            Xo = g('<table hidden><tr id="'),
            Jo = g('">'),
            Qo = g("</tr></table>"),
            ei = g('<table hidden><colgroup id="'),
            ti = g('">'),
            ni = g("</colgroup></table>"),
            ri = g('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),
            oi = g('$RS("'),
            ii = g('","'),
            ai = g('")<\/script>');
          g('<template data-rsi="" data-sid="'), g('" data-pid="');
          var si = g('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'),
            li = g('$RC("'),
            ci = g('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'),
            ui = g('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'),
            fi = g('$RR("'),
            di = g('","'),
            hi = g('",'),
            pi = g('"'),
            mi = g(")<\/script>");
          g('<template data-rci="" data-bid="'), g('<template data-rri="" data-bid="'), g('" data-sid="'), g('" data-sty="');
          var gi = g('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'),
            yi = g('$RX("'),
            vi = g('"'),
            bi = g(","),
            ki = g(")<\/script>");
          g('<template data-rxi="" data-bid="'), g('" data-dgst="'), g('" data-msg="'), g('" data-stck="'), g('" data-cstck="');
          var wi = /[<\u2028\u2029]/g,
            xi = /[&><\u2028\u2029]/g,
            Ci = g('<style media="not all" data-precedence="'),
            Si = g('" data-href="'),
            Ti = g('">'),
            Fi = g("</style>"),
            Ai = !1,
            Li = !0,
            Ri = [],
            Ei = g('<style data-precedence="'),
            Mi = g('" data-href="'),
            Ii = g(" "),
            Oi = g('">'),
            Hi = g("</style>"),
            Bi = g("["),
            ji = g(",["),
            Di = g(","),
            Ni = g("]"),
            _i = 0,
            Pi = 1,
            Vi = 2,
            Ui = 3,
            Wi = /[<>\r\n]/g,
            zi = /["';,\r\n]/g,
            Zi = function() {}.bind,
            $i = Symbol.for("react.client.reference"),
            Gi = {};
          Object.freeze(Gi);
          var qi, Yi = {},
            Ki = null,
            Xi = {},
            Ji = {},
            Qi = new Set,
            ea = new Set,
            ta = new Set,
            na = new Set,
            ra = new Set,
            oa = new Set,
            ia = new Set,
            aa = new Set,
            sa = new Set,
            la = {
              isMounted: function() {
                return !1
              },
              enqueueSetState: function(e, t, n) {
                var r = e.W;
                null === r.queue ? He(e, "setState") : (r.queue.push(t), null != n && Oe(n))
              },
              enqueueReplaceState: function(e, t, n) {
                (e = e.W).replace = !0, e.queue = [t], null != n && Oe(n)
              },
              enqueueForceUpdate: function(e, t) {
                null === e.W.queue ? He(e, "forceUpdate") : null != t && Oe(t)
              }
            },
            ca = {
              id: 1,
              overflow: ""
            },
            ua = Math.clz32 ? Math.clz32 : function(e) {
              return 0 == (e >>>= 0) ? 32 : 31 - (fa(e) / da | 0) | 0
            },
            fa = Math.log,
            da = Math.LN2,
            ha = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"),
            pa = null,
            ma = "function" == typeof Object.is ? Object.is : function(e, t) {
              return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            },
            ga = null,
            ya = null,
            va = null,
            ba = null,
            ka = null,
            wa = null,
            xa = !1,
            Ca = !1,
            Sa = 0,
            Ta = 0,
            Fa = -1,
            Aa = 0,
            La = null,
            Ra = null,
            Ea = 0,
            Ma = !1,
            Ia = {
              readContext: We,
              use: function(e) {
                if (null !== e && "object" == typeof e) {
                  if ("function" == typeof e.then) return Xe(e);
                  if (e.$$typeof === cn) return We(e)
                }
                throw Error("An unsupported type was passed to use(): " + e)
              },
              useContext: function(e) {
                return qi = "useContext", Ne(), e.$
              },
              useMemo: $e,
              useReducer: Ze,
              useRef: function(e) {
                ga = Ne();
                var t = (wa = Pe()).memoizedState;
                return null === t ? (Object.seal(e = {
                  current: e
                }), wa.memoizedState = e) : t
              },
              useState: function(e) {
                return qi = "useState", Ze(ze, e)
              },
              useInsertionEffect: Qe,
              useLayoutEffect: Qe,
              useCallback: function(e, t) {
                return $e(function() {
                  return e
                }, t)
              },
              useImperativeHandle: Qe,
              useEffect: Qe,
              useDebugValue: Qe,
              useDeferredValue: function(e, t) {
                return Ne(), void 0 !== t ? t : e
              },
              useTransition: function() {
                return Ne(), [!1, qe]
              },
              useId: function() {
                var e = ya.treeContext,
                  t = e.overflow;
                e = ((e = e.id) & ~(1 << 32 - ua(e) - 1)).toString(32) + t;
                var n = Pa;
                if (null === n) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
                return t = Sa++, e = ":" + n.idPrefix + "R" + e, t > 0 && (e += "H" + t.toString(32)), e + ":"
              },
              useSyncExternalStore: function(e, t, n) {
                if (void 0 === n) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
                return n()
              },
              useCacheRefresh: function() {
                return Je
              },
              useMemoCache: function(e) {
                for (var t = Array(e), n = 0; e > n; n++) t[n] = bn;
                return t
              },
              useHostTransitionStatus: function() {
                return Ne(), fr
              },
              useOptimistic: function(e) {
                return Ne(), [e, Ye]
              }
            };
          Ia.useFormState = Ke, Ia.useActionState = Ke;
          var Oa, Ha, Ba, ja, Da, Na, _a, Pa = null,
            Va = null,
            Ua = {
              getCacheForType: function() {
                throw Error("Not implemented.")
              },
              getOwner: function() {
                return null === Va ? null : Va.componentStack
              }
            },
            Wa = 0;
          et.O = !0;
          var za, Za, $a = !1,
            Ga = new("function" == typeof WeakMap ? WeakMap : Map),
            qa = {
              "react-stack-bottom-frame": function(e, t, n) {
                return e(t, n)
              }
            },
            Ya = qa["react-stack-bottom-frame"].bind(qa),
            Ka = {
              "react-stack-bottom-frame": function(e) {
                return e.render()
              }
            },
            Xa = Ka["react-stack-bottom-frame"].bind(Ka),
            Ja = {
              "react-stack-bottom-frame": function(e) {
                return (0, e.h)(e.u)
              }
            },
            Qa = Ja["react-stack-bottom-frame"].bind(Ja),
            es = 4,
            ts = 0,
            ns = 1,
            rs = 2,
            os = 5,
            is = 14,
            as = null,
            ss = {},
            ls = {},
            cs = {},
            us = {},
            fs = !1,
            ds = !1,
            hs = !1;
          Jt(), Jt(), t.prerender = function(e, t) {
            return new Promise(function(n, r) {
              var o, i = t ? t.onHeaders : void 0;
              i && (o = function(e) {
                i(new Headers(e))
              });
              var a = O(t ? t.identifierPrefix : void 0, t && t.unstable_externalRuntimeSrc, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0),
                s = function(e, t, n, r, o, i, a, s, l, c, u) {
                  return (e = lt(e, t, n, r, o, i, a, void 0, void 0, c, u, void 0)).trackedPostpones = {
                    workingMap: new Map,
                    rootNodes: [],
                    rootSlots: null
                  }, e
                }(e, a, I(a, void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, o, t ? t.maxHeadersLength : void 0), B(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, function() {
                  var e = {
                    prelude: new ReadableStream({
                      type: "bytes",
                      pull: function(e) {
                        Kt(s, e)
                      },
                      cancel: function(e) {
                        s.destination = null, Xt(s, e)
                      }
                    }, {
                      highWaterMark: 0
                    })
                  };
                  n(e)
                }, 0, 0, r, t ? t.onPostpone : void 0);
              if (t && t.signal) {
                var l = t.signal;
                if (l.aborted) Xt(s, l.reason);
                else {
                  var c = function() {
                    Xt(s, l.reason), l.removeEventListener("abort", c)
                  };
                  l.addEventListener("abort", c)
                }
              }
              qt(s)
            })
          }, t.renderToReadableStream = function(e, t) {
            return new Promise(function(n, r) {
              var o, i, a, s = new Promise(function(e, t) {
                  i = e, o = t
                }),
                l = t ? t.onHeaders : void 0;
              l && (a = function(e) {
                l(new Headers(e))
              });
              var c = O(t ? t.identifierPrefix : void 0, t && t.unstable_externalRuntimeSrc, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0),
                u = lt(e, c, I(c, t ? t.nonce : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, a, t ? t.maxHeadersLength : void 0), B(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, i, function() {
                  var e = new ReadableStream({
                    type: "bytes",
                    pull: function(e) {
                      Kt(u, e)
                    },
                    cancel: function(e) {
                      u.destination = null, Xt(u, e)
                    }
                  }, {
                    highWaterMark: 0
                  });
                  e.allReady = s, n(e)
                }, function(e) {
                  s.catch(function() {}), r(e)
                }, o, t ? t.onPostpone : void 0, t ? t.formState : void 0);
              if (t && t.signal) {
                var f = t.signal;
                if (f.aborted) Xt(u, f.reason);
                else {
                  var d = function() {
                    Xt(u, f.reason), f.removeEventListener("abort", d)
                  };
                  f.addEventListener("abort", d)
                }
              }
              qt(u)
            })
          }, t.version = "19.0.0"
        }()
      },
      64837: (e, t, n) => {
        "use strict";
        e = n.nmd(e);
        var r = n(65606);
        ! function() {
          function n(e, t) {
            Object.defineProperty(a.prototype, e, {
              get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1])
              }
            })
          }

          function o(e) {
            return null === e || "object" != typeof e ? null : "function" == typeof(e = Y && e[Y] || e["@@iterator"]) ? e : null
          }

          function i(e, t) {
            var n = (e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass") + "." + t;
            K[n] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, e), K[n] = !0)
          }

          function a(e, t, n) {
            this.props = e, this.context = t, this.refs = Q, this.updater = n || X
          }

          function s() {}

          function l(e, t, n) {
            this.props = e, this.context = t, this.refs = Q, this.updater = n || X
          }

          function c(e) {
            return "" + e
          }

          function u(e) {
            try {
              c(e);
              var t = !1
            } catch {
              t = !0
            }
            if (t) {
              var n = (t = console).error,
                r = "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
              return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", r), c(e)
            }
          }

          function f(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.$$typeof === ue ? null : e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
              case N:
                return "Fragment";
              case D:
                return "Portal";
              case P:
                return "Profiler";
              case _:
                return "StrictMode";
              case z:
                return "Suspense";
              case Z:
                return "SuspenseList"
            }
            if ("object" == typeof e) switch ("number" == typeof e.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
              case U:
                return (e.displayName || "Context") + ".Provider";
              case V:
                return (e.l.displayName || "Context") + ".Consumer";
              case W:
                var t = e.render;
                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
              case $:
                return null !== (t = e.displayName || null) ? t : f(e.type) || "Memo";
              case G:
                t = e.u, e = e.h;
                try {
                  return f(e(t))
                } catch {}
            }
            return null
          }

          function d(e) {
            return "string" == typeof e || "function" == typeof e || e === N || e === P || e === _ || e === z || e === Z || e === q || "object" == typeof e && null !== e && (e.$$typeof === G || e.$$typeof === $ || e.$$typeof === U || e.$$typeof === V || e.$$typeof === W || e.$$typeof === he || void 0 !== e.getModuleId)
          }

          function h() {}

          function p(e) {
            if (void 0 === me) try {
              throw Error()
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              me = t && t[1] || "", ge = e.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : e.stack.indexOf("@") > -1 ? "@unknown:0:0" : ""
            }
            return "\n" + me + e + ge
          }

          function m(e, t) {
            if (!e || be) return "";
            var n, r = ke.get(e);
            if (void 0 !== r) return r;
            be = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0, n = fe.H, fe.H = null,
              function() {
                if (0 === pe) {
                  ne = console.log, re = console.info, oe = console.warn, ie = console.error, ae = console.group, se = console.groupCollapsed, le = console.groupEnd;
                  var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: h,
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
                pe++
              }();
            try {
              var o = {
                DetermineComponentFrameRoot: function() {
                  try {
                    if (t) {
                      var n = function() {
                        throw Error()
                      };
                      if (Object.defineProperty(n.prototype, "props", {
                          set: function() {
                            throw Error()
                          }
                        }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                          Reflect.construct(n, [])
                        } catch (e) {
                          var r = e
                        }
                        Reflect.construct(e, [], n)
                      } else {
                        try {
                          n.call()
                        } catch (e) {
                          r = e
                        }
                        e.call(n.prototype)
                      }
                    } else {
                      try {
                        throw Error()
                      } catch (e) {
                        r = e
                      }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                    }
                  } catch (e) {
                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                  }
                  return [null, null]
                }
              };
              o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
              var i = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
              i && i.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
              });
              var a = o.DetermineComponentFrameRoot(),
                s = a[0],
                l = a[1];
              if (s && l) {
                var c = s.split("\n"),
                  u = l.split("\n");
                for (a = i = 0; i < c.length && !c[i].includes("DetermineComponentFrameRoot");) i++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (i === c.length || a === u.length)
                  for (i = c.length - 1, a = u.length - 1; i >= 1 && a >= 0 && c[i] !== u[a];) a--;
                for (; i >= 1 && a >= 0; i--, a--)
                  if (c[i] !== u[a]) {
                    if (1 !== i || 1 !== a)
                      do {
                        if (i--, 0 > --a || c[i] !== u[a]) {
                          var f = "\n" + c[i].replace(" at new ", " at ");
                          return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), "function" == typeof e && ke.set(e, f), f
                        }
                      } while (i >= 1 && a >= 0);
                    break
                  }
              }
            } finally {
              be = !1, fe.H = n,
                function() {
                  if (0 === --pe) {
                    var e = {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0
                    };
                    Object.defineProperties(console, {
                      log: J({}, e, {
                        value: ne
                      }),
                      info: J({}, e, {
                        value: re
                      }),
                      warn: J({}, e, {
                        value: oe
                      }),
                      error: J({}, e, {
                        value: ie
                      }),
                      group: J({}, e, {
                        value: ae
                      }),
                      groupCollapsed: J({}, e, {
                        value: se
                      }),
                      groupEnd: J({}, e, {
                        value: le
                      })
                    })
                  }
                  0 > pe && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
                }(), Error.prepareStackTrace = r
            }
            return c = (c = e ? e.displayName || e.name : "") ? p(c) : "", "function" == typeof e && ke.set(e, c), c
          }

          function g(e) {
            if (null == e) return "";
            if ("function" == typeof e) {
              var t = e.prototype;
              return m(e, !(!t || !t.isReactComponent))
            }
            if ("string" == typeof e) return p(e);
            switch (e) {
              case z:
                return p("Suspense");
              case Z:
                return p("SuspenseList")
            }
            if ("object" == typeof e) switch (e.$$typeof) {
              case W:
                return m(e.render, !1);
              case $:
                return g(e.type);
              case G:
                t = e.u, e = e.h;
                try {
                  return g(e(t))
                } catch {}
            }
            return ""
          }

          function y() {
            var e = fe.A;
            return null === e ? null : e.getOwner()
          }

          function v(e) {
            if (de.call(e, "key")) {
              var t = Object.getOwnPropertyDescriptor(e, "key").get;
              if (t && t.isReactWarning) return !1
            }
            return void 0 !== e.key
          }

          function b() {
            var e = f(this.type);
            return xe[e] || (xe[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), void 0 !== (e = this.props.ref) ? e : null
          }

          function k(e, t, n, r, o, i) {
            return n = i.ref, Object.defineProperty(e = {
              $$typeof: j,
              type: e,
              key: t,
              props: i,
              v: o
            }, "ref", null !== (void 0 !== n ? n : null) ? {
              enumerable: !1,
              get: b
            } : {
              enumerable: !1,
              value: null
            }), e.F = {}, Object.defineProperty(e.F, "validated", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: 0
            }), Object.defineProperty(e, "R", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: null
            }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e
          }

          function w(e, t) {
            if ("object" == typeof e && e && e.$$typeof !== we)
              if (ce(e))
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  x(r) && C(r, t)
                } else if (x(e)) e.F && (e.F.validated = 1);
                else if ("function" == typeof(n = o(e)) && n !== e.entries && (n = n.call(e)) !== e)
              for (; !(e = n.next()).done;) x(e.value) && C(e.value, t)
          }

          function x(e) {
            return "object" == typeof e && null !== e && e.$$typeof === j
          }

          function C(e, t) {
            if (e.F && !e.F.validated && null == e.key && (e.F.validated = 1, t = function(e) {
                var t = "",
                  n = y();
                return n && (n = f(n.type)) && (t = "\n\nCheck the render method of `" + n + "`."), t || (e = f(e)) && (t = "\n\nCheck the top-level render call using <" + e + ">."), t
              }(t), !Ce[t])) {
              Ce[t] = !0;
              var n = "";
              e && null != e.v && e.v !== y() && (n = null, "number" == typeof e.v.tag ? n = f(e.v.type) : "string" == typeof e.v.name && (n = e.v.name), n = " It was passed a child from " + n + ".");
              var r = fe.getCurrentStack;
              fe.getCurrentStack = function() {
                var t = g(e.type);
                return r && (t += r() || ""), t
              }, console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', t, n), fe.getCurrentStack = r
            }
          }

          function S(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? (u(e.key), function(e) {
              var t = {
                "=": "=0",
                ":": "=2"
              };
              return "$" + e.replace(/[=:]/g, function(e) {
                return t[e]
              })
            }("" + e.key)) : t.toString(36)
          }

          function T() {}

          function F(e, t, n, r, i) {
            var a = typeof e;
            ("undefined" === a || "boolean" === a) && (e = null);
            var s = !1;
            if (null === e) s = !0;
            else switch (a) {
              case "bigint":
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case j:
                  case D:
                    s = !0;
                    break;
                  case G:
                    return F((s = e.h)(e.u), t, n, r, i)
                }
            }
            if (s) {
              i = i(s = e);
              var l = "" === r ? "." + S(s, 0) : r;
              return ce(i) ? (n = "", null != l && (n = l.replace(Te, "$&/") + "/"), F(i, t, n, "", function(e) {
                return e
              })) : null != i && (x(i) && (null != i.key && (s && s.key === i.key || u(i.key)), n = function(e, t) {
                return (t = k(e.type, t, void 0, 0, e.v, e.props)).F.validated = e.F.validated, t
              }(i, n + (null == i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Te, "$&/") + "/") + l), "" !== r && null != s && x(s) && null == s.key && s.F && !s.F.validated && (n.F.validated = 2), i = n), t.push(i)), 1
            }
            if (s = 0, l = "" === r ? "." : r + ":", ce(e))
              for (var c = 0; c < e.length; c++) s += F(r = e[c], t, n, a = l + S(r, c), i);
            else if ("function" == typeof(c = o(e)))
              for (c === e.entries && (Se || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Se = !0), e = c.call(e), c = 0; !(r = e.next()).done;) s += F(r = r.value, t, n, a = l + S(r, c++), i);
            else if ("object" === a) {
              if ("function" == typeof e.then) return F(function(e) {
                switch (e.status) {
                  case "fulfilled":
                    return e.value;
                  case "rejected":
                    throw e.reason;
                  default:
                    switch ("string" == typeof e.status ? e.then(T, T) : (e.status = "pending", e.then(function(t) {
                        "pending" === e.status && (e.status = "fulfilled", e.value = t)
                      }, function(t) {
                        "pending" === e.status && (e.status = "rejected", e.reason = t)
                      })), e.status) {
                      case "fulfilled":
                        return e.value;
                      case "rejected":
                        throw e.reason
                    }
                }
                throw e
              }(e), t, n, r, i);
              throw Error("Objects are not valid as a React child (found: " + ("[object Object]" == (t = e + "") ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
            }
            return s
          }

          function A(e, t, n) {
            if (null == e) return e;
            var r = [],
              o = 0;
            return F(e, r, "", "", function(e) {
              return t.call(n, e, o++)
            }), r
          }

          function L(e) {
            if (-1 === e.q) {
              var t = e.Y;
              (t = t()).then(function(t) {
                (0 === e.q || -1 === e.q) && (e.q = 1, e.Y = t)
              }, function(t) {
                (0 === e.q || -1 === e.q) && (e.q = 2, e.Y = t)
              }), -1 === e.q && (e.q = 0, e.Y = t)
            }
            if (1 === e.q) return void 0 === (t = e.Y) && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", t), "default" in t || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", t), t.default;
            throw e.Y
          }

          function R() {
            var e = fe.H;
            return null === e && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e
          }

          function E() {}

          function M(t) {
            if (null === Le) try {
              var n = ("require" + Math.random()).slice(0, 7);
              Le = (e && e[n]).call(e, "timers").setImmediate
            } catch {
              Le = function(e) {
                !1 === Ae && (Ae = !0, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var t = new MessageChannel;
                t.port1.onmessage = e, t.port2.postMessage(void 0)
              }
            }
            return Le(t)
          }

          function I(e) {
            return e.length > 1 && "function" == typeof AggregateError ? new AggregateError(e) : e[0]
          }

          function O(e, t) {
            t !== Re - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Re = t
          }

          function H(e, t, n) {
            var r = fe.actQueue;
            if (null !== r)
              if (0 !== r.length) try {
                return B(r), void M(function() {
                  return H(e, t, n)
                })
              } catch (e) {
                fe.thrownErrors.push(e)
              } else fe.actQueue = null;
            fe.thrownErrors.length > 0 ? (r = I(fe.thrownErrors), fe.thrownErrors.length = 0, n(r)) : t(e)
          }

          function B(e) {
            if (!Me) {
              Me = !0;
              var t = 0;
              try {
                for (; t < e.length; t++)
                  for (var n = e[t];;) {
                    fe.didUsePromise = !1;
                    var r = n(!1);
                    if (null === r) break;
                    if (fe.didUsePromise) return e[t] = n, void e.splice(0, t);
                    n = r
                  }
                e.length = 0
              } catch (n) {
                e.splice(0, t + 1), fe.thrownErrors.push(n)
              } finally {
                Me = !1
              }
            }
          }
          "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
          var j = Symbol.for("react.transitional.element"),
            D = Symbol.for("react.portal"),
            N = Symbol.for("react.fragment"),
            _ = Symbol.for("react.strict_mode"),
            P = Symbol.for("react.profiler");
          Symbol.for("react.provider");
          var V = Symbol.for("react.consumer"),
            U = Symbol.for("react.context"),
            W = Symbol.for("react.forward_ref"),
            z = Symbol.for("react.suspense"),
            Z = Symbol.for("react.suspense_list"),
            $ = Symbol.for("react.memo"),
            G = Symbol.for("react.lazy"),
            q = Symbol.for("react.offscreen"),
            Y = Symbol.iterator,
            K = {},
            X = {
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
            J = Object.assign,
            Q = {};
          Object.freeze(Q), a.prototype.isReactComponent = {}, a.prototype.setState = function(e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
          }, a.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
          };
          var ee, te = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          for (ee in te) te.hasOwnProperty(ee) && n(ee, te[ee]);
          s.prototype = a.prototype, (te = l.prototype = new s).constructor = l, J(te, a.prototype), te.isPureReactComponent = !0;
          var ne, re, oe, ie, ae, se, le, ce = Array.isArray,
            ue = Symbol.for("react.client.reference"),
            fe = {
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
            de = {}.hasOwnProperty,
            he = Symbol.for("react.client.reference"),
            pe = 0;
          h.O = !0;
          var me, ge, ye, ve, be = !1,
            ke = new("function" == typeof WeakMap ? WeakMap : Map),
            we = Symbol.for("react.client.reference"),
            xe = {},
            Ce = {},
            Se = !1,
            Te = /\/+/g,
            Fe = "function" == typeof reportError ? reportError : function(e) {
              if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                var t = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message: "object" == typeof e && null !== e && "string" == typeof e.message ? e.message + "" : e + "",
                  error: e
                });
                if (!window.dispatchEvent(t)) return
              } else if ("object" == typeof r && "function" == typeof r.emit) return void r.emit("uncaughtException", e);
              console.error(e)
            },
            Ae = !1,
            Le = null,
            Re = 0,
            Ee = !1,
            Me = !1,
            Ie = "function" == typeof queueMicrotask ? function(e) {
              queueMicrotask(function() {
                return queueMicrotask(e)
              })
            } : M;
          t.Children = {
            map: A,
            forEach: function(e, t, n) {
              A(e, function() {
                t.apply(this, arguments)
              }, n)
            },
            count: function(e) {
              var t = 0;
              return A(e, function() {
                t++
              }), t
            },
            toArray: function(e) {
              return A(e, function(e) {
                return e
              }) || []
            },
            only: function(e) {
              if (!x(e)) throw Error("React.Children.only expected to receive a single React element child.");
              return e
            }
          }, t.Component = a, t.Fragment = N, t.Profiler = P, t.PureComponent = l, t.StrictMode = _, t.Suspense = z, t.I = fe, t.act = function(e) {
            var t = fe.actQueue,
              n = Re;
            Re++;
            var r = fe.actQueue = null !== t ? t : [],
              o = !1;
            try {
              var i = e()
            } catch (e) {
              fe.thrownErrors.push(e)
            }
            if (fe.thrownErrors.length > 0) throw O(0, n), e = I(fe.thrownErrors), fe.thrownErrors.length = 0, e;
            if (null !== i && "object" == typeof i && "function" == typeof i.then) {
              var a = i;
              return Ie(function() {
                o || Ee || (Ee = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))
              }), {
                then: function(e, t) {
                  o = !0, a.then(function(o) {
                    if (O(0, n), 0 === n) {
                      try {
                        B(r), M(function() {
                          return H(o, e, t)
                        })
                      } catch (e) {
                        fe.thrownErrors.push(e)
                      }
                      if (fe.thrownErrors.length > 0) {
                        var i = I(fe.thrownErrors);
                        fe.thrownErrors.length = 0, t(i)
                      }
                    } else e(o)
                  }, function(e) {
                    O(0, n), fe.thrownErrors.length > 0 && (e = I(fe.thrownErrors), fe.thrownErrors.length = 0), t(e)
                  })
                }
              }
            }
            var s = i;
            if (O(0, n), 0 === n && (B(r), 0 !== r.length && Ie(function() {
                o || Ee || (Ee = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))
              }), fe.actQueue = null), fe.thrownErrors.length > 0) throw e = I(fe.thrownErrors), fe.thrownErrors.length = 0, e;
            return {
              then: function(e, t) {
                o = !0, 0 === n ? (fe.actQueue = r, M(function() {
                  return H(s, e, t)
                })) : e(s)
              }
            }
          }, t.cache = function(e) {
            return function() {
              return e.apply(null, arguments)
            }
          }, t.cloneElement = function(e, t, n) {
            if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
            var r, o = J({}, e.props),
              i = e.key,
              a = e.v;
            if (null != t)
              for (s in (r = !(de.call(t, "ref") && (r = Object.getOwnPropertyDescriptor(t, "ref").get) && r.isReactWarning) && void 0 !== t.ref) && (a = y()), v(t) && (u(t.key), i = "" + t.key), t) !de.call(t, s) || "key" === s || "__self" === s || "__source" === s || "ref" === s && void 0 === t.ref || (o[s] = t[s]);
            var s = arguments.length - 2;
            if (1 === s) o.children = n;
            else if (s > 1) {
              r = Array(s);
              for (var l = 0; s > l; l++) r[l] = arguments[l + 2];
              o.children = r
            }
            for (o = k(e.type, i, void 0, 0, a, o), i = 2; arguments.length > i; i++) w(arguments[i], o.type);
            return o
          }, t.createContext = function(e) {
            return (e = {
              $$typeof: U,
              $: e,
              V: e,
              K: 0,
              Provider: null,
              Consumer: null
            }).Provider = e, e.Consumer = {
              $$typeof: V,
              l: e
            }, e.G = null, e.Z = null, e
          }, t.createElement = function(e, t, n) {
            if (d(e))
              for (var r = 2; arguments.length > r; r++) w(arguments[r], e);
            else {
              if (r = "", (void 0 === e || "object" == typeof e && null !== e && 0 === Object.keys(e).length) && (r += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), null === e) var o = "null";
              else ce(e) ? o = "array" : void 0 !== e && e.$$typeof === j ? (o = "<" + (f(e.type) || "Unknown") + " />", r = " Did you accidentally export a JSX literal instead of a component?") : o = typeof e;
              console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", o, r)
            }
            var i;
            if (r = {}, o = null, null != t)
              for (i in ve || !("J" in t) || "key" in t || (ve = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), v(t) && (u(t.key), o = "" + t.key), t) de.call(t, i) && "key" !== i && "__self" !== i && "__source" !== i && (r[i] = t[i]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (a > 1) {
              for (var s = Array(a), l = 0; a > l; l++) s[l] = arguments[l + 2];
              Object.freeze && Object.freeze(s), r.children = s
            }
            if (e && e.defaultProps)
              for (i in a = e.defaultProps) void 0 === r[i] && (r[i] = a[i]);
            return o && function(e, t) {
              function n() {
                ye || (ye = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t))
              }
              n.isReactWarning = !0, Object.defineProperty(e, "key", {
                get: n,
                configurable: !0
              })
            }(r, "function" == typeof e ? e.displayName || e.name || "Unknown" : e), k(e, o, void 0, 0, y(), r)
          }, t.createRef = function() {
            var e = {
              current: null
            };
            return Object.seal(e), e
          }, t.forwardRef = function(e) {
            null != e && e.$$typeof === $ ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" != typeof e ? console.error("forwardRef requires a render function but was given %s.", null === e ? "null" : typeof e) : 0 !== e.length && 2 !== e.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === e.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), null != e && null != e.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
            var t, n = {
              $$typeof: W,
              render: e
            };
            return Object.defineProperty(n, "displayName", {
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
          }, t.isValidElement = x, t.lazy = function(e) {
            return {
              $$typeof: G,
              u: {
                q: -1,
                Y: e
              },
              h: L
            }
          }, t.memo = function(e, t) {
            var n;
            return d(e) || console.error("memo: The first argument must be a component. Instead received: %s", null === e ? "null" : typeof e), Object.defineProperty(t = {
              $$typeof: $,
              type: e,
              compare: void 0 === t ? null : t
            }, "displayName", {
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
          }, t.startTransition = function(e) {
            var t = fe.T,
              n = {};
            fe.T = n, n.ee = new Set;
            try {
              var r = e(),
                o = fe.S;
              null !== o && o(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(E, Fe)
            } catch (e) {
              Fe(e)
            } finally {
              null === t && n.ee && (e = n.ee.size, n.ee.clear(), e > 10 && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), fe.T = t
            }
          }, t.unstable_useCacheRefresh = function() {
            return R().useCacheRefresh()
          }, t.use = function(e) {
            return R().use(e)
          }, t.useActionState = function(e, t, n) {
            return R().useActionState(e, t, n)
          }, t.useCallback = function(e, t) {
            return R().useCallback(e, t)
          }, t.useContext = function(e) {
            var t = R();
            return e.$$typeof === V && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), t.useContext(e)
          }, t.useDebugValue = function(e, t) {
            return R().useDebugValue(e, t)
          }, t.useDeferredValue = function(e, t) {
            return R().useDeferredValue(e, t)
          }, t.useEffect = function(e, t) {
            return R().useEffect(e, t)
          }, t.useId = function() {
            return R().useId()
          }, t.useImperativeHandle = function(e, t, n) {
            return R().useImperativeHandle(e, t, n)
          }, t.useInsertionEffect = function(e, t) {
            return R().useInsertionEffect(e, t)
          }, t.useLayoutEffect = function(e, t) {
            return R().useLayoutEffect(e, t)
          }, t.useMemo = function(e, t) {
            return R().useMemo(e, t)
          }, t.useOptimistic = function(e, t) {
            return R().useOptimistic(e, t)
          }, t.useReducer = function(e, t, n) {
            return R().useReducer(e, t, n)
          }, t.useRef = function(e) {
            return R().useRef(e)
          }, t.useState = function(e) {
            return R().useState(e)
          }, t.useSyncExternalStore = function(e, t, n) {
            return R().useSyncExternalStore(e, t, n)
          }, t.useTransition = function() {
            return R().useTransition()
          }, t.version = "19.0.0", "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())
        }()
      },
      65606: e => {
        var t, n, r = e.exports = {};

        function o() {
          throw Error("setTimeout has not been defined")
        }

        function i() {
          throw Error("clearTimeout has not been defined")
        }

        function a(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
          try {
            return t(e, 0)
          } catch {
            try {
              return t.call(null, e, 0)
            } catch {
              return t.call(this, e, 0)
            }
          }
        }! function() {
          try {
            t = "function" == typeof setTimeout ? setTimeout : o
          } catch {
            t = o
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : i
          } catch {
            n = i
          }
        }();
        var s, l = [],
          c = !1,
          u = -1;

        function f() {
          !c || !s || (c = !1, s.length ? l = s.concat(l) : u = -1, l.length && d())
        }

        function d() {
          if (!c) {
            var e = a(f);
            c = !0;
            for (var t = l.length; t;) {
              for (s = l, l = []; ++u < t;) s && s[u].run();
              u = -1, t = l.length
            }
            s = null, c = !1,
              function(e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                try {
                  return n(e)
                } catch {
                  try {
                    return n.call(null, e)
                  } catch {
                    return n.call(this, e)
                  }
                }
              }(e)
          }
        }

        function h(e, t) {
          this.fun = e, this.array = t
        }

        function p() {}
        r.nextTick = function(e) {
          var t = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; arguments.length > n; n++) t[n - 1] = arguments[n];
          l.push(new h(e, t)), 1 === l.length && !c && a(d)
        }, h.prototype.run = function() {
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
      65848: (e, t, n) => {
        "use strict";
        var r, o;
        r = n(56571), o = n(59373), r.version, t.F0 = r.renderToString, r.renderToStaticMarkup, o.renderToReadableStream, o.resume && o.resume
      },
      73065: function(e, t, n) {
        var r, o;
        ! function() {
          "use strict";
          r = function() {
            var e = function() {},
              t = "undefined",
              n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
              r = ["trace", "debug", "info", "warn", "error"],
              o = {},
              i = null;

            function a(e, t) {
              var n = e[t];
              if ("function" == typeof n.bind) return n.bind(e);
              try {
                return function() {}.bind.call(n, e)
              } catch {
                return function() {
                  return function() {}.apply.call(n, e, arguments)
                }
              }
            }

            function s() {
              console.log && (console.log.apply ? console.log.apply(console, arguments) : function() {}.apply.call(console.log, console, arguments)), console.trace && console.trace()
            }

            function l() {
              for (var n = this.getLevel(), o = 0; r.length > o; o++) {
                var i = r[o];
                this[i] = n > o ? e : this.methodFactory(i, n, this.name)
              }
              if (this.log = this.debug, typeof console === t && n < this.levels.SILENT) return "No console available for logging"
            }

            function c(e) {
              return function() {
                typeof console !== t && (l.call(this), this[e].apply(this, arguments))
              }
            }

            function u(r, o, i) {
              return function(r) {
                return "debug" === r && (r = "log"), typeof console !== t && ("trace" === r && n ? s : void 0 !== console[r] ? a(console, r) : void 0 !== console.log ? a(console, "log") : e)
              }(r) || c.apply(this, arguments)
            }

            function f(e, n) {
              var a, s, c, f = this,
                d = "loglevel";

              function h() {
                var e;
                if (typeof window !== t && d) {
                  try {
                    e = window.localStorage[d]
                  } catch {}
                  if (typeof e === t) try {
                    var n = window.document.cookie,
                      r = encodeURIComponent(d),
                      o = n.indexOf(r + "="); - 1 !== o && (e = /^([^;]+)/.exec(n.slice(o + r.length + 1))[1])
                  } catch {}
                  return void 0 === f.levels[e] && (e = void 0), e
                }
              }

              function p(e) {
                var t = e;
                if ("string" == typeof t && void 0 !== f.levels[t.toUpperCase()] && (t = f.levels[t.toUpperCase()]), "number" == typeof t && t >= 0 && t <= f.levels.SILENT) return t;
                throw new TypeError("log.setLevel() called with invalid level: " + e)
              }
              "string" == typeof e ? d += ":" + e : "symbol" == typeof e && (d = void 0), f.name = e, f.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
              }, f.methodFactory = n || u, f.getLevel = function() {
                return c ?? s ?? a
              }, f.setLevel = function(e, n) {
                return c = p(e), !1 !== n && function(e) {
                  var n = (r[e] || "silent").toUpperCase();
                  if (typeof window !== t && d) {
                    try {
                      return void(window.localStorage[d] = n)
                    } catch {}
                    try {
                      window.document.cookie = encodeURIComponent(d) + "=" + n + ";"
                    } catch {}
                  }
                }(c), l.call(f)
              }, f.setDefaultLevel = function(e) {
                s = p(e), h() || f.setLevel(e, !1)
              }, f.resetLevel = function() {
                c = null,
                  function() {
                    if (typeof window !== t && d) {
                      try {
                        window.localStorage.removeItem(d)
                      } catch {}
                      try {
                        window.document.cookie = encodeURIComponent(d) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                      } catch {}
                    }
                  }(), l.call(f)
              }, f.enableAll = function(e) {
                f.setLevel(f.levels.TRACE, e)
              }, f.disableAll = function(e) {
                f.setLevel(f.levels.SILENT, e)
              }, f.rebuild = function() {
                if (i !== f && (a = p(i.getLevel())), l.call(f), i === f)
                  for (var e in o) o[e].rebuild()
              }, a = p(i ? i.getLevel() : "WARN");
              var m = h();
              null != m && (c = p(m)), l.call(f)
            }(i = new f).getLogger = function(e) {
              if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
              var t = o[e];
              return t || (t = o[e] = new f(e, i.methodFactory)), t
            };
            var d = typeof window !== t ? window.log : void 0;
            return i.noConflict = function() {
              return typeof window !== t && window.log === i && (window.log = d), i
            }, i.getLoggers = function() {
              return o
            }, i.default = i, i
          }, void 0 !== (o = r()) && (e.exports = o)
        }()
      },
      74848: (e, t, n) => {
        "use strict";
        e.exports = n(26536)
      },
      76314: e => {
        "use strict";
        e.exports = function(e) {
          var t = [];
          return t.toString = function() {
            return this.map(function(t) {
              var n = "",
                r = "u" > typeof t[5];
              return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
            }).join("")
          }, t.i = function(e, n, r, o, i) {
            "string" == typeof e && (e = [
              [null, e, void 0]
            ]);
            var a = {};
            if (r)
              for (var s = 0; s < this.length; s++) {
                var l = this[s][0];
                null != l && (a[l] = !0)
              }
            for (var c = 0; c < e.length; c++) {
              var u = [].concat(e[c]);
              r && a[u[0]] || ("u" > typeof i && (typeof u[5] > "u" || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n && (u[2] && (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}")), u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
            }
          }, t
        }
      },
      77659: e => {
        "use strict";
        var t = {};
        e.exports = function(e, n) {
          var r = function(e) {
            if (typeof t[e] > "u") {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                n = n.contentDocument.head
              } catch {
                n = null
              }
              t[e] = n
            }
            return t[e]
          }(e);
          if (!r) throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r.appendChild(n)
        }
      },
      85072: e => {
        "use strict";
        var t = [];

        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break
            } return n
        }

        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = r.base ? l[0] + r.base : l[0],
              u = i[c] || 0,
              f = "".concat(c, " ").concat(u);
            i[c] = u + 1;
            var d = n(f),
              h = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5]
              };
            if (-1 !== d) t[d].references++, t[d].updater(h);
            else {
              var p = o(h, r);
              r.byIndex = s, t.splice(s, 0, {
                identifier: f,
                updater: p,
                references: 1
              })
            }
            a.push(f)
          }
          return a
        }

        function o(e, t) {
          var n = t.domAPI(t);
          return n.update(e),
            function(t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                n.update(e = t)
              } else n.remove()
            }
        }
        e.exports = function(e, o) {
          var i = r(e = e || [], o = o || {});
          return function(e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              t[s].references--
            }
            for (var l = r(e, o), c = 0; c < i.length; c++) {
              var u = n(i[c]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1))
            }
            i = l
          }
        }
      },
      90251: function(e, t, n) {
        var r, o;
        r = function(e) {
          "use strict";
          var t, n, r = {
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
            o = {},
            i = {
              reg: function(e) {
                if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger");
                t = e
              },
              apply: function(e, n) {
                if (!e || !e.setLevel) throw new TypeError("Argument is not a logger");
                var i = e.methodFactory,
                  a = e.name || "",
                  s = o[a] || o[""] || r;
                return o[a] || (e.methodFactory = function(e, t, n) {
                  var r = i(e, t, n),
                    s = o[n] || o[""],
                    l = -1 !== s.template.indexOf("%t"),
                    c = -1 !== s.template.indexOf("%l"),
                    u = -1 !== s.template.indexOf("%n");
                  return function() {
                    for (var t = "", i = arguments.length, f = Array(i), d = 0; i > d; d++) f[d] = arguments[d];
                    if (a || !o[n]) {
                      var h = s.timestampFormatter(new Date),
                        p = s.levelFormatter(e),
                        m = s.nameFormatter(n);
                      s.format ? t += s.format(p, m, h) : (t += s.template, l && (t = t.replace(/%t/, h)), c && (t = t.replace(/%l/, p)), u && (t = t.replace(/%n/, m))), f.length && "string" == typeof f[0] ? f[0] = t + " " + f[0] : f.unshift(t)
                    }
                    r.apply(void 0, f)
                  }
                }), (n = n || {}).template && (n.format = void 0), o[a] = function(e) {
                  for (var t, n = 1, r = arguments.length; r > n; n++)
                    for (t in arguments[n])({}).hasOwnProperty.call(arguments[n], t) && (e[t] = arguments[n][t]);
                  return e
                }({}, s, n), e.setLevel(e.getLevel()), t || e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), e
              }
            };
          return e && (n = e.prefix, i.noConflict = function() {
            return e.prefix === i && (e.prefix = n), i
          }), i
        }, void 0 !== (o = r(n)) && (e.exports = o)
      },
      92055: (e, t, n) => {
        "use strict";
        n.d(t, {
          A: () => s
        });
        var r = n(31601),
          o = n.n(r),
          i = n(76314),
          a = n.n(i)()(o());
        a.push([e.id, "/* Token Scanner Styles */\n\n/* Skeleton loader styles */\n\n.skeleton {\n  --start-color: rgba(156, 163, 175, 0.15);\n  --end-color: rgba(156, 163, 175, 0.05);\n\n  background-image: linear-gradient(\n    270deg,\n    rgba(156, 163, 175, 0.15),\n    rgba(156, 163, 175, 0.05),\n    rgba(156, 163, 175, 0.05),\n    rgba(156, 163, 175, 0.15)\n  );\n\n  background-image: linear-gradient(\n    270deg,\n    var(--start-color),\n    var(--end-color),\n    var(--end-color),\n    var(--start-color)\n  );\n  background-size: 400% 100%;\n  animation: skeleton-bg-position 3s ease-in-out infinite;\n  border-radius: 6px;\n  cursor: default;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n@keyframes skeleton-bg-position {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n/* Badge chip - CSS variables for theming */\n\n.trust-token-highlight {\n  --badge-bg: rgba(72, 255, 145, 0.16);\n  --badge-bg-hover: rgba(72, 255, 145, 0.24);\n  --badge-token-name: #48ff91;\n  --badge-token-price: #91ffbd;\n  --badge-blockchain-border: #121513;\n\n  background: rgba(72, 255, 145, 0.16) !important;\n\n  background: var(--badge-bg) !important;\n  border-radius: 10000px !important;\n  padding: 2px 5px 2px 4px !important;\n  cursor: pointer !important;\n  transition: all 0.2s ease !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  margin: 0 2px !important;\n  -webkit-text-decoration: none !important;\n  text-decoration: none !important;\n  position: relative !important;\n  vertical-align: middle !important;\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif !important;\n  font-size: 12px !important;\n  font-style: normal !important;\n  font-weight: 600 !important;\n  line-height: 18px !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.trust-token-highlight:hover {\n  background: var(--badge-bg-hover) !important;\n  transform: scale(1.02) !important;\n}\n\n/* Light theme for badge - Twitter/X light theme detection */\n\nbody[style*='background-color: rgb(255, 255, 255)'] .trust-token-highlight,\nbody[style*='background-color: rgb(242, 242, 242)'] .trust-token-highlight {\n  --badge-bg: rgba(5, 0, 255, 0.16);\n  --badge-bg-hover: rgba(5, 0, 255, 0.16);\n  --badge-token-name: #0500ff;\n  --badge-token-price: #524fff;\n  --badge-blockchain-border: #ffffff;\n}\n\n/* Logo container with badge overlay */\n\n.trust-token-logo-container {\n  position: relative !important;\n  width: 20px !important;\n  height: 20px !important;\n  flex-shrink: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n/* Main token logo */\n\n.trust-token-main-logo {\n  width: 16px !important;\n  height: 16px !important;\n  border-radius: 50% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  display: block !important;\n}\n\n/* Blockchain badge (small overlay logo) */\n\n.trust-token-blockchain-logo {\n  position: absolute !important;\n  bottom: 0.5px !important;\n  right: 0.5px !important;\n  width: 6px !important;\n  height: 6px !important;\n  border-radius: 50% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  background-color: var(--badge-blockchain-border) !important;\n  border: 0.4px solid var(--badge-blockchain-border) !important;\n  display: block !important;\n}\n\n.trust-token-name {\n  margin-left: 4px !important;\n  color: var(--badge-token-name) !important;\n}\n\n.trust-token-price-text {\n  color: var(--badge-token-price) !important;\n}\n\n.trust-token-name,\n.trust-token-price-text {\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif !important;\n  font-size: 12px !important;\n  font-style: normal !important;\n  font-weight: 600 !important;\n  line-height: 18px !important;\n}\n\n/* CSS Variables for theming - Dark theme (default) */\n\n.trust-token-popup-container {\n  --popup-bg: #121513;\n  --popup-text: #ffffff;\n  --popup-text-secondary: #9ca3af;\n  --popup-text-error: #eaecef;\n  --popup-card-bg: #2b2b2e;\n  --popup-hover-row: rgba(255, 255, 255, 0.08);\n  --popup-recent-badge-bg: rgba(255, 255, 255, 0.12);\n  --popup-button-bg: rgba(72, 255, 145, 0.16);\n  --popup-button-hover-bg: #3a6d50;\n  --popup-swap-button-hover: #3dd98c;\n  --popup-primary: #48ff91;\n  --button-primary: #1b1b1c;\n  --popup-price-positive: #23be7d;\n  --popup-price-negative: #ff4848;\n  --popup-powered-text: rgba(234, 236, 239, 0.6);\n  --popup-shadow: rgba(0, 0, 0, 0.5);\n}\n\n/* Light theme - Twitter/X light theme detection */\n\nbody[style*='background-color: rgb(255, 255, 255)'] .trust-token-popup-container,\nbody[style*='background-color: rgb(242, 242, 242)'] .trust-token-popup-container {\n  --popup-bg: #ffffff;\n  --popup-text: #252525;\n  --popup-text-error: #252525;\n  --popup-text-secondary: rgba(37, 37, 37, 0.72);\n  --popup-card-bg: #f0f0f2;\n  --popup-button-bg: rgba(5, 0, 255, 0.12);\n  --popup-button-hover-bg: rgba(5, 0, 255, 0.2);\n  --popup-swap-button-hover: #0400cc;\n  --popup-hover-row: rgba(0, 0, 0, 0.06);\n  --popup-recent-badge-bg: rgba(0, 0, 0, 0.08);\n  --popup-primary: #0500ff;\n  --popup-price-positive: #0aa838;\n  --button-primary: #fff;\n  --popup-price-negative: #ff4848;\n  --popup-powered-text: rgba(107, 114, 128, 0.6);\n  --popup-shadow: rgba(0, 0, 0, 0.15);\n}\n\n.trust-token-popup {\n  position: absolute;\n  z-index: 10000;\n  pointer-events: auto;\n  animation: trust-token-popup-fade-in 0.2s ease-out;\n}\n\n.trust-token-popup-container {\n  background: var(--popup-bg);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px var(--popup-shadow);\n  padding: 16px;\n  width: 300px;\n  font-family:\n    Inter,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif;\n  color: var(--popup-text);\n  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.trust-token-popup-container.trust-token-list-view {\n  width: 600px;\n  padding: 16px 8px;\n}\n\n/* Header */\n\n.trust-token-popup-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.trust-token-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.trust-token-popup-logo-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.trust-token-popup-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-popup-chain-badge {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--popup-bg);\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-header-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.trust-token-popup-symbol {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--popup-text);\n  line-height: 24px;\n}\n\n.trust-token-popup-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  line-height: 18px;\n}\n\n.trust-token-swap-button {\n  background: var(--popup-primary);\n  color: var(--button-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n  transition:\n    background 0.2s ease, opacity 0.2s ease;\n}\n\n.trust-token-swap-button:hover:not(:disabled) {\n  background: var(--popup-swap-button-hover);\n}\n\n.trust-token-swap-button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n/* Price Card */\n\n.trust-token-price-card {\n  background: var(--popup-card-bg);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 8px;\n}\n\n.trust-token-price-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  margin-bottom: 8px;\n}\n\n.trust-token-price-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.trust-token-price-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--popup-primary);\n  line-height: 25px;\n}\n\n.trust-token-price-change {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 12px;\n}\n\n.trust-token-price-change svg {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.trust-token-price-change.positive {\n  color: var(--popup-price-positive);\n}\n\n.trust-token-price-change.negative {\n  color: var(--popup-price-negative);\n}\n\n/* Stats Row */\n\n.trust-token-stats-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 8px;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.trust-token-stat-card {\n  background: var(--popup-card-bg);\n  border-radius: 12px;\n  padding: 16px;\n}\n\n.trust-token-stat-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--popup-text-secondary);\n  margin-bottom: 8px;\n}\n\n.trust-token-stat-value {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 700;\n  color: var(--popup-text);\n}\n\n/* Similar Tokens Button */\n\n.trust-token-similar-button {\n  width: 100%;\n  background: var(--popup-button-bg);\n  color: var(--popup-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  white-space: nowrap;\n  transition: background 0.2s ease;\n  line-height: 21px;\n  margin-bottom: 12px;\n}\n\n.trust-token-similar-button:hover {\n  background: var(--popup-button-hover-bg);\n}\n\n.trust-token-similar-button svg {\n  flex-shrink: 0;\n}\n\n/* Similar Tokens List View */\n\n.trust-token-list-header {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;\n  grid-gap: 12px;\n  gap: 12px;\n  padding: 12px 8px;\n}\n\n.trust-token-list-header-col {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--popup-text-secondary);\n  letter-spacing: 0.5px;\n  list-style: 21px;\n  gap: 12px;\n  text-align: left;\n}\n\n/* Scrollable container */\n\n.trust-token-list-scroll {\n  height: 380px;\n  min-height: 380px;\n  max-height: 380px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 16px;\n  padding-right: 4px;\n  overscroll-behavior: contain;\n}\n\n/* Scrollbar styling */\n\n.trust-token-list-scroll::-webkit-scrollbar {\n  width: 6px;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-thumb {\n  background: var(--popup-text-secondary);\n  border-radius: 3px;\n  opacity: 0.4;\n}\n\n.trust-token-list-scroll::-webkit-scrollbar-thumb:hover {\n  background: var(--popup-text);\n}\n\n/* List row */\n\n.trust-token-list-row {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;\n  grid-gap: 12px;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: 12px;\n  transition: background 0.2s ease;\n  cursor: pointer;\n}\n\n.trust-token-list-row:hover {\n  background: var(--popup-hover-row);\n}\n\n.trust-token-list-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.trust-token-list-col-numeric {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--popup-text);\n  line-height: 24px;\n}\n\n.trust-token-list-col:first-child {\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 12px;\n}\n\n.trust-token-list-logo-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.trust-token-list-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-list-chain-badge {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--popup-bg);\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.trust-token-list-name-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.trust-token-list-symbol-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.trust-token-list-symbol {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--popup-text);\n  line-height: 20px;\n}\n\n.trust-token-list-recent-badge {\n  background: var(--popup-recent-badge-bg);\n  color: var(--popup-text-secondary);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 0px 8px;\n  border-radius: 40px;\n  line-height: 15px;\n}\n\n.trust-token-list-chain {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--popup-text-secondary);\n  line-height: 16px;\n}\n\n.trust-token-list-change {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 16px;\n}\n\n.trust-token-list-change.positive {\n  color: var(--popup-price-positive);\n}\n\n.trust-token-list-change.negative {\n  color: var(--popup-price-negative);\n}\n\n/* Footer */\n\n.trust-token-popup-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Add horizontal padding in list view to align with Name column */\n\n.trust-token-list-view .trust-token-popup-footer {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.trust-token-powered {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--popup-powered-text);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.trust-token-powered-brand {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-weight: 600;\n  color: var(--popup-text);\n}\n\n.trust-token-dismiss {\n  background: transparent;\n  border: none;\n  color: var(--popup-powered-text);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.trust-token-dismiss:hover {\n  background: var(--popup-card-bg);\n  color: var(--popup-text);\n}\n\n/* Menu button */\n\n.trust-token-menu-button {\n  background: transparent;\n  border: none;\n  color: var(--popup-powered-text);\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: background 0.2s ease;\n}\n\n.trust-token-menu-button:hover {\n  background: var(--popup-card-bg);\n}\n\n/* Overlay to darken the popup - only darkens content, not the footer */\n\n.trust-token-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 44px; /* Leave space for footer (adjust based on footer height) */\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 16px 16px 0 0;\n  z-index: 1;\n  pointer-events: auto;\n}\n\n/* Mini menu popup */\n\n.trust-token-menu-popup {\n  position: absolute;\n  bottom: 50px; /* Increased from 20px to 40px (20px higher) */\n  right: 20px;\n  background: var(--popup-bg);\n  border-radius: 12px;\n  box-shadow: 0 4px 16px var(--popup-shadow);\n  padding: 8px;\n  z-index: 2;\n  min-width: 280px;\n  animation: trust-token-menu-fade-in 0.15s ease-out;\n}\n\n.trust-token-menu-item {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  gap: 12px;\n}\n\n.trust-token-menu-item-text {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--popup-text);\n  text-align: left;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 0;\n}\n\n/* Custom toggle switch */\n\n.trust-token-toggle {\n  width: 44px;\n  height: 24px;\n  background: rgba(156, 163, 175, 0.3);\n  border-radius: 12px;\n  position: relative;\n  transition: background 0.2s ease;\n  flex-shrink: 0;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.trust-token-toggle:hover {\n  opacity: 0.8;\n}\n\n.trust-token-toggle.enabled {\n  background: var(--popup-primary);\n}\n\n.trust-token-toggle-thumb {\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.trust-token-toggle.enabled .trust-token-toggle-thumb {\n  transform: translateX(20px);\n}\n\n/* Error state */\n\n.trust-token-error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 20px;\n  text-align: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.trust-token-error-illustration {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.trust-token-error-illustration svg {\n  width: 100%;\n  height: 100%;\n}\n\n.trust-token-error-message {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--popup-text-error);\n  line-height: 30px;\n}\n\n.trust-token-retry-button {\n  background: var(--popup-primary);\n  color: var(--button-primary);\n  border: none;\n  border-radius: 1200px;\n  padding: 12px 16px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.trust-token-retry-button:hover {\n  opacity: 0.9;\n}\n\n/* Animations */\n\n@keyframes trust-token-popup-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-8px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes trust-token-menu-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n", ""]);
        const s = a
      },
      96540: (e, t, n) => {
        "use strict";
        e.exports = n(64837)
      },
      96815: function(e, t) {
        var n, r;
        "u" > typeof globalThis ? globalThis : "u" > typeof self && self, void 0 !== (r = "function" == typeof(n = function(e) {
          "use strict";
          if (!globalThis.chrome?.runtime?.id) throw Error("This script should only be loaded in a browser extension.");
          if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
            const t = "The message port closed before a response was received.",
              n = e => {
                const n = {
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
                if (0 === Object.keys(n).length) throw Error("api-metadata.json has not been included in browser-polyfill");
                class r extends WeakMap {
                  constructor(e, t = void 0) {
                    super(t), this.createItem = e
                  }
                  get(e) {
                    return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                  }
                }
                const o = (t, n) => (...r) => {
                    e.runtime.lastError ? t.reject(Error(e.runtime.lastError.message)) : n.singleCallbackArg || 1 >= r.length && !1 !== n.singleCallbackArg ? t.resolve(r[0]) : t.resolve(r)
                  },
                  i = e => 1 == e ? "argument" : "arguments",
                  a = (e, t, n) => new Proxy(t, {
                    apply: (t, r, o) => n.call(r, e, ...o)
                  });
                let s = Function.call.bind({}.hasOwnProperty);
                const l = (e, t = {}, n = {}) => {
                    let r = Object.create(null),
                      c = {
                        has: (t, n) => n in e || n in r,
                        get(c, u, f) {
                          if (u in r) return r[u];
                          if (!(u in e)) return;
                          let d = e[u];
                          if ("function" == typeof d)
                            if ("function" == typeof t[u]) d = a(e, e[u], t[u]);
                            else if (s(n, u)) {
                            let t = ((e, t) => function(n, ...r) {
                              if (r.length < t.minArgs) throw Error(`Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${r.length}`);
                              if (r.length > t.maxArgs) throw Error(`Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${r.length}`);
                              return new Promise((i, a) => {
                                if (t.fallbackToNoCallback) try {
                                  n[e](...r, o({
                                    resolve: i,
                                    reject: a
                                  }, t))
                                } catch (o) {
                                  console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", o), n[e](...r), t.fallbackToNoCallback = !1, t.noCallback = !0, i()
                                } else t.noCallback ? (n[e](...r), i()) : n[e](...r, o({
                                  resolve: i,
                                  reject: a
                                }, t))
                              })
                            })(u, n[u]);
                            d = a(e, e[u], t)
                          } else d = d.bind(e);
                          else if ("object" == typeof d && null !== d && (s(t, u) || s(n, u))) d = l(d, t[u], n[u]);
                          else {
                            if (!s(n, "*")) return Object.defineProperty(r, u, {
                              configurable: !0,
                              enumerable: !0,
                              get: () => e[u],
                              set(t) {
                                e[u] = t
                              }
                            }), d;
                            d = l(d, t[u], n["*"])
                          }
                          return r[u] = d, d
                        },
                        set: (t, n, o, i) => (n in r ? r[n] = o : e[n] = o, !0),
                        defineProperty: (e, t, n) => Reflect.defineProperty(r, t, n),
                        deleteProperty: (e, t) => Reflect.deleteProperty(r, t)
                      };
                    return new Proxy(Object.create(e), c)
                  },
                  c = e => ({
                    addListener(t, n, ...r) {
                      t.addListener(e.get(n), ...r)
                    },
                    hasListener: (t, n) => t.hasListener(e.get(n)),
                    removeListener(t, n) {
                      t.removeListener(e.get(n))
                    }
                  }),
                  u = new r(e => "function" != typeof e ? e : function(t) {
                    const n = l(t, {}, {
                      getContent: {
                        minArgs: 0,
                        maxArgs: 0
                      }
                    });
                    e(n)
                  }),
                  f = new r(e => "function" != typeof e ? e : function(t, n, r) {
                    let o, i, a = !1,
                      s = new Promise(e => {
                        o = function(t) {
                          a = !0, e(t)
                        }
                      });
                    try {
                      i = e(t, n, o)
                    } catch (e) {
                      i = Promise.reject(e)
                    }
                    const l = !0 !== i && (e => e && "object" == typeof e && "function" == typeof e.then)(i);
                    return !(!0 !== i && !l && !a || ((l ? i : s).then(e => {
                      r(e)
                    }, e => {
                      let t;
                      t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", r({
                        te: !0,
                        message: t
                      })
                    }).catch(e => {
                      console.error("Failed to send onMessage rejected reply", e)
                    }), 0))
                  }),
                  d = ({
                    reject: n,
                    resolve: r
                  }, o) => {
                    e.runtime.lastError ? e.runtime.lastError.message === t ? r() : n(Error(e.runtime.lastError.message)) : o && o.te ? n(Error(o.message)) : r(o)
                  },
                  h = (e, t, n, ...r) => {
                    if (r.length < t.minArgs) throw Error(`Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${r.length}`);
                    if (r.length > t.maxArgs) throw Error(`Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${r.length}`);
                    return new Promise((e, t) => {
                      const o = d.bind(null, {
                        resolve: e,
                        reject: t
                      });
                      r.push(o), n.sendMessage(...r)
                    })
                  },
                  p = {
                    devtools: {
                      network: {
                        onRequestFinished: c(u)
                      }
                    },
                    runtime: {
                      onMessage: c(f),
                      onMessageExternal: c(f),
                      sendMessage: h.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                      })
                    },
                    tabs: {
                      sendMessage: h.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                      })
                    }
                  },
                  m = {
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
                return n.privacy = {
                  network: {
                    "*": m
                  },
                  services: {
                    "*": m
                  },
                  websites: {
                    "*": m
                  }
                }, l(e, p, n)
              };
            e.exports = n(chrome)
          } else e.exports = globalThis.browser
        }) ? n(e) : n) && (e.exports = r)
      },
      97825: e => {
        "use strict";
        e.exports = function(e) {
          if (typeof document > "u") return {
            update: function() {},
            remove: function() {}
          };
          var t = e.insertStyleElement(e);
          return {
            update: function(n) {
              ! function(e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                var o = "u" > typeof n.layer;
                o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                var i = n.sourceMap;
                i && "u" > typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(r, e, t.options)
              }(t, e, n)
            },
            remove: function() {
              ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
              }(t)
            }
          }
        }
      },
      98413: (e, t) => {
        "use strict";
        ! function() {
          var e = "function" == typeof Symbol && Symbol.for,
            n = e ? Symbol.for("react.element") : 60103,
            r = e ? Symbol.for("react.portal") : 60106,
            o = e ? Symbol.for("react.fragment") : 60107,
            i = e ? Symbol.for("react.strict_mode") : 60108,
            a = e ? Symbol.for("react.profiler") : 60114,
            s = e ? Symbol.for("react.provider") : 60109,
            l = e ? Symbol.for("react.context") : 60110,
            c = e ? Symbol.for("react.async_mode") : 60111,
            u = e ? Symbol.for("react.concurrent_mode") : 60111,
            f = e ? Symbol.for("react.forward_ref") : 60112,
            d = e ? Symbol.for("react.suspense") : 60113,
            h = e ? Symbol.for("react.suspense_list") : 60120,
            p = e ? Symbol.for("react.memo") : 60115,
            m = e ? Symbol.for("react.lazy") : 60116,
            g = e ? Symbol.for("react.block") : 60121,
            y = e ? Symbol.for("react.fundamental") : 60117,
            v = e ? Symbol.for("react.responder") : 60118,
            b = e ? Symbol.for("react.scope") : 60119;

          function k(e) {
            if ("object" == typeof e && null !== e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  var h = e.type;
                  switch (h) {
                    case c:
                    case u:
                    case o:
                    case a:
                    case i:
                    case d:
                      return h;
                    default:
                      var g = h && h.$$typeof;
                      switch (g) {
                        case l:
                        case f:
                        case m:
                        case p:
                        case s:
                          return g;
                        default:
                          return t
                      }
                  }
                case r:
                  return t
              }
            }
          }
          var w = c,
            x = u,
            C = l,
            S = s,
            T = n,
            F = f,
            A = o,
            L = m,
            R = p,
            E = r,
            M = a,
            I = i,
            O = d,
            H = !1;

          function B(e) {
            return k(e) === u
          }
          t.AsyncMode = w, t.ConcurrentMode = x, t.ContextConsumer = C, t.ContextProvider = S, t.Element = T, t.ForwardRef = F, t.Fragment = A, t.Lazy = L, t.Memo = R, t.Portal = E, t.Profiler = M, t.StrictMode = I, t.Suspense = O, t.isAsyncMode = function(e) {
            return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), B(e) || k(e) === c
          }, t.isConcurrentMode = B, t.isContextConsumer = function(e) {
            return k(e) === l
          }, t.isContextProvider = function(e) {
            return k(e) === s
          }, t.isElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === n
          }, t.isForwardRef = function(e) {
            return k(e) === f
          }, t.isFragment = function(e) {
            return k(e) === o
          }, t.isLazy = function(e) {
            return k(e) === m
          }, t.isMemo = function(e) {
            return k(e) === p
          }, t.isPortal = function(e) {
            return k(e) === r
          }, t.isProfiler = function(e) {
            return k(e) === a
          }, t.isStrictMode = function(e) {
            return k(e) === i
          }, t.isSuspense = function(e) {
            return k(e) === d
          }, t.isValidElementType = function(e) {
            return "string" == typeof e || "function" == typeof e || e === o || e === u || e === a || e === i || e === d || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === s || e.$$typeof === l || e.$$typeof === f || e.$$typeof === y || e.$$typeof === v || e.$$typeof === b || e.$$typeof === g)
          }, t.typeOf = k
        }()
      }
    },
    r = {};

  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = r[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return n[e].call(i.exports, i, i.exports, o), i.loaded = !0, i.exports
  }
  o.n = e => {
    var t = e && e.ne ? () => e.default : () => e;
    return o.d(t, {
      a: t
    }), t
  }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function(n, r) {
    if (1 & r && (n = this(n)), 8 & r || "object" == typeof n && n && (4 & r && n.ne || 16 & r && "function" == typeof n.then)) return n;
    var i = Object.create(null);
    o.r(i);
    var a = {};
    e = e || [null, t({}), t([]), t(t)];
    for (var s = 2 & r && n;
      "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach(e => a[e] = () => n[e]);
    return a.default = () => n, o.d(i, a), i
  }, o.d = (e, t) => {
    for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    })
  }, o.o = (e, t) => ({}.hasOwnProperty.call(e, t)), o.r = e => {
    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "ne", {
      value: !0
    })
  }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), o.nc = void 0, (() => {
    "use strict";
    var e = o(85072),
      t = o.n(e),
      n = o(97825),
      r = o.n(n),
      i = o(77659),
      a = o.n(i),
      s = o(55056),
      l = o.n(s),
      c = o(10540),
      u = o.n(c),
      f = o(41113),
      d = o.n(f),
      h = o(92055),
      p = {};
    p.styleTagTransform = d(), p.setAttributes = l(), p.insert = a().bind(null, "head"), p.domAPI = r(), p.insertStyleElement = u(), t()(h.A, p), h.A && h.A.locals && h.A.locals;
    const m = {
      name: "token-scanner-enabled",
      default: !0
    };
    var g, y = ((g = y || {}).INTERNAL = "INTERNAL", g.PUBLIC = "PUBLIC", g);

    function v(e, t) {
      return `${t}_${e}`
    }

    function b(e) {
      return v(e, "INTERNAL")
    }

    function k(e) {
      return v(e, "PUBLIC")
    }
    const w = {
      RESET: b("Reset"),
      LOCK: b("Lock"),
      LOCK_CALLBACK: b("Lock_callback"),
      AUTHENTICATE: b("Authenticate"),
      REGISTER_DEVICE: b("RegisterDevice"),
      APP_DISPLAYED: b("AppDisplayed"),
      WARNING_DISPLAYED: b("WarningDisplayed"),
      ICON_THEME_CHANGED: b("IconThemeChanged"),
      OPEN_POPUP: b("OpenPopup"),
      GET_APP_SETTINGS: k("GetAppSettings"),
      GET_APP_NODES: k("GetAppNodes"),
      GET_STORE: b("GetStore"),
      GET_REDUX_STATE: b("GetReduxState"),
      DISPATCH_REDUX_ACTION: b("DispatchReduxAction"),
      PING: k("Ping"),
      GET_ONE_TAP_SETTINGS: k("GetOneTapSettings"),
      ONE_TAP_DISMISS: k("OneTapDismiss"),
      ONE_TAP_CONNECT: k("OneTapConnect"),
      GET_TOKEN_SCANNER_I18N: k("GetTokenScannerI18n"),
      GET_TOKEN_SCANNER_ENABLED: k("GetTokenScannerEnabled"),
      GET_TOKEN_BASIC_INFO: k("GetTokenBasicInfo"),
      GET_TOKEN_MARKET_DATA: k("GetTokenMarketData"),
      GET_SIMILAR_TOKENS_COUNT: k("GetSimilarTokensCount"),
      GET_SIMILAR_TOKENS: k("GetSimilarTokens"),
      OPEN_SWAP_PAGE: k("OpenSwapPage"),
      GET_FEATURE_FLAG: k("GetFeatureFlag"),
      SET_TOKEN_SCANNER_ENABLED: k("SetTokenScannerEnabled"),
      TRACK_ANALYTICS: k("TrackAnalytics"),
      ANNOUNCEMENT_DISPLAYED: b("AnnouncementDisplayed"),
      FETCH_ANNOUNCEMENTS: b("FetchAnnouncements"),
      FETCH_USER_VIP_TIER_DATA: b("FetchUserVipTierData"),
      FETCH_FUNDING_METHODS: b("FetchFundingMethods"),
      ROUTE_CHANGED: b("RouteChanged")
    };
    var x = o(73065),
      C = o.n(x),
      S = o(90251),
      T = o.n(S),
      F = o(14545),
      A = o.t(F, 2),
      L = o(65606);
    const {
      env: R = {},
      argv: E = [],
      platform: M = ""
    } = typeof L > "u" ? {} : L, I = "NO_COLOR" in R || E.includes("--no-color"), O = "FORCE_COLOR" in R || E.includes("--color"), H = "win32" === M, B = "dumb" === R.TERM, j = A && F.isatty && F.isatty(1) && R.TERM && !B, D = !I && (O || H && !B || j || "CI" in R && ("GITHUB_ACTIONS" in R || "GITLAB_CI" in R || "CIRCLECI" in R)), N = (e, t, n, r, o = t.substring(0, e) + r, i = t.substring(e + n.length), a = i.indexOf(n)) => o + (0 > a ? i : N(a, i, n, r)), _ = (e, t, n) => ((e, t, n = e, r = e.length + 1) => o => o || "" !== o && void 0 !== o ? ((e, t, n, r, o) => 0 > e ? n + t + r : n + N(e, t, r, o) + r)(("" + o).indexOf(t, r), o, e, t, n) : "")(`[${e}m`, `[${t}m`, n), P = {
      reset: _(0, 0),
      bold: _(1, 22, "[22m[1m"),
      dim: _(2, 22, "[22m[2m"),
      italic: _(3, 23),
      underline: _(4, 24),
      inverse: _(7, 27),
      hidden: _(8, 28),
      strikethrough: _(9, 29),
      black: _(30, 39),
      red: _(31, 39),
      green: _(32, 39),
      yellow: _(33, 39),
      blue: _(34, 39),
      magenta: _(35, 39),
      cyan: _(36, 39),
      white: _(37, 39),
      gray: _(90, 39),
      bgBlack: _(40, 49),
      bgRed: _(41, 49),
      bgGreen: _(42, 49),
      bgYellow: _(43, 49),
      bgBlue: _(44, 49),
      bgMagenta: _(45, 49),
      bgCyan: _(46, 49),
      bgWhite: _(47, 49),
      blackBright: _(90, 39),
      redBright: _(91, 39),
      greenBright: _(92, 39),
      yellowBright: _(93, 39),
      blueBright: _(94, 39),
      magentaBright: _(95, 39),
      cyanBright: _(96, 39),
      whiteBright: _(97, 39),
      bgBlackBright: _(100, 49),
      bgRedBright: _(101, 49),
      bgGreenBright: _(102, 49),
      bgYellowBright: _(103, 49),
      bgBlueBright: _(104, 49),
      bgMagentaBright: _(105, 49),
      bgCyanBright: _(106, 49),
      bgWhiteBright: _(107, 49)
    }, {
      reset: V,
      bold: U,
      dim: W,
      italic: z,
      underline: Z,
      inverse: $,
      hidden: G,
      strikethrough: q,
      black: Y,
      red: K,
      green: X,
      yellow: J,
      blue: Q,
      magenta: ee,
      cyan: te,
      white: ne,
      gray: re,
      bgBlack: oe,
      bgRed: ie,
      bgGreen: ae,
      bgYellow: se,
      bgBlue: le,
      bgMagenta: ce,
      bgCyan: ue,
      bgWhite: fe,
      blackBright: de,
      redBright: he,
      greenBright: pe,
      yellowBright: me,
      blueBright: ge,
      magentaBright: ye,
      cyanBright: ve,
      whiteBright: be,
      bgBlackBright: ke,
      bgRedBright: we,
      bgGreenBright: xe,
      bgYellowBright: Ce,
      bgBlueBright: Se,
      bgMagentaBright: Te,
      bgCyanBright: Fe,
      bgWhiteBright: Ae
    } = (({
      useColor: e = D
    } = {}) => e ? P : Object.keys(P).reduce((e, t) => ({
      ...e,
      [t]: String
    }), {}))();
    C().setLevel("DEBUG");
    var Le = (e => (e.TRACE = "TRACE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e))(Le || {});
    const Re = {
      TRACE: ee,
      DEBUG: te,
      INFO: Q,
      WARN: J,
      ERROR: K
    };
    T().reg(C()), T().apply(C(), {
      format: (e, t, n) => `${re(`[${n}]`)} ${Re[e](e)}${"root"===t?"":X(` [${t}:]`)}`
    });
    const Ee = C().error.bind(C());
    C().error = (...e) => Ee(...e);
    const Me = C();
    var Ie = (e => (e[e.CRYPTO = 0] = "CRYPTO", e[e.NFT = 1] = "NFT", e[e.APPROVALS = 2] = "APPROVALS", e))(Ie || {}),
      Oe = (e => (e[e.RWA = 0] = "RWA", e[e.AI = 1] = "AI", e[e.MEMES = 2] = "MEMES", e))(Oe || {}),
      He = (e => (e[e.TOP = 0] = "TOP", e[e.BNB = 1] = "BNB", e[e.ETH = 2] = "ETH", e[e.SOL = 3] = "SOL", e))(He || {}),
      Be = (e => (e[e.HOLDINGS = 0] = "HOLDINGS", e[e.HISTORY = 1] = "HISTORY", e[e.ABOUT = 2] = "ABOUT", e))(Be || {});
    Promise.resolve(!1), Promise.resolve(!0);
    var je = Promise.resolve();

    function De(e, t) {
      return e || (e = 0), new Promise(function(n) {
        return setTimeout(function() {
          return n(t)
        }, e)
      })
    }

    function Ne() {
      return Math.random().toString(36).substring(2)
    }
    var _e = 0;

    function Pe() {
      var e = 1e3 * Date.now();
      return _e >= e && (e = _e + 1), _e = e, e
    }
    var Ve = {
      create: function(e) {
        var t = {
          time: Pe(),
          messagesCallback: null,
          bc: new BroadcastChannel(e),
          subFns: []
        };
        return t.bc.onmessage = function(e) {
          t.messagesCallback && t.messagesCallback(e.data)
        }, t
      },
      close: function(e) {
        e.bc.close(), e.subFns = []
      },
      onMessage: function(e, t) {
        e.messagesCallback = t
      },
      postMessage: function(e, t) {
        try {
          return e.bc.postMessage(t, !1), je
        } catch (e) {
          return Promise.reject(e)
        }
      },
      canBeUsed: function() {
        if ("u" > typeof globalThis && globalThis.Deno && globalThis.Deno.args) return !0;
        if (("u" > typeof window || "u" > typeof self) && "function" == typeof BroadcastChannel) {
          if (BroadcastChannel.re) throw Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
          return !0
        }
        return !1
      },
      type: "native",
      averageResponseTime: function() {
        return 150
      },
      microSeconds: Pe
    };
    class Ue {
      ttl;
      map = new Map;
      oe = !1;
      constructor(e) {
        this.ttl = e
      }
      has(e) {
        return this.map.has(e)
      }
      add(e) {
        this.map.set(e, We()), this.oe || (this.oe = !0, setTimeout(() => {
          this.oe = !1,
            function(e) {
              const t = We() - e.ttl,
                n = e.map[Symbol.iterator]();
              for (;;) {
                const r = n.next().value;
                if (!r) return;
                const o = r[0];
                if (r[1] >= t) return;
                e.map.delete(o)
              }
            }(this)
        }, 0))
      }
      clear() {
        this.map.clear()
      }
    }

    function We() {
      return Date.now()
    }

    function ze() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = JSON.parse(JSON.stringify(e));
      return typeof t.webWorkerSupport > "u" && (t.webWorkerSupport = !0), t.idb || (t.idb = {}), t.idb.ttl || (t.idb.ttl = 45e3), t.idb.fallbackInterval || (t.idb.fallbackInterval = 150), e.idb && "function" == typeof e.idb.onclose && (t.idb.onclose = e.idb.onclose), t.localstorage || (t.localstorage = {}), t.localstorage.removeTimeout || (t.localstorage.removeTimeout = 6e4), e.methods && (t.methods = e.methods), t.node || (t.node = {}), t.node.ttl || (t.node.ttl = 12e4), t.node.maxParallelWrites || (t.node.maxParallelWrites = 2048), typeof t.node.useFastPath > "u" && (t.node.useFastPath = !0), t
    }
    var Ze = "messages",
      $e = {
        durability: "relaxed"
      };

    function Ge() {
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

    function Ye(e) {
      e.closed || Ke(e).then(function() {
        return De(e.options.idb.fallbackInterval)
      }).then(function() {
        return Ye(e)
      })
    }

    function Ke(e) {
      return e.closed || !e.messagesCallback ? je : function(e, t) {
        var n = e.transaction(Ze, "readonly", $e),
          r = n.objectStore(Ze),
          o = [],
          i = IDBKeyRange.bound(t + 1, 1 / 0);
        if (r.getAll) {
          var a = r.getAll(i);
          return new Promise(function(e, t) {
            a.onerror = function(e) {
              return t(e)
            }, a.onsuccess = function(t) {
              e(t.target.result)
            }
          })
        }
        return new Promise(function(e, a) {
          var s = function() {
            try {
              return i = IDBKeyRange.bound(t + 1, 1 / 0), r.openCursor(i)
            } catch {
              return r.openCursor()
            }
          }();
          s.onerror = function(e) {
            return a(e)
          }, s.onsuccess = function(r) {
            var i = r.target.result;
            i ? i.value.id < t + 1 ? i.continue(t + 1) : (o.push(i.value), i.continue()) : (qe(n), e(o))
          }
        })
      }(e.db, e.lastCursorId).then(function(t) {
        var n = t.filter(function(e) {
          return !!e
        }).map(function(t) {
          return t.id > e.lastCursorId && (e.lastCursorId = t.id), t
        }).filter(function(t) {
          return function(e, t) {
            return !(e.uuid === t.uuid || t.eMIs.has(e.id) || e.data.time < t.messagesCallbackTime)
          }(t, e)
        }).sort(function(e, t) {
          return e.time - t.time
        });
        return n.forEach(function(t) {
          e.messagesCallback && (e.eMIs.add(t.id), e.messagesCallback(t.data))
        }), je
      })
    }
    var Xe = {
      create: function(e, t) {
        return t = ze(t),
          function(e) {
            var t = "pubkey.broadcast-channel-0-" + e,
              n = Ge().open(t);
            return n.onupgradeneeded = function(e) {
              e.target.result.createObjectStore(Ze, {
                keyPath: "id",
                autoIncrement: !0
              })
            }, new Promise(function(e, t) {
              n.onerror = function(e) {
                return t(e)
              }, n.onsuccess = function() {
                e(n.result)
              }
            })
          }(e).then(function(n) {
            var r = {
              closed: !1,
              lastCursorId: 0,
              channelName: e,
              options: t,
              uuid: Ne(),
              eMIs: new Ue(2 * t.idb.ttl),
              writeBlockPromise: je,
              messagesCallback: null,
              readQueuePromises: [],
              db: n
            };
            return n.onclose = function() {
              r.closed = !0, t.idb.onclose && t.idb.onclose()
            }, Ye(r), r
          })
      },
      close: function(e) {
        e.closed = !0, e.db.close()
      },
      onMessage: function(e, t, n) {
        e.messagesCallbackTime = n, e.messagesCallback = t, Ke(e)
      },
      postMessage: function(e, t) {
        return e.writeBlockPromise = e.writeBlockPromise.then(function() {
          return function(e, t, n) {
            var r = {
                uuid: t,
                time: Date.now(),
                data: n
              },
              o = e.transaction([Ze], "readwrite", $e);
            return new Promise(function(e, t) {
              o.oncomplete = function() {
                return e()
              }, o.onerror = function(e) {
                return t(e)
              }, o.objectStore(Ze).add(r), qe(o)
            })
          }(e.db, e.uuid, t)
        }).then(function() {
          0 === Math.floor(11 * Math.random() + 0) && function(e) {
            (function(e, t) {
              var n = Date.now() - t,
                r = e.transaction(Ze, "readonly", $e),
                o = r.objectStore(Ze),
                i = [];
              return new Promise(function(e) {
                o.openCursor().onsuccess = function(t) {
                  var o = t.target.result;
                  if (o) {
                    var a = o.value;
                    a.time < n ? (i.push(a), o.continue()) : (qe(r), e(i))
                  } else e(i)
                }
              })
            })(e.db, e.options.idb.ttl).then(function(t) {
              return function(e, t) {
                if (e.closed) return Promise.resolve([]);
                var n = e.db.transaction(Ze, "readwrite", $e).objectStore(Ze);
                return Promise.all(t.map(function(e) {
                  var t = n.delete(e);
                  return new Promise(function(e) {
                    t.onsuccess = function() {
                      return e()
                    }
                  })
                }))
              }(e, t.map(function(e) {
                return e.id
              }))
            })
          }(e)
        }), e.writeBlockPromise
      },
      canBeUsed: function() {
        return !!Ge()
      },
      type: "idb",
      averageResponseTime: function(e) {
        return 2 * e.idb.fallbackInterval
      },
      microSeconds: Pe
    };

    function Je() {
      var e;
      if (typeof window > "u") return null;
      try {
        e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage
      } catch {}
      return e
    }

    function Qe(e) {
      return "pubkey.broadcastChannel-" + e
    }

    function et() {
      var e = Je();
      if (!e) return !1;
      try {
        var t = "__broadcastchannel_check";
        e.setItem(t, "works"), e.removeItem(t)
      } catch {
        return !1
      }
      return !0
    }
    var tt = {
        create: function(e, t) {
          if (t = ze(t), !et()) throw Error("BroadcastChannel: localstorage cannot be used");
          var n = Ne(),
            r = new Ue(t.localstorage.removeTimeout),
            o = {
              channelName: e,
              uuid: n,
              eMIs: r
            };
          return o.listener = function(e, t) {
            var n = Qe(e),
              r = function(e) {
                e.key === n && t(JSON.parse(e.newValue))
              };
            return window.addEventListener("storage", r), r
          }(e, function(e) {
            o.messagesCallback && e.uuid !== n && (!e.token || r.has(e.token) || e.data.time && e.data.time < o.messagesCallbackTime || (r.add(e.token), o.messagesCallback(e.data)))
          }), o
        },
        close: function(e) {
          ! function(e) {
            window.removeEventListener("storage", e)
          }(e.listener)
        },
        onMessage: function(e, t, n) {
          e.messagesCallbackTime = n, e.messagesCallback = t
        },
        postMessage: function(e, t) {
          return new Promise(function(n) {
            De().then(function() {
              var r = Qe(e.channelName),
                o = {
                  token: Ne(),
                  time: Date.now(),
                  data: t,
                  uuid: e.uuid
                },
                i = JSON.stringify(o);
              Je().setItem(r, i);
              var a = document.createEvent("Event");
              a.initEvent("storage", !0, !0), a.key = r, a.newValue = i, window.dispatchEvent(a), n()
            })
          })
        },
        canBeUsed: et,
        type: "localstorage",
        averageResponseTime: function() {
          var e = navigator.userAgent.toLowerCase();
          return e.includes("safari") && !e.includes("chrome") ? 240 : 120
        },
        microSeconds: Pe
      },
      nt = Pe,
      rt = new Set,
      ot = {
        create: function(e) {
          var t = {
            time: nt(),
            name: e,
            messagesCallback: null
          };
          return rt.add(t), t
        },
        close: function(e) {
          rt.delete(e)
        },
        onMessage: function(e, t) {
          e.messagesCallback = t
        },
        postMessage: function(e, t) {
          return new Promise(function(n) {
            return setTimeout(function() {
              Array.from(rt).forEach(function(n) {
                n.name === e.name && n !== e && n.messagesCallback && n.time < t.time && n.messagesCallback(t)
              }), n()
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
        microSeconds: nt
      },
      it = [Ve, Xe, tt],
      at = new Set,
      st = 0,
      lt = function(e, t) {
        this.id = st++, at.add(this), this.name = e, this.options = ze(t), this.method = function(e) {
            var t = [].concat(e.methods, it).filter(Boolean);
            if (e.type) {
              if ("simulate" === e.type) return ot;
              var n = t.find(function(t) {
                return t.type === e.type
              });
              if (n) return n;
              throw Error("method-type " + e.type + " not found")
            }
            e.webWorkerSupport || (t = t.filter(function(e) {
              return "idb" !== e.type
            }));
            var r = t.find(function(e) {
              return e.canBeUsed()
            });
            if (r) return r;
            throw Error("No usable method found in " + JSON.stringify(it.map(function(e) {
              return e.type
            })))
          }(this.options), this.ie = !1, this.ae = null, this.se = {
            message: [],
            internal: []
          }, this.le = new Set, this.ce = [], this.ue = null,
          function(e) {
            var t = e.method.create(e.name, e.options);
            ! function(e) {
              return e && "function" == typeof e.then
            }(t) ? e.fe = t: (e.ue = t, t.then(function(t) {
              e.fe = t
            }))
          }(this)
      };

    function ct(e, t, n) {
      var r = {
        time: e.method.microSeconds(),
        type: t,
        data: n
      };
      return (e.ue ? e.ue : je).then(function() {
        var t = e.method.postMessage(e.fe, r);
        return e.le.add(t), t.catch().then(function() {
          return e.le.delete(t)
        }), t
      })
    }

    function ut(e) {
      return e.se.message.length > 0 || e.se.internal.length > 0
    }

    function ft(e, t, n) {
      e.se[t].push(n),
        function(e) {
          if (!e.ie && ut(e)) {
            var t = function(t) {
                e.se[t.type].forEach(function(e) {
                  t.time >= e.time && e.fn(t.data)
                })
              },
              n = e.method.microSeconds();
            e.ue ? e.ue.then(function() {
              e.ie = !0, e.method.onMessage(e.fe, t, n)
            }) : (e.ie = !0, e.method.onMessage(e.fe, t, n))
          }
        }(e)
    }

    function dt(e, t, n) {
      e.se[t] = e.se[t].filter(function(e) {
          return e !== n
        }),
        function(e) {
          if (e.ie && !ut(e)) {
            e.ie = !1;
            var t = e.method.microSeconds();
            e.method.onMessage(e.fe, null, t)
          }
        }(e)
    }
    lt.re = !0, lt.prototype = {
      postMessage: function(e) {
        if (this.closed) throw Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(e));
        return ct(this, "message", e)
      },
      postInternal: function(e) {
        return ct(this, "internal", e)
      },
      set onmessage(e) {
        var t = {
          time: this.method.microSeconds(),
          fn: e
        };
        dt(this, "message", this.ae), e && "function" == typeof e ? (this.ae = t, ft(this, "message", t)) : this.ae = null
      },
      addEventListener: function(e, t) {
        ft(this, e, {
          time: this.method.microSeconds(),
          fn: t
        })
      },
      removeEventListener: function(e, t) {
        dt(this, e, this.se[e].find(function(e) {
          return e.fn === t
        }))
      },
      close: function() {
        var e = this;
        if (!this.closed) {
          at.delete(this), this.closed = !0;
          var t = this.ue ? this.ue : je;
          return this.ae = null, this.se.message = [], t.then(function() {
            return Promise.all(Array.from(e.le))
          }).then(function() {
            return Promise.all(e.ce.map(function(e) {
              return e()
            }))
          }).then(function() {
            return e.method.close(e.fe)
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
    class ht {
      constructor() {
        this.listeners = {}
      }
      addListener(e, t) {
        const n = this.listeners[e] || [];
        n.push(t), this.listeners[e] = n
      }
      once(e, t) {
        this.addListener(e, n => (delete this.listeners[e], t(n)))
      }
      emit(e, t) {
        return new Promise((n, r) => {
          const o = (e => `${e}_${((e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[e]];return t})()}_callback`)(e);
          this.once(o, e => ((e, t, n) => new Promise((t, r) => {
            var o = e => {
                try {
                  a(n.next(e))
                } catch (e) {
                  r(e)
                }
              },
              i = e => {
                try {
                  a(n.throw(e))
                } catch (e) {
                  r(e)
                }
              },
              a = e => e.done ? t(e.value) : Promise.resolve(e.value).then(o, i);
            a((n = n.apply(e, null)).next())
          }))(this, 0, function*() {
            var t;
            null != (t = e.data) && t.error ? r(e.data.error) : n(e.data.params)
          })), this.send({
            method: e,
            data: {
              cbMethod: o,
              params: t
            }
          })
        })
      }
      disconnect() {}
    }
    var pt, mt = (e, t, n) => new Promise((r, o) => {
      var i = e => {
          try {
            s(n.next(e))
          } catch (e) {
            o(e)
          }
        },
        a = e => {
          try {
            s(n.throw(e))
          } catch (e) {
            o(e)
          }
        },
        s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
      s((n = n.apply(e, t)).next())
    });
    class gt extends ht {
      constructor(e) {
        super(), this.port = new lt(e), this.port.addEventListener("message", e => {
          const t = e.method;
          !t || !this.listeners[t] || this.listeners[t].forEach(t => t(e))
        })
      }
      listen(e) {
        const t = t => {
          e(t)
        };
        return this.port.addEventListener("message", t), () => this.port.removeEventListener("message", t)
      }
      send(e) {
        return mt(this, null, function*() {
          yield this.port.postMessage(e)
        })
      }
      disconnect() {
        return mt(this, null, function*() {
          yield this.port.close()
        })
      }
    }
    o(37007);
    const yt = "object" == typeof chrome && null != (pt = null == chrome ? void 0 : chrome.runtime) && pt.id ? o(96815) : {};
    yt.action = yt.action || yt.browserAction;
    var vt = 1e6,
      bt = 1e6,
      kt = "[big.js] ",
      wt = kt + "Invalid ",
      xt = wt + "decimal places",
      Ct = wt + "rounding mode",
      St = kt + "Division by zero",
      Tt = {},
      Ft = void 0,
      At = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

    function Lt(e, t, n, r) {
      var o = e.c;
      if (n === Ft && (n = e.constructor.RM), 0 !== n && 1 !== n && 2 !== n && 3 !== n) throw Error(Ct);
      if (1 > t) r = 3 === n && (r || !!o[0]) || 0 === t && (1 === n && o[0] >= 5 || 2 === n && (o[0] > 5 || 5 === o[0] && (r || o[1] !== Ft))), o.length = 1, r ? (e.e = e.e - t + 1, o[0] = 1) : o[0] = e.e = 0;
      else if (t < o.length) {
        if (r = 1 === n && o[t] >= 5 || 2 === n && (o[t] > 5 || 5 === o[t] && (r || o[t + 1] !== Ft || 1 & o[t - 1])) || 3 === n && (r || !!o[0]), o.length = t, r)
          for (; ++o[--t] > 9;)
            if (o[t] = 0, 0 === t) {
              ++e.e, o.unshift(1);
              break
            } for (t = o.length; !o[--t];) o.pop()
      }
      return e
    }

    function Rt(e, t, n) {
      var r = e.e,
        o = e.c.join(""),
        i = o.length;
      if (t) o = o.charAt(0) + (i > 1 ? "." + o.slice(1) : "") + (0 > r ? "e" : "e+") + r;
      else if (0 > r) {
        for (; ++r;) o = "0" + o;
        o = "0." + o
      } else if (r > 0)
        if (++r > i)
          for (r -= i; r--;) o += "0";
        else i > r && (o = o.slice(0, r) + "." + o.slice(r));
      else i > 1 && (o = o.charAt(0) + "." + o.slice(1));
      return 0 > e.s && n ? "-" + o : o
    }
    Tt.abs = function() {
      var e = new this.constructor(this);
      return e.s = 1, e
    }, Tt.cmp = function(e) {
      var t, n = this,
        r = n.c,
        o = (e = new n.constructor(e)).c,
        i = n.s,
        a = e.s,
        s = n.e,
        l = e.e;
      if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -a : 0;
      if (i != a) return i;
      if (t = 0 > i, s != l) return s > l ^ t ? 1 : -1;
      for (a = (s = r.length) < (l = o.length) ? s : l, i = -1; ++i < a;)
        if (r[i] != o[i]) return r[i] > o[i] ^ t ? 1 : -1;
      return s == l ? 0 : s > l ^ t ? 1 : -1
    }, Tt.div = function(e) {
      var t = this,
        n = t.constructor,
        r = t.c,
        o = (e = new n(e)).c,
        i = t.s == e.s ? 1 : -1,
        a = n.DP;
      if (a !== ~~a || 0 > a || a > vt) throw Error(xt);
      if (!o[0]) throw Error(St);
      if (!r[0]) return e.s = i, e.c = [e.e = 0], e;
      var s, l, c, u, f, d = o.slice(),
        h = s = o.length,
        p = r.length,
        m = r.slice(0, s),
        g = m.length,
        y = e,
        v = y.c = [],
        b = 0,
        k = a + (y.e = t.e - e.e) + 1;
      for (y.s = i, i = 0 > k ? 0 : k, d.unshift(0); g++ < s;) m.push(0);
      do {
        for (c = 0; 10 > c; c++) {
          if (s != (g = m.length)) u = s > g ? 1 : -1;
          else
            for (f = -1, u = 0; ++f < s;)
              if (o[f] != m[f]) {
                u = o[f] > m[f] ? 1 : -1;
                break
              } if (u >= 0) break;
          for (l = g == s ? o : d; g;) {
            if (m[--g] < l[g]) {
              for (f = g; f && !m[--f];) m[f] = 9;
              --m[f], m[g] += 10
            }
            m[g] -= l[g]
          }
          for (; !m[0];) m.shift()
        }
        v[b++] = u ? c : ++c, m[0] && u ? m[g] = r[h] || 0 : m = [r[h]]
      } while ((h++ < p || m[0] !== Ft) && i--);
      return !v[0] && 1 != b && (v.shift(), y.e--, k--), b > k && Lt(y, k, n.RM, m[0] !== Ft), y
    }, Tt.eq = function(e) {
      return 0 === this.cmp(e)
    }, Tt.gt = function(e) {
      return this.cmp(e) > 0
    }, Tt.gte = function(e) {
      return this.cmp(e) > -1
    }, Tt.lt = function(e) {
      return 0 > this.cmp(e)
    }, Tt.lte = function(e) {
      return 1 > this.cmp(e)
    }, Tt.minus = Tt.sub = function(e) {
      var t, n, r, o, i = this,
        a = i.constructor,
        s = i.s,
        l = (e = new a(e)).s;
      if (s != l) return e.s = -l, i.plus(e);
      var c = i.c.slice(),
        u = i.e,
        f = e.c,
        d = e.e;
      if (!c[0] || !f[0]) return f[0] ? e.s = -l : c[0] ? e = new a(i) : e.s = 1, e;
      if (s = u - d) {
        for ((o = 0 > s) ? (s = -s, r = c) : (d = u, r = f), r.reverse(), l = s; l--;) r.push(0);
        r.reverse()
      } else
        for (n = ((o = c.length < f.length) ? c : f).length, s = l = 0; n > l; l++)
          if (c[l] != f[l]) {
            o = c[l] < f[l];
            break
          } if (o && (r = c, c = f, f = r, e.s = -e.s), (l = (n = f.length) - (t = c.length)) > 0)
        for (; l--;) c[t++] = 0;
      for (l = t; n > s;) {
        if (c[--n] < f[n]) {
          for (t = n; t && !c[--t];) c[t] = 9;
          --c[t], c[n] += 10
        }
        c[n] -= f[n]
      }
      for (; 0 === c[--l];) c.pop();
      for (; 0 === c[0];) c.shift(), --d;
      return c[0] || (e.s = 1, c = [d = 0]), e.c = c, e.e = d, e
    }, Tt.mod = function(e) {
      var t, n = this,
        r = n.constructor,
        o = n.s,
        i = (e = new r(e)).s;
      if (!e.c[0]) throw Error(St);
      return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = o, e.s = i, t ? new r(n) : (o = r.DP, i = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = o, r.RM = i, this.minus(n.times(e)))
    }, Tt.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, e
    }, Tt.plus = Tt.add = function(e) {
      var t, n, r, o = this,
        i = o.constructor;
      if (e = new i(e), o.s != e.s) return e.s = -e.s, o.minus(e);
      var a = o.e,
        s = o.c,
        l = e.e,
        c = e.c;
      if (!s[0] || !c[0]) return c[0] || (s[0] ? e = new i(o) : e.s = o.s), e;
      if (s = s.slice(), t = a - l) {
        for (t > 0 ? (l = a, r = c) : (t = -t, r = s), r.reverse(); t--;) r.push(0);
        r.reverse()
      }
      for (0 > s.length - c.length && (r = c, c = s, s = r), t = c.length, n = 0; t; s[t] %= 10) n = (s[--t] = s[t] + c[t] + n) / 10 | 0;
      for (n && (s.unshift(n), ++l), t = s.length; 0 === s[--t];) s.pop();
      return e.c = s, e.e = l, e
    }, Tt.pow = function(e) {
      var t = this,
        n = new t.constructor("1"),
        r = n,
        o = 0 > e;
      if (e !== ~~e || -bt > e || e > bt) throw Error(wt + "exponent");
      for (o && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
      return o ? n.div(r) : r
    }, Tt.prec = function(e, t) {
      if (e !== ~~e || 1 > e || e > vt) throw Error(wt + "precision");
      return Lt(new this.constructor(this), e, t)
    }, Tt.round = function(e, t) {
      if (e === Ft) e = 0;
      else if (e !== ~~e || -vt > e || e > vt) throw Error(xt);
      return Lt(new this.constructor(this), e + this.e + 1, t)
    }, Tt.sqrt = function() {
      var e, t, n, r = this,
        o = r.constructor,
        i = r.s,
        a = r.e,
        s = new o("0.5");
      if (!r.c[0]) return new o(r);
      if (0 > i) throw Error(kt + "No square root");
      0 === (i = Math.sqrt(r + "")) || i === 1 / 0 ? ((t = r.c.join("")).length + a & 1 || (t += "0"), a = ((a + 1) / 2 | 0) - (0 > a || 1 & a), e = new o(((i = Math.sqrt(t)) == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + a)) : e = new o(i + ""), a = e.e + (o.DP += 4);
      do {
        n = e, e = s.times(n.plus(r.div(n)))
      } while (n.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
      return Lt(e, (o.DP -= 4) + e.e + 1, o.RM)
    }, Tt.times = Tt.mul = function(e) {
      var t, n = this,
        r = n.constructor,
        o = n.c,
        i = (e = new r(e)).c,
        a = o.length,
        s = i.length,
        l = n.e,
        c = e.e;
      if (e.s = n.s == e.s ? 1 : -1, !o[0] || !i[0]) return e.c = [e.e = 0], e;
      for (e.e = l + c, s > a && (t = o, o = i, i = t, c = a, a = s, s = c), t = Array(c = a + s); c--;) t[c] = 0;
      for (l = s; l--;) {
        for (s = 0, c = a + l; c > l;) s = t[c] + i[l] * o[c - l - 1] + s, t[c--] = s % 10, s = s / 10 | 0;
        t[c] = s
      }
      for (s ? ++e.e : t.shift(), l = t.length; !t[--l];) t.pop();
      return e.c = t, e
    }, Tt.toExponential = function(e, t) {
      var n = this,
        r = n.c[0];
      if (e !== Ft) {
        if (e !== ~~e || 0 > e || e > vt) throw Error(xt);
        for (n = Lt(new n.constructor(n), ++e, t); n.c.length < e;) n.c.push(0)
      }
      return Rt(n, !0, !!r)
    }, Tt.toFixed = function(e, t) {
      var n = this,
        r = n.c[0];
      if (e !== Ft) {
        if (e !== ~~e || 0 > e || e > vt) throw Error(xt);
        for (e = e + (n = Lt(new n.constructor(n), e + n.e + 1, t)).e + 1; n.c.length < e;) n.c.push(0)
      }
      return Rt(n, !1, !!r)
    }, Tt[Symbol.for("nodejs.util.inspect.custom")] = Tt.toJSON = Tt.toString = function() {
      var e = this,
        t = e.constructor;
      return Rt(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0])
    }, Tt.toNumber = function() {
      var e = +Rt(this, !0, !0);
      if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(kt + "Imprecise conversion");
      return e
    }, Tt.toPrecision = function(e, t) {
      var n = this,
        r = n.constructor,
        o = n.c[0];
      if (e !== Ft) {
        if (e !== ~~e || 1 > e || e > vt) throw Error(wt + "precision");
        for (n = Lt(new r(n), e, t); n.c.length < e;) n.c.push(0)
      }
      return Rt(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!o)
    }, Tt.valueOf = function() {
      var e = this,
        t = e.constructor;
      if (!0 === t.strict) throw Error(kt + "valueOf disallowed");
      return Rt(e, e.e <= t.NE || e.e >= t.PE, !0)
    };
    var Et = function e() {
      function t(n) {
        var r = this;
        if (!(r instanceof t)) return n === Ft ? e() : new t(n);
        if (n instanceof t) r.s = n.s, r.e = n.e, r.c = n.c.slice();
        else {
          if ("string" != typeof n) {
            if (!0 === t.strict && "bigint" != typeof n) throw TypeError(wt + "value");
            n = 0 === n && 0 > 1 / n ? "-0" : n + ""
          }! function(e, t) {
            var n, r, o;
            if (!At.test(t)) throw Error(wt + "number");
            for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), o = t.length, r = 0; o > r && "0" == t.charAt(r);) ++r;
            if (r == o) e.c = [e.e = 0];
            else {
              for (; o > 0 && "0" == t.charAt(--o););
              for (e.e = n - r - 1, e.c = [], n = 0; o >= r;) e.c[n++] = +t.charAt(r++)
            }
          }(r, n)
        }
        r.constructor = t
      }
      return t.prototype = Tt, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = !1, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
    }();
    const Mt = Et;
    var It = Math.pow,
      Ot = (e => (e.FIAT = "FIAT", e.CRYPTO = "CRYPTO", e.PERCENT = "PERCENT", e))(Ot || {});
    const Ht = ({
      type: e,
      amount: t,
      locale: n,
      currency: r,
      maxSignificantDecimals: o,
      tinyThreshold: i,
      compact: a
    }) => {
      if (null == t || "" === t) return "";
      const {
        prefix: s,
        formattedAmount: l,
        suffix: c
      } = function({
        type: e,
        amount: t,
        locale: n,
        currency: r,
        maxSignificantDecimals: o,
        tinyThreshold: i,
        compact: a
      }) {
        const s = i ?? ("CRYPTO" === e ? 4 : 2),
          l = o ?? ("CRYPTO" === e ? 4 : 2),
          c = ((e, t) => {
            const n = new Mt(e).toFixed(),
              [r, o] = n.split(".");
            if (!o) return e;
            const i = o.split(/[1-9]/, 1).pop().length;
            if (!i) {
              const n = e.toString().split(".");
              return n[1] = n[1].substring(0, t), parseFloat(n.join("."))
            }
            const a = o.slice(0, i + 1),
              s = o.slice(i + 1, i + t);
            return parseFloat(r + "." + a + s)
          })(+t, l),
          u = Number.isInteger(+c),
          f = Math.abs(c) < 1 / It(10, s) && 0 !== Math.abs(c),
          d = "PERCENT" === e ? c / 100 : c;
        let h = {
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
            h = {
              signDisplay: "auto",
              style: "decimal",
              maximumFractionDigits: u ? 0 : l,
              useGrouping: !0,
              roundingMode: "trunc",
              notation: a ? "compact" : void 0
            };
            break;
          case "PERCENT":
            h = {
              signDisplay: "always",
              style: "percent",
              maximumFractionDigits: l,
              minimumFractionDigits: l,
              useGrouping: !0,
              roundingMode: "trunc"
            }
        }
        const p = new Intl.NumberFormat(n, h).formatToParts(f ? 1 / It(10, s) : +d);
        let m = f ? "<" : "",
          g = "",
          y = "";
        return p.forEach(t => {
          "currency" === t.type ? "FIAT" !== e || y.length ? g = " " + t.value : m += t.value : ["integer", "fraction", "decimal", "group"].includes(t.type) ? y += t.value : "plusSign" === t.type || "minusSign" === t.type ? m += t.value : "percentSign" === t.type ? g = t.value : "compact" === t.type && (g += t.value)
        }), "CRYPTO" === e && r && !g.includes(r) && (g += " " + r), {
          prefix: m,
          formattedAmount: y,
          strippedAmount: c.toString(),
          suffix: g
        }
      }({
        type: e,
        amount: t,
        locale: n,
        currency: r,
        maxSignificantDecimals: o,
        tinyThreshold: i,
        compact: a
      });
      return `${s}${l}${c}`
    };
    var Bt = Object.defineProperty,
      jt = Object.defineProperties,
      Dt = Object.getOwnPropertyDescriptors,
      Nt = Object.getOwnPropertySymbols,
      _t = {}.hasOwnProperty,
      Pt = {}.propertyIsEnumerable,
      Vt = (e, t, n) => t in e ? Bt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
      }) : e[t] = n,
      Ut = (e, t) => {
        for (var n in t || (t = {})) _t.call(t, n) && Vt(e, n, t[n]);
        if (Nt)
          for (var n of Nt(t)) Pt.call(t, n) && Vt(e, n, t[n]);
        return e
      },
      Wt = (e, t) => jt(e, Dt(t));

    function zt() {
      const e = document.getElementById("in-page-channel-node-id");
      if (!e) return null;
      const t = e.getAttribute("data-channel-name");
      return t ? new gt(t) : null
    }

    function Zt(e, t) {
      return ((e, t, n) => new Promise((t, r) => {
        var o = e => {
            try {
              a(n.next(e))
            } catch (e) {
              r(e)
            }
          },
          i = e => {
            try {
              a(n.throw(e))
            } catch (e) {
              r(e)
            }
          },
          a = e => e.done ? t(e.value) : Promise.resolve(e.value).then(o, i);
        a((n = n.apply(e, null)).next())
      }))(this, 0, function*() {
        try {
          const n = zt();
          if (!n) return;
          yield n.emit(w.TRACK_ANALYTICS, {
            analyticsData: {
              event: e,
              props: Wt(Ut({}, t), {
                pageViewSource: e
              })
            }
          })
        } catch (e) {
          Me.error("Token Scanner: Failed to track analytics:", e)
        }
      })
    }

    function $t(e) {
      return null === e ? "N/A" : Ht({
        type: Ot.FIAT,
        amount: e,
        locale: "en-US",
        currency: "USD",
        maxSignificantDecimals: 2
      })
    }

    function Gt(e) {
      return null === e ? "N/A" : Ht({
        type: Ot.PERCENT,
        amount: e,
        locale: "en-US",
        maxSignificantDecimals: 2
      })
    }

    function qt(e) {
      return null === e ? "N/A" : Ht({
        type: Ot.FIAT,
        amount: e,
        locale: "en-US",
        currency: "USD",
        compact: !0,
        maxSignificantDecimals: 2
      })
    }

    function Yt(e) {
      return null === e ? "N/A" : Ht({
        type: Ot.FIAT,
        amount: e,
        locale: "en-US",
        currency: "USD",
        compact: !0,
        maxSignificantDecimals: 2
      })
    }
    var Kt = (e, t, n) => new Promise((r, o) => {
      var i = e => {
          try {
            s(n.next(e))
          } catch (e) {
            o(e)
          }
        },
        a = e => {
          try {
            s(n.throw(e))
          } catch (e) {
            o(e)
          }
        },
        s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
      s((n = n.apply(e, t)).next())
    });
    const Xt = new Set,
      Jt = new Set,
      Qt = new Map;
    let en = new WeakSet,
      tn = null,
      nn = !1;

    function rn(e) {
      return Qt.get(e)
    }

    function on(e) {
      const t = [],
        n = /\$([A-Z0-9]{2,})\b/g;
      let r;
      for (; null !== (r = n.exec(e));) {
        const e = r[1].toUpperCase();
        /^\d+$/.test(e) || Jt.has(e) || t.push({
          symbol: e,
          index: r.index,
          length: r[0].length
        })
      }
      return t
    }

    function an(e) {
      return Kt(this, null, function*() {
        const t = new Map,
          n = e.filter(e => Xt.has(e) ? (t.set(e, !0), !1) : !Jt.has(e) || (t.set(e, !1), !1));
        if (0 === n.length) return t;
        try {
          const e = zt();
          if (!e) return n.forEach(e => t.set(e, !1)), t;
          Me.debug(`Token Scanner: Batch validating ${n.length} symbols:`, n);
          const r = yield e.emit(w.GET_TOKEN_BASIC_INFO, {
            symbols: n
          });
          if (r && r.success && r.data && Array.isArray(r.data)) {
            const e = new Set;
            r.data.forEach(n => {
              const r = n.symbol.toUpperCase();
              Xt.add(r), e.add(r), Qt.set(r, {
                logo: n.logo,
                price: n.price,
                blockchainId: n.blockchainId,
                name: n.name,
                assetId: n.assetId,
                key: n.key,
                networkName: n.networkName
              }), t.set(r, !0)
            }), n.forEach(n => {
              e.has(n) || (Jt.add(n), t.set(n, !1))
            }), Me.debug(`Token Scanner: Batch validation complete. Valid: ${e.size}, Failed: ${n.length-e.size}`)
          } else n.forEach(e => {
            Jt.add(e), t.set(e, !1)
          })
        } catch (e) {
          Me.error("Token Scanner: Failed to batch validate symbols:", e), n.forEach(e => {
            Jt.add(e), t.set(e, !1)
          })
        }
        return t
      })
    }

    function sn(e) {
      return Kt(this, null, function*() {
        var t;
        return null != (t = (yield an([e])).get(e)) && t
      })
    }

    function ln(e) {
      var t;
      const n = document.createElement("span");
      n.className = "trust-token-highlight", n.setAttribute("data-token-symbol", e);
      const r = Qt.get(e),
        o = r?.logo,
        i = r?.blockchainId ? function(e) {
          return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${e}/info/logo.png`
        }(r.blockchainId) : "/",
        a = $t(null != (t = r?.price) ? t : null),
        s = document.createElement("div");
      s.className = "trust-token-logo-container";
      const l = document.createElement("img");
      l.className = "trust-token-main-logo", l.src = o ?? "/", l.alt = "Token logo", l.width = 16, l.height = 16, l.onerror = () => {
        l.src = "/"
      };
      const c = document.createElement("img");
      c.className = "trust-token-blockchain-logo", c.src = i, c.alt = "Blockchain", c.width = 4, c.height = 4, c.onerror = () => {
        c.src = "/"
      }, s.appendChild(l), s.appendChild(c);
      const u = document.createElement("span");
      u.className = "trust-token-name", u.textContent = e + " · ";
      const f = document.createElement("span");
      return f.className = "trust-token-price-text", f.textContent = a, n.appendChild(s), n.appendChild(u), n.appendChild(f), n.addEventListener("click", e => {
        e.preventDefault(), e.stopPropagation()
      }), n
    }

    function cn() {
      if (!nn) {
        nn = !0;
        try {
          const e = document.querySelectorAll('[data-testid="tweetText"], [data-testid="card.layoutLarge.detail"], article [lang]');
          if (0 === e.length) return void(nn = !1);
          const t = [];
          e.forEach(e => {
            const n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
              acceptNode: e => {
                const t = e.parentElement;
                return t && ("SCRIPT" === t.tagName || "STYLE" === t.tagName) || t?.classList.contains("trust-token-highlight") || t?.closest(".trust-token-highlight") || t?.closest(".trust-token-popup") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
              }
            });
            let r;
            for (; r = n.nextNode();) r.textContent && r.textContent.trim().length > 0 && t.push(r)
          }), Me.debug("Token Scanner: Found", t.length, "text nodes to process in", e.length, "tweet containers");
          const n = new Set;
          t.forEach(e => {
            on(e.textContent || "").forEach(e => n.add(e.symbol))
          }), Me.debug(`Token Scanner: Found ${n.size} unique symbols to validate`), n.size > 0 && an(Array.from(n)).then(() => {
            t.forEach(e => {
              (function(e) {
                return Kt(this, null, function*() {
                  var t, n;
                  if (en.has(e) || null != (t = e.parentElement) && t.classList.contains("trust-token-highlight") || null != (n = e.parentElement) && n.closest(".trust-token-highlight")) return;
                  const r = on(e.textContent || "");
                  if (0 === r.length) return void en.add(e);
                  en.add(e), r.sort((e, t) => t.index - e.index);
                  let o = e;
                  for (let e = 0; e < r.length; e++) {
                    const t = r[e],
                      n = e === r.length - 1,
                      i = o.textContent || "",
                      a = i.substring(0, t.index),
                      s = i.substring(t.index, t.index + t.length),
                      l = i.substring(t.index + t.length),
                      c = document.createTextNode(s),
                      u = o.parentNode;
                    if (u) {
                      if (n && a) {
                        const e = document.createTextNode(l);
                        u.insertBefore(e, o.nextSibling), u.insertBefore(c, e), o.textContent = a, en.add(e)
                      } else {
                        const e = document.createTextNode(a),
                          t = document.createTextNode(l);
                        u.insertBefore(t, o), u.insertBefore(c, t), u.insertBefore(e, c), u.removeChild(o), en.add(e), en.add(t), o = e
                      }
                      sn(t.symbol).then(e => {
                        if (e && c.parentNode) {
                          const e = ln(t.symbol);
                          c.parentNode.replaceChild(e, c)
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
          nn = !1
        }
      }
    }
    var un = o(74848),
      fn = o(65848),
      dn = function(e, t) {
        return (dn = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
          })(e, t)
      };

    function hn(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + t + " is not a constructor or null");

      function n() {
        this.constructor = e
      }
      dn(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var pn = function() {
      return pn = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; r > n; n++)
          for (var o in t = arguments[n])({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
      }, pn.apply(this, arguments)
    };

    function mn(e, t) {
      var n = {};
      for (var r in e)({}).hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && {}.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
      }
      return n
    }

    function gn(e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, o = 0, i = t.length; i > o; o++)(r || !(o in t)) && (r || (r = [].slice.call(t, 0, o)), r[o] = t[o]);
      return e.concat(r || [].slice.call(t))
    }

    function yn(e, t) {
      var n = t && t.cache ? t.cache : An,
        r = t && t.serializer ? t.serializer : Tn;
      return (t && t.strategy ? t.strategy : wn)(e, {
        cache: n,
        serializer: r
      })
    }

    function vn(e, t, n, r) {
      var o = function(e) {
          return null == e || "number" == typeof e || "boolean" == typeof e
        }(r) ? r : n(r),
        i = t.get(o);
      return typeof i > "u" && (i = e.call(this, r), t.set(o, i)), i
    }

    function bn(e, t, n) {
      var r = [].slice.call(arguments, 3),
        o = n(r),
        i = t.get(o);
      return typeof i > "u" && (i = e.apply(this, r), t.set(o, i)), i
    }

    function kn(e, t, n, r, o) {
      return n.bind(t, e, r, o)
    }

    function wn(e, t) {
      return kn(e, this, 1 === e.length ? vn : bn, t.cache.create(), t.serializer)
    }
    "function" == typeof SuppressedError && SuppressedError;
    var xn, Cn, Sn, Tn = function() {
        return JSON.stringify(arguments)
      },
      Fn = function() {
        function e() {
          this.cache = Object.create(null)
        }
        return e.prototype.get = function(e) {
          return this.cache[e]
        }, e.prototype.set = function(e, t) {
          this.cache[e] = t
        }, e
      }(),
      An = {
        create: function() {
          return new Fn
        }
      },
      Ln = {
        variadic: function(e, t) {
          return kn(e, this, bn, t.cache.create(), t.serializer)
        },
        monadic: function(e, t) {
          return kn(e, this, vn, t.cache.create(), t.serializer)
        }
      };

    function Rn(e) {
      return e.type === Cn.literal
    }

    function En(e) {
      return e.type === Cn.argument
    }

    function Mn(e) {
      return e.type === Cn.number
    }

    function In(e) {
      return e.type === Cn.date
    }

    function On(e) {
      return e.type === Cn.time
    }

    function Hn(e) {
      return e.type === Cn.select
    }

    function Bn(e) {
      return e.type === Cn.plural
    }

    function jn(e) {
      return e.type === Cn.pound
    }

    function Dn(e) {
      return e.type === Cn.tag
    }

    function Nn(e) {
      return !(!e || "object" != typeof e || e.type !== Sn.number)
    }

    function _n(e) {
      return !(!e || "object" != typeof e || e.type !== Sn.dateTime)
    }! function(e) {
      e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
    }(xn || (xn = {})),
    function(e) {
      e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
    }(Cn || (Cn = {})),
    function(e) {
      e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
    }(Sn || (Sn = {}));
    var Pn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
      Vn = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

    function Un(e) {
      var t = {};
      return e.replace(Vn, function(e) {
        var n = e.length;
        switch (e[0]) {
          case "G":
            t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
            break;
          case "y":
            t.year = 2 === n ? "2-digit" : "numeric";
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
            t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
            break;
          case "w":
          case "W":
            throw new RangeError("`w/W` (week) patterns are not supported");
          case "d":
            t.day = ["numeric", "2-digit"][n - 1];
            break;
          case "D":
          case "F":
          case "g":
            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
          case "E":
            t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
            break;
          case "e":
            if (4 > n) throw new RangeError("`e..eee` (weekday) patterns are not supported");
            t.weekday = ["short", "long", "narrow", "short"][n - 4];
            break;
          case "c":
            if (4 > n) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
            t.weekday = ["short", "long", "narrow", "short"][n - 4];
            break;
          case "a":
            t.hour12 = !0;
            break;
          case "b":
          case "B":
            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
          case "h":
            t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
            break;
          case "H":
            t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
            break;
          case "K":
            t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
            break;
          case "k":
            t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
            break;
          case "j":
          case "J":
          case "C":
            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
          case "m":
            t.minute = ["numeric", "2-digit"][n - 1];
            break;
          case "s":
            t.second = ["numeric", "2-digit"][n - 1];
            break;
          case "S":
          case "A":
            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
          case "z":
            t.timeZoneName = 4 > n ? "short" : "long";
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
      }), t
    }
    var Wn = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

    function zn(e) {
      return e.replace(/^(.*?)-/, "")
    }
    var Zn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
      $n = /^(@+)?(\+|#+)?[rs]?$/g,
      Gn = /(\*)(0+)|(#+)(0+)|(0+)/g,
      qn = /^(0+)$/;

    function Yn(e) {
      var t = {};
      return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace($n, function(e, n, r) {
        return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
      }), t
    }

    function Kn(e) {
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

    function Xn(e) {
      var t;
      if ("E" === e[0] && "E" === e[1] ? (t = {
          notation: "engineering"
        }, e = e.slice(2)) : "E" === e[0] && (t = {
          notation: "scientific"
        }, e = e.slice(1)), t) {
        var n = e.slice(0, 2);
        if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !qn.test(e)) throw Error("Malformed concise eng/scientific notation");
        t.minimumIntegerDigits = e.length
      }
      return t
    }

    function Jn(e) {
      return Kn(e) || {}
    }

    function Qn(e) {
      for (var t = {}, n = 0, r = e; n < r.length; n++) {
        var o = r[n];
        switch (o.stem) {
          case "percent":
          case "%":
            t.style = "percent";
            continue;
          case "%x100":
            t.style = "percent", t.scale = 100;
            continue;
          case "currency":
            t.style = "currency", t.currency = o.options[0];
            continue;
          case "group-off":
          case ",_":
            t.useGrouping = !1;
            continue;
          case "precision-integer":
          case ".":
            t.maximumFractionDigits = 0;
            continue;
          case "measure-unit":
          case "unit":
            t.style = "unit", t.unit = zn(o.options[0]);
            continue;
          case "compact-short":
          case "K":
            t.notation = "compact", t.compactDisplay = "short";
            continue;
          case "compact-long":
          case "KK":
            t.notation = "compact", t.compactDisplay = "long";
            continue;
          case "scientific":
            t = pn(pn(pn({}, t), {
              notation: "scientific"
            }), o.options.reduce(function(e, t) {
              return pn(pn({}, e), Jn(t))
            }, {}));
            continue;
          case "engineering":
            t = pn(pn(pn({}, t), {
              notation: "engineering"
            }), o.options.reduce(function(e, t) {
              return pn(pn({}, e), Jn(t))
            }, {}));
            continue;
          case "notation-simple":
            t.notation = "standard";
            continue;
          case "unit-width-narrow":
            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
            continue;
          case "unit-width-short":
            t.currencyDisplay = "code", t.unitDisplay = "short";
            continue;
          case "unit-width-full-name":
            t.currencyDisplay = "name", t.unitDisplay = "long";
            continue;
          case "unit-width-iso-code":
            t.currencyDisplay = "symbol";
            continue;
          case "scale":
            t.scale = parseFloat(o.options[0]);
            continue;
          case "rounding-mode-floor":
            t.roundingMode = "floor";
            continue;
          case "rounding-mode-ceiling":
            t.roundingMode = "ceil";
            continue;
          case "rounding-mode-down":
            t.roundingMode = "trunc";
            continue;
          case "rounding-mode-up":
            t.roundingMode = "expand";
            continue;
          case "rounding-mode-half-even":
            t.roundingMode = "halfEven";
            continue;
          case "rounding-mode-half-down":
            t.roundingMode = "halfTrunc";
            continue;
          case "rounding-mode-half-up":
            t.roundingMode = "halfExpand";
            continue;
          case "integer-width":
            if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
            o.options[0].replace(Gn, function(e, n, r, o, i, a) {
              if (n) t.minimumIntegerDigits = r.length;
              else {
                if (o && i) throw Error("We currently do not support maximum integer digits");
                if (a) throw Error("We currently do not support exact integer digits")
              }
              return ""
            });
            continue
        }
        if (qn.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
        else if (Zn.test(o.stem)) {
          if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
          o.stem.replace(Zn, function(e, n, r, o, i, a) {
            return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
          });
          var i = o.options[0];
          "w" === i ? t = pn(pn({}, t), {
            trailingZeroDisplay: "stripIfInteger"
          }) : i && (t = pn(pn({}, t), Yn(i)))
        } else if ($n.test(o.stem)) t = pn(pn({}, t), Yn(o.stem));
        else {
          var a = Kn(o.stem);
          a && (t = pn(pn({}, t), a));
          var s = Xn(o.stem);
          s && (t = pn(pn({}, t), s))
        }
      }
      return t
    }
    var er = {
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
      var t = e.hourCycle;
      if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
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
      var n, r = e.language;
      return "root" !== r && (n = e.maximize().region), (er[n || ""] || er[r || ""] || er["".concat(r, "-001")] || er["001"])[0]
    }
    var nr, rr = RegExp("^".concat(Pn.source, "*")),
      or = RegExp("".concat(Pn.source, "*$"));

    function ir(e, t) {
      return {
        start: e,
        end: t
      }
    }
    var ar = !!"".startsWith && !0,
      sr = !!String.fromCodePoint,
      lr = !!Object.fromEntries,
      cr = !!"".codePointAt,
      ur = !!"".trimStart,
      fr = !!"".trimEnd,
      dr = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 9007199254740991 >= Math.abs(e)
      },
      hr = !0;
    try {
      hr = "a" === (null === (nr = wr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === nr ? void 0 : nr[0])
    } catch {
      hr = !1
    }
    var pr, mr = ar ? function(e, t, n) {
        return e.startsWith(t, n)
      } : function(e, t, n) {
        return e.slice(n, n + t.length) === t
      },
      gr = sr ? String.fromCodePoint : function() {
        for (var e = [], t = 0; arguments.length > t; t++) e[t] = arguments[t];
        for (var n, r = "", o = e.length, i = 0; o > i;) {
          if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
          r += 65536 > n ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
        }
        return r
      },
      yr = lr ? Object.fromEntries : function(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n],
            i = o[0],
            a = o[1];
          t[i] = a
        }
        return t
      },
      vr = cr ? function(e, t) {
        return e.codePointAt(t)
      } : function(e, t) {
        var n = e.length;
        if (t >= 0 && n > t) {
          var r, o = e.charCodeAt(t);
          return 55296 > o || o > 56319 || t + 1 === n || 56320 > (r = e.charCodeAt(t + 1)) || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
        }
      },
      br = ur ? function(e) {
        return e.trimStart()
      } : function(e) {
        return e.replace(rr, "")
      },
      kr = fr ? function(e) {
        return e.trimEnd()
      } : function(e) {
        return e.replace(or, "")
      };

    function wr(e, t) {
      return RegExp(e, t)
    }
    if (hr) {
      var xr = wr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
      pr = function(e, t) {
        var n;
        return xr.lastIndex = t, null !== (n = xr.exec(e)[1]) && void 0 !== n ? n : ""
      }
    } else pr = function(e, t) {
      for (var n = [];;) {
        var r = vr(e, t);
        if (void 0 === r || Ar(r) || Lr(r)) break;
        n.push(r), t += 65536 > r ? 1 : 2
      }
      return gr.apply(void 0, n)
    };
    var Cr, Sr = function() {
      function e(e, t) {
        void 0 === t && (t = {}), this.message = e, this.position = {
          offset: 0,
          line: 1,
          column: 1
        }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
      }
      return e.prototype.parse = function() {
        if (0 !== this.offset()) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1)
      }, e.prototype.parseMessage = function(e, t, n) {
        for (var r = []; !this.isEOF();) {
          var o = this.char();
          if (123 === o) {
            if ((i = this.parseArgument(e, n)).err) return i;
            r.push(i.val)
          } else {
            if (125 === o && e > 0) break;
            if (35 !== o || "plural" !== t && "selectordinal" !== t) {
              if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                if (n) break;
                return this.error(xn.UNMATCHED_CLOSING_TAG, ir(this.clonePosition(), this.clonePosition()))
              }
              if (60 === o && !this.ignoreTag && Tr(this.peek() || 0)) {
                if ((i = this.parseTag(e, t)).err) return i;
                r.push(i.val)
              } else {
                var i;
                if ((i = this.parseLiteral(e, t)).err) return i;
                r.push(i.val)
              }
            } else {
              var a = this.clonePosition();
              this.bump(), r.push({
                type: Cn.pound,
                location: ir(a, this.clonePosition())
              })
            }
          }
        }
        return {
          val: r,
          err: null
        }
      }, e.prototype.parseTag = function(e, t) {
        var n = this.clonePosition();
        this.bump();
        var r = this.parseTagName();
        if (this.bumpSpace(), this.bumpIf("/>")) return {
          val: {
            type: Cn.literal,
            value: "<".concat(r, "/>"),
            location: ir(n, this.clonePosition())
          },
          err: null
        };
        if (this.bumpIf(">")) {
          var o = this.parseMessage(e + 1, t, !0);
          if (o.err) return o;
          var i = o.val,
            a = this.clonePosition();
          if (this.bumpIf("</")) {
            if (this.isEOF() || !Tr(this.char())) return this.error(xn.INVALID_TAG, ir(a, this.clonePosition()));
            var s = this.clonePosition();
            return r !== this.parseTagName() ? this.error(xn.UNMATCHED_CLOSING_TAG, ir(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
              val: {
                type: Cn.tag,
                value: r,
                children: i,
                location: ir(n, this.clonePosition())
              },
              err: null
            } : this.error(xn.INVALID_TAG, ir(a, this.clonePosition())))
          }
          return this.error(xn.UNCLOSED_TAG, ir(n, this.clonePosition()))
        }
        return this.error(xn.INVALID_TAG, ir(n, this.clonePosition()))
      }, e.prototype.parseTagName = function() {
        var e = this.offset();
        for (this.bump(); !this.isEOF() && Fr(this.char());) this.bump();
        return this.message.slice(e, this.offset())
      }, e.prototype.parseLiteral = function(e, t) {
        for (var n = this.clonePosition(), r = "";;) {
          var o = this.tryParseQuote(t);
          if (o) r += o;
          else {
            var i = this.tryParseUnquoted(e, t);
            if (i) r += i;
            else {
              var a = this.tryParseLeftAngleBracket();
              if (!a) break;
              r += a
            }
          }
        }
        var s = ir(n, this.clonePosition());
        return {
          val: {
            type: Cn.literal,
            value: r,
            location: s
          },
          err: null
        }
      }, e.prototype.tryParseLeftAngleBracket = function() {
        return this.isEOF() || 60 !== this.char() || !this.ignoreTag && function(e) {
          return Tr(e) || 47 === e
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
        var t = [this.char()];
        for (this.bump(); !this.isEOF();) {
          var n = this.char();
          if (39 === n) {
            if (39 !== this.peek()) {
              this.bump();
              break
            }
            t.push(39), this.bump()
          } else t.push(n);
          this.bump()
        }
        return gr.apply(void 0, t)
      }, e.prototype.tryParseUnquoted = function(e, t) {
        if (this.isEOF()) return null;
        var n = this.char();
        return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), gr(n))
      }, e.prototype.parseArgument = function(e, t) {
        var n = this.clonePosition();
        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(xn.EXPECT_ARGUMENT_CLOSING_BRACE, ir(n, this.clonePosition()));
        if (125 === this.char()) return this.bump(), this.error(xn.EMPTY_ARGUMENT, ir(n, this.clonePosition()));
        var r = this.parseIdentifierIfPossible().value;
        if (!r) return this.error(xn.MALFORMED_ARGUMENT, ir(n, this.clonePosition()));
        if (this.bumpSpace(), this.isEOF()) return this.error(xn.EXPECT_ARGUMENT_CLOSING_BRACE, ir(n, this.clonePosition()));
        switch (this.char()) {
          case 125:
            return this.bump(), {
              val: {
                type: Cn.argument,
                value: r,
                location: ir(n, this.clonePosition())
              },
              err: null
            };
          case 44:
            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(xn.EXPECT_ARGUMENT_CLOSING_BRACE, ir(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
          default:
            return this.error(xn.MALFORMED_ARGUMENT, ir(n, this.clonePosition()))
        }
      }, e.prototype.parseIdentifierIfPossible = function() {
        var e = this.clonePosition(),
          t = this.offset(),
          n = pr(this.message, t),
          r = t + n.length;
        return this.bumpTo(r), {
          value: n,
          location: ir(e, this.clonePosition())
        }
      }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
        var o, i = this.clonePosition(),
          a = this.parseIdentifierIfPossible().value,
          s = this.clonePosition();
        switch (a) {
          case "":
            return this.error(xn.EXPECT_ARGUMENT_TYPE, ir(i, s));
          case "number":
          case "date":
          case "time":
            this.bumpSpace();
            var l = null;
            if (this.bumpIf(",")) {
              this.bumpSpace();
              var c = this.clonePosition();
              if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
              if (0 === (h = kr(y.val)).length) return this.error(xn.EXPECT_ARGUMENT_STYLE, ir(this.clonePosition(), this.clonePosition()));
              l = {
                style: h,
                styleLocation: ir(c, this.clonePosition())
              }
            }
            if ((v = this.tryParseArgumentClose(r)).err) return v;
            var u = ir(r, this.clonePosition());
            if (l && mr(l?.style, "::", 0)) {
              var f = br(l.style.slice(2));
              if ("number" === a) return (y = this.parseNumberSkeletonFromString(f, l.styleLocation)).err ? y : {
                val: {
                  type: Cn.number,
                  value: n,
                  location: u,
                  style: y.val
                },
                err: null
              };
              if (0 === f.length) return this.error(xn.EXPECT_DATE_TIME_SKELETON, u);
              var d = f;
              this.locale && (d = function(e, t) {
                for (var n = "", r = 0; r < e.length; r++) {
                  var o = e.charAt(r);
                  if ("j" === o) {
                    for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                    var a = 1 + (1 & i),
                      s = 2 > i ? 1 : 3 + (i >> 1),
                      l = tr(t);
                    for (("H" == l || "k" == l) && (s = 0); s-- > 0;) n += "a";
                    for (; a-- > 0;) n = l + n
                  } else n += "J" === o ? "H" : o
                }
                return n
              }(f, this.locale));
              var h = {
                type: Sn.dateTime,
                pattern: d,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Un(d) : {}
              };
              return {
                val: {
                  type: "date" === a ? Cn.date : Cn.time,
                  value: n,
                  location: u,
                  style: h
                },
                err: null
              }
            }
            return {
              val: {
                type: "number" === a ? Cn.number : "date" === a ? Cn.date : Cn.time,
                value: n,
                location: u,
                style: null !== (o = l?.style) && void 0 !== o ? o : null
              }, err: null
            };
          case "plural":
          case "selectordinal":
          case "select":
            var p = this.clonePosition();
            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(xn.EXPECT_SELECT_ARGUMENT_OPTIONS, ir(p, pn({}, p)));
            this.bumpSpace();
            var m = this.parseIdentifierIfPossible(),
              g = 0;
            if ("select" !== a && "offset" === m.value) {
              if (!this.bumpIf(":")) return this.error(xn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ir(this.clonePosition(), this.clonePosition()));
              var y;
              if (this.bumpSpace(), (y = this.tryParseDecimalInteger(xn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, xn.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
              this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = y.val
            }
            var v, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
            if (b.err) return b;
            if ((v = this.tryParseArgumentClose(r)).err) return v;
            var k = ir(r, this.clonePosition());
            return "select" === a ? {
              val: {
                type: Cn.select,
                value: n,
                options: yr(b.val),
                location: k
              },
              err: null
            } : {
              val: {
                type: Cn.plural,
                value: n,
                options: yr(b.val),
                offset: g,
                pluralType: "plural" === a ? "cardinal" : "ordinal",
                location: k
              },
              err: null
            };
          default:
            return this.error(xn.INVALID_ARGUMENT_TYPE, ir(i, s))
        }
      }, e.prototype.tryParseArgumentClose = function(e) {
        return this.isEOF() || 125 !== this.char() ? this.error(xn.EXPECT_ARGUMENT_CLOSING_BRACE, ir(e, this.clonePosition())) : (this.bump(), {
          val: !0,
          err: null
        })
      }, e.prototype.parseSimpleArgStyleIfPossible = function() {
        for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
          case 39:
            this.bump();
            var n = this.clonePosition();
            if (!this.bumpUntil("'")) return this.error(xn.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ir(n, this.clonePosition()));
            this.bump();
            break;
          case 123:
            e += 1, this.bump();
            break;
          case 125:
            if (0 >= e) return {
              val: this.message.slice(t.offset, this.offset()),
              err: null
            };
            e -= 1;
            break;
          default:
            this.bump()
        }
        return {
          val: this.message.slice(t.offset, this.offset()),
          err: null
        }
      }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
        var n = [];
        try {
          n = function(e) {
            if (0 === e.length) throw Error("Number skeleton cannot be empty");
            for (var t = [], n = 0, r = e.split(Wn).filter(function(e) {
                return e.length > 0
              }); n < r.length; n++) {
              var o = r[n].split("/");
              if (0 === o.length) throw Error("Invalid number skeleton");
              for (var i = o[0], a = o.slice(1), s = 0, l = a; s < l.length; s++)
                if (0 === l[s].length) throw Error("Invalid number skeleton");
              t.push({
                stem: i,
                options: a
              })
            }
            return t
          }(e)
        } catch {
          return this.error(xn.INVALID_NUMBER_SKELETON, t)
        }
        return {
          val: {
            type: Sn.number,
            tokens: n,
            location: t,
            parsedOptions: this.shouldParseSkeletons ? Qn(n) : {}
          },
          err: null
        }
      }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
        for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
          if (0 === l.length) {
            var u = this.clonePosition();
            if ("select" === t || !this.bumpIf("=")) break;
            var f = this.tryParseDecimalInteger(xn.EXPECT_PLURAL_ARGUMENT_SELECTOR, xn.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err) return f;
            c = ir(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
          }
          if (s.has(l)) return this.error("select" === t ? xn.DUPLICATE_SELECT_ARGUMENT_SELECTOR : xn.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
          "other" === l && (i = !0), this.bumpSpace();
          var d = this.clonePosition();
          if (!this.bumpIf("{")) return this.error("select" === t ? xn.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : xn.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ir(this.clonePosition(), this.clonePosition()));
          var h = this.parseMessage(e + 1, t, n);
          if (h.err) return h;
          var p = this.tryParseArgumentClose(d);
          if (p.err) return p;
          a.push([l, {
            value: h.val,
            location: ir(d, this.clonePosition())
          }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
        }
        return 0 === a.length ? this.error("select" === t ? xn.EXPECT_SELECT_ARGUMENT_SELECTOR : xn.EXPECT_PLURAL_ARGUMENT_SELECTOR, ir(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(xn.MISSING_OTHER_CLAUSE, ir(this.clonePosition(), this.clonePosition())) : {
          val: a,
          err: null
        }
      }, e.prototype.tryParseDecimalInteger = function(e, t) {
        var n = 1,
          r = this.clonePosition();
        this.bumpIf("+") || this.bumpIf("-") && (n = -1);
        for (var o = !1, i = 0; !this.isEOF();) {
          var a = this.char();
          if (48 > a || a > 57) break;
          o = !0, i = 10 * i + (a - 48), this.bump()
        }
        var s = ir(r, this.clonePosition());
        return o ? dr(i *= n) ? {
          val: i,
          err: null
        } : this.error(t, s) : this.error(e, s)
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
        var t = vr(this.message, e);
        if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        return t
      }, e.prototype.error = function(e, t) {
        return {
          val: null,
          err: {
            kind: e,
            message: this.message,
            location: t
          }
        }
      }, e.prototype.bump = function() {
        if (!this.isEOF()) {
          var e = this.char();
          10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += 65536 > e ? 1 : 2)
        }
      }, e.prototype.bumpIf = function(e) {
        if (mr(this.message, e, this.offset())) {
          for (var t = 0; t < e.length; t++) this.bump();
          return !0
        }
        return !1
      }, e.prototype.bumpUntil = function(e) {
        var t = this.offset(),
          n = this.message.indexOf(e, t);
        return 0 > n ? (this.bumpTo(this.message.length), !1) : (this.bumpTo(n), !0)
      }, e.prototype.bumpTo = function(e) {
        if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
        for (e = Math.min(e, this.message.length);;) {
          var t = this.offset();
          if (t === e) break;
          if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          if (this.bump(), this.isEOF()) break
        }
      }, e.prototype.bumpSpace = function() {
        for (; !this.isEOF() && Ar(this.char());) this.bump()
      }, e.prototype.peek = function() {
        if (this.isEOF()) return null;
        var e = this.char(),
          t = this.offset();
        return this.message.charCodeAt(t + (65536 > e ? 1 : 2)) ?? null
      }, e
    }();

    function Tr(e) {
      return e >= 97 && 122 >= e || e >= 65 && 90 >= e
    }

    function Fr(e) {
      return 45 === e || 46 === e || e >= 48 && 57 >= e || 95 === e || e >= 97 && 122 >= e || e >= 65 && 90 >= e || 183 == e || e >= 192 && 214 >= e || e >= 216 && 246 >= e || e >= 248 && 893 >= e || e >= 895 && 8191 >= e || e >= 8204 && 8205 >= e || e >= 8255 && 8256 >= e || e >= 8304 && 8591 >= e || e >= 11264 && 12271 >= e || e >= 12289 && 55295 >= e || e >= 63744 && 64975 >= e || e >= 65008 && 65533 >= e || e >= 65536 && 983039 >= e
    }

    function Ar(e) {
      return e >= 9 && 13 >= e || 32 === e || 133 === e || e >= 8206 && 8207 >= e || 8232 === e || 8233 === e
    }

    function Lr(e) {
      return e >= 33 && 35 >= e || 36 === e || e >= 37 && 39 >= e || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && 47 >= e || e >= 58 && 59 >= e || e >= 60 && 62 >= e || e >= 63 && 64 >= e || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && 165 >= e || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && 8213 >= e || e >= 8214 && 8215 >= e || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && 8220 >= e || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && 8231 >= e || e >= 8240 && 8248 >= e || 8249 === e || 8250 === e || e >= 8251 && 8254 >= e || e >= 8257 && 8259 >= e || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && 8273 >= e || 8274 === e || 8275 === e || e >= 8277 && 8286 >= e || e >= 8592 && 8596 >= e || e >= 8597 && 8601 >= e || e >= 8602 && 8603 >= e || e >= 8604 && 8607 >= e || 8608 === e || e >= 8609 && 8610 >= e || 8611 === e || e >= 8612 && 8613 >= e || 8614 === e || e >= 8615 && 8621 >= e || 8622 === e || e >= 8623 && 8653 >= e || e >= 8654 && 8655 >= e || e >= 8656 && 8657 >= e || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && 8691 >= e || e >= 8692 && 8959 >= e || e >= 8960 && 8967 >= e || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && 8991 >= e || e >= 8992 && 8993 >= e || e >= 8994 && 9e3 >= e || 9001 === e || 9002 === e || e >= 9003 && 9083 >= e || 9084 === e || e >= 9085 && 9114 >= e || e >= 9115 && 9139 >= e || e >= 9140 && 9179 >= e || e >= 9180 && 9185 >= e || e >= 9186 && 9254 >= e || e >= 9255 && 9279 >= e || e >= 9280 && 9290 >= e || e >= 9291 && 9311 >= e || e >= 9472 && 9654 >= e || 9655 === e || e >= 9656 && 9664 >= e || 9665 === e || e >= 9666 && 9719 >= e || e >= 9720 && 9727 >= e || e >= 9728 && 9838 >= e || 9839 === e || e >= 9840 && 10087 >= e || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && 10175 >= e || e >= 10176 && 10180 >= e || 10181 === e || 10182 === e || e >= 10183 && 10213 >= e || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && 10239 >= e || e >= 10240 && 10495 >= e || e >= 10496 && 10626 >= e || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && 10711 >= e || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && 10747 >= e || 10748 === e || 10749 === e || e >= 10750 && 11007 >= e || e >= 11008 && 11055 >= e || e >= 11056 && 11076 >= e || e >= 11077 && 11078 >= e || e >= 11079 && 11084 >= e || e >= 11085 && 11123 >= e || e >= 11124 && 11125 >= e || e >= 11126 && 11157 >= e || 11158 === e || e >= 11159 && 11263 >= e || e >= 11776 && 11777 >= e || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && 11784 >= e || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && 11798 >= e || 11799 === e || e >= 11800 && 11801 >= e || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && 11807 >= e || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && 11822 >= e || 11823 === e || e >= 11824 && 11833 >= e || e >= 11834 && 11835 >= e || e >= 11836 && 11839 >= e || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && 11855 >= e || e >= 11856 && 11857 >= e || 11858 === e || e >= 11859 && 11903 >= e || e >= 12289 && 12291 >= e || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && 12307 >= e || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && 12319 >= e || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && 65094 >= e
    }

    function Rr(e) {
      e.forEach(function(e) {
        if (delete e.location, Hn(e) || Bn(e))
          for (var t in e.options) delete e.options[t].location, Rr(e.options[t].value);
        else Mn(e) && Nn(e.style) || (In(e) || On(e)) && _n(e.style) ? delete e.style.location : Dn(e) && Rr(e.children)
      })
    }

    function Er(e, t) {
      void 0 === t && (t = {}), t = pn({
        shouldParseSkeletons: !0,
        requiresOtherClause: !0
      }, t);
      var n = new Sr(e, t).parse();
      if (n.err) {
        var r = SyntaxError(xn[n.err.kind]);
        throw r.location = n.err.location, r.originalMessage = n.err.message, r
      }
      return t?.captureLocation || Rr(n.val), n.val
    }! function(e) {
      e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
    }(Cr || (Cr = {}));
    var Mr, Ir = function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return o.code = n, o.originalMessage = r, o
        }
        return hn(t, e), t.prototype.toString = function() {
          return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
        }, t
      }(Error),
      Or = function(e) {
        function t(t, n, r, o) {
          return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Cr.INVALID_VALUE, o) || this
        }
        return hn(t, e), t
      }(Ir),
      Hr = function(e) {
        function t(t, n, r) {
          return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), Cr.INVALID_VALUE, r) || this
        }
        return hn(t, e), t
      }(Ir),
      Br = function(e) {
        function t(t, n) {
          return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), Cr.MISSING_VALUE, n) || this
        }
        return hn(t, e), t
      }(Ir);

    function jr(e) {
      return "function" == typeof e
    }

    function Dr(e, t, n, r, o, i, a) {
      if (1 === e.length && Rn(e[0])) return [{
        type: Mr.literal,
        value: e[0].value
      }];
      for (var s = [], l = 0, c = e; l < c.length; l++) {
        var u = c[l];
        if (Rn(u)) s.push({
          type: Mr.literal,
          value: u.value
        });
        else if (jn(u)) "number" == typeof i && s.push({
          type: Mr.literal,
          value: n.getNumberFormat(t).format(i)
        });
        else {
          var f = u.value;
          if (!o || !(f in o)) throw new Br(f, a);
          var d = o[f];
          if (En(u))(!d || "string" == typeof d || "number" == typeof d) && (d = "string" == typeof d || "number" == typeof d ? d + "" : ""), s.push({
            type: "string" == typeof d ? Mr.literal : Mr.object,
            value: d
          });
          else if (In(u)) {
            var h = "string" == typeof u.style ? r.date[u.style] : _n(u.style) ? u.style.parsedOptions : void 0;
            s.push({
              type: Mr.literal,
              value: n.getDateTimeFormat(t, h).format(d)
            })
          } else if (On(u)) h = "string" == typeof u.style ? r.time[u.style] : _n(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
            type: Mr.literal,
            value: n.getDateTimeFormat(t, h).format(d)
          });
          else if (Mn(u))(h = "string" == typeof u.style ? r.number[u.style] : Nn(u.style) ? u.style.parsedOptions : void 0) && h.scale && (d *= h.scale || 1), s.push({
            type: Mr.literal,
            value: n.getNumberFormat(t, h).format(d)
          });
          else {
            if (Dn(u)) {
              var p = u.children,
                m = u.value,
                g = o[m];
              if (!jr(g)) throw new Hr(m, "function", a);
              var y = g(Dr(p, t, n, r, o, i).map(function(e) {
                return e.value
              }));
              Array.isArray(y) || (y = [y]), s.push.apply(s, y.map(function(e) {
                return {
                  type: "string" == typeof e ? Mr.literal : Mr.object,
                  value: e
                }
              }))
            }
            if (Hn(u)) {
              if (!(v = u.options[d] || u.options.other)) throw new Or(u.value, d, Object.keys(u.options), a);
              s.push.apply(s, Dr(v.value, t, n, r, o))
            } else if (Bn(u)) {
              var v;
              if (!(v = u.options["=".concat(d)])) {
                if (!Intl.PluralRules) throw new Ir('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Cr.MISSING_INTL_API, a);
                var b = n.getPluralRules(t, {
                  type: u.pluralType
                }).select(d - (u.offset || 0));
                v = u.options[b] || u.options.other
              }
              if (!v) throw new Or(u.value, d, Object.keys(u.options), a);
              s.push.apply(s, Dr(v.value, t, n, r, o, d - (u.offset || 0)))
            }
          }
        }
      }
      return function(e) {
        return 2 > e.length ? e : e.reduce(function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === Mr.literal && t.type === Mr.literal ? n.value += t.value : e.push(t), e
        }, [])
      }(s)
    }

    function Nr(e) {
      return {
        create: function() {
          return {
            get: function(t) {
              return e[t]
            },
            set: function(t, n) {
              e[t] = n
            }
          }
        }
      }
    }! function(e) {
      e[e.literal = 0] = "literal", e[e.object = 1] = "object"
    }(Mr || (Mr = {}));
    var _r, Pr = function() {
      function e(t, n, r, o) {
        void 0 === n && (n = e.defaultLocale);
        var i = this;
        if (this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }, this.format = function(e) {
            var t = i.formatToParts(e);
            if (1 === t.length) return t[0].value;
            var n = t.reduce(function(e, t) {
              return e.length && t.type === Mr.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
            }, []);
            return n.length > 1 ? n : n[0] || ""
          }, this.formatToParts = function(e) {
            return Dr(i.ast, i.locales, i.formatters, i.formats, e, void 0, i.message)
          }, this.resolvedOptions = function() {
            var e;
            return {
              locale: (null === (e = i.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
            }
          }, this.getAst = function() {
            return i.ast
          }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
          if (this.message = t, !e.de) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
          var a = o || {},
            s = (a.formatters, mn(a, ["formatters"]));
          this.ast = e.de(t, pn(pn({}, s), {
            locale: this.resolvedLocale
          }))
        } else this.ast = t;
        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
        this.formats = function(e, t) {
          return t ? Object.keys(e).reduce(function(n, r) {
            return n[r] = function(e, t) {
              return t ? pn(pn(pn({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
                return n[r] = pn(pn({}, e[r]), t[r] || {}), n
              }, {})) : e
            }(e[r], t[r]), n
          }, pn({}, e)) : e
        }(e.formats, r), this.formatters = o && o.formatters || function(e) {
          return void 0 === e && (e = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: yn(function() {
              for (var e, t = [], n = 0; arguments.length > n; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, gn([void 0], t, !1)))
            }, {
              cache: Nr(e.number),
              strategy: Ln.variadic
            }),
            getDateTimeFormat: yn(function() {
              for (var e, t = [], n = 0; arguments.length > n; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, gn([void 0], t, !1)))
            }, {
              cache: Nr(e.dateTime),
              strategy: Ln.variadic
            }),
            getPluralRules: yn(function() {
              for (var e, t = [], n = 0; arguments.length > n; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, gn([void 0], t, !1)))
            }, {
              cache: Nr(e.pluralRules),
              strategy: Ln.variadic
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
          var t = Intl.NumberFormat.supportedLocalesOf(e);
          return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
        }
      }, e.de = Er, e.formats = {
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
    }(_r || (_r = {}));
    var Vr = function(e) {
        function t(n, r, o) {
          var i = this,
            a = o ? o instanceof Error ? o : Error(o + "") : void 0;
          return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
        }
        return hn(t, e), t
      }(Error),
      Ur = function(e) {
        function t(t, n) {
          return e.call(this, _r.UNSUPPORTED_FORMATTER, t, n) || this
        }
        return hn(t, e), t
      }(Vr),
      Wr = function(e) {
        function t(t, n) {
          return e.call(this, _r.INVALID_CONFIG, t, n) || this
        }
        return hn(t, e), t
      }(Vr),
      zr = function(e) {
        function t(t, n) {
          return e.call(this, _r.MISSING_DATA, t, n) || this
        }
        return hn(t, e), t
      }(Vr),
      Zr = function(e) {
        function t(t, n, r) {
          var o = e.call(this, _r.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
          return o.locale = n, o
        }
        return hn(t, e), t
      }(Vr),
      $r = function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, "".concat(t, "\nMessageID: ").concat(r?.id, "\nDefault Message: ").concat(r?.defaultMessage, "\nDescription: ").concat(r?.description, "\n"), n, o) || this;
          return i.descriptor = r, i.locale = n, i
        }
        return hn(t, e), t
      }(Zr),
      Gr = function(e) {
        function t(t, n) {
          var r = e.call(this, _r.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
            var t;
            return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
          }).join(), ")") : "id", " as fallback.")) || this;
          return r.descriptor = t, r
        }
        return hn(t, e), t
      }(Vr);

    function qr(e, t, n) {
      return void 0 === n && (n = {}), t.reduce(function(t, r) {
        return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
      }, {})
    }
    var Yr = {
      formats: {},
      messages: {},
      timeZone: void 0,
      defaultLocale: "en",
      defaultFormats: {},
      fallbackOnEmptyString: !0,
      onError: function(e) {
        console.error(e)
      },
      onWarn: function(e) {
        console.warn(e)
      }
    };

    function Kr(e) {
      return {
        create: function() {
          return {
            get: function(t) {
              return e[t]
            },
            set: function(t, n) {
              e[t] = n
            }
          }
        }
      }
    }

    function Xr(e, t, n, r) {
      var o, i = e && e[t];
      if (i && (o = i[n]), o) return o;
      r(new Ur("No ".concat(t, " format named: ").concat(n)))
    }
    var Jr = o(96540);

    function Qr(e) {
      ! function(e, t, n) {
        if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }(e)
    }
    var eo = pn(pn({}, Yr), {
      textComponent: Jr.Fragment
    });

    function to(e, t) {
      return Object.keys(e).reduce(function(n, r) {
        return n[r] = pn({
          timeZone: t
        }, e[r]), n
      }, {})
    }

    function no(e, t) {
      return Object.keys(pn(pn({}, e), t)).reduce(function(n, r) {
        return n[r] = pn(pn({}, e[r] || {}), t[r] || {}), n
      }, {})
    }

    function ro(e, t) {
      if (!t) return e;
      var n = Pr.formats;
      return pn(pn(pn({}, n), e), {
        date: no(to(n.date, t), to(e.date || {}, t)),
        time: no(to(n.time, t), to(e.time || {}, t))
      })
    }
    var oo = function(e, t, n, r, o) {
        var i = e.locale,
          a = e.formats,
          s = e.messages,
          l = e.defaultLocale,
          c = e.defaultFormats,
          u = e.fallbackOnEmptyString,
          f = e.onError,
          d = e.timeZone,
          h = e.defaultRichTextElements;
        void 0 === n && (n = {
          id: ""
        });
        var p = n.id,
          m = n.defaultMessage;
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
        }(!!p);
        var g = p + "",
          y = s && {}.hasOwnProperty.call(s, g) && s[g];
        if (Array.isArray(y) && 1 === y.length && y[0].type === Cn.literal) return y[0].value;
        if (!r && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (r = pn(pn({}, h), r || {}), a = ro(a, d), c = ro(c, d), !y) {
          if (!1 === u && "" === y) return y;
          if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && f(new Gr(n, i)), m) try {
            return t.getMessageFormat(m, l, c, o).format(r)
          } catch (e) {
            return f(new $r('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : g
          }
          return g
        }
        try {
          return t.getMessageFormat(y, i, a, pn({
            formatters: t
          }, o || {})).format(r)
        } catch (e) {
          f(new $r('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
        }
        if (m) try {
          return t.getMessageFormat(m, l, c, o).format(r)
        } catch (e) {
          f(new $r('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, n, e))
        }
        return "string" == typeof y ? y : "string" == typeof m ? m : g
      },
      io = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

    function ao(e, t, n, r) {
      var o = e.locale,
        i = e.formats,
        a = e.onError,
        s = e.timeZone;
      void 0 === r && (r = {});
      var l = r.format,
        c = pn(pn({}, s && {
          timeZone: s
        }), l && Xr(i, t, l, a)),
        u = qr(r, io, c);
      return "time" === t && !u.hour && !u.minute && !u.second && !u.timeStyle && !u.dateStyle && (u = pn(pn({}, u), {
        hour: "numeric",
        minute: "numeric"
      })), n(o, u)
    }

    function so(e, t) {
      for (var n = [], r = 2; arguments.length > r; r++) n[r - 2] = arguments[r];
      var o = n[0],
        i = n[1],
        a = void 0 === i ? {} : i,
        s = "string" == typeof o ? new Date(o || 0) : o;
      try {
        return ao(e, "date", t, a).format(s)
      } catch (t) {
        e.onError(new Zr("Error formatting date.", e.locale, t))
      }
      return s + ""
    }

    function lo(e, t) {
      for (var n = [], r = 2; arguments.length > r; r++) n[r - 2] = arguments[r];
      var o = n[0],
        i = n[1],
        a = void 0 === i ? {} : i,
        s = "string" == typeof o ? new Date(o || 0) : o;
      try {
        return ao(e, "time", t, a).format(s)
      } catch (t) {
        e.onError(new Zr("Error formatting time.", e.locale, t))
      }
      return s + ""
    }

    function co(e, t) {
      for (var n = [], r = 2; arguments.length > r; r++) n[r - 2] = arguments[r];
      var o = n[0],
        i = n[1],
        a = n[2],
        s = void 0 === a ? {} : a,
        l = "string" == typeof o ? new Date(o || 0) : o,
        c = "string" == typeof i ? new Date(i || 0) : i;
      try {
        return ao(e, "dateTimeRange", t, s).formatRange(l, c)
      } catch (t) {
        e.onError(new Zr("Error formatting date time range.", e.locale, t))
      }
      return l + ""
    }

    function uo(e, t) {
      for (var n = [], r = 2; arguments.length > r; r++) n[r - 2] = arguments[r];
      var o = n[0],
        i = n[1],
        a = void 0 === i ? {} : i,
        s = "string" == typeof o ? new Date(o || 0) : o;
      try {
        return ao(e, "date", t, a).formatToParts(s)
      } catch (t) {
        e.onError(new Zr("Error formatting date.", e.locale, t))
      }
      return []
    }

    function fo(e, t) {
      for (var n = [], r = 2; arguments.length > r; r++) n[r - 2] = arguments[r];
      var o = n[0],
        i = n[1],
        a = void 0 === i ? {} : i,
        s = "string" == typeof o ? new Date(o || 0) : o;
      try {
        return ao(e, "time", t, a).formatToParts(s)
      } catch (t) {
        e.onError(new Zr("Error formatting time.", e.locale, t))
      }
      return []
    }
    var ho = ["style", "type", "fallback", "languageDisplay"];

    function po(e, t, n, r) {
      var o = e.locale,
        i = e.onError;
      Intl.DisplayNames || i(new Ir('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Cr.MISSING_INTL_API));
      var a = qr(r, ho);
      try {
        return t(o, a).of(n)
      } catch (e) {
        i(new Zr("Error formatting display name.", o, e))
      }
    }
    var mo = ["type", "style"],
      go = Date.now();

    function yo(e, t, n, r) {
      void 0 === r && (r = {});
      var o = vo(e, t, n, r).reduce(function(e, t) {
        var n = t.value;
        return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
      }, []);
      return 1 === o.length ? o[0] : 0 === o.length ? "" : o
    }

    function vo(e, t, n, r) {
      var o = e.locale,
        i = e.onError;
      void 0 === r && (r = {}), Intl.ListFormat || i(new Ir('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Cr.MISSING_INTL_API));
      var a = qr(r, mo);
      try {
        var s = {},
          l = n.map(function(e, t) {
            if ("object" == typeof e) {
              var n = function(e) {
                return "".concat(go, "_").concat(e, "_").concat(go)
              }(t);
              return s[n] = e, n
            }
            return e + ""
          });
        return t(o, a).formatToParts(l).map(function(e) {
          return "literal" === e.type ? e : pn(pn({}, e), {
            value: s[e.value] || e.value
          })
        })
      } catch (e) {
        i(new Zr("Error formatting list.", o, e))
      }
      return n
    }
    var bo = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

    function ko(e, t, n) {
      var r = e.locale,
        o = e.formats,
        i = e.onError;
      void 0 === n && (n = {});
      var a = n.format,
        s = a && Xr(o, "number", a, i) || {};
      return t(r, qr(n, bo, s))
    }

    function wo(e, t, n, r) {
      void 0 === r && (r = {});
      try {
        return ko(e, t, r).format(n)
      } catch (t) {
        e.onError(new Zr("Error formatting number.", e.locale, t))
      }
      return n + ""
    }

    function xo(e, t, n, r) {
      void 0 === r && (r = {});
      try {
        return ko(e, t, r).formatToParts(n)
      } catch (t) {
        e.onError(new Zr("Error formatting number.", e.locale, t))
      }
      return []
    }
    var Co = ["type"];

    function So(e, t, n, r) {
      var o = e.locale,
        i = e.onError;
      void 0 === r && (r = {}), Intl.PluralRules || i(new Ir('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Cr.MISSING_INTL_API));
      var a = qr(r, Co);
      try {
        return t(o, a).select(n)
      } catch (e) {
        i(new Zr("Error formatting plural.", o, e))
      }
      return "other"
    }
    var To = ["numeric", "style"];

    function Fo(e, t, n, r, o) {
      void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Ir('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Cr.MISSING_INTL_API));
      try {
        return function(e, t, n) {
          var r = e.locale,
            o = e.formats,
            i = e.onError;
          void 0 === n && (n = {});
          var a = n.format,
            s = !!a && Xr(o, "relative", a, i) || {};
          return t(r, qr(n, To, s))
        }(e, t, o).format(n, r)
      } catch (t) {
        e.onError(new Zr("Error formatting relative time.", e.locale, t))
      }
      return n + ""
    }

    function Ao(e) {
      return e && Object.keys(e).reduce(function(t, n) {
        var r = e[n];
        return t[n] = jr(r) ? function(e) {
          return function(t) {
            return e(Jr.Children.toArray(t))
          }
        }(r) : r, t
      }, {})
    }
    var Lo = function(e, t, n, r) {
        for (var o = [], i = 4; arguments.length > i; i++) o[i - 4] = arguments[i];
        var a = Ao(r),
          s = oo.apply(void 0, gn([e, t, n, a], o, !1));
        return Array.isArray(s) ? Jr.Children.toArray(s) : s
      },
      Ro = function(e, t) {
        var n = e.defaultRichTextElements,
          r = mn(e, ["defaultRichTextElements"]),
          o = Ao(n),
          i = function(e, t) {
            var n = function(e) {
                void 0 === e && (e = {
                  dateTime: {},
                  number: {},
                  message: {},
                  relativeTime: {},
                  pluralRules: {},
                  list: {},
                  displayNames: {}
                });
                var t = Intl.RelativeTimeFormat,
                  n = Intl.ListFormat,
                  r = Intl.DisplayNames,
                  o = yn(function() {
                    for (var e, t = [], n = 0; arguments.length > n; n++) t[n] = arguments[n];
                    return new((e = Intl.DateTimeFormat).bind.apply(e, gn([void 0], t, !1)))
                  }, {
                    cache: Kr(e.dateTime),
                    strategy: Ln.variadic
                  }),
                  i = yn(function() {
                    for (var e, t = [], n = 0; arguments.length > n; n++) t[n] = arguments[n];
                    return new((e = Intl.NumberFormat).bind.apply(e, gn([void 0], t, !1)))
                  }, {
                    cache: Kr(e.number),
                    strategy: Ln.variadic
                  }),
                  a = yn(function() {
                    for (var e, t = [], n = 0; arguments.length > n; n++) t[n] = arguments[n];
                    return new((e = Intl.PluralRules).bind.apply(e, gn([void 0], t, !1)))
                  }, {
                    cache: Kr(e.pluralRules),
                    strategy: Ln.variadic
                  });
                return {
                  getDateTimeFormat: o,
                  getNumberFormat: i,
                  getMessageFormat: yn(function(e, t, n, r) {
                    return new Pr(e, t, n, pn({
                      formatters: {
                        getNumberFormat: i,
                        getDateTimeFormat: o,
                        getPluralRules: a
                      }
                    }, r || {}))
                  }, {
                    cache: Kr(e.message),
                    strategy: Ln.variadic
                  }),
                  getRelativeTimeFormat: yn(function() {
                    for (var e = [], n = 0; arguments.length > n; n++) e[n] = arguments[n];
                    return new(t.bind.apply(t, gn([void 0], e, !1)))
                  }, {
                    cache: Kr(e.relativeTime),
                    strategy: Ln.variadic
                  }),
                  getPluralRules: a,
                  getListFormat: yn(function() {
                    for (var e = [], t = 0; arguments.length > t; t++) e[t] = arguments[t];
                    return new(n.bind.apply(n, gn([void 0], e, !1)))
                  }, {
                    cache: Kr(e.list),
                    strategy: Ln.variadic
                  }),
                  getDisplayNames: yn(function() {
                    for (var e = [], t = 0; arguments.length > t; t++) e[t] = arguments[t];
                    return new(r.bind.apply(r, gn([void 0], e, !1)))
                  }, {
                    cache: Kr(e.displayNames),
                    strategy: Ln.variadic
                  })
                }
              }(t),
              r = pn(pn({}, Yr), e),
              o = r.locale,
              i = r.defaultLocale,
              a = r.onError;
            return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new zr('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new zr('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Wr('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
              function(e) {
                e.onWarn && e.defaultRichTextElements && function(e) {
                  return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
                }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
              }(r), pn(pn({}, r), {
                formatters: n,
                formatNumber: wo.bind(null, r, n.getNumberFormat),
                formatNumberToParts: xo.bind(null, r, n.getNumberFormat),
                formatRelativeTime: Fo.bind(null, r, n.getRelativeTimeFormat),
                formatDate: so.bind(null, r, n.getDateTimeFormat),
                formatDateToParts: uo.bind(null, r, n.getDateTimeFormat),
                formatTime: lo.bind(null, r, n.getDateTimeFormat),
                formatDateTimeRange: co.bind(null, r, n.getDateTimeFormat),
                formatTimeToParts: fo.bind(null, r, n.getDateTimeFormat),
                formatPlural: So.bind(null, r, n.getPluralRules),
                formatMessage: oo.bind(null, r, n),
                $t: oo.bind(null, r, n),
                formatList: yo.bind(null, r, n.getListFormat),
                formatListToParts: vo.bind(null, r, n.getListFormat),
                formatDisplayName: po.bind(null, r, n.getDisplayNames)
              })
          }(pn(pn(pn({}, eo), r), {
            defaultRichTextElements: o
          }), t),
          a = {
            locale: i.locale,
            timeZone: i.timeZone,
            fallbackOnEmptyString: i.fallbackOnEmptyString,
            formats: i.formats,
            defaultLocale: i.defaultLocale,
            defaultFormats: i.defaultFormats,
            messages: i.messages,
            onError: i.onError,
            defaultRichTextElements: o
          };
        return pn(pn({}, i), {
          formatMessage: Lo.bind(null, a, i.formatters),
          $t: Lo.bind(null, a, i.formatters)
        })
      };
    o(4146);
    var Eo = "u" > typeof window && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = Jr.createContext(null)) : Jr.createContext(null),
      Mo = (Eo.Consumer, Eo.Provider),
      Io = Eo;

    function Oo(e) {
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
    var Ho = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.cache = {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        }, t.state = {
          cache: t.cache,
          intl: Ro(Oo(t.props), t.cache),
          prevConfig: Oo(t.props)
        }, t
      }
      return hn(t, e), t.getDerivedStateFromProps = function(e, t) {
        var n = t.prevConfig,
          r = t.cache,
          o = Oo(e);
        return function(e, t) {
          if (e === t) return !0;
          if (!e || !t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t),
            o = n.length;
          if (r.length !== o) return !1;
          for (var i = 0; o > i; i++) {
            var a = n[i];
            if (e[a] !== t[a] || !{}.hasOwnProperty.call(t, a)) return !1
          }
          return !0
        }(n, o) ? null : {
          intl: Ro(o, r),
          prevConfig: o
        }
      }, t.prototype.render = function() {
        return Qr(this.state.intl), Jr.createElement(Mo, {
          value: this.state.intl
        }, this.props.children)
      }, t.displayName = "IntlProvider", t.defaultProps = eo, t
    }(Jr.PureComponent);
    const Bo = Ho,
      jo = ({
        width: e,
        height: t,
        colorClass: n
      }) => (0, un.jsx)("svg", {
        className: n,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, un.jsx)("path", {
          d: "M9.23047 2.7998C10.1056 2.7998 10.8154 3.50961 10.8154 4.38477C10.8153 5.25985 10.1056 5.96875 9.23047 5.96875H5.96875V18.0312H18.0312V14.7695C18.0312 13.8944 18.7401 13.1847 19.6152 13.1846C20.4904 13.1846 21.2002 13.8944 21.2002 14.7695V18.2305C21.2002 19.8704 19.8704 21.2002 18.2305 21.2002H5.76953C4.12967 21.2002 2.7998 19.8704 2.7998 18.2305V5.76953C2.7998 4.12967 4.12967 2.7998 5.76953 2.7998H9.23047ZM18.2373 14.6279C18.2326 14.6745 18.2305 14.7217 18.2305 14.7695L18.2383 14.6279C18.243 14.5813 18.2496 14.5354 18.2588 14.4902L18.2373 14.6279ZM18.3389 14.2305C18.3214 14.2717 18.3064 14.3142 18.293 14.3574L18.3398 14.2305C18.3573 14.1891 18.3762 14.1485 18.3975 14.1094L18.3389 14.2305ZM18.6357 13.79C18.6045 13.8213 18.5751 13.8545 18.5469 13.8887L18.6367 13.79C18.6679 13.7589 18.7004 13.7292 18.7344 13.7012L18.6357 13.79ZM19.6152 2.7998C20.4904 2.7998 21.2002 3.50961 21.2002 4.38477V9.92285C21.2002 10.798 20.4904 11.5078 19.6152 11.5078C18.7401 11.5077 18.0312 10.798 18.0312 9.92285V8.20898L13.1201 13.1201C12.54 13.7002 11.6224 13.737 11 13.2295L10.8799 13.1201C10.2611 12.5013 10.2611 11.4987 10.8799 10.8799L15.79 5.96875H14.0771C13.202 5.96875 12.4923 5.25985 12.4922 4.38477C12.4922 3.50961 13.202 2.7998 14.0771 2.7998H19.6152ZM19.2031 13.4473C19.1599 13.4607 19.1174 13.4757 19.0762 13.4932L19.2041 13.4473C19.2472 13.4339 19.2911 13.4223 19.3359 13.4131L19.2031 13.4473ZM12 13.3848C12.0614 13.3848 12.1226 13.3792 12.1836 13.3711C12.1226 13.3792 12.0614 13.3848 12 13.3848ZM11.7812 13.3662C11.7975 13.3688 11.8138 13.3711 11.8301 13.373C11.8138 13.371 11.7975 13.3688 11.7812 13.3662ZM12.207 13.3682C12.2653 13.3594 12.3229 13.3463 12.3799 13.3301C12.3229 13.3464 12.2653 13.3594 12.207 13.3682ZM11.5752 13.3164C11.5937 13.3223 11.6122 13.3279 11.6309 13.333C11.6122 13.3279 11.5937 13.3224 11.5752 13.3164ZM12.4102 13.3203C12.4632 13.3039 12.5162 13.2866 12.5674 13.2637L12.583 13.2559C12.5268 13.282 12.4687 13.3021 12.4102 13.3203ZM11.2373 13.1572C11.2983 13.1975 11.3624 13.2312 11.4277 13.2607C11.3584 13.2293 11.291 13.192 11.2266 13.1484L11.2373 13.1572ZM12.7617 13.1562C12.7329 13.1753 12.7037 13.1933 12.6738 13.21L12.7764 13.1475C12.8098 13.1248 12.8422 13.1001 12.874 13.0742L12.7617 13.1562ZM10.7734 12.6445C10.8157 12.7249 10.8667 12.8016 10.9258 12.874L10.8438 12.7617C10.8183 12.7232 10.7946 12.6839 10.7734 12.6436V12.6445ZM10.6475 12.2871C10.6543 12.3195 10.6607 12.3519 10.6699 12.3838C10.6608 12.3519 10.6543 12.3195 10.6475 12.2871ZM10.6221 12.1191C10.6248 12.1508 10.6279 12.1824 10.6328 12.2139C10.6279 12.1824 10.6248 12.1508 10.6221 12.1191ZM10.6182 11.9336C10.6162 11.9746 10.6155 12.0156 10.6172 12.0566C10.6155 12.0156 10.6162 11.9746 10.6182 11.9336ZM10.6357 11.7666C10.6287 11.8081 10.6233 11.8497 10.6201 11.8916C10.6234 11.8497 10.6287 11.8081 10.6357 11.7666ZM10.6836 11.5703C10.6668 11.6221 10.6521 11.6744 10.6416 11.7275C10.6522 11.6745 10.6668 11.6221 10.6836 11.5703ZM10.8184 11.2793C10.7933 11.3203 10.7694 11.3615 10.749 11.4043C10.7694 11.3615 10.7933 11.3202 10.8184 11.2793ZM19.2031 11.2451C19.2465 11.2586 19.2908 11.2701 19.3359 11.2793L19.2041 11.2451C19.1606 11.2316 19.1177 11.2168 19.0762 11.1992L19.2031 11.2451ZM10.8428 11.2373C10.8378 11.2449 10.8339 11.2531 10.8291 11.2607C10.8584 11.2144 10.8904 11.1693 10.9258 11.126L10.8428 11.2373ZM18.6357 10.9023C18.667 10.9336 18.7002 10.963 18.7344 10.9912L18.6367 10.9023C18.6053 10.8709 18.5752 10.838 18.5469 10.8037L18.6357 10.9023ZM18.3389 10.4619C18.3564 10.5034 18.3761 10.5437 18.3975 10.583L18.3398 10.4619C18.3223 10.4205 18.3064 10.3783 18.293 10.335L18.3389 10.4619ZM18.2305 9.92285C18.2305 10.0185 18.2403 10.1119 18.2588 10.2021L18.2383 10.0645C18.2336 10.018 18.2305 9.97059 18.2305 9.92285ZM9.37207 5.76172C9.3256 5.76643 9.27818 5.76953 9.23047 5.76953C9.32615 5.76953 9.41954 5.7597 9.50977 5.74121L9.37207 5.76172ZM9.76953 5.66016C9.72815 5.67765 9.68589 5.69356 9.64258 5.70703L9.76953 5.66113C9.81099 5.6436 9.85135 5.62388 9.89062 5.60254L9.76953 5.66016ZM13.5381 5.66113C13.5794 5.67859 13.6218 5.69358 13.665 5.70703L13.5381 5.66016C13.4967 5.64267 13.4562 5.62381 13.417 5.60254L13.5381 5.66113ZM10.21 5.36328C10.1785 5.39474 10.1457 5.42479 10.1113 5.45312L10.21 5.36426C10.2412 5.33297 10.2706 5.29978 10.2988 5.26562L10.21 5.36328ZM13.0977 5.36426C13.1289 5.39555 13.1621 5.42493 13.1963 5.45312L13.0977 5.36328C13.0665 5.33214 13.0368 5.2996 13.0088 5.26562L13.0977 5.36426ZM10.7266 11.457C10.7107 11.4944 10.696 11.532 10.6836 11.5703C10.696 11.532 10.7107 11.4943 10.7266 11.457Z",
          fill: "currentColor"
        })
      }),
      Do = ({
        width: e,
        height: t,
        colorClass: n
      }) => (0, un.jsx)("svg", {
        className: n,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, un.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.33477 14.504C4.00791 14.8309 3.91014 15.3225 4.08703 15.7495C4.26392 16.1766 4.68065 16.455 5.14289 16.455H18.8571C19.3194 16.455 19.7361 16.1766 19.913 15.7495C20.0899 15.3225 19.9921 14.8309 19.6652 14.504L13.2122 8.05088C12.5427 7.38157 11.4573 7.38157 10.7878 8.05088L4.33477 14.504Z",
          fill: "currentColor"
        })
      }),
      No = ({
        width: e,
        height: t,
        colorClass: n
      }) => (0, un.jsx)("svg", {
        className: n,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, un.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.33477 9.49596C4.00791 9.1691 3.91014 8.67754 4.08703 8.25049C4.26392 7.82343 4.68065 7.54498 5.14289 7.54498H18.8571C19.3194 7.54498 19.7361 7.82343 19.913 8.25049C20.0899 8.67754 19.9921 9.1691 19.6652 9.49596L13.2122 15.9491C12.5427 16.6184 11.4573 16.6184 10.7878 15.9491L4.33477 9.49596Z",
          fill: "currentColor"
        })
      }),
      _o = ({
        width: e,
        height: t,
        colorClass: n
      }) => (0, un.jsx)("svg", {
        className: n,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, un.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.89784 4.3613C8.53455 3.84231 9.47374 3.87891 10.0672 4.47213L16.0703 10.4752L16.2183 10.6387C16.862 11.4278 16.8618 12.5676 16.2183 13.3568L16.0703 13.5203L10.0672 19.5234C9.47365 20.1167 8.53456 20.1534 7.89784 19.6342L7.77429 19.5234C7.14124 18.8903 7.1414 17.8636 7.77429 17.2304L13.007 11.9977L7.77429 6.76507C7.14142 6.13189 7.14125 5.10521 7.77429 4.47213L7.89784 4.3613ZM9.12334 19.4207C9.08994 19.4272 9.05628 19.432 9.0225 19.4352L9.12334 19.4207C9.15666 19.4142 9.19058 19.4058 9.22327 19.3962L9.12334 19.4207ZM9.59119 4.79463C9.61901 4.81732 9.64611 4.84139 9.67205 4.86731C9.62011 4.81537 9.5648 4.76999 9.5058 4.73104L9.59119 4.79463ZM9.12334 4.5757C9.15697 4.5822 9.19028 4.59046 9.22327 4.60023L9.12334 4.5757C9.08965 4.56916 9.05658 4.56442 9.0225 4.56116L9.12334 4.5757Z",
          fill: "currentColor"
        })
      });

    function Po() {
      var e = Jr.useContext(Io);
      return Qr(e), e
    }
    const Vo = ({
        width: e,
        height: t,
        colorClass: n
      }) => (0, un.jsxs)("svg", {
        className: n,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, un.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.8292 10.3301C20.7517 10.3301 21.5 11.0776 21.5 12C21.5 17.2465 17.2465 21.5 12 21.5C10.2842 21.5 8.67368 21.043 7.2839 20.2467L6.42577 21.1057C6.06548 21.466 5.53524 21.5895 5.05653 21.4322L4.96108 21.3974C4.4589 21.1894 4.13153 20.6992 4.1315 20.1557V16.2407C4.13166 15.4985 4.73358 14.8973 5.47577 14.8973H9.38995C9.93358 14.8973 10.4236 15.2246 10.6316 15.7269L10.6673 15.8214C10.8142 16.2681 10.7161 16.76 10.4095 17.1166L10.3408 17.1915L9.78423 17.7464C10.4716 18.0116 11.2179 18.1594 12 18.1594C15.4016 18.1594 18.1594 15.4016 18.1594 12C18.1594 11.0776 18.9068 10.3302 19.8292 10.3301ZM9.47737 20.7819C9.57769 20.8107 9.67896 20.8368 9.78066 20.8622L9.47826 20.781C9.37796 20.7523 9.27829 20.7221 9.17944 20.69L9.47737 20.7819ZM8.3115 20.3591C8.49967 20.4422 8.69137 20.5187 8.88596 20.5892L8.59695 20.4786C8.40551 20.4017 8.21706 20.319 8.0323 20.2298L8.3115 20.3591ZM7.22592 19.7891C7.39959 19.8958 7.57732 19.9964 7.75845 20.0915L7.48995 19.9443L7.22592 19.7891ZM10.5121 18.3547C10.6316 18.3826 10.7524 18.4067 10.8743 18.4279L10.5121 18.3547C10.3924 18.3269 10.275 18.2954 10.158 18.2611L10.5121 18.3547ZM16.1497 17.0346C16.0692 17.101 15.9871 17.1656 15.9035 17.2281L16.1497 17.0346C16.2302 16.9681 16.3098 16.8996 16.3869 16.8294L16.1497 17.0346ZM17.0131 16.1746L17.0346 16.1506C17.0475 16.1349 17.0592 16.1182 17.072 16.1024C17.0525 16.1266 17.033 16.1508 17.0131 16.1746ZM5.18498 15.3058C5.17318 15.3095 5.16178 15.3142 5.15019 15.3183C5.19186 15.3035 5.23455 15.2907 5.27864 15.2817L5.18498 15.3058ZM18.3191 13.6306L18.3922 13.3148C18.3972 13.2906 18.4009 13.2661 18.4056 13.2417C18.3804 13.3727 18.352 13.5025 18.3191 13.6306ZM18.9988 10.9929C18.9903 10.9999 18.9829 11.008 18.9747 11.0152C19.0145 10.9806 19.0557 10.9476 19.0996 10.918L18.9988 10.9929ZM19.8292 10.695C19.7391 10.695 19.6511 10.7043 19.5661 10.7217L19.6963 10.7021C19.74 10.6977 19.7844 10.695 19.8292 10.695Z",
          fill: "currentColor"
        }), (0, un.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 2.5C13.7154 2.5 15.3256 2.95649 16.7152 3.75239L17.5742 2.89427L17.6483 2.82559C18.0304 2.49678 18.568 2.40748 19.0389 2.60258L19.1308 2.64451C19.5808 2.87169 19.8684 3.33462 19.8685 3.84427V7.75934C19.8684 8.50154 19.2664 9.10272 18.5242 9.10272H14.61C14.1005 9.10272 13.6376 8.81556 13.4103 8.36592L13.3684 8.27315C13.1604 7.77095 13.2748 7.1928 13.6592 6.80845L14.2149 6.25272C13.5278 5.9878 12.7817 5.84061 12 5.84061C8.59843 5.84062 5.84063 8.59844 5.84061 12C5.84061 12.9224 5.09315 13.6707 4.17075 13.6708C3.24828 13.6708 2.5 12.9225 2.5 12C2.50002 6.75351 6.7535 2.50001 12 2.5ZM4.30366 13.2979C4.25995 13.3023 4.21563 13.305 4.17075 13.305C4.2609 13.305 4.34889 13.2957 4.4339 13.2783L4.30366 13.2979ZM5.00033 13.0071C4.96824 13.0336 4.93498 13.0587 4.90042 13.082L5.00033 13.0071C5.03249 12.9805 5.06363 12.9518 5.0931 12.9223L5.00033 13.0071ZM5.60779 10.6852C5.60397 10.7038 5.60075 10.7226 5.59709 10.7414C5.62156 10.6161 5.64939 10.492 5.68094 10.3694L5.60779 10.6852ZM6.96545 7.84944C6.89887 7.9301 6.83458 8.01268 6.77188 8.09653L6.96545 7.84944C7.03202 7.76875 7.1003 7.69041 7.17061 7.61305L6.96545 7.84944ZM7.84944 6.96545C7.76894 7.03189 7.69024 7.10045 7.61305 7.17061L7.84944 6.96545C7.92992 6.89903 8.01287 6.83444 8.09653 6.77188L7.84944 6.96545ZM10.6852 5.60779C10.5789 5.62953 10.4737 5.65411 10.3694 5.68094L10.6852 5.60779C10.7913 5.58607 10.8983 5.5672 11.0063 5.5507L10.6852 5.60779ZM7.26338 4.1877C7.15811 4.25166 7.05538 4.31947 6.95296 4.38751C7.17751 4.23834 7.40815 4.0975 7.64606 3.96826L7.26338 4.1877ZM16.51 4.05568L16.7741 4.21089C16.6004 4.10425 16.4227 4.00361 16.2415 3.9085L16.51 4.05568ZM15.4031 3.52136C15.5945 3.59828 15.7829 3.681 15.9677 3.77023L15.6885 3.64089C15.5003 3.55777 15.3086 3.4813 15.114 3.41075L15.4031 3.52136ZM14.5217 3.21897C14.622 3.24773 14.7217 3.27788 14.8206 3.30995L14.5226 3.21808C14.4223 3.18932 14.321 3.16318 14.2193 3.13779L14.5217 3.21897Z",
          fill: "currentColor"
        })]
      }),
      Uo = ({
        width: e,
        height: t
      }) => (0, un.jsxs)("svg", {
        fill: "none",
        width: e ?? 96,
        height: t ?? 96,
        viewBox: "0 0 96 96",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, un.jsxs)("g", {
          clipPath: "url(#clip0_25_36815)",
          children: [(0, un.jsx)("path", {
            d: "M7.96582 59.941V23.0565C7.96582 22.0109 8.62351 21.0783 9.60846 20.7273L43.3409 8.70626C44.951 8.1325 46.6437 9.32625 46.6437 11.0355V47.8302C46.6437 48.8737 45.9886 49.8048 45.0065 50.1574L11.274 62.2683C9.66304 62.8467 7.96582 61.6527 7.96582 59.941Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, un.jsx)("path", {
            d: "M7.90752 60.6488C8.71075 61.2145 10.0878 61.2464 10.0878 61.2464C8.69709 61.1351 7.69261 59.7198 7.686 57.5581L5.50295 56.7348C5.51018 58.8942 7.1043 60.0832 7.90752 60.6488Z",
            fill: "url(#paint0_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M7.69912 24.7121L5.52396 23.8345L5.52405 56.7494L7.6988 57.5757L7.69912 24.7121Z",
            fill: "url(#paint1_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M10.3448 19.9372L8.10352 19.129C6.5982 19.4323 5.52346 21.5357 5.5306 23.8321L7.70048 24.704C7.69335 22.4076 8.88966 20.5215 10.3448 19.9372Z",
            fill: "url(#paint2_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M5.56673 30.3743L7.70278 28.504L7.741 38.3789L5.60495 40.2492L5.56673 30.3743Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M5.55144 41.6915L7.66362 39.9392L7.66981 42.4359L5.55968 44.1887L5.55144 41.6915Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M10.6875 47.3547L11.4947 47.0193L11.5009 49.516L10.6958 49.8519L10.6875 47.3547Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M10.6887 46.2746L11.4958 45.9392L11.502 46.6677L10.6968 47.0036L10.6887 46.2746Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M13.5259 25.424C12.2541 25.8889 11.2083 27.4012 11.2011 28.7793L11.0767 54.4911C11.0719 55.8701 12.1059 56.6162 13.3803 56.1523L38.66 46.8785C39.9319 46.4136 40.9792 44.9049 40.9839 43.5258L41.1079 17.7991C41.1126 16.42 40.0787 15.6739 38.8069 16.1389L13.5259 25.424Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("mask", {
            id: "mask0_25_36815",
            style: {
              maskType: "alpha"
            },
            maskUnits: "userSpaceOnUse",
            x: "17",
            y: "24",
            width: "19",
            height: "27",
            children: (0, un.jsx)("path", {
              d: "M18.7309 30.3774C17.9978 30.6454 17.3949 31.5172 17.3907 32.3117L17.3189 48.8433C17.3162 49.6383 17.9123 50.0684 18.6469 49.8009L33.7438 44.2772C34.477 44.0092 35.0807 43.1395 35.0835 42.3445L35.155 25.8042C35.1578 25.0092 34.5617 24.5791 33.8285 24.8471L18.7309 30.3774Z",
              fill: "#1B1B1C",
              stroke: "#0500FF",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          }), (0, un.jsxs)("g", {
            mask: "url(#mask0_25_36815)",
            children: [(0, un.jsx)("path", {
              d: "M36.1719 42.9336L17.3439 35.8448",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M36.1201 37.3867L17.3295 30.4783",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M36.1113 31.5156L19.7397 25.4701",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M36.1016 26.002L19.73 19.9565",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M34.1045 45.9648L13.8838 38.1375",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M29.8418 47.9219L9.62113 40.0946",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M25.6045 49.9356L5.38382 42.1082",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M21.0527 51.8359L0.832065 44.0086",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M30.8759 21.2617L30.876 41.3779L3.69678 50.9976",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, un.jsx)("path", {
              d: "M25.2349 18.5664L25.2349 39.3196L-1.94434 48.9393",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, un.jsx)("path", {
              d: "M20.0953 16.627L20.0952 37.3801L-7.08398 46.9999",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            })]
          }), (0, un.jsx)("path", {
            d: "M27.3877 38.3038C27.3877 38.6047 27.5761 39.1658 28.0784 38.9706L31.0445 37.8866C31.2388 37.8142 31.3979 37.5827 31.3979 37.3713L31.3537 33.598C31.3537 33.2281 31.0113 33.1562 30.8171 33.228L27.7411 34.3561C27.5468 34.4286 27.3877 34.6601 27.3877 34.8715V38.3038Z",
            fill: "#1B1B1C",
            stroke: "#CC2121",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M21.0757 40.7373C21.0757 41.0383 21.2641 41.5994 21.7664 41.4042L24.7325 40.3202C24.9268 40.2477 25.0859 40.0163 25.0859 39.8049L25.0417 36.0316C25.0417 35.6616 24.6993 35.5898 24.505 35.6616L21.429 36.7897C21.2348 36.8622 21.0757 37.0936 21.0757 37.3051V40.7373Z",
            fill: "#1B1B1C",
            stroke: "#CC2121",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M33.9769 24.8014C34.0748 24.9667 34.1305 25.1743 34.1292 25.4186L34.0577 41.9589C34.0549 42.7539 33.4512 43.6236 32.718 43.8916L17.6217 49.4139C17.5713 49.4325 17.5205 49.4476 17.4708 49.4597C17.694 49.8349 18.136 49.9861 18.645 49.7996L33.7413 44.2774C34.4745 44.0093 35.0782 43.1396 35.081 42.3446L35.1525 25.8043C35.1555 25.0642 34.6389 24.6418 33.9764 24.8029L33.9769 24.8014Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M35.083 42.345L35.1546 25.8047C35.1575 25.0646 34.6409 24.6422 33.9784 24.8033C34.0763 24.9686 34.1319 25.1762 34.1307 25.4205L34.0591 41.9608L35.0824 42.3465L35.083 42.345Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M20.3336 19.4122C19.8119 19.6018 19.3821 20.2209 19.3781 20.7859L19.3053 26.1596C19.3024 26.7249 19.7257 27.0316 20.2484 26.8424L30.9915 22.9349C31.5132 22.7453 31.9437 22.1276 31.9466 21.5623L32.0192 16.4392C32.0222 15.8738 31.5989 15.5672 31.0772 15.7568L20.3336 19.4122Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M31.1826 15.6992C31.252 15.8169 31.2913 15.9646 31.2901 16.1383L31.2901 21.2944C31.2871 21.8597 30.7841 22.4683 30.2624 22.6579L19.5197 26.5644C19.4839 26.5776 19.4477 26.5882 19.4124 26.5968C19.5706 26.8639 20.0774 27.0543 20.4396 26.9224L31.1822 23.0159C31.7039 22.8264 32.1883 22.2369 32.1913 21.6716L32.1913 16.4839C32.1943 15.9576 31.6536 15.5866 31.1822 15.7003L31.1826 15.6992Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M32.1234 21.5784L32.1959 16.4703C32.199 15.944 31.6419 15.6315 31.1705 15.7452C31.2399 15.8628 31.2925 15.966 31.2925 16.2499L31.2925 21.3093L32.123 21.5794L32.1234 21.5784Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 23.8828)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 22.3262)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 21.5469)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 20.7695)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 19.9902)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 23.3789)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 21.8203)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 21.043)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 20.2617)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1738 19.4844)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 22.9141)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 21.3574)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 20.5781)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 19.8008)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6675 19.0215)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 22.4102)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 20.8535)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 20.0742)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 19.2969)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1592 18.5176)",
            fill: "#CC2121"
          }), (0, un.jsx)("path", {
            d: "M51.9169 45.2174C51.538 45.076 50.9175 45.076 50.5372 45.2174L48.5247 46.0289C48.1457 46.1703 47.8354 46.6216 47.8354 47.0341V48.9972C47.8354 49.4084 48.1457 49.861 48.5247 50.0024L54.9679 52.3941C55.3468 52.5355 55.9674 52.5355 56.3476 52.3941L60.4438 53.0886C60.8227 52.9472 61.133 52.4958 61.133 52.0834L59.0494 48.6143C59.0494 48.2031 58.7391 47.7505 58.3602 47.6091L51.9169 45.2174Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M60.1879 53.4027C60.1879 54.052 59.6979 54.4023 59.0995 54.1811L48.9239 50.4039C48.3255 50.1806 47.8354 49.4678 47.8354 48.8164L47.8354 47.3721C47.8354 46.7227 48.3255 46.3725 48.9239 46.5937L59.0995 50.3709C59.6979 50.5942 60.1879 51.307 60.1879 51.9584V53.4027Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, un.jsx)("path", {
            d: "M48.9615 46.6073C48.3631 46.384 48.3631 46.0214 48.9615 45.7982L50.3123 45.2788C50.9108 45.0555 51.8908 45.0555 52.4912 45.2788L62.6668 49.056C63.2652 49.2792 63.2652 49.6418 62.6668 49.8651L61.316 50.3845C60.7176 50.6077 59.7375 50.6077 59.1371 50.3845L48.9615 46.6073Z",
            fill: "#FFAEFE",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M46.9238 47.065C46.5448 46.9236 45.9243 46.9236 45.5441 47.065L43.5315 47.8765C43.1526 48.0179 42.8423 48.4693 42.8423 48.8817V50.8448C42.8423 51.256 43.1526 51.7087 43.5315 51.8501L49.9747 54.2418C50.3537 54.3832 50.9742 54.3832 51.3544 54.2418L55.4506 54.9362C55.8295 54.7949 56.1398 54.3435 56.1398 53.931L54.0562 50.462C54.0562 50.0508 53.746 49.5981 53.367 49.4568L46.9238 47.065Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M55.1947 55.2503C55.1947 55.8997 54.7047 56.2499 54.1063 56.0287L43.9307 52.2515C43.3323 52.0282 42.8423 51.3154 42.8423 50.664L42.8423 49.2197C42.8423 48.5704 43.3323 48.2201 43.9307 48.4414L54.1063 52.2185C54.7047 52.4418 55.1947 53.1546 55.1947 53.806V55.2503Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, un.jsx)("path", {
            d: "M47.8906 54.0742L48.6904 50.6367L49.4822 50.9311V54.6748L47.8906 54.0742Z",
            fill: "#1B1B1C"
          }), (0, un.jsx)("path", {
            d: "M43.9703 48.4549C43.3719 48.2317 43.3719 47.8691 43.9703 47.6458L45.3211 47.1264C45.9195 46.9032 46.8995 46.9032 47.5 47.1264L57.6756 50.9036C58.274 51.1269 58.274 51.4895 57.6756 51.7127L56.3248 52.2321C55.7263 52.4554 54.7463 52.4554 54.1459 52.2321L43.9703 48.4549Z",
            fill: "url(#paint3_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M60.6578 40.7417C60.0593 40.5184 59.0793 40.5184 58.4789 40.7417L48.3033 44.5189C47.7048 44.7421 47.2148 45.455 47.2148 46.1063V58.3925C47.2148 59.0418 47.7048 59.7567 48.3033 59.9799L58.4789 63.7571C59.0773 63.9804 60.0573 63.9804 60.6578 63.7571L70.8333 59.9799C71.4318 59.7567 71.9218 59.0438 71.9218 58.3925V46.1063C71.9218 45.457 71.4318 44.7421 70.8333 44.5189L60.6578 40.7417Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M59.5673 62.9789C59.5673 63.6282 59.0773 63.9785 58.4789 63.7572L48.3033 59.98C47.7048 59.7568 47.2148 59.0439 47.2148 58.3926V46.1065C47.2148 45.4571 47.7048 45.1068 48.3033 45.3281L58.4789 49.1053C59.0773 49.3285 59.5673 50.0414 59.5673 50.6927V62.9789Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, un.jsx)("path", {
            d: "M59.5713 62.9789C59.5713 63.6282 60.0613 63.9785 60.6597 63.7572L70.8353 59.98C71.4338 59.7568 71.9238 59.0439 71.9238 58.3926V46.1065C71.9238 45.4571 71.4338 45.1068 70.8353 45.3281L60.6597 49.1053C60.0613 49.3285 59.5713 50.0414 59.5713 50.6927V62.9789Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M70.4427 55.7476V55.4704C70.4427 54.4404 69.4237 53.7203 68.4528 54.0641C67.8571 54.2751 67.459 54.8385 67.459 55.4704V55.7476C67.459 56.7809 68.4841 57.5013 69.4563 57.1512C70.0481 56.938 70.4427 56.3766 70.4427 55.7476Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M48.3033 45.328C47.7049 45.1047 47.7049 44.7421 48.3033 44.5189L58.4789 40.7417C59.0773 40.5184 60.0573 40.5184 60.6578 40.7417L70.8334 44.5189C71.4318 44.7421 71.4318 45.1047 70.8334 45.328L60.6578 49.1052C60.0594 49.3284 59.0793 49.3284 58.4789 49.1052L48.3033 45.328Z",
            fill: "url(#paint4_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M77.6901 59.5193L68.6221 56.3624L68.5534 56.2087C68.318 55.6817 68.5395 55.0627 69.0559 54.8047L78.1239 57.9615C81.3649 58.8641 83.4472 61.1399 83.4472 64.5042V66.4948C83.4472 69.0207 85.0613 71.264 87.4563 72.0666L92.6606 73.5998C96.4528 74.8707 96.7286 80.1289 93.0901 81.7896L66.749 92.5591L66.0776 91.088L92.4187 80.3186C94.7225 79.2671 94.5479 75.9377 92.1467 75.133L86.9425 73.5998C83.8885 72.5763 81.8302 69.7157 81.8302 66.4948V64.5042C81.8302 61.8659 80.2317 60.2271 77.6901 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, un.jsx)("path", {
            d: "M77.6905 59.5193L68.6225 56.3624L68.5539 56.2087C68.3184 55.6817 68.5399 55.0627 69.0563 54.8047L78.1243 57.9615C81.3653 58.8641 83.4476 61.1399 83.4476 64.5042V66.4948H81.8306V64.5042C81.8306 61.8659 80.2321 60.2271 77.6905 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, un.jsx)("path", {
            d: "M42.5664 8.36625L40.1549 7.77431L8.05203 19.1136L10.349 19.944L42.5664 8.36625Z",
            fill: "url(#paint5_linear_25_36815)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M41.0249 27.496L44.2537 26.4355",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, un.jsx)("path", {
            d: "M41.3149 28.7865L43.9628 27.9082",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, un.jsx)("path", {
            d: "M40.6772 30.4113L44.6018 29.0469",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, un.jsx)("path", {
            d: "M41.7568 31.3939L43.5221 30.8301",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          })]
        }), (0, un.jsxs)("defs", {
          children: [(0, un.jsxs)("linearGradient", {
            id: "paint0_linear_25_36815",
            x1: "8.22364",
            y1: "57.2971",
            x2: "7.50162",
            y2: "60.7907",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint1_linear_25_36815",
            x1: "10.6118",
            y1: "24.886",
            x2: "4.01326",
            y2: "56.814",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint2_linear_25_36815",
            x1: "8.49714",
            y1: "19.2104",
            x2: "7.37564",
            y2: "24.6369",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint3_linear_25_36815",
            x1: "50.8229",
            y1: "46.959",
            x2: "50.8229",
            y2: "52.3996",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint4_linear_25_36815",
            x1: "59.5683",
            y1: "40.5742",
            x2: "59.5683",
            y2: "49.2726",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint5_linear_25_36815",
            x1: "27.4803",
            y1: "5.15485",
            x2: "23.8472",
            y2: "22.7337",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsx)("clipPath", {
            id: "clip0_25_36815",
            children: (0, un.jsx)("rect", {
              width: "96",
              height: "97.92",
              fill: "white",
              transform: "translate(0.668945)"
            })
          })]
        })]
      }),
      Wo = ({
        width: e,
        height: t
      }) => (0, un.jsxs)("svg", {
        fill: "none",
        width: e ?? 96,
        height: t ?? 96,
        viewBox: "0 0 96 96",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, un.jsxs)("g", {
          clipPath: "url(#clip0_25_36391)",
          children: [(0, un.jsx)("path", {
            d: "M7.96533 59.941V23.0565C7.96533 22.0109 8.62302 21.0783 9.60797 20.7273L43.3404 8.70626C44.9505 8.1325 46.6432 9.32625 46.6432 11.0355V47.8302C46.6432 48.8737 45.9881 49.8048 45.006 50.1574L11.2736 62.2683C9.66255 62.8467 7.96533 61.6527 7.96533 59.941Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, un.jsx)("path", {
            d: "M7.90655 60.6488C8.70977 61.2145 10.0868 61.2464 10.0868 61.2464C8.69612 61.1351 7.69163 59.7198 7.68502 57.5581L5.50198 56.7348C5.5092 58.8942 7.10332 60.0832 7.90655 60.6488Z",
            fill: "url(#paint0_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M7.69766 24.7121L5.5225 23.8345L5.52259 56.7494L7.69733 57.5757L7.69766 24.7121Z",
            fill: "url(#paint1_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M10.3448 19.9372L8.10352 19.129C6.5982 19.4323 5.52346 21.5357 5.5306 23.8321L7.70049 24.704C7.69335 22.4076 8.88966 20.5215 10.3448 19.9372Z",
            fill: "url(#paint2_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M5.56526 30.3743L7.70131 28.504L7.73953 38.3789L5.60348 40.2492L5.56526 30.3743Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M5.55144 41.6915L7.66362 39.9392L7.66981 42.4359L5.55968 44.1887L5.55144 41.6915Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M10.687 47.3547L11.4942 47.0193L11.5004 49.516L10.6953 49.8519L10.687 47.3547Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M10.6887 46.2746L11.4958 45.9392L11.502 46.6677L10.6968 47.0036L10.6887 46.2746Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M13.5264 25.424C12.2546 25.8889 11.2088 27.4012 11.2015 28.7793L11.0771 54.4911C11.0724 55.8701 12.1064 56.6162 13.3808 56.1523L38.6605 46.8785C39.9323 46.4136 40.9797 44.9049 40.9844 43.5258L41.1084 17.7991C41.1131 16.42 40.0792 15.6739 38.8073 16.1389L13.5264 25.424Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("mask", {
            id: "mask0_25_36391",
            style: {
              maskType: "alpha"
            },
            maskUnits: "userSpaceOnUse",
            x: "17",
            y: "24",
            width: "19",
            height: "27",
            children: (0, un.jsx)("path", {
              d: "M18.7309 30.3774C17.9978 30.6454 17.3949 31.5172 17.3907 32.3117L17.3189 48.8433C17.3162 49.6383 17.9123 50.0684 18.6469 49.8009L33.7438 44.2772C34.477 44.0092 35.0807 43.1395 35.0835 42.3445L35.155 25.8042C35.1578 25.0092 34.5617 24.5791 33.8285 24.8471L18.7309 30.3774Z",
              fill: "#1B1B1C",
              stroke: "#0500FF",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          }), (0, un.jsxs)("g", {
            mask: "url(#mask0_25_36391)",
            children: [(0, un.jsx)("path", {
              d: "M36.1694 42.9336L17.3414 35.8448",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M36.1187 37.3867L17.3281 30.4783",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M36.1094 31.5156L19.7378 25.4701",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M36.0996 26.002L19.728 19.9565",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M34.103 45.9648L13.8824 38.1375",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M29.8394 47.9219L9.61869 40.0946",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M25.6035 49.9375L5.38285 42.1102",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M21.0513 51.8359L0.8306 44.0086",
              stroke: "#CC2121",
              strokeWidth: "0.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, un.jsx)("path", {
              d: "M30.8744 21.2617L30.8745 41.3779L3.69531 50.9976",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, un.jsx)("path", {
              d: "M25.2339 18.5664L25.2339 39.3196L-1.94531 48.9393",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            }), (0, un.jsx)("path", {
              d: "M20.0933 16.627L20.0933 37.3801L-7.08594 46.9999",
              stroke: "#CC2121",
              strokeWidth: "0.25"
            })]
          }), (0, un.jsx)("path", {
            d: "M27.3882 38.3038C27.3882 38.6047 27.5766 39.1658 28.0789 38.9706L31.045 37.8866C31.2393 37.8142 31.3984 37.5827 31.3984 37.3713L31.3542 33.598C31.3542 33.2281 31.0118 33.1562 30.8175 33.228L27.7415 34.3561C27.5473 34.4286 27.3882 34.6601 27.3882 34.8715V38.3038Z",
            fill: "#CC2121",
            stroke: "#1B1B1C",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M21.0747 40.7373C21.0747 41.0382 21.2631 41.5994 21.7654 41.4042L24.7316 40.3202C24.9258 40.2477 25.0849 40.0163 25.0849 39.8049L25.0407 36.0316C25.0407 35.6616 24.6984 35.5898 24.5041 35.6616L21.4281 36.7897C21.2338 36.8622 21.0747 37.0936 21.0747 37.3051V40.7373Z",
            fill: "#CC2121",
            stroke: "#1B1B1C",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M33.9774 24.8014C34.0753 24.9667 34.131 25.1743 34.1297 25.4186L34.0582 41.9589C34.0554 42.7539 33.4517 43.6236 32.7185 43.8916L17.6221 49.4139C17.5717 49.4325 17.521 49.4476 17.4713 49.4597C17.6945 49.8349 18.1365 49.9861 18.6454 49.7996L33.7418 44.2774C34.475 44.0093 35.0787 43.1396 35.0815 42.3446L35.153 25.8043C35.156 25.0642 34.6394 24.6418 33.9769 24.8029L33.9774 24.8014Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M18.729 30.3774C17.9958 30.6454 17.393 31.5172 17.3888 32.3117L17.317 48.8433C17.3143 49.6383 17.9103 50.0684 18.645 49.8009L33.7419 44.2772C34.475 44.0092 35.0788 43.1395 35.0815 42.3445L35.1531 25.8042C35.1558 25.0092 34.5598 24.5791 33.8266 24.8471L18.729 30.3774Z",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M35.082 42.345L35.1536 25.8047C35.1566 25.0646 34.6399 24.6422 33.9774 24.8033C34.0753 24.9686 34.131 25.1762 34.1297 25.4205L34.0581 41.9608L35.0815 42.3465L35.082 42.345Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M20.3331 19.4122C19.8114 19.6018 19.3816 20.2209 19.3776 20.7859L19.3049 26.1596C19.3019 26.7249 19.7252 27.0316 20.248 26.8424L30.991 22.9349C31.5127 22.7453 31.9432 22.1276 31.9462 21.5623L32.0187 16.4392C32.0217 15.8738 31.5984 15.5672 31.0767 15.7568L20.3331 19.4122Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M31.1831 15.6992C31.2525 15.8169 31.2918 15.9646 31.2906 16.1383L31.2906 21.2944C31.2876 21.8597 30.7846 22.4683 30.2629 22.6579L19.5202 26.5644C19.4844 26.5776 19.4482 26.5882 19.4129 26.5968C19.5711 26.8639 20.0779 27.0543 20.4401 26.9224L31.1827 23.0159C31.7044 22.8264 32.1888 22.2369 32.1918 21.6716L32.1917 16.4839C32.1948 15.9576 31.6541 15.5866 31.1827 15.7003L31.1831 15.6992Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M32.1224 21.5784L32.195 16.4703C32.198 15.944 31.6409 15.6315 31.1696 15.7452C31.239 15.8628 31.2916 15.966 31.2916 16.2499L31.2916 21.3093L32.122 21.5794L32.1224 21.5784Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 23.8789)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 22.3223)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 21.543)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 20.7656)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 23.6802 19.9863)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 23.375)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 21.8184)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 21.0391)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 20.2617)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 25.1743 19.4824)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 22.9141)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 21.3555)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 20.5781)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 19.7969)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 26.6665 19.0195)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 22.4062)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 20.8496)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 20.0703)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 19.293)",
            fill: "#CC2121"
          }), (0, un.jsx)("rect", {
            width: "0.778624",
            height: "0.778624",
            transform: "matrix(0.95502 -0.296542 0 1 28.1587 18.5137)",
            fill: "#CC2121"
          }), (0, un.jsx)("path", {
            d: "M51.9174 45.2174C51.5385 45.076 50.9179 45.076 50.5377 45.2174L48.5251 46.0289C48.1462 46.1703 47.8359 46.6216 47.8359 47.0341V48.9972C47.8359 49.4084 48.1462 49.861 48.5251 50.0024L54.9684 52.3941C55.3473 52.5355 55.9679 52.5355 56.3481 52.3941L60.4443 53.0886C60.8232 52.9472 61.1335 52.4958 61.1335 52.0834L59.0499 48.6143C59.0499 48.2031 58.7396 47.7505 58.3607 47.6091L51.9174 45.2174Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M60.1884 53.4027C60.1884 54.052 59.6984 54.4023 59.1 54.1811L48.9244 50.4039C48.3259 50.1806 47.8359 49.4678 47.8359 48.8164L47.8359 47.3721C47.8359 46.7227 48.3259 46.3725 48.9244 46.5937L59.1 50.3709C59.6984 50.5942 60.1884 51.307 60.1884 51.9584V53.4027Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, un.jsx)("path", {
            d: "M48.9615 46.6073C48.3631 46.384 48.3631 46.0214 48.9615 45.7982L50.3123 45.2788C50.9108 45.0555 51.8908 45.0555 52.4912 45.2788L62.6668 49.056C63.2652 49.2792 63.2652 49.6418 62.6668 49.8651L61.316 50.3845C60.7176 50.6077 59.7375 50.6077 59.1371 50.3845L48.9615 46.6073Z",
            fill: "#FFAEFE",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M46.9243 47.065C46.5453 46.9236 45.9248 46.9236 45.5446 47.065L43.532 47.8765C43.153 48.0179 42.8428 48.4693 42.8428 48.8817V50.8448C42.8428 51.256 43.153 51.7087 43.532 51.8501L49.9752 54.2418C50.3542 54.3832 50.9747 54.3832 51.3549 54.2418L55.4511 54.9362C55.83 54.7949 56.1403 54.3435 56.1403 53.931L54.0567 50.462C54.0567 50.0508 53.7464 49.5981 53.3675 49.4568L46.9243 47.065Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M55.1952 55.2503C55.1952 55.8997 54.7052 56.2499 54.1068 56.0287L43.9312 52.2515C43.3328 52.0282 42.8428 51.3154 42.8428 50.664L42.8428 49.2197C42.8428 48.5704 43.3328 48.2201 43.9312 48.4414L54.1068 52.2185C54.7052 52.4418 55.1952 53.1546 55.1952 53.806V55.2503Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, un.jsx)("path", {
            d: "M47.8911 54.0742L48.6909 50.6367L49.4827 50.9311V54.6748L47.8911 54.0742Z",
            fill: "#1B1B1C"
          }), (0, un.jsx)("path", {
            d: "M43.9703 48.4549C43.3719 48.2317 43.3719 47.8691 43.9703 47.6458L45.3211 47.1264C45.9195 46.9032 46.8995 46.9032 47.5 47.1264L57.6756 50.9036C58.274 51.1269 58.274 51.4895 57.6756 51.7127L56.3248 52.2321C55.7263 52.4554 54.7463 52.4554 54.1459 52.2321L43.9703 48.4549Z",
            fill: "url(#paint3_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M60.6582 40.7417C60.0598 40.5184 59.0798 40.5184 58.4793 40.7417L48.3038 44.5189C47.7053 44.7421 47.2153 45.455 47.2153 46.1063V58.3925C47.2153 59.0418 47.7053 59.7567 48.3038 59.9799L58.4793 63.7571C59.0778 63.9804 60.0578 63.9804 60.6582 63.7571L70.8338 59.9799C71.4323 59.7567 71.9223 59.0438 71.9223 58.3925V46.1063C71.9223 45.457 71.4323 44.7421 70.8338 44.5189L60.6582 40.7417Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M59.5678 62.9789C59.5678 63.6282 59.0778 63.9785 58.4793 63.7572L48.3038 59.98C47.7053 59.7568 47.2153 59.0439 47.2153 58.3926V46.1065C47.2153 45.4571 47.7053 45.1068 48.3038 45.3281L58.4793 49.1053C59.0778 49.3285 59.5678 50.0414 59.5678 50.6927V62.9789Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeMiterlimit: "10"
          }), (0, un.jsx)("path", {
            d: "M59.5718 62.9789C59.5718 63.6282 60.0618 63.9785 60.6602 63.7572L70.8358 59.98C71.4342 59.7568 71.9242 59.0439 71.9242 58.3926V46.1065C71.9242 45.4571 71.4342 45.1068 70.8358 45.3281L60.6602 49.1053C60.0618 49.3285 59.5718 50.0414 59.5718 50.6927V62.9789Z",
            fill: "#F4F4F7",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M70.4432 55.7476V55.4704C70.4432 54.4404 69.4242 53.7203 68.4533 54.0641C67.8576 54.2751 67.4595 54.8385 67.4595 55.4704V55.7476C67.4595 56.7809 68.4846 57.5013 69.4568 57.1512C70.0486 56.938 70.4432 56.3766 70.4432 55.7476Z",
            fill: "#0500FF"
          }), (0, un.jsx)("path", {
            d: "M48.3033 45.328C47.7049 45.1047 47.7049 44.7421 48.3033 44.5189L58.4789 40.7417C59.0773 40.5184 60.0573 40.5184 60.6578 40.7417L70.8334 44.5189C71.4318 44.7421 71.4318 45.1047 70.8334 45.328L60.6578 49.1052C60.0594 49.3284 59.0793 49.3284 58.4789 49.1052L48.3033 45.328Z",
            fill: "url(#paint4_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M77.6911 59.5193L68.623 56.3624L68.5544 56.2087C68.319 55.6817 68.5405 55.0627 69.0568 54.8047L78.1249 57.9615C81.3658 58.8641 83.4482 61.1399 83.4482 64.5042V66.4948C83.4482 69.0207 85.0623 71.264 87.4573 72.0666L92.6615 73.5998C96.4538 74.8707 96.7296 80.1289 93.0911 81.7896L66.75 92.5591L66.0786 91.088L92.4197 80.3186C94.7235 79.2671 94.5489 75.9377 92.1477 75.133L86.9435 73.5998C83.8895 72.5763 81.8312 69.7157 81.8312 66.4948V64.5042C81.8312 61.8659 80.2327 60.2271 77.6911 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, un.jsx)("path", {
            d: "M77.691 59.5193L68.623 56.3624L68.5543 56.2087C68.3189 55.6817 68.5404 55.0627 69.0568 54.8047L78.1248 57.9615C81.3658 58.8641 83.4481 61.1399 83.4481 64.5042V66.4948H81.8311V64.5042C81.8311 61.8659 80.2326 60.2271 77.691 59.5193Z",
            fill: "white",
            stroke: "#0500FF",
            strokeWidth: "0.25"
          }), (0, un.jsx)("path", {
            d: "M42.5654 8.36625L40.1539 7.77431L8.05105 19.1136L10.348 19.944L42.5654 8.36625Z",
            fill: "url(#paint5_linear_25_36391)",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, un.jsx)("path", {
            d: "M41.0239 27.496L44.2527 26.4355",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, un.jsx)("path", {
            d: "M41.3149 28.7865L43.9628 27.9082",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, un.jsx)("path", {
            d: "M40.6763 30.4113L44.6008 29.0469",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          }), (0, un.jsx)("path", {
            d: "M41.7563 31.3939L43.5216 30.8301",
            stroke: "#0500FF",
            strokeWidth: "0.25",
            strokeLinecap: "round"
          })]
        }), (0, un.jsxs)("defs", {
          children: [(0, un.jsxs)("linearGradient", {
            id: "paint0_linear_25_36391",
            x1: "8.22267",
            y1: "57.2971",
            x2: "7.50065",
            y2: "60.7907",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint1_linear_25_36391",
            x1: "10.6104",
            y1: "24.886",
            x2: "4.0118",
            y2: "56.814",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint2_linear_25_36391",
            x1: "8.49714",
            y1: "19.2104",
            x2: "7.37564",
            y2: "24.6369",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint3_linear_25_36391",
            x1: "50.8229",
            y1: "46.959",
            x2: "50.8229",
            y2: "52.3996",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint4_linear_25_36391",
            x1: "59.5683",
            y1: "40.5742",
            x2: "59.5683",
            y2: "49.2726",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsxs)("linearGradient", {
            id: "paint5_linear_25_36391",
            x1: "27.4793",
            y1: "5.15485",
            x2: "23.8463",
            y2: "22.7337",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.0598417",
              stopColor: "#FFF8A3"
            }), (0, un.jsx)("stop", {
              offset: "0.777316",
              stopColor: "#FFAEFE"
            })]
          }), (0, un.jsx)("clipPath", {
            id: "clip0_25_36391",
            children: (0, un.jsx)("rect", {
              width: "96",
              height: "97.92",
              fill: "white",
              transform: "translate(0.668945)"
            })
          })]
        })]
      }),
      zo = e => `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${e}/info/logo.png`;

    function Zo({
      token: e,
      index: t,
      onClick: n
    }) {
      var r, o;
      const {
        formatMessage: i
      } = Po(), a = e.isLoading ? "" : $t(e.price), s = e.isLoading ? "" : Gt(e.change24h), l = e.isLoading ? "" : qt(e.marketCap), c = e.isLoading ? "" : Yt(e.volume24h), u = null != (o = null == (r = s?.startsWith) ? void 0 : r.call(s, "+")) && o;
      return (0, un.jsxs)("div", {
        className: "trust-token-list-row",
        onClick: () => {
          n && !e.isLoading && n(e)
        },
        style: {
          cursor: e.isLoading ? "default" : "pointer"
        },
        children: [(0, un.jsx)("div", {
          className: "trust-token-list-col ",
          children: e.isLoading ? (0, un.jsxs)(un.Fragment, {
            children: [(0, un.jsx)("div", {
              className: "skeleton",
              style: {
                width: "40px",
                height: "40px",
                borderRadius: "50%"
              }
            }), (0, un.jsxs)("div", {
              className: "trust-token-list-name-info",
              children: [(0, un.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "80px",
                  height: "20px",
                  marginBottom: "4px"
                }
              }), (0, un.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "60px",
                  height: "16px"
                }
              })]
            })]
          }) : (0, un.jsxs)(un.Fragment, {
            children: [(0, un.jsxs)("div", {
              className: "trust-token-list-logo-container",
              children: [(0, un.jsx)("img", {
                className: "trust-token-list-logo",
                src: e.logo,
                alt: e.symbol,
                width: 40,
                height: 40
              }), (0, un.jsx)("img", {
                className: "trust-token-list-chain-badge",
                src: zo(e.chainId),
                alt: e.chainName,
                width: 16,
                height: 16
              })]
            }), (0, un.jsxs)("div", {
              className: "trust-token-list-name-info",
              children: [(0, un.jsxs)("div", {
                className: "trust-token-list-symbol-row",
                children: [(0, un.jsx)("span", {
                  className: "trust-token-list-symbol",
                  children: e.symbol
                }), e.isRecent && (0, un.jsx)("span", {
                  className: "trust-token-list-recent-badge",
                  children: i({
                    id: "token-scanner.list.recent",
                    defaultMessage: "Recent"
                  })
                })]
              }), (0, un.jsx)("div", {
                className: "trust-token-list-chain",
                children: e.networkName || e.chainName
              })]
            })]
          })
        }), (0, un.jsx)("div", {
          className: "trust-token-list-col ",
          children: e.isLoading ? (0, un.jsxs)(un.Fragment, {
            children: [(0, un.jsx)("div", {
              className: "skeleton",
              style: {
                width: "70px",
                height: "20px",
                marginBottom: "4px"
              }
            }), (0, un.jsx)("div", {
              className: "skeleton",
              style: {
                width: "50px",
                height: "16px"
              }
            })]
          }) : (0, un.jsxs)(un.Fragment, {
            children: [(0, un.jsx)("div", {
              className: "trust-token-list-col-numeric",
              children: a
            }), (0, un.jsx)("div", {
              className: "trust-token-list-change " + (u ? "positive" : "negative"),
              children: s
            })]
          })
        }), (0, un.jsx)("div", {
          className: "trust-token-list-col trust-token-list-col-numeric",
          children: e.isLoading ? (0, un.jsx)("div", {
            className: "skeleton",
            style: {
              width: "70px",
              height: "20px"
            }
          }) : l
        }), (0, un.jsx)("div", {
          className: "trust-token-list-col trust-token-list-col-numeric",
          children: e.isLoading ? (0, un.jsx)("div", {
            className: "skeleton",
            style: {
              width: "70px",
              height: "20px"
            }
          }) : c
        })]
      }, e.assetId || t)
    }
    const $o = ({
        width: e,
        height: t
      }) => (0, un.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 113,
        height: t ?? 31,
        viewBox: "0 0 113 31",
        children: [(0, un.jsx)("path", {
          d: "M51.0146 7.22656H56.4012V10.2437C58.166 7.53213 60.1968 7.22656 63.1698 7.22656V12.5585H61.8159C58.2534 12.5585 56.5478 14.235 56.5478 17.5558V23.2234H51.0146V7.22656Z",
          fill: "#48FF91"
        }), (0, un.jsx)("path", {
          d: "M81.1414 23.2225H75.6092V21.6974C74.401 23.0993 72.7547 23.7086 70.7248 23.7086C66.8699 23.7086 64.6904 21.4229 64.6904 17.2192V7.22559H70.2227V15.9715C70.2227 17.9507 71.1939 19.1081 72.8412 19.1081C74.4885 19.1081 75.6082 17.9798 75.6082 16.0618V7.22559H81.1405V23.2225H81.1414Z",
          fill: "#48FF91"
        }), (0, un.jsx)("path", {
          d: "M82.4941 18.2844H87.6757C87.9117 19.4418 88.7062 19.9288 90.6176 19.9288C92.1784 19.9288 93.0904 19.564 93.0904 18.8937C93.0904 18.3747 92.6485 18.039 91.3848 17.7654L87.2056 16.8205C84.4094 16.1821 82.9962 14.5668 82.9962 11.9755C82.9962 8.56159 85.4972 6.79492 90.3534 6.79492C95.2097 6.79492 97.5931 8.51646 98.0068 12.2049H92.8572C92.7698 11.2309 91.7675 10.6348 90.1203 10.6348C88.7964 10.6348 87.9446 11.0607 87.9446 11.7019C87.9446 12.2501 88.5021 12.676 89.6229 12.9524L94.0071 14.0196C96.8908 14.7191 98.2757 16.183 98.2757 18.5589C98.2757 21.8506 95.4203 23.8007 90.5669 23.8007C85.7134 23.8007 82.5026 21.6983 82.5026 18.2844H82.497H82.4941Z",
          fill: "#48FF91"
        }), (0, un.jsx)("path", {
          d: "M113.006 12.2012V7.22559H99.3506V12.204H103.426V23.2225H108.93V12.2012H113.006Z",
          fill: "#48FF91"
        }), (0, un.jsx)("path", {
          d: "M49.4741 12.2012V7.22559H35.8193V12.204H39.8942V23.2225H45.3992V12.2012H49.4741Z",
          fill: "#48FF91"
        }), (0, un.jsx)("path", {
          d: "M0 4.41433L13.5815 0V30.559C3.88028 26.4841 0 18.6746 0 14.2612V4.41433Z",
          fill: "#48FF91"
        }), (0, un.jsx)("path", {
          d: "M27.1635 4.41433L13.582 0V30.559C23.2832 26.4841 27.1635 18.6746 27.1635 14.2612V4.41433Z",
          fill: "url(#paint0_linear_6034_27192)"
        }), (0, un.jsx)("defs", {
          children: (0, un.jsxs)("linearGradient", {
            id: "paint0_linear_6034_27192",
            x1: "13.0085",
            y1: "34.3998",
            x2: "24.1247",
            y2: "-5.80867",
            gradientUnits: "userSpaceOnUse",
            children: [(0, un.jsx)("stop", {
              offset: "0.26",
              stopColor: "#48FF91"
            }), (0, un.jsx)("stop", {
              offset: "0.66",
              stopColor: "#0094FF"
            }), (0, un.jsx)("stop", {
              offset: "0.8",
              stopColor: "#0038FF"
            }), (0, un.jsx)("stop", {
              offset: "0.89",
              stopColor: "#0500FF"
            })]
          })
        })]
      }),
      Go = ({
        width: e,
        height: t,
        colorClass: n
      }) => (0, un.jsx)("svg", {
        className: n,
        width: e ?? 12,
        height: t ?? 12,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, un.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.42746 2.42857C7.42746 3.21755 6.78786 3.85714 5.99888 3.85714C5.20991 3.85714 4.57031 3.21755 4.57031 2.42857C4.57031 1.63959 5.20991 1 5.99888 1C6.78786 1 7.42746 1.63959 7.42746 2.42857ZM7.42746 6C7.42746 6.78898 6.78786 7.42857 5.99888 7.42857C5.20991 7.42857 4.57031 6.78898 4.57031 6C4.57031 5.21102 5.20991 4.57143 5.99888 4.57143C6.78786 4.57143 7.42746 5.21102 7.42746 6ZM5.99888 11C6.78786 11 7.42746 10.3604 7.42746 9.57143C7.42746 8.78243 6.78786 8.14286 5.99888 8.14286C5.20991 8.14286 4.57031 8.78243 4.57031 9.57143C4.57031 10.3604 5.20991 11 5.99888 11Z",
          fill: "currentColor"
        })
      });

    function qo() {
      const {
        formatMessage: e
      } = Po();
      return (0, un.jsxs)("div", {
        className: "trust-token-popup-footer",
        children: [(0, un.jsxs)("div", {
          className: "trust-token-powered",
          children: [e({
            id: "token-scanner.popup.powered-by",
            defaultMessage: "Powered by"
          }), " ", (0, un.jsx)("span", {
            className: "trust-token-powered-brand",
            children: (0, un.jsx)($o, {
              width: 56,
              height: 16
            })
          })]
        }), (0, un.jsx)("button", {
          className: "trust-token-menu-button",
          "aria-label": "Menu",
          children: (0, un.jsx)(Go, {
            colorClass: "text-utility-1-default"
          })
        })]
      })
    }

    function Yo({
      token: e,
      isLoading: t = !1,
      hasError: n = !1,
      onRetry: r,
      onSimilarTokenClick: o,
      similarTokensCount: i = 0,
      similarTokens: a
    }) {
      var s, l, c, u, f, d;
      const {
        formatMessage: h
      } = Po(), p = null != (c = null == (l = null == (s = e?.change24h) ? void 0 : s.startsWith) ? void 0 : l.call(s, "+")) && c, m = null != (d = null == (f = null == (u = e?.change24h) ? void 0 : u.replace) ? void 0 : f.call(u, /[+-]/, "")) ? d : "", g = e?.logo || "/", [y, v] = (0, Jr.useState)(!1), [b, k] = (0, Jr.useState)(() => {
        const e = document.body.style.backgroundColor;
        return !e.includes("255, 255, 255") && !e.includes("242, 242, 242")
      }), w = b ? Uo : Wo;
      if (a || y) {
        const e = a || [];
        return (0, un.jsxs)("div", {
          className: "trust-token-popup-container",
          children: [(0, un.jsxs)("div", {
            className: "trust-token-list-header",
            children: [(0, un.jsx)("div", {
              className: "trust-token-list-header-col",
              children: h({
                id: "token-scanner.popup.name-label",
                defaultMessage: "Name"
              })
            }), (0, un.jsx)("div", {
              className: "trust-token-list-header-col",
              children: h({
                id: "token-scanner.popup.price-label",
                defaultMessage: "Price"
              })
            }), (0, un.jsx)("div", {
              className: "trust-token-list-header-col ",
              children: h({
                id: "token-scanner.popup.market-cap-label",
                defaultMessage: "Market Cap"
              })
            }), (0, un.jsx)("div", {
              className: "trust-token-list-header-col ",
              children: h({
                id: "token-scanner.popup.volume-label",
                defaultMessage: "24H Volume"
              })
            })]
          }), (0, un.jsx)("div", {
            className: "trust-token-list-scroll",
            children: e.map((e, t) => (0, un.jsx)(Zo, {
              token: e,
              index: t,
              onClick: o
            }, e.assetId || t))
          }), (0, un.jsx)(qo, {})]
        })
      }
      return (0, un.jsxs)("div", {
        className: "trust-token-popup-container",
        children: [(0, un.jsxs)("div", {
          className: "trust-token-popup-header",
          children: [(0, un.jsxs)("div", {
            className: "trust-token-header-left",
            children: [(0, un.jsxs)("div", {
              className: "trust-token-popup-logo-container",
              children: [(0, un.jsx)("img", {
                className: "trust-token-popup-logo",
                src: g,
                alt: e.symbol + " logo",
                width: 40,
                height: 40
              }), e.chainId && (0, un.jsx)("img", {
                className: "trust-token-popup-chain-badge",
                src: (x = e.chainId, `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${x}/info/logo.png`),
                alt: e.chainName || "",
                width: 16,
                height: 16
              })]
            }), (0, un.jsxs)("div", {
              className: "trust-token-header-info",
              children: [(0, un.jsx)("div", {
                className: "trust-token-popup-symbol",
                children: e.symbol
              }), (0, un.jsx)("div", {
                className: "trust-token-popup-name",
                children: e.name
              })]
            })]
          }), (0, un.jsxs)("button", {
            className: "trust-token-swap-button",
            disabled: t || n,
            children: [h({
              id: "token-scanner.popup.swap-button",
              defaultMessage: "Swap in Trust"
            }), (0, un.jsx)(jo, {
              width: 16,
              height: 16
            })]
          })]
        }), n ? (0, un.jsxs)("div", {
          className: "trust-token-error-state",
          children: [(0, un.jsx)("div", {
            className: "trust-token-error-illustration",
            children: (0, un.jsx)(w, {})
          }), (0, un.jsx)("div", {
            className: "trust-token-error-message",
            children: h({
              id: "token-scanner.error.message",
              defaultMessage: "Could not load prices"
            })
          }), (0, un.jsxs)("button", {
            className: "trust-token-retry-button",
            onClick: r,
            children: [h({
              id: "token-scanner.error.retry",
              defaultMessage: "Try again"
            }), (0, un.jsx)(Vo, {
              width: 16,
              height: 16
            })]
          })]
        }) : (0, un.jsxs)(un.Fragment, {
          children: [(0, un.jsx)("div", {
            className: "trust-token-price-card",
            children: (0, un.jsxs)("div", {
              className: "trust-token-price-row",
              children: [(0, un.jsxs)("div", {
                children: [(0, un.jsx)("div", {
                  className: "trust-token-price-label",
                  children: h({
                    id: "token-scanner.popup.price-label",
                    defaultMessage: "Price"
                  })
                }), t ? (0, un.jsx)("div", {
                  className: "skeleton",
                  style: {
                    width: "80px",
                    height: "24px"
                  }
                }) : (0, un.jsx)("div", {
                  className: "trust-token-price-value",
                  children: e.price
                })]
              }), t ? (0, un.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "60px",
                  height: "20px"
                }
              }) : (0, un.jsxs)("div", {
                className: "trust-token-price-change " + (p ? "positive" : "negative"),
                children: [p ? (0, un.jsx)(Do, {
                  width: 16,
                  height: 16
                }) : (0, un.jsx)(No, {
                  width: 16,
                  height: 16
                }), m]
              })]
            })
          }), (0, un.jsxs)("div", {
            className: "trust-token-stats-row",
            children: [(0, un.jsxs)("div", {
              className: "trust-token-stat-card",
              children: [(0, un.jsx)("div", {
                className: "trust-token-stat-label",
                children: h({
                  id: "token-scanner.popup.market-cap-label",
                  defaultMessage: "Market Cap"
                })
              }), t ? (0, un.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "70px",
                  height: "20px"
                }
              }) : (0, un.jsx)("div", {
                className: "trust-token-stat-value",
                children: e.marketCap
              })]
            }), (0, un.jsxs)("div", {
              className: "trust-token-stat-card",
              children: [(0, un.jsx)("div", {
                className: "trust-token-stat-label",
                children: h({
                  id: "token-scanner.popup.volume-label",
                  defaultMessage: "24H Volume"
                })
              }), t ? (0, un.jsx)("div", {
                className: "skeleton",
                style: {
                  width: "70px",
                  height: "20px"
                }
              }) : (0, un.jsx)("div", {
                className: "trust-token-stat-value",
                children: e.volume24h
              })]
            })]
          }), !t && i > 0 && (0, un.jsxs)("button", {
            className: "trust-token-similar-button",
            onClick: () => v(!0),
            children: [h({
              id: "token-scanner.popup.similar-tokens",
              defaultMessage: "{count} tokens with similar name"
            }, {
              count: i
            }), (0, un.jsx)(_o, {
              width: 20,
              height: 20
            })]
          })]
        }), (0, un.jsx)(qo, {})]
      });
      var x
    }
    var Ko = (e => (e.TERMS_OF_SERVICE = "Terms Of Service View", e.PRIVACY_POLICY = "Privacy Policy View", e.SUPPORT = "Support View", e.HELP_CENTER = "Help Center View", e.TESTNET_FAUCET = "Testnet Faucet View", e.OPENSEA = "Opensea View", e.BLOCKCHAIN_EXPLORER = "Blockchain Explorer View", e.FIAT_OFF_RAMPS_PROVIDER = "Fiat Off-Ramps Provider View", e.FIAT_ON_RAMPS_PROVIDER = "Fiat On-Ramps Provider View", e.EXTENSION_OPENED = "Extension Opened View", e.ONBOARDING_WELCOME = "Onboarding Welcome View", e.ONBOARDING_PASSWORD_CREATE = "Onboarding Password Create View", e.ONBOARDING_PASSWORD_VERIFY = "Onboarding Password Verify View", e.ONBOARDING_BACKUP_SEEDPHRASE_INITIAL = "Backup Seed Phrase Initial View", e.ONBOARDING_BACKUP_SEEDPHRASE_CONFIRM = "Backup Seed Phrase Confirm View", e.ONBOARDING_CHOOSE_AUTHENTICATION = "Onboarding Choose Authentication View", e.ONBOARDING_CHOOSE_IMPORT_SOURCE = "Onboarding Choose Import Source View", e.ONBOARDING_CHOOSE_TW_METHOD = "Onboarding Choose Trust Wallet Method View", e.ONBOARDING_IMPORT_MNEMONIC_OR_PRIVATE_KEY = "Onboarding Import Mnemonic or Private Key View", e.ONBOARDING_IMPORT_WITH_QR = "Onboarding Import With QR View", e.ONBOARDING_SET_ANALYTICS = "Onboarding Set Analytics View", e.ONBOARDING_COMPLETED = "Onboarding Completed View", e.ONBOARDING_MAX_ACCOUNTS_REACHED = "Max Accounts Reached View", e.ONBOARDING_VERIFY_SAFETY = "Onboarding Verify Safety View", e.ONBOARDING_IMPORT_MNEMONIC_SOLANA_DERIVATION = "Onboarding Input Mnemonic Solana Derivation View", e.ONBOARDING_SET_BIOMETRICS = "Onboarding Set Biometrics View", e.ONBOARDING_CONNECT_LEDGER_DEVICE = "Onboarding Connect Ledger Device View", e.ONBOARDING_IMPORT_LEDGER_ADDRESSES = "Onboarding Import Ledger Addresses View", e.HOME = "Home View", e.HOME_CRYPTO = "Home Crypto View", e.HOME_NFT = "Home NFT View", e.HOME_APPROVALS = "Home Approvals View", e.UNLOCK = "Unlock View", e.SETTINGS = "Settings View", e.SETTINGS_HELP = "Settings Help View", e.SETTINGS_LANGUAGE = "Settings Language View", e.SETTINGS_COLOR_MODE = "Settings Color Mode View", e.SETTINGS_ALL_CONNECTED_DAPPS = "Settings All Connected DApps View", e.SETTINGS_CONNECTED_DAPP = "Settings Connected Dapp View", e.SETTINGS_BLACKLISTED_DAPP = "Settings All Blacklisted Dapps View", e.SETTINGS_MANAGE_WALLETS = "Settings Manage Wallets View", e.SETTINGS_MANAGE_WALLET = "Settings Manage Wallet View", e.SETTINGS_MANAGE_ACCOUNT = "Settings Manage Account View", e.SETTINGS_NETWORKS = "Settings Networks View", e.SETTINGS_ADD_CUSTOM_NETWORK = "Settings Add Custom Network View", e.SETTINGS_DEVELOPER = "Settings Developer View", e.SETTINGS_DEVELOPER_FAUCETS = "Settings Developer Faucets View", e.SETTINGS_NOTIFICATIONS = "Settings Notification View", e.SETTINGS_ADDRESS_BOOK = "Settings Address Book View", e.SETTINGS_FIATS = "Settings Fiats View", e.SETTINGS_REVEAL_PRIVATE_KEY = "Settings Reveal Private Key View", e.ADDRESSES = "Addresses View", e.RECEIVE = "Receive View", e.NFT_COLLECTION = "NFT Collection View", e.NFT_ITEM = "NFT Item View", e.NFT_REPORTED_COLLECTIONS = "NFT Reported Collections View", e.MANAGE_CRYPTO = "Manage Crypto View", e.CUSTOM_ASSET_SELECT_NETWORK = "Select Custom Asset Network View", e.CUSTOM_ASSET_ADD_ASSET = "Add Custom Asset View", e.CUSTOM_ASSET_ADD_ASSET_MANUALLY = "Add Custom Asset Manually View", e.HISTORY = "History View", e.TRANSACTION = "Transaction View", e.ASSET = "Asset View", e.SWAP = "Swap View", e.TRENDING_TOKENS = "Hot Tokens View", e.HOT_TOKEN_DETAILS = "Hot Token Details View", e.FUND = "Fund View", e.FUND_CEX_FUNDING_PROVIDERS = "Fund Cex Funding Providers View", e.FUND_CEX_ASSET_SELECT = "Fund Cex Asset Select View", e.FUND_CEX_PLATFORM = "Fund Cex Platform View", e.FUND_CEX_QR = "Fund Cex QR View", e.EARN_STAKING_LIST = "Earn Staking List View", e.EARN_STAKING = "Earn Staking View", e.EARN_DELEGATE = "Earn Asset Delegate View", e.EARN_UNDELEGATE = "Earn Asset Undelegate View", e.EARN_REDELEGATE = "Earn Asset Redelegate View", e.EARN_CLAIM_REWARDS = "Earn Asset Claim Rewards View", e.EARN_COMPOUND = "Earn Asset Compound View", e.SEND_SELECT_CRYPTO = "Send Select Crypto View", e.SEND_PREPARE_CRYPTO = "Send Prepare Crypto View", e.SEND_PREPARE_NFT = "Send Prepare NFT View", e.SEND_CONFIRM_CRYPTO = "Send Confirm Crypto View", e.SEND_CONFIRM_NFT = "Send Confirm NFT View", e.SEND_ADDRESS_BOOK = "Send Address Book View", e.NOTIFICATION_ADD_ASSET = "Notification Add Asset View", e.NOTIFICATION_ADD_NETWORK = "Notification Add Network View", e.NOTIFICATION_APPROVE_ASSET = "Notification Approve Asset View", e.NOTIFICATION_BNB_STAKING_SELECT_NETWORK = "Notification BNB Staking Select Network View", e.NOTIFICATION_BNB_STAKING_CONFIRMATION = "Notification BNB Staking Confirmation View", e.NOTIFICATION_CONNECT_DAPP = "Notification Connect DApp View", e.NOTIFICATION_ETH_DECRYPT = "Notification ETH Decrypt View", e.NOTIFICATION_GET_ENCRYPTED_PUBLIC_KEY = "Notification Get Encrypted Public Key View", e.NOTIFICATION_DAPP_CONNECT_PERMISSION_DENIED = "Notification Dapp Connect Permission Denied View", e.NOTIFICATION_SEND_TRANSACTION = "Notification Send Transaction View", e.NOTIFICATION_SIGN_MESSAGE = "Notification Sign Message View", e.NOTIFICATION_SIGN_SOLANA_RAW_TRANSACTION = "Notification Sign Solana Raw Transaction View", e.NOTIFICATION_SWITCH_NETWORK = "Notification Switch Network View", e.NOTIFICATION_SWITCH_WALLET = "Notification Switch Wallet View", e.NOTIFICATION_UNSUPPORTED_NETWORK = "Notification Unsupported Network View", e.FIAT_ON_RAMPS = "Fiat On-Ramps View", e.FIAT_OFF_RAMPS = "Fiat Off-Ramps View", e.MARKET_SENTIMENT_ARTICLES = "Market Sentiment Articles View", e.MARKET_SENTIMENT_POSTS = "Market Sentiment Posts View", e.DISCOVER = "Discover View", e))(Ko || {}),
      Xo = (e => (e.WALLET_CREATE_NEW_INITIATED = "Create New Wallet Initiated", e.WALLET_IMPORT_MNEMONIC_INITIATED = "Import Mnemonic Wallet Initiated", e.WALLET_IMPORT_QR_INITIATED = "Import QR Wallet Initiated", e.WALLET_IMPORT_LEDGER_INITIATED = "Import Ledger Wallet Initiated", e.WALLET_IMPORT_SOURCE_SELECTED = "Import Source Selected", e.WALLET_IMPORT_TW_METHOD_SELECTED = "Import Trust Wallet Method Selected", e.WALLET_CREATED = "Wallet Created", e.AUTHENTICATION_SETUP_INITIATED = "Authentication Setup Initiated", e.AUTHENTICATION_SETUP_COMPLETED = "Authentication Setup Completed", e.BIOMETRICS_SET = "Biometrics Set", e.BACKUP_SEED_PHRASE_COMPLETED = "Backup Seed Phrased Completed", e.PASSWORD_CREATED = "Password Created", e.PASSWORD_VERIFIED = "Password Verified", e.TOGGLE_DATA_ANALYTICS = "Toggle Data Analytics", e.TOGGLE_DEFAULT_WALLET = "Toggle Default Wallet", e.TOGGLE_SIDEPANEL = "Toggle Sidepanel", e.TOGGLE_ONE_TAP = "Toggle OneTap", e.TOGGLE_BIOMETRICS = "Toggle Biometrics", e.RESET_WALLET = "Reset Wallet", e.COPY_ADDRESS = "Copy Address", e.SUB_ACCOUNT_CREATE = "Sub Account Create", e.SWITCH_WALLET = "Switch Wallet", e.OPEN_FULLSCREEN = "Open Fullscreen", e.OPEN_SIDEPANEL = "Open Sidepanel", e.REFRESH_BALANCE = "Refresh Balance", e.WALLET_HAS_BALANCE = "Wallet Has Balance", e.WALLET_LOCK = "Wallet Lock", e.WALLET_REVEAL_SEED_PHRASE = "Wallet Reveal Seed Phrase", e.CHANGE_WALLET_NAME = "Change Wallet Name", e.REMOVE_WALLET = "Remove Wallet", e.REMOVE_ACCOUNT = "Remove Account", e.CHANGE_LANGUAGE = "Change Language", e.CHANGE_COLOR_MODE = "Change Color Mode", e.CHANGE_BASE_CURRENCY = "Change Base Currency", e.REMOVE_BLACKLISTED_DAPP = "Remove Blacklisted DApp", e.REVOKE_DAPP_ACCESS = "Revoke DApp Access", e.REVOKE_ALL_DAPP_ACCESS = "Revoke All DApp Access", e.ADD_CUSTOM_NETWORK = "Add Custom Network", e.SWITCH_NETWORK = "Switch Network", e.SWITCH_FILTERING_NETWORK = "Switch Filtering Network", e.REMOVE_CUSTOM_NETWORK = "Remove Custom Network", e.TOGGLE_TRANSACTION_NONCE = "Toggle Transaction Nonce Setting", e.TOGGLE_TESTNETS = "Toggle Testnets Setting", e.TOGGLE_ADVANCED_GAS_CONTROLS = "Toggle Advanced Gas Controls Setting", e.TOGGLE_ADVANCED_TRANSACTION_DATA = "Toggle Advanced Transaction Data Setting", e.TOGGLE_PUSH_NOTIFICATIONS = "Toggle Push Notifications", e.UPDATE_PUSH_NOTIFICATIONS_TOPICS = "Update Topics of Push Notifications", e.TOGGLE_HOMESCREEN_ASSET_VISIBILITY = "Toggle Homescreen Asset Visibility", e.ADD_CUSTOM_ASSET = "Add Custom Asset", e.SWAP_TRANSACTION = "Swap Transaction", e.SWAP_APPROVAL_TRANSACTION = "Swap Approval Transaction", e.HOT_TOKEN_SELECTED = "Hot Token Selected", e.HOT_TOKEN_SWAP_INTENT_INITIATED = "Hot Token Swap Intent Initiated", e.HOME_CARD_CARD_CLICK = "home_card:card_click", e.SECURITY_SCANNER_RISK_ACTION = "Security Scanner Risk Action", e.EARN_NATIVE_STAKING_BANNER = "Earn Native Staking Banner", e.EARN_TRANSACTION = "Earn Transaction", e.SEND_CRYPTO_TRANSACTION = "Send Crypto Transaction", e.SEND_NFT_TRANSACTION = "Send NFT Transaction", e.SEND_REGISTER_TOKEN_TRANSACTION = "Send Register Token Transaction", e.SEND_TRUST_LINE_TRANSACTION = "Send Trust Line Transaction", e.RECEIVE_CEX_FUNDING_CLICK = "Receive Cex Funding Click", e.FUND_BUY_CRYPTO_CLICK = "Fund Buy Crypto Click", e.FUND_CEX_DEPOSIT_CLICK = "Fund Cex Deposit Click", e.FUND_RECEIVE_CRYPTO_CLICK = "Fund Receive Crypto Click", e.FUND_BUY_LOCALLY_CLICK = "Fund Buy Locally Click", e.FUND_CEX_DEPOSIT_SUCCESS = "Fund Cex Deposit Success", e.FUND_CEX_PLATFORM_SELECT = "Fund Cex Platform Select", e.FUND_CEX_QR_RETURN_HOME = "Fund Cex QR Return Home", e.CONNECT_DAPP = "Connect DApp", e.SIGN_MESSAGE = "Sign Message", e.APPROVE_ASSET = "Approve Asset", e.GIVE_ENCRYPTED_PUBLIC_KEY = "Give Encrypted Public Key", e.SIGN_RAW_TRANSACTION = "Sign Raw Transaction", e.UNLOCK = "Unlock", e.CLICK_MARKET_SENTIMENT_ARTICLE = "Click Market Sentiment Article", e.CLICK_MARKET_SENTIMENT_POST = "Click Market Sentiment Post", e.DISCOVER_DAPP_CLICK = "Discover DApp Click", e.NAVIGATION_TAB_CLICK = "Navigation Tab Click", e.SAVE_ADDRESS_BOOK_WALLET = "Save Address Book Wallet", e.REVEAL_PRIVATE_KEY = "Reveal Private Key", e.TOGGLE_DASHBOARD_BALANCE = "Toggle Dashboard Balance", e.TOKEN_SCANNER_POPUP_OPENED = "Token Scanner Popup Opened", e.TOKEN_SCANNER_SWAP_CLICKED = "Token Scanner Swap Clicked", e.TOKEN_SCANNER_TOGGLED = "Token Scanner Toggled", e.TOKEN_SCANNER_TOKEN_SELECTED = "Token Scanner Token Selected", e.SEND_TRONIFY_TRANSACTION_TRX_GAS_CREATED = "send_tronify_transaction_trx_gas_created", e.SEND_TRONIFY_TRANSACTION_USDT_GAS_CREATED = "send_tronify_transaction_usdt_gas_created", e))(Xo || {}),
      Jo = (e => (e.INTERNAL = "internal", e.EXTERNAL = "external", e))(Jo || {}),
      Qo = (e => (e.TOTAL_ACCOUNTS_OWNED = "totalAccountsOwned", e.ONBOARDING_AUTH_TYPE = "onboardingAuthType", e.ONBOARDING_SETUP_TYPE = "onboardingSetupType", e.ONBOARDING_SELECTED_WALLET = "onboardingSelectedWallet", e.ONBOARDING_WALLET_TYPE = "onboardingWalletType", e))(Qo || {}),
      ei = (e => (e.ALPHA_TOKENS = "alpha_tokens", e.POPULAR_TOKENS = "popular_tokens", e.TOP_MOVERS = "top_movers", e.EARN = "earn", e))(ei || {}),
      ti = Object.defineProperty,
      ni = Object.defineProperties,
      ri = Object.getOwnPropertyDescriptors,
      oi = Object.getOwnPropertySymbols,
      ii = {}.hasOwnProperty,
      ai = {}.propertyIsEnumerable,
      si = (e, t, n) => t in e ? ti(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
      }) : e[t] = n,
      li = (e, t) => {
        for (var n in t || (t = {})) ii.call(t, n) && si(e, n, t[n]);
        if (oi)
          for (var n of oi(t)) ai.call(t, n) && si(e, n, t[n]);
        return e
      },
      ci = (e, t) => ni(e, ri(t)),
      ui = (e, t, n) => new Promise((r, o) => {
        var i = e => {
            try {
              s(n.next(e))
            } catch (e) {
              o(e)
            }
          },
          a = e => {
            try {
              s(n.throw(e))
            } catch (e) {
              o(e)
            }
          },
          s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        s((n = n.apply(e, t)).next())
      });
    let fi = null,
      di = null,
      hi = null,
      pi = null,
      mi = "en",
      gi = {},
      yi = !1,
      vi = null,
      bi = 0;
    const ki = new Map;
    let wi = null;

    function xi() {
      fi && (fi.remove(), fi = null), di = null, hi && (clearTimeout(hi), hi = null), pi && (clearTimeout(pi), pi = null), wi && (ki.delete(wi), wi = null, Me.debug("Token Scanner: Cleared similar tokens cache for", wi))
    }

    function Ci() {
      pi && clearTimeout(pi), pi = setTimeout(() => {
        xi()
      }, 200)
    }

    function Si(e, t, n) {
      return ui(this, null, function*() {
        if (!fi) return;
        const r = rn(e);
        if (!r) return void Me.error("Token Scanner: No cached metadata for similar tokens list");
        const o = r.key;
        wi = o;
        const i = ci(li({}, t), {
            isRecent: !0
          }),
          a = [i, ...[, , , , , ].fill(null).map((e, t) => ({
            name: "",
            symbol: "",
            chainName: "",
            chainId: "",
            logo: "",
            price: null,
            change24h: null,
            marketCap: null,
            volume24h: null,
            assetId: "loading-" + t,
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
          l = ki.get(o);
        if (!l) {
          fi.innerHTML = (0, fn.F0)((0, un.jsx)(Bo, {
            locale: mi,
            messages: gi,
            children: (0, un.jsx)(Yo, {
              token: s,
              isLoading: !1,
              similarTokens: a
            })
          }));
          const e = fi.querySelector(".trust-token-popup-container");
          e && e.classList.add("trust-token-list-view")
        }
        let c;
        if (l) Me.debug("Token Scanner: Using cached similar tokens data for " + o), c = l.map(e => ci(li({}, e), {
          isRecent: vi === e.assetId
        }));
        else try {
          const e = yield n.emit(w.GET_SIMILAR_TOKENS, {
            symbol: o
          });
          if (!e || !e.success || !e.data) return void Me.error("Token Scanner: Failed to fetch similar tokens");
          c = e.data.map(e => ci(li({}, e), {
            isRecent: vi === e.assetId
          })), c = c.filter(e => e.assetId !== i.assetId), c = [i, ...c], ki.set(o, c), Me.debug("Token Scanner: Cached similar tokens data for " + o)
        } catch (e) {
          return void Me.error("Token Scanner: Failed to fetch similar tokens:", e)
        }
        if (!fi) return;
        fi.innerHTML = (0, fn.F0)((0, un.jsx)(Bo, {
          locale: mi,
          messages: gi,
          children: (0, un.jsx)(Yo, {
            token: s,
            isLoading: !1,
            similarTokens: c
          })
        }));
        const u = fi.querySelector(".trust-token-popup-container");
        u && u.classList.add("trust-token-list-view");
        const f = fi.querySelector(".trust-token-list-scroll");
        f && f.addEventListener("wheel", e => {
          const t = e,
            n = t.currentTarget,
            r = 0 === n.scrollTop,
            o = n.scrollTop + n.clientHeight >= n.scrollHeight;
          (t.deltaY > 0 && !o || 0 > t.deltaY && !r) && t.stopPropagation()
        }), fi.querySelectorAll(".trust-token-list-row").forEach((e, t) => {
          const r = c[t];
          r && e.addEventListener("click", e => {
            e.preventDefault(), e.stopPropagation(), Me.debug("Token Scanner: Similar token clicked:", r), r.isRecent || Zt(Xo.TOKEN_SCANNER_TOKEN_SELECTED, {
                assetSymbol: r.symbol,
                assetId: r.assetId,
                chainName: r.chainName,
                source: "similar_tokens_list"
              }),
              function(e, t, n, r, o) {
                if (!fi) return;
                vi = r.assetId;
                const i = {
                  symbol: e,
                  name: t,
                  price: $t(r.price),
                  change24h: Gt(r.change24h),
                  marketCap: qt(r.marketCap),
                  volume24h: Yt(r.volume24h),
                  logo: r.logo,
                  assetId: r.assetId,
                  chainId: r.chainId,
                  chainName: n
                };
                fi.innerHTML = (0, fn.F0)((0, un.jsx)(Bo, {
                  locale: mi,
                  messages: gi,
                  children: (0, un.jsx)(Yo, {
                    token: i,
                    isLoading: !1,
                    similarTokensCount: bi
                  })
                }));
                const a = fi.querySelector(".trust-token-popup-container");
                a && a.classList.remove("trust-token-list-view");
                const s = fi.querySelector(".trust-token-swap-button");
                s && s.addEventListener("click", t => ui(null, null, function*() {
                  t.preventDefault(), t.stopPropagation();
                  const n = yield o.emit(w.OPEN_SWAP_PAGE, {
                    assetId: r.assetId
                  });
                  n && n.success && (Zt(Xo.TOKEN_SCANNER_SWAP_CLICKED, {
                    assetSymbol: e,
                    assetId: r.assetId
                  }), xi())
                }));
                const l = fi.querySelector(".trust-token-similar-button");
                l && l.addEventListener("click", i => {
                  i.preventDefault(), i.stopPropagation(), wi ? Si(wi, {
                    symbol: e,
                    name: t,
                    chainName: n,
                    chainId: r.chainId,
                    logo: r.logo,
                    price: r.price,
                    change24h: r.change24h,
                    marketCap: r.marketCap,
                    volume24h: r.volume24h,
                    assetId: r.assetId,
                    networkName: r.networkName
                  }, o) : Me.error("Token Scanner: No cache key available for similar tokens")
                });
                const c = fi.querySelector(".trust-token-menu-button");
                c && Ti(c, o)
              }(r.symbol, r.name, r.networkName, {
                price: r.price,
                change24h: r.change24h,
                marketCap: r.marketCap,
                volume24h: r.volume24h,
                logo: r.logo,
                assetId: r.assetId,
                chainId: r.chainId,
                networkName: r.networkName
              }, n)
          })
        });
        const d = fi.querySelector(".trust-token-menu-button");
        d && Ti(d, n)
      })
    }

    function Ti(e, t) {
      e.addEventListener("click", e => {
        e.preventDefault(), e.stopPropagation();
        const n = fi?.querySelector(".trust-token-overlay"),
          r = fi?.querySelector(".trust-token-menu-popup");
        if (n && r) return n.remove(), void r.remove();
        const o = document.createElement("div");
        o.className = "trust-token-overlay", o.addEventListener("click", e => {
          var t;
          e.preventDefault(), e.stopPropagation(), o.remove(), null == (t = fi?.querySelector(".trust-token-menu-popup")) || t.remove()
        });
        const i = gi["token-scanner.menu.allow-ticker-widget"] || gi["settings.token-scanner-enable"] || "Allow ticker widget on X",
          a = document.createElement("div");
        a.className = "trust-token-menu-popup", a.innerHTML = `\n      <div class="trust-token-menu-item">\n        <span class="trust-token-menu-item-text">${i}</span>\n        <button class="trust-token-toggle ${yi?"enabled":""}" aria-label="Toggle">\n          <div class="trust-token-toggle-thumb"></div>\n        </button>\n      </div>\n    `;
        const s = a.querySelector(".trust-token-toggle");
        s && s.addEventListener("click", e => ui(null, null, function*() {
          e.preventDefault(), e.stopPropagation(), yield function(e, t) {
            return ui(this, null, function*() {
              try {
                Me.debug("Token Scanner: Setting enabled state to", t);
                const n = yield e.emit(w.SET_TOKEN_SCANNER_ENABLED, {
                  enabled: t
                });
                n && n.success && (Me.debug("Token Scanner: Successfully set enabled state to", t), yi = t, Zt(Xo.TOKEN_SCANNER_TOGGLED, {
                  enabled: t
                }), t || (document.querySelectorAll(".trust-token-highlight").forEach(e => {
                  const t = e.parentNode;
                  if (t) {
                    const n = e.getAttribute("data-token-symbol");
                    if (n) {
                      const r = document.createTextNode(n);
                      t.replaceChild(r, e)
                    }
                  }
                }), en = new WeakSet, xi()))
              } catch (e) {
                Me.error("Token Scanner: Failed to handle toggle:", e)
              }
            })
          }(t, !yi)
        })), a.addEventListener("click", e => {
          e.stopPropagation()
        });
        const l = fi?.querySelector(".trust-token-popup-container");
        l && (l.appendChild(o), l.appendChild(a))
      })
    }

    function Fi(e, t) {
      return ui(this, null, function*() {
        var n;
        if (Me.debug("Token Scanner: Showing popup for", e), !fi || di !== t) {
          fi && (fi.remove(), fi = null);
          try {
            const r = zt();
            if (!r) return void Me.debug("Token Scanner: Trust Wallet channel not ready");
            const o = rn(e);
            if (!o || !o.assetId) return void Me.debug("Token Scanner: No cached metadata for", e);
            wi = o.key;
            const i = {
                symbol: e,
                name: o.name,
                price: "N/A",
                change24h: "N/A",
                marketCap: "N/A",
                volume24h: "N/A",
                logo: o.logo || "",
                assetId: o.assetId
              },
              a = document.createElement("div");
            a.className = "trust-token-popup", a.innerHTML = (0, fn.F0)((0, un.jsx)(Bo, {
                locale: mi,
                messages: gi,
                children: (0, un.jsx)(Yo, {
                  token: i,
                  isLoading: !0
                })
              })),
              function(e, t) {
                const n = t.getBoundingClientRect(),
                  r = window.pageYOffset || document.documentElement.scrollTop,
                  o = window.pageXOffset || document.documentElement.scrollLeft;
                e.style.cssText = `\n    position: absolute;\n    top: ${n.bottom+r+8}px;\n    left: ${n.left+o}px;\n    z-index: 10000;\n    pointer-events: auto;\n  `;
                const i = e.getBoundingClientRect(),
                  a = window.innerWidth,
                  s = window.innerHeight;
                i.right > a && (e.style.left = n.right + o - i.width + "px"), i.bottom > s && (e.style.top = n.top + r - i.height - 8 + "px")
              }(a, t),
              function(e) {
                e.addEventListener("mouseenter", () => {
                  pi && (clearTimeout(pi), pi = null)
                }), e.addEventListener("mouseleave", () => {
                  Ci()
                })
              }(a), document.body.appendChild(a), fi = a, di = t;
            const s = yield r.emit(w.GET_TOKEN_MARKET_DATA, {
              assetId: o.assetId
            });
            if (!s || !s.success || !s.data) {
              if (!fi || di !== t) return;
              const n = () => {
                fi && (fi.remove(), fi = null, di = null),
                  function(e) {
                    Xt.delete(e), Jt.delete(e), Qt.delete(e)
                  }(e), Fi(e, t)
              };
              fi.innerHTML = (0, fn.F0)((0, un.jsx)(Bo, {
                locale: mi,
                messages: gi,
                children: (0, un.jsx)(Yo, {
                  token: i,
                  hasError: !0
                })
              }));
              const r = fi.querySelector(".trust-token-retry-button");
              return void(r && r.addEventListener("click", e => {
                e.preventDefault(), e.stopPropagation(), n()
              }))
            }
            const {
              data: l
            } = s;
            if (!fi || di !== t) return;
            vi = l.assetId, Zt(Xo.TOKEN_SCANNER_POPUP_OPENED, {
              assetSymbol: l.symbol,
              assetId: l.assetId
            });
            let c = 0;
            try {
              const e = o.key,
                t = yield r.emit(w.GET_SIMILAR_TOKENS_COUNT, {
                  symbol: e
                });
              t && t.success && "number" == typeof t.count && (c = t.count, bi = c, Me.debug(`Token Scanner: Found ${c} similar tokens for ${e}`))
            } catch (e) {
              Me.error("Token Scanner: Failed to fetch similar tokens count:", e)
            }
            const u = {
              symbol: e,
              name: l.name,
              price: $t(o.price),
              change24h: Gt(l.change24h),
              marketCap: qt(l.marketCap),
              volume24h: Yt(l.volume24h),
              logo: null != (n = l.logo) ? n : "",
              assetId: l.assetId,
              chainId: l.blockchainId,
              chainName: l.name,
              networkName: o.networkName || l.name || "Unknown"
            };
            fi.innerHTML = (0, fn.F0)((0, un.jsx)(Bo, {
              locale: mi,
              messages: gi,
              children: (0, un.jsx)(Yo, {
                token: u,
                isLoading: !1,
                similarTokensCount: c
              })
            }));
            const f = fi.querySelector(".trust-token-swap-button");
            f && f.addEventListener("click", e => ui(null, null, function*() {
              e.preventDefault(), e.stopPropagation();
              const t = yield r.emit(w.OPEN_SWAP_PAGE, {
                assetId: l.assetId
              });
              t && t.success && (Zt(Xo.TOKEN_SCANNER_SWAP_CLICKED, {
                assetSymbol: l.symbol,
                assetId: l.assetId
              }), xi())
            }));
            const d = fi.querySelector(".trust-token-similar-button");
            d && d.addEventListener("click", t => {
              var n;
              t.preventDefault(), t.stopPropagation(), Si(e, {
                symbol: e,
                name: l.name,
                chainName: l.name,
                chainId: l.blockchainId,
                logo: null != (n = l.logo) ? n : "",
                price: o.price,
                change24h: l.change24h,
                marketCap: l.marketCap,
                volume24h: l.volume24h,
                assetId: l.assetId,
                networkName: o.networkName || l.name || "Unknown"
              }, r)
            });
            const h = fi.querySelector(".trust-token-menu-button");
            h && Ti(h, r)
          } catch (e) {
            Me.error("Token Scanner: Failed to show popup:", e)
          }
        }
      })
    }
    var Ai = (e, t, n) => new Promise((r, o) => {
      var i = e => {
          try {
            s(n.next(e))
          } catch (e) {
            o(e)
          }
        },
        a = e => {
          try {
            s(n.throw(e))
          } catch (e) {
            o(e)
          }
        },
        s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
      s((n = n.apply(e, t)).next())
    });

    function Li(e, t, n, r) {
      let o;
      const i = new Promise(e => {
        o = setTimeout(() => {
          Me.warn(`Token Scanner: ${r} timed out after ${t}ms, using fallback value`), e(n)
        }, t)
      });
      return Promise.race([e.finally(() => clearTimeout(o)), i])
    }
    Me.debug("Token Scanner: Script loaded, starting init..."),
      function() {
        return Ai(this, null, function*() {
          Me.debug("Token Scanner: Starting initialization...");
          const e = yield function() {
            return Ai(this, null, function*() {
              try {
                const e = zt();
                if (!e) return Me.debug("Token Scanner: Trust Wallet channel not ready, feature disabled"), !1;
                Me.debug("Token Scanner: Checking feature flag...");
                const t = yield Li(e.emit(w.GET_FEATURE_FLAG, {
                  experiment: m
                }), 3e3, null, "GET_FEATURE_FLAG");
                return t && "boolean" == typeof t.enabled ? (Me.debug("Token Scanner: Feature flag response:", t), t.enabled) : (Me.debug("Token Scanner: Invalid feature flag response, using default"), !1)
              } catch (e) {
                return Me.error("Token Scanner: Feature flag check failed:", e), !1
              }
            })
          }();
          if (Me.debug("Token Scanner: Feature enabled?", e), !e) return void Me.debug("Token Scanner: Feature disabled, exiting");
          const t = function() {
            const e = window.location.hostname.toLowerCase();
            return "x.com" === e || "twitter.com" === e
          }();
          if (Me.debug("Token Scanner: On X platform?", t, "URL:", window.location.href), !t) return void Me.debug("Token Scanner: Not on X platform, exiting");
          Me.debug("Token Scanner: Waiting for page to be ready..."), yield new Promise(e => setTimeout(e, 1e3)), Me.debug("Token Scanner: Fetching locale and translations..."), yield function() {
            return Ai(this, null, function*() {
              try {
                const e = zt();
                if (!e) return void Me.debug("Token Scanner: Trust Wallet channel not ready for locale fetch");
                Me.debug("Token Scanner: Fetching locale and translations...");
                const t = yield Li(e.emit(w.GET_TOKEN_SCANNER_I18N, {}), 3e3, null, "GET_TOKEN_SCANNER_I18N");
                t && t.locale && t.messages && (function(e, t) {
                  mi = e, gi = t
                }(t.locale, t.messages), Me.debug("Token Scanner: Locale set to:", t.locale))
              } catch (e) {
                Me.error("Token Scanner: Failed to fetch locale:", e)
              }
            })
          }();
          const n = yield function() {
            return Ai(this, null, function*() {
              try {
                const e = zt();
                if (!e) return Me.debug("Token Scanner: Trust Wallet channel not ready for user enabled check"), !0;
                Me.debug("Token Scanner: Checking user enabled state...");
                const t = yield Li(e.emit(w.GET_TOKEN_SCANNER_ENABLED, {}), 3e3, null, "GET_TOKEN_SCANNER_ENABLED");
                return t && "boolean" == typeof t.enabled ? (Me.debug("Token Scanner: User enabled state:", t.enabled), t.enabled) : (Me.debug("Token Scanner: Invalid response, defaulting to enabled"), !0)
              } catch (e) {
                return Me.error("Token Scanner: Failed to check user enabled state:", e), !0
              }
            })
          }();
          Me.debug("Token Scanner: User enabled state:", n),
            function(e) {
              yi = e
            }(n), n ? (Me.debug("Token Scanner: Starting page scan..."), cn(), Me.debug("Token Scanner: Page scan completed"), document.addEventListener("mouseover", e => {
              const t = e.target,
                n = t.classList.contains("trust-token-highlight") ? t : t.closest(".trust-token-highlight");
              if (n) {
                const e = n.getAttribute("data-token-symbol");
                e && function(e, t) {
                  pi && (clearTimeout(pi), pi = null), hi && clearTimeout(hi), hi = setTimeout(() => {
                    Fi(e, t)
                  }, 300)
                }(e, n)
              }
            }), document.addEventListener("mouseout", e => {
              const t = e.target;
              (t.classList.contains("trust-token-highlight") ? t : t.closest(".trust-token-highlight")) && (hi && (clearTimeout(hi), hi = null), Ci())
            }), document.addEventListener("click", e => {
              const t = e.target;
              !t.classList.contains("trust-token-highlight") && !t.closest(".trust-token-popup") && xi()
            }), new MutationObserver(e => {
              yi && e.some(e => Array.from(e.addedNodes).some(e => {
                var t, n;
                return !(e instanceof HTMLElement && (e.classList.contains("trust-token-highlight") || e.classList.contains("trust-token-popup")) || null != (t = e.parentElement) && t.classList.contains("trust-token-highlight") || null != (n = e.parentElement) && n.closest(".trust-token-popup"))
              })) && (tn && clearTimeout(tn), tn = setTimeout(() => {
                cn()
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
