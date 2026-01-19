try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "4b862c07-54ce-4cd4-a80c-a250f8ad62bc", e.i = "sentry-dbid-4b862c07-54ce-4cd4-a80c-a250f8ad62bc")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8423], {
    2321: (e, t, i) => {
      i.d(t, {
        S: () => r
      });
      const r = e => e.message.includes("memory access out of bounds")
    },
    18109: (e, t, i) => {
      i.d(t, {
        s: () => c
      });
      var r = i(93155);
      const l = class {
        constructor(e) {
          this.wiped = !1;
          const t = new TextEncoder;
          this.buffer = t.encode(e)
        }
        getValue() {
          return this.wiped || !this.buffer ? "" : (new TextDecoder).decode(this.buffer)
        }
        getLength() {
          return this.wiped || !this.buffer ? 0 : this.buffer.length
        }
        hasValue() {
          return !this.wiped && null !== this.buffer && this.buffer.length > 0
        }
        wipe() {
          if (!this.wiped && this.buffer) try {
            if ("u" > typeof crypto && crypto.getRandomValues)
              for (let e = 0; e < this.buffer.length; e += 65536) {
                const t = Math.min(65536, this.buffer.length - e),
                  i = this.buffer.subarray(e, e + t);
                crypto.getRandomValues(i)
              }
            this.buffer.fill(0), this.buffer = null, this.wiped = !0
          } catch (e) {
            r.A.error("Failed to wipe SecureString:", e)
          }
        }
      };
      "u" > typeof Symbol && "u" > typeof Symbol.dispose && Object.defineProperty(l.prototype, Symbol.dispose, {
        value: function() {
          this.wipe()
        },
        writable: !0,
        configurable: !0
      });
      let o = l;
      class n {
        constructor(e = null) {
          this.secureValue = null, this.wiped = !1, null !== e && "" !== e && (this.secureValue = new o(e))
        }
        get current() {
          return this.getValue()
        }
        set current(e) {
          null !== this.secureValue && (this.secureValue.wipe(), this.secureValue = null), null !== e && "" !== e ? (this.secureValue = new o(e), this.wiped = !1) : this.wiped = !0
        }
        wipe() {
          if (!this.wiped && null !== this.secureValue) try {
            this.secureValue.wipe(), this.secureValue = null, this.wiped = !0
          } catch (e) {
            r.A.error("Failed to wipe SecureRef:", e)
          }
        }
        getValue() {
          return this.wiped || null === this.secureValue ? "" : this.secureValue.getValue()
        }
        hasValue() {
          return !this.wiped && null !== this.secureValue && this.secureValue.hasValue()
        }
      }
      var s = i(96540);

      function c(e = null) {
        const t = (0, s.useRef)(null);
        return t.current || (t.current = new n(e)), (0, s.useEffect)(() => () => {
          try {
            t.current && t.current.wipe()
          } catch (e) {
            r.A.error("Secure cleanup failed:", e)
          }
        }, []), t.current
      }
    },
    23119: (e, t, i) => {
      i.d(t, {
        c: () => g
      });
      var r = i(74848),
        l = i(81821),
        o = i(61801),
        n = i(16665),
        s = i(42201),
        c = i(96540),
        a = Object.defineProperty,
        d = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        p = {}.hasOwnProperty,
        f = {}.propertyIsEnumerable,
        C = (e, t, i) => t in e ? a(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: i
        }) : e[t] = i,
        m = (e, t) => {
          for (var i in t || (t = {})) p.call(t, i) && C(e, i, t[i]);
          if (u)
            for (var i of u(t)) f.call(t, i) && C(e, i, t[i]);
          return e
        },
        w = (e, t) => d(e, h(t));
      const g = e => {
        const [t, i] = (0, c.useState)(!1), [a, d] = (0, c.useState)(!e.value), h = a ? "" : e.error;
        return (0, c.useEffect)(() => {
          e.value && d(!1)
        }, [e.value]), (0, r.jsx)("div", {
          className: "flex flex-col space-y-2",
          children: (0, r.jsx)(n.S, w(m({
            testid: e.testid,
            type: t ? s.Ih.TEXT : s.Ih.PASSWORD
          }, e), {
            error: h,
            validation: e.validation,
            onEnter: e.onEnter,
            actions: [{
              key: "show-password",
              placeholder: t ? (0, r.jsx)(o.N, {
                width: 16,
                height: 16,
                colorClass: "text-primary-default"
              }) : (0, r.jsx)(l.Z, {
                width: 16,
                height: 16,
                colorClass: "text-primary-default"
              }),
              onClick: () => i(e => !e)
            }]
          }))
        })
      }
    },
    25516: (e, t, i) => {
      i.d(t, {
        u: () => a
      });
      var r = i(70438),
        l = i(64145),
        o = i(72960),
        n = i(93155),
        s = i(68157),
        c = i(96540);
      const a = () => {
        const [e, t] = (0, c.useState)(!1), i = (0, s.GV)(e => e.settings.passkeyId), a = (0, c.useCallback)(() => ((e, t, i) => new Promise((e, t) => {
          var r = e => {
              try {
                o(i.next(e))
              } catch (e) {
                t(e)
              }
            },
            l = e => {
              try {
                o(i.throw(e))
              } catch (e) {
                t(e)
              }
            },
            o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(r, l);
          o((i = i.apply(null, null)).next())
        }))(0, 0, function*() {
          if (!e && i) {
            t(!0);
            try {
              const e = new r.A,
                t = yield Promise.race([e.login(i), new Promise(e => setTimeout(() => {
                  r.A.abortController.abort(), e(void 0)
                }, 1e4))]);
              if (t?.password) return yield l.YW.emit(o.A.GET_PASSKEY_VAULT, t.password), t.password
            } catch (e) {
              n.A.error(e)
            } finally {
              t(!1)
            }
          }
        }), [e, i]);
        return {
          isLoadingBiometrics: e,
          authenticateWithBiometrics: a
        }
      }
    },
    32454: (e, t, i) => {
      i.d(t, {
        E: () => l
      });
      var r = i(74848);
      const l = ({
        width: e,
        height: t,
        colorClass: i
      }) => (0, r.jsxs)("svg", {
        className: i,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M17.5361 4.76367C18.0823 4.35034 18.86 4.45785 19.2734 5.00391L19.4854 5.29492C20.5134 6.77082 21.1162 8.5666 21.1162 10.5V13.5C21.1162 18.5343 17.0353 22.6152 12.001 22.6152C11.316 22.615 10.7607 22.06 10.7607 21.375C10.7607 20.69 11.316 20.135 12.001 20.1348C15.6651 20.1348 18.6357 17.1642 18.6357 13.5V10.5C18.6357 9.09056 18.1972 7.78661 17.4492 6.71289L17.2949 6.50098C16.8819 5.95479 16.9903 5.17705 17.5361 4.76367ZM20.1094 6.59082C20.2132 6.80575 20.3097 7.025 20.3965 7.24902L20.2598 6.91602C20.1644 6.69645 20.0602 6.48154 19.9482 6.27148L20.1094 6.59082ZM17.6055 4.85547C17.5636 4.88718 17.525 4.92163 17.4893 4.95801L17.6055 4.85547C17.6363 4.83216 17.6689 4.81069 17.7012 4.79102L17.6055 4.85547Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.12598 10.7598C4.81108 10.7598 5.36621 11.3149 5.36621 12V13.5C5.36621 16.0186 6.76993 18.2111 8.84277 19.3359L8.95117 19.4023C9.43588 19.7328 9.62259 20.3621 9.39648 20.9033L9.3418 21.0176C9.0355 21.582 8.35442 21.8135 7.77441 21.5713L7.65918 21.5166C4.81882 19.9754 2.88574 16.9643 2.88574 13.5V12C2.88574 11.315 3.44104 10.76 4.12598 10.7598ZM9.05762 19.6416L8.97559 19.5654C8.96812 19.5592 8.95982 19.5539 8.95215 19.5479C8.98942 19.5773 9.02501 19.6081 9.05762 19.6416ZM8.40039 19.2109C8.46915 19.2544 8.54091 19.293 8.61133 19.334C8.51131 19.2757 8.41256 19.2156 8.31543 19.1533L8.40039 19.2109Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.05371 8.43262C7.34045 7.87331 8.01028 7.61132 8.6084 7.84473L8.72461 7.89648C9.24682 8.16421 9.50986 8.76565 9.35254 9.33105L9.3125 9.45117C9.18623 9.77453 9.11621 10.1277 9.11621 10.5V13.5C9.11621 15.0929 10.4081 16.3846 12.001 16.3848C12.7074 16.3848 13.3519 16.1318 13.8535 15.7109L13.9551 15.6348C14.475 15.2814 15.1887 15.3724 15.6016 15.8643L15.6777 15.9648C16.0079 16.4503 15.9505 17.1047 15.541 17.5254L15.4482 17.6113C14.5164 18.3932 13.3121 18.8652 12.001 18.8652C9.03786 18.865 6.63574 16.4632 6.63574 13.5V10.5C6.63574 9.814 6.76518 9.15519 7.00195 8.54883L7.05371 8.43262ZM15.459 17.4443C15.4324 17.4717 15.4039 17.4984 15.374 17.5234L15.459 17.4443C15.4854 17.4171 15.51 17.3896 15.5332 17.3604L15.459 17.4443Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M12.001 9.63477C12.6861 9.63477 13.2412 10.1899 13.2412 10.875V13.125C13.2412 13.8101 12.6861 14.3652 12.001 14.3652C11.316 14.365 10.7607 13.81 10.7607 13.125V10.875C10.7607 10.19 11.316 9.63496 12.001 9.63477Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.001 5.13477C14.9643 5.13477 17.3662 7.53671 17.3662 10.5V12.75C17.3662 13.4351 16.8111 13.9902 16.126 13.9902C15.441 13.99 14.8857 13.435 14.8857 12.75V10.5C14.8857 8.90693 13.594 7.61523 12.001 7.61523C11.9109 7.61525 11.8218 7.61996 11.7344 7.62793L11.4746 7.66309C10.8011 7.78636 10.155 7.34056 10.0312 6.66699C9.90758 5.99332 10.3538 5.34658 11.0273 5.22266L11.2656 5.18457C11.5064 5.15149 11.7522 5.13478 12.001 5.13477ZM10.7041 7.42676C10.7215 7.43646 10.7399 7.44434 10.7578 7.45312C10.7074 7.42844 10.6584 7.40096 10.6123 7.36914L10.7041 7.42676Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.001 1.38477C13.228 1.38477 14.4018 1.62747 15.4736 2.06934L15.5889 2.12402C16.1058 2.40136 16.3579 3.00718 16.1904 3.56934L16.1475 3.68945C15.9025 4.28315 15.2499 4.58607 14.6475 4.40625L14.5283 4.36328C13.7511 4.04286 12.8981 3.86523 12.001 3.86523C9.13875 3.86539 6.69698 5.6792 5.76758 8.22266L5.68262 8.4707C5.4864 9.08211 4.86001 9.43604 4.24512 9.30566L4.12207 9.27344C3.46999 9.06403 3.11023 8.36509 3.31934 7.71289L3.43652 7.37207C4.71241 3.87981 8.064 1.38492 12.001 1.38477ZM3.94824 9.07227C3.98085 9.09062 4.01494 9.10684 4.0498 9.12207L3.94824 9.07227C3.91548 9.05386 3.88484 9.034 3.85449 9.0127L3.94824 9.07227ZM15.2275 4.31836C15.1921 4.32568 15.1563 4.33207 15.1201 4.33594L15.2275 4.31836C15.2629 4.31108 15.2977 4.30259 15.332 4.29199L15.2275 4.31836ZM9.82031 1.76562C9.70384 1.79461 9.58826 1.8259 9.47363 1.85938C9.70266 1.79249 9.93567 1.7353 10.1719 1.68652L9.82031 1.76562Z",
          fill: "currentColor"
        })]
      })
    },
    37395: (e, t, i) => {
      i.d(t, {
        T: () => o
      });
      var r = i(68157),
        l = i(31357);
      const o = () => {
        const e = (0, r.jL)();
        return {
          setColorMode: t => {
            e(l.s.actions.setUIColorMode(t))
          }
        }
      }
    },
    39629: (e, t, i) => {
      i.d(t, {
        G: () => r
      });
      const r = e => {
        if (!e) return !1;
        const t = e.message || "",
          i = e.code || "";
        return !(t.includes("cancel") || t.includes("abort") || "AbortError" === i || "NotAllowedError" === i || t.includes("timeout") || "TimeoutError" === i)
      }
    },
    64983: (e, t, i) => {
      i.d(t, {
        Y: () => S
      });
      var r = i(74848),
        l = i(73082),
        o = i(8457),
        n = i(39255),
        s = i(26264),
        c = i(23207),
        a = i(37395),
        d = i(65512),
        h = i(52619),
        u = i(55418),
        p = i(99550),
        f = i(68632),
        C = i(22146),
        m = i(79830),
        w = i(52114),
        g = i(1279),
        y = i(64145),
        v = i(29584),
        b = i(93726),
        L = i(11711),
        x = i(80179),
        V = i(93155),
        E = i(96540),
        M = i(6442);
      const S = ({
        opened: e,
        onClose: t,
        onResetting: i
      }) => {
        const {
          setColorMode: S
        } = (0, a.T)(), {
          formatMessage: F
        } = (0, M.A)(), [k, N] = (0, E.useState)(!1), {
          trackAnalytics: _
        } = (0, c.s)(), A = (0, E.useCallback)(() => ((e, t, i) => new Promise((e, t) => {
          var r = e => {
              try {
                o(i.next(e))
              } catch (e) {
                t(e)
              }
            },
            l = e => {
              try {
                o(i.throw(e))
              } catch (e) {
                t(e)
              }
            },
            o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(r, l);
          o((i = i.apply(null, null)).next())
        }))(0, 0, function*() {
          try {
            N(!0), i(), yield y.YW.emit(L.A.RESET), S(b.X.SYSTEM), _({
              event: v.BQ.RESET_WALLET,
              props: {
                pageViewSource: v.Un.UNLOCK
              }
            }), (0, x.V3)(s.b.ONBOARDING), window.close()
          } catch (e) {
            V.A.error(e)
          }
        }), [S]);
        return k ? (0, r.jsxs)(u.o, {
          direction: p.R.COLUMN,
          children: [(0, r.jsx)("div", {
            children: (0, r.jsx)(o.A, {})
          }), (0, r.jsx)("div", {
            className: "pt-20 pb-8",
            children: (0, r.jsx)(w.E, {
              type: g.jK.SUBTITLE,
              children: F({
                id: "modal-reset-wallet.loading"
              })
            })
          }), (0, r.jsx)("div", {
            className: "pb-28",
            children: (0, r.jsx)(m.y, {
              size: f.Y.XLARGE
            })
          })]
        }) : (0, r.jsx)(C.a, {
          opened: e,
          onClose: t,
          title: F({
            id: "modal-reset-wallet.modal.title",
            defaultMessage: "Reset your wallet"
          }),
          children: (0, r.jsxs)(u.o, {
            direction: p.R.COLUMN,
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(l.X, {})
            }), (0, r.jsx)("div", {
              className: "py-2",
              children: (0, r.jsxs)(w.E, {
                type: g.jK.HEADER,
                children: [" ", F({
                  id: "modal-reset-wallet.title"
                })]
              })
            }), (0, r.jsx)("div", {
              children: F({
                id: "modal-reset-wallet.description"
              }, {
                brandName: n.n5.BRAND_NAME,
                seedPhraseName: n.n5.SEED_PHRASE_NAME,
                li: e => (0, r.jsx)("div", {
                  className: "pb-2",
                  children: (0, r.jsx)(w.E, {
                    weight: g.nG.NORMAL,
                    theme: g.Il.SECONDARY,
                    children: e
                  })
                }),
                b: e => (0, r.jsx)("strong", {
                  className: "font-medium",
                  children: e
                })
              })
            }), (0, r.jsx)("div", {
              className: "pt-3 pb-5 w-full",
              children: (0, r.jsx)(d.$, {
                theme: h.ry.DANGER,
                onClick: A,
                children: F({
                  id: "modal-reset-wallet.btn-i-understand"
                })
              })
            }), (0, r.jsx)("div", {
              className: " w-full",
              children: (0, r.jsx)(d.$, {
                theme: h.ry.TRANSPARENT,
                onClick: t,
                children: (0, r.jsx)(w.E, {
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
    68423: (e, t, i) => {
      i.r(t), i.d(t, {
        default: () => B
      });
      var r = i(74848),
        l = i(26264),
        o = i(65512),
        n = i(52619),
        s = i(23119),
        c = i(55418),
        a = i(4800),
        d = i(99550),
        h = i(52114),
        u = i(1279),
        p = i(11711),
        f = i(68157),
        C = i(61855),
        m = i(26113),
        w = i(96540),
        g = i(6442),
        y = i(47767),
        v = i(18109),
        b = i(64983),
        L = i(63369),
        x = i(29584),
        V = i(23207),
        E = i(72960),
        M = i(32454),
        S = i(64145),
        F = i(80928),
        k = i(80179),
        N = i(2321),
        _ = i(25516),
        A = i(82384),
        R = i(93155),
        T = i(68869),
        P = i(39629),
        Z = (e, t, i) => new Promise((r, l) => {
          var o = e => {
              try {
                s(i.next(e))
              } catch (e) {
                l(e)
              }
            },
            n = e => {
              try {
                s(i.throw(e))
              } catch (e) {
                l(e)
              }
            },
            s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, n);
          s((i = i.apply(e, t)).next())
        });
      const B = () => {
        var e;
        (0, L.K)({
          event: x.Un.UNLOCK,
          props: null
        });
        const {
          formatMessage: t
        } = (0, g.A)(), i = (0, y.Zp)(), B = (0, y.zy)(), {
          trackAnalytics: O
        } = (0, V.s)(), U = (0, v.s)(""), [K, j] = (0, w.useState)(0), [G, W] = (0, w.useState)(""), [Y, D] = (0, w.useState)(!1), [I, q] = (0, w.useState)(!1), [H, z] = (0, w.useState)(!1), J = (0, f.GV)(e => e.app), Q = (0, f.GV)(e => e.settings.passkeyId), X = (0, f.GV)(e => e.settings.isPasswordGenerated), [$, ee] = (0, w.useState)(!1), te = null != (e = new URLSearchParams(B.search).get("biometrics")) ? e : "", [ie, re] = (0, w.useState)(!1), {
          authenticateWithBiometrics: le,
          isLoadingBiometrics: oe
        } = (0, _.u)(), ne = (0, w.useCallback)(() => Z(null, null, function*() {
          var e;
          try {
            const t = yield le();
            if (t) {
              yield S.YW.emit(E.A.GET_PASSKEY_VAULT, t);
              const r = (null == (e = B.state) ? void 0 : e.from) || {};
              O({
                event: x.BQ.UNLOCK,
                props: {
                  pageViewSource: x.Un.UNLOCK,
                  status: "success"
                }
              }), i(r.pathname + r.search || l.b.DEFAULT, {
                replace: !0
              })
            }
          } catch (e) {
            R.A.error("Biometrics authentication failed:", e), (0, P.G)(e) && (0, T.C)(Error("Biometrics authentication failed"), {
              originalError: e,
              errorMessage: e.message,
              errorCode: e.code,
              context: "biometrics_unlock"
            }), O({
              event: x.BQ.UNLOCK,
              props: {
                pageViewSource: x.Un.UNLOCK,
                status: "fail",
                error: e.message || "Biometrics authentication failed"
              }
            })
          }
        }), [le, B.state, i, O]);
        (0, A.y)({
          preventAutoTrigger: $,
          triggerBiometrics: ne
        }), (0, w.useEffect)(() => {
          J.authenticated && i(l.b.DEFAULT, {
            replace: !0
          })
        }, [J.authenticated, Q, i]);
        const se = (0, w.useCallback)(e => Z(null, null, function*() {
          var r;
          e?.preventDefault(), q(!0);
          try {
            f.M_.dispatch(C.A.actions.setAuthenticating(!0)), yield S.YW.emit(p.A.AUTHENTICATE, U.getValue());
            const e = (null == (r = B.state) ? void 0 : r.from) || {};
            O({
              event: x.BQ.UNLOCK,
              props: {
                pageViewSource: x.Un.UNLOCK,
                status: "success"
              }
            }), U.wipe(), i(e.pathname + e.search || l.b.DEFAULT, {
              replace: !0
            })
          } catch (e) {
            f.M_.dispatch(C.A.actions.setAuthenticating(!1)), O({
              event: x.BQ.UNLOCK,
              props: {
                pageViewSource: x.Un.UNLOCK,
                status: "fail",
                error: e.message
              }
            }), (0, N.S)(e) ? W(t({
              id: "unlock.memory-error"
            })) : W(e.message), q(!1)
          }
        }), [t, B.state, i, O, U]);
        return (0, w.useEffect)(() => {
          if (Q && "true" === te) {
            if (ie) return;
            re(!0), ne()
          }
        }, [ie, Q, te, ne]), (0, r.jsxs)(a.LN, {
          children: [!H && (0, r.jsxs)(a.Gv, {
            children: [(0, r.jsx)(c.o, {
              direction: d.R.COLUMN,
              children: (0, r.jsxs)("div", {
                className: "max-w-xs flex items-center flex-col",
                children: [(0, r.jsx)(F.p, {}), (0, r.jsx)("div", {
                  className: "pt-4 pb-6 text-center",
                  children: (0, r.jsxs)(h.E, {
                    type: u.jK.TITLE,
                    children: [" ", t({
                      id: "unlock.subheading"
                    })]
                  })
                }), (0, r.jsxs)("form", {
                  className: "flex flex-col w-full",
                  onSubmit: se,
                  children: [(!Q || $) && (0, r.jsx)(s.c, {
                    testid: "password-field",
                    label: t({
                      id: "component.input-password.placeholder"
                    }),
                    onChange: e => {
                      W("");
                      const t = e.target.value;
                      U.current = t, j(t.length)
                    },
                    value: U.getValue(),
                    error: G,
                    autoFocus: !0
                  }), (0, r.jsxs)("div", {
                    className: "pt-6 pb-4 w-full flex flex-col gap-4",
                    children: [(!Q || $) && (0, r.jsx)(o.$, {
                      type: n.II.SUBMIT,
                      disabled: 0 === K || oe,
                      loading: I,
                      onClick: m.Z,
                      theme: Q && !$ ? n.ry.NEUTRAL : void 0,
                      children: t({
                        id: "generic.unlock"
                      })
                    }), Q && (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(o.$, {
                        type: n.II.BUTTON,
                        loading: oe,
                        theme: $ ? n.ry.TRANSPARENT : void 0,
                        disabled: I || oe,
                        onClick: $ ? () => ee(!1) : ne,
                        children: (0, r.jsx)(h.E, {
                          theme: $ ? u.Il.BRAND : u.Il.ON_PRIMARY,
                          type: u.jK.BODY,
                          children: (0, r.jsxs)("span", {
                            className: "flex gap-2 items-center",
                            children: [t({
                              id: "generic.unlock-biometrics",
                              defaultMessage: "Unlock with Biometrics"
                            }), (0, r.jsx)(M.E, {})]
                          })
                        })
                      }), !$ && (0, r.jsx)(o.$, {
                        className: "-mt-4",
                        theme: n.ry.TRANSPARENT,
                        onClick: () => (0, k.V3)(l.b.UNLOCK + "?biometrics=true"),
                        children: (0, r.jsx)(h.E, {
                          theme: u.Il.UTILITY_1_DEFAULT,
                          type: u.jK.BODY,
                          children: t({
                            id: "unlock.biometrics-issues",
                            defaultMessage: "Having trouble with biometrics?"
                          })
                        })
                      }), !$ && !X && (0, r.jsx)(o.$, {
                        theme: n.ry.TRANSPARENT,
                        onClick: () => ee(!0),
                        children: (0, r.jsx)(h.E, {
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
            }), (0, r.jsxs)("div", {
              className: "flex flex-col items-center justify-end text-center w-full border-t-line border-t pt-4",
              children: [(0, r.jsx)("div", {
                className: "w-10/12",
                children: (0, r.jsx)(h.E, {
                  weight: u.nG.NORMAL,
                  theme: u.Il.SECONDARY,
                  children: t({
                    id: "unlock.cannot-login"
                  })
                })
              }), (0, r.jsx)(o.$, {
                theme: n.ry.TRANSPARENT,
                onClick: () => D(!0),
                children: (0, r.jsx)(h.E, {
                  theme: u.Il.BRAND,
                  type: u.jK.BODY,
                  children: t({
                    id: "unlock.reset-wallet"
                  })
                })
              })]
            })]
          }), (0, r.jsx)(b.Y, {
            opened: Y,
            onClose: () => D(!1),
            onResetting: () => z(!0)
          })]
        })
      }
    },
    70438: (e, t, i) => {
      i.d(t, {
        A: () => o
      });
      var r = i(48287).Buffer,
        l = (e, t, i) => new Promise((r, l) => {
          var o = e => {
              try {
                s(i.next(e))
              } catch (e) {
                l(e)
              }
            },
            n = e => {
              try {
                s(i.throw(e))
              } catch (e) {
                l(e)
              }
            },
            s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, n);
          s((i = i.apply(e, t)).next())
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
          return r.from(e).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_") === JSON.parse((new TextDecoder).decode(t.response.clientDataJSON)).challenge
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
              password: r.from(e).toString("hex"),
              credential: t,
              credentialId: r.from(t.rawId).toString("hex")
            }
          })
        }
        verify(e) {
          return l(this, arguments, function*({
            credential: e,
            password: t
          }) {
            const i = e.response && e.response.getTransports && e.response.getTransports(),
              l = this.generateRandomData(),
              o = yield this.credentials.get({
                publicKey: {
                  challenge: l,
                  allowCredentials: [{
                    id: e.rawId,
                    type: "public-key",
                    transports: i
                  }],
                  userVerification: "required"
                }
              }), n = o.response.userHandle;
            if (!n) throw Error("Missing userHandle");
            if (t !== r.from(n).toString("hex")) throw Error("Missing password");
            if (!this.verifyChallenge(l, o)) throw Error("Invalid challenge");
            return !0
          })
        }
        login(e) {
          return l(this, null, function*() {
            var t;
            o.abortController && o.abortController.abort();
            const i = new AbortController;
            o.abortController = i;
            const l = this.generateRandomData(),
              n = yield this.credentials.get({
                publicKey: {
                  challenge: l,
                  allowCredentials: [{
                    id: r.from(e, "hex"),
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
              password: r.from(s).toString("hex")
            }
          })
        }
      }
    },
    72960: (e, t, i) => {
      i.d(t, {
        A: () => l
      });
      var r = i(24439);
      const l = {
        VERIFY_PASSWORD: (0, r.If)("VERIFY_PASSWORD"),
        GENERATE_PASSKEY_VAULT: (0, r.If)("GENERATE_PASSKEY_VAULT"),
        GET_PASSKEY_VAULT: (0, r.If)("GET_PASSKEY_VAULT")
      }
    },
    80928: (e, t, i) => {
      i.d(t, {
        p: () => f
      });
      var r = i(74848);
      const l = ({
          width: e,
          height: t
        }) => (0, r.jsxs)("svg", {
          fill: "none",
          width: e ?? 58,
          height: t ?? 66,
          viewBox: "0 0 58 66",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, r.jsx)("path", {
            d: "M0 9.38949L28.8907 0V65.0042C8.2545 56.3369 0 39.7248 0 30.3353V9.38949Z",
            fill: "#48FF91"
          }), (0, r.jsx)("path", {
            d: "M57.7822 9.38949L28.8915 0V65.0042C49.5277 56.3369 57.7822 39.7248 57.7822 30.3353V9.38949Z",
            fill: "url(#paint0_linear_896_19677)"
          }), (0, r.jsx)("defs", {
            children: (0, r.jsxs)("linearGradient", {
              id: "paint0_linear_896_19677",
              x1: "28.8911",
              y1: "73.5101",
              x2: "52.5376",
              y2: "-12.0198",
              gradientUnits: "userSpaceOnUse",
              children: [(0, r.jsx)("stop", {
                offset: "0.264213",
                stopColor: "#48FF91"
              }), (0, r.jsx)("stop", {
                offset: "0.662556",
                stopColor: "#0094FF"
              }), (0, r.jsx)("stop", {
                offset: "0.800473",
                stopColor: "#0038FF"
              }), (0, r.jsx)("stop", {
                offset: "0.888911",
                stopColor: "#0500FF"
              })]
            })
          })]
        }),
        o = ({
          width: e,
          height: t
        }) => (0, r.jsxs)("svg", {
          fill: "none",
          width: e ?? 58,
          height: t ?? 66,
          viewBox: "0 0 58 66",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, r.jsx)("path", {
            d: "M0 9.38949L28.8907 0V65.0042C8.2545 56.3369 0 39.7248 0 30.3353V9.38949Z",
            fill: "#0500FF"
          }), (0, r.jsx)("path", {
            d: "M57.7822 9.38949L28.8915 0V65.0042C49.5277 56.3369 57.7822 39.7248 57.7822 30.3353V9.38949Z",
            fill: "url(#paint0_linear_896_19678)"
          }), (0, r.jsx)("defs", {
            children: (0, r.jsxs)("linearGradient", {
              id: "paint0_linear_896_19678",
              x1: "51.3615",
              y1: "-4.15293",
              x2: "29.5384",
              y2: "64.5147",
              gradientUnits: "userSpaceOnUse",
              children: [(0, r.jsx)("stop", {
                offset: "0.02112",
                stopColor: "#0000FF"
              }), (0, r.jsx)("stop", {
                offset: "0.0762423",
                stopColor: "#0094FF"
              }), (0, r.jsx)("stop", {
                offset: "0.163089",
                stopColor: "#48FF91"
              }), (0, r.jsx)("stop", {
                offset: "0.420049",
                stopColor: "#0094FF"
              }), (0, r.jsx)("stop", {
                offset: "0.682886",
                stopColor: "#0038FF"
              }), (0, r.jsx)("stop", {
                offset: "0.902465",
                stopColor: "#0500FF"
              })]
            })
          })]
        });
      var n = i(28898),
        s = i(15314),
        c = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        h = {}.propertyIsEnumerable,
        u = (e, t, i) => t in e ? c(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: i
        }) : e[t] = i,
        p = (e, t) => {
          for (var i in t || (t = {})) d.call(t, i) && u(e, i, t[i]);
          if (a)
            for (var i of a(t)) h.call(t, i) && u(e, i, t[i]);
          return e
        };
      const f = e => {
        const {
          theme: t
        } = (0, n.h)();
        return t === s.W.LIGHT ? (0, r.jsx)(o, p({}, e)) : (0, r.jsx)(l, p({}, e))
      }
    },
    82384: (e, t, i) => {
      i.d(t, {
        y: () => s
      });
      var r = i(68157),
        l = i(61855),
        o = i(35177),
        n = i(96540);
      const s = ({
        preventAutoTrigger: e,
        triggerBiometrics: t
      }) => {
        const i = (0, r.GV)(e => e.app),
          s = (0, o.R)();
        (0, n.useEffect)(() => {
          const o = document.hasFocus();
          i.preventAutoTriggerBiometrics || e || !o && !s ? r.M_.dispatch(l.A.actions.setPreventAutoTriggerBiometrics(!1)) : t()
        }, [])
      }
    }
  }
]);
