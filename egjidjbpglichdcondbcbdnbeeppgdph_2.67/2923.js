try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "33568791-b565-481d-9591-fea168fb4d07", e.i = "sentry-dbid-33568791-b565-481d-9591-fea168fb4d07")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [2923], {
    15972: (e, t, a) => {
      a.d(t, {
        Y: () => i
      });
      var s, i = ((s = i || {}).INITIATE = "initiate", s.CLOSE = "close", s)
    },
    25708: (e, t, a) => {
      a.d(t, {
        A: () => u
      });
      var s = a(74848),
        i = a(64720),
        n = a(93077),
        l = a(88774),
        r = a(30081),
        o = a(68632),
        c = a(79830),
        d = a(66392),
        h = a(96159),
        g = a(54290);
      const u = ({
        status: e,
        type: t
      }) => {
        if ("pending" === e) return (0, s.jsx)(c.y, {
          size: o.Y.SMALL
        });
        let a;
        switch (t) {
          case d.w.Contract:
          case d.w.RegisterToken:
          case d.w.TrustLine:
          case d.w.Approve:
          case d.w.Revoke:
            a = (0, s.jsx)(r.p, {
              width: 24,
              height: 24,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Receive:
            a = (0, s.jsx)(n.Z, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Send:
            a = (0, s.jsx)(g.s, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Swap:
          case d.w.Trade:
            a = (0, s.jsx)(h.f, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Delegate:
          case d.w.Undelegate:
          case d.w.Redelegate:
          case d.w.Claim:
          case d.w.ClaimRewards:
            a = (0, s.jsx)(i.S, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          default:
            a = (0, s.jsx)(l.S, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            })
        }
        return (0, s.jsx)("div", {
          className: "flex w-full justify-center items-center h-full bg-bg3 rounded-full",
          children: a
        })
      }
    },
    30081: (e, t, a) => {
      a.d(t, {
        p: () => i
      });
      var s = a(74848);
      const i = ({
        width: e,
        height: t,
        colorClass: a
      }) => (0, s.jsx)("svg", {
        className: a,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, s.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.0561 2.62763C4.45795 2.22576 5.00301 2 5.57132 2H14.857C15.0465 2 15.2282 2.07525 15.3621 2.20921L20.3622 7.20921C20.496 7.34316 20.5713 7.52484 20.5713 7.71429V19.8571C20.5713 20.4254 20.3456 20.9706 19.9438 21.3724C19.5419 21.7743 18.9968 22 18.4285 22H5.57132C5.003 22 4.45795 21.7743 4.0561 21.3724C3.65424 20.9706 3.42847 20.4254 3.42847 19.8571V4.14286C3.42847 3.57454 3.65424 3.02949 4.0561 2.62763ZM8.42847 7.53571C7.93535 7.53571 7.53561 7.93546 7.53561 8.42857C7.53561 8.92169 7.93535 9.32143 8.42847 9.32143H11.2856C11.7787 9.32143 12.1785 8.92169 12.1785 8.42857C12.1785 7.93546 11.7787 7.53571 11.2856 7.53571H8.42847ZM8.42847 11.8214C7.93535 11.8214 7.53561 12.2212 7.53561 12.7143C7.53561 13.2074 7.93535 13.6071 8.42847 13.6071H15.5713C16.0644 13.6071 16.4642 13.2074 16.4642 12.7143C16.4642 12.2212 16.0644 11.8214 15.5713 11.8214H8.42847ZM7.53561 17C7.53561 16.5069 7.93535 16.1071 8.42847 16.1071H15.5713C16.0644 16.1071 16.4642 16.5069 16.4642 17C16.4642 17.4931 16.0644 17.8929 15.5713 17.8929H8.42847C7.93535 17.8929 7.53561 17.4931 7.53561 17Z",
          fill: "currentColor"
        })
      })
    },
    62923: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => K
      });
      var s, i = a(74848),
        n = a(26264),
        l = a(4800),
        r = a(6442),
        o = a(47767),
        c = a(80179),
        d = a(2454),
        h = a(64145),
        g = a(96540),
        u = a(14948),
        m = a(15972),
        f = a(59754),
        p = a(68157),
        C = a(44657),
        w = ((s = w || {}).LOW = "text-primary", s.MEDIUM = "text-textBrand", s.HIGH = "text-error", s);
      const y = {
        "text-primary": {
          dark: "#48FF91",
          light: "#0500ff"
        },
        "text-textBrand": {
          dark: "#F0B90B",
          light: "#C99400"
        },
        "text-error": {
          dark: "#E33B54",
          light: "#E33B54"
        }
      };
      var b = (e => (e[e.Coin = C.wL.Send] = "Coin", e[e.Token = C.wL.Send] = "Token", e[e.Swap = C.wL.Swap] = "Swap", e[e.Dapp = C.wL.Contract] = "Dapp", e))(b || {}),
        x = a(86170),
        v = a(66118),
        M = a(44731),
        N = a(5638),
        k = a(51335),
        S = a(28898),
        L = (e => (e.INITIATE = "initiate", e.UPDATE = "update", e.CLOSE = "close", e))(L || {}),
        j = a(2543),
        H = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        F = {}.hasOwnProperty,
        T = {}.propertyIsEnumerable,
        V = (e, t, a) => t in e ? H(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : e[t] = a;
      v.t1.register(v.PP, v.ZT, v.No, v.kc, v.FN, v.dN, N.A);
      const B = ({
          history: e,
          lowestLowFormatted: t,
          highestHighFormatted: a,
          gasStatusColor: s
        }) => {
          const [n, l] = (0, g.useState)(null), r = (0, g.useRef)(null), {
            theme: o
          } = (0, S.h)(), c = (0, g.useRef)(void 0), d = Math.min(...e.yAxis), m = Math.max(...e.yAxis), f = e.yAxis.indexOf(d), p = e.yAxis.indexOf(m), C = t => {
            switch (t) {
              case e.xAxis.length - 1:
                return -14;
              case 0:
                return 14;
              default:
                return 0
            }
          }, w = {
            plugins: {
              legend: {
                display: !1
              },
              title: {
                display: !0
              },
              tooltip: {
                enabled: !1
              },
              annotation: {
                clip: !1,
                annotations: {
                  high: {
                    type: "label",
                    xValue: e.xAxis[p],
                    yValue: m,
                    color: "#848e9c",
                    font: {
                      size: 12
                    },
                    content: [a],
                    position: "center",
                    yAdjust: -15,
                    xAdjust: () => C(p)
                  },
                  low: {
                    type: "label",
                    xValue: e.xAxis[f],
                    yValue: d,
                    color: "#848e9c",
                    font: {
                      size: 12
                    },
                    content: [t],
                    position: "center",
                    yAdjust: 15,
                    xAdjust: () => C(f)
                  }
                }
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
            },
            elements: {
              point: {
                radius: 0,
                hoverRadius: 0
              }
            },
            layout: {
              padding: {
                top: 20,
                bottom: 20
              }
            }
          }, b = (0, g.useMemo)(() => [{
            id: "intersect-x-line",
            afterDraw: e => {
              if (e.getActiveElements().length) {
                const t = e.ctx,
                  a = e.chartArea,
                  s = e.data.datasets[0].borderColor,
                  i = e.data.datasets[0].backgroundColor,
                  n = e.getActiveElements()[0];
                return l(n), t.save(), t.beginPath(), t.moveTo(n.element.x, a.top), t.lineTo(n.element.x, a.bottom), t.lineWidth = 1, t.setLineDash([3, 3]), t.strokeStyle = s, t.stroke(), t.restore(), t.beginPath(), t.arc(n.element.x, n.element.y, 5, 0, 2 * Math.PI), t.fillStyle = s, t.fill(), t.lineWidth = 2, t.strokeStyle = i, t.stroke(), void t.restore()
              }
              l(null)
            }
          }], []), x = (0, g.useCallback)((0, j.debounce)(e => {
            h.YW.emit(u.A.GAS_STATION, {
              action: L.UPDATE,
              params: {
                index: e
              }
            })
          }, 100), []), v = (0, g.useCallback)(e => {
            c.current = e, x(e)
          }, [x]);
          (0, g.useEffect)(() => {
            n?.index !== c.current && (void 0 !== n?.index ? v(n.index) : null === n && v(e.xAxis.length - 1))
          }, [n, v]), (0, g.useEffect)(() => () => {
            x.cancel()
          }, [x]);
          const N = (0, g.useMemo)(() => ({
            labels: e.xAxis,
            datasets: [{
              data: e?.yAxis,
              fill: !0,
              borderColor: y[s][o],
              backgroundColor: function(e) {
                const t = e.chart,
                  {
                    ctx: a,
                    chartArea: s
                  } = t;
                if (s) return function(e, t) {
                  const a = e.createLinearGradient(0, t.bottom, 0, t.top);
                  return a.addColorStop(1, "rgba(14, 203, 129, 0.25)"), a.addColorStop(0, "rgba(255, 246, 210, 0)"), a.addColorStop(0, "rgba(14, 203, 129, 0)"), a
                }(a, s)
              },
              tension: .4
            }]
          }), [e, s, o]);
          return (0, i.jsx)(M.N1, {
            ref: r,
            data: N,
            options: w,
            plugins: b
          })
        },
        G = e => e?.history ? (0, i.jsx)(B, ((e, t) => {
          for (var a in t || (t = {})) F.call(t, a) && V(e, a, t[a]);
          if (A)
            for (var a of A(t)) T.call(t, a) && V(e, a, t[a]);
          return e
        })({}, e)) : (0, i.jsx)(k.E, {
          isLoading: !0,
          children: (0, i.jsx)("div", {
            className: "w-full h-[200px]"
          })
        });
      var R = a(52114),
        z = a(152),
        D = a(32669),
        Z = a(1279),
        E = a(48346);
      const I = ({
          low: e,
          medium: t,
          high: a
        }) => {
          const {
            formatMessage: s
          } = (0, r.A)();
          return (0, i.jsxs)("div", {
            className: "flex space-x-4 text-center",
            children: [(0, i.jsxs)(z.Z, {
              theme: D.R.TRANSPARENT,
              children: [(0, i.jsx)(R.E, {
                theme: Z.Il.PRIMARY,
                children: s({
                  id: "gas-station.fast",
                  defaultMessage: "Fast"
                })
              }), (0, i.jsx)(E.S, {
                widthClass: "w-17.5",
                heightClass: "h-4",
                marginClass: "my-1",
                isLoading: !a,
                children: (0, i.jsx)(R.E, {
                  theme: Z.Il.SECONDARY,
                  children: a?.price
                })
              }), (0, i.jsx)(E.S, {
                widthClass: "w-17.5",
                heightClass: "h-4",
                marginClass: "my-1",
                isLoading: !a,
                children: (0, i.jsxs)(R.E, {
                  theme: Z.Il.THIRD,
                  children: [a?.time, " ", s({
                    id: "gas-station.minute" + ("1" !== a?.time ? "s" : ""),
                    defaultMessage: "Minute" + ("1" !== a?.time ? "s" : "")
                  })]
                })
              })]
            }), (0, i.jsxs)(z.Z, {
              theme: D.R.TRANSPARENT,
              children: [(0, i.jsx)(R.E, {
                theme: Z.Il.PRIMARY,
                children: s({
                  id: "gas-station.average",
                  defaultMessage: "Average"
                })
              }), (0, i.jsx)(E.S, {
                widthClass: "w-17.5",
                heightClass: "h-4",
                marginClass: "my-1",
                isLoading: !t,
                children: (0, i.jsx)(R.E, {
                  theme: Z.Il.SECONDARY,
                  children: t?.price
                })
              }), (0, i.jsx)(E.S, {
                widthClass: "w-17.5",
                heightClass: "h-4",
                marginClass: "my-1",
                isLoading: !t,
                children: (0, i.jsxs)(R.E, {
                  theme: Z.Il.THIRD,
                  children: [t?.time, " ", s({
                    id: "gas-station.minute" + ("1" !== t?.time ? "s" : ""),
                    defaultMessage: "Minute" + ("1" !== t?.time ? "s" : "")
                  })]
                })
              })]
            }), (0, i.jsxs)(z.Z, {
              theme: D.R.TRANSPARENT,
              children: [(0, i.jsx)(R.E, {
                theme: Z.Il.PRIMARY,
                children: s({
                  id: "gas-station.safe",
                  defaultMessage: "Safe"
                })
              }), (0, i.jsx)(E.S, {
                widthClass: "w-17.5",
                heightClass: "h-4",
                marginClass: "my-1",
                isLoading: !e,
                children: (0, i.jsx)(R.E, {
                  theme: Z.Il.SECONDARY,
                  children: e?.price
                })
              }), (0, i.jsx)(E.S, {
                widthClass: "w-17.5",
                heightClass: "h-4",
                marginClass: "my-1",
                isLoading: !e,
                children: (0, i.jsxs)(R.E, {
                  theme: Z.Il.THIRD,
                  children: [e?.time, " ", s({
                    id: "gas-station.minute" + ("1" !== e?.time ? "s" : ""),
                    defaultMessage: "Minute" + ("1" !== e?.time ? "s" : "")
                  })]
                })
              })]
            })]
          })
        },
        O = ({
          currentGraphPrice: e,
          currentGraphValue: t,
          gasUnit: a,
          status: s,
          gasStatusColor: n
        }) => {
          const {
            formatMessage: l
          } = (0, r.A)(), o = !e || !t || !s;
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(R.E, {
              type: Z.jK.CAPTION,
              theme: Z.Il.THIRD,
              children: l({
                id: "gas-station.heading",
                defaultMessage: "Gas cost"
              })
            }), (0, i.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [(0, i.jsxs)("div", {
                className: "flex-col",
                children: [(0, i.jsx)(E.S, {
                  widthClass: "w-22.5",
                  heightClass: "h-9",
                  marginClass: "mb-2",
                  isLoading: o,
                  children: (0, i.jsx)(R.E, {
                    type: Z.jK.SCREAMER,
                    children: e
                  })
                }), (0, i.jsx)(E.S, {
                  widthClass: "w-22.5",
                  heightClass: "h-4",
                  children: (0, i.jsxs)(R.E, {
                    type: Z.jK.SUBTITLE,
                    theme: Z.Il.THIRD,
                    children: [t, " ", a]
                  })
                })]
              }), (0, i.jsx)("span", {
                className: "inline-block h-full caption-text px-8 py-3 font-medium rounded bg-backgroundSecondary " + n,
                children: (0, i.jsx)(E.S, {
                  widthClass: "w-7",
                  heightClass: "h-5",
                  isLoading: o,
                  children: l({
                    id: "gas-station-badge." + s,
                    defaultMessage: s?.toUpperCase()
                  })
                })
              })]
            })]
          })
        };
      var P = a(25708);
      const U = ({
          range: e,
          fiatRange: t,
          type: a
        }) => {
          const {
            formatMessage: s
          } = (0, r.A)();
          return (0, i.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [(0, i.jsxs)("div", {
              className: "flex items-center space-x-2.5",
              children: [(0, i.jsx)("div", {
                className: "flex w-7.5 h-7.5 justify-center items-center",
                children: (0, i.jsx)(P.A, {
                  status: "confirmed",
                  type: b[a]
                })
              }), (0, i.jsx)(R.E, {
                testid: "tx-type",
                children: s({
                  id: "component.transaction-item.type." + a,
                  defaultMessage: {
                    Dapp: "Dapp Interaction",
                    Coin: "Transfer",
                    Token: "Transfer",
                    Swap: "Swap"
                  } [a]
                })
              })]
            }), (0, i.jsxs)("div", {
              className: "text-right",
              children: [(0, i.jsx)(R.E, {
                children: e
              }), (0, i.jsx)(R.E, {
                theme: Z.Il.THIRD,
                type: Z.jK.CAPTION,
                children: t
              })]
            })]
          })
        },
        $ = ({
          txs: e
        }) => {
          const {
            formatMessage: t
          } = (0, r.A)();
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              children: (0, i.jsx)(R.E, {
                type: Z.jK.CAPTION,
                theme: Z.Il.THIRD,
                children: t({
                  id: "gas-station.estimates.heading",
                  defaultMessage: "Estimated transaction cost"
                })
              })
            }), e?.map(e => (0, i.jsx)(U, {
              range: e.range,
              fiatRange: e.fiatRange,
              type: e.type
            }, e.type)), !e && (0, i.jsx)(E.S, {
              heightClass: "h-8"
            })]
          })
        };
      var Y = a(55418),
        q = a(79830),
        J = a(68632);
      const K = () => {
        const {
          assetId: e
        } = (0, o.g)(), t = (0, o.Zp)(), {
          formatMessage: a
        } = (0, r.A)(), {
          gasStationState: s,
          gasStatusColor: C
        } = function(e) {
          const t = (0, p.GV)(e => e.sdkFeatures.gasStation),
            [a, s] = (0, g.useState)("text-primary"),
            {
              currency: i
            } = (0, x.P)();
          return (0, g.useEffect)(() => {
            e && h.YW.emit(u.A.GAS_STATION, {
              action: m.Y.INITIATE,
              params: {
                assetId: e,
                currency: i
              }
            })
          }, [e]), (0, g.useEffect)(() => {
            if (t?.isSuccess) switch (t?.status) {
              case "Low":
                s(w.LOW);
                break;
              case "Medium":
                s(w.MEDIUM);
                break;
              case "High":
                s(w.HIGH)
            }
          }, [t]), (0, f.A)(function() {
            h.YW.emit(u.A.GAS_STATION, {
              action: m.Y.CLOSE
            })
          }), (0, g.useMemo)(() => ({
            gasStationState: t,
            gasStatusColor: a
          }), [t, a])
        }(e), y = (0, i.jsx)("div", {
          className: "cursor-pointer",
          onClick: () => (0, c.kK)("https://support.trustwallet.com/en/support/solutions/articles/67000632070-what-are-network-fees-"),
          children: (0, i.jsx)(d.m, {
            height: 16,
            width: 16
          })
        });
        return s?.isSuccess ? (0, i.jsxs)(l.LN, {
          children: [(0, i.jsx)(l.zY, {
            title: a({
              id: "gas-station.header",
              defaultMessage: "Gas Station"
            }),
            backAction: () => t(`${n.b.ASSET}/${e}`),
            infoAction: y
          }), (0, i.jsx)(l.Gv, {
            children: (0, i.jsx)(l.LO, {
              children: (0, i.jsxs)("div", {
                className: "flex-col space-y-4 my-2.5 justify-center",
                children: [(0, i.jsx)(O, {
                  currentGraphPrice: s.currentGraphPrice,
                  currentGraphValue: s.currentGraphValue,
                  gasUnit: s.energyUnit,
                  status: s.status,
                  gasStatusColor: C
                }), (0, i.jsx)(G, {
                  history: s.history,
                  gasStatusColor: C,
                  lowestLowFormatted: s.minGraphPrice,
                  highestHighFormatted: s.maxGraphPrice
                }), (0, i.jsx)(I, {
                  low: s.low,
                  medium: s.medium,
                  high: s.high
                }), (0, i.jsx)($, {
                  txs: s.txs
                })]
              })
            })
          })]
        }) : (0, i.jsx)(Y.o, {
          children: (0, i.jsx)(q.y, {
            size: J.Y.XLARGE
          })
        })
      }
    }
  }
]);
