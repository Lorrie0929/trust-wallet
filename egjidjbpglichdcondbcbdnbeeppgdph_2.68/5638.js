"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [5638], {
    5638: (t, n, e) => {
      e.d(n, {
        A: () => Vt
      });
      var o = e(66118),
        r = e(12020);
      const i = {
        point: (t, n) => a(t, n, {
          intersect: !0
        }),
        nearest: (t, n, e) => function(t, n, e) {
          let o = 1 / 0;
          return a(t, n, e).reduce((t, i) => {
            const s = i.getCenterPoint(),
              a = function(t, n, e) {
                return "x" === e ? {
                  x: t.x,
                  y: n.y
                } : "y" === e ? {
                  x: n.x,
                  y: t.y
                } : n
              }(n, s, e.axis),
              c = (0, r.aE)(n, a);
            return o > c ? (t = [i], o = c) : c === o && t.push(i), t
          }, []).sort((t, n) => t.o - n.o).slice(0, 1)
        }(t, n, e),
        x: (t, n, e) => a(t, n, {
          intersect: e.intersect,
          axis: "x"
        }),
        y: (t, n, e) => a(t, n, {
          intersect: e.intersect,
          axis: "y"
        })
      };

      function s(t, n, e) {
        return (i[e.mode] || i.nearest)(t, n, e)
      }

      function a(t, n, e) {
        return t.visibleElements.filter(t => e.intersect ? t.inRange(n.x, n.y) : function(t, n, e) {
          return "x" !== e && "y" !== e ? t.inRange(n.x, n.y, "x", !0) || t.inRange(n.x, n.y, "y", !0) : t.inRange(n.x, n.y, e, !0)
        }(t, n, e.axis))
      }
      const c = (t, n) => n > t || t.length > n.length && t.slice(0, n.length) === n,
        d = .001,
        u = (t, n, e) => Math.min(e, Math.max(n, t));

      function h(t, n, e) {
        for (const o of Object.keys(t)) t[o] = u(t[o], n, e);
        return t
      }

      function l(t, {
        x: n,
        y: e,
        x2: o,
        y2: r
      }, i, s) {
        const a = s / 2,
          c = t.x >= n - a - d && t.x <= o + a + d,
          u = t.y >= e - a - d && t.y <= r + a + d;
        return "x" === i ? c : ("y" === i || c) && u
      }

      function f(t, n) {
        const {
          centerX: e,
          centerY: o
        } = t.getProps(["centerX", "centerY"], n);
        return {
          x: e,
          y: o
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
        v = {
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

      function g(t, n) {
        return "start" === n ? 0 : "end" === n ? t : y(n) ? p(n) * t : t / 2
      }

      function M(t, n, e = !0) {
        return "number" == typeof n ? n : y(n) ? (e ? p(n) : x(n)) * t : t
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

      function S(t, n, e) {
        const o = e.init;
        if (o) return !0 === o ? j(n, e) : function(t, n, e) {
          const o = (0, r.Q)(e.init, [{
            chart: t,
            properties: n,
            options: e
          }]);
          return !0 === o ? j(n, e) : (0, r.i)(o) ? o : void 0
        }(t, n, e)
      }

      function D(t, n, e) {
        let o = !1;
        return n.forEach(n => {
          (0, r.a7)(t[n]) ? (o = !0, e[n] = t[n]) : (0, r.h)(e[n]) && delete e[n]
        }), o
      }

      function j(t, n) {
        const e = n.type || "line";
        return v[e](t)
      }
      const C = new Map;

      function O(t) {
        if (t && "object" == typeof t) {
          const n = t.toString();
          return "[object HTMLImageElement]" === n || "[object HTMLCanvasElement]" === n
        }
      }

      function k(t, {
        x: n,
        y: e
      }, o) {
        o && (t.translate(n, e), t.rotate((0, r.t)(o)), t.translate(-n, -e))
      }

      function X(t, n) {
        if (n && n.borderWidth) return t.lineCap = n.borderCapStyle, t.setLineDash(n.borderDash), t.lineDashOffset = n.borderDashOffset, t.lineJoin = n.borderJoinStyle, t.lineWidth = n.borderWidth, t.strokeStyle = n.borderColor, !0
      }

      function Y(t, n) {
        t.shadowColor = n.backgroundShadowColor, t.shadowBlur = n.shadowBlur, t.shadowOffsetX = n.shadowOffsetX, t.shadowOffsetY = n.shadowOffsetY
      }

      function A(t, n) {
        const e = n.content;
        if (O(e)) return {
          width: M(e.width, n.width),
          height: M(e.height, n.height)
        };
        const o = n.font,
          i = (0, r.b)(o) ? o.map(t => (0, r.a0)(t)) : [(0, r.a0)(o)],
          s = n.textStrokeWidth,
          a = (0, r.b)(e) ? e : [e],
          c = a.join() + (t => t.reduce(function(t, n) {
            return t + n.string
          }, ""))(i) + s + (t.u ? "-spriting" : "");
        return C.has(c) || C.set(c, function(t, n, e, o) {
          t.save();
          const r = n.length;
          let i = 0,
            s = o;
          for (let a = 0; r > a; a++) {
            const r = e[Math.min(a, e.length - 1)];
            t.font = r.string;
            const c = n[a];
            i = Math.max(i, t.measureText(c).width + o), s += r.lineHeight
          }
          return t.restore(), {
            width: i,
            height: s
          }
        }(t, a, i, s)), C.get(c)
      }

      function I(t, n, e) {
        const {
          x: o,
          y: i,
          width: s,
          height: a
        } = n;
        t.save(), Y(t, e);
        const c = X(t, e);
        t.fillStyle = e.backgroundColor, t.beginPath(), (0, r.au)(t, {
          x: o,
          y: i,
          w: s,
          h: a,
          radius: h((0, r.aw)(e.borderRadius), 0, Math.min(s, a) / 2)
        }), t.closePath(), t.fill(), c && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore()
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

      function z(t, n, e) {
        return n = "number" == typeof n ? n : t.parse(n), (0, r.g)(n) ? t.getPixelForValue(n) : e
      }

      function R(t, n, e) {
        const o = n[e];
        if (o || "scaleID" === e) return o;
        const r = e.charAt(0),
          i = Object.values(t).filter(t => t.axis && t.axis === r);
        return i.length ? i[0].id : r
      }

      function W(t, n) {
        if (t) {
          const e = t.options.reverse;
          return {
            start: z(t, n.min, e ? n.end : n.start),
            end: z(t, n.max, e ? n.start : n.end)
          }
        }
      }

      function E(t, n) {
        const {
          chartArea: e,
          scales: o
        } = t, r = o[R(o, n, "xScaleID")], i = o[R(o, n, "yScaleID")];
        let s = e.width / 2,
          a = e.height / 2;
        return r && (s = z(r, n.xValue, r.left + r.width / 2)), i && (a = z(i, n.yValue, i.top + i.height / 2)), {
          x: s,
          y: a
        }
      }

      function _(t, n) {
        const e = t.scales,
          o = e[R(e, n, "xScaleID")],
          r = e[R(e, n, "yScaleID")];
        if (!o && !r) return {};
        let {
          left: i,
          right: s
        } = o || t.chartArea, {
          top: a,
          bottom: c
        } = r || t.chartArea;
        const d = V(o, {
          min: n.xMin,
          max: n.xMax,
          start: i,
          end: s
        });
        i = d.start, s = d.end;
        const u = V(r, {
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

      function N(t, n) {
        if (!m(n)) {
          const e = _(t, n);
          let o = n.radius;
          (!o || isNaN(o)) && (o = Math.min(e.width, e.height) / 2, n.radius = o);
          const r = 2 * o,
            i = e.centerX + n.xAdjust,
            s = e.centerY + n.yAdjust;
          return {
            x: i - o,
            y: s - o,
            x2: i + o,
            y2: s + o,
            centerX: i,
            centerY: s,
            width: r,
            height: r,
            radius: o
          }
        }
        return function(t, n) {
          const e = E(t, n),
            o = 2 * n.radius;
          return {
            x: e.x - n.radius + n.xAdjust,
            y: e.y - n.radius + n.yAdjust,
            x2: e.x + n.radius + n.xAdjust,
            y2: e.y + n.radius + n.yAdjust,
            centerX: e.x + n.xAdjust,
            centerY: e.y + n.yAdjust,
            radius: n.radius,
            width: o,
            height: o
          }
        }(t, n)
      }

      function B(t, n) {
        const e = _(t, n);
        return e.initProperties = S(t, e, n), e.elements = [{
          type: "label",
          optionScope: "label",
          properties: $(t, e, n),
          initProperties: e.initProperties
        }], e
      }

      function V(t, n) {
        const e = W(t, n) || n;
        return {
          start: Math.min(e.start, e.end),
          end: Math.max(e.start, e.end)
        }
      }

      function H(t, n) {
        const {
          start: e,
          end: o,
          borderWidth: r
        } = t, {
          position: i,
          padding: {
            start: s,
            end: a
          },
          adjust: c
        } = n;
        return e + r / 2 + c + g(o - r - e - s - a - n.size, i)
      }

      function $(t, n, e) {
        const o = e.label;
        o.backgroundColor = "transparent", o.callout.display = !1;
        const i = w(o.position),
          s = (0, r.E)(o.padding),
          a = A(t.ctx, o),
          c = function({
            properties: t,
            options: n
          }, e, o, r) {
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
              position: o.x,
              padding: {
                start: r.left,
                end: r.right
              },
              adjust: n.label.xAdjust,
              size: e.width
            })
          }({
            properties: n,
            options: e
          }, a, i, s),
          d = function({
            properties: t,
            options: n
          }, e, o, r) {
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
              position: o.y,
              padding: {
                start: r.top,
                end: r.bottom
              },
              adjust: n.label.yAdjust,
              size: e.height
            })
          }({
            properties: n,
            options: e
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
          rotation: o.rotation
        }
      }

      function J(t, n, e) {
        const o = Math.cos(e),
          r = Math.sin(e),
          i = n.x,
          s = n.y;
        return {
          x: i + o * (t.x - i) - r * (t.y - s),
          y: s + r * (t.x - i) + o * (t.y - s)
        }
      }
      const T = ["enter", "leave"],
        L = T.concat("click");

      function U({
        state: t,
        event: n
      }, e, o, r) {
        let i;
        for (const s of o) 0 > r.indexOf(s) && (i = F(s.options[e] || t.listeners[e], s, n) || i);
        return i
      }

      function F(t, n, e) {
        return !0 === (0, r.Q)(t, [n.$context, e])
      }
      const q = ["afterDraw", "beforeDraw"];

      function K(t, n, e) {
        if (t.hooked) {
          const o = n.options[e] || t.hooks[e];
          return (0, r.Q)(o, [n.$context])
        }
      }

      function G(t, n, e, o) {
        if ((0, r.g)(n[e]) && ! function(t, n, e) {
            return (0, r.h)(t[n]) || (0, r.h)(t[e])
          }(t.options, e, o)) {
          const o = t[e] !== n[e];
          return t[e] = n[e], o
        }
      }

      function Q(t, n) {
        for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
          const o = R(n, t, e);
          o && !n[o] && Z(t, e) && console.warn(`No scale found with id '${o}' for annotation '${t.id}'`)
        }
      }

      function Z(t, n) {
        if ("scaleID" === n) return !0;
        const e = n.charAt(0);
        for (const n of ["Min", "Max", "Value"])
          if ((0, r.h)(t[e + n])) return !0;
        return !1
      }

      function tt(t, n, e, o) {
        for (const i of e) {
          const e = t[i];
          if ((0, r.h)(e)) {
            const t = n.parse(e);
            o.min = Math.min(o.min, t), o.max = Math.max(o.max, t)
          }
        }
      }
      class nt extends o.Hg {
        inRange(t, n, e, o) {
          const {
            x: i,
            y: s
          } = J({
            x: t,
            y: n
          }, this.getCenterPoint(o), (0, r.t)(-this.options.rotation));
          return l({
            x: i,
            y: s
          }, this.getProps(["x", "y", "x2", "y2"], o), e, this.options.borderWidth)
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          t.save(), k(t, this.getCenterPoint(), this.options.rotation), I(t, this, this.options), t.restore()
        }
        get label() {
          return this.elements && this.elements[0]
        }
        resolveElementProperties(t, n) {
          return B(t, n)
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
          l: !0
        }
      };
      const et = ["left", "bottom", "top", "right"];
      class ot extends o.Hg {
        inRange(t, n, e, o) {
          const {
            x: i,
            y: s
          } = J({
            x: t,
            y: n
          }, this.getCenterPoint(o), (0, r.t)(-this.rotation));
          return l({
            x: i,
            y: s
          }, this.getProps(["x", "y", "x2", "y2"], o), e, this.options.borderWidth)
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const n = this.options,
            e = !(0, r.h)(this.p) || this.p;
          !n.display || !n.content || !e || (t.save(), k(t, this.getCenterPoint(), this.rotation), function(t, n) {
            const {
              pointX: e,
              pointY: o,
              options: i
            } = n, s = i.callout, a = s && s.display && function(t, n) {
              const e = n.position;
              return et.includes(e) ? e : function(t, n) {
                const {
                  x: e,
                  y: o,
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
                }, x = n.start, p = M(a, x), b = [e, e + p, e + p, i], v = [o + M(c, x), s, o, s], g = [];
                for (let t = 0; 4 > t; t++) {
                  const n = J({
                    x: b[t],
                    y: v[t]
                  }, y, (0, r.t)(f));
                  g.push({
                    position: et[t],
                    distance: (0, r.aE)(n, {
                      x: d,
                      y: u
                    })
                  })
                }
                return g.sort((t, n) => t.distance - n.distance)[0].position
              }(t, n)
            }(n, s);
            if (!a || function(t, n, e) {
                const {
                  pointX: o,
                  pointY: r
                } = t, i = n.margin;
                let s = o,
                  a = r;
                return "left" === e ? s += i : "right" === e ? s -= i : "top" === e ? a += i : "bottom" === e && (a -= i), t.inRange(s, a)
              }(n, s, a)) return;
            if (t.save(), t.beginPath(), !X(t, s)) return t.restore();
            const {
              separatorStart: c,
              separatorEnd: d
            } = function(t, n) {
              const {
                x: e,
                y: o,
                x2: r,
                y2: i
              } = t, s = function(t, n) {
                const {
                  width: e,
                  height: o,
                  options: r
                } = t, i = r.callout.margin + r.borderWidth / 2;
                return "right" === n ? e + i : "bottom" === n ? o + i : -i
              }(t, n);
              let a, c;
              return "left" === n || "right" === n ? (a = {
                x: e + s,
                y: o
              }, c = {
                x: a.x,
                y: i
              }) : (a = {
                x: e,
                y: o + s
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
            } = function(t, n, e) {
              const {
                y: o,
                width: r,
                height: i,
                options: s
              } = t, a = s.callout.start, c = function(t, n) {
                const e = n.side;
                return "left" === t || "top" === t ? -e : e
              }(n, s.callout);
              let d, u;
              return "left" === n || "right" === n ? (d = {
                x: e.x,
                y: o + M(i, a)
              }, u = {
                x: d.x + c,
                y: d.y
              }) : (d = {
                x: e.x + M(r, a),
                y: e.y
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
              x: e,
              y: o
            }, n.getCenterPoint(), (0, r.t)(-n.rotation));
            t.lineTo(l.x, l.y), t.stroke(), t.restore()
          }(t, this), I(t, this, n), function(t, n, e) {
            const o = e.content;
            if (O(o)) return t.save(), t.globalAlpha = function(t, n) {
              const e = (0, r.x)(t) ? t : n;
              return (0, r.x)(e) ? u(e, 0, 1) : 1
            }(e.opacity, o.style.opacity), t.drawImage(o, n.x, n.y, n.width, n.height), void t.restore();
            const i = (0, r.b)(o) ? o : [o],
              s = e.font,
              a = (0, r.b)(s) ? s.map(t => (0, r.a0)(t)) : [(0, r.a0)(s)],
              c = e.color,
              d = (0, r.b)(c) ? c : [c],
              h = function(t, n) {
                const {
                  x: e,
                  width: o
                } = t, r = n.textAlign;
                return "center" === r ? e + o / 2 : "end" === r || "right" === r ? e + o : e
              }(n, e),
              l = n.y + e.textStrokeWidth / 2;
            t.save(), t.textBaseline = "middle", t.textAlign = e.textAlign,
              function(t, n) {
                if (n.textStrokeWidth > 0) return t.lineJoin = "round", t.miterLimit = 2, t.lineWidth = n.textStrokeWidth, t.strokeStyle = n.textStrokeColor, !0
              }(t, e) && function(t, {
                x: n,
                y: e
              }, o, r) {
                t.beginPath();
                let i = 0;
                o.forEach(function(o, s) {
                  const a = r[Math.min(s, r.length - 1)],
                    c = a.lineHeight;
                  t.font = a.string, t.strokeText(o, n, e + c / 2 + i), i += c
                }), t.stroke()
              }(t, {
                x: h,
                y: l
              }, i, a),
              function(t, {
                x: n,
                y: e
              }, o, {
                fonts: r,
                colors: i
              }) {
                let s = 0;
                o.forEach(function(o, a) {
                  const c = i[Math.min(a, i.length - 1)],
                    d = r[Math.min(a, r.length - 1)],
                    u = d.lineHeight;
                  t.beginPath(), t.font = d.string, t.fillStyle = c, t.fillText(o, n, e + u / 2 + s), s += u, t.fill()
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
            width: e,
            height: o,
            options: i
          }) {
            const s = i.borderWidth / 2,
              a = (0, r.E)(i.padding);
            return {
              x: t + a.left + s,
              y: n + a.top + s,
              width: e - a.left - a.right - i.borderWidth,
              height: o - a.top - a.bottom - i.borderWidth
            }
          }(this), n), t.restore())
        }
        resolveElementProperties(t, n) {
          let e;
          if (m(n)) e = E(t, n);
          else {
            const {
              centerX: o,
              centerY: r
            } = _(t, n);
            e = {
              x: o,
              y: r
            }
          }
          const o = (0, r.E)(n.padding),
            i = function(t, n, e, o) {
              const r = n.width + o.width + e.borderWidth,
                i = n.height + o.height + e.borderWidth,
                s = w(e.position, "center"),
                a = rt(t.x, r, e.xAdjust, s.x),
                c = rt(t.y, i, e.yAdjust, s.y);
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
            }(e, A(t.ctx, n), n, o);
          return {
            initProperties: S(t, i, n),
            pointX: e.x,
            pointY: e.y,
            ...i,
            rotation: n.rotation
          }
        }
      }

      function rt(t, n, e = 0, o) {
        return t - g(n, o) + e
      }
      ot.id = "labelAnnotation", ot.defaults = {
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
      }, ot.defaultRoutes = {
        borderColor: "color"
      };
      const it = (t, n, e) => ({
          x: t.x + e * (n.x - t.x),
          y: t.y + e * (n.y - t.y)
        }),
        st = (t, n, e) => it(n, e, Math.abs((t - n.y) / (e.y - n.y))).x,
        at = (t, n, e) => it(n, e, Math.abs((t - n.x) / (e.x - n.x))).y,
        ct = t => t * t,
        dt = (t, n, e, o) => (1 - o) * (1 - o) * t + 2 * (1 - o) * o * n + o * o * e,
        ut = (t, n, e, o) => ({
          x: dt(t.x, n.x, e.x, o),
          y: dt(t.y, n.y, e.y, o)
        }),
        ht = (t, n, e, o) => 2 * (1 - o) * (n - t) + 2 * o * (e - n),
        lt = (t, n, e, o) => -Math.atan2(ht(t.x, n.x, e.x, o), ht(t.y, n.y, e.y, o)) + .5 * r.P;
      class ft extends o.Hg {
        inRange(t, n, e, o) {
          const r = this.options.borderWidth / 2;
          if ("x" !== e && "y" !== e) {
            const e = {
                mouseX: t,
                mouseY: n
              },
              {
                path: i,
                ctx: s
              } = this;
            if (i) {
              X(s, this.options);
              const {
                chart: r
              } = this.$context, a = t * r.currentDevicePixelRatio, c = n * r.currentDevicePixelRatio, d = s.isPointInStroke(i, a, c) || pt(this, e, o);
              return s.restore(), d
            }
            return function(t, {
              mouseX: n,
              mouseY: e
            }, o = d, r) {
              const {
                x: i,
                y: s,
                x2: a,
                y2: c
              } = t.getProps(["x", "y", "x2", "y2"], r), u = a - i, h = c - s, l = ct(u) + ct(h), f = 0 === l ? -1 : ((n - i) * u + (e - s) * h) / l;
              let y, x;
              return 0 > f ? (y = i, x = s) : f > 1 ? (y = a, x = c) : (y = i + f * u, x = s + f * h), ct(n - y) + ct(e - x) <= o
            }(this, e, ct(r), o) || pt(this, e, o)
          }
          return function(t, {
            mouseX: n,
            mouseY: e
          }, o, {
            hBorderWidth: r,
            useFinalPosition: i
          }) {
            const s = ((t, n, {
              x: e,
              y: o,
              x2: r,
              y2: i
            }, s) => "y" === s ? {
              start: Math.min(o, i),
              end: Math.max(o, i),
              value: n
            } : {
              start: Math.min(e, r),
              end: Math.max(e, r),
              value: t
            })(n, e, t.getProps(["x", "y", "x2", "y2"], i), o);
            return s.value >= s.start - r && s.value <= s.end + r || pt(t, {
              mouseX: n,
              mouseY: e
            }, i, o)
          }(this, {
            mouseX: t,
            mouseY: n
          }, e, {
            hBorderWidth: r,
            useFinalPosition: o
          })
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const {
            x: n,
            y: e,
            x2: o,
            y2: i,
            cp: s,
            options: a
          } = this;
          if (t.save(), !X(t, a)) return t.restore();
          Y(t, a);
          const c = Math.sqrt(Math.pow(o - n, 2) + Math.pow(i - e, 2));
          if (a.curve && s) return function(t, n, e, o) {
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
            } = gt(n), y = {
              x: i,
              y: s
            }, x = {
              x: a,
              y: c
            }, p = lt(y, e, x, 0), b = lt(y, e, x, 1) - r.P, v = ut(y, e, x, l / o), g = ut(y, e, x, 1 - f / o), M = new Path2D;
            t.beginPath(), M.moveTo(v.x, v.y), M.quadraticCurveTo(e.x, e.y, g.x, g.y), t.shadowColor = d.borderShadowColor, t.stroke(M), n.path = M, n.ctx = t, mt(t, v, {
              angle: p,
              adjust: l
            }, u), mt(t, g, {
              angle: b,
              adjust: f
            }, h)
          }(t, this, s, c), t.restore();
          const {
            startOpts: d,
            endOpts: u,
            startAdjust: h,
            endAdjust: l
          } = gt(this), f = Math.atan2(i - e, o - n);
          t.translate(n, e), t.rotate(f), t.beginPath(), t.moveTo(0 + h, 0), t.lineTo(c - l, 0), t.shadowColor = a.borderShadowColor, t.stroke(), wt(t, 0, h, d), wt(t, c, -l, u), t.restore()
        }
        get label() {
          return this.elements && this.elements[0]
        }
        resolveElementProperties(t, n) {
          const e = function(t, n) {
              const {
                scales: e,
                chartArea: o
              } = t, r = e[n.scaleID], i = {
                x: o.left,
                y: o.top,
                x2: o.right,
                y2: o.bottom
              };
              return r ? function(t, n, e) {
                const o = z(t, e.value, NaN),
                  r = z(t, e.endValue, o);
                t.isHorizontal() ? (n.x = o, n.x2 = r) : (n.y = o, n.y2 = r)
              }(r, i, n) : function(t, n, e) {
                for (const o of Object.keys(P)) {
                  const r = t[R(t, e, o)];
                  if (r) {
                    const {
                      min: t,
                      max: i,
                      start: s,
                      end: a,
                      startProp: c,
                      endProp: d
                    } = P[o], u = W(r, {
                      min: e[t],
                      max: e[i],
                      start: r[s],
                      end: r[a]
                    });
                    n[c] = u.start, n[d] = u.end
                  }
                }
              }(e, i, n), i
            }(t, n),
            {
              x: o,
              y: i,
              x2: s,
              y2: a
            } = e,
            c = function({
              x: t,
              y: n,
              x2: e,
              y2: o
            }, {
              top: r,
              right: i,
              bottom: s,
              left: a
            }) {
              return !(a > t && a > e || t > i && e > i || r > n && r > o || n > s && o > s)
            }(e, t.chartArea),
            d = c ? function(t, n, e) {
              const {
                x: o,
                y: r
              } = xt(t, n, e), {
                x: i,
                y: s
              } = xt(n, t, e);
              return {
                x: o,
                y: r,
                x2: i,
                y2: s,
                width: Math.abs(i - o),
                height: Math.abs(s - r)
              }
            }({
              x: o,
              y: i
            }, {
              x: s,
              y: a
            }, t.chartArea) : {
              x: o,
              y: i,
              x2: s,
              y2: a,
              width: Math.abs(s - o),
              height: Math.abs(a - i)
            };
          if (d.centerX = (s + o) / 2, d.centerY = (a + i) / 2, d.initProperties = S(t, d, n), n.curve) {
            const t = {
                x: d.x,
                y: d.y
              },
              e = {
                x: d.x2,
                y: d.y2
              };
            d.cp = function(t, n, e) {
              const {
                x: o,
                y: r,
                x2: i,
                y2: s,
                centerX: a,
                centerY: c
              } = t, d = Math.atan2(s - r, i - o), u = w(n.controlPoint, 0);
              return J({
                x: a + M(e, u.x, !1),
                y: c + M(e, u.y, !1)
              }, {
                x: a,
                y: c
              }, d)
            }(d, n, (0, r.aE)(t, e))
          }
          const u = function(t, n, e) {
            const o = e.borderWidth,
              i = (0, r.E)(e.padding),
              s = A(t.ctx, e);
            return function(t, n, e, o) {
              const {
                width: i,
                height: s,
                padding: a
              } = e, {
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
                  y: e,
                  x2: o,
                  y2: i
                } = t, s = Math.atan2(i - e, o - n);
                return s > r.P / 2 ? s - r.P : s < r.P / -2 ? s + r.P : s
              }(t) : (0, r.t)(n.rotation), f = function(t, n, e) {
                const o = Math.cos(e),
                  r = Math.sin(e);
                return {
                  w: Math.abs(t * o) + Math.abs(n * r),
                  h: Math.abs(t * r) + Math.abs(n * o)
                }
              }(i, s, l), y = function(t, n, e, o) {
                let r;
                const i = function(t, n) {
                  const {
                    x: e,
                    x2: o,
                    y: r,
                    y2: i
                  } = t, s = Math.min(r, i) - n.top, a = Math.min(e, o) - n.left, c = n.bottom - Math.max(r, i), d = n.right - Math.max(e, o);
                  return {
                    x: Math.min(a, d),
                    y: Math.min(s, c),
                    dx: a > d ? -1 : 1,
                    dy: s > c ? -1 : 1
                  }
                }(t, o);
                return r = "start" === n.position ? bt({
                  w: t.x2 - t.x,
                  h: t.y2 - t.y
                }, e, 0, i) : "end" === n.position ? 1 - bt({
                  w: t.x - t.x2,
                  h: t.y - t.y2
                }, e, 0, i) : g(1, n.position), r
              }(t, n, {
                labelSize: f,
                padding: a
              }, o), x = t.cp ? ut(u, t.cp, h, y) : it(u, h, y), p = {
                size: f.w,
                min: o.left,
                max: o.right,
                padding: a.left
              }, b = {
                size: f.h,
                min: o.top,
                max: o.bottom,
                padding: a.top
              }, v = vt(x.x, p) + c, M = vt(x.y, b) + d;
              return {
                x: v - i / 2,
                y: M - s / 2,
                x2: v + i / 2,
                y2: M + s / 2,
                centerX: v,
                centerY: M,
                pointX: x.x,
                pointY: x.y,
                width: i,
                height: s,
                rotation: (0, r.U)(l)
              }
            }(n, e, {
              width: s.width + i.width + o,
              height: s.height + i.height + o,
              padding: i
            }, t.chartArea)
          }(t, d, n.label);
          return u.p = c, d.elements = [{
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
      }, e, {
        top: o,
        right: r,
        bottom: i,
        left: s
      }) {
        return s > t && (n = at(s, {
          x: t,
          y: n
        }, e), t = s), t > r && (n = at(r, {
          x: t,
          y: n
        }, e), t = r), o > n && (t = st(o, {
          x: t,
          y: n
        }, e), n = o), n > i && (t = st(i, {
          x: t,
          y: n
        }, e), n = i), {
          x: t,
          y: n
        }
      }

      function pt(t, {
        mouseX: n,
        mouseY: e
      }, o, r) {
        const i = t.label;
        return i.options.display && i.inRange(n, e, r, o)
      }

      function bt(t, n, e, o) {
        const {
          labelSize: r,
          padding: i
        } = n, s = t.w * o.dx, a = t.h * o.dy, c = s > 0 && (r.w / 2 + i.left - o.x) / s, d = a > 0 && (r.h / 2 + i.top - o.y) / a;
        return u(Math.max(c, d), 0, .25)
      }

      function vt(t, n) {
        const {
          size: e,
          min: o,
          max: r,
          padding: i
        } = n, s = e / 2;
        return e > r - o ? (r + o) / 2 : (o >= t - i - s && (t = o + i + s), t + i + s >= r && (t = r - i - s), t)
      }

      function gt(t) {
        const n = t.options,
          e = n.arrowHeads && n.arrowHeads.start,
          o = n.arrowHeads && n.arrowHeads.end;
        return {
          startOpts: e,
          endOpts: o,
          startAdjust: Mt(t, e),
          endAdjust: Mt(t, o)
        }
      }

      function Mt(t, n) {
        if (!n || !n.display) return 0;
        const {
          length: e,
          width: o
        } = n, r = t.options.borderWidth / 2;
        return Math.abs(st(0, {
          x: e,
          y: o + r
        }, {
          x: 0,
          y: r
        }))
      }

      function wt(t, n, e, o) {
        if (!o || !o.display) return;
        const {
          length: r,
          width: i,
          fill: s,
          backgroundColor: a,
          borderColor: c
        } = o, d = Math.abs(n - r) + e;
        t.beginPath(), Y(t, o), X(t, o), t.moveTo(d, -i), t.lineTo(n + e, 0), t.lineTo(d, i), !0 === s ? (t.fillStyle = a || c, t.closePath(), t.fill(), t.shadowColor = "transparent") : t.shadowColor = o.borderShadowColor, t.stroke()
      }

      function mt(t, {
        x: n,
        y: e
      }, {
        angle: o,
        adjust: r
      }, i) {
        !i || !i.display || (t.save(), t.translate(n, e), t.rotate(o), wt(t, 0, -r, i), t.restore())
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
          callout: Object.assign({}, ot.defaults.callout),
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
            l: !0
          },
          end: {
            l: !0
          },
          l: !0
        }
      }, ft.defaultRoutes = {
        borderColor: "color"
      };
      class St extends o.Hg {
        inRange(t, n, e, o) {
          const i = this.options.rotation,
            s = this.options.borderWidth;
          if ("x" !== e && "y" !== e) return function(t, n, e, o) {
            const {
              width: i,
              height: s,
              centerX: a,
              centerY: c
            } = n, d = i / 2, u = s / 2;
            if (0 >= d || 0 >= u) return !1;
            const h = (0, r.t)(e || 0),
              l = o / 2 || 0,
              f = Math.cos(h),
              y = Math.sin(h),
              x = Math.pow(f * (t.x - a) + y * (t.y - c), 2),
              p = Math.pow(y * (t.x - a) - f * (t.y - c), 2);
            return 1.0001 >= x / Math.pow(d + l, 2) + p / Math.pow(u + l, 2)
          }({
            x: t,
            y: n
          }, this.getProps(["width", "height", "centerX", "centerY"], o), i, s);
          const {
            x: a,
            y: c,
            x2: u,
            y2: h
          } = this.getProps(["x", "y", "x2", "y2"], o), l = s / 2, f = "y" === e ? {
            start: c,
            end: h
          } : {
            start: a,
            end: u
          }, y = J({
            x: t,
            y: n
          }, this.getCenterPoint(o), (0, r.t)(-i));
          return y[e] >= f.start - l - d && y[e] <= f.end + l + d
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const {
            width: n,
            height: e,
            centerX: o,
            centerY: i,
            options: s
          } = this;
          t.save(), k(t, this.getCenterPoint(), s.rotation), Y(t, this.options), t.beginPath(), t.fillStyle = s.backgroundColor;
          const a = X(t, s);
          t.ellipse(o, i, e / 2, n / 2, r.P / 2, 0, 2 * r.P), t.fill(), a && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore()
        }
        get label() {
          return this.elements && this.elements[0]
        }
        resolveElementProperties(t, n) {
          return B(t, n)
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
          l: !0
        }
      };
      class Dt extends o.Hg {
        inRange(t, n, e, o) {
          const {
            x: r,
            y: i,
            x2: s,
            y2: a,
            width: c
          } = this.getProps(["x", "y", "x2", "y2", "width"], o), d = this.options.borderWidth;
          if ("x" !== e && "y" !== e) return function(t, n, e, o) {
            if (!t || !n || 0 >= e) return !1;
            const r = o / 2;
            return Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2) <= Math.pow(e + r, 2)
          }({
            x: t,
            y: n
          }, this.getCenterPoint(o), c / 2, d);
          const u = d / 2,
            h = "y" === e ? {
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
            e = n.borderWidth;
          if (.1 > n.radius) return;
          t.save(), t.fillStyle = n.backgroundColor, Y(t, n);
          const o = X(t, n);
          (function(t, n, e, o) {
            const {
              radius: i,
              options: s
            } = n, a = s.pointStyle, c = s.rotation;
            let d = (c || 0) * r.b3;
            if (O(a)) return t.save(), t.translate(e, o), t.rotate(d), t.drawImage(a, -a.width / 2, -a.height / 2, a.width, a.height), void t.restore();
            (t => isNaN(t) || 0 >= t)(i) || function(t, {
              x: n,
              y: e,
              radius: o,
              rotation: i,
              style: s,
              rad: a
            }) {
              let c, d, u, h;
              switch (t.beginPath(), s) {
                default:
                  t.arc(n, e, o, 0, r.T), t.closePath();
                  break;
                case "triangle":
                  t.moveTo(n + Math.sin(a) * o, e - Math.cos(a) * o), a += r.b5, t.lineTo(n + Math.sin(a) * o, e - Math.cos(a) * o), a += r.b5, t.lineTo(n + Math.sin(a) * o, e - Math.cos(a) * o), t.closePath();
                  break;
                case "rectRounded":
                  h = .516 * o, u = o - h, c = Math.cos(a + r.b4) * u, d = Math.sin(a + r.b4) * u, t.arc(n - c, e - d, h, a - r.P, a - r.H), t.arc(n + d, e - c, h, a - r.H, a), t.arc(n + c, e + d, h, a, a + r.H), t.arc(n - d, e + c, h, a + r.H, a + r.P), t.closePath();
                  break;
                case "rect":
                  if (!i) {
                    u = Math.SQRT1_2 * o, t.rect(n - u, e - u, 2 * u, 2 * u);
                    break
                  }
                  a += r.b4;
                case "rectRot":
                  c = Math.cos(a) * o, d = Math.sin(a) * o, t.moveTo(n - c, e - d), t.lineTo(n + d, e - c), t.lineTo(n + c, e + d), t.lineTo(n - d, e + c), t.closePath();
                  break;
                case "crossRot":
                  a += r.b4;
                case "cross":
                  c = Math.cos(a) * o, d = Math.sin(a) * o, t.moveTo(n - c, e - d), t.lineTo(n + c, e + d), t.moveTo(n + d, e - c), t.lineTo(n - d, e + c);
                  break;
                case "star":
                  c = Math.cos(a) * o, d = Math.sin(a) * o, t.moveTo(n - c, e - d), t.lineTo(n + c, e + d), t.moveTo(n + d, e - c), t.lineTo(n - d, e + c), a += r.b4, c = Math.cos(a) * o, d = Math.sin(a) * o, t.moveTo(n - c, e - d), t.lineTo(n + c, e + d), t.moveTo(n + d, e - c), t.lineTo(n - d, e + c);
                  break;
                case "line":
                  c = Math.cos(a) * o, d = Math.sin(a) * o, t.moveTo(n - c, e - d), t.lineTo(n + c, e + d);
                  break;
                case "dash":
                  t.moveTo(n, e), t.lineTo(n + Math.cos(a) * o, e + Math.sin(a) * o)
              }
              t.fill()
            }(t, {
              x: e,
              y: o,
              radius: i,
              rotation: c,
              style: a,
              rad: d
            })
          })(t, this, this.centerX, this.centerY), o && !O(n.pointStyle) && (t.shadowColor = n.borderShadowColor, t.stroke()), t.restore(), n.borderWidth = e
        }
        resolveElementProperties(t, n) {
          const e = N(t, n);
          return e.initProperties = S(t, e, n), e
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
      class jt extends o.Hg {
        inRange(t, n, e, o) {
          if ("x" !== e && "y" !== e) return this.options.radius >= .1 && this.elements.length > 1 && function(t, n, e, o) {
            let r = !1,
              i = t[t.length - 1].getProps(["bX", "bY"], o);
            for (const s of t) {
              const t = s.getProps(["bX", "bY"], o);
              t.bY > e != i.bY > e && n < (i.bX - t.bX) * (e - t.bY) / (i.bY - t.bY) + t.bX && (r = !r), i = t
            }
            return r
          }(this.elements, t, n, o);
          const i = J({
              x: t,
              y: n
            }, this.getCenterPoint(o), (0, r.t)(-this.options.rotation)),
            s = this.elements.map(t => "y" === e ? t.bY : t.bX),
            a = Math.min(...s),
            c = Math.max(...s);
          return i[e] >= a && i[e] <= c
        }
        getCenterPoint(t) {
          return f(this, t)
        }
        draw(t) {
          const {
            elements: n,
            options: e
          } = this;
          t.save(), t.beginPath(), t.fillStyle = e.backgroundColor, Y(t, e);
          const o = X(t, e);
          let r = !0;
          for (const e of n) r ? (t.moveTo(e.x, e.y), r = !1) : t.lineTo(e.x, e.y);
          t.closePath(), t.fill(), o && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore()
        }
        resolveElementProperties(t, n) {
          const e = N(t, n),
            {
              sides: o,
              rotation: i
            } = n,
            s = [],
            a = 2 * r.P / o;
          let c = i * r.b3;
          for (let r = 0; o > r; r++, c += a) {
            const o = Ct(e, n, c);
            o.initProperties = S(t, e, n), s.push(o)
          }
          return e.elements = s, e
        }
      }

      function Ct({
        centerX: t,
        centerY: n
      }, {
        radius: e,
        borderWidth: o
      }, r) {
        const i = o / 2,
          s = Math.sin(r),
          a = Math.cos(r),
          c = {
            x: t + s * e,
            y: n - a * e
          };
        return {
          type: "point",
          optionScope: "point",
          properties: {
            x: c.x,
            y: c.y,
            centerX: c.x,
            centerY: c.y,
            bX: t + s * (e + i),
            bY: n - a * (e + i)
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
        label: ot,
        line: ft,
        point: Dt,
        polygon: jt
      };
      Object.keys(Ot).forEach(t => {
        r.d.describe("elements." + Ot[t].id, {
          l: "plugins.annotation.common"
        })
      });
      const kt = {
          update: Object.assign
        },
        Xt = L.concat(q),
        Yt = (t, n) => (0, r.i)(n) ? Et(t, n) : t,
        At = t => "color" === t || "font" === t;

      function It(t = "line") {
        return Ot[t] ? t : (console.warn(`Unknown annotation type: '${t}', defaulting to 'line'`), "line")
      }

      function Pt(t) {
        return isNaN(t.x) || isNaN(t.y)
      }

      function zt(t, n, e, o) {
        const r = t.elements || (t.elements = []);
        r.length = n.length;
        for (let t = 0; t < n.length; t++) {
          const i = n[t],
            s = i.properties,
            a = Rt(r, t, i.type, i.initProperties),
            c = e[i.optionScope].override(i);
          s.options = Wt(c), o.update(a, s)
        }
      }

      function Rt(t, n, e, o) {
        const r = Ot[It(e)];
        let i = t[n];
        return (!i || !(i instanceof r)) && (i = t[n] = new r, Object.assign(i, o)), i
      }

      function Wt(t) {
        const n = Ot[It(t.type)],
          e = {};
        e.id = t.id, e.type = t.type, e.drawTime = t.drawTime, Object.assign(e, Et(t, n.defaults), Et(t, n.defaultRoutes));
        for (const n of Xt) e[n] = t[n];
        return e
      }

      function Et(t, n) {
        const e = {};
        for (const o of Object.keys(n)) {
          const i = n[o],
            s = t[o];
          At(o) && (0, r.b)(s) ? e[o] = s.map(t => Yt(t, i)) : e[o] = Yt(s, i)
        }
        return e
      }

      function _t(t, n, e) {
        return n.$context || (n.$context = Object.assign(Object.create(t.getContext()), {
          element: n,
          id: e.id,
          type: "annotation"
        }))
      }
      const Nt = new Map,
        Bt = L.concat(q);
      var Vt = {
        id: "annotation",
        version: "3.0.1",
        beforeRegister() {
          ! function(t, n, e, o = !0) {
            const r = e.split(".");
            let i = 0;
            for (const s of n.split(".")) {
              const a = r[i++];
              if (parseInt(a, 10) > parseInt(s, 10)) break;
              if (c(a, s)) {
                if (o) throw Error(`${t} v${e} is not supported. v${n} or newer is required.`);
                return !1
              }
            }
          }("chart.js", "4.0", o.t1.version)
        },
        afterRegister() {
          o.t1.register(Ot)
        },
        afterUnregister() {
          o.t1.unregister(Ot)
        },
        beforeInit(t) {
          Nt.set(t, {
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
        beforeUpdate(t, n, e) {
          const o = Nt.get(t).annotations = [];
          let i = e.annotations;
          (0, r.i)(i) ? Object.keys(i).forEach(t => {
              const n = i[t];
              (0, r.i)(n) && (n.id = t, o.push(n))
            }): (0, r.b)(i) && o.push(...i),
            function(t, n) {
              for (const e of t) Q(e, n)
            }(o, t.scales)
        },
        afterDataLimits(t, n) {
          const e = Nt.get(t);
          ! function(t, n, e) {
            const o = function(t, n, e) {
              const o = n.axis,
                i = n.id,
                s = o + "ScaleID",
                a = {
                  min: (0, r.v)(n.min, -1 / 0),
                  max: (0, r.v)(n.max, 1 / 0)
                };
              for (const r of e) r.scaleID === i ? tt(r, n, ["value", "endValue"], a) : R(t, r, s) === i && tt(r, n, [o + "Min", o + "Max", o + "Value"], a);
              return a
            }(t.scales, n, e);
            let i = G(n, o, "min", "suggestedMin");
            i = G(n, o, "max", "suggestedMax") || i, i && (0, r.a7)(n.handleTickRangeOptions) && n.handleTickRangeOptions()
          }(t, n.scale, e.annotations.filter(t => t.display && t.adjustScaleRange))
        },
        afterUpdate(t, n, e) {
          const i = Nt.get(t);
          (function(t, n, e) {
            n.listened = D(e, L, n.listeners), n.moveListened = !1, n.M = s, T.forEach(t => {
              (0, r.a7)(e[t]) && (n.moveListened = !0)
            }), (!n.listened || !n.moveListened) && n.annotations.forEach(t => {
              !n.listened && (0, r.a7)(t.click) && (n.listened = !0), n.moveListened || T.forEach(e => {
                (0, r.a7)(t[e]) && (n.listened = !0, n.moveListened = !0)
              })
            })
          })(0, i, e),
          function(t, n, e, i) {
            const s = function(t, n, e) {
                return "reset" === e || "none" === e || "resize" === e ? kt : new o.Qw(t, n)
              }(t, e.animations, i),
              a = n.annotations,
              c = function(t, n) {
                const e = n.length,
                  o = t.length;
                if (e > o) {
                  const n = e - o;
                  t.splice(o, 0, ...Array(n))
                } else o > e && t.splice(e, o - e);
                return t
              }(n.elements, a);
            for (let n = 0; n < a.length; n++) {
              const e = a[n],
                o = Rt(c, n, e.type),
                i = e.setContext(_t(t, o, e)),
                d = o.resolveElementProperties(t, i);
              d.skip = Pt(d), "elements" in d && (zt(o, d.elements, i, s), delete d.elements), (0, r.h)(o.x) || Object.assign(o, d), Object.assign(o, d.initProperties), d.options = Wt(i), s.update(o, d)
            }
          }(t, i, e, n.mode), i.visibleElements = i.elements.filter(t => !t.skip && t.options.display),
            function(t, n, e) {
              const o = n.visibleElements;
              n.hooked = D(e, q, n.hooks), n.hooked || o.forEach(t => {
                n.hooked || q.forEach(e => {
                  (0, r.a7)(t.options[e]) && (n.hooked = !0)
                })
              })
            }(0, i, e)
        },
        beforeDatasetsDraw(t, n, e) {
          Ht(t, "beforeDatasetsDraw", e.clip)
        },
        afterDatasetsDraw(t, n, e) {
          Ht(t, "afterDatasetsDraw", e.clip)
        },
        beforeDraw(t, n, e) {
          Ht(t, "beforeDraw", e.clip)
        },
        afterDraw(t, n, e) {
          Ht(t, "afterDraw", e.clip)
        },
        beforeEvent(t, n, e) {
          (function(t, n, e) {
            if (t.listened) switch (n.type) {
              case "mousemove":
              case "mouseout":
                return function(t, n, e) {
                  if (!t.moveListened) return;
                  let o;
                  o = "mousemove" === n.type ? s(t, n, e.interaction) : [];
                  const r = t.hovered;
                  t.hovered = o;
                  const i = {
                    state: t,
                    event: n
                  };
                  let a = U(i, "leave", r, o);
                  return U(i, "enter", o, r) || a
                }(t, n, e);
              case "click":
                return function(t, n, e) {
                  const o = t.listeners,
                    r = s(t, n, e.interaction);
                  let i;
                  for (const t of r) i = F(t.options.click || o.click, t, n) || i;
                  return i
                }(t, n, e)
            }
          })(Nt.get(t), n.event, e) && (n.changed = !0)
        },
        afterDestroy(t) {
          Nt.delete(t)
        },
        m: t => Nt.get(t),
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
          S: !1,
          D: t => !Bt.includes(t) && "init" !== t,
          annotations: {
            j: !1,
            l: (t, n) => "elements." + Ot[It(n.type)].id
          },
          interaction: {
            l: !0
          },
          common: {
            label: {
              S: At,
              l: !0
            },
            S: At
          }
        },
        additionalOptionScopes: [""]
      };

      function Ht(t, n, e) {
        const {
          ctx: o,
          chartArea: i
        } = t, s = Nt.get(t);
        e && (0, r.Y)(o, i);
        const a = function(t, n) {
          const e = [];
          for (const o of t)
            if (o.options.drawTime === n && e.push({
                element: o,
                main: !0
              }), o.elements && o.elements.length)
              for (const t of o.elements) t.options.display && t.options.drawTime === n && e.push({
                element: t
              });
          return e
        }(s.visibleElements, n).sort((t, n) => t.element.options.z - n.element.options.z);
        for (const t of a) $t(o, i, s, t);
        e && (0, r.$)(o)
      }

      function $t(t, n, e, o) {
        const r = o.element;
        o.main ? (K(e, r, "beforeDraw"), r.draw(t, n), K(e, r, "afterDraw")) : r.draw(t, n)
      }
    }
  }
]);
