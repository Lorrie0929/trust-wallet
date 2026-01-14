try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "b68cd783-d8c9-4f92-a976-175ddc2d0fb1", e.o = "sentry-dbid-b68cd783-d8c9-4f92-a976-175ddc2d0fb1")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1306], {
    61306: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => ge
      });
      var n = r(74848),
        l = r(47767),
        a = r(96540);
      const o = (0, a.createContext)(null),
        s = () => {
          const e = (0, a.useContext)(o);
          if (!e) throw Error("useSellContext must be inside SellContextProvider");
          return e
        };
      var i = r(25160),
        c = r(97286),
        d = r(84568),
        u = r(99603),
        m = r(49971);
      const h = e => {
        var t, r, n;
        const {
          data: l,
          isFetching: a,
          error: o,
          refetch: s
        } = (0, c.I)({
          queryKey: ["sell-currency-config", e],
          queryFn: () => ((e, t, r) => new Promise((e, t) => {
            var n = e => {
                try {
                  a(r.next(e))
                } catch (e) {
                  t(e)
                }
              },
              l = e => {
                try {
                  a(r.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, l);
            a((r = r.apply(null, null)).next())
          }))(0, 0, function*() {
            const {
              data: t
            } = yield(0, u.h)(`${d.W2}/v1/sellcrypto/config/${e}`);
            return (0, m.Yu)(t || {})
          }),
          enabled: !!e,
          retry: 2,
          refetchOnWindowFocus: !1,
          staleTime: 3e5,
          gcTime: 6e5
        });
        return {
          currencies: null != (t = l?.currencies) ? t : [],
          waiveFeeThreshold: null != (n = null == (r = l?.waiveFees) ? void 0 : r.minTokenBalance) ? n : 100,
          isLoading: a && !l,
          error: o,
          refetch: s
        }
      };
      var g = r(47991);
      const f = "USD",
        p = ({
          children: e
        }) => {
          var t;
          const r = (0, l.zy)(),
            s = (0, g.P)(),
            c = null == (t = r.state) ? void 0 : t.assetId,
            [d, u] = (0, a.useState)(null),
            [m, p] = (0, a.useState)(null),
            [y, b] = (0, a.useState)(""),
            [v, w] = (0, a.useState)(f),
            [C, x] = (0, a.useState)(null),
            [k, N] = (0, a.useState)(null),
            {
              currencies: A
            } = h(d?.assetId);
          (0, a.useEffect)(() => {
            if (c && !d && s.length > 0) {
              const e = s.find(e => e.assetId === c);
              e && u(e)
            }
          }, [c, d, s]), (0, a.useEffect)(() => {
            if (!A.length || !d?.assetId || k === d.assetId) return;
            const e = (e => {
              var t, r;
              const n = e.find(e => {
                var t;
                return null == (t = e.badges) ? void 0 : t.includes(i.H.LAST_USED)
              });
              if (n) return n.fiatCurrency;
              const l = e.find(e => {
                var t;
                return null == (t = e.badges) ? void 0 : t.includes(i.H.LOCAL)
              });
              if (l) return l.fiatCurrency;
              const a = e.find(e => {
                var t;
                return null == (t = e.badges) ? void 0 : t.includes(i.H.DEFAULT)
              });
              if (a) return a.fiatCurrency;
              const o = e.find(e => e.fiatCurrency === f);
              return o ? o.fiatCurrency : null != (r = null == (t = e[0]) ? void 0 : t.fiatCurrency) ? r : f
            })(A);
            w(e), N(d.assetId)
          }, [A, d?.assetId, k]);
          const M = {
            selectedCrypto: d,
            setSelectedCrypto: e => {
              u(e), b(""), x(null)
            },
            selectedNetwork: m,
            setSelectedNetwork: p,
            cryptoAmount: y,
            setCryptoAmount: e => {
              b(e), x(null)
            },
            selectedFiatCurrency: v,
            setSelectedFiatCurrency: e => {
              w(e), x(null)
            },
            selectedQuote: C,
            setSelectedQuote: x
          };
          return (0, n.jsx)(o.Provider, {
            value: M,
            children: e
          })
        };
      var y = r(84118),
        b = r(64264),
        v = r(26264),
        w = r(81693),
        C = r(82361),
        x = r(64145),
        k = r(89408),
        N = r(96324),
        A = r(75985),
        M = r(42151),
        F = r(83596),
        S = r(33926),
        T = Object.defineProperty,
        L = Object.getOwnPropertySymbols,
        q = {}.hasOwnProperty,
        I = {}.propertyIsEnumerable,
        Q = (e, t, r) => t in e ? T(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r;
      const P = () => {
        const e = (0, l.Zp)(),
          {
            selectedCrypto: t,
            setSelectedCrypto: r,
            selectedNetwork: o
          } = s(),
          [i, d] = (0, a.useState)(""),
          [u, m] = (0, a.useState)(20),
          h = (0, A.d)(i, M.e1),
          {
            assets: f,
            isLoading: p
          } = (e => {
            const t = (0, g.P)(),
              r = (0, w.U)(),
              n = (0, C.B)(),
              {
                data: l,
                isLoading: o,
                error: s
              } = (0, c.I)({
                queryKey: ["sell-crypto-assets", e],
                queryFn: () => ((e, t, r) => new Promise((e, t) => {
                  var n = e => {
                      try {
                        a(r.next(e))
                      } catch (e) {
                        t(e)
                      }
                    },
                    l = e => {
                      try {
                        a(r.throw(e))
                      } catch (e) {
                        t(e)
                      }
                    },
                    a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, l);
                  a((r = r.apply(null, null)).next())
                }))(0, 0, function*() {
                  const t = {
                    query: "",
                    page: 0,
                    type: N.l.SELL_CRYPTO,
                    limit: 500,
                    blockchainId: e
                  };
                  return x.YW.emit(k.A.SEARCH_COINS_AND_TOKENS, t)
                }),
                staleTime: 3e5,
                gcTime: 6e5,
                refetchOnWindowFocus: !1
              }),
              i = (0, a.useMemo)(() => {
                const e = new Map;
                for (const r of t) e.set(r.assetId, r);
                return e
              }, [t]),
              d = (0, a.useMemo)(() => t.filter(t => {
                var n;
                return !(t.address || 0 >= parseFloat(null != (n = r[t.assetId]) ? n : "0") || e && t.blockchainId !== e)
              }), [t, r, e]);
            return {
              assets: (0, a.useMemo)(() => {
                var e;
                const t = null != (e = l?.data) ? e : [],
                  a = t.map(e => i.get(e.assetId) || e),
                  o = new Set(t.map(e => e.assetId)),
                  s = [...a, ...d.filter(e => !o.has(e.assetId))],
                  c = e => {
                    var t, l;
                    const a = parseFloat(null != (t = r[e.assetId]) ? t : "0"),
                      o = n.find(t => t.id === e.assetId);
                    return (null != (l = o?.price) ? l : 0) * a
                  };
                return s.sort((e, t) => c(t) - c(e))
              }, [l, i, r, n, d]),
              isLoading: o,
              error: s
            }
          })(o?.id),
          y = (0, w.U)(),
          b = (0, C.B)();
        (0, a.useEffect)(() => {
          t && e(v.b.SELL_NEW + "/enter-amount", {
            replace: !0
          })
        }, [t, e]);
        const T = window.innerHeight - M.$D,
          P = (0, a.useMemo)(() => {
            if (!h) return f;
            const e = h.toLowerCase();
            return f.filter(t => {
              var r;
              return t.symbol.toLowerCase().includes(e) || (null == (r = t.name) ? void 0 : r.toLowerCase().includes(e))
            })
          }, [f, h]);
        (0, a.useEffect)(() => {
          m(20)
        }, [h, o]);
        const z = P.slice(0, u),
          E = u < P.length,
          $ = (0, a.useCallback)(e => y[e], [y]),
          B = (0, a.useCallback)(e => {
            var t;
            return null == (t = b.find(t => t.id === e)) ? void 0 : t.price
          }, [b]);
        return (0, n.jsx)(F.b, {
          onBackAction: () => {
            e(-1)
          },
          searchText: i,
          onSearchChange: e => {
            d(e.target.value)
          },
          selectedNetwork: o,
          networkFilterNavigateTo: v.b.SELL_NEW + "/select-network",
          selectedAssetId: t?.assetId,
          isLoading: p,
          isEmpty: 0 === z.length && !p,
          hasMore: E,
          onLoadMore: () => {
            m(e => Math.min(e + 20, P.length))
          },
          scrollableAreaHeight: T,
          children: z.map(t => {
            const l = $(t.assetId),
              a = B(t.assetId),
              o = void 0 !== l && parseFloat(l) > 0;
            return (0, n.jsx)(S.A, ((e, t) => {
              for (var r in t || (t = {})) q.call(t, r) && Q(e, r, t[r]);
              if (L)
                for (var r of L(t)) I.call(t, r) && Q(e, r, t[r]);
              return e
            })({
              asset: t,
              onClick: () => (t => {
                const n = P.find(e => e.assetId === t);
                n && (r(n), e(v.b.SELL_NEW + "/enter-amount"))
              })(t.assetId)
            }, o && {
              balance: l,
              fiatPrice: a
            }), t.assetId)
          })
        })
      };
      var z = r(4800),
        E = r(6442),
        $ = r(49051),
        B = r(52619),
        j = r(65512),
        O = r(48346),
        V = r(23384);
      const W = ({
        assetId: e,
        currency: t,
        amount: r,
        enabled: n = !0
      }) => {
        const l = n && !!e && !!t && !!r && "0" !== r,
          {
            data: a,
            isPending: o,
            isFetching: s,
            isError: i,
            error: d,
            refetch: u
          } = (0, c.I)({
            queryKey: ["sell-provider-quotes", e, t, r],
            queryFn: () => x.YW.emit(V.A.SELL_CRYPTO_QUOTE, {
              assetId: e,
              currency: t,
              amount: r
            }),
            enabled: l,
            retry: 2,
            refetchOnWindowFocus: !1,
            gcTime: 3e5
          }),
          m = [...a ?? []].sort((e, t) => e.isRecommended && !t.isRecommended ? -1 : !e.isRecommended && t.isRecommended ? 1 : t.fiatMoney.amount - e.fiatMoney.amount),
          h = (() => {
            if (m.length) return m.find(e => e.isRecommended) || m[0]
          })();
        return {
          quotes: m,
          bestQuote: h,
          isLoading: o,
          isFetching: s,
          isError: i,
          error: d,
          refetch: u
        }
      };
      var D = r(15192),
        K = r(65828),
        R = r(52114),
        U = r(1279),
        H = r(69254),
        G = r(21094),
        J = r(73900),
        X = r(86933);
      const Y = ({
        value: e,
        onChange: t,
        disabled: r = !1,
        className: l
      }) => {
        const {
          formatMessage: a
        } = (0, E.A)(), o = Math.round(e), s = "hsl(var(--twc-brand-primary))", i = "hsl(var(--twc-background-secondary))";
        return (0, n.jsx)("div", {
          className: (0, X.G)("flex flex-col gap-2", l),
          children: (0, n.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [(0, n.jsx)(R.E, {
              type: U.jK.BODY_14,
              theme: U.Il.UTILITY_1_OPACITY_2,
              children: a({
                id: "sell-slider.min",
                defaultMessage: "Min"
              })
            }), (0, n.jsxs)("div", {
              className: "relative flex-1 flex items-center",
              children: [(0, n.jsx)("div", {
                className: "absolute -top-8 transform -translate-x-1/2 pointer-events-none",
                style: {
                  left: e + "%"
                },
                children: (0, n.jsx)("div", {
                  className: "bg-background-secondary rounded-lg px-2 py-1",
                  children: (0, n.jsxs)(R.E, {
                    type: U.jK.SUBHEADER_14,
                    weight: U.nG.SEMIBOLD,
                    children: [o, "%"]
                  })
                })
              }), (0, n.jsx)("input", {
                type: "range",
                min: "0",
                max: "100",
                step: "1",
                value: e,
                onChange: e => {
                  const r = +e.target.value;
                  t(r)
                },
                disabled: r,
                className: (0, X.G)("w-full h-1 rounded-full appearance-none cursor-pointer", "focus:outline-none", "[&::-webkit-slider-thumb]:appearance-none", "[&::-webkit-slider-thumb]:w-6", "[&::-webkit-slider-thumb]:h-6", "[&::-webkit-slider-thumb]:rounded-full", "[&::-webkit-slider-thumb]:bg-white", "[&::-webkit-slider-thumb]:cursor-pointer", "[&::-webkit-slider-thumb]:shadow-md", "[&::-webkit-slider-thumb]:border-2", "[&::-webkit-slider-thumb]:border-background-primary", "[&::-moz-range-thumb]:w-6", "[&::-moz-range-thumb]:h-6", "[&::-moz-range-thumb]:rounded-full", "[&::-moz-range-thumb]:bg-white", "[&::-moz-range-thumb]:cursor-pointer", "[&::-moz-range-thumb]:border-2", "[&::-moz-range-thumb]:border-background-primary", "[&::-moz-range-thumb]:border-none", r && "opacity-50 cursor-not-allowed"),
                style: {
                  background: `linear-gradient(to right, ${s} 0%, ${s} ${e}%, ${i} ${e}%, ${i} 100%)`
                }
              })]
            }), (0, n.jsx)(R.E, {
              type: U.jK.BODY_14,
              theme: U.Il.UTILITY_1_OPACITY_2,
              children: a({
                id: "sell-slider.max",
                defaultMessage: "Max"
              })
            })]
          })
        })
      };
      var Z = r(41327),
        _ = r(94893),
        ee = r(50882),
        te = r(90924);
      const re = ({
        quote: e,
        onClick: t,
        showChevron: r = !0
      }) => {
        const {
          formatMessage: l
        } = (0, E.A)(), a = (0, n.jsx)("div", {
          className: "flex items-center py-3 px-4 bg-background-secondary rounded-4",
          children: (0, n.jsxs)("div", {
            className: "flex items-center gap-3 flex-1",
            children: [e.provider.imageUrl && (0, n.jsx)("img", {
              src: e.provider.imageUrl,
              alt: e.provider.name,
              className: "w-10 h-10 rounded-full"
            }), (0, n.jsx)("div", {
              className: "flex flex-col items-start flex-1",
              children: (0, n.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0, n.jsx)(R.E, {
                  type: U.jK.SUBHEADER_16,
                  weight: U.nG.SEMIBOLD,
                  children: e.provider.name
                }), e.isRecommended && (0, n.jsx)(ee.E, {
                  theme: te.e.PRIMARY,
                  type: te.f.WIDER,
                  text: l({
                    id: "select-provider.recommended",
                    defaultMessage: "Recommended"
                  })
                })]
              })
            }), r && t && (0, n.jsx)(Z.v, {
              width: 20,
              height: 20,
              colorClass: "text-icon-primary"
            })]
          })
        });
        return t ? (0, n.jsx)(_.c, {
          onClick: t,
          children: a
        }) : a
      };
      var ne = r(72396),
        le = r(23207),
        ae = r(29584);
      const oe = () => {
        var e, t, r, o;
        const {
          formatMessage: i
        } = (0, E.A)(), c = (0, l.Zp)(), {
          trackAnalytics: d
        } = (0, le.s)(), {
          selectedCrypto: u,
          cryptoAmount: m,
          setCryptoAmount: g,
          selectedFiatCurrency: f,
          selectedQuote: p,
          setSelectedQuote: y
        } = s(), [b, w] = (0, a.useState)(""), [C, k] = (0, a.useState)(!1), [N, A] = (0, a.useState)(!1), M = null != (e = u?.assetId) ? e : "", F = (0, K.Z)(M), S = !!F && parseFloat(F) > 0, T = e => {
          A(!0), g(e)
        }, {
          sliderValue: L,
          isSliding: q,
          handleSliderChange: I
        } = (({
          balance: e,
          currentAmount: t,
          onAmountChange: r
        }) => {
          const [n, l] = (0, a.useState)(!1), [o, s] = (0, a.useState)(0), i = (0, a.useRef)(null), c = (0, a.useMemo)(() => {
            if (!t || !e || "0" === e) return 0;
            const r = (0, D.A)(t).div(e).times(100).toNumber();
            return Math.min(Math.max(r, 0), 100)
          }, [t, e]);
          (0, a.useEffect)(() => {
            n || s(c)
          }, [c, n]);
          const d = (0, a.useCallback)(t => e && "0" !== e && 0 !== t ? 100 === t ? e : (0, D.A)(e).times(t).div(100).round(8, D.A.roundDown).toString() : "", [e]),
            u = (0, a.useCallback)(e => {
              s(e);
              const t = d(e);
              r(t), l(!0), i.current && clearTimeout(i.current), i.current = setTimeout(() => {
                l(!1)
              }, 300)
            }, [d, r]);
          return (0, a.useEffect)(() => () => {
            i.current && clearTimeout(i.current)
          }, []), {
            sliderValue: o,
            isSliding: n,
            handleSliderChange: u
          }
        })({
          balance: F,
          currentAmount: m,
          onAmountChange: T
        }), {
          currencies: Q,
          isLoading: P
        } = h(M), X = !!m && "0" !== m && "" !== m, {
          bestQuote: Z,
          isLoading: _,
          isFetching: ee
        } = W({
          assetId: M,
          currency: f,
          amount: m,
          enabled: X && !q
        });
        (0, a.useEffect)(() => {
          if (!Z) return;
          const e = Z.fiatMoney.currency,
            t = p?.fiatMoney.currency;
          (!p || t !== f) && e === f && y(Z)
        }, [Z, p, y, f]);
        const te = ((e, t, r, n, l) => {
            const o = (0, a.useMemo)(() => e?.find(e => e.fiatCurrency === n), [e, n]);
            return (0, a.useMemo)(() => {
              if (!o || !t) return {
                isValid: !0
              };
              const e = !r && (0, D.A)(t).lt(o.minCryptoSellAmount),
                n = (0, D.A)(t).gt(o.maxCryptoSellAmount),
                a = (0, D.A)(t).gt(l);
              let s;
              return e ? s = "Minimum amount is " + o.minCryptoSellAmount : n ? s = "Maximum amount is " + o.maxCryptoSellAmount : a && (s = "Insufficient balance"), {
                isValid: !e && !n && !a,
                error: s
              }
            }, [t, n, e, r, l, o])
          })(Q, m, !m, f, F),
          oe = null != (o = null == (r = null == (t = p?.fiatMoney) ? void 0 : t.amount) ? void 0 : r.toString()) ? o : "0",
          se = P || X && _,
          ie = q || X && ee;
        return (0, n.jsxs)(z.LN, {
          wide: !0,
          children: [(0, n.jsxs)("div", {
            className: "flex flex-col justify-between flex-1",
            children: [(0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [(0, n.jsx)(z.zY, {
                backAction: () => {
                  c(-1)
                },
                title: i({
                  id: "generic.sell",
                  defaultMessage: "Sell"
                })
              }), (0, n.jsxs)("div", {
                className: "flex items-center justify-center gap-1",
                children: [(0, n.jsx)(R.E, {
                  type: U.jK.BODY_14,
                  theme: U.Il.SECONDARY,
                  children: i({
                    id: "sell-enter-amount.balance-label",
                    defaultMessage: "Balance:"
                  })
                }), (0, n.jsx)(H.h, {
                  value: F,
                  amountType: G.Cu.CRYPTO,
                  textType: U.jK.BODY_14,
                  theme: U.Il.SECONDARY,
                  maxSignificantDecimals: 8
                }), (0, n.jsx)(R.E, {
                  type: U.jK.BODY_14,
                  theme: U.Il.SECONDARY,
                  children: u?.symbol
                })]
              })]
            }), (0, n.jsxs)(z.Gv, {
              className: "flex flex-col items-end gap-8 justify-center",
              children: [(0, n.jsx)($.y, {
                asset: u,
                amount: m,
                onAmountChange: T,
                onAssetClick: () => c(v.b.SELL_NEW)
              }), (0, n.jsx)($.y, {
                asset: {
                  symbol: f,
                  fiatCurrency: f,
                  amount: "0",
                  suggestedAmounts: [],
                  minAmount: 0,
                  maxAmount: 0,
                  defaultAmount: 0
                },
                amount: oe,
                onAssetClick: () => c(v.b.SELL_NEW + "/select-fiat"),
                isLoading: ie,
                isEditable: !1
              })]
            }), (0, n.jsxs)("div", {
              className: "flex flex-col",
              children: [S && (0, n.jsx)("div", {
                className: "mb-6 pt-2",
                children: (0, n.jsx)(Y, {
                  value: L,
                  onChange: I,
                  disabled: !S
                })
              }), (0, n.jsx)("div", {
                className: "mb-4",
                children: S ? X || q ? te.isValid || !te.error || q ? ie || se ? (0, n.jsx)(O.S, {
                  isLoading: !0,
                  widthClass: "w-full",
                  heightClass: "h-16",
                  fullWidth: !0
                }) : p ? (0, n.jsx)(re, {
                  quote: p,
                  onClick: () => c(v.b.SELL_NEW + "/select-provider")
                }) : (0, n.jsxs)("div", {
                  className: "flex items-center min-w-fit gap-2 py-5 px-4 bg-error-background rounded-4",
                  children: [(0, n.jsx)(J.U, {
                    width: 14,
                    height: 14,
                    colorClass: "text-error-main"
                  }), (0, n.jsx)(R.E, {
                    theme: U.Il.ERROR,
                    type: U.jK.BODY_14,
                    weight: U.nG.SEMIBOLD,
                    children: i({
                      id: "sell-enter-amount.no-provider",
                      defaultMessage: "No available provider"
                    })
                  })]
                }) : (0, n.jsxs)("div", {
                  className: "flex items-center min-w-fit gap-2 py-5 px-4 bg-error-background rounded-4",
                  children: [(0, n.jsx)(J.U, {
                    width: 14,
                    height: 14,
                    colorClass: "text-error-main"
                  }), (0, n.jsx)(R.E, {
                    theme: U.Il.ERROR,
                    type: U.jK.BODY_14,
                    weight: U.nG.SEMIBOLD,
                    children: i({
                      id: "validation.sell-crypto-error",
                      defaultMessage: "{error}"
                    }, {
                      error: te.error
                    })
                  })]
                }) : N ? (0, n.jsxs)("div", {
                  className: "flex items-center min-w-fit gap-2 py-5 px-4 bg-error-background rounded-4",
                  children: [(0, n.jsx)(J.U, {
                    width: 14,
                    height: 14,
                    colorClass: "text-error-main"
                  }), (0, n.jsx)(R.E, {
                    theme: U.Il.ERROR,
                    type: U.jK.BODY_14,
                    weight: U.nG.SEMIBOLD,
                    children: i({
                      id: "sell-enter-amount.enter-amount",
                      defaultMessage: "Enter amount"
                    })
                  })]
                }) : null : (0, n.jsxs)("div", {
                  className: "flex items-center min-w-fit gap-2 py-5 px-4 bg-error-background rounded-4",
                  children: [(0, n.jsx)(J.U, {
                    width: 14,
                    height: 14,
                    colorClass: "text-error-main"
                  }), (0, n.jsx)(R.E, {
                    theme: U.Il.ERROR,
                    type: U.jK.BODY_14,
                    weight: U.nG.SEMIBOLD,
                    children: i({
                      id: "sell-enter-amount.no-balance",
                      defaultMessage: "No balance available"
                    })
                  })]
                })
              }), (0, n.jsx)(j.$, {
                size: B.Vp.LARGE,
                shape: B.dB.DEFAULT,
                theme: B.ry.PRIMARY,
                onClick: () => ((e, t, r) => new Promise((e, t) => {
                  var n = e => {
                      try {
                        a(r.next(e))
                      } catch (e) {
                        t(e)
                      }
                    },
                    l = e => {
                      try {
                        a(r.throw(e))
                      } catch (e) {
                        t(e)
                      }
                    },
                    a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, l);
                  a((r = r.apply(null, null)).next())
                }))(0, 0, function*() {
                  if (p && u) try {
                    k(!0);
                    const {
                      url: e
                    } = yield x.YW.emit(V.A.SELL_CRYPTO, {
                      quote: p,
                      assetId: u.assetId
                    });
                    w(e), d({
                      event: ae.Un.FIAT_OFF_RAMPS_PROVIDER,
                      props: {
                        pageViewResourceType: ae.Rb.EXTERNAL,
                        blockchainId: u.blockchainId,
                        assetCurrency: p.digitalMoney.currency,
                        assetAmount: p.digitalMoney.amount,
                        assetFiatCurrency: p.fiatMoney.currency,
                        assetFiatAmount: p.fiatMoney.amount,
                        providerName: p.provider.name
                      }
                    })
                  } finally {
                    k(!1)
                  }
                }),
                disabled: !S || !X || !te.isValid || !p || se || q || C,
                loading: C,
                children: i({
                  id: "generic.continue",
                  defaultMessage: "Continue"
                })
              })]
            })]
          }), u && b && (0, n.jsx)(ne.f, {
            url: b,
            selectedCrypto: u,
            opened: !!b,
            onClose: () => {
              w("")
            }
          })]
        })
      };
      var se = r(28744);
      const ie = () => {
        const e = (0, l.Zp)(),
          {
            selectedCrypto: t,
            selectedFiatCurrency: r,
            setSelectedFiatCurrency: o
          } = s(),
          {
            currencies: c,
            isLoading: d
          } = h(t?.assetId),
          u = (0, a.useMemo)(() => c.map(e => {
            var t;
            return {
              fiatCurrency: e.fiatCurrency,
              badges: null == (t = e.badges) ? void 0 : t.map(e => "Local" === e ? i.H.LOCAL : "LastUsed" === e ? i.H.LAST_USED : "Default" === e ? i.H.DEFAULT : e)
            }
          }), [c]);
        return (0, n.jsx)(se.q, {
          onBackAction: () => {
            e(v.b.SELL_NEW + "/enter-amount", {
              replace: !0
            })
          },
          selectedFiatCurrency: r,
          onSelectCurrency: t => {
            o(t), e(v.b.SELL_NEW + "/enter-amount", {
              replace: !0
            })
          },
          currencies: u,
          isLoading: d
        })
      };
      var ce = r(29618),
        de = r(14940);
      const ue = () => {
        var e, t;
        const r = (0, l.Zp)(),
          {
            formatMessage: o
          } = (0, E.A)(),
          {
            selectedCrypto: i,
            cryptoAmount: c,
            selectedFiatCurrency: d,
            selectedQuote: u,
            setSelectedQuote: m
          } = s(),
          {
            quotes: h,
            bestQuote: g,
            isLoading: f,
            isError: p
          } = W({
            assetId: null != (e = i?.assetId) ? e : "",
            currency: d,
            amount: c,
            enabled: !!i?.assetId && !!c && "0" !== c
          });
        (0, a.useEffect)(() => {
          !u && g && m(g)
        }, [u, g, m]);
        const y = (() => {
            var e;
            if (!u) return null;
            const t = h.find(e => e.provider.name === u.provider.name);
            return null != (e = t?.id) ? e : null
          })(),
          b = e => {
            const t = h.find(t => t.id === e);
            t && (m(t), r(v.b.SELL_NEW + "/enter-amount", {
              replace: !0
            }))
          },
          w = null != (t = y ?? g?.id) ? t : "";
        return (0, n.jsx)(ce.d, {
          onBackAction: () => {
            r(v.b.SELL_NEW + "/enter-amount", {
              replace: !0
            })
          },
          selectedQuoteId: w,
          onSelectProvider: b,
          isLoading: f,
          isError: p,
          hasQuotes: h.length > 0,
          children: h.map(e => (0, n.jsx)(de.h, {
            id: e.id,
            providerName: e.provider.name,
            providerIcon: e.provider.imageUrl,
            cryptoAmount: e.digitalMoney.amount,
            cryptoCurrency: e.digitalMoney.currency,
            fiatAmount: e.fiatMoney.amount,
            fiatCurrency: d,
            reversedAmounts: !0,
            badgeText: e.isRecommended ? o({
              id: "select-provider.recommended",
              defaultMessage: "Recommended"
            }) : void 0,
            onClick: () => b(e.id)
          }, e.id))
        })
      };
      var me = r(73632);
      const he = () => {
          const {
            selectedNetwork: e,
            setSelectedNetwork: t
          } = s();
          return (0, n.jsx)(me.A, {
            selectedNetwork: e,
            setSelectedNetwork: t
          })
        },
        ge = () => {
          const {
            enabled: e
          } = (0, y.x)(b.N);
          return e ? (0, n.jsx)(p, {
            children: (0, n.jsxs)(l.BV, {
              children: [(0, n.jsx)(l.qh, {
                index: !0,
                element: (0, n.jsx)(P, {})
              }), (0, n.jsx)(l.qh, {
                path: "/enter-amount",
                element: (0, n.jsx)(oe, {})
              }), (0, n.jsx)(l.qh, {
                path: "/select-fiat",
                element: (0, n.jsx)(ie, {})
              }), (0, n.jsx)(l.qh, {
                path: "/select-provider",
                element: (0, n.jsx)(ue, {})
              }), (0, n.jsx)(l.qh, {
                path: "/select-network",
                element: (0, n.jsx)(he, {})
              })]
            })
          }) : (0, n.jsx)(l.C5, {
            to: v.b.SELL,
            state: {
              showBackButton: !0
            }
          })
        }
    }
  }
]);
