"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [9973], {
    49973: (e, i, t) => {
      t.r(i), t.d(i, {
        default: () => q
      });
      var r = t(74848),
        s = t(96540),
        a = t(85434),
        c = t(8224),
        n = t(23207),
        l = t(63369),
        d = t(82444),
        o = t(29584),
        u = t(6442),
        m = t(65512),
        g = t(52619),
        f = t(33994),
        h = t(47767),
        p = t(26264),
        y = t(64145),
        v = t(72960),
        b = t(31357),
        w = t(52114),
        M = t(1279),
        x = t(93155),
        N = t(68157),
        k = t(32454),
        B = t(1645),
        j = t(26113),
        C = t(70438),
        R = t(74215);
      const S = () => {
        const e = (0, N.GV)(e => e.settings.passkeyId),
          i = (0, N.jL)(),
          {
            trackAnalytics: t
          } = (0, n.s)(),
          a = (0, R.v)(),
          {
            formatMessage: S
          } = (0, u.A)();
        (0, l.K)({
          event: o.Un.ONBOARDING_SET_BIOMETRICS,
          props: {
            setupType: a
          }
        });
        const V = (0, h.Zp)(),
          [A, O] = (0, s.useState)(null),
          {
            data: P
          } = (0, s.useContext)(c.x),
          [T, D] = (0, s.useState)(!1),
          [H, q] = (0, s.useState)(0);
        return (0, r.jsxs)(d.Q, {
          heading: S({
            id: "setup-biometrics.heading",
            defaultMessage: "Biometric authentication"
          }),
          subHeading: S({
            id: "setup-biometrics.subheading",
            defaultMessage: "A secure and simple way to unlock your wallet"
          }),
          animation: (0, r.jsx)(f.P, {
            width: 120,
            height: 120
          }),
          activeTab: 2,
          children: [T && (0, r.jsx)("div", {
            className: "flex justify-center",
            children: (0, r.jsxs)("div", {
              className: "flex flex-col gap-2 justify-center p-4 text-left",
              children: [(0, r.jsx)("div", {
                className: "items-start",
                children: (0, r.jsx)(B.S, {
                  onChange: () => {},
                  checked: H >= 1,
                  children: (0, r.jsx)(w.E, {
                    theme: 1 > H ? M.Il.UTILITY_1_OPACITY_2 : M.Il.PRIMARY_DEFAULT,
                    children: S({
                      id: "generic.biometrics-register",
                      defaultMessage: "Register Biometrics"
                    })
                  })
                })
              }), (0, r.jsx)("div", {
                className: "items-start",
                children: (0, r.jsx)(B.S, {
                  onChange: () => {},
                  checked: H >= 2,
                  children: (0, r.jsx)(w.E, {
                    theme: 2 > H ? M.Il.UTILITY_1_OPACITY_2 : M.Il.PRIMARY_DEFAULT,
                    children: S({
                      id: "generic.biometrics-verify",
                      defaultMessage: "Verify Biometrics"
                    })
                  })
                })
              })]
            })
          }), (0, r.jsx)("div", {
            className: "flex w-1/2 ml-auto mt-12",
            children: (0, r.jsx)(m.$, {
              loadingData: A ? (0, r.jsx)("div", {
                className: "text-on-primary",
                children: S(A)
              }) : null,
              type: g.II.BUTTON,
              theme: g.ry.PRIMARY,
              loading: T,
              onClick: () => ((e, i, t) => new Promise((e, i) => {
                var r = e => {
                    try {
                      a(t.next(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  s = e => {
                    try {
                      a(t.throw(e))
                    } catch (e) {
                      i(e)
                    }
                  },
                  a = i => i.done ? e(i.value) : Promise.resolve(i.value).then(r, s);
                a((t = t.apply(null, null)).next())
              }))(0, 0, function*() {
                e && V(p.b.DEFAULT), D(!0), O({
                  id: "generic.biometrics-register",
                  defaultMessage: "Register Biometrics"
                });
                const r = new C.A;
                try {
                  const e = yield r.create();
                  if (!e) return void D(!1);
                  q(1), O({
                    id: "generic.biometrics-verifying",
                    defaultMessage: "Verifying Biometrics"
                  }), (yield r.verify({
                    credential: e.credential,
                    password: e.password
                  })) && (q(2), yield y.YW.emit(v.A.GENERATE_PASSKEY_VAULT, {
                    password: e.password,
                    payload: P.password
                  }), t({
                    event: o.BQ.BIOMETRICS_SET,
                    props: {
                      pageViewSource: o.Un.ONBOARDING_WELCOME
                    }
                  }), q(3), O({
                    id: "generic.biometrics-redirecting",
                    defaultMessage: "Redirecting"
                  }), yield(0, j.yy)(2e3), i(b.s.actions.setPasskeyId(e.credentialId)), V(p.b.DEFAULT))
                } catch (e) {
                  O(null), x.A.error(e), D(!1)
                }
              }),
              children: (0, r.jsxs)("div", {
                className: "flex gap-2 text-on-primary items-center",
                children: [S({
                  id: "generic.set-up-biometrics",
                  defaultMessage: "Set up biometrics"
                }), (0, r.jsx)(k.E, {})]
              })
            })
          })]
        })
      };
      var V = t(41383),
        A = t(12996),
        O = Object.defineProperty,
        P = Object.getOwnPropertySymbols,
        T = {}.hasOwnProperty,
        D = {}.propertyIsEnumerable,
        H = (e, i, t) => i in e ? O(e, i, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[i] = t;
      const q = () => {
        const e = (0, A.F)(),
          [i, t] = (0, s.useState)(e ? a.jK.SET_BIOMETRICS : a.jK.AUTHENTICATION),
          c = ((e, i) => {
            for (var t in i || (i = {})) T.call(i, t) && H(e, t, i[t]);
            if (P)
              for (var t of P(i)) D.call(i, t) && H(e, t, i[t]);
            return e
          })({
            [a.jK.SET_BIOMETRICS]: S
          }, V.globalSteps)[i];
        return (0, r.jsx)(c, {
          setCurrentStep: t
        })
      }
    }
  }
]);
