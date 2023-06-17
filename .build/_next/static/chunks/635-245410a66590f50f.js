"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[635], { 8707: function(t, n, e) {
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "default", { enumerable: true, get: function() {
    return _;
  } });
  let r = e(6927), i = e(5909), o = i._(e(6006)), u = r._(e(9209)), a = e(3930), l = e(8706), s = e(3278);
  e(4745);
  let f = r._(e(8685)), c = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", dangerouslyAllowSVG: false, unoptimized: false };
  function h(t2) {
    return void 0 !== t2.default;
  }
  function p(t2) {
    return void 0 === t2 ? t2 : "number" == typeof t2 ? Number.isFinite(t2) ? t2 : NaN : "string" == typeof t2 && /^[0-9]+$/.test(t2) ? parseInt(t2, 10) : NaN;
  }
  function d(t2, n2, e2, r2, i2, o2, u2) {
    if (!t2 || t2["data-loaded-src"] === n2)
      return;
    t2["data-loaded-src"] = n2;
    let a2 = "decode" in t2 ? t2.decode() : Promise.resolve();
    a2.catch(() => {
    }).then(() => {
      if (t2.parentElement && t2.isConnected) {
        if ("blur" === e2 && o2(true), null == r2 ? void 0 : r2.current) {
          let n3 = new Event("load");
          Object.defineProperty(n3, "target", { writable: false, value: t2 });
          let e3 = false, i3 = false;
          r2.current({ ...n3, nativeEvent: n3, currentTarget: t2, target: t2, isDefaultPrevented: () => e3, isPropagationStopped: () => i3, persist: () => {
          }, preventDefault: () => {
            e3 = true, n3.preventDefault();
          }, stopPropagation: () => {
            i3 = true, n3.stopPropagation();
          } });
        }
        (null == i2 ? void 0 : i2.current) && i2.current(t2);
      }
    });
  }
  function v(t2) {
    let [n2, e2] = o.version.split("."), r2 = parseInt(n2, 10), i2 = parseInt(e2, 10);
    return r2 > 18 || 18 === r2 && i2 >= 3 ? { fetchPriority: t2 } : { fetchpriority: t2 };
  }
  let g = (0, o.forwardRef)((t2, n2) => {
    let { imgAttributes: e2, heightInt: r2, widthInt: i2, qualityInt: u2, className: a2, imgStyle: l2, blurStyle: s2, isLazy: f2, fetchPriority: c2, fill: h2, placeholder: p2, loading: g2, srcString: y2, config: _2, unoptimized: m, loader: w, onLoadRef: x, onLoadingCompleteRef: b, setBlurComplete: E, setShowAltText: S, onLoad: N, onError: M, ...k } = t2;
    return g2 = f2 ? "lazy" : g2, o.default.createElement("img", { ...k, ...v(c2), loading: g2, width: i2, height: r2, decoding: "async", "data-nimg": h2 ? "fill" : "1", className: a2, style: { ...l2, ...s2 }, ...e2, ref: (0, o.useCallback)((t3) => {
      n2 && ("function" == typeof n2 ? n2(t3) : "object" == typeof n2 && (n2.current = t3)), t3 && (M && (t3.src = t3.src), t3.complete && d(t3, y2, p2, x, b, E, m));
    }, [y2, p2, x, b, E, M, m, n2]), onLoad: (t3) => {
      let n3 = t3.currentTarget;
      d(n3, y2, p2, x, b, E, m);
    }, onError: (t3) => {
      S(true), "blur" === p2 && E(true), M && M(t3);
    } });
  }), y = (0, o.forwardRef)((t2, n2) => {
    var e2;
    let r2, i2, { src: d2, sizes: y2, unoptimized: _2 = false, priority: m = false, loading: w, className: x, quality: b, width: E, height: S, fill: N, style: M, onLoad: k, onLoadingComplete: A, placeholder: P = "empty", blurDataURL: $, fetchPriority: C, layout: O, objectFit: j, objectPosition: R, lazyBoundary: I, lazyRoot: z, ...q } = t2, T = (0, o.useContext)(s.ImageConfigContext), D = (0, o.useMemo)(() => {
      let t3 = c || T || l.imageConfigDefault, n3 = [...t3.deviceSizes, ...t3.imageSizes].sort((t4, n4) => t4 - n4), e3 = t3.deviceSizes.sort((t4, n4) => t4 - n4);
      return { ...t3, allSizes: n3, deviceSizes: e3 };
    }, [T]), L = q.loader || f.default;
    delete q.loader;
    let X = "__next_img_default" in L;
    if (X) {
      if ("custom" === D.loader)
        throw Error('Image with src "' + d2 + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader');
    } else {
      let t3 = L;
      L = (n3) => {
        let { config: e3, ...r3 } = n3;
        return t3(r3);
      };
    }
    if (O) {
      "fill" === O && (N = true);
      let t3 = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[O];
      t3 && (M = { ...M, ...t3 });
      let n3 = { responsive: "100vw", fill: "100vw" }[O];
      n3 && !y2 && (y2 = n3);
    }
    let H = "", Y = p(E), U = p(S);
    if ("object" == typeof (e2 = d2) && (h(e2) || void 0 !== e2.src)) {
      let t3 = h(d2) ? d2.default : d2;
      if (!t3.src)
        throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t3));
      if (!t3.height || !t3.width)
        throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t3));
      if (r2 = t3.blurWidth, i2 = t3.blurHeight, $ = $ || t3.blurDataURL, H = t3.src, !N) {
        if (Y || U) {
          if (Y && !U) {
            let n3 = Y / t3.width;
            U = Math.round(t3.height * n3);
          } else if (!Y && U) {
            let n3 = U / t3.height;
            Y = Math.round(t3.width * n3);
          }
        } else
          Y = t3.width, U = t3.height;
      }
    }
    let B = !m && ("lazy" === w || void 0 === w);
    (!(d2 = "string" == typeof d2 ? d2 : H) || d2.startsWith("data:") || d2.startsWith("blob:")) && (_2 = true, B = false), D.unoptimized && (_2 = true), X && d2.endsWith(".svg") && !D.dangerouslyAllowSVG && (_2 = true), m && (C = "high");
    let [F, V] = (0, o.useState)(false), [W, G] = (0, o.useState)(false), J = p(b), K = Object.assign(N ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: j, objectPosition: R } : {}, W ? {} : { color: "transparent" }, M), Z = "blur" === P && $ && !F ? { backgroundSize: K.objectFit || "cover", backgroundPosition: K.objectPosition || "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, a.getImageBlurSvg)({ widthInt: Y, heightInt: U, blurWidth: r2, blurHeight: i2, blurDataURL: $, objectFit: K.objectFit }) + '")' } : {}, Q = function(t3) {
      let { config: n3, src: e3, unoptimized: r3, width: i3, quality: o2, sizes: u2, loader: a2 } = t3;
      if (r3)
        return { src: e3, srcSet: void 0, sizes: void 0 };
      let { widths: l2, kind: s2 } = function(t4, n4, e4) {
        let { deviceSizes: r4, allSizes: i4 } = t4;
        if (e4) {
          let t5 = /(^|\s)(1?\d?\d)vw/g, n5 = [];
          for (let r5; r5 = t5.exec(e4); r5)
            n5.push(parseInt(r5[2]));
          if (n5.length) {
            let t6 = 0.01 * Math.min(...n5);
            return { widths: i4.filter((n6) => n6 >= r4[0] * t6), kind: "w" };
          }
          return { widths: i4, kind: "w" };
        }
        if ("number" != typeof n4)
          return { widths: r4, kind: "w" };
        let o3 = [...new Set([n4, 2 * n4].map((t5) => i4.find((n5) => n5 >= t5) || i4[i4.length - 1]))];
        return { widths: o3, kind: "x" };
      }(n3, i3, u2), f2 = l2.length - 1;
      return { sizes: u2 || "w" !== s2 ? u2 : "100vw", srcSet: l2.map((t4, r4) => a2({ config: n3, src: e3, quality: o2, width: t4 }) + " " + ("w" === s2 ? t4 : r4 + 1) + s2).join(", "), src: a2({ config: n3, src: e3, quality: o2, width: l2[f2] }) };
    }({ config: D, src: d2, unoptimized: _2, width: Y, quality: J, sizes: y2, loader: L }), tt = d2, tn = (0, o.useRef)(k);
    (0, o.useEffect)(() => {
      tn.current = k;
    }, [k]);
    let te = (0, o.useRef)(A);
    (0, o.useEffect)(() => {
      te.current = A;
    }, [A]);
    let tr = { isLazy: B, imgAttributes: Q, heightInt: U, widthInt: Y, qualityInt: J, className: x, imgStyle: K, blurStyle: Z, loading: w, config: D, fetchPriority: C, fill: N, unoptimized: _2, placeholder: P, loader: L, srcString: tt, onLoadRef: tn, onLoadingCompleteRef: te, setBlurComplete: V, setShowAltText: G, ...q };
    return o.default.createElement(o.default.Fragment, null, o.default.createElement(g, { ...tr, ref: n2 }), m ? o.default.createElement(u.default, null, o.default.createElement("link", { key: "__nimg-" + Q.src + Q.srcSet + Q.sizes, rel: "preload", as: "image", href: Q.srcSet ? void 0 : Q.src, imageSrcSet: Q.srcSet, imageSizes: Q.sizes, crossOrigin: q.crossOrigin, referrerPolicy: q.referrerPolicy, ...v(C) })) : null);
  }), _ = y;
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", { value: true }), Object.assign(n.default, n), t.exports = n.default);
}, 1909: function(t, n, e) {
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "AmpStateContext", { enumerable: true, get: function() {
    return o;
  } });
  let r = e(6927), i = r._(e(6006)), o = i.default.createContext({});
}, 7060: function(t, n) {
  function e(t2) {
    let { ampFirst: n2 = false, hybrid: e2 = false, hasQuery: r = false } = void 0 === t2 ? {} : t2;
    return n2 || e2 && r;
  }
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "isInAmpMode", { enumerable: true, get: function() {
    return e;
  } });
}, 9209: function(t, n, e) {
  Object.defineProperty(n, "__esModule", { value: true }), function(t2, n2) {
    for (var e2 in n2)
      Object.defineProperty(t2, e2, { enumerable: true, get: n2[e2] });
  }(n, { defaultHead: function() {
    return f;
  }, default: function() {
    return d;
  } });
  let r = e(6927), i = e(5909), o = i._(e(6006)), u = r._(e(9797)), a = e(1909), l = e(5415), s = e(7060);
  function f(t2) {
    void 0 === t2 && (t2 = false);
    let n2 = [o.default.createElement("meta", { charSet: "utf-8" })];
    return t2 || n2.push(o.default.createElement("meta", { name: "viewport", content: "width=device-width" })), n2;
  }
  function c(t2, n2) {
    return "string" == typeof n2 || "number" == typeof n2 ? t2 : n2.type === o.default.Fragment ? t2.concat(o.default.Children.toArray(n2.props.children).reduce((t3, n3) => "string" == typeof n3 || "number" == typeof n3 ? t3 : t3.concat(n3), [])) : t2.concat(n2);
  }
  e(4745);
  let h = ["name", "httpEquiv", "charSet", "itemProp"];
  function p(t2, n2) {
    let { inAmpMode: e2 } = n2;
    return t2.reduce(c, []).reverse().concat(f(e2).reverse()).filter(function() {
      let t3 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set(), e3 = /* @__PURE__ */ new Set(), r2 = {};
      return (i2) => {
        let o2 = true, u2 = false;
        if (i2.key && "number" != typeof i2.key && i2.key.indexOf("$") > 0) {
          u2 = true;
          let n4 = i2.key.slice(i2.key.indexOf("$") + 1);
          t3.has(n4) ? o2 = false : t3.add(n4);
        }
        switch (i2.type) {
          case "title":
          case "base":
            n3.has(i2.type) ? o2 = false : n3.add(i2.type);
            break;
          case "meta":
            for (let t4 = 0, n4 = h.length; t4 < n4; t4++) {
              let n5 = h[t4];
              if (i2.props.hasOwnProperty(n5)) {
                if ("charSet" === n5)
                  e3.has(n5) ? o2 = false : e3.add(n5);
                else {
                  let t5 = i2.props[n5], e4 = r2[n5] || /* @__PURE__ */ new Set();
                  ("name" !== n5 || !u2) && e4.has(t5) ? o2 = false : (e4.add(t5), r2[n5] = e4);
                }
              }
            }
        }
        return o2;
      };
    }()).reverse().map((t3, n3) => {
      let r2 = t3.key || n3;
      if (!e2 && "link" === t3.type && t3.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((n4) => t3.props.href.startsWith(n4))) {
        let n4 = { ...t3.props || {} };
        return n4["data-href"] = n4.href, n4.href = void 0, n4["data-optimized-fonts"] = true, o.default.cloneElement(t3, n4);
      }
      return o.default.cloneElement(t3, { key: r2 });
    });
  }
  let d = function(t2) {
    let { children: n2 } = t2, e2 = (0, o.useContext)(a.AmpStateContext), r2 = (0, o.useContext)(l.HeadManagerContext);
    return o.default.createElement(u.default, { reduceComponentsToState: p, headManager: r2, inAmpMode: (0, s.isInAmpMode)(e2) }, n2);
  };
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", { value: true }), Object.assign(n.default, n), t.exports = n.default);
}, 3930: function(t, n) {
  function e(t2) {
    let { widthInt: n2, heightInt: e2, blurWidth: r, blurHeight: i, blurDataURL: o, objectFit: u } = t2, a = r || n2, l = i || e2, s = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
    return a && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + a + " " + l + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + (r && i ? "1" : "20") + "'/%3E" + s + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E" : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + ("contain" === u ? "xMidYMid" : "cover" === u ? "xMidYMid slice" : "none") + "' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E";
  }
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "getImageBlurSvg", { enumerable: true, get: function() {
    return e;
  } });
}, 3278: function(t, n, e) {
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "ImageConfigContext", { enumerable: true, get: function() {
    return u;
  } });
  let r = e(6927), i = r._(e(6006)), o = e(8706), u = i.default.createContext(o.imageConfigDefault);
}, 8706: function(t, n) {
  Object.defineProperty(n, "__esModule", { value: true }), function(t2, n2) {
    for (var e2 in n2)
      Object.defineProperty(t2, e2, { enumerable: true, get: n2[e2] });
  }(n, { VALID_LOADERS: function() {
    return e;
  }, imageConfigDefault: function() {
    return r;
  } });
  let e = ["default", "imgix", "cloudinary", "akamai", "custom"], r = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", loaderFile: "", domains: [], disableStaticImages: false, minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline", remotePatterns: [], unoptimized: false };
}, 8685: function(t, n) {
  function e(t2) {
    let { config: n2, src: e2, width: r2, quality: i } = t2;
    return n2.path + "?url=" + encodeURIComponent(e2) + "&w=" + r2 + "&q=" + (i || 75);
  }
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "default", { enumerable: true, get: function() {
    return r;
  } }), e.__next_img_default = true;
  let r = e;
}, 9797: function(t, n, e) {
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "default", { enumerable: true, get: function() {
    return a;
  } });
  let r = e(5909), i = r._(e(6006)), o = i.useLayoutEffect, u = i.useEffect;
  function a(t2) {
    let { headManager: n2, reduceComponentsToState: e2 } = t2;
    function r2() {
      if (n2 && n2.mountedInstances) {
        let r3 = i.Children.toArray(Array.from(n2.mountedInstances).filter(Boolean));
        n2.updateHead(e2(r3, t2));
      }
    }
    return o(() => {
      var e3;
      return null == n2 || null == (e3 = n2.mountedInstances) || e3.add(t2.children), () => {
        var e4;
        null == n2 || null == (e4 = n2.mountedInstances) || e4.delete(t2.children);
      };
    }), o(() => (n2 && (n2._pendingUpdate = r2), () => {
      n2 && (n2._pendingUpdate = r2);
    })), u(() => (n2 && n2._pendingUpdate && (n2._pendingUpdate(), n2._pendingUpdate = null), () => {
      n2 && n2._pendingUpdate && (n2._pendingUpdate(), n2._pendingUpdate = null);
    })), null;
  }
}, 4745: function(t, n) {
  Object.defineProperty(n, "__esModule", { value: true }), Object.defineProperty(n, "warnOnce", { enumerable: true, get: function() {
    return e;
  } });
  let e = (t2) => {
  };
}, 3177: function(t, n, e) {
  /**
  * @license React
  * react-jsx-runtime.production.min.js
  *
  * Copyright (c) Meta Platforms, Inc. and affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var r = e(6006), i = Symbol.for("react.element"), o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty), u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: true, ref: true, __self: true, __source: true };
  n.jsx = function(t2, n2, e2) {
    var r2, l = {}, s = null, f = null;
    for (r2 in void 0 !== e2 && (s = "" + e2), void 0 !== n2.key && (s = "" + n2.key), void 0 !== n2.ref && (f = n2.ref), n2)
      o.call(n2, r2) && !a.hasOwnProperty(r2) && (l[r2] = n2[r2]);
    if (t2 && t2.defaultProps)
      for (r2 in n2 = t2.defaultProps)
        void 0 === l[r2] && (l[r2] = n2[r2]);
    return { $$typeof: i, type: t2, key: s, ref: f, props: l, _owner: u.current };
  };
}, 9268: function(t, n, e) {
  t.exports = e(3177);
}, 9281: function(t, n, e) {
  let r, i, o, u;
  function a() {
  }
  function l(t10) {
    return null == t10 ? a : function() {
      return this.querySelector(t10);
    };
  }
  function s() {
    return [];
  }
  function f(t10) {
    return null == t10 ? s : function() {
      return this.querySelectorAll(t10);
    };
  }
  function c(t10) {
    return function() {
      return this.matches(t10);
    };
  }
  function h(t10) {
    return function(n10) {
      return n10.matches(t10);
    };
  }
  e.d(n, { wqt: function() {
    return n1;
  }, Fsl: function() {
    return n4;
  }, q5i: function() {
    return es;
  }, A4v: function() {
    return el;
  }, cSP: function() {
    return eU;
  }, iGh: function() {
    return eB;
  }, WvA: function() {
    return iE;
  }, l49: function() {
    return rK;
  }, Ys: function() {
    return iS;
  }, eRy: function() {
    return nW;
  } });
  var p = Array.prototype.find;
  function d() {
    return this.firstElementChild;
  }
  var v = Array.prototype.filter;
  function g() {
    return Array.from(this.children);
  }
  function y(t10) {
    return Array(t10.length);
  }
  function _(t10, n10) {
    this.ownerDocument = t10.ownerDocument, this.namespaceURI = t10.namespaceURI, this._next = null, this._parent = t10, this.__data__ = n10;
  }
  function m(t10, n10, e10, r10, i2, o2) {
    for (var u2, a2 = 0, l2 = n10.length, s2 = o2.length; a2 < s2; ++a2)
      (u2 = n10[a2]) ? (u2.__data__ = o2[a2], r10[a2] = u2) : e10[a2] = new _(t10, o2[a2]);
    for (; a2 < l2; ++a2)
      (u2 = n10[a2]) && (i2[a2] = u2);
  }
  function w(t10, n10, e10, r10, i2, o2, u2) {
    var a2, l2, s2, f2 = /* @__PURE__ */ new Map(), c2 = n10.length, h2 = o2.length, p2 = Array(c2);
    for (a2 = 0; a2 < c2; ++a2)
      (l2 = n10[a2]) && (p2[a2] = s2 = u2.call(l2, l2.__data__, a2, n10) + "", f2.has(s2) ? i2[a2] = l2 : f2.set(s2, l2));
    for (a2 = 0; a2 < h2; ++a2)
      s2 = u2.call(t10, o2[a2], a2, o2) + "", (l2 = f2.get(s2)) ? (r10[a2] = l2, l2.__data__ = o2[a2], f2.delete(s2)) : e10[a2] = new _(t10, o2[a2]);
    for (a2 = 0; a2 < c2; ++a2)
      (l2 = n10[a2]) && f2.get(p2[a2]) === l2 && (i2[a2] = l2);
  }
  function x(t10) {
    return t10.__data__;
  }
  function b(t10, n10) {
    return t10 < n10 ? -1 : t10 > n10 ? 1 : t10 >= n10 ? 0 : NaN;
  }
  _.prototype = { constructor: _, appendChild: function(t10) {
    return this._parent.insertBefore(t10, this._next);
  }, insertBefore: function(t10, n10) {
    return this._parent.insertBefore(t10, n10);
  }, querySelector: function(t10) {
    return this._parent.querySelector(t10);
  }, querySelectorAll: function(t10) {
    return this._parent.querySelectorAll(t10);
  } };
  var E = "http://www.w3.org/1999/xhtml", S = { svg: "http://www.w3.org/2000/svg", xhtml: E, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
  function N(t10) {
    var n10 = t10 += "", e10 = n10.indexOf(":");
    return e10 >= 0 && "xmlns" !== (n10 = t10.slice(0, e10)) && (t10 = t10.slice(e10 + 1)), S.hasOwnProperty(n10) ? { space: S[n10], local: t10 } : t10;
  }
  function M(t10) {
    return function() {
      this.removeAttribute(t10);
    };
  }
  function k(t10) {
    return function() {
      this.removeAttributeNS(t10.space, t10.local);
    };
  }
  function A(t10, n10) {
    return function() {
      this.setAttribute(t10, n10);
    };
  }
  function P(t10, n10) {
    return function() {
      this.setAttributeNS(t10.space, t10.local, n10);
    };
  }
  function $(t10, n10) {
    return function() {
      var e10 = n10.apply(this, arguments);
      null == e10 ? this.removeAttribute(t10) : this.setAttribute(t10, e10);
    };
  }
  function C(t10, n10) {
    return function() {
      var e10 = n10.apply(this, arguments);
      null == e10 ? this.removeAttributeNS(t10.space, t10.local) : this.setAttributeNS(t10.space, t10.local, e10);
    };
  }
  function O(t10) {
    return t10.ownerDocument && t10.ownerDocument.defaultView || t10.document && t10 || t10.defaultView;
  }
  function j(t10) {
    return function() {
      this.style.removeProperty(t10);
    };
  }
  function R(t10, n10, e10) {
    return function() {
      this.style.setProperty(t10, n10, e10);
    };
  }
  function I(t10, n10, e10) {
    return function() {
      var r10 = n10.apply(this, arguments);
      null == r10 ? this.style.removeProperty(t10) : this.style.setProperty(t10, r10, e10);
    };
  }
  function z(t10, n10) {
    return t10.style.getPropertyValue(n10) || O(t10).getComputedStyle(t10, null).getPropertyValue(n10);
  }
  function q(t10) {
    return function() {
      delete this[t10];
    };
  }
  function T(t10, n10) {
    return function() {
      this[t10] = n10;
    };
  }
  function D(t10, n10) {
    return function() {
      var e10 = n10.apply(this, arguments);
      null == e10 ? delete this[t10] : this[t10] = e10;
    };
  }
  function L(t10) {
    return t10.trim().split(/^|\s+/);
  }
  function X(t10) {
    return t10.classList || new H(t10);
  }
  function H(t10) {
    this._node = t10, this._names = L(t10.getAttribute("class") || "");
  }
  function Y(t10, n10) {
    for (var e10 = X(t10), r10 = -1, i2 = n10.length; ++r10 < i2; )
      e10.add(n10[r10]);
  }
  function U(t10, n10) {
    for (var e10 = X(t10), r10 = -1, i2 = n10.length; ++r10 < i2; )
      e10.remove(n10[r10]);
  }
  function B(t10) {
    return function() {
      Y(this, t10);
    };
  }
  function F(t10) {
    return function() {
      U(this, t10);
    };
  }
  function V(t10, n10) {
    return function() {
      (n10.apply(this, arguments) ? Y : U)(this, t10);
    };
  }
  function W() {
    this.textContent = "";
  }
  function G(t10) {
    return function() {
      this.textContent = t10;
    };
  }
  function J(t10) {
    return function() {
      var n10 = t10.apply(this, arguments);
      this.textContent = null == n10 ? "" : n10;
    };
  }
  function K() {
    this.innerHTML = "";
  }
  function Z(t10) {
    return function() {
      this.innerHTML = t10;
    };
  }
  function Q(t10) {
    return function() {
      var n10 = t10.apply(this, arguments);
      this.innerHTML = null == n10 ? "" : n10;
    };
  }
  function tt() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function tn() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function te(t10) {
    return function() {
      var n10 = this.ownerDocument, e10 = this.namespaceURI;
      return e10 === E && n10.documentElement.namespaceURI === E ? n10.createElement(t10) : n10.createElementNS(e10, t10);
    };
  }
  function tr(t10) {
    return function() {
      return this.ownerDocument.createElementNS(t10.space, t10.local);
    };
  }
  function ti(t10) {
    var n10 = N(t10);
    return (n10.local ? tr : te)(n10);
  }
  function to() {
    return null;
  }
  function tu() {
    var t10 = this.parentNode;
    t10 && t10.removeChild(this);
  }
  function ta() {
    var t10 = this.cloneNode(false), n10 = this.parentNode;
    return n10 ? n10.insertBefore(t10, this.nextSibling) : t10;
  }
  function tl() {
    var t10 = this.cloneNode(true), n10 = this.parentNode;
    return n10 ? n10.insertBefore(t10, this.nextSibling) : t10;
  }
  function ts(t10) {
    return function() {
      var n10 = this.__on;
      if (n10) {
        for (var e10, r10 = 0, i2 = -1, o2 = n10.length; r10 < o2; ++r10)
          (e10 = n10[r10], t10.type && e10.type !== t10.type || e10.name !== t10.name) ? n10[++i2] = e10 : this.removeEventListener(e10.type, e10.listener, e10.options);
        ++i2 ? n10.length = i2 : delete this.__on;
      }
    };
  }
  function tf(t10, n10, e10) {
    return function() {
      var r10, i2 = this.__on, o2 = function(t11) {
        n10.call(this, t11, this.__data__);
      };
      if (i2) {
        for (var u2 = 0, a2 = i2.length; u2 < a2; ++u2)
          if ((r10 = i2[u2]).type === t10.type && r10.name === t10.name) {
            this.removeEventListener(r10.type, r10.listener, r10.options), this.addEventListener(r10.type, r10.listener = o2, r10.options = e10), r10.value = n10;
            return;
          }
      }
      this.addEventListener(t10.type, o2, e10), r10 = { type: t10.type, name: t10.name, value: n10, listener: o2, options: e10 }, i2 ? i2.push(r10) : this.__on = [r10];
    };
  }
  function tc(t10, n10, e10) {
    var r10 = O(t10), i2 = r10.CustomEvent;
    "function" == typeof i2 ? i2 = new i2(n10, e10) : (i2 = r10.document.createEvent("Event"), e10 ? (i2.initEvent(n10, e10.bubbles, e10.cancelable), i2.detail = e10.detail) : i2.initEvent(n10, false, false)), t10.dispatchEvent(i2);
  }
  function th(t10, n10) {
    return function() {
      return tc(this, t10, n10);
    };
  }
  function tp(t10, n10) {
    return function() {
      return tc(this, t10, n10.apply(this, arguments));
    };
  }
  H.prototype = { add: function(t10) {
    0 > this._names.indexOf(t10) && (this._names.push(t10), this._node.setAttribute("class", this._names.join(" ")));
  }, remove: function(t10) {
    var n10 = this._names.indexOf(t10);
    n10 >= 0 && (this._names.splice(n10, 1), this._node.setAttribute("class", this._names.join(" ")));
  }, contains: function(t10) {
    return this._names.indexOf(t10) >= 0;
  } };
  var td = [null];
  function tv(t10, n10) {
    this._groups = t10, this._parents = n10;
  }
  function tg() {
    return new tv([[document.documentElement]], td);
  }
  tv.prototype = tg.prototype = { constructor: tv, select: function(t10) {
    "function" != typeof t10 && (t10 = l(t10));
    for (var n10 = this._groups, e10 = n10.length, r10 = Array(e10), i2 = 0; i2 < e10; ++i2)
      for (var o2, u2, a2 = n10[i2], s2 = a2.length, f2 = r10[i2] = Array(s2), c2 = 0; c2 < s2; ++c2)
        (o2 = a2[c2]) && (u2 = t10.call(o2, o2.__data__, c2, a2)) && ("__data__" in o2 && (u2.__data__ = o2.__data__), f2[c2] = u2);
    return new tv(r10, this._parents);
  }, selectAll: function(t10) {
    if ("function" == typeof t10) {
      var n10;
      n10 = t10, t10 = function() {
        var t11;
        return t11 = n10.apply(this, arguments), null == t11 ? [] : Array.isArray(t11) ? t11 : Array.from(t11);
      };
    } else
      t10 = f(t10);
    for (var e10 = this._groups, r10 = e10.length, i2 = [], o2 = [], u2 = 0; u2 < r10; ++u2)
      for (var a2, l2 = e10[u2], s2 = l2.length, c2 = 0; c2 < s2; ++c2)
        (a2 = l2[c2]) && (i2.push(t10.call(a2, a2.__data__, c2, l2)), o2.push(a2));
    return new tv(i2, o2);
  }, selectChild: function(t10) {
    var n10;
    return this.select(null == t10 ? d : (n10 = "function" == typeof t10 ? t10 : h(t10), function() {
      return p.call(this.children, n10);
    }));
  }, selectChildren: function(t10) {
    var n10;
    return this.selectAll(null == t10 ? g : (n10 = "function" == typeof t10 ? t10 : h(t10), function() {
      return v.call(this.children, n10);
    }));
  }, filter: function(t10) {
    "function" != typeof t10 && (t10 = c(t10));
    for (var n10 = this._groups, e10 = n10.length, r10 = Array(e10), i2 = 0; i2 < e10; ++i2)
      for (var o2, u2 = n10[i2], a2 = u2.length, l2 = r10[i2] = [], s2 = 0; s2 < a2; ++s2)
        (o2 = u2[s2]) && t10.call(o2, o2.__data__, s2, u2) && l2.push(o2);
    return new tv(r10, this._parents);
  }, data: function(t10, n10) {
    if (!arguments.length)
      return Array.from(this, x);
    var e10 = n10 ? w : m, r10 = this._parents, i2 = this._groups;
    "function" != typeof t10 && (_2 = t10, t10 = function() {
      return _2;
    });
    for (var o2 = i2.length, u2 = Array(o2), a2 = Array(o2), l2 = Array(o2), s2 = 0; s2 < o2; ++s2) {
      var f2 = r10[s2], c2 = i2[s2], h2 = c2.length, p2 = "object" == typeof (y2 = t10.call(f2, f2 && f2.__data__, s2, r10)) && "length" in y2 ? y2 : Array.from(y2), d2 = p2.length, v2 = a2[s2] = Array(d2), g2 = u2[s2] = Array(d2);
      e10(f2, c2, v2, g2, l2[s2] = Array(h2), p2, n10);
      for (var y2, _2, b2, E2, S2 = 0, N2 = 0; S2 < d2; ++S2)
        if (b2 = v2[S2]) {
          for (S2 >= N2 && (N2 = S2 + 1); !(E2 = g2[N2]) && ++N2 < d2; )
            ;
          b2._next = E2 || null;
        }
    }
    return (u2 = new tv(u2, r10))._enter = a2, u2._exit = l2, u2;
  }, enter: function() {
    return new tv(this._enter || this._groups.map(y), this._parents);
  }, exit: function() {
    return new tv(this._exit || this._groups.map(y), this._parents);
  }, join: function(t10, n10, e10) {
    var r10 = this.enter(), i2 = this, o2 = this.exit();
    return "function" == typeof t10 ? (r10 = t10(r10)) && (r10 = r10.selection()) : r10 = r10.append(t10 + ""), null != n10 && (i2 = n10(i2)) && (i2 = i2.selection()), null == e10 ? o2.remove() : e10(o2), r10 && i2 ? r10.merge(i2).order() : i2;
  }, merge: function(t10) {
    for (var n10 = t10.selection ? t10.selection() : t10, e10 = this._groups, r10 = n10._groups, i2 = e10.length, o2 = r10.length, u2 = Math.min(i2, o2), a2 = Array(i2), l2 = 0; l2 < u2; ++l2)
      for (var s2, f2 = e10[l2], c2 = r10[l2], h2 = f2.length, p2 = a2[l2] = Array(h2), d2 = 0; d2 < h2; ++d2)
        (s2 = f2[d2] || c2[d2]) && (p2[d2] = s2);
    for (; l2 < i2; ++l2)
      a2[l2] = e10[l2];
    return new tv(a2, this._parents);
  }, selection: function() {
    return this;
  }, order: function() {
    for (var t10 = this._groups, n10 = -1, e10 = t10.length; ++n10 < e10; )
      for (var r10, i2 = t10[n10], o2 = i2.length - 1, u2 = i2[o2]; --o2 >= 0; )
        (r10 = i2[o2]) && (u2 && 4 ^ r10.compareDocumentPosition(u2) && u2.parentNode.insertBefore(r10, u2), u2 = r10);
    return this;
  }, sort: function(t10) {
    function n10(n11, e11) {
      return n11 && e11 ? t10(n11.__data__, e11.__data__) : !n11 - !e11;
    }
    t10 || (t10 = b);
    for (var e10 = this._groups, r10 = e10.length, i2 = Array(r10), o2 = 0; o2 < r10; ++o2) {
      for (var u2, a2 = e10[o2], l2 = a2.length, s2 = i2[o2] = Array(l2), f2 = 0; f2 < l2; ++f2)
        (u2 = a2[f2]) && (s2[f2] = u2);
      s2.sort(n10);
    }
    return new tv(i2, this._parents).order();
  }, call: function() {
    var t10 = arguments[0];
    return arguments[0] = this, t10.apply(null, arguments), this;
  }, nodes: function() {
    return Array.from(this);
  }, node: function() {
    for (var t10 = this._groups, n10 = 0, e10 = t10.length; n10 < e10; ++n10)
      for (var r10 = t10[n10], i2 = 0, o2 = r10.length; i2 < o2; ++i2) {
        var u2 = r10[i2];
        if (u2)
          return u2;
      }
    return null;
  }, size: function() {
    let t10 = 0;
    for (let n10 of this)
      ++t10;
    return t10;
  }, empty: function() {
    return !this.node();
  }, each: function(t10) {
    for (var n10 = this._groups, e10 = 0, r10 = n10.length; e10 < r10; ++e10)
      for (var i2, o2 = n10[e10], u2 = 0, a2 = o2.length; u2 < a2; ++u2)
        (i2 = o2[u2]) && t10.call(i2, i2.__data__, u2, o2);
    return this;
  }, attr: function(t10, n10) {
    var e10 = N(t10);
    if (arguments.length < 2) {
      var r10 = this.node();
      return e10.local ? r10.getAttributeNS(e10.space, e10.local) : r10.getAttribute(e10);
    }
    return this.each((null == n10 ? e10.local ? k : M : "function" == typeof n10 ? e10.local ? C : $ : e10.local ? P : A)(e10, n10));
  }, style: function(t10, n10, e10) {
    return arguments.length > 1 ? this.each((null == n10 ? j : "function" == typeof n10 ? I : R)(t10, n10, null == e10 ? "" : e10)) : z(this.node(), t10);
  }, property: function(t10, n10) {
    return arguments.length > 1 ? this.each((null == n10 ? q : "function" == typeof n10 ? D : T)(t10, n10)) : this.node()[t10];
  }, classed: function(t10, n10) {
    var e10 = L(t10 + "");
    if (arguments.length < 2) {
      for (var r10 = X(this.node()), i2 = -1, o2 = e10.length; ++i2 < o2; )
        if (!r10.contains(e10[i2]))
          return false;
      return true;
    }
    return this.each(("function" == typeof n10 ? V : n10 ? B : F)(e10, n10));
  }, text: function(t10) {
    return arguments.length ? this.each(null == t10 ? W : ("function" == typeof t10 ? J : G)(t10)) : this.node().textContent;
  }, html: function(t10) {
    return arguments.length ? this.each(null == t10 ? K : ("function" == typeof t10 ? Q : Z)(t10)) : this.node().innerHTML;
  }, raise: function() {
    return this.each(tt);
  }, lower: function() {
    return this.each(tn);
  }, append: function(t10) {
    var n10 = "function" == typeof t10 ? t10 : ti(t10);
    return this.select(function() {
      return this.appendChild(n10.apply(this, arguments));
    });
  }, insert: function(t10, n10) {
    var e10 = "function" == typeof t10 ? t10 : ti(t10), r10 = null == n10 ? to : "function" == typeof n10 ? n10 : l(n10);
    return this.select(function() {
      return this.insertBefore(e10.apply(this, arguments), r10.apply(this, arguments) || null);
    });
  }, remove: function() {
    return this.each(tu);
  }, clone: function(t10) {
    return this.select(t10 ? tl : ta);
  }, datum: function(t10) {
    return arguments.length ? this.property("__data__", t10) : this.node().__data__;
  }, on: function(t10, n10, e10) {
    var r10, i2, o2 = (t10 + "").trim().split(/^|\s+/).map(function(t11) {
      var n11 = "", e11 = t11.indexOf(".");
      return e11 >= 0 && (n11 = t11.slice(e11 + 1), t11 = t11.slice(0, e11)), { type: t11, name: n11 };
    }), u2 = o2.length;
    if (arguments.length < 2) {
      var a2 = this.node().__on;
      if (a2) {
        for (var l2, s2 = 0, f2 = a2.length; s2 < f2; ++s2)
          for (r10 = 0, l2 = a2[s2]; r10 < u2; ++r10)
            if ((i2 = o2[r10]).type === l2.type && i2.name === l2.name)
              return l2.value;
      }
      return;
    }
    for (r10 = 0, a2 = n10 ? tf : ts; r10 < u2; ++r10)
      this.each(a2(o2[r10], n10, e10));
    return this;
  }, dispatch: function(t10, n10) {
    return this.each(("function" == typeof n10 ? tp : th)(t10, n10));
  }, [Symbol.iterator]: function* () {
    for (var t10 = this._groups, n10 = 0, e10 = t10.length; n10 < e10; ++n10)
      for (var r10, i2 = t10[n10], o2 = 0, u2 = i2.length; o2 < u2; ++o2)
        (r10 = i2[o2]) && (yield r10);
  } };
  var ty = { value: () => {
  } };
  function t_() {
    for (var t10, n10 = 0, e10 = arguments.length, r10 = {}; n10 < e10; ++n10) {
      if (!(t10 = arguments[n10] + "") || t10 in r10 || /[\s.]/.test(t10))
        throw Error("illegal type: " + t10);
      r10[t10] = [];
    }
    return new tm(r10);
  }
  function tm(t10) {
    this._ = t10;
  }
  function tw(t10, n10, e10) {
    for (var r10 = 0, i2 = t10.length; r10 < i2; ++r10)
      if (t10[r10].name === n10) {
        t10[r10] = ty, t10 = t10.slice(0, r10).concat(t10.slice(r10 + 1));
        break;
      }
    return null != e10 && t10.push({ name: n10, value: e10 }), t10;
  }
  tm.prototype = t_.prototype = { constructor: tm, on: function(t10, n10) {
    var e10, r10 = this._, i2 = (t10 + "").trim().split(/^|\s+/).map(function(t11) {
      var n11 = "", e11 = t11.indexOf(".");
      if (e11 >= 0 && (n11 = t11.slice(e11 + 1), t11 = t11.slice(0, e11)), t11 && !r10.hasOwnProperty(t11))
        throw Error("unknown type: " + t11);
      return { type: t11, name: n11 };
    }), o2 = -1, u2 = i2.length;
    if (arguments.length < 2) {
      for (; ++o2 < u2; )
        if ((e10 = (t10 = i2[o2]).type) && (e10 = function(t11, n11) {
          for (var e11, r11 = 0, i3 = t11.length; r11 < i3; ++r11)
            if ((e11 = t11[r11]).name === n11)
              return e11.value;
        }(r10[e10], t10.name)))
          return e10;
      return;
    }
    if (null != n10 && "function" != typeof n10)
      throw Error("invalid callback: " + n10);
    for (; ++o2 < u2; )
      if (e10 = (t10 = i2[o2]).type)
        r10[e10] = tw(r10[e10], t10.name, n10);
      else if (null == n10)
        for (e10 in r10)
          r10[e10] = tw(r10[e10], t10.name, null);
    return this;
  }, copy: function() {
    var t10 = {}, n10 = this._;
    for (var e10 in n10)
      t10[e10] = n10[e10].slice();
    return new tm(t10);
  }, call: function(t10, n10) {
    if ((e10 = arguments.length - 2) > 0)
      for (var e10, r10, i2 = Array(e10), o2 = 0; o2 < e10; ++o2)
        i2[o2] = arguments[o2 + 2];
    if (!this._.hasOwnProperty(t10))
      throw Error("unknown type: " + t10);
    for (r10 = this._[t10], o2 = 0, e10 = r10.length; o2 < e10; ++o2)
      r10[o2].value.apply(n10, i2);
  }, apply: function(t10, n10, e10) {
    if (!this._.hasOwnProperty(t10))
      throw Error("unknown type: " + t10);
    for (var r10 = this._[t10], i2 = 0, o2 = r10.length; i2 < o2; ++i2)
      r10[i2].value.apply(n10, e10);
  } };
  var tx, tb, tE = 0, tS = 0, tN = 0, tM = 0, tk = 0, tA = 0, tP = "object" == typeof performance && performance.now ? performance : Date, t$ = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t10) {
    setTimeout(t10, 17);
  };
  function tC() {
    return tk || (t$(tO), tk = tP.now() + tA);
  }
  function tO() {
    tk = 0;
  }
  function tj() {
    this._call = this._time = this._next = null;
  }
  function tR(t10, n10, e10) {
    var r10 = new tj();
    return r10.restart(t10, n10, e10), r10;
  }
  function tI() {
    tk = (tM = tP.now()) + tA, tE = tS = 0;
    try {
      !function() {
        tC(), ++tE;
        for (var t10, n10 = tx; n10; )
          (t10 = tk - n10._time) >= 0 && n10._call.call(void 0, t10), n10 = n10._next;
        --tE;
      }();
    } finally {
      tE = 0, function() {
        for (var t10, n10, e10 = tx, r10 = 1 / 0; e10; )
          e10._call ? (r10 > e10._time && (r10 = e10._time), t10 = e10, e10 = e10._next) : (n10 = e10._next, e10._next = null, e10 = t10 ? t10._next = n10 : tx = n10);
        tb = t10, tq(r10);
      }(), tk = 0;
    }
  }
  function tz() {
    var t10 = tP.now(), n10 = t10 - tM;
    n10 > 1e3 && (tA -= n10, tM = t10);
  }
  function tq(t10) {
    !tE && (tS && (tS = clearTimeout(tS)), t10 - tk > 24 ? (t10 < 1 / 0 && (tS = setTimeout(tI, t10 - tP.now() - tA)), tN && (tN = clearInterval(tN))) : (tN || (tM = tP.now(), tN = setInterval(tz, 1e3)), tE = 1, t$(tI)));
  }
  function tT(t10, n10, e10) {
    var r10 = new tj();
    return n10 = null == n10 ? 0 : +n10, r10.restart((e11) => {
      r10.stop(), t10(e11 + n10);
    }, n10, e10), r10;
  }
  tj.prototype = tR.prototype = { constructor: tj, restart: function(t10, n10, e10) {
    if ("function" != typeof t10)
      throw TypeError("callback is not a function");
    e10 = (null == e10 ? tC() : +e10) + (null == n10 ? 0 : +n10), this._next || tb === this || (tb ? tb._next = this : tx = this, tb = this), this._call = t10, this._time = e10, tq();
  }, stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, tq());
  } };
  var tD = t_("start", "end", "cancel", "interrupt"), tL = [];
  function tX(t10, n10, e10, r10, i2, o2) {
    var u2 = t10.__transition;
    if (u2) {
      if (e10 in u2)
        return;
    } else
      t10.__transition = {};
    !function(t11, n11, e11) {
      var r11, i3 = t11.__transition;
      function o3(l2) {
        var s2, f2, c2, h2;
        if (1 !== e11.state)
          return a2();
        for (s2 in i3)
          if ((h2 = i3[s2]).name === e11.name) {
            if (3 === h2.state)
              return tT(o3);
            4 === h2.state ? (h2.state = 6, h2.timer.stop(), h2.on.call("interrupt", t11, t11.__data__, h2.index, h2.group), delete i3[s2]) : +s2 < n11 && (h2.state = 6, h2.timer.stop(), h2.on.call("cancel", t11, t11.__data__, h2.index, h2.group), delete i3[s2]);
          }
        if (tT(function() {
          3 === e11.state && (e11.state = 4, e11.timer.restart(u3, e11.delay, e11.time), u3(l2));
        }), e11.state = 2, e11.on.call("start", t11, t11.__data__, e11.index, e11.group), 2 === e11.state) {
          for (s2 = 0, e11.state = 3, r11 = Array(c2 = e11.tween.length), f2 = -1; s2 < c2; ++s2)
            (h2 = e11.tween[s2].value.call(t11, t11.__data__, e11.index, e11.group)) && (r11[++f2] = h2);
          r11.length = f2 + 1;
        }
      }
      function u3(n12) {
        for (var i4 = n12 < e11.duration ? e11.ease.call(null, n12 / e11.duration) : (e11.timer.restart(a2), e11.state = 5, 1), o4 = -1, u4 = r11.length; ++o4 < u4; )
          r11[o4].call(t11, i4);
        5 === e11.state && (e11.on.call("end", t11, t11.__data__, e11.index, e11.group), a2());
      }
      function a2() {
        for (var r12 in e11.state = 6, e11.timer.stop(), delete i3[n11], i3)
          return;
        delete t11.__transition;
      }
      i3[n11] = e11, e11.timer = tR(function(t12) {
        e11.state = 1, e11.timer.restart(o3, e11.delay, e11.time), e11.delay <= t12 && o3(t12 - e11.delay);
      }, 0, e11.time);
    }(t10, e10, { name: n10, index: r10, group: i2, on: tD, tween: tL, time: o2.time, delay: o2.delay, duration: o2.duration, ease: o2.ease, timer: null, state: 0 });
  }
  function tH(t10, n10) {
    var e10 = tU(t10, n10);
    if (e10.state > 0)
      throw Error("too late; already scheduled");
    return e10;
  }
  function tY(t10, n10) {
    var e10 = tU(t10, n10);
    if (e10.state > 3)
      throw Error("too late; already running");
    return e10;
  }
  function tU(t10, n10) {
    var e10 = t10.__transition;
    if (!e10 || !(e10 = e10[n10]))
      throw Error("transition not found");
    return e10;
  }
  function tB(t10, n10) {
    return t10 = +t10, n10 = +n10, function(e10) {
      return t10 * (1 - e10) + n10 * e10;
    };
  }
  var tF = 180 / Math.PI, tV = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
  function tW(t10, n10, e10, r10, i2, o2) {
    var u2, a2, l2;
    return (u2 = Math.sqrt(t10 * t10 + n10 * n10)) && (t10 /= u2, n10 /= u2), (l2 = t10 * e10 + n10 * r10) && (e10 -= t10 * l2, r10 -= n10 * l2), (a2 = Math.sqrt(e10 * e10 + r10 * r10)) && (e10 /= a2, r10 /= a2, l2 /= a2), t10 * r10 < n10 * e10 && (t10 = -t10, n10 = -n10, l2 = -l2, u2 = -u2), { translateX: i2, translateY: o2, rotate: Math.atan2(n10, t10) * tF, skewX: Math.atan(l2) * tF, scaleX: u2, scaleY: a2 };
  }
  function tG(t10, n10, e10, r10) {
    function i2(t11) {
      return t11.length ? t11.pop() + " " : "";
    }
    return function(o2, u2) {
      var a2, l2, s2, f2, c2 = [], h2 = [];
      return o2 = t10(o2), u2 = t10(u2), !function(t11, r11, i3, o3, u3, a3) {
        if (t11 !== i3 || r11 !== o3) {
          var l3 = u3.push("translate(", null, n10, null, e10);
          a3.push({ i: l3 - 4, x: tB(t11, i3) }, { i: l3 - 2, x: tB(r11, o3) });
        } else
          (i3 || o3) && u3.push("translate(" + i3 + n10 + o3 + e10);
      }(o2.translateX, o2.translateY, u2.translateX, u2.translateY, c2, h2), (a2 = o2.rotate) !== (l2 = u2.rotate) ? (a2 - l2 > 180 ? l2 += 360 : l2 - a2 > 180 && (a2 += 360), h2.push({ i: c2.push(i2(c2) + "rotate(", null, r10) - 2, x: tB(a2, l2) })) : l2 && c2.push(i2(c2) + "rotate(" + l2 + r10), (s2 = o2.skewX) !== (f2 = u2.skewX) ? h2.push({ i: c2.push(i2(c2) + "skewX(", null, r10) - 2, x: tB(s2, f2) }) : f2 && c2.push(i2(c2) + "skewX(" + f2 + r10), !function(t11, n11, e11, r11, o3, u3) {
        if (t11 !== e11 || n11 !== r11) {
          var a3 = o3.push(i2(o3) + "scale(", null, ",", null, ")");
          u3.push({ i: a3 - 4, x: tB(t11, e11) }, { i: a3 - 2, x: tB(n11, r11) });
        } else
          (1 !== e11 || 1 !== r11) && o3.push(i2(o3) + "scale(" + e11 + "," + r11 + ")");
      }(o2.scaleX, o2.scaleY, u2.scaleX, u2.scaleY, c2, h2), o2 = u2 = null, function(t11) {
        for (var n11, e11 = -1, r11 = h2.length; ++e11 < r11; )
          c2[(n11 = h2[e11]).i] = n11.x(t11);
        return c2.join("");
      };
    };
  }
  var tJ = tG(function(t10) {
    let n10 = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t10 + "");
    return n10.isIdentity ? tV : tW(n10.a, n10.b, n10.c, n10.d, n10.e, n10.f);
  }, "px, ", "px)", "deg)"), tK = tG(function(t10) {
    return null == t10 ? tV : (eF || (eF = document.createElementNS("http://www.w3.org/2000/svg", "g")), eF.setAttribute("transform", t10), t10 = eF.transform.baseVal.consolidate()) ? tW((t10 = t10.matrix).a, t10.b, t10.c, t10.d, t10.e, t10.f) : tV;
  }, ", ", ")", ")");
  function tZ(t10, n10) {
    var e10, r10;
    return function() {
      var i2 = tY(this, t10), o2 = i2.tween;
      if (o2 !== e10) {
        r10 = e10 = o2;
        for (var u2 = 0, a2 = r10.length; u2 < a2; ++u2)
          if (r10[u2].name === n10) {
            (r10 = r10.slice()).splice(u2, 1);
            break;
          }
      }
      i2.tween = r10;
    };
  }
  function tQ(t10, n10, e10) {
    var r10, i2;
    if ("function" != typeof e10)
      throw Error();
    return function() {
      var o2 = tY(this, t10), u2 = o2.tween;
      if (u2 !== r10) {
        i2 = (r10 = u2).slice();
        for (var a2 = { name: n10, value: e10 }, l2 = 0, s2 = i2.length; l2 < s2; ++l2)
          if (i2[l2].name === n10) {
            i2[l2] = a2;
            break;
          }
        l2 === s2 && i2.push(a2);
      }
      o2.tween = i2;
    };
  }
  function t0(t10, n10, e10) {
    var r10 = t10._id;
    return t10.each(function() {
      var t11 = tY(this, r10);
      (t11.value || (t11.value = {}))[n10] = e10.apply(this, arguments);
    }), function(t11) {
      return tU(t11, r10).value[n10];
    };
  }
  function t1(t10, n10, e10) {
    t10.prototype = n10.prototype = e10, e10.constructor = t10;
  }
  function t2(t10, n10) {
    var e10 = Object.create(t10.prototype);
    for (var r10 in n10)
      e10[r10] = n10[r10];
    return e10;
  }
  function t6() {
  }
  var t3 = "\\s*([+-]?\\d+)\\s*", t5 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", t4 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", t7 = /^#([0-9a-f]{3,8})$/, t8 = RegExp(`^rgb\\(${t3},${t3},${t3}\\)$`), t9 = RegExp(`^rgb\\(${t4},${t4},${t4}\\)$`), nt = RegExp(`^rgba\\(${t3},${t3},${t3},${t5}\\)$`), nn = RegExp(`^rgba\\(${t4},${t4},${t4},${t5}\\)$`), ne = RegExp(`^hsl\\(${t5},${t4},${t4}\\)$`), nr = RegExp(`^hsla\\(${t5},${t4},${t4},${t5}\\)$`), ni = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  function no() {
    return this.rgb().formatHex();
  }
  function nu() {
    return this.rgb().formatRgb();
  }
  function na(t10) {
    var n10, e10;
    return t10 = (t10 + "").trim().toLowerCase(), (n10 = t7.exec(t10)) ? (e10 = n10[1].length, n10 = parseInt(n10[1], 16), 6 === e10 ? nl(n10) : 3 === e10 ? new nc(n10 >> 8 & 15 | n10 >> 4 & 240, n10 >> 4 & 15 | 240 & n10, (15 & n10) << 4 | 15 & n10, 1) : 8 === e10 ? ns(n10 >> 24 & 255, n10 >> 16 & 255, n10 >> 8 & 255, (255 & n10) / 255) : 4 === e10 ? ns(n10 >> 12 & 15 | n10 >> 8 & 240, n10 >> 8 & 15 | n10 >> 4 & 240, n10 >> 4 & 15 | 240 & n10, ((15 & n10) << 4 | 15 & n10) / 255) : null) : (n10 = t8.exec(t10)) ? new nc(n10[1], n10[2], n10[3], 1) : (n10 = t9.exec(t10)) ? new nc(255 * n10[1] / 100, 255 * n10[2] / 100, 255 * n10[3] / 100, 1) : (n10 = nt.exec(t10)) ? ns(n10[1], n10[2], n10[3], n10[4]) : (n10 = nn.exec(t10)) ? ns(255 * n10[1] / 100, 255 * n10[2] / 100, 255 * n10[3] / 100, n10[4]) : (n10 = ne.exec(t10)) ? ny(n10[1], n10[2] / 100, n10[3] / 100, 1) : (n10 = nr.exec(t10)) ? ny(n10[1], n10[2] / 100, n10[3] / 100, n10[4]) : ni.hasOwnProperty(t10) ? nl(ni[t10]) : "transparent" === t10 ? new nc(NaN, NaN, NaN, 0) : null;
  }
  function nl(t10) {
    return new nc(t10 >> 16 & 255, t10 >> 8 & 255, 255 & t10, 1);
  }
  function ns(t10, n10, e10, r10) {
    return r10 <= 0 && (t10 = n10 = e10 = NaN), new nc(t10, n10, e10, r10);
  }
  function nf(t10, n10, e10, r10) {
    var i2;
    return 1 == arguments.length ? ((i2 = t10) instanceof t6 || (i2 = na(i2)), i2) ? (i2 = i2.rgb(), new nc(i2.r, i2.g, i2.b, i2.opacity)) : new nc() : new nc(t10, n10, e10, null == r10 ? 1 : r10);
  }
  function nc(t10, n10, e10, r10) {
    this.r = +t10, this.g = +n10, this.b = +e10, this.opacity = +r10;
  }
  function nh() {
    return `#${ng(this.r)}${ng(this.g)}${ng(this.b)}`;
  }
  function np() {
    let t10 = nd(this.opacity);
    return `${1 === t10 ? "rgb(" : "rgba("}${nv(this.r)}, ${nv(this.g)}, ${nv(this.b)}${1 === t10 ? ")" : `, ${t10})`}`;
  }
  function nd(t10) {
    return isNaN(t10) ? 1 : Math.max(0, Math.min(1, t10));
  }
  function nv(t10) {
    return Math.max(0, Math.min(255, Math.round(t10) || 0));
  }
  function ng(t10) {
    return ((t10 = nv(t10)) < 16 ? "0" : "") + t10.toString(16);
  }
  function ny(t10, n10, e10, r10) {
    return r10 <= 0 ? t10 = n10 = e10 = NaN : e10 <= 0 || e10 >= 1 ? t10 = n10 = NaN : n10 <= 0 && (t10 = NaN), new nm(t10, n10, e10, r10);
  }
  function n_(t10) {
    if (t10 instanceof nm)
      return new nm(t10.h, t10.s, t10.l, t10.opacity);
    if (t10 instanceof t6 || (t10 = na(t10)), !t10)
      return new nm();
    if (t10 instanceof nm)
      return t10;
    var n10 = (t10 = t10.rgb()).r / 255, e10 = t10.g / 255, r10 = t10.b / 255, i2 = Math.min(n10, e10, r10), o2 = Math.max(n10, e10, r10), u2 = NaN, a2 = o2 - i2, l2 = (o2 + i2) / 2;
    return a2 ? (u2 = n10 === o2 ? (e10 - r10) / a2 + (e10 < r10) * 6 : e10 === o2 ? (r10 - n10) / a2 + 2 : (n10 - e10) / a2 + 4, a2 /= l2 < 0.5 ? o2 + i2 : 2 - o2 - i2, u2 *= 60) : a2 = l2 > 0 && l2 < 1 ? 0 : u2, new nm(u2, a2, l2, t10.opacity);
  }
  function nm(t10, n10, e10, r10) {
    this.h = +t10, this.s = +n10, this.l = +e10, this.opacity = +r10;
  }
  function nw(t10) {
    return (t10 = (t10 || 0) % 360) < 0 ? t10 + 360 : t10;
  }
  function nx(t10) {
    return Math.max(0, Math.min(1, t10 || 0));
  }
  function nb(t10, n10, e10) {
    return (t10 < 60 ? n10 + (e10 - n10) * t10 / 60 : t10 < 180 ? e10 : t10 < 240 ? n10 + (e10 - n10) * (240 - t10) / 60 : n10) * 255;
  }
  function nE(t10, n10, e10, r10, i2) {
    var o2 = t10 * t10, u2 = o2 * t10;
    return ((1 - 3 * t10 + 3 * o2 - u2) * n10 + (4 - 6 * o2 + 3 * u2) * e10 + (1 + 3 * t10 + 3 * o2 - 3 * u2) * r10 + u2 * i2) / 6;
  }
  t1(t6, na, { copy(t10) {
    return Object.assign(new this.constructor(), this, t10);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: no, formatHex: no, formatHex8: function() {
    return this.rgb().formatHex8();
  }, formatHsl: function() {
    return n_(this).formatHsl();
  }, formatRgb: nu, toString: nu }), t1(nc, nf, t2(t6, { brighter(t10) {
    return t10 = null == t10 ? 1.4285714285714286 : Math.pow(1.4285714285714286, t10), new nc(this.r * t10, this.g * t10, this.b * t10, this.opacity);
  }, darker(t10) {
    return t10 = null == t10 ? 0.7 : Math.pow(0.7, t10), new nc(this.r * t10, this.g * t10, this.b * t10, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new nc(nv(this.r), nv(this.g), nv(this.b), nd(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: nh, formatHex: nh, formatHex8: function() {
    return `#${ng(this.r)}${ng(this.g)}${ng(this.b)}${ng((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }, formatRgb: np, toString: np })), t1(nm, function(t10, n10, e10, r10) {
    return 1 == arguments.length ? n_(t10) : new nm(t10, n10, e10, null == r10 ? 1 : r10);
  }, t2(t6, { brighter(t10) {
    return t10 = null == t10 ? 1.4285714285714286 : Math.pow(1.4285714285714286, t10), new nm(this.h, this.s, this.l * t10, this.opacity);
  }, darker(t10) {
    return t10 = null == t10 ? 0.7 : Math.pow(0.7, t10), new nm(this.h, this.s, this.l * t10, this.opacity);
  }, rgb() {
    var t10 = this.h % 360 + (this.h < 0) * 360, n10 = isNaN(t10) || isNaN(this.s) ? 0 : this.s, e10 = this.l, r10 = e10 + (e10 < 0.5 ? e10 : 1 - e10) * n10, i2 = 2 * e10 - r10;
    return new nc(nb(t10 >= 240 ? t10 - 240 : t10 + 120, i2, r10), nb(t10, i2, r10), nb(t10 < 120 ? t10 + 240 : t10 - 120, i2, r10), this.opacity);
  }, clamp() {
    return new nm(nw(this.h), nx(this.s), nx(this.l), nd(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let t10 = nd(this.opacity);
    return `${1 === t10 ? "hsl(" : "hsla("}${nw(this.h)}, ${100 * nx(this.s)}%, ${100 * nx(this.l)}%${1 === t10 ? ")" : `, ${t10})`}`;
  } }));
  var nS = (t10) => () => t10;
  function nN(t10, n10) {
    var e10 = n10 - t10;
    return e10 ? function(n11) {
      return t10 + n11 * e10;
    } : nS(isNaN(t10) ? n10 : t10);
  }
  var nM = function t10(n10) {
    var e10, r10 = 1 == (e10 = +(e10 = n10)) ? nN : function(t11, n11) {
      var r11, i3, o2;
      return n11 - t11 ? (r11 = t11, i3 = n11, r11 = Math.pow(r11, o2 = e10), i3 = Math.pow(i3, o2) - r11, o2 = 1 / o2, function(t12) {
        return Math.pow(r11 + t12 * i3, o2);
      }) : nS(isNaN(t11) ? n11 : t11);
    };
    function i2(t11, n11) {
      var e11 = r10((t11 = nf(t11)).r, (n11 = nf(n11)).r), i3 = r10(t11.g, n11.g), o2 = r10(t11.b, n11.b), u2 = nN(t11.opacity, n11.opacity);
      return function(n12) {
        return t11.r = e11(n12), t11.g = i3(n12), t11.b = o2(n12), t11.opacity = u2(n12), t11 + "";
      };
    }
    return i2.gamma = t10, i2;
  }(1);
  function nk(t10) {
    return function(n10) {
      var e10, r10, i2 = n10.length, o2 = Array(i2), u2 = Array(i2), a2 = Array(i2);
      for (e10 = 0; e10 < i2; ++e10)
        r10 = nf(n10[e10]), o2[e10] = r10.r || 0, u2[e10] = r10.g || 0, a2[e10] = r10.b || 0;
      return o2 = t10(o2), u2 = t10(u2), a2 = t10(a2), r10.opacity = 1, function(t11) {
        return r10.r = o2(t11), r10.g = u2(t11), r10.b = a2(t11), r10 + "";
      };
    };
  }
  nk(function(t10) {
    var n10 = t10.length - 1;
    return function(e10) {
      var r10 = e10 <= 0 ? e10 = 0 : e10 >= 1 ? (e10 = 1, n10 - 1) : Math.floor(e10 * n10), i2 = t10[r10], o2 = t10[r10 + 1], u2 = r10 > 0 ? t10[r10 - 1] : 2 * i2 - o2, a2 = r10 < n10 - 1 ? t10[r10 + 2] : 2 * o2 - i2;
      return nE((e10 - r10 / n10) * n10, u2, i2, o2, a2);
    };
  }), nk(function(t10) {
    var n10 = t10.length;
    return function(e10) {
      var r10 = Math.floor(((e10 %= 1) < 0 ? ++e10 : e10) * n10), i2 = t10[(r10 + n10 - 1) % n10], o2 = t10[r10 % n10], u2 = t10[(r10 + 1) % n10], a2 = t10[(r10 + 2) % n10];
      return nE((e10 - r10 / n10) * n10, i2, o2, u2, a2);
    };
  });
  var nA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nP = RegExp(nA.source, "g");
  function n$(t10, n10) {
    var e10, r10, i2, o2, u2, a2 = nA.lastIndex = nP.lastIndex = 0, l2 = -1, s2 = [], f2 = [];
    for (t10 += "", n10 += ""; (i2 = nA.exec(t10)) && (o2 = nP.exec(n10)); )
      (u2 = o2.index) > a2 && (u2 = n10.slice(a2, u2), s2[l2] ? s2[l2] += u2 : s2[++l2] = u2), (i2 = i2[0]) === (o2 = o2[0]) ? s2[l2] ? s2[l2] += o2 : s2[++l2] = o2 : (s2[++l2] = null, f2.push({ i: l2, x: tB(i2, o2) })), a2 = nP.lastIndex;
    return a2 < n10.length && (u2 = n10.slice(a2), s2[l2] ? s2[l2] += u2 : s2[++l2] = u2), s2.length < 2 ? f2[0] ? (e10 = f2[0].x, function(t11) {
      return e10(t11) + "";
    }) : (r10 = n10, function() {
      return r10;
    }) : (n10 = f2.length, function(t11) {
      for (var e11, r11 = 0; r11 < n10; ++r11)
        s2[(e11 = f2[r11]).i] = e11.x(t11);
      return s2.join("");
    });
  }
  function nC(t10, n10) {
    var e10;
    return ("number" == typeof n10 ? tB : n10 instanceof na ? nM : (e10 = na(n10)) ? (n10 = e10, nM) : n$)(t10, n10);
  }
  function nO(t10) {
    return function() {
      this.removeAttribute(t10);
    };
  }
  function nj(t10) {
    return function() {
      this.removeAttributeNS(t10.space, t10.local);
    };
  }
  function nR(t10, n10, e10) {
    var r10, i2, o2 = e10 + "";
    return function() {
      var u2 = this.getAttribute(t10);
      return u2 === o2 ? null : u2 === r10 ? i2 : i2 = n10(r10 = u2, e10);
    };
  }
  function nI(t10, n10, e10) {
    var r10, i2, o2 = e10 + "";
    return function() {
      var u2 = this.getAttributeNS(t10.space, t10.local);
      return u2 === o2 ? null : u2 === r10 ? i2 : i2 = n10(r10 = u2, e10);
    };
  }
  function nz(t10, n10, e10) {
    var r10, i2, o2;
    return function() {
      var u2, a2, l2 = e10(this);
      return null == l2 ? void this.removeAttribute(t10) : (u2 = this.getAttribute(t10)) === (a2 = l2 + "") ? null : u2 === r10 && a2 === i2 ? o2 : (i2 = a2, o2 = n10(r10 = u2, l2));
    };
  }
  function nq(t10, n10, e10) {
    var r10, i2, o2;
    return function() {
      var u2, a2, l2 = e10(this);
      return null == l2 ? void this.removeAttributeNS(t10.space, t10.local) : (u2 = this.getAttributeNS(t10.space, t10.local)) === (a2 = l2 + "") ? null : u2 === r10 && a2 === i2 ? o2 : (i2 = a2, o2 = n10(r10 = u2, l2));
    };
  }
  function nT(t10, n10) {
    var e10, r10;
    function i2() {
      var i3 = n10.apply(this, arguments);
      return i3 !== r10 && (e10 = (r10 = i3) && function(n11) {
        this.setAttributeNS(t10.space, t10.local, i3.call(this, n11));
      }), e10;
    }
    return i2._value = n10, i2;
  }
  function nD(t10, n10) {
    var e10, r10;
    function i2() {
      var i3 = n10.apply(this, arguments);
      return i3 !== r10 && (e10 = (r10 = i3) && function(n11) {
        this.setAttribute(t10, i3.call(this, n11));
      }), e10;
    }
    return i2._value = n10, i2;
  }
  function nL(t10, n10) {
    return function() {
      tH(this, t10).delay = +n10.apply(this, arguments);
    };
  }
  function nX(t10, n10) {
    return n10 = +n10, function() {
      tH(this, t10).delay = n10;
    };
  }
  function nH(t10, n10) {
    return function() {
      tY(this, t10).duration = +n10.apply(this, arguments);
    };
  }
  function nY(t10, n10) {
    return n10 = +n10, function() {
      tY(this, t10).duration = n10;
    };
  }
  var nU = tg.prototype.constructor;
  function nB(t10) {
    return function() {
      this.style.removeProperty(t10);
    };
  }
  var nF = 0;
  function nV(t10, n10, e10, r10) {
    this._groups = t10, this._parents = n10, this._name = e10, this._id = r10;
  }
  function nW(t10) {
    return tg().transition(t10);
  }
  var nG = tg.prototype;
  nV.prototype = nW.prototype = { constructor: nV, select: function(t10) {
    var n10 = this._name, e10 = this._id;
    "function" != typeof t10 && (t10 = l(t10));
    for (var r10 = this._groups, i2 = r10.length, o2 = Array(i2), u2 = 0; u2 < i2; ++u2)
      for (var a2, s2, f2 = r10[u2], c2 = f2.length, h2 = o2[u2] = Array(c2), p2 = 0; p2 < c2; ++p2)
        (a2 = f2[p2]) && (s2 = t10.call(a2, a2.__data__, p2, f2)) && ("__data__" in a2 && (s2.__data__ = a2.__data__), h2[p2] = s2, tX(h2[p2], n10, e10, p2, h2, tU(a2, e10)));
    return new nV(o2, this._parents, n10, e10);
  }, selectAll: function(t10) {
    var n10 = this._name, e10 = this._id;
    "function" != typeof t10 && (t10 = f(t10));
    for (var r10 = this._groups, i2 = r10.length, o2 = [], u2 = [], a2 = 0; a2 < i2; ++a2)
      for (var l2, s2 = r10[a2], c2 = s2.length, h2 = 0; h2 < c2; ++h2)
        if (l2 = s2[h2]) {
          for (var p2, d2 = t10.call(l2, l2.__data__, h2, s2), v2 = tU(l2, e10), g2 = 0, y2 = d2.length; g2 < y2; ++g2)
            (p2 = d2[g2]) && tX(p2, n10, e10, g2, d2, v2);
          o2.push(d2), u2.push(l2);
        }
    return new nV(o2, u2, n10, e10);
  }, selectChild: nG.selectChild, selectChildren: nG.selectChildren, filter: function(t10) {
    "function" != typeof t10 && (t10 = c(t10));
    for (var n10 = this._groups, e10 = n10.length, r10 = Array(e10), i2 = 0; i2 < e10; ++i2)
      for (var o2, u2 = n10[i2], a2 = u2.length, l2 = r10[i2] = [], s2 = 0; s2 < a2; ++s2)
        (o2 = u2[s2]) && t10.call(o2, o2.__data__, s2, u2) && l2.push(o2);
    return new nV(r10, this._parents, this._name, this._id);
  }, merge: function(t10) {
    if (t10._id !== this._id)
      throw Error();
    for (var n10 = this._groups, e10 = t10._groups, r10 = n10.length, i2 = e10.length, o2 = Math.min(r10, i2), u2 = Array(r10), a2 = 0; a2 < o2; ++a2)
      for (var l2, s2 = n10[a2], f2 = e10[a2], c2 = s2.length, h2 = u2[a2] = Array(c2), p2 = 0; p2 < c2; ++p2)
        (l2 = s2[p2] || f2[p2]) && (h2[p2] = l2);
    for (; a2 < r10; ++a2)
      u2[a2] = n10[a2];
    return new nV(u2, this._parents, this._name, this._id);
  }, selection: function() {
    return new nU(this._groups, this._parents);
  }, transition: function() {
    for (var t10 = this._name, n10 = this._id, e10 = ++nF, r10 = this._groups, i2 = r10.length, o2 = 0; o2 < i2; ++o2)
      for (var u2, a2 = r10[o2], l2 = a2.length, s2 = 0; s2 < l2; ++s2)
        if (u2 = a2[s2]) {
          var f2 = tU(u2, n10);
          tX(u2, t10, e10, s2, a2, { time: f2.time + f2.delay + f2.duration, delay: 0, duration: f2.duration, ease: f2.ease });
        }
    return new nV(r10, this._parents, t10, e10);
  }, call: nG.call, nodes: nG.nodes, node: nG.node, size: nG.size, empty: nG.empty, each: nG.each, on: function(t10, n10) {
    var e10, r10, i2, o2 = this._id;
    return arguments.length < 2 ? tU(this.node(), o2).on.on(t10) : this.each((i2 = (t10 + "").trim().split(/^|\s+/).every(function(t11) {
      var n11 = t11.indexOf(".");
      return n11 >= 0 && (t11 = t11.slice(0, n11)), !t11 || "start" === t11;
    }) ? tH : tY, function() {
      var u2 = i2(this, o2), a2 = u2.on;
      a2 !== e10 && (r10 = (e10 = a2).copy()).on(t10, n10), u2.on = r10;
    }));
  }, attr: function(t10, n10) {
    var e10 = N(t10), r10 = "transform" === e10 ? tK : nC;
    return this.attrTween(t10, "function" == typeof n10 ? (e10.local ? nq : nz)(e10, r10, t0(this, "attr." + t10, n10)) : null == n10 ? (e10.local ? nj : nO)(e10) : (e10.local ? nI : nR)(e10, r10, n10));
  }, attrTween: function(t10, n10) {
    var e10 = "attr." + t10;
    if (arguments.length < 2)
      return (e10 = this.tween(e10)) && e10._value;
    if (null == n10)
      return this.tween(e10, null);
    if ("function" != typeof n10)
      throw Error();
    var r10 = N(t10);
    return this.tween(e10, (r10.local ? nT : nD)(r10, n10));
  }, style: function(t10, n10, e10) {
    var r10, i2, o2, u2, a2, l2, s2, f2, c2, h2, p2, d2, v2, g2, y2, _2, m2, w2, x2, b2, E2, S2 = "transform" == (t10 += "") ? tJ : nC;
    return null == n10 ? this.styleTween(t10, (r10 = t10, function() {
      var t11 = z(this, r10), n11 = (this.style.removeProperty(r10), z(this, r10));
      return t11 === n11 ? null : t11 === i2 && n11 === o2 ? u2 : u2 = S2(i2 = t11, o2 = n11);
    })).on("end.style." + t10, nB(t10)) : "function" == typeof n10 ? this.styleTween(t10, (a2 = t10, l2 = t0(this, "style." + t10, n10), function() {
      var t11 = z(this, a2), n11 = l2(this), e11 = n11 + "";
      return null == n11 && (this.style.removeProperty(a2), e11 = n11 = z(this, a2)), t11 === e11 ? null : t11 === s2 && e11 === f2 ? c2 : (f2 = e11, c2 = S2(s2 = t11, n11));
    })).each((h2 = this._id, m2 = "end." + (_2 = "style." + (p2 = t10)), function() {
      var t11 = tY(this, h2), n11 = t11.on, e11 = null == t11.value[_2] ? y2 || (y2 = nB(p2)) : void 0;
      (n11 !== d2 || g2 !== e11) && (v2 = (d2 = n11).copy()).on(m2, g2 = e11), t11.on = v2;
    })) : this.styleTween(t10, (w2 = t10, E2 = n10 + "", function() {
      var t11 = z(this, w2);
      return t11 === E2 ? null : t11 === x2 ? b2 : b2 = S2(x2 = t11, n10);
    }), e10).on("end.style." + t10, null);
  }, styleTween: function(t10, n10, e10) {
    var r10 = "style." + (t10 += "");
    if (arguments.length < 2)
      return (r10 = this.tween(r10)) && r10._value;
    if (null == n10)
      return this.tween(r10, null);
    if ("function" != typeof n10)
      throw Error();
    return this.tween(r10, function(t11, n11, e11) {
      var r11, i2;
      function o2() {
        var o3 = n11.apply(this, arguments);
        return o3 !== i2 && (r11 = (i2 = o3) && function(n12) {
          this.style.setProperty(t11, o3.call(this, n12), e11);
        }), r11;
      }
      return o2._value = n11, o2;
    }(t10, n10, null == e10 ? "" : e10));
  }, text: function(t10) {
    var n10, e10;
    return this.tween("text", "function" == typeof t10 ? (n10 = t0(this, "text", t10), function() {
      var t11 = n10(this);
      this.textContent = null == t11 ? "" : t11;
    }) : (e10 = null == t10 ? "" : t10 + "", function() {
      this.textContent = e10;
    }));
  }, textTween: function(t10) {
    var n10 = "text";
    if (arguments.length < 1)
      return (n10 = this.tween(n10)) && n10._value;
    if (null == t10)
      return this.tween(n10, null);
    if ("function" != typeof t10)
      throw Error();
    return this.tween(n10, function(t11) {
      var n11, e10;
      function r10() {
        var r11 = t11.apply(this, arguments);
        return r11 !== e10 && (n11 = (e10 = r11) && function(t12) {
          this.textContent = r11.call(this, t12);
        }), n11;
      }
      return r10._value = t11, r10;
    }(t10));
  }, remove: function() {
    var t10;
    return this.on("end.remove", (t10 = this._id, function() {
      var n10 = this.parentNode;
      for (var e10 in this.__transition)
        if (+e10 !== t10)
          return;
      n10 && n10.removeChild(this);
    }));
  }, tween: function(t10, n10) {
    var e10 = this._id;
    if (t10 += "", arguments.length < 2) {
      for (var r10, i2 = tU(this.node(), e10).tween, o2 = 0, u2 = i2.length; o2 < u2; ++o2)
        if ((r10 = i2[o2]).name === t10)
          return r10.value;
      return null;
    }
    return this.each((null == n10 ? tZ : tQ)(e10, t10, n10));
  }, delay: function(t10) {
    var n10 = this._id;
    return arguments.length ? this.each(("function" == typeof t10 ? nL : nX)(n10, t10)) : tU(this.node(), n10).delay;
  }, duration: function(t10) {
    var n10 = this._id;
    return arguments.length ? this.each(("function" == typeof t10 ? nH : nY)(n10, t10)) : tU(this.node(), n10).duration;
  }, ease: function(t10) {
    var n10 = this._id;
    return arguments.length ? this.each(function(t11, n11) {
      if ("function" != typeof n11)
        throw Error();
      return function() {
        tY(this, t11).ease = n11;
      };
    }(n10, t10)) : tU(this.node(), n10).ease;
  }, easeVarying: function(t10) {
    var n10;
    if ("function" != typeof t10)
      throw Error();
    return this.each((n10 = this._id, function() {
      var e10 = t10.apply(this, arguments);
      if ("function" != typeof e10)
        throw Error();
      tY(this, n10).ease = e10;
    }));
  }, end: function() {
    var t10, n10, e10 = this, r10 = e10._id, i2 = e10.size();
    return new Promise(function(o2, u2) {
      var a2 = { value: u2 }, l2 = { value: function() {
        0 == --i2 && o2();
      } };
      e10.each(function() {
        var e11 = tY(this, r10), i3 = e11.on;
        i3 !== t10 && ((n10 = (t10 = i3).copy())._.cancel.push(a2), n10._.interrupt.push(a2), n10._.end.push(l2)), e11.on = n10;
      }), 0 === i2 && o2();
    });
  }, [Symbol.iterator]: nG[Symbol.iterator] };
  var nJ = { time: null, delay: 0, duration: 250, ease: function(t10) {
    return ((t10 *= 2) <= 1 ? t10 * t10 * t10 : (t10 -= 2) * t10 * t10 + 2) / 2;
  } };
  tg.prototype.interrupt = function(t10) {
    return this.each(function() {
      !function(t11, n10) {
        var e10, r10, i2, o2 = t11.__transition, u2 = true;
        if (o2) {
          for (i2 in n10 = null == n10 ? null : n10 + "", o2) {
            if ((e10 = o2[i2]).name !== n10) {
              u2 = false;
              continue;
            }
            r10 = e10.state > 2 && e10.state < 5, e10.state = 6, e10.timer.stop(), e10.on.call(r10 ? "interrupt" : "cancel", t11, t11.__data__, e10.index, e10.group), delete o2[i2];
          }
          u2 && delete t11.__transition;
        }
      }(this, t10);
    });
  }, tg.prototype.transition = function(t10) {
    var n10, e10;
    t10 instanceof nV ? (n10 = t10._id, t10 = t10._name) : (n10 = ++nF, (e10 = nJ).time = tC(), t10 = null == t10 ? null : t10 + "");
    for (var r10 = this._groups, i2 = r10.length, o2 = 0; o2 < i2; ++o2)
      for (var u2, a2 = r10[o2], l2 = a2.length, s2 = 0; s2 < l2; ++s2)
        (u2 = a2[s2]) && tX(u2, t10, n10, s2, a2, e10 || function(t11, n11) {
          for (var e11; !(e11 = t11.__transition) || !(e11 = e11[n11]); )
            if (!(t11 = t11.parentNode))
              throw Error(`transition ${n11} not found`);
          return e11;
        }(u2, n10));
    return new nV(r10, this._parents, t10, n10);
  };
  let { abs: nK, max: nZ, min: nQ } = Math;
  function n0(t10) {
    return { type: t10 };
  }
  function n1(t10, n10) {
    var e10, r10 = 1;
    function i2() {
      var i3, o2, u2 = e10.length, a2 = 0, l2 = 0;
      for (i3 = 0; i3 < u2; ++i3)
        a2 += (o2 = e10[i3]).x, l2 += o2.y;
      for (a2 = (a2 / u2 - t10) * r10, l2 = (l2 / u2 - n10) * r10, i3 = 0; i3 < u2; ++i3)
        o2 = e10[i3], o2.x -= a2, o2.y -= l2;
    }
    return null == t10 && (t10 = 0), null == n10 && (n10 = 0), i2.initialize = function(t11) {
      e10 = t11;
    }, i2.x = function(n11) {
      return arguments.length ? (t10 = +n11, i2) : t10;
    }, i2.y = function(t11) {
      return arguments.length ? (n10 = +t11, i2) : n10;
    }, i2.strength = function(t11) {
      return arguments.length ? (r10 = +t11, i2) : r10;
    }, i2;
  }
  function n2(t10) {
    return function() {
      return t10;
    };
  }
  function n6(t10) {
    return (t10() - 0.5) * 1e-6;
  }
  function n3(t10) {
    return t10.index;
  }
  function n5(t10, n10) {
    var e10 = t10.get(n10);
    if (!e10)
      throw Error("node not found: " + n10);
    return e10;
  }
  function n4(t10) {
    var n10, e10, r10, i2, o2, u2, a2 = n3, l2 = function(t11) {
      return 1 / Math.min(i2[t11.source.index], i2[t11.target.index]);
    }, s2 = n2(30), f2 = 1;
    function c2(r11) {
      for (var i3 = 0, a3 = t10.length; i3 < f2; ++i3)
        for (var l3, s3, c3, h3, p3, d3, v2, g2 = 0; g2 < a3; ++g2)
          s3 = (l3 = t10[g2]).source, d3 = ((d3 = Math.sqrt((h3 = (c3 = l3.target).x + c3.vx - s3.x - s3.vx || n6(u2)) * h3 + (p3 = c3.y + c3.vy - s3.y - s3.vy || n6(u2)) * p3)) - e10[g2]) / d3 * r11 * n10[g2], h3 *= d3, p3 *= d3, c3.vx -= h3 * (v2 = o2[g2]), c3.vy -= p3 * v2, s3.vx += h3 * (v2 = 1 - v2), s3.vy += p3 * v2;
    }
    function h2() {
      if (r10) {
        var u3, l3, s3 = r10.length, f3 = t10.length, c3 = new Map(r10.map((t11, n11) => [a2(t11, n11, r10), t11]));
        for (u3 = 0, i2 = Array(s3); u3 < f3; ++u3)
          (l3 = t10[u3]).index = u3, "object" != typeof l3.source && (l3.source = n5(c3, l3.source)), "object" != typeof l3.target && (l3.target = n5(c3, l3.target)), i2[l3.source.index] = (i2[l3.source.index] || 0) + 1, i2[l3.target.index] = (i2[l3.target.index] || 0) + 1;
        for (u3 = 0, o2 = Array(f3); u3 < f3; ++u3)
          l3 = t10[u3], o2[u3] = i2[l3.source.index] / (i2[l3.source.index] + i2[l3.target.index]);
        n10 = Array(f3), p2(), e10 = Array(f3), d2();
      }
    }
    function p2() {
      if (r10)
        for (var e11 = 0, i3 = t10.length; e11 < i3; ++e11)
          n10[e11] = +l2(t10[e11], e11, t10);
    }
    function d2() {
      if (r10)
        for (var n11 = 0, i3 = t10.length; n11 < i3; ++n11)
          e10[n11] = +s2(t10[n11], n11, t10);
    }
    return null == t10 && (t10 = []), c2.initialize = function(t11, n11) {
      r10 = t11, u2 = n11, h2();
    }, c2.links = function(n11) {
      return arguments.length ? (t10 = n11, h2(), c2) : t10;
    }, c2.id = function(t11) {
      return arguments.length ? (a2 = t11, c2) : a2;
    }, c2.iterations = function(t11) {
      return arguments.length ? (f2 = +t11, c2) : f2;
    }, c2.strength = function(t11) {
      return arguments.length ? (l2 = "function" == typeof t11 ? t11 : n2(+t11), p2(), c2) : l2;
    }, c2.distance = function(t11) {
      return arguments.length ? (s2 = "function" == typeof t11 ? t11 : n2(+t11), d2(), c2) : s2;
    }, c2;
  }
  function n7(t10, n10, e10, r10) {
    if (isNaN(n10) || isNaN(e10))
      return t10;
    var i2, o2, u2, a2, l2, s2, f2, c2, h2, p2 = t10._root, d2 = { data: r10 }, v2 = t10._x0, g2 = t10._y0, y2 = t10._x1, _2 = t10._y1;
    if (!p2)
      return t10._root = d2, t10;
    for (; p2.length; )
      if ((s2 = n10 >= (o2 = (v2 + y2) / 2)) ? v2 = o2 : y2 = o2, (f2 = e10 >= (u2 = (g2 + _2) / 2)) ? g2 = u2 : _2 = u2, i2 = p2, !(p2 = p2[c2 = f2 << 1 | s2]))
        return i2[c2] = d2, t10;
    if (a2 = +t10._x.call(null, p2.data), l2 = +t10._y.call(null, p2.data), n10 === a2 && e10 === l2)
      return d2.next = p2, i2 ? i2[c2] = d2 : t10._root = d2, t10;
    do
      i2 = i2 ? i2[c2] = [, , , ,] : t10._root = [, , , ,], (s2 = n10 >= (o2 = (v2 + y2) / 2)) ? v2 = o2 : y2 = o2, (f2 = e10 >= (u2 = (g2 + _2) / 2)) ? g2 = u2 : _2 = u2;
    while ((c2 = f2 << 1 | s2) == (h2 = (l2 >= u2) << 1 | a2 >= o2));
    return i2[h2] = p2, i2[c2] = d2, t10;
  }
  function n8(t10, n10, e10, r10, i2) {
    this.node = t10, this.x0 = n10, this.y0 = e10, this.x1 = r10, this.y1 = i2;
  }
  function n9(t10) {
    return t10[0];
  }
  function et(t10) {
    return t10[1];
  }
  function en(t10, n10, e10) {
    var r10 = new ee(null == n10 ? n9 : n10, null == e10 ? et : e10, NaN, NaN, NaN, NaN);
    return null == t10 ? r10 : r10.addAll(t10);
  }
  function ee(t10, n10, e10, r10, i2, o2) {
    this._x = t10, this._y = n10, this._x0 = e10, this._y0 = r10, this._x1 = i2, this._y1 = o2, this._root = void 0;
  }
  function er(t10) {
    for (var n10 = { data: t10.data }, e10 = n10; t10 = t10.next; )
      e10 = e10.next = { data: t10.data };
    return n10;
  }
  ["w", "e"].map(n0), ["n", "s"].map(n0), ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(n0);
  var ei = en.prototype = ee.prototype;
  function eo(t10) {
    return t10.x;
  }
  function eu(t10) {
    return t10.y;
  }
  ei.copy = function() {
    var t10, n10, e10 = new ee(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r10 = this._root;
    if (!r10)
      return e10;
    if (!r10.length)
      return e10._root = er(r10), e10;
    for (t10 = [{ source: r10, target: e10._root = [, , , ,] }]; r10 = t10.pop(); )
      for (var i2 = 0; i2 < 4; ++i2)
        (n10 = r10.source[i2]) && (n10.length ? t10.push({ source: n10, target: r10.target[i2] = [, , , ,] }) : r10.target[i2] = er(n10));
    return e10;
  }, ei.add = function(t10) {
    let n10 = +this._x.call(null, t10), e10 = +this._y.call(null, t10);
    return n7(this.cover(n10, e10), n10, e10, t10);
  }, ei.addAll = function(t10) {
    var n10, e10, r10, i2, o2 = t10.length, u2 = Array(o2), a2 = Array(o2), l2 = 1 / 0, s2 = 1 / 0, f2 = -1 / 0, c2 = -1 / 0;
    for (e10 = 0; e10 < o2; ++e10)
      !(isNaN(r10 = +this._x.call(null, n10 = t10[e10])) || isNaN(i2 = +this._y.call(null, n10))) && (u2[e10] = r10, a2[e10] = i2, r10 < l2 && (l2 = r10), r10 > f2 && (f2 = r10), i2 < s2 && (s2 = i2), i2 > c2 && (c2 = i2));
    if (l2 > f2 || s2 > c2)
      return this;
    for (this.cover(l2, s2).cover(f2, c2), e10 = 0; e10 < o2; ++e10)
      n7(this, u2[e10], a2[e10], t10[e10]);
    return this;
  }, ei.cover = function(t10, n10) {
    if (isNaN(t10 = +t10) || isNaN(n10 = +n10))
      return this;
    var e10 = this._x0, r10 = this._y0, i2 = this._x1, o2 = this._y1;
    if (isNaN(e10))
      i2 = (e10 = Math.floor(t10)) + 1, o2 = (r10 = Math.floor(n10)) + 1;
    else {
      for (var u2, a2, l2 = i2 - e10 || 1, s2 = this._root; e10 > t10 || t10 >= i2 || r10 > n10 || n10 >= o2; )
        switch (a2 = (n10 < r10) << 1 | t10 < e10, (u2 = [, , , ,])[a2] = s2, s2 = u2, l2 *= 2, a2) {
          case 0:
            i2 = e10 + l2, o2 = r10 + l2;
            break;
          case 1:
            e10 = i2 - l2, o2 = r10 + l2;
            break;
          case 2:
            i2 = e10 + l2, r10 = o2 - l2;
            break;
          case 3:
            e10 = i2 - l2, r10 = o2 - l2;
        }
      this._root && this._root.length && (this._root = s2);
    }
    return this._x0 = e10, this._y0 = r10, this._x1 = i2, this._y1 = o2, this;
  }, ei.data = function() {
    var t10 = [];
    return this.visit(function(n10) {
      if (!n10.length)
        do
          t10.push(n10.data);
        while (n10 = n10.next);
    }), t10;
  }, ei.extent = function(t10) {
    return arguments.length ? this.cover(+t10[0][0], +t10[0][1]).cover(+t10[1][0], +t10[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }, ei.find = function(t10, n10, e10) {
    var r10, i2, o2, u2, a2, l2, s2, f2 = this._x0, c2 = this._y0, h2 = this._x1, p2 = this._y1, d2 = [], v2 = this._root;
    for (v2 && d2.push(new n8(v2, f2, c2, h2, p2)), null == e10 ? e10 = 1 / 0 : (f2 = t10 - e10, c2 = n10 - e10, h2 = t10 + e10, p2 = n10 + e10, e10 *= e10); l2 = d2.pop(); )
      if ((v2 = l2.node) && !((i2 = l2.x0) > h2) && !((o2 = l2.y0) > p2) && !((u2 = l2.x1) < f2) && !((a2 = l2.y1) < c2)) {
        if (v2.length) {
          var g2 = (i2 + u2) / 2, y2 = (o2 + a2) / 2;
          d2.push(new n8(v2[3], g2, y2, u2, a2), new n8(v2[2], i2, y2, g2, a2), new n8(v2[1], g2, o2, u2, y2), new n8(v2[0], i2, o2, g2, y2)), (s2 = (n10 >= y2) << 1 | t10 >= g2) && (l2 = d2[d2.length - 1], d2[d2.length - 1] = d2[d2.length - 1 - s2], d2[d2.length - 1 - s2] = l2);
        } else {
          var _2 = t10 - +this._x.call(null, v2.data), m2 = n10 - +this._y.call(null, v2.data), w2 = _2 * _2 + m2 * m2;
          if (w2 < e10) {
            var x2 = Math.sqrt(e10 = w2);
            f2 = t10 - x2, c2 = n10 - x2, h2 = t10 + x2, p2 = n10 + x2, r10 = v2.data;
          }
        }
      }
    return r10;
  }, ei.remove = function(t10) {
    if (isNaN(o2 = +this._x.call(null, t10)) || isNaN(u2 = +this._y.call(null, t10)))
      return this;
    var n10, e10, r10, i2, o2, u2, a2, l2, s2, f2, c2, h2, p2 = this._root, d2 = this._x0, v2 = this._y0, g2 = this._x1, y2 = this._y1;
    if (!p2)
      return this;
    if (p2.length)
      for (; ; ) {
        if ((s2 = o2 >= (a2 = (d2 + g2) / 2)) ? d2 = a2 : g2 = a2, (f2 = u2 >= (l2 = (v2 + y2) / 2)) ? v2 = l2 : y2 = l2, n10 = p2, !(p2 = p2[c2 = f2 << 1 | s2]))
          return this;
        if (!p2.length)
          break;
        (n10[c2 + 1 & 3] || n10[c2 + 2 & 3] || n10[c2 + 3 & 3]) && (e10 = n10, h2 = c2);
      }
    for (; p2.data !== t10; )
      if (r10 = p2, !(p2 = p2.next))
        return this;
    return ((i2 = p2.next) && delete p2.next, r10) ? (i2 ? r10.next = i2 : delete r10.next, this) : n10 ? (i2 ? n10[c2] = i2 : delete n10[c2], (p2 = n10[0] || n10[1] || n10[2] || n10[3]) && p2 === (n10[3] || n10[2] || n10[1] || n10[0]) && !p2.length && (e10 ? e10[h2] = p2 : this._root = p2), this) : (this._root = i2, this);
  }, ei.removeAll = function(t10) {
    for (var n10 = 0, e10 = t10.length; n10 < e10; ++n10)
      this.remove(t10[n10]);
    return this;
  }, ei.root = function() {
    return this._root;
  }, ei.size = function() {
    var t10 = 0;
    return this.visit(function(n10) {
      if (!n10.length)
        do
          ++t10;
        while (n10 = n10.next);
    }), t10;
  }, ei.visit = function(t10) {
    var n10, e10, r10, i2, o2, u2, a2 = [], l2 = this._root;
    for (l2 && a2.push(new n8(l2, this._x0, this._y0, this._x1, this._y1)); n10 = a2.pop(); )
      if (!t10(l2 = n10.node, r10 = n10.x0, i2 = n10.y0, o2 = n10.x1, u2 = n10.y1) && l2.length) {
        var s2 = (r10 + o2) / 2, f2 = (i2 + u2) / 2;
        (e10 = l2[3]) && a2.push(new n8(e10, s2, f2, o2, u2)), (e10 = l2[2]) && a2.push(new n8(e10, r10, f2, s2, u2)), (e10 = l2[1]) && a2.push(new n8(e10, s2, i2, o2, f2)), (e10 = l2[0]) && a2.push(new n8(e10, r10, i2, s2, f2));
      }
    return this;
  }, ei.visitAfter = function(t10) {
    var n10, e10 = [], r10 = [];
    for (this._root && e10.push(new n8(this._root, this._x0, this._y0, this._x1, this._y1)); n10 = e10.pop(); ) {
      var i2 = n10.node;
      if (i2.length) {
        var o2, u2 = n10.x0, a2 = n10.y0, l2 = n10.x1, s2 = n10.y1, f2 = (u2 + l2) / 2, c2 = (a2 + s2) / 2;
        (o2 = i2[0]) && e10.push(new n8(o2, u2, a2, f2, c2)), (o2 = i2[1]) && e10.push(new n8(o2, f2, a2, l2, c2)), (o2 = i2[2]) && e10.push(new n8(o2, u2, c2, f2, s2)), (o2 = i2[3]) && e10.push(new n8(o2, f2, c2, l2, s2));
      }
      r10.push(n10);
    }
    for (; n10 = r10.pop(); )
      t10(n10.node, n10.x0, n10.y0, n10.x1, n10.y1);
    return this;
  }, ei.x = function(t10) {
    return arguments.length ? (this._x = t10, this) : this._x;
  }, ei.y = function(t10) {
    return arguments.length ? (this._y = t10, this) : this._y;
  };
  var ea = Math.PI * (3 - Math.sqrt(5));
  function el(t10) {
    let n10;
    var e10, r10 = 1, i2 = 1e-3, o2 = 1 - Math.pow(1e-3, 1 / 300), u2 = 0, a2 = 0.6, l2 = /* @__PURE__ */ new Map(), s2 = tR(h2), f2 = t_("tick", "end"), c2 = (n10 = 1, () => (n10 = (1664525 * n10 + 1013904223) % 4294967296) / 4294967296);
    function h2() {
      p2(), f2.call("tick", e10), r10 < i2 && (s2.stop(), f2.call("end", e10));
    }
    function p2(n11) {
      var i3, s3, f3 = t10.length;
      void 0 === n11 && (n11 = 1);
      for (var c3 = 0; c3 < n11; ++c3)
        for (r10 += (u2 - r10) * o2, l2.forEach(function(t11) {
          t11(r10);
        }), i3 = 0; i3 < f3; ++i3)
          null == (s3 = t10[i3]).fx ? s3.x += s3.vx *= a2 : (s3.x = s3.fx, s3.vx = 0), null == s3.fy ? s3.y += s3.vy *= a2 : (s3.y = s3.fy, s3.vy = 0);
      return e10;
    }
    function d2() {
      for (var n11, e11 = 0, r11 = t10.length; e11 < r11; ++e11) {
        if ((n11 = t10[e11]).index = e11, null != n11.fx && (n11.x = n11.fx), null != n11.fy && (n11.y = n11.fy), isNaN(n11.x) || isNaN(n11.y)) {
          var i3 = 10 * Math.sqrt(0.5 + e11), o3 = e11 * ea;
          n11.x = i3 * Math.cos(o3), n11.y = i3 * Math.sin(o3);
        }
        (isNaN(n11.vx) || isNaN(n11.vy)) && (n11.vx = n11.vy = 0);
      }
    }
    function v2(n11) {
      return n11.initialize && n11.initialize(t10, c2), n11;
    }
    return null == t10 && (t10 = []), d2(), e10 = { tick: p2, restart: function() {
      return s2.restart(h2), e10;
    }, stop: function() {
      return s2.stop(), e10;
    }, nodes: function(n11) {
      return arguments.length ? (t10 = n11, d2(), l2.forEach(v2), e10) : t10;
    }, alpha: function(t11) {
      return arguments.length ? (r10 = +t11, e10) : r10;
    }, alphaMin: function(t11) {
      return arguments.length ? (i2 = +t11, e10) : i2;
    }, alphaDecay: function(t11) {
      return arguments.length ? (o2 = +t11, e10) : +o2;
    }, alphaTarget: function(t11) {
      return arguments.length ? (u2 = +t11, e10) : u2;
    }, velocityDecay: function(t11) {
      return arguments.length ? (a2 = 1 - t11, e10) : 1 - a2;
    }, randomSource: function(t11) {
      return arguments.length ? (c2 = t11, l2.forEach(v2), e10) : c2;
    }, force: function(t11, n11) {
      return arguments.length > 1 ? (null == n11 ? l2.delete(t11) : l2.set(t11, v2(n11)), e10) : l2.get(t11);
    }, find: function(n11, e11, r11) {
      var i3, o3, u3, a3, l3, s3 = 0, f3 = t10.length;
      for (null == r11 ? r11 = 1 / 0 : r11 *= r11, s3 = 0; s3 < f3; ++s3)
        (u3 = (i3 = n11 - (a3 = t10[s3]).x) * i3 + (o3 = e11 - a3.y) * o3) < r11 && (l3 = a3, r11 = u3);
      return l3;
    }, on: function(t11, n11) {
      return arguments.length > 1 ? (f2.on(t11, n11), e10) : f2.on(t11);
    } };
  }
  function es() {
    var t10, n10, e10, r10, i2, o2 = n2(-30), u2 = 1, a2 = 1 / 0, l2 = 0.81;
    function s2(e11) {
      var i3, o3 = t10.length, u3 = en(t10, eo, eu).visitAfter(c2);
      for (r10 = e11, i3 = 0; i3 < o3; ++i3)
        n10 = t10[i3], u3.visit(h2);
    }
    function f2() {
      if (t10) {
        var n11, e11, r11 = t10.length;
        for (n11 = 0, i2 = Array(r11); n11 < r11; ++n11)
          i2[(e11 = t10[n11]).index] = +o2(e11, n11, t10);
      }
    }
    function c2(t11) {
      var n11, e11, r11, o3, u3, a3 = 0, l3 = 0;
      if (t11.length) {
        for (r11 = o3 = u3 = 0; u3 < 4; ++u3)
          (n11 = t11[u3]) && (e11 = Math.abs(n11.value)) && (a3 += n11.value, l3 += e11, r11 += e11 * n11.x, o3 += e11 * n11.y);
        t11.x = r11 / l3, t11.y = o3 / l3;
      } else {
        (n11 = t11).x = n11.data.x, n11.y = n11.data.y;
        do
          a3 += i2[n11.data.index];
        while (n11 = n11.next);
      }
      t11.value = a3;
    }
    function h2(t11, o3, s3, f3) {
      if (!t11.value)
        return true;
      var c3 = t11.x - n10.x, h3 = t11.y - n10.y, p2 = f3 - o3, d2 = c3 * c3 + h3 * h3;
      if (p2 * p2 / l2 < d2)
        return d2 < a2 && (0 === c3 && (d2 += (c3 = n6(e10)) * c3), 0 === h3 && (d2 += (h3 = n6(e10)) * h3), d2 < u2 && (d2 = Math.sqrt(u2 * d2)), n10.vx += c3 * t11.value * r10 / d2, n10.vy += h3 * t11.value * r10 / d2), true;
      if (!t11.length && !(d2 >= a2)) {
        (t11.data !== n10 || t11.next) && (0 === c3 && (d2 += (c3 = n6(e10)) * c3), 0 === h3 && (d2 += (h3 = n6(e10)) * h3), d2 < u2 && (d2 = Math.sqrt(u2 * d2)));
        do
          t11.data !== n10 && (p2 = i2[t11.data.index] * r10 / d2, n10.vx += c3 * p2, n10.vy += h3 * p2);
        while (t11 = t11.next);
      }
    }
    return s2.initialize = function(n11, r11) {
      t10 = n11, e10 = r11, f2();
    }, s2.strength = function(t11) {
      return arguments.length ? (o2 = "function" == typeof t11 ? t11 : n2(+t11), f2(), s2) : o2;
    }, s2.distanceMin = function(t11) {
      return arguments.length ? (u2 = t11 * t11, s2) : Math.sqrt(u2);
    }, s2.distanceMax = function(t11) {
      return arguments.length ? (a2 = t11 * t11, s2) : Math.sqrt(a2);
    }, s2.theta = function(t11) {
      return arguments.length ? (l2 = t11 * t11, s2) : Math.sqrt(l2);
    }, s2;
  }
  class ef {
    constructor() {
      this._partials = new Float64Array(32), this._n = 0;
    }
    add(t10) {
      let n10 = this._partials, e10 = 0;
      for (let r10 = 0; r10 < this._n && r10 < 32; r10++) {
        let i2 = n10[r10], o2 = t10 + i2, u2 = Math.abs(t10) < Math.abs(i2) ? t10 - (o2 - i2) : i2 - (o2 - t10);
        u2 && (n10[e10++] = u2), t10 = o2;
      }
      return n10[e10] = t10, this._n = e10 + 1, this;
    }
    valueOf() {
      let t10 = this._partials, n10 = this._n, e10, r10, i2, o2 = 0;
      if (n10 > 0) {
        for (o2 = t10[--n10]; n10 > 0 && (o2 = (e10 = o2) + (r10 = t10[--n10]), !(i2 = r10 - (o2 - e10))); )
          ;
        n10 > 0 && (i2 < 0 && t10[n10 - 1] < 0 || i2 > 0 && t10[n10 - 1] > 0) && (e10 = o2 + (r10 = 2 * i2), r10 == e10 - o2 && (o2 = e10));
      }
      return o2;
    }
  }
  var ec = Math.PI, eh = ec / 2, ep = ec / 4, ed = 2 * ec, ev = 180 / ec, eg = ec / 180, ey = Math.abs, e_ = Math.atan, em = Math.atan2, ew = Math.cos, ex = Math.hypot, eb = Math.sin, eE = Math.sign || function(t10) {
    return t10 > 0 ? 1 : t10 < 0 ? -1 : 0;
  }, eS = Math.sqrt;
  function eN(t10) {
    return t10 > 1 ? eh : t10 < -1 ? -eh : Math.asin(t10);
  }
  function eM() {
  }
  function ek(t10, n10) {
    t10 && eP.hasOwnProperty(t10.type) && eP[t10.type](t10, n10);
  }
  var eA = { Feature: function(t10, n10) {
    ek(t10.geometry, n10);
  }, FeatureCollection: function(t10, n10) {
    for (var e10 = t10.features, r10 = -1, i2 = e10.length; ++r10 < i2; )
      ek(e10[r10].geometry, n10);
  } }, eP = { Sphere: function(t10, n10) {
    n10.sphere();
  }, Point: function(t10, n10) {
    t10 = t10.coordinates, n10.point(t10[0], t10[1], t10[2]);
  }, MultiPoint: function(t10, n10) {
    for (var e10 = t10.coordinates, r10 = -1, i2 = e10.length; ++r10 < i2; )
      t10 = e10[r10], n10.point(t10[0], t10[1], t10[2]);
  }, LineString: function(t10, n10) {
    e$(t10.coordinates, n10, 0);
  }, MultiLineString: function(t10, n10) {
    for (var e10 = t10.coordinates, r10 = -1, i2 = e10.length; ++r10 < i2; )
      e$(e10[r10], n10, 0);
  }, Polygon: function(t10, n10) {
    eC(t10.coordinates, n10);
  }, MultiPolygon: function(t10, n10) {
    for (var e10 = t10.coordinates, r10 = -1, i2 = e10.length; ++r10 < i2; )
      eC(e10[r10], n10);
  }, GeometryCollection: function(t10, n10) {
    for (var e10 = t10.geometries, r10 = -1, i2 = e10.length; ++r10 < i2; )
      ek(e10[r10], n10);
  } };
  function e$(t10, n10, e10) {
    var r10, i2 = -1, o2 = t10.length - e10;
    for (n10.lineStart(); ++i2 < o2; )
      r10 = t10[i2], n10.point(r10[0], r10[1], r10[2]);
    n10.lineEnd();
  }
  function eC(t10, n10) {
    var e10 = -1, r10 = t10.length;
    for (n10.polygonStart(); ++e10 < r10; )
      e$(t10[e10], n10, 1);
    n10.polygonEnd();
  }
  function eO(t10, n10) {
    t10 && eA.hasOwnProperty(t10.type) ? eA[t10.type](t10, n10) : ek(t10, n10);
  }
  var ej = { sphere: eM, point: eR, lineStart: ez, lineEnd: eD, polygonStart: function() {
    ej.lineStart = eL, ej.lineEnd = eX;
  }, polygonEnd: function() {
    ej.lineStart = ez, ej.lineEnd = eD;
  } };
  function eR(t10, n10) {
    t10 *= eg;
    var e10 = ew(n10 *= eg);
    eI(e10 * ew(t10), e10 * eb(t10), eb(n10));
  }
  function eI(t10, n10, e10) {
    ++eV, eG += (t10 - eG) / eV, eJ += (n10 - eJ) / eV, eK += (e10 - eK) / eV;
  }
  function ez() {
    ej.point = eq;
  }
  function eq(t10, n10) {
    t10 *= eg;
    var e10 = ew(n10 *= eg);
    e4 = e10 * ew(t10), e7 = e10 * eb(t10), e8 = eb(n10), ej.point = eT, eI(e4, e7, e8);
  }
  function eT(t10, n10) {
    t10 *= eg;
    var e10 = ew(n10 *= eg), r10 = e10 * ew(t10), i2 = e10 * eb(t10), o2 = eb(n10), u2 = em(eS((u2 = e7 * o2 - e8 * i2) * u2 + (u2 = e8 * r10 - e4 * o2) * u2 + (u2 = e4 * i2 - e7 * r10) * u2), e4 * r10 + e7 * i2 + e8 * o2);
    eW += u2, eZ += u2 * (e4 + (e4 = r10)), eQ += u2 * (e7 + (e7 = i2)), e0 += u2 * (e8 + (e8 = o2)), eI(e4, e7, e8);
  }
  function eD() {
    ej.point = eR;
  }
  function eL() {
    ej.point = eH;
  }
  function eX() {
    eY(e3, e5), ej.point = eR;
  }
  function eH(t10, n10) {
    e3 = t10, e5 = n10, t10 *= eg, n10 *= eg, ej.point = eY;
    var e10 = ew(n10);
    eI(e4 = e10 * ew(t10), e7 = e10 * eb(t10), e8 = eb(n10));
  }
  function eY(t10, n10) {
    t10 *= eg;
    var e10 = ew(n10 *= eg), r10 = e10 * ew(t10), i2 = e10 * eb(t10), o2 = eb(n10), u2 = e7 * o2 - e8 * i2, a2 = e8 * r10 - e4 * o2, l2 = e4 * i2 - e7 * r10, s2 = ex(u2, a2, l2), f2 = eN(s2), c2 = s2 && -f2 / s2;
    e1.add(c2 * u2), e2.add(c2 * a2), e6.add(c2 * l2), eW += f2, eZ += f2 * (e4 + (e4 = r10)), eQ += f2 * (e7 + (e7 = i2)), e0 += f2 * (e8 + (e8 = o2)), eI(e4, e7, e8);
  }
  function eU(t10) {
    eV = eW = eG = eJ = eK = eZ = eQ = e0 = 0, e1 = new ef(), e2 = new ef(), e6 = new ef(), eO(t10, ej);
    var n10 = +e1, e10 = +e2, r10 = +e6, i2 = ex(n10, e10, r10);
    return i2 < 1e-12 && (n10 = eZ, e10 = eQ, r10 = e0, eW < 1e-6 && (n10 = eG, e10 = eJ, r10 = eK), (i2 = ex(n10, e10, r10)) < 1e-12) ? [NaN, NaN] : [em(e10, n10) * ev, eN(r10 / i2) * ev];
  }
  function eB(t10, n10) {
    var e10, r10, i2 = t10[0] * eg, o2 = t10[1] * eg, u2 = n10[0] * eg, a2 = n10[1] * eg, l2 = ew(o2), s2 = eb(o2), f2 = ew(a2), c2 = eb(a2), h2 = l2 * ew(i2), p2 = l2 * eb(i2), d2 = f2 * ew(u2), v2 = f2 * eb(u2), g2 = 2 * eN(eS((e10 = eb((e10 = a2 - o2) / 2)) * e10 + l2 * f2 * ((r10 = eb((r10 = u2 - i2) / 2)) * r10))), y2 = eb(g2), _2 = g2 ? function(t11) {
      var n11 = eb(t11 *= g2) / y2, e11 = eb(g2 - t11) / y2, r11 = e11 * h2 + n11 * d2, i3 = e11 * p2 + n11 * v2;
      return [em(i3, r11) * ev, em(e11 * s2 + n11 * c2, eS(r11 * r11 + i3 * i3)) * ev];
    } : function() {
      return [i2 * ev, o2 * ev];
    };
    return _2.distance = g2, _2;
  }
  var eF, eV, eW, eG, eJ, eK, eZ, eQ, e0, e1, e2, e6, e3, e5, e4, e7, e8, e9, rt, rn, re, rr = (t10) => t10, ri = new ef(), ro = new ef(), ru = { point: eM, lineStart: eM, lineEnd: eM, polygonStart: function() {
    ru.lineStart = ra, ru.lineEnd = rf;
  }, polygonEnd: function() {
    ru.lineStart = ru.lineEnd = ru.point = eM, ri.add(ey(ro)), ro = new ef();
  }, result: function() {
    var t10 = ri / 2;
    return ri = new ef(), t10;
  } };
  function ra() {
    ru.point = rl;
  }
  function rl(t10, n10) {
    ru.point = rs, e9 = rn = t10, rt = re = n10;
  }
  function rs(t10, n10) {
    ro.add(re * t10 - rn * n10), rn = t10, re = n10;
  }
  function rf() {
    rs(e9, rt);
  }
  var rc, rh, rp, rd, rv = 1 / 0, rg = 1 / 0, ry = -1 / 0, r_ = ry, rm = { point: function(t10, n10) {
    t10 < rv && (rv = t10), t10 > ry && (ry = t10), n10 < rg && (rg = n10), n10 > r_ && (r_ = n10);
  }, lineStart: eM, lineEnd: eM, polygonStart: eM, polygonEnd: eM, result: function() {
    var t10 = [[rv, rg], [ry, r_]];
    return ry = r_ = -(rg = rv = 1 / 0), t10;
  } }, rw = 0, rx = 0, rb = 0, rE = 0, rS = 0, rN = 0, rM = 0, rk = 0, rA = 0, rP = { point: r$, lineStart: rC, lineEnd: rR, polygonStart: function() {
    rP.lineStart = rI, rP.lineEnd = rz;
  }, polygonEnd: function() {
    rP.point = r$, rP.lineStart = rC, rP.lineEnd = rR;
  }, result: function() {
    var t10 = rA ? [rM / rA, rk / rA] : rN ? [rE / rN, rS / rN] : rb ? [rw / rb, rx / rb] : [NaN, NaN];
    return rw = rx = rb = rE = rS = rN = rM = rk = rA = 0, t10;
  } };
  function r$(t10, n10) {
    rw += t10, rx += n10, ++rb;
  }
  function rC() {
    rP.point = rO;
  }
  function rO(t10, n10) {
    rP.point = rj, r$(rp = t10, rd = n10);
  }
  function rj(t10, n10) {
    var e10 = t10 - rp, r10 = n10 - rd, i2 = eS(e10 * e10 + r10 * r10);
    rE += i2 * (rp + t10) / 2, rS += i2 * (rd + n10) / 2, rN += i2, r$(rp = t10, rd = n10);
  }
  function rR() {
    rP.point = r$;
  }
  function rI() {
    rP.point = rq;
  }
  function rz() {
    rT(rc, rh);
  }
  function rq(t10, n10) {
    rP.point = rT, r$(rc = rp = t10, rh = rd = n10);
  }
  function rT(t10, n10) {
    var e10 = t10 - rp, r10 = n10 - rd, i2 = eS(e10 * e10 + r10 * r10);
    rE += i2 * (rp + t10) / 2, rS += i2 * (rd + n10) / 2, rN += i2, rM += (i2 = rd * t10 - rp * n10) * (rp + t10), rk += i2 * (rd + n10), rA += 3 * i2, r$(rp = t10, rd = n10);
  }
  function rD(t10) {
    this._context = t10;
  }
  rD.prototype = { _radius: 4.5, pointRadius: function(t10) {
    return this._radius = t10, this;
  }, polygonStart: function() {
    this._line = 0;
  }, polygonEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    0 === this._line && this._context.closePath(), this._point = NaN;
  }, point: function(t10, n10) {
    switch (this._point) {
      case 0:
        this._context.moveTo(t10, n10), this._point = 1;
        break;
      case 1:
        this._context.lineTo(t10, n10);
        break;
      default:
        this._context.moveTo(t10 + this._radius, n10), this._context.arc(t10, n10, this._radius, 0, ed);
    }
  }, result: eM };
  var rL, rX, rH, rY, rU, rB = new ef(), rF = { point: eM, lineStart: function() {
    rF.point = rV;
  }, lineEnd: function() {
    rL && rW(rX, rH), rF.point = eM;
  }, polygonStart: function() {
    rL = true;
  }, polygonEnd: function() {
    rL = null;
  }, result: function() {
    var t10 = +rB;
    return rB = new ef(), t10;
  } };
  function rV(t10, n10) {
    rF.point = rW, rX = rY = t10, rH = rU = n10;
  }
  function rW(t10, n10) {
    rY -= t10, rU -= n10, rB.add(eS(rY * rY + rU * rU)), rY = t10, rU = n10;
  }
  class rG {
    constructor(t10) {
      this._append = null == t10 ? rJ : function(t11) {
        let n10 = Math.floor(t11);
        if (!(n10 >= 0))
          throw RangeError(`invalid digits: ${t11}`);
        if (n10 > 15)
          return rJ;
        if (n10 !== r) {
          let t12 = 10 ** n10;
          r = n10, i = function(n11) {
            let e10 = 1;
            this._ += n11[0];
            for (let r10 = n11.length; e10 < r10; ++e10)
              this._ += Math.round(arguments[e10] * t12) / t12 + n11[e10];
          };
        }
        return i;
      }(t10), this._radius = 4.5, this._ = "";
    }
    pointRadius(t10) {
      return this._radius = +t10, this;
    }
    polygonStart() {
      this._line = 0;
    }
    polygonEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      0 === this._line && (this._ += "Z"), this._point = NaN;
    }
    point(t10, n10) {
      switch (this._point) {
        case 0:
          this._append`M${t10},${n10}`, this._point = 1;
          break;
        case 1:
          this._append`L${t10},${n10}`;
          break;
        default:
          if (this._append`M${t10},${n10}`, this._radius !== o || this._append !== i) {
            let t11 = this._radius, n11 = this._;
            this._ = "", this._append`m0,${t11}a${t11},${t11} 0 1,1 0,${-2 * t11}a${t11},${t11} 0 1,1 0,${2 * t11}z`, o = t11, i = this._append, u = this._, this._ = n11;
          }
          this._ += u;
      }
    }
    result() {
      let t10 = this._;
      return this._ = "", t10.length ? t10 : null;
    }
  }
  function rJ(t10) {
    let n10 = 1;
    this._ += t10[0];
    for (let e10 = t10.length; n10 < e10; ++n10)
      this._ += arguments[n10] + t10[n10];
  }
  function rK(t10, n10) {
    let e10 = 3, r10 = 4.5, i2, o2;
    function u2(t11) {
      return t11 && ("function" == typeof r10 && o2.pointRadius(+r10.apply(this, arguments)), eO(t11, i2(o2))), o2.result();
    }
    return u2.area = function(t11) {
      return eO(t11, i2(ru)), ru.result();
    }, u2.measure = function(t11) {
      return eO(t11, i2(rF)), rF.result();
    }, u2.bounds = function(t11) {
      return eO(t11, i2(rm)), rm.result();
    }, u2.centroid = function(t11) {
      return eO(t11, i2(rP)), rP.result();
    }, u2.projection = function(n11) {
      return arguments.length ? (i2 = null == n11 ? (t10 = null, rr) : (t10 = n11).stream, u2) : t10;
    }, u2.context = function(t11) {
      return arguments.length ? (o2 = null == t11 ? (n10 = null, new rG(e10)) : new rD(n10 = t11), "function" != typeof r10 && o2.pointRadius(r10), u2) : n10;
    }, u2.pointRadius = function(t11) {
      return arguments.length ? (r10 = "function" == typeof t11 ? t11 : (o2.pointRadius(+t11), +t11), u2) : r10;
    }, u2.digits = function(t11) {
      if (!arguments.length)
        return e10;
      if (null == t11)
        e10 = null;
      else {
        let n11 = Math.floor(t11);
        if (!(n11 >= 0))
          throw RangeError(`invalid digits: ${t11}`);
        e10 = n11;
      }
      return null === n10 && (o2 = new rG(e10)), u2;
    }, u2.projection(t10).digits(e10).context(n10);
  }
  function rZ() {
    var t10, n10 = [];
    return { point: function(n11, e10, r10) {
      t10.push([n11, e10, r10]);
    }, lineStart: function() {
      n10.push(t10 = []);
    }, lineEnd: eM, rejoin: function() {
      n10.length > 1 && n10.push(n10.pop().concat(n10.shift()));
    }, result: function() {
      var e10 = n10;
      return n10 = [], t10 = null, e10;
    } };
  }
  function rQ(t10, n10) {
    return 1e-6 > ey(t10[0] - n10[0]) && 1e-6 > ey(t10[1] - n10[1]);
  }
  function r0(t10, n10, e10, r10) {
    this.x = t10, this.z = n10, this.o = e10, this.e = r10, this.v = false, this.n = this.p = null;
  }
  function r1(t10, n10, e10, r10, i2) {
    var o2, u2, a2 = [], l2 = [];
    if (t10.forEach(function(t11) {
      if (!((n11 = t11.length - 1) <= 0)) {
        var n11, e11, r11 = t11[0], u3 = t11[n11];
        if (rQ(r11, u3)) {
          if (!r11[2] && !u3[2]) {
            for (i2.lineStart(), o2 = 0; o2 < n11; ++o2)
              i2.point((r11 = t11[o2])[0], r11[1]);
            i2.lineEnd();
            return;
          }
          u3[0] += 2e-6;
        }
        a2.push(e11 = new r0(r11, t11, null, true)), l2.push(e11.o = new r0(r11, null, e11, false)), a2.push(e11 = new r0(u3, t11, null, false)), l2.push(e11.o = new r0(u3, null, e11, true));
      }
    }), a2.length) {
      for (l2.sort(n10), r2(a2), r2(l2), o2 = 0, u2 = l2.length; o2 < u2; ++o2)
        l2[o2].e = e10 = !e10;
      for (var s2, f2, c2 = a2[0]; ; ) {
        for (var h2 = c2, p2 = true; h2.v; )
          if ((h2 = h2.n) === c2)
            return;
        s2 = h2.z, i2.lineStart();
        do {
          if (h2.v = h2.o.v = true, h2.e) {
            if (p2)
              for (o2 = 0, u2 = s2.length; o2 < u2; ++o2)
                i2.point((f2 = s2[o2])[0], f2[1]);
            else
              r10(h2.x, h2.n.x, 1, i2);
            h2 = h2.n;
          } else {
            if (p2)
              for (o2 = (s2 = h2.p.z).length - 1; o2 >= 0; --o2)
                i2.point((f2 = s2[o2])[0], f2[1]);
            else
              r10(h2.x, h2.p.x, -1, i2);
            h2 = h2.p;
          }
          s2 = (h2 = h2.o).z, p2 = !p2;
        } while (!h2.v);
        i2.lineEnd();
      }
    }
  }
  function r2(t10) {
    if (n10 = t10.length) {
      for (var n10, e10, r10 = 0, i2 = t10[0]; ++r10 < n10; )
        i2.n = e10 = t10[r10], e10.p = i2, i2 = e10;
      i2.n = e10 = t10[0], e10.p = i2;
    }
  }
  function r6(t10) {
    return [em(t10[1], t10[0]), eN(t10[2])];
  }
  function r3(t10) {
    var n10 = t10[0], e10 = t10[1], r10 = ew(e10);
    return [r10 * ew(n10), r10 * eb(n10), eb(e10)];
  }
  function r5(t10, n10) {
    return t10[0] * n10[0] + t10[1] * n10[1] + t10[2] * n10[2];
  }
  function r4(t10, n10) {
    return [t10[1] * n10[2] - t10[2] * n10[1], t10[2] * n10[0] - t10[0] * n10[2], t10[0] * n10[1] - t10[1] * n10[0]];
  }
  function r7(t10, n10) {
    t10[0] += n10[0], t10[1] += n10[1], t10[2] += n10[2];
  }
  function r8(t10, n10) {
    return [t10[0] * n10, t10[1] * n10, t10[2] * n10];
  }
  function r9(t10) {
    var n10 = eS(t10[0] * t10[0] + t10[1] * t10[1] + t10[2] * t10[2]);
    t10[0] /= n10, t10[1] /= n10, t10[2] /= n10;
  }
  function it(t10) {
    return ey(t10[0]) <= ec ? t10[0] : eE(t10[0]) * ((ey(t10[0]) + ec) % ed - ec);
  }
  function ie(t10) {
    return Array.from(function* (t11) {
      for (let n10 of t11)
        yield* n10;
    }(t10));
  }
  function ir(t10, n10, e10, r10) {
    return function(i2) {
      var o2, u2, a2, l2 = n10(i2), s2 = rZ(), f2 = n10(s2), c2 = false, h2 = { point: p2, lineStart: v2, lineEnd: g2, polygonStart: function() {
        h2.point = y2, h2.lineStart = _2, h2.lineEnd = m2, u2 = [], o2 = [];
      }, polygonEnd: function() {
        h2.point = p2, h2.lineStart = v2, h2.lineEnd = g2, u2 = ie(u2);
        var t11 = function(t12, n11) {
          var e11 = it(n11), r11 = n11[1], i3 = eb(r11), o3 = [eb(e11), -ew(e11), 0], u3 = 0, a3 = 0, l3 = new ef();
          1 === i3 ? r11 = eh + 1e-6 : -1 === i3 && (r11 = -eh - 1e-6);
          for (var s3 = 0, f3 = t12.length; s3 < f3; ++s3)
            if (h3 = (c3 = t12[s3]).length)
              for (var c3, h3, p3 = c3[h3 - 1], d3 = it(p3), v3 = p3[1] / 2 + ep, g3 = eb(v3), y3 = ew(v3), _3 = 0; _3 < h3; ++_3, d3 = w2, g3 = b2, y3 = E2, p3 = m3) {
                var m3 = c3[_3], w2 = it(m3), x2 = m3[1] / 2 + ep, b2 = eb(x2), E2 = ew(x2), S2 = w2 - d3, N2 = S2 >= 0 ? 1 : -1, M2 = N2 * S2, k2 = M2 > ec, A2 = g3 * b2;
                if (l3.add(em(A2 * N2 * eb(M2), y3 * E2 + A2 * ew(M2))), u3 += k2 ? S2 + N2 * ed : S2, k2 ^ d3 >= e11 ^ w2 >= e11) {
                  var P2 = r4(r3(p3), r3(m3));
                  r9(P2);
                  var $2 = r4(o3, P2);
                  r9($2);
                  var C2 = (k2 ^ S2 >= 0 ? -1 : 1) * eN($2[2]);
                  (r11 > C2 || r11 === C2 && (P2[0] || P2[1])) && (a3 += k2 ^ S2 >= 0 ? 1 : -1);
                }
              }
          return (u3 < -1e-6 || u3 < 1e-6 && l3 < -1e-12) ^ 1 & a3;
        }(o2, r10);
        u2.length ? (c2 || (i2.polygonStart(), c2 = true), r1(u2, io, t11, e10, i2)) : t11 && (c2 || (i2.polygonStart(), c2 = true), i2.lineStart(), e10(null, null, 1, i2), i2.lineEnd()), c2 && (i2.polygonEnd(), c2 = false), u2 = o2 = null;
      }, sphere: function() {
        i2.polygonStart(), i2.lineStart(), e10(null, null, 1, i2), i2.lineEnd(), i2.polygonEnd();
      } };
      function p2(n11, e11) {
        t10(n11, e11) && i2.point(n11, e11);
      }
      function d2(t11, n11) {
        l2.point(t11, n11);
      }
      function v2() {
        h2.point = d2, l2.lineStart();
      }
      function g2() {
        h2.point = p2, l2.lineEnd();
      }
      function y2(t11, n11) {
        a2.push([t11, n11]), f2.point(t11, n11);
      }
      function _2() {
        f2.lineStart(), a2 = [];
      }
      function m2() {
        y2(a2[0][0], a2[0][1]), f2.lineEnd();
        var t11, n11, e11, r11, l3 = f2.clean(), h3 = s2.result(), p3 = h3.length;
        if (a2.pop(), o2.push(a2), a2 = null, p3) {
          if (1 & l3) {
            if ((n11 = (e11 = h3[0]).length - 1) > 0) {
              for (c2 || (i2.polygonStart(), c2 = true), i2.lineStart(), t11 = 0; t11 < n11; ++t11)
                i2.point((r11 = e11[t11])[0], r11[1]);
              i2.lineEnd();
            }
            return;
          }
          p3 > 1 && 2 & l3 && h3.push(h3.pop().concat(h3.shift())), u2.push(h3.filter(ii));
        }
      }
      return h2;
    };
  }
  function ii(t10) {
    return t10.length > 1;
  }
  function io(t10, n10) {
    return ((t10 = t10.x)[0] < 0 ? t10[1] - eh - 1e-6 : eh - t10[1]) - ((n10 = n10.x)[0] < 0 ? n10[1] - eh - 1e-6 : eh - n10[1]);
  }
  var iu = ir(function() {
    return true;
  }, function(t10) {
    var n10, e10 = NaN, r10 = NaN, i2 = NaN;
    return { lineStart: function() {
      t10.lineStart(), n10 = 1;
    }, point: function(o2, u2) {
      var a2, l2, s2, f2, c2, h2, p2 = o2 > 0 ? ec : -ec, d2 = ey(o2 - e10);
      1e-6 > ey(d2 - ec) ? (t10.point(e10, r10 = (r10 + u2) / 2 > 0 ? eh : -eh), t10.point(i2, r10), t10.lineEnd(), t10.lineStart(), t10.point(p2, r10), t10.point(o2, r10), n10 = 0) : i2 !== p2 && d2 >= ec && (1e-6 > ey(e10 - i2) && (e10 -= 1e-6 * i2), 1e-6 > ey(o2 - p2) && (o2 -= 1e-6 * p2), a2 = e10, l2 = r10, r10 = ey(h2 = eb(a2 - (s2 = o2))) > 1e-6 ? e_((eb(l2) * (c2 = ew(u2)) * eb(s2) - eb(u2) * (f2 = ew(l2)) * eb(a2)) / (f2 * c2 * h2)) : (l2 + u2) / 2, t10.point(i2, r10), t10.lineEnd(), t10.lineStart(), t10.point(p2, r10), n10 = 0), t10.point(e10 = o2, r10 = u2), i2 = p2;
    }, lineEnd: function() {
      t10.lineEnd(), e10 = r10 = NaN;
    }, clean: function() {
      return 2 - n10;
    } };
  }, function(t10, n10, e10, r10) {
    var i2;
    if (null == t10)
      i2 = e10 * eh, r10.point(-ec, i2), r10.point(0, i2), r10.point(ec, i2), r10.point(ec, 0), r10.point(ec, -i2), r10.point(0, -i2), r10.point(-ec, -i2), r10.point(-ec, 0), r10.point(-ec, i2);
    else if (ey(t10[0] - n10[0]) > 1e-6) {
      var o2 = t10[0] < n10[0] ? ec : -ec;
      i2 = e10 * o2 / 2, r10.point(-o2, i2), r10.point(0, i2), r10.point(o2, i2);
    } else
      r10.point(n10[0], n10[1]);
  }, [-ec, -eh]);
  function ia(t10, n10) {
    n10 = r3(n10), n10[0] -= t10, r9(n10);
    var e10, r10 = (e10 = -n10[1]) > 1 ? 0 : e10 < -1 ? ec : Math.acos(e10);
    return ((0 > -n10[2] ? -r10 : r10) + ed - 1e-6) % ed;
  }
  function il(t10, n10) {
    function e10(e11, r10) {
      return n10((e11 = t10(e11, r10))[0], e11[1]);
    }
    return t10.invert && n10.invert && (e10.invert = function(e11, r10) {
      return (e11 = n10.invert(e11, r10)) && t10.invert(e11[0], e11[1]);
    }), e10;
  }
  function is(t10, n10) {
    return ey(t10) > ec && (t10 -= Math.round(t10 / ed) * ed), [t10, n10];
  }
  function ic(t10) {
    return function(n10, e10) {
      return ey(n10 += t10) > ec && (n10 -= Math.round(n10 / ed) * ed), [n10, e10];
    };
  }
  function ih(t10) {
    var n10 = ic(t10);
    return n10.invert = ic(-t10), n10;
  }
  function ip(t10, n10) {
    var e10 = ew(t10), r10 = eb(t10), i2 = ew(n10), o2 = eb(n10);
    function u2(t11, n11) {
      var u3 = ew(n11), a2 = ew(t11) * u3, l2 = eb(t11) * u3, s2 = eb(n11), f2 = s2 * e10 + a2 * r10;
      return [em(l2 * i2 - f2 * o2, a2 * e10 - s2 * r10), eN(f2 * i2 + l2 * o2)];
    }
    return u2.invert = function(t11, n11) {
      var u3 = ew(n11), a2 = ew(t11) * u3, l2 = eb(t11) * u3, s2 = eb(n11), f2 = s2 * i2 - l2 * o2;
      return [em(l2 * i2 + s2 * o2, a2 * e10 + f2 * r10), eN(f2 * e10 - a2 * r10)];
    }, u2;
  }
  function id(t10) {
    return function(n10) {
      var e10 = new iv();
      for (var r10 in t10)
        e10[r10] = t10[r10];
      return e10.stream = n10, e10;
    };
  }
  function iv() {
  }
  function ig(t10, n10, e10) {
    var r10 = t10.clipExtent && t10.clipExtent();
    return t10.scale(150).translate([0, 0]), null != r10 && t10.clipExtent(null), eO(e10, t10.stream(rm)), n10(rm.result()), null != r10 && t10.clipExtent(r10), t10;
  }
  function iy(t10, n10, e10) {
    return ig(t10, function(e11) {
      var r10 = n10[1][0] - n10[0][0], i2 = n10[1][1] - n10[0][1], o2 = Math.min(r10 / (e11[1][0] - e11[0][0]), i2 / (e11[1][1] - e11[0][1])), u2 = +n10[0][0] + (r10 - o2 * (e11[1][0] + e11[0][0])) / 2, a2 = +n10[0][1] + (i2 - o2 * (e11[1][1] + e11[0][1])) / 2;
      t10.scale(150 * o2).translate([u2, a2]);
    }, e10);
  }
  is.invert = is, iv.prototype = { constructor: iv, point: function(t10, n10) {
    this.stream.point(t10, n10);
  }, sphere: function() {
    this.stream.sphere();
  }, lineStart: function() {
    this.stream.lineStart();
  }, lineEnd: function() {
    this.stream.lineEnd();
  }, polygonStart: function() {
    this.stream.polygonStart();
  }, polygonEnd: function() {
    this.stream.polygonEnd();
  } };
  var i_ = ew(30 * eg);
  function im(t10, n10) {
    return +n10 ? function(t11, n11) {
      function e10(r10, i2, o2, u2, a2, l2, s2, f2, c2, h2, p2, d2, v2, g2) {
        var y2 = s2 - r10, _2 = f2 - i2, m2 = y2 * y2 + _2 * _2;
        if (m2 > 4 * n11 && v2--) {
          var w2 = u2 + h2, x2 = a2 + p2, b2 = l2 + d2, E2 = eS(w2 * w2 + x2 * x2 + b2 * b2), S2 = eN(b2 /= E2), N2 = 1e-6 > ey(ey(b2) - 1) || 1e-6 > ey(o2 - c2) ? (o2 + c2) / 2 : em(x2, w2), M2 = t11(N2, S2), k2 = M2[0], A2 = M2[1], P2 = k2 - r10, $2 = A2 - i2, C2 = _2 * P2 - y2 * $2;
          (C2 * C2 / m2 > n11 || ey((y2 * P2 + _2 * $2) / m2 - 0.5) > 0.3 || u2 * h2 + a2 * p2 + l2 * d2 < i_) && (e10(r10, i2, o2, u2, a2, l2, k2, A2, N2, w2 /= E2, x2 /= E2, b2, v2, g2), g2.point(k2, A2), e10(k2, A2, N2, w2, x2, b2, s2, f2, c2, h2, p2, d2, v2, g2));
        }
      }
      return function(n12) {
        var r10, i2, o2, u2, a2, l2, s2, f2, c2, h2, p2, d2, v2 = { point: g2, lineStart: y2, lineEnd: m2, polygonStart: function() {
          n12.polygonStart(), v2.lineStart = w2;
        }, polygonEnd: function() {
          n12.polygonEnd(), v2.lineStart = y2;
        } };
        function g2(e11, r11) {
          e11 = t11(e11, r11), n12.point(e11[0], e11[1]);
        }
        function y2() {
          f2 = NaN, v2.point = _2, n12.lineStart();
        }
        function _2(r11, i3) {
          var o3 = r3([r11, i3]), u3 = t11(r11, i3);
          e10(f2, c2, s2, h2, p2, d2, f2 = u3[0], c2 = u3[1], s2 = r11, h2 = o3[0], p2 = o3[1], d2 = o3[2], 16, n12), n12.point(f2, c2);
        }
        function m2() {
          v2.point = g2, n12.lineEnd();
        }
        function w2() {
          y2(), v2.point = x2, v2.lineEnd = b2;
        }
        function x2(t12, n13) {
          _2(r10 = t12, n13), i2 = f2, o2 = c2, u2 = h2, a2 = p2, l2 = d2, v2.point = _2;
        }
        function b2() {
          e10(f2, c2, s2, h2, p2, d2, i2, o2, r10, u2, a2, l2, 16, n12), v2.lineEnd = m2, m2();
        }
        return v2;
      };
    }(t10, n10) : id({ point: function(n11, e10) {
      n11 = t10(n11, e10), this.stream.point(n11[0], n11[1]);
    } });
  }
  var iw = id({ point: function(t10, n10) {
    this.stream.point(t10 * eg, n10 * eg);
  } });
  function ix(t10, n10, e10, r10, i2, o2) {
    if (!o2)
      return function(t11, n11, e11, r11, i3) {
        function o3(o4, u3) {
          return [n11 + t11 * (o4 *= r11), e11 - t11 * (u3 *= i3)];
        }
        return o3.invert = function(o4, u3) {
          return [(o4 - n11) / t11 * r11, (e11 - u3) / t11 * i3];
        }, o3;
      }(t10, n10, e10, r10, i2);
    var u2 = ew(o2), a2 = eb(o2), l2 = u2 * t10, s2 = a2 * t10, f2 = u2 / t10, c2 = a2 / t10, h2 = (a2 * e10 - u2 * n10) / t10, p2 = (a2 * n10 + u2 * e10) / t10;
    function d2(t11, o3) {
      return [l2 * (t11 *= r10) - s2 * (o3 *= i2) + n10, e10 - s2 * t11 - l2 * o3];
    }
    return d2.invert = function(t11, n11) {
      return [r10 * (f2 * t11 - c2 * n11 + h2), i2 * (p2 - c2 * t11 - f2 * n11)];
    }, d2;
  }
  function ib(t10, n10) {
    return [ew(n10) * eb(t10), eb(n10)];
  }
  function iE() {
    return function(t10) {
      var n10, e10, r10, i2, o2, u2, a2, l2, s2, f2, c2 = 150, h2 = 480, p2 = 250, d2 = 0, v2 = 0, g2 = 0, y2 = 0, _2 = 0, m2 = 0, w2 = 1, x2 = 1, b2 = null, E2 = iu, S2 = null, N2 = rr, M2 = 0.5;
      function k2(t11) {
        return l2(t11[0] * eg, t11[1] * eg);
      }
      function A2(t11) {
        return (t11 = l2.invert(t11[0], t11[1])) && [t11[0] * ev, t11[1] * ev];
      }
      function P2() {
        var t11, r11, i3, o3 = ix(c2, 0, 0, w2, x2, m2).apply(null, n10(d2, v2)), s3 = ix(c2, h2 - o3[0], p2 - o3[1], w2, x2, m2);
        return t11 = g2, r11 = y2, i3 = _2, e10 = (t11 %= ed) ? r11 || i3 ? il(ih(t11), ip(r11, i3)) : ih(t11) : r11 || i3 ? ip(r11, i3) : is, a2 = il(n10, s3), l2 = il(e10, a2), u2 = im(a2, M2), $2();
      }
      function $2() {
        return s2 = f2 = null, k2;
      }
      return k2.stream = function(t11) {
        var n11;
        return s2 && f2 === t11 ? s2 : s2 = iw((n11 = e10, id({ point: function(t12, e11) {
          var r11 = n11(t12, e11);
          return this.stream.point(r11[0], r11[1]);
        } }))(E2(u2(N2(f2 = t11)))));
      }, k2.preclip = function(t11) {
        return arguments.length ? (E2 = t11, b2 = void 0, $2()) : E2;
      }, k2.postclip = function(t11) {
        return arguments.length ? (N2 = t11, S2 = r10 = i2 = o2 = null, $2()) : N2;
      }, k2.clipAngle = function(t11) {
        return arguments.length ? (E2 = +t11 ? function(t12) {
          var n11 = ew(t12), e11 = 6 * eg, r11 = n11 > 0, i3 = ey(n11) > 1e-6;
          function o3(t13, e12) {
            return ew(t13) * ew(e12) > n11;
          }
          function u3(t13, e12, r12) {
            var i4 = r3(t13), o4 = r3(e12), u4 = [1, 0, 0], a4 = r4(i4, o4), l3 = r5(a4, a4), s3 = a4[0], f3 = l3 - s3 * s3;
            if (!f3)
              return !r12 && t13;
            var c3 = n11 * l3 / f3, h3 = -n11 * s3 / f3, p3 = r4(u4, a4), d3 = r8(u4, c3);
            r7(d3, r8(a4, h3));
            var v3 = r5(d3, p3), g3 = r5(p3, p3), y3 = v3 * v3 - g3 * (r5(d3, d3) - 1);
            if (!(y3 < 0)) {
              var _3 = eS(y3), m3 = r8(p3, (-v3 - _3) / g3);
              if (r7(m3, d3), m3 = r6(m3), !r12)
                return m3;
              var w3, x3 = t13[0], b3 = e12[0], E3 = t13[1], S3 = e12[1];
              b3 < x3 && (w3 = x3, x3 = b3, b3 = w3);
              var N3 = b3 - x3, M3 = 1e-6 > ey(N3 - ec), k3 = M3 || N3 < 1e-6;
              if (!M3 && S3 < E3 && (w3 = E3, E3 = S3, S3 = w3), k3 ? M3 ? E3 + S3 > 0 ^ m3[1] < (1e-6 > ey(m3[0] - x3) ? E3 : S3) : E3 <= m3[1] && m3[1] <= S3 : N3 > ec ^ (x3 <= m3[0] && m3[0] <= b3)) {
                var A3 = r8(p3, (-v3 + _3) / g3);
                return r7(A3, d3), [m3, r6(A3)];
              }
            }
          }
          function a3(n12, e12) {
            var i4 = r11 ? t12 : ec - t12, o4 = 0;
            return n12 < -i4 ? o4 |= 1 : n12 > i4 && (o4 |= 2), e12 < -i4 ? o4 |= 4 : e12 > i4 && (o4 |= 8), o4;
          }
          return ir(o3, function(t13) {
            var n12, e12, l3, s3, f3;
            return { lineStart: function() {
              s3 = l3 = false, f3 = 1;
            }, point: function(c3, h3) {
              var p3, d3, v3 = [c3, h3], g3 = o3(c3, h3), y3 = r11 ? g3 ? 0 : a3(c3, h3) : g3 ? a3(c3 + (c3 < 0 ? ec : -ec), h3) : 0;
              !n12 && (s3 = l3 = g3) && t13.lineStart(), g3 !== l3 && (!(d3 = u3(n12, v3)) || rQ(n12, d3) || rQ(v3, d3)) && (v3[2] = 1), g3 !== l3 ? (f3 = 0, g3 ? (t13.lineStart(), d3 = u3(v3, n12), t13.point(d3[0], d3[1])) : (d3 = u3(n12, v3), t13.point(d3[0], d3[1], 2), t13.lineEnd()), n12 = d3) : i3 && n12 && r11 ^ g3 && !(y3 & e12) && (p3 = u3(v3, n12, true)) && (f3 = 0, r11 ? (t13.lineStart(), t13.point(p3[0][0], p3[0][1]), t13.point(p3[1][0], p3[1][1]), t13.lineEnd()) : (t13.point(p3[1][0], p3[1][1]), t13.lineEnd(), t13.lineStart(), t13.point(p3[0][0], p3[0][1], 3))), !g3 || n12 && rQ(n12, v3) || t13.point(v3[0], v3[1]), n12 = v3, l3 = g3, e12 = y3;
            }, lineEnd: function() {
              l3 && t13.lineEnd(), n12 = null;
            }, clean: function() {
              return f3 | (s3 && l3) << 1;
            } };
          }, function(n12, r12, i4, o4) {
            !function(t13, n13, e12, r13, i5, o5) {
              if (e12) {
                var u4 = ew(n13), a4 = eb(n13), l3 = r13 * e12;
                null == i5 ? (i5 = n13 + r13 * ed, o5 = n13 - l3 / 2) : (i5 = ia(u4, i5), o5 = ia(u4, o5), (r13 > 0 ? i5 < o5 : i5 > o5) && (i5 += r13 * ed));
                for (var s3, f3 = i5; r13 > 0 ? f3 > o5 : f3 < o5; f3 -= l3)
                  s3 = r6([u4, -a4 * ew(f3), -a4 * eb(f3)]), t13.point(s3[0], s3[1]);
              }
            }(o4, t12, e11, i4, n12, r12);
          }, r11 ? [0, -t12] : [-ec, t12 - ec]);
        }(b2 = t11 * eg) : (b2 = null, iu), $2()) : b2 * ev;
      }, k2.clipExtent = function(t11) {
        return arguments.length ? (N2 = null == t11 ? (S2 = r10 = i2 = o2 = null, rr) : function(t12, n11, e11, r11) {
          function i3(i4, o4) {
            return t12 <= i4 && i4 <= e11 && n11 <= o4 && o4 <= r11;
          }
          function o3(i4, o4, a4, s3) {
            var f3 = 0, c3 = 0;
            if (null == i4 || (f3 = u3(i4, a4)) !== (c3 = u3(o4, a4)) || 0 > l3(i4, o4) ^ a4 > 0)
              do
                s3.point(0 === f3 || 3 === f3 ? t12 : e11, f3 > 1 ? r11 : n11);
              while ((f3 = (f3 + a4 + 4) % 4) !== c3);
            else
              s3.point(o4[0], o4[1]);
          }
          function u3(r12, i4) {
            return 1e-6 > ey(r12[0] - t12) ? i4 > 0 ? 0 : 3 : 1e-6 > ey(r12[0] - e11) ? i4 > 0 ? 2 : 1 : 1e-6 > ey(r12[1] - n11) ? i4 > 0 ? 1 : 0 : i4 > 0 ? 3 : 2;
          }
          function a3(t13, n12) {
            return l3(t13.x, n12.x);
          }
          function l3(t13, n12) {
            var e12 = u3(t13, 1), r12 = u3(n12, 1);
            return e12 !== r12 ? e12 - r12 : 0 === e12 ? n12[1] - t13[1] : 1 === e12 ? t13[0] - n12[0] : 2 === e12 ? t13[1] - n12[1] : n12[0] - t13[0];
          }
          return function(u4) {
            var l4, s3, f3, c3, h3, p3, d3, v3, g3, y3, _3, m3 = u4, w3 = rZ(), x3 = { point: b3, lineStart: function() {
              x3.point = E3, s3 && s3.push(f3 = []), y3 = true, g3 = false, d3 = v3 = NaN;
            }, lineEnd: function() {
              l4 && (E3(c3, h3), p3 && g3 && w3.rejoin(), l4.push(w3.result())), x3.point = b3, g3 && m3.lineEnd();
            }, polygonStart: function() {
              m3 = w3, l4 = [], s3 = [], _3 = true;
            }, polygonEnd: function() {
              var n12 = function() {
                for (var n13 = 0, e13 = 0, i5 = s3.length; e13 < i5; ++e13)
                  for (var o4, u5, a4 = s3[e13], l5 = 1, f4 = a4.length, c4 = a4[0], h4 = c4[0], p4 = c4[1]; l5 < f4; ++l5)
                    o4 = h4, u5 = p4, h4 = (c4 = a4[l5])[0], p4 = c4[1], u5 <= r11 ? p4 > r11 && (h4 - o4) * (r11 - u5) > (p4 - u5) * (t12 - o4) && ++n13 : p4 <= r11 && (h4 - o4) * (r11 - u5) < (p4 - u5) * (t12 - o4) && --n13;
                return n13;
              }(), e12 = _3 && n12, i4 = (l4 = ie(l4)).length;
              (e12 || i4) && (u4.polygonStart(), e12 && (u4.lineStart(), o3(null, null, 1, u4), u4.lineEnd()), i4 && r1(l4, a3, n12, o3, u4), u4.polygonEnd()), m3 = u4, l4 = s3 = f3 = null;
            } };
            function b3(t13, n12) {
              i3(t13, n12) && m3.point(t13, n12);
            }
            function E3(o4, u5) {
              var a4 = i3(o4, u5);
              if (s3 && f3.push([o4, u5]), y3)
                c3 = o4, h3 = u5, p3 = a4, y3 = false, a4 && (m3.lineStart(), m3.point(o4, u5));
              else if (a4 && g3)
                m3.point(o4, u5);
              else {
                var l5 = [d3 = Math.max(-1e9, Math.min(1e9, d3)), v3 = Math.max(-1e9, Math.min(1e9, v3))], w4 = [o4 = Math.max(-1e9, Math.min(1e9, o4)), u5 = Math.max(-1e9, Math.min(1e9, u5))];
                (function(t13, n12, e12, r12, i4, o5) {
                  var u6, a5 = t13[0], l6 = t13[1], s4 = n12[0], f4 = n12[1], c4 = 0, h4 = 1, p4 = s4 - a5, d4 = f4 - l6;
                  if (u6 = e12 - a5, p4 || !(u6 > 0)) {
                    if (u6 /= p4, p4 < 0) {
                      if (u6 < c4)
                        return;
                      u6 < h4 && (h4 = u6);
                    } else if (p4 > 0) {
                      if (u6 > h4)
                        return;
                      u6 > c4 && (c4 = u6);
                    }
                    if (u6 = i4 - a5, p4 || !(u6 < 0)) {
                      if (u6 /= p4, p4 < 0) {
                        if (u6 > h4)
                          return;
                        u6 > c4 && (c4 = u6);
                      } else if (p4 > 0) {
                        if (u6 < c4)
                          return;
                        u6 < h4 && (h4 = u6);
                      }
                      if (u6 = r12 - l6, d4 || !(u6 > 0)) {
                        if (u6 /= d4, d4 < 0) {
                          if (u6 < c4)
                            return;
                          u6 < h4 && (h4 = u6);
                        } else if (d4 > 0) {
                          if (u6 > h4)
                            return;
                          u6 > c4 && (c4 = u6);
                        }
                        if (u6 = o5 - l6, d4 || !(u6 < 0)) {
                          if (u6 /= d4, d4 < 0) {
                            if (u6 > h4)
                              return;
                            u6 > c4 && (c4 = u6);
                          } else if (d4 > 0) {
                            if (u6 < c4)
                              return;
                            u6 < h4 && (h4 = u6);
                          }
                          return c4 > 0 && (t13[0] = a5 + c4 * p4, t13[1] = l6 + c4 * d4), h4 < 1 && (n12[0] = a5 + h4 * p4, n12[1] = l6 + h4 * d4), true;
                        }
                      }
                    }
                  }
                })(l5, w4, t12, n11, e11, r11) ? (g3 || (m3.lineStart(), m3.point(l5[0], l5[1])), m3.point(w4[0], w4[1]), a4 || m3.lineEnd(), _3 = false) : a4 && (m3.lineStart(), m3.point(o4, u5), _3 = false);
              }
              d3 = o4, v3 = u5, g3 = a4;
            }
            return x3;
          };
        }(S2 = +t11[0][0], r10 = +t11[0][1], i2 = +t11[1][0], o2 = +t11[1][1]), $2()) : null == S2 ? null : [[S2, r10], [i2, o2]];
      }, k2.scale = function(t11) {
        return arguments.length ? (c2 = +t11, P2()) : c2;
      }, k2.translate = function(t11) {
        return arguments.length ? (h2 = +t11[0], p2 = +t11[1], P2()) : [h2, p2];
      }, k2.center = function(t11) {
        return arguments.length ? (d2 = t11[0] % 360 * eg, v2 = t11[1] % 360 * eg, P2()) : [d2 * ev, v2 * ev];
      }, k2.rotate = function(t11) {
        return arguments.length ? (g2 = t11[0] % 360 * eg, y2 = t11[1] % 360 * eg, _2 = t11.length > 2 ? t11[2] % 360 * eg : 0, P2()) : [g2 * ev, y2 * ev, _2 * ev];
      }, k2.angle = function(t11) {
        return arguments.length ? (m2 = t11 % 360 * eg, P2()) : m2 * ev;
      }, k2.reflectX = function(t11) {
        return arguments.length ? (w2 = t11 ? -1 : 1, P2()) : w2 < 0;
      }, k2.reflectY = function(t11) {
        return arguments.length ? (x2 = t11 ? -1 : 1, P2()) : x2 < 0;
      }, k2.precision = function(t11) {
        return arguments.length ? (u2 = im(a2, M2 = t11 * t11), $2()) : eS(M2);
      }, k2.fitExtent = function(t11, n11) {
        return iy(k2, t11, n11);
      }, k2.fitSize = function(t11, n11) {
        return iy(k2, [[0, 0], t11], n11);
      }, k2.fitWidth = function(t11, n11) {
        return ig(k2, function(n12) {
          var e11 = +t11, r11 = e11 / (n12[1][0] - n12[0][0]), i3 = (e11 - r11 * (n12[1][0] + n12[0][0])) / 2, o3 = -r11 * n12[0][1];
          k2.scale(150 * r11).translate([i3, o3]);
        }, n11);
      }, k2.fitHeight = function(t11, n11) {
        return ig(k2, function(n12) {
          var e11 = +t11, r11 = e11 / (n12[1][1] - n12[0][1]), i3 = -r11 * n12[0][0], o3 = (e11 - r11 * (n12[1][1] + n12[0][1])) / 2;
          k2.scale(150 * r11).translate([i3, o3]);
        }, n11);
      }, function() {
        return n10 = t10.apply(this, arguments), k2.invert = n10.invert && A2, P2();
      };
    }(function() {
      return ib;
    })().scale(249.5).clipAngle(90.000001);
  }
  function iS(t10) {
    return "string" == typeof t10 ? new tv([[document.querySelector(t10)]], [document.documentElement]) : new tv([[t10]], td);
  }
  function iN(t10, n10, e10) {
    this.k = t10, this.x = n10, this.y = e10;
  }
  ib.invert = function(t10, n10) {
    var e10 = eS(t10 * t10 + n10 * n10), r10 = eN(e10), i2 = eb(r10), o2 = ew(r10);
    return [em(t10 * i2, e10 * o2), eN(e10 && n10 * i2 / e10)];
  }, iN.prototype = { constructor: iN, scale: function(t10) {
    return 1 === t10 ? this : new iN(this.k * t10, this.x, this.y);
  }, translate: function(t10, n10) {
    return 0 === t10 & 0 === n10 ? this : new iN(this.k, this.x + this.k * t10, this.y + this.k * n10);
  }, apply: function(t10) {
    return [t10[0] * this.k + this.x, t10[1] * this.k + this.y];
  }, applyX: function(t10) {
    return t10 * this.k + this.x;
  }, applyY: function(t10) {
    return t10 * this.k + this.y;
  }, invert: function(t10) {
    return [(t10[0] - this.x) / this.k, (t10[1] - this.y) / this.k];
  }, invertX: function(t10) {
    return (t10 - this.x) / this.k;
  }, invertY: function(t10) {
    return (t10 - this.y) / this.k;
  }, rescaleX: function(t10) {
    return t10.copy().domain(t10.range().map(this.invertX, this).map(t10.invert, t10));
  }, rescaleY: function(t10) {
    return t10.copy().domain(t10.range().map(this.invertY, this).map(t10.invert, t10));
  }, toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  } }, new iN(1, 0, 0), iN.prototype;
} }]);
//# sourceMappingURL=635-245410a66590f50f.js.map
