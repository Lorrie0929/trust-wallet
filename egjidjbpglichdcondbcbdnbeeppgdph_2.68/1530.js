"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1530], {
    33888: (n, e, t) => {
      function l(n, e) {
        return "function" == typeof n ? n(e) : n
      }

      function r(n, e) {
        return t => {
          e.setState(e => ({
            ...e,
            [n]: l(t, e[n])
          }))
        }
      }

      function u(n) {
        return n instanceof Function
      }

      function o(n, e, t) {
        let l, r = [];
        return u => {
          let o;
          t.key && t.debug && (o = Date.now());
          const a = n(u);
          if (a.length === r.length && !a.some((n, e) => r[e] !== n)) return l;
          let i;
          if (r = a, t.key && t.debug && (i = Date.now()), l = e(...a), null == t || null == t.onChange || t.onChange(l), t.key && t.debug && null != t && t.debug()) {
            const n = Math.round(100 * (Date.now() - o)) / 100,
              e = Math.round(100 * (Date.now() - i)) / 100,
              l = e / 16,
              r = (n, e) => {
                for (n += ""; n.length < e;) n = " " + n;
                return n
              };
            console.info(`%c⏱ ${r(e,5)} /${r(n,5)} ms`, `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*l,120))}deg 100% 31%);`, t?.key)
          }
          return l
        }
      }

      function a(n, e, t, l) {
        return {
          debug: () => {
            var t;
            return null != (t = n?.debugAll) ? t : n[e]
          },
          key: t,
          onChange: l
        }
      }
      t.d(e, {
        HT: () => $,
        ZR: () => E,
        h5: () => U,
        hM: () => k
      });
      const i = "debugHeaders";

      function s(n, e, t) {
        var l;
        let r = {
          id: null != (l = t.id) ? l : e.id,
          column: e,
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
              e = t => {
                t.subHeaders && t.subHeaders.length && t.subHeaders.map(e), n.push(t)
              };
            return e(r), n
          },
          getContext: () => ({
            table: n,
            header: r,
            column: e
          })
        };
        return n.t.forEach(e => {
          null == e.createHeader || e.createHeader(r, n)
        }), r
      }
      const c = {
        createTable: n => {
          n.getHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.left, n.getState().columnPinning.right], (e, t, l, r) => {
            var u, o;
            const a = null != (u = l?.map(n => t.find(e => e.id === n)).filter(Boolean)) ? u : [],
              i = null != (o = r?.map(n => t.find(e => e.id === n)).filter(Boolean)) ? o : [];
            return d(e, [...a, ...t.filter(n => !(null != l && l.includes(n.id) || null != r && r.includes(n.id))), ...i], n)
          }, a(n.options, i, "getHeaderGroups")), n.getCenterHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.left, n.getState().columnPinning.right], (e, t, l, r) => d(e, t = t.filter(n => !(null != l && l.includes(n.id) || null != r && r.includes(n.id))), n, "center"), a(n.options, i, "getCenterHeaderGroups")), n.getLeftHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.left], (e, t, l) => {
            var r;
            return d(e, null != (r = l?.map(n => t.find(e => e.id === n)).filter(Boolean)) ? r : [], n, "left")
          }, a(n.options, i, "getLeftHeaderGroups")), n.getRightHeaderGroups = o(() => [n.getAllColumns(), n.getVisibleLeafColumns(), n.getState().columnPinning.right], (e, t, l) => {
            var r;
            return d(e, null != (r = l?.map(n => t.find(e => e.id === n)).filter(Boolean)) ? r : [], n, "right")
          }, a(n.options, i, "getRightHeaderGroups")), n.getFooterGroups = o(() => [n.getHeaderGroups()], n => [...n].reverse(), a(n.options, i, "getFooterGroups")), n.getLeftFooterGroups = o(() => [n.getLeftHeaderGroups()], n => [...n].reverse(), a(n.options, i, "getLeftFooterGroups")), n.getCenterFooterGroups = o(() => [n.getCenterHeaderGroups()], n => [...n].reverse(), a(n.options, i, "getCenterFooterGroups")), n.getRightFooterGroups = o(() => [n.getRightHeaderGroups()], n => [...n].reverse(), a(n.options, i, "getRightFooterGroups")), n.getFlatHeaders = o(() => [n.getHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i, "getFlatHeaders")), n.getLeftFlatHeaders = o(() => [n.getLeftHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i, "getLeftFlatHeaders")), n.getCenterFlatHeaders = o(() => [n.getCenterHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i, "getCenterFlatHeaders")), n.getRightFlatHeaders = o(() => [n.getRightHeaderGroups()], n => n.map(n => n.headers).flat(), a(n.options, i, "getRightFlatHeaders")), n.getCenterLeafHeaders = o(() => [n.getCenterFlatHeaders()], n => n.filter(n => {
            var e;
            return !(null != (e = n.subHeaders) && e.length)
          }), a(n.options, i, "getCenterLeafHeaders")), n.getLeftLeafHeaders = o(() => [n.getLeftFlatHeaders()], n => n.filter(n => {
            var e;
            return !(null != (e = n.subHeaders) && e.length)
          }), a(n.options, i, "getLeftLeafHeaders")), n.getRightLeafHeaders = o(() => [n.getRightFlatHeaders()], n => n.filter(n => {
            var e;
            return !(null != (e = n.subHeaders) && e.length)
          }), a(n.options, i, "getRightLeafHeaders")), n.getLeafHeaders = o(() => [n.getLeftHeaderGroups(), n.getCenterHeaderGroups(), n.getRightHeaderGroups()], (n, e, t) => {
            var l, r, u, o, a, i;
            return [...null != (l = null == (r = n[0]) ? void 0 : r.headers) ? l : [], ...null != (u = null == (o = e[0]) ? void 0 : o.headers) ? u : [], ...null != (a = null == (i = t[0]) ? void 0 : i.headers) ? a : []].map(n => n.getLeafHeaders()).flat()
          }, a(n.options, i, "getLeafHeaders"))
        }
      };

      function d(n, e, t, l) {
        var r, u;
        let o = 0;
        const a = function(n, e) {
          void 0 === e && (e = 1), o = Math.max(o, e), n.filter(n => n.getIsVisible()).forEach(n => {
            var t;
            null != (t = n.columns) && t.length && a(n.columns, e + 1)
          }, 0)
        };
        a(n);
        let i = [];
        const c = (n, e) => {
            const r = {
                depth: e,
                id: [l, "" + e].filter(Boolean).join("_"),
                headers: []
              },
              u = [];
            n.forEach(n => {
              const o = [...u].reverse()[0];
              let a, i = !1;
              if (n.column.depth === r.depth && n.column.parent ? a = n.column.parent : (a = n.column, i = !0), o && o?.column === a) o.subHeaders.push(n);
              else {
                const r = s(t, a, {
                  id: [l, e, a.id, n?.id].filter(Boolean).join("_"),
                  isPlaceholder: i,
                  placeholderId: i ? "" + u.filter(n => n.column === a).length : void 0,
                  depth: e,
                  index: u.length
                });
                r.subHeaders.push(n), u.push(r)
              }
              r.headers.push(n), n.headerGroup = r
            }), i.push(r), e > 0 && c(u, e - 1)
          },
          d = e.map((n, e) => s(t, n, {
            depth: o,
            index: e
          }));
        c(d, o - 1), i.reverse();
        const f = n => n.filter(n => n.column.getIsVisible()).map(n => {
          let e = 0,
            t = 0,
            l = [0];
          return n.subHeaders && n.subHeaders.length ? (l = [], f(n.subHeaders).forEach(n => {
            let {
              colSpan: t,
              rowSpan: r
            } = n;
            e += t, l.push(r)
          })) : e = 1, t += Math.min(...l), n.colSpan = e, n.rowSpan = t, {
            colSpan: e,
            rowSpan: t
          }
        });
        return f(null != (r = null == (u = i[0]) ? void 0 : u.headers) ? r : []), i
      }
      const f = (n, e, t, l, r, u, i) => {
          let s = {
            id: e,
            index: l,
            original: t,
            depth: r,
            parentId: i,
            l: {},
            u: {},
            getValue: e => {
              if (s.l.hasOwnProperty(e)) return s.l[e];
              const t = n.getColumn(e);
              return null != t && t.accessorFn ? (s.l[e] = t.accessorFn(s.original, l), s.l[e]) : void 0
            },
            getUniqueValues: e => {
              if (s.u.hasOwnProperty(e)) return s.u[e];
              const t = n.getColumn(e);
              return null != t && t.accessorFn ? t.columnDef.getUniqueValues ? (s.u[e] = t.columnDef.getUniqueValues(s.original, l), s.u[e]) : (s.u[e] = [s.getValue(e)], s.u[e]) : void 0
            },
            renderValue: e => {
              var t;
              return null != (t = s.getValue(e)) ? t : n.options.renderFallbackValue
            },
            subRows: u ?? [],
            getLeafRows: () => function(n) {
              const e = [],
                t = n => {
                  n.forEach(n => {
                    e.push(n);
                    const l = n.subRows;
                    null != l && l.length && t(l)
                  })
                };
              return t(n), e
            }(s.subRows),
            getParentRow: () => s.parentId ? n.getRow(s.parentId, !0) : void 0,
            getParentRows: () => {
              let n = [],
                e = s;
              for (;;) {
                const t = e.getParentRow();
                if (!t) break;
                n.push(t), e = t
              }
              return n.reverse()
            },
            getAllCells: o(() => [n.getAllLeafColumns()], e => e.map(e => function(n, e, t, l) {
              const r = {
                id: `${e.id}_${t.id}`,
                row: e,
                column: t,
                getValue: () => e.getValue(l),
                renderValue: () => {
                  var e;
                  return null != (e = r.getValue()) ? e : n.options.renderFallbackValue
                },
                getContext: o(() => [n, t, e, r], (n, e, t, l) => ({
                  table: n,
                  column: e,
                  row: t,
                  cell: l,
                  getValue: l.getValue,
                  renderValue: l.renderValue
                }), a(n.options, "debugCells", "cell.getContext"))
              };
              return n.t.forEach(l => {
                null == l.createCell || l.createCell(r, t, e, n)
              }, {}), r
            }(n, s, e, e.id)), a(n.options, "debugRows", "getAllCells")),
            o: o(() => [s.getAllCells()], n => n.reduce((n, e) => (n[e.column.id] = e, n), {}), a(n.options, "debugRows", "getAllCellsByColumnId"))
          };
          for (let e = 0; e < n.t.length; e++) {
            const t = n.t[e];
            null == t || null == t.createRow || t.createRow(s, n)
          }
          return s
        },
        g = {
          createColumn: (n, e) => {
            n.i = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, n.id), n.getFacetedRowModel = () => n.i ? n.i() : e.getPreFilteredRowModel(), n.v = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, n.id), n.getFacetedUniqueValues = () => n.v ? n.v() : new Map, n.m = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, n.id), n.getFacetedMinMaxValues = () => {
              if (n.m) return n.m()
            }
          }
        },
        v = (n, e, t) => {
          var l;
          const r = t.toLowerCase();
          return !(null == (l = n.getValue(e)) || null == (l = l.toString()) || null == (l = l.toLowerCase()) || !l.includes(r))
        };
      v.autoRemove = n => I(n);
      const m = (n, e, t) => {
        var l;
        return !(null == (l = n.getValue(e)) || null == (l = l.toString()) || !l.includes(t))
      };
      m.autoRemove = n => I(n);
      const b = (n, e, t) => {
        var l;
        return (null == (l = n.getValue(e)) || null == (l = l.toString()) ? void 0 : l.toLowerCase()) === t?.toLowerCase()
      };
      b.autoRemove = n => I(n);
      const p = (n, e, t) => {
        var l;
        return null == (l = n.getValue(e)) ? void 0 : l.includes(t)
      };
      p.autoRemove = n => I(n) || !(null != n && n.length);
      const C = (n, e, t) => !t.some(t => {
        var l;
        return !(null != (l = n.getValue(e)) && l.includes(t))
      });
      C.autoRemove = n => I(n) || !(null != n && n.length);
      const w = (n, e, t) => t.some(t => {
        var l;
        return null == (l = n.getValue(e)) ? void 0 : l.includes(t)
      });
      w.autoRemove = n => I(n) || !(null != n && n.length);
      const h = (n, e, t) => n.getValue(e) === t;
      h.autoRemove = n => I(n);
      const S = (n, e, t) => n.getValue(e) == t;
      S.autoRemove = n => I(n);
      const R = (n, e, t) => {
        let [l, r] = t;
        const u = n.getValue(e);
        return u >= l && r >= u
      };
      R.resolveFilterValue = n => {
        let [e, t] = n, l = "number" != typeof e ? parseFloat(e) : e, r = "number" != typeof t ? parseFloat(t) : t, u = null === e || Number.isNaN(l) ? -1 / 0 : l, o = null === t || Number.isNaN(r) ? 1 / 0 : r;
        if (u > o) {
          const n = u;
          u = o, o = n
        }
        return [u, o]
      }, R.autoRemove = n => I(n) || I(n[0]) && I(n[1]);
      const y = {
        includesString: v,
        includesStringSensitive: m,
        equalsString: b,
        arrIncludes: p,
        arrIncludesAll: C,
        arrIncludesSome: w,
        equals: h,
        weakEquals: S,
        inNumberRange: R
      };

      function I(n) {
        return null == n || "" === n
      }

      function F(n, e, t) {
        return !(!n || !n.autoRemove) && n.autoRemove(e, t) || typeof e > "u" || "string" == typeof e && !e
      }
      const O = {
          sum: (n, e, t) => t.reduce((e, t) => {
            const l = t.getValue(n);
            return e + ("number" == typeof l ? l : 0)
          }, 0),
          min: (n, e, t) => {
            let l;
            return t.forEach(e => {
              const t = e.getValue(n);
              null != t && (l > t || void 0 === l && t >= t) && (l = t)
            }), l
          },
          max: (n, e, t) => {
            let l;
            return t.forEach(e => {
              const t = e.getValue(n);
              null != t && (t > l || void 0 === l && t >= t) && (l = t)
            }), l
          },
          extent: (n, e, t) => {
            let l, r;
            return t.forEach(e => {
              const t = e.getValue(n);
              null != t && (void 0 === l ? t >= t && (l = r = t) : (l > t && (l = t), t > r && (r = t)))
            }), [l, r]
          },
          mean: (n, e) => {
            let t = 0,
              l = 0;
            if (e.forEach(e => {
                let r = e.getValue(n);
                null != r && (r = +r) >= r && (++t, l += r)
              }), t) return l / t
          },
          median: (n, e) => {
            if (!e.length) return;
            const t = e.map(e => e.getValue(n));
            if (! function(n) {
                return Array.isArray(n) && n.every(n => "number" == typeof n)
              }(t)) return;
            if (1 === t.length) return t[0];
            const l = Math.floor(t.length / 2),
              r = t.sort((n, e) => n - e);
            return t.length % 2 != 0 ? r[l] : (r[l - 1] + r[l]) / 2
          },
          unique: (n, e) => Array.from(new Set(e.map(e => e.getValue(n))).values()),
          uniqueCount: (n, e) => new Set(e.map(e => e.getValue(n))).size,
          count: (n, e) => e.length
        },
        D = {
          size: 150,
          minSize: 20,
          maxSize: Number.MAX_SAFE_INTEGER
        },
        _ = {
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
          createColumn: (n, e) => {
            n.getSize = () => {
              var t, l, r;
              const u = e.getState().columnSizing[n.id];
              return Math.min(Math.max(null != (t = n.columnDef.minSize) ? t : D.minSize, null != (l = u ?? n.columnDef.size) ? l : D.size), null != (r = n.columnDef.maxSize) ? r : D.maxSize)
            }, n.getStart = o(n => [n, B(e, n), e.getState().columnSizing], (e, t) => t.slice(0, n.getIndex(e)).reduce((n, e) => n + e.getSize(), 0), a(e.options, "debugColumns", "getStart")), n.getAfter = o(n => [n, B(e, n), e.getState().columnSizing], (e, t) => t.slice(n.getIndex(e) + 1).reduce((n, e) => n + e.getSize(), 0), a(e.options, "debugColumns", "getAfter")), n.resetSize = () => {
              e.setColumnSizing(e => {
                let {
                  [n.id]: t, ...l
                } = e;
                return l
              })
            }, n.getCanResize = () => {
              var t, l;
              return (null == (t = n.columnDef.enableResizing) || t) && (null == (l = e.options.enableColumnResizing) || l)
            }, n.getIsResizing = () => e.getState().columnSizingInfo.isResizingColumn === n.id
          },
          createHeader: (n, e) => {
            n.getSize = () => {
              let e = 0;
              const t = n => {
                var l;
                n.subHeaders.length ? n.subHeaders.forEach(t) : e += null != (l = n.column.getSize()) ? l : 0
              };
              return t(n), e
            }, n.getStart = () => {
              if (n.index > 0) {
                const e = n.headerGroup.headers[n.index - 1];
                return e.getStart() + e.getSize()
              }
              return 0
            }, n.getResizeHandler = t => {
              const l = e.getColumn(n.column.id),
                r = l?.getCanResize();
              return u => {
                if (!l || !r || (null == u.persist || u.persist(), z(u) && u.touches && u.touches.length > 1)) return;
                const o = n.getSize(),
                  a = n ? n.getLeafHeaders().map(n => [n.column.id, n.column.getSize()]) : [
                    [l.id, l.getSize()]
                  ],
                  i = z(u) ? Math.round(u.touches[0].clientX) : u.clientX,
                  s = {},
                  c = (n, t) => {
                    "number" == typeof t && (e.setColumnSizingInfo(n => {
                      var l, r;
                      const u = "rtl" === e.options.columnResizeDirection ? -1 : 1,
                        o = (t - (null != (l = n?.startOffset) ? l : 0)) * u,
                        a = Math.max(o / (null != (r = n?.startSize) ? r : 0), -.999999);
                      return n.columnSizingStart.forEach(n => {
                        let [e, t] = n;
                        s[e] = Math.round(100 * Math.max(t + t * a, 0)) / 100
                      }), {
                        ...n,
                        deltaOffset: o,
                        deltaPercentage: a
                      }
                    }), ("onChange" === e.options.columnResizeMode || "end" === n) && e.setColumnSizing(n => ({
                      ...n,
                      ...s
                    })))
                  },
                  d = n => c("move", n),
                  f = n => {
                    c("end", n), e.setColumnSizingInfo(n => ({
                      ...n,
                      isResizingColumn: !1,
                      startOffset: null,
                      startSize: null,
                      deltaOffset: null,
                      deltaPercentage: null,
                      columnSizingStart: []
                    }))
                  },
                  g = t || "u" > typeof document ? document : null,
                  v = {
                    moveHandler: n => d(n.clientX),
                    upHandler: n => {
                      g?.removeEventListener("mousemove", v.moveHandler), g?.removeEventListener("mouseup", v.upHandler), f(n.clientX)
                    }
                  },
                  m = {
                    moveHandler: n => (n.cancelable && (n.preventDefault(), n.stopPropagation()), d(n.touches[0].clientX), !1),
                    upHandler: n => {
                      var e;
                      g?.removeEventListener("touchmove", m.moveHandler), g?.removeEventListener("touchend", m.upHandler), n.cancelable && (n.preventDefault(), n.stopPropagation()), f(null == (e = n.touches[0]) ? void 0 : e.clientX)
                    }
                  },
                  b = !! function() {
                    if ("boolean" == typeof M) return M;
                    let n = !1;
                    try {
                      const e = {
                          get passive() {
                            return n = !0, !1
                          }
                        },
                        t = () => {};
                      window.addEventListener("test", t, e), window.removeEventListener("test", t)
                    } catch {
                      n = !1
                    }
                    return M = n, M
                  }() && {
                    passive: !1
                  };
                z(u) ? (g?.addEventListener("touchmove", m.moveHandler, b), g?.addEventListener("touchend", m.upHandler, b)) : (g?.addEventListener("mousemove", v.moveHandler, b), g?.addEventListener("mouseup", v.upHandler, b)), e.setColumnSizingInfo(n => ({
                  ...n,
                  startOffset: i,
                  startSize: o,
                  deltaOffset: 0,
                  deltaPercentage: 0,
                  columnSizingStart: a,
                  isResizingColumn: l.id
                }))
              }
            }
          },
          createTable: n => {
            n.setColumnSizing = e => null == n.options.onColumnSizingChange ? void 0 : n.options.onColumnSizingChange(e), n.setColumnSizingInfo = e => null == n.options.onColumnSizingInfoChange ? void 0 : n.options.onColumnSizingInfoChange(e), n.resetColumnSizing = e => {
              var t;
              n.setColumnSizing(e ? {} : null != (t = n.initialState.columnSizing) ? t : {})
            }, n.resetHeaderSizeInfo = e => {
              var t;
              n.setColumnSizingInfo(e ? {
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
              var e, t;
              return null != (e = null == (t = n.getHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, e) => n + e.getSize(), 0)) ? e : 0
            }, n.getLeftTotalSize = () => {
              var e, t;
              return null != (e = null == (t = n.getLeftHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, e) => n + e.getSize(), 0)) ? e : 0
            }, n.getCenterTotalSize = () => {
              var e, t;
              return null != (e = null == (t = n.getCenterHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, e) => n + e.getSize(), 0)) ? e : 0
            }, n.getRightTotalSize = () => {
              var e, t;
              return null != (e = null == (t = n.getRightHeaderGroups()[0]) ? void 0 : t.headers.reduce((n, e) => n + e.getSize(), 0)) ? e : 0
            }
          }
        };
      let M = null;

      function z(n) {
        return "touchstart" === n.type
      }

      function B(n, e) {
        return e ? "center" === e ? n.getCenterVisibleLeafColumns() : "left" === e ? n.getLeftVisibleLeafColumns() : n.getRightVisibleLeafColumns() : n.getVisibleLeafColumns()
      }
      const L = {
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
            n.setRowSelection = e => null == n.options.onRowSelectionChange ? void 0 : n.options.onRowSelectionChange(e), n.resetRowSelection = e => {
              var t;
              return n.setRowSelection(e ? {} : null != (t = n.initialState.rowSelection) ? t : {})
            }, n.toggleAllRowsSelected = e => {
              n.setRowSelection(t => {
                e = "u" > typeof e ? e : !n.getIsAllRowsSelected();
                const l = {
                    ...t
                  },
                  r = n.getPreGroupedRowModel().flatRows;
                return e ? r.forEach(n => {
                  n.getCanSelect() && (l[n.id] = !0)
                }) : r.forEach(n => {
                  delete l[n.id]
                }), l
              })
            }, n.toggleAllPageRowsSelected = e => n.setRowSelection(t => {
              const l = "u" > typeof e ? e : !n.getIsAllPageRowsSelected(),
                r = {
                  ...t
                };
              return n.getRowModel().rows.forEach(e => {
                T(r, e.id, l, !0, n)
              }), r
            }), n.getPreSelectedRowModel = () => n.getCoreRowModel(), n.getSelectedRowModel = o(() => [n.getState().rowSelection, n.getCoreRowModel()], (e, t) => Object.keys(e).length ? x(n, t) : {
              rows: [],
              flatRows: [],
              rowsById: {}
            }, a(n.options, "debugTable", "getSelectedRowModel")), n.getFilteredSelectedRowModel = o(() => [n.getState().rowSelection, n.getFilteredRowModel()], (e, t) => Object.keys(e).length ? x(n, t) : {
              rows: [],
              flatRows: [],
              rowsById: {}
            }, a(n.options, "debugTable", "getFilteredSelectedRowModel")), n.getGroupedSelectedRowModel = o(() => [n.getState().rowSelection, n.getSortedRowModel()], (e, t) => Object.keys(e).length ? x(n, t) : {
              rows: [],
              flatRows: [],
              rowsById: {}
            }, a(n.options, "debugTable", "getGroupedSelectedRowModel")), n.getIsAllRowsSelected = () => {
              const e = n.getFilteredRowModel().flatRows,
                {
                  rowSelection: t
                } = n.getState();
              let l = !(!e.length || !Object.keys(t).length);
              return l && e.some(n => n.getCanSelect() && !t[n.id]) && (l = !1), l
            }, n.getIsAllPageRowsSelected = () => {
              const e = n.getPaginationRowModel().flatRows.filter(n => n.getCanSelect()),
                {
                  rowSelection: t
                } = n.getState();
              let l = !!e.length;
              return l && e.some(n => !t[n.id]) && (l = !1), l
            }, n.getIsSomeRowsSelected = () => {
              var e;
              const t = Object.keys(null != (e = n.getState().rowSelection) ? e : {}).length;
              return t > 0 && t < n.getFilteredRowModel().flatRows.length
            }, n.getIsSomePageRowsSelected = () => {
              const e = n.getPaginationRowModel().flatRows;
              return !n.getIsAllPageRowsSelected() && e.filter(n => n.getCanSelect()).some(n => n.getIsSelected() || n.getIsSomeSelected())
            }, n.getToggleAllRowsSelectedHandler = () => e => {
              n.toggleAllRowsSelected(e.target.checked)
            }, n.getToggleAllPageRowsSelectedHandler = () => e => {
              n.toggleAllPageRowsSelected(e.target.checked)
            }
          },
          createRow: (n, e) => {
            n.toggleSelected = (t, l) => {
              const r = n.getIsSelected();
              e.setRowSelection(u => {
                var o;
                if (t = "u" > typeof t ? t : !r, n.getCanSelect() && r === t) return u;
                const a = {
                  ...u
                };
                return T(a, n.id, t, null == (o = l?.selectChildren) || o, e), a
              })
            }, n.getIsSelected = () => {
              const {
                rowSelection: t
              } = e.getState();
              return V(n, t)
            }, n.getIsSomeSelected = () => {
              const {
                rowSelection: t
              } = e.getState();
              return "some" === P(n, t)
            }, n.getIsAllSubRowsSelected = () => {
              const {
                rowSelection: t
              } = e.getState();
              return "all" === P(n, t)
            }, n.getCanSelect = () => {
              var t;
              return "function" == typeof e.options.enableRowSelection ? e.options.enableRowSelection(n) : null == (t = e.options.enableRowSelection) || t
            }, n.getCanSelectSubRows = () => {
              var t;
              return "function" == typeof e.options.enableSubRowSelection ? e.options.enableSubRowSelection(n) : null == (t = e.options.enableSubRowSelection) || t
            }, n.getCanMultiSelect = () => {
              var t;
              return "function" == typeof e.options.enableMultiRowSelection ? e.options.enableMultiRowSelection(n) : null == (t = e.options.enableMultiRowSelection) || t
            }, n.getToggleSelectedHandler = () => {
              const e = n.getCanSelect();
              return t => {
                var l;
                e && n.toggleSelected(null == (l = t.target) ? void 0 : l.checked)
              }
            }
          }
        },
        T = (n, e, t, l, r) => {
          var u;
          const o = r.getRow(e, !0);
          t ? (o.getCanMultiSelect() || Object.keys(n).forEach(e => delete n[e]), o.getCanSelect() && (n[e] = !0)) : delete n[e], l && null != (u = o.subRows) && u.length && o.getCanSelectSubRows() && o.subRows.forEach(e => T(n, e.id, t, l, r))
        };

      function x(n, e) {
        const t = n.getState().rowSelection,
          l = [],
          r = {},
          u = function(n, e) {
            return n.map(n => {
              var e;
              const o = V(n, t);
              if (o && (l.push(n), r[n.id] = n), null != (e = n.subRows) && e.length && (n = {
                  ...n,
                  subRows: u(n.subRows)
                }), o) return n
            }).filter(Boolean)
          };
        return {
          rows: u(e.rows),
          flatRows: l,
          rowsById: r
        }
      }

      function V(n, e) {
        var t;
        return null != (t = e[n.id]) && t
      }

      function P(n, e, t) {
        var l;
        if (null == (l = n.subRows) || !l.length) return !1;
        let r = !0,
          u = !1;
        return n.subRows.forEach(n => {
          if ((!u || r) && (n.getCanSelect() && (V(n, e) ? u = !0 : r = !1), n.subRows && n.subRows.length)) {
            const t = P(n, e);
            "all" === t ? u = !0 : ("some" === t && (u = !0), r = !1)
          }
        }), r ? "all" : !!u && "some"
      }
      const A = /([0-9]+)/gm;

      function H(n, e) {
        return n === e ? 0 : n > e ? 1 : -1
      }

      function j(n) {
        return "number" == typeof n ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : n + "" : "string" == typeof n ? n : ""
      }

      function N(n, e) {
        const t = n.split(A).filter(Boolean),
          l = e.split(A).filter(Boolean);
        for (; t.length && l.length;) {
          const n = t.shift(),
            e = l.shift(),
            r = parseInt(n, 10),
            u = parseInt(e, 10),
            o = [r, u].sort();
          if (isNaN(o[0])) {
            if (n > e) return 1;
            if (e > n) return -1
          } else {
            if (isNaN(o[1])) return isNaN(r) ? -1 : 1;
            if (r > u) return 1;
            if (u > r) return -1
          }
        }
        return t.length - l.length
      }
      const G = {
          alphanumeric: (n, e, t) => N(j(n.getValue(t)).toLowerCase(), j(e.getValue(t)).toLowerCase()),
          alphanumericCaseSensitive: (n, e, t) => N(j(n.getValue(t)), j(e.getValue(t))),
          text: (n, e, t) => H(j(n.getValue(t)).toLowerCase(), j(e.getValue(t)).toLowerCase()),
          textCaseSensitive: (n, e, t) => H(j(n.getValue(t)), j(e.getValue(t))),
          datetime: (n, e, t) => {
            const l = n.getValue(t),
              r = e.getValue(t);
            return l > r ? 1 : r > l ? -1 : 0
          },
          basic: (n, e, t) => H(n.getValue(t), e.getValue(t))
        },
        q = [c, {
          getInitialState: n => ({
            columnVisibility: {},
            ...n
          }),
          getDefaultOptions: n => ({
            onColumnVisibilityChange: r("columnVisibility", n)
          }),
          createColumn: (n, e) => {
            n.toggleVisibility = t => {
              n.getCanHide() && e.setColumnVisibility(e => ({
                ...e,
                [n.id]: t ?? !n.getIsVisible()
              }))
            }, n.getIsVisible = () => {
              var t, l;
              const r = n.columns;
              return null == (t = r.length ? r.some(n => n.getIsVisible()) : null == (l = e.getState().columnVisibility) ? void 0 : l[n.id]) || t
            }, n.getCanHide = () => {
              var t, l;
              return (null == (t = n.columnDef.enableHiding) || t) && (null == (l = e.options.enableHiding) || l)
            }, n.getToggleVisibilityHandler = () => e => {
              null == n.toggleVisibility || n.toggleVisibility(e.target.checked)
            }
          },
          createRow: (n, e) => {
            n.p = o(() => [n.getAllCells(), e.getState().columnVisibility], n => n.filter(n => n.column.getIsVisible()), a(e.options, "debugRows", "_getAllVisibleCells")), n.getVisibleCells = o(() => [n.getLeftVisibleCells(), n.getCenterVisibleCells(), n.getRightVisibleCells()], (n, e, t) => [...n, ...e, ...t], a(e.options, "debugRows", "getVisibleCells"))
          },
          createTable: n => {
            const e = (e, t) => o(() => [t(), t().filter(n => n.getIsVisible()).map(n => n.id).join("_")], n => n.filter(n => null == n.getIsVisible ? void 0 : n.getIsVisible()), a(n.options, "debugColumns", e));
            n.getVisibleFlatColumns = e("getVisibleFlatColumns", () => n.getAllFlatColumns()), n.getVisibleLeafColumns = e("getVisibleLeafColumns", () => n.getAllLeafColumns()), n.getLeftVisibleLeafColumns = e("getLeftVisibleLeafColumns", () => n.getLeftLeafColumns()), n.getRightVisibleLeafColumns = e("getRightVisibleLeafColumns", () => n.getRightLeafColumns()), n.getCenterVisibleLeafColumns = e("getCenterVisibleLeafColumns", () => n.getCenterLeafColumns()), n.setColumnVisibility = e => null == n.options.onColumnVisibilityChange ? void 0 : n.options.onColumnVisibilityChange(e), n.resetColumnVisibility = e => {
              var t;
              n.setColumnVisibility(e ? {} : null != (t = n.initialState.columnVisibility) ? t : {})
            }, n.toggleAllColumnsVisible = e => {
              var t;
              e = null != (t = e) ? t : !n.getIsAllColumnsVisible(), n.setColumnVisibility(n.getAllLeafColumns().reduce((n, t) => ({
                ...n,
                [t.id]: e || !(null != t.getCanHide && t.getCanHide())
              }), {}))
            }, n.getIsAllColumnsVisible = () => !n.getAllLeafColumns().some(n => !(null != n.getIsVisible && n.getIsVisible())), n.getIsSomeColumnsVisible = () => n.getAllLeafColumns().some(n => null == n.getIsVisible ? void 0 : n.getIsVisible()), n.getToggleAllColumnsVisibilityHandler = () => e => {
              var t;
              n.toggleAllColumnsVisible(null == (t = e.target) ? void 0 : t.checked)
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
          createColumn: (n, e) => {
            n.getIndex = o(n => [B(e, n)], e => e.findIndex(e => e.id === n.id), a(e.options, "debugColumns", "getIndex")), n.getIsFirstColumn = t => {
              var l;
              return (null == (l = B(e, t)[0]) ? void 0 : l.id) === n.id
            }, n.getIsLastColumn = t => {
              var l;
              const r = B(e, t);
              return (null == (l = r[r.length - 1]) ? void 0 : l.id) === n.id
            }
          },
          createTable: n => {
            n.setColumnOrder = e => null == n.options.onColumnOrderChange ? void 0 : n.options.onColumnOrderChange(e), n.resetColumnOrder = e => {
              var t;
              n.setColumnOrder(e ? [] : null != (t = n.initialState.columnOrder) ? t : [])
            }, n.C = o(() => [n.getState().columnOrder, n.getState().grouping, n.options.groupedColumnMode], (n, e, t) => l => {
              let r = [];
              if (null != n && n.length) {
                const e = [...n],
                  t = [...l];
                for (; t.length && e.length;) {
                  const n = e.shift(),
                    l = t.findIndex(e => e.id === n);
                  l > -1 && r.push(t.splice(l, 1)[0])
                }
                r = [...r, ...t]
              } else r = l;
              return function(n, e, t) {
                if (null == e || !e.length || !t) return n;
                const l = n.filter(n => !e.includes(n.id));
                return "remove" === t ? l : [...e.map(e => n.find(n => n.id === e)).filter(Boolean), ...l]
              }(r, e, t)
            }, a(n.options, "debugTable", "_getOrderColumnsFn"))
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
          createColumn: (n, e) => {
            n.pin = t => {
              const l = n.getLeafColumns().map(n => n.id).filter(Boolean);
              e.setColumnPinning(n => {
                var e, r, u, o, a, i;
                return "right" === t ? {
                  left: (null != (u = n?.left) ? u : []).filter(n => !(null != l && l.includes(n))),
                  right: [...(null != (o = n?.right) ? o : []).filter(n => !(null != l && l.includes(n))), ...l]
                } : "left" === t ? {
                  left: [...(null != (a = n?.left) ? a : []).filter(n => !(null != l && l.includes(n))), ...l],
                  right: (null != (i = n?.right) ? i : []).filter(n => !(null != l && l.includes(n)))
                } : {
                  left: (null != (e = n?.left) ? e : []).filter(n => !(null != l && l.includes(n))),
                  right: (null != (r = n?.right) ? r : []).filter(n => !(null != l && l.includes(n)))
                }
              })
            }, n.getCanPin = () => n.getLeafColumns().some(n => {
              var t, l, r;
              return (null == (t = n.columnDef.enablePinning) || t) && (null == (l = null != (r = e.options.enableColumnPinning) ? r : e.options.enablePinning) || l)
            }), n.getIsPinned = () => {
              const t = n.getLeafColumns().map(n => n.id),
                {
                  left: l,
                  right: r
                } = e.getState().columnPinning,
                u = t.some(n => l?.includes(n)),
                o = t.some(n => r?.includes(n));
              return u ? "left" : !!o && "right"
            }, n.getPinnedIndex = () => {
              var t, l;
              const r = n.getIsPinned();
              return r ? null != (t = null == (l = e.getState().columnPinning) || null == (l = l[r]) ? void 0 : l.indexOf(n.id)) ? t : -1 : 0
            }
          },
          createRow: (n, e) => {
            n.getCenterVisibleCells = o(() => [n.p(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, e, t) => {
              const l = [...e ?? [], ...t ?? []];
              return n.filter(n => !l.includes(n.column.id))
            }, a(e.options, "debugRows", "getCenterVisibleCells")), n.getLeftVisibleCells = o(() => [n.p(), e.getState().columnPinning.left], (n, e) => (e ?? []).map(e => n.find(n => n.column.id === e)).filter(Boolean).map(n => ({
              ...n,
              position: "left"
            })), a(e.options, "debugRows", "getLeftVisibleCells")), n.getRightVisibleCells = o(() => [n.p(), e.getState().columnPinning.right], (n, e) => (e ?? []).map(e => n.find(n => n.column.id === e)).filter(Boolean).map(n => ({
              ...n,
              position: "right"
            })), a(e.options, "debugRows", "getRightVisibleCells"))
          },
          createTable: n => {
            n.setColumnPinning = e => null == n.options.onColumnPinningChange ? void 0 : n.options.onColumnPinningChange(e), n.resetColumnPinning = e => {
              var t, l;
              return n.setColumnPinning(e ? {
                left: [],
                right: []
              } : null != (t = null == (l = n.initialState) ? void 0 : l.columnPinning) ? t : {
                left: [],
                right: []
              })
            }, n.getIsSomeColumnsPinned = e => {
              var t;
              const l = n.getState().columnPinning;
              var r, u;
              return e ? !(null == (t = l[e]) || !t.length) : !!(null != (r = l.left) && r.length || null != (u = l.right) && u.length)
            }, n.getLeftLeafColumns = o(() => [n.getAllLeafColumns(), n.getState().columnPinning.left], (n, e) => (e ?? []).map(e => n.find(n => n.id === e)).filter(Boolean), a(n.options, "debugColumns", "getLeftLeafColumns")), n.getRightLeafColumns = o(() => [n.getAllLeafColumns(), n.getState().columnPinning.right], (n, e) => (e ?? []).map(e => n.find(n => n.id === e)).filter(Boolean), a(n.options, "debugColumns", "getRightLeafColumns")), n.getCenterLeafColumns = o(() => [n.getAllLeafColumns(), n.getState().columnPinning.left, n.getState().columnPinning.right], (n, e, t) => {
              const l = [...e ?? [], ...t ?? []];
              return n.filter(n => !l.includes(n.id))
            }, a(n.options, "debugColumns", "getCenterLeafColumns"))
          }
        }, g, {
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
          createColumn: (n, e) => {
            n.getAutoFilterFn = () => {
              const t = e.getCoreRowModel().flatRows[0],
                l = t?.getValue(n.id);
              return "string" == typeof l ? y.includesString : "number" == typeof l ? y.inNumberRange : "boolean" == typeof l || null !== l && "object" == typeof l ? y.equals : Array.isArray(l) ? y.arrIncludes : y.weakEquals
            }, n.getFilterFn = () => {
              var t, l;
              return u(n.columnDef.filterFn) ? n.columnDef.filterFn : "auto" === n.columnDef.filterFn ? n.getAutoFilterFn() : null != (t = null == (l = e.options.filterFns) ? void 0 : l[n.columnDef.filterFn]) ? t : y[n.columnDef.filterFn]
            }, n.getCanFilter = () => {
              var t, l, r;
              return (null == (t = n.columnDef.enableColumnFilter) || t) && (null == (l = e.options.enableColumnFilters) || l) && (null == (r = e.options.enableFilters) || r) && !!n.accessorFn
            }, n.getIsFiltered = () => n.getFilterIndex() > -1, n.getFilterValue = () => {
              var t;
              return null == (t = e.getState().columnFilters) || null == (t = t.find(e => e.id === n.id)) ? void 0 : t.value
            }, n.getFilterIndex = () => {
              var t, l;
              return null != (t = null == (l = e.getState().columnFilters) ? void 0 : l.findIndex(e => e.id === n.id)) ? t : -1
            }, n.setFilterValue = t => {
              e.setColumnFilters(e => {
                const r = n.getFilterFn(),
                  u = e?.find(e => e.id === n.id),
                  o = l(t, u ? u.value : void 0);
                var a;
                if (F(r, o, n)) return null != (a = e?.filter(e => e.id !== n.id)) ? a : [];
                const i = {
                  id: n.id,
                  value: o
                };
                var s;
                return u ? null != (s = e?.map(e => e.id === n.id ? i : e)) ? s : [] : null != e && e.length ? [...e, i] : [i]
              })
            }
          },
          createRow: (n, e) => {
            n.columnFilters = {}, n.columnFiltersMeta = {}
          },
          createTable: n => {
            n.setColumnFilters = e => {
              const t = n.getAllLeafColumns();
              null == n.options.onColumnFiltersChange || n.options.onColumnFiltersChange(n => {
                var r;
                return null == (r = l(e, n)) ? void 0 : r.filter(n => {
                  const e = t.find(e => e.id === n.id);
                  return !e || !F(e.getFilterFn(), n.value, e)
                })
              })
            }, n.resetColumnFilters = e => {
              var t, l;
              n.setColumnFilters(e ? [] : null != (t = null == (l = n.initialState) ? void 0 : l.columnFilters) ? t : [])
            }, n.getPreFilteredRowModel = () => n.getCoreRowModel(), n.getFilteredRowModel = () => (!n.h && n.options.getFilteredRowModel && (n.h = n.options.getFilteredRowModel(n)), n.options.manualFiltering || !n.h ? n.getPreFilteredRowModel() : n.h())
          }
        }, {
          createTable: n => {
            n.S = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, "__global__"), n.getGlobalFacetedRowModel = () => n.options.manualFiltering || !n.S ? n.getPreFilteredRowModel() : n.S(), n.R = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, "__global__"), n.getGlobalFacetedUniqueValues = () => n.R ? n.R() : new Map, n.I = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, "__global__"), n.getGlobalFacetedMinMaxValues = () => {
              if (n.I) return n.I()
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
            getColumnCanGlobalFilter: e => {
              var t;
              const l = null == (t = n.getCoreRowModel().flatRows[0]) || null == (t = t.o()[e.id]) ? void 0 : t.getValue();
              return "string" == typeof l || "number" == typeof l
            }
          }),
          createColumn: (n, e) => {
            n.getCanGlobalFilter = () => {
              var t, l, r, u;
              return (null == (t = n.columnDef.enableGlobalFilter) || t) && (null == (l = e.options.enableGlobalFilter) || l) && (null == (r = e.options.enableFilters) || r) && (null == (u = null == e.options.getColumnCanGlobalFilter ? void 0 : e.options.getColumnCanGlobalFilter(n)) || u) && !!n.accessorFn
            }
          },
          createTable: n => {
            n.getGlobalAutoFilterFn = () => y.includesString, n.getGlobalFilterFn = () => {
              var e, t;
              const {
                globalFilterFn: l
              } = n.options;
              return u(l) ? l : "auto" === l ? n.getGlobalAutoFilterFn() : null != (e = null == (t = n.options.filterFns) ? void 0 : t[l]) ? e : y[l]
            }, n.setGlobalFilter = e => {
              null == n.options.onGlobalFilterChange || n.options.onGlobalFilterChange(e)
            }, n.resetGlobalFilter = e => {
              n.setGlobalFilter(e ? void 0 : n.initialState.globalFilter)
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
          createColumn: (n, e) => {
            n.getAutoSortingFn = () => {
              const t = e.getFilteredRowModel().flatRows.slice(10);
              let l = !1;
              for (const e of t) {
                const t = e?.getValue(n.id);
                if ("[object Date]" === {}.toString.call(t)) return G.datetime;
                if ("string" == typeof t && (l = !0, t.split(A).length > 1)) return G.alphanumeric
              }
              return l ? G.text : G.basic
            }, n.getAutoSortDir = () => {
              const t = e.getFilteredRowModel().flatRows[0];
              return "string" == typeof t?.getValue(n.id) ? "asc" : "desc"
            }, n.getSortingFn = () => {
              var t, l;
              if (!n) throw Error();
              return u(n.columnDef.sortingFn) ? n.columnDef.sortingFn : "auto" === n.columnDef.sortingFn ? n.getAutoSortingFn() : null != (t = null == (l = e.options.sortingFns) ? void 0 : l[n.columnDef.sortingFn]) ? t : G[n.columnDef.sortingFn]
            }, n.toggleSorting = (t, l) => {
              const r = n.getNextSortingOrder(),
                u = "u" > typeof t && null !== t;
              e.setSorting(o => {
                const a = o?.find(e => e.id === n.id),
                  i = o?.findIndex(e => e.id === n.id);
                let s, c = [],
                  d = u ? t : "desc" === r;
                var f;
                return s = null != o && o.length && n.getCanMultiSort() && l ? a ? "toggle" : "add" : null != o && o.length && i !== o.length - 1 ? "replace" : a ? "toggle" : "replace", "toggle" === s && (u || r || (s = "remove")), "add" === s ? (c = [...o, {
                  id: n.id,
                  desc: d
                }], c.splice(0, c.length - (null != (f = e.options.maxMultiSortColCount) ? f : Number.MAX_SAFE_INTEGER))) : c = "toggle" === s ? o.map(e => e.id === n.id ? {
                  ...e,
                  desc: d
                } : e) : "remove" === s ? o.filter(e => e.id !== n.id) : [{
                  id: n.id,
                  desc: d
                }], c
              })
            }, n.getFirstSortDir = () => {
              var t, l;
              return (null != (t = null != (l = n.columnDef.sortDescFirst) ? l : e.options.sortDescFirst) ? t : "desc" === n.getAutoSortDir()) ? "desc" : "asc"
            }, n.getNextSortingOrder = t => {
              var l, r;
              const u = n.getFirstSortDir(),
                o = n.getIsSorted();
              return o ? !!(o === u || null != (l = e.options.enableSortingRemoval) && !l || t && null != (r = e.options.enableMultiRemove) && !r) && ("desc" === o ? "asc" : "desc") : u
            }, n.getCanSort = () => {
              var t, l;
              return (null == (t = n.columnDef.enableSorting) || t) && (null == (l = e.options.enableSorting) || l) && !!n.accessorFn
            }, n.getCanMultiSort = () => {
              var t, l;
              return null != (t = null != (l = n.columnDef.enableMultiSort) ? l : e.options.enableMultiSort) ? t : !!n.accessorFn
            }, n.getIsSorted = () => {
              var t;
              const l = null == (t = e.getState().sorting) ? void 0 : t.find(e => e.id === n.id);
              return !!l && (l.desc ? "desc" : "asc")
            }, n.getSortIndex = () => {
              var t, l;
              return null != (t = null == (l = e.getState().sorting) ? void 0 : l.findIndex(e => e.id === n.id)) ? t : -1
            }, n.clearSorting = () => {
              e.setSorting(e => null != e && e.length ? e.filter(e => e.id !== n.id) : [])
            }, n.getToggleSortingHandler = () => {
              const t = n.getCanSort();
              return l => {
                t && (null == l.persist || l.persist(), null == n.toggleSorting || n.toggleSorting(void 0, !!n.getCanMultiSort() && (null == e.options.isMultiSortEvent ? void 0 : e.options.isMultiSortEvent(l))))
              }
            }
          },
          createTable: n => {
            n.setSorting = e => null == n.options.onSortingChange ? void 0 : n.options.onSortingChange(e), n.resetSorting = e => {
              var t, l;
              n.setSorting(e ? [] : null != (t = null == (l = n.initialState) ? void 0 : l.sorting) ? t : [])
            }, n.getPreSortedRowModel = () => n.getGroupedRowModel(), n.getSortedRowModel = () => (!n.F && n.options.getSortedRowModel && (n.F = n.options.getSortedRowModel(n)), n.options.manualSorting || !n.F ? n.getPreSortedRowModel() : n.F())
          }
        }, {
          getDefaultColumnDef: () => ({
            aggregatedCell: n => {
              var e, t;
              return null != (e = null == (t = n.getValue()) || null == t.toString ? void 0 : t.toString()) ? e : null
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
          createColumn: (n, e) => {
            n.toggleGrouping = () => {
              e.setGrouping(e => null != e && e.includes(n.id) ? e.filter(e => e !== n.id) : [...e ?? [], n.id])
            }, n.getCanGroup = () => {
              var t, l;
              return (null == (t = n.columnDef.enableGrouping) || t) && (null == (l = e.options.enableGrouping) || l) && (!!n.accessorFn || !!n.columnDef.getGroupingValue)
            }, n.getIsGrouped = () => {
              var t;
              return null == (t = e.getState().grouping) ? void 0 : t.includes(n.id)
            }, n.getGroupedIndex = () => {
              var t;
              return null == (t = e.getState().grouping) ? void 0 : t.indexOf(n.id)
            }, n.getToggleGroupingHandler = () => {
              const e = n.getCanGroup();
              return () => {
                e && n.toggleGrouping()
              }
            }, n.getAutoAggregationFn = () => {
              const t = e.getCoreRowModel().flatRows[0],
                l = t?.getValue(n.id);
              return "number" == typeof l ? O.sum : "[object Date]" === {}.toString.call(l) ? O.extent : void 0
            }, n.getAggregationFn = () => {
              var t, l;
              if (!n) throw Error();
              return u(n.columnDef.aggregationFn) ? n.columnDef.aggregationFn : "auto" === n.columnDef.aggregationFn ? n.getAutoAggregationFn() : null != (t = null == (l = e.options.aggregationFns) ? void 0 : l[n.columnDef.aggregationFn]) ? t : O[n.columnDef.aggregationFn]
            }
          },
          createTable: n => {
            n.setGrouping = e => null == n.options.onGroupingChange ? void 0 : n.options.onGroupingChange(e), n.resetGrouping = e => {
              var t, l;
              n.setGrouping(e ? [] : null != (t = null == (l = n.initialState) ? void 0 : l.grouping) ? t : [])
            }, n.getPreGroupedRowModel = () => n.getFilteredRowModel(), n.getGroupedRowModel = () => (!n.O && n.options.getGroupedRowModel && (n.O = n.options.getGroupedRowModel(n)), n.options.manualGrouping || !n.O ? n.getPreGroupedRowModel() : n.O())
          },
          createRow: (n, e) => {
            n.getIsGrouped = () => !!n.groupingColumnId, n.getGroupingValue = t => {
              if (n.D.hasOwnProperty(t)) return n.D[t];
              const l = e.getColumn(t);
              return null != l && l.columnDef.getGroupingValue ? (n.D[t] = l.columnDef.getGroupingValue(n.original), n.D[t]) : n.getValue(t)
            }, n.D = {}
          },
          createCell: (n, e, t, l) => {
            n.getIsGrouped = () => e.getIsGrouped() && e.id === t.groupingColumnId, n.getIsPlaceholder = () => !n.getIsGrouped() && e.getIsGrouped(), n.getIsAggregated = () => {
              var e;
              return !n.getIsGrouped() && !n.getIsPlaceholder() && !(null == (e = t.subRows) || !e.length)
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
            let e = !1,
              t = !1;
            n._ = () => {
              var l, r;
              if (e) {
                if (null != (l = null != (r = n.options.autoResetAll) ? r : n.options.autoResetExpanded) ? l : !n.options.manualExpanding) {
                  if (t) return;
                  t = !0, n.M(() => {
                    n.resetExpanded(), t = !1
                  })
                }
              } else n.M(() => {
                e = !0
              })
            }, n.setExpanded = e => null == n.options.onExpandedChange ? void 0 : n.options.onExpandedChange(e), n.toggleAllRowsExpanded = e => {
              e ?? !n.getIsAllRowsExpanded() ? n.setExpanded(!0) : n.setExpanded({})
            }, n.resetExpanded = e => {
              var t, l;
              n.setExpanded(e ? {} : null != (t = null == (l = n.initialState) ? void 0 : l.expanded) ? t : {})
            }, n.getCanSomeRowsExpand = () => n.getPrePaginationRowModel().flatRows.some(n => n.getCanExpand()), n.getToggleAllRowsExpandedHandler = () => e => {
              null == e.persist || e.persist(), n.toggleAllRowsExpanded()
            }, n.getIsSomeRowsExpanded = () => {
              const e = n.getState().expanded;
              return !0 === e || Object.values(e).some(Boolean)
            }, n.getIsAllRowsExpanded = () => {
              const e = n.getState().expanded;
              return "boolean" == typeof e ? !0 === e : !(!Object.keys(e).length || n.getRowModel().flatRows.some(n => !n.getIsExpanded()))
            }, n.getExpandedDepth = () => {
              let e = 0;
              return (!0 === n.getState().expanded ? Object.keys(n.getRowModel().rowsById) : Object.keys(n.getState().expanded)).forEach(n => {
                const t = n.split(".");
                e = Math.max(e, t.length)
              }), e
            }, n.getPreExpandedRowModel = () => n.getSortedRowModel(), n.getExpandedRowModel = () => (!n.B && n.options.getExpandedRowModel && (n.B = n.options.getExpandedRowModel(n)), n.options.manualExpanding || !n.B ? n.getPreExpandedRowModel() : n.B())
          },
          createRow: (n, e) => {
            n.toggleExpanded = t => {
              e.setExpanded(l => {
                var r;
                const u = !0 === l || !(null == l || !l[n.id]);
                let o = {};
                if (!0 === l ? Object.keys(e.getRowModel().rowsById).forEach(n => {
                    o[n] = !0
                  }) : o = l, t = null != (r = t) ? r : !u, !u && t) return {
                  ...o,
                  [n.id]: !0
                };
                if (u && !t) {
                  const {
                    [n.id]: e, ...t
                  } = o;
                  return t
                }
                return l
              })
            }, n.getIsExpanded = () => {
              var t;
              const l = e.getState().expanded;
              return !!(null != (t = null == e.options.getIsRowExpanded ? void 0 : e.options.getIsRowExpanded(n)) ? t : !0 === l || l?.[n.id])
            }, n.getCanExpand = () => {
              var t, l, r;
              return null != (t = null == e.options.getRowCanExpand ? void 0 : e.options.getRowCanExpand(n)) ? t : (null == (l = e.options.enableExpanding) || l) && !(null == (r = n.subRows) || !r.length)
            }, n.getIsAllParentsExpanded = () => {
              let t = !0,
                l = n;
              for (; t && l.parentId;) l = e.getRow(l.parentId, !0), t = l.getIsExpanded();
              return t
            }, n.getToggleExpandedHandler = () => {
              const e = n.getCanExpand();
              return () => {
                e && n.toggleExpanded()
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
            let e = !1,
              t = !1;
            n.L = () => {
              var l, r;
              if (e) {
                if (null != (l = null != (r = n.options.autoResetAll) ? r : n.options.autoResetPageIndex) ? l : !n.options.manualPagination) {
                  if (t) return;
                  t = !0, n.M(() => {
                    n.resetPageIndex(), t = !1
                  })
                }
              } else n.M(() => {
                e = !0
              })
            }, n.setPagination = e => null == n.options.onPaginationChange ? void 0 : n.options.onPaginationChange(n => l(e, n)), n.resetPagination = e => {
              var t;
              n.setPagination(e ? {
                pageIndex: 0,
                pageSize: 10
              } : null != (t = n.initialState.pagination) ? t : {
                pageIndex: 0,
                pageSize: 10
              })
            }, n.setPageIndex = e => {
              n.setPagination(t => {
                let r = l(e, t.pageIndex);
                const u = typeof n.options.pageCount > "u" || -1 === n.options.pageCount ? Number.MAX_SAFE_INTEGER : n.options.pageCount - 1;
                return r = Math.max(0, Math.min(r, u)), {
                  ...t,
                  pageIndex: r
                }
              })
            }, n.resetPageIndex = e => {
              var t, l;
              n.setPageIndex(e ? 0 : null != (t = null == (l = n.initialState) || null == (l = l.pagination) ? void 0 : l.pageIndex) ? t : 0)
            }, n.resetPageSize = e => {
              var t, l;
              n.setPageSize(e ? 10 : null != (t = null == (l = n.initialState) || null == (l = l.pagination) ? void 0 : l.pageSize) ? t : 10)
            }, n.setPageSize = e => {
              n.setPagination(n => {
                const t = Math.max(1, l(e, n.pageSize)),
                  r = n.pageSize * n.pageIndex,
                  u = Math.floor(r / t);
                return {
                  ...n,
                  pageIndex: u,
                  pageSize: t
                }
              })
            }, n.setPageCount = e => n.setPagination(t => {
              var r;
              let u = l(e, null != (r = n.options.pageCount) ? r : -1);
              return "number" == typeof u && (u = Math.max(-1, u)), {
                ...t,
                pageCount: u
              }
            }), n.getPageOptions = o(() => [n.getPageCount()], n => {
              let e = [];
              return n && n > 0 && (e = [...Array(n)].fill(null).map((n, e) => e)), e
            }, a(n.options, "debugTable", "getPageOptions")), n.getCanPreviousPage = () => n.getState().pagination.pageIndex > 0, n.getCanNextPage = () => {
              const {
                pageIndex: e
              } = n.getState().pagination, t = n.getPageCount();
              return -1 === t || 0 !== t && t - 1 > e
            }, n.previousPage = () => n.setPageIndex(n => n - 1), n.nextPage = () => n.setPageIndex(n => n + 1), n.firstPage = () => n.setPageIndex(0), n.lastPage = () => n.setPageIndex(n.getPageCount() - 1), n.getPrePaginationRowModel = () => n.getExpandedRowModel(), n.getPaginationRowModel = () => (!n.T && n.options.getPaginationRowModel && (n.T = n.options.getPaginationRowModel(n)), n.options.manualPagination || !n.T ? n.getPrePaginationRowModel() : n.T()), n.getPageCount = () => {
              var e;
              return null != (e = n.options.pageCount) ? e : Math.ceil(n.getRowCount() / n.getState().pagination.pageSize)
            }, n.getRowCount = () => {
              var e;
              return null != (e = n.options.rowCount) ? e : n.getPrePaginationRowModel().rows.length
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
          createRow: (n, e) => {
            n.pin = (t, l, r) => {
              const u = l ? n.getLeafRows().map(n => {
                  let {
                    id: e
                  } = n;
                  return e
                }) : [],
                o = r ? n.getParentRows().map(n => {
                  let {
                    id: e
                  } = n;
                  return e
                }) : [],
                a = new Set([...o, n.id, ...u]);
              e.setRowPinning(n => {
                var e, l, r, u, o, i;
                return "bottom" === t ? {
                  top: (null != (r = n?.top) ? r : []).filter(n => !(null != a && a.has(n))),
                  bottom: [...(null != (u = n?.bottom) ? u : []).filter(n => !(null != a && a.has(n))), ...Array.from(a)]
                } : "top" === t ? {
                  top: [...(null != (o = n?.top) ? o : []).filter(n => !(null != a && a.has(n))), ...Array.from(a)],
                  bottom: (null != (i = n?.bottom) ? i : []).filter(n => !(null != a && a.has(n)))
                } : {
                  top: (null != (e = n?.top) ? e : []).filter(n => !(null != a && a.has(n))),
                  bottom: (null != (l = n?.bottom) ? l : []).filter(n => !(null != a && a.has(n)))
                }
              })
            }, n.getCanPin = () => {
              var t;
              const {
                enableRowPinning: l,
                enablePinning: r
              } = e.options;
              return "function" == typeof l ? l(n) : null == (t = l ?? r) || t
            }, n.getIsPinned = () => {
              const t = [n.id],
                {
                  top: l,
                  bottom: r
                } = e.getState().rowPinning,
                u = t.some(n => l?.includes(n)),
                o = t.some(n => r?.includes(n));
              return u ? "top" : !!o && "bottom"
            }, n.getPinnedIndex = () => {
              var t, l;
              const r = n.getIsPinned();
              if (!r) return -1;
              const u = null == (t = e.V(r)) ? void 0 : t.map(n => {
                let {
                  id: e
                } = n;
                return e
              });
              return null != (l = u?.indexOf(n.id)) ? l : -1
            }
          },
          createTable: n => {
            n.setRowPinning = e => null == n.options.onRowPinningChange ? void 0 : n.options.onRowPinningChange(e), n.resetRowPinning = e => {
              var t, l;
              return n.setRowPinning(e ? {
                top: [],
                bottom: []
              } : null != (t = null == (l = n.initialState) ? void 0 : l.rowPinning) ? t : {
                top: [],
                bottom: []
              })
            }, n.getIsSomeRowsPinned = e => {
              var t;
              const l = n.getState().rowPinning;
              var r, u;
              return e ? !(null == (t = l[e]) || !t.length) : !!(null != (r = l.top) && r.length || null != (u = l.bottom) && u.length)
            }, n.V = o(e => [n.getRowModel().rows, n.getState().rowPinning[e], e], (e, t, l) => {
              var r;
              return (null == (r = n.options.keepPinnedRows) || r ? (t ?? []).map(e => {
                const t = n.getRow(e, !0);
                return t.getIsAllParentsExpanded() ? t : null
              }) : (t ?? []).map(n => e.find(e => e.id === n))).filter(Boolean).map(n => ({
                ...n,
                position: l
              }))
            }, a(n.options, "debugRows", "_getPinnedRows")), n.getTopRows = () => n.V("top"), n.getBottomRows = () => n.V("bottom"), n.getCenterRows = o(() => [n.getRowModel().rows, n.getState().rowPinning.top, n.getState().rowPinning.bottom], (n, e, t) => {
              const l = new Set([...e ?? [], ...t ?? []]);
              return n.filter(n => !l.has(n.id))
            }, a(n.options, "debugRows", "getCenterRows"))
          }
        }, L, _];

      function E(n) {
        var e, t;
        (n.debugAll || n.debugTable) && console.info("Creating Table Instance...");
        const r = [...q, ...null != (e = n.t) ? e : []];
        let u = {
          t: r
        };
        const i = u.t.reduce((n, e) => Object.assign(n, null == e.getDefaultOptions ? void 0 : e.getDefaultOptions(u)), {});
        let s = {
          ...null != (t = n.initialState) ? t : {}
        };
        u.t.forEach(n => {
          var e;
          s = null != (e = null == n.getInitialState ? void 0 : n.getInitialState(s)) ? e : s
        });
        const c = [];
        let d = !1;
        const f = {
          t: r,
          options: {
            ...i,
            ...n
          },
          initialState: s,
          M: n => {
            c.push(n), d || (d = !0, Promise.resolve().then(() => {
              for (; c.length;) c.shift()();
              d = !1
            }).catch(n => setTimeout(() => {
              throw n
            })))
          },
          reset: () => {
            u.setState(u.initialState)
          },
          setOptions: n => {
            const e = l(n, u.options);
            u.options = (n => u.options.mergeOptions ? u.options.mergeOptions(i, n) : {
              ...i,
              ...n
            })(e)
          },
          getState: () => u.options.state,
          setState: n => {
            null == u.options.onStateChange || u.options.onStateChange(n)
          },
          P: (n, e, t) => {
            var l;
            return null != (l = null == u.options.getRowId ? void 0 : u.options.getRowId(n, e, t)) ? l : "" + (t ? [t.id, e].join(".") : e)
          },
          getCoreRowModel: () => (u.A || (u.A = u.options.getCoreRowModel(u)), u.A()),
          getRowModel: () => u.getPaginationRowModel(),
          getRow: (n, e) => {
            let t = (e ? u.getPrePaginationRowModel() : u.getRowModel()).rowsById[n];
            if (!t && (t = u.getCoreRowModel().rowsById[n], !t)) throw Error("getRow could not find row with ID: " + n);
            return t
          },
          H: o(() => [u.options.defaultColumn], n => {
            var e;
            return n = null != (e = n) ? e : {}, {
              header: n => {
                const e = n.header.column.columnDef;
                return e.accessorKey ? e.accessorKey : e.accessorFn ? e.id : null
              },
              cell: n => {
                var e, t;
                return null != (e = null == (t = n.renderValue()) || null == t.toString ? void 0 : t.toString()) ? e : null
              },
              ...u.t.reduce((n, e) => Object.assign(n, null == e.getDefaultColumnDef ? void 0 : e.getDefaultColumnDef()), {}),
              ...n
            }
          }, a(n, "debugColumns", "_getDefaultColumnDef")),
          j: () => u.options.columns,
          getAllColumns: o(() => [u.j()], n => {
            const e = function(n, t, l) {
              return void 0 === l && (l = 0), n.map(n => {
                const r = function(n, e, t, l) {
                    var r, u;
                    const i = {
                        ...n.H(),
                        ...e
                      },
                      s = i.accessorKey;
                    let c, d = null != (r = null != (u = i.id) ? u : s ? s.replace(".", "_") : void 0) ? r : "string" == typeof i.header ? i.header : void 0;
                    if (i.accessorFn ? c = i.accessorFn : s && (c = s.includes(".") ? n => {
                        let e = n;
                        for (const n of s.split(".")) {
                          var t;
                          e = null == (t = e) ? void 0 : t[n], void 0 === e && console.warn(`"${n}" in deeply nested key "${s}" returned undefined.`)
                        }
                        return e
                      } : n => n[i.accessorKey]), !d) throw Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header");
                    let f = {
                      id: d + "",
                      accessorFn: c,
                      parent: l,
                      depth: t,
                      columnDef: i,
                      columns: [],
                      getFlatColumns: o(() => [!0], () => {
                        var n;
                        return [f, ...null == (n = f.columns) ? void 0 : n.flatMap(n => n.getFlatColumns())]
                      }, a(n.options, "debugColumns", "column.getFlatColumns")),
                      getLeafColumns: o(() => [n.C()], n => {
                        var e;
                        return null != (e = f.columns) && e.length ? n(f.columns.flatMap(n => n.getLeafColumns())) : [f]
                      }, a(n.options, "debugColumns", "column.getLeafColumns"))
                    };
                    for (const e of n.t) null == e.createColumn || e.createColumn(f, n);
                    return f
                  }(u, n, l, t),
                  i = n;
                return r.columns = i.columns ? e(i.columns, r, l + 1) : [], r
              })
            };
            return e(n)
          }, a(n, "debugColumns", "getAllColumns")),
          getAllFlatColumns: o(() => [u.getAllColumns()], n => n.flatMap(n => n.getFlatColumns()), a(n, "debugColumns", "getAllFlatColumns")),
          N: o(() => [u.getAllFlatColumns()], n => n.reduce((n, e) => (n[e.id] = e, n), {}), a(n, "debugColumns", "getAllFlatColumnsById")),
          getAllLeafColumns: o(() => [u.getAllColumns(), u.C()], (n, e) => e(n.flatMap(n => n.getLeafColumns())), a(n, "debugColumns", "getAllLeafColumns")),
          getColumn: n => {
            const e = u.N()[n];
            return e || console.error(`[Table] Column with id '${n}' does not exist.`), e
          }
        };
        Object.assign(u, f);
        for (let n = 0; n < u.t.length; n++) {
          const e = u.t[n];
          null == e || null == e.createTable || e.createTable(u)
        }
        return u
      }

      function $() {
        return n => o(() => [n.options.data], e => {
          const t = {
              rows: [],
              flatRows: [],
              rowsById: {}
            },
            l = function(e, r, u) {
              void 0 === r && (r = 0);
              const o = [];
              for (let i = 0; i < e.length; i++) {
                const s = f(n, n.P(e[i], i, u), e[i], i, r, void 0, u?.id);
                var a;
                t.flatRows.push(s), t.rowsById[s.id] = s, o.push(s), n.options.getSubRows && (s.originalSubRows = n.options.getSubRows(e[i], i), null != (a = s.originalSubRows) && a.length && (s.subRows = l(s.originalSubRows, r + 1, s)))
              }
              return o
            };
          return t.rows = l(e), t
        }, a(n.options, "debugTable", "getRowModel", () => n.L()))
      }

      function k() {
        return n => o(() => [n.getPreFilteredRowModel(), n.getState().columnFilters, n.getState().globalFilter], (e, t, l) => {
          if (!e.rows.length || (null == t || !t.length) && !l) {
            for (let n = 0; n < e.flatRows.length; n++) e.flatRows[n].columnFilters = {}, e.flatRows[n].columnFiltersMeta = {};
            return e
          }
          const r = [],
            u = [];
          (t ?? []).forEach(e => {
            var t;
            const l = n.getColumn(e.id);
            if (!l) return;
            const u = l.getFilterFn();
            u ? r.push({
              id: e.id,
              filterFn: u,
              resolvedValue: null != (t = null == u.resolveFilterValue ? void 0 : u.resolveFilterValue(e.value)) ? t : e.value
            }) : console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${l.id}.`)
          });
          const o = (t ?? []).map(n => n.id),
            a = n.getGlobalFilterFn(),
            i = n.getAllLeafColumns().filter(n => n.getCanGlobalFilter());
          let s, c;
          l && a && i.length && (o.push("__global__"), i.forEach(n => {
            var e;
            u.push({
              id: n.id,
              filterFn: a,
              resolvedValue: null != (e = null == a.resolveFilterValue ? void 0 : a.resolveFilterValue(l)) ? e : l
            })
          }));
          for (let n = 0; n < e.flatRows.length; n++) {
            const t = e.flatRows[n];
            if (t.columnFilters = {}, r.length)
              for (let n = 0; n < r.length; n++) {
                s = r[n];
                const e = s.id;
                t.columnFilters[e] = s.filterFn(t, e, s.resolvedValue, n => {
                  t.columnFiltersMeta[e] = n
                })
              }
            if (u.length) {
              for (let n = 0; n < u.length; n++) {
                c = u[n];
                const e = c.id;
                if (c.filterFn(t, e, c.resolvedValue, n => {
                    t.columnFiltersMeta[e] = n
                  })) {
                  t.columnFilters.G = !0;
                  break
                }
              }!0 !== t.columnFilters.G && (t.columnFilters.G = !1)
            }
          }
          return function(n, e, t) {
            return t.options.filterFromLeafRows ? function(n, e, t) {
              var l;
              const r = [],
                u = {},
                o = null != (l = t.options.maxLeafRowFilterDepth) ? l : 100,
                a = function(n, l) {
                  void 0 === l && (l = 0);
                  const i = [];
                  for (let c = 0; c < n.length; c++) {
                    var s;
                    let d = n[c];
                    const g = f(t, d.id, d.original, d.index, d.depth, void 0, d.parentId);
                    if (g.columnFilters = d.columnFilters, null != (s = d.subRows) && s.length && o > l) {
                      if (g.subRows = a(d.subRows, l + 1), d = g, e(d) && !g.subRows.length) {
                        i.push(d), u[d.id] = d, r.push(d);
                        continue
                      }
                      if (e(d) || g.subRows.length) {
                        i.push(d), u[d.id] = d, r.push(d);
                        continue
                      }
                    } else d = g, e(d) && (i.push(d), u[d.id] = d, r.push(d))
                  }
                  return i
                };
              return {
                rows: a(n),
                flatRows: r,
                rowsById: u
              }
            }(n, e, t) : function(n, e, t) {
              var l;
              const r = [],
                u = {},
                o = null != (l = t.options.maxLeafRowFilterDepth) ? l : 100,
                a = function(n, l) {
                  void 0 === l && (l = 0);
                  const i = [];
                  for (let c = 0; c < n.length; c++) {
                    let d = n[c];
                    if (e(d)) {
                      var s;
                      if (null != (s = d.subRows) && s.length && o > l) {
                        const n = f(t, d.id, d.original, d.index, d.depth, void 0, d.parentId);
                        n.subRows = a(d.subRows, l + 1), d = n
                      }
                      i.push(d), r.push(d), u[d.id] = d
                    }
                  }
                  return i
                };
              return {
                rows: a(n),
                flatRows: r,
                rowsById: u
              }
            }(n, e, t)
          }(e.rows, n => {
            for (let e = 0; e < o.length; e++)
              if (!1 === n.columnFilters[o[e]]) return !1;
            return !0
          }, n)
        }, a(n.options, "debugTable", "getFilteredRowModel", () => n.L()))
      }

      function U() {
        return n => o(() => [n.getState().sorting, n.getPreSortedRowModel()], (e, t) => {
          if (!t.rows.length || null == e || !e.length) return t;
          const l = n.getState().sorting,
            r = [],
            u = l.filter(e => {
              var t;
              return null == (t = n.getColumn(e.id)) ? void 0 : t.getCanSort()
            }),
            o = {};
          u.forEach(e => {
            const t = n.getColumn(e.id);
            t && (o[e.id] = {
              sortUndefined: t.columnDef.sortUndefined,
              invertSorting: t.columnDef.invertSorting,
              sortingFn: t.getSortingFn()
            })
          });
          const a = n => {
            const e = n.map(n => ({
              ...n
            }));
            return e.sort((n, e) => {
              for (let l = 0; l < u.length; l += 1) {
                var t;
                const r = u[l],
                  a = o[r.id],
                  i = a.sortUndefined,
                  s = null != (t = r?.desc) && t;
                let c = 0;
                if (i) {
                  const t = void 0 === n.getValue(r.id),
                    l = void 0 === e.getValue(r.id);
                  if (t || l) {
                    if ("first" === i) return t ? -1 : 1;
                    if ("last" === i) return t ? 1 : -1;
                    c = t && l ? 0 : t ? i : -i
                  }
                }
                if (0 === c && (c = a.sortingFn(n, e, r.id)), 0 !== c) return s && (c *= -1), a.invertSorting && (c *= -1), c
              }
              return n.index - e.index
            }), e.forEach(n => {
              var e;
              r.push(n), null != (e = n.subRows) && e.length && (n.subRows = a(n.subRows))
            }), e
          };
          return {
            rows: a(t.rows),
            flatRows: r,
            rowsById: t.rowsById
          }
        }, a(n.options, "debugTable", "getSortedRowModel", () => n.L()))
      }
    },
    79149: (n, e, t) => {
      t.d(e, {
        Kv: () => u,
        N4: () => o
      });
      var l = t(96540),
        r = t(33888);

      function u(n, e) {
        return n ? function(n) {
          return function(n) {
            return "function" == typeof n && (() => {
              const e = Object.getPrototypeOf(n);
              return e.prototype && e.prototype.isReactComponent
            })()
          }(n) || "function" == typeof n || function(n) {
            return "object" == typeof n && "symbol" == typeof n.$$typeof && ["react.memo", "react.forward_ref"].includes(n.$$typeof.description)
          }(n)
        }(n) ? l.createElement(n, e) : n : null
      }

      function o(n) {
        const e = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...n
          },
          [t] = l.useState(() => ({
            current: (0, r.ZR)(e)
          })),
          [u, o] = l.useState(() => t.current.initialState);
        return t.current.setOptions(e => ({
          ...e,
          ...n,
          state: {
            ...u,
            ...n.state
          },
          onStateChange: e => {
            o(e), null == n.onStateChange || n.onStateChange(e)
          }
        })), t.current
      }
    }
  }
]);
