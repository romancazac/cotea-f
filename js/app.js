/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, i = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = i ? `${i}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !i),
            !i && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !i && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    i = (e, t = 500, i = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          i && e.style.removeProperty("height");
        let s = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = i ? `${i}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = s + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } })
              );
          }, t);
      }
    },
    s = !0,
    n = (e = 500) => {
      let t = document.querySelector("body");
      if (s) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (s = !1),
          setTimeout(function () {
            s = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (s) {
        let i = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < i.length; e++) {
          i[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (s = !1),
          setTimeout(function () {
            s = !0;
          }, e);
      }
    };
  function o(e, t) {
    const i = Array.from(e).filter(function (e, i, s) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (i.length) {
      const e = [];
      i.forEach((i) => {
        const s = {},
          n = i.dataset[t].split(",");
        (s.value = n[0]),
          (s.type = n[1] ? n[1].trim() : "max"),
          (s.item = i),
          e.push(s);
      });
      let s = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      s = (function (e) {
        return e.filter(function (e, t, i) {
          return i.indexOf(e) === t;
        });
      })(s);
      const n = [];
      if (s.length)
        return (
          s.forEach((t) => {
            const i = t.split(","),
              s = i[1],
              r = i[2],
              o = window.matchMedia(i[0]),
              l = e.filter(function (e) {
                if (e.value === s && e.type === r) return !0;
              });
            n.push({ itemsArray: l, matchMedia: o });
          }),
          n
        );
    }
  }
  function l(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function a(e = {}, t = {}) {
    Object.keys(t).forEach((i) => {
      void 0 === e[i]
        ? (e[i] = t[i])
        : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i]);
    });
  }
  const d = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function c() {
    const e = "undefined" != typeof document ? document : {};
    return a(e, d), e;
  }
  const p = {
    document: d,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function u() {
    const e = "undefined" != typeof window ? window : {};
    return a(e, p), e;
  }
  class h extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function g(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...g(e)) : t.push(e);
      }),
      t
    );
  }
  function m(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function f(e, t) {
    const i = u(),
      s = c();
    let n = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(n);
    if ("string" == typeof e) {
      const i = e.trim();
      if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
        let e = "div";
        0 === i.indexOf("<li") && (e = "ul"),
          0 === i.indexOf("<tr") && (e = "tbody"),
          (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
          0 === i.indexOf("<tbody") && (e = "table"),
          0 === i.indexOf("<option") && (e = "select");
        const t = s.createElement(e);
        t.innerHTML = i;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const i = [],
            s = t.querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) i.push(s[e]);
          return i;
        })(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      n = e;
    }
    return new h(
      (function (e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      })(n)
    );
  }
  f.fn = h.prototype;
  const v = "resize scroll".split(" ");
  function y(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          v.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  y("click"),
    y("blur"),
    y("focus"),
    y("focusin"),
    y("focusout"),
    y("keyup"),
    y("keydown"),
    y("keypress"),
    y("submit"),
    y("change"),
    y("mousedown"),
    y("mousemove"),
    y("mouseup"),
    y("mouseenter"),
    y("mouseleave"),
    y("mouseout"),
    y("mouseover"),
    y("touchstart"),
    y("touchend"),
    y("touchmove"),
    y("resize"),
    y("scroll");
  const b = {
    addClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      return (
        m(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let i = 0; i < this.length; i += 1)
        if (2 === arguments.length) this[i].setAttribute(e, t);
        else
          for (const t in e) (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, i, s, n] = e;
      function r(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), f(t).is(i))) s.apply(t, n);
        else {
          const e = f(t).parents();
          for (let t = 0; t < e.length; t += 1)
            f(e[t]).is(i) && s.apply(e[t], n);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
      }
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const l = t.split(" ");
      let a;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (a = 0; a < l.length; a += 1) {
            const e = l[a];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: s, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
        else
          for (a = 0; a < l.length; a += 1) {
            const e = l[a];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, i, s, n] = e;
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          let o;
          if (
            (!i && r.dom7Listeners
              ? (o = r.dom7Listeners[t])
              : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
            o && o.length)
          )
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const i = o[e];
              (s && i.listener === s) ||
              (s &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === s)
                ? (r.removeEventListener(t, i.proxyListener, n), o.splice(e, 1))
                : s ||
                  (r.removeEventListener(t, i.proxyListener, n),
                  o.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = u(),
        i = e[0].split(" "),
        s = e[1];
      for (let n = 0; n < i.length; n += 1) {
        const r = i[n];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i];
          if (t.CustomEvent) {
            const i = new t.CustomEvent(r, {
              detail: s,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(i),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function i(s) {
            s.target === this && (e.call(this, s), t.off("transitionend", i));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = u();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = u(),
          t = c(),
          i = this[0],
          s = i.getBoundingClientRect(),
          n = t.body,
          r = i.clientTop || n.clientTop || 0,
          o = i.clientLeft || n.clientLeft || 0,
          l = i === e ? e.scrollY : i.scrollTop,
          a = i === e ? e.scrollX : i.scrollLeft;
        return { top: s.top + l - r, left: s.left + a - o };
      }
      return null;
    },
    css: function (e, t) {
      const i = u();
      let s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1)
            for (const t in e) this[s].style[t] = e[t];
          return this;
        }
        if (this[0])
          return i.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, i) => {
            e.apply(t, [t, i]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = u(),
        i = c(),
        s = this[0];
      let n, r;
      if (!s || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (s.matches) return s.matches(e);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
        if (s.msMatchesSelector) return s.msMatchesSelector(e);
        for (n = f(e), r = 0; r < n.length; r += 1) if (n[r] === s) return !0;
        return !1;
      }
      if (e === i) return s === i;
      if (e === t) return s === t;
      if (e.nodeType || e instanceof h) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
          if (n[r] === s) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return f([]);
      if (e < 0) {
        const i = t + e;
        return f(i < 0 ? [] : [this[i]]);
      }
      return f([this[e]]);
    },
    append: function (...e) {
      let t;
      const i = c();
      for (let s = 0; s < e.length; s += 1) {
        t = e[s];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const s = i.createElement("div");
            for (s.innerHTML = t; s.firstChild; )
              this[e].appendChild(s.firstChild);
          } else if (t instanceof h)
            for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = c();
      let i, s;
      for (i = 0; i < this.length; i += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
            this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
        } else if (e instanceof h)
          for (s = 0; s < e.length; s += 1)
            this[i].insertBefore(e[s], this[i].childNodes[0]);
        else this[i].insertBefore(e, this[i].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e)
            ? f([this[0].nextElementSibling])
            : f([])
          : this[0].nextElementSibling
          ? f([this[0].nextElementSibling])
          : f([])
        : f([]);
    },
    nextAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return f([]);
      for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? f(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return f(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && f(t.previousElementSibling).is(e)
            ? f([t.previousElementSibling])
            : f([])
          : t.previousElementSibling
          ? f([t.previousElementSibling])
          : f([]);
      }
      return f([]);
    },
    prevAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return f([]);
      for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? f(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return f(t);
    },
    parent: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e
            ? f(this[i].parentNode).is(e) && t.push(this[i].parentNode)
            : t.push(this[i].parentNode));
      return f(t);
    },
    parents: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        let s = this[i].parentNode;
        for (; s; ) e ? f(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
      }
      return f(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].querySelectorAll(e);
        for (let e = 0; e < s.length; e += 1) t.push(s[e]);
      }
      return f(t);
    },
    children: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].children;
        for (let i = 0; i < s.length; i += 1)
          (e && !f(s[i]).is(e)) || t.push(s[i]);
      }
      return f(t);
    },
    filter: function (e) {
      return f(m(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(b).forEach((e) => {
    Object.defineProperty(f.fn, e, { value: b[e], writable: !0 });
  });
  const w = f;
  function S(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function C() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    const i = u();
    let s, n, r;
    const o = (function (e) {
      const t = u();
      let i;
      return (
        t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
      );
    })(e);
    return (
      i.WebKitCSSMatrix
        ? ((n = o.transform || o.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (s = r.toString().split(","))),
      "x" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m41
          : 16 === s.length
          ? parseFloat(s[12])
          : parseFloat(s[4])),
      "y" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m42
          : 16 === s.length
          ? parseFloat(s[13])
          : parseFloat(s[5])),
      n || 0
    );
  }
  function x(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function E(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function I() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (null != s && !E(s)) {
        const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, n = i.length; t < n; t += 1) {
          const n = i[t],
            r = Object.getOwnPropertyDescriptor(s, n);
          void 0 !== r &&
            r.enumerable &&
            (x(e[n]) && x(s[n])
              ? s[n].__swiper__
                ? (e[n] = s[n])
                : I(e[n], s[n])
              : !x(e[n]) && x(s[n])
              ? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : I(e[n], s[n]))
              : (e[n] = s[n]));
        }
      }
    }
    return e;
  }
  function L(e, t, i) {
    e.style.setProperty(t, i);
  }
  function M(e) {
    let { swiper: t, targetPosition: i, side: s } = e;
    const n = u(),
      r = -t.translate;
    let o,
      l = null;
    const a = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(t.cssModeFrameID);
    const d = i > r ? "next" : "prev",
      c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (o = new Date().getTime()), null === l && (l = o);
        const e = Math.max(Math.min((o - l) / a, 1), 0),
          d = 0.5 - Math.cos(e * Math.PI) / 2;
        let u = r + d * (i - r);
        if ((c(u, i) && (u = i), t.wrapperEl.scrollTo({ [s]: u }), c(u, i)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [s]: u });
            }),
            void n.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = n.requestAnimationFrame(p);
      };
    p();
  }
  let P, O, k;
  function A() {
    return (
      P ||
        (P = (function () {
          const e = u(),
            t = c();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const i = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, i);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      P
    );
  }
  function $(e) {
    return (
      void 0 === e && (e = {}),
      O ||
        (O = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const i = A(),
            s = u(),
            n = s.navigator.platform,
            r = t || s.navigator.userAgent,
            o = { ios: !1, android: !1 },
            l = s.screen.width,
            a = s.screen.height,
            d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = r.match(/(iPad).*OS\s([\d_]+)/);
          const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            g = "Win32" === n;
          let m = "MacIntel" === n;
          return (
            !c &&
              m &&
              i.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${l}x${a}`) >= 0 &&
              ((c = r.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (m = !1)),
            d && !g && ((o.os = "android"), (o.android = !0)),
            (c || h || p) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(e)),
      O
    );
  }
  function D() {
    return (
      k ||
        (k = (function () {
          const e = u();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      k
    );
  }
  const _ = {
    on(e, t, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof t) return s;
      const n = i ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][n](t);
        }),
        s
      );
    },
    once(e, t, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof t) return s;
      function n() {
        s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
          r[o] = arguments[o];
        t.apply(s, r);
      }
      return (n.__emitterProxy = t), s.on(e, n, i);
    },
    onAny(e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof e) return i;
      const s = t ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return !i.eventsListeners || i.destroyed
        ? i
        : i.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].forEach((s, n) => {
                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                    i.eventsListeners[e].splice(n, 1);
                });
          }),
          i)
        : i;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, i, s;
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
        i.unshift(s);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(s, [t, ...i]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(s, i);
              });
        }),
        e
      );
    },
  };
  const z = {
    updateSize: function () {
      const e = this;
      let t, i;
      const s = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : s[0].clientWidth),
        (i =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : s[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === i && e.isVertical()) ||
          ((t =
            t -
            parseInt(s.css("padding-left") || 0, 10) -
            parseInt(s.css("padding-right") || 0, 10)),
          (i =
            i -
            parseInt(s.css("padding-top") || 0, 10) -
            parseInt(s.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(i) && (i = 0),
          Object.assign(e, {
            width: t,
            height: i,
            size: e.isHorizontal() ? t : i,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function i(e, i) {
        return parseFloat(e.getPropertyValue(t(i)) || 0);
      }
      const s = e.params,
        { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: l } = e,
        a = e.virtual && s.virtual.enabled,
        d = a ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        p = a ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        g = [];
      let m = s.slidesOffsetBefore;
      "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
      let f = s.slidesOffsetAfter;
      "function" == typeof f && (f = s.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        y = e.slidesGrid.length;
      let b = s.spaceBetween,
        w = -m,
        S = 0,
        C = 0;
      if (void 0 === r) return;
      "string" == typeof b &&
        b.indexOf("%") >= 0 &&
        (b = (parseFloat(b.replace("%", "")) / 100) * r),
        (e.virtualSize = -b),
        o
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        s.centeredSlides &&
          s.cssMode &&
          (L(e.wrapperEl, "--swiper-centered-offset-before", ""),
          L(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const T = s.grid && s.grid.rows > 1 && e.grid;
      let x;
      T && e.grid.initSlides(p);
      const E =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < p; n += 1) {
        x = 0;
        const o = c.eq(n);
        if (
          (T && e.grid.updateSlide(n, o, p, t), "none" !== o.css("display"))
        ) {
          if ("auto" === s.slidesPerView) {
            E && (c[n].style[t("width")] = "");
            const r = getComputedStyle(o[0]),
              l = o[0].style.transform,
              a = o[0].style.webkitTransform;
            if (
              (l && (o[0].style.transform = "none"),
              a && (o[0].style.webkitTransform = "none"),
              s.roundLengths)
            )
              x = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
            else {
              const e = i(r, "width"),
                t = i(r, "padding-left"),
                s = i(r, "padding-right"),
                n = i(r, "margin-left"),
                l = i(r, "margin-right"),
                a = r.getPropertyValue("box-sizing");
              if (a && "border-box" === a) x = e + n + l;
              else {
                const { clientWidth: i, offsetWidth: r } = o[0];
                x = e + t + s + n + l + (r - i);
              }
            }
            l && (o[0].style.transform = l),
              a && (o[0].style.webkitTransform = a),
              s.roundLengths && (x = Math.floor(x));
          } else
            (x = (r - (s.slidesPerView - 1) * b) / s.slidesPerView),
              s.roundLengths && (x = Math.floor(x)),
              c[n] && (c[n].style[t("width")] = `${x}px`);
          c[n] && (c[n].swiperSlideSize = x),
            g.push(x),
            s.centeredSlides
              ? ((w = w + x / 2 + S / 2 + b),
                0 === S && 0 !== n && (w = w - r / 2 - b),
                0 === n && (w = w - r / 2 - b),
                Math.abs(w) < 0.001 && (w = 0),
                s.roundLengths && (w = Math.floor(w)),
                C % s.slidesPerGroup == 0 && u.push(w),
                h.push(w))
              : (s.roundLengths && (w = Math.floor(w)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(w),
                h.push(w),
                (w = w + x + b)),
            (e.virtualSize += x + b),
            (S = x),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + f),
        o &&
          l &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
        s.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
        T && e.grid.updateWrapperSize(x, u, t),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < u.length; i += 1) {
          let n = u[i];
          s.roundLengths && (n = Math.floor(n)),
            u[i] <= e.virtualSize - r && t.push(n);
        }
        (u = t),
          Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== s.spaceBetween)) {
        const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
          [i]: `${b}px`,
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        g.forEach((t) => {
          e += t + (s.spaceBetween ? s.spaceBetween : 0);
        }),
          (e -= s.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -m : e > t ? t + f : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        if (
          (g.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
          (e -= s.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, i) => {
            u[i] = e - t;
          }),
            h.forEach((e, i) => {
              h[i] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: g,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        L(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          L(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - g[g.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          i = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + i));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== y && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        !(a || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          i = e.$el.hasClass(t);
        p <= s.maxBackfaceHiddenSlides
          ? i || e.$el.addClass(t)
          : i && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        i = [],
        s = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) =>
        s
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || w([])).each((e) => {
            i.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !s) break;
            i.push(o(e));
          }
      else i.push(o(t.activeIndex));
      for (n = 0; n < i.length; n += 1)
        if (void 0 !== i[n]) {
          const e = i[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset = e.isHorizontal()
          ? t[i].offsetLeft
          : t[i].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        i = t.params,
        { slides: s, rtlTranslate: n, snapGrid: r } = t;
      if (0 === s.length) return;
      void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      n && (o = e),
        s.removeClass(i.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < s.length; e += 1) {
        const l = s[e];
        let a = l.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (a -= s[0].swiperSlideOffset);
        const d =
            (o + (i.centeredSlides ? t.minTranslate() : 0) - a) /
            (l.swiperSlideSize + i.spaceBetween),
          c =
            (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - a) /
            (l.swiperSlideSize + i.spaceBetween),
          p = -(o - a),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          s.eq(e).addClass(i.slideVisibleClass)),
          (l.progress = n ? -d : d),
          (l.originalProgress = n ? -c : c);
      }
      t.visibleSlides = w(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const i = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * i) || 0;
      }
      const i = t.params,
        s = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: o } = t;
      const l = r,
        a = o;
      0 === s
        ? ((n = 0), (r = !0), (o = !0))
        : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (o = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !l && t.emit("reachBeginning toEdge"),
        o && !a && t.emit("reachEnd toEdge"),
        ((l && !r) || (a && !o)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: i,
          $wrapperEl: s,
          activeIndex: n,
          realIndex: r,
        } = e,
        o = e.virtual && i.virtual.enabled;
      let l;
      t.removeClass(
        `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
      ),
        (l = o
          ? e.$wrapperEl.find(
              `.${i.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        l.addClass(i.slideActiveClass),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(i.slideDuplicateActiveClass));
      let a = l.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === a.length && ((a = t.eq(0)), a.addClass(i.slideNextClass));
      let d = l.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
      i.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
        i.loop &&
          (a.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${a.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${a.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass),
          d.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        i = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: s,
          snapGrid: n,
          params: r,
          activeIndex: o,
          realIndex: l,
          snapIndex: a,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < s.length; e += 1)
          void 0 !== s[e + 1]
            ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
              ? (c = e)
              : i >= s[e] && i < s[e + 1] && (c = e + 1)
            : i >= s[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (n.indexOf(i) >= 0) d = n.indexOf(i);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= n.length && (d = n.length - 1), c === o))
        return void (d !== a && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: o,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        l !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        i = t.params,
        s = w(e).closest(`.${i.slideClass}`)[0];
      let n,
        r = !1;
      if (s)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === s) {
            (r = !0), (n = e);
            break;
          }
      if (!s || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = s),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              w(s).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const G = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: i, translate: s, $wrapperEl: n } = this;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      let r = T(n[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const i = this,
        {
          rtlTranslate: s,
          params: n,
          $wrapperEl: r,
          wrapperEl: o,
          progress: l,
        } = i;
      let a,
        d = 0,
        c = 0;
      i.isHorizontal() ? (d = s ? -e : e) : (c = e),
        n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        n.cssMode
          ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
              ? -d
              : -c)
          : n.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (i.previousTranslate = i.translate),
        (i.translate = i.isHorizontal() ? d : c);
      const p = i.maxTranslate() - i.minTranslate();
      (a = 0 === p ? 0 : (e - i.minTranslate()) / p),
        a !== l && i.updateProgress(e),
        i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, i, s, n) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === s && (s = !0);
      const r = this,
        { params: o, wrapperEl: l } = r;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      const a = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = s && e > a ? a : s && e < d ? d : e),
        r.updateProgress(c),
        o.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              M({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    i && r.emit("transitionEnd"));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function B(e) {
    let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
    const { activeIndex: r, previousIndex: o } = t;
    let l = s;
    if (
      (l || (l = r > o ? "next" : r < o ? "prev" : "reset"),
      t.emit(`transition${n}`),
      i && r !== o)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${n}`);
      t.emit(`slideChangeTransition${n}`),
        "next" === l
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`);
    }
  }
  const H = {
    slideTo: function (e, t, i, s, n) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: l,
        snapGrid: a,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: g,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!g && !s && !n))
        return !1;
      const m = Math.min(r.params.slidesPerGroupSkip, o);
      let f = m + Math.floor((o - m) / r.params.slidesPerGroup);
      f >= a.length && (f = a.length - 1),
        (p || l.initialSlide || 0) === (c || 0) &&
          i &&
          r.emit("beforeSlideChangeStart");
      const v = -a[f];
      if ((r.updateProgress(v), l.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            i = Math.floor(100 * d[e]),
            s = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= i && t < s - (s - i) / 2
              ? (o = e)
              : t >= i && t < s && (o = e + 1)
            : t >= i && (o = e);
        }
      if (r.initialized && o !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== o
        )
          return !1;
      }
      let y;
      if (
        ((y = o > p ? "next" : o < p ? "prev" : "reset"),
        (u && -v === r.translate) || (!u && v === r.translate))
      )
        return (
          r.updateActiveIndex(o),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(v),
          "reset" !== y && (r.transitionStart(i, y), r.transitionEnd(i, y)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          i = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = i),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              M({ swiper: r, targetPosition: i, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(o),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, s),
        r.transitionStart(i, y),
        0 === t
          ? r.transitionEnd(i, y)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(i, y));
              }),
            r.$wrapperEl[0].addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, i, s) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        "string" == typeof e)
      ) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const n = this;
      let r = e;
      return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s);
    },
    slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const s = this,
        { animating: n, enabled: r, params: o } = s;
      if (!r) return s;
      let l = o.slidesPerGroup;
      "auto" === o.slidesPerView &&
        1 === o.slidesPerGroup &&
        o.slidesPerGroupAuto &&
        (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
      const a = s.activeIndex < o.slidesPerGroupSkip ? 1 : l;
      if (o.loop) {
        if (n && o.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      return o.rewind && s.isEnd
        ? s.slideTo(0, e, t, i)
        : s.slideTo(s.activeIndex + a, e, t, i);
    },
    slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const s = this,
        {
          params: n,
          animating: r,
          snapGrid: o,
          slidesGrid: l,
          rtlTranslate: a,
          enabled: d,
        } = s;
      if (!d) return s;
      if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(a ? s.translate : -s.translate),
        u = o.map((e) => c(e));
      let h = o[u.indexOf(p) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        o.forEach((t, i) => {
          p >= t && (e = i);
        }),
          void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
      }
      let g = 0;
      if (
        (void 0 !== h &&
          ((g = l.indexOf(h)),
          g < 0 && (g = s.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((g = g - s.slidesPerViewDynamic("previous", !0) + 1),
            (g = Math.max(g, 0)))),
        n.rewind && s.isBeginning)
      ) {
        const n =
          s.params.virtual && s.params.virtual.enabled && s.virtual
            ? s.virtual.slides.length - 1
            : s.slides.length - 1;
        return s.slideTo(n, e, t, i);
      }
      return s.slideTo(g, e, t, i);
    },
    slideReset: function (e, t, i) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, i)
      );
    },
    slideToClosest: function (e, t, i, s) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === s && (s = 0.5);
      const n = this;
      let r = n.activeIndex;
      const o = Math.min(n.params.slidesPerGroupSkip, r),
        l = o + Math.floor((r - o) / n.params.slidesPerGroup),
        a = n.rtlTranslate ? n.translate : -n.translate;
      if (a >= n.snapGrid[l]) {
        const e = n.snapGrid[l];
        a - e > (n.snapGrid[l + 1] - e) * s && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[l - 1];
        a - e <= (n.snapGrid[l] - e) * s && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: i } = e,
        s =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(w(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - s / 2 ||
              r > e.slides.length - e.loopedSlides + s / 2
              ? (e.loopFix(),
                (r = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                S(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - s
            ? (e.loopFix(),
              (r = i
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              S(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const N = {
    loopCreate: function () {
      const e = this,
        t = c(),
        { params: i, $wrapperEl: s } = e,
        n = s.children().length > 0 ? w(s.children()[0].parentNode) : s;
      n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
      let r = n.children(`.${i.slideClass}`);
      if (i.loopFillGroupWithBlank) {
        const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
        if (e !== i.slidesPerGroup) {
          for (let s = 0; s < e; s += 1) {
            const e = w(t.createElement("div")).addClass(
              `${i.slideClass} ${i.slideBlankClass}`
            );
            n.append(e);
          }
          r = n.children(`.${i.slideClass}`);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = r.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(i.loopedSlides || i.slidesPerView, 10)
        )),
        (e.loopedSlides += i.loopAdditionalSlides),
        e.loopedSlides > r.length && (e.loopedSlides = r.length);
      const o = [],
        l = [];
      r.each((t, i) => {
        const s = w(t);
        i < e.loopedSlides && l.push(t),
          i < r.length && i >= r.length - e.loopedSlides && o.push(t),
          s.attr("data-swiper-slide-index", i);
      });
      for (let e = 0; e < l.length; e += 1)
        n.append(w(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (let e = o.length - 1; e >= 0; e -= 1)
        n.prepend(w(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: i,
        loopedSlides: s,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: o,
        rtlTranslate: l,
      } = e;
      let a;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -o[t] - e.getTranslate();
      if (t < s) {
        (a = i.length - 3 * s + t), (a += s);
        e.slideTo(a, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= i.length - s) {
        (a = -i.length + t + s), (a += s);
        e.slideTo(a, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: i } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  function F(e) {
    const t = this,
      i = c(),
      s = u(),
      n = t.touchEventsData,
      { params: r, touches: o, enabled: l } = t;
    if (!l) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let d = w(a.target);
    if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === a.type),
      !n.isTouchEvent && "which" in a && 3 === a.which)
    )
      return;
    if (!n.isTouchEvent && "button" in a && a.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!r.noSwipingClass &&
      "" !== r.noSwipingClass &&
      a.target &&
      a.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (d = w(e.path[0]));
    const p = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      h = !(!a.target || !a.target.shadowRoot);
    if (
      r.noSwiping &&
      (h
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(i) {
                if (!i || i === c() || i === u()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const s = i.closest(e);
                return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
              })(t)
            );
          })(p, d[0])
        : d.closest(p)[0])
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
      (o.currentY =
        "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY);
    const g = o.currentX,
      m = o.currentY,
      f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (f && (g <= v || g >= s.innerWidth - v)) {
      if ("prevent" !== f) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = g),
      (o.startY = m),
      (n.touchStartTime = C()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== a.type)
    ) {
      let e = !0;
      d.is(n.focusableElements) &&
        ((e = !1), "SELECT" === d[0].nodeName && (n.isTouched = !1)),
        i.activeElement &&
          w(i.activeElement).is(n.focusableElements) &&
          i.activeElement !== d[0] &&
          i.activeElement.blur();
      const s = e && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !s) ||
        d[0].isContentEditable ||
        a.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", a);
  }
  function j(e) {
    const t = c(),
      i = this,
      s = i.touchEventsData,
      { params: n, touches: r, rtlTranslate: o, enabled: l } = i;
    if (!l) return;
    let a = e;
    if ((a.originalEvent && (a = a.originalEvent), !s.isTouched))
      return void (
        s.startMoving &&
        s.isScrolling &&
        i.emit("touchMoveOpposite", a)
      );
    if (s.isTouchEvent && "touchmove" !== a.type) return;
    const d =
        "touchmove" === a.type &&
        a.targetTouches &&
        (a.targetTouches[0] || a.changedTouches[0]),
      p = "touchmove" === a.type ? d.pageX : a.pageX,
      u = "touchmove" === a.type ? d.pageY : a.pageY;
    if (a.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
    if (!i.allowTouchMove)
      return (
        w(a.target).is(s.focusableElements) || (i.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(r, { startX: p, startY: u, currentX: p, currentY: u }),
          (s.touchStartTime = C()))
        )
      );
    if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (i.isVertical()) {
        if (
          (u < r.startY && i.translate <= i.maxTranslate()) ||
          (u > r.startY && i.translate >= i.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else if (
        (p < r.startX && i.translate <= i.maxTranslate()) ||
        (p > r.startX && i.translate >= i.minTranslate())
      )
        return;
    if (
      s.isTouchEvent &&
      t.activeElement &&
      a.target === t.activeElement &&
      w(a.target).is(s.focusableElements)
    )
      return (s.isMoved = !0), void (i.allowClick = !1);
    if (
      (s.allowTouchCallbacks && i.emit("touchMove", a),
      a.targetTouches && a.targetTouches.length > 1)
    )
      return;
    (r.currentX = p), (r.currentY = u);
    const h = r.currentX - r.startX,
      g = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(h ** 2 + g ** 2) < i.params.threshold)
      return;
    if (void 0 === s.isScrolling) {
      let e;
      (i.isHorizontal() && r.currentY === r.startY) ||
      (i.isVertical() && r.currentX === r.startX)
        ? (s.isScrolling = !1)
        : h * h + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(h))) / Math.PI),
          (s.isScrolling = i.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (s.isScrolling && i.emit("touchMoveOpposite", a),
      void 0 === s.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (s.startMoving = !0)),
      s.isScrolling)
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (i.allowClick = !1),
      !n.cssMode && a.cancelable && a.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && a.stopPropagation(),
      s.isMoved ||
        (n.loop && !n.cssMode && i.loopFix(),
        (s.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating &&
          i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (s.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", a)),
      i.emit("sliderMove", a),
      (s.isMoved = !0);
    let m = i.isHorizontal() ? h : g;
    (r.diff = m),
      (m *= n.touchRatio),
      o && (m = -m),
      (i.swipeDirection = m > 0 ? "prev" : "next"),
      (s.currentTranslate = m + s.startTranslate);
    let f = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      m > 0 && s.currentTranslate > i.minTranslate()
        ? ((f = !1),
          n.resistance &&
            (s.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + s.startTranslate + m) ** v))
        : m < 0 &&
          s.currentTranslate < i.maxTranslate() &&
          ((f = !1),
          n.resistance &&
            (s.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - s.startTranslate - m) ** v)),
      f && (a.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        "next" === i.swipeDirection &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !i.allowSlidePrev &&
        "prev" === i.swipeDirection &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      i.allowSlidePrev ||
        i.allowSlideNext ||
        (s.currentTranslate = s.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(m) > n.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          void (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
        n.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      i.params.freeMode &&
        n.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(s.currentTranslate),
      i.setTranslate(s.currentTranslate));
  }
  function V(e) {
    const t = this,
      i = t.touchEventsData,
      { params: s, touches: n, rtlTranslate: r, slidesGrid: o, enabled: l } = t;
    if (!l) return;
    let a = e;
    if (
      (a.originalEvent && (a = a.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", a),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = C(),
      c = d - i.touchStartTime;
    if (t.allowClick) {
      const e = a.path || (a.composedPath && a.composedPath());
      t.updateClickedSlide((e && e[0]) || a.target),
        t.emit("tap click", a),
        c < 300 &&
          d - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", a);
    }
    if (
      ((i.lastClickTime = C()),
      S(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    let p;
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (p = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      s.cssMode)
    )
      return;
    if (t.params.freeMode && s.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
    ) {
      const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      void 0 !== o[e + t]
        ? p >= o[e] && p < o[e + t] && ((u = e), (h = o[e + t] - o[e]))
        : p >= o[e] && ((u = e), (h = o[o.length - 1] - o[o.length - 2]));
    }
    let g = null,
      m = null;
    s.rewind &&
      (t.isBeginning
        ? (m =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const f = (p - o[u]) / h,
      v = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (c > s.longSwipesMs) {
      if (!s.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (f >= s.longSwipesRatio
          ? t.slideTo(s.rewind && t.isEnd ? g : u + v)
          : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (f > 1 - s.longSwipesRatio
            ? t.slideTo(u + v)
            : null !== m && f < 0 && Math.abs(f) > s.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(u));
    } else {
      if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
        ? a.target === t.navigation.nextEl
          ? t.slideTo(u + v)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : u + v),
          "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u));
    }
  }
  function W() {
    const e = this,
      { params: t, el: i } = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = s),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function R(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function q() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
    if (!s) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let Y = !1;
  function X() {}
  const U = (e, t) => {
    const i = c(),
      {
        params: s,
        touchEvents: n,
        el: r,
        wrapperEl: o,
        device: l,
        support: a,
      } = e,
      d = !!s.nested,
      p = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (a.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !a.passiveListener ||
        !s.passiveListeners
      ) && { passive: !0, capture: !1 };
      r[p](n.start, e.onTouchStart, t),
        r[p](
          n.move,
          e.onTouchMove,
          a.passiveListener ? { passive: !1, capture: d } : d
        ),
        r[p](n.end, e.onTouchEnd, t),
        n.cancel && r[p](n.cancel, e.onTouchEnd, t);
    } else
      r[p](n.start, e.onTouchStart, !1),
        i[p](n.move, e.onTouchMove, d),
        i[p](n.end, e.onTouchEnd, !1);
    (s.preventClicks || s.preventClicksPropagation) &&
      r[p]("click", e.onClick, !0),
      s.cssMode && o[p]("scroll", e.onScroll),
      s.updateOnWindowResize
        ? e[u](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            W,
            !0
          )
        : e[u]("observerUpdate", W, !0);
  };
  const K = {
      attachEvents: function () {
        const e = this,
          t = c(),
          { params: i, support: s } = e;
        (e.onTouchStart = F.bind(e)),
          (e.onTouchMove = j.bind(e)),
          (e.onTouchEnd = V.bind(e)),
          i.cssMode && (e.onScroll = q.bind(e)),
          (e.onClick = R.bind(e)),
          s.touch && !Y && (t.addEventListener("touchstart", X), (Y = !0)),
          U(e, "on");
      },
      detachEvents: function () {
        U(this, "off");
      },
    },
    Z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const J = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: i,
          loopedSlides: s = 0,
          params: n,
          $el: r,
        } = e,
        o = n.breakpoints;
      if (!o || (o && 0 === Object.keys(o).length)) return;
      const l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
      if (!l || e.currentBreakpoint === l) return;
      const a = (l in o ? o[l] : void 0) || e.originalParams,
        d = Z(e, n),
        c = Z(e, a),
        p = n.enabled;
      d && !c
        ? (r.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (r.addClass(`${n.containerModifierClass}grid`),
          ((a.grid.fill && "column" === a.grid.fill) ||
            (!a.grid.fill && "column" === n.grid.fill)) &&
            r.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach((t) => {
          const i = n[t] && n[t].enabled,
            s = a[t] && a[t].enabled;
          i && !s && e[t].disable(), !i && s && e[t].enable();
        });
      const u = a.direction && a.direction !== n.direction,
        h = n.loop && (a.slidesPerView !== n.slidesPerView || u);
      u && i && e.changeDirection(), I(e.params, a);
      const g = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !g ? e.disable() : !p && g && e.enable(),
        (e.currentBreakpoint = l),
        e.emit("_beforeBreakpoint", a),
        h &&
          i &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - s + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", a);
    },
    getBreakpoint: function (e, t, i) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
        return;
      let s = !1;
      const n = u(),
        r = "window" === t ? n.innerHeight : i.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: r * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: r, value: l } = o[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${l}px)`).matches && (s = r)
          : l <= i.clientWidth && (s = r);
      }
      return s || "max";
    },
  };
  const Q = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: i, rtl: s, $el: n, device: r, support: o } = e,
        l = (function (e, t) {
          const i = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((s) => {
                    e[s] && i.push(t + s);
                  })
                : "string" == typeof e && i.push(t + e);
            }),
            i
          );
        })(
          [
            "initialized",
            i.direction,
            { "pointer-events": !o.touch },
            { "free-mode": e.params.freeMode && i.freeMode.enabled },
            { autoheight: i.autoHeight },
            { rtl: s },
            { grid: i.grid && i.grid.rows > 1 },
            {
              "grid-column":
                i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { "css-mode": i.cssMode },
            { centered: i.cssMode && i.centeredSlides },
            { "watch-progress": i.watchSlidesProgress },
          ],
          i.containerModifierClass
        );
      t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const ee = {
    loadImage: function (e, t, i, s, n, r) {
      const o = u();
      let l;
      function a() {
        r && r();
      }
      w(e).parent("picture")[0] || (e.complete && n)
        ? a()
        : t
        ? ((l = new o.Image()),
          (l.onload = a),
          (l.onerror = a),
          s && (l.sizes = s),
          i && (l.srcset = i),
          t && (l.src = t))
        : a();
    },
    preloadImages: function () {
      const e = this;
      function t() {
        null != e &&
          e &&
          !e.destroyed &&
          (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
          e.imagesLoaded === e.imagesToLoad.length &&
            (e.params.updateOnImagesReady && e.update(),
            e.emit("imagesReady")));
      }
      e.imagesToLoad = e.$el.find("img");
      for (let i = 0; i < e.imagesToLoad.length; i += 1) {
        const s = e.imagesToLoad[i];
        e.loadImage(
          s,
          s.currentSrc || s.getAttribute("src"),
          s.srcset || s.getAttribute("srcset"),
          s.sizes || s.getAttribute("sizes"),
          !0,
          t
        );
      }
    },
  };
  const te = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function ie(e, t) {
    return function (i) {
      void 0 === i && (i = {});
      const s = Object.keys(i)[0],
        n = i[s];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
            !0 === e[s] &&
            (e[s] = { auto: !0 }),
          s in e && "enabled" in n
            ? (!0 === e[s] && (e[s] = { enabled: !0 }),
              "object" != typeof e[s] ||
                "enabled" in e[s] ||
                (e[s].enabled = !0),
              e[s] || (e[s] = { enabled: !1 }),
              I(t, i))
            : I(t, i))
        : I(t, i);
    };
  }
  const se = {
      eventsEmitter: _,
      update: z,
      translate: G,
      transition: {
        setTransition: function (e, t) {
          const i = this;
          i.params.cssMode || i.$wrapperEl.transition(e),
            i.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: s } = i;
          s.cssMode ||
            (s.autoHeight && i.updateAutoHeight(),
            B({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: s } = i;
          (i.animating = !1),
            s.cssMode ||
              (i.setTransition(0),
              B({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: H,
      loop: N,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const i =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (i.style.cursor = "move"), (i.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: K,
      breakpoints: J,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: i } = e,
            { slidesOffsetBefore: s } = i;
          if (s) {
            const t = e.slides.length - 1,
              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: Q,
      images: ee,
    },
    ne = {};
  class re {
    constructor() {
      let e, t;
      for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
        s[n] = arguments[n];
      if (
        (1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
        t || (t = {}),
        (t = I({}, t)),
        e && !t.el && (t.el = e),
        t.el && w(t.el).length > 1)
      ) {
        const e = [];
        return (
          w(t.el).each((i) => {
            const s = I({}, t, { el: i });
            e.push(new re(s));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = A()),
        (r.device = $({ userAgent: t.userAgent })),
        (r.browser = D()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const o = {};
      r.modules.forEach((e) => {
        e({
          swiper: r,
          extendParams: ie(t, o),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const l = I({}, te, o);
      return (
        (r.params = I({}, l, ne, t)),
        (r.originalParams = I({}, r.params)),
        (r.passedParams = I({}, t)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = w),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: w(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === r.params.direction,
          isVertical: () => "vertical" === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: C(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const s = i.minTranslate(),
        n = (i.maxTranslate() - s) * e + s;
      i.translateTo(n, void 0 === t ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((i) => {
        const s = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: i,
        slides: s,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: o,
        activeIndex: l,
      } = this;
      let a = 1;
      if (i.centeredSlides) {
        let e,
          t = s[l].swiperSlideSize;
        for (let i = l + 1; i < s.length; i += 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (a += 1), t > o && (e = !0));
        for (let i = l - 1; i >= 0; i -= 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (a += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < s.length; e += 1) {
          (t ? n[e] + r[e] - n[l] < o : n[e] - n[l] < o) && (a += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          n[l] - n[e] < o && (a += 1);
        }
      return a;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      function s() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      i.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (s(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || s()),
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const i = this,
        s = i.params.direction;
      return (
        e || (e = "horizontal" === s ? "vertical" : "horizontal"),
        e === s ||
          ("horizontal" !== e && "vertical" !== e) ||
          (i.$el
            .removeClass(`${i.params.containerModifierClass}${s}`)
            .addClass(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const i = w(e || t.params.el);
      if (!(e = i[0])) return !1;
      e.swiper = t;
      const s = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = w(e.shadowRoot.querySelector(s()));
          return (t.children = (e) => i.children(e)), t;
        }
        return i.children ? i.children(s()) : w(i).children(s());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = c().createElement("div");
        (n = w(e)),
          (e.className = t.params.wrapperClass),
          i.append(e),
          i.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: i,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const i = this,
        { params: s, $el: n, $wrapperEl: r, slides: o } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          s.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n.removeAttr("style"),
            r.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e &&
            ((i.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      I(ne, e);
    }
    static get extendedDefaults() {
      return ne;
    }
    static get defaults() {
      return te;
    }
    static installModule(e) {
      re.prototype.__modules__ || (re.prototype.__modules__ = []);
      const t = re.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => re.installModule(e)), re)
        : (re.installModule(e), re);
    }
  }
  Object.keys(se).forEach((e) => {
    Object.keys(se[e]).forEach((t) => {
      re.prototype[t] = se[e][t];
    });
  }),
    re.use([
      function (e) {
        let { swiper: t, on: i, emit: s } = e;
        const n = u();
        let r = null,
          o = null;
        const l = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (s("beforeResize"), s("resize"));
          },
          a = () => {
            t && !t.destroyed && t.initialized && s("orientationchange");
          };
        i("init", () => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((r = new ResizeObserver((e) => {
                o = n.requestAnimationFrame(() => {
                  const { width: i, height: s } = t;
                  let n = i,
                    r = s;
                  e.forEach((e) => {
                    let { contentBoxSize: i, contentRect: s, target: o } = e;
                    (o && o !== t.el) ||
                      ((n = s ? s.width : (i[0] || i).inlineSize),
                      (r = s ? s.height : (i[0] || i).blockSize));
                  }),
                    (n === i && r === s) || l();
                });
              })),
              r.observe(t.el))
            : (n.addEventListener("resize", l),
              n.addEventListener("orientationchange", a));
        }),
          i("destroy", () => {
            o && n.cancelAnimationFrame(o),
              r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
              n.removeEventListener("resize", l),
              n.removeEventListener("orientationchange", a);
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        const r = [],
          o = u(),
          l = function (e, t) {
            void 0 === t && (t = {});
            const i = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void n("observerUpdate", e[0]);
                const t = function () {
                  n("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(t)
                  : o.setTimeout(t, 0);
              }
            );
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              r.push(i);
          };
        i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) l(e[t]);
              }
              l(t.$el[0], { childList: t.params.observeSlideChildren }),
                l(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            r.forEach((e) => {
              e.disconnect();
            }),
              r.splice(0, r.length);
          });
      },
    ]);
  const oe = re;
  function le(e) {
    let { swiper: t, extendParams: i, on: s, emit: n } = e;
    function r(e) {
      let i;
      return (
        e &&
          ((i = w(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            i.length > 1 &&
            1 === t.$el.find(e).length &&
            (i = t.$el.find(e))),
        i
      );
    }
    function o(e, i) {
      const s = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[i ? "addClass" : "removeClass"](s.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
    }
    function l() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: i } = t.navigation;
      o(i, t.isBeginning && !t.params.rewind),
        o(e, t.isEnd && !t.params.rewind);
    }
    function a(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) &&
          (t.slidePrev(), n("navigationPrev"));
    }
    function d(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) &&
          (t.slideNext(), n("navigationNext"));
    }
    function p() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = (function (e, t, i, s) {
          const n = c();
          return (
            e.params.createElements &&
              Object.keys(s).forEach((r) => {
                if (!i[r] && !0 === i.auto) {
                  let o = e.$el.children(`.${s[r]}`)[0];
                  o ||
                    ((o = n.createElement("div")),
                    (o.className = s[r]),
                    e.$el.append(o)),
                    (i[r] = o),
                    (t[r] = o);
                }
              }),
            i
          );
        })(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !e.nextEl && !e.prevEl)
      )
        return;
      const i = r(e.nextEl),
        s = r(e.prevEl);
      i && i.length > 0 && i.on("click", d),
        s && s.length > 0 && s.on("click", a),
        Object.assign(t.navigation, {
          $nextEl: i,
          nextEl: i && i[0],
          $prevEl: s,
          prevEl: s && s[0],
        }),
        t.enabled ||
          (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass));
    }
    function u() {
      const { $nextEl: e, $prevEl: i } = t.navigation;
      e &&
        e.length &&
        (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
        i &&
          i.length &&
          (i.off("click", a), i.removeClass(t.params.navigation.disabledClass));
    }
    i({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      s("init", () => {
        !1 === t.params.navigation.enabled ? h() : (p(), l());
      }),
      s("toEdge fromEdge lock unlock", () => {
        l();
      }),
      s("destroy", () => {
        u();
      }),
      s("enable disable", () => {
        const { $nextEl: e, $prevEl: i } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          i &&
            i[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      s("click", (e, i) => {
        const { $nextEl: s, $prevEl: r } = t.navigation,
          o = i.target;
        if (t.params.navigation.hideOnClick && !w(o).is(r) && !w(o).is(s)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === o || t.pagination.el.contains(o))
          )
            return;
          let e;
          s
            ? (e = s.hasClass(t.params.navigation.hiddenClass))
            : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
            n(!0 === e ? "navigationShow" : "navigationHide"),
            s && s.toggleClass(t.params.navigation.hiddenClass),
            r && r.toggleClass(t.params.navigation.hiddenClass);
        }
      });
    const h = () => {
      t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
    };
    Object.assign(t.navigation, {
      enable: () => {
        t.$el.removeClass(t.params.navigation.navigationDisabledClass),
          p(),
          l();
      },
      disable: h,
      update: l,
      init: p,
      destroy: u,
    });
  }
  function ae(e) {
    let t,
      { swiper: i, extendParams: s, on: n, emit: r } = e;
    function o() {
      const e = i.slides.eq(i.activeIndex);
      let s = i.params.autoplay.delay;
      e.attr("data-swiper-autoplay") &&
        (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
        clearTimeout(t),
        (t = S(() => {
          let e;
          i.params.autoplay.reverseDirection
            ? i.params.loop
              ? (i.loopFix(),
                (e = i.slidePrev(i.params.speed, !0, !0)),
                r("autoplay"))
              : i.isBeginning
              ? i.params.autoplay.stopOnLastSlide
                ? a()
                : ((e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0)),
                  r("autoplay"))
              : ((e = i.slidePrev(i.params.speed, !0, !0)), r("autoplay"))
            : i.params.loop
            ? (i.loopFix(),
              (e = i.slideNext(i.params.speed, !0, !0)),
              r("autoplay"))
            : i.isEnd
            ? i.params.autoplay.stopOnLastSlide
              ? a()
              : ((e = i.slideTo(0, i.params.speed, !0, !0)), r("autoplay"))
            : ((e = i.slideNext(i.params.speed, !0, !0)), r("autoplay")),
            ((i.params.cssMode && i.autoplay.running) || !1 === e) && o();
        }, s));
    }
    function l() {
      return (
        void 0 === t &&
        !i.autoplay.running &&
        ((i.autoplay.running = !0), r("autoplayStart"), o(), !0)
      );
    }
    function a() {
      return (
        !!i.autoplay.running &&
        void 0 !== t &&
        (t && (clearTimeout(t), (t = void 0)),
        (i.autoplay.running = !1),
        r("autoplayStop"),
        !0)
      );
    }
    function d(e) {
      i.autoplay.running &&
        (i.autoplay.paused ||
          (t && clearTimeout(t),
          (i.autoplay.paused = !0),
          0 !== e && i.params.autoplay.waitForTransition
            ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                i.$wrapperEl[0].addEventListener(e, u);
              })
            : ((i.autoplay.paused = !1), o())));
    }
    function p() {
      const e = c();
      "hidden" === e.visibilityState && i.autoplay.running && d(),
        "visible" === e.visibilityState &&
          i.autoplay.paused &&
          (o(), (i.autoplay.paused = !1));
    }
    function u(e) {
      i &&
        !i.destroyed &&
        i.$wrapperEl &&
        e.target === i.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((e) => {
          i.$wrapperEl[0].removeEventListener(e, u);
        }),
        (i.autoplay.paused = !1),
        i.autoplay.running ? o() : a());
    }
    function h() {
      i.params.autoplay.disableOnInteraction ? a() : (r("autoplayPause"), d()),
        ["transitionend", "webkitTransitionEnd"].forEach((e) => {
          i.$wrapperEl[0].removeEventListener(e, u);
        });
    }
    function g() {
      i.params.autoplay.disableOnInteraction ||
        ((i.autoplay.paused = !1), r("autoplayResume"), o());
    }
    (i.autoplay = { running: !1, paused: !1 }),
      s({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      }),
      n("init", () => {
        if (i.params.autoplay.enabled) {
          l();
          c().addEventListener("visibilitychange", p),
            i.params.autoplay.pauseOnMouseEnter &&
              (i.$el.on("mouseenter", h), i.$el.on("mouseleave", g));
        }
      }),
      n("beforeTransitionStart", (e, t, s) => {
        i.autoplay.running &&
          (s || !i.params.autoplay.disableOnInteraction
            ? i.autoplay.pause(t)
            : a());
      }),
      n("sliderFirstMove", () => {
        i.autoplay.running &&
          (i.params.autoplay.disableOnInteraction ? a() : d());
      }),
      n("touchEnd", () => {
        i.params.cssMode &&
          i.autoplay.paused &&
          !i.params.autoplay.disableOnInteraction &&
          o();
      }),
      n("destroy", () => {
        i.$el.off("mouseenter", h),
          i.$el.off("mouseleave", g),
          i.autoplay.running && a();
        c().removeEventListener("visibilitychange", p);
      }),
      Object.assign(i.autoplay, { pause: d, run: o, start: l, stop: a });
  }
  window.addEventListener("load", function (e) {
    document.querySelector(".projects__slider") &&
      new oe(".projects__slider", {
        modules: [le],
        spaceBetween: 20,
        speed: 800,
        navigation: { nextEl: ".projects__btn-r", prevEl: ".projects__btn-l" },
        breakpoints: {
          320: { slidesPerView: 1 },
          420: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1268: { slidesPerView: 4 },
        },
        on: {},
      }),
      document.querySelector(".partener__slider") &&
        new oe(".partener__slider", {
          modules: [ae],
          autoplay: { delay: 3e3, disableOnInteraction: !1 },
          observer: !0,
          observeParents: !0,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          navigation: {
            nextEl: ".projects__btn-r",
            prevEl: ".projects__btn-l",
          },
          breakpoints: {
            320: { slidesPerView: 3, spaceBetween: 0, autoHeight: !0 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            992: { slidesPerView: 6, spaceBetween: 20 },
          },
          on: {},
        }),
      document.querySelector(".services-home__slider") &&
        new oe(".services-home__slider", {
          modules: [le],
          autoplay: { delay: 3e3, disableOnInteraction: !1 },
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          navigation: {
            nextEl: ".services-home__btn-r",
            prevEl: ".services-home__btn-l",
          },
          on: {},
        }),
      document.querySelector(".gallery__sliders") &&
        new oe(".gallery__sliders", {
          modules: [le],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1.5,
          spaceBetween: 50,
          autoHeight: !0,
          speed: 200,
          centeredSlides: !0,
          loop: !0,
          navigation: {
            nextEl: ".more__item_prev",
            prevEl: ".more__item_next",
          },
          on: {},
        }),
      document.querySelector(".services__sliders") &&
        new oe(".services__sliders", {
          modules: [le],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: !0,
          speed: 400,
          navigation: {
            nextEl: ".projects__btn-r",
            prevEl: ".projects__btn-l",
          },
          on: {},
        });
  });
  let de = !1;
  setTimeout(() => {
    if (de) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  var ce = function () {
    return (
      (ce =
        Object.assign ||
        function (e) {
          for (var t, i = 1, s = arguments.length; i < s; i++)
            for (var n in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
      ce.apply(this, arguments)
    );
  };
  var pe = "lgAfterAppendSlide",
    ue = "lgInit",
    he = "lgHasVideo",
    ge = "lgContainerResize",
    me = "lgUpdateSlides",
    fe = "lgAfterAppendSubHtml",
    ve = "lgBeforeOpen",
    ye = "lgAfterOpen",
    be = "lgSlideItemLoad",
    we = "lgBeforeSlide",
    Se = "lgAfterSlide",
    Ce = "lgPosterClick",
    Te = "lgDragStart",
    xe = "lgDragMove",
    Ee = "lgDragEnd",
    Ie = "lgBeforeNextSlide",
    Le = "lgBeforePrevSlide",
    Me = "lgBeforeClose",
    Pe = "lgAfterClose",
    Oe = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: !0,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: !0,
      allowMediaOverlap: !1,
      videoMaxSize: "1280-720",
      loadYouTubePoster: !0,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      resetScrollPosition: !0,
      hideScrollbar: !1,
      closable: !0,
      swipeToClose: !0,
      closeOnTap: !0,
      showCloseIcon: !0,
      showMaximizeIcon: !1,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      trapFocus: !0,
      controls: !0,
      slideEndAnimation: !0,
      hideControlOnEnd: !1,
      mousewheel: !1,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
      },
    };
  var ke = (function () {
    function e(e) {
      return (
        (this.cssVenderPrefixes = [
          "TransitionDuration",
          "TransitionTimingFunction",
          "Transform",
          "Transition",
        ]),
        (this.selector = this._getSelector(e)),
        (this.firstElement = this._getFirstEl()),
        this
      );
    }
    return (
      (e.generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }),
      (e.prototype._getSelector = function (e, t) {
        return (
          void 0 === t && (t = document),
          "string" != typeof e
            ? e
            : ((t = t || document),
              "#" === e.substring(0, 1)
                ? t.querySelector(e)
                : t.querySelectorAll(e))
        );
      }),
      (e.prototype._each = function (e) {
        return this.selector
          ? (void 0 !== this.selector.length
              ? [].forEach.call(this.selector, e)
              : e(this.selector, 0),
            this)
          : this;
      }),
      (e.prototype._setCssVendorPrefix = function (e, t, i) {
        var s = t.replace(/-([a-z])/gi, function (e, t) {
          return t.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(s)
          ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
            (e.style["webkit" + s] = i),
            (e.style["moz" + s] = i),
            (e.style["ms" + s] = i),
            (e.style["o" + s] = i))
          : (e.style[s] = i);
      }),
      (e.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (e.prototype.isEventMatched = function (e, t) {
        var i = t.split(".");
        return e
          .split(".")
          .filter(function (e) {
            return e;
          })
          .every(function (e) {
            return -1 !== i.indexOf(e);
          });
      }),
      (e.prototype.attr = function (e, t) {
        return void 0 === t
          ? this.firstElement
            ? this.firstElement.getAttribute(e)
            : ""
          : (this._each(function (i) {
              i.setAttribute(e, t);
            }),
            this);
      }),
      (e.prototype.find = function (e) {
        return Ae(this._getSelector(e, this.selector));
      }),
      (e.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? Ae(this.selector[0])
          : Ae(this.selector);
      }),
      (e.prototype.eq = function (e) {
        return Ae(this.selector[e]);
      }),
      (e.prototype.parent = function () {
        return Ae(this.selector.parentElement);
      }),
      (e.prototype.get = function () {
        return this._getFirstEl();
      }),
      (e.prototype.removeAttr = function (e) {
        var t = e.split(" ");
        return (
          this._each(function (e) {
            t.forEach(function (t) {
              return e.removeAttribute(t);
            });
          }),
          this
        );
      }),
      (e.prototype.wrap = function (e) {
        if (!this.firstElement) return this;
        var t = document.createElement("div");
        return (
          (t.className = e),
          this.firstElement.parentNode.insertBefore(t, this.firstElement),
          this.firstElement.parentNode.removeChild(this.firstElement),
          t.appendChild(this.firstElement),
          this
        );
      }),
      (e.prototype.addClass = function (e) {
        return (
          void 0 === e && (e = ""),
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.add(e);
            });
          }),
          this
        );
      }),
      (e.prototype.removeClass = function (e) {
        return (
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.remove(e);
            });
          }),
          this
        );
      }),
      (e.prototype.hasClass = function (e) {
        return !!this.firstElement && this.firstElement.classList.contains(e);
      }),
      (e.prototype.hasAttribute = function (e) {
        return !!this.firstElement && this.firstElement.hasAttribute(e);
      }),
      (e.prototype.toggleClass = function (e) {
        return this.firstElement
          ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
          : this;
      }),
      (e.prototype.css = function (e, t) {
        var i = this;
        return (
          this._each(function (s) {
            i._setCssVendorPrefix(s, e, t);
          }),
          this
        );
      }),
      (e.prototype.on = function (t, i) {
        var s = this;
        return this.selector
          ? (t.split(" ").forEach(function (t) {
              Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []),
                e.eventListeners[t].push(i),
                s.selector.addEventListener(t.split(".")[0], i);
            }),
            this)
          : this;
      }),
      (e.prototype.once = function (e, t) {
        var i = this;
        return (
          this.on(e, function () {
            i.off(e), t(e);
          }),
          this
        );
      }),
      (e.prototype.off = function (t) {
        var i = this;
        return this.selector
          ? (Object.keys(e.eventListeners).forEach(function (s) {
              i.isEventMatched(t, s) &&
                (e.eventListeners[s].forEach(function (e) {
                  i.selector.removeEventListener(s.split(".")[0], e);
                }),
                (e.eventListeners[s] = []));
            }),
            this)
          : this;
      }),
      (e.prototype.trigger = function (e, t) {
        if (!this.firstElement) return this;
        var i = new CustomEvent(e.split(".")[0], { detail: t || null });
        return this.firstElement.dispatchEvent(i), this;
      }),
      (e.prototype.load = function (e) {
        var t = this;
        return (
          fetch(e)
            .then(function (e) {
              return e.text();
            })
            .then(function (e) {
              t.selector.innerHTML = e;
            }),
          this
        );
      }),
      (e.prototype.html = function (e) {
        return void 0 === e
          ? this.firstElement
            ? this.firstElement.innerHTML
            : ""
          : (this._each(function (t) {
              t.innerHTML = e;
            }),
            this);
      }),
      (e.prototype.append = function (e) {
        return (
          this._each(function (t) {
            "string" == typeof e
              ? t.insertAdjacentHTML("beforeend", e)
              : t.appendChild(e);
          }),
          this
        );
      }),
      (e.prototype.prepend = function (e) {
        return (
          this._each(function (t) {
            t.insertAdjacentHTML("afterbegin", e);
          }),
          this
        );
      }),
      (e.prototype.remove = function () {
        return (
          this._each(function (e) {
            e.parentNode.removeChild(e);
          }),
          this
        );
      }),
      (e.prototype.empty = function () {
        return (
          this._each(function (e) {
            e.innerHTML = "";
          }),
          this
        );
      }),
      (e.prototype.scrollTop = function (e) {
        return void 0 !== e
          ? ((document.body.scrollTop = e),
            (document.documentElement.scrollTop = e),
            this)
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }),
      (e.prototype.scrollLeft = function (e) {
        return void 0 !== e
          ? ((document.body.scrollLeft = e),
            (document.documentElement.scrollLeft = e),
            this)
          : window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
      }),
      (e.prototype.offset = function () {
        if (!this.firstElement) return { left: 0, top: 0 };
        var e = this.firstElement.getBoundingClientRect(),
          t = Ae("body").style().marginLeft;
        return {
          left: e.left - parseFloat(t) + this.scrollLeft(),
          top: e.top + this.scrollTop(),
        };
      }),
      (e.prototype.style = function () {
        return this.firstElement
          ? this.firstElement.currentStyle ||
              window.getComputedStyle(this.firstElement)
          : {};
      }),
      (e.prototype.width = function () {
        var e = this.style();
        return (
          this.firstElement.clientWidth -
          parseFloat(e.paddingLeft) -
          parseFloat(e.paddingRight)
        );
      }),
      (e.prototype.height = function () {
        var e = this.style();
        return (
          this.firstElement.clientHeight -
          parseFloat(e.paddingTop) -
          parseFloat(e.paddingBottom)
        );
      }),
      (e.eventListeners = {}),
      e
    );
  })();
  function Ae(e) {
    return (
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function (e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: null };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        };
      })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new ke(e)
    );
  }
  var $e = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl",
  ];
  function De(e) {
    return "href" === e
      ? "src"
      : (e = (e =
          (e = e.replace("data-", "")).charAt(0).toLowerCase() +
          e.slice(1)).replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        }));
  }
  var _e = function (e, t, i, s) {
      void 0 === i && (i = 0);
      var n = Ae(e).attr("data-lg-size") || s;
      if (n) {
        var r = n.split(",");
        if (r[1])
          for (var o = window.innerWidth, l = 0; l < r.length; l++) {
            var a = r[l];
            if (parseInt(a.split("-")[2], 10) > o) {
              n = a;
              break;
            }
            l === r.length - 1 && (n = a);
          }
        var d = n.split("-"),
          c = parseInt(d[0], 10),
          p = parseInt(d[1], 10),
          u = t.width(),
          h = t.height() - i,
          g = Math.min(u, c),
          m = Math.min(h, p),
          f = Math.min(g / c, m / p);
        return { width: c * f, height: p * f };
      }
    },
    ze = function (e, t, i, s, n) {
      if (n) {
        var r = Ae(e).find("img").first();
        if (r.get()) {
          var o = t.get().getBoundingClientRect(),
            l = o.width,
            a = t.height() - (i + s),
            d = r.width(),
            c = r.height(),
            p = r.style(),
            u =
              (l - d) / 2 -
              r.offset().left +
              (parseFloat(p.paddingLeft) || 0) +
              (parseFloat(p.borderLeft) || 0) +
              Ae(window).scrollLeft() +
              o.left,
            h =
              (a - c) / 2 -
              r.offset().top +
              (parseFloat(p.paddingTop) || 0) +
              (parseFloat(p.borderTop) || 0) +
              Ae(window).scrollTop() +
              i;
          return (
            "translate3d(" +
            (u *= -1) +
            "px, " +
            (h *= -1) +
            "px, 0) scale3d(" +
            d / n.width +
            ", " +
            c / n.height +
            ", 1)"
          );
        }
      }
    },
    Ge = function (e, t, i, s, n, r) {
      return (
        '<div class="lg-video-cont lg-has-iframe" style="width:' +
        e +
        "; max-width:" +
        i +
        "; height: " +
        t +
        "; max-height:" +
        s +
        '">\n                    <iframe class="lg-object" frameborder="0" ' +
        (r ? 'title="' + r + '"' : "") +
        ' src="' +
        n +
        '"  allowfullscreen="true"></iframe>\n                </div>'
      );
    },
    Be = function (e, t, i, s, n, r) {
      var o =
          "<img " +
          i +
          " " +
          (s ? 'srcset="' + s + '"' : "") +
          "  " +
          (n ? 'sizes="' + n + '"' : "") +
          ' class="lg-object lg-image" data-index="' +
          e +
          '" src="' +
          t +
          '" />',
        l = "";
      r &&
        (l = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
          var t = "";
          return (
            Object.keys(e).forEach(function (i) {
              t += " " + i + '="' + e[i] + '"';
            }),
            "<source " + t + "></source>"
          );
        }));
      return "" + l + o;
    },
    He = function (e) {
      for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
        var r = e[n].split(" ");
        "" === r[0] && r.splice(0, 1), i.push(r[0]), t.push(r[1]);
      }
      for (var o = window.innerWidth, l = 0; l < t.length; l++)
        if (parseInt(t[l], 10) > o) {
          s = i[l];
          break;
        }
      return s;
    },
    Ne = function (e) {
      return !!e && !!e.complete && 0 !== e.naturalWidth;
    },
    Fe = function (e, t, i, s, n) {
      return (
        '<div class="lg-video-cont ' +
        (n && n.youtube
          ? "lg-has-youtube"
          : n && n.vimeo
          ? "lg-has-vimeo"
          : "lg-has-html5") +
        '" style="' +
        i +
        '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
        s +
        '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
        s +
        '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
        (t || "") +
        '\n            <img class="lg-object lg-video-poster" src="' +
        e +
        '" />\n        </div>'
      );
    },
    je = function (e) {
      var t = e.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      return [].filter.call(t, function (e) {
        var t = window.getComputedStyle(e);
        return "none" !== t.display && "hidden" !== t.visibility;
      });
    },
    Ve = function (e, t, i, s) {
      var n = [],
        r = (function () {
          for (var e = 0, t = 0, i = arguments.length; t < i; t++)
            e += arguments[t].length;
          var s = Array(e),
            n = 0;
          for (t = 0; t < i; t++)
            for (var r = arguments[t], o = 0, l = r.length; o < l; o++, n++)
              s[n] = r[o];
          return s;
        })($e, t);
      return (
        [].forEach.call(e, function (e) {
          for (var t = {}, o = 0; o < e.attributes.length; o++) {
            var l = e.attributes[o];
            if (l.specified) {
              var a = De(l.name),
                d = "";
              r.indexOf(a) > -1 && (d = a), d && (t[d] = l.value);
            }
          }
          var c = Ae(e),
            p = c.find("img").first().attr("alt"),
            u = c.attr("title"),
            h = s ? c.attr(s) : c.find("img").first().attr("src");
          (t.thumb = h),
            i && !t.subHtml && (t.subHtml = u || p || ""),
            (t.alt = p || u || ""),
            n.push(t);
        }),
        n
      );
    },
    We = function () {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    Re = function (e, t, i) {
      if (!e)
        return t
          ? { html5: !0 }
          : void console.error(
              "lightGallery :- data-src is not provided on slide item " +
                (i + 1) +
                ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
            );
      var s = e.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
        ),
        n = e.match(
          /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
        ),
        r = e.match(
          /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
        );
      return s ? { youtube: s } : n ? { vimeo: n } : r ? { wistia: r } : void 0;
    },
    qe = 0,
    Ye = (function () {
      function e(e, t) {
        if (
          ((this.lgOpened = !1),
          (this.index = 0),
          (this.plugins = []),
          (this.lGalleryOn = !1),
          (this.lgBusy = !1),
          (this.currentItemsInDom = []),
          (this.prevScrollTop = 0),
          (this.bodyPaddingRight = 0),
          (this.isDummyImageRemoved = !1),
          (this.dragOrSwipeEnabled = !1),
          (this.mediaContainerPosition = { top: 0, bottom: 0 }),
          !e)
        )
          return this;
        if (
          (qe++,
          (this.lgId = qe),
          (this.el = e),
          (this.LGel = Ae(e)),
          this.generateSettings(t),
          this.buildModules(),
          this.settings.dynamic &&
            void 0 !== this.settings.dynamicEl &&
            !Array.isArray(this.settings.dynamicEl))
        )
          throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return (
          (this.galleryItems = this.getItems()),
          this.normalizeSettings(),
          this.init(),
          this.validateLicense(),
          this
        );
      }
      return (
        (e.prototype.generateSettings = function (e) {
          if (
            ((this.settings = ce(ce({}, Oe), e)),
            this.settings.isMobile &&
            "function" == typeof this.settings.isMobile
              ? this.settings.isMobile()
              : We())
          ) {
            var t = ce(
              ce({}, this.settings.mobileSettings),
              this.settings.mobileSettings
            );
            this.settings = ce(ce({}, this.settings), t);
          }
        }),
        (e.prototype.normalizeSettings = function () {
          this.settings.slideEndAnimation &&
            (this.settings.hideControlOnEnd = !1),
            this.settings.closable || (this.settings.swipeToClose = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            this.settings.dynamic && (this.zoomFromOrigin = !1),
            this.settings.container ||
              (this.settings.container = document.body),
            (this.settings.preload = Math.min(
              this.settings.preload,
              this.galleryItems.length
            ));
        }),
        (e.prototype.init = function () {
          var e = this;
          this.addSlideVideoInfo(this.galleryItems),
            this.buildStructure(),
            this.LGel.trigger(ue, { instance: this }),
            this.settings.keyPress && this.keyPress(),
            setTimeout(function () {
              e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
            }, 50),
            this.arrow(),
            this.settings.mousewheel && this.mousewheel(),
            this.settings.dynamic || this.openGalleryOnItemClick();
        }),
        (e.prototype.openGalleryOnItemClick = function () {
          for (
            var e = this,
              t = function (t) {
                var s = i.items[t],
                  n = Ae(s),
                  r = ke.generateUUID();
                n.attr("data-lg-id", r).on(
                  "click.lgcustom-item-" + r,
                  function (i) {
                    i.preventDefault();
                    var n = e.settings.index || t;
                    e.openGallery(n, s);
                  }
                );
              },
              i = this,
              s = 0;
            s < this.items.length;
            s++
          )
            t(s);
        }),
        (e.prototype.buildModules = function () {
          var e = this;
          this.settings.plugins.forEach(function (t) {
            e.plugins.push(new t(e, Ae));
          });
        }),
        (e.prototype.validateLicense = function () {
          this.settings.licenseKey
            ? "0000-0000-000-0000" === this.settings.licenseKey &&
              console.warn(
                "lightGallery: " +
                  this.settings.licenseKey +
                  " license key is not valid for production use"
              )
            : console.error("Please provide a valid license key");
        }),
        (e.prototype.getSlideItem = function (e) {
          return Ae(this.getSlideItemId(e));
        }),
        (e.prototype.getSlideItemId = function (e) {
          return "#lg-item-" + this.lgId + "-" + e;
        }),
        (e.prototype.getIdName = function (e) {
          return e + "-" + this.lgId;
        }),
        (e.prototype.getElementById = function (e) {
          return Ae("#" + this.getIdName(e));
        }),
        (e.prototype.manageSingleSlideClassName = function () {
          this.galleryItems.length < 2
            ? this.outer.addClass("lg-single-item")
            : this.outer.removeClass("lg-single-item");
        }),
        (e.prototype.buildStructure = function () {
          var e = this;
          if (!(this.$container && this.$container.get())) {
            var t = "",
              i = "";
            this.settings.controls &&
              (t =
                '<button type="button" id="' +
                this.getIdName("lg-prev") +
                '" aria-label="' +
                this.settings.strings.previousSlide +
                '" class="lg-prev lg-icon"> ' +
                this.settings.prevHtml +
                ' </button>\n                <button type="button" id="' +
                this.getIdName("lg-next") +
                '" aria-label="' +
                this.settings.strings.nextSlide +
                '" class="lg-next lg-icon"> ' +
                this.settings.nextHtml +
                " </button>"),
              ".lg-item" !== this.settings.appendSubHtmlTo &&
                (i =
                  '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var s = "";
            this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
            var n = this.settings.ariaLabelledby
                ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                : "",
              r = this.settings.ariaDescribedby
                ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                : "",
              o =
                "lg-container " +
                this.settings.addClass +
                " " +
                (document.body !== this.settings.container ? "lg-inline" : ""),
              l =
                this.settings.closable && this.settings.showCloseIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.closeGallery +
                    '" id="' +
                    this.getIdName("lg-close") +
                    '" class="lg-close lg-icon"></button>'
                  : "",
              a = this.settings.showMaximizeIcon
                ? '<button type="button" aria-label="' +
                  this.settings.strings.toggleMaximize +
                  '" id="' +
                  this.getIdName("lg-maximize") +
                  '" class="lg-maximize lg-icon"></button>'
                : "",
              d =
                '\n        <div class="' +
                o +
                '" id="' +
                this.getIdName("lg-container") +
                '" tabindex="-1" aria-modal="true" ' +
                n +
                " " +
                r +
                ' role="dialog"\n        >\n            <div id="' +
                this.getIdName("lg-backdrop") +
                '" class="lg-backdrop"></div>\n\n            <div id="' +
                this.getIdName("lg-outer") +
                '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                s +
                ' ">\n\n              <div id="' +
                this.getIdName("lg-content") +
                '" class="lg-content">\n                <div id="' +
                this.getIdName("lg-inner") +
                '" class="lg-inner">\n                </div>\n                ' +
                t +
                '\n              </div>\n                <div id="' +
                this.getIdName("lg-toolbar") +
                '" class="lg-toolbar lg-group">\n                    ' +
                a +
                "\n                    " +
                l +
                "\n                    </div>\n                    " +
                (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                '\n                <div id="' +
                this.getIdName("lg-components") +
                '" class="lg-components">\n                    ' +
                (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                "\n                </div>\n            </div>\n        </div>\n        ";
            Ae(this.settings.container).append(d),
              document.body !== this.settings.container &&
                Ae(this.settings.container).css("position", "relative"),
              (this.outer = this.getElementById("lg-outer")),
              (this.$lgComponents = this.getElementById("lg-components")),
              (this.$backdrop = this.getElementById("lg-backdrop")),
              (this.$container = this.getElementById("lg-container")),
              (this.$inner = this.getElementById("lg-inner")),
              (this.$content = this.getElementById("lg-content")),
              (this.$toolbar = this.getElementById("lg-toolbar")),
              this.$backdrop.css(
                "transition-duration",
                this.settings.backdropDuration + "ms"
              );
            var c = this.settings.mode + " ";
            this.manageSingleSlideClassName(),
              this.settings.enableDrag && (c += "lg-grab "),
              this.outer.addClass(c),
              this.$inner.css(
                "transition-timing-function",
                this.settings.easing
              ),
              this.$inner.css(
                "transition-duration",
                this.settings.speed + "ms"
              ),
              this.settings.download &&
                this.$toolbar.append(
                  '<a id="' +
                    this.getIdName("lg-download") +
                    '" target="_blank" rel="noopener" aria-label="' +
                    this.settings.strings.download +
                    '" download class="lg-download lg-icon"></a>'
                ),
              this.counter(),
              Ae(window).on(
                "resize.lg.global" +
                  this.lgId +
                  " orientationchange.lg.global" +
                  this.lgId,
                function () {
                  e.refreshOnResize();
                }
              ),
              this.hideBars(),
              this.manageCloseGallery(),
              this.toggleMaximize(),
              this.initModules();
          }
        }),
        (e.prototype.refreshOnResize = function () {
          if (this.lgOpened) {
            var e = this.galleryItems[this.index].__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var t = this.mediaContainerPosition,
              i = t.top,
              s = t.bottom;
            if (
              ((this.currentImageSize = _e(
                this.items[this.index],
                this.outer,
                i + s,
                e && this.settings.videoMaxSize
              )),
              e && this.resizeVideoSlide(this.index, this.currentImageSize),
              this.zoomFromOrigin && !this.isDummyImageRemoved)
            ) {
              var n = this.getDummyImgStyles(this.currentImageSize);
              this.outer
                .find(".lg-current .lg-dummy-img")
                .first()
                .attr("style", n);
            }
            this.LGel.trigger(ge);
          }
        }),
        (e.prototype.resizeVideoSlide = function (e, t) {
          var i = this.getVideoContStyle(t);
          this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
        }),
        (e.prototype.updateSlides = function (e, t) {
          if (
            (this.index > e.length - 1 && (this.index = e.length - 1),
            1 === e.length && (this.index = 0),
            e.length)
          ) {
            var i = this.galleryItems[t].src;
            (this.galleryItems = e),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []);
            var s = 0;
            this.galleryItems.some(function (e, t) {
              return e.src === i && ((s = t), !0);
            }),
              (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
              this.loadContent(s, !0),
              this.getSlideItem(s).addClass("lg-current"),
              (this.index = s),
              this.updateCurrentCounter(s),
              this.LGel.trigger(me);
          } else this.closeGallery();
        }),
        (e.prototype.getItems = function () {
          if (((this.items = []), this.settings.dynamic))
            return this.settings.dynamicEl || [];
          if ("this" === this.settings.selector) this.items.push(this.el);
          else if (this.settings.selector)
            if ("string" == typeof this.settings.selector)
              if (this.settings.selectWithin) {
                var e = Ae(this.settings.selectWithin);
                this.items = e.find(this.settings.selector).get();
              } else
                this.items = this.el.querySelectorAll(this.settings.selector);
            else this.items = this.settings.selector;
          else this.items = this.el.children;
          return Ve(
            this.items,
            this.settings.extraProps,
            this.settings.getCaptionFromTitleOrAlt,
            this.settings.exThumbImage
          );
        }),
        (e.prototype.shouldHideScrollbar = function () {
          return (
            this.settings.hideScrollbar &&
            document.body === this.settings.container
          );
        }),
        (e.prototype.hideScrollbar = function () {
          if (this.shouldHideScrollbar()) {
            this.bodyPaddingRight = parseFloat(Ae("body").style().paddingRight);
            var e = document.documentElement.getBoundingClientRect(),
              t = window.innerWidth - e.width;
            Ae(document.body).css(
              "padding-right",
              t + this.bodyPaddingRight + "px"
            ),
              Ae(document.body).addClass("lg-overlay-open");
          }
        }),
        (e.prototype.resetScrollBar = function () {
          this.shouldHideScrollbar() &&
            (Ae(document.body).css(
              "padding-right",
              this.bodyPaddingRight + "px"
            ),
            Ae(document.body).removeClass("lg-overlay-open"));
        }),
        (e.prototype.openGallery = function (e, t) {
          var i = this;
          if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
            (this.lgOpened = !0),
              this.outer.removeClass("lg-hide-items"),
              this.hideScrollbar(),
              this.$container.addClass("lg-show");
            var s = this.getItemsToBeInsertedToDom(e, e);
            this.currentItemsInDom = s;
            var n = "";
            s.forEach(function (e) {
              n = n + '<div id="' + e + '" class="lg-item"></div>';
            }),
              this.$inner.append(n),
              this.addHtml(e);
            var r = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var o = this.mediaContainerPosition,
              l = o.top,
              a = o.bottom;
            this.settings.allowMediaOverlap ||
              this.setMediaContainerPosition(l, a);
            var d = this.galleryItems[e].__slideVideoInfo;
            this.zoomFromOrigin &&
              t &&
              ((this.currentImageSize = _e(
                t,
                this.outer,
                l + a,
                d && this.settings.videoMaxSize
              )),
              (r = ze(t, this.outer, l, a, this.currentImageSize))),
              (this.zoomFromOrigin && r) ||
                (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(e).removeClass("lg-complete"));
            var c = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration;
            setTimeout(function () {
              i.outer.addClass("lg-components-open");
            }, c),
              (this.index = e),
              this.LGel.trigger(ve),
              this.getSlideItem(e).addClass("lg-current"),
              (this.lGalleryOn = !1),
              (this.prevScrollTop = Ae(window).scrollTop()),
              setTimeout(function () {
                if (i.zoomFromOrigin && r) {
                  var t = i.getSlideItem(e);
                  t.css("transform", r),
                    setTimeout(function () {
                      t
                        .addClass("lg-start-progress lg-start-end-progress")
                        .css(
                          "transition-duration",
                          i.settings.startAnimationDuration + "ms"
                        ),
                        i.outer.addClass("lg-zoom-from-image");
                    }),
                    setTimeout(function () {
                      t.css("transform", "translate3d(0, 0, 0)");
                    }, 100);
                }
                setTimeout(function () {
                  i.$backdrop.addClass("in"),
                    i.$container.addClass("lg-show-in");
                }, 10),
                  setTimeout(function () {
                    i.settings.trapFocus &&
                      document.body === i.settings.container &&
                      i.trapFocus();
                  }, i.settings.backdropDuration + 50),
                  (i.zoomFromOrigin && r) ||
                    setTimeout(function () {
                      i.outer.addClass("lg-visible");
                    }, i.settings.backdropDuration),
                  i.slide(e, !1, !1, !1),
                  i.LGel.trigger(ye);
              }),
              document.body === this.settings.container &&
                Ae("html").addClass("lg-on");
          }
        }),
        (e.prototype.getMediaContainerPosition = function () {
          if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
          var e = this.$toolbar.get().clientHeight || 0,
            t = this.outer.find(".lg-components .lg-sub-html").get(),
            i =
              this.settings.defaultCaptionHeight || (t && t.clientHeight) || 0,
            s = this.outer.find(".lg-thumb-outer").get();
          return { top: e, bottom: (s ? s.clientHeight : 0) + i };
        }),
        (e.prototype.setMediaContainerPosition = function (e, t) {
          void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            this.$content.css("top", e + "px").css("bottom", t + "px");
        }),
        (e.prototype.hideBars = function () {
          var e = this;
          setTimeout(function () {
            e.outer.removeClass("lg-hide-items"),
              e.settings.hideBarsDelay > 0 &&
                (e.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                  e.outer.removeClass("lg-hide-items"),
                    clearTimeout(e.hideBarTimeout),
                    (e.hideBarTimeout = setTimeout(function () {
                      e.outer.addClass("lg-hide-items");
                    }, e.settings.hideBarsDelay));
                }),
                e.outer.trigger("mousemove.lg"));
          }, this.settings.showBarsAfter);
        }),
        (e.prototype.initPictureFill = function (e) {
          if (this.settings.supportLegacyBrowser)
            try {
              picturefill({ elements: [e.get()] });
            } catch (e) {
              console.warn(
                "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
              );
            }
        }),
        (e.prototype.counter = function () {
          if (this.settings.counter) {
            var e =
              '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
              this.getIdName("lg-counter-current") +
              '" class="lg-counter-current">' +
              (this.index + 1) +
              ' </span> /\n                <span id="' +
              this.getIdName("lg-counter-all") +
              '" class="lg-counter-all">' +
              this.galleryItems.length +
              " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(e);
          }
        }),
        (e.prototype.addHtml = function (e) {
          var t, i;
          if (
            (this.galleryItems[e].subHtmlUrl
              ? (i = this.galleryItems[e].subHtmlUrl)
              : (t = this.galleryItems[e].subHtml),
            !i)
          )
            if (t) {
              var s = t.substring(0, 1);
              ("." !== s && "#" !== s) ||
                (t =
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? Ae(this.items).eq(e).find(t).first().html()
                    : Ae(t).first().html());
            } else t = "";
          if (".lg-item" !== this.settings.appendSubHtmlTo)
            i
              ? this.outer.find(".lg-sub-html").load(i)
              : this.outer.find(".lg-sub-html").html(t);
          else {
            var n = Ae(this.getSlideItemId(e));
            i
              ? n.load(i)
              : n.append('<div class="lg-sub-html">' + t + "</div>");
          }
          null != t &&
            ("" === t
              ? this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
            this.LGel.trigger(fe, { index: e });
        }),
        (e.prototype.preload = function (e) {
          for (
            var t = 1;
            t <= this.settings.preload && !(t >= this.galleryItems.length - e);
            t++
          )
            this.loadContent(e + t, !1);
          for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
            this.loadContent(e - i, !1);
        }),
        (e.prototype.getDummyImgStyles = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                margin-left: -" +
                e.width / 2 +
                "px;\n                margin-top: -" +
                e.height / 2 +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getVideoContStyle = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getDummyImageContent = function (e, t, i) {
          var s;
          if ((this.settings.dynamic || (s = Ae(this.items).eq(t)), s)) {
            var n = void 0;
            if (
              !(n = this.settings.exThumbImage
                ? s.attr(this.settings.exThumbImage)
                : s.find("img").first().attr("src"))
            )
              return "";
            var r =
              "<img " +
              i +
              ' style="' +
              this.getDummyImgStyles(this.currentImageSize) +
              '" class="lg-dummy-img" src="' +
              n +
              '" />';
            return (
              e.addClass("lg-first-slide"),
              this.outer.addClass("lg-first-slide-loading"),
              r
            );
          }
          return "";
        }),
        (e.prototype.setImgMarkup = function (e, t, i) {
          var s = this.galleryItems[i],
            n = s.alt,
            r = s.srcset,
            o = s.sizes,
            l = s.sources,
            a = n ? 'alt="' + n + '"' : "",
            d =
              '<picture class="lg-img-wrap"> ' +
              (this.isFirstSlideWithZoomAnimation()
                ? this.getDummyImageContent(t, i, a)
                : Be(i, e, a, r, o, l)) +
              "</picture>";
          t.prepend(d);
        }),
        (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
          var n = e.find(".lg-object").first();
          Ne(n.get()) || t
            ? i()
            : (n.on("load.lg error.lg", function () {
                i && i();
              }),
              n.on("error.lg", function () {
                s && s();
              }));
        }),
        (e.prototype.onLgObjectLoad = function (e, t, i, s, n, r) {
          var o = this;
          this.onSlideObjectLoad(
            e,
            r,
            function () {
              o.triggerSlideItemLoad(e, t, i, s, n);
            },
            function () {
              e.addClass("lg-complete lg-complete_"),
                e.html(
                  '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                );
            }
          );
        }),
        (e.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
          var r = this,
            o = this.galleryItems[t],
            l = n && "video" === this.getSlideType(o) && !o.poster ? s : 0;
          setTimeout(function () {
            e.addClass("lg-complete lg-complete_"),
              r.LGel.trigger(be, { index: t, delay: i || 0, isFirstSlide: n });
          }, l);
        }),
        (e.prototype.isFirstSlideWithZoomAnimation = function () {
          return !(
            this.lGalleryOn ||
            !this.zoomFromOrigin ||
            !this.currentImageSize
          );
        }),
        (e.prototype.addSlideVideoInfo = function (e) {
          var t = this;
          e.forEach(function (e, i) {
            (e.__slideVideoInfo = Re(e.src, !!e.video, i)),
              e.__slideVideoInfo &&
                t.settings.loadYouTubePoster &&
                !e.poster &&
                e.__slideVideoInfo.youtube &&
                (e.poster =
                  "//img.youtube.com/vi/" +
                  e.__slideVideoInfo.youtube[1] +
                  "/maxresdefault.jpg");
          });
        }),
        (e.prototype.loadContent = function (e, t) {
          var i = this,
            s = this.galleryItems[e],
            n = Ae(this.getSlideItemId(e)),
            r = s.poster,
            o = s.srcset,
            l = s.sizes,
            a = s.sources,
            d = s.src,
            c = s.video,
            p = c && "string" == typeof c ? JSON.parse(c) : c;
          if (s.responsive) {
            var u = s.responsive.split(",");
            d = He(u) || d;
          }
          var h = s.__slideVideoInfo,
            g = "",
            m = !!s.iframe,
            f = !this.lGalleryOn,
            v = 0;
          if (
            (f &&
              (v =
                this.zoomFromOrigin && this.currentImageSize
                  ? this.settings.startAnimationDuration + 10
                  : this.settings.backdropDuration + 10),
            !n.hasClass("lg-loaded"))
          ) {
            if (h) {
              var y = this.mediaContainerPosition,
                b = y.top,
                w = y.bottom,
                S = _e(
                  this.items[e],
                  this.outer,
                  b + w,
                  h && this.settings.videoMaxSize
                );
              g = this.getVideoContStyle(S);
            }
            if (m) {
              var C = Ge(
                this.settings.iframeWidth,
                this.settings.iframeHeight,
                this.settings.iframeMaxWidth,
                this.settings.iframeMaxHeight,
                d,
                s.iframeTitle
              );
              n.prepend(C);
            } else if (r) {
              var T = "";
              f &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (T = this.getDummyImageContent(n, e, ""));
              C = Fe(r, T || "", g, this.settings.strings.playVideo, h);
              n.prepend(C);
            } else if (h) {
              C = '<div class="lg-video-cont " style="' + g + '"></div>';
              n.prepend(C);
            } else if ((this.setImgMarkup(d, n, e), o || a)) {
              var x = n.find(".lg-object");
              this.initPictureFill(x);
            }
            (r || h) &&
              this.LGel.trigger(he, {
                index: e,
                src: d,
                html5Video: p,
                hasPoster: !!r,
              }),
              this.LGel.trigger(pe, { index: e }),
              this.lGalleryOn &&
                ".lg-item" === this.settings.appendSubHtmlTo &&
                this.addHtml(e);
          }
          var E = 0;
          v && !Ae(document.body).hasClass("lg-from-hash") && (E = v),
            this.isFirstSlideWithZoomAnimation() &&
              (setTimeout(function () {
                n.removeClass(
                  "lg-start-end-progress lg-start-progress"
                ).removeAttr("style");
              }, this.settings.startAnimationDuration + 100),
              n.hasClass("lg-loaded") ||
                setTimeout(function () {
                  if ("image" === i.getSlideType(s)) {
                    var t = s.alt,
                      c = t ? 'alt="' + t + '"' : "";
                    if (
                      (n
                        .find(".lg-img-wrap")
                        .append(Be(e, d, c, o, l, s.sources)),
                      o || a)
                    ) {
                      var p = n.find(".lg-object");
                      i.initPictureFill(p);
                    }
                  }
                  ("image" === i.getSlideType(s) ||
                    ("video" === i.getSlideType(s) && r)) &&
                    (i.onLgObjectLoad(n, e, v, E, !0, !1),
                    i.onSlideObjectLoad(
                      n,
                      !(!h || !h.html5 || r),
                      function () {
                        i.loadContentOnFirstSlideLoad(e, n, E);
                      },
                      function () {
                        i.loadContentOnFirstSlideLoad(e, n, E);
                      }
                    ));
                }, this.settings.startAnimationDuration + 100)),
            n.addClass("lg-loaded"),
            (this.isFirstSlideWithZoomAnimation() &&
              ("video" !== this.getSlideType(s) || r)) ||
              this.onLgObjectLoad(n, e, v, E, f, !(!h || !h.html5 || r)),
            (this.zoomFromOrigin && this.currentImageSize) ||
              !n.hasClass("lg-complete_") ||
              this.lGalleryOn ||
              setTimeout(function () {
                n.addClass("lg-complete");
              }, this.settings.backdropDuration),
            (this.lGalleryOn = !0),
            !0 === t &&
              (n.hasClass("lg-complete_")
                ? this.preload(e)
                : n
                    .find(".lg-object")
                    .first()
                    .on("load.lg error.lg", function () {
                      i.preload(e);
                    }));
        }),
        (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
          var s = this;
          setTimeout(function () {
            t.find(".lg-dummy-img").remove(),
              t.removeClass("lg-first-slide"),
              s.outer.removeClass("lg-first-slide-loading"),
              (s.isDummyImageRemoved = !0),
              s.preload(e);
          }, i + 300);
        }),
        (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
          var s = this;
          void 0 === i && (i = 0);
          var n = [],
            r = Math.max(i, 3);
          r = Math.min(r, this.galleryItems.length);
          var o = "lg-item-" + this.lgId + "-" + t;
          if (this.galleryItems.length <= 3)
            return (
              this.galleryItems.forEach(function (e, t) {
                n.push("lg-item-" + s.lgId + "-" + t);
              }),
              n
            );
          if (e < (this.galleryItems.length - 1) / 2) {
            for (var l = e; l > e - r / 2 && l >= 0; l--)
              n.push("lg-item-" + this.lgId + "-" + l);
            var a = n.length;
            for (l = 0; l < r - a; l++)
              n.push("lg-item-" + this.lgId + "-" + (e + l + 1));
          } else {
            for (l = e; l <= this.galleryItems.length - 1 && l < e + r / 2; l++)
              n.push("lg-item-" + this.lgId + "-" + l);
            for (a = n.length, l = 0; l < r - a; l++)
              n.push("lg-item-" + this.lgId + "-" + (e - l - 1));
          }
          return (
            this.settings.loop &&
              (e === this.galleryItems.length - 1
                ? n.push("lg-item-" + this.lgId + "-0")
                : 0 === e &&
                  n.push(
                    "lg-item-" +
                      this.lgId +
                      "-" +
                      (this.galleryItems.length - 1)
                  )),
            -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
            n
          );
        }),
        (e.prototype.organizeSlideItems = function (e, t) {
          var i = this,
            s = this.getItemsToBeInsertedToDom(
              e,
              t,
              this.settings.numberOfSlideItemsInDom
            );
          return (
            s.forEach(function (e) {
              -1 === i.currentItemsInDom.indexOf(e) &&
                i.$inner.append('<div id="' + e + '" class="lg-item"></div>');
            }),
            this.currentItemsInDom.forEach(function (e) {
              -1 === s.indexOf(e) && Ae("#" + e).remove();
            }),
            s
          );
        }),
        (e.prototype.getPreviousSlideIndex = function () {
          var e = 0;
          try {
            var t = this.outer.find(".lg-current").first().attr("id");
            e = parseInt(t.split("-")[3]) || 0;
          } catch (t) {
            e = 0;
          }
          return e;
        }),
        (e.prototype.setDownloadValue = function (e) {
          if (this.settings.download) {
            var t = this.galleryItems[e];
            if (!1 === t.downloadUrl || "false" === t.downloadUrl)
              this.outer.addClass("lg-hide-download");
            else {
              var i = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
                i.attr("href", t.downloadUrl || t.src),
                t.download && i.attr("download", t.download);
            }
          }
        }),
        (e.prototype.makeSlideAnimation = function (e, t, i) {
          var s = this;
          this.lGalleryOn && i.addClass("lg-slide-progress"),
            setTimeout(
              function () {
                s.outer.addClass("lg-no-trans"),
                  s.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-next-slide"),
                  "prev" === e
                    ? (t.addClass("lg-prev-slide"), i.addClass("lg-next-slide"))
                    : (t.addClass("lg-next-slide"),
                      i.addClass("lg-prev-slide")),
                  setTimeout(function () {
                    s.outer.find(".lg-item").removeClass("lg-current"),
                      t.addClass("lg-current"),
                      s.outer.removeClass("lg-no-trans");
                  }, 50);
              },
              this.lGalleryOn ? this.settings.slideDelay : 0
            );
        }),
        (e.prototype.slide = function (e, t, i, s) {
          var n = this,
            r = this.getPreviousSlideIndex();
          if (
            ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
            !this.lGalleryOn || r !== e)
          ) {
            var o = this.galleryItems.length;
            if (!this.lgBusy) {
              this.settings.counter && this.updateCurrentCounter(e);
              var l = this.getSlideItem(e),
                a = this.getSlideItem(r),
                d = this.galleryItems[e],
                c = d.__slideVideoInfo;
              if (
                (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                this.setDownloadValue(e),
                c)
              ) {
                var p = this.mediaContainerPosition,
                  u = p.top,
                  h = p.bottom,
                  g = _e(
                    this.items[e],
                    this.outer,
                    u + h,
                    c && this.settings.videoMaxSize
                  );
                this.resizeVideoSlide(e, g);
              }
              if (
                (this.LGel.trigger(we, {
                  prevIndex: r,
                  index: e,
                  fromTouch: !!t,
                  fromThumb: !!i,
                }),
                (this.lgBusy = !0),
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(e),
                s || (e < r ? (s = "prev") : e > r && (s = "next")),
                t)
              ) {
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-prev-slide lg-current lg-next-slide");
                var m = void 0,
                  f = void 0;
                o > 2
                  ? ((m = e - 1),
                    (f = e + 1),
                    ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                      ((f = 0), (m = o - 1)))
                  : ((m = 0), (f = 1)),
                  "prev" === s
                    ? this.getSlideItem(f).addClass("lg-next-slide")
                    : this.getSlideItem(m).addClass("lg-prev-slide"),
                  l.addClass("lg-current");
              } else this.makeSlideAnimation(s, l, a);
              this.lGalleryOn
                ? setTimeout(function () {
                    n.loadContent(e, !0),
                      ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(e);
                  }, this.settings.speed +
                    50 +
                    (t ? 0 : this.settings.slideDelay))
                : this.loadContent(e, !0),
                setTimeout(function () {
                  (n.lgBusy = !1),
                    a.removeClass("lg-slide-progress"),
                    n.LGel.trigger(Se, {
                      prevIndex: r,
                      index: e,
                      fromTouch: t,
                      fromThumb: i,
                    });
                }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                  (t ? 0 : this.settings.slideDelay));
            }
            this.index = e;
          }
        }),
        (e.prototype.updateCurrentCounter = function (e) {
          this.getElementById("lg-counter-current").html(e + 1 + "");
        }),
        (e.prototype.updateCounterTotal = function () {
          this.getElementById("lg-counter-all").html(
            this.galleryItems.length + ""
          );
        }),
        (e.prototype.getSlideType = function (e) {
          return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
        }),
        (e.prototype.touchMove = function (e, t, i) {
          var s = t.pageX - e.pageX,
            n = t.pageY - e.pageY,
            r = !1;
          if (
            (this.swipeDirection
              ? (r = !0)
              : Math.abs(s) > 15
              ? ((this.swipeDirection = "horizontal"), (r = !0))
              : Math.abs(n) > 15 &&
                ((this.swipeDirection = "vertical"), (r = !0)),
            r)
          ) {
            var o = this.getSlideItem(this.index);
            if ("horizontal" === this.swipeDirection) {
              null == i || i.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(o, s, 0);
              var l = o.get().offsetWidth,
                a = (15 * l) / 100 - Math.abs((10 * s) / 100);
              this.setTranslate(
                this.outer.find(".lg-prev-slide").first(),
                -l + s - a,
                0
              ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  l + s + a,
                  0
                );
            } else if (
              "vertical" === this.swipeDirection &&
              this.settings.swipeToClose
            ) {
              null == i || i.preventDefault(),
                this.$container.addClass("lg-dragging-vertical");
              var d = 1 - Math.abs(n) / window.innerHeight;
              this.$backdrop.css("opacity", d);
              var c = 1 - Math.abs(n) / (2 * window.innerWidth);
              this.setTranslate(o, 0, n, c, c),
                Math.abs(n) > 100 &&
                  this.outer
                    .addClass("lg-hide-items")
                    .removeClass("lg-components-open");
            }
          }
        }),
        (e.prototype.touchEnd = function (e, t, i) {
          var s,
            n = this;
          "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function () {
              n.$container.removeClass("lg-dragging-vertical"),
                n.outer
                  .removeClass("lg-dragging lg-hide-items")
                  .addClass("lg-components-open");
              var r = !0;
              if ("horizontal" === n.swipeDirection) {
                s = e.pageX - t.pageX;
                var o = Math.abs(e.pageX - t.pageX);
                s < 0 && o > n.settings.swipeThreshold
                  ? (n.goToNextSlide(!0), (r = !1))
                  : s > 0 &&
                    o > n.settings.swipeThreshold &&
                    (n.goToPrevSlide(!0), (r = !1));
              } else if ("vertical" === n.swipeDirection) {
                if (
                  ((s = Math.abs(e.pageY - t.pageY)),
                  n.settings.closable && n.settings.swipeToClose && s > 100)
                )
                  return void n.closeGallery();
                n.$backdrop.css("opacity", 1);
              }
              if (
                (n.outer.find(".lg-item").removeAttr("style"),
                r && Math.abs(e.pageX - t.pageX) < 5)
              ) {
                var l = Ae(i.target);
                n.isPosterElement(l) && n.LGel.trigger(Ce);
              }
              n.swipeDirection = void 0;
            }),
            setTimeout(function () {
              n.outer.hasClass("lg-dragging") ||
                "lg-slide" === n.settings.mode ||
                n.outer.removeClass("lg-slide");
            }, this.settings.speed + 100);
        }),
        (e.prototype.enableSwipe = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableSwipe &&
            (this.$inner.on("touchstart.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var s = e.getSlideItem(e.index);
              (!Ae(i.target).hasClass("lg-item") &&
                !s.get().contains(i.target)) ||
                e.outer.hasClass("lg-zoomed") ||
                e.lgBusy ||
                1 !== i.targetTouches.length ||
                ((n = !0),
                (e.touchAction = "swipe"),
                e.manageSwipeClass(),
                (t = {
                  pageX: i.targetTouches[0].pageX,
                  pageY: i.targetTouches[0].pageY,
                }));
            }),
            this.$inner.on("touchmove.lg", function (r) {
              n &&
                "swipe" === e.touchAction &&
                1 === r.targetTouches.length &&
                ((i = {
                  pageX: r.targetTouches[0].pageX,
                  pageY: r.targetTouches[0].pageY,
                }),
                e.touchMove(t, i, r),
                (s = !0));
            }),
            this.$inner.on("touchend.lg", function (r) {
              if ("swipe" === e.touchAction) {
                if (s) (s = !1), e.touchEnd(i, t, r);
                else if (n) {
                  var o = Ae(r.target);
                  e.isPosterElement(o) && e.LGel.trigger(Ce);
                }
                (e.touchAction = void 0), (n = !1);
              }
            }));
        }),
        (e.prototype.enableDrag = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableDrag &&
            (this.outer.on("mousedown.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var n = e.getSlideItem(e.index);
              (Ae(i.target).hasClass("lg-item") ||
                n.get().contains(i.target)) &&
                (e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  (i.preventDefault(),
                  e.lgBusy ||
                    (e.manageSwipeClass(),
                    (t = { pageX: i.pageX, pageY: i.pageY }),
                    (s = !0),
                    (e.outer.get().scrollLeft += 1),
                    (e.outer.get().scrollLeft -= 1),
                    e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                    e.LGel.trigger(Te))));
            }),
            Ae(window).on("mousemove.lg.global" + this.lgId, function (r) {
              s &&
                e.lgOpened &&
                ((n = !0),
                (i = { pageX: r.pageX, pageY: r.pageY }),
                e.touchMove(t, i),
                e.LGel.trigger(xe));
            }),
            Ae(window).on("mouseup.lg.global" + this.lgId, function (r) {
              if (e.lgOpened) {
                var o = Ae(r.target);
                n
                  ? ((n = !1), e.touchEnd(i, t, r), e.LGel.trigger(Ee))
                  : e.isPosterElement(o) && e.LGel.trigger(Ce),
                  s &&
                    ((s = !1),
                    e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
              }
            }));
        }),
        (e.prototype.triggerPosterClick = function () {
          var e = this;
          this.$inner.on("click.lg", function (t) {
            !e.dragOrSwipeEnabled &&
              e.isPosterElement(Ae(t.target)) &&
              e.LGel.trigger(Ce);
          });
        }),
        (e.prototype.manageSwipeClass = function () {
          var e = this.index + 1,
            t = this.index - 1;
          this.settings.loop &&
            this.galleryItems.length > 2 &&
            (0 === this.index
              ? (t = this.galleryItems.length - 1)
              : this.index === this.galleryItems.length - 1 && (e = 0)),
            this.outer
              .find(".lg-item")
              .removeClass("lg-next-slide lg-prev-slide"),
            t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
            this.getSlideItem(e).addClass("lg-next-slide");
        }),
        (e.prototype.goToNextSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index + 1 < this.galleryItems.length
                ? (this.index++,
                  this.LGel.trigger(Ie, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : i
                ? ((this.index = 0),
                  this.LGel.trigger(Ie, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-right-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-right-end");
                  }, 400)));
        }),
        (e.prototype.goToPrevSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index > 0
                ? (this.index--,
                  this.LGel.trigger(Le, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : i
                ? ((this.index = this.galleryItems.length - 1),
                  this.LGel.trigger(Le, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-left-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-left-end");
                  }, 400)));
        }),
        (e.prototype.keyPress = function () {
          var e = this;
          Ae(window).on("keydown.lg.global" + this.lgId, function (t) {
            e.lgOpened &&
              !0 === e.settings.escKey &&
              27 === t.keyCode &&
              (t.preventDefault(),
              e.settings.allowMediaOverlap &&
              e.outer.hasClass("lg-can-toggle") &&
              e.outer.hasClass("lg-components-open")
                ? e.outer.removeClass("lg-components-open")
                : e.closeGallery()),
              e.lgOpened &&
                e.galleryItems.length > 1 &&
                (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
          });
        }),
        (e.prototype.arrow = function () {
          var e = this;
          this.getElementById("lg-prev").on("click.lg", function () {
            e.goToPrevSlide();
          }),
            this.getElementById("lg-next").on("click.lg", function () {
              e.goToNextSlide();
            });
        }),
        (e.prototype.arrowDisable = function (e) {
          if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var t = this.getElementById("lg-prev"),
              i = this.getElementById("lg-next");
            e + 1 === this.galleryItems.length
              ? i.attr("disabled", "disabled").addClass("disabled")
              : i.removeAttr("disabled").removeClass("disabled"),
              0 === e
                ? t.attr("disabled", "disabled").addClass("disabled")
                : t.removeAttr("disabled").removeClass("disabled");
          }
        }),
        (e.prototype.setTranslate = function (e, t, i, s, n) {
          void 0 === s && (s = 1),
            void 0 === n && (n = 1),
            e.css(
              "transform",
              "translate3d(" +
                t +
                "px, " +
                i +
                "px, 0px) scale3d(" +
                s +
                ", " +
                n +
                ", 1)"
            );
        }),
        (e.prototype.mousewheel = function () {
          var e = this,
            t = 0;
          this.outer.on("wheel.lg", function (i) {
            if (i.deltaY && !(e.galleryItems.length < 2)) {
              i.preventDefault();
              var s = new Date().getTime();
              s - t < 1e3 ||
                ((t = s),
                i.deltaY > 0
                  ? e.goToNextSlide()
                  : i.deltaY < 0 && e.goToPrevSlide());
            }
          });
        }),
        (e.prototype.isSlideElement = function (e) {
          return (
            e.hasClass("lg-outer") ||
            e.hasClass("lg-item") ||
            e.hasClass("lg-img-wrap")
          );
        }),
        (e.prototype.isPosterElement = function (e) {
          var t = this.getSlideItem(this.index)
            .find(".lg-video-play-button")
            .get();
          return (
            e.hasClass("lg-video-poster") ||
            e.hasClass("lg-video-play-button") ||
            (t && t.contains(e.get()))
          );
        }),
        (e.prototype.toggleMaximize = function () {
          var e = this;
          this.getElementById("lg-maximize").on("click.lg", function () {
            e.$container.toggleClass("lg-inline"), e.refreshOnResize();
          });
        }),
        (e.prototype.invalidateItems = function () {
          for (var e = 0; e < this.items.length; e++) {
            var t = Ae(this.items[e]);
            t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
          }
        }),
        (e.prototype.trapFocus = function () {
          var e = this;
          this.$container.get().focus({ preventScroll: !0 }),
            Ae(window).on("keydown.lg.global" + this.lgId, function (t) {
              if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                var i = je(e.$container.get()),
                  s = i[0],
                  n = i[i.length - 1];
                t.shiftKey
                  ? document.activeElement === s &&
                    (n.focus(), t.preventDefault())
                  : document.activeElement === n &&
                    (s.focus(), t.preventDefault());
              }
            });
        }),
        (e.prototype.manageCloseGallery = function () {
          var e = this;
          if (this.settings.closable) {
            var t = !1;
            this.getElementById("lg-close").on("click.lg", function () {
              e.closeGallery();
            }),
              this.settings.closeOnTap &&
                (this.outer.on("mousedown.lg", function (i) {
                  var s = Ae(i.target);
                  t = !!e.isSlideElement(s);
                }),
                this.outer.on("mousemove.lg", function () {
                  t = !1;
                }),
                this.outer.on("mouseup.lg", function (i) {
                  var s = Ae(i.target);
                  e.isSlideElement(s) &&
                    t &&
                    (e.outer.hasClass("lg-dragging") || e.closeGallery());
                }));
          }
        }),
        (e.prototype.closeGallery = function (e) {
          var t = this;
          if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
          this.LGel.trigger(Me),
            this.settings.resetScrollPosition &&
              !this.settings.hideScrollbar &&
              Ae(window).scrollTop(this.prevScrollTop);
          var i,
            s = this.items[this.index];
          if (this.zoomFromOrigin && s) {
            var n = this.mediaContainerPosition,
              r = n.top,
              o = n.bottom,
              l = this.galleryItems[this.index],
              a = l.__slideVideoInfo,
              d = l.poster,
              c = _e(
                s,
                this.outer,
                r + o,
                a && d && this.settings.videoMaxSize
              );
            i = ze(s, this.outer, r, o, c);
          }
          this.zoomFromOrigin && i
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms"
                )
                .css("transform", i))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            (this.lGalleryOn = !1),
            (this.isDummyImageRemoved = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            clearTimeout(this.hideBarTimeout),
            (this.hideBarTimeout = !1),
            Ae("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
          var p =
            this.zoomFromOrigin && i
              ? Math.max(
                  this.settings.startAnimationDuration,
                  this.settings.backdropDuration
                )
              : this.settings.backdropDuration;
          return (
            this.$container.removeClass("lg-show-in"),
            setTimeout(function () {
              t.zoomFromOrigin &&
                i &&
                t.outer.removeClass("lg-zoom-from-image"),
                t.$container.removeClass("lg-show"),
                t.resetScrollBar(),
                t.$backdrop
                  .removeAttr("style")
                  .css(
                    "transition-duration",
                    t.settings.backdropDuration + "ms"
                  ),
                t.outer.removeClass("lg-closing " + t.settings.startClass),
                t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                t.$inner.empty(),
                t.lgOpened && t.LGel.trigger(Pe, { instance: t }),
                t.$container.get() && t.$container.get().blur(),
                (t.lgOpened = !1);
            }, p + 100),
            p + 100
          );
        }),
        (e.prototype.initModules = function () {
          this.plugins.forEach(function (e) {
            try {
              e.init();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly initiated"
              );
            }
          });
        }),
        (e.prototype.destroyModules = function (e) {
          this.plugins.forEach(function (t) {
            try {
              e ? t.destroy() : t.closeGallery && t.closeGallery();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly destroyed"
              );
            }
          });
        }),
        (e.prototype.refresh = function (e) {
          this.settings.dynamic || this.invalidateItems(),
            (this.galleryItems = e || this.getItems()),
            this.updateControls(),
            this.openGalleryOnItemClick(),
            this.LGel.trigger(me);
        }),
        (e.prototype.updateControls = function () {
          this.addSlideVideoInfo(this.galleryItems),
            this.updateCounterTotal(),
            this.manageSingleSlideClassName();
        }),
        (e.prototype.destroy = function () {
          var e = this,
            t = this.closeGallery(!0);
          return (
            setTimeout(function () {
              e.destroyModules(!0),
                e.settings.dynamic || e.invalidateItems(),
                Ae(window).off(".lg.global" + e.lgId),
                e.LGel.off(".lg"),
                e.$container.remove();
            }, t),
            t
          );
        }),
        e
      );
    })();
  const Xe = function (e, t) {
      return new Ye(e, t);
    },
    Ue = document.querySelectorAll("[data-gallery]");
  if (Ue.length) {
    let t = [];
    Ue.forEach((e) => {
      t.push({
        gallery: e,
        galleryClass: Xe(e, {
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          speed: 500,
        }),
      });
    }),
      (e.gallery = t);
  }
  var Ke, Ze;
  (Ke = self),
    (Ze = function () {
      return (() => {
        var e = {
            d: (t, i) => {
              for (var s in i)
                e.o(i, s) &&
                  !e.o(t, s) &&
                  Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            },
          },
          t = {};
        e.r(t), e.d(t, { default: () => i, divideNumbers: () => n });
        const i = (e, t = {}) => {
            const { action: i = "start", duration: r = 1e3, delay: o = 16 } = t;
            if ("stop" === i) return void s(e);
            if ((s(e), !/[0-9]/.test(e.innerHTML))) return;
            const l = n(e.innerHTML, {
              duration: r || e.getAttribute("data-duration"),
              delay: o || e.getAttribute("data-delay"),
            });
            (e._countUpOrigInnerHTML = e.innerHTML),
              (e.innerHTML = l[0] || "&nbsp;"),
              (e.style.visibility = "visible");
            const a = function () {
              (e.innerHTML = l.shift() || "&nbsp;"),
                l.length
                  ? (clearTimeout(e.countUpTimeout),
                    (e.countUpTimeout = setTimeout(a, o)))
                  : (e._countUpOrigInnerHTML = void 0);
            };
            e.countUpTimeout = setTimeout(a, o);
          },
          s = (e) => {
            clearTimeout(e.countUpTimeout),
              e._countUpOrigInnerHTML &&
                ((e.innerHTML = e._countUpOrigInnerHTML),
                (e._countUpOrigInnerHTML = void 0)),
              (e.style.visibility = "");
          },
          n = (e, t = {}) => {
            const { duration: i = 1e3, delay: s = 16 } = t,
              n = i / s,
              r = e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),
              o = [];
            for (let e = 0; e < n; e++) o.push("");
            for (let e = 0; e < r.length; e++)
              if (
                /([0-9.][,.0-9]*[0-9]*)/.test(r[e]) &&
                !/<[^>]+>/.test(r[e])
              ) {
                let t = r[e];
                const i = [...t.matchAll(/[.,]/g)]
                  .map((e) => ({ char: e[0], i: t.length - e.index - 1 }))
                  .sort((e, t) => e.i - t.i);
                t = t.replace(/[.,]/g, "");
                let s = o.length - 1;
                for (let e = n; e >= 1; e--) {
                  let r = parseInt((t / n) * e, 10);
                  (r = i.reduce(
                    (e, { char: t, i }) =>
                      e.length <= i ? e : e.slice(0, -i) + t + e.slice(-i),
                    r.toString()
                  )),
                    (o[s--] += r);
                }
              } else for (let t = 0; t < n; t++) o[t] += r[e];
            return (o[o.length] = e.toString()), o;
          };
        return t;
      })();
    }),
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = Ze())
      : "function" == typeof define && define.amd
      ? define([], Ze)
      : "object" == typeof exports
      ? (exports.counterUp = Ze())
      : (Ke.counterUp = Ze()),
    new WOW().init();
  const Je = document.querySelector(".scroll-top ");
  window.addEventListener("scroll", () => {
    (window.pageYOffset || document.documentElement.scrollTop) > 500
      ? Je.classList.add("active")
      : Je.classList.remove("active");
  }),
    Je.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  let Qe,
    et = document.querySelectorAll(".counterUp");
  et.length > 0 && (Qe = window.counterUp.default);
  const tt = new IntersectionObserver(
    (e) => {
      e.forEach((e) => {
        const t = e.target;
        e.isIntersecting &&
          !t.classList.contains("is-visible") &&
          (Qe(t, { duration: 2e3, delay: 16 }), t.classList.add("is-visible"));
      });
    },
    { threshold: 1 }
  );
  et.forEach((e) => {
    tt.observe(e);
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (e) {
        s &&
          e.target.closest(".icon-menu") &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? n(e) : r(e);
          })(),
          document.documentElement.classList.toggle("menu-open"));
      }),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const s = Array.from(e).filter(function (e, t, i) {
          return !e.dataset.spollers.split(",")[0];
        });
        s.length && r(s);
        let n = o(e, "spollers");
        function r(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  l(e),
                  e.addEventListener("click", a))
                : (e.classList.remove("_spoller-init"),
                  l(e, !1),
                  e.removeEventListener("click", a));
          });
        }
        function l(e, t = !0) {
          let i = e.querySelectorAll("[data-spoller]");
          i.length &&
            ((i = Array.from(i).filter(
              (t) => t.closest("[data-spollers]") === e
            )),
            i.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            }));
        }
        function a(e) {
          const s = e.target;
          if (s.closest("[data-spoller]")) {
            const n = s.closest("[data-spoller]"),
              r = n.closest("[data-spollers]"),
              o = r.hasAttribute("data-one-spoller"),
              l = r.dataset.spollersSpeed
                ? parseInt(r.dataset.spollersSpeed)
                : 500;
            r.querySelectorAll("._slide").length ||
              (o && !n.classList.contains("_spoller-active") && d(r),
              n.classList.toggle("_spoller-active"),
              ((e, s = 500) => {
                e.hidden ? i(e, s) : t(e, s);
              })(n.nextElementSibling, l)),
              e.preventDefault();
          }
        }
        function d(e) {
          const i = e.querySelector("[data-spoller]._spoller-active"),
            s = e.dataset.spollersSpeed
              ? parseInt(e.dataset.spollersSpeed)
              : 500;
          i &&
            !e.querySelectorAll("._slide").length &&
            (i.classList.remove("_spoller-active"), t(i.nextElementSibling, s));
        }
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              r(e.itemsArray, e.matchMedia);
            }),
              r(e.itemsArray, e.matchMedia);
          });
      }
    })();
})();
