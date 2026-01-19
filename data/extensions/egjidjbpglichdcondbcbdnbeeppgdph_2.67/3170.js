try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.i = e.i || {}, e.i[t] = "ed816356-5960-4d4c-9849-196ea491dac3", e.h = "sentry-dbid-ed816356-5960-4d4c-9849-196ea491dac3")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3170], {
    9505: (e, t, l) => {
      l.d(t, {
        R: () => h
      });
      var n = l(15192),
        i = l(96540),
        r = l(6442),
        a = Object.defineProperty,
        o = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        u = {}.propertyIsEnumerable,
        p = (e, t, l) => t in e ? a(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        v = (e, t) => {
          for (var l in t || (t = {})) d.call(t, l) && p(e, l, t[l]);
          if (c)
            for (var l of c(t)) u.call(t, l) && p(e, l, t[l]);
          return e
        },
        f = (e, t) => o(e, s(t));
      const h = ({
        value: e,
        min: t,
        max: l
      }) => {
        const {
          formatMessage: a
        } = (0, r.A)(), [o, s] = (0, i.useState)({
          isValid: !1,
          number: !1,
          min: !1,
          max: !1
        });
        (0, i.useEffect)(() => {
          s(v({}, (({
            value: e,
            min: t,
            max: l
          }) => {
            const i = {
              number: !1,
              min: !1,
              max: !1
            };
            if (!e) return f(v({}, i), {
              isValid: !1
            });
            try {
              const r = (0, n.A)(e);
              i.number = !0, i.min = typeof t >= "u" || r.gte((0, n.A)(t)), i.max = typeof l >= "u" || r.lte((0, n.A)(l))
            } catch {} finally {
              return f(v({}, i), {
                isValid: Object.values(i).every(e => !!e)
              })
            }
          })({
            value: e,
            min: t,
            max: l
          })))
        }, [e, t, l]);
        const c = (0, i.useMemo)(() => o.number ? o.min ? o.max ? void 0 : a({
          id: "validate-amount.max"
        }, {
          number: l
        }) : a({
          id: "validate-amount.min"
        }, {
          number: t
        }) : a({
          id: "validate-amount.generic"
        }), [a, o, t]);
        return {
          isValid: o.isValid,
          error: c
        }
      }
    },
    93170: (e, t, l) => {
      l.r(t), l.d(t, {
        App: () => Pt,
        default: () => Et
      });
      var n = l(74848),
        i = l(47767),
        r = l(15747),
        a = l(8457),
        o = l(29584),
        s = l(26264),
        c = l(23207),
        d = l(63369),
        u = l(9505),
        p = l(38221),
        v = l.n(p),
        f = l(96540),
        h = l(6442),
        m = l(89408),
        b = l(22670),
        y = l(29305),
        x = l(64145),
        g = Object.defineProperty,
        k = Object.defineProperties,
        w = Object.getOwnPropertyDescriptors,
        O = Object.getOwnPropertySymbols,
        N = {}.hasOwnProperty,
        I = {}.propertyIsEnumerable,
        C = (e, t, l) => t in e ? g(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        T = (e, t) => {
          for (var l in t || (t = {})) N.call(t, l) && C(e, l, t[l]);
          if (O)
            for (var l of O(t)) I.call(t, l) && C(e, l, t[l]);
          return e
        },
        P = (e, t) => k(e, w(t)),
        E = (e, t, l) => new Promise((n, i) => {
          var r = e => {
              try {
                o(l.next(e))
              } catch (e) {
                i(e)
              }
            },
            a = e => {
              try {
                o(l.throw(e))
              } catch (e) {
                i(e)
              }
            },
            o = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, a);
          o((l = l.apply(e, t)).next())
        });
      const L = e => E(null, [e], function*({
        value: e,
        blockchain: t,
        blockchainType: l,
        isAddingTokenManually: i
      }) {
        try {
          if (i) return {
            asset: null,
            isValid: yield x.YW.emit(b.A.VALIDATE_CONTRACT_ADDRESS_FORMAT, {
              address: e,
              network: t
            }),
            intlErrorParams: [{
              id: "input-contract-address.validation.manual.wrong-address"
            }, {}]
          };
          const r = yield(0, y.E)({
            address: e,
            blockchain: t,
            blockchainType: l
          }), a = yield x.YW.emit(m.A.VALIDATE_ASSET, r);
          return {
            asset: r,
            isValid: a.global,
            intlErrorParams: a.global ? null : [{
              id: "input-contract-address.validation.metadata"
            }, {
              a: e => (0, n.jsx)("a", {
                href: "https://support.trustwallet.com/support/home",
                target: "_blank",
                rel: "noopener nofollow noreferrer",
                children: e
              })
            }]
          }
        } catch {
          return {
            asset: null,
            isValid: !1,
            intlErrorParams: [{
              id: "input-contract-address.validation.not-found"
            }, {
              networkName: t.name
            }]
          }
        }
      });
      var S = l(9814),
        F = l(60380),
        j = l(63111),
        D = l(65512),
        M = l(52619),
        A = l(15351),
        V = l(65504),
        $ = l(16665),
        R = l(42201),
        B = l(4800),
        z = l(68632),
        U = l(88774),
        K = l(52114),
        Q = l(1279),
        H = l(77832),
        q = l(66737),
        G = l(16638),
        _ = l(40961),
        J = l(24867),
        W = l(1675),
        X = l(95060),
        Y = l(37786),
        Z = l(76339),
        ee = l(96992),
        te = l(3321),
        le = l(95015),
        ne = l(57575),
        ie = l(34424),
        re = l(13674),
        ae = l(28367),
        oe = l(74156),
        se = l(69821),
        ce = l(86942),
        de = l(98975);
      let ue = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

      function pe(e) {
        var t, l;
        let n = null != (t = e.innerText) ? t : "",
          i = e.cloneNode(!0);
        if (!(i instanceof HTMLElement)) return n;
        let r = !1;
        for (let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), r = !0;
        let a = r ? null != (l = i.innerText) ? l : "" : n;
        return ue.test(a) && (a = a.replace(ue, "")), a
      }

      function ve(e) {
        return [e.screenX, e.screenY]
      }
      var fe, he = l(92888),
        me = l(65448),
        be = l(10375),
        ye = l(82498),
        xe = l(15953),
        ge = l(13149),
        ke = l(9685),
        we = ((fe = we || {})[fe.First = 0] = "First", fe[fe.Previous = 1] = "Previous", fe[fe.Next = 2] = "Next", fe[fe.Last = 3] = "Last", fe[fe.Specific = 4] = "Specific", fe[fe.Nothing = 5] = "Nothing", fe);

      function Oe(e, t) {
        let l = t.resolveItems();
        if (0 >= l.length) return null;
        let n = t.resolveActiveIndex(),
          i = n ?? -1;
        switch (e.focus) {
          case 0:
            for (let e = 0; e < l.length; ++e)
              if (!t.resolveDisabled(l[e], e, l)) return e;
            return n;
          case 1:
            -1 === i && (i = l.length);
            for (let e = i - 1; e >= 0; --e)
              if (!t.resolveDisabled(l[e], e, l)) return e;
            return n;
          case 2:
            for (let e = i + 1; e < l.length; ++e)
              if (!t.resolveDisabled(l[e], e, l)) return e;
            return n;
          case 3:
            for (let e = l.length - 1; e >= 0; --e)
              if (!t.resolveDisabled(l[e], e, l)) return e;
            return n;
          case 4:
            for (let n = 0; n < l.length; ++n)
              if (t.resolveId(l[n], n, l) === e.id) return n;
            return n;
          case 5:
            return null;
          default:
            ! function(e) {
              throw Error("Unexpected object: " + e)
            }(e)
        }
      }
      var Ne = l(82599),
        Ie = l(41741),
        Ce = l(43660),
        Te = l(85897),
        Pe = l(2211),
        Ee = l(66206),
        Le = l(59124),
        Se = l(44586),
        Fe = l(90540),
        je = l(78302),
        De = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(De || {}),
        Me = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Me || {}),
        Ae = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Ae || {}),
        Ve = (e => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetOptionsElement = 8] = "SetOptionsElement", e))(Ve || {});

      function $e(e, t = e => e) {
        let l = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
          n = (0, Ie.wl)(t(e.options.slice()), e => e.dataRef.current.domRef.current),
          i = l ? n.indexOf(l) : null;
        return -1 === i && (i = null), {
          options: n,
          activeOptionIndex: i
        }
      }
      let Re = {
          1: e => e.dataRef.current.disabled || 1 === e.listboxState ? e : {
            ...e,
            activeOptionIndex: null,
            listboxState: 1,
            m: !1
          },
          0(e) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let t = e.activeOptionIndex,
              {
                isSelected: l
              } = e.dataRef.current,
              n = e.options.findIndex(e => l(e.dataRef.current.value));
            return -1 !== n && (t = n), {
              ...e,
              listboxState: 0,
              activeOptionIndex: t,
              m: !1
            }
          },
          2(e, t) {
            var l, n, i, r, a;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let o = {
              ...e,
              searchQuery: "",
              activationTrigger: null != (l = t.trigger) ? l : 1,
              m: !1
            };
            if (t.focus === we.Nothing) return {
              ...o,
              activeOptionIndex: null
            };
            if (t.focus === we.Specific) return {
              ...o,
              activeOptionIndex: e.options.findIndex(e => e.id === t.id)
            };
            if (t.focus === we.Previous) {
              let l = e.activeOptionIndex;
              if (null !== l) {
                let r = e.options[l].dataRef.current.domRef,
                  a = Oe(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                  });
                if (null !== a) {
                  let t = e.options[a].dataRef.current.domRef;
                  if ((null == (n = r.current) ? void 0 : n.previousElementSibling) === t.current || null === (null == (i = t.current) ? void 0 : i.previousElementSibling)) return {
                    ...o,
                    activeOptionIndex: a
                  }
                }
              }
            } else if (t.focus === we.Next) {
              let l = e.activeOptionIndex;
              if (null !== l) {
                let n = e.options[l].dataRef.current.domRef,
                  i = Oe(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                  });
                if (null !== i) {
                  let t = e.options[i].dataRef.current.domRef;
                  if ((null == (r = n.current) ? void 0 : r.nextElementSibling) === t.current || null === (null == (a = t.current) ? void 0 : a.nextElementSibling)) return {
                    ...o,
                    activeOptionIndex: i
                  }
                }
              }
            }
            let s = $e(e),
              c = Oe(t, {
                resolveItems: () => s.options,
                resolveActiveIndex: () => s.activeOptionIndex,
                resolveId: e => e.id,
                resolveDisabled: e => e.dataRef.current.disabled
              });
            return {
              ...o,
              ...s,
              activeOptionIndex: c
            }
          },
          3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let l = "" !== e.searchQuery ? 0 : 1,
              n = e.searchQuery + t.value.toLowerCase(),
              i = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + l).concat(e.options.slice(0, e.activeOptionIndex + l)) : e.options).find(e => {
                var t;
                return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n))
              }),
              r = i ? e.options.indexOf(i) : -1;
            return -1 === r || r === e.activeOptionIndex ? {
              ...e,
              searchQuery: n
            } : {
              ...e,
              searchQuery: n,
              activeOptionIndex: r,
              activationTrigger: 1
            }
          },
          4: e => e.dataRef.current.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : {
            ...e,
            searchQuery: ""
          },
          5: (e, t) => {
            let l = {
                id: t.id,
                dataRef: t.dataRef
              },
              n = $e(e, e => [...e, l]);
            return null === e.activeOptionIndex && e.dataRef.current.isSelected(t.dataRef.current.value) && (n.activeOptionIndex = n.options.indexOf(l)), {
              ...e,
              ...n
            }
          },
          6: (e, t) => {
            let l = $e(e, e => {
              let l = e.findIndex(e => e.id === t.id);
              return -1 !== l && e.splice(l, 1), e
            });
            return {
              ...e,
              ...l,
              activationTrigger: 1
            }
          },
          7: (e, t) => e.buttonElement === t.element ? e : {
            ...e,
            buttonElement: t.element
          },
          8: (e, t) => e.optionsElement === t.element ? e : {
            ...e,
            optionsElement: t.element
          }
        },
        Be = (0, f.createContext)(null);

      function ze(e) {
        let t = (0, f.useContext)(Be);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw Error.captureStackTrace && Error.captureStackTrace(t, ze), t
        }
        return t
      }
      Be.displayName = "ListboxActionsContext";
      let Ue = (0, f.createContext)(null);

      function Ke(e) {
        let t = (0, f.useContext)(Ue);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw Error.captureStackTrace && Error.captureStackTrace(t, Ke), t
        }
        return t
      }

      function Qe(e, t) {
        return (0, Te.Y)(t.type, Re, e, t)
      }
      Ue.displayName = "ListboxDataContext";
      let He = f.Fragment,
        qe = (0, f.createContext)(!1),
        Ge = Ee.Ac.RenderStrategy | Ee.Ac.Static,
        _e = f.Fragment,
        Je = (0, Ee.FX)(function(e, t) {
          var l;
          let n = (0, me.k)(),
            {
              value: i,
              defaultValue: r,
              form: a,
              name: o,
              onChange: s,
              by: c,
              invalid: d = !1,
              disabled: u = n || !1,
              horizontal: p = !1,
              multiple: v = !1,
              m: h = !1,
              ...m
            } = e;
          const b = p ? "horizontal" : "vertical";
          let y = (0, de.P)(t),
            x = (0, Y.K)(r),
            [g = (v ? [] : void 0), k] = (0, X.P)(i, s, x),
            [w, O] = (0, f.useReducer)(Qe, {
              dataRef: (0, f.createRef)(),
              listboxState: h ? 0 : 1,
              options: [],
              searchQuery: "",
              activeOptionIndex: null,
              activationTrigger: 1,
              optionsVisible: !1,
              buttonElement: null,
              optionsElement: null,
              m: h
            }),
            N = (0, f.useRef)({
              static: !1,
              hold: !1
            }),
            I = (0, f.useRef)(new Map),
            C = (0, W.t)(c),
            T = (0, f.useCallback)(e => (0, Te.Y)(P.mode, {
              1: () => g.some(t => C(t, e)),
              0: () => C(g, e)
            }), [g]),
            P = (0, f.useMemo)(() => ({
              ...w,
              value: g,
              disabled: u,
              invalid: d,
              mode: v ? 1 : 0,
              orientation: b,
              compare: C,
              isSelected: T,
              optionsPropsRef: N,
              listRef: I
            }), [g, u, d, v, w, I]);
          (0, Z.s)(() => {
            w.dataRef.current = P
          }, [P]);
          let E = 0 === P.listboxState;
          (0, ae.j)(E, [P.buttonElement, P.optionsElement], (e, t) => {
            var l;
            O({
              type: 1
            }), (0, Ie.Bm)(t, Ie.MZ.Loose) || (e.preventDefault(), null == (l = P.buttonElement) || l.focus())
          });
          let L = (0, f.useMemo)(() => ({
              open: 0 === P.listboxState,
              disabled: u,
              invalid: d,
              value: g
            }), [P, u, g, d]),
            S = (0, le.k)(e => {
              let t = P.options.find(t => t.id === e);
              t && $(t.dataRef.current.value)
            }),
            F = (0, le.k)(() => {
              if (null !== P.activeOptionIndex) {
                let {
                  dataRef: e,
                  id: t
                } = P.options[P.activeOptionIndex];
                $(e.current.value), O({
                  type: 2,
                  focus: we.Specific,
                  id: t
                })
              }
            }),
            j = (0, le.k)(() => O({
              type: 0
            })),
            D = (0, le.k)(() => O({
              type: 1
            })),
            M = (0, ee.L)(),
            A = (0, le.k)((e, t, l) => {
              M.dispose(), M.microTask(() => e === we.Specific ? O({
                type: 2,
                focus: we.Specific,
                id: t,
                trigger: l
              }) : O({
                type: 2,
                focus: e,
                trigger: l
              }))
            }),
            V = (0, le.k)((e, t) => (O({
              type: 5,
              id: e,
              dataRef: t
            }), () => O({
              type: 6,
              id: e
            }))),
            $ = (0, le.k)(e => (0, Te.Y)(P.mode, {
              0: () => k?.(e),
              1() {
                let t = P.value.slice(),
                  l = t.findIndex(t => C(t, e));
                return -1 === l ? t.push(e) : t.splice(l, 1), k?.(t)
              }
            })),
            R = (0, le.k)(e => O({
              type: 3,
              value: e
            })),
            B = (0, le.k)(() => O({
              type: 4
            })),
            z = (0, le.k)(e => {
              O({
                type: 7,
                element: e
              })
            }),
            U = (0, le.k)(e => {
              O({
                type: 8,
                element: e
              })
            }),
            K = (0, f.useMemo)(() => ({
              onChange: $,
              registerOption: V,
              goToOption: A,
              closeListbox: D,
              openListbox: j,
              selectActiveOption: F,
              selectOption: S,
              search: R,
              clearSearch: B,
              setButtonElement: z,
              setOptionsElement: U
            }), []),
            [Q, H] = (0, Fe.b0)({
              inherit: !0
            }),
            q = {
              ref: y
            },
            G = (0, f.useCallback)(() => {
              if (void 0 !== x) return k?.(x)
            }, [k, x]),
            _ = (0, Ee.Ci)();
          return f.createElement(H, {
            value: Q,
            props: {
              htmlFor: null == (l = P.buttonElement) ? void 0 : l.id
            },
            slot: {
              open: 0 === P.listboxState,
              disabled: u
            }
          }, f.createElement(be.St, null, f.createElement(Be.Provider, {
            value: K
          }, f.createElement(Ue.Provider, {
            value: P
          }, f.createElement(ge.El, {
            value: (0, Te.Y)(P.listboxState, {
              0: ge.Uw.Open,
              1: ge.Uw.Closed
            })
          }, null != o && null != g && f.createElement(ye.CL, {
            disabled: u,
            data: {
              [o]: g
            },
            form: a,
            onReset: G
          }), _({
            ourProps: q,
            theirProps: m,
            slot: L,
            defaultTag: He,
            name: "Listbox"
          }))))))
        }),
        We = (0, Ee.FX)(function(e, t) {
          var l;
          let n = Ke("Listbox.Button"),
            i = ze("Listbox.Button"),
            r = (0, f.useId)(),
            a = (0, xe.q)(),
            {
              id: o = a || "headlessui-listbox-button-" + r,
              disabled: s = n.disabled || !1,
              autoFocus: c = !1,
              ...d
            } = e,
            u = (0, de.P)(t, (0, be.Xc)(), i.setButtonElement),
            p = (0, be.TI)(),
            v = (0, le.k)(e => {
              switch (e.key) {
                case Se.D.Enter:
                  (0, Ce.q)(e.currentTarget);
                  break;
                case Se.D.Space:
                case Se.D.ArrowDown:
                  e.preventDefault(), (0, _.flushSync)(() => i.openListbox()), n.value || i.goToOption(we.First);
                  break;
                case Se.D.ArrowUp:
                  e.preventDefault(), (0, _.flushSync)(() => i.openListbox()), n.value || i.goToOption(we.Last)
              }
            }),
            h = (0, le.k)(e => {
              e.key === Se.D.Space && e.preventDefault()
            }),
            m = (0, le.k)(e => {
              var t;
              if ((0, ke.l)(e.currentTarget)) return e.preventDefault();
              0 === n.listboxState ? ((0, _.flushSync)(() => i.closeListbox()), null == (t = n.buttonElement) || t.focus({
                preventScroll: !0
              })) : (e.preventDefault(), i.openListbox())
            }),
            b = (0, le.k)(e => e.preventDefault()),
            y = (0, Fe.o2)([o]),
            x = (0, Le.MM)(),
            {
              isFocusVisible: g,
              focusProps: k
            } = (0, q.o)({
              autoFocus: c
            }),
            {
              isHovered: w,
              hoverProps: O
            } = (0, G.M)({
              isDisabled: s
            }),
            {
              pressed: N,
              pressProps: I
            } = (0, J.Z)({
              disabled: s
            }),
            C = (0, f.useMemo)(() => ({
              open: 0 === n.listboxState,
              active: N || 0 === n.listboxState,
              disabled: s,
              invalid: n.invalid,
              value: n.value,
              hover: w,
              focus: g,
              autofocus: c
            }), [n.listboxState, n.value, s, w, g, N, n.invalid, c]),
            T = (0, Ee.v6)(p(), {
              ref: u,
              id: o,
              type: (0, se.c)(e, n.buttonElement),
              "aria-haspopup": "listbox",
              "aria-controls": null == (l = n.optionsElement) ? void 0 : l.id,
              "aria-expanded": 0 === n.listboxState,
              "aria-labelledby": y,
              "aria-describedby": x,
              disabled: s || void 0,
              autoFocus: c,
              onKeyDown: v,
              onKeyUp: h,
              onKeyPress: b,
              onClick: m
            }, k, O, I);
          return (0, Ee.Ci)()({
            ourProps: T,
            theirProps: d,
            slot: C,
            defaultTag: "button",
            name: "Listbox.Button"
          })
        }),
        Xe = Fe.JU,
        Ye = (0, Ee.FX)(function(e, t) {
          var l, n;
          let i = (0, f.useId)(),
            {
              id: r = "headlessui-listbox-options-" + i,
              anchor: a,
              portal: o = !1,
              modal: s = !0,
              transition: c = !1,
              ...d
            } = e,
            u = (0, be.zn)(a),
            [p, v] = (0, f.useState)(null);
          u && (o = !0);
          let h = Ke("Listbox.Options"),
            m = ze("Listbox.Options"),
            b = (0, oe.g)(h.optionsElement),
            y = (0, ge.O_)(),
            [x, g] = (0, he.p)(c, p, null !== y ? (y & ge.Uw.Open) === ge.Uw.Open : 0 === h.listboxState);
          (0, re.O)(x, h.buttonElement, m.closeListbox);
          let k = !h.m && s && 0 === h.listboxState;
          (0, ce.K)(k, b);
          let w = !h.m && s && 0 === h.listboxState;
          (0, ne.v)(w, {
            allowed: (0, f.useCallback)(() => [h.buttonElement, h.optionsElement], [h.buttonElement, h.optionsElement])
          });
          let O = ! function(e, t) {
              let l = (0, f.useRef)({
                left: 0,
                top: 0
              });
              if ((0, Z.s)(() => {
                  if (!t) return;
                  let e = t.getBoundingClientRect();
                  e && (l.current = e)
                }, [e, t]), null == t || !e || t === document.activeElement) return !1;
              let n = t.getBoundingClientRect();
              return n.top !== l.current.top || n.left !== l.current.left
            }(0 !== h.listboxState, h.buttonElement) && x,
            N = function(e, t) {
              let [l, n] = (0, f.useState)(t);
              return !e && l !== t && n(t), e ? l : t
            }(x && 1 === h.listboxState, h.value),
            I = (0, le.k)(e => h.compare(N, e)),
            C = (0, f.useMemo)(() => {
              var e;
              if (null == u || null == (e = u?.to) || !e.includes("selection")) return null;
              let t = h.options.findIndex(e => I(e.dataRef.current.value));
              return -1 === t && (t = 0), t
            }, [u, h.options]),
            T = (() => {
              if (null == u) return;
              if (null === C) return {
                ...u,
                inner: void 0
              };
              let e = Array.from(h.listRef.current.values());
              return {
                ...u,
                inner: {
                  listRef: {
                    current: e
                  },
                  index: C
                }
              }
            })(),
            [P, E] = (0, be.UF)(T),
            L = (0, be.G3)(),
            S = (0, de.P)(t, u ? P : null, m.setOptionsElement, v),
            F = (0, ee.L)();
          (0, f.useEffect)(() => {
            var e;
            let t = h.optionsElement;
            t && 0 === h.listboxState && t !== (null == (e = (0, Pe.T)(t)) ? void 0 : e.activeElement) && t?.focus({
              preventScroll: !0
            })
          }, [h.listboxState, h.optionsElement]);
          let j = (0, le.k)(e => {
              var t, l;
              switch (F.dispose(), e.key) {
                case Se.D.Space:
                  if ("" !== h.searchQuery) return e.preventDefault(), e.stopPropagation(), m.search(e.key);
                case Se.D.Enter:
                  if (e.preventDefault(), e.stopPropagation(), null !== h.activeOptionIndex) {
                    let {
                      dataRef: e
                    } = h.options[h.activeOptionIndex];
                    m.onChange(e.current.value)
                  }
                  0 === h.mode && ((0, _.flushSync)(() => m.closeListbox()), null == (t = h.buttonElement) || t.focus({
                    preventScroll: !0
                  }));
                  break;
                case (0, Te.Y)(h.orientation, {
                  vertical: Se.D.ArrowDown,
                  horizontal: Se.D.ArrowRight
                }):
                  return e.preventDefault(), e.stopPropagation(), m.goToOption(we.Next);
                case (0, Te.Y)(h.orientation, {
                  vertical: Se.D.ArrowUp,
                  horizontal: Se.D.ArrowLeft
                }):
                  return e.preventDefault(), e.stopPropagation(), m.goToOption(we.Previous);
                case Se.D.Home:
                case Se.D.PageUp:
                  return e.preventDefault(), e.stopPropagation(), m.goToOption(we.First);
                case Se.D.End:
                case Se.D.PageDown:
                  return e.preventDefault(), e.stopPropagation(), m.goToOption(we.Last);
                case Se.D.Escape:
                  return e.preventDefault(), e.stopPropagation(), (0, _.flushSync)(() => m.closeListbox()), void(null == (l = h.buttonElement) || l.focus({
                    preventScroll: !0
                  }));
                case Se.D.Tab:
                  e.preventDefault(), e.stopPropagation(), (0, _.flushSync)(() => m.closeListbox()), (0, Ie.p9)(h.buttonElement, e.shiftKey ? Ie.BD.Previous : Ie.BD.Next);
                  break;
                default:
                  1 === e.key.length && (m.search(e.key), F.setTimeout(() => m.clearSearch(), 350))
              }
            }),
            D = null == (l = h.buttonElement) ? void 0 : l.id,
            M = (0, f.useMemo)(() => ({
              open: 0 === h.listboxState
            }), [h.listboxState]),
            A = (0, Ee.v6)(u ? L() : {}, {
              id: r,
              ref: S,
              "aria-activedescendant": null === h.activeOptionIndex || null == (n = h.options[h.activeOptionIndex]) ? void 0 : n.id,
              "aria-multiselectable": 1 === h.mode || void 0,
              "aria-labelledby": D,
              "aria-orientation": h.orientation,
              onKeyDown: j,
              role: "listbox",
              tabIndex: 0 === h.listboxState ? 0 : void 0,
              style: {
                ...d.style,
                ...E,
                "--button-width": (0, te.L)(h.buttonElement, !0).width
              },
              ...(0, he.B)(g)
            }),
            V = (0, Ee.Ci)();
          return f.createElement(je.ZL, {
            enabled: !!o && (e.static || x)
          }, f.createElement(Ue.Provider, {
            value: 1 === h.mode ? h : {
              ...h,
              isSelected: I
            }
          }, V({
            ourProps: A,
            theirProps: d,
            slot: M,
            defaultTag: "div",
            features: Ge,
            visible: O,
            name: "Listbox.Options"
          })))
        }),
        Ze = (0, Ee.FX)(function(e, t) {
          let l = (0, f.useId)(),
            {
              id: n = "headlessui-listbox-option-" + l,
              disabled: i = !1,
              value: r,
              ...a
            } = e,
            o = !0 === (0, f.useContext)(qe),
            s = Ke("Listbox.Option"),
            c = ze("Listbox.Option"),
            d = null !== s.activeOptionIndex && s.options[s.activeOptionIndex].id === n,
            u = s.isSelected(r),
            p = (0, f.useRef)(null),
            v = function(e) {
              let t = (0, f.useRef)(""),
                l = (0, f.useRef)("");
              return (0, le.k)(() => {
                let n = e.current;
                if (!n) return "";
                let i = n.innerText;
                if (t.current === i) return l.current;
                let r = function(e) {
                  let t = e.getAttribute("aria-label");
                  if ("string" == typeof t) return t.trim();
                  let l = e.getAttribute("aria-labelledby");
                  if (l) {
                    let e = l.split(" ").map(e => {
                      let t = document.getElementById(e);
                      if (t) {
                        let e = t.getAttribute("aria-label");
                        return "string" == typeof e ? e.trim() : pe(t).trim()
                      }
                      return null
                    }).filter(Boolean);
                    if (e.length > 0) return e.join(", ")
                  }
                  return pe(e).trim()
                }(n).trim().toLowerCase();
                return t.current = i, l.current = r, r
              })
            }(p),
            h = (0, ie.Y)({
              disabled: i,
              value: r,
              domRef: p,
              get textValue() {
                return v()
              }
            }),
            m = (0, de.P)(t, p, e => {
              e ? s.listRef.current.set(n, e) : s.listRef.current.delete(n)
            });
          (0, Z.s)(() => {
            if (!s.m && 0 === s.listboxState && d && 0 !== s.activationTrigger) return (0, Ne.e)().requestAnimationFrame(() => {
              var e, t;
              null == (t = null == (e = p.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                block: "nearest"
              })
            })
          }, [p, d, s.m, s.listboxState, s.activationTrigger, s.activeOptionIndex]), (0, Z.s)(() => {
            if (!o) return c.registerOption(n, h)
          }, [h, n, o]);
          let b = (0, le.k)(e => {
              var t;
              if (i) return e.preventDefault();
              c.onChange(r), 0 === s.mode && ((0, _.flushSync)(() => c.closeListbox()), null == (t = s.buttonElement) || t.focus({
                preventScroll: !0
              }))
            }),
            y = (0, le.k)(() => {
              if (i) return c.goToOption(we.Nothing);
              c.goToOption(we.Specific, n)
            }),
            x = function() {
              let e = (0, f.useRef)([-1, -1]);
              return {
                wasMoved(t) {
                  let l = ve(t);
                  return (e.current[0] !== l[0] || e.current[1] !== l[1]) && (e.current = l, !0)
                },
                update(t) {
                  e.current = ve(t)
                }
              }
            }(),
            g = (0, le.k)(e => {
              x.update(e), !i && (d || c.goToOption(we.Specific, n, 0))
            }),
            k = (0, le.k)(e => {
              x.wasMoved(e) && (i || d || c.goToOption(we.Specific, n, 0))
            }),
            w = (0, le.k)(e => {
              x.wasMoved(e) && (i || d && c.goToOption(we.Nothing))
            }),
            O = (0, f.useMemo)(() => ({
              active: d,
              focus: d,
              selected: u,
              disabled: i,
              selectedOption: u && o
            }), [d, u, i, o]),
            N = o ? {} : {
              id: n,
              ref: m,
              role: "option",
              tabIndex: !0 === i ? void 0 : -1,
              "aria-disabled": !0 === i || void 0,
              "aria-selected": u,
              disabled: void 0,
              onClick: b,
              onFocus: y,
              onPointerEnter: g,
              onMouseEnter: g,
              onPointerMove: k,
              onMouseMove: k,
              onPointerLeave: w,
              onMouseLeave: w
            },
            I = (0, Ee.Ci)();
          return !u && o ? null : I({
            ourProps: N,
            theirProps: a,
            slot: O,
            defaultTag: "div",
            name: "Listbox.Option"
          })
        }),
        et = (0, Ee.FX)(function(e, t) {
          let {
            options: l,
            placeholder: n,
            ...i
          } = e, r = {
            ref: (0, de.P)(t)
          }, a = Ke("ListboxSelectedOption"), o = (0, f.useMemo)(() => ({}), []), s = void 0 === a.value || null === a.value || 1 === a.mode && Array.isArray(a.value) && 0 === a.value.length, c = (0, Ee.Ci)();
          return f.createElement(qe.Provider, {
            value: !0
          }, c({
            ourProps: r,
            theirProps: {
              ...i,
              children: f.createElement(f.Fragment, null, n && s ? n : l)
            },
            slot: o,
            defaultTag: _e,
            name: "ListboxSelectedOption"
          }))
        }),
        tt = Object.assign(Je, {
          Button: We,
          Label: Xe,
          Options: Ye,
          Option: Ze,
          SelectedOption: et
        });
      const lt = ({
        options: e,
        selected: t,
        setSelected: l,
        label: i,
        testid: r
      }) => (0, n.jsxs)("div", {
        className: "w-full",
        children: [i && (0, n.jsx)(K.E, {
          children: i
        }), (0, n.jsx)(tt, {
          value: t,
          by: "id",
          onChange: l,
          children: (0, n.jsxs)("div", {
            className: "relative w-full mt-1",
            children: [(0, n.jsxs)(We, {
              "data-testid": r,
              className: "relative w-full cursor-default input-field title-text font-medium h-12",
              children: [(0, n.jsx)("span", {
                className: "block truncate",
                children: t.name
              }), (0, n.jsx)("span", {
                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                children: (0, n.jsx)(A.D, {
                  width: 20,
                  height: 20,
                  colorClass: "text-iconNormal"
                })
              })]
            }), (0, n.jsx)(H.e, {
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: (0, n.jsx)(Ye, {
                as: "ul",
                className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-bg3 py-1 shadow-lg focus:outline-none",
                children: e.map(e => (0, n.jsx)(Ze, {
                  as: "li",
                  "data-testid": r + "-option",
                  className: "relative cursor-default select-none px-4 py-2",
                  value: e,
                  children: ({
                    selected: t
                  }) => (0, n.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, n.jsx)("div", {
                      className: "flex flex-1",
                      children: (0, n.jsx)(K.E, {
                        type: Q.jK.TITLE,
                        theme: t ? Q.Il.BRAND : Q.Il.PRIMARY,
                        truncated: !0,
                        children: e.name
                      })
                    }), t && (0, n.jsx)("div", {
                      children: (0, n.jsx)(U.S, {
                        colorClass: "text-primary"
                      })
                    })]
                  })
                }, e.id))
              })
            })]
          })
        })]
      });
      var nt = l(75485),
        it = l(28398),
        rt = l(10537),
        at = l(15078);
      class ot extends Error {
        constructor(e) {
          super(e), this.name = "NetworkError", Object.setPrototypeOf(this, ot.prototype)
        }
      }
      var st = l(80179),
        ct = l(97286),
        dt = l(152),
        ut = l(32669),
        pt = l(19376),
        vt = l(73241);
      const ft = ({
        asset: e,
        blockchain: t
      }) => {
        var l;
        const {
          formatMessage: i
        } = (0, h.A)();
        return (0, n.jsx)(dt.Z, {
          theme: ut.R.NEUTRAL,
          noPadding: !0,
          children: (0, n.jsxs)("div", {
            className: "flex justify-between p-4 space-x-2 items-center",
            children: [(0, n.jsx)("div", {
              children: (0, n.jsx)(V.q, {
                name: e.name,
                src: e.iconUrl,
                network: e.address ? t : void 0
              })
            }), (0, n.jsxs)("div", {
              className: "flex flex-col flex-grow space-y-1",
              children: [(0, n.jsxs)("div", {
                className: "flex flex-row space-x-1",
                children: [(0, n.jsx)("div", {
                  children: (0, n.jsx)(K.E, {
                    type: Q.jK.SUBHEADER_16,
                    testid: "custom-asset-asset-name",
                    children: e.name
                  })
                }), (0, n.jsx)("div", {
                  children: e.type && (0, n.jsx)(pt.v, {
                    size: vt.V.SMALL,
                    theme: vt.x.SECONDARY,
                    testid: "custom-asset-asset-type",
                    children: e.type
                  })
                })]
              }), (0, n.jsx)("div", {
                children: (0, n.jsx)(K.E, {
                  type: Q.jK.SUBHEADER_14,
                  theme: Q.Il.UTILITY_1_OPACITY_1,
                  weight: Q.nG.NORMAL,
                  testid: "custom-asset-asset-network-name",
                  children: null != (l = t.displayName) ? l : t.name
                })
              })]
            }), (0, n.jsxs)("div", {
              className: "flex flex-col space-y-1 text-right",
              children: [(0, n.jsx)("div", {
                children: (0, n.jsx)(K.E, {
                  type: Q.jK.SUBHEADER_16,
                  testid: "custom-asset-asset-symbol",
                  children: e.symbol
                })
              }), (0, n.jsx)("div", {
                children: (0, n.jsx)(K.E, {
                  type: Q.jK.SUBHEADER_14,
                  theme: Q.Il.UTILITY_1_OPACITY_1,
                  weight: Q.nG.NORMAL,
                  testid: "custom-asset-asset-decimals",
                  children: i({
                    id: "input-contract-address.decimals"
                  }, {
                    decimals: e.decimals
                  })
                })
              })]
            })]
          })
        })
      };
      var ht = Object.getOwnPropertySymbols,
        mt = {}.hasOwnProperty,
        bt = {}.propertyIsEnumerable,
        yt = (e, t, l) => new Promise((n, i) => {
          var r = e => {
              try {
                o(l.next(e))
              } catch (e) {
                i(e)
              }
            },
            a = e => {
              try {
                o(l.throw(e))
              } catch (e) {
                i(e)
              }
            },
            o = e => e.done ? n(e.value) : Promise.resolve(e.value).then(r, a);
          o((l = l.apply(e, t)).next())
        });
      const xt = () => {
        const {
          blockchainId: e,
          blockchainType: t,
          contractAddress: l
        } = (0, i.g)(), {
          trackAnalytics: p
        } = (0, c.s)();
        if (!e) throw Error("Blockchain id is invalid.");
        if (!t) throw Error("Blockchain type is invalid.");
        const y = (0, rt.n)(),
          g = (0, at.I)(),
          k = (0, f.useMemo)(() => (0, r.rN)(e, t === it.l.CUSTOM, y, g), [e, t, y, g]);
        if (!k) throw Error(`Could not find network with blockchain ID "${e}".`);
        const {
          formatMessage: w
        } = (0, h.A)(), O = (0, i.Zp)(), [N, I] = (0, f.useState)(!1), [C, U] = (0, f.useState)(l ?? ""), [H, q] = (0, f.useState)(""), [G, _] = (0, f.useState)(""), [J, W] = (0, f.useState)(""), [X, Y] = (0, f.useState)(""), [Z, ee] = (0, f.useState)({
          decimals: !1
        }), [te, le] = (0, f.useState)(), ne = location.href.includes("manual");
        (0, d.K)({
          event: ne ? o.Un.CUSTOM_ASSET_ADD_ASSET_MANUALLY : o.Un.CUSTOM_ASSET_ADD_ASSET,
          props: null
        });
        const {
          data: ie
        } = (0, ct.I)({
          queryKey: ["tokens-map"],
          queryFn: () => x.YW.emit(b.A.FETCH_TOKEN_TYPES)
        }), re = (0, f.useMemo)(() => new Map(Object.entries(ie || []).filter(([e, t]) => !0)), [ie]).get(e), ae = (({
          value: e,
          blockchain: t,
          blockchainType: l,
          isAddingTokenManually: n
        }) => {
          const {
            formatMessage: i
          } = (0, h.A)(), [r, a] = (0, f.useState)({
            isValid: !1,
            isLoading: !1,
            asset: null
          }), o = (0, f.useRef)(!1), s = (0, f.useCallback)(v()(e => E(null, [e], function*({
            blockchain: e,
            value: t
          }) {
            o.current = !1;
            let r = {
              isValid: !1,
              asset: null
            };
            t && (r = yield L({
              value: t,
              blockchain: e,
              blockchainType: l,
              isAddingTokenManually: n
            })), !o.current && a(P(T({}, r), {
              error: r.isValid || !r.intlErrorParams ? void 0 : i(...r.intlErrorParams),
              isLoading: !1
            }))
          }), 200), [L, i]);
          return (0, f.useEffect)(() => (a(e => P(T({}, e), {
            isLoading: !0
          })), s({
            blockchain: t,
            value: e
          }), () => {
            s.cancel(), o.current = !0
          }), [s, t, e]), r
        })({
          value: C,
          blockchain: k,
          blockchainType: t,
          isAddingTokenManually: ne
        }), {
          asset: oe
        } = ae, se = ((e, t) => {
          var l = {};
          for (var n in e) mt.call(e, n) && 0 > t.indexOf(n) && (l[n] = e[n]);
          if (null != e && ht)
            for (var n of ht(e)) 0 > t.indexOf(n) && bt.call(e, n) && (l[n] = e[n]);
          return l
        })(ae, ["asset"]), ce = (0, S.u)({
          value: G
        }), de = (0, S.u)({
          value: J
        }), ue = (0, u.R)({
          value: X,
          min: 0,
          max: 32
        }), pe = ne ? se.isValid && ce.isValid && de.isValid && ue.isValid && (!re || !!te) : se.isValid, ve = (0, f.useMemo)(() => {
          if (ne) return {
            name: G,
            symbol: J,
            decimals: parseInt(X),
            blockchainId: k.id,
            address: C,
            balance: "0",
            isShownInHomeScreen: !0,
            isUserCustomAsset: !0,
            assetId: (0, nt.Gc)({
              coinId: k.coinId,
              address: C
            }) || "",
            type: te?.id
          }
        }, [ne, G, J, X, k, C, te?.id]), fe = (0, f.useCallback)(e => yt(null, null, function*() {
          if (e.preventDefault(), oe || ve) {
            I(!0), q("");
            try {
              const e = ne ? ve : oe;
              yield x.YW.emit(m.A.ADD_ASSET, {
                asset: e,
                blockchainType: t
              }), p({
                event: o.BQ.ADD_CUSTOM_ASSET,
                props: {
                  pageViewSource: ne ? o.Un.CUSTOM_ASSET_ADD_ASSET_MANUALLY : o.Un.CUSTOM_ASSET_ADD_ASSET,
                  assetName: e.name,
                  assetId: e.assetId,
                  blockchainId: e.blockchainId
                }
              }), O(s.b.DEFAULT)
            } catch (e) {
              q(e.name === ot.name ? "generic.network-error" : "add-asset.register-error")
            } finally {
              I(!1)
            }
          }
        }), [oe, t, ne, ve, O, p]);
        return (0, f.useEffect)(() => {
          oe && (_(oe.name), W(oe.symbol), Y(oe.decimals + ""), ee({
            decimals: !0
          }))
        }, [oe]), (0, n.jsxs)(B.LN, {
          children: [!ne && (0, n.jsx)(B.zY, {
            backAction: () => O(-1),
            title: w({
              id: "add-custom-asset.title"
            })
          }), (0, n.jsxs)(B.Gv, {
            children: [ne && (0, n.jsx)("div", {
              className: "flex my-11 justify-center",
              children: (0, n.jsx)(a.A, {})
            }), (0, n.jsxs)("div", {
              className: "flex h-full flex-col flex-1 " + (ne ? "bg-backgroundPrimary border border-line rounded p-6" : ""),
              children: [ne && (0, n.jsx)("div", {
                className: "text-center",
                children: (0, n.jsx)(K.E, {
                  type: Q.jK.HEADLINE,
                  children: w({
                    id: "add-custom-asset.title"
                  })
                })
              }), (0, n.jsxs)("div", {
                className: "flex flex-col items-center space-y-1 pt-2",
                children: [(0, n.jsx)(V.q, {
                  name: k.name,
                  src: k.iconUrl,
                  size: z.Y.LARGE
                }), (0, n.jsx)(K.E, {
                  theme: Q.Il.SECONDARY,
                  weight: Q.nG.NORMAL,
                  children: w({
                    id: "generic.on-network"
                  }, {
                    networkName: k.displayName || k.name
                  })
                })]
              }), (0, n.jsxs)("div", {
                className: "flex flex-col space-y-6 mt-6",
                children: [(0, n.jsx)("div", {
                  children: (0, n.jsx)($.S, {
                    testid: "custom-asset-address-input",
                    value: C,
                    onChange: e => {
                      q(""), U(e.target.value.trim()), ee({
                        decimals: !1
                      })
                    },
                    validation: se,
                    placeholder: w({
                      id: "input-contract-address.label"
                    }),
                    autoFocus: !0
                  })
                }), ne && (0, n.jsxs)(n.Fragment, {
                  children: [!!re && (0, n.jsx)(lt, {
                    testid: "custom-asset-type-select",
                    label: w({
                      id: "custom-asset.token-type"
                    }),
                    selected: te ?? {
                      id: Object.entries(re)[0][0],
                      name: Object.entries(re)[0][1].name
                    },
                    setSelected: e => le(e),
                    options: Object.entries(re).map(([e, t]) => {
                      var l;
                      return {
                        id: e,
                        name: null != (l = t.name) ? l : e
                      }
                    })
                  }), (0, n.jsx)("div", {
                    children: (0, n.jsx)($.S, {
                      testid: "custom-asset-name-input",
                      value: G,
                      onChange: e => _(e.target.value),
                      label: w({
                        id: "custom-asset.token-name"
                      }),
                      validation: ce
                    })
                  }), (0, n.jsx)("div", {
                    children: (0, n.jsx)($.S, {
                      testid: "custom-asset-symbol-input",
                      value: J,
                      onChange: e => W(e.target.value),
                      label: w({
                        id: "custom-asset.token-symbol"
                      }),
                      validation: de
                    })
                  }), (0, n.jsx)("div", {
                    children: (0, n.jsx)($.S, {
                      disabled: Z.decimals,
                      readOnly: Z.decimals,
                      testid: "custom-asset-decimals-input",
                      value: X,
                      type: R.Ih.NUMBER,
                      onChange: e => Y(e.target.value),
                      label: w({
                        id: "custom-asset.token-decimals"
                      }),
                      validation: ue
                    })
                  })]
                }), !ne && se.isValid && oe && (0, n.jsxs)("div", {
                  className: "flex flex-col items-center -mt-3",
                  children: [(0, n.jsxs)("div", {
                    className: "flex flex-col mb-4 *:-mb-[18px]",
                    children: [(0, n.jsx)(A.D, {
                      width: 24,
                      height: 24,
                      colorClass: "text-utility-1-opacity-3"
                    }), (0, n.jsx)(A.D, {
                      width: 24,
                      height: 24,
                      colorClass: "text-utility-1-opacity-2"
                    }), (0, n.jsx)(A.D, {
                      width: 24,
                      height: 24,
                      colorClass: "text-utility-1-opacity-1"
                    })]
                  }), (0, n.jsx)("div", {
                    className: "pb-3",
                    children: (0, n.jsx)(K.E, {
                      weight: Q.nG.NORMAL,
                      theme: Q.Il.UTILITY_1_OPACITY_1,
                      children: w({
                        id: "input-contract-address.confirmation"
                      })
                    })
                  }), (0, n.jsx)("div", {
                    className: "w-full",
                    children: (0, n.jsx)(ft, {
                      asset: oe,
                      blockchain: k
                    })
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: "flex justify-end flex-1 flex-col space-y-4 pt-6",
                children: [(0, n.jsx)(F.F, {
                  theme: j.Z.WARNING,
                  children: w({
                    id: "add-asset.warning"
                  }, {
                    b: e => (0, n.jsx)("span", {
                      className: "font-medium",
                      children: e
                    })
                  })
                }), H && (0, n.jsx)(F.F, {
                  theme: j.Z.ERROR,
                  children: w({
                    id: H
                  })
                }), !ne && C && (0, n.jsx)(D.$, {
                  testid: "custom-asset-add-token-manually-button",
                  theme: M.ry.TRANSPARENT,
                  onClick: () => yt(null, null, function*() {
                    yield(0, st.V3)(`${s.b.CUSTOM_ASSET_ADD_ASSET}/${t}/${k.id}/manual/${C}`)
                  }),
                  children: (0, n.jsx)(K.E, {
                    theme: Q.Il.PRIMARY_DEFAULT,
                    type: Q.jK.SUBHEADER_16,
                    children: w({
                      id: "add-asset.btn-add-token-manually"
                    })
                  })
                }), (0, n.jsx)(D.$, {
                  testid: "custom-asset-add-token-button",
                  onClick: fe,
                  disabled: !pe,
                  loading: N || se.isLoading,
                  children: w({
                    id: "add-asset.btn-add-asset"
                  })
                })]
              })]
            })]
          })]
        })
      };
      var gt = l(33055),
        kt = l(29251),
        wt = l(94893),
        Ot = l(41327);
      const Nt = ({
        name: e,
        iconUrl: t,
        onClick: l
      }) => (0, n.jsx)(wt.c, {
        onClick: l,
        children: (0, n.jsxs)("div", {
          className: "flex items-center justify-between py-2 px-4",
          children: [(0, n.jsxs)("div", {
            className: "flex items-center space-x-3",
            children: [(0, n.jsx)(V.q, {
              name: e,
              src: t,
              size: z.Y.MEDIUM,
              abstractFallback: !0
            }), (0, n.jsx)(K.E, {
              type: Q.jK.SUBHEADER_16,
              children: e
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(Ot.v, {
              width: 20,
              height: 20,
              colorClass: "text-utility-1-opacity-1"
            })
          })]
        })
      });
      var It = l(69275);
      const Ct = () => {
          const e = (0, i.Zp)(),
            {
              formatMessage: t
            } = (0, h.A)(),
            l = (0, gt.A)(),
            r = (0, rt.n)(!0),
            a = (0, at.I)(!0),
            o = (0, It.o)(),
            c = (0, f.useCallback)(e => !!o[e], [o]),
            d = (0, f.useMemo)(() => r.filter(e => {
              const t = l.type !== kt.S.HARDWARE && l.type !== kt.S.PRIVATE_KEY,
                n = c(e.coinId);
              return (t || n) && e.customTokensEnabled
            }), [r, l.type, c]);
          return (0, n.jsxs)("div", {
            className: "space-y-4",
            children: [d.map(t => {
              var l;
              return (0, n.jsx)(Nt, {
                name: null != (l = t.displayName) ? l : t.name,
                iconUrl: t.iconUrl,
                onClick: () => e(`${s.b.CUSTOM_ASSET_ADD_ASSET}/${it.l.MAIN}/${t.id}`)
              }, t.id)
            }), a.map(t => {
              var l;
              return (0, n.jsx)(Nt, {
                name: null != (l = t.displayName) ? l : t.name,
                iconUrl: t.iconUrl,
                onClick: () => e(`${s.b.CUSTOM_ASSET_ADD_ASSET}/${it.l.CUSTOM}/${t.id}`)
              }, t.id)
            })]
          })
        },
        Tt = () => {
          (0, d.K)({
            event: o.Un.CUSTOM_ASSET_SELECT_NETWORK,
            props: null
          });
          const {
            formatMessage: e
          } = (0, h.A)(), t = (0, i.Zp)(), l = (0, f.useCallback)(() => {
            t(s.b.MANAGE_CRYPTO)
          }, [t]);
          return (0, n.jsxs)(B.LN, {
            children: [(0, n.jsx)(B.zY, {
              backAction: l,
              title: e({
                id: "network.header"
              })
            }), (0, n.jsx)(B.Gv, {
              children: (0, n.jsx)(B.LO, {
                children: (0, n.jsx)(Ct, {})
              })
            })]
          })
        },
        Pt = () => (0, n.jsxs)(i.BV, {
          children: [(0, n.jsx)(i.qh, {
            path: "/select-network",
            element: (0, n.jsx)(Tt, {})
          }), (0, n.jsx)(i.qh, {
            path: "/add-asset/:blockchainType/:blockchainId",
            element: (0, n.jsx)(xt, {})
          }), (0, n.jsx)(i.qh, {
            path: "/add-asset/:blockchainType/:blockchainId/manual/:contractAddress?",
            element: (0, n.jsx)(xt, {})
          })]
        }),
        Et = Pt
    }
  }
]);
