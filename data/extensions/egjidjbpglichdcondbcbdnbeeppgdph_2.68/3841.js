"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3841], {
    63841: (t, e, s) => {
      s.r(e), s.d(e, {
        default: () => f
      });
      var r = s(74848),
        o = s(96540),
        a = (s.n(o), s(85434)),
        l = s(12996),
        n = s(8224),
        c = s(41383),
        d = s(37708);
      const f = () => {
        const t = (0, l.F)(),
          {
            flowCompleted: e
          } = (0, d.e)(),
          {
            data: {
              password: s
            }
          } = (0, o.useContext)(n.x),
          [f, u] = (0, o.useState)(t || e ? a.jK.COMPLETED : a.jK.AUTHENTICATION);
        (0, o.useEffect)(() => {
          t || s ? u(a.jK.COMPLETED) : f !== a.jK.COMPLETED && u(a.jK.AUTHENTICATION)
        }, [t]);
        const p = c.globalSteps[f];
        return (0, r.jsx)(p, {
          setCurrentStep: u
        })
      }
    }
  }
]);
