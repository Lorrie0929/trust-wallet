"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [5901], {
    55901: (e, l, a) => {
      a.r(l), a.d(l, {
        default: () => w
      });
      var s = a(74848),
        r = a(23688),
        t = a(4800),
        c = a(6442),
        i = a(97286),
        d = a(64145),
        n = a(99360),
        o = a(52114),
        f = a(1279),
        h = a(2543),
        m = a(80179),
        p = a(23207),
        u = a(29584),
        x = a(63369);
      const v = ({
        dapps: e,
        categoryName: l
      }) => {
        const {
          trackAnalytics: a
        } = (0, p.s)(), {
          formatMessage: r
        } = (0, c.A)();
        return (0, x.K)({
          event: u.Un.DISCOVER,
          props: null
        }), 0 === e.length ? (0, s.jsx)("div", {
          className: "flex items-center justify-center py-8",
          children: (0, s.jsx)(o.E, {
            theme: f.Il.SECONDARY,
            type: f.jK.BODY_14,
            children: r({
              id: "discover.no-dapps-available",
              defaultMessage: "No dapps available in this category"
            })
          })
        }) : (0, s.jsx)("div", {
          className: "space-y-2 tw-scrollbar overflow-y-auto pb-4",
          children: e.map(e => (0, s.jsxs)("div", {
            className: "flex items-center space-x-3 p-3 rounded-lg hover:bg-utility-1-opacity-5 cursor-pointer transition-colors",
            onClick: () => (e => {
              a({
                event: u.BQ.DISCOVER_DAPP_CLICK,
                props: {
                  groupName: l,
                  dappUrl: e.url,
                  pageViewSource: u.Un.DISCOVER
                }
              }), (0, m.kK)(e.url)
            })(e),
            children: [(0, s.jsx)("div", {
              className: "flex-shrink-0",
              children: (0, s.jsx)("img", {
                src: e.image,
                alt: e.name,
                className: "w-12 h-12 rounded-lg object-cover"
              })
            }), (0, s.jsxs)("div", {
              className: "flex-1 min-w-0",
              children: [(0, s.jsx)(o.E, {
                theme: f.Il.UTILITY_1_DEFAULT,
                type: f.jK.SUBHEADER_16,
                weight: f.nG.MEDIUM,
                truncated: !0,
                children: e.name
              }), (0, s.jsx)(o.E, {
                theme: f.Il.UTILITY_1_OPACITY_1,
                type: f.jK.BODY_14,
                children: (0, h.truncate)(e.description, {
                  length: 82
                })
              })]
            })]
          }, e.l))
        })
      };
      var g = a(51848),
        y = a(79830),
        N = a(68632);
      const b = ({
          categories: e
        }) => [...e].sort((e, l) => e.category.order - l.category.order).map(e => (0, s.jsx)(g.oz, {
          "data-testid": "tab-" + e.category.l,
          className: "outline-none flex flex-col items-center justify-center h-full mb-0.5",
          children: ({
            selected: l
          }) => (0, s.jsxs)("div", {
            className: "flex flex-col w-fit h-full justify-between",
            children: [(0, s.jsx)("div", {
              className: "flex items-center h-full",
              children: (0, s.jsx)(o.E, {
                theme: l ? f.Il.UTILITY_1_DEFAULT : f.Il.UTILITY_1_OPACITY_2,
                type: f.jK.SUBHEADER_16,
                weight: f.nG.MEDIUM,
                noWrap: !0,
                children: e.category.name
              })
            }), (0, s.jsx)("div", {
              "data-selected": l,
              className: "w-full h-1 rounded-full data-[selected='true']:bg-primary"
            })]
          })
        }, e.category.l)),
        w = (0, r.K)(() => {
          const {
            formatMessage: e
          } = (0, c.A)(), {
            data: l,
            isLoading: a
          } = (0, i.I)({
            queryKey: ["dapp-discovery"],
            queryFn: () => d.YW.emit(n.A.FETCH_RECOMMENDED_DAPPS),
            staleTime: 3e5,
            gcTime: 6e5
          }), r = (l ?? []).sort((e, l) => e.category.order - l.category.order);
          return (0, s.jsxs)(t.LN, {
            children: [(0, s.jsx)(t.zY, {
              title: e({
                id: "discover.title",
                defaultMessage: "Discover"
              })
            }), (0, s.jsxs)("div", {
              className: "flex-1 flex flex-col",
              children: [!!r?.length && (0, s.jsxs)(g.fu, {
                as: s.Fragment,
                children: [(0, s.jsx)(g.wb, {
                  className: "flex space-x-4 mb-2 h-10 items-center overflow-x-auto tw-scrollbar flex-shrink-0",
                  children: (0, s.jsx)(b, {
                    categories: r
                  })
                }), (0, s.jsx)(g.T2, {
                  className: "flex-1 flex flex-col",
                  children: r.map(e => (0, s.jsx)(g.Kp, {
                    className: "flex-1 flex flex-col",
                    children: (0, s.jsx)(t.LO, {
                      children: (0, s.jsx)(v, {
                        dapps: e.results,
                        categoryName: e.category.name
                      })
                    })
                  }, e.category.l))
                })]
              }), !r?.length && (0, s.jsx)("div", {
                className: "flex-1 flex items-center justify-center",
                children: a ? (0, s.jsx)(y.y, {
                  size: N.Y.LARGE
                }) : (0, s.jsx)(o.E, {
                  theme: f.Il.SECONDARY,
                  type: f.jK.BODY_14,
                  children: e({
                    id: "generic.error",
                    defaultMessage: "An error occurred"
                  })
                })
              })]
            })]
          })
        })
    }
  }
]);
