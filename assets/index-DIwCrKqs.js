(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const c of r.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && l(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = i(s);
    fetch(s.href, r);
  }
})();
var B,
  f,
  me,
  A,
  re,
  ve,
  be,
  ge,
  J,
  Z,
  Q,
  T = {},
  ye = [],
  $e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  j = Array.isArray;
function S(t, e) {
  for (var i in e) t[i] = e[i];
  return t;
}
function ee(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function He(t, e, i) {
  var l,
    s,
    r,
    c = {};
  for (r in e)
    r == "key" ? (l = e[r]) : r == "ref" ? (s = e[r]) : (c[r] = e[r]);
  if (
    (arguments.length > 2 &&
      (c.children = arguments.length > 3 ? B.call(arguments, 2) : i),
    typeof t == "function" && t.defaultProps != null)
  )
    for (r in t.defaultProps) c[r] === void 0 && (c[r] = t.defaultProps[r]);
  return I(t, c, l, s, null);
}
function I(t, e, i, l, s) {
  var r = {
    type: t,
    props: e,
    key: i,
    ref: l,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: s ?? ++me,
    __i: -1,
    __u: 0,
  };
  return s == null && f.vnode != null && f.vnode(r), r;
}
function k(t) {
  return t.children;
}
function L(t, e) {
  (this.props = t), (this.context = e);
}
function $(t, e) {
  if (e == null) return t.__ ? $(t.__, t.__i + 1) : null;
  for (var i; e < t.__k.length; e++)
    if ((i = t.__k[e]) != null && i.__e != null) return i.__e;
  return typeof t.type == "function" ? $(t) : null;
}
function we(t) {
  var e, i;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((i = t.__k[e]) != null && i.__e != null) {
        t.__e = t.__c.base = i.__e;
        break;
      }
    return we(t);
  }
}
function le(t) {
  ((!t.__d && (t.__d = !0) && A.push(t) && !W.__r++) ||
    re != f.debounceRendering) &&
    ((re = f.debounceRendering) || ve)(W);
}
function W() {
  for (var t, e, i, l, s, r, c, _ = 1; A.length; )
    A.length > _ && A.sort(be),
      (t = A.shift()),
      (_ = A.length),
      t.__d &&
        ((i = void 0),
        (l = void 0),
        (s = (l = (e = t).__v).__e),
        (r = []),
        (c = []),
        e.__P &&
          (((i = S({}, l)).__v = l.__v + 1),
          f.vnode && f.vnode(i),
          te(
            e.__P,
            i,
            l,
            e.__n,
            e.__P.namespaceURI,
            32 & l.__u ? [s] : null,
            r,
            s ?? $(l),
            !!(32 & l.__u),
            c
          ),
          (i.__v = l.__v),
          (i.__.__k[i.__i] = i),
          ke(r, i, c),
          (l.__e = l.__ = null),
          i.__e != s && we(i)));
  W.__r = 0;
}
function xe(t, e, i, l, s, r, c, _, u, a, h) {
  var o,
    p,
    d,
    y,
    x,
    w,
    m,
    v = (l && l.__k) || ye,
    P = e.length;
  for (u = qe(i, e, v, u, P), o = 0; o < P; o++)
    (d = i.__k[o]) != null &&
      ((p = d.__i == -1 ? T : v[d.__i] || T),
      (d.__i = o),
      (w = te(t, d, p, s, r, c, _, u, a, h)),
      (y = d.__e),
      d.ref &&
        p.ref != d.ref &&
        (p.ref && ie(p.ref, null, d), h.push(d.ref, d.__c || y, d)),
      x == null && y != null && (x = y),
      (m = !!(4 & d.__u)) || p.__k === d.__k
        ? (u = Ne(d, u, t, m))
        : typeof d.type == "function" && w !== void 0
        ? (u = w)
        : y && (u = y.nextSibling),
      (d.__u &= -7));
  return (i.__e = x), u;
}
function qe(t, e, i, l, s) {
  var r,
    c,
    _,
    u,
    a,
    h = i.length,
    o = h,
    p = 0;
  for (t.__k = new Array(s), r = 0; r < s; r++)
    (c = e[r]) != null && typeof c != "boolean" && typeof c != "function"
      ? ((u = r + p),
        ((c = t.__k[r] =
          typeof c == "string" ||
          typeof c == "number" ||
          typeof c == "bigint" ||
          c.constructor == String
            ? I(null, c, null, null, null)
            : j(c)
            ? I(k, { children: c }, null, null, null)
            : c.constructor == null && c.__b > 0
            ? I(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v)
            : c).__ = t),
        (c.__b = t.__b + 1),
        (_ = null),
        (a = c.__i = Le(c, i, u, o)) != -1 && (o--, (_ = i[a]) && (_.__u |= 2)),
        _ == null || _.__v == null
          ? (a == -1 && (s > h ? p-- : s < h && p++),
            typeof c.type != "function" && (c.__u |= 4))
          : a != u &&
            (a == u - 1
              ? p--
              : a == u + 1
              ? p++
              : (a > u ? p-- : p++, (c.__u |= 4))))
      : (t.__k[r] = null);
  if (o)
    for (r = 0; r < h; r++)
      (_ = i[r]) != null &&
        (2 & _.__u) == 0 &&
        (_.__e == l && (l = $(_)), Pe(_, _));
  return l;
}
function Ne(t, e, i, l) {
  var s, r;
  if (typeof t.type == "function") {
    for (s = t.__k, r = 0; s && r < s.length; r++)
      s[r] && ((s[r].__ = t), (e = Ne(s[r], e, i, l)));
    return e;
  }
  t.__e != e &&
    (l &&
      (e && t.type && !e.parentNode && (e = $(t)),
      i.insertBefore(t.__e, e || null)),
    (e = t.__e));
  do e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Le(t, e, i, l) {
  var s,
    r,
    c,
    _ = t.key,
    u = t.type,
    a = e[i],
    h = a != null && (2 & a.__u) == 0;
  if ((a === null && t.key == null) || (h && _ == a.key && u == a.type))
    return i;
  if (l > (h ? 1 : 0)) {
    for (s = i - 1, r = i + 1; s >= 0 || r < e.length; )
      if (
        (a = e[(c = s >= 0 ? s-- : r++)]) != null &&
        (2 & a.__u) == 0 &&
        _ == a.key &&
        u == a.type
      )
        return c;
  }
  return -1;
}
function oe(t, e, i) {
  e[0] == "-"
    ? t.setProperty(e, i ?? "")
    : (t[e] =
        i == null ? "" : typeof i != "number" || $e.test(e) ? i : i + "px");
}
function U(t, e, i, l, s) {
  var r, c;
  e: if (e == "style")
    if (typeof i == "string") t.style.cssText = i;
    else {
      if ((typeof l == "string" && (t.style.cssText = l = ""), l))
        for (e in l) (i && e in i) || oe(t.style, e, "");
      if (i) for (e in i) (l && i[e] == l[e]) || oe(t.style, e, i[e]);
    }
  else if (e[0] == "o" && e[1] == "n")
    (r = e != (e = e.replace(ge, "$1"))),
      (c = e.toLowerCase()),
      (e =
        c in t || e == "onFocusOut" || e == "onFocusIn"
          ? c.slice(2)
          : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + r] = i),
      i
        ? l
          ? (i.u = l.u)
          : ((i.u = J), t.addEventListener(e, r ? Q : Z, r))
        : t.removeEventListener(e, r ? Q : Z, r);
  else {
    if (s == "http://www.w3.org/2000/svg")
      e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e != "width" &&
      e != "height" &&
      e != "href" &&
      e != "list" &&
      e != "form" &&
      e != "tabIndex" &&
      e != "download" &&
      e != "rowSpan" &&
      e != "colSpan" &&
      e != "role" &&
      e != "popover" &&
      e in t
    )
      try {
        t[e] = i ?? "";
        break e;
      } catch {}
    typeof i == "function" ||
      (i == null || (i === !1 && e[4] != "-")
        ? t.removeAttribute(e)
        : t.setAttribute(e, e == "popover" && i == 1 ? "" : i));
  }
}
function se(t) {
  return function (e) {
    if (this.l) {
      var i = this.l[e.type + t];
      if (e.t == null) e.t = J++;
      else if (e.t < i.u) return;
      return i(f.event ? f.event(e) : e);
    }
  };
}
function te(t, e, i, l, s, r, c, _, u, a) {
  var h,
    o,
    p,
    d,
    y,
    x,
    w,
    m,
    v,
    P,
    C,
    E,
    H,
    ne,
    F,
    q,
    V,
    N = e.type;
  if (e.constructor != null) return null;
  128 & i.__u && ((u = !!(32 & i.__u)), (r = [(_ = e.__e = i.__e)])),
    (h = f.__b) && h(e);
  e: if (typeof N == "function")
    try {
      if (
        ((m = e.props),
        (v = "prototype" in N && N.prototype.render),
        (P = (h = N.contextType) && l[h.__c]),
        (C = h ? (P ? P.props.value : h.__) : l),
        i.__c
          ? (w = (o = e.__c = i.__c).__ = o.__E)
          : (v
              ? (e.__c = o = new N(m, C))
              : ((e.__c = o = new L(m, C)),
                (o.constructor = N),
                (o.render = Ee)),
            P && P.sub(o),
            (o.props = m),
            o.state || (o.state = {}),
            (o.context = C),
            (o.__n = l),
            (p = o.__d = !0),
            (o.__h = []),
            (o._sb = [])),
        v && o.__s == null && (o.__s = o.state),
        v &&
          N.getDerivedStateFromProps != null &&
          (o.__s == o.state && (o.__s = S({}, o.__s)),
          S(o.__s, N.getDerivedStateFromProps(m, o.__s))),
        (d = o.props),
        (y = o.state),
        (o.__v = e),
        p)
      )
        v &&
          N.getDerivedStateFromProps == null &&
          o.componentWillMount != null &&
          o.componentWillMount(),
          v && o.componentDidMount != null && o.__h.push(o.componentDidMount);
      else {
        if (
          (v &&
            N.getDerivedStateFromProps == null &&
            m !== d &&
            o.componentWillReceiveProps != null &&
            o.componentWillReceiveProps(m, C),
          (!o.__e &&
            o.shouldComponentUpdate != null &&
            o.shouldComponentUpdate(m, o.__s, C) === !1) ||
            e.__v == i.__v)
        ) {
          for (
            e.__v != i.__v && ((o.props = m), (o.state = o.__s), (o.__d = !1)),
              e.__e = i.__e,
              e.__k = i.__k,
              e.__k.some(function (M) {
                M && (M.__ = e);
              }),
              E = 0;
            E < o._sb.length;
            E++
          )
            o.__h.push(o._sb[E]);
          (o._sb = []), o.__h.length && c.push(o);
          break e;
        }
        o.componentWillUpdate != null && o.componentWillUpdate(m, o.__s, C),
          v &&
            o.componentDidUpdate != null &&
            o.__h.push(function () {
              o.componentDidUpdate(d, y, x);
            });
      }
      if (
        ((o.context = C),
        (o.props = m),
        (o.__P = t),
        (o.__e = !1),
        (H = f.__r),
        (ne = 0),
        v)
      ) {
        for (
          o.state = o.__s,
            o.__d = !1,
            H && H(e),
            h = o.render(o.props, o.state, o.context),
            F = 0;
          F < o._sb.length;
          F++
        )
          o.__h.push(o._sb[F]);
        o._sb = [];
      } else
        do
          (o.__d = !1),
            H && H(e),
            (h = o.render(o.props, o.state, o.context)),
            (o.state = o.__s);
        while (o.__d && ++ne < 25);
      (o.state = o.__s),
        o.getChildContext != null && (l = S(S({}, l), o.getChildContext())),
        v &&
          !p &&
          o.getSnapshotBeforeUpdate != null &&
          (x = o.getSnapshotBeforeUpdate(d, y)),
        (q = h),
        h != null &&
          h.type === k &&
          h.key == null &&
          (q = Se(h.props.children)),
        (_ = xe(t, j(q) ? q : [q], e, i, l, s, r, c, _, u, a)),
        (o.base = e.__e),
        (e.__u &= -161),
        o.__h.length && c.push(o),
        w && (o.__E = o.__ = null);
    } catch (M) {
      if (((e.__v = null), u || r != null))
        if (M.then) {
          for (e.__u |= u ? 160 : 128; _ && _.nodeType == 8 && _.nextSibling; )
            _ = _.nextSibling;
          (r[r.indexOf(_)] = null), (e.__e = _);
        } else {
          for (V = r.length; V--; ) ee(r[V]);
          Y(e);
        }
      else (e.__e = i.__e), (e.__k = i.__k), M.then || Y(e);
      f.__e(M, e, i);
    }
  else
    r == null && e.__v == i.__v
      ? ((e.__k = i.__k), (e.__e = i.__e))
      : (_ = e.__e = Te(i.__e, e, i, l, s, r, c, u, a));
  return (h = f.diffed) && h(e), 128 & e.__u ? void 0 : _;
}
function Y(t) {
  t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach(Y);
}
function ke(t, e, i) {
  for (var l = 0; l < i.length; l++) ie(i[l], i[++l], i[++l]);
  f.__c && f.__c(e, t),
    t.some(function (s) {
      try {
        (t = s.__h),
          (s.__h = []),
          t.some(function (r) {
            r.call(s);
          });
      } catch (r) {
        f.__e(r, s.__v);
      }
    });
}
function Se(t) {
  return typeof t != "object" || t == null || (t.__b && t.__b > 0)
    ? t
    : j(t)
    ? t.map(Se)
    : S({}, t);
}
function Te(t, e, i, l, s, r, c, _, u) {
  var a,
    h,
    o,
    p,
    d,
    y,
    x,
    w = i.props,
    m = e.props,
    v = e.type;
  if (
    (v == "svg"
      ? (s = "http://www.w3.org/2000/svg")
      : v == "math"
      ? (s = "http://www.w3.org/1998/Math/MathML")
      : s || (s = "http://www.w3.org/1999/xhtml"),
    r != null)
  ) {
    for (a = 0; a < r.length; a++)
      if (
        (d = r[a]) &&
        "setAttribute" in d == !!v &&
        (v ? d.localName == v : d.nodeType == 3)
      ) {
        (t = d), (r[a] = null);
        break;
      }
  }
  if (t == null) {
    if (v == null) return document.createTextNode(m);
    (t = document.createElementNS(s, v, m.is && m)),
      _ && (f.__m && f.__m(e, r), (_ = !1)),
      (r = null);
  }
  if (v == null) w === m || (_ && t.data == m) || (t.data = m);
  else {
    if (((r = r && B.call(t.childNodes)), (w = i.props || T), !_ && r != null))
      for (w = {}, a = 0; a < t.attributes.length; a++)
        w[(d = t.attributes[a]).name] = d.value;
    for (a in w)
      if (((d = w[a]), a != "children")) {
        if (a == "dangerouslySetInnerHTML") o = d;
        else if (!(a in m)) {
          if (
            (a == "value" && "defaultValue" in m) ||
            (a == "checked" && "defaultChecked" in m)
          )
            continue;
          U(t, a, null, d, s);
        }
      }
    for (a in m)
      (d = m[a]),
        a == "children"
          ? (p = d)
          : a == "dangerouslySetInnerHTML"
          ? (h = d)
          : a == "value"
          ? (y = d)
          : a == "checked"
          ? (x = d)
          : (_ && typeof d != "function") || w[a] === d || U(t, a, d, w[a], s);
    if (h)
      _ ||
        (o && (h.__html == o.__html || h.__html == t.innerHTML)) ||
        (t.innerHTML = h.__html),
        (e.__k = []);
    else if (
      (o && (t.innerHTML = ""),
      xe(
        e.type == "template" ? t.content : t,
        j(p) ? p : [p],
        e,
        i,
        l,
        v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        r,
        c,
        r ? r[0] : i.__k && $(i, 0),
        _,
        u
      ),
      r != null)
    )
      for (a = r.length; a--; ) ee(r[a]);
    _ ||
      ((a = "value"),
      v == "progress" && y == null
        ? t.removeAttribute("value")
        : y != null &&
          (y !== t[a] ||
            (v == "progress" && !y) ||
            (v == "option" && y != w[a])) &&
          U(t, a, y, w[a], s),
      (a = "checked"),
      x != null && x != t[a] && U(t, a, x, w[a], s));
  }
  return t;
}
function ie(t, e, i) {
  try {
    if (typeof t == "function") {
      var l = typeof t.__u == "function";
      l && t.__u(), (l && e == null) || (t.__u = t(e));
    } else t.current = e;
  } catch (s) {
    f.__e(s, i);
  }
}
function Pe(t, e, i) {
  var l, s;
  if (
    (f.unmount && f.unmount(t),
    (l = t.ref) && ((l.current && l.current != t.__e) || ie(l, null, e)),
    (l = t.__c) != null)
  ) {
    if (l.componentWillUnmount)
      try {
        l.componentWillUnmount();
      } catch (r) {
        f.__e(r, e);
      }
    l.base = l.__P = null;
  }
  if ((l = t.__k))
    for (s = 0; s < l.length; s++)
      l[s] && Pe(l[s], e, i || typeof t.type != "function");
  i || ee(t.__e), (t.__c = t.__ = t.__e = void 0);
}
function Ee(t, e, i) {
  return this.constructor(t, i);
}
function Fe(t, e, i) {
  var l, s, r, c;
  e == document && (e = document.documentElement),
    f.__ && f.__(t, e),
    (s = (l = !1) ? null : e.__k),
    (r = []),
    (c = []),
    te(
      e,
      (t = e.__k = He(k, null, [t])),
      s || T,
      T,
      e.namespaceURI,
      s ? null : e.firstChild ? B.call(e.childNodes) : null,
      r,
      s ? s.__e : e.firstChild,
      l,
      c
    ),
    ke(r, t, c);
}
(B = ye.slice),
  (f = {
    __e: function (t, e, i, l) {
      for (var s, r, c; (e = e.__); )
        if ((s = e.__c) && !s.__)
          try {
            if (
              ((r = s.constructor) &&
                r.getDerivedStateFromError != null &&
                (s.setState(r.getDerivedStateFromError(t)), (c = s.__d)),
              s.componentDidCatch != null &&
                (s.componentDidCatch(t, l || {}), (c = s.__d)),
              c)
            )
              return (s.__E = s);
          } catch (_) {
            t = _;
          }
      throw t;
    },
  }),
  (me = 0),
  (L.prototype.setState = function (t, e) {
    var i;
    (i =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = S({}, this.state))),
      typeof t == "function" && (t = t(S({}, i), this.props)),
      t && S(i, t),
      t != null && this.__v && (e && this._sb.push(e), le(this));
  }),
  (L.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), le(this));
  }),
  (L.prototype.render = k),
  (A = []),
  (ve =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (be = function (t, e) {
    return t.__v.__b - e.__v.__b;
  }),
  (W.__r = 0),
  (ge = /(PointerCapture)$|Capture$/i),
  (J = 0),
  (Z = se(!1)),
  (Q = se(!0));
var Ue = 0;
function n(t, e, i, l, s, r) {
  e || (e = {});
  var c,
    _,
    u = e;
  if ("ref" in u)
    for (_ in ((u = {}), e)) _ == "ref" ? (c = e[_]) : (u[_] = e[_]);
  var a = {
    type: t,
    props: u,
    key: i,
    ref: c,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Ue,
    __i: -1,
    __u: 0,
    __source: s,
    __self: r,
  };
  if (typeof t == "function" && (c = t.defaultProps))
    for (_ in c) u[_] === void 0 && (u[_] = c[_]);
  return f.vnode && f.vnode(a), a;
}
var z;
(z =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : void 0) != null &&
  z.__PREACT_DEVTOOLS__ &&
  z.__PREACT_DEVTOOLS__.attachPreact("10.27.2", f, {
    Fragment: k,
    Component: L,
  });
function De() {
  return n(k, {
    children: [
      n("ul", {
        className: "navbar",
        children: [
          n("li", {
            style: { float: "left" },
            className: "navbar-mobile navbar-dropdown",
            children: [
              n("button", {
                className: "navbar-dropbtn",
                children: n("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  role: "img",
                  "aria-label": "Menu",
                  children: [
                    n("rect", {
                      x: "3",
                      y: "5",
                      width: "18",
                      height: "2.2",
                      rx: "1",
                      fill: "white",
                    }),
                    n("rect", {
                      x: "3",
                      y: "11",
                      width: "18",
                      height: "2.2",
                      rx: "1",
                      fill: "white",
                    }),
                    n("rect", {
                      x: "3",
                      y: "17",
                      width: "18",
                      height: "2.2",
                      rx: "1",
                      fill: "white",
                    }),
                  ],
                }),
              }),
              n("div", {
                className: "navbar-dropdown-content",
                children: [
                  n("a", { href: "#home", children: "Home" }),
                  n("a", { href: "#about", children: "About Me" }),
                  n("a", { href: "#works", children: "My works" }),
                  n("a", { href: "#prices", children: "Prices" }),
                ],
              }),
            ],
          }),
          n("li", {
            className: "navbar-desktop",
            style: { float: "left" },
            children: n("a", {
              className: "navbar-item",
              href: "#home",
              children: "Home",
            }),
          }),
          n("li", {
            className: "navbar-desktop",
            style: { float: "left" },
            children: n("a", {
              className: "navbar-item",
              href: "#about",
              children: "About Me",
            }),
          }),
          n("li", {
            className: "navbar-desktop",
            style: { float: "left" },
            children: n("a", {
              className: "navbar-item",
              href: "#works",
              children: "My works",
            }),
          }),
          n("li", {
            className: "navbar-desktop",
            style: { float: "left" },
            children: n("a", {
              className: "navbar-item",
              href: "#prices",
              children: "Prices",
            }),
          }),
          n("li", {
            children: n("a", {
              className: "navbar-item active",
              href: "#contact",
              children: "Contact Me",
            }),
          }),
        ],
      }),
      n("div", {
        id: "home",
        className: "navbar-spacer",
        "aria-hidden": "true",
      }),
    ],
  });
}
function Ie() {
  return n(k, {
    children: n("div", {
      className: "header content m-auto max-w-7xl",
      children: [
        n("svg", {
          className: "svg-logo",
          width: "100%",
          height: "100%",
          viewBox: "110 10 190 110",
          xmlns: "http://www.w3.org/2000/svg",
          children: n("path", {
            d: "M111,29.4L216.6,111L124.2,110.4L111,29.4ZM163.2,60L201,12L278.4,111L228.6,111L163.2,60ZM249.6,61.8L289.8,29.4L279,99.6L249.6,61.8Z",
            fill: "rgb(252,172,32)",
          }),
        }),
        n("h1", {
          style: { fontFamily: "Graphie, sans-serif", fontWeight: 700 },
          className: "text-6xl",
          children: [
            "Hi! ",
            n("span", {
              style: { color: "#ffc300" },
              children: "I'm Prestige",
            }),
          ],
        }),
        n("p", {
          className: "mt-8",
          style: { fontFamily: "Graphie, sans-serif", fontWeight: 600 },
          children: [
            "I am a UI designer based in Qatar,",
            " ",
            n("span", {
              style: { color: "#ffc300" },
              children: "I provide top-end AAA Quality User Interfaces.",
            }),
          ],
        }),
      ],
    }),
  });
}
function D() {
  return n("div", { className: "m-32" });
}
function Re() {
  return n("div", { style: { margin: "60vh" } });
}
function We() {
  return n(k, {
    children: [
      n("div", { id: "about", style: { height: "85px" } }),
      n("p", {
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultricies massa sed aliquam. Aliquam efficitur finibus neque non dapibus. Quisque vitae urna urna. Fusce vitae vulputate urna. Morbi fringilla quam ut felis pulvinar, ac dapibus ipsum convallis. Aliquam elementum erat massa, nec bibendum ante dapibus vitae. Quisque id porta nunc. Phasellus tempus sed nulla at dapibus. Ut elementum, nisl non venenatis finibus, ligula orci faucibus nunc, non pretium risus urna in mi. Curabitur lacus purus, bibendum nec quam eu, dignissim consequat quam. Ut euismod enim a lorem pulvinar condimentum. Curabitur fermentum purus a urna pulvinar, id congue diam pulvinar. Duis efficitur, odio tempus condimentum sagittis, velit ligula sollicitudin mauris, sed suscipit arcu dui id arcu. Nam ultricies tincidunt turpis, vel tincidunt nibh lobortis vitae. Nunc placerat in lectus vitae blandit. Phasellus varius tempus semper. Duis scelerisque leo ante, et tempor leo placerat ut. Vivamus blandit mollis nisl, id faucibus tellus. Etiam sit amet purus lobortis, maximus leo et, placerat dolor. Pellentesque id sem porta, laoreet arcu sit amet, dignissim leo. Nunc mauris arcu, blandit non purus ac, tristique pretium nisi.",
      }),
      n("p", {
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultricies massa sed aliquam. Aliquam efficitur finibus neque non dapibus. Quisque vitae urna urna. Fusce vitae vulputate urna. Morbi fringilla quam ut felis pulvinar, ac dapibus ipsum convallis. Aliquam elementum erat massa, nec bibendum ante dapibus vitae. Quisque id porta nunc. Phasellus tempus sed nulla at dapibus. Ut elementum, nisl non venenatis finibus, ligula orci faucibus nunc, non pretium risus urna in mi. Curabitur lacus purus, bibendum nec quam eu, dignissim consequat quam. Ut euismod enim a lorem pulvinar condimentum. Curabitur fermentum purus a urna pulvinar, id congue diam pulvinar. Duis efficitur, odio tempus condimentum sagittis, velit ligula sollicitudin mauris, sed suscipit arcu dui id arcu. Nam ultricies tincidunt turpis, vel tincidunt nibh lobortis vitae. Nunc placerat in lectus vitae blandit. Phasellus varius tempus semper. Duis scelerisque leo ante, et tempor leo placerat ut. Vivamus blandit mollis nisl, id faucibus tellus. Etiam sit amet purus lobortis, maximus leo et, placerat dolor. Pellentesque id sem porta, laoreet arcu sit amet, dignissim leo. Nunc mauris arcu, blandit non purus ac, tristique pretium nisi.",
      }),
    ],
  });
}
function Oe() {
  return n(k, {
    children: [
      n("div", { id: "prices", style: { height: "85px" } }),
      n("div", {
        className: "flex-container",
        children: [
          n("div", {
            className: "inside",
            children: [
              n("h2", {
                style: {
                  textAlign: "center",
                  fontSize: "32px",
                  fontFamily: "Graphie, sans-serif",
                  fontWeight: "550",
                  marginBottom: "32px",
                },
                children: [
                  "Basic ",
                  n("font", { style: { color: "#bcbcbc" }, children: "($30)" }),
                ],
              }),
              n("p", { style: { fontWeight: "520" }, children: "One button" }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children:
                  "● Including all button states (idle, hovered, deselected, active)",
              }),
              n("br", {}),
              n("p", { style: { color: "#bcbcbc" }, children: "● .png files" }),
              n("br", {}),
            ],
          }),
          n("div", {
            className: "inside",
            children: [
              n("h2", {
                style: {
                  textAlign: "center",
                  fontSize: "32px",
                  fontFamily: "Graphie, sans-serif",
                  fontWeight: "550",
                  marginBottom: "32px",
                },
                children: [
                  "Standard ",
                  n("font", {
                    style: { color: "#bcbcbc" },
                    children: "($200)",
                  }),
                ],
              }),
              n("p", { style: { fontWeight: "520" }, children: "2 pages" }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children: "● 2 Screen mockups per page",
              }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children: "● All element states",
              }),
              n("br", {}),
              n("p", { style: { color: "#bcbcbc" }, children: "● .png files" }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children: "● One full revision",
              }),
              n("br", {}),
            ],
          }),
          n("div", {
            className: "inside",
            children: [
              n("h2", {
                style: {
                  textAlign: "center",
                  fontSize: "32px",
                  fontFamily: "Graphie, sans-serif",
                  fontWeight: "550",
                  marginBottom: "32px",
                },
                children: [
                  "Premium  ",
                  n("font", {
                    style: { color: "#bcbcbc" },
                    children: "($475)",
                  }),
                ],
              }),
              n("p", { style: { fontWeight: "520" }, children: "5 pages" }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children: "● high quality designs",
              }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children: "● All element states",
              }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children: "● .png files + source files",
              }),
              n("br", {}),
              n("p", {
                style: { color: "#bcbcbc" },
                children: "● 3 full revisions per page",
              }),
              n("br", {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function Be() {
  return n("footer", {
    id: "contact",
    style: { backgroundColor: "#111116" },
    children: n("div", {
      className: "mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8",
      children: [
        n("div", {
          className: "md:flex md:justify-between",
          children: [
            n("div", {
              className: "mb-6 md:mb-0",
              children: n("a", {
                href: "https://flowbite.com/",
                className: "flex items-center",
                children: n("span", {
                  className:
                    "self-center text-2xl font-semibold whitespace-nowrap text-white",
                  children: [
                    n("img", {
                      src: "https://cdn.discordapp.com/attachments/925023029921194025/1423333419479207966/logo.png?ex=68dfee0b&is=68de9c8b&hm=c46cf6be08f322a999756d67ac64c4e00261cae97c0521e43183ac2062fab45d&",
                      width: 48,
                      alt: "logo",
                      style:
                        "display: inline-block; vertical-align: middle; margin-right: 12px; margin-bottom: 9px",
                    }),
                    "Prestige",
                  ],
                }),
              }),
            }),
            n("div", {
              className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",
              children: [
                n("div", {
                  children: [
                    n("h2", {
                      className:
                        "mb-6 text-sm font-semibold uppercase text-white",
                      children: "Resources",
                    }),
                    n("ul", {
                      className: "text-gray-400 font-medium",
                      children: [
                        n("li", {
                          className: "mb-4",
                          children: n("a", {
                            href: "https://flowbite.com/",
                            className: "hover:underline",
                            children: "Flowbite",
                          }),
                        }),
                        n("li", {
                          children: n("a", {
                            href: "https://tailwindcss.com/",
                            className: "hover:underline",
                            children: "Tailwind CSS",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n("div", {
                  children: [
                    n("h2", {
                      className:
                        "mb-6 text-sm font-semibold uppercase text-white",
                      children: "Contact me",
                    }),
                    n("ul", {
                      className: "text-gray-400 font-medium",
                      children: [
                        n("li", {
                          className: "mb-4",
                          children: n("a", {
                            href: "https://github.com/themesberg/flowbite",
                            className: "hover:underline ",
                            children: "Github",
                          }),
                        }),
                        n("li", {
                          children: n("a", {
                            href: "https://discord.gg/4eeurUVvTy",
                            className: "hover:underline",
                            children: "Discord",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n("hr", { className: "my-6 sm:mx-auto border-gray-700 lg:my-8" }),
        n("div", {
          className: "sm:flex sm:items-center sm:justify-between",
          children: [
            n("span", {
              className: "text-sm sm:text-center text-gray-400",
              children: [
                "© 2025",
                " ",
                n("a", {
                  href: "https://github.com/MostafaXS1",
                  className: "hover:underline",
                  children: "Made by Mostafa_XS1 on Github",
                }),
                ". All Rights Reserved.",
              ],
            }),
            n("div", {
              className: "flex mt-4 sm:justify-center sm:mt-0",
              children: [
                n("a", {
                  href: "#",
                  className: "hover:text-gray-900 hover:text-white",
                  children: [
                    n("svg", {
                      className: "w-4 h-4",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 8 19",
                      children: n("path", {
                        fillRule: "evenodd",
                        d: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z",
                        clipRule: "evenodd",
                      }),
                    }),
                    n("span", {
                      className: "sr-only",
                      children: "Facebook page",
                    }),
                  ],
                }),
                n("a", {
                  href: "https://discord.gg/9jNyZkHgYf",
                  className: " \\hover:text-gray-900 hover:text-white ms-5",
                  children: [
                    n("svg", {
                      className: "w-4 h-4",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 21 16",
                      children: n("path", {
                        d: "M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z",
                      }),
                    }),
                    n("span", {
                      className: "sr-only",
                      children: "Discord community",
                    }),
                  ],
                }),
                n("a", {
                  href: "https://x.com/PrestigeVectors",
                  className: "hover:text-gray-900 hover:text-white ms-5",
                  children: [
                    n("svg", {
                      className: "w-4 h-4",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 20 17",
                      children: n("path", {
                        fillRule: "evenodd",
                        d: "M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z",
                        clipRule: "evenodd",
                      }),
                    }),
                    n("span", {
                      className: "sr-only",
                      children: "Twitter page",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var O,
  b,
  G,
  ae,
  X = 0,
  Ce = [],
  g = f,
  ce = g.__b,
  _e = g.__r,
  ue = g.diffed,
  de = g.__c,
  he = g.unmount,
  pe = g.__;
function Ae(t, e) {
  g.__h && g.__h(b, t, X || e), (X = 0);
  var i = b.__H || (b.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function je(t) {
  return (X = 1), Ve(Me, t);
}
function Ve(t, e, i) {
  var l = Ae(O++, 2);
  if (
    ((l.t = t),
    !l.__c &&
      ((l.__ = [
        Me(void 0, e),
        function (_) {
          var u = l.__N ? l.__N[0] : l.__[0],
            a = l.t(u, _);
          u !== a && ((l.__N = [a, l.__[1]]), l.__c.setState({}));
        },
      ]),
      (l.__c = b),
      !b.__f))
  ) {
    var s = function (_, u, a) {
      if (!l.__c.__H) return !0;
      var h = l.__c.__H.__.filter(function (p) {
        return !!p.__c;
      });
      if (
        h.every(function (p) {
          return !p.__N;
        })
      )
        return !r || r.call(this, _, u, a);
      var o = l.__c.props !== _;
      return (
        h.forEach(function (p) {
          if (p.__N) {
            var d = p.__[0];
            (p.__ = p.__N), (p.__N = void 0), d !== p.__[0] && (o = !0);
          }
        }),
        (r && r.call(this, _, u, a)) || o
      );
    };
    b.__f = !0;
    var r = b.shouldComponentUpdate,
      c = b.componentWillUpdate;
    (b.componentWillUpdate = function (_, u, a) {
      if (this.__e) {
        var h = r;
        (r = void 0), s(_, u, a), (r = h);
      }
      c && c.call(this, _, u, a);
    }),
      (b.shouldComponentUpdate = s);
  }
  return l.__N || l.__;
}
function ze(t, e) {
  var i = Ae(O++, 3);
  !g.__s && Qe(i.__H, e) && ((i.__ = t), (i.u = e), b.__H.__h.push(i));
}
function Ge() {
  for (var t; (t = Ce.shift()); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(R), t.__H.__h.forEach(K), (t.__H.__h = []);
      } catch (e) {
        (t.__H.__h = []), g.__e(e, t.__v);
      }
}
(g.__b = function (t) {
  (b = null), ce && ce(t);
}),
  (g.__ = function (t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), pe && pe(t, e);
  }),
  (g.__r = function (t) {
    _e && _e(t), (O = 0);
    var e = (b = t.__c).__H;
    e &&
      (G === b
        ? ((e.__h = []),
          (b.__h = []),
          e.__.forEach(function (i) {
            i.__N && (i.__ = i.__N), (i.u = i.__N = void 0);
          }))
        : (e.__h.forEach(R), e.__h.forEach(K), (e.__h = []), (O = 0))),
      (G = b);
  }),
  (g.diffed = function (t) {
    ue && ue(t);
    var e = t.__c;
    e &&
      e.__H &&
      (e.__H.__h.length &&
        ((Ce.push(e) !== 1 && ae === g.requestAnimationFrame) ||
          ((ae = g.requestAnimationFrame) || Ze)(Ge)),
      e.__H.__.forEach(function (i) {
        i.u && (i.__H = i.u), (i.u = void 0);
      })),
      (G = b = null);
  }),
  (g.__c = function (t, e) {
    e.some(function (i) {
      try {
        i.__h.forEach(R),
          (i.__h = i.__h.filter(function (l) {
            return !l.__ || K(l);
          }));
      } catch (l) {
        e.some(function (s) {
          s.__h && (s.__h = []);
        }),
          (e = []),
          g.__e(l, i.__v);
      }
    }),
      de && de(t, e);
  }),
  (g.unmount = function (t) {
    he && he(t);
    var e,
      i = t.__c;
    i &&
      i.__H &&
      (i.__H.__.forEach(function (l) {
        try {
          R(l);
        } catch (s) {
          e = s;
        }
      }),
      (i.__H = void 0),
      e && g.__e(e, i.__v));
  });
var fe = typeof requestAnimationFrame == "function";
function Ze(t) {
  var e,
    i = function () {
      clearTimeout(l), fe && cancelAnimationFrame(e), setTimeout(t);
    },
    l = setTimeout(i, 35);
  fe && (e = requestAnimationFrame(i));
}
function R(t) {
  var e = b,
    i = t.__c;
  typeof i == "function" && ((t.__c = void 0), i()), (b = e);
}
function K(t) {
  var e = b;
  (t.__c = t.__()), (b = e);
}
function Qe(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (i, l) {
      return i !== t[l];
    })
  );
}
function Me(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Ye = "/assets/1-DBOPhex8.png",
  Xe = "/assets/2-B4MNVR0p.png",
  Ke = "/assets/3-CV4SjqIU.png",
  Je = "/assets/4-DLpnwA1G.png",
  et = "/assets/5-CYc_t6l_.png";
function tt() {
  const t = [Ye, Xe, Ke, Je, et],
    [e, i] = je(0),
    l = 8e3;
  ze(() => {
    const u = setTimeout(() => {
      i((a) => (a + 1) % t.length);
    }, l);
    return () => clearTimeout(u);
  }, [e, t.length]);
  const s = (u) => i(u),
    r = () => i((u) => (u - 1 + t.length) % t.length),
    c = () => i((u) => (u + 1) % t.length),
    _ = (u) => {
      window.open(u, "_blank", "noopener,noreferrer");
    };
  return n("div", {
    className: "flex justify-center my-8",
    children: n("div", {
      style: { maxWidth: "912px", width: "100%" },
      className: "relative",
      children: [
        n("div", {
          className: "relative w-full rounded-lg overflow-hidden",
          children: [
            n("img", {
              src: t[e],
              alt: `Slide ${e + 1} sizer`,
              style: {
                width: "100%",
                height: "auto",
                visibility: "hidden",
                borderRadius: "8px",
              },
            }),
            t.map((u, a) =>
              n(
                "img",
                {
                  src: u,
                  alt: `Slide ${a + 1}`,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    transition: "opacity 0.8s ease-in-out",
                    opacity: a === e ? 1 : 0,
                    zIndex: a === e ? 10 : 0,
                    pointerEvents: "none",
                  },
                },
                a
              )
            ),
          ],
        }),
        n("div", {
          className:
            "absolute flex space-x-3 bottom-5 left-1/2 -translate-x-1/2 z-20",
          style: { display: "flex", gap: 8 },
          children: t.map((u, a) =>
            n(
              "button",
              {
                onClick: () => s(a),
                "aria-label": `Go to slide ${a + 1}`,
                style: {
                  width: 12,
                  height: 12,
                  borderRadius: "9999px",
                  background: a === e ? "white" : "rgba(156,163,175,1)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                },
              },
              a
            )
          ),
        }),
        n("button", {
          onClick: () => _(t[e]),
          "aria-label": "Open image in new tab",
          title: "Open image in new tab",
          style: {
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 40,
            border: "none",
            background: "rgba(0,0,0,0.2)",
            width: 36,
            height: 36,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 6,
            backdropFilter: "blur(4px)",
          },
          children: n("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "18",
            height: "18",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: { display: "block" },
            children: [
              n("path", { d: "M3 9V3h6" }),
              n("path", { d: "M21 9V3h-6" }),
              n("path", { d: "M3 15v6h6" }),
              n("path", { d: "M21 15v6h-6" }),
            ],
          }),
        }),
        n("button", {
          onClick: r,
          "aria-label": "Previous slide",
          style: {
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            border: "none",
            background: "rgba(255,255,255,0.16)",
            width: 40,
            height: 40,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
          },
          children: n("span", {
            style: {
              fontSize: 18,
              lineHeight: 1,
              color: "#fff",
              userSelect: "none",
            },
            children: "❮",
          }),
        }),
        n("button", {
          onClick: c,
          "aria-label": "Next slide",
          style: {
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            border: "none",
            background: "rgba(255,255,255,0.16)",
            width: 40,
            height: 40,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
          },
          children: n("span", {
            style: {
              fontSize: 18,
              lineHeight: 1,
              color: "#fff",
              userSelect: "none",
            },
            children: "❯",
          }),
        }),
      ],
    }),
  });
}
function it() {
  return n(k, {
    children: [
      n(De, {}),
      n("div", {
        style: { margin: "12px" },
        children: n("div", {
          className: "max-w-7xl m-auto",
          children: [
            n(D, {}),
            n(Ie, {}),
            n(Re, {}),
            n(We, {}),
            n(D, {}),
            n(tt, {}),
            n(D, {}),
            n(Oe, {}),
          ],
        }),
      }),
      n(D, {}),
      n(Be, {}),
    ],
  });
}
Fe(n(it, {}), document.getElementById("app"));
