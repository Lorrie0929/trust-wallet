try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e.t = e.t || {}, e.t[l] = "9deec3f1-c216-492d-8732-91fe471d3465", e.i = "sentry-dbid-9deec3f1-c216-492d-8732-91fe471d3465")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [5625], {
    15625: (e, l, a) => {
      a.r(l), a.d(l, {
        default: () => $
      });
      var t = a(74848),
        i = a(26264),
        s = a(65512),
        r = a(52619),
        n = a(4800),
        d = a(152),
        c = a(19376),
        o = a(73241),
        h = a(52114),
        p = a(1279),
        u = a(69254),
        m = a(65504),
        f = a(68632),
        v = a(75460),
        y = a(30081),
        g = a(26858),
        w = a(10537),
        N = a(72519),
        C = a(21094),
        A = a(21025),
        b = a(96540),
        x = a(6442),
        k = a(47767),
        M = a(64145),
        R = a(22670),
        T = a(45421),
        I = a(56834),
        _ = a(99360),
        E = a(83071),
        O = a(28398),
        H = a(7445);
      const L = {
        id: "zeroex",
        origin: "0x",
        favIconUrl: "https://assets-cdn.trustwallet.com/dapps/0x.org.png",
        title: "0x",
        url: "0x"
      };
      var D = a(93155),
        P = a(84240),
        U = a(68969);
      const $ = () => {
        var e, l, a;
        const $ = (0, k.Zp)(),
          F = (0, k.zy)(),
          {
            formatMessage: Z
          } = (0, x.A)(),
          z = (0, w.n)(),
          [S, j] = (0, b.useState)(!1),
          [B] = (0, E.j)(),
          G = (0, T.O)(I.KM.ethereum),
          V = (0, P.c)(),
          q = F.state,
          {
            assetId: W,
            spenderAddress: Y,
            spenderName: Q,
            chain: X,
            allowance: J,
            isUnlimited: K,
            riskLevel: ee = N.b.LOW_RISK,
            riskDetails: le,
            walletAddress: ae
          } = q || {},
          te = (0, g.Mr)(W || ""),
          ie = X ? z[X] : null,
          se = null != (l = null != (e = ie?.displayName) ? e : ie?.name) ? l : X,
          re = (e => {
            switch (e) {
              case N.b.HIGH_RISK:
                return o.x.ERROR;
              case N.b.MEDIUM_RISK:
                return o.x.WARNING;
              case N.b.LOW_RISK:
              default:
                return o.x.SUCCESS
            }
          })(ee),
          ne = ((e, l) => {
            switch (e) {
              case N.b.HIGH_RISK:
                return l({
                  id: "approvals.risk.high",
                  defaultMessage: "High Risk"
                });
              case N.b.MEDIUM_RISK:
                return l({
                  id: "approvals.risk.medium",
                  defaultMessage: "Medium Risk"
                });
              case N.b.LOW_RISK:
              default:
                return null
            }
          })(ee, Z),
          de = (0, b.useMemo)(() => le && Array.isArray(le) && 0 !== le.length ? le.map(e => e.details).join(". ") + "." : null, [le]),
          ce = (0, b.useMemo)(() => {
            if (K || !J || !te) return null;
            try {
              const e = BigInt(J).toString();
              return (0, A.hF)(e, te.decimals || 0).toString()
            } catch {
              return J
            }
          }, [J, K, te]);
        return te ? (0, t.jsxs)(n.LN, {
          children: [(0, t.jsx)(n.zY, {
            backAction: () => $(i.b.DEFAULT),
            title: Z({
              id: "approval-detail.title",
              defaultMessage: "Approval"
            })
          }), (0, t.jsx)(n.Gv, {
            children: (0, t.jsxs)(n.LO, {
              children: [(0, t.jsxs)("div", {
                className: "pb-4",
                children: [(0, t.jsxs)("div", {
                  className: "flex justify-between items-center pb-2",
                  children: [(0, t.jsx)(h.E, {
                    type: p.jK.SUBHEADER_14,
                    theme: p.Il.UTILITY_1_OPACITY_1,
                    children: Z({
                      id: "approval-detail.contract",
                      defaultMessage: "Contract"
                    })
                  }), ne && (0, t.jsx)(c.v, {
                    size: o.V.MEDIUM,
                    theme: re,
                    children: ne
                  })]
                }), (0, t.jsx)(d.Z, {
                  children: (0, t.jsxs)("div", {
                    className: "py-2 px-3",
                    children: [(0, t.jsxs)("div", {
                      className: "flex items-center space-x-3 pb-6",
                      children: [(0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("div", {
                          className: "flex items-center justify-center w-10 h-10 bg-white rounded-full",
                          children: (0, t.jsx)(y.p, {
                            width: 24,
                            height: 24,
                            colorClass: "text-iconNormal"
                          })
                        }), ie && (0, t.jsx)("div", {
                          className: "absolute -bottom-px -right-0.5",
                          children: (0, t.jsx)(m.q, {
                            name: ie.name,
                            src: ie.iconUrl,
                            size: f.Y.XXSMALL
                          })
                        })]
                      }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(h.E, {
                          type: p.jK.SUBHEADER_14,
                          children: Q || "Unknown"
                        }), (0, t.jsx)(h.E, {
                          type: p.jK.BODY_14,
                          theme: p.Il.UTILITY_1_OPACITY_1,
                          children: se
                        })]
                      })]
                    }), Y && (0, t.jsxs)("div", {
                      className: "space-y-1",
                      children: [(0, t.jsx)(h.E, {
                        type: p.jK.BODY_12,
                        weight: p.nG.MEDIUM,
                        theme: p.Il.UTILITY_1_DEFAULT,
                        children: Z({
                          id: "approval-detail.contract-address",
                          defaultMessage: "Contract address"
                        })
                      }), (0, t.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [(0, t.jsx)("div", {
                          className: "break-all",
                          children: (0, t.jsx)(h.E, {
                            type: p.jK.SUBHEADER_14,
                            theme: p.Il.UTILITY_1_OPACITY_1,
                            children: Y
                          })
                        }), (null == (a = ie?.explorer) ? void 0 : a.url) && (0, t.jsx)("a", {
                          className: "text-iconNormal shrink-0",
                          href: `${ie.explorer.url}${ie.explorer.accountPath}${Y}`,
                          target: "_blank",
                          rel: "noopener nofollow noreferrer",
                          children: (0, t.jsx)(v.G, {
                            width: 20,
                            height: 20
                          })
                        })]
                      })]
                    }), de && ne && (0, t.jsxs)("div", {
                      className: "pt-4 space-y-1",
                      children: [(0, t.jsx)(h.E, {
                        type: p.jK.BODY_14,
                        theme: p.Il.UTILITY_1_DEFAULT,
                        children: Z({
                          id: "approval-detail.risk-detail",
                          defaultMessage: "Risk detail"
                        })
                      }), (0, t.jsx)(h.E, {
                        type: p.jK.BODY_14,
                        theme: p.Il.UTILITY_1_OPACITY_1,
                        children: de
                      })]
                    })]
                  })
                })]
              }), (0, t.jsxs)("div", {
                className: "pb-4",
                children: [(0, t.jsx)("div", {
                  className: "pb-2",
                  children: (0, t.jsx)(h.E, {
                    type: p.jK.SUBHEADER_14,
                    theme: p.Il.UTILITY_1_OPACITY_1,
                    children: Z({
                      id: "approval-detail.asset",
                      defaultMessage: "Asset"
                    })
                  })
                }), (0, t.jsx)(d.Z, {
                  children: (0, t.jsxs)("div", {
                    className: "py-2 px-3",
                    children: [(0, t.jsxs)("div", {
                      className: "flex items-center space-x-3 pb-6 ",
                      children: [(0, t.jsx)(m.q, {
                        name: te.name,
                        src: te.iconUrl,
                        size: f.Y.LARGE,
                        network: ie ? {
                          iconUrl: ie.iconUrl,
                          name: ie.name,
                          displayName: ie.displayName
                        } : void 0
                      }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(h.E, {
                          type: p.jK.SUBHEADER_14,
                          children: te.symbol
                        }), (0, t.jsx)(h.E, {
                          type: p.jK.BODY_14,
                          theme: p.Il.UTILITY_1_OPACITY_1,
                          children: se
                        })]
                      })]
                    }), (0, t.jsxs)("div", {
                      className: "space-y-1",
                      children: [(0, t.jsx)(h.E, {
                        type: p.jK.BODY_12,
                        weight: p.nG.MEDIUM,
                        theme: p.Il.UTILITY_1_DEFAULT,
                        children: Z({
                          id: "approval-detail.amount",
                          defaultMessage: "Amount"
                        })
                      }), K ? (0, t.jsx)(h.E, {
                        type: p.jK.SUBHEADER_16,
                        theme: p.Il.UTILITY_1_DEFAULT,
                        children: Z({
                          id: "approvals.unlimited",
                          defaultMessage: "Unlimited"
                        })
                      }) : (0, t.jsx)(u.h, {
                        textType: p.jK.BODY_16,
                        weight: p.nG.MEDIUM,
                        amountType: C.Cu.CRYPTO,
                        currency: te.symbol,
                        value: parseFloat(ce || "0"),
                        maxSignificantDecimals: 4,
                        tinyThreshold: 4
                      })]
                    }), K && (0, t.jsx)("div", {
                      className: "pt-2",
                      children: (0, t.jsx)(h.E, {
                        type: p.jK.BODY_14,
                        theme: p.Il.UTILITY_1_OPACITY_1,
                        children: Z({
                          id: "approval-detail.unlimited-warning",
                          defaultMessage: "Unlimited approval is not safe unless you fully trust the contract"
                        })
                      })
                    }), ae && (0, t.jsxs)("div", {
                      className: "pt-4 space-y-1",
                      children: [(0, t.jsx)(h.E, {
                        type: p.jK.BODY_12,
                        weight: p.nG.MEDIUM,
                        theme: p.Il.UTILITY_1_DEFAULT,
                        children: Z({
                          id: "approval-detail.wallet-address",
                          defaultMessage: "Wallet address"
                        })
                      }), (0, t.jsx)("div", {
                        className: "break-all",
                        children: (0, t.jsx)(h.E, {
                          type: p.jK.SUBHEADER_14,
                          theme: p.Il.UTILITY_1_OPACITY_1,
                          children: ae
                        })
                      })]
                    })]
                  })
                })]
              })]
            })
          }), (0, t.jsx)(n.FM, {
            children: (0, t.jsx)(s.$, {
              onClick: () => ((e, l, a) => new Promise((e, l) => {
                var t = e => {
                    try {
                      s(a.next(e))
                    } catch (e) {
                      l(e)
                    }
                  },
                  i = e => {
                    try {
                      s(a.throw(e))
                    } catch (e) {
                      l(e)
                    }
                  },
                  s = l => l.done ? e(l.value) : Promise.resolve(l.value).then(t, i);
                s((a = a.apply(null, null)).next())
              }))(0, 0, function*() {
                var e;
                if (te && ie && Y && null != (e = G.data) && e.address) try {
                  j(!0), B !== ie.id && (yield M.YW.emit(R.A.SWITCH_BLOCKCHAIN, {
                    blockchainId: ie.id,
                    blockchainType: ie.isCustom ? O.l.CUSTOM : O.l.MAIN
                  }));
                  const e = function(e, l) {
                    const a = function(e) {
                      return function(e) {
                        const l = e.replace("0x", "").padStart(64, "0"),
                          a = "0".padStart(64, "0");
                        return `${H.FF}${l}${a}`
                      }(e)
                    }(l);
                    return {
                      to: e,
                      data: a,
                      source: L,
                      isInternal: !0
                    }
                  }(te.address, Y);
                  (yield M.YW.emit(_.A.ETH_SIGN_TRANSACTION, e)) && $(i.b.HISTORY)
                } catch (e) {
                  D.A.error("Failed to revoke approval", e), [U.Xc, U.$i].includes(e.message) && V("errors.transaction-generation", "Transaction generation failed")
                } finally {
                  j(!1)
                }
              }),
              theme: r.ry.PRIMARY,
              loading: S,
              children: Z({
                id: "approval-detail.revoke-approval",
                defaultMessage: "Revoke Approval"
              })
            })
          })]
        }) : null
      }
    },
    30081: (e, l, a) => {
      a.d(l, {
        p: () => i
      });
      var t = a(74848);
      const i = ({
        width: e,
        height: l,
        colorClass: a
      }) => (0, t.jsx)("svg", {
        className: a,
        fill: "none",
        width: e ?? 24,
        height: l ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.0561 2.62763C4.45795 2.22576 5.00301 2 5.57132 2H14.857C15.0465 2 15.2282 2.07525 15.3621 2.20921L20.3622 7.20921C20.496 7.34316 20.5713 7.52484 20.5713 7.71429V19.8571C20.5713 20.4254 20.3456 20.9706 19.9438 21.3724C19.5419 21.7743 18.9968 22 18.4285 22H5.57132C5.003 22 4.45795 21.7743 4.0561 21.3724C3.65424 20.9706 3.42847 20.4254 3.42847 19.8571V4.14286C3.42847 3.57454 3.65424 3.02949 4.0561 2.62763ZM8.42847 7.53571C7.93535 7.53571 7.53561 7.93546 7.53561 8.42857C7.53561 8.92169 7.93535 9.32143 8.42847 9.32143H11.2856C11.7787 9.32143 12.1785 8.92169 12.1785 8.42857C12.1785 7.93546 11.7787 7.53571 11.2856 7.53571H8.42847ZM8.42847 11.8214C7.93535 11.8214 7.53561 12.2212 7.53561 12.7143C7.53561 13.2074 7.93535 13.6071 8.42847 13.6071H15.5713C16.0644 13.6071 16.4642 13.2074 16.4642 12.7143C16.4642 12.2212 16.0644 11.8214 15.5713 11.8214H8.42847ZM7.53561 17C7.53561 16.5069 7.93535 16.1071 8.42847 16.1071H15.5713C16.0644 16.1071 16.4642 16.5069 16.4642 17C16.4642 17.4931 16.0644 17.8929 15.5713 17.8929H8.42847C7.93535 17.8929 7.53561 17.4931 7.53561 17Z",
          fill: "currentColor"
        })
      })
    },
    68969: (e, l, a) => {
      a.d(l, {
        $i: () => r,
        Xc: () => s,
        Zq: () => i,
        oq: () => t
      });
      const t = "FAILED_QUOTE_GENERATION",
        i = "FAILED_AMBER_RPC_ERROR",
        s = "FAILED_APPROVAL_TRANSACTION_PAYLOAD_GENERATION",
        r = "FAILED_SWAP_TRANSACTION_PAYLOAD_GENERATION"
    },
    84240: (e, l, a) => {
      a.d(l, {
        c: () => s
      });
      var t = a(68157),
        i = a(61855);
      const s = () => (e, l, a = {}) => {
        t.M_.dispatch(i.A.actions.addToast({
          id: crypto.randomUUID(),
          i18n: {
            message: {
              id: e,
              defaultMessage: l
            },
            params: a
          }
        }))
      }
    }
  }
]);
