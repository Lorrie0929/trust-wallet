try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e.i = e.i || {}, e.i[i] = "c4d34093-4eae-47ce-a021-8dfb861d5dfb", e.t = "sentry-dbid-c4d34093-4eae-47ce-a021-8dfb861d5dfb")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [9973], {
    49973: (e, i, t) => {
      t.r(i), t.d(i, {
        default: () => q
      });
      var a = t(74848),
        r = t(96540),
        s = t(85434),
        l = t(8224),
        c = t(23207),
        n = t(63369),
        d = t(82444),
        o = t(29584),
        f = t(6442),
        u = t(65512),
        g = t(52619),
        m = t(33994),
        h = t(47767),
        y = t(26264),
        b = t(64145),
        p = t(72960),
        v = t(31357),
        w = t(52114),
        M = t(1279),
        x = t(93155),
        N = t(68157),
        T = t(32454),
        k = t(1645),
        B = t(26113),
        j = t(70438),
        C = t(74215);
      const R = () => {
        const e = (0, N.GV)(e => e.settings.passkeyId),
          i = (0, N.jL)(),
          {
            trackAnalytics: t
          } = (0, c.s)(),
          s = (0, C.v)(),
          {
            formatMessage: R
          } = (0, f.A)();
        (0, n.K)({
          event: o.Un.ONBOARDING_SET_BIOMETRICS,
          props: {
            setupType: s
          }
        });
        const S = (0, h.Zp)(),
          [V, A] = (0, r.useState)(null),
          {
            data: O
          } = (0, r.useContext)(l.x),
          [P, D] = (0, r.useState)(!1),
          [H, q] = (0, r.useState)(0);
        return (0, a.jsxs)(d.Q, {
          heading: R({
            id: "setup-biometrics.heading",
            defaultMessage: "Biometric authentication"
          }),
          subHeading: R({
            id: "setup-biometrics.subheading",
            defaultMessage: "A secure and simple way to unlock your wallet"
          }),
          animation: (0, a.jsx)(m.P, {
            width: 120,
            height: 120
          }),
          activeTab: 2,
          children: [P && (0, a.jsx)("div", {
            className: "flex justify-center",
            children: (0, a.jsxs)("div", {
              className: "flex flex-col gap-2 justify-center p-4 text-left",
              children: [(0, a.jsx)("div", {
                className: "items-start",
                children: (0, a.jsx)(k.S, {
                  onChange: () => {},
                  checked: H >= 1,
                  children: (0, a.jsx)(w.E, {
                    theme: 1 > H ? M.Il.UTILITY_1_OPACITY_2 : M.Il.PRIMARY_DEFAULT,
                    children: R({
                      id: "generic.biometrics-register",
                      defaultMessage: "Register Biometrics"
                    })
                  })
                })
              }), (0, a.jsx)("div", {
                className: "items-start",
                children: (0, a.jsx)(k.S, {
                  onChange: () => {},
                  checked: H >= 2,
                  children: (0, a.jsx)(w.E, {
                    theme: 2 > H ? M.Il.UTILITY_1_OPACITY_2 : M.Il.PRIMARY_DEFAULT,
                    children: R({
                      id: "generic.biometrics-verify",
                      defaultMessage: "Verify Biometrics"
                    })
                  })
                })
              })]
            })
          }), (0, a.jsx)("div", {
            className: "flex w-1/2 ml-auto mt-12",
            children: (0, a.jsx)(u.$, {
              loadingData: V ? (0, a.jsx)("div", {
                className: "text-on-primary",
                children: R(V)
              }) : null,
              type: g.II.BUTTON,
              theme: g.ry.PRIMARY,
              loading: P,
              onClick: () => ((e, i, t) => new Promise((e, i) => {
                var a = e => {
                    try {
                      s(t.next(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  r = e => {
                    try {
                      s(t.throw(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  s = i => i.done ? e(i.value) : Promise.resolve(i.value).then(a, r);
                s((t = t.apply(null, null)).next())
              }))(0, 0, function*() {
                e && S(y.b.DEFAULT), D(!0), A({
                  id: "generic.biometrics-register",
                  defaultMessage: "Register Biometrics"
                });
                const a = new j.A;
                try {
                  const e = yield a.create();
                  if (!e) return void D(!1);
                  q(1), A({
                    id: "generic.biometrics-verifying",
                    defaultMessage: "Verifying Biometrics"
                  }), (yield a.verify({
                    credential: e.credential,
                    password: e.password
                  })) && (q(2), yield b.YW.emit(p.A.GENERATE_PASSKEY_VAULT, {
                    password: e.password,
                    payload: O.password
                  }), t({
                    event: o.BQ.BIOMETRICS_SET,
                    props: {
                      pageViewSource: o.Un.ONBOARDING_WELCOME
                    }
                  }), q(3), A({
                    id: "generic.biometrics-redirecting",
                    defaultMessage: "Redirecting"
                  }), yield(0, B.yy)(2e3), i(v.s.actions.setPasskeyId(e.credentialId)), S(y.b.DEFAULT))
                } catch (e) {
                  A(null), x.A.error(e), D(!1)
                }
              }),
              children: (0, a.jsxs)("div", {
                className: "flex gap-2 text-on-primary items-center",
                children: [R({
                  id: "generic.set-up-biometrics",
                  defaultMessage: "Set up biometrics"
                }), (0, a.jsx)(T.E, {})]
              })
            })
          })]
        })
      };
      var S = t(41383),
        V = t(12996),
        A = Object.defineProperty,
        O = Object.getOwnPropertySymbols,
        P = {}.hasOwnProperty,
        D = {}.propertyIsEnumerable,
        H = (e, i, t) => i in e ? A(e, i, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[i] = t;
      const q = () => {
        const e = (0, V.F)(),
          [i, t] = (0, r.useState)(e ? s.jK.SET_BIOMETRICS : s.jK.AUTHENTICATION),
          l = ((e, i) => {
            for (var t in i || (i = {})) P.call(i, t) && H(e, t, i[t]);
            if (O)
              for (var t of O(i)) D.call(i, t) && H(e, t, i[t]);
            return e
          })({
            [s.jK.SET_BIOMETRICS]: R
          }, S.globalSteps)[i];
        return (0, a.jsx)(l, {
          setCurrentStep: t
        })
      }
    }
  }
]);
