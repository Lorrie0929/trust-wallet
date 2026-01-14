try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "a802332e-8ea3-44fa-a955-f94f9e4cdec2", e.i = "sentry-dbid-a802332e-8ea3-44fa-a955-f94f9e4cdec2")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [9769], {
    5750: (e, t, a) => {
      a.d(t, {
        Ff: () => k,
        GM: () => C,
        tU: () => x
      });
      var l, i = a(74848),
        s = a(77832),
        o = a(94893),
        r = a(9770),
        n = a(10551),
        d = a(65504),
        c = a(46376),
        m = a(8360),
        p = a(68632),
        u = a(74408),
        h = a(7668),
        g = a(52114),
        b = a(1279),
        f = a(75485),
        w = a(44832),
        y = a(96540),
        v = a(6442),
        x = ((l = x || {}).FULL = "full", l.ROUNDED = "rounded", l),
        C = (e => (e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e))(C || {});
      const k = ({
        selectedNetworks: e,
        onSelect: t,
        allowedPrefixedCoinIds: a,
        hideAllNetworksOption: l,
        label: x,
        spacing: C = "medium",
        radius: k = "full",
        fullWidth: S
      }) => {
        const {
          formatMessage: M
        } = (0, v.A)(), [P, N] = (0, y.useState)(""), I = (0, w.g)(!0), K = (0, y.useMemo)(() => I.find(t => {
          var a;
          return t.id === (null == (a = e?.[0]) ? void 0 : a.blockchainId)
        }), [I, e]), W = (0, y.useMemo)(() => a ? I.filter(e => a.includes((0, f.er)(e.coinId))).filter(e => {
          var t;
          return (null != (t = e.displayName) ? t : e.name).toLowerCase().includes(P.toLowerCase()) || e.id === K?.id
        }) : I.filter(e => {
          var t;
          return (null != (t = e.displayName) ? t : e.name).toLowerCase().includes(P.toLowerCase()) || e.id === K?.id
        }), [I, a, P, K]), T = e => ((e, t, a) => new Promise((e, t) => {
          var l = e => {
              try {
                s(a.next(e))
              } catch (e) {
                t(e)
              }
            },
            i = e => {
              try {
                s(a.throw(e))
              } catch (e) {
                t(e)
              }
            },
            s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, i);
          s((a = a.apply(null, null)).next())
        }))(0, 0, function*() {
          t(null !== e ? [{
            prefixedCoinId: (0, f.er)(e.coinId),
            blockchainId: e.id
          }] : null)
        }), O = (0, y.useMemo)(() => !(l || "" !== P && K), [P, l, K]), V = {
          small: "px-2 py-1",
          medium: "p-2",
          large: "py-4 px-6"
        }, R = {
          full: "rounded-full",
          rounded: "rounded-4"
        };
        return (0, i.jsx)(u.AM, {
          className: S ? "w-full" : "",
          children: ({
            open: e
          }) => {
            var t;
            return (0, i.jsxs)(i.Fragment, {
              children: [x && (0, i.jsx)("div", {
                className: "mb-3 text-left",
                children: (0, i.jsx)(c.l, {
                  children: x
                })
              }), (0, i.jsx)(u.ut, {
                className: `outline-none bg-background-2 ${V[C]} ${R[k]} ${S?"w-full":""}`,
                children: (0, i.jsxs)("div", {
                  className: "flex items-center",
                  children: [(0, i.jsx)("div", {
                    className: "pr-2",
                    children: K ? (0, i.jsx)(d.q, {
                      name: K.name,
                      size: p.Y.XSMALL,
                      src: K.iconUrl
                    }) : (0, i.jsx)(r.s, {
                      width: 20,
                      height: 20
                    })
                  }), (0, i.jsx)("div", {
                    className: "whitespace-nowrap",
                    children: K ? (0, i.jsx)(g.E, {
                      type: b.jK.SUBHEADER_14,
                      children: null != (t = K.displayName) ? t : K.name
                    }) : (0, i.jsx)(g.E, {
                      type: b.jK.SUBHEADER_14,
                      children: M({
                        id: l ? "component.blockchain-select.select-network" : "component.blockchain-select.all-networks",
                        defaultMessage: l ? "Network" : "All Networks"
                      })
                    })
                  }), (0, i.jsx)("div", {
                    className: "pl-1 ml-auto",
                    children: (0, i.jsx)(n.b, {
                      width: 18,
                      height: 18,
                      colorClass: "text-utility-1-opacity-1 transition-transform " + (e ? "rotate-180" : "rotate-0")
                    })
                  })]
                })
              }), (0, i.jsx)(s.e, {
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                afterLeave: () => N(""),
                children: (0, i.jsx)(u.QT, {
                  className: "absolute min-w-full mt-2 left-0 z-10 shadow-lg rounded-4 bg-background-2 cursor-default",
                  onClick: e => e.stopPropagation(),
                  children: ({
                    close: e
                  }) => (0, i.jsxs)("div", {
                    className: "mr-1 my-2 pl-2 pr-1 tw-scrollbar p-0 max-h-[250px]",
                    children: [(0, i.jsx)("div", {
                      className: "px-3 mb-2 pt-1",
                      children: (0, i.jsx)(m.D, {
                        testid: "networks-filter-dropdown-search-input",
                        value: P,
                        onChange: e => {
                          N(e.target.value), e.stopPropagation()
                        },
                        placeholder: M({
                          id: "component.input-networks-search.placeholder",
                          defaultMessage: "Network Name"
                        })
                      })
                    }), (0, i.jsxs)("div", {
                      className: "flex flex-col",
                      children: [O && (0, i.jsx)(o.c, {
                        onClick: () => {
                          T(null), e()
                        },
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center mb-2 py-1.5 px-4 rounded-3 hover:bg-utility-1-opacity-5",
                          children: [(0, i.jsx)(r.s, {
                            width: 20,
                            height: 20
                          }), (0, i.jsx)("div", {
                            className: "pl-2 flex-grow min-w-0 whitespace-nowrap",
                            children: (0, i.jsx)(g.E, {
                              type: b.jK.SUBHEADER_14,
                              weight: b.nG.MEDIUM,
                              children: M({
                                id: "component.blockchain-select.all-networks"
                              })
                            })
                          }), (0, i.jsx)("div", {
                            children: K ? (0, i.jsx)(h.z6, {
                              className: "space-y-4",
                              children: (0, i.jsx)(h.sx, {
                                value: 0,
                                className: "radio-group__option"
                              })
                            }) : (0, i.jsx)(h.z6, {
                              value: 0,
                              className: "space-y-4",
                              children: (0, i.jsx)(h.sx, {
                                value: 0,
                                className: "radio-group__option",
                                children: (0, i.jsx)("span", {
                                  className: "radio-group__option-indicator"
                                })
                              })
                            })
                          })]
                        })
                      }), W.map(t => {
                        var a;
                        return (0, i.jsx)(o.c, {
                          onClick: () => {
                            T(t), e()
                          },
                          children: (0, i.jsxs)("div", {
                            className: "flex items-center text-left mb-1 py-1.5 px-4 rounded-3 hover:bg-utility-1-opacity-5",
                            children: [(0, i.jsx)("div", {
                              children: (0, i.jsx)(d.q, {
                                name: t.name,
                                size: p.Y.XSMALL,
                                src: t.iconUrl
                              })
                            }), (0, i.jsx)("div", {
                              className: "pl-2 flex-grow",
                              children: (0, i.jsx)(g.E, {
                                type: b.jK.SUBHEADER_14,
                                weight: b.nG.MEDIUM,
                                children: null != (a = t.displayName) ? a : t.name
                              })
                            }), (0, i.jsx)("div", {
                              children: K?.id === t.id ? (0, i.jsx)(h.z6, {
                                value: 0,
                                className: "space-y-4",
                                children: (0, i.jsx)(h.sx, {
                                  value: 0,
                                  className: "radio-group__option",
                                  children: (0, i.jsx)("span", {
                                    className: "radio-group__option-indicator"
                                  })
                                })
                              }) : (0, i.jsx)(h.z6, {
                                className: "space-y-4",
                                children: (0, i.jsx)(h.sx, {
                                  value: 0,
                                  className: "radio-group__option"
                                })
                              })
                            })]
                          })
                        }, t.id)
                      })]
                    })]
                  })
                })
              })]
            })
          }
        })
      }
    },
    42394: (e, t, a) => {
      a.d(t, {
        p: () => i
      });
      var l, i = ((l = i || {}).INVALID = "invalid", l.DUPLICATED = "duplicated", l)
    },
    69769: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => Xe
      });
      var l = a(74848),
        i = a(12996),
        s = a(8224),
        o = a(63369),
        r = a(82444),
        n = a(37708),
        d = a(85434),
        c = a(60380),
        m = a(63111),
        p = a(29584),
        u = a(96540),
        h = a(6442),
        g = a(81821),
        b = a(61801),
        f = a(46376),
        w = a(52114),
        y = a(1279);
      const v = ({
        value: e,
        label: t,
        onChange: a,
        onEnterClicked: i,
        placeholder: s,
        error: o,
        testid: r,
        autoFocus: n,
        isMnemonic: d = !1
      }) => {
        const [c, m] = (0, u.useState)(!1), p = (0, u.useRef)(null), [h, v] = (0, u.useState)(!e), [x, C] = (0, u.useState)(e);
        (0, u.useEffect)(() => {
          e && v(!1)
        }, [e]);
        const k = h ? "" : o,
          S = d && 1 === (x + "").split(" ").length,
          M = t => {
            d && (e + "").endsWith(" ") && t.endsWith(" ") || (C(t), a(t.trim()))
          };
        return (0, l.jsxs)("div", {
          className: "relative text-left",
          children: [t && (0, l.jsx)("div", {
            className: "mb-3",
            children: (0, l.jsx)(f.l, {
              children: t
            })
          }), (0, l.jsxs)("div", {
            className: "input-field space-x-1 pr-[30px] relative",
            children: [(0, l.jsx)("textarea", {
              "data-testid": r,
              ref: p,
              value: (() => {
                if (c || !d) return x;
                const e = (x + "").split(" ");
                return [...e.slice(0, -1).map(() => "••••••••"), e[e.length - 1]].join(" ")
              })(),
              onChange: e => {
                const t = e.target.value;
                if (c || !d) return void M(t);
                const a = t.split(" "),
                  l = (x + "").split(" "),
                  i = a.map((e, t) => /^•+$/.test(e) ? l[t] || "" : e).join(" ");
                M(i)
              },
              onPaste: e => {
                e.preventDefault();
                const t = e.clipboardData.getData("text");
                C(t + " "), a(t)
              },
              onKeyDown: e => {
                "Enter" === e.key && i && (e.preventDefault(), i())
              },
              placeholder: s,
              className: "ph-no-capture w-full block flex-1 tw-scrollbar outline-none bg-transparent typography-subheader-16 font-medium resize-none pr-10",
              rows: 6,
              style: d ? void 0 : {
                WebkitTextSecurity: c ? "none" : "disc"
              },
              autoFocus: n
            }), !S && (0, l.jsx)("button", {
              type: "button",
              "data-testid": r + "-show-hide-button",
              onClick: () => {
                m(!c), p.current.focus()
              },
              className: "absolute right-5 bottom-4",
              children: c ? (0, l.jsx)(b.N, {
                width: 16,
                height: 16,
                colorClass: "text-primary-default"
              }) : (0, l.jsx)(g.Z, {
                width: 16,
                height: 16,
                colorClass: "text-primary-default"
              })
            })]
          }), (0, l.jsx)("div", {
            className: "mt-2",
            children: (0, l.jsx)(w.E, {
              testid: "input-error",
              type: y.jK.CAPTION_12,
              theme: y.Il.ERROR_1_DEFAULT,
              children: k
            })
          })]
        })
      };
      var x = a(5750);
      const C = [a(11377).J.decred];
      var k = a(10537),
        S = a(64145),
        M = a(22670),
        P = a(90749),
        N = a(19845),
        I = Object.defineProperty,
        K = Object.defineProperties,
        W = Object.getOwnPropertyDescriptors,
        T = Object.getOwnPropertySymbols,
        O = {}.hasOwnProperty,
        V = {}.propertyIsEnumerable,
        R = (e, t, a) => t in e ? I(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : e[t] = a,
        L = (e, t) => {
          for (var a in t || (t = {})) O.call(t, a) && R(e, a, t[a]);
          if (T)
            for (var a of T(t)) V.call(t, a) && R(e, a, t[a]);
          return e
        },
        E = (e, t) => K(e, W(t)),
        H = a(16665),
        j = a(65512),
        F = a(51848);
      const A = ({
        width: e,
        height: t,
        colorClass: a
      }) => (0, l.jsx)("svg", {
        className: a,
        width: e ?? 12,
        height: t ?? 12,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, l.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.42746 2.42857C7.42746 3.21755 6.78786 3.85714 5.99888 3.85714C5.20991 3.85714 4.57031 3.21755 4.57031 2.42857C4.57031 1.63959 5.20991 1 5.99888 1C6.78786 1 7.42746 1.63959 7.42746 2.42857ZM7.42746 6C7.42746 6.78898 6.78786 7.42857 5.99888 7.42857C5.20991 7.42857 4.57031 6.78898 4.57031 6C4.57031 5.21102 5.20991 4.57143 5.99888 4.57143C6.78786 4.57143 7.42746 5.21102 7.42746 6ZM5.99888 11C6.78786 11 7.42746 10.3604 7.42746 9.57143C7.42746 8.78243 6.78786 8.14286 5.99888 8.14286C5.20991 8.14286 4.57031 8.78243 4.57031 9.57143C4.57031 10.3604 5.20991 11 5.99888 11Z",
          fill: "currentColor"
        })
      });
      var _ = a(81593),
        Z = a(82410);
      const B = ({
        instructions: e
      }) => {
        var t, a, i;
        const [s, o] = (0, u.useState)(0), {
          formatMessage: r
        } = (0, h.A)(), [n, d] = (0, u.useState)(0), c = (0, u.useMemo)(() => {
          var t, a;
          return null != (a = null == (t = e?.platforms[s]) ? void 0 : t.steps.map(e => e.id)) ? a : []
        }, [e, s]), m = null == (a = null == (t = e?.platforms[s]) ? void 0 : t.steps) ? void 0 : a[n];
        return (0, l.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [(0, l.jsx)(F.fu, {
            as: u.Fragment,
            onChange: e => o(e),
            selectedIndex: s,
            children: (0, l.jsx)(F.wb, {
              className: "flex gap-6",
              children: e?.platforms.map((t, a) => (0, l.jsx)(F.oz, {
                className: "px-2 outline-none flex flex-col items-center " + ("other" === e.product ? "hidden" : ""),
                children: ({
                  selected: e
                }) => (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)("div", {
                    className: "flex items-center h-full",
                    onClick: () => (e => {
                      o(e), d(0)
                    })(a),
                    children: (0, l.jsx)(w.E, {
                      theme: e ? y.Il.UTILITY_1_DEFAULT : y.Il.UTILITY_1_OPACITY_2,
                      type: y.jK.SUBHEADER_16,
                      weight: y.nG.MEDIUM,
                      children: t.title
                    })
                  }), (0, l.jsx)("div", {
                    "data-selected": e,
                    className: "w-full h-1 rounded-full data-[selected='true']:bg-primary"
                  })]
                })
              }, `${e.product}-${t.title}`))
            })
          }), m?.image, (0, l.jsxs)("div", {
            className: "flex flex-col",
            children: [(0, l.jsx)("div", {
              className: "flex min-h-[54px]",
              children: (0, l.jsx)(w.E, {
                type: y.jK.BODY_14,
                children: r(null != (i = m?.messageConfig) ? i : {}, {
                  bold: e => (0, l.jsx)("span", {
                    className: "font-bold",
                    children: e
                  }),
                  menuVertical: () => (0, l.jsx)("span", {
                    className: "inline-block",
                    children: (0, l.jsx)(A, {
                      colorClass: "text-utility-1-default"
                    })
                  }),
                  gearIcon: () => (0, l.jsx)("span", {
                    className: "inline-block",
                    children: (0, l.jsx)(_.Z, {
                      colorClass: "text-utility-1-default",
                      width: 12,
                      height: 12
                    })
                  })
                })
              })
            }), (0, l.jsx)("div", {
              className: "flex justify-center items-center",
              children: (0, l.jsx)(Z.M, {
                spacing: Z.f.SMALL,
                width: Z.f.MEDIUM,
                disableNext: n === c.length - 1,
                disablePrevious: 0 === n,
                onClickNext: () => d(n + 1),
                onClickPrevious: () => d(n - 1),
                children: c.map((e, t) => (0, l.jsx)(Z.M.Step, {
                  active: n === t
                }, e))
              })
            })]
          })]
        })
      };
      var D = a(38533),
        G = a(29251),
        z = a(23207),
        $ = a(74215),
        q = a(24576),
        U = a(96525),
        J = a(42394),
        Q = a(93420);
      const Y = a.p + "images/trust-wallet-1.3J3Nz9y.gif",
        X = a.p + "images/trust-wallet-2.gbIyt1J.gif",
        ee = a.p + "images/trust-wallet-3.PdzvScD.gif",
        te = a.p + "images/trust-wallet-extension-1.KcMJSCQ.gif",
        ae = a.p + "images/trust-wallet-extension-2.411HMJ5.gif",
        le = a.p + "images/trust-wallet-extension-3.bZWmQFy.gif",
        ie = a.p + "images/phantom-mobile-1.ig1Cenu.gif",
        se = a.p + "images/phantom-mobile-2.qDWnGBk.gif",
        oe = a.p + "images/phantom-mobile-3.U1fXPIh.gif",
        re = a.p + "images/phantom-extension-1.0uZqZ68.gif",
        ne = a.p + "images/phantom-extension-2.yiQ5b5n.gif",
        de = a.p + "images/phantom-extension-3.U1fXPIh.gif",
        ce = a.p + "images/coinbase-mobile-1.6lmG22O.gif",
        me = a.p + "images/coinbase-mobile-2.l3AMfKY.gif",
        pe = a.p + "images/coinbase-mobile-3.HWvnBnq.gif",
        ue = a.p + "images/metamask-mobile-1.kkKjNUo.gif",
        he = a.p + "images/metamask-mobile-2.CjjuEbb.gif",
        ge = a.p + "images/metamask-mobile-3.LiwhwRp.gif",
        be = a.p + "images/metamask-extension-1.50ms+Vm.gif",
        fe = a.p + "images/metamask-extension-2.3A5cawg.gif",
        we = a.p + "images/metamask-extension-3.88COOGz.gif",
        ye = ({
          src: e,
          alt: t
        }) => (0, l.jsx)("div", {
          className: "relative w-full h-full aspect-[2/1.48]",
          children: (0, l.jsx)("div", {
            className: "absolute inset-0 rounded-[4px] overflow-hidden",
            children: (0, l.jsx)("img", {
              src: e,
              alt: t
            })
          })
        }),
        ve = a.p + "images/generic-1.FgcBY5P.gif",
        xe = a.p + "images/generic-2.WZnmcqG.gif",
        Ce = a.p + "images/generic-3.eL0ymBo.gif",
        ke = {
          "trust-wallet": {
            product: Q.c.TRUST_WALLET,
            header: {
              id: "import-wallet.trust-wallet.header",
              defaultMessage: "Locate your Secret Phrase on Trust Wallet"
            },
            subHeader: {
              id: "import-wallet.trust-wallet.sub-header",
              defaultMessage: "Import with Secret Phrase or Private Key"
            },
            inputLabel: {
              id: "import-wallet.trust-wallet.input-label",
              defaultMessage: "Enter Secret Phrase or Private Key"
            },
            inputInstructions: {
              id: "import-wallet.trust-wallet.input-instructions",
              defaultMessage: "Secret Phrase is typically 12 (sometimes 18, 24) words separated by single spaces {br} Private Key is a long alphanumeric code"
            },
            platforms: [{
              title: "Mobile",
              steps: [{
                id: "tw-mobile-step-1",
                image: (0, l.jsx)(ye, {
                  src: Y,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.mobile.step-1",
                  defaultMessage: "1. On your <bold>Trust Wallet</bold> mobile app Homepage click on your <bold>Wallet</bold>"
                }
              }, {
                id: "tw-mobile-step-2",
                image: (0, l.jsx)(ye, {
                  src: X,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.mobile.step-2",
                  defaultMessage: "2. Click on the “<menuVertical></menuVertical>“ and select “<bold>Back up now</bold>”"
                }
              }, {
                id: "tw-mobile-step-3",
                image: (0, l.jsx)(ye, {
                  src: ee,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.mobile.step-3",
                  defaultMessage: "3. Follow the security steps to retrieve your <bold>Secret Phrase</bold>"
                }
              }]
            }, {
              title: "Extension",
              steps: [{
                id: "tw-extension-step-1",
                image: (0, l.jsx)(ye, {
                  src: te,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.extension.step-1",
                  defaultMessage: '1. On your Trust Wallet extension Homepage click on your <bold>Wallet</bold> and "<bold>Manage Wallets</bold>"'
                }
              }, {
                id: "tw-extension-step-2",
                image: (0, l.jsx)(ye, {
                  src: ae,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.extension.step-2",
                  defaultMessage: '2. Select your wallet and "<bold>Secret Phrase</bold>"'
                }
              }, {
                id: "tw-extension-step-3",
                image: (0, l.jsx)(ye, {
                  src: le,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.extension.step-3",
                  defaultMessage: "3. Follow the security steps to retrieve your <bold>Secret Phrase</bold>"
                }
              }]
            }]
          },
          phantom: {
            product: Q.c.PHANTOM,
            header: {
              id: "import-wallet.phantom.header",
              defaultMessage: "Locate your Recovery Phrase on Phantom"
            },
            subHeader: {
              id: "import-wallet.phantom.sub-header",
              defaultMessage: "Import with Recovery Phrase or Private Key"
            },
            inputLabel: {
              id: "import-wallet.phantom.input-label",
              defaultMessage: "Enter Recovery Phrase or Private Key"
            },
            inputInstructions: {
              id: "import-wallet.phantom.input-instructions",
              defaultMessage: "Recovery Phrase is typically 12 (sometimes 18, 24) words separated by single spaces {br} Private Key is a long alphanumeric code"
            },
            platforms: [{
              title: "Mobile",
              steps: [{
                id: "phantom-mobile-step-1",
                image: (0, l.jsx)(ye, {
                  src: ie,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.phantom.mobile.step-1",
                  defaultMessage: "1. On your <bold>Phantom</bold> mobile Homepage, click on your <bold>account</bold>, then click on “<bold>Settings</bold>”"
                }
              }, {
                id: "phantom-mobile-step-2",
                image: (0, l.jsx)(ye, {
                  src: se,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.phantom.mobile.step-2",
                  defaultMessage: "2. Select <bold>Security & Privacy</bold> and then click <bold>Show Recovery Phrase</bold>"
                }
              }, {
                id: "phantom-mobile-step-3",
                image: (0, l.jsx)(ye, {
                  src: oe,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.phantom.mobile.step-3",
                  defaultMessage: "3. Select the account to import. Follow the security steps to view your <bold>Recovery Phrase</bold>"
                }
              }]
            }, {
              title: "Extension",
              steps: [{
                id: "phantom-extension-step-1",
                image: (0, l.jsx)(ye, {
                  src: re,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.phantom.extension.step-1",
                  defaultMessage: "1. On your <bold>Phantom</bold> extension Homepage, click on your <bold>account</bold>, then click on “<bold>Settings</bold>”"
                }
              }, {
                id: "phantom-extension-step-2",
                image: (0, l.jsx)(ye, {
                  src: ne,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.phantom.extension.step-2",
                  defaultMessage: "2. Select “<bold>Security & Privacy</bold>” and then click “<bold>Show Recovery Phrase</bold>”"
                }
              }, {
                id: "phantom-extension-step-3",
                image: (0, l.jsx)(ye, {
                  src: de,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.phantom.extension.step-3",
                  defaultMessage: "3. Select the account to import. Follow the security steps to view your <bold>Recovery Phrase</bold>"
                }
              }]
            }]
          },
          coinbase: {
            product: Q.c.COINBASE,
            header: {
              id: "import-wallet.coinbase.header",
              defaultMessage: "Locate your Private Key on Coinbase"
            },
            subHeader: {
              id: "import-wallet.coinbase.sub-header",
              defaultMessage: "Import with Private Key"
            },
            inputLabel: {
              id: "import-wallet.coinbase.input-label",
              defaultMessage: "Enter Private Key"
            },
            inputInstructions: {
              id: "import-wallet.coinbase.input-instructions",
              defaultMessage: "Private Key typically has 64 alphanumeric characters"
            },
            platforms: [{
              title: "Mobile",
              steps: [{
                id: "coinbase-mobile-step-1",
                image: (0, l.jsx)(ye, {
                  src: ce,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.coinbase.mobile.step-1",
                  defaultMessage: "1. On your <bold>Coinbase</bold> Homepage click on your <bold>Wallet</bold>"
                }
              }, {
                id: "coinbase-mobile-step-2",
                image: (0, l.jsx)(ye, {
                  src: me,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.coinbase.mobile.step-2",
                  defaultMessage: "2. Select “<bold>Add & manage all wallets</bold>” and <bold>select the wallet</bold> you want to import"
                }
              }, {
                id: "coinbase-mobile-step-3",
                image: (0, l.jsx)(ye, {
                  src: pe,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.coinbase.mobile.step-3",
                  defaultMessage: "3. Select “<bold>Show private key</bold>” and follow the verification steps to view your <bold>Private Key</bold>"
                }
              }]
            }, {
              title: "Extension",
              steps: [{
                id: "coinbase-extension-step-1",
                image: (0, l.jsx)(ye, {
                  src: ce,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.coinbase.extension.step-1",
                  defaultMessage: "1. On your <bold>Coinbase</bold> extension Homepage click on “<bold>Settings</bold>”"
                }
              }, {
                id: "coinbase-extension-step-2",
                image: (0, l.jsx)(ye, {
                  src: me,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.coinbase.extension.step-2",
                  defaultMessage: "2. Select “<bold>Manage all wallets</bold>” and <bold>select the wallet</bold> you want to import"
                }
              }, {
                id: "coinbase-extension-step-3",
                image: (0, l.jsx)(ye, {
                  src: pe,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.coinbase.extension.step-3",
                  defaultMessage: "3. Select “<bold>Show private key</bold>” and follow the verification steps to view your <bold>Private Key</bold>"
                }
              }]
            }]
          },
          metamask: {
            product: Q.c.METAMASK,
            header: {
              id: "import-wallet.metamask.header",
              defaultMessage: "Locate your Secret Recovery Phrase on Metamask"
            },
            subHeader: {
              id: "import-wallet.metamask.sub-header",
              defaultMessage: "Import with Secret Recovery Phrase or Private Key"
            },
            inputLabel: {
              id: "import-wallet.metamask.input-label",
              defaultMessage: "Enter Secret Recovery Phrase or Private Key"
            },
            inputInstructions: {
              id: "import-wallet.metamask.input-instructions",
              defaultMessage: "Secret Recovery Phrase is typically 12 (sometimes 18, 24) words separated by single spaces {br} Private Key is a long alphanumeric code"
            },
            platforms: [{
              title: "Mobile",
              steps: [{
                id: "metamask-mobile-step-1",
                image: (0, l.jsx)(ye, {
                  src: ue,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.metamask.mobile.step-1",
                  defaultMessage: "1. On your <bold>Metamask</bold> mobile Homepage click on “<gearIcon></gearIcon>” and go to the <bold>Settings</bold> page"
                }
              }, {
                id: "metamask-mobile-step-2",
                image: (0, l.jsx)(ye, {
                  src: he,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.metamask.mobile.step-2",
                  defaultMessage: "2. Select “<bold>Security & Privacy</bold>” and click “<bold>Reveal Secret Recovery Phrase</bold>”"
                }
              }, {
                id: "metamask-mobile-step-3",
                image: (0, l.jsx)(ye, {
                  src: ge,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.metamask.mobile.step-3",
                  defaultMessage: "3. Follow the security steps to retrieve your <bold>Secret Recovery Phrase</bold>"
                }
              }]
            }, {
              title: "Extension",
              steps: [{
                id: "metamask-extension-step-1",
                image: (0, l.jsx)(ye, {
                  src: be,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.metamask.extension.step-1",
                  defaultMessage: "1. On your Metamask extension Homepage click on “<menuVertical></menuVertical>” and go to the <bold>Settings</bold> page"
                }
              }, {
                id: "metamask-extension-step-2",
                image: (0, l.jsx)(ye, {
                  src: fe,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.metamask.extension.step-2",
                  defaultMessage: "2. Select <bold>Security & Privacy</bold> and click <bold>Reveal Secret Recovery Phrase</bold>"
                }
              }, {
                id: "metamask-extension-step-3",
                image: (0, l.jsx)(ye, {
                  src: we,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.metamask.extension.step-3",
                  defaultMessage: "3. Follow the security steps to retrieve your <bold>Secret Recovery Phrase</bold>"
                }
              }]
            }]
          },
          other: {
            product: Q.c.OTHER,
            header: {
              id: "import-wallet.other.header",
              defaultMessage: "Locate your Secret Phrase or Private Key on wallets"
            },
            subHeader: {
              id: "import-wallet.other.sub-header",
              defaultMessage: "Import with Secret Phrase or Private Key"
            },
            inputLabel: {
              id: "import-wallet.trust-wallet.input-label",
              defaultMessage: "Enter Secret Phrase or Private Key"
            },
            inputInstructions: {
              id: "import-wallet.other.input-instructions",
              defaultMessage: "Secret Recovery Phrase is typically 12 (sometimes 18, 24) words separated by single spaces {br} Private Key is a long alphanumeric code"
            },
            platforms: [{
              title: "Mobile",
              steps: [{
                id: "other-mobile-step-1",
                image: (0, l.jsx)(ye, {
                  src: ve,
                  alt: "Step 1"
                }),
                messageConfig: {
                  id: "import-wallet.other.mobile.step-1",
                  defaultMessage: "1. On your wallet Homepage, go to “<bold>Settings</bold>”"
                }
              }, {
                id: "other-mobile-step-2",
                image: (0, l.jsx)(ye, {
                  src: xe,
                  alt: "Step 2"
                }),
                messageConfig: {
                  id: "import-wallet.other.mobile.step-2",
                  defaultMessage: "2. Select “<bold>Security & Privacy</bold>” and look for “<bold>Secret Phrase</bold>” or “<bold>Private Key</bold>”"
                }
              }, {
                id: "other-mobile-step-3",
                image: (0, l.jsx)(ye, {
                  src: Ce,
                  alt: "Step 3"
                }),
                messageConfig: {
                  id: "import-wallet.other.mobile.step-3",
                  defaultMessage: "3. Follow the verification steps to view your <bold>Secret Phrase</bold> or <bold>Private Key</bold>"
                }
              }]
            }]
          }
        };
      var Se = a(31170),
        Me = a(76493),
        Pe = a(97371),
        Ne = a(52619);
      const Ie = ({
        setCurrentStep: e
      }) => {
        var t;
        const {
          formatMessage: a
        } = (0, h.A)(), g = (0, i.F)(), b = (0, $.v)();
        (0, o.K)({
          event: p.Un.ONBOARDING_IMPORT_MNEMONIC_OR_PRIVATE_KEY,
          props: {
            setupType: b
          }
        });
        const f = function() {
            const e = (0, k.n)(!0);
            return (0, u.useMemo)(() => e.filter(e => !C.includes(e.id)).map(e => "c" + e.coinId), [e])
          }(),
          {
            selectedWallet: I,
            setCurrentFlow: K,
            setSelectedWallet: W
          } = (0, n.e)(),
          {
            data: {
              password: T,
              isPasswordGenerated: O,
              passkeyId: V,
              passkeyPassword: R
            },
            update: F
          } = (0, u.useContext)(s.x),
          {
            setupAuthentication: A
          } = (0, U.B)(),
          {
            importMnemonic: _
          } = (({
            setCurrentStep: e
          }) => {
            const {
              trackAnalytics: t,
              setCustomPeoplePropertiesOnce: a
            } = (0, z.s)(), {
              data: {
                isPasswordGenerated: l
              },
              clear: i
            } = (0, u.useContext)(s.x), {
              setSolanaDerivationAddresses: o,
              setTempWalletId: r
            } = (0, n.e)(), c = (0, $.v)(), {
              selectedWallet: m
            } = (0, n.e)();
            return {
              importMnemonic: (s, n) => ((e, t, a) => new Promise((e, t) => {
                var l = e => {
                    try {
                      s(a.next(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  i = e => {
                    try {
                      s(a.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, i);
                s((a = a.apply(null, null)).next())
              }))(0, 0, function*() {
                const u = yield S.YW.emit(D.A.INITIATE_IMPORT_MNEMONIC, {
                  mnemonic: s
                }), {
                  types: h,
                  accounts: g
                } = yield S.YW.emit(D.A.DERIVE_SOLANA_ADDRESS, u), b = s.trim().split(/\s+/).length;
                1 === h.length ? (yield S.YW.emit(D.A.COMPLETE_IMPORT_MNEMONIC, {
                  walletId: u,
                  solanaDerivationType: h[0],
                  name: n
                }), t({
                  event: p.BQ.WALLET_CREATED,
                  props: {
                    pageViewSource: p.Un.ONBOARDING_IMPORT_MNEMONIC_OR_PRIVATE_KEY,
                    walletType: G.S.MNEMONIC,
                    mnemonicLength: b,
                    actionSourceType: "importwallet",
                    setupType: c
                  }
                }), a({
                  [p.nk.ONBOARDING_AUTH_TYPE]: l ? q.YO.BIOMETRICS : q.YO.PASSWORD,
                  [p.nk.ONBOARDING_SETUP_TYPE]: q.xO.IMPORT,
                  [p.nk.ONBOARDING_SELECTED_WALLET]: m,
                  [p.nk.ONBOARDING_WALLET_TYPE]: q.r9.SEED_PHRASE
                }), i(), e(d.jK.COMPLETED)) : (o(g), r(u), e(d.jK.DERIVE_SOLANA_ADDRESS))
              })
            }
          })({
            setCurrentStep: e
          }),
          {
            importPrivateKey: Z
          } = (({
            setCurrentStep: e
          }) => {
            const {
              trackAnalytics: t,
              setCustomPeoplePropertiesOnce: a
            } = (0, z.s)(), {
              data: {
                isPasswordGenerated: l
              },
              clear: i
            } = (0, u.useContext)(s.x), o = (0, $.v)(), {
              selectedWallet: r
            } = (0, n.e)();
            return {
              importPrivateKey: (s, n, c) => ((e, t, a) => new Promise((e, t) => {
                var l = e => {
                    try {
                      s(a.next(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  i = e => {
                    try {
                      s(a.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, i);
                s((a = a.apply(null, null)).next())
              }))(0, 0, function*() {
                const m = yield S.YW.emit(D.A.INITIATE_IMPORT_PRIVATE_KEY, {
                  privateKey: s,
                  blockchain: n
                });
                if (!m) throw Error("Private key import initiation failed");
                yield S.YW.emit(D.A.COMPLETE_IMPORT_PRIVATE_KEY, {
                  walletId: m,
                  walletName: c
                }), i(), t({
                  event: p.BQ.WALLET_CREATED,
                  props: {
                    pageViewSource: p.Un.ONBOARDING_IMPORT_MNEMONIC_OR_PRIVATE_KEY,
                    walletType: G.S.PRIVATE_KEY,
                    blockchain: n,
                    actionSourceType: "importwallet",
                    setupType: o
                  }
                }), a({
                  [p.nk.ONBOARDING_AUTH_TYPE]: l ? q.YO.BIOMETRICS : q.YO.PASSWORD,
                  [p.nk.ONBOARDING_SETUP_TYPE]: q.xO.IMPORT,
                  [p.nk.ONBOARDING_SELECTED_WALLET]: r,
                  [p.nk.ONBOARDING_WALLET_TYPE]: q.r9.PRIVATE_KEY
                }), i(), e(d.jK.COMPLETED)
              })
            }
          })({
            setCurrentStep: e
          }),
          [Y, X] = (0, u.useState)(""),
          [ee, te] = (0, u.useState)(!1),
          [ae, le] = (0, u.useState)(""),
          [ie, se] = (0, u.useState)([]),
          oe = (e => {
            const t = e.trim().split(/\s+/);
            return t.length > 1 || 1 === t.length && 8 >= e.length
          })(Y),
          re = (e => 1 === e.trim().split(/\s+/).length)(Y),
          {
            walletName: ne,
            setWalletName: de
          } = (() => {
            var e;
            const t = (0, Me.S)(),
              a = Object.values(null != (e = t?.wallets) ? e : {}).map(e => e.name),
              l = /^Main wallet(?: (\d+))?$/,
              i = a.map(e => {
                const t = e.match(l);
                return t ? +(t[1] || 1) : null
              }).filter(e => null !== e),
              [s, o] = (0, u.useState)("Main wallet");
            return (0, u.useEffect)(() => {
              if (0 === i.length) return;
              let e = 1;
              for (; i.includes(e);) e++;
              o(1 === e ? "Main wallet" : "Main wallet " + e)
            }, []), {
              walletName: s,
              setWalletName: o
            }
          })(),
          ce = (e => {
            var t;
            const {
              formatMessage: a
            } = (0, h.A)(), l = (0, Me.S)(), i = Object.values(null != (t = l?.wallets) ? t : {}).map(e => e.name), s = (0, u.useMemo)(() => i.includes(e), [e]);
            return {
              isValid: !s,
              error: s ? a({
                id: "onboarding.import-wallet.wallet-name-already-exists",
                defaultMessage: "Wallet name already exists"
              }) : void 0
            }
          })(ne),
          me = ((e, t, a, l) => {
            const {
              isValid: i,
              error: s
            } = (({
              value: e,
              selectedWordCount: t
            }) => {
              const {
                formatMessage: a
              } = (0, h.A)(), [l, i] = (0, u.useState)({
                isValid: !1,
                length: !0,
                mnemonic: !0,
                hideError: !1
              });
              (0, u.useEffect)(() => {
                i(L({}, (({
                  value: e,
                  selectedWordCount: t
                }) => {
                  var a, l, i;
                  const s = {
                    length: !0,
                    mnemonic: !1,
                    hideError: !0
                  };
                  if (!e || 8 > e.length) return E(L({}, s), {
                    isValid: !1
                  });
                  const o = null != (i = null == (l = null == (a = e?.match(/\w+/g)) ? void 0 : a.join(" ").split(/\s/)) ? void 0 : l.length) ? i : 0;
                  e && (18 === o && 18 === t || 12 === o && 12 === t || 24 === o && 24 === t) ? (s.length = !0, s.mnemonic = P.JB((0, N.vr)(e).toLowerCase()), s.hideError = !1) : o > 24 ? s.length = !1 : s.hideError = !0;
                  const r = s.length && s.mnemonic;
                  return E(L({}, s), {
                    isValid: r
                  })
                })({
                  value: e,
                  selectedWordCount: t
                })))
              }, [e, t]);
              const s = (0, u.useMemo)(() => l.length ? l.mnemonic || l.hideError ? void 0 : a({
                id: "validate-seed-phrase.generic"
              }) : a({
                id: "validate-seed-phrase.length"
              }), [a, l]);
              return {
                isValid: l.isValid,
                error: s
              }
            })({
              value: e,
              selectedWordCount: e.trim().split(/\s+/).length
            }), {
              isValid: o,
              error: r
            } = function({
              value: e,
              blockchain: t
            }) {
              const {
                formatMessage: a
              } = (0, h.A)(), [l, i] = (0, u.useState)(!1), [s, o] = (0, u.useState)("");
              return (0, u.useEffect)(() => {
                !t || !e || function() {
                  ((e, t, a) => {
                    new Promise((t, l) => {
                      var i = e => {
                          try {
                            o(a.next(e))
                          } catch (e) {
                            l(e)
                          }
                        },
                        s = e => {
                          try {
                            o(a.throw(e))
                          } catch (e) {
                            l(e)
                          }
                        },
                        o = e => e.done ? t(e.value) : Promise.resolve(e.value).then(i, s);
                      o((a = a.apply(e, null)).next())
                    })
                  })(this, 0, function*() {
                    const l = yield S.YW.emit(M.A.VALIDATE_PRIVATE_KEY, {
                      privateKey: e,
                      blockchain: t
                    });
                    i(l), o(l ? "" : a({
                      id: "validate-private-key.invalid",
                      defaultMessage: "Invalid private key"
                    }))
                  })
                }()
              }, [e, t]), {
                isValid: l,
                error: s
              }
            }({
              value: e,
              blockchain: l
            });
            let n;
            return t ? n = s : a && (n = r), {
              isMnemonic: t,
              isPrivateKey: a,
              isValid: i || o,
              error: n
            }
          })(Y, oe, re, null == (t = ie?.[0]) ? void 0 : t.blockchainId),
          pe = me.isValid && ce.isValid,
          ue = ke[I ?? "other"];
        (0, u.useEffect)(() => {
          ae && le("")
        }, [Y]), (0, u.useEffect)(() => () => {
          W(void 0)
        }, [I]);
        const he = e => ((e, t, a) => new Promise((e, t) => {
            var l = e => {
                try {
                  s(a.next(e))
                } catch (e) {
                  t(e)
                }
              },
              i = e => {
                try {
                  s(a.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, i);
            s((a = a.apply(null, null)).next())
          }))(0, 0, function*() {
            var t;
            if (e?.preventDefault(), g || T) {
              te(!0), F({
                seedPhrase: oe ? (0, N.vr)(Y).toLowerCase() : void 0,
                privateKey: re ? Y : void 0,
                selectedBlockchain: re ? ie?.[0].blockchainId : void 0
              });
              try {
                T && (yield A({
                  pageViewSource: p.Un.ONBOARDING_IMPORT_MNEMONIC_OR_PRIVATE_KEY,
                  password: T,
                  passkeyId: V,
                  passkeyPassword: R,
                  isPasswordGenerated: O
                })), oe ? yield _((0, N.vr)(Y).toLowerCase(), ne): yield Z(Y, ie?.[0].blockchainId, ne)
              } catch (e) {
                "MNEMONIC_ALREADY_EXISTS" === e?.message ? le(a({
                  id: "import-wallet.seed-phrase.duplicated"
                })) : e?.message === J.p.DUPLICATED ? le(a({
                  id: "import-wallet.private-key.duplicated",
                  defaultMessage: "Wallet with such account already exists"
                })) : le(null != (t = e?.message) ? t : e)
              }
              te(!1)
            }
          }),
          ge = {
            importTypeUnknown: ue.inputInstructions,
            mnemonic: {
              id: "import-wallet.mnemonic-or-private-key.mnemonic-caption",
              defaultMessage: "Secret Phrase detected"
            },
            privateKey: {
              id: "import-wallet.mnemonic-or-private-key.private-key-caption",
              defaultMessage: "Private Key detected"
            }
          };
        return (0, l.jsx)(r.Q, {
          heading: a({
            id: "import-wallet.heading",
            defaultMessage: "Import a wallet"
          }),
          subHeading: a(ue.subHeader),
          body: (0, l.jsx)("div", {
            className: "relative top-[110px]",
            children: (0, l.jsx)(w.E, {
              type: y.jK.SUBHEADER_16,
              theme: y.Il.UTILITY_1_DEFAULT,
              children: a(ue.header)
            })
          }),
          animation: (0, l.jsx)(B, {
            instructions: ue
          }),
          animationWrapperStyles: "w-full h-full mt-[150px]",
          activeTab: 3,
          subHeadingAction: I === Q.c.TRUST_WALLET ? (0, l.jsxs)(j.$, {
            theme: Ne.ry.TRANSPARENT,
            onClick: () => {
              K(d.nL.IMPORT_QR)
            },
            className: "text-primary-default flex items-center gap-2",
            fullWidth: !1,
            children: [(0, l.jsx)(Pe.l, {
              width: 16,
              height: 16
            }), a({
              id: "import-wallet.import-with-qr-code",
              defaultMessage: "Import with QR Code"
            })]
          }) : null,
          onBackClick: () => {
            I !== Q.c.TRUST_WALLET ? e(d.jK.SELECT_IMPORT_METHOD) : e(d.jK.SELECT_TRUST_WALLET_METHOD)
          },
          children: (0, l.jsxs)("form", {
            onSubmit: he,
            className: "flex-1 flex flex-col overflow-y-auto mb-10 gap-6 tw-scrollbar",
            children: [(0, l.jsxs)("div", {
              className: "flex flex-col",
              children: [(0, l.jsx)(H.S, {
                testid: "wallet-name-input",
                label: a({
                  id: "import-wallet.name.label",
                  defaultMessage: "Wallet Name"
                }),
                actions: [{
                  key: "clear",
                  placeholder: (0, l.jsx)(Se.E, {
                    width: 16,
                    height: 16,
                    colorClass: "text-utility-1-opacity-1"
                  }),
                  onClick: () => de("")
                }],
                value: ne,
                validation: ce,
                onChange: e => de(e.target.value)
              }), !ce.error && (0, l.jsx)(w.E, {
                type: y.jK.CAPTION_12,
                theme: y.Il.SECONDARY,
                weight: y.nG.MEDIUM,
                children: a({
                  id: "import-wallet.mnemonic-or-private-key.name-description",
                  defaultMessage: "You can edit this later"
                })
              })]
            }), (0, l.jsxs)("div", {
              className: "flex flex-col",
              children: [(0, l.jsx)(v, {
                label: a(ue.inputLabel),
                onChange: X,
                onEnterClicked: () => pe && he(),
                value: Y,
                isMnemonic: oe,
                error: me.error,
                autoFocus: !0
              }), !me.error && (0, l.jsx)(w.E, {
                type: y.jK.CAPTION_12,
                theme: y.Il.SECONDARY,
                weight: y.nG.MEDIUM,
                children: a(ge[oe && re ? "importTypeUnknown" : oe ? "mnemonic" : "privateKey"], {
                  br: (0, l.jsx)("br", {})
                })
              })]
            }), re && !oe && (0, l.jsx)("div", {
              className: "flex relative w-full",
              children: (0, l.jsx)(x.Ff, {
                selectedNetworks: ie,
                allowedPrefixedCoinIds: f,
                hideAllNetworksOption: !0,
                label: a({
                  id: "import-private-key.blockchain.label",
                  defaultMessage: "Select Network"
                }),
                onSelect: se,
                spacing: x.GM.LARGE,
                radius: x.tU.ROUNDED,
                fullWidth: !0
              })
            }), ae && (0, l.jsx)(c.F, {
              theme: m.Z.WARNING,
              children: ae
            }), (0, l.jsx)("div", {
              className: "w-1/2 ml-auto mt-16",
              children: (0, l.jsx)(j.$, {
                onClick: he,
                loadingData: a({
                  id: "import-wallet.importing",
                  defaultMessage: "Importing..."
                }),
                disabled: !pe || ee || !!ae,
                loading: ee,
                children: a({
                  id: "generic.import",
                  defaultMessage: "Import"
                })
              })
            })]
          })
        })
      };
      var Ke = Object.defineProperty,
        We = Object.defineProperties,
        Te = Object.getOwnPropertyDescriptors,
        Oe = Object.getOwnPropertySymbols,
        Ve = {}.hasOwnProperty,
        Re = {}.propertyIsEnumerable,
        Le = (e, t, a) => t in e ? Ke(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : e[t] = a,
        Ee = (e, t) => {
          for (var a in t || (t = {})) Ve.call(t, a) && Le(e, a, t[a]);
          if (Oe)
            for (var a of Oe(t)) Re.call(t, a) && Le(e, a, t[a]);
          return e
        },
        He = (e, t) => We(e, Te(t));
      const je = ({
        buttonSubmitProps: e,
        buttonCancelProps: t
      }) => {
        var a, i;
        const {
          formatMessage: s
        } = (0, h.A)();
        return (0, l.jsxs)("div", {
          className: "flex w-full items-center justify-between mt-6 space-x-4",
          children: [(0, l.jsx)(j.$, He(Ee({
            theme: Ne.ry.TRANSPARENT,
            noPadding: !0
          }, t), {
            children: (0, l.jsx)(w.E, {
              theme: y.Il.BRAND,
              type: y.jK.TITLE,
              children: null != (a = t?.children) ? a : s({
                id: "generic.back"
              })
            })
          })), (0, l.jsx)(j.$, He(Ee({
            type: Ne.II.SUBMIT
          }, e), {
            "data-testid": "next-button",
            children: null != (i = e.children) ? i : s({
              id: "generic.next"
            })
          }))]
        })
      };
      var Fe = a(26113);
      const Ae = ({
        width: e,
        height: t,
        colorClass: a
      }) => (0, l.jsx)("svg", {
        className: a,
        fill: "none",
        width: e ?? 16,
        height: t ?? 19,
        viewBox: "0 0 16 19",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, l.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0 3.09998L7.99993 0.5V18.4998C2.28569 16.0999 0 11.4999 0 8.89993V3.09998ZM16 3.09998L8.00007 0.5V1.992L7.99997 1.99197V17.0379C8 17.0379 8.00004 17.0379 8.00007 17.0379V18.4998C13.7143 16.0999 16 11.4999 16 8.89993V3.09998ZM8.00007 17.0379C12.7765 15.0318 14.6871 11.1867 14.6871 9.01342V4.16528L8.00007 1.992V17.0379Z",
          fill: "currentColor"
        })
      });
      var _e = a(88774),
        Ze = a(40053),
        Be = a(70127);
      const De = ({
        width: e,
        height: t,
        colorClass: a
      }) => (0, l.jsx)("svg", {
        className: a,
        fill: "none",
        width: e ?? 593,
        height: t ?? 493,
        viewBox: "0 0 593 493",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, l.jsx)("path", {
          d: "M70.0546 493C145.604 493 202.38 427.297 236.263 375.378C232.142 386.865 229.852 398.351 229.852 409.378C229.852 439.703 247.252 461.297 281.592 461.297C328.753 461.297 379.119 419.946 405.218 375.378C403.386 381.811 402.471 387.784 402.471 393.297C402.471 414.432 414.375 427.757 438.643 427.757C515.108 427.757 592.03 292.216 592.03 173.676C592.03 81.3243 545.327 0 428.112 0C222.069 0 0 251.784 0 414.432C0 478.297 34.3405 493 70.0546 493ZM357.141 163.568C357.141 140.595 369.962 124.514 388.734 124.514C407.049 124.514 419.87 140.595 419.87 163.568C419.87 186.541 407.049 203.081 388.734 203.081C369.962 203.081 357.141 186.541 357.141 163.568ZM455.126 163.568C455.126 140.595 467.947 124.514 486.719 124.514C505.034 124.514 517.855 140.595 517.855 163.568C517.855 186.541 505.034 203.081 486.719 203.081C467.947 203.081 455.126 186.541 455.126 163.568Z",
          fill: "currentColor"
        })
      });
      var Ge = a(94893);
      const ze = ({
        setCurrentStep: e
      }) => {
        const {
          formatMessage: t
        } = (0, h.A)(), {
          trackAnalytics: a
        } = (0, z.s)(), i = (0, $.v)();
        (0, o.K)({
          event: p.Un.ONBOARDING_IMPORT_MNEMONIC_SOLANA_DERIVATION,
          props: {
            setupType: i
          }
        });
        const {
          tempWalletId: g,
          mnemonicLength: b,
          solanaDerivationAddresses: f
        } = (0, n.e)(), {
          clear: v
        } = (0, u.useContext)(s.x), [x, C] = (0, u.useState)(!1), [k, M] = (0, u.useState)(f[0].type), [P, N] = (0, u.useState)("");
        return (0, l.jsx)(r.Q, {
          heading: t({
            id: "import-solana-derivation.heading",
            defaultMessage: "Select wallet for Solana"
          }),
          activeTab: 2,
          children: (0, l.jsxs)("form", {
            onSubmit: t => ((e, t, a) => new Promise((e, t) => {
              var l = e => {
                  try {
                    s(a.next(e))
                  } catch (e) {
                    t(e)
                  }
                },
                i = e => {
                  try {
                    s(a.throw(e))
                  } catch (e) {
                    t(e)
                  }
                },
                s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, i);
              s((a = a.apply(null, null)).next())
            }))(0, 0, function*() {
              t.preventDefault();
              try {
                C(!0), yield S.YW.emit(D.A.COMPLETE_IMPORT_MNEMONIC, {
                  walletId: g,
                  solanaDerivationType: k
                }), v(), a({
                  event: p.BQ.WALLET_CREATED,
                  props: {
                    pageViewSource: p.Un.ONBOARDING_IMPORT_MNEMONIC_SOLANA_DERIVATION,
                    walletType: G.S.MNEMONIC,
                    mnemonicLength: b,
                    actionSourceType: "importwallet",
                    setupType: i
                  }
                }), e(d.jK.COMPLETED)
              } catch (e) {
                N(e?.message), C(!1)
              }
            }),
            className: "flex flex-col space-y-6",
            children: [f.map(e => (0, l.jsx)(Ge.c, {
              onClick: () => M(e.type),
              children: (0, l.jsxs)("div", {
                className: "flex items-center",
                children: [(0, l.jsxs)("div", {
                  className: "flex flex-1 items-center space-x-2",
                  children: [(0, l.jsx)("div", {
                    children: e.type === Be.a.DEFAULT ? (0, l.jsx)(Ae, {}) : (0, l.jsx)(De, {
                      width: 15,
                      height: 30
                    })
                  }), (0, l.jsx)("div", {
                    className: "pl-2 flex-grow",
                    children: (0, l.jsxs)("div", {
                      className: "flex flex-col text-start",
                      children: [(0, l.jsx)(w.E, {
                        type: y.jK.TITLE,
                        theme: y.Il.PRIMARY,
                        children: e.type === Be.a.DEFAULT ? "Trust" : "Phantom"
                      }), (0, l.jsx)(w.E, {
                        type: y.jK.BODY,
                        theme: y.Il.THIRD,
                        children: (0, Ze.p)({
                          value: e.address,
                          maxCharsPerSide: 6
                        })
                      })]
                    })
                  })]
                }), (0, l.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [(0, l.jsxs)(w.E, {
                    type: y.jK.TITLE,
                    theme: y.Il.PRIMARY,
                    children: [e.balance, " ", e.symbol]
                  }), (0, l.jsx)("div", {
                    className: "w-[20px] h-[20px]",
                    children: k === e.type && (0, l.jsx)(_e.S, {
                      width: 20,
                      height: 20,
                      colorClass: "text-primary"
                    })
                  })]
                })]
              })
            }, e.type)), P && (0, l.jsx)(c.F, {
              theme: m.Z.WARNING,
              children: P
            }), (0, l.jsx)(je, {
              buttonCancelProps: {
                onClick: () => {
                  e(d.jK.IMPORT_WALLET)
                },
                disabled: x
              },
              buttonSubmitProps: {
                loading: x,
                onClick: Fe.Z
              }
            })]
          })
        })
      };
      var $e = a(41383),
        qe = Object.defineProperty,
        Ue = Object.getOwnPropertySymbols,
        Je = {}.hasOwnProperty,
        Qe = {}.propertyIsEnumerable,
        Ye = (e, t, a) => t in e ? qe(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : e[t] = a;
      const Xe = () => {
        const e = (0, i.F)(),
          {
            data: {
              passkeyId: t,
              password: a
            }
          } = (0, u.useContext)(s.x),
          {
            selectedWallet: o,
            selectedTrustWalletMethod: r
          } = (0, n.e)(),
          c = ((e, t) => {
            for (var a in t || (t = {})) Je.call(t, a) && Ye(e, a, t[a]);
            if (Ue)
              for (var a of Ue(t)) Qe.call(t, a) && Ye(e, a, t[a]);
            return e
          })({
            [d.jK.IMPORT_WALLET]: Ie,
            [d.jK.DERIVE_SOLANA_ADDRESS]: ze
          }, $e.globalSteps),
          [m, p] = (0, u.useState)(o ? r ? d.jK.SELECT_TRUST_WALLET_METHOD : d.jK.IMPORT_WALLET : e || t || a ? d.jK.SELECT_IMPORT_METHOD : d.jK.AUTHENTICATION),
          h = c[m];
        return (0, l.jsx)(h, {
          setCurrentStep: p
        })
      }
    }
  }
]);
