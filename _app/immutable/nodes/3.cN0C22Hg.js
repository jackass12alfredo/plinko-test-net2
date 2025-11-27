import {
  c as j,
  b as w,
  t as X,
  d as tt,
  n as te,
} from "../chunks/disclose-version.DG_wKHNx.js";
import {
  h as Tr,
  E as ia,
  aL as sa,
  aM as la,
  D as Ee,
  A as ca,
  x as Lr,
  ar as da,
  G as ua,
  n as _t,
  aN as fa,
  au as Er,
  aj as Mr,
  aO as va,
  aP as ga,
  av as pa,
  az as an,
  aQ as vr,
  aJ as pt,
  w as ke,
  aR as ne,
  aS as ot,
  B as I,
  y as Oe,
  O as Me,
  K as k,
  J as F,
  L as E,
  M as le,
  aT as rt,
  U as ee,
  I as q,
  aK as Ze,
  N as Re,
  P as It,
  aU as Jn,
  ap as ha,
  R as lo,
} from "../chunks/runtime.CRzpIxTj.js";
import {
  a as we,
  r as er,
  c as Bt,
  b as Rr,
  s as Tt,
} from "../chunks/attributes.sb3KhuBb.js";
import { a as ma, s as dt } from "../chunks/render.GGGqqLGV.js";
import {
  k as Dr,
  s as be,
  a as De,
  e as Ht,
  i as Zt,
  l as qt,
  m as co,
  w as uo,
  t as fo,
  C as ba,
  g as wa,
  n as Vn,
  D as ya,
  B as zt,
  R as Hn,
  j as xa,
  o as Wt,
  q as _a,
  h as Fr,
  r as Nr,
  p as Aa,
  u as Ca,
  L as ka,
  P as Oa,
} from "../chunks/Plinko.TQHBosXl.js";
import { b as Be, c as He } from "../chunks/this.CD3I1zip.js";
import { m as Te, d as Mn } from "../chunks/svelte-head.C6Z01pUe.js";
import {
  l as he,
  s as We,
  c as P,
  i as W,
  a as pe,
  e as vo,
  b as Ue,
  r as gr,
  p as Qe,
  m as tr,
} from "../chunks/props.BhccrgCE.js";
import { i as Ve } from "../chunks/legacy.CsABeypI.js";
import {
  d as Yt,
  g as go,
  w as ft,
  r as jt,
  a as zr,
} from "../chunks/index.BQLiqD8v.js";
import { o as Pa, a as Sa, c as Ta } from "../chunks/7.I1qvw0HI.js";
import { s as Zn } from "../chunks/snippet.DaUXKxkQ.js";
function Vt(t, e, n) {
  var r = t.__className,
    a = La(e);
  Tr && t.className === a
    ? (t.__className = a)
    : (r !== a || (Tr && t.className !== a)) &&
      (e == null && !n ? t.removeAttribute("class") : (t.className = a),
      (t.__className = a));
}
function La(t, e) {
  return (t ?? "") + "";
}
const Ea = () => performance.now(),
  bt = {
    tick: (t) => requestAnimationFrame(t),
    now: () => Ea(),
    tasks: new Set(),
  };
function po() {
  const t = bt.now();
  bt.tasks.forEach((e) => {
    e.c(t) || (bt.tasks.delete(e), e.f());
  }),
    bt.tasks.size !== 0 && bt.tick(po);
}
function Ma(t) {
  let e;
  return (
    bt.tasks.size === 0 && bt.tick(po),
    {
      promise: new Promise((n) => {
        bt.tasks.add((e = { c: t, f: n }));
      }),
      abort() {
        bt.tasks.delete(e);
      },
    }
  );
}
function gn(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Ra(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1
    ? e[0]
    : e[0] +
        e
          .slice(1)
          .map((n) => n[0].toUpperCase() + n.slice(1))
          .join("");
}
function Ir(t) {
  const e = {},
    n = t.split(";");
  for (const r of n) {
    const [a, i] = r.split(":");
    if (!a || i === void 0) break;
    const o = Ra(a.trim());
    e[o] = i.trim();
  }
  return e;
}
const Da = (t) => t;
function at(t, e, n, r) {
  var a = (t & va) !== 0,
    i = (t & ga) !== 0,
    o = a && i,
    s = (t & fa) !== 0,
    l = o ? "both" : a ? "in" : "out",
    c,
    p = e.inert,
    f,
    h;
  function g() {
    var x = pa,
      b = Lr;
    Er(null), Mr(null);
    try {
      return (
        c ?? (c = n()(e, (r == null ? void 0 : r()) ?? {}, { direction: l }))
      );
    } finally {
      Er(x), Mr(b);
    }
  }
  var v = {
      is_global: s,
      in() {
        var x;
        if (((e.inert = p), !a)) {
          h == null || h.abort(),
            (x = h == null ? void 0 : h.reset) == null || x.call(h);
          return;
        }
        i || f == null || f.abort(),
          gn(e, "introstart"),
          (f = nr(e, g(), h, 1, () => {
            gn(e, "introend"), f == null || f.abort(), (f = c = void 0);
          }));
      },
      out(x) {
        if (!i) {
          x == null || x(), (c = void 0);
          return;
        }
        (e.inert = !0),
          gn(e, "outrostart"),
          (h = nr(e, g(), f, 0, () => {
            gn(e, "outroend"), x == null || x();
          }));
      },
      stop: () => {
        f == null || f.abort(), h == null || h.abort();
      },
    },
    m = Lr;
  if (((m.transitions ?? (m.transitions = [])).push(v), a && ma)) {
    var _ = s;
    if (!_) {
      for (var y = m.parent; y && y.f & ia; )
        for (; (y = y.parent) && !(y.f & sa); );
      _ = !y || (y.f & la) !== 0;
    }
    _ &&
      Ee(() => {
        ca(() => v.in());
      });
  }
}
function nr(t, e, n, r, a) {
  var i = r === 1;
  if (da(e)) {
    var o,
      s = !1;
    return (
      ua(() => {
        if (!s) {
          var _ = e({ direction: i ? "in" : "out" });
          o = nr(t, _, n, r, a);
        }
      }),
      {
        abort: () => {
          (s = !0), o == null || o.abort();
        },
        deactivate: () => o.deactivate(),
        reset: () => o.reset(),
        t: () => o.t(),
      }
    );
  }
  if ((n == null || n.deactivate(), !(e != null && e.duration)))
    return a(), { abort: _t, deactivate: _t, reset: _t, t: () => r };
  const { delay: l = 0, css: c, tick: p, easing: f = Da } = e;
  var h = [];
  if (i && n === void 0 && (p && p(0, 1), c)) {
    var g = Ir(c(0, 1));
    h.push(g, g);
  }
  var v = () => 1 - r,
    m = t.animate(h, { duration: l });
  return (
    (m.onfinish = () => {
      var _ = (n == null ? void 0 : n.t()) ?? 1 - r;
      n == null || n.abort();
      var y = r - _,
        x = e.duration * Math.abs(y),
        b = [];
      if (x > 0) {
        if (c)
          for (
            var C = Math.ceil(x / 16.666666666666668), S = 0;
            S <= C;
            S += 1
          ) {
            var M = _ + y * f(S / C),
              N = c(M, 1 - M);
            b.push(Ir(N));
          }
        (v = () => {
          var T = m.currentTime;
          return _ + y * f(T / x);
        }),
          p &&
            Ma(() => {
              if (m.playState !== "running") return !1;
              var T = v();
              return p(T, 1 - T), !0;
            });
      }
      (m = t.animate(b, { duration: x, fill: "forwards" })),
        (m.onfinish = () => {
          (v = () => r), p == null || p(r, 1 - r), a();
        });
    }),
    {
      abort: () => {
        m && (m.cancel(), (m.effect = null), (m.onfinish = _t));
      },
      deactivate: () => {
        a = _t;
      },
      reset: () => {
        r === 0 && (p == null || p(1, 0));
      },
      t: () => v(),
    }
  );
}
const Fa = "" + new URL("../assets/logo.Bq7oLjZC.svg", import.meta.url).href;
function Na(t) {
  const e = t - 1;
  return e * e * e + 1;
}
const za = { y: -8, start: 0.9, duration: 200 };
function rn(t, e) {
  const n = getComputedStyle(t),
    r = n.transform === "none" ? "" : n.transform,
    a = { ...za, ...e },
    i = (o) =>
      Object.keys(o).reduce(
        (s, l) => (o[l] === void 0 ? s : `${s}${l}:${o[l]};`),
        ""
      );
  return {
    duration: a.duration,
    delay: 0,
    css: (o) => {
      const s = Dr(o, [0, 1], [a.y, 0]),
        l = Dr(o, [0, 1], [a.start, 1]);
      return i({
        transform: `${r} translate3d(0, ${s}px, 0) scale(${l})`,
        opacity: o,
      });
    },
    easing: Na,
  };
}
function Ia(t) {
  return t[t.length - 1];
}
function Mt(t) {
  return Object.keys(t).reduce(
    (e, n) => (t[n] === void 0 ? e : e + `${n}:${t[n]};`),
    ""
  );
}
function Wn(t) {
  return t ? !0 : void 0;
}
Mt({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)",
});
function ho(t) {
  if (t !== null) return "";
}
function Br(t) {
  function e(n) {
    return n(t), () => {};
  }
  return { subscribe: e };
}
const pn = (t) =>
    new Proxy(t, {
      get(e, n, r) {
        return Reflect.get(e, n, r);
      },
      ownKeys(e) {
        return Reflect.ownKeys(e).filter((n) => n !== "action");
      },
    }),
  Vr = (t) => typeof t == "function";
et("empty");
function et(t, e) {
  const { stores: n, action: r, returned: a } = e ?? {},
    i = (() => {
      if (n && a)
        return Yt(n, (s) => {
          const l = a(s);
          if (Vr(l)) {
            const c = (...p) =>
              pn({ ...l(...p), [`data-melt-${t}`]: "", action: r ?? Ne });
            return (c.action = r ?? Ne), c;
          }
          return pn({ ...l, [`data-melt-${t}`]: "", action: r ?? Ne });
        });
      {
        const s = a,
          l = s == null ? void 0 : s();
        if (Vr(l)) {
          const c = (...p) =>
            pn({ ...l(...p), [`data-melt-${t}`]: "", action: r ?? Ne });
          return (c.action = r ?? Ne), Br(c);
        }
        return Br(pn({ ...l, [`data-melt-${t}`]: "", action: r ?? Ne }));
      }
    })(),
    o = r ?? (() => {});
  return (o.subscribe = i.subscribe), o;
}
function pr(t) {
  const e = (i) => (i ? `${t}-${i}` : t),
    n = (i) => `data-melt-${t}${i ? `-${i}` : ""}`,
    r = (i) => `[data-melt-${t}${i ? `-${i}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (i) => document.querySelector(r(i)),
  };
}
const _n = typeof document < "u",
  mo = (t) => typeof t == "function";
function Ba(t) {
  return t instanceof Document;
}
function cn(t) {
  return t instanceof Element;
}
function nt(t) {
  return t instanceof HTMLElement;
}
function Hr(t) {
  return t.pointerType === "touch";
}
function Va(t) {
  return t !== null && typeof t == "object";
}
function Ha(t) {
  return Va(t) && "subscribe" in t;
}
function ut(...t) {
  return (...e) => {
    for (const n of t) typeof n == "function" && n(...e);
  };
}
function Ne() {}
function Je(t, e, n, r) {
  const a = Array.isArray(e) ? e : [e];
  return (
    a.forEach((i) => t.addEventListener(i, n, r)),
    () => {
      a.forEach((i) => t.removeEventListener(i, n, r));
    }
  );
}
function qe(t, e, n, r) {
  const a = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const i = Wa((o) => n(o));
    return (
      a.forEach((o) => t.addEventListener(o, i, r)),
      () => {
        a.forEach((o) => t.removeEventListener(o, i, r));
      }
    );
  }
  return () => void 0;
}
function Za(t) {
  const e = t.currentTarget;
  if (!nt(e)) return null;
  const n = new CustomEvent(`m-${t.type}`, {
    detail: { originalEvent: t },
    cancelable: !0,
  });
  return e.dispatchEvent(n), n;
}
function Wa(t) {
  return (e) => {
    const n = Za(e);
    if (!(n != null && n.defaultPrevented)) return t(e);
  };
}
const ja = (t) => {
    try {
      Pa(t);
    } catch {
      return t;
    }
  },
  Ua = (t) => {
    try {
      Sa(t);
    } catch {
      return t;
    }
  };
function Rn(t, ...e) {
  const n = {};
  for (const r of Object.keys(t)) e.includes(r) || (n[r] = t[r]);
  return n;
}
function Ga(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function dn(t) {
  return { ...t, get: () => go(t) };
}
dn.writable = function (t) {
  const e = ft(t);
  let n = t;
  return {
    subscribe: e.subscribe,
    set(r) {
      e.set(r), (n = r);
    },
    update(r) {
      const a = r(n);
      e.set(a), (n = a);
    },
    get() {
      return n;
    },
  };
};
dn.derived = function (t, e) {
  const n = new Map(),
    r = () => {
      const i = Array.isArray(t) ? t.map((o) => o.get()) : t.get();
      return e(i);
    };
  return {
    get: r,
    subscribe: (i) => {
      const o = [];
      return (
        (Array.isArray(t) ? t : [t]).forEach((l) => {
          o.push(
            l.subscribe(() => {
              i(r());
            })
          );
        }),
        i(r()),
        n.set(i, o),
        () => {
          const l = n.get(i);
          if (l) for (const c of l) c();
          n.delete(i);
        }
      );
    },
  };
};
const hr = (t, e) => {
  const n = dn(t),
    r = (i, o) => {
      n.update((s) => {
        const l = i(s);
        let c = l;
        return e && (c = e({ curr: s, next: l })), o == null || o(c), c;
      });
    };
  return {
    ...n,
    update: r,
    set: (i) => {
      r(() => i);
    },
  };
};
function bo(t) {
  return new Promise((e) => setTimeout(e, t));
}
let qa = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
  Ya = (t = 21) => {
    let e = "",
      n = t;
    for (; n--; ) e += qa[(Math.random() * 64) | 0];
    return e;
  };
function Ka() {
  return Ya(10);
}
function wo(t) {
  return t.reduce((e, n) => ((e[n] = Ka()), e), {});
}
const At = {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    A: "a",
    P: "p",
  },
  yo = () => typeof window < "u";
function $a() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const xo = (t) => yo() && t.test($a().toLowerCase()),
  Qa = () => yo() && !!navigator.maxTouchPoints,
  Xa = () => xo(/^mac/) && !Qa(),
  Ja = () => xo(/mac|iphone|ipad|ipod/i),
  ei = () => Ja() && !Xa();
function ti(t) {
  const e = t.slice();
  return e.sort(ri), ni(e);
}
function ni(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    for (; e.length >= 2; ) {
      const i = e[e.length - 1],
        o = e[e.length - 2];
      if ((i.x - o.x) * (a.y - o.y) >= (i.y - o.y) * (a.x - o.x)) e.pop();
      else break;
    }
    e.push(a);
  }
  e.pop();
  const n = [];
  for (let r = t.length - 1; r >= 0; r--) {
    const a = t[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        o = n[n.length - 2];
      if ((i.x - o.x) * (a.y - o.y) >= (i.y - o.y) * (a.x - o.x)) n.pop();
      else break;
    }
    n.push(a);
  }
  return (
    n.pop(),
    e.length == 1 && n.length == 1 && e[0].x == n[0].x && e[0].y == n[0].y
      ? e
      : e.concat(n)
  );
}
function ri(t, e) {
  return t.x < e.x ? -1 : t.x > e.x ? 1 : t.y < e.y ? -1 : t.y > e.y ? 1 : 0;
}
function oi(t) {
  const e = t.getBoundingClientRect();
  return [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.right, y: e.bottom },
    { x: e.left, y: e.bottom },
  ];
}
function ai(t) {
  const e = t.flatMap((n) => oi(n));
  return ti(e);
}
function ii(t, e) {
  let n = !1;
  for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
    const i = e[r].x,
      o = e[r].y,
      s = e[a].x,
      l = e[a].y;
    o > t.y != l > t.y && t.x < ((s - i) * (t.y - o)) / (l - o) + i && (n = !n);
  }
  return n;
}
const jn = "data-melt-scroll-lock";
function Zr(t, e) {
  if (!t) return;
  const n = t.style.cssText;
  return (
    Object.assign(t.style, e),
    () => {
      t.style.cssText = n;
    }
  );
}
function si(t, e, n) {
  if (!t) return;
  const r = t.style.getPropertyValue(e);
  return (
    t.style.setProperty(e, n),
    () => {
      r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
    }
  );
}
function li(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function ci(t) {
  const e = document,
    n = e.defaultView ?? window,
    { documentElement: r, body: a } = e;
  if (a.hasAttribute(jn)) return Ne;
  a.setAttribute(jn, "");
  const o = n.innerWidth - r.clientWidth,
    s = () => si(r, "--scrollbar-width", `${o}px`),
    l = li(r),
    c = n.getComputedStyle(a)[l],
    p = () => Zr(a, { overflow: "hidden", [l]: `calc(${c} + ${o}px)` }),
    f = () => {
      const { scrollX: g, scrollY: v, visualViewport: m } = n,
        _ = (m == null ? void 0 : m.offsetLeft) ?? 0,
        y = (m == null ? void 0 : m.offsetTop) ?? 0,
        x = Zr(a, {
          position: "fixed",
          overflow: "hidden",
          top: `${-(v - Math.floor(y))}px`,
          left: `${-(g - Math.floor(_))}px`,
          right: "0",
          [l]: `calc(${c} + ${o}px)`,
        });
      return () => {
        x == null || x(), n.scrollTo(g, v);
      };
    },
    h = [s(), ei() ? f() : p()];
  return () => {
    h.forEach((g) => (g == null ? void 0 : g())), a.removeAttribute(jn);
  };
}
function di(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return Yt([e, n, r], ([a, i, o]) => (a || i) && o !== null);
}
function Rt(t, e) {
  let n;
  const r = Yt(t, (i) => {
      n == null || n(), (n = e(i));
    }).subscribe(Ne),
    a = () => {
      r(), n == null || n();
    };
  return Ua(a), a;
}
function sn(t) {
  const e = {};
  return (
    Object.keys(t).forEach((n) => {
      const r = n,
        a = t[r];
      e[r] = dn(ft(a));
    }),
    e
  );
}
function ui(t) {
  let e = t.parentElement;
  for (; nt(e) && !e.hasAttribute("data-portal"); ) e = e.parentElement;
  return e || "body";
}
function rr(t, e) {
  return e !== void 0 ? e : ui(t) === "body" ? document.body : null;
}
async function Wr(t) {
  const { prop: e, defaultEl: n } = t;
  if ((await Promise.all([bo(1), an]), e === void 0)) {
    n == null || n.focus();
    return;
  }
  const r = mo(e) ? e(n) : e;
  if (typeof r == "string") {
    const a = document.querySelector(r);
    if (!nt(a)) return;
    a.focus();
  } else nt(r) && r.focus();
}
jt(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return Je(document, "pointerup", e, { passive: !1, capture: !0 });
});
const fi = jt(void 0, (t) => {
    function e(r) {
      r && r.key === At.ESCAPE && t(r), t(void 0);
    }
    return Je(document, "keydown", e, { passive: !1 });
  }),
  _o = (t, e = {}) => {
    let n = Ne;
    function r(a = {}) {
      n();
      const i = { enabled: !0, ...a },
        o = Ha(i.enabled) ? i.enabled : jt(i.enabled);
      n = ut(
        fi.subscribe((s) => {
          var c;
          if (!s || !go(o)) return;
          const l = s.target;
          if (!(!nt(l) || l.closest("[data-escapee]") !== t)) {
            if ((s.preventDefault(), i.ignore)) {
              if (mo(i.ignore)) {
                if (i.ignore(s)) return;
              } else if (
                Array.isArray(i.ignore) &&
                i.ignore.length > 0 &&
                i.ignore.some((p) => p && l === p)
              )
                return;
            }
            (c = i.handler) == null || c.call(i, s);
          }
        }),
        Rt(o, (s) => {
          s ? (t.dataset.escapee = "") : delete t.dataset.escapee;
        })
      );
    }
    return (
      r(e),
      {
        update: r,
        destroy() {
          t.removeAttribute("data-escapee"), n();
        },
      }
    );
  },
  Ct = Math.min,
  $e = Math.max,
  An = Math.round,
  hn = Math.floor,
  kt = (t) => ({ x: t, y: t }),
  vi = { left: "right", right: "left", bottom: "top", top: "bottom" },
  gi = { start: "end", end: "start" };
function or(t, e, n) {
  return $e(t, Ct(e, n));
}
function Kt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ot(t) {
  return t.split("-")[0];
}
function $t(t) {
  return t.split("-")[1];
}
function Ao(t) {
  return t === "x" ? "y" : "x";
}
function mr(t) {
  return t === "y" ? "height" : "width";
}
function un(t) {
  return ["top", "bottom"].includes(Ot(t)) ? "y" : "x";
}
function br(t) {
  return Ao(un(t));
}
function pi(t, e, n) {
  n === void 0 && (n = !1);
  const r = $t(t),
    a = br(t),
    i = mr(a);
  let o =
    a === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return e.reference[i] > e.floating[i] && (o = Cn(o)), [o, Cn(o)];
}
function hi(t) {
  const e = Cn(t);
  return [ar(t), e, ar(e)];
}
function ar(t) {
  return t.replace(/start|end/g, (e) => gi[e]);
}
function mi(t, e, n) {
  const r = ["left", "right"],
    a = ["right", "left"],
    i = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? (e ? a : r) : e ? r : a;
    case "left":
    case "right":
      return e ? i : o;
    default:
      return [];
  }
}
function bi(t, e, n, r) {
  const a = $t(t);
  let i = mi(Ot(t), n === "start", r);
  return (
    a && ((i = i.map((o) => o + "-" + a)), e && (i = i.concat(i.map(ar)))), i
  );
}
function Cn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => vi[e]);
}
function wi(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Co(t) {
  return typeof t != "number"
    ? wi(t)
    : { top: t, right: t, bottom: t, left: t };
}
function kn(t) {
  const { x: e, y: n, width: r, height: a } = t;
  return {
    width: r,
    height: a,
    top: n,
    left: e,
    right: e + r,
    bottom: n + a,
    x: e,
    y: n,
  };
}
function jr(t, e, n) {
  let { reference: r, floating: a } = t;
  const i = un(e),
    o = br(e),
    s = mr(o),
    l = Ot(e),
    c = i === "y",
    p = r.x + r.width / 2 - a.width / 2,
    f = r.y + r.height / 2 - a.height / 2,
    h = r[s] / 2 - a[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = { x: p, y: r.y - a.height };
      break;
    case "bottom":
      g = { x: p, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: f };
      break;
    case "left":
      g = { x: r.x - a.width, y: f };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch ($t(e)) {
    case "start":
      g[o] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      g[o] += h * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const yi = async (t, e, n) => {
  const {
      placement: r = "bottom",
      strategy: a = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    s = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let c = await o.getElementRects({ reference: t, floating: e, strategy: a }),
    { x: p, y: f } = jr(c, r, l),
    h = r,
    g = {},
    v = 0;
  for (let m = 0; m < s.length; m++) {
    const { name: _, fn: y } = s[m],
      {
        x,
        y: b,
        data: C,
        reset: S,
      } = await y({
        x: p,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: a,
        middlewareData: g,
        rects: c,
        platform: o,
        elements: { reference: t, floating: e },
      });
    (p = x ?? p),
      (f = b ?? f),
      (g = { ...g, [_]: { ...g[_], ...C } }),
      S &&
        v <= 50 &&
        (v++,
        typeof S == "object" &&
          (S.placement && (h = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await o.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: a,
                  })
                : S.rects),
          ({ x: p, y: f } = jr(c, h, l))),
        (m = -1));
  }
  return { x: p, y: f, placement: h, strategy: a, middlewareData: g };
};
async function wr(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: r, y: a, platform: i, rects: o, elements: s, strategy: l } = t,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: g = 0,
    } = Kt(e, t),
    v = Co(g),
    _ = s[h ? (f === "floating" ? "reference" : "floating") : f],
    y = kn(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null ||
          n
            ? _
            : _.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: c,
        rootBoundary: p,
        strategy: l,
      })
    ),
    x =
      f === "floating"
        ? { x: r, y: a, width: o.floating.width, height: o.floating.height }
        : o.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(s.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = kn(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: x,
            offsetParent: b,
            strategy: l,
          })
        : x
    );
  return {
    top: (y.top - S.top + v.top) / C.y,
    bottom: (S.bottom - y.bottom + v.bottom) / C.y,
    left: (y.left - S.left + v.left) / C.x,
    right: (S.right - y.right + v.right) / C.x,
  };
}
const xi = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const {
          x: n,
          y: r,
          placement: a,
          rects: i,
          platform: o,
          elements: s,
          middlewareData: l,
        } = e,
        { element: c, padding: p = 0 } = Kt(t, e) || {};
      if (c == null) return {};
      const f = Co(p),
        h = { x: n, y: r },
        g = br(a),
        v = mr(g),
        m = await o.getDimensions(c),
        _ = g === "y",
        y = _ ? "top" : "left",
        x = _ ? "bottom" : "right",
        b = _ ? "clientHeight" : "clientWidth",
        C = i.reference[v] + i.reference[g] - h[g] - i.floating[v],
        S = h[g] - i.reference[g],
        M = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
      let N = M ? M[b] : 0;
      (!N || !(await (o.isElement == null ? void 0 : o.isElement(M)))) &&
        (N = s.floating[b] || i.floating[v]);
      const T = C / 2 - S / 2,
        z = N / 2 - m[v] / 2 - 1,
        U = Ct(f[y], z),
        O = Ct(f[x], z),
        u = U,
        d = N - m[v] - O,
        A = N / 2 - m[v] / 2 + T,
        R = or(u, A, d),
        D =
          !l.arrow &&
          $t(a) != null &&
          A !== R &&
          i.reference[v] / 2 - (A < u ? U : O) - m[v] / 2 < 0,
        V = D ? (A < u ? A - u : A - d) : 0;
      return {
        [g]: h[g] + V,
        data: {
          [g]: R,
          centerOffset: A - R - V,
          ...(D && { alignmentOffset: V }),
        },
        reset: D,
      };
    },
  }),
  _i = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var n, r;
          const {
              placement: a,
              middlewareData: i,
              rects: o,
              initialPlacement: s,
              platform: l,
              elements: c,
            } = e,
            {
              mainAxis: p = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: m = !0,
              ..._
            } = Kt(t, e);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const y = Ot(a),
            x = Ot(s) === s,
            b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            C = h || (x || !m ? [Cn(s)] : hi(s));
          !h && v !== "none" && C.push(...bi(s, m, v, b));
          const S = [s, ...C],
            M = await wr(e, _),
            N = [];
          let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((p && N.push(M[y]), f)) {
            const u = pi(a, o, b);
            N.push(M[u[0]], M[u[1]]);
          }
          if (
            ((T = [...T, { placement: a, overflows: N }]),
            !N.every((u) => u <= 0))
          ) {
            var z, U;
            const u = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              d = S[u];
            if (d)
              return {
                data: { index: u, overflows: T },
                reset: { placement: d },
              };
            let A =
              (U = T.filter((R) => R.overflows[0] <= 0).sort(
                (R, D) => R.overflows[1] - D.overflows[1]
              )[0]) == null
                ? void 0
                : U.placement;
            if (!A)
              switch (g) {
                case "bestFit": {
                  var O;
                  const R =
                    (O = T.map((D) => [
                      D.placement,
                      D.overflows
                        .filter((V) => V > 0)
                        .reduce((V, L) => V + L, 0),
                    ]).sort((D, V) => D[1] - V[1])[0]) == null
                      ? void 0
                      : O[0];
                  R && (A = R);
                  break;
                }
                case "initialPlacement":
                  A = s;
                  break;
              }
            if (a !== A) return { reset: { placement: A } };
          }
          return {};
        },
      }
    );
  };
