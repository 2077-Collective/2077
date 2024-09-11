var C = Object.defineProperty;
var T = (e, t, n) =>
  t in e
    ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var p = (e, t, n) => T(e, typeof t != "symbol" ? t + "" : t, n);
import {
  r as h,
  n as y,
  d as v,
  f as j,
  i as A,
  e as B,
  g as N,
  h as D,
  j as H,
  k as b,
  l as I,
  m as P,
  p as M,
} from "./scheduler.Ce_0Mfso.js";
let $ = !1;
function O() {
  $ = !0;
}
function R() {
  $ = !1;
}
function q(e, t, n, r) {
  for (; e < t; ) {
    const i = e + ((t - e) >> 1);
    n(i) <= r ? (e = i + 1) : (t = i);
  }
  return e;
}
function z(e) {
  if (e.hydrate_init) return;
  e.hydrate_init = !0;
  let t = e.childNodes;
  if (e.nodeName === "HEAD") {
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const o = t[a];
      o.claim_order !== void 0 && s.push(o);
    }
    t = s;
  }
  const n = new Int32Array(t.length + 1),
    r = new Int32Array(t.length);
  n[0] = -1;
  let i = 0;
  for (let s = 0; s < t.length; s++) {
    const a = t[s].claim_order,
      o =
        (i > 0 && t[n[i]].claim_order <= a
          ? i + 1
          : q(1, i, (_) => t[n[_]].claim_order, a)) - 1;
    r[s] = n[o] + 1;
    const u = o + 1;
    (n[u] = s), (i = Math.max(u, i));
  }
  const c = [],
    l = [];
  let f = t.length - 1;
  for (let s = n[i] + 1; s != 0; s = r[s - 1]) {
    for (c.push(t[s - 1]); f >= s; f--) l.push(t[f]);
    f--;
  }
  for (; f >= 0; f--) l.push(t[f]);
  c.reverse(), l.sort((s, a) => s.claim_order - a.claim_order);
  for (let s = 0, a = 0; s < l.length; s++) {
    for (; a < c.length && l[s].claim_order >= c[a].claim_order; ) a++;
    const o = a < c.length ? c[a] : null;
    e.insertBefore(l[s], o);
  }
}
function L(e, t) {
  if ($) {
    for (
      z(e),
        (e.actual_end_child === void 0 ||
          (e.actual_end_child !== null &&
            e.actual_end_child.parentNode !== e)) &&
          (e.actual_end_child = e.firstChild);
      e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

    )
      e.actual_end_child = e.actual_end_child.nextSibling;
    t !== e.actual_end_child
      ? (t.claim_order !== void 0 || t.parentNode !== e) &&
        e.insertBefore(t, e.actual_end_child)
      : (e.actual_end_child = t.nextSibling);
  } else (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function te(e, t, n) {
  $ && !n
    ? L(e, t)
    : (t.parentNode !== e || t.nextSibling != n) &&
      e.insertBefore(t, n || null);
}
function U(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function V(e) {
  return document.createElement(e);
}
function W(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function x(e) {
  return document.createTextNode(e);
}
function ne() {
  return x(" ");
}
function ie() {
  return x("");
}
function re(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function se(e) {
  return e.dataset.svelteH;
}
function F(e) {
  return Array.from(e.childNodes);
}
function G(e) {
  e.claim_info === void 0 &&
    (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function S(e, t, n, r, i = !1) {
  G(e);
  const c = (() => {
    for (let l = e.claim_info.last_index; l < e.length; l++) {
      const f = e[l];
      if (t(f)) {
        const s = n(f);
        return (
          s === void 0 ? e.splice(l, 1) : (e[l] = s),
          i || (e.claim_info.last_index = l),
          f
        );
      }
    }
    for (let l = e.claim_info.last_index - 1; l >= 0; l--) {
      const f = e[l];
      if (t(f)) {
        const s = n(f);
        return (
          s === void 0 ? e.splice(l, 1) : (e[l] = s),
          i
            ? s === void 0 && e.claim_info.last_index--
            : (e.claim_info.last_index = l),
          f
        );
      }
    }
    return r();
  })();
  return (
    (c.claim_order = e.claim_info.total_claimed),
    (e.claim_info.total_claimed += 1),
    c
  );
}
function E(e, t, n, r) {
  return S(
    e,
    (i) => i.nodeName === t,
    (i) => {
      const c = [];
      for (let l = 0; l < i.attributes.length; l++) {
        const f = i.attributes[l];
        n[f.name] || c.push(f.name);
      }
      c.forEach((l) => i.removeAttribute(l));
    },
    () => r(t),
  );
}
function ae(e, t, n) {
  return E(e, t, n, V);
}
function le(e, t, n) {
  return E(e, t, n, W);
}
function J(e, t) {
  return S(
    e,
    (n) => n.nodeType === 3,
    (n) => {
      const r = "" + t;
      if (n.data.startsWith(r)) {
        if (n.data.length !== r.length) return n.splitText(r.length);
      } else n.data = r;
    },
    () => x(t),
    !0,
  );
}
function ce(e) {
  return J(e, " ");
}
function fe(e, t) {
  (t = "" + t), e.data !== t && (e.data = t);
}
function ue(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, "");
}
function oe(e, t) {
  const n = [];
  let r = 0;
  for (const i of t.childNodes)
    if (i.nodeType === 8) {
      const c = i.textContent.trim();
      c === `HEAD_${e}_END`
        ? ((r -= 1), n.push(i))
        : c === `HEAD_${e}_START` && ((r += 1), n.push(i));
    } else r > 0 && n.push(i);
  return n;
}
function de(e, t) {
  return new e(t);
}
const m = new Set();
let d;
function _e() {
  d = { r: 0, c: [], p: d };
}
function me() {
  d.r || h(d.c), (d = d.p);
}
function K(e, t) {
  e && e.i && (m.delete(e), e.i(t));
}
function he(e, t, n, r) {
  if (e && e.o) {
    if (m.has(e)) return;
    m.add(e),
      d.c.push(() => {
        m.delete(e), r && (n && e.d(1), r());
      }),
      e.o(t);
  } else r && r();
}
function $e(e) {
  e && e.c();
}
function pe(e, t) {
  e && e.l(t);
}
function Q(e, t, n) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n),
    N(() => {
      const c = e.$$.on_mount.map(I).filter(A);
      e.$$.on_destroy ? e.$$.on_destroy.push(...c) : h(c), (e.$$.on_mount = []);
    }),
    i.forEach(N);
}
function X(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (D(n.after_update),
    h(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Y(e, t) {
  e.$$.dirty[0] === -1 && (P.push(e), M(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function ye(e, t, n, r, i, c, l = null, f = [-1]) {
  const s = H;
  b(e);
  const a = (e.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: y,
    not_equal: i,
    bound: v(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    callbacks: v(),
    dirty: f,
    skip_bound: !1,
    root: t.target || s.$$.root,
  });
  l && l(a.root);
  let o = !1;
  if (
    ((a.ctx = n
      ? n(e, t.props || {}, (u, _, ...g) => {
          const w = g.length ? g[0] : _;
          return (
            a.ctx &&
              i(a.ctx[u], (a.ctx[u] = w)) &&
              (!a.skip_bound && a.bound[u] && a.bound[u](w), o && Y(e, u)),
            _
          );
        })
      : []),
    a.update(),
    (o = !0),
    h(a.before_update),
    (a.fragment = r ? r(a.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      O();
      const u = F(t.target);
      a.fragment && a.fragment.l(u), u.forEach(U);
    } else a.fragment && a.fragment.c();
    t.intro && K(e.$$.fragment), Q(e, t.target, t.anchor), R(), j();
  }
  b(s);
}
class xe {
  constructor() {
    p(this, "$$");
    p(this, "$$set");
  }
  $destroy() {
    X(this, 1), (this.$destroy = y);
  }
  $on(t, n) {
    if (!A(n)) return y;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      r.push(n),
      () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !B(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const Z = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Z);
export {
  se as A,
  oe as B,
  xe as S,
  F as a,
  J as b,
  ae as c,
  U as d,
  V as e,
  ce as f,
  te as g,
  L as h,
  ye as i,
  fe as j,
  ie as k,
  he as l,
  me as m,
  K as n,
  re as o,
  ue as p,
  _e as q,
  de as r,
  ne as s,
  x as t,
  $e as u,
  pe as v,
  Q as w,
  X as x,
  W as y,
  le as z,
};
