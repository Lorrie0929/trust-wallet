"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3170], {
    9505: (e, t, l) => {
      l.d(t, {
        R: () => p
      });
      var n = l(15192),
        i = l(96540),
        r = (l.n(i), l(6442)),
        a = Object.defineProperty,
        o = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        u = {}.propertyIsEnumerable,
        v = (e, t, l) => t in e ? a(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        m = (e, t) => {
          for (var l in t || (t = {})) d.call(t, l) && v(e, l, t[l]);
          if (c)
            for (var l of c(t)) u.call(t, l) && v(e, l, t[l]);
          return e
        },
        h = (e, t) => o(e, s(t));
      const p = ({
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
          s(m({}, (({
            value: e,
            min: t,
            max: l
          }) => {
            const i = {
              number: !1,
              min: !1,
              max: !1
            };
            if (!e) return h(m({}, i), {
              isValid: !1
            });
            try {
              const r = (0, n.A)(e);
              i.number = !0, i.min = typeof t >= "u" || r.gte((0, n.A)(t)), i.max = typeof l >= "u" || r.lte((0, n.A)(l))
            } catch {} finally {
              return h(m({}, i), {
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
        App: () => Et,
        default: () => Lt
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
        v = l(38221),
        m = l.n(v),
        h = l(96540),
        p = l(6442),
        f = l(89408),
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
        P = (e, t) => {
          for (var l in t || (t = {})) N.call(t, l) && C(e, l, t[l]);
          if (O)
            for (var l of O(t)) I.call(t, l) && C(e, l, t[l]);
          return e
        },
        E = (e, t) => k(e, w(t)),
        L = (e, t, l) => new Promise((n, i) => {
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
      const S = e => L(null, [e], function*({
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
          }), a = yield x.YW.emit(f.A.VALIDATE_ASSET, r);
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
      var T = l(9814),
        F = l(62942),
        M = l(63111),
        j = l(65512),
        D = l(52619),
        A = l(15351),
        V = l(65504),
        $ = l(16665),
        R = l(42201),
        _ = l(4800),
        B = l(68632),
        z = l(88774),
        U = l(52114),
        K = l(1279),
        Q = l(77832),
        H = l(66737),
        q = l(16638),
        G = l(40961),
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

      function ve(e) {
        var t, l;
        let n = null != (t = e.innerText) ? t : "",
          i = e.cloneNode(!0);
        if (!(i instanceof HTMLElement)) return n;
        let r = !1;
        for (let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), r = !0;
        let a = r ? null != (l = i.innerText) ? l : "" : n;
        return ue.test(a) && (a = a.replace(ue, "")), a
      }

      function me(e) {
        return [e.screenX, e.screenY]
      }
      var he, pe = l(92888),
        fe = l(65448),
        be = l(10375),
        ye = l(82498),
        xe = l(15953),
        ge = l(13149),
        ke = l(9685),
        we = ((he = we || {})[he.First = 0] = "First", he[he.Previous = 1] = "Previous", he[he.Next = 2] = "Next", he[he.Last = 3] = "Last", he[he.Specific = 4] = "Specific", he[he.Nothing = 5] = "Nothing", he);

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
        Pe = l(85897),
        Ee = l(2211),
        Le = l(66206),
        Se = l(59124),
        Te = l(44586),
        Fe = l(90540),
        Me = l(78302),
        je = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {}),
        De = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(De || {}),
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
            i: !1
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
              i: !1
            }
          },
          2(e, t) {
            var l, n, i, r, a;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let o = {
              ...e,
              searchQuery: "",
              activationTrigger: null != (l = t.trigger) ? l : 1,
              i: !1
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
        _e = (0, h.createContext)(null);

      function Be(e) {
        let t = (0, h.useContext)(_e);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw Error.captureStackTrace && Error.captureStackTrace(t, Be), t
        }
        return t
      }
      _e.displayName = "ListboxActionsContext";
      let ze = (0, h.createContext)(null);

      function Ue(e) {
        let t = (0, h.useContext)(ze);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw Error.captureStackTrace && Error.captureStackTrace(t, Ue), t
        }
        return t
      }

      function Ke(e, t) {
        return (0, Pe.Y)(t.type, Re, e, t)
      }
      ze.displayName = "ListboxDataContext";
      let Qe = h.Fragment,
        He = (0, h.createContext)(!1),
        qe = Le.Ac.RenderStrategy | Le.Ac.Static,
        Ge = h.Fragment,
        Je = (0, Le.FX)(function(e, t) {
          var l;
          let n = (0, fe.m)(),
            {
              value: i,
              defaultValue: r,
              form: a,
              name: o,
              onChange: s,
              by: c,
              invalid: d = !1,
              disabled: u = n || !1,
              horizontal: v = !1,
              multiple: m = !1,
              i: p = !1,
              ...f
            } = e;
          const b = v ? "horizontal" : "vertical";
          let y = (0, de.P)(t),
            x = (0, Y.K)(r),
            [g = (m ? [] : void 0), k] = (0, X.P)(i, s, x),
            [w, O] = (0, h.useReducer)(Ke, {
              dataRef: (0, h.createRef)(),
              listboxState: p ? 0 : 1,
              options: [],
              searchQuery: "",
              activeOptionIndex: null,
              activationTrigger: 1,
              optionsVisible: !1,
              buttonElement: null,
              optionsElement: null,
              i: p
            }),
            N = (0, h.useRef)({
              static: !1,
              hold: !1
            }),
            I = (0, h.useRef)(new Map),
            C = (0, W.t)(c),
            P = (0, h.useCallback)(e => (0, Pe.Y)(E.mode, {
              1: () => g.some(t => C(t, e)),
              0: () => C(g, e)
            }), [g]),
            E = (0, h.useMemo)(() => ({
              ...w,
              value: g,
              disabled: u,
              invalid: d,
              mode: m ? 1 : 0,
              orientation: b,
              compare: C,
              isSelected: P,
              optionsPropsRef: N,
              listRef: I
            }), [g, u, d, m, w, I]);
          (0, Z.s)(() => {
            w.dataRef.current = E
          }, [E]);
          let L = 0 === E.listboxState;
          (0, ae.j)(L, [E.buttonElement, E.optionsElement], (e, t) => {
            var l;
            O({
              type: 1
            }), (0, Ie.Bm)(t, Ie.MZ.Loose) || (e.preventDefault(), null == (l = E.buttonElement) || l.focus())
          });
          let S = (0, h.useMemo)(() => ({
              open: 0 === E.listboxState,
              disabled: u,
              invalid: d,
              value: g
            }), [E, u, g, d]),
            T = (0, le.m)(e => {
              let t = E.options.find(t => t.id === e);
              t && $(t.dataRef.current.value)
            }),
            F = (0, le.m)(() => {
              if (null !== E.activeOptionIndex) {
                let {
                  dataRef: e,
                  id: t
                } = E.options[E.activeOptionIndex];
                $(e.current.value), O({
                  type: 2,
                  focus: we.Specific,
                  id: t
                })
              }
            }),
            M = (0, le.m)(() => O({
              type: 0
            })),
            j = (0, le.m)(() => O({
              type: 1
            })),
            D = (0, ee.L)(),
            A = (0, le.m)((e, t, l) => {
              D.dispose(), D.microTask(() => e === we.Specific ? O({
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
            V = (0, le.m)((e, t) => (O({
              type: 5,
              id: e,
              dataRef: t
            }), () => O({
              type: 6,
              id: e
            }))),
            $ = (0, le.m)(e => (0, Pe.Y)(E.mode, {
              0: () => k?.(e),
              1() {
                let t = E.value.slice(),
                  l = t.findIndex(t => C(t, e));
                return -1 === l ? t.push(e) : t.splice(l, 1), k?.(t)
              }
            })),
            R = (0, le.m)(e => O({
              type: 3,
              value: e
            })),
            _ = (0, le.m)(() => O({
              type: 4
            })),
            B = (0, le.m)(e => {
              O({
                type: 7,
                element: e
              })
            }),
            z = (0, le.m)(e => {
              O({
                type: 8,
                element: e
              })
            }),
            U = (0, h.useMemo)(() => ({
              onChange: $,
              registerOption: V,
              goToOption: A,
              closeListbox: j,
              openListbox: M,
              selectActiveOption: F,
              selectOption: T,
              search: R,
              clearSearch: _,
              setButtonElement: B,
              setOptionsElement: z
            }), []),
            [K, Q] = (0, Fe.b0)({
              inherit: !0
            }),
            H = {
              ref: y
            },
            q = (0, h.useCallback)(() => {
              if (void 0 !== x) return k?.(x)
            }, [k, x]),
            G = (0, Le.Ci)();
          return h.createElement(Q, {
            value: K,
            props: {
              htmlFor: null == (l = E.buttonElement) ? void 0 : l.id
            },
            slot: {
              open: 0 === E.listboxState,
              disabled: u
            }
          }, h.createElement(be.St, null, h.createElement(_e.Provider, {
            value: U
          }, h.createElement(ze.Provider, {
            value: E
          }, h.createElement(ge.El, {
            value: (0, Pe.Y)(E.listboxState, {
              0: ge.Uw.Open,
              1: ge.Uw.Closed
            })
          }, null != o && null != g && h.createElement(ye.CL, {
            disabled: u,
            data: {
              [o]: g
            },
            form: a,
            onReset: q
          }), G({
            ourProps: H,
            theirProps: f,
            slot: S,
            defaultTag: Qe,
            name: "Listbox"
          }))))))
        }),
        We = (0, Le.FX)(function(e, t) {
          var l;
          let n = Ue("Listbox.Button"),
            i = Be("Listbox.Button"),
            r = (0, h.useId)(),
            a = (0, xe.q)(),
            {
              id: o = a || "headlessui-listbox-button-" + r,
              disabled: s = n.disabled || !1,
              autoFocus: c = !1,
              ...d
            } = e,
            u = (0, de.P)(t, (0, be.Xc)(), i.setButtonElement),
            v = (0, be.TI)(),
            m = (0, le.m)(e => {
              switch (e.key) {
                case Te.D.Enter:
                  (0, Ce.q)(e.currentTarget);
                  break;
                case Te.D.Space:
                case Te.D.ArrowDown:
                  e.preventDefault(), (0, G.flushSync)(() => i.openListbox()), n.value || i.goToOption(we.First);
                  break;
                case Te.D.ArrowUp:
                  e.preventDefault(), (0, G.flushSync)(() => i.openListbox()), n.value || i.goToOption(we.Last)
              }
            }),
            p = (0, le.m)(e => {
              e.key === Te.D.Space && e.preventDefault()
            }),
            f = (0, le.m)(e => {
              var t;
              if ((0, ke.l)(e.currentTarget)) return e.preventDefault();
              0 === n.listboxState ? ((0, G.flushSync)(() => i.closeListbox()), null == (t = n.buttonElement) || t.focus({
                preventScroll: !0
              })) : (e.preventDefault(), i.openListbox())
            }),
            b = (0, le.m)(e => e.preventDefault()),
            y = (0, Fe.o2)([o]),
            x = (0, Se.MM)(),
            {
              isFocusVisible: g,
              focusProps: k
            } = (0, H.o)({
              autoFocus: c
            }),
            {
              isHovered: w,
              hoverProps: O
            } = (0, q.M)({
              isDisabled: s
            }),
            {
              pressed: N,
              pressProps: I
            } = (0, J.Z)({
              disabled: s
            }),
            C = (0, h.useMemo)(() => ({
              open: 0 === n.listboxState,
              active: N || 0 === n.listboxState,
              disabled: s,
              invalid: n.invalid,
              value: n.value,
              hover: w,
              focus: g,
              autofocus: c
            }), [n.listboxState, n.value, s, w, g, N, n.invalid, c]),
            P = (0, Le.v6)(v(), {
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
              onKeyDown: m,
              onKeyUp: p,
              onKeyPress: b,
              onClick: f
            }, k, O, I);
          return (0, Le.Ci)()({
            ourProps: P,
            theirProps: d,
            slot: C,
            defaultTag: "button",
            name: "Listbox.Button"
          })
        }),
        Xe = Fe.JU,
        Ye = (0, Le.FX)(function(e, t) {
          var l, n;
          let i = (0, h.useId)(),
            {
              id: r = "headlessui-listbox-options-" + i,
              anchor: a,
              portal: o = !1,
              modal: s = !0,
              transition: c = !1,
              ...d
            } = e,
            u = (0, be.zn)(a),
            [v, m] = (0, h.useState)(null);
          u && (o = !0);
          let p = Ue("Listbox.Options"),
            f = Be("Listbox.Options"),
            b = (0, oe.g)(p.optionsElement),
            y = (0, ge.O_)(),
            [x, g] = (0, pe.p)(c, v, null !== y ? (y & ge.Uw.Open) === ge.Uw.Open : 0 === p.listboxState);
          (0, re.O)(x, p.buttonElement, f.closeListbox);
          let k = !p.i && s && 0 === p.listboxState;
          (0, ce.K)(k, b);
          let w = !p.i && s && 0 === p.listboxState;
          (0, ne.v)(w, {
            allowed: (0, h.useCallback)(() => [p.buttonElement, p.optionsElement], [p.buttonElement, p.optionsElement])
          });
          let O = ! function(e, t) {
              let l = (0, h.useRef)({
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
            }(0 !== p.listboxState, p.buttonElement) && x,
            N = function(e, t) {
              let [l, n] = (0, h.useState)(t);
              return !e && l !== t && n(t), e ? l : t
            }(x && 1 === p.listboxState, p.value),
            I = (0, le.m)(e => p.compare(N, e)),
            C = (0, h.useMemo)(() => {
              var e;
              if (null == u || null == (e = u?.to) || !e.includes("selection")) return null;
              let t = p.options.findIndex(e => I(e.dataRef.current.value));
              return -1 === t && (t = 0), t
            }, [u, p.options]),
            P = (() => {
              if (null == u) return;
              if (null === C) return {
                ...u,
                inner: void 0
              };
              let e = Array.from(p.listRef.current.values());
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
            [E, L] = (0, be.UF)(P),
            S = (0, be.G3)(),
            T = (0, de.P)(t, u ? E : null, f.setOptionsElement, m),
            F = (0, ee.L)();
          (0, h.useEffect)(() => {
            var e;
            let t = p.optionsElement;
            t && 0 === p.listboxState && t !== (null == (e = (0, Ee.T)(t)) ? void 0 : e.activeElement) && t?.focus({
              preventScroll: !0
            })
          }, [p.listboxState, p.optionsElement]);
          let M = (0, le.m)(e => {
              var t, l;
              switch (F.dispose(), e.key) {
                case Te.D.Space:
                  if ("" !== p.searchQuery) return e.preventDefault(), e.stopPropagation(), f.search(e.key);
                case Te.D.Enter:
                  if (e.preventDefault(), e.stopPropagation(), null !== p.activeOptionIndex) {
                    let {
                      dataRef: e
                    } = p.options[p.activeOptionIndex];
                    f.onChange(e.current.value)
                  }
                  0 === p.mode && ((0, G.flushSync)(() => f.closeListbox()), null == (t = p.buttonElement) || t.focus({
                    preventScroll: !0
                  }));
                  break;
                case (0, Pe.Y)(p.orientation, {
                  vertical: Te.D.ArrowDown,
                  horizontal: Te.D.ArrowRight
                }):
                  return e.preventDefault(), e.stopPropagation(), f.goToOption(we.Next);
                case (0, Pe.Y)(p.orientation, {
                  vertical: Te.D.ArrowUp,
                  horizontal: Te.D.ArrowLeft
                }):
                  return e.preventDefault(), e.stopPropagation(), f.goToOption(we.Previous);
                case Te.D.Home:
                case Te.D.PageUp:
                  return e.preventDefault(), e.stopPropagation(), f.goToOption(we.First);
                case Te.D.End:
                case Te.D.PageDown:
                  return e.preventDefault(), e.stopPropagation(), f.goToOption(we.Last);
                case Te.D.Escape:
                  return e.preventDefault(), e.stopPropagation(), (0, G.flushSync)(() => f.closeListbox()), void(null == (l = p.buttonElement) || l.focus({
                    preventScroll: !0
                  }));
                case Te.D.Tab:
                  e.preventDefault(), e.stopPropagation(), (0, G.flushSync)(() => f.closeListbox()), (0, Ie.p9)(p.buttonElement, e.shiftKey ? Ie.BD.Previous : Ie.BD.Next);
                  break;
                default:
                  1 === e.key.length && (f.search(e.key), F.setTimeout(() => f.clearSearch(), 350))
              }
            }),
            j = null == (l = p.buttonElement) ? void 0 : l.id,
            D = (0, h.useMemo)(() => ({
              open: 0 === p.listboxState
            }), [p.listboxState]),
            A = (0, Le.v6)(u ? S() : {}, {
              id: r,
              ref: T,
              "aria-activedescendant": null === p.activeOptionIndex || null == (n = p.options[p.activeOptionIndex]) ? void 0 : n.id,
              "aria-multiselectable": 1 === p.mode || void 0,
              "aria-labelledby": j,
              "aria-orientation": p.orientation,
              onKeyDown: M,
              role: "listbox",
              tabIndex: 0 === p.listboxState ? 0 : void 0,
              style: {
                ...d.style,
                ...L,
                "--button-width": (0, te.L)(p.buttonElement, !0).width
              },
              ...(0, pe.B)(g)
            }),
            V = (0, Le.Ci)();
          return h.createElement(Me.ZL, {
            enabled: !!o && (e.static || x)
          }, h.createElement(ze.Provider, {
            value: 1 === p.mode ? p : {
              ...p,
              isSelected: I
            }
          }, V({
            ourProps: A,
            theirProps: d,
            slot: D,
            defaultTag: "div",
            features: qe,
            visible: O,
            name: "Listbox.Options"
          })))
        }),
        Ze = (0, Le.FX)(function(e, t) {
          let l = (0, h.useId)(),
            {
              id: n = "headlessui-listbox-option-" + l,
              disabled: i = !1,
              value: r,
              ...a
            } = e,
            o = !0 === (0, h.useContext)(He),
            s = Ue("Listbox.Option"),
            c = Be("Listbox.Option"),
            d = null !== s.activeOptionIndex && s.options[s.activeOptionIndex].id === n,
            u = s.isSelected(r),
            v = (0, h.useRef)(null),
            m = function(e) {
              let t = (0, h.useRef)(""),
                l = (0, h.useRef)("");
              return (0, le.m)(() => {
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
                        return "string" == typeof e ? e.trim() : ve(t).trim()
                      }
                      return null
                    }).filter(Boolean);
                    if (e.length > 0) return e.join(", ")
                  }
                  return ve(e).trim()
                }(n).trim().toLowerCase();
                return t.current = i, l.current = r, r
              })
            }(v),
            p = (0, ie.Y)({
              disabled: i,
              value: r,
              domRef: v,
              get textValue() {
                return m()
              }
            }),
            f = (0, de.P)(t, v, e => {
              e ? s.listRef.current.set(n, e) : s.listRef.current.delete(n)
            });
          (0, Z.s)(() => {
            if (!s.i && 0 === s.listboxState && d && 0 !== s.activationTrigger) return (0, Ne.e)().requestAnimationFrame(() => {
              var e, t;
              null == (t = null == (e = v.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                block: "nearest"
              })
            })
          }, [v, d, s.i, s.listboxState, s.activationTrigger, s.activeOptionIndex]), (0, Z.s)(() => {
            if (!o) return c.registerOption(n, p)
          }, [p, n, o]);
          let b = (0, le.m)(e => {
              var t;
              if (i) return e.preventDefault();
              c.onChange(r), 0 === s.mode && ((0, G.flushSync)(() => c.closeListbox()), null == (t = s.buttonElement) || t.focus({
                preventScroll: !0
              }))
            }),
            y = (0, le.m)(() => {
              if (i) return c.goToOption(we.Nothing);
              c.goToOption(we.Specific, n)
            }),
            x = function() {
              let e = (0, h.useRef)([-1, -1]);
              return {
                wasMoved(t) {
                  let l = me(t);
                  return (e.current[0] !== l[0] || e.current[1] !== l[1]) && (e.current = l, !0)
                },
                update(t) {
                  e.current = me(t)
                }
              }
            }(),
            g = (0, le.m)(e => {
              x.update(e), !i && (d || c.goToOption(we.Specific, n, 0))
            }),
            k = (0, le.m)(e => {
              x.wasMoved(e) && (i || d || c.goToOption(we.Specific, n, 0))
            }),
            w = (0, le.m)(e => {
              x.wasMoved(e) && (i || d && c.goToOption(we.Nothing))
            }),
            O = (0, h.useMemo)(() => ({
              active: d,
              focus: d,
              selected: u,
              disabled: i,
              selectedOption: u && o
            }), [d, u, i, o]),
            N = o ? {} : {
              id: n,
              ref: f,
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
            I = (0, Le.Ci)();
          return !u && o ? null : I({
            ourProps: N,
            theirProps: a,
            slot: O,
            defaultTag: "div",
            name: "Listbox.Option"
          })
        }),
        et = (0, Le.FX)(function(e, t) {
          let {
            options: l,
            placeholder: n,
            ...i
          } = e, r = {
            ref: (0, de.P)(t)
          }, a = Ue("ListboxSelectedOption"), o = (0, h.useMemo)(() => ({}), []), s = void 0 === a.value || null === a.value || 1 === a.mode && Array.isArray(a.value) && 0 === a.value.length, c = (0, Le.Ci)();
          return h.createElement(He.Provider, {
            value: !0
          }, c({
            ourProps: r,
            theirProps: {
              ...i,
              children: h.createElement(h.Fragment, null, n && s ? n : l)
            },
            slot: o,
            defaultTag: Ge,
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
        children: [i && (0, n.jsx)(U.E, {
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
            }), (0, n.jsx)(Q.e, {
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
                      children: (0, n.jsx)(U.E, {
                        type: K.jK.TITLE,
                        theme: t ? K.Il.BRAND : K.Il.PRIMARY,
                        truncated: !0,
                        children: e.name
                      })
                    }), t && (0, n.jsx)("div", {
                      children: (0, n.jsx)(z.S, {
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
        vt = l(19376),
        mt = l(73241);
      const ht = ({
        asset: e,
        blockchain: t
      }) => {
        var l;
        const {
          formatMessage: i
        } = (0, p.A)();
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
                  children: (0, n.jsx)(U.E, {
                    type: K.jK.SUBHEADER_16,
                    testid: "custom-asset-asset-name",
                    children: e.name
                  })
                }), (0, n.jsx)("div", {
                  children: e.type && (0, n.jsx)(vt.v, {
                    size: mt.V.SMALL,
                    theme: mt.x.SECONDARY,
                    testid: "custom-asset-asset-type",
                    children: e.type
                  })
                })]
              }), (0, n.jsx)("div", {
                children: (0, n.jsx)(U.E, {
                  type: K.jK.SUBHEADER_14,
                  theme: K.Il.UTILITY_1_OPACITY_1,
                  weight: K.nG.NORMAL,
                  testid: "custom-asset-asset-network-name",
                  children: null != (l = t.displayName) ? l : t.name
                })
              })]
            }), (0, n.jsxs)("div", {
              className: "flex flex-col space-y-1 text-right",
              children: [(0, n.jsx)("div", {
                children: (0, n.jsx)(U.E, {
                  type: K.jK.SUBHEADER_16,
                  testid: "custom-asset-asset-symbol",
                  children: e.symbol
                })
              }), (0, n.jsx)("div", {
                children: (0, n.jsx)(U.E, {
                  type: K.jK.SUBHEADER_14,
                  theme: K.Il.UTILITY_1_OPACITY_1,
                  weight: K.nG.NORMAL,
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
      var pt = Object.getOwnPropertySymbols,
        ft = {}.hasOwnProperty,
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
          trackAnalytics: v
        } = (0, c.s)();
        if (!e) throw Error("Blockchain id is invalid.");
        if (!t) throw Error("Blockchain type is invalid.");
        const y = (0, rt.n)(),
          g = (0, at.I)(),
          k = (0, h.useMemo)(() => (0, r.rN)(e, t === it.l.CUSTOM, y, g), [e, t, y, g]);
        if (!k) throw Error(`Could not find network with blockchain ID "${e}".`);
        const {
          formatMessage: w
        } = (0, p.A)(), O = (0, i.Zp)(), [N, I] = (0, h.useState)(!1), [C, z] = (0, h.useState)(l ?? ""), [Q, H] = (0, h.useState)(""), [q, G] = (0, h.useState)(""), [J, W] = (0, h.useState)(""), [X, Y] = (0, h.useState)(""), [Z, ee] = (0, h.useState)({
          decimals: !1
        }), [te, le] = (0, h.useState)(), ne = location.href.includes("manual");
        (0, d.K)({
          event: ne ? o.Un.CUSTOM_ASSET_ADD_ASSET_MANUALLY : o.Un.CUSTOM_ASSET_ADD_ASSET,
          props: null
        });
        const {
          data: ie
        } = (0, ct.I)({
          queryKey: ["tokens-map"],
          queryFn: () => x.YW.emit(b.A.FETCH_TOKEN_TYPES)
        }), re = (0, h.useMemo)(() => new Map(Object.entries(ie || []).filter(([e, t]) => !0)), [ie]).get(e), ae = (({
          value: e,
          blockchain: t,
          blockchainType: l,
          isAddingTokenManually: n
        }) => {
          const {
            formatMessage: i
          } = (0, p.A)(), [r, a] = (0, h.useState)({
            isValid: !1,
            isLoading: !1,
            asset: null
          }), o = (0, h.useRef)(!1), s = (0, h.useCallback)(m()(e => L(null, [e], function*({
            blockchain: e,
            value: t
          }) {
            o.current = !1;
            let r = {
              isValid: !1,
              asset: null
            };
            t && (r = yield S({
              value: t,
              blockchain: e,
              blockchainType: l,
              isAddingTokenManually: n
            })), !o.current && a(E(P({}, r), {
              error: r.isValid || !r.intlErrorParams ? void 0 : i(...r.intlErrorParams),
              isLoading: !1
            }))
          }), 200), [S, i]);
          return (0, h.useEffect)(() => (a(e => E(P({}, e), {
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
          for (var n in e) ft.call(e, n) && 0 > t.indexOf(n) && (l[n] = e[n]);
          if (null != e && pt)
            for (var n of pt(e)) 0 > t.indexOf(n) && bt.call(e, n) && (l[n] = e[n]);
          return l
        })(ae, ["asset"]), ce = (0, T.u)({
          value: q
        }), de = (0, T.u)({
          value: J
        }), ue = (0, u.R)({
          value: X,
          min: 0,
          max: 32
        }), ve = ne ? se.isValid && ce.isValid && de.isValid && ue.isValid && (!re || !!te) : se.isValid, me = (0, h.useMemo)(() => {
          if (ne) return {
            name: q,
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
        }, [ne, q, J, X, k, C, te?.id]), he = (0, h.useCallback)(e => yt(null, null, function*() {
          if (e.preventDefault(), oe || me) {
            I(!0), H("");
            try {
              const e = ne ? me : oe;
              yield x.YW.emit(f.A.ADD_ASSET, {
                asset: e,
                blockchainType: t
              }), v({
                event: o.BQ.ADD_CUSTOM_ASSET,
                props: {
                  pageViewSource: ne ? o.Un.CUSTOM_ASSET_ADD_ASSET_MANUALLY : o.Un.CUSTOM_ASSET_ADD_ASSET,
                  assetName: e.name,
                  assetId: e.assetId,
                  blockchainId: e.blockchainId
                }
              }), O(s.b.DEFAULT)
            } catch (e) {
              H(e.name === ot.name ? "generic.network-error" : "add-asset.register-error")
            } finally {
              I(!1)
            }
          }
        }), [oe, t, ne, me, O, v]);
        return (0, h.useEffect)(() => {
          oe && (G(oe.name), W(oe.symbol), Y(oe.decimals + ""), ee({
            decimals: !0
          }))
        }, [oe]), (0, n.jsxs)(_.LN, {
          children: [!ne && (0, n.jsx)(_.zY, {
            backAction: () => O(-1),
            title: w({
              id: "add-custom-asset.title"
            })
          }), (0, n.jsxs)(_.Gv, {
            children: [ne && (0, n.jsx)("div", {
              className: "flex my-11 justify-center",
              children: (0, n.jsx)(a.A, {})
            }), (0, n.jsxs)("div", {
              className: "flex h-full flex-col flex-1 " + (ne ? "bg-backgroundPrimary border border-line rounded p-6" : ""),
              children: [ne && (0, n.jsx)("div", {
                className: "text-center",
                children: (0, n.jsx)(U.E, {
                  type: K.jK.HEADLINE,
                  children: w({
                    id: "add-custom-asset.title"
                  })
                })
              }), (0, n.jsxs)("div", {
                className: "flex flex-col items-center space-y-1 pt-2",
                children: [(0, n.jsx)(V.q, {
                  name: k.name,
                  src: k.iconUrl,
                  size: B.Y.LARGE
                }), (0, n.jsx)(U.E, {
                  theme: K.Il.SECONDARY,
                  weight: K.nG.NORMAL,
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
                      H(""), z(e.target.value.trim()), ee({
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
                      value: q,
                      onChange: e => G(e.target.value),
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
                    children: (0, n.jsx)(U.E, {
                      weight: K.nG.NORMAL,
                      theme: K.Il.UTILITY_1_OPACITY_1,
                      children: w({
                        id: "input-contract-address.confirmation"
                      })
                    })
                  }), (0, n.jsx)("div", {
                    className: "w-full",
                    children: (0, n.jsx)(ht, {
                      asset: oe,
                      blockchain: k
                    })
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: "flex justify-end flex-1 flex-col space-y-4 pt-6",
                children: [(0, n.jsx)(F.F, {
                  theme: M.Z.WARNING,
                  children: w({
                    id: "add-asset.warning"
                  }, {
                    b: e => (0, n.jsx)("span", {
                      className: "font-medium",
                      children: e
                    })
                  })
                }), Q && (0, n.jsx)(F.F, {
                  theme: M.Z.ERROR,
                  children: w({
                    id: Q
                  })
                }), !ne && C && (0, n.jsx)(j.$, {
                  testid: "custom-asset-add-token-manually-button",
                  theme: D.ry.TRANSPARENT,
                  onClick: () => yt(null, null, function*() {
                    yield(0, st.V3)(`${s.b.CUSTOM_ASSET_ADD_ASSET}/${t}/${k.id}/manual/${C}`)
                  }),
                  children: (0, n.jsx)(U.E, {
                    theme: K.Il.PRIMARY_DEFAULT,
                    type: K.jK.SUBHEADER_16,
                    children: w({
                      id: "add-asset.btn-add-token-manually"
                    })
                  })
                }), (0, n.jsx)(j.$, {
                  testid: "custom-asset-add-token-button",
                  onClick: he,
                  disabled: !ve,
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
              size: B.Y.MEDIUM,
              abstractFallback: !0
            }), (0, n.jsx)(U.E, {
              type: K.jK.SUBHEADER_16,
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
            } = (0, p.A)(),
            l = (0, gt.A)(),
            r = (0, rt.n)(!0),
            a = (0, at.I)(!0),
            o = (0, It.o)(),
            c = (0, h.useCallback)(e => !!o[e], [o]),
            d = (0, h.useMemo)(() => r.filter(e => {
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
        Pt = () => {
          (0, d.K)({
            event: o.Un.CUSTOM_ASSET_SELECT_NETWORK,
            props: null
          });
          const {
            formatMessage: e
          } = (0, p.A)(), t = (0, i.Zp)(), l = (0, h.useCallback)(() => {
            t(s.b.MANAGE_CRYPTO)
          }, [t]);
          return (0, n.jsxs)(_.LN, {
            children: [(0, n.jsx)(_.zY, {
              backAction: l,
              title: e({
                id: "network.header"
              })
            }), (0, n.jsx)(_.Gv, {
              children: (0, n.jsx)(_.LO, {
                children: (0, n.jsx)(Ct, {})
              })
            })]
          })
        },
        Et = () => (0, n.jsxs)(i.BV, {
          children: [(0, n.jsx)(i.qh, {
            path: "/select-network",
            element: (0, n.jsx)(Pt, {})
          }), (0, n.jsx)(i.qh, {
            path: "/add-asset/:blockchainType/:blockchainId",
            element: (0, n.jsx)(xt, {})
          }), (0, n.jsx)(i.qh, {
            path: "/add-asset/:blockchainType/:blockchainId/manual/:contractAddress?",
            element: (0, n.jsx)(xt, {})
          })]
        }),
        Lt = Et
    }
  }
]);
