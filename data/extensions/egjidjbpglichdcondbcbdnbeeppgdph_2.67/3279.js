try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "0c7293e2-76b3-44b2-861a-2d13ca5ab6ad", e.i = "sentry-dbid-0c7293e2-76b3-44b2-861a-2d13ca5ab6ad")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3279], {
    871: (e, t, i) => {
      i.d(t, {
        J: () => r
      });
      var l = i(68157);
      const r = e => {
        const t = (0, l.GV)(e => e.asset.cexFundingAssets);
        if (!e) return t;
        const i = {};
        return Object.entries(t).forEach(([t, l]) => {
          l.includes(e) && (i[t] = l)
        }), i
      }
    },
    13950: (e, t, i) => {
      i.d(t, {
        S: () => f
      });
      var l = i(74848),
        r = i(1279),
        o = i(52114),
        n = i(6442),
        s = i(28202);
      const a = ({
          width: e,
          height: t
        }) => (0, l.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: e ?? 40,
          height: t ?? 40,
          viewBox: "0 0 40 40",
          fill: "none",
          children: [(0, l.jsx)("circle", {
            cx: "20",
            cy: "20",
            r: "20",
            fill: "#0B0E11"
          }), (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.0831 12.5062L14.7103 17.8816L11.5841 14.7537L20.0831 6.25L28.585 14.7565L25.4587 17.8843L20.0831 12.5062ZM9.37642 16.9619L6.25 20.0899L9.37624 23.2176L12.5026 20.0897L9.37642 16.9619ZM14.7102 22.2992L20.083 27.6746L25.4585 22.2966L28.5865 25.4228L28.5849 25.4245L20.083 33.9308L11.5837 25.4274L11.5793 25.4229L14.7102 22.2992ZM30.7904 16.9635L27.664 20.0915L30.7902 23.2192L33.9166 20.0913L30.7904 16.9635Z",
            fill: "#F3BA2E"
          }), (0, l.jsx)("path", {
            d: "M23.2541 20.0897H23.2555L20.0831 16.9157L17.7386 19.2613H17.7385L17.4692 19.5309L16.9136 20.0869L16.9092 20.0912L16.9136 20.0957L20.0831 23.267L23.2555 20.093L23.257 20.0912L23.2541 20.0897Z",
            fill: "#F3BA2E"
          })]
        }),
        c = ({
          width: e,
          height: t
        }) => (0, l.jsxs)("svg", {
          width: e ?? 17,
          height: t ?? 16,
          viewBox: "0 0 17 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, l.jsx)("path", {
            d: "M8.25 16C12.6683 16 16.25 12.4183 16.25 8C16.25 3.58172 12.6683 0 8.25 0C3.83172 0 0.25 3.58172 0.25 8C0.25 12.4183 3.83172 16 8.25 16Z",
            fill: "#0052FF"
          }), (0, l.jsx)("path", {
            d: "M8.31719 5.65359C9.25906 5.65359 10.0062 6.23453 10.29 7.09844H12.1875C11.8438 5.25141 10.3198 4 8.33234 4C6.07531 4 4.3125 5.71328 4.3125 8.00766C4.3125 10.302 6.03125 12 8.33234 12C10.2753 12 11.8295 10.7486 12.1736 8.88625H10.2898C10.0208 9.75031 9.27422 10.3464 8.33172 10.3464C7.03125 10.3464 6.11984 9.34812 6.11984 8.00766C6.12047 6.65188 7.01719 5.65359 8.31719 5.65359Z",
            fill: "white"
          })]
        });
      var d = i(871),
        h = i(47637),
        u = i(63369),
        g = i(29584),
        m = i(41327),
        p = i(47767),
        w = i(85266);
      const f = ({
        assetId: e,
        walletAddress: t,
        label: i,
        mobilePlatform: f,
        pageViewSource: v,
        onProviderSelect: y
      }) => {
        const {
          formatMessage: I
        } = (0, n.A)(), b = (0, p.Zp)(), {
          navigationOrigin: k
        } = (0, w.o)();
        (0, u.K)({
          event: g.Un.FUND_CEX_FUNDING_PROVIDERS,
          props: null
        });
        const {
          getFundingLink: N
        } = (0, h.v)(), x = (0, d.J)(e), C = {
          [s.M$.BINANCE]: (0, l.jsx)(a, {}),
          [s.M$.COINBASE]: (0, l.jsx)(c, {
            width: 40,
            height: 40
          })
        }, M = Object.keys(x);
        return M.length ? (0, l.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [(0, l.jsx)(o.E, {
            type: r.jK.SUBHEADER_14,
            weight: r.nG.MEDIUM,
            children: i
          }), (0, l.jsx)("div", {
            className: "bg-background-2 rounded-4 px-4 py-2",
            children: M.map(i => (0, l.jsxs)("div", {
              className: "flex items-center justify-between py-1 h-15 cursor-pointer",
              "data-testid": "cex-funding-provider-" + i,
              onClick: () => (i => {
                s.tv.includes(i) ? b(`/fund/cex/${i}/platform`, {
                  state: {
                    pageViewSource: v,
                    assetId: e,
                    walletAddress: t,
                    originalNavigationOrigin: k
                  }
                }) : e && t ? N({
                  providerId: i,
                  assetId: e,
                  walletAddress: t,
                  pageViewSource: v,
                  mobilePlatform: f
                }) : y ? y(i) : b(`/fund/cex/${i}/platform/assets`, {
                  state: {
                    originalNavigationOrigin: k
                  }
                })
              })(i),
              children: [(0, l.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [C[i], (0, l.jsx)(o.E, {
                  type: r.jK.SUBHEADER_14,
                  weight: r.nG.MEDIUM,
                  children: I({
                    id: "modal-receive.cex-funding-providers",
                    defaultMessage: "Deposit from {providerName}"
                  }, {
                    providerName: s.sP[i]
                  })
                })]
              }), (0, l.jsx)(m.v, {
                width: 20,
                height: 20,
                colorClass: "text-iconNormal"
              })]
            }, i))
          })]
        }) : null
      }
    },
    20998: (e, t, i) => {
      i.d(t, {
        S: () => C
      });
      var l = i(74848),
        r = i(96540),
        o = i(6442),
        n = i(52114),
        s = i(1279),
        a = i(8360),
        c = i(94893),
        d = i(9770),
        h = i(97726),
        u = i(46729),
        g = i(95455),
        m = i(65504),
        p = i(68632),
        w = i(98939),
        f = i(22146),
        v = i(23350);
      const y = Object.values(w.hF),
        I = e => y.includes(e),
        b = e => {
          var t;
          return null != (t = e.displayName) ? t : e.name
        },
        k = (e, t) => {
          const i = b(e).toLowerCase(),
            l = e.symbol.toLowerCase();
          return i.includes(t) || l.includes(t)
        },
        N = (e, t) => y.indexOf(e.coinId) - y.indexOf(t.coinId),
        x = (e, t) => b(e).localeCompare(b(t)),
        C = ({
          isOpen: e,
          onClose: t,
          blockchainList: i,
          selectedBlockchainId: w,
          onSelectNetwork: y,
          hideAllNetworksOption: C
        }) => {
          const {
            formatMessage: M
          } = (0, o.A)(), [A, j] = (0, r.useState)(""), L = A.toLowerCase(), z = (0, r.useMemo)(() => i.filter(e => I(e.coinId)).filter(e => !A || k(e, L)).sort(N), [i, A, L]), D = (0, r.useMemo)(() => i.filter(e => !I(e.coinId)).filter(e => !A || k(e, L)).sort(x), [i, A, L]), S = !A && !C, P = A && 0 === z.length && 0 === D.length, O = e => e ? w === e.id : !w, Z = e => ((e, t, i) => new Promise((e, t) => {
            var l = e => {
                try {
                  o(i.next(e))
                } catch (e) {
                  t(e)
                }
              },
              r = e => {
                try {
                  o(i.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, r);
            o((i = i.apply(null, null)).next())
          }))(0, 0, function*() {
            y(e), t(), j("")
          });
          return (0, l.jsx)(f.a, {
            opened: e,
            onClose: () => {
              t(), j("")
            },
            title: M({
              id: "select-network.title",
              defaultMessage: "Select network"
            }),
            placement: v.Gn.BOTTOM,
            children: (0, l.jsxs)("div", {
              className: "flex flex-col min-h-[95vh]  space-y-3",
              children: [(0, l.jsx)(a.D, {
                placeholder: M({
                  id: "select-network.search-placeholder",
                  defaultMessage: "Search for network"
                }),
                value: A,
                onChange: e => j(e.target.value),
                autoFocus: !1,
                testid: "network-modal-search"
              }), (0, l.jsx)("div", {
                className: "flex-1 overflow-y-auto tw-scrollbar flex flex-col",
                children: P ? (0, l.jsx)("div", {
                  className: "flex-1 flex items-center justify-center",
                  children: (0, l.jsx)(g.B, {})
                }) : (0, l.jsx)("div", {
                  className: "space-y-4",
                  children: (0, l.jsxs)(l.Fragment, {
                    children: [S && (0, l.jsx)(c.c, {
                      onClick: () => Z(null),
                      testid: "network-modal-all",
                      children: (0, l.jsxs)("div", {
                        className: "flex items-center justify-between py-3",
                        children: [(0, l.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [(0, l.jsx)("div", {
                            className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                            children: (0, l.jsx)(d.s, {
                              width: 20,
                              height: 20,
                              colorClass: "text-primary"
                            })
                          }), (0, l.jsx)(n.E, {
                            type: s.jK.SUBHEADER_16,
                            theme: s.Il.PRIMARY,
                            children: M({
                              id: "select-crypto.all-networks",
                              defaultMessage: "All networks"
                            })
                          })]
                        }), O(null) ? (0, l.jsx)(h.w, {
                          width: 24,
                          height: 24,
                          colorClass: "text-primary"
                        }) : (0, l.jsx)(u.r, {
                          width: 24,
                          height: 24,
                          colorClass: "text-utility-1-opacity-2"
                        })]
                      })
                    }), z.length > 0 && (0, l.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, l.jsx)("div", {
                        className: "mb-2",
                        children: (0, l.jsx)(n.E, {
                          type: s.jK.BODY_14,
                          theme: s.Il.SECONDARY,
                          weight: s.nG.SEMIBOLD,
                          testid: "popular-networks-title",
                          children: M({
                            id: "select-network.popular-networks",
                            defaultMessage: "Popular networks"
                          })
                        })
                      }), z.map(e => (0, l.jsx)(c.c, {
                        onClick: () => Z(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, l.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, l.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, l.jsx)(m.q, {
                              name: b(e),
                              src: e.iconUrl,
                              size: p.Y.LARGE
                            }), (0, l.jsx)(n.E, {
                              type: s.jK.SUBHEADER_16,
                              theme: s.Il.PRIMARY,
                              children: b(e)
                            })]
                          }), O(e) ? (0, l.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, l.jsx)(u.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    }), D.length > 0 && (0, l.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, l.jsx)("div", {
                        className: "mb-2",
                        children: (0, l.jsx)(n.E, {
                          type: s.jK.BODY_14,
                          theme: s.Il.SECONDARY,
                          weight: s.nG.SEMIBOLD,
                          testid: "az-networks-title",
                          children: M({
                            id: "select-network.az-networks",
                            defaultMessage: "A-Z networks"
                          })
                        })
                      }), D.map(e => (0, l.jsx)(c.c, {
                        onClick: () => Z(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, l.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, l.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, l.jsx)(m.q, {
                              name: b(e),
                              src: e.iconUrl,
                              size: p.Y.LARGE
                            }), (0, l.jsx)(n.E, {
                              type: s.jK.SUBHEADER_16,
                              theme: s.Il.PRIMARY,
                              children: b(e)
                            })]
                          }), O(e) ? (0, l.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, l.jsx)(u.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    })]
                  })
                })
              })]
            })
          })
        }
    },
    28945: (e, t, i) => {
      i.d(t, {
        M: () => c,
        r: () => g
      });
      var l, r = i(74848),
        o = i(28898),
        n = i(97283),
        s = i.n(n),
        a = i(96540),
        c = ((l = c || {})[l.MEDIUM = 180] = "MEDIUM", l[l.LARGE = 200] = "LARGE", l[l.XLARGE = 290] = "XLARGE", l);
      const d = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1NyIgdmlld0JveD0iMCAwIDUwIDU3IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMC42Mzk2NDggOC40MjkzOUwyNC45OTk1IDAuMzg2NzE5VjU2LjA2NjdDNy41OTk1OSA0OC42NDI3IDAuNjM5NjQ4IDM0LjQxMzQgMC42Mzk2NDggMjYuMzcwN1Y4LjQyOTM5WiIgZmlsbD0iIzA1MDBGRiIvPgogIDxwYXRoIGQ9Ik00OS4zNjA0IDguNDI5MzlMMjUuMDAwNSAwLjM4NjcxOVY1Ni4wNjY3QzQyLjQwMDQgNDguNjQyNyA0OS4zNjA0IDM0LjQxMzQgNDkuMzYwNCAyNi4zNzA3VjguNDI5MzlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTQ5OF83OTA0KSIvPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE0OThfNzkwNCIgeDE9IjQzLjk0NjYiIHkxPSItMy4xNzA1MSIgeDI9IjI1LjAxMjUiIHkyPSI1NS40NzUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4wMjExMiIgc3RvcC1jb2xvcj0iIzAwMDBGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDc2MjQyMyIgc3RvcC1jb2xvcj0iIzAwOTRGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMTYzMDg5IiBzdG9wLWNvbG9yPSIjNDhGRjkxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC40MjAwNDkiIHN0b3AtY29sb3I9IiMwMDk0RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjY4Mjg4NiIgc3RvcC1jb2xvcj0iIzAwMzhGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuOTAyNDY1IiBzdG9wLWNvbG9yPSIjMDUwMEZGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+",
        h = "#1B1B1C",
        u = "#fff",
        g = ({
          data: e,
          size: t = 180,
          customLogo: i,
          errorCorrectionLevel: l = "Q",
          showBorder: n
        }) => {
          const {
            theme: c
          } = (0, o.h)(), g = (0, a.useRef)(null), m = {
            180: 7,
            200: 10,
            290: 10
          }, p = (0, a.useMemo)(() => new(s())({
            type: "svg",
            width: t,
            height: t,
            data: e,
            margin: m[t],
            qrOptions: {
              typeNumber: 0,
              mode: "Byte",
              errorCorrectionLevel: l
            },
            imageOptions: {
              hideBackgroundDots: !0,
              imageSize: i ? .3 : .6,
              margin: i ? 14 : 3
            },
            dotsOptions: {
              type: "dots",
              color: h
            },
            backgroundOptions: {
              color: u,
              round: .12
            },
            image: d,
            cornersSquareOptions: {
              type: "extra-rounded",
              color: h
            },
            cornersDotOptions: {
              type: "dot",
              color: h
            }
          }), []);
          return (0, a.useEffect)(() => {
            g.current && p.append(g.current)
          }, [g.current]), (0, a.useEffect)(() => {
            p.update({
              data: e,
              dotsOptions: {
                color: h
              },
              backgroundOptions: {
                color: u
              },
              image: d,
              cornersSquareOptions: {
                color: h
              },
              cornersDotOptions: {
                color: h
              }
            })
          }, [e, c]), (0, r.jsxs)("div", {
            className: "relative",
            children: [(0, r.jsx)("div", {
              ref: g,
              className: n ? "w-fit border-[2px] border-utility-1-opacity-5 rounded-4 p-4" : ""
            }), i && (0, r.jsx)("div", {
              className: "absolute inset-0 -left-[3px] -top-[2px] flex items-center justify-center pointer-events-none",
              children: (0, r.jsx)("div", {
                className: "w-12 h-12 flex items-center justify-center",
                children: i
              })
            })]
          })
        }
    },
    47637: (e, t, i) => {
      i.d(t, {
        v: () => u
      });
      var l = i(64145),
        r = i(89408),
        o = i(68869),
        n = i(29584),
        s = i(26113),
        a = i(28202),
        c = i(23207),
        d = i(84240),
        h = i(47767);
      const u = () => {
        const {
          trackAnalytics: e
        } = (0, c.s)(), t = (0, d.c)(), i = (0, h.Zp)();
        return {
          getFundingLink: c => ((e, t, i) => new Promise((e, l) => {
            var r = e => {
                try {
                  n(i.next(e))
                } catch (e) {
                  l(e)
                }
              },
              o = e => {
                try {
                  n(i.throw(e))
                } catch (e) {
                  l(e)
                }
              },
              n = t => t.done ? e(t.value) : Promise.resolve(t.value).then(r, o);
            n((i = i.apply(null, t)).next())
          }))(0, [c], function*({
            providerId: c,
            assetId: d,
            walletAddress: h,
            pageViewSource: u,
            mobilePlatform: g
          }) {
            try {
              const t = yield l.YW.emit(r.A.FETCH_CEX_FUNDING_LINK, {
                providerId: c,
                assetId: d,
                walletAddress: h,
                pageViewSource: u,
                mobilePlatform: g
              });
              e({
                event: n.BQ.RECEIVE_CEX_FUNDING_CLICK,
                props: {
                  providerId: c,
                  pageViewSource: u
                }
              });
              const o = a.tv.includes(c) && g;
              if (!t) throw Error();
              o ? i("/fund/cex/qr", {
                state: {
                  providerId: c,
                  fundingLink: t
                }
              }) : (0, s.sP)(t)
            } catch (e) {
              e.message.includes("transfer unsupported by provider") ? t("modal-receive.funding-link.asset-not-supported", "This asset is currently not supported for this operation") : t("modal-receive.funding-link-not-found", "Something went wrong, please try again later"), (0, o.C)(Error("Receive Cex Funding Link Fetch Unsuccessful"), {
                providerId: c,
                assetId: d,
                walletAddress: h
              })
            }
          })
        }
      }
    },
    52294: (e, t, i) => {
      i.d(t, {
        M: () => C
      });
      var l = i(74848),
        r = i(29584),
        o = i(23207),
        n = i(65504),
        s = i(68632),
        a = i(64145),
        c = i(22670),
        d = i(28398),
        h = i(44832),
        u = i(29189),
        g = i(69275),
        m = i(33055),
        p = i(29251),
        w = i(26113),
        f = i(96540),
        v = i(6442),
        y = i(98939),
        I = i(52114),
        b = i(1279),
        k = i(20998),
        N = i(10551);
      const x = [y.hF.SmartChain, y.hF.Ethereum, y.hF.Solana, y.hF.Tron, y.hF.Arbitrum],
        C = ({
          useGlobalState: e,
          localFilteringBlockchainId: t,
          onFilterChange: i
        }) => {
          const {
            formatMessage: y
          } = (0, v.A)(), {
            trackAnalytics: C
          } = (0, o.s)(), M = (0, m.A)(), A = (0, g.o)(), j = (0, h.g)(!0), L = (0, u.f)(), [z, D] = (0, f.useState)(!1), S = e ? L : t, P = (0, f.useMemo)(() => {
            if (M.type === p.S.MNEMONIC) return j;
            const e = Object.keys(A).map(e => e);
            return j.filter(t => e.includes(t.coinId.toString()))
          }, [j, A, M]), O = (0, f.useMemo)(() => P?.find(e => e.id === S), [P, S]);
          (0, f.useEffect)(() => {
            e && S && !O && a.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, null)
          }, [e, S, O]);
          const Z = (0, f.useMemo)(() => x.map(e => P.find(t => t.coinId === e)).filter(e => void 0 !== e), [P]),
            B = P.length,
            G = t => ((e, t, i) => new Promise((e, t) => {
              var l = e => {
                  try {
                    o(i.next(e))
                  } catch (e) {
                    t(e)
                  }
                },
                r = e => {
                  try {
                    o(i.throw(e))
                  } catch (e) {
                    t(e)
                  }
                },
                o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, r);
              o((i = i.apply(null, null)).next())
            }))(0, 0, function*() {
              var l;
              if (!e) {
                const e = null != (l = t?.id) ? l : null;
                return void i?.(e)
              }
              if (!t) return void(yield Promise.allSettled([a.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, null), (0, w.yy)(250)]));
              const o = t.isCustom ? d.l.CUSTOM : d.l.MAIN;
              yield Promise.allSettled([a.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, t.id), (0, w.yy)(250)]), C({
                event: r.BQ.SWITCH_FILTERING_NETWORK,
                props: {
                  pageViewSource: r.Un.HOME,
                  blockchainName: t.name,
                  blockchainChainId: t.chainId,
                  blockchainType: o
                }
              })
            }),
            R = e => e ? S === e.id : !S;
          return (0, l.jsxs)("div", {
            className: "flex items-center justify-between overflow-x-auto scrollbar-hide pb-2",
            children: [(0, l.jsx)("button", {
              onClick: () => G(null),
              className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center " + (R(null) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
              "data-testid": "horizontal-network-filter-all",
              title: y({
                id: "component.blockchain-select.all-networks",
                defaultMessage: "All Networks"
              }),
              children: (0, l.jsx)("span", {
                className: R(null) ? "!text-primary" : "",
                children: (0, l.jsx)(I.E, {
                  type: b.jK.SUBHEADER_14,
                  theme: R(null) ? b.Il.PRIMARY_DEFAULT : void 0,
                  children: y({
                    id: "component.blockchain-select.all",
                    defaultMessage: "All"
                  })
                })
              })
            }), Z.map(e => {
              var t;
              return (0, l.jsx)("button", {
                onClick: () => G(e),
                className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all " + (R(e) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
                "data-testid": "horizontal-network-filter-" + e.symbol.toLowerCase(),
                title: null != (t = e.displayName) ? t : e.name,
                children: (0, l.jsx)("div", {
                  className: "w-full h-full rounded-full overflow-hidden flex items-center justify-center",
                  children: (0, l.jsx)(n.q, {
                    name: e.name,
                    size: s.Y.MEDIUM,
                    src: e.iconUrl
                  })
                })
              }, e.id)
            }), (0, l.jsxs)("button", {
              onClick: () => D(!0),
              className: "flex-shrink-0 px-3 py-2 rounded-full border-2 border-utility-1-opacity-5 bg-background-2 flex items-center gap-1.5",
              "data-testid": "horizontal-network-filter-more",
              title: B + " networks available",
              children: [(0, l.jsx)(I.E, {
                type: b.jK.SUBHEADER_14,
                children: B
              }), (0, l.jsx)(N.b, {
                width: 12,
                height: 12,
                colorClass: "text-utility-1-opacity-1"
              })]
            }), (0, l.jsx)(k.S, {
              isOpen: z,
              onClose: () => D(!1),
              blockchainList: P,
              selectedBlockchainId: S ?? null,
              onSelectNetwork: G
            })]
          })
        }
    },
    84240: (e, t, i) => {
      i.d(t, {
        c: () => o
      });
      var l = i(68157),
        r = i(61855);
      const o = () => (e, t, i = {}) => {
        l.M_.dispatch(r.A.actions.addToast({
          id: crypto.randomUUID(),
          i18n: {
            message: {
              id: e,
              defaultMessage: t
            },
            params: i
          }
        }))
      }
    }
  }
]);