async function Ai(t, e) {
  const { placement: n, platform: r, elements: a } = t,
    i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)),
    o = Ot(n),
    s = $t(n),
    l = un(n) === "y",
    c = ["left", "top"].includes(o) ? -1 : 1,
    p = i && l ? -1 : 1,
    f = Kt(e, t);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: v,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    s && typeof v == "number" && (g = s === "end" ? v * -1 : v),
    l ? { x: g * p, y: h * c } : { x: h * c, y: g * p }
  );
}
const Ci = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var n, r;
          const { x: a, y: i, placement: o, middlewareData: s } = e,
            l = await Ai(e, t);
          return o === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: a + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  ki = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: n, y: r, placement: a } = e,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: s = {
                fn: (_) => {
                  let { x: y, y: x } = _;
                  return { x: y, y: x };
                },
              },
              ...l
            } = Kt(t, e),
            c = { x: n, y: r },
            p = await wr(e, l),
            f = un(Ot(a)),
            h = Ao(f);
          let g = c[h],
            v = c[f];
          if (i) {
            const _ = h === "y" ? "top" : "left",
              y = h === "y" ? "bottom" : "right",
              x = g + p[_],
              b = g - p[y];
            g = or(x, g, b);
          }
          if (o) {
            const _ = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              x = v + p[_],
              b = v - p[y];
            v = or(x, v, b);
          }
          const m = s.fn({ ...e, [h]: g, [f]: v });
          return { ...m, data: { x: m.x - n, y: m.y - r } };
        },
      }
    );
  },
  Oi = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          const { placement: n, rects: r, platform: a, elements: i } = e,
            { apply: o = () => {}, ...s } = Kt(t, e),
            l = await wr(e, s),
            c = Ot(n),
            p = $t(n),
            f = un(n) === "y",
            { width: h, height: g } = r.floating;
          let v, m;
          c === "top" || c === "bottom"
            ? ((v = c),
              (m =
                p ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = c), (v = p === "end" ? "top" : "bottom"));
          const _ = g - l[v],
            y = h - l[m],
            x = !e.middlewareData.shift;
          let b = _,
            C = y;
          if (f) {
            const M = h - l.left - l.right;
            C = p || x ? Ct(y, M) : M;
          } else {
            const M = g - l.top - l.bottom;
            b = p || x ? Ct(_, M) : M;
          }
          if (x && !p) {
            const M = $e(l.left, 0),
              N = $e(l.right, 0),
              T = $e(l.top, 0),
              z = $e(l.bottom, 0);
            f
              ? (C = h - 2 * (M !== 0 || N !== 0 ? M + N : $e(l.left, l.right)))
              : (b =
                  g - 2 * (T !== 0 || z !== 0 ? T + z : $e(l.top, l.bottom)));
          }
          await o({ ...e, availableWidth: C, availableHeight: b });
          const S = await a.getDimensions(i.floating);
          return h !== S.width || g !== S.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Qt(t) {
  return ko(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Xe(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function wt(t) {
  var e;
  return (e = (ko(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function ko(t) {
  return t instanceof Node || t instanceof Xe(t).Node;
}
function vt(t) {
  return t instanceof Element || t instanceof Xe(t).Element;
}
function gt(t) {
  return t instanceof HTMLElement || t instanceof Xe(t).HTMLElement;
}
function Ur(t) {
  return typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof Xe(t).ShadowRoot;
}
function fn(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: a } = it(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + r + n) &&
    !["inline", "contents"].includes(a)
  );
}
function Pi(t) {
  return ["table", "td", "th"].includes(Qt(t));
}
function yr(t) {
  const e = xr(),
    n = it(t);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!e && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!e && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Si(t) {
  let e = Pt(t);
  for (; gt(e) && !Gt(e); ) {
    if (yr(e)) return e;
    e = Pt(e);
  }
  return null;
}
function xr() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Gt(t) {
  return ["html", "body", "#document"].includes(Qt(t));
}
function it(t) {
  return Xe(t).getComputedStyle(t);
}
function Dn(t) {
  return vt(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Pt(t) {
  if (Qt(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Ur(t) && t.host) || wt(t);
  return Ur(e) ? e.host : e;
}
function Oo(t) {
  const e = Pt(t);
  return Gt(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : gt(e) && fn(e)
    ? e
    : Oo(e);
}
function ln(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const a = Oo(t),
    i = a === ((r = t.ownerDocument) == null ? void 0 : r.body),
    o = Xe(a);
  return i
    ? e.concat(
        o,
        o.visualViewport || [],
        fn(a) ? a : [],
        o.frameElement && n ? ln(o.frameElement) : []
      )
    : e.concat(a, ln(a, [], n));
}
function Po(t) {
  const e = it(t);
  let n = parseFloat(e.width) || 0,
    r = parseFloat(e.height) || 0;
  const a = gt(t),
    i = a ? t.offsetWidth : n,
    o = a ? t.offsetHeight : r,
    s = An(n) !== i || An(r) !== o;
  return s && ((n = i), (r = o)), { width: n, height: r, $: s };
}
function _r(t) {
  return vt(t) ? t : t.contextElement;
}
function Ut(t) {
  const e = _r(t);
  if (!gt(e)) return kt(1);
  const n = e.getBoundingClientRect(),
    { width: r, height: a, $: i } = Po(e);
  let o = (i ? An(n.width) : n.width) / r,
    s = (i ? An(n.height) : n.height) / a;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
const Ti = kt(0);
function So(t) {
  const e = Xe(t);
  return !xr() || !e.visualViewport
    ? Ti
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Li(t, e, n) {
  return e === void 0 && (e = !1), !n || (e && n !== Xe(t)) ? !1 : e;
}
function Dt(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(),
    i = _r(t);
  let o = kt(1);
  e && (r ? vt(r) && (o = Ut(r)) : (o = Ut(t)));
  const s = Li(i, n, r) ? So(i) : kt(0);
  let l = (a.left + s.x) / o.x,
    c = (a.top + s.y) / o.y,
    p = a.width / o.x,
    f = a.height / o.y;
  if (i) {
    const h = Xe(i),
      g = r && vt(r) ? Xe(r) : r;
    let v = h,
      m = v.frameElement;
    for (; m && r && g !== v; ) {
      const _ = Ut(m),
        y = m.getBoundingClientRect(),
        x = it(m),
        b = y.left + (m.clientLeft + parseFloat(x.paddingLeft)) * _.x,
        C = y.top + (m.clientTop + parseFloat(x.paddingTop)) * _.y;
      (l *= _.x),
        (c *= _.y),
        (p *= _.x),
        (f *= _.y),
        (l += b),
        (c += C),
        (v = Xe(m)),
        (m = v.frameElement);
    }
  }
  return kn({ width: p, height: f, x: l, y: c });
}
const Ei = [":popover-open", ":modal"];
function Ar(t) {
  return Ei.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Mi(t) {
  let { elements: e, rect: n, offsetParent: r, strategy: a } = t;
  const i = a === "fixed",
    o = wt(r),
    s = e ? Ar(e.floating) : !1;
  if (r === o || (s && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = kt(1);
  const p = kt(0),
    f = gt(r);
  if (
    (f || (!f && !i)) &&
    ((Qt(r) !== "body" || fn(o)) && (l = Dn(r)), gt(r))
  ) {
    const h = Dt(r);
    (c = Ut(r)), (p.x = h.x + r.clientLeft), (p.y = h.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + p.x,
    y: n.y * c.y - l.scrollTop * c.y + p.y,
  };
}
function Ri(t) {
  return Array.from(t.getClientRects());
}
function To(t) {
  return Dt(wt(t)).left + Dn(t).scrollLeft;
}
function Di(t) {
  const e = wt(t),
    n = Dn(t),
    r = t.ownerDocument.body,
    a = $e(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
    i = $e(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + To(t);
  const s = -n.scrollTop;
  return (
    it(r).direction === "rtl" && (o += $e(e.clientWidth, r.clientWidth) - a),
    { width: a, height: i, x: o, y: s }
  );
}
function Fi(t, e) {
  const n = Xe(t),
    r = wt(t),
    a = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    l = 0;
  if (a) {
    (i = a.width), (o = a.height);
    const c = xr();
    (!c || (c && e === "fixed")) && ((s = a.offsetLeft), (l = a.offsetTop));
  }
  return { width: i, height: o, x: s, y: l };
}
function Ni(t, e) {
  const n = Dt(t, !0, e === "fixed"),
    r = n.top + t.clientTop,
    a = n.left + t.clientLeft,
    i = gt(t) ? Ut(t) : kt(1),
    o = t.clientWidth * i.x,
    s = t.clientHeight * i.y,
    l = a * i.x,
    c = r * i.y;
  return { width: o, height: s, x: l, y: c };
}
function Gr(t, e, n) {
  let r;
  if (e === "viewport") r = Fi(t, n);
  else if (e === "document") r = Di(wt(t));
  else if (vt(e)) r = Ni(e, n);
  else {
    const a = So(t);
    r = { ...e, x: e.x - a.x, y: e.y - a.y };
  }
  return kn(r);
}
function Lo(t, e) {
  const n = Pt(t);
  return n === e || !vt(n) || Gt(n)
    ? !1
    : it(n).position === "fixed" || Lo(n, e);
}
function zi(t, e) {
  const n = e.get(t);
  if (n) return n;
  let r = ln(t, [], !1).filter((s) => vt(s) && Qt(s) !== "body"),
    a = null;
  const i = it(t).position === "fixed";
  let o = i ? Pt(t) : t;
  for (; vt(o) && !Gt(o); ) {
    const s = it(o),
      l = yr(o);
    !l && s.position === "fixed" && (a = null),
      (
        i
          ? !l && !a
          : (!l &&
              s.position === "static" &&
              !!a &&
              ["absolute", "fixed"].includes(a.position)) ||
            (fn(o) && !l && Lo(t, o))
      )
        ? (r = r.filter((p) => p !== o))
        : (a = s),
      (o = Pt(o));
  }
  return e.set(t, r), r;
}
function Ii(t) {
  let { element: e, boundary: n, rootBoundary: r, strategy: a } = t;
  const o = [
      ...(n === "clippingAncestors"
        ? Ar(e)
          ? []
          : zi(e, this._c)
        : [].concat(n)),
      r,
    ],
    s = o[0],
    l = o.reduce((c, p) => {
      const f = Gr(e, p, a);
      return (
        (c.top = $e(f.top, c.top)),
        (c.right = Ct(f.right, c.right)),
        (c.bottom = Ct(f.bottom, c.bottom)),
        (c.left = $e(f.left, c.left)),
        c
      );
    }, Gr(e, s, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Bi(t) {
  const { width: e, height: n } = Po(t);
  return { width: e, height: n };
}
function Vi(t, e, n) {
  const r = gt(e),
    a = wt(e),
    i = n === "fixed",
    o = Dt(t, !0, i, e);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = kt(0);
  if (r || (!r && !i))
    if (((Qt(e) !== "body" || fn(a)) && (s = Dn(e)), r)) {
      const f = Dt(e, !0, i, e);
      (l.x = f.x + e.clientLeft), (l.y = f.y + e.clientTop);
    } else a && (l.x = To(a));
  const c = o.left + s.scrollLeft - l.x,
    p = o.top + s.scrollTop - l.y;
  return { x: c, y: p, width: o.width, height: o.height };
}
function Un(t) {
  return it(t).position === "static";
}
function qr(t, e) {
  return !gt(t) || it(t).position === "fixed"
    ? null
    : e
    ? e(t)
    : t.offsetParent;
}
function Eo(t, e) {
  const n = Xe(t);
  if (Ar(t)) return n;
  if (!gt(t)) {
    let a = Pt(t);
    for (; a && !Gt(a); ) {
      if (vt(a) && !Un(a)) return a;
      a = Pt(a);
    }
    return n;
  }
  let r = qr(t, e);
  for (; r && Pi(r) && Un(r); ) r = qr(r, e);
  return r && Gt(r) && Un(r) && !yr(r) ? n : r || Si(t) || n;
}
const Hi = async function (t) {
  const e = this.getOffsetParent || Eo,
    n = this.getDimensions,
    r = await n(t.floating);
  return {
    reference: Vi(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Zi(t) {
  return it(t).direction === "rtl";
}
const Wi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mi,
  getDocumentElement: wt,
  getClippingRect: Ii,
  getOffsetParent: Eo,
  getElementRects: Hi,
  getClientRects: Ri,
  getDimensions: Bi,
  getScale: Ut,
  isElement: vt,
  isRTL: Zi,
};
function ji(t, e) {
  let n = null,
    r;
  const a = wt(t);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function o(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const { left: c, top: p, width: f, height: h } = t.getBoundingClientRect();
    if ((s || e(), !f || !h)) return;
    const g = hn(p),
      v = hn(a.clientWidth - (c + f)),
      m = hn(a.clientHeight - (p + h)),
      _ = hn(c),
      x = {
        rootMargin: -g + "px " + -v + "px " + -m + "px " + -_ + "px",
        threshold: $e(0, Ct(1, l)) || 1,
      };
    let b = !0;
    function C(S) {
      const M = S[0].intersectionRatio;
      if (M !== l) {
        if (!b) return o();
        M
          ? o(!1, M)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...x, root: a.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(t);
  }
  return o(!0), i;
}
function Ui(t, e, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = _r(t),
    p = a || i ? [...(c ? ln(c) : []), ...ln(e)] : [];
  p.forEach((y) => {
    a && y.addEventListener("scroll", n, { passive: !0 }),
      i && y.addEventListener("resize", n);
  });
  const f = c && s ? ji(c, n) : null;
  let h = -1,
    g = null;
  o &&
    ((g = new ResizeObserver((y) => {
      let [x] = y;
      x &&
        x.target === c &&
        g &&
        (g.unobserve(e),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var b;
          (b = g) == null || b.observe(e);
        }))),
        n();
    })),
    c && !l && g.observe(c),
    g.observe(e));
  let v,
    m = l ? Dt(t) : null;
  l && _();
  function _() {
    const y = Dt(t);
    m &&
      (y.x !== m.x ||
        y.y !== m.y ||
        y.width !== m.width ||
        y.height !== m.height) &&
      n(),
      (m = y),
      (v = requestAnimationFrame(_));
  }
  return (
    n(),
    () => {
      var y;
      p.forEach((x) => {
        a && x.removeEventListener("scroll", n),
          i && x.removeEventListener("resize", n);
      }),
        f == null || f(),
        (y = g) == null || y.disconnect(),
        (g = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const Gi = Ci,
  qi = ki,
  Yi = _i,
  Ki = Oi,
  $i = xi,
  Qi = (t, e, n) => {
    const r = new Map(),
      a = { platform: Wi, ...n },
      i = { ...a.platform, _c: r };
    return yi(t, e, { ...a, platform: i });
  },
  Xi = {
    strategy: "absolute",
    placement: "top",
    gutter: 5,
    flip: !0,
    sameWidth: !1,
    overflowPadding: 8,
  },
  Ji = {
    bottom: "rotate(45deg)",
    left: "rotate(135deg)",
    top: "rotate(225deg)",
    right: "rotate(315deg)",
  };
function Mo(t, e, n = {}) {
  if (!e || !t || n === null) return { destroy: Ne };
  const r = { ...Xi, ...n },
    a = e.querySelector("[data-arrow=true]"),
    i = [];
  r.flip && i.push(Yi({ boundary: r.boundary, padding: r.overflowPadding }));
  const o = nt(a) ? a.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const l = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (l == null ? void 0 : l.mainAxis) != null && (l.mainAxis += o),
      i.push(Gi(l));
  }
  i.push(
    qi({
      boundary: r.boundary,
      crossAxis: r.overlap,
      padding: r.overflowPadding,
    })
  ),
    a && i.push($i({ element: a, padding: 8 })),
    i.push(
      Ki({
        padding: r.overflowPadding,
        apply({ rects: l, availableHeight: c, availableWidth: p }) {
          r.sameWidth &&
            Object.assign(e.style, {
              width: `${Math.round(l.reference.width)}px`,
              minWidth: "unset",
            }),
            r.fitViewport &&
              Object.assign(e.style, {
                maxWidth: `${p}px`,
                maxHeight: `${c}px`,
              });
        },
      })
    );
  function s() {
    if (!t || !e || (nt(t) && !t.ownerDocument.documentElement.contains(t)))
      return;
    const { placement: l, strategy: c } = r;
    Qi(t, e, { placement: l, middleware: i, strategy: c }).then((p) => {
      const f = Math.round(p.x),
        h = Math.round(p.y),
        [g, v] = es(p.placement);
      if (
        (e.setAttribute("data-side", g),
        e.setAttribute("data-align", v),
        Object.assign(e.style, {
          position: r.strategy,
          top: `${h}px`,
          left: `${f}px`,
        }),
        nt(a) && p.middlewareData.arrow)
      ) {
        const { x: m, y: _ } = p.middlewareData.arrow,
          y = p.placement.split("-")[0];
        a.setAttribute("data-side", y),
          Object.assign(a.style, {
            position: "absolute",
            left: m != null ? `${m}px` : "",
            top: _ != null ? `${_}px` : "",
            [y]: `calc(100% - ${o}px)`,
            transform: Ji[y],
            backgroundColor: "inherit",
            zIndex: "inherit",
          });
      }
      return p;
    });
  }
  return (
    Object.assign(e.style, { position: r.strategy }), { destroy: Ui(t, e, s) }
  );
}
function es(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Ro = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])",
  ],
  On = Ro.join(","),
  Do = typeof Element > "u",
  Ft = Do
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  Pn =
    !Do && Element.prototype.getRootNode
      ? function (t) {
          var e;
          return t == null || (e = t.getRootNode) === null || e === void 0
            ? void 0
            : e.call(t);
        }
      : function (t) {
          return t == null ? void 0 : t.ownerDocument;
        },
  Sn = function t(e, n) {
    var r;
    n === void 0 && (n = !0);
    var a =
        e == null || (r = e.getAttribute) === null || r === void 0
          ? void 0
          : r.call(e, "inert"),
      i = a === "" || a === "true",
      o = i || (n && e && t(e.parentNode));
    return o;
  },
  ts = function (e) {
    var n,
      r =
        e == null || (n = e.getAttribute) === null || n === void 0
          ? void 0
          : n.call(e, "contenteditable");
    return r === "" || r === "true";
  },
  Fo = function (e, n, r) {
    if (Sn(e)) return [];
    var a = Array.prototype.slice.apply(e.querySelectorAll(On));
    return n && Ft.call(e, On) && a.unshift(e), (a = a.filter(r)), a;
  },
  No = function t(e, n, r) {
    for (var a = [], i = Array.from(e); i.length; ) {
      var o = i.shift();
      if (!Sn(o, !1))
        if (o.tagName === "SLOT") {
          var s = o.assignedElements(),
            l = s.length ? s : o.children,
            c = t(l, !0, r);
          r.flatten
            ? a.push.apply(a, c)
            : a.push({ scopeParent: o, candidates: c });
        } else {
          var p = Ft.call(o, On);
          p && r.filter(o) && (n || !e.includes(o)) && a.push(o);
          var f =
              o.shadowRoot ||
              (typeof r.getShadowRoot == "function" && r.getShadowRoot(o)),
            h = !Sn(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
          if (f && h) {
            var g = t(f === !0 ? o.children : f.children, !0, r);
            r.flatten
              ? a.push.apply(a, g)
              : a.push({ scopeParent: o, candidates: g });
          } else i.unshift.apply(i, o.children);
        }
    }
    return a;
  },
  zo = function (e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
  },
  Lt = function (e) {
    if (!e) throw new Error("No node provided");
    return e.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ts(e)) &&
      !zo(e)
      ? 0
      : e.tabIndex;
  },
  ns = function (e, n) {
    var r = Lt(e);
    return r < 0 && n && !zo(e) ? 0 : r;
  },
  rs = function (e, n) {
    return e.tabIndex === n.tabIndex
      ? e.documentOrder - n.documentOrder
      : e.tabIndex - n.tabIndex;
  },
  Io = function (e) {
    return e.tagName === "INPUT";
  },
  os = function (e) {
    return Io(e) && e.type === "hidden";
  },
  as = function (e) {
    var n =
      e.tagName === "DETAILS" &&
      Array.prototype.slice.apply(e.children).some(function (r) {
        return r.tagName === "SUMMARY";
      });
    return n;
  },
  is = function (e, n) {
    for (var r = 0; r < e.length; r++)
      if (e[r].checked && e[r].form === n) return e[r];
  },
  ss = function (e) {
    if (!e.name) return !0;
    var n = e.form || Pn(e),
      r = function (s) {
        return n.querySelectorAll('input[type="radio"][name="' + s + '"]');
      },
      a;
    if (
      typeof window < "u" &&
      typeof window.CSS < "u" &&
      typeof window.CSS.escape == "function"
    )
      a = r(window.CSS.escape(e.name));
    else
      try {
        a = r(e.name);
      } catch (o) {
        return (
          console.error(
            "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
            o.message
          ),
          !1
        );
      }
    var i = is(a, e.form);
    return !i || i === e;
  },
  ls = function (e) {
    return Io(e) && e.type === "radio";
  },
  cs = function (e) {
    return ls(e) && !ss(e);
  },
  ds = function (e) {
    var n,
      r = e && Pn(e),
      a = (n = r) === null || n === void 0 ? void 0 : n.host,
      i = !1;
    if (r && r !== e) {
      var o, s, l;
      for (
        i = !!(
          ((o = a) !== null &&
            o !== void 0 &&
            (s = o.ownerDocument) !== null &&
            s !== void 0 &&
            s.contains(a)) ||
          (e != null &&
            (l = e.ownerDocument) !== null &&
            l !== void 0 &&
            l.contains(e))
        );
        !i && a;

      ) {
        var c, p, f;
        (r = Pn(a)),
          (a = (c = r) === null || c === void 0 ? void 0 : c.host),
          (i = !!(
            (p = a) !== null &&
            p !== void 0 &&
            (f = p.ownerDocument) !== null &&
            f !== void 0 &&
            f.contains(a)
          ));
      }
    }
    return i;
  },
  Yr = function (e) {
    var n = e.getBoundingClientRect(),
      r = n.width,
      a = n.height;
    return r === 0 && a === 0;
  },
  us = function (e, n) {
    var r = n.displayCheck,
      a = n.getShadowRoot;
    if (getComputedStyle(e).visibility === "hidden") return !0;
    var i = Ft.call(e, "details>summary:first-of-type"),
      o = i ? e.parentElement : e;
    if (Ft.call(o, "details:not([open]) *")) return !0;
    if (!r || r === "full" || r === "legacy-full") {
      if (typeof a == "function") {
        for (var s = e; e; ) {
          var l = e.parentElement,
            c = Pn(e);
          if (l && !l.shadowRoot && a(l) === !0) return Yr(e);
          e.assignedSlot
            ? (e = e.assignedSlot)
            : !l && c !== e.ownerDocument
            ? (e = c.host)
            : (e = l);
        }
        e = s;
      }
      if (ds(e)) return !e.getClientRects().length;
      if (r !== "legacy-full") return !0;
    } else if (r === "non-zero-area") return Yr(e);
    return !1;
  },
  fs = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var n = e.parentElement; n; ) {
        if (n.tagName === "FIELDSET" && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var a = n.children.item(r);
            if (a.tagName === "LEGEND")
              return Ft.call(n, "fieldset[disabled] *") ? !0 : !a.contains(e);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  },
  Tn = function (e, n) {
    return !(n.disabled || Sn(n) || os(n) || us(n, e) || as(n) || fs(n));
  },
  ir = function (e, n) {
    return !(cs(n) || Lt(n) < 0 || !Tn(e, n));
  },
  vs = function (e) {
    var n = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
  },
  gs = function t(e) {
    var n = [],
      r = [];
    return (
      e.forEach(function (a, i) {
        var o = !!a.scopeParent,
          s = o ? a.scopeParent : a,
          l = ns(s, o),
          c = o ? t(a.candidates) : s;
        l === 0
          ? o
            ? n.push.apply(n, c)
            : n.push(s)
          : r.push({
              documentOrder: i,
              tabIndex: l,
              item: a,
              isScope: o,
              content: c,
            });
      }),
      r
        .sort(rs)
        .reduce(function (a, i) {
          return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
        }, [])
        .concat(n)
    );
  },
  ps = function (e, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = No([e], n.includeContainer, {
            filter: ir.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: vs,
          }))
        : (r = Fo(e, n.includeContainer, ir.bind(null, n))),
      gs(r)
    );
  },
  hs = function (e, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = No([e], n.includeContainer, {
            filter: Tn.bind(null, n),
            flatten: !0,
            getShadowRoot: n.getShadowRoot,
          }))
        : (r = Fo(e, n.includeContainer, Tn.bind(null, n))),
      r
    );
  },
  Nt = function (e, n) {
    if (((n = n || {}), !e)) throw new Error("No node provided");
    return Ft.call(e, On) === !1 ? !1 : ir(n, e);
  },
  ms = Ro.concat("iframe").join(","),
  Gn = function (e, n) {
    if (((n = n || {}), !e)) throw new Error("No node provided");
    return Ft.call(e, ms) === !1 ? !1 : Tn(n, e);
  };
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function Kr(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $r(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Kr(Object(n), !0).forEach(function (r) {
          bs(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Kr(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function bs(t, e, n) {
  return (
    (e = ys(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function ws(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ys(t) {
  var e = ws(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Qr = {
    activateTrap: function (e, n) {
      if (e.length > 0) {
        var r = e[e.length - 1];
        r !== n && r.pause();
      }
      var a = e.indexOf(n);
      a === -1 || e.splice(a, 1), e.push(n);
    },
    deactivateTrap: function (e, n) {
      var r = e.indexOf(n);
      r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  xs = function (e) {
    return (
      e.tagName &&
      e.tagName.toLowerCase() === "input" &&
      typeof e.select == "function"
    );
  },
  _s = function (e) {
    return (
      (e == null ? void 0 : e.key) === "Escape" ||
      (e == null ? void 0 : e.key) === "Esc" ||
      (e == null ? void 0 : e.keyCode) === 27
    );
  },
  on = function (e) {
    return (
      (e == null ? void 0 : e.key) === "Tab" ||
      (e == null ? void 0 : e.keyCode) === 9
    );
  },
  As = function (e) {
    return on(e) && !e.shiftKey;
  },
  Cs = function (e) {
    return on(e) && e.shiftKey;
  },
  Xr = function (e) {
    return setTimeout(e, 0);
  },
  Jr = function (e, n) {
    var r = -1;
    return (
      e.every(function (a, i) {
        return n(a) ? ((r = i), !1) : !0;
      }),
      r
    );
  },
  Jt = function (e) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
      a < n;
      a++
    )
      r[a - 1] = arguments[a];
    return typeof e == "function" ? e.apply(void 0, r) : e;
  },
  mn = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == "function"
      ? e.composedPath()[0]
      : e.target;
  },
  ks = [],
  Os = function (e, n) {
    var r = (n == null ? void 0 : n.document) || document,
      a = (n == null ? void 0 : n.trapStack) || ks,
      i = $r(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: As,
          isKeyBackward: Cs,
        },
        n
      ),
      o = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      s,
      l = function (u, d, A) {
        return u && u[d] !== void 0 ? u[d] : i[A || d];
      },
      c = function (u, d) {
        var A =
          typeof (d == null ? void 0 : d.composedPath) == "function"
            ? d.composedPath()
            : void 0;
        return o.containerGroups.findIndex(function (R) {
          var D = R.container,
            V = R.tabbableNodes;
          return (
            D.contains(u) ||
            (A == null ? void 0 : A.includes(D)) ||
            V.find(function (L) {
              return L === u;
            })
          );
        });
      },
      p = function (u) {
        var d = i[u];
        if (typeof d == "function") {
          for (
            var A = arguments.length, R = new Array(A > 1 ? A - 1 : 0), D = 1;
            D < A;
            D++
          )
            R[D - 1] = arguments[D];
          d = d.apply(void 0, R);
        }
        if ((d === !0 && (d = void 0), !d)) {
          if (d === void 0 || d === !1) return d;
          throw new Error(
            "`".concat(
              u,
              "` was specified but was not a node, or did not return a node"
            )
          );
        }
        var V = d;
        if (typeof d == "string" && ((V = r.querySelector(d)), !V))
          throw new Error(
            "`".concat(u, "` as selector refers to no known node")
          );
        return V;
      },
      f = function () {
        var u = p("initialFocus");
        if (u === !1) return !1;
        if (u === void 0 || !Gn(u, i.tabbableOptions))
          if (c(r.activeElement) >= 0) u = r.activeElement;
          else {
            var d = o.tabbableGroups[0],
              A = d && d.firstTabbableNode;
            u = A || p("fallbackFocus");
          }
        if (!u)
          throw new Error(
            "Your focus-trap needs to have at least one focusable element"
          );
        return u;
      },
      h = function () {
        if (
          ((o.containerGroups = o.containers.map(function (u) {
            var d = ps(u, i.tabbableOptions),
              A = hs(u, i.tabbableOptions),
              R = d.length > 0 ? d[0] : void 0,
              D = d.length > 0 ? d[d.length - 1] : void 0,
              V = A.find(function (J) {
                return Nt(J);
              }),
              L = A.slice()
                .reverse()
                .find(function (J) {
                  return Nt(J);
                }),
              B = !!d.find(function (J) {
                return Lt(J) > 0;
              });
            return {
              container: u,
              tabbableNodes: d,
              focusableNodes: A,
              posTabIndexesFound: B,
              firstTabbableNode: R,
              lastTabbableNode: D,
              firstDomTabbableNode: V,
              lastDomTabbableNode: L,
              nextTabbableNode: function (re) {
                var ae =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !0,
                  Z = d.indexOf(re);
                return Z < 0
                  ? ae
                    ? A.slice(A.indexOf(re) + 1).find(function (Y) {
                        return Nt(Y);
                      })
                    : A.slice(0, A.indexOf(re))
                        .reverse()
                        .find(function (Y) {
                          return Nt(Y);
                        })
                  : d[Z + (ae ? 1 : -1)];
              },
            };
          })),
          (o.tabbableGroups = o.containerGroups.filter(function (u) {
            return u.tabbableNodes.length > 0;
          })),
          o.tabbableGroups.length <= 0 && !p("fallbackFocus"))
        )
          throw new Error(
            "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
          );
        if (
          o.containerGroups.find(function (u) {
            return u.posTabIndexesFound;
          }) &&
          o.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      g = function O(u) {
        var d = u.activeElement;
        if (d)
          return d.shadowRoot && d.shadowRoot.activeElement !== null
            ? O(d.shadowRoot)
            : d;
      },
      v = function O(u) {
        if (u !== !1 && u !== g(document)) {
          if (!u || !u.focus) {
            O(f());
            return;
          }
          u.focus({ preventScroll: !!i.preventScroll }),
            (o.mostRecentlyFocusedNode = u),
            xs(u) && u.select();
        }
      },
      m = function (u) {
        var d = p("setReturnFocus", u);
        return d || (d === !1 ? !1 : u);
      },
      _ = function (u) {
        var d = u.target,
          A = u.event,
          R = u.isBackward,
          D = R === void 0 ? !1 : R;
        (d = d || mn(A)), h();
        var V = null;
        if (o.tabbableGroups.length > 0) {
          var L = c(d, A),
            B = L >= 0 ? o.containerGroups[L] : void 0;
          if (L < 0)
            D
              ? (V =
                  o.tabbableGroups[o.tabbableGroups.length - 1]
                    .lastTabbableNode)
              : (V = o.tabbableGroups[0].firstTabbableNode);
          else if (D) {
            var J = Jr(o.tabbableGroups, function (ue) {
              var se = ue.firstTabbableNode;
              return d === se;
            });
            if (
              (J < 0 &&
                (B.container === d ||
                  (Gn(d, i.tabbableOptions) &&
                    !Nt(d, i.tabbableOptions) &&
                    !B.nextTabbableNode(d, !1))) &&
                (J = L),
              J >= 0)
            ) {
              var re = J === 0 ? o.tabbableGroups.length - 1 : J - 1,
                ae = o.tabbableGroups[re];
              V = Lt(d) >= 0 ? ae.lastTabbableNode : ae.lastDomTabbableNode;
            } else on(A) || (V = B.nextTabbableNode(d, !1));
          } else {
            var Z = Jr(o.tabbableGroups, function (ue) {
              var se = ue.lastTabbableNode;
              return d === se;
            });
            if (
              (Z < 0 &&
                (B.container === d ||
                  (Gn(d, i.tabbableOptions) &&
                    !Nt(d, i.tabbableOptions) &&
                    !B.nextTabbableNode(d))) &&
                (Z = L),
              Z >= 0)
            ) {
              var Y = Z === o.tabbableGroups.length - 1 ? 0 : Z + 1,
                Pe = o.tabbableGroups[Y];
              V = Lt(d) >= 0 ? Pe.firstTabbableNode : Pe.firstDomTabbableNode;
            } else on(A) || (V = B.nextTabbableNode(d));
          }
        } else V = p("fallbackFocus");
        return V;
      },
      y = function (u) {
        var d = mn(u);
        if (!(c(d, u) >= 0)) {
          if (Jt(i.clickOutsideDeactivates, u)) {
            s.deactivate({ returnFocus: i.returnFocusOnDeactivate });
            return;
          }
          Jt(i.allowOutsideClick, u) || u.preventDefault();
        }
      },
      x = function (u) {
        var d = mn(u),
          A = c(d, u) >= 0;
        if (A || d instanceof Document) A && (o.mostRecentlyFocusedNode = d);
        else {
          u.stopImmediatePropagation();
          var R,
            D = !0;
          if (o.mostRecentlyFocusedNode)
            if (Lt(o.mostRecentlyFocusedNode) > 0) {
              var V = c(o.mostRecentlyFocusedNode),
                L = o.containerGroups[V].tabbableNodes;
              if (L.length > 0) {
                var B = L.findIndex(function (J) {
                  return J === o.mostRecentlyFocusedNode;
                });
                B >= 0 &&
                  (i.isKeyForward(o.recentNavEvent)
                    ? B + 1 < L.length && ((R = L[B + 1]), (D = !1))
                    : B - 1 >= 0 && ((R = L[B - 1]), (D = !1)));
              }
            } else
              o.containerGroups.some(function (J) {
                return J.tabbableNodes.some(function (re) {
                  return Lt(re) > 0;
                });
              }) || (D = !1);
          else D = !1;
          D &&
            (R = _({
              target: o.mostRecentlyFocusedNode,
              isBackward: i.isKeyBackward(o.recentNavEvent),
            })),
            v(R || o.mostRecentlyFocusedNode || f());
        }
        o.recentNavEvent = void 0;
      },
      b = function (u) {
        var d =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = u;
        var A = _({ event: u, isBackward: d });
        A && (on(u) && u.preventDefault(), v(A));
      },
      C = function (u) {
        if (_s(u) && Jt(i.escapeDeactivates, u) !== !1) {
          u.preventDefault(), s.deactivate();
          return;
        }
        (i.isKeyForward(u) || i.isKeyBackward(u)) && b(u, i.isKeyBackward(u));
      },
      S = function (u) {
        var d = mn(u);
        c(d, u) >= 0 ||
          Jt(i.clickOutsideDeactivates, u) ||
          Jt(i.allowOutsideClick, u) ||
          (u.preventDefault(), u.stopImmediatePropagation());
      },
      M = function () {
        if (o.active)
          return (
            Qr.activateTrap(a, s),
            (o.delayInitialFocusTimer = i.delayInitialFocus
              ? Xr(function () {
                  v(f());
                })
              : v(f())),
            r.addEventListener("focusin", x, !0),
            r.addEventListener("mousedown", y, { capture: !0, passive: !1 }),
            r.addEventListener("touchstart", y, { capture: !0, passive: !1 }),
            r.addEventListener("click", S, { capture: !0, passive: !1 }),
            r.addEventListener("keydown", C, { capture: !0, passive: !1 }),
            s
          );
      },
      N = function () {
        if (o.active)
          return (
            r.removeEventListener("focusin", x, !0),
            r.removeEventListener("mousedown", y, !0),
            r.removeEventListener("touchstart", y, !0),
            r.removeEventListener("click", S, !0),
            r.removeEventListener("keydown", C, !0),
            s
          );
      },
      T = function (u) {
        var d = u.some(function (A) {
          var R = Array.from(A.removedNodes);
          return R.some(function (D) {
            return D === o.mostRecentlyFocusedNode;
          });
        });
        d && v(f());
      },
      z =
        typeof window < "u" && "MutationObserver" in window
          ? new MutationObserver(T)
          : void 0,
      U = function () {
        z &&
          (z.disconnect(),
          o.active &&
            !o.paused &&
            o.containers.map(function (u) {
              z.observe(u, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (s = {
        get active() {
          return o.active;
        },
        get paused() {
          return o.paused;
        },
        activate: function (u) {
          if (o.active) return this;
          var d = l(u, "onActivate"),
            A = l(u, "onPostActivate"),
            R = l(u, "checkCanFocusTrap");
          R || h(),
            (o.active = !0),
            (o.paused = !1),
            (o.nodeFocusedBeforeActivation = r.activeElement),
            d == null || d();
          var D = function () {
            R && h(), M(), U(), A == null || A();
          };
          return R ? (R(o.containers.concat()).then(D, D), this) : (D(), this);
        },
        deactivate: function (u) {
          if (!o.active) return this;
          var d = $r(
            {
              onDeactivate: i.onDeactivate,
              onPostDeactivate: i.onPostDeactivate,
              checkCanReturnFocus: i.checkCanReturnFocus,
            },
            u
          );
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            N(),
            (o.active = !1),
            (o.paused = !1),
            U(),
            Qr.deactivateTrap(a, s);
          var A = l(d, "onDeactivate"),
            R = l(d, "onPostDeactivate"),
            D = l(d, "checkCanReturnFocus"),
            V = l(d, "returnFocus", "returnFocusOnDeactivate");
          A == null || A();
          var L = function () {
            Xr(function () {
              V && v(m(o.nodeFocusedBeforeActivation)), R == null || R();
            });
          };
          return V && D
            ? (D(m(o.nodeFocusedBeforeActivation)).then(L, L), this)
            : (L(), this);
        },
        pause: function (u) {
          if (o.paused || !o.active) return this;
          var d = l(u, "onPause"),
            A = l(u, "onPostPause");
          return (
            (o.paused = !0), d == null || d(), N(), U(), A == null || A(), this
          );
        },
        unpause: function (u) {
          if (!o.paused || !o.active) return this;
          var d = l(u, "onUnpause"),
            A = l(u, "onPostUnpause");
          return (
            (o.paused = !1),
            d == null || d(),
            h(),
            M(),
            U(),
            A == null || A(),
            this
          );
        },
        updateContainerElements: function (u) {
          var d = [].concat(u).filter(Boolean);
          return (
            (o.containers = d.map(function (A) {
              return typeof A == "string" ? r.querySelector(A) : A;
            })),
            o.active && h(),
            U(),
            this
          );
        },
      }),
      s.updateContainerElements(e),
      s
    );
  };
function Ps(t = {}) {
  let e;
  const { immediate: n, ...r } = t,
    a = ft(!1),
    i = ft(!1),
    o = (f) => (e == null ? void 0 : e.activate(f)),
    s = (f) => {
      e == null || e.deactivate(f);
    },
    l = () => {
      e && (e.pause(), i.set(!0));
    },
    c = () => {
      e && (e.unpause(), i.set(!1));
    };
  return {
    useFocusTrap: (f) => (
      (e = Os(f, {
        ...r,
        onActivate() {
          var h;
          a.set(!0), (h = t.onActivate) == null || h.call(t);
        },
        onDeactivate() {
          var h;
          a.set(!1), (h = t.onDeactivate) == null || h.call(t);
        },
      })),
      n && o(),
      {
        destroy() {
          s(), (e = void 0);
        },
      }
    ),
    hasFocus: zr(a),
    isPaused: zr(i),
    activate: o,
    deactivate: s,
    pause: l,
    unpause: c,
  };
}
const bn = [],
  Ss = (t, e) => {
    let n = Ne;
    function r() {
      const i = bn.indexOf(t);
      i >= 0 && bn.splice(i, 1);
    }
    function a(i) {
      n();
      const {
        open: o,
        onClose: s,
        shouldCloseOnInteractOutside: l,
        closeOnInteractOutside: c,
      } = i;
      bo(100).then(() => {
        o ? bn.push(t) : r();
      });
      function p() {
        return Ia(bn) === t;
      }
      function f() {
        p() && s && (s(), r());
      }
      function h(v) {
        const m = v.target;
        cn(m) &&
          m &&
          p() &&
          (v.preventDefault(),
          v.stopPropagation(),
          v.stopImmediatePropagation());
      }
      function g(v) {
        l != null &&
          l(v) &&
          p() &&
          (v.preventDefault(),
          v.stopPropagation(),
          v.stopImmediatePropagation(),
          f());
      }
      n = Es(t, {
        onInteractOutsideStart: h,
        onInteractOutside: c ? g : void 0,
        enabled: o,
      }).destroy;
    }
    return (
      a(e),
      {
        update: a,
        destroy() {
          r(), n();
        },
      }
    );
  },
  Ts = {
    floating: {},
    focusTrap: {},
    modal: {},
    escapeKeydown: {},
    portal: "body",
  },
  Ls = (t, e) => {
    t.dataset.escapee = "";
    const { anchorElement: n, open: r, options: a } = e;
    if (!n || !r || !a) return { destroy: Ne };
    const i = { ...Ts, ...a },
      o = [];
    if (
      (i.portal !== null && o.push(Cr(t, i.portal).destroy),
      o.push(Mo(n, t, i.floating).destroy),
      i.focusTrap !== null)
    ) {
      const { useFocusTrap: l } = Ps({
        immediate: !0,
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        returnFocusOnDeactivate: !1,
        fallbackFocus: t,
        ...i.focusTrap,
      });
      o.push(l(t).destroy);
    }
    i.modal !== null &&
      o.push(
        Ss(t, {
          onClose: () => {
            nt(n) && (r.set(!1), n.focus());
          },
          shouldCloseOnInteractOutside: (l) =>
            !(l.defaultPrevented || (nt(n) && n.contains(l.target))),
          ...i.modal,
        }).destroy
      ),
      i.escapeKeydown !== null &&
        o.push(
          _o(t, {
            enabled: r,
            handler: () => {
              r.set(!1);
            },
            ...i.escapeKeydown,
          }).destroy
        );
    const s = ut(...o);
    return {
      destroy() {
        s();
      },
    };
  },
  Cr = (t, e = "body") => {
    let n;
    if (!nt(e) && typeof e != "string") return { destroy: Ne };
    async function r(i) {
      if (((e = i), typeof e == "string")) {
        if (
          ((n = document.querySelector(e)),
          n === null && (await an(), (n = document.querySelector(e))),
          n === null)
        )
          throw new Error(`No element found matching css selector: "${e}"`);
      } else if (e instanceof HTMLElement) n = e;
      else
        throw new TypeError(
          `Unknown portal target type: ${
            e === null ? "null" : typeof e
          }. Allowed types: string (CSS selector) or HTMLElement.`
        );
      (t.dataset.portal = ""), n.appendChild(t), (t.hidden = !1);
    }
    function a() {
      t.remove();
    }
    return r(e), { update: r, destroy: a };
  },
  Es = (t, e) => {
    let n = Ne,
      r = Ne,
      a = !1,
      i = !1,
      o = !1;
    function s(p) {
      n(), r();
      const { onInteractOutside: f, onInteractOutsideStart: h, enabled: g } = p;
      if (!g) return;
      function v(y) {
        f && eo(y, t) && (h == null || h(y));
        const x = y.target;
        cn(x) && Bo(t, x) && (i = !0), (a = !0);
      }
      function m(y) {
        f == null || f(y);
      }
      const _ = Ms(t);
      if (typeof PointerEvent < "u") {
        const y = (x) => {
          r();
          const b = (C) => {
            l(C) && m(C), c();
          };
          if (x.pointerType === "touch") {
            r = Je(_, "click", b, { capture: !0, once: !0 });
            return;
          }
          b(x);
        };
        n = ut(Je(_, "pointerdown", v, !0), Je(_, "pointerup", y, !0));
      } else {
        const y = (b) => {
            o ? (o = !1) : l(b) && m(b), c();
          },
          x = (b) => {
            (o = !0), l(b) && m(b), c();
          };
        n = ut(
          Je(_, "mousedown", v, !0),
          Je(_, "mouseup", y, !0),
          Je(_, "touchstart", v, !0),
          Je(_, "touchend", x, !0)
        );
      }
    }
    function l(p) {
      return !!(a && !i && eo(p, t));
    }
    function c() {
      (a = !1), (i = !1);
    }
    return (
      s(e),
      {
        update: s,
        destroy() {
          n(), r();
        },
      }
    );
  };
function eo(t, e) {
  if ("button" in t && t.button > 0) return !1;
  const n = t.target;
  if (!cn(n)) return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : e && !Bo(e, n);
}
function Bo(t, e) {
  return t === e || t.contains(e);
}
function Ms(t) {
  return (t == null ? void 0 : t.ownerDocument) ?? document;
}
jt(!1), jt(!1), jt(void 0);
function Rs() {
  return {
    elements: {
      root: et("label", {
        action: (e) => ({
          destroy: qe(e, "mousedown", (r) => {
            !r.defaultPrevented && r.detail > 1 && r.preventDefault();
          }),
        }),
      }),
    },
  };
}
const Ds = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: !1,
  numberOfMonths: 1,
  pagedNavigation: !1,
  weekStartsOn: 0,
  fixedWeeks: !1,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: !1,
  readonly: !1,
  weekdayFormat: "narrow",
};
({
  ...Rn(
    Ds,
    "isDateDisabled",
    "isDateUnavailable",
    "value",
    "locale",
    "disabled",
    "readonly",
    "minValue",
    "maxValue",
    "weekdayFormat"
  ),
});
const Fs = {
    positioning: { placement: "bottom" },
    arrowSize: 8,
    defaultOpen: !1,
    disableFocusTrap: !1,
    closeOnEscape: !0,
    preventScroll: !1,
    onOpenChange: void 0,
    closeOnOutsideClick: !0,
    portal: void 0,
    forceVisible: !1,
    openFocus: void 0,
    closeFocus: void 0,
    onOutsideClick: void 0,
  },
  { name: en } = pr("popover"),
  Ns = ["trigger", "content"];
function zs(t) {
  const e = { ...Fs, ...t },
    n = sn(Rn(e, "open", "ids")),
    {
      positioning: r,
      arrowSize: a,
      disableFocusTrap: i,
      preventScroll: o,
      closeOnEscape: s,
      closeOnOutsideClick: l,
      portal: c,
      forceVisible: p,
      openFocus: f,
      closeFocus: h,
      onOutsideClick: g,
    } = n,
    v = e.open ?? ft(e.defaultOpen),
    m = hr(v, e == null ? void 0 : e.onOpenChange),
    _ = dn.writable(null),
    y = sn({ ...wo(Ns), ...e.ids });
  ja(() => {
    _.set(document.getElementById(y.trigger.get()));
  });
  function x() {
    m.set(!1);
    const O = document.getElementById(y.trigger.get());
    Wr({ prop: h.get(), defaultEl: O });
  }
  const b = di({ open: m, activeTrigger: _, forceVisible: p }),
    C = et(en("content"), {
      stores: [b, c, y.content],
      returned: ([O, u, d]) => ({
        hidden: O && _n ? void 0 : !0,
        tabindex: -1,
        style: Mt({ display: O ? void 0 : "none" }),
        id: d,
        "data-state": O ? "open" : "closed",
        "data-portal": ho(u),
      }),
      action: (O) => {
        let u = Ne;
        const d = Rt([b, _, r, i, s, l, c], ([A, R, D, V, L, B, J]) => {
          u(),
            !(!A || !R) &&
              an().then(() => {
                u(),
                  (u = Ls(O, {
                    anchorElement: R,
                    open: m,
                    options: {
                      floating: D,
                      focusTrap: V
                        ? null
                        : {
                            returnFocusOnDeactivate: !1,
                            clickOutsideDeactivates: B,
                            allowOutsideClick: !0,
                            escapeDeactivates: L,
                          },
                      modal: {
                        shouldCloseOnInteractOutside: M,
                        onClose: x,
                        open: A,
                        closeOnInteractOutside: B,
                      },
                      escapeKeydown: L
                        ? {
                            handler: () => {
                              x();
                            },
                          }
                        : null,
                      portal: rr(O, J),
                    },
                  }).destroy);
              });
        });
        return {
          destroy() {
            d(), u();
          },
        };
      },
    });
  function S(O) {
    m.update((u) => !u), O && O !== _.get() && _.set(O);
  }
  function M(O) {
    var A;
    if (((A = g.get()) == null || A(O), O.defaultPrevented)) return !1;
    const u = O.target,
      d = document.getElementById(y.trigger.get());
    return !(d && cn(u) && (u === d || d.contains(u)));
  }
  const N = et(en("trigger"), {
      stores: [b, y.content, y.trigger],
      returned: ([O, u, d]) => ({
        role: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": O ? "true" : "false",
        "data-state": to(O),
        "aria-controls": u,
        id: d,
      }),
      action: (O) => ({
        destroy: ut(
          qe(O, "click", () => {
            S(O);
          }),
          qe(O, "keydown", (d) => {
            (d.key !== At.ENTER && d.key !== At.SPACE) ||
              (d.preventDefault(), S(O));
          })
        ),
      }),
    }),
    T = et(en("overlay"), {
      stores: [b],
      returned: ([O]) => ({
        hidden: O ? void 0 : !0,
        tabindex: -1,
        style: Mt({ display: O ? void 0 : "none" }),
        "aria-hidden": "true",
        "data-state": to(O),
      }),
      action: (O) => {
        let u = Ne,
          d = Ne,
          A = Ne;
        return (
          s.get() &&
            (u = _o(O, {
              handler: () => {
                x();
              },
            }).destroy),
          (d = Rt([c], ([R]) => {
            if ((A(), R === null)) return;
            const D = rr(O, R);
            D !== null && (A = Cr(O, D).destroy);
          })),
          {
            destroy() {
              u(), d(), A();
            },
          }
        );
      },
    }),
    z = et(en("arrow"), {
      stores: a,
      returned: (O) => ({
        "data-arrow": !0,
        style: Mt({
          position: "absolute",
          width: `var(--arrow-size, ${O}px)`,
          height: `var(--arrow-size, ${O}px)`,
        }),
      }),
    }),
    U = et(en("close"), {
      returned: () => ({ type: "button" }),
      action: (O) => ({
        destroy: ut(
          qe(O, "click", (d) => {
            d.defaultPrevented || x();
          }),
          qe(O, "keydown", (d) => {
            d.defaultPrevented ||
              (d.key !== At.ENTER && d.key !== At.SPACE) ||
              (d.preventDefault(), S());
          })
        ),
      }),
    });
  return (
    Rt([m, _, o], ([O, u, d]) => {
      if (!_n) return;
      const A = [];
      if (O) {
        u ||
          an().then(() => {
            const D = document.getElementById(y.trigger.get());
            nt(D) && _.set(D);
          }),
          d && A.push(ci());
        const R = u ?? document.getElementById(y.trigger.get());
        Wr({ prop: f.get(), defaultEl: R });
      }
      return () => {
        A.forEach((R) => R());
      };
    }),
    {
      ids: y,
      elements: { trigger: N, content: C, arrow: z, close: U, overlay: T },
      states: { open: m },
      options: n,
    }
  );
}
function to(t) {
  return t ? "open" : "closed";
}
const Is = {
    defaultChecked: !1,
    disabled: !1,
    required: !1,
    name: "",
    value: "",
  },
  { name: no } = pr("switch");
function Bs(t) {
  const e = { ...Is, ...t },
    n = sn(Rn(e, "checked")),
    { disabled: r, required: a, name: i, value: o } = n,
    s = e.checked ?? ft(e.defaultChecked),
    l = hr(s, e == null ? void 0 : e.onCheckedChange);
  function c() {
    r.get() || l.update((h) => !h);
  }
  const p = et(no(), {
      stores: [l, r, a],
      returned: ([h, g, v]) => ({
        "data-disabled": Wn(g),
        disabled: Wn(g),
        "data-state": h ? "checked" : "unchecked",
        type: "button",
        role: "switch",
        "aria-checked": h ? "true" : "false",
        "aria-required": v ? "true" : void 0,
      }),
      action(h) {
        return {
          destroy: ut(
            qe(h, "click", () => {
              c();
            }),
            qe(h, "keydown", (v) => {
              (v.key !== At.ENTER && v.key !== At.SPACE) ||
                (v.preventDefault(), c());
            })
          ),
        };
      },
    }),
    f = et(no("input"), {
      stores: [l, i, a, r, o],
      returned: ([h, g, v, m, _]) => ({
        type: "checkbox",
        "aria-hidden": !0,
        hidden: !0,
        tabindex: -1,
        name: g,
        value: _,
        checked: h,
        required: v,
        disabled: Wn(m),
        style: Mt({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)",
        }),
      }),
    });
  return {
    elements: { root: p, input: f },
    states: { checked: l },
    options: n,
  };
}
const Vs = {
    positioning: { placement: "bottom" },
    arrowSize: 8,
    defaultOpen: !1,
    closeOnPointerDown: !0,
    openDelay: 1e3,
    closeDelay: 0,
    forceVisible: !1,
    portal: void 0,
    closeOnEscape: !0,
    disableHoverableContent: !1,
    group: void 0,
  },
  { name: qn } = pr("tooltip"),
  wn = new Map(),
  Hs = ["trigger", "content"];
function Zs(t) {
  const e = { ...Vs, ...t },
    n = sn(Rn(e, "open", "ids")),
    {
      positioning: r,
      arrowSize: a,
      closeOnPointerDown: i,
      openDelay: o,
      closeDelay: s,
      forceVisible: l,
      portal: c,
      closeOnEscape: p,
      disableHoverableContent: f,
      group: h,
    } = n,
    g = e.open ?? ft(e.defaultOpen),
    v = hr(g, e == null ? void 0 : e.onOpenChange),
    m = ft(null),
    _ = sn({ ...wo(Hs), ...e.ids });
  let y = !1;
  const x = (u) => (_n ? document.getElementById(_[u].get()) : null);
  let b = null,
    C = null;
  function S(u) {
    C && (window.clearTimeout(C), (C = null)),
      b ||
        (b = window.setTimeout(() => {
          v.set(!0), m.update((d) => d ?? u), (b = null);
        }, o.get()));
  }
  function M(u) {
    if ((b && (window.clearTimeout(b), (b = null)), u && O)) {
      m.set("pointer");
      return;
    }
    C ||
      (C = window.setTimeout(() => {
        v.set(!1), m.set(null), u && (y = !1), (C = null);
      }, s.get()));
  }
  const N = Yt([v, l], ([u, d]) => u || d),
    T = et(qn("trigger"), {
      stores: [_.content, _.trigger, v],
      returned: ([u, d, A]) => ({
        "aria-describedby": u,
        id: d,
        "data-state": A ? "open" : "closed",
      }),
      action: (u) => {
        const d = (R) => {
          p.get() &&
            R.key === At.ESCAPE &&
            (b && (window.clearTimeout(b), (b = null)), v.set(!1));
        };
        return {
          destroy: ut(
            qe(u, "pointerdown", () => {
              i.get() &&
                (v.set(!1),
                (y = !0),
                b && (window.clearTimeout(b), (b = null)));
            }),
            qe(u, "pointerenter", (R) => {
              Hr(R) || S("pointer");
            }),
            qe(u, "pointerleave", (R) => {
              Hr(R) || (b && (window.clearTimeout(b), (b = null)));
            }),
            qe(u, "focus", () => {
              y || S("focus");
            }),
            qe(u, "blur", () => M(!0)),
            qe(u, "keydown", d),
            Je(document, "keydown", d)
          ),
        };
      },
    }),
    z = et(qn("content"), {
      stores: [N, v, c, _.content],
      returned: ([u, d, A, R]) =>
        Ga({
          role: "tooltip",
          hidden: u ? void 0 : !0,
          tabindex: -1,
          style: u ? void 0 : Mt({ display: "none" }),
          id: R,
          "data-portal": ho(A),
          "data-state": d ? "open" : "closed",
        }),
      action: (u) => {
        let d = Ne,
          A = Ne;
        const R = Rt([N, r, c], ([L, B, J]) => {
          A(), d();
          const re = x("trigger");
          !L ||
            !re ||
            an().then(() => {
              A(), d();
              const ae = rr(u, J);
              ae && (A = Cr(u, ae).destroy), (d = Mo(re, u, B).destroy);
            });
        });
        function D(L) {
          if (!v.get()) return;
          const B = L.target;
          if (!cn(B) && !Ba(B)) return;
          const J = x("trigger");
          J && B.contains(J) && M();
        }
        const V = ut(
          qe(u, "pointerenter", () => S("pointer")),
          qe(u, "pointerdown", () => S("pointer")),
          Je(window, "scroll", D, { capture: !0 })
        );
        return {
          destroy() {
            V(), A(), d(), R();
          },
        };
      },
    }),
    U = et(qn("arrow"), {
      stores: a,
      returned: (u) => ({
        "data-arrow": !0,
        style: Mt({
          position: "absolute",
          width: `var(--arrow-size, ${u}px)`,
          height: `var(--arrow-size, ${u}px)`,
        }),
      }),
    });
  let O = !1;
  return (
    Rt(v, (u) => {
      const d = h.get();
      if (d === void 0 || d === !1) return;
      if (!u) {
        wn.get(d) === v && wn.delete(d);
        return;
      }
      const A = wn.get(d);
      A == null || A.set(!1), wn.set(d, v);
    }),
    Rt([v, m], ([u, d]) => {
      if (!(!u || !_n))
        return ut(
          Je(document, "mousemove", (A) => {
            const R = x("content"),
              D = x("trigger");
            if (!R || !D) return;
            const V = f.get() ? [D] : [D, R],
              L = ai(V);
            (O = ii({ x: A.clientX, y: A.clientY }, L)),
              d === "pointer" && (O || M());
          })
        );
    }),
    {
      ids: _,
      elements: { trigger: T, content: z, arrow: U },
      states: { open: v },
      options: n,
    }
  );
}
function Fn(t, e) {
  const n = {};
  return (
    e.forEach((r) => {
      n[r] = { [`data-${t}-${r}`]: "" };
    }),
    (r) => n[r]
  );
}
function vn() {
  const t = Ta();
  return (e) => {
    const { originalEvent: n } = e.detail,
      { cancelable: r } = e,
      a = n.type;
    t(
      a,
      { originalEvent: n, currentTarget: n.currentTarget },
      { cancelable: r }
    ) || e.preventDefault();
  };
}
function kr(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function Or(t) {
  return function (e, n) {
    if (n === void 0) return;
    const r = t[e];
    r && r.set(n);
  };
}
function Vo(t) {
  return (e = {}) => Ws(t, e);
}
function Ws(t, e) {
  const r = {
    ...{
      side: "bottom",
      align: "center",
      sideOffset: 0,
      alignOffset: 0,
      sameWidth: !1,
      avoidCollisions: !0,
      collisionPadding: 8,
      fitViewport: !1,
      strategy: "absolute",
      overlap: !1,
    },
    ...e,
  };
  t.update((a) => ({
    ...a,
    placement: js(r.side, r.align),
    offset: { ...a.offset, mainAxis: r.sideOffset, crossAxis: r.alignOffset },
    gutter: 0,
    sameWidth: r.sameWidth,
    flip: r.avoidCollisions,
    overflowPadding: r.collisionPadding,
    boundary: r.collisionBoundary,
    fitViewport: r.fitViewport,
    strategy: r.strategy,
    overlap: r.overlap,
  }));
}
function js(t, e) {
  return e === "center" ? t : `${t}-${e}`;
}
function Ho() {
  return { NAME: "popover", PARTS: ["arrow", "close", "content", "trigger"] };
}
function Us(t) {
  const { NAME: e, PARTS: n } = Ho(),
    r = Fn(e, n),
    a = {
      ...zs({
        positioning: { placement: "bottom", gutter: 0 },
        ...kr(t),
        forceVisible: !0,
      }),
      getAttrs: r,
    };
  return vr(e, a), { ...a, updateOption: Or(a.options) };
}
function Nn() {
  const { NAME: t } = Ho();
  return pt(t);
}
function Gs(t = 8) {
  const e = Nn();
  return e.options.arrowSize.set(t), e;
}
function qs(t) {
  const n = { ...{ side: "bottom", align: "center" }, ...t },
    {
      options: { positioning: r },
    } = Nn();
  Vo(r)(n);
}
function Ys() {
  const t = "label",
    n = Fn(t, ["root"]);
  return { NAME: t, getAttrs: n };
}
var Ks = X("<label><!></label>");
function $s(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(c, "$root", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "el", 28, () => {});
  const {
      elements: { root: c },
    } = Rs(),
    p = vn(),
    { getAttrs: f } = Ys(),
    h = f("root");
  ne(
    () => i(),
    () => {
      Me(o, i());
    }
  ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), h);
      }
    ),
    ot(),
    Ve();
  var g = j(),
    v = I(g);
  {
    var m = (y) => {
        var x = j(),
          b = I(x);
        be(b, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(y, x);
      },
      _ = (y) => {
        var x = Ks();
        let b;
        var C = F(x);
        be(C, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          E(x),
          Be(
            x,
            (S) => l(S),
            () => l()
          ),
          De(x, (S) => {
            var M, N;
            return (N = (M = k(o)).action) == null ? void 0 : N.call(M, S);
          }),
          Ee(() => Te("m-mousedown", x, p)),
          le(() => (b = we(x, b, { ...k(o), ...r }))),
          w(y, x);
      };
    W(v, (y) => {
      s() ? y(m) : y(_, !1);
    });
  }
  w(t, g), Oe();
}
function Zo(t, e) {
  ke(e, !1);
  const n = We(),
    r = () => pe(y, "$idValues", n);
  let a = P(e, "disableFocusTrap", 24, () => {}),
    i = P(e, "closeOnEscape", 24, () => {}),
    o = P(e, "closeOnOutsideClick", 24, () => {}),
    s = P(e, "preventScroll", 24, () => {}),
    l = P(e, "portal", 24, () => {}),
    c = P(e, "open", 28, () => {}),
    p = P(e, "onOpenChange", 24, () => {}),
    f = P(e, "openFocus", 24, () => {}),
    h = P(e, "closeFocus", 24, () => {}),
    g = P(e, "onOutsideClick", 24, () => {});
  const {
      updateOption: v,
      states: { open: m },
      ids: _,
    } = Us({
      disableFocusTrap: a(),
      closeOnEscape: i(),
      closeOnOutsideClick: o(),
      preventScroll: s(),
      portal: l(),
      defaultOpen: c(),
      openFocus: f(),
      closeFocus: h(),
      onOutsideClick: g(),
      onOpenChange: ({ next: C }) => {
        var S;
        return c() !== C && ((S = p()) == null || S(C), c(C)), C;
      },
      positioning: { gutter: 0, offset: { mainAxis: 1 } },
    }),
    y = Yt([_.content, _.trigger], ([C, S]) => ({ content: C, trigger: S }));
  ne(
    () => ee(c()),
    () => {
      c() !== void 0 && m.set(c());
    }
  ),
    ne(
      () => ee(a()),
      () => {
        v("disableFocusTrap", a());
      }
    ),
    ne(
      () => ee(i()),
      () => {
        v("closeOnEscape", i());
      }
    ),
    ne(
      () => ee(o()),
      () => {
        v("closeOnOutsideClick", o());
      }
    ),
    ne(
      () => ee(s()),
      () => {
        v("preventScroll", s());
      }
    ),
    ne(
      () => ee(l()),
      () => {
        v("portal", l());
      }
    ),
    ne(
      () => ee(f()),
      () => {
        v("openFocus", f());
      }
    ),
    ne(
      () => ee(h()),
      () => {
        v("closeFocus", h());
      }
    ),
    ne(
      () => ee(g()),
      () => {
        v("onOutsideClick", g());
      }
    ),
    ot(),
    Ve();
  var x = j(),
    b = I(x);
  be(b, e, "default", {
    get ids() {
      return r();
    },
  }),
    w(t, x),
    Oe();
}
var Qs = X("<div></div>");
function Xs(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "el", "size"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(p, "$arrow", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "el", 28, () => {}),
    c = P(e, "size", 8, 8);
  const {
      elements: { arrow: p },
      getAttrs: f,
    } = Gs(c()),
    h = f("arrow");
  ne(
    () => i(),
    () => {
      Me(o, i());
    }
  ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), h);
      }
    ),
    ot(),
    Ve();
  var g = j(),
    v = I(g);
  {
    var m = (y) => {
        var x = j(),
          b = I(x);
        be(b, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(y, x);
      },
      _ = (y) => {
        var x = Qs();
        let b;
        Be(
          x,
          (C) => l(C),
          () => l()
        ),
          De(x, (C) => {
            var S, M;
            return (M = (S = k(o)).action) == null ? void 0 : M.call(S, C);
          }),
          le(() => (b = we(x, b, { ...k(o), ...r }))),
          w(y, x);
      };
    W(v, (y) => {
      s() ? y(m) : y(_, !1);
    });
  }
  w(t, g), Oe();
}
var Js = X("<div><!></div>"),
  el = X("<div><!></div>"),
  tl = X("<div><!></div>"),
  nl = X("<div><!></div>"),
  rl = X("<div><!></div>");
function Wo(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, [
      "transition",
      "transitionConfig",
      "inTransition",
      "inTransitionConfig",
      "outTransition",
      "outTransitionConfig",
      "asChild",
      "id",
      "side",
      "align",
      "sideOffset",
      "alignOffset",
      "collisionPadding",
      "avoidCollisions",
      "collisionBoundary",
      "sameWidth",
      "fitViewport",
      "strategy",
      "overlap",
      "el",
    ]);
  ke(e, !1);
  const a = We(),
    i = () => pe(u, "$content", a),
    o = () => pe(d, "$open", a),
    s = rt();
  let l = P(e, "transition", 24, () => {}),
    c = P(e, "transitionConfig", 24, () => {}),
    p = P(e, "inTransition", 24, () => {}),
    f = P(e, "inTransitionConfig", 24, () => {}),
    h = P(e, "outTransition", 24, () => {}),
    g = P(e, "outTransitionConfig", 24, () => {}),
    v = P(e, "asChild", 8, !1),
    m = P(e, "id", 24, () => {}),
    _ = P(e, "side", 8, "bottom"),
    y = P(e, "align", 8, "center"),
    x = P(e, "sideOffset", 8, 0),
    b = P(e, "alignOffset", 8, 0),
    C = P(e, "collisionPadding", 8, 8),
    S = P(e, "avoidCollisions", 8, !0),
    M = P(e, "collisionBoundary", 24, () => {}),
    N = P(e, "sameWidth", 8, !1),
    T = P(e, "fitViewport", 8, !1),
    z = P(e, "strategy", 8, "absolute"),
    U = P(e, "overlap", 8, !1),
    O = P(e, "el", 28, () => {});
  const {
      elements: { content: u },
      states: { open: d },
      ids: A,
      getAttrs: R,
    } = Nn(),
    D = R("content");
  ne(
    () => ee(m()),
    () => {
      m() && A.content.set(m());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(s, i());
      }
    ),
    ne(
      () => k(s),
      () => {
        Object.assign(k(s), D);
      }
    ),
    ne(
      () => (
        o(),
        ee(_()),
        ee(y()),
        ee(x()),
        ee(b()),
        ee(C()),
        ee(S()),
        ee(M()),
        ee(N()),
        ee(T()),
        ee(z()),
        ee(U())
      ),
      () => {
        o() &&
          qs({
            side: _(),
            align: y(),
            sideOffset: x(),
            alignOffset: b(),
            collisionPadding: C(),
            avoidCollisions: S(),
            collisionBoundary: M(),
            sameWidth: N(),
            fitViewport: T(),
            strategy: z(),
            overlap: U(),
          });
      }
    ),
    ot(),
    Ve();
  var V = j(),
    L = I(V);
  {
    var B = (re) => {
        var ae = j(),
          Z = I(ae);
        be(Z, e, "default", {
          get builder() {
            return k(s);
          },
        }),
          w(re, ae);
      },
      J = (re) => {
        var ae = j(),
          Z = I(ae);
        {
          var Y = (ue) => {
              var se = Js();
              let H;
              var Q = F(se);
              be(Q, e, "default", {
                get builder() {
                  return k(s);
                },
              }),
                E(se),
                Be(
                  se,
                  (Ye) => O(Ye),
                  () => O()
                ),
                De(se, (Ye) => {
                  var ze, ye;
                  return (ye = (ze = k(s)).action) == null
                    ? void 0
                    : ye.call(ze, Ye);
                }),
                le(() => (H = we(se, H, { ...k(s), ...r }))),
                at(3, se, l, c),
                w(ue, se);
            },
            Pe = (ue) => {
              var se = j(),
                H = I(se);
              {
                var Q = (ze) => {
                    var ye = el();
                    let Se;
                    var K = F(ye);
                    be(K, e, "default", {
                      get builder() {
                        return k(s);
                      },
                    }),
                      E(ye),
                      Be(
                        ye,
                        (me) => O(me),
                        () => O()
                      ),
                      De(ye, (me) => {
                        var fe, de;
                        return (de = (fe = k(s)).action) == null
                          ? void 0
                          : de.call(fe, me);
                      }),
                      le(() => (Se = we(ye, Se, { ...k(s), ...r }))),
                      at(1, ye, p, f),
                      at(2, ye, h, g),
                      w(ze, ye);
                  },
                  Ye = (ze) => {
                    var ye = j(),
                      Se = I(ye);
                    {
                      var K = (fe) => {
                          var de = tl();
                          let G;
                          var $ = F(de);
                          be($, e, "default", {
                            get builder() {
                              return k(s);
                            },
                          }),
                            E(de),
                            Be(
                              de,
                              (ve) => O(ve),
                              () => O()
                            ),
                            De(de, (ve) => {
                              var ge, oe;
                              return (oe = (ge = k(s)).action) == null
                                ? void 0
                                : oe.call(ge, ve);
                            }),
                            le(() => (G = we(de, G, { ...k(s), ...r }))),
                            at(1, de, p, f),
                            w(fe, de);
                        },
                        me = (fe) => {
                          var de = j(),
                            G = I(de);
                          {
                            var $ = (ge) => {
                                var oe = nl();
                                let ie;
                                var Ie = F(oe);
                                be(Ie, e, "default", {
                                  get builder() {
                                    return k(s);
                                  },
                                }),
                                  E(oe),
                                  Be(
                                    oe,
                                    (Fe) => O(Fe),
                                    () => O()
                                  ),
                                  De(oe, (Fe) => {
                                    var _e, Ae;
                                    return (Ae = (_e = k(s)).action) == null
                                      ? void 0
                                      : Ae.call(_e, Fe);
                                  }),
                                  le(
                                    () => (ie = we(oe, ie, { ...k(s), ...r }))
                                  ),
                                  at(2, oe, h, g),
                                  w(ge, oe);
                              },
                              ve = (ge) => {
                                var oe = j(),
                                  ie = I(oe);
                                {
                                  var Ie = (Fe) => {
                                    var _e = rl();
                                    let Ae;
                                    var Ge = F(_e);
                                    be(Ge, e, "default", {
                                      get builder() {
                                        return k(s);
                                      },
                                    }),
                                      E(_e),
                                      Be(
                                        _e,
                                        (Ce) => O(Ce),
                                        () => O()
                                      ),
                                      De(_e, (Ce) => {
                                        var xe, je;
                                        return (je = (xe = k(s)).action) == null
                                          ? void 0
                                          : je.call(xe, Ce);
                                      }),
                                      le(
                                        () =>
                                          (Ae = we(_e, Ae, { ...k(s), ...r }))
                                      ),
                                      w(Fe, _e);
                                  };
                                  W(
                                    ie,
                                    (Fe) => {
                                      o() && Fe(Ie);
                                    },
                                    !0
                                  );
                                }
                                w(ge, oe);
                              };
                            W(
                              G,
                              (ge) => {
                                h() && o() ? ge($) : ge(ve, !1);
                              },
                              !0
                            );
                          }
                          w(fe, de);
                        };
                      W(
                        Se,
                        (fe) => {
                          p() && o() ? fe(K) : fe(me, !1);
                        },
                        !0
                      );
                    }
                    w(ze, ye);
                  };
                W(
                  H,
                  (ze) => {
                    p() && h() && o() ? ze(Q) : ze(Ye, !1);
                  },
                  !0
                );
              }
              w(ue, se);
            };
          W(
            Z,
            (ue) => {
              l() && o() ? ue(Y) : ue(Pe, !1);
            },
            !0
          );
        }
        w(re, ae);
      };
    W(L, (re) => {
      v() && o() ? re(B) : re(J, !1);
    });
  }
  w(t, V), Oe();
}
var ol = X("<button><!></button>");
function jo(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "id", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(g, "$open", a),
    o = () => pe(h, "$trigger", a),
    s = rt(),
    l = rt();
  let c = P(e, "asChild", 8, !1),
    p = P(e, "id", 24, () => {}),
    f = P(e, "el", 28, () => {});
  const {
      elements: { trigger: h },
      states: { open: g },
      ids: v,
      getAttrs: m,
    } = Nn(),
    _ = vn(),
    y = m("trigger");
  ne(
    () => ee(p()),
    () => {
      p() && v.trigger.set(p());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(s, { ...y, "aria-controls": i() ? v.content : void 0 });
      }
    ),
    ne(
      () => o(),
      () => {
        Me(l, o());
      }
    ),
    ne(
      () => (k(l), k(s)),
      () => {
        Object.assign(k(l), k(s));
      }
    ),
    ot(),
    Ve();
  var x = j(),
    b = I(x);
  {
    var C = (M) => {
        var N = j(),
          T = I(N);
        be(T, e, "default", {
          get builder() {
            return k(l);
          },
        }),
          w(M, N);
      },
      S = (M) => {
        var N = ol();
        let T;
        var z = F(N);
        be(z, e, "default", {
          get builder() {
            return k(l);
          },
        }),
          E(N),
          Be(
            N,
            (U) => f(U),
            () => f()
          ),
          De(N, (U) => {
            var O, u;
            return (u = (O = k(l)).action) == null ? void 0 : u.call(O, U);
          }),
          Ee(() => Te("m-click", N, _)),
          Ee(() => Te("m-keydown", N, _)),
          le(() => (T = we(N, T, { ...k(l), type: "button", ...r }))),
          w(M, N);
      };
    W(b, (M) => {
      c() ? M(C) : M(S, !1);
    });
  }
  w(t, x), Oe();
}
function Uo() {
  return { NAME: "switch", PARTS: ["root", "input", "thumb"] };
}
function al(t) {
  const { NAME: e, PARTS: n } = Uo(),
    r = Fn(e, n),
    a = { ...Bs(kr(t)), getAttrs: r };
  return vr(e, a), { ...a, updateOption: Or(a.options) };
}
function Go() {
  const { NAME: t } = Uo();
  return pt(t);
}
var il = X("<input>");
function sl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(g, "$value", a),
    o = () => pe(h, "$input", a),
    s = () => pe(v, "$name", a),
    l = () => pe(m, "$disabled", a),
    c = () => pe(_, "$required", a),
    p = rt();
  let f = P(e, "el", 28, () => {});
  const {
    elements: { input: h },
    options: { value: g, name: v, disabled: m, required: _ },
  } = Go();
  ne(
    () => i(),
    () => {
      Me(p, i() === void 0 || i() === "" ? "on" : i());
    }
  ),
    ot(),
    Ve();
  var y = il();
  er(y);
  let x;
  Be(
    y,
    (b) => f(b),
    () => f()
  ),
    De(y, (b) => {
      var C, S;
      return (S = (C = o()).action) == null ? void 0 : S.call(C, b);
    }),
    le(
      () =>
        (x = we(y, x, {
          ...o(),
          name: s(),
          disabled: l(),
          required: c(),
          value: k(p),
          ...r,
        }))
    ),
    w(t, y),
    Oe();
}
var ll = X("<button><!></button>"),
  cl = X("<!> <!>", 1);
function dl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, [
      "checked",
      "onCheckedChange",
      "disabled",
      "name",
      "value",
      "includeInput",
      "required",
      "asChild",
      "inputAttrs",
      "el",
    ]);
  ke(e, !1);
  const a = We(),
    i = () => pe(x, "$root", a),
    o = rt(),
    s = rt();
  let l = P(e, "checked", 28, () => {}),
    c = P(e, "onCheckedChange", 24, () => {}),
    p = P(e, "disabled", 24, () => {}),
    f = P(e, "name", 24, () => {}),
    h = P(e, "value", 24, () => {}),
    g = P(e, "includeInput", 8, !0),
    v = P(e, "required", 24, () => {}),
    m = P(e, "asChild", 8, !1),
    _ = P(e, "inputAttrs", 24, () => {}),
    y = P(e, "el", 28, () => {});
  const {
      elements: { root: x },
      states: { checked: b },
      updateOption: C,
      getAttrs: S,
    } = al({
      disabled: p(),
      name: f(),
      value: h(),
      required: v(),
      defaultChecked: l(),
      onCheckedChange: ({ next: d }) => {
        var A;
        return l() !== d && ((A = c()) == null || A(d), l(d)), d;
      },
    }),
    M = vn();
  ne(
    () => ee(l()),
    () => {
      l() !== void 0 && b.set(l());
    }
  ),
    ne(
      () => ee(p()),
      () => {
        C("disabled", p());
      }
    ),
    ne(
      () => ee(f()),
      () => {
        C("name", f());
      }
    ),
    ne(
      () => ee(h()),
      () => {
        C("value", h());
      }
    ),
    ne(
      () => ee(v()),
      () => {
        C("required", v());
      }
    ),
    ne(
      () => i(),
      () => {
        Me(o, i());
      }
    ),
    ne(
      () => ee(l()),
      () => {
        Me(s, { ...S("root"), "data-checked": l() ? "" : void 0 });
      }
    ),
    ne(
      () => (k(o), k(s)),
      () => {
        Object.assign(k(o), k(s));
      }
    ),
    ot(),
    Ve();
  var N = cl(),
    T = I(N);
  {
    var z = (d) => {
        var A = j(),
          R = I(A);
        be(R, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(d, A);
      },
      U = (d) => {
        var A = ll();
        let R;
        var D = F(A);
        be(D, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          E(A),
          Be(
            A,
            (V) => y(V),
            () => y()
          ),
          De(A, (V) => {
            var L, B;
            return (B = (L = k(o)).action) == null ? void 0 : B.call(L, V);
          }),
          Ee(() => Te("m-click", A, M)),
          Ee(() => Te("m-keydown", A, M)),
          le(() => (R = we(A, R, { ...k(o), type: "button", ...r }))),
          w(d, A);
      };
    W(T, (d) => {
      m() ? d(z) : d(U, !1);
    });
  }
  var O = q(T, 2);
  {
    var u = (d) => {
      sl(d, vo(_));
    };
    W(O, (d) => {
      g() && d(u);
    });
  }
  w(t, N), Oe();
}
var ul = X("<span></span>");
function fl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(c, "$checked", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "el", 28, () => {});
  const {
    states: { checked: c },
    getAttrs: p,
  } = Go();
  ne(
    () => i(),
    () => {
      Me(o, {
        ...p("thumb"),
        "data-state": i() ? "checked" : "unchecked",
        "data-checked": i() ? "" : void 0,
      });
    }
  ),
    ot(),
    Ve();
  var f = j(),
    h = I(f);
  {
    var g = (m) => {
        var _ = j(),
          y = I(_);
        be(y, e, "default", {
          get attrs() {
            return k(o);
          },
          get checked() {
            return i();
          },
        }),
          w(m, _);
      },
      v = (m) => {
        var _ = ul();
        let y;
        Be(
          _,
          (x) => l(x),
          () => l()
        ),
          le(() => (y = we(_, y, { ...r, ...k(o) }))),
          w(m, _);
      };
    W(h, (m) => {
      s() ? m(g) : m(v, !1);
    });
  }
  w(t, f), Oe();
}
function qo() {
  return { NAME: "tooltip", PARTS: ["arrow", "content", "trigger"] };
}
function vl(t) {
  const { NAME: e, PARTS: n } = qo(),
    r = Fn(e, n),
    a = {
      ...Zs({
        positioning: { placement: "top", gutter: 0 },
        openDelay: 700,
        ...kr(t),
        forceVisible: !0,
      }),
      getAttrs: r,
    };
  return vr(e, a), { ...a, updateOption: Or(a.options) };
}
function zn() {
  const { NAME: t } = qo();
  return pt(t);
}
function gl(t = 8) {
  const e = zn();
  return e.options.arrowSize.set(t), e;
}
function pl(t) {
  const n = { ...{ side: "top", align: "center", sideOffset: 1 }, ...t },
    {
      options: { positioning: r },
    } = zn();
  Vo(r)({ ...n });
}
function sr(t, e) {
  ke(e, !1);
  const n = We(),
    r = () => pe(_, "$idValues", n);
  let a = P(e, "closeOnEscape", 24, () => {}),
    i = P(e, "portal", 24, () => {}),
    o = P(e, "closeOnPointerDown", 24, () => {}),
    s = P(e, "openDelay", 24, () => {}),
    l = P(e, "closeDelay", 24, () => {}),
    c = P(e, "open", 28, () => {}),
    p = P(e, "onOpenChange", 24, () => {}),
    f = P(e, "disableHoverableContent", 24, () => {}),
    h = P(e, "group", 24, () => {});
  const {
      states: { open: g },
      updateOption: v,
      ids: m,
    } = vl({
      closeOnEscape: a(),
      portal: i(),
      closeOnPointerDown: o(),
      openDelay: s(),
      closeDelay: l(),
      forceVisible: !0,
      defaultOpen: c(),
      disableHoverableContent: f(),
      group: h(),
      onOpenChange: ({ next: b }) => {
        var C;
        return c() !== b && ((C = p()) == null || C(b), c(b)), b;
      },
      positioning: { gutter: 0, offset: { mainAxis: 1 } },
    }),
    _ = Yt([m.content, m.trigger], ([b, C]) => ({ content: b, trigger: C }));
  ne(
    () => ee(c()),
    () => {
      c() !== void 0 && g.set(c());
    }
  ),
    ne(
      () => ee(a()),
      () => {
        v("closeOnEscape", a());
      }
    ),
    ne(
      () => ee(i()),
      () => {
        v("portal", i());
      }
    ),
    ne(
      () => ee(o()),
      () => {
        v("closeOnPointerDown", o());
      }
    ),
    ne(
      () => ee(s()),
      () => {
        v("openDelay", s());
      }
    ),
    ne(
      () => ee(l()),
      () => {
        v("closeDelay", l());
      }
    ),
    ne(
      () => ee(h()),
      () => {
        v("group", h());
      }
    ),
    ne(
      () => ee(f()),
      () => {
        v("disableHoverableContent", f());
      }
    ),
    ot(),
    Ve();
  var y = j(),
    x = I(y);
  be(x, e, "default", {
    get ids() {
      return r();
    },
  }),
    w(t, y),
    Oe();
}
var hl = X("<div><!></div>"),
  ml = X("<div><!></div>"),
  bl = X("<div><!></div>"),
  wl = X("<div><!></div>"),
  yl = X("<div><!></div>");
function lr(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, [
      "transition",
      "transitionConfig",
      "inTransition",
      "inTransitionConfig",
      "outTransition",
      "outTransitionConfig",
      "asChild",
      "id",
      "side",
      "align",
      "sideOffset",
      "alignOffset",
      "collisionPadding",
      "avoidCollisions",
      "collisionBoundary",
      "sameWidth",
      "fitViewport",
      "strategy",
      "overlap",
      "el",
    ]);
  ke(e, !1);
  const a = We(),
    i = () => pe(u, "$content", a),
    o = () => pe(d, "$open", a),
    s = rt();
  let l = P(e, "transition", 24, () => {}),
    c = P(e, "transitionConfig", 24, () => {}),
    p = P(e, "inTransition", 24, () => {}),
    f = P(e, "inTransitionConfig", 24, () => {}),
    h = P(e, "outTransition", 24, () => {}),
    g = P(e, "outTransitionConfig", 24, () => {}),
    v = P(e, "asChild", 8, !1),
    m = P(e, "id", 24, () => {}),
    _ = P(e, "side", 8, "top"),
    y = P(e, "align", 8, "center"),
    x = P(e, "sideOffset", 8, 0),
    b = P(e, "alignOffset", 8, 0),
    C = P(e, "collisionPadding", 8, 8),
    S = P(e, "avoidCollisions", 8, !0),
    M = P(e, "collisionBoundary", 24, () => {}),
    N = P(e, "sameWidth", 8, !1),
    T = P(e, "fitViewport", 8, !1),
    z = P(e, "strategy", 8, "absolute"),
    U = P(e, "overlap", 8, !1),
    O = P(e, "el", 28, () => {});
  const {
      elements: { content: u },
      states: { open: d },
      ids: A,
      getAttrs: R,
    } = zn(),
    D = vn(),
    V = R("content");
  ne(
    () => ee(m()),
    () => {
      m() && A.content.set(m());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(s, i());
      }
    ),
    ne(
      () => k(s),
      () => {
        Object.assign(k(s), V);
      }
    ),
    ne(
      () => (
        o(),
        ee(_()),
        ee(y()),
        ee(x()),
        ee(b()),
        ee(C()),
        ee(S()),
        ee(M()),
        ee(N()),
        ee(T()),
        ee(z()),
        ee(U())
      ),
      () => {
        o() &&
          pl({
            side: _(),
            align: y(),
            sideOffset: x(),
            alignOffset: b(),
            collisionPadding: C(),
            avoidCollisions: S(),
            collisionBoundary: M(),
            sameWidth: N(),
            fitViewport: T(),
            strategy: z(),
            overlap: U(),
          });
      }
    ),
    ot(),
    Ve();
  var L = j(),
    B = I(L);
  {
    var J = (ae) => {
        var Z = j(),
          Y = I(Z);
        be(Y, e, "default", {
          get builder() {
            return k(s);
          },
        }),
          w(ae, Z);
      },
      re = (ae) => {
        var Z = j(),
          Y = I(Z);
        {
          var Pe = (se) => {
              var H = hl();
              let Q;
              var Ye = F(H);
              be(Ye, e, "default", {
                get builder() {
                  return k(s);
                },
              }),
                E(H),
                Be(
                  H,
                  (ze) => O(ze),
                  () => O()
                ),
                De(H, (ze) => {
                  var ye, Se;
                  return (Se = (ye = k(s)).action) == null
                    ? void 0
                    : Se.call(ye, ze);
                }),
                Ee(() => Te("m-pointerdown", H, D)),
                Ee(() => Te("m-pointerenter", H, D)),
                le(() => (Q = we(H, Q, { ...k(s), ...r }))),
                at(3, H, l, c),
                w(se, H);
            },
            ue = (se) => {
              var H = j(),
                Q = I(H);
              {
                var Ye = (ye) => {
                    var Se = ml();
                    let K;
                    var me = F(Se);
                    be(me, e, "default", {
                      get builder() {
                        return k(s);
                      },
                    }),
                      E(Se),
                      Be(
                        Se,
                        (fe) => O(fe),
                        () => O()
                      ),
                      De(Se, (fe) => {
                        var de, G;
                        return (G = (de = k(s)).action) == null
                          ? void 0
                          : G.call(de, fe);
                      }),
                      Ee(() => Te("m-pointerdown", Se, D)),
                      Ee(() => Te("m-pointerenter", Se, D)),
                      le(() => (K = we(Se, K, { ...k(s), ...r }))),
                      at(1, Se, p, f),
                      at(2, Se, h, g),
                      w(ye, Se);
                  },
                  ze = (ye) => {
                    var Se = j(),
                      K = I(Se);
                    {
                      var me = (de) => {
                          var G = bl();
                          let $;
                          var ve = F(G);
                          be(ve, e, "default", {
                            get builder() {
                              return k(s);
                            },
                          }),
                            E(G),
                            Be(
                              G,
                              (ge) => O(ge),
                              () => O()
                            ),
                            De(G, (ge) => {
                              var oe, ie;
                              return (ie = (oe = k(s)).action) == null
                                ? void 0
                                : ie.call(oe, ge);
                            }),
                            Ee(() => Te("m-pointerdown", G, D)),
                            Ee(() => Te("m-pointerenter", G, D)),
                            le(() => ($ = we(G, $, { ...k(s), ...r }))),
                            at(1, G, p, f),
                            w(de, G);
                        },
                        fe = (de) => {
                          var G = j(),
                            $ = I(G);
                          {
                            var ve = (oe) => {
                                var ie = wl();
                                let Ie;
                                var Fe = F(ie);
                                be(Fe, e, "default", {
                                  get builder() {
                                    return k(s);
                                  },
                                }),
                                  E(ie),
                                  Be(
                                    ie,
                                    (_e) => O(_e),
                                    () => O()
                                  ),
                                  De(ie, (_e) => {
                                    var Ae, Ge;
                                    return (Ge = (Ae = k(s)).action) == null
                                      ? void 0
                                      : Ge.call(Ae, _e);
                                  }),
                                  Ee(() => Te("m-pointerdown", ie, D)),
                                  Ee(() => Te("m-pointerenter", ie, D)),
                                  le(
                                    () => (Ie = we(ie, Ie, { ...k(s), ...r }))
                                  ),
                                  at(2, ie, h, g),
                                  w(oe, ie);
                              },
                              ge = (oe) => {
                                var ie = j(),
                                  Ie = I(ie);
                                {
                                  var Fe = (_e) => {
                                    var Ae = yl();
                                    let Ge;
                                    var Ce = F(Ae);
                                    be(Ce, e, "default", {
                                      get builder() {
                                        return k(s);
                                      },
                                    }),
                                      E(Ae),
                                      Be(
                                        Ae,
                                        (xe) => O(xe),
                                        () => O()
                                      ),
                                      De(Ae, (xe) => {
                                        var je, Ke;
                                        return (Ke = (je = k(s)).action) == null
                                          ? void 0
                                          : Ke.call(je, xe);
                                      }),
                                      Ee(() => Te("m-pointerdown", Ae, D)),
                                      Ee(() => Te("m-pointerenter", Ae, D)),
                                      le(
                                        () =>
                                          (Ge = we(Ae, Ge, { ...k(s), ...r }))
                                      ),
                                      w(_e, Ae);
                                  };
                                  W(
                                    Ie,
                                    (_e) => {
                                      o() && _e(Fe);
                                    },
                                    !0
                                  );
                                }
                                w(oe, ie);
                              };
                            W(
                              $,
                              (oe) => {
                                h() && o() ? oe(ve) : oe(ge, !1);
                              },
                              !0
                            );
                          }
                          w(de, G);
                        };
                      W(
                        K,
                        (de) => {
                          p() && o() ? de(me) : de(fe, !1);
                        },
                        !0
                      );
                    }
                    w(ye, Se);
                  };
                W(
                  Q,
                  (ye) => {
                    p() && h() && o() ? ye(Ye) : ye(ze, !1);
                  },
                  !0
                );
              }
              w(se, H);
            };
          W(
            Y,
            (se) => {
              l() && o() ? se(Pe) : se(ue, !1);
            },
            !0
          );
        }
        w(ae, Z);
      };
    W(B, (ae) => {
      v() && o() ? ae(J) : ae(re, !1);
    });
  }
  w(t, L), Oe();
}
var xl = X("<button><!></button>");
function cr(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "id", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(p, "$trigger", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "id", 24, () => {}),
    c = P(e, "el", 28, () => {});
  const {
      elements: { trigger: p },
      ids: f,
      getAttrs: h,
    } = zn(),
    g = vn(),
    v = h("trigger");
  ne(
    () => ee(l()),
    () => {
      l() && f.trigger.set(l());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(o, i());
      }
    ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), v);
      }
    ),
    ot(),
    Ve();
  var m = j(),
    _ = I(m);
  {
    var y = (b) => {
        var C = j(),
          S = I(C);
        be(S, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(b, C);
      },
      x = (b) => {
        var C = xl();
        let S;
        var M = F(C);
        be(M, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          E(C),
          Be(
            C,
            (N) => c(N),
            () => c()
          ),
          De(C, (N) => {
            var T, z;
            return (z = (T = k(o)).action) == null ? void 0 : z.call(T, N);
          }),
          Ee(() => Te("m-blur", C, g)),
          Ee(() => Te("m-focus", C, g)),
          Ee(() => Te("m-keydown", C, g)),
          Ee(() => Te("m-pointerdown", C, g)),
          Ee(() => Te("m-pointerenter", C, g)),
          Ee(() => Te("m-pointerleave", C, g)),
          le(() => (S = we(C, S, { ...k(o), type: "button", ...r }))),
          w(b, C);
      };
    W(_, (b) => {
      s() ? b(y) : b(x, !1);
    });
  }
  w(t, m), Oe();
}
var _l = X("<div></div>");
function dr(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["size", "asChild", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(p, "$arrow", a),
    o = rt();
  let s = P(e, "size", 8, 8),
    l = P(e, "asChild", 8, !1),
    c = P(e, "el", 28, () => {});
  const {
      elements: { arrow: p },
      getAttrs: f,
    } = gl(s()),
    h = f("arrow");
  ne(
    () => i(),
    () => {
      Me(o, i());
    }
  ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), h);
      }
    ),
    ot(),
    Ve();
  var g = j(),
    v = I(g);
  {
    var m = (y) => {
        var x = j(),
          b = I(x);
        be(b, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(y, x);
      },
      _ = (y) => {
        var x = _l();
        let b;
        Be(
          x,
          (C) => c(C),
          () => c()
        ),
          De(x, (C) => {
            var S, M;
            return (M = (S = k(o)).action) == null ? void 0 : M.call(S, C);
          }),
          le(() => (b = we(x, b, { ...k(o), ...r }))),
          w(y, x);
      };
    W(v, (y) => {
      l() ? y(m) : y(_, !1);
    });
  }
  w(t, g), Oe();
}
var Al = (t, e, n) => Ue(qt, e() + k(n)),
  Cl = X(
    '<button class="touch-manipulation rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-green-400 active:bg-green-600 disabled:bg-neutral-600 disabled:text-neutral-400"> </button>'
  ),
  kl = X(
    '<p class="text-sm font-medium text-gray-200">Add money</p> <div class="flex gap-2"></div>',
    1
  ),
  Ol = X("<!> <!>", 1),
  Pl = X(
    '<div class="flex overflow-hidden rounded-md"><div class="flex gap-2 bg-slate-900 px-3 py-2 text-sm font-semibold tabular-nums text-white sm:text-base"><span class="select-none text-gray-500">$</span> <span class="min-w-16 text-right"> </span></div> <!></div>'
  );
function Sl(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(qt, "$balance", n);
  let a = Re(() =>
    r().toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
  const i = [100, 500, 1e3];
  var o = Pl(),
    s = F(o),
    l = q(F(s), 2),
    c = F(l, !0);
  E(l), E(s);
  var p = q(s, 2);
  He(
    p,
    () => Zo,
    (f, h) => {
      h(f, {
        children: (g, v) => {
          var m = Ol(),
            _ = I(m);
          He(
            _,
            () => jo,
            (x, b) => {
              b(x, {
                class:
                  "bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 active:bg-blue-700 sm:text-base",
                children: (C, S) => {
                  Ze();
                  var M = tt("Add");
                  w(C, M);
                },
                $$slots: { default: !0 },
              });
            }
          );
          var y = q(_, 2);
          He(
            y,
            () => Wo,
            (x, b) => {
              b(x, {
                transition: rn,
                sideOffset: 8,
                class: "z-30 max-w-lg space-y-2 rounded-md bg-slate-600 p-3",
                children: (C, S) => {
                  var M = kl(),
                    N = q(I(M), 2);
                  Ht(
                    N,
                    21,
                    () => i,
                    Zt,
                    (T, z) => {
                      var U = Cl();
                      U.__click = [Al, r, z];
                      var O = F(U);
                      E(U), le(() => dt(O, `+$${k(z) ?? ""}`)), w(T, U);
                    }
                  ),
                    E(N),
                    w(C, M);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            w(g, m);
        },
        $$slots: { default: !0 },
      });
    }
  ),
    E(o),
    le(() => dt(c, k(a))),
    w(t, o),
    Oe();
}
Mn(["click"]);
const Ln = ft(!1),
  En = ft(!1);
var Tl = te(
    '<path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"></path>'
  ),
  Ll = te(
    '<path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"></path><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"></path>',
    1
  ),
  El = te(
    '<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z"></path>'
  ),
  Ml = te(
    '<path d="M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z"></path>'
  ),
  Rl = te(
    '<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"></path>'
  ),
  Dl = te(
    '<path d="M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z"></path>'
  ),
  Fl = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Nl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Fl();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = Tl();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Ll();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = El();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Ml();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Rl();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = Dl();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var zl = te(
    '<path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0v85.55L88.1,95a12,12,0,0,1,15.1-.57l56.22,42.16L216.1,87A12,12,0,1,1,231.9,105l-64,56a12,12,0,0,1-15.1.57L96.58,119.44,44,165.45V196H224A12,12,0,0,1,236,208Z"></path>'
  ),
  Il = te(
    '<path d="M224,64V208H32V48H208A16,16,0,0,1,224,64Z" opacity="0.2"></path><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>',
    1
  ),
  Bl = te(
    '<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,176a8,8,0,0,1,0,16H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v62.92l34.88-29.07a8,8,0,0,1,9.56-.51l43,28.69,43.41-36.18a8,8,0,0,1,10.24,12.3l-48,40a8,8,0,0,1-9.56.51l-43-28.69L64,155.75V176Z"></path>'
  ),
  Vl = te(
    '<path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0v98.78l54.05-47.3a6,6,0,0,1,7.55-.28l60.11,45.08,60.34-52.8a6,6,0,0,1,7.9,9l-64,56a6,6,0,0,1-7.55.28L96.29,111.72,38,162.72V202H224A6,6,0,0,1,230,208Z"></path>'
  ),
  Hl = te(
    '<path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>'
  ),
  Zl = te(
    '<path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V151.19L93.37,101a4,4,0,0,1,5-.19l61.41,46.05L221.37,93a4,4,0,0,1,5.26,6l-64,56a4,4,0,0,1-5,.19l-61.41-46L36,161.81V204H224A4,4,0,0,1,228,208Z"></path>'
  ),
  Wl = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Yo(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Wl();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = zl();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Il();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = Bl();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Vl();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Hl();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = Zl();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var Yn = { dragStart: !0 },
  ro = (t, e, n) => Math.min(Math.max(t, e), n),
  Kn = (t) => typeof t == "string",
  jl = ([t, e], n, r) => {
    const a = (i, o) => (o === 0 ? 0 : Math.ceil(i / o) * o);
    return [a(n, t), a(r, e)];
  },
  oo = (t, e) => t.some((n) => e.some((r) => n.contains(r)));
function $n(t, e) {
  if (t === void 0) return;
  if (ur(t)) return t.getBoundingClientRect();
  if (typeof t == "object") {
    const { top: r = 0, left: a = 0, right: i = 0, bottom: o = 0 } = t;
    return {
      top: r,
      right: window.innerWidth - i,
      bottom: window.innerHeight - o,
      left: a,
    };
  }
  if (t === "parent") return e.parentNode.getBoundingClientRect();
  const n = document.querySelector(t);
  if (n === null)
    throw new Error(
      "The selector provided for bound doesn't exists in the document."
    );
  return n.getBoundingClientRect();
}
var yn = (t, e, n) => t.style.setProperty(e, n),
  ur = (t) => t instanceof HTMLElement,
  Qn = (t, e = {}) => {
    let n,
      r,
      {
        bounds: a,
        axis: i = "both",
        gpuAcceleration: o = !0,
        legacyTranslate: s = !0,
        transform: l,
        applyUserSelectHack: c = !0,
        disabled: p = !1,
        ignoreMultitouch: f = !1,
        recomputeBounds: h = Yn,
        grid: g,
        position: v,
        cancel: m,
        handle: _,
        defaultClass: y = "neodrag",
        defaultClassDragging: x = "neodrag-dragging",
        defaultClassDragged: b = "neodrag-dragged",
        defaultPosition: C = { x: 0, y: 0 },
        onDragStart: S,
        onDrag: M,
        onDragEnd: N,
      } = e,
      T = !1,
      z = 0,
      U = 0,
      O = 0,
      u = 0,
      d = 0,
      A = 0,
      { x: R, y: D } = v
        ? {
            x: (v == null ? void 0 : v.x) ?? 0,
            y: (v == null ? void 0 : v.y) ?? 0,
          }
        : C;
    se(R, D);
    let V,
      L,
      B,
      J,
      re,
      ae = "",
      Z = !!v;
    h = { ...Yn, ...h };
    let Y = new Set();
    const Pe = document.body.style,
      ue = t.classList;
    function se(K = z, me = U) {
      if (!l) {
        if (s) {
          let de = `${+K}px, ${+me}px`;
          return yn(
            t,
            "transform",
            o ? `translate3d(${de}, 0)` : `translate(${de})`
          );
        }
        return yn(t, "translate", `${+K}px ${+me}px ${o ? "1px" : ""}`);
      }
      const fe = l({ offsetX: K, offsetY: me, rootNode: t });
      Kn(fe) && yn(t, "transform", fe);
    }
    const H = (K, me) => {
        const fe = { offsetX: z, offsetY: U, rootNode: t, currentNode: re };
        t.dispatchEvent(new CustomEvent(K, { detail: fe })),
          me == null || me(fe);
      },
      Q = addEventListener;
    Q("pointerdown", ze, !1),
      Q("pointerup", ye, !1),
      Q("pointermove", Se, !1),
      yn(t, "touch-action", "none");
    const Ye = () => {
      let K = t.offsetWidth / L.width;
      return isNaN(K) && (K = 1), K;
    };
    function ze(K) {
      if (p || K.button === 2) return;
      if ((Y.add(K.pointerId), f && Y.size > 1)) return K.preventDefault();
      if ((h.dragStart && (V = $n(a, t)), Kn(_) && Kn(m) && _ === m))
        throw new Error("`handle` selector can't be same as `cancel` selector");
      if (
        (ue.add(y),
        (B = (function ($, ve) {
          if (!$) return [ve];
          if (ur($)) return [$];
          if (Array.isArray($)) return $;
          const ge = ve.querySelectorAll($);
          if (ge === null)
            throw new Error(
              "Selector passed for `handle` option should be child of the element on which the action is applied"
            );
          return Array.from(ge.values());
        })(_, t)),
        (J = (function ($, ve) {
          if (!$) return [];
          if (ur($)) return [$];
          if (Array.isArray($)) return $;
          const ge = ve.querySelectorAll($);
          if (ge === null)
            throw new Error(
              "Selector passed for `cancel` option should be child of the element on which the action is applied"
            );
          return Array.from(ge.values());
        })(m, t)),
        (n = /(both|x)/.test(i)),
        (r = /(both|y)/.test(i)),
        oo(J, B))
      )
        throw new Error(
          "Element being dragged can't be a child of the element on which `cancel` is applied"
        );
      const me = K.composedPath()[0];
      if (
        !B.some(($) => {
          var ve;
          return (
            $.contains(me) ||
            ((ve = $.shadowRoot) == null ? void 0 : ve.contains(me))
          );
        }) ||
        oo(J, [me])
      )
        return;
      (re = B.length === 1 ? t : B.find(($) => $.contains(me))),
        (T = !0),
        (L = t.getBoundingClientRect()),
        c && ((ae = Pe.userSelect), (Pe.userSelect = "none")),
        H("neodrag:start", S);
      const { clientX: fe, clientY: de } = K,
        G = Ye();
      n && (O = fe - R / G),
        r && (u = de - D / G),
        V && ((d = fe - L.left), (A = de - L.top));
    }
    function ye(K) {
      Y.delete(K.pointerId),
        T &&
          (h.dragEnd && (V = $n(a, t)),
          ue.remove(x),
          ue.add(b),
          c && (Pe.userSelect = ae),
          H("neodrag:end", N),
          n && (O = z),
          r && (u = U),
          (T = !1));
    }
    function Se(K) {
      if (!T || (f && Y.size > 1)) return;
      h.drag && (V = $n(a, t)),
        ue.add(x),
        K.preventDefault(),
        (L = t.getBoundingClientRect());
      let me = K.clientX,
        fe = K.clientY;
      const de = Ye();
      if (V) {
        const G = {
          left: V.left + d,
          top: V.top + A,
          right: V.right + d - L.width,
          bottom: V.bottom + A - L.height,
        };
        (me = ro(me, G.left, G.right)), (fe = ro(fe, G.top, G.bottom));
      }
      if (Array.isArray(g)) {
        let [G, $] = g;
        if (isNaN(+G) || G < 0)
          throw new Error(
            "1st argument of `grid` must be a valid positive number"
          );
        if (isNaN(+$) || $ < 0)
          throw new Error(
            "2nd argument of `grid` must be a valid positive number"
          );
        let ve = me - O,
          ge = fe - u;
        ([ve, ge] = jl([G / de, $ / de], ve, ge)), (me = O + ve), (fe = u + ge);
      }
      n && (z = Math.round((me - O) * de)),
        r && (U = Math.round((fe - u) * de)),
        (R = z),
        (D = U),
        H("neodrag", M),
        se();
    }
    return {
      destroy: () => {
        const K = removeEventListener;
        K("pointerdown", ze, !1),
          K("pointerup", ye, !1),
          K("pointermove", Se, !1);
      },
      update: (K) => {
        var fe, de;
        (i = K.axis || "both"),
          (p = K.disabled ?? !1),
          (f = K.ignoreMultitouch ?? !1),
          (_ = K.handle),
          (a = K.bounds),
          (h = K.recomputeBounds ?? Yn),
          (m = K.cancel),
          (c = K.applyUserSelectHack ?? !0),
          (g = K.grid),
          (o = K.gpuAcceleration ?? !0),
          (s = K.legacyTranslate ?? !0),
          (l = K.transform);
        const me = ue.contains(b);
        ue.remove(y, b),
          (y = K.defaultClass ?? "neodrag"),
          (x = K.defaultClassDragging ?? "neodrag-dragging"),
          (b = K.defaultClassDragged ?? "neodrag-dragged"),
          ue.add(y),
          me && ue.add(b),
          Z &&
            ((R = z = ((fe = K.position) == null ? void 0 : fe.x) ?? z),
            (D = U = ((de = K.position) == null ? void 0 : de.y) ?? U),
            se());
      },
    };
  },
  Ul = te(
    '<path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>'
  ),
  Gl = te(
    '<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>',
    1
  ),
  ql = te(
    '<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>'
  ),
  Yl = te(
    '<path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>'
  ),
  Kl = te(
    '<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>'
  ),
  $l = te(
    '<path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"></path>'
  ),
  Ql = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Xl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Ql();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = Ul();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Gl();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = ql();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Yl();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Kl();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = $l();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
function Jl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ec(
  t,
  {
    delay: e = 0,
    duration: n = 400,
    easing: r = Jl,
    start: a = 0,
    opacity: i = 0,
  } = {}
) {
  const o = getComputedStyle(t),
    s = +o.opacity,
    l = o.transform === "none" ? "" : o.transform,
    c = 1 - a,
    p = s * (1 - i);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (f, h) => `
			transform: ${l} scale(${1 - c * h});
			opacity: ${s - p * h}
		`,
  };
}
const Pr = "-";
function tc(t) {
  const e = rc(t),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = t;
  function a(o) {
    const s = o.split(Pr);
    return s[0] === "" && s.length !== 1 && s.shift(), Ko(s, e) || nc(o);
  }
  function i(o, s) {
    const l = n[o] || [];
    return s && r[o] ? [...l, ...r[o]] : l;
  }
  return { getClassGroupId: a, getConflictingClassGroupIds: i };
}
function Ko(t, e) {
  var o;
  if (t.length === 0) return e.classGroupId;
  const n = t[0],
    r = e.nextPart.get(n),
    a = r ? Ko(t.slice(1), r) : void 0;
  if (a) return a;
  if (e.validators.length === 0) return;
  const i = t.join(Pr);
  return (o = e.validators.find(({ validator: s }) => s(i))) == null
    ? void 0
    : o.classGroupId;
}
const ao = /^\[(.+)\]$/;
function nc(t) {
  if (ao.test(t)) {
    const e = ao.exec(t)[1],
      n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function rc(t) {
  const { theme: e, prefix: n } = t,
    r = { nextPart: new Map(), validators: [] };
  return (
    ac(Object.entries(t.classGroups), n).forEach(([i, o]) => {
      fr(o, r, i, e);
    }),
    r
  );
}
function fr(t, e, n, r) {
  t.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? e : io(e, a);
      i.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (oc(a)) {
        fr(a(r), e, n, r);
        return;
      }
      e.validators.push({ validator: a, classGroupId: n });
      return;
    }
    Object.entries(a).forEach(([i, o]) => {
      fr(o, io(e, i), n, r);
    });
  });
}
function io(t, e) {
  let n = t;
  return (
    e.split(Pr).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function oc(t) {
  return t.isThemeGetter;
}
function ac(t, e) {
  return e
    ? t.map(([n, r]) => {
        const a = r.map((i) =>
          typeof i == "string"
            ? e + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([o, s]) => [e + o, s]))
            : i
        );
        return [n, a];
      })
    : t;
}
function ic(t) {
  if (t < 1) return { get: () => {}, set: () => {} };
  let e = 0,
    n = new Map(),
    r = new Map();
  function a(i, o) {
    n.set(i, o), e++, e > t && ((e = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let o = n.get(i);
      if (o !== void 0) return o;
      if ((o = r.get(i)) !== void 0) return a(i, o), o;
    },
    set(i, o) {
      n.has(i) ? n.set(i, o) : a(i, o);
    },
  };
}
const $o = "!";
function sc(t) {
  const e = t.separator,
    n = e.length === 1,
    r = e[0],
    a = e.length;
  return function (o) {
    const s = [];
    let l = 0,
      c = 0,
      p;
    for (let m = 0; m < o.length; m++) {
      let _ = o[m];
      if (l === 0) {
        if (_ === r && (n || o.slice(m, m + a) === e)) {
          s.push(o.slice(c, m)), (c = m + a);
          continue;
        }
        if (_ === "/") {
          p = m;
          continue;
        }
      }
      _ === "[" ? l++ : _ === "]" && l--;
    }
    const f = s.length === 0 ? o : o.substring(c),
      h = f.startsWith($o),
      g = h ? f.substring(1) : f,
      v = p && p > c ? p - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: v,
    };
  };
}
function lc(t) {
  if (t.length <= 1) return t;
  const e = [];
  let n = [];
  return (
    t.forEach((r) => {
      r[0] === "[" ? (e.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    e.push(...n.sort()),
    e
  );
}
function cc(t) {
  return { cache: ic(t.cacheSize), splitModifiers: sc(t), ...tc(t) };
}
const dc = /\s+/;
function uc(t, e) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: a,
    } = e,
    i = new Set();
  return t
    .trim()
    .split(dc)
    .map((o) => {
      const {
        modifiers: s,
        hasImportantModifier: l,
        baseClassName: c,
        maybePostfixModifierPosition: p,
      } = n(o);
      let f = r(p ? c.substring(0, p) : c),
        h = !!p;
      if (!f) {
        if (!p) return { isTailwindClass: !1, originalClassName: o };
        if (((f = r(c)), !f))
          return { isTailwindClass: !1, originalClassName: o };
        h = !1;
      }
      const g = lc(s).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? g + $o : g,
        classGroupId: f,
        originalClassName: o,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((o) => {
      if (!o.isTailwindClass) return !0;
      const { modifierId: s, classGroupId: l, hasPostfixModifier: c } = o,
        p = s + l;
      return i.has(p)
        ? !1
        : (i.add(p), a(l, c).forEach((f) => i.add(s + f)), !0);
    })
    .reverse()
    .map((o) => o.originalClassName)
    .join(" ");
}
function fc() {
  let t = 0,
    e,
    n,
    r = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (n = Qo(e)) && (r && (r += " "), (r += n));
  return r;
}
function Qo(t) {
  if (typeof t == "string") return t;
  let e,
    n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = Qo(t[r])) && (n && (n += " "), (n += e));
  return n;
}
function vc(t, ...e) {
  let n,
    r,
    a,
    i = o;
  function o(l) {
    const c = e.reduce((p, f) => f(p), t());
    return (n = cc(c)), (r = n.cache.get), (a = n.cache.set), (i = s), s(l);
  }
  function s(l) {
    const c = r(l);
    if (c) return c;
    const p = uc(l, n);
    return a(l, p), p;
  }
  return function () {
    return i(fc.apply(null, arguments));
  };
}
function Le(t) {
  const e = (n) => n[t] || [];
  return (e.isThemeGetter = !0), e;
}
const Xo = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  gc = /^\d+\/\d+$/,
  pc = new Set(["px", "full", "screen"]),
  hc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  mc =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  bc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  wc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  yc =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function mt(t) {
  return Et(t) || pc.has(t) || gc.test(t);
}
function yt(t) {
  return Xt(t, "length", Sc);
}
function Et(t) {
  return !!t && !Number.isNaN(Number(t));
}
function xn(t) {
  return Xt(t, "number", Et);
}
function tn(t) {
  return !!t && Number.isInteger(Number(t));
}
function xc(t) {
  return t.endsWith("%") && Et(t.slice(0, -1));
}
function ce(t) {
  return Xo.test(t);
}
function xt(t) {
  return hc.test(t);
}
const _c = new Set(["length", "size", "percentage"]);
function Ac(t) {
  return Xt(t, _c, Jo);
}
function Cc(t) {
  return Xt(t, "position", Jo);
}
const kc = new Set(["image", "url"]);
function Oc(t) {
  return Xt(t, kc, Lc);
}
function Pc(t) {
  return Xt(t, "", Tc);
}
function nn() {
  return !0;
}
function Xt(t, e, n) {
  const r = Xo.exec(t);
  return r
    ? r[1]
      ? typeof e == "string"
        ? r[1] === e
        : e.has(r[1])
      : n(r[2])
    : !1;
}
function Sc(t) {
  return mc.test(t) && !bc.test(t);
}
function Jo() {
  return !1;
}
function Tc(t) {
  return wc.test(t);
}
function Lc(t) {
  return yc.test(t);
}
function Ec() {
  const t = Le("colors"),
    e = Le("spacing"),
    n = Le("blur"),
    r = Le("brightness"),
    a = Le("borderColor"),
    i = Le("borderRadius"),
    o = Le("borderSpacing"),
    s = Le("borderWidth"),
    l = Le("contrast"),
    c = Le("grayscale"),
    p = Le("hueRotate"),
    f = Le("invert"),
    h = Le("gap"),
    g = Le("gradientColorStops"),
    v = Le("gradientColorStopPositions"),
    m = Le("inset"),
    _ = Le("margin"),
    y = Le("opacity"),
    x = Le("padding"),
    b = Le("saturate"),
    C = Le("scale"),
    S = Le("sepia"),
    M = Le("skew"),
    N = Le("space"),
    T = Le("translate"),
    z = () => ["auto", "contain", "none"],
    U = () => ["auto", "hidden", "clip", "visible", "scroll"],
    O = () => ["auto", ce, e],
    u = () => [ce, e],
    d = () => ["", mt, yt],
    A = () => ["auto", Et, ce],
    R = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    D = () => ["solid", "dashed", "dotted", "double", "none"],
    V = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    L = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    B = () => ["", "0", ce],
    J = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    re = () => [Et, xn],
    ae = () => [Et, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [nn],
      spacing: [mt, yt],
      blur: ["none", "", xt, ce],
      brightness: re(),
      borderColor: [t],
      borderRadius: ["none", "", "full", xt, ce],
      borderSpacing: u(),
      borderWidth: d(),
      contrast: re(),
      grayscale: B(),
      hueRotate: ae(),
      invert: B(),
      gap: u(),
      gradientColorStops: [t],
      gradientColorStopPositions: [xc, yt],
      inset: O(),
      margin: O(),
      opacity: re(),
      padding: u(),
      saturate: re(),
      scale: re(),
      sepia: B(),
      skew: ae(),
      space: u(),
      translate: u(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", ce] }],
      container: ["container"],
      columns: [{ columns: [xt] }],
      "break-after": [{ "break-after": J() }],
      "break-before": [{ "break-before": J() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...R(), ce] }],
      overflow: [{ overflow: U() }],
      "overflow-x": [{ "overflow-x": U() }],
      "overflow-y": [{ "overflow-y": U() }],
      overscroll: [{ overscroll: z() }],
      "overscroll-x": [{ "overscroll-x": z() }],
      "overscroll-y": [{ "overscroll-y": z() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [m] }],
      "inset-x": [{ "inset-x": [m] }],
      "inset-y": [{ "inset-y": [m] }],
      start: [{ start: [m] }],
      end: [{ end: [m] }],
      top: [{ top: [m] }],
      right: [{ right: [m] }],
      bottom: [{ bottom: [m] }],
      left: [{ left: [m] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", tn, ce] }],
      basis: [{ basis: O() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", ce] }],
      grow: [{ grow: B() }],
      shrink: [{ shrink: B() }],
      order: [{ order: ["first", "last", "none", tn, ce] }],
      "grid-cols": [{ "grid-cols": [nn] }],
      "col-start-end": [{ col: ["auto", { span: ["full", tn, ce] }, ce] }],
      "col-start": [{ "col-start": A() }],
      "col-end": [{ "col-end": A() }],
      "grid-rows": [{ "grid-rows": [nn] }],
      "row-start-end": [{ row: ["auto", { span: [tn, ce] }, ce] }],
      "row-start": [{ "row-start": A() }],
      "row-end": [{ "row-end": A() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ce] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ce] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...L()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...L(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...L(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [_] }],
      mx: [{ mx: [_] }],
      my: [{ my: [_] }],
      ms: [{ ms: [_] }],
      me: [{ me: [_] }],
      mt: [{ mt: [_] }],
      mr: [{ mr: [_] }],
      mb: [{ mb: [_] }],
      ml: [{ ml: [_] }],
      "space-x": [{ "space-x": [N] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [N] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, e] }],
      "min-w": [{ "min-w": [ce, e, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            ce,
            e,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [xt] },
            xt,
          ],
        },
      ],
      h: [{ h: [ce, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [ce, e, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [ce, e, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [ce, e, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", xt, yt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            xn,
          ],
        },
      ],
      "font-family": [{ font: [nn] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            ce,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Et, xn] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            mt,
            ce,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", ce] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", ce] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [t] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [t] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...D(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", mt, yt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", mt, ce] }],
      "text-decoration-color": [{ decoration: [t] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: u() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            ce,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", ce] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...R(), Cc] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Ac] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Oc,
          ],
        },
      ],
      "bg-color": [{ bg: [t] }],
      "gradient-from-pos": [{ from: [v] }],
      "gradient-via-pos": [{ via: [v] }],
      "gradient-to-pos": [{ to: [v] }],
      "gradient-from": [{ from: [g] }],
      "gradient-via": [{ via: [g] }],
      "gradient-to": [{ to: [g] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [...D(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: D() }],
      "border-color": [{ border: [a] }],
      "border-color-x": [{ "border-x": [a] }],
      "border-color-y": [{ "border-y": [a] }],
      "border-color-t": [{ "border-t": [a] }],
      "border-color-r": [{ "border-r": [a] }],
      "border-color-b": [{ "border-b": [a] }],
      "border-color-l": [{ "border-l": [a] }],
      "divide-color": [{ divide: [a] }],
      "outline-style": [{ outline: ["", ...D()] }],
      "outline-offset": [{ "outline-offset": [mt, ce] }],
      "outline-w": [{ outline: [mt, yt] }],
      "outline-color": [{ outline: [t] }],
      "ring-w": [{ ring: d() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [t] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [mt, yt] }],
      "ring-offset-color": [{ "ring-offset": [t] }],
      shadow: [{ shadow: ["", "inner", "none", xt, Pc] }],
      "shadow-color": [{ shadow: [nn] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": V() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", xt, ce] }],
      grayscale: [{ grayscale: [c] }],
      "hue-rotate": [{ "hue-rotate": [p] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [b] }],
      sepia: [{ sepia: [S] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [b] }],
      "backdrop-sepia": [{ "backdrop-sepia": [S] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [o] }],
      "border-spacing-x": [{ "border-spacing-x": [o] }],
      "border-spacing-y": [{ "border-spacing-y": [o] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            ce,
          ],
        },
      ],
      duration: [{ duration: ae() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", ce] }],
      delay: [{ delay: ae() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ce] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [tn, ce] }],
      "translate-x": [{ "translate-x": [T] }],
      "translate-y": [{ "translate-y": [T] }],
      "skew-x": [{ "skew-x": [M] }],
      "skew-y": [{ "skew-y": [M] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            ce,
          ],
        },
      ],
      accent: [{ accent: ["auto", t] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            ce,
          ],
        },
      ],
      "caret-color": [{ caret: [t] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": u() }],
      "scroll-mx": [{ "scroll-mx": u() }],
      "scroll-my": [{ "scroll-my": u() }],
      "scroll-ms": [{ "scroll-ms": u() }],
      "scroll-me": [{ "scroll-me": u() }],
      "scroll-mt": [{ "scroll-mt": u() }],
      "scroll-mr": [{ "scroll-mr": u() }],
      "scroll-mb": [{ "scroll-mb": u() }],
      "scroll-ml": [{ "scroll-ml": u() }],
      "scroll-p": [{ "scroll-p": u() }],
      "scroll-px": [{ "scroll-px": u() }],
      "scroll-py": [{ "scroll-py": u() }],
      "scroll-ps": [{ "scroll-ps": u() }],
      "scroll-pe": [{ "scroll-pe": u() }],
      "scroll-pt": [{ "scroll-pt": u() }],
      "scroll-pr": [{ "scroll-pr": u() }],
      "scroll-pb": [{ "scroll-pb": u() }],
      "scroll-pl": [{ "scroll-pl": u() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", ce] },
      ],
      fill: [{ fill: [t, "none"] }],
      "stroke-w": [{ stroke: [mt, yt, xn] }],
      stroke: [{ stroke: [t, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const ct = vc(Ec);
var Mc = X(
  '<div><div class="flex"><div class="flex flex-1 cursor-move items-center gap-2 bg-slate-800 px-4 py-2"><!></div> <div class="ml-auto flex"><!> <button class="bg-slate-800 px-5 py-3 text-slate-300 transition hover:bg-red-600 hover:text-white active:bg-red-700 active:text-white"><!></button></div></div> <div class="p-4"><!></div></div>'
);
function ea(t, e) {
  ke(e, !0);
  let n = gr(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "title",
      "titleBarActions",
      "children",
      "onClose",
      "class",
    ]),
    r = It(void 0);
  var a = Mc();
  let i;
  var o = F(a),
    s = F(o),
    l = F(s);
  Zn(l, () => e.title ?? _t),
    E(s),
    Be(
      s,
      (m) => Me(r, m),
      () => k(r)
    );
  var c = q(s, 2),
    p = F(c);
  Zn(p, () => e.titleBarActions ?? _t);
  var f = q(p, 2);
  f.__click = function (...m) {
    var _;
    (_ = e.onClose) == null || _.apply(this, m);
  };
  var h = F(f);
  Xl(h, { weight: "bold" }), E(f), E(c), E(o);
  var g = q(o, 2),
    v = F(g);
  Zn(v, () => e.children ?? _t),
    E(g),
    E(a),
    De(
      a,
      (m, _) => (Qn == null ? void 0 : Qn(m, _)),
      () => ({ bounds: "body", handle: k(r) })
    ),
    le(
      () =>
        (i = we(a, i, {
          class: ct(
            "z-50 w-[15rem] overflow-hidden rounded-md bg-slate-600 drop-shadow-lg",
            e.class
          ),
          ...n,
        }))
    ),
    at(
      1,
      a,
      () => ec,
      () => ({ duration: 200 })
    ),
    w(t, a),
    Oe();
}
Mn(["click"]);
var Rc = X(
  '<div class="flex rounded-md bg-slate-900 p-4 text-sm"><div class="flex-1"><p class="font-medium text-slate-400">Profit</p> <p> </p></div> <div class="mx-4 w-0.5 bg-slate-600" aria-hidden="true"></div> <div class="flex-1 space-y-2"><div><p class="font-medium text-slate-400">Wins</p> <p class="font-semibold tabular-nums text-green-400"> </p></div> <div><p class="font-medium text-slate-400">Losses</p> <p class="font-semibold tabular-nums text-red-400"> </p></div></div></div>'
);
function Dc(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(uo, "$winRecords", n);
  let a = Re(() => r().reduce((S, { profit: M }) => S + M, 0)),
    i = Re(() => r().filter(({ profit: S }) => S >= 0).length),
    o = Re(() => r().filter(({ profit: S }) => S < 0).length),
    s = Re(() => k(i).toLocaleString("en-US")),
    l = Re(() => k(o).toLocaleString("en-US"));
  var c = Rc(),
    p = F(c),
    f = q(F(p), 2);
  const h = Re(() =>
    Bt(
      ct(
        "font-semibold tabular-nums",
        k(a) >= 0 ? "text-green-400" : "text-red-400"
      )
    )
  );
  var g = F(f, !0);
  le(() => dt(g, co(k(a)))), E(f), E(p);
  var v = q(p, 4),
    m = F(v),
    _ = q(F(m), 2),
    y = F(_, !0);
  E(_), E(m);
  var x = q(m, 2),
    b = q(F(x), 2),
    C = F(b, !0);
  E(b),
    E(x),
    E(v),
    E(c),
    le(() => {
      Vt(f, k(h), ""), dt(y, k(s)), dt(C, k(l));
    }),
    w(t, c),
    Oe();
}
var Fc = X(
  '<div class="relative rounded-md bg-slate-900 p-4 text-sm"><p class="font-medium text-slate-400">Profit History</p> <p> </p> <div class="mt-6 h-[11rem] w-[16rem]"><canvas></canvas></div></div>'
);
function Nc(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(fo, "$totalProfitHistory", n);
  let a = It(null);
  const i = "rgb(74, 222, 128)",
    o = "rgba(74, 222, 128, 0.3)",
    s = "rgb(248, 113, 113)",
    l = "rgba(248, 113, 113, 0.3)",
    c = "#1e293b",
    p = "#fff",
    f = (x, { profitHistory: b }) => {
      const C = new ba(x, {
        type: "line",
        data: {
          labels: Array(b.length).fill(0),
          datasets: [
            {
              label: "Profit",
              data: b,
              fill: { target: "origin", above: o, below: l },
              cubicInterpolationMode: "monotone",
              segment: {
                borderColor: (S) => {
                  const M = S.p0.parsed.y,
                    N = S.p1.parsed.y;
                  return N === 0 ? (M < 0 ? s : i) : N < 0 ? s : i;
                },
              },
              pointRadius: 0,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: p,
              pointHoverBorderColor: p,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          animations: { y: { duration: 0 } },
          interaction: { intersect: !1, mode: "index" },
          plugins: { legend: { display: !1 }, tooltip: { enabled: !1 } },
          scales: {
            x: {
              border: { display: !1 },
              grid: { display: !1 },
              ticks: { display: !1 },
            },
            y: {
              border: { display: !1 },
              grid: {
                color: (S) => (S.tick.value === 0 ? c : void 0),
                lineWidth: 2,
              },
              ticks: { display: !1 },
              grace: "1%",
            },
          },
          onHover: (S, M) => {
            if (M.length) {
              const N = M[0].index;
              Me(a, Qe(r()[N]));
            }
          },
        },
      });
      return {
        update: ({ profitHistory: S }) => {
          (C.data.labels = Array(S.length).fill(0)),
            (C.data.datasets[0].data = S),
            C.update();
        },
        destroy: () => {
          C.destroy();
        },
      };
    };
  var h = Fc(),
    g = q(F(h), 2);
  const v = Re(() =>
    Bt(
      ct(
        "absolute font-semibold tabular-nums",
        k(a) !== null && (k(a) >= 0 ? "text-green-400" : "text-red-400")
      )
    )
  );
  var m = F(g, !0);
  le(() => dt(m, k(a) !== null ? co(k(a)) : "")), E(g);
  var _ = q(g, 2),
    y = F(_);
  De(
    y,
    (x, b) => (f == null ? void 0 : f(x, b)),
    () => ({ profitHistory: r() })
  ),
    E(_),
    E(h),
    le(() => Vt(g, k(v), "")),
    Te("mouseleave", y, () => Me(a, null)),
    w(t, h),
    Oe();
}
var zc = X('<!> <p class="text-sm font-medium text-white">Live Stats</p>', 1),
  Ic = X("<button><!></button>"),
  Bc = X("<!> <p>Reset Live Stats</p>", 1),
  Vc = X("<!> <!>", 1),
  Hc = X('<div class="flex flex-col gap-4"><!> <!></div>');
function Zc(t) {
  const e = We(),
    n = () => pe(En, "$isLiveStatsOpen", e);
  function r() {
    Ue(uo, []), Ue(fo, [0]);
  }
  var a = j(),
    i = I(a);
  {
    var o = (s) => {
      ea(s, {
        onClose: () => Ue(En, !1),
        class: "fixed bottom-8 right-8 w-[20rem]",
        title: (p) => {
          var f = zc(),
            h = I(f);
          Yo(h, { weight: "bold", class: "text-xl text-slate-300" }),
            Ze(2),
            w(p, f);
        },
        titleBarActions: (p) => {
          sr(p, {
            openDelay: 0,
            closeOnPointerDown: !1,
            children: (f, h) => {
              var g = Vc(),
                v = I(g);
              cr(v, {
                asChild: !0,
                children: Jn,
                $$slots: {
                  default: (_, y) => {
                    const x = ha(() => y.builder);
                    var b = Ic();
                    let C;
                    var S = F(b);
                    Nl(S, { weight: "bold" }),
                      E(b),
                      De(b, (M) => {
                        var N, T;
                        return (T = (N = k(x)).action) == null
                          ? void 0
                          : T.call(N, M);
                      }),
                      Ee(() => Te("click", b, r)),
                      le(
                        () =>
                          (C = we(b, C, {
                            ...k(x),
                            class:
                              "bg-slate-800 px-5 py-3 text-slate-300 transition hover:bg-slate-700 active:bg-slate-600",
                          }))
                      ),
                      w(_, b);
                  },
                },
              });
              var m = q(v, 2);
              lr(m, {
                transition: rn,
                sideOffset: 4,
                class:
                  "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                children: (_, y) => {
                  var x = Bc(),
                    b = I(x);
                  dr(b, {}), Ze(2), w(_, x);
                },
                $$slots: { default: !0 },
              }),
                w(f, g);
            },
            $$slots: { default: !0 },
          });
        },
        children: (p, f) => {
          var h = Hc(),
            g = F(h);
          Dc(g, {});
          var v = q(g, 2);
          Nc(v, {}), E(h), w(p, h);
        },
        $$slots: { title: !0, titleBarActions: !0, default: !0 },
      });
    };
    W(i, (s) => {
      n() && s(o);
    });
  }
  w(t, a);
}
function Wc() {
  const t = "(prefers-reduced-motion: reduce)";
  return window && window.matchMedia ? window.matchMedia(t).matches : !1;
}
var jc = te(
    '<path d="M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"></path>'
  ),
  Uc = te(
    '<path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>',
    1
  ),
  Gc = te(
    '<path d="M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>'
  ),
  qc = te(
    '<path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"></path>'
  ),
  Yc = te(
    '<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>'
  ),
  Kc = te(
    '<path d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"></path>'
  ),
  $c = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function ta(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = $c();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = jc();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Uc();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = Gc();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = qc();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Yc();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = Kc();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var Qc = te(
    '<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>'
  ),
  Xc = te(
    '<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>',
    1
  ),
  Jc = te(
    '<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>'
  ),
  ed = te(
    '<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>'
  ),
  td = te(
    '<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>'
  ),
  nd = te(
    '<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>'
  ),
  rd = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function od(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = rd();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = Qc();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Xc();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = Jc();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = ed();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = td();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = nd();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var ad = X("<option> </option>"),
  id = X('<div class="relative"><select></select> <!></div>');
function so(t, e) {
  let n = P(e, "value", 15),
    r = gr(e, ["$$slots", "$$events", "$$legacy", "value", "items"]);
  var a = id(),
    i = F(a);
  let o;
  Ht(
    i,
    21,
    () => e.items,
    Zt,
    (c, p) => {
      let f = () => k(p).value,
        h = () => k(p).label;
      var g = ad(),
        v = {},
        m = F(g, !0);
      E(g),
        le(() => {
          v !== (v = f()) && (g.value = (g.__value = f()) == null ? "" : f()),
            dt(m, h());
        }),
        w(c, g);
    }
  ),
    E(i);
  var l = q(i, 2);
  od(l, { class: "absolute right-3 top-3 text-slate-500", weight: "bold" }),
    E(a),
    le(
      () =>
        (o = we(i, o, {
          class:
            "block w-full appearance-none rounded-md border-2 border-slate-600 bg-slate-900 py-2 pl-3 pr-8 text-sm text-white transition hover:cursor-pointer focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not(:disabled)]:border-slate-500",
          ...r,
        }))
    ),
    wa(i, n),
    w(t, a);
}
function sd(t, e) {
  ke(e, !0);
  let n = P(e, "checked", 15, void 0),
    r = gr(e, ["$$slots", "$$events", "$$legacy", "checked", "class"]);
  var a = j(),
    i = I(a),
    o = Re(() =>
      ct(
        "h-6 w-11 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-slate-900",
        e.class
      )
    );
  He(
    i,
    () => dl,
    (s, l) => {
      l(
        s,
        vo(
          {
            get class() {
              return k(o);
            },
          },
          () => r,
          {
            get checked() {
              return n();
            },
            set checked(c) {
              n(c);
            },
            children: (c, p) => {
              var f = j(),
                h = I(f);
              He(
                h,
                () => fl,
                (g, v) => {
                  v(g, {
                    class:
                      "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
                  });
                }
              ),
                w(c, f);
            },
            $$slots: { default: !0 },
          }
        )
      );
    }
  ),
    w(t, a),
    Oe();
}
var ld = X(
    '<!> <p class="text-sm font-medium text-white">Game Settings</p>',
    1
  ),
  cd = (t, e) => Ue(qt, Qe(ya)),
  dd = X(
    '<div class="flex flex-col gap-5"><div class="flex items-center gap-4"><!> <!></div> <button class="touch-manipulation self-start rounded-md bg-red-500 px-3 py-2 text-sm text-white transition-colors hover:bg-red-400 active:bg-red-600">Reset Balance</button></div>'
  );
function ud(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(Vn, "$isAnimationOn", n),
    a = () => pe(Ln, "$isGameSettingsOpen", n),
    i = () => pe(qt, "$balance", n);
  lo(() => {
    Wc() && Ue(Vn, !1);
  });
  var o = j(),
    s = I(o);
  {
    var l = (c) => {
      ea(c, {
        onClose: () => Ue(Ln, !1),
        class: "fixed bottom-8 left-8 w-[18rem]",
        title: (f) => {
          var h = ld(),
            g = I(h);
          ta(g, { weight: "fill", class: "text-xl text-slate-300" }),
            Ze(2),
            w(f, h);
        },
        children: (f, h) => {
          var g = dd(),
            v = F(g),
            m = F(v);
          sd(m, {
            id: "isAnimationOn",
            get checked() {
              return tr(), r();
            },
            set checked(x) {
              Ue(Vn, Qe(x));
            },
          });
          var _ = q(m, 2);
          He(
            _,
            () => $s,
            (x, b) => {
              b(x, {
                for: "isAnimationOn",
                class: "text-sm  text-white",
                children: (C, S) => {
                  Ze();
                  var M = tt("Animations");
                  w(C, M);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            E(v);
          var y = q(v, 2);
          (y.__click = [cd, i]), E(g), w(f, g);
        },
        $$slots: { title: !0, default: !0 },
      });
    };
    W(s, (c) => {
      a() && c(l);
    });
  }
  w(t, o), Oe();
}
Mn(["click"]);
var fd = te(
    '<path d="M252,128a60,60,0,0,1-102.43,42.43l-.49-.53L89.22,102.31a36,36,0,1,0,0,51.38l3.08-3.48a12,12,0,1,1,18,15.91l-3.35,3.78-.49.53a60,60,0,1,1,0-84.86l.49.53,59.86,67.59a36,36,0,1,0,0-51.38l-3.08,3.48a12,12,0,1,1-18-15.91l3.35-3.78.49-.53A60,60,0,0,1,252,128Z"></path>'
  ),
  vd = te(
    '<path d="M225.94,161.94a48,48,0,0,1-67.88,0L128,128l30.06-33.94a48,48,0,0,1,67.88,67.88ZM30.06,94.06a48,48,0,0,0,67.88,67.88L128,128,97.94,94.06A48,48,0,0,0,30.06,94.06Z" opacity="0.2"></path><path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z"></path>',
    1
  ),
  gd = te(
    '<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM204.28,156.28a40,40,0,0,1-56.4.17L97.29,111.34,97,111A24,24,0,1,0,97,145c.36-.36.71-.73,1-1.1a8,8,0,1,1,12,10.6c-.55.62-1.13,1.23-1.71,1.81a40,40,0,1,1-.17-56.73l50.58,45.11.33.31A24,24,0,1,0,159,111c-.36.36-.7.72-1,1.1a8,8,0,0,1-12-10.59c.54-.62,1.12-1.24,1.71-1.82a40,40,0,0,1,56.57,56.56Z"></path>'
  ),
  pd = te(
    '<path d="M246,128a54,54,0,0,1-92.18,38.18,3.07,3.07,0,0,1-.25-.26l-60-67.74a42,42,0,1,0,0,59.64l8.57-9.67a6,6,0,1,1,9,8l-8.69,9.81a3.07,3.07,0,0,1-.25.26,54,54,0,1,1,0-76.36,3.07,3.07,0,0,1,.25.26l60,67.74a42,42,0,1,0,0-59.64l-8.57,9.67a6,6,0,1,1-9-8l8.69-9.81a3.07,3.07,0,0,1,.25-.26A54,54,0,0,1,246,128Z"></path>'
  ),
  hd = te(
    '<path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z"></path>'
  ),
  md = te(
    '<path d="M244,128a52,52,0,0,1-88.77,36.77l-.17-.18L95,96.8a44,44,0,1,0,0,62.4l8.6-9.72a4,4,0,0,1,6,5.3l-8.68,9.81-.17.18a52,52,0,1,1,0-73.54l.17.18,60,67.79a44,44,0,1,0,0-62.4l-8.6,9.72a4,4,0,0,1-6-5.3l8.68-9.81.17-.18A52,52,0,0,1,244,128Z"></path>'
  ),
  bd = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function wd(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = bd();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = fd();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = vd();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = gd();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = pd();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = hd();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = md();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var yd = te(
    '<path d="M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z"></path>'
  ),
  xd = te(
    '<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>',
    1
  ),
  _d = te(
    '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"></path>'
  ),
  Ad = te(
    '<path d="M138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180ZM128,74c-21,0-38,15.25-38,34v4a6,6,0,0,0,12,0v-4c0-12.13,11.66-22,26-22s26,9.87,26,22-11.66,22-26,22a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-2.42c18.11-2.58,32-16.66,32-33.58C166,89.25,149,74,128,74Zm102,54A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"></path>'
  ),
  Cd = te(
    '<path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>'
  ),
  kd = te(
    '<path d="M136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180ZM128,76c-19.85,0-36,14.36-36,32v4a4,4,0,0,0,8,0v-4c0-13.23,12.56-24,28-24s28,10.77,28,24-12.56,24-28,24a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-4.2c18-1.77,32-15.36,32-31.8C164,90.36,147.85,76,128,76Zm100,52A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"></path>'
  ),
  Od = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Pd(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Od();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = yd();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = xd();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = _d();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Ad();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Cd();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = kd();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
const Sd = (t, e) => {
    const n = parseFloat(t.currentTarget.value.trim());
    isNaN(n) ? (Ue(Wt, -1), Ue(Wt, 0)) : Ue(Wt, Qe(n));
  },
  Td = (t, e) => {
    const n = parseInt(t.currentTarget.value.trim());
    isNaN(n) ? (Me(e, -1), Me(e, 0)) : Me(e, Qe(n));
  };
function Ld(t, e, n, r, a, i, o, s) {
  var l;
  k(e) === zt.MANUAL
    ? (l = n()) == null || l.dropBall()
    : k(r) === null
    ? (Me(a, Qe(k(i) === 0 ? null : k(i))), Me(r, Qe(setInterval(o, _a))))
    : k(r) !== null && s();
}
var Ed = (t, e, n) => Me(e, Qe(n())),
  Md = X("<button> </button>"),
  Rd = (t, e) => {
    Ue(Wt, Qe(parseFloat((e() / 2).toFixed(2))));
  },
  Dd = (t, e) => {
    Ue(Wt, Qe(parseFloat((e() * 2).toFixed(2))));
  },
  Fd = X(
    '<p class="absolute text-xs leading-5 text-red-400">This must be greater than or equal to 0.</p>'
  ),
  Nd = X(
    `<p class="absolute text-xs leading-5 text-red-400">Can't bet more than your balance!</p>`
  ),
  zd = X("<p>Enter '0' for unlimited bets.</p> <!>", 1),
  Id = X("<!> <!>", 1),
  Bd = X(
    '<p class="text-xs leading-5 text-red-400">This must be greater than or equal to 0.</p>'
  ),
  Vd = X(
    '<div><div class="flex items-center gap-1"><label for="autoBetInput" class="text-sm font-medium text-slate-300">Number of Bets</label> <!></div> <div class="relative"><input id="autoBetInput" type="number" min="0" inputmode="numeric"> <!></div> <!></div>'
  ),
  Hd = X("<button><!></button>"),
  Zd = X("<!> <p> </p>", 1),
  Wd = X("<!> <!>", 1),
  jd = X("<button><!></button>"),
  Ud = X("<!> <p> </p>", 1),
  Gd = X("<!> <!>", 1),
  qd = X(
    `<div class="flex flex-col gap-5 bg-slate-700 p-3 lg:max-w-80"><div class="flex gap-1 rounded-full bg-slate-900 p-1"></div> <div class="relative"><label for="betAmount" class="text-sm font-medium text-slate-300">Bet Amount</label> <div class="flex"><div class="relative flex-1"><input id="betAmount" type="number" min="0" step="0.01" inputmode="decimal"> <div class="absolute left-3 top-2 select-none text-slate-500" aria-hidden="true">$</div></div> <button class="touch-manipulation bg-slate-600 px-4 font-bold diagonal-fractions text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:[&amp;:not(:disabled)]:bg-slate-500 active:[&amp;:not(:disabled)]:bg-slate-400">1/2</button> <button class="relative touch-manipulation rounded-r-md bg-slate-600 px-4 text-sm font-bold text-white transition-colors after:absolute after:left-0 after:inline-block after:h-1/2 after:w-[2px] after:bg-slate-800 after:content-[''] disabled:cursor-not-allowed disabled:opacity-50 hover:[&amp;:not(:disabled)]:bg-slate-500 active:[&amp;:not(:disabled)]:bg-slate-400">2×</button></div> <!></div> <div><label for="riskLevel" class="text-sm font-medium text-slate-300">Risk</label> <!></div> <div><label for="rowCount" class="text-sm font-medium text-slate-300">Rows</label> <!></div> <!> <button><!></button> <div class="mt-auto pt-5"><div class="flex items-center gap-4 border-t border-slate-600 pt-3"><!> <!></div></div></div>`
  );
function Yd(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(Wt, "$betAmount", n),
    a = () => pe(qt, "$balance", n),
    i = () => pe(Aa, "$plinkoEngine", n),
    o = () => pe(Ca, "$betAmountOfExistingBalls", n),
    s = () => pe(Fr, "$riskLevel", n),
    l = () => pe(Nr, "$rowCount", n),
    c = () => pe(Ln, "$isGameSettingsOpen", n),
    p = () => pe(En, "$isLiveStatsOpen", n);
  let f = It(Qe(zt.MANUAL)),
    h = It(0),
    g = It(null),
    v = It(null),
    m = Re(() => r() < 0),
    _ = Re(() => r() > a()),
    y = Re(() => k(h) < 0),
    x = Re(() => i() === null || k(m) || k(_) || k(y)),
    b = Re(() => Object.keys(o()).length > 0);
  function C() {
    k(v) !== null && (clearInterval(k(v)), Me(v, null));
  }
  function S() {
    var G, $;
    if (k(_)) {
      C();
      return;
    }
    if (k(g) === null) {
      (G = i()) == null || G.dropBall();
      return;
    }
    if (
      (k(g) > 0 && (($ = i()) == null || $.dropBall(), Me(g, k(g) - 1)),
      k(g) === 0 && k(v) !== null)
    ) {
      C();
      return;
    }
  }
  const M = [
      { value: zt.MANUAL, label: "Manual" },
      { value: zt.AUTO, label: "Auto" },
    ],
    N = [
      { value: Hn.LOW, label: "Low" },
      { value: Hn.MEDIUM, label: "Medium" },
      { value: Hn.HIGH, label: "High" },
    ],
    T = xa.map((G) => ({ value: G, label: G.toString() }));
  var z = qd(),
    U = F(z);
  Ht(
    U,
    21,
    () => M,
    Zt,
    (G, $) => {
      let ve = () => k($).value,
        ge = () => k($).label;
      var oe = Md();
      oe.__click = [Ed, f, ve];
      const ie = Re(() =>
        Bt(
          ct(
            "flex-1 rounded-full py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not(:disabled)]:bg-slate-600 active:[&:not(:disabled)]:bg-slate-500",
            k(f) === ve() && "bg-slate-600"
          )
        )
      );
      var Ie = F(oe, !0);
      E(oe),
        le(() => {
          (oe.disabled = k(v) !== null), Vt(oe, k(ie), ""), dt(Ie, ge());
        }),
        w(G, oe);
    }
  ),
    E(U);
  var O = q(U, 2),
    u = q(F(O), 2),
    d = F(u),
    A = F(d);
  er(A), (A.__focusout = [Sd, r]);
  const R = Re(() =>
    Bt(
      ct(
        "w-full rounded-l-md border-2 border-slate-600 bg-slate-900 py-2 pl-7 pr-2 text-sm text-white transition-colors hover:cursor-pointer focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed  disabled:opacity-50 hover:[&:not(:disabled)]:border-slate-500",
        (k(m) || k(_)) &&
          "border-red-500 focus:border-red-400 hover:[&:not(:disabled)]:border-red-400"
      )
    )
  );
  Ze(2), E(d);
  var D = q(d, 2);
  D.__click = [Rd, r];
  var V = q(D, 2);
  (V.__click = [Dd, r]), E(u);
  var L = q(u, 2);
  {
    var B = (G) => {
        var $ = Fd();
        w(G, $);
      },
      J = (G) => {
        var $ = j(),
          ve = I($);
        {
          var ge = (oe) => {
            var ie = Nd();
            w(oe, ie);
          };
          W(
            ve,
            (oe) => {
              k(_) && oe(ge);
            },
            !0
          );
        }
        w(G, $);
      };
    W(L, (G) => {
      k(m) ? G(B) : G(J, !1);
    });
  }
  E(O);
  var re = q(O, 2),
    ae = q(F(re), 2),
    Z = Re(() => k(b) || k(v) !== null);
  so(ae, {
    id: "riskLevel",
    items: N,
    get disabled() {
      return k(Z);
    },
    get value() {
      return tr(), s();
    },
    set value(G) {
      Ue(Fr, Qe(G));
    },
  }),
    E(re);
  var Y = q(re, 2),
    Pe = q(F(Y), 2),
    ue = Re(() => k(b) || k(v) !== null);
  so(Pe, {
    id: "rowCount",
    items: T,
    get disabled() {
      return k(ue);
    },
    get value() {
      return tr(), l();
    },
    set value(G) {
      Ue(Nr, Qe(G));
    },
  }),
    E(Y);
  var se = q(Y, 2);
  {
    var H = (G) => {
      var $ = Vd(),
        ve = F($),
        ge = q(F(ve), 2);
      He(
        ge,
        () => Zo,
        (Ce, xe) => {
          xe(Ce, {
            children: (je, Ke) => {
              var st = Id(),
                lt = I(st);
              He(
                lt,
                () => jo,
                (ht, In) => {
                  In(ht, {
                    class: "p-1",
                    children: (Bn, na) => {
                      Pd(Bn, { class: "text-slate-300", weight: "bold" });
                    },
                    $$slots: { default: !0 },
                  });
                }
              );
              var St = q(lt, 2);
              He(
                St,
                () => Wo,
                (ht, In) => {
                  In(ht, {
                    transition: rn,
                    class:
                      "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                    children: (Bn, na) => {
                      var Sr = zd(),
                        ra = q(I(Sr), 2);
                      He(
                        ra,
                        () => Xs,
                        (oa, aa) => {
                          aa(oa, {});
                        }
                      ),
                        w(Bn, Sr);
                    },
                    $$slots: { default: !0 },
                  });
                }
              ),
                w(je, st);
            },
            $$slots: { default: !0 },
          });
        }
      ),
        E(ve);
      var oe = q(ve, 2),
        ie = F(oe);
      er(ie), (ie.__focusout = [Td, h]);
      const Ie = Re(() =>
        Bt(
          ct(
            "w-full rounded-md border-2 border-slate-600 bg-slate-900 py-2 pl-3 pr-8 text-sm text-white transition-colors hover:cursor-pointer focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not(:disabled)]:border-slate-500",
            k(y) && "border-red-500 hover:border-red-400 focus:border-red-400"
          )
        )
      );
      var Fe = q(ie, 2);
      {
        var _e = (Ce) => {
          wd(Ce, {
            class: "absolute right-3 top-3 size-4 text-slate-400",
            weight: "bold",
          });
        };
        W(Fe, (Ce) => {
          k(h) === 0 && Ce(_e);
        });
      }
      E(oe);
      var Ae = q(oe, 2);
      {
        var Ge = (Ce) => {
          var xe = Bd();
          w(Ce, xe);
        };
        W(Ae, (Ce) => {
          k(y) && Ce(Ge);
        });
      }
      E($),
        le(() => {
          Rr(ie, k(v) === null ? k(h) : k(g) ?? 0),
            (ie.disabled = k(v) !== null),
            Vt(ie, k(Ie), "");
        }),
        w(G, $);
    };
    W(se, (G) => {
      k(f) === zt.AUTO && G(H);
    });
  }
  var Q = q(se, 2);
  Q.__click = [Ld, f, i, v, g, h, S, C];
  const Ye = Re(() =>
    Bt(
      ct(
        "touch-manipulation rounded-md bg-green-500 py-3 font-semibold text-slate-900 transition-colors hover:bg-green-400 active:bg-green-600 disabled:bg-neutral-600 disabled:text-neutral-400",
        k(v) !== null &&
          "bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600"
      )
    )
  );
  var ze = F(Q);
  {
    var ye = (G) => {
        var $ = tt("Drop Ball");
        w(G, $);
      },
      Se = (G) => {
        var $ = j(),
          ve = I($);
        {
          var ge = (ie) => {
              var Ie = tt("Start Autobet");
              w(ie, Ie);
            },
            oe = (ie) => {
              var Ie = tt("Stop Autobet");
              w(ie, Ie);
            };
          W(
            ve,
            (ie) => {
              k(v) === null ? ie(ge) : ie(oe, !1);
            },
            !0
          );
        }
        w(G, $);
      };
    W(ze, (G) => {
      k(f) === zt.MANUAL ? G(ye) : G(Se, !1);
    });
  }
  E(Q);
  var K = q(Q, 2),
    me = F(K),
    fe = F(me);
  He(
    fe,
    () => sr,
    (G, $) => {
      $(G, {
        openDelay: 0,
        closeOnPointerDown: !1,
        children: (ve, ge) => {
          var oe = Wd(),
            ie = I(oe);
          He(
            ie,
            () => cr,
            (Fe, _e) => {
              _e(Fe, {
                asChild: !0,
                children: Jn,
                $$slots: {
                  default: (Ae, Ge) => {
                    const Ce = Re(() => Ge.builder);
                    var xe = Hd(),
                      je = () => Ue(Ln, !c());
                    let Ke;
                    var st = F(xe);
                    ta(st, { class: "size-6", weight: "fill" }),
                      E(xe),
                      De(xe, (lt) => {
                        var St, ht;
                        return (ht = (St = k(Ce)).action) == null
                          ? void 0
                          : ht.call(St, lt);
                      }),
                      le(
                        () =>
                          (Ke = we(xe, Ke, {
                            ...k(Ce),
                            onclick: je,
                            class: ct(
                              "rounded-full p-2 text-slate-300 transition hover:bg-slate-600 active:bg-slate-500",
                              c() && "text-slate-100"
                            ),
                          }))
                      ),
                      w(Ae, xe);
                  },
                },
              });
            }
          );
          var Ie = q(ie, 2);
          He(
            Ie,
            () => lr,
            (Fe, _e) => {
              _e(Fe, {
                inTransition: rn,
                sideOffset: 4,
                class:
                  "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                children: (Ae, Ge) => {
                  var Ce = Zd(),
                    xe = I(Ce);
                  He(
                    xe,
                    () => dr,
                    (st, lt) => {
                      lt(st, {});
                    }
                  );
                  var je = q(xe, 2),
                    Ke = F(je);
                  E(je),
                    le(() =>
                      dt(Ke, `${(c() ? "Close" : "Open") ?? ""} Game Settings`)
                    ),
                    w(Ae, Ce);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            w(ve, oe);
        },
        $$slots: { default: !0 },
      });
    }
  );
  var de = q(fe, 2);
  He(
    de,
    () => sr,
    (G, $) => {
      $(G, {
        openDelay: 0,
        closeOnPointerDown: !1,
        children: (ve, ge) => {
          var oe = Gd(),
            ie = I(oe);
          He(
            ie,
            () => cr,
            (Fe, _e) => {
              _e(Fe, {
                asChild: !0,
                children: Jn,
                $$slots: {
                  default: (Ae, Ge) => {
                    const Ce = Re(() => Ge.builder);
                    var xe = jd(),
                      je = () => Ue(En, !p());
                    let Ke;
                    var st = F(xe);
                    Yo(st, { class: "size-6", weight: "bold" }),
                      E(xe),
                      De(xe, (lt) => {
                        var St, ht;
                        return (ht = (St = k(Ce)).action) == null
                          ? void 0
                          : ht.call(St, lt);
                      }),
                      le(
                        () =>
                          (Ke = we(xe, Ke, {
                            ...k(Ce),
                            onclick: je,
                            class: ct(
                              "rounded-full p-2 text-slate-300 transition hover:bg-slate-600 active:bg-slate-500",
                              p() && "text-slate-100"
                            ),
                          }))
                      ),
                      w(Ae, xe);
                  },
                },
              });
            }
          );
          var Ie = q(ie, 2);
          He(
            Ie,
            () => lr,
            (Fe, _e) => {
              _e(Fe, {
                transition: rn,
                sideOffset: 4,
                class:
                  "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                children: (Ae, Ge) => {
                  var Ce = Ud(),
                    xe = I(Ce);
                  He(
                    xe,
                    () => dr,
                    (st, lt) => {
                      lt(st, {});
                    }
                  );
                  var je = q(xe, 2),
                    Ke = F(je);
                  E(je),
                    le(() =>
                      dt(Ke, `${(p() ? "Close" : "Open") ?? ""} Live Stats`)
                    ),
                    w(Ae, Ce);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            w(ve, oe);
        },
        $$slots: { default: !0 },
      });
    }
  ),
    E(me),
    E(K),
    E(z),
    le(() => {
      Rr(A, r()),
        (A.disabled = k(v) !== null),
        Vt(A, k(R), ""),
        (D.disabled = k(v) !== null),
        (V.disabled = k(v) !== null),
        (Q.disabled = k(x)),
        Vt(Q, k(Ye), "");
    }),
    w(t, z),
    Oe();
}
Mn(["click", "focusout"]);
const Kd =
    "data:image/webp;base64,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",
  $d =
    "data:image/webp;base64,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",
  Qd =
    "data:image/webp;base64,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",
  Xn =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.05746%202.77487C7.01779%201.05279%207.49757%200.19175%208.21536%200.19175C8.93314%200.19175%209.41293%201.05279%2010.3733%202.77487L10.6219%203.22054C10.8947%203.71018%2011.0312%203.955%2011.2434%204.11645C11.4556%204.27789%2011.7209%204.33777%2012.2515%204.45753L12.7335%204.56668C14.5981%204.98886%2015.5296%205.19957%2015.7517%205.91281C15.973%206.62529%2015.3379%207.36884%2014.0668%208.85519L13.7378%209.23948C13.377%209.66166%2013.1959%209.87313%2013.1148%2010.1339C13.0337%2010.3954%2013.061%2010.6773%2013.1155%2011.2405L13.1656%2011.7536C13.3573%2013.7372%2013.4536%2014.7286%2012.873%2015.169C12.2924%2015.6101%2011.4192%2015.2076%209.67443%2014.4042L9.22193%2014.1965C8.72622%2013.9676%208.47837%2013.8539%208.21536%2013.8539C7.95235%2013.8539%207.7045%2013.9676%207.20803%2014.1965L6.75705%2014.4042C5.01148%2015.2076%204.13831%2015.6093%203.55847%2015.1697C2.97712%2014.7286%203.07338%2013.7372%203.26514%2011.7536L3.31517%2011.2412C3.36974%2010.6773%203.39703%2010.3954%203.31517%2010.1346C3.23483%209.87313%203.05367%209.66166%202.69289%209.24024L2.36393%208.85519C1.09284%207.3696%200.457673%206.62604%200.678996%205.91281C0.901077%205.19957%201.83336%204.9881%203.69794%204.56668L4.18%204.45753C4.70981%204.33777%204.97434%204.27789%205.18732%204.11645C5.39955%203.955%205.53598%203.71018%205.80885%203.22054L6.05746%202.77487Z'%20fill='%23E9C711'/%3e%3c/svg%3e";
var Xd = X('<div class="showcase__rating-item"><img alt="rating"></div>'),
  Jd = X('<div class="showcase__rating-item"><img alt="rating"></div>'),
  eu = X('<div class="showcase__rating-item"><img alt="rating"></div>'),
  tu = X(
    '<div class="showcase__wrapper"><div class="showcase"><div class="showcase__link"><div class="showcase__item"><div class="showcase__img"><img alt="Casobet"></div> <div class="showcase__title"><span>Casobet</span></div></div> <div class="showcase__item showcase__item-right"><div class="showcase__rating"></div> <div class="showcase__btn">Toneelstuk</div></div></div></div> <div class="showcase"><div class="showcase__link"><div class="showcase__item"><div class="showcase__img"><img alt="Betzino"></div> <div class="showcase__title"><span>Betzino</span></div></div> <div class="showcase__item showcase__item-right"><div class="showcase__rating"></div> <div class="showcase__btn">Toneelstuk</div></div></div></div> <div class="showcase"><div class="showcase__link"><div class="showcase__item"><div class="showcase__img"><img alt="Qbet"></div> <div class="showcase__title"><span>Qbet</span></div></div> <div class="showcase__item showcase__item-right"><div class="showcase__rating"></div> <div class="showcase__btn">Toneelstuk</div></div></div></div></div>'
  );
function nu(t) {
  var e = tu(),
    n = F(e),
    r = F(n),
    a = F(r),
    i = F(a),
    o = F(i);
  Tt(o, "src", Kd), E(i), Ze(2), E(a);
  var s = q(a, 2),
    l = F(s);
  Ht(
    l,
    4,
    () => Array(5),
    Zt,
    (U, O) => {
      var u = Xd(),
        d = F(u);
      Tt(d, "src", Xn), E(u), w(U, u);
    }
  ),
    E(l);
  var c = q(l, 2);
  E(s), E(r), E(n);
  var p = q(n, 2),
    f = F(p),
    h = F(f),
    g = F(h),
    v = F(g);
  Tt(v, "src", $d), E(g), Ze(2), E(h);
  var m = q(h, 2),
    _ = F(m);
  Ht(
    _,
    4,
    () => Array(5),
    Zt,
    (U, O) => {
      var u = Jd(),
        d = F(u);
      Tt(d, "src", Xn), E(u), w(U, u);
    }
  ),
    E(_);
  var y = q(_, 2);
  E(m), E(f), E(p);
  var x = q(p, 2),
    b = F(x),
    C = F(b),
    S = F(C),
    M = F(S);
  Tt(M, "src", Qd), E(S), Ze(2), E(C);
  var N = q(C, 2),
    T = F(N);
  Ht(
    T,
    4,
    () => Array(5),
    Zt,
    (U, O) => {
      var u = eu(),
        d = F(u);
      Tt(d, "src", Xn), E(u), w(U, u);
    }
  ),
    E(T);
  var z = q(T, 2);
  E(N),
    E(b),
    E(x),
    E(e),
    Te(
      "click",
      c,
      () => (window.location.href = "https://applogic.top/5TRb1N")
    ),
    Te(
      "click",
      y,
      () => (window.location.href = "https://applogic.top/5TRb1N")
    ),
    Te(
      "click",
      z,
      () => (window.location.href = "https://applogic.top/5TRb1N")
    ),
    w(t, e);
}
function ru() {
  const t = window.localStorage.getItem(ka.BALANCE),
    e = parseFloat(t ?? "");
  isNaN(e) || qt.set(e);
}
var ou = X(
  `<div class="relative flex min-h-dvh w-full flex-col bg-gray-900 text-gray-100"><nav class="sticky top-0 z-10 w-full bg-gray-800 px-5 py-3 drop-shadow-md"><div class="relative mx-auto flex h-14 max-w-7xl items-center"><img alt="logo" class="h-6 sm:h-7"> <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><!></div></div></nav> <main class="flex-1"><div class="mx-auto w-full max-w-7xl px-5"><section id="plinko-demo" class="section demo px-5 svelte-1yx83eg"><div class="mx-auto mt-5 min-w-[300px] max-w-xl drop-shadow-xl md:mt-10 lg:max-w-7xl"><div class="flex flex-col-reverse overflow-hidden rounded-lg lg:w-full lg:flex-row"><!> <div class="flex-1"><!></div></div></div></section> <section class="section showcase mx-auto px-5 mt-8 min-w-[300px] max-w-xl md:mt-10 lg:max-w-7xl svelte-1yx83eg"><!></section> <section class="prose prose-invert section description mx-auto w-full max-w-7xl svelte-1yx83eg">
<section class="prose prose-invert section description mx-auto w-full max-w-7xl svelte-1yx83eg">
<h1 id="intro">Plinko Casino: Highlights and Playing Guidelines</h1>
<p>Explore the thrilling world of Plinko today! Simply sign up on the official site, secure your starter bonus, and find detailed solutions to your queries in the guide below.</p>
<h2 id="quick-info">Essential Game Details</h2>
<table>
<thead>
<tr>
<th>Aspect</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>🎮 Game Genre</td>
<td>Chance, Slot-style</td>
</tr>
<tr>
<td>💻 Supported Devices</td>
<td>Stake, Roobet, and various digital casinos</td>
</tr>
<tr>
<td>⚙️ Gameplay</td>
<td>Unpredictable chip drop across a peg field</td>
</tr>
<tr>
<td>🎯 Aim</td>
<td>Chip ricochets on pins and lands in a reward section</td>
</tr>
<tr>
<td>💵 Wagers</td>
<td>Traditional money and cryptocurrencies</td>
</tr>
<tr>
<td>🎲 Risk Options</td>
<td>Minimal, Medium, High</td>
</tr>
<tr>
<td>🆓 Practice Demo</td>
<td>Offered on most casino sites</td>
</tr>
<tr>
<td>🔑 Highlights</td>
<td>Quick registration, several variants, generous promos</td>
</tr>
</tbody>
</table>
<h2 id="how-to-start">How to Begin Plinko</h2>
<ol>
<li>
<strong>Pick Your Stake:</strong> Choose your chip value before playing — it affects your potential return.
      </li>
<li>
<strong>Select Risk Tier:</strong> Choose Minimal, Medium, or High risk — this changes reward rates and volatility.
      </li>
<li>
<strong>Release the Chip:</strong> Click the "Start" button to launch the chip; watch as it tumbles on pegs.
      </li>
<li>
<strong>Claim Earnings:</strong> When the chip lands, your win is multiplied by the slot's value.
      </li>
</ol>
<h2 id="general-info">Overview of Online Plinko</h2>
<ul>
<li>
<strong>Chance &amp; Planning:</strong> Chip paths are random, but choosing risk level adds a layer of tactics.
      </li>
<li>
<strong>Varied Designs:</strong> Boards and slots may differ by provider; some feature cool graphics or bonus mini-games.
      </li>
<li>
<strong>Crypto-Friendly:</strong> Bitcoin, Ethereum, and other coins let you deposit and cash out instantly.
      </li>
<li>
<strong>Trusted Randomness:</strong> Regulated casinos feature verified RNGs for honest play.
      </li>
<li>
<strong>Regulation:</strong> Always play on certified platforms to maintain safe entertainment.
      </li>
</ul>
<h2 id="reviews">Player Opinions</h2>
<ul>
<li>Great mix of risk and potential reward.</li>
<li>Opportunities to score big in one try.</li>
<li>Simple controls for beginners and pros alike.</li>
</ul>
<h2 id="strategies">Hints and Tactics</h2>
<ul>
<li>
<strong>Consistent Betting:</strong> Place steady bets to moderate your losses.
      </li>
<li>
<strong>Martingale System:</strong> Double your stake after each loss, start over after a win; fits big bankrolls.
      </li>
<li>
<strong>Paroli (Anti-Martingale):</strong> Increase the wager following a win, reduce it after a loss to maximize winning streaks.
      </li>
<li>
<strong>Try Demo Play:</strong> Play risk-free to explore strategies and risk levels.
      </li>
<li>
<strong>Manage Your Money:</strong> Define your win/loss caps to avoid overspending.
      </li>
</ul>
<h2 id="versions">Unique Types of Plinko</h2>
<ul>
<li>
<strong>Plinko Slot Variant:</strong> Blends Plinko rules with slots, adds special features and bonus rounds.
      </li>
<li>
<strong>Cryptocurrency Plinko:</strong> Private play with fast payments using blockchain technology and extra crypto incentives.
      </li>
<li>
<strong>Developer Options:</strong> BGaming includes lively visuals, Spribe brings interactive features and exclusive bonuses.
      </li>
</ul>
<h2 id="getting-started">Getting Started Steps</h2>
<ol>
<li>Pick a site by verifying the license, user comments, and payment methods.</li>
<li>Sign up and verify your account if needed.</li>
<li>Decide between free and real wager modes.</li>
<li>Add money with a credit/debit card, online wallet, or crypto.</li>
<li>Adjust your chip value and risk level.</li>
<li>Let the chip fall and enjoy your session!</li>
</ol>
<h2 id="recommendations">Top Suggestions</h2>
<ul>
<li>Stay mindful of your playtime and spending habits.</li>
<li>Check out deals — welcome offers and free plays can extend your gaming binge.</li>
<li>Scan user reviews before settling on a casino.</li>
</ul>
<h2 id="real-money">Playing Plinko for Cash</h2>
<p>Playing with real stakes adds a layer of excitement:</p>
<ul>
<li>Payouts vary depending on your stake, risk choice, and the slot's multiplier.</li>
<li>Extra plays and bonuses can offer more opportunities to win.</li>
<li>Always pick approved casinos for safe play.</li>
</ul>
<h2 id="demo-mode">Demo Play</h2>
<p>Use demo mode to:</p>
<ul>
<li>Grasp how the chip moves and reacts.</li>
<li>Observe differences in returns with various risk options.</li>
<li>Experiment with tactics without risking your money.</li>
</ul>
<h2 id="faq">Common Questions</h2>
<div id="faq-items">
<h3>1. What is Plinko Casino?</h3>
<p>A betting game where a chip drops down a pin grid and wins are decided by where it stops.</p>
<h3>2. Is it allowed?</h3>
<p>Legality relies on your region and the gaming site's credentials. Always review your local statutes before joining.</p>
<h3>3. Can I win real prizes?</h3>
<p>Absolutely, with a combination of chance and smart money handling.</p>
<h3>4. Should I use crypto?</h3>
<p>Cryptocurrency enables private, fast payments but does require some basic blockchain understanding. </p>
<h3>5. Any strategies I should know?</h3>
<p>Though outcomes are random, picking your risk tier and managing wagers can help limit losses. </p>
</div>
</section>
</section> <!></div>`
);
function mu(t, e) {
  ke(e, !0),
    lo(() => {
      ru();
    });
  var n = ou(),
    r = F(n),
    a = F(r),
    i = F(a);
  Tt(i, "src", Fa);
  var o = q(i, 2),
    s = F(o);
  Sl(s, {}), E(o), E(a), E(r);
  var l = q(r, 2),
    c = F(l),
    p = F(c),
    f = F(p),
    h = F(f),
    g = F(h);
  Yd(g, {});
  var v = q(g, 2),
    m = F(v);
  Oa(m, {}), E(v), E(h), E(f), E(p);
  var _ = q(p, 2),
    y = F(_);
  nu(y), E(_), Ze(2), E(c), E(l);
  var x = q(l, 2);
  ud(x, {});
  var b = q(x, 2);
  Zc(b), Ze(2), E(n), w(t, n), Oe();
}
export { mu as component };
