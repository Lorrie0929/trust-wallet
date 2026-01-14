"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [4645], {
    17045: (e, n, t) => {
      t.d(n, {
        I: () => ee
      });
      var i = t(74848),
        a = t(47767),
        l = t(92926),
        r = t(52651),
        o = t(29584),
        c = t(26264),
        s = t(63369),
        d = t(3367),
        u = t(65512),
        m = t(65504),
        h = t(16665),
        p = t(55418),
        v = t(4800),
        f = t(68632),
        b = t(79830),
        y = t(69254),
        g = t(52114),
        x = t(1279),
        w = t(64145),
        k = t(14948),
        N = t(26858),
        C = t(47996),
        I = t(79334),
        T = t(66392),
        S = t(65828),
        j = t(79960),
        O = t(3280),
        M = t(21094),
        E = t(15192),
        A = t(2543),
        P = t(96540),
        $ = t(6442),
        F = t(41411),
        L = t(27409),
        V = t(71431),
        G = t(75485),
        z = t(68157),
        B = t(89419),
        D = t(20549),
        W = Object.defineProperty,
        R = Object.getOwnPropertySymbols,
        Q = {}.hasOwnProperty,
        X = {}.propertyIsEnumerable,
        q = (e, n, t) => n in e ? W(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        Z = (e, n) => {
          for (var t in n || (n = {})) Q.call(n, t) && q(e, t, n[t]);
          if (R)
            for (var t of R(n)) X.call(n, t) && q(e, t, n[t]);
          return e
        },
        H = (e, n, t) => new Promise((i, a) => {
          var l = e => {
              try {
                o(t.next(e))
              } catch (e) {
                a(e)
              }
            },
            r = e => {
              try {
                o(t.throw(e))
              } catch (e) {
                a(e)
              }
            },
            o = e => e.done ? i(e.value) : Promise.resolve(e.value).then(l, r);
          o((t = t.apply(e, n)).next())
        });
      const U = ({
        assetId: e
      }) => {
        var n, t, W, R, Q, X, q;
        const {
          formatMessage: U
        } = (0, $.A)(), J = (0, a.Zp)(), K = (0, O.p)(), Y = (0, P.useContext)(d.o), _ = (0, N.Mr)(e);
        if (!_) throw Error(`Could not find asset for assetId "${e}"`);
        (0, s.K)({
          event: o.Un.SEND_PREPARE_CRYPTO,
          props: null
        });
        const ee = (0, C.o)(_.blockchainId),
          ne = (0, I.P)(_.blockchainId),
          te = (0, z.GV)(e => e.sdkFeatures.prepareSend),
          ie = (0, z.GV)(e => e.sdkFeatures.prepareSendResolvedAddress),
          ae = (0, z.GV)(e => e.sdkFeatures.prepareSendResolvingAddress),
          [le, re] = (0, P.useState)(null != (n = Y.address) ? n : ""),
          [oe, ce] = (0, P.useState)(null != (t = Y.amount) ? t : ""),
          [se, de] = (0, P.useState)(null != (W = Y.memoOrTag) ? W : ""),
          [ue, me] = (0, P.useState)(!1),
          [he, pe] = (0, P.useState)(!1),
          [ve, fe] = (0, P.useState)(!1),
          be = ne || ee,
          ye = !(null == (R = Y.inscriptions) || !R.length),
          ge = (0, j.t)(),
          xe = (0, S.Z)(_.assetId),
          {
            blockchainSupports7702: we,
            isLoadingSupports7702: ke
          } = (0, D.O)(be.id),
          Ne = (0, P.useMemo)(() => {
            var e, n, t;
            return {
              memo: te?.meta,
              asset: _,
              network: be,
              amount: null != (n = ye ? null == (e = te?.inscriptionsData) ? void 0 : e.amount : te?.amount) ? n : "",
              to: null != (t = te?.address) ? t : "",
              inscriptions: Y.inscriptions,
              type: T.w.Send,
              isMax: (0, E.z)(oe || "0").eq(xe ?? 0),
              supports7702: we
            }
          }, [te?.amount, _, be, Y.inscriptions, te?.address, te?.meta, oe, xe, we]);
        (0, P.useEffect)(() => {
          ge[e] && !he && (function() {
            H(this, null, function*() {
              var e, n, t;
              const i = [{
                  property: l.z.amount,
                  value: null != (e = Y.amount) ? e : ""
                }, {
                  property: l.z.meta,
                  value: null != (n = Y.memoOrTag) ? n : ""
                }, {
                  property: l.z.recipient,
                  value: null != (t = Y.address) ? t : ""
                }].filter(e => !!e.value),
                a = {
                  action: l.e.INITIATE,
                  params: Z({
                    crypto: {
                      asset: _
                    },
                    initialState: i
                  }, Y.inscriptions && {
                    inscriptions: {
                      inscriptions: Y.inscriptions,
                      amount: Y.amount
                    }
                  })
                };
              yield w.YW.emit(k.A.PREPARE_SEND, a)
            })
          }(), pe(!0))
        }, [ge]), (0, P.useEffect)(() => {
          var e;
          ue && (ce(null != (e = te?.amount) ? e : oe), me(!1))
        }, [te?.amount]);
        const Ce = (0, A.debounce)((e, n) => {
            w.YW.emit(k.A.PREPARE_SEND, {
              action: l.e.UPDATE,
              params: {
                property: e,
                value: n
              }
            })
          }, 200),
          Ie = e => {
            re(e), z.M_.dispatch(B.T.actions.clearPrepareSendResolvedAddress()), z.M_.dispatch(B.T.actions.clearPrepareSendAddressError()), Ce(l.z.recipient, e)
          },
          Te = e => {
            de(e), Ce(l.z.meta, e)
          },
          Se = (0, P.useMemo)(() => {
            var e, n;
            return Object.values(null != (e = te?.metaType) ? e : {}).includes("Memo") || Object.values(null != (n = te?.metaType) ? n : {}).includes("Object")
          }, [te]),
          je = (0, P.useMemo)(() => {
            var e;
            return Object.values(null != (e = te?.metaType) ? e : {}).includes("Tag")
          }, [te]),
          Oe = (ae || te?.isLoadingLookup) && !ie && null === te?.addressError;
        return te?.isLoading || !ge[e] || ke ? (0, i.jsx)(p.o, {
          children: (0, i.jsx)(b.y, {
            size: f.Y.XLARGE
          })
        }) : (0, i.jsxs)(v.LN, {
          children: [(0, i.jsx)(v.zY, {
            backAction: () => J(-1),
            title: U({
              id: "send.title"
            }, {
              assetSymbol: _.symbol
            })
          }), (0, i.jsxs)(v.Gv, {
            children: [(0, i.jsxs)(v.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(m.q, {
                    src: _.iconUrl,
                    name: _.name,
                    network: _.address ? be : void 0,
                    size: f.Y.MEDIUM
                  })
                }), (0, i.jsx)(g.E, {
                  type: x.jK.BODY_14,
                  theme: x.Il.UTILITY_1_OPACITY_1,
                  children: U({
                    id: "generic.on-network"
                  }, {
                    networkName: null != (Q = be.displayName) ? Q : be.name
                  })
                })]
              }), (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(h.S, {
                  testid: "input-recipient",
                  label: U({
                    id: "input-address.address.label"
                  }),
                  value: le || "",
                  onChange: e => Ie(e.target.value),
                  placeholder: U({
                    id: "input-address.address.placeholder"
                  }),
                  actions: [{
                    key: "address-input-action-address-book",
                    placeholder: (0, i.jsx)(L.X, {
                      width: 20,
                      height: 20
                    }),
                    onClick: () => {
                      fe(!0)
                    }
                  }],
                  validation: (0, F.D)(te?.addressError),
                  autoFocus: !0,
                  isLoading: Oe,
                  specialSubtitle: ie ? (0, i.jsxs)("div", {
                    className: "px-3 py-2 bg-backgroundSecondary rounded-xl",
                    children: [(0, i.jsxs)(g.E, {
                      type: x.jK.CAPTION_12,
                      theme: x.Il.UTILITY_1_OPACITY_2,
                      children: [U({
                        id: "send.destination-address"
                      }), ":"]
                    }), (0, i.jsx)("div", {
                      className: "break-all mt-0.5",
                      children: (0, i.jsx)(g.E, {
                        type: x.jK.CAPTION_12,
                        theme: x.Il.UTILITY_1_OPACITY_2,
                        children: ie.resolvedAddress
                      })
                    })]
                  }) : void 0
                })
              }), !ye && (0, i.jsxs)(i.Fragment, {
                children: [(Se || je) && (0, i.jsx)("div", {
                  className: "pb-4",
                  children: (0, i.jsx)(h.S, {
                    testid: "input-memo-tag",
                    label: U(Se ? {
                      id: "input-memo.memo.label"
                    } : {
                      id: "input-tag.tag.label"
                    }),
                    value: se,
                    onChange: e => Te(e.target.value),
                    placeholder: U(Se ? {
                      id: "input-memo.memo.placeholder"
                    } : {
                      id: "input-tag.tag.placeholder"
                    }),
                    validation: je ? (0, F.D)(te?.metaError) : void 0
                  })
                }), (0, i.jsxs)("div", {
                  className: "pb-4",
                  children: [(0, i.jsx)(h.S, {
                    testid: "input-amount",
                    label: U({
                      id: "input-amount.amount.label"
                    }),
                    value: oe,
                    onlyPositive: !0,
                    onChange: e => (e => {
                      isNaN(+e) || e.startsWith("0x") || (ce(e), Ce(l.z.amount, e))
                    })(e.target.value),
                    placeholder: U({
                      id: "input-amount.amount.placeholder"
                    }),
                    validation: (0, F.D)(te?.amountError),
                    actions: [{
                      key: "1",
                      placeholder: (0, i.jsx)(g.E, {
                        theme: x.Il.PRIMARY_DEFAULT,
                        type: x.jK.SUBHEADER_14,
                        children: "MAX"
                      }),
                      onClick: () => (me(!0), void w.YW.emit(k.A.PREPARE_SEND, {
                        action: l.e.UPDATE,
                        params: {
                          property: l.z.maxAmount
                        }
                      }))
                    }]
                  }), (0, i.jsxs)("div", {
                    className: "flex space-x-1",
                    children: [(0, i.jsxs)(g.E, {
                      weight: x.nG.NORMAL,
                      type: x.jK.CAPTION_12,
                      theme: x.Il.UTILITY_1_OPACITY_1,
                      children: [U({
                        id: "send.balance"
                      }), ":"]
                    }), (0, i.jsx)(y.h, {
                      testid: "account-balance",
                      weight: x.nG.NORMAL,
                      textType: x.jK.CAPTION_12,
                      theme: x.Il.UTILITY_1_OPACITY_1,
                      amountType: M.Cu.CRYPTO,
                      value: xe,
                      currency: _.symbol,
                      maxSignificantDecimals: 10
                    })]
                  }), !!+(null == (X = ge[_.assetId]) ? void 0 : X.dust) && (0, i.jsxs)("div", {
                    className: "flex space-x-1",
                    children: [(0, i.jsxs)(g.E, {
                      weight: x.nG.NORMAL,
                      type: x.jK.CAPTION_12,
                      theme: x.Il.UTILITY_1_OPACITY_1,
                      children: [U({
                        id: "send.dust-balance"
                      }), ":"]
                    }), (0, i.jsx)(y.h, {
                      weight: x.nG.NORMAL,
                      textType: x.jK.CAPTION_12,
                      theme: x.Il.UTILITY_1_OPACITY_1,
                      amountType: M.Cu.CRYPTO,
                      value: null == (q = ge[_.assetId]) ? void 0 : q.dust,
                      currency: _.symbol,
                      maxSignificantDecimals: 10
                    })]
                  })]
                })]
              })]
            }), K && (0, i.jsx)("div", {
              className: "pb-4",
              children: (0, i.jsx)(r.e, {
                blockchainName: be.name
              })
            }), (0, i.jsx)(u.$, {
              testid: "button-prepare-send-tx",
              disabled: !te?.isNextEnabled || Oe,
              onClick: () => J(c.b.SEND_CONFIRM, {
                state: Ne
              }),
              children: U({
                id: "generic.preview"
              })
            })]
          }), ve && (0, i.jsx)(V.F, {
            isOpened: ve,
            coinId: be.isCustom ? "60" : (0, G.X2)(_.assetId),
            onClose: e => H(null, null, function*() {
              fe(!1), e?.address && (Ie(e.address), yield new Promise(e => setTimeout(e, 200)), Te(e.memo || se || ""))
            })
          })]
        })
      };
      var J = t(65818),
        K = t(46707);
      const Y = ({
        collectionId: e,
        nftId: n
      }) => {
        var t, p, b;
        const {
          formatMessage: y
        } = (0, $.A)(), N = (0, a.Zp)(), C = (0, O.p)(), I = (0, P.useContext)(d.o), T = (0, J.Q)(e);
        if (!T) throw Error(`Could not find collection for collectionId "${e}"`);
        const S = (0, K.j)(e, n),
          j = (0, z.GV)(e => e.sdkFeatures.prepareSend);
        if (!S) throw Error("NFT Id is missing.");
        (0, s.K)({
          event: o.Un.SEND_PREPARE_NFT,
          props: null
        });
        const [M, E] = (0, P.useState)(null != (t = I.address) ? t : ""), [F, L] = (0, P.useState)(null != (p = I.memoOrTag) ? p : ""), [V, G] = (0, P.useState)(null != (b = I.amount) ? b : ""), [B, D] = (0, P.useState)(!1), W = (0, P.useMemo)(() => {
          var e, n, t;
          return {
            memo: null != (e = j?.meta) ? e : void 0,
            network: T.blockchain,
            to: null != (n = j?.address) ? n : "",
            amount: null != (t = j?.amount) ? t : "",
            collection: T,
            nft: S
          }
        }, [F, T.blockchain, M]);
        (0, P.useEffect)(() => {
          ! function() {
            ((e, n, t) => {
              new Promise((n, i) => {
                var a = e => {
                    try {
                      r(t.next(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  l = e => {
                    try {
                      r(t.throw(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  r = e => e.done ? n(e.value) : Promise.resolve(e.value).then(a, l);
                r((t = t.apply(e, null)).next())
              })
            })(this, 0, function*() {
              var e, n, t;
              const i = [{
                  property: l.z.amount,
                  value: null != (e = I.amount) ? e : ""
                }, {
                  property: l.z.meta,
                  value: null != (n = I.memoOrTag) ? n : ""
                }, {
                  property: l.z.recipient,
                  value: null != (t = I.address) ? t : ""
                }].filter(e => !!e.value),
                a = {
                  action: l.e.INITIATE,
                  params: {
                    nft: {
                      nft: S,
                      blockchain: T.blockchain
                    },
                    initialState: i
                  }
                };
              yield w.YW.emit(k.A.PREPARE_SEND, a)
            })
          }()
        }, []), (0, P.useEffect)(() => {
          var e;
          B && (G(null != (e = j?.amount) ? e : V), D(!1))
        }, [j?.amount]);
        const R = (0, A.debounce)((e, n) => {
            w.YW.emit(k.A.PREPARE_SEND, {
              action: l.e.UPDATE,
              params: {
                property: e,
                value: n
              }
            })
          }, 200),
          Q = (0, P.useMemo)(() => {
            var e, n;
            return Object.values(null != (e = j?.metaType) ? e : {}).includes("Memo") || Object.values(null != (n = j?.metaType) ? n : {}).includes("Object")
          }, [j]),
          X = e => ({
            isValid: !e,
            error: e
          });
        return (0, i.jsxs)(v.LN, {
          children: [(0, i.jsx)(v.zY, {
            backAction: () => N(-1),
            title: y({
              id: "send.title"
            }, {
              assetSymbol: `${T.name} #${S.onChainId} `
            })
          }), (0, i.jsxs)(v.Gv, {
            children: [(0, i.jsxs)(v.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(m.q, {
                    src: S.previewImageURL.url,
                    name: T.blockchain.name,
                    network: T.blockchain,
                    size: f.Y.XLARGE
                  })
                }), (0, i.jsx)(g.E, {
                  type: x.jK.SUBTITLE,
                  theme: x.Il.SECONDARY,
                  children: y({
                    id: "generic.on-network"
                  }, {
                    networkName: T.blockchain.name
                  })
                })]
              }), (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(h.S, {
                  label: y({
                    id: "input-address.address.label"
                  }),
                  value: M,
                  onChange: e => (e => {
                    E(e), R(l.z.recipient, e)
                  })(e.target.value),
                  placeholder: y({
                    id: "input-address.address.placeholder"
                  }),
                  validation: X(j?.addressError),
                  autoFocus: !0
                })
              }), Q && (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(h.S, {
                  label: y({
                    id: "input-memo.memo.label"
                  }),
                  value: F,
                  onChange: e => (e => {
                    L(e), R(l.z.meta, e)
                  })(e.target.value),
                  placeholder: y({
                    id: "input-memo.memo.placeholder"
                  })
                })
              }), j?.showAmount && (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(h.S, {
                  label: y({
                    id: "input-amount.amount.label"
                  }),
                  value: V,
                  onChange: e => (e => {
                    G(e), R(l.z.amount, e)
                  })(e.target.value),
                  placeholder: y({
                    id: "input-amount.amount.placeholder"
                  }),
                  validation: X(j?.amountError),
                  actions: [{
                    key: "1",
                    placeholder: (0, i.jsx)(g.E, {
                      theme: x.Il.BRAND,
                      children: "MAX"
                    }),
                    onClick: () => (D(!0), void w.YW.emit(k.A.PREPARE_SEND, {
                      action: l.e.UPDATE,
                      params: {
                        property: l.z.maxAmount
                      }
                    }))
                  }]
                })
              })]
            }), C && (0, i.jsx)("div", {
              className: "pb-4",
              children: (0, i.jsx)(r.e, {
                blockchainName: T.blockchain.name
              })
            }), (0, i.jsx)(u.$, {
              disabled: !j?.isNextEnabled,
              onClick: () => N(c.b.SEND_CONFIRM, {
                state: W
              }),
              children: y({
                id: "generic.preview"
              })
            })]
          })]
        })
      };
      var _ = t(59754);
      const ee = () => {
        const {
          collectionId: e,
          nftId: n,
          assetId: t
        } = (0, a.g)();
        return (0, _.A)(() => {
          w.YW.emit(k.A.PREPARE_SEND, {
            action: l.e.CLOSE
          })
        }), t ? (0, i.jsx)(U, {
          assetId: t
        }) : e && n ? (0, i.jsx)(Y, {
          collectionId: e,
          nftId: n
        }) : null
      }
    },
    24645: (e, n, t) => {
      t.a(e, async (e, i) => {
        try {
          t.r(n), t.d(n, {
            App: () => C,
            default: () => I
          });
          var a = t(74848),
            l = t(47767),
            r = t(96540),
            o = (t.n(r), t(3367)),
            c = t(40793),
            s = t(17045),
            d = t(33400),
            u = t(53764),
            m = t(27431),
            h = e([c]);
          c = (h.then ? (await h)() : h)[0];
          var p = Object.defineProperty,
            v = Object.defineProperties,
            f = Object.getOwnPropertyDescriptors,
            b = Object.getOwnPropertySymbols,
            y = {}.hasOwnProperty,
            g = {}.propertyIsEnumerable,
            x = (e, n, t) => n in e ? p(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            }) : e[n] = t,
            w = (e, n) => {
              for (var t in n || (n = {})) y.call(n, t) && x(e, t, n[t]);
              if (b)
                for (var t of b(n)) g.call(n, t) && x(e, t, n[t]);
              return e
            },
            k = (e, n) => v(e, f(n));
          const N = () => {
              const e = e => {
                  t(n => w(w({}, n), e))
                },
                [n, t] = (0, r.useState)({
                  setContext: e
                });
              return (0, a.jsx)(o.o.Provider, {
                value: k(w({}, n), {
                  setContext: e
                }),
                children: (0, a.jsx)(l.sv, {})
              })
            },
            C = () => (0, a.jsxs)(l.BV, {
              children: [(0, a.jsx)(l.qh, {
                index: !0,
                element: (0, a.jsx)(d.V, {})
              }), (0, a.jsxs)(l.qh, {
                element: (0, a.jsx)(N, {}),
                children: [(0, a.jsx)(l.qh, {
                  path: "/:assetId",
                  element: (0, a.jsx)(s.I, {})
                }), (0, a.jsx)(l.qh, {
                  path: "/:collectionId/:nftId",
                  element: (0, a.jsx)(s.I, {})
                }), (0, a.jsx)(l.qh, {
                  path: "/:assetId/inscriptions",
                  element: (0, a.jsx)(u.W, {})
                }), (0, a.jsx)(l.qh, {
                  path: "/:assetId/inscribe",
                  element: (0, a.jsx)(m.u, {})
                }), (0, a.jsx)(l.qh, {
                  path: "/confirm",
                  element: (0, a.jsx)(c.p, {})
                })]
              })]
            }),
            I = C;
          i()
        } catch (e) {
          i(e)
        }
      })
    },
    26963: (e, n, t) => {
      t.d(n, {
        Z: () => s
      });
      var i = t(74848),
        a = t(65504),
        l = t(68632),
        r = t(52114),
        o = t(1279),
        c = t(6442);
      const s = ({
        nft: e,
        network: n
      }) => {
        const {
          formatMessage: t
        } = (0, c.A)(), s = e.name.length ? e.name : `${e.collectionName} #${e.onChainId}`;
        return (0, i.jsxs)("div", {
          className: "flex items-center space-x-2",
          children: [(0, i.jsx)("div", {
            children: (0, i.jsx)(a.q, {
              src: e.previewImageURL.url,
              name: s,
              network: n,
              size: l.Y.LARGE
            })
          }), (0, i.jsxs)("div", {
            className: "flex flex-col",
            children: [(0, i.jsx)(r.E, {
              type: o.jK.HEADER_18,
              children: s
            }), (0, i.jsxs)(r.E, {
              type: o.jK.SUBHEADER_14,
              theme: o.Il.UTILITY_1_OPACITY_1,
              children: [t({
                id: "generic.send"
              }), " NFT"]
            })]
          })]
        })
      }
    },
    27431: (e, n, t) => {
      t.d(n, {
        u: () => $
      });
      var i = t(74848),
        a = t(52651),
        l = t(26264),
        r = t(15192),
        o = t(96540),
        c = t(6442),
        s = Object.defineProperty,
        d = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertySymbols,
        h = {}.hasOwnProperty,
        p = {}.propertyIsEnumerable,
        v = (e, n, t) => n in e ? s(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        f = (e, n) => {
          for (var t in n || (n = {})) h.call(n, t) && v(e, t, n[t]);
          if (m)
            for (var t of m(n)) p.call(n, t) && v(e, t, n[t]);
          return e
        },
        b = (e, n) => d(e, u(n)),
        y = t(65512),
        g = t(65504),
        x = t(16665),
        w = t(4800),
        k = t(68632),
        N = t(69254),
        C = t(52114),
        I = t(1279),
        T = t(26858),
        S = t(47996),
        j = t(66392),
        O = t(40790),
        M = t(7707),
        E = t(3280),
        A = t(21094),
        P = t(47767);
      const $ = () => {
        const {
          assetId: e
        } = (0, P.g)(), n = (0, P.Zp)(), {
          formatMessage: t
        } = (0, c.A)();
        if (!e) throw Error(`Asset Id "${e}" is invalid.`);
        const s = (0, T.Mr)(e);
        if (!s) throw Error(`Could not find asset for assetId "${e}"`);
        const d = (0, S.o)(s.blockchainId),
          u = (0, M.A)(s.assetId),
          m = (0, O.F7)(d.coinId),
          h = (0, E.p)(),
          [p, v] = (0, o.useState)(""),
          $ = (({
            value: e,
            asset: n,
            decimals: t,
            minimum: i,
            maximum: a,
            minimumThreshold: l,
            minimumThresholdWarning: s
          }) => {
            const {
              formatMessage: d
            } = (0, c.A)(), [u, m] = (0, o.useState)({
              isValid: !1,
              number: !1,
              decimals: !1,
              minimum: !1,
              maximum: !1,
              minimumThreshold: !1,
              minimumThresholdWarning: null
            });
            (0, o.useEffect)(() => {
              m(f({}, (({
                value: e,
                decimals: n,
                minimum: t,
                maximum: i,
                minimumThreshold: a,
                minimumThresholdWarning: l
              }) => {
                const o = {
                  number: !1,
                  decimals: !1,
                  minimum: !1,
                  maximum: !1,
                  minimumThreshold: !1,
                  minimumThresholdWarning: null
                };
                if (!e || "0" === e) return b(f({}, o), {
                  isValid: !1
                });
                try {
                  const c = (0, r.A)(e);
                  o.number = !0, o.minimum = !t || c.gte((0, r.A)(t)), o.maximum = !i || c.lte((0, r.A)(i));
                  const s = e.indexOf("."),
                    d = -1 !== s ? e.substring(s + 1) : void 0;
                  if (o.decimals = !d || "number" != typeof n || d.length <= n, l && "0" !== l.value && i) {
                    const e = (0, r.A)(i),
                      n = (0, r.A)(l.value);
                    o.minimumThresholdWarning = e.gt(0) && e.gte(c) && e.minus(c).lt(n) ? l.message : null
                  } else o.minimumThresholdWarning = null;
                  if (a && "0" !== a && i) {
                    const e = (0, r.A)(i),
                      n = (0, r.A)(a);
                    o.minimumThreshold = c.lte(e) && e.minus(c).gte(n)
                  } else o.minimumThreshold = !0
                } catch {} finally {
                  return b(f({}, o), {
                    isValid: Object.entries(o).every(([e, n]) => "minimumThresholdWarning" === e || !!n)
                  })
                }
              })({
                value: e,
                asset: n,
                decimals: t,
                minimum: i,
                maximum: a,
                minimumThreshold: l,
                minimumThresholdWarning: s
              })))
            }, [e, n, t, i, a]);
            const h = (0, o.useMemo)(() => u.number ? u.decimals ? u.minimum ? u.maximum ? u.minimumThreshold ? u.minimumThresholdWarning ? d({
              id: u.minimumThresholdWarning
            }) : void 0 : d({
              id: "validate-amount.minimum-threshold"
            }, {
              number: l,
              asset: n.symbol
            }) : d({
              id: "validate-amount.maximum"
            }, {
              asset: n.symbol
            }) : d({
              id: "validate-amount.minimum"
            }, {
              number: i
            }) : d({
              id: "validate-amount.decimals"
            }, {
              number: t
            }) : d({
              id: "validate-amount.generic"
            }), [d, u, n, t, i]);
            return {
              isValid: u.isValid,
              error: h
            }
          })({
            value: p,
            asset: s,
            decimals: s.decimals,
            maximum: u,
            minimumThreshold: "0"
          }),
          F = (0, o.useMemo)(() => ({
            asset: s,
            network: d,
            amount: p,
            to: m.address,
            type: j.w.Inscribe
          }), [s, d, p]);
        return (0, i.jsxs)(w.LN, {
          children: [(0, i.jsx)(w.zY, {
            title: `${t({id:"generic.inscribe"})} ${s.symbol}`,
            backAction: () => n(-1)
          }), (0, i.jsxs)(w.Gv, {
            children: [(0, i.jsxs)(w.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(g.q, {
                    src: s.iconUrl,
                    name: s.name,
                    network: s.address ? d : void 0,
                    size: k.Y.LARGE
                  })
                }), (0, i.jsx)(C.E, {
                  type: I.jK.SUBTITLE,
                  theme: I.Il.SECONDARY,
                  children: t({
                    id: "generic.on-network"
                  }, {
                    networkName: d.name
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "pb-4",
                children: [(0, i.jsx)(x.S, {
                  testid: "input-amount",
                  label: t({
                    id: "input-amount.amount.label"
                  }),
                  value: p,
                  onChange: e => v(e.target.value),
                  placeholder: t({
                    id: "input-amount.amount.placeholder"
                  }),
                  validation: $,
                  actions: [{
                    key: "max",
                    placeholder: (0, i.jsx)(C.E, {
                      theme: I.Il.BRAND,
                      children: "MAX"
                    }),
                    disabled: "0" === u,
                    onClick: () => v(u)
                  }]
                }), (0, i.jsxs)("div", {
                  className: "flex space-x-1",
                  children: [(0, i.jsxs)(C.E, {
                    weight: I.nG.NORMAL,
                    type: I.jK.SUBTITLE,
                    theme: I.Il.SECONDARY,
                    children: [t({
                      id: "generic.available-balance"
                    }), ":"]
                  }), (0, i.jsx)(N.h, {
                    testid: "inscribe-balance",
                    weight: I.nG.NORMAL,
                    textType: I.jK.SUBTITLE,
                    theme: I.Il.SECONDARY,
                    amountType: A.Cu.CRYPTO,
                    value: u,
                    currency: s.symbol,
                    maxSignificantDecimals: 10
                  })]
                })]
              })]
            }), h && (0, i.jsx)("div", {
              className: "pb-4",
              children: (0, i.jsx)(a.e, {
                blockchainName: d.name
              })
            }), (0, i.jsx)(y.$, {
              testid: "button-prepare-inscribe-tx",
              disabled: !$.isValid,
              onClick: () => n(l.b.SEND_CONFIRM, {
                state: F
              }),
              children: t({
                id: "generic.continue"
              })
            })]
          })]
        })
      }
    },
    31902: (e, n, t) => {
      t.d(n, {
        P: () => a
      });
      var i = t(79960);

      function a(e) {
        var n;
        return (null == (n = (0, i.t)()[e]) ? void 0 : n.transferable) || "0"
      }
    },
    33400: (e, n, t) => {
      t.d(n, {
        V: () => f
      });
      var i = t(74848),
        a = t(96919),
        l = t(29584),
        r = t(26264),
        o = t(63369),
        c = t(3330),
        s = t(8360),
        d = t(4800),
        u = t(29189),
        m = t(96471),
        h = t(96540),
        p = (t.n(h), t(6442)),
        v = t(47767);
      const f = () => {
        (0, o.K)({
          event: l.Un.SEND_SELECT_CRYPTO,
          props: null
        });
        const {
          formatMessage: e
        } = (0, p.A)(), n = (0, v.Zp)(), [t, f] = (0, h.useState)(""), b = (0, u.f)(), [y, g] = (0, h.useState)(b ?? void 0);
        return (0, i.jsxs)(d.LN, {
          children: [(0, i.jsx)(d.zY, {
            backAction: () => n(-1),
            title: e({
              id: "select-asset.send.title",
              defaultMessage: "Select asset to send"
            })
          }), (0, i.jsxs)(d.Gv, {
            children: [(0, i.jsxs)("div", {
              className: "flex flex-col space-y-4 mb-4",
              children: [(0, i.jsx)(s.D, {
                testid: "input-search-asset",
                value: t,
                onChange: e => f(e.target.value),
                placeholder: e({
                  id: "component.input-asset-search.placeholder"
                })
              }), (0, i.jsx)(c.u, {
                showText: !0,
                localFilteringBlockchainId: y,
                onFilterChange: e => g(e ?? void 0)
              })]
            }), (0, i.jsx)(d.LO, {
              children: (0, i.jsx)(a.U, {
                searchQuery: t,
                excludedBlockchainId: "binance",
                targetBlockchainId: y,
                onAssetRowClick: e => {
                  n(`${r.b.SEND}/${e.assetId}${e.type===m.S.BRC20?"/inscriptions":""}`)
                },
                emptyMessage: e({
                  id: "token-asset-list.empty-search-caption"
                }),
                showNetworkName: !0,
                alwaysShowAllAssets: !0
              })
            })]
          })]
        })
      }
    },
    36631: (e, n, t) => {
      t.a(e, async (e, i) => {
        try {
          t.d(n, {
            w: () => ie
          });
          var a = t(74848),
            l = t(47767),
            r = t(56383),
            o = t(8192),
            c = t(9526),
            s = t(26264),
            d = t(5360),
            u = t(3367),
            m = t(37167),
            h = t(46191),
            p = t(26963),
            v = t(4800),
            f = t(64145),
            b = t(22670),
            y = t(72722),
            g = t(5027),
            x = t(40790),
            w = t(79960),
            k = t(3280),
            N = t(33055),
            C = t(26113),
            I = t(28105),
            T = t(93155),
            S = t(15192),
            j = t(37457),
            O = t(96540),
            M = (t.n(O), t(6442)),
            E = t(606),
            A = t(75485),
            P = t(65047),
            $ = t(63369),
            F = t(29584),
            L = t(66392),
            V = t(23207),
            G = t(8986),
            z = t(9389),
            B = t(20549),
            D = t(72213),
            W = t(26858),
            R = t(7707),
            Q = t(21025),
            X = t(23184),
            q = t(52178),
            Z = e([I]);
          I = (Z.then ? (await Z)() : Z)[0];
          var H = Object.defineProperty,
            U = Object.defineProperties,
            J = Object.getOwnPropertyDescriptors,
            K = Object.getOwnPropertySymbols,
            Y = {}.hasOwnProperty,
            _ = {}.propertyIsEnumerable,
            ee = (e, n, t) => n in e ? H(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            }) : e[n] = t,
            ne = (e, n) => {
              for (var t in n || (n = {})) Y.call(n, t) && ee(e, t, n[t]);
              if (K)
                for (var t of K(n)) _.call(n, t) && ee(e, t, n[t]);
              return e
            },
            te = (e, n, t) => new Promise((i, a) => {
              var l = e => {
                  try {
                    o(t.next(e))
                  } catch (e) {
                    a(e)
                  }
                },
                r = e => {
                  try {
                    o(t.throw(e))
                  } catch (e) {
                    a(e)
                  }
                },
                o = e => e.done ? i(e.value) : Promise.resolve(e.value).then(l, r);
              o((t = t.apply(e, n)).next())
            });
          const ie = ({
            state: {
              collection: e,
              nft: n,
              network: t,
              to: i,
              memo: Z,
              amount: H
            }
          }) => {
            (0, $.K)({
              event: F.Un.SEND_CONFIRM_NFT,
              props: null
            });
            const K = (0, w.t)(),
              {
                trackAnalytics: Y
              } = (0, V.s)(),
              {
                isLoadingSupports7702: _,
                blockchainSupports7702: ee
              } = (0, B.O)(t.id),
              ie = (0, A.Gc)({
                coinId: t.coinId
              }),
              ae = (0, G.O)(t),
              le = (0, x.F7)(t.coinId),
              [re, oe] = (0, O.useState)(!1),
              [ce, se] = (0, O.useState)(!0),
              [de, ue] = (0, O.useState)(!1);
            if (!le) throw Error(`Account for ${t.coinId} not found`);
            if (!ae) throw Error(`Could not find native asset for chain ID "${t.chainId}".`);
            const {
              formatMessage: me
            } = (0, M.A)(), he = (0, l.Zp)(), pe = (0, O.useContext)(u.o), ve = (0, k.p)(), {
              isCustomNonceEnabled: fe
            } = (0, g.j)(), [be, ye] = (0, O.useState)(!1), [ge, xe] = (0, O.useState)(!1), we = (0, E.C)(), [ke, Ne] = (0, O.useState)(!1), [Ce, Ie] = (0, O.useState)(null), [Te, Se] = (0, O.useState)(null), [je, Oe] = (0, O.useState)(null), [Me, Ee] = (0, O.useState)(null), [Ae, Pe] = (0, O.useState)(null), [$e, Fe] = (0, O.useState)(null), [Le, Ve] = (0, O.useState)(), [Ge, ze] = (0, O.useState)(!1), [Be, De] = (0, O.useState)(!1), [We, Re] = (0, O.useState)({
              originalNonce: 0,
              editedNonce: ""
            }), [Qe, Xe] = (0, O.useState)(P.q.DEFAULT), {
              setShowLedgerConfirmationHint: qe,
              handleLedgerError: Ze,
              LedgerConnectionErrorModal: He
            } = (0, d.U)(), Ue = (0, N.A)(), Je = (0, z.YL)(), [Ke, Ye] = (0, O.useState)(ae.assetId), _e = (0, W.Mr)(Ke), en = (0, R.A)(_e.assetId), [nn, tn] = (0, O.useState)(!1), an = (0, O.useMemo)(() => _e?.assetId !== ae.assetId && ee, [_e, ae, ee]), {
              quotes7702: ln,
              initialLoading7702FeeQuotes: rn,
              refetch7702FeeQuotes: on
            } = (0, X.t)(Ce, an), cn = (0, O.useMemo)(() => ((e, n) => U(e, J(n)))(ne(ne(ne(ne(ne({
              memo: Z,
              from: le.address,
              to: i,
              value: H ?? "1",
              internal: {
                type: "send",
                isMax: !1,
                asset: {
                  decimals: 0,
                  address: n.contractAddress,
                  assetId: ie,
                  nft: n
                }
              },
              network: t
            }, je && {
              gasLimit: je
            }), Me && {
              gasPrice: Me
            }), Ae && {
              maxPriorityFeePerGas: Ae
            }), $e && {
              maxFeePerGas: $e
            }), we?.estimatedBaseFee && {
              baseFee: (0, S.A)(we.estimatedBaseFee).pow(ae.decimals).toFixed(0)
            }), {
              feeAsset: an ? _e : ae,
              feeIs7702: an
            }), [le.address, je, Me, $e, Ae, Z, t, i, an, _e, ae]), sn = (0, O.useCallback)(() => ze(!Ge), [Ge]), dn = () => {
              xe(e => !e)
            }, un = (0, O.useCallback)(({
              customGasLimit: e,
              customGasPrice: n,
              customMaxPriorityFeePerGas: t,
              customMaxFeePerGas: i,
              minGasFeesAcceptable: a
            }, l) => {
              e && Oe(e), n && Ee(n), t && Pe(t), i && Fe(i), a && Ve(a), l && Xe(l), ze(!1)
            }, []), mn = (0, O.useCallback)(() => {
              const {
                editedNonce: e
              } = We, n = e && +e >= 0, t = !e?.includes(".") && !e?.includes(",");
              return !!n && t
            }, [We]), hn = (0, O.useCallback)(() => te(null, null, function*() {
              ye(!0), Se(null);
              try {
                const e = yield f.YW.emit(b.A.STAGE_TRANSACTION, cn);
                Ie(e), fe && Re(n => ({
                  originalNonce: parseInt(e.nonce),
                  editedNonce: n.editedNonce || parseInt(e.nonce) + ""
                }))
              } catch (e) {
                if ("RecipientTokenNotRegisteredError" === e.message) return void Se(me({
                  id: "send.confirm.recipient-not-registered-token"
                }));
                if ("TransferCallerNotOwnerNorApproved" === e.message) return void Se(me({
                  id: "send.confirm.recipient-not-owner-nor-approved"
                }));
                T.A.error(e), Se(me({
                  id: "send.confirm.validation.generic"
                }))
              } finally {
                ye(!1)
              }
            }), [cn, me, fe]), pn = (0, O.useMemo)(() => {
              if (!Ce) return {
                isValid: !0
              };
              const e = (0, Q.QA)(en, _e.decimals).gte((0, Q.QA)(Ce.formattedFee, _e.decimals)),
                n = Ce.feeIs7702 ? e : (0, S.A)(0).add(Ce.formattedFee).lte(K[ae.assetId].balance),
                i = Ce.feeIs7702 ? _e : ae,
                a = (0, q.Z)(i, t);
              return {
                isValid: n,
                error: n ? void 0 : me({
                  id: "generic.insufficient-balance-for-gas"
                }, {
                  assetSymbol: a
                })
              }
            }, [K, me, ae.assetId, ae.symbol, t.symbol, Ce, en, _e]), vn = (0, O.useMemo)(() => !be && !nn && !!Ce && !Te && pn.isValid && (!fe || !ce || mn()), [be, Ce, Te, pn.isValid, fe, ce, mn, nn]), fn = () => {
              Y({
                event: F.BQ.SEND_NFT_TRANSACTION,
                props: {
                  pageViewSource: F.Un.SEND_CONFIRM_NFT,
                  txType: L.w.Send,
                  walletType: Ue.type,
                  nftId: n.id,
                  nftCollectionId: n.collectionId,
                  blockchainId: t.id,
                  nftType: n.type,
                  txStatus: "confirmed"
                }
              })
            }, bn = e => {
              Y({
                event: F.BQ.SEND_NFT_TRANSACTION,
                props: {
                  pageViewSource: F.Un.SEND_CONFIRM_NFT,
                  txType: L.w.Send,
                  walletType: Ue.type,
                  nftId: n.id,
                  nftCollectionId: n.collectionId,
                  blockchainId: t.id,
                  nftType: n.type,
                  txStatus: "failed",
                  txError: e
                }
              })
            }, yn = (0, O.useCallback)(() => te(null, null, function*() {
              var e, n;
              const i = {
                to: Ce.to,
                gasLimit: parseInt(Ce.fee.gasLimit || Ce.fee.limit),
                nonce: parseInt(Ce.nonce),
                chainId: parseInt(Ce?.network.chainId),
                data: Ce.data,
                type: parseInt(Ce.type),
                value: Ce.value
              };
              2 === i.type ? (i.maxFeePerGas = j.gH.from(null != (e = Ce.maxFeePerGas) ? e : Ce.fee.maxPrice), i.maxPriorityFeePerGas = j.gH.from(null != (n = Ce.maxPriorityFeePerGas) ? n : Ce.fee.minerPrice)) : i.gasPrice = parseInt(Ce.fee.price);
              try {
                De(!0);
                const e = yield(0, I.GF)(i, Je.derivationIndex, Ce?.from);
                (yield f.YW.emit(b.A.BROADCAST_TRANSACTION, {
                  signed: e,
                  metadata: Ce,
                  blockchainId: t.id,
                  raw: !0
                })) ? (fn(), he(s.b.HISTORY)) : (bn(""), Ne(!0))
              } catch (e) {
                "TransportStatusError" === e.name && Ze(e, Se), bn(e)
              } finally {
                De(!1)
              }
            }), [Ze, he, t.id, Ce, Je]), gn = (0, O.useCallback)(() => {
              pe.address = i, pe.amount = H, he(-1)
            }, [pe, he, i]), xn = Ce && parseFloat(Ce.formattedFee) < Le;
            return (0, O.useEffect)(() => (te(null, null, function*() {
              yield f.YW.emit(y.A.START_POLL_GAS_FEES, cn)
            }).catch(C.Z), () => {
              f.YW.emit(y.A.STOP_POLL_GAS_FEES)
            }), []), (0, O.useEffect)(() => {
              hn()
            }, [we, hn]), (0, O.useEffect)(() => {
              Promise.all([function() {
                return te(this, null, function*() {
                  const e = yield f.YW.emit(b.A.SUPPORTS_MEMO, t.id);
                  oe(e)
                })
              }(), function() {
                return te(this, null, function*() {
                  const e = yield f.YW.emit(b.A.SUPPORTS_NONCE, t.id);
                  se(e)
                })
              }(), function() {
                return te(this, null, function*() {
                  const e = yield f.YW.emit(b.A.SUPPORTS_CUSTOM_FEE, t);
                  ue(e)
                })
              }()])
            }, [t.id]), (0, O.useEffect)(() => {
              var e, n;
              nn && (Ce?.feeIs7702 && (null == (e = Ce.feeAsset) ? void 0 : e.assetId) === Ke || !1 === Ce?.feeIs7702 && (null == (n = Ce.feeAsset) ? void 0 : n.assetId) === Ke) && tn(!1)
            }, [Ce, nn]), (0, a.jsxs)(v.LN, {
              children: [(0, a.jsx)(v.zY, {
                backAction: gn,
                title: me({
                  id: "generic.confirm"
                })
              }), (0, a.jsxs)(v.Gv, {
                children: [(0, a.jsx)(p.Z, {
                  nft: n,
                  network: e.blockchain
                }), (0, a.jsx)(m.Z, {
                  network: t,
                  customNonce: We,
                  isLoading: be || _ || nn,
                  to: i,
                  memo: Z,
                  amount: H,
                  supportsMemo: re,
                  undervaluedGas: xn,
                  prepareSendResponse: Ce,
                  toggleEditFeeModal: sn,
                  canEditFee: de,
                  supportsNonce: ce,
                  toggleEditNonceModal: dn,
                  flexGasIsSupported: ee
                })]
              }), (0, a.jsx)(h.w, {
                hideErrors: nn,
                blockchainName: t.name,
                genericError: Te,
                validationBalanceError: pn.error,
                transactionIsValid: vn,
                isSendingTransaction: Be,
                onSendTransaction: () => {
                  vn && te(null, null, function*() {
                    if (ve) {
                      qe(!0);
                      try {
                        yield yn()
                      } catch (e) {
                        Ze(e, Se)
                      }
                    } else try {
                      if (De(!0), !(yield f.YW.emit(b.A.COMMIT_TRANSACTION, Ce))) throw Error("Transaction failed");
                      fn(), he(s.b.HISTORY)
                    } catch (e) {
                      T.A.error(e), bn(e), De(!1), Ne(!0)
                    }
                  })
                },
                txType: L.w.Send,
                buttonText: me({
                  id: "generic.confirm"
                })
              }), Ce && de && !ee && (0, a.jsx)(r.G, {
                defaultEIP1559Speed: Qe,
                isOpen: Ge,
                onClose: () => ze(!1),
                onSave: un,
                params: cn,
                tx: Ce
              }), Ce && de && ee && (0, a.jsx)(D.K, {
                opened: Ge,
                onClose: () => ze(!1),
                selectedFeeAssetId: Ke,
                quotes: ln,
                handleOnSave: e => {
                  Ye(e), ze(!1), tn(!0)
                },
                onOpen: on,
                isLoading: rn
              }), (0, a.jsx)(c.X, {
                opened: ke,
                onClose: () => Ne(!1),
                onContinue: gn
              }), fe && ce && Ce && (0, a.jsx)(o.j, {
                opened: ge,
                onClose: dn,
                customNonce: We,
                setCustomNonce: Re,
                setTxData: Ie
              }), (0, a.jsx)(He, {})]
            })
          };
          i()
        } catch (e) {
          i(e)
        }
      })
    },
    37167: (e, n, t) => {
      t.d(n, {
        Z: () => F
      });
      var i = t(74848),
        a = t(55074),
        l = t(27883),
        r = t(48346),
        o = t(69254),
        c = t(86170),
        s = t(26858),
        d = t(92588),
        u = t(15192),
        m = t(96540),
        h = t(6442);
      const p = ({
        blockchain: e,
        fee: n,
        variant: t = l.P.DEFAULT,
        feeAsset: p,
        isLoading: v
      }) => {
        const {
          formatMessage: f
        } = (0, h.A)(), b = (0, s.NE)(e.coinId), y = (0, d.q)(p ?? b), {
          currency: g,
          baseCurrencyType: x
        } = (0, c.P)(), w = (0, m.useMemo)(() => {
          var e;
          return (0, u.A)(n).mul(null != (e = y?.price) ? e : 0).toNumber()
        }, [n, y]);
        return w ? (0, i.jsx)(a.F, {
          label: f({
            id: "generic.total-fiat"
          }, {
            currency: g
          }),
          labelInfoBox: f({
            id: "generic-total-fiat-info"
          }, {
            currency: g
          }),
          variant: t,
          children: (0, i.jsx)(r.S, {
            widthClass: "w-22.5",
            heightClass: "h-4",
            isLoading: !w || v,
            children: (0, i.jsx)(o.h, {
              value: w,
              amountType: x,
              testid: "total-fiat-amount",
              currency: g
            })
          })
        }) : null
      };
      var v = t(74576),
        f = t(90086),
        b = t(65512),
        y = t(52619),
        g = t(75321),
        x = t(4800),
        w = t(85239),
        k = t(52114),
        N = t(1279),
        C = t(5027),
        I = t(66392),
        T = t(40790),
        S = t(3280),
        j = t(21094),
        O = t(7011),
        M = t(41327),
        E = t(94893),
        A = t(68632),
        P = t(65504),
        $ = t(80772);
      const F = ({
        network: e,
        customNonce: n,
        isLoading: t,
        to: F,
        memo: L,
        amount: V,
        supportsMemo: G,
        undervaluedGas: z,
        prepareSendResponse: B,
        toggleEditFeeModal: D,
        canEditFee: W,
        supportsNonce: R,
        toggleEditNonceModal: Q,
        isRisky: X,
        flexGasIsSupported: q
      }) => {
        var Z, H, U, J, K, Y;
        const {
          formatMessage: _
        } = (0, h.A)(), ee = (0, S.p)(), {
          isCustomNonceEnabled: ne
        } = (0, C.j)(), te = (0, T.F7)(e.coinId), ie = parseInt(n.editedNonce) < n.originalNonce, {
          currency: ae,
          baseCurrencyType: le
        } = (0, c.P)(), re = (0, s.NE)(e.coinId), oe = (0, d.q)(B?.feeIs7702 ? B.feeAsset : re);
        if (!te) throw Error(`Account for ${e.coinId} not found`);
        const ce = (0, m.useMemo)(() => {
          var e, n;
          return (0, u.A)(null != (e = B?.formattedFee) ? e : 0).mul(null != (n = oe?.price) ? n : 0).toNumber()
        }, [B, oe]);
        return (0, i.jsxs)(x.LO, {
          children: [(0, i.jsx)("div", {
            className: "mt-4"
          }), (0, i.jsxs)(w.B, {
            children: [(0, i.jsx)(f.q, {
              network: e,
              sender: te.address,
              variant: l.P.TABLE_LIST
            }), (0, i.jsx)(v.C, {
              recipient: F,
              type: I.w.Send,
              network: e,
              variant: l.P.TABLE_LIST
            }), G && L && (0, i.jsx)(a.F, {
              label: _({
                id: "input-memo.placeholder"
              }),
              variant: l.P.TABLE_LIST,
              children: (0, i.jsx)(k.E, {
                testid: "send-nft-memo-tag",
                children: L
              })
            }), (0, i.jsx)(a.F, {
              label: _({
                id: "generic.network"
              }),
              variant: l.P.TABLE_LIST,
              children: (0, i.jsx)(k.E, {
                testid: "network-name",
                children: null != (Z = e.displayName) ? Z : e.name
              })
            }), V && +V > 1 && (0, i.jsx)(a.F, {
              label: _({
                id: "generic.amount"
              }),
              variant: l.P.TABLE_LIST,
              children: (0, i.jsx)(o.h, {
                testid: "send-token-amount",
                value: V,
                currency: "",
                amountType: j.Cu.CRYPTO
              })
            })]
          }), (0, i.jsx)("div", {
            className: "py-4",
            children: (0, i.jsxs)(w.B, {
              children: [q && (0, i.jsx)(O.x, {}), (0, i.jsx)(a.F, {
                label: _({
                  id: "generic.estimated-network-fee"
                }),
                labelTheme: z ? N.Il.WARNING_1_DEFAULT : N.Il.UTILITY_1_OPACITY_1,
                warning: z ? _({
                  id: "send.low-gas-warning"
                }) : null,
                labelInfoBox: ee ? _({
                  id: "send.confirm.hardware-wallet-gas-info"
                }) : null,
                variant: l.P.TABLE_LIST,
                children: (0, i.jsx)(E.c, {
                  testid: "edit-network-fee-button",
                  currentlyUnclickable: !W,
                  onClick: D,
                  disabled: t,
                  children: (0, i.jsxs)("div", {
                    className: "flex space-x-2 items-center",
                    children: [(0, i.jsxs)("div", {
                      className: "flex flex-col items-end",
                      children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(r.S, {
                          isLoading: t,
                          widthClass: "w-22.5",
                          heightClass: "h-4",
                          children: (0, i.jsxs)("div", {
                            className: "flex items-center space-x-1",
                            children: [(0, i.jsx)("div", {
                              children: (0, i.jsx)(P.q, {
                                src: B?.feeIs7702 ? null == (H = B.feeAsset) ? void 0 : H.iconUrl : (0, $.Bv)(e, re),
                                name: B?.feeIs7702 ? null != (J = null == (U = B.feeAsset) ? void 0 : U.name) ? J : "" : re.name,
                                size: A.Y.XXSMALL
                              })
                            }), (0, i.jsx)("div", {
                              children: (0, i.jsx)(o.h, {
                                theme: z ? N.Il.WARNING_1_DEFAULT : N.Il.UTILITY_1_DEFAULT,
                                weight: N.nG.MEDIUM,
                                textType: N.jK.SUBHEADER_14,
                                testid: "network-fee-fiat",
                                value: ce,
                                amountType: le,
                                currency: ae
                              })
                            })]
                          })
                        })
                      }), (0, i.jsx)("div", {
                        children: (0, i.jsx)(r.S, {
                          isLoading: t,
                          marginClass: "mt-[2px]",
                          widthClass: "w-22.5",
                          heightClass: "h-4",
                          children: (0, i.jsx)(o.h, {
                            testid: "network-fee",
                            theme: z ? N.Il.WARNING_1_DEFAULT : N.Il.UTILITY_1_OPACITY_1,
                            weight: N.nG.NORMAL,
                            textType: N.jK.BODY_12,
                            value: B?.formattedFee,
                            currency: B?.feeIs7702 ? null == (K = B.feeAsset) ? void 0 : K.symbol : re.symbol,
                            amountType: j.Cu.CRYPTO,
                            maxSignificantDecimals: 10,
                            tinyThreshold: 10
                          })
                        })
                      })]
                    }), W && (0, i.jsx)("div", {
                      children: (0, i.jsx)(M.v, {
                        colorClass: z ? "text-primary-default" : "text-utility-1-opacity-1"
                      })
                    })]
                  })
                })
              })]
            })
          }), (0, i.jsxs)(w.B, {
            children: [ne && R && (0, i.jsxs)(a.F, {
              labelTheme: ie ? N.Il.WARNING_1_DEFAULT : N.Il.UTILITY_1_OPACITY_1,
              label: _({
                id: "generic.transaction-nonce"
              }),
              warning: ie ? _({
                id: "send.nonce-warning"
              }) : null,
              variant: l.P.TABLE_LIST,
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(k.E, {
                  theme: ie ? N.Il.WARNING_1_DEFAULT : N.Il.UTILITY_1_OPACITY_1,
                  children: n.editedNonce
                })
              }), (0, i.jsx)("div", {
                className: "pl-1",
                children: (0, i.jsx)(b.$, {
                  noPadding: !0,
                  theme: y.ry.TRANSPARENT,
                  onClick: Q,
                  children: (0, i.jsx)(g.R, {
                    width: 15,
                    height: 15,
                    colorClass: ie ? "text-textBrand" : "text-iconNormal"
                  })
                })
              })]
            }), (0, i.jsx)(p, {
              isLoading: t,
              blockchain: e,
              fee: parseFloat(null != (Y = B?.formattedFee) ? Y : "0"),
              feeAsset: B?.feeAsset,
              variant: l.P.TABLE_LIST
            })]
          })]
        })
      }
    },
    40793: (e, n, t) => {
      t.a(e, async (e, i) => {
        try {
          let m = function(e) {
              return e && "asset" in e && "amount" in e
            },
            h = function(e) {
              return e && "collection" in e && "nft" in e
            };
          t.d(n, {
            p: () => p
          });
          var a = t(74848),
            l = t(26264),
            r = t(77711),
            o = t(36631),
            c = t(93155),
            s = t(96540),
            d = (t.n(s), t(47767)),
            u = e([r, o]);
          [r, o] = u.then ? (await u)() : u;
          const p = () => {
            const {
              state: e
            } = (0, d.zy)(), n = (0, d.Zp)();
            return e || c.A.error(`${l.b.SEND_CONFIRM} -  "${e}" is not valid.`), (0, s.useEffect)(() => {
              e || n(l.b.DEFAULT)
            }, []), m(e) ? (0, a.jsx)(r.w, {
              state: e
            }) : h(e) ? (0, a.jsx)(o.w, {
              state: e
            }) : null
          };
          i()
        } catch (e) {
          i(e)
        }
      })
    },
    41411: (e, n, t) => {
      t.d(n, {
        D: () => i
      });
      const i = e => ({
        isValid: !e,
        error: e ?? void 0
      })
    },
    46707: (e, n, t) => {
      t.d(n, {
        j: () => l
      });
      var i = t(68157),
        a = t(96540);
      t.n(a);
      const l = (e, n) => {
        const t = (0, i.GV)(n => n.nft.nfts[e].items);
        return (0, a.useMemo)(() => t.find(e => e.id === n), [t, n])
      }
    },
    53764: (e, n, t) => {
      t.d(n, {
        W: () => V
      });
      var i = t(74848),
        a = t(26264),
        l = t(78262),
        r = t(94893),
        o = t(152),
        c = t(65504),
        s = t(50784),
        d = t(68632),
        u = t(52114),
        m = t(1279);
      const h = ({
        inscription: e,
        asset: n,
        onClick: t
      }) => (0, i.jsx)(o.Z, {
        noPadding: !0,
        children: (0, i.jsxs)(r.c, {
          onClick: () => t(e.id),
          children: [(0, i.jsxs)("div", {
            className: "p-2",
            children: [(0, i.jsx)("div", {
              className: "flex justify-end",
              children: (0, i.jsx)(l.k, {
                on: e.isSelected
              })
            }), (0, i.jsxs)("div", {
              className: "flex items-center justify-center space-x-1 mb-4",
              children: [(0, i.jsx)(c.q, {
                src: n.iconUrl,
                name: n.name,
                size: d.Y.XXSMALL
              }), (0, i.jsxs)(u.E, {
                children: [e.amount, " ", n.symbol]
              })]
            })]
          }), (0, i.jsx)(s.c, {
            noMargin: !0
          }), (0, i.jsx)("div", {
            className: "p-2 text-center",
            children: (0, i.jsxs)(u.E, {
              type: m.jK.CAPTION,
              theme: m.Il.SECONDARY,
              children: ["#", e.inscriptionNumber]
            })
          })]
        })
      });
      var p = t(65512),
        v = t(52619),
        f = t(3367),
        b = t(4800),
        y = t(64145),
        g = t(22670),
        x = t(26858),
        w = t(47996),
        k = t(7707),
        N = t(31902),
        C = t(96540),
        I = t(6442),
        T = t(47767),
        S = t(79830),
        j = Object.defineProperty,
        O = Object.defineProperties,
        M = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        A = {}.hasOwnProperty,
        P = {}.propertyIsEnumerable,
        $ = (e, n, t) => n in e ? j(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        F = (e, n) => {
          for (var t in n || (n = {})) A.call(n, t) && $(e, t, n[t]);
          if (E)
            for (var t of E(n)) P.call(n, t) && $(e, t, n[t]);
          return e
        },
        L = (e, n) => O(e, M(n));
      const V = () => {
        const {
          formatMessage: e
        } = (0, I.A)(), n = (0, T.Zp)(), {
          assetId: t
        } = (0, T.g)(), l = (0, x.Mr)(t);
        if (!l) throw Error(`Could not find asset for assetId "${t}"`);
        const r = (0, C.useContext)(f.o),
          s = (0, w.o)(l.blockchainId),
          j = (0, k.A)(l.assetId),
          O = "0" !== (0, N.P)(l.assetId),
          [M, E] = (0, C.useState)([]),
          [A, P] = (0, C.useState)(O),
          $ = !A && !O,
          V = (0, C.useMemo)(() => M.reduce((e, n) => n.isSelected ? e + +n.amount : e, 0), [M]),
          G = e => {
            const n = M.map(n => n.id === e ? L(F({}, n), {
              isSelected: !n.isSelected
            }) : n);
            E(n)
          };
        return (0, C.useEffect)(() => {
          ((e, n, t) => {
            new Promise((e, n) => {
              var i = e => {
                  try {
                    l(t.next(e))
                  } catch (e) {
                    n(e)
                  }
                },
                a = e => {
                  try {
                    l(t.throw(e))
                  } catch (e) {
                    n(e)
                  }
                },
                l = n => n.done ? e(n.value) : Promise.resolve(n.value).then(i, a);
              l((t = t.apply(null, null)).next())
            })
          })(0, 0, function*() {
            if (O) try {
              const e = (yield y.YW.emit(g.A.FETCH_INSCRIPTIONS_BALANCE_FOR_ADDRESS, {
                blockchainId: s.id,
                address: l.address,
                decimals: l.decimals
              })).map(e => L(F({}, e), {
                isSelected: !!r.inscriptions && r.inscriptions.includes(e.id)
              }));
              E(e)
            } finally {
              P(!1)
            }
          })
        }, []), (0, i.jsxs)(b.LN, {
          children: [(0, i.jsx)(b.zY, {
            backAction: () => n(-1),
            title: e({
              id: "send.title"
            }, {
              assetSymbol: l.symbol
            })
          }), (0, i.jsxs)(b.Gv, {
            children: [(0, i.jsxs)(b.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(c.q, {
                    src: l.iconUrl,
                    name: l.name,
                    network: l.address ? s : void 0,
                    size: d.Y.LARGE
                  })
                }), (0, i.jsx)(u.E, {
                  type: m.jK.SUBTITLE,
                  theme: m.Il.SECONDARY,
                  children: e({
                    id: "generic.on-network"
                  }, {
                    networkName: s.name
                  })
                }), (0, i.jsx)("div", {
                  className: "mt-1.5",
                  children: (0, i.jsxs)(u.E, {
                    type: m.jK.SCREAMER,
                    children: [V, " ", l.symbol]
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "flex flex-col space-y-4 mb-4",
                children: [(0, i.jsx)(o.Z, {
                  children: (0, i.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, i.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [(0, i.jsx)(c.q, {
                        src: l.iconUrl,
                        name: l.name
                      }), (0, i.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, i.jsx)(u.E, {
                          type: m.jK.CAPTION,
                          theme: m.Il.SECONDARY,
                          children: e({
                            id: "send.non-transferable-balance"
                          })
                        }), (0, i.jsxs)(u.E, {
                          type: m.jK.TITLE,
                          children: [j, " ", l.symbol]
                        })]
                      })]
                    }), (0, i.jsx)("div", {
                      children: (0, i.jsx)(p.$, {
                        shape: v.dB.BADGE,
                        onClick: () => {
                          n(`${a.b.SEND}/${l.assetId}/inscribe`)
                        },
                        children: e({
                          id: "generic.inscribe"
                        })
                      })
                    })]
                  })
                }), A && (0, i.jsx)("div", {
                  className: "text-center",
                  children: (0, i.jsx)(S.y, {})
                }), $ && (0, i.jsx)("div", {
                  className: "mx-auto",
                  children: (0, i.jsx)(u.E, {
                    type: m.jK.CAPTION,
                    theme: m.Il.SECONDARY,
                    children: e({
                      id: "generic.inscription.no-transferable-disclaimer"
                    }, {
                      assetSymbol: l.symbol
                    })
                  })
                }), (0, i.jsx)("div", {
                  className: "grid grid-cols-2 gap-4 justify-between",
                  children: M.map(e => (0, i.jsx)(h, {
                    inscription: e,
                    asset: l,
                    onClick: G
                  }, e.id))
                })]
              })]
            }), (0, i.jsx)(p.$, {
              testid: "button-prepare-send-inscription",
              disabled: !V,
              onClick: () => {
                const e = M.filter(e => e.isSelected).map(e => e.id);
                r.setContext({
                  address: "",
                  amount: V.toString(),
                  inscriptions: e
                }), n(`${a.b.SEND}/${l.assetId}`)
              },
              children: e({
                id: "generic.continue"
              })
            })]
          })]
        })
      }
    },
    65818: (e, n, t) => {
      t.d(n, {
        Q: () => l
      });
      var i = t(96540),
        a = (t.n(i), t(78023));
      const l = e => {
        const n = (0, a.X)();
        return (0, i.useMemo)(() => n.find(n => n.id === e), [e, n])
      }
    },
    78262: (e, n, t) => {
      t.d(n, {
        k: () => l
      });
      var i = t(74848),
        a = t(57886);
      const l = ({
        on: e
      }) => e ? (0, i.jsx)(a.y, {
        width: 16,
        height: 16,
        colorClass: "text-primary"
      }) : (0, i.jsx)("div", {
        className: "border-backgroundTertiary border-2 rounded-lg w-4 h-4"
      })
    },
    92926: (e, n, t) => {
      t.d(n, {
        e: () => a,
        z: () => l
      });
      var i, a = ((i = a || {}).INITIATE = "initiate", i.UPDATE = "update", i.CLOSE = "close", i),
        l = (e => (e.recipient = "recipient", e.meta = "meta", e.amount = "amount", e.maxAmount = "maxAmount", e))(l || {})
    }
  }
]);
