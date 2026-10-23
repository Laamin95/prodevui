import { computed as i, ref as L, watch as pe, shallowRef as Nt, triggerRef as xt, readonly as Rt, reactive as tt, inject as ge, createElementBlock as a, openBlock as r, normalizeClass as g, createCommentVNode as v, createElementVNode as c, renderSlot as D, createBlock as Z, unref as F, toDisplayString as T, createTextVNode as me, Fragment as oe, renderList as ue, withModifiers as ee, createVNode as K, Transition as xe, withCtx as te, provide as Ke, toRef as et, resolveComponent as ve, normalizeStyle as ce, onMounted as Ve, onBeforeUnmount as ze, withDirectives as Ie, vShow as Oe, defineComponent as Te, useSlots as nt, nextTick as Ae, Teleport as Xe, withKeys as ye, vModelText as mt, resolveDynamicComponent as je, createSlots as He, onUpdated as Ht, isRef as wt, createStaticVNode as Ut, mergeProps as be, getCurrentInstance as Ft, toHandlers as pt, useAttrs as qt, defineAsyncComponent as it, normalizeProps as Wt, guardReactiveProps as Kt } from "vue";
import { vOnClickOutside as Mt } from "@vueuse/components";
import { VueDatePicker as Gt } from "@vuepic/vue-datepicker";
const ft = {
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
    e.config.globalProperties.$rules = ft, e.provide("validationRules", ft);
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
}, ut = L(localStorage.getItem("language") || "en"), Je = () => {
  const e = (l, o = "") => {
    const s = o || ut.value, b = l.split(".");
    let y = kt[s];
    for (const k of b)
      y = y?.[k];
    return y || l;
  }, n = (l) => {
    kt[l] && (ut.value = l, localStorage.setItem("language", l), document.documentElement.lang = l);
  }, t = i(() => ut.value);
  return {
    t: e,
    setLanguage: n,
    language: t
  };
}, Le = L(!1);
function St(e) {
  Le.value = e, localStorage.setItem("rtlSetting", JSON.stringify(e)), typeof document < "u" && (document.documentElement.setAttribute("dir", e ? "rtl" : "ltr"), document.documentElement.setAttribute("lang", e == !0 ? "dv" : "en"), e ? document.documentElement.classList.add("rtl-font") : document.documentElement.classList.remove("rtl-font"));
}
const Xt = {
  install(e) {
    const { t: n, setLanguage: t, language: l } = Je();
    pe(l, (o) => {
      St(o === "dv");
    }), e.provide("i18n", {
      t: n,
      setLanguage: t,
      language: l
    }), e.config.globalProperties.$t = n, e.config.globalProperties.$setLanguage = t, e.config.globalProperties.$language = l;
  }
}, vt = {
  xs: "text-xs px-2 py-1 ",
  sm: "text-sm px-3 py-2 ",
  md: "text-base-1 px-4 py-2",
  lg: "text-md px-5 py-3",
  xl: "text-lg px-6 py-4"
}, Pe = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24
}, we = {
  none: "rounded-none",
  d: "rounded-default",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, We = {
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
}, Ge = (e, n, t = null) => {
  const { language: l } = Je(), o = i(() => {
    let b = "";
    return n != "" ? b = n : b = l.value, b === "dv" ? "dv" : "en";
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
  return !Le.value ? e : e === "left" ? "right" : e === "right" ? "left" : e;
}
function At(e) {
  return e && Ge(e, "") || "empty-tooltip";
}
function el(e) {
  if (e.tooltipEl) return;
  const n = document.createElement("div");
  n.className = "vts-tooltip", n.setAttribute("role", "tooltip"), n.style.position = "absolute", n.style.top = "-9999px", n.style.left = "-9999px", n.style.visibility = "hidden", n.style.zIndex = "var(--vts-z-tooltip, 1000)";
  const t = document.createElement("div");
  t.className = "vts-tooltip-content";
  const { language: l } = Je();
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
    const { language: t } = Je();
    t.value === "dv" || e.classModifiers.includes("faruma") ? n.classList.add("faruma") : n.classList.remove("faruma");
  }
}
function gt(e, n) {
  if (!n.tooltipEl) return;
  const t = n.tooltipEl, l = e.getBoundingClientRect(), o = t.getBoundingClientRect(), s = window.scrollX || window.pageXOffset, b = window.scrollY || window.pageYOffset, y = _t(n.options.placement || "top"), k = n.options.offset?.x ?? 0, I = n.options.offset?.y ?? 0, p = n.options.arrow ? 8 : 0;
  let f = 0, u = 0;
  switch (y) {
    case "top":
      f = l.top + b - o.height - p - I, u = l.left + s + l.width / 2 - o.width / 2 + k;
      break;
    case "bottom":
      f = l.bottom + b + p + I, u = l.left + s + l.width / 2 - o.width / 2 + k;
      break;
    case "left":
      f = l.top + b + l.height / 2 - o.height / 2 + I, u = l.left + s - o.width - p - k;
      break;
    case "right":
      f = l.top + b + l.height / 2 - o.height / 2 + I, u = l.right + s + p + k;
      break;
  }
  if (t.style.top = `${f}px`, t.style.left = `${u}px`, t.style.visibility = "", n.options.arrow && n.arrowEl) {
    const d = n.arrowEl;
    switch (d.style.width = "8px", d.style.height = "8px", y) {
      case "top":
        d.style.bottom = "-4px", d.style.left = "50%", d.style.top = "", d.style.right = "", d.style.transform = "translateX(-50%) rotate(225deg)";
        break;
      case "bottom":
        d.style.top = "-4px", d.style.left = "50%", d.style.bottom = "", d.style.right = "", d.style.transform = "translateX(-50%) rotate(45deg)";
        break;
      case "left":
        d.style.right = "-4px", d.style.top = "50%", d.style.left = "", d.style.bottom = "", d.style.transform = "translateY(-50%) rotate(135deg)";
        break;
      case "right":
        d.style.left = "-4px", d.style.top = "50%", d.style.right = "", d.style.bottom = "", d.style.transform = "translateY(-50%) rotate(315deg)";
        break;
    }
  }
}
function dt(e, n, t = null) {
  n.options.disabled || (n.showTimer && window.clearTimeout(n.showTimer), n.hideTimer && window.clearTimeout(n.hideTimer), n.showTimer = window.setTimeout(() => {
    n.lastTrigger = t, el(n), n.open = !0, gt(e, n);
  }, n.options.showDelay ?? 80));
}
function qe(e) {
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
    }, { language: o } = Je(), s = pe(o, () => {
      It(l), l.open && gt(e, l);
    });
    l.unwatchLanguage = s, l.handlers.mouseover = (b) => {
      l.options.openOnHover && dt(e, l, "hover");
    }, l.handlers.mouseout = (b) => {
      if (!l.options.openOnHover) return;
      const y = b.relatedTarget;
      y && e.contains(y) || qe(l);
    }, l.handlers.focusin = () => l.options.openOnFocus && dt(e, l, "focus"), l.handlers.focusout = () => l.options.openOnFocus && qe(l), l.handlers.click = () => {
      l.options.openOnClick && (l.open ? qe(l) : dt(e, l, "click"));
    }, l.handlers.docClick = (b) => {
      if (!l.open) return;
      const y = b.target;
      l.tooltipEl && l.tooltipEl.contains(y) || e.contains(y) || qe(l);
    }, l.handlers.keydown = (b) => {
      b.key === "Escape" && qe(l);
    }, e.addEventListener("mouseover", l.handlers.mouseover), e.addEventListener("mouseout", l.handlers.mouseout), e.addEventListener("focusin", l.handlers.focusin), e.addEventListener("focusout", l.handlers.focusout), e.addEventListener("click", l.handlers.click), document.addEventListener("click", l.handlers.docClick, { passive: !0 }), document.addEventListener("keydown", l.handlers.keydown), e.__tooltipState = l;
  },
  updated(e, n) {
    const t = e.__tooltipState;
    t && (t.options = zt(
      $t(Ct(n), n.modifiers || {}),
      n.modifiers || {}
    ), t.classModifiers = Bt(n.modifiers), It(t), Lt(t), t.open && gt(e, t));
  },
  unmounted(e) {
    const n = e.__tooltipState;
    n && tl(e, n);
  }
}, Ne = Nt([]);
let nl = 0, ct = null;
function rl() {
  if (ct)
    return ct;
  const e = (b) => {
    const y = ++nl, k = L(!0), I = () => {
      k.value = !1, setTimeout(() => {
        const f = Ne.value.findIndex((u) => u.id === y);
        f > -1 && (Ne.value.splice(f, 1), xt(Ne));
      }, 300);
    }, p = {
      id: y,
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
        ...b
      },
      close: I
    };
    return Ne.value.push(p), xt(Ne), p.options.timeout > 0 && setTimeout(() => {
      I();
    }, p.options.timeout), p;
  }, s = {
    snackbars: Ne,
    show: e,
    success: (b, y = {}) => e({ message: b, variant: "success", icon: "success", ...y }),
    error: (b, y = {}) => e({ message: b, variant: "error", icon: "error", ...y }),
    warning: (b, y = {}) => e({ message: b, variant: "warning", icon: "warning", ...y }),
    info: (b, y = {}) => e({ message: b, variant: "info", icon: "info", ...y })
  };
  return ct = s, s;
}
const al = {
  rounded: "d",
  size: "md",
  color: "primary",
  variant: "contained"
}, Ye = tt({
  defaults: { ...al },
  components: {}
});
function Zs(e = {}) {
  return e;
}
function ol(e) {
  e.defaults && Object.assign(Ye.defaults, e.defaults), e.components && Object.assign(Ye.components, e.components);
}
function he(e, n) {
  const t = Ye.components[e];
  return t && t[n] !== void 0 ? t[n] : Ye.defaults[n];
}
function _s() {
  return Rt(Ye);
}
const fe = (e, n) => {
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
      default: () => he("Button", "variant")
    },
    color: {
      type: String,
      default: () => he("Button", "color")
    },
    size: {
      type: String,
      default: () => he("Button", "size")
    },
    rounded: {
      type: String,
      default: () => he("Button", "rounded")
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
    const { t, setLanguage: l } = ge("i18n", { t: (m) => m, setLanguage: () => {
    } }), o = n, s = ge("parentLang", ""), b = i(() => y.lang ? y.lang : s), y = e, k = {
      xs: "p-2",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
      xl: "p-3"
    }, I = i(() => We[y.color] ? We[y.color][y.variant] : We.primary[y.variant]), p = i(() => [
      "inline-flex items-center justify-center font-medium transition-all select-none",
      y.padding ? k[y.size] : y.icon ? "" : vt[y.size],
      we[y.rounded],
      I.value,
      y.block ? "w-full" : "",
      b.value === "dv" ? "faruma" : "",
      y.disabled || y.loading ? "opacity-90 cursor-not-allowed" : "cursor-pointer"
    ]), f = (m) => {
      !y.disabled && !y.loading && o("click", m);
    }, u = i(() => {
      if (!y.label)
        return t("buttons.submit", b.value);
      if (y.label.startsWith("buttons.")) {
        const m = t(y.label, b.value);
        if (m !== y.label)
          return m;
      }
      return y.label;
    });
    return (m, d) => (r(), a("button", {
      class: g(p.value),
      disabled: e.disabled || e.loading,
      onClick: f
    }, [
      m.$slots.prepend || e.prependIcon || e.loading ? (r(), a("span", il, [
        e.loading ? (r(), a("span", ul)) : v("", !0),
        e.loading ? v("", !0) : D(m.$slots, "prepend", { key: 1 }, () => [
          e.prependIcon ? (r(), Z(F(lt), {
            key: 0,
            name: e.prependIcon,
            type: "outline",
            size: F(Pe)[y.size],
            color: "text-current",
            class: g(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : v("", !0)
        ], !0)
      ])) : v("", !0),
      c("span", dl, [
        D(m.$slots, "default", {}, () => [
          e.icon ? (r(), Z(F(lt), {
            key: 0,
            name: e.icon,
            type: "mini",
            size: F(Pe)[y.size],
            color: "text-current",
            class: g(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : v("", !0),
          e.icon ? v("", !0) : (r(), a("div", cl, T(u.value), 1))
        ], !0)
      ]),
      m.$slots.append || e.appendIcon ? (r(), a("span", fl, [
        D(m.$slots, "append", {}, () => [
          e.appendIcon ? (r(), Z(F(lt), {
            key: 0,
            name: e.appendIcon,
            type: "outline",
            size: F(Pe)[y.size],
            class: g(e.iconClass),
            stroke: "currentColor",
            color: "text-current"
          }, null, 8, ["name", "size", "class"])) : v("", !0)
        ], !0)
      ])) : v("", !0)
    ], 10, sl));
  }
}, ml = /* @__PURE__ */ fe(gl, [["__scopeId", "data-v-a9606ff7"]]), pl = {
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
    const t = e, l = n, o = L(null), s = i(() => t.items.map((x) => typeof x != "object" || x === null ? {
      label: String(x),
      value: x,
      description: "",
      disabled: !1
    } : {
      label: x[t.itemLabel] || "",
      value: x[t.itemValue] ?? x,
      description: x[t.itemDescription] || "",
      disabled: x[t.itemDisabled] || !1
    })), b = (x) => t.modelValue === null || t.modelValue === void 0 ? !1 : typeof x == "object" && typeof t.modelValue == "object" ? JSON.stringify(x) === JSON.stringify(t.modelValue) : t.modelValue === x, y = (x) => {
      t.readonly || (l("update:modelValue", x), l("change", x));
    }, k = i(() => {
      const x = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return x[t.size] || x.md;
    }), I = i(() => {
      const x = {
        xs: "w-1.5 h-1.5",
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
        xl: "w-3.5 h-3.5"
      };
      return x[t.size] || x.md;
    }), p = i(() => {
      const x = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return x[t.size] || x.md;
    }), f = i(() => {
      const x = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return x[t.size] || x.md;
    }), u = i(() => {
      const x = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return x[t.size] || x.md;
    }), m = i(() => {
      const x = {
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
      return x[t.color] || x.primary;
    }), d = (x, B) => {
      const $ = B || t.disabled;
      return t.error ? b(x) ? "border-red-500 text-red-500" : "border-red-500 hover:border-red-600" : $ ? b(x) ? "border-gray-400 text-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : b(x) ? m.value.selected : m.value.unselected;
    }, z = (x) => {
      if (t.error) return "bg-red-500";
      if (x || t.disabled) return "bg-gray-400";
      const B = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return B[t.color] || B.primary;
    };
    return (x, B) => (r(), a("div", {
      class: g(["relative", e.margin])
    }, [
      e.groupLabel ? (r(), a("label", {
        key: 0,
        class: g([
          "block mb-2 font-medium ui-text-primary",
          f.value
        ])
      }, [
        me(T(e.groupLabel) + " ", 1),
        e.required ? (r(), a("span", pl, "*")) : v("", !0)
      ], 2)) : v("", !0),
      c("div", {
        class: g([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ]),
        role: "radiogroup",
        "aria-label": e.groupLabel
      }, [
        (r(!0), a(oe, null, ue(s.value, ($, U) => (r(), a("label", {
          key: $.value,
          class: g([
            "inline-flex items-start gap-3 cursor-pointer select-none group",
            $.disabled || e.disabled ? "opacity-50 cursor-not-allowed" : "",
            e.labelPosition === "left" ? "flex-row-reverse" : ""
          ]),
          onClick: ee((j) => !$.disabled && !e.disabled && y($.value), ["prevent"])
        }, [
          c("div", {
            class: g([
              "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
              k.value,
              d($.value, $.disabled)
            ])
          }, [
            K(xe, { name: "scale" }, {
              default: te(() => [
                b($.value) ? (r(), a("div", {
                  key: 0,
                  class: g([
                    "rounded-full bg-current transition-all duration-200",
                    I.value,
                    z($.disabled)
                  ])
                }, null, 2)) : v("", !0)
              ]),
              _: 2
            }, 1024),
            o.value === $.value ? (r(), a("div", bl)) : v("", !0)
          ], 2),
          $.label || $.description ? (r(), a("div", hl, [
            $.label ? (r(), a("span", {
              key: 0,
              class: g([
                "ui-text-primary leading-tight transition-colors",
                p.value,
                !$.disabled && !e.disabled ? "group-hover:text-primary" : ""
              ])
            }, T($.label), 3)) : v("", !0),
            $.description ? (r(), a("span", {
              key: 1,
              class: g([
                "ui-text-secondary mt-0.5",
                u.value
              ])
            }, T($.description), 3)) : v("", !0)
          ])) : v("", !0)
        ], 10, yl))), 128))
      ], 10, vl),
      e.error ? (r(), a("p", xl, [
        B[0] || (B[0] = c("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          c("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        me(" " + T(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : v("", !0),
      e.hint && !e.error ? (r(), a("p", wl, T(e.hint), 1)) : v("", !0)
    ], 2));
  }
}, Sl = /* @__PURE__ */ fe(kl, [["__scopeId", "data-v-5aa3c31e"]]), Cl = ["aria-label"], $l = {
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
    Ke("radioGroup", {
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
    return (s, b) => (r(), a("div", {
      class: g(["relative", e.margin]),
      role: "radiogroup",
      "aria-label": e.label
    }, [
      e.label ? (r(), a("label", {
        key: 0,
        class: g([
          "block mb-2 font-medium ui-text-primary",
          o.value
        ])
      }, [
        me(T(e.label) + " ", 1),
        e.required ? (r(), a("span", $l, "*")) : v("", !0)
      ], 2)) : v("", !0),
      c("div", {
        class: g([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ])
      }, [
        D(s.$slots, "default")
      ], 2),
      e.error ? (r(), a("p", zl, [
        b[0] || (b[0] = c("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          c("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        me(" " + T(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : v("", !0),
      e.hint && !e.error ? (r(), a("p", Bl, T(e.hint), 1)) : v("", !0)
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
    const t = e, l = ge("radioGroup", null), o = n, s = i(() => l ? l.modelValue.value === t.value : !1), b = () => {
      l && l.select(t.value), o("update:modelValue", t.value), o("change", t.value);
    }, y = i(() => {
      const d = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return d[t.size] || d.md;
    }), k = i(() => {
      const d = {
        xs: "w-1.5 h-1.5",
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
        xl: "w-3.5 h-3.5"
      };
      return d[t.size] || d.md;
    }), I = i(() => {
      const d = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return d[t.size] || d.md;
    }), p = i(() => {
      const d = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return d[t.size] || d.md;
    }), f = i(() => {
      const d = {
        primary: { selected: "border-primary", unselected: "border-color-3 hover:border-primary" },
        success: { selected: "border-green-500", unselected: "border-color-3 hover:border-green-500" },
        warning: { selected: "border-yellow-500", unselected: "border-color-3 hover:border-yellow-500" },
        danger: { selected: "border-red-500", unselected: "border-color-3 hover:border-red-500" },
        info: { selected: "border-blue-500", unselected: "border-color-3 hover:border-blue-500" }
      };
      return d[t.color] || d.primary;
    }), u = i(() => {
      const d = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return d[t.color] || d.primary;
    }), m = i(() => t.disabled ? s.value ? "border-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : s.value ? f.value.selected : f.value.unselected);
    return (d, z) => (r(), a("label", {
      class: g([
        "inline-flex items-start gap-3 cursor-pointer select-none group",
        e.disabled ? "opacity-50 cursor-not-allowed" : "",
        e.labelPosition === "left" ? "flex-row-reverse" : "",
        e.margin
      ]),
      onClick: z[0] || (z[0] = ee((x) => !e.disabled && b(), ["prevent"]))
    }, [
      c("div", {
        class: g([
          "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
          y.value,
          m.value
        ])
      }, [
        K(xe, { name: "scale" }, {
          default: te(() => [
            s.value ? (r(), a("div", {
              key: 0,
              class: g([
                "rounded-full transition-all duration-200",
                k.value,
                u.value
              ])
            }, null, 2)) : v("", !0)
          ]),
          _: 1
        })
      ], 2),
      e.label || e.description || d.$slots.default ? (r(), a("div", Vl, [
        e.label || d.$slots.default ? (r(), a("span", {
          key: 0,
          class: g([
            "ui-text-primary leading-tight transition-colors",
            I.value,
            e.disabled ? "" : "group-hover:text-primary"
          ])
        }, [
          D(d.$slots, "default", {}, () => [
            me(T(e.label), 1)
          ], !0),
          e.required ? (r(), a("span", Tl, "*")) : v("", !0)
        ], 2)) : v("", !0),
        e.description ? (r(), a("span", {
          key: 1,
          class: g([
            "ui-text-secondary mt-0.5",
            p.value
          ])
        }, T(e.description), 3)) : v("", !0)
      ])) : v("", !0)
    ], 2));
  }
}, Ll = /* @__PURE__ */ fe(Ml, [["__scopeId", "data-v-d7324604"]]), Al = {
  key: 0,
  class: "flex items-center justify-between w-full h-full px-1"
}, Pl = {
  key: 0,
  class: "flex flex-col"
}, Dl = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, El = {
  key: 0,
  class: "mt-1.5 text-sm text-red-500 flex items-center gap-1"
}, Ol = {
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
      const x = o.value ? t.falseValue : t.trueValue;
      l("update:modelValue", x), l("change", x);
    }, b = i(() => {
      if (t.inset) {
        const B = {
          xs: "w-8 h-4",
          sm: "w-10 h-5",
          md: "w-12 h-6",
          lg: "w-14 h-7",
          xl: "w-16 h-8"
        };
        return B[t.size] || B.md;
      }
      const x = {
        xs: "w-7 h-4",
        sm: "w-9 h-5",
        md: "w-11 h-6",
        lg: "w-13 h-7",
        xl: "w-15 h-8"
      };
      return x[t.size] || x.md;
    }), y = i(() => {
      const x = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return x[t.size] || x.md;
    }), k = i(() => {
      const x = {
        xs: o.value ? "translate-x-3.5" : "translate-x-0.5",
        sm: o.value ? "translate-x-4.5" : "translate-x-0.5",
        md: o.value ? "translate-x-5.5" : "translate-x-0.5",
        lg: o.value ? "translate-x-6.5" : "translate-x-0.5",
        xl: o.value ? "translate-x-7.5" : "translate-x-0.5"
      }, B = {
        xs: "top-0.5",
        sm: "top-0.5",
        md: "top-0.5",
        lg: "top-0.5",
        xl: "top-0.5"
      };
      return `${x[t.size] || x.md} ${B[t.size] || B.md}`;
    }), I = i(() => {
      const x = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4"
      };
      return x[t.size] || x.md;
    }), p = i(() => {
      const x = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4"
      };
      return x[t.size] || x.md;
    }), f = i(() => {
      const x = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return x[t.size] || x.md;
    }), u = i(() => {
      const x = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return x[t.size] || x.md;
    }), m = i(() => {
      const x = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return x[t.color] || x.primary;
    }), d = i(() => {
      const x = {
        primary: "text-primary",
        success: "text-green-500",
        warning: "text-yellow-500",
        danger: "text-red-500",
        info: "text-blue-500"
      };
      return x[t.color] || x.primary;
    }), z = i(() => t.error ? o.value ? "bg-red-500" : "bg-red-200 dark:bg-red-900/30" : t.disabled || t.loading ? o.value ? "bg-gray-400 dark:bg-gray-600" : "bg-gray-200 dark:bg-gray-700" : o.value ? m.value : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600");
    return (x, B) => (r(), a("div", {
      class: g(["relative", e.margin])
    }, [
      c("label", {
        class: g([
          "inline-flex items-center gap-3 cursor-pointer select-none group",
          e.disabled || e.loading ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : "",
          e.reverse ? "justify-between w-full" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        c("div", {
          class: g([
            "relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out rounded-full",
            b.value,
            z.value,
            !e.disabled && !e.loading ? "cursor-pointer" : "cursor-not-allowed"
          ])
        }, [
          c("span", {
            class: g([
              "absolute inline-flex items-center justify-center bg-white rounded-full shadow-md transition-all duration-200 ease-in-out",
              y.value,
              k.value
            ])
          }, [
            e.loading ? (r(), a("svg", {
              key: 0,
              class: g(["animate-spin text-gray-400", I.value]),
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [...B[0] || (B[0] = [
              c("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              c("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])], 2)) : v("", !0),
            K(xe, { name: "fade" }, {
              default: te(() => [
                o.value && !e.loading && e.showIcons ? (r(), a("svg", {
                  key: 0,
                  class: g([I.value, d.value]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...B[1] || (B[1] = [
                  c("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "3",
                    d: "M5 13l4 4L19 7"
                  }, null, -1)
                ])], 2)) : v("", !0)
              ]),
              _: 1
            }),
            K(xe, { name: "fade" }, {
              default: te(() => [
                !o.value && !e.loading && e.showIcons ? (r(), a("svg", {
                  key: 0,
                  class: g([I.value, "text-gray-400"]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...B[2] || (B[2] = [
                  c("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "3",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ])], 2)) : v("", !0)
              ]),
              _: 1
            })
          ], 2),
          e.inset ? (r(), a("span", Al, [
            c("span", {
              class: g(["transition-opacity duration-200", o.value ? "opacity-100" : "opacity-0"])
            }, [
              (r(), a("svg", {
                class: g([p.value, "text-white"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...B[3] || (B[3] = [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])], 2))
            ], 2),
            c("span", {
              class: g(["transition-opacity duration-200", o.value ? "opacity-0" : "opacity-100"])
            }, [
              (r(), a("svg", {
                class: g([p.value, "text-gray-400"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...B[4] || (B[4] = [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M6 18L18 6M6 6l12 12"
                }, null, -1)
              ])], 2))
            ], 2)
          ])) : v("", !0)
        ], 2),
        e.label || e.description || x.$slots.default ? (r(), a("div", Pl, [
          e.label || x.$slots.default ? (r(), a("span", {
            key: 0,
            class: g([
              "ui-text-primary leading-tight transition-colors",
              f.value,
              !e.disabled && !e.loading ? "group-hover:text-primary" : ""
            ])
          }, [
            D(x.$slots, "default", {}, () => [
              me(T(e.label), 1)
            ], !0),
            e.required ? (r(), a("span", Dl, "*")) : v("", !0)
          ], 2)) : v("", !0),
          e.description ? (r(), a("span", {
            key: 1,
            class: g([
              "ui-text-secondary mt-0.5",
              u.value
            ])
          }, T(e.description), 3)) : v("", !0)
        ])) : v("", !0)
      ], 2),
      e.error ? (r(), a("p", El, [
        B[5] || (B[5] = c("svg", {
          class: "w-4 h-4 flex-shrink-0",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          c("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        me(" " + T(typeof e.error == "string" ? e.error : ""), 1)
      ])) : v("", !0),
      e.hint && !e.error ? (r(), a("p", Ol, T(e.hint), 1)) : v("", !0)
    ], 2));
  }
}, Nl = /* @__PURE__ */ fe(jl, [["__scopeId", "data-v-cc32aa31"]]), Rl = ["src", "alt"], Hl = { key: 0 }, Ul = {
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
    const t = e, l = n, o = L(!1), s = i(() => {
      const $ = {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl"
      };
      return $[t.size] || $.md;
    }), b = i(() => {
      const $ = {
        xs: "text-[10px]",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl"
      };
      return $[t.size] || $.md;
    }), y = {
      xs: 14,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 30,
      "2xl": 36
    }, k = i(() => {
      const $ = {
        default: "bg-color-3 text-ui-text-color",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        error: "bg-error text-white",
        warning: "bg-warning text-white",
        info: "bg-info text-white",
        gradient: "bg-gradient-to-br from-primary to-secondary text-white"
      };
      return $[t.variant] || $.default;
    }), I = i(() => {
      const $ = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        square: "rounded-none"
      };
      return $[t.rounded] || $.full;
    }), p = i(() => {
      if (!t.bordered) return "";
      const $ = {
        primary: "ring-primary",
        secondary: "ring-secondary",
        success: "ring-success",
        error: "ring-error",
        warning: "ring-warning",
        info: "ring-info",
        default: "ring-color-4"
      };
      return $[t.borderColor] || $.primary;
    }), f = i(() => {
      const $ = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4",
        "2xl": "w-5 h-5"
      };
      if (t.badge) {
        const U = {
          xs: "w-4 h-4 min-w-[16px]",
          sm: "w-5 h-5 min-w-[20px]",
          md: "w-6 h-6 min-w-[24px]",
          lg: "w-7 h-7 min-w-[28px]",
          xl: "w-8 h-8 min-w-[32px]",
          "2xl": "w-9 h-9 min-w-[36px]"
        };
        return U[t.size] || U.md;
      }
      return $[t.size] || $.md;
    }), u = i(() => {
      const $ = {
        "top-left": "-top-0.5 -left-0.5",
        "top-right": "-top-0.5 -right-0.5",
        "bottom-left": "-bottom-0.5 -left-0.5",
        "bottom-right": "-bottom-0.5 -right-0.5"
      };
      return $[t.dotPosition] || $["bottom-right"];
    }), m = i(() => {
      const $ = {
        success: "bg-success",
        error: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
        primary: "bg-primary",
        secondary: "bg-secondary"
      };
      return $[t.dotColor] || $.success;
    }), d = i(() => ({
      border: "2px solid var(--bg-color)"
    })), z = i(() => {
      if (t.initials) return t.initials.slice(0, 2);
      if (t.name) {
        const $ = t.name.trim().split(" ");
        return $.length >= 2 ? ($[0][0] + $[$.length - 1][0]).toUpperCase() : $[0].slice(0, 2).toUpperCase();
      }
      return "";
    }), x = ($) => {
      o.value = !0, l("image-error", $);
    }, B = ($) => {
      t.clickable && l("click", $);
    };
    return ($, U) => {
      const j = ve("Icon");
      return r(), a("div", {
        class: g([
          "inline-flex items-center justify-center flex-shrink-0 relative",
          "font-medium select-none overflow-hidden",
          s.value,
          k.value,
          I.value,
          e.bordered && "ring-2 ring-offset-2",
          p.value,
          e.clickable && "cursor-pointer hover:opacity-80 transition-opacity",
          e.containerClass
        ]),
        style: ce(e.containerStyle),
        onClick: B
      }, [
        e.src && !o.value ? (r(), a("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          class: g(["w-full h-full object-cover", e.imageClass]),
          onError: x
        }, null, 42, Rl)) : e.icon ? (r(), Z(j, {
          key: 1,
          name: e.icon,
          size: y[t.size],
          color: "text-current"
        }, null, 8, ["name", "size"])) : e.initials || e.name ? (r(), a("span", {
          key: 2,
          class: g(["uppercase font-semibold", b.value])
        }, T(z.value), 3)) : (r(), Z(j, {
          key: 3,
          name: "user",
          size: y[t.size],
          color: "text-current"
        }, null, 8, ["size"])),
        e.dot || e.badge ? (r(), a("span", {
          key: 4,
          class: g([
            "absolute rounded-full",
            u.value,
            f.value,
            m.value,
            e.badge && "flex items-center justify-center text-xs font-bold text-white"
          ]),
          style: ce(d.value)
        }, [
          e.badge ? (r(), a("span", Hl, T(e.badge), 1)) : v("", !0)
        ], 6)) : v("", !0),
        D($.$slots, "default", {}, void 0, !0)
      ], 6);
    };
  }
}, Pt = /* @__PURE__ */ fe(Ul, [["__scopeId", "data-v-a1aef5d2"]]), Fl = ["dir"], ql = {
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
    rtl: { type: Boolean, default: Le.value },
    dense: Boolean,
    collapseOnScroll: Boolean
  },
  setup(e) {
    const n = e, t = ge("layout", null), l = L(null), o = L(0);
    function s() {
      l.value && (o.value = l.value.getBoundingClientRect().height, t && t.register("appBar", n.id, {
        height: o.value,
        dense: n.dense
      }));
    }
    Ve(() => {
      s();
      const M = new ResizeObserver(s);
      l.value && M.observe(l.value), n.collapseOnScroll && window.addEventListener("scroll", k, { passive: !0 }), ze(() => {
        M.disconnect(), n.collapseOnScroll && window.removeEventListener("scroll", k), t && t.unregister("appBar", n.id);
      });
    });
    let b = 0;
    const y = L("");
    function k() {
      const M = window.scrollY, G = M - b;
      b = M, M > 0 && G > 0 ? y.value = "-translate-y-12 opacity-95" : y.value = "";
    }
    const I = i(() => n.rtl ? ["actions", "nav", "prepend"] : ["prepend", "nav", "actions"]), p = i(() => n.rtl ? "flex-row-reverse" : "flex-row"), f = i(() => n.rtl ? "mr-2" : ""), u = i(() => n.rtl ? "mr-2" : "ml-2"), m = i(() => {
      const M = n.titleAlign;
      return n.rtl ? {
        center: "justify-center text-center w-full",
        left: "justify-end text-right w-full",
        right: ""
      }[M] : {
        center: "justify-center text-center w-full",
        right: "justify-end text-right w-full",
        left: ""
      }[M];
    }), d = i(
      () => n.rtl ? "hidden md:flex md:mr-6 md:space-x-4 items-center" : "hidden md:flex md:ml-6 md:space-x-4 items-center"
    ), z = i(() => n.rtl ? "space-x-2 space-x-reverse" : "space-x-2"), x = i(() => n.rtl ? "left-0" : "right-0"), B = L(!1), $ = () => B.value = !B.value, U = i(() => n.shadow ? n.shadow : n.elevation ? `shadow-${n.elevation}` : ""), j = i(() => typeof n.zIndex == "string" && n.zIndex.startsWith("z-") ? n.zIndex : "z-30"), A = i(() => typeof n.zIndex == "number" ? { zIndex: n.zIndex } : void 0), Y = i(() => n.dense ? "py-1" : ""), X = L(!1);
    return (M, G) => {
      const re = ve("Icon");
      return r(), a("header", {
        ref_key: "el",
        ref: l,
        "data-component": "appbar",
        dir: e.rtl ? "rtl" : "ltr",
        class: g([
          "w-full flex flex-col transition-transform duration-300 bg-color-1",
          j.value,
          e.fixed ? "fixed top-0 left-0" : e.floating ? "absolute top-0 left-1/2 -translate-x-1/2 rounded-xl shadow-lg" : "relative",
          U.value,
          e.hidden ? "hidden" : "",
          e.color,
          e.bd,
          e.p,
          e.m,
          e.customClass,
          Y.value,
          y.value
        ]),
        style: ce([e.customStyle, A.value])
      }, [
        c("div", {
          class: g(["w-full flex items-center justify-between", p.value, e.dense ? "h-12" : "h-16"])
        }, [
          (r(!0), a(oe, null, ue(I.value, (E) => (r(), a(oe, { key: E }, [
            E === "prepend" ? (r(), a("div", {
              key: 0,
              class: g(["flex items-center", f.value])
            }, [
              D(M.$slots, "prepend"),
              e.drawer || e.menu ? (r(), a("button", {
                key: 0,
                onClick: G[0] || (G[0] = (N) => M.$emit("toggle-drawer")),
                class: "inline-flex items-center justify-center .vts-pa-2 rounded-md"
              }, [
                D(M.$slots, "drawer-icon", {}, () => [
                  K(re, {
                    name: "bars-3",
                    size: "24",
                    color: "text-gray-600"
                  })
                ])
              ])) : v("", !0),
              c("div", {
                class: g(["flex-shrink-0 flex items-center", u.value, m.value])
              }, [
                D(M.$slots, "title", {}, () => [
                  c("span", {
                    class: g(["font-semibold", e.titleClass])
                  }, T(e.title), 3)
                ])
              ], 2)
            ], 2)) : v("", !0),
            E === "nav" ? (r(), a("nav", {
              key: 1,
              class: g(d.value)
            }, [
              D(M.$slots, "nav")
            ], 2)) : v("", !0),
            E === "actions" ? (r(), a("div", {
              key: 2,
              class: g(["flex items-center", z.value])
            }, [
              D(M.$slots, "actions"),
              e.overflowActions.length ? (r(), a("div", ql, [
                c("button", {
                  onClick: $,
                  class: "p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                }, [
                  K(re, {
                    name: "ellipsis-vertical",
                    size: "20"
                  })
                ]),
                B.value ? (r(), a("div", {
                  key: 0,
                  class: g(["absolute vts-mt-2 w-40 rounded shadow-lg z-50 bg-color-1", x.value])
                }, [
                  c("ul", null, [
                    (r(!0), a(oe, null, ue(e.overflowActions, (N, J) => (r(), a("li", { key: J }, [
                      c("button", {
                        onClick: N.onClick,
                        class: "w-full flex gap-2 text-left px-4 py-2 hover:bg-color-2"
                      }, [
                        N.icon ? (r(), a("span", Kl, [
                          K(re, {
                            name: N.icon
                          }, null, 8, ["name"])
                        ])) : v("", !0),
                        me(" " + T(N.label), 1)
                      ], 8, Wl)
                    ]))), 128))
                  ])
                ], 2)) : v("", !0)
              ])) : v("", !0),
              D(M.$slots, "append")
            ], 2)) : v("", !0)
          ], 64))), 128))
        ], 2),
        Ie(c("div", Gl, [
          c("div", Yl, [
            D(M.$slots, "mobile-nav")
          ])
        ], 512), [
          [Oe, X.value]
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
        const x = {
          xs: "w-[18px] h-[18px] text-[10px] p-0",
          sm: "w-[20px] h-[20px] text-[10px] p-0",
          md: "w-[24px] h-[24px] text-xs p-0",
          lg: "w-[28px] h-[28px] text-sm p-0",
          xl: "w-[32px] h-[32px] text-base p-0"
        };
        return x[t.size] || x.md;
      }
      const z = {
        xs: "px-1.5 py-0.5 text-[10px] gap-0.5",
        sm: "px-2 py-0.5 text-xs gap-1",
        md: "px-2.5 py-1 text-sm gap-1",
        lg: "px-3 py-1.5 text-base gap-1.5",
        xl: "px-4 py-2 text-lg gap-2"
      };
      return z[t.size] || z.md;
    }), s = i(() => {
      const z = {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 20
      };
      return z[t.size] || z.md;
    }), b = i(() => {
      const z = {
        xs: "w-1 h-1",
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
        xl: "w-3 h-3"
      };
      return z[t.size] || z.md;
    }), y = i(() => {
      const z = {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5",
        md: "w-4 h-4",
        lg: "w-5 h-5",
        xl: "w-6 h-6"
      };
      return z[t.size] || z.md;
    }), k = i(() => {
      const z = {
        default: "bg-color-3 text-ui-text-color",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        error: "bg-error text-white",
        warning: "bg-warning text-white",
        info: "bg-info text-white",
        outline: "bg-transparent text-ui-text-color border border-color"
      };
      return z[t.variant] || z.default;
    }), I = i(() => {
      const z = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        pill: "rounded-full"
      };
      return z[t.rounded] || z.md;
    }), p = i(() => {
      if (!t.bordered) return "";
      const z = {
        default: "ring-color-4",
        primary: "ring-primary",
        secondary: "ring-secondary",
        success: "ring-success",
        error: "ring-error",
        warning: "ring-warning",
        info: "ring-info",
        outline: "ring-color"
      };
      return z[t.variant] || z.default;
    }), f = i(() => t.dotColor && {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      error: "bg-error",
      warning: "bg-warning",
      info: "bg-info"
    }[t.dotColor] || "bg-current"), u = i(() => t.uppercase ? "uppercase" : ""), m = (z) => {
      t.clickable && l("click", z);
    }, d = (z) => {
      l("close", z);
    };
    return (z, x) => {
      const B = ve("Icon");
      return r(), a("span", {
        class: g([
          "inline-flex items-center justify-center font-medium transition-all",
          o.value,
          k.value,
          I.value,
          e.bordered && "ring-1 ring-offset-1",
          p.value,
          e.clickable && "cursor-pointer hover:opacity-80",
          e.dot && "pl-1.5",
          e.containerClass
        ]),
        style: ce(e.containerStyle),
        onClick: m
      }, [
        e.dot ? (r(), a("span", {
          key: 0,
          class: g([
            "rounded-full mr-1.5",
            b.value,
            f.value
          ])
        }, null, 2)) : v("", !0),
        e.icon && e.iconPosition === "left" ? (r(), Z(B, {
          key: 1,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: g(["flex-shrink-0", e.content && "mr-1"])
        }, null, 8, ["name", "type", "size", "class"])) : v("", !0),
        e.content || z.$slots.default ? (r(), a("span", {
          key: 2,
          class: g(u.value)
        }, [
          D(z.$slots, "default", {}, () => [
            me(T(e.content), 1)
          ], !0)
        ], 2)) : v("", !0),
        e.icon && e.iconPosition === "right" ? (r(), Z(B, {
          key: 3,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: g(["flex-shrink-0", e.content && "ml-1"])
        }, null, 8, ["name", "type", "size", "class"])) : v("", !0),
        e.closeable ? (r(), a("button", {
          key: 4,
          type: "button",
          onClick: ee(d, ["stop"]),
          class: g([
            "ml-1 flex-shrink-0 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
            y.value
          ]),
          "aria-label": "Remove badge"
        }, [
          K(B, {
            name: "x-mark",
            type: e.iconType,
            size: s.value
          }, null, 8, ["type", "size"])
        ], 2)) : v("", !0)
      ], 6);
    };
  }
}, Ql = /* @__PURE__ */ fe(Jl, [["__scopeId", "data-v-6732e204"]]), Zl = {
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
    rounded: { type: String, default: () => he("Banner", "rounded") },
    // none | sm | md | lg
    elevation: { type: Boolean, default: !0 },
    outlined: { type: Boolean, default: !1 },
    dense: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "close", "dismiss"],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = L(l.modelValue), b = L(100);
    let y = null, k = null;
    pe(() => l.modelValue, (j) => {
      s.value = j, j && l.timeout && $();
    });
    const I = i(() => l.icon), p = i(() => {
      const j = [
        "w-full relative overflow-hidden",
        l.sticky ? "sticky z-50" : "relative"
      ];
      l.sticky && j.push(l.position === "bottom" ? "bottom-0" : "top-0");
      const A = {
        default: "bg-background border-border text-foreground",
        info: "bg-blue-50 border-blue-200 text-blue-900",
        success: "bg-green-50 border-green-200 text-green-900",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
        error: "bg-red-50 border-red-200 text-red-900"
      };
      return j.push(A[l.variant]), l.outlined ? j.push("border-t-4") : j.push("border-t"), l.elevation && j.push("shadow-md"), j.push(we[l.rounded]), j;
    }), f = i(() => [
      "flex items-start gap-3",
      l.dense ? "p-3" : "p-4"
    ]), u = i(() => [
      "font-semibold",
      l.dense ? "text-sm" : "text-base"
    ]), m = i(() => [
      l.dense ? "text-xs" : "text-sm",
      "mt-1"
    ]), d = i(() => [
      "flex-shrink-0 rounded-md p-1.5",
      "hover:bg-black/5 dark:hover:bg-white/10",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "transition-colors"
    ]), z = i(() => [
      "absolute bottom-0 left-0 h-1 transition-all duration-100",
      {
        default: "bg-gray-400",
        info: "bg-blue-400",
        success: "bg-green-400",
        warning: "bg-yellow-400",
        error: "bg-red-400"
      }[l.variant]
    ]), x = i(() => ({
      width: `${b.value}%`
    })), B = () => {
      s.value = !1, o("update:modelValue", !1), o("close"), U();
    }, $ = () => {
      if (!l.timeout) return;
      U();
      const j = Date.now(), A = l.timeout;
      l.showProgress && (k = setInterval(() => {
        const Y = Date.now() - j;
        b.value = Math.max(0, 100 - Y / A * 100);
      }, 10)), y = setTimeout(() => {
        B(), o("dismiss");
      }, l.timeout);
    }, U = () => {
      y && (clearTimeout(y), y = null), k && (clearInterval(k), k = null), b.value = 100;
    };
    return Ve(() => {
      s.value && l.timeout && $();
    }), ze(() => {
      U();
    }), n({ close: B }), (j, A) => (r(), Z(xe, {
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
          class: g(p.value),
          role: "alert"
        }, [
          c("div", {
            class: g(f.value)
          }, [
            j.$slots.prepend || I.value ? (r(), a("div", Zl, [
              D(j.$slots, "prepend", {}, () => [
                I.value === "info" ? (r(), a("svg", _l, [...A[0] || (A[0] = [
                  c("path", {
                    "fill-rule": "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : I.value === "success" ? (r(), a("svg", en, [...A[1] || (A[1] = [
                  c("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : I.value === "warning" ? (r(), a("svg", tn, [...A[2] || (A[2] = [
                  c("path", {
                    "fill-rule": "evenodd",
                    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : I.value === "error" ? (r(), a("svg", ln, [...A[3] || (A[3] = [
                  c("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : v("", !0)
              ], !0)
            ])) : v("", !0),
            c("div", nn, [
              e.title || j.$slots.title ? (r(), a("div", {
                key: 0,
                class: g(u.value)
              }, [
                D(j.$slots, "title", {}, () => [
                  me(T(e.title), 1)
                ], !0)
              ], 2)) : v("", !0),
              e.message || j.$slots.default ? (r(), a("div", {
                key: 1,
                class: g(m.value)
              }, [
                D(j.$slots, "default", {}, () => [
                  me(T(e.message), 1)
                ], !0)
              ], 2)) : v("", !0)
            ]),
            j.$slots.actions || e.closeable ? (r(), a("div", rn, [
              D(j.$slots, "actions", {}, void 0, !0),
              e.closeable ? (r(), a("button", {
                key: 0,
                onClick: B,
                class: g(d.value),
                "aria-label": "Close banner"
              }, [...A[4] || (A[4] = [
                c("svg", {
                  class: "h-4 w-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  c("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])], 2)) : v("", !0)
            ])) : v("", !0)
          ], 2),
          e.timeout && e.showProgress ? (r(), a("div", {
            key: 0,
            class: g(z.value),
            style: ce(x.value)
          }, null, 6)) : v("", !0)
        ], 2)) : v("", !0)
      ]),
      _: 3
    }));
  }
}, on = /* @__PURE__ */ fe(an, [["__scopeId", "data-v-3396a451"]]), sn = ["aria-label"], un = {
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
      const p = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return p[t.size] || p.md;
    }), s = i(() => {
      const p = {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3"
      };
      return p[t.size] || p.md;
    }), b = i(() => {
      const p = {
        default: "text-ui-text-secondary hover:underline",
        muted: "text-ui-text-secondary/70 hover:text-ui-text-secondary hover:underline",
        bold: "text-ui-text-color font-medium hover:underline"
      };
      return p[t.variant] || p.default;
    }), y = i(() => {
      const p = {
        default: "text-ui-text-color font-medium",
        muted: "text-ui-text-secondary",
        bold: "text-ui-text-color font-semibold"
      };
      return p[t.variant] || p.default;
    }), k = i(() => "text-ui-text-secondary/50"), I = (p, f) => {
      p.disabled || (l("item-click", { item: p, index: f }), l("click", { item: p, index: f }));
    };
    return (p, f) => {
      const u = ve("Icon");
      return r(), a("nav", {
        "aria-label": e.ariaLabel,
        class: g([
          "flex items-center",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        c("ol", {
          class: g([
            "flex items-center flex-wrap",
            o.value,
            s.value
          ])
        }, [
          e.showHome ? (r(), a("li", un, [
            c("a", {
              href: e.homeHref,
              onClick: f[0] || (f[0] = ee((m) => I({ label: "Home", href: e.homeHref, icon: e.homeIcon }, 0), ["prevent"])),
              class: g([
                "inline-flex items-center transition-colors",
                b.value,
                "hover:text-primary"
              ])
            }, [
              K(u, {
                name: e.homeIcon,
                size: 16,
                color: "text-current"
              }, null, 8, ["name"])
            ], 10, dn),
            c("span", {
              class: g(["mx-2", k.value])
            }, [
              e.separatorIcon ? (r(), Z(u, {
                key: 0,
                name: e.separatorIcon,
                size: 12,
                color: "text-current"
              }, null, 8, ["name"])) : (r(), a("span", cn, T(e.separator), 1))
            ], 2)
          ])) : v("", !0),
          (r(!0), a(oe, null, ue(e.items, (m, d) => (r(), a("li", {
            key: d,
            class: "flex items-center"
          }, [
            D(p.$slots, "item", {
              item: m,
              index: d,
              isLast: d === e.items.length - 1
            }, () => [
              d !== e.items.length - 1 && !m.disabled ? (r(), a("a", {
                key: 0,
                href: m.href || "#",
                onClick: ee((z) => I(m, d), ["prevent"]),
                class: g([
                  "inline-flex items-center gap-2 transition-colors",
                  b.value,
                  "hover:text-primary",
                  m.class
                ])
              }, [
                m.icon ? (r(), Z(u, {
                  key: 0,
                  name: m.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : v("", !0),
                c("span", null, T(m.label), 1)
              ], 10, fn)) : (r(), a("span", {
                key: 1,
                class: g([
                  "inline-flex items-center gap-2",
                  y.value,
                  m.disabled && "opacity-50 cursor-not-allowed",
                  m.class
                ]),
                "aria-current": d === e.items.length - 1 ? "page" : void 0
              }, [
                m.icon ? (r(), Z(u, {
                  key: 0,
                  name: m.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : v("", !0),
                c("span", {
                  class: g(e.truncate && "truncate max-w-[200px]")
                }, T(m.label), 3)
              ], 10, gn))
            ], !0),
            d !== e.items.length - 1 ? (r(), a("span", {
              key: 0,
              class: g(["mx-2", k.value]),
              "aria-hidden": "true"
            }, [
              D(p.$slots, "separator", {}, () => [
                e.separatorIcon ? (r(), Z(u, {
                  key: 0,
                  name: e.separatorIcon,
                  size: 12,
                  color: "text-current"
                }, null, 8, ["name"])) : (r(), a("span", mn, T(e.separator), 1))
              ], !0)
            ], 2)) : v("", !0)
          ]))), 128))
        ], 2)
      ], 14, sn);
    };
  }
}, vn = /* @__PURE__ */ fe(pn, [["__scopeId", "data-v-cf675483"]]), yn = ["dir"], bn = {
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
    rounded: { type: String, default: () => he("Card", "rounded") },
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
    const { language: n } = ge("i18n", { language: L("en"), t: (k) => k, setLanguage: () => {
    } }), t = e, l = i(() => {
      let k = "";
      return t.dir == "rtl" || t.lang == "dv" ? k = "rtl" : t.dir == "ltr" || t.lang == "en" ? k = "ltr" : k = "", k;
    }), o = i(() => {
      let k = "";
      return t.lang != "" ? k = t.lang : t.dir == "rtl" ? k = "dv" : t.dir == "ltr" ? k = "en" : k = n.value, console.log("selectLanguage in Card222:", k), k === "dv" ? "dv" : "en";
    });
    Ke("parentDir", l.value), Ke("parentLang", o.value);
    const s = i(() => ({
      id: t.id,
      dir: l.value,
      lang: o.value
    })), b = i(() => o.value == "dv" ? "faruma" : ""), y = i(() => Ge(t.labels, o.value, ""));
    return (k, I) => (r(), a("div", {
      dir: l.value !== "" ? l.value : "",
      class: g([b.value, e.margin, e.border, F(we)[e.rounded], e.shadow, e.cardClass, e.width, e.bg, "relative"])
    }, [
      k.$slots.header || e.title || e.labels && (e.labels.en.title !== "" || e.labels.dv.title !== "") ? (r(), a("div", bn, [
        D(k.$slots, "header", {}, () => [
          c("div", {
            class: g([e.headerClass, e.headerBg, e.headerPadding, F(Qt)[e.rounded], e.headerBd, e.headerText, "overflow-hidden"])
          }, [
            c("h3", {
              class: g([e.titleClass, e.headerTextSize])
            }, T(y.value.title ? y.value.title : t.title), 3)
          ], 2)
        ])
      ])) : v("", !0),
      c("div", {
        class: g([e.bodyClass, e.padding, e.textColor, e.textSize])
      }, [
        D(k.$slots, "default", { attrs: s.value }, () => [
          me(T(y.value.body ? y.value.body : ""), 1)
        ])
      ], 2),
      k.$slots.footer ? (r(), a("div", {
        key: 1,
        class: g([e.footerClass, e.footerBg, e.footerText, e.footerTextSize, e.footerBd, e.footerMargin, e.footerPadding, F(Zt)[e.rounded]])
      }, [
        D(k.$slots, "footer", {}, () => [
          me(T(y.value.footer ? y.value.footer : ""), 1)
        ])
      ], 2)) : v("", !0)
    ], 10, yn));
  }
}, Re = L(null);
function xn() {
  function e(l) {
    const o = typeof l == "string" ? { message: l } : l;
    return new Promise((s) => {
      Re.value = { options: o, resolve: s };
    });
  }
  function n() {
    Re.value?.resolve(!0), Re.value = null;
  }
  function t() {
    Re.value?.resolve(!1), Re.value = null;
  }
  return { pending: Re, confirm: e, accept: n, dismiss: t };
}
const wn = { class: "px-3 pt-6 pb-2 flex flex-col items-center text-center gap-3" }, kn = {
  key: 0,
  class: "text-base font-semibold leading-snug"
}, Sn = { class: "text-sm ui-text-secondary leading-relaxed" }, Cn = { class: "flex justify-end gap-2 px-3 py-4" }, $n = /* @__PURE__ */ Te({
  __name: "ConfirmDialog",
  setup(e) {
    const { pending: n, accept: t, dismiss: l } = xn(), o = i(() => !!n.value), s = i(() => n.value?.options.variant ?? "danger"), b = i(() => ({
      danger: "trash",
      warning: "exclamation-triangle",
      info: "information-circle"
    })[s.value] ?? "trash"), y = i(() => ({
      danger: "text-red-500",
      warning: "text-yellow-500",
      info: "text-blue-500"
    })[s.value] ?? "text-red-500"), k = i(() => {
      const p = {
        danger: "bg-red-100 dark:bg-red-900/30",
        warning: "bg-yellow-100 dark:bg-yellow-900/30",
        info: "bg-blue-100 dark:bg-blue-900/30"
      };
      return p[s.value] ?? p.danger;
    }), I = i(() => ({ danger: "danger", warning: "warning", info: "primary" })[s.value] ?? "danger");
    return (p, f) => {
      const u = ve("Icon"), m = ve("Button"), d = ve("Overlay");
      return r(), Z(d, {
        "model-value": o.value,
        persistent: !1,
        width: "md:w-[420px] w-[90vw]",
        "z-index": "z-[200]",
        "onUpdate:modelValue": F(l)
      }, {
        footer: te(() => [
          c("div", Cn, [
            K(m, {
              label: F(n)?.options.cancelLabel ?? "Cancel",
              variant: "outlined",
              color: "gray",
              "prepend-icon": "x-mark",
              size: "sm",
              onClick: F(l)
            }, null, 8, ["label", "onClick"]),
            K(m, {
              label: F(n)?.options.confirmLabel ?? "Confirm",
              color: I.value,
              "prepend-icon": "check",
              size: "sm",
              onClick: F(t)
            }, null, 8, ["label", "color", "onClick"])
          ])
        ]),
        default: te(() => [
          c("div", wn, [
            c("div", {
              class: g(["flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0", k.value])
            }, [
              K(u, {
                name: b.value,
                size: 28,
                color: y.value
              }, null, 8, ["name", "color"])
            ], 2),
            F(n)?.options.title ? (r(), a("h3", kn, T(F(n).options.title), 1)) : v("", !0),
            c("p", Sn, T(F(n)?.options.message), 1)
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
        const f = {
          none: "",
          xs: "mx-1",
          sm: "mx-2",
          md: "mx-4",
          lg: "mx-6",
          xl: "mx-8"
        };
        return f[n.spacing] || f.md;
      } else {
        const f = {
          none: "",
          xs: "my-1",
          sm: "my-2",
          md: "my-4",
          lg: "my-6",
          xl: "my-8"
        };
        return f[n.spacing] || f.md;
      }
    }), b = i(() => `${n.inset ? n.orientation === "vertical" ? "my-4" : "mx-4" : ""}`), y = i(() => {
      if (n.orientation === "vertical") {
        const f = {
          thin: "w-px",
          medium: "w-0.5",
          thick: "w-1"
        };
        return f[n.thickness] || f.thin;
      } else {
        const f = {
          thin: "h-px",
          medium: "h-0.5",
          thick: "h-1"
        };
        return f[n.thickness] || f.thin;
      }
    }), k = i(() => {
      const f = {
        default: "bg-color-3 border-color-3",
        dashed: "border-color-3 border-dashed",
        dotted: "border-color-3 border-dotted",
        thick: "bg-color-3 border-color-3",
        gradient: "bg-gradient-to-r from-transparent via-color-3 to-transparent"
      }, u = f[n.variant] || f.default;
      if (n.variant === "dashed" || n.variant === "dotted") {
        const m = n.orientation === "vertical" ? "border-l" : "border-t";
        return `${u} ${m}`;
      }
      return u;
    }), I = i(() => n.color ? n.variant === "dashed" || n.variant === "dotted" ? { borderColor: n.color } : { backgroundColor: n.color } : {}), p = i(() => {
      const f = n.orientation === "vertical" ? "py-2" : "px-4", u = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg"
      };
      return `${f} ${u[n.textSize] || u.sm} text-ui-text-secondary font-medium`;
    });
    return (f, u) => (r(), a("div", {
      class: g([
        "flex items-center",
        o.value,
        s.value,
        e.containerClass
      ]),
      style: ce(e.containerStyle),
      role: "separator",
      "aria-orientation": e.orientation
    }, [
      l.value && e.orientation === "horizontal" && e.position === "left" ? (r(), a("div", {
        key: 0,
        class: g(["flex-shrink-0", p.value])
      }, [
        D(f.$slots, "default", {}, () => [
          me(T(e.text), 1)
        ], !0)
      ], 2)) : v("", !0),
      c("div", {
        class: g([
          "flex-grow",
          b.value,
          y.value,
          k.value,
          e.orientation === "vertical" && "h-full"
        ]),
        style: ce(I.value)
      }, null, 6),
      l.value && e.orientation === "horizontal" && e.position === "center" ? (r(), a("div", {
        key: 1,
        class: g(["flex-shrink-0", p.value])
      }, [
        D(f.$slots, "default", {}, () => [
          me(T(e.text), 1)
        ], !0)
      ], 2)) : v("", !0),
      l.value && e.orientation === "horizontal" ? (r(), a("div", {
        key: 2,
        class: g([
          "flex-grow",
          b.value,
          y.value,
          k.value
        ]),
        style: ce(I.value)
      }, null, 6)) : v("", !0),
      l.value && e.orientation === "horizontal" && e.position === "right" ? (r(), a("div", {
        key: 3,
        class: g(["flex-shrink-0", p.value])
      }, [
        D(f.$slots, "default", {}, () => [
          me(T(e.text), 1)
        ], !0)
      ], 2)) : v("", !0)
    ], 14, zn));
  }
}, In = /* @__PURE__ */ fe(Bn, [["__scopeId", "data-v-3b94e81d"]]), Vn = ["onClick"], Tn = {
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
    rounded: { type: String, default: () => he("Dropdown", "rounded") },
    // none | sm | md | lg | xl
    dense: { type: Boolean, default: !1 },
    color: { type: String, default: () => he("Dropdown", "color") },
    variant: { type: String, default: "contained" },
    // contained | outlined | text | tonal | plain
    size: { type: String, default: () => he("Dropdown", "size") },
    // xs | sm | md | lg | xl
    icon: { type: String, default: "" }
  },
  emits: ["update:modelValue", "select", "opened", "closed"],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = L(l.modelValue), b = L(null), y = L(null), k = L({}), I = i(() => {
      const A = We[l.color] || We.gray;
      return A[l.variant] || A.contained;
    }), p = i(() => [
      "inline-flex items-center justify-center font-medium transition-all cursor-pointer select-none",
      l.icon ? "" : vt[l.size],
      we[l.rounded],
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      I.value,
      l.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    ]), f = i(() => [
      "fixed z-50 ui-bg-color",
      "border border-color shadow-lg",
      we[l.rounded],
      "p-1.5",
      "overflow-auto"
    ]), u = i(() => [
      "relative flex cursor-pointer select-none items-center",
      we[l.rounded],
      "px-2.5 py-1.5 text-sm outline-none transition-colors",
      "hover:bg-color-1 ui-text-color",
      "focus:bg-color-2",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    ]);
    pe(() => l.modelValue, (A) => {
      s.value = A, A && Ae(() => B());
    });
    const m = () => {
      l.disabled || (s.value = !s.value, o("update:modelValue", s.value), s.value ? (o("opened"), Ae(() => B())) : o("closed"));
    }, d = () => {
      l.disabled || s.value || (s.value = !0, o("update:modelValue", !0), o("opened"), Ae(() => B()));
    }, z = () => {
      s.value && (s.value = !1, o("update:modelValue", !1), o("closed"));
    }, x = (A) => {
      o("select", A), l.closeOnContentClick && z();
    }, B = () => {
      if (!b.value || !y.value) return;
      const A = b.value.getBoundingClientRect(), Y = y.value.getBoundingClientRect(), X = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      let M = A.bottom + l.offsetY, G = A.left + l.offsetX;
      const re = M + Y.height > X.height, E = G + Y.width > X.width;
      re && (M = A.top - Y.height - l.offsetY), l.align === "right" ? G = A.right - Y.width + l.offsetX : l.align === "center" && (G = A.left + A.width / 2 - Y.width / 2 + l.offsetX), E && (G = X.width - Y.width - 8), G < 8 && (G = 8);
      const N = l.width === "auto" ? `${Math.max(A.width, parseInt(l.minWidth))}px` : typeof l.width == "number" ? `${l.width}px` : l.width;
      k.value = {
        position: "fixed",
        top: `${M}px`,
        left: `${G}px`,
        width: N,
        minWidth: `${l.minWidth}px`,
        maxHeight: `${l.maxHeight}px`,
        zIndex: 50 + l.elevation
      };
    }, $ = (A) => {
      b.value && !b.value.contains(A.target) && y.value && !y.value.contains(A.target) && z();
    }, U = () => {
      l.openOnHover && d();
    }, j = () => {
      l.openOnHover && z();
    };
    return Ve(() => {
      document.addEventListener("click", $), window.addEventListener("scroll", B, !0), window.addEventListener("resize", B), l.openOnHover && b.value && (b.value.addEventListener("mouseenter", U), b.value.addEventListener("mouseleave", j));
    }), ze(() => {
      document.removeEventListener("click", $), window.removeEventListener("scroll", B, !0), window.removeEventListener("resize", B), l.openOnHover && b.value && (b.value.removeEventListener("mouseenter", U), b.value.removeEventListener("mouseleave", j));
    }), n({ open: d, close: z, toggle: m }), (A, Y) => (r(), a(oe, null, [
      c("div", {
        ref_key: "triggerRef",
        ref: b,
        onClick: m,
        class: "inline-block"
      }, [
        D(A.$slots, "trigger", {}, () => [
          c("button", {
            class: g(p.value)
          }, [
            D(A.$slots, "label", {}, () => [
              me(T(e.label), 1)
            ], !0),
            (r(), a("svg", {
              class: g(["ml-2 h-4 w-4 transition-transform", { "rotate-180": s.value }]),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...Y[0] || (Y[0] = [
              c("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              }, null, -1)
            ])], 2))
          ], 2)
        ], !0)
      ], 512),
      (r(), Z(Xe, { to: "body" }, [
        K(xe, {
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
              ref: y,
              style: ce(k.value),
              class: g(f.value)
            }, [
              D(A.$slots, "default", {}, () => [
                (r(!0), a(oe, null, ue(e.items, (X, M) => (r(), a("div", {
                  key: M,
                  onClick: (G) => x(X),
                  class: g(u.value)
                }, T(X.label || X), 11, Vn))), 128))
              ], !0)
            ], 6)) : v("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}, Mn = /* @__PURE__ */ fe(Tn, [["__scopeId", "data-v-da7264aa"]]), Ln = ["tabindex"], An = {
  key: 0,
  class: "mr-2"
}, Pn = { class: "flex-1" }, Dn = {
  key: 1,
  class: "ml-2"
}, En = {
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
    const { language: t } = ge("i18n", { language: L("en"), t: (p) => p, setLanguage: () => {
    } }), l = {
      xs: "text-xs  px-2   py-1",
      sm: "text-xs  px-2.5 py-1.5",
      md: "text-sm  px-2.5 py-1.5",
      lg: "text-sm  px-3   py-2",
      xl: "text-base px-3  py-2.5"
    }, o = e, s = n, b = i(() => [
      "relative flex cursor-pointer select-none items-center gap-2",
      "outline-none transition-colors",
      we[o.rounded],
      l[o.size] ?? l.md,
      o.disabled ? "pointer-events-none opacity-50" : "hover:bg-color-1 ui-text-color focus:bg-color-2",
      o.active ? "bg-color-2 ui-text-color" : ""
    ]), y = () => {
      o.disabled || s("select");
    }, k = i(() => {
      let p = "";
      return o.lang != "" ? p = o.lang : o.dir == "rtl" ? p = "dv" : o.dir == "ltr" ? p = "en" : p = t.value, console.log("selectLanguage in Card222:", p), p === "dv" ? "dv" : "en";
    });
    i(() => k.value == "dv" ? "faruma" : "");
    const I = i(() => Ge(o.label, k.value, o.label));
    return (p, f) => {
      const u = ve("Icon");
      return r(), a("div", {
        onClick: y,
        class: g(b.value),
        role: "menuitem",
        tabindex: e.disabled ? -1 : 0
      }, [
        p.$slots.prepend || e.prependIcon ? (r(), a("span", An, [
          D(p.$slots, "prepend", {}, () => [
            e.prependIcon ? (r(), Z(u, {
              key: 0,
              name: e.prependIcon,
              type: "outline",
              size: F(Pe)[o.size],
              color: "text-current"
            }, null, 8, ["name", "size"])) : v("", !0)
          ])
        ])) : v("", !0),
        c("span", Pn, [
          D(p.$slots, "default", {}, () => [
            me(T(I.value), 1)
          ])
        ]),
        p.$slots.append || e.appendIcon ? (r(), a("span", Dn, [
          D(p.$slots, "append", {}, () => [
            e.appendIcon ? (r(), Z(u, {
              key: 0,
              name: e.appendIcon,
              type: "outline",
              size: F(Pe)[o.size],
              stroke: "currentColor",
              color: "text-current"
            }, null, 8, ["name", "size"])) : v("", !0)
          ])
        ])) : v("", !0)
      ], 10, Ln);
    };
  }
}, On = ["onClick", "onKeydown", "aria-expanded", "aria-controls"], jn = {
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
    rounded: { type: String, default: () => he("Expansion", "rounded") }
  },
  emits: ["update:modelValue", "change", "action-click"],
  setup(e, { emit: n }) {
    const t = e, l = n;
    nt();
    const o = L(t.modelValue), s = i({
      get: () => t.exclusive ? o.value : t.modelValue,
      set: (f) => {
        o.value = f, l("update:modelValue", f);
      }
    });
    function b(f) {
      if (t.clickable) {
        if (t.exclusive)
          s.value = s.value === f ? -1 : f;
        else {
          const u = Array.isArray(s.value) ? [...s.value] : [], m = u.indexOf(f);
          m > -1 ? u.splice(m, 1) : u.push(f), s.value = u;
        }
        l("change", {
          index: f,
          item: t.items[f],
          active: s.value === f
        });
      }
    }
    function y(f, u, m) {
      l("action-click", {
        action: f.id || f.label,
        item: u,
        index: m
      }), f.callback && f.callback(u, m);
    }
    function k(f) {
      const u = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-color-3 text-ui-text-color hover:bg-color-4",
        outline: "border border-color text-ui-text-color hover:bg-color-1",
        ghost: "text-primary hover:bg-color-1",
        danger: "bg-error text-white hover:bg-error/90"
      };
      return u[f || "secondary"] || u.secondary;
    }
    function I(f) {
      f.style.height = "0", f.offsetHeight, f.style.height = f.scrollHeight + "px";
    }
    function p(f) {
      f.style.height = "0";
    }
    return (f, u) => {
      const m = ve("Icon");
      return r(), a("div", {
        class: g([
          "border overflow-hidden transition-all duration-300",
          e.border,
          e.rounded ? F(we)[e.rounded] : "",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        (r(!0), a(oe, null, ue(e.items, (d, z) => (r(), a("div", {
          key: d.id ?? z,
          class: g([
            "border-b ui-border-color last:border-b-0 transition-all",
            s.value === z && "bg-color-1"
          ])
        }, [
          c("button", {
            onClick: (x) => b(z),
            onKeydown: [
              ye(ee((x) => b(z), ["prevent"]), ["enter"]),
              ye(ee((x) => b(z), ["prevent"]), ["space"])
            ],
            "aria-expanded": s.value === z,
            "aria-controls": `panel-${z}`,
            class: g(["w-full flex items-center justify-between px-6 py-4 text-left transition-all hover:bg-color-1", [
              s.value === z ? "bg-color-1" : "bg-color-2",
              e.clickable && "cursor-pointer"
            ]])
          }, [
            e.hasLeftIcon ? (r(), a("div", jn, [
              D(f.$slots, "left-icon", {
                item: d,
                index: z
              }, () => [
                c("div", Nn, T(z + 1), 1)
              ], !0)
            ])) : v("", !0),
            c("div", Rn, [
              c("h3", Hn, T(d.title), 1),
              d.subtitle ? (r(), a("p", Un, T(d.subtitle), 1)) : v("", !0)
            ]),
            d.badge || d.rightIcon ? (r(), a("div", Fn, [
              d.badge ? (r(), Z(F(jt), {
                key: 0,
                chips: d.badge,
                size: "small",
                class: "px-2 py-1 text-xs font-medium rounded-full"
              }, null, 8, ["chips"])) : v("", !0),
              d.rightIcon ? (r(), a("div", qn, [
                c("i", {
                  class: g(["text-lg", d.rightIcon])
                }, null, 2)
              ])) : v("", !0)
            ])) : v("", !0),
            K(m, {
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: g(["transition-transform duration-200", s.value === z ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"])
          ], 42, On),
          K(xe, {
            name: "expand",
            onEnter: I,
            onLeave: p
          }, {
            default: te(() => [
              s.value === z ? (r(), a("div", {
                key: 0,
                id: `panel-${z}`,
                class: "overflow-hidden"
              }, [
                c("div", Kn, [
                  D(f.$slots, "content", {
                    item: d,
                    index: z
                  }, () => [
                    me(T(d.content), 1)
                  ], !0),
                  d.actions || f.$slots.actions ? (r(), a("div", Gn, [
                    D(f.$slots, "actions", {
                      item: d,
                      index: z
                    }, () => [
                      (r(!0), a(oe, null, ue(d.actions, (x) => (r(), a("button", {
                        key: x.label,
                        onClick: (B) => y(x, d, z),
                        class: g([
                          "px-4 py-2 text-sm font-medium rounded-md transition-all",
                          k(x.variant)
                        ])
                      }, T(x.label), 11, Yn))), 128))
                    ], !0)
                  ])) : v("", !0)
                ])
              ], 8, Wn)) : v("", !0)
            ]),
            _: 2
          }, 1024)
        ], 2))), 128))
      ], 6);
    };
  }
}, Jn = /* @__PURE__ */ fe(Xn, [["__scopeId", "data-v-54f28e1c"]]), Qn = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" }, Zn = {
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
    const t = e, l = n, o = L(""), s = L(""), b = L(!1), y = i(() => document.documentElement.classList.contains("dark")), k = i(() => t.sections && t.sections.length > 0);
    function I() {
      o.value && (l("newsletter-submit", {
        email: o.value
      }), b.value = !1, s.value = "Thanks for subscribing!", o.value = "", setTimeout(() => {
        s.value = "";
      }, 3e3));
    }
    function p() {
      document.documentElement.classList.toggle("dark"), l("theme-toggle", y.value);
    }
    return (f, u) => {
      const m = ve("Icon");
      return r(), a("footer", {
        class: g([
          "border-t border-color transition-colors duration-300",
          "bg-color-2 text-ui-text-color",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        c("div", Qn, [
          k.value ? (r(), a("div", Zn, [
            (r(!0), a(oe, null, ue(e.sections, (d) => (r(), a("div", {
              key: d.title,
              class: "space-y-4"
            }, [
              d.title ? (r(), a("h3", _n, T(d.title), 1)) : v("", !0),
              c("ul", er, [
                (r(!0), a(oe, null, ue(d.links, (z) => (r(), a("li", {
                  key: z.label
                }, [
                  c("a", {
                    href: z.href,
                    target: z.target,
                    rel: z.rel,
                    class: "text-sm text-ui-text-secondary hover:text-primary transition-colors duration-200"
                  }, T(z.label), 9, tr)
                ]))), 128))
              ]),
              d.social ? (r(), a("div", lr, [
                (r(!0), a(oe, null, ue(d.social, (z) => (r(), a("a", {
                  key: z.icon,
                  href: z.href,
                  title: z.label,
                  target: z.target,
                  rel: "noopener noreferrer",
                  class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-color-3 text-ui-text-color hover:bg-primary hover:text-white transition-all duration-200"
                }, [
                  K(m, {
                    name: z.icon,
                    size: 16,
                    color: "text-current"
                  }, null, 8, ["name"])
                ], 8, nr))), 128))
              ])) : v("", !0)
            ]))), 128))
          ])) : v("", !0),
          e.newsletter ? (r(), a("div", rr, [
            c("div", ar, [
              c("h3", or, T(e.newsletter.title || "Subscribe to our newsletter"), 1),
              c("p", sr, T(e.newsletter.description || "Get updates delivered to your inbox."), 1),
              c("form", {
                onSubmit: ee(I, ["prevent"]),
                class: "flex gap-2"
              }, [
                Ie(c("input", {
                  "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
                  type: "email",
                  placeholder: "Enter your email",
                  class: "flex-1 px-3 py-2 text-sm border border-color rounded-md bg-color-1 text-ui-text-color placeholder-ui-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                  required: ""
                }, null, 512), [
                  [mt, o.value]
                ]),
                u[1] || (u[1] = c("button", {
                  type: "submit",
                  class: "px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-200"
                }, " Subscribe ", -1))
              ], 32),
              s.value ? (r(), a("p", {
                key: 0,
                class: g(["text-xs mt-2", b.value ? "text-error" : "text-success"])
              }, T(s.value), 3)) : v("", !0)
            ])
          ])) : v("", !0),
          u[2] || (u[2] = c("div", { class: "border-t border-color" }, null, -1))
        ]),
        c("div", ir, [
          c("div", ur, [
            c("div", dr, [
              c("p", cr, T(e.copyright || `© ${(/* @__PURE__ */ new Date()).getFullYear()} All rights reserved.`), 1),
              e.bottomLinks ? (r(), a("div", fr, [
                (r(!0), a(oe, null, ue(e.bottomLinks, (d) => (r(), a("a", {
                  key: d.label,
                  href: d.href,
                  class: "text-xs text-ui-text-secondary hover:text-primary transition-colors duration-200"
                }, T(d.label), 9, gr))), 128))
              ])) : v("", !0),
              e.showThemeSwitcher ? (r(), a("div", mr, [
                c("button", {
                  onClick: p,
                  class: "p-2 rounded-md hover:bg-color-2 transition-colors",
                  title: y.value ? "Light mode" : "Dark mode"
                }, [
                  K(m, {
                    name: y.value ? "sun" : "moon",
                    size: 18,
                    color: "text-current"
                  }, null, 8, ["name"])
                ], 8, pr)
              ])) : v("", !0)
            ])
          ])
        ])
      ], 6);
    };
  }
}, yr = /* @__PURE__ */ fe(vr, [["__scopeId", "data-v-7a2ba9e6"]]), br = {
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
    const l = e, o = t, s = tt(/* @__PURE__ */ new Map()), b = tt({}), y = tt({}), k = (B, $) => {
      s.set(B, $), y[B] = !1;
    }, I = (B) => {
      s.delete(B), delete b[B], delete y[B], z();
    }, p = async () => {
      let B = !0;
      Object.keys(b).forEach(($) => delete b[$]);
      for (const [$, U] of s.entries())
        U?.validate && (y[$] = !0, await U.validate() || (B = !1));
      return z(), { valid: B, errors: { ...b } };
    }, f = () => {
      for (const [B, $] of s.entries())
        $?.reset && $.reset();
      u();
    }, u = () => {
      for (const [B, $] of s.entries())
        $?.resetValidation && $.resetValidation();
      Object.keys(b).forEach((B) => delete b[B]), Object.keys(y).forEach((B) => y[B] = !1), z();
    }, m = (B, $, U) => {
      y[B] = !0, $ ? delete b[B] : b[B] = U, z();
    }, d = i(() => Array.from(s.keys()).every(($) => y[$] === !0) && Object.keys(b).length === 0), z = () => {
      Ae(() => {
        l.modelValue !== null && o("update:modelValue", d.value);
      });
    }, x = async () => {
      const B = await p();
      o("submit", B);
    };
    return Ke("formContext", {
      register: k,
      unregister: I,
      validate: m,
      validateOn: i(() => l.validateOn)
    }), n({
      validate: p,
      reset: f,
      resetValidation: u,
      isValid: d
    }), (B, $) => (r(), a("form", {
      onSubmit: ee(x, ["prevent"])
    }, [
      D(B.$slots, "default", {
        isValid: d.value,
        validate: p,
        reset: f,
        resetValidation: u
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
      class: g(`border border-color-3 rounded-lg ${e.color} w-full relative p-4`)
    }, [
      e.title ? (r(), a("div", hr, [
        c("span", xr, T(e.title), 1)
      ])) : v("", !0),
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
      c("main", {
        class: "",
        style: ce(t.value)
      }, [
        c("div", Sr, [
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
    })), l = typeof n.leftWidth == "number" ? n.leftWidth : parseInt(n.leftWidth) || 320, o = L(l), s = L(!1), b = L(null), y = i(() => ({
      width: `${o.value}px`,
      minWidth: `${o.value}px`
    }));
    function k(f) {
      s.value = !0, f.preventDefault();
    }
    function I(f) {
      if (!b.value) return;
      const u = b.value.getBoundingClientRect(), m = f.clientX - u.left;
      o.value = Math.max(n.minWidth, Math.min(m, Math.min(n.maxWidth, u.width - 300)));
    }
    function p() {
      s.value = !1;
    }
    return ze(() => {
      s.value = !1;
    }), (f, u) => (r(), a("div", {
      ref_key: "containerRef",
      ref: b,
      class: g(["flex overflow-hidden", e.bleed ? "-mx-6 -my-5" : "", s.value ? "select-none" : ""]),
      style: ce(t.value)
    }, [
      c("div", {
        class: g(["flex-shrink-0 flex flex-col overflow-hidden", e.leftClass]),
        style: ce(y.value)
      }, [
        D(f.$slots, "left")
      ], 6),
      c("div", {
        class: "relative flex-shrink-0 w-[5px] cursor-col-resize group z-10",
        onMousedown: k
      }, [
        c("div", {
          class: g(["absolute inset-y-0 left-[2px] w-px bg-[var(--border-color)] transition-colors", s.value ? "!bg-primary !w-[2px] !left-[1.5px]" : "group-hover:!bg-primary"])
        }, null, 2),
        c("div", {
          class: g(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", s.value ? "!opacity-100" : ""])
        }, [
          (r(), a(oe, null, ue(4, (m) => c("span", {
            key: m,
            class: "w-[3px] h-[3px] rounded-full bg-primary block"
          })), 64))
        ], 2)
      ], 32),
      c("div", {
        class: g(["flex-1 min-w-0 flex flex-col overflow-hidden", e.rightClass])
      }, [
        D(f.$slots, "right")
      ], 2),
      (r(), Z(Xe, { to: "body" }, [
        s.value ? (r(), a("div", {
          key: 0,
          class: "fixed inset-0 z-[9999] cursor-col-resize",
          onMousemove: I,
          onMouseup: p
        }, null, 32)) : v("", !0)
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
}, Dr = { class: "truncate" }, Er = {
  key: 2,
  class: "mt-auto border-t border-color-3 px-4 py-4"
}, Or = {
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
    rounded: { type: String, default: () => he("NavBar", "rounded") },
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
    const l = e, o = t, s = L(null), b = L(""), y = L([]), k = L(!1), I = i({
      get: () => l.railExpanded,
      set: (S) => o("update:railExpanded", S)
    }), p = i({
      get: () => l.modelValue,
      set: (S) => o("update:modelValue", S)
    }), f = i(() => l.permanent || l.rail ? !0 : p.value), u = i(() => !l.rail || l.expandOnHover && k.value ? !1 : !I.value);
    pe(u, (S) => {
      o("update:collapsed", S);
    });
    const m = i(() => u.value ? typeof l.railWidth == "number" ? `${l.railWidth}px` : l.railWidth : typeof l.width == "number" ? `${l.width}px` : l.width);
    pe(m, (S) => {
      o("update:width", S);
    }, { immediate: !0 }), Ke("navWidth", m);
    const d = i(() => {
      const S = {
        width: m.value
      };
      if (l.appBarOffset) {
        const V = typeof l.appBarOffset == "number" ? `${l.appBarOffset}px` : l.appBarOffset;
        S.top = V, S.height = `calc(100vh - ${V})`;
      }
      return S;
    }), z = i(() => {
      const S = [
        "fixed bottom-0 z-40 flex flex-col",
        "bg-color-1 ui-text-secondary"
      ];
      return l.location === "right" ? S.push("right-0") : S.push("left-0"), l.bordered && (S.push(l.location === "right" ? "border-l" : "border-r"), S.push("border-color-3")), (l.elevated || l.temporary) && S.push("shadow-lg"), l.floating && S.push("m-4 rounded-lg"), l.color && S.push(l.color), S;
    }), x = i(() => l.location === "right" ? "slide-right" : "slide-left"), B = i(() => {
      let S = l.items;
      if (b.value) {
        const V = b.value.toLowerCase();
        S = l.items.filter((H) => {
          const C = H.label?.toLowerCase().includes(V), w = H.children?.some(
            (h) => h.label?.toLowerCase().includes(V)
          );
          return C || w;
        });
      }
      if (l.groupBy) {
        const V = {};
        return S.forEach((H) => {
          const C = H[l.groupBy] || "Other";
          V[C] || (V[C] = { title: C, items: [] }), V[C].items.push(H);
        }), Object.values(V);
      }
      return [{ title: null, items: S }];
    }), $ = () => {
      p.value = !0, o("open");
    }, U = () => {
      l.permanent || (p.value = !1, o("close"));
    }, j = () => {
      p.value ? U() : $();
    }, A = () => {
      o("update:railExpanded", !I.value);
    };
    let Y = null, X = null;
    const M = () => {
      Y && (clearTimeout(Y), Y = null), X && (clearTimeout(X), X = null);
    }, G = () => {
      if (l.expandOnHover && l.rail) {
        M();
        const S = Number(l.hoverDelay) || 0;
        Y = setTimeout(() => {
          k.value = !0;
        }, S);
      }
    }, re = () => {
      if (l.expandOnHover && l.rail) {
        M();
        const S = Number(l.hoverDelay) || 0;
        X = setTimeout(() => {
          k.value = !1;
        }, S);
      }
    }, E = (S) => {
      if (o("item-click", S), S.children) {
        const V = y.value.indexOf(S.id);
        V > -1 ? y.value.splice(V, 1) : y.value.push(S.id);
        return;
      }
      (l.closeOnClick || l.temporary) && U();
    }, N = (S) => {
      S.key === "Escape" && (l.temporary || l.persistent) && U();
    };
    function J() {
      if (l.items)
        for (const S of l.items)
          S.children && S.children.some((V) => V.active) && (y.value.includes(S.id) || y.value.push(S.id));
    }
    return pe(() => l.items, J, { deep: !0 }), Ve(() => {
      J(), document.addEventListener("keydown", N);
    }), ze(() => {
      M(), document.removeEventListener("keydown", N);
    }), n({ open: $, close: U, toggle: j, isCollapsed: u }), (S, V) => {
      const H = ve("Icon");
      return r(), a("div", zr, [
        K(xe, { name: "fade" }, {
          default: te(() => [
            p.value && e.temporary ? (r(), a("div", {
              key: 0,
              class: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
              onClick: U
            })) : v("", !0)
          ]),
          _: 1
        }),
        K(xe, { name: x.value }, {
          default: te(() => [
            Ie(c("nav", {
              ref_key: "navRef",
              ref: s,
              class: g(z.value),
              style: ce({ ...d.value, transition: "width 300ms ease-in-out" }),
              onMouseenter: G,
              onMouseleave: re
            }, [
              S.$slots.prepend || e.avatarName ? (r(), a("div", {
                key: 0,
                class: g(["flex items-center gap-2 border-b border-color-3 w-full min-w-0", u.value ? "justify-center px-2 py-4" : "px-4 py-4 overflow-hidden"])
              }, [
                D(S.$slots, "prepend", {}, () => [
                  c("div", {
                    class: g(["flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700", u.value ? "" : "flex-1 min-w-0 overflow-hidden"])
                  }, [
                    e.avatarName ? (r(), Z(Pt, {
                      key: 0,
                      name: e.avatarName || "",
                      size: "sm",
                      variant: "primary",
                      class: "flex-shrink-0"
                    }, null, 8, ["name"])) : v("", !0),
                    e.avatarName && !u.value ? (r(), a("span", Br, T(e.avatarName), 1)) : v("", !0)
                  ], 2)
                ], !0),
                e.rail && !e.temporary && !u.value ? (r(), a("button", {
                  key: 0,
                  onClick: A,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 transition-colors",
                  "aria-label": "Toggle navigation width"
                }, [
                  (r(), a("svg", {
                    class: g(["fill-gray-600 dark:fill-gray-200 w-3", e.location === "right" ? "rotate-180" : ""]),
                    xmlns: "http://www.w3.org/2000/svg",
                    "shape-rendering": "geometricPrecision",
                    "text-rendering": "geometricPrecision",
                    "image-rendering": "optimizeQuality",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    viewBox: "0 0 512 389.24"
                  }, [...V[1] || (V[1] = [
                    c("path", {
                      "fill-rule": "nonzero",
                      d: "M0 0h275.1v50.04H0V0zm361.79 115.14 54.44 54.44H0v50.04h416.2l-54.41 54.41 35.39 35.39L512 194.6v-.03l-35.39-35.36-79.43-79.46-35.39 35.39zM0 339.2h275.1v50.04H0V339.2z"
                    }, null, -1)
                  ])], 2))
                ])) : v("", !0),
                !e.permanent && !e.rail ? (r(), a("button", {
                  key: 1,
                  onClick: U,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 ui-text-secondary hover:text-foreground transition-colors",
                  "aria-label": "Close navigation"
                }, [
                  K(H, {
                    name: "x-mark",
                    size: "18"
                  })
                ])) : v("", !0)
              ], 2)) : v("", !0),
              e.filterable && !u.value ? (r(), a("div", Ir, [
                c("div", Vr, [
                  K(F(yt), {
                    modelValue: b.value,
                    "onUpdate:modelValue": V[0] || (V[0] = (C) => b.value = C),
                    type: "text",
                    placeholder: e.searchPlaceholder,
                    prepend: "magnifying-glass"
                  }, null, 8, ["modelValue", "placeholder"])
                ])
              ])) : v("", !0),
              c("div", Tr, [
                e.items && e.items.length ? (r(!0), a(oe, { key: 0 }, ue(B.value, (C, w) => (r(), a(oe, { key: w }, [
                  C.title ? (r(), a("div", {
                    key: 0,
                    class: g([
                      "flex items-center gap-2 px-3 py-2",
                      u.value ? "justify-center" : ""
                    ])
                  }, [
                    u.value ? (r(), a("div", Lr)) : (r(), a("span", Mr, T(C.title), 1))
                  ], 2)) : v("", !0),
                  c("ul", Ar, [
                    (r(!0), a(oe, null, ue(C.items, (h) => (r(), a("li", {
                      key: h.id || h.label
                    }, [
                      (r(), Z(je(h.href ? "a" : "div"), {
                        href: h.href,
                        onClick: ee((O) => E(h), ["prevent"]),
                        class: g([
                          "group flex items-center gap-3 w-full text-sm font-medium transition-colors",
                          u.value ? "justify-center px-2 py-2.5" : "px-3 py-2",
                          h.active ? "bg-color-4 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                          F(we)[e.rounded],
                          h.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                        ]),
                        title: u.value ? h.label : void 0
                      }, {
                        default: te(() => [
                          h.icon ? (r(), a("span", Pr, [
                            K(H, {
                              name: h.icon,
                              size: "20"
                            }, null, 8, ["name"])
                          ])) : v("", !0),
                          Ie(c("span", { class: "truncate" }, T(h.label), 513), [
                            [Oe, !u.value]
                          ]),
                          Ie(c("span", { class: "ml-auto flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-600" }, T(h.badge), 513), [
                            [Oe, h.badge && !u.value]
                          ]),
                          Ie(K(H, {
                            name: "chevron-right",
                            size: "16",
                            class: g(["ml-auto transition-transform", y.value.includes(h.id) ? "rotate-90" : ""])
                          }, null, 8, ["class"]), [
                            [Oe, h.children && !u.value]
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href", "onClick", "class", "title"])),
                      K(xe, { name: "collapse" }, {
                        default: te(() => [
                          h.children && y.value.includes(h.id) && !u.value ? (r(), a("ul", {
                            key: 0,
                            class: g([e.location === "left" ? "mt-1 ml-4 pl-3 border-l border-color-3 space-y-1" : "mt-1 mr-4 pr-3 border-r border-color-3 space-y-1"])
                          }, [
                            (r(!0), a(oe, null, ue(h.children, (O) => (r(), a("li", {
                              key: O.id || O.label
                            }, [
                              (r(), Z(je(O.href ? "a" : "div"), {
                                href: O.href,
                                onClick: ee((W) => E(O), ["prevent"]),
                                class: g([
                                  "flex items-center gap-3 w-full px-3 py-2 text-sm transition-colors",
                                  O.active ? "bg-color-3 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                                  F(we)[e.rounded],
                                  O.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                                ])
                              }, {
                                default: te(() => [
                                  O.icon ? (r(), Z(H, {
                                    key: 0,
                                    name: O.icon,
                                    size: "18"
                                  }, null, 8, ["name"])) : v("", !0),
                                  c("span", Dr, T(O.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["href", "onClick", "class"]))
                            ]))), 128))
                          ], 2)) : v("", !0)
                        ]),
                        _: 2
                      }, 1024)
                    ]))), 128))
                  ])
                ], 64))), 128)) : D(S.$slots, "default", { key: 1 }, void 0, !0)
              ]),
              S.$slots.append ? (r(), a("div", Er, [
                D(S.$slots, "append", {}, void 0, !0)
              ])) : v("", !0)
            ], 38), [
              [Oe, f.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ]);
    };
  }
}, jr = /* @__PURE__ */ fe(Or, [["__scopeId", "data-v-bf734b18"]]), Nr = {
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
      set: (f) => l("update:modelValue", f)
    }), s = L(!1);
    function b() {
      if (t.persistent) {
        s.value = !0, setTimeout(() => s.value = !1, 400);
        return;
      }
      o.value = !1;
    }
    function y(f) {
      f.key === "Escape" && o.value && !t.persistent && b();
    }
    Ve(() => {
      document.addEventListener("keydown", y);
    }), ze(() => {
      document.removeEventListener("keydown", y);
    });
    const k = i(() => `${t.transition ?? "center"}`), I = i(() => t.fullscreen ? "h-screen rounded-none" : t.mobileFull ? "!h-screen !rounded-none !mx-0 sm:!h-auto sm:!max-h-[90vh] sm:!rounded-xl sm:!mx-4" : "mx-4 max-h-screen"), p = i(() => t.fullscreen ? "w-full" : t.mobileFull ? `max-sm:!w-full ${t.width}` : t.width);
    return (f, u) => {
      const m = ve("Card");
      return r(), Z(Xe, { to: "body" }, [
        K(xe, { name: k.value }, {
          default: te(() => [
            o.value ? (r(), a("div", {
              key: 0,
              class: g(["fixed inset-0 flex items-center justify-center", e.zIndex])
            }, [
              c("div", {
                class: g(["absolute inset-0 transition-opacity duration-300 bg-black/30 backdrop-blur-sm", e.overlayClass]),
                onClick: b
              }, null, 2),
              K(xe, { name: k.value }, {
                default: te(() => [
                  o.value ? (r(), Z(m, {
                    key: 0,
                    title: e.title,
                    "card-class": [I.value, e.modalClass, s.value && "animate-shake"],
                    bg: e.cardBg,
                    "text-color": e.bodyTextColor,
                    rounded: e.rounded,
                    border: e.border,
                    "header-class": e.headerClass,
                    "footer-class": e.footerClass,
                    width: p.value,
                    onClick: u[1] || (u[1] = ee(() => {
                    }, ["stop"]))
                  }, He({
                    default: te(() => [
                      c("div", {
                        class: g(["flex-1 pt-2", e.contentClass]),
                        style: { "overflow-x": "clip" }
                      }, [
                        e.closebutton ? (r(), a("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-3 right-4 z-10 text-ui-text-secondary hover:text-ui-text-primary transition-colors",
                          onClick: u[0] || (u[0] = (d) => o.value = !1)
                        }, [...u[2] || (u[2] = [
                          c("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "size-5"
                          }, [
                            c("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18 18 6M6 6l12 12"
                            })
                          ], -1)
                        ])])) : v("", !0),
                        D(f.$slots, "default")
                      ], 2)
                    ]),
                    _: 2
                  }, [
                    f.$slots.header ? {
                      name: "header",
                      fn: te(() => [
                        D(f.$slots, "header")
                      ]),
                      key: "0"
                    } : void 0,
                    f.$slots.footer ? {
                      name: "footer",
                      fn: te(() => [
                        D(f.$slots, "footer")
                      ]),
                      key: "1"
                    } : void 0
                  ]), 1032, ["title", "card-class", "bg", "text-color", "rounded", "border", "header-class", "footer-class", "width"])) : v("", !0)
                ]),
                _: 3
              }, 8, ["name"])
            ], 2)) : v("", !0)
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
      set: (M) => o("update:modelValue", M)
    }), b = i(() => {
      const M = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return M[l.size] || M.md;
    }), y = i(() => {
      const M = {
        sm: "w-8 h-8 min-w-[32px]",
        md: "w-10 h-10 min-w-[40px]",
        lg: "w-12 h-12 min-w-[48px]"
      };
      return M[l.size] || M.md;
    }), k = i(() => {
      const M = {
        sm: 14,
        md: 16,
        lg: 20
      };
      return M[l.size] || M.md;
    }), I = i(() => {
      const M = {
        sm: "gap-1",
        md: "gap-1.5",
        lg: "gap-2"
      };
      return M[l.size] || M.md;
    }), p = i(() => {
      const M = {
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg"
      };
      return M[l.size] || M.md;
    }), f = i(() => "border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"), u = i(() => {
      const M = {
        default: "bg-primary text-white border-primary",
        primary: "bg-primary text-white border-primary",
        outline: "bg-primary text-white border-primary"
      };
      return M[l.variant] || M.default;
    }), m = i(() => {
      const M = {
        default: "bg-color-2 text-ui-text-color border-color",
        primary: "bg-transparent text-ui-text-color border-color",
        outline: "bg-transparent text-ui-text-color border-color"
      };
      return M[l.variant] || M.default;
    }), d = i(() => "hover:bg-color-3 hover:border-color-3"), z = i(() => "opacity-50 cursor-not-allowed"), x = i(() => {
      const M = [], G = l.totalPages, re = s.value, E = l.maxVisiblePages;
      if (G <= E)
        for (let N = 1; N <= G; N++)
          M.push(N);
      else {
        M.push(1);
        const N = Math.floor(E / 2);
        let J = re - N, S = re + N;
        J < 2 && (J = 2, S = E - 1), S > G - 1 && (S = G - 1, J = G - E + 2), J > 2 && M.push("...");
        for (let V = J; V <= S; V++)
          M.push(V);
        S < G - 1 && M.push("..."), M.push(G);
      }
      return M;
    }), B = i(() => (s.value - 1) * l.perPage + 1), $ = i(() => {
      const M = s.value * l.perPage;
      return M > l.totalItems ? l.totalItems : M;
    }), U = (M) => {
      M === s.value || M < 1 || M > l.totalPages || l.disabled || (s.value = M, o("change", M), o("page-change", M));
    }, j = () => {
      s.value > 1 && U(s.value - 1);
    }, A = () => {
      s.value < l.totalPages && U(s.value + 1);
    };
    return n({
      goToPage: U,
      previousPage: j,
      nextPage: A,
      firstPage: () => {
        U(1);
      },
      lastPage: () => {
        U(l.totalPages);
      }
    }), (M, G) => {
      const re = ve("Icon");
      return r(), a("nav", {
        "aria-label": e.ariaLabel,
        class: g([
          "flex items-center justify-center",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        c("ul", {
          class: g([
            "flex items-center",
            b.value,
            I.value
          ])
        }, [
          e.showFirstLast ? (r(), a("li", Hr, [
            c("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: G[0] || (G[0] = (E) => U(1)),
              class: g([
                "inline-flex items-center justify-center transition-all",
                y.value,
                f.value,
                s.value === 1 || e.disabled ? z.value : d.value,
                e.rounded && p.value
              ]),
              "aria-label": e.firstText || "First page"
            }, [
              e.firstText ? (r(), a("span", Fr, T(e.firstText), 1)) : (r(), Z(re, {
                key: 0,
                name: "chevron-double-left",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Ur)
          ])) : v("", !0),
          e.showPrevNext ? (r(), a("li", qr, [
            c("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: j,
              class: g([
                "inline-flex items-center justify-center transition-all",
                y.value,
                f.value,
                s.value === 1 || e.disabled ? z.value : d.value,
                e.rounded && p.value
              ]),
              "aria-label": e.prevText || "Previous page"
            }, [
              e.prevText ? (r(), a("span", Kr, T(e.prevText), 1)) : (r(), Z(re, {
                key: 0,
                name: "chevron-left",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Wr)
          ])) : v("", !0),
          (r(!0), a(oe, null, ue(x.value, (E) => (r(), a("li", { key: E }, [
            E === "..." ? (r(), a("span", {
              key: 0,
              class: g([
                "inline-flex items-center justify-center",
                y.value,
                "text-ui-text-secondary"
              ])
            }, " ... ", 2)) : (r(), a("button", {
              key: 1,
              type: "button",
              disabled: e.disabled,
              onClick: (N) => U(E),
              class: g([
                "inline-flex items-center justify-center transition-all font-medium",
                y.value,
                f.value,
                E === s.value ? u.value : m.value,
                e.rounded && p.value,
                !e.disabled && E !== s.value && d.value
              ]),
              "aria-label": `Page ${E}`,
              "aria-current": E === s.value ? "page" : void 0
            }, T(E), 11, Gr))
          ]))), 128)),
          e.showPrevNext ? (r(), a("li", Yr, [
            c("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: A,
              class: g([
                "inline-flex items-center justify-center transition-all",
                y.value,
                f.value,
                s.value === e.totalPages || e.disabled ? z.value : d.value,
                e.rounded && p.value
              ]),
              "aria-label": e.nextText || "Next page"
            }, [
              e.nextText ? (r(), a("span", Jr, T(e.nextText), 1)) : (r(), Z(re, {
                key: 0,
                name: "chevron-right",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Xr)
          ])) : v("", !0),
          e.showFirstLast ? (r(), a("li", Qr, [
            c("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: G[1] || (G[1] = (E) => U(e.totalPages)),
              class: g([
                "inline-flex items-center justify-center transition-all",
                y.value,
                f.value,
                s.value === e.totalPages || e.disabled ? z.value : d.value,
                e.rounded && p.value
              ]),
              "aria-label": e.lastText || "Last page"
            }, [
              e.lastText ? (r(), a("span", _r, T(e.lastText), 1)) : (r(), Z(re, {
                key: 0,
                name: "chevron-double-right",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Zr)
          ])) : v("", !0)
        ], 2),
        e.showPageInfo ? (r(), a("div", {
          key: 0,
          class: g([
            "ml-4 text-ui-text-secondary",
            b.value
          ])
        }, " Page " + T(s.value) + " of " + T(e.totalPages), 3)) : v("", !0),
        e.showTotalInfo && e.totalItems ? (r(), a("div", {
          key: 1,
          class: g([
            "ml-4 text-ui-text-secondary",
            b.value
          ])
        }, T(B.value) + "-" + T($.value) + " of " + T(e.totalItems), 3)) : v("", !0)
      ], 14, Rr);
    };
  }
}, ta = /* @__PURE__ */ fe(ea, [["__scopeId", "data-v-862a1617"]]), la = { class: "relative" }, na = ["aria-hidden"], ra = {
  class: "flex h-full flex-col",
  style: { minHeight: "100vh" }
}, aa = { class: "flex items-center justify-between px-4 py-3" }, oa = { class: "flex items-center gap-2" }, sa = {
  key: 0,
  class: /* @__PURE__ */ g(["pa-2"]),
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
      return t.rail && !t.modelValue && !S.value || t.rail && t.modelValue && !S.value ? P ? "chevron-right" : "chevron-left" : P ? "chevron-left" : "chevron-right";
    });
    const l = n, o = L(!!t.modelValue), s = L(null), b = L(t.items ? [...t.items] : []), y = L("");
    pe(
      () => t.items,
      (P) => {
        b.value = t.items ? [...t.items] : [];
      }
    ), pe(
      () => t.overlayAppBar,
      (P) => {
        ie();
      }
    );
    const k = i(() => {
      if (!t.items) return [];
      if (!y.value || y.value.trim().length === 0) return b.value;
      const P = y.value.toLowerCase();
      return b.value.filter((_) => String(_.label || _.name || "").toLowerCase().includes(P) || _.tags && String(_.tags).toLowerCase().includes(P));
    }), I = i(() => {
      if (!t.items) return [];
      if (!t.groupBy) return [{ group: null, items: k.value }];
      const P = {}, _ = typeof t.groupBy == "function" ? t.groupBy : (le) => le[t.groupBy];
      return k.value.forEach((le) => {
        const q = _(le) || "Ungrouped";
        P[q] || (P[q] = []), P[q].push(le);
      }), Object.keys(P).map((le) => ({ group: le, items: P[le] }));
    }), p = L({});
    pe(I, (P) => {
      P.forEach((_) => {
        const le = String(_.group || "Ungrouped");
        p.value[le] === void 0 && (p.value[le] = !!t.groupDefaultOpen);
      });
    });
    function f(P) {
      if (!t.collapsibleGroups) return !0;
      const _ = String(P || "Ungrouped");
      return !!p.value[_];
    }
    function u(P) {
      if (!t.collapsibleGroups) return;
      const _ = String(P || "Ungrouped");
      p.value[_] = !p.value[_], l("group-toggle", { group: P, open: p.value[_] });
    }
    function m(P, _) {
      const le = t.groupParents && _ ? t.groupParents[_] : void 0;
      (!le || !le.href) && (P.preventDefault(), u(_));
    }
    function d(P, _) {
      if (!_) return;
      const le = t.groupParents && _ ? t.groupParents[_] : void 0;
      (P.key === "Enter" || P.key === " ") && (!le || !le.href) && (P.preventDefault(), P.stopPropagation(), u(_));
    }
    function z() {
      const P = s.value;
      if (!P) return;
      P.querySelectorAll("li").forEach((q) => {
        const ae = q.querySelector("svg");
        ae && !ae.classList.contains("rail-icon") && ae.classList.add("rail-icon"), Array.from(q.childNodes).forEach((Me) => {
          if (Me.nodeType === Node.TEXT_NODE) {
            const De = Me.textContent?.trim();
            if (De && De.length) {
              const _e = document.createElement("span");
              _e.className = "rail-label", _e.textContent = De, q.replaceChild(_e, Me);
            }
          } else if (Me.nodeType === Node.ELEMENT_NODE) {
            const De = Me;
            if (De.classList.contains("rail-label") || De.classList.contains("rail-icon")) return;
            Array.from(De.childNodes).forEach((at) => {
              if (at.nodeType === Node.TEXT_NODE) {
                const ot = at.textContent?.trim();
                if (ot && ot.length) {
                  const st = document.createElement("span");
                  st.className = "rail-label", st.textContent = ot, De.replaceChild(st, at);
                }
              }
            });
          }
        });
      }), P.querySelectorAll(":scope > a, :scope > button").forEach((q) => {
        q.classList.contains("nav-drawer-link") || q.classList.add("nav-drawer-link");
        const ae = q.parentElement;
        if (ae && ae.tagName.toLowerCase() !== "li") {
          const Se = document.createElement("li");
          Se.className = "nav-drawer-item", ae.replaceChild(Se, q), Se.appendChild(q);
        }
      });
    }
    let x = null, B = null, $ = null;
    function U(P, _ = b.value) {
      return P == null ? -1 : _.findIndex((le) => String(le.id) === String(P));
    }
    function j(P) {
      x = P.id;
    }
    function A(P) {
      if (B = P.id, P.event && P.event.clientY !== void 0) {
        const _ = document.querySelector(`[data-drawer-item-id='${P.id}']`);
        if (_) {
          const le = _.getBoundingClientRect(), q = le.top + le.height / 2;
          $ = P.event.clientY < q ? "before" : "after";
        }
      } else
        $ = "after";
    }
    function Y(P) {
      if (!t.items || !t.draggable) return;
      const _ = P.sourceId !== void 0 ? P.sourceId : x, le = P.id;
      if (!_ || !le || String(_) === String(le)) return;
      const q = U(_), ae = U(le);
      if (q === -1 || ae === -1) return;
      const Se = [...b.value], [Me] = Se.splice(q, 1);
      Se.splice(ae, 0, Me), b.value = Se, l("update:items", Se), l("reorder", { items: Se }), x = null, B = null, $ = null;
    }
    function X(P) {
      s.value && (s.value.contains(P.target) || w());
    }
    pe(
      () => t.modelValue,
      (P) => {
        o.value = !!P, Ze();
      }
    ), pe(
      () => t.permanent,
      (P) => {
        Ze();
      }
    ), pe(o, (P) => {
      l("update:modelValue", P), l(P ? "open" : "close");
    });
    const M = i(() => t.permanent ? !0 : o.value), G = () => {
      t.permanent || (o.value = !1);
    }, re = () => {
      t.closeOnScrimClick && G();
    }, E = (P) => {
      P.key === "Escape" && (t.temporary || t.persistent) && G();
    };
    Ve(() => {
      document.addEventListener("keydown", E), document.addEventListener("click", X), z();
    }), Ht(() => {
      z();
    }), ze(() => {
      document.removeEventListener("keydown", E), document.removeEventListener("click", X), window.removeEventListener("resize", ke);
    });
    let N = null;
    function J(P) {
      return Array.from(P.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'));
    }
    pe(M, (P) => {
      if (P && (t.temporary || t.persistent)) {
        const _ = s.value;
        if (!_) return;
        const le = J(_);
        le.length ? le[0].focus() : (_.setAttribute("tabindex", "-1"), _.focus()), N = (q) => {
          if (q.key !== "Tab") return;
          const ae = J(_);
          if (!ae.length) return;
          const Se = ae[0], Me = ae[ae.length - 1];
          q.shiftKey && document.activeElement === Se ? (q.preventDefault(), Me.focus()) : !q.shiftKey && document.activeElement === Me && (q.preventDefault(), Se.focus());
        }, document.addEventListener("keydown", N);
      } else
        N && (document.removeEventListener("keydown", N), N = null);
      z();
    });
    const S = L(!1), V = i(() => t.rail ? !0 : !!(t.hoverExpand || t.expandOnHover));
    let H;
    const C = () => {
      V.value && (H && window.clearTimeout(H), S.value = !0);
    }, w = () => {
      V.value && (H = window.setTimeout(() => {
        S.value = !1;
      }, 150));
    }, h = i(() => t.rail && !S.value), O = i(() => t.location === "right" ? "right-0" : "left-0"), W = i(() => h.value ? typeof t.railWidth == "number" ? `w-[${t.railWidth}px]` : String(t.railWidth) : typeof t.width == "number" ? `w-[${t.width}px]` : String(t.width)), de = i(() => {
      const P = ["fixed", "h-full", "overflow-hidden", "flex", "flex-col"];
      return t.isStuck && P.push("top-0"), t.location === "right" ? P.push("right-0") : P.push("left-0"), t.rail && P.push("transition-all"), pe(
        () => t.rail,
        (_) => {
          z();
        }
      ), P.join(" ");
    }), Be = i(() => t.rail ? "drawer-rail" : ""), se = i(() => t.rail && !h.value ? "drawer-expanded" : ""), Ce = i(() => !(t.rail && h.value)), Ue = i(() => t.location === "right" ? "translate-x-full" : "-translate-x-full"), rt = i(() => t.zIndex !== void 0 && typeof t.zIndex == "string" && t.zIndex.startsWith("z-") ? t.zIndex : t.overlayAppBar ? "z-50" : "z-10"), R = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex };
    }), Q = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex - 1 };
    }), ne = L(0), ie = () => {
      if (!t.appBarOffset && t.overlayAppBar) {
        ne.value = 0;
        return;
      }
      if (t.appBarHeight !== void 0 && t.appBarHeight !== null) {
        if (typeof t.appBarHeight == "number") ne.value = t.appBarHeight;
        else if (typeof t.appBarHeight == "string") {
          const P = Number(String(t.appBarHeight).replace(/px$/i, ""));
          ne.value = Number.isFinite(P) ? P : 0;
        }
        console.log("Using provided appBarHeight for top padding:", ne.value);
        return;
      }
      if (typeof document < "u") {
        const P = document.querySelector('[data-component="appbar"]');
        if (!P) {
          ne.value = 0;
          return;
        }
        const _ = P.getBoundingClientRect();
        ne.value = Math.round(_.height), console.log("Computed top padding for drawer:", ne.value);
      }
    };
    ie();
    let $e;
    const ke = () => {
      $e && window.clearTimeout($e), $e = window.setTimeout(() => {
        ie();
      }, 100);
    };
    Ve(() => {
      window.addEventListener("resize", ke);
    }), ze(() => {
      window.removeEventListener("resize", ke);
    });
    const bt = i(() => t.zIndex !== void 0 && typeof t.zIndex == "number" ? "" : t.overlayAppBar ? "z-40" : "z-0"), Qe = ge("layout", null), Fe = L(null), ht = L(0);
    function Ze() {
      Fe.value && (ht.value = Fe.value.getBoundingClientRect().width, Qe && !t.rail && Qe.register("drawer", t.id, {
        mode: t.modelValue || t.permanent ? "permanent" : "rail",
        right: t.location === "right",
        width: ht.value
      }));
    }
    return Ve(() => {
      Fe.value = s.value, Ze();
      const P = new ResizeObserver(Ze);
      Fe.value && P.observe(Fe.value), ze(() => {
        P.disconnect(), Qe && Qe.unregister("drawer", t.id);
      });
    }), (P, _) => {
      const le = ve("Icon");
      return r(), a("div", la, [
        M.value && e.temporary ? (r(), a("div", {
          key: 0,
          class: g(["fixed inset-0", bt.value]),
          style: ce([Q.value]),
          onClick: re
        }, null, 6)) : v("", !0),
        c("nav", {
          ref_key: "navRef",
          ref: s,
          class: g([
            rt.value,
            t.location === "right" ? "border-l" : "border",
            "border-color-2 transform transition-transform duration-200 ease-in-out",
            de.value,
            O.value,
            Be.value,
            se.value,
            e.color,
            W.value,
            !M.value && !e.permanent ? Ue.value : "translate-x-0"
          ]),
          style: ce([R.value, ne.value ? { paddingTop: ne.value + "px" } : void 0]),
          "aria-hidden": !M.value && !e.permanent,
          onClick: C
        }, [
          c("div", ra, [
            c("div", aa, [
              Ce.value ? D(P.$slots, "prepend", { key: 0 }, () => [
                _[1] || (_[1] = c("span", { class: "font-semibold" }, "Menu", -1))
              ], !0) : v("", !0),
              c("div", oa, [
                D(P.$slots, "append", {}, void 0, !0),
                !e.permanent && !e.temporary ? (r(), a("button", sa, [
                  e.location === "left" && !F(Le) && h.value && !e.rail ? (r(), Z(le, {
                    key: 0,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0),
                  e.location === "left" && !F(Le) && !e.rail && !h.value ? (r(), Z(le, {
                    key: 1,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0),
                  e.location === "right" && F(Le) && !e.rail && h.value ? (r(), Z(le, {
                    key: 2,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0),
                  e.location === "right" && F(Le) && !e.rail && !h.value ? (r(), Z(le, {
                    key: 3,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0)
                ])) : v("", !0),
                e.temporary ? (r(), a("button", {
                  key: 1,
                  onClick: G,
                  class: g(["ml-2 rounded p-2"]),
                  "aria-label": "Close drawer"
                }, [
                  K(le, {
                    name: "x-mark",
                    class: "fill-color-4 hover:fill-color-3",
                    size: "20"
                  })
                ])) : v("", !0)
              ])
            ]),
            c("div", ia, [
              t.items ? (r(), a("div", ua, [
                t.filterable && !(t.rail && h.value) ? (r(), a("div", da, [
                  K(F(yt), {
                    prepend: "magnifying-glass",
                    label: "Search",
                    modelValue: y.value,
                    "onUpdate:modelValue": _[0] || (_[0] = (q) => y.value = q),
                    placeholder: t.searchPlaceholder
                  }, null, 8, ["modelValue", "placeholder"])
                ])) : v("", !0),
                (r(!0), a(oe, null, ue(I.value, (q) => (r(), a("div", {
                  key: q.group,
                  class: g(["py-2", h.value ? "py-1" : ""])
                }, [
                  q.group ? (r(), a("div", {
                    key: 0,
                    class: g(["group-header px-3 pt-3 pb-1 text-lg uppercase flex items-center justify-between", P.groupHeaderStyles, h.value ? "pt-1 pb-0 px-1" : ""]),
                    role: "button",
                    tabindex: t.collapsibleGroups ? 0 : -1,
                    onClick: ee((ae) => u(q.group), ["prevent"]),
                    onKeydown: [
                      ye(ee((ae) => u(q.group), ["prevent"]), ["enter"]),
                      ye(ee((ae) => u(q.group), ["prevent"]), ["space"])
                    ],
                    "aria-expanded": f(q.group)
                  }, [
                    c("span", fa, [
                      t.renderGroupParent ? (r(), Z(je(t.groupParents && t.groupParents[q.group] && t.groupParents[q.group].href ? "a" : "button"), {
                        key: 0,
                        href: t.groupParents && t.groupParents[q.group] && t.groupParents[q.group].href || void 0,
                        class: "group-parent flex items-center gap-3 px-0 py-0 w-full text-left",
                        onClick: ee((ae) => m(ae, q.group), ["stop"]),
                        onKeydown: (ae) => d(ae, q.group)
                      }, {
                        default: te(() => [
                          t.groupParents && t.groupParents[q.group] && t.groupParents[q.group].icon ? (r(), a("span", ga, [
                            K(le, {
                              name: t.groupParents[q.group].icon,
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : t.groupIcons && t.groupIcons[q.group] ? (r(), a("span", ma, [
                            K(le, {
                              name: t.groupIcons[q.group],
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : v("", !0),
                          !t.rail || !h.value ? (r(), a("span", {
                            key: 2,
                            class: g(["text-lg uppercase", P.groupHeaderStyles])
                          }, T(t.groupParents && t.groupParents[q.group] && t.groupParents[q.group].label || q.group), 3)) : v("", !0)
                        ]),
                        _: 2
                      }, 1064, ["href", "onClick", "onKeydown"])) : (r(), a(oe, { key: 1 }, [
                        t.groupIcons && t.groupIcons[q.group] ? (r(), a("span", pa, [
                          K(le, {
                            name: t.groupIcons[q.group],
                            size: "18"
                          }, null, 8, ["name"])
                        ])) : v("", !0),
                        !t.rail || !h.value ? (r(), a("span", {
                          key: 1,
                          class: g(["text-lg uppercase", P.groupHeaderStyles])
                        }, T(q.group), 3)) : v("", !0)
                      ], 64))
                    ]),
                    t.collapsibleGroups && (!t.rail || !h.value) ? (r(), a("button", {
                      key: 0,
                      onClick: ee((ae) => u(q.group), ["stop", "prevent"]),
                      onKeydown: [
                        ye(ee((ae) => u(q.group), ["stop", "prevent"]), ["enter"]),
                        ye(ee((ae) => u(q.group), ["stop", "prevent"]), ["space"])
                      ],
                      class: g(["px-2 py-1 rounded focus:outline-none", P.groupHeaderStyles]),
                      style: { opacity: 0.7 },
                      "aria-expanded": f(q.group)
                    }, [
                      K(le, {
                        name: "chevron-down",
                        size: "16",
                        class: g({ "rotate-180": f(q.group) })
                      }, null, 8, ["class"])
                    ], 42, va)) : v("", !0)
                  ], 42, ca)) : v("", !0),
                  Ie(c("ul", {
                    class: g(["py-1", h.value ? "py-0" : ""])
                  }, [
                    (r(!0), a(oe, null, ue(q.items, (ae) => (r(), Z(F(Dt), {
                      key: ae.id,
                      id: ae.id,
                      href: ae.href,
                      draggable: t.draggable && !ae.disabled,
                      dragging: String(F(x)) === String(ae.id),
                      "is-drag-over": String(F(B)) === String(ae.id),
                      "drag-pos": F($),
                      onDragstart: j,
                      onDragover: A,
                      onDragleave: (Se) => {
                        String(F(B)) === String(ae.id) && (wt(B) ? B.value = null : B = null, wt($) ? $.value = null : $ = null);
                      },
                      onDrop: Y
                    }, {
                      default: te(() => [
                        ae.icon ? (r(), Z(le, {
                          key: 0,
                          name: ae.icon,
                          size: "20",
                          class: "rail-icon mr-2"
                        }, null, 8, ["name"])) : v("", !0),
                        c("span", ya, T(ae.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["id", "href", "draggable", "dragging", "is-drag-over", "drag-pos", "onDragleave"]))), 128))
                  ], 2), [
                    [Oe, f(q.group)]
                  ])
                ], 2))), 128))
              ])) : (r(), a("div", ba, [
                D(P.$slots, "default", {}, void 0, !0)
              ]))
            ]),
            c("div", ha, [
              D(P.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ], 14, na)
      ]);
    };
  }
}, wa = /* @__PURE__ */ fe(xa, [["__scopeId", "data-v-5da8f8e8"]]), ka = ["data-drawer-item-id", "draggable"], Sa = ["href"], Ca = {
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
    const t = e, l = n, o = (I) => {
      t.draggable && (I.dataTransfer.setData("text/plain", String(t.id)), l("dragstart", { id: t.id, event: I }));
    }, s = (I) => {
      t.draggable && l("dragover", { id: t.id, event: I });
    }, b = (I) => {
      l("dragleave", { id: t.id, event: I });
    }, y = (I) => {
      const p = I.dataTransfer.getData("text/plain");
      l("drop", { id: t.id, sourceId: p, event: I });
    }, k = (I) => {
      l("click", { id: t.id, event: I });
    };
    return (I, p) => (r(), a("li", {
      "data-drawer-item-id": e.id,
      draggable: e.draggable,
      class: g([
        "nav-drawer-item flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors",
        "hover:bg-color-2",
        e.dragging ? "opacity-50" : "",
        e.isDragOver && e.dragPos === "before" ? "border-t-2 border-color-1" : "",
        e.isDragOver && e.dragPos === "after" ? "border-b-2 border-color-1" : ""
      ]),
      onDragstart: o,
      onDragover: ee(s, ["prevent"]),
      onDragleave: b,
      onDrop: ee(y, ["prevent"]),
      onClick: k
    }, [
      e.href ? (r(), a("a", {
        key: 0,
        href: e.href,
        class: "flex items-center w-full"
      }, [
        D(I.$slots, "default", {}, void 0, !0)
      ], 8, Sa)) : D(I.$slots, "default", { key: 1 }, void 0, !0)
    ], 42, ka));
  }
}, Dt = /* @__PURE__ */ fe(Ca, [["__scopeId", "data-v-464014e1"]]), $a = {
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
    const t = e, l = n, o = L(100);
    let s = null;
    const b = i(() => {
      const p = {
        default: "bg-color-2 text-ui-text-color border-color",
        success: "bg-green-50 text-success border-green-400",
        error: "bg-red-50 text-error border-red-400",
        warning: "bg-yellow-50 text-warning border-yellow-400",
        info: "bg-blue-50 text-info border-blue-400"
      };
      return p[t.variant] || p.default;
    }), y = i(() => {
      if (t.icon && !["success", "error", "warning", "info"].includes(t.icon))
        return t.icon;
      const p = {
        success: "check-circle",
        error: "x-circle",
        warning: "exclamation-triangle",
        info: "information-circle",
        default: "bell"
      };
      return p[t.variant] || p.default;
    }), k = () => {
      l("update:modelValue", !1), l("close");
    }, I = () => {
      l("action"), t.onAction && t.onAction();
    };
    return pe(() => t.modelValue, (p) => {
      if (p && t.showProgress && t.timeout > 0) {
        o.value = 100;
        const f = 50, u = 100 / t.timeout * f;
        s = setInterval(() => {
          o.value -= u, o.value <= 0 && (clearInterval(s), o.value = 0);
        }, f);
      }
    }, { immediate: !0 }), ze(() => {
      s && clearInterval(s);
    }), (p, f) => {
      const u = ve("Icon");
      return r(), Z(xe, {
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
            class: g([
              "min-w-[300px] max-w-md rounded-lg shadow-lg border",
              "flex items-start gap-3 pointer-events-auto",
              b.value,
              e.multiline ? "flex-col p-4" : "items-center px-4 py-3"
            ]),
            role: "alert"
          }, [
            e.icon || e.variant !== "default" ? (r(), a("div", $a, [
              K(u, {
                name: y.value,
                size: 20,
                color: "text-current"
              }, null, 8, ["name"])
            ])) : v("", !0),
            c("div", za, [
              e.title ? (r(), a("h3", Ba, T(e.title), 1)) : v("", !0),
              c("p", {
                class: g(["text-sm", e.multiline ? "" : "truncate"])
              }, T(e.message), 3)
            ]),
            e.action ? (r(), a("button", {
              key: 1,
              onClick: I,
              class: "flex-shrink-0 px-3 py-1 text-sm font-medium rounded hover:bg-black/10 transition-colors"
            }, T(e.action), 1)) : v("", !0),
            e.closeable ? (r(), a("button", {
              key: 2,
              onClick: k,
              class: "flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
            }, [
              K(u, {
                name: "x-mark",
                size: 16,
                color: "text-current"
              })
            ])) : v("", !0),
            e.showProgress && e.timeout > 0 ? (r(), a("div", Ia, [
              c("div", {
                class: "h-full bg-current transition-all ease-linear",
                style: ce({ width: o.value + "%" })
              }, null, 4)
            ])) : v("", !0)
          ], 2)) : v("", !0)
        ]),
        _: 1
      });
    };
  }
}, Ta = /* @__PURE__ */ fe(Va, [["__scopeId", "data-v-5076a311"]]), Ma = {
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
}, Ea = ["onClick", "onKeydown"], Oa = {
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
    const { language: t } = ge("i18n", { language: L("en"), t: (d) => d, setLanguage: () => {
    } }), l = e, o = i(() => l.rtl ?? Le.value), s = nt(), b = i(() => !!s.item), y = i(() => !!s.default), k = i(() => l.dotSize === "sm" ? 10 : l.dotSize === "lg" ? 16 : 12), I = i(() => l.gap ?? 16);
    function p(d) {
      if (l.direction === "horizontal") return "bottom";
      if (l.side === "one")
        return o.value ? "right" : "left";
      const x = (l.alternate ? d % 2 === 0 : !0) ? "left" : "right";
      return o.value ? x === "left" ? "right" : "left" : x;
    }
    function f(d) {
      return l.direction === "horizontal" ? {} : l.side === "one" ? {
        maxWidth: "100%",
        marginLeft: "0",
        marginRight: "0",
        marginInlineStart: I.value + "px",
        marginInlineEnd: "0"
      } : p(d) === "left" ? {
        maxWidth: "50%",
        marginLeft: "0",
        marginRight: "calc(50% + 16px)"
      } : {
        maxWidth: "50%",
        marginRight: "0",
        marginLeft: "calc(50% + 16px)"
      };
    }
    function u(d) {
      switch (d.status ?? "default") {
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
    const m = n;
    return (d, z) => (r(), a("div", {
      class: g(["relative ui-text-color", [
        e.direction === "vertical" ? "py-2" : "py-6 px-2"
      ]])
    }, [
      c("div", {
        class: g([
          "absolute top-0 bottom-0 w-0.5 bg-color-4",
          e.direction === "vertical" && e.side === "both" ? "left-1/2 -translate-x-1/2" : "",
          e.direction === "horizontal" ? "left-0 right-0 h-0.5 w-full" : "h-full",
          e.lineStyle === "dashed" ? "timeline-dashed-line" : ""
        ]),
        style: ce({
          top: e.direction === "horizontal" ? `calc(24px + (${k.value}px / 2))` : "0",
          ...e.direction === "vertical" && e.side === "one" ? o.value ? { right: `${k.value / 2 - 1}px` } : { left: `${k.value / 2 - 1}px` } : {}
        })
      }, null, 6),
      e.direction === "vertical" ? (r(), a("div", Ma, [
        (r(!0), a(oe, null, ue(e.items, (x, B) => (r(), a("div", {
          key: x.id ?? B,
          class: g([
            "relative clear-both",
            e.condensed ? "mb-3" : "mb-6"
          ])
        }, [
          c("div", {
            class: g([
              "absolute rounded-full border border-solid shadow-sm",
              u(x),
              e.side === "one" ? o.value ? "right-0" : "left-0" : "left-1/2 -translate-x-1/2"
            ]),
            style: ce({
              width: k.value + "px",
              height: k.value + "px",
              borderColor: "var(--color-1)",
              top: "0.5rem"
            })
          }, null, 6),
          c("div", {
            class: g([
              "border border-color-2 rounded-md py-3 px-4 transition-all",
              "align-" + e.align,
              e.clickable ? "cursor-pointer hover:shadow-md" : "",
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg"
            ]),
            style: ce({
              background: "var(--color-2)",
              ...f(B)
            }),
            role: "group",
            tabindex: "0",
            onClick: ($) => m("item-click", { item: x, index: B }),
            onKeydown: [
              ye(ee(($) => m("item-click", { item: x, index: B }), ["prevent"]), ["enter"]),
              ye(ee(($) => m("item-click", { item: x, index: B }), ["prevent"]), ["space"])
            ]
          }, [
            b.value ? D(d.$slots, "item", {
              key: 0,
              item: x,
              index: B
            }, void 0, !0) : y.value ? D(d.$slots, "default", {
              key: 1,
              item: x,
              index: B
            }, void 0, !0) : (r(), a(oe, { key: 2 }, [
              x.title ? (r(), a("div", Aa, T(x.title), 1)) : v("", !0),
              x.time ? (r(), a("div", Pa, T(x.time), 1)) : v("", !0),
              x.content ? (r(), a("div", Da, T(x.content), 1)) : v("", !0)
            ], 64))
          ], 46, La)
        ], 2))), 128))
      ])) : (r(), a("div", {
        key: 1,
        class: g(["flex gap-6 items-start justify-between relative", [e.equalizeCards ? "items-stretch" : ""]])
      }, [
        (r(!0), a(oe, null, ue(e.items, (x, B) => (r(), a("div", {
          key: x.id ?? B,
          class: "relative flex flex-col flex-1 pt-6"
        }, [
          c("div", {
            class: g([
              "absolute rounded-full border border-solid shadow-sm left-1/2 -translate-x-1/2 top-0",
              u(x)
            ]),
            style: ce({
              width: k.value + "px",
              height: k.value + "px",
              borderColor: "var(--color-1)"
            })
          }, null, 6),
          c("div", {
            class: g([
              "border border-solid border-color rounded-md py-3 px-4 mt-4 transition-all",
              "align-" + e.align,
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg",
              e.equalizeCards ? "flex-1" : ""
            ]),
            style: { background: "var(--color-2)" },
            role: "group",
            tabindex: "0",
            onClick: ($) => m("item-click", { item: x, index: B }),
            onKeydown: [
              ye(ee(($) => m("item-click", { item: x, index: B }), ["prevent"]), ["enter"]),
              ye(ee(($) => m("item-click", { item: x, index: B }), ["prevent"]), ["space"])
            ]
          }, [
            b.value ? D(d.$slots, "item", {
              key: 0,
              item: x,
              index: B
            }, void 0, !0) : y.value ? D(d.$slots, "default", {
              key: 1,
              item: x,
              index: B
            }, void 0, !0) : (r(), a(oe, { key: 2 }, [
              x.title ? (r(), a("div", Oa, T(x.title), 1)) : v("", !0),
              x.time ? (r(), a("div", ja, T(x.time), 1)) : v("", !0),
              x.content ? (r(), a("div", Na, T(x.content), 1)) : v("", !0)
            ], 64))
          ], 42, Ea)
        ]))), 128))
      ], 2))
    ], 2));
  }
}, Ha = /* @__PURE__ */ fe(Ra, [["__scopeId", "data-v-0987c29e"]]), Ua = { class: "v-timeline-item" }, Fa = { class: "v-timeline-item__opposite py-2 px-4" }, qa = {
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
    const n = ge("timeline", null);
    return i(() => ({
      "v-timeline-item": !0,
      "v-timeline-item--alternate": n?.align === "alternate"
    })), (t, l) => (r(), a("div", Ua, [
      c("div", Fa, [
        D(t.$slots, "opposite", {}, void 0, !0)
      ]),
      e.hideDot ? v("", !0) : (r(), a("div", {
        key: 0,
        class: "v-timeline-item__dot rounded-full mt-3",
        style: ce({ background: e.color })
      }, [
        D(t.$slots, "icon", {}, () => [
          e.icon ? (r(), a("span", qa, T(e.icon), 1)) : v("", !0)
        ], !0)
      ], 4)),
      c("div", Wa, [
        D(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, Ga = /* @__PURE__ */ fe(Ka, [["__scopeId", "data-v-6b3c0fc8"]]), Ya = ["id", "dir"], Xa = ["aria-orientation", "aria-label"], Ja = ["id", "aria-selected", "aria-controls", "tabindex", "disabled", "onClick", "onKeydown"], Qa = ["aria-label", "onClick"], Za = {
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
    )), s = L(`tabs-${Math.random().toString(36).substr(2, 9)}`), b = L(t.modelValue), y = L(null), k = L(!1), I = L(!1), p = i(() => Le.value), f = i(() => t.scrollable), u = i(() => f.value ? t.vertical ? "overflow-y-auto" : "overflow-x-auto" : "overflow-visible"), m = i(() => {
      const S = [];
      return t.variant === "default" ? t.vertical ? S.push("inline-flex flex-col h-auto items-stretch rounded-lg bg-color-2 p-1 ui-text-secondary") : S.push("inline-flex h-10 items-center justify-center rounded-lg bg-color-2 p-1 ui-text-secondary") : t.variant === "outline" ? t.vertical ? S.push("flex flex-col space-y-1 border-r border-color-3 pr-4") : S.push("border-b border-color-3") : t.variant === "pills" ? (S.push("flex gap-2"), t.vertical && S.push("flex-col")) : t.variant === "underline" && (t.vertical ? S.push("flex flex-col space-y-1 border-r-2 border-color-3 pr-4") : S.push("border-b-2 border-color-3")), t.fullWidth && !t.vertical && S.push("w-full"), S.join(" ");
    }), d = i(() => t.variant === "default" ? t.fullWidth ? "w-full" : "" : t.variant === "outline" || t.variant === "underline" ? t.vertical ? "" : t.fullWidth ? "w-full" : "inline-flex" : ""), z = i(() => f.value && t.contentHeight ? "flex-1 min-w-0 min-h-0 overflow-auto" : "flex-1 min-w-0"), x = i(() => {
      const S = {
        sm: "text-xs px-2.5 py-1.5",
        default: "text-sm px-3 py-2",
        lg: "text-base px-4 py-2.5"
      };
      return S[t.size] || S.default;
    }), B = i(() => {
      const S = {
        sm: "h-3.5 w-3.5",
        default: "h-4 w-4",
        lg: "h-5 w-5"
      };
      return S[t.size] || S.default;
    }), $ = i(() => {
      const S = {
        sm: "h-4 min-w-4 px-1 text-[10px]",
        default: "h-5 min-w-5 px-1.5 text-xs",
        lg: "h-6 min-w-6 px-2 text-xs"
      };
      return S[t.size] || S.default;
    }), U = (S) => {
      const V = b.value === S, C = o.value[S]?.disabled || t.disabled;
      let w = "font-medium ";
      return t.fullWidth && !t.vertical && (w += "flex-1 "), t.vertical && (w += "w-full justify-start "), t.variant === "default" ? (w += "rounded-md ", V ? w += "bg-color-1 ui-text-color shadow-sm " : C || (w += "hover:bg-color-3 hover:ui-text-color ")) : t.variant === "outline" ? t.vertical ? (w += "rounded-md border border-transparent ", V ? w += "border-color-3 bg-color-1 ui-text-color shadow-sm " : C || (w += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : (w += "border-b-2 -mb-[2px] rounded-none ", V ? w += "border-primary ui-text-color " : C || (w += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : t.variant === "pills" ? (w += "rounded-full ", V ? w += "bg-primary text-white shadow-sm " : C || (w += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : t.variant === "underline" && (t.vertical ? (w += "border-r-2 -mr-[2px] rounded-none pr-4 ", V ? w += "border-primary ui-text-color " : C || (w += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : (w += "border-b-2 -mb-[2px] rounded-none ", V ? w += "border-primary ui-text-color " : C || (w += "border-transparent ui-text-secondary hover:ui-text-color "))), w;
    }, j = (S) => {
      const V = String(S?.badgeVariant || "").toLowerCase();
      return V.includes("error") || V.includes("danger") || V.includes("red") ? "bg-red-500 text-white" : V.includes("success") || V.includes("green") ? "bg-green-500 text-white" : V.includes("warning") || V.includes("yellow") ? "bg-yellow-500 text-white" : V.includes("info") || V.includes("blue") ? "bg-blue-500 text-white" : V.includes("secondary") ? "bg-color-3 ui-text-color" : "bg-primary text-white";
    }, A = i(() => {
      const S = {
        sm: "mt-3",
        default: "mt-4",
        lg: "mt-6"
      };
      return t.vertical ? "pl-0" : S[t.size] || S.default;
    }), Y = (S) => {
      o.value[S]?.disabled || t.disabled || (b.value = S, l("update:modelValue", S), l("change", S), f.value && Ae(() => {
        const H = document.getElementById(`tab-${s.value}-${S}`), C = y.value;
        if (H && C) {
          const w = H.offsetLeft, h = w + H.offsetWidth, O = C.scrollLeft, W = O + C.clientWidth;
          w < O ? C.scrollTo({ left: w - 8, behavior: "smooth" }) : h > W && C.scrollTo({ left: h - C.clientWidth + 8, behavior: "smooth" });
        }
      }));
    }, X = (S) => {
      l("close", S);
    }, M = (S, V) => {
      l("keydown", S, V);
      const H = o.value.length;
      let C = V;
      const w = (h, O) => {
        let W = h;
        for (let de = 0; de < H; de++)
          if (W = (W + O + H) % H, !o.value[W]?.disabled)
            return W;
        return h;
      };
      switch (S.key) {
        case "ArrowDown":
          t.vertical && (S.preventDefault(), C = w(V, 1));
          break;
        case "ArrowUp":
          t.vertical && (S.preventDefault(), C = w(V, -1));
          break;
        case "ArrowRight":
          t.vertical || (S.preventDefault(), C = w(V, p.value ? -1 : 1));
          break;
        case "ArrowLeft":
          t.vertical || (S.preventDefault(), C = w(V, p.value ? 1 : -1));
          break;
        case "Home":
          S.preventDefault(), C = w(-1, 1);
          break;
        case "End":
          S.preventDefault(), C = w(H, -1);
          break;
      }
      C !== V && (Y(C), document.getElementById(`tab-${s.value}-${C}`)?.focus());
    }, G = (S) => {
      if (!y.value || !f.value) return;
      const V = Math.max(200, y.value.clientWidth * 0.5);
      y.value.scrollBy({ left: S * V, behavior: "smooth" });
    }, re = () => {
      if (!y.value || !f.value) {
        k.value = !1, I.value = !1;
        return;
      }
      const { scrollLeft: S, scrollWidth: V, clientWidth: H } = y.value;
      k.value = S > 0, I.value = S < V - H - 10;
    };
    pe(
      () => t.modelValue,
      (S) => {
        b.value = S;
      }
    );
    let E = null;
    const N = () => {
      !y.value || !f.value || (Ae(re), y.value.addEventListener("scroll", re), typeof ResizeObserver < "u" && (E = new ResizeObserver(re), E.observe(y.value)));
    }, J = () => {
      y.value && y.value.removeEventListener("scroll", re), E && (E.disconnect(), E = null);
    };
    return pe(f, (S) => {
      J(), S && N();
    }), Ve(() => {
      f.value && N();
    }), ze(() => {
      J();
    }), (S, V) => (r(), a("div", {
      id: s.value,
      dir: p.value ? "rtl" : "ltr",
      class: g([
        e.vertical ? "flex flex-row gap-6" : "flex flex-col",
        e.scrollable && e.contentHeight ? e.contentHeight : "",
        e.scrollable ? "" : "h-auto"
      ])
    }, [
      c("div", {
        ref_key: "scrollContainer",
        ref: y,
        role: "tablist",
        "aria-orientation": e.vertical ? "vertical" : "horizontal",
        "aria-label": e.ariaLabel,
        class: g([
          "relative flex-shrink-0",
          u.value,
          m.value
        ])
      }, [
        c("div", {
          class: g([
            "flex",
            e.vertical ? "flex-col space-y-1" : e.scrollable ? "flex-row whitespace-nowrap" : "flex-row flex-wrap",
            d.value
          ])
        }, [
          (r(!0), a(oe, null, ue(o.value, (H, C) => (r(), a("button", {
            id: `tab-${s.value}-${C}`,
            key: C,
            role: "tab",
            type: "button",
            "aria-selected": b.value === C,
            "aria-controls": `panel-${s.value}-${C}`,
            tabindex: b.value === C ? 0 : -1,
            disabled: H.disabled || e.disabled,
            class: g([
              "relative inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-50",
              x.value,
              U(C)
            ]),
            onClick: (w) => Y(C),
            onKeydown: (w) => M(w, C)
          }, [
            H.icon ? (r(), Z(je(H.icon), {
              key: 0,
              class: g(B.value)
            }, null, 8, ["class"])) : v("", !0),
            c("span", null, T(H.label), 1),
            H.badge ? (r(), a("span", {
              key: 1,
              class: g([
                "inline-flex items-center justify-center rounded-full text-xs font-medium",
                $.value,
                j(H)
              ])
            }, T(H.badge), 3)) : v("", !0),
            e.closable && !H.disabled ? (r(), a("button", {
              key: 2,
              type: "button",
              "aria-label": `Close ${H.label}`,
              class: "ml-1 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              onClick: ee((w) => X(C), ["stop"])
            }, [...V[2] || (V[2] = [
              c("svg", {
                class: "h-3.5 w-3.5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, Qa)) : v("", !0)
          ], 42, Ja))), 128))
        ], 2),
        !e.vertical && e.scrollable && e.showScrollButtons && (k.value || I.value) ? (r(), a("div", Za, [
          k.value ? (r(), a("button", {
            key: 0,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: V[0] || (V[0] = (H) => G(-1))
          }, [...V[3] || (V[3] = [
            c("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              c("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ])])) : v("", !0),
          I.value ? (r(), a("button", {
            key: 1,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: V[1] || (V[1] = (H) => G(1))
          }, [...V[4] || (V[4] = [
            c("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              c("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ])])) : v("", !0)
        ])) : v("", !0)
      ], 10, Xa),
      c("div", {
        class: g(z.value)
      }, [
        (r(!0), a(oe, null, ue(o.value, (H, C) => (r(), a(oe, { key: C }, [
          !e.lazy || b.value === C ? Ie((r(), a("div", {
            key: 0,
            id: `panel-${s.value}-${C}`,
            role: "tabpanel",
            "aria-labelledby": `tab-${s.value}-${C}`,
            tabindex: 0,
            class: g(["focus-visible:outline-none", A.value])
          }, [
            D(S.$slots, `content-${C}`, { tab: H }, () => [
              me(T(H.content), 1)
            ])
          ], 10, _a)), [
            [Oe, b.value === C]
          ]) : v("", !0)
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
    const n = L(!1);
    Ve(() => {
      const o = localStorage.getItem("theme");
      o ? n.value = o === "dark" : n.value = window.matchMedia("(prefers-color-scheme: dark)").matches, t();
    }), pe(n, () => {
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
        c("path", {
          d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
          stroke: "currentColor",
          "stroke-width": "2",
          fill: "currentColor"
        }, null, -1)
      ])])),
      c("span", ro, T(n.value ? "Switch to light mode" : "Switch to dark mode"), 1)
    ], 8, to));
  }
}), oo = /* @__PURE__ */ fe(ao, [["__scopeId", "data-v-8069750e"]]), so = {
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
      class: g(["flex items-center justify-between gap-4", e.bg, e.border, F(we)[e.rounded], e.padding, e.margin, e.width, e.height, e.elevation])
    }, [
      D(n.$slots, "title", {}, () => [
        e.title ? (r(), a("h1", {
          key: 0,
          class: g([n.textClass ?? "text-2xl font-semibold md:text-nowrap md:whitespace-nowrap"])
        }, T(e.title), 3)) : v("", !0)
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
      c("table", be({ class: "w-full caption-bottom text-sm" }, n.$attrs), [
        D(n.$slots, "default")
      ], 16)
    ]));
  }
}), co = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "TableHead",
  setup(e) {
    return (n, t) => (r(), a("thead", be({ class: "bg-color-1 [&_tr]:border-b [&_tr]:border-color-3" }, n.$attrs), [
      D(n.$slots, "default")
    ], 16));
  }
}), fo = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "TableBody",
  setup(e) {
    return (n, t) => (r(), a("tbody", be({ class: "[&_tr:last-child]:border-0 divide-y divide-color-3" }, n.$attrs), [
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
    return (n, t) => (r(), a("tr", be({
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
    return (s, b) => (r(), a("th", be({
      class: ["h-11 px-4 align-middle text-xs font-semibold uppercase tracking-wider ui-text-secondary whitespace-nowrap", [
        o.value,
        e.sortable ? "cursor-pointer select-none hover:text-foreground group" : ""
      ]]
    }, s.$attrs, {
      onClick: b[0] || (b[0] = (y) => e.sortable ? l("sort") : void 0)
    }), [
      c("div", po, [
        D(s.$slots, "default"),
        e.sortable ? (r(), a("span", vo, [
          e.sortDirection === "asc" ? (r(), a("svg", yo, [...b[1] || (b[1] = [
            c("path", {
              "fill-rule": "evenodd",
              d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.sortDirection === "desc" ? (r(), a("svg", bo, [...b[2] || (b[2] = [
            c("path", {
              "fill-rule": "evenodd",
              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : (r(), a("svg", ho, [...b[3] || (b[3] = [
            c("path", { d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" }, null, -1),
            c("path", {
              "fill-rule": "evenodd",
              d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])]))
        ])) : v("", !0)
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
    return (l, o) => (r(), a("td", be({
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
      c("td", {
        colspan: e.colspan ?? 99,
        class: "px-4 py-12 text-center"
      }, [
        c("div", So, [
          n.$slots.icon ? v("", !0) : (r(), a("svg", Co, [...t[0] || (t[0] = [
            c("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75c-.621 0-1.125.504-1.125 1.125"
            }, null, -1)
          ])])),
          D(n.$slots, "icon"),
          c("span", $o, T(e.message ?? "No results found."), 1),
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
    return (n, t) => (r(!0), a(oe, null, ue(e.rows ?? 5, (l) => (r(), a("tr", {
      key: l,
      class: "border-b border-color-3 animate-pulse"
    }, [
      (r(!0), a(oe, null, ue(e.cols ?? 4, (o) => (r(), a("td", {
        key: o,
        class: "px-4 py-3"
      }, [
        c("div", {
          class: "h-4 rounded bg-color-2",
          style: ce({ width: `${55 + Math.floor((l * 7 + o * 3) % 5 * 10)}%` })
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
    size: { type: String, default: () => he("Base", "size") },
    id: { type: String, default: "" },
    width: { type: String, default: "w-full" },
    border: { type: String, default: "border-color-2" },
    textColor: { type: String, default: "ui-text-secondary " },
    margin: { type: String, default: "" },
    bg: { type: String, default: "bg-color-1" },
    hover: { type: String, default: "hover:border-color-3" },
    focus: { type: String, default: "focus:border-color-4" },
    rounded: { type: String, default: () => he("Base", "rounded") },
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
    const { language: t } = ge("i18n", { language: L("en"), t: (w) => w, setLanguage: () => {
    } }), l = nt(), o = n, s = e, b = ge("formContext", null), k = Ft()?.uid, I = L(!1), p = L(!1), f = L([]), u = L(!1), m = i(() => s.focused !== void 0 ? s.focused : I.value), d = i(() => {
      if (s.error === !0 || s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0) return !0;
      if (s.errorMessage && s.errorMessage !== "") {
        if (Array.isArray(s.errorMessage))
          return s.errorMessage.length > 0;
        if (typeof s.errorMessage == "string")
          return s.errorMessage.trim() !== "";
      }
      return !!(u.value && f.value && f.value.length > 0);
    }), z = i(() => s.required ? !0 : Array.isArray(s.rules) && s.rules.includes(ft.required)), x = i(() => s.modelValue === null || s.modelValue === void 0 || s.modelValue === "" ? !1 : Array.isArray(s.modelValue) ? s.modelValue.length > 0 : (typeof s.modelValue == "boolean", !0)), B = i(() => {
      const w = [];
      return s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0 && w.push(...s.errorMessages), s.errorMessage && (Array.isArray(s.errorMessage) && s.errorMessage.length > 0 ? w.push(...s.errorMessage) : typeof s.errorMessage == "string" && s.errorMessage.trim() !== "" && w.push(s.errorMessage)), u.value && f.value && f.value.length > 0 && w.push(...f.value), w;
    });
    function $() {
      if (f.value = [], !s.rules || s.rules.length === 0) return !0;
      for (const w of s.rules) {
        const h = w(s.modelValue);
        h !== !0 && f.value.push(h);
      }
      return f.value.length === 0;
    }
    const U = i(() => {
      let w = "";
      return s.dir == "rtl" || s.lang == "dv" ? w = "rtl" : s.dir == "ltr" || s.lang == "en" ? w = "ltr" : w = "", w;
    }), j = i(() => {
      let w = "";
      return s.lang != "" ? w = s.lang : s.dir == "rtl" ? w = "dv" : s.dir == "ltr" ? w = "en" : w = t.value, w === "dv" ? "dv" : "en";
    }), A = i(() => j.value == "dv" ? "faruma" : ""), Y = i(() => {
      let w = Ge(s.label, j.value, "");
      return typeof w == "object" && w !== null && "label" in w ? w : null;
    }), X = i(() => {
      const w = {
        disabled: s.disabled,
        readonly: s.readonly,
        value: s.modelValue,
        required: z.value,
        "aria-invalid": d.value,
        dir: U.value
      };
      return s.id && (w.id = s.id), w;
    }), M = {
      input: (w) => V(w.target ? w.target.value : w),
      focus: J,
      blur: S,
      change: (w) => o("change", w.target ? w.target.value : w)
    }, G = i(() => I.value || x.value || s.isOpen ? "-top-[1px]" : "top-[48%]"), re = i(() => {
      let w = "", h = "";
      return s.size === "xs" ? (h = "text-xs", w = s.prepend || l.prepend ? "inset-4" : "inset-3") : s.size === "sm" ? (h = "text-sm", w = s.prepend || l.prepend ? "inset-8" : "inset-3") : s.size === "md" ? (h = "text-md", w = s.prepend || l.prepend ? "inset-10" : "inset-3") : s.size === "lg" ? (h = "text-lg", w = s.prepend || l.prepend ? "inset-12" : "inset-3") : s.size === "xl" ? (h = "text-lg", w = s.prepend || l.prepend ? "inset-14" : "inset-3") : (h = "text-sm", w = s.prepend || l.prepend ? "inset-8" : "inset-3"), (m.value || x.value || s.isOpen) && (j.value === "dv" ? w = "right-8" : w = "left-8", h = "text-xs"), w + " " + h;
    }), E = i(() => {
      const w = ["absolute flex gap-1 px-2 items-center transition-all pointer-events-none h-[1px]", re.value, G.value];
      return m.value || x.value || s.isOpen ? w.push("bg-inherit") : w.push("bg-transparent"), d.value ? w.push("text-error") : m.value ? w.push("border-input-focus-border") : w.push("text-input-text"), w;
    }), N = i(() => {
      if (s.hideDetails) return [];
      if (d.value) return B.value;
      if (s.messages) {
        if (Array.isArray(s.messages))
          return s.messages.filter((w) => w && w.trim && w.trim() !== "");
        if (typeof s.messages == "string" && s.messages.trim() !== "")
          return [s.messages];
      }
      return s.hint && s.hint.trim() !== "" && (s.persistentHint || m.value) ? [s.hint] : [];
    });
    function J(w) {
      I.value = !0, o("focus", w);
    }
    function S(w) {
      if (I.value = !1, u.value = !0, b?.validateOn?.value) {
        const h = b.validateOn.value;
        if (h === "blur" || Array.isArray(h) && h.includes("blur")) {
          const W = $();
          b.validate && b.validate(k, W, f.value);
        }
      } else
        $();
      o("blur", w);
    }
    function V(w) {
      o("update:modelValue", w);
    }
    function H() {
      f.value = [], p.value = !1, u.value = !1;
    }
    const C = () => {
      const w = s.multiple ? [] : "";
      o("update:modelValue", w), o("change", w), o("click:clear");
    };
    return Ve(() => {
      b && b.register(k, {
        validate: () => {
          const w = $(), h = w ? [] : f.value;
          return b.validate && b.validate(k, w, h), w;
        },
        reset: () => {
          o("update:modelValue", s.multiple ? [] : ""), H();
        },
        resetValidation: () => {
          f.value = [], p.value = !1;
        }
      });
    }), pe(
      () => s.isOpen,
      (w, h) => {
        if (h === !0 && w === !1) {
          u.value = !0;
          const O = $();
          b?.validate && b.validate(k, O, f.value);
        }
      }
    ), ze(() => {
      b && b.unregister(k);
    }), (w, h) => {
      const O = ve("Icon");
      return r(), a("div", {
        dir: U.value !== "" ? U.value : "",
        class: g([A.value, e.margin, e.width, "group/select overflow-visible "])
      }, [
        c("div", {
          class: g([
            "relative border focus:outline-none transition cursor-pointer flex items-center justify-between gap-2 ",
            e.width,
            s.height || F(Jt)[e.size],
            F(vt)[e.size],
            d.value ? "border-red-500" : ` ${e.border}`,
            e.disabled ? "bg-color-2 cursor-not-allowed" : `${e.bg} ${e.hover} ${e.focus}`,
            e.isOpen && !d.value ? "border-color-4" : "",
            !e.isOpen && !d.value ? "border-color-2" : "",
            e.rounded ? F(we)[e.rounded] : "",
            e.textColor
          ])
        }, [
          e.label ? (r(), a("div", {
            key: 0,
            class: g(E.value),
            "aria-hidden": "true"
          }, [
            me(T(Y.value ? Y.value.label : e.label) + " ", 1),
            z.value ? (r(), a("span", Vo, "*")) : v("", !0)
          ], 2)) : v("", !0),
          c("div", To, [
            w.$slots.prepend || e.prepend ? (r(), a("div", Mo, [
              D(w.$slots, "prepend", {}, () => [
                K(O, {
                  size: F(Pe)[e.size],
                  name: e.prepend,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : v("", !0),
            c("div", Lo, [
              D(w.$slots, "control", {
                attrs: X.value,
                events: M
              })
            ])
          ]),
          c("div", Ao, [
            e.clearable && x.value && !e.disabled ? (r(), a("button", {
              key: 0,
              class: "hover:text-input-focus-border text-input-text flex items-center invisible group-hover/select:visible transition-all cursor-pointer",
              title: "Clear selection",
              type: "button",
              onClick: ee(C, ["stop"])
            }, [...h[0] || (h[0] = [
              c("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-4"
              }, [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ])])) : v("", !0),
            w.$slots.append || e.append ? (r(), a("div", Po, [
              D(w.$slots, "append", {}, () => [
                K(O, {
                  size: F(Pe)[e.size],
                  name: e.append,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : v("", !0)
          ])
        ], 2),
        N.value.length ? (r(), a("div", {
          key: 0,
          class: g(["mt-1 text-xs", j.value === "dv" ? "text-right" : "text-left", "ui-text-secondary"])
        }, [
          (r(!0), a(oe, null, ue(N.value, (W, de) => (r(), a("div", {
            key: de,
            class: g(d.value ? "text-red-500" : "")
          }, T(F(Ge)(W, j.value, "")), 3))), 128))
        ], 2)) : v("", !0)
      ], 10, Io);
    };
  }
}, Do = {
  key: 0,
  class: "flex flex-col"
}, Eo = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, Oo = {
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
      let m;
      if (Array.isArray(t.modelValue)) {
        m = [...t.modelValue];
        const d = m.indexOf(t.value);
        d === -1 ? m.push(t.value) : m.splice(d, 1);
      } else
        m = t.modelValue === t.trueValue ? t.falseValue : t.trueValue;
      l("update:modelValue", m), l("change", m);
    }, b = i(() => {
      const m = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return m[t.size] || m.md;
    }), y = i(() => {
      const m = {
        xs: "w-2.5 h-2.5",
        sm: "w-3 h-3",
        md: "w-3.5 h-3.5",
        lg: "w-4 h-4",
        xl: "w-5 h-5"
      };
      return m[t.size] || m.md;
    }), k = i(() => {
      const m = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return m[t.size] || m.md;
    }), I = i(() => {
      const m = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return m[t.size] || m.md;
    }), p = i(() => {
      const m = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        full: "rounded-full"
      };
      return m[t.rounded] || m.md;
    }), f = i(() => {
      const m = {
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
      return m[t.color] || m.primary;
    }), u = i(() => t.error ? o.value || t.indeterminate ? "bg-red-500 border-red-500" : "border-red-500 hover:border-red-600" : o.value || t.indeterminate ? f.value.checked : t.disabled ? "border-color-3 bg-color-2" : f.value.unchecked);
    return (m, d) => (r(), a("div", {
      class: g(["relative", e.margin])
    }, [
      c("label", {
        class: g([
          "inline-flex items-start gap-3 cursor-pointer select-none",
          e.disabled ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        c("div", {
          class: g([
            "flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200",
            b.value,
            p.value,
            u.value,
            e.disabled ? "cursor-not-allowed" : "cursor-pointer"
          ])
        }, [
          K(xe, { name: "scale" }, {
            default: te(() => [
              o.value && !e.indeterminate ? (r(), a("svg", {
                key: 0,
                class: g(["text-white", y.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...d[0] || (d[0] = [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])], 2)) : v("", !0)
            ]),
            _: 1
          }),
          K(xe, { name: "scale" }, {
            default: te(() => [
              e.indeterminate ? (r(), a("svg", {
                key: 0,
                class: g(["text-white", y.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...d[1] || (d[1] = [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 12h14"
                }, null, -1)
              ])], 2)) : v("", !0)
            ]),
            _: 1
          })
        ], 2),
        e.label || e.description || m.$slots.default ? (r(), a("div", Do, [
          e.label || m.$slots.default ? (r(), a("span", {
            key: 0,
            class: g([
              "ui-text-color leading-tight",
              k.value
            ])
          }, [
            D(m.$slots, "default", {}, () => [
              me(T(e.label), 1)
            ], !0),
            e.required ? (r(), a("span", Eo, "*")) : v("", !0)
          ], 2)) : v("", !0),
          e.description ? (r(), a("span", {
            key: 1,
            class: g([
              "ui-text-secondary mt-0.5",
              I.value
            ])
          }, T(e.description), 3)) : v("", !0)
        ])) : v("", !0)
      ], 2),
      e.error ? (r(), a("p", Oo, T(typeof e.error == "string" ? e.error : ""), 1)) : v("", !0),
      e.hint && !e.error ? (r(), a("p", jo, T(e.hint), 1)) : v("", !0)
    ], 2));
  }
}, Et = /* @__PURE__ */ fe(No, [["__scopeId", "data-v-2c11cca3"]]), Ro = ["tabindex", "onKeydown"], Ho = {
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
      const d = {
        small: "px-2 py-1 text-xs min-h-6",
        default: "px-3 py-1.5 text-sm min-h-8",
        large: "px-4 py-2 text-base min-h-10"
      };
      return d[t.size] ? d[t.size] : t.size || d.default;
    }), s = i(() => t.rounded === "none" ? "rounded-none" : t.rounded === "sm" ? "rounded-sm" : t.rounded === "md" ? "rounded-md" : t.rounded === "lg" ? "rounded-lg" : t.rounded === "xl" ? "rounded-xl" : "rounded-full"), b = i(() => {
      if (t.bgColor || t.textColor || t.borderColor) {
        const x = t.bgColor || "bg-gray-100", B = t.textColor || "text-gray-800", $ = t.borderColor ? `border ${t.borderColor}` : "";
        return t.variant === "outlined" ? `bg-transparent ${B} border ${$ || "border-gray-300"}` : `${x} ${B} ${$}`;
      }
      const d = {
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
      }, z = d[t.color];
      return z && z[t.variant] ? z[t.variant] : t.color ? t.color : d.primary.default;
    }), y = i(() => {
      const d = "font-medium";
      return t.textClass ? `${d} ${t.textClass}` : d;
    }), k = i(() => {
      const d = {
        small: "w-3 h-3",
        default: "w-4 h-4",
        large: "w-5 h-5"
      };
      return d[t.size] || d.default;
    }), I = i(() => {
      const d = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return `${d[t.size] || d.default} rounded-full object-cover`;
    }), p = i(() => {
      const d = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return d[t.size] || d.default;
    }), f = i(() => {
      const d = {
        small: "w-2.5 h-2.5",
        default: "w-3 h-3",
        large: "w-3.5 h-3.5"
      };
      return d[t.size] || d.default;
    }), u = () => {
      !t.disabled && t.clickable && l("click");
    }, m = () => {
      t.disabled || l("close");
    };
    return (d, z) => (r(), a("div", {
      class: g([
        "inline-flex items-center gap-2 transition-all duration-200 ease-in-out select-none",
        o.value,
        b.value,
        s.value,
        {
          "cursor-pointer hover:shadow-md": e.clickable,
          "opacity-60": e.disabled,
          "cursor-not-allowed": e.disabled
        },
        e.chipClass
      ]),
      tabindex: e.clickable && !e.disabled ? 0 : -1,
      onClick: u,
      onKeydown: [
        ye(u, ["enter"]),
        ye(ee(u, ["prevent"]), ["space"])
      ]
    }, [
      d.$slots.prepend || e.avatar || e.prependIcon ? (r(), a("div", Ho, [
        D(d.$slots, "prepend", {}, () => [
          e.avatar ? (r(), a("img", {
            key: 0,
            src: e.avatar,
            alt: e.avatarAlt,
            class: g(I.value)
          }, null, 10, Uo)) : e.prependIcon ? (r(), Z(je(e.prependIcon), {
            key: 1,
            class: g(k.value)
          }, null, 8, ["class"])) : (r(), a("svg", {
            key: 2,
            class: g(k.value),
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [...z[0] || (z[0] = [
            c("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }, null, -1),
            c("path", { d: "M12 6v6l4 2" }, null, -1)
          ])], 2))
        ], !0)
      ])) : v("", !0),
      c("div", Fo, [
        c("span", {
          class: g(["truncate", y.value])
        }, [
          D(d.$slots, "default", {}, () => [
            me(T(e.label), 1)
          ], !0)
        ], 2)
      ]),
      d.$slots.append || e.appendIcon || e.closable ? (r(), a("div", qo, [
        D(d.$slots, "append", {}, () => [
          e.closable ? (r(), a("button", {
            key: 0,
            type: "button",
            class: g([
              "inline-flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-1",
              p.value
            ]),
            disabled: e.disabled,
            onClick: ee(m, ["stop"]),
            onKeydown: [
              ye(ee(m, ["stop"]), ["enter"]),
              ye(ee(m, ["stop", "prevent"]), ["space"])
            ]
          }, [
            (r(), a("svg", {
              class: g(f.value),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...z[1] || (z[1] = [
              c("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              }, null, -1)
            ])], 2))
          ], 42, Wo)) : e.appendIcon ? (r(), Z(je(e.appendIcon), {
            key: 1,
            class: g(k.value)
          }, null, 8, ["class"])) : v("", !0)
        ], !0)
      ])) : v("", !0)
    ], 42, Ro));
  }
}, Ot = /* @__PURE__ */ fe(Ko, [["__scopeId", "data-v-87c674ac"]]), Go = ["aria-label"], Yo = {
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
      const p = {
        none: "gap-0",
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3",
        xl: "gap-4"
      };
      return p[t.gap] || p.md;
    }), s = i(() => {
      const p = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return p[t.justify] || p.start;
    }), b = (p, f) => typeof p == "object" && p[t.itemKey] ? p[t.itemKey] : typeof p == "object" && p.id ? p.id : f, y = (p) => typeof p == "string" ? p : typeof p == "object" ? p[t.itemText] || p.text || p.label || p.name || "" : String(p), k = (p, f) => {
      l("chip-click", { groupName: t.groupName, chip: p, index: f });
    }, I = (p, f) => {
      const u = [...t.chips];
      u.splice(f, 1), l("chip-close", { chip: p, index: f }), l("update:chips", u);
    };
    return (p, f) => (r(), a("div", {
      class: g([
        "flex flex-wrap",
        o.value,
        s.value,
        e.containerClass
      ]),
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (r(!0), a(oe, null, ue(e.chips, (u, m) => (r(), Z(F(Ot), {
        key: b(u, m),
        label: y(u),
        variant: u.variant || e.variant,
        color: u.color || e.color,
        size: u.size || e.size,
        rounded: u.rounded || e.rounded,
        clickable: u.clickable !== void 0 ? u.clickable : e.clickable,
        closable: u.closable !== void 0 ? u.closable : e.closable,
        disabled: u.disabled || e.disabled,
        avatar: u.avatar,
        "avatar-alt": u.avatarAlt,
        "prepend-icon": u.prependIcon,
        "append-icon": u.appendIcon,
        "chip-class": u.chipClass || e.chipClass,
        "text-class": u.textClass || e.textClass,
        "bg-color": u.bgColor || e.bgColor,
        "text-color": u.textColor || e.textColor,
        "border-color": u.borderColor || e.borderColor,
        onClick: (d) => k(u, m),
        onClose: (d) => I(u, m)
      }, He({ _: 2 }, [
        p.$slots.chip ? {
          name: "default",
          fn: te((d) => [
            D(p.$slots, "chip", be({ ref_for: !0 }, { ...d, chip: u, index: m }), void 0, !0)
          ]),
          key: "0"
        } : void 0,
        p.$slots.prepend ? {
          name: "prepend",
          fn: te((d) => [
            D(p.$slots, "prepend", be({ ref_for: !0 }, { ...d, chip: u, index: m }), void 0, !0)
          ]),
          key: "1"
        } : void 0,
        p.$slots.append ? {
          name: "append",
          fn: te((d) => [
            D(p.$slots, "append", be({ ref_for: !0 }, { ...d, chip: u, index: m }), void 0, !0)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["label", "variant", "color", "size", "rounded", "clickable", "closable", "disabled", "avatar", "avatar-alt", "prepend-icon", "append-icon", "chip-class", "text-class", "bg-color", "text-color", "border-color", "onClick", "onClose"]))), 128))
    ], 10, Go));
  }
}, jt = /* @__PURE__ */ fe(Yo, [["__scopeId", "data-v-045fbbbb"]]), Xo = {
  class: /* @__PURE__ */ g(["flex-1", "flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
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
    rounded: { type: String, default: () => he("DatePicker", "rounded") },
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
    enableTimePicker: { type: Boolean, default: !0 },
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
    const l = t, o = e, s = ge("parentDir", ""), b = ge("parentLang", "");
    ge("formContext", null);
    const y = i(() => o.dir || s), k = i(() => o.lang || b), I = i(() => {
      const C = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], w = {};
      return C.forEach((h) => {
        h in o && (w[h] = o[h]);
      }), w;
    }), p = L(!1), f = L(o.modelValue), u = L(""), m = L(null), d = L(null), z = L(null), x = L(!1), B = L(!1), $ = L({ position: "fixed", zIndex: 9999 }), U = () => {
      if (!d.value) return;
      const C = d.value.getBoundingClientRect();
      $.value = {
        position: "fixed",
        top: `${C.bottom + 4}px`,
        left: `${C.left}px`,
        zIndex: 9999
      };
    }, j = () => {
      p.value || (U(), p.value = !0, l("open"));
    }, A = (C, w) => {
      if (!C) return "";
      const h = new Date(C);
      if (isNaN(h.getTime())) return "";
      const O = h.getFullYear(), W = String(h.getMonth() + 1).padStart(2, "0"), de = String(h.getDate()).padStart(2, "0"), Be = String(h.getHours()).padStart(2, "0"), se = String(h.getMinutes()).padStart(2, "0");
      String(h.getSeconds()).padStart(2, "0");
      let Ce = w.replace("yyyy", O).replace("MM", W).replace("dd", de);
      return o.enableTimePicker && (Ce += ` ${Be}:${se}`), Ce;
    }, Y = (C, w) => {
      if (!C) return null;
      const h = C.split(" "), O = h[0], W = h[1];
      let de = null;
      const Be = w.includes("/") ? "/" : w.includes("-") ? "-" : "/", se = O.split(Be);
      if (w.startsWith("dd") ? se.length >= 3 && (de = new Date(se[2], se[1] - 1, se[0])) : w.startsWith("MM") ? se.length >= 3 && (de = new Date(se[2], se[0] - 1, se[1])) : w.startsWith("yyyy") && se.length >= 3 && (de = new Date(se[0], se[1] - 1, se[2])), de && W && o.enableTimePicker) {
        const Ce = W.split(":");
        Ce.length >= 2 && (de.setHours(parseInt(Ce[0], 10) || 0), de.setMinutes(parseInt(Ce[1], 10) || 0), Ce.length === 3 && de.setSeconds(parseInt(Ce[2], 10) || 0));
      }
      return de;
    }, X = i(() => {
      if (!o.modelValue) return "";
      if (o.range) {
        if (!Array.isArray(o.modelValue)) return "";
        const [C, w] = o.modelValue;
        return !C || !w ? "" : `${A(C, o.format)} - ${A(w, o.format)}`;
      }
      return A(o.modelValue, o.format);
    });
    pe(() => o.modelValue, (C) => {
      f.value = C, u.value = X.value;
    }, { immediate: !0 }), pe(f, (C) => {
      C && !isNaN(new Date(C).getTime()) && !x.value && Ae(() => {
        u.value = A(C, o.format);
      });
    });
    const M = (C) => {
    }, G = (C) => {
      x.value = !0, u.value = C.target.value;
      const w = o.format.includes("/") ? "/" : o.format.includes("-") ? "-" : "/", h = u.value.split(" ")[0].split(w);
      if (h.length === 3 && h.every((O) => O.length > 0)) {
        let O;
        if (o.format.startsWith("dd") || o.format.startsWith("MM") ? O = h[2] : o.format.startsWith("yyyy") && (O = h[0]), O && O.length === 4) {
          const W = Y(u.value, o.format);
          W && !isNaN(W.getTime()) && (f.value = new Date(W.getTime()));
        }
      }
    }, re = () => {
      B.value = !0, j();
    }, E = () => {
      B.value = !1;
      const C = x.value;
      if (x.value = !1, !C) {
        u.value = X.value;
        return;
      }
      if (!u.value) {
        H();
        return;
      }
      const w = Y(u.value, o.format);
      w && !isNaN(w.getTime()) ? (u.value = A(w, o.format), l("update:modelValue", w), l("change", w), f.value = w) : u.value = X.value;
    }, N = (C) => {
      f.value = C, l("update:modelValue", C), l("change", C), o.range ? Array.isArray(C) && C[0] && C[1] && (u.value = `${A(C[0], o.format)} - ${A(C[1], o.format)}`, J()) : (u.value = A(C, o.format), J());
    }, J = () => {
      p.value && (p.value = !1, l("close"));
    }, S = (C) => {
      const w = z.value;
      return !w || !C ? !1 : typeof C.composedPath == "function" ? C.composedPath().includes(w) : C.target instanceof Node && w.contains(C.target);
    }, V = (C) => {
      S(C) || J();
    }, H = () => {
      f.value = null, u.value = "", x.value = !1, l("update:modelValue", null), l("change", null), l("clear");
    };
    return n({
      close: J,
      open: j,
      clear: H
    }), (C, w) => Ie((r(), a("div", {
      ref_key: "containerRef",
      ref: d,
      class: g(["relative", e.width, e.margin])
    }, [
      K(F(Ee), be(I.value, {
        "model-value": X.value,
        "onUpdate:modelValue": M,
        "onClick:clear": H,
        dir: y.value,
        lang: k.value,
        label: e.label,
        prepend: e.prepend || "calendar",
        append: e.append,
        isOpen: p.value,
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
        control: te(({ attrs: h, events: O }) => [
          c("div", Xo, [
            Ie(c("input", {
              ref_key: "inputRef",
              ref: m,
              "onUpdate:modelValue": w[0] || (w[0] = (W) => u.value = W),
              type: "text",
              placeholder: B.value ? e.placeholder : "",
              disabled: e.disabled,
              readonly: e.range,
              class: g([
                "w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                "focus:outline-none",
                "cursor-text"
              ]),
              onClick: w[1] || (w[1] = ee(() => {
              }, ["stop"])),
              onInput: G,
              onFocus: re,
              onBlur: (W) => {
                E(), O.blur(W);
              }
            }, null, 40, Jo), [
              [mt, u.value]
            ])
          ])
        ]),
        prepend: te(() => [...w[3] || (w[3] = [])]),
        _: 1
      }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "size", "disabled", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
      (r(), Z(Xe, { to: "body" }, [
        K(xe, { name: "fade" }, {
          default: te(() => [
            p.value ? (r(), a("div", {
              key: 0,
              ref_key: "panelRef",
              ref: z,
              class: g([
                "w-fit",
                e.menuClass
              ]),
              style: ce({ ...$.value, ...e.menuStyle })
            }, [
              K(F(Gt), {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  w[2] || (w[2] = (h) => f.value = h),
                  N
                ],
                inline: "",
                placeholder: e.placeholder,
                range: e.range,
                "auto-apply": e.range ? !1 : e.autoApply,
                "multi-calendars": e.multiCalendars,
                "enable-time-picker": e.enableTimePicker,
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
            ], 6)) : v("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2)), [
      [F(Mt), V]
    ]);
  }
}, Vt = /* @__PURE__ */ fe(Qo, [["__scopeId", "data-v-30588515"]]), Zo = ["aria-disabled", "onKeydown"], _o = ["id", "accept", "multiple", "disabled", "readonly", "required"], es = { class: "w-full flex items-center gap-2 sm:gap-3 flex-wrap" }, ts = { class: "" }, ls = { class: "text-xs text-input-text mt-1 hidden sm:block" }, ns = {
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
    const t = e, l = n, o = L(null), s = L(!0), b = L(""), y = L([]), k = L([]), I = i(() => {
      const E = Array.isArray(t.errorMessages) ? t.errorMessages : [], N = Array.isArray(k.value) ? k.value : [];
      return [...E, ...N];
    });
    pe(
      () => t.modelValue,
      (E) => {
        y.value = p(E);
      },
      { immediate: !0 }
    );
    function p(E) {
      return (Array.isArray(E) ? E : []).map((J) => ({ file: J.file ?? J, preview: J.preview ?? null, _id: f() }));
    }
    function f() {
      return Math.random().toString(36).slice(2);
    }
    const u = i(() => [
      "w-full h-full flex items-center justify-between",
      "gap-2 sm:gap-3 px-2 sm:px-3",
      "cursor-pointer select-none transition",
      "bg-input-background"
    ]), m = i(() => {
      const E = t.accept && t.accept.length ? t.accept : "any file";
      return `${t.multiple ? "Upload multiple " : "Upload "}(${E}) • Max ${t.maxSizeMB}MB each`;
    });
    function d() {
      t.disabled || t.readonly || o.value?.click();
    }
    function z(E) {
      if (!E.target.files) return;
      const N = Array.from(E.target.files);
      j(N), E.target.value = "";
    }
    function x() {
      t.disabled || (s.value = !0);
    }
    function B() {
      t.disabled || (s.value = !0);
    }
    function $() {
      s.value = !1;
    }
    function U(E) {
      if (s.value = !1, t.disabled) return;
      const N = E.dataTransfer, J = N ? Array.from(N.files || []) : [];
      l("drop", J), j(J);
    }
    function j(E) {
      k.value = [];
      const N = [], J = t.maxSizeMB * 1024 * 1024, S = M(t.accept);
      for (const C of E) {
        if (C.size > J) {
          k.value.push(`${C.name} exceeds ${t.maxSizeMB}MB`), l("error", { type: "size", file: C });
          continue;
        }
        if (S.size && !G(C, S)) {
          k.value.push(`${C.name} type not allowed`), l("error", { type: "type", file: C });
          continue;
        }
        N.push(C);
      }
      if (!N.length) return;
      const V = N.map((C) => ({ file: C, preview: A(C), _id: f() })), H = t.multiple ? y.value.concat(V) : V.slice(0, 1);
      y.value = H, l("select", N), l("update:modelValue", H.map((C) => ({ file: C.file, preview: C.preview }))), l("change", H.map((C) => C.file));
    }
    function A(E) {
      if (!Y(E)) return null;
      try {
        return URL.createObjectURL(E);
      } catch {
        return null;
      }
    }
    function Y(E) {
      return /^image\//.test(E.type);
    }
    function X(E) {
      const N = y.value.splice(E, 1);
      l("remove", N[0]?.file), l("update:modelValue", y.value.map((J) => ({ file: J.file, preview: J.preview }))), l("change", y.value.map((J) => J.file));
    }
    function M(E) {
      const N = /* @__PURE__ */ new Set();
      return E && E.split(",").map((J) => J.trim()).filter(Boolean).forEach((J) => N.add(J.toLowerCase())), N;
    }
    function G(E, N) {
      if (!N || !N.size) return !0;
      const J = E.type.toLowerCase(), S = E.name.toLowerCase().split(".").pop();
      for (const V of N)
        if (V.includes("/")) {
          const [H, C] = V.split("/"), [w, h] = J.split("/");
          if (C === "*") {
            if (H === w) return !0;
          } else if (V === J)
            return !0;
        } else if (V.startsWith(".") && S && V.slice(1) === S)
          return !0;
      return !1;
    }
    function re(E) {
      if (E < 1024) return `${E} B`;
      const N = E / 1024;
      return N < 1024 ? `${N.toFixed(1)} KB` : `${(N / 1024).toFixed(2)} MB`;
    }
    return (E, N) => {
      const J = ve("Icon"), S = ve("Button");
      return r(), a("div", {
        class: g([b.value, e.width])
      }, [
        K(F(Ee), be(E.$props, {
          "persistent-hint": !!e.hint,
          error: I.value.length > 0,
          "is-open": s.value,
          clearable: !1
        }), {
          control: te(({ attrs: V }) => [
            c("div", {
              class: g(u.value),
              "aria-disabled": e.disabled,
              role: "button",
              tabindex: "0",
              onClick: d,
              onKeydown: [
                ye(ee(d, ["prevent"]), ["enter"]),
                ye(ee(d, ["prevent"]), ["space"])
              ],
              onDragenter: ee(x, ["prevent"]),
              onDragover: ee(B, ["prevent"]),
              onDragleave: ee($, ["prevent"]),
              onDrop: ee(U, ["prevent"])
            }, [
              c("input", {
                id: V.id,
                ref_key: "inputRef",
                ref: o,
                type: "file",
                accept: e.accept,
                multiple: e.multiple,
                class: "hidden",
                disabled: e.disabled,
                readonly: V.readonly,
                required: V.required,
                onChange: z
              }, null, 40, _o),
              c("div", es, [
                K(J, {
                  name: "arrow-up-tray",
                  size: "16"
                }),
                c("div", ts, [
                  N[0] || (N[0] = c("div", { class: "text-sm text-input-text truncate" }, [
                    c("span", { class: "font-medium" }, "Click to upload"),
                    me(" or drag and drop ")
                  ], -1)),
                  c("div", ls, T(m.value), 1)
                ])
              ]),
              K(S, {
                type: "button",
                size: "xs",
                disabled: e.disabled,
                rounded: e.rounded,
                class: "px-3 py-1.5 text-sm text-primaryText"
              }, {
                default: te(() => [...N[1] || (N[1] = [
                  me(" Browse ", -1)
                ])]),
                _: 1
              }, 8, ["disabled", "rounded"])
            ], 42, Zo)
          ]),
          _: 1
        }, 16, ["persistent-hint", "error", "is-open"]),
        y.value.length ? (r(), a("div", ns, [
          (r(!0), a(oe, null, ue(y.value, (V, H) => (r(), a("div", {
            key: V._id,
            class: g(["flex items-center gap-3 p-2 border bg-color-1 ", e.border, e.rounded ? F(we)[e.rounded] : "rounded-md"])
          }, [
            e.showPreview && Y(V.file) ? (r(), a("div", rs, [
              c("img", {
                src: V.preview,
                alt: "preview",
                class: "w-full h-full object-cover",
                loading: "lazy"
              }, null, 8, as)
            ])) : v("", !0),
            c("div", os, [
              c("div", ss, T(V.file.name), 1),
              c("div", is, T(re(V.file.size)), 1)
            ]),
            c("button", {
              type: "button",
              class: "text-input-text hover:text-input-focus",
              onClick: (C) => X(H)
            }, [...N[2] || (N[2] = [
              c("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-5"
              }, [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, us)
          ], 2))), 128))
        ])) : v("", !0)
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
    rounded: { type: String, default: () => he("InputNumber", "rounded") },
    size: { type: String, default: () => he("InputNumber", "size") },
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
    const l = t, o = e, s = ge("parentDir", ""), b = ge("parentLang", ""), y = i(() => o.dir || s), k = i(() => o.lang || b), I = i(() => {
      const h = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], O = {};
      return h.forEach((W) => {
        W in o && (O[W] = o[W]);
      }), O;
    }), p = L(null), f = L(!1), u = L(null), m = L(null), d = i(() => {
      if (o.modelValue === null || o.modelValue === "" || o.modelValue === void 0)
        return null;
      const h = parseFloat(o.modelValue);
      return isNaN(h) ? null : h;
    }), z = i(() => d.value !== null && d.value <= o.min), x = i(() => d.value !== null && d.value >= o.max), B = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[o.align] || "text-left"), $ = i(() => {
      const h = {
        xs: { button: "w-6 h-6", icon: "12", stackedButton: "px-1.5", stackedIcon: "10", affix: "text-xs px-1" },
        sm: { button: "w-7 h-7", icon: "14", stackedButton: "px-2", stackedIcon: "12", affix: "text-sm px-1.5" },
        md: { button: "w-8 h-8", icon: "16", stackedButton: "px-2.5", stackedIcon: "14", affix: "text-sm px-2" },
        lg: { button: "w-9 h-9", icon: "18", stackedButton: "px-3", stackedIcon: "16", affix: "text-base px-2" },
        xl: { button: "w-10 h-10", icon: "20", stackedButton: "px-3.5", stackedIcon: "18", affix: "text-lg px-2.5" }
      };
      return h[o.size] || h.md;
    }), U = i(() => {
      if (d.value === null) return "";
      let h = d.value;
      if (o.precision !== void 0 ? h = h.toFixed(o.precision) : h = String(h), o.thousandSeparator) {
        const O = o.thousandSeparator === !0 ? "," : o.thousandSeparator, W = h.split(".");
        W[0] = W[0].replace(/\B(?=(\d{3})+(?!\d))/g, O), h = W.join(o.decimalSeparator);
      } else o.decimalSeparator !== "." && (h = h.replace(".", o.decimalSeparator));
      return h;
    }), j = i(() => o.label && (!f.value || U.value) ? "" : o.placeholder), A = (h) => {
      if (h === "" || h === null || h === void 0) return null;
      let O = String(h);
      if (o.thousandSeparator) {
        const de = o.thousandSeparator === !0 ? "," : o.thousandSeparator;
        O = O.split(de).join("");
      }
      o.decimalSeparator !== "." && (O = O.replace(o.decimalSeparator, "."));
      const W = parseFloat(O);
      return isNaN(W) ? null : W;
    }, Y = (h) => h === null ? null : Math.min(Math.max(h, o.min), o.max), X = (h) => h === null || o.precision === void 0 ? h : parseFloat(h.toFixed(o.precision)), M = (h) => {
      if (h === "-" || h === o.decimalSeparator || h === "-" + o.decimalSeparator)
        return;
      const O = A(h);
      f.value || J(O);
    }, G = (h) => {
      f.value = !1;
      const O = h.target.value;
      let W = A(O);
      W !== null && (W = Y(W), W = X(W)), l("update:modelValue", W), l("blur", h), l("change", W);
    }, re = (h) => {
      f.value = !0, l("focus", h);
    }, E = (h) => {
      if (o.disabled || o.readonly) return;
      h.key === "ArrowUp" ? (h.preventDefault(), S()) : h.key === "ArrowDown" ? (h.preventDefault(), V()) : h.key === "Enter" && G(h);
      const O = ["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"], W = /^[0-9]$/.test(h.key), de = h.key === o.decimalSeparator || h.key === ".", Be = h.key === "-" && o.allowNegative, se = h.ctrlKey || h.metaKey;
      !O.includes(h.key) && !W && !de && !Be && !se && h.preventDefault();
    }, N = (h) => {
      !o.mouseWheel || o.disabled || o.readonly || !f.value || (h.preventDefault(), h.deltaY < 0 ? S() : V());
    }, J = (h) => {
      h !== null && (h = Y(h), h = X(h)), l("update:modelValue", h), l("change", h);
    }, S = () => {
      if (o.disabled || o.readonly || x.value) return;
      let h = (d.value ?? 0) + o.step;
      h = Y(h), h = X(h), l("update:modelValue", h), l("change", h);
    }, V = () => {
      if (o.disabled || o.readonly || z.value) return;
      let h = (d.value ?? 0) - o.step;
      h = Y(h), h = X(h), l("update:modelValue", h), l("change", h);
    }, H = (h) => {
      o.disabled || o.readonly || (m.value = setTimeout(() => {
        u.value = setInterval(() => {
          h === "increment" ? S() : V();
        }, 75);
      }, 400));
    }, C = () => {
      m.value && (clearTimeout(m.value), m.value = null), u.value && (clearInterval(u.value), u.value = null);
    }, w = () => {
      l("update:modelValue", null), l("change", null);
    };
    return n({
      focus: () => p.value?.focus(),
      blur: () => p.value?.blur(),
      select: () => p.value?.select(),
      increment: S,
      decrement: V
    }), (h, O) => {
      const W = ve("Icon");
      return r(), Z(F(Ee), be(I.value, {
        "model-value": U.value,
        "onUpdate:modelValue": M,
        "onClick:clear": w,
        dir: y.value,
        lang: k.value,
        readonly: e.readonly,
        disabled: e.disabled,
        clearable: e.clearable,
        focused: f.value
      }), He({
        control: te(({ attrs: de, events: Be }) => [
          c("div", gs, [
            e.showControls && e.controlsPosition === "stacked-left" ? (r(), a("div", ms, [
              c("button", {
                type: "button",
                disabled: e.disabled || x.value,
                class: g([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  $.value.stackedButton,
                  e.disabled || x.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: S,
                onMousedown: O[4] || (O[4] = (se) => H("increment")),
                onMouseup: C,
                onMouseleave: C
              }, [
                K(W, {
                  name: "chevron-up",
                  size: $.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, ps),
              c("button", {
                type: "button",
                disabled: e.disabled || z.value,
                class: g([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  $.value.stackedButton,
                  e.disabled || z.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: V,
                onMousedown: O[5] || (O[5] = (se) => H("decrement")),
                onMouseup: C,
                onMouseleave: C
              }, [
                K(W, {
                  name: "chevron-down",
                  size: $.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, vs)
            ])) : v("", !0),
            e.prefix ? (r(), a("span", {
              key: 1,
              class: g(["ui-text-secondary select-none", $.value.affix])
            }, T(e.prefix), 3)) : v("", !0),
            c("input", {
              ref_key: "inputRef",
              ref: p,
              value: U.value,
              type: "text",
              inputmode: "decimal",
              placeholder: j.value,
              disabled: e.disabled,
              readonly: e.readonly,
              class: g([
                "flex-1 w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                B.value,
                e.disabled ? "cursor-not-allowed" : "",
                e.readonly ? "cursor-default" : ""
              ]),
              onInput: O[6] || (O[6] = (se) => M(se.target.value)),
              onBlur: (se) => {
                G(se), Be.blur?.(se);
              },
              onFocus: (se) => {
                re(se), Be.focus?.(se);
              },
              onKeydown: E,
              onWheel: N
            }, null, 42, ys),
            e.suffix ? (r(), a("span", {
              key: 2,
              class: g(["ui-text-secondary select-none", $.value.affix])
            }, T(e.suffix), 3)) : v("", !0),
            e.showControls && e.controlsPosition === "stacked-right" ? (r(), a("div", bs, [
              c("button", {
                type: "button",
                disabled: e.disabled || x.value,
                class: g([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  $.value.stackedButton,
                  e.disabled || x.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: S,
                onMousedown: O[7] || (O[7] = (se) => H("increment")),
                onMouseup: C,
                onMouseleave: C
              }, [
                K(W, {
                  name: "chevron-up",
                  size: $.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, hs),
              c("button", {
                type: "button",
                disabled: e.disabled || z.value,
                class: g([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  $.value.stackedButton,
                  e.disabled || z.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: V,
                onMousedown: O[8] || (O[8] = (se) => H("decrement")),
                onMouseup: C,
                onMouseleave: C
              }, [
                K(W, {
                  name: "chevron-down",
                  size: $.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, xs)
            ])) : v("", !0)
          ])
        ]),
        _: 2
      }, [
        e.showControls && e.controlsPosition === "sides" ? {
          name: "prepend",
          fn: te(() => [
            c("button", {
              type: "button",
              disabled: e.disabled || z.value,
              class: g([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-l",
                $.value.button,
                e.disabled || z.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: V,
              onMousedown: O[0] || (O[0] = (de) => H("decrement")),
              onMouseup: C,
              onMouseleave: C,
              onTouchstart: O[1] || (O[1] = ee((de) => H("decrement"), ["prevent"])),
              onTouchend: C
            }, [
              K(W, {
                name: "minus",
                size: $.value.icon
              }, null, 8, ["size"])
            ], 42, cs)
          ]),
          key: "0"
        } : void 0,
        e.showControls && e.controlsPosition === "sides" ? {
          name: "append",
          fn: te(() => [
            c("button", {
              type: "button",
              disabled: e.disabled || x.value,
              class: g([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-r",
                $.value.button,
                e.disabled || x.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: S,
              onMousedown: O[2] || (O[2] = (de) => H("increment")),
              onMouseup: C,
              onMouseleave: C,
              onTouchstart: O[3] || (O[3] = ee((de) => H("increment"), ["prevent"])),
              onTouchend: C
            }, [
              K(W, {
                name: "plus",
                size: $.value.icon
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
}, yt = {
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
    const l = e, o = ge("parentDir", ""), s = ge("parentLang", ""), b = i(() => l.dir || o), y = i(() => l.lang || s), k = L(!1), I = i(() => k.value ? "text" : "password"), p = i(() => {
      const X = ["label", "hint", "persistentHint", "disabled", "readonly", "required", "error", "errorMessages", "clearable", "size", "id", "prepend", "append", "isOpen", "bg", "border", "textColor", "rounded", "dir", "lang", "width", "rules", "errorMessage", "messages", "hideDetails", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], M = {};
      return X.forEach((G) => {
        G in l && (M[G] = l[G]);
      }), M;
    }), f = t, u = L(null), m = L(null), d = L(!1), z = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), x = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), B = (X) => {
      const M = X.target.value;
      f("update:modelValue", M);
    }, $ = (X) => {
      d.value = !0, f("focus", X);
    }, U = (X) => {
      d.value = !1, f("blur", X);
    }, j = (X) => {
      f("enter", l.modelValue);
    }, A = () => {
      f("update:modelValue", ""), f("clear"), u.value?.focus();
    };
    return n({ focus: () => {
      u.value?.focus();
    }, clear: A }), (X, M) => {
      const G = ve("Icon");
      return r(), a("div", {
        ref_key: "containerRef",
        ref: m,
        class: g(["relative", e.containerClass, e.width])
      }, [
        K(F(Ee), be(p.value, {
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
          id: z.value,
          prepend: e.prepend,
          append: e.append,
          "is-open": d.value,
          "onClick:clear": A,
          bg: e.bg,
          border: e.border,
          "text-color": e.textColor,
          rounded: e.rounded,
          dir: b.value,
          lang: y.value,
          width: e.width,
          rules: e.rules
        }), He({
          control: te(({ attrs: re, events: E }) => [
            c("div", ks, [
              e.prefix ? (r(), a("span", Ss, T(e.prefix), 1)) : v("", !0),
              c("input", be({
                ref_key: "inputRef",
                ref: u
              }, re, pt(E, !0), {
                type: e.type === "password" ? I.value : e.type,
                value: e.modelValue,
                placeholder: d.value && !e.modelValue ? e.placeholder : "",
                class: x.value,
                onInput: B,
                onKeydown: ye(j, ["enter"]),
                onFocus: $,
                onBlur: U
              }), null, 16, Cs),
              e.suffix ? (r(), a("span", $s, T(e.suffix), 1)) : v("", !0)
            ])
          ]),
          _: 2
        }, [
          e.loading || e.type === "password" ? {
            name: "append",
            fn: te(() => [
              e.type === "password" && k.value ? (r(), Z(G, {
                key: 0,
                onClick: M[0] || (M[0] = (re) => k.value = !1),
                size: F(Pe)[e.size],
                name: "eye",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : v("", !0),
              e.type === "password" && !k.value ? (r(), Z(G, {
                key: 1,
                onClick: M[1] || (M[1] = (re) => k.value = !0),
                size: F(Pe)[e.size],
                name: "eye-slash",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : v("", !0),
              e.loading ? (r(), a("svg", zs, [...M[2] || (M[2] = [
                c("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                c("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : v("", !0)
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
    const l = e, o = ge("parentDir", ""), s = ge("parentLang", ""), b = i(() => l.dir || o), y = i(() => l.lang || s), k = t, I = L(null), p = L(null), f = L(!1);
    let u = null;
    const m = i(() => l.id || `search-${Math.random().toString(36).substr(2, 9)}`), d = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), z = (A) => {
      const Y = A.target.value;
      k("update:modelValue", Y), clearTimeout(u), u = setTimeout(() => {
        k("input", Y), k("search", Y);
      }, l.debounce);
    }, x = (A) => {
      f.value = !0, k("focus", A);
    }, B = (A) => {
      f.value = !1, k("blur", A);
    }, $ = (A) => {
      k("enter", l.modelValue), k("search", l.modelValue);
    }, U = () => {
      k("update:modelValue", ""), k("clear"), I.value?.focus();
    }, j = () => {
      I.value?.focus();
    };
    return ze(() => {
      clearTimeout(u);
    }), n({ focus: j, clear: U }), (A, Y) => (r(), a("div", {
      ref_key: "containerRef",
      ref: p,
      class: g(["relative", e.containerClass, e.width])
    }, [
      K(F(Ee), {
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
        id: m.value,
        prepend: e.prepend,
        append: e.append,
        "is-open": f.value,
        "onClick:clear": U,
        bg: e.bg,
        border: e.border,
        "text-color": e.textColor,
        rounded: e.rounded,
        dir: b.value,
        lang: y.value,
        width: e.width,
        rules: e.rules
      }, He({
        control: te(({ attrs: X, events: M }) => [
          c("input", be({
            ref_key: "inputRef",
            ref: I
          }, X, pt(M, !0), {
            type: "search",
            value: e.modelValue,
            placeholder: f.value && !e.modelValue || !e.label && !e.modelValue ? e.placeholder : "",
            class: d.value,
            onInput: z,
            onKeydown: ye($, ["enter"]),
            onFocus: x,
            onBlur: B
          }), null, 16, Bs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            Y[0] || (Y[0] = c("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              c("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              c("path", {
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
}, Vs = /* @__PURE__ */ fe(Is, [["__scopeId", "data-v-d672028c"]]), Ts = {
  class: /* @__PURE__ */ g(["flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
}, Ms = ["id", "disabled", "required", "dir", "placeholder"], Ls = {
  key: 0,
  class: /* @__PURE__ */ g(["absolute left-0 right-8 px-3 truncate pointer-events-none text-gray-400"])
}, As = {
  key: 1,
  class: /* @__PURE__ */ g(["absolute left-0 right-8 px-3 truncate pointer-events-none"])
}, Ps = {
  key: 2,
  class: "absolute inset-y-0 left-3 right-14 flex items-center gap-1 overflow-hidden"
}, Ds = { class: "truncate max-w-[100px]" }, Es = { class: "p-1.5" }, Os = {
  key: 0,
  class: /* @__PURE__ */ g(["px-2.5 py-1.5 ui-text-secondary text-center text-sm rounded-lg"])
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
    rounded: { type: String, default: () => he("Select", "rounded") },
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
    const l = t, o = L(""), s = L(null), b = L(null), y = L(null), k = L({ position: "fixed" });
    L("");
    const I = L(!1), p = L(!1), f = L(null), u = L([]);
    L([]);
    const m = e, d = ge("parentDir", ""), z = ge("parentLang", ""), x = ge("formContext", null), B = ge("api", null), $ = i(() => m.dir || d), U = i(() => m.lang || z), j = i(() => {
      const R = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "multiple", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], Q = {};
      return R.forEach((ne) => {
        ne in m && (Q[ne] = m[ne]);
      }), Q;
    }), A = L(!1), Y = i(() => m.url && u.value.length > 0 ? u.value : m.items), X = async () => {
      if (m.url && !(m.cacheItems && u.value.length > 0)) {
        p.value = !0, f.value = null;
        try {
          let R;
          if (B)
            R = await B.get(m.url);
          else {
            const ie = await fetch(m.url);
            if (!ie.ok) throw new Error(`HTTP error! status: ${ie.status}`);
            R = { data: await ie.json() };
          }
          const Q = R.data;
          let ne = null;
          if (Array.isArray(Q))
            ne = Q;
          else if (Q.data && Array.isArray(Q.data))
            ne = Q.data;
          else if (Q.items && Array.isArray(Q.items))
            ne = Q.items;
          else if (Q.results && Array.isArray(Q.results))
            ne = Q.results;
          else
            for (const ie in Q)
              if (Array.isArray(Q[ie])) {
                ne = Q[ie];
                break;
              }
          if (!ne)
            throw new Error("No array found in response");
          u.value = ne;
        } catch (R) {
          console.error("Error fetching items:", R), f.value = R.message || "Failed to load items";
        } finally {
          p.value = !1;
        }
      }
    };
    Ve(() => {
      m.eager && m.url && X();
    });
    const M = (R) => {
      I.value = !0, l("focus", R);
    }, G = (R) => {
      I.value = !1, l("blur", R);
    }, re = (R) => {
      l("update:modelValue", R);
    }, E = (R) => {
      l("enter", m.modelValue), l("search", m.modelValue);
    }, N = () => {
      se(), s.value?.focus();
    }, J = i(() => [
      "bg-transparent outline-none border-none flex-1 min-w-0 max-w-auto",
      "placeholder:text-neutral-300",
      "focus:outline-none",
      // For multiple select with badges, make input flexible to fit remaining space
      m.multiple && S.value.length > 0 ? "flex-1 min-w-0" : "w-full",
      !m.multiple && V.value && !o.value ? "text-transparent" : "",
      m.searchable ? "cursor-text" : "no-caret invisible cursor-pointer"
    ]), S = i(() => m.multiple ? Array.isArray(m.modelValue) ? m.modelValue : [] : m.modelValue !== null && m.modelValue !== void 0 ? [m.modelValue] : []), V = i(() => {
      const R = Y.value.find((Q) => String(w(Q)) === String(m.modelValue));
      return R ? C(R) : "";
    });
    i(() => m.multiple ? S.value.length > 0 ? `${S.value.length} selected` : "" : V.value);
    const H = i(() => o.value ? Y.value.filter((R) => C(R).toLowerCase().includes(o.value.toLowerCase())) : Y.value), C = (R) => R ? typeof R == "string" || typeof R == "number" ? R.toString() : typeof m.itemTitle == "function" ? m.itemTitle(R) : R[m.itemTitle] || "" : "", w = (R) => {
      if (!R) return "";
      if (typeof R == "string" || typeof R == "number") return R;
      if (typeof m.itemValue == "function") return m.itemValue(R);
      const Q = R[m.itemValue];
      return Q !== void 0 ? Q : R;
    }, h = (R) => {
      const Q = Y.value.find((ne) => String(w(ne)) === String(R));
      return Q ? C(Q) : R.toString();
    }, O = (R) => S.value.some((Q) => String(Q) === String(R)), W = (R) => {
      const Q = m.returnObject ? R : w(R);
      if (m.multiple) {
        let ne = [...S.value];
        const ie = w(R), $e = ne.findIndex((ke) => String(ke) === String(ie));
        $e > -1 ? ne.splice($e, 1) : ne.push(ie), l("update:modelValue", ne);
      } else
        l("update:modelValue", Q), l("change", Q), l("select", R), A.value = !1, o.value = "";
    }, de = (R) => {
      if (!m.multiple) {
        Ue();
        return;
      }
      Ue();
    }, Be = (R) => {
      if (m.multiple) {
        const Q = S.value.filter((ne) => String(ne) !== String(R));
        l("update:modelValue", Q), l("change", Q);
      }
    }, se = () => {
      const R = m.multiple ? [] : "";
      l("update:modelValue", R), l("change", R), l("clear");
    }, Ce = async () => {
      m.disabled || (A.value = !A.value, A.value ? (m.url && !m.eager && await X(), l("open"), m.searchable && Ae(() => {
        s.value?.focus();
      })) : (l("close"), o.value = ""));
    }, Ue = () => {
      if (A.value = !1, o.value = "", x?.validateOn?.value) {
        const R = x.validateOn.value;
        (R === "blur" || Array.isArray(R) && R.includes("blur")) && Ae(() => {
        });
      }
      l("close");
    };
    pe(A, async (R) => {
      if (!R) {
        o.value = "";
        return;
      }
      await Ae(), rt();
    });
    function rt() {
      if (!b.value) return;
      const R = b.value.getBoundingClientRect(), Q = 4, ne = window.innerHeight - R.bottom - Q, ie = R.top - Q, $e = 80, ke = ne < $e && ie > ne;
      k.value = {
        position: "fixed",
        left: `${R.left}px`,
        width: m.dropdownWidth || `${R.width}px`,
        zIndex: 9999,
        overflowY: "auto",
        ...ke ? {
          bottom: `${window.innerHeight - R.top + Q}px`,
          maxHeight: `${Math.min(ie, 240)}px`
        } : {
          top: `${R.bottom + Q}px`,
          maxHeight: `${Math.max(Math.min(ne, 240), $e)}px`
        }
      };
    }
    return n({
      close: Ue,
      open: () => Ce(),
      clear: se,
      refresh: X,
      focus: () => {
        m.searchable && A.value && s.value?.focus();
      }
    }), (R, Q) => {
      const ne = ve("Icon");
      return Ie((r(), a("div", {
        ref_key: "triggerRef",
        ref: b,
        class: g(["relative group", e.width, e.margin])
      }, [
        K(F(Ee), be(j.value, {
          "model-value": e.modelValue,
          "onUpdate:modelValue": re,
          dir: $.value,
          lang: U.value,
          label: e.label,
          prepend: e.prepend,
          append: e.append,
          isOpen: A.value,
          size: e.size,
          onClick: Ce,
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
          "onClick:clear": N
        }), {
          control: te(({ attrs: ie, events: $e }) => [
            c("div", Ts, [
              Ie(c("input", {
                "onUpdate:modelValue": Q[0] || (Q[0] = (ke) => o.value = ke),
                id: ie.id,
                disabled: ie.disabled,
                required: ie.required,
                dir: ie.dir,
                type: "text",
                size: "1",
                placeholder: I.value && !o.value && !V.value || !o.value && !e.label ? e.placeholder : "",
                class: g(J.value),
                onFocus: M,
                onBlur: G,
                onKeydown: ye(E, ["enter"])
              }, null, 42, Ms), [
                [mt, o.value]
              ]),
              !V.value && !e.multiple && !o.value && !e.label ? (r(), a("div", Ls, T(e.placeholder), 1)) : v("", !0),
              V.value && !e.multiple && !o.value ? (r(), a("div", As, T(V.value), 1)) : v("", !0),
              e.multiple && S.value.length > 0 ? (r(), a("div", Ps, [
                S.value.length < 2 ? (r(!0), a(oe, { key: 0 }, ue(S.value, (ke) => (r(), a("div", { key: ke }, [
                  c("div", {
                    class: g(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap", e.textColor, e.border, e.rounded ? F(we)[e.rounded] : ""])
                  }, [
                    c("div", Ds, T(h(ke)), 1),
                    K(ne, {
                      onClick: ee((bt) => Be(ke), ["stop"]),
                      name: "x-mark",
                      type: "outline",
                      size: "10",
                      color: "text-current"
                    }, null, 8, ["onClick"])
                  ], 2)
                ]))), 128)) : (r(), a("div", {
                  key: 1,
                  class: g(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap flex-shrink-0", e.textColor, e.border, e.rounded ? F(we)[e.rounded] : ""])
                }, [
                  c("div", null, T(S.value.length) + " selected", 1)
                ], 2))
              ])) : v("", !0)
            ])
          ]),
          append: te(() => [
            e.append ? (r(), Z(ne, {
              key: 1,
              name: e.append,
              type: "outline",
              size: "16",
              class: "text-input-border"
            }, null, 8, ["name"])) : (r(), Z(ne, {
              key: 0,
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: g(["transition-transform duration-200", A.value ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"]))
          ]),
          _: 1
        }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "size", "disabled", "readonly", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
        (r(), Z(Xe, { to: "body" }, [
          K(xe, { name: "fade" }, {
            default: te(() => [
              A.value ? (r(), a("div", {
                key: 0,
                ref_key: "dropdownRef",
                ref: y,
                class: g([
                  "shadow-lg z-[9999] overflow-hidden",
                  e.bg ?? "ui-bg-color",
                  e.border ? "border " + e.border : "border border-color",
                  e.rounded ? F(we)[e.rounded] : "rounded-lg",
                  e.menuClass
                ]),
                style: ce({ ...k.value, ...e.menuStyle })
              }, [
                c("ul", Es, [
                  H.value.length === 0 ? (r(), a("li", Os, [
                    D(R.$slots, "no-data", {}, () => [
                      Q[2] || (Q[2] = me("No items found", -1))
                    ], !0)
                  ])) : v("", !0),
                  (r(!0), a(oe, null, ue(H.value, (ie, $e) => (r(), a("li", {
                    key: w(ie),
                    onMousedown: (ke) => {
                      ke.preventDefault(), W(ie);
                    },
                    class: g([
                      "px-2.5 py-1.5 cursor-pointer transition flex items-center text-sm rounded-lg ui-text-color",
                      O(w(ie)) ? e.selectedItemClass || "bg-primary/10 text-primary font-medium" : e.itemClass || "hover:bg-color-1",
                      e.itemHoverClass
                    ])
                  }, [
                    D(R.$slots, "item", {
                      item: ie,
                      index: $e,
                      selected: O(w(ie))
                    }, () => [
                      c("div", Ns, [
                        e.multiple ? (r(), Z(F(Et), {
                          key: 0,
                          "model-value": O(w(ie)),
                          value: $e,
                          label: C(ie),
                          required: !1,
                          error: !1,
                          onClick: Q[1] || (Q[1] = ee(() => {
                          }, ["stop"]))
                        }, null, 8, ["model-value", "value", "label"])) : v("", !0),
                        e.multiple ? v("", !0) : (r(), a("span", Rs, T(C(ie)), 1)),
                        !e.multiple && O(w(ie)) ? (r(), a("svg", Hs, [...Q[3] || (Q[3] = [
                          c("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.5 12.75l6 6 9-13.5"
                          }, null, -1)
                        ])])) : v("", !0)
                      ])
                    ], !0)
                  ], 42, js))), 128))
                ])
              ], 6)) : v("", !0)
            ]),
            _: 3
          })
        ]))
      ], 2)), [
        [F(Mt), [de, { ignore: [y.value] }]]
      ]);
    };
  }
}, Fs = /* @__PURE__ */ fe(Us, [["__scopeId", "data-v-0448987b"]]), qs = ["value", "placeholder", "rows", "maxlength"], Ws = {
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
    const l = e, o = ge("parentDir", ""), s = ge("parentLang", ""), b = i(() => l.dir || o), y = i(() => l.lang || s), k = t, I = L(null), p = L(null), f = L(!1), u = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), m = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), d = (j) => {
      const A = j.target.value;
      k("update:modelValue", A);
    }, z = (j) => {
      f.value = !0, k("focus", j);
    }, x = (j) => {
      f.value = !1, k("blur", j);
    }, B = (j) => {
      k("enter", l.modelValue);
    }, $ = () => {
      k("update:modelValue", ""), k("clear"), I.value?.focus();
    };
    return n({ focus: () => {
      I.value?.focus();
    }, clear: $ }), (j, A) => (r(), a("div", {
      ref_key: "containerRef",
      ref: p,
      class: g(["relative", e.containerClass, e.width])
    }, [
      K(F(Ee), be(j.$props, {
        "model-value": e.modelValue,
        error: !!e.error || e.errorMessages.length > 0,
        clearable: e.clearable && !e.loading,
        id: u.value,
        "is-open": f.value,
        "onClick:clear": $,
        dir: b.value,
        lang: y.value,
        rules: e.rules
      }), He({
        control: te(({ attrs: Y, events: X }) => [
          c("textarea", be({
            ref_key: "inputRef",
            ref: I
          }, Y, pt(X, !0), {
            type: "text",
            value: e.modelValue,
            placeholder: f.value && !e.modelValue ? e.placeholder : "",
            class: m.value,
            rows: e.rows,
            maxlength: e.maxlength,
            onInput: d,
            onKeydown: ye(B, ["enter"]),
            onFocus: z,
            onBlur: x
          }), null, 16, qs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            A[0] || (A[0] = c("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              c("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              c("path", {
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
}, Ks = /* @__PURE__ */ fe(Ws, [["__scopeId", "data-v-f4b34525"]]), lt = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    name: {},
    type: { default: "solid" },
    size: { default: 24 },
    color: { default: "currentColor" }
  },
  setup(e) {
    const n = e, t = qt(), l = (u) => u.replace(/-([a-z])/g, (m, d) => d.toUpperCase()).replace(/(?:^|_|\s|-)(\w)/g, (m, d) => d.toUpperCase()).replace(/Icon$/, "") + "Icon", o = i(() => l(n.name)), s = i(() => {
      const u = Number(n.size);
      return Number.isFinite(u) && u > 0 ? u : null;
    }), b = i(() => {
      if (n.type === "outline") return ["o24"];
      if (n.type === "micro") return ["s16", "s20", "s24"];
      if (n.type === "mini") return ["s20", "s24"];
      const u = s.value;
      if (u !== null) {
        if (u <= 16) return ["s16", "s20", "s24"];
        if (u <= 20) return ["s20", "s24"];
      }
      return ["s24"];
    });
    async function y(u) {
      switch (u) {
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
      () => it({
        loader: async () => {
          for (const u of b.value) {
            const m = (await y(u))[o.value];
            if (m) return m;
          }
          throw new Error(`Icon "${o.value}" not found in ${n.type} icons`);
        },
        loadingComponent: it(
          async () => (await import("./index-CdjTVJ3l.js")).ArrowPathIcon
        ),
        errorComponent: it(
          async () => (await import("./index-BeQxidt5.js")).ExclamationTriangleIcon
        ),
        delay: 200,
        timeout: 5e3
      })
    ), I = i(() => {
      if (n.type !== "outline") return null;
      const u = s.value;
      return u === null || u >= 20 ? null : +(1.25 * 24 / u).toFixed(3);
    }), p = (u) => u ? /(?:^|\s)(?:text-|fill-|stroke-|bg-|ring-|border-)/.test(u) : !1, f = i(() => {
      const u = /^\d+(\.\d+)?$/.test(String(n.size)) ? `${n.size}px` : String(n.size), d = ["hero-icon", p(n.color) ? n.color : "", t.class].filter(Boolean), z = typeof t.style == "object" && t.style ? t.style : {}, { class: x, style: B, ...$ } = t;
      return {
        ...$,
        class: d,
        style: {
          ...z,
          width: u,
          height: u,
          minWidth: u,
          maxWidth: u,
          minHeight: u,
          maxHeight: u,
          // Read by the .hero-icon > svg rule; overridable per instance.
          ...I.value !== null ? { "--hero-stroke": String(I.value) } : {},
          ...p(n.color) ? {} : { color: n.color }
        }
      };
    });
    return (u, m) => (r(), a("span", Wt(Kt(f.value)), [
      (r(), Z(je(k.value)))
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
  UiDropdownItem: En,
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
  UiCheckbox: Et,
  UiChip: Ot,
  UiChipGroup: jt,
  UiDatepicker: Vt,
  UiDatePicker: Vt,
  UiFile: ds,
  UiInputNumber: ws,
  UiInputText: yt,
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
    () => typeof e == "boolean" ? e : Le.value
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
  Et as Checkbox,
  Ot as Chip,
  jt as ChipGroup,
  $n as ConfirmDialog,
  Vt as DatePicker,
  Vt as Datepicker,
  In as Divider,
  Mn as Dropdown,
  En as DropdownItem,
  Jn as Expansion,
  ds as File,
  yr as Footer,
  br as Form,
  wr as GroupCard,
  lt as Icon,
  ws as InputNumber,
  yt as InputText,
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
  he as getDefault,
  xn as useConfirm,
  Je as useI18n,
  ei as useRtl,
  rl as useSnackbar,
  _s as useUiConfig
};
//# sourceMappingURL=index.js.map
