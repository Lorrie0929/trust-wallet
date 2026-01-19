try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e.i = e.i || {}, e.i[n] = "f87f8b7e-fbcb-4e73-956a-3e34515522d5", e.u = "sentry-dbid-f87f8b7e-fbcb-4e73-956a-3e34515522d5")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [742], {
    742: (e, n, t) => {
      t.r(n), t.d(n, {
        App: () => Rn,
        default: () => Wn
      });
      var i = t(74848),
        l = t(47767),
        a = t(96540),
        r = t(3367),
        o = t(26264),
        c = t(8559),
        s = t(56383),
        d = t(8192),
        u = t(9526),
        m = t(5360),
        h = t(55074),
        p = t(27883),
        f = t(48346),
        v = t(69254),
        b = t(86170),
        y = t(26858),
        g = t(92588),
        w = t(15192),
        k = t(6442);
      const x = ({
        blockchain: e,
        fee: n,
        variant: t = p.P.DEFAULT,
        feeAsset: l,
        isLoading: r
      }) => {
        const {
          formatMessage: o
        } = (0, k.A)(), c = (0, y.NE)(e.coinId), s = (0, g.q)(l ?? c), {
          currency: d,
          baseCurrencyType: u
        } = (0, b.P)(), m = (0, a.useMemo)(() => {
          var e;
          return (0, w.A)(n).mul(null != (e = s?.price) ? e : 0).toNumber()
        }, [n, s]);
        return m ? (0, i.jsx)(h.F, {
          label: o({
            id: "generic.total-fiat"
          }, {
            currency: d
          }),
          labelInfoBox: o({
            id: "generic-total-fiat-info"
          }, {
            currency: d
          }),
          variant: t,
          children: (0, i.jsx)(f.S, {
            widthClass: "w-22.5",
            heightClass: "h-4",
            isLoading: !m || r,
            children: (0, i.jsx)(v.h, {
              value: m,
              amountType: u,
              testid: "total-fiat-amount",
              currency: d
            })
          })
        }) : null
      };
      var N = t(74576),
        C = t(90086),
        I = t(65512),
        T = t(52619),
        j = t(75321),
        S = t(4800),
        M = t(85239),
        O = t(52114),
        A = t(1279),
        E = t(5027),
        P = t(66392),
        F = t(40790),
        $ = t(3280),
        L = t(21094),
        z = t(7011),
        G = t(41327),
        V = t(94893),
        B = t(68632),
        D = t(65504),
        R = t(80772);
      const W = ({
        network: e,
        customNonce: n,
        isLoading: t,
        to: l,
        memo: r,
        amount: o,
        supportsMemo: c,
        undervaluedGas: s,
        prepareSendResponse: d,
        toggleEditFeeModal: u,
        canEditFee: m,
        supportsNonce: W,
        toggleEditNonceModal: Q,
        isRisky: X,
        flexGasIsSupported: q
      }) => {
        var H, U, J, K, Y, Z;
        const {
          formatMessage: _
        } = (0, k.A)(), ee = (0, $.p)(), {
          isCustomNonceEnabled: ne
        } = (0, E.j)(), te = (0, F.F7)(e.coinId), ie = parseInt(n.editedNonce) < n.originalNonce, {
          currency: le,
          baseCurrencyType: ae
        } = (0, b.P)(), re = (0, y.NE)(e.coinId), oe = (0, g.q)(d?.feeIs7702 ? d.feeAsset : re);
        if (!te) throw Error(`Account for ${e.coinId} not found`);
        const ce = (0, a.useMemo)(() => {
          var e, n;
          return (0, w.A)(null != (e = d?.formattedFee) ? e : 0).mul(null != (n = oe?.price) ? n : 0).toNumber()
        }, [d, oe]);
        return (0, i.jsxs)(S.LO, {
          children: [(0, i.jsx)("div", {
            className: "mt-4"
          }), (0, i.jsxs)(M.B, {
            children: [(0, i.jsx)(C.q, {
              network: e,
              sender: te.address,
              variant: p.P.TABLE_LIST
            }), (0, i.jsx)(N.C, {
              recipient: l,
              type: P.w.Send,
              network: e,
              variant: p.P.TABLE_LIST
            }), c && r && (0, i.jsx)(h.F, {
              label: _({
                id: "input-memo.placeholder"
              }),
              variant: p.P.TABLE_LIST,
              children: (0, i.jsx)(O.E, {
                testid: "send-nft-memo-tag",
                children: r
              })
            }), (0, i.jsx)(h.F, {
              label: _({
                id: "generic.network"
              }),
              variant: p.P.TABLE_LIST,
              children: (0, i.jsx)(O.E, {
                testid: "network-name",
                children: null != (H = e.displayName) ? H : e.name
              })
            }), o && +o > 1 && (0, i.jsx)(h.F, {
              label: _({
                id: "generic.amount"
              }),
              variant: p.P.TABLE_LIST,
              children: (0, i.jsx)(v.h, {
                testid: "send-token-amount",
                value: o,
                currency: "",
                amountType: L.Cu.CRYPTO
              })
            })]
          }), (0, i.jsx)("div", {
            className: "py-4",
            children: (0, i.jsxs)(M.B, {
              children: [q && (0, i.jsx)(z.x, {}), (0, i.jsx)(h.F, {
                label: _({
                  id: "generic.estimated-network-fee"
                }),
                labelTheme: s ? A.Il.WARNING_1_DEFAULT : A.Il.UTILITY_1_OPACITY_1,
                warning: s ? _({
                  id: "send.low-gas-warning"
                }) : null,
                labelInfoBox: ee ? _({
                  id: "send.confirm.hardware-wallet-gas-info"
                }) : null,
                variant: p.P.TABLE_LIST,
                children: (0, i.jsx)(V.c, {
                  testid: "edit-network-fee-button",
                  currentlyUnclickable: !m,
                  onClick: u,
                  disabled: t,
                  children: (0, i.jsxs)("div", {
                    className: "flex space-x-2 items-center",
                    children: [(0, i.jsxs)("div", {
                      className: "flex flex-col items-end",
                      children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(f.S, {
                          isLoading: t,
                          widthClass: "w-22.5",
                          heightClass: "h-4",
                          children: (0, i.jsxs)("div", {
                            className: "flex items-center space-x-1",
                            children: [(0, i.jsx)("div", {
                              children: (0, i.jsx)(D.q, {
                                src: d?.feeIs7702 ? null == (U = d.feeAsset) ? void 0 : U.iconUrl : (0, R.Bv)(e, re),
                                name: d?.feeIs7702 ? null != (K = null == (J = d.feeAsset) ? void 0 : J.name) ? K : "" : re.name,
                                size: B.Y.XXSMALL
                              })
                            }), (0, i.jsx)("div", {
                              children: (0, i.jsx)(v.h, {
                                theme: s ? A.Il.WARNING_1_DEFAULT : A.Il.UTILITY_1_DEFAULT,
                                weight: A.nG.MEDIUM,
                                textType: A.jK.SUBHEADER_14,
                                testid: "network-fee-fiat",
                                value: ce,
                                amountType: ae,
                                currency: le
                              })
                            })]
                          })
                        })
                      }), (0, i.jsx)("div", {
                        children: (0, i.jsx)(f.S, {
                          isLoading: t,
                          marginClass: "mt-[2px]",
                          widthClass: "w-22.5",
                          heightClass: "h-4",
                          children: (0, i.jsx)(v.h, {
                            testid: "network-fee",
                            theme: s ? A.Il.WARNING_1_DEFAULT : A.Il.UTILITY_1_OPACITY_1,
                            weight: A.nG.NORMAL,
                            textType: A.jK.BODY_12,
                            value: d?.formattedFee,
                            currency: d?.feeIs7702 ? null == (Y = d.feeAsset) ? void 0 : Y.symbol : re.symbol,
                            amountType: L.Cu.CRYPTO,
                            maxSignificantDecimals: 10,
                            tinyThreshold: 10
                          })
                        })
                      })]
                    }), m && (0, i.jsx)("div", {
                      children: (0, i.jsx)(G.v, {
                        colorClass: s ? "text-primary-default" : "text-utility-1-opacity-1"
                      })
                    })]
                  })
                })
              })]
            })
          }), (0, i.jsxs)(M.B, {
            children: [ne && W && (0, i.jsxs)(h.F, {
              labelTheme: ie ? A.Il.WARNING_1_DEFAULT : A.Il.UTILITY_1_OPACITY_1,
              label: _({
                id: "generic.transaction-nonce"
              }),
              warning: ie ? _({
                id: "send.nonce-warning"
              }) : null,
              variant: p.P.TABLE_LIST,
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(O.E, {
                  theme: ie ? A.Il.WARNING_1_DEFAULT : A.Il.UTILITY_1_OPACITY_1,
                  children: n.editedNonce
                })
              }), (0, i.jsx)("div", {
                className: "pl-1",
                children: (0, i.jsx)(I.$, {
                  noPadding: !0,
                  theme: T.ry.TRANSPARENT,
                  onClick: Q,
                  children: (0, i.jsx)(j.R, {
                    width: 15,
                    height: 15,
                    colorClass: ie ? "text-textBrand" : "text-iconNormal"
                  })
                })
              })]
            }), (0, i.jsx)(x, {
              isLoading: t,
              blockchain: e,
              fee: parseFloat(null != (Z = d?.formattedFee) ? Z : "0"),
              feeAsset: d?.feeAsset,
              variant: p.P.TABLE_LIST
            })]
          })]
        })
      };
      var Q = t(46191);
      const X = ({
        nft: e,
        network: n
      }) => {
        const {
          formatMessage: t
        } = (0, k.A)(), l = e.name.length ? e.name : `${e.collectionName} #${e.onChainId}`;
        return (0, i.jsxs)("div", {
          className: "flex items-center space-x-2",
          children: [(0, i.jsx)("div", {
            children: (0, i.jsx)(D.q, {
              src: e.previewImageURL.url,
              name: l,
              network: n,
              size: B.Y.LARGE
            })
          }), (0, i.jsxs)("div", {
            className: "flex flex-col",
            children: [(0, i.jsx)(O.E, {
              type: A.jK.HEADER_18,
              children: l
            }), (0, i.jsxs)(O.E, {
              type: A.jK.SUBHEADER_14,
              theme: A.Il.UTILITY_1_OPACITY_1,
              children: [t({
                id: "generic.send"
              }), " NFT"]
            })]
          })]
        })
      };
      var q = t(64145),
        H = t(22670),
        U = t(72722),
        J = t(79960),
        K = t(33055),
        Y = t(26113),
        Z = t(28105),
        _ = t(93155),
        ee = t(37457),
        ne = t(606),
        te = t(75485),
        ie = t(65047),
        le = t(63369),
        ae = t(29584),
        re = t(23207),
        oe = t(8986),
        ce = t(9389),
        se = t(20549),
        de = t(72213),
        ue = t(7707),
        me = t(21025),
        he = t(23184),
        pe = t(52178),
        fe = Object.defineProperty,
        ve = Object.defineProperties,
        be = Object.getOwnPropertyDescriptors,
        ye = Object.getOwnPropertySymbols,
        ge = {}.hasOwnProperty,
        we = {}.propertyIsEnumerable,
        ke = (e, n, t) => n in e ? fe(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        xe = (e, n) => {
          for (var t in n || (n = {})) ge.call(n, t) && ke(e, t, n[t]);
          if (ye)
            for (var t of ye(n)) we.call(n, t) && ke(e, t, n[t]);
          return e
        },
        Ne = (e, n, t) => new Promise((i, l) => {
          var a = e => {
              try {
                o(t.next(e))
              } catch (e) {
                l(e)
              }
            },
            r = e => {
              try {
                o(t.throw(e))
              } catch (e) {
                l(e)
              }
            },
            o = e => e.done ? i(e.value) : Promise.resolve(e.value).then(a, r);
          o((t = t.apply(e, n)).next())
        });
      const Ce = ({
          state: {
            collection: e,
            nft: n,
            network: t,
            to: c,
            memo: h,
            amount: p
          }
        }) => {
          (0, le.K)({
            event: ae.Un.SEND_CONFIRM_NFT,
            props: null
          });
          const f = (0, J.t)(),
            {
              trackAnalytics: v
            } = (0, re.s)(),
            {
              isLoadingSupports7702: b,
              blockchainSupports7702: g
            } = (0, se.O)(t.id),
            x = (0, te.Gc)({
              coinId: t.coinId
            }),
            N = (0, oe.O)(t),
            C = (0, F.F7)(t.coinId),
            [I, T] = (0, a.useState)(!1),
            [j, M] = (0, a.useState)(!0),
            [O, A] = (0, a.useState)(!1);
          if (!C) throw Error(`Account for ${t.coinId} not found`);
          if (!N) throw Error(`Could not find native asset for chain ID "${t.chainId}".`);
          const {
            formatMessage: L
          } = (0, k.A)(), z = (0, l.Zp)(), G = (0, a.useContext)(r.o), V = (0, $.p)(), {
            isCustomNonceEnabled: B
          } = (0, E.j)(), [D, R] = (0, a.useState)(!1), [fe, ye] = (0, a.useState)(!1), ge = (0, ne.C)(), [we, ke] = (0, a.useState)(!1), [Ce, Ie] = (0, a.useState)(null), [Te, je] = (0, a.useState)(null), [Se, Me] = (0, a.useState)(null), [Oe, Ae] = (0, a.useState)(null), [Ee, Pe] = (0, a.useState)(null), [Fe, $e] = (0, a.useState)(null), [Le, ze] = (0, a.useState)(), [Ge, Ve] = (0, a.useState)(!1), [Be, De] = (0, a.useState)(!1), [Re, We] = (0, a.useState)({
            originalNonce: 0,
            editedNonce: ""
          }), [Qe, Xe] = (0, a.useState)(ie.q.DEFAULT), {
            setShowLedgerConfirmationHint: qe,
            handleLedgerError: He,
            LedgerConnectionErrorModal: Ue
          } = (0, m.U)(), Je = (0, K.A)(), Ke = (0, ce.YL)(), [Ye, Ze] = (0, a.useState)(N.assetId), _e = (0, y.Mr)(Ye), en = (0, ue.A)(_e.assetId), [nn, tn] = (0, a.useState)(!1), ln = (0, a.useMemo)(() => _e?.assetId !== N.assetId && g, [_e, N, g]), {
            quotes7702: an,
            initialLoading7702FeeQuotes: rn,
            refetch7702FeeQuotes: on
          } = (0, he.t)(Ce, ln), cn = (0, a.useMemo)(() => ((e, n) => ve(e, be(n)))(xe(xe(xe(xe(xe({
            memo: h,
            from: C.address,
            to: c,
            value: p ?? "1",
            internal: {
              type: "send",
              isMax: !1,
              asset: {
                decimals: 0,
                address: n.contractAddress,
                assetId: x,
                nft: n
              }
            },
            network: t
          }, Se && {
            gasLimit: Se
          }), Oe && {
            gasPrice: Oe
          }), Ee && {
            maxPriorityFeePerGas: Ee
          }), Fe && {
            maxFeePerGas: Fe
          }), ge?.estimatedBaseFee && {
            baseFee: (0, w.A)(ge.estimatedBaseFee).pow(N.decimals).toFixed(0)
          }), {
            feeAsset: ln ? _e : N,
            feeIs7702: ln
          }), [C.address, Se, Oe, Fe, Ee, h, t, c, ln, _e, N]), sn = (0, a.useCallback)(() => Ve(!Ge), [Ge]), dn = () => {
            ye(e => !e)
          }, un = (0, a.useCallback)(({
            customGasLimit: e,
            customGasPrice: n,
            customMaxPriorityFeePerGas: t,
            customMaxFeePerGas: i,
            minGasFeesAcceptable: l
          }, a) => {
            e && Me(e), n && Ae(n), t && Pe(t), i && $e(i), l && ze(l), a && Xe(a), Ve(!1)
          }, []), mn = (0, a.useCallback)(() => {
            const {
              editedNonce: e
            } = Re, n = e && +e >= 0, t = !e?.includes(".") && !e?.includes(",");
            return !!n && t
          }, [Re]), hn = (0, a.useCallback)(() => Ne(null, null, function*() {
            R(!0), je(null);
            try {
              const e = yield q.YW.emit(H.A.STAGE_TRANSACTION, cn);
              Ie(e), B && We(n => ({
                originalNonce: parseInt(e.nonce),
                editedNonce: n.editedNonce || parseInt(e.nonce) + ""
              }))
            } catch (e) {
              if ("RecipientTokenNotRegisteredError" === e.message) return void je(L({
                id: "send.confirm.recipient-not-registered-token"
              }));
              if ("TransferCallerNotOwnerNorApproved" === e.message) return void je(L({
                id: "send.confirm.recipient-not-owner-nor-approved"
              }));
              _.A.error(e), je(L({
                id: "send.confirm.validation.generic"
              }))
            } finally {
              R(!1)
            }
          }), [cn, L, B]), pn = (0, a.useMemo)(() => {
            if (!Ce) return {
              isValid: !0
            };
            const e = (0, me.QA)(en, _e.decimals).gte((0, me.QA)(Ce.formattedFee, _e.decimals)),
              n = Ce.feeIs7702 ? e : (0, w.A)(0).add(Ce.formattedFee).lte(f[N.assetId].balance),
              i = Ce.feeIs7702 ? _e : N,
              l = (0, pe.Z)(i, t);
            return {
              isValid: n,
              error: n ? void 0 : L({
                id: "generic.insufficient-balance-for-gas"
              }, {
                assetSymbol: l
              })
            }
          }, [f, L, N.assetId, N.symbol, t.symbol, Ce, en, _e]), fn = (0, a.useMemo)(() => !D && !nn && !!Ce && !Te && pn.isValid && (!B || !j || mn()), [D, Ce, Te, pn.isValid, B, j, mn, nn]), vn = () => {
            v({
              event: ae.BQ.SEND_NFT_TRANSACTION,
              props: {
                pageViewSource: ae.Un.SEND_CONFIRM_NFT,
                txType: P.w.Send,
                walletType: Je.type,
                nftId: n.id,
                nftCollectionId: n.collectionId,
                blockchainId: t.id,
                nftType: n.type,
                txStatus: "confirmed"
              }
            })
          }, bn = e => {
            v({
              event: ae.BQ.SEND_NFT_TRANSACTION,
              props: {
                pageViewSource: ae.Un.SEND_CONFIRM_NFT,
                txType: P.w.Send,
                walletType: Je.type,
                nftId: n.id,
                nftCollectionId: n.collectionId,
                blockchainId: t.id,
                nftType: n.type,
                txStatus: "failed",
                txError: e
              }
            })
          }, yn = (0, a.useCallback)(() => Ne(null, null, function*() {
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
            2 === i.type ? (i.maxFeePerGas = ee.gH.from(null != (e = Ce.maxFeePerGas) ? e : Ce.fee.maxPrice), i.maxPriorityFeePerGas = ee.gH.from(null != (n = Ce.maxPriorityFeePerGas) ? n : Ce.fee.minerPrice)) : i.gasPrice = parseInt(Ce.fee.price);
            try {
              De(!0);
              const e = yield(0, Z.GF)(i, Ke.derivationIndex, Ce?.from);
              (yield q.YW.emit(H.A.BROADCAST_TRANSACTION, {
                signed: e,
                metadata: Ce,
                blockchainId: t.id,
                raw: !0
              })) ? (vn(), z(o.b.HISTORY)) : (bn(""), ke(!0))
            } catch (e) {
              "TransportStatusError" === e.name && He(e, je), bn(e)
            } finally {
              De(!1)
            }
          }), [He, z, t.id, Ce, Ke]), gn = (0, a.useCallback)(() => {
            G.address = c, G.amount = p, z(-1)
          }, [G, z, c]), wn = Ce && parseFloat(Ce.formattedFee) < Le;
          return (0, a.useEffect)(() => (Ne(null, null, function*() {
            yield q.YW.emit(U.A.START_POLL_GAS_FEES, cn)
          }).catch(Y.Z), () => {
            q.YW.emit(U.A.STOP_POLL_GAS_FEES)
          }), []), (0, a.useEffect)(() => {
            hn()
          }, [ge, hn]), (0, a.useEffect)(() => {
            Promise.all([function() {
              return Ne(this, null, function*() {
                const e = yield q.YW.emit(H.A.SUPPORTS_MEMO, t.id);
                T(e)
              })
            }(), function() {
              return Ne(this, null, function*() {
                const e = yield q.YW.emit(H.A.SUPPORTS_NONCE, t.id);
                M(e)
              })
            }(), function() {
              return Ne(this, null, function*() {
                const e = yield q.YW.emit(H.A.SUPPORTS_CUSTOM_FEE, t);
                A(e)
              })
            }()])
          }, [t.id]), (0, a.useEffect)(() => {
            var e, n;
            nn && (Ce?.feeIs7702 && (null == (e = Ce.feeAsset) ? void 0 : e.assetId) === Ye || !1 === Ce?.feeIs7702 && (null == (n = Ce.feeAsset) ? void 0 : n.assetId) === Ye) && tn(!1)
          }, [Ce, nn]), (0, i.jsxs)(S.LN, {
            children: [(0, i.jsx)(S.zY, {
              backAction: gn,
              title: L({
                id: "generic.confirm"
              })
            }), (0, i.jsxs)(S.Gv, {
              children: [(0, i.jsx)(X, {
                nft: n,
                network: e.blockchain
              }), (0, i.jsx)(W, {
                network: t,
                customNonce: Re,
                isLoading: D || b || nn,
                to: c,
                memo: h,
                amount: p,
                supportsMemo: I,
                undervaluedGas: wn,
                prepareSendResponse: Ce,
                toggleEditFeeModal: sn,
                canEditFee: O,
                supportsNonce: j,
                toggleEditNonceModal: dn,
                flexGasIsSupported: g
              })]
            }), (0, i.jsx)(Q.w, {
              hideErrors: nn,
              blockchainName: t.name,
              genericError: Te,
              validationBalanceError: pn.error,
              transactionIsValid: fn,
              isSendingTransaction: Be,
              onSendTransaction: () => {
                fn && Ne(null, null, function*() {
                  if (V) {
                    qe(!0);
                    try {
                      yield yn()
                    } catch (e) {
                      He(e, je)
                    }
                  } else try {
                    if (De(!0), !(yield q.YW.emit(H.A.COMMIT_TRANSACTION, Ce))) throw Error("Transaction failed");
                    vn(), z(o.b.HISTORY)
                  } catch (e) {
                    _.A.error(e), bn(e), De(!1), ke(!0)
                  }
                })
              },
              txType: P.w.Send,
              buttonText: L({
                id: "generic.confirm"
              })
            }), Ce && O && !g && (0, i.jsx)(s.G, {
              defaultEIP1559Speed: Qe,
              isOpen: Ge,
              onClose: () => Ve(!1),
              onSave: un,
              params: cn,
              tx: Ce
            }), Ce && O && g && (0, i.jsx)(de.K, {
              opened: Ge,
              onClose: () => Ve(!1),
              selectedFeeAssetId: Ye,
              quotes: an,
              handleOnSave: e => {
                Ze(e), Ve(!1), tn(!0)
              },
              onOpen: on,
              isLoading: rn
            }), (0, i.jsx)(u.X, {
              opened: we,
              onClose: () => ke(!1),
              onContinue: gn
            }), B && j && Ce && (0, i.jsx)(d.j, {
              opened: fe,
              onClose: dn,
              customNonce: Re,
              setCustomNonce: We,
              setTxData: Ie
            }), (0, i.jsx)(Ue, {})]
          })
        },
        Ie = () => {
          const {
            state: e
          } = (0, l.zy)(), n = (0, l.Zp)();
          return e || _.A.error(`${o.b.SEND_CONFIRM} -  "${e}" is not valid.`), (0, a.useEffect)(() => {
              e || n(o.b.DEFAULT)
            }, []),
            function(e) {
              return e && "asset" in e && "amount" in e
            }(e) ? (0, i.jsx)(c.w, {
              state: e
            }) : function(e) {
              return e && "collection" in e && "nft" in e
            }(e) ? (0, i.jsx)(Ce, {
              state: e
            }) : null
        };
      var Te = t(92926),
        je = t(52651),
        Se = t(16665),
        Me = t(55418),
        Oe = t(79830),
        Ae = t(14948),
        Ee = t(47996),
        Pe = t(79334),
        Fe = t(65828),
        $e = t(2543),
        Le = t(41411),
        ze = t(27409),
        Ge = t(65666),
        Ve = t(68157),
        Be = t(89419),
        De = Object.defineProperty,
        Re = Object.getOwnPropertySymbols,
        We = {}.hasOwnProperty,
        Qe = {}.propertyIsEnumerable,
        Xe = (e, n, t) => n in e ? De(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        qe = (e, n) => {
          for (var t in n || (n = {})) We.call(n, t) && Xe(e, t, n[t]);
          if (Re)
            for (var t of Re(n)) Qe.call(n, t) && Xe(e, t, n[t]);
          return e
        },
        He = (e, n, t) => new Promise((i, l) => {
          var a = e => {
              try {
                o(t.next(e))
              } catch (e) {
                l(e)
              }
            },
            r = e => {
              try {
                o(t.throw(e))
              } catch (e) {
                l(e)
              }
            },
            o = e => e.done ? i(e.value) : Promise.resolve(e.value).then(a, r);
          o((t = t.apply(e, n)).next())
        });
      const Ue = ({
        assetId: e
      }) => {
        var n, t, c, s, d, u, m;
        const {
          formatMessage: h
        } = (0, k.A)(), p = (0, l.Zp)(), f = (0, $.p)(), b = (0, a.useContext)(r.o), g = (0, y.Mr)(e);
        if (!g) throw Error(`Could not find asset for assetId "${e}"`);
        (0, le.K)({
          event: ae.Un.SEND_PREPARE_CRYPTO,
          props: null
        });
        const x = (0, Ee.o)(g.blockchainId),
          N = (0, Pe.P)(g.blockchainId),
          C = (0, Ve.GV)(e => e.sdkFeatures.prepareSend),
          T = (0, Ve.GV)(e => e.sdkFeatures.prepareSendResolvedAddress),
          j = (0, Ve.GV)(e => e.sdkFeatures.prepareSendResolvingAddress),
          [M, E] = (0, a.useState)(null != (n = b.address) ? n : ""),
          [F, z] = (0, a.useState)(null != (t = b.amount) ? t : ""),
          [G, V] = (0, a.useState)(null != (c = b.memoOrTag) ? c : ""),
          [R, W] = (0, a.useState)(!1),
          [Q, X] = (0, a.useState)(!1),
          [H, U] = (0, a.useState)(!1),
          K = N || x,
          Y = !(null == (s = b.inscriptions) || !s.length),
          Z = (0, J.t)(),
          _ = (0, Fe.Z)(g.assetId),
          {
            blockchainSupports7702: ee,
            isLoadingSupports7702: ne
          } = (0, se.O)(K.id),
          ie = (0, a.useMemo)(() => {
            var e, n, t;
            return {
              memo: C?.meta,
              asset: g,
              network: K,
              amount: null != (n = Y ? null == (e = C?.inscriptionsData) ? void 0 : e.amount : C?.amount) ? n : "",
              to: null != (t = C?.address) ? t : "",
              inscriptions: b.inscriptions,
              type: P.w.Send,
              isMax: (0, w.z)(F || "0").eq(_ ?? 0),
              supports7702: ee
            }
          }, [C?.amount, g, K, b.inscriptions, C?.address, C?.meta, F, _, ee]);
        (0, a.useEffect)(() => {
          Z[e] && !Q && (function() {
            He(this, null, function*() {
              var e, n, t;
              const i = [{
                  property: Te.z.amount,
                  value: null != (e = b.amount) ? e : ""
                }, {
                  property: Te.z.meta,
                  value: null != (n = b.memoOrTag) ? n : ""
                }, {
                  property: Te.z.recipient,
                  value: null != (t = b.address) ? t : ""
                }].filter(e => !!e.value),
                l = {
                  action: Te.e.INITIATE,
                  params: qe({
                    crypto: {
                      asset: g
                    },
                    initialState: i
                  }, b.inscriptions && {
                    inscriptions: {
                      inscriptions: b.inscriptions,
                      amount: b.amount
                    }
                  })
                };
              yield q.YW.emit(Ae.A.PREPARE_SEND, l)
            })
          }(), X(!0))
        }, [Z]), (0, a.useEffect)(() => {
          var e;
          R && (z(null != (e = C?.amount) ? e : F), W(!1))
        }, [C?.amount]);
        const re = (0, $e.debounce)((e, n) => {
            q.YW.emit(Ae.A.PREPARE_SEND, {
              action: Te.e.UPDATE,
              params: {
                property: e,
                value: n
              }
            })
          }, 200),
          oe = e => {
            E(e), Ve.M_.dispatch(Be.T.actions.clearPrepareSendResolvedAddress()), Ve.M_.dispatch(Be.T.actions.clearPrepareSendAddressError()), re(Te.z.recipient, e)
          },
          ce = e => {
            V(e), re(Te.z.meta, e)
          },
          de = (0, a.useMemo)(() => {
            var e, n;
            return Object.values(null != (e = C?.metaType) ? e : {}).includes("Memo") || Object.values(null != (n = C?.metaType) ? n : {}).includes("Object")
          }, [C]),
          ue = (0, a.useMemo)(() => {
            var e;
            return Object.values(null != (e = C?.metaType) ? e : {}).includes("Tag")
          }, [C]),
          me = (j || C?.isLoadingLookup) && !T && null === C?.addressError;
        return C?.isLoading || !Z[e] || ne ? (0, i.jsx)(Me.o, {
          children: (0, i.jsx)(Oe.y, {
            size: B.Y.XLARGE
          })
        }) : (0, i.jsxs)(S.LN, {
          children: [(0, i.jsx)(S.zY, {
            backAction: () => p(-1),
            title: h({
              id: "send.title"
            }, {
              assetSymbol: g.symbol
            })
          }), (0, i.jsxs)(S.Gv, {
            children: [(0, i.jsxs)(S.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(D.q, {
                    src: g.iconUrl,
                    name: g.name,
                    network: g.address ? K : void 0,
                    size: B.Y.MEDIUM
                  })
                }), (0, i.jsx)(O.E, {
                  type: A.jK.BODY_14,
                  theme: A.Il.UTILITY_1_OPACITY_1,
                  children: h({
                    id: "generic.on-network"
                  }, {
                    networkName: null != (d = K.displayName) ? d : K.name
                  })
                })]
              }), (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(Se.S, {
                  testid: "input-recipient",
                  label: h({
                    id: "input-address.address.label"
                  }),
                  value: M || "",
                  onChange: e => oe(e.target.value),
                  placeholder: h({
                    id: "input-address.address.placeholder"
                  }),
                  actions: [{
                    key: "address-input-action-address-book",
                    placeholder: (0, i.jsx)(ze.X, {
                      width: 20,
                      height: 20
                    }),
                    onClick: () => {
                      U(!0)
                    }
                  }],
                  validation: (0, Le.D)(C?.addressError),
                  autoFocus: !0,
                  isLoading: me,
                  specialSubtitle: T ? (0, i.jsxs)("div", {
                    className: "px-3 py-2 bg-backgroundSecondary rounded-xl",
                    children: [(0, i.jsxs)(O.E, {
                      type: A.jK.CAPTION_12,
                      theme: A.Il.UTILITY_1_OPACITY_2,
                      children: [h({
                        id: "send.destination-address"
                      }), ":"]
                    }), (0, i.jsx)("div", {
                      className: "break-all mt-0.5",
                      children: (0, i.jsx)(O.E, {
                        type: A.jK.CAPTION_12,
                        theme: A.Il.UTILITY_1_OPACITY_2,
                        children: T.resolvedAddress
                      })
                    })]
                  }) : void 0
                })
              }), !Y && (0, i.jsxs)(i.Fragment, {
                children: [(de || ue) && (0, i.jsx)("div", {
                  className: "pb-4",
                  children: (0, i.jsx)(Se.S, {
                    testid: "input-memo-tag",
                    label: h(de ? {
                      id: "input-memo.memo.label"
                    } : {
                      id: "input-tag.tag.label"
                    }),
                    value: G,
                    onChange: e => ce(e.target.value),
                    placeholder: h(de ? {
                      id: "input-memo.memo.placeholder"
                    } : {
                      id: "input-tag.tag.placeholder"
                    }),
                    validation: ue ? (0, Le.D)(C?.metaError) : void 0
                  })
                }), (0, i.jsxs)("div", {
                  className: "pb-4",
                  children: [(0, i.jsx)(Se.S, {
                    testid: "input-amount",
                    label: h({
                      id: "input-amount.amount.label"
                    }),
                    value: F,
                    onlyPositive: !0,
                    onChange: e => (e => {
                      isNaN(+e) || e.startsWith("0x") || (z(e), re(Te.z.amount, e))
                    })(e.target.value),
                    placeholder: h({
                      id: "input-amount.amount.placeholder"
                    }),
                    validation: (0, Le.D)(C?.amountError),
                    actions: [{
                      key: "1",
                      placeholder: (0, i.jsx)(O.E, {
                        theme: A.Il.PRIMARY_DEFAULT,
                        type: A.jK.SUBHEADER_14,
                        children: "MAX"
                      }),
                      onClick: () => (W(!0), void q.YW.emit(Ae.A.PREPARE_SEND, {
                        action: Te.e.UPDATE,
                        params: {
                          property: Te.z.maxAmount
                        }
                      }))
                    }]
                  }), (0, i.jsxs)("div", {
                    className: "flex space-x-1",
                    children: [(0, i.jsxs)(O.E, {
                      weight: A.nG.NORMAL,
                      type: A.jK.CAPTION_12,
                      theme: A.Il.UTILITY_1_OPACITY_1,
                      children: [h({
                        id: "send.balance"
                      }), ":"]
                    }), (0, i.jsx)(v.h, {
                      testid: "account-balance",
                      weight: A.nG.NORMAL,
                      textType: A.jK.CAPTION_12,
                      theme: A.Il.UTILITY_1_OPACITY_1,
                      amountType: L.Cu.CRYPTO,
                      value: _,
                      currency: g.symbol,
                      maxSignificantDecimals: 10
                    })]
                  }), !!+(null == (u = Z[g.assetId]) ? void 0 : u.dust) && (0, i.jsxs)("div", {
                    className: "flex space-x-1",
                    children: [(0, i.jsxs)(O.E, {
                      weight: A.nG.NORMAL,
                      type: A.jK.CAPTION_12,
                      theme: A.Il.UTILITY_1_OPACITY_1,
                      children: [h({
                        id: "send.dust-balance"
                      }), ":"]
                    }), (0, i.jsx)(v.h, {
                      weight: A.nG.NORMAL,
                      textType: A.jK.CAPTION_12,
                      theme: A.Il.UTILITY_1_OPACITY_1,
                      amountType: L.Cu.CRYPTO,
                      value: null == (m = Z[g.assetId]) ? void 0 : m.dust,
                      currency: g.symbol,
                      maxSignificantDecimals: 10
                    })]
                  })]
                })]
              })]
            }), f && (0, i.jsx)("div", {
              className: "pb-4",
              children: (0, i.jsx)(je.e, {
                blockchainName: K.name
              })
            }), (0, i.jsx)(I.$, {
              testid: "button-prepare-send-tx",
              disabled: !C?.isNextEnabled || me,
              onClick: () => p(o.b.SEND_CONFIRM, {
                state: ie
              }),
              children: h({
                id: "generic.preview"
              })
            })]
          }), H && (0, i.jsx)(Ge.F, {
            isOpened: H,
            coinId: K.isCustom ? "60" : (0, te.X2)(g.assetId),
            onClose: e => He(null, null, function*() {
              U(!1), e?.address && (oe(e.address), yield new Promise(e => setTimeout(e, 200)), ce(e.memo || G || ""))
            })
          })]
        })
      };
      var Je = t(65818),
        Ke = t(46707);
      const Ye = ({
        collectionId: e,
        nftId: n
      }) => {
        var t, c, s;
        const {
          formatMessage: d
        } = (0, k.A)(), u = (0, l.Zp)(), m = (0, $.p)(), h = (0, a.useContext)(r.o), p = (0, Je.Q)(e);
        if (!p) throw Error(`Could not find collection for collectionId "${e}"`);
        const f = (0, Ke.j)(e, n),
          v = (0, Ve.GV)(e => e.sdkFeatures.prepareSend);
        if (!f) throw Error("NFT Id is missing.");
        (0, le.K)({
          event: ae.Un.SEND_PREPARE_NFT,
          props: null
        });
        const [b, y] = (0, a.useState)(null != (t = h.address) ? t : ""), [g, w] = (0, a.useState)(null != (c = h.memoOrTag) ? c : ""), [x, N] = (0, a.useState)(null != (s = h.amount) ? s : ""), [C, T] = (0, a.useState)(!1), j = (0, a.useMemo)(() => {
          var e, n, t;
          return {
            memo: null != (e = v?.meta) ? e : void 0,
            network: p.blockchain,
            to: null != (n = v?.address) ? n : "",
            amount: null != (t = v?.amount) ? t : "",
            collection: p,
            nft: f
          }
        }, [g, p.blockchain, b]);
        (0, a.useEffect)(() => {
          ! function() {
            ((e, n, t) => {
              new Promise((n, i) => {
                var l = e => {
                    try {
                      r(t.next(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  a = e => {
                    try {
                      r(t.throw(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  r = e => e.done ? n(e.value) : Promise.resolve(e.value).then(l, a);
                r((t = t.apply(e, null)).next())
              })
            })(this, 0, function*() {
              var e, n, t;
              const i = [{
                  property: Te.z.amount,
                  value: null != (e = h.amount) ? e : ""
                }, {
                  property: Te.z.meta,
                  value: null != (n = h.memoOrTag) ? n : ""
                }, {
                  property: Te.z.recipient,
                  value: null != (t = h.address) ? t : ""
                }].filter(e => !!e.value),
                l = {
                  action: Te.e.INITIATE,
                  params: {
                    nft: {
                      nft: f,
                      blockchain: p.blockchain
                    },
                    initialState: i
                  }
                };
              yield q.YW.emit(Ae.A.PREPARE_SEND, l)
            })
          }()
        }, []), (0, a.useEffect)(() => {
          var e;
          C && (N(null != (e = v?.amount) ? e : x), T(!1))
        }, [v?.amount]);
        const M = (0, $e.debounce)((e, n) => {
            q.YW.emit(Ae.A.PREPARE_SEND, {
              action: Te.e.UPDATE,
              params: {
                property: e,
                value: n
              }
            })
          }, 200),
          E = (0, a.useMemo)(() => {
            var e, n;
            return Object.values(null != (e = v?.metaType) ? e : {}).includes("Memo") || Object.values(null != (n = v?.metaType) ? n : {}).includes("Object")
          }, [v]),
          P = e => ({
            isValid: !e,
            error: e
          });
        return (0, i.jsxs)(S.LN, {
          children: [(0, i.jsx)(S.zY, {
            backAction: () => u(-1),
            title: d({
              id: "send.title"
            }, {
              assetSymbol: `${p.name} #${f.onChainId} `
            })
          }), (0, i.jsxs)(S.Gv, {
            children: [(0, i.jsxs)(S.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(D.q, {
                    src: f.previewImageURL.url,
                    name: p.blockchain.name,
                    network: p.blockchain,
                    size: B.Y.XLARGE
                  })
                }), (0, i.jsx)(O.E, {
                  type: A.jK.SUBTITLE,
                  theme: A.Il.SECONDARY,
                  children: d({
                    id: "generic.on-network"
                  }, {
                    networkName: p.blockchain.name
                  })
                })]
              }), (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(Se.S, {
                  label: d({
                    id: "input-address.address.label"
                  }),
                  value: b,
                  onChange: e => (e => {
                    y(e), M(Te.z.recipient, e)
                  })(e.target.value),
                  placeholder: d({
                    id: "input-address.address.placeholder"
                  }),
                  validation: P(v?.addressError),
                  autoFocus: !0
                })
              }), E && (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(Se.S, {
                  label: d({
                    id: "input-memo.memo.label"
                  }),
                  value: g,
                  onChange: e => (e => {
                    w(e), M(Te.z.meta, e)
                  })(e.target.value),
                  placeholder: d({
                    id: "input-memo.memo.placeholder"
                  })
                })
              }), v?.showAmount && (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)(Se.S, {
                  label: d({
                    id: "input-amount.amount.label"
                  }),
                  value: x,
                  onChange: e => (e => {
                    N(e), M(Te.z.amount, e)
                  })(e.target.value),
                  placeholder: d({
                    id: "input-amount.amount.placeholder"
                  }),
                  validation: P(v?.amountError),
                  actions: [{
                    key: "1",
                    placeholder: (0, i.jsx)(O.E, {
                      theme: A.Il.BRAND,
                      children: "MAX"
                    }),
                    onClick: () => (T(!0), void q.YW.emit(Ae.A.PREPARE_SEND, {
                      action: Te.e.UPDATE,
                      params: {
                        property: Te.z.maxAmount
                      }
                    }))
                  }]
                })
              })]
            }), m && (0, i.jsx)("div", {
              className: "pb-4",
              children: (0, i.jsx)(je.e, {
                blockchainName: p.blockchain.name
              })
            }), (0, i.jsx)(I.$, {
              disabled: !v?.isNextEnabled,
              onClick: () => u(o.b.SEND_CONFIRM, {
                state: j
              }),
              children: d({
                id: "generic.preview"
              })
            })]
          })]
        })
      };
      var Ze = t(59754);
      const _e = () => {
        const {
          collectionId: e,
          nftId: n,
          assetId: t
        } = (0, l.g)();
        return (0, Ze.A)(() => {
          q.YW.emit(Ae.A.PREPARE_SEND, {
            action: Te.e.CLOSE
          })
        }), t ? (0, i.jsx)(Ue, {
          assetId: t
        }) : e && n ? (0, i.jsx)(Ye, {
          collectionId: e,
          nftId: n
        }) : null
      };
      var en = t(27214),
        nn = t(52294),
        tn = t(8360),
        ln = t(29189),
        an = t(96471);
      const rn = () => {
        (0, le.K)({
          event: ae.Un.SEND_SELECT_CRYPTO,
          props: null
        });
        const {
          formatMessage: e
        } = (0, k.A)(), n = (0, l.Zp)(), [t, r] = (0, a.useState)(""), c = (0, ln.f)(), [s, d] = (0, a.useState)(c ?? void 0);
        return (0, i.jsxs)(S.LN, {
          children: [(0, i.jsx)(S.zY, {
            backAction: () => n(-1),
            title: e({
              id: "select-asset.send.title",
              defaultMessage: "Select asset to send"
            })
          }), (0, i.jsxs)(S.Gv, {
            children: [(0, i.jsxs)("div", {
              className: "flex flex-col space-y-4 mb-4",
              children: [(0, i.jsx)(tn.D, {
                testid: "input-search-asset",
                value: t,
                onChange: e => r(e.target.value),
                placeholder: e({
                  id: "component.input-asset-search.placeholder"
                })
              }), (0, i.jsx)(nn.M, {
                localFilteringBlockchainId: s,
                onFilterChange: e => d(e ?? void 0)
              })]
            }), (0, i.jsx)(S.LO, {
              children: (0, i.jsx)(en.U, {
                searchQuery: t,
                excludedBlockchainId: "binance",
                targetBlockchainId: s,
                onAssetRowClick: e => {
                  n(`${o.b.SEND}/${e.assetId}${e.type===an.S.BRC20?"/inscriptions":""}`)
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
      };
      var on = t(78262),
        cn = t(152),
        sn = t(50784);
      const dn = ({
        inscription: e,
        asset: n,
        onClick: t
      }) => (0, i.jsx)(cn.Z, {
        noPadding: !0,
        children: (0, i.jsxs)(V.c, {
          onClick: () => t(e.id),
          children: [(0, i.jsxs)("div", {
            className: "p-2",
            children: [(0, i.jsx)("div", {
              className: "flex justify-end",
              children: (0, i.jsx)(on.k, {
                on: e.isSelected
              })
            }), (0, i.jsxs)("div", {
              className: "flex items-center justify-center space-x-1 mb-4",
              children: [(0, i.jsx)(D.q, {
                src: n.iconUrl,
                name: n.name,
                size: B.Y.XXSMALL
              }), (0, i.jsxs)(O.E, {
                children: [e.amount, " ", n.symbol]
              })]
            })]
          }), (0, i.jsx)(sn.c, {
            noMargin: !0
          }), (0, i.jsx)("div", {
            className: "p-2 text-center",
            children: (0, i.jsxs)(O.E, {
              type: A.jK.CAPTION,
              theme: A.Il.SECONDARY,
              children: ["#", e.inscriptionNumber]
            })
          })]
        })
      });
      var un = t(31902),
        mn = Object.defineProperty,
        hn = Object.defineProperties,
        pn = Object.getOwnPropertyDescriptors,
        fn = Object.getOwnPropertySymbols,
        vn = {}.hasOwnProperty,
        bn = {}.propertyIsEnumerable,
        yn = (e, n, t) => n in e ? mn(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        gn = (e, n) => {
          for (var t in n || (n = {})) vn.call(n, t) && yn(e, t, n[t]);
          if (fn)
            for (var t of fn(n)) bn.call(n, t) && yn(e, t, n[t]);
          return e
        },
        wn = (e, n) => hn(e, pn(n));
      const kn = () => {
        const {
          formatMessage: e
        } = (0, k.A)(), n = (0, l.Zp)(), {
          assetId: t
        } = (0, l.g)(), c = (0, y.Mr)(t);
        if (!c) throw Error(`Could not find asset for assetId "${t}"`);
        const s = (0, a.useContext)(r.o),
          d = (0, Ee.o)(c.blockchainId),
          u = (0, ue.A)(c.assetId),
          m = "0" !== (0, un.P)(c.assetId),
          [h, p] = (0, a.useState)([]),
          [f, v] = (0, a.useState)(m),
          b = !f && !m,
          g = (0, a.useMemo)(() => h.reduce((e, n) => n.isSelected ? e + +n.amount : e, 0), [h]),
          w = e => {
            const n = h.map(n => n.id === e ? wn(gn({}, n), {
              isSelected: !n.isSelected
            }) : n);
            p(n)
          };
        return (0, a.useEffect)(() => {
          ((e, n, t) => {
            new Promise((e, n) => {
              var i = e => {
                  try {
                    a(t.next(e))
                  } catch (e) {
                    n(e)
                  }
                },
                l = e => {
                  try {
                    a(t.throw(e))
                  } catch (e) {
                    n(e)
                  }
                },
                a = n => n.done ? e(n.value) : Promise.resolve(n.value).then(i, l);
              a((t = t.apply(null, null)).next())
            })
          })(0, 0, function*() {
            if (m) try {
              const e = (yield q.YW.emit(H.A.FETCH_INSCRIPTIONS_BALANCE_FOR_ADDRESS, {
                blockchainId: d.id,
                address: c.address,
                decimals: c.decimals
              })).map(e => wn(gn({}, e), {
                isSelected: !!s.inscriptions && s.inscriptions.includes(e.id)
              }));
              p(e)
            } finally {
              v(!1)
            }
          })
        }, []), (0, i.jsxs)(S.LN, {
          children: [(0, i.jsx)(S.zY, {
            backAction: () => n(-1),
            title: e({
              id: "send.title"
            }, {
              assetSymbol: c.symbol
            })
          }), (0, i.jsxs)(S.Gv, {
            children: [(0, i.jsxs)(S.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(D.q, {
                    src: c.iconUrl,
                    name: c.name,
                    network: c.address ? d : void 0,
                    size: B.Y.LARGE
                  })
                }), (0, i.jsx)(O.E, {
                  type: A.jK.SUBTITLE,
                  theme: A.Il.SECONDARY,
                  children: e({
                    id: "generic.on-network"
                  }, {
                    networkName: d.name
                  })
                }), (0, i.jsx)("div", {
                  className: "mt-1.5",
                  children: (0, i.jsxs)(O.E, {
                    type: A.jK.SCREAMER,
                    children: [g, " ", c.symbol]
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "flex flex-col space-y-4 mb-4",
                children: [(0, i.jsx)(cn.Z, {
                  children: (0, i.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, i.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [(0, i.jsx)(D.q, {
                        src: c.iconUrl,
                        name: c.name
                      }), (0, i.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, i.jsx)(O.E, {
                          type: A.jK.CAPTION,
                          theme: A.Il.SECONDARY,
                          children: e({
                            id: "send.non-transferable-balance"
                          })
                        }), (0, i.jsxs)(O.E, {
                          type: A.jK.TITLE,
                          children: [u, " ", c.symbol]
                        })]
                      })]
                    }), (0, i.jsx)("div", {
                      children: (0, i.jsx)(I.$, {
                        shape: T.dB.BADGE,
                        onClick: () => {
                          n(`${o.b.SEND}/${c.assetId}/inscribe`)
                        },
                        children: e({
                          id: "generic.inscribe"
                        })
                      })
                    })]
                  })
                }), f && (0, i.jsx)("div", {
                  className: "text-center",
                  children: (0, i.jsx)(Oe.y, {})
                }), b && (0, i.jsx)("div", {
                  className: "mx-auto",
                  children: (0, i.jsx)(O.E, {
                    type: A.jK.CAPTION,
                    theme: A.Il.SECONDARY,
                    children: e({
                      id: "generic.inscription.no-transferable-disclaimer"
                    }, {
                      assetSymbol: c.symbol
                    })
                  })
                }), (0, i.jsx)("div", {
                  className: "grid grid-cols-2 gap-4 justify-between",
                  children: h.map(e => (0, i.jsx)(dn, {
                    inscription: e,
                    asset: c,
                    onClick: w
                  }, e.id))
                })]
              })]
            }), (0, i.jsx)(I.$, {
              testid: "button-prepare-send-inscription",
              disabled: !g,
              onClick: () => {
                const e = h.filter(e => e.isSelected).map(e => e.id);
                s.setContext({
                  address: "",
                  amount: g.toString(),
                  inscriptions: e
                }), n(`${o.b.SEND}/${c.assetId}`)
              },
              children: e({
                id: "generic.continue"
              })
            })]
          })]
        })
      };
      var xn = Object.defineProperty,
        Nn = Object.defineProperties,
        Cn = Object.getOwnPropertyDescriptors,
        In = Object.getOwnPropertySymbols,
        Tn = {}.hasOwnProperty,
        jn = {}.propertyIsEnumerable,
        Sn = (e, n, t) => n in e ? xn(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        Mn = (e, n) => {
          for (var t in n || (n = {})) Tn.call(n, t) && Sn(e, t, n[t]);
          if (In)
            for (var t of In(n)) jn.call(n, t) && Sn(e, t, n[t]);
          return e
        },
        On = (e, n) => Nn(e, Cn(n));
      const An = () => {
        const {
          assetId: e
        } = (0, l.g)(), n = (0, l.Zp)(), {
          formatMessage: t
        } = (0, k.A)();
        if (!e) throw Error(`Asset Id "${e}" is invalid.`);
        const r = (0, y.Mr)(e);
        if (!r) throw Error(`Could not find asset for assetId "${e}"`);
        const c = (0, Ee.o)(r.blockchainId),
          s = (0, ue.A)(r.assetId),
          d = (0, F.F7)(c.coinId),
          u = (0, $.p)(),
          [m, h] = (0, a.useState)(""),
          p = (({
            value: e,
            asset: n,
            decimals: t,
            minimum: i,
            maximum: l,
            minimumThreshold: r,
            minimumThresholdWarning: o
          }) => {
            const {
              formatMessage: c
            } = (0, k.A)(), [s, d] = (0, a.useState)({
              isValid: !1,
              number: !1,
              decimals: !1,
              minimum: !1,
              maximum: !1,
              minimumThreshold: !1,
              minimumThresholdWarning: null
            });
            (0, a.useEffect)(() => {
              d(Mn({}, (({
                value: e,
                decimals: n,
                minimum: t,
                maximum: i,
                minimumThreshold: l,
                minimumThresholdWarning: a
              }) => {
                const r = {
                  number: !1,
                  decimals: !1,
                  minimum: !1,
                  maximum: !1,
                  minimumThreshold: !1,
                  minimumThresholdWarning: null
                };
                if (!e || "0" === e) return On(Mn({}, r), {
                  isValid: !1
                });
                try {
                  const o = (0, w.A)(e);
                  r.number = !0, r.minimum = !t || o.gte((0, w.A)(t)), r.maximum = !i || o.lte((0, w.A)(i));
                  const c = e.indexOf("."),
                    s = -1 !== c ? e.substring(c + 1) : void 0;
                  if (r.decimals = !s || "number" != typeof n || s.length <= n, a && "0" !== a.value && i) {
                    const e = (0, w.A)(i),
                      n = (0, w.A)(a.value);
                    r.minimumThresholdWarning = e.gt(0) && e.gte(o) && e.minus(o).lt(n) ? a.message : null
                  } else r.minimumThresholdWarning = null;
                  if (l && "0" !== l && i) {
                    const e = (0, w.A)(i),
                      n = (0, w.A)(l);
                    r.minimumThreshold = o.lte(e) && e.minus(o).gte(n)
                  } else r.minimumThreshold = !0
                } catch {} finally {
                  return On(Mn({}, r), {
                    isValid: Object.entries(r).every(([e, n]) => "minimumThresholdWarning" === e || !!n)
                  })
                }
              })({
                value: e,
                asset: n,
                decimals: t,
                minimum: i,
                maximum: l,
                minimumThreshold: r,
                minimumThresholdWarning: o
              })))
            }, [e, n, t, i, l]);
            const u = (0, a.useMemo)(() => s.number ? s.decimals ? s.minimum ? s.maximum ? s.minimumThreshold ? s.minimumThresholdWarning ? c({
              id: s.minimumThresholdWarning
            }) : void 0 : c({
              id: "validate-amount.minimum-threshold"
            }, {
              number: r,
              asset: n.symbol
            }) : c({
              id: "validate-amount.maximum"
            }, {
              asset: n.symbol
            }) : c({
              id: "validate-amount.minimum"
            }, {
              number: i
            }) : c({
              id: "validate-amount.decimals"
            }, {
              number: t
            }) : c({
              id: "validate-amount.generic"
            }), [c, s, n, t, i]);
            return {
              isValid: s.isValid,
              error: u
            }
          })({
            value: m,
            asset: r,
            decimals: r.decimals,
            maximum: s,
            minimumThreshold: "0"
          }),
          f = (0, a.useMemo)(() => ({
            asset: r,
            network: c,
            amount: m,
            to: d.address,
            type: P.w.Inscribe
          }), [r, c, m]);
        return (0, i.jsxs)(S.LN, {
          children: [(0, i.jsx)(S.zY, {
            title: `${t({id:"generic.inscribe"})} ${r.symbol}`,
            backAction: () => n(-1)
          }), (0, i.jsxs)(S.Gv, {
            children: [(0, i.jsxs)(S.LO, {
              children: [(0, i.jsxs)("div", {
                className: "flex flex-col space-y-1 text-center pb-4",
                children: [(0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(D.q, {
                    src: r.iconUrl,
                    name: r.name,
                    network: r.address ? c : void 0,
                    size: B.Y.LARGE
                  })
                }), (0, i.jsx)(O.E, {
                  type: A.jK.SUBTITLE,
                  theme: A.Il.SECONDARY,
                  children: t({
                    id: "generic.on-network"
                  }, {
                    networkName: c.name
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "pb-4",
                children: [(0, i.jsx)(Se.S, {
                  testid: "input-amount",
                  label: t({
                    id: "input-amount.amount.label"
                  }),
                  value: m,
                  onChange: e => h(e.target.value),
                  placeholder: t({
                    id: "input-amount.amount.placeholder"
                  }),
                  validation: p,
                  actions: [{
                    key: "max",
                    placeholder: (0, i.jsx)(O.E, {
                      theme: A.Il.BRAND,
                      children: "MAX"
                    }),
                    disabled: "0" === s,
                    onClick: () => h(s)
                  }]
                }), (0, i.jsxs)("div", {
                  className: "flex space-x-1",
                  children: [(0, i.jsxs)(O.E, {
                    weight: A.nG.NORMAL,
                    type: A.jK.SUBTITLE,
                    theme: A.Il.SECONDARY,
                    children: [t({
                      id: "generic.available-balance"
                    }), ":"]
                  }), (0, i.jsx)(v.h, {
                    testid: "inscribe-balance",
                    weight: A.nG.NORMAL,
                    textType: A.jK.SUBTITLE,
                    theme: A.Il.SECONDARY,
                    amountType: L.Cu.CRYPTO,
                    value: s,
                    currency: r.symbol,
                    maxSignificantDecimals: 10
                  })]
                })]
              })]
            }), u && (0, i.jsx)("div", {
              className: "pb-4",
              children: (0, i.jsx)(je.e, {
                blockchainName: c.name
              })
            }), (0, i.jsx)(I.$, {
              testid: "button-prepare-inscribe-tx",
              disabled: !p.isValid,
              onClick: () => n(o.b.SEND_CONFIRM, {
                state: f
              }),
              children: t({
                id: "generic.continue"
              })
            })]
          })]
        })
      };
      var En = Object.defineProperty,
        Pn = Object.defineProperties,
        Fn = Object.getOwnPropertyDescriptors,
        $n = Object.getOwnPropertySymbols,
        Ln = {}.hasOwnProperty,
        zn = {}.propertyIsEnumerable,
        Gn = (e, n, t) => n in e ? En(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        Vn = (e, n) => {
          for (var t in n || (n = {})) Ln.call(n, t) && Gn(e, t, n[t]);
          if ($n)
            for (var t of $n(n)) zn.call(n, t) && Gn(e, t, n[t]);
          return e
        },
        Bn = (e, n) => Pn(e, Fn(n));
      const Dn = () => {
          const e = e => {
              t(n => Vn(Vn({}, n), e))
            },
            [n, t] = (0, a.useState)({
              setContext: e
            });
          return (0, i.jsx)(r.o.Provider, {
            value: Bn(Vn({}, n), {
              setContext: e
            }),
            children: (0, i.jsx)(l.sv, {})
          })
        },
        Rn = () => (0, i.jsxs)(l.BV, {
          children: [(0, i.jsx)(l.qh, {
            index: !0,
            element: (0, i.jsx)(rn, {})
          }), (0, i.jsxs)(l.qh, {
            element: (0, i.jsx)(Dn, {}),
            children: [(0, i.jsx)(l.qh, {
              path: "/:assetId",
              element: (0, i.jsx)(_e, {})
            }), (0, i.jsx)(l.qh, {
              path: "/:collectionId/:nftId",
              element: (0, i.jsx)(_e, {})
            }), (0, i.jsx)(l.qh, {
              path: "/:assetId/inscriptions",
              element: (0, i.jsx)(kn, {})
            }), (0, i.jsx)(l.qh, {
              path: "/:assetId/inscribe",
              element: (0, i.jsx)(An, {})
            }), (0, i.jsx)(l.qh, {
              path: "/confirm",
              element: (0, i.jsx)(Ie, {})
            })]
          })]
        }),
        Wn = Rn
    },
    31902: (e, n, t) => {
      t.d(n, {
        P: () => l
      });
      var i = t(79960);

      function l(e) {
        var n;
        return (null == (n = (0, i.t)()[e]) ? void 0 : n.transferable) || "0"
      }
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
        j: () => a
      });
      var i = t(68157),
        l = t(96540);
      const a = (e, n) => {
        const t = (0, i.GV)(n => n.nft.nfts[e].items);
        return (0, l.useMemo)(() => t.find(e => e.id === n), [t, n])
      }
    },
    52294: (e, n, t) => {
      t.d(n, {
        M: () => I
      });
      var i = t(74848),
        l = t(29584),
        a = t(23207),
        r = t(65504),
        o = t(68632),
        c = t(64145),
        s = t(22670),
        d = t(28398),
        u = t(44832),
        m = t(29189),
        h = t(69275),
        p = t(33055),
        f = t(29251),
        v = t(26113),
        b = t(96540),
        y = t(6442),
        g = t(98939),
        w = t(52114),
        k = t(1279),
        x = t(20998),
        N = t(10551);
      const C = [g.hF.SmartChain, g.hF.Ethereum, g.hF.Solana, g.hF.Tron, g.hF.Arbitrum],
        I = ({
          useGlobalState: e,
          localFilteringBlockchainId: n,
          onFilterChange: t
        }) => {
          const {
            formatMessage: g
          } = (0, y.A)(), {
            trackAnalytics: I
          } = (0, a.s)(), T = (0, p.A)(), j = (0, h.o)(), S = (0, u.g)(!0), M = (0, m.f)(), [O, A] = (0, b.useState)(!1), E = e ? M : n, P = (0, b.useMemo)(() => {
            if (T.type === f.S.MNEMONIC) return S;
            const e = Object.keys(j).map(e => e);
            return S.filter(n => e.includes(n.coinId.toString()))
          }, [S, j, T]), F = (0, b.useMemo)(() => P?.find(e => e.id === E), [P, E]);
          (0, b.useEffect)(() => {
            e && E && !F && c.YW.emit(s.A.SWITCH_FILTERING_BLOCKCHAIN, null)
          }, [e, E, F]);
          const $ = (0, b.useMemo)(() => C.map(e => P.find(n => n.coinId === e)).filter(e => void 0 !== e), [P]),
            L = P.length,
            z = n => ((e, n, t) => new Promise((e, n) => {
              var i = e => {
                  try {
                    a(t.next(e))
                  } catch (e) {
                    n(e)
                  }
                },
                l = e => {
                  try {
                    a(t.throw(e))
                  } catch (e) {
                    n(e)
                  }
                },
                a = n => n.done ? e(n.value) : Promise.resolve(n.value).then(i, l);
              a((t = t.apply(null, null)).next())
            }))(0, 0, function*() {
              var i;
              if (!e) {
                const e = null != (i = n?.id) ? i : null;
                return void t?.(e)
              }
              if (!n) return void(yield Promise.allSettled([c.YW.emit(s.A.SWITCH_FILTERING_BLOCKCHAIN, null), (0, v.yy)(250)]));
              const a = n.isCustom ? d.l.CUSTOM : d.l.MAIN;
              yield Promise.allSettled([c.YW.emit(s.A.SWITCH_FILTERING_BLOCKCHAIN, n.id), (0, v.yy)(250)]), I({
                event: l.BQ.SWITCH_FILTERING_NETWORK,
                props: {
                  pageViewSource: l.Un.HOME,
                  blockchainName: n.name,
                  blockchainChainId: n.chainId,
                  blockchainType: a
                }
              })
            }),
            G = e => e ? E === e.id : !E;
          return (0, i.jsxs)("div", {
            className: "flex items-center justify-between overflow-x-auto scrollbar-hide pb-2",
            children: [(0, i.jsx)("button", {
              onClick: () => z(null),
              className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center " + (G(null) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
              "data-testid": "horizontal-network-filter-all",
              title: g({
                id: "component.blockchain-select.all-networks",
                defaultMessage: "All Networks"
              }),
              children: (0, i.jsx)("span", {
                className: G(null) ? "!text-primary" : "",
                children: (0, i.jsx)(w.E, {
                  type: k.jK.SUBHEADER_14,
                  theme: G(null) ? k.Il.PRIMARY_DEFAULT : void 0,
                  children: g({
                    id: "component.blockchain-select.all",
                    defaultMessage: "All"
                  })
                })
              })
            }), $.map(e => {
              var n;
              return (0, i.jsx)("button", {
                onClick: () => z(e),
                className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all " + (G(e) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
                "data-testid": "horizontal-network-filter-" + e.symbol.toLowerCase(),
                title: null != (n = e.displayName) ? n : e.name,
                children: (0, i.jsx)("div", {
                  className: "w-full h-full rounded-full overflow-hidden flex items-center justify-center",
                  children: (0, i.jsx)(r.q, {
                    name: e.name,
                    size: o.Y.MEDIUM,
                    src: e.iconUrl
                  })
                })
              }, e.id)
            }), (0, i.jsxs)("button", {
              onClick: () => A(!0),
              className: "flex-shrink-0 px-3 py-2 rounded-full border-2 border-utility-1-opacity-5 bg-background-2 flex items-center gap-1.5",
              "data-testid": "horizontal-network-filter-more",
              title: L + " networks available",
              children: [(0, i.jsx)(w.E, {
                type: k.jK.SUBHEADER_14,
                children: L
              }), (0, i.jsx)(N.b, {
                width: 12,
                height: 12,
                colorClass: "text-utility-1-opacity-1"
              })]
            }), (0, i.jsx)(x.S, {
              isOpen: O,
              onClose: () => A(!1),
              blockchainList: P,
              selectedBlockchainId: E ?? null,
              onSelectNetwork: z
            })]
          })
        }
    },
    65818: (e, n, t) => {
      t.d(n, {
        Q: () => a
      });
      var i = t(96540),
        l = t(78023);
      const a = e => {
        const n = (0, l.X)();
        return (0, i.useMemo)(() => n.find(n => n.id === e), [e, n])
      }
    },
    78262: (e, n, t) => {
      t.d(n, {
        k: () => a
      });
      var i = t(74848),
        l = t(57886);
      const a = ({
        on: e
      }) => e ? (0, i.jsx)(l.y, {
        width: 16,
        height: 16,
        colorClass: "text-primary"
      }) : (0, i.jsx)("div", {
        className: "border-backgroundTertiary border-2 rounded-lg w-4 h-4"
      })
    },
    92926: (e, n, t) => {
      t.d(n, {
        e: () => l,
        z: () => a
      });
      var i, l = ((i = l || {}).INITIATE = "initiate", i.UPDATE = "update", i.CLOSE = "close", i),
        a = (e => (e.recipient = "recipient", e.meta = "meta", e.amount = "amount", e.maxAmount = "maxAmount", e))(a || {})
    }
  }
]);
