try {
  let t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    n = (new t.Error).stack;
  n && (t.o = t.o || {}, t.o[n] = "39c5f513-8b54-43fb-8d96-71a11399e7e6", t.u = "sentry-dbid-39c5f513-8b54-43fb-8d96-71a11399e7e6")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [5638], {
    5638: (t, n, o) => {
      o.d(n, {
        A: () => Tt
      });
      var e = o(66118),
        r = o(12020);
      const i = {
        point: (t, n) => a(t, n, {
          intersect: !0
        }),
        nearest: (t, n, o) => function(t, n, o) {
          let e = 1 / 0;
          return a(t, n, o).reduce((t, i) => {
            const s = i.getCenterPoint(),
              a = function(t, n, o) {
                return "x" === o ? {
                  x: t.x,
                  y: n.y
                } : "y" === o ? {
                  x: n.x,
                  y: t.y
                } : n
              }(n, s, o.axis),
              c = (0, r.aE)(n, a);
            return e > c ? (t = [i], e = c) : c === e && t.push(i), t
          }, []).sort((t, n) => t.l - n.l).slice(0, 1)
        }(t, n, o),
        x: (t, n, o) => a(t, n, {
          intersect: o.intersect,
          axis: "x"
        }),
        y: (t, n, o) => a(t, n, {
          intersect: o.intersect,
          axis: "y"
        })
      };

      function s(t, n, o) {
        return (i[o.mode] || i.nearest)(t, n, o)
      }

      function a(t, n, o) {
        return t.visibleElements.filter(t => o.intersect ? t.inRange(n.x, n.y) : function(t, n, o) {
          return "x" !== o && "y" !== o ? t.inRange(n.x, n.y, "x", !0) || t.inRange(n.x, n.y, "y", !0) : t.inRange(n.x, n.y, o, !0)
        }(t, n, o.axis))
      }
      const c = (t, n) => n > t || t.length > n.length && t.slice(0, n.length) === n,
        d = .001,
        u = (t, n, o) => Math.min(o, Math.max(n, t));

      function h(t, n, o) {
        for (const e of Object.keys(t)) t[e] = u(t[e], n, o);
        return t
      }

      function l(t, {
        x: n,
        y: o,
        x2: e,
        y2: r
      }, i, s) {
        const a = s / 2,
          c = t.x >= n - a - d && t.x <= e + a + d,
          u = t.y >= o - a - d && t.y <= r + a + d;
        return "x" === i ? c : ("y" === i || c) && u
      }

      function f(t, n) {
        const {
          centerX: o,
          centerY: e
        } = t.getProps(["centerX", "centerY"], n);
        return {
          x: o,
          y: e
        }
      }
      const y = t => "string" == typeof t && t.endsWith("%"),
        x = t => parseFloat(t) / 100,
        p = t => u(x(t), 0, 1),
        b = (t, n) => ({
          x: t,
          y: n,
          x2: t,
          y2: n,
          width: 0,
          height: 0
        }),
        g = {
          box: t => b(t.centerX, t.centerY),
          ellipse: t => ({
            centerX: t.centerX,
            centerY: t.centerX,
            radius: 0,
            width: 0,
            height: 0
          }),
          label: t => b(t.centerX, t.centerY),
          line: t => b(t.x, t.y),
          point: t => ({
            centerX: t.centerX,
            centerY: t.centerY,
            radius: 0,
            width: 0,
            height: 0
          }),
          polygon: t => b(t.centerX, t.centerY)
        };

      function v(t, n) {
        return "start" === n ? 0 : "end" === n ? t : y(n) ? p(n) * t : t / 2
      }

      function M(t, n, o = !0) {
        return "number" == typeof n ? n : y(n) ? (o ? p(n) : x(n)) * t : t
      }

      function w(t, n = "center") {
        return (0, r.i)(t) ? {
          x: (0, r.v)(t.x, n),
          y: (0, r.v)(t.y, n)
        } : {
          x: t = (0, r.v)(t, n),
          y: t
        }
      }

      function m(t) {
        return t && ((0, r.h)(t.xValue) || (0, r.h)(t.yValue))
      }

      function S(t, n, o) {
        const e = o.init;
        if (e) return !0 === e ? j(n, o) : function(t, n, o) {
          const e = (0, r.Q)(o.init, [{
            chart: t,
            properties: n,
            options: o
          }]);
          return !0 === e ? j(n, o) : (0, r.i)(e) ? e : void 0
        }(t, n, o)
      }

      function D(t, n, o) {
        let e = !1;
        return n.forEach(n => {
          (0, r.a7)(t[n]) ? (e = !0, o[n] = t[n]) : (0, r.h)(o[n]) && delete o[n]
        }), e
      }

      function j(t, n) {
        const o = n.type || "line";
        return g[o](t)
      }
      const C = new Map;

      function O(t) {
        if (t && "object" == typeof t) {
          const n = t.toString();
          return "[object HTMLImageElement]" === n || "[object HTMLCanvasElement]" === n
        }
      }

      function X(t, {
        x: n,
        y: o
      }, e) {
        e && (t.translate(n, o), t.rotate((0, r.t)(e)), t.translate(-n, -o))
      }

      function Y(t, n) {
        if (n && n.borderWidth) return t.lineCap = n.borderCapStyle, t.setLineDash(n.borderDash), t.lineDashOffset = n.borderDashOffset, t.lineJoin = n.borderJoinStyle, t.lineWidth = n.borderWidth, t.strokeStyle = n.borderColor, !0
      }

      function k(t, n) {
        t.shadowColor = n.backgroundShadowColor, t.shadowBlur = n.shadowBlur, t.shadowOffsetX = n.shadowOffsetX, t.shadowOffsetY = n.shadowOffsetY
      }

      function A(t, n) {
        const o = n.content;
        if (O(o)) return {
          width: M(o.width, n.width),
          height: M(o.height, n.height)
        };
        const e = n.font,
          i = (0, r.b)(e) ? e.map(t => (0, r.a0)(t)) : [(0, r.a0)(e)],
          s = n.textStrokeWidth,
          a = (0, r.b)(o) ? o : [o],
          c = a.join() + (t => t.reduce(function(t, n) {
            return t + n.string
          }, ""))(i) + s + (t.p ? "-spriting" : "");
        return C.has(c) || C.set(c, function(t, n, o, e) {
          t.save();
          const r = n.length;
          let i = 0,
            s = e;
          for (let a = 0; r > a; a++) {
            const r = o[Math.min(a, o.length - 1)];
            t.font = r.string;
            const c = n[a];
            i = Math.max(i, t.measureText(c).width + e), s += r.lineHeight
          }
          return t.restore(), {
            width: i,
            height: s
          }
        }(t, a, i, s)), C.get(c)
      }

      function I(t, n, o) {
        const {
          x: e,
          y: i,
          width: s,
          height: a
        } = n;
        t.save(), k(t, o);
        const c = Y(t, o);
        t.fillStyle = o.backgroundColor, t.beginPath(), (0, r.au)(t, {
          x: e,
          y: i,
          w: s,
          h: a,
          radius: h((0, r.aw)(o.borderRadius), 0, Math.min(s, a) / 2)
        }), t.closePath(), t.fill(), c && (t.shadowColor = o.borderShadowColor, t.stroke()), t.restore()
      }
      const P = {
        xScaleID: {
          min: "xMin",
          max: "xMax",
          start: "left",
          end: "right",
          startProp: "x",
          endProp: "x2"
        },
        yScaleID: {
          min: "yMin",
          max: "yMax",
          start: "bottom",
          end: "top",
          startProp: "y",
          endProp: "y2"
        }
      };

      function z(t, n, o) {
        return n = "number" == typeof n ? n : t.parse(n), (0, r.g)(n) ? t.getPixelForValue(n) : o
      }

      function R(t, n, o) {
        const e = n[o];
        if (e || "scaleID" === o) return e;
        const r = o.charAt(0),
          i = Object.values(t).filter(t => t.axis && t.axis === r);
        return i.length ? i[0].id : r
      }

      function W(t, n) {
        if (t) {
          const o = t.options.reverse;
          return {
            start: z(t, n.min, o ? n.end : n.start),
            end: z(t, n.max, o ? n.start : n.end)
          }
        }
      }

      function E(t, n) {
        const {
          chartArea: o,
          scales: e
        } = t, r = e[R(e, n, "xScaleID")], i = e[R(e, n, "yScaleID")];
        let s = o.width / 2,
          a = o.height / 2;
        return r && (s = z(r, n.xValue, r.left + r.width / 2)), i && (a = z(i, n.yValue, i.top + i.height / 2)), {
          x: s,
          y: a
        }
      }

      function N(t, n) {
        const o = t.scales,
          e = o[R(o, n, "xScaleID")],
          r = o[R(o, n, "yScaleID")];
        if (!e && !r) return {};
        let {
          left: i,
          right: s
        } = e || t.chartArea, {
          top: a,
          bottom: c
        } = r || t.chartArea;
        const d = T(e, {
          min: n.xMin,
          max: n.xMax,
          start: i,
          end: s
        });
        i = d.start, s = d.end;
        const u = T(r, {
          min: n.yMin,
          max: n.yMax,
          start: c,
          end: a
        });
        return a = u.start, c = u.end, {
          x: i,
          y: a,
          x2: s,
          y2: c,
          width: s - i,
          height: c - a,
          centerX: i + (s - i) / 2,
          centerY: a + (c - a) / 2
        }
      }

      function B(t, n) {
        if (!m(n)) {
          const o = N(t, n);
          let e = n.radius;
          (!e || isNaN(e)) && (e = Math.min(o.width, o.height) / 2, n.radius = e);
          const r = 2 * e,
            i = o.centerX + n.xAdjust,
            s = o.centerY + n.yAdjust;
          return {
            x: i - e,
            y: s - e,
            x2: i + e,
            y2: s + e,
            centerX: i,
            centerY: s,
            width: r,
            height: r,
            radius: e
          }
        }
        return function(t, n) {
          const o = E(t, n),
            e = 2 * n.radius;
          return {
            x: o.x - n.radius + n.xAdjust,
            y: o.y - n.radius + n.yAdjust,
            x2: o.x + n.radius + n.xAdjust,
            y2: o.y + n.radius + n.yAdjust,
            centerX: o.x + n.xAdjust,
            centerY: o.y + n.yAdjust,
            radius: n.radius,
            width: e,
            height: e
          }
        }(t, n)
      }

      function V(t, n) {
        const o = N(t, n);
        return o.initProperties = S(t, o, n), o.elements = [{
          type: "label",
          optionScope: "label",
          properties: $(t, o, n),
          initProperties: o.initProperties
        }], o
      }

      function T(t, n) {
        const o = W(t, n) || n;
        return {
          start: Math.min(o.start, o.end),
          end: Math.max(o.start, o.end)
        }
      }

      function H(t, n) {
        const {
          start: o,
          end: e,
          borderWidth: r
        } = t, {
          position: i,
          padding: {
            start: s,
            end: a
          },
          adjust: c
        } = n;
        return o + r / 2 + c + v(e - r - o - s - a - n.size, i)
      }

      function $(t, n, o) {
        const e = o.label;
        e.backgroundColor = "transparent", e.callout.display = !1;
        const i = w(e.position),
          s = (0, r.E)(e.padding),
          a = A(t.ctx, e),
          c = function({
            properties: t,
            options: n
          }, o, e, r) {
            const {
              x: i,
              x2: s,
              width: a
            } = t;
            return H({
              start: i,
              end: s,
              size: a,
              borderWidth: n.borderWidth
            }, {
              position: e.x,
              padding: {
                start: r.left,
                end: r.right
              },
              adjust: n.label.xAdjust,
              size: o.width
            })
          }({
            properties: n,
            options: o
          }, a, i, s),
          d = function({
            properties: t,
            options: n
          }, o, e, r) {
            const {
              y: i,
              y2: s,
              height: a
            } = t;
            return H({
              start: i,
              end: s,
              size: a,
              borderWidth: n.borderWidth
            }, {
              position: e.y,
              padding: {
                start: r.top,
                end: r.bottom
              },
              adjust: n.label.yAdjust,
              size: o.height
            })
          }({
            properties: n,
            options: o
          }, a, i, s),
          u = a.width + s.width,
          h = a.height + s.height;
        return {
          x: c,
          y: d,
          x2: c + u,
          y2: d + h,
          width: u,
          height: h,
          centerX: c + u / 2,
          centerY: d + h / 2,
          rotation: e.rotation
        }
      }

      function J(t, n, o) {
        const e = Math.cos(o),
          r = Math.sin(o),
          i = n.x,
          s = n.y;
        return {
          x: i + e * (t.x - i) - r * (t.y - s),
          y: s + r * (t.x - i) + e * (t.y - s)
        }
      }
      const L = ["enter", "leave"],
        U = L.concat("click");

      function F({
        state: t,
        event: n
      }, o, e, r) {
        let i;
        for (const s of e) 0 > r.indexOf(s) && (i = q(s.options[o] || t.listeners[o], s, n) || i);
        return i
      }

      function q(t, n, o) {
        return !0 === (0, r.Q)(t, [n.$context, o])
      }
      const G = ["afterDraw", "beforeDraw"];

      function K(t, n, o) {
        if (t.hooked) {
          const e = n.options[o] || t.hooks[o];
          return (0, r.Q)(e, [n.$context])
        }
      }

      function Q(t, n, o, e) {
        if ((0, r.g)(n[o]) && ! function(t, n, o) {
            return (0, r.h)(t[n]) || (0, r.h)(t[o])
          }(t.options, o, e)) {
          const e = t[o] !== n[o];
          return t[o] = n[o], e
        }
      }

      function Z(t, n) {
        for (const o of ["scaleID", "xScaleID", "yScaleID"]) {
          const e = R(n, t, o);
          e && !n[e] && _(t, o) && console.warn(`No scale found with id '${e}' for annotation '${t.id}'`)
        }
      }

      function _(t, n) {
        if ("scaleID" === n) return !0;
        const o = n.charAt(0);
        for (const n of ["Min", "Max", "Value"])
          if ((0, r.h)(t[o + n])) return !0;
        return !1
      }

      function tt(t, n, o, e) {
        for (const i of o) {
          const o = t[i];
          if ((0, r.h)(o)) {
            const t = n.parse(o);
            e.min = Math.min(e.min, t), e.max = Math.max(e.max, t)
          }
        }
      }
      class nt extends e.Hg {
        inRange(t, n, o, e) {
          const {
            x: i,
            y: s
          } = J({
            x: t,
            y: n
          }, this.getCenterPoint(e), (0, r.t)(-this.options.rotation));
          return l({
            x: i,
            y: s
          }, this.getProps(["x", "y", "x2", "y2"], e), o, this.options.borderWidth)
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          t.save(), X(t, this.getCenterPoint(), this.options.rotation), I(t, this, this.options), t.restore()
        }
        get label() {
          return this.elements && this.elements[0]
        }
        resolveElementProperties(t, n) {
          return V(t, n)
        }
      }
      nt.id = "boxAnnotation", nt.defaults = {
        adjustScaleRange: !0,
        backgroundShadowColor: "transparent",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderRadius: 0,
        borderShadowColor: "transparent",
        borderWidth: 1,
        display: !0,
        init: void 0,
        label: {
          backgroundColor: "transparent",
          borderWidth: 0,
          callout: {
            display: !1
          },
          color: "black",
          content: null,
          display: !1,
          drawTime: void 0,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: "bold"
          },
          height: void 0,
          opacity: void 0,
          padding: 6,
          position: "center",
          rotation: void 0,
          textAlign: "start",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          width: void 0,
          xAdjust: 0,
          yAdjust: 0,
          z: void 0
        },
        rotation: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: void 0,
        yMax: void 0,
        yMin: void 0,
        yScaleID: void 0,
        z: 0
      }, nt.defaultRoutes = {
        borderColor: "color",
        backgroundColor: "color"
      }, nt.descriptors = {
        label: {
          M: !0
        }
      };
      const ot = ["left", "bottom", "top", "right"];
      class et extends e.Hg {
        inRange(t, n, o, e) {
          const {
            x: i,
            y: s
          } = J({
            x: t,
            y: n
          }, this.getCenterPoint(e), (0, r.t)(-this.rotation));
          return l({
            x: i,
            y: s
          }, this.getProps(["x", "y", "x2", "y2"], e), o, this.options.borderWidth)
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const n = this.options,
            o = !(0, r.h)(this.m) || this.m;
          !n.display || !n.content || !o || (t.save(), X(t, this.getCenterPoint(), this.rotation), function(t, n) {
            const {
              pointX: o,
              pointY: e,
              options: i
            } = n, s = i.callout, a = s && s.display && function(t, n) {
              const o = n.position;
              return ot.includes(o) ? o : function(t, n) {
                const {
                  x: o,
                  y: e,
                  x2: i,
                  y2: s,
                  width: a,
                  height: c,
                  pointX: d,
                  pointY: u,
                  centerX: h,
                  centerY: l,
                  rotation: f
                } = t, y = {
                  x: h,
                  y: l
                }, x = n.start, p = M(a, x), b = [o, o + p, o + p, i], g = [e + M(c, x), s, e, s], v = [];
                for (let t = 0; 4 > t; t++) {
                  const n = J({
                    x: b[t],
                    y: g[t]
                  }, y, (0, r.t)(f));
                  v.push({
                    position: ot[t],
                    distance: (0, r.aE)(n, {
                      x: d,
                      y: u
                    })
                  })
                }
                return v.sort((t, n) => t.distance - n.distance)[0].position
              }(t, n)
            }(n, s);
            if (!a || function(t, n, o) {
                const {
                  pointX: e,
                  pointY: r
                } = t, i = n.margin;
                let s = e,
                  a = r;
                return "left" === o ? s += i : "right" === o ? s -= i : "top" === o ? a += i : "bottom" === o && (a -= i), t.inRange(s, a)
              }(n, s, a)) return;
            if (t.save(), t.beginPath(), !Y(t, s)) return t.restore();
            const {
              separatorStart: c,
              separatorEnd: d
            } = function(t, n) {
              const {
                x: o,
                y: e,
                x2: r,
                y2: i
              } = t, s = function(t, n) {
                const {
                  width: o,
                  height: e,
                  options: r
                } = t, i = r.callout.margin + r.borderWidth / 2;
                return "right" === n ? o + i : "bottom" === n ? e + i : -i
              }(t, n);
              let a, c;
              return "left" === n || "right" === n ? (a = {
                x: o + s,
                y: e
              }, c = {
                x: a.x,
                y: i
              }) : (a = {
                x: o,
                y: e + s
              }, c = {
                x: r,
                y: a.y
              }), {
                separatorStart: a,
                separatorEnd: c
              }
            }(n, a), {
              sideStart: u,
              sideEnd: h
            } = function(t, n, o) {
              const {
                y: e,
                width: r,
                height: i,
                options: s
              } = t, a = s.callout.start, c = function(t, n) {
                const o = n.side;
                return "left" === t || "top" === t ? -o : o
              }(n, s.callout);
              let d, u;
              return "left" === n || "right" === n ? (d = {
                x: o.x,
                y: e + M(i, a)
              }, u = {
                x: d.x + c,
                y: d.y
              }) : (d = {
                x: o.x + M(r, a),
                y: o.y
              }, u = {
                x: d.x,
                y: d.y + c
              }), {
                sideStart: d,
                sideEnd: u
              }
            }(n, a, c);
            (s.margin > 0 || 0 === i.borderWidth) && (t.moveTo(c.x, c.y), t.lineTo(d.x, d.y)), t.moveTo(u.x, u.y), t.lineTo(h.x, h.y);
            const l = J({
              x: o,
              y: e
            }, n.getCenterPoint(), (0, r.t)(-n.rotation));
            t.lineTo(l.x, l.y), t.stroke(), t.restore()
          }(t, this), I(t, this, n), function(t, n, o) {
            const e = o.content;
            if (O(e)) return t.save(), t.globalAlpha = function(t, n) {
              const o = (0, r.x)(t) ? t : n;
              return (0, r.x)(o) ? u(o, 0, 1) : 1
            }(o.opacity, e.style.opacity), t.drawImage(e, n.x, n.y, n.width, n.height), void t.restore();
            const i = (0, r.b)(e) ? e : [e],
              s = o.font,
              a = (0, r.b)(s) ? s.map(t => (0, r.a0)(t)) : [(0, r.a0)(s)],
              c = o.color,
              d = (0, r.b)(c) ? c : [c],
              h = function(t, n) {
                const {
                  x: o,
                  width: e
                } = t, r = n.textAlign;
                return "center" === r ? o + e / 2 : "end" === r || "right" === r ? o + e : o
              }(n, o),
              l = n.y + o.textStrokeWidth / 2;
            t.save(), t.textBaseline = "middle", t.textAlign = o.textAlign,
              function(t, n) {
                if (n.textStrokeWidth > 0) return t.lineJoin = "round", t.miterLimit = 2, t.lineWidth = n.textStrokeWidth, t.strokeStyle = n.textStrokeColor, !0
              }(t, o) && function(t, {
                x: n,
                y: o
              }, e, r) {
                t.beginPath();
                let i = 0;
                e.forEach(function(e, s) {
                  const a = r[Math.min(s, r.length - 1)],
                    c = a.lineHeight;
                  t.font = a.string, t.strokeText(e, n, o + c / 2 + i), i += c
                }), t.stroke()
              }(t, {
                x: h,
                y: l
              }, i, a),
              function(t, {
                x: n,
                y: o
              }, e, {
                fonts: r,
                colors: i
              }) {
                let s = 0;
                e.forEach(function(e, a) {
                  const c = i[Math.min(a, i.length - 1)],
                    d = r[Math.min(a, r.length - 1)],
                    u = d.lineHeight;
                  t.beginPath(), t.font = d.string, t.fillStyle = c, t.fillText(e, n, o + u / 2 + s), s += u, t.fill()
                })
              }(t, {
                x: h,
                y: l
              }, i, {
                fonts: a,
                colors: d
              }), t.restore()
          }(t, function({
            x: t,
            y: n,
            width: o,
            height: e,
            options: i
          }) {
            const s = i.borderWidth / 2,
              a = (0, r.E)(i.padding);
            return {
              x: t + a.left + s,
              y: n + a.top + s,
              width: o - a.left - a.right - i.borderWidth,
              height: e - a.top - a.bottom - i.borderWidth
            }
          }(this), n), t.restore())
        }
        resolveElementProperties(t, n) {
          let o;
          if (m(n)) o = E(t, n);
          else {
            const {
              centerX: e,
              centerY: r
            } = N(t, n);
            o = {
              x: e,
              y: r
            }
          }
          const e = (0, r.E)(n.padding),
            i = function(t, n, o, e) {
              const r = n.width + e.width + o.borderWidth,
                i = n.height + e.height + o.borderWidth,
                s = w(o.position, "center"),
                a = rt(t.x, r, o.xAdjust, s.x),
                c = rt(t.y, i, o.yAdjust, s.y);
              return {
                x: a,
                y: c,
                x2: a + r,
                y2: c + i,
                width: r,
                height: i,
                centerX: a + r / 2,
                centerY: c + i / 2
              }
            }(o, A(t.ctx, n), n, e);
          return {
            initProperties: S(t, i, n),
            pointX: o.x,
            pointY: o.y,
            ...i,
            rotation: n.rotation
          }
        }
      }

      function rt(t, n, o = 0, e) {
        return t - v(n, e) + o
      }
      et.id = "labelAnnotation", et.defaults = {
        adjustScaleRange: !0,
        backgroundColor: "transparent",
        backgroundShadowColor: "transparent",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderRadius: 0,
        borderShadowColor: "transparent",
        borderWidth: 0,
        callout: {
          borderCapStyle: "butt",
          borderColor: void 0,
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 1,
          display: !1,
          margin: 5,
          position: "auto",
          side: 5,
          start: "50%"
        },
        color: "black",
        content: null,
        display: !0,
        font: {
          family: void 0,
          lineHeight: void 0,
          size: void 0,
          style: void 0,
          weight: void 0
        },
        height: void 0,
        init: void 0,
        opacity: void 0,
        padding: 6,
        position: "center",
        rotation: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        textAlign: "center",
        textStrokeColor: void 0,
        textStrokeWidth: 0,
        width: void 0,
        xAdjust: 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: void 0,
        xValue: void 0,
        yAdjust: 0,
        yMax: void 0,
        yMin: void 0,
        yScaleID: void 0,
        yValue: void 0,
        z: 0
      }, et.defaultRoutes = {
        borderColor: "color"
      };
      const it = (t, n, o) => ({
          x: t.x + o * (n.x - t.x),
          y: t.y + o * (n.y - t.y)
        }),
        st = (t, n, o) => it(n, o, Math.abs((t - n.y) / (o.y - n.y))).x,
        at = (t, n, o) => it(n, o, Math.abs((t - n.x) / (o.x - n.x))).y,
        ct = t => t * t,
        dt = (t, n, o, e) => (1 - e) * (1 - e) * t + 2 * (1 - e) * e * n + e * e * o,
        ut = (t, n, o, e) => ({
          x: dt(t.x, n.x, o.x, e),
          y: dt(t.y, n.y, o.y, e)
        }),
        ht = (t, n, o, e) => 2 * (1 - e) * (n - t) + 2 * e * (o - n),
        lt = (t, n, o, e) => -Math.atan2(ht(t.x, n.x, o.x, e), ht(t.y, n.y, o.y, e)) + .5 * r.P;
      class ft extends e.Hg {
        inRange(t, n, o, e) {
          const r = this.options.borderWidth / 2;
          if ("x" !== o && "y" !== o) {
            const o = {
                mouseX: t,
                mouseY: n
              },
              {
                path: i,
                ctx: s
              } = this;
            if (i) {
              Y(s, this.options);
              const {
                chart: r
              } = this.$context, a = t * r.currentDevicePixelRatio, c = n * r.currentDevicePixelRatio, d = s.isPointInStroke(i, a, c) || pt(this, o, e);
              return s.restore(), d
            }
            return function(t, {
              mouseX: n,
              mouseY: o
            }, e = d, r) {
              const {
                x: i,
                y: s,
                x2: a,
                y2: c
              } = t.getProps(["x", "y", "x2", "y2"], r), u = a - i, h = c - s, l = ct(u) + ct(h), f = 0 === l ? -1 : ((n - i) * u + (o - s) * h) / l;
              let y, x;
              return 0 > f ? (y = i, x = s) : f > 1 ? (y = a, x = c) : (y = i + f * u, x = s + f * h), ct(n - y) + ct(o - x) <= e
            }(this, o, ct(r), e) || pt(this, o, e)
          }
          return function(t, {
            mouseX: n,
            mouseY: o
          }, e, {
            hBorderWidth: r,
            useFinalPosition: i
          }) {
            const s = ((t, n, {
              x: o,
              y: e,
              x2: r,
              y2: i
            }, s) => "y" === s ? {
              start: Math.min(e, i),
              end: Math.max(e, i),
              value: n
            } : {
              start: Math.min(o, r),
              end: Math.max(o, r),
              value: t
            })(n, o, t.getProps(["x", "y", "x2", "y2"], i), e);
            return s.value >= s.start - r && s.value <= s.end + r || pt(t, {
              mouseX: n,
              mouseY: o
            }, i, e)
          }(this, {
            mouseX: t,
            mouseY: n
          }, o, {
            hBorderWidth: r,
            useFinalPosition: e
          })
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const {
            x: n,
            y: o,
            x2: e,
            y2: i,
            cp: s,
            options: a
          } = this;
          if (t.save(), !Y(t, a)) return t.restore();
          k(t, a);
          const c = Math.sqrt(Math.pow(e - n, 2) + Math.pow(i - o, 2));
          if (a.curve && s) return function(t, n, o, e) {
            const {
              x: i,
              y: s,
              x2: a,
              y2: c,
              options: d
            } = n, {
              startOpts: u,
              endOpts: h,
              startAdjust: l,
              endAdjust: f
            } = vt(n), y = {
              x: i,
              y: s
            }, x = {
              x: a,
              y: c
            }, p = lt(y, o, x, 0), b = lt(y, o, x, 1) - r.P, g = ut(y, o, x, l / e), v = ut(y, o, x, 1 - f / e), M = new Path2D;
            t.beginPath(), M.moveTo(g.x, g.y), M.quadraticCurveTo(o.x, o.y, v.x, v.y), t.shadowColor = d.borderShadowColor, t.stroke(M), n.path = M, n.ctx = t, mt(t, g, {
              angle: p,
              adjust: l
            }, u), mt(t, v, {
              angle: b,
              adjust: f
            }, h)
          }(t, this, s, c), t.restore();
          const {
            startOpts: d,
            endOpts: u,
            startAdjust: h,
            endAdjust: l
          } = vt(this), f = Math.atan2(i - o, e - n);
          t.translate(n, o), t.rotate(f), t.beginPath(), t.moveTo(0 + h, 0), t.lineTo(c - l, 0), t.shadowColor = a.borderShadowColor, t.stroke(), wt(t, 0, h, d), wt(t, c, -l, u), t.restore()
        }
        get label() {
          return this.elements && this.elements[0]
        }
        resolveElementProperties(t, n) {
          const o = function(t, n) {
              const {
                scales: o,
                chartArea: e
              } = t, r = o[n.scaleID], i = {
                x: e.left,
                y: e.top,
                x2: e.right,
                y2: e.bottom
              };
              return r ? function(t, n, o) {
                const e = z(t, o.value, NaN),
                  r = z(t, o.endValue, e);
                t.isHorizontal() ? (n.x = e, n.x2 = r) : (n.y = e, n.y2 = r)
              }(r, i, n) : function(t, n, o) {
                for (const e of Object.keys(P)) {
                  const r = t[R(t, o, e)];
                  if (r) {
                    const {
                      min: t,
                      max: i,
                      start: s,
                      end: a,
                      startProp: c,
                      endProp: d
                    } = P[e], u = W(r, {
                      min: o[t],
                      max: o[i],
                      start: r[s],
                      end: r[a]
                    });
                    n[c] = u.start, n[d] = u.end
                  }
                }
              }(o, i, n), i
            }(t, n),
            {
              x: e,
              y: i,
              x2: s,
              y2: a
            } = o,
            c = function({
              x: t,
              y: n,
              x2: o,
              y2: e
            }, {
              top: r,
              right: i,
              bottom: s,
              left: a
            }) {
              return !(a > t && a > o || t > i && o > i || r > n && r > e || n > s && e > s)
            }(o, t.chartArea),
            d = c ? function(t, n, o) {
              const {
                x: e,
                y: r
              } = xt(t, n, o), {
                x: i,
                y: s
              } = xt(n, t, o);
              return {
                x: e,
                y: r,
                x2: i,
                y2: s,
                width: Math.abs(i - e),
                height: Math.abs(s - r)
              }
            }({
              x: e,
              y: i
            }, {
              x: s,
              y: a
            }, t.chartArea) : {
              x: e,
              y: i,
              x2: s,
              y2: a,
              width: Math.abs(s - e),
              height: Math.abs(a - i)
            };
          if (d.centerX = (s + e) / 2, d.centerY = (a + i) / 2, d.initProperties = S(t, d, n), n.curve) {
            const t = {
                x: d.x,
                y: d.y
              },
              o = {
                x: d.x2,
                y: d.y2
              };
            d.cp = function(t, n, o) {
              const {
                x: e,
                y: r,
                x2: i,
                y2: s,
                centerX: a,
                centerY: c
              } = t, d = Math.atan2(s - r, i - e), u = w(n.controlPoint, 0);
              return J({
                x: a + M(o, u.x, !1),
                y: c + M(o, u.y, !1)
              }, {
                x: a,
                y: c
              }, d)
            }(d, n, (0, r.aE)(t, o))
          }
          const u = function(t, n, o) {
            const e = o.borderWidth,
              i = (0, r.E)(o.padding),
              s = A(t.ctx, o);
            return function(t, n, o, e) {
              const {
                width: i,
                height: s,
                padding: a
              } = o, {
                xAdjust: c,
                yAdjust: d
              } = n, u = {
                x: t.x,
                y: t.y
              }, h = {
                x: t.x2,
                y: t.y2
              }, l = "auto" === n.rotation ? function(t) {
                const {
                  x: n,
                  y: o,
                  x2: e,
                  y2: i
                } = t, s = Math.atan2(i - o, e - n);
                return s > r.P / 2 ? s - r.P : s < r.P / -2 ? s + r.P : s
              }(t) : (0, r.t)(n.rotation), f = function(t, n, o) {
                const e = Math.cos(o),
                  r = Math.sin(o);
                return {
                  w: Math.abs(t * e) + Math.abs(n * r),
                  h: Math.abs(t * r) + Math.abs(n * e)
                }
              }(i, s, l), y = function(t, n, o, e) {
                let r;
                const i = function(t, n) {
                  const {
                    x: o,
                    x2: e,
                    y: r,
                    y2: i
                  } = t, s = Math.min(r, i) - n.top, a = Math.min(o, e) - n.left, c = n.bottom - Math.max(r, i), d = n.right - Math.max(o, e);
                  return {
                    x: Math.min(a, d),
                    y: Math.min(s, c),
                    dx: a > d ? -1 : 1,
                    dy: s > c ? -1 : 1
                  }
                }(t, e);
                return r = "start" === n.position ? bt({
                  w: t.x2 - t.x,
                  h: t.y2 - t.y
                }, o, 0, i) : "end" === n.position ? 1 - bt({
                  w: t.x - t.x2,
                  h: t.y - t.y2
                }, o, 0, i) : v(1, n.position), r
              }(t, n, {
                labelSize: f,
                padding: a
              }, e), x = t.cp ? ut(u, t.cp, h, y) : it(u, h, y), p = {
                size: f.w,
                min: e.left,
                max: e.right,
                padding: a.left
              }, b = {
                size: f.h,
                min: e.top,
                max: e.bottom,
                padding: a.top
              }, g = gt(x.x, p) + c, M = gt(x.y, b) + d;
              return {
                x: g - i / 2,
                y: M - s / 2,
                x2: g + i / 2,
                y2: M + s / 2,
                centerX: g,
                centerY: M,
                pointX: x.x,
                pointY: x.y,
                width: i,
                height: s,
                rotation: (0, r.U)(l)
              }
            }(n, o, {
              width: s.width + i.width + e,
              height: s.height + i.height + e,
              padding: i
            }, t.chartArea)
          }(t, d, n.label);
          return u.m = c, d.elements = [{
            type: "label",
            optionScope: "label",
            properties: u,
            initProperties: d.initProperties
          }], d
        }
      }
      ft.id = "lineAnnotation";
      const yt = {
        backgroundColor: void 0,
        backgroundShadowColor: void 0,
        borderColor: void 0,
        borderDash: void 0,
        borderDashOffset: void 0,
        borderShadowColor: void 0,
        borderWidth: void 0,
        display: void 0,
        fill: void 0,
        length: void 0,
        shadowBlur: void 0,
        shadowOffsetX: void 0,
        shadowOffsetY: void 0,
        width: void 0
      };

      function xt({
        x: t,
        y: n
      }, o, {
        top: e,
        right: r,
        bottom: i,
        left: s
      }) {
        return s > t && (n = at(s, {
          x: t,
          y: n
        }, o), t = s), t > r && (n = at(r, {
          x: t,
          y: n
        }, o), t = r), e > n && (t = st(e, {
          x: t,
          y: n
        }, o), n = e), n > i && (t = st(i, {
          x: t,
          y: n
        }, o), n = i), {
          x: t,
          y: n
        }
      }

      function pt(t, {
        mouseX: n,
        mouseY: o
      }, e, r) {
        const i = t.label;
        return i.options.display && i.inRange(n, o, r, e)
      }

      function bt(t, n, o, e) {
        const {
          labelSize: r,
          padding: i
        } = n, s = t.w * e.dx, a = t.h * e.dy, c = s > 0 && (r.w / 2 + i.left - e.x) / s, d = a > 0 && (r.h / 2 + i.top - e.y) / a;
        return u(Math.max(c, d), 0, .25)
      }

      function gt(t, n) {
        const {
          size: o,
          min: e,
          max: r,
          padding: i
        } = n, s = o / 2;
        return o > r - e ? (r + e) / 2 : (e >= t - i - s && (t = e + i + s), t + i + s >= r && (t = r - i - s), t)
      }

      function vt(t) {
        const n = t.options,
          o = n.arrowHeads && n.arrowHeads.start,
          e = n.arrowHeads && n.arrowHeads.end;
        return {
          startOpts: o,
          endOpts: e,
          startAdjust: Mt(t, o),
          endAdjust: Mt(t, e)
        }
      }

      function Mt(t, n) {
        if (!n || !n.display) return 0;
        const {
          length: o,
          width: e
        } = n, r = t.options.borderWidth / 2;
        return Math.abs(st(0, {
          x: o,
          y: e + r
        }, {
          x: 0,
          y: r
        }))
      }

      function wt(t, n, o, e) {
        if (!e || !e.display) return;
        const {
          length: r,
          width: i,
          fill: s,
          backgroundColor: a,
          borderColor: c
        } = e, d = Math.abs(n - r) + o;
        t.beginPath(), k(t, e), Y(t, e), t.moveTo(d, -i), t.lineTo(n + o, 0), t.lineTo(d, i), !0 === s ? (t.fillStyle = a || c, t.closePath(), t.fill(), t.shadowColor = "transparent") : t.shadowColor = e.borderShadowColor, t.stroke()
      }

      function mt(t, {
        x: n,
        y: o
      }, {
        angle: e,
        adjust: r
      }, i) {
        !i || !i.display || (t.save(), t.translate(n, o), t.rotate(e), wt(t, 0, -r, i), t.restore())
      }
      ft.defaults = {
        adjustScaleRange: !0,
        arrowHeads: {
          display: !1,
          end: Object.assign({}, yt),
          fill: !1,
          length: 12,
          start: Object.assign({}, yt),
          width: 6
        },
        borderDash: [],
        borderDashOffset: 0,
        borderShadowColor: "transparent",
        borderWidth: 2,
        curve: !1,
        controlPoint: {
          y: "-50%"
        },
        display: !0,
        endValue: void 0,
        init: void 0,
        label: {
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderColor: "black",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 6,
          borderShadowColor: "transparent",
          borderWidth: 0,
          callout: Object.assign({}, et.defaults.callout),
          color: "#fff",
          content: null,
          display: !1,
          drawTime: void 0,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: "bold"
          },
          height: void 0,
          opacity: void 0,
          padding: 6,
          position: "center",
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textAlign: "center",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          width: void 0,
          xAdjust: 0,
          yAdjust: 0,
          z: void 0
        },
        scaleID: void 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        value: void 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: void 0,
        yMax: void 0,
        yMin: void 0,
        yScaleID: void 0,
        z: 0
      }, ft.descriptors = {
        arrowHeads: {
          start: {
            M: !0
          },
          end: {
            M: !0
          },
          M: !0
        }
      }, ft.defaultRoutes = {
        borderColor: "color"
      };
      class St extends e.Hg {
        inRange(t, n, o, e) {
          const i = this.options.rotation,
            s = this.options.borderWidth;
          if ("x" !== o && "y" !== o) return function(t, n, o, e) {
            const {
              width: i,
              height: s,
              centerX: a,
              centerY: c
            } = n, d = i / 2, u = s / 2;
            if (0 >= d || 0 >= u) return !1;
            const h = (0, r.t)(o || 0),
              l = e / 2 || 0,
              f = Math.cos(h),
              y = Math.sin(h),
              x = Math.pow(f * (t.x - a) + y * (t.y - c), 2),
              p = Math.pow(y * (t.x - a) - f * (t.y - c), 2);
            return 1.0001 >= x / Math.pow(d + l, 2) + p / Math.pow(u + l, 2)
          }({
            x: t,
            y: n
          }, this.getProps(["width", "height", "centerX", "centerY"], e), i, s);
          const {
            x: a,
            y: c,
            x2: u,
            y2: h
          } = this.getProps(["x", "y", "x2", "y2"], e), l = s / 2, f = "y" === o ? {
            start: c,
            end: h
          } : {
            start: a,
            end: u
          }, y = J({
            x: t,
            y: n
          }, this.getCenterPoint(e), (0, r.t)(-i));
          return y[o] >= f.start - l - d && y[o] <= f.end + l + d
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const {
            width: n,
            height: o,
            centerX: e,
            centerY: i,
            options: s
          } = this;
          t.save(), X(t, this.getCenterPoint(), s.rotation), k(t, this.options), t.beginPath(), t.fillStyle = s.backgroundColor;
          const a = Y(t, s);
          t.ellipse(e, i, o / 2, n / 2, r.P / 2, 0, 2 * r.P), t.fill(), a && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore()
        }
        get label() {
          return this.elements && this.elements[0]
        }
        resolveElementProperties(t, n) {
          return V(t, n)
        }
      }
      St.id = "ellipseAnnotation", St.defaults = {
        adjustScaleRange: !0,
        backgroundShadowColor: "transparent",
        borderDash: [],
        borderDashOffset: 0,
        borderShadowColor: "transparent",
        borderWidth: 1,
        display: !0,
        init: void 0,
        label: Object.assign({}, nt.defaults.label),
        rotation: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: void 0,
        yMax: void 0,
        yMin: void 0,
        yScaleID: void 0,
        z: 0
      }, St.defaultRoutes = {
        borderColor: "color",
        backgroundColor: "color"
      }, St.descriptors = {
        label: {
          M: !0
        }
      };
      class Dt extends e.Hg {
        inRange(t, n, o, e) {
          const {
            x: r,
            y: i,
            x2: s,
            y2: a,
            width: c
          } = this.getProps(["x", "y", "x2", "y2", "width"], e), d = this.options.borderWidth;
          if ("x" !== o && "y" !== o) return function(t, n, o, e) {
            if (!t || !n || 0 >= o) return !1;
            const r = e / 2;
            return Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2) <= Math.pow(o + r, 2)
          }({
            x: t,
            y: n
          }, this.getCenterPoint(e), c / 2, d);
          const u = d / 2,
            h = "y" === o ? {
              start: i,
              end: a,
              value: n
            } : {
              start: r,
              end: s,
              value: t
            };
          return h.value >= h.start - u && h.end + u >= h.value
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const n = this.options,
            o = n.borderWidth;
          if (.1 > n.radius) return;
          t.save(), t.fillStyle = n.backgroundColor, k(t, n);
          const e = Y(t, n);
          (function(t, n, o, e) {
            const {
              radius: i,
              options: s
            } = n, a = s.pointStyle, c = s.rotation;
            let d = (c || 0) * r.b3;
            if (O(a)) return t.save(), t.translate(o, e), t.rotate(d), t.drawImage(a, -a.width / 2, -a.height / 2, a.width, a.height), void t.restore();
            (t => isNaN(t) || 0 >= t)(i) || function(t, {
              x: n,
              y: o,
              radius: e,
              rotation: i,
              style: s,
              rad: a
            }) {
              let c, d, u, h;
              switch (t.beginPath(), s) {
                default:
                  t.arc(n, o, e, 0, r.T), t.closePath();
                  break;
                case "triangle":
                  t.moveTo(n + Math.sin(a) * e, o - Math.cos(a) * e), a += r.b5, t.lineTo(n + Math.sin(a) * e, o - Math.cos(a) * e), a += r.b5, t.lineTo(n + Math.sin(a) * e, o - Math.cos(a) * e), t.closePath();
                  break;
                case "rectRounded":
                  h = .516 * e, u = e - h, c = Math.cos(a + r.b4) * u, d = Math.sin(a + r.b4) * u, t.arc(n - c, o - d, h, a - r.P, a - r.H), t.arc(n + d, o - c, h, a - r.H, a), t.arc(n + c, o + d, h, a, a + r.H), t.arc(n - d, o + c, h, a + r.H, a + r.P), t.closePath();
                  break;
                case "rect":
                  if (!i) {
                    u = Math.SQRT1_2 * e, t.rect(n - u, o - u, 2 * u, 2 * u);
                    break
                  }
                  a += r.b4;
                case "rectRot":
                  c = Math.cos(a) * e, d = Math.sin(a) * e, t.moveTo(n - c, o - d), t.lineTo(n + d, o - c), t.lineTo(n + c, o + d), t.lineTo(n - d, o + c), t.closePath();
                  break;
                case "crossRot":
                  a += r.b4;
                case "cross":
                  c = Math.cos(a) * e, d = Math.sin(a) * e, t.moveTo(n - c, o - d), t.lineTo(n + c, o + d), t.moveTo(n + d, o - c), t.lineTo(n - d, o + c);
                  break;
                case "star":
                  c = Math.cos(a) * e, d = Math.sin(a) * e, t.moveTo(n - c, o - d), t.lineTo(n + c, o + d), t.moveTo(n + d, o - c), t.lineTo(n - d, o + c), a += r.b4, c = Math.cos(a) * e, d = Math.sin(a) * e, t.moveTo(n - c, o - d), t.lineTo(n + c, o + d), t.moveTo(n + d, o - c), t.lineTo(n - d, o + c);
                  break;
                case "line":
                  c = Math.cos(a) * e, d = Math.sin(a) * e, t.moveTo(n - c, o - d), t.lineTo(n + c, o + d);
                  break;
                case "dash":
                  t.moveTo(n, o), t.lineTo(n + Math.cos(a) * e, o + Math.sin(a) * e)
              }
              t.fill()
            }(t, {
              x: o,
              y: e,
              radius: i,
              rotation: c,
              style: a,
              rad: d
            })
          })(t, this, this.centerX, this.centerY), e && !O(n.pointStyle) && (t.shadowColor = n.borderShadowColor, t.stroke()), t.restore(), n.borderWidth = o
        }
        resolveElementProperties(t, n) {
          const o = B(t, n);
          return o.initProperties = S(t, o, n), o
        }
      }
      Dt.id = "pointAnnotation", Dt.defaults = {
        adjustScaleRange: !0,
        backgroundShadowColor: "transparent",
        borderDash: [],
        borderDashOffset: 0,
        borderShadowColor: "transparent",
        borderWidth: 1,
        display: !0,
        init: void 0,
        pointStyle: "circle",
        radius: 10,
        rotation: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        xAdjust: 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: void 0,
        xValue: void 0,
        yAdjust: 0,
        yMax: void 0,
        yMin: void 0,
        yScaleID: void 0,
        yValue: void 0,
        z: 0
      }, Dt.defaultRoutes = {
        borderColor: "color",
        backgroundColor: "color"
      };
      class jt extends e.Hg {
        inRange(t, n, o, e) {
          if ("x" !== o && "y" !== o) return this.options.radius >= .1 && this.elements.length > 1 && function(t, n, o, e) {
            let r = !1,
              i = t[t.length - 1].getProps(["bX", "bY"], e);
            for (const s of t) {
              const t = s.getProps(["bX", "bY"], e);
              t.bY > o != i.bY > o && n < (i.bX - t.bX) * (o - t.bY) / (i.bY - t.bY) + t.bX && (r = !r), i = t
            }
            return r
          }(this.elements, t, n, e);
          const i = J({
              x: t,
              y: n
            }, this.getCenterPoint(e), (0, r.t)(-this.options.rotation)),
            s = this.elements.map(t => "y" === o ? t.bY : t.bX),
            a = Math.min(...s),
            c = Math.max(...s);
          return i[o] >= a && i[o] <= c
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const {
            elements: n,
            options: o
          } = this;
          t.save(), t.beginPath(), t.fillStyle = o.backgroundColor, k(t, o);
          const e = Y(t, o);
          let r = !0;
          for (const o of n) r ? (t.moveTo(o.x, o.y), r = !1) : t.lineTo(o.x, o.y);
          t.closePath(), t.fill(), e && (t.shadowColor = o.borderShadowColor, t.stroke()), t.restore()
        }
        resolveElementProperties(t, n) {
          const o = B(t, n),
            {
              sides: e,
              rotation: i
            } = n,
            s = [],
            a = 2 * r.P / e;
          let c = i * r.b3;
          for (let r = 0; e > r; r++, c += a) {
            const e = Ct(o, n, c);
            e.initProperties = S(t, o, n), s.push(e)
          }
          return o.elements = s, o
        }
      }

      function Ct({
        centerX: t,
        centerY: n
      }, {
        radius: o,
        borderWidth: e
      }, r) {
        const i = e / 2,
          s = Math.sin(r),
          a = Math.cos(r),
          c = {
            x: t + s * o,
            y: n - a * o
          };
        return {
          type: "point",
          optionScope: "point",
          properties: {
            x: c.x,
            y: c.y,
            centerX: c.x,
            centerY: c.y,
            bX: t + s * (o + i),
            bY: n - a * (o + i)
          }
        }
      }
      jt.id = "polygonAnnotation", jt.defaults = {
        adjustScaleRange: !0,
        backgroundShadowColor: "transparent",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderShadowColor: "transparent",
        borderWidth: 1,
        display: !0,
        init: void 0,
        point: {
          radius: 0
        },
        radius: 10,
        rotation: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        sides: 3,
        xAdjust: 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: void 0,
        xValue: void 0,
        yAdjust: 0,
        yMax: void 0,
        yMin: void 0,
        yScaleID: void 0,
        yValue: void 0,
        z: 0
      }, jt.defaultRoutes = {
        borderColor: "color",
        backgroundColor: "color"
      };
      const Ot = {
        box: nt,
        ellipse: St,
        label: et,
        line: ft,
        point: Dt,
        polygon: jt
      };
      Object.keys(Ot).forEach(t => {
        r.d.describe("elements." + Ot[t].id, {
          M: "plugins.annotation.common"
        })
      });
      const Xt = {
          update: Object.assign
        },
        Yt = U.concat(G),
        kt = (t, n) => (0, r.i)(n) ? Et(t, n) : t,
        At = t => "color" === t || "font" === t;

      function It(t = "line") {
        return Ot[t] ? t : (console.warn(`Unknown annotation type: '${t}', defaulting to 'line'`), "line")
      }

      function Pt(t) {
        return isNaN(t.x) || isNaN(t.y)
      }

      function zt(t, n, o, e) {
        const r = t.elements || (t.elements = []);
        r.length = n.length;
        for (let t = 0; t < n.length; t++) {
          const i = n[t],
            s = i.properties,
            a = Rt(r, t, i.type, i.initProperties),
            c = o[i.optionScope].override(i);
          s.options = Wt(c), e.update(a, s)
        }
      }

      function Rt(t, n, o, e) {
        const r = Ot[It(o)];
        let i = t[n];
        return (!i || !(i instanceof r)) && (i = t[n] = new r, Object.assign(i, e)), i
      }

      function Wt(t) {
        const n = Ot[It(t.type)],
          o = {};
        o.id = t.id, o.type = t.type, o.drawTime = t.drawTime, Object.assign(o, Et(t, n.defaults), Et(t, n.defaultRoutes));
        for (const n of Yt) o[n] = t[n];
        return o
      }

      function Et(t, n) {
        const o = {};
        for (const e of Object.keys(n)) {
          const i = n[e],
            s = t[e];
          At(e) && (0, r.b)(s) ? o[e] = s.map(t => kt(t, i)) : o[e] = kt(s, i)
        }
        return o
      }

      function Nt(t, n, o) {
        return n.$context || (n.$context = Object.assign(Object.create(t.getContext()), {
          element: n,
          id: o.id,
          type: "annotation"
        }))
      }
      const Bt = new Map,
        Vt = U.concat(G);
      var Tt = {
        id: "annotation",
        version: "3.0.1",
        beforeRegister() {
          ! function(t, n, o, e = !0) {
            const r = o.split(".");
            let i = 0;
            for (const s of n.split(".")) {
              const a = r[i++];
              if (parseInt(a, 10) > parseInt(s, 10)) break;
              if (c(a, s)) {
                if (e) throw Error(`${t} v${o} is not supported. v${n} or newer is required.`);
                return !1
              }
            }
          }("chart.js", "4.0", e.t1.version)
        },
        afterRegister() {
          e.t1.register(Ot)
        },
        afterUnregister() {
          e.t1.unregister(Ot)
        },
        beforeInit(t) {
          Bt.set(t, {
            annotations: [],
            elements: [],
            visibleElements: [],
            listeners: {},
            listened: !1,
            moveListened: !1,
            hooks: {},
            hooked: !1,
            hovered: []
          })
        },
        beforeUpdate(t, n, o) {
          const e = Bt.get(t).annotations = [];
          let i = o.annotations;
          (0, r.i)(i) ? Object.keys(i).forEach(t => {
              const n = i[t];
              (0, r.i)(n) && (n.id = t, e.push(n))
            }): (0, r.b)(i) && e.push(...i),
            function(t, n) {
              for (const o of t) Z(o, n)
            }(e, t.scales)
        },
        afterDataLimits(t, n) {
          const o = Bt.get(t);
          ! function(t, n, o) {
            const e = function(t, n, o) {
              const e = n.axis,
                i = n.id,
                s = e + "ScaleID",
                a = {
                  min: (0, r.v)(n.min, -1 / 0),
                  max: (0, r.v)(n.max, 1 / 0)
                };
              for (const r of o) r.scaleID === i ? tt(r, n, ["value", "endValue"], a) : R(t, r, s) === i && tt(r, n, [e + "Min", e + "Max", e + "Value"], a);
              return a
            }(t.scales, n, o);
            let i = Q(n, e, "min", "suggestedMin");
            i = Q(n, e, "max", "suggestedMax") || i, i && (0, r.a7)(n.handleTickRangeOptions) && n.handleTickRangeOptions()
          }(t, n.scale, o.annotations.filter(t => t.display && t.adjustScaleRange))
        },
        afterUpdate(t, n, o) {
          const i = Bt.get(t);
          (function(t, n, o) {
            n.listened = D(o, U, n.listeners), n.moveListened = !1, n.S = s, L.forEach(t => {
              (0, r.a7)(o[t]) && (n.moveListened = !0)
            }), (!n.listened || !n.moveListened) && n.annotations.forEach(t => {
              !n.listened && (0, r.a7)(t.click) && (n.listened = !0), n.moveListened || L.forEach(o => {
                (0, r.a7)(t[o]) && (n.listened = !0, n.moveListened = !0)
              })
            })
          })(0, i, o),
          function(t, n, o, i) {
            const s = function(t, n, o) {
                return "reset" === o || "none" === o || "resize" === o ? Xt : new e.Qw(t, n)
              }(t, o.animations, i),
              a = n.annotations,
              c = function(t, n) {
                const o = n.length,
                  e = t.length;
                if (o > e) {
                  const n = o - e;
                  t.splice(e, 0, ...Array(n))
                } else e > o && t.splice(o, e - o);
                return t
              }(n.elements, a);
            for (let n = 0; n < a.length; n++) {
              const o = a[n],
                e = Rt(c, n, o.type),
                i = o.setContext(Nt(t, e, o)),
                d = e.resolveElementProperties(t, i);
              d.skip = Pt(d), "elements" in d && (zt(e, d.elements, i, s), delete d.elements), (0, r.h)(e.x) || Object.assign(e, d), Object.assign(e, d.initProperties), d.options = Wt(i), s.update(e, d)
            }
          }(t, i, o, n.mode), i.visibleElements = i.elements.filter(t => !t.skip && t.options.display),
            function(t, n, o) {
              const e = n.visibleElements;
              n.hooked = D(o, G, n.hooks), n.hooked || e.forEach(t => {
                n.hooked || G.forEach(o => {
                  (0, r.a7)(t.options[o]) && (n.hooked = !0)
                })
              })
            }(0, i, o)
        },
        beforeDatasetsDraw(t, n, o) {
          Ht(t, "beforeDatasetsDraw", o.clip)
        },
        afterDatasetsDraw(t, n, o) {
          Ht(t, "afterDatasetsDraw", o.clip)
        },
        beforeDraw(t, n, o) {
          Ht(t, "beforeDraw", o.clip)
        },
        afterDraw(t, n, o) {
          Ht(t, "afterDraw", o.clip)
        },
        beforeEvent(t, n, o) {
          (function(t, n, o) {
            if (t.listened) switch (n.type) {
              case "mousemove":
              case "mouseout":
                return function(t, n, o) {
                  if (!t.moveListened) return;
                  let e;
                  e = "mousemove" === n.type ? s(t, n, o.interaction) : [];
                  const r = t.hovered;
                  t.hovered = e;
                  const i = {
                    state: t,
                    event: n
                  };
                  let a = F(i, "leave", r, e);
                  return F(i, "enter", e, r) || a
                }(t, n, o);
              case "click":
                return function(t, n, o) {
                  const e = t.listeners,
                    r = s(t, n, o.interaction);
                  let i;
                  for (const t of r) i = q(t.options.click || e.click, t, n) || i;
                  return i
                }(t, n, o)
            }
          })(Bt.get(t), n.event, o) && (n.changed = !0)
        },
        afterDestroy(t) {
          Bt.delete(t)
        },
        D: t => Bt.get(t),
        defaults: {
          animations: {
            numbers: {
              properties: ["x", "y", "x2", "y2", "width", "height", "centerX", "centerY", "pointX", "pointY", "radius"],
              type: "number"
            }
          },
          clip: !0,
          interaction: {
            mode: void 0,
            axis: void 0,
            intersect: void 0
          },
          common: {
            drawTime: "afterDatasetsDraw",
            init: !1,
            label: {}
          }
        },
        descriptors: {
          j: !1,
          C: t => !Vt.includes(t) && "init" !== t,
          annotations: {
            O: !1,
            M: (t, n) => "elements." + Ot[It(n.type)].id
          },
          interaction: {
            M: !0
          },
          common: {
            label: {
              j: At,
              M: !0
            },
            j: At
          }
        },
        additionalOptionScopes: [""]
      };

      function Ht(t, n, o) {
        const {
          ctx: e,
          chartArea: i
        } = t, s = Bt.get(t);
        o && (0, r.Y)(e, i);
        const a = function(t, n) {
          const o = [];
          for (const e of t)
            if (e.options.drawTime === n && o.push({
                element: e,
                main: !0
              }), e.elements && e.elements.length)
              for (const t of e.elements) t.options.display && t.options.drawTime === n && o.push({
                element: t
              });
          return o
        }(s.visibleElements, n).sort((t, n) => t.element.options.z - n.element.options.z);
        for (const t of a) $t(e, i, s, t);
        o && (0, r.$)(e)
      }

      function $t(t, n, o, e) {
        const r = e.element;
        e.main ? (K(o, r, "beforeDraw"), r.draw(t, n), K(o, r, "afterDraw")) : r.draw(t, n)
      }
    }
  }
]);
