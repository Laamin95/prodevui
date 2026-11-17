import { computed as i, ref as M, watch as ye, shallowRef as Nt, triggerRef as xt, readonly as Rt, reactive as tt, inject as pe, createElementBlock as a, openBlock as r, normalizeClass as v, createCommentVNode as y, createElementVNode as g, renderSlot as D, createBlock as Q, unref as q, toDisplayString as V, createTextVNode as ve, Fragment as ae, renderList as ue, withModifiers as ee, createVNode as G, Transition as ke, withCtx as te, provide as Ge, toRef as et, resolveComponent as be, normalizeStyle as de, onMounted as Ve, onBeforeUnmount as Be, withDirectives as Ie, vShow as je, defineComponent as Te, useSlots as nt, nextTick as Pe, Teleport as Je, withKeys as he, vModelText as pt, resolveDynamicComponent as Ne, createSlots as Fe, onUpdated as Ht, isRef as wt, createStaticVNode as Ut, mergeProps as xe, getCurrentInstance as Ft, toHandlers as vt, useAttrs as qt, defineAsyncComponent as ut, normalizeProps as Wt, guardReactiveProps as Kt } from "vue";
import { vOnClickOutside as Mt } from "@vueuse/components";
import { VueDatePicker as Gt } from "@vuepic/vue-datepicker";
const gt = {
  required: (e) => !!e || {
    en: "This field is required.",
    dv: "ފުރަންޖެހޭ"
  },
  email: (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) || "Invalid email address.",
  min: (e) => (n) => n && n.length >= e || `Minimum length is ${e} characters.`,
  max: (e) => (n) => n && n.length <= e || `Maximum length is ${e} characters.`,
  numeric: (e) => !isNaN(parseFloat(e)) && isFinite(e) || "This field must be a number.",
  nid: (e) => (n) => e === "mv" ? /^A\d{6}$/.test(n) || "NID must start with A followed by 6 digits for Maldives" : !0,
  customPattern: (e, n, t = "Invalid format.") => (l) => e() ? new RegExp(n).test(l) || t : !0
}, Yt = {
  install(e) {
    e.config.globalProperties.$rules = gt, e.provide("validationRules", gt);
  }
}, kt = {
  en: {
    buttons: {
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      add: "Add",
      ok: "OK",
      print: "Print",
      download: "Download",
      yes: "Yes",
      no: "No",
      delete: "Delete",
      edit: "Edit",
      close: "Close",
      search: "Search"
    },
    placeholders: {
      search: "Search...",
      select: "Select an option"
    },
    labels: {
      name: "Name",
      email: "Email",
      password: "Password"
    }
  },
  dv: {
    buttons: {
      submit: "ސަބްމިޓް",
      cancel: "ކެންސަލް",
      add: "އެޑް",
      save: "ސޭވް",
      ok: "އޯކޭ",
      print: "ޕްރިންޓް",
      download: "ޑައިންލޯޑް",
      yes: "ރަގަނޅު",
      no: "ނޫން",
      delete: "ޑިލިޓް",
      edit: "އެޑިޓް",
      close: "ކްލޯސް",
      search: "ހޯދާ"
    },
    placeholders: {
      search: "ހޯދާ...",
      select: "އޮޕްޝަން"
    },
    labels: {
      name: "ނަން",
      email: "އީމެއިލް",
      password: "ޕާސްވަޑް"
    }
  }
}, dt = M(localStorage.getItem("language") || "en"), Qe = () => {
  const e = (l, o = "") => {
    const s = o || dt.value, x = l.split(".");
    let b = kt[s];
    for (const k of x)
      b = b?.[k];
    return b || l;
  }, n = (l) => {
    kt[l] && (dt.value = l, localStorage.setItem("language", l), document.documentElement.lang = l);
  }, t = i(() => dt.value);
  return {
    t: e,
    setLanguage: n,
    language: t
  };
}, Ae = M(!1);
function St(e) {
  Ae.value = e, localStorage.setItem("rtlSetting", JSON.stringify(e)), typeof document < "u" && (document.documentElement.setAttribute("dir", e ? "rtl" : "ltr"), document.documentElement.setAttribute("lang", e == !0 ? "dv" : "en"), e ? document.documentElement.classList.add("rtl-font") : document.documentElement.classList.remove("rtl-font"));
}
const Xt = {
  install(e) {
    const { t: n, setLanguage: t, language: l } = Qe();
    ye(l, (o) => {
      St(o === "dv");
    }), e.provide("i18n", {
      t: n,
      setLanguage: t,
      language: l
    }), e.config.globalProperties.$t = n, e.config.globalProperties.$setLanguage = t, e.config.globalProperties.$language = l;
  }
}, yt = {
  xs: "text-xs px-2 py-1 ",
  sm: "text-sm px-3 py-2 ",
  md: "text-base-1 px-4 py-2",
  lg: "text-md px-5 py-3",
  xl: "text-lg px-6 py-4"
}, De = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24
}, $e = {
  none: "rounded-none",
  d: "rounded-default",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Ke = {
  primary: {
    contained: "bg-primary text-white transition-colors hover:bg-primary/60",
    outlined: "border border-primary text-primary bg-transparent transition-colors hover:bg-primary/10",
    text: "text-primary bg-transparent transition-colors hover:text-primary/80",
    tonal: "bg-surface text-primary transition-colors hover:bg-primary/10"
  },
  success: {
    contained: "bg-green-500 text-white transition-colors hover:bg-green-600",
    outlined: "border border-green-500 text-green-500 bg-transparent transition-colors hover:bg-green-100",
    text: "text-green-500 bg-transparent transition-colors hover:text-green-400",
    tonal: "bg-green-100 text-green-500 transition-colors hover:bg-green-100"
  },
  danger: {
    contained: "bg-red-500 text-white transition-colors hover:bg-red-600",
    outlined: "border border-red-500 text-red-500 bg-transparent transition-colors hover:bg-red-100",
    text: "text-red-500 bg-transparent transition-colors hover:text-red-400",
    tonal: "bg-red-100 text-red-500 transition-colors hover:bg-red-100"
  },
  warning: {
    contained: "bg-yellow-500 text-white transition-colors hover:bg-yellow-600",
    outlined: "border border-yellow-500 text-yellow-500 bg-transparent transition-colors hover:bg-yellow-100",
    text: "text-yellow-500 bg-transparent transition-colors hover:text-yellow-400",
    tonal: "bg-yellow-100 text-yellow-500 transition-colors hover:bg-yellow-100"
  },
  info: {
    contained: "bg-blue-500 text-white transition-colors hover:bg-blue-600",
    outlined: "border border-blue-500 text-blue-500 bg-transparent transition-colors hover:bg-blue-100",
    text: "text-blue-500 bg-transparent transition-colors hover:text-blue-400",
    tonal: "bg-blue-100 text-blue-500 transition-colors hover:bg-blue-100"
  },
  gray: {
    contained: "bg-gray-500 dark:bg-gray-800 text-gray-50  transition-colors hover:bg-gray-600 dark:hover:bg-gray-700",
    outlined: "border border-gray-500 text-gray-500 bg-transparent transition-colors hover:bg-gray-100",
    text: "text-gray-500 bg-transparent transition-colors hover:text-gray-400",
    tonal: "bg-gray-100 text-gray-500 transition-colors hover:bg-gray-100"
  },
  disable: {
    contained: "bg-gray-200 text-white transition-colors",
    outlined: "border border-gray-400 text-gray-400 bg-transparent transition-colors",
    text: "text-gray-400 bg-transparent transition-colors",
    tonal: "bg-gray-400 text-gray-400 transition-colors"
  }
}, Jt = {
  none: "",
  xs: "h-6",
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-14"
}, Qt = {
  sm: "rounded-t-sm",
  md: "rounded-t-md",
  lg: "rounded-t-lg",
  xl: "rounded-t-xl",
  "2xl": "rounded-t-2xl",
  "3xl": "rounded-t-3xl",
  full: "rounded-t-full",
  default: "rounded-t-lg"
}, Zt = {
  sm: "rounded-b-sm",
  md: "rounded-b-md",
  lg: "rounded-b-lg",
  xl: "rounded-b-xl",
  "2xl": "rounded-b-2xl",
  "3xl": "rounded-b-3xl",
  full: "rounded-b-full",
  default: "rounded-b-lg"
}, Ye = (e, n, t = null) => {
  const { language: l } = Qe(), o = i(() => {
    let x = "";
    return n != "" ? x = n : x = l.value, x === "dv" ? "dv" : "en";
  });
  if (typeof e == "string" && e !== "")
    return e;
  if (!e) return "";
  const s = o.value === "dv" ? "dv" : "en";
  return t ? e[s][t] : e[s];
};
function Ct(e) {
  const n = e.value, l = typeof n == "object" && n !== null && ("text" in n || "placement" in n || "arrow" in n || "openOnHover" in n || "showDelay" in n || "hideDelay" in n || "disabled" in n);
  return {
    text: typeof n == "string" ? n : l && "text" in n ? n.text : l ? "default tooltip" : n,
    placement: l && n.placement ? n.placement : "top",
    arrow: l && n.arrow !== void 0 ? !!n.arrow : !0,
    openOnHover: l && n.openOnHover !== void 0 ? !!n.openOnHover : !0,
    openOnFocus: l && n.openOnFocus !== void 0 ? !!n.openOnFocus : !0,
    openOnClick: l && n.openOnClick !== void 0 ? !!n.openOnClick : !1,
    showDelay: l && n.showDelay !== void 0 ? Number(n.showDelay) : 80,
    hideDelay: l && n.hideDelay !== void 0 ? Number(n.hideDelay) : 80,
    offset: l && n.offset ? n.offset : { x: 0, y: 0 },
    disabled: l && n.disabled !== void 0 ? !!n.disabled : !1
  };
}
function $t(e, n) {
  return !(n?.hover || n?.click || n?.focus) ? e : {
    ...e,
    openOnHover: !!n.hover,
    openOnClick: !!n.click,
    openOnFocus: !!n.focus
  };
}
function zt(e, n) {
  if (!n) return e;
  const l = ["top", "bottom", "left", "right"].find((o) => n[o]);
  return l ? { ...e, placement: l } : e;
}
function Bt(e) {
  const n = ["faruma"], t = [];
  if (!e) return t;
  for (const l of n)
    e[l] && t.push(l);
  return t;
}
function Lt(e) {
  if (!e.tooltipEl) return;
  const n = ["faruma"];
  for (const t of n)
    e.classModifiers.includes(t) ? e.tooltipEl.classList.add(t) : e.tooltipEl.classList.remove(t);
}
function _t(e) {
  return !Ae.value ? e : e === "left" ? "right" : e === "right" ? "left" : e;
}
function At(e) {
  return e && Ye(e, "") || "empty-tooltip";
}
function el(e) {
  if (e.tooltipEl) return;
  const n = document.createElement("div");
  n.className = "vts-tooltip", n.setAttribute("role", "tooltip"), n.style.position = "absolute", n.style.top = "-9999px", n.style.left = "-9999px", n.style.visibility = "hidden", n.style.zIndex = "var(--vts-z-tooltip, 1000)";
  const t = document.createElement("div");
  t.className = "vts-tooltip-content";
  const { language: l } = Qe();
  if ((l.value === "dv" || e.classModifiers.includes("faruma")) && t.classList.add("faruma"), t.textContent = At(e.options.text), n.appendChild(t), e.options.arrow) {
    const o = document.createElement("div");
    o.className = "vts-tooltip-arrow", n.appendChild(o), e.arrowEl = o;
  }
  document.body.appendChild(n), e.tooltipEl = n, Lt(e);
}
function It(e) {
  if (!e.tooltipEl) return;
  const n = e.tooltipEl.querySelector(".vts-tooltip-content");
  if (n) {
    n.textContent = At(e.options.text);
    const { language: t } = Qe();
    t.value === "dv" || e.classModifiers.includes("faruma") ? n.classList.add("faruma") : n.classList.remove("faruma");
  }
}
function mt(e, n) {
  if (!n.tooltipEl) return;
  const t = n.tooltipEl, l = e.getBoundingClientRect(), o = t.getBoundingClientRect(), s = window.scrollX || window.pageXOffset, x = window.scrollY || window.pageYOffset, b = _t(n.options.placement || "top"), k = n.options.offset?.x ?? 0, z = n.options.offset?.y ?? 0, h = n.options.arrow ? 8 : 0;
  let m = 0, d = 0;
  switch (b) {
    case "top":
      m = l.top + x - o.height - h - z, d = l.left + s + l.width / 2 - o.width / 2 + k;
      break;
    case "bottom":
      m = l.bottom + x + h + z, d = l.left + s + l.width / 2 - o.width / 2 + k;
      break;
    case "left":
      m = l.top + x + l.height / 2 - o.height / 2 + z, d = l.left + s - o.width - h - k;
      break;
    case "right":
      m = l.top + x + l.height / 2 - o.height / 2 + z, d = l.right + s + h + k;
      break;
  }
  if (t.style.top = `${m}px`, t.style.left = `${d}px`, t.style.visibility = "", n.options.arrow && n.arrowEl) {
    const f = n.arrowEl;
    switch (f.style.width = "8px", f.style.height = "8px", b) {
      case "top":
        f.style.bottom = "-4px", f.style.left = "50%", f.style.top = "", f.style.right = "", f.style.transform = "translateX(-50%) rotate(225deg)";
        break;
      case "bottom":
        f.style.top = "-4px", f.style.left = "50%", f.style.bottom = "", f.style.right = "", f.style.transform = "translateX(-50%) rotate(45deg)";
        break;
      case "left":
        f.style.right = "-4px", f.style.top = "50%", f.style.left = "", f.style.bottom = "", f.style.transform = "translateY(-50%) rotate(135deg)";
        break;
      case "right":
        f.style.left = "-4px", f.style.top = "50%", f.style.right = "", f.style.bottom = "", f.style.transform = "translateY(-50%) rotate(315deg)";
        break;
    }
  }
}
function ct(e, n, t = null) {
  n.options.disabled || (n.showTimer && window.clearTimeout(n.showTimer), n.hideTimer && window.clearTimeout(n.hideTimer), n.showTimer = window.setTimeout(() => {
    n.lastTrigger = t, el(n), n.open = !0, mt(e, n);
  }, n.options.showDelay ?? 80));
}
function We(e) {
  e.showTimer && window.clearTimeout(e.showTimer), e.hideTimer && window.clearTimeout(e.hideTimer), e.hideTimer = window.setTimeout(() => {
    e.open = !1, e.tooltipEl && (e.tooltipEl.style.visibility = "hidden"), e.lastTrigger = null;
  }, e.options.hideDelay ?? 80);
}
function tl(e, n) {
  e.removeEventListener("mouseover", n.handlers.mouseover), e.removeEventListener("mouseout", n.handlers.mouseout), e.removeEventListener("focusin", n.handlers.focusin), e.removeEventListener("focusout", n.handlers.focusout), e.removeEventListener("click", n.handlers.click), document.removeEventListener("click", n.handlers.docClick), document.removeEventListener("keydown", n.handlers.keydown), n.unwatchLanguage && n.unwatchLanguage(), n.tooltipEl && n.tooltipEl.parentNode && n.tooltipEl.parentNode.removeChild(n.tooltipEl), n.showTimer && window.clearTimeout(n.showTimer), n.hideTimer && window.clearTimeout(n.hideTimer), e.__tooltipState = void 0;
}
const ll = {
  mounted(e, n) {
    const l = {
      options: zt(
        $t(Ct(n), n.modifiers || {}),
        n.modifiers || {}
      ),
      tooltipEl: null,
      arrowEl: null,
      showTimer: null,
      hideTimer: null,
      open: !1,
      handlers: {},
      lastTrigger: null,
      classModifiers: Bt(n.modifiers)
    }, { language: o } = Qe(), s = ye(o, () => {
      It(l), l.open && mt(e, l);
    });
    l.unwatchLanguage = s, l.handlers.mouseover = (x) => {
      l.options.openOnHover && ct(e, l, "hover");
    }, l.handlers.mouseout = (x) => {
      if (!l.options.openOnHover) return;
      const b = x.relatedTarget;
      b && e.contains(b) || We(l);
    }, l.handlers.focusin = () => l.options.openOnFocus && ct(e, l, "focus"), l.handlers.focusout = () => l.options.openOnFocus && We(l), l.handlers.click = () => {
      l.options.openOnClick && (l.open ? We(l) : ct(e, l, "click"));
    }, l.handlers.docClick = (x) => {
      if (!l.open) return;
      const b = x.target;
      l.tooltipEl && l.tooltipEl.contains(b) || e.contains(b) || We(l);
    }, l.handlers.keydown = (x) => {
      x.key === "Escape" && We(l);
    }, e.addEventListener("mouseover", l.handlers.mouseover), e.addEventListener("mouseout", l.handlers.mouseout), e.addEventListener("focusin", l.handlers.focusin), e.addEventListener("focusout", l.handlers.focusout), e.addEventListener("click", l.handlers.click), document.addEventListener("click", l.handlers.docClick, { passive: !0 }), document.addEventListener("keydown", l.handlers.keydown), e.__tooltipState = l;
  },
  updated(e, n) {
    const t = e.__tooltipState;
    t && (t.options = zt(
      $t(Ct(n), n.modifiers || {}),
      n.modifiers || {}
    ), t.classModifiers = Bt(n.modifiers), It(t), Lt(t), t.open && mt(e, t));
  },
  unmounted(e) {
    const n = e.__tooltipState;
    n && tl(e, n);
  }
}, He = Nt([]);
let nl = 0, ft = null;
function rl() {
  if (ft)
    return ft;
  const e = (x) => {
    const b = ++nl, k = M(!0), z = () => {
      k.value = !1, setTimeout(() => {
        const m = He.value.findIndex((d) => d.id === b);
        m > -1 && (He.value.splice(m, 1), xt(He));
      }, 300);
    }, h = {
      id: b,
      isVisible: k,
      options: {
        message: "",
        title: "",
        variant: "default",
        icon: "",
        action: "",
        timeout: 5e3,
        position: "bottom",
        closeable: !0,
        showProgress: !1,
        multiline: !1,
        onAction: null,
        ...x
      },
      close: z
    };
    return He.value.push(h), xt(He), h.options.timeout > 0 && setTimeout(() => {
      z();
    }, h.options.timeout), h;
  }, s = {
    snackbars: He,
    show: e,
    success: (x, b = {}) => e({ message: x, variant: "success", icon: "success", ...b }),
    error: (x, b = {}) => e({ message: x, variant: "error", icon: "error", ...b }),
    warning: (x, b = {}) => e({ message: x, variant: "warning", icon: "warning", ...b }),
    info: (x, b = {}) => e({ message: x, variant: "info", icon: "info", ...b })
  };
  return ft = s, s;
}
const al = {
  rounded: "d",
  size: "md",
  color: "primary",
  variant: "contained"
}, Xe = tt({
  defaults: { ...al },
  components: {}
});
function Zs(e = {}) {
  return e;
}
function ol(e) {
  e.defaults && Object.assign(Xe.defaults, e.defaults), e.components && Object.assign(Xe.components, e.components);
}
function we(e, n) {
  const t = Xe.components[e];
  return t && t[n] !== void 0 ? t[n] : Xe.defaults[n];
}
function _s() {
  return Rt(Xe);
}
const ge = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of n)
    t[l] = o;
  return t;
}, sl = ["disabled"], il = {
  key: 0,
  class: "mr-2"
}, ul = {
  key: 0,
  class: "loader"
}, dl = { class: "whitespace-nowrap" }, cl = { key: 1 }, fl = {
  key: 1,
  class: "ml-2"
}, gl = {
  __name: "Button",
  props: {
    variant: {
      type: String,
      default: () => we("Button", "variant")
    },
    color: {
      type: String,
      default: () => we("Button", "color")
    },
    size: {
      type: String,
      default: () => we("Button", "size")
    },
    rounded: {
      type: String,
      default: () => we("Button", "rounded")
    },
    iconClass: {
      type: String,
      default: ""
    },
    block: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    prependIcon: {
      type: String,
      default: ""
    },
    appendIcon: {
      type: String,
      default: ""
    },
    padding: {
      type: Boolean,
      default: !1
      // true = force IconPadding, false = no padding on icon-only buttons
    },
    lang: {
      type: String,
      default: ""
      // Component-level language override
    }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const { t, setLanguage: l } = pe("i18n", { t: (c) => c, setLanguage: () => {
    } }), o = n, s = pe("parentLang", ""), x = i(() => b.lang ? b.lang : s), b = e, k = {
      xs: "p-2",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
      xl: "p-3"
    }, z = i(() => Ke[b.color] ? Ke[b.color][b.variant] : Ke.primary[b.variant]), h = i(() => [
      "inline-flex items-center justify-center font-medium transition-all select-none",
      b.padding ? k[b.size] : b.icon ? "" : yt[b.size],
      $e[b.rounded],
      z.value,
      b.block ? "w-full" : "",
      x.value === "dv" ? "faruma" : "",
      b.disabled || b.loading ? "opacity-90 cursor-not-allowed" : "cursor-pointer"
    ]), m = (c) => {
      !b.disabled && !b.loading && o("click", c);
    }, d = i(() => {
      if (!b.label)
        return t("buttons.submit", x.value);
      if (b.label.startsWith("buttons.")) {
        const c = t(b.label, x.value);
        if (c !== b.label)
          return c;
      }
      return b.label;
    });
    return (c, f) => (r(), a("button", {
      class: v(h.value),
      disabled: e.disabled || e.loading,
      onClick: m
    }, [
      c.$slots.prepend || e.prependIcon || e.loading ? (r(), a("span", il, [
        e.loading ? (r(), a("span", ul)) : y("", !0),
        e.loading ? y("", !0) : D(c.$slots, "prepend", { key: 1 }, () => [
          e.prependIcon ? (r(), Q(q(lt), {
            key: 0,
            name: e.prependIcon,
            type: "outline",
            size: q(De)[b.size],
            color: "text-current",
            class: v(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : y("", !0)
        ], !0)
      ])) : y("", !0),
      g("span", dl, [
        D(c.$slots, "default", {}, () => [
          e.icon ? (r(), Q(q(lt), {
            key: 0,
            name: e.icon,
            type: "mini",
            size: q(De)[b.size],
            color: "text-current",
            class: v(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : y("", !0),
          e.icon ? y("", !0) : (r(), a("div", cl, V(d.value), 1))
        ], !0)
      ]),
      c.$slots.append || e.appendIcon ? (r(), a("span", fl, [
        D(c.$slots, "append", {}, () => [
          e.appendIcon ? (r(), Q(q(lt), {
            key: 0,
            name: e.appendIcon,
            type: "outline",
            size: q(De)[b.size],
            class: v(e.iconClass),
            stroke: "currentColor",
            color: "text-current"
          }, null, 8, ["name", "size", "class"])) : y("", !0)
        ], !0)
      ])) : y("", !0)
    ], 10, sl));
  }
}, ml = /* @__PURE__ */ ge(gl, [["__scopeId", "data-v-a9606ff7"]]), pl = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, vl = ["aria-label"], yl = ["onClick"], bl = {
  key: 0,
  class: "absolute inset-0 rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-transparent"
}, hl = {
  key: 0,
  class: "flex flex-col"
}, xl = {
  key: 1,
  class: "mt-2 text-sm text-red-500 flex items-center gap-1"
}, wl = {
  key: 2,
  class: "mt-2 text-sm ui-text-secondary"
}, kl = {
  __name: "Radio",
  props: {
    // v-model value
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    // Items array - can be simple values or objects
    items: {
      type: Array,
      default: () => []
    },
    // Keys for object items
    itemLabel: {
      type: String,
      default: "label"
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemDescription: {
      type: String,
      default: "description"
    },
    itemDisabled: {
      type: String,
      default: "disabled"
    },
    // Group label
    groupLabel: {
      type: String,
      default: ""
    },
    // Layout
    inline: {
      type: Boolean,
      default: !1
    },
    labelPosition: {
      type: String,
      default: "right",
      // 'left' | 'right'
      validator: (e) => ["left", "right"].includes(e)
    },
    // States
    disabled: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    error: {
      type: [String, Boolean],
      default: !1
    },
    hint: {
      type: String,
      default: ""
    },
    // Styling
    size: {
      type: String,
      default: "md",
      validator: (e) => ["xs", "sm", "md", "lg", "xl"].includes(e)
    },
    color: {
      type: String,
      default: "primary"
      // 'primary' | 'success' | 'warning' | 'danger' | 'info'
    },
    margin: {
      type: String,
      default: ""
    },
    // Validation
    rules: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = M(null), s = i(() => t.items.map((w) => typeof w != "object" || w === null ? {
      label: String(w),
      value: w,
      description: "",
      disabled: !1
    } : {
      label: w[t.itemLabel] || "",
      value: w[t.itemValue] ?? w,
      description: w[t.itemDescription] || "",
      disabled: w[t.itemDisabled] || !1
    })), x = (w) => t.modelValue === null || t.modelValue === void 0 ? !1 : typeof w == "object" && typeof t.modelValue == "object" ? JSON.stringify(w) === JSON.stringify(t.modelValue) : t.modelValue === w, b = (w) => {
      t.readonly || (l("update:modelValue", w), l("change", w));
    }, k = i(() => {
      const w = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return w[t.size] || w.md;
    }), z = i(() => {
      const w = {
        xs: "w-1.5 h-1.5",
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
        xl: "w-3.5 h-3.5"
      };
      return w[t.size] || w.md;
    }), h = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return w[t.size] || w.md;
    }), m = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return w[t.size] || w.md;
    }), d = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return w[t.size] || w.md;
    }), c = i(() => {
      const w = {
        primary: {
          selected: "border-primary text-primary",
          unselected: "border-color-3 hover:border-primary",
          dot: "text-primary"
        },
        success: {
          selected: "border-green-500 text-green-500",
          unselected: "border-color-3 hover:border-green-500",
          dot: "text-green-500"
        },
        warning: {
          selected: "border-yellow-500 text-yellow-500",
          unselected: "border-color-3 hover:border-yellow-500",
          dot: "text-yellow-500"
        },
        danger: {
          selected: "border-red-500 text-red-500",
          unselected: "border-color-3 hover:border-red-500",
          dot: "text-red-500"
        },
        info: {
          selected: "border-blue-500 text-blue-500",
          unselected: "border-color-3 hover:border-blue-500",
          dot: "text-blue-500"
        }
      };
      return w[t.color] || w.primary;
    }), f = (w, $) => {
      const S = $ || t.disabled;
      return t.error ? x(w) ? "border-red-500 text-red-500" : "border-red-500 hover:border-red-600" : S ? x(w) ? "border-gray-400 text-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : x(w) ? c.value.selected : c.value.unselected;
    }, C = (w) => {
      if (t.error) return "bg-red-500";
      if (w || t.disabled) return "bg-gray-400";
      const $ = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return $[t.color] || $.primary;
    };
    return (w, $) => (r(), a("div", {
      class: v(["relative", e.margin])
    }, [
      e.groupLabel ? (r(), a("label", {
        key: 0,
        class: v([
          "block mb-2 font-medium ui-text-primary",
          m.value
        ])
      }, [
        ve(V(e.groupLabel) + " ", 1),
        e.required ? (r(), a("span", pl, "*")) : y("", !0)
      ], 2)) : y("", !0),
      g("div", {
        class: v([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ]),
        role: "radiogroup",
        "aria-label": e.groupLabel
      }, [
        (r(!0), a(ae, null, ue(s.value, (S, F) => (r(), a("label", {
          key: S.value,
          class: v([
            "inline-flex items-start gap-3 cursor-pointer select-none group",
            S.disabled || e.disabled ? "opacity-50 cursor-not-allowed" : "",
            e.labelPosition === "left" ? "flex-row-reverse" : ""
          ]),
          onClick: ee((N) => !S.disabled && !e.disabled && b(S.value), ["prevent"])
        }, [
          g("div", {
            class: v([
              "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
              k.value,
              f(S.value, S.disabled)
            ])
          }, [
            G(ke, { name: "scale" }, {
              default: te(() => [
                x(S.value) ? (r(), a("div", {
                  key: 0,
                  class: v([
                    "rounded-full bg-current transition-all duration-200",
                    z.value,
                    C(S.disabled)
                  ])
                }, null, 2)) : y("", !0)
              ]),
              _: 2
            }, 1024),
            o.value === S.value ? (r(), a("div", bl)) : y("", !0)
          ], 2),
          S.label || S.description ? (r(), a("div", hl, [
            S.label ? (r(), a("span", {
              key: 0,
              class: v([
                "ui-text-primary leading-tight transition-colors",
                h.value,
                !S.disabled && !e.disabled ? "group-hover:text-primary" : ""
              ])
            }, V(S.label), 3)) : y("", !0),
            S.description ? (r(), a("span", {
              key: 1,
              class: v([
                "ui-text-secondary mt-0.5",
                d.value
              ])
            }, V(S.description), 3)) : y("", !0)
          ])) : y("", !0)
        ], 10, yl))), 128))
      ], 10, vl),
      e.error ? (r(), a("p", xl, [
        $[0] || ($[0] = g("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          g("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        ve(" " + V(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : y("", !0),
      e.hint && !e.error ? (r(), a("p", wl, V(e.hint), 1)) : y("", !0)
    ], 2));
  }
}, Sl = /* @__PURE__ */ ge(kl, [["__scopeId", "data-v-5aa3c31e"]]), Cl = ["aria-label"], $l = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, zl = {
  key: 1,
  class: "mt-2 text-sm text-red-500 flex items-center gap-1"
}, Bl = {
  key: 2,
  class: "mt-2 text-sm ui-text-secondary"
}, Il = {
  __name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    inline: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    error: {
      type: [String, Boolean],
      default: !1
    },
    hint: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    color: {
      type: String,
      default: "primary"
    },
    margin: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const t = e, l = n;
    Ge("radioGroup", {
      modelValue: et(t, "modelValue"),
      disabled: et(t, "disabled"),
      size: et(t, "size"),
      color: et(t, "color"),
      select: (s) => {
        l("update:modelValue", s), l("change", s);
      }
    });
    const o = i(() => {
      const s = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return s[t.size] || s.md;
    });
    return (s, x) => (r(), a("div", {
      class: v(["relative", e.margin]),
      role: "radiogroup",
      "aria-label": e.label
    }, [
      e.label ? (r(), a("label", {
        key: 0,
        class: v([
          "block mb-2 font-medium ui-text-primary",
          o.value
        ])
      }, [
        ve(V(e.label) + " ", 1),
        e.required ? (r(), a("span", $l, "*")) : y("", !0)
      ], 2)) : y("", !0),
      g("div", {
        class: v([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ])
      }, [
        D(s.$slots, "default")
      ], 2),
      e.error ? (r(), a("p", zl, [
        x[0] || (x[0] = g("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          g("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        ve(" " + V(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : y("", !0),
      e.hint && !e.error ? (r(), a("p", Bl, V(e.hint), 1)) : y("", !0)
    ], 10, Cl));
  }
}, Vl = {
  key: 0,
  class: "flex flex-col"
}, Tl = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, Ml = {
  __name: "RadioItem",
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      required: !0
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    labelPosition: {
      type: String,
      default: "right"
    },
    size: {
      type: String,
      default: "md"
    },
    color: {
      type: String,
      default: "primary"
    },
    margin: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const t = e, l = pe("radioGroup", null), o = n, s = i(() => l ? l.modelValue.value === t.value : !1), x = () => {
      l && l.select(t.value), o("update:modelValue", t.value), o("change", t.value);
    }, b = i(() => {
      const f = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return f[t.size] || f.md;
    }), k = i(() => {
      const f = {
        xs: "w-1.5 h-1.5",
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
        xl: "w-3.5 h-3.5"
      };
      return f[t.size] || f.md;
    }), z = i(() => {
      const f = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return f[t.size] || f.md;
    }), h = i(() => {
      const f = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return f[t.size] || f.md;
    }), m = i(() => {
      const f = {
        primary: { selected: "border-primary", unselected: "border-color-3 hover:border-primary" },
        success: { selected: "border-green-500", unselected: "border-color-3 hover:border-green-500" },
        warning: { selected: "border-yellow-500", unselected: "border-color-3 hover:border-yellow-500" },
        danger: { selected: "border-red-500", unselected: "border-color-3 hover:border-red-500" },
        info: { selected: "border-blue-500", unselected: "border-color-3 hover:border-blue-500" }
      };
      return f[t.color] || f.primary;
    }), d = i(() => {
      const f = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return f[t.color] || f.primary;
    }), c = i(() => t.disabled ? s.value ? "border-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : s.value ? m.value.selected : m.value.unselected);
    return (f, C) => (r(), a("label", {
      class: v([
        "inline-flex items-start gap-3 cursor-pointer select-none group",
        e.disabled ? "opacity-50 cursor-not-allowed" : "",
        e.labelPosition === "left" ? "flex-row-reverse" : "",
        e.margin
      ]),
      onClick: C[0] || (C[0] = ee((w) => !e.disabled && x(), ["prevent"]))
    }, [
      g("div", {
        class: v([
          "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
          b.value,
          c.value
        ])
      }, [
        G(ke, { name: "scale" }, {
          default: te(() => [
            s.value ? (r(), a("div", {
              key: 0,
              class: v([
                "rounded-full transition-all duration-200",
                k.value,
                d.value
              ])
            }, null, 2)) : y("", !0)
          ]),
          _: 1
        })
      ], 2),
      e.label || e.description || f.$slots.default ? (r(), a("div", Vl, [
        e.label || f.$slots.default ? (r(), a("span", {
          key: 0,
          class: v([
            "ui-text-primary leading-tight transition-colors",
            z.value,
            e.disabled ? "" : "group-hover:text-primary"
          ])
        }, [
          D(f.$slots, "default", {}, () => [
            ve(V(e.label), 1)
          ], !0),
          e.required ? (r(), a("span", Tl, "*")) : y("", !0)
        ], 2)) : y("", !0),
        e.description ? (r(), a("span", {
          key: 1,
          class: v([
            "ui-text-secondary mt-0.5",
            h.value
          ])
        }, V(e.description), 3)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}, Ll = /* @__PURE__ */ ge(Ml, [["__scopeId", "data-v-d7324604"]]), Al = {
  key: 0,
  class: "flex items-center justify-between w-full h-full px-1"
}, Pl = {
  key: 0,
  class: "flex flex-col"
}, Dl = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, Ol = {
  key: 0,
  class: "mt-1.5 text-sm text-red-500 flex items-center gap-1"
}, El = {
  key: 1,
  class: "mt-1.5 text-sm ui-text-secondary"
}, jl = {
  __name: "Switch",
  props: {
    // v-model value
    modelValue: {
      type: [Boolean, String, Number],
      default: !1
    },
    // Values for checked/unchecked states
    trueValue: {
      type: [Boolean, String, Number],
      default: !0
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: !1
    },
    // Label and description
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    // Label position
    labelPosition: {
      type: String,
      default: "right",
      // 'left' | 'right'
      validator: (e) => ["left", "right"].includes(e)
    },
    // Reverse (label on far side)
    reverse: {
      type: Boolean,
      default: !1
    },
    // States
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    // Validation
    error: {
      type: [String, Boolean],
      default: !1
    },
    hint: {
      type: String,
      default: ""
    },
    // Styling
    size: {
      type: String,
      default: "md",
      validator: (e) => ["xs", "sm", "md", "lg", "xl"].includes(e)
    },
    color: {
      type: String,
      default: "primary"
      // 'primary' | 'success' | 'warning' | 'danger' | 'info'
    },
    // Show icons in thumb
    showIcons: {
      type: Boolean,
      default: !1
    },
    // Inset mode (icons inside track)
    inset: {
      type: Boolean,
      default: !1
    },
    margin: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => t.modelValue === t.trueValue), s = () => {
      if (t.disabled || t.loading || t.readonly) return;
      const w = o.value ? t.falseValue : t.trueValue;
      l("update:modelValue", w), l("change", w);
    }, x = i(() => {
      if (t.inset) {
        const $ = {
          xs: "w-8 h-4",
          sm: "w-10 h-5",
          md: "w-12 h-6",
          lg: "w-14 h-7",
          xl: "w-16 h-8"
        };
        return $[t.size] || $.md;
      }
      const w = {
        xs: "w-7 h-4",
        sm: "w-9 h-5",
        md: "w-11 h-6",
        lg: "w-13 h-7",
        xl: "w-15 h-8"
      };
      return w[t.size] || w.md;
    }), b = i(() => {
      const w = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return w[t.size] || w.md;
    }), k = i(() => {
      const w = {
        xs: o.value ? "translate-x-3.5" : "translate-x-0.5",
        sm: o.value ? "translate-x-4.5" : "translate-x-0.5",
        md: o.value ? "translate-x-5.5" : "translate-x-0.5",
        lg: o.value ? "translate-x-6.5" : "translate-x-0.5",
        xl: o.value ? "translate-x-7.5" : "translate-x-0.5"
      }, $ = {
        xs: "top-0.5",
        sm: "top-0.5",
        md: "top-0.5",
        lg: "top-0.5",
        xl: "top-0.5"
      };
      return `${w[t.size] || w.md} ${$[t.size] || $.md}`;
    }), z = i(() => {
      const w = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4"
      };
      return w[t.size] || w.md;
    }), h = i(() => {
      const w = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4"
      };
      return w[t.size] || w.md;
    }), m = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return w[t.size] || w.md;
    }), d = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return w[t.size] || w.md;
    }), c = i(() => {
      const w = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return w[t.color] || w.primary;
    }), f = i(() => {
      const w = {
        primary: "text-primary",
        success: "text-green-500",
        warning: "text-yellow-500",
        danger: "text-red-500",
        info: "text-blue-500"
      };
      return w[t.color] || w.primary;
    }), C = i(() => t.error ? o.value ? "bg-red-500" : "bg-red-200 dark:bg-red-900/30" : t.disabled || t.loading ? o.value ? "bg-gray-400 dark:bg-gray-600" : "bg-gray-200 dark:bg-gray-700" : o.value ? c.value : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600");
    return (w, $) => (r(), a("div", {
      class: v(["relative", e.margin])
    }, [
      g("label", {
        class: v([
          "inline-flex items-center gap-3 cursor-pointer select-none group",
          e.disabled || e.loading ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : "",
          e.reverse ? "justify-between w-full" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        g("div", {
          class: v([
            "relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out rounded-full",
            x.value,
            C.value,
            !e.disabled && !e.loading ? "cursor-pointer" : "cursor-not-allowed"
          ])
        }, [
          g("span", {
            class: v([
              "absolute inline-flex items-center justify-center bg-white rounded-full shadow-md transition-all duration-200 ease-in-out",
              b.value,
              k.value
            ])
          }, [
            e.loading ? (r(), a("svg", {
              key: 0,
              class: v(["animate-spin text-gray-400", z.value]),
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [...$[0] || ($[0] = [
              g("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              g("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])], 2)) : y("", !0),
            G(ke, { name: "fade" }, {
              default: te(() => [
                o.value && !e.loading && e.showIcons ? (r(), a("svg", {
                  key: 0,
                  class: v([z.value, f.value]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...$[1] || ($[1] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "3",
                    d: "M5 13l4 4L19 7"
                  }, null, -1)
                ])], 2)) : y("", !0)
              ]),
              _: 1
            }),
            G(ke, { name: "fade" }, {
              default: te(() => [
                !o.value && !e.loading && e.showIcons ? (r(), a("svg", {
                  key: 0,
                  class: v([z.value, "text-gray-400"]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...$[2] || ($[2] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "3",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ])], 2)) : y("", !0)
              ]),
              _: 1
            })
          ], 2),
          e.inset ? (r(), a("span", Al, [
            g("span", {
              class: v(["transition-opacity duration-200", o.value ? "opacity-100" : "opacity-0"])
            }, [
              (r(), a("svg", {
                class: v([h.value, "text-white"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...$[3] || ($[3] = [
                g("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])], 2))
            ], 2),
            g("span", {
              class: v(["transition-opacity duration-200", o.value ? "opacity-0" : "opacity-100"])
            }, [
              (r(), a("svg", {
                class: v([h.value, "text-gray-400"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...$[4] || ($[4] = [
                g("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M6 18L18 6M6 6l12 12"
                }, null, -1)
              ])], 2))
            ], 2)
          ])) : y("", !0)
        ], 2),
        e.label || e.description || w.$slots.default ? (r(), a("div", Pl, [
          e.label || w.$slots.default ? (r(), a("span", {
            key: 0,
            class: v([
              "ui-text-primary leading-tight transition-colors",
              m.value,
              !e.disabled && !e.loading ? "group-hover:text-primary" : ""
            ])
          }, [
            D(w.$slots, "default", {}, () => [
              ve(V(e.label), 1)
            ], !0),
            e.required ? (r(), a("span", Dl, "*")) : y("", !0)
          ], 2)) : y("", !0),
          e.description ? (r(), a("span", {
            key: 1,
            class: v([
              "ui-text-secondary mt-0.5",
              d.value
            ])
          }, V(e.description), 3)) : y("", !0)
        ])) : y("", !0)
      ], 2),
      e.error ? (r(), a("p", Ol, [
        $[5] || ($[5] = g("svg", {
          class: "w-4 h-4 flex-shrink-0",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          g("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        ve(" " + V(typeof e.error == "string" ? e.error : ""), 1)
      ])) : y("", !0),
      e.hint && !e.error ? (r(), a("p", El, V(e.hint), 1)) : y("", !0)
    ], 2));
  }
}, Nl = /* @__PURE__ */ ge(jl, [["__scopeId", "data-v-cc32aa31"]]), Rl = ["src", "alt"], Hl = { key: 0 }, Ul = {
  __name: "Avatar",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "Avatar"
    },
    name: {
      type: String,
      default: ""
    },
    initials: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ["xs", "sm", "md", "lg", "xl", "2xl"].includes(e)
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "secondary", "success", "error", "warning", "info", "gradient"].includes(e)
    },
    rounded: {
      type: String,
      default: "full",
      validator: (e) => ["none", "sm", "md", "lg", "full", "square"].includes(e)
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    borderColor: {
      type: String,
      default: "primary"
    },
    dot: {
      type: Boolean,
      default: !1
    },
    dotColor: {
      type: String,
      default: "success",
      validator: (e) => ["success", "error", "warning", "info", "primary", "secondary"].includes(e)
    },
    dotPosition: {
      type: String,
      default: "bottom-right",
      validator: (e) => ["top-left", "top-right", "bottom-left", "bottom-right"].includes(e)
    },
    badge: {
      type: [String, Number],
      default: ""
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    containerClass: {
      type: String,
      default: ""
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    },
    imageClass: {
      type: String,
      default: ""
    }
  },
  emits: ["click", "image-error"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = M(!1), s = i(() => {
      const S = {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl"
      };
      return S[t.size] || S.md;
    }), x = i(() => {
      const S = {
        xs: "text-[10px]",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl"
      };
      return S[t.size] || S.md;
    }), b = {
      xs: 14,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 30,
      "2xl": 36
    }, k = i(() => {
      const S = {
        default: "bg-color-3 text-ui-text-color",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        error: "bg-error text-white",
        warning: "bg-warning text-white",
        info: "bg-info text-white",
        gradient: "bg-gradient-to-br from-primary to-secondary text-white"
      };
      return S[t.variant] || S.default;
    }), z = i(() => {
      const S = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        square: "rounded-none"
      };
      return S[t.rounded] || S.full;
    }), h = i(() => {
      if (!t.bordered) return "";
      const S = {
        primary: "ring-primary",
        secondary: "ring-secondary",
        success: "ring-success",
        error: "ring-error",
        warning: "ring-warning",
        info: "ring-info",
        default: "ring-color-4"
      };
      return S[t.borderColor] || S.primary;
    }), m = i(() => {
      const S = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4",
        "2xl": "w-5 h-5"
      };
      if (t.badge) {
        const F = {
          xs: "w-4 h-4 min-w-[16px]",
          sm: "w-5 h-5 min-w-[20px]",
          md: "w-6 h-6 min-w-[24px]",
          lg: "w-7 h-7 min-w-[28px]",
          xl: "w-8 h-8 min-w-[32px]",
          "2xl": "w-9 h-9 min-w-[36px]"
        };
        return F[t.size] || F.md;
      }
      return S[t.size] || S.md;
    }), d = i(() => {
      const S = {
        "top-left": "-top-0.5 -left-0.5",
        "top-right": "-top-0.5 -right-0.5",
        "bottom-left": "-bottom-0.5 -left-0.5",
        "bottom-right": "-bottom-0.5 -right-0.5"
      };
      return S[t.dotPosition] || S["bottom-right"];
    }), c = i(() => {
      const S = {
        success: "bg-success",
        error: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
        primary: "bg-primary",
        secondary: "bg-secondary"
      };
      return S[t.dotColor] || S.success;
    }), f = i(() => ({
      border: "2px solid var(--bg-color)"
    })), C = i(() => {
      if (t.initials) return t.initials.slice(0, 2);
      if (t.name) {
        const S = t.name.trim().split(" ");
        return S.length >= 2 ? (S[0][0] + S[S.length - 1][0]).toUpperCase() : S[0].slice(0, 2).toUpperCase();
      }
      return "";
    }), w = (S) => {
      o.value = !0, l("image-error", S);
    }, $ = (S) => {
      t.clickable && l("click", S);
    };
    return (S, F) => {
      const N = be("Icon");
      return r(), a("div", {
        class: v([
          "inline-flex items-center justify-center flex-shrink-0 relative",
          "font-medium select-none overflow-hidden",
          s.value,
          k.value,
          z.value,
          e.bordered && "ring-2 ring-offset-2",
          h.value,
          e.clickable && "cursor-pointer hover:opacity-80 transition-opacity",
          e.containerClass
        ]),
        style: de(e.containerStyle),
        onClick: $
      }, [
        e.src && !o.value ? (r(), a("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          class: v(["w-full h-full object-cover", e.imageClass]),
          onError: w
        }, null, 42, Rl)) : e.icon ? (r(), Q(N, {
          key: 1,
          name: e.icon,
          size: b[t.size],
          color: "text-current"
        }, null, 8, ["name", "size"])) : e.initials || e.name ? (r(), a("span", {
          key: 2,
          class: v(["uppercase font-semibold", x.value])
        }, V(C.value), 3)) : (r(), Q(N, {
          key: 3,
          name: "user",
          size: b[t.size],
          color: "text-current"
        }, null, 8, ["size"])),
        e.dot || e.badge ? (r(), a("span", {
          key: 4,
          class: v([
            "absolute rounded-full",
            d.value,
            m.value,
            c.value,
            e.badge && "flex items-center justify-center text-xs font-bold text-white"
          ]),
          style: de(f.value)
        }, [
          e.badge ? (r(), a("span", Hl, V(e.badge), 1)) : y("", !0)
        ], 6)) : y("", !0),
        D(S.$slots, "default", {}, void 0, !0)
      ], 6);
    };
  }
}, Pt = /* @__PURE__ */ ge(Ul, [["__scopeId", "data-v-a1aef5d2"]]), Fl = ["dir"], ql = {
  key: 0,
  class: "relative"
}, Wl = ["onClick"], Kl = {
  key: 0,
  class: "mr-2"
}, Gl = {
  class: "md:hidden vts-border-sm",
  style: { backgroundColor: "var(--vts-color-surfaceElevated)", borderColor: "var(--vts-color-divider)" }
}, Yl = { class: "vts-px-2 vts-pt-2 vts-pb-3 vts-space-y-1" }, Xl = {
  __name: "AppBar",
  props: {
    id: {
      type: String,
      default: () => `appbar-${Math.random().toString(36).slice(2, 9)}`
    },
    title: String,
    titleAlign: { type: String, default: "left" },
    titleClass: String,
    fixed: Boolean,
    floating: Boolean,
    elevation: [String, Number],
    shadow: String,
    // kept for compatibility
    color: String,
    bd: { type: String, default: "border-b border-color-3" },
    p: { type: String, default: "" },
    m: { type: String, default: "" },
    hidden: { type: Boolean, default: !1 },
    customClass: { type: String, default: "" },
    customStyle: { type: [String, Object], default: "" },
    zIndex: { type: [String, Number], default: void 0 },
    drawer: Boolean,
    menu: Boolean,
    overflowActions: { type: Array, default: () => [] },
    rtl: { type: Boolean, default: Ae.value },
    dense: Boolean,
    collapseOnScroll: Boolean
  },
  setup(e) {
    const n = e, t = pe("layout", null), l = M(null), o = M(0);
    function s() {
      l.value && (o.value = l.value.getBoundingClientRect().height, t && t.register("appBar", n.id, {
        height: o.value,
        dense: n.dense
      }));
    }
    Ve(() => {
      s();
      const I = new ResizeObserver(s);
      l.value && I.observe(l.value), n.collapseOnScroll && window.addEventListener("scroll", k, { passive: !0 }), Be(() => {
        I.disconnect(), n.collapseOnScroll && window.removeEventListener("scroll", k), t && t.unregister("appBar", n.id);
      });
    });
    let x = 0;
    const b = M("");
    function k() {
      const I = window.scrollY, Y = I - x;
      x = I, I > 0 && Y > 0 ? b.value = "-translate-y-12 opacity-95" : b.value = "";
    }
    const z = i(() => n.rtl ? ["actions", "nav", "prepend"] : ["prepend", "nav", "actions"]), h = i(() => n.rtl ? "flex-row-reverse" : "flex-row"), m = i(() => n.rtl ? "mr-2" : ""), d = i(() => n.rtl ? "mr-2" : "ml-2"), c = i(() => {
      const I = n.titleAlign;
      return n.rtl ? {
        center: "justify-center text-center w-full",
        left: "justify-end text-right w-full",
        right: ""
      }[I] : {
        center: "justify-center text-center w-full",
        right: "justify-end text-right w-full",
        left: ""
      }[I];
    }), f = i(
      () => n.rtl ? "hidden md:flex md:mr-6 md:space-x-4 items-center" : "hidden md:flex md:ml-6 md:space-x-4 items-center"
    ), C = i(() => n.rtl ? "space-x-2 space-x-reverse" : "space-x-2"), w = i(() => n.rtl ? "left-0" : "right-0"), $ = M(!1), S = () => $.value = !$.value, F = i(() => n.shadow ? n.shadow : n.elevation ? `shadow-${n.elevation}` : ""), N = i(() => typeof n.zIndex == "string" && n.zIndex.startsWith("z-") ? n.zIndex : "z-30"), A = i(() => typeof n.zIndex == "number" ? { zIndex: n.zIndex } : void 0), W = i(() => n.dense ? "py-1" : ""), J = M(!1);
    return (I, Y) => {
      const oe = be("Icon");
      return r(), a("header", {
        ref_key: "el",
        ref: l,
        "data-component": "appbar",
        dir: e.rtl ? "rtl" : "ltr",
        class: v([
          "w-full flex flex-col transition-transform duration-300 bg-color-1",
          N.value,
          e.fixed ? "fixed top-0 left-0" : e.floating ? "absolute top-0 left-1/2 -translate-x-1/2 rounded-xl shadow-lg" : "relative",
          F.value,
          e.hidden ? "hidden" : "",
          e.color,
          e.bd,
          e.p,
          e.m,
          e.customClass,
          W.value,
          b.value
        ]),
        style: de([e.customStyle, A.value])
      }, [
        g("div", {
          class: v(["w-full flex items-center justify-between", h.value, e.dense ? "h-12" : "h-16"])
        }, [
          (r(!0), a(ae, null, ue(z.value, (E) => (r(), a(ae, { key: E }, [
            E === "prepend" ? (r(), a("div", {
              key: 0,
              class: v(["flex items-center", m.value])
            }, [
              D(I.$slots, "prepend"),
              e.drawer || e.menu ? (r(), a("button", {
                key: 0,
                onClick: Y[0] || (Y[0] = (R) => I.$emit("toggle-drawer")),
                class: "inline-flex items-center justify-center .vts-pa-2 rounded-md"
              }, [
                D(I.$slots, "drawer-icon", {}, () => [
                  G(oe, {
                    name: "bars-3",
                    size: "24",
                    color: "text-gray-600"
                  })
                ])
              ])) : y("", !0),
              g("div", {
                class: v(["flex-shrink-0 flex items-center", d.value, c.value])
              }, [
                D(I.$slots, "title", {}, () => [
                  g("span", {
                    class: v(["font-semibold", e.titleClass])
                  }, V(e.title), 3)
                ])
              ], 2)
            ], 2)) : y("", !0),
            E === "nav" ? (r(), a("nav", {
              key: 1,
              class: v(f.value)
            }, [
              D(I.$slots, "nav")
            ], 2)) : y("", !0),
            E === "actions" ? (r(), a("div", {
              key: 2,
              class: v(["flex items-center", C.value])
            }, [
              D(I.$slots, "actions"),
              e.overflowActions.length ? (r(), a("div", ql, [
                g("button", {
                  onClick: S,
                  class: "p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                }, [
                  G(oe, {
                    name: "ellipsis-vertical",
                    size: "20"
                  })
                ]),
                $.value ? (r(), a("div", {
                  key: 0,
                  class: v(["absolute vts-mt-2 w-40 rounded shadow-lg z-50 bg-color-1", w.value])
                }, [
                  g("ul", null, [
                    (r(!0), a(ae, null, ue(e.overflowActions, (R, Z) => (r(), a("li", { key: Z }, [
                      g("button", {
                        onClick: R.onClick,
                        class: "w-full flex gap-2 text-left px-4 py-2 hover:bg-color-2"
                      }, [
                        R.icon ? (r(), a("span", Kl, [
                          G(oe, {
                            name: R.icon
                          }, null, 8, ["name"])
                        ])) : y("", !0),
                        ve(" " + V(R.label), 1)
                      ], 8, Wl)
                    ]))), 128))
                  ])
                ], 2)) : y("", !0)
              ])) : y("", !0),
              D(I.$slots, "append")
            ], 2)) : y("", !0)
          ], 64))), 128))
        ], 2),
        Ie(g("div", Gl, [
          g("div", Yl, [
            D(I.$slots, "mobile-nav")
          ])
        ], 512), [
          [je, J.value]
        ])
      ], 14, Fl);
    };
  }
}, Jl = {
  __name: "Badge",
  props: {
    content: {
      type: [String, Number],
      default: ""
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "secondary", "success", "error", "warning", "info", "outline"].includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ["xs", "sm", "md", "lg", "xl"].includes(e)
    },
    rounded: {
      type: String,
      default: "md",
      validator: (e) => ["none", "sm", "md", "lg", "full", "pill"].includes(e)
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "solid",
      validator: (e) => ["solid", "outline"].includes(e)
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: (e) => ["left", "right"].includes(e)
    },
    dot: {
      type: Boolean,
      default: !1
    },
    dotColor: {
      type: String,
      default: "",
      validator: (e) => ["", "primary", "secondary", "success", "error", "warning", "info"].includes(e)
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    closeable: {
      type: Boolean,
      default: !1
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    uppercase: {
      type: Boolean,
      default: !1
    },
    containerClass: {
      type: String,
      default: ""
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["click", "close"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => {
      if (t.rounded === "full") {
        const w = {
          xs: "w-[18px] h-[18px] text-[10px] p-0",
          sm: "w-[20px] h-[20px] text-[10px] p-0",
          md: "w-[24px] h-[24px] text-xs p-0",
          lg: "w-[28px] h-[28px] text-sm p-0",
          xl: "w-[32px] h-[32px] text-base p-0"
        };
        return w[t.size] || w.md;
      }
      const C = {
        xs: "px-1.5 py-0.5 text-[10px] gap-0.5",
        sm: "px-2 py-0.5 text-xs gap-1",
        md: "px-2.5 py-1 text-sm gap-1",
        lg: "px-3 py-1.5 text-base gap-1.5",
        xl: "px-4 py-2 text-lg gap-2"
      };
      return C[t.size] || C.md;
    }), s = i(() => {
      const C = {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 20
      };
      return C[t.size] || C.md;
    }), x = i(() => {
      const C = {
        xs: "w-1 h-1",
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
        xl: "w-3 h-3"
      };
      return C[t.size] || C.md;
    }), b = i(() => {
      const C = {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5",
        md: "w-4 h-4",
        lg: "w-5 h-5",
        xl: "w-6 h-6"
      };
      return C[t.size] || C.md;
    }), k = i(() => {
      const C = {
        default: "bg-color-3 text-ui-text-color",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        error: "bg-error text-white",
        warning: "bg-warning text-white",
        info: "bg-info text-white",
        outline: "bg-transparent text-ui-text-color border border-color"
      };
      return C[t.variant] || C.default;
    }), z = i(() => {
      const C = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        pill: "rounded-full"
      };
      return C[t.rounded] || C.md;
    }), h = i(() => {
      if (!t.bordered) return "";
      const C = {
        default: "ring-color-4",
        primary: "ring-primary",
        secondary: "ring-secondary",
        success: "ring-success",
        error: "ring-error",
        warning: "ring-warning",
        info: "ring-info",
        outline: "ring-color"
      };
      return C[t.variant] || C.default;
    }), m = i(() => t.dotColor && {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      error: "bg-error",
      warning: "bg-warning",
      info: "bg-info"
    }[t.dotColor] || "bg-current"), d = i(() => t.uppercase ? "uppercase" : ""), c = (C) => {
      t.clickable && l("click", C);
    }, f = (C) => {
      l("close", C);
    };
    return (C, w) => {
      const $ = be("Icon");
      return r(), a("span", {
        class: v([
          "inline-flex items-center justify-center font-medium transition-all",
          o.value,
          k.value,
          z.value,
          e.bordered && "ring-1 ring-offset-1",
          h.value,
          e.clickable && "cursor-pointer hover:opacity-80",
          e.dot && "pl-1.5",
          e.containerClass
        ]),
        style: de(e.containerStyle),
        onClick: c
      }, [
        e.dot ? (r(), a("span", {
          key: 0,
          class: v([
            "rounded-full mr-1.5",
            x.value,
            m.value
          ])
        }, null, 2)) : y("", !0),
        e.icon && e.iconPosition === "left" ? (r(), Q($, {
          key: 1,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: v(["flex-shrink-0", e.content && "mr-1"])
        }, null, 8, ["name", "type", "size", "class"])) : y("", !0),
        e.content || C.$slots.default ? (r(), a("span", {
          key: 2,
          class: v(d.value)
        }, [
          D(C.$slots, "default", {}, () => [
            ve(V(e.content), 1)
          ], !0)
        ], 2)) : y("", !0),
        e.icon && e.iconPosition === "right" ? (r(), Q($, {
          key: 3,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: v(["flex-shrink-0", e.content && "ml-1"])
        }, null, 8, ["name", "type", "size", "class"])) : y("", !0),
        e.closeable ? (r(), a("button", {
          key: 4,
          type: "button",
          onClick: ee(f, ["stop"]),
          class: v([
            "ml-1 flex-shrink-0 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
            b.value
          ]),
          "aria-label": "Remove badge"
        }, [
          G($, {
            name: "x-mark",
            type: e.iconType,
            size: s.value
          }, null, 8, ["type", "size"])
        ], 2)) : y("", !0)
      ], 6);
    };
  }
}, Ql = /* @__PURE__ */ ge(Jl, [["__scopeId", "data-v-6732e204"]]), Zl = {
  key: 0,
  class: "flex-shrink-0"
}, _l = {
  key: 0,
  fill: "currentColor",
  viewBox: "0 0 20 20",
  class: "h-5 w-5"
}, en = {
  key: 1,
  fill: "currentColor",
  viewBox: "0 0 20 20",
  class: "h-5 w-5"
}, tn = {
  key: 2,
  fill: "currentColor",
  viewBox: "0 0 20 20",
  class: "h-5 w-5"
}, ln = {
  key: 3,
  fill: "currentColor",
  viewBox: "0 0 20 20",
  class: "h-5 w-5"
}, nn = { class: "flex-1 min-w-0" }, rn = {
  key: 1,
  class: "flex items-center gap-2"
}, an = {
  __name: "Banner",
  props: {
    modelValue: { type: Boolean, default: !0 },
    title: { type: String, default: "" },
    message: { type: String, default: "" },
    variant: { type: String, default: "default" },
    // default | info | success | warning | error
    icon: { type: String, default: "" },
    // info | success | warning | error | custom
    closeable: { type: Boolean, default: !0 },
    sticky: { type: Boolean, default: !1 },
    position: { type: String, default: "top" },
    // top | bottom
    timeout: { type: Number, default: 0 },
    // Auto-dismiss after X ms (0 = no auto-dismiss)
    showProgress: { type: Boolean, default: !1 },
    rounded: { type: String, default: () => we("Banner", "rounded") },
    // none | sm | md | lg
    elevation: { type: Boolean, default: !0 },
    outlined: { type: Boolean, default: !1 },
    dense: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "close", "dismiss"],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = M(l.modelValue), x = M(100);
    let b = null, k = null;
    ye(() => l.modelValue, (N) => {
      s.value = N, N && l.timeout && S();
    });
    const z = i(() => l.icon), h = i(() => {
      const N = [
        "w-full relative overflow-hidden",
        l.sticky ? "sticky z-50" : "relative"
      ];
      l.sticky && N.push(l.position === "bottom" ? "bottom-0" : "top-0");
      const A = {
        default: "bg-background border-border text-foreground",
        info: "bg-blue-50 border-blue-200 text-blue-900",
        success: "bg-green-50 border-green-200 text-green-900",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
        error: "bg-red-50 border-red-200 text-red-900"
      };
      return N.push(A[l.variant]), l.outlined ? N.push("border-t-4") : N.push("border-t"), l.elevation && N.push("shadow-md"), N.push($e[l.rounded]), N;
    }), m = i(() => [
      "flex items-start gap-3",
      l.dense ? "p-3" : "p-4"
    ]), d = i(() => [
      "font-semibold",
      l.dense ? "text-sm" : "text-base"
    ]), c = i(() => [
      l.dense ? "text-xs" : "text-sm",
      "mt-1"
    ]), f = i(() => [
      "flex-shrink-0 rounded-md p-1.5",
      "hover:bg-black/5 dark:hover:bg-white/10",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "transition-colors"
    ]), C = i(() => [
      "absolute bottom-0 left-0 h-1 transition-all duration-100",
      {
        default: "bg-gray-400",
        info: "bg-blue-400",
        success: "bg-green-400",
        warning: "bg-yellow-400",
        error: "bg-red-400"
      }[l.variant]
    ]), w = i(() => ({
      width: `${x.value}%`
    })), $ = () => {
      s.value = !1, o("update:modelValue", !1), o("close"), F();
    }, S = () => {
      if (!l.timeout) return;
      F();
      const N = Date.now(), A = l.timeout;
      l.showProgress && (k = setInterval(() => {
        const W = Date.now() - N;
        x.value = Math.max(0, 100 - W / A * 100);
      }, 10)), b = setTimeout(() => {
        $(), o("dismiss");
      }, l.timeout);
    }, F = () => {
      b && (clearTimeout(b), b = null), k && (clearInterval(k), k = null), x.value = 100;
    };
    return Ve(() => {
      s.value && l.timeout && S();
    }), Be(() => {
      F();
    }), n({ close: $ }), (N, A) => (r(), Q(ke, {
      "enter-active-class": "transition ease-out duration-300",
      "enter-from-class": "transform translate-y-[-100%] opacity-0",
      "enter-to-class": "transform translate-y-0 opacity-100",
      "leave-active-class": "transition ease-in duration-200",
      "leave-from-class": "transform translate-y-0 opacity-100",
      "leave-to-class": "transform translate-y-[-100%] opacity-0"
    }, {
      default: te(() => [
        s.value ? (r(), a("div", {
          key: 0,
          class: v(h.value),
          role: "alert"
        }, [
          g("div", {
            class: v(m.value)
          }, [
            N.$slots.prepend || z.value ? (r(), a("div", Zl, [
              D(N.$slots, "prepend", {}, () => [
                z.value === "info" ? (r(), a("svg", _l, [...A[0] || (A[0] = [
                  g("path", {
                    "fill-rule": "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : z.value === "success" ? (r(), a("svg", en, [...A[1] || (A[1] = [
                  g("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : z.value === "warning" ? (r(), a("svg", tn, [...A[2] || (A[2] = [
                  g("path", {
                    "fill-rule": "evenodd",
                    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : z.value === "error" ? (r(), a("svg", ln, [...A[3] || (A[3] = [
                  g("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : y("", !0)
              ], !0)
            ])) : y("", !0),
            g("div", nn, [
              e.title || N.$slots.title ? (r(), a("div", {
                key: 0,
                class: v(d.value)
              }, [
                D(N.$slots, "title", {}, () => [
                  ve(V(e.title), 1)
                ], !0)
              ], 2)) : y("", !0),
              e.message || N.$slots.default ? (r(), a("div", {
                key: 1,
                class: v(c.value)
              }, [
                D(N.$slots, "default", {}, () => [
                  ve(V(e.message), 1)
                ], !0)
              ], 2)) : y("", !0)
            ]),
            N.$slots.actions || e.closeable ? (r(), a("div", rn, [
              D(N.$slots, "actions", {}, void 0, !0),
              e.closeable ? (r(), a("button", {
                key: 0,
                onClick: $,
                class: v(f.value),
                "aria-label": "Close banner"
              }, [...A[4] || (A[4] = [
                g("svg", {
                  class: "h-4 w-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])], 2)) : y("", !0)
            ])) : y("", !0)
          ], 2),
          e.timeout && e.showProgress ? (r(), a("div", {
            key: 0,
            class: v(C.value),
            style: de(w.value)
          }, null, 6)) : y("", !0)
        ], 2)) : y("", !0)
      ]),
      _: 3
    }));
  }
}, on = /* @__PURE__ */ ge(an, [["__scopeId", "data-v-3396a451"]]), sn = ["aria-label"], un = {
  key: 0,
  class: "flex items-center"
}, dn = ["href"], cn = { key: 1 }, fn = ["href", "onClick"], gn = ["aria-current"], mn = { key: 1 }, pn = {
  __name: "Breadcrumbs",
  props: {
    items: {
      type: Array,
      required: !0,
      validator: (e) => e.every((n) => n.label)
    },
    separator: {
      type: String,
      default: "/"
    },
    separatorIcon: {
      type: String,
      default: ""
    },
    showHome: {
      type: Boolean,
      default: !1
    },
    homeIcon: {
      type: String,
      default: "home"
    },
    homeHref: {
      type: String,
      default: "/"
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ["sm", "md", "lg"].includes(e)
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "muted", "bold"].includes(e)
    },
    truncate: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: "Breadcrumb"
    },
    containerClass: {
      type: String,
      default: ""
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["click", "item-click"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => {
      const h = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return h[t.size] || h.md;
    }), s = i(() => {
      const h = {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3"
      };
      return h[t.size] || h.md;
    }), x = i(() => {
      const h = {
        default: "text-ui-text-secondary hover:underline",
        muted: "text-ui-text-secondary/70 hover:text-ui-text-secondary hover:underline",
        bold: "text-ui-text-color font-medium hover:underline"
      };
      return h[t.variant] || h.default;
    }), b = i(() => {
      const h = {
        default: "text-ui-text-color font-medium",
        muted: "text-ui-text-secondary",
        bold: "text-ui-text-color font-semibold"
      };
      return h[t.variant] || h.default;
    }), k = i(() => "text-ui-text-secondary/50"), z = (h, m) => {
      h.disabled || (l("item-click", { item: h, index: m }), l("click", { item: h, index: m }));
    };
    return (h, m) => {
      const d = be("Icon");
      return r(), a("nav", {
        "aria-label": e.ariaLabel,
        class: v([
          "flex items-center",
          e.containerClass
        ]),
        style: de(e.containerStyle)
      }, [
        g("ol", {
          class: v([
            "flex items-center flex-wrap",
            o.value,
            s.value
          ])
        }, [
          e.showHome ? (r(), a("li", un, [
            g("a", {
              href: e.homeHref,
              onClick: m[0] || (m[0] = ee((c) => z({ label: "Home", href: e.homeHref, icon: e.homeIcon }, 0), ["prevent"])),
              class: v([
                "inline-flex items-center transition-colors",
                x.value,
                "hover:text-primary"
              ])
            }, [
              G(d, {
                name: e.homeIcon,
                size: 16,
                color: "text-current"
              }, null, 8, ["name"])
            ], 10, dn),
            g("span", {
              class: v(["mx-2", k.value])
            }, [
              e.separatorIcon ? (r(), Q(d, {
                key: 0,
                name: e.separatorIcon,
                size: 12,
                color: "text-current"
              }, null, 8, ["name"])) : (r(), a("span", cn, V(e.separator), 1))
            ], 2)
          ])) : y("", !0),
          (r(!0), a(ae, null, ue(e.items, (c, f) => (r(), a("li", {
            key: f,
            class: "flex items-center"
          }, [
            D(h.$slots, "item", {
              item: c,
              index: f,
              isLast: f === e.items.length - 1
            }, () => [
              f !== e.items.length - 1 && !c.disabled ? (r(), a("a", {
                key: 0,
                href: c.href || "#",
                onClick: ee((C) => z(c, f), ["prevent"]),
                class: v([
                  "inline-flex items-center gap-2 transition-colors",
                  x.value,
                  "hover:text-primary",
                  c.class
                ])
              }, [
                c.icon ? (r(), Q(d, {
                  key: 0,
                  name: c.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : y("", !0),
                g("span", null, V(c.label), 1)
              ], 10, fn)) : (r(), a("span", {
                key: 1,
                class: v([
                  "inline-flex items-center gap-2",
                  b.value,
                  c.disabled && "opacity-50 cursor-not-allowed",
                  c.class
                ]),
                "aria-current": f === e.items.length - 1 ? "page" : void 0
              }, [
                c.icon ? (r(), Q(d, {
                  key: 0,
                  name: c.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : y("", !0),
                g("span", {
                  class: v(e.truncate && "truncate max-w-[200px]")
                }, V(c.label), 3)
              ], 10, gn))
            ], !0),
            f !== e.items.length - 1 ? (r(), a("span", {
              key: 0,
              class: v(["mx-2", k.value]),
              "aria-hidden": "true"
            }, [
              D(h.$slots, "separator", {}, () => [
                e.separatorIcon ? (r(), Q(d, {
                  key: 0,
                  name: e.separatorIcon,
                  size: 12,
                  color: "text-current"
                }, null, 8, ["name"])) : (r(), a("span", mn, V(e.separator), 1))
              ], !0)
            ], 2)) : y("", !0)
          ]))), 128))
        ], 2)
      ], 14, sn);
    };
  }
}, vn = /* @__PURE__ */ ge(pn, [["__scopeId", "data-v-cf675483"]]), yn = ["dir"], bn = {
  key: 0,
  class: "rr"
}, hn = {
  __name: "Card",
  props: {
    //main card props
    lang: { type: String, default: "" },
    labels: { type: [String, Object], default: () => ({
      en: {
        title: "",
        body: "",
        footer: ""
      },
      dv: {
        title: "",
        body: "",
        footer: ""
      }
    }) },
    id: { type: String, default: "" },
    width: { type: String, default: "w-[300px] md:w-full" },
    title: { type: [String, Object], default: "" },
    cardClass: { type: [String, Object], default: "" },
    overflow: { type: String, default: "overflow-auto" },
    bg: { type: String, default: "ui-bg-color" },
    border: { type: String, default: "ui-border-color" },
    rounded: { type: String, default: () => we("Card", "rounded") },
    shadow: { type: String, default: "" },
    dir: { type: String, default: "" },
    item: { type: Object, default: null },
    //body props
    bodyClass: { type: String, default: "overflow-y-auto " },
    margin: { type: String, default: "mx-0 my-6" },
    padding: { type: String, default: "px-6 py-4" },
    textColor: { type: String, default: "ui-text-color" },
    textSize: { type: String, default: "text-base" },
    // header props
    headerClass: { type: String, default: "" },
    titleClass: { type: String, default: "" },
    headerBg: { type: String, default: "" },
    headerText: { type: String, default: "ui-text-color" },
    headerTextSize: { type: String, default: "text-lg font-semibold" },
    headerBd: { type: String, default: "" },
    headerMargin: { type: String, default: "" },
    headerPadding: { type: String, default: "px-6 pt-4" },
    //footer props
    footerClass: { type: String, default: "" },
    footerBg: { type: String, default: "" },
    footerText: { type: String, default: "ui-text-color" },
    footerTextSize: { type: String, default: "" },
    footerBd: { type: String, default: "" },
    footerMargin: { type: String, default: "" },
    footerPadding: { type: String, default: "px-6 py-4" }
  },
  setup(e) {
    const { language: n } = pe("i18n", { language: M("en"), t: (k) => k, setLanguage: () => {
    } }), t = e, l = i(() => {
      let k = "";
      return t.dir == "rtl" || t.lang == "dv" ? k = "rtl" : t.dir == "ltr" || t.lang == "en" ? k = "ltr" : k = "", k;
    }), o = i(() => {
      let k = "";
      return t.lang != "" ? k = t.lang : t.dir == "rtl" ? k = "dv" : t.dir == "ltr" ? k = "en" : k = n.value, console.log("selectLanguage in Card222:", k), k === "dv" ? "dv" : "en";
    });
    Ge("parentDir", l.value), Ge("parentLang", o.value);
    const s = i(() => ({
      id: t.id,
      dir: l.value,
      lang: o.value
    })), x = i(() => o.value == "dv" ? "faruma" : ""), b = i(() => Ye(t.labels, o.value, ""));
    return (k, z) => (r(), a("div", {
      dir: l.value !== "" ? l.value : "",
      class: v([x.value, e.margin, e.border, q($e)[e.rounded], e.shadow, e.cardClass, e.width, e.bg, "relative"])
    }, [
      k.$slots.header || e.title || e.labels && (e.labels.en.title !== "" || e.labels.dv.title !== "") ? (r(), a("div", bn, [
        D(k.$slots, "header", {}, () => [
          g("div", {
            class: v([e.headerClass, e.headerBg, e.headerPadding, q(Qt)[e.rounded], e.headerBd, e.headerText, "overflow-hidden"])
          }, [
            g("h3", {
              class: v([e.titleClass, e.headerTextSize])
            }, V(b.value.title ? b.value.title : t.title), 3)
          ], 2)
        ])
      ])) : y("", !0),
      g("div", {
        class: v([e.bodyClass, e.padding, e.textColor, e.textSize])
      }, [
        D(k.$slots, "default", { attrs: s.value }, () => [
          ve(V(b.value.body ? b.value.body : ""), 1)
        ])
      ], 2),
      k.$slots.footer ? (r(), a("div", {
        key: 1,
        class: v([e.footerClass, e.footerBg, e.footerText, e.footerTextSize, e.footerBd, e.footerMargin, e.footerPadding, q(Zt)[e.rounded]])
      }, [
        D(k.$slots, "footer", {}, () => [
          ve(V(b.value.footer ? b.value.footer : ""), 1)
        ])
      ], 2)) : y("", !0)
    ], 10, yn));
  }
}, Ue = M(null);
function xn() {
  function e(l) {
    const o = typeof l == "string" ? { message: l } : l;
    return new Promise((s) => {
      Ue.value = { options: o, resolve: s };
    });
  }
  function n() {
    Ue.value?.resolve(!0), Ue.value = null;
  }
  function t() {
    Ue.value?.resolve(!1), Ue.value = null;
  }
  return { pending: Ue, confirm: e, accept: n, dismiss: t };
}
const wn = { class: "px-3 pt-6 pb-2 flex flex-col items-center text-center gap-3" }, kn = {
  key: 0,
  class: "text-base font-semibold leading-snug"
}, Sn = { class: "text-sm ui-text-secondary leading-relaxed" }, Cn = { class: "flex justify-end gap-2 px-3 py-4" }, $n = /* @__PURE__ */ Te({
  __name: "ConfirmDialog",
  setup(e) {
    const { pending: n, accept: t, dismiss: l } = xn(), o = i(() => !!n.value), s = i(() => n.value?.options.variant ?? "danger"), x = i(() => ({
      danger: "trash",
      warning: "exclamation-triangle",
      info: "information-circle"
    })[s.value] ?? "trash"), b = i(() => ({
      danger: "text-red-500",
      warning: "text-yellow-500",
      info: "text-blue-500"
    })[s.value] ?? "text-red-500"), k = i(() => {
      const h = {
        danger: "bg-red-100 dark:bg-red-900/30",
        warning: "bg-yellow-100 dark:bg-yellow-900/30",
        info: "bg-blue-100 dark:bg-blue-900/30"
      };
      return h[s.value] ?? h.danger;
    }), z = i(() => ({ danger: "danger", warning: "warning", info: "primary" })[s.value] ?? "danger");
    return (h, m) => {
      const d = be("Icon"), c = be("Button"), f = be("Overlay");
      return r(), Q(f, {
        "model-value": o.value,
        persistent: !1,
        width: "md:w-[420px] w-[90vw]",
        "z-index": "z-[200]",
        "onUpdate:modelValue": q(l)
      }, {
        footer: te(() => [
          g("div", Cn, [
            G(c, {
              label: q(n)?.options.cancelLabel ?? "Cancel",
              variant: "outlined",
              color: "gray",
              "prepend-icon": "x-mark",
              size: "sm",
              onClick: q(l)
            }, null, 8, ["label", "onClick"]),
            G(c, {
              label: q(n)?.options.confirmLabel ?? "Confirm",
              color: z.value,
              "prepend-icon": "check",
              size: "sm",
              onClick: q(t)
            }, null, 8, ["label", "color", "onClick"])
          ])
        ]),
        default: te(() => [
          g("div", wn, [
            g("div", {
              class: v(["flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0", k.value])
            }, [
              G(d, {
                name: x.value,
                size: 28,
                color: b.value
              }, null, 8, ["name", "color"])
            ], 2),
            q(n)?.options.title ? (r(), a("h3", kn, V(q(n).options.title), 1)) : y("", !0),
            g("p", Sn, V(q(n)?.options.message), 1)
          ])
        ]),
        _: 1
      }, 8, ["model-value", "onUpdate:modelValue"]);
    };
  }
}), zn = ["aria-orientation"], Bn = {
  __name: "Divider",
  props: {
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical"].includes(e)
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "dashed", "dotted", "thick", "gradient"].includes(e)
    },
    thickness: {
      type: String,
      default: "thin",
      validator: (e) => ["thin", "medium", "thick"].includes(e)
    },
    spacing: {
      type: String,
      default: "md",
      validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e)
    },
    position: {
      type: String,
      default: "center",
      validator: (e) => ["left", "center", "right"].includes(e)
    },
    text: {
      type: String,
      default: ""
    },
    textSize: {
      type: String,
      default: "sm",
      validator: (e) => ["xs", "sm", "base", "lg"].includes(e)
    },
    color: {
      type: String,
      default: ""
    },
    inset: {
      type: Boolean,
      default: !1
    },
    containerClass: {
      type: String,
      default: ""
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const n = e, t = nt(), l = i(() => !!(n.text || t.default)), o = i(() => n.orientation === "vertical" ? "flex-col h-full" : "flex-row w-full"), s = i(() => {
      if (n.orientation === "vertical") {
        const m = {
          none: "",
          xs: "mx-1",
          sm: "mx-2",
          md: "mx-4",
          lg: "mx-6",
          xl: "mx-8"
        };
        return m[n.spacing] || m.md;
      } else {
        const m = {
          none: "",
          xs: "my-1",
          sm: "my-2",
          md: "my-4",
          lg: "my-6",
          xl: "my-8"
        };
        return m[n.spacing] || m.md;
      }
    }), x = i(() => `${n.inset ? n.orientation === "vertical" ? "my-4" : "mx-4" : ""}`), b = i(() => {
      if (n.orientation === "vertical") {
        const m = {
          thin: "w-px",
          medium: "w-0.5",
          thick: "w-1"
        };
        return m[n.thickness] || m.thin;
      } else {
        const m = {
          thin: "h-px",
          medium: "h-0.5",
          thick: "h-1"
        };
        return m[n.thickness] || m.thin;
      }
    }), k = i(() => {
      const m = {
        default: "bg-color-3 border-color-3",
        dashed: "border-color-3 border-dashed",
        dotted: "border-color-3 border-dotted",
        thick: "bg-color-3 border-color-3",
        gradient: "bg-gradient-to-r from-transparent via-color-3 to-transparent"
      }, d = m[n.variant] || m.default;
      if (n.variant === "dashed" || n.variant === "dotted") {
        const c = n.orientation === "vertical" ? "border-l" : "border-t";
        return `${d} ${c}`;
      }
      return d;
    }), z = i(() => n.color ? n.variant === "dashed" || n.variant === "dotted" ? { borderColor: n.color } : { backgroundColor: n.color } : {}), h = i(() => {
      const m = n.orientation === "vertical" ? "py-2" : "px-4", d = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg"
      };
      return `${m} ${d[n.textSize] || d.sm} text-ui-text-secondary font-medium`;
    });
    return (m, d) => (r(), a("div", {
      class: v([
        "flex items-center",
        o.value,
        s.value,
        e.containerClass
      ]),
      style: de(e.containerStyle),
      role: "separator",
      "aria-orientation": e.orientation
    }, [
      l.value && e.orientation === "horizontal" && e.position === "left" ? (r(), a("div", {
        key: 0,
        class: v(["flex-shrink-0", h.value])
      }, [
        D(m.$slots, "default", {}, () => [
          ve(V(e.text), 1)
        ], !0)
      ], 2)) : y("", !0),
      g("div", {
        class: v([
          "flex-grow",
          x.value,
          b.value,
          k.value,
          e.orientation === "vertical" && "h-full"
        ]),
        style: de(z.value)
      }, null, 6),
      l.value && e.orientation === "horizontal" && e.position === "center" ? (r(), a("div", {
        key: 1,
        class: v(["flex-shrink-0", h.value])
      }, [
        D(m.$slots, "default", {}, () => [
          ve(V(e.text), 1)
        ], !0)
      ], 2)) : y("", !0),
      l.value && e.orientation === "horizontal" ? (r(), a("div", {
        key: 2,
        class: v([
          "flex-grow",
          x.value,
          b.value,
          k.value
        ]),
        style: de(z.value)
      }, null, 6)) : y("", !0),
      l.value && e.orientation === "horizontal" && e.position === "right" ? (r(), a("div", {
        key: 3,
        class: v(["flex-shrink-0", h.value])
      }, [
        D(m.$slots, "default", {}, () => [
          ve(V(e.text), 1)
        ], !0)
      ], 2)) : y("", !0)
    ], 14, zn));
  }
}, In = /* @__PURE__ */ ge(Bn, [["__scopeId", "data-v-3b94e81d"]]), Vn = ["onClick"], Tn = {
  __name: "Dropdown",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { type: String, default: "Menu" },
    items: { type: Array, default: () => [] },
    width: { type: [String, Number], default: "auto" },
    minWidth: { type: [String, Number], default: "200" },
    maxHeight: { type: [String, Number], default: "400" },
    align: { type: String, default: "left" },
    // left | right | center
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: 8 },
    openOnHover: { type: Boolean, default: !1 },
    closeOnContentClick: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    elevation: { type: Number, default: 8 },
    rounded: { type: String, default: () => we("Dropdown", "rounded") },
    // none | sm | md | lg | xl
    dense: { type: Boolean, default: !1 },
    color: { type: String, default: () => we("Dropdown", "color") },
    variant: { type: String, default: "contained" },
    // contained | outlined | text | tonal | plain
    size: { type: String, default: () => we("Dropdown", "size") },
    // xs | sm | md | lg | xl
    icon: { type: String, default: "" }
  },
  emits: ["update:modelValue", "select", "opened", "closed"],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = M(l.modelValue), x = M(null), b = M(null), k = M({}), z = i(() => {
      const A = Ke[l.color] || Ke.gray;
      return A[l.variant] || A.contained;
    }), h = i(() => [
      "inline-flex items-center justify-center font-medium transition-all cursor-pointer select-none",
      l.icon ? "" : yt[l.size],
      $e[l.rounded],
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      z.value,
      l.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    ]), m = i(() => [
      "fixed z-50 ui-bg-color",
      "border border-color shadow-lg",
      $e[l.rounded],
      "p-1.5",
      "overflow-auto"
    ]), d = i(() => [
      "relative flex cursor-pointer select-none items-center",
      $e[l.rounded],
      "px-2.5 py-1.5 text-sm outline-none transition-colors",
      "hover:bg-color-1 ui-text-color",
      "focus:bg-color-2",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    ]);
    ye(() => l.modelValue, (A) => {
      s.value = A, A && Pe(() => $());
    });
    const c = () => {
      l.disabled || (s.value = !s.value, o("update:modelValue", s.value), s.value ? (o("opened"), Pe(() => $())) : o("closed"));
    }, f = () => {
      l.disabled || s.value || (s.value = !0, o("update:modelValue", !0), o("opened"), Pe(() => $()));
    }, C = () => {
      s.value && (s.value = !1, o("update:modelValue", !1), o("closed"));
    }, w = (A) => {
      o("select", A), l.closeOnContentClick && C();
    }, $ = () => {
      if (!x.value || !b.value) return;
      const A = x.value.getBoundingClientRect(), W = b.value.getBoundingClientRect(), J = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      let I = A.bottom + l.offsetY, Y = A.left + l.offsetX;
      const oe = I + W.height > J.height, E = Y + W.width > J.width;
      oe && (I = A.top - W.height - l.offsetY), l.align === "right" ? Y = A.right - W.width + l.offsetX : l.align === "center" && (Y = A.left + A.width / 2 - W.width / 2 + l.offsetX), E && (Y = J.width - W.width - 8), Y < 8 && (Y = 8);
      const R = l.width === "auto" ? `${Math.max(A.width, parseInt(l.minWidth))}px` : typeof l.width == "number" ? `${l.width}px` : l.width;
      k.value = {
        position: "fixed",
        top: `${I}px`,
        left: `${Y}px`,
        width: R,
        minWidth: `${l.minWidth}px`,
        maxHeight: `${l.maxHeight}px`,
        zIndex: 50 + l.elevation
      };
    }, S = (A) => {
      x.value && !x.value.contains(A.target) && b.value && !b.value.contains(A.target) && C();
    }, F = () => {
      l.openOnHover && f();
    }, N = () => {
      l.openOnHover && C();
    };
    return Ve(() => {
      document.addEventListener("click", S), window.addEventListener("scroll", $, !0), window.addEventListener("resize", $), l.openOnHover && x.value && (x.value.addEventListener("mouseenter", F), x.value.addEventListener("mouseleave", N));
    }), Be(() => {
      document.removeEventListener("click", S), window.removeEventListener("scroll", $, !0), window.removeEventListener("resize", $), l.openOnHover && x.value && (x.value.removeEventListener("mouseenter", F), x.value.removeEventListener("mouseleave", N));
    }), n({ open: f, close: C, toggle: c }), (A, W) => (r(), a(ae, null, [
      g("div", {
        ref_key: "triggerRef",
        ref: x,
        onClick: c,
        class: "inline-block"
      }, [
        D(A.$slots, "trigger", {}, () => [
          g("button", {
            class: v(h.value)
          }, [
            D(A.$slots, "label", {}, () => [
              ve(V(e.label), 1)
            ], !0),
            (r(), a("svg", {
              class: v(["ml-2 h-4 w-4 transition-transform", { "rotate-180": s.value }]),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...W[0] || (W[0] = [
              g("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              }, null, -1)
            ])], 2))
          ], 2)
        ], !0)
      ], 512),
      (r(), Q(Je, { to: "body" }, [
        G(ke, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: te(() => [
            s.value ? (r(), a("div", {
              key: 0,
              ref_key: "menuRef",
              ref: b,
              style: de(k.value),
              class: v(m.value)
            }, [
              D(A.$slots, "default", {}, () => [
                (r(!0), a(ae, null, ue(e.items, (J, I) => (r(), a("div", {
                  key: I,
                  onClick: (Y) => w(J),
                  class: v(d.value)
                }, V(J.label || J), 11, Vn))), 128))
              ], !0)
            ], 6)) : y("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}, Mn = /* @__PURE__ */ ge(Tn, [["__scopeId", "data-v-da7264aa"]]), Ln = ["tabindex"], An = {
  key: 0,
  class: "mr-2"
}, Pn = { class: "flex-1" }, Dn = {
  key: 1,
  class: "ml-2"
}, On = {
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    dense: { type: Boolean, default: !1 },
    lang: { type: String, default: "" },
    dir: { type: String, default: "" },
    rounded: {
      type: String,
      default: "lg"
      // none | sm | md | lg | xl | full
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
      // xs | sm | md | lg | xl
    },
    prependIcon: {
      type: String,
      default: ""
    },
    appendIcon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const { language: t } = pe("i18n", { language: M("en"), t: (h) => h, setLanguage: () => {
    } }), l = {
      xs: "text-xs  px-2   py-1",
      sm: "text-xs  px-2.5 py-1.5",
      md: "text-sm  px-2.5 py-1.5",
      lg: "text-sm  px-3   py-2",
      xl: "text-base px-3  py-2.5"
    }, o = e, s = n, x = i(() => [
      "relative flex cursor-pointer select-none items-center gap-2",
      "outline-none transition-colors",
      $e[o.rounded],
      l[o.size] ?? l.md,
      o.disabled ? "pointer-events-none opacity-50" : "hover:bg-color-1 ui-text-color focus:bg-color-2",
      o.active ? "bg-color-2 ui-text-color" : ""
    ]), b = () => {
      o.disabled || s("select");
    }, k = i(() => {
      let h = "";
      return o.lang != "" ? h = o.lang : o.dir == "rtl" ? h = "dv" : o.dir == "ltr" ? h = "en" : h = t.value, console.log("selectLanguage in Card222:", h), h === "dv" ? "dv" : "en";
    });
    i(() => k.value == "dv" ? "faruma" : "");
    const z = i(() => Ye(o.label, k.value, o.label));
    return (h, m) => {
      const d = be("Icon");
      return r(), a("div", {
        onClick: b,
        class: v(x.value),
        role: "menuitem",
        tabindex: e.disabled ? -1 : 0
      }, [
        h.$slots.prepend || e.prependIcon ? (r(), a("span", An, [
          D(h.$slots, "prepend", {}, () => [
            e.prependIcon ? (r(), Q(d, {
              key: 0,
              name: e.prependIcon,
              type: "outline",
              size: q(De)[o.size],
              color: "text-current"
            }, null, 8, ["name", "size"])) : y("", !0)
          ])
        ])) : y("", !0),
        g("span", Pn, [
          D(h.$slots, "default", {}, () => [
            ve(V(z.value), 1)
          ])
        ]),
        h.$slots.append || e.appendIcon ? (r(), a("span", Dn, [
          D(h.$slots, "append", {}, () => [
            e.appendIcon ? (r(), Q(d, {
              key: 0,
              name: e.appendIcon,
              type: "outline",
              size: q(De)[o.size],
              stroke: "currentColor",
              color: "text-current"
            }, null, 8, ["name", "size"])) : y("", !0)
          ])
        ])) : y("", !0)
      ], 10, Ln);
    };
  }
}, En = ["onClick", "onKeydown", "aria-expanded", "aria-controls"], jn = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, Nn = { class: "w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold" }, Rn = { class: "flex-1 min-w-0" }, Hn = { class: "font-semibold ui-text-color truncate" }, Un = {
  key: 0,
  class: "text-sm ui-text-secondary truncate mt-1"
}, Fn = {
  key: 1,
  class: "flex-shrink-0 ml-4 flex items-center gap-2"
}, qn = {
  key: 1,
  class: "text-ui-text-secondary"
}, Wn = ["id"], Kn = { class: "px-6 py-4 border-t border-color bg-color-2 text-ui-text-color" }, Gn = {
  key: 0,
  class: "flex gap-2 mt-4 pt-4 border-t border-color"
}, Yn = ["onClick"], Xn = {
  __name: "Expansion",
  props: {
    items: {
      type: Array,
      required: !0,
      validator: (e) => Array.isArray(e) && e.length > 0
    },
    modelValue: { type: [Number, Array], default: 0 },
    exclusive: { type: Boolean, default: !0 },
    clickable: { type: Boolean, default: !0 },
    elevation: { type: [Number, String], default: 1 },
    rounded: { type: String, default: "lg" },
    flat: { type: Boolean, default: !1 },
    containerClass: { type: String, default: "" },
    containerStyle: { type: Object, default: () => ({}) },
    hasLeftIcon: { type: Boolean, default: !1 },
    border: { type: String, default: "ui-border-color " },
    rounded: { type: String, default: () => we("Expansion", "rounded") }
  },
  emits: ["update:modelValue", "change", "action-click"],
  setup(e, { emit: n }) {
    const t = e, l = n;
    nt();
    const o = M(t.modelValue), s = i({
      get: () => t.exclusive ? o.value : t.modelValue,
      set: (m) => {
        o.value = m, l("update:modelValue", m);
      }
    });
    function x(m) {
      if (t.clickable) {
        if (t.exclusive)
          s.value = s.value === m ? -1 : m;
        else {
          const d = Array.isArray(s.value) ? [...s.value] : [], c = d.indexOf(m);
          c > -1 ? d.splice(c, 1) : d.push(m), s.value = d;
        }
        l("change", {
          index: m,
          item: t.items[m],
          active: s.value === m
        });
      }
    }
    function b(m, d, c) {
      l("action-click", {
        action: m.id || m.label,
        item: d,
        index: c
      }), m.callback && m.callback(d, c);
    }
    function k(m) {
      const d = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-color-3 text-ui-text-color hover:bg-color-4",
        outline: "border border-color text-ui-text-color hover:bg-color-1",
        ghost: "text-primary hover:bg-color-1",
        danger: "bg-error text-white hover:bg-error/90"
      };
      return d[m || "secondary"] || d.secondary;
    }
    function z(m) {
      m.style.height = "0", m.offsetHeight, m.style.height = m.scrollHeight + "px";
    }
    function h(m) {
      m.style.height = "0";
    }
    return (m, d) => {
      const c = be("Icon");
      return r(), a("div", {
        class: v([
          "border overflow-hidden transition-all duration-300",
          e.border,
          e.rounded ? q($e)[e.rounded] : "",
          e.containerClass
        ]),
        style: de(e.containerStyle)
      }, [
        (r(!0), a(ae, null, ue(e.items, (f, C) => (r(), a("div", {
          key: f.id ?? C,
          class: v([
            "border-b ui-border-color last:border-b-0 transition-all",
            s.value === C && "bg-color-1"
          ])
        }, [
          g("button", {
            onClick: (w) => x(C),
            onKeydown: [
              he(ee((w) => x(C), ["prevent"]), ["enter"]),
              he(ee((w) => x(C), ["prevent"]), ["space"])
            ],
            "aria-expanded": s.value === C,
            "aria-controls": `panel-${C}`,
            class: v(["w-full flex items-center justify-between px-6 py-4 text-left transition-all hover:bg-color-1", [
              s.value === C ? "bg-color-1" : "bg-color-2",
              e.clickable && "cursor-pointer"
            ]])
          }, [
            e.hasLeftIcon ? (r(), a("div", jn, [
              D(m.$slots, "left-icon", {
                item: f,
                index: C
              }, () => [
                g("div", Nn, V(C + 1), 1)
              ], !0)
            ])) : y("", !0),
            g("div", Rn, [
              g("h3", Hn, V(f.title), 1),
              f.subtitle ? (r(), a("p", Un, V(f.subtitle), 1)) : y("", !0)
            ]),
            f.badge || f.rightIcon ? (r(), a("div", Fn, [
              f.badge ? (r(), Q(q(jt), {
                key: 0,
                chips: f.badge,
                size: "small",
                class: "px-2 py-1 text-xs font-medium rounded-full"
              }, null, 8, ["chips"])) : y("", !0),
              f.rightIcon ? (r(), a("div", qn, [
                g("i", {
                  class: v(["text-lg", f.rightIcon])
                }, null, 2)
              ])) : y("", !0)
            ])) : y("", !0),
            G(c, {
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: v(["transition-transform duration-200", s.value === C ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"])
          ], 42, En),
          G(ke, {
            name: "expand",
            onEnter: z,
            onLeave: h
          }, {
            default: te(() => [
              s.value === C ? (r(), a("div", {
                key: 0,
                id: `panel-${C}`,
                class: "overflow-hidden"
              }, [
                g("div", Kn, [
                  D(m.$slots, "content", {
                    item: f,
                    index: C
                  }, () => [
                    ve(V(f.content), 1)
                  ], !0),
                  f.actions || m.$slots.actions ? (r(), a("div", Gn, [
                    D(m.$slots, "actions", {
                      item: f,
                      index: C
                    }, () => [
                      (r(!0), a(ae, null, ue(f.actions, (w) => (r(), a("button", {
                        key: w.label,
                        onClick: ($) => b(w, f, C),
                        class: v([
                          "px-4 py-2 text-sm font-medium rounded-md transition-all",
                          k(w.variant)
                        ])
                      }, V(w.label), 11, Yn))), 128))
                    ], !0)
                  ])) : y("", !0)
                ])
              ], 8, Wn)) : y("", !0)
            ]),
            _: 2
          }, 1024)
        ], 2))), 128))
      ], 6);
    };
  }
}, Jn = /* @__PURE__ */ ge(Xn, [["__scopeId", "data-v-54f28e1c"]]), Qn = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" }, Zn = {
  key: 0,
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
}, _n = {
  key: 0,
  class: "text-sm font-semibold text-ui-text-color uppercase tracking-wider"
}, er = { class: "space-y-2" }, tr = ["href", "target", "rel"], lr = {
  key: 1,
  class: "flex gap-4 pt-2"
}, nr = ["href", "title", "target"], rr = {
  key: 1,
  class: "border-t border-color pt-8 mb-8"
}, ar = { class: "max-w-sm" }, or = { class: "text-sm font-semibold text-ui-text-color mb-2" }, sr = { class: "text-sm text-ui-text-secondary mb-4" }, ir = { class: "bg-color-1" }, ur = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6" }, dr = { class: "flex flex-col sm:flex-row items-center justify-between gap-4" }, cr = { class: "text-xs text-ui-text-secondary" }, fr = {
  key: 0,
  class: "flex gap-4 flex-wrap justify-center"
}, gr = ["href"], mr = {
  key: 1,
  class: "flex gap-2"
}, pr = ["title"], vr = {
  __name: "Footer",
  props: {
    sections: {
      type: Array,
      default: () => [
        {
          title: "Product",
          links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Security", href: "#security" },
            { label: "Blog", href: "#blog" }
          ]
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "#about" },
            { label: "Careers", href: "#careers" },
            { label: "Contact", href: "#contact" },
            { label: "Press", href: "#press" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy", href: "#privacy" },
            { label: "Terms", href: "#terms" },
            { label: "Cookie Policy", href: "#cookies" },
            { label: "License", href: "#license" }
          ]
        },
        {
          title: "Follow",
          social: [
            { icon: "at-symbol", href: "#twitter", label: "Twitter", target: "_blank" },
            { icon: "command-line", href: "#github", label: "GitHub", target: "_blank" },
            { icon: "briefcase", href: "#linkedin", label: "LinkedIn", target: "_blank" },
            { icon: "user-group", href: "#facebook", label: "Facebook", target: "_blank" }
          ]
        }
      ]
    },
    newsletter: {
      type: Object,
      default: null
    },
    bottomLinks: {
      type: Array,
      default: () => [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Settings", href: "#cookies" }
      ]
    },
    copyright: {
      type: String,
      default: ""
    },
    containerClass: {
      type: String,
      default: ""
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    },
    showThemeSwitcher: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["newsletter-submit", "theme-toggle", "link-click"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = M(""), s = M(""), x = M(!1), b = i(() => document.documentElement.classList.contains("dark")), k = i(() => t.sections && t.sections.length > 0);
    function z() {
      o.value && (l("newsletter-submit", {
        email: o.value
      }), x.value = !1, s.value = "Thanks for subscribing!", o.value = "", setTimeout(() => {
        s.value = "";
      }, 3e3));
    }
    function h() {
      document.documentElement.classList.toggle("dark"), l("theme-toggle", b.value);
    }
    return (m, d) => {
      const c = be("Icon");
      return r(), a("footer", {
        class: v([
          "border-t border-color transition-colors duration-300",
          "bg-color-2 text-ui-text-color",
          e.containerClass
        ]),
        style: de(e.containerStyle)
      }, [
        g("div", Qn, [
          k.value ? (r(), a("div", Zn, [
            (r(!0), a(ae, null, ue(e.sections, (f) => (r(), a("div", {
              key: f.title,
              class: "space-y-4"
            }, [
              f.title ? (r(), a("h3", _n, V(f.title), 1)) : y("", !0),
              g("ul", er, [
                (r(!0), a(ae, null, ue(f.links, (C) => (r(), a("li", {
                  key: C.label
                }, [
                  g("a", {
                    href: C.href,
                    target: C.target,
                    rel: C.rel,
                    class: "text-sm text-ui-text-secondary hover:text-primary transition-colors duration-200"
                  }, V(C.label), 9, tr)
                ]))), 128))
              ]),
              f.social ? (r(), a("div", lr, [
                (r(!0), a(ae, null, ue(f.social, (C) => (r(), a("a", {
                  key: C.icon,
                  href: C.href,
                  title: C.label,
                  target: C.target,
                  rel: "noopener noreferrer",
                  class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-color-3 text-ui-text-color hover:bg-primary hover:text-white transition-all duration-200"
                }, [
                  G(c, {
                    name: C.icon,
                    size: 16,
                    color: "text-current"
                  }, null, 8, ["name"])
                ], 8, nr))), 128))
              ])) : y("", !0)
            ]))), 128))
          ])) : y("", !0),
          e.newsletter ? (r(), a("div", rr, [
            g("div", ar, [
              g("h3", or, V(e.newsletter.title || "Subscribe to our newsletter"), 1),
              g("p", sr, V(e.newsletter.description || "Get updates delivered to your inbox."), 1),
              g("form", {
                onSubmit: ee(z, ["prevent"]),
                class: "flex gap-2"
              }, [
                Ie(g("input", {
                  "onUpdate:modelValue": d[0] || (d[0] = (f) => o.value = f),
                  type: "email",
                  placeholder: "Enter your email",
                  class: "flex-1 px-3 py-2 text-sm border border-color rounded-md bg-color-1 text-ui-text-color placeholder-ui-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                  required: ""
                }, null, 512), [
                  [pt, o.value]
                ]),
                d[1] || (d[1] = g("button", {
                  type: "submit",
                  class: "px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-200"
                }, " Subscribe ", -1))
              ], 32),
              s.value ? (r(), a("p", {
                key: 0,
                class: v(["text-xs mt-2", x.value ? "text-error" : "text-success"])
              }, V(s.value), 3)) : y("", !0)
            ])
          ])) : y("", !0),
          d[2] || (d[2] = g("div", { class: "border-t border-color" }, null, -1))
        ]),
        g("div", ir, [
          g("div", ur, [
            g("div", dr, [
              g("p", cr, V(e.copyright || `© ${(/* @__PURE__ */ new Date()).getFullYear()} All rights reserved.`), 1),
              e.bottomLinks ? (r(), a("div", fr, [
                (r(!0), a(ae, null, ue(e.bottomLinks, (f) => (r(), a("a", {
                  key: f.label,
                  href: f.href,
                  class: "text-xs text-ui-text-secondary hover:text-primary transition-colors duration-200"
                }, V(f.label), 9, gr))), 128))
              ])) : y("", !0),
              e.showThemeSwitcher ? (r(), a("div", mr, [
                g("button", {
                  onClick: h,
                  class: "p-2 rounded-md hover:bg-color-2 transition-colors",
                  title: b.value ? "Light mode" : "Dark mode"
                }, [
                  G(c, {
                    name: b.value ? "sun" : "moon",
                    size: 18,
                    color: "text-current"
                  }, null, 8, ["name"])
                ], 8, pr)
              ])) : y("", !0)
            ])
          ])
        ])
      ], 6);
    };
  }
}, yr = /* @__PURE__ */ ge(vr, [["__scopeId", "data-v-7a2ba9e6"]]), br = {
  __name: "Form",
  props: {
    modelValue: { type: Boolean, default: null },
    validateOn: {
      type: String,
      default: "blur"
    }
  },
  emits: ["update:modelValue", "submit"],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = tt(/* @__PURE__ */ new Map()), x = tt({}), b = tt({}), k = ($, S) => {
      s.set($, S), b[$] = !1;
    }, z = ($) => {
      s.delete($), delete x[$], delete b[$], C();
    }, h = async () => {
      let $ = !0;
      Object.keys(x).forEach((S) => delete x[S]);
      for (const [S, F] of s.entries())
        F?.validate && (b[S] = !0, await F.validate() || ($ = !1));
      return C(), { valid: $, errors: { ...x } };
    }, m = () => {
      for (const [$, S] of s.entries())
        S?.reset && S.reset();
      d();
    }, d = () => {
      for (const [$, S] of s.entries())
        S?.resetValidation && S.resetValidation();
      Object.keys(x).forEach(($) => delete x[$]), Object.keys(b).forEach(($) => b[$] = !1), C();
    }, c = ($, S, F) => {
      b[$] = !0, S ? delete x[$] : x[$] = F, C();
    }, f = i(() => Array.from(s.keys()).every((S) => b[S] === !0) && Object.keys(x).length === 0), C = () => {
      Pe(() => {
        l.modelValue !== null && o("update:modelValue", f.value);
      });
    }, w = async () => {
      const $ = await h();
      o("submit", $);
    };
    return Ge("formContext", {
      register: k,
      unregister: z,
      validate: c,
      validateOn: i(() => l.validateOn)
    }), n({
      validate: h,
      reset: m,
      resetValidation: d,
      isValid: f
    }), ($, S) => (r(), a("form", {
      onSubmit: ee(w, ["prevent"])
    }, [
      D($.$slots, "default", {
        isValid: f.value,
        validate: h,
        reset: m,
        resetValidation: d
      })
    ], 32));
  }
}, hr = {
  key: 0,
  class: "absolute flex px-2 items-center pointer-events-none h-[1px] -top-[1px] left-4 bg-inherit"
}, xr = { class: "text-xs font-medium text-ui-text-secondary" }, wr = {
  __name: "GroupCard",
  props: {
    title: { type: String, default: "" },
    color: { type: String, default: "bg-white" }
  },
  setup(e) {
    return (n, t) => (r(), a("div", {
      class: v(`border border-color-3 rounded-lg ${e.color} w-full relative p-4`)
    }, [
      e.title ? (r(), a("div", hr, [
        g("span", xr, V(e.title), 1)
      ])) : y("", !0),
      D(n.$slots, "default")
    ], 2));
  }
}, kr = { class: "min-h-screen w-full bg-bg-color" }, Sr = { class: "w-full px-6 py-5" }, Cr = {
  __name: "Layout",
  props: {
    appBarHeight: { type: [String, Number], default: 64 },
    navWidth: { type: String, default: "64px" },
    navLocation: { type: String, default: "left" },
    navPermanent: { type: Boolean, default: !1 },
    navTemporary: { type: Boolean, default: !1 },
    navRail: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, t = i(() => {
      const l = {
        height: "100vh",
        overflowY: "auto"
      };
      if (n.appBarHeight) {
        const s = typeof n.appBarHeight == "number" ? `${n.appBarHeight}px` : n.appBarHeight;
        l.paddingTop = s;
      }
      return (n.navPermanent || n.navRail) && !n.navTemporary && n.navWidth && (n.navLocation === "right" ? l.marginRight = n.navWidth : l.marginLeft = n.navWidth), l;
    });
    return (l, o) => (r(), a("div", kr, [
      D(l.$slots, "sidebar"),
      D(l.$slots, "appbar"),
      g("main", {
        class: "",
        style: de(t.value)
      }, [
        g("div", Sr, [
          D(l.$slots, "default")
        ])
      ], 4)
    ]));
  }
}, $r = /* @__PURE__ */ Te({
  __name: "SplitLayout",
  props: {
    leftWidth: { default: 320 },
    appBarOffset: { default: 64 },
    bleed: { type: Boolean, default: !0 },
    leftClass: { default: "" },
    rightClass: { default: "" },
    minWidth: { default: 200 },
    maxWidth: { default: 640 }
  },
  setup(e) {
    const n = e, t = i(() => ({
      height: `calc(100vh - ${n.appBarOffset}px)`
    })), l = typeof n.leftWidth == "number" ? n.leftWidth : parseInt(n.leftWidth) || 320, o = M(l), s = M(!1), x = M(null), b = i(() => ({
      width: `${o.value}px`,
      minWidth: `${o.value}px`
    }));
    function k(m) {
      s.value = !0, m.preventDefault();
    }
    function z(m) {
      if (!x.value) return;
      const d = x.value.getBoundingClientRect(), c = m.clientX - d.left;
      o.value = Math.max(n.minWidth, Math.min(c, Math.min(n.maxWidth, d.width - 300)));
    }
    function h() {
      s.value = !1;
    }
    return Be(() => {
      s.value = !1;
    }), (m, d) => (r(), a("div", {
      ref_key: "containerRef",
      ref: x,
      class: v(["flex overflow-hidden", e.bleed ? "-mx-6 -my-5" : "", s.value ? "select-none" : ""]),
      style: de(t.value)
    }, [
      g("div", {
        class: v(["flex-shrink-0 flex flex-col overflow-hidden", e.leftClass]),
        style: de(b.value)
      }, [
        D(m.$slots, "left")
      ], 6),
      g("div", {
        class: "relative flex-shrink-0 w-[5px] cursor-col-resize group z-10",
        onMousedown: k
      }, [
        g("div", {
          class: v(["absolute inset-y-0 left-[2px] w-px bg-[var(--border-color)] transition-colors", s.value ? "!bg-primary !w-[2px] !left-[1.5px]" : "group-hover:!bg-primary"])
        }, null, 2),
        g("div", {
          class: v(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", s.value ? "!opacity-100" : ""])
        }, [
          (r(), a(ae, null, ue(4, (c) => g("span", {
            key: c,
            class: "w-[3px] h-[3px] rounded-full bg-primary block"
          })), 64))
        ], 2)
      ], 32),
      g("div", {
        class: v(["flex-1 min-w-0 flex flex-col overflow-hidden", e.rightClass])
      }, [
        D(m.$slots, "right")
      ], 2),
      (r(), Q(Je, { to: "body" }, [
        s.value ? (r(), a("div", {
          key: 0,
          class: "fixed inset-0 z-[9999] cursor-col-resize",
          onMousemove: z,
          onMouseup: h
        }, null, 32)) : y("", !0)
      ]))
    ], 6));
  }
}), zr = { class: "relative" }, Br = {
  key: 1,
  class: "text-sm font-medium break-words min-w-0 flex-1"
}, Ir = {
  key: 1,
  class: "px-3 py-2"
}, Vr = { class: "relative" }, Tr = { class: "flex-1 overflow-y-auto py-2" }, Mr = {
  key: 0,
  class: "text-xs font-medium text-color-4 uppercase tracking-wider"
}, Lr = {
  key: 1,
  class: "w-6 h-px bg-border"
}, Ar = { class: "space-y-1 px-2" }, Pr = {
  key: 0,
  class: "flex-shrink-0 w-5 h-5 flex items-center justify-center",
  style: { "min-width": "20px", "max-width": "20px", "min-height": "20px", "max-height": "20px", overflow: "hidden" }
}, Dr = { class: "truncate" }, Or = {
  key: 2,
  class: "mt-auto border-t border-color-3 px-4 py-4"
}, Er = {
  __name: "NavBar",
  props: {
    modelValue: { type: Boolean, default: !0 },
    avatarName: { type: String, default: "" },
    items: { type: Array, default: () => [] },
    // Drawer modes
    temporary: { type: Boolean, default: !1 },
    permanent: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 },
    // Rail mode
    rail: { type: Boolean, default: !1 },
    railWidth: { type: [String, Number], default: 64 },
    railExpanded: { type: Boolean, default: !1 },
    expandOnHover: { type: Boolean, default: !1 },
    // Delay (ms) before expand-on-hover opens/closes the rail, so quick
    // mouse passes don't make the sidebar snap open/shut.
    hoverDelay: { type: [String, Number], default: 200 },
    // Layout offset
    appBarOffset: { type: [String, Number], default: 0 },
    // Positioning
    location: { type: String, default: "left" },
    width: { type: [String, Number], default: 256 },
    // Features
    filterable: { type: Boolean, default: !1 },
    searchPlaceholder: { type: String, default: "Search..." },
    groupBy: { type: String, default: "" },
    // Styling
    color: { type: String, default: "" },
    bordered: { type: Boolean, default: !0 },
    elevated: { type: Boolean, default: !1 },
    floating: { type: Boolean, default: !1 },
    rounded: { type: String, default: () => we("NavBar", "rounded") },
    // Behavior
    closeOnClick: { type: Boolean, default: !1 },
    disableRouteWatcher: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    "update:railExpanded",
    "update:width",
    "update:collapsed",
    "open",
    "close",
    "item-click"
  ],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = M(null), x = M(""), b = M([]), k = M(!1), z = i({
      get: () => l.railExpanded,
      set: (T) => o("update:railExpanded", T)
    }), h = i({
      get: () => l.modelValue,
      set: (T) => o("update:modelValue", T)
    }), m = i(() => l.permanent || l.rail ? !0 : h.value), d = i(() => !l.rail || l.expandOnHover && k.value ? !1 : !z.value);
    ye(d, (T) => {
      o("update:collapsed", T);
    });
    const c = i(() => d.value ? typeof l.railWidth == "number" ? `${l.railWidth}px` : l.railWidth : typeof l.width == "number" ? `${l.width}px` : l.width);
    ye(c, (T) => {
      o("update:width", T);
    }, { immediate: !0 }), Ge("navWidth", c);
    const f = i(() => {
      const T = {
        width: c.value
      };
      if (l.appBarOffset) {
        const j = typeof l.appBarOffset == "number" ? `${l.appBarOffset}px` : l.appBarOffset;
        T.top = j, T.height = `calc(100vh - ${j})`;
      }
      return T;
    }), C = i(() => {
      const T = [
        "fixed bottom-0 z-40 flex flex-col",
        "bg-color-1 ui-text-secondary"
      ];
      return l.location === "right" ? T.push("right-0") : T.push("left-0"), l.bordered && (T.push(l.location === "right" ? "border-l" : "border-r"), T.push("border-color-3")), (l.elevated || l.temporary) && T.push("shadow-lg"), l.floating && T.push("m-4 rounded-lg"), l.color && T.push(l.color), T;
    }), w = i(() => l.location === "right" ? "slide-right" : "slide-left"), $ = i(() => {
      let T = l.items;
      if (x.value) {
        const j = x.value.toLowerCase();
        T = l.items.filter((le) => {
          const U = le.label?.toLowerCase().includes(j), p = le.children?.some(
            (u) => u.label?.toLowerCase().includes(j)
          );
          return U || p;
        });
      }
      if (l.groupBy) {
        const j = {};
        return T.forEach((le) => {
          const U = le[l.groupBy] || "Other";
          j[U] || (j[U] = { title: U, items: [] }), j[U].items.push(le);
        }), Object.values(j);
      }
      return [{ title: null, items: T }];
    }), S = () => {
      h.value = !0, o("open");
    }, F = () => {
      l.permanent || (h.value = !1, o("close"));
    }, N = () => {
      h.value ? F() : S();
    }, A = () => {
      o("update:railExpanded", !z.value);
    };
    let W = null, J = null;
    const I = () => {
      W && (clearTimeout(W), W = null), J && (clearTimeout(J), J = null);
    }, Y = () => {
      if (l.expandOnHover && l.rail) {
        I();
        const T = Number(l.hoverDelay) || 0;
        W = setTimeout(() => {
          k.value = !0;
        }, T);
      }
    }, oe = () => {
      if (l.expandOnHover && l.rail) {
        I();
        const T = Number(l.hoverDelay) || 0;
        J = setTimeout(() => {
          k.value = !1;
        }, T);
      }
    }, E = (T) => {
      if (o("item-click", T), T.children) {
        const j = b.value.indexOf(T.id);
        j > -1 ? b.value.splice(j, 1) : b.value.push(T.id);
        return;
      }
      (l.closeOnClick || l.temporary) && F();
    }, R = (T) => {
      T.key === "Escape" && (l.temporary || l.persistent) && F();
    };
    function Z() {
      if (l.items)
        for (const T of l.items)
          T.children && T.children.some((j) => j.active) && (b.value.includes(T.id) || b.value.push(T.id));
    }
    return ye(() => l.items, Z, { deep: !0 }), Ve(() => {
      Z(), document.addEventListener("keydown", R);
    }), Be(() => {
      I(), document.removeEventListener("keydown", R);
    }), n({ open: S, close: F, toggle: N, isCollapsed: d }), (T, j) => {
      const le = be("Icon");
      return r(), a("div", zr, [
        G(ke, { name: "fade" }, {
          default: te(() => [
            h.value && e.temporary ? (r(), a("div", {
              key: 0,
              class: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
              onClick: F
            })) : y("", !0)
          ]),
          _: 1
        }),
        G(ke, { name: w.value }, {
          default: te(() => [
            Ie(g("nav", {
              ref_key: "navRef",
              ref: s,
              class: v(C.value),
              style: de({ ...f.value, transition: "width 300ms ease-in-out" }),
              onMouseenter: Y,
              onMouseleave: oe
            }, [
              T.$slots.prepend || e.avatarName ? (r(), a("div", {
                key: 0,
                class: v(["flex items-center gap-2 border-b border-color-3 w-full min-w-0", d.value ? "justify-center px-2 py-4" : "px-4 py-4 overflow-hidden"])
              }, [
                D(T.$slots, "prepend", {}, () => [
                  g("div", {
                    class: v(["flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700", d.value ? "" : "flex-1 min-w-0 overflow-hidden"])
                  }, [
                    e.avatarName ? (r(), Q(Pt, {
                      key: 0,
                      name: e.avatarName || "",
                      size: "sm",
                      variant: "primary",
                      class: "flex-shrink-0"
                    }, null, 8, ["name"])) : y("", !0),
                    e.avatarName && !d.value ? (r(), a("span", Br, V(e.avatarName), 1)) : y("", !0)
                  ], 2)
                ], !0),
                e.rail && !e.temporary && !d.value ? (r(), a("button", {
                  key: 0,
                  onClick: A,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 transition-colors",
                  "aria-label": "Toggle navigation width"
                }, [
                  (r(), a("svg", {
                    class: v(["fill-gray-600 dark:fill-gray-200 w-3", e.location === "right" ? "rotate-180" : ""]),
                    xmlns: "http://www.w3.org/2000/svg",
                    "shape-rendering": "geometricPrecision",
                    "text-rendering": "geometricPrecision",
                    "image-rendering": "optimizeQuality",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    viewBox: "0 0 512 389.24"
                  }, [...j[1] || (j[1] = [
                    g("path", {
                      "fill-rule": "nonzero",
                      d: "M0 0h275.1v50.04H0V0zm361.79 115.14 54.44 54.44H0v50.04h416.2l-54.41 54.41 35.39 35.39L512 194.6v-.03l-35.39-35.36-79.43-79.46-35.39 35.39zM0 339.2h275.1v50.04H0V339.2z"
                    }, null, -1)
                  ])], 2))
                ])) : y("", !0),
                !e.permanent && !e.rail ? (r(), a("button", {
                  key: 1,
                  onClick: F,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 ui-text-secondary hover:text-foreground transition-colors",
                  "aria-label": "Close navigation"
                }, [
                  G(le, {
                    name: "x-mark",
                    size: "18"
                  })
                ])) : y("", !0)
              ], 2)) : y("", !0),
              e.filterable && !d.value ? (r(), a("div", Ir, [
                g("div", Vr, [
                  G(q(bt), {
                    modelValue: x.value,
                    "onUpdate:modelValue": j[0] || (j[0] = (U) => x.value = U),
                    type: "text",
                    placeholder: e.searchPlaceholder,
                    prepend: "magnifying-glass"
                  }, null, 8, ["modelValue", "placeholder"])
                ])
              ])) : y("", !0),
              g("div", Tr, [
                e.items && e.items.length ? (r(!0), a(ae, { key: 0 }, ue($.value, (U, p) => (r(), a(ae, { key: p }, [
                  U.title ? (r(), a("div", {
                    key: 0,
                    class: v([
                      "flex items-center gap-2 px-3 py-2",
                      d.value ? "justify-center" : ""
                    ])
                  }, [
                    d.value ? (r(), a("div", Lr)) : (r(), a("span", Mr, V(U.title), 1))
                  ], 2)) : y("", !0),
                  g("ul", Ar, [
                    (r(!0), a(ae, null, ue(U.items, (u) => (r(), a("li", {
                      key: u.id || u.label
                    }, [
                      (r(), Q(Ne(u.href ? "a" : "div"), {
                        href: u.href,
                        onClick: ee((B) => E(u), ["prevent"]),
                        class: v([
                          "group flex items-center gap-3 w-full text-sm font-medium transition-colors",
                          d.value ? "justify-center px-2 py-2.5" : "px-3 py-2",
                          u.active ? "bg-color-4 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                          q($e)[e.rounded],
                          u.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                        ]),
                        title: d.value ? u.label : void 0
                      }, {
                        default: te(() => [
                          u.icon ? (r(), a("span", Pr, [
                            G(le, {
                              name: u.icon,
                              size: "20"
                            }, null, 8, ["name"])
                          ])) : y("", !0),
                          Ie(g("span", { class: "truncate" }, V(u.label), 513), [
                            [je, !d.value]
                          ]),
                          Ie(g("span", { class: "ml-auto flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-600" }, V(u.badge), 513), [
                            [je, u.badge && !d.value]
                          ]),
                          Ie(G(le, {
                            name: "chevron-right",
                            size: "16",
                            class: v(["ml-auto transition-transform", b.value.includes(u.id) ? "rotate-90" : ""])
                          }, null, 8, ["class"]), [
                            [je, u.children && !d.value]
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href", "onClick", "class", "title"])),
                      G(ke, { name: "collapse" }, {
                        default: te(() => [
                          u.children && b.value.includes(u.id) && !d.value ? (r(), a("ul", {
                            key: 0,
                            class: v([e.location === "left" ? "mt-1 ml-4 pl-3 border-l border-color-3 space-y-1" : "mt-1 mr-4 pr-3 border-r border-color-3 space-y-1"])
                          }, [
                            (r(!0), a(ae, null, ue(u.children, (B) => (r(), a("li", {
                              key: B.id || B.label
                            }, [
                              (r(), Q(Ne(B.href ? "a" : "div"), {
                                href: B.href,
                                onClick: ee((L) => E(B), ["prevent"]),
                                class: v([
                                  "flex items-center gap-3 w-full px-3 py-2 text-sm transition-colors",
                                  B.active ? "bg-color-3 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                                  q($e)[e.rounded],
                                  B.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                                ])
                              }, {
                                default: te(() => [
                                  B.icon ? (r(), Q(le, {
                                    key: 0,
                                    name: B.icon,
                                    size: "18"
                                  }, null, 8, ["name"])) : y("", !0),
                                  g("span", Dr, V(B.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["href", "onClick", "class"]))
                            ]))), 128))
                          ], 2)) : y("", !0)
                        ]),
                        _: 2
                      }, 1024)
                    ]))), 128))
                  ])
                ], 64))), 128)) : D(T.$slots, "default", { key: 1 }, void 0, !0)
              ]),
              T.$slots.append ? (r(), a("div", Or, [
                D(T.$slots, "append", {}, void 0, !0)
              ])) : y("", !0)
            ], 38), [
              [je, m.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ]);
    };
  }
}, jr = /* @__PURE__ */ ge(Er, [["__scopeId", "data-v-bf734b18"]]), Nr = {
  __name: "Overlay",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    persistent: {
      type: Boolean,
      default: !0
    },
    fullscreen: {
      type: Boolean,
      default: !1
    },
    transition: {
      type: String,
      default: "center"
    },
    overlayClass: {
      type: String,
      default: ""
    },
    modalClass: {
      type: String,
      default: ""
    },
    headerClass: {
      type: String,
      default: ""
    },
    contentClass: {
      type: String,
      default: ""
    },
    footerClass: {
      type: String,
      default: ""
    },
    headerTextSize: {
      type: String,
      default: "text-lg font-semibold"
    },
    cardBg: {
      type: String,
      default: "ui-bg-color"
    },
    rounded: {
      type: String
    },
    border: {
      type: String,
      default: "ui-border-color"
    },
    bodyTextColor: {
      type: String
    },
    closebutton: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "md:w-[800px] w-[600px]"
    },
    zIndex: {
      type: String,
      default: "z-50"
    },
    mobileFull: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i({
      get: () => t.modelValue,
      set: (m) => l("update:modelValue", m)
    }), s = M(!1);
    function x() {
      if (t.persistent) {
        s.value = !0, setTimeout(() => s.value = !1, 400);
        return;
      }
      o.value = !1;
    }
    function b(m) {
      m.key === "Escape" && o.value && !t.persistent && x();
    }
    Ve(() => {
      document.addEventListener("keydown", b);
    }), Be(() => {
      document.removeEventListener("keydown", b);
    });
    const k = i(() => `${t.transition ?? "center"}`), z = i(() => t.fullscreen ? "h-screen rounded-none" : t.mobileFull ? "!h-screen !rounded-none !mx-0 sm:!h-auto sm:!max-h-[90vh] sm:!rounded-xl sm:!mx-4" : "mx-4 max-h-screen"), h = i(() => t.fullscreen ? "w-full" : t.mobileFull ? `max-sm:!w-full ${t.width}` : t.width);
    return (m, d) => {
      const c = be("Card");
      return r(), Q(Je, { to: "body" }, [
        G(ke, { name: k.value }, {
          default: te(() => [
            o.value ? (r(), a("div", {
              key: 0,
              class: v(["fixed inset-0 flex items-center justify-center", e.zIndex])
            }, [
              g("div", {
                class: v(["absolute inset-0 transition-opacity duration-300 bg-black/30 backdrop-blur-sm", e.overlayClass]),
                onClick: x
              }, null, 2),
              G(ke, { name: k.value }, {
                default: te(() => [
                  o.value ? (r(), Q(c, {
                    key: 0,
                    title: e.title,
                    "card-class": [z.value, e.modalClass, s.value && "animate-shake"],
                    bg: e.cardBg,
                    "text-color": e.bodyTextColor,
                    rounded: e.rounded,
                    border: e.border,
                    "header-class": e.headerClass,
                    "footer-class": e.footerClass,
                    width: h.value,
                    onClick: d[1] || (d[1] = ee(() => {
                    }, ["stop"]))
                  }, Fe({
                    default: te(() => [
                      g("div", {
                        class: v(["flex-1 pt-2", e.contentClass]),
                        style: { "overflow-x": "clip" }
                      }, [
                        e.closebutton ? (r(), a("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-3 right-4 z-10 text-ui-text-secondary hover:text-ui-text-primary transition-colors",
                          onClick: d[0] || (d[0] = (f) => o.value = !1)
                        }, [...d[2] || (d[2] = [
                          g("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "size-5"
                          }, [
                            g("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18 18 6M6 6l12 12"
                            })
                          ], -1)
                        ])])) : y("", !0),
                        D(m.$slots, "default")
                      ], 2)
                    ]),
                    _: 2
                  }, [
                    m.$slots.header ? {
                      name: "header",
                      fn: te(() => [
                        D(m.$slots, "header")
                      ]),
                      key: "0"
                    } : void 0,
                    m.$slots.footer ? {
                      name: "footer",
                      fn: te(() => [
                        D(m.$slots, "footer")
                      ]),
                      key: "1"
                    } : void 0
                  ]), 1032, ["title", "card-class", "bg", "text-color", "rounded", "border", "header-class", "footer-class", "width"])) : y("", !0)
                ]),
                _: 3
              }, 8, ["name"])
            ], 2)) : y("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]);
    };
  }
}, Rr = ["aria-label"], Hr = { key: 0 }, Ur = ["disabled", "aria-label"], Fr = { key: 1 }, qr = { key: 1 }, Wr = ["disabled", "aria-label"], Kr = { key: 1 }, Gr = ["disabled", "onClick", "aria-label", "aria-current"], Yr = { key: 2 }, Xr = ["disabled", "aria-label"], Jr = { key: 1 }, Qr = { key: 3 }, Zr = ["disabled", "aria-label"], _r = { key: 1 }, ea = {
  __name: "Pagination",
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      required: !0,
      validator: (e) => e > 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    maxVisiblePages: {
      type: Number,
      default: 7,
      validator: (e) => e >= 5
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ["sm", "md", "lg"].includes(e)
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "outline"].includes(e)
    },
    rounded: {
      type: Boolean,
      default: !0
    },
    showPrevNext: {
      type: Boolean,
      default: !0
    },
    showFirstLast: {
      type: Boolean,
      default: !1
    },
    showPageInfo: {
      type: Boolean,
      default: !1
    },
    showTotalInfo: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    prevText: {
      type: String,
      default: ""
    },
    nextText: {
      type: String,
      default: ""
    },
    firstText: {
      type: String,
      default: ""
    },
    lastText: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "solid",
      validator: (e) => ["solid", "outline"].includes(e)
    },
    ariaLabel: {
      type: String,
      default: "Pagination"
    },
    containerClass: {
      type: String,
      default: ""
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change", "page-change"],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = i({
      get: () => l.modelValue,
      set: (I) => o("update:modelValue", I)
    }), x = i(() => {
      const I = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return I[l.size] || I.md;
    }), b = i(() => {
      const I = {
        sm: "w-8 h-8 min-w-[32px]",
        md: "w-10 h-10 min-w-[40px]",
        lg: "w-12 h-12 min-w-[48px]"
      };
      return I[l.size] || I.md;
    }), k = i(() => {
      const I = {
        sm: 14,
        md: 16,
        lg: 20
      };
      return I[l.size] || I.md;
    }), z = i(() => {
      const I = {
        sm: "gap-1",
        md: "gap-1.5",
        lg: "gap-2"
      };
      return I[l.size] || I.md;
    }), h = i(() => {
      const I = {
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg"
      };
      return I[l.size] || I.md;
    }), m = i(() => "border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"), d = i(() => {
      const I = {
        default: "bg-primary text-white border-primary",
        primary: "bg-primary text-white border-primary",
        outline: "bg-primary text-white border-primary"
      };
      return I[l.variant] || I.default;
    }), c = i(() => {
      const I = {
        default: "bg-color-2 text-ui-text-color border-color",
        primary: "bg-transparent text-ui-text-color border-color",
        outline: "bg-transparent text-ui-text-color border-color"
      };
      return I[l.variant] || I.default;
    }), f = i(() => "hover:bg-color-3 hover:border-color-3"), C = i(() => "opacity-50 cursor-not-allowed"), w = i(() => {
      const I = [], Y = l.totalPages, oe = s.value, E = l.maxVisiblePages;
      if (Y <= E)
        for (let R = 1; R <= Y; R++)
          I.push(R);
      else {
        I.push(1);
        const R = Math.floor(E / 2);
        let Z = oe - R, T = oe + R;
        Z < 2 && (Z = 2, T = E - 1), T > Y - 1 && (T = Y - 1, Z = Y - E + 2), Z > 2 && I.push("...");
        for (let j = Z; j <= T; j++)
          I.push(j);
        T < Y - 1 && I.push("..."), I.push(Y);
      }
      return I;
    }), $ = i(() => (s.value - 1) * l.perPage + 1), S = i(() => {
      const I = s.value * l.perPage;
      return I > l.totalItems ? l.totalItems : I;
    }), F = (I) => {
      I === s.value || I < 1 || I > l.totalPages || l.disabled || (s.value = I, o("change", I), o("page-change", I));
    }, N = () => {
      s.value > 1 && F(s.value - 1);
    }, A = () => {
      s.value < l.totalPages && F(s.value + 1);
    };
    return n({
      goToPage: F,
      previousPage: N,
      nextPage: A,
      firstPage: () => {
        F(1);
      },
      lastPage: () => {
        F(l.totalPages);
      }
    }), (I, Y) => {
      const oe = be("Icon");
      return r(), a("nav", {
        "aria-label": e.ariaLabel,
        class: v([
          "flex items-center justify-center",
          e.containerClass
        ]),
        style: de(e.containerStyle)
      }, [
        g("ul", {
          class: v([
            "flex items-center",
            x.value,
            z.value
          ])
        }, [
          e.showFirstLast ? (r(), a("li", Hr, [
            g("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: Y[0] || (Y[0] = (E) => F(1)),
              class: v([
                "inline-flex items-center justify-center transition-all",
                b.value,
                m.value,
                s.value === 1 || e.disabled ? C.value : f.value,
                e.rounded && h.value
              ]),
              "aria-label": e.firstText || "First page"
            }, [
              e.firstText ? (r(), a("span", Fr, V(e.firstText), 1)) : (r(), Q(oe, {
                key: 0,
                name: "chevron-double-left",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Ur)
          ])) : y("", !0),
          e.showPrevNext ? (r(), a("li", qr, [
            g("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: N,
              class: v([
                "inline-flex items-center justify-center transition-all",
                b.value,
                m.value,
                s.value === 1 || e.disabled ? C.value : f.value,
                e.rounded && h.value
              ]),
              "aria-label": e.prevText || "Previous page"
            }, [
              e.prevText ? (r(), a("span", Kr, V(e.prevText), 1)) : (r(), Q(oe, {
                key: 0,
                name: "chevron-left",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Wr)
          ])) : y("", !0),
          (r(!0), a(ae, null, ue(w.value, (E) => (r(), a("li", { key: E }, [
            E === "..." ? (r(), a("span", {
              key: 0,
              class: v([
                "inline-flex items-center justify-center",
                b.value,
                "text-ui-text-secondary"
              ])
            }, " ... ", 2)) : (r(), a("button", {
              key: 1,
              type: "button",
              disabled: e.disabled,
              onClick: (R) => F(E),
              class: v([
                "inline-flex items-center justify-center transition-all font-medium",
                b.value,
                m.value,
                E === s.value ? d.value : c.value,
                e.rounded && h.value,
                !e.disabled && E !== s.value && f.value
              ]),
              "aria-label": `Page ${E}`,
              "aria-current": E === s.value ? "page" : void 0
            }, V(E), 11, Gr))
          ]))), 128)),
          e.showPrevNext ? (r(), a("li", Yr, [
            g("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: A,
              class: v([
                "inline-flex items-center justify-center transition-all",
                b.value,
                m.value,
                s.value === e.totalPages || e.disabled ? C.value : f.value,
                e.rounded && h.value
              ]),
              "aria-label": e.nextText || "Next page"
            }, [
              e.nextText ? (r(), a("span", Jr, V(e.nextText), 1)) : (r(), Q(oe, {
                key: 0,
                name: "chevron-right",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Xr)
          ])) : y("", !0),
          e.showFirstLast ? (r(), a("li", Qr, [
            g("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: Y[1] || (Y[1] = (E) => F(e.totalPages)),
              class: v([
                "inline-flex items-center justify-center transition-all",
                b.value,
                m.value,
                s.value === e.totalPages || e.disabled ? C.value : f.value,
                e.rounded && h.value
              ]),
              "aria-label": e.lastText || "Last page"
            }, [
              e.lastText ? (r(), a("span", _r, V(e.lastText), 1)) : (r(), Q(oe, {
                key: 0,
                name: "chevron-double-right",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Zr)
          ])) : y("", !0)
        ], 2),
        e.showPageInfo ? (r(), a("div", {
          key: 0,
          class: v([
            "ml-4 text-ui-text-secondary",
            x.value
          ])
        }, " Page " + V(s.value) + " of " + V(e.totalPages), 3)) : y("", !0),
        e.showTotalInfo && e.totalItems ? (r(), a("div", {
          key: 1,
          class: v([
            "ml-4 text-ui-text-secondary",
            x.value
          ])
        }, V($.value) + "-" + V(S.value) + " of " + V(e.totalItems), 3)) : y("", !0)
      ], 14, Rr);
    };
  }
}, ta = /* @__PURE__ */ ge(ea, [["__scopeId", "data-v-862a1617"]]), la = { class: "relative" }, na = ["aria-hidden"], ra = {
  class: "flex h-full flex-col",
  style: { minHeight: "100vh" }
}, aa = { class: "flex items-center justify-between px-4 py-3" }, oa = { class: "flex items-center gap-2" }, sa = {
  key: 0,
  class: /* @__PURE__ */ v(["pa-2"]),
  "aria-label": "Toggle drawer"
}, ia = { class: "flex-1 overflow-auto" }, ua = { key: 0 }, da = {
  key: 0,
  class: "px-3 py-2"
}, ca = ["tabindex", "onClick", "onKeydown", "aria-expanded"], fa = { class: "flex items-center gap-2" }, ga = {
  key: 0,
  class: "mr-2"
}, ma = {
  key: 1,
  class: "mr-2"
}, pa = {
  key: 0,
  class: "mr-2"
}, va = ["onClick", "onKeydown", "aria-expanded"], ya = { class: "rail-label" }, ba = { key: 1 }, ha = { class: "px-4 py-3" }, xa = {
  __name: "SideBar",
  props: {
    id: {
      type: String,
      default: () => `drawer-${Math.random().toString(36).slice(2, 9)}`
    },
    modelValue: { type: Boolean, default: !1 },
    permanent: { type: Boolean, default: !1 },
    temporary: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 },
    rail: { type: Boolean, default: !1 },
    hoverExpand: { type: Boolean, default: !1 },
    isStuck: { type: Boolean, default: !1 },
    belowAppbar: { type: Boolean, default: !1 },
    location: { type: String, default: "left" },
    // color: { type: String, default: 'bg-white dark:bg-gray-900' },
    color: { type: String },
    width: { type: [String, Number], default: "w-64" },
    railWidth: { type: [String, Number], default: "w-16" },
    closeOnScrimClick: { type: Boolean, default: !0 },
    expandOnHover: { type: Boolean, default: !1 },
    overlayAppBar: { type: Boolean, default: !0 },
    // if false, drawer will appear under app bar
    zIndex: { type: [String, Number], default: void 0 },
    appBarOffset: { type: Boolean, default: !1 },
    appBarHeight: { type: [String, Number], default: void 0 },
    // data-driven items
    items: {
      type: Array,
      default: void 0
    },
    filterable: { type: Boolean, default: !1 },
    searchPlaceholder: { type: String, default: "Search" },
    draggable: { type: Boolean, default: !1 },
    groupBy: {
      type: [String, Function],
      default: void 0
    },
    allowCrossGroupReorder: { type: Boolean, default: !1 },
    collapsibleGroups: { type: Boolean, default: !0 },
    groupDefaultOpen: { type: Boolean, default: !0 },
    groupIcons: {
      type: Object,
      default: void 0
    },
    renderGroupParent: { type: Boolean, default: !1 },
    groupParents: {
      type: Object,
      default: void 0
    }
  },
  emits: ["update:modelValue", "open", "close", "update:items", "reorder", "group-toggle"],
  setup(e, { emit: n }) {
    const t = e;
    i(() => {
      const P = t.location === "left";
      return t.rail && !t.modelValue && !T.value || t.rail && t.modelValue && !T.value ? P ? "chevron-right" : "chevron-left" : P ? "chevron-left" : "chevron-right";
    });
    const l = n, o = M(!!t.modelValue), s = M(null), x = M(t.items ? [...t.items] : []), b = M("");
    ye(
      () => t.items,
      (P) => {
        x.value = t.items ? [...t.items] : [];
      }
    ), ye(
      () => t.overlayAppBar,
      (P) => {
        X();
      }
    );
    const k = i(() => {
      if (!t.items) return [];
      if (!b.value || b.value.trim().length === 0) return x.value;
      const P = b.value.toLowerCase();
      return x.value.filter((_) => String(_.label || _.name || "").toLowerCase().includes(P) || _.tags && String(_.tags).toLowerCase().includes(P));
    }), z = i(() => {
      if (!t.items) return [];
      if (!t.groupBy) return [{ group: null, items: k.value }];
      const P = {}, _ = typeof t.groupBy == "function" ? t.groupBy : (ne) => ne[t.groupBy];
      return k.value.forEach((ne) => {
        const K = _(ne) || "Ungrouped";
        P[K] || (P[K] = []), P[K].push(ne);
      }), Object.keys(P).map((ne) => ({ group: ne, items: P[ne] }));
    }), h = M({});
    ye(z, (P) => {
      P.forEach((_) => {
        const ne = String(_.group || "Ungrouped");
        h.value[ne] === void 0 && (h.value[ne] = !!t.groupDefaultOpen);
      });
    });
    function m(P) {
      if (!t.collapsibleGroups) return !0;
      const _ = String(P || "Ungrouped");
      return !!h.value[_];
    }
    function d(P) {
      if (!t.collapsibleGroups) return;
      const _ = String(P || "Ungrouped");
      h.value[_] = !h.value[_], l("group-toggle", { group: P, open: h.value[_] });
    }
    function c(P, _) {
      const ne = t.groupParents && _ ? t.groupParents[_] : void 0;
      (!ne || !ne.href) && (P.preventDefault(), d(_));
    }
    function f(P, _) {
      if (!_) return;
      const ne = t.groupParents && _ ? t.groupParents[_] : void 0;
      (P.key === "Enter" || P.key === " ") && (!ne || !ne.href) && (P.preventDefault(), P.stopPropagation(), d(_));
    }
    function C() {
      const P = s.value;
      if (!P) return;
      P.querySelectorAll("li").forEach((K) => {
        const re = K.querySelector("svg");
        re && !re.classList.contains("rail-icon") && re.classList.add("rail-icon"), Array.from(K.childNodes).forEach((Le) => {
          if (Le.nodeType === Node.TEXT_NODE) {
            const Oe = Le.textContent?.trim();
            if (Oe && Oe.length) {
              const _e = document.createElement("span");
              _e.className = "rail-label", _e.textContent = Oe, K.replaceChild(_e, Le);
            }
          } else if (Le.nodeType === Node.ELEMENT_NODE) {
            const Oe = Le;
            if (Oe.classList.contains("rail-label") || Oe.classList.contains("rail-icon")) return;
            Array.from(Oe.childNodes).forEach((ot) => {
              if (ot.nodeType === Node.TEXT_NODE) {
                const st = ot.textContent?.trim();
                if (st && st.length) {
                  const it = document.createElement("span");
                  it.className = "rail-label", it.textContent = st, Oe.replaceChild(it, ot);
                }
              }
            });
          }
        });
      }), P.querySelectorAll(":scope > a, :scope > button").forEach((K) => {
        K.classList.contains("nav-drawer-link") || K.classList.add("nav-drawer-link");
        const re = K.parentElement;
        if (re && re.tagName.toLowerCase() !== "li") {
          const ze = document.createElement("li");
          ze.className = "nav-drawer-item", re.replaceChild(ze, K), ze.appendChild(K);
        }
      });
    }
    let w = null, $ = null, S = null;
    function F(P, _ = x.value) {
      return P == null ? -1 : _.findIndex((ne) => String(ne.id) === String(P));
    }
    function N(P) {
      w = P.id;
    }
    function A(P) {
      if ($ = P.id, P.event && P.event.clientY !== void 0) {
        const _ = document.querySelector(`[data-drawer-item-id='${P.id}']`);
        if (_) {
          const ne = _.getBoundingClientRect(), K = ne.top + ne.height / 2;
          S = P.event.clientY < K ? "before" : "after";
        }
      } else
        S = "after";
    }
    function W(P) {
      if (!t.items || !t.draggable) return;
      const _ = P.sourceId !== void 0 ? P.sourceId : w, ne = P.id;
      if (!_ || !ne || String(_) === String(ne)) return;
      const K = F(_), re = F(ne);
      if (K === -1 || re === -1) return;
      const ze = [...x.value], [Le] = ze.splice(K, 1);
      ze.splice(re, 0, Le), x.value = ze, l("update:items", ze), l("reorder", { items: ze }), w = null, $ = null, S = null;
    }
    function J(P) {
      s.value && (s.value.contains(P.target) || p());
    }
    ye(
      () => t.modelValue,
      (P) => {
        o.value = !!P, Ze();
      }
    ), ye(
      () => t.permanent,
      (P) => {
        Ze();
      }
    ), ye(o, (P) => {
      l("update:modelValue", P), l(P ? "open" : "close");
    });
    const I = i(() => t.permanent ? !0 : o.value), Y = () => {
      t.permanent || (o.value = !1);
    }, oe = () => {
      t.closeOnScrimClick && Y();
    }, E = (P) => {
      P.key === "Escape" && (t.temporary || t.persistent) && Y();
    };
    Ve(() => {
      document.addEventListener("keydown", E), document.addEventListener("click", J), C();
    }), Ht(() => {
      C();
    }), Be(() => {
      document.removeEventListener("keydown", E), document.removeEventListener("click", J), window.removeEventListener("resize", ie);
    });
    let R = null;
    function Z(P) {
      return Array.from(P.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'));
    }
    ye(I, (P) => {
      if (P && (t.temporary || t.persistent)) {
        const _ = s.value;
        if (!_) return;
        const ne = Z(_);
        ne.length ? ne[0].focus() : (_.setAttribute("tabindex", "-1"), _.focus()), R = (K) => {
          if (K.key !== "Tab") return;
          const re = Z(_);
          if (!re.length) return;
          const ze = re[0], Le = re[re.length - 1];
          K.shiftKey && document.activeElement === ze ? (K.preventDefault(), Le.focus()) : !K.shiftKey && document.activeElement === Le && (K.preventDefault(), ze.focus());
        }, document.addEventListener("keydown", R);
      } else
        R && (document.removeEventListener("keydown", R), R = null);
      C();
    });
    const T = M(!1), j = i(() => t.rail ? !0 : !!(t.hoverExpand || t.expandOnHover));
    let le;
    const U = () => {
      j.value && (le && window.clearTimeout(le), T.value = !0);
    }, p = () => {
      j.value && (le = window.setTimeout(() => {
        T.value = !1;
      }, 150));
    }, u = i(() => t.rail && !T.value), B = i(() => t.location === "right" ? "right-0" : "left-0"), L = i(() => u.value ? typeof t.railWidth == "number" ? `w-[${t.railWidth}px]` : String(t.railWidth) : typeof t.width == "number" ? `w-[${t.width}px]` : String(t.width)), H = i(() => {
      const P = ["fixed", "h-full", "overflow-hidden", "flex", "flex-col"];
      return t.isStuck && P.push("top-0"), t.location === "right" ? P.push("right-0") : P.push("left-0"), t.rail && P.push("transition-all"), ye(
        () => t.rail,
        (_) => {
          C();
        }
      ), P.join(" ");
    }), me = i(() => t.rail ? "drawer-rail" : ""), ce = i(() => t.rail && !u.value ? "drawer-expanded" : ""), fe = i(() => !(t.rail && u.value)), Se = i(() => t.location === "right" ? "translate-x-full" : "-translate-x-full"), rt = i(() => t.zIndex !== void 0 && typeof t.zIndex == "string" && t.zIndex.startsWith("z-") ? t.zIndex : t.overlayAppBar ? "z-50" : "z-10"), qe = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex };
    }), at = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex - 1 };
    }), O = M(0), X = () => {
      if (!t.appBarOffset && t.overlayAppBar) {
        O.value = 0;
        return;
      }
      if (t.appBarHeight !== void 0 && t.appBarHeight !== null) {
        if (typeof t.appBarHeight == "number") O.value = t.appBarHeight;
        else if (typeof t.appBarHeight == "string") {
          const P = Number(String(t.appBarHeight).replace(/px$/i, ""));
          O.value = Number.isFinite(P) ? P : 0;
        }
        console.log("Using provided appBarHeight for top padding:", O.value);
        return;
      }
      if (typeof document < "u") {
        const P = document.querySelector('[data-component="appbar"]');
        if (!P) {
          O.value = 0;
          return;
        }
        const _ = P.getBoundingClientRect();
        O.value = Math.round(_.height), console.log("Computed top padding for drawer:", O.value);
      }
    };
    X();
    let se;
    const ie = () => {
      se && window.clearTimeout(se), se = window.setTimeout(() => {
        X();
      }, 100);
    };
    Ve(() => {
      window.addEventListener("resize", ie);
    }), Be(() => {
      window.removeEventListener("resize", ie);
    });
    const Me = i(() => t.zIndex !== void 0 && typeof t.zIndex == "number" ? "" : t.overlayAppBar ? "z-40" : "z-0"), Ce = pe("layout", null), Re = M(null), ht = M(0);
    function Ze() {
      Re.value && (ht.value = Re.value.getBoundingClientRect().width, Ce && !t.rail && Ce.register("drawer", t.id, {
        mode: t.modelValue || t.permanent ? "permanent" : "rail",
        right: t.location === "right",
        width: ht.value
      }));
    }
    return Ve(() => {
      Re.value = s.value, Ze();
      const P = new ResizeObserver(Ze);
      Re.value && P.observe(Re.value), Be(() => {
        P.disconnect(), Ce && Ce.unregister("drawer", t.id);
      });
    }), (P, _) => {
      const ne = be("Icon");
      return r(), a("div", la, [
        I.value && e.temporary ? (r(), a("div", {
          key: 0,
          class: v(["fixed inset-0", Me.value]),
          style: de([at.value]),
          onClick: oe
        }, null, 6)) : y("", !0),
        g("nav", {
          ref_key: "navRef",
          ref: s,
          class: v([
            rt.value,
            t.location === "right" ? "border-l" : "border",
            "border-color-2 transform transition-transform duration-200 ease-in-out",
            H.value,
            B.value,
            me.value,
            ce.value,
            e.color,
            L.value,
            !I.value && !e.permanent ? Se.value : "translate-x-0"
          ]),
          style: de([qe.value, O.value ? { paddingTop: O.value + "px" } : void 0]),
          "aria-hidden": !I.value && !e.permanent,
          onClick: U
        }, [
          g("div", ra, [
            g("div", aa, [
              fe.value ? D(P.$slots, "prepend", { key: 0 }, () => [
                _[1] || (_[1] = g("span", { class: "font-semibold" }, "Menu", -1))
              ], !0) : y("", !0),
              g("div", oa, [
                D(P.$slots, "append", {}, void 0, !0),
                !e.permanent && !e.temporary ? (r(), a("button", sa, [
                  e.location === "left" && !q(Ae) && u.value && !e.rail ? (r(), Q(ne, {
                    key: 0,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : y("", !0),
                  e.location === "left" && !q(Ae) && !e.rail && !u.value ? (r(), Q(ne, {
                    key: 1,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : y("", !0),
                  e.location === "right" && q(Ae) && !e.rail && u.value ? (r(), Q(ne, {
                    key: 2,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : y("", !0),
                  e.location === "right" && q(Ae) && !e.rail && !u.value ? (r(), Q(ne, {
                    key: 3,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : y("", !0)
                ])) : y("", !0),
                e.temporary ? (r(), a("button", {
                  key: 1,
                  onClick: Y,
                  class: v(["ml-2 rounded p-2"]),
                  "aria-label": "Close drawer"
                }, [
                  G(ne, {
                    name: "x-mark",
                    class: "fill-color-4 hover:fill-color-3",
                    size: "20"
                  })
                ])) : y("", !0)
              ])
            ]),
            g("div", ia, [
              t.items ? (r(), a("div", ua, [
                t.filterable && !(t.rail && u.value) ? (r(), a("div", da, [
                  G(q(bt), {
                    prepend: "magnifying-glass",
                    label: "Search",
                    modelValue: b.value,
                    "onUpdate:modelValue": _[0] || (_[0] = (K) => b.value = K),
                    placeholder: t.searchPlaceholder
                  }, null, 8, ["modelValue", "placeholder"])
                ])) : y("", !0),
                (r(!0), a(ae, null, ue(z.value, (K) => (r(), a("div", {
                  key: K.group,
                  class: v(["py-2", u.value ? "py-1" : ""])
                }, [
                  K.group ? (r(), a("div", {
                    key: 0,
                    class: v(["group-header px-3 pt-3 pb-1 text-lg uppercase flex items-center justify-between", P.groupHeaderStyles, u.value ? "pt-1 pb-0 px-1" : ""]),
                    role: "button",
                    tabindex: t.collapsibleGroups ? 0 : -1,
                    onClick: ee((re) => d(K.group), ["prevent"]),
                    onKeydown: [
                      he(ee((re) => d(K.group), ["prevent"]), ["enter"]),
                      he(ee((re) => d(K.group), ["prevent"]), ["space"])
                    ],
                    "aria-expanded": m(K.group)
                  }, [
                    g("span", fa, [
                      t.renderGroupParent ? (r(), Q(Ne(t.groupParents && t.groupParents[K.group] && t.groupParents[K.group].href ? "a" : "button"), {
                        key: 0,
                        href: t.groupParents && t.groupParents[K.group] && t.groupParents[K.group].href || void 0,
                        class: "group-parent flex items-center gap-3 px-0 py-0 w-full text-left",
                        onClick: ee((re) => c(re, K.group), ["stop"]),
                        onKeydown: (re) => f(re, K.group)
                      }, {
                        default: te(() => [
                          t.groupParents && t.groupParents[K.group] && t.groupParents[K.group].icon ? (r(), a("span", ga, [
                            G(ne, {
                              name: t.groupParents[K.group].icon,
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : t.groupIcons && t.groupIcons[K.group] ? (r(), a("span", ma, [
                            G(ne, {
                              name: t.groupIcons[K.group],
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : y("", !0),
                          !t.rail || !u.value ? (r(), a("span", {
                            key: 2,
                            class: v(["text-lg uppercase", P.groupHeaderStyles])
                          }, V(t.groupParents && t.groupParents[K.group] && t.groupParents[K.group].label || K.group), 3)) : y("", !0)
                        ]),
                        _: 2
                      }, 1064, ["href", "onClick", "onKeydown"])) : (r(), a(ae, { key: 1 }, [
                        t.groupIcons && t.groupIcons[K.group] ? (r(), a("span", pa, [
                          G(ne, {
                            name: t.groupIcons[K.group],
                            size: "18"
                          }, null, 8, ["name"])
                        ])) : y("", !0),
                        !t.rail || !u.value ? (r(), a("span", {
                          key: 1,
                          class: v(["text-lg uppercase", P.groupHeaderStyles])
                        }, V(K.group), 3)) : y("", !0)
                      ], 64))
                    ]),
                    t.collapsibleGroups && (!t.rail || !u.value) ? (r(), a("button", {
                      key: 0,
                      onClick: ee((re) => d(K.group), ["stop", "prevent"]),
                      onKeydown: [
                        he(ee((re) => d(K.group), ["stop", "prevent"]), ["enter"]),
                        he(ee((re) => d(K.group), ["stop", "prevent"]), ["space"])
                      ],
                      class: v(["px-2 py-1 rounded focus:outline-none", P.groupHeaderStyles]),
                      style: { opacity: 0.7 },
                      "aria-expanded": m(K.group)
                    }, [
                      G(ne, {
                        name: "chevron-down",
                        size: "16",
                        class: v({ "rotate-180": m(K.group) })
                      }, null, 8, ["class"])
                    ], 42, va)) : y("", !0)
                  ], 42, ca)) : y("", !0),
                  Ie(g("ul", {
                    class: v(["py-1", u.value ? "py-0" : ""])
                  }, [
                    (r(!0), a(ae, null, ue(K.items, (re) => (r(), Q(q(Dt), {
                      key: re.id,
                      id: re.id,
                      href: re.href,
                      draggable: t.draggable && !re.disabled,
                      dragging: String(q(w)) === String(re.id),
                      "is-drag-over": String(q($)) === String(re.id),
                      "drag-pos": q(S),
                      onDragstart: N,
                      onDragover: A,
                      onDragleave: (ze) => {
                        String(q($)) === String(re.id) && (wt($) ? $.value = null : $ = null, wt(S) ? S.value = null : S = null);
                      },
                      onDrop: W
                    }, {
                      default: te(() => [
                        re.icon ? (r(), Q(ne, {
                          key: 0,
                          name: re.icon,
                          size: "20",
                          class: "rail-icon mr-2"
                        }, null, 8, ["name"])) : y("", !0),
                        g("span", ya, V(re.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["id", "href", "draggable", "dragging", "is-drag-over", "drag-pos", "onDragleave"]))), 128))
                  ], 2), [
                    [je, m(K.group)]
                  ])
                ], 2))), 128))
              ])) : (r(), a("div", ba, [
                D(P.$slots, "default", {}, void 0, !0)
              ]))
            ]),
            g("div", ha, [
              D(P.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ], 14, na)
      ]);
    };
  }
}, wa = /* @__PURE__ */ ge(xa, [["__scopeId", "data-v-5da8f8e8"]]), ka = ["data-drawer-item-id", "draggable"], Sa = ["href"], Ca = {
  __name: "SideBarItem",
  props: {
    id: { type: [String, Number], default: "" },
    href: { type: String, default: "" },
    draggable: { type: Boolean, default: !1 },
    dragging: { type: Boolean, default: !1 },
    isDragOver: { type: Boolean, default: !1 },
    dragPos: { type: String, default: null }
  },
  emits: ["dragstart", "dragover", "dragleave", "drop", "click"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = (z) => {
      t.draggable && (z.dataTransfer.setData("text/plain", String(t.id)), l("dragstart", { id: t.id, event: z }));
    }, s = (z) => {
      t.draggable && l("dragover", { id: t.id, event: z });
    }, x = (z) => {
      l("dragleave", { id: t.id, event: z });
    }, b = (z) => {
      const h = z.dataTransfer.getData("text/plain");
      l("drop", { id: t.id, sourceId: h, event: z });
    }, k = (z) => {
      l("click", { id: t.id, event: z });
    };
    return (z, h) => (r(), a("li", {
      "data-drawer-item-id": e.id,
      draggable: e.draggable,
      class: v([
        "nav-drawer-item flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors",
        "hover:bg-color-2",
        e.dragging ? "opacity-50" : "",
        e.isDragOver && e.dragPos === "before" ? "border-t-2 border-color-1" : "",
        e.isDragOver && e.dragPos === "after" ? "border-b-2 border-color-1" : ""
      ]),
      onDragstart: o,
      onDragover: ee(s, ["prevent"]),
      onDragleave: x,
      onDrop: ee(b, ["prevent"]),
      onClick: k
    }, [
      e.href ? (r(), a("a", {
        key: 0,
        href: e.href,
        class: "flex items-center w-full"
      }, [
        D(z.$slots, "default", {}, void 0, !0)
      ], 8, Sa)) : D(z.$slots, "default", { key: 1 }, void 0, !0)
    ], 42, ka));
  }
}, Dt = /* @__PURE__ */ ge(Ca, [["__scopeId", "data-v-464014e1"]]), $a = {
  key: 0,
  class: "flex-shrink-0"
}, za = { class: "flex-1 min-w-0" }, Ba = {
  key: 0,
  class: "font-semibold text-sm mb-1"
}, Ia = {
  key: 3,
  class: "absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b overflow-hidden"
}, Va = {
  __name: "Snackbar",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    message: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "success", "error", "warning", "info"].includes(e)
    },
    icon: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    timeout: {
      type: Number,
      default: 5e3
    },
    position: {
      type: String,
      default: "bottom",
      validator: (e) => ["top", "bottom"].includes(e)
    },
    closeable: {
      type: Boolean,
      default: !0
    },
    showProgress: {
      type: Boolean,
      default: !1
    },
    multiline: {
      type: Boolean,
      default: !1
    },
    onAction: {
      type: Function,
      default: null
    }
  },
  emits: ["update:modelValue", "close", "action"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = M(100);
    let s = null;
    const x = i(() => {
      const h = {
        default: "bg-color-2 text-ui-text-color border-color",
        success: "bg-green-50 text-success border-green-400",
        error: "bg-red-50 text-error border-red-400",
        warning: "bg-yellow-50 text-warning border-yellow-400",
        info: "bg-blue-50 text-info border-blue-400"
      };
      return h[t.variant] || h.default;
    }), b = i(() => {
      if (t.icon && !["success", "error", "warning", "info"].includes(t.icon))
        return t.icon;
      const h = {
        success: "check-circle",
        error: "x-circle",
        warning: "exclamation-triangle",
        info: "information-circle",
        default: "bell"
      };
      return h[t.variant] || h.default;
    }), k = () => {
      l("update:modelValue", !1), l("close");
    }, z = () => {
      l("action"), t.onAction && t.onAction();
    };
    return ye(() => t.modelValue, (h) => {
      if (h && t.showProgress && t.timeout > 0) {
        o.value = 100;
        const m = 50, d = 100 / t.timeout * m;
        s = setInterval(() => {
          o.value -= d, o.value <= 0 && (clearInterval(s), o.value = 0);
        }, m);
      }
    }, { immediate: !0 }), Be(() => {
      s && clearInterval(s);
    }), (h, m) => {
      const d = be("Icon");
      return r(), Q(ke, {
        "enter-active-class": "transition-all duration-300",
        "enter-from-class": "translate-x-full opacity-0",
        "enter-to-class": "translate-x-0 opacity-100",
        "leave-active-class": "transition-all duration-200",
        "leave-from-class": "translate-x-0 opacity-100",
        "leave-to-class": "translate-x-full opacity-0"
      }, {
        default: te(() => [
          e.modelValue ? (r(), a("div", {
            key: 0,
            class: v([
              "min-w-[300px] max-w-md rounded-lg shadow-lg border",
              "flex items-start gap-3 pointer-events-auto",
              x.value,
              e.multiline ? "flex-col p-4" : "items-center px-4 py-3"
            ]),
            role: "alert"
          }, [
            e.icon || e.variant !== "default" ? (r(), a("div", $a, [
              G(d, {
                name: b.value,
                size: 20,
                color: "text-current"
              }, null, 8, ["name"])
            ])) : y("", !0),
            g("div", za, [
              e.title ? (r(), a("h3", Ba, V(e.title), 1)) : y("", !0),
              g("p", {
                class: v(["text-sm", e.multiline ? "" : "truncate"])
              }, V(e.message), 3)
            ]),
            e.action ? (r(), a("button", {
              key: 1,
              onClick: z,
              class: "flex-shrink-0 px-3 py-1 text-sm font-medium rounded hover:bg-black/10 transition-colors"
            }, V(e.action), 1)) : y("", !0),
            e.closeable ? (r(), a("button", {
              key: 2,
              onClick: k,
              class: "flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
            }, [
              G(d, {
                name: "x-mark",
                size: 16,
                color: "text-current"
              })
            ])) : y("", !0),
            e.showProgress && e.timeout > 0 ? (r(), a("div", Ia, [
              g("div", {
                class: "h-full bg-current transition-all ease-linear",
                style: de({ width: o.value + "%" })
              }, null, 4)
            ])) : y("", !0)
          ], 2)) : y("", !0)
        ]),
        _: 1
      });
    };
  }
}, Ta = /* @__PURE__ */ ge(Va, [["__scopeId", "data-v-5076a311"]]), Ma = {
  key: 0,
  class: "block"
}, La = ["onClick", "onKeydown"], Aa = {
  key: 0,
  class: "font-semibold mb-1"
}, Pa = {
  key: 1,
  class: "text-secondary text-xs mb-2"
}, Da = {
  key: 2,
  class: "text-sm"
}, Oa = ["onClick", "onKeydown"], Ea = {
  key: 0,
  class: "font-semibold mb-1"
}, ja = {
  key: 1,
  class: "text-secondary text-xs mb-2"
}, Na = {
  key: 2,
  class: "text-sm"
}, Ra = {
  __name: "Timeline",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
      default: "vertical"
    },
    side: {
      type: String,
      default: "both"
    },
    align: {
      type: String,
      default: "start"
    },
    alternate: {
      type: Boolean,
      default: !0
    },
    rtl: {
      type: Boolean,
      default: !1
    },
    lineStyle: {
      type: String,
      default: "solid"
    },
    dotShape: {
      type: String,
      default: "circle"
    },
    dotSize: {
      type: String,
      default: "lg"
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    },
    elevation: {
      type: [Number, String],
      default: 1
    },
    equalizeCards: {
      type: Boolean,
      default: !0
    },
    gap: {
      type: Number,
      default: 30
    }
  },
  emits: ["item-click"],
  setup(e, { emit: n }) {
    const { language: t } = pe("i18n", { language: M("en"), t: (f) => f, setLanguage: () => {
    } }), l = e, o = i(() => l.rtl ?? Ae.value), s = nt(), x = i(() => !!s.item), b = i(() => !!s.default), k = i(() => l.dotSize === "sm" ? 10 : l.dotSize === "lg" ? 16 : 12), z = i(() => l.gap ?? 16);
    function h(f) {
      if (l.direction === "horizontal") return "bottom";
      if (l.side === "one")
        return o.value ? "right" : "left";
      const w = (l.alternate ? f % 2 === 0 : !0) ? "left" : "right";
      return o.value ? w === "left" ? "right" : "left" : w;
    }
    function m(f) {
      return l.direction === "horizontal" ? {} : l.side === "one" ? {
        maxWidth: "100%",
        marginLeft: "0",
        marginRight: "0",
        marginInlineStart: z.value + "px",
        marginInlineEnd: "0"
      } : h(f) === "left" ? {
        maxWidth: "50%",
        marginLeft: "0",
        marginRight: "calc(50% + 16px)"
      } : {
        maxWidth: "50%",
        marginRight: "0",
        marginLeft: "calc(50% + 16px)"
      };
    }
    function d(f) {
      switch (f.status ?? "default") {
        case "primary":
          return "bg-primary";
        case "success":
          return "bg-success";
        case "warning":
          return "bg-warning";
        case "error":
          return "bg-error";
        case "info":
          return "bg-info";
        default:
          return "bg-color-4";
      }
    }
    const c = n;
    return (f, C) => (r(), a("div", {
      class: v(["relative ui-text-color", [
        e.direction === "vertical" ? "py-2" : "py-6 px-2"
      ]])
    }, [
      g("div", {
        class: v([
          "absolute top-0 bottom-0 w-0.5 bg-color-4",
          e.direction === "vertical" && e.side === "both" ? "left-1/2 -translate-x-1/2" : "",
          e.direction === "horizontal" ? "left-0 right-0 h-0.5 w-full" : "h-full",
          e.lineStyle === "dashed" ? "timeline-dashed-line" : ""
        ]),
        style: de({
          top: e.direction === "horizontal" ? `calc(24px + (${k.value}px / 2))` : "0",
          ...e.direction === "vertical" && e.side === "one" ? o.value ? { right: `${k.value / 2 - 1}px` } : { left: `${k.value / 2 - 1}px` } : {}
        })
      }, null, 6),
      e.direction === "vertical" ? (r(), a("div", Ma, [
        (r(!0), a(ae, null, ue(e.items, (w, $) => (r(), a("div", {
          key: w.id ?? $,
          class: v([
            "relative clear-both",
            e.condensed ? "mb-3" : "mb-6"
          ])
        }, [
          g("div", {
            class: v([
              "absolute rounded-full border border-solid shadow-sm",
              d(w),
              e.side === "one" ? o.value ? "right-0" : "left-0" : "left-1/2 -translate-x-1/2"
            ]),
            style: de({
              width: k.value + "px",
              height: k.value + "px",
              borderColor: "var(--color-1)",
              top: "0.5rem"
            })
          }, null, 6),
          g("div", {
            class: v([
              "border border-color-2 rounded-md py-3 px-4 transition-all",
              "align-" + e.align,
              e.clickable ? "cursor-pointer hover:shadow-md" : "",
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg"
            ]),
            style: de({
              background: "var(--color-2)",
              ...m($)
            }),
            role: "group",
            tabindex: "0",
            onClick: (S) => c("item-click", { item: w, index: $ }),
            onKeydown: [
              he(ee((S) => c("item-click", { item: w, index: $ }), ["prevent"]), ["enter"]),
              he(ee((S) => c("item-click", { item: w, index: $ }), ["prevent"]), ["space"])
            ]
          }, [
            x.value ? D(f.$slots, "item", {
              key: 0,
              item: w,
              index: $
            }, void 0, !0) : b.value ? D(f.$slots, "default", {
              key: 1,
              item: w,
              index: $
            }, void 0, !0) : (r(), a(ae, { key: 2 }, [
              w.title ? (r(), a("div", Aa, V(w.title), 1)) : y("", !0),
              w.time ? (r(), a("div", Pa, V(w.time), 1)) : y("", !0),
              w.content ? (r(), a("div", Da, V(w.content), 1)) : y("", !0)
            ], 64))
          ], 46, La)
        ], 2))), 128))
      ])) : (r(), a("div", {
        key: 1,
        class: v(["flex gap-6 items-start justify-between relative", [e.equalizeCards ? "items-stretch" : ""]])
      }, [
        (r(!0), a(ae, null, ue(e.items, (w, $) => (r(), a("div", {
          key: w.id ?? $,
          class: "relative flex flex-col flex-1 pt-6"
        }, [
          g("div", {
            class: v([
              "absolute rounded-full border border-solid shadow-sm left-1/2 -translate-x-1/2 top-0",
              d(w)
            ]),
            style: de({
              width: k.value + "px",
              height: k.value + "px",
              borderColor: "var(--color-1)"
            })
          }, null, 6),
          g("div", {
            class: v([
              "border border-solid border-color rounded-md py-3 px-4 mt-4 transition-all",
              "align-" + e.align,
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg",
              e.equalizeCards ? "flex-1" : ""
            ]),
            style: { background: "var(--color-2)" },
            role: "group",
            tabindex: "0",
            onClick: (S) => c("item-click", { item: w, index: $ }),
            onKeydown: [
              he(ee((S) => c("item-click", { item: w, index: $ }), ["prevent"]), ["enter"]),
              he(ee((S) => c("item-click", { item: w, index: $ }), ["prevent"]), ["space"])
            ]
          }, [
            x.value ? D(f.$slots, "item", {
              key: 0,
              item: w,
              index: $
            }, void 0, !0) : b.value ? D(f.$slots, "default", {
              key: 1,
              item: w,
              index: $
            }, void 0, !0) : (r(), a(ae, { key: 2 }, [
              w.title ? (r(), a("div", Ea, V(w.title), 1)) : y("", !0),
              w.time ? (r(), a("div", ja, V(w.time), 1)) : y("", !0),
              w.content ? (r(), a("div", Na, V(w.content), 1)) : y("", !0)
            ], 64))
          ], 42, Oa)
        ]))), 128))
      ], 2))
    ], 2));
  }
}, Ha = /* @__PURE__ */ ge(Ra, [["__scopeId", "data-v-0987c29e"]]), Ua = { class: "v-timeline-item" }, Fa = { class: "v-timeline-item__opposite py-2 px-4" }, qa = {
  key: 0,
  class: "v-timeline-item__icon"
}, Wa = { class: "v-timeline-item__content py-2 px-4 rounded-md" }, Ka = {
  __name: "TimelineItem",
  props: {
    color: {
      type: String,
      default: "var(--color-primary)"
    },
    icon: {
      type: String,
      default: null
    },
    dot: {
      type: Boolean,
      default: !0
    },
    hideDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = pe("timeline", null);
    return i(() => ({
      "v-timeline-item": !0,
      "v-timeline-item--alternate": n?.align === "alternate"
    })), (t, l) => (r(), a("div", Ua, [
      g("div", Fa, [
        D(t.$slots, "opposite", {}, void 0, !0)
      ]),
      e.hideDot ? y("", !0) : (r(), a("div", {
        key: 0,
        class: "v-timeline-item__dot rounded-full mt-3",
        style: de({ background: e.color })
      }, [
        D(t.$slots, "icon", {}, () => [
          e.icon ? (r(), a("span", qa, V(e.icon), 1)) : y("", !0)
        ], !0)
      ], 4)),
      g("div", Wa, [
        D(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, Ga = /* @__PURE__ */ ge(Ka, [["__scopeId", "data-v-6b3c0fc8"]]), Ya = ["id", "dir"], Xa = ["aria-orientation", "aria-label"], Ja = ["id", "aria-selected", "aria-controls", "tabindex", "disabled", "onClick", "onKeydown"], Qa = ["aria-label", "onClick"], Za = {
  key: 0,
  class: "absolute top-1/2 -translate-y-1/2 right-0 flex items-center gap-1 bg-gradient-to-l from-color-1 via-color-1 to-transparent pl-6 pr-1"
}, _a = ["id", "aria-labelledby"], eo = {
  __name: "Tab",
  props: {
    // Data
    tabs: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    // Styling / variants
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "outline", "pills", "underline"].includes(e)
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["sm", "default", "lg"].includes(e)
    },
    // Behavior
    vertical: { type: Boolean, default: !1 },
    // Horizontal placement of the tab strip. Ignored when vertical, and when
    // fullWidth is set (the tabs already span the whole row).
    align: {
      type: String,
      default: "left",
      validator: (e) => ["left", "center", "right"].includes(e)
    },
    closable: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    lazy: { type: Boolean, default: !1 },
    showScrollButtons: { type: Boolean, default: !0 },
    fullWidth: { type: Boolean, default: !1 },
    // Scrolling - only scroll when this is true AND contentHeight is provided
    scrollable: { type: Boolean, default: !1 },
    // Layout - height for scrollable content (e.g., 'h-[500px]', 'h-screen', 'max-h-[80vh]')
    contentHeight: { type: String, default: "" },
    // Accessibility
    ariaLabel: { type: String, default: "Tabs" }
  },
  emits: ["update:modelValue", "change", "close", "keydown"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => (
      /** @type {any[]} */
      t.tabs
    )), s = M(`tabs-${Math.random().toString(36).substr(2, 9)}`), x = M(t.modelValue), b = M(null), k = M(!1), z = M(!1), h = i(() => Ae.value), m = i(() => t.scrollable), d = i(() => m.value ? t.vertical ? "overflow-y-auto" : "overflow-x-auto" : "overflow-visible"), c = ["default", "pills"], f = i(() => ({ left: "self-start", center: "self-center", right: "self-end" })[t.align] || "self-start"), C = i(() => ({ left: "justify-start", center: "justify-center", right: "justify-end" })[t.align] || "justify-start"), w = i(() => t.vertical || t.fullWidth ? "" : c.includes(t.variant) ? f.value : C.value), $ = i(() => {
      const p = [];
      return t.variant === "default" ? t.vertical ? p.push("inline-flex flex-col h-auto items-stretch rounded-lg bg-color-2 p-1 ui-text-secondary") : p.push("inline-flex h-10 items-center rounded-lg bg-color-2 p-1 ui-text-secondary") : t.variant === "outline" ? t.vertical ? p.push("flex flex-col space-y-1 border-r border-color-3 pr-4") : p.push("flex border-b border-color-3") : t.variant === "pills" ? (p.push("flex gap-2"), t.vertical && p.push("flex-col")) : t.variant === "underline" && (t.vertical ? p.push("flex flex-col space-y-1 border-r-2 border-color-3 pr-4") : p.push("flex border-b-2 border-color-3")), t.fullWidth && !t.vertical && p.push("w-full"), w.value && p.push(w.value), p.join(" ");
    }), S = i(() => t.variant === "default" ? t.fullWidth ? "w-full" : "" : t.variant === "outline" || t.variant === "underline" ? t.vertical ? "" : t.fullWidth ? "w-full" : "inline-flex" : ""), F = i(() => m.value && t.contentHeight ? "flex-1 min-w-0 min-h-0 overflow-auto" : "flex-1 min-w-0"), N = i(() => {
      const p = {
        sm: "text-xs px-2.5 py-1.5",
        default: "text-sm px-3 py-2",
        lg: "text-base px-4 py-2.5"
      };
      return p[t.size] || p.default;
    }), A = i(() => {
      const p = {
        sm: "h-3.5 w-3.5",
        default: "h-4 w-4",
        lg: "h-5 w-5"
      };
      return p[t.size] || p.default;
    }), W = i(() => {
      const p = {
        sm: "h-4 min-w-4 px-1 text-[10px]",
        default: "h-5 min-w-5 px-1.5 text-xs",
        lg: "h-6 min-w-6 px-2 text-xs"
      };
      return p[t.size] || p.default;
    }), J = (p) => {
      const u = x.value === p, L = o.value[p]?.disabled || t.disabled;
      let H = "font-medium ";
      return t.fullWidth && !t.vertical && (H += "flex-1 "), t.vertical && (H += "w-full justify-start "), t.variant === "default" ? (H += "rounded-md ", u ? H += "bg-color-1 ui-text-color shadow-sm " : L || (H += "hover:bg-color-3 hover:ui-text-color ")) : t.variant === "outline" ? t.vertical ? (H += "rounded-md border border-transparent ", u ? H += "border-color-3 bg-color-1 ui-text-color shadow-sm " : L || (H += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : (H += "border-b-2 -mb-[2px] rounded-none ", u ? H += "border-primary ui-text-color " : L || (H += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : t.variant === "pills" ? (H += "rounded-full ", u ? H += "bg-primary text-white shadow-sm " : L || (H += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : t.variant === "underline" && (t.vertical ? (H += "border-r-2 -mr-[2px] rounded-none pr-4 ", u ? H += "border-primary ui-text-color " : L || (H += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : (H += "border-b-2 -mb-[2px] rounded-none ", u ? H += "border-primary ui-text-color " : L || (H += "border-transparent ui-text-secondary hover:ui-text-color "))), H;
    }, I = (p) => {
      const u = String(p?.badgeVariant || "").toLowerCase();
      return u.includes("error") || u.includes("danger") || u.includes("red") ? "bg-red-500 text-white" : u.includes("success") || u.includes("green") ? "bg-green-500 text-white" : u.includes("warning") || u.includes("yellow") ? "bg-yellow-500 text-white" : u.includes("info") || u.includes("blue") ? "bg-blue-500 text-white" : u.includes("secondary") ? "bg-color-3 ui-text-color" : "bg-primary text-white";
    }, Y = i(() => {
      const p = {
        sm: "mt-3",
        default: "mt-4",
        lg: "mt-6"
      };
      return t.vertical ? "pl-0" : p[t.size] || p.default;
    }), oe = (p) => {
      o.value[p]?.disabled || t.disabled || (x.value = p, l("update:modelValue", p), l("change", p), m.value && Pe(() => {
        const B = document.getElementById(`tab-${s.value}-${p}`), L = b.value;
        if (B && L) {
          const H = B.offsetLeft, me = H + B.offsetWidth, ce = L.scrollLeft, fe = ce + L.clientWidth;
          H < ce ? L.scrollTo({ left: H - 8, behavior: "smooth" }) : me > fe && L.scrollTo({ left: me - L.clientWidth + 8, behavior: "smooth" });
        }
      }));
    }, E = (p) => {
      l("close", p);
    }, R = (p, u) => {
      l("keydown", p, u);
      const B = o.value.length;
      let L = u;
      const H = (me, ce) => {
        let fe = me;
        for (let Se = 0; Se < B; Se++)
          if (fe = (fe + ce + B) % B, !o.value[fe]?.disabled)
            return fe;
        return me;
      };
      switch (p.key) {
        case "ArrowDown":
          t.vertical && (p.preventDefault(), L = H(u, 1));
          break;
        case "ArrowUp":
          t.vertical && (p.preventDefault(), L = H(u, -1));
          break;
        case "ArrowRight":
          t.vertical || (p.preventDefault(), L = H(u, h.value ? -1 : 1));
          break;
        case "ArrowLeft":
          t.vertical || (p.preventDefault(), L = H(u, h.value ? 1 : -1));
          break;
        case "Home":
          p.preventDefault(), L = H(-1, 1);
          break;
        case "End":
          p.preventDefault(), L = H(B, -1);
          break;
      }
      L !== u && (oe(L), document.getElementById(`tab-${s.value}-${L}`)?.focus());
    }, Z = (p) => {
      if (!b.value || !m.value) return;
      const u = Math.max(200, b.value.clientWidth * 0.5);
      b.value.scrollBy({ left: p * u, behavior: "smooth" });
    }, T = () => {
      if (!b.value || !m.value) {
        k.value = !1, z.value = !1;
        return;
      }
      const { scrollLeft: p, scrollWidth: u, clientWidth: B } = b.value;
      k.value = p > 0, z.value = p < u - B - 10;
    };
    ye(
      () => t.modelValue,
      (p) => {
        x.value = p;
      }
    );
    let j = null;
    const le = () => {
      !b.value || !m.value || (Pe(T), b.value.addEventListener("scroll", T), typeof ResizeObserver < "u" && (j = new ResizeObserver(T), j.observe(b.value)));
    }, U = () => {
      b.value && b.value.removeEventListener("scroll", T), j && (j.disconnect(), j = null);
    };
    return ye(m, (p) => {
      U(), p && le();
    }), Ve(() => {
      m.value && le();
    }), Be(() => {
      U();
    }), (p, u) => (r(), a("div", {
      id: s.value,
      dir: h.value ? "rtl" : "ltr",
      class: v([
        e.vertical ? "flex flex-row gap-6" : "flex flex-col",
        e.scrollable && e.contentHeight ? e.contentHeight : "",
        e.scrollable ? "" : "h-auto"
      ])
    }, [
      g("div", {
        ref_key: "scrollContainer",
        ref: b,
        role: "tablist",
        "aria-orientation": e.vertical ? "vertical" : "horizontal",
        "aria-label": e.ariaLabel,
        class: v([
          "relative flex-shrink-0",
          d.value,
          $.value
        ])
      }, [
        g("div", {
          class: v([
            "flex",
            e.vertical ? "flex-col space-y-1" : e.scrollable ? "flex-row whitespace-nowrap" : "flex-row flex-wrap",
            S.value
          ])
        }, [
          (r(!0), a(ae, null, ue(o.value, (B, L) => (r(), a("button", {
            id: `tab-${s.value}-${L}`,
            key: L,
            role: "tab",
            type: "button",
            "aria-selected": x.value === L,
            "aria-controls": `panel-${s.value}-${L}`,
            tabindex: x.value === L ? 0 : -1,
            disabled: B.disabled || e.disabled,
            class: v([
              "relative inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-50",
              N.value,
              J(L)
            ]),
            onClick: (H) => oe(L),
            onKeydown: (H) => R(H, L)
          }, [
            B.icon ? (r(), Q(Ne(B.icon), {
              key: 0,
              class: v(A.value)
            }, null, 8, ["class"])) : y("", !0),
            g("span", null, V(B.label), 1),
            B.badge ? (r(), a("span", {
              key: 1,
              class: v([
                "inline-flex items-center justify-center rounded-full text-xs font-medium",
                W.value,
                I(B)
              ])
            }, V(B.badge), 3)) : y("", !0),
            e.closable && !B.disabled ? (r(), a("button", {
              key: 2,
              type: "button",
              "aria-label": `Close ${B.label}`,
              class: "ml-1 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              onClick: ee((H) => E(L), ["stop"])
            }, [...u[2] || (u[2] = [
              g("svg", {
                class: "h-3.5 w-3.5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                g("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, Qa)) : y("", !0)
          ], 42, Ja))), 128))
        ], 2),
        !e.vertical && e.scrollable && e.showScrollButtons && (k.value || z.value) ? (r(), a("div", Za, [
          k.value ? (r(), a("button", {
            key: 0,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: u[0] || (u[0] = (B) => Z(-1))
          }, [...u[3] || (u[3] = [
            g("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              g("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ])])) : y("", !0),
          z.value ? (r(), a("button", {
            key: 1,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: u[1] || (u[1] = (B) => Z(1))
          }, [...u[4] || (u[4] = [
            g("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              g("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ])])) : y("", !0)
        ])) : y("", !0)
      ], 10, Xa),
      g("div", {
        class: v(F.value)
      }, [
        (r(!0), a(ae, null, ue(o.value, (B, L) => (r(), a(ae, { key: L }, [
          !e.lazy || x.value === L ? Ie((r(), a("div", {
            key: 0,
            id: `panel-${s.value}-${L}`,
            role: "tabpanel",
            "aria-labelledby": `tab-${s.value}-${L}`,
            tabindex: 0,
            class: v(["focus-visible:outline-none", Y.value])
          }, [
            D(p.$slots, `content-${L}`, { tab: B }, () => [
              ve(V(B.content), 1)
            ])
          ], 10, _a)), [
            [je, x.value === L]
          ]) : y("", !0)
        ], 64))), 128))
      ], 2)
    ], 10, Ya));
  }
}, to = ["title"], lo = {
  key: 0,
  class: "w-5 h-5 transition-transform duration-300 ease-in-out hover:rotate-15",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, no = {
  key: 1,
  class: "w-5 h-5 transition-transform duration-300 ease-in-out hover:rotate-15",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ro = { class: "sr-only" }, ao = /* @__PURE__ */ Te({
  __name: "ThemeToggle",
  setup(e) {
    const n = M(!1);
    Ve(() => {
      const o = localStorage.getItem("theme");
      o ? n.value = o === "dark" : n.value = window.matchMedia("(prefers-color-scheme: dark)").matches, t();
    }), ye(n, () => {
      t(), localStorage.setItem("theme", n.value ? "dark" : "light");
    });
    const t = () => {
      n.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, l = () => {
      n.value = !n.value;
    };
    return (o, s) => (r(), a("button", {
      onClick: l,
      class: "flex items-center justify-center w-10 h-10 p-2 bg-transparent rounded-full cursor-pointer transition-all duration-300 ease-in-out text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 focus:outline-none",
      title: n.value ? "Switch to light mode" : "Switch to dark mode"
    }, [
      n.value ? (r(), a("svg", lo, [...s[0] || (s[0] = [
        Ut('<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" data-v-8069750e></circle><path d="m12 2 0 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m12 20 0 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m4.93 4.93 1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m17.66 17.66 1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m2 12 2 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m20 12 2 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m6.34 17.66-1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m19.07 4.93-1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path>', 9)
      ])])) : (r(), a("svg", no, [...s[1] || (s[1] = [
        g("path", {
          d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
          stroke: "currentColor",
          "stroke-width": "2",
          fill: "currentColor"
        }, null, -1)
      ])])),
      g("span", ro, V(n.value ? "Switch to light mode" : "Switch to dark mode"), 1)
    ], 8, to));
  }
}), oo = /* @__PURE__ */ ge(ao, [["__scopeId", "data-v-8069750e"]]), so = {
  __name: "Toolbar",
  props: {
    title: { type: String },
    bg: { type: String, default: "ui-bg-color" },
    border: { type: String, default: "border border-solid ui-border-color" },
    rounded: { type: String, default: "none" },
    padding: { type: String, default: "p-4" },
    margin: { type: String, default: "m-0" },
    width: { type: String, default: "w-full" },
    height: { type: String, default: "h-auto" },
    elevation: { type: String, default: "shadow-lg" },
    titleClass: { type: String }
  },
  setup(e) {
    return (n, t) => (r(), a("div", {
      class: v(["flex items-center justify-between gap-4", e.bg, e.border, q($e)[e.rounded], e.padding, e.margin, e.width, e.height, e.elevation])
    }, [
      D(n.$slots, "title", {}, () => [
        e.title ? (r(), a("h1", {
          key: 0,
          class: v([n.textClass ?? "text-2xl font-semibold md:text-nowrap md:whitespace-nowrap"])
        }, V(e.title), 3)) : y("", !0)
      ]),
      D(n.$slots, "default")
    ], 2));
  }
}, io = { class: "relative w-full overflow-auto rounded-lg border border-color-3" }, uo = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    return (n, t) => (r(), a("div", io, [
      g("table", xe({ class: "w-full caption-bottom text-sm" }, n.$attrs), [
        D(n.$slots, "default")
      ], 16)
    ]));
  }
}), co = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "TableHead",
  setup(e) {
    return (n, t) => (r(), a("thead", xe({ class: "bg-color-1 [&_tr]:border-b [&_tr]:border-color-3" }, n.$attrs), [
      D(n.$slots, "default")
    ], 16));
  }
}), fo = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "TableBody",
  setup(e) {
    return (n, t) => (r(), a("tbody", xe({ class: "[&_tr:last-child]:border-0 divide-y divide-color-3" }, n.$attrs), [
      D(n.$slots, "default")
    ], 16));
  }
}), go = ["data-state"], mo = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "TableRow",
  props: {
    selected: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (r(), a("tr", xe({
      class: ["border-b border-color-3 transition-colors", [
        e.selected ? "bg-color-2" : "hover:bg-color-1/60"
      ]],
      "data-state": e.selected ? "selected" : void 0
    }, n.$attrs), [
      D(n.$slots, "default")
    ], 16, go));
  }
}), po = { class: "inline-flex items-center gap-1" }, vo = {
  key: 0,
  class: "ml-1 flex flex-col opacity-40 group-hover:opacity-100 transition-opacity"
}, yo = {
  key: 0,
  class: "w-3 h-3 opacity-100 text-primary",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, bo = {
  key: 1,
  class: "w-3 h-3 opacity-100 text-primary",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, ho = {
  key: 2,
  class: "w-3 h-3",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, xo = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "Th",
  props: {
    sortable: { type: Boolean },
    sortDirection: {},
    align: {}
  },
  emits: ["sort"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[t.align ?? "left"]);
    return (s, x) => (r(), a("th", xe({
      class: ["h-11 px-4 align-middle text-xs font-semibold uppercase tracking-wider ui-text-secondary whitespace-nowrap", [
        o.value,
        e.sortable ? "cursor-pointer select-none hover:text-foreground group" : ""
      ]]
    }, s.$attrs, {
      onClick: x[0] || (x[0] = (b) => e.sortable ? l("sort") : void 0)
    }), [
      g("div", po, [
        D(s.$slots, "default"),
        e.sortable ? (r(), a("span", vo, [
          e.sortDirection === "asc" ? (r(), a("svg", yo, [...x[1] || (x[1] = [
            g("path", {
              "fill-rule": "evenodd",
              d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.sortDirection === "desc" ? (r(), a("svg", bo, [...x[2] || (x[2] = [
            g("path", {
              "fill-rule": "evenodd",
              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : (r(), a("svg", ho, [...x[3] || (x[3] = [
            g("path", { d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" }, null, -1),
            g("path", {
              "fill-rule": "evenodd",
              d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])]))
        ])) : y("", !0)
      ])
    ], 16));
  }
}), wo = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "Td",
  props: {
    align: {},
    muted: { type: Boolean },
    mono: { type: Boolean }
  },
  setup(e) {
    const n = e, t = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[n.align ?? "left"]);
    return (l, o) => (r(), a("td", xe({
      class: ["px-4 py-3 align-middle", [
        t.value,
        e.muted ? "ui-text-secondary text-xs" : "",
        e.mono ? "font-mono text-xs" : ""
      ]]
    }, l.$attrs), [
      D(l.$slots, "default")
    ], 16));
  }
}), ko = ["colspan"], So = { class: "flex flex-col items-center gap-2 ui-text-secondary" }, Co = {
  key: 0,
  class: "w-8 h-8 opacity-40",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24"
}, $o = { class: "text-sm" }, zo = /* @__PURE__ */ Te({
  __name: "TableEmpty",
  props: {
    colspan: {},
    message: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (r(), a("tr", null, [
      g("td", {
        colspan: e.colspan ?? 99,
        class: "px-4 py-12 text-center"
      }, [
        g("div", So, [
          n.$slots.icon ? y("", !0) : (r(), a("svg", Co, [...t[0] || (t[0] = [
            g("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75c-.621 0-1.125.504-1.125 1.125"
            }, null, -1)
          ])])),
          D(n.$slots, "icon"),
          g("span", $o, V(e.message ?? "No results found."), 1),
          D(n.$slots, "default")
        ])
      ], 8, ko)
    ]));
  }
}), Bo = /* @__PURE__ */ Te({
  __name: "TableSkeleton",
  props: {
    cols: {},
    rows: {}
  },
  setup(e) {
    return (n, t) => (r(!0), a(ae, null, ue(e.rows ?? 5, (l) => (r(), a("tr", {
      key: l,
      class: "border-b border-color-3 animate-pulse"
    }, [
      (r(!0), a(ae, null, ue(e.cols ?? 4, (o) => (r(), a("td", {
        key: o,
        class: "px-4 py-3"
      }, [
        g("div", {
          class: "h-4 rounded bg-color-2",
          style: de({ width: `${55 + Math.floor((l * 7 + o * 3) % 5 * 10)}%` })
        }, null, 4)
      ]))), 128))
    ]))), 128));
  }
}), Io = ["dir"], Vo = {
  key: 0,
  class: "text-red-500"
}, To = { class: "flex items-center w-full gap-2 min-w-0" }, Mo = {
  key: 0,
  class: "flex-shrink-0"
}, Lo = { class: "flex-1 w-full min-w-0" }, Ao = { class: "flex items-center gap-2 flex-shrink-0" }, Po = {
  key: 1,
  class: ""
}, Ee = {
  __name: "Base",
  props: {
    modelValue: [String, Number, Boolean, Object, Array, null],
    label: { type: [Object, String], default: "" },
    items: { type: Array, default: () => [] },
    itemText: { type: String, default: "text" },
    itemValue: { type: String, default: "value" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    dir: { type: String, default: "" },
    lang: { type: String, default: "" },
    error: { type: Boolean, default: !1 },
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    rules: { type: Array, default: () => [] },
    messages: { type: [String, Array], default: "" },
    hint: { type: String, default: "" },
    persistentHint: { type: Boolean, default: !1 },
    hideDetails: { type: Boolean, default: !1 },
    isOpen: { type: Boolean, default: !1 },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    size: { type: String, default: () => we("Base", "size") },
    id: { type: String, default: "" },
    width: { type: String, default: "w-full" },
    border: { type: String, default: "border-color-2" },
    textColor: { type: String, default: "ui-text-secondary " },
    margin: { type: String, default: "" },
    bg: { type: String, default: "bg-color-1" },
    hover: { type: String, default: "hover:border-color-3" },
    focus: { type: String, default: "focus:border-color-4" },
    rounded: { type: String, default: () => we("Base", "rounded") },
    multiple: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    bgColorVariant: { type: String, default: "" },
    borderColorVariant: { type: String, default: "" },
    textColorVariant: { type: String, default: "" },
    iconColor: { type: String, default: "currentcolor" },
    labelTextSize: { type: String, default: "text-base" },
    iconType: { type: String, default: "outline" },
    labelTextColor: { type: String, default: "ui-text-secondary" },
    height: { type: String, default: "" },
    focused: { type: Boolean, default: void 0 }
    // External focus control
  },
  emits: ["update:modelValue", "focus", "blur", "change", "click:prepend", "click:append", "click:clear"],
  setup(e, { emit: n }) {
    const { language: t } = pe("i18n", { language: M("en"), t: (p) => p, setLanguage: () => {
    } }), l = nt(), o = n, s = e, x = pe("formContext", null), k = Ft()?.uid, z = M(!1), h = M(!1), m = M([]), d = M(!1), c = i(() => s.focused !== void 0 ? s.focused : z.value), f = i(() => {
      if (s.error === !0 || s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0) return !0;
      if (s.errorMessage && s.errorMessage !== "") {
        if (Array.isArray(s.errorMessage))
          return s.errorMessage.length > 0;
        if (typeof s.errorMessage == "string")
          return s.errorMessage.trim() !== "";
      }
      return !!(d.value && m.value && m.value.length > 0);
    }), C = i(() => s.required ? !0 : Array.isArray(s.rules) && s.rules.includes(gt.required)), w = i(() => s.modelValue === null || s.modelValue === void 0 || s.modelValue === "" ? !1 : Array.isArray(s.modelValue) ? s.modelValue.length > 0 : (typeof s.modelValue == "boolean", !0)), $ = i(() => {
      const p = [];
      return s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0 && p.push(...s.errorMessages), s.errorMessage && (Array.isArray(s.errorMessage) && s.errorMessage.length > 0 ? p.push(...s.errorMessage) : typeof s.errorMessage == "string" && s.errorMessage.trim() !== "" && p.push(s.errorMessage)), d.value && m.value && m.value.length > 0 && p.push(...m.value), p;
    });
    function S() {
      if (m.value = [], !s.rules || s.rules.length === 0) return !0;
      for (const p of s.rules) {
        const u = p(s.modelValue);
        u !== !0 && m.value.push(u);
      }
      return m.value.length === 0;
    }
    const F = i(() => {
      let p = "";
      return s.dir == "rtl" || s.lang == "dv" ? p = "rtl" : s.dir == "ltr" || s.lang == "en" ? p = "ltr" : p = "", p;
    }), N = i(() => {
      let p = "";
      return s.lang != "" ? p = s.lang : s.dir == "rtl" ? p = "dv" : s.dir == "ltr" ? p = "en" : p = t.value, p === "dv" ? "dv" : "en";
    }), A = i(() => N.value == "dv" ? "faruma" : ""), W = i(() => {
      let p = Ye(s.label, N.value, "");
      return typeof p == "object" && p !== null && "label" in p ? p : null;
    }), J = i(() => {
      const p = {
        disabled: s.disabled,
        readonly: s.readonly,
        value: s.modelValue,
        required: C.value,
        "aria-invalid": f.value,
        dir: F.value
      };
      return s.id && (p.id = s.id), p;
    }), I = {
      input: (p) => j(p.target ? p.target.value : p),
      focus: Z,
      blur: T,
      change: (p) => o("change", p.target ? p.target.value : p)
    }, Y = i(() => c.value || w.value || s.isOpen ? "-top-[1px]" : "top-[48%]"), oe = i(() => {
      let p = "", u = "";
      return s.size === "xs" ? (u = "text-xs", p = s.prepend || l.prepend ? "inset-4" : "inset-3") : s.size === "sm" ? (u = "text-sm", p = s.prepend || l.prepend ? "inset-8" : "inset-3") : s.size === "md" ? (u = "text-md", p = s.prepend || l.prepend ? "inset-10" : "inset-3") : s.size === "lg" ? (u = "text-lg", p = s.prepend || l.prepend ? "inset-12" : "inset-3") : s.size === "xl" ? (u = "text-lg", p = s.prepend || l.prepend ? "inset-14" : "inset-3") : (u = "text-sm", p = s.prepend || l.prepend ? "inset-8" : "inset-3"), (c.value || w.value || s.isOpen) && (N.value === "dv" ? p = "right-8" : p = "left-8", u = "text-xs"), p + " " + u;
    }), E = i(() => {
      const p = ["absolute flex gap-1 px-2 items-center transition-all pointer-events-none h-[1px]", oe.value, Y.value];
      return c.value || w.value || s.isOpen ? p.push("bg-inherit") : p.push("bg-transparent"), f.value ? p.push("text-error") : c.value ? p.push("border-input-focus-border") : p.push("text-input-text"), p;
    }), R = i(() => {
      if (s.hideDetails) return [];
      if (f.value) return $.value;
      if (s.messages) {
        if (Array.isArray(s.messages))
          return s.messages.filter((p) => p && p.trim && p.trim() !== "");
        if (typeof s.messages == "string" && s.messages.trim() !== "")
          return [s.messages];
      }
      return s.hint && s.hint.trim() !== "" && (s.persistentHint || c.value) ? [s.hint] : [];
    });
    function Z(p) {
      z.value = !0, o("focus", p);
    }
    function T(p) {
      if (z.value = !1, d.value = !0, x?.validateOn?.value) {
        const u = x.validateOn.value;
        if (u === "blur" || Array.isArray(u) && u.includes("blur")) {
          const L = S();
          x.validate && x.validate(k, L, m.value);
        }
      } else
        S();
      o("blur", p);
    }
    function j(p) {
      o("update:modelValue", p);
    }
    function le() {
      m.value = [], h.value = !1, d.value = !1;
    }
    const U = () => {
      const p = s.multiple ? [] : "";
      o("update:modelValue", p), o("change", p), o("click:clear");
    };
    return Ve(() => {
      x && x.register(k, {
        validate: () => {
          const p = S(), u = p ? [] : m.value;
          return x.validate && x.validate(k, p, u), p;
        },
        reset: () => {
          o("update:modelValue", s.multiple ? [] : ""), le();
        },
        resetValidation: () => {
          m.value = [], h.value = !1;
        }
      });
    }), ye(
      () => s.isOpen,
      (p, u) => {
        if (u === !0 && p === !1) {
          d.value = !0;
          const B = S();
          x?.validate && x.validate(k, B, m.value);
        }
      }
    ), Be(() => {
      x && x.unregister(k);
    }), (p, u) => {
      const B = be("Icon");
      return r(), a("div", {
        dir: F.value !== "" ? F.value : "",
        class: v([A.value, e.margin, e.width, "group/select overflow-visible "])
      }, [
        g("div", {
          class: v([
            "relative border focus:outline-none transition cursor-pointer flex items-center justify-between gap-2 ",
            e.width,
            s.height || q(Jt)[e.size],
            q(yt)[e.size],
            f.value ? "border-red-500" : ` ${e.border}`,
            e.disabled ? "bg-color-2 cursor-not-allowed" : `${e.bg} ${e.hover} ${e.focus}`,
            e.isOpen && !f.value ? "border-color-4" : "",
            !e.isOpen && !f.value ? "border-color-2" : "",
            e.rounded ? q($e)[e.rounded] : "",
            e.textColor
          ])
        }, [
          e.label ? (r(), a("div", {
            key: 0,
            class: v(E.value),
            "aria-hidden": "true"
          }, [
            ve(V(W.value ? W.value.label : e.label) + " ", 1),
            C.value ? (r(), a("span", Vo, "*")) : y("", !0)
          ], 2)) : y("", !0),
          g("div", To, [
            p.$slots.prepend || e.prepend ? (r(), a("div", Mo, [
              D(p.$slots, "prepend", {}, () => [
                G(B, {
                  size: q(De)[e.size],
                  name: e.prepend,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : y("", !0),
            g("div", Lo, [
              D(p.$slots, "control", {
                attrs: J.value,
                events: I
              })
            ])
          ]),
          g("div", Ao, [
            e.clearable && w.value && !e.disabled ? (r(), a("button", {
              key: 0,
              class: "hover:text-input-focus-border text-input-text flex items-center invisible group-hover/select:visible transition-all cursor-pointer",
              title: "Clear selection",
              type: "button",
              onClick: ee(U, ["stop"])
            }, [...u[0] || (u[0] = [
              g("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-4"
              }, [
                g("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ])])) : y("", !0),
            p.$slots.append || e.append ? (r(), a("div", Po, [
              D(p.$slots, "append", {}, () => [
                G(B, {
                  size: q(De)[e.size],
                  name: e.append,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : y("", !0)
          ])
        ], 2),
        R.value.length ? (r(), a("div", {
          key: 0,
          class: v(["mt-1 text-xs", N.value === "dv" ? "text-right" : "text-left", "ui-text-secondary"])
        }, [
          (r(!0), a(ae, null, ue(R.value, (L, H) => (r(), a("div", {
            key: H,
            class: v(f.value ? "text-red-500" : "")
          }, V(q(Ye)(L, N.value, "")), 3))), 128))
        ], 2)) : y("", !0)
      ], 10, Io);
    };
  }
}, Do = {
  key: 0,
  class: "flex flex-col"
}, Oo = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, Eo = {
  key: 0,
  class: "mt-1 text-sm text-red-500"
}, jo = {
  key: 1,
  class: "mt-1 text-sm ui-text-secondary"
}, No = {
  __name: "Checkbox",
  props: {
    modelValue: {
      type: [Boolean, Array, String, Number],
      default: !1
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: !0
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: !0
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    labelPosition: {
      type: String,
      default: "right",
      // 'left' | 'right'
      validator: (e) => ["left", "right"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    error: {
      type: [String, Boolean],
      default: !1
    },
    hint: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ["xs", "sm", "md", "lg", "xl"].includes(e)
    },
    rounded: {
      type: String,
      default: "md",
      validator: (e) => ["none", "sm", "md", "lg", "full"].includes(e)
    },
    color: {
      type: String,
      default: "primary"
      // 'primary' | 'success' | 'warning' | 'danger' | 'info'
    },
    margin: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => Array.isArray(t.modelValue) ? t.modelValue.includes(t.value) : t.modelValue === t.trueValue), s = () => {
      if (t.disabled) return;
      let c;
      if (Array.isArray(t.modelValue)) {
        c = [...t.modelValue];
        const f = c.indexOf(t.value);
        f === -1 ? c.push(t.value) : c.splice(f, 1);
      } else
        c = t.modelValue === t.trueValue ? t.falseValue : t.trueValue;
      l("update:modelValue", c), l("change", c);
    }, x = i(() => {
      const c = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return c[t.size] || c.md;
    }), b = i(() => {
      const c = {
        xs: "w-2.5 h-2.5",
        sm: "w-3 h-3",
        md: "w-3.5 h-3.5",
        lg: "w-4 h-4",
        xl: "w-5 h-5"
      };
      return c[t.size] || c.md;
    }), k = i(() => {
      const c = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return c[t.size] || c.md;
    }), z = i(() => {
      const c = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return c[t.size] || c.md;
    }), h = i(() => {
      const c = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        full: "rounded-full"
      };
      return c[t.rounded] || c.md;
    }), m = i(() => {
      const c = {
        primary: {
          checked: "bg-primary border-primary",
          unchecked: "cb-unchecked hover:border-primary"
        },
        success: {
          checked: "bg-green-500 border-green-500",
          unchecked: "cb-unchecked hover:border-green-500"
        },
        warning: {
          checked: "bg-yellow-500 border-yellow-500",
          unchecked: "cb-unchecked hover:border-yellow-500"
        },
        danger: {
          checked: "bg-red-500 border-red-500",
          unchecked: "cb-unchecked hover:border-red-500"
        },
        info: {
          checked: "bg-blue-500 border-blue-500",
          unchecked: "cb-unchecked hover:border-blue-500"
        }
      };
      return c[t.color] || c.primary;
    }), d = i(() => t.error ? o.value || t.indeterminate ? "bg-red-500 border-red-500" : "border-red-500 hover:border-red-600" : o.value || t.indeterminate ? m.value.checked : t.disabled ? "border-color-3 bg-color-2" : m.value.unchecked);
    return (c, f) => (r(), a("div", {
      class: v(["relative", e.margin])
    }, [
      g("label", {
        class: v([
          "inline-flex items-start gap-3 cursor-pointer select-none",
          e.disabled ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        g("div", {
          class: v([
            "flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200",
            x.value,
            h.value,
            d.value,
            e.disabled ? "cursor-not-allowed" : "cursor-pointer"
          ])
        }, [
          G(ke, { name: "scale" }, {
            default: te(() => [
              o.value && !e.indeterminate ? (r(), a("svg", {
                key: 0,
                class: v(["text-white", b.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...f[0] || (f[0] = [
                g("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])], 2)) : y("", !0)
            ]),
            _: 1
          }),
          G(ke, { name: "scale" }, {
            default: te(() => [
              e.indeterminate ? (r(), a("svg", {
                key: 0,
                class: v(["text-white", b.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...f[1] || (f[1] = [
                g("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 12h14"
                }, null, -1)
              ])], 2)) : y("", !0)
            ]),
            _: 1
          })
        ], 2),
        e.label || e.description || c.$slots.default ? (r(), a("div", Do, [
          e.label || c.$slots.default ? (r(), a("span", {
            key: 0,
            class: v([
              "ui-text-color leading-tight",
              k.value
            ])
          }, [
            D(c.$slots, "default", {}, () => [
              ve(V(e.label), 1)
            ], !0),
            e.required ? (r(), a("span", Oo, "*")) : y("", !0)
          ], 2)) : y("", !0),
          e.description ? (r(), a("span", {
            key: 1,
            class: v([
              "ui-text-secondary mt-0.5",
              z.value
            ])
          }, V(e.description), 3)) : y("", !0)
        ])) : y("", !0)
      ], 2),
      e.error ? (r(), a("p", Eo, V(typeof e.error == "string" ? e.error : ""), 1)) : y("", !0),
      e.hint && !e.error ? (r(), a("p", jo, V(e.hint), 1)) : y("", !0)
    ], 2));
  }
}, Ot = /* @__PURE__ */ ge(No, [["__scopeId", "data-v-2c11cca3"]]), Ro = ["tabindex", "onKeydown"], Ho = {
  key: 0,
  class: "flex items-center"
}, Uo = ["src", "alt"], Fo = { class: "flex items-center gap-1 min-w-0" }, qo = {
  key: 1,
  class: "flex items-center"
}, Wo = ["disabled", "onKeydown"], Ko = {
  __name: "Chip",
  props: {
    // Content
    label: {
      type: String,
      default: ""
    },
    // Behavior
    clickable: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // Styling
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "outlined", "filled", "tonal"].includes(e)
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "default"
    },
    rounded: {
      type: String,
      default: "full"
    },
    // Icons and avatars
    prependIcon: {
      type: [String, Object],
      default: null
    },
    appendIcon: {
      type: [String, Object],
      default: null
    },
    avatar: {
      type: String,
      default: null
    },
    avatarAlt: {
      type: String,
      default: "Avatar"
    },
    // Custom classes
    chipClass: {
      type: String,
      default: ""
    },
    textClass: {
      type: String,
      default: ""
    },
    // Color customization
    bgColor: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    }
  },
  emits: ["click", "close"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => {
      const f = {
        small: "px-2 py-1 text-xs min-h-6",
        default: "px-3 py-1.5 text-sm min-h-8",
        large: "px-4 py-2 text-base min-h-10"
      };
      return f[t.size] ? f[t.size] : t.size || f.default;
    }), s = i(() => t.rounded === "none" ? "rounded-none" : t.rounded === "sm" ? "rounded-sm" : t.rounded === "md" ? "rounded-md" : t.rounded === "lg" ? "rounded-lg" : t.rounded === "xl" ? "rounded-xl" : "rounded-full"), x = i(() => {
      if (t.bgColor || t.textColor || t.borderColor) {
        const w = t.bgColor || "bg-gray-100", $ = t.textColor || "text-gray-800", S = t.borderColor ? `border ${t.borderColor}` : "";
        return t.variant === "outlined" ? `bg-transparent ${$} border ${S || "border-gray-300"}` : `${w} ${$} ${S}`;
      }
      const f = {
        primary: {
          default: "bg-primary/10 text-primary hover:bg-primary/20",
          outlined: "bg-transparent text-primary border border-primary/30 hover:bg-primary/50",
          filled: "bg-primary text-white hover:bg-primary/80",
          tonal: "bg-primary/10 text-primary hover:bg-primary/20"
        },
        secondary: {
          default: "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
          outlined: "bg-transparent text-gray-500 border border-gray-300 hover:bg-gray-50 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-800",
          filled: "bg-gray-600 text-white hover:bg-gray-700",
          tonal: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-gray-700"
        },
        success: {
          default: "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50",
          outlined: "bg-transparent text-green-600 border border-green-300 hover:bg-green-50 dark:text-green-400 dark:border-green-700 dark:hover:bg-green-900/20",
          filled: "bg-green-600 text-white hover:bg-green-700",
          tonal: "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
        },
        warning: {
          default: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:hover:bg-yellow-900/50",
          outlined: "bg-transparent text-yellow-600 border border-yellow-300 hover:bg-yellow-50 dark:text-yellow-400 dark:border-yellow-700 dark:hover:bg-yellow-900/20",
          filled: "bg-yellow-600 text-white hover:bg-yellow-700",
          tonal: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:hover:bg-yellow-900/50"
        },
        error: {
          default: "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",
          outlined: "bg-transparent text-red-600 border border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-700 dark:hover:bg-red-900/20",
          filled: "bg-red-600 text-white hover:bg-red-700",
          tonal: "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
        },
        info: {
          default: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400 dark:hover:bg-cyan-900/50",
          outlined: "bg-transparent text-cyan-600 border border-cyan-300 hover:bg-cyan-50 dark:text-cyan-400 dark:border-cyan-700 dark:hover:bg-cyan-900/20",
          filled: "bg-cyan-600 text-white hover:bg-cyan-700",
          tonal: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400 dark:hover:bg-cyan-900/50"
        },
        gray: {
          default: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600",
          outlined: "bg-transparent text-neutral-600 border border-neutral-300 hover:bg-neutral-50 dark:text-neutral-400 dark:border-neutral-600 dark:hover:bg-neutral-800",
          filled: "bg-neutral-600 text-white hover:bg-neutral-700",
          tonal: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-700/50 dark:text-neutral-300 dark:hover:bg-neutral-700"
        }
      }, C = f[t.color];
      return C && C[t.variant] ? C[t.variant] : t.color ? t.color : f.primary.default;
    }), b = i(() => {
      const f = "font-medium";
      return t.textClass ? `${f} ${t.textClass}` : f;
    }), k = i(() => {
      const f = {
        small: "w-3 h-3",
        default: "w-4 h-4",
        large: "w-5 h-5"
      };
      return f[t.size] || f.default;
    }), z = i(() => {
      const f = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return `${f[t.size] || f.default} rounded-full object-cover`;
    }), h = i(() => {
      const f = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return f[t.size] || f.default;
    }), m = i(() => {
      const f = {
        small: "w-2.5 h-2.5",
        default: "w-3 h-3",
        large: "w-3.5 h-3.5"
      };
      return f[t.size] || f.default;
    }), d = () => {
      !t.disabled && t.clickable && l("click");
    }, c = () => {
      t.disabled || l("close");
    };
    return (f, C) => (r(), a("div", {
      class: v([
        "inline-flex items-center gap-2 transition-all duration-200 ease-in-out select-none",
        o.value,
        x.value,
        s.value,
        {
          "cursor-pointer hover:shadow-md": e.clickable,
          "opacity-60": e.disabled,
          "cursor-not-allowed": e.disabled
        },
        e.chipClass
      ]),
      tabindex: e.clickable && !e.disabled ? 0 : -1,
      onClick: d,
      onKeydown: [
        he(d, ["enter"]),
        he(ee(d, ["prevent"]), ["space"])
      ]
    }, [
      f.$slots.prepend || e.avatar || e.prependIcon ? (r(), a("div", Ho, [
        D(f.$slots, "prepend", {}, () => [
          e.avatar ? (r(), a("img", {
            key: 0,
            src: e.avatar,
            alt: e.avatarAlt,
            class: v(z.value)
          }, null, 10, Uo)) : e.prependIcon ? (r(), Q(Ne(e.prependIcon), {
            key: 1,
            class: v(k.value)
          }, null, 8, ["class"])) : (r(), a("svg", {
            key: 2,
            class: v(k.value),
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [...C[0] || (C[0] = [
            g("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }, null, -1),
            g("path", { d: "M12 6v6l4 2" }, null, -1)
          ])], 2))
        ], !0)
      ])) : y("", !0),
      g("div", Fo, [
        g("span", {
          class: v(["truncate", b.value])
        }, [
          D(f.$slots, "default", {}, () => [
            ve(V(e.label), 1)
          ], !0)
        ], 2)
      ]),
      f.$slots.append || e.appendIcon || e.closable ? (r(), a("div", qo, [
        D(f.$slots, "append", {}, () => [
          e.closable ? (r(), a("button", {
            key: 0,
            type: "button",
            class: v([
              "inline-flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-1",
              h.value
            ]),
            disabled: e.disabled,
            onClick: ee(c, ["stop"]),
            onKeydown: [
              he(ee(c, ["stop"]), ["enter"]),
              he(ee(c, ["stop", "prevent"]), ["space"])
            ]
          }, [
            (r(), a("svg", {
              class: v(m.value),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...C[1] || (C[1] = [
              g("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              }, null, -1)
            ])], 2))
          ], 42, Wo)) : e.appendIcon ? (r(), Q(Ne(e.appendIcon), {
            key: 1,
            class: v(k.value)
          }, null, 8, ["class"])) : y("", !0)
        ], !0)
      ])) : y("", !0)
    ], 42, Ro));
  }
}, Et = /* @__PURE__ */ ge(Ko, [["__scopeId", "data-v-87c674ac"]]), Go = ["aria-label"], Yo = {
  __name: "ChipGroup",
  props: {
    // Data
    chips: {
      type: Array,
      default: () => []
    },
    // Default properties for all chips
    variant: {
      type: String,
      default: "default"
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "default"
    },
    rounded: {
      type: String,
      default: "full"
    },
    // Default behavior
    clickable: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // Layout
    gap: {
      type: String,
      default: "md"
    },
    justify: {
      type: String,
      default: "start"
    },
    // Custom classes
    containerClass: {
      type: String,
      default: ""
    },
    chipClass: {
      type: String,
      default: ""
    },
    textClass: {
      type: String,
      default: ""
    },
    // Default color customization
    bgColor: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    // Accessibility
    ariaLabel: {
      type: String,
      default: "Chip group"
    },
    // Key field for tracking chips
    itemKey: {
      type: String,
      default: "id"
    },
    itemText: {
      type: String,
      default: "text"
    },
    groupName: {
      type: String,
      default: ""
    }
  },
  emits: ["chip-click", "chip-close", "update:chips"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = i(() => {
      const h = {
        none: "gap-0",
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3",
        xl: "gap-4"
      };
      return h[t.gap] || h.md;
    }), s = i(() => {
      const h = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return h[t.justify] || h.start;
    }), x = (h, m) => typeof h == "object" && h[t.itemKey] ? h[t.itemKey] : typeof h == "object" && h.id ? h.id : m, b = (h) => typeof h == "string" ? h : typeof h == "object" ? h[t.itemText] || h.text || h.label || h.name || "" : String(h), k = (h, m) => {
      l("chip-click", { groupName: t.groupName, chip: h, index: m });
    }, z = (h, m) => {
      const d = [...t.chips];
      d.splice(m, 1), l("chip-close", { chip: h, index: m }), l("update:chips", d);
    };
    return (h, m) => (r(), a("div", {
      class: v([
        "flex flex-wrap",
        o.value,
        s.value,
        e.containerClass
      ]),
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (r(!0), a(ae, null, ue(e.chips, (d, c) => (r(), Q(q(Et), {
        key: x(d, c),
        label: b(d),
        variant: d.variant || e.variant,
        color: d.color || e.color,
        size: d.size || e.size,
        rounded: d.rounded || e.rounded,
        clickable: d.clickable !== void 0 ? d.clickable : e.clickable,
        closable: d.closable !== void 0 ? d.closable : e.closable,
        disabled: d.disabled || e.disabled,
        avatar: d.avatar,
        "avatar-alt": d.avatarAlt,
        "prepend-icon": d.prependIcon,
        "append-icon": d.appendIcon,
        "chip-class": d.chipClass || e.chipClass,
        "text-class": d.textClass || e.textClass,
        "bg-color": d.bgColor || e.bgColor,
        "text-color": d.textColor || e.textColor,
        "border-color": d.borderColor || e.borderColor,
        onClick: (f) => k(d, c),
        onClose: (f) => z(d, c)
      }, Fe({ _: 2 }, [
        h.$slots.chip ? {
          name: "default",
          fn: te((f) => [
            D(h.$slots, "chip", xe({ ref_for: !0 }, { ...f, chip: d, index: c }), void 0, !0)
          ]),
          key: "0"
        } : void 0,
        h.$slots.prepend ? {
          name: "prepend",
          fn: te((f) => [
            D(h.$slots, "prepend", xe({ ref_for: !0 }, { ...f, chip: d, index: c }), void 0, !0)
          ]),
          key: "1"
        } : void 0,
        h.$slots.append ? {
          name: "append",
          fn: te((f) => [
            D(h.$slots, "append", xe({ ref_for: !0 }, { ...f, chip: d, index: c }), void 0, !0)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["label", "variant", "color", "size", "rounded", "clickable", "closable", "disabled", "avatar", "avatar-alt", "prepend-icon", "append-icon", "chip-class", "text-class", "bg-color", "text-color", "border-color", "onClick", "onClose"]))), 128))
    ], 10, Go));
  }
}, jt = /* @__PURE__ */ ge(Yo, [["__scopeId", "data-v-045fbbbb"]]), Xo = {
  class: /* @__PURE__ */ v(["flex-1", "flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
}, Jo = ["placeholder", "disabled", "readonly", "onBlur"], Qo = {
  __name: "DatePicker",
  props: {
    modelValue: {
      type: [String, Date, Number, Array],
      default: null
    },
    label: { type: [Object, String], default: "" },
    dir: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 },
    // Singular form. Must be declared or it never reaches Base: the forwarding
    // below (and v-bind="$props") only sees declared props.
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    rounded: { type: String, default: () => we("DatePicker", "rounded") },
    size: { type: String },
    border: { type: String },
    textColor: { type: String },
    menuClass: { type: String, default: "" },
    menuStyle: { type: Object, default: () => ({}) },
    bg: { type: String },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    width: { type: String, default: "" },
    hint: { type: String, default: "" },
    lang: { type: String },
    rules: { type: Array, default: () => [] },
    format: { type: String, default: "dd/MM/yyyy" },
    range: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !0 },
    multiCalendars: { type: Number },
    // What this field collects. 'date' is a day with no time: it switches
    // the time panel off and keeps the time out of the displayed text.
    // Anything else, including the default, keeps both.
    //
    // This exists because `type="date"` is the obvious thing to write, and
    // until now it was silently ignored — it was not a declared prop, so it
    // fell through to the wrapper div and the field still showed a time.
    type: { type: String, default: "" },
    // `default: undefined`, not `true`, on purpose. An absent Boolean prop
    // is otherwise indistinguishable from one passed as false, and telling
    // those apart is exactly what lets `type` act as the fallback. Vue
    // skips its absent-Boolean-to-false cast when a default is declared, so
    // this really does arrive as undefined.
    //
    // Read it through showTimePicker, never directly — the default moved
    // there. Passing it explicitly still wins over `type`.
    enableTimePicker: { type: Boolean, default: void 0 },
    // With autoApply on, the picker commits on every change — the date
    // click, and then each hour and minute. The panel closes on each
    // commit, which makes a time impossible to finish choosing. Set this
    // false for date+time fields: the value still updates live, and the
    // panel stays open until the user clicks away.
    closeOnSelect: { type: Boolean, default: !0 },
    weekPicker: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    minDate: { type: Date, default: null },
    maxDate: { type: Date, default: null },
    disabledDates: { default: void 0 },
    multiDates: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !0 },
    margin: { type: String, default: "" }
  },
  emits: ["update:modelValue", "change", "clear", "open", "close"],
  setup(e, { expose: n, emit: t }) {
    const l = t, o = e, s = pe("parentDir", ""), x = pe("parentLang", "");
    pe("formContext", null);
    const b = i(() => o.dir || s), k = i(() => o.lang || x), z = i(() => o.enableTimePicker !== void 0 ? o.enableTimePicker : o.type !== "date"), h = i(() => {
      const p = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], u = {};
      return p.forEach((B) => {
        B in o && (u[B] = o[B]);
      }), u;
    }), m = M(!1), d = M(o.modelValue), c = M(""), f = M(null), C = M(null), w = M(null), $ = M(!1), S = M(!1), F = M({ position: "fixed", zIndex: 9999 }), N = () => {
      if (!C.value) return;
      const p = C.value.getBoundingClientRect();
      F.value = {
        position: "fixed",
        top: `${p.bottom + 4}px`,
        left: `${p.left}px`,
        zIndex: 9999
      };
    }, A = () => {
      m.value || (N(), m.value = !0, l("open"));
    }, W = (p, u) => {
      if (!p) return "";
      const B = new Date(p);
      if (isNaN(B.getTime())) return "";
      const L = B.getFullYear(), H = String(B.getMonth() + 1).padStart(2, "0"), me = String(B.getDate()).padStart(2, "0"), ce = String(B.getHours()).padStart(2, "0"), fe = String(B.getMinutes()).padStart(2, "0");
      String(B.getSeconds()).padStart(2, "0");
      let Se = u.replace("yyyy", L).replace("MM", H).replace("dd", me);
      return z.value && (Se += ` ${ce}:${fe}`), Se;
    }, J = (p, u) => {
      if (!p) return null;
      const B = p.split(" "), L = B[0], H = B[1];
      let me = null;
      const ce = u.includes("/") ? "/" : u.includes("-") ? "-" : "/", fe = L.split(ce);
      if (u.startsWith("dd") ? fe.length >= 3 && (me = new Date(fe[2], fe[1] - 1, fe[0])) : u.startsWith("MM") ? fe.length >= 3 && (me = new Date(fe[2], fe[0] - 1, fe[1])) : u.startsWith("yyyy") && fe.length >= 3 && (me = new Date(fe[0], fe[1] - 1, fe[2])), me && H && z.value) {
        const Se = H.split(":");
        Se.length >= 2 && (me.setHours(parseInt(Se[0], 10) || 0), me.setMinutes(parseInt(Se[1], 10) || 0), Se.length === 3 && me.setSeconds(parseInt(Se[2], 10) || 0));
      }
      return me;
    }, I = i(() => {
      if (!o.modelValue) return "";
      if (o.range) {
        if (!Array.isArray(o.modelValue)) return "";
        const [p, u] = o.modelValue;
        return !p || !u ? "" : `${W(p, o.format)} - ${W(u, o.format)}`;
      }
      return W(o.modelValue, o.format);
    });
    ye(() => o.modelValue, (p) => {
      d.value = p, c.value = I.value;
    }, { immediate: !0 }), ye(d, (p) => {
      p && !isNaN(new Date(p).getTime()) && !$.value && Pe(() => {
        c.value = W(p, o.format);
      });
    });
    const Y = (p) => {
    }, oe = (p) => {
      $.value = !0, c.value = p.target.value;
      const u = o.format.includes("/") ? "/" : o.format.includes("-") ? "-" : "/", B = c.value.split(" ")[0].split(u);
      if (B.length === 3 && B.every((L) => L.length > 0)) {
        let L;
        if (o.format.startsWith("dd") || o.format.startsWith("MM") ? L = B[2] : o.format.startsWith("yyyy") && (L = B[0]), L && L.length === 4) {
          const H = J(c.value, o.format);
          H && !isNaN(H.getTime()) && (d.value = new Date(H.getTime()));
        }
      }
    }, E = () => {
      S.value = !0, A();
    }, R = () => {
      S.value = !1;
      const p = $.value;
      if ($.value = !1, !p) {
        c.value = I.value;
        return;
      }
      if (!c.value) {
        U();
        return;
      }
      const u = J(c.value, o.format);
      u && !isNaN(u.getTime()) ? (c.value = W(u, o.format), l("update:modelValue", u), l("change", u), d.value = u) : c.value = I.value;
    }, Z = (p) => {
      d.value = p, l("update:modelValue", p), l("change", p), o.range ? Array.isArray(p) && p[0] && p[1] && (c.value = `${W(p[0], o.format)} - ${W(p[1], o.format)}`, o.closeOnSelect && T()) : (c.value = W(p, o.format), o.closeOnSelect && T());
    }, T = () => {
      m.value && (m.value = !1, l("close"));
    }, j = (p) => {
      const u = w.value;
      return !u || !p ? !1 : typeof p.composedPath == "function" ? p.composedPath().includes(u) : p.target instanceof Node && u.contains(p.target);
    }, le = (p) => {
      j(p) || T();
    }, U = () => {
      d.value = null, c.value = "", $.value = !1, l("update:modelValue", null), l("change", null), l("clear");
    };
    return n({
      close: T,
      open: A,
      clear: U
    }), (p, u) => Ie((r(), a("div", {
      ref_key: "containerRef",
      ref: C,
      class: v(["relative", e.width, e.margin])
    }, [
      G(q(Ee), xe(h.value, {
        "model-value": I.value,
        "onUpdate:modelValue": Y,
        "onClick:clear": U,
        dir: b.value,
        lang: k.value,
        label: e.label,
        prepend: e.prepend || "calendar",
        append: e.append,
        isOpen: m.value,
        size: e.size,
        disabled: e.disabled,
        readonly: !1,
        required: e.required,
        bg: e.bg,
        border: e.border,
        "text-color": e.textColor,
        rounded: e.rounded,
        width: e.width,
        hint: e.hint,
        "icon-color": "text-ui-text-secondary",
        "persistent-hint": !!e.hint,
        rules: e.rules,
        clearable: !0
      }), {
        control: te(({ attrs: B, events: L }) => [
          g("div", Xo, [
            Ie(g("input", {
              ref_key: "inputRef",
              ref: f,
              "onUpdate:modelValue": u[0] || (u[0] = (H) => c.value = H),
              type: "text",
              placeholder: S.value ? e.placeholder : "",
              disabled: e.disabled,
              readonly: e.range,
              class: v([
                "w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                "focus:outline-none",
                "cursor-text"
              ]),
              onClick: u[1] || (u[1] = ee(() => {
              }, ["stop"])),
              onInput: oe,
              onFocus: E,
              onBlur: (H) => {
                R(), L.blur(H);
              }
            }, null, 40, Jo), [
              [pt, c.value]
            ])
          ])
        ]),
        prepend: te(() => [...u[3] || (u[3] = [])]),
        _: 1
      }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "size", "disabled", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
      (r(), Q(Je, { to: "body" }, [
        G(ke, { name: "fade" }, {
          default: te(() => [
            m.value ? (r(), a("div", {
              key: 0,
              ref_key: "panelRef",
              ref: w,
              class: v([
                "w-fit",
                e.menuClass
              ]),
              style: de({ ...F.value, ...e.menuStyle })
            }, [
              G(q(Gt), {
                modelValue: d.value,
                "onUpdate:modelValue": [
                  u[2] || (u[2] = (B) => d.value = B),
                  Z
                ],
                inline: "",
                placeholder: e.placeholder,
                range: e.range,
                "auto-apply": e.range ? !1 : e.autoApply,
                "multi-calendars": e.multiCalendars,
                "enable-time-picker": z.value,
                format: e.format,
                "week-picker": e.weekPicker,
                "month-picker": e.monthPicker,
                "year-picker": e.yearPicker,
                "min-date": e.minDate,
                "max-date": e.maxDate,
                "disabled-dates": e.disabledDates,
                "multi-dates": e.multiDates,
                "text-input": e.textInput
              }, null, 8, ["modelValue", "placeholder", "range", "auto-apply", "multi-calendars", "enable-time-picker", "format", "week-picker", "month-picker", "year-picker", "min-date", "max-date", "disabled-dates", "multi-dates", "text-input"])
            ], 6)) : y("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2)), [
      [q(Mt), le]
    ]);
  }
}, Vt = /* @__PURE__ */ ge(Qo, [["__scopeId", "data-v-f1a13f72"]]), Zo = ["aria-disabled", "onKeydown"], _o = ["id", "accept", "multiple", "disabled", "readonly", "required"], es = { class: "w-full flex items-center gap-2 sm:gap-3 flex-wrap" }, ts = { class: "" }, ls = { class: "text-xs text-input-text mt-1 hidden sm:block" }, ns = {
  key: 0,
  class: "mt-2 space-y-2"
}, rs = {
  key: 0,
  class: "w-10 h-10 overflow-hidden rounded-md border border-color-2 flex-shrink-0"
}, as = ["src"], os = { class: "min-w-0" }, ss = { class: "text-sm text-input-text truncate" }, is = { class: "text-xs text-input-text opacity-80" }, us = ["onClick"], ds = {
  __name: "FileUpload",
  props: {
    modelValue: { type: Array, default: () => [] },
    label: { type: [String, Object] },
    hint: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    // Singular form. Must be declared or it never reaches Base: the forwarding
    // below (and v-bind="$props") only sees declared props.
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    size: { type: String },
    rounded: { type: String },
    border: { type: String, default: "border-color-2" },
    textColor: { type: String, default: "ui-text-secondary" },
    bg: { type: String, default: "bg-color-1" },
    width: { type: String, default: "w-full" },
    multiple: { type: Boolean, default: !0 },
    accept: { type: String, default: "" },
    maxSizeMB: { type: Number, default: 2 },
    showPreview: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change", "error", "select", "drop", "remove"],
  setup(e, { emit: n }) {
    const t = e, l = n, o = M(null), s = M(!0), x = M(""), b = M([]), k = M([]), z = i(() => {
      const E = Array.isArray(t.errorMessages) ? t.errorMessages : [], R = Array.isArray(k.value) ? k.value : [];
      return [...E, ...R];
    });
    ye(
      () => t.modelValue,
      (E) => {
        b.value = h(E);
      },
      { immediate: !0 }
    );
    function h(E) {
      return (Array.isArray(E) ? E : []).map((Z) => ({ file: Z.file ?? Z, preview: Z.preview ?? null, _id: m() }));
    }
    function m() {
      return Math.random().toString(36).slice(2);
    }
    const d = i(() => [
      "w-full h-full flex items-center justify-between",
      "gap-2 sm:gap-3 px-2 sm:px-3",
      "cursor-pointer select-none transition",
      "bg-input-background"
    ]), c = i(() => {
      const E = t.accept && t.accept.length ? t.accept : "any file";
      return `${t.multiple ? "Upload multiple " : "Upload "}(${E}) • Max ${t.maxSizeMB}MB each`;
    });
    function f() {
      t.disabled || t.readonly || o.value?.click();
    }
    function C(E) {
      if (!E.target.files) return;
      const R = Array.from(E.target.files);
      N(R), E.target.value = "";
    }
    function w() {
      t.disabled || (s.value = !0);
    }
    function $() {
      t.disabled || (s.value = !0);
    }
    function S() {
      s.value = !1;
    }
    function F(E) {
      if (s.value = !1, t.disabled) return;
      const R = E.dataTransfer, Z = R ? Array.from(R.files || []) : [];
      l("drop", Z), N(Z);
    }
    function N(E) {
      k.value = [];
      const R = [], Z = t.maxSizeMB * 1024 * 1024, T = I(t.accept);
      for (const U of E) {
        if (U.size > Z) {
          k.value.push(`${U.name} exceeds ${t.maxSizeMB}MB`), l("error", { type: "size", file: U });
          continue;
        }
        if (T.size && !Y(U, T)) {
          k.value.push(`${U.name} type not allowed`), l("error", { type: "type", file: U });
          continue;
        }
        R.push(U);
      }
      if (!R.length) return;
      const j = R.map((U) => ({ file: U, preview: A(U), _id: m() })), le = t.multiple ? b.value.concat(j) : j.slice(0, 1);
      b.value = le, l("select", R), l("update:modelValue", le.map((U) => ({ file: U.file, preview: U.preview }))), l("change", le.map((U) => U.file));
    }
    function A(E) {
      if (!W(E)) return null;
      try {
        return URL.createObjectURL(E);
      } catch {
        return null;
      }
    }
    function W(E) {
      return /^image\//.test(E.type);
    }
    function J(E) {
      const R = b.value.splice(E, 1);
      l("remove", R[0]?.file), l("update:modelValue", b.value.map((Z) => ({ file: Z.file, preview: Z.preview }))), l("change", b.value.map((Z) => Z.file));
    }
    function I(E) {
      const R = /* @__PURE__ */ new Set();
      return E && E.split(",").map((Z) => Z.trim()).filter(Boolean).forEach((Z) => R.add(Z.toLowerCase())), R;
    }
    function Y(E, R) {
      if (!R || !R.size) return !0;
      const Z = E.type.toLowerCase(), T = E.name.toLowerCase().split(".").pop();
      for (const j of R)
        if (j.includes("/")) {
          const [le, U] = j.split("/"), [p, u] = Z.split("/");
          if (U === "*") {
            if (le === p) return !0;
          } else if (j === Z)
            return !0;
        } else if (j.startsWith(".") && T && j.slice(1) === T)
          return !0;
      return !1;
    }
    function oe(E) {
      if (E < 1024) return `${E} B`;
      const R = E / 1024;
      return R < 1024 ? `${R.toFixed(1)} KB` : `${(R / 1024).toFixed(2)} MB`;
    }
    return (E, R) => {
      const Z = be("Icon"), T = be("Button");
      return r(), a("div", {
        class: v([x.value, e.width])
      }, [
        G(q(Ee), xe(E.$props, {
          "persistent-hint": !!e.hint,
          error: z.value.length > 0,
          "is-open": s.value,
          clearable: !1
        }), {
          control: te(({ attrs: j }) => [
            g("div", {
              class: v(d.value),
              "aria-disabled": e.disabled,
              role: "button",
              tabindex: "0",
              onClick: f,
              onKeydown: [
                he(ee(f, ["prevent"]), ["enter"]),
                he(ee(f, ["prevent"]), ["space"])
              ],
              onDragenter: ee(w, ["prevent"]),
              onDragover: ee($, ["prevent"]),
              onDragleave: ee(S, ["prevent"]),
              onDrop: ee(F, ["prevent"])
            }, [
              g("input", {
                id: j.id,
                ref_key: "inputRef",
                ref: o,
                type: "file",
                accept: e.accept,
                multiple: e.multiple,
                class: "hidden",
                disabled: e.disabled,
                readonly: j.readonly,
                required: j.required,
                onChange: C
              }, null, 40, _o),
              g("div", es, [
                G(Z, {
                  name: "arrow-up-tray",
                  size: "16"
                }),
                g("div", ts, [
                  R[0] || (R[0] = g("div", { class: "text-sm text-input-text truncate" }, [
                    g("span", { class: "font-medium" }, "Click to upload"),
                    ve(" or drag and drop ")
                  ], -1)),
                  g("div", ls, V(c.value), 1)
                ])
              ]),
              G(T, {
                type: "button",
                size: "xs",
                disabled: e.disabled,
                rounded: e.rounded,
                class: "px-3 py-1.5 text-sm text-primaryText"
              }, {
                default: te(() => [...R[1] || (R[1] = [
                  ve(" Browse ", -1)
                ])]),
                _: 1
              }, 8, ["disabled", "rounded"])
            ], 42, Zo)
          ]),
          _: 1
        }, 16, ["persistent-hint", "error", "is-open"]),
        b.value.length ? (r(), a("div", ns, [
          (r(!0), a(ae, null, ue(b.value, (j, le) => (r(), a("div", {
            key: j._id,
            class: v(["flex items-center gap-3 p-2 border bg-color-1 ", e.border, e.rounded ? q($e)[e.rounded] : "rounded-md"])
          }, [
            e.showPreview && W(j.file) ? (r(), a("div", rs, [
              g("img", {
                src: j.preview,
                alt: "preview",
                class: "w-full h-full object-cover",
                loading: "lazy"
              }, null, 8, as)
            ])) : y("", !0),
            g("div", os, [
              g("div", ss, V(j.file.name), 1),
              g("div", is, V(oe(j.file.size)), 1)
            ]),
            g("button", {
              type: "button",
              class: "text-input-text hover:text-input-focus",
              onClick: (U) => J(le)
            }, [...R[2] || (R[2] = [
              g("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-5"
              }, [
                g("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, us)
          ], 2))), 128))
        ])) : y("", !0)
      ], 2);
    };
  }
}, cs = ["disabled"], fs = ["disabled"], gs = { class: "flex items-center w-full h-full" }, ms = {
  key: 0,
  class: "flex flex-col border-r border-color-3 h-full"
}, ps = ["disabled"], vs = ["disabled"], ys = ["value", "placeholder", "disabled", "readonly", "onBlur", "onFocus"], bs = {
  key: 3,
  class: "flex flex-col border-l border-color-3 h-full"
}, hs = ["disabled"], xs = ["disabled"], ws = {
  __name: "InputNumber",
  props: {
    modelValue: {
      type: [Number, String, null],
      default: null
    },
    label: { type: [Object, String], default: "" },
    dir: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    // Singular form. Must be declared or it never reaches Base: the forwarding
    // below (and v-bind="$props") only sees declared props.
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    rounded: { type: String, default: () => we("InputNumber", "rounded") },
    size: { type: String, default: () => we("InputNumber", "size") },
    border: { type: String },
    textColor: { type: String },
    bg: { type: String },
    width: { type: String, default: "" },
    hint: { type: String, default: "" },
    lang: { type: String },
    rules: { type: Array, default: () => [] },
    // Number-specific props
    min: { type: Number, default: -1 / 0 },
    max: { type: Number, default: 1 / 0 },
    step: { type: Number, default: 1 },
    precision: { type: Number, default: void 0 },
    showControls: { type: Boolean, default: !0 },
    controlsPosition: {
      type: String,
      default: "sides",
      // 'sides', 'stacked-left', 'stacked-right'
      validator: (e) => ["sides", "stacked-left", "stacked-right"].includes(e)
    },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    thousandSeparator: { type: [Boolean, String], default: !1 },
    decimalSeparator: { type: String, default: "." },
    allowNegative: { type: Boolean, default: !0 },
    align: {
      type: String,
      default: "left",
      validator: (e) => ["left", "center", "right"].includes(e)
    },
    mouseWheel: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(e, { expose: n, emit: t }) {
    const l = t, o = e, s = pe("parentDir", ""), x = pe("parentLang", ""), b = i(() => o.dir || s), k = i(() => o.lang || x), z = i(() => {
      const u = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], B = {};
      return u.forEach((L) => {
        L in o && (B[L] = o[L]);
      }), B;
    }), h = M(null), m = M(!1), d = M(null), c = M(null), f = i(() => {
      if (o.modelValue === null || o.modelValue === "" || o.modelValue === void 0)
        return null;
      const u = parseFloat(o.modelValue);
      return isNaN(u) ? null : u;
    }), C = i(() => f.value !== null && f.value <= o.min), w = i(() => f.value !== null && f.value >= o.max), $ = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[o.align] || "text-left"), S = i(() => {
      const u = {
        xs: { button: "w-6 h-6", icon: "12", stackedButton: "px-1.5", stackedIcon: "10", affix: "text-xs px-1" },
        sm: { button: "w-7 h-7", icon: "14", stackedButton: "px-2", stackedIcon: "12", affix: "text-sm px-1.5" },
        md: { button: "w-8 h-8", icon: "16", stackedButton: "px-2.5", stackedIcon: "14", affix: "text-sm px-2" },
        lg: { button: "w-9 h-9", icon: "18", stackedButton: "px-3", stackedIcon: "16", affix: "text-base px-2" },
        xl: { button: "w-10 h-10", icon: "20", stackedButton: "px-3.5", stackedIcon: "18", affix: "text-lg px-2.5" }
      };
      return u[o.size] || u.md;
    }), F = i(() => {
      if (f.value === null) return "";
      let u = f.value;
      if (o.precision !== void 0 ? u = u.toFixed(o.precision) : u = String(u), o.thousandSeparator) {
        const B = o.thousandSeparator === !0 ? "," : o.thousandSeparator, L = u.split(".");
        L[0] = L[0].replace(/\B(?=(\d{3})+(?!\d))/g, B), u = L.join(o.decimalSeparator);
      } else o.decimalSeparator !== "." && (u = u.replace(".", o.decimalSeparator));
      return u;
    }), N = i(() => o.label && (!m.value || F.value) ? "" : o.placeholder), A = (u) => {
      if (u === "" || u === null || u === void 0) return null;
      let B = String(u);
      if (o.thousandSeparator) {
        const H = o.thousandSeparator === !0 ? "," : o.thousandSeparator;
        B = B.split(H).join("");
      }
      o.decimalSeparator !== "." && (B = B.replace(o.decimalSeparator, "."));
      const L = parseFloat(B);
      return isNaN(L) ? null : L;
    }, W = (u) => u === null ? null : Math.min(Math.max(u, o.min), o.max), J = (u) => u === null || o.precision === void 0 ? u : parseFloat(u.toFixed(o.precision)), I = (u) => {
      if (u === "-" || u === o.decimalSeparator || u === "-" + o.decimalSeparator)
        return;
      const B = A(u);
      m.value || Z(B);
    }, Y = (u) => {
      m.value = !1;
      const B = u.target.value;
      let L = A(B);
      L !== null && (L = W(L), L = J(L)), l("update:modelValue", L), l("blur", u), l("change", L);
    }, oe = (u) => {
      m.value = !0, l("focus", u);
    }, E = (u) => {
      if (o.disabled || o.readonly) return;
      u.key === "ArrowUp" ? (u.preventDefault(), T()) : u.key === "ArrowDown" ? (u.preventDefault(), j()) : u.key === "Enter" && Y(u);
      const B = ["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"], L = /^[0-9]$/.test(u.key), H = u.key === o.decimalSeparator || u.key === ".", me = u.key === "-" && o.allowNegative, ce = u.ctrlKey || u.metaKey;
      !B.includes(u.key) && !L && !H && !me && !ce && u.preventDefault();
    }, R = (u) => {
      !o.mouseWheel || o.disabled || o.readonly || !m.value || (u.preventDefault(), u.deltaY < 0 ? T() : j());
    }, Z = (u) => {
      u !== null && (u = W(u), u = J(u)), l("update:modelValue", u), l("change", u);
    }, T = () => {
      if (o.disabled || o.readonly || w.value) return;
      let u = (f.value ?? 0) + o.step;
      u = W(u), u = J(u), l("update:modelValue", u), l("change", u);
    }, j = () => {
      if (o.disabled || o.readonly || C.value) return;
      let u = (f.value ?? 0) - o.step;
      u = W(u), u = J(u), l("update:modelValue", u), l("change", u);
    }, le = (u) => {
      o.disabled || o.readonly || (c.value = setTimeout(() => {
        d.value = setInterval(() => {
          u === "increment" ? T() : j();
        }, 75);
      }, 400));
    }, U = () => {
      c.value && (clearTimeout(c.value), c.value = null), d.value && (clearInterval(d.value), d.value = null);
    }, p = () => {
      l("update:modelValue", null), l("change", null);
    };
    return n({
      focus: () => h.value?.focus(),
      blur: () => h.value?.blur(),
      select: () => h.value?.select(),
      increment: T,
      decrement: j
    }), (u, B) => {
      const L = be("Icon");
      return r(), Q(q(Ee), xe(z.value, {
        "model-value": F.value,
        "onUpdate:modelValue": I,
        "onClick:clear": p,
        dir: b.value,
        lang: k.value,
        readonly: e.readonly,
        disabled: e.disabled,
        clearable: e.clearable,
        focused: m.value
      }), Fe({
        control: te(({ attrs: H, events: me }) => [
          g("div", gs, [
            e.showControls && e.controlsPosition === "stacked-left" ? (r(), a("div", ms, [
              g("button", {
                type: "button",
                disabled: e.disabled || w.value,
                class: v([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  S.value.stackedButton,
                  e.disabled || w.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: T,
                onMousedown: B[4] || (B[4] = (ce) => le("increment")),
                onMouseup: U,
                onMouseleave: U
              }, [
                G(L, {
                  name: "chevron-up",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, ps),
              g("button", {
                type: "button",
                disabled: e.disabled || C.value,
                class: v([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  S.value.stackedButton,
                  e.disabled || C.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: j,
                onMousedown: B[5] || (B[5] = (ce) => le("decrement")),
                onMouseup: U,
                onMouseleave: U
              }, [
                G(L, {
                  name: "chevron-down",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, vs)
            ])) : y("", !0),
            e.prefix ? (r(), a("span", {
              key: 1,
              class: v(["ui-text-secondary select-none", S.value.affix])
            }, V(e.prefix), 3)) : y("", !0),
            g("input", {
              ref_key: "inputRef",
              ref: h,
              value: F.value,
              type: "text",
              inputmode: "decimal",
              placeholder: N.value,
              disabled: e.disabled,
              readonly: e.readonly,
              class: v([
                "flex-1 w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                $.value,
                e.disabled ? "cursor-not-allowed" : "",
                e.readonly ? "cursor-default" : ""
              ]),
              onInput: B[6] || (B[6] = (ce) => I(ce.target.value)),
              onBlur: (ce) => {
                Y(ce), me.blur?.(ce);
              },
              onFocus: (ce) => {
                oe(ce), me.focus?.(ce);
              },
              onKeydown: E,
              onWheel: R
            }, null, 42, ys),
            e.suffix ? (r(), a("span", {
              key: 2,
              class: v(["ui-text-secondary select-none", S.value.affix])
            }, V(e.suffix), 3)) : y("", !0),
            e.showControls && e.controlsPosition === "stacked-right" ? (r(), a("div", bs, [
              g("button", {
                type: "button",
                disabled: e.disabled || w.value,
                class: v([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  S.value.stackedButton,
                  e.disabled || w.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: T,
                onMousedown: B[7] || (B[7] = (ce) => le("increment")),
                onMouseup: U,
                onMouseleave: U
              }, [
                G(L, {
                  name: "chevron-up",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, hs),
              g("button", {
                type: "button",
                disabled: e.disabled || C.value,
                class: v([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  S.value.stackedButton,
                  e.disabled || C.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: j,
                onMousedown: B[8] || (B[8] = (ce) => le("decrement")),
                onMouseup: U,
                onMouseleave: U
              }, [
                G(L, {
                  name: "chevron-down",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, xs)
            ])) : y("", !0)
          ])
        ]),
        _: 2
      }, [
        e.showControls && e.controlsPosition === "sides" ? {
          name: "prepend",
          fn: te(() => [
            g("button", {
              type: "button",
              disabled: e.disabled || C.value,
              class: v([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-l",
                S.value.button,
                e.disabled || C.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: j,
              onMousedown: B[0] || (B[0] = (H) => le("decrement")),
              onMouseup: U,
              onMouseleave: U,
              onTouchstart: B[1] || (B[1] = ee((H) => le("decrement"), ["prevent"])),
              onTouchend: U
            }, [
              G(L, {
                name: "minus",
                size: S.value.icon
              }, null, 8, ["size"])
            ], 42, cs)
          ]),
          key: "0"
        } : void 0,
        e.showControls && e.controlsPosition === "sides" ? {
          name: "append",
          fn: te(() => [
            g("button", {
              type: "button",
              disabled: e.disabled || w.value,
              class: v([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-r",
                S.value.button,
                e.disabled || w.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: T,
              onMousedown: B[2] || (B[2] = (H) => le("increment")),
              onMouseup: U,
              onMouseleave: U,
              onTouchstart: B[3] || (B[3] = ee((H) => le("increment"), ["prevent"])),
              onTouchend: U
            }, [
              G(L, {
                name: "plus",
                size: S.value.icon
              }, null, 8, ["size"])
            ], 42, fs)
          ]),
          key: "1"
        } : void 0
      ]), 1040, ["model-value", "dir", "lang", "readonly", "disabled", "clearable", "focused"]);
    };
  }
}, ks = { class: "flex items-center w-full gap-0" }, Ss = {
  key: 0,
  class: "text-sm ui-text-secondary whitespace-nowrap px-2"
}, Cs = ["type", "value", "placeholder"], $s = {
  key: 1,
  class: "text-sm ui-text-secondary whitespace-nowrap px-2"
}, zs = {
  key: 2,
  class: "animate-spin h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24"
}, bt = {
  __name: "InputText",
  props: {
    modelValue: { type: [String, Number], default: "" },
    label: { type: [String, Object], default: "" },
    placeholder: { type: String, default: "text ..." },
    hint: { type: String, default: "" },
    error: { type: String, default: "" },
    // Singular form. Must be declared or it never reaches Base: the forwarding
    // below (and v-bind="$props") only sees declared props.
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    rules: { type: Array, default: () => [] },
    // ADD THIS
    type: { type: String, default: "text" },
    // Search behavior
    // debounce: { type: Number, default: 300 },
    // Appearance
    size: { type: String },
    rounded: { type: String },
    border: { type: String },
    textColor: { type: String },
    bg: { type: String },
    containerClass: { type: String, default: "" },
    id: { type: String, default: "" },
    width: { type: String, default: "w-full" },
    iconType: { type: String, default: "solid" },
    // RTL/Lang support
    dir: { type: String, default: "" },
    lang: { type: String, default: "" },
    // Props that might be passed but not used (to avoid warnings)
    items: { type: Array, default: () => [] },
    itemText: { type: String, default: "text" },
    itemValue: { type: String, default: "value" }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    // 'search',
    "enter"
  ],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = pe("parentDir", ""), s = pe("parentLang", ""), x = i(() => l.dir || o), b = i(() => l.lang || s), k = M(!1), z = i(() => k.value ? "text" : "password"), h = i(() => {
      const J = ["label", "hint", "persistentHint", "disabled", "readonly", "required", "error", "errorMessages", "clearable", "size", "id", "prepend", "append", "isOpen", "bg", "border", "textColor", "rounded", "dir", "lang", "width", "rules", "errorMessage", "messages", "hideDetails", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], I = {};
      return J.forEach((Y) => {
        Y in l && (I[Y] = l[Y]);
      }), I;
    }), m = t, d = M(null), c = M(null), f = M(!1), C = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), w = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), $ = (J) => {
      const I = J.target.value;
      m("update:modelValue", I);
    }, S = (J) => {
      f.value = !0, m("focus", J);
    }, F = (J) => {
      f.value = !1, m("blur", J);
    }, N = (J) => {
      m("enter", l.modelValue);
    }, A = () => {
      m("update:modelValue", ""), m("clear"), d.value?.focus();
    };
    return n({ focus: () => {
      d.value?.focus();
    }, clear: A }), (J, I) => {
      const Y = be("Icon");
      return r(), a("div", {
        ref_key: "containerRef",
        ref: c,
        class: v(["relative", e.containerClass, e.width])
      }, [
        G(q(Ee), xe(h.value, {
          "model-value": e.modelValue,
          label: e.label,
          hint: e.hint,
          "persistent-hint": !!e.hint,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          error: !!e.error || e.errorMessages.length > 0,
          "error-messages": e.errorMessages,
          clearable: e.clearable && !e.loading,
          size: e.size,
          id: C.value,
          prepend: e.prepend,
          append: e.append,
          "is-open": f.value,
          "onClick:clear": A,
          bg: e.bg,
          border: e.border,
          "text-color": e.textColor,
          rounded: e.rounded,
          dir: x.value,
          lang: b.value,
          width: e.width,
          rules: e.rules
        }), Fe({
          control: te(({ attrs: oe, events: E }) => [
            g("div", ks, [
              e.prefix ? (r(), a("span", Ss, V(e.prefix), 1)) : y("", !0),
              g("input", xe({
                ref_key: "inputRef",
                ref: d
              }, oe, vt(E, !0), {
                type: e.type === "password" ? z.value : e.type,
                value: e.modelValue,
                placeholder: f.value && !e.modelValue ? e.placeholder : "",
                class: w.value,
                onInput: $,
                onKeydown: he(N, ["enter"]),
                onFocus: S,
                onBlur: F
              }), null, 16, Cs),
              e.suffix ? (r(), a("span", $s, V(e.suffix), 1)) : y("", !0)
            ])
          ]),
          _: 2
        }, [
          e.loading || e.type === "password" ? {
            name: "append",
            fn: te(() => [
              e.type === "password" && k.value ? (r(), Q(Y, {
                key: 0,
                onClick: I[0] || (I[0] = (oe) => k.value = !1),
                size: q(De)[e.size],
                name: "eye",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : y("", !0),
              e.type === "password" && !k.value ? (r(), Q(Y, {
                key: 1,
                onClick: I[1] || (I[1] = (oe) => k.value = !0),
                size: q(De)[e.size],
                name: "eye-slash",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : y("", !0),
              e.loading ? (r(), a("svg", zs, [...I[2] || (I[2] = [
                g("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                g("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : y("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["model-value", "label", "hint", "persistent-hint", "disabled", "readonly", "required", "error", "error-messages", "clearable", "size", "id", "prepend", "append", "is-open", "bg", "border", "text-color", "rounded", "dir", "lang", "width", "rules"])
      ], 2);
    };
  }
}, Bs = ["value", "placeholder"], Is = {
  __name: "SearchInput",
  props: {
    modelValue: { type: [String, Number], default: "" },
    label: { type: [String, Object], default: "" },
    placeholder: { type: String, default: "Search..." },
    hint: { type: String, default: "" },
    error: { type: String, default: "" },
    // Singular form. Must be declared or it never reaches Base: the forwarding
    // below (and v-bind="$props") only sees declared props.
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    prepend: { type: String, default: "magnifying-glass" },
    append: { type: String, default: "" },
    rules: { type: Array, default: () => [] },
    // ADD THIS
    // Search behavior
    debounce: { type: Number, default: 300 },
    // Appearance
    size: { type: String },
    rounded: { type: String },
    border: { type: String },
    textColor: { type: String },
    bg: { type: String },
    containerClass: { type: String, default: "" },
    id: { type: String, default: "" },
    width: { type: String, default: "w-full" },
    // RTL/Lang support
    dir: { type: String, default: "" },
    lang: { type: String, default: "" },
    // Props that might be passed but not used (to avoid warnings)
    items: { type: Array, default: () => [] },
    itemText: { type: String, default: "text" },
    itemValue: { type: String, default: "value" }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    "search",
    "enter"
  ],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = pe("parentDir", ""), s = pe("parentLang", ""), x = i(() => l.dir || o), b = i(() => l.lang || s), k = t, z = M(null), h = M(null), m = M(!1);
    let d = null;
    const c = i(() => l.id || `search-${Math.random().toString(36).substr(2, 9)}`), f = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), C = (A) => {
      const W = A.target.value;
      k("update:modelValue", W), clearTimeout(d), d = setTimeout(() => {
        k("input", W), k("search", W);
      }, l.debounce);
    }, w = (A) => {
      m.value = !0, k("focus", A);
    }, $ = (A) => {
      m.value = !1, k("blur", A);
    }, S = (A) => {
      k("enter", l.modelValue), k("search", l.modelValue);
    }, F = () => {
      k("update:modelValue", ""), k("clear"), z.value?.focus();
    }, N = () => {
      z.value?.focus();
    };
    return Be(() => {
      clearTimeout(d);
    }), n({ focus: N, clear: F }), (A, W) => (r(), a("div", {
      ref_key: "containerRef",
      ref: h,
      class: v(["relative", e.containerClass, e.width])
    }, [
      G(q(Ee), {
        "model-value": e.modelValue,
        label: e.label,
        hint: e.hint,
        "persistent-hint": !!e.hint,
        disabled: e.disabled,
        readonly: e.readonly,
        required: e.required,
        error: !!e.error || e.errorMessages.length > 0,
        "error-messages": e.errorMessages,
        "error-message": e.errorMessage,
        clearable: e.clearable && !e.loading,
        size: e.size,
        id: c.value,
        prepend: e.prepend,
        append: e.append,
        "is-open": m.value,
        "onClick:clear": F,
        bg: e.bg,
        border: e.border,
        "text-color": e.textColor,
        rounded: e.rounded,
        dir: x.value,
        lang: b.value,
        width: e.width,
        rules: e.rules
      }, Fe({
        control: te(({ attrs: J, events: I }) => [
          g("input", xe({
            ref_key: "inputRef",
            ref: z
          }, J, vt(I, !0), {
            type: "search",
            value: e.modelValue,
            placeholder: m.value && !e.modelValue || !e.label && !e.modelValue ? e.placeholder : "",
            class: f.value,
            onInput: C,
            onKeydown: he(S, ["enter"]),
            onFocus: w,
            onBlur: $
          }), null, 16, Bs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            W[0] || (W[0] = g("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              g("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              g("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["model-value", "label", "hint", "persistent-hint", "disabled", "readonly", "required", "error", "error-messages", "error-message", "clearable", "size", "id", "prepend", "append", "is-open", "bg", "border", "text-color", "rounded", "dir", "lang", "width", "rules"])
    ], 2));
  }
}, Vs = /* @__PURE__ */ ge(Is, [["__scopeId", "data-v-d672028c"]]), Ts = {
  class: /* @__PURE__ */ v(["flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
}, Ms = ["id", "disabled", "required", "dir", "placeholder"], Ls = {
  key: 0,
  class: /* @__PURE__ */ v(["absolute left-0 right-8 px-3 truncate pointer-events-none text-gray-400"])
}, As = {
  key: 1,
  class: /* @__PURE__ */ v(["absolute left-0 right-8 px-3 truncate pointer-events-none"])
}, Ps = {
  key: 2,
  class: "absolute inset-y-0 left-3 right-14 flex items-center gap-1 overflow-hidden"
}, Ds = { class: "truncate max-w-[100px]" }, Os = { class: "p-1.5" }, Es = {
  key: 0,
  class: /* @__PURE__ */ v(["px-2.5 py-1.5 ui-text-secondary text-center text-sm rounded-lg"])
}, js = ["onMousedown"], Ns = { class: "flex items-center gap-2 w-full" }, Rs = {
  key: 1,
  class: "flex-1"
}, Hs = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "text-input-text",
  class: "w-4 h-4"
}, Us = {
  __name: "Select",
  props: {
    modelValue: {
      type: [String, Number, Array],
      // Added Array back for multiple selection
      default: ""
    },
    label: { type: [Object, String], default: "" },
    dir: { type: String, default: "" },
    placeholder: { type: String, default: "Search..." },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    url: { type: String, default: "" },
    items: { type: Array, default: () => [] },
    itemTitle: { type: [String], default: "title" },
    // Changed default from 'title' to 'text' to match your data
    itemValue: { type: String, default: "value" },
    multiple: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    // Singular form. Must be declared or it never reaches Base: the forwarding
    // below (and v-bind="$props") only sees declared props.
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    rounded: { type: String, default: () => we("Select", "rounded") },
    size: { type: String },
    border: { type: String },
    textColor: { type: String },
    menuClass: { type: String, default: "" },
    menuStyle: { type: Object, default: () => ({}) },
    dropdownWidth: { type: String, default: "" },
    itemClass: { type: String, default: "" },
    itemHoverClass: { type: String, default: "" },
    selectedItemClass: { type: String, default: "" },
    bg: { type: String },
    returnObject: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    width: { type: String, default: "w-full" },
    margin: { type: String, default: "" },
    hint: { type: String, default: "" },
    lang: { type: String },
    rules: { type: Array, default: () => [] },
    eager: { type: Boolean, default: !1 },
    cacheItems: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change", "select", "clear", "open", "close", "focus", "blur", "enter", "search"],
  setup(e, { expose: n, emit: t }) {
    const l = t, o = M(""), s = M(null), x = M(null), b = M(null), k = M({ position: "fixed" });
    M("");
    const z = M(!1), h = M(!1), m = M(null), d = M([]);
    M([]);
    const c = e, f = pe("parentDir", ""), C = pe("parentLang", ""), w = pe("formContext", null), $ = pe("api", null), S = i(() => c.dir || f), F = i(() => c.lang || C), N = i(() => {
      const O = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "multiple", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], X = {};
      return O.forEach((se) => {
        se in c && (X[se] = c[se]);
      }), X;
    }), A = M(!1), W = i(() => c.url && d.value.length > 0 ? d.value : c.items), J = async () => {
      if (c.url && !(c.cacheItems && d.value.length > 0)) {
        h.value = !0, m.value = null;
        try {
          let O;
          if ($)
            O = await $.get(c.url);
          else {
            const ie = await fetch(c.url);
            if (!ie.ok) throw new Error(`HTTP error! status: ${ie.status}`);
            O = { data: await ie.json() };
          }
          const X = O.data;
          let se = null;
          if (Array.isArray(X))
            se = X;
          else if (X.data && Array.isArray(X.data))
            se = X.data;
          else if (X.items && Array.isArray(X.items))
            se = X.items;
          else if (X.results && Array.isArray(X.results))
            se = X.results;
          else
            for (const ie in X)
              if (Array.isArray(X[ie])) {
                se = X[ie];
                break;
              }
          if (!se)
            throw new Error("No array found in response");
          d.value = se;
        } catch (O) {
          console.error("Error fetching items:", O), m.value = O.message || "Failed to load items";
        } finally {
          h.value = !1;
        }
      }
    };
    Ve(() => {
      c.eager && c.url && J();
    });
    const I = (O) => {
      z.value = !0, l("focus", O);
    }, Y = (O) => {
      z.value = !1, l("blur", O);
    }, oe = (O) => {
      l("update:modelValue", O);
    }, E = (O) => {
      l("enter", c.modelValue), l("search", c.modelValue);
    }, R = () => {
      ce(), s.value?.focus();
    }, Z = i(() => [
      "bg-transparent outline-none border-none flex-1 min-w-0 max-w-auto",
      "placeholder:text-neutral-300",
      "focus:outline-none",
      // For multiple select with badges, make input flexible to fit remaining space
      c.multiple && T.value.length > 0 ? "flex-1 min-w-0" : "w-full",
      !c.multiple && j.value && !o.value ? "text-transparent" : "",
      c.searchable ? "cursor-text" : "no-caret invisible cursor-pointer"
    ]), T = i(() => c.multiple ? Array.isArray(c.modelValue) ? c.modelValue : [] : c.modelValue !== null && c.modelValue !== void 0 ? [c.modelValue] : []), j = i(() => {
      const O = W.value.find((X) => String(p(X)) === String(c.modelValue));
      return O ? U(O) : "";
    });
    i(() => c.multiple ? T.value.length > 0 ? `${T.value.length} selected` : "" : j.value);
    const le = i(() => o.value ? W.value.filter((O) => U(O).toLowerCase().includes(o.value.toLowerCase())) : W.value), U = (O) => O ? typeof O == "string" || typeof O == "number" ? O.toString() : typeof c.itemTitle == "function" ? c.itemTitle(O) : O[c.itemTitle] || "" : "", p = (O) => {
      if (!O) return "";
      if (typeof O == "string" || typeof O == "number") return O;
      if (typeof c.itemValue == "function") return c.itemValue(O);
      const X = O[c.itemValue];
      return X !== void 0 ? X : O;
    }, u = (O) => {
      const X = W.value.find((se) => String(p(se)) === String(O));
      return X ? U(X) : O.toString();
    }, B = (O) => T.value.some((X) => String(X) === String(O)), L = (O) => {
      const X = c.returnObject ? O : p(O);
      if (c.multiple) {
        let se = [...T.value];
        const ie = p(O), Me = se.findIndex((Ce) => String(Ce) === String(ie));
        Me > -1 ? se.splice(Me, 1) : se.push(ie), l("update:modelValue", se);
      } else
        l("update:modelValue", X), l("change", X), l("select", O), A.value = !1, o.value = "";
    }, H = (O) => {
      if (!c.multiple) {
        qe();
        return;
      }
      qe();
    }, me = (O) => {
      if (c.multiple) {
        const X = T.value.filter((se) => String(se) !== String(O));
        l("update:modelValue", X), l("change", X);
      }
    }, ce = () => {
      const O = c.multiple ? [] : "";
      l("update:modelValue", O), l("change", O), l("clear");
    }, fe = async () => {
      c.disabled || A.value || (A.value = !0, c.url && !c.eager && await J(), l("open"), c.searchable && Pe(() => {
        s.value?.focus();
      }));
    }, Se = async () => {
      c.disabled || (A.value ? (A.value = !1, l("close"), o.value = "") : await fe());
    }, rt = () => {
      c.searchable && !A.value && fe();
    }, qe = () => {
      if (A.value = !1, o.value = "", w?.validateOn?.value) {
        const O = w.validateOn.value;
        (O === "blur" || Array.isArray(O) && O.includes("blur")) && Pe(() => {
        });
      }
      l("close");
    };
    ye(A, async (O) => {
      if (!O) {
        o.value = "";
        return;
      }
      await Pe(), at();
    });
    function at() {
      if (!x.value) return;
      const O = x.value.getBoundingClientRect(), X = 4, se = window.innerHeight - O.bottom - X, ie = O.top - X, Me = 80, Ce = se < Me && ie > se;
      k.value = {
        position: "fixed",
        left: `${O.left}px`,
        width: c.dropdownWidth || `${O.width}px`,
        zIndex: 9999,
        overflowY: "auto",
        ...Ce ? {
          bottom: `${window.innerHeight - O.top + X}px`,
          maxHeight: `${Math.min(ie, 240)}px`
        } : {
          top: `${O.bottom + X}px`,
          maxHeight: `${Math.max(Math.min(se, 240), Me)}px`
        }
      };
    }
    return n({
      close: qe,
      open: () => Se(),
      clear: ce,
      refresh: J,
      focus: () => {
        c.searchable && A.value && s.value?.focus();
      }
    }), (O, X) => {
      const se = be("Icon");
      return Ie((r(), a("div", {
        ref_key: "triggerRef",
        ref: x,
        class: v(["relative group", e.width, e.margin])
      }, [
        G(q(Ee), xe(N.value, {
          "model-value": e.modelValue,
          "onUpdate:modelValue": oe,
          dir: S.value,
          lang: F.value,
          label: e.label,
          prepend: e.prepend,
          append: e.append,
          isOpen: A.value,
          focused: z.value,
          size: e.size,
          onClick: Se,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          bg: e.bg,
          border: e.border,
          "text-color": e.textColor,
          rounded: e.rounded,
          width: e.width,
          hint: e.hint,
          "persistent-hint": !!e.hint,
          rules: e.rules,
          "onClick:clear": R
        }), {
          control: te(({ attrs: ie, events: Me }) => [
            g("div", Ts, [
              Ie(g("input", {
                ref_key: "searchInputRef",
                ref: s,
                "onUpdate:modelValue": X[0] || (X[0] = (Ce) => o.value = Ce),
                id: ie.id,
                disabled: ie.disabled,
                required: ie.required,
                dir: ie.dir,
                type: "text",
                size: "1",
                placeholder: z.value && !o.value && !j.value || !o.value && !e.label ? e.placeholder : "",
                class: v(Z.value),
                onClick: ee(fe, ["stop"]),
                onInput: rt,
                onFocus: I,
                onBlur: Y,
                onKeydown: he(E, ["enter"])
              }, null, 42, Ms), [
                [pt, o.value]
              ]),
              !j.value && !e.multiple && !o.value && !e.label ? (r(), a("div", Ls, V(e.placeholder), 1)) : y("", !0),
              j.value && !e.multiple && !o.value ? (r(), a("div", As, V(j.value), 1)) : y("", !0),
              e.multiple && T.value.length > 0 ? (r(), a("div", Ps, [
                T.value.length < 2 ? (r(!0), a(ae, { key: 0 }, ue(T.value, (Ce) => (r(), a("div", { key: Ce }, [
                  g("div", {
                    class: v(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap", e.textColor, e.border, e.rounded ? q($e)[e.rounded] : ""])
                  }, [
                    g("div", Ds, V(u(Ce)), 1),
                    G(se, {
                      onClick: ee((Re) => me(Ce), ["stop"]),
                      name: "x-mark",
                      type: "outline",
                      size: "10",
                      color: "text-current"
                    }, null, 8, ["onClick"])
                  ], 2)
                ]))), 128)) : (r(), a("div", {
                  key: 1,
                  class: v(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap flex-shrink-0", e.textColor, e.border, e.rounded ? q($e)[e.rounded] : ""])
                }, [
                  g("div", null, V(T.value.length) + " selected", 1)
                ], 2))
              ])) : y("", !0)
            ])
          ]),
          append: te(() => [
            e.append ? (r(), Q(se, {
              key: 1,
              name: e.append,
              type: "outline",
              size: "16",
              class: "text-input-border"
            }, null, 8, ["name"])) : (r(), Q(se, {
              key: 0,
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: v(["transition-transform duration-200", A.value ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"]))
          ]),
          _: 1
        }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "focused", "size", "disabled", "readonly", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
        (r(), Q(Je, { to: "body" }, [
          G(ke, { name: "fade" }, {
            default: te(() => [
              A.value ? (r(), a("div", {
                key: 0,
                ref_key: "dropdownRef",
                ref: b,
                class: v([
                  "shadow-lg z-[9999] overflow-hidden",
                  e.bg ?? "ui-bg-color",
                  e.border ? "border " + e.border : "border border-color",
                  e.rounded ? q($e)[e.rounded] : "rounded-lg",
                  e.menuClass
                ]),
                style: de({ ...k.value, ...e.menuStyle })
              }, [
                g("ul", Os, [
                  le.value.length === 0 ? (r(), a("li", Es, [
                    D(O.$slots, "no-data", {}, () => [
                      X[2] || (X[2] = ve("No items found", -1))
                    ], !0)
                  ])) : y("", !0),
                  (r(!0), a(ae, null, ue(le.value, (ie, Me) => (r(), a("li", {
                    key: p(ie),
                    onMousedown: (Ce) => {
                      Ce.preventDefault(), L(ie);
                    },
                    class: v([
                      "px-2.5 py-1.5 cursor-pointer transition flex items-center text-sm rounded-lg ui-text-color",
                      B(p(ie)) ? e.selectedItemClass || "bg-primary/10 text-primary font-medium" : e.itemClass || "hover:bg-color-1",
                      e.itemHoverClass
                    ])
                  }, [
                    D(O.$slots, "item", {
                      item: ie,
                      index: Me,
                      selected: B(p(ie))
                    }, () => [
                      g("div", Ns, [
                        e.multiple ? (r(), Q(q(Ot), {
                          key: 0,
                          "model-value": B(p(ie)),
                          value: Me,
                          label: U(ie),
                          required: !1,
                          error: !1,
                          onClick: X[1] || (X[1] = ee(() => {
                          }, ["stop"]))
                        }, null, 8, ["model-value", "value", "label"])) : y("", !0),
                        e.multiple ? y("", !0) : (r(), a("span", Rs, V(U(ie)), 1)),
                        !e.multiple && B(p(ie)) ? (r(), a("svg", Hs, [...X[3] || (X[3] = [
                          g("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.5 12.75l6 6 9-13.5"
                          }, null, -1)
                        ])])) : y("", !0)
                      ])
                    ], !0)
                  ], 42, js))), 128))
                ])
              ], 6)) : y("", !0)
            ]),
            _: 3
          })
        ]))
      ], 2)), [
        [q(Mt), [H, { ignore: [b.value] }]]
      ]);
    };
  }
}, Fs = /* @__PURE__ */ ge(Us, [["__scopeId", "data-v-03a51eca"]]), qs = ["value", "placeholder", "rows", "maxlength"], Ws = {
  __name: "Textarea",
  props: {
    modelValue: { type: [String, Number], default: "" },
    label: { type: [String, Object], default: "" },
    placeholder: { type: String, default: "text ..." },
    hint: { type: String, default: "" },
    error: { type: String, default: "" },
    // Singular form. Must be declared or it never reaches Base: the forwarding
    // below (and v-bind="$props") only sees declared props.
    errorMessage: { type: [String, Array], default: "" },
    errorMessages: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    rules: { type: Array, default: () => [] },
    // ADD THIS
    rows: { type: [Number, String], default: 3 },
    maxlength: { type: [Number, String], default: null },
    size: { type: String },
    rounded: { type: String },
    border: { type: String },
    textColor: { type: String },
    bg: { type: String },
    containerClass: { type: String, default: "" },
    id: { type: String, default: "" },
    width: { type: String, default: "w-full" },
    // RTL/Lang support
    dir: { type: String, default: "" },
    lang: { type: String, default: "" },
    // Props that might be passed but not used (to avoid warnings)
    items: { type: Array, default: () => [] },
    itemText: { type: String, default: "text" },
    itemValue: { type: String, default: "value" },
    height: { type: String, default: "h-auto" }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    // 'search',
    "enter"
  ],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = pe("parentDir", ""), s = pe("parentLang", ""), x = i(() => l.dir || o), b = i(() => l.lang || s), k = t, z = M(null), h = M(null), m = M(!1), d = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), c = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), f = (N) => {
      const A = N.target.value;
      k("update:modelValue", A);
    }, C = (N) => {
      m.value = !0, k("focus", N);
    }, w = (N) => {
      m.value = !1, k("blur", N);
    }, $ = (N) => {
      k("enter", l.modelValue);
    }, S = () => {
      k("update:modelValue", ""), k("clear"), z.value?.focus();
    };
    return n({ focus: () => {
      z.value?.focus();
    }, clear: S }), (N, A) => (r(), a("div", {
      ref_key: "containerRef",
      ref: h,
      class: v(["relative", e.containerClass, e.width])
    }, [
      G(q(Ee), xe(N.$props, {
        "model-value": e.modelValue,
        error: !!e.error || e.errorMessages.length > 0,
        clearable: e.clearable && !e.loading,
        id: d.value,
        "is-open": m.value,
        "onClick:clear": S,
        dir: x.value,
        lang: b.value,
        rules: e.rules
      }), Fe({
        control: te(({ attrs: W, events: J }) => [
          g("textarea", xe({
            ref_key: "inputRef",
            ref: z
          }, W, vt(J, !0), {
            type: "text",
            value: e.modelValue,
            placeholder: m.value && !e.modelValue ? e.placeholder : "",
            class: c.value,
            rows: e.rows,
            maxlength: e.maxlength,
            onInput: f,
            onKeydown: he($, ["enter"]),
            onFocus: C,
            onBlur: w
          }), null, 16, qs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            A[0] || (A[0] = g("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              g("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              g("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1))
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["model-value", "error", "clearable", "id", "is-open", "dir", "lang", "rules"])
    ], 2));
  }
}, Ks = /* @__PURE__ */ ge(Ws, [["__scopeId", "data-v-f4b34525"]]), lt = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    name: {},
    type: { default: "solid" },
    size: { default: 24 },
    color: { default: "currentColor" }
  },
  setup(e) {
    const n = e, t = qt(), l = (d) => d.replace(/-([a-z])/g, (c, f) => f.toUpperCase()).replace(/(?:^|_|\s|-)(\w)/g, (c, f) => f.toUpperCase()).replace(/Icon$/, "") + "Icon", o = i(() => l(n.name)), s = i(() => {
      const d = Number(n.size);
      return Number.isFinite(d) && d > 0 ? d : null;
    }), x = i(() => {
      if (n.type === "outline") return ["o24"];
      if (n.type === "micro") return ["s16", "s20", "s24"];
      if (n.type === "mini") return ["s20", "s24"];
      const d = s.value;
      if (d !== null) {
        if (d <= 16) return ["s16", "s20", "s24"];
        if (d <= 20) return ["s20", "s24"];
      }
      return ["s24"];
    });
    async function b(d) {
      switch (d) {
        case "o24":
          return await import("./index-CdjTVJ3l.js");
        case "s20":
          return await import("./index-CzckdG3U.js");
        case "s16":
          return await import("./index-5JdaCs2M.js");
        default:
          return await import("./index-BeQxidt5.js");
      }
    }
    const k = i(
      () => ut({
        loader: async () => {
          for (const d of x.value) {
            const c = (await b(d))[o.value];
            if (c) return c;
          }
          throw new Error(`Icon "${o.value}" not found in ${n.type} icons`);
        },
        loadingComponent: ut(
          async () => (await import("./index-CdjTVJ3l.js")).ArrowPathIcon
        ),
        errorComponent: ut(
          async () => (await import("./index-BeQxidt5.js")).ExclamationTriangleIcon
        ),
        delay: 200,
        timeout: 5e3
      })
    ), z = i(() => {
      if (n.type !== "outline") return null;
      const d = s.value;
      return d === null || d >= 20 ? null : +(1.25 * 24 / d).toFixed(3);
    }), h = (d) => d ? /(?:^|\s)(?:text-|fill-|stroke-|bg-|ring-|border-)/.test(d) : !1, m = i(() => {
      const d = /^\d+(\.\d+)?$/.test(String(n.size)) ? `${n.size}px` : String(n.size), f = ["hero-icon", h(n.color) ? n.color : "", t.class].filter(Boolean), C = typeof t.style == "object" && t.style ? t.style : {}, { class: w, style: $, ...S } = t;
      return {
        ...S,
        class: f,
        style: {
          ...C,
          width: d,
          height: d,
          minWidth: d,
          maxWidth: d,
          minHeight: d,
          maxHeight: d,
          // Read by the .hero-icon > svg rule; overridable per instance.
          ...z.value !== null ? { "--hero-stroke": String(z.value) } : {},
          ...h(n.color) ? {} : { color: n.color }
        }
      };
    });
    return (d, c) => (r(), a("span", Wt(Kt(m.value)), [
      (r(), Q(Ne(k.value)))
    ], 16));
  }
}), Gs = {
  UiButton: ml,
  UiRadio: Sl,
  UiRadioGroup: Il,
  UiRadioItem: Ll,
  UiSwitch: Nl,
  UiAppBar: Xl,
  UiAvatar: Pt,
  UiBadge: Ql,
  UiBanner: on,
  UiBreadcrumbs: vn,
  UiCard: hn,
  UiConfirmDialog: $n,
  UiDivider: In,
  UiDropdown: Mn,
  UiDropdownItem: On,
  UiExpansion: Jn,
  UiFooter: yr,
  UiForm: br,
  UiGroupCard: wr,
  UiLayout: Cr,
  UiSplitLayout: $r,
  UiNavBar: jr,
  UiOverlay: Nr,
  UiPagination: ta,
  UiSideBar: wa,
  UiSideBarItem: Dt,
  UiSnackbar: Ta,
  UiThemeToggle: oo,
  UiTimeline: Ha,
  UiTimelineItem: Ga,
  UiTab: eo,
  UiToolbar: so,
  UiTable: uo,
  UiTableHead: co,
  UiTableBody: fo,
  UiTableRow: mo,
  UiTh: xo,
  UiTd: wo,
  UiTableEmpty: zo,
  UiTableSkeleton: Bo,
  UiBase: Ee,
  UiCheckbox: Ot,
  UiChip: Et,
  UiChipGroup: jt,
  UiDatepicker: Vt,
  UiDatePicker: Vt,
  UiFile: ds,
  UiInputNumber: ws,
  UiInputText: bt,
  UiSearchInput: Vs,
  UiSelect: Fs,
  UiTextarea: Ks,
  UiIcon: lt
}, Ys = {
  install(e) {
    for (const [n, t] of Object.entries(Gs)) {
      e.component(n, t);
      const l = n.replace(/^Ui/, "");
      e.component(l, t);
    }
  }
};
function ei(e) {
  const n = i(
    () => typeof e == "boolean" ? e : Ae.value
  ), t = i(() => n.value ? "rtl" : "ltr");
  return { isRtl: n, rtlClass: t };
}
const Tt = rl(), ti = {
  install(e, n = {}) {
    ol(n), e.provide("snackbar", Tt), e.config.globalProperties.$snackbar = Tt, e.use(Ys), e.use(Yt), e.use(Xt), e.directive("tooltip", ll);
  }
};
export {
  Xl as AppBar,
  Pt as Avatar,
  Ql as Badge,
  on as Banner,
  Ee as Base,
  vn as Breadcrumbs,
  ml as Button,
  hn as Card,
  Ot as Checkbox,
  Et as Chip,
  jt as ChipGroup,
  $n as ConfirmDialog,
  Vt as DatePicker,
  Vt as Datepicker,
  In as Divider,
  Mn as Dropdown,
  On as DropdownItem,
  Jn as Expansion,
  ds as File,
  yr as Footer,
  br as Form,
  wr as GroupCard,
  lt as Icon,
  ws as InputNumber,
  bt as InputText,
  Cr as Layout,
  jr as NavBar,
  Nr as Overlay,
  ta as Pagination,
  Sl as Radio,
  Il as RadioGroup,
  Ll as RadioItem,
  Vs as SearchInput,
  Fs as Select,
  wa as SideBar,
  Dt as SideBarItem,
  Ta as Snackbar,
  $r as SplitLayout,
  Nl as Switch,
  eo as Tab,
  uo as Table,
  fo as TableBody,
  zo as TableEmpty,
  co as TableHead,
  mo as TableRow,
  Bo as TableSkeleton,
  wo as Td,
  Ks as Textarea,
  xo as Th,
  oo as ThemeToggle,
  Ha as Timeline,
  Ga as TimelineItem,
  so as Toolbar,
  ti as default,
  Zs as defineUiConfig,
  we as getDefault,
  xn as useConfirm,
  Qe as useI18n,
  ei as useRtl,
  rl as useSnackbar,
  _s as useUiConfig
};
//# sourceMappingURL=index.js.map
