try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "0f3eee52-2766-480b-815e-f96d0f97f6d9", e.i = "sentry-dbid-0f3eee52-2766-480b-815e-f96d0f97f6d9")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1708], {
    20998: (e, t, l) => {
      l.d(t, {
        S: () => N
      });
      var a = l(74848),
        s = l(96540),
        d = l(6442),
        n = l(52114),
        i = l(1279),
        r = l(8360),
        o = l(94893),
        c = l(9770),
        h = l(97726),
        u = l(46729),
        m = l(95455),
        f = l(65504),
        C = l(68632),
        w = l(98939),
        p = l(22146),
        g = l(23350);
      const b = Object.values(w.hF),
        v = e => b.includes(e),
        k = e => {
          var t;
          return null != (t = e.displayName) ? t : e.name
        },
        y = (e, t) => {
          const l = k(e).toLowerCase(),
            a = e.symbol.toLowerCase();
          return l.includes(t) || a.includes(t)
        },
        x = (e, t) => b.indexOf(e.coinId) - b.indexOf(t.coinId),
        M = (e, t) => k(e).localeCompare(k(t)),
        N = ({
          isOpen: e,
          onClose: t,
          blockchainList: l,
          selectedBlockchainId: w,
          onSelectNetwork: b,
          hideAllNetworksOption: N
        }) => {
          const {
            formatMessage: A
          } = (0, d.A)(), [V, H] = (0, s.useState)(""), O = V.toLowerCase(), j = (0, s.useMemo)(() => l.filter(e => v(e.coinId)).filter(e => !V || y(e, O)).sort(x), [l, V, O]), S = (0, s.useMemo)(() => l.filter(e => !v(e.coinId)).filter(e => !V || y(e, O)).sort(M), [l, V, O]), T = !V && !N, E = V && 0 === j.length && 0 === S.length, Z = e => e ? w === e.id : !w, D = e => ((e, t, l) => new Promise((e, t) => {
            var a = e => {
                try {
                  d(l.next(e))
                } catch (e) {
                  t(e)
                }
              },
              s = e => {
                try {
                  d(l.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              d = t => t.done ? e(t.value) : Promise.resolve(t.value).then(a, s);
            d((l = l.apply(null, null)).next())
          }))(0, 0, function*() {
            b(e), t(), H("")
          });
          return (0, a.jsx)(p.a, {
            opened: e,
            onClose: () => {
              t(), H("")
            },
            title: A({
              id: "select-network.title",
              defaultMessage: "Select network"
            }),
            placement: g.Gn.BOTTOM,
            children: (0, a.jsxs)("div", {
              className: "flex flex-col min-h-[95vh]  space-y-3",
              children: [(0, a.jsx)(r.D, {
                placeholder: A({
                  id: "select-network.search-placeholder",
                  defaultMessage: "Search for network"
                }),
                value: V,
                onChange: e => H(e.target.value),
                autoFocus: !1,
                testid: "network-modal-search"
              }), (0, a.jsx)("div", {
                className: "flex-1 overflow-y-auto tw-scrollbar flex flex-col",
                children: E ? (0, a.jsx)("div", {
                  className: "flex-1 flex items-center justify-center",
                  children: (0, a.jsx)(m.B, {})
                }) : (0, a.jsx)("div", {
                  className: "space-y-4",
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [T && (0, a.jsx)(o.c, {
                      onClick: () => D(null),
                      testid: "network-modal-all",
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center justify-between py-3",
                        children: [(0, a.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [(0, a.jsx)("div", {
                            className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                            children: (0, a.jsx)(c.s, {
                              width: 20,
                              height: 20,
                              colorClass: "text-primary"
                            })
                          }), (0, a.jsx)(n.E, {
                            type: i.jK.SUBHEADER_16,
                            theme: i.Il.PRIMARY,
                            children: A({
                              id: "select-crypto.all-networks",
                              defaultMessage: "All networks"
                            })
                          })]
                        }), Z(null) ? (0, a.jsx)(h.w, {
                          width: 24,
                          height: 24,
                          colorClass: "text-primary"
                        }) : (0, a.jsx)(u.r, {
                          width: 24,
                          height: 24,
                          colorClass: "text-utility-1-opacity-2"
                        })]
                      })
                    }), j.length > 0 && (0, a.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, a.jsx)("div", {
                        className: "mb-2",
                        children: (0, a.jsx)(n.E, {
                          type: i.jK.BODY_14,
                          theme: i.Il.SECONDARY,
                          weight: i.nG.SEMIBOLD,
                          testid: "popular-networks-title",
                          children: A({
                            id: "select-network.popular-networks",
                            defaultMessage: "Popular networks"
                          })
                        })
                      }), j.map(e => (0, a.jsx)(o.c, {
                        onClick: () => D(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, a.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, a.jsx)(f.q, {
                              name: k(e),
                              src: e.iconUrl,
                              size: C.Y.LARGE
                            }), (0, a.jsx)(n.E, {
                              type: i.jK.SUBHEADER_16,
                              theme: i.Il.PRIMARY,
                              children: k(e)
                            })]
                          }), Z(e) ? (0, a.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, a.jsx)(u.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    }), S.length > 0 && (0, a.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, a.jsx)("div", {
                        className: "mb-2",
                        children: (0, a.jsx)(n.E, {
                          type: i.jK.BODY_14,
                          theme: i.Il.SECONDARY,
                          weight: i.nG.SEMIBOLD,
                          testid: "az-networks-title",
                          children: A({
                            id: "select-network.az-networks",
                            defaultMessage: "A-Z networks"
                          })
                        })
                      }), S.map(e => (0, a.jsx)(o.c, {
                        onClick: () => D(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, a.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, a.jsx)(f.q, {
                              name: k(e),
                              src: e.iconUrl,
                              size: C.Y.LARGE
                            }), (0, a.jsx)(n.E, {
                              type: i.jK.SUBHEADER_16,
                              theme: i.Il.PRIMARY,
                              children: k(e)
                            })]
                          }), Z(e) ? (0, a.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, a.jsx)(u.r, {
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
    65666: (e, t, l) => {
      l.d(t, {
        F: () => xe,
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
        h = l(52114),
        u = l(16665),
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
        w = l(94893),
        p = l(65504),
        g = l(68632),
        b = l(50784),
        v = l(41327),
        k = l(40053),
        y = Object.defineProperty,
        x = Object.defineProperties,
        M = Object.getOwnPropertyDescriptors,
        N = Object.getOwnPropertySymbols,
        A = {}.hasOwnProperty,
        V = {}.propertyIsEnumerable,
        H = (e, t, l) => t in e ? y(e, t, {
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
        j = (e, t) => x(e, M(t));

      function S({
        name: e,
        addresses: t,
        editedWallet: l,
        setName: s,
        onAddAddress: d,
        onSelectAddress: n
      }) {
        const {
          formatMessage: c
        } = (0, r.A)(), y = (0, C.n)(!0), x = (0, o.JS)({
          asArray: !0
        }), M = (0, i.useMemo)(() => Object.entries(t).map(([e, t]) => {
          const l = y.find(t => t.coinId.toString() === e);
          return j(O({}, t), {
            blockchain: l
          })
        }), [t, y]), N = function(e, t, l) {
          return (0, i.useMemo)(() => {
            const a = !t.includes(e);
            return {
              isValid: a,
              error: a ? void 0 : l
            }
          }, [e, t, l])
        }(e, x.filter(e => e.id !== l?.id).map(e => e.name), c({
          id: "new-address-book-wallet.name-input.error",
          defaultMessage: "Name already exists"
        }));
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-6",
          children: [(0, a.jsx)(u.S, {
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
            children: [M.map(({
              address: e,
              blockchain: t
            }) => {
              var l;
              return (0, a.jsx)(w.c, {
                testid: "new-address-book-wallet-address-" + t.id,
                onClick: () => {
                  n(t)
                },
                children: (0, a.jsxs)("div", {
                  className: "flex items-center mb-2",
                  children: [(0, a.jsx)(p.q, {
                    name: t.name,
                    size: g.Y.SMALL,
                    src: t.iconUrl
                  }), (0, a.jsxs)("div", {
                    className: "pl-2 flex flex-col",
                    children: [(0, a.jsx)(h.E, {
                      type: m.jK.SUBTITLE,
                      weight: m.nG.BOLD,
                      theme: m.Il.PRIMARY,
                      children: null != (l = t.displayName) ? l : t.name
                    }), (0, a.jsx)(h.E, {
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
                    children: (0, a.jsx)(v.v, {
                      colorClass: "text-textThird"
                    })
                  })]
                })
              }, t.id)
            }), !!M.length && (0, a.jsx)(b.c, {}), (0, a.jsx)(w.c, {
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
                  children: [(0, a.jsx)(h.E, {
                    type: m.jK.TITLE,
                    theme: m.Il.BRAND,
                    children: c({
                      id: "new-address-book-wallet.add-button.title",
                      defaultMessage: "Add Address"
                    })
                  }), (0, a.jsx)(h.E, {
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
      var T = l(75395),
        E = l(64145),
        Z = l(22670),
        D = l(40790),
        I = l(51594),
        W = (e, t, l) => new Promise((a, s) => {
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
      const B = ({
        value: e,
        blockchain: t,
        bypassAddressMatch: l
      }) => {
        var a;
        const {
          formatMessage: s
        } = (0, r.A)(), d = (0, D.F7)(t.coinId), n = (0, T.L)(t.blockchain), o = (0, i.useMemo)(() => {
          var e;
          return null != (e = d?.address) ? e : n
        }, [d, n]), c = e && o && !l && (0, I.normalize)(e.trim()) === (0, I.normalize)(null != (a = o?.trim()) ? a : ""), [h, u] = (0, i.useState)({
          isValid: !1
        });
        (0, i.useEffect)(() => {
          let l = !1;
          return W(null, null, function*() {
            const {
              isValid: a
            } = yield(e => W(null, [e], function*({
              value: e,
              blockchain: t
            }) {
              let l = !1;
              try {
                e && (l = yield E.YW.emit(Z.A.VALIDATE_ADDRESS, {
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
            l || u({
              isValid: a && !c
            })
          }), () => {
            l = !0
          }
        }, [t, e]);
        const m = (0, i.useMemo)(() => {
          if (!h.isValid) return s({
            id: "validate-address." + (c ? "receiver-matches-sender" : "generic")
          })
        }, [s, h]);
        return {
          isValid: h.isValid,
          error: m
        }
      };
      var L = l(65512),
        P = l(80772);
      const R = e => {
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
      var z = (e, t, l) => new Promise((a, s) => {
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

      function _({
        selectedBlockchain: e,
        addressAndMemo: t,
        setAddressAndMemo: l
      }) {
        var s, d;
        const {
          formatMessage: n
        } = (0, r.A)(), [o, c] = (0, i.useState)(null != (s = t?.address) ? s : ""), [h, m] = (0, i.useState)(null != (d = t?.memo) ? d : ""), [f, C] = (0, i.useState)(!1), w = (0, P.wl)({
          blockchainId: e.id
        });
        (0, i.useEffect)(() => {
          ! function() {
            z(this, null, function*() {
              const t = yield E.YW.emit(Z.A.SUPPORTS_MEMO, e.id);
              C(t)
            })
          }()
        }, [e]);
        const p = B({
            value: o,
            blockchain: e,
            bypassAddressMatch: !0
          }),
          g = R(h);
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [(0, a.jsx)(u.S, {
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
            validation: p,
            value: o,
            onChange: e => c(e.target.value)
          }), (f || w) && (0, a.jsx)(u.S, {
            label: n({
              id: f ? "address-and-memo-input.memo.label" : "address-and-memo-input.tag.label",
              defaultMessage: f ? "Memo" : "Destination Tag"
            }),
            placeholder: n({
              id: f ? "address-and-memo-input.memo.placeholder" : "address-and-memo-input.tag.placeholder",
              defaultMessage: f ? "Memo" : "Destination Tag"
            }),
            value: h,
            validation: w && h ? g : void 0,
            testid: "address-and-memo-input.memo-tag-input",
            onChange: e => m(e.target.value)
          }), (0, a.jsx)(L.$, {
            disabled: !p.isValid,
            onClick: () => l({
              address: o,
              memo: h
            }),
            testid: "address-and-memo-input.done-button",
            children: n({
              id: "address-and-memo-input.button.label",
              defaultMessage: "Done"
            })
          })]
        })
      }
      var J = l(52619);

      function F({
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
          size: g.Y.SMALL,
          opened: e,
          hideCloseIcon: !0,
          centerTitle: !0,
          onClose: () => t(!1),
          children: (0, a.jsxs)("div", {
            className: "flex gap-2",
            children: [(0, a.jsx)(L.$, {
              theme: J.ry.DANGER_TRANSPARENT,
              onClick: l,
              children: d({
                id: "address-book-modal.cancel-confirmation.discard",
                defaultMessage: "Discard Changes"
              })
            }), (0, a.jsx)(L.$, {
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
      var K, U = l(69666),
        X = l(23350),
        Y = l(49786),
        $ = l(88774),
        q = l(68157),
        G = l(48305),
        Q = l(29584),
        ee = l(23207),
        te = l(34025),
        le = Object.defineProperty,
        ae = Object.getOwnPropertySymbols,
        se = {}.hasOwnProperty,
        de = {}.propertyIsEnumerable,
        ne = (e, t, l) => t in e ? le(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        ie = (e, t) => {
          for (var l in t || (t = {})) se.call(t, l) && ne(e, l, t[l]);
          if (ae)
            for (var l of ae(t)) de.call(t, l) && ne(e, l, t[l]);
          return e
        },
        re = l(63369),
        oe = l(9389),
        ce = l(20998),
        he = l(29251),
        ue = l(33055),
        me = Object.defineProperty,
        fe = Object.defineProperties,
        Ce = Object.getOwnPropertyDescriptors,
        we = Object.getOwnPropertySymbols,
        pe = {}.hasOwnProperty,
        ge = {}.propertyIsEnumerable,
        be = (e, t, l) => t in e ? me(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        ve = (e, t) => {
          for (var l in t || (t = {})) pe.call(t, l) && be(e, l, t[l]);
          if (we)
            for (var l of we(t)) ge.call(t, l) && be(e, l, t[l]);
          return e
        },
        ke = (e, t) => fe(e, Ce(t)),
        ye = ((K = ye || {})[K.SELECT_WALLET = 0] = "SELECT_WALLET", K[K.NEW_WALLET = 1] = "NEW_WALLET", K[K.SELECT_ASSET = 2] = "SELECT_ASSET", K[K.INPUT_ADDRESS_AND_MEMO = 3] = "INPUT_ADDRESS_AND_MEMO", K);

      function xe({
        isOpened: e,
        coinId: t,
        editedWalletId: l,
        step: u,
        onClose: f
      }) {
        var w, p, g, b;
        const {
          formatMessage: v
        } = (0, r.A)(), {
          wallets: k
        } = (0, d.S)(), y = (0, n.o)(), x = (0, o.At)(t), M = (0, o.O4)(l), N = (0, ue.A)(), A = (0, C.n)(!0), V = (0, oe.Cb)(), H = (0, q.GV)(e => e.wallet.accountsPerWallet), O = (0, i.useRef)(!1), j = (0, i.useRef)(!1), T = (0, i.useRef)(!1), [E, Z] = (0, i.useState)(u ?? 0), [D, I] = (0, i.useState)(null != (w = M?.name) ? w : ""), [W, B] = (0, i.useState)(null != (p = M?.addresses) ? p : {}), [L, P] = (0, i.useState)(), [R, z] = (0, i.useState)(), [J, K] = (0, i.useState)(!1), le = (0, i.useMemo)(() => k.flatMap(e => {
          const t = H[e.id];
          return Object.values(t).map(t => ({
            id: t.id,
            name: t.name,
            addresses: t.items,
            parentName: e.name,
            walletId: e.id,
            walletName: e.name
          }))
        }), []), ae = [...(0, i.useMemo)(() => le.filter(e => e.id !== V), [k, y]), ...x], se = (0, i.useMemo)(() => A.filter(e => !(Object.keys(W).includes(e.coinId.toString()) || N.type === he.S.PRIVATE_KEY && !y[e.coinId])), [A, W, N.type, y]), de = !!t, ne = (null != (g = M?.name) ? g : "") !== D || JSON.stringify(null != (b = M?.addresses) ? b : {}) !== JSON.stringify(W);
        (0, re.K)({
          event: de ? Q.Un.SEND_ADDRESS_BOOK : Q.Un.SETTINGS_ADDRESS_BOOK,
          props: null
        }), (0, i.useEffect)(() => () => Z(0), []), (0, i.useEffect)(() => {
          3 > E && (O.current = !1), 1 === E && z(void 0), 0 === E && (I(""), B({}), P(void 0), z(void 0))
        }, [E]);
        const me = function(e, t, l, s, d, n, r, o, c, u, f, C) {
            const {
              trackAnalytics: w
            } = (0, ee.s)(), [p, g] = (0, i.useState)(!1), b = () => {
              var e;
              if (p) return;
              g(!0);
              const a = {
                id: null != (e = f?.id) ? e : crypto.randomUUID(),
                name: t,
                addresses: l
              };
              q.M_.dispatch(G.u.actions.setAddressBookWallet(a)), w({
                event: Q.BQ.SAVE_ADDRESS_BOOK_WALLET,
                props: {
                  pageViewSource: s ? Q.Un.SEND_ADDRESS_BOOK : Q.Un.SETTINGS_ADDRESS_BOOK
                }
              }), s ? r(ye.SELECT_WALLET) : u(), g(!1)
            }, v = () => {
              q.M_.dispatch(G.u.actions.removeAddressBookWallet(f.id)), u()
            }, k = () => {
              const e = ie({}, l);
              delete e[C.coinId], c(e), r(ye.NEW_WALLET)
            }, y = () => {
              e === ye.NEW_WALLET ? n ? o(!0) : s ? r(ye.SELECT_WALLET) : u() : e === ye.INPUT_ADDRESS_AND_MEMO && d ? r(ye.NEW_WALLET) : r(e - 1)
            };
            return (0, i.useMemo)(() => {
              const s = [];
              switch (e) {
                case ye.SELECT_WALLET:
                  s.push({
                    key: "done-action",
                    buttonElement: (0, a.jsx)(h.E, {
                      theme: m.Il.BRAND,
                      children: "Done"
                    }),
                    placement: X.l1.RIGHT,
                    onClick: u
                  }, {
                    key: "add-wallet-action",
                    buttonElement: (0, a.jsx)(U.c, {
                      colorClass: "text-primary"
                    }),
                    placement: X.l1.RIGHT,
                    onClick: () => r(ye.NEW_WALLET)
                  });
                  break;
                case ye.NEW_WALLET:
                  f && s.push({
                    key: "delete-wallet-action",
                    buttonElement: (0, a.jsx)(te.R, {
                      width: 20,
                      height: 20,
                      colorClass: "text-error"
                    }),
                    placement: X.l1.RIGHT,
                    onClick: v
                  }), s.push({
                    key: "add-new-wallet-action",
                    buttonElement: (0, a.jsx)($.S, {
                      width: 20,
                      height: 20,
                      colorClass: "text-primary"
                    }),
                    disabled: !t || !Object.values(l).length,
                    placement: X.l1.RIGHT,
                    onClick: b
                  });
                  break;
                case ye.INPUT_ADDRESS_AND_MEMO:
                  s.push({
                    key: "delete-wallet-action",
                    buttonElement: (0, a.jsx)(te.R, {
                      width: 20,
                      height: 20,
                      colorClass: "text-error"
                    }),
                    placement: X.l1.RIGHT,
                    onClick: k
                  })
              }
              return e > 0 && s.push({
                key: "back-action",
                buttonElement: (0, a.jsx)(Y.A, {
                  colorClass: "text-textThird"
                }),
                placement: X.l1.LEFT,
                onClick: y
              }), s
            }, [e, t, l])
          }(E, D, W, de, O.current, ne, Z, K, B, f, M, L),
          fe = function(e, t) {
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
          }(E, O.current);
        return (0, a.jsxs)(s.a, {
          title: v(fe),
          opened: e,
          actions: me,
          hideCloseIcon: !0,
          centerTitle: !0,
          onClose: () => {
            ne ? (j.current = !0, K(!0)) : f()
          },
          children: [0 === E && (0, a.jsx)(c.D, {
            wallets: ae,
            selectWallet: e => {
              const l = e.addresses[t];
              f(l)
            },
            addWallet: () => Z(1)
          }), 1 === E && (0, a.jsx)(S, {
            name: D,
            addresses: W,
            editedWallet: M,
            setName: I,
            onAddAddress: () => Z(2),
            onSelectAddress: e => {
              P(e), z(W[e.coinId]), Z(3), O.current = !0
            }
          }), 2 === E && (0, a.jsx)(ce.S, {
            isOpen: 2 === E,
            onClose: () => {
              T.current ? (T.current = !1, Z(3)) : Z(1)
            },
            blockchainList: se,
            selectedBlockchainId: null,
            onSelectNetwork: e => {
              e && (P(e), T.current = !0)
            },
            hideAllNetworksOption: !0
          }), 3 === E && (0, a.jsx)(_, {
            selectedBlockchain: L,
            addressAndMemo: R,
            setAddressAndMemo: e => {
              const t = ke(ve({}, W), {
                [L.coinId]: e
              });
              B(t), Z(1)
            }
          }), J && (0, a.jsx)(F, {
            showCancelConfirmationModal: J,
            setShowCancelConfirmationModal: K,
            discardChanges: () => {
              (!de || j.current) && f(), K(!1), Z(0)
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
        h = l(1279),
        u = l(94893),
        m = l(68157);
      const f = "others";

      function C({
        wallets: e,
        addWallet: t,
        selectWallet: l
      }) {
        const {
          formatMessage: C
        } = (0, i.A)(), w = (0, m.GV)(e => e.wallet.wallets), p = e.reduce((e, t) => {
          const l = t.walletId || f;
          return e[l] || (e[l] = []), e[l].push(t), e
        }, {});
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-2 my-6",
          children: [Object.keys(p).map(e => {
            var t;
            const i = p[e],
              r = e === f ? C({
                id: "settings.address-book.contacts",
                defaultMessage: "Contacts"
              }) : null == (t = w[e]) ? void 0 : t.name;
            return (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [(0, a.jsx)(d.E, {
                type: h.jK.HEADER_16,
                weight: h.nG.BOLD,
                children: r
              }), i.map(e => (0, a.jsx)(u.c, {
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
                type: h.jK.CAPTION,
                theme: h.Il.THIRD,
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
