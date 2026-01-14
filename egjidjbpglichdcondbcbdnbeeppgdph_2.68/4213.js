"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [4213], {
    871: (e, i, t) => {
      t.d(i, {
        J: () => s
      });
      var r = t(68157);
      const s = e => {
        const i = (0, r.GV)(e => e.asset.cexFundingAssets);
        if (!e) return i;
        const t = {};
        return Object.entries(i).forEach(([i, r]) => {
          r.includes(e) && (t[i] = r)
        }), t
      }
    },
    13950: (e, i, t) => {
      t.d(i, {
        S: () => I
      });
      var r = t(74848),
        s = t(1279),
        o = t(52114),
        a = t(6442),
        n = t(28202);
      const c = ({
          width: e,
          height: i
        }) => (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: e ?? 40,
          height: i ?? 40,
          viewBox: "0 0 40 40",
          fill: "none",
          children: [(0, r.jsx)("circle", {
            cx: "20",
            cy: "20",
            r: "20",
            fill: "#0B0E11"
          }), (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.0831 12.5062L14.7103 17.8816L11.5841 14.7537L20.0831 6.25L28.585 14.7565L25.4587 17.8843L20.0831 12.5062ZM9.37642 16.9619L6.25 20.0899L9.37624 23.2176L12.5026 20.0897L9.37642 16.9619ZM14.7102 22.2992L20.083 27.6746L25.4585 22.2966L28.5865 25.4228L28.5849 25.4245L20.083 33.9308L11.5837 25.4274L11.5793 25.4229L14.7102 22.2992ZM30.7904 16.9635L27.664 20.0915L30.7902 23.2192L33.9166 20.0913L30.7904 16.9635Z",
            fill: "#F3BA2E"
          }), (0, r.jsx)("path", {
            d: "M23.2541 20.0897H23.2555L20.0831 16.9157L17.7386 19.2613H17.7385L17.4692 19.5309L16.9136 20.0869L16.9092 20.0912L16.9136 20.0957L20.0831 23.267L23.2555 20.093L23.257 20.0912L23.2541 20.0897Z",
            fill: "#F3BA2E"
          })]
        }),
        l = ({
          width: e,
          height: i
        }) => (0, r.jsxs)("svg", {
          width: e ?? 17,
          height: i ?? 16,
          viewBox: "0 0 17 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, r.jsx)("path", {
            d: "M8.25 16C12.6683 16 16.25 12.4183 16.25 8C16.25 3.58172 12.6683 0 8.25 0C3.83172 0 0.25 3.58172 0.25 8C0.25 12.4183 3.83172 16 8.25 16Z",
            fill: "#0052FF"
          }), (0, r.jsx)("path", {
            d: "M8.31719 5.65359C9.25906 5.65359 10.0062 6.23453 10.29 7.09844H12.1875C11.8438 5.25141 10.3198 4 8.33234 4C6.07531 4 4.3125 5.71328 4.3125 8.00766C4.3125 10.302 6.03125 12 8.33234 12C10.2753 12 11.8295 10.7486 12.1736 8.88625H10.2898C10.0208 9.75031 9.27422 10.3464 8.33172 10.3464C7.03125 10.3464 6.11984 9.34812 6.11984 8.00766C6.12047 6.65188 7.01719 5.65359 8.31719 5.65359Z",
            fill: "white"
          })]
        });
      var d = t(871),
        g = t(47637),
        p = t(63369),
        h = t(29584),
        v = t(41327),
        u = t(47767),
        m = t(85266);
      const I = ({
        assetId: e,
        walletAddress: i,
        label: t,
        mobilePlatform: I,
        pageViewSource: w,
        onProviderSelect: f
      }) => {
        const {
          formatMessage: N
        } = (0, a.A)(), y = (0, u.Zp)(), {
          navigationOrigin: M
        } = (0, m.o)();
        (0, p.K)({
          event: h.Un.FUND_CEX_FUNDING_PROVIDERS,
          props: null
        });
        const {
          getFundingLink: A
        } = (0, g.v)(), C = (0, d.J)(e), x = {
          [n.M$.BINANCE]: (0, r.jsx)(c, {}),
          [n.M$.COINBASE]: (0, r.jsx)(l, {
            width: 40,
            height: 40
          })
        }, L = Object.keys(C);
        return L.length ? (0, r.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [(0, r.jsx)(o.E, {
            type: s.jK.SUBHEADER_14,
            weight: s.nG.MEDIUM,
            children: t
          }), (0, r.jsx)("div", {
            className: "bg-background-2 rounded-4 px-4 py-2",
            children: L.map(t => (0, r.jsxs)("div", {
              className: "flex items-center justify-between py-1 h-15 cursor-pointer",
              "data-testid": "cex-funding-provider-" + t,
              onClick: () => (t => {
                n.tv.includes(t) ? y(`/fund/cex/${t}/platform`, {
                  state: {
                    pageViewSource: w,
                    assetId: e,
                    walletAddress: i,
                    originalNavigationOrigin: M
                  }
                }) : e && i ? A({
                  providerId: t,
                  assetId: e,
                  walletAddress: i,
                  pageViewSource: w,
                  mobilePlatform: I
                }) : f ? f(t) : y(`/fund/cex/${t}/platform/assets`, {
                  state: {
                    originalNavigationOrigin: M
                  }
                })
              })(t),
              children: [(0, r.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [x[t], (0, r.jsx)(o.E, {
                  type: s.jK.SUBHEADER_14,
                  weight: s.nG.MEDIUM,
                  children: N({
                    id: "modal-receive.cex-funding-providers",
                    defaultMessage: "Deposit from {providerName}"
                  }, {
                    providerName: n.sP[t]
                  })
                })]
              }), (0, r.jsx)(v.v, {
                width: 20,
                height: 20,
                colorClass: "text-iconNormal"
              })]
            }, t))
          })]
        }) : null
      }
    },
    28945: (e, i, t) => {
      t.d(i, {
        M: () => l,
        r: () => h
      });
      var r, s = t(74848),
        o = t(28898),
        a = t(97283),
        n = t.n(a),
        c = t(96540),
        l = (t.n(c), (r = l || {})[r.MEDIUM = 180] = "MEDIUM", r[r.LARGE = 200] = "LARGE", r[r.XLARGE = 290] = "XLARGE", r);
      const d = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1NyIgdmlld0JveD0iMCAwIDUwIDU3IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMC42Mzk2NDggOC40MjkzOUwyNC45OTk1IDAuMzg2NzE5VjU2LjA2NjdDNy41OTk1OSA0OC42NDI3IDAuNjM5NjQ4IDM0LjQxMzQgMC42Mzk2NDggMjYuMzcwN1Y4LjQyOTM5WiIgZmlsbD0iIzA1MDBGRiIvPgogIDxwYXRoIGQ9Ik00OS4zNjA0IDguNDI5MzlMMjUuMDAwNSAwLjM4NjcxOVY1Ni4wNjY3QzQyLjQwMDQgNDguNjQyNyA0OS4zNjA0IDM0LjQxMzQgNDkuMzYwNCAyNi4zNzA3VjguNDI5MzlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTQ5OF83OTA0KSIvPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE0OThfNzkwNCIgeDE9IjQzLjk0NjYiIHkxPSItMy4xNzA1MSIgeDI9IjI1LjAxMjUiIHkyPSI1NS40NzUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4wMjExMiIgc3RvcC1jb2xvcj0iIzAwMDBGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDc2MjQyMyIgc3RvcC1jb2xvcj0iIzAwOTRGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMTYzMDg5IiBzdG9wLWNvbG9yPSIjNDhGRjkxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC40MjAwNDkiIHN0b3AtY29sb3I9IiMwMDk0RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjY4Mjg4NiIgc3RvcC1jb2xvcj0iIzAwMzhGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuOTAyNDY1IiBzdG9wLWNvbG9yPSIjMDUwMEZGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+",
        g = "#1B1B1C",
        p = "#fff",
        h = ({
          data: e,
          size: i = 180,
          customLogo: t,
          errorCorrectionLevel: r = "Q",
          showBorder: a
        }) => {
          const {
            theme: l
          } = (0, o.h)(), h = (0, c.useRef)(null), v = {
            180: 7,
            200: 10,
            290: 10
          }, u = (0, c.useMemo)(() => new(n())({
            type: "svg",
            width: i,
            height: i,
            data: e,
            margin: v[i],
            qrOptions: {
              typeNumber: 0,
              mode: "Byte",
              errorCorrectionLevel: r
            },
            imageOptions: {
              hideBackgroundDots: !0,
              imageSize: t ? .3 : .6,
              margin: t ? 14 : 3
            },
            dotsOptions: {
              type: "dots",
              color: g
            },
            backgroundOptions: {
              color: p,
              round: .12
            },
            image: d,
            cornersSquareOptions: {
              type: "extra-rounded",
              color: g
            },
            cornersDotOptions: {
              type: "dot",
              color: g
            }
          }), []);
          return (0, c.useEffect)(() => {
            h.current && u.append(h.current)
          }, [h.current]), (0, c.useEffect)(() => {
            u.update({
              data: e,
              dotsOptions: {
                color: g
              },
              backgroundOptions: {
                color: p
              },
              image: d,
              cornersSquareOptions: {
                color: g
              },
              cornersDotOptions: {
                color: g
              }
            })
          }, [e, l]), (0, s.jsxs)("div", {
            className: "relative",
            children: [(0, s.jsx)("div", {
              ref: h,
              className: a ? "w-fit border-[2px] border-utility-1-opacity-5 rounded-4 p-4" : ""
            }), t && (0, s.jsx)("div", {
              className: "absolute inset-0 -left-[3px] -top-[2px] flex items-center justify-center pointer-events-none",
              children: (0, s.jsx)("div", {
                className: "w-12 h-12 flex items-center justify-center",
                children: t
              })
            })]
          })
        }
    },
    47637: (e, i, t) => {
      t.d(i, {
        v: () => p
      });
      var r = t(64145),
        s = t(89408),
        o = t(68869),
        a = t(29584),
        n = t(26113),
        c = t(28202),
        l = t(23207),
        d = t(84240),
        g = t(47767);
      const p = () => {
        const {
          trackAnalytics: e
        } = (0, l.s)(), i = (0, d.c)(), t = (0, g.Zp)();
        return {
          getFundingLink: l => ((e, i, t) => new Promise((e, r) => {
            var s = e => {
                try {
                  a(t.next(e))
                } catch (e) {
                  r(e)
                }
              },
              o = e => {
                try {
                  a(t.throw(e))
                } catch (e) {
                  r(e)
                }
              },
              a = i => i.done ? e(i.value) : Promise.resolve(i.value).then(s, o);
            a((t = t.apply(null, i)).next())
          }))(0, [l], function*({
            providerId: l,
            assetId: d,
            walletAddress: g,
            pageViewSource: p,
            mobilePlatform: h
          }) {
            try {
              const i = yield r.YW.emit(s.A.FETCH_CEX_FUNDING_LINK, {
                providerId: l,
                assetId: d,
                walletAddress: g,
                pageViewSource: p,
                mobilePlatform: h
              });
              e({
                event: a.BQ.RECEIVE_CEX_FUNDING_CLICK,
                props: {
                  providerId: l,
                  pageViewSource: p
                }
              });
              const o = c.tv.includes(l) && h;
              if (!i) throw Error();
              o ? t("/fund/cex/qr", {
                state: {
                  providerId: l,
                  fundingLink: i
                }
              }) : (0, n.sP)(i)
            } catch (e) {
              e.message.includes("transfer unsupported by provider") ? i("modal-receive.funding-link.asset-not-supported", "This asset is currently not supported for this operation") : i("modal-receive.funding-link-not-found", "Something went wrong, please try again later"), (0, o.C)(Error("Receive Cex Funding Link Fetch Unsuccessful"), {
                providerId: l,
                assetId: d,
                walletAddress: g
              })
            }
          })
        }
      }
    },
    64213: (e, i, t) => {
      t.r(i), t.d(i, {
        default: () => F
      });
      var r = t(74848),
        s = t(62184),
        o = t(68656),
        a = t(16276),
        n = t(29584),
        c = t(23207),
        l = t(75395),
        d = t(13950),
        g = t(73082),
        p = t(26264),
        h = t(65512),
        v = t(52619),
        u = t(22146),
        m = t(52114),
        I = t(1279),
        w = t(21612),
        f = t(6442);
      const N = ({
        opened: e,
        onClose: i
      }) => {
        const {
          formatMessage: t
        } = (0, f.A)(), s = (0, w.s)();
        return (0, r.jsx)(u.a, {
          opened: e,
          onClose: i,
          title: t({
            id: "backup-seedphrase-cta.receive-crypto-header"
          }),
          children: (0, r.jsxs)("div", {
            className: "flex flex-col items-center space-y-2.5 text-center",
            children: [(0, r.jsx)(g.X, {}), (0, r.jsx)(m.E, {
              testid: "before-receive-modal-title",
              type: I.jK.HEADER,
              children: t({
                id: "backup-seedphrase-cta.receive-crypto-header"
              })
            }), (0, r.jsx)(m.E, {
              weight: I.nG.NORMAL,
              theme: I.Il.SECONDARY,
              children: t({
                id: "backup-seedphrase-cta.body"
              })
            }), (0, r.jsxs)("div", {
              className: "w-full flex flex-col space-y-5 pt-5",
              children: [(0, r.jsx)(h.$, {
                testid: "before-receive-modal-backup-button",
                onClick: () => s(p.b.ONBOARDING + "?flow=BACKUP_SEEDPHRASE"),
                children: t({
                  id: "backup-seedphrase-cta.back-up-secret-phrase-button"
                })
              }), (0, r.jsx)(h.$, {
                testid: "before-receive-proceed-button",
                theme: v.ry.TRANSPARENT,
                noPadding: !0,
                onClick: () => {
                  i()
                },
                children: (0, r.jsx)(m.E, {
                  theme: I.Il.BRAND,
                  type: I.jK.TITLE,
                  children: t({
                    id: "modal-remove-wallet.proceed-anyway"
                  })
                })
              })]
            })]
          })
        })
      };
      var y = t(62942),
        M = t(63111),
        A = t(65504),
        C = t(55418),
        x = t(4800),
        L = t(99550),
        b = t(28945),
        k = t(68632),
        j = t(26858),
        z = t(67658),
        D = t(40790),
        S = t(9702),
        O = t(96540),
        P = t(47767),
        Z = t(85266);
      const B = () => {
        var e, i;
        const {
          formatMessage: t
        } = (0, f.A)(), g = (0, P.Zp)(), {
          assetId: p
        } = (0, P.g)(), h = (0, j.Mr)(p), u = (0, z.A)(h), w = (0, D.F7)(u.coinId), B = (0, l.L)(h.blockchainId), {
          trackAnalytics: R
        } = (0, c.s)(), G = (0, S.D)(), V = (0, O.useRef)(!1), [Q, Y] = (0, O.useState)(!1), {
          navigationOrigin: E,
          clearNavigationOrigin: F
        } = (0, Z.o)(), W = (0, O.useMemo)(() => {
          var e;
          return null != (e = w?.address) ? e : B
        }, [w, B]), H = (0, D.N4)(W);
        return (0, O.useEffect)(() => {
          G && !V.current && (Y(!0), V.current = !0)
        }, [G]), H && h ? (0, r.jsxs)(x.LN, {
          children: [(0, r.jsx)(x.zY, {
            title: t({
              id: "modal-receive.title"
            }, {
              assetSymbol: h?.symbol
            }),
            backAction: () => {
              E ? (F(), g(E)) : g("/receive")
            }
          }), (0, r.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [(0, r.jsx)(y.F, {
              theme: M.Z.WARNING,
              children: t({
                id: "generic.modal-receive-warning-alert",
                defaultMessage: "Only send {assetName} ({assetType}) assets to this address. Other assets will be lost forever."
              }, {
                assetName: h?.name,
                assetType: null != (i = h.type) ? i : h.symbol
              })
            }), (0, r.jsx)(C.o, {
              children: (0, r.jsx)(b.r, {
                data: H,
                customLogo: (0, r.jsx)(a.D, {
                  children: (0, r.jsx)(A.q, {
                    name: h.name,
                    network: h.address ? u : void 0,
                    src: h.iconUrl,
                    size: k.Y.MEDIUM
                  })
                })
              })
            }), (0, r.jsx)("div", {
              className: "w-[250px] mx-auto",
              children: (0, r.jsx)(s.i, {
                disableRegister: u.isCustom,
                coinId: u.coinId,
                address: H,
                onCopy: () => {
                  R({
                    event: n.BQ.COPY_ADDRESS,
                    props: {
                      pageViewSource: n.Un.RECEIVE
                    }
                  })
                },
                shape: v.dB.DEFAULT,
                size: v.Vp.LARGE,
                theme: v.ry.SECONDARY,
                className: "overflow-hidden !py-2",
                children: (0, r.jsx)("div", {
                  className: "overflow-hidden break-words",
                  children: (0, r.jsx)(m.E, {
                    type: I.jK.SUBHEADER_14,
                    weight: I.nG.MEDIUM,
                    theme: I.Il.UTILITY_1_DEFAULT,
                    testid: "account-address",
                    children: W
                  })
                })
              })
            }), (0, r.jsx)(d.S, {
              label: t({
                id: "modal-receive.cex-funding-providers",
                defaultMessage: "Deposit from exchange"
              }),
              assetId: h.assetId,
              walletAddress: H,
              pageViewSource: n.Un.RECEIVE
            })]
          }), (0, r.jsx)(N, {
            opened: Q,
            onClose: () => Y(!1)
          })]
        }) : (0, r.jsxs)(C.o, {
          direction: L.R.COLUMN,
          children: [(0, r.jsx)("div", {
            children: (0, r.jsx)(o.L, {})
          }), (0, r.jsx)("div", {
            className: "pt-3",
            children: (0, r.jsx)(m.E, {
              children: t({
                id: "modal-receive.account-does-not-exist"
              }, {
                asset: null != (e = h?.name) ? e : "Asset not provided"
              })
            })
          })]
        })
      };
      var R = t(96919),
        G = t(63369),
        V = t(8360),
        Q = t(3330),
        Y = t(29189);
      const E = () => {
          (0, G.K)({
            event: n.Un.RECEIVE,
            props: null
          });
          const {
            formatMessage: e
          } = (0, f.A)(), i = (0, P.Zp)(), [t, s] = (0, O.useState)(""), o = (0, Y.f)(), [a, c] = (0, O.useState)(o ?? void 0);
          return (0, r.jsxs)(x.LN, {
            children: [(0, r.jsx)(x.zY, {
              backAction: () => {
                i("/fund")
              },
              title: e({
                id: "select-asset.receive.title",
                defaultMessage: "Select asset to receive"
              })
            }), (0, r.jsxs)(x.Gv, {
              children: [(0, r.jsxs)("div", {
                className: "flex flex-col space-y-4 mb-4",
                children: [(0, r.jsx)(V.D, {
                  value: t,
                  onChange: e => s(e.target.value),
                  placeholder: e({
                    id: "component.input-asset-search.placeholder"
                  })
                }), (0, r.jsx)(Q.u, {
                  showText: !0,
                  localFilteringBlockchainId: a,
                  onFilterChange: e => c(e ?? void 0)
                })]
              }), (0, r.jsx)(x.LO, {
                children: (0, r.jsx)(R.U, {
                  searchQuery: t,
                  onAssetRowClick: e => ((e, i, t) => new Promise((e, i) => {
                    var r = e => {
                        try {
                          o(t.next(e))
                        } catch (e) {
                          i(e)
                        }
                      },
                      s = e => {
                        try {
                          o(t.throw(e))
                        } catch (e) {
                          i(e)
                        }
                      },
                      o = i => i.done ? e(i.value) : Promise.resolve(i.value).then(r, s);
                    o((t = t.apply(null, null)).next())
                  }))(0, 0, function*() {
                    i(`${p.b.RECEIVE}/${e.assetId}`)
                  }),
                  targetBlockchainId: a,
                  emptyMessage: e({
                    id: "token-asset-list.empty-search-caption"
                  }),
                  showNetworkName: !0,
                  alwaysShowAllAssets: !0
                })
              })]
            })]
          })
        },
        F = () => (0, r.jsxs)(P.BV, {
          children: [(0, r.jsx)(P.qh, {
            index: !0,
            element: (0, r.jsx)(E, {})
          }), (0, r.jsx)(P.qh, {
            path: "/:assetId",
            element: (0, r.jsx)(B, {})
          })]
        })
    },
    84240: (e, i, t) => {
      t.d(i, {
        c: () => o
      });
      var r = t(68157),
        s = t(61855);
      const o = () => (e, i, t = {}) => {
        r.M_.dispatch(s.A.actions.addToast({
          id: crypto.randomUUID(),
          i18n: {
            message: {
              id: e,
              defaultMessage: i
            },
            params: t
          }
        }))
      }
    },
    85266: (e, i, t) => {
      t.d(i, {
        o: () => a
      });
      var r = t(96540),
        s = (t.n(r), t(68157)),
        o = t(61855);
      const a = () => {
        const e = (0, s.jL)();
        return {
          navigationOrigin: (0, s.GV)(e => e.app.navigationOrigin),
          setNavigationOrigin: (0, r.useCallback)(i => {
            e(o.A.actions.setNavigationOrigin(i))
          }, [e]),
          clearNavigationOrigin: (0, r.useCallback)(() => {
            e(o.A.actions.clearNavigationOrigin())
          }, [e])
        }
      }
    }
  }
]);
