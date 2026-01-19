"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8423], {
    2321: (e, t, r) => {
      r.d(t, {
        S: () => i
      });
      const i = e => e.message.includes("memory access out of bounds")
    },
    23119: (e, t, r) => {
      r.d(t, {
        c: () => g
      });
      var i = r(74848),
        l = r(81821),
        o = r(61801),
        n = r(16665),
        s = r(42201),
        c = r(96540),
        a = (r.n(c), Object.defineProperty),
        d = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        p = {}.hasOwnProperty,
        f = {}.propertyIsEnumerable,
        C = (e, t, r) => t in e ? a(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        m = (e, t) => {
          for (var r in t || (t = {})) p.call(t, r) && C(e, r, t[r]);
          if (u)
            for (var r of u(t)) f.call(t, r) && C(e, r, t[r]);
          return e
        },
        w = (e, t) => d(e, h(t));
      const g = e => {
        const [t, r] = (0, c.useState)(!1), [a, d] = (0, c.useState)(!e.value), h = a ? "" : e.error;
        return (0, c.useEffect)(() => {
          e.value && d(!1)
        }, [e.value]), (0, i.jsx)("div", {
          className: "flex flex-col space-y-2",
          children: (0, i.jsx)(n.S, w(m({
            testid: e.testid,
            type: t ? s.Ih.TEXT : s.Ih.PASSWORD
          }, e), {
            error: h,
            validation: e.validation,
            onEnter: e.onEnter,
            actions: [{
              key: "show-password",
              placeholder: t ? (0, i.jsx)(o.N, {
                width: 16,
                height: 16,
                colorClass: "text-primary-default"
              }) : (0, i.jsx)(l.Z, {
                width: 16,
                height: 16,
                colorClass: "text-primary-default"
              }),
              onClick: () => r(e => !e)
            }]
          }))
        })
      }
    },
    25516: (e, t, r) => {
      r.d(t, {
        u: () => a
      });
      var i = r(70438),
        l = r(64145),
        o = r(72960),
        n = r(93155),
        s = r(68157),
        c = r(96540);
      r.n(c);
      const a = () => {
        const [e, t] = (0, c.useState)(!1), r = (0, s.GV)(e => e.settings.passkeyId), a = (0, c.useCallback)(() => ((e, t, r) => new Promise((e, t) => {
          var i = e => {
              try {
                o(r.next(e))
              } catch (e) {
                t(e)
              }
            },
            l = e => {
              try {
                o(r.throw(e))
              } catch (e) {
                t(e)
              }
            },
            o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, l);
          o((r = r.apply(null, null)).next())
        }))(0, 0, function*() {
          if (!e && r) {
            t(!0);
            try {
              const e = new i.A,
                t = yield Promise.race([e.login(r), new Promise(e => setTimeout(() => {
                  i.A.abortController.abort(), e(void 0)
                }, 1e4))]);
              if (t?.password) return yield l.YW.emit(o.A.GET_PASSKEY_VAULT, t.password), t.password
            } catch (e) {
              n.A.error(e)
            } finally {
              t(!1)
            }
          }
        }), [e, r]);
        return {
          isLoadingBiometrics: e,
          authenticateWithBiometrics: a
        }
      }
    },
    32454: (e, t, r) => {
      r.d(t, {
        E: () => l
      });
      var i = r(74848);
      const l = ({
        width: e,
        height: t,
        colorClass: r
      }) => (0, i.jsxs)("svg", {
        className: r,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, i.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M17.5361 4.76367C18.0823 4.35034 18.86 4.45785 19.2734 5.00391L19.4854 5.29492C20.5134 6.77082 21.1162 8.5666 21.1162 10.5V13.5C21.1162 18.5343 17.0353 22.6152 12.001 22.6152C11.316 22.615 10.7607 22.06 10.7607 21.375C10.7607 20.69 11.316 20.135 12.001 20.1348C15.6651 20.1348 18.6357 17.1642 18.6357 13.5V10.5C18.6357 9.09056 18.1972 7.78661 17.4492 6.71289L17.2949 6.50098C16.8819 5.95479 16.9903 5.17705 17.5361 4.76367ZM20.1094 6.59082C20.2132 6.80575 20.3097 7.025 20.3965 7.24902L20.2598 6.91602C20.1644 6.69645 20.0602 6.48154 19.9482 6.27148L20.1094 6.59082ZM17.6055 4.85547C17.5636 4.88718 17.525 4.92163 17.4893 4.95801L17.6055 4.85547C17.6363 4.83216 17.6689 4.81069 17.7012 4.79102L17.6055 4.85547Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.12598 10.7598C4.81108 10.7598 5.36621 11.3149 5.36621 12V13.5C5.36621 16.0186 6.76993 18.2111 8.84277 19.3359L8.95117 19.4023C9.43588 19.7328 9.62259 20.3621 9.39648 20.9033L9.3418 21.0176C9.0355 21.582 8.35442 21.8135 7.77441 21.5713L7.65918 21.5166C4.81882 19.9754 2.88574 16.9643 2.88574 13.5V12C2.88574 11.315 3.44104 10.76 4.12598 10.7598ZM9.05762 19.6416L8.97559 19.5654C8.96812 19.5592 8.95982 19.5539 8.95215 19.5479C8.98942 19.5773 9.02501 19.6081 9.05762 19.6416ZM8.40039 19.2109C8.46915 19.2544 8.54091 19.293 8.61133 19.334C8.51131 19.2757 8.41256 19.2156 8.31543 19.1533L8.40039 19.2109Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.05371 8.43262C7.34045 7.87331 8.01028 7.61132 8.6084 7.84473L8.72461 7.89648C9.24682 8.16421 9.50986 8.76565 9.35254 9.33105L9.3125 9.45117C9.18623 9.77453 9.11621 10.1277 9.11621 10.5V13.5C9.11621 15.0929 10.4081 16.3846 12.001 16.3848C12.7074 16.3848 13.3519 16.1318 13.8535 15.7109L13.9551 15.6348C14.475 15.2814 15.1887 15.3724 15.6016 15.8643L15.6777 15.9648C16.0079 16.4503 15.9505 17.1047 15.541 17.5254L15.4482 17.6113C14.5164 18.3932 13.3121 18.8652 12.001 18.8652C9.03786 18.865 6.63574 16.4632 6.63574 13.5V10.5C6.63574 9.814 6.76518 9.15519 7.00195 8.54883L7.05371 8.43262ZM15.459 17.4443C15.4324 17.4717 15.4039 17.4984 15.374 17.5234L15.459 17.4443C15.4854 17.4171 15.51 17.3896 15.5332 17.3604L15.459 17.4443Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          d: "M12.001 9.63477C12.6861 9.63477 13.2412 10.1899 13.2412 10.875V13.125C13.2412 13.8101 12.6861 14.3652 12.001 14.3652C11.316 14.365 10.7607 13.81 10.7607 13.125V10.875C10.7607 10.19 11.316 9.63496 12.001 9.63477Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.001 5.13477C14.9643 5.13477 17.3662 7.53671 17.3662 10.5V12.75C17.3662 13.4351 16.8111 13.9902 16.126 13.9902C15.441 13.99 14.8857 13.435 14.8857 12.75V10.5C14.8857 8.90693 13.594 7.61523 12.001 7.61523C11.9109 7.61525 11.8218 7.61996 11.7344 7.62793L11.4746 7.66309C10.8011 7.78636 10.155 7.34056 10.0312 6.66699C9.90758 5.99332 10.3538 5.34658 11.0273 5.22266L11.2656 5.18457C11.5064 5.15149 11.7522 5.13478 12.001 5.13477ZM10.7041 7.42676C10.7215 7.43646 10.7399 7.44434 10.7578 7.45312C10.7074 7.42844 10.6584 7.40096 10.6123 7.36914L10.7041 7.42676Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.001 1.38477C13.228 1.38477 14.4018 1.62747 15.4736 2.06934L15.5889 2.12402C16.1058 2.40136 16.3579 3.00718 16.1904 3.56934L16.1475 3.68945C15.9025 4.28315 15.2499 4.58607 14.6475 4.40625L14.5283 4.36328C13.7511 4.04286 12.8981 3.86523 12.001 3.86523C9.13875 3.86539 6.69698 5.6792 5.76758 8.22266L5.68262 8.4707C5.4864 9.08211 4.86001 9.43604 4.24512 9.30566L4.12207 9.27344C3.46999 9.06403 3.11023 8.36509 3.31934 7.71289L3.43652 7.37207C4.71241 3.87981 8.064 1.38492 12.001 1.38477ZM3.94824 9.07227C3.98085 9.09062 4.01494 9.10684 4.0498 9.12207L3.94824 9.07227C3.91548 9.05386 3.88484 9.034 3.85449 9.0127L3.94824 9.07227ZM15.2275 4.31836C15.1921 4.32568 15.1563 4.33207 15.1201 4.33594L15.2275 4.31836C15.2629 4.31108 15.2977 4.30259 15.332 4.29199L15.2275 4.31836ZM9.82031 1.76562C9.70384 1.79461 9.58826 1.8259 9.47363 1.85938C9.70266 1.79249 9.93567 1.7353 10.1719 1.68652L9.82031 1.76562Z",
          fill: "currentColor"
        })]
      })
    },
    37395: (e, t, r) => {
      r.d(t, {
        T: () => o
      });
      var i = r(68157),
        l = r(31357);
      const o = () => {
        const e = (0, i.jL)();
        return {
          setColorMode: t => {
            e(l.s.actions.setUIColorMode(t))
          }
        }
      }
    },
    39629: (e, t, r) => {
      r.d(t, {
        G: () => i
      });
      const i = e => {
        if (!e) return !1;
        const t = e.message || "",
          r = e.code || "";
        return !(t.includes("cancel") || t.includes("abort") || "AbortError" === r || "NotAllowedError" === r || t.includes("timeout") || "TimeoutError" === r)
      }
    },
    64983: (e, t, r) => {
      r.d(t, {
        Y: () => k
      });
      var i = r(74848),
        l = r(73082),
        o = r(8457),
        n = r(39255),
        s = r(26264),
        c = r(23207),
        a = r(37395),
        d = r(65512),
        h = r(52619),
        u = r(55418),
        p = r(99550),
        f = r(68632),
        C = r(22146),
        m = r(79830),
        w = r(52114),
        g = r(1279),
        v = r(64145),
        y = r(29584),
        b = r(93726),
        L = r(11711),
        x = r(80179),
        M = r(93155),
        V = r(96540),
        E = (r.n(V), r(6442));
      const k = ({
        opened: e,
        onClose: t,
        onResetting: r
      }) => {
        const {
          setColorMode: k
        } = (0, a.T)(), {
          formatMessage: F
        } = (0, E.A)(), [N, S] = (0, V.useState)(!1), {
          trackAnalytics: _
        } = (0, c.s)(), A = (0, V.useCallback)(() => ((e, t, r) => new Promise((e, t) => {
          var i = e => {
              try {
                o(r.next(e))
              } catch (e) {
                t(e)
              }
            },
            l = e => {
              try {
                o(r.throw(e))
              } catch (e) {
                t(e)
              }
            },
            o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, l);
          o((r = r.apply(null, null)).next())
        }))(0, 0, function*() {
          try {
            S(!0), r(), yield v.YW.emit(L.A.RESET), k(b.X.SYSTEM), _({
              event: y.BQ.RESET_WALLET,
              props: {
                pageViewSource: y.Un.UNLOCK
              }
            }), (0, x.V3)(s.b.ONBOARDING), window.close()
          } catch (e) {
            M.A.error(e)
          }
        }), [k]);
        return N ? (0, i.jsxs)(u.o, {
          direction: p.R.COLUMN,
          children: [(0, i.jsx)("div", {
            children: (0, i.jsx)(o.A, {})
          }), (0, i.jsx)("div", {
            className: "pt-20 pb-8",
            children: (0, i.jsx)(w.E, {
              type: g.jK.SUBTITLE,
              children: F({
                id: "modal-reset-wallet.loading"
              })
            })
          }), (0, i.jsx)("div", {
            className: "pb-28",
            children: (0, i.jsx)(m.y, {
              size: f.Y.XLARGE
            })
          })]
        }) : (0, i.jsx)(C.a, {
          opened: e,
          onClose: t,
          title: F({
            id: "modal-reset-wallet.modal.title",
            defaultMessage: "Reset your wallet"
          }),
          children: (0, i.jsxs)(u.o, {
            direction: p.R.COLUMN,
            children: [(0, i.jsx)("div", {
              children: (0, i.jsx)(l.X, {})
            }), (0, i.jsx)("div", {
              className: "py-2",
              children: (0, i.jsxs)(w.E, {
                type: g.jK.HEADER,
                children: [" ", F({
                  id: "modal-reset-wallet.title"
                })]
              })
            }), (0, i.jsx)("div", {
              children: F({
                id: "modal-reset-wallet.description"
              }, {
                brandName: n.n5.BRAND_NAME,
                seedPhraseName: n.n5.SEED_PHRASE_NAME,
                li: e => (0, i.jsx)("div", {
                  className: "pb-2",
                  children: (0, i.jsx)(w.E, {
                    weight: g.nG.NORMAL,
                    theme: g.Il.SECONDARY,
                    children: e
                  })
                }),
                b: e => (0, i.jsx)("strong", {
                  className: "font-medium",
                  children: e
                })
              })
            }), (0, i.jsx)("div", {
              className: "pt-3 pb-5 w-full",
              children: (0, i.jsx)(d.$, {
                theme: h.ry.DANGER,
                onClick: A,
                children: F({
                  id: "modal-reset-wallet.btn-i-understand"
                })
              })
            }), (0, i.jsx)("div", {
              className: " w-full",
              children: (0, i.jsx)(d.$, {
                theme: h.ry.TRANSPARENT,
                onClick: t,
                children: (0, i.jsx)(w.E, {
                  type: g.jK.TITLE,
                  theme: g.Il.BRAND,
                  children: F({
                    id: "generic.cancel"
                  })
                })
              })
            })]
          })
        })
      }
    },
    68423: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => B
      });
      var i = r(74848),
        l = r(26264),
        o = r(65512),
        n = r(52619),
        s = r(23119),
        c = r(55418),
        a = r(4800),
        d = r(99550),
        h = r(52114),
        u = r(1279),
        p = r(11711),
        f = r(68157),
        C = r(61855),
        m = r(26113),
        w = r(96540),
        g = (r.n(w), r(6442)),
        v = r(47767),
        y = r(64983),
        b = r(63369),
        L = r(29584),
        x = r(23207),
        M = r(72960),
        V = r(32454),
        E = r(64145),
        k = r(80928),
        F = r(80179),
        N = r(2321),
        S = r(25516),
        _ = r(82384),
        A = r(93155),
        R = r(68869),
        P = r(39629),
        Z = r(58097),
        T = (e, t, r) => new Promise((i, l) => {
          var o = e => {
              try {
                s(r.next(e))
              } catch (e) {
                l(e)
              }
            },
            n = e => {
              try {
                s(r.throw(e))
              } catch (e) {
                l(e)
              }
            },
            s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, n);
          s((r = r.apply(e, t)).next())
        });
      const B = () => {
        var e;
        (0, b.K)({
          event: L.Un.UNLOCK,
          props: null
        });
        const {
          formatMessage: t
        } = (0, g.A)(), r = (0, v.Zp)(), B = (0, v.zy)(), {
          trackAnalytics: O
        } = (0, x.s)(), [U, j] = (0, w.useState)(""), [K, G] = (0, w.useState)(""), [I, W] = (0, w.useState)(!1), [Y, D] = (0, w.useState)(!1), [q, H] = (0, w.useState)(!1), z = (0, f.GV)(e => e.app), J = (0, f.GV)(e => e.settings.passkeyId), Q = (0, f.GV)(e => e.settings.isPasswordGenerated), [X, $] = (0, w.useState)(!1), ee = null != (e = new URLSearchParams(B.search).get("biometrics")) ? e : "", [te, re] = (0, w.useState)(!1), ie = (0, f.GV)(e => e.wallet.wallets), {
          authenticateWithBiometrics: le,
          isLoadingBiometrics: oe
        } = (0, S.u)(), ne = (0, w.useCallback)(() => T(null, null, function*() {
          var e;
          try {
            const t = yield le();
            if (t) {
              yield E.YW.emit(M.A.GET_PASSKEY_VAULT, t);
              const i = [];
              for (const [e, r] of Object.entries(ie)) try {
                const {
                  id: e
                } = r, l = yield E.YW.emit(Z.A.GET_SEED_PHRASE, {
                  password: "",
                  passkeyPassword: t,
                  walletId: e
                });
                i.push({
                  id: e,
                  errorMessage: l
                })
              } catch {}
              const o = (null == (e = B.state) ? void 0 : e.from) || {};
              O({
                event: L.BQ.UNLOCK,
                props: {
                  pageViewSource: L.Un.UNLOCK,
                  status: "success",
                  error: i
                }
              }), r(o.pathname + o.search || l.b.DEFAULT, {
                replace: !0
              })
            }
          } catch (e) {
            A.A.error("Biometrics authentication failed:", e), (0, P.G)(e) && (0, R.C)(Error("Biometrics authentication failed"), {
              originalError: e,
              errorMessage: e.message,
              errorCode: e.code,
              context: "biometrics_unlock"
            }), O({
              event: L.BQ.UNLOCK,
              props: {
                pageViewSource: L.Un.UNLOCK,
                status: "fail",
                error: e.message || "Biometrics authentication failed"
              }
            })
          }
        }), [le, B.state, r, O]);
        (0, _.y)({
          preventAutoTrigger: X,
          triggerBiometrics: ne
        }), (0, w.useEffect)(() => {
          z.authenticated && r(l.b.DEFAULT, {
            replace: !0
          })
        }, [z.authenticated, J, r]);
        const se = (0, w.useCallback)(e => T(null, null, function*() {
          var i;
          e?.preventDefault(), D(!0);
          try {
            f.M_.dispatch(C.A.actions.setAuthenticating(!0)), yield E.YW.emit(p.A.AUTHENTICATE, U);
            const e = (null == (i = B.state) ? void 0 : i.from) || {},
              t = [];
            for (const [e, r] of Object.entries(ie)) try {
              const {
                id: e
              } = r, i = yield E.YW.emit(Z.A.GET_SEED_PHRASE, {
                password: U,
                passkeyPassword: "",
                walletId: e
              });
              t.push({
                id: e,
                errorMessage: i
              })
            } catch {}
            O({
              event: L.BQ.UNLOCK,
              props: {
                pageViewSource: L.Un.UNLOCK,
                status: "success",
                error: t
              }
            }), r(e.pathname + e.search || l.b.DEFAULT, {
              replace: !0
            })
          } catch (e) {
            f.M_.dispatch(C.A.actions.setAuthenticating(!1)), O({
              event: L.BQ.UNLOCK,
              props: {
                pageViewSource: L.Un.UNLOCK,
                status: "fail",
                error: e.message
              }
            }), (0, N.S)(e) ? G(t({
              id: "unlock.memory-error"
            })) : G(e.message), D(!1)
          }
        }), [t, B.state, r, U, O]);
        return (0, w.useEffect)(() => {
          if (J && "true" === ee) {
            if (te) return;
            re(!0), ne()
          }
        }, [te, J, ee, ne]), (0, i.jsxs)(a.LN, {
          children: [!q && (0, i.jsxs)(a.Gv, {
            children: [(0, i.jsx)(c.o, {
              direction: d.R.COLUMN,
              children: (0, i.jsxs)("div", {
                className: "max-w-xs flex items-center flex-col",
                children: [(0, i.jsx)(k.p, {}), (0, i.jsx)("div", {
                  className: "pt-4 pb-6 text-center",
                  children: (0, i.jsxs)(h.E, {
                    type: u.jK.TITLE,
                    children: [" ", t({
                      id: "unlock.subheading"
                    })]
                  })
                }), (0, i.jsxs)("form", {
                  className: "flex flex-col w-full",
                  onSubmit: se,
                  children: [(!J || X) && (0, i.jsx)(s.c, {
                    testid: "password-field",
                    label: t({
                      id: "component.input-password.placeholder"
                    }),
                    value: U,
                    onChange: e => {
                      G(""), j(e.target.value)
                    },
                    error: K,
                    autoFocus: !0
                  }), (0, i.jsxs)("div", {
                    className: "pt-6 pb-4 w-full flex flex-col gap-4",
                    children: [(!J || X) && (0, i.jsx)(o.$, {
                      type: n.II.SUBMIT,
                      disabled: !U || oe,
                      loading: Y,
                      onClick: m.Z,
                      theme: J && !X ? n.ry.NEUTRAL : void 0,
                      children: t({
                        id: "generic.unlock"
                      })
                    }), J && (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(o.$, {
                        type: n.II.BUTTON,
                        loading: oe,
                        theme: X ? n.ry.TRANSPARENT : void 0,
                        disabled: Y || oe,
                        onClick: X ? () => $(!1) : ne,
                        children: (0, i.jsx)(h.E, {
                          theme: X ? u.Il.BRAND : u.Il.ON_PRIMARY,
                          type: u.jK.BODY,
                          children: (0, i.jsxs)("span", {
                            className: "flex gap-2 items-center",
                            children: [t({
                              id: "generic.unlock-biometrics",
                              defaultMessage: "Unlock with Biometrics"
                            }), (0, i.jsx)(V.E, {})]
                          })
                        })
                      }), !X && (0, i.jsx)(o.$, {
                        className: "-mt-4",
                        theme: n.ry.TRANSPARENT,
                        onClick: () => (0, F.V3)(l.b.UNLOCK + "?biometrics=true"),
                        children: (0, i.jsx)(h.E, {
                          theme: u.Il.UTILITY_1_DEFAULT,
                          type: u.jK.BODY,
                          children: t({
                            id: "unlock.biometrics-issues",
                            defaultMessage: "Having trouble with biometrics?"
                          })
                        })
                      }), !X && !Q && (0, i.jsx)(o.$, {
                        theme: n.ry.TRANSPARENT,
                        onClick: () => $(!0),
                        children: (0, i.jsx)(h.E, {
                          theme: u.Il.BRAND,
                          type: u.jK.BODY,
                          children: t({
                            id: "unlock.use-password-instead",
                            defaultMessage: "Use password instead"
                          })
                        })
                      })]
                    })]
                  })]
                })]
              })
            }), (0, i.jsxs)("div", {
              className: "flex flex-col items-center justify-end text-center w-full border-t-line border-t pt-4",
              children: [(0, i.jsx)("div", {
                className: "w-10/12",
                children: (0, i.jsx)(h.E, {
                  weight: u.nG.NORMAL,
                  theme: u.Il.SECONDARY,
                  children: t({
                    id: "unlock.cannot-login"
                  })
                })
              }), (0, i.jsx)(o.$, {
                theme: n.ry.TRANSPARENT,
                onClick: () => W(!0),
                children: (0, i.jsx)(h.E, {
                  theme: u.Il.BRAND,
                  type: u.jK.BODY,
                  children: t({
                    id: "unlock.reset-wallet"
                  })
                })
              })]
            })]
          }), (0, i.jsx)(y.Y, {
            opened: I,
            onClose: () => W(!1),
            onResetting: () => H(!0)
          })]
        })
      }
    },
    70438: (e, t, r) => {
      r.d(t, {
        A: () => o
      });
      var i = r(48287).Buffer,
        l = (e, t, r) => new Promise((i, l) => {
          var o = e => {
              try {
                s(r.next(e))
              } catch (e) {
                l(e)
              }
            },
            n = e => {
              try {
                s(r.throw(e))
              } catch (e) {
                l(e)
              }
            },
            s = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, n);
          s((r = r.apply(e, t)).next())
        });
      class o {
        constructor(e = navigator.credentials) {
          this.credentials = e
        }
        generateRandomData() {
          const e = new Uint8Array(32);
          return crypto.getRandomValues(e), e
        }
        verifyChallenge(e, t) {
          return i.from(e).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_") === JSON.parse((new TextDecoder).decode(t.response.clientDataJSON)).challenge
        }
        create() {
          return l(this, null, function*() {
            const e = this.generateRandomData(),
              t = yield this.credentials.create({
                publicKey: {
                  challenge: this.generateRandomData(),
                  rp: {
                    name: "Trust-Wallet-Extension",
                    id: window.location.hostname
                  },
                  user: {
                    id: e,
                    name: "Trust-Wallet-Extension",
                    displayName: "Trust-Wallet-Extension"
                  },
                  pubKeyCredParams: [{
                    type: "public-key",
                    alg: -7
                  }, {
                    type: "public-key",
                    alg: -257
                  }, {
                    type: "public-key",
                    alg: -8
                  }],
                  authenticatorSelection: {
                    requireResidentKey: !0,
                    userVerification: "preferred"
                  },
                  timeout: 6e4
                }
              });
            if (!t) throw Error("Failed to create credential");
            return {
              password: i.from(e).toString("hex"),
              credential: t,
              credentialId: i.from(t.rawId).toString("hex")
            }
          })
        }
        verify(e) {
          return l(this, arguments, function*({
            credential: e,
            password: t
          }) {
            const r = e.response && e.response.getTransports && e.response.getTransports(),
              l = this.generateRandomData(),
              o = yield this.credentials.get({
                publicKey: {
                  challenge: l,
                  allowCredentials: [{
                    id: e.rawId,
                    type: "public-key",
                    transports: r
                  }],
                  userVerification: "required"
                }
              }), n = o.response.userHandle;
            if (!n) throw Error("Missing userHandle");
            if (t !== i.from(n).toString("hex")) throw Error("Missing password");
            if (!this.verifyChallenge(l, o)) throw Error("Invalid challenge");
            return !0
          })
        }
        login(e) {
          return l(this, null, function*() {
            var t;
            o.abortController && o.abortController.abort();
            const r = new AbortController;
            o.abortController = r;
            const l = this.generateRandomData(),
              n = yield this.credentials.get({
                publicKey: {
                  challenge: l,
                  allowCredentials: [{
                    id: i.from(e, "hex"),
                    type: "public-key"
                  }],
                  userVerification: "required"
                },
                signal: o.abortController.signal
              });
            if (!n) throw Error("Auth error.");
            const s = null == (t = n?.response) ? void 0 : t.userHandle;
            if (!s) throw Error("Lost password.");
            if (!this.verifyChallenge(l, n)) throw Error("Invalid challenge.");
            return {
              password: i.from(s).toString("hex")
            }
          })
        }
      }
    },
    72960: (e, t, r) => {
      r.d(t, {
        A: () => l
      });
      var i = r(24439);
      const l = {
        VERIFY_PASSWORD: (0, i.If)("VERIFY_PASSWORD"),
        GENERATE_PASSKEY_VAULT: (0, i.If)("GENERATE_PASSKEY_VAULT"),
        GET_PASSKEY_VAULT: (0, i.If)("GET_PASSKEY_VAULT")
      }
    },
    80928: (e, t, r) => {
      r.d(t, {
        p: () => f
      });
      var i = r(74848);
      const l = ({
          width: e,
          height: t
        }) => (0, i.jsxs)("svg", {
          fill: "none",
          width: e ?? 58,
          height: t ?? 66,
          viewBox: "0 0 58 66",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, i.jsx)("path", {
            d: "M0 9.38949L28.8907 0V65.0042C8.2545 56.3369 0 39.7248 0 30.3353V9.38949Z",
            fill: "#48FF91"
          }), (0, i.jsx)("path", {
            d: "M57.7822 9.38949L28.8915 0V65.0042C49.5277 56.3369 57.7822 39.7248 57.7822 30.3353V9.38949Z",
            fill: "url(#paint0_linear_896_19677)"
          }), (0, i.jsx)("defs", {
            children: (0, i.jsxs)("linearGradient", {
              id: "paint0_linear_896_19677",
              x1: "28.8911",
              y1: "73.5101",
              x2: "52.5376",
              y2: "-12.0198",
              gradientUnits: "userSpaceOnUse",
              children: [(0, i.jsx)("stop", {
                offset: "0.264213",
                stopColor: "#48FF91"
              }), (0, i.jsx)("stop", {
                offset: "0.662556",
                stopColor: "#0094FF"
              }), (0, i.jsx)("stop", {
                offset: "0.800473",
                stopColor: "#0038FF"
              }), (0, i.jsx)("stop", {
                offset: "0.888911",
                stopColor: "#0500FF"
              })]
            })
          })]
        }),
        o = ({
          width: e,
          height: t
        }) => (0, i.jsxs)("svg", {
          fill: "none",
          width: e ?? 58,
          height: t ?? 66,
          viewBox: "0 0 58 66",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, i.jsx)("path", {
            d: "M0 9.38949L28.8907 0V65.0042C8.2545 56.3369 0 39.7248 0 30.3353V9.38949Z",
            fill: "#0500FF"
          }), (0, i.jsx)("path", {
            d: "M57.7822 9.38949L28.8915 0V65.0042C49.5277 56.3369 57.7822 39.7248 57.7822 30.3353V9.38949Z",
            fill: "url(#paint0_linear_896_19678)"
          }), (0, i.jsx)("defs", {
            children: (0, i.jsxs)("linearGradient", {
              id: "paint0_linear_896_19678",
              x1: "51.3615",
              y1: "-4.15293",
              x2: "29.5384",
              y2: "64.5147",
              gradientUnits: "userSpaceOnUse",
              children: [(0, i.jsx)("stop", {
                offset: "0.02112",
                stopColor: "#0000FF"
              }), (0, i.jsx)("stop", {
                offset: "0.0762423",
                stopColor: "#0094FF"
              }), (0, i.jsx)("stop", {
                offset: "0.163089",
                stopColor: "#48FF91"
              }), (0, i.jsx)("stop", {
                offset: "0.420049",
                stopColor: "#0094FF"
              }), (0, i.jsx)("stop", {
                offset: "0.682886",
                stopColor: "#0038FF"
              }), (0, i.jsx)("stop", {
                offset: "0.902465",
                stopColor: "#0500FF"
              })]
            })
          })]
        });
      var n = r(28898),
        s = r(15314),
        c = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        h = {}.propertyIsEnumerable,
        u = (e, t, r) => t in e ? c(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && u(e, r, t[r]);
          if (a)
            for (var r of a(t)) h.call(t, r) && u(e, r, t[r]);
          return e
        };
      const f = e => {
        const {
          theme: t
        } = (0, n.h)();
        return t === s.W.LIGHT ? (0, i.jsx)(o, p({}, e)) : (0, i.jsx)(l, p({}, e))
      }
    },
    82384: (e, t, r) => {
      r.d(t, {
        y: () => s
      });
      var i = r(68157),
        l = r(61855),
        o = r(35177),
        n = r(96540);
      r.n(n);
      const s = ({
        preventAutoTrigger: e,
        triggerBiometrics: t
      }) => {
        const r = (0, i.GV)(e => e.app),
          s = (0, o.R)();
        (0, n.useEffect)(() => {
          const o = document.hasFocus();
          r.preventAutoTriggerBiometrics || e || !o && !s ? i.M_.dispatch(l.A.actions.setPreventAutoTriggerBiometrics(!1)) : t()
        }, [])
      }
    }
  }
]);
