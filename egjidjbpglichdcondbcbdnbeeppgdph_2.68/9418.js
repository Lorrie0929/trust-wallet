"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [9418], {
    99418: (t, e, n) => {
      n.d(e, {
        A: () => et
      });
      const {
        entries: o,
        setPrototypeOf: i,
        isFrozen: r,
        getPrototypeOf: a,
        getOwnPropertyDescriptor: l
      } = Object;
      let {
        freeze: s,
        seal: c,
        create: u
      } = Object, {
        apply: f,
        construct: p
      } = "u" > typeof Reflect && Reflect;
      s || (s = function(t) {
        return t
      }), c || (c = function(t) {
        return t
      }), f || (f = function(t, e, n) {
        return t.apply(e, n)
      }), p || (p = function(t, e) {
        return new t(...e)
      });
      const m = _([].forEach),
        d = _([].lastIndexOf),
        h = _([].pop),
        g = _([].push),
        y = _([].splice),
        b = _("".toLowerCase),
        w = _("".toString),
        x = _("".match),
        v = _("".replace),
        T = _("".indexOf),
        k = _("".trim),
        E = _({}.hasOwnProperty),
        S = _(/t/.test),
        A = (R = TypeError, function() {
          for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
          return p(R, e)
        });
      var R;

      function _(t) {
        return function(e) {
          e instanceof RegExp && (e.lastIndex = 0);
          for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) o[i - 1] = arguments[i];
          return f(t, e, o)
        }
      }

      function z(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
        i && i(t, null);
        let o = e.length;
        for (; o--;) {
          let i = e[o];
          if ("string" == typeof i) {
            const t = n(i);
            t !== i && (r(e) || (e[o] = t), i = t)
          }
          t[i] = !0
        }
        return t
      }

      function D(t) {
        for (let e = 0; e < t.length; e++) E(t, e) || (t[e] = null);
        return t
      }

      function O(t) {
        const e = u(null);
        for (const [n, i] of o(t)) E(t, n) && (Array.isArray(i) ? e[n] = D(i) : i && "object" == typeof i && i.constructor === Object ? e[n] = O(i) : e[n] = i);
        return e
      }

      function L(t, e) {
        for (; null !== t;) {
          const n = l(t, e);
          if (n) {
            if (n.get) return _(n.get);
            if ("function" == typeof n.value) return _(n.value)
          }
          t = a(t)
        }
        return function() {
          return null
        }
      }
      const M = s(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        I = s(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
        F = s(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        P = s(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
        N = s(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
        C = s(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        U = s(["#text"]),
        j = s(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
        B = s(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        W = s(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        H = s(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        q = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        Y = c(/<%[\w\W]*|[\w\W]*%>/gm),
        X = c(/\$\{[\w\W]*/gm),
        $ = c(/^data-[\-\w.\u00B7-\uFFFF]+$/),
        G = c(/^aria-[\-\w]+$/),
        K = c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        V = c(/^(?:\w+script|data):/i),
        J = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Q = c(/^html$/i),
        Z = c(/^[a-z][.\w]*(-[.\w]+)+$/i);
      var tt = Object.freeze({
          __proto__: null,
          ARIA_ATTR: G,
          ATTR_WHITESPACE: J,
          CUSTOM_ELEMENT: Z,
          DATA_ATTR: $,
          DOCTYPE_NAME: Q,
          ERB_EXPR: Y,
          IS_ALLOWED_URI: K,
          IS_SCRIPT_OR_DATA: V,
          MUSTACHE_EXPR: q,
          TMPLIT_EXPR: X
        }),
        et = function t() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : typeof window > "u" ? null : window;
          const n = e => t(e);
          if (n.version = "3.2.6", n.removed = [], !e || !e.document || 9 !== e.document.nodeType || !e.Element) return n.isSupported = !1, n;
          let {
            document: i
          } = e;
          const r = i,
            a = r.currentScript,
            {
              DocumentFragment: l,
              HTMLTemplateElement: c,
              Node: f,
              Element: p,
              NodeFilter: R,
              NamedNodeMap: _ = e.NamedNodeMap || e.MozNamedAttrMap,
              HTMLFormElement: D,
              DOMParser: q,
              trustedTypes: Y
            } = e,
            X = p.prototype,
            $ = L(X, "cloneNode"),
            G = L(X, "remove"),
            V = L(X, "nextSibling"),
            J = L(X, "childNodes"),
            Z = L(X, "parentNode");
          if ("function" == typeof c) {
            const t = i.createElement("template");
            t.content && t.content.ownerDocument && (i = t.content.ownerDocument)
          }
          let et, nt = "";
          const {
            implementation: ot,
            createNodeIterator: it,
            createDocumentFragment: rt,
            getElementsByTagName: at
          } = i, {
            importNode: lt
          } = r;
          let st = {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
          };
          n.isSupported = "function" == typeof o && "function" == typeof Z && ot && void 0 !== ot.createHTMLDocument;
          const {
            MUSTACHE_EXPR: ct,
            ERB_EXPR: ut,
            TMPLIT_EXPR: ft,
            DATA_ATTR: pt,
            ARIA_ATTR: mt,
            IS_SCRIPT_OR_DATA: dt,
            ATTR_WHITESPACE: ht,
            CUSTOM_ELEMENT: gt
          } = tt;
          let {
            IS_ALLOWED_URI: yt
          } = tt, bt = null;
          const wt = z({}, [...M, ...I, ...F, ...N, ...U]);
          let xt = null;
          const vt = z({}, [...j, ...B, ...W, ...H]);
          let Tt = Object.seal(u(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
              }
            })),
            kt = null,
            Et = null,
            St = !0,
            At = !0,
            Rt = !1,
            _t = !0,
            zt = !1,
            Dt = !0,
            Ot = !1,
            Lt = !1,
            Mt = !1,
            It = !1,
            Ft = !1,
            Pt = !1,
            Nt = !0,
            Ct = !1,
            Ut = !0,
            jt = !1,
            Bt = {},
            Wt = null;
          const Ht = z({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
          let qt = null;
          const Yt = z({}, ["audio", "video", "img", "source", "image", "track"]);
          let Xt = null;
          const $t = z({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            Gt = "http://www.w3.org/1998/Math/MathML",
            Kt = "http://www.w3.org/2000/svg",
            Vt = "http://www.w3.org/1999/xhtml";
          let Jt = Vt,
            Qt = !1,
            Zt = null;
          const te = z({}, [Gt, Kt, Vt], w);
          let ee = z({}, ["mi", "mo", "mn", "ms", "mtext"]),
            ne = z({}, ["annotation-xml"]);
          const oe = z({}, ["title", "style", "font", "a", "script"]);
          let ie = null;
          const re = ["application/xhtml+xml", "text/html"];
          let ae = null,
            le = null;
          const se = i.createElement("form"),
            ce = function(t) {
              return t instanceof RegExp || t instanceof Function
            },
            ue = function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!le || le !== t) {
                if ((!t || "object" != typeof t) && (t = {}), t = O(t), ie = -1 === re.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ae = "application/xhtml+xml" === ie ? w : b, bt = E(t, "ALLOWED_TAGS") ? z({}, t.ALLOWED_TAGS, ae) : wt, xt = E(t, "ALLOWED_ATTR") ? z({}, t.ALLOWED_ATTR, ae) : vt, Zt = E(t, "ALLOWED_NAMESPACES") ? z({}, t.ALLOWED_NAMESPACES, w) : te, Xt = E(t, "ADD_URI_SAFE_ATTR") ? z(O($t), t.ADD_URI_SAFE_ATTR, ae) : $t, qt = E(t, "ADD_DATA_URI_TAGS") ? z(O(Yt), t.ADD_DATA_URI_TAGS, ae) : Yt, Wt = E(t, "FORBID_CONTENTS") ? z({}, t.FORBID_CONTENTS, ae) : Ht, kt = E(t, "FORBID_TAGS") ? z({}, t.FORBID_TAGS, ae) : O({}), Et = E(t, "FORBID_ATTR") ? z({}, t.FORBID_ATTR, ae) : O({}), Bt = !!E(t, "USE_PROFILES") && t.USE_PROFILES, St = !1 !== t.ALLOW_ARIA_ATTR, At = !1 !== t.ALLOW_DATA_ATTR, Rt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, zt = t.SAFE_FOR_TEMPLATES || !1, Dt = !1 !== t.SAFE_FOR_XML, Ot = t.WHOLE_DOCUMENT || !1, It = t.RETURN_DOM || !1, Ft = t.RETURN_DOM_FRAGMENT || !1, Pt = t.RETURN_TRUSTED_TYPE || !1, Mt = t.FORCE_BODY || !1, Nt = !1 !== t.SANITIZE_DOM, Ct = t.SANITIZE_NAMED_PROPS || !1, Ut = !1 !== t.KEEP_CONTENT, jt = t.IN_PLACE || !1, yt = t.ALLOWED_URI_REGEXP || K, Jt = t.NAMESPACE || Vt, ee = t.MATHML_TEXT_INTEGRATION_POINTS || ee, ne = t.HTML_INTEGRATION_POINTS || ne, Tt = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ce(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Tt.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ce(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Tt.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Tt.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), zt && (At = !1), Ft && (It = !0), Bt && (bt = z({}, U), xt = [], !0 === Bt.html && (z(bt, M), z(xt, j)), !0 === Bt.svg && (z(bt, I), z(xt, B), z(xt, H)), !0 === Bt.svgFilters && (z(bt, F), z(xt, B), z(xt, H)), !0 === Bt.mathMl && (z(bt, N), z(xt, W), z(xt, H))), t.ADD_TAGS && (bt === wt && (bt = O(bt)), z(bt, t.ADD_TAGS, ae)), t.ADD_ATTR && (xt === vt && (xt = O(xt)), z(xt, t.ADD_ATTR, ae)), t.ADD_URI_SAFE_ATTR && z(Xt, t.ADD_URI_SAFE_ATTR, ae), t.FORBID_CONTENTS && (Wt === Ht && (Wt = O(Wt)), z(Wt, t.FORBID_CONTENTS, ae)), Ut && (bt["#text"] = !0), Ot && z(bt, ["html", "head", "body"]), bt.table && (z(bt, ["tbody"]), delete kt.tbody), t.TRUSTED_TYPES_POLICY) {
                  if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML) throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                  if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL) throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                  et = t.TRUSTED_TYPES_POLICY, nt = et.createHTML("")
                } else void 0 === et && (et = function(t, e) {
                  if ("object" != typeof t || "function" != typeof t.createPolicy) return null;
                  let n = null;
                  const o = "data-tt-policy-suffix";
                  e && e.hasAttribute(o) && (n = e.getAttribute(o));
                  const i = "dompurify" + (n ? "#" + n : "");
                  try {
                    return t.createPolicy(i, {
                      createHTML: t => t,
                      createScriptURL: t => t
                    })
                  } catch {
                    return console.warn("TrustedTypes policy " + i + " could not be created."), null
                  }
                }(Y, a)), null !== et && "string" == typeof nt && (nt = et.createHTML(""));
                s && s(t), le = t
              }
            },
            fe = z({}, [...I, ...F, ...P]),
            pe = z({}, [...N, ...C]),
            me = function(t) {
              g(n.removed, {
                element: t
              });
              try {
                Z(t).removeChild(t)
              } catch {
                G(t)
              }
            },
            de = function(t, e) {
              try {
                g(n.removed, {
                  attribute: e.getAttributeNode(t),
                  from: e
                })
              } catch {
                g(n.removed, {
                  attribute: null,
                  from: e
                })
              }
              if (e.removeAttribute(t), "is" === t)
                if (It || Ft) try {
                  me(e)
                } catch {} else try {
                  e.setAttribute(t, "")
                } catch {}
            },
            he = function(t) {
              let e = null,
                n = null;
              if (Mt) t = "<remove></remove>" + t;
              else {
                const e = x(t, /^[\r\n\t ]+/);
                n = e && e[0]
              }
              "application/xhtml+xml" === ie && Jt === Vt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
              const o = et ? et.createHTML(t) : t;
              if (Jt === Vt) try {
                e = (new q).parseFromString(o, ie)
              } catch {}
              if (!e || !e.documentElement) {
                e = ot.createDocument(Jt, "template", null);
                try {
                  e.documentElement.innerHTML = Qt ? nt : o
                } catch {}
              }
              const r = e.body || e.documentElement;
              return t && n && r.insertBefore(i.createTextNode(n), r.childNodes[0] || null), Jt === Vt ? at.call(e, Ot ? "html" : "body")[0] : Ot ? e.documentElement : r
            },
            ge = function(t) {
              return it.call(t.ownerDocument || t, t, R.SHOW_ELEMENT | R.SHOW_COMMENT | R.SHOW_TEXT | R.SHOW_PROCESSING_INSTRUCTION | R.SHOW_CDATA_SECTION, null)
            },
            ye = function(t) {
              return t instanceof D && ("string" != typeof t.nodeName || "string" != typeof t.textContent || "function" != typeof t.removeChild || !(t.attributes instanceof _) || "function" != typeof t.removeAttribute || "function" != typeof t.setAttribute || "string" != typeof t.namespaceURI || "function" != typeof t.insertBefore || "function" != typeof t.hasChildNodes)
            },
            be = function(t) {
              return "function" == typeof f && t instanceof f
            };

          function we(t, e, o) {
            m(t, t => {
              t.call(n, e, o, le)
            })
          }
          const xe = function(t) {
              let e = null;
              if (we(st.beforeSanitizeElements, t, null), ye(t)) return me(t), !0;
              const o = ae(t.nodeName);
              if (we(st.uponSanitizeElement, t, {
                  tagName: o,
                  allowedTags: bt
                }), Dt && t.hasChildNodes() && !be(t.firstElementChild) && S(/<[/\w!]/g, t.innerHTML) && S(/<[/\w!]/g, t.textContent) || 7 === t.nodeType || Dt && 8 === t.nodeType && S(/<[/\w]/g, t.data)) return me(t), !0;
              if (!bt[o] || kt[o]) {
                if (!kt[o] && Te(o) && (Tt.tagNameCheck instanceof RegExp && S(Tt.tagNameCheck, o) || Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(o))) return !1;
                if (Ut && !Wt[o]) {
                  const e = Z(t) || t.parentNode,
                    n = J(t) || t.childNodes;
                  if (n && e)
                    for (let o = n.length - 1; o >= 0; --o) {
                      const i = $(n[o], !0);
                      i.t = (t.t || 0) + 1, e.insertBefore(i, V(t))
                    }
                }
                return me(t), !0
              }
              return t instanceof p && ! function(t) {
                let e = Z(t);
                (!e || !e.tagName) && (e = {
                  namespaceURI: Jt,
                  tagName: "template"
                });
                const n = b(t.tagName),
                  o = b(e.tagName);
                return !!Zt[t.namespaceURI] && (t.namespaceURI === Kt ? e.namespaceURI === Vt ? "svg" === n : e.namespaceURI === Gt ? "svg" === n && ("annotation-xml" === o || ee[o]) : !!fe[n] : t.namespaceURI === Gt ? e.namespaceURI === Vt ? "math" === n : e.namespaceURI === Kt ? "math" === n && ne[o] : !!pe[n] : t.namespaceURI === Vt ? !(e.namespaceURI === Kt && !ne[o] || e.namespaceURI === Gt && !ee[o]) && !pe[n] && (oe[n] || !fe[n]) : !("application/xhtml+xml" !== ie || !Zt[t.namespaceURI]))
              }(t) || ("noscript" === o || "noembed" === o || "noframes" === o) && S(/<\/no(script|embed|frames)/i, t.innerHTML) ? (me(t), !0) : (zt && 3 === t.nodeType && (e = t.textContent, m([ct, ut, ft], t => {
                e = v(e, t, " ")
              }), t.textContent !== e && (g(n.removed, {
                element: t.cloneNode()
              }), t.textContent = e)), we(st.afterSanitizeElements, t, null), !1)
            },
            ve = function(t, e, n) {
              if (Nt && ("id" === e || "name" === e) && (n in i || n in se)) return !1;
              if ((!At || Et[e] || !S(pt, e)) && (!St || !S(mt, e)))
                if (!xt[e] || Et[e]) {
                  if (!(Te(t) && (Tt.tagNameCheck instanceof RegExp && S(Tt.tagNameCheck, t) || Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(t)) && (Tt.attributeNameCheck instanceof RegExp && S(Tt.attributeNameCheck, e) || Tt.attributeNameCheck instanceof Function && Tt.attributeNameCheck(e)) || "is" === e && Tt.allowCustomizedBuiltInElements && (Tt.tagNameCheck instanceof RegExp && S(Tt.tagNameCheck, n) || Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(n)))) return !1
                } else if (!Xt[e] && !S(yt, v(n, ht, "")) && ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== T(n, "data:") || !qt[t]) && (!Rt || S(dt, v(n, ht, ""))) && n) return !1;
              return !0
            },
            Te = function(t) {
              return "annotation-xml" !== t && x(t, gt)
            },
            ke = function(t) {
              we(st.beforeSanitizeAttributes, t, null);
              const {
                attributes: e
              } = t;
              if (!e || ye(t)) return;
              const o = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: xt,
                forceKeepAttr: void 0
              };
              let i = e.length;
              for (; i--;) {
                const r = e[i],
                  {
                    name: a,
                    namespaceURI: l,
                    value: s
                  } = r,
                  c = ae(a),
                  u = s;
                let f = "value" === a ? u : k(u);
                if (o.attrName = c, o.attrValue = f, o.keepAttr = !0, o.forceKeepAttr = void 0, we(st.uponSanitizeAttribute, t, o), f = o.attrValue, Ct && ("id" === c || "name" === c) && (de(a, t), f = "user-content-" + f), Dt && S(/((--!?|])>)|<\/(style|title)/i, f)) {
                  de(a, t);
                  continue
                }
                if (o.forceKeepAttr) continue;
                if (!o.keepAttr) {
                  de(a, t);
                  continue
                }
                if (!_t && S(/\/>/i, f)) {
                  de(a, t);
                  continue
                }
                zt && m([ct, ut, ft], t => {
                  f = v(f, t, " ")
                });
                const p = ae(t.nodeName);
                if (ve(p, c, f)) {
                  if (et && "object" == typeof Y && "function" == typeof Y.getAttributeType && !l) switch (Y.getAttributeType(p, c)) {
                    case "TrustedHTML":
                      f = et.createHTML(f);
                      break;
                    case "TrustedScriptURL":
                      f = et.createScriptURL(f)
                  }
                  if (f !== u) try {
                    l ? t.setAttributeNS(l, a, f) : t.setAttribute(a, f), ye(t) ? me(t) : h(n.removed)
                  } catch {
                    de(a, t)
                  }
                } else de(a, t)
              }
              we(st.afterSanitizeAttributes, t, null)
            },
            Ee = function t(e) {
              let n = null;
              const o = ge(e);
              for (we(st.beforeSanitizeShadowDOM, e, null); n = o.nextNode();) we(st.uponSanitizeShadowNode, n, null), xe(n), ke(n), n.content instanceof l && t(n.content);
              we(st.afterSanitizeShadowDOM, e, null)
            };
          return n.sanitize = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = null,
              i = null,
              a = null,
              s = null;
            if (Qt = !t, Qt && (t = "\x3c!--\x3e"), "string" != typeof t && !be(t)) {
              if ("function" != typeof t.toString) throw A("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw A("dirty is not a string, aborting")
            }
            if (!n.isSupported) return t;
            if (Lt || ue(e), n.removed = [], "string" == typeof t && (jt = !1), jt) {
              if (t.nodeName) {
                const e = ae(t.nodeName);
                if (!bt[e] || kt[e]) throw A("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof f) o = he("\x3c!----\x3e"), i = o.ownerDocument.importNode(t, !0), 1 === i.nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? o = i : o.appendChild(i);
            else {
              if (!It && !zt && !Ot && -1 === t.indexOf("<")) return et && Pt ? et.createHTML(t) : t;
              if (o = he(t), !o) return It ? null : Pt ? nt : ""
            }
            o && Mt && me(o.firstChild);
            const c = ge(jt ? t : o);
            for (; a = c.nextNode();) xe(a), ke(a), a.content instanceof l && Ee(a.content);
            if (jt) return t;
            if (It) {
              if (Ft)
                for (s = rt.call(o.ownerDocument); o.firstChild;) s.appendChild(o.firstChild);
              else s = o;
              return (xt.shadowroot || xt.shadowrootmode) && (s = lt.call(r, s, !0)), s
            }
            let u = Ot ? o.outerHTML : o.innerHTML;
            return Ot && bt["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && S(Q, o.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + o.ownerDocument.doctype.name + ">\n" + u), zt && m([ct, ut, ft], t => {
              u = v(u, t, " ")
            }), et && Pt ? et.createHTML(u) : u
          }, n.setConfig = function() {
            ue(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), Lt = !0
          }, n.clearConfig = function() {
            le = null, Lt = !1
          }, n.isValidAttribute = function(t, e, n) {
            le || ue({});
            const o = ae(t),
              i = ae(e);
            return ve(o, i, n)
          }, n.addHook = function(t, e) {
            "function" == typeof e && g(st[t], e)
          }, n.removeHook = function(t, e) {
            if (void 0 !== e) {
              const n = d(st[t], e);
              return -1 === n ? void 0 : y(st[t], n, 1)[0]
            }
            return h(st[t])
          }, n.removeHooks = function(t) {
            st[t] = []
          }, n.removeAllHooks = function() {
            st = {
              afterSanitizeAttributes: [],
              afterSanitizeElements: [],
              afterSanitizeShadowDOM: [],
              beforeSanitizeAttributes: [],
              beforeSanitizeElements: [],
              beforeSanitizeShadowDOM: [],
              uponSanitizeAttribute: [],
              uponSanitizeElement: [],
              uponSanitizeShadowNode: []
            }
          }, n
        }()
    }
  }
]);
