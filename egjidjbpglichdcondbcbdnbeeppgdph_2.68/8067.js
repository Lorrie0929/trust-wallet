"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8067], {
    27328: (e, t, l) => {
      l.d(t, {
        At: () => n,
        JS: () => s,
        O4: () => d
      });
      var a = l(68157);

      function s({
        asArray: e = !1
      } = {}) {
        const t = (0, a.GV)(e => e.wallet.addressBook);
        return e ? Object.values(t) : t
      }

      function d(e) {
        return (0, a.GV)(e => e.wallet.addressBook)[e]
      }

      function n(e) {
        const t = s({
          asArray: !0
        });
        return e ? t.filter(t => t.addresses[e]) : t
      }
    },
    27409: (e, t, l) => {
      l.d(t, {
        X: () => s
      });
      var a = l(74848);
      const s = ({
        width: e,
        height: t,
        colorClass: l = "text-primary"
      }) => (0, a.jsx)("svg", {
        className: l,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, a.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.35714 4.92868C3.35714 3.62686 4.41247 2.57153 5.71429 2.57153H16.7143C18.0161 2.57153 19.0714 3.62686 19.0714 4.92868V19.0715C19.0714 20.3733 18.0161 21.4287 16.7143 21.4287H5.71429C4.41247 21.4287 3.35714 20.3733 3.35714 19.0715V17.893H2.17857C1.52766 17.893 1 17.3653 1 16.7144C1 16.0635 1.52766 15.5358 2.17857 15.5358H3.35714V13.1787H2.17857C1.52766 13.1787 1 12.651 1 12.0001C1 11.3492 1.52766 10.8215 2.17857 10.8215H3.35714V8.46439H2.17857C1.52766 8.46439 1 7.93672 1 7.28582C1 6.63492 1.52766 6.10725 2.17857 6.10725H3.35714V4.92868ZM23 5.71439C23 5.06349 22.4723 4.53582 21.8214 4.53582C21.1705 4.53582 20.6429 5.06349 20.6429 5.71439V7.28582C20.6429 7.93672 21.1705 8.46439 21.8214 8.46439C22.4723 8.46439 23 7.93672 23 7.28582V5.71439ZM21.8214 10.0358C22.4723 10.0358 23 10.5635 23 11.2144V12.7858C23 13.4367 22.4723 13.9644 21.8214 13.9644C21.1705 13.9644 20.6429 13.4367 20.6429 12.7858V11.2144C20.6429 10.5635 21.1705 10.0358 21.8214 10.0358ZM9.25 7.08939C8.70757 7.08939 8.26786 7.52911 8.26786 8.07153C8.26786 8.61396 8.70757 9.05368 9.25 9.05368H13.1786C13.721 9.05368 14.1607 8.61396 14.1607 8.07153C14.1607 7.52911 13.721 7.08939 13.1786 7.08939H9.25Z",
          fill: "currentColor"
        })
      })
    },
    34025: (e, t, l) => {
      l.d(t, {
        R: () => s
      });
      var a = l(74848);
      const s = ({
        width: e,
        height: t,
        colorClass: l
      }) => (0, a.jsx)("svg", {
        className: l,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, a.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.2323 4.87509C10.7011 4.40624 11.337 4.14286 12.0001 4.14286C12.6631 4.14286 13.299 4.40624 13.7678 4.87509C14.0641 5.17133 14.2783 5.53424 14.3959 5.92857H9.60428C9.72186 5.53424 9.93607 5.17133 10.2323 4.87509ZM7.41247 5.92857C7.563 4.96173 8.01654 4.06039 8.71707 3.35986C9.58778 2.48916 10.7687 2 12.0001 2C13.2314 2 14.4124 2.48916 15.2831 3.35986C15.9836 4.06039 16.4372 4.96173 16.5876 5.92857H20.2144C20.8061 5.92857 21.2858 6.40827 21.2858 7C21.2858 7.59173 20.8061 8.07143 20.2144 8.07143H19.1429V19.8571C19.1429 20.4254 18.9172 20.9706 18.5154 21.3724C18.1135 21.7743 17.5684 22 17.0001 22H7.00007C6.43174 22 5.8867 21.7743 5.48484 21.3724C5.08298 20.9706 4.85721 20.4254 4.85721 19.8571V8.07143H3.78578C3.19405 8.07143 2.71436 7.59173 2.71436 7C2.71436 6.40827 3.19405 5.92857 3.78578 5.92857H7.41247ZM9.50007 10.3949C9.99318 10.3949 10.3929 10.7947 10.3929 11.2878V17.0043C10.3929 17.4973 9.99318 17.8971 9.50007 17.8971C9.00696 17.8971 8.60721 17.4973 8.60721 17.0043V11.2878C8.60721 10.7947 9.00696 10.3949 9.50007 10.3949ZM15.3929 11.2878C15.3929 10.7947 14.9932 10.3949 14.5001 10.3949C14.007 10.3949 13.6072 10.7947 13.6072 11.2878V17.0043C13.6072 17.4973 14.007 17.8971 14.5001 17.8971C14.9932 17.8971 15.3929 17.4973 15.3929 17.0043V11.2878Z",
          fill: "currentColor"
        })
      })
    },
    71431: (e, t, l) => {
      l.d(t, {
        F: () => Ne,
        J: () => ye
      });
      var a = l(74848),
        s = l(22146),
        d = l(76493),
        n = l(69275),
        i = l(96540),
        r = l(6442),
        o = l(27328),
        c = l(92949),
        u = l(52114),
        h = l(16665),
        m = l(1279);
      const f = ({
        width: e,
        height: t,
        colorClass: l
      }) => (0, a.jsx)("svg", {
        className: l,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, a.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22 12C22 17.5229 17.5229 22 12 22C6.47716 22 2 17.5229 2 12C2 6.47716 6.47716 2 12 2C17.5229 2 22 6.47716 22 12ZM12 6.64286C12.5917 6.64286 13.0714 7.12256 13.0714 7.71429V10.9286H16.2857C16.8774 10.9286 17.3571 11.4083 17.3571 12C17.3571 12.5917 16.8774 13.0714 16.2857 13.0714H13.0714V16.2857C13.0714 16.8774 12.5917 17.3571 12 17.3571C11.4083 17.3571 10.9286 16.8774 10.9286 16.2857V13.0714H7.71429C7.12256 13.0714 6.64286 12.5917 6.64286 12C6.64286 11.4083 7.12256 10.9286 7.71429 10.9286H10.9286V7.71429C10.9286 7.12256 11.4083 6.64286 12 6.64286Z",
          fill: "currentColor"
        })
      });
      var C = l(10537),
        g = l(94893),
        v = l(65504),
        b = l(68632),
        p = l(50784),
        w = l(41327),
        k = l(40053),
        x = Object.defineProperty,
        M = Object.defineProperties,
        y = Object.getOwnPropertyDescriptors,
        N = Object.getOwnPropertySymbols,
        A = {}.hasOwnProperty,
        V = {}.propertyIsEnumerable,
        H = (e, t, l) => t in e ? x(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        O = (e, t) => {
          for (var l in t || (t = {})) A.call(t, l) && H(e, l, t[l]);
          if (N)
            for (var l of N(t)) V.call(t, l) && H(e, l, t[l]);
          return e
        },
        j = (e, t) => M(e, y(t));

      function E({
        name: e,
        addresses: t,
        editedWallet: l,
        setName: s,
        onAddAddress: d,
        onSelectAddress: n
      }) {
        const {
          formatMessage: c
        } = (0, r.A)(), x = (0, C.n)(!0), M = (0, o.JS)({
          asArray: !0
        }), y = (0, i.useMemo)(() => Object.entries(t).map(([e, t]) => {
          const l = x.find(t => t.coinId.toString() === e);
          return j(O({}, t), {
            blockchain: l
          })
        }), [t, x]), N = function(e, t, l) {
          return (0, i.useMemo)(() => {
            const a = !t.includes(e);
            return {
              isValid: a,
              error: a ? void 0 : l
            }
          }, [e, t, l])
        }(e, M.filter(e => e.id !== l?.id).map(e => e.name), c({
          id: "new-address-book-wallet.name-input.error",
          defaultMessage: "Name already exists"
        }));
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-6",
          children: [(0, a.jsx)(h.S, {
            label: c({
              id: "new-address-book-wallet.name-input.label",
              defaultMessage: "Name"
            }),
            placeholder: c({
              id: "new-address-book-wallet.name-input.placeholder",
              defaultMessage: "Enter wallet name"
            }),
            value: e,
            validation: N,
            testid: "new-address-book-wallet-name-input",
            onChange: e => s(e.target.value)
          }), (0, a.jsxs)("div", {
            className: "flex flex-col",
            children: [y.map(({
              address: e,
              blockchain: t
            }) => {
              var l;
              return (0, a.jsx)(g.c, {
                testid: "new-address-book-wallet-address-" + t.id,
                onClick: () => {
                  n(t)
                },
                children: (0, a.jsxs)("div", {
                  className: "flex items-center mb-2",
                  children: [(0, a.jsx)(v.q, {
                    name: t.name,
                    size: b.Y.SMALL,
                    src: t.iconUrl
                  }), (0, a.jsxs)("div", {
                    className: "pl-2 flex flex-col",
                    children: [(0, a.jsx)(u.E, {
                      type: m.jK.SUBTITLE,
                      weight: m.nG.BOLD,
                      theme: m.Il.PRIMARY,
                      children: null != (l = t.displayName) ? l : t.name
                    }), (0, a.jsx)(u.E, {
                      type: m.jK.CAPTION,
                      weight: m.nG.NORMAL,
                      theme: m.Il.SECONDARY,
                      children: e.length > 59 ? (0, k.p)({
                        value: e,
                        maxCharsPerSide: 20
                      }) : e
                    })]
                  }), (0, a.jsx)("div", {
                    className: "ml-auto",
                    children: (0, a.jsx)(w.v, {
                      colorClass: "text-textThird"
                    })
                  })]
                })
              }, t.id)
            }), !!y.length && (0, a.jsx)(p.c, {}), (0, a.jsx)(g.c, {
              testid: "add-address-button",
              onClick: d,
              children: (0, a.jsxs)("div", {
                className: "flex items-center cursor-pointer gap-3 mb-6",
                children: [(0, a.jsx)(f, {
                  width: 20,
                  height: 20,
                  colorClass: "text-primary"
                }), (0, a.jsxs)("div", {
                  className: "flex flex-col",
                  children: [(0, a.jsx)(u.E, {
                    type: m.jK.TITLE,
                    theme: m.Il.BRAND,
                    children: c({
                      id: "new-address-book-wallet.add-button.title",
                      defaultMessage: "Add Address"
                    })
                  }), (0, a.jsx)(u.E, {
                    type: m.jK.CAPTION,
                    theme: m.Il.SECONDARY,
                    children: c({
                      id: "new-address-book-wallet.add-button.subtitle",
                      defaultMessage: "Select an asset and add its corresponding address."
                    })
                  })]
                })]
              })
            })]
          })]
        })
      }
      var S = l(50882),
        T = l(9302),
        D = l(29251),
        Z = l(33055);

      function W({
        walletAddresses: e,
        setBlockchain: t
      }) {
        const {
          formatMessage: l
        } = (0, r.A)(), s = (0, n.o)(), d = (0, Z.A)(), [o, c] = (0, i.useState)(""), f = (0, C.n)(!0), p = (0, i.useMemo)(() => f.filter(t => {
          var l;
          if (Object.keys(e).includes(t.coinId.toString()) || d.type === D.S.PRIVATE_KEY && !s[t.coinId]) return !1;
          const a = o.toLowerCase();
          return t.name.toLowerCase().includes(a) || (null == (l = t.displayName) ? void 0 : l.toLowerCase().includes(a)) || t.symbol.toLowerCase().includes(a)
        }), [f, e, o]);
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [(0, a.jsx)(h.S, {
            value: o,
            placeholder: l({
              id: "blockchain-list.search.placeholder",
              defaultMessage: "Search"
            }),
            testid: "blockchain-list-search-input",
            autoFocus: !0,
            onChange: e => c(e.target.value)
          }), (0, a.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [p.map(e => {
              var l, s;
              return (0, a.jsx)(g.c, {
                testid: "blockchain-list-item-" + e.id,
                onClick: () => {
                  t(e)
                },
                children: (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [(0, a.jsx)("div", {
                    children: (0, a.jsx)(v.q, {
                      name: e.name,
                      size: b.Y.SMALL,
                      src: e.iconUrl
                    })
                  }), (0, a.jsxs)("div", {
                    className: "pl-2 flex flex-col",
                    children: [(0, a.jsxs)("div", {
                      className: "flex space-x-1",
                      children: [(0, a.jsx)(u.E, {
                        testid: "blockchain-list-item-symbol-" + e.id,
                        type: m.jK.SUBTITLE,
                        weight: m.nG.BOLD,
                        theme: m.Il.PRIMARY,
                        children: e.symbol
                      }), (0, a.jsx)(S.E, {
                        text: null != (l = e.displayName) ? l : e.name
                      })]
                    }), (0, a.jsx)(u.E, {
                      testid: "blockchain-list-item-name-" + e.id,
                      type: m.jK.CAPTION,
                      weight: m.nG.NORMAL,
                      theme: m.Il.SECONDARY,
                      children: null != (s = e.displayName) ? s : e.name
                    })]
                  })]
                })
              }, e.id)
            }), !p.length && (0, a.jsxs)("div", {
              className: "flex flex-col items-center justify-center h-full gap-4 my-6",
              children: [(0, a.jsx)(T.x, {}), (0, a.jsx)(u.E, {
                children: l({
                  id: "blockchain-list.no-blockchains-found",
                  defaultMessage: "No results were found"
                })
              })]
            })]
          })]
        })
      }
      var B = l(75395),
        I = l(64145),
        R = l(22670),
        L = l(40790),
        P = l(51594),
        _ = (e, t, l) => new Promise((a, s) => {
          var d = e => {
              try {
                i(l.next(e))
              } catch (e) {
                s(e)
              }
            },
            n = e => {
              try {
                i(l.throw(e))
              } catch (e) {
                s(e)
              }
            },
            i = e => e.done ? a(e.value) : Promise.resolve(e.value).then(d, n);
          i((l = l.apply(e, t)).next())
        });
      const J = ({
        value: e,
        blockchain: t,
        bypassAddressMatch: l
      }) => {
        var a;
        const {
          formatMessage: s
        } = (0, r.A)(), d = (0, L.F7)(t.coinId), n = (0, B.L)(t.blockchain), o = (0, i.useMemo)(() => {
          var e;
          return null != (e = d?.address) ? e : n
        }, [d, n]), c = e && o && !l && (0, P.normalize)(e.trim()) === (0, P.normalize)(null != (a = o?.trim()) ? a : ""), [u, h] = (0, i.useState)({
          isValid: !1
        });
        (0, i.useEffect)(() => {
          let l = !1;
          return _(null, null, function*() {
            const {
              isValid: a
            } = yield(e => _(null, [e], function*({
              value: e,
              blockchain: t
            }) {
              let l = !1;
              try {
                e && (l = yield I.YW.emit(R.A.VALIDATE_ADDRESS, {
                  address: e,
                  network: t
                }))
              } catch {
                l = !1
              }
              return {
                isValid: l
              }
            }))({
              value: e,
              blockchain: t
            });
            l || h({
              isValid: a && !c
            })
          }), () => {
            l = !0
          }
        }, [t, e]);
        const m = (0, i.useMemo)(() => {
          if (!u.isValid) return s({
            id: "validate-address." + (c ? "receiver-matches-sender" : "generic")
          })
        }, [s, u]);
        return {
          isValid: u.isValid,
          error: m
        }
      };
      var z = l(65512),
        F = l(80772);
      const K = e => {
        const {
          formatMessage: t
        } = (0, r.A)(), [l, a] = (0, i.useState)({
          isValid: !1
        }), [s, d] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          const t = (e => "" === e || /^[0-9]+$/.test(e))(e),
            l = parseInt(e) >= 0 && 4294967295 >= parseInt(e);
          d(t), a({
            isValid: t && l
          })
        }, [e]);
        const n = (0, i.useMemo)(() => {
          if (!l.isValid) return t({
            id: s ? "validate-tag.in-range" : "validate-tag.all-numbers",
            defaultMessage: s ? "Destination Tag must be between 0 and 4294967295" : "Destination Tag must be a number"
          })
        }, [t, l]);
        return {
          isValid: l.isValid,
          error: n
        }
      };
      var U = (e, t, l) => new Promise((a, s) => {
        var d = e => {
            try {
              i(l.next(e))
            } catch (e) {
              s(e)
            }
          },
          n = e => {
            try {
              i(l.throw(e))
            } catch (e) {
              s(e)
            }
          },
          i = e => e.done ? a(e.value) : Promise.resolve(e.value).then(d, n);
        i((l = l.apply(e, t)).next())
      });

      function X({
        selectedBlockchain: e,
        addressAndMemo: t,
        setAddressAndMemo: l
      }) {
        var s, d;
        const {
          formatMessage: n
        } = (0, r.A)(), [o, c] = (0, i.useState)(null != (s = t?.address) ? s : ""), [u, m] = (0, i.useState)(null != (d = t?.memo) ? d : ""), [f, C] = (0, i.useState)(!1), g = (0, F.wl)({
          blockchainId: e.id
        });
        (0, i.useEffect)(() => {
          ! function() {
            U(this, null, function*() {
              const t = yield I.YW.emit(R.A.SUPPORTS_MEMO, e.id);
              C(t)
            })
          }()
        }, [e]);
        const v = J({
            value: o,
            blockchain: e,
            bypassAddressMatch: !0
          }),
          b = K(u);
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [(0, a.jsx)(h.S, {
            label: n({
              id: "address-and-memo-input.address.label",
              defaultMessage: "Address or Domain Name"
            }),
            placeholder: n({
              id: "address-and-memo-input.address.placeholder",
              defaultMessage: e.symbol + " Address"
            }, {
              symbol: e.symbol
            }),
            testid: "address-and-memo-input.address-input",
            autoFocus: !0,
            validation: v,
            value: o,
            onChange: e => c(e.target.value)
          }), (f || g) && (0, a.jsx)(h.S, {
            label: n({
              id: f ? "address-and-memo-input.memo.label" : "address-and-memo-input.tag.label",
              defaultMessage: f ? "Memo" : "Destination Tag"
            }),
            placeholder: n({
              id: f ? "address-and-memo-input.memo.placeholder" : "address-and-memo-input.tag.placeholder",
              defaultMessage: f ? "Memo" : "Destination Tag"
            }),
            value: u,
            validation: g && u ? b : void 0,
            testid: "address-and-memo-input.memo-tag-input",
            onChange: e => m(e.target.value)
          }), (0, a.jsx)(z.$, {
            disabled: !v.isValid,
            onClick: () => l({
              address: o,
              memo: u
            }),
            testid: "address-and-memo-input.done-button",
            children: n({
              id: "address-and-memo-input.button.label",
              defaultMessage: "Done"
            })
          })]
        })
      }
      var Y = l(52619);

      function $({
        showCancelConfirmationModal: e,
        setShowCancelConfirmationModal: t,
        discardChanges: l
      }) {
        const {
          formatMessage: d
        } = (0, r.A)();
        return (0, a.jsx)(s.a, {
          title: d({
            id: "cancel-confirmation-modal.title",
            defaultMessage: "Are you sure you want to discard your changes?"
          }),
          size: b.Y.SMALL,
          opened: e,
          hideCloseIcon: !0,
          centerTitle: !0,
          onClose: () => t(!1),
          children: (0, a.jsxs)("div", {
            className: "flex gap-2",
            children: [(0, a.jsx)(z.$, {
              theme: Y.ry.DANGER_TRANSPARENT,
              onClick: l,
              children: d({
                id: "address-book-modal.cancel-confirmation.discard",
                defaultMessage: "Discard Changes"
              })
            }), (0, a.jsx)(z.$, {
              onClick: () => {
                t(!1)
              },
              children: d({
                id: "address-book-modal.cancel-confirmation.keep-editing",
                defaultMessage: "Keep Editing"
              })
            })]
          })
        })
      }
      var q, G = l(69666),
        Q = l(23350),
        ee = l(49786),
        te = l(88774),
        le = l(68157),
        ae = l(48305),
        se = l(29584),
        de = l(23207),
        ne = l(34025),
        ie = Object.defineProperty,
        re = Object.getOwnPropertySymbols,
        oe = {}.hasOwnProperty,
        ce = {}.propertyIsEnumerable,
        ue = (e, t, l) => t in e ? ie(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        he = (e, t) => {
          for (var l in t || (t = {})) oe.call(t, l) && ue(e, l, t[l]);
          if (re)
            for (var l of re(t)) ce.call(t, l) && ue(e, l, t[l]);
          return e
        },
        me = l(63369),
        fe = l(9389),
        Ce = Object.defineProperty,
        ge = Object.defineProperties,
        ve = Object.getOwnPropertyDescriptors,
        be = Object.getOwnPropertySymbols,
        pe = {}.hasOwnProperty,
        we = {}.propertyIsEnumerable,
        ke = (e, t, l) => t in e ? Ce(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        xe = (e, t) => {
          for (var l in t || (t = {})) pe.call(t, l) && ke(e, l, t[l]);
          if (be)
            for (var l of be(t)) we.call(t, l) && ke(e, l, t[l]);
          return e
        },
        Me = (e, t) => ge(e, ve(t)),
        ye = ((q = ye || {})[q.SELECT_WALLET = 0] = "SELECT_WALLET", q[q.NEW_WALLET = 1] = "NEW_WALLET", q[q.SELECT_ASSET = 2] = "SELECT_ASSET", q[q.INPUT_ADDRESS_AND_MEMO = 3] = "INPUT_ADDRESS_AND_MEMO", q);

      function Ne({
        isOpened: e,
        coinId: t,
        editedWalletId: l,
        step: h,
        onClose: f
      }) {
        var C, g, v, b;
        const {
          formatMessage: p
        } = (0, r.A)(), {
          wallets: w
        } = (0, d.S)(), k = (0, n.o)(), x = (0, o.At)(t), M = (0, o.O4)(l), y = (0, fe.Cb)(), N = (0, le.GV)(e => e.wallet.accountsPerWallet), A = (0, i.useRef)(!1), V = (0, i.useRef)(!1), [H, O] = (0, i.useState)(h ?? 0), [j, S] = (0, i.useState)(null != (C = M?.name) ? C : ""), [T, D] = (0, i.useState)(null != (g = M?.addresses) ? g : {}), [Z, B] = (0, i.useState)(), [I, R] = (0, i.useState)(), [L, P] = (0, i.useState)(!1), _ = (0, i.useMemo)(() => w.flatMap(e => {
          const t = N[e.id];
          return Object.values(t).map(t => ({
            id: t.id,
            name: t.name,
            addresses: t.items,
            parentName: e.name,
            walletId: e.id,
            walletName: e.name
          }))
        }), []), J = [...(0, i.useMemo)(() => _.filter(e => e.id !== y), [w, k]), ...x], z = !!t, F = (null != (v = M?.name) ? v : "") !== j || JSON.stringify(null != (b = M?.addresses) ? b : {}) !== JSON.stringify(T);
        (0, me.K)({
          event: z ? se.Un.SEND_ADDRESS_BOOK : se.Un.SETTINGS_ADDRESS_BOOK,
          props: null
        }), (0, i.useEffect)(() => () => O(0), []), (0, i.useEffect)(() => {
          3 > H && (A.current = !1), 1 === H && R(void 0), 0 === H && (S(""), D({}), B(void 0), R(void 0))
        }, [H]);
        const K = function(e, t, l, s, d, n, r, o, c, h, f, C) {
            const {
              trackAnalytics: g
            } = (0, de.s)(), [v, b] = (0, i.useState)(!1), p = () => {
              var e;
              if (v) return;
              b(!0);
              const a = {
                id: null != (e = f?.id) ? e : crypto.randomUUID(),
                name: t,
                addresses: l
              };
              le.M_.dispatch(ae.u.actions.setAddressBookWallet(a)), g({
                event: se.BQ.SAVE_ADDRESS_BOOK_WALLET,
                props: {
                  pageViewSource: s ? se.Un.SEND_ADDRESS_BOOK : se.Un.SETTINGS_ADDRESS_BOOK
                }
              }), s ? r(ye.SELECT_WALLET) : h(), b(!1)
            }, w = () => {
              le.M_.dispatch(ae.u.actions.removeAddressBookWallet(f.id)), h()
            }, k = () => {
              const e = he({}, l);
              delete e[C.coinId], c(e), r(ye.NEW_WALLET)
            }, x = () => {
              e === ye.NEW_WALLET ? n ? o(!0) : s ? r(ye.SELECT_WALLET) : h() : e === ye.INPUT_ADDRESS_AND_MEMO && d ? r(ye.NEW_WALLET) : r(e - 1)
            };
            return (0, i.useMemo)(() => {
              const s = [];
              switch (e) {
                case ye.SELECT_WALLET:
                  s.push({
                    key: "done-action",
                    buttonElement: (0, a.jsx)(u.E, {
                      theme: m.Il.BRAND,
                      children: "Done"
                    }),
                    placement: Q.l1.RIGHT,
                    onClick: h
                  }, {
                    key: "add-wallet-action",
                    buttonElement: (0, a.jsx)(G.c, {
                      colorClass: "text-primary"
                    }),
                    placement: Q.l1.RIGHT,
                    onClick: () => r(ye.NEW_WALLET)
                  });
                  break;
                case ye.NEW_WALLET:
                  f && s.push({
                    key: "delete-wallet-action",
                    buttonElement: (0, a.jsx)(ne.R, {
                      width: 20,
                      height: 20,
                      colorClass: "text-error"
                    }),
                    placement: Q.l1.RIGHT,
                    onClick: w
                  }), s.push({
                    key: "add-new-wallet-action",
                    buttonElement: (0, a.jsx)(te.S, {
                      width: 20,
                      height: 20,
                      colorClass: "text-primary"
                    }),
                    disabled: !t || !Object.values(l).length,
                    placement: Q.l1.RIGHT,
                    onClick: p
                  });
                  break;
                case ye.INPUT_ADDRESS_AND_MEMO:
                  s.push({
                    key: "delete-wallet-action",
                    buttonElement: (0, a.jsx)(ne.R, {
                      width: 20,
                      height: 20,
                      colorClass: "text-error"
                    }),
                    placement: Q.l1.RIGHT,
                    onClick: k
                  })
              }
              return e > 0 && s.push({
                key: "back-action",
                buttonElement: (0, a.jsx)(ee.A, {
                  colorClass: "text-textThird"
                }),
                placement: Q.l1.LEFT,
                onClick: x
              }), s
            }, [e, t, l])
          }(H, j, T, z, A.current, F, O, P, D, f, M, Z),
          U = function(e, t) {
            return (0, i.useMemo)(() => {
              switch (e) {
                case ye.SELECT_WALLET:
                  return {
                    id: "address-book-modal.title", defaultMessage: "Address Book"
                  };
                case ye.NEW_WALLET:
                  return {
                    id: "address-book-modal.add-wallet.title", defaultMessage: "Wallet Address"
                  };
                case ye.SELECT_ASSET:
                  return {
                    id: "address-book-modal.select-asset.title", defaultMessage: "Select Asset"
                  };
                case ye.INPUT_ADDRESS_AND_MEMO:
                  return t ? {
                    id: "address-book-modal.edit-address-and-memo.title",
                    defaultMessage: "Edit"
                  } : {
                    id: "address-book-modal.input-address-and-memo.title",
                    defaultMessage: "Add Address"
                  };
                default:
                  return {
                    id: "", defaultMessage: "Header config missing"
                  }
              }
            }, [e])
          }(H, A.current);
        return (0, a.jsxs)(s.a, {
          title: p(U),
          opened: e,
          actions: K,
          hideCloseIcon: !0,
          centerTitle: !0,
          onClose: () => {
            F ? (V.current = !0, P(!0)) : f()
          },
          children: [0 === H && (0, a.jsx)(c.D, {
            wallets: J,
            selectWallet: e => {
              const l = e.addresses[t];
              f(l)
            },
            addWallet: () => O(1)
          }), 1 === H && (0, a.jsx)(E, {
            name: j,
            addresses: T,
            editedWallet: M,
            setName: S,
            onAddAddress: () => O(2),
            onSelectAddress: e => {
              B(e), R(T[e.coinId]), O(3), A.current = !0
            }
          }), 2 === H && (0, a.jsx)(W, {
            walletAddresses: T,
            setBlockchain: e => {
              B(e), O(3)
            }
          }), 3 === H && (0, a.jsx)(X, {
            selectedBlockchain: Z,
            addressAndMemo: I,
            setAddressAndMemo: e => {
              const t = Me(xe({}, T), {
                [Z.coinId]: e
              });
              D(t), O(1)
            }
          }), L && (0, a.jsx)($, {
            showCancelConfirmationModal: L,
            setShowCancelConfirmationModal: P,
            discardChanges: () => {
              (!z || V.current) && f(), P(!1), O(0)
            }
          })]
        })
      }
    },
    92949: (e, t, l) => {
      l.d(t, {
        D: () => C
      });
      var a = l(74848),
        s = l(98005),
        d = l(52114),
        n = l(41327),
        i = l(6442),
        r = l(42463),
        o = l(65512),
        c = l(52619),
        u = l(1279),
        h = l(94893),
        m = l(68157);
      const f = "others";

      function C({
        wallets: e,
        addWallet: t,
        selectWallet: l
      }) {
        const {
          formatMessage: C
        } = (0, i.A)(), g = (0, m.GV)(e => e.wallet.wallets), v = e.reduce((e, t) => {
          const l = t.walletId || f;
          return e[l] || (e[l] = []), e[l].push(t), e
        }, {});
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-2 my-6",
          children: [Object.keys(v).map(e => {
            var t;
            const i = v[e],
              r = e === f ? C({
                id: "settings.address-book.contacts",
                defaultMessage: "Contacts"
              }) : null == (t = g[e]) ? void 0 : t.name;
            return (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [(0, a.jsx)(d.E, {
                type: u.jK.HEADER_16,
                weight: u.nG.BOLD,
                children: r
              }), i.map(e => (0, a.jsx)(h.c, {
                testid: "select-address-book-wallet-" + e.id,
                onClick: () => l(e),
                children: (0, a.jsxs)("div", {
                  className: "flex items-center justify-between bg-bg3 p-4 rounded-xl",
                  children: [(0, a.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, a.jsx)(s.l, {
                      width: 16,
                      height: 16,
                      colorClass: "text-textThird"
                    }), (0, a.jsx)(d.E, {
                      children: e.name
                    })]
                  }), (0, a.jsx)(n.v, {
                    colorClass: "text-textThird"
                  })]
                })
              }, e.id))]
            }, e)
          }), !e?.length && (0, a.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-6 my-6",
            children: [(0, a.jsx)(r.I, {}), (0, a.jsx)("div", {
              className: "flex text-center px-6",
              children: (0, a.jsx)(d.E, {
                type: u.jK.CAPTION,
                theme: u.Il.THIRD,
                children: C({
                  id: "settings.address-book.no-wallets",
                  defaultMessage: "Your contacts and their wallet addresses will appear here."
                })
              })
            }), (0, a.jsx)(o.$, {
              testid: "add-wallet-button",
              onClick: t,
              theme: c.ry.BRAND,
              children: C({
                id: "settings.address-book.add-wallet",
                defaultMessage: "Add wallet address"
              })
            })]
          })]
        })
      }
    },
    98005: (e, t, l) => {
      l.d(t, {
        l: () => s
      });
      var a = l(74848);
      const s = ({
        width: e,
        height: t,
        colorClass: l
      }) => (0, a.jsxs)("svg", {
        className: l,
        fill: "none",
        width: e ?? 20,
        height: t ?? 20,
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          paddingLeft: "1px"
        },
        children: [(0, a.jsx)("path", {
          d: "M16.495 4.75012H4.995C4.375 4.75012 3.875 5.25012 3.875 5.87012C3.875 6.49012 4.375 6.99012 4.995 6.99012H16.495C16.985 6.99012 17.375 7.38012 17.375 7.87012V16.1101C17.375 16.6001 16.975 16.9901 16.495 16.9901H3.505C3.015 16.9901 2.625 16.5901 2.625 16.1101V3.87012C2.625 3.39012 3.015 2.99012 3.495 2.99012H16.495C17.115 2.99012 17.615 2.49012 17.615 1.87012C17.615 1.25012 17.115 0.750122 16.495 0.750122H3.495C1.775 0.750122 0.375 2.15012 0.375 3.87012V16.1101C0.375 17.8401 1.785 19.2401 3.505 19.2401H16.495C18.225 19.2401 19.625 17.8401 19.625 16.1101V7.87012C19.625 6.15012 18.215 4.75012 16.495 4.75012Z",
          fill: "currentColor"
        }), (0, a.jsx)("path", {
          d: "M14.6249 12.5001C15.2449 12.5001 15.7449 12.0001 15.7449 11.3801C15.7449 10.7601 15.2449 10.2601 14.6249 10.2601H12.3749C11.7549 10.2601 11.2549 10.7601 11.2549 11.3801C11.2549 12.0001 11.7549 12.5001 12.3749 12.5001H14.6249Z",
          fill: "currentColor"
        })]
      })
    }
  }
]);
