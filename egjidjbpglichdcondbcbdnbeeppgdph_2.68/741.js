"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [741], {
    5750: (e, l, t) => {
      t.d(l, {
        Ff: () => b,
        GM: () => C,
        tU: () => x
      });
      var a, r = t(74848),
        n = t(77832),
        i = t(94893),
        c = t(9770),
        s = t(10551),
        o = t(65504),
        d = t(46376),
        h = t(8360),
        m = t(68632),
        u = t(74408),
        p = t(7668),
        g = t(52114),
        y = t(1279),
        v = t(75485),
        f = t(44832),
        w = t(96540),
        N = (t.n(w), t(6442)),
        x = ((a = x || {}).FULL = "full", a.ROUNDED = "rounded", a),
        C = (e => (e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e))(C || {});
      const b = ({
        selectedNetworks: e,
        onSelect: l,
        allowedPrefixedCoinIds: t,
        hideAllNetworksOption: a,
        label: x,
        spacing: C = "medium",
        radius: b = "full",
        fullWidth: k
      }) => {
        const {
          formatMessage: T
        } = (0, N.A)(), [S, P] = (0, w.useState)(""), _ = (0, f.g)(!0), F = (0, w.useMemo)(() => _.find(l => {
          var t;
          return l.id === (null == (t = e?.[0]) ? void 0 : t.blockchainId)
        }), [_, e]), M = (0, w.useMemo)(() => t ? _.filter(e => t.includes((0, v.er)(e.coinId))).filter(e => {
          var l;
          return (null != (l = e.displayName) ? l : e.name).toLowerCase().includes(S.toLowerCase()) || e.id === F?.id
        }) : _.filter(e => {
          var l;
          return (null != (l = e.displayName) ? l : e.name).toLowerCase().includes(S.toLowerCase()) || e.id === F?.id
        }), [_, t, S, F]), L = e => ((e, l, t) => new Promise((e, l) => {
          var a = e => {
              try {
                n(t.next(e))
              } catch (e) {
                l(e)
              }
            },
            r = e => {
              try {
                n(t.throw(e))
              } catch (e) {
                l(e)
              }
            },
            n = l => l.done ? e(l.value) : Promise.resolve(l.value).then(a, r);
          n((t = t.apply(null, null)).next())
        }))(0, 0, function*() {
          l(null !== e ? [{
            prefixedCoinId: (0, v.er)(e.coinId),
            blockchainId: e.id
          }] : null)
        }), j = (0, w.useMemo)(() => !(a || "" !== S && F), [S, a, F]), H = {
          small: "px-2 py-1",
          medium: "p-2",
          large: "py-4 px-6"
        }, O = {
          full: "rounded-full",
          rounded: "rounded-4"
        };
        return (0, r.jsx)(u.AM, {
          className: k ? "w-full" : "",
          children: ({
            open: e
          }) => {
            var l;
            return (0, r.jsxs)(r.Fragment, {
              children: [x && (0, r.jsx)("div", {
                className: "mb-3 text-left",
                children: (0, r.jsx)(d.l, {
                  children: x
                })
              }), (0, r.jsx)(u.ut, {
                className: `outline-none bg-background-2 ${H[C]} ${O[b]} ${k?"w-full":""}`,
                children: (0, r.jsxs)("div", {
                  className: "flex items-center",
                  children: [(0, r.jsx)("div", {
                    className: "pr-2",
                    children: F ? (0, r.jsx)(o.q, {
                      name: F.name,
                      size: m.Y.XSMALL,
                      src: F.iconUrl
                    }) : (0, r.jsx)(c.s, {
                      width: 20,
                      height: 20
                    })
                  }), (0, r.jsx)("div", {
                    className: "whitespace-nowrap",
                    children: F ? (0, r.jsx)(g.E, {
                      type: y.jK.SUBHEADER_14,
                      children: null != (l = F.displayName) ? l : F.name
                    }) : (0, r.jsx)(g.E, {
                      type: y.jK.SUBHEADER_14,
                      children: T({
                        id: a ? "component.blockchain-select.select-network" : "component.blockchain-select.all-networks",
                        defaultMessage: a ? "Network" : "All Networks"
                      })
                    })
                  }), (0, r.jsx)("div", {
                    className: "pl-1 ml-auto",
                    children: (0, r.jsx)(s.b, {
                      width: 18,
                      height: 18,
                      colorClass: "text-utility-1-opacity-1 transition-transform " + (e ? "rotate-180" : "rotate-0")
                    })
                  })]
                })
              }), (0, r.jsx)(n.e, {
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                afterLeave: () => P(""),
                children: (0, r.jsx)(u.QT, {
                  className: "absolute min-w-full mt-2 left-0 z-10 shadow-lg rounded-4 bg-background-2 cursor-default",
                  onClick: e => e.stopPropagation(),
                  children: ({
                    close: e
                  }) => (0, r.jsxs)("div", {
                    className: "mr-1 my-2 pl-2 pr-1 tw-scrollbar p-0 max-h-[250px]",
                    children: [(0, r.jsx)("div", {
                      className: "px-3 mb-2 pt-1",
                      children: (0, r.jsx)(h.D, {
                        testid: "networks-filter-dropdown-search-input",
                        value: S,
                        onChange: e => {
                          P(e.target.value), e.stopPropagation()
                        },
                        placeholder: T({
                          id: "component.input-networks-search.placeholder",
                          defaultMessage: "Network Name"
                        })
                      })
                    }), (0, r.jsxs)("div", {
                      className: "flex flex-col",
                      children: [j && (0, r.jsx)(i.c, {
                        onClick: () => {
                          L(null), e()
                        },
                        children: (0, r.jsxs)("div", {
                          className: "flex items-center mb-2 py-1.5 px-4 rounded-3 hover:bg-utility-1-opacity-5",
                          children: [(0, r.jsx)(c.s, {
                            width: 20,
                            height: 20
                          }), (0, r.jsx)("div", {
                            className: "pl-2 flex-grow min-w-0 whitespace-nowrap",
                            children: (0, r.jsx)(g.E, {
                              type: y.jK.SUBHEADER_14,
                              weight: y.nG.MEDIUM,
                              children: T({
                                id: "component.blockchain-select.all-networks"
                              })
                            })
                          }), (0, r.jsx)("div", {
                            children: F ? (0, r.jsx)(p.z6, {
                              className: "space-y-4",
                              children: (0, r.jsx)(p.sx, {
                                value: 0,
                                className: "radio-group__option"
                              })
                            }) : (0, r.jsx)(p.z6, {
                              value: 0,
                              className: "space-y-4",
                              children: (0, r.jsx)(p.sx, {
                                value: 0,
                                className: "radio-group__option",
                                children: (0, r.jsx)("span", {
                                  className: "radio-group__option-indicator"
                                })
                              })
                            })
                          })]
                        })
                      }), M.map(l => {
                        var t;
                        return (0, r.jsx)(i.c, {
                          onClick: () => {
                            L(l), e()
                          },
                          children: (0, r.jsxs)("div", {
                            className: "flex items-center text-left mb-1 py-1.5 px-4 rounded-3 hover:bg-utility-1-opacity-5",
                            children: [(0, r.jsx)("div", {
                              children: (0, r.jsx)(o.q, {
                                name: l.name,
                                size: m.Y.XSMALL,
                                src: l.iconUrl
                              })
                            }), (0, r.jsx)("div", {
                              className: "pl-2 flex-grow",
                              children: (0, r.jsx)(g.E, {
                                type: y.jK.SUBHEADER_14,
                                weight: y.nG.MEDIUM,
                                children: null != (t = l.displayName) ? t : l.name
                              })
                            }), (0, r.jsx)("div", {
                              children: F?.id === l.id ? (0, r.jsx)(p.z6, {
                                value: 0,
                                className: "space-y-4",
                                children: (0, r.jsx)(p.sx, {
                                  value: 0,
                                  className: "radio-group__option",
                                  children: (0, r.jsx)("span", {
                                    className: "radio-group__option-indicator"
                                  })
                                })
                              }) : (0, r.jsx)(p.z6, {
                                className: "space-y-4",
                                children: (0, r.jsx)(p.sx, {
                                  value: 0,
                                  className: "radio-group__option"
                                })
                              })
                            })]
                          })
                        }, l.id)
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
    10741: (e, l, t) => {
      t.r(l), t.d(l, {
        default: () => ae
      });
      var a, r = t(74848),
        n = t(5750),
        i = t(29584),
        c = t(63369),
        s = t(23688),
        o = t(16742),
        d = ((a = d || {})["1H"] = "percent_change_1h", a["24H"] = "percent_change_24h", a["7D"] = "percent_change_7d", a),
        h = t(26113),
        m = t(96540);
      const u = (0, m.createContext)({
          searchText: "",
          setSearchText: h.Z,
          selectedCategory: null,
          setSelectedCategory: e => {},
          selectedNetworks: null,
          setSelectedNetworks: e => {},
          selectedPriceChange: d["24H"],
          setSelectedPriceChange: e => {},
          currentPage: 1,
          setCurrentPage: h.Z
        }),
        p = ({
          children: e
        }) => {
          const [l, t] = (0, m.useState)(null), [a, n] = (0, m.useState)(null), [i, c] = (0, m.useState)(""), [s, o] = (0, m.useState)(1), [h, p] = (0, m.useState)(d["24H"]);
          return (0, r.jsx)(u.Provider, {
            value: {
              searchText: i,
              setSearchText: c,
              selectedCategory: l,
              setSelectedCategory: t,
              selectedNetworks: a,
              setSelectedNetworks: n,
              selectedPriceChange: h,
              setSelectedPriceChange: p,
              currentPage: s,
              setCurrentPage: o
            },
            children: e
          })
        };
      var g = t(64145),
        y = t(89408),
        v = t(97286),
        f = t(77832),
        w = t(94893),
        N = t(10551),
        x = t(88774),
        C = t(74408),
        b = t(51335),
        k = t(52114),
        T = t(1279);
      const S = ({
        selectedCategory: e,
        onSelect: l
      }) => {
        const [t, a] = (() => {
          const {
            isPending: e,
            data: l
          } = (0, v.I)({
            queryKey: ["hot-token-categories"],
            queryFn: () => g.YW.emit(y.A.FETCH_HOT_TOKEN_CATEGORIES),
            staleTime: 36e5
          });
          return [e, l]
        })(), n = a ?? [];
        return (0, m.useEffect)(() => {
          n.length > 0 && l(n[0])
        }, [n]), (0, r.jsx)(C.AM, {
          children: ({
            open: a
          }) => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(b.E, {
              isLoading: t,
              children: (0, r.jsx)(C.ut, {
                className: "outline-none rounded-full bg-background-2 pl-1 pr-2 py-1",
                children: (0, r.jsxs)("div", {
                  className: "flex items-center",
                  children: [(0, r.jsx)("div", {
                    className: "pl-2",
                    children: (0, r.jsx)(k.E, {
                      type: T.jK.SUBHEADER_14,
                      weight: T.nG.MEDIUM,
                      children: e?.name
                    })
                  }), (0, r.jsx)("div", {
                    children: (0, r.jsx)(N.b, {
                      width: 18,
                      height: 18,
                      colorClass: "text-utility-1-opacity-1 transition-transform " + (a ? "rotate-180" : "rotate-0")
                    })
                  })]
                })
              })
            }), (0, r.jsx)(f.e, {
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1",
              children: (0, r.jsx)(C.QT, {
                className: "absolute min-w-full mt-1 left-0 z-10 shadow-lg rounded-4 bg-background-2 cursor-default",
                onClick: e => e.stopPropagation(),
                children: ({
                  close: t
                }) => (0, r.jsx)("div", {
                  className: "mr-1 pl-4 py-4 tw-scrollbar max-h-[250px]",
                  children: (0, r.jsx)("div", {
                    className: "flex space-y-4 flex-col",
                    children: n.map(a => (0, r.jsx)(w.c, {
                      onClick: () => {
                        l(a), t()
                      },
                      children: (0, r.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, r.jsx)("div", {
                          className: "pl-2 flex-grow",
                          children: (0, r.jsx)(k.E, {
                            weight: T.nG.NORMAL,
                            theme: e?.id === a.id ? T.Il.BRAND : T.Il.PRIMARY,
                            children: a.name
                          })
                        }), (0, r.jsx)("div", {
                          children: e?.id === a.id && (0, r.jsx)(x.S, {
                            width: 20,
                            height: 20,
                            colorClass: "text-primary"
                          })
                        })]
                      })
                    }, a.id))
                  })
                })
              })
            })]
          })
        })
      };
      var P = t(23207),
        _ = t(53916),
        F = t(8360),
        M = t(75485),
        L = t(6442),
        j = t(79149),
        H = t(33888),
        O = t(87841),
        z = t(65504),
        A = t(69254),
        $ = t(21094),
        I = t(9302);
      const K = ({
        width: e,
        height: l,
        primaryColorClass: t,
        secondaryColorClass: a
      }) => (0, r.jsxs)("svg", {
        fill: "none",
        width: e ?? 16,
        height: l ?? 16,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          className: t,
          d: "M6.12109 7.00048V5.8995L8.28776 3.56543L10.4544 5.8995V7.00048H6.12109Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          className: a,
          d: "M10.4544 9V10.101L8.28776 12.435L6.12109 10.101V9H10.4544Z",
          fill: "currentColor"
        })]
      });
      var V = t(86170),
        R = Object.defineProperty,
        q = Object.defineProperties,
        D = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        Z = {}.hasOwnProperty,
        B = {}.propertyIsEnumerable,
        G = (e, l, t) => l in e ? R(e, l, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[l] = t,
        U = (e, l) => {
          for (var t in l || (l = {})) Z.call(l, t) && G(e, t, l[t]);
          if (E)
            for (var t of E(l)) B.call(l, t) && G(e, t, l[t]);
          return e
        };
      const W = ({
          data: e,
          loading: l,
          globalFilter: t,
          priceChange: a,
          disabled: n,
          selectedCategory: i,
          onTokenSelect: c
        }) => {
          const {
            formatMessage: s
          } = (0, L.A)(), o = (0, O.w)(), {
            baseCurrencyType: d,
            currency: h
          } = (0, V.P)(), u = (0, m.useMemo)(() => [{
            accessorKey: "asset.name",
            id: "assetName",
            cell: e => {
              var l;
              const t = o[e.row.original.asset.network],
                {
                  address: a
                } = (0, M.$5)(e.row.original.asset.asset_id);
              return (0, r.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [(0, r.jsx)("div", {
                  children: (0, r.jsx)(z.q, {
                    name: e.getValue(),
                    network: a ? t : void 0,
                    src: e.row.original.asset.icon_url
                  })
                }), (0, r.jsxs)("div", {
                  className: "flex flex-col",
                  children: [(0, r.jsx)(k.E, {
                    testid: "asset-symbol",
                    type: T.jK.TITLE,
                    children: e.row.original.asset.symbol
                  }), (0, r.jsx)(k.E, {
                    theme: T.Il.THIRD,
                    weight: T.nG.LIGHT,
                    children: null != (l = t?.displayName) ? l : t?.name
                  })]
                })]
              })
            },
            enableSorting: !1,
            header: () => (0, r.jsx)(k.E, {
              type: T.jK.CAPTION,
              theme: T.Il.THIRD,
              children: s({
                id: "dashboard.tokens.table.token"
              })
            }),
            meta: {
              align: "left"
            }
          }, {
            accessorKey: "price.price",
            id: "price",
            cell: e => {
              const l = e.row.original.price[a];
              return (0, r.jsxs)("div", {
                className: "flex flex-col",
                children: [(0, r.jsx)(A.h, {
                  textType: T.jK.TITLE,
                  weight: T.nG.NORMAL,
                  currency: h,
                  amountType: d,
                  value: e.row.original.price.price,
                  maxSignificantDecimals: .01 > e.row.original.price.price ? 10 : void 0,
                  tinyThreshold: .01 > e.row.original.price.price ? 10 : void 0
                }), (0, r.jsx)(A.h, {
                  theme: l > 0 ? T.Il.SUCCESS : T.Il.ERROR,
                  weight: T.nG.NORMAL,
                  amountType: $.Cu.PERCENT,
                  value: l
                })]
              })
            },
            header: () => (0, r.jsx)(k.E, {
              type: T.jK.CAPTION,
              theme: T.Il.THIRD,
              children: s({
                id: "dashboard.tokens.table.price-change",
                defaultMessage: "% Price change"
              })
            }),
            meta: {
              align: "right"
            }
          }, {
            accessorKey: "market.volume_24h",
            id: "volume_24h",
            cell: e => (0, r.jsx)(A.h, {
              textType: T.jK.TITLE,
              weight: T.nG.NORMAL,
              amountType: d,
              value: e.row.original.market.volume_24h,
              currency: h
            }),
            header: () => (0, r.jsx)(k.E, {
              type: T.jK.CAPTION,
              theme: T.Il.THIRD,
              children: s({
                id: "dashboard.tokens.table.24h-volume"
              })
            }),
            meta: {
              align: "right"
            }
          }, {
            accessorKey: "market.market_cap",
            id: "market_cap",
            cell: e => (0, r.jsx)(A.h, {
              textType: T.jK.TITLE,
              weight: T.nG.NORMAL,
              amountType: d,
              value: e.row.original.market.market_cap,
              currency: h
            }),
            header: () => (0, r.jsx)(k.E, {
              type: T.jK.CAPTION,
              theme: T.Il.THIRD,
              children: s({
                id: "dashboard.tokens.table.marketcap"
              })
            }),
            meta: {
              align: "right"
            }
          }], [a]), p = (0, m.useMemo)(() => l ? Array(30).fill({}) : e, [l, e]), g = (0, m.useMemo)(() => l ? u.map(e => ((e, l) => q(e, D(l)))(U({}, e), {
            cell: (0, r.jsx)(b.E, {
              isLoading: !0,
              children: (0, r.jsx)("div", {
                className: "w-full h-[30px]"
              })
            })
          })) : u, [l, u]);
          return (0, r.jsx)(J, U({}, {
            data: p,
            columns: g,
            loading: l,
            globalFilter: t,
            selectedCategory: i,
            disabled: n,
            onTokenSelect: c,
            priceChange: a
          }))
        },
        J = ({
          data: e,
          columns: l,
          loading: t,
          globalFilter: a,
          disabled: n,
          priceChange: i,
          selectedCategory: c,
          onTokenSelect: s
        }) => {
          const [o, d] = (0, m.useState)(a), u = (0, m.useRef)(null), p = (0, j.N4)({
            columns: l,
            data: e,
            debugTable: !0,
            filterFns: {
              nameOrContractFilter: (e, l, t) => {
                const a = t.toLowerCase(),
                  {
                    address: r
                  } = (0, M.$5)(e.original.asset.asset_id);
                return !!(r?.toLowerCase().includes(a) || e.original.asset.name.toLowerCase().includes(a) || e.original.asset.symbol.toLowerCase().includes(a))
              }
            },
            globalFilterFn: "nameOrContractFilter",
            getCoreRowModel: (0, H.HT)(),
            getSortedRowModel: (0, H.h5)(),
            getFilteredRowModel: (0, H.hM)(),
            state: {
              globalFilter: o
            }
          });
          return (0, m.useEffect)(() => {
            const e = setTimeout(() => {
              d(a)
            }, 300);
            return () => clearTimeout(e)
          }, [a]), (0, m.useEffect)(() => {
            u.current && (u.current.scrollTop = 0)
          }, [a, i, c]), t || p.getRowModel().rows.length ? (0, r.jsx)("div", {
            ref: u,
            className: "relative tw-scrollbar overflow-x-auto",
            children: (0, r.jsxs)("table", {
              className: "w-full",
              children: [(0, r.jsx)("thead", {
                className: "sticky top-0 z-[6] bg-backgroundPrimary",
                children: p.getHeaderGroups().map(e => (0, r.jsx)("tr", {
                  children: e.headers.map(e => {
                    var l, t;
                    return (0, r.jsx)("th", {
                      colSpan: e.colSpan,
                      align: null == (l = e.column.columnDef.meta) ? void 0 : l.align,
                      className: "min-w-[80px]",
                      children: (0, r.jsxs)("div", {
                        className: `${e.column.getCanSort()?"cursor-pointer select-none":""} flex items-center ${e.index>0?"justify-end":"justify-start"} py-3`,
                        onClick: e.column.getToggleSortingHandler(),
                        children: [(0, j.Kv)(e.column.columnDef.header, e.getContext()), null != (t = {
                          asc: (0, r.jsx)(K, {
                            primaryColorClass: "text-textPrimary",
                            secondaryColorClass: "text-iconNormal"
                          }),
                          desc: (0, r.jsx)(K, {
                            primaryColorClass: "text-iconNormal",
                            secondaryColorClass: "text-textPrimary"
                          })
                        } [e.column.getIsSorted()]) ? t : "assetName" !== e.id ? (0, r.jsx)(K, {
                          primaryColorClass: "text-iconNormal",
                          secondaryColorClass: "text-iconNormal"
                        }) : null]
                      })
                    }, e.id)
                  })
                }, e.id))
              }), (0, r.jsx)("tbody", {
                children: p.getRowModel().rows.map(e => (0, r.jsx)("tr", {
                  className: "cursor-pointer hover:bg-utility-1-opacity-5",
                  onClick: n ? h.Z : () => s(e.original),
                  children: e.getVisibleCells().map(e => {
                    var l;
                    return (0, r.jsx)("td", {
                      className: `py-2.5 ${1===e.column.getIndex()?"pl-16":e.column.getIndex()>0?"pl-4":""} text-nowrap`,
                      align: null == (l = e.column.columnDef.meta) ? void 0 : l.align,
                      children: (0, j.Kv)(e.column.columnDef.cell, e.getContext())
                    }, e.id)
                  })
                }, e.id))
              })]
            })
          }) : (0, r.jsxs)("div", {
            className: "flex flex-col items-center space-y-2 my-10",
            children: [(0, r.jsx)(I.x, {
              width: 160,
              height: 160
            }), (0, r.jsx)(k.E, {
              type: T.jK.TITLE,
              children: "Token not found"
            })]
          })
        },
        Q = {
          [d["1H"]]: "1H",
          [d["24H"]]: "24H",
          [d["7D"]]: "7D"
        },
        X = ({
          selectedPriceChange: e,
          onSelect: l
        }) => {
          const {
            formatMessage: t
          } = (0, L.A)(), a = [d["1H"], d["24H"], d["7D"]];
          return (0, r.jsx)(C.AM, {
            children: ({
              open: n
            }) => (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(C.ut, {
                className: "outline-none rounded-full bg-background-2 pl-1 pr-2 py-1",
                children: (0, r.jsxs)("div", {
                  className: "flex items-center",
                  children: [(0, r.jsx)("div", {
                    className: "pl-2",
                    children: (0, r.jsx)(k.E, {
                      type: T.jK.SUBHEADER_14,
                      weight: T.nG.MEDIUM,
                      children: t({
                        id: "trending-tokens.priceChange." + e,
                        defaultMessage: Q[e]
                      })
                    })
                  }), (0, r.jsx)("div", {
                    children: (0, r.jsx)(N.b, {
                      width: 18,
                      height: 18,
                      colorClass: "text-utility-1-opacity-1 transition-transform " + (n ? "rotate-180" : "rotate-0")
                    })
                  })]
                })
              }), (0, r.jsx)(f.e, {
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                children: (0, r.jsx)(C.QT, {
                  className: "absolute min-w-full mt-1 left-0 z-10 shadow-lg rounded-4 bg-background-2 cursor-default",
                  onClick: e => e.stopPropagation(),
                  children: ({
                    close: n
                  }) => (0, r.jsx)("div", {
                    className: "mr-1 pl-4 py-4 tw-scrollbar max-h-[250px]",
                    children: (0, r.jsx)("div", {
                      className: "flex space-y-4 flex-col",
                      children: a.map(a => (0, r.jsx)(w.c, {
                        onClick: () => {
                          l(a), n()
                        },
                        children: (0, r.jsxs)("div", {
                          className: "flex items-center",
                          children: [(0, r.jsx)("div", {
                            className: "pl-2 flex-grow",
                            children: (0, r.jsx)(k.E, {
                              weight: T.nG.NORMAL,
                              theme: e === a ? T.Il.BRAND : T.Il.PRIMARY,
                              children: t({
                                id: "trending-tokens.priceChange." + a,
                                defaultMessage: Q[a]
                              })
                            })
                          }), (0, r.jsx)("div", {
                            children: e === a && (0, r.jsx)(x.S, {
                              width: 20,
                              height: 20,
                              colorClass: "text-primary"
                            })
                          })]
                        })
                      }, a))
                    })
                  })
                })
              })]
            })
          })
        };
      var Y = t(4800),
        ee = t(59636),
        le = t(26264);
      const te = (0, s.K)(() => {
          (0, c.K)({
            event: i.Un.TRENDING_TOKENS,
            props: null
          });
          const {
            formatMessage: e
          } = (0, L.A)(), {
            trackHotTokenSelectionAnalyticsEvent: l
          } = (() => {
            const {
              trackAnalytics: e
            } = (0, P.s)();
            return {
              trackHotTokenSelectionAnalyticsEvent: (l, t) => {
                const a = {
                  assetId: l.asset_id,
                  assetName: l.name,
                  categoryName: t,
                  pageViewSource: i.Un.TRENDING_TOKENS
                };
                e({
                  event: i.BQ.HOT_TOKEN_SELECTED,
                  props: a
                })
              }
            }
          })(), {
            domains: t
          } = (0, m.useContext)(o.C), {
            selectedCategory: a,
            setSelectedCategory: s,
            selectedNetworks: d,
            setSelectedNetworks: h,
            searchText: p,
            setSearchText: g,
            selectedPriceChange: y,
            setSelectedPriceChange: v
          } = (0, m.useContext)(u), f = t.map(e => +(0, M.X2)(e)), [w, N] = (0, _.L)(a?.id, d ? [(0, M.X2)(d[0].prefixedCoinId, !0)] : f), {
            navigateToHotToken: x,
            isNavigating: C
          } = (0, ee.c)();
          return (0, r.jsxs)(Y.LN, {
            children: [(0, r.jsx)(Y.zY, {
              title: e({
                id: "trending-tokens.title",
                defaultMessage: "Trending"
              })
            }), (0, r.jsxs)(Y.Gv, {
              children: [(0, r.jsx)("div", {
                className: "mb-2.5",
                children: (0, r.jsx)(F.D, {
                  placeholder: e({
                    id: "dashboard.tokens.input-placeholder"
                  }),
                  value: p,
                  onChange: e => g(e.target.value)
                })
              }), (0, r.jsx)("div", {
                className: "flex",
                children: (0, r.jsxs)("div", {
                  className: "flex relative w-full items-center justify-between",
                  children: [(0, r.jsx)(n.Ff, {
                    selectedNetworks: d,
                    onSelect: h,
                    spacing: n.GM.SMALL,
                    allowedPrefixedCoinIds: t
                  }), (0, r.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, r.jsx)(S, {
                      selectedCategory: a,
                      onSelect: s
                    }), (0, r.jsx)(X, {
                      selectedPriceChange: y,
                      onSelect: v
                    })]
                  })]
                })
              }), (0, r.jsx)(Y.LO, {
                children: (0, r.jsx)(W, {
                  globalFilter: p,
                  loading: w || !a,
                  data: N ?? [],
                  priceChange: y,
                  selectedCategory: a,
                  disabled: C,
                  onTokenSelect: e => ((e, l, t) => new Promise((e, l) => {
                    var a = e => {
                        try {
                          n(t.next(e))
                        } catch (e) {
                          l(e)
                        }
                      },
                      r = e => {
                        try {
                          n(t.throw(e))
                        } catch (e) {
                          l(e)
                        }
                      },
                      n = l => l.done ? e(l.value) : Promise.resolve(l.value).then(a, r);
                    n((t = t.apply(null, null)).next())
                  }))(0, 0, function*() {
                    l(e.asset, a.name), x(e, le.b.TRENDING_TOKENS)
                  })
                })
              })]
            })]
          })
        }),
        ae = () => (0, r.jsx)(p, {
          children: (0, r.jsx)(o.M, {
            children: (0, r.jsx)(te, {})
          })
        })
    },
    16742: (e, l, t) => {
      t.d(l, {
        C: () => i,
        M: () => c
      });
      var a = t(74848),
        r = t(43412),
        n = t(96540);
      t.n(n);
      const i = (0, n.createContext)({
          domains: [],
          isLoading: !1
        }),
        c = ({
          children: e
        }) => {
          const [l, t] = (0, r.G)();
          return (0, a.jsx)(i.Provider, {
            value: {
              domains: t,
              isLoading: l
            },
            children: e
          })
        }
    }
  }
]);
