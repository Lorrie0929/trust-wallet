"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [327], {
    327: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => K
      });
      var l = n(74848),
        i = n(9326),
        o = n(68022),
        a = n(4800),
        r = n(6442),
        s = n(47767),
        c = n(44322),
        d = n(5169),
        u = n(54991);
      n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p;
      var h, m = ((h = m || {})[h.BUY = 0] = "BUY", h[h.SELL = 1] = "SELL", h),
        f = n(21190),
        g = n(40980),
        y = n(42201),
        v = n(52114),
        C = n(1279),
        b = n(47996),
        p = n(96540);
      const w = ({
        asset: e,
        amount: t,
        onAmountChange: n,
        onAssetClick: i
      }) => {
        const {
          locale: o
        } = (0, r.A)(), a = (({
          symbol: e,
          width: t = 40,
          height: n = 40
        }) => {
          var i;
          return null == (i = (({
            width: e = 40,
            height: t = 40
          }) => [{
            symbol: "USD",
            name: "US Dollar",
            icon: (0, l.jsx)(u.a, {
              width: e,
              height: t
            })
          }, {
            symbol: "EUR",
            name: "Euro",
            icon: (0, l.jsx)(c.d, {
              width: e,
              height: t
            })
          }, {
            symbol: "GBP",
            name: "British Pound Sterling",
            icon: (0, l.jsx)(d.g, {
              width: e,
              height: t
            })
          }])({
            width: t,
            height: n
          }).find(t => t.symbol === e)) ? void 0 : i.icon
        })({
          symbol: e.symbol,
          width: 14,
          height: 14
        }), s = (e => void 0 !== e.assetId)(e), h = (0, b.o)(s ? e.blockchainId : ""), m = (0, p.useMemo)(() => void 0 === t || "" === t || s ? t : "0" === t ? "" : parseInt(t).toLocaleString(o), [t, e.symbol, o]);
        return (0, l.jsxs)("div", {
          className: "flex items-center gap-6",
          children: [(0, l.jsx)("div", {
            className: "flex-1",
            children: void 0 !== m ? (0, l.jsx)(g.R, {
              placeholder: "0",
              value: m,
              amountType: s ? y.yf.CRYPTO : y.yf.FIAT,
              onChange: e => n?.(e),
              autoFocus: !0,
              testid: "input-amount",
              className: "placeholder:text-text-primary text-header-48 font-bold leading-header-48"
            }) : (0, l.jsx)(v.E, {
              type: C.jK.HEADER_24,
              theme: C.Il.SECONDARY,
              children: "0"
            })
          }), s ? (0, l.jsx)(f.W, {
            iconUrl: e.iconUrl,
            symbol: e.symbol,
            contractAddress: e.address,
            network: h,
            onClick: i,
            testid: void 0 !== m ? "input-currency" : "output-currency",
            variant: "compact"
          }) : (0, l.jsx)(f.W, {
            icon: a,
            symbol: e.symbol,
            onClick: i,
            testid: void 0 !== m ? "input-currency" : "output-currency",
            variant: "compact"
          })]
        })
      };
      var x = n(47991),
        A = n(79372),
        O = n(75485),
        T = n(69275),
        _ = n(33055),
        L = n(52619),
        k = n(65512),
        B = n(40790),
        E = n(18947),
        N = n(2472),
        S = n(39255),
        U = n(26264),
        Y = n(21612),
        j = Object.defineProperty,
        F = Object.defineProperties,
        I = Object.getOwnPropertyDescriptors,
        P = Object.getOwnPropertySymbols,
        R = {}.hasOwnProperty,
        W = {}.propertyIsEnumerable,
        Q = (e, t, n) => t in e ? j(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        }) : e[t] = n,
        z = (e, t) => {
          for (var n in t || (t = {})) R.call(t, n) && Q(e, n, t[n]);
          if (P)
            for (var n of P(t)) W.call(t, n) && Q(e, n, t[n]);
          return e
        },
        D = (e, t) => F(e, I(t));
      const G = () => {
          const {
            formatMessage: e
          } = (0, r.A)(), t = (0, s.Zp)(), n = (0, Y.s)(), i = (0, s.g)(), o = ((e, t) => {
            const n = (0, _.v)(),
              l = (0, T.o)(),
              i = (0, p.useMemo)(() => {
                var e, n;
                const i = null != (e = t.assetId) ? e : A.j7,
                  {
                    coinId: o
                  } = (0, O.$5)(i);
                if (null === o || !l[o]) {
                  const e = null == (n = Object.values(l)) ? void 0 : n[0].coin;
                  return (0, O.Gc)({
                    coinId: e
                  })
                }
                return i
              }, [l, t.assetId, n]);
            return (0, p.useMemo)(() => {
              var t;
              return null != (t = e.find(e => e.assetId === i)) ? t : e.find(e => e.assetId === A.j7)
            }, [e])
          })((0, x.P)(), i), [c, d] = (0, p.useState)({
            symbol: "USD",
            amount: ""
          }), [u, h] = (0, p.useState)(o), {
            suggestedAmounts: m,
            isLoadingSuggestedAmounts: f
          } = (({
            asset: e,
            fiatCurrency: t
          }) => {
            const [n, l] = (0, p.useState)(), [i, o] = (0, p.useState)(), [a, r] = (0, p.useState)(), [s, c] = (0, p.useState)(), d = (0, _.A)(), u = (0, B.F7)(e?.assetId), h = (0, p.useMemo)(() => d && u?.address && e ? {
              address: u.address,
              assetId: e.assetId,
              currency: t,
              fiatAmount: void 0
            } : null, [d, u?.address, e?.assetId, t]), {
              data: m
            } = (0, E.A)(h), f = m?.currencyConfig;
            return (0, p.useEffect)(() => {
              f?.defaultAmount && (l(f.suggestedAmounts), o(f.defaultAmount), r(f.minAmount), c(f.maxAmount))
            }, [f]), {
              suggestedAmounts: n,
              defaultAmount: i,
              minAmount: a,
              maxAmount: s,
              isLoadingSuggestedAmounts: !f
            }
          })({
            asset: u,
            fiatCurrency: c.symbol
          }), g = "" !== c.amount && "0" !== c.amount;
          return S.Ci || n(U.b.BUY, {
            state: {
              showBackButton: !0
            }
          }), (0, l.jsx)(a.LN, {
            wide: !0,
            children: (0, l.jsxs)("div", {
              className: "flex flex-col justify-between flex-1",
              children: [(0, l.jsx)(a.zY, {
                backAction: () => {
                  t(-1)
                },
                title: e({
                  id: "fund.buy-crypto.title",
                  defaultMessage: "Buy crypto"
                })
              }), (0, l.jsxs)(a.Gv, {
                className: "flex flex-col items-end gap-8 justify-center",
                children: [(0, l.jsx)(w, {
                  asset: c,
                  amount: c.amount,
                  onAmountChange: e => d(D(z({}, c), {
                    amount: e
                  })),
                  onAssetClick: () => {}
                }), (0, l.jsx)(w, {
                  asset: u,
                  onAssetClick: () => {}
                })]
              }), (0, l.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0, l.jsxs)("div", {
                  className: "grid grid-cols-4 gap-1.5 h-[26px] items-center",
                  children: [(0, l.jsx)(N.i, {
                    length: 4,
                    widthClass: "w-full",
                    heightClass: "h-9",
                    fullWidth: !0,
                    isLoading: f,
                    horizontal: !0
                  }), m?.map((e, t) => (0, l.jsx)(k.$, {
                    size: L.Vp.SMALL,
                    onClick: () => (e => {
                      d(D(z({}, c), {
                        amount: e.toString()
                      }))
                    })(e),
                    fullWidth: !0,
                    theme: L.ry.SUBTLE,
                    className: "font-semibold ",
                    children: e
                  }, "suggested-amount-" + t))]
                }), (0, l.jsx)(k.$, {
                  size: L.Vp.LARGE,
                  shape: L.dB.DEFAULT,
                  theme: L.ry.PRIMARY,
                  onClick: () => {},
                  disabled: !g,
                  children: e({
                    id: "fund.buy-crypto-button",
                    defaultMessage: "{label}"
                  }, {
                    label: g ? "Continue" : "Enter amount"
                  })
                })]
              })]
            })
          })
        },
        K = (0, i.y)(() => (0, l.jsx)(o.G, {
          children: (0, l.jsx)(G, {})
        }))
    },
    2472: (e, t, n) => {
      n.d(t, {
        i: () => o
      });
      var l = n(74848),
        i = n(48346);
      const o = ({
        length: e,
        isLoading: t,
        widthClass: n = "w-20",
        heightClass: o = "h-4",
        horizontal: a = !1,
        fullWidth: r = !1
      }) => t ? (0, l.jsx)("div", {
        className: `flex ${a?"flex-row":"flex-col"} gap-2`,
        children: [...Array(e)].map((e, t) => (0, l.jsx)(i.S, {
          isLoading: !0,
          widthClass: n,
          heightClass: o,
          fullWidth: r
        }, "skeleton-line-list-" + t))
      }) : null
    },
    9326: (e, t, n) => {
      n.d(t, {
        y: () => h
      });
      var l = n(74848),
        i = n(9461),
        o = n(68157),
        a = n(96540),
        r = (n.n(a), Object.defineProperty),
        s = Object.getOwnPropertySymbols,
        c = {}.hasOwnProperty,
        d = {}.propertyIsEnumerable,
        u = (e, t, n) => t in e ? r(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        }) : e[t] = n;
      const h = e => t => (function() {
        const e = (0, o.GV)(e => e.settings.preferSidePanel),
          {
            show: t,
            hide: n
          } = (0, a.useContext)(i.t);
        (0, a.useEffect)(() => (e && t(), n), [e])
      }(), (0, l.jsx)(e, ((e, t) => {
        for (var n in t || (t = {})) c.call(t, n) && u(e, n, t[n]);
        if (s)
          for (var n of s(t)) d.call(t, n) && u(e, n, t[n]);
        return e
      })({}, t)))
    },
    18947: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      var l = n(97286),
        i = n(64145),
        o = n(23384);
      const a = e => {
        var t;
        const {
          data: n,
          isFetching: a,
          error: r,
          refetch: s
        } = (0, l.I)({
          queryKey: ["buy-crypto-widget-quote", e?.assetId, null != (t = e?.fiatAmount) ? t : "no-amount"],
          queryFn: () => i.YW.emit(o.A.BUY_CRYPTO_WIDGET_QUOTE, e),
          enabled: !!e?.address && !!e?.assetId,
          retry: 2,
          refetchOnWindowFocus: !1,
          staleTime: 3e4,
          gcTime: 3e5
        });
        return {
          data: n,
          isLoading: a && !n,
          error: r,
          refetch: s
        }
      }
    },
    21190: (e, t, n) => {
      n.d(t, {
        W: () => d
      });
      var l = n(74848),
        i = n(94893),
        o = n(41327),
        a = n(65504),
        r = n(68632),
        s = n(52114),
        c = n(1279);
      const d = ({
        iconUrl: e,
        icon: t,
        name: n = "",
        symbol: d,
        network: u,
        onClick: h,
        testid: m,
        contractAddress: f,
        variant: g = "default"
      }) => (0, l.jsx)(i.c, {
        testid: m,
        onClick: h,
        children: (0, l.jsxs)("div", {
          className: "flex items-center " + ("default" === g ? "space-x-2.5" : "space-x-1 bg-button-secondary hover:bg-button-secondary-hovered rounded-full p-4"),
          children: [e ? (0, l.jsx)(a.q, {
            size: "default" === g ? r.Y.LARGE : r.Y.XXSMALL,
            src: e,
            name: n,
            network: f ? u : void 0
          }) : t, (0, l.jsxs)("div", {
            className: "flex " + ("default" === g ? "flex-col" : "flex-row"),
            children: [(0, l.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [(0, l.jsx)(s.E, {
                type: "default" === g ? c.jK.TITLE : c.jK.SUBHEADER_14,
                weight: c.nG.SEMIBOLD,
                children: d
              }), (0, l.jsx)(o.v, {
                width: "default" === g ? 20 : 16,
                height: "default" === g ? 20 : 16,
                colorClass: "default" === g ? "text-iconNormal" : "text-icon-primary"
              })]
            }), n && (0, l.jsx)("div", {
              className: "flex whitespace-nowrap",
              children: (0, l.jsx)(s.E, {
                type: c.jK.CAPTION,
                theme: c.Il.SECONDARY,
                children: n
              })
            })]
          })]
        })
      })
    },
    23384: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      var l = n(24439);
      const i = {
        FETCH_TOKENS_AVAILABLE_TO_BUY: (0, l.If)("FetchTokensAvailableToBuy"),
        FETCH_TOKENS_AVAILABLE_TO_SELL: (0, l.If)("FetchTokensAvailableToSell"),
        BUY_CRYPTO_QUOTE: (0, l.If)("BuyCryptoQuote"),
        BUY_CRYPTO: (0, l.If)("BuyCrypto"),
        SELL_CRYPTO_QUOTE: (0, l.If)("SellCryptoQuote"),
        SELL_CRYPTO: (0, l.If)("SellCrypto"),
        ONE_CLICK_BUY_CRYPTO_CONFIG: (0, l.If)("OneClickBuyCryptoConfig"),
        BUY_CRYPTO_WIDGET_QUOTE: (0, l.If)("BuyCryptoWidgetQuote")
      }
    },
    68022: (e, t, n) => {
      n.d(t, {
        G: () => a,
        R: () => o
      });
      var l = n(74848),
        i = n(96540);
      n.n(i);
      const o = (0, i.createContext)({}),
        a = ({
          children: e
        }) => {
          const [t, n] = (0, i.useState)(0);
          return (0, l.jsx)(o.Provider, {
            value: {
              counter: t,
              setCounter: n
            },
            children: e
          })
        }
    }
  }
]);
