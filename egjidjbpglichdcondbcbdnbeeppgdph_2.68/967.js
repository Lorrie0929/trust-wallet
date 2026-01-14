"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [967], {
    871: (e, t, i) => {
      i.d(t, {
        J: () => n
      });
      var r = i(68157);
      const n = e => {
        const t = (0, r.GV)(e => e.asset.cexFundingAssets);
        if (!e) return t;
        const i = {};
        return Object.entries(t).forEach(([t, r]) => {
          r.includes(e) && (i[t] = r)
        }), i
      }
    },
    13950: (e, t, i) => {
      i.d(t, {
        S: () => f
      });
      var r = i(74848),
        n = i(1279),
        l = i(52114),
        o = i(6442),
        s = i(28202);
      const d = ({
          width: e,
          height: t
        }) => (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: e ?? 40,
          height: t ?? 40,
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
        a = ({
          width: e,
          height: t
        }) => (0, r.jsxs)("svg", {
          width: e ?? 17,
          height: t ?? 16,
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
      var c = i(871),
        C = i(47637),
        h = i(63369),
        g = i(29584),
        u = i(41327),
        p = i(47767),
        v = i(85266);
      const f = ({
        assetId: e,
        walletAddress: t,
        label: i,
        mobilePlatform: f,
        pageViewSource: m,
        onProviderSelect: w
      }) => {
        const {
          formatMessage: I
        } = (0, o.A)(), M = (0, p.Zp)(), {
          navigationOrigin: x
        } = (0, v.o)();
        (0, h.K)({
          event: g.Un.FUND_CEX_FUNDING_PROVIDERS,
          props: null
        });
        const {
          getFundingLink: y
        } = (0, C.v)(), N = (0, c.J)(e), L = {
          [s.M$.BINANCE]: (0, r.jsx)(d, {}),
          [s.M$.COINBASE]: (0, r.jsx)(a, {
            width: 40,
            height: 40
          })
        }, A = Object.keys(N);
        return A.length ? (0, r.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [(0, r.jsx)(l.E, {
            type: n.jK.SUBHEADER_14,
            weight: n.nG.MEDIUM,
            children: i
          }), (0, r.jsx)("div", {
            className: "bg-background-2 rounded-4 px-4 py-2",
            children: A.map(i => (0, r.jsxs)("div", {
              className: "flex items-center justify-between py-1 h-15 cursor-pointer",
              "data-testid": "cex-funding-provider-" + i,
              onClick: () => (i => {
                s.tv.includes(i) ? M(`/fund/cex/${i}/platform`, {
                  state: {
                    pageViewSource: m,
                    assetId: e,
                    walletAddress: t,
                    originalNavigationOrigin: x
                  }
                }) : e && t ? y({
                  providerId: i,
                  assetId: e,
                  walletAddress: t,
                  pageViewSource: m,
                  mobilePlatform: f
                }) : w ? w(i) : M(`/fund/cex/${i}/platform/assets`, {
                  state: {
                    originalNavigationOrigin: x
                  }
                })
              })(i),
              children: [(0, r.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [L[i], (0, r.jsx)(l.E, {
                  type: n.jK.SUBHEADER_14,
                  weight: n.nG.MEDIUM,
                  children: I({
                    id: "modal-receive.cex-funding-providers",
                    defaultMessage: "Deposit from {providerName}"
                  }, {
                    providerName: s.sP[i]
                  })
                })]
              }), (0, r.jsx)(u.v, {
                width: 20,
                height: 20,
                colorClass: "text-iconNormal"
              })]
            }, i))
          })]
        }) : null
      }
    },
    20002: (e, t, i) => {
      i.d(t, {
        g: () => n
      });
      var r, n = ((r = n || {}).MOBILE_PAY = "MOBILE_PAY", r.BANK_TRANSFER = "BANK_TRANSFER", r.CREDIT_CARD = "CREDIT_CARD", r.DIGITAL_WALLET = "DIGITAL_WALLET", r.P2P = "P2P", r.OTHER = "OTHER", r)
    },
    28945: (e, t, i) => {
      i.d(t, {
        M: () => a,
        r: () => g
      });
      var r, n = i(74848),
        l = i(28898),
        o = i(97283),
        s = i.n(o),
        d = i(96540),
        a = (i.n(d), (r = a || {})[r.MEDIUM = 180] = "MEDIUM", r[r.LARGE = 200] = "LARGE", r[r.XLARGE = 290] = "XLARGE", r);
      const c = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1NyIgdmlld0JveD0iMCAwIDUwIDU3IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMC42Mzk2NDggOC40MjkzOUwyNC45OTk1IDAuMzg2NzE5VjU2LjA2NjdDNy41OTk1OSA0OC42NDI3IDAuNjM5NjQ4IDM0LjQxMzQgMC42Mzk2NDggMjYuMzcwN1Y4LjQyOTM5WiIgZmlsbD0iIzA1MDBGRiIvPgogIDxwYXRoIGQ9Ik00OS4zNjA0IDguNDI5MzlMMjUuMDAwNSAwLjM4NjcxOVY1Ni4wNjY3QzQyLjQwMDQgNDguNjQyNyA0OS4zNjA0IDM0LjQxMzQgNDkuMzYwNCAyNi4zNzA3VjguNDI5MzlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTQ5OF83OTA0KSIvPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE0OThfNzkwNCIgeDE9IjQzLjk0NjYiIHkxPSItMy4xNzA1MSIgeDI9IjI1LjAxMjUiIHkyPSI1NS40NzUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4wMjExMiIgc3RvcC1jb2xvcj0iIzAwMDBGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDc2MjQyMyIgc3RvcC1jb2xvcj0iIzAwOTRGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMTYzMDg5IiBzdG9wLWNvbG9yPSIjNDhGRjkxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC40MjAwNDkiIHN0b3AtY29sb3I9IiMwMDk0RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjY4Mjg4NiIgc3RvcC1jb2xvcj0iIzAwMzhGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuOTAyNDY1IiBzdG9wLWNvbG9yPSIjMDUwMEZGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+",
        C = "#1B1B1C",
        h = "#fff",
        g = ({
          data: e,
          size: t = 180,
          customLogo: i,
          errorCorrectionLevel: r = "Q",
          showBorder: o
        }) => {
          const {
            theme: a
          } = (0, l.h)(), g = (0, d.useRef)(null), u = {
            180: 7,
            200: 10,
            290: 10
          }, p = (0, d.useMemo)(() => new(s())({
            type: "svg",
            width: t,
            height: t,
            data: e,
            margin: u[t],
            qrOptions: {
              typeNumber: 0,
              mode: "Byte",
              errorCorrectionLevel: r
            },
            imageOptions: {
              hideBackgroundDots: !0,
              imageSize: i ? .3 : .6,
              margin: i ? 14 : 3
            },
            dotsOptions: {
              type: "dots",
              color: C
            },
            backgroundOptions: {
              color: h,
              round: .12
            },
            image: c,
            cornersSquareOptions: {
              type: "extra-rounded",
              color: C
            },
            cornersDotOptions: {
              type: "dot",
              color: C
            }
          }), []);
          return (0, d.useEffect)(() => {
            g.current && p.append(g.current)
          }, [g.current]), (0, d.useEffect)(() => {
            p.update({
              data: e,
              dotsOptions: {
                color: C
              },
              backgroundOptions: {
                color: h
              },
              image: c,
              cornersSquareOptions: {
                color: C
              },
              cornersDotOptions: {
                color: C
              }
            })
          }, [e, a]), (0, n.jsxs)("div", {
            className: "relative",
            children: [(0, n.jsx)("div", {
              ref: g,
              className: o ? "w-fit border-[2px] border-utility-1-opacity-5 rounded-4 p-4" : ""
            }), i && (0, n.jsx)("div", {
              className: "absolute inset-0 -left-[3px] -top-[2px] flex items-center justify-center pointer-events-none",
              children: (0, n.jsx)("div", {
                className: "w-12 h-12 flex items-center justify-center",
                children: i
              })
            })]
          })
        }
    },
    31441: (e, t, i) => {
      i.d(t, {
        D: () => n
      });
      var r = i(74848);
      const n = ({
        width: e,
        height: t,
        colorClass: i
      }) => (0, r.jsxs)("svg", {
        className: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 20 20",
        fill: "none",
        children: [(0, r.jsx)("path", {
          d: "M18.0748 7.90867L14.5998 4.30034C14.2415 3.92534 13.6498 3.917 13.2748 4.27534C12.8998 4.63367 12.8915 5.22534 13.2498 5.60034L15.1915 7.617H3.23314C2.71647 7.617 2.2998 8.03367 2.2998 8.55034C2.2998 9.067 2.71647 9.48367 3.23314 9.48367H17.3998C17.6331 9.48367 17.8665 9.40034 18.0498 9.22534C18.4248 8.867 18.4331 8.27534 18.0748 7.90034V7.90867Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M16.7664 11.167H2.59975C2.36642 11.167 2.13308 11.2503 1.94975 11.4253C1.57475 11.7837 1.56642 12.3753 1.92475 12.7503L5.39975 16.3587C5.75808 16.7337 6.34975 16.742 6.72475 16.3837C7.09975 16.0253 7.10809 15.4337 6.74975 15.0587L4.80808 13.042H16.7748C17.2914 13.042 17.7081 12.6253 17.7081 12.1087C17.7081 11.592 17.2914 11.1753 16.7748 11.1753L16.7664 11.167Z",
          fill: "currentColor"
        })]
      })
    },
    47637: (e, t, i) => {
      i.d(t, {
        v: () => h
      });
      var r = i(64145),
        n = i(89408),
        l = i(68869),
        o = i(29584),
        s = i(26113),
        d = i(28202),
        a = i(23207),
        c = i(84240),
        C = i(47767);
      const h = () => {
        const {
          trackAnalytics: e
        } = (0, a.s)(), t = (0, c.c)(), i = (0, C.Zp)();
        return {
          getFundingLink: a => ((e, t, i) => new Promise((e, r) => {
            var n = e => {
                try {
                  o(i.next(e))
                } catch (e) {
                  r(e)
                }
              },
              l = e => {
                try {
                  o(i.throw(e))
                } catch (e) {
                  r(e)
                }
              },
              o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, l);
            o((i = i.apply(null, t)).next())
          }))(0, [a], function*({
            providerId: a,
            assetId: c,
            walletAddress: C,
            pageViewSource: h,
            mobilePlatform: g
          }) {
            try {
              const t = yield r.YW.emit(n.A.FETCH_CEX_FUNDING_LINK, {
                providerId: a,
                assetId: c,
                walletAddress: C,
                pageViewSource: h,
                mobilePlatform: g
              });
              e({
                event: o.BQ.RECEIVE_CEX_FUNDING_CLICK,
                props: {
                  providerId: a,
                  pageViewSource: h
                }
              });
              const l = d.tv.includes(a) && g;
              if (!t) throw Error();
              l ? i("/fund/cex/qr", {
                state: {
                  providerId: a,
                  fundingLink: t
                }
              }) : (0, s.sP)(t)
            } catch (e) {
              e.message.includes("transfer unsupported by provider") ? t("modal-receive.funding-link.asset-not-supported", "This asset is currently not supported for this operation") : t("modal-receive.funding-link-not-found", "Something went wrong, please try again later"), (0, l.C)(Error("Receive Cex Funding Link Fetch Unsuccessful"), {
                providerId: a,
                assetId: c,
                walletAddress: C
              })
            }
          })
        }
      }
    },
    57528: (e, t, i) => {
      i.d(t, {
        L: () => n
      });
      var r = i(74848);
      const n = ({
        children: e,
        className: t
      }) => (0, r.jsx)("div", {
        className: "bg-background-secondary rounded-4 [& > *]:h-[52px] " + (t || ""),
        children: e
      })
    },
    70967: (e, t, i) => {
      i.r(t), i.d(t, {
        default: () => J
      });
      var r = i(74848),
        n = i(29584),
        l = i(63369),
        o = i(57528),
        s = i(4800),
        d = i(6442),
        a = i(47767),
        c = i(26264),
        C = i(23207),
        h = i(20002);
      const g = ({
        width: e,
        height: t,
        colorClass: i
      }) => (0, r.jsxs)("svg", {
        className: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 20,
        height: t ?? 20,
        viewBox: "0 0 17 13",
        fill: "none",
        children: [(0, r.jsxs)("g", {
          clipPath: "url(#clip0_10654_4700)",
          children: [(0, r.jsx)("path", {
            d: "M15 0H1.66667C0.75 0 0 0.808333 0 1.79167V10.9083C0 11.8917 0.75 12.7 1.66667 12.7H15C15.925 12.7 16.6667 11.8917 16.6667 10.9083V1.79167C16.6667 0.808333 15.925 0 15 0ZM14.7917 1.875V2.39167H1.875V1.875H14.7917ZM1.875 10.8333V4.26667H14.7917V10.8333H1.875Z",
            fill: "currentColor"
          }), (0, r.jsx)("path", {
            d: "M12.8171 5H10.9421C10.4255 5 10.0088 5.41667 10.0088 5.93333C10.0088 6.45 10.4255 6.86667 10.9421 6.86667H12.8171C13.3338 6.86667 13.7505 6.45 13.7505 5.93333C13.7505 5.41667 13.3338 5 12.8171 5Z",
            fill: "currentColor"
          })]
        }), (0, r.jsx)("defs", {
          children: (0, r.jsx)("clipPath", {
            id: "clip0_10654_4700",
            children: (0, r.jsx)("rect", {
              width: "16.6667",
              height: "12.7083",
              fill: "white"
            })
          })
        })]
      });
      var u = i(31441);
      const p = ({
        width: e,
        height: t,
        colorClass: i
      }) => (0, r.jsxs)("svg", {
        className: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 20,
        height: t ?? 20,
        viewBox: "0 0 18 13",
        fill: "none",
        children: [(0, r.jsx)("path", {
          d: "M12.208 6.33333C13.8663 6.33333 15.2163 4.90834 15.2163 3.16667C15.2163 1.425 13.8663 0 12.208 0C10.5497 0 9.20801 1.425 9.20801 3.16667C9.20801 4.90834 10.558 6.33333 12.208 6.33333ZM10.9413 3.16667C10.9413 2.375 11.508 1.73333 12.2163 1.73333C12.9247 1.73333 13.4913 2.375 13.4913 3.16667C13.4913 3.95834 12.9247 4.6 12.2163 4.6C11.508 4.6 10.9413 3.95834 10.9413 3.16667Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M5.30762 7.32454C6.96595 7.32454 8.31595 5.89955 8.31595 4.15789C8.31595 2.41622 6.96595 0.991211 5.30762 0.991211C3.64928 0.991211 2.30762 2.41622 2.30762 4.15789C2.30762 5.89955 3.65762 7.32454 5.30762 7.32454ZM4.03262 4.14954C4.03262 3.35788 4.59928 2.71621 5.30762 2.71621C6.01595 2.71621 6.58262 3.35788 6.58262 4.14954C6.58262 4.94121 6.01595 5.58288 5.30762 5.58288C4.59928 5.58288 4.03262 4.94121 4.03262 4.14954Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M17.3578 9.52454C16.5078 7.75787 14.4912 6.61621 12.2162 6.61621C10.5995 6.61621 9.09116 7.19121 8.04116 8.19954C7.20783 7.80787 6.26616 7.59954 5.30783 7.59954C3.03283 7.59954 1.01616 8.74121 0.166164 10.5079C-0.0838362 11.0245 -0.0505029 11.6079 0.25783 12.0912C0.574497 12.5912 1.13283 12.9079 1.71616 12.9079H8.90783C9.55783 12.9079 10.1828 12.5079 10.4662 11.9245H15.8162C16.3995 11.9245 16.9578 11.6162 17.2745 11.1079C17.5828 10.6245 17.6162 10.0412 17.3662 9.52454H17.3578ZM8.84116 11.1829H1.76616C2.3495 10.0745 3.75783 9.3412 5.30783 9.3412C6.85783 9.3412 8.26616 10.0745 8.8495 11.1829H8.84116ZM15.7495 10.1912H10.2745C10.0662 9.84121 9.81616 9.5162 9.51616 9.22454C10.2412 8.6662 11.2078 8.34955 12.2078 8.34955C13.7578 8.34955 15.1662 9.08287 15.7495 10.1912Z",
          fill: "currentColor"
        })]
      });
      var v, f = i(21612),
        m = i(97286),
        w = i(64145),
        I = i(11711),
        M = ((v = M || {}).BUY_CRYPTO = "BUY_CRYPTO", v.BUY_P2P = "BUY_P2P", v.DEPOSIT_EXCHANGE = "DEPOSIT_EXCHANGE", v.RECEIVE_WALLET = "RECEIVE_WALLET", v);
      const x = ({
        width: e,
        height: t,
        colorClass: i
      }) => (0, r.jsx)("svg", {
        className: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 20,
        height: t ?? 20,
        viewBox: "0 0 20 20",
        fill: "none",
        children: (0, r.jsx)("path", {
          fillRule: "evenodd",
          "clip-rule": "evenodd",
          d: "M10.3304 1.68918C10.6269 1.77267 10.8658 1.98453 10.9822 2.26734L11.0238 2.36817L11.0329 6.63535L11.0421 10.9025L11.7113 10.2319C12.0793 9.86304 12.4317 9.52422 12.4944 9.47896C12.6454 9.36989 12.7835 9.32203 12.9772 9.31163C13.2541 9.29674 13.4689 9.37066 13.6623 9.54736C13.8762 9.74279 13.97 9.95471 13.97 10.2423C13.97 10.444 13.9282 10.5934 13.8297 10.7444C13.796 10.7961 13.0619 11.5428 12.1945 12.4079C10.4803 14.1173 10.5635 14.0434 10.2901 14.1013C10.1297 14.1352 10.0662 14.1352 9.90574 14.1013C9.6323 14.0433 9.71563 14.1175 8.0025 12.4079C7.13741 11.5445 6.40173 10.7965 6.36767 10.7455C6.26881 10.5976 6.22586 10.4452 6.22586 10.2423C6.22586 9.95471 6.31969 9.74279 6.53358 9.54736C6.72696 9.37066 6.94177 9.29674 7.2187 9.31163C7.39716 9.32122 7.54045 9.36645 7.67184 9.45465C7.72057 9.48736 8.07598 9.82839 8.46168 10.2125L9.16293 10.9109V6.688C9.16293 2.90585 9.16594 2.45337 9.19179 2.35248C9.26349 2.07266 9.49194 1.82481 9.7771 1.7175C9.9185 1.66428 10.1922 1.65028 10.3304 1.68918ZM16.7249 14.6069C17.1008 14.6697 17.4184 14.9826 17.4867 15.3573C17.5234 15.5587 17.481 16.0313 17.397 16.3565C17.2502 16.9248 16.9621 17.4244 16.5343 17.8521C16.0975 18.2889 15.5996 18.5734 15.0146 18.7202C14.6279 18.8173 14.8477 18.8132 10.0979 18.8132C5.34811 18.8132 5.56793 18.8173 5.18124 18.7202C4.59628 18.5734 4.09833 18.2889 3.66152 17.8521C3.2338 17.4244 2.94564 16.9248 2.79886 16.3565C2.71493 16.0315 2.67245 15.5588 2.70906 15.3573C2.78187 14.9568 3.1258 14.6436 3.54376 14.5972C3.91831 14.5556 4.31235 14.7775 4.47512 15.1216C4.54839 15.2765 4.55457 15.3053 4.57914 15.6074C4.61218 16.0136 4.71763 16.247 4.9921 16.5215C5.25267 16.7821 5.49905 16.899 5.86183 16.9343C6.09476 16.957 14.1011 16.957 14.334 16.9343C14.6968 16.899 14.9432 16.7821 15.2038 16.5215C15.4804 16.2448 15.5834 16.0149 15.6172 15.5986C15.6402 15.3151 15.6842 15.1587 15.7824 15.0117C15.8776 14.8691 15.9947 14.7679 16.1571 14.688C16.3382 14.5988 16.5207 14.5727 16.7249 14.6069Z",
          fill: "currentColor"
        })
      });
      var y = i(39255),
        N = i(51335),
        L = i(80589);
      const A = () => {
        (0, l.K)({
          event: n.Un.FUND,
          props: null
        });
        const {
          formatMessage: e
        } = (0, d.A)(), t = (0, a.Zp)(), {
          fundingMethods: i,
          allFundingOptions: v,
          isPendingFundingMethods: A
        } = (() => {
          var e;
          const {
            trackAnalytics: t
          } = (0, C.s)(), i = (0, a.Zp)(), l = (0, f.s)(), {
            data: o,
            isPending: s,
            isError: d
          } = (0, m.I)({
            queryKey: ["funding-methods"],
            queryFn: () => w.YW.emit(I.A.FETCH_FUNDING_METHODS)
          });
          return {
            fundingMethods: [{
              id: M.BUY_CRYPTO,
              translation: {
                id: "fund.buy-crypto.title",
                defaultMessage: "Buy crypto"
              },
              icon: (0, r.jsx)(g, {
                width: 20,
                height: 20,
                colorClass: "text-brand-primary"
              }),
              onClick: () => {
                t({
                  event: n.BQ.FUND_BUY_CRYPTO_CLICK,
                  props: {
                    pageViewSource: n.Un.FUND
                  }
                }), y.Ci ? i(c.b.BUY_NEW) : l(c.b.BUY, {
                  state: {
                    showBackButton: !0
                  }
                })
              }
            }, {
              id: M.DEPOSIT_EXCHANGE,
              translation: {
                id: "fund.cex-deposit.title",
                defaultMessage: "Deposit from exchange"
              },
              icon: (0, r.jsx)(u.D, {
                width: 20,
                height: 20,
                colorClass: "text-brand-primary"
              }),
              onClick: () => {
                t({
                  event: n.BQ.FUND_CEX_DEPOSIT_CLICK,
                  props: {
                    pageViewSource: n.Un.FUND
                  }
                }), i(c.b.FUND + "/cex")
              }
            }, {
              id: M.RECEIVE_WALLET,
              translation: {
                id: "fund.receive-crypto.title",
                defaultMessage: "Receive from another wallet"
              },
              icon: (0, r.jsx)(x, {
                width: 20,
                height: 20,
                colorClass: "text-brand-primary"
              }),
              onClick: () => {
                t({
                  event: n.BQ.FUND_RECEIVE_CRYPTO_CLICK,
                  props: {
                    pageViewSource: n.Un.FUND
                  }
                }), i(c.b.RECEIVE)
              }
            }, {
              id: M.BUY_P2P,
              translation: {
                id: "fund.buy-locally.title",
                defaultMessage: "Buy with P2P"
              },
              icon: (0, r.jsx)(p, {
                width: 20,
                height: 20,
                colorClass: "text-brand-primary"
              }),
              onClick: () => {
                t({
                  event: n.BQ.FUND_BUY_LOCALLY_CLICK,
                  props: {
                    pageViewSource: n.Un.FUND
                  }
                }), l(c.b.BUY + "/?paymentMethod=" + h.g.P2P, {
                  state: {
                    showBackButton: !0
                  }
                })
              }
            }],
            allFundingOptions: null != (e = o?.all_options) ? e : [],
            isPendingFundingMethods: s,
            isErrorFundingMethods: d
          }
        })();
        return (0, r.jsxs)(s.LN, {
          children: [(0, r.jsx)(s.zY, {
            title: e({
              id: "fund.header",
              defaultMessage: "Fund your wallet"
            }),
            backAction: () => {
              t("/")
            }
          }), (0, r.jsx)(s.Gv, {
            children: (0, r.jsx)(N.E, {
              className: "w-full h-72",
              isLoading: A,
              children: (0, r.jsx)(o.L, {
                children: v.map(({
                  id: t
                }) => {
                  const n = i.find(e => e.id === t);
                  return n ? (0, r.jsx)(L.r, {
                    iconStyle: L.p.PRIMARY,
                    icon: n.icon,
                    title: e(n.translation),
                    onClick: n.onClick,
                    isNavigation: !0,
                    className: "my-0"
                  }, t) : null
                })
              })
            })
          })]
        })
      };
      var b = i(13950),
        k = i(96540),
        P = i(28202);
      const j = () => {
          const {
            formatMessage: e
          } = (0, d.A)(), t = (0, a.Zp)(), {
            providerId: i
          } = (0, a.g)();
          return (0, k.useEffect)(() => {
            if (i) {
              const e = i;
              P.tv.includes(e) ? t(`/fund/cex/${e}/platform`) : t(`/fund/cex/${e}/assets`)
            }
          }, [i, t]), i ? null : (0, r.jsxs)(s.LN, {
            children: [(0, r.jsx)(s.zY, {
              title: e({
                id: "fund.header",
                defaultMessage: "Fund your wallet"
              }),
              backAction: () => {
                t("/fund")
              }
            }), (0, r.jsx)(s.Gv, {
              children: (0, r.jsx)(b.S, {
                label: e({
                  id: "fund.cex-deposit-providers.label",
                  defaultMessage: "Select a method"
                }),
                pageViewSource: n.Un.FUND_CEX_FUNDING_PROVIDERS,
                onProviderSelect: e => {
                  P.tv.includes(e) ? t(`/fund/cex/${e}/platform`) : t(`/fund/cex/${e}/assets`)
                }
              })
            })]
          })
        },
        S = () => {
          const e = (0, a.Zp)(),
            {
              providerId: t
            } = (0, a.g)();
          return (0, k.useEffect)(() => {
            t && Object.values(P.M$).includes(t) ? P.tv.includes(t) ? e(`/fund/cex/${t}/platform`) : e(`/fund/cex/${t}/assets`) : e("/fund/cex")
          }, [t, e]), null
        };
      var D = i(1279);
      const Z = ({
          width: e,
          height: t,
          colorClass: i
        }) => (0, r.jsx)("svg", {
          className: i,
          fill: "none",
          width: e ?? 20,
          height: t ?? 20,
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.3928 3.19086C15.7415 2.84218 15.7415 2.27685 15.3928 1.92817C15.0441 1.57949 14.4788 1.57949 14.1302 1.92817L12.5534 3.50489C11.7764 3.08357 10.8998 2.85713 9.99984 2.85713C9.09984 2.85713 8.22319 3.0836 7.44609 3.50498L5.86928 1.92817C5.5206 1.57949 4.95527 1.57949 4.60659 1.92817C4.25791 2.27685 4.25791 2.84218 4.60659 3.19086L6.03136 4.61563C5.47949 5.22417 5.07877 5.94728 4.85352 6.72618H15.1461C14.9209 5.94722 14.5201 5.22406 13.9682 4.6155L15.3928 3.19086ZM15.357 8.21428H4.64269V8.22782C3.88356 8.2971 3.16879 8.62974 2.62538 9.17316C2.01142 9.78711 1.6665 10.6198 1.6665 11.4881V13.2738C1.6665 13.7669 2.06625 14.1667 2.55936 14.1667C3.05247 14.1667 3.45222 13.7669 3.45222 13.2738V11.4881C3.45222 11.0934 3.609 10.7149 3.88808 10.4358C4.09592 10.228 4.35893 10.088 4.64269 10.0301V17.4405C4.64269 17.9336 5.04244 18.3333 5.53555 18.3333C6.02866 18.3333 6.42841 17.9336 6.42841 17.4405V15.3571H13.5713V17.4405C13.5713 17.9336 13.971 18.3333 14.4641 18.3333C14.9572 18.3333 15.357 17.9336 15.357 17.4405V10.0301C15.6408 10.088 15.9038 10.228 16.1116 10.4358C16.3907 10.7149 16.5475 11.0934 16.5475 11.4881V13.2738C16.5475 13.7669 16.9472 14.1667 17.4403 14.1667C17.9334 14.1667 18.3332 13.7669 18.3332 13.2738V11.4881C18.3332 10.6198 17.9883 9.78711 17.3742 9.17316C16.8309 8.62974 16.1161 8.2971 15.357 8.22782V8.21428Z",
            fill: "currentColor"
          })
        }),
        V = ({
          width: e,
          height: t,
          colorClass: i
        }) => (0, r.jsx)("svg", {
          className: i,
          fill: "none",
          width: e ?? 20,
          height: t ?? 20,
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.9241 2.85041C14.2902 2.4843 14.2902 1.8907 13.9241 1.52459C13.5581 1.15847 12.9645 1.15847 12.5983 1.52459L11.15 2.97299C10.7838 3.3391 10.7838 3.93269 11.15 4.29881C11.5161 4.66492 12.1097 4.66492 12.4758 4.29881L13.9241 2.85041ZM12.1855 5.07545C12.779 4.96271 13.3895 4.97645 13.9774 5.11574C14.5651 5.25502 15.117 5.51675 15.5967 5.88381C16.0765 6.25086 16.4735 6.71501 16.7617 7.24591C16.8507 7.4099 16.8617 7.60507 16.792 7.7781C16.7221 7.95111 16.5786 8.08386 16.4006 8.14007C15.8915 8.3009 15.4467 8.61959 15.1307 9.05C14.8147 9.48041 14.6439 10.0002 14.643 10.5342V10.544C14.6322 11.1558 14.846 11.7504 15.2439 12.2152C15.6419 12.6801 16.1962 12.9831 16.8025 13.0669C16.9789 13.0913 17.1364 13.1897 17.2357 13.3375C17.335 13.4853 17.3665 13.6684 17.3224 13.8409C16.9292 15.3779 16.1334 16.7822 15.0169 17.9094C15.0072 17.919 14.9974 17.9285 14.9871 17.9375C14.4165 18.4426 13.6854 18.7292 12.9235 18.7465C12.1668 18.7635 11.4284 18.5137 10.8375 18.0411C10.6603 17.9129 10.4471 17.8439 10.2281 17.8439C10.0065 17.8439 9.79068 17.9146 9.61217 18.0459C9.02286 18.4911 8.26608 18.7901 7.46616 18.7456C6.666 18.7011 5.94058 18.3196 5.40282 17.8095C5.39457 17.8016 5.38655 17.7936 5.37873 17.7854C3.9153 16.237 2.99833 14.2527 2.76723 12.1352C2.48718 10.5561 2.75033 8.92862 3.51403 7.51814C3.79912 6.95955 4.19731 6.46634 4.68331 6.06986C5.17155 5.67156 5.73763 5.37969 6.34528 5.21296C6.95292 5.04624 7.58871 5.00835 8.21185 5.10171C8.82982 5.1943 9.42183 5.41395 9.95058 5.74675C10.0451 5.79927 10.1514 5.82689 10.2597 5.82689C10.3644 5.82689 10.4673 5.80106 10.5594 5.75184C11.0488 5.41654 11.6025 5.1862 12.1855 5.07545Z",
            fill: "currentColor"
          })
        });
      var z = i(52114),
        B = i(47637),
        O = i(85266);
      const R = () => {
        const {
          formatMessage: e
        } = (0, d.A)(), t = (0, a.Zp)(), {
          providerId: i
        } = (0, a.g)(), {
          getFundingLink: c
        } = (0, B.v)(), {
          setNavigationOrigin: C,
          clearNavigationOrigin: h
        } = (0, O.o)();
        (0, l.K)({
          event: n.Un.FUND_CEX_PLATFORM,
          props: null
        });
        const g = (0, a.zy)().state;
        if ((0, k.useEffect)(() => {
            i || t("/fund/cex")
          }, [i, t]), (0, k.useEffect)(() => {
            g?.originalNavigationOrigin && C(g.originalNavigationOrigin)
          }, [g?.originalNavigationOrigin, C]), !i) return null;
        const u = e => {
          g?.assetId && g?.pageViewSource && g?.walletAddress ? c({
            providerId: i,
            assetId: g.assetId,
            walletAddress: g.walletAddress,
            pageViewSource: g.pageViewSource,
            mobilePlatform: e
          }) : t(`/fund/cex/${i}/platform/assets`, {
            state: {
              mobilePlatform: e
            }
          })
        };
        return (0, r.jsxs)(s.LN, {
          children: [(0, r.jsx)(s.zY, {
            title: e({
              id: "fund.mobile-platform-select.header",
              defaultMessage: "Select device"
            }),
            backAction: () => {
              g?.originalNavigationOrigin ? (t(g.originalNavigationOrigin), h()) : t(g?.assetId ? "/receive/" + g.assetId : "/fund/cex")
            }
          }), (0, r.jsx)(s.Gv, {
            children: (0, r.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [(0, r.jsx)(z.E, {
                type: D.jK.SUBHEADER_14,
                weight: D.nG.MEDIUM,
                children: e({
                  id: "fund.mobile-platform-select.label",
                  defaultMessage: "Identify your scanning device"
                })
              }), (0, r.jsxs)(o.L, {
                children: [(0, r.jsx)(L.r, {
                  title: "Android",
                  icon: (0, r.jsx)(Z, {}),
                  onClick: () => u(P.qu.ANDROID)
                }), (0, r.jsx)(L.r, {
                  title: "iOS",
                  icon: (0, r.jsx)(V, {}),
                  onClick: () => u(P.qu.IOS)
                })]
              })]
            })
          })]
        })
      };
      var H = i(96919),
        F = i(84240),
        E = i(3330),
        G = i(8360),
        Q = i(871),
        Y = i(29189);
      const T = ({
          selectedProvider: e,
          selectedMobilePlatform: t
        }) => {
          (0, l.K)({
            event: n.Un.FUND_CEX_ASSET_SELECT,
            props: null
          });
          const {
            formatMessage: i
          } = (0, d.A)(), o = (0, Q.J)(), {
            getFundingLink: a
          } = (0, B.v)(), c = (0, F.c)(), C = (0, Y.f)(), [h, g] = (0, k.useState)(C ?? void 0), [u, p] = (0, k.useState)(""), v = o[e];
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: "flex flex-col space-y-4 mb-4",
              children: [(0, r.jsx)(G.D, {
                value: u,
                onChange: e => p(e.target.value),
                placeholder: i({
                  id: "component.input-asset-search.placeholder"
                })
              }), (0, r.jsx)(E.u, {
                showText: !0,
                localFilteringBlockchainId: h,
                onFilterChange: e => g(e ?? void 0)
              })]
            }), (0, r.jsx)(s.LO, {
              children: (0, r.jsx)(H.U, {
                assetIds: v,
                searchQuery: u,
                onAssetRowClick: (i, r) => ((e, t, i) => new Promise((e, t) => {
                  var r = e => {
                      try {
                        l(i.next(e))
                      } catch (e) {
                        t(e)
                      }
                    },
                    n = e => {
                      try {
                        l(i.throw(e))
                      } catch (e) {
                        t(e)
                      }
                    },
                    l = t => t.done ? e(t.value) : Promise.resolve(t.value).then(r, n);
                  l((i = i.apply(null, null)).next())
                }))(0, 0, function*() {
                  r ? yield a({
                    providerId: e,
                    assetId: i.assetId,
                    walletAddress: r,
                    pageViewSource: n.Un.FUND_CEX_ASSET_SELECT,
                    mobilePlatform: t
                  }): c("select-asset.receive.no-address", "No account found", {})
                }),
                targetBlockchainId: h,
                emptyMessage: i({
                  id: "token-asset-list.empty-search-caption"
                }),
                showNetworkName: !0,
                alwaysShowAllAssets: !0
              })
            })]
          })
        },
        W = () => {
          var e;
          const {
            formatMessage: t
          } = (0, d.A)(), i = (0, a.Zp)(), {
            providerId: n
          } = (0, a.g)(), l = null == (e = (0, a.zy)().state) ? void 0 : e.mobilePlatform;
          return n ? (0, r.jsxs)(s.LN, {
            children: [(0, r.jsx)(s.zY, {
              title: t({
                id: "fund.header",
                defaultMessage: "Fund your wallet"
              }),
              backAction: () => {
                i(l ? `/fund/cex/${n}/platform` : "/fund/cex")
              }
            }), (0, r.jsx)(s.Gv, {
              children: (0, r.jsx)(T, {
                selectedProvider: n,
                selectedMobilePlatform: l
              })
            })]
          }) : (i("/fund/cex"), null)
        };
      var U = i(65512),
        $ = i(52619),
        _ = i(55418),
        q = i(28945);
      const X = () => {
          const {
            formatMessage: e
          } = (0, d.A)(), t = (0, a.Zp)(), i = (0, a.zy)(), {
            trackAnalytics: o
          } = (0, C.s)();
          (0, l.K)({
            event: n.Un.FUND_CEX_QR,
            props: null
          });
          const h = i.state,
            {
              providerId: g,
              fundingLink: u
            } = h || {};
          return (0, k.useEffect)(() => {
            (!g || !u) && t("/fund/cex")
          }, [g, u, t]), g && u ? (0, r.jsxs)(s.LN, {
            children: [(0, r.jsx)(s.zY, {
              title: e({
                id: "cex-funding.qr-scan.title",
                defaultMessage: "Scan QR"
              }),
              backAction: () => t(-1)
            }), (0, r.jsxs)("div", {
              className: "flex text-center flex-col gap-6",
              children: [(0, r.jsx)(z.E, {
                type: D.jK.SUBHEADER_14,
                weight: D.nG.MEDIUM,
                theme: D.Il.UTILITY_1_DEFAULT,
                children: e({
                  id: "cex-funding.qr-scan.description",
                  defaultMessage: "Scan this QR with your phone to deposit directly from {provider}"
                }, {
                  provider: P.sP[g]
                })
              }), (0, r.jsx)(_.o, {
                children: (0, r.jsx)(q.r, {
                  data: u,
                  size: q.M.XLARGE,
                  errorCorrectionLevel: "M",
                  showBorder: !0
                })
              }), (0, r.jsx)(U.$, {
                theme: $.ry.NEUTRAL,
                onClick: () => {
                  o({
                    event: n.BQ.FUND_CEX_QR_RETURN_HOME,
                    props: {
                      providerId: g,
                      pageViewSource: n.Un.FUND_CEX_QR
                    }
                  }), t(c.b.DEFAULT)
                },
                children: e({
                  id: "cex-funding.qr-scan.return",
                  defaultMessage: "Return to home"
                })
              })]
            })]
          }) : null
        },
        J = () => (0, r.jsxs)(a.BV, {
          children: [(0, r.jsx)(a.qh, {
            index: !0,
            element: (0, r.jsx)(A, {})
          }), (0, r.jsx)(a.qh, {
            path: "/cex",
            element: (0, r.jsx)(j, {})
          }), (0, r.jsx)(a.qh, {
            path: "/cex/:providerId",
            element: (0, r.jsx)(S, {})
          }), (0, r.jsx)(a.qh, {
            path: "/cex/:providerId/platform",
            element: (0, r.jsx)(R, {})
          }), (0, r.jsx)(a.qh, {
            path: "/cex/:providerId/assets",
            element: (0, r.jsx)(W, {})
          }), (0, r.jsx)(a.qh, {
            path: "/cex/:providerId/platform/assets",
            element: (0, r.jsx)(W, {})
          }), (0, r.jsx)(a.qh, {
            path: "/cex/qr",
            element: (0, r.jsx)(X, {})
          })]
        })
    },
    80589: (e, t, i) => {
      i.d(t, {
        p: () => d,
        r: () => a
      });
      var r, n = i(74848),
        l = i(41327),
        o = i(52114),
        s = i(1279),
        d = ((r = d || {}).NEUTRAL = "neutral", r.PRIMARY = "primary", r);
      const a = ({
        disabled: e,
        left: t,
        icon: i,
        title: r,
        subtitle: d,
        onClick: a,
        isNavigation: c,
        iconStyle: C = "neutral",
        testid: h,
        className: g = ""
      }) => (0, n.jsxs)("div", {
        className: `flex items-center justify-between ${e?"pointer-events-none opacity-60":"cursor-pointer"} py-4 ${i||t?"px-4":""} ${g}`,
        onClick: a,
        "data-testid": h,
        children: [(0, n.jsxs)("div", {
          className: "flex items-center flex-row " + (i || t ? "space-x-3" : ""),
          children: [t && (0, n.jsx)("div", {
            children: t
          }), i && (0, n.jsx)("div", {
            className: "rounded-full p-2.5 " + ("primary" === C ? "bg-primary-opacity-1" : "bg-utility-1-opacity-5"),
            children: i
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(o.E, {
              theme: s.Il.UTILITY_1_DEFAULT,
              type: s.jK.SUBHEADER_16,
              children: r
            }), (0, n.jsx)(o.E, {
              theme: s.Il.UTILITY_1_OPACITY_1,
              type: s.jK.BODY_14,
              weight: s.nG.NORMAL,
              children: d
            })]
          })]
        }), (0, n.jsx)("div", {
          children: c && (0, n.jsx)(l.v, {
            width: 20,
            height: 20,
            colorClass: "text-icon-secondary"
          })
        })]
      })
    },
    84240: (e, t, i) => {
      i.d(t, {
        c: () => l
      });
      var r = i(68157),
        n = i(61855);
      const l = () => (e, t, i = {}) => {
        r.M_.dispatch(n.A.actions.addToast({
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
    },
    85266: (e, t, i) => {
      i.d(t, {
        o: () => o
      });
      var r = i(96540),
        n = (i.n(r), i(68157)),
        l = i(61855);
      const o = () => {
        const e = (0, n.jL)();
        return {
          navigationOrigin: (0, n.GV)(e => e.app.navigationOrigin),
          setNavigationOrigin: (0, r.useCallback)(t => {
            e(l.A.actions.setNavigationOrigin(t))
          }, [e]),
          clearNavigationOrigin: (0, r.useCallback)(() => {
            e(l.A.actions.clearNavigationOrigin())
          }, [e])
        }
      }
    }
  }
]);
