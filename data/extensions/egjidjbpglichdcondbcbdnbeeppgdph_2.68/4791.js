"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [4791], {
    6475: (e, t, r) => {
      r.d(t, {
        q: () => o
      });
      var n = r(1651),
        a = r(58959),
        i = class extends n.$ {
          constructor(e, t) {
            super(e, t)
          }
          bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
          }
          setOptions(e, t) {
            super.setOptions({
              ...e,
              behavior: (0, a.PL)()
            }, t)
          }
          getOptimisticResult(e) {
            return e.behavior = (0, a.PL)(), super.getOptimisticResult(e)
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: {
                fetchMore: {
                  direction: "forward"
                }
              }
            })
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: {
                fetchMore: {
                  direction: "backward"
                }
              }
            })
          }
          createResult(e, t) {
            const {
              state: r
            } = e, n = super.createResult(e, t), {
              isFetching: i,
              isRefetching: s,
              isError: o,
              isRefetchError: l
            } = n, d = r.fetchMeta?.fetchMore?.direction, c = o && "forward" === d, h = i && "forward" === d, u = o && "backward" === d, p = i && "backward" === d;
            return {
              ...n,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, a.rB)(t, r.data),
              hasPreviousPage: (0, a.RQ)(t, r.data),
              isFetchNextPageError: c,
              isFetchingNextPage: h,
              isFetchPreviousPageError: u,
              isFetchingPreviousPage: p,
              isRefetchError: l && !c && !u,
              isRefetching: s && !h && !p
            }
          }
        },
        s = r(44171);

      function o(e, t) {
        return (0, s.t)(e, i, t)
      }
    },
    8168: (e, t, r) => {
      r.d(t, {
        b: () => s
      });
      var n = r(74848),
        a = r(52114),
        i = r(1279);
      const s = ({
        title: e,
        children: t
      }) => (0, n.jsxs)("div", {
        className: "my-2 flex flex-col space-y-4 pb-2",
        children: [e && (0, n.jsx)(a.E, {
          theme: i.Il.THIRD,
          testid: "category-title",
          children: e
        }), t]
      })
    },
    9505: (e, t, r) => {
      r.d(t, {
        R: () => m
      });
      var n = r(15192),
        a = r(96540),
        i = (r.n(a), r(6442)),
        s = Object.defineProperty,
        o = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        c = {}.hasOwnProperty,
        h = {}.propertyIsEnumerable,
        u = (e, t, r) => t in e ? s(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        p = (e, t) => {
          for (var r in t || (t = {})) c.call(t, r) && u(e, r, t[r]);
          if (d)
            for (var r of d(t)) h.call(t, r) && u(e, r, t[r]);
          return e
        },
        f = (e, t) => o(e, l(t));
      const m = ({
        value: e,
        min: t,
        max: r
      }) => {
        const {
          formatMessage: s
        } = (0, i.A)(), [o, l] = (0, a.useState)({
          isValid: !1,
          number: !1,
          min: !1,
          max: !1
        });
        (0, a.useEffect)(() => {
          l(p({}, (({
            value: e,
            min: t,
            max: r
          }) => {
            const a = {
              number: !1,
              min: !1,
              max: !1
            };
            if (!e) return f(p({}, a), {
              isValid: !1
            });
            try {
              const i = (0, n.A)(e);
              a.number = !0, a.min = typeof t >= "u" || i.gte((0, n.A)(t)), a.max = typeof r >= "u" || i.lte((0, n.A)(r))
            } catch {} finally {
              return f(p({}, a), {
                isValid: Object.values(a).every(e => !!e)
              })
            }
          })({
            value: e,
            min: t,
            max: r
          })))
        }, [e, t, r]);
        const d = (0, a.useMemo)(() => o.number ? o.min ? o.max ? void 0 : s({
          id: "validate-amount.max"
        }, {
          number: r
        }) : s({
          id: "validate-amount.min"
        }, {
          number: t
        }) : s({
          id: "validate-amount.generic"
        }), [s, o, t]);
        return {
          isValid: o.isValid,
          error: d
        }
      }
    },
    16742: (e, t, r) => {
      r.d(t, {
        C: () => s,
        M: () => o
      });
      var n = r(74848),
        a = r(43412),
        i = r(96540);
      r.n(i);
      const s = (0, i.createContext)({
          domains: [],
          isLoading: !1
        }),
        o = ({
          children: e
        }) => {
          const [t, r] = (0, a.G)();
          return (0, n.jsx)(s.Provider, {
            value: {
              domains: r,
              isLoading: t
            },
            children: e
          })
        }
    },
    21190: (e, t, r) => {
      r.d(t, {
        W: () => c
      });
      var n = r(74848),
        a = r(94893),
        i = r(41327),
        s = r(65504),
        o = r(68632),
        l = r(52114),
        d = r(1279);
      const c = ({
        iconUrl: e,
        icon: t,
        name: r = "",
        symbol: c,
        network: h,
        onClick: u,
        testid: p,
        contractAddress: f,
        variant: m = "default"
      }) => (0, n.jsx)(a.c, {
        testid: p,
        onClick: u,
        children: (0, n.jsxs)("div", {
          className: "flex items-center " + ("default" === m ? "space-x-2.5" : "space-x-1 bg-button-secondary hover:bg-button-secondary-hovered rounded-full p-4"),
          children: [e ? (0, n.jsx)(s.q, {
            size: "default" === m ? o.Y.LARGE : o.Y.XXSMALL,
            src: e,
            name: r,
            network: f ? h : void 0
          }) : t, (0, n.jsxs)("div", {
            className: "flex " + ("default" === m ? "flex-col" : "flex-row"),
            children: [(0, n.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [(0, n.jsx)(l.E, {
                type: "default" === m ? d.jK.TITLE : d.jK.SUBHEADER_14,
                weight: d.nG.SEMIBOLD,
                children: c
              }), (0, n.jsx)(i.v, {
                width: "default" === m ? 20 : 16,
                height: "default" === m ? 20 : 16,
                colorClass: "default" === m ? "text-iconNormal" : "text-icon-primary"
              })]
            }), r && (0, n.jsx)("div", {
              className: "flex whitespace-nowrap",
              children: (0, n.jsx)(l.E, {
                type: d.jK.CAPTION,
                theme: d.Il.SECONDARY,
                children: r
              })
            })]
          })]
        })
      })
    },
    31441: (e, t, r) => {
      r.d(t, {
        D: () => a
      });
      var n = r(74848);
      const a = ({
        width: e,
        height: t,
        colorClass: r
      }) => (0, n.jsxs)("svg", {
        className: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 20 20",
        fill: "none",
        children: [(0, n.jsx)("path", {
          d: "M18.0748 7.90867L14.5998 4.30034C14.2415 3.92534 13.6498 3.917 13.2748 4.27534C12.8998 4.63367 12.8915 5.22534 13.2498 5.60034L15.1915 7.617H3.23314C2.71647 7.617 2.2998 8.03367 2.2998 8.55034C2.2998 9.067 2.71647 9.48367 3.23314 9.48367H17.3998C17.6331 9.48367 17.8665 9.40034 18.0498 9.22534C18.4248 8.867 18.4331 8.27534 18.0748 7.90034V7.90867Z",
          fill: "currentColor"
        }), (0, n.jsx)("path", {
          d: "M16.7664 11.167H2.59975C2.36642 11.167 2.13308 11.2503 1.94975 11.4253C1.57475 11.7837 1.56642 12.3753 1.92475 12.7503L5.39975 16.3587C5.75808 16.7337 6.34975 16.742 6.72475 16.3837C7.09975 16.0253 7.10809 15.4337 6.74975 15.0587L4.80808 13.042H16.7748C17.2914 13.042 17.7081 12.6253 17.7081 12.1087C17.7081 11.592 17.2914 11.1753 16.7748 11.1753L16.7664 11.167Z",
          fill: "currentColor"
        })]
      })
    },
    33647: (e, t, r) => {
      r.d(t, {
        d: () => B
      });
      var n = r(74848),
        a = r(66737),
        i = r(16638),
        s = r(96540),
        o = r(24867),
        l = r(95060),
        d = r(37786),
        c = r(96992),
        h = r(95015),
        u = r(69821),
        p = r(98975),
        f = r(65448),
        m = r(82498),
        F = r(15953),
        C = r(9685),
        x = r(43660),
        b = r(66206),
        k = r(59124),
        v = r(44586),
        g = r(90540);
      let L = (0, s.createContext)(null);
      L.displayName = "GroupContext";
      let w = s.Fragment,
        A = (0, b.FX)(function(e, t) {
          var r;
          let n = (0, s.useId)(),
            w = (0, F.q)(),
            A = (0, f.u)(),
            {
              id: y = w || "headlessui-switch-" + n,
              disabled: D = A || !1,
              checked: E,
              defaultChecked: B,
              onChange: N,
              name: M,
              value: j,
              form: P,
              autoFocus: W = !1,
              ...S
            } = e,
            T = (0, s.useContext)(L),
            [V, O] = (0, s.useState)(null),
            R = (0, s.useRef)(null),
            Z = (0, p.P)(R, t, null === T ? null : T.setSwitch, O),
            I = (0, d.K)(B),
            [_, U] = (0, l.P)(E, N, I ?? !1),
            z = (0, c.L)(),
            [H, q] = (0, s.useState)(!1),
            X = (0, h.u)(() => {
              q(!0), U?.(!_), z.nextFrame(() => {
                q(!1)
              })
            }),
            G = (0, h.u)(e => {
              if ((0, C.l)(e.currentTarget)) return e.preventDefault();
              e.preventDefault(), X()
            }),
            K = (0, h.u)(e => {
              e.key === v.D.Space ? (e.preventDefault(), X()) : e.key === v.D.Enter && (0, x.q)(e.currentTarget)
            }),
            Q = (0, h.u)(e => e.preventDefault()),
            J = (0, g.o2)(),
            Y = (0, k.MM)(),
            {
              isFocusVisible: $,
              focusProps: ee
            } = (0, a.o)({
              autoFocus: W
            }),
            {
              isHovered: te,
              hoverProps: re
            } = (0, i.M)({
              isDisabled: D
            }),
            {
              pressed: ne,
              pressProps: ae
            } = (0, o.Z)({
              disabled: D
            }),
            ie = (0, s.useMemo)(() => ({
              checked: _,
              disabled: D,
              hover: te,
              focus: $,
              active: ne,
              autofocus: W,
              changing: H
            }), [_, te, $, ne, D, H, W]),
            se = (0, b.v6)({
              id: y,
              ref: Z,
              role: "switch",
              type: (0, u.c)(e, V),
              tabIndex: -1 === e.tabIndex ? 0 : null != (r = e.tabIndex) ? r : 0,
              "aria-checked": _,
              "aria-labelledby": J,
              "aria-describedby": Y,
              disabled: D || void 0,
              autoFocus: W,
              onClick: G,
              onKeyUp: K,
              onKeyPress: Q
            }, ee, re, ae),
            oe = (0, s.useCallback)(() => {
              if (void 0 !== I) return U?.(I)
            }, [U, I]),
            le = (0, b.Ci)();
          return s.createElement(s.Fragment, null, null != M && s.createElement(m.CL, {
            disabled: D,
            data: {
              [M]: j || "on"
            },
            overrides: {
              type: "checkbox",
              checked: _
            },
            form: P,
            onReset: oe
          }), le({
            ourProps: se,
            theirProps: S,
            slot: ie,
            defaultTag: "button",
            name: "Switch"
          }))
        }),
        y = g.JU,
        D = k.VY,
        E = Object.assign(A, {
          Group: function(e) {
            var t;
            let [r, n] = (0, s.useState)(null), [a, i] = (0, g.b0)(), [o, l] = (0, k.rU)(), d = (0, s.useMemo)(() => ({
              switch: r,
              setSwitch: n
            }), [r, n]), c = e, h = (0, b.Ci)();
            return s.createElement(l, {
              name: "Switch.Description",
              value: o
            }, s.createElement(i, {
              name: "Switch.Label",
              value: a,
              props: {
                htmlFor: null == (t = d.switch) ? void 0 : t.id,
                onClick(e) {
                  r && (e.currentTarget instanceof HTMLLabelElement && e.preventDefault(), r.click(), r.focus({
                    preventScroll: !0
                  }))
                }
              }
            }, s.createElement(L.Provider, {
              value: d
            }, h({
              ourProps: {},
              theirProps: c,
              slot: {},
              defaultTag: w,
              name: "Switch.Group"
            }))))
          },
          Label: y,
          Description: D
        });
      const B = ({
        label: e,
        checked: t,
        testid: r,
        disabled: a,
        onChange: i
      }) => (0, n.jsxs)(E, {
        "data-testid": r,
        checked: t,
        onChange: i,
        className: "switch",
        onClick: e => e.stopPropagation(),
        disabled: a,
        children: [e && (0, n.jsx)("span", {
          className: "sr-only",
          children: e
        }), (0, n.jsx)("span", {
          "aria-hidden": "true",
          className: "switch__toggle"
        })]
      })
    },
    38795: (e, t, r) => {
      r.d(t, {
        r: () => o
      });
      var n = r(6475),
        a = r(96540),
        i = (r.n(a), r(64145)),
        s = r(89408);

      function o(e, t) {
        const [r, o] = (0, a.useState)(void 0), {
          data: l,
          error: d,
          fetchNextPage: c,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: p,
          status: f
        } = (0, n.q)({
          queryKey: ["tokens", r, e?.join()],
          queryFn: ({
            pageParam: n
          }) => i.YW.emit(s.A.SEARCH_ASSETS, {
            query: r,
            networks: e,
            page: n,
            includeNonCustomTokenNetworks: t
          }),
          enabled: void 0 !== r,
          initialPageParam: 0,
          refetchOnWindowFocus: !1,
          getNextPageParam: e => e?.nextPage
        }), m = (0, a.useMemo)(() => (l?.pages || []).flatMap(e => e?.data || []), [l?.pages]);
        return {
          setQuery: o,
          data: l,
          error: d,
          fetchNextPage: c,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: p,
          status: f,
          flattenData: m
        }
      }
    },
    44199: (e, t, r) => {
      r.d(t, {
        X: () => i
      });
      var n = r(96540);

      function a() {
        const e = document.documentElement;
        return {
          width: parseInt(e.style.width, 10) || 0,
          height: parseInt(e.style.height, 10) || 0
        }
      }
      const i = () => {
        const [e, t] = (0, n.useState)(() => {
          const {
            width: e,
            height: t
          } = a();
          return window.innerWidth === e && window.innerHeight === t
        });
        return (0, n.useEffect)(() => {
          const e = () => {
            const {
              width: e,
              height: r
            } = a();
            t(window.innerWidth === e && window.innerHeight === r)
          };
          return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), e
      }
    },
    45871: (e, t, r) => {
      r.d(t, {
        x: () => i
      });
      var n = r(68157),
        a = r(96540);
      r.n(a);
      const i = () => {
        var e;
        const t = null != (e = (0, n.GV)(e => {
          var t;
          return null == (t = e.tx.itemsPerWalletAccount[e.wallet.walletId]) ? void 0 : t[e.wallet.selectedAccountId]
        })) ? e : [];
        return (0, a.useMemo)(() => (t.sort((e, t) => t.createdAt - e.createdAt), t), [t])
      }
    },
    54791: (e, t, r) => {
      r.r(t), r.d(t, {
        App: () => nr,
        Page: () => rr,
        default: () => ar
      });
      var n = r(74848),
        a = r(8457),
        i = r(26264),
        s = r(23688),
        o = r(44199),
        l = r(35177),
        d = r(16742),
        c = r(29584),
        h = r(63369),
        u = r(96540),
        p = Object.defineProperty,
        f = Object.defineProperties,
        m = Object.getOwnPropertyDescriptors,
        F = Object.getOwnPropertySymbols,
        C = {}.hasOwnProperty,
        x = {}.propertyIsEnumerable,
        b = (e, t, r) => t in e ? p(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        k = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && b(e, r, t[r]);
          if (F)
            for (var r of F(t)) x.call(t, r) && b(e, r, t[r]);
          return e
        },
        v = (e, t) => f(e, m(t));
      const g = (0, u.createContext)({
          getAsset: e => null,
          setAsset: (e, t) => {}
        }),
        L = ({
          children: e
        }) => {
          const [t, r] = (0, u.useState)({});

          function a() {
            return (new Date).getTime()
          }
          const i = {
            getAsset: e => t[e] && a() <= t[e].expiresAt ? t[e] : null,
            setAsset: (e, t) => {
              r(r => v(k({}, r), {
                [e]: v(k({}, t), {
                  expiresAt: a() + 3e5
                })
              }))
            }
          };
          return (0, n.jsx)(g.Provider, {
            value: i,
            children: e
          })
        };
      var w = r(95455),
        A = r(50882),
        y = r(88774),
        D = r(65504),
        E = r(69254),
        B = r(52114),
        N = r(1279),
        M = r(21094),
        j = r(7668),
        P = r(19376),
        W = r(73241);
      const S = ({
        symbol: e,
        name: t,
        iconUrl: r,
        blockchain: a,
        value: i,
        disabled: s,
        balance: o,
        contractAddress: l,
        isRwa: d
      }) => (0, n.jsx)(j.sx, {
        value: i,
        disabled: s,
        className: "cursor-pointer",
        children: ({
          checked: i
        }) => (0, n.jsxs)("div", {
          className: "flex items-center justify-between " + (s ? "opacity-50" : "opacity-100"),
          children: [(0, n.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [(0, n.jsx)(D.q, {
              src: r,
              name: t,
              network: l ? a : void 0
            }), (0, n.jsxs)("div", {
              className: "flex flex-col",
              children: [(0, n.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [(0, n.jsx)(B.E, {
                  testid: "asset-record-symbol",
                  type: N.jK.TITLE,
                  theme: i ? N.Il.BRAND : N.Il.PRIMARY,
                  children: e
                }), d && (0, n.jsx)(P.v, {
                  size: W.V.SMALL,
                  theme: W.x.SECONDARY,
                  children: "RWA"
                }), a.displayName && (0, n.jsx)(A.E, {
                  text: a.displayName
                })]
              }), (0, n.jsx)(B.E, {
                testid: "asset-record-name",
                type: N.jK.TITLE,
                theme: N.Il.THIRD,
                children: t
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: "flex items-center space-x-1",
            children: [o && parseFloat(o) > 0 && (0, n.jsx)(E.h, {
              testid: "asset-record-balance",
              amountType: M.Cu.CRYPTO,
              value: parseFloat(o),
              textType: N.jK.TITLE,
              theme: i ? N.Il.BRAND : N.Il.PRIMARY
            }), i && (0, n.jsx)(y.S, {
              width: 20,
              height: 20,
              colorClass: "text-primary"
            })]
          })]
        })
      });
      var T = r(11377);
      const V = ["XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB", "Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh", "XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1", "XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ", "XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W", "Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ", "XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN", "Preb5VKsmKgMGhMKUhDpe7A2AhMDmrZtMMZmvFEhLbU", "Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re", "XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg", "Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu", "XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp", "Prep57BLk9uKWRzKigtQBbrYFxcDXtHuCjxFRM5UXAS", "XsaQTCgebC2KPbf27KUhdv5JFvHhQ4GDAPURwrEhAzb", "Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu", "PreYKD2kJ5xGgoZ644VPfbEN7sW8bWCUREHr5S3ebV9", "Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg", "PrekBgzytydXoDTrH5NW9ABP68c96twxML8oV1NnV8d", "PreYPq1LdVBhKsYC3nRmZW5Y9yJXwSuDYmUSikFCwGS", "Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy", "PreGERrFuZAJqTxJ5oC3DeQmfdrniNzJgqKGFb2ZLE6", "XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe", "XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2"],
        O = ["0x9DCf7f739B8C0270E2FC0Cc8D0DaBe355a150dBa", "0x3807562a482b824c08a564dfefcc471806d3e00a", "0x2Df38cA485D01fC15e4FD85847ed26b7EF871c1c", "0x0692481C369E2BDc728A69ae31b848343a4567Be", "0xeD3618Bb8778F8eBBe2f241Da532227591771D04", "0x71d24Baeb0A033ec5F90FF65C4210545AF378D97", "0xD08DDb436e731f32455Fe302723eE0FD2E9E8706", "0x73d2ccEE12C120E7DA265a2dE9d9f952a0101b4f", "0x21deafD91116FCe9fE87C8f15Bde03f99a309b72", "0x4604b0b581269843ac7a6b70A5FC019E7762e511", "0x06954faa913fA14c28Eb1b2e459594F22f33f3dE", "0x77A1a02e4a888ADA8620b93C30dE8a41E621126c", "0x4EFD92F372898B57F292De69fCe377dd7D912bDd", "0x3859385363f7BB4Dfe42811cCF3F294FcD41dd1D", "0xCa468554e5C0423Ee858fe3942c9568C51FcAa79", "0x28151F5888833D3d767C4d6945a0Ee50D1B193E3", "0x4111b60bc87F2Bd1e81E783E271D7F0ec6EE088B", "0xD8e26FcC879b30cB0a0B543925a2B3500f074D81", "0xFdA09936DbD717368De0835bA441d9E62069d36f", "0xFEFf7a377A86462F5a2A872009722C154707F09e", "0x2ca12a3F9635fD69C21580def14F25C210cA9612", "0xF404E5f887dBd5508e16a1198fCDD5DE1A4296B8", "0xfF7CF16aA2fFc463b996DB2f7B7cf0130336899D", "0x5Bcd8195E3Ef58f677aeF9eBC276B5087c027050", "0xE3419710c1f77D44B4DaB02316d3f048818C4E59", "0xf15FbC1349ab99ABAd63db3f9A510BF413bE3BeF", "0xb035c3d5083bdc80074F380aeBc9Fcb68aBa0A28", "0x980a1001ee94e54142b231f44C7CA7c9DF71FBe1", "0x25018520138bbaB60684AD7983D4432E8B8E926B", "0x5Ce215d9c37a195DF88e294a06B8396C296B4e15", "0x74a03d741226f738098C35da8188E57acA50d146", "0x8d05432C2786e3F93f1a9A62b9572DBf54f3ea06", "0x01B19c68f8A9eE3a480dA788ba401cFAbdf19B93", "0x5Bf1b2A808598C0eF4Af1673a5457d86fE6d7B3d", "0xdeB6B89088cA9B7d7756087c8a0F7C6DF46f319C", "0x050362Ab1072Cb2Ce74d74770E22A3203Ad04ee5", "0x998f02A9E343EF6E3E6f28700d5A20F839fD74E6", "0x82106347dDbB23cE44Cf4cE4053Ef1adf8b9323B", "0xaB02fc332e9278eBCbbC6B4a8038050c01D15F69", "0x908266C1192628371Cff7AD2F5Eba4dE061a0ac5", "0xA9431d354cFAD3c6B76E50f0e73b43D48Be80CD0", "0x4D21aFfD27183B07335935F81A5C26b6A5A15355", "0xc3D93B45249E8E06cfeB01d25A96337E8893265d", "0x3cE219D498D807317F840f4CB0f03FA27dd65046", "0x0C1f3412A44Ff99E40bF14e06e5Ea321aE7B3938", "0x4AD2118Da8a65eaa81402A3d583FEF6eE76BDf3F", "0x9d4C6AD12B55E4645b585209F90Cc26614061E91", "0x8a23C6BaadB88512b30475C83Df6A63881e33e1E", "0x339ce23a355ed6D513DD3e1462975C4eCD86823a", "0x0c666485b02F7A87d21AdD7AEb9F5e64975AA490", "0x3632DEa96A953C11dac2f00b4A05a32CD1063fAE", "0xbc843b147DB4C7E00721d76037b8b92e13AfE13f", "0x8F3E41b378ae010c46d255F36bFC1D303b52dceb", "0x3Cafdbfe682aec17d5acE2f97A2f3ab3dCf6a4A9", "0x34bfdFF25F0fdA6d3ad0c33F1e06c0D40bD68885", "0x41765F0FCddC276309195166C7A62AE522FA09ef", "0x0d54D4279B9E8c54cD8547c2C75A8Ee81A0BcaE8", "0x03C1EC4CA9DBb168E6Db0DeF827c085999CBffaF", "0x55720eF5b023Fd043AE5F8D2e526030207978950", "0xbb8774FB97436d23d74C1b882E8E9A69322cFD31", "0x5D1a9a9B118fF19721e0111f094f2360b6Ef7A2f", "0xbA47214eDd2bb43099611b208f75E4b42FDcfEDc", "0x2Bc7Ff0C5dA9F1a4A51F96e77C5b0F7165DC06d2", "0x25d3f236B2d61656eebdeA86Ac6D42168e340011", "0x241958c86c7744d15d5f6314BA1Ea4c81DDA2896", "0xAbA9Ae731Aad63335C604E5f6E6A5db2e05f549d", "0xFd50Fc4E3686a8DA814c5C3D6121d8aB98a537F0", "0xF042cfa86cf1D598a75Bdb55c3507a1F39f9493b", "0x57270D35A840BC5C094da6FBeCA033FB71eA6Ab0", "0xD904bCf89B7CedF5c89f9Df7e829191D695F847E", "0xd5C5B2883735Fa9B658Dd52e2FCC8d7c0f1A42Ce", "0x14c3abF95Cb9C93a8b82C1CdCB76D72Cb87b2d4c", "0xA29dC2102dfc2a0A4A5dCb84Af984315567c9858", "0x691b126cF619707Ed5d16CaB1B27C000aa8De300", "0x6cc0afD51CE4Cb6920B775F3D6376Ab82b9A93Bb", "0x4C82c8cD9a218612DCe60b156B73A36705645e3b", "0xCabD955322dfbf94C084929ac5E9Eca3fEB5556F", "0xdB57d9C14e357Fc01E49035a808779Df41E9B4e2", "0x7042a8fFc7c7049684BfBc2fcb41b72380755a43", "0x2D1F7226Bd1F780AF6B9A49DCC0aE00E8Df4bDEE", "0x075756F3b6381a79633438fAA8964946bf40163d", "0xB812837b81a3a6b81d7CD74CfB19A7f2784555E5", "0xaC37c20C1d0E5285035e056101a64e263Ff94a41", "0x590F21186489cA1612f49a4B1ff5c66acD6796A9", "0xf6b1117ec07684D3958caD8BEb1b302bfD21103f", "0x7a0F89c1606f71499950AA2590d547c3975B728E", "0xE51bA774ebF6392c45Bf1d9E6b334d07992460d3", "0xf192957AE52dB3eb088654403CC2eDeD014ae556", "0x8bCF9012f4b0c1C3D359eDb7133C294f82f80790", "0x59644165402b611b350645555B50Afb581C71EB2", "0x070D79021dD7e841123cB0CF554993bF683c511D", "0x992651BFeB9A0DCC4457610E284ba66D86489d4d", "0x0c8276E4FeC072cf7854Be69c70F7773D1610857", "0x032deC3372F25C41EA8054B4987a7c4832CDB338", "0x62cA254a363dc3c748e7E955c20447aB5bF06fF7", "0xF3e4872e6a4cF365888D93b6146a2bAA7348F1A4", "0x2816169A49953C548BfEb3948dCF05c4A0E4657D", "0x4f0CA3df1c2e6b943cf82E649d576ffe7B2fABCF", "0xe5b26BA77E6a4d79a7c54a5296d81254269D9700", "0x0e397938C1Aa0680954093495B70A9F5e2249aBa", "0xFeDC5f4a6c38211c1338aa411018DFAf26612c08", "0x073E7a0669833d356fa88ca65CC6D454EFaAa3c5", "0xcDD60D15125bf3362b6838D2506b0Fa33bc1a515", "0xfDb46864A7C476F0914c5E82CdED3364a9F56F8a"],
        R = "c20000714";

      function Z(e) {
        return !!e.address && (e.blockchain.name.toLowerCase() === T.J.solana.toLowerCase() ? V.includes(e.address) : e.blockchain.name.toLowerCase() === T.J.ethereum.toLowerCase() && O.includes(e.address))
      }
      var I = r(64145),
        _ = r(89408),
        U = r(26858),
        z = r(47991),
        H = r(75485),
        q = r(10537),
        X = r(82361),
        G = r(69275),
        K = r(79960),
        Q = r(33055),
        J = r(29251),
        Y = Object.defineProperty,
        $ = Object.defineProperties,
        ee = Object.getOwnPropertyDescriptors,
        te = Object.getOwnPropertySymbols,
        re = {}.hasOwnProperty,
        ne = {}.propertyIsEnumerable,
        ae = (e, t, r) => t in e ? Y(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        ie = (e, t) => {
          for (var r in t || (t = {})) re.call(t, r) && ae(e, r, t[r]);
          if (te)
            for (var r of te(t)) ne.call(t, r) && ae(e, r, t[r]);
          return e
        },
        se = (e, t) => $(e, ee(t));
      const oe = e => {
          const t = (0, q.n)(),
            r = (0, K.t)(),
            n = (0, X.B)();
          return (0, u.useMemo)(() => e.reduce((e, a) => {
            var i;
            const s = n.find(e => e.id === a.assetId);
            return e.push(se(ie({}, a), {
              fiat: s,
              blockchain: t[a.blockchainId],
              balance: (null == (i = r[a.assetId]) ? void 0 : i.balance) || "0"
            })), e
          }, []).sort(H.JG), [e, r, n, t])
        },
        le = e => {
          const t = (0, z.P)(),
            [r, n] = (0, u.useState)(null),
            a = (0, u.useMemo)(() => t.find(t => e === t.assetId), [t, e]);
          (0, u.useEffect)(() => {
            !a && e && ((e, t, r) => {
              new Promise((e, t) => {
                var n = e => {
                    try {
                      i(r.next(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  a = e => {
                    try {
                      i(r.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  i = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, a);
                i((r = r.apply(null, null)).next())
              })
            })(0, 0, function*() {
              const {
                address: t
              } = (0, H.$5)(e), {
                data: r
              } = yield I.YW.emit(_.A.SEARCH_ASSETS, {
                query: t,
                networks: [(0, H.er)(e)],
                includeNonCustomTokenNetworks: !0
              });
              r?.length && n(r[0])
            })
          }, [a, e]);
          const i = a || r;
          return oe(i ? [i] : [])
        };
      var de = r(8360),
        ce = r(8168),
        he = r(22146),
        ue = r(79830),
        pe = r(38795),
        fe = r(2543),
        me = r(6442),
        Fe = Object.defineProperty,
        Ce = Object.defineProperties,
        xe = Object.getOwnPropertyDescriptors,
        be = Object.getOwnPropertySymbols,
        ke = {}.hasOwnProperty,
        ve = {}.propertyIsEnumerable,
        ge = (e, t, r) => t in e ? Fe(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r;
      const Le = ({
          header: e,
          defaultAssets: t,
          reservedAsset: r,
          scopedBlockchain: a,
          selectedAsset: i,
          onAssetSelect: s,
          opened: o,
          onClose: l
        }) => {
          const {
            formatMessage: d
          } = (0, me.A)(), c = le(a), h = (0, q.n)(), [p, f] = (0, u.useState)(""), [m, F] = (0, u.useState)(!1), {
            flattenData: C,
            isFetching: x,
            setQuery: b
          } = (0, pe.r)([a], !0), k = p.length > 0 ? {
            search: {
              title: d({
                id: "asset-selection-modal.search-results-category"
              }),
              items: [...c.filter(e => e.symbol.toLowerCase().includes(p.toLowerCase()) || e.name.toLowerCase().includes(p.toLowerCase())), ...C.map(e => ((e, t) => Ce(e, xe(t)))(((e, t) => {
                for (var r in t || (t = {})) ke.call(t, r) && ge(e, r, t[r]);
                if (be)
                  for (var r of be(t)) ve.call(t, r) && ge(e, r, t[r]);
                return e
              })({}, e), {
                blockchain: h[e.blockchainId]
              }))]
            }
          } : t, v = (0, u.useCallback)((0, fe.debounce)(e => {
            b(e)
          }, 400), []);

          function g() {
            f(""), l()
          }
          return (0, u.useEffect)(() => {
            o && b("")
          }, [o, b]), (0, u.useEffect)(() => {
            const e = v;
            return p.length > 0 ? (F(!0), e(p)) : (F(!1), e("")), () => e.cancel()
          }, [p]), (0, u.useEffect)(() => {
            x || F(!1)
          }, [x]), (0, n.jsx)(he.a, {
            title: e,
            opened: o,
            onClose: g,
            children: (0, n.jsxs)("div", {
              className: "flex flex-col min-h-[400px] space-y-4",
              children: [(0, n.jsx)(de.D, {
                testid: "assets-search-input",
                placeholder: d({
                  id: "asset-selection-modal.input-placeholder"
                }),
                value: p,
                onChange: function(e) {
                  f(e.target.value)
                }
              }), m ? (0, n.jsx)("div", {
                className: "flex justify-center",
                children: (0, n.jsx)(ue.y, {})
              }) : (0, n.jsx)(j.z6, {
                value: i,
                onChange: function(e) {
                  let t;
                  for (const r of Object.keys(k))
                    if (t = k[r].items.find(t => t.assetId === e), t) {
                      s(t);
                      break
                    } g()
                },
                children: Object.keys(k).filter(e => k[e].items.length > 0 || "" !== p).map(e => (0, n.jsx)(ce.b, {
                  title: k[e].title,
                  children: k[e].items.length > 0 ? k[e].items.map(e => (0, n.jsx)(S, {
                    name: e.name,
                    symbol: e.symbol,
                    iconUrl: e.iconUrl,
                    blockchain: e.blockchain,
                    balance: e.balance,
                    value: e.assetId,
                    contractAddress: e.address,
                    disabled: r === e.assetId,
                    isRwa: Z(e)
                  }, e.assetId)) : (0, n.jsx)(w.B, {})
                }, e))
              })]
            })
          })
        },
        we = 60 * Math.PI,
        Ae = ({
          progress: e
        }) => {
          const t = we - e / 100 * we;
          return (0, n.jsx)("div", {
            className: "relative w-6 h-6",
            children: (0, n.jsxs)("svg", {
              className: "w-full h-full",
              viewBox: "0 0 100 100",
              children: [(0, n.jsx)("circle", {
                className: "text-backgroundTertiary stroke-current",
                strokeWidth: 10,
                cx: 50,
                cy: 50,
                r: 30,
                fill: "transparent"
              }), (0, n.jsx)("circle", {
                className: "text-primary -rotate-90 origin-[50%_50%] progress-ring__circle stroke-current",
                style: {
                  transition: "stroke-dashoffset 0.35s"
                },
                strokeWidth: 10,
                strokeLinecap: "round",
                cx: 50,
                cy: 50,
                r: 30,
                fill: "transparent",
                strokeDasharray: `${we} ${we}`,
                strokeDashoffset: t
              })]
            })
          })
        },
        ye = ({
          isLoading: e,
          rate: t,
          refreshInterval: r,
          runCountdown: a,
          onCountdownFinish: i
        }) => {
          const {
            formatMessage: s
          } = (0, me.A)(), [o, l] = (0, u.useState)(0), d = r + 1, c = 1e3 * (d - o) / (1e3 * d / 100);
          return (0, u.useEffect)(() => {
            let e;
            return o > 1 ? e = setTimeout(() => {
              l(e => e - 1)
            }, 1e3) : 1 === o && i(), () => {
              clearTimeout(e)
            }
          }, [o]), (0, u.useEffect)(() => {
            l(a ? d : 0)
          }, [a]), (0, n.jsx)("div", {
            className: "flex items-center space-x-2",
            children: (0, n.jsx)("div", {
              className: "flex items-center space-x-1 min-h-6 " + (e ? "opacity-50" : "opacity-100"),
              children: t ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(Ae, {
                  progress: c
                }), (0, n.jsxs)(B.E, {
                  theme: N.Il.SECONDARY,
                  children: [t.fromAsset.amount, " ", t.fromAsset.symbol]
                }), (0, n.jsx)(B.E, {
                  theme: N.Il.SECONDARY,
                  children: "="
                }), (0, n.jsxs)(B.E, {
                  theme: N.Il.SECONDARY,
                  children: [t.toAsset.amount, " ", t.toAsset.symbol]
                })]
              }) : (0, n.jsxs)(B.E, {
                theme: N.Il.SECONDARY,
                children: [s({
                  id: "dashboard.find-best-price"
                }), "..."]
              })
            })
          })
        },
        De = ({
          name: e,
          iconUrl: t,
          value: r
        }) => (0, n.jsx)(j.sx, {
          as: "div",
          value: r,
          className: "cursor-pointer",
          children: ({
            checked: r
          }) => (0, n.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [(0, n.jsxs)("div", {
              className: "flex items-center space-x-2",
              children: [(0, n.jsx)(D.q, {
                src: t,
                name: e
              }), (0, n.jsx)(B.E, {
                type: N.jK.TITLE,
                theme: r ? N.Il.BRAND : N.Il.PRIMARY,
                children: e
              })]
            }), (0, n.jsx)("div", {
              className: "flex items-center space-x-1",
              children: r && (0, n.jsx)(y.S, {
                width: 20,
                height: 20,
                colorClass: "text-primary"
              })
            })]
          })
        }),
        Ee = ({
          domains: e,
          selectedNetwork: t,
          onNetworkSelect: r,
          opened: a,
          onClose: i
        }) => {
          const {
            formatMessage: s
          } = (0, me.A)(), o = function(e) {
            const t = (0, q.n)(!0);
            return (0, u.useMemo)(() => t.filter(t => e.includes((0, H.er)(t.coinId))), [e, t])
          }(e), [l, d] = (0, u.useState)(""), c = l.length > 0 ? o.filter(e => {
            var t;
            const r = l.toLowerCase().trim();
            return e.symbol.toLowerCase().includes(r) || e.name.toLowerCase().includes(r) || (null == (t = e.displayName) ? void 0 : t.toLowerCase().includes(r))
          }) : o;

          function h() {
            d(""), i()
          }
          return (0, n.jsx)(he.a, {
            title: s({
              id: "network-selection-modal.choose-network"
            }),
            opened: a,
            onClose: h,
            children: (0, n.jsxs)("div", {
              className: "flex flex-col min-h-[400px] space-y-4",
              children: [(0, n.jsx)(de.D, {
                placeholder: s({
                  id: "network-selection-modal.input-placeholder"
                }),
                value: l,
                onChange: function(e) {
                  d(e.target.value)
                }
              }), (0, n.jsx)(j.z6, {
                value: t,
                onChange: function(e) {
                  const t = o.find(t => t.id === e);
                  t && r(t), h()
                },
                className: "space-y-4",
                children: c.length > 0 ? c.map(e => {
                  var t;
                  return (0, n.jsx)(De, {
                    name: null != (t = e.displayName) ? t : e.name,
                    iconUrl: e.iconUrl,
                    value: e.id
                  }, e.id)
                }) : (0, n.jsx)(w.B, {})
              })]
            })
          })
        };
      var Be = r(2454),
        Ne = r(33647),
        Me = r(68157);

      function je(e) {
        return (0, Me.GV)(e => e.swap.settings)[e]
      }
      var Pe = r(67008),
        We = r(4387);
      r(56120);
      const Se = ({
        opened: e,
        onClose: t
      }) => {
        const {
          formatMessage: r
        } = (0, me.A)(), a = je("mev"), i = je("thorchainStreams"), s = je("solanaTurboSwaps"), o = (je("environment"), (0, u.useMemo)(() => (0, fe.uniqueId)("mev-tooltip-"), [])), l = (0, u.useMemo)(() => (0, fe.uniqueId)("thorchain-tooltip-"), []), d = (0, u.useMemo)(() => (0, fe.uniqueId)("solana-tooltip-"), []), c = (0, u.useMemo)(() => (0, fe.uniqueId)("env-tooltip-"), []);
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(he.a, {
            title: r({
              id: "settings-modal.title"
            }),
            opened: e,
            onClose: t,
            children: (0, n.jsxs)("div", {
              className: "flex flex-col space-y-5",
              children: [(0, n.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, n.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, n.jsx)(B.E, {
                    type: N.jK.TITLE,
                    children: r({
                      id: "settings-modal.mev-protection"
                    })
                  }), (0, n.jsx)("div", {
                    "data-tooltip-id": o,
                    "data-tooltip-content": r({
                      id: "settings-modal.mev-tooltip"
                    }),
                    children: (0, n.jsx)(Be.m, {
                      colorClass: "text-iconNormal",
                      height: 16,
                      width: 16
                    })
                  })]
                }), (0, n.jsx)(Ne.d, {
                  testid: "settings-mev-switch",
                  checked: a,
                  onChange: () => {
                    Me.M_.dispatch(We.W.actions.toggleMev())
                  }
                })]
              }), (0, n.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, n.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, n.jsx)(B.E, {
                    type: N.jK.TITLE,
                    children: r({
                      id: "settings-modal.thorchain-streaming",
                      defaultMessage: "Thorchain streams"
                    })
                  }), (0, n.jsx)("div", {
                    "data-tooltip-id": l,
                    "data-tooltip-content": r({
                      id: "settings-modal.thorchain-tooltip",
                      defaultMessage: "Gives better quote, but takes longer to process the swap"
                    }),
                    children: (0, n.jsx)(Be.m, {
                      colorClass: "text-iconNormal",
                      height: 16,
                      width: 16
                    })
                  })]
                }), (0, n.jsx)(Ne.d, {
                  testid: "settings-thorchain-switch",
                  checked: i,
                  onChange: () => {
                    Me.M_.dispatch(We.W.actions.toggleThorchainStreams())
                  }
                })]
              }), (0, n.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, n.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, n.jsx)(B.E, {
                    type: N.jK.TITLE,
                    children: r({
                      id: "settings-modal.solana-turbo-swaps",
                      defaultMessage: "Solana turbo swaps"
                    })
                  }), (0, n.jsx)("div", {
                    "data-tooltip-id": d,
                    "data-tooltip-content": r({
                      id: "settings-modal.solana-tooltip",
                      defaultMessage: "Control how fast your transactions will land. Turbo costs more SOL, but will also be faster."
                    }),
                    children: (0, n.jsx)(Be.m, {
                      colorClass: "text-iconNormal",
                      height: 16,
                      width: 16
                    })
                  })]
                }), (0, n.jsx)(Ne.d, {
                  testid: "settings-solana-switch",
                  checked: s,
                  onChange: () => {
                    Me.M_.dispatch(We.W.actions.toggleSolanaTurboSwaps())
                  }
                })]
              }), !1]
            })
          }), (0, n.jsx)(Pe.m_, {
            id: o,
            className: "tw-tooltip"
          }), (0, n.jsx)(Pe.m_, {
            id: l,
            className: "tw-tooltip"
          }), (0, n.jsx)(Pe.m_, {
            id: d,
            className: "tw-tooltip"
          }), (0, n.jsx)(Pe.m_, {
            id: c,
            className: "tw-tooltip"
          })]
        })
      };
      var Te = r(9505),
        Ve = r(65512),
        Oe = r(16665);
      const Re = ({
        defaultSlippage: e = "2",
        onSave: t,
        opened: r,
        onClose: a
      }) => {
        const {
          formatMessage: i
        } = (0, me.A)(), [s, o] = (0, u.useState)(e), l = (0, Te.R)({
          value: s,
          min: 0,
          max: 30
        });
        return (0, u.useEffect)(() => {
          o(e)
        }, [e]), (0, n.jsx)(he.a, {
          title: i({
            id: "swap-details.slippage-tolerance"
          }),
          opened: r,
          onClose: function() {
            a(), o(e)
          },
          children: (0, n.jsxs)("div", {
            className: "flex flex-col space-y-4",
            children: [(0, n.jsx)(Oe.S, {
              onlyPositive: !0,
              value: s,
              validation: l,
              onChange: function(e) {
                const t = e.target.value;
                isNaN(+t) || t.startsWith("0x") || o(t)
              }
            }), (0, n.jsx)(Ve.$, {
              onClick: function() {
                t(s), a()
              },
              disabled: !l.isValid,
              "data-testid": "save-slippage-button",
              children: i({
                id: "generic.save"
              })
            })]
          })
        })
      };
      var Ze = r(45132),
        Ie = r(7707),
        _e = r(26113);
      const Ue = e => {
        const t = (0, X.B)(),
          {
            getAsset: r
          } = (0, u.useContext)(g);
        return (0, u.useMemo)(() => {
          var n;
          if (!e) return null;
          const a = r(e);
          return a ? a.price : (null == (n = t.find(t => t.id === e)) ? void 0 : n.price.toString()) ?? null
        }, [e])
      };
      var ze, He = r(21190),
        qe = r(94893),
        Xe = r(52619),
        Ge = r(152),
        Ke = r(41327),
        Qe = r(69666),
        Je = r(98005),
        Ye = r(40980),
        $e = r(42201),
        et = r(50784),
        tt = r(68632),
        rt = r(48346),
        nt = r(21612),
        at = r(64920),
        it = r(15192),
        st = ((ze = st || {}).FROM = "FROM", ze.TO = "TO", ze),
        ot = r(86170);
      const lt = ({
          origin: e,
          network: t,
          asset: r,
          amount: a,
          priceImpact: s,
          isLoading: o = !1,
          disabled: l = !1,
          children: d,
          onAmountChange: c,
          onNetworkClick: h,
          onTokenClick: p,
          onAmountExcess: f,
          testid: m
        }) => {
          var F;
          const {
            formatMessage: C
          } = (0, me.A)(), x = (0, nt.s)(), {
            baseCurrencyType: b,
            currency: k
          } = (0, ot.P)(), {
            walletBalance: v,
            fiatAmount: L,
            isLoading: w
          } = ((e, t) => {
            var r;
            const [n, a] = (0, u.useState)("0"), [i, s] = (0, u.useState)("0"), [o, l] = (0, u.useState)(!1), {
              getAsset: d,
              setAsset: c
            } = (0, u.useContext)(g), h = (0, Ie.A)(null != (r = e?.assetId) ? r : ""), p = (0, X.B)(), f = (0, u.useMemo)(() => {
              var t;
              if (e) return null == (t = p.find(t => t.id === e.assetId)) ? void 0 : t.price.toString()
            }, [e?.assetId]), m = parseFloat(t) * parseFloat(f ?? i);
            return (0, u.useEffect)(() => {
              ((e, t, r) => new Promise((e, t) => {
                var n = e => {
                    try {
                      i(r.next(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  a = e => {
                    try {
                      i(r.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  i = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, a);
                i((r = r.apply(null, null)).next())
              }))(0, 0, function*() {
                if (e && (a(h), "0" === h && !f)) {
                  let t = "0",
                    r = "0";
                  const n = d(e.assetId);
                  if (n) t = n.balance, r = n.price;
                  else {
                    l(!0);
                    const n = yield I.YW.emit(Ze.A.FETCH_SWAP_ASSET_BALANCE, e);
                    t = n.balance, r = n.price, c(e.assetId, n)
                  }
                  a(t), s(r)
                }
              }).catch(_e.Z).finally(() => l(!1))
            }, [e?.assetId]), {
              walletBalance: n,
              fiatAmount: m,
              isLoading: o
            }
          })(r, a.length > 0 ? a : "0"), A = e === st.FROM && !r?.address, y = parseFloat(v) > 0, j = e === st.FROM && (y || r?.isBuyCryptoEnabled), P = e === st.TO && o, W = (0, at.W)((0, it.A)(v), 5), S = (() => {
            if (!w && e === st.FROM) try {
              return new it.A(a).gt(v)
            } catch {}
            return !1
          })(), T = u.Children.toArray(d).filter(Boolean).length > 0, V = s && 0 !== parseFloat(s), O = V && parseFloat(s) > 0;
          return (0, u.useEffect)(() => {
            f?.(S)
          }, [S]), (0, n.jsxs)(Ge.Z, {
            error: S,
            noPadding: !0,
            children: [(0, n.jsxs)("div", {
              className: "flex flex-col space-y-3 p-4",
              children: [(0, n.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, n.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, n.jsx)(B.E, {
                    theme: N.Il.SECONDARY,
                    type: N.jK.CAPTION,
                    children: C({
                      id: "generic." + (e === st.FROM ? "from" : "to")
                    })
                  }), (0, n.jsx)(qe.c, {
                    onClick: () => h(e),
                    children: (0, n.jsxs)("div", {
                      className: "flex items-center",
                      children: [(0, n.jsx)(D.q, {
                        src: t.iconUrl,
                        name: t.name,
                        size: tt.Y.XXSMALL
                      }), (0, n.jsx)("div", {
                        className: "ml-1 mr-px",
                        children: (0, n.jsx)(B.E, {
                          type: N.jK.CAPTION,
                          theme: N.Il.SECONDARY,
                          weight: N.nG.MEDIUM,
                          children: null != (F = t.displayName) ? F : t.name
                        })
                      }), (0, n.jsx)(Ke.v, {
                        width: 16,
                        height: 16,
                        colorClass: "text-iconNormal"
                      })]
                    })
                  })]
                }), r && (0, n.jsx)("div", {
                  className: "flex flex-1 items-center justify-end",
                  children: w ? (0, n.jsx)(rt.S, {
                    widthClass: "w-22.5",
                    heightClass: "h-4"
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(Je.l, {
                      width: 16,
                      height: 16,
                      colorClass: "text-iconNormal"
                    }), (0, n.jsx)("div", {
                      className: "flex ml-1.25",
                      children: (0, n.jsx)(B.E, {
                        testid: m + "-wallet-balance",
                        type: N.jK.CAPTION,
                        theme: N.Il.SECONDARY,
                        children: W
                      })
                    }), !A && j && (0, n.jsx)("div", {
                      className: "ml-2.5",
                      children: (0, n.jsx)(Ve.$, {
                        testid: m + "-max-button",
                        theme: Xe.ry.INVERSE_BRAND,
                        shape: Xe.dB.TINY,
                        disabled: l,
                        onClick: y ? function() {
                          r && c?.(v)
                        } : function() {
                          return ((e, t, r) => new Promise((t, n) => {
                            var a = e => {
                                try {
                                  s(r.next(e))
                                } catch (e) {
                                  n(e)
                                }
                              },
                              i = e => {
                                try {
                                  s(r.throw(e))
                                } catch (e) {
                                  n(e)
                                }
                              },
                              s = e => e.done ? t(e.value) : Promise.resolve(e.value).then(a, i);
                            s((r = r.apply(e, null)).next())
                          }))(this, 0, function*() {
                            yield x(`${i.b.BUY}/${r?.assetId}`)
                          })
                        },
                        children: (0, n.jsx)(B.E, {
                          theme: N.Il.BRAND,
                          type: N.jK.CAPTION,
                          weight: N.nG.MEDIUM,
                          children: y ? "Max" : C({
                            id: "generic.buy"
                          })
                        })
                      })
                    })]
                  })
                })]
              }), (0, n.jsxs)("div", {
                className: "flex items-center justify-between space-x-2",
                children: [r ? (0, n.jsx)(He.W, {
                  testid: m + "-asset-selector",
                  iconUrl: r.iconUrl,
                  symbol: r.symbol,
                  contractAddress: r.address,
                  onClick: () => p(e)
                }) : (0, n.jsxs)("div", {
                  className: "flex items-center space-x-2.5",
                  children: [(0, n.jsx)(Ve.$, {
                    testid: m + "-asset-selector-empty",
                    onClick: () => p(e),
                    shape: Xe.dB.ICON_CIRCLE,
                    theme: Xe.ry.SUBTLE,
                    fullWidth: !1,
                    children: (0, n.jsx)(Qe.c, {
                      width: 20,
                      height: 20,
                      colorClass: "text-primary"
                    })
                  }), (0, n.jsx)(qe.c, {
                    onClick: () => p(e),
                    children: (0, n.jsxs)("div", {
                      className: "flex items-center space-x-1",
                      children: [(0, n.jsx)(B.E, {
                        type: N.jK.TITLE,
                        weight: N.nG.SEMIBOLD,
                        children: C({
                          id: "dashboard.select-token"
                        })
                      }), (0, n.jsx)(Ke.v, {
                        width: 20,
                        height: 20,
                        colorClass: "text-iconNormal"
                      })]
                    })
                  })]
                }), r ? (0, n.jsxs)("div", {
                  className: "flex flex-col w-full items-end space-y-1 overflow-hidden",
                  children: [e === st.FROM ? (0, n.jsx)(Ye.R, {
                    testid: m + "-amount-input",
                    placeholder: "0",
                    value: a,
                    disabled: l,
                    amountType: $e.yf.CRYPTO,
                    onChange: e => c?.(e)
                  }) : o ? (0, n.jsx)(rt.S, {
                    widthClass: "w-40",
                    heightClass: "h-8"
                  }) : (0, n.jsx)(E.h, {
                    fitFontSizeToContainer: !0,
                    testid: m + "-amount-input-readonly",
                    amountType: M.Cu.CRYPTO,
                    textType: N.jK.HEADLINE,
                    value: a
                  }), w || P ? (0, n.jsx)(rt.S, {
                    widthClass: "w-28",
                    heightClass: "h-4"
                  }) : S ? (0, n.jsx)(B.E, {
                    type: N.jK.CAPTION,
                    theme: N.Il.ERROR,
                    weight: N.nG.MEDIUM,
                    children: C({
                      id: "dashboard.balance-exceeded"
                    })
                  }) : (0, n.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [(0, n.jsx)(E.h, {
                      testid: m + "-amount-fiat",
                      textType: N.jK.CAPTION,
                      theme: N.Il.SECONDARY,
                      weight: N.nG.NORMAL,
                      prefix: L > 0 ? "≈" : "",
                      amountType: b,
                      value: L,
                      currency: k
                    }), V && (0, n.jsxs)(B.E, {
                      type: N.jK.CAPTION,
                      weight: N.nG.MEDIUM,
                      theme: O ? N.Il.SUCCESS : N.Il.ERROR,
                      children: ["(", O && "+", s, "%)"]
                    })]
                  })]
                }) : (0, n.jsx)("div", {
                  className: "flex text-end",
                  children: (0, n.jsx)(B.E, {
                    type: N.jK.HEADLINE,
                    children: "0"
                  })
                })]
              })]
            }), T && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(et.c, {
                noMargin: !0
              }), (0, n.jsx)("div", {
                className: "px-4 py-2",
                children: d
              })]
            })]
          })
        },
        dt = ({
          label: e,
          loading: t,
          children: r,
          wrap: a = !0
        }) => (0, n.jsxs)("li", {
          className: "flex items-center justify-between py-2 space-x-1.25",
          children: [(0, n.jsx)(B.E, {
            type: N.jK.CAPTION,
            theme: N.Il.SECONDARY,
            children: e
          }), (0, n.jsx)("div", {
            className: `flex ${a?"flex-wrap":""} items-center justify-end space-x-1.25 *:whitespace-nowrap`,
            children: t ? (0, n.jsx)(rt.S, {
              widthClass: "w-22.5",
              heightClass: "h-4"
            }) : r
          })]
        });
      var ct = r(75321);
      const ht = ({
        isLoading: e,
        disabled: t,
        receiveAsset: r,
        minimumAmount: a,
        provider: i,
        fees: s,
        slippage: o,
        openSlippageModal: l
      }) => {
        var d, c, h, u;
        const {
          formatMessage: p
        } = (0, me.A)(), f = Ue(null == (d = s.routing.breakdown[0]) ? void 0 : d.assetId), m = Ue(null == (c = s.provider.breakdown[0]) ? void 0 : c.assetId), F = Ue(null == (h = s.relayer.breakdown[0]) ? void 0 : h.assetId), C = Ue(r.assetId), x = s.routing.total * (f ? parseFloat(f) : 0), b = s.provider.total * (m ? parseFloat(m) : 0), k = s.relayer.total * (F ? parseFloat(F) : 0), {
          currency: v,
          baseCurrencyType: g
        } = (0, ot.P)(), L = parseFloat(a) * (C ? parseFloat(C) : 0), w = "thorchain" !== i?.id;
        return (0, n.jsx)(Ge.Z, {
          children: (0, n.jsxs)("ul", {
            children: [(0, n.jsxs)(dt, {
              label: p({
                id: "swap-details.provider"
              }),
              loading: e,
              children: [(0, n.jsx)(D.q, {
                src: i?.favIconUrl,
                name: null != (u = i?.title) ? u : "",
                size: tt.Y.XSMALL
              }), (0, n.jsx)(B.E, {
                type: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                children: i?.title
              })]
            }), s.provider.total > 0 && (0, n.jsx)(dt, {
              label: p({
                id: "swap-details.provider-fee"
              }),
              loading: e,
              children: (0, n.jsxs)("div", {
                className: "flex flex-col text-right",
                children: [(0, n.jsxs)("div", {
                  children: [(0, n.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    weight: N.nG.MEDIUM,
                    amountType: M.Cu.CRYPTO,
                    value: s.provider.total,
                    suffix: " " + s.provider.breakdown[0].symbol
                  }), b > 0 && (0, n.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    theme: N.Il.THIRD,
                    amountType: M.Cu.FIAT,
                    currency: v,
                    value: b,
                    prefix: "(≈",
                    suffix: ")"
                  })]
                }), s.relayer.total > 0 && (0, n.jsxs)("div", {
                  children: [(0, n.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    weight: N.nG.MEDIUM,
                    amountType: M.Cu.CRYPTO,
                    value: s.relayer.total,
                    suffix: " " + s.relayer.breakdown[0].symbol
                  }), k > 0 && (0, n.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    theme: N.Il.THIRD,
                    amountType: g,
                    value: k,
                    currency: v,
                    prefix: "(≈",
                    suffix: ")"
                  })]
                })]
              })
            }), s.routing.total > 0 && (0, n.jsxs)(dt, {
              label: p({
                id: "swap-details.routing-fee"
              }),
              loading: e,
              children: [(0, n.jsx)(E.h, {
                textType: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                amountType: M.Cu.CRYPTO,
                value: s.routing.total,
                suffix: " " + s.routing.breakdown[0].symbol
              }), x > 0 && (0, n.jsx)(E.h, {
                textType: N.jK.CAPTION,
                theme: N.Il.THIRD,
                amountType: g,
                value: x,
                currency: v,
                prefix: "(≈",
                suffix: ")"
              })]
            }), (0, n.jsxs)(dt, {
              label: p({
                id: "swap-details.minimum-amount-receive"
              }),
              loading: e,
              children: [(0, n.jsx)(E.h, {
                testid: "swap-min-amount",
                textType: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                amountType: M.Cu.CRYPTO,
                value: a,
                suffix: " " + r.symbol
              }), L > 0 && (0, n.jsx)(E.h, {
                textType: N.jK.CAPTION,
                theme: N.Il.THIRD,
                amountType: g,
                currency: v,
                value: L,
                prefix: "(≈",
                suffix: ")"
              })]
            }), w && (0, n.jsxs)(dt, {
              label: p({
                id: "swap-details.slippage-tolerance"
              }),
              loading: e,
              wrap: !1,
              children: [(0, n.jsxs)(B.E, {
                testid: "swap-slippage",
                type: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                children: [o, "%"]
              }), (0, n.jsx)(Ve.$, {
                disabled: t,
                onClick: l,
                theme: Xe.ry.TRANSPARENT,
                noPadding: !0,
                children: (0, n.jsx)(ct.R, {
                  width: 16,
                  height: 16,
                  colorClass: "text-iconNormal"
                })
              })]
            })]
          })
        })
      };
      var ut = r(23207),
        pt = Object.defineProperty,
        ft = Object.defineProperties,
        mt = Object.getOwnPropertyDescriptors,
        Ft = Object.getOwnPropertySymbols,
        Ct = {}.hasOwnProperty,
        xt = {}.propertyIsEnumerable,
        bt = (e, t, r) => t in e ? pt(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        kt = (e, t) => {
          for (var r in t || (t = {})) Ct.call(t, r) && bt(e, r, t[r]);
          if (Ft)
            for (var r of Ft(t)) xt.call(t, r) && bt(e, r, t[r]);
          return e
        },
        vt = (e, t) => ft(e, mt(t)),
        gt = r(97286),
        Lt = r(62942),
        wt = r(63111),
        At = r(81593),
        yt = r(31441),
        Dt = r(41314),
        Et = r(22670),
        Bt = r(99360),
        Nt = r(68969),
        Mt = r(97522),
        jt = r(28398),
        Pt = r(83071),
        Wt = r(93155),
        St = r(47767),
        Tt = r(45871),
        Vt = r(51594),
        Ot = r(9389);
      const Rt = ({
        width: e,
        height: t
      }) => (0, n.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? "138",
        height: t ?? "144",
        viewBox: "0 0 138 144",
        fill: "none",
        children: [(0, n.jsxs)("g", {
          clipPath: "url(#clip0_14295_9826)",
          children: [(0, n.jsx)("path", {
            d: "M6.635 77.0871H20.069L85.7773 53.1711V48.2814L80.289 46.284L1.14355 75.0896L6.635 77.0871Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, n.jsx)("path", {
            d: "M20.0723 84.1916V77.0871L85.7806 53.1711V60.2756L20.0723 84.1916Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M20.0723 82.0708V79.2668L85.7806 55.3477V58.1548L20.0723 82.0708Z",
            fill: "#48FF91",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M20.0688 77.0867H6.63477V84.1913H20.0688V77.0867Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M6.635 84.1915V77.087L1.14355 75.0895V82.1941L6.635 84.1915Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M20.0684 80.6011L85.7767 56.6852L101.854 62.5358L36.1457 86.4549",
            fill: "url(#paint0_linear_14295_9826)"
          }), (0, n.jsx)("path", {
            d: "M36.5527 76.1879L41.0581 77.8262",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M28.5498 80.2175L29.7533 80.6555",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M32.5156 79.6152L37.0178 81.2567",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M38.2002 81.6852L39.4037 82.1231",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M30.6555 20.9642C27.5963 22.0764 26.5314 26.8684 28.2768 31.6667C30.0222 36.465 33.8123 39.4896 36.3391 38.5696L44.518 35.5923L37.3189 18.5383L30.6555 20.9642Z",
            fill: "#2D9FFF"
          }), (0, n.jsx)("path", {
            d: "M37.3208 18.5409L30.6574 20.9668C27.9605 21.9466 26.8168 25.784 27.7746 29.9648L40.2288 25.4312L37.3208 18.5409Z",
            fill: "#1B1B1C"
          }), (0, n.jsx)("path", {
            d: "M30.6555 20.9642C27.5963 22.0764 26.5314 26.8684 28.2768 31.6667C30.0222 36.465 33.8123 39.4896 36.3391 38.5696L44.518 35.5923L37.3189 18.5383L30.6555 20.9642Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M32.248 25.9229C30.6223 26.5152 30.4017 29.4831 31.9045 32.0004C32.4906 32.9833 33.5523 33.9978 34.425 33.7647L39.3714 31.9657L36.5768 24.3508L32.248 25.9261V25.9229Z",
            fill: "#2D9FFF"
          }), (0, n.jsx)("path", {
            d: "M34.428 33.7613C35.3227 33.5218 35.8489 32.0915 34.6201 29.7506L37.8652 28.5691L39.3712 31.9623L34.4248 33.7613H34.428Z",
            fill: "#1B1B1C",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M32.248 25.9229C30.6223 26.5152 30.4017 29.4831 31.9045 32.0004C32.4906 32.9833 33.5523 33.9978 34.425 33.7647L39.3714 31.9657L36.5768 24.3508L32.248 25.9261V25.9229Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M39.5467 23.2668L32.25 25.9227C33.9482 25.3052 35.9803 27.6335 37.2279 30.5257C38.5732 33.6448 38.882 37.6429 36.3394 38.5691L43.7842 35.8596L39.5467 23.2668Z",
            fill: "#2D9FFF"
          }), (0, n.jsx)("path", {
            d: "M43.4567 34.884L42.8014 32.9338L38.2394 34.5942C38.2835 35.4385 38.2016 36.2262 37.959 36.8878L43.4567 34.8872V34.884Z",
            fill: "#1B1B1C"
          }), (0, n.jsx)("path", {
            d: "M39.5467 23.2668L32.25 25.9227C33.9482 25.3052 35.9803 27.6335 37.2279 30.5257C38.5732 33.6448 38.882 37.6429 36.3394 38.5691L43.7842 35.8596L39.5467 23.2668Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M60.3916 143.562C58.0633 144.41 55.357 143.285 53.2776 140.912C44.2228 131.057 40.1932 110.396 40.1932 95.2985V32.1988C40.1932 25.6614 34.894 19.4233 30.6533 20.9671L87.1683 0.396976C91.4184 -1.14995 96.7082 5.10393 96.7082 11.6288V74.7315C96.7082 104.026 107.54 118.049 109.61 120.412C111.686 122.784 116.724 123.061 116.724 123.061L60.3947 143.565L60.3916 143.562Z",
            fill: "url(#paint1_linear_14295_9826)"
          }), (0, n.jsx)("path", {
            d: "M40.1936 95.3021C40.1936 110.4 44.2232 131.061 53.2779 140.916C55.3541 143.288 58.0636 144.413 60.3919 143.566L116.721 123.062C116.721 123.062 111.686 122.785 109.607 120.412C107.54 118.049 96.7054 104.026 96.7054 74.732L40.1904 95.3021H40.1936Z",
            fill: "url(#paint2_linear_14295_9826)"
          }), (0, n.jsx)("path", {
            d: "M96.7122 74.7318V65.9481L40.1973 86.1306V95.2988C40.1973 102.454 41.1046 110.859 43.0202 118.771L99.3933 98.254C97.8212 91.893 96.7122 84.0922 96.7122 74.7287V74.7318Z",
            fill: "#1B1B1C",
            stroke: "#1B1B1C",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M60.3916 143.562C58.0633 144.41 55.357 143.285 53.2776 140.912C44.2228 131.057 40.1932 110.396 40.1932 95.2985V32.1988C40.1932 25.6614 34.894 19.4233 30.6533 20.9671L87.1683 0.396976C91.4184 -1.14995 96.7082 5.10393 96.7082 11.6288V74.7315C96.7082 104.026 107.54 118.049 109.61 120.412C111.686 122.784 116.724 123.061 116.724 123.061L60.3947 143.565L60.3916 143.562Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M60.3936 143.562C63.0274 142.605 64.4137 139.394 64.0955 135.686L120.425 115.182C120.74 118.89 119.356 122.098 116.723 123.058L60.3936 143.562Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M47.9189 43.5174V75.6784L74.0025 66.1826V34.0216L47.9189 43.5174Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M47.9189 34.9512V38.3318L64.8911 32.1566V28.7729L47.9189 34.9512Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M47.9189 75.6784C60.6882 71.0597 60.7008 38.864 47.9189 43.5174",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M91.0821 31.0332C92.6198 26.8694 91.49 22.6162 88.5585 21.5335C85.6269 20.4509 82.0038 22.9487 80.4661 27.1126C78.9283 31.2765 80.0581 35.5296 82.9896 36.6123C85.9212 37.6949 89.5443 35.1971 91.0821 31.0332Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M86.9309 29.5013C87.2667 28.5922 87.0202 27.6636 86.3803 27.4273C85.7405 27.191 84.9496 27.7364 84.6138 28.6456C84.2781 29.5548 84.5246 30.4834 85.1644 30.7197C85.8042 30.956 86.5951 30.4105 86.9309 29.5013Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M85.7715 21.4823V36.6586",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M79.5566 64.2281L86.9605 61.5312",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M79.5566 61.3074L90.0795 57.4763",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M79.5566 58.3868L90.0795 54.5557",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M79.5566 55.4659L90.0795 51.6348",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M79.5566 52.5451L90.0795 48.7172",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M74.0035 34.0215C61.2343 38.6402 61.2217 70.8359 74.0035 66.1825",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M53.5 125.807L57.3437 124.409",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M52.6094 123.211L71.5223 116.327",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M51.8184 120.58L68.948 114.345",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M51.1064 117.918L68.9481 111.425",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M36.1436 86.4539L101.852 62.5348L117.932 68.3885L52.2209 92.3045",
            fill: "url(#paint3_linear_14295_9826)"
          }), (0, n.jsx)("path", {
            d: "M96.7129 64.416V72.4405",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M131.37 64.3836H117.936L52.2246 88.2996V93.1893L57.7161 95.1899L136.858 66.3811L131.37 64.3836Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, n.jsx)("path", {
            d: "M136.858 66.3816V73.4893L57.7158 102.295V95.1905L136.858 66.3816Z",
            fill: "#2D9FFF"
          }), (0, n.jsx)("path", {
            d: "M75.9346 95.6623L78.6913 87.5527L80.15 87.0234L77.3082 95.1614L75.9346 95.6623Z",
            fill: "#F4F4F7"
          }), (0, n.jsx)("path", {
            d: "M77.3061 88.057L74.5525 96.1666L57.7158 102.294V95.1899L77.3061 88.057Z",
            fill: "#F4F4F7"
          }), (0, n.jsx)("path", {
            d: "M136.858 66.3816V73.4893L57.7158 102.295V95.1905L136.858 66.3816Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, n.jsx)("path", {
            d: "M61.8942 97.7789C62.1564 97.1229 62.0008 96.444 61.5467 96.2626C61.0927 96.0812 60.5121 96.4659 60.25 97.1219C59.9879 97.778 60.1435 98.4568 60.5975 98.6383C61.0515 98.8197 61.6321 98.4349 61.8942 97.7789Z",
            fill: "#0500FF"
          }), (0, n.jsx)("path", {
            d: "M108.094 76.8527V83.9573L89.5654 90.6995V83.595L108.094 76.8527Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M90.0029 87.0806L94.65 85.4392C96.408 84.8185 95.9575 83.7442 97.1547 83.2369C98.3488 82.7297 97.8951 86.2961 99.4798 85.7133C101.065 85.1336 101.024 80.9528 102.221 80.4329C103.292 79.9698 103.131 82.3957 104.36 81.9263L107.652 80.6598",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M105.237 75.8142L108.095 76.8539L89.5666 83.5961L86.709 82.5564L105.237 75.8142Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M52.2246 93.1891V100.297L57.7161 102.294V95.1897L52.2246 93.1891Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M70.5357 93.8979L69.2786 93.4411C69.1526 93.397 68.9572 93.397 68.7934 93.4569L64.9182 94.8683C64.6 94.9849 64.2944 95.2936 64.1243 95.719C63.8628 96.3743 64.0172 97.0548 64.4708 97.2344C64.4771 97.2344 64.4866 97.2407 64.4866 97.2407L65.7437 97.6975C65.7437 97.6975 66.985 96.9697 68.0814 96.097L68.847 95.8198C69.1652 95.7001 69.4708 95.3913 69.6409 94.966C69.6598 94.9187 69.6724 94.8683 69.6882 94.821C70.3025 94.3296 70.5325 93.9011 70.5325 93.9011L70.5357 93.8979Z",
            fill: "#48FF91",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, n.jsx)("path", {
            d: "M70.5534 93.9047C70.3958 93.8417 70.2226 93.848 70.0493 93.9079L66.1741 95.3225C65.8559 95.439 65.5503 95.7478 65.3801 96.1731C65.1186 96.8285 65.273 97.509 65.7267 97.6886C65.8842 97.7516 66.0575 97.7421 66.2308 97.6791L70.106 96.2676C70.4242 96.1511 70.7298 95.8423 70.8999 95.417C71.1614 94.7617 71.0071 94.0812 70.5534 93.9016V93.9047Z",
            fill: "#48FF91",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, n.jsx)("path", {
            d: "M40.1973 84.9767V87.9665",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M40.2002 84.9772L96.7151 64.4166",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M45.4404 86.0369L49.0195 87.3412",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M84.9219 72.6833L88.5009 73.9845",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M47.584 82.2904L52.0893 83.9318",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M53.2715 84.3607L54.4782 84.7986",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M58.4404 80.1189L62.9457 81.7603",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M82.959 69.4236L87.4643 71.0619",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M64.1279 82.1896L65.3315 82.6275",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M80.0186 74.2587L81.2221 74.6967",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M56.0371 80.5033L57.2406 80.9412",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M72.1152 73.3353L73.9111 73.9906",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M75.0967 74.4205L76.3002 74.8584",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, n.jsx)("path", {
            d: "M102.557 66.4966L103.76 66.9377",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }), (0, n.jsxs)("defs", {
          children: [(0, n.jsxs)("linearGradient", {
            id: "paint0_linear_14295_9826",
            x1: "66.4164",
            y1: "84.93",
            x2: "56.2464",
            y2: "60.0185",
            gradientUnits: "userSpaceOnUse",
            children: [(0, n.jsx)("stop", {
              stopColor: "#48FF91"
            }), (0, n.jsx)("stop", {
              offset: "1",
              stopColor: "#2D9FFF"
            })]
          }), (0, n.jsxs)("linearGradient", {
            id: "paint1_linear_14295_9826",
            x1: "54.2984",
            y1: "22.7251",
            x2: "51.006",
            y2: "13.8216",
            gradientUnits: "userSpaceOnUse",
            children: [(0, n.jsx)("stop", {
              stopColor: "#FFAEFE"
            }), (0, n.jsx)("stop", {
              offset: "0.97",
              stopColor: "#FFEF6A"
            }), (0, n.jsx)("stop", {
              offset: "1",
              stopColor: "#FFF465"
            })]
          }), (0, n.jsxs)("linearGradient", {
            id: "paint2_linear_14295_9826",
            x1: "67.8556",
            y1: "91.6884",
            x2: "85.5775",
            y2: "136.373",
            gradientUnits: "userSpaceOnUse",
            children: [(0, n.jsx)("stop", {
              stopColor: "#FFF465",
              stopOpacity: "0"
            }), (0, n.jsx)("stop", {
              offset: "1",
              stopColor: "#FFF465"
            })]
          }), (0, n.jsxs)("linearGradient", {
            id: "paint3_linear_14295_9826",
            x1: "78.147",
            y1: "80.1401",
            x2: "67.9769",
            y2: "55.2254",
            gradientUnits: "userSpaceOnUse",
            children: [(0, n.jsx)("stop", {
              stopColor: "#48FF91"
            }), (0, n.jsx)("stop", {
              offset: "1",
              stopColor: "#2D9FFF"
            })]
          }), (0, n.jsx)("clipPath", {
            id: "clip0_14295_9826",
            children: (0, n.jsx)("rect", {
              width: "136.637",
              height: "144",
              fill: "white",
              transform: "translate(0.681641)"
            })
          })]
        })]
      });
      var Zt = r(58065);
      const It = ({
        opened: e,
        onClose: t,
        setSpendAsset: r,
        setReceiveAsset: a,
        pendingRawToken: i,
        setIsUSCitizenError: s
      }) => {
        const {
          formatMessage: o
        } = (0, me.A)();
        return (0, n.jsx)(he.a, {
          opened: e,
          onClose: t,
          children: (0, n.jsxs)("div", {
            className: "flex flex-col min-h-[316px] space-y-8 m-4 items-center",
            children: [(0, n.jsx)(Rt, {}), (0, n.jsx)("h2", {
              className: "text-textPrimary text-center font-inter text-[24px] font-bold leading-[30px]",
              children: o({
                id: "us-citizen-modal.title",
                defaultMessage: "Are you a US citizen?"
              })
            }), (0, n.jsx)("p", {
              className: "text-textSecondary text-center font-inter text-[16px] font-medium leading-[24px]",
              children: (0, n.jsx)(Zt.A, {
                id: "modal.us-citizen-alert",
                defaultMessage: "I acknowledge and agree that these RWAs are not to be offered, sold, or delivered in the US, UK, EU, or to US Persons (as defined in Rule 902 of Regulation S of the U.S. Securities Act of 1933, as amended). I further acknowledge that any acquisition in breach of these restrictions may result in my holdings being suspended, cancelled, or required to be sold. Read <a1>here</a1> for more information. Subjects to <a2>T&Cs</a2> and the <a3>Risk Disclosures</a3>. I hereby certify that:",
                values: {
                  a1: e => (0, n.jsx)("a", {
                    target: "_blank",
                    rel: "noopener nofollow noreferrer",
                    className: "underline hover:text-blue-600",
                    href: "https://trustwallet.com",
                    children: e
                  }),
                  a2: e => (0, n.jsx)("a", {
                    target: "_blank",
                    rel: "noopener nofollow noreferrer",
                    className: "underline hover:text-blue-600",
                    href: "https://trustwallet.com/terms-of-service",
                    children: e
                  }),
                  a3: e => (0, n.jsx)("a", {
                    target: "_blank",
                    rel: "noopener nofollow noreferrer",
                    className: "underline hover:text-blue-600",
                    href: "https://docs.google.com/document/d/1CaX4RkQmTQTX3rAq7NGXaPUH2ovCmxIWV8p3eQ6kql0/edit?tab=t.0",
                    children: e
                  })
                }
              })
            }), (0, n.jsxs)("div", {
              className: "w-full py-3 flex flex-col gap-3",
              children: [(0, n.jsx)(Ve.$, {
                onClick: function() {
                  if (!i.asset) throw Error("pending RAW Asset is not defined.");
                  Me.M_.dispatch(We.W.actions.setIsUSCitizen(!1)), i.swapOrigin === st.FROM ? r(i.asset) : a(i.asset), t()
                },
                shape: Xe.dB.DEFAULT,
                theme: Xe.ry.PRIMARY,
                size: Xe.Vp.LARGE,
                children: o({
                  id: "us-citizen-modal.negate",
                  defaultMessage: "I am not US citizen"
                })
              }), (0, n.jsx)(Ve.$, {
                onClick: function() {
                  Me.M_.dispatch(We.W.actions.setIsUSCitizen(!0)), s(!0), t()
                },
                shape: Xe.dB.DEFAULT,
                theme: Xe.ry.SECONDARY,
                size: Xe.Vp.LARGE,
                children: o({
                  id: "us-citizen-modal.confirm",
                  defaultMessage: "I am US citizen"
                })
              })]
            })]
          })
        })
      };
      var _t = Object.defineProperty,
        Ut = Object.defineProperties,
        zt = Object.getOwnPropertyDescriptors,
        Ht = Object.getOwnPropertySymbols,
        qt = {}.hasOwnProperty,
        Xt = {}.propertyIsEnumerable,
        Gt = (e, t, r) => t in e ? _t(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        Kt = (e, t) => {
          for (var r in t || (t = {})) qt.call(t, r) && Gt(e, r, t[r]);
          if (Ht)
            for (var r of Ht(t)) Xt.call(t, r) && Gt(e, r, t[r]);
          return e
        },
        Qt = (e, t) => Ut(e, zt(t)),
        Jt = (e, t, r) => new Promise((n, a) => {
          var i = e => {
              try {
                o(r.next(e))
              } catch (e) {
                a(e)
              }
            },
            s = e => {
              try {
                o(r.throw(e))
              } catch (e) {
                a(e)
              }
            },
            o = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, s);
          o((r = r.apply(e, t)).next())
        });
      const Yt = () => {
          var e;
          (0, h.K)({
            event: c.Un.SWAP,
            props: null
          });
          const {
            formatMessage: t
          } = (0, me.A)(), r = (0, St.Zp)(), {
            state: a
          } = (0, St.zy)(), s = (0, Ot.YL)(), {
            fromAsset: o,
            toAsset: l
          } = (0, Me.GV)(e => e.swap.assets), {
            qsFrom: p,
            qsTo: f
          } = (() => {
            var e, t;
            const {
              search: r
            } = (0, St.zy)(), n = new URLSearchParams(r), a = null != (e = n.get("from")) ? e : "", i = null != (t = n.get("to")) ? t : "";
            return {
              qsFrom: le(a)[0],
              qsTo: le(i)[0]
            }
          })(), m = (0, u.useRef)(!0), F = (0, u.useRef)(!0), C = (0, u.useRef)(0), x = (0, u.useRef)(!1), b = (0, u.useRef)(!1), k = (0, u.useRef)(!1), v = (0, Mt.U)(), {
            domains: g
          } = (0, u.useContext)(d.C), [L] = (0, Pt.j)(), w = (e => {
            const {
              data: t
            } = (0, gt.I)({
              queryKey: ["swap-pairs"],
              queryFn: () => I.YW.emit(Ze.A.FETCH_SWAP_PAIRS, e),
              staleTime: 36e5,
              refetchOnWindowFocus: !1
            });
            return t
          })(g), A = ((e, t) => {
            const r = (0, z.P)(),
              n = (0, Q.A)(),
              a = (0, G.o)(),
              i = (0, u.useMemo)(() => r.filter(t => e.includes((0, H.er)(t.assetId))), [r]),
              s = (0, q.n)(),
              o = (0, U.Mr)(R),
              l = oe(i),
              d = (0, u.useMemo)(() => {
                if (n?.type === J.S.PRIVATE_KEY && !a[parseInt((0, H.X2)(R))]) {
                  const e = r.find(e => !!a[parseInt((0, H.X2)(e.assetId))]);
                  return se(ie({}, e), {
                    blockchain: s[e.blockchainId]
                  })
                }
                return null
              }, [n]);
            return (0, u.useMemo)(() => {
              if (t) return se(ie({}, t), {
                blockchain: s[t.blockchainId]
              });
              const e = l.filter(e => !!parseFloat(e.balance)),
                r = se(ie({}, o), {
                  blockchain: s[o.blockchainId]
                });
              return e.length > 0 ? e[0] : d || r
            }, [t, l, s, o, d])
          })(g, a), [y, D] = (0, u.useState)(p?.blockchain || o?.blockchain || A.blockchain), [E, M] = (0, u.useState)(p || o || A), [j, P] = (0, u.useState)(""), [W, S] = (0, u.useState)(!1), [Z, K] = (0, u.useState)(f?.blockchain || l?.blockchain || o?.blockchain || A.blockchain), [Y, $] = (0, u.useState)(f || l), [ee, te] = (0, u.useState)("0"), [re, ne] = (0, u.useState)(!1), [ae, de] = (0, u.useState)(!1), [ce, he] = (0, u.useState)(!1), [ue, pe] = (0, u.useState)(!1), [Fe, Ce] = (0, u.useState)(!1), [xe, be] = (0, u.useState)(!1), [ke, ve] = (0, u.useState)(!1), [ge, we] = (0, u.useState)(st.FROM), {
            solanaTurboSwaps: Ae
          } = (0, Me.GV)(e => e.swap.settings), [De, Be] = (0, u.useState)("2"), [Ne, je] = (0, u.useState)({
            id: "",
            minimumAmount: "0",
            priceImpact: "0",
            exchangeRate: null,
            approval: null,
            fees: {
              provider: {
                breakdown: [],
                total: 0
              },
              relayer: {
                breakdown: [],
                total: 0
              },
              routing: {
                breakdown: [],
                total: 0
              }
            },
            provider: null,
            error: "",
            insufficientBalance: !1,
            slippage: "2",
            warnings: [],
            refreshInterval: 60
          }), Pe = (0, u.useCallback)(() => {
            Me.M_.dispatch(We.W.actions.setSwap712Data({
              isEip712: !1,
              provider: null
            }))
          }, []), [Te, Oe] = (0, u.useState)(!1), [Ie, _e] = (0, u.useState)(""), ze = le((0, H.er)(y.coinId))[0], He = le((0, H.er)(Z.coinId))[0], qe = (0, Me.GV)(e => e.swap.isUSCitizen), [Ge, Ke] = (0, u.useState)(!1), [Qe, Je] = (0, u.useState)({
            asset: null,
            swapOrigin: ""
          }), Ye = (0, u.useRef)(!1), $e = le("c60_t0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")[0], et = (0, u.useCallback)(e => {
            if (!e?.address) return !1;
            let t = !1;
            return e.blockchain.name.toLowerCase() === T.J.solana.toLowerCase() ? t = V.includes(e.address) : e.blockchain.name.toLowerCase() === T.J.ethereum.toLowerCase() && (t = O.includes(e.address)), t && (Ye.current = !0), t
          }, []), tt = (0, u.useCallback)(e => e.name.toLowerCase() === T.J.ethereum.toLowerCase(), []), rt = (0, u.useMemo)(() => et(E), [E]), nt = (0, u.useMemo)(() => et(Y), [Y]);
          (0, u.useEffect)(() => {
            if ($e) {
              if (Ye.current) return void(Ye.current = !1);
              rt && tt(y) && ge === st.TO && Y?.assetId !== $e.assetId ? M($e) : nt && tt(Z) && ge === st.FROM && E?.assetId !== $e.assetId && $($e)
            }
          }, [E, Y, $e?.assetId]), (0, u.useEffect)(() => {
            $e && (rt && tt(y) && ge === st.FROM ? (tt(Z) || (F.current = !0, K(y)), $($e)) : nt && tt(Z) && ge === st.TO && (tt(y) || (m.current = !0, D(Z)), M($e)))
          }, [rt, nt, $e?.assetId]);
          const {
            trackSwapAnalyticsEvent: at,
            trackSwapApproveAnalyticsEvent: ot
          } = (({
            quote: e,
            receiveAsset: t,
            receiveAmount: r,
            slippage: n,
            spendAsset: a,
            spendAmount: i,
            pageViewSource: s
          }) => {
            var o, l;
            const {
              trackAnalytics: d
            } = (0, ut.s)(), h = (0, X.B)(), u = (0, Q.A)(), p = Ue(null == (o = e.fees.routing.breakdown[0]) ? void 0 : o.assetId), f = Ue(null == (l = e.fees.provider.breakdown[0]) ? void 0 : l.assetId), m = Ue(t?.assetId);
            return {
              trackSwapAnalyticsEvent: () => {
                var o, l, F, C;
                if (!a) return;
                const x = e.fees.provider.total * (f ? parseFloat(f) : 0),
                  b = e.fees.routing.total * (p ? parseFloat(p) : 0),
                  k = (0, it.A)(r).minus((0, it.A)(r).mul((0, it.A)(n).div(100))).toNumber(),
                  v = k * (m ? parseFloat(m) : 0),
                  g = (0, it.A)(i).mul(null != (l = null == (o = h.find(e => e.id === a?.assetId)) ? void 0 : o.price) ? l : 0).toNumber(),
                  L = (0, it.A)(r).mul(null != (C = null == (F = h.find(e => e.id === t.assetId)) ? void 0 : F.price) ? C : 0).toNumber(),
                  w = {
                    assetOutId: a.assetId,
                    assetOutBlockchainId: a.blockchain.id,
                    assetOutAmount: parseFloat(i),
                    assetOutFiat: g,
                    assetInId: t.assetId,
                    assetInBlockchainId: t.blockchain.id,
                    assetInAmount: parseFloat(r),
                    assetInFiat: L,
                    routingFeeAmount: e.fees.routing.total,
                    routingFeeFiat: b,
                    providerOrigin: e.provider.origin,
                    providerFeeAmount: e.fees.provider.total,
                    providerFeeFiat: x,
                    minReceiveAmount: k,
                    minReceiveFiat: v,
                    maxSlippage: parseFloat(e.slippage),
                    walletType: u.type,
                    pageViewSource: s
                  };
                d({
                  event: c.BQ.SWAP_TRANSACTION,
                  props: w
                })
              },
              trackSwapApproveAnalyticsEvent: () => {
                const t = {
                  pageViewSource: c.Un.SWAP,
                  providerOrigin: e.provider.origin,
                  contract: e.approval.contract,
                  walletType: u.type
                };
                d({
                  event: c.BQ.SWAP_APPROVAL_TRANSACTION,
                  props: t
                })
              }
            }
          })({
            quote: Ne,
            receiveAsset: Y,
            receiveAmount: ee,
            slippage: De,
            spendAsset: E,
            spendAmount: j,
            pageViewSource: null != (e = a?.pageViewSource) ? e : c.Un.SWAP
          }), {
            isPairSet: dt,
            isPairIdentical: ct,
            hasSpendAmount: pt,
            canGetQuote: ft,
            isSwapAllSet: mt,
            hasQuoteError: Ft,
            hasTxError: Ct
          } = ((e, t, r, n, a, i) => {
            const s = !!e && !!t,
              o = s && e.assetId === t.assetId,
              l = parseFloat(r) > 0,
              d = s && !o && l;
            return {
              isPairSet: s,
              isPairIdentical: o,
              hasSpendAmount: l,
              canGetQuote: d,
              isSwapAllSet: d && !n,
              hasQuoteError: a.length > 0,
              hasTxError: i.length > 0
            }
          })(E, Y, j, W, Ne.error, Ie), {
            headerText: xt,
            defaultAssets: bt,
            scopedBlockchain: Rt,
            reservedAsset: Zt,
            selectedAsset: _t
          } = ((e, t, r, n, a, i) => {
            var s;
            const {
              formatMessage: o
            } = (0, me.A)(), l = (0, H.er)(e === st.FROM ? r.coinId : a.coinId), d = le(l), c = e === st.FROM ? r.id : a.id, h = (0, u.useMemo)(() => {
              var e;
              const r = [...d, ...null != (e = t && t[c]) ? e : []];
              return d.length && r.sort(H.JG), r
            }, [null == (s = d[0]) ? void 0 : s.assetId, t, r.id, a.id]), p = (0, u.useMemo)(() => h.filter(e => !!parseFloat(e.balance)), [h]), f = (0, u.useMemo)(() => h.filter(e => !parseFloat(e.balance)), [h]);
            return {
              headerText: e === st.FROM ? o({
                id: "asset-selection-modal.you-pay"
              }) : o({
                id: "asset-selection-modal.you-get"
              }),
              defaultAssets: vt(kt({}, p.length > 0 ? {
                balance: {
                  title: o({
                    id: "asset-selection-modal.balance-category"
                  }),
                  items: p
                }
              } : {}), {
                without: {
                  title: 0 === f.length ? "" : o({
                    id: "asset-selection-modal.rest-of-crypto-category"
                  }),
                  items: f
                }
              }),
              scopedBlockchain: l,
              reservedAsset: e === st.FROM ? i?.assetId : n?.assetId,
              selectedAsset: e === st.FROM ? n?.assetId : i?.assetId
            }
          })(ge, w, y, E, Z, Y);

          function Ut(e) {
            x.current = !1, Be(e)
          }

          function zt(e) {
            we(e), pe(!0)
          }

          function Ht(e) {
            we(e), Ce(!0)
          }
          const qt = (0, Tt.x)(),
            [Xt, Gt] = (0, u.useState)(null),
            [Yt, $t] = (0, u.useState)(!1);
          (0, u.useEffect)(() => {
            E?.assetId !== o?.assetId && Me.M_.dispatch(We.W.actions.setFromAsset(E)), Y?.assetId !== l?.assetId && Me.M_.dispatch(We.W.actions.setToAsset(Y))
          }, [E, Y]), (0, u.useEffect)(() => {
            if (!Xt) return;
            const e = qt.find(e => e.hash === Xt);
            "confirmed" === e?.status && (Gt(null), $t(!1), je(e => Qt(Kt({}, e), {
              approval: null
            })))
          }, [qt, Xt]);
          const er = (0, u.useCallback)((0, fe.debounce)((e, r, n, a) => Jt(null, null, function*() {
            const i = ++C.current;
            try {
              ne(!0), Oe(!1);
              const {
                id: t,
                receiveAmount: s,
                minimumAmount: o,
                priceImpact: l,
                exchangeRate: d,
                approval: c,
                fees: h,
                provider: u,
                insufficientBalance: p,
                slippage: f,
                warnings: m,
                refreshInterval: F
              } = yield I.YW.emit(Ze.A.FETCH_SWAP_QUOTE, {
                assetOut: e,
                assetIn: r,
                amount: n,
                slippage: x.current ? void 0 : a
              });
              if (i !== C.current) return;
              te(s), x.current && (k.current = !0, Ut(f)), je({
                id: t,
                priceImpact: l,
                minimumAmount: o,
                exchangeRate: d,
                approval: c,
                provider: u,
                fees: h,
                error: "",
                insufficientBalance: p,
                slippage: f,
                warnings: m,
                refreshInterval: F
              }), Oe(!0)
            } catch (e) {
              if (te("0"), e.message === Nt.oq) return void je(e => Qt(Kt({}, e), {
                priceImpact: "0",
                exchangeRate: null,
                warnings: [],
                error: t({
                  id: "errors.route-not-available"
                })
              }));
              if (e.message.startsWith(Nt.Zq)) return void je(t => Qt(Kt({}, t), {
                priceImpact: "0",
                exchangeRate: null,
                warnings: [],
                error: e.message.replace(Nt.Zq, "")
              }))
            } finally {
              i === C.current && ne(!1)
            }
          }), 300), []);
          return (0, u.useEffect)(() => {
            m.current ? m.current = !1 : M(ze)
          }, [y.coinId]), (0, u.useEffect)(() => {
            l && !b.current && ($(l), b.current = !0)
          }, [l]), (0, u.useEffect)(() => {
            f && !b.current && ($(f), b.current = !0)
          }, [f]), (0, u.useEffect)(() => {
            F.current ? F.current = !1 : $(He)
          }, [Z?.coinId]), (0, u.useEffect)(() => {
            x.current = !0
          }, [y?.coinId, E?.assetId, Z?.coinId, Y?.assetId]), (0, u.useEffect)(() => {
            if (k.current) return void(k.current = !1);
            const e = er;
            return Oe(!1), je(e => Qt(Kt({}, e), {
              warnings: [],
              error: ""
            })), dt && (pt && !ct ? (ne(!0), e(E, Y, {
              value: j,
              decimals: E?.decimals
            }, De)) : (te("0"), je(e => Qt(Kt({}, e), {
              priceImpact: "0"
            })), ne(!1))), () => e.cancel()
          }, [dt, pt, E, Y, j, er, De, Ae]), (0, n.jsxs)("div", {
            className: "p-6",
            children: [(0, n.jsxs)("div", {
              className: "bg-backgroundPrimary",
              children: [(0, n.jsxs)("div", {
                className: "flex justify-end mb-6",
                children: [Ge && (0, n.jsx)("div", {
                  className: "max-w-[400px] w-full m-auto px-2",
                  children: (0, n.jsx)(Lt.F, {
                    theme: wt.Z.ERROR,
                    className: "ml-3",
                    children: t({
                      id: "swap.us-citizen-rwa-error",
                      defaultMessage: "US citizens are not allowed to swap RWA tokens"
                    })
                  })
                }), (0, n.jsx)(Ve.$, {
                  noPadding: !0,
                  fullWidth: !1,
                  shape: Xe.dB.CIRCLE,
                  theme: Xe.ry.TRANSPARENT,
                  testid: "settings-button",
                  onClick: () => he(!0),
                  children: (0, n.jsx)(At.Z, {
                    colorClass: "text-iconNormal"
                  })
                })]
              }), (0, n.jsxs)("div", {
                className: "max-w-[400px] m-auto",
                children: [(0, n.jsx)(lt, {
                  testid: "swap-from",
                  origin: st.FROM,
                  network: y,
                  asset: E,
                  amount: j,
                  disabled: ae,
                  onAmountChange: P,
                  onNetworkClick: zt,
                  onTokenClick: Ht,
                  onAmountExcess: S
                }), (0, n.jsx)("div", {
                  className: "relative z0 flex w-10 h-10 -my-3 mx-auto rounded-curvy bg-backgroundPrimary",
                  children: (0, n.jsx)(Ve.$, {
                    noPadding: !0,
                    testid: "swap-change-quote-button",
                    theme: Xe.ry.TRANSPARENT,
                    shape: Xe.dB.CIRCLE,
                    disabled: re || ae,
                    onClick: function() {
                      dt && !ct && (m.current = !0, F.current = !0, D(Z), M(Y), P(ee), K(y), $(E), te(j))
                    },
                    children: (0, n.jsx)(yt.D, {
                      colorClass: "text-iconNormal hover:text-primary transition"
                    })
                  })
                }), (0, n.jsxs)(lt, {
                  testid: "swap-to",
                  origin: st.TO,
                  network: Z,
                  asset: Y,
                  amount: ee,
                  priceImpact: Ne.priceImpact,
                  isLoading: re,
                  disabled: ae,
                  onNetworkClick: zt,
                  onTokenClick: Ht,
                  children: [ft && !Ft && (0, n.jsx)(ye, {
                    isLoading: re,
                    rate: Ne.exchangeRate,
                    refreshInterval: Ne.refreshInterval,
                    runCountdown: Te,
                    onCountdownFinish: () => ft && er(E, Y, {
                      value: j,
                      decimals: E?.decimals
                    }, De)
                  }), Ft && (0, n.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, n.jsx)(Dt.i, {
                      colorClass: "text-iconWarning"
                    }), (0, n.jsx)(B.E, {
                      theme: N.Il.WARNING,
                      type: N.jK.SUBTITLE,
                      children: Ne.error
                    })]
                  })]
                }), (0, n.jsxs)("div", {
                  className: "my-6 flex flex-col gap-2",
                  children: [(rt && tt(y) || nt && tt(Z)) && (0, n.jsx)(Lt.F, {
                    theme: wt.Z.DEFAULT,
                    children: t({
                      id: "swap.restrict-only-usdc-pair-info",
                      defaultMessage: "You can only pair USDC with this asset"
                    })
                  }), (0, n.jsxs)(Ve.$, {
                    testid: "swap-button",
                    disabled: !mt || Yt || re || ae || Ft || !Ne.approval && Ne.insufficientBalance,
                    loading: re || ae || Yt,
                    onClick: function() {
                      return Jt(this, null, function*() {
                        try {
                          if (_e(""), de(!0), L !== E?.blockchain.id && (yield I.YW.emit(Et.A.SWITCH_BLOCKCHAIN, {
                              blockchainId: E?.blockchain.id,
                              blockchainType: E?.blockchain.isCustom ? jt.l.CUSTOM : jt.l.MAIN
                            })), Ne.approval) {
                            const e = yield I.YW.emit(Ze.A.FETCH_SWAP_APPROVAL_PAYLOAD, {
                              approval: Ne.approval,
                              provider: Ne.provider
                            }), t = yield I.YW.emit(Bt.A.ETH_SIGN_TRANSACTION, e);
                            if (ot(), !t) throw Error("Transaction Hash is empty.");
                            Gt(t), $t(!0)
                          } else {
                            const e = yield I.YW.emit(Ze.A.FETCH_SWAP_TRANSACTION_PAYLOAD, {
                              id: Ne.id,
                              assetOut: E,
                              assetIn: Y,
                              provider: Ne.provider
                            });
                            let t;
                            if (e.isEip712) {
                              Me.M_.dispatch(We.W.actions.setSwap712Data({
                                isEip712: e.isEip712,
                                provider: Ne.provider
                              }));
                              const r = E ? s.items[E.blockchain.coinId].address : "";
                              t = yield I.YW.emit(Bt.A.ETH_SIGN_TYPED_MESSAGE, {
                                address: r,
                                raw: e.data,
                                version: Vt.SignTypedDataVersion.V4,
                                isInternal: !0
                              })
                            } else t = yield I.YW.emit(Bt.A.SWAP_TRANSACTION_CONFIRMATION, Kt({
                              id: Ne.id,
                              assetOut: E,
                              assetIn: Y,
                              amountOut: {
                                value: j,
                                decimals: E?.decimals
                              },
                              quote: Ne
                            }, e));
                            try {
                              yield I.YW.emit(Ze.A.RECORD_SWAP_TRANSACTION, {
                                stepId: Ne.id,
                                txHashOrSignature: t
                              })
                            } catch {
                              Wt.A.error("Failed to record swap tx"), Pe()
                            }
                            v.find(e => Y?.assetId === e.assetId) || (yield I.YW.emit(_.A.ADD_ASSET, {
                              asset: Qt(Kt({}, Y), {
                                isShownInHomeScreen: !0
                              }),
                              blockchainType: jt.l.MAIN
                            })), at(), Pe(), r(i.b.HISTORY)
                          }
                        } catch (e) {
                          Pe(), [Nt.Xc, Nt.$i].includes(e.message) && _e(t({
                            id: "errors.transaction-generation"
                          }))
                        } finally {
                          de(!1)
                        }
                      })
                    },
                    children: [Ne.approval ? t({
                      id: "dashboard.approve-crypto"
                    }, {
                      symbol: E?.symbol
                    }) : t({
                      id: "dashboard." + (Ne.insufficientBalance ? "insufficient-balance" : "swap")
                    }, {
                      symbol: ze.symbol
                    }), " "]
                  })]
                }), Ct && (0, n.jsx)("div", {
                  className: "mb-4",
                  children: (0, n.jsx)(Lt.F, {
                    theme: wt.Z.WARNING,
                    children: Ie
                  })
                }), Ne.warnings.map(e => (0, n.jsx)("div", {
                  className: "my-4",
                  children: (0, n.jsx)(Lt.F, {
                    theme: wt.Z.WARNING,
                    children: e
                  })
                }, e)), ft && !Ft && (0, n.jsx)(ht, {
                  isLoading: re,
                  disabled: ae,
                  slippage: Ne.slippage,
                  receiveAsset: Y,
                  minimumAmount: Ne.minimumAmount,
                  provider: Ne.provider,
                  fees: Ne.fees,
                  openSlippageModal: () => be(!0)
                })]
              })]
            }), (0, n.jsx)(Se, {
              onClose: () => he(!1),
              opened: ce
            }), (0, n.jsx)(Ee, {
              domains: g,
              opened: ue,
              selectedNetwork: ge === st.FROM ? y.id : Z.id,
              onNetworkSelect: function(e) {
                ge === st.FROM ? D(e) : K(e)
              },
              onClose: () => pe(!1)
            }), (0, n.jsx)(Le, {
              header: xt,
              defaultAssets: bt,
              scopedBlockchain: Rt,
              opened: Fe,
              reservedAsset: Zt,
              selectedAsset: _t,
              onAssetSelect: function(e) {
                const t = et(e);
                if (t && null === qe) return Je({
                  asset: e,
                  swapOrigin: ge
                }), void ve(!0);
                t && qe ? Ke(!0) : (Ge && Ke(!1), ge === st.FROM ? M(e) : $(e))
              },
              onClose: () => Ce(!1)
            }), (0, n.jsx)(Re, {
              defaultSlippage: Ne.slippage,
              onSave: Ut,
              opened: xe,
              onClose: () => be(!1)
            }), (0, n.jsx)(It, {
              setIsUSCitizenError: Ke,
              setReceiveAsset: $,
              setSpendAsset: M,
              pendingRawToken: Qe,
              opened: ke,
              onClose: () => ve(!1)
            })]
          })
        },
        $t = () => (0, n.jsx)(L, {
          children: (0, n.jsx)(Yt, {})
        });
      var er = r(4800),
        tr = r(3280);
      const rr = () => {
          const {
            formatMessage: e
          } = (0, me.A)(), t = (0, St.Zp)(), {
            isLoading: r
          } = ((0, St.zy)(), (0, u.useContext)(d.C)), s = (0, tr.p)(), c = (0, o.X)(), h = (0, l.R)(), p = !c && !h;
          return s ? (t(i.b.DEFAULT), null) : (0, n.jsx)(er.LN, {
            loose: !0,
            altTheme: p,
            children: (0, n.jsx)(er.LO, {
              children: (0, n.jsxs)(er.Gv, {
                loose: !0,
                children: [p ? (0, n.jsx)("div", {
                  className: "flex my-11 justify-center",
                  children: (0, n.jsx)(qe.c, {
                    onClick: () => t(i.b.DEFAULT),
                    children: (0, n.jsx)(a.A, {})
                  })
                }) : (0, n.jsx)(er.zY, {
                  title: e({
                    id: "swap.title",
                    defaultMessage: "Swap"
                  })
                }), r ? (0, n.jsx)("div", {
                  className: "mx-auto",
                  children: (0, n.jsx)(ue.y, {})
                }) : (0, n.jsx)("div", {
                  className: `flex flex-1 flex-col flex-grow-0 \n            self-center bg-backgroundPrimary rounded\n            ${p?"border-line border":""} \n            p-0 container`,
                  children: (0, n.jsx)($t, {})
                })]
              })
            })
          })
        },
        nr = (0, s.K)(() => (0, n.jsx)(d.M, {
          children: (0, n.jsx)(rr, {})
        })),
        ar = nr
    },
    68969: (e, t, r) => {
      r.d(t, {
        $i: () => s,
        Xc: () => i,
        Zq: () => a,
        oq: () => n
      });
      const n = "FAILED_QUOTE_GENERATION",
        a = "FAILED_AMBER_RPC_ERROR",
        i = "FAILED_APPROVAL_TRANSACTION_PAYLOAD_GENERATION",
        s = "FAILED_SWAP_TRANSACTION_PAYLOAD_GENERATION"
    },
    98005: (e, t, r) => {
      r.d(t, {
        l: () => a
      });
      var n = r(74848);
      const a = ({
        width: e,
        height: t,
        colorClass: r
      }) => (0, n.jsxs)("svg", {
        className: r,
        fill: "none",
        width: e ?? 20,
        height: t ?? 20,
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          paddingLeft: "1px"
        },
        children: [(0, n.jsx)("path", {
          d: "M16.495 4.75012H4.995C4.375 4.75012 3.875 5.25012 3.875 5.87012C3.875 6.49012 4.375 6.99012 4.995 6.99012H16.495C16.985 6.99012 17.375 7.38012 17.375 7.87012V16.1101C17.375 16.6001 16.975 16.9901 16.495 16.9901H3.505C3.015 16.9901 2.625 16.5901 2.625 16.1101V3.87012C2.625 3.39012 3.015 2.99012 3.495 2.99012H16.495C17.115 2.99012 17.615 2.49012 17.615 1.87012C17.615 1.25012 17.115 0.750122 16.495 0.750122H3.495C1.775 0.750122 0.375 2.15012 0.375 3.87012V16.1101C0.375 17.8401 1.785 19.2401 3.505 19.2401H16.495C18.225 19.2401 19.625 17.8401 19.625 16.1101V7.87012C19.625 6.15012 18.215 4.75012 16.495 4.75012Z",
          fill: "currentColor"
        }), (0, n.jsx)("path", {
          d: "M14.6249 12.5001C15.2449 12.5001 15.7449 12.0001 15.7449 11.3801C15.7449 10.7601 15.2449 10.2601 14.6249 10.2601H12.3749C11.7549 10.2601 11.2549 10.7601 11.2549 11.3801C11.2549 12.0001 11.7549 12.5001 12.3749 12.5001H14.6249Z",
          fill: "currentColor"
        })]
      })
    }
  }
]);
