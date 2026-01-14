try {
  let n = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    l = (new n.Error).stack;
  l && (n.l = n.l || {}, n.l[l] = "bf424fb3-9137-4a68-8861-0339896ca857", n.t = "sentry-dbid-bf424fb3-9137-4a68-8861-0339896ca857")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1530], {
    33888: (n, l, t) => {
      function e(n, l) {
        return "function" == typeof n ? n(l) : n
      }

      function r(n, l) {
        return t => {
          l.setState(l => ({
            ...l,
            [n]: e(t, l[n])
          }))
        }
      }

      function u(n) {
        return n instanceof Function
      }

      function o(n, l, t) {
        let e, r = [];
        return u => {
          let o;
          t.key && t.debug && (o = Date.now());
          const a = n(u);
          if (a.length === r.length && !a.some((n, l) => r[l] !== n)) return e;
          let i;
          if (r = a, t.key && t.debug && (i = Date.now()), e = l(...a), null == t || null == t.onChange || t.onChange(e), t.key && t.debug && null != t && t.debug()) {
            const n = Math.round(100 * (Date.now() - o)) / 100,
              l = Math.round(100 * (Date.now() - i)) / 100,
              e = l / 16,
              r = (n, l) => {
                for (n += ""; n.length < l;) n = " " + n;
                return n
              };
            console.info(`%c⏱ ${r(l,5)} /${r(n,5)} ms`, `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*e,120))}deg 100% 31%);`, t?.key)
          }
          return e
        }
      }

      function a(n, l, t, e) {
        return {
          debug: () => {
            var t;
            return null != (t = n?.debugAll) ? t : n[l]
          },
          key: !1,
          onChange: e
        }
      }
      t.d(l, {
        HT: () => $,
        ZR: () => k,
        h5: () => U,
        hM: () => G
      });
      const i = "debugHeaders";

      function s(n, l, t) {
        var e;
        let r = {
          id: null != (e = t.id) ? e : l.id,
          column: l,
          index: t.index,
          isPlaceholder: !!t.isPlaceholder,
          placeholderId: t.placeholderId,
          depth: t.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            const n = [],
              l = t => {
                t.subHeaders && t.subHeaders.length && t.subHeaders.map(l), n.push(t)
              };
            return l(r), n
          },
          getContext: () => ({
            table: n,
            header: r,
            column: l
          })
        };
        return n.u.forEach(l => {
          null == l.createHeader || l.createHeader(r, n)
        }), r
      }
      const c = {
        createTable: n => {
          n.getHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.left, n.getState().columnPinning.right], (l, t, e, r) => {
            var u, o;
            const a = null != (u = e?.map(n => t.find(l => l.id === n)).filter(Boolean)) ? u : [],
              i = null != (o = r?.map(n => t.find(l => l.id === n)).filter(Boolean)) ? o : [];
            return f(l, [...a, ...t.filter(n => !(null != e && e.includes(n.id) || null != r && r.includes(n.id))), ...i], n)
          }, a(n.options, i)), n.getCenterHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.left, n.getState().columnPinning.right], (l, t, e, r) => f(l, t = t.filter(n => !(null != e && e.includes(n.id) || null != r && r.includes(n.id))), n, "center"), a(n.options, i)), n.getLeftHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.left], (l, t, e) => {
            var r;
            return f(l, null != (r = e?.map(n => t.find(l => l.id === n)).filter(Boolean)) ? r : [], n, "left")
          }, a(n.options, i)), n.getRightHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.right], (l, t, e) => {
            var r;
            return f(l, null != (r = e?.map(n => t.find(l => l.id === n)).filter(Boolean)) ? r : [], n, "right")
          }, a(n.options, i)), n.getFooterGroups = o(() => [n.getHeaderGroups()], n => [...n].reverse(), a(n.options, i)), n.getLeftFooterGroups = o(() => [n.getLeftHeaderGroups()], n => [...n].reverse(), a(n.options, i)), n.getCenterFooterGroups = o(() => [n.getCenterHeaderGroups()], n => [...n].reverse(), a(n.options, i)), n.getRightFooterGroups = o(() => [n.getRightHeaderGroups()], n => [...n].reverse(), a(n.options, i)), n.getFlatHeaders = o(() => [n.getHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i)), n.getLeftFlatHeaders = o(() => [n.getLeftHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i)), n.getCenterFlatHeaders = o(() => [n.getCenterHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i)), n.getRightFlatHeaders = o(() => [n.getRightHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i)), n.getCenterLeafHeaders = o(() => [n.getCenterFlatHeaders()], n => n.filter(n => {
            var l;
            return !(null != (l = n.subHeaders) && l.length)
          }), a(n.options, i)), n.getLeftLeafHeaders = o(() => [n.getLeftFlatHeaders()], n => n.filter(n => {
            var l;
            return !(null != (l = n.subHeaders) && l.length)
          }), a(n.options, i)), n.getRightLeafHeaders = o(() => [n.getRightFlatHeaders()], n => n.filter(n => {
            var l;
            return !(null != (l = n.subHeaders) && l.length)
          }), a(n.options, i)), n.getLeafHeaders = o(() => [n.getLeftHeaderGroups(), n.getCenterHeaderGroups(), n.getRightHeaderGroups()], (n, l, t) => {
            var e, r, u, o, a, i;
            return [...null != (e = null == (r = n[0]) ? void 0 : r.headers) ? e : [], ...null != (u = null == (o = l[0]) ? void 0 : o.headers) ? u : [], ...null != (a = null == (i = t[0]) ? void 0 : i.headers) ? a : []].map(n => n.getLeafHeaders()).flat()
          }, a(n.options, i))
        }
      };

      function f(n, l, t, e) {
        var r, u;
        let o = 0;
        const a = function(n, l) {
          void 0 === l && (l = 1), o = Math.max(o, l), n.filter(n => n.getIsVisible()).forEach(n => {
            var t;
            null != (t = n.columns) && t.length && a(n.columns, l + 1)
          }, 0)
        };
        a(n);
        let i = [];
        const c = (n, l) => {
            const r = {
                depth: l,
                id: [e, "" + l].filter(Boolean).join("_"),
                headers: []
              },
              u = [];
            n.forEach(n => {
              const o = [...u].reverse()[0];
              let a, i = !1;
              if (n.column.depth === r.depth && n.column.parent ? a = n.column.parent : (a = n.column, i = !0), o && o?.column === a) o.subHeaders.push(n);
              else {
                const r = s(t, a, {
                  id: [e, l, a.id, n?.id].filter(Boolean).join("_"),
                  isPlaceholder: i,
                  placeholderId: i ? "" + u.filter(n => n.column === a).length : void 0,
                  depth: l,
                  index: u.length
                });
                r.subHeaders.push(n), u.push(r)
              }
              r.headers.push(n), n.headerGroup = r
            }), i.push(r), l > 0 && c(u, l - 1)
          },
          f = l.map((n, l) => s(t, n, {
            depth: o,
            index: l
          }));
        c(f, o - 1), i.reverse();
        const d = n => n.filter(n => n.column.getIsVisible()).map(n => {
          let l = 0,
            t = 0,
            e = [0];
          return n.subHeaders && n.subHeaders.length ? (e = [], d(n.subHeaders).forEach(n => {
            let {
              colSpan: t,
              rowSpan: r
            } = n;
            l += t, e.push(r)
          })) : l = 1, t += Math.min(...e), n.colSpan = l, n.rowSpan = t, {
            colSpan: l,
            rowSpan: t
          }
        });
        return d(null != (r = null == (u = i[0]) ? void 0 : u.headers) ? r : []), i
      }
      const d = (n, l, t, e, r, u, i) => {
          let s = {
            id: l,
            index: e,
            original: t,
            depth: r,
            parentId: i,
            o: {},
            i: {},
            getValue: l => {
              if (s.o.hasOwnProperty(l)) return s.o[l];
              const t = n.getColumn(l);
              return null != t && t.accessorFn ? (s.o[l] = t.accessorFn(s.original, e), s.o[l]) : void 0
            },
            getUniqueValues: l => {
              if (s.i.hasOwnProperty(l)) return s.i[l];
              const t = n.getColumn(l);
              return null != t && t.accessorFn ? t.columnDef.getUniqueValues ? (s.i[l] = t.columnDef.getUniqueValues(s.original, e), s.i[l]) : (s.i[l] = [s.getValue(l)], s.i[l]) : void 0
            },
            renderValue: l => {
              var t;
              return null != (t = s.getValue(l)) ? t : n.options.renderFallbackValue
            },
            subRows: u ?? [],
            getLeafRows: () => function(n) {
              const l = [],
                t = n => {
                  n.forEach(n => {
                    l.push(n);
                    const e = n.subRows;
                    null != e && e.length && t(e)
                  })
                };
              return t(n), l
            }(s.subRows),
            getParentRow: () => s.parentId ? n.getRow(s.parentId, !0) : void 0,
            getParentRows: () => {
              let n = [],
                l = s;
              for (;;) {
                const t = l.getParentRow();
                if (!t) break;
                n.push(t), l = t
              }
              return n.reverse()
            },
            getAllCells: o(() => [n.getAllLeafColumns()], l => l.map(l => function(n, l, t, e) {
              const r = {
                id: `${l.id}_${t.id}`,
                row: l,
                column: t,
                getValue: () => l.getValue(e),
                renderValue: () => {
                  var l;
                  return null != (l = r.getValue()) ? l : n.options.renderFallbackValue
                },
                getContext: o(() => [n, t, l, r], (n, l, t, e) => ({
                  table: n,
                  column: l,
                  row: t,
                  cell: e,
                  getValue: e.getValue,
                  renderValue: e.renderValue
                }), a(n.options, "debugCells"))
              };
              return n.u.forEach(e => {
                null == e.createCell || e.createCell(r, t, l, n)
              }, {}), r
            }(n, s, l, l.id)), a(n.options, "debugRows")),
            v: o(() => [s.getAllCells()], n => n.reduce((n, l) => (n[l.column.id] = l, n), {}), a(n.options, "debugRows"))
          };
          for (let l = 0; l < n.u.length; l++) {
            const t = n.u[l];
            null == t || null == t.createRow || t.createRow(s, n)
          }
          return s
        },
        v = {
          createColumn: (n, l) => {
            n.m = l.options.getFacetedRowModel && l.options.getFacetedRowModel(l, n.id), n.getFacetedRowModel = () => n.m ? n.m() : l.getPreFilteredRowModel(), n.p = l.options.getFacetedUniqueValues && l.options.getFacetedUniqueValues(l, n.id), n.getFacetedUniqueValues = () => n.p ? n.p() : new Map, n.h = l.options.getFacetedMinMaxValues && l.options.getFacetedMinMaxValues(l, n.id), n.getFacetedMinMaxValues = () => {
              if (n.h) return n.h()
            }
          }
        },
        g = (n, l, t) => {
          var e;
          const r = t.toLowerCase();
          return !(null == (e = n.getValue(l)) || null == (e = e.toString()) || null == (e = e.toLowerCase()) || !e.includes(r))
        };
      g.autoRemove = n => O(n);
      const b = (n, l, t) => {
        var e;
        return !(null == (e = n.getValue(l)) || null == (e = e.toString()) || !e.includes(t))
      };
      b.autoRemove = n => O(n);
      const m = (n, l, t) => {
        var e;
        return (null == (e = n.getValue(l)) || null == (e = e.toString()) ? void 0 : e.toLowerCase()) === t?.toLowerCase()
      };
      m.autoRemove = n => O(n);
      const p = (n, l, t) => {
        var e;
        return null == (e = n.getValue(l)) ? void 0 : e.includes(t)
      };
      p.autoRemove = n => O(n) || !(null != n && n.length);
      const w = (n, l, t) => !t.some(t => {
        var e;
        return !(null != (e = n.getValue(l)) && e.includes(t))
      });
      w.autoRemove = n => O(n) || !(null != n && n.length);
      const h = (n, l, t) => t.some(t => {
        var e;
        return null == (e = n.getValue(l)) ? void 0 : e.includes(t)
      });
      h.autoRemove = n => O(n) || !(null != n && n.length);
      const S = (n, l, t) => n.getValue(l) === t;
      S.autoRemove = n => O(n);
      const C = (n, l, t) => n.getValue(l) == t;
      C.autoRemove = n => O(n);
      const y = (n, l, t) => {
        let [e, r] = t;
        const u = n.getValue(l);
        return u >= e && r >= u
      };
      y.resolveFilterValue = n => {
        let [l, t] = n, e = "number" != typeof l ? parseFloat(l) : l, r = "number" != typeof t ? parseFloat(t) : t, u = null === l || Number.isNaN(e) ? -1 / 0 : e, o = null === t || Number.isNaN(r) ? 1 / 0 : r;
        if (u > o) {
          const n = u;
          u = o, o = n
        }
        return [u, o]
      }, y.autoRemove = n => O(n) || O(n[0]) && O(n[1]);
      const R = {
        includesString: g,
        includesStringSensitive: b,
        equalsString: m,
        arrIncludes: p,
        arrIncludesAll: w,
        arrIncludesSome: h,
        equals: S,
        weakEquals: C,
        inNumberRange: y
      };

      function O(n) {
        return null == n || "" === n
      }

      function I(n, l, t) {
        return !(!n || !n.autoRemove) && n.autoRemove(l, t) || typeof l > "u" || "string" == typeof l && !l
      }
      const z = {
          sum: (n, l, t) => t.reduce((l, t) => {
            const e = t.getValue(n);
            return l + ("number" == typeof e ? e : 0)
          }, 0),
          min: (n, l, t) => {
            let e;
            return t.forEach(l => {
              const t = l.getValue(n);
              null != t && (e > t || void 0 === e && t >= t) && (e = t)
            }), e
          },
          max: (n, l, t) => {
            let e;
            return t.forEach(l => {
              const t = l.getValue(n);
              null != t && (t > e || void 0 === e && t >= t) && (e = t)
            }), e
          },
          extent: (n, l, t) => {
            let e, r;
            return t.forEach(l => {
              const t = l.getValue(n);
              null != t && (void 0 === e ? t >= t && (e = r = t) : (e > t && (e = t), t > r && (r = t)))
            }), [e, r]
          },
          mean: (n, l) => {
            let t = 0,
              e = 0;
            if (l.forEach(l => {
                let r = l.getValue(n);
                null != r && (r = +r) >= r && (++t, e += r)
              }), t) return e / t
          },
          median: (n, l) => {
            if (!l.length) return;
            const t = l.map(l => l.getValue(n));
            if (! function(n) {
                return Array.isArray(n) && n.every(n => "number" == typeof n)
              }(t)) return;
            if (1 === t.length) return t[0];
            const e = Math.floor(t.length / 2),
              r = t.sort((n, l) => n - l);
            return t.length % 2 != 0 ? r[e] : (r[e - 1] + r[e]) / 2
          },
          unique: (n, l) => Array.from(new Set(l.map(l => l.getValue(n))).values()),
          uniqueCount: (n, l) => new Set(l.map(l => l.getValue(n))).size,
          count: (n, l) => l.length
        },
        D = {
          size: 150,
          minSize: 20,
          maxSize: Number.MAX_SAFE_INTEGER
        },
        M = {
          getDefaultColumnDef: () => D,
          getInitialState: n => ({
            columnSizing: {},
            columnSizingInfo: {
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              isResizingColumn: !1,
              columnSizingStart: []
            },
            ...n
          }),
          getDefaultOptions: n => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: r("columnSizing", n),
            onColumnSizingInfoChange: r("columnSizingInfo", n)
          }),
          createColumn: (n, l) => {
            n.getSize = () => {
              var t, e, r;
              const u = l.getState().columnSizing[n.id];
              return Math.min(Math.max(null != (t = n.columnDef.minSize) ? t : D.minSize, null != (e = u ?? n.columnDef.size) ? e : D.size), null != (r = n.columnDef.maxSize) ? r : D.maxSize)
            }, n.getStart = o(n => [n, B(l, n), l.getState().columnSizing], (l, t) => t.slice(0, n.getIndex(l)).reduce((n, l) => n + l.getSize(), 0), a(l.options, "debugColumns")), n.getAfter = o(n => [n, B(l, n), l.getState().columnSizing], (l, t) => t.slice(n.getIndex(l) + 1).reduce((n, l) => n + l.getSize(), 0), a(l.options, "debugColumns")), n.resetSize = () => {
              l.setColumnSizing(l => {
                let {
                  [n.id]: t, ...e
                } = l;
                return e
              })
            }, n.getCanResize = () => {
              var t, e;
              return (null == (t = n.columnDef.enableResizing) || t) && (null == (e = l.options.enableColumnResizing) || e)
            }, n.getIsResizing = () => l.getState().columnSizingInfo.isResizingColumn === n.id
          },
          createHeader: (n, l) => {
            n.getSize = () => {
              let l = 0;
              const t = n => {
                var e;
                n.subHeaders.length ? n.subHeaders.forEach(t) : l += null != (e = n.column.getSize()) ? e : 0
              };
              return t(n), l
            }, n.getStart = () => {
              if (n.index > 0) {
                const l = n.headerGroup.headers[n.index - 1];
                return l.getStart() + l.getSize()
              }
              return 0
            }, n.getResizeHandler = t => {
              const e = l.getColumn(n.column.id),
                r = e?.getCanResize();
              return u => {
                if (!e || !r || (null == u.persist || u.persist(), F(u) && u.touches && u.touches.length > 1)) return;
                const o = n.getSize(),
                  a = n ? n.getLeafHeaders().map(n => [n.column.id, n.column.getSize()]) : [
                    [e.id, e.getSize()]
                  ],
                  i = F(u) ? Math.round(u.touches[0].clientX) : u.clientX,
                  s = {},
                  c = (n, t) => {
                    "number" == typeof t && (l.setColumnSizingInfo(n => {
                      var e, r;
                      const u = "rtl" === l.options.columnResizeDirection ? -1 : 1,
                        o = (t - (null != (e = n?.startOffset) ? e : 0)) * u,
                        a = Math.max(o / (null != (r = n?.startSize) ? r : 0), -.999999);
                      return n.columnSizingStart.forEach(n => {
                        let [l, t] = n;
                        s[l] = Math.round(100 * Math.max(t + t * a, 0)) / 100
                      }), {
                        ...n,
                        deltaOffset: o,
                        deltaPercentage: a
                      }
                    }), ("onChange" === l.options.columnResizeMode || "end" === n) && l.setColumnSizing(n => ({
                      ...n,
                      ...s
                    })))
                  },
                  f = n => c("move", n),
                  d = n => {
                    c("end", n), l.setColumnSizingInfo(n => ({
                      ...n,
                      isResizingColumn: !1,
                      startOffset: null,
                      startSize: null,
                      deltaOffset: null,
                      deltaPercentage: null,
                      columnSizingStart: []
                    }))
                  },
                  v = t || "u" > typeof document ? document : null,
                  g = {
                    moveHandler: n => f(n.clientX),
                    upHandler: n => {
                      v?.removeEventListener("mousemove", g.moveHandler), v?.removeEventListener("mouseup", g.upHandler), d(n.clientX)
                    }
                  },
                  b = {
                    moveHandler: n => (n.cancelable && (n.preventDefault(), n.stopPropagation()), f(n.touches[0].clientX), !1),
                    upHandler: n => {
                      var l;
                      v?.removeEventListener("touchmove", b.moveHandler), v?.removeEventListener("touchend", b.upHandler), n.cancelable && (n.preventDefault(), n.stopPropagation()), d(null == (l = n.touches[0]) ? void 0 : l.clientX)
                    }
                  },
                  m = !! function() {
                    if ("boolean" == typeof T) return T;
                    let n = !1;
                    try {
                      const l = {
                          get passive() {
                            return n = !0, !1
                          }
                        },
                        t = () => {};
                      window.addEventListener("test", t, l), window.removeEventListener("test", t)
                    } catch {
                      n = !1
                    }
                    return T = n, T
                  }() && {
                    passive: !1
                  };
                F(u) ? (v?.addEventListener("touchmove", b.moveHandler, m), v?.addEventListener("touchend", b.upHandler, m)) : (v?.addEventListener("mousemove", g.moveHandler, m), v?.addEventListener("mouseup", g.upHandler, m)), l.setColumnSizingInfo(n => ({
                  ...n,
                  startOffset: i,
                  startSize: o,
                  deltaOffset: 0,
                  deltaPercentage: 0,
                  columnSizingStart: a,
                  isResizingColumn: e.id
                }))
              }
            }
          },
          createTable: n => {
            n.setColumnSizing = l => null == n.options.onColumnSizingChange ? void 0 : n.options.onColumnSizingChange(l), n.setColumnSizingInfo = l => null == n.options.onColumnSizingInfoChange ? void 0 : n.options.onColumnSizingInfoChange(l), n.resetColumnSizing = l => {
              var t;
              n.setColumnSizing(l ? {} : null != (t = n.initialState.columnSizing) ? t : {})
            }, n.resetHeaderSizeInfo = l => {
              var t;
              n.setColumnSizingInfo(l ? {
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                isResizingColumn: !1,
                columnSizingStart: []
              } : null != (t = n.initialState.columnSizingInfo) ? t : {
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                isResizingColumn: !1,
                columnSizingStart: []
              })
            }, n.getTotalSize = () => {
              var l, t;
              return null != (l = null == (t = n.getHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, l) => n + l.getSize(), 0)) ? l : 0
            }, n.getLeftTotalSize = () => {
              var l, t;
              return null != (l = null == (t = n.getLeftHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, l) => n + l.getSize(), 0)) ? l : 0
            }, n.getCenterTotalSize = () => {
              var l, t;
              return null != (l = null == (t = n.getCenterHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, l) => n + l.getSize(), 0)) ? l : 0
            }, n.getRightTotalSize = () => {
              var l, t;
              return null != (l = null == (t = n.getRightHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, l) => n + l.getSize(), 0)) ? l : 0
            }
          }
        };
      let T = null;

      function F(n) {
        return "touchstart" === n.type
      }

      function B(n, l) {
        return l ? "center" === l ? n.getCenterVisibleLeafColumns() : "left" === l ? n.getLeftVisibleLeafColumns() : n.getRightVisibleLeafColumns() : n.getVisibleLeafColumns()
      }
      const x = {
          getInitialState: n => ({
            rowSelection: {},
            ...n
          }),
          getDefaultOptions: n => ({
            onRowSelectionChange: r("rowSelection", n),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0
          }),
          createTable: n => {
            n.setRowSelection = l => null == n.options.onRowSelectionChange ? void 0 : n.options.onRowSelectionChange(l), n.resetRowSelection = l => {
              var t;
              return n.setRowSelection(l ? {} : null != (t = n.initialState.rowSelection) ? t : {})
            }, n.toggleAllRowsSelected = l => {
              n.setRowSelection(t => {
                l = "u" > typeof l ? l : !n.getIsAllRowsSelected();
                const e = {
                    ...t
                  },
                  r = n.getPreGroupedRowModel().flatRows;
                return l ? r.forEach(n => {
                  n.getCanSelect() && (e[n.id] = !0)
                }) : r.forEach(n => {
                  delete e[n.id]
                }), e
              })
            }, n.toggleAllPageRowsSelected = l => n.setRowSelection(t => {
              const e = "u" > typeof l ? l : !n.getIsAllPageRowsSelected(),
                r = {
                  ...t
                };
              return n.getRowModel().rows.forEach(l => {
                _(r, l.id, e, !0, n)
              }), r
            }), n.getPreSelectedRowModel = () => n.getCoreRowModel(), n.getSelectedRowModel = o(() => [n.getState().rowSelection, n.getCoreRowModel()], (l, t) => Object.keys(l).length ? P(n, t) : {
              rows: [],
              flatRows: [],
              rowsById: {}
            }, a(n.options, "debugTable")), n.getFilteredSelectedRowModel = o(() => [n.getState().rowSelection, n.getFilteredRowModel()], (l, t) => Object.keys(l).length ? P(n, t) : {
              rows: [],
              flatRows: [],
              rowsById: {}
            }, a(n.options, "debugTable")), n.getGroupedSelectedRowModel = o(() => [n.getState().rowSelection, n.getSortedRowModel()], (l, t) => Object.keys(l).length ? P(n, t) : {
              rows: [],
              flatRows: [],
              rowsById: {}
            }, a(n.options, "debugTable")), n.getIsAllRowsSelected = () => {
              const l = n.getFilteredRowModel().flatRows,
                {
                  rowSelection: t
                } = n.getState();
              let e = !(!l.length || !Object.keys(t).length);
              return e && l.some(n => n.getCanSelect() && !t[n.id]) && (e = !1), e
            }, n.getIsAllPageRowsSelected = () => {
              const l = n.getPaginationRowModel().flatRows.filter(n => n.getCanSelect()),
                {
                  rowSelection: t
                } = n.getState();
              let e = !!l.length;
              return e && l.some(n => !t[n.id]) && (e = !1), e
            }, n.getIsSomeRowsSelected = () => {
              var l;
              const t = Object.keys(null != (l = n.getState().rowSelection) ? l : {}).length;
              return t > 0 && t < n.getFilteredRowModel().flatRows.length
            }, n.getIsSomePageRowsSelected = () => {
              const l = n.getPaginationRowModel().flatRows;
              return !n.getIsAllPageRowsSelected() && l.filter(n => n.getCanSelect()).some(n => n.getIsSelected() || n.getIsSomeSelected())
            }, n.getToggleAllRowsSelectedHandler = () => l => {
              n.toggleAllRowsSelected(l.target.checked)
            }, n.getToggleAllPageRowsSelectedHandler = () => l => {
              n.toggleAllPageRowsSelected(l.target.checked)
            }
          },
          createRow: (n, l) => {
            n.toggleSelected = (t, e) => {
              const r = n.getIsSelected();
              l.setRowSelection(u => {
                var o;
                if (t = "u" > typeof t ? t : !r, n.getCanSelect() && r === t) return u;
                const a = {
                  ...u
                };
                return _(a, n.id, t, null == (o = e?.selectChildren) || o, l), a
              })
            }, n.getIsSelected = () => {
              const {
                rowSelection: t
              } = l.getState();
              return j(n, t)
            }, n.getIsSomeSelected = () => {
              const {
                rowSelection: t
              } = l.getState();
              return "some" === N(n, t)
            }, n.getIsAllSubRowsSelected = () => {
              const {
                rowSelection: t
              } = l.getState();
              return "all" === N(n, t)
            }, n.getCanSelect = () => {
              var t;
              return "function" == typeof l.options.enableRowSelection ? l.options.enableRowSelection(n) : null == (t = l.options.enableRowSelection) || t
            }, n.getCanSelectSubRows = () => {
              var t;
              return "function" == typeof l.options.enableSubRowSelection ? l.options.enableSubRowSelection(n) : null == (t = l.options.enableSubRowSelection) || t
            }, n.getCanMultiSelect = () => {
              var t;
              return "function" == typeof l.options.enableMultiRowSelection ? l.options.enableMultiRowSelection(n) : null == (t = l.options.enableMultiRowSelection) || t
            }, n.getToggleSelectedHandler = () => {
              const l = n.getCanSelect();
              return t => {
                var e;
                l && n.toggleSelected(null == (e = t.target) ? void 0 : e.checked)
              }
            }
          }
        },
        _ = (n, l, t, e, r) => {
          var u;
          const o = r.getRow(l, !0);
          t ? (o.getCanMultiSelect() || Object.keys(n).forEach(l => delete n[l]), o.getCanSelect() && (n[l] = !0)) : delete n[l], e && null != (u = o.subRows) && u.length && o.getCanSelectSubRows() && o.subRows.forEach(l => _(n, l.id, t, e, r))
        };

      function P(n, l) {
        const t = n.getState().rowSelection,
          e = [],
          r = {},
          u = function(n, l) {
            return n.map(n => {
              var l;
              const o = j(n, t);
              if (o && (e.push(n), r[n.id] = n), null != (l = n.subRows) && l.length && (n = {
                  ...n,
                  subRows: u(n.subRows)
                }), o) return n
            }).filter(Boolean)
          };
        return {
          rows: u(l.rows),
          flatRows: e,
          rowsById: r
        }
      }

      function j(n, l) {
        var t;
        return null != (t = l[n.id]) && t
      }

      function N(n, l, t) {
        var e;
        if (null == (e = n.subRows) || !e.length) return !1;
        let r = !0,
          u = !1;
        return n.subRows.forEach(n => {
          if ((!u || r) && (n.getCanSelect() && (j(n, l) ? u = !0 : r = !1), n.subRows && n.subRows.length)) {
            const t = N(n, l);
            "all" === t ? u = !0 : ("some" === t && (u = !0), r = !1)
          }
        }), r ? "all" : !!u && "some"
      }
      const V = /([0-9]+)/gm;

      function A(n, l) {
        return n === l ? 0 : n > l ? 1 : -1
      }

      function E(n) {
        return "number" == typeof n ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : n + "" : "string" == typeof n ? n : ""
      }

      function H(n, l) {
        const t = n.split(V).filter(Boolean),
          e = l.split(V).filter(Boolean);
        for (; t.length && e.length;) {
          const n = t.shift(),
            l = e.shift(),
            r = parseInt(n, 10),
            u = parseInt(l, 10),
            o = [r, u].sort();
          if (isNaN(o[0])) {
            if (n > l) return 1;
            if (l > n) return -1
          } else {
            if (isNaN(o[1])) return isNaN(r) ? -1 : 1;
            if (r > u) return 1;
            if (u > r) return -1
          }
        }
        return t.length - e.length
      }
      const q = {
          alphanumeric: (n, l, t) => H(E(n.getValue(t)).toLowerCase(), E(l.getValue(t)).toLowerCase()),
          alphanumericCaseSensitive: (n, l, t) => H(E(n.getValue(t)), E(l.getValue(t))),
          text: (n, l, t) => A(E(n.getValue(t)).toLowerCase(), E(l.getValue(t)).toLowerCase()),
          textCaseSensitive: (n, l, t) => A(E(n.getValue(t)), E(l.getValue(t))),
          datetime: (n, l, t) => {
            const e = n.getValue(t),
              r = l.getValue(t);
            return e > r ? 1 : r > e ? -1 : 0
          },
          basic: (n, l, t) => A(n.getValue(t), l.getValue(t))
        },
        L = [c, {
          getInitialState: n => ({
            columnVisibility: {},
            ...n
          }),
          getDefaultOptions: n => ({
            onColumnVisibilityChange: r("columnVisibility", n)
          }),
          createColumn: (n, l) => {
            n.toggleVisibility = t => {
              n.getCanHide() && l.setColumnVisibility(l => ({
                ...l,
                [n.id]: t ?? !n.getIsVisible()
              }))
            }, n.getIsVisible = () => {
              var t, e;
              const r = n.columns;
              return null == (t = r.length ? r.some(n => n.getIsVisible()) : null == (e = l.getState().columnVisibility) ? void 0 : e[n.id]) || t
            }, n.getCanHide = () => {
              var t, e;
              return (null == (t = n.columnDef.enableHiding) || t) && (null == (e = l.options.enableHiding) || e)
            }, n.getToggleVisibilityHandler = () => l => {
              null == n.toggleVisibility || n.toggleVisibility(l.target.checked)
            }
          },
          createRow: (n, l) => {
            n.C = o(() => [n.getAllCells(), l.getState().columnVisibility], n => n.filter(n => n.column.getIsVisible()), a(l.options, "debugRows")), n.getVisibleCells = o(() => [n.getLeftVisibleCells(), n.getCenterVisibleCells(), n.getRightVisibleCells()], (n, l, t) => [...n, ...l, ...t], a(l.options, "debugRows"))
          },
          createTable: n => {
            const l = (l, t) => o(() => [t(), t().filter(n => n.getIsVisible()).map(n => n.id).join("_")], n => n.filter(n => null == n.getIsVisible ? void 0 : n.getIsVisible()), a(n.options, "debugColumns"));
            n.getVisibleFlatColumns = l(0, () => n.getAllFlatColumns()), n.getVisibleLeafColumns = l(0, () => n.getAllLeafColumns()), n.getLeftVisibleLeafColumns = l(0, () => n.getLeftLeafColumns()), n.getRightVisibleLeafColumns = l(0, () => n.getRightLeafColumns()), n.getCenterVisibleLeafColumns = l(0, () => n.getCenterLeafColumns()), n.setColumnVisibility = l => null == n.options.onColumnVisibilityChange ? void 0 : n.options.onColumnVisibilityChange(l), n.resetColumnVisibility = l => {
              var t;
              n.setColumnVisibility(l ? {} : null != (t = n.initialState.columnVisibility) ? t : {})
            }, n.toggleAllColumnsVisible = l => {
              var t;
              l = null != (t = l) ? t : !n.getIsAllColumnsVisible(), n.setColumnVisibility(n.getAllLeafColumns().reduce((n, t) => ({
                ...n,
                [t.id]: l || !(null != t.getCanHide && t.getCanHide())
              }), {}))
            }, n.getIsAllColumnsVisible = () => !n.getAllLeafColumns().some(n => !(null != n.getIsVisible && n.getIsVisible())), n.getIsSomeColumnsVisible = () => n.getAllLeafColumns().some(n => null == n.getIsVisible ? void 0 : n.getIsVisible()), n.getToggleAllColumnsVisibilityHandler = () => l => {
              var t;
              n.toggleAllColumnsVisible(null == (t = l.target) ? void 0 : t.checked)
            }
          }
        }, {
          getInitialState: n => ({
            columnOrder: [],
            ...n
          }),
          getDefaultOptions: n => ({
            onColumnOrderChange: r("columnOrder", n)
          }),
          createColumn: (n, l) => {
            n.getIndex = o(n => [B(l, n)], l => l.findIndex(l => l.id === n.id), a(l.options, "debugColumns")), n.getIsFirstColumn = t => {
              var e;
              return (null == (e = B(l, t)[0]) ? void 0 : e.id) === n.id
            }, n.getIsLastColumn = t => {
              var e;
              const r = B(l, t);
              return (null == (e = r[r.length - 1]) ? void 0 : e.id) === n.id
            }
          },
          createTable: n => {
            n.setColumnOrder = l => null == n.options.onColumnOrderChange ? void 0 : n.options.onColumnOrderChange(l), n.resetColumnOrder = l => {
              var t;
              n.setColumnOrder(l ? [] : null != (t = n.initialState.columnOrder) ? t : [])
            }, n.S = o(() => [n.getState().columnOrder, n.getState().grouping, n.options.groupedColumnMode], (n, l, t) => e => {
              let r = [];
              if (null != n && n.length) {
                const l = [...n],
                  t = [...e];
                for (; t.length && l.length;) {
                  const n = l.shift(),
                    e = t.findIndex(l => l.id === n);
                  e > -1 && r.push(t.splice(e, 1)[0])
                }
                r = [...r, ...t]
              } else r = e;
              return function(n, l, t) {
                if (null == l || !l.length || !t) return n;
                const e = n.filter(n => !l.includes(n.id));
                return "remove" === t ? e : [...l.map(l => n.find(n => n.id === l)).filter(Boolean), ...e]
              }(r, l, t)
            }, a(n.options, "debugTable"))
          }
        }, {
          getInitialState: n => ({
            columnPinning: {
              left: [],
              right: []
            },
            ...n
          }),
          getDefaultOptions: n => ({
            onColumnPinningChange: r("columnPinning", n)
          }),
          createColumn: (n, l) => {
            n.pin = t => {
              const e = n.getLeafColumns().map(n => n.id).filter(Boolean);
              l.setColumnPinning(n => {
                var l, r, u, o, a, i;
                return "right" === t ? {
                  left: (null != (u = n?.left) ? u : []).filter(n => !(null != e && e.includes(n))),
                  right: [...(null != (o = n?.right) ? o : []).filter(n => !(null != e && e.includes(n))), ...e]
                } : "left" === t ? {
                  left: [...(null != (a = n?.left) ? a : []).filter(n => !(null != e && e.includes(n))), ...e],
                  right: (null != (i = n?.right) ? i : []).filter(n => !(null != e && e.includes(n)))
                } : {
                  left: (null != (l = n?.left) ? l : []).filter(n => !(null != e && e.includes(n))),
                  right: (null != (r = n?.right) ? r : []).filter(n => !(null != e && e.includes(n)))
                }
              })
            }, n.getCanPin = () => n.getLeafColumns().some(n => {
              var t, e, r;
              return (null == (t = n.columnDef.enablePinning) || t) && (null == (e = null != (r = l.options.enableColumnPinning) ? r : l.options.enablePinning) || e)
            }), n.getIsPinned = () => {
              const t = n.getLeafColumns().map(n => n.id),
                {
                  left: e,
                  right: r
                } = l.getState().columnPinning,
                u = t.some(n => e?.includes(n)),
                o = t.some(n => r?.includes(n));
              return u ? "left" : !!o && "right"
            }, n.getPinnedIndex = () => {
              var t, e;
              const r = n.getIsPinned();
              return r ? null != (t = null == (e = l.getState().columnPinning) || null == (e = e[r]) ? void 0 : e.indexOf(n.id)) ? t : -1 : 0
            }
          },
          createRow: (n, l) => {
            n.getCenterVisibleCells = o(() => [n.C(), l.getState().columnPinning.left, l.getState().columnPinning.right], (n, l, t) => {
              const e = [...l ?? [], ...t ?? []];
              return n.filter(n => !e.includes(n.column.id))
            }, a(l.options, "debugRows")), n.getLeftVisibleCells = o(() => [n.C(), l.getState().columnPinning.left], (n, l) => (l ?? []).map(l => n.find(n => n.column.id === l)).filter(Boolean).map(n => ({
              ...n,
              position: "left"
            })), a(l.options, "debugRows")), n.getRightVisibleCells = o(() => [n.C(), l.getState().columnPinning.right], (n, l) => (l ?? []).map(l => n.find(n => n.column.id === l)).filter(Boolean).map(n => ({
              ...n,
              position: "right"
            })), a(l.options, "debugRows"))
          },
          createTable: n => {
            n.setColumnPinning = l => null == n.options.onColumnPinningChange ? void 0 : n.options.onColumnPinningChange(l), n.resetColumnPinning = l => {
              var t, e;
              return n.setColumnPinning(l ? {
                left: [],
                right: []
              } : null != (t = null == (e = n.initialState) ? void 0 : e.columnPinning) ? t : {
                left: [],
                right: []
              })
            }, n.getIsSomeColumnsPinned = l => {
              var t;
              const e = n.getState().columnPinning;
              var r, u;
              return l ? !(null == (t = e[l]) || !t.length) : !!(null != (r = e.left) && r.length || null != (u = e.right) && u.length)
            }, n.getLeftLeafColumns = o(() => [n.getAllLeafColumns(), n.getState().columnPinning.left], (n, l) => (l ?? []).map(l => n.find(n => n.id === l)).filter(Boolean), a(n.options, "debugColumns")), n.getRightLeafColumns = o(() => [n.getAllLeafColumns(), n.getState().columnPinning.right], (n, l) => (l ?? []).map(l => n.find(n => n.id === l)).filter(Boolean), a(n.options, "debugColumns")), n.getCenterLeafColumns = o(() => [n.getAllLeafColumns(), n.getState().columnPinning.left, n.getState().columnPinning.right], (n, l, t) => {
              const e = [...l ?? [], ...t ?? []];
              return n.filter(n => !e.includes(n.id))
            }, a(n.options, "debugColumns"))
          }
        }, v, {
          getDefaultColumnDef: () => ({
            filterFn: "auto"
          }),
          getInitialState: n => ({
            columnFilters: [],
            ...n
          }),
          getDefaultOptions: n => ({
            onColumnFiltersChange: r("columnFilters", n),
            filterFromLeafRows: !1,
            maxLeafRowFilterDepth: 100
          }),
          createColumn: (n, l) => {
            n.getAutoFilterFn = () => {
              const t = l.getCoreRowModel().flatRows[0],
                e = t?.getValue(n.id);
              return "string" == typeof e ? R.includesString : "number" == typeof e ? R.inNumberRange : "boolean" == typeof e || null !== e && "object" == typeof e ? R.equals : Array.isArray(e) ? R.arrIncludes : R.weakEquals
            }, n.getFilterFn = () => {
              var t, e;
              return u(n.columnDef.filterFn) ? n.columnDef.filterFn : "auto" === n.columnDef.filterFn ? n.getAutoFilterFn() : null != (t = null == (e = l.options.filterFns) ? void 0 : e[n.columnDef.filterFn]) ? t : R[n.columnDef.filterFn]
            }, n.getCanFilter = () => {
              var t, e, r;
              return (null == (t = n.columnDef.enableColumnFilter) || t) && (null == (e = l.options.enableColumnFilters) || e) && (null == (r = l.options.enableFilters) || r) && !!n.accessorFn
            }, n.getIsFiltered = () => n.getFilterIndex() > -1, n.getFilterValue = () => {
              var t;
              return null == (t = l.getState().columnFilters) || null == (t = t.find(l => l.id === n.id)) ? void 0 : t.value
            }, n.getFilterIndex = () => {
              var t, e;
              return null != (t = null == (e = l.getState().columnFilters) ? void 0 : e.findIndex(l => l.id === n.id)) ? t : -1
            }, n.setFilterValue = t => {
              l.setColumnFilters(l => {
                const r = n.getFilterFn(),
                  u = l?.find(l => l.id === n.id),
                  o = e(t, u ? u.value : void 0);
                var a;
                if (I(r, o, n)) return null != (a = l?.filter(l => l.id !== n.id)) ? a : [];
                const i = {
                  id: n.id,
                  value: o
                };
                var s;
                return u ? null != (s = l?.map(l => l.id === n.id ? i : l)) ? s : [] : null != l && l.length ? [...l, i] : [i]
              })
            }
          },
          createRow: (n, l) => {
            n.columnFilters = {}, n.columnFiltersMeta = {}
          },
          createTable: n => {
            n.setColumnFilters = l => {
              const t = n.getAllLeafColumns();
              null == n.options.onColumnFiltersChange || n.options.onColumnFiltersChange(n => {
                var r;
                return null == (r = e(l, n)) ? void 0 : r.filter(n => {
                  const l = t.find(l => l.id === n.id);
                  return !l || !I(l.getFilterFn(), n.value, l)
                })
              })
            }, n.resetColumnFilters = l => {
              var t, e;
              n.setColumnFilters(l ? [] : null != (t = null == (e = n.initialState) ? void 0 : e.columnFilters) ? t : [])
            }, n.getPreFilteredRowModel = () => n.getCoreRowModel(), n.getFilteredRowModel = () => (!n.R && n.options.getFilteredRowModel && (n.R = n.options.getFilteredRowModel(n)), n.options.manualFiltering || !n.R ? n.getPreFilteredRowModel() : n.R())
          }
        }, {
          createTable: n => {
            n.O = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, "__global__"), n.getGlobalFacetedRowModel = () => n.options.manualFiltering || !n.O ? n.getPreFilteredRowModel() : n.O(), n.I = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, "__global__"), n.getGlobalFacetedUniqueValues = () => n.I ? n.I() : new Map, n.D = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, "__global__"), n.getGlobalFacetedMinMaxValues = () => {
              if (n.D) return n.D()
            }
          }
        }, {
          getInitialState: n => ({
            globalFilter: void 0,
            ...n
          }),
          getDefaultOptions: n => ({
            onGlobalFilterChange: r("globalFilter", n),
            globalFilterFn: "auto",
            getColumnCanGlobalFilter: l => {
              var t;
              const e = null == (t = n.getCoreRowModel().flatRows[0]) || null == (t = t.v()[l.id]) ? void 0 : t.getValue();
              return "string" == typeof e || "number" == typeof e
            }
          }),
          createColumn: (n, l) => {
            n.getCanGlobalFilter = () => {
              var t, e, r, u;
              return (null == (t = n.columnDef.enableGlobalFilter) || t) && (null == (e = l.options.enableGlobalFilter) || e) && (null == (r = l.options.enableFilters) || r) && (null == (u = null == l.options.getColumnCanGlobalFilter ? void 0 : l.options.getColumnCanGlobalFilter(n)) || u) && !!n.accessorFn
            }
          },
          createTable: n => {
            n.getGlobalAutoFilterFn = () => R.includesString, n.getGlobalFilterFn = () => {
              var l, t;
              const {
                globalFilterFn: e
              } = n.options;
              return u(e) ? e : "auto" === e ? n.getGlobalAutoFilterFn() : null != (l = null == (t = n.options.filterFns) ? void 0 : t[e]) ? l : R[e]
            }, n.setGlobalFilter = l => {
              null == n.options.onGlobalFilterChange || n.options.onGlobalFilterChange(l)
            }, n.resetGlobalFilter = l => {
              n.setGlobalFilter(l ? void 0 : n.initialState.globalFilter)
            }
          }
        }, {
          getInitialState: n => ({
            sorting: [],
            ...n
          }),
          getDefaultColumnDef: () => ({
            sortingFn: "auto",
            sortUndefined: 1
          }),
          getDefaultOptions: n => ({
            onSortingChange: r("sorting", n),
            isMultiSortEvent: n => n.shiftKey
          }),
          createColumn: (n, l) => {
            n.getAutoSortingFn = () => {
              const t = l.getFilteredRowModel().flatRows.slice(10);
              let e = !1;
              for (const l of t) {
                const t = l?.getValue(n.id);
                if ("[object Date]" === {}.toString.call(t)) return q.datetime;
                if ("string" == typeof t && (e = !0, t.split(V).length > 1)) return q.alphanumeric
              }
              return e ? q.text : q.basic
            }, n.getAutoSortDir = () => {
              const t = l.getFilteredRowModel().flatRows[0];
              return "string" == typeof t?.getValue(n.id) ? "asc" : "desc"
            }, n.getSortingFn = () => {
              var t, e;
              if (!n) throw Error();
              return u(n.columnDef.sortingFn) ? n.columnDef.sortingFn : "auto" === n.columnDef.sortingFn ? n.getAutoSortingFn() : null != (t = null == (e = l.options.sortingFns) ? void 0 : e[n.columnDef.sortingFn]) ? t : q[n.columnDef.sortingFn]
            }, n.toggleSorting = (t, e) => {
              const r = n.getNextSortingOrder(),
                u = "u" > typeof t && null !== t;
              l.setSorting(o => {
                const a = o?.find(l => l.id === n.id),
                  i = o?.findIndex(l => l.id === n.id);
                let s, c = [],
                  f = u ? t : "desc" === r;
                var d;
                return s = null != o && o.length && n.getCanMultiSort() && e ? a ? "toggle" : "add" : null != o && o.length && i !== o.length - 1 ? "replace" : a ? "toggle" : "replace", "toggle" === s && (u || r || (s = "remove")), "add" === s ? (c = [...o, {
                  id: n.id,
                  desc: f
                }], c.splice(0, c.length - (null != (d = l.options.maxMultiSortColCount) ? d : Number.MAX_SAFE_INTEGER))) : c = "toggle" === s ? o.map(l => l.id === n.id ? {
                  ...l,
                  desc: f
                } : l) : "remove" === s ? o.filter(l => l.id !== n.id) : [{
                  id: n.id,
                  desc: f
                }], c
              })
            }, n.getFirstSortDir = () => {
              var t, e;
              return (null != (t = null != (e = n.columnDef.sortDescFirst) ? e : l.options.sortDescFirst) ? t : "desc" === n.getAutoSortDir()) ? "desc" : "asc"
            }, n.getNextSortingOrder = t => {
              var e, r;
              const u = n.getFirstSortDir(),
                o = n.getIsSorted();
              return o ? !!(o === u || null != (e = l.options.enableSortingRemoval) && !e || t && null != (r = l.options.enableMultiRemove) && !r) && ("desc" === o ? "asc" : "desc") : u
            }, n.getCanSort = () => {
              var t, e;
              return (null == (t = n.columnDef.enableSorting) || t) && (null == (e = l.options.enableSorting) || e) && !!n.accessorFn
            }, n.getCanMultiSort = () => {
              var t, e;
              return null != (t = null != (e = n.columnDef.enableMultiSort) ? e : l.options.enableMultiSort) ? t : !!n.accessorFn
            }, n.getIsSorted = () => {
              var t;
              const e = null == (t = l.getState().sorting) ? void 0 : t.find(l => l.id === n.id);
              return !!e && (e.desc ? "desc" : "asc")
            }, n.getSortIndex = () => {
              var t, e;
              return null != (t = null == (e = l.getState().sorting) ? void 0 : e.findIndex(l => l.id === n.id)) ? t : -1
            }, n.clearSorting = () => {
              l.setSorting(l => null != l && l.length ? l.filter(l => l.id !== n.id) : [])
            }, n.getToggleSortingHandler = () => {
              const t = n.getCanSort();
              return e => {
                t && (null == e.persist || e.persist(), null == n.toggleSorting || n.toggleSorting(void 0, !!n.getCanMultiSort() && (null == l.options.isMultiSortEvent ? void 0 : l.options.isMultiSortEvent(e))))
              }
            }
          },
          createTable: n => {
            n.setSorting = l => null == n.options.onSortingChange ? void 0 : n.options.onSortingChange(l), n.resetSorting = l => {
              var t, e;
              n.setSorting(l ? [] : null != (t = null == (e = n.initialState) ? void 0 : e.sorting) ? t : [])
            }, n.getPreSortedRowModel = () => n.getGroupedRowModel(), n.getSortedRowModel = () => (!n._ && n.options.getSortedRowModel && (n._ = n.options.getSortedRowModel(n)), n.options.manualSorting || !n._ ? n.getPreSortedRowModel() : n._())
          }
        }, {
          getDefaultColumnDef: () => ({
            aggregatedCell: n => {
              var l, t;
              return null != (l = null == (t = n.getValue()) || null == t.toString ? void 0 : t.toString()) ? l : null
            },
            aggregationFn: "auto"
          }),
          getInitialState: n => ({
            grouping: [],
            ...n
          }),
          getDefaultOptions: n => ({
            onGroupingChange: r("grouping", n),
            groupedColumnMode: "reorder"
          }),
          createColumn: (n, l) => {
            n.toggleGrouping = () => {
              l.setGrouping(l => null != l && l.includes(n.id) ? l.filter(l => l !== n.id) : [...l ?? [], n.id])
            }, n.getCanGroup = () => {
              var t, e;
              return (null == (t = n.columnDef.enableGrouping) || t) && (null == (e = l.options.enableGrouping) || e) && (!!n.accessorFn || !!n.columnDef.getGroupingValue)
            }, n.getIsGrouped = () => {
              var t;
              return null == (t = l.getState().grouping) ? void 0 : t.includes(n.id)
            }, n.getGroupedIndex = () => {
              var t;
              return null == (t = l.getState().grouping) ? void 0 : t.indexOf(n.id)
            }, n.getToggleGroupingHandler = () => {
              const l = n.getCanGroup();
              return () => {
                l && n.toggleGrouping()
              }
            }, n.getAutoAggregationFn = () => {
              const t = l.getCoreRowModel().flatRows[0],
                e = t?.getValue(n.id);
              return "number" == typeof e ? z.sum : "[object Date]" === {}.toString.call(e) ? z.extent : void 0
            }, n.getAggregationFn = () => {
              var t, e;
              if (!n) throw Error();
              return u(n.columnDef.aggregationFn) ? n.columnDef.aggregationFn : "auto" === n.columnDef.aggregationFn ? n.getAutoAggregationFn() : null != (t = null == (e = l.options.aggregationFns) ? void 0 : e[n.columnDef.aggregationFn]) ? t : z[n.columnDef.aggregationFn]
            }
          },
          createTable: n => {
            n.setGrouping = l => null == n.options.onGroupingChange ? void 0 : n.options.onGroupingChange(l), n.resetGrouping = l => {
              var t, e;
              n.setGrouping(l ? [] : null != (t = null == (e = n.initialState) ? void 0 : e.grouping) ? t : [])
            }, n.getPreGroupedRowModel = () => n.getFilteredRowModel(), n.getGroupedRowModel = () => (!n.M && n.options.getGroupedRowModel && (n.M = n.options.getGroupedRowModel(n)), n.options.manualGrouping || !n.M ? n.getPreGroupedRowModel() : n.M())
          },
          createRow: (n, l) => {
            n.getIsGrouped = () => !!n.groupingColumnId, n.getGroupingValue = t => {
              if (n.T.hasOwnProperty(t)) return n.T[t];
              const e = l.getColumn(t);
              return null != e && e.columnDef.getGroupingValue ? (n.T[t] = e.columnDef.getGroupingValue(n.original), n.T[t]) : n.getValue(t)
            }, n.T = {}
          },
          createCell: (n, l, t, e) => {
            n.getIsGrouped = () => l.getIsGrouped() && l.id === t.groupingColumnId, n.getIsPlaceholder = () => !n.getIsGrouped() && l.getIsGrouped(), n.getIsAggregated = () => {
              var l;
              return !n.getIsGrouped() && !n.getIsPlaceholder() && !(null == (l = t.subRows) || !l.length)
            }
          }
        }, {
          getInitialState: n => ({
            expanded: {},
            ...n
          }),
          getDefaultOptions: n => ({
            onExpandedChange: r("expanded", n),
            paginateExpandedRows: !0
          }),
          createTable: n => {
            let l = !1,
              t = !1;
            n.B = () => {
              var e, r;
              if (l) {
                if (null != (e = null != (r = n.options.autoResetAll) ? r : n.options.autoResetExpanded) ? e : !n.options.manualExpanding) {
                  if (t) return;
                  t = !0, n.F(() => {
                    n.resetExpanded(), t = !1
                  })
                }
              } else n.F(() => {
                l = !0
              })
            }, n.setExpanded = l => null == n.options.onExpandedChange ? void 0 : n.options.onExpandedChange(l), n.toggleAllRowsExpanded = l => {
              l ?? !n.getIsAllRowsExpanded() ? n.setExpanded(!0) : n.setExpanded({})
            }, n.resetExpanded = l => {
              var t, e;
              n.setExpanded(l ? {} : null != (t = null == (e = n.initialState) ? void 0 : e.expanded) ? t : {})
            }, n.getCanSomeRowsExpand = () => n.getPrePaginationRowModel().flatRows.some(n => n.getCanExpand()), n.getToggleAllRowsExpandedHandler = () => l => {
              null == l.persist || l.persist(), n.toggleAllRowsExpanded()
            }, n.getIsSomeRowsExpanded = () => {
              const l = n.getState().expanded;
              return !0 === l || Object.values(l).some(Boolean)
            }, n.getIsAllRowsExpanded = () => {
              const l = n.getState().expanded;
              return "boolean" == typeof l ? !0 === l : !(!Object.keys(l).length || n.getRowModel().flatRows.some(n => !n.getIsExpanded()))
            }, n.getExpandedDepth = () => {
              let l = 0;
              return (!0 === n.getState().expanded ? Object.keys(n.getRowModel().rowsById) : Object.keys(n.getState().expanded)).forEach(n => {
                const t = n.split(".");
                l = Math.max(l, t.length)
              }), l
            }, n.getPreExpandedRowModel = () => n.getSortedRowModel(), n.getExpandedRowModel = () => (!n.P && n.options.getExpandedRowModel && (n.P = n.options.getExpandedRowModel(n)), n.options.manualExpanding || !n.P ? n.getPreExpandedRowModel() : n.P())
          },
          createRow: (n, l) => {
            n.toggleExpanded = t => {
              l.setExpanded(e => {
                var r;
                const u = !0 === e || !(null == e || !e[n.id]);
                let o = {};
                if (!0 === e ? Object.keys(l.getRowModel().rowsById).forEach(n => {
                    o[n] = !0
                  }) : o = e, t = null != (r = t) ? r : !u, !u && t) return {
                  ...o,
                  [n.id]: !0
                };
                if (u && !t) {
                  const {
                    [n.id]: l, ...t
                  } = o;
                  return t
                }
                return e
              })
            }, n.getIsExpanded = () => {
              var t;
              const e = l.getState().expanded;
              return !!(null != (t = null == l.options.getIsRowExpanded ? void 0 : l.options.getIsRowExpanded(n)) ? t : !0 === e || e?.[n.id])
            }, n.getCanExpand = () => {
              var t, e, r;
              return null != (t = null == l.options.getRowCanExpand ? void 0 : l.options.getRowCanExpand(n)) ? t : (null == (e = l.options.enableExpanding) || e) && !(null == (r = n.subRows) || !r.length)
            }, n.getIsAllParentsExpanded = () => {
              let t = !0,
                e = n;
              for (; t && e.parentId;) e = l.getRow(e.parentId, !0), t = e.getIsExpanded();
              return t
            }, n.getToggleExpandedHandler = () => {
              const l = n.getCanExpand();
              return () => {
                l && n.toggleExpanded()
              }
            }
          }
        }, {
          getInitialState: n => ({
            ...n,
            pagination: {
              pageIndex: 0,
              pageSize: 10,
              ...n?.pagination
            }
          }),
          getDefaultOptions: n => ({
            onPaginationChange: r("pagination", n)
          }),
          createTable: n => {
            let l = !1,
              t = !1;
            n.j = () => {
              var e, r;
              if (l) {
                if (null != (e = null != (r = n.options.autoResetAll) ? r : n.options.autoResetPageIndex) ? e : !n.options.manualPagination) {
                  if (t) return;
                  t = !0, n.F(() => {
                    n.resetPageIndex(), t = !1
                  })
                }
              } else n.F(() => {
                l = !0
              })
            }, n.setPagination = l => null == n.options.onPaginationChange ? void 0 : n.options.onPaginationChange(n => e(l, n)), n.resetPagination = l => {
              var t;
              n.setPagination(l ? {
                pageIndex: 0,
                pageSize: 10
              } : null != (t = n.initialState.pagination) ? t : {
                pageIndex: 0,
                pageSize: 10
              })
            }, n.setPageIndex = l => {
              n.setPagination(t => {
                let r = e(l, t.pageIndex);
                const u = typeof n.options.pageCount > "u" || -1 === n.options.pageCount ? Number.MAX_SAFE_INTEGER : n.options.pageCount - 1;
                return r = Math.max(0, Math.min(r, u)), {
                  ...t,
                  pageIndex: r
                }
              })
            }, n.resetPageIndex = l => {
              var t, e;
              n.setPageIndex(l ? 0 : null != (t = null == (e = n.initialState) || null == (e = e.pagination) ? void 0 : e.pageIndex) ? t : 0)
            }, n.resetPageSize = l => {
              var t, e;
              n.setPageSize(l ? 10 : null != (t = null == (e = n.initialState) || null == (e = e.pagination) ? void 0 : e.pageSize) ? t : 10)
            }, n.setPageSize = l => {
              n.setPagination(n => {
                const t = Math.max(1, e(l, n.pageSize)),
                  r = n.pageSize * n.pageIndex,
                  u = Math.floor(r / t);
                return {
                  ...n,
                  pageIndex: u,
                  pageSize: t
                }
              })
            }, n.setPageCount = l => n.setPagination(t => {
              var r;
              let u = e(l, null != (r = n.options.pageCount) ? r : -1);
              return "number" == typeof u && (u = Math.max(-1, u)), {
                ...t,
                pageCount: u
              }
            }), n.getPageOptions = o(() => [n.getPageCount()], n => {
              let l = [];
              return n && n > 0 && (l = [...Array(n)].fill(null).map((n, l) => l)), l
            }, a(n.options, "debugTable")), n.getCanPreviousPage = () => n.getState().pagination.pageIndex > 0, n.getCanNextPage = () => {
              const {
                pageIndex: l
              } = n.getState().pagination, t = n.getPageCount();
              return -1 === t || 0 !== t && t - 1 > l
            }, n.previousPage = () => n.setPageIndex(n => n - 1), n.nextPage = () => n.setPageIndex(n => n + 1), n.firstPage = () => n.setPageIndex(0), n.lastPage = () => n.setPageIndex(n.getPageCount() - 1), n.getPrePaginationRowModel = () => n.getExpandedRowModel(), n.getPaginationRowModel = () => (!n.N && n.options.getPaginationRowModel && (n.N = n.options.getPaginationRowModel(n)), n.options.manualPagination || !n.N ? n.getPrePaginationRowModel() : n.N()), n.getPageCount = () => {
              var l;
              return null != (l = n.options.pageCount) ? l : Math.ceil(n.getRowCount() / n.getState().pagination.pageSize)
            }, n.getRowCount = () => {
              var l;
              return null != (l = n.options.rowCount) ? l : n.getPrePaginationRowModel().rows.length
            }
          }
        }, {
          getInitialState: n => ({
            rowPinning: {
              top: [],
              bottom: []
            },
            ...n
          }),
          getDefaultOptions: n => ({
            onRowPinningChange: r("rowPinning", n)
          }),
          createRow: (n, l) => {
            n.pin = (t, e, r) => {
              const u = e ? n.getLeafRows().map(n => {
                  let {
                    id: l
                  } = n;
                  return l
                }) : [],
                o = r ? n.getParentRows().map(n => {
                  let {
                    id: l
                  } = n;
                  return l
                }) : [],
                a = new Set([...o, n.id, ...u]);
              l.setRowPinning(n => {
                var l, e, r, u, o, i;
                return "bottom" === t ? {
                  top: (null != (r = n?.top) ? r : []).filter(n => !(null != a && a.has(n))),
                  bottom: [...(null != (u = n?.bottom) ? u : []).filter(n => !(null != a && a.has(n))), ...Array.from(a)]
                } : "top" === t ? {
                  top: [...(null != (o = n?.top) ? o : []).filter(n => !(null != a && a.has(n))), ...Array.from(a)],
                  bottom: (null != (i = n?.bottom) ? i : []).filter(n => !(null != a && a.has(n)))
                } : {
                  top: (null != (l = n?.top) ? l : []).filter(n => !(null != a && a.has(n))),
                  bottom: (null != (e = n?.bottom) ? e : []).filter(n => !(null != a && a.has(n)))
                }
              })
            }, n.getCanPin = () => {
              var t;
              const {
                enableRowPinning: e,
                enablePinning: r
              } = l.options;
              return "function" == typeof e ? e(n) : null == (t = e ?? r) || t
            }, n.getIsPinned = () => {
              const t = [n.id],
                {
                  top: e,
                  bottom: r
                } = l.getState().rowPinning,
                u = t.some(n => e?.includes(n)),
                o = t.some(n => r?.includes(n));
              return u ? "top" : !!o && "bottom"
            }, n.getPinnedIndex = () => {
              var t, e;
              const r = n.getIsPinned();
              if (!r) return -1;
              const u = null == (t = l.V(r)) ? void 0 : t.map(n => {
                let {
                  id: l
                } = n;
                return l
              });
              return null != (e = u?.indexOf(n.id)) ? e : -1
            }
          },
          createTable: n => {
            n.setRowPinning = l => null == n.options.onRowPinningChange ? void 0 : n.options.onRowPinningChange(l), n.resetRowPinning = l => {
              var t, e;
              return n.setRowPinning(l ? {
                top: [],
                bottom: []
              } : null != (t = null == (e = n.initialState) ? void 0 : e.rowPinning) ? t : {
                top: [],
                bottom: []
              })
            }, n.getIsSomeRowsPinned = l => {
              var t;
              const e = n.getState().rowPinning;
              var r, u;
              return l ? !(null == (t = e[l]) || !t.length) : !!(null != (r = e.top) && r.length || null != (u = e.bottom) && u.length)
            }, n.V = o(l => [n.getRowModel().rows, n.getState().rowPinning[l], l], (l, t, e) => {
              var r;
              return (null == (r = n.options.keepPinnedRows) || r ? (t ?? []).map(l => {
                const t = n.getRow(l, !0);
                return t.getIsAllParentsExpanded() ? t : null
              }) : (t ?? []).map(n => l.find(l => l.id === n))).filter(Boolean).map(n => ({
                ...n,
                position: e
              }))
            }, a(n.options, "debugRows")), n.getTopRows = () => n.V("top"), n.getBottomRows = () => n.V("bottom"), n.getCenterRows = o(() => [n.getRowModel().rows, n.getState().rowPinning.top, n.getState().rowPinning.bottom], (n, l, t) => {
              const e = new Set([...l ?? [], ...t ?? []]);
              return n.filter(n => !e.has(n.id))
            }, a(n.options, "debugRows"))
          }
        }, x, M];

      function k(n) {
        var l, t;
        const r = [...L, ...null != (l = n.u) ? l : []];
        let u = {
          u: r
        };
        const i = u.u.reduce((n, l) => Object.assign(n, null == l.getDefaultOptions ? void 0 : l.getDefaultOptions(u)), {});
        let s = {
          ...null != (t = n.initialState) ? t : {}
        };
        u.u.forEach(n => {
          var l;
          s = null != (l = null == n.getInitialState ? void 0 : n.getInitialState(s)) ? l : s
        });
        const c = [];
        let f = !1;
        const d = {
          u: r,
          options: {
            ...i,
            ...n
          },
          initialState: s,
          F: n => {
            c.push(n), f || (f = !0, Promise.resolve().then(() => {
              for (; c.length;) c.shift()();
              f = !1
            }).catch(n => setTimeout(() => {
              throw n
            })))
          },
          reset: () => {
            u.setState(u.initialState)
          },
          setOptions: n => {
            const l = e(n, u.options);
            u.options = (n => u.options.mergeOptions ? u.options.mergeOptions(i, n) : {
              ...i,
              ...n
            })(l)
          },
          getState: () => u.options.state,
          setState: n => {
            null == u.options.onStateChange || u.options.onStateChange(n)
          },
          A: (n, l, t) => {
            var e;
            return null != (e = null == u.options.getRowId ? void 0 : u.options.getRowId(n, l, t)) ? e : "" + (t ? [t.id, l].join(".") : l)
          },
          getCoreRowModel: () => (u.H || (u.H = u.options.getCoreRowModel(u)), u.H()),
          getRowModel: () => u.getPaginationRowModel(),
          getRow: (n, l) => {
            let t = (l ? u.getPrePaginationRowModel() : u.getRowModel()).rowsById[n];
            if (!t && (t = u.getCoreRowModel().rowsById[n], !t)) throw Error();
            return t
          },
          q: o(() => [u.options.defaultColumn], n => {
            var l;
            return n = null != (l = n) ? l : {}, {
              header: n => {
                const l = n.header.column.columnDef;
                return l.accessorKey ? l.accessorKey : l.accessorFn ? l.id : null
              },
              cell: n => {
                var l, t;
                return null != (l = null == (t = n.renderValue()) || null == t.toString ? void 0 : t.toString()) ? l : null
              },
              ...u.u.reduce((n, l) => Object.assign(n, null == l.getDefaultColumnDef ? void 0 : l.getDefaultColumnDef()), {}),
              ...n
            }
          }, a(n, "debugColumns")),
          L: () => u.options.columns,
          getAllColumns: o(() => [u.L()], n => {
            const l = function(n, t, e) {
              return void 0 === e && (e = 0), n.map(n => {
                const r = function(n, l, t, e) {
                    var r, u;
                    const i = {
                        ...n.q(),
                        ...l
                      },
                      s = i.accessorKey;
                    let c, f = null != (r = null != (u = i.id) ? u : s ? s.replace(".", "_") : void 0) ? r : "string" == typeof i.header ? i.header : void 0;
                    if (i.accessorFn ? c = i.accessorFn : s && (c = s.includes(".") ? n => {
                        let l = n;
                        for (const n of s.split(".")) {
                          var t;
                          l = null == (t = l) ? void 0 : t[n]
                        }
                        return l
                      } : n => n[i.accessorKey]), !f) throw Error();
                    let d = {
                      id: f + "",
                      accessorFn: c,
                      parent: e,
                      depth: t,
                      columnDef: i,
                      columns: [],
                      getFlatColumns: o(() => [!0], () => {
                        var n;
                        return [d, ...null == (n = d.columns) ? void 0 : n.flatMap(n => n.getFlatColumns())]
                      }, a(n.options, "debugColumns")),
                      getLeafColumns: o(() => [n.S()], n => {
                        var l;
                        return null != (l = d.columns) && l.length ? n(d.columns.flatMap(n => n.getLeafColumns())) : [d]
                      }, a(n.options, "debugColumns"))
                    };
                    for (const l of n.u) null == l.createColumn || l.createColumn(d, n);
                    return d
                  }(u, n, e, t),
                  i = n;
                return r.columns = i.columns ? l(i.columns, r, e + 1) : [], r
              })
            };
            return l(n)
          }, a(n, "debugColumns")),
          getAllFlatColumns: o(() => [u.getAllColumns()], n => n.flatMap(n => n.getFlatColumns()), a(n, "debugColumns")),
          k: o(() => [u.getAllFlatColumns()], n => n.reduce((n, l) => (n[l.id] = l, n), {}), a(n, "debugColumns")),
          getAllLeafColumns: o(() => [u.getAllColumns(), u.S()], (n, l) => l(n.flatMap(n => n.getLeafColumns())), a(n, "debugColumns")),
          getColumn: n => u.k()[n]
        };
        Object.assign(u, d);
        for (let n = 0; n < u.u.length; n++) {
          const l = u.u[n];
          null == l || null == l.createTable || l.createTable(u)
        }
        return u
      }

      function $() {
        return n => o(() => [n.options.data], l => {
          const t = {
              rows: [],
              flatRows: [],
              rowsById: {}
            },
            e = function(l, r, u) {
              void 0 === r && (r = 0);
              const o = [];
              for (let i = 0; i < l.length; i++) {
                const s = d(n, n.A(l[i], i, u), l[i], i, r, void 0, u?.id);
                var a;
                t.flatRows.push(s), t.rowsById[s.id] = s, o.push(s), n.options.getSubRows && (s.originalSubRows = n.options.getSubRows(l[i], i), null != (a = s.originalSubRows) && a.length && (s.subRows = e(s.originalSubRows, r + 1, s)))
              }
              return o
            };
          return t.rows = e(l), t
        }, a(n.options, "debugTable", 0, () => n.j()))
      }

      function G() {
        return n => o(() => [n.getPreFilteredRowModel(), n.getState().columnFilters, n.getState().globalFilter], (l, t, e) => {
          if (!l.rows.length || (null == t || !t.length) && !e) {
            for (let n = 0; n < l.flatRows.length; n++) l.flatRows[n].columnFilters = {}, l.flatRows[n].columnFiltersMeta = {};
            return l
          }
          const r = [],
            u = [];
          (t ?? []).forEach(l => {
            var t;
            const e = n.getColumn(l.id);
            if (!e) return;
            const u = e.getFilterFn();
            u && r.push({
              id: l.id,
              filterFn: u,
              resolvedValue: null != (t = null == u.resolveFilterValue ? void 0 : u.resolveFilterValue(l.value)) ? t : l.value
            })
          });
          const o = (t ?? []).map(n => n.id),
            a = n.getGlobalFilterFn(),
            i = n.getAllLeafColumns().filter(n => n.getCanGlobalFilter());
          let s, c;
          e && a && i.length && (o.push("__global__"), i.forEach(n => {
            var l;
            u.push({
              id: n.id,
              filterFn: a,
              resolvedValue: null != (l = null == a.resolveFilterValue ? void 0 : a.resolveFilterValue(e)) ? l : e
            })
          }));
          for (let n = 0; n < l.flatRows.length; n++) {
            const t = l.flatRows[n];
            if (t.columnFilters = {}, r.length)
              for (let n = 0; n < r.length; n++) {
                s = r[n];
                const l = s.id;
                t.columnFilters[l] = s.filterFn(t, l, s.resolvedValue, n => {
                  t.columnFiltersMeta[l] = n
                })
              }
            if (u.length) {
              for (let n = 0; n < u.length; n++) {
                c = u[n];
                const l = c.id;
                if (c.filterFn(t, l, c.resolvedValue, n => {
                    t.columnFiltersMeta[l] = n
                  })) {
                  t.columnFilters.$ = !0;
                  break
                }
              }!0 !== t.columnFilters.$ && (t.columnFilters.$ = !1)
            }
          }
          return function(n, l, t) {
            return t.options.filterFromLeafRows ? function(n, l, t) {
              var e;
              const r = [],
                u = {},
                o = null != (e = t.options.maxLeafRowFilterDepth) ? e : 100,
                a = function(n, e) {
                  void 0 === e && (e = 0);
                  const i = [];
                  for (let c = 0; c < n.length; c++) {
                    var s;
                    let f = n[c];
                    const v = d(t, f.id, f.original, f.index, f.depth, void 0, f.parentId);
                    if (v.columnFilters = f.columnFilters, null != (s = f.subRows) && s.length && o > e) {
                      if (v.subRows = a(f.subRows, e + 1), f = v, l(f) && !v.subRows.length) {
                        i.push(f), u[f.id] = f, r.push(f);
                        continue
                      }
                      if (l(f) || v.subRows.length) {
                        i.push(f), u[f.id] = f, r.push(f);
                        continue
                      }
                    } else f = v, l(f) && (i.push(f), u[f.id] = f, r.push(f))
                  }
                  return i
                };
              return {
                rows: a(n),
                flatRows: r,
                rowsById: u
              }
            }(n, l, t) : function(n, l, t) {
              var e;
              const r = [],
                u = {},
                o = null != (e = t.options.maxLeafRowFilterDepth) ? e : 100,
                a = function(n, e) {
                  void 0 === e && (e = 0);
                  const i = [];
                  for (let c = 0; c < n.length; c++) {
                    let f = n[c];
                    if (l(f)) {
                      var s;
                      if (null != (s = f.subRows) && s.length && o > e) {
                        const n = d(t, f.id, f.original, f.index, f.depth, void 0, f.parentId);
                        n.subRows = a(f.subRows, e + 1), f = n
                      }
                      i.push(f), r.push(f), u[f.id] = f
                    }
                  }
                  return i
                };
              return {
                rows: a(n),
                flatRows: r,
                rowsById: u
              }
            }(n, l, t)
          }(l.rows, n => {
            for (let l = 0; l < o.length; l++)
              if (!1 === n.columnFilters[o[l]]) return !1;
            return !0
          }, n)
        }, a(n.options, "debugTable", 0, () => n.j()))
      }

      function U() {
        return n => o(() => [n.getState().sorting, n.getPreSortedRowModel()], (l, t) => {
          if (!t.rows.length || null == l || !l.length) return t;
          const e = n.getState().sorting,
            r = [],
            u = e.filter(l => {
              var t;
              return null == (t = n.getColumn(l.id)) ? void 0 : t.getCanSort()
            }),
            o = {};
          u.forEach(l => {
            const t = n.getColumn(l.id);
            t && (o[l.id] = {
              sortUndefined: t.columnDef.sortUndefined,
              invertSorting: t.columnDef.invertSorting,
              sortingFn: t.getSortingFn()
            })
          });
          const a = n => {
            const l = n.map(n => ({
              ...n
            }));
            return l.sort((n, l) => {
              for (let e = 0; e < u.length; e += 1) {
                var t;
                const r = u[e],
                  a = o[r.id],
                  i = a.sortUndefined,
                  s = null != (t = r?.desc) && t;
                let c = 0;
                if (i) {
                  const t = void 0 === n.getValue(r.id),
                    e = void 0 === l.getValue(r.id);
                  if (t || e) {
                    if ("first" === i) return t ? -1 : 1;
                    if ("last" === i) return t ? 1 : -1;
                    c = t && e ? 0 : t ? i : -i
                  }
                }
                if (0 === c && (c = a.sortingFn(n, l, r.id)), 0 !== c) return s && (c *= -1), a.invertSorting && (c *= -1), c
              }
              return n.index - l.index
            }), l.forEach(n => {
              var l;
              r.push(n), null != (l = n.subRows) && l.length && (n.subRows = a(n.subRows))
            }), l
          };
          return {
            rows: a(t.rows),
            flatRows: r,
            rowsById: t.rowsById
          }
        }, a(n.options, "debugTable", 0, () => n.j()))
      }
    },
    79149: (n, l, t) => {
      t.d(l, {
        Kv: () => u,
        N4: () => o
      });
      var e = t(96540),
        r = t(33888);

      function u(n, l) {
        return n ? function(n) {
          return function(n) {
            return "function" == typeof n && (() => {
              const l = Object.getPrototypeOf(n);
              return l.prototype && l.prototype.isReactComponent
            })()
          }(n) || "function" == typeof n || function(n) {
            return "object" == typeof n && "symbol" == typeof n.$$typeof && ["react.memo", "react.forward_ref"].includes(n.$$typeof.description)
          }(n)
        }(n) ? e.createElement(n, l) : n : null
      }

      function o(n) {
        const l = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...n
          },
          [t] = e.useState(() => ({
            current: (0, r.ZR)(l)
          })),
          [u, o] = e.useState(() => t.current.initialState);
        return t.current.setOptions(l => ({
          ...l,
          ...n,
          state: {
            ...u,
            ...n.state
          },
          onStateChange: l => {
            o(l), null == n.onStateChange || n.onStateChange(l)
          }
        })), t.current
      }
    }
  }
]);
