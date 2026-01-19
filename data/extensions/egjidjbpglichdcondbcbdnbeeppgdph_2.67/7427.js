try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.l = e.l || {}, e.l[t] = "ab1f1588-d338-4229-825a-1986bdf15886", e.C = "sentry-dbid-ab1f1588-d338-4229-825a-1986bdf15886")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [7427], {
    2472: (e, t, a) => {
      a.d(t, {
        i: () => s
      });
      var i = a(74848),
        n = a(48346);
      const s = ({
        length: e,
        isLoading: t,
        widthClass: a = "w-20",
        heightClass: s = "h-4",
        horizontal: r = !1,
        fullWidth: l = !1
      }) => t ? (0, i.jsx)("div", {
        className: `flex ${r?"flex-row":"flex-col"} gap-2`,
        children: [...Array(e)].map((e, t) => (0, i.jsx)(n.S, {
          isLoading: !0,
          widthClass: a,
          heightClass: s,
          fullWidth: l
        }, "skeleton-line-list-" + t))
      }) : null
    },
    13772: (e, t, a) => {
      a.d(t, {
        v: () => n
      });
      var i, n = ((i = n || {}).INITIATE = "initiate", i.UPDATE = "update", i.CLOSE = "close", i.SET_CURRENT_WALLET = "set-current-wallet", i)
    },
    15972: (e, t, a) => {
      a.d(t, {
        Y: () => n
      });
      var i, n = ((i = n || {}).INITIATE = "initiate", i.CLOSE = "close", i)
    },
    23384: (e, t, a) => {
      a.d(t, {
        A: () => n
      });
      var i = a(24439);
      const n = {
        FETCH_TOKENS_AVAILABLE_TO_BUY: (0, i.If)("FetchTokensAvailableToBuy"),
        FETCH_TOKENS_AVAILABLE_TO_SELL: (0, i.If)("FetchTokensAvailableToSell"),
        GET_BUY_CRYPTO_ASSETS: (0, i.If)("GetBuyCryptoAssets"),
        GET_BUY_PROVIDER_ROUTES: (0, i.If)("GetBuyProviderRoutes"),
        BUY_CRYPTO_QUOTE: (0, i.If)("BuyCryptoQuote"),
        BUY_CRYPTO: (0, i.If)("BuyCrypto"),
        SELL_CRYPTO_QUOTE: (0, i.If)("SellCryptoQuote"),
        SELL_CRYPTO: (0, i.If)("SellCrypto"),
        ONE_CLICK_BUY_CRYPTO_CONFIG: (0, i.If)("OneClickBuyCryptoConfig"),
        BUY_CRYPTO_WIDGET_QUOTE: (0, i.If)("BuyCryptoWidgetQuote"),
        GET_P2P_BUY_CRYPTO_CONFIG: (0, i.If)("GetP2PBuyCryptoConfig"),
        GET_P2P_BUY_CRYPTO_QUOTES: (0, i.If)("GetP2PBuyCryptoQuotes"),
        GET_P2P_BUY_CRYPTO_CHECKOUT: (0, i.If)("GetP2PBuyCryptoCheckout")
      }
    },
    31902: (e, t, a) => {
      a.d(t, {
        P: () => n
      });
      var i = a(79960);

      function n(e) {
        var t;
        return (null == (t = (0, i.t)()[e]) ? void 0 : t.transferable) || "0"
      }
    },
    44199: (e, t, a) => {
      a.d(t, {
        X: () => s
      });
      var i = a(96540);

      function n() {
        const e = document.documentElement;
        return {
          width: parseInt(e.style.width, 10) || 0,
          height: parseInt(e.style.height, 10) || 0
        }
      }
      const s = () => {
        const [e, t] = (0, i.useState)(() => {
          const {
            width: e,
            height: t
          } = n();
          return window.innerWidth === e && window.innerHeight === t
        });
        return (0, i.useEffect)(() => {
          const e = () => {
            const {
              width: e,
              height: a
            } = n();
            t(window.innerWidth === e && window.innerHeight === a)
          };
          return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), e
      }
    },
    72267: (e, t, a) => {
      a.d(t, {
        XU: () => u
      });
      var i, n, s, r = a(31635),
        l = a(96540),
        o = a(6442);
      (n = i || (i = {})).formatDate = "FormattedDate", n.formatTime = "FormattedTime", n.formatNumber = "FormattedNumber", n.formatList = "FormattedList", n.formatDisplayName = "FormattedDisplayName",
        function(e) {
          e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
        }(s || (s = {}));
      var c = function(e) {
        var t = (0, o.A)(),
          a = e.value,
          i = e.children,
          n = (0, r.Tt)(e, ["value", "children"]);
        return i(t.formatNumberToParts(a, n))
      };

      function d(e) {
        var t = function(t) {
          var a = (0, o.A)(),
            i = t.value,
            n = t.children,
            s = (0, r.Tt)(t, ["value", "children"]),
            l = "string" == typeof i ? new Date(i || 0) : i;
          return n("formatDate" === e ? a.formatDateToParts(l, s) : a.formatTimeToParts(l, s))
        };
        return t.displayName = s[e], t
      }

      function h(e) {
        var t = function(t) {
          var a = (0, o.A)(),
            i = t.value,
            n = t.children,
            s = (0, r.Tt)(t, ["value", "children"]),
            c = a[e](i, s);
          if ("function" == typeof n) return n(c);
          var d = a.textComponent || l.Fragment;
          return l.createElement(d, null, c)
        };
        return t.displayName = i[e], t
      }
      c.displayName = "FormattedNumberParts", c.displayName = "FormattedNumberParts";
      var u = h("formatDate");
      h("formatTime"), h("formatNumber"), h("formatList"), h("formatDisplayName"), d("formatDate"), d("formatTime")
    },
    84206: (e, t, a) => {
      a.d(t, {
        t: () => i
      });
      const i = {
        name: "onramp-revamp",
        default: !1
      }
    },
    87427: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => wa
      });
      var i = a(74848),
        n = a(16611),
        s = a(29584),
        r = a(26264),
        l = a(63369),
        o = a(44199),
        c = a(42763),
        d = a(60380),
        h = a(63111),
        u = a(96540),
        f = a(90275),
        m = a(1279),
        p = a(52114),
        y = a(11377);
      const g = [y.J.ripple],
        v = [y.J.ripple],
        C = e => !(!e.address || (!g.includes(e.blockchainId) || void 0 !== e.isRegistered) && !1 !== e.isRegistered),
        w = ({
          coinStatus: e,
          asset: t
        }) => {
          const a = C(t),
            n = (0, u.useCallback)(e => {
              var i, n;
              return (e.metadata.enabled || void 0 === e.metadata.enabled) && e.targets.extension_enabled && (0, f.zN)((0, f.W9)(), null != (i = e.targets.extension_version_from) ? i : null, null != (n = e.targets.extension_version_to) ? n : null) && !("ripple" === t.blockchainId && t.address && "Enable this token to start using it." === e.metadata.description && !a) && !("aptos" === t.blockchainId && !a)
            }, [e, a]),
            s = e => {
              switch (e) {
                case "error":
                  return h.Z.ERROR;
                case "warning":
                default:
                  return h.Z.WARNING;
                case "ok":
                  return h.Z.DEFAULT
              }
            },
            r = (0, u.useMemo)(() => !!e?.messages.some(n), [e]);
          return e && r ? (0, i.jsx)("div", {
            className: "flex space-y-2 flex-col",
            children: e.messages.map(e => {
              var t;
              return n(e) ? (0, i.jsxs)(d.F, {
                theme: s(e.metadata.type),
                children: [(0, i.jsx)("pre", {
                  className: "font-brand caption-text text-utility-1-default whitespace-pre-wrap",
                  children: e.metadata.description
                }), e.metadata.link && e.metadata.link.url && (0, i.jsx)("div", {
                  className: "inline-block",
                  children: (0, i.jsx)(p.E, {
                    theme: m.Il.UTILITY_1_DEFAULT,
                    weight: m.nG.MEDIUM,
                    children: (0, i.jsx)("a", {
                      target: "_blank",
                      rel: "noopener nofollow noreferrer",
                      href: null == (t = e.metadata.link) ? void 0 : t.url,
                      children: "Learn More"
                    })
                  })
                })]
              }, e.id) : null
            })
          }) : null
        };
      var x = a(94893);
      const b = ({
        width: e,
        height: t,
        colorClass: a
      }) => (0, i.jsxs)("svg", {
        className: a,
        width: e ?? 22,
        height: t ?? 22,
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, i.jsx)("path", {
          d: "M18.5401 2.44997C18.0701 2.44997 17.6801 2.83997 17.6801 3.30997C17.6801 3.77997 18.0701 4.17997 18.5401 4.17997C19.0101 4.17997 19.4101 4.56997 19.4101 5.03997V5.46997H18.5401C18.0701 5.46997 17.6801 5.85997 17.6801 6.32997V8.48997C17.6801 8.96997 18.0701 9.35997 18.5401 9.35997H19.4101V14.32C19.4101 14.67 19.1201 14.96 18.7601 14.96C18.4001 14.96 18.1101 14.67 18.1101 14.32V12.59C18.1101 11.28 17.0501 10.22 15.7401 10.22H15.6101V4.17997C15.6101 2.13997 13.9501 0.469971 11.9101 0.469971H6.30012C4.26012 0.469971 2.60012 2.13997 2.60012 4.17997V17.3H1.98012C1.37012 17.3 0.870117 17.8 0.870117 18.42C0.870117 19.04 1.37012 19.53 1.98012 19.53H16.2201C16.8401 19.53 17.3401 19.03 17.3401 18.42C17.3401 17.81 16.8401 17.3 16.2201 17.3H15.6101V11.94H15.7401C16.1001 11.94 16.3901 12.23 16.3901 12.59V14.32C16.3901 15.63 17.4501 16.69 18.7601 16.69C20.0701 16.69 21.1301 15.63 21.1301 14.32V5.03997C21.1301 3.60997 19.9701 2.44997 18.5401 2.44997ZM13.3801 17.3H4.82012V4.17997C4.82012 3.35997 5.48012 2.69997 6.30012 2.69997H11.9101C12.7201 2.69997 13.3801 3.35997 13.3801 4.17997V17.3Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          d: "M11.0901 4.54993H7.1101C6.8301 4.54993 6.6001 4.75993 6.6001 5.02993V8.39993C6.6001 8.47993 6.6701 8.54993 6.7501 8.54993H11.4501C11.5301 8.54993 11.6001 8.47993 11.6001 8.39993V5.02993C11.6001 4.75993 11.3701 4.54993 11.0901 4.54993Z",
          fill: "currentColor"
        })]
      });
      var N = a(47767);
      const k = ({
        color: e,
        cost: t,
        assetId: a
      }) => {
        const n = (0, N.Zp)();
        return (0, i.jsx)("div", {
          className: "flex w-full",
          children: t && (0, i.jsx)(x.c, {
            onClick: () => n(`${r.b.GAS_STATION}/${a}`),
            children: (0, i.jsxs)("div", {
              className: "flex space-x-1 items-start",
              children: [(0, i.jsx)(b, {
                width: 20,
                height: 20,
                colorClass: e
              }), (0, i.jsx)(p.E, {
                children: t
              })]
            })
          })
        })
      };
      var M = a(64145),
        T = a(14948),
        H = a(15972),
        L = a(59754),
        V = a(68157),
        P = a(86170),
        _ = a(22670),
        S = a(48305),
        O = a(33055),
        E = a(9389),
        B = a(48268),
        R = a(47909);
      const A = () => (0, i.jsxs)(B.B, {
        children: [(0, i.jsx)(p.E, {
          type: m.jK.TITLE,
          children: "Investment risks"
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(p.E, {
            type: m.jK.SUBTITLE,
            children: "Baseline risk"
          }), (0, i.jsxs)(p.E, {
            type: m.jK.SUBTITLE,
            theme: m.Il.THIRD,
            children: ["All crypto-assets are risky, regardless of the type of token you hold. Here are some ‘baseline’ risks to be aware of before deciding to invest.", (0, i.jsx)(R.c, {
              children: "Investment risk: the performance of most-crypto assets can be highly volatile, with their value dropping as quickly as it can rise. You should be prepared to lose all the money you invest in crypto-assets."
            })]
          })]
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(p.E, {
            type: m.jK.SUBTITLE,
            children: "Staked assets"
          }), (0, i.jsxs)(p.E, {
            type: m.jK.SUBTITLE,
            theme: m.Il.THIRD,
            children: [(0, i.jsx)(R.c, {
              children: "Slashing risk: By electing to stake your assets, you risk potential loss if the network penalizes your validator for malfeasance, whether intentional or due to software issues. Some staking service providers will reimburse slashing losses when the validator operator is at fault."
            }), (0, i.jsxs)(R.c, {
              children: ["Liquidity risk: Some protocols require staked assets to be locked for a period or time, which can prevent you from accessing or selling your assets quickly. You can find further information on staking lock-up periods", " ", (0, i.jsx)("a", {
                className: "underline",
                href: "https://trustwallet.com/staking-risks",
                target: "_blank",
                rel: "noopener nofollow noreferrer",
                children: "here."
              })]
            }), (0, i.jsxs)(R.c, {
              children: ["APY not guaranteed: The yield or reward rate you get from staking your assets is determined by the relevant protocol and is not guaranteed and may vary over time. You can find more information on how our staking APYs are calculated", " ", (0, i.jsx)("a", {
                className: "underline",
                href: "https://trustwallet.com/earn-rewards-with-staking",
                target: "_blank",
                rel: "noopener nofollow noreferrer",
                children: "here."
              })]
            }), (0, i.jsx)(R.c, {
              children: "Protocol risks: Staking protocols are often continually evolving. Changes or updates to the consensus mechanism can introduce new vulnerabilities or unforeseen outcomes."
            })]
          })]
        })]
      });
      var F = a(28898),
        I = a(10551),
        $ = a(51335),
        j = a(51848),
        D = a(69254),
        Z = a(97286),
        U = a(89408);
      const Y = ["hour", "day", "week", "month", "year", "all"];
      var W = a(15314),
        z = a(21094),
        q = a(66118),
        G = a(44731),
        K = a(6442),
        Q = a(72267),
        X = Object.defineProperty,
        J = Object.getOwnPropertySymbols,
        ee = {}.hasOwnProperty,
        te = {}.propertyIsEnumerable,
        ae = (e, t, a) => t in e ? X(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : e[t] = a,
        ie = (e, t) => {
          for (var a in t || (t = {})) ee.call(t, a) && ae(e, a, t[a]);
          if (J)
            for (var a of J(t)) te.call(t, a) && ae(e, a, t[a]);
          return e
        };
      q.t1.register(q.PP, q.ZT, q.No, q.kc, q.FN);
      const ne = {
          aspectRatio: 3,
          plugins: {
            legend: {
              display: !1
            },
            title: {
              display: !0
            },
            tooltip: {
              enabled: !1
            }
          },
          interaction: {
            mode: "index",
            intersect: !1
          },
          scales: {
            x: {
              display: !1
            },
            y: {
              display: !1
            }
          }
        },
        se = (e, t) => e > 0 ? (t - e) / e * 100 : 100 * t,
        re = ({
          assetId: e,
          hideRiskSection: t
        }) => {
          const {
            formatMessage: a
          } = (0, K.A)(), {
            theme: n
          } = (0, F.h)(), s = (0, c.V)(e), {
            currency: r,
            baseCurrencyType: l
          } = (0, P.P)(), [o, d] = (0, u.useState)(null), [h, f] = (0, u.useState)(s ? 5 : 1), {
            data: y,
            isLoading: g
          } = (e => {
            const {
              data: t,
              isError: a,
              isFetching: i,
              isPending: n
            } = (0, Z.I)({
              queryKey: ["asset-chart", e.assetId, e.period],
              queryFn: () => M.YW.emit(U.A.FETCH_ASSET_CHART, e),
              refetchOnMount: !1,
              refetchOnReconnect: !1,
              refetchOnWindowFocus: !1,
              staleTime: 6e5,
              gcTime: 36e5
            });
            return {
              data: t,
              isError: a,
              isFetching: i,
              isLoading: n
            }
          })({
            assetId: e,
            period: Y[h],
            currency: r
          }), {
            price: v,
            change: C,
            percentChange: w,
            timestamp: x
          } = (0, u.useMemo)(() => {
            if (y?.prices && y.prices.length > 0) {
              if (null === o) return {
                price: y.prices[y.prices.length - 1].price,
                percentChange: se(y.prices[0].price, y.prices[y.prices.length - 1].price),
                change: y.prices[y.prices.length - 1].price - y.prices[0].price,
                timestamp: null
              };
              const e = new Date(0);
              return e.setUTCSeconds(y.prices[o.index].date), {
                price: y.prices[o.index].price,
                percentChange: se(y.prices[0].price, y.prices[o.index].price),
                change: y.prices[o.index].price - y.prices[0].price,
                timestamp: e
              }
            }
            return {
              price: null,
              change: null,
              percentChange: null,
              timestamp: null
            }
          }, [y?.prices, o]), b = (0, u.useMemo)(() => {
            if (!y?.prices) return null;
            const e = y.prices.map(e => e.price);
            return {
              labels: e,
              datasets: [{
                data: e,
                backgroundColor: n === W.W.LIGHT ? "white" : "black",
                borderColor: 0 > (w ?? 0) ? "#E33B54" : "#03A66D",
                borderWidth: 2,
                borderJoinStyle: "round",
                pointStyle: !1
              }]
            }
          }, [y?.prices, w]), N = (0, u.useMemo)(() => ({
            hour: a({
              id: "asset.chart.period-1h",
              defaultMessage: "1H"
            }),
            day: a({
              id: "asset.chart.period-1d",
              defaultMessage: "1D"
            }),
            week: a({
              id: "asset.chart.period-1w",
              defaultMessage: "1W"
            }),
            month: a({
              id: "asset.chart.period-1m",
              defaultMessage: "1M"
            }),
            year: a({
              id: "asset.chart.period-1y",
              defaultMessage: "1Y"
            }),
            all: a({
              id: "asset.chart.period-all",
              defaultMessage: "All"
            })
          }), [a]), k = (0, u.useMemo)(() => [{
            id: "intersect-x-line",
            afterDraw: e => {
              if (e.getActiveElements().length) {
                const t = e.data.datasets[0].borderColor,
                  a = e.data.datasets[0].backgroundColor,
                  i = e.getActiveElements()[0];
                d(i);
                const n = e.chartArea,
                  s = e.ctx;
                return s.save(), s.beginPath(), s.moveTo(i.element.x, n.top), s.lineTo(i.element.x, n.bottom), s.lineWidth = 1, s.setLineDash([3, 3]), s.strokeStyle = t, s.stroke(), s.restore(), s.beginPath(), s.arc(i.element.x, i.element.y, 5, 0, 2 * Math.PI), s.fillStyle = t, s.fill(), s.lineWidth = 2, s.strokeStyle = a, s.stroke(), void s.restore()
              }
              d(null)
            }
          }], []);
          return (0, i.jsxs)("div", {
            className: "w-full",
            children: [(0, i.jsxs)("div", {
              className: "flex flex-col items-center space-y-0.5",
              children: [(0, i.jsx)($.E, {
                isLoading: g,
                className: "w-24",
                children: (0, i.jsx)(D.h, {
                  testid: "asset-fiat-price",
                  textType: m.jK.HEADER_32,
                  amountType: l,
                  value: v ?? 0,
                  currency: r,
                  maxSignificantDecimals: v && .01 > v ? 10 : void 0,
                  tinyThreshold: v && .01 > v ? 10 : void 0
                })
              }), (0, i.jsx)($.E, {
                isLoading: g,
                className: "w-12",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col items-center space-x-1",
                  children: [(0, i.jsxs)("div", {
                    className: "flex space-x-1 items-center",
                    children: [(0, i.jsx)(I.b, {
                      width: 16,
                      height: 16,
                      colorClass: 0 > (C ?? 0) ? "text-error-1-default" : "text-success-1-default rotate-180"
                    }), (0, i.jsx)(D.h, {
                      testid: "asset-fiat-amount-change",
                      textType: m.jK.SUBHEADER_16,
                      amountType: l,
                      currency: r,
                      theme: 0 > (C ?? 0) ? m.Il.ERROR : m.Il.SUCCESS,
                      value: C ?? 0
                    }), (0, i.jsx)(D.h, {
                      testid: "asset-fiat-percentage-change",
                      textType: m.jK.SUBHEADER_16,
                      prefix: "(",
                      suffix: ")",
                      amountType: z.Cu.PERCENT,
                      theme: 0 > (w ?? 0) ? m.Il.ERROR : m.Il.SUCCESS,
                      value: w ?? 0
                    })]
                  }), (0, i.jsx)("div", {
                    className: "h-4",
                    children: x && (0, i.jsx)(p.E, {
                      type: m.jK.SUBHEADER_16,
                      theme: m.Il.THIRD,
                      children: (0, i.jsx)(Q.XU, ie({
                        value: x,
                        hourCycle: "h23",
                        hour: "numeric",
                        minute: "2-digit"
                      }, h > 1 && {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))
                    })
                  })]
                })
              })]
            }), (0, i.jsx)($.E, {
              isLoading: g,
              className: "w-full",
              children: (0, i.jsx)("div", {
                className: "my-5 w-full aspect-[3/1]",
                children: !!b && (0, i.jsx)(G.N1, {
                  options: ne,
                  data: b,
                  plugins: k
                })
              })
            }), (0, i.jsx)(j.fu, {
              as: u.Fragment,
              onChange: e => f(e),
              selectedIndex: h,
              children: (0, i.jsx)(j.wb, {
                className: "flex space-x-0.5 justify-center",
                children: Y.map(e => (0, i.jsx)(j.oz, {
                  className: "px-2 outline-none flex flex-col items-center",
                  children: ({
                    selected: t
                  }) => (0, i.jsx)("div", {
                    "data-selected": t,
                    className: "flex items-center justify-center p-2 rounded data-[selected='true']:bg-bg3",
                    children: (0, i.jsx)(p.E, {
                      type: m.jK.CAPTION,
                      weight: m.nG.MEDIUM,
                      children: N[e]
                    })
                  })
                }, e))
              })
            }), s && !t && (0, i.jsx)(A, {})]
          })
        };
      var le = a(89247);
      const oe = () => (0, i.jsxs)(p.E, {
        type: m.jK.CAPTION,
        theme: m.Il.PRIMARY,
        children: ["Past performance is not a reliable indicator of future results.", (0, i.jsxs)("p", {
          children: ["Data source is from CoinMarketCap. ", (0, i.jsx)("a", {
            className: "underline",
            href: "https://trustwallet.com/terms-of-service",
            target: "_blank",
            rel: "noopener nofollow noreferrer",
            children: "Learn more about risks."
          })]
        })]
      });
      var ce = Object.defineProperty,
        de = Object.defineProperties,
        he = Object.getOwnPropertyDescriptors,
        ue = Object.getOwnPropertySymbols,
        fe = {}.hasOwnProperty,
        me = {}.propertyIsEnumerable,
        pe = (e, t, a) => t in e ? ce(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : e[t] = a,
        ye = (e, t) => {
          for (var a in t || (t = {})) fe.call(t, a) && pe(e, a, t[a]);
          if (ue)
            for (var a of ue(t)) me.call(t, a) && pe(e, a, t[a]);
          return e
        },
        ge = (e, t) => de(e, he(t));
      const ve = ({
        asset: e,
        coinStatus: t
      }) => {
        const a = (0, O.v)(),
          n = (0, E.Cb)();
        (0, u.useEffect)(() => {
          ((e, t, a) => {
            new Promise((e, t) => {
              var i = e => {
                  try {
                    s(a.next(e))
                  } catch (e) {
                    t(e)
                  }
                },
                n = e => {
                  try {
                    s(a.throw(e))
                  } catch (e) {
                    t(e)
                  }
                },
                s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, n);
              s((a = a.apply(null, null)).next())
            })
          })(0, 0, function*() {
            const [t] = yield Promise.all([M.YW.emit(_.A.FETCH_BALANCE, {
              blockchainId: e.blockchainId,
              decimals: e.decimals,
              address: e.address
            }), M.YW.emit(_.A.FETCH_STAKING_LIST)]);
            V.M_.dispatch(S.u.actions.setBalances({
              walletId: a,
              balances: [ge(ye({}, t), {
                assetId: e.assetId
              })],
              accountId: n
            }))
          })
        }, []);
        const {
          gasCost: s,
          gasStatusColor: r
        } = function(e) {
          const [t, a] = (0, u.useState)(""), [i, n] = (0, u.useState)(""), [s, r] = (0, u.useState)("text-iconNormal"), l = (0, V.GV)(e => e.sdkFeatures.gasStatus), {
            currency: o
          } = (0, P.P)();
          return (0, u.useEffect)(() => {
            e && M.YW.emit(T.A.GAS_STATUS, {
              action: H.Y.INITIATE,
              params: {
                assetId: e,
                currency: o
              }
            })
          }, [e]), (0, u.useEffect)(() => {
            var e, t, i;
            if (l?.isSuccess) switch (a((null == (e = l?.data) ? void 0 : e.cost) || ""), n((null == (t = l?.data) ? void 0 : t.status) || ""), null == (i = l?.data) ? void 0 : i.status) {
              case "Low":
                r("text-primary");
                break;
              case "Medium":
                r("text-iconNormal");
                break;
              case "High":
                r("text-error")
            }
          }, [l]), (0, L.A)(function() {
            M.YW.emit(T.A.GAS_STATUS, {
              action: H.Y.CLOSE
            })
          }), (0, u.useMemo)(() => ({
            gasCost: t,
            gasStatus: i,
            gasStatusColor: s
          }), [t, i, s])
        }(e.assetId), l = (0, c.V)(e.assetId);
        return (0, i.jsxs)("div", {
          className: "flex flex-col items-center",
          children: [(0, i.jsx)(w, {
            coinStatus: t,
            asset: e
          }), l && (0, i.jsx)(oe, {}), (0, i.jsx)("div", {
            className: "flex py-2 w-full",
            children: (0, i.jsx)(k, {
              cost: s,
              color: r,
              assetId: e.assetId
            })
          }), (0, i.jsx)(re, {
            assetId: e.assetId,
            hideRiskSection: !0
          }), (0, i.jsx)(le.h, {
            y: "4"
          })]
        })
      };
      var Ce = a(62266),
        we = a(69325),
        xe = a(4800),
        be = a(26858),
        Ne = a(67658),
        ke = a(40790),
        Me = a(67310),
        Te = a(84118),
        He = a(85266),
        Le = a(36322),
        Ve = a(93077),
        Pe = a(39584),
        _e = a(69666),
        Se = a(96159),
        Oe = a(64264),
        Ee = a(84206),
        Be = a(21612),
        Re = a(3280),
        Ae = a(96471);
      const Fe = e => e.blockchainId === y.J.ripple && e.address ? {
        coinActivationFee: "1",
        tokenActivationFee: "0.2"
      } : null;
      var Ie = a(42463),
        $e = a(65512),
        je = a(22146),
        De = a(47991),
        Ze = a(80772);
      const Ue = ({
        asset: e,
        network: t,
        opened: a,
        onClose: n,
        onConfirm: s
      }) => {
        const {
          formatMessage: r
        } = (0, K.A)(), l = Fe(e), o = (e => {
          const t = (0, De.P)();
          if (!g.includes(e)) return !1;
          const a = t.find(t => t.blockchainId === e);
          return !!a && (void 0 === a.isRegistered || !1 === a.isRegistered)
        })(e.blockchainId), c = (0, Ze.Hy)(t, e), d = l?.coinActivationFee, h = l?.tokenActivationFee;
        return l ? (0, i.jsx)(je.a, {
          opened: a,
          onClose: n,
          children: (0, i.jsxs)("div", {
            className: "flex flex-col space-y-7",
            children: [(0, i.jsx)("div", {
              className: "flex justify-center",
              children: (0, i.jsx)(Ie.I, {})
            }), (0, i.jsxs)("div", {
              className: "flex flex-col space-y-3",
              children: [(0, i.jsx)("div", {
                className: "text-center",
                children: (0, i.jsx)(p.E, {
                  type: m.jK.HEADER,
                  children: r({
                    id: "asset.reserve-fee-modal.header-1",
                    defaultMessage: "Asset Activation Required"
                  })
                })
              }), (0, i.jsx)(p.E, {
                theme: m.Il.THIRD,
                weight: m.nG.NORMAL,
                children: r({
                  id: "asset.reserve-fee-modal.disclaimer",
                  defaultMessage: `To start using ${c} network you need to add a reserve or ${d} ${c} and ${h} ${c} for each token you enable.`
                }, {
                  coinReserve: d,
                  tokenReserve: h,
                  assetSymbol: c
                })
              }), o && (0, i.jsxs)("div", {
                children: [(0, i.jsx)(p.E, {
                  type: m.jK.SUBTITLE,
                  children: r({
                    id: "asset.reserve-fee-modal.coin-reserve-header",
                    defaultMessage: `${d} ${c} Reserve`
                  }, {
                    coinActivationFee: d,
                    assetSymbol: c
                  })
                }), (0, i.jsx)(p.E, {
                  theme: m.Il.THIRD,
                  weight: m.nG.NORMAL,
                  children: r({
                    id: "asset.reserve-fee-modal.coin-disclaimer",
                    defaultMessage: `To start using the ${c} network requires ${d} ${c} reserve to activate your account.`
                  }, {
                    assetSymbol: c,
                    coinReserve: d
                  })
                })]
              }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(p.E, {
                  type: m.jK.SUBTITLE,
                  children: r({
                    id: "asset.reserve-fee-modal.token-reserve-header",
                    defaultMessage: `${h} ${c} Reserve`
                  }, {
                    tokenActivationFee: h,
                    assetSymbol: c
                  })
                }), (0, i.jsx)(p.E, {
                  theme: m.Il.THIRD,
                  weight: m.nG.NORMAL,
                  children: r({
                    id: "asset.reserve-fee-modal.token-disclaimer",
                    defaultMessage: `To enable a token on the ${c} network requires ${h} ${c} reserver to set-up a TrustLine.`
                  }, {
                    assetSymbol: c,
                    tokenReserve: h
                  })
                })]
              })]
            }), (0, i.jsx)("div", {
              className: "flex flex-col space-y-5",
              children: (0, i.jsx)($e.$, {
                testid: "inscriptions-modal-confirm-btn",
                onClick: s,
                children: r({
                  id: "asset.reserve-fee-modal.cta",
                  defaultMessage: "Proceed with activation"
                })
              })
            })]
          })
        }) : null
      };
      var Ye = a(44657),
        We = a(55515),
        ze = a(54290);
      const qe = ({
        width: e,
        height: t,
        colorClass: a
      }) => (0, i.jsxs)("svg", {
        className: a,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, i.jsxs)("g", {
          clipPath: "url(#clip0_14006_7877)",
          children: [(0, i.jsx)("path", {
            d: "M8.77002 23.31C7.39002 23.31 6.27002 22.19 6.27002 20.81C6.27002 19.43 7.39002 18.31 8.77002 18.31C10.15 18.31 11.27 19.43 11.27 20.81C11.27 22.19 10.15 23.31 8.77002 23.31ZM8.77002 20.06C8.36002 20.06 8.02002 20.4 8.02002 20.81C8.02002 21.22 8.36002 21.56 8.77002 21.56C9.18002 21.56 9.52002 21.22 9.52002 20.81C9.52002 20.4 9.18002 20.06 8.77002 20.06Z",
            fill: "currentColor"
          }), (0, i.jsx)("path", {
            d: "M17.77 23.31C16.39 23.31 15.27 22.19 15.27 20.81C15.27 19.43 16.39 18.31 17.77 18.31C19.15 18.31 20.27 19.43 20.27 20.81C20.27 22.19 19.15 23.31 17.77 23.31ZM17.77 20.06C17.36 20.06 17.02 20.4 17.02 20.81C17.02 21.22 17.36 21.56 17.77 21.56C18.18 21.56 18.52 21.22 18.52 20.81C18.52 20.4 18.18 20.06 17.77 20.06Z",
            fill: "currentColor"
          }), (0, i.jsx)("path", {
            d: "M12.4898 13.5C12.2398 13.5 11.9998 13.41 11.8098 13.23L9.77981 11.36C9.36981 10.99 9.34981 10.35 9.71981 9.94998C10.0998 9.54998 10.7298 9.51998 11.1298 9.88998L12.3798 11.04L15.2898 7.48998C15.6398 7.05998 16.2698 6.99998 16.6998 7.34998C17.1298 7.69998 17.1898 8.32998 16.8398 8.75998L13.2498 13.13C13.0798 13.34 12.8198 13.47 12.5498 13.49C12.5298 13.49 12.4998 13.49 12.4798 13.49L12.4898 13.5Z",
            fill: "currentColor"
          }), (0, i.jsx)("path", {
            d: "M21.0602 3.81H5.48018C5.39018 3.81 5.30018 3.83 5.21018 3.84L4.76018 1.59C4.65018 1.06 4.19018 0.710002 3.66018 0.710002C3.63018 0.710002 3.61018 0.690002 3.57018 0.690002H2.05018C1.43018 0.690002 0.930176 1.19 0.930176 1.81C0.930176 2.43 1.43018 2.93 2.05018 2.93H2.73018L4.48018 11.67L5.08018 15.13C5.18018 16.08 6.04018 16.8 7.07018 16.8H19.4502C20.4802 16.8 21.3402 16.08 21.4402 15.13L23.0402 5.84C23.1602 4.75 22.2302 3.8 21.0502 3.8L21.0602 3.81ZM19.2702 14.56H7.37018L6.71018 11.26L5.81018 6.06H20.7302L19.2702 14.56Z",
            fill: "currentColor"
          })]
        }), (0, i.jsx)("defs", {
          children: (0, i.jsx)("clipPath", {
            id: "clip0_14006_7877",
            children: (0, i.jsx)("rect", {
              width: "24",
              height: "24",
              fill: "currentColor"
            })
          })
        })]
      });
      var Ge = a(65828),
        Ke = a(52619),
        Qe = a(11717),
        Xe = a(38921),
        Je = (e, t, a) => new Promise((i, n) => {
          var s = e => {
              try {
                l(a.next(e))
              } catch (e) {
                n(e)
              }
            },
            r = e => {
              try {
                l(a.throw(e))
              } catch (e) {
                n(e)
              }
            },
            l = e => e.done ? i(e.value) : Promise.resolve(e.value).then(s, r);
          l((a = a.apply(e, t)).next())
        });
      const et = ({
        asset: e,
        isTokenRequiringRegistration: t,
        blockchain: a
      }) => {
        const n = (0, N.Zp)(),
          {
            formatMessage: l
          } = (0, K.A)(),
          o = (0, Be.s)(),
          {
            setNavigationOrigin: c
          } = (0, He.o)(),
          d = (0, Re.p)(),
          {
            enabled: h
          } = (0, Te.x)(Oe.N),
          {
            enabled: f
          } = (0, Te.x)(Ee.t),
          m = (0, Le.f)(e.assetId),
          p = (e => {
            const {
              formatMessage: t
            } = (0, K.A)();
            return v.includes(e) ? t({
              id: "generic.enable",
              defaultMessage: "Enable"
            }) : t({
              id: "generic.register",
              defaultMessage: "Register"
            })
          })(e.blockchainId),
          y = (0, Ge.Z)(e.assetId),
          g = Fe(e),
          [C, w] = (0, u.useState)(!1),
          x = e.isBuyCryptoEnabled && !m,
          b = e.isSellCryptoEnabled && !m,
          k = (0, Qe.w)(e.assetId),
          M = (0, Xe.G)(e),
          T = !x || !b,
          H = e.type === Ae.S.BRC20,
          L = () => {
            const t = v.includes(e.blockchainId) ? Ye.wL.TrustLine : Ye.wL.RegisterToken;
            n("" + r.b.SEND_CONFIRM, {
              state: {
                asset: e,
                network: a,
                amount: "0",
                type: t
              }
            })
          },
          V = !(parseFloat(y) > 0) && x;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            "data-testid": "asset-page-footer",
            className: "relative -mx-2 -mb-2 p-2 pb-0 flex",
            children: [(0, i.jsxs)("div", {
              className: "w-full flex items-center " + (T ? "justify-center space-x-6" : "justify-between px-5"),
              children: [(0, i.jsx)(We.a, {
                testid: "asset-send-btn",
                text: l({
                  id: "generic.send"
                }),
                icon: (0, i.jsx)(ze.s, {
                  colorClass: "text-utility-1-opacity-1"
                }),
                disabled: t,
                onClick: () => {
                  n(`${r.b.SEND}/${e.assetId}${H?"/inscriptions":""}`)
                }
              }), (0, i.jsx)(We.a, {
                testid: "asset-receive-btn",
                text: l({
                  id: "generic.receive"
                }),
                icon: (0, i.jsx)(Ve.Z, {
                  colorClass: "text-utility-1-opacity-1"
                }),
                onClick: () => {
                  c(`${r.b.ASSET}/${e.assetId}`), n(`${r.b.RECEIVE}/${e.assetId}`)
                },
                disabled: t
              }), t && (0, i.jsx)(We.a, {
                testid: "asset-register-btn",
                text: p,
                icon: (0, i.jsx)(_e.c, {
                  colorClass: "text-textPrimary"
                }),
                onClick: () => {
                  g ? w(!0) : L()
                }
              }), k && (0, i.jsx)(We.a, {
                testid: "asset-swap-btn",
                text: l({
                  id: "generic.swap",
                  defaultMessage: "Swap"
                }),
                icon: (0, i.jsx)(Se.f, {
                  colorClass: V ? "text-utility-1-opacity-1" : "text-textOnPrimary"
                }),
                disabled: t || d,
                theme: V ? Ke.ry.SECONDARY : Ke.ry.BRAND,
                onClick: () => {
                  n(M, {
                    state: {
                      pageViewSource: s.Un.ASSET
                    }
                  })
                }
              }), x && (0, i.jsx)(We.a, {
                testid: "asset-buy-btn",
                text: l({
                  id: "generic.buy"
                }),
                icon: (0, i.jsx)(qe, {
                  colorClass: V ? "text-textOnPrimary" : "text-utility-1-opacity-1"
                }),
                disabled: t,
                theme: V ? Ke.ry.BRAND : Ke.ry.SECONDARY,
                onClick: () => Je(null, null, function*() {
                  f ? n(r.b.BUY_NEW, {
                    state: {
                      assetId: e.assetId
                    }
                  }) : yield o(`${r.b.BUY}/${e.assetId}`)
                })
              }), b && (0, i.jsx)(We.a, {
                testid: "asset-sell-btn",
                text: l({
                  id: "generic.sell"
                }),
                icon: (0, i.jsx)(Pe.M, {
                  colorClass: "text-utility-1-opacity-1"
                }),
                disabled: t,
                onClick: () => Je(null, null, function*() {
                  h ? n(r.b.SELL_NEW, {
                    state: {
                      assetId: e.assetId
                    }
                  }) : yield o(`${r.b.SELL}/${e.assetId}`)
                })
              })]
            }), (0, i.jsx)(Ue, {
              asset: e,
              network: a,
              opened: C,
              onClose: () => {
                w(!1)
              },
              onConfirm: L
            })]
          })
        })
      };
      var tt = a(98939);
      const at = ({
        opened: e,
        onClose: t
      }) => {
        const {
          formatMessage: a
        } = (0, K.A)();
        return (0, i.jsx)(je.a, {
          opened: e,
          onClose: t,
          children: (0, i.jsxs)("div", {
            className: "flex flex-col space-y-7",
            children: [(0, i.jsx)("div", {
              className: "flex justify-center",
              children: (0, i.jsx)(Ie.I, {})
            }), (0, i.jsxs)("div", {
              className: "flex flex-col space-y-3 text-center",
              children: [(0, i.jsx)(p.E, {
                type: m.jK.HEADER,
                children: a({
                  id: "generic.inscription-modal.header"
                })
              }), (0, i.jsx)(p.E, {
                theme: m.Il.THIRD,
                weight: m.nG.NORMAL,
                children: a({
                  id: "generic.inscription-modal.disclaimer"
                })
              })]
            }), (0, i.jsxs)("div", {
              className: "flex flex-col space-y-5",
              children: [(0, i.jsx)($e.$, {
                testid: "inscriptions-modal-confirm-btn",
                onClick: t,
                children: a({
                  id: "generic.understood"
                })
              }), (0, i.jsx)("div", {
                className: "text-center",
                children: (0, i.jsx)("a", {
                  className: "text-primary body-text font-medium",
                  href: "https://support.trustwallet.com/en/support/solutions/articles/67000730959-transferring-brc20-tokens",
                  target: "_blank",
                  rel: "noopener nofollow noreferrer",
                  children: a({
                    id: "generic.learn-more"
                  })
                })
              })]
            })]
          })
        })
      };
      var it = a(55074),
        nt = a(27883),
        st = a(7707),
        rt = a(79960),
        lt = a(31902);
      const ot = ({
          asset: e
        }) => {
          const {
            formatMessage: t
          } = (0, K.A)(), [a, n] = (0, u.useState)(!1), s = (0, st.A)(e.assetId), r = function(e) {
            var t;
            return (null == (t = (0, rt.t)()[e]) ? void 0 : t.inscription) || "0"
          }(e.assetId), l = (0, lt.P)(e.assetId), o = [{
            type: "balance",
            label: e.type !== Ae.S.BRC20 ? "inscription-overview.available-balance" : "inscription-overview.non-transferable-balance",
            value: s,
            display: !0
          }, {
            type: "transferable",
            label: "inscription-overview.transferable-balance",
            value: l,
            display: e.type === Ae.S.BRC20,
            onClick: () => n(!0)
          }, {
            type: "inscription",
            label: "inscription-overview.inscription-balance",
            value: r,
            display: e.type !== Ae.S.BRC20
          }];
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: "w-full",
              children: o.map(({
                type: a,
                label: n,
                value: s,
                display: r,
                onClick: l
              }) => r ? (0, i.jsx)(it.F, {
                label: t({
                  id: n
                }),
                hideLine: !0,
                variant: nt.P.TABLE_LIST_TALL,
                labelInfoAction: l,
                children: (0, i.jsx)(D.h, {
                  currency: e.symbol,
                  amountType: z.Cu.CRYPTO,
                  value: s
                })
              }, a) : null)
            }), (0, i.jsx)(at, {
              opened: a,
              onClose: () => n(!1)
            })]
          })
        },
        ct = ["balance", "staked", "rewards", "pending", "frozen", "locked", "blocked", "claimable", "transferable", "inscription", "dust", "reserved"],
        dt = ({
          asset: e
        }) => {
          const {
            formatMessage: t
          } = (0, K.A)(), a = (0, rt.t)(), n = (0, u.useMemo)(() => {
            const t = {};
            return ct.forEach(i => {
              var n, s;
              t[i] = null != (s = null == (n = a[e.assetId]) ? void 0 : n[i]) ? s : "0"
            }), t
          }, [a[e.assetId]]);
          return (0, i.jsx)("div", {
            className: "w-full",
            children: ["balance", "staked", "pending", "locked", "blocked", "frozen", "reserved"].map(a => "0" !== n[a] ? (0, i.jsx)(it.F, {
              label: t({
                id: "staking-overview.available-balance-" + a
              }),
              hideLine: !0,
              variant: nt.P.TABLE_LIST_TALL,
              children: (0, i.jsx)(D.h, {
                currency: e.symbol,
                amountType: z.Cu.CRYPTO,
                value: n[a]
              })
            }, a) : null)
          })
        };
      var ht, ut = a(13772),
        ft = ((ht = ft || {}).DEFAULT = "DEFAULT", ht.BRAND = "BRAND", ht.ACCENT_PINK = "ACCENT_PINK", ht.ACCENT_NEON_GREEN = "ACCENT_NEON_GREEN", ht.ACCENT_YELLOW = "ACCENT_YELLOW", ht.ACCENT_BLUE = "ACCENT_BLUE", ht),
        mt = (e => (e.MEDIUM = "MEDIUM", e.MINIMAL = "MINIMAL", e))(mt || {});
      const pt = {
          [ft.DEFAULT]: "border-utility-1-opacity-5",
          [ft.BRAND]: "border-primary-default",
          [ft.ACCENT_PINK]: "border-accent-pink",
          [ft.ACCENT_NEON_GREEN]: "border-accent-neon-green",
          [ft.ACCENT_YELLOW]: "border-accent-yellow",
          [ft.ACCENT_BLUE]: "border-accent-blue"
        },
        yt = {
          [ft.DEFAULT]: "text-primary-default",
          [ft.BRAND]: "text-primary-default",
          [ft.ACCENT_PINK]: "text-accent-pink",
          [ft.ACCENT_NEON_GREEN]: "text-accent-neon-green",
          [ft.ACCENT_YELLOW]: "text-accent-yellow",
          [ft.ACCENT_BLUE]: "text-accent-blue"
        },
        gt = {
          [ft.DEFAULT]: "bg-utility-1-opacity-5",
          [ft.BRAND]: "bg-primary-default",
          [ft.ACCENT_PINK]: "bg-accent-pink",
          [ft.ACCENT_NEON_GREEN]: "bg-accent-neon-green",
          [ft.ACCENT_YELLOW]: "bg-accent-yellow",
          [ft.ACCENT_BLUE]: "bg-accent-blue"
        },
        vt = {
          [mt.MEDIUM]: "px-4 py-3",
          [mt.MINIMAL]: "p-0"
        },
        Ct = ({
          width: e,
          height: t,
          className: a
        }) => (0, i.jsxs)("svg", {
          className: a,
          fill: "none",
          width: e ?? 152,
          height: t ?? 96,
          viewBox: "0 0 152 96",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, i.jsx)("path", {
            opacity: "0.8",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.75 23.5V0H8.25V23.5H31.75V0H32.25V23.5H55.75V0H56.25V23.5H79.75V0H80.25V23.5H103.75V0H104.25V23.5H127.75V0H128.25V23.5H152V24H128.25V47.5H152V48H128.25V71.5H152V72H128.25V96H127.75V72H104.25V96H103.75V72H80.25V96H79.75V72H56.25V96H55.75V72H32.25V96H31.75V72H8.25V96H7.75V72H-16V71.5H7.75V48H-16V47.5H7.75V24H-16V23.5H7.75ZM8.25 71.5H31.75V48H8.25V71.5ZM32.25 71.5H55.75V48H32.25V71.5ZM56.25 71.5H79.75V48H56.25V71.5ZM80.25 71.5H103.75V48H80.25V71.5ZM104.25 71.5H127.75V48H104.25V71.5ZM127.75 24V47.5H104.25V24H127.75ZM103.75 24V47.5H80.25V24H103.75ZM79.75 24V47.5H56.25V24H79.75ZM55.75 24V47.5H32.25V24H55.75ZM31.75 24V47.5H8.25V24H31.75Z",
            fill: "url(#paint0_radial_4077_44372)",
            fillOpacity: "0.24"
          }), (0, i.jsx)("defs", {
            children: (0, i.jsxs)("radialGradient", {
              id: "paint0_radial_4077_44372",
              cx: "0",
              cy: "0",
              r: "1",
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(68 48) scale(84 147)",
              children: [(0, i.jsx)("stop", {
                stopColor: "currentColor"
              }), (0, i.jsx)("stop", {
                offset: "1",
                stopColor: "currentColor",
                stopOpacity: "0"
              })]
            })
          })]
        }),
        wt = ({
          size: e,
          theme: t,
          icon: a,
          children: n
        }) => (0, i.jsxs)("div", {
          className: pt[t] + " relative overflow-hidden bg-background-2 border rounded-4 w-full",
          children: [(0, i.jsx)(Ct, {
            className: yt[t] + " absolute pointer-events-none"
          }), a && (0, i.jsx)("div", {
            className: gt[t] + " absolute pointer-events-none w-8 h-6 rounded-br-4 py-1 px-2 text-on-primary",
            children: a
          }), (0, i.jsx)("div", {
            className: "" + vt[e],
            children: n
          })]
        });
      var xt = a(41327),
        bt = a(15192);

      function Nt(e) {
        var t;
        return (null == (t = (0, rt.t)()[e]) ? void 0 : t.pending) || "0"
      }

      function kt(e) {
        var t;
        return (null == (t = (0, rt.t)()[e]) ? void 0 : t.rewards) || "0"
      }
      var Mt = a(11549);
      const Tt = ({
        assetId: e,
        blockchainId: t,
        symbol: a
      }) => {
        const {
          formatMessage: n
        } = (0, K.A)(), s = (0, Be.s)(), l = (0, V.GV)(e => e.staking.stakingList), o = function(e) {
          var t;
          const a = (0, rt.t)()[e];
          return new bt.A(null != (t = a?.staked) ? t : "0").toString()
        }(e), c = Nt(e), d = kt(e), h = function(e) {
          var t, a;
          return null != (a = null == (t = (0, rt.t)()[e]) ? void 0 : t.frozen) ? a : "0"
        }(e), f = function(e) {
          var t;
          return (null == (t = (0, rt.t)()[e]) ? void 0 : t.claimable) || "0"
        }(e), y = (0, Mt.Y9)(t).toLowerCase(), g = "0" === o && "0" === c && "0" === d && "0" === h && "0" === f, v = () => ((e, t, a) => new Promise((e, t) => {
          var i = e => {
              try {
                s(a.next(e))
              } catch (e) {
                t(e)
              }
            },
            n = e => {
              try {
                s(a.throw(e))
              } catch (e) {
                t(e)
              }
            },
            s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, n);
          s((a = a.apply(null, null)).next())
        }))(0, 0, function*() {
          yield M.YW.emit(T.A.EARN, {
            action: ut.v.SET_CURRENT_WALLET
          }), yield s(`${r.b.EARN_STAKING}${e}`, {
            state: {
              navigationParams: {
                from: "asset-page-staking-teaser",
                origin: r.b.DEFAULT
              }
            }
          })
        }), C = (0, u.useMemo)(() => {
          var e;
          return (null == (e = l.find(e => e.blockchain === t)) ? void 0 : e.metadata.value) || "0"
        }, [l]);
        return (0, i.jsx)(wt, {
          size: mt.MINIMAL,
          theme: ft.DEFAULT,
          children: (0, i.jsx)(x.c, {
            onClick: v,
            children: (0, i.jsxs)("div", {
              className: "flex items-center justify-between space-x-2 px-4 py-3",
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-0.5",
                children: [(0, i.jsx)(p.E, {
                  type: m.jK.SUBHEADER_14,
                  theme: m.Il.UTILITY_1_OPACITY_1,
                  children: n({
                    id: `staking-teaser.${y}-staking`
                  })
                }), (0, i.jsx)(D.h, {
                  amountType: z.Cu.CRYPTO,
                  value: o,
                  currency: a,
                  textType: m.jK.SUBHEADER_18
                }), (0, i.jsx)(p.E, {
                  type: m.jK.CAPTION_12,
                  theme: m.Il.PRIMARY_DEFAULT,
                  children: "0" === d ? n({
                    id: "staking-teaser.description"
                  }, {
                    maxApr: (+C).toFixed(2)
                  }) : n({
                    id: "staking-teaser.claimable-rewards"
                  }, {
                    rewards: (0, i.jsx)(D.h, {
                      textType: m.jK.CAPTION_12,
                      theme: m.Il.PRIMARY_DEFAULT,
                      amountType: z.Cu.CRYPTO,
                      value: d,
                      currency: a
                    })
                  })
                })]
              }), (0, i.jsx)("div", {
                children: g ? (0, i.jsx)($e.$, {
                  onClick: v,
                  children: n({
                    id: "staking-teaser.get-started"
                  })
                }) : (0, i.jsx)(xt.v, {
                  width: 16,
                  height: 16,
                  colorClass: "text-utility-1-opacity-2"
                })
              })]
            })
          })
        })
      };
      var Ht = a(152);
      const Lt = e => {
        const {
          children: t,
          progress: a,
          size: n = 160,
          strokeWidth: s = 8,
          className: r
        } = e, l = (n - s) / 2, o = `0 0 ${n} ${n}`, c = l * Math.PI * 2, d = c - c * (a || 0) / 100;
        return (0, i.jsxs)("svg", {
          width: n,
          height: n,
          viewBox: o,
          className: "relative " + r,
          children: [(0, i.jsx)("circle", {
            className: "text-backgroundTertiary stroke-current",
            cx: n / 2,
            cy: n / 2,
            r: l,
            strokeWidth: s + "px",
            fill: "transparent"
          }), (0, i.jsx)("circle", {
            className: "text-primary -rotate-90 origin-[50%_50%] progress-ring__circle stroke-current",
            cx: n / 2,
            cy: n / 2,
            r: l,
            strokeLinecap: "round",
            strokeWidth: s + "px",
            transform: `rotate(-90 ${n/2} ${n/2})`,
            fill: "transparent",
            strokeDasharray: c,
            strokeDashoffset: d
          }), (0, i.jsx)("foreignObject", {
            x: "0",
            y: "1.5",
            width: n,
            height: n,
            className: "flex items-center justify-center",
            children: (0, i.jsx)("div", {
              className: "flex items-center justify-center w-full h-full",
              children: t
            })
          })]
        })
      };
      var Vt = a(2454),
        Pt = a(89743),
        _t = a(55418),
        St = a(99550),
        Ot = a(23350);
      const Et = ({
        isOpen: e,
        onClose: t
      }) => {
        const {
          formatMessage: a
        } = (0, K.A)();
        return (0, i.jsx)(je.a, {
          opened: e,
          onClose: t,
          placement: Ot.Gn.CENTER,
          children: (0, i.jsxs)(_t.o, {
            direction: St.R.COLUMN,
            children: [(0, i.jsx)("div", {
              children: (0, i.jsx)(Ie.I, {})
            }), (0, i.jsxs)("div", {
              className: "flex flex-col space-y-4 text-center px-4",
              children: [(0, i.jsx)(p.E, {
                type: m.jK.HEADER,
                children: a({
                  id: "tron.resources.info.title",
                  defaultMessage: "Resources"
                })
              }), (0, i.jsxs)("div", {
                className: "flex flex-col space-y-4 text-left",
                children: [(0, i.jsxs)(p.E, {
                  theme: m.Il.THIRD,
                  weight: m.nG.NORMAL,
                  children: [(0, i.jsxs)("strong", {
                    className: "text-textPrimary",
                    children: [a({
                      id: "tron.resources.bandwidth",
                      defaultMessage: "Bandwidth"
                    }), ":", " "]
                  }), a({
                    id: "tron.resources.info.bandwidth",
                    defaultMessage: "Used to discount costs for transfers. If you don't have enough Bandwidth to pay the full fee, it is paid in TRX. The meter on the asset page represents the sum of your daily free Bandwidth + any additional Bandwidth you earn from TRX you have staked. The more TRX you stake, the more daily Bandwidth you get. The meter refills every 24h.",
                    description: "Description of Bandwidth resource on Tron network"
                  })]
                }), (0, i.jsxs)(p.E, {
                  theme: m.Il.THIRD,
                  weight: m.nG.NORMAL,
                  children: [(0, i.jsxs)("strong", {
                    className: "text-textPrimary",
                    children: [a({
                      id: "tron.resources.energy",
                      defaultMessage: "Energy"
                    }), ":", " "]
                  }), a({
                    id: "tron.resources.info.energy",
                    defaultMessage: "Used to discount the cost of smart contract transactions. If you don't have enough Energy to pay the full fee, the remainder is paid in TRX. The meter on the asset page shows your daily Energy earned from any TRX you have staked, and it refills every 24 hours. The more TRX you stake, the more daily Energy you get. If your transaction fails, the Energy is burned and not refunded, and failed transactions consume more Energy than successful ones.",
                    description: "Description of Energy resource on Tron network"
                  })]
                })]
              }), (0, i.jsx)("div", {
                className: "flex flex-col py-4",
                children: (0, i.jsx)($e.$, {
                  fullWidth: !0,
                  onClick: t,
                  children: a({
                    id: "generic.got-it",
                    defaultMessage: "Got it"
                  })
                })
              })]
            })]
          })
        })
      };
      var Bt = a(29758);
      const Rt = ({
          asset: e
        }) => {
          const {
            formatMessage: t
          } = (0, K.A)(), [a, n] = (0, u.useState)(!1), [s, r] = (0, u.useState)(0), [l, o] = (0, u.useState)(0), [c, d] = (0, u.useState)(0), [h, f] = (0, u.useState)(0), y = function(e) {
            var t, a, i, n, s, r, l, o;
            const c = (0, rt.t)();
            return {
              energy: {
                amount: (null == (a = null == (t = c[e]) ? void 0 : t.energy) ? void 0 : a.amount) || "0",
                limit: (null == (n = null == (i = c[e]) ? void 0 : i.energy) ? void 0 : n.limit) || "0"
              },
              bandwidth: {
                amount: (null == (r = null == (s = c[e]) ? void 0 : s.bandwidth) ? void 0 : r.amount) || "0",
                limit: (null == (o = null == (l = c[e]) ? void 0 : l.bandwidth) ? void 0 : o.limit) || "0"
              }
            }
          }(e.assetId);
          return (0, u.useEffect)(() => {
            var e, t, a, i;
            const n = null != (e = +y.bandwidth.limit) ? e : 0,
              c = null != (t = +y.energy.limit) ? t : 0;
            o(null != (a = +y.bandwidth.amount) ? a : 0), r(null != (i = +y.energy.amount) ? i : 0), d(s / c * 100), f(l / n * 100)
          }, [e, y]), (0, i.jsxs)("div", {
            className: "flex items-center justify-between space-x-4",
            children: [(0, i.jsx)(Ht.Z, {
              children: (0, i.jsxs)("div", {
                className: "flex justify-between px-1",
                children: [(0, i.jsxs)("div", {
                  className: "flex flex-col space-y-0.5",
                  children: [(0, i.jsxs)("div", {
                    className: "flex space-x-0.5",
                    children: [(0, i.jsx)(p.E, {
                      type: m.jK.CAPTION,
                      theme: m.Il.SECONDARY,
                      children: t({
                        id: "tron.resources.energy",
                        defaultMessage: "Energy"
                      })
                    }), (0, i.jsx)(x.c, {
                      onClick: () => n(!0),
                      children: (0, i.jsx)(Vt.m, {
                        height: 16,
                        width: 16,
                        colorClass: "text-iconNormal"
                      })
                    })]
                  }), (0, i.jsx)(D.h, {
                    amountType: z.Cu.CRYPTO,
                    value: s,
                    textType: m.jK.TITLE,
                    weight: m.nG.SEMIBOLD
                  })]
                }), (0, i.jsx)("div", {
                  className: "flex items-center",
                  children: (0, i.jsx)(Lt, {
                    progress: c,
                    size: 30,
                    strokeWidth: 2.5,
                    children: (0, i.jsx)(Pt.Z, {
                      height: 15,
                      width: 15,
                      colorClass: "text-iconNormal"
                    })
                  })
                })]
              })
            }), (0, i.jsx)(Ht.Z, {
              children: (0, i.jsxs)("div", {
                className: "flex justify-between px-1",
                children: [(0, i.jsxs)("div", {
                  className: "flex flex-col space-y-0.5",
                  children: [(0, i.jsxs)("div", {
                    className: "flex space-x-0.5",
                    children: [(0, i.jsx)(p.E, {
                      type: m.jK.CAPTION,
                      theme: m.Il.SECONDARY,
                      children: t({
                        id: "tron.resources.bandwidth",
                        defaultMessage: "Bandwidth"
                      })
                    }), (0, i.jsx)(x.c, {
                      onClick: () => n(!0),
                      children: (0, i.jsx)(Vt.m, {
                        height: 16,
                        width: 16,
                        colorClass: "text-iconNormal"
                      })
                    })]
                  }), (0, i.jsx)(D.h, {
                    amountType: z.Cu.CRYPTO,
                    value: l,
                    textType: m.jK.TITLE,
                    weight: m.nG.SEMIBOLD
                  })]
                }), (0, i.jsx)("div", {
                  className: "flex items-center",
                  children: (0, i.jsx)(Lt, {
                    progress: h,
                    size: 30,
                    strokeWidth: 2.5,
                    children: (0, i.jsx)(Bt.U, {
                      height: 15,
                      width: 15,
                      colorClass: "text-iconNormal"
                    })
                  })
                })]
              })
            }), (0, i.jsx)(Et, {
              isOpen: a,
              onClose: () => n(!1)
            })]
          })
        },
        At = ["c20000714_t0x4B0F1812e5Df2A09796481Ff14017e6005508003", "c20000714_t0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B"];
      var Ft = a(33653),
        It = a(29251),
        $t = a(65504),
        jt = a(4504);

      function Dt(e) {
        const t = (0, rt.t)();
        return (0, jt.E)(t[e])
      }
      var Zt = a(92588),
        Ut = a(48346),
        Yt = a(68632),
        Wt = a(15351);
      const zt = ({
        asset: e,
        blockchain: t
      }) => {
        var a, n;
        const {
          formatMessage: s
        } = (0, K.A)(), r = (0, O.A)(), l = function(e) {
          var t, a;
          const i = (0, rt.t)();
          return new bt.A(null != (a = null == (t = i[e]) ? void 0 : t.staked) ? a : "0").toString()
        }(e.assetId), o = kt(e.assetId), c = Nt(e.assetId), d = function(e) {
          var t;
          return (null == (t = (0, rt.t)()[e]) ? void 0 : t.reserved) || "0"
        }(e.assetId), h = Dt(e.assetId), f = function(e) {
          var t, a;
          const i = Dt(null != (t = e?.assetId) ? t : ""),
            n = (0, Zt.q)(e);
          return new bt.A(i).mul(null != (a = n?.price) ? a : "0").toString()
        }(e), {
          currency: g,
          baseCurrencyType: C
        } = (0, P.P)(), w = (0, Zt.q)(e), [x, b] = (0, u.useState)(!1), N = e.type === Ae.S.BRC20, k = Ft.bm.includes(e.blockchainId) && !e.address && r.type !== It.S.HARDWARE, M = At.includes(e.assetId), T = v.includes(e.blockchainId) && !e.address, H = k && new bt.A(l).add(o).add(c).gt(0) || M || t.id === y.J.tron || T && new bt.A(d).gt(0), L = N || e.blockchainId === y.J.bitcoin, V = t.id === y.J.tron;
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-2 w-full",
          children: [(0, i.jsx)(p.E, {
            type: m.jK.SUBHEADER_16,
            lineHeight: m.jK.SUBHEADER_20,
            children: s({
              id: "asset.holdings.header",
              defaultMessage: "My Balance"
            })
          }), (0, i.jsx)(Ht.Z, {
            children: (0, i.jsxs)("div", {
              className: "flex gap-3 py-2",
              children: [(0, i.jsx)($t.q, {
                name: e.symbol,
                network: e.address ? t : void 0,
                src: e.iconUrl,
                size: Yt.Y.LARGE
              }), (0, i.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [(0, i.jsxs)("div", {
                  className: "flex flex-col",
                  children: [(0, i.jsx)(p.E, {
                    type: m.jK.HEADER_16,
                    lineHeight: m.jK.HEADER_20,
                    children: e.name
                  }), (0, i.jsx)(D.h, {
                    value: h,
                    currency: e.symbol,
                    amountType: z.Cu.CRYPTO,
                    textType: m.jK.BODY_14,
                    lineHeight: m.jK.BODY_16
                  })]
                }), (0, i.jsxs)("div", {
                  className: "flex flex-col text-right",
                  children: [(0, i.jsx)(D.h, {
                    value: f,
                    currency: g,
                    amountType: C,
                    textType: m.jK.HEADER_16,
                    lineHeight: m.jK.HEADER_20
                  }), (0, i.jsx)(Ut.S, {
                    isLoading: !w,
                    widthClass: "w-10",
                    heightClass: "h-4",
                    children: (0, i.jsx)(D.h, {
                      value: null != (a = w?.change_24h) ? a : 0,
                      amountType: z.Cu.PERCENT,
                      textType: m.jK.BODY_14,
                      lineHeight: m.jK.BODY_16,
                      theme: 0 > (null != (n = w?.change_24h) ? n : 0) ? m.Il.ERROR_1_DEFAULT : m.Il.SUCCESS_1_DEFAULT
                    })
                  })]
                })]
              })]
            })
          }), k && (0, i.jsx)(Tt, {
            assetId: e.assetId,
            blockchainId: e.blockchainId,
            symbol: e.symbol
          }), V && (0, i.jsx)(Rt, {
            asset: e
          }), x && (0, i.jsxs)("div", {
            className: "w-full flex flex-col mt-2",
            children: [L && (0, i.jsx)(ot, {
              asset: e
            }), H && (0, i.jsx)(dt, {
              asset: e
            })]
          }), (H || L) && (0, i.jsx)("div", {
            className: "flex justify-center py-2",
            children: (0, i.jsxs)($e.$, {
              theme: Ke.ry.SECONDARY,
              size: Ke.Vp.SMALL,
              fullWidth: !1,
              onClick: () => b(!x),
              className: "text-utility-1-default gap-1",
              children: [s({
                id: `asset.holdings.${x?"collapse":"show"}-all-balances`,
                defaultMessage: x ? "Hide balances" : "Show balances"
              }), (0, i.jsx)(Wt.D, {
                width: 16,
                height: 16,
                colorClass: "transition-transform " + (x ? "rotate-180" : "rotate-0")
              })]
            })
          })]
        })
      };
      var qt = a(2543);
      const Gt = ({
          width: e,
          height: t,
          colorClass: a
        }) => (0, i.jsxs)("svg", {
          className: a,
          fill: "none",
          width: e ?? 24,
          height: t ?? 24,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, i.jsx)("path", {
            d: "M12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 7.73 7.73 4.25 12 4.25ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z",
            fill: "currentColor"
          }), (0, i.jsx)("path", {
            d: "M10.9099 16.06C10.6599 16.06 10.4199 15.97 10.2299 15.79L7.38992 13.17C6.97992 12.8 6.95992 12.16 7.32992 11.76C7.69992 11.35 8.33992 11.33 8.73992 11.7L10.7999 13.6L15.1499 8.30999C15.4999 7.87999 16.1299 7.81999 16.5599 8.16999C16.9899 8.51999 17.0499 9.14999 16.6999 9.57999L11.6799 15.69C11.5099 15.9 11.2499 16.03 10.9799 16.05C10.9599 16.05 10.9299 16.05 10.9099 16.05V16.06Z",
            fill: "currentColor"
          })]
        }),
        Kt = ({
          width: e,
          height: t,
          colorClass: a
        }) => (0, i.jsx)("svg", {
          className: a,
          fill: "none",
          width: e ?? 24,
          height: t ?? 24,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.3257 2.0225C9.19756 2.16653 7.23788 2.95757 5.55576 4.35156C5.28041 4.57972 4.57832 5.28181 4.35015 5.55717C3.07483 7.09609 2.30686 8.85847 2.07335 10.7821C1.76132 13.3525 2.45279 15.9465 3.99592 17.9945C4.30698 18.4073 4.51731 18.6471 4.93464 19.0644C5.35198 19.4817 5.59171 19.6921 6.00453 20.0031C7.89012 21.4239 10.2718 22.134 12.6313 21.9791C14.7906 21.8373 16.7488 21.052 18.4419 19.6489C18.7172 19.4207 19.4193 18.7186 19.6475 18.4433C20.3596 17.584 20.8799 16.7177 21.2773 15.7293C22.579 12.4926 22.0919 8.78004 20.0017 6.00594C19.6907 5.59311 19.4803 5.35338 19.063 4.93605C18.6457 4.51871 18.4059 4.30839 17.9931 3.99733C16.099 2.57017 13.706 1.86139 11.3257 2.0225ZM11.5233 4.1588C9.89854 4.2565 8.36286 4.84984 7.06882 5.87992C6.79877 6.09488 6.09347 6.80017 5.87851 7.07023C4.96875 8.21314 4.39524 9.55372 4.20964 10.9713C4.00394 12.5423 4.27243 14.1172 4.98988 15.5485C5.36922 16.3052 5.80628 16.9032 6.45117 17.5476C7.3608 18.4567 8.31359 19.0492 9.50922 19.4493C11.5089 20.1184 13.6474 19.9613 15.5549 19.0053C16.3013 18.6312 16.9034 18.1904 17.5462 17.5476C18.4548 16.6391 19.0477 15.6857 19.4479 14.4898C20.117 12.4902 19.9599 10.3517 19.0039 8.44411C18.6299 7.69799 18.1894 7.09617 17.5462 6.45257C16.6394 5.54513 15.6846 4.95148 14.4884 4.55119C13.7851 4.31585 13.2014 4.20447 12.4262 4.15771C12.039 4.13435 11.9276 4.13448 11.5233 4.1588ZM11.7193 6.84648C11.3607 6.94011 11.0575 7.24702 10.9622 7.61281C10.9136 7.79929 10.9144 12.4217 10.963 12.6084C11.0419 12.9112 11.2775 13.1958 11.5501 13.3177C11.7609 13.412 12.0551 13.4378 12.2688 13.3809C12.6319 13.2842 12.9397 12.9728 13.0354 12.6051C13.0833 12.4214 13.0833 7.79657 13.0354 7.61281C12.989 7.43461 12.9129 7.29765 12.7816 7.15641C12.5724 6.93124 12.2981 6.80977 11.9988 6.80977C11.9224 6.80977 11.7966 6.82629 11.7193 6.84648ZM11.7714 14.3814C11.4564 14.4409 11.2596 14.5394 11.0376 14.7489C10.7471 15.0229 10.6115 15.3129 10.5943 15.6972C10.5819 15.973 10.6213 16.1805 10.7262 16.3918C11.1336 17.2123 12.1683 17.4488 12.8802 16.8841C13.449 16.4329 13.5804 15.5902 13.1749 14.9932C13.0657 14.8322 12.8432 14.6275 12.676 14.534C12.4225 14.3922 12.0483 14.3291 11.7714 14.3814Z",
            fill: "currentColor"
          })
        }),
        Qt = ({
          width: e,
          height: t,
          colorClass: a
        }) => (0, i.jsxs)("svg", {
          className: a,
          fill: "none",
          width: e ?? 24,
          height: t ?? 24,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, i.jsx)("path", {
            d: "M13.41 12L16.5 8.91002C16.89 8.52002 16.89 7.89002 16.5 7.50002C16.11 7.11002 15.48 7.11002 15.09 7.50002L12 10.59L8.91002 7.50002C8.52002 7.11002 7.89002 7.11002 7.50002 7.50002C7.11002 7.89002 7.11002 8.52002 7.50002 8.91002L10.59 12L7.50002 15.09C7.11002 15.48 7.11002 16.11 7.50002 16.5C7.70002 16.7 7.95002 16.79 8.21002 16.79C8.47002 16.79 8.72002 16.69 8.92002 16.5L12.01 13.41L15.1 16.5C15.3 16.7 15.55 16.79 15.81 16.79C16.07 16.79 16.32 16.69 16.52 16.5C16.91 16.11 16.91 15.48 16.52 15.09L13.43 12H13.41Z",
            fill: "currentColor"
          }), (0, i.jsx)("path", {
            d: "M12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 7.73 7.73 4.25 12 4.25ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z",
            fill: "currentColor"
          })]
        }),
        Xt = ({
          security: e,
          provider: t,
          isHoneypot: a,
          isScanned: n
        }) => {
          const {
            formatMessage: s
          } = (0, K.A)(), [r, l] = (0, u.useState)(!1), o = {
            warning: (0, i.jsx)(Kt, {
              width: 16,
              height: 16,
              colorClass: "text-textBuy"
            }),
            risk: (0, i.jsx)(Qt, {
              width: 16,
              height: 16,
              colorClass: "text-textBuy"
            }),
            success: (0, i.jsx)(Gt, {
              width: 16,
              height: 16,
              colorClass: "text-textBuy"
            })
          }, c = {
            warning: m.Il.WARNING,
            risk: m.Il.ERROR,
            success: m.Il.SUCCESS
          }, d = {
            warning: "warning-alert",
            risk: "error-alert",
            success: "p-3"
          }, h = "number" == typeof e?.buy_tax, f = (0, u.useMemo)(() => n ? e?.num_risks > 0 ? s({
            id: "asset.about.security-header-risk" + (1 === e.num_risks ? "" : "s"),
            defaultMessage: `{numberOfRisks} Risk${1===e.num_risks?"":"s"} identified`
          }, {
            numberOfRisks: e.num_risks
          }) : e?.num_warnings > 0 ? s({
            id: "asset.about.security-header-warning" + (1 === e.num_warnings ? "" : "s"),
            defaultMessage: `{numberOfWarnings} Warning${1===e.num_warnings?"":"s"} identified`
          }, {
            numberOfWarnings: e.num_warnings
          }) : s({
            id: "asset.about.security-header",
            defaultMessage: "No significant risks found"
          }) : s({
            id: "asset.about.security-header-not-scanned" + (a ? "-honeypot" : "-contract"),
            defaultMessage: `Not scanned. Unknown ${a?"honeypot":"contract"} risk`
          }), [n, e]), y = (0, u.useMemo)(() => !n || e?.num_risks > 0 ? "risk" : e?.num_warnings > 0 ? "warning" : "success", [n, e]);
          return (0, i.jsxs)(Ht.Z, {
            noPadding: !0,
            children: [(0, i.jsxs)("div", {
              className: "flex justify-between items-center px-2 py-1 " + (n ? "cursor-pointer" : ""),
              onClick: () => l(!r),
              children: [(0, i.jsxs)("div", {
                className: "flex items-center gap-2 py-4 px-2",
                children: [o[y], (0, i.jsx)(p.E, {
                  type: m.jK.BODY_12,
                  theme: c[y],
                  children: f
                })]
              }), n && (0, i.jsx)(Wt.D, {
                width: 16,
                height: 16,
                colorClass: "transition-transform mr-2 " + (r ? "rotate-180" : "rotate-0")
              })]
            }), n && r && (0, i.jsxs)("div", {
              className: "flex flex-col gap-6 py-4 px-2",
              children: [h && (0, i.jsxs)("div", {
                className: "flex-flex-col gap-2 mx-3",
                children: [(0, i.jsxs)("div", {
                  className: "flex justify-between",
                  children: [(0, i.jsx)(p.E, {
                    type: m.jK.BODY_12,
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    children: s({
                      id: "asset.about.buy-tax",
                      defaultMessage: "Buy tax:"
                    })
                  }), (0, i.jsx)(D.h, {
                    value: e.buy_tax,
                    amountType: z.Cu.PERCENT,
                    theme: m.Il.UTILITY_1_OPACITY_1
                  })]
                }), (0, i.jsxs)("div", {
                  className: "flex justify-between",
                  children: [(0, i.jsx)(p.E, {
                    type: m.jK.BODY_12,
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    children: s({
                      id: "asset.about.sell-tax",
                      defaultMessage: "Sell tax:"
                    })
                  }), (0, i.jsx)(D.h, {
                    value: e.sell_tax,
                    amountType: z.Cu.PERCENT,
                    theme: m.Il.UTILITY_1_OPACITY_1
                  })]
                })]
              }), e?.items.filter(e => !!e.description).map(e => (0, i.jsxs)("div", {
                className: "flex flex-col gap-2 " + d[e.type],
                children: [(0, i.jsxs)("div", {
                  className: "flex w-full gap-2 items-center",
                  children: [o[e.type], (0, i.jsx)(p.E, {
                    type: m.jK.BODY_12,
                    theme: c[e.type],
                    children: (0, qt.capitalize)(e.type)
                  })]
                }, e.code), (0, i.jsx)(p.E, {
                  type: m.jK.BODY_12,
                  theme: c[e.type],
                  children: e.description
                })]
              })), t && (0, i.jsx)("div", {
                className: "mx-3",
                children: (0, i.jsx)(p.E, {
                  type: m.jK.BODY_12,
                  theme: m.Il.UTILITY_1_OPACITY_1,
                  children: s({
                    id: "asset.about.scanned-by",
                    defaultMessage: "Scanned by {provider}"
                  }, {
                    provider: t
                  })
                })
              })]
            })]
          })
        };
      var Jt = a(40053),
        ea = a(19376),
        ta = a(73241);
      const aa = ({
        isScanned: e
      }) => {
        const {
          formatMessage: t
        } = (0, K.A)();
        return (0, i.jsx)(ea.v, {
          theme: e ? ta.x.SUCCESS : ta.x.ERROR,
          size: ta.V.TINY,
          children: (0, i.jsx)(p.E, {
            type: m.jK.CAPTION_10,
            weight: m.nG.MEDIUM,
            theme: e ? m.Il.SUCCESS : m.Il.ERROR,
            children: t({
              id: "asset.about.contract-security-tag." + (e ? "scanned" : "not-scanned"),
              defaultMessage: e ? "Scanned" : "Not scanned"
            })
          })
        })
      };
      var ia = a(26113);
      const na = ({
        asset: e,
        blockchain: t,
        coinStatus: a
      }) => {
        var n, s, r, l, o, c, d, h, f, y;
        const {
          formatMessage: g
        } = (0, K.A)(), [v, C] = (e => {
          const {
            isPending: t,
            data: a
          } = (0, Z.I)({
            queryKey: ["market-info", e],
            queryFn: () => M.YW.emit(U.A.FETCH_MARKET_INFO, e),
            staleTime: 36e5,
            refetchOnWindowFocus: !1
          });
          return [t, a]
        })(e.assetId), [w, x] = (0, u.useState)(!1), b = (0, u.useMemo)(() => {
          const e = [...C?.info.links || []];
          return C?.info.research && e.unshift({
            name: "Research",
            url: C?.info.research
          }), C?.info.explorer && e.unshift({
            name: "Explorer",
            url: C?.info.explorer
          }), C?.info.website && e.unshift({
            name: "Official website",
            url: C?.info.website
          }), e
        }, [null == (n = C?.info.links) ? void 0 : n.length]);
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-3 w-full",
          children: [(0, i.jsx)($.E, {
            isLoading: v,
            className: "w-12 h-4",
            children: (0, i.jsx)(p.E, {
              type: m.jK.SUBHEADER_16,
              lineHeight: m.jK.SUBHEADER_20,
              children: g({
                id: "asset.about.header",
                defaultMessage: "About {symbol}"
              }, {
                symbol: e.symbol
              })
            })
          }), (0, i.jsx)($.E, {
            isLoading: v,
            className: "w-full h-4 my-1",
            children: C?.info.description && (0, i.jsx)(p.E, {
              type: m.jK.BODY_14,
              lineHeight: m.jK.BODY_16,
              children: (0, qt.truncate)(C.info.description, {
                length: w ? null != (r = null == (s = C.info.description) ? void 0 : s.length) ? r : 0 : 220
              })
            })
          }), (null != (o = null == (l = C?.info.description) ? void 0 : l.length) ? o : 0) > 220 && (0, i.jsx)($e.$, {
            onClick: () => x(!w),
            size: Ke.Vp.SMALL,
            theme: Ke.ry.BRAND_TRANSPARENT,
            noPadding: !0,
            fullWidth: !1,
            className: "py-2",
            children: g({
              id: "generic.view-" + (w ? "less" : "more")
            })
          }), a?.security_info && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
              className: "flex gap-2 items-center",
              children: [(0, i.jsx)(p.E, {
                type: m.jK.SUBHEADER_16,
                lineHeight: m.jK.SUBHEADER_20,
                children: g({
                  id: "asset.about.contract-security",
                  defaultMessage: "Contract security"
                })
              }), (0, i.jsx)(aa, {
                isScanned: a.security_info.is_scanned
              })]
            }), (0, i.jsx)(Xt, {
              security: a.security_info.contract_security,
              provider: a.security_info.provider,
              isScanned: a.security_info.is_scanned
            }), (0, i.jsxs)("div", {
              className: "flex gap-2 items-center",
              children: [(0, i.jsx)(p.E, {
                type: m.jK.SUBHEADER_16,
                lineHeight: m.jK.SUBHEADER_20,
                children: g({
                  id: "asset.about.honeypot-risk",
                  defaultMessage: "Honeypot risk"
                })
              }), (0, i.jsx)(aa, {
                isScanned: a.security_info.is_scanned
              })]
            }), (0, i.jsx)(Xt, {
              security: a.security_info.honeypot_risk,
              provider: a.security_info.provider,
              isScanned: a.security_info.is_scanned,
              isHoneypot: !0
            })]
          }), (0, i.jsx)(p.E, {
            type: m.jK.SUBHEADER_16,
            lineHeight: m.jK.SUBHEADER_20,
            children: g({
              id: "asset.about.stats",
              defaultMessage: "Stats"
            })
          }), (0, i.jsx)(Ht.Z, {
            noPadding: !0,
            children: (0, i.jsxs)("div", {
              className: "py-2",
              children: [(0, i.jsx)(it.F, {
                variant: nt.P.TABLE_LIST_TALL,
                label: g({
                  id: "asset.about.market-cap",
                  defaultMessage: "Market Cap"
                }),
                hideLine: !0,
                children: (0, i.jsx)($.E, {
                  isLoading: v,
                  className: "w-20 h-3",
                  children: (0, i.jsx)(D.h, {
                    textType: m.jK.SUBHEADER_14,
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    lineHeight: m.jK.SUBHEADER_18,
                    amountType: z.Cu.FIAT,
                    currency: "USD",
                    value: null != (c = C?.marketCap) ? c : 0
                  })
                })
              }), (0, i.jsx)(it.F, {
                variant: nt.P.TABLE_LIST_TALL,
                label: g({
                  id: "asset.about.circulating-supply",
                  defaultMessage: "Circulating Supply"
                }),
                hideLine: !0,
                children: (0, i.jsx)($.E, {
                  isLoading: v,
                  className: "w-20 h-3",
                  children: (0, i.jsx)(D.h, {
                    textType: m.jK.SUBHEADER_14,
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    lineHeight: m.jK.SUBHEADER_18,
                    amountType: z.Cu.CRYPTO,
                    maxSignificantDecimals: 3,
                    currency: e.symbol,
                    value: null != (d = C?.circulatingSupply) ? d : 0
                  })
                })
              }), (0, i.jsx)(it.F, {
                variant: nt.P.TABLE_LIST_TALL,
                label: g({
                  id: "asset.about.total-supply",
                  defaultMessage: "Total Supply"
                }),
                hideLine: !0,
                children: (0, i.jsx)($.E, {
                  isLoading: v,
                  className: "w-20 h-3",
                  children: (0, i.jsx)(D.h, {
                    textType: m.jK.SUBHEADER_14,
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    lineHeight: m.jK.SUBHEADER_18,
                    maxSignificantDecimals: 3,
                    currency: e.symbol,
                    amountType: z.Cu.CRYPTO,
                    value: null != (h = C?.totalSupply) ? h : 0
                  })
                })
              }), (0, i.jsx)(it.F, {
                variant: nt.P.TABLE_LIST_TALL,
                label: g({
                  id: "asset.about.volume-24h",
                  defaultMessage: "Volume (24h)"
                }),
                hideLine: !0,
                children: (0, i.jsx)($.E, {
                  isLoading: v,
                  className: "w-20 h-3",
                  children: (0, i.jsx)(D.h, {
                    textType: m.jK.SUBHEADER_14,
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    lineHeight: m.jK.SUBHEADER_18,
                    amountType: z.Cu.CRYPTO,
                    currency: e.symbol,
                    maxSignificantDecimals: 3,
                    value: null != (f = C?.volume24) ? f : 0
                  })
                })
              })]
            })
          }), e.address && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.E, {
              type: m.jK.SUBHEADER_16,
              lineHeight: m.jK.SUBHEADER_20,
              children: g({
                id: "asset.about.contract-address",
                defaultMessage: "Contract Address"
              })
            }), (0, i.jsx)(Ht.Z, {
              children: (0, i.jsxs)("div", {
                className: "flex py-2 justify-between",
                children: [(0, i.jsxs)("div", {
                  className: "flex gap-2",
                  children: [(0, i.jsx)($t.q, {
                    name: t.symbol,
                    src: t.iconUrl,
                    size: Yt.Y.XSMALL
                  }), (0, i.jsx)(p.E, {
                    type: m.jK.SUBHEADER_14,
                    lineHeight: m.jK.SUBHEADER_18,
                    children: null != (y = t.displayName) ? y : t.name
                  })]
                }), (0, i.jsx)("a", {
                  href: `${t.explorer.url}/address/${e.address}`,
                  className: "text-primary",
                  target: "_blank",
                  rel: "noopener nofollow noreferrer",
                  children: (0, i.jsx)(p.E, {
                    type: m.jK.SUBHEADER_14,
                    theme: m.Il.PRIMARY_DEFAULT,
                    lineHeight: m.jK.SUBHEADER_18,
                    children: (0, Jt.p)({
                      value: e.address,
                      maxCharsPerSide: 10
                    })
                  })
                })]
              })
            })]
          }), (0, i.jsx)(p.E, {
            type: m.jK.SUBHEADER_16,
            lineHeight: m.jK.SUBHEADER_20,
            children: g({
              id: "asset.about.links",
              defaultMessage: "Links"
            })
          }), (0, i.jsx)($.E, {
            isLoading: v,
            className: "w-full",
            children: (0, i.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: b?.map((e, t) => (0, i.jsx)("a", {
                href: e.url,
                target: "_blank",
                rel: "noopener nofollow noreferrer",
                children: (0, i.jsx)($e.$, {
                  theme: Ke.ry.SUBTLE,
                  size: Ke.Vp.SMALL,
                  onClick: ia.Z,
                  className: "flex-shrink-0",
                  fullWidth: !1,
                  children: (0, qt.capitalize)(e.name)
                }, "asset-about-link-" + t)
              }))
            })
          })]
        })
      };
      var sa = a(40980),
        ra = a(42201),
        la = a(23384),
        oa = a(60799),
        ca = a(23207),
        da = a(42564),
        ha = a(2472),
        ua = (e, t, a) => new Promise((i, n) => {
          var s = e => {
              try {
                l(a.next(e))
              } catch (e) {
                n(e)
              }
            },
            r = e => {
              try {
                l(a.throw(e))
              } catch (e) {
                n(e)
              }
            },
            l = e => e.done ? i(e.value) : Promise.resolve(e.value).then(s, r);
          l((a = a.apply(e, t)).next())
        });
      const fa = ({
        asset: e
      }) => {
        const {
          formatMessage: t
        } = (0, K.A)(), {
          trackAnalytics: a
        } = (0, ca.s)(), [n, r] = (0, u.useState)(""), [l, o] = (0, u.useState)(), [c, d] = (0, u.useState)(), [h, f] = (0, u.useState)(), [y, g] = (0, u.useState)(), [v, C] = (0, u.useState)(!1), w = (0, O.A)(), x = (0, ke.F7)(e.assetId), b = (0, u.useRef)(0), N = (0, u.useRef)(null), k = (0, u.useMemo)(() => {
          if (!w || !x?.address) return null;
          let t = n ? parseFloat(n) : void 0;
          return 1 === b.current && t === h && (t = "no-amount"), {
            address: x.address,
            assetId: e.assetId,
            fiatAmount: t
          }
        }, [w, x?.address, e.assetId, n]), {
          data: T,
          isLoading: H,
          refetch: L
        } = (e => {
          var t;
          const {
            data: a,
            isFetching: i,
            error: n,
            refetch: s
          } = (0, Z.I)({
            queryKey: ["buy-crypto-widget-quote", e?.assetId, null != (t = e?.fiatAmount) ? t : "no-amount"],
            queryFn: () => M.YW.emit(la.A.BUY_CRYPTO_WIDGET_QUOTE, e),
            enabled: !!e?.address && !!e?.assetId,
            retry: 2,
            refetchOnWindowFocus: !1,
            staleTime: 3e4,
            gcTime: 3e5
          });
          return {
            data: a,
            isLoading: i && !a,
            error: n,
            refetch: s
          }
        })(k), V = T?.currencyConfig, P = T?.quote;
        (0, u.useEffect)(() => {
          V?.defaultAmount && 0 === b.current && (r(V.defaultAmount.toString()), d(V.fiatCurrency), f(V.defaultAmount), g(V.suggestedAmounts), b.current++)
        }, [V?.defaultAmount]), (0, u.useEffect)(() => () => {
          N.current && clearTimeout(N.current)
        }, []);
        const _ = e => {
            r(e), N.current && (clearTimeout(N.current), N.current = null);
            const {
              isValid: a,
              error: i
            } = (e => {
              const a = (e => {
                if (!V) return;
                const a = parseFloat("" === e ? "0" : e);
                if (!Number.isNaN(a)) {
                  if (a < V.minAmount) return t({
                    id: "validation.error-min-amount"
                  }, {
                    min: V.minAmount
                  });
                  if (a > V.maxAmount) return t({
                    id: "validation.error-max-amount"
                  }, {
                    max: V.maxAmount
                  })
                }
              })(e);
              return {
                isValid: !a,
                error: a
              }
            })(e);
            o(i), a && (N.current = setTimeout(() => ua(null, null, function*() {
              b.current++, yield L()
            }), 300))
          },
          S = () => ua(null, null, function*() {
            var t;
            if (P) {
              C(!0);
              try {
                const {
                  url: i,
                  addressField: n,
                  address: r,
                  error: l
                } = yield M.YW.emit(la.A.BUY_CRYPTO, {
                  quote: {
                    id: P.id,
                    digitalMoney: P.digitalMoney,
                    fiatMoney: P.fiatMoney,
                    provider: P.provider,
                    paymentMethod: P.paymentMethod,
                    isRecommended: P.isRecommended,
                    badges: P.badges
                  },
                  assetId: e.assetId
                });
                if (l?.message) return void oa.Ay.error(l.message);
                const o = new URL(i);
                n && o.searchParams.set(n, r);
                for (const [e, t] of o.searchParams) "address" === e && o.searchParams.set(e, (0, da.d)(t));
                window.open(o, "_blank"), a({
                  event: s.Un.FIAT_ON_RAMPS_PROVIDER,
                  props: {
                    pageViewResourceType: s.Rb.EXTERNAL,
                    blockchainId: e.blockchainId,
                    assetCurrency: P.digitalMoney.currency,
                    assetAmount: P.digitalMoney.amount || 0,
                    assetFiatCurrency: P.fiatMoney.currency,
                    assetFiatAmount: (null == (t = P.fiatMoney) ? void 0 : t.amount) || 0,
                    providerName: P.provider.name || "Unknown",
                    paymentMethod: P.paymentMethod.paymentMethod,
                    subPaymentMethod: P.paymentMethod.providerName || void 0
                  }
                })
              } catch (e) {
                oa.Ay.error(e.message)
              } finally {
                C(!1)
              }
            }
          });
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-3 w-full",
          children: [(0, i.jsx)(p.E, {
            type: m.jK.SUBHEADER_14,
            weight: m.nG.SEMIBOLD,
            theme: m.Il.UTILITY_1_OPACITY_1,
            lineHeight: m.jK.SUBHEADER_18,
            children: t({
              id: "asset.buy-now.header",
              defaultMessage: "Buy Now"
            })
          }), (0, i.jsx)(Ht.Z, {
            children: (0, i.jsxs)("div", {
              className: "flex flex-col gap-2 py-2",
              children: [(0, i.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [(0, i.jsxs)("div", {
                  className: "w-[200px]",
                  children: [(0, i.jsx)(Ut.S, {
                    isLoading: !n,
                    widthClass: "w-[100px]",
                    heightClass: "h-8",
                    children: (0, i.jsx)(sa.R, {
                      placeholder: "0",
                      value: n,
                      disabled: v || !b.current,
                      align: ra.Bi.LEFT,
                      amountType: ra.yf.FIAT,
                      onChange: _,
                      currency: c,
                      currencyOffsetClass: "max-w-[200px]",
                      testid: "buy-input-amount"
                    })
                  }), !!l && (0, i.jsx)(p.E, {
                    theme: m.Il.ERROR,
                    type: m.jK.BODY_12,
                    children: l
                  })]
                }), (0, i.jsx)($e.$, {
                  disabled: !P || v || !!l,
                  size: Ke.Vp.SMALL,
                  onClick: S,
                  fullWidth: !1,
                  children: t({
                    id: "buy-now-widget.button.text",
                    defaultMessage: "Buy"
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "flex gap-1.5 h-[26px] items-center",
                children: [(0, i.jsx)(ha.i, {
                  length: 4,
                  widthClass: "w-8",
                  heightClass: "h-6",
                  isLoading: !y,
                  horizontal: !0
                }), y?.map((e, t) => (0, i.jsx)($e.$, {
                  size: Ke.Vp.XSMALL,
                  onClick: () => (e => {
                    _(e.toString()), P && !v && S()
                  })(e),
                  disabled: v,
                  fullWidth: !1,
                  theme: Ke.ry.SUBTLE,
                  className: "font-semibold",
                  children: e
                }, "suggested-amount-" + t))]
              }), !l && (H || !!P) && (0, i.jsxs)("div", {
                className: "flex gap-1 items-center",
                children: [(0, i.jsx)(p.E, {
                  theme: m.Il.UTILITY_1_OPACITY_1,
                  type: m.jK.BODY_12,
                  children: t({
                    id: "buy-now-widget.text.description",
                    defaultMessage: "Buying"
                  })
                }), (0, i.jsx)($.E, {
                  isLoading: H,
                  className: "w-8 h-3 mx-1",
                  children: (0, i.jsx)(p.E, {
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    type: m.jK.BODY_12,
                    children: P?.digitalMoney.amount
                  })
                }), (0, i.jsx)(p.E, {
                  theme: m.Il.UTILITY_1_OPACITY_1,
                  type: m.jK.BODY_12,
                  children: e.symbol
                }), (0, i.jsx)("span", {
                  children: "·"
                }), (0, i.jsx)($.E, {
                  isLoading: H,
                  className: "w-10 h-3 mx-1",
                  children: (0, i.jsx)(p.E, {
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    type: m.jK.BODY_12,
                    children: P?.paymentMethod.paymentMethod && t({
                      id: "payment." + P.paymentMethod.paymentMethod.toLowerCase() + "-title"
                    })
                  })
                }), (0, i.jsx)("span", {
                  children: "·"
                }), (0, i.jsx)($.E, {
                  isLoading: H,
                  className: "w-10 h-3 mx-1",
                  children: (0, i.jsx)(p.E, {
                    theme: m.Il.UTILITY_1_OPACITY_1,
                    type: m.jK.BODY_12,
                    children: P?.provider.name
                  })
                })]
              })]
            })
          })]
        })
      };
      var ma = a(2496),
        pa = a(32669),
        ya = a(80179);
      const ga = ({
          blockchain: e
        }) => {
          const {
            formatMessage: t
          } = (0, K.A)(), a = (0, ke.F7)(e.coinId);
          if (!a) return null;
          const n = `${e.explorer.url}${e.explorer.accountPath}${a.address}`;
          return (0, i.jsx)(Ht.Z, {
            dashed: !0,
            theme: pa.R.TRANSPARENT,
            children: (0, i.jsxs)("div", {
              className: "flex items-center justify-center space-x-2",
              children: [(0, i.jsx)(p.E, {
                type: m.jK.CAPTION,
                theme: m.Il.SECONDARY,
                children: t({
                  id: "transaction.cannot-find-transaction"
                })
              }), (0, i.jsx)($e.$, {
                theme: Ke.ry.TRANSPARENT,
                noPadding: !0,
                fullWidth: !1,
                onClick: () => (0, ya.kK)(n),
                children: (0, i.jsx)(p.E, {
                  type: m.jK.CAPTION,
                  theme: m.Il.BRAND,
                  weight: m.nG.MEDIUM,
                  children: t({
                    id: "transaction.check-explorer"
                  })
                })
              })]
            })
          })
        },
        va = ({
          transactions: e,
          fetchNextPage: t,
          hasNextPage: a,
          historyAvailable: n,
          transactionsFetched: s,
          showLoader: r,
          emptyPeriodFetched: l,
          scrollableAreaHeight: o,
          blockchain: c,
          asset: d
        }) => {
          const {
            formatMessage: h
          } = (0, K.A)();
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-2 w-full",
            children: [(0, i.jsx)(p.E, {
              type: m.jK.SUBHEADER_16,
              lineHeight: m.jK.SUBHEADER_20,
              children: h({
                id: "asset.history.header",
                defaultMessage: "Recent Transactions"
              })
            }), (0, i.jsx)(ma.D, {
              transactions: e,
              loadMoreItems: t,
              hasNextPage: a,
              historyAvailable: n,
              fetchingStarted: s,
              fetchingTransactions: r,
              emptyPeriodFetched: l,
              scrollableAreaHeight: o,
              asset: d,
              children: (0, i.jsx)(ga, {
                blockchain: c
              })
            })]
          })
        };
      var Ca = a(10998);
      const wa = () => {
        var e, t;
        const {
          assetId: a
        } = (0, N.g)(), d = (0, o.X)(), {
          state: h
        } = (0, N.zy)(), {
          formatMessage: f
        } = (0, K.A)();
        if (!a) throw Error(`Asset Id "${a}" is invalid.`);
        const y = (0, be.Mr)(a);
        if (!y) throw Error(`Could not find asset for assetId "${a}"`);
        const [g, v] = (0, Ca.N)(y.assetId), w = (0, c.V)(y.assetId), x = (0, Ne.A)(y), b = (0, ke.F7)(x.coinId), k = C(y);
        if (!x) throw Error(`Could not find blockchain with id ID "${y.blockchainId}".`);
        (0, u.useEffect)(() => {
          M.YW.emit(U.A.FETCH_MARKET_SENTIMENT_ASSETS)
        }, []), (0, l.K)({
          event: s.Un.ASSET,
          props: {
            assetId: y.assetId,
            assetName: y.name,
            blockchainId: y.blockchainId
          }
        });
        const T = (0, N.Zp)(),
          H = (0, we.q)(x, y),
          L = [{
            key: tt.k$.HOLDINGS,
            title: f({
              id: "asset.tabs.holdings",
              defaultMessage: "Holdings"
            })
          }, {
            key: tt.k$.HISTORY,
            title: f({
              id: "asset.tabs.history",
              defaultMessage: "History"
            })
          }, {
            key: tt.k$.ABOUT,
            title: f({
              id: "asset.tabs.about",
              defaultMessage: "About"
            })
          }],
          [V, P] = (0, u.useState)(null != (e = h?.activeTab) ? e : tt.k$.HOLDINGS),
          _ = (0, u.useMemo)(() => window.innerHeight - xe.a4 - (w ? 72 : 0) - (d ? 0 : xe.e4 + xe.Et) - 96, [d]),
          {
            isFetching: S,
            transactionsFetched: O,
            hasNextPage: E,
            lastFetchedTransactionTime: B,
            emptyPeriodFetched: R,
            fetchNextPage: A
          } = (0, Ce.Tl)(y, x, b.address),
          F = (0, u.useMemo)(() => !(Object.keys(H).length || !O) || S, [H, O]);
        return (0, i.jsxs)(xe.LN, {
          children: [(0, i.jsx)(xe.zY, {
            title: y.symbol,
            subtitle: null != (t = x.displayName) ? t : x.name,
            backAction: () => {
              T(h?.origin ? h.origin : r.b.DEFAULT)
            }
          }), (0, i.jsxs)(xe.Gv, {
            children: [w && (0, i.jsx)("div", {
              className: "pr-2 mb-2",
              children: (0, i.jsx)(n.h, {
                assetId: y.assetId
              })
            }), (0, i.jsxs)(Me.A, {
              dataLength: Object.values(H).flat().length,
              next: A,
              height: _,
              className: "tw-scrollbar pb-4",
              hasMore: !!E,
              loader: null,
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: [(0, i.jsx)(ve, {
                asset: y,
                coinStatus: v
              }), v?.isBuyCryptoEnabled && (0, i.jsx)(fa, {
                asset: y
              }), (0, i.jsxs)(j.fu, {
                as: u.Fragment,
                selectedIndex: V,
                onChange: P,
                children: [(0, i.jsx)("div", {
                  className: "flex w-full mt-2 justify-between items-center",
                  children: (0, i.jsx)(j.wb, {
                    className: "flex h-10 space-x-8 w-full px-4",
                    children: L.map(e => (0, i.jsx)(j.oz, {
                      "data-testid": "tab-" + e.key,
                      className: "outline-none flex flex-col items-center justify-center",
                      children: ({
                        selected: t
                      }) => (0, i.jsxs)("div", {
                        className: "flex flex-col w-fit h-full justify-between",
                        children: [(0, i.jsx)("div", {
                          className: "flex items-center h-full",
                          children: (0, i.jsx)(p.E, {
                            theme: t ? m.Il.UTILITY_1_DEFAULT : m.Il.UTILITY_1_OPACITY_2,
                            type: m.jK.SUBHEADER_16,
                            weight: m.nG.MEDIUM,
                            children: e.title
                          })
                        }), (0, i.jsx)("div", {
                          "data-selected": t,
                          className: "w-full h-1 rounded-full data-[selected='true']:bg-primary"
                        })]
                      })
                    }, e.key))
                  })
                }), (0, i.jsx)("div", {
                  className: "w-full border-b border-b-utility-1-opacity-5"
                }), (0, i.jsxs)(j.T2, {
                  className: "flex flex-1 pt-4",
                  children: [(0, i.jsx)(j.Kp, {
                    unmount: !1,
                    className: "flex w-full outline-none",
                    children: (0, i.jsx)(zt, {
                      asset: y,
                      blockchain: x
                    })
                  }), (0, i.jsx)(j.Kp, {
                    unmount: !1,
                    className: "flex w-full outline-none",
                    children: (0, i.jsx)(va, {
                      transactions: H,
                      fetchNextPage: A,
                      hasNextPage: E,
                      historyAvailable: !!B,
                      transactionsFetched: O,
                      showLoader: F,
                      emptyPeriodFetched: R,
                      scrollableAreaHeight: _,
                      blockchain: x,
                      asset: y
                    })
                  }), (0, i.jsx)(j.Kp, {
                    unmount: !1,
                    className: "flex w-full outline-none",
                    children: (0, i.jsx)(na, {
                      asset: y,
                      blockchain: x,
                      coinStatus: v
                    })
                  })]
                })]
              })]
            }), (0, i.jsx)(et, {
              asset: y,
              isTokenRequiringRegistration: k,
              blockchain: x
            })]
          })]
        })
      }
    }
  }
]);
