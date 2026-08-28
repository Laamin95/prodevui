import { computed as i, ref as M, watch as ge, shallowRef as Nt, triggerRef as xt, readonly as Rt, reactive as tt, inject as ce, createElementBlock as a, openBlock as n, normalizeClass as f, createCommentVNode as v, createElementVNode as d, renderSlot as D, createBlock as Z, unref as F, toDisplayString as T, createTextVNode as fe, Fragment as oe, renderList as ie, withModifiers as ee, createVNode as K, Transition as xe, withCtx as te, provide as We, toRef as et, resolveComponent as me, normalizeStyle as ue, onMounted as Be, onBeforeUnmount as $e, withDirectives as ze, vShow as Ee, defineComponent as Ie, useSlots as nt, nextTick as Le, Teleport as Ye, withKeys as pe, vModelText as mt, resolveDynamicComponent as Oe, createSlots as Re, onUpdated as Ht, isRef as wt, createStaticVNode as Ut, mergeProps as ye, getCurrentInstance as qt, toHandlers as pt, useAttrs as Ft, defineAsyncComponent as it, normalizeProps as Wt, guardReactiveProps as Kt } from "vue";
import { vOnClickOutside as Lt } from "@vueuse/components";
import { VueDatePicker as Gt } from "@vuepic/vue-datepicker";
const ft = {
  required: (e) => !!e || {
    en: "This field is required.",
    dv: "ފުރަންޖެހޭ"
  },
  email: (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) || "Invalid email address.",
  min: (e) => (r) => r && r.length >= e || `Minimum length is ${e} characters.`,
  max: (e) => (r) => r && r.length <= e || `Maximum length is ${e} characters.`,
  numeric: (e) => !isNaN(parseFloat(e)) && isFinite(e) || "This field must be a number.",
  nid: (e) => (r) => e === "mv" ? /^A\d{6}$/.test(r) || "NID must start with A followed by 6 digits for Maldives" : !0,
  customPattern: (e, r, t = "Invalid format.") => (l) => e() ? new RegExp(r).test(l) || t : !0
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
}, ut = M(localStorage.getItem("language") || "en"), Xe = () => {
  const e = (l, o = "") => {
    const s = o || ut.value, b = l.split(".");
    let y = kt[s];
    for (const x of b)
      y = y?.[x];
    return y || l;
  }, r = (l) => {
    kt[l] && (ut.value = l, localStorage.setItem("language", l), document.documentElement.lang = l);
  }, t = i(() => ut.value);
  return {
    t: e,
    setLanguage: r,
    language: t
  };
}, Te = M(!1);
function St(e) {
  Te.value = e, localStorage.setItem("rtlSetting", JSON.stringify(e)), typeof document < "u" && (document.documentElement.setAttribute("dir", e ? "rtl" : "ltr"), document.documentElement.setAttribute("lang", e == !0 ? "dv" : "en"), e ? document.documentElement.classList.add("rtl-font") : document.documentElement.classList.remove("rtl-font"));
}
const Xt = {
  install(e) {
    const { t: r, setLanguage: t, language: l } = Xe();
    ge(l, (o) => {
      St(o === "dv");
    }), e.provide("i18n", {
      t: r,
      setLanguage: t,
      language: l
    }), e.config.globalProperties.$t = r, e.config.globalProperties.$setLanguage = t, e.config.globalProperties.$language = l;
  }
}, vt = {
  xs: "text-xs px-2 py-1 ",
  sm: "text-sm px-3 py-2 ",
  md: "text-base-1 px-4 py-2",
  lg: "text-md px-5 py-3",
  xl: "text-lg px-6 py-4"
}, Me = {
  xs: 10,
  sm: 15,
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
}, Fe = {
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
}, Ke = (e, r, t = null) => {
  const { language: l } = Xe(), o = i(() => {
    let b = "";
    return r != "" ? b = r : b = l.value, b === "dv" ? "dv" : "en";
  });
  if (typeof e == "string" && e !== "")
    return e;
  if (!e) return "";
  const s = o.value === "dv" ? "dv" : "en";
  return t ? e[s][t] : e[s];
};
function Ct(e) {
  const r = e.value, l = typeof r == "object" && r !== null && ("text" in r || "placement" in r || "arrow" in r || "openOnHover" in r || "showDelay" in r || "hideDelay" in r || "disabled" in r);
  return {
    text: typeof r == "string" ? r : l && "text" in r ? r.text : l ? "default tooltip" : r,
    placement: l && r.placement ? r.placement : "top",
    arrow: l && r.arrow !== void 0 ? !!r.arrow : !0,
    openOnHover: l && r.openOnHover !== void 0 ? !!r.openOnHover : !0,
    openOnFocus: l && r.openOnFocus !== void 0 ? !!r.openOnFocus : !0,
    openOnClick: l && r.openOnClick !== void 0 ? !!r.openOnClick : !1,
    showDelay: l && r.showDelay !== void 0 ? Number(r.showDelay) : 80,
    hideDelay: l && r.hideDelay !== void 0 ? Number(r.hideDelay) : 80,
    offset: l && r.offset ? r.offset : { x: 0, y: 0 },
    disabled: l && r.disabled !== void 0 ? !!r.disabled : !1
  };
}
function $t(e, r) {
  return !(r?.hover || r?.click || r?.focus) ? e : {
    ...e,
    openOnHover: !!r.hover,
    openOnClick: !!r.click,
    openOnFocus: !!r.focus
  };
}
function zt(e, r) {
  if (!r) return e;
  const l = ["top", "bottom", "left", "right"].find((o) => r[o]);
  return l ? { ...e, placement: l } : e;
}
function Bt(e) {
  const r = ["faruma"], t = [];
  if (!e) return t;
  for (const l of r)
    e[l] && t.push(l);
  return t;
}
function Mt(e) {
  if (!e.tooltipEl) return;
  const r = ["faruma"];
  for (const t of r)
    e.classModifiers.includes(t) ? e.tooltipEl.classList.add(t) : e.tooltipEl.classList.remove(t);
}
function _t(e) {
  return !Te.value ? e : e === "left" ? "right" : e === "right" ? "left" : e;
}
function At(e) {
  return e && Ke(e, "") || "empty-tooltip";
}
function el(e) {
  if (e.tooltipEl) return;
  const r = document.createElement("div");
  r.className = "vts-tooltip", r.setAttribute("role", "tooltip"), r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", r.style.visibility = "hidden", r.style.zIndex = "var(--vts-z-tooltip, 1000)";
  const t = document.createElement("div");
  t.className = "vts-tooltip-content";
  const { language: l } = Xe();
  if ((l.value === "dv" || e.classModifiers.includes("faruma")) && t.classList.add("faruma"), t.textContent = At(e.options.text), r.appendChild(t), e.options.arrow) {
    const o = document.createElement("div");
    o.className = "vts-tooltip-arrow", r.appendChild(o), e.arrowEl = o;
  }
  document.body.appendChild(r), e.tooltipEl = r, Mt(e);
}
function It(e) {
  if (!e.tooltipEl) return;
  const r = e.tooltipEl.querySelector(".vts-tooltip-content");
  if (r) {
    r.textContent = At(e.options.text);
    const { language: t } = Xe();
    t.value === "dv" || e.classModifiers.includes("faruma") ? r.classList.add("faruma") : r.classList.remove("faruma");
  }
}
function gt(e, r) {
  if (!r.tooltipEl) return;
  const t = r.tooltipEl, l = e.getBoundingClientRect(), o = t.getBoundingClientRect(), s = window.scrollX || window.pageXOffset, b = window.scrollY || window.pageYOffset, y = _t(r.options.placement || "top"), x = r.options.offset?.x ?? 0, I = r.options.offset?.y ?? 0, g = r.options.arrow ? 8 : 0;
  let c = 0, m = 0;
  switch (y) {
    case "top":
      c = l.top + b - o.height - g - I, m = l.left + s + l.width / 2 - o.width / 2 + x;
      break;
    case "bottom":
      c = l.bottom + b + g + I, m = l.left + s + l.width / 2 - o.width / 2 + x;
      break;
    case "left":
      c = l.top + b + l.height / 2 - o.height / 2 + I, m = l.left + s - o.width - g - x;
      break;
    case "right":
      c = l.top + b + l.height / 2 - o.height / 2 + I, m = l.right + s + g + x;
      break;
  }
  if (t.style.top = `${c}px`, t.style.left = `${m}px`, t.style.visibility = "", r.options.arrow && r.arrowEl) {
    const u = r.arrowEl;
    switch (u.style.width = "8px", u.style.height = "8px", y) {
      case "top":
        u.style.bottom = "-4px", u.style.left = "50%", u.style.top = "", u.style.right = "", u.style.transform = "translateX(-50%) rotate(225deg)";
        break;
      case "bottom":
        u.style.top = "-4px", u.style.left = "50%", u.style.bottom = "", u.style.right = "", u.style.transform = "translateX(-50%) rotate(45deg)";
        break;
      case "left":
        u.style.right = "-4px", u.style.top = "50%", u.style.left = "", u.style.bottom = "", u.style.transform = "translateY(-50%) rotate(135deg)";
        break;
      case "right":
        u.style.left = "-4px", u.style.top = "50%", u.style.right = "", u.style.bottom = "", u.style.transform = "translateY(-50%) rotate(315deg)";
        break;
    }
  }
}
function dt(e, r, t = null) {
  r.options.disabled || (r.showTimer && window.clearTimeout(r.showTimer), r.hideTimer && window.clearTimeout(r.hideTimer), r.showTimer = window.setTimeout(() => {
    r.lastTrigger = t, el(r), r.open = !0, gt(e, r);
  }, r.options.showDelay ?? 80));
}
function qe(e) {
  e.showTimer && window.clearTimeout(e.showTimer), e.hideTimer && window.clearTimeout(e.hideTimer), e.hideTimer = window.setTimeout(() => {
    e.open = !1, e.tooltipEl && (e.tooltipEl.style.visibility = "hidden"), e.lastTrigger = null;
  }, e.options.hideDelay ?? 80);
}
function tl(e, r) {
  e.removeEventListener("mouseover", r.handlers.mouseover), e.removeEventListener("mouseout", r.handlers.mouseout), e.removeEventListener("focusin", r.handlers.focusin), e.removeEventListener("focusout", r.handlers.focusout), e.removeEventListener("click", r.handlers.click), document.removeEventListener("click", r.handlers.docClick), document.removeEventListener("keydown", r.handlers.keydown), r.unwatchLanguage && r.unwatchLanguage(), r.tooltipEl && r.tooltipEl.parentNode && r.tooltipEl.parentNode.removeChild(r.tooltipEl), r.showTimer && window.clearTimeout(r.showTimer), r.hideTimer && window.clearTimeout(r.hideTimer), e.__tooltipState = void 0;
}
const ll = {
  mounted(e, r) {
    const l = {
      options: zt(
        $t(Ct(r), r.modifiers || {}),
        r.modifiers || {}
      ),
      tooltipEl: null,
      arrowEl: null,
      showTimer: null,
      hideTimer: null,
      open: !1,
      handlers: {},
      lastTrigger: null,
      classModifiers: Bt(r.modifiers)
    }, { language: o } = Xe(), s = ge(o, () => {
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
  updated(e, r) {
    const t = e.__tooltipState;
    t && (t.options = zt(
      $t(Ct(r), r.modifiers || {}),
      r.modifiers || {}
    ), t.classModifiers = Bt(r.modifiers), It(t), Mt(t), t.open && gt(e, t));
  },
  unmounted(e) {
    const r = e.__tooltipState;
    r && tl(e, r);
  }
}, je = Nt([]);
let nl = 0, ct = null;
function rl() {
  if (ct)
    return ct;
  const e = (b) => {
    const y = ++nl, x = M(!0), I = () => {
      x.value = !1, setTimeout(() => {
        const c = je.value.findIndex((m) => m.id === y);
        c > -1 && (je.value.splice(c, 1), xt(je));
      }, 300);
    }, g = {
      id: y,
      isVisible: x,
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
    return je.value.push(g), xt(je), g.options.timeout > 0 && setTimeout(() => {
      I();
    }, g.options.timeout), g;
  }, s = {
    snackbars: je,
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
}, Ge = tt({
  defaults: { ...al },
  components: {}
});
function Zs(e = {}) {
  return e;
}
function ol(e) {
  e.defaults && Object.assign(Ge.defaults, e.defaults), e.components && Object.assign(Ge.components, e.components);
}
function he(e, r) {
  const t = Ge.components[e];
  return t && t[r] !== void 0 ? t[r] : Ge.defaults[r];
}
function _s() {
  return Rt(Ge);
}
const de = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of r)
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
  setup(e, { emit: r }) {
    const { t, setLanguage: l } = ce("i18n", { t: (p) => p, setLanguage: () => {
    } }), o = r, s = ce("parentLang", ""), b = i(() => y.lang ? y.lang : s), y = e, x = {
      xs: "p-2",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
      xl: "p-3"
    }, I = i(() => Fe[y.color] ? Fe[y.color][y.variant] : Fe.primary[y.variant]), g = i(() => [
      "inline-flex items-center justify-center font-medium transition-all select-none",
      y.padding ? x[y.size] : y.icon ? "" : vt[y.size],
      we[y.rounded],
      I.value,
      y.block ? "w-full" : "",
      b.value === "dv" ? "faruma" : "",
      y.disabled || y.loading ? "opacity-90 cursor-not-allowed" : "cursor-pointer"
    ]), c = (p) => {
      !y.disabled && !y.loading && o("click", p);
    }, m = i(() => {
      if (!y.label)
        return t("buttons.submit", b.value);
      if (y.label.startsWith("buttons.")) {
        const p = t(y.label, b.value);
        if (p !== y.label)
          return p;
      }
      return y.label;
    });
    return (p, u) => (n(), a("button", {
      class: f(g.value),
      disabled: e.disabled || e.loading,
      onClick: c
    }, [
      p.$slots.prepend || e.prependIcon || e.loading ? (n(), a("span", il, [
        e.loading ? (n(), a("span", ul)) : v("", !0),
        e.loading ? v("", !0) : D(p.$slots, "prepend", { key: 1 }, () => [
          e.prependIcon ? (n(), Z(F(lt), {
            key: 0,
            name: e.prependIcon,
            type: "outline",
            size: F(Me)[y.size],
            color: "text-current",
            class: f(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : v("", !0)
        ], !0)
      ])) : v("", !0),
      d("span", dl, [
        D(p.$slots, "default", {}, () => [
          e.icon ? (n(), Z(F(lt), {
            key: 0,
            name: e.icon,
            type: "mini",
            size: F(Me)[y.size],
            color: "text-current",
            class: f(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : v("", !0),
          e.icon ? v("", !0) : (n(), a("div", cl, T(m.value), 1))
        ], !0)
      ]),
      p.$slots.append || e.appendIcon ? (n(), a("span", fl, [
        D(p.$slots, "append", {}, () => [
          e.appendIcon ? (n(), Z(F(lt), {
            key: 0,
            name: e.appendIcon,
            type: "outline",
            size: F(Me)[y.size],
            class: f(e.iconClass),
            stroke: "currentColor",
            color: "text-current"
          }, null, 8, ["name", "size", "class"])) : v("", !0)
        ], !0)
      ])) : v("", !0)
    ], 10, sl));
  }
}, ml = /* @__PURE__ */ de(gl, [["__scopeId", "data-v-a9606ff7"]]), pl = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = M(null), s = i(() => t.items.map((h) => typeof h != "object" || h === null ? {
      label: String(h),
      value: h,
      description: "",
      disabled: !1
    } : {
      label: h[t.itemLabel] || "",
      value: h[t.itemValue] ?? h,
      description: h[t.itemDescription] || "",
      disabled: h[t.itemDisabled] || !1
    })), b = (h) => t.modelValue === null || t.modelValue === void 0 ? !1 : typeof h == "object" && typeof t.modelValue == "object" ? JSON.stringify(h) === JSON.stringify(t.modelValue) : t.modelValue === h, y = (h) => {
      t.readonly || (l("update:modelValue", h), l("change", h));
    }, x = i(() => {
      const h = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return h[t.size] || h.md;
    }), I = i(() => {
      const h = {
        xs: "w-1.5 h-1.5",
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
        xl: "w-3.5 h-3.5"
      };
      return h[t.size] || h.md;
    }), g = i(() => {
      const h = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return h[t.size] || h.md;
    }), c = i(() => {
      const h = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return h[t.size] || h.md;
    }), m = i(() => {
      const h = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return h[t.size] || h.md;
    }), p = i(() => {
      const h = {
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
      return h[t.color] || h.primary;
    }), u = (h, B) => {
      const C = B || t.disabled;
      return t.error ? b(h) ? "border-red-500 text-red-500" : "border-red-500 hover:border-red-600" : C ? b(h) ? "border-gray-400 text-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : b(h) ? p.value.selected : p.value.unselected;
    }, $ = (h) => {
      if (t.error) return "bg-red-500";
      if (h || t.disabled) return "bg-gray-400";
      const B = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return B[t.color] || B.primary;
    };
    return (h, B) => (n(), a("div", {
      class: f(["relative", e.margin])
    }, [
      e.groupLabel ? (n(), a("label", {
        key: 0,
        class: f([
          "block mb-2 font-medium ui-text-primary",
          c.value
        ])
      }, [
        fe(T(e.groupLabel) + " ", 1),
        e.required ? (n(), a("span", pl, "*")) : v("", !0)
      ], 2)) : v("", !0),
      d("div", {
        class: f([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ]),
        role: "radiogroup",
        "aria-label": e.groupLabel
      }, [
        (n(!0), a(oe, null, ie(s.value, (C, q) => (n(), a("label", {
          key: C.value,
          class: f([
            "inline-flex items-start gap-3 cursor-pointer select-none group",
            C.disabled || e.disabled ? "opacity-50 cursor-not-allowed" : "",
            e.labelPosition === "left" ? "flex-row-reverse" : ""
          ]),
          onClick: ee((H) => !C.disabled && !e.disabled && y(C.value), ["prevent"])
        }, [
          d("div", {
            class: f([
              "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
              x.value,
              u(C.value, C.disabled)
            ])
          }, [
            K(xe, { name: "scale" }, {
              default: te(() => [
                b(C.value) ? (n(), a("div", {
                  key: 0,
                  class: f([
                    "rounded-full bg-current transition-all duration-200",
                    I.value,
                    $(C.disabled)
                  ])
                }, null, 2)) : v("", !0)
              ]),
              _: 2
            }, 1024),
            o.value === C.value ? (n(), a("div", bl)) : v("", !0)
          ], 2),
          C.label || C.description ? (n(), a("div", hl, [
            C.label ? (n(), a("span", {
              key: 0,
              class: f([
                "ui-text-primary leading-tight transition-colors",
                g.value,
                !C.disabled && !e.disabled ? "group-hover:text-primary" : ""
              ])
            }, T(C.label), 3)) : v("", !0),
            C.description ? (n(), a("span", {
              key: 1,
              class: f([
                "ui-text-secondary mt-0.5",
                m.value
              ])
            }, T(C.description), 3)) : v("", !0)
          ])) : v("", !0)
        ], 10, yl))), 128))
      ], 10, vl),
      e.error ? (n(), a("p", xl, [
        B[0] || (B[0] = d("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        fe(" " + T(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : v("", !0),
      e.hint && !e.error ? (n(), a("p", wl, T(e.hint), 1)) : v("", !0)
    ], 2));
  }
}, Sl = /* @__PURE__ */ de(kl, [["__scopeId", "data-v-5aa3c31e"]]), Cl = ["aria-label"], $l = {
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
  setup(e, { emit: r }) {
    const t = e, l = r;
    We("radioGroup", {
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
    return (s, b) => (n(), a("div", {
      class: f(["relative", e.margin]),
      role: "radiogroup",
      "aria-label": e.label
    }, [
      e.label ? (n(), a("label", {
        key: 0,
        class: f([
          "block mb-2 font-medium ui-text-primary",
          o.value
        ])
      }, [
        fe(T(e.label) + " ", 1),
        e.required ? (n(), a("span", $l, "*")) : v("", !0)
      ], 2)) : v("", !0),
      d("div", {
        class: f([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ])
      }, [
        D(s.$slots, "default")
      ], 2),
      e.error ? (n(), a("p", zl, [
        b[0] || (b[0] = d("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        fe(" " + T(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : v("", !0),
      e.hint && !e.error ? (n(), a("p", Bl, T(e.hint), 1)) : v("", !0)
    ], 10, Cl));
  }
}, Vl = {
  key: 0,
  class: "flex flex-col"
}, Tl = {
  key: 0,
  class: "text-red-500 ml-0.5"
}, Ll = {
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
  setup(e, { emit: r }) {
    const t = e, l = ce("radioGroup", null), o = r, s = i(() => l ? l.modelValue.value === t.value : !1), b = () => {
      l && l.select(t.value), o("update:modelValue", t.value), o("change", t.value);
    }, y = i(() => {
      const u = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return u[t.size] || u.md;
    }), x = i(() => {
      const u = {
        xs: "w-1.5 h-1.5",
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
        xl: "w-3.5 h-3.5"
      };
      return u[t.size] || u.md;
    }), I = i(() => {
      const u = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return u[t.size] || u.md;
    }), g = i(() => {
      const u = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return u[t.size] || u.md;
    }), c = i(() => {
      const u = {
        primary: { selected: "border-primary", unselected: "border-color-3 hover:border-primary" },
        success: { selected: "border-green-500", unselected: "border-color-3 hover:border-green-500" },
        warning: { selected: "border-yellow-500", unselected: "border-color-3 hover:border-yellow-500" },
        danger: { selected: "border-red-500", unselected: "border-color-3 hover:border-red-500" },
        info: { selected: "border-blue-500", unselected: "border-color-3 hover:border-blue-500" }
      };
      return u[t.color] || u.primary;
    }), m = i(() => {
      const u = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return u[t.color] || u.primary;
    }), p = i(() => t.disabled ? s.value ? "border-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : s.value ? c.value.selected : c.value.unselected);
    return (u, $) => (n(), a("label", {
      class: f([
        "inline-flex items-start gap-3 cursor-pointer select-none group",
        e.disabled ? "opacity-50 cursor-not-allowed" : "",
        e.labelPosition === "left" ? "flex-row-reverse" : "",
        e.margin
      ]),
      onClick: $[0] || ($[0] = ee((h) => !e.disabled && b(), ["prevent"]))
    }, [
      d("div", {
        class: f([
          "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
          y.value,
          p.value
        ])
      }, [
        K(xe, { name: "scale" }, {
          default: te(() => [
            s.value ? (n(), a("div", {
              key: 0,
              class: f([
                "rounded-full transition-all duration-200",
                x.value,
                m.value
              ])
            }, null, 2)) : v("", !0)
          ]),
          _: 1
        })
      ], 2),
      e.label || e.description || u.$slots.default ? (n(), a("div", Vl, [
        e.label || u.$slots.default ? (n(), a("span", {
          key: 0,
          class: f([
            "ui-text-primary leading-tight transition-colors",
            I.value,
            e.disabled ? "" : "group-hover:text-primary"
          ])
        }, [
          D(u.$slots, "default", {}, () => [
            fe(T(e.label), 1)
          ], !0),
          e.required ? (n(), a("span", Tl, "*")) : v("", !0)
        ], 2)) : v("", !0),
        e.description ? (n(), a("span", {
          key: 1,
          class: f([
            "ui-text-secondary mt-0.5",
            g.value
          ])
        }, T(e.description), 3)) : v("", !0)
      ])) : v("", !0)
    ], 2));
  }
}, Ml = /* @__PURE__ */ de(Ll, [["__scopeId", "data-v-d7324604"]]), Al = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => t.modelValue === t.trueValue), s = () => {
      if (t.disabled || t.loading || t.readonly) return;
      const h = o.value ? t.falseValue : t.trueValue;
      l("update:modelValue", h), l("change", h);
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
      const h = {
        xs: "w-7 h-4",
        sm: "w-9 h-5",
        md: "w-11 h-6",
        lg: "w-13 h-7",
        xl: "w-15 h-8"
      };
      return h[t.size] || h.md;
    }), y = i(() => {
      const h = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return h[t.size] || h.md;
    }), x = i(() => {
      const h = {
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
      return `${h[t.size] || h.md} ${B[t.size] || B.md}`;
    }), I = i(() => {
      const h = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4"
      };
      return h[t.size] || h.md;
    }), g = i(() => {
      const h = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4"
      };
      return h[t.size] || h.md;
    }), c = i(() => {
      const h = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return h[t.size] || h.md;
    }), m = i(() => {
      const h = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return h[t.size] || h.md;
    }), p = i(() => {
      const h = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return h[t.color] || h.primary;
    }), u = i(() => {
      const h = {
        primary: "text-primary",
        success: "text-green-500",
        warning: "text-yellow-500",
        danger: "text-red-500",
        info: "text-blue-500"
      };
      return h[t.color] || h.primary;
    }), $ = i(() => t.error ? o.value ? "bg-red-500" : "bg-red-200 dark:bg-red-900/30" : t.disabled || t.loading ? o.value ? "bg-gray-400 dark:bg-gray-600" : "bg-gray-200 dark:bg-gray-700" : o.value ? p.value : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600");
    return (h, B) => (n(), a("div", {
      class: f(["relative", e.margin])
    }, [
      d("label", {
        class: f([
          "inline-flex items-center gap-3 cursor-pointer select-none group",
          e.disabled || e.loading ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : "",
          e.reverse ? "justify-between w-full" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        d("div", {
          class: f([
            "relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out rounded-full",
            b.value,
            $.value,
            !e.disabled && !e.loading ? "cursor-pointer" : "cursor-not-allowed"
          ])
        }, [
          d("span", {
            class: f([
              "absolute inline-flex items-center justify-center bg-white rounded-full shadow-md transition-all duration-200 ease-in-out",
              y.value,
              x.value
            ])
          }, [
            e.loading ? (n(), a("svg", {
              key: 0,
              class: f(["animate-spin text-gray-400", I.value]),
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [...B[0] || (B[0] = [
              d("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              d("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])], 2)) : v("", !0),
            K(xe, { name: "fade" }, {
              default: te(() => [
                o.value && !e.loading && e.showIcons ? (n(), a("svg", {
                  key: 0,
                  class: f([I.value, u.value]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...B[1] || (B[1] = [
                  d("path", {
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
                !o.value && !e.loading && e.showIcons ? (n(), a("svg", {
                  key: 0,
                  class: f([I.value, "text-gray-400"]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...B[2] || (B[2] = [
                  d("path", {
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
          e.inset ? (n(), a("span", Al, [
            d("span", {
              class: f(["transition-opacity duration-200", o.value ? "opacity-100" : "opacity-0"])
            }, [
              (n(), a("svg", {
                class: f([g.value, "text-white"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...B[3] || (B[3] = [
                d("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])], 2))
            ], 2),
            d("span", {
              class: f(["transition-opacity duration-200", o.value ? "opacity-0" : "opacity-100"])
            }, [
              (n(), a("svg", {
                class: f([g.value, "text-gray-400"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...B[4] || (B[4] = [
                d("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M6 18L18 6M6 6l12 12"
                }, null, -1)
              ])], 2))
            ], 2)
          ])) : v("", !0)
        ], 2),
        e.label || e.description || h.$slots.default ? (n(), a("div", Pl, [
          e.label || h.$slots.default ? (n(), a("span", {
            key: 0,
            class: f([
              "ui-text-primary leading-tight transition-colors",
              c.value,
              !e.disabled && !e.loading ? "group-hover:text-primary" : ""
            ])
          }, [
            D(h.$slots, "default", {}, () => [
              fe(T(e.label), 1)
            ], !0),
            e.required ? (n(), a("span", Dl, "*")) : v("", !0)
          ], 2)) : v("", !0),
          e.description ? (n(), a("span", {
            key: 1,
            class: f([
              "ui-text-secondary mt-0.5",
              m.value
            ])
          }, T(e.description), 3)) : v("", !0)
        ])) : v("", !0)
      ], 2),
      e.error ? (n(), a("p", El, [
        B[5] || (B[5] = d("svg", {
          class: "w-4 h-4 flex-shrink-0",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        fe(" " + T(typeof e.error == "string" ? e.error : ""), 1)
      ])) : v("", !0),
      e.hint && !e.error ? (n(), a("p", Ol, T(e.hint), 1)) : v("", !0)
    ], 2));
  }
}, Nl = /* @__PURE__ */ de(jl, [["__scopeId", "data-v-cc32aa31"]]), Rl = ["src", "alt"], Hl = { key: 0 }, Ul = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = M(!1), s = i(() => {
      const C = {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl"
      };
      return C[t.size] || C.md;
    }), b = i(() => {
      const C = {
        xs: "text-[10px]",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl"
      };
      return C[t.size] || C.md;
    }), y = {
      xs: 14,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 30,
      "2xl": 36
    }, x = i(() => {
      const C = {
        default: "bg-color-3 text-ui-text-color",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        error: "bg-error text-white",
        warning: "bg-warning text-white",
        info: "bg-info text-white",
        gradient: "bg-gradient-to-br from-primary to-secondary text-white"
      };
      return C[t.variant] || C.default;
    }), I = i(() => {
      const C = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        square: "rounded-none"
      };
      return C[t.rounded] || C.full;
    }), g = i(() => {
      if (!t.bordered) return "";
      const C = {
        primary: "ring-primary",
        secondary: "ring-secondary",
        success: "ring-success",
        error: "ring-error",
        warning: "ring-warning",
        info: "ring-info",
        default: "ring-color-4"
      };
      return C[t.borderColor] || C.primary;
    }), c = i(() => {
      const C = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4",
        "2xl": "w-5 h-5"
      };
      if (t.badge) {
        const q = {
          xs: "w-4 h-4 min-w-[16px]",
          sm: "w-5 h-5 min-w-[20px]",
          md: "w-6 h-6 min-w-[24px]",
          lg: "w-7 h-7 min-w-[28px]",
          xl: "w-8 h-8 min-w-[32px]",
          "2xl": "w-9 h-9 min-w-[36px]"
        };
        return q[t.size] || q.md;
      }
      return C[t.size] || C.md;
    }), m = i(() => {
      const C = {
        "top-left": "-top-0.5 -left-0.5",
        "top-right": "-top-0.5 -right-0.5",
        "bottom-left": "-bottom-0.5 -left-0.5",
        "bottom-right": "-bottom-0.5 -right-0.5"
      };
      return C[t.dotPosition] || C["bottom-right"];
    }), p = i(() => {
      const C = {
        success: "bg-success",
        error: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
        primary: "bg-primary",
        secondary: "bg-secondary"
      };
      return C[t.dotColor] || C.success;
    }), u = i(() => ({
      border: "2px solid var(--bg-color)"
    })), $ = i(() => {
      if (t.initials) return t.initials.slice(0, 2);
      if (t.name) {
        const C = t.name.trim().split(" ");
        return C.length >= 2 ? (C[0][0] + C[C.length - 1][0]).toUpperCase() : C[0].slice(0, 2).toUpperCase();
      }
      return "";
    }), h = (C) => {
      o.value = !0, l("image-error", C);
    }, B = (C) => {
      t.clickable && l("click", C);
    };
    return (C, q) => {
      const H = me("Icon");
      return n(), a("div", {
        class: f([
          "inline-flex items-center justify-center flex-shrink-0 relative",
          "font-medium select-none overflow-hidden",
          s.value,
          x.value,
          I.value,
          e.bordered && "ring-2 ring-offset-2",
          g.value,
          e.clickable && "cursor-pointer hover:opacity-80 transition-opacity",
          e.containerClass
        ]),
        style: ue(e.containerStyle),
        onClick: B
      }, [
        e.src && !o.value ? (n(), a("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          class: f(["w-full h-full object-cover", e.imageClass]),
          onError: h
        }, null, 42, Rl)) : e.icon ? (n(), Z(H, {
          key: 1,
          name: e.icon,
          size: y[t.size],
          color: "text-current"
        }, null, 8, ["name", "size"])) : e.initials || e.name ? (n(), a("span", {
          key: 2,
          class: f(["uppercase font-semibold", b.value])
        }, T($.value), 3)) : (n(), Z(H, {
          key: 3,
          name: "user",
          size: y[t.size],
          color: "text-current"
        }, null, 8, ["size"])),
        e.dot || e.badge ? (n(), a("span", {
          key: 4,
          class: f([
            "absolute rounded-full",
            m.value,
            c.value,
            p.value,
            e.badge && "flex items-center justify-center text-xs font-bold text-white"
          ]),
          style: ue(u.value)
        }, [
          e.badge ? (n(), a("span", Hl, T(e.badge), 1)) : v("", !0)
        ], 6)) : v("", !0),
        D(C.$slots, "default", {}, void 0, !0)
      ], 6);
    };
  }
}, Pt = /* @__PURE__ */ de(Ul, [["__scopeId", "data-v-a1aef5d2"]]), ql = ["dir"], Fl = {
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
    rtl: { type: Boolean, default: Te.value },
    dense: Boolean,
    collapseOnScroll: Boolean
  },
  setup(e) {
    const r = e, t = ce("layout", null), l = M(null), o = M(0);
    function s() {
      l.value && (o.value = l.value.getBoundingClientRect().height, t && t.register("appBar", r.id, {
        height: o.value,
        dense: r.dense
      }));
    }
    Be(() => {
      s();
      const L = new ResizeObserver(s);
      l.value && L.observe(l.value), r.collapseOnScroll && window.addEventListener("scroll", x, { passive: !0 }), $e(() => {
        L.disconnect(), r.collapseOnScroll && window.removeEventListener("scroll", x), t && t.unregister("appBar", r.id);
      });
    });
    let b = 0;
    const y = M("");
    function x() {
      const L = window.scrollY, G = L - b;
      b = L, L > 0 && G > 0 ? y.value = "-translate-y-12 opacity-95" : y.value = "";
    }
    const I = i(() => r.rtl ? ["actions", "nav", "prepend"] : ["prepend", "nav", "actions"]), g = i(() => r.rtl ? "flex-row-reverse" : "flex-row"), c = i(() => r.rtl ? "mr-2" : ""), m = i(() => r.rtl ? "mr-2" : "ml-2"), p = i(() => {
      const L = r.titleAlign;
      return r.rtl ? {
        center: "justify-center text-center w-full",
        left: "justify-end text-right w-full",
        right: ""
      }[L] : {
        center: "justify-center text-center w-full",
        right: "justify-end text-right w-full",
        left: ""
      }[L];
    }), u = i(
      () => r.rtl ? "hidden md:flex md:mr-6 md:space-x-4 items-center" : "hidden md:flex md:ml-6 md:space-x-4 items-center"
    ), $ = i(() => r.rtl ? "space-x-2 space-x-reverse" : "space-x-2"), h = i(() => r.rtl ? "left-0" : "right-0"), B = M(!1), C = () => B.value = !B.value, q = i(() => r.shadow ? r.shadow : r.elevation ? `shadow-${r.elevation}` : ""), H = i(() => typeof r.zIndex == "string" && r.zIndex.startsWith("z-") ? r.zIndex : "z-30"), E = i(() => typeof r.zIndex == "number" ? { zIndex: r.zIndex } : void 0), Y = i(() => r.dense ? "py-1" : ""), Q = M(!1);
    return (L, G) => {
      const re = me("Icon");
      return n(), a("header", {
        ref_key: "el",
        ref: l,
        "data-component": "appbar",
        dir: e.rtl ? "rtl" : "ltr",
        class: f([
          "w-full flex flex-col transition-transform duration-300 bg-color-1",
          H.value,
          e.fixed ? "fixed top-0 left-0" : e.floating ? "absolute top-0 left-1/2 -translate-x-1/2 rounded-xl shadow-lg" : "relative",
          q.value,
          e.hidden ? "hidden" : "",
          e.color,
          e.bd,
          e.p,
          e.m,
          e.customClass,
          Y.value,
          y.value
        ]),
        style: ue([e.customStyle, E.value])
      }, [
        d("div", {
          class: f(["w-full flex items-center justify-between", g.value, e.dense ? "h-12" : "h-16"])
        }, [
          (n(!0), a(oe, null, ie(I.value, (O) => (n(), a(oe, { key: O }, [
            O === "prepend" ? (n(), a("div", {
              key: 0,
              class: f(["flex items-center", c.value])
            }, [
              D(L.$slots, "prepend"),
              e.drawer || e.menu ? (n(), a("button", {
                key: 0,
                onClick: G[0] || (G[0] = (R) => L.$emit("toggle-drawer")),
                class: "inline-flex items-center justify-center .vts-pa-2 rounded-md"
              }, [
                D(L.$slots, "drawer-icon", {}, () => [
                  K(re, {
                    name: "bars-3",
                    size: "24",
                    color: "text-gray-600"
                  })
                ])
              ])) : v("", !0),
              d("div", {
                class: f(["flex-shrink-0 flex items-center", m.value, p.value])
              }, [
                D(L.$slots, "title", {}, () => [
                  d("span", {
                    class: f(["font-semibold", e.titleClass])
                  }, T(e.title), 3)
                ])
              ], 2)
            ], 2)) : v("", !0),
            O === "nav" ? (n(), a("nav", {
              key: 1,
              class: f(u.value)
            }, [
              D(L.$slots, "nav")
            ], 2)) : v("", !0),
            O === "actions" ? (n(), a("div", {
              key: 2,
              class: f(["flex items-center", $.value])
            }, [
              D(L.$slots, "actions"),
              e.overflowActions.length ? (n(), a("div", Fl, [
                d("button", {
                  onClick: C,
                  class: "p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                }, [
                  K(re, {
                    name: "ellipsis-vertical",
                    size: "20"
                  })
                ]),
                B.value ? (n(), a("div", {
                  key: 0,
                  class: f(["absolute vts-mt-2 w-40 rounded shadow-lg z-50 bg-color-1", h.value])
                }, [
                  d("ul", null, [
                    (n(!0), a(oe, null, ie(e.overflowActions, (R, A) => (n(), a("li", { key: A }, [
                      d("button", {
                        onClick: R.onClick,
                        class: "w-full flex gap-2 text-left px-4 py-2 hover:bg-color-2"
                      }, [
                        R.icon ? (n(), a("span", Kl, [
                          K(re, {
                            name: R.icon
                          }, null, 8, ["name"])
                        ])) : v("", !0),
                        fe(" " + T(R.label), 1)
                      ], 8, Wl)
                    ]))), 128))
                  ])
                ], 2)) : v("", !0)
              ])) : v("", !0),
              D(L.$slots, "append")
            ], 2)) : v("", !0)
          ], 64))), 128))
        ], 2),
        ze(d("div", Gl, [
          d("div", Yl, [
            D(L.$slots, "mobile-nav")
          ])
        ], 512), [
          [Ee, Q.value]
        ])
      ], 14, ql);
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => {
      if (t.rounded === "full") {
        const h = {
          xs: "w-[18px] h-[18px] text-[10px] p-0",
          sm: "w-[20px] h-[20px] text-[10px] p-0",
          md: "w-[24px] h-[24px] text-xs p-0",
          lg: "w-[28px] h-[28px] text-sm p-0",
          xl: "w-[32px] h-[32px] text-base p-0"
        };
        return h[t.size] || h.md;
      }
      const $ = {
        xs: "px-1.5 py-0.5 text-[10px] gap-0.5",
        sm: "px-2 py-0.5 text-xs gap-1",
        md: "px-2.5 py-1 text-sm gap-1",
        lg: "px-3 py-1.5 text-base gap-1.5",
        xl: "px-4 py-2 text-lg gap-2"
      };
      return $[t.size] || $.md;
    }), s = i(() => {
      const $ = {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 20
      };
      return $[t.size] || $.md;
    }), b = i(() => {
      const $ = {
        xs: "w-1 h-1",
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
        xl: "w-3 h-3"
      };
      return $[t.size] || $.md;
    }), y = i(() => {
      const $ = {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5",
        md: "w-4 h-4",
        lg: "w-5 h-5",
        xl: "w-6 h-6"
      };
      return $[t.size] || $.md;
    }), x = i(() => {
      const $ = {
        default: "bg-color-3 text-ui-text-color",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        error: "bg-error text-white",
        warning: "bg-warning text-white",
        info: "bg-info text-white",
        outline: "bg-transparent text-ui-text-color border border-color"
      };
      return $[t.variant] || $.default;
    }), I = i(() => {
      const $ = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        pill: "rounded-full"
      };
      return $[t.rounded] || $.md;
    }), g = i(() => {
      if (!t.bordered) return "";
      const $ = {
        default: "ring-color-4",
        primary: "ring-primary",
        secondary: "ring-secondary",
        success: "ring-success",
        error: "ring-error",
        warning: "ring-warning",
        info: "ring-info",
        outline: "ring-color"
      };
      return $[t.variant] || $.default;
    }), c = i(() => t.dotColor && {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      error: "bg-error",
      warning: "bg-warning",
      info: "bg-info"
    }[t.dotColor] || "bg-current"), m = i(() => t.uppercase ? "uppercase" : ""), p = ($) => {
      t.clickable && l("click", $);
    }, u = ($) => {
      l("close", $);
    };
    return ($, h) => {
      const B = me("Icon");
      return n(), a("span", {
        class: f([
          "inline-flex items-center justify-center font-medium transition-all",
          o.value,
          x.value,
          I.value,
          e.bordered && "ring-1 ring-offset-1",
          g.value,
          e.clickable && "cursor-pointer hover:opacity-80",
          e.dot && "pl-1.5",
          e.containerClass
        ]),
        style: ue(e.containerStyle),
        onClick: p
      }, [
        e.dot ? (n(), a("span", {
          key: 0,
          class: f([
            "rounded-full mr-1.5",
            b.value,
            c.value
          ])
        }, null, 2)) : v("", !0),
        e.icon && e.iconPosition === "left" ? (n(), Z(B, {
          key: 1,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: f(["flex-shrink-0", e.content && "mr-1"])
        }, null, 8, ["name", "type", "size", "class"])) : v("", !0),
        e.content || $.$slots.default ? (n(), a("span", {
          key: 2,
          class: f(m.value)
        }, [
          D($.$slots, "default", {}, () => [
            fe(T(e.content), 1)
          ], !0)
        ], 2)) : v("", !0),
        e.icon && e.iconPosition === "right" ? (n(), Z(B, {
          key: 3,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: f(["flex-shrink-0", e.content && "ml-1"])
        }, null, 8, ["name", "type", "size", "class"])) : v("", !0),
        e.closeable ? (n(), a("button", {
          key: 4,
          type: "button",
          onClick: ee(u, ["stop"]),
          class: f([
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
}, Ql = /* @__PURE__ */ de(Jl, [["__scopeId", "data-v-6732e204"]]), Zl = {
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
  setup(e, { expose: r, emit: t }) {
    const l = e, o = t, s = M(l.modelValue), b = M(100);
    let y = null, x = null;
    ge(() => l.modelValue, (H) => {
      s.value = H, H && l.timeout && C();
    });
    const I = i(() => l.icon), g = i(() => {
      const H = [
        "w-full relative overflow-hidden",
        l.sticky ? "sticky z-50" : "relative"
      ];
      l.sticky && H.push(l.position === "bottom" ? "bottom-0" : "top-0");
      const E = {
        default: "bg-background border-border text-foreground",
        info: "bg-blue-50 border-blue-200 text-blue-900",
        success: "bg-green-50 border-green-200 text-green-900",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
        error: "bg-red-50 border-red-200 text-red-900"
      };
      return H.push(E[l.variant]), l.outlined ? H.push("border-t-4") : H.push("border-t"), l.elevation && H.push("shadow-md"), H.push(we[l.rounded]), H;
    }), c = i(() => [
      "flex items-start gap-3",
      l.dense ? "p-3" : "p-4"
    ]), m = i(() => [
      "font-semibold",
      l.dense ? "text-sm" : "text-base"
    ]), p = i(() => [
      l.dense ? "text-xs" : "text-sm",
      "mt-1"
    ]), u = i(() => [
      "flex-shrink-0 rounded-md p-1.5",
      "hover:bg-black/5 dark:hover:bg-white/10",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "transition-colors"
    ]), $ = i(() => [
      "absolute bottom-0 left-0 h-1 transition-all duration-100",
      {
        default: "bg-gray-400",
        info: "bg-blue-400",
        success: "bg-green-400",
        warning: "bg-yellow-400",
        error: "bg-red-400"
      }[l.variant]
    ]), h = i(() => ({
      width: `${b.value}%`
    })), B = () => {
      s.value = !1, o("update:modelValue", !1), o("close"), q();
    }, C = () => {
      if (!l.timeout) return;
      q();
      const H = Date.now(), E = l.timeout;
      l.showProgress && (x = setInterval(() => {
        const Y = Date.now() - H;
        b.value = Math.max(0, 100 - Y / E * 100);
      }, 10)), y = setTimeout(() => {
        B(), o("dismiss");
      }, l.timeout);
    }, q = () => {
      y && (clearTimeout(y), y = null), x && (clearInterval(x), x = null), b.value = 100;
    };
    return Be(() => {
      s.value && l.timeout && C();
    }), $e(() => {
      q();
    }), r({ close: B }), (H, E) => (n(), Z(xe, {
      "enter-active-class": "transition ease-out duration-300",
      "enter-from-class": "transform translate-y-[-100%] opacity-0",
      "enter-to-class": "transform translate-y-0 opacity-100",
      "leave-active-class": "transition ease-in duration-200",
      "leave-from-class": "transform translate-y-0 opacity-100",
      "leave-to-class": "transform translate-y-[-100%] opacity-0"
    }, {
      default: te(() => [
        s.value ? (n(), a("div", {
          key: 0,
          class: f(g.value),
          role: "alert"
        }, [
          d("div", {
            class: f(c.value)
          }, [
            H.$slots.prepend || I.value ? (n(), a("div", Zl, [
              D(H.$slots, "prepend", {}, () => [
                I.value === "info" ? (n(), a("svg", _l, [...E[0] || (E[0] = [
                  d("path", {
                    "fill-rule": "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : I.value === "success" ? (n(), a("svg", en, [...E[1] || (E[1] = [
                  d("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : I.value === "warning" ? (n(), a("svg", tn, [...E[2] || (E[2] = [
                  d("path", {
                    "fill-rule": "evenodd",
                    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : I.value === "error" ? (n(), a("svg", ln, [...E[3] || (E[3] = [
                  d("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : v("", !0)
              ], !0)
            ])) : v("", !0),
            d("div", nn, [
              e.title || H.$slots.title ? (n(), a("div", {
                key: 0,
                class: f(m.value)
              }, [
                D(H.$slots, "title", {}, () => [
                  fe(T(e.title), 1)
                ], !0)
              ], 2)) : v("", !0),
              e.message || H.$slots.default ? (n(), a("div", {
                key: 1,
                class: f(p.value)
              }, [
                D(H.$slots, "default", {}, () => [
                  fe(T(e.message), 1)
                ], !0)
              ], 2)) : v("", !0)
            ]),
            H.$slots.actions || e.closeable ? (n(), a("div", rn, [
              D(H.$slots, "actions", {}, void 0, !0),
              e.closeable ? (n(), a("button", {
                key: 0,
                onClick: B,
                class: f(u.value),
                "aria-label": "Close banner"
              }, [...E[4] || (E[4] = [
                d("svg", {
                  class: "h-4 w-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  d("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])], 2)) : v("", !0)
            ])) : v("", !0)
          ], 2),
          e.timeout && e.showProgress ? (n(), a("div", {
            key: 0,
            class: f($.value),
            style: ue(h.value)
          }, null, 6)) : v("", !0)
        ], 2)) : v("", !0)
      ]),
      _: 3
    }));
  }
}, on = /* @__PURE__ */ de(an, [["__scopeId", "data-v-3396a451"]]), sn = ["aria-label"], un = {
  key: 0,
  class: "flex items-center"
}, dn = ["href"], cn = { key: 1 }, fn = ["href", "onClick"], gn = ["aria-current"], mn = { key: 1 }, pn = {
  __name: "Breadcrumbs",
  props: {
    items: {
      type: Array,
      required: !0,
      validator: (e) => e.every((r) => r.label)
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => {
      const g = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return g[t.size] || g.md;
    }), s = i(() => {
      const g = {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3"
      };
      return g[t.size] || g.md;
    }), b = i(() => {
      const g = {
        default: "text-ui-text-secondary hover:underline",
        muted: "text-ui-text-secondary/70 hover:text-ui-text-secondary hover:underline",
        bold: "text-ui-text-color font-medium hover:underline"
      };
      return g[t.variant] || g.default;
    }), y = i(() => {
      const g = {
        default: "text-ui-text-color font-medium",
        muted: "text-ui-text-secondary",
        bold: "text-ui-text-color font-semibold"
      };
      return g[t.variant] || g.default;
    }), x = i(() => "text-ui-text-secondary/50"), I = (g, c) => {
      g.disabled || (l("item-click", { item: g, index: c }), l("click", { item: g, index: c }));
    };
    return (g, c) => {
      const m = me("Icon");
      return n(), a("nav", {
        "aria-label": e.ariaLabel,
        class: f([
          "flex items-center",
          e.containerClass
        ]),
        style: ue(e.containerStyle)
      }, [
        d("ol", {
          class: f([
            "flex items-center flex-wrap",
            o.value,
            s.value
          ])
        }, [
          e.showHome ? (n(), a("li", un, [
            d("a", {
              href: e.homeHref,
              onClick: c[0] || (c[0] = ee((p) => I({ label: "Home", href: e.homeHref, icon: e.homeIcon }, 0), ["prevent"])),
              class: f([
                "inline-flex items-center transition-colors",
                b.value,
                "hover:text-primary"
              ])
            }, [
              K(m, {
                name: e.homeIcon,
                size: 16,
                color: "text-current"
              }, null, 8, ["name"])
            ], 10, dn),
            d("span", {
              class: f(["mx-2", x.value])
            }, [
              e.separatorIcon ? (n(), Z(m, {
                key: 0,
                name: e.separatorIcon,
                size: 12,
                color: "text-current"
              }, null, 8, ["name"])) : (n(), a("span", cn, T(e.separator), 1))
            ], 2)
          ])) : v("", !0),
          (n(!0), a(oe, null, ie(e.items, (p, u) => (n(), a("li", {
            key: u,
            class: "flex items-center"
          }, [
            D(g.$slots, "item", {
              item: p,
              index: u,
              isLast: u === e.items.length - 1
            }, () => [
              u !== e.items.length - 1 && !p.disabled ? (n(), a("a", {
                key: 0,
                href: p.href || "#",
                onClick: ee(($) => I(p, u), ["prevent"]),
                class: f([
                  "inline-flex items-center gap-2 transition-colors",
                  b.value,
                  "hover:text-primary",
                  p.class
                ])
              }, [
                p.icon ? (n(), Z(m, {
                  key: 0,
                  name: p.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : v("", !0),
                d("span", null, T(p.label), 1)
              ], 10, fn)) : (n(), a("span", {
                key: 1,
                class: f([
                  "inline-flex items-center gap-2",
                  y.value,
                  p.disabled && "opacity-50 cursor-not-allowed",
                  p.class
                ]),
                "aria-current": u === e.items.length - 1 ? "page" : void 0
              }, [
                p.icon ? (n(), Z(m, {
                  key: 0,
                  name: p.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : v("", !0),
                d("span", {
                  class: f(e.truncate && "truncate max-w-[200px]")
                }, T(p.label), 3)
              ], 10, gn))
            ], !0),
            u !== e.items.length - 1 ? (n(), a("span", {
              key: 0,
              class: f(["mx-2", x.value]),
              "aria-hidden": "true"
            }, [
              D(g.$slots, "separator", {}, () => [
                e.separatorIcon ? (n(), Z(m, {
                  key: 0,
                  name: e.separatorIcon,
                  size: 12,
                  color: "text-current"
                }, null, 8, ["name"])) : (n(), a("span", mn, T(e.separator), 1))
              ], !0)
            ], 2)) : v("", !0)
          ]))), 128))
        ], 2)
      ], 14, sn);
    };
  }
}, vn = /* @__PURE__ */ de(pn, [["__scopeId", "data-v-cf675483"]]), yn = ["dir"], bn = {
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
    const { language: r } = ce("i18n", { language: M("en"), t: (x) => x, setLanguage: () => {
    } }), t = e, l = i(() => {
      let x = "";
      return t.dir == "rtl" || t.lang == "dv" ? x = "rtl" : t.dir == "ltr" || t.lang == "en" ? x = "ltr" : x = "", x;
    }), o = i(() => {
      let x = "";
      return t.lang != "" ? x = t.lang : t.dir == "rtl" ? x = "dv" : t.dir == "ltr" ? x = "en" : x = r.value, console.log("selectLanguage in Card222:", x), x === "dv" ? "dv" : "en";
    });
    We("parentDir", l.value), We("parentLang", o.value);
    const s = i(() => ({
      id: t.id,
      dir: l.value,
      lang: o.value
    })), b = i(() => o.value == "dv" ? "faruma" : ""), y = i(() => Ke(t.labels, o.value, ""));
    return (x, I) => (n(), a("div", {
      dir: l.value !== "" ? l.value : "",
      class: f([b.value, e.margin, e.border, F(we)[e.rounded], e.shadow, e.cardClass, e.width, e.bg, "relative"])
    }, [
      x.$slots.header || e.title || e.labels && (e.labels.en.title !== "" || e.labels.dv.title !== "") ? (n(), a("div", bn, [
        D(x.$slots, "header", {}, () => [
          d("div", {
            class: f([e.headerClass, e.headerBg, e.headerPadding, F(Qt)[e.rounded], e.headerBd, e.headerText, "overflow-hidden"])
          }, [
            d("h3", {
              class: f([e.titleClass, e.headerTextSize])
            }, T(y.value.title ? y.value.title : t.title), 3)
          ], 2)
        ])
      ])) : v("", !0),
      d("div", {
        class: f([e.bodyClass, e.padding, e.textColor, e.textSize])
      }, [
        D(x.$slots, "default", { attrs: s.value }, () => [
          fe(T(y.value.body ? y.value.body : ""), 1)
        ])
      ], 2),
      x.$slots.footer ? (n(), a("div", {
        key: 1,
        class: f([e.footerClass, e.footerBg, e.footerText, e.footerTextSize, e.footerBd, e.footerMargin, e.footerPadding, F(Zt)[e.rounded]])
      }, [
        D(x.$slots, "footer", {}, () => [
          fe(T(y.value.footer ? y.value.footer : ""), 1)
        ])
      ], 2)) : v("", !0)
    ], 10, yn));
  }
}, Ne = M(null);
function xn() {
  function e(l) {
    const o = typeof l == "string" ? { message: l } : l;
    return new Promise((s) => {
      Ne.value = { options: o, resolve: s };
    });
  }
  function r() {
    Ne.value?.resolve(!0), Ne.value = null;
  }
  function t() {
    Ne.value?.resolve(!1), Ne.value = null;
  }
  return { pending: Ne, confirm: e, accept: r, dismiss: t };
}
const wn = { class: "px-3 pt-6 pb-2 flex flex-col items-center text-center gap-3" }, kn = {
  key: 0,
  class: "text-base font-semibold leading-snug"
}, Sn = { class: "text-sm ui-text-secondary leading-relaxed" }, Cn = { class: "flex justify-end gap-2 px-3 py-4" }, $n = /* @__PURE__ */ Ie({
  __name: "ConfirmDialog",
  setup(e) {
    const { pending: r, accept: t, dismiss: l } = xn(), o = i(() => !!r.value), s = i(() => r.value?.options.variant ?? "danger"), b = i(() => ({
      danger: "trash",
      warning: "exclamation-triangle",
      info: "information-circle"
    })[s.value] ?? "trash"), y = i(() => ({
      danger: "text-red-500",
      warning: "text-yellow-500",
      info: "text-blue-500"
    })[s.value] ?? "text-red-500"), x = i(() => {
      const g = {
        danger: "bg-red-100 dark:bg-red-900/30",
        warning: "bg-yellow-100 dark:bg-yellow-900/30",
        info: "bg-blue-100 dark:bg-blue-900/30"
      };
      return g[s.value] ?? g.danger;
    }), I = i(() => ({ danger: "danger", warning: "warning", info: "primary" })[s.value] ?? "danger");
    return (g, c) => {
      const m = me("Icon"), p = me("Button"), u = me("Overlay");
      return n(), Z(u, {
        "model-value": o.value,
        persistent: !1,
        width: "md:w-[420px] w-[90vw]",
        "z-index": "z-[200]",
        "onUpdate:modelValue": F(l)
      }, {
        footer: te(() => [
          d("div", Cn, [
            K(p, {
              label: F(r)?.options.cancelLabel ?? "Cancel",
              variant: "outlined",
              color: "gray",
              "prepend-icon": "x-mark",
              size: "sm",
              onClick: F(l)
            }, null, 8, ["label", "onClick"]),
            K(p, {
              label: F(r)?.options.confirmLabel ?? "Confirm",
              color: I.value,
              "prepend-icon": "check",
              size: "sm",
              onClick: F(t)
            }, null, 8, ["label", "color", "onClick"])
          ])
        ]),
        default: te(() => [
          d("div", wn, [
            d("div", {
              class: f(["flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0", x.value])
            }, [
              K(m, {
                name: b.value,
                size: 28,
                color: y.value
              }, null, 8, ["name", "color"])
            ], 2),
            F(r)?.options.title ? (n(), a("h3", kn, T(F(r).options.title), 1)) : v("", !0),
            d("p", Sn, T(F(r)?.options.message), 1)
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
    const r = e, t = nt(), l = i(() => !!(r.text || t.default)), o = i(() => r.orientation === "vertical" ? "flex-col h-full" : "flex-row w-full"), s = i(() => {
      if (r.orientation === "vertical") {
        const c = {
          none: "",
          xs: "mx-1",
          sm: "mx-2",
          md: "mx-4",
          lg: "mx-6",
          xl: "mx-8"
        };
        return c[r.spacing] || c.md;
      } else {
        const c = {
          none: "",
          xs: "my-1",
          sm: "my-2",
          md: "my-4",
          lg: "my-6",
          xl: "my-8"
        };
        return c[r.spacing] || c.md;
      }
    }), b = i(() => `${r.inset ? r.orientation === "vertical" ? "my-4" : "mx-4" : ""}`), y = i(() => {
      if (r.orientation === "vertical") {
        const c = {
          thin: "w-px",
          medium: "w-0.5",
          thick: "w-1"
        };
        return c[r.thickness] || c.thin;
      } else {
        const c = {
          thin: "h-px",
          medium: "h-0.5",
          thick: "h-1"
        };
        return c[r.thickness] || c.thin;
      }
    }), x = i(() => {
      const c = {
        default: "bg-color-3 border-color-3",
        dashed: "border-color-3 border-dashed",
        dotted: "border-color-3 border-dotted",
        thick: "bg-color-3 border-color-3",
        gradient: "bg-gradient-to-r from-transparent via-color-3 to-transparent"
      }, m = c[r.variant] || c.default;
      if (r.variant === "dashed" || r.variant === "dotted") {
        const p = r.orientation === "vertical" ? "border-l" : "border-t";
        return `${m} ${p}`;
      }
      return m;
    }), I = i(() => r.color ? r.variant === "dashed" || r.variant === "dotted" ? { borderColor: r.color } : { backgroundColor: r.color } : {}), g = i(() => {
      const c = r.orientation === "vertical" ? "py-2" : "px-4", m = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg"
      };
      return `${c} ${m[r.textSize] || m.sm} text-ui-text-secondary font-medium`;
    });
    return (c, m) => (n(), a("div", {
      class: f([
        "flex items-center",
        o.value,
        s.value,
        e.containerClass
      ]),
      style: ue(e.containerStyle),
      role: "separator",
      "aria-orientation": e.orientation
    }, [
      l.value && e.orientation === "horizontal" && e.position === "left" ? (n(), a("div", {
        key: 0,
        class: f(["flex-shrink-0", g.value])
      }, [
        D(c.$slots, "default", {}, () => [
          fe(T(e.text), 1)
        ], !0)
      ], 2)) : v("", !0),
      d("div", {
        class: f([
          "flex-grow",
          b.value,
          y.value,
          x.value,
          e.orientation === "vertical" && "h-full"
        ]),
        style: ue(I.value)
      }, null, 6),
      l.value && e.orientation === "horizontal" && e.position === "center" ? (n(), a("div", {
        key: 1,
        class: f(["flex-shrink-0", g.value])
      }, [
        D(c.$slots, "default", {}, () => [
          fe(T(e.text), 1)
        ], !0)
      ], 2)) : v("", !0),
      l.value && e.orientation === "horizontal" ? (n(), a("div", {
        key: 2,
        class: f([
          "flex-grow",
          b.value,
          y.value,
          x.value
        ]),
        style: ue(I.value)
      }, null, 6)) : v("", !0),
      l.value && e.orientation === "horizontal" && e.position === "right" ? (n(), a("div", {
        key: 3,
        class: f(["flex-shrink-0", g.value])
      }, [
        D(c.$slots, "default", {}, () => [
          fe(T(e.text), 1)
        ], !0)
      ], 2)) : v("", !0)
    ], 14, zn));
  }
}, In = /* @__PURE__ */ de(Bn, [["__scopeId", "data-v-3b94e81d"]]), Vn = ["onClick"], Tn = {
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
  setup(e, { expose: r, emit: t }) {
    const l = e, o = t, s = M(l.modelValue), b = M(null), y = M(null), x = M({}), I = i(() => {
      const E = Fe[l.color] || Fe.gray;
      return E[l.variant] || E.contained;
    }), g = i(() => [
      "inline-flex items-center justify-center font-medium transition-all cursor-pointer select-none",
      l.icon ? "" : vt[l.size],
      we[l.rounded],
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      I.value,
      l.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    ]), c = i(() => [
      "fixed z-50 ui-bg-color",
      "border border-color shadow-lg",
      we[l.rounded],
      "p-1.5",
      "overflow-auto"
    ]), m = i(() => [
      "relative flex cursor-pointer select-none items-center",
      we[l.rounded],
      "px-2.5 py-1.5 text-sm outline-none transition-colors",
      "hover:bg-color-1 ui-text-color",
      "focus:bg-color-2",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    ]);
    ge(() => l.modelValue, (E) => {
      s.value = E, E && Le(() => B());
    });
    const p = () => {
      l.disabled || (s.value = !s.value, o("update:modelValue", s.value), s.value ? (o("opened"), Le(() => B())) : o("closed"));
    }, u = () => {
      l.disabled || s.value || (s.value = !0, o("update:modelValue", !0), o("opened"), Le(() => B()));
    }, $ = () => {
      s.value && (s.value = !1, o("update:modelValue", !1), o("closed"));
    }, h = (E) => {
      o("select", E), l.closeOnContentClick && $();
    }, B = () => {
      if (!b.value || !y.value) return;
      const E = b.value.getBoundingClientRect(), Y = y.value.getBoundingClientRect(), Q = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      let L = E.bottom + l.offsetY, G = E.left + l.offsetX;
      const re = L + Y.height > Q.height, O = G + Y.width > Q.width;
      re && (L = E.top - Y.height - l.offsetY), l.align === "right" ? G = E.right - Y.width + l.offsetX : l.align === "center" && (G = E.left + E.width / 2 - Y.width / 2 + l.offsetX), O && (G = Q.width - Y.width - 8), G < 8 && (G = 8);
      const R = l.width === "auto" ? `${Math.max(E.width, parseInt(l.minWidth))}px` : typeof l.width == "number" ? `${l.width}px` : l.width;
      x.value = {
        position: "fixed",
        top: `${L}px`,
        left: `${G}px`,
        width: R,
        minWidth: `${l.minWidth}px`,
        maxHeight: `${l.maxHeight}px`,
        zIndex: 50 + l.elevation
      };
    }, C = (E) => {
      b.value && !b.value.contains(E.target) && y.value && !y.value.contains(E.target) && $();
    }, q = () => {
      l.openOnHover && u();
    }, H = () => {
      l.openOnHover && $();
    };
    return Be(() => {
      document.addEventListener("click", C), window.addEventListener("scroll", B, !0), window.addEventListener("resize", B), l.openOnHover && b.value && (b.value.addEventListener("mouseenter", q), b.value.addEventListener("mouseleave", H));
    }), $e(() => {
      document.removeEventListener("click", C), window.removeEventListener("scroll", B, !0), window.removeEventListener("resize", B), l.openOnHover && b.value && (b.value.removeEventListener("mouseenter", q), b.value.removeEventListener("mouseleave", H));
    }), r({ open: u, close: $, toggle: p }), (E, Y) => (n(), a(oe, null, [
      d("div", {
        ref_key: "triggerRef",
        ref: b,
        onClick: p,
        class: "inline-block"
      }, [
        D(E.$slots, "trigger", {}, () => [
          d("button", {
            class: f(g.value)
          }, [
            D(E.$slots, "label", {}, () => [
              fe(T(e.label), 1)
            ], !0),
            (n(), a("svg", {
              class: f(["ml-2 h-4 w-4 transition-transform", { "rotate-180": s.value }]),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...Y[0] || (Y[0] = [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              }, null, -1)
            ])], 2))
          ], 2)
        ], !0)
      ], 512),
      (n(), Z(Ye, { to: "body" }, [
        K(xe, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: te(() => [
            s.value ? (n(), a("div", {
              key: 0,
              ref_key: "menuRef",
              ref: y,
              style: ue(x.value),
              class: f(c.value)
            }, [
              D(E.$slots, "default", {}, () => [
                (n(!0), a(oe, null, ie(e.items, (Q, L) => (n(), a("div", {
                  key: L,
                  onClick: (G) => h(Q),
                  class: f(m.value)
                }, T(Q.label || Q), 11, Vn))), 128))
              ], !0)
            ], 6)) : v("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}, Ln = /* @__PURE__ */ de(Tn, [["__scopeId", "data-v-da7264aa"]]), Mn = ["tabindex"], An = {
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
  setup(e, { emit: r }) {
    const { language: t } = ce("i18n", { language: M("en"), t: (g) => g, setLanguage: () => {
    } }), l = {
      xs: "text-xs  px-2   py-1",
      sm: "text-xs  px-2.5 py-1.5",
      md: "text-sm  px-2.5 py-1.5",
      lg: "text-sm  px-3   py-2",
      xl: "text-base px-3  py-2.5"
    }, o = e, s = r, b = i(() => [
      "relative flex cursor-pointer select-none items-center gap-2",
      "outline-none transition-colors",
      we[o.rounded],
      l[o.size] ?? l.md,
      o.disabled ? "pointer-events-none opacity-50" : "hover:bg-color-1 ui-text-color focus:bg-color-2",
      o.active ? "bg-color-2 ui-text-color" : ""
    ]), y = () => {
      o.disabled || s("select");
    }, x = i(() => {
      let g = "";
      return o.lang != "" ? g = o.lang : o.dir == "rtl" ? g = "dv" : o.dir == "ltr" ? g = "en" : g = t.value, console.log("selectLanguage in Card222:", g), g === "dv" ? "dv" : "en";
    });
    i(() => x.value == "dv" ? "faruma" : "");
    const I = i(() => Ke(o.label, x.value, o.label));
    return (g, c) => {
      const m = me("Icon");
      return n(), a("div", {
        onClick: y,
        class: f(b.value),
        role: "menuitem",
        tabindex: e.disabled ? -1 : 0
      }, [
        g.$slots.prepend || e.prependIcon ? (n(), a("span", An, [
          D(g.$slots, "prepend", {}, () => [
            e.prependIcon ? (n(), Z(m, {
              key: 0,
              name: e.prependIcon,
              type: "outline",
              size: F(Me)[o.size],
              color: "text-current"
            }, null, 8, ["name", "size"])) : v("", !0)
          ])
        ])) : v("", !0),
        d("span", Pn, [
          D(g.$slots, "default", {}, () => [
            fe(T(I.value), 1)
          ])
        ]),
        g.$slots.append || e.appendIcon ? (n(), a("span", Dn, [
          D(g.$slots, "append", {}, () => [
            e.appendIcon ? (n(), Z(m, {
              key: 0,
              name: e.appendIcon,
              type: "outline",
              size: F(Me)[o.size],
              stroke: "currentColor",
              color: "text-current"
            }, null, 8, ["name", "size"])) : v("", !0)
          ])
        ])) : v("", !0)
      ], 10, Mn);
    };
  }
}, On = ["onClick", "onKeydown", "aria-expanded", "aria-controls"], jn = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, Nn = { class: "w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold" }, Rn = { class: "flex-1 min-w-0" }, Hn = { class: "font-semibold ui-text-color truncate" }, Un = {
  key: 0,
  class: "text-sm ui-text-secondary truncate mt-1"
}, qn = {
  key: 1,
  class: "flex-shrink-0 ml-4 flex items-center gap-2"
}, Fn = {
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
  setup(e, { emit: r }) {
    const t = e, l = r;
    nt();
    const o = M(t.modelValue), s = i({
      get: () => t.exclusive ? o.value : t.modelValue,
      set: (c) => {
        o.value = c, l("update:modelValue", c);
      }
    });
    function b(c) {
      if (t.clickable) {
        if (t.exclusive)
          s.value = s.value === c ? -1 : c;
        else {
          const m = Array.isArray(s.value) ? [...s.value] : [], p = m.indexOf(c);
          p > -1 ? m.splice(p, 1) : m.push(c), s.value = m;
        }
        l("change", {
          index: c,
          item: t.items[c],
          active: s.value === c
        });
      }
    }
    function y(c, m, p) {
      l("action-click", {
        action: c.id || c.label,
        item: m,
        index: p
      }), c.callback && c.callback(m, p);
    }
    function x(c) {
      const m = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-color-3 text-ui-text-color hover:bg-color-4",
        outline: "border border-color text-ui-text-color hover:bg-color-1",
        ghost: "text-primary hover:bg-color-1",
        danger: "bg-error text-white hover:bg-error/90"
      };
      return m[c || "secondary"] || m.secondary;
    }
    function I(c) {
      c.style.height = "0", c.offsetHeight, c.style.height = c.scrollHeight + "px";
    }
    function g(c) {
      c.style.height = "0";
    }
    return (c, m) => {
      const p = me("Icon");
      return n(), a("div", {
        class: f([
          "border overflow-hidden transition-all duration-300",
          e.border,
          e.rounded ? F(we)[e.rounded] : "",
          e.containerClass
        ]),
        style: ue(e.containerStyle)
      }, [
        (n(!0), a(oe, null, ie(e.items, (u, $) => (n(), a("div", {
          key: u.id ?? $,
          class: f([
            "border-b ui-border-color last:border-b-0 transition-all",
            s.value === $ && "bg-color-1"
          ])
        }, [
          d("button", {
            onClick: (h) => b($),
            onKeydown: [
              pe(ee((h) => b($), ["prevent"]), ["enter"]),
              pe(ee((h) => b($), ["prevent"]), ["space"])
            ],
            "aria-expanded": s.value === $,
            "aria-controls": `panel-${$}`,
            class: f(["w-full flex items-center justify-between px-6 py-4 text-left transition-all hover:bg-color-1", [
              s.value === $ ? "bg-color-1" : "bg-color-2",
              e.clickable && "cursor-pointer"
            ]])
          }, [
            e.hasLeftIcon ? (n(), a("div", jn, [
              D(c.$slots, "left-icon", {
                item: u,
                index: $
              }, () => [
                d("div", Nn, T($ + 1), 1)
              ], !0)
            ])) : v("", !0),
            d("div", Rn, [
              d("h3", Hn, T(u.title), 1),
              u.subtitle ? (n(), a("p", Un, T(u.subtitle), 1)) : v("", !0)
            ]),
            u.badge || u.rightIcon ? (n(), a("div", qn, [
              u.badge ? (n(), Z(F(jt), {
                key: 0,
                chips: u.badge,
                size: "small",
                class: "px-2 py-1 text-xs font-medium rounded-full"
              }, null, 8, ["chips"])) : v("", !0),
              u.rightIcon ? (n(), a("div", Fn, [
                d("i", {
                  class: f(["text-lg", u.rightIcon])
                }, null, 2)
              ])) : v("", !0)
            ])) : v("", !0),
            K(p, {
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: f(["transition-transform duration-200", s.value === $ ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"])
          ], 42, On),
          K(xe, {
            name: "expand",
            onEnter: I,
            onLeave: g
          }, {
            default: te(() => [
              s.value === $ ? (n(), a("div", {
                key: 0,
                id: `panel-${$}`,
                class: "overflow-hidden"
              }, [
                d("div", Kn, [
                  D(c.$slots, "content", {
                    item: u,
                    index: $
                  }, () => [
                    fe(T(u.content), 1)
                  ], !0),
                  u.actions || c.$slots.actions ? (n(), a("div", Gn, [
                    D(c.$slots, "actions", {
                      item: u,
                      index: $
                    }, () => [
                      (n(!0), a(oe, null, ie(u.actions, (h) => (n(), a("button", {
                        key: h.label,
                        onClick: (B) => y(h, u, $),
                        class: f([
                          "px-4 py-2 text-sm font-medium rounded-md transition-all",
                          x(h.variant)
                        ])
                      }, T(h.label), 11, Yn))), 128))
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
}, Jn = /* @__PURE__ */ de(Xn, [["__scopeId", "data-v-54f28e1c"]]), Qn = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" }, Zn = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = M(""), s = M(""), b = M(!1), y = i(() => document.documentElement.classList.contains("dark")), x = i(() => t.sections && t.sections.length > 0);
    function I() {
      o.value && (l("newsletter-submit", {
        email: o.value
      }), b.value = !1, s.value = "Thanks for subscribing!", o.value = "", setTimeout(() => {
        s.value = "";
      }, 3e3));
    }
    function g() {
      document.documentElement.classList.toggle("dark"), l("theme-toggle", y.value);
    }
    return (c, m) => {
      const p = me("Icon");
      return n(), a("footer", {
        class: f([
          "border-t border-color transition-colors duration-300",
          "bg-color-2 text-ui-text-color",
          e.containerClass
        ]),
        style: ue(e.containerStyle)
      }, [
        d("div", Qn, [
          x.value ? (n(), a("div", Zn, [
            (n(!0), a(oe, null, ie(e.sections, (u) => (n(), a("div", {
              key: u.title,
              class: "space-y-4"
            }, [
              u.title ? (n(), a("h3", _n, T(u.title), 1)) : v("", !0),
              d("ul", er, [
                (n(!0), a(oe, null, ie(u.links, ($) => (n(), a("li", {
                  key: $.label
                }, [
                  d("a", {
                    href: $.href,
                    target: $.target,
                    rel: $.rel,
                    class: "text-sm text-ui-text-secondary hover:text-primary transition-colors duration-200"
                  }, T($.label), 9, tr)
                ]))), 128))
              ]),
              u.social ? (n(), a("div", lr, [
                (n(!0), a(oe, null, ie(u.social, ($) => (n(), a("a", {
                  key: $.icon,
                  href: $.href,
                  title: $.label,
                  target: $.target,
                  rel: "noopener noreferrer",
                  class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-color-3 text-ui-text-color hover:bg-primary hover:text-white transition-all duration-200"
                }, [
                  K(p, {
                    name: $.icon,
                    size: 16,
                    color: "text-current"
                  }, null, 8, ["name"])
                ], 8, nr))), 128))
              ])) : v("", !0)
            ]))), 128))
          ])) : v("", !0),
          e.newsletter ? (n(), a("div", rr, [
            d("div", ar, [
              d("h3", or, T(e.newsletter.title || "Subscribe to our newsletter"), 1),
              d("p", sr, T(e.newsletter.description || "Get updates delivered to your inbox."), 1),
              d("form", {
                onSubmit: ee(I, ["prevent"]),
                class: "flex gap-2"
              }, [
                ze(d("input", {
                  "onUpdate:modelValue": m[0] || (m[0] = (u) => o.value = u),
                  type: "email",
                  placeholder: "Enter your email",
                  class: "flex-1 px-3 py-2 text-sm border border-color rounded-md bg-color-1 text-ui-text-color placeholder-ui-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                  required: ""
                }, null, 512), [
                  [mt, o.value]
                ]),
                m[1] || (m[1] = d("button", {
                  type: "submit",
                  class: "px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-200"
                }, " Subscribe ", -1))
              ], 32),
              s.value ? (n(), a("p", {
                key: 0,
                class: f(["text-xs mt-2", b.value ? "text-error" : "text-success"])
              }, T(s.value), 3)) : v("", !0)
            ])
          ])) : v("", !0),
          m[2] || (m[2] = d("div", { class: "border-t border-color" }, null, -1))
        ]),
        d("div", ir, [
          d("div", ur, [
            d("div", dr, [
              d("p", cr, T(e.copyright || `© ${(/* @__PURE__ */ new Date()).getFullYear()} All rights reserved.`), 1),
              e.bottomLinks ? (n(), a("div", fr, [
                (n(!0), a(oe, null, ie(e.bottomLinks, (u) => (n(), a("a", {
                  key: u.label,
                  href: u.href,
                  class: "text-xs text-ui-text-secondary hover:text-primary transition-colors duration-200"
                }, T(u.label), 9, gr))), 128))
              ])) : v("", !0),
              e.showThemeSwitcher ? (n(), a("div", mr, [
                d("button", {
                  onClick: g,
                  class: "p-2 rounded-md hover:bg-color-2 transition-colors",
                  title: y.value ? "Light mode" : "Dark mode"
                }, [
                  K(p, {
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
}, yr = /* @__PURE__ */ de(vr, [["__scopeId", "data-v-7a2ba9e6"]]), br = {
  __name: "Form",
  props: {
    modelValue: { type: Boolean, default: null },
    validateOn: {
      type: String,
      default: "blur"
    }
  },
  emits: ["update:modelValue", "submit"],
  setup(e, { expose: r, emit: t }) {
    const l = e, o = t, s = tt(/* @__PURE__ */ new Map()), b = tt({}), y = tt({}), x = (B, C) => {
      s.set(B, C), y[B] = !1;
    }, I = (B) => {
      s.delete(B), delete b[B], delete y[B], $();
    }, g = async () => {
      let B = !0;
      Object.keys(b).forEach((C) => delete b[C]);
      for (const [C, q] of s.entries())
        q?.validate && (y[C] = !0, await q.validate() || (B = !1));
      return $(), { valid: B, errors: { ...b } };
    }, c = () => {
      for (const [B, C] of s.entries())
        C?.reset && C.reset();
      m();
    }, m = () => {
      for (const [B, C] of s.entries())
        C?.resetValidation && C.resetValidation();
      Object.keys(b).forEach((B) => delete b[B]), Object.keys(y).forEach((B) => y[B] = !1), $();
    }, p = (B, C, q) => {
      y[B] = !0, C ? delete b[B] : b[B] = q, $();
    }, u = i(() => Array.from(s.keys()).every((C) => y[C] === !0) && Object.keys(b).length === 0), $ = () => {
      Le(() => {
        l.modelValue !== null && o("update:modelValue", u.value);
      });
    }, h = async () => {
      const B = await g();
      o("submit", B);
    };
    return We("formContext", {
      register: x,
      unregister: I,
      validate: p,
      validateOn: i(() => l.validateOn)
    }), r({
      validate: g,
      reset: c,
      resetValidation: m,
      isValid: u
    }), (B, C) => (n(), a("form", {
      onSubmit: ee(h, ["prevent"])
    }, [
      D(B.$slots, "default", {
        isValid: u.value,
        validate: g,
        reset: c,
        resetValidation: m
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
    return (r, t) => (n(), a("div", {
      class: f(`border border-color-3 rounded-lg ${e.color} w-full relative p-4`)
    }, [
      e.title ? (n(), a("div", hr, [
        d("span", xr, T(e.title), 1)
      ])) : v("", !0),
      D(r.$slots, "default")
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
    const r = e, t = i(() => {
      const l = {
        height: "100vh",
        overflowY: "auto"
      };
      if (r.appBarHeight) {
        const s = typeof r.appBarHeight == "number" ? `${r.appBarHeight}px` : r.appBarHeight;
        l.paddingTop = s;
      }
      return (r.navPermanent || r.navRail) && !r.navTemporary && r.navWidth && (r.navLocation === "right" ? l.marginRight = r.navWidth : l.marginLeft = r.navWidth), l;
    });
    return (l, o) => (n(), a("div", kr, [
      D(l.$slots, "sidebar"),
      D(l.$slots, "appbar"),
      d("main", {
        class: "",
        style: ue(t.value)
      }, [
        d("div", Sr, [
          D(l.$slots, "default")
        ])
      ], 4)
    ]));
  }
}, $r = /* @__PURE__ */ Ie({
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
    const r = e, t = i(() => ({
      height: `calc(100vh - ${r.appBarOffset}px)`
    })), l = typeof r.leftWidth == "number" ? r.leftWidth : parseInt(r.leftWidth) || 320, o = M(l), s = M(!1), b = M(null), y = i(() => ({
      width: `${o.value}px`,
      minWidth: `${o.value}px`
    }));
    function x(c) {
      s.value = !0, c.preventDefault();
    }
    function I(c) {
      if (!b.value) return;
      const m = b.value.getBoundingClientRect(), p = c.clientX - m.left;
      o.value = Math.max(r.minWidth, Math.min(p, Math.min(r.maxWidth, m.width - 300)));
    }
    function g() {
      s.value = !1;
    }
    return $e(() => {
      s.value = !1;
    }), (c, m) => (n(), a("div", {
      ref_key: "containerRef",
      ref: b,
      class: f(["flex overflow-hidden", e.bleed ? "-mx-6 -my-5" : "", s.value ? "select-none" : ""]),
      style: ue(t.value)
    }, [
      d("div", {
        class: f(["flex-shrink-0 flex flex-col overflow-hidden", e.leftClass]),
        style: ue(y.value)
      }, [
        D(c.$slots, "left")
      ], 6),
      d("div", {
        class: "relative flex-shrink-0 w-[5px] cursor-col-resize group z-10",
        onMousedown: x
      }, [
        d("div", {
          class: f(["absolute inset-y-0 left-[2px] w-px bg-[var(--border-color)] transition-colors", s.value ? "!bg-primary !w-[2px] !left-[1.5px]" : "group-hover:!bg-primary"])
        }, null, 2),
        d("div", {
          class: f(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", s.value ? "!opacity-100" : ""])
        }, [
          (n(), a(oe, null, ie(4, (p) => d("span", {
            key: p,
            class: "w-[3px] h-[3px] rounded-full bg-primary block"
          })), 64))
        ], 2)
      ], 32),
      d("div", {
        class: f(["flex-1 min-w-0 flex flex-col overflow-hidden", e.rightClass])
      }, [
        D(c.$slots, "right")
      ], 2),
      (n(), Z(Ye, { to: "body" }, [
        s.value ? (n(), a("div", {
          key: 0,
          class: "fixed inset-0 z-[9999] cursor-col-resize",
          onMousemove: I,
          onMouseup: g
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
}, Vr = { class: "relative" }, Tr = { class: "flex-1 overflow-y-auto py-2" }, Lr = {
  key: 0,
  class: "text-xs font-medium text-color-4 uppercase tracking-wider"
}, Mr = {
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
  setup(e, { expose: r, emit: t }) {
    const l = e, o = t, s = M(null), b = M(""), y = M([]), x = M(!1), I = i({
      get: () => l.railExpanded,
      set: (w) => o("update:railExpanded", w)
    }), g = i({
      get: () => l.modelValue,
      set: (w) => o("update:modelValue", w)
    }), c = i(() => l.permanent || l.rail ? !0 : g.value), m = i(() => !l.rail || l.expandOnHover && x.value ? !1 : !I.value);
    ge(m, (w) => {
      o("update:collapsed", w);
    });
    const p = i(() => m.value ? typeof l.railWidth == "number" ? `${l.railWidth}px` : l.railWidth : typeof l.width == "number" ? `${l.width}px` : l.width);
    ge(p, (w) => {
      o("update:width", w);
    }, { immediate: !0 }), We("navWidth", p);
    const u = i(() => {
      const w = {
        width: p.value
      };
      if (l.appBarOffset) {
        const z = typeof l.appBarOffset == "number" ? `${l.appBarOffset}px` : l.appBarOffset;
        w.top = z, w.height = `calc(100vh - ${z})`;
      }
      return w;
    }), $ = i(() => {
      const w = [
        "fixed bottom-0 z-40 flex flex-col",
        "bg-color-1 ui-text-secondary"
      ];
      return l.location === "right" ? w.push("right-0") : w.push("left-0"), l.bordered && (w.push(l.location === "right" ? "border-l" : "border-r"), w.push("border-color-3")), (l.elevated || l.temporary) && w.push("shadow-lg"), l.floating && w.push("m-4 rounded-lg"), l.color && w.push(l.color), w;
    }), h = i(() => l.location === "right" ? "slide-right" : "slide-left"), B = i(() => {
      let w = l.items;
      if (b.value) {
        const z = b.value.toLowerCase();
        w = l.items.filter((N) => {
          const V = N.label?.toLowerCase().includes(z), S = N.children?.some(
            (k) => k.label?.toLowerCase().includes(z)
          );
          return V || S;
        });
      }
      if (l.groupBy) {
        const z = {};
        return w.forEach((N) => {
          const V = N[l.groupBy] || "Other";
          z[V] || (z[V] = { title: V, items: [] }), z[V].items.push(N);
        }), Object.values(z);
      }
      return [{ title: null, items: w }];
    }), C = () => {
      g.value = !0, o("open");
    }, q = () => {
      l.permanent || (g.value = !1, o("close"));
    }, H = () => {
      g.value ? q() : C();
    }, E = () => {
      o("update:railExpanded", !I.value);
    };
    let Y = null, Q = null;
    const L = () => {
      Y && (clearTimeout(Y), Y = null), Q && (clearTimeout(Q), Q = null);
    }, G = () => {
      if (l.expandOnHover && l.rail) {
        L();
        const w = Number(l.hoverDelay) || 0;
        Y = setTimeout(() => {
          x.value = !0;
        }, w);
      }
    }, re = () => {
      if (l.expandOnHover && l.rail) {
        L();
        const w = Number(l.hoverDelay) || 0;
        Q = setTimeout(() => {
          x.value = !1;
        }, w);
      }
    }, O = (w) => {
      if (o("item-click", w), w.children) {
        const z = y.value.indexOf(w.id);
        z > -1 ? y.value.splice(z, 1) : y.value.push(w.id);
        return;
      }
      (l.closeOnClick || l.temporary) && q();
    }, R = (w) => {
      w.key === "Escape" && (l.temporary || l.persistent) && q();
    };
    function A() {
      if (l.items)
        for (const w of l.items)
          w.children && w.children.some((z) => z.active) && (y.value.includes(w.id) || y.value.push(w.id));
    }
    return ge(() => l.items, A, { deep: !0 }), Be(() => {
      A(), document.addEventListener("keydown", R);
    }), $e(() => {
      L(), document.removeEventListener("keydown", R);
    }), r({ open: C, close: q, toggle: H, isCollapsed: m }), (w, z) => {
      const N = me("Icon");
      return n(), a("div", zr, [
        K(xe, { name: "fade" }, {
          default: te(() => [
            g.value && e.temporary ? (n(), a("div", {
              key: 0,
              class: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
              onClick: q
            })) : v("", !0)
          ]),
          _: 1
        }),
        K(xe, { name: h.value }, {
          default: te(() => [
            ze(d("nav", {
              ref_key: "navRef",
              ref: s,
              class: f($.value),
              style: ue({ ...u.value, transition: "width 300ms ease-in-out" }),
              onMouseenter: G,
              onMouseleave: re
            }, [
              w.$slots.prepend || e.avatarName ? (n(), a("div", {
                key: 0,
                class: f(["flex items-center gap-2 border-b border-color-3 w-full min-w-0", m.value ? "justify-center px-2 py-4" : "px-4 py-4 overflow-hidden"])
              }, [
                D(w.$slots, "prepend", {}, () => [
                  d("div", {
                    class: f(["flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700", m.value ? "" : "flex-1 min-w-0 overflow-hidden"])
                  }, [
                    e.avatarName ? (n(), Z(Pt, {
                      key: 0,
                      name: e.avatarName || "",
                      size: "sm",
                      variant: "primary",
                      class: "flex-shrink-0"
                    }, null, 8, ["name"])) : v("", !0),
                    e.avatarName && !m.value ? (n(), a("span", Br, T(e.avatarName), 1)) : v("", !0)
                  ], 2)
                ], !0),
                e.rail && !e.temporary && !m.value ? (n(), a("button", {
                  key: 0,
                  onClick: E,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 transition-colors",
                  "aria-label": "Toggle navigation width"
                }, [
                  (n(), a("svg", {
                    class: f(["fill-gray-600 dark:fill-gray-200 w-3", e.location === "right" ? "rotate-180" : ""]),
                    xmlns: "http://www.w3.org/2000/svg",
                    "shape-rendering": "geometricPrecision",
                    "text-rendering": "geometricPrecision",
                    "image-rendering": "optimizeQuality",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    viewBox: "0 0 512 389.24"
                  }, [...z[1] || (z[1] = [
                    d("path", {
                      "fill-rule": "nonzero",
                      d: "M0 0h275.1v50.04H0V0zm361.79 115.14 54.44 54.44H0v50.04h416.2l-54.41 54.41 35.39 35.39L512 194.6v-.03l-35.39-35.36-79.43-79.46-35.39 35.39zM0 339.2h275.1v50.04H0V339.2z"
                    }, null, -1)
                  ])], 2))
                ])) : v("", !0),
                !e.permanent && !e.rail ? (n(), a("button", {
                  key: 1,
                  onClick: q,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 ui-text-secondary hover:text-foreground transition-colors",
                  "aria-label": "Close navigation"
                }, [
                  K(N, {
                    name: "x-mark",
                    size: "18"
                  })
                ])) : v("", !0)
              ], 2)) : v("", !0),
              e.filterable && !m.value ? (n(), a("div", Ir, [
                d("div", Vr, [
                  K(F(yt), {
                    modelValue: b.value,
                    "onUpdate:modelValue": z[0] || (z[0] = (V) => b.value = V),
                    type: "text",
                    placeholder: e.searchPlaceholder,
                    prepend: "magnifying-glass"
                  }, null, 8, ["modelValue", "placeholder"])
                ])
              ])) : v("", !0),
              d("div", Tr, [
                e.items && e.items.length ? (n(!0), a(oe, { key: 0 }, ie(B.value, (V, S) => (n(), a(oe, { key: S }, [
                  V.title ? (n(), a("div", {
                    key: 0,
                    class: f([
                      "flex items-center gap-2 px-3 py-2",
                      m.value ? "justify-center" : ""
                    ])
                  }, [
                    m.value ? (n(), a("div", Mr)) : (n(), a("span", Lr, T(V.title), 1))
                  ], 2)) : v("", !0),
                  d("ul", Ar, [
                    (n(!0), a(oe, null, ie(V.items, (k) => (n(), a("li", {
                      key: k.id || k.label
                    }, [
                      (n(), Z(Oe(k.href ? "a" : "div"), {
                        href: k.href,
                        onClick: ee((j) => O(k), ["prevent"]),
                        class: f([
                          "group flex items-center gap-3 w-full text-sm font-medium transition-colors",
                          m.value ? "justify-center px-2 py-2.5" : "px-3 py-2",
                          k.active ? "bg-color-4 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                          F(we)[e.rounded],
                          k.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                        ]),
                        title: m.value ? k.label : void 0
                      }, {
                        default: te(() => [
                          k.icon ? (n(), a("span", Pr, [
                            K(N, {
                              name: k.icon,
                              size: "20"
                            }, null, 8, ["name"])
                          ])) : v("", !0),
                          ze(d("span", { class: "truncate" }, T(k.label), 513), [
                            [Ee, !m.value]
                          ]),
                          ze(d("span", { class: "ml-auto flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-600" }, T(k.badge), 513), [
                            [Ee, k.badge && !m.value]
                          ]),
                          ze(K(N, {
                            name: "chevron-right",
                            size: "16",
                            class: f(["ml-auto transition-transform", y.value.includes(k.id) ? "rotate-90" : ""])
                          }, null, 8, ["class"]), [
                            [Ee, k.children && !m.value]
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href", "onClick", "class", "title"])),
                      K(xe, { name: "collapse" }, {
                        default: te(() => [
                          k.children && y.value.includes(k.id) && !m.value ? (n(), a("ul", {
                            key: 0,
                            class: f([e.location === "left" ? "mt-1 ml-4 pl-3 border-l border-color-3 space-y-1" : "mt-1 mr-4 pr-3 border-r border-color-3 space-y-1"])
                          }, [
                            (n(!0), a(oe, null, ie(k.children, (j) => (n(), a("li", {
                              key: j.id || j.label
                            }, [
                              (n(), Z(Oe(j.href ? "a" : "div"), {
                                href: j.href,
                                onClick: ee((X) => O(j), ["prevent"]),
                                class: f([
                                  "flex items-center gap-3 w-full px-3 py-2 text-sm transition-colors",
                                  j.active ? "bg-color-3 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                                  F(we)[e.rounded],
                                  j.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                                ])
                              }, {
                                default: te(() => [
                                  j.icon ? (n(), Z(N, {
                                    key: 0,
                                    name: j.icon,
                                    size: "18"
                                  }, null, 8, ["name"])) : v("", !0),
                                  d("span", Dr, T(j.label), 1)
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
                ], 64))), 128)) : D(w.$slots, "default", { key: 1 }, void 0, !0)
              ]),
              w.$slots.append ? (n(), a("div", Er, [
                D(w.$slots, "append", {}, void 0, !0)
              ])) : v("", !0)
            ], 38), [
              [Ee, c.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ]);
    };
  }
}, jr = /* @__PURE__ */ de(Or, [["__scopeId", "data-v-bf734b18"]]), Nr = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i({
      get: () => t.modelValue,
      set: (c) => l("update:modelValue", c)
    }), s = M(!1);
    function b() {
      if (t.persistent) {
        s.value = !0, setTimeout(() => s.value = !1, 400);
        return;
      }
      o.value = !1;
    }
    function y(c) {
      c.key === "Escape" && o.value && !t.persistent && b();
    }
    Be(() => {
      document.addEventListener("keydown", y);
    }), $e(() => {
      document.removeEventListener("keydown", y);
    });
    const x = i(() => `${t.transition ?? "center"}`), I = i(() => t.fullscreen ? "h-screen rounded-none" : t.mobileFull ? "!h-screen !rounded-none !mx-0 sm:!h-auto sm:!max-h-[90vh] sm:!rounded-xl sm:!mx-4" : "mx-4 max-h-screen"), g = i(() => t.fullscreen ? "w-full" : t.mobileFull ? `max-sm:!w-full ${t.width}` : t.width);
    return (c, m) => {
      const p = me("Card");
      return n(), Z(Ye, { to: "body" }, [
        K(xe, { name: x.value }, {
          default: te(() => [
            o.value ? (n(), a("div", {
              key: 0,
              class: f(["fixed inset-0 flex items-center justify-center", e.zIndex])
            }, [
              d("div", {
                class: f(["absolute inset-0 transition-opacity duration-300 bg-black/30 backdrop-blur-sm", e.overlayClass]),
                onClick: b
              }, null, 2),
              K(xe, { name: x.value }, {
                default: te(() => [
                  o.value ? (n(), Z(p, {
                    key: 0,
                    title: e.title,
                    "card-class": [I.value, e.modalClass, s.value && "animate-shake"],
                    bg: e.cardBg,
                    "text-color": e.bodyTextColor,
                    rounded: e.rounded,
                    border: e.border,
                    "header-class": e.headerClass,
                    "footer-class": e.footerClass,
                    width: g.value,
                    onClick: m[1] || (m[1] = ee(() => {
                    }, ["stop"]))
                  }, Re({
                    default: te(() => [
                      d("div", {
                        class: f(["flex-1 pt-2", e.contentClass]),
                        style: { "overflow-x": "clip" }
                      }, [
                        e.closebutton ? (n(), a("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-3 right-4 z-10 text-ui-text-secondary hover:text-ui-text-primary transition-colors",
                          onClick: m[0] || (m[0] = (u) => o.value = !1)
                        }, [...m[2] || (m[2] = [
                          d("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "size-5"
                          }, [
                            d("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18 18 6M6 6l12 12"
                            })
                          ], -1)
                        ])])) : v("", !0),
                        D(c.$slots, "default")
                      ], 2)
                    ]),
                    _: 2
                  }, [
                    c.$slots.header ? {
                      name: "header",
                      fn: te(() => [
                        D(c.$slots, "header")
                      ]),
                      key: "0"
                    } : void 0,
                    c.$slots.footer ? {
                      name: "footer",
                      fn: te(() => [
                        D(c.$slots, "footer")
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
}, Rr = ["aria-label"], Hr = { key: 0 }, Ur = ["disabled", "aria-label"], qr = { key: 1 }, Fr = { key: 1 }, Wr = ["disabled", "aria-label"], Kr = { key: 1 }, Gr = ["disabled", "onClick", "aria-label", "aria-current"], Yr = { key: 2 }, Xr = ["disabled", "aria-label"], Jr = { key: 1 }, Qr = { key: 3 }, Zr = ["disabled", "aria-label"], _r = { key: 1 }, ea = {
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
  setup(e, { expose: r, emit: t }) {
    const l = e, o = t, s = i({
      get: () => l.modelValue,
      set: (L) => o("update:modelValue", L)
    }), b = i(() => {
      const L = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return L[l.size] || L.md;
    }), y = i(() => {
      const L = {
        sm: "w-8 h-8 min-w-[32px]",
        md: "w-10 h-10 min-w-[40px]",
        lg: "w-12 h-12 min-w-[48px]"
      };
      return L[l.size] || L.md;
    }), x = i(() => {
      const L = {
        sm: 14,
        md: 16,
        lg: 20
      };
      return L[l.size] || L.md;
    }), I = i(() => {
      const L = {
        sm: "gap-1",
        md: "gap-1.5",
        lg: "gap-2"
      };
      return L[l.size] || L.md;
    }), g = i(() => {
      const L = {
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg"
      };
      return L[l.size] || L.md;
    }), c = i(() => "border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"), m = i(() => {
      const L = {
        default: "bg-primary text-white border-primary",
        primary: "bg-primary text-white border-primary",
        outline: "bg-primary text-white border-primary"
      };
      return L[l.variant] || L.default;
    }), p = i(() => {
      const L = {
        default: "bg-color-2 text-ui-text-color border-color",
        primary: "bg-transparent text-ui-text-color border-color",
        outline: "bg-transparent text-ui-text-color border-color"
      };
      return L[l.variant] || L.default;
    }), u = i(() => "hover:bg-color-3 hover:border-color-3"), $ = i(() => "opacity-50 cursor-not-allowed"), h = i(() => {
      const L = [], G = l.totalPages, re = s.value, O = l.maxVisiblePages;
      if (G <= O)
        for (let R = 1; R <= G; R++)
          L.push(R);
      else {
        L.push(1);
        const R = Math.floor(O / 2);
        let A = re - R, w = re + R;
        A < 2 && (A = 2, w = O - 1), w > G - 1 && (w = G - 1, A = G - O + 2), A > 2 && L.push("...");
        for (let z = A; z <= w; z++)
          L.push(z);
        w < G - 1 && L.push("..."), L.push(G);
      }
      return L;
    }), B = i(() => (s.value - 1) * l.perPage + 1), C = i(() => {
      const L = s.value * l.perPage;
      return L > l.totalItems ? l.totalItems : L;
    }), q = (L) => {
      L === s.value || L < 1 || L > l.totalPages || l.disabled || (s.value = L, o("change", L), o("page-change", L));
    }, H = () => {
      s.value > 1 && q(s.value - 1);
    }, E = () => {
      s.value < l.totalPages && q(s.value + 1);
    };
    return r({
      goToPage: q,
      previousPage: H,
      nextPage: E,
      firstPage: () => {
        q(1);
      },
      lastPage: () => {
        q(l.totalPages);
      }
    }), (L, G) => {
      const re = me("Icon");
      return n(), a("nav", {
        "aria-label": e.ariaLabel,
        class: f([
          "flex items-center justify-center",
          e.containerClass
        ]),
        style: ue(e.containerStyle)
      }, [
        d("ul", {
          class: f([
            "flex items-center",
            b.value,
            I.value
          ])
        }, [
          e.showFirstLast ? (n(), a("li", Hr, [
            d("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: G[0] || (G[0] = (O) => q(1)),
              class: f([
                "inline-flex items-center justify-center transition-all",
                y.value,
                c.value,
                s.value === 1 || e.disabled ? $.value : u.value,
                e.rounded && g.value
              ]),
              "aria-label": e.firstText || "First page"
            }, [
              e.firstText ? (n(), a("span", qr, T(e.firstText), 1)) : (n(), Z(re, {
                key: 0,
                name: "chevron-double-left",
                size: x.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Ur)
          ])) : v("", !0),
          e.showPrevNext ? (n(), a("li", Fr, [
            d("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: H,
              class: f([
                "inline-flex items-center justify-center transition-all",
                y.value,
                c.value,
                s.value === 1 || e.disabled ? $.value : u.value,
                e.rounded && g.value
              ]),
              "aria-label": e.prevText || "Previous page"
            }, [
              e.prevText ? (n(), a("span", Kr, T(e.prevText), 1)) : (n(), Z(re, {
                key: 0,
                name: "chevron-left",
                size: x.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Wr)
          ])) : v("", !0),
          (n(!0), a(oe, null, ie(h.value, (O) => (n(), a("li", { key: O }, [
            O === "..." ? (n(), a("span", {
              key: 0,
              class: f([
                "inline-flex items-center justify-center",
                y.value,
                "text-ui-text-secondary"
              ])
            }, " ... ", 2)) : (n(), a("button", {
              key: 1,
              type: "button",
              disabled: e.disabled,
              onClick: (R) => q(O),
              class: f([
                "inline-flex items-center justify-center transition-all font-medium",
                y.value,
                c.value,
                O === s.value ? m.value : p.value,
                e.rounded && g.value,
                !e.disabled && O !== s.value && u.value
              ]),
              "aria-label": `Page ${O}`,
              "aria-current": O === s.value ? "page" : void 0
            }, T(O), 11, Gr))
          ]))), 128)),
          e.showPrevNext ? (n(), a("li", Yr, [
            d("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: E,
              class: f([
                "inline-flex items-center justify-center transition-all",
                y.value,
                c.value,
                s.value === e.totalPages || e.disabled ? $.value : u.value,
                e.rounded && g.value
              ]),
              "aria-label": e.nextText || "Next page"
            }, [
              e.nextText ? (n(), a("span", Jr, T(e.nextText), 1)) : (n(), Z(re, {
                key: 0,
                name: "chevron-right",
                size: x.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Xr)
          ])) : v("", !0),
          e.showFirstLast ? (n(), a("li", Qr, [
            d("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: G[1] || (G[1] = (O) => q(e.totalPages)),
              class: f([
                "inline-flex items-center justify-center transition-all",
                y.value,
                c.value,
                s.value === e.totalPages || e.disabled ? $.value : u.value,
                e.rounded && g.value
              ]),
              "aria-label": e.lastText || "Last page"
            }, [
              e.lastText ? (n(), a("span", _r, T(e.lastText), 1)) : (n(), Z(re, {
                key: 0,
                name: "chevron-double-right",
                size: x.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Zr)
          ])) : v("", !0)
        ], 2),
        e.showPageInfo ? (n(), a("div", {
          key: 0,
          class: f([
            "ml-4 text-ui-text-secondary",
            b.value
          ])
        }, " Page " + T(s.value) + " of " + T(e.totalPages), 3)) : v("", !0),
        e.showTotalInfo && e.totalItems ? (n(), a("div", {
          key: 1,
          class: f([
            "ml-4 text-ui-text-secondary",
            b.value
          ])
        }, T(B.value) + "-" + T(C.value) + " of " + T(e.totalItems), 3)) : v("", !0)
      ], 14, Rr);
    };
  }
}, ta = /* @__PURE__ */ de(ea, [["__scopeId", "data-v-862a1617"]]), la = { class: "relative" }, na = ["aria-hidden"], ra = {
  class: "flex h-full flex-col",
  style: { minHeight: "100vh" }
}, aa = { class: "flex items-center justify-between px-4 py-3" }, oa = { class: "flex items-center gap-2" }, sa = {
  key: 0,
  class: /* @__PURE__ */ f(["pa-2"]),
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
  setup(e, { emit: r }) {
    const t = e;
    i(() => {
      const P = t.location === "left";
      return t.rail && !t.modelValue && !w.value || t.rail && t.modelValue && !w.value ? P ? "chevron-right" : "chevron-left" : P ? "chevron-left" : "chevron-right";
    });
    const l = r, o = M(!!t.modelValue), s = M(null), b = M(t.items ? [...t.items] : []), y = M("");
    ge(
      () => t.items,
      (P) => {
        b.value = t.items ? [...t.items] : [];
      }
    ), ge(
      () => t.overlayAppBar,
      (P) => {
        se();
      }
    );
    const x = i(() => {
      if (!t.items) return [];
      if (!y.value || y.value.trim().length === 0) return b.value;
      const P = y.value.toLowerCase();
      return b.value.filter((_) => String(_.label || _.name || "").toLowerCase().includes(P) || _.tags && String(_.tags).toLowerCase().includes(P));
    }), I = i(() => {
      if (!t.items) return [];
      if (!t.groupBy) return [{ group: null, items: x.value }];
      const P = {}, _ = typeof t.groupBy == "function" ? t.groupBy : (le) => le[t.groupBy];
      return x.value.forEach((le) => {
        const W = _(le) || "Ungrouped";
        P[W] || (P[W] = []), P[W].push(le);
      }), Object.keys(P).map((le) => ({ group: le, items: P[le] }));
    }), g = M({});
    ge(I, (P) => {
      P.forEach((_) => {
        const le = String(_.group || "Ungrouped");
        g.value[le] === void 0 && (g.value[le] = !!t.groupDefaultOpen);
      });
    });
    function c(P) {
      if (!t.collapsibleGroups) return !0;
      const _ = String(P || "Ungrouped");
      return !!g.value[_];
    }
    function m(P) {
      if (!t.collapsibleGroups) return;
      const _ = String(P || "Ungrouped");
      g.value[_] = !g.value[_], l("group-toggle", { group: P, open: g.value[_] });
    }
    function p(P, _) {
      const le = t.groupParents && _ ? t.groupParents[_] : void 0;
      (!le || !le.href) && (P.preventDefault(), m(_));
    }
    function u(P, _) {
      if (!_) return;
      const le = t.groupParents && _ ? t.groupParents[_] : void 0;
      (P.key === "Enter" || P.key === " ") && (!le || !le.href) && (P.preventDefault(), P.stopPropagation(), m(_));
    }
    function $() {
      const P = s.value;
      if (!P) return;
      P.querySelectorAll("li").forEach((W) => {
        const ae = W.querySelector("svg");
        ae && !ae.classList.contains("rail-icon") && ae.classList.add("rail-icon"), Array.from(W.childNodes).forEach((Ve) => {
          if (Ve.nodeType === Node.TEXT_NODE) {
            const Pe = Ve.textContent?.trim();
            if (Pe && Pe.length) {
              const _e = document.createElement("span");
              _e.className = "rail-label", _e.textContent = Pe, W.replaceChild(_e, Ve);
            }
          } else if (Ve.nodeType === Node.ELEMENT_NODE) {
            const Pe = Ve;
            if (Pe.classList.contains("rail-label") || Pe.classList.contains("rail-icon")) return;
            Array.from(Pe.childNodes).forEach((at) => {
              if (at.nodeType === Node.TEXT_NODE) {
                const ot = at.textContent?.trim();
                if (ot && ot.length) {
                  const st = document.createElement("span");
                  st.className = "rail-label", st.textContent = ot, Pe.replaceChild(st, at);
                }
              }
            });
          }
        });
      }), P.querySelectorAll(":scope > a, :scope > button").forEach((W) => {
        W.classList.contains("nav-drawer-link") || W.classList.add("nav-drawer-link");
        const ae = W.parentElement;
        if (ae && ae.tagName.toLowerCase() !== "li") {
          const Se = document.createElement("li");
          Se.className = "nav-drawer-item", ae.replaceChild(Se, W), Se.appendChild(W);
        }
      });
    }
    let h = null, B = null, C = null;
    function q(P, _ = b.value) {
      return P == null ? -1 : _.findIndex((le) => String(le.id) === String(P));
    }
    function H(P) {
      h = P.id;
    }
    function E(P) {
      if (B = P.id, P.event && P.event.clientY !== void 0) {
        const _ = document.querySelector(`[data-drawer-item-id='${P.id}']`);
        if (_) {
          const le = _.getBoundingClientRect(), W = le.top + le.height / 2;
          C = P.event.clientY < W ? "before" : "after";
        }
      } else
        C = "after";
    }
    function Y(P) {
      if (!t.items || !t.draggable) return;
      const _ = P.sourceId !== void 0 ? P.sourceId : h, le = P.id;
      if (!_ || !le || String(_) === String(le)) return;
      const W = q(_), ae = q(le);
      if (W === -1 || ae === -1) return;
      const Se = [...b.value], [Ve] = Se.splice(W, 1);
      Se.splice(ae, 0, Ve), b.value = Se, l("update:items", Se), l("reorder", { items: Se }), h = null, B = null, C = null;
    }
    function Q(P) {
      s.value && (s.value.contains(P.target) || S());
    }
    ge(
      () => t.modelValue,
      (P) => {
        o.value = !!P, Ze();
      }
    ), ge(
      () => t.permanent,
      (P) => {
        Ze();
      }
    ), ge(o, (P) => {
      l("update:modelValue", P), l(P ? "open" : "close");
    });
    const L = i(() => t.permanent ? !0 : o.value), G = () => {
      t.permanent || (o.value = !1);
    }, re = () => {
      t.closeOnScrimClick && G();
    }, O = (P) => {
      P.key === "Escape" && (t.temporary || t.persistent) && G();
    };
    Be(() => {
      document.addEventListener("keydown", O), document.addEventListener("click", Q), $();
    }), Ht(() => {
      $();
    }), $e(() => {
      document.removeEventListener("keydown", O), document.removeEventListener("click", Q), window.removeEventListener("resize", ke);
    });
    let R = null;
    function A(P) {
      return Array.from(P.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'));
    }
    ge(L, (P) => {
      if (P && (t.temporary || t.persistent)) {
        const _ = s.value;
        if (!_) return;
        const le = A(_);
        le.length ? le[0].focus() : (_.setAttribute("tabindex", "-1"), _.focus()), R = (W) => {
          if (W.key !== "Tab") return;
          const ae = A(_);
          if (!ae.length) return;
          const Se = ae[0], Ve = ae[ae.length - 1];
          W.shiftKey && document.activeElement === Se ? (W.preventDefault(), Ve.focus()) : !W.shiftKey && document.activeElement === Ve && (W.preventDefault(), Se.focus());
        }, document.addEventListener("keydown", R);
      } else
        R && (document.removeEventListener("keydown", R), R = null);
      $();
    });
    const w = M(!1), z = i(() => t.rail ? !0 : !!(t.hoverExpand || t.expandOnHover));
    let N;
    const V = () => {
      z.value && (N && window.clearTimeout(N), w.value = !0);
    }, S = () => {
      z.value && (N = window.setTimeout(() => {
        w.value = !1;
      }, 150));
    }, k = i(() => t.rail && !w.value), j = i(() => t.location === "right" ? "right-0" : "left-0"), X = i(() => k.value ? typeof t.railWidth == "number" ? `w-[${t.railWidth}px]` : String(t.railWidth) : typeof t.width == "number" ? `w-[${t.width}px]` : String(t.width)), be = i(() => {
      const P = ["fixed", "h-full", "overflow-hidden", "flex", "flex-col"];
      return t.isStuck && P.push("top-0"), t.location === "right" ? P.push("right-0") : P.push("left-0"), t.rail && P.push("transition-all"), ge(
        () => t.rail,
        (_) => {
          $();
        }
      ), P.join(" ");
    }), Ae = i(() => t.rail ? "drawer-rail" : ""), ve = i(() => t.rail && !k.value ? "drawer-expanded" : ""), Je = i(() => !(t.rail && k.value)), He = i(() => t.location === "right" ? "translate-x-full" : "-translate-x-full"), rt = i(() => t.zIndex !== void 0 && typeof t.zIndex == "string" && t.zIndex.startsWith("z-") ? t.zIndex : t.overlayAppBar ? "z-50" : "z-10"), U = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex };
    }), J = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex - 1 };
    }), ne = M(0), se = () => {
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
    se();
    let Ce;
    const ke = () => {
      Ce && window.clearTimeout(Ce), Ce = window.setTimeout(() => {
        se();
      }, 100);
    };
    Be(() => {
      window.addEventListener("resize", ke);
    }), $e(() => {
      window.removeEventListener("resize", ke);
    });
    const bt = i(() => t.zIndex !== void 0 && typeof t.zIndex == "number" ? "" : t.overlayAppBar ? "z-40" : "z-0"), Qe = ce("layout", null), Ue = M(null), ht = M(0);
    function Ze() {
      Ue.value && (ht.value = Ue.value.getBoundingClientRect().width, Qe && !t.rail && Qe.register("drawer", t.id, {
        mode: t.modelValue || t.permanent ? "permanent" : "rail",
        right: t.location === "right",
        width: ht.value
      }));
    }
    return Be(() => {
      Ue.value = s.value, Ze();
      const P = new ResizeObserver(Ze);
      Ue.value && P.observe(Ue.value), $e(() => {
        P.disconnect(), Qe && Qe.unregister("drawer", t.id);
      });
    }), (P, _) => {
      const le = me("Icon");
      return n(), a("div", la, [
        L.value && e.temporary ? (n(), a("div", {
          key: 0,
          class: f(["fixed inset-0", bt.value]),
          style: ue([J.value]),
          onClick: re
        }, null, 6)) : v("", !0),
        d("nav", {
          ref_key: "navRef",
          ref: s,
          class: f([
            rt.value,
            t.location === "right" ? "border-l" : "border",
            "border-color-2 transform transition-transform duration-200 ease-in-out",
            be.value,
            j.value,
            Ae.value,
            ve.value,
            e.color,
            X.value,
            !L.value && !e.permanent ? He.value : "translate-x-0"
          ]),
          style: ue([U.value, ne.value ? { paddingTop: ne.value + "px" } : void 0]),
          "aria-hidden": !L.value && !e.permanent,
          onClick: V
        }, [
          d("div", ra, [
            d("div", aa, [
              Je.value ? D(P.$slots, "prepend", { key: 0 }, () => [
                _[1] || (_[1] = d("span", { class: "font-semibold" }, "Menu", -1))
              ], !0) : v("", !0),
              d("div", oa, [
                D(P.$slots, "append", {}, void 0, !0),
                !e.permanent && !e.temporary ? (n(), a("button", sa, [
                  e.location === "left" && !F(Te) && k.value && !e.rail ? (n(), Z(le, {
                    key: 0,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0),
                  e.location === "left" && !F(Te) && !e.rail && !k.value ? (n(), Z(le, {
                    key: 1,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0),
                  e.location === "right" && F(Te) && !e.rail && k.value ? (n(), Z(le, {
                    key: 2,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0),
                  e.location === "right" && F(Te) && !e.rail && !k.value ? (n(), Z(le, {
                    key: 3,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : v("", !0)
                ])) : v("", !0),
                e.temporary ? (n(), a("button", {
                  key: 1,
                  onClick: G,
                  class: f(["ml-2 rounded p-2"]),
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
            d("div", ia, [
              t.items ? (n(), a("div", ua, [
                t.filterable && !(t.rail && k.value) ? (n(), a("div", da, [
                  K(F(yt), {
                    prepend: "magnifying-glass",
                    label: "Search",
                    modelValue: y.value,
                    "onUpdate:modelValue": _[0] || (_[0] = (W) => y.value = W),
                    placeholder: t.searchPlaceholder
                  }, null, 8, ["modelValue", "placeholder"])
                ])) : v("", !0),
                (n(!0), a(oe, null, ie(I.value, (W) => (n(), a("div", {
                  key: W.group,
                  class: f(["py-2", k.value ? "py-1" : ""])
                }, [
                  W.group ? (n(), a("div", {
                    key: 0,
                    class: f(["group-header px-3 pt-3 pb-1 text-lg uppercase flex items-center justify-between", P.groupHeaderStyles, k.value ? "pt-1 pb-0 px-1" : ""]),
                    role: "button",
                    tabindex: t.collapsibleGroups ? 0 : -1,
                    onClick: ee((ae) => m(W.group), ["prevent"]),
                    onKeydown: [
                      pe(ee((ae) => m(W.group), ["prevent"]), ["enter"]),
                      pe(ee((ae) => m(W.group), ["prevent"]), ["space"])
                    ],
                    "aria-expanded": c(W.group)
                  }, [
                    d("span", fa, [
                      t.renderGroupParent ? (n(), Z(Oe(t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].href ? "a" : "button"), {
                        key: 0,
                        href: t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].href || void 0,
                        class: "group-parent flex items-center gap-3 px-0 py-0 w-full text-left",
                        onClick: ee((ae) => p(ae, W.group), ["stop"]),
                        onKeydown: (ae) => u(ae, W.group)
                      }, {
                        default: te(() => [
                          t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].icon ? (n(), a("span", ga, [
                            K(le, {
                              name: t.groupParents[W.group].icon,
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : t.groupIcons && t.groupIcons[W.group] ? (n(), a("span", ma, [
                            K(le, {
                              name: t.groupIcons[W.group],
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : v("", !0),
                          !t.rail || !k.value ? (n(), a("span", {
                            key: 2,
                            class: f(["text-lg uppercase", P.groupHeaderStyles])
                          }, T(t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].label || W.group), 3)) : v("", !0)
                        ]),
                        _: 2
                      }, 1064, ["href", "onClick", "onKeydown"])) : (n(), a(oe, { key: 1 }, [
                        t.groupIcons && t.groupIcons[W.group] ? (n(), a("span", pa, [
                          K(le, {
                            name: t.groupIcons[W.group],
                            size: "18"
                          }, null, 8, ["name"])
                        ])) : v("", !0),
                        !t.rail || !k.value ? (n(), a("span", {
                          key: 1,
                          class: f(["text-lg uppercase", P.groupHeaderStyles])
                        }, T(W.group), 3)) : v("", !0)
                      ], 64))
                    ]),
                    t.collapsibleGroups && (!t.rail || !k.value) ? (n(), a("button", {
                      key: 0,
                      onClick: ee((ae) => m(W.group), ["stop", "prevent"]),
                      onKeydown: [
                        pe(ee((ae) => m(W.group), ["stop", "prevent"]), ["enter"]),
                        pe(ee((ae) => m(W.group), ["stop", "prevent"]), ["space"])
                      ],
                      class: f(["px-2 py-1 rounded focus:outline-none", P.groupHeaderStyles]),
                      style: { opacity: 0.7 },
                      "aria-expanded": c(W.group)
                    }, [
                      K(le, {
                        name: "chevron-down",
                        size: "16",
                        class: f({ "rotate-180": c(W.group) })
                      }, null, 8, ["class"])
                    ], 42, va)) : v("", !0)
                  ], 42, ca)) : v("", !0),
                  ze(d("ul", {
                    class: f(["py-1", k.value ? "py-0" : ""])
                  }, [
                    (n(!0), a(oe, null, ie(W.items, (ae) => (n(), Z(F(Dt), {
                      key: ae.id,
                      id: ae.id,
                      href: ae.href,
                      draggable: t.draggable && !ae.disabled,
                      dragging: String(F(h)) === String(ae.id),
                      "is-drag-over": String(F(B)) === String(ae.id),
                      "drag-pos": F(C),
                      onDragstart: H,
                      onDragover: E,
                      onDragleave: (Se) => {
                        String(F(B)) === String(ae.id) && (wt(B) ? B.value = null : B = null, wt(C) ? C.value = null : C = null);
                      },
                      onDrop: Y
                    }, {
                      default: te(() => [
                        ae.icon ? (n(), Z(le, {
                          key: 0,
                          name: ae.icon,
                          size: "20",
                          class: "rail-icon mr-2"
                        }, null, 8, ["name"])) : v("", !0),
                        d("span", ya, T(ae.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["id", "href", "draggable", "dragging", "is-drag-over", "drag-pos", "onDragleave"]))), 128))
                  ], 2), [
                    [Ee, c(W.group)]
                  ])
                ], 2))), 128))
              ])) : (n(), a("div", ba, [
                D(P.$slots, "default", {}, void 0, !0)
              ]))
            ]),
            d("div", ha, [
              D(P.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ], 14, na)
      ]);
    };
  }
}, wa = /* @__PURE__ */ de(xa, [["__scopeId", "data-v-5da8f8e8"]]), ka = ["data-drawer-item-id", "draggable"], Sa = ["href"], Ca = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = (I) => {
      t.draggable && (I.dataTransfer.setData("text/plain", String(t.id)), l("dragstart", { id: t.id, event: I }));
    }, s = (I) => {
      t.draggable && l("dragover", { id: t.id, event: I });
    }, b = (I) => {
      l("dragleave", { id: t.id, event: I });
    }, y = (I) => {
      const g = I.dataTransfer.getData("text/plain");
      l("drop", { id: t.id, sourceId: g, event: I });
    }, x = (I) => {
      l("click", { id: t.id, event: I });
    };
    return (I, g) => (n(), a("li", {
      "data-drawer-item-id": e.id,
      draggable: e.draggable,
      class: f([
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
      onClick: x
    }, [
      e.href ? (n(), a("a", {
        key: 0,
        href: e.href,
        class: "flex items-center w-full"
      }, [
        D(I.$slots, "default", {}, void 0, !0)
      ], 8, Sa)) : D(I.$slots, "default", { key: 1 }, void 0, !0)
    ], 42, ka));
  }
}, Dt = /* @__PURE__ */ de(Ca, [["__scopeId", "data-v-464014e1"]]), $a = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = M(100);
    let s = null;
    const b = i(() => {
      const g = {
        default: "bg-color-2 text-ui-text-color border-color",
        success: "bg-green-50 text-success border-green-400",
        error: "bg-red-50 text-error border-red-400",
        warning: "bg-yellow-50 text-warning border-yellow-400",
        info: "bg-blue-50 text-info border-blue-400"
      };
      return g[t.variant] || g.default;
    }), y = i(() => {
      if (t.icon && !["success", "error", "warning", "info"].includes(t.icon))
        return t.icon;
      const g = {
        success: "check-circle",
        error: "x-circle",
        warning: "exclamation-triangle",
        info: "information-circle",
        default: "bell"
      };
      return g[t.variant] || g.default;
    }), x = () => {
      l("update:modelValue", !1), l("close");
    }, I = () => {
      l("action"), t.onAction && t.onAction();
    };
    return ge(() => t.modelValue, (g) => {
      if (g && t.showProgress && t.timeout > 0) {
        o.value = 100;
        const c = 50, m = 100 / t.timeout * c;
        s = setInterval(() => {
          o.value -= m, o.value <= 0 && (clearInterval(s), o.value = 0);
        }, c);
      }
    }, { immediate: !0 }), $e(() => {
      s && clearInterval(s);
    }), (g, c) => {
      const m = me("Icon");
      return n(), Z(xe, {
        "enter-active-class": "transition-all duration-300",
        "enter-from-class": "translate-x-full opacity-0",
        "enter-to-class": "translate-x-0 opacity-100",
        "leave-active-class": "transition-all duration-200",
        "leave-from-class": "translate-x-0 opacity-100",
        "leave-to-class": "translate-x-full opacity-0"
      }, {
        default: te(() => [
          e.modelValue ? (n(), a("div", {
            key: 0,
            class: f([
              "min-w-[300px] max-w-md rounded-lg shadow-lg border",
              "flex items-start gap-3 pointer-events-auto",
              b.value,
              e.multiline ? "flex-col p-4" : "items-center px-4 py-3"
            ]),
            role: "alert"
          }, [
            e.icon || e.variant !== "default" ? (n(), a("div", $a, [
              K(m, {
                name: y.value,
                size: 20,
                color: "text-current"
              }, null, 8, ["name"])
            ])) : v("", !0),
            d("div", za, [
              e.title ? (n(), a("h3", Ba, T(e.title), 1)) : v("", !0),
              d("p", {
                class: f(["text-sm", e.multiline ? "" : "truncate"])
              }, T(e.message), 3)
            ]),
            e.action ? (n(), a("button", {
              key: 1,
              onClick: I,
              class: "flex-shrink-0 px-3 py-1 text-sm font-medium rounded hover:bg-black/10 transition-colors"
            }, T(e.action), 1)) : v("", !0),
            e.closeable ? (n(), a("button", {
              key: 2,
              onClick: x,
              class: "flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
            }, [
              K(m, {
                name: "x-mark",
                size: 16,
                color: "text-current"
              })
            ])) : v("", !0),
            e.showProgress && e.timeout > 0 ? (n(), a("div", Ia, [
              d("div", {
                class: "h-full bg-current transition-all ease-linear",
                style: ue({ width: o.value + "%" })
              }, null, 4)
            ])) : v("", !0)
          ], 2)) : v("", !0)
        ]),
        _: 1
      });
    };
  }
}, Ta = /* @__PURE__ */ de(Va, [["__scopeId", "data-v-5076a311"]]), La = {
  key: 0,
  class: "block"
}, Ma = ["onClick", "onKeydown"], Aa = {
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
  setup(e, { emit: r }) {
    const { language: t } = ce("i18n", { language: M("en"), t: (u) => u, setLanguage: () => {
    } }), l = e, o = i(() => l.rtl ?? Te.value), s = nt(), b = i(() => !!s.item), y = i(() => !!s.default), x = i(() => l.dotSize === "sm" ? 10 : l.dotSize === "lg" ? 16 : 12), I = i(() => l.gap ?? 16);
    function g(u) {
      if (l.direction === "horizontal") return "bottom";
      if (l.side === "one")
        return o.value ? "right" : "left";
      const h = (l.alternate ? u % 2 === 0 : !0) ? "left" : "right";
      return o.value ? h === "left" ? "right" : "left" : h;
    }
    function c(u) {
      return l.direction === "horizontal" ? {} : l.side === "one" ? {
        maxWidth: "100%",
        marginLeft: "0",
        marginRight: "0",
        marginInlineStart: I.value + "px",
        marginInlineEnd: "0"
      } : g(u) === "left" ? {
        maxWidth: "50%",
        marginLeft: "0",
        marginRight: "calc(50% + 16px)"
      } : {
        maxWidth: "50%",
        marginRight: "0",
        marginLeft: "calc(50% + 16px)"
      };
    }
    function m(u) {
      switch (u.status ?? "default") {
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
    const p = r;
    return (u, $) => (n(), a("div", {
      class: f(["relative ui-text-color", [
        e.direction === "vertical" ? "py-2" : "py-6 px-2"
      ]])
    }, [
      d("div", {
        class: f([
          "absolute top-0 bottom-0 w-0.5 bg-color-4",
          e.direction === "vertical" && e.side === "both" ? "left-1/2 -translate-x-1/2" : "",
          e.direction === "horizontal" ? "left-0 right-0 h-0.5 w-full" : "h-full",
          e.lineStyle === "dashed" ? "timeline-dashed-line" : ""
        ]),
        style: ue({
          top: e.direction === "horizontal" ? `calc(24px + (${x.value}px / 2))` : "0",
          ...e.direction === "vertical" && e.side === "one" ? o.value ? { right: `${x.value / 2 - 1}px` } : { left: `${x.value / 2 - 1}px` } : {}
        })
      }, null, 6),
      e.direction === "vertical" ? (n(), a("div", La, [
        (n(!0), a(oe, null, ie(e.items, (h, B) => (n(), a("div", {
          key: h.id ?? B,
          class: f([
            "relative clear-both",
            e.condensed ? "mb-3" : "mb-6"
          ])
        }, [
          d("div", {
            class: f([
              "absolute rounded-full border border-solid shadow-sm",
              m(h),
              e.side === "one" ? o.value ? "right-0" : "left-0" : "left-1/2 -translate-x-1/2"
            ]),
            style: ue({
              width: x.value + "px",
              height: x.value + "px",
              borderColor: "var(--color-1)",
              top: "0.5rem"
            })
          }, null, 6),
          d("div", {
            class: f([
              "border border-color-2 rounded-md py-3 px-4 transition-all",
              "align-" + e.align,
              e.clickable ? "cursor-pointer hover:shadow-md" : "",
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg"
            ]),
            style: ue({
              background: "var(--color-2)",
              ...c(B)
            }),
            role: "group",
            tabindex: "0",
            onClick: (C) => p("item-click", { item: h, index: B }),
            onKeydown: [
              pe(ee((C) => p("item-click", { item: h, index: B }), ["prevent"]), ["enter"]),
              pe(ee((C) => p("item-click", { item: h, index: B }), ["prevent"]), ["space"])
            ]
          }, [
            b.value ? D(u.$slots, "item", {
              key: 0,
              item: h,
              index: B
            }, void 0, !0) : y.value ? D(u.$slots, "default", {
              key: 1,
              item: h,
              index: B
            }, void 0, !0) : (n(), a(oe, { key: 2 }, [
              h.title ? (n(), a("div", Aa, T(h.title), 1)) : v("", !0),
              h.time ? (n(), a("div", Pa, T(h.time), 1)) : v("", !0),
              h.content ? (n(), a("div", Da, T(h.content), 1)) : v("", !0)
            ], 64))
          ], 46, Ma)
        ], 2))), 128))
      ])) : (n(), a("div", {
        key: 1,
        class: f(["flex gap-6 items-start justify-between relative", [e.equalizeCards ? "items-stretch" : ""]])
      }, [
        (n(!0), a(oe, null, ie(e.items, (h, B) => (n(), a("div", {
          key: h.id ?? B,
          class: "relative flex flex-col flex-1 pt-6"
        }, [
          d("div", {
            class: f([
              "absolute rounded-full border border-solid shadow-sm left-1/2 -translate-x-1/2 top-0",
              m(h)
            ]),
            style: ue({
              width: x.value + "px",
              height: x.value + "px",
              borderColor: "var(--color-1)"
            })
          }, null, 6),
          d("div", {
            class: f([
              "border border-solid border-color rounded-md py-3 px-4 mt-4 transition-all",
              "align-" + e.align,
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg",
              e.equalizeCards ? "flex-1" : ""
            ]),
            style: { background: "var(--color-2)" },
            role: "group",
            tabindex: "0",
            onClick: (C) => p("item-click", { item: h, index: B }),
            onKeydown: [
              pe(ee((C) => p("item-click", { item: h, index: B }), ["prevent"]), ["enter"]),
              pe(ee((C) => p("item-click", { item: h, index: B }), ["prevent"]), ["space"])
            ]
          }, [
            b.value ? D(u.$slots, "item", {
              key: 0,
              item: h,
              index: B
            }, void 0, !0) : y.value ? D(u.$slots, "default", {
              key: 1,
              item: h,
              index: B
            }, void 0, !0) : (n(), a(oe, { key: 2 }, [
              h.title ? (n(), a("div", Oa, T(h.title), 1)) : v("", !0),
              h.time ? (n(), a("div", ja, T(h.time), 1)) : v("", !0),
              h.content ? (n(), a("div", Na, T(h.content), 1)) : v("", !0)
            ], 64))
          ], 42, Ea)
        ]))), 128))
      ], 2))
    ], 2));
  }
}, Ha = /* @__PURE__ */ de(Ra, [["__scopeId", "data-v-0987c29e"]]), Ua = { class: "v-timeline-item" }, qa = { class: "v-timeline-item__opposite py-2 px-4" }, Fa = {
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
    const r = ce("timeline", null);
    return i(() => ({
      "v-timeline-item": !0,
      "v-timeline-item--alternate": r?.align === "alternate"
    })), (t, l) => (n(), a("div", Ua, [
      d("div", qa, [
        D(t.$slots, "opposite", {}, void 0, !0)
      ]),
      e.hideDot ? v("", !0) : (n(), a("div", {
        key: 0,
        class: "v-timeline-item__dot rounded-full mt-3",
        style: ue({ background: e.color })
      }, [
        D(t.$slots, "icon", {}, () => [
          e.icon ? (n(), a("span", Fa, T(e.icon), 1)) : v("", !0)
        ], !0)
      ], 4)),
      d("div", Wa, [
        D(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, Ga = /* @__PURE__ */ de(Ka, [["__scopeId", "data-v-6b3c0fc8"]]), Ya = ["id", "dir"], Xa = ["aria-orientation", "aria-label"], Ja = ["id", "aria-selected", "aria-controls", "tabindex", "disabled", "onClick", "onKeydown"], Qa = ["aria-label", "onClick"], Za = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => (
      /** @type {any[]} */
      t.tabs
    )), s = M(`tabs-${Math.random().toString(36).substr(2, 9)}`), b = M(t.modelValue), y = M(null), x = M(!1), I = M(!1), g = i(() => Te.value), c = i(() => t.scrollable), m = i(() => c.value ? t.vertical ? "overflow-y-auto" : "overflow-x-auto" : "overflow-visible"), p = i(() => {
      const w = [];
      return t.variant === "default" ? t.vertical ? w.push("inline-flex flex-col h-auto items-stretch rounded-lg bg-color-2 p-1 ui-text-secondary") : w.push("inline-flex h-10 items-center justify-center rounded-lg bg-color-2 p-1 ui-text-secondary") : t.variant === "outline" ? t.vertical ? w.push("flex flex-col space-y-1 border-r border-color-3 pr-4") : w.push("border-b border-color-3") : t.variant === "pills" ? (w.push("flex gap-2"), t.vertical && w.push("flex-col")) : t.variant === "underline" && (t.vertical ? w.push("flex flex-col space-y-1 border-r-2 border-color-3 pr-4") : w.push("border-b-2 border-color-3")), t.fullWidth && !t.vertical && w.push("w-full"), w.join(" ");
    }), u = i(() => t.variant === "default" ? t.fullWidth ? "w-full" : "" : t.variant === "outline" || t.variant === "underline" ? t.vertical ? "" : t.fullWidth ? "w-full" : "inline-flex" : ""), $ = i(() => c.value && t.contentHeight ? "flex-1 min-w-0 min-h-0 overflow-auto" : "flex-1 min-w-0"), h = i(() => {
      const w = {
        sm: "text-xs px-2.5 py-1.5",
        default: "text-sm px-3 py-2",
        lg: "text-base px-4 py-2.5"
      };
      return w[t.size] || w.default;
    }), B = i(() => {
      const w = {
        sm: "h-3.5 w-3.5",
        default: "h-4 w-4",
        lg: "h-5 w-5"
      };
      return w[t.size] || w.default;
    }), C = i(() => {
      const w = {
        sm: "h-4 min-w-4 px-1 text-[10px]",
        default: "h-5 min-w-5 px-1.5 text-xs",
        lg: "h-6 min-w-6 px-2 text-xs"
      };
      return w[t.size] || w.default;
    }), q = (w) => {
      const z = b.value === w, V = o.value[w]?.disabled || t.disabled;
      let S = "font-medium ";
      return t.fullWidth && !t.vertical && (S += "flex-1 "), t.vertical && (S += "w-full justify-start "), t.variant === "default" ? (S += "rounded-md ", z ? S += "bg-color-1 ui-text-color shadow-sm " : V || (S += "hover:bg-color-3 hover:ui-text-color ")) : t.variant === "outline" ? t.vertical ? (S += "rounded-md border border-transparent ", z ? S += "border-color-3 bg-color-1 ui-text-color shadow-sm " : V || (S += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : (S += "border-b-2 -mb-[2px] rounded-none ", z ? S += "border-primary ui-text-color " : V || (S += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : t.variant === "pills" ? (S += "rounded-full ", z ? S += "bg-primary text-white shadow-sm " : V || (S += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : t.variant === "underline" && (t.vertical ? (S += "border-r-2 -mr-[2px] rounded-none pr-4 ", z ? S += "border-primary ui-text-color " : V || (S += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : (S += "border-b-2 -mb-[2px] rounded-none ", z ? S += "border-primary ui-text-color " : V || (S += "border-transparent ui-text-secondary hover:ui-text-color "))), S;
    }, H = (w) => {
      const z = String(w?.badgeVariant || "").toLowerCase();
      return z.includes("error") || z.includes("danger") || z.includes("red") ? "bg-red-500 text-white" : z.includes("success") || z.includes("green") ? "bg-green-500 text-white" : z.includes("warning") || z.includes("yellow") ? "bg-yellow-500 text-white" : z.includes("info") || z.includes("blue") ? "bg-blue-500 text-white" : z.includes("secondary") ? "bg-color-3 ui-text-color" : "bg-primary text-white";
    }, E = i(() => {
      const w = {
        sm: "mt-3",
        default: "mt-4",
        lg: "mt-6"
      };
      return t.vertical ? "pl-0" : w[t.size] || w.default;
    }), Y = (w) => {
      o.value[w]?.disabled || t.disabled || (b.value = w, l("update:modelValue", w), l("change", w), c.value && Le(() => {
        const N = document.getElementById(`tab-${s.value}-${w}`), V = y.value;
        if (N && V) {
          const S = N.offsetLeft, k = S + N.offsetWidth, j = V.scrollLeft, X = j + V.clientWidth;
          S < j ? V.scrollTo({ left: S - 8, behavior: "smooth" }) : k > X && V.scrollTo({ left: k - V.clientWidth + 8, behavior: "smooth" });
        }
      }));
    }, Q = (w) => {
      l("close", w);
    }, L = (w, z) => {
      l("keydown", w, z);
      const N = o.value.length;
      let V = z;
      const S = (k, j) => {
        let X = k;
        for (let be = 0; be < N; be++)
          if (X = (X + j + N) % N, !o.value[X]?.disabled)
            return X;
        return k;
      };
      switch (w.key) {
        case "ArrowDown":
          t.vertical && (w.preventDefault(), V = S(z, 1));
          break;
        case "ArrowUp":
          t.vertical && (w.preventDefault(), V = S(z, -1));
          break;
        case "ArrowRight":
          t.vertical || (w.preventDefault(), V = S(z, g.value ? -1 : 1));
          break;
        case "ArrowLeft":
          t.vertical || (w.preventDefault(), V = S(z, g.value ? 1 : -1));
          break;
        case "Home":
          w.preventDefault(), V = S(-1, 1);
          break;
        case "End":
          w.preventDefault(), V = S(N, -1);
          break;
      }
      V !== z && (Y(V), document.getElementById(`tab-${s.value}-${V}`)?.focus());
    }, G = (w) => {
      if (!y.value || !c.value) return;
      const z = Math.max(200, y.value.clientWidth * 0.5);
      y.value.scrollBy({ left: w * z, behavior: "smooth" });
    }, re = () => {
      if (!y.value || !c.value) {
        x.value = !1, I.value = !1;
        return;
      }
      const { scrollLeft: w, scrollWidth: z, clientWidth: N } = y.value;
      x.value = w > 0, I.value = w < z - N - 10;
    };
    ge(
      () => t.modelValue,
      (w) => {
        b.value = w;
      }
    );
    let O = null;
    const R = () => {
      !y.value || !c.value || (Le(re), y.value.addEventListener("scroll", re), typeof ResizeObserver < "u" && (O = new ResizeObserver(re), O.observe(y.value)));
    }, A = () => {
      y.value && y.value.removeEventListener("scroll", re), O && (O.disconnect(), O = null);
    };
    return ge(c, (w) => {
      A(), w && R();
    }), Be(() => {
      c.value && R();
    }), $e(() => {
      A();
    }), (w, z) => (n(), a("div", {
      id: s.value,
      dir: g.value ? "rtl" : "ltr",
      class: f([
        e.vertical ? "flex flex-row gap-6" : "flex flex-col",
        e.scrollable && e.contentHeight ? e.contentHeight : "",
        e.scrollable ? "" : "h-auto"
      ])
    }, [
      d("div", {
        ref_key: "scrollContainer",
        ref: y,
        role: "tablist",
        "aria-orientation": e.vertical ? "vertical" : "horizontal",
        "aria-label": e.ariaLabel,
        class: f([
          "relative flex-shrink-0",
          m.value,
          p.value
        ])
      }, [
        d("div", {
          class: f([
            "flex",
            e.vertical ? "flex-col space-y-1" : e.scrollable ? "flex-row whitespace-nowrap" : "flex-row flex-wrap",
            u.value
          ])
        }, [
          (n(!0), a(oe, null, ie(o.value, (N, V) => (n(), a("button", {
            id: `tab-${s.value}-${V}`,
            key: V,
            role: "tab",
            type: "button",
            "aria-selected": b.value === V,
            "aria-controls": `panel-${s.value}-${V}`,
            tabindex: b.value === V ? 0 : -1,
            disabled: N.disabled || e.disabled,
            class: f([
              "relative inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-50",
              h.value,
              q(V)
            ]),
            onClick: (S) => Y(V),
            onKeydown: (S) => L(S, V)
          }, [
            N.icon ? (n(), Z(Oe(N.icon), {
              key: 0,
              class: f(B.value)
            }, null, 8, ["class"])) : v("", !0),
            d("span", null, T(N.label), 1),
            N.badge ? (n(), a("span", {
              key: 1,
              class: f([
                "inline-flex items-center justify-center rounded-full text-xs font-medium",
                C.value,
                H(N)
              ])
            }, T(N.badge), 3)) : v("", !0),
            e.closable && !N.disabled ? (n(), a("button", {
              key: 2,
              type: "button",
              "aria-label": `Close ${N.label}`,
              class: "ml-1 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              onClick: ee((S) => Q(V), ["stop"])
            }, [...z[2] || (z[2] = [
              d("svg", {
                class: "h-3.5 w-3.5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                d("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, Qa)) : v("", !0)
          ], 42, Ja))), 128))
        ], 2),
        !e.vertical && e.scrollable && e.showScrollButtons && (x.value || I.value) ? (n(), a("div", Za, [
          x.value ? (n(), a("button", {
            key: 0,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: z[0] || (z[0] = (N) => G(-1))
          }, [...z[3] || (z[3] = [
            d("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ])])) : v("", !0),
          I.value ? (n(), a("button", {
            key: 1,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: z[1] || (z[1] = (N) => G(1))
          }, [...z[4] || (z[4] = [
            d("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ])])) : v("", !0)
        ])) : v("", !0)
      ], 10, Xa),
      d("div", {
        class: f($.value)
      }, [
        (n(!0), a(oe, null, ie(o.value, (N, V) => (n(), a(oe, { key: V }, [
          !e.lazy || b.value === V ? ze((n(), a("div", {
            key: 0,
            id: `panel-${s.value}-${V}`,
            role: "tabpanel",
            "aria-labelledby": `tab-${s.value}-${V}`,
            tabindex: 0,
            class: f(["focus-visible:outline-none", E.value])
          }, [
            D(w.$slots, `content-${V}`, { tab: N }, () => [
              fe(T(N.content), 1)
            ])
          ], 10, _a)), [
            [Ee, b.value === V]
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
}, ro = { class: "sr-only" }, ao = /* @__PURE__ */ Ie({
  __name: "ThemeToggle",
  setup(e) {
    const r = M(!1);
    Be(() => {
      const o = localStorage.getItem("theme");
      o ? r.value = o === "dark" : r.value = window.matchMedia("(prefers-color-scheme: dark)").matches, t();
    }), ge(r, () => {
      t(), localStorage.setItem("theme", r.value ? "dark" : "light");
    });
    const t = () => {
      r.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, l = () => {
      r.value = !r.value;
    };
    return (o, s) => (n(), a("button", {
      onClick: l,
      class: "flex items-center justify-center w-10 h-10 p-2 bg-transparent rounded-full cursor-pointer transition-all duration-300 ease-in-out text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 focus:outline-none",
      title: r.value ? "Switch to light mode" : "Switch to dark mode"
    }, [
      r.value ? (n(), a("svg", lo, [...s[0] || (s[0] = [
        Ut('<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" data-v-8069750e></circle><path d="m12 2 0 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m12 20 0 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m4.93 4.93 1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m17.66 17.66 1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m2 12 2 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m20 12 2 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m6.34 17.66-1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path><path d="m19.07 4.93-1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8069750e></path>', 9)
      ])])) : (n(), a("svg", no, [...s[1] || (s[1] = [
        d("path", {
          d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
          stroke: "currentColor",
          "stroke-width": "2",
          fill: "currentColor"
        }, null, -1)
      ])])),
      d("span", ro, T(r.value ? "Switch to light mode" : "Switch to dark mode"), 1)
    ], 8, to));
  }
}), oo = /* @__PURE__ */ de(ao, [["__scopeId", "data-v-8069750e"]]), so = {
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
    return (r, t) => (n(), a("div", {
      class: f(["flex items-center justify-between gap-4", e.bg, e.border, F(we)[e.rounded], e.padding, e.margin, e.width, e.height, e.elevation])
    }, [
      D(r.$slots, "title", {}, () => [
        e.title ? (n(), a("h1", {
          key: 0,
          class: f([r.textClass ?? "text-2xl font-semibold md:text-nowrap md:whitespace-nowrap"])
        }, T(e.title), 3)) : v("", !0)
      ]),
      D(r.$slots, "default")
    ], 2));
  }
}, io = { class: "relative w-full overflow-auto rounded-lg border border-color-3" }, uo = /* @__PURE__ */ Ie({
  inheritAttrs: !1,
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    return (r, t) => (n(), a("div", io, [
      d("table", ye({ class: "w-full caption-bottom text-sm" }, r.$attrs), [
        D(r.$slots, "default")
      ], 16)
    ]));
  }
}), co = /* @__PURE__ */ Ie({
  inheritAttrs: !1,
  __name: "TableHead",
  setup(e) {
    return (r, t) => (n(), a("thead", ye({ class: "bg-color-1 [&_tr]:border-b [&_tr]:border-color-3" }, r.$attrs), [
      D(r.$slots, "default")
    ], 16));
  }
}), fo = /* @__PURE__ */ Ie({
  inheritAttrs: !1,
  __name: "TableBody",
  setup(e) {
    return (r, t) => (n(), a("tbody", ye({ class: "[&_tr:last-child]:border-0 divide-y divide-color-3" }, r.$attrs), [
      D(r.$slots, "default")
    ], 16));
  }
}), go = ["data-state"], mo = /* @__PURE__ */ Ie({
  inheritAttrs: !1,
  __name: "TableRow",
  props: {
    selected: { type: Boolean }
  },
  setup(e) {
    return (r, t) => (n(), a("tr", ye({
      class: ["border-b border-color-3 transition-colors", [
        e.selected ? "bg-color-2" : "hover:bg-color-1/60"
      ]],
      "data-state": e.selected ? "selected" : void 0
    }, r.$attrs), [
      D(r.$slots, "default")
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
}, xo = /* @__PURE__ */ Ie({
  inheritAttrs: !1,
  __name: "Th",
  props: {
    sortable: { type: Boolean },
    sortDirection: {},
    align: {}
  },
  emits: ["sort"],
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[t.align ?? "left"]);
    return (s, b) => (n(), a("th", ye({
      class: ["h-11 px-4 align-middle text-xs font-semibold uppercase tracking-wider ui-text-secondary whitespace-nowrap", [
        o.value,
        e.sortable ? "cursor-pointer select-none hover:text-foreground group" : ""
      ]]
    }, s.$attrs, {
      onClick: b[0] || (b[0] = (y) => e.sortable ? l("sort") : void 0)
    }), [
      d("div", po, [
        D(s.$slots, "default"),
        e.sortable ? (n(), a("span", vo, [
          e.sortDirection === "asc" ? (n(), a("svg", yo, [...b[1] || (b[1] = [
            d("path", {
              "fill-rule": "evenodd",
              d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.sortDirection === "desc" ? (n(), a("svg", bo, [...b[2] || (b[2] = [
            d("path", {
              "fill-rule": "evenodd",
              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : (n(), a("svg", ho, [...b[3] || (b[3] = [
            d("path", { d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" }, null, -1),
            d("path", {
              "fill-rule": "evenodd",
              d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])]))
        ])) : v("", !0)
      ])
    ], 16));
  }
}), wo = /* @__PURE__ */ Ie({
  inheritAttrs: !1,
  __name: "Td",
  props: {
    align: {},
    muted: { type: Boolean },
    mono: { type: Boolean }
  },
  setup(e) {
    const r = e, t = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[r.align ?? "left"]);
    return (l, o) => (n(), a("td", ye({
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
}, $o = { class: "text-sm" }, zo = /* @__PURE__ */ Ie({
  __name: "TableEmpty",
  props: {
    colspan: {},
    message: {},
    icon: {}
  },
  setup(e) {
    return (r, t) => (n(), a("tr", null, [
      d("td", {
        colspan: e.colspan ?? 99,
        class: "px-4 py-12 text-center"
      }, [
        d("div", So, [
          r.$slots.icon ? v("", !0) : (n(), a("svg", Co, [...t[0] || (t[0] = [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75c-.621 0-1.125.504-1.125 1.125"
            }, null, -1)
          ])])),
          D(r.$slots, "icon"),
          d("span", $o, T(e.message ?? "No results found."), 1),
          D(r.$slots, "default")
        ])
      ], 8, ko)
    ]));
  }
}), Bo = /* @__PURE__ */ Ie({
  __name: "TableSkeleton",
  props: {
    cols: {},
    rows: {}
  },
  setup(e) {
    return (r, t) => (n(!0), a(oe, null, ie(e.rows ?? 5, (l) => (n(), a("tr", {
      key: l,
      class: "border-b border-color-3 animate-pulse"
    }, [
      (n(!0), a(oe, null, ie(e.cols ?? 4, (o) => (n(), a("td", {
        key: o,
        class: "px-4 py-3"
      }, [
        d("div", {
          class: "h-4 rounded bg-color-2",
          style: ue({ width: `${55 + Math.floor((l * 7 + o * 3) % 5 * 10)}%` })
        }, null, 4)
      ]))), 128))
    ]))), 128));
  }
}), Io = ["dir"], Vo = {
  key: 0,
  class: "text-red-500"
}, To = { class: "flex items-center w-full gap-2 min-w-0" }, Lo = {
  key: 0,
  class: "flex-shrink-0"
}, Mo = { class: "flex-1 w-full min-w-0" }, Ao = { class: "flex items-center gap-2 flex-shrink-0" }, Po = {
  key: 1,
  class: ""
}, De = {
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
  setup(e, { emit: r }) {
    const { language: t } = ce("i18n", { language: M("en"), t: (S) => S, setLanguage: () => {
    } }), l = nt(), o = r, s = e, b = ce("formContext", null), x = qt()?.uid, I = M(!1), g = M(!1), c = M([]), m = M(!1), p = i(() => s.focused !== void 0 ? s.focused : I.value), u = i(() => {
      if (s.error === !0 || s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0) return !0;
      if (s.errorMessage && s.errorMessage !== "") {
        if (Array.isArray(s.errorMessage))
          return s.errorMessage.length > 0;
        if (typeof s.errorMessage == "string")
          return s.errorMessage.trim() !== "";
      }
      return !!(m.value && c.value && c.value.length > 0);
    }), $ = i(() => s.required ? !0 : Array.isArray(s.rules) && s.rules.includes(ft.required)), h = i(() => s.modelValue === null || s.modelValue === void 0 || s.modelValue === "" ? !1 : Array.isArray(s.modelValue) ? s.modelValue.length > 0 : (typeof s.modelValue == "boolean", !0)), B = i(() => {
      const S = [];
      return s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0 && S.push(...s.errorMessages), s.errorMessage && (Array.isArray(s.errorMessage) && s.errorMessage.length > 0 ? S.push(...s.errorMessage) : typeof s.errorMessage == "string" && s.errorMessage.trim() !== "" && S.push(s.errorMessage)), m.value && c.value && c.value.length > 0 && S.push(...c.value), S;
    });
    function C() {
      if (c.value = [], !s.rules || s.rules.length === 0) return !0;
      for (const S of s.rules) {
        const k = S(s.modelValue);
        k !== !0 && c.value.push(k);
      }
      return c.value.length === 0;
    }
    const q = i(() => {
      let S = "";
      return s.dir == "rtl" || s.lang == "dv" ? S = "rtl" : s.dir == "ltr" || s.lang == "en" ? S = "ltr" : S = "", S;
    }), H = i(() => {
      let S = "";
      return s.lang != "" ? S = s.lang : s.dir == "rtl" ? S = "dv" : s.dir == "ltr" ? S = "en" : S = t.value, S === "dv" ? "dv" : "en";
    }), E = i(() => H.value == "dv" ? "faruma" : ""), Y = i(() => {
      let S = Ke(s.label, H.value, "");
      return typeof S == "object" && S !== null && "label" in S ? S : null;
    }), Q = i(() => {
      const S = {
        disabled: s.disabled,
        readonly: s.readonly,
        value: s.modelValue,
        required: $.value,
        "aria-invalid": u.value,
        dir: q.value
      };
      return s.id && (S.id = s.id), S;
    }), L = {
      input: (S) => z(S.target ? S.target.value : S),
      focus: A,
      blur: w,
      change: (S) => o("change", S.target ? S.target.value : S)
    }, G = i(() => I.value || h.value || s.isOpen ? "-top-[1px]" : "top-[48%]"), re = i(() => {
      let S = "", k = "";
      return s.size === "xs" ? (k = "text-xs", S = s.prepend || l.prepend ? "inset-4" : "inset-3") : s.size === "sm" ? (k = "text-sm", S = s.prepend || l.prepend ? "inset-8" : "inset-3") : s.size === "md" ? (k = "text-md", S = s.prepend || l.prepend ? "inset-10" : "inset-3") : s.size === "lg" ? (k = "text-lg", S = s.prepend || l.prepend ? "inset-12" : "inset-3") : s.size === "xl" ? (k = "text-lg", S = s.prepend || l.prepend ? "inset-14" : "inset-3") : (k = "text-sm", S = s.prepend || l.prepend ? "inset-8" : "inset-3"), (p.value || h.value || s.isOpen) && (H.value === "dv" ? S = "right-8" : S = "left-8", k = "text-xs"), S + " " + k;
    }), O = i(() => {
      const S = ["absolute flex gap-1 px-2 items-center transition-all pointer-events-none h-[1px]", re.value, G.value];
      return p.value || h.value || s.isOpen ? S.push("bg-inherit") : S.push("bg-transparent"), u.value ? S.push("text-error") : p.value ? S.push("border-input-focus-border") : S.push("text-input-text"), S;
    }), R = i(() => {
      if (s.hideDetails) return [];
      if (u.value) return B.value;
      if (s.messages) {
        if (Array.isArray(s.messages))
          return s.messages.filter((S) => S && S.trim && S.trim() !== "");
        if (typeof s.messages == "string" && s.messages.trim() !== "")
          return [s.messages];
      }
      return s.hint && s.hint.trim() !== "" && (s.persistentHint || p.value) ? [s.hint] : [];
    });
    function A(S) {
      I.value = !0, o("focus", S);
    }
    function w(S) {
      if (I.value = !1, m.value = !0, b?.validateOn?.value) {
        const k = b.validateOn.value;
        if (k === "blur" || Array.isArray(k) && k.includes("blur")) {
          const X = C();
          b.validate && b.validate(x, X, c.value);
        }
      } else
        C();
      o("blur", S);
    }
    function z(S) {
      o("update:modelValue", S);
    }
    function N() {
      c.value = [], g.value = !1, m.value = !1;
    }
    const V = () => {
      const S = s.multiple ? [] : "";
      o("update:modelValue", S), o("change", S), o("click:clear");
    };
    return Be(() => {
      b && b.register(x, {
        validate: () => {
          const S = C(), k = S ? [] : c.value;
          return b.validate && b.validate(x, S, k), S;
        },
        reset: () => {
          o("update:modelValue", s.multiple ? [] : ""), N();
        },
        resetValidation: () => {
          c.value = [], g.value = !1;
        }
      });
    }), ge(
      () => s.isOpen,
      (S, k) => {
        if (k === !0 && S === !1) {
          m.value = !0;
          const j = C();
          b?.validate && b.validate(x, j, c.value);
        }
      }
    ), $e(() => {
      b && b.unregister(x);
    }), (S, k) => {
      const j = me("Icon");
      return n(), a("div", {
        dir: q.value !== "" ? q.value : "",
        class: f([E.value, e.margin, e.width, "group/select overflow-visible "])
      }, [
        d("div", {
          class: f([
            "relative border focus:outline-none transition cursor-pointer flex items-center justify-between gap-2 ",
            e.width,
            s.height || F(Jt)[e.size],
            F(vt)[e.size],
            u.value ? "border-red-500" : ` ${e.border}`,
            e.disabled ? "bg-color-2 cursor-not-allowed" : `${e.bg} ${e.hover} ${e.focus}`,
            e.isOpen && !u.value ? "border-color-4" : "",
            !e.isOpen && !u.value ? "border-color-2" : "",
            e.rounded ? F(we)[e.rounded] : "",
            e.textColor
          ])
        }, [
          e.label ? (n(), a("div", {
            key: 0,
            class: f(O.value),
            "aria-hidden": "true"
          }, [
            fe(T(Y.value ? Y.value.label : e.label) + " ", 1),
            $.value ? (n(), a("span", Vo, "*")) : v("", !0)
          ], 2)) : v("", !0),
          d("div", To, [
            S.$slots.prepend || e.prepend ? (n(), a("div", Lo, [
              D(S.$slots, "prepend", {}, () => [
                K(j, {
                  size: F(Me)[e.size],
                  name: e.prepend,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : v("", !0),
            d("div", Mo, [
              D(S.$slots, "control", {
                attrs: Q.value,
                events: L
              })
            ])
          ]),
          d("div", Ao, [
            e.clearable && h.value && !e.disabled ? (n(), a("button", {
              key: 0,
              class: "hover:text-input-focus-border text-input-text flex items-center invisible group-hover/select:visible transition-all cursor-pointer",
              title: "Clear selection",
              type: "button",
              onClick: ee(V, ["stop"])
            }, [...k[0] || (k[0] = [
              d("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-4"
              }, [
                d("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ])])) : v("", !0),
            S.$slots.append || e.append ? (n(), a("div", Po, [
              D(S.$slots, "append", {}, () => [
                K(j, {
                  size: F(Me)[e.size],
                  name: e.append,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : v("", !0)
          ])
        ], 2),
        R.value.length ? (n(), a("div", {
          key: 0,
          class: f(["mt-1 text-xs", H.value === "dv" ? "text-right" : "text-left", "ui-text-secondary"])
        }, [
          (n(!0), a(oe, null, ie(R.value, (X, be) => (n(), a("div", {
            key: be,
            class: f(u.value ? "text-red-500" : "")
          }, T(F(Ke)(X, H.value, "")), 3))), 128))
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => Array.isArray(t.modelValue) ? t.modelValue.includes(t.value) : t.modelValue === t.trueValue), s = () => {
      if (t.disabled) return;
      let p;
      if (Array.isArray(t.modelValue)) {
        p = [...t.modelValue];
        const u = p.indexOf(t.value);
        u === -1 ? p.push(t.value) : p.splice(u, 1);
      } else
        p = t.modelValue === t.trueValue ? t.falseValue : t.trueValue;
      l("update:modelValue", p), l("change", p);
    }, b = i(() => {
      const p = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return p[t.size] || p.md;
    }), y = i(() => {
      const p = {
        xs: "w-2.5 h-2.5",
        sm: "w-3 h-3",
        md: "w-3.5 h-3.5",
        lg: "w-4 h-4",
        xl: "w-5 h-5"
      };
      return p[t.size] || p.md;
    }), x = i(() => {
      const p = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return p[t.size] || p.md;
    }), I = i(() => {
      const p = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return p[t.size] || p.md;
    }), g = i(() => {
      const p = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        full: "rounded-full"
      };
      return p[t.rounded] || p.md;
    }), c = i(() => {
      const p = {
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
      return p[t.color] || p.primary;
    }), m = i(() => t.error ? o.value || t.indeterminate ? "bg-red-500 border-red-500" : "border-red-500 hover:border-red-600" : o.value || t.indeterminate ? c.value.checked : t.disabled ? "border-color-3 bg-color-2" : c.value.unchecked);
    return (p, u) => (n(), a("div", {
      class: f(["relative", e.margin])
    }, [
      d("label", {
        class: f([
          "inline-flex items-start gap-3 cursor-pointer select-none",
          e.disabled ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        d("div", {
          class: f([
            "flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200",
            b.value,
            g.value,
            m.value,
            e.disabled ? "cursor-not-allowed" : "cursor-pointer"
          ])
        }, [
          K(xe, { name: "scale" }, {
            default: te(() => [
              o.value && !e.indeterminate ? (n(), a("svg", {
                key: 0,
                class: f(["text-white", y.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...u[0] || (u[0] = [
                d("path", {
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
              e.indeterminate ? (n(), a("svg", {
                key: 0,
                class: f(["text-white", y.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...u[1] || (u[1] = [
                d("path", {
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
        e.label || e.description || p.$slots.default ? (n(), a("div", Do, [
          e.label || p.$slots.default ? (n(), a("span", {
            key: 0,
            class: f([
              "ui-text-color leading-tight",
              x.value
            ])
          }, [
            D(p.$slots, "default", {}, () => [
              fe(T(e.label), 1)
            ], !0),
            e.required ? (n(), a("span", Eo, "*")) : v("", !0)
          ], 2)) : v("", !0),
          e.description ? (n(), a("span", {
            key: 1,
            class: f([
              "ui-text-secondary mt-0.5",
              I.value
            ])
          }, T(e.description), 3)) : v("", !0)
        ])) : v("", !0)
      ], 2),
      e.error ? (n(), a("p", Oo, T(typeof e.error == "string" ? e.error : ""), 1)) : v("", !0),
      e.hint && !e.error ? (n(), a("p", jo, T(e.hint), 1)) : v("", !0)
    ], 2));
  }
}, Et = /* @__PURE__ */ de(No, [["__scopeId", "data-v-2c11cca3"]]), Ro = ["tabindex", "onKeydown"], Ho = {
  key: 0,
  class: "flex items-center"
}, Uo = ["src", "alt"], qo = { class: "flex items-center gap-1 min-w-0" }, Fo = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => {
      const u = {
        small: "px-2 py-1 text-xs min-h-6",
        default: "px-3 py-1.5 text-sm min-h-8",
        large: "px-4 py-2 text-base min-h-10"
      };
      return u[t.size] ? u[t.size] : t.size || u.default;
    }), s = i(() => t.rounded === "none" ? "rounded-none" : t.rounded === "sm" ? "rounded-sm" : t.rounded === "md" ? "rounded-md" : t.rounded === "lg" ? "rounded-lg" : t.rounded === "xl" ? "rounded-xl" : "rounded-full"), b = i(() => {
      if (t.bgColor || t.textColor || t.borderColor) {
        const h = t.bgColor || "bg-gray-100", B = t.textColor || "text-gray-800", C = t.borderColor ? `border ${t.borderColor}` : "";
        return t.variant === "outlined" ? `bg-transparent ${B} border ${C || "border-gray-300"}` : `${h} ${B} ${C}`;
      }
      const u = {
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
      }, $ = u[t.color];
      return $ && $[t.variant] ? $[t.variant] : t.color ? t.color : u.primary.default;
    }), y = i(() => {
      const u = "font-medium";
      return t.textClass ? `${u} ${t.textClass}` : u;
    }), x = i(() => {
      const u = {
        small: "w-3 h-3",
        default: "w-4 h-4",
        large: "w-5 h-5"
      };
      return u[t.size] || u.default;
    }), I = i(() => {
      const u = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return `${u[t.size] || u.default} rounded-full object-cover`;
    }), g = i(() => {
      const u = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return u[t.size] || u.default;
    }), c = i(() => {
      const u = {
        small: "w-2.5 h-2.5",
        default: "w-3 h-3",
        large: "w-3.5 h-3.5"
      };
      return u[t.size] || u.default;
    }), m = () => {
      !t.disabled && t.clickable && l("click");
    }, p = () => {
      t.disabled || l("close");
    };
    return (u, $) => (n(), a("div", {
      class: f([
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
      onClick: m,
      onKeydown: [
        pe(m, ["enter"]),
        pe(ee(m, ["prevent"]), ["space"])
      ]
    }, [
      u.$slots.prepend || e.avatar || e.prependIcon ? (n(), a("div", Ho, [
        D(u.$slots, "prepend", {}, () => [
          e.avatar ? (n(), a("img", {
            key: 0,
            src: e.avatar,
            alt: e.avatarAlt,
            class: f(I.value)
          }, null, 10, Uo)) : e.prependIcon ? (n(), Z(Oe(e.prependIcon), {
            key: 1,
            class: f(x.value)
          }, null, 8, ["class"])) : (n(), a("svg", {
            key: 2,
            class: f(x.value),
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [...$[0] || ($[0] = [
            d("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }, null, -1),
            d("path", { d: "M12 6v6l4 2" }, null, -1)
          ])], 2))
        ], !0)
      ])) : v("", !0),
      d("div", qo, [
        d("span", {
          class: f(["truncate", y.value])
        }, [
          D(u.$slots, "default", {}, () => [
            fe(T(e.label), 1)
          ], !0)
        ], 2)
      ]),
      u.$slots.append || e.appendIcon || e.closable ? (n(), a("div", Fo, [
        D(u.$slots, "append", {}, () => [
          e.closable ? (n(), a("button", {
            key: 0,
            type: "button",
            class: f([
              "inline-flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-1",
              g.value
            ]),
            disabled: e.disabled,
            onClick: ee(p, ["stop"]),
            onKeydown: [
              pe(ee(p, ["stop"]), ["enter"]),
              pe(ee(p, ["stop", "prevent"]), ["space"])
            ]
          }, [
            (n(), a("svg", {
              class: f(c.value),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...$[1] || ($[1] = [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              }, null, -1)
            ])], 2))
          ], 42, Wo)) : e.appendIcon ? (n(), Z(Oe(e.appendIcon), {
            key: 1,
            class: f(x.value)
          }, null, 8, ["class"])) : v("", !0)
        ], !0)
      ])) : v("", !0)
    ], 42, Ro));
  }
}, Ot = /* @__PURE__ */ de(Ko, [["__scopeId", "data-v-87c674ac"]]), Go = ["aria-label"], Yo = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = i(() => {
      const g = {
        none: "gap-0",
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3",
        xl: "gap-4"
      };
      return g[t.gap] || g.md;
    }), s = i(() => {
      const g = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return g[t.justify] || g.start;
    }), b = (g, c) => typeof g == "object" && g[t.itemKey] ? g[t.itemKey] : typeof g == "object" && g.id ? g.id : c, y = (g) => typeof g == "string" ? g : typeof g == "object" ? g[t.itemText] || g.text || g.label || g.name || "" : String(g), x = (g, c) => {
      l("chip-click", { groupName: t.groupName, chip: g, index: c });
    }, I = (g, c) => {
      const m = [...t.chips];
      m.splice(c, 1), l("chip-close", { chip: g, index: c }), l("update:chips", m);
    };
    return (g, c) => (n(), a("div", {
      class: f([
        "flex flex-wrap",
        o.value,
        s.value,
        e.containerClass
      ]),
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (n(!0), a(oe, null, ie(e.chips, (m, p) => (n(), Z(F(Ot), {
        key: b(m, p),
        label: y(m),
        variant: m.variant || e.variant,
        color: m.color || e.color,
        size: m.size || e.size,
        rounded: m.rounded || e.rounded,
        clickable: m.clickable !== void 0 ? m.clickable : e.clickable,
        closable: m.closable !== void 0 ? m.closable : e.closable,
        disabled: m.disabled || e.disabled,
        avatar: m.avatar,
        "avatar-alt": m.avatarAlt,
        "prepend-icon": m.prependIcon,
        "append-icon": m.appendIcon,
        "chip-class": m.chipClass || e.chipClass,
        "text-class": m.textClass || e.textClass,
        "bg-color": m.bgColor || e.bgColor,
        "text-color": m.textColor || e.textColor,
        "border-color": m.borderColor || e.borderColor,
        onClick: (u) => x(m, p),
        onClose: (u) => I(m, p)
      }, Re({ _: 2 }, [
        g.$slots.chip ? {
          name: "default",
          fn: te((u) => [
            D(g.$slots, "chip", ye({ ref_for: !0 }, { ...u, chip: m, index: p }), void 0, !0)
          ]),
          key: "0"
        } : void 0,
        g.$slots.prepend ? {
          name: "prepend",
          fn: te((u) => [
            D(g.$slots, "prepend", ye({ ref_for: !0 }, { ...u, chip: m, index: p }), void 0, !0)
          ]),
          key: "1"
        } : void 0,
        g.$slots.append ? {
          name: "append",
          fn: te((u) => [
            D(g.$slots, "append", ye({ ref_for: !0 }, { ...u, chip: m, index: p }), void 0, !0)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["label", "variant", "color", "size", "rounded", "clickable", "closable", "disabled", "avatar", "avatar-alt", "prepend-icon", "append-icon", "chip-class", "text-class", "bg-color", "text-color", "border-color", "onClick", "onClose"]))), 128))
    ], 10, Go));
  }
}, jt = /* @__PURE__ */ de(Yo, [["__scopeId", "data-v-045fbbbb"]]), Xo = {
  class: /* @__PURE__ */ f(["flex-1", "flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
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
  setup(e, { expose: r, emit: t }) {
    const l = t, o = e, s = ce("parentDir", ""), b = ce("parentLang", "");
    ce("formContext", null);
    const y = i(() => o.dir || s), x = i(() => o.lang || b), I = i(() => {
      const A = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], w = {};
      return A.forEach((z) => {
        z in o && (w[z] = o[z]);
      }), w;
    }), g = M(!1), c = M(o.modelValue), m = M(""), p = M(null), u = M(null), $ = M(!1), h = M(!1), B = i(() => {
      if (!u.value) return { ...o.menuStyle };
      const A = u.value.getBoundingClientRect();
      return {
        top: `${A.bottom + window.scrollY}px`,
        left: `${A.left + window.scrollX}px`,
        ...o.menuStyle
      };
    }), C = (A, w) => {
      if (!A) return "";
      const z = new Date(A);
      if (isNaN(z.getTime())) return "";
      const N = z.getFullYear(), V = String(z.getMonth() + 1).padStart(2, "0"), S = String(z.getDate()).padStart(2, "0"), k = String(z.getHours()).padStart(2, "0"), j = String(z.getMinutes()).padStart(2, "0");
      String(z.getSeconds()).padStart(2, "0");
      let X = w.replace("yyyy", N).replace("MM", V).replace("dd", S);
      return o.enableTimePicker && (X += ` ${k}:${j}`), X;
    }, q = (A, w) => {
      if (!A) return null;
      const z = A.split(" "), N = z[0], V = z[1];
      let S = null;
      const k = w.includes("/") ? "/" : w.includes("-") ? "-" : "/", j = N.split(k);
      if (w.startsWith("dd") ? j.length >= 3 && (S = new Date(j[2], j[1] - 1, j[0])) : w.startsWith("MM") ? j.length >= 3 && (S = new Date(j[2], j[0] - 1, j[1])) : w.startsWith("yyyy") && j.length >= 3 && (S = new Date(j[0], j[1] - 1, j[2])), S && V && o.enableTimePicker) {
        const X = V.split(":");
        X.length >= 2 && (S.setHours(parseInt(X[0], 10) || 0), S.setMinutes(parseInt(X[1], 10) || 0), X.length === 3 && S.setSeconds(parseInt(X[2], 10) || 0));
      }
      return S;
    }, H = i(() => {
      if (!o.modelValue) return "";
      if (o.range) {
        if (!Array.isArray(o.modelValue)) return "";
        const [A, w] = o.modelValue;
        return !A || !w ? "" : `${C(A, o.format)} - ${C(w, o.format)}`;
      }
      return C(o.modelValue, o.format);
    });
    ge(() => o.modelValue, (A) => {
      c.value = A, m.value = H.value;
    }, { immediate: !0 }), ge(c, (A) => {
      A && !isNaN(new Date(A).getTime()) && !$.value && Le(() => {
        m.value = C(A, o.format);
      });
    });
    const E = (A) => {
    }, Y = (A) => {
      $.value = !0, m.value = A.target.value;
      const w = o.format.includes("/") ? "/" : o.format.includes("-") ? "-" : "/", z = m.value.split(" ")[0].split(w);
      if (z.length === 3 && z.every((N) => N.length > 0)) {
        let N;
        if (o.format.startsWith("dd") || o.format.startsWith("MM") ? N = z[2] : o.format.startsWith("yyyy") && (N = z[0]), N && N.length === 4) {
          const V = q(m.value, o.format);
          V && !isNaN(V.getTime()) && (c.value = new Date(V.getTime()));
        }
      }
    }, Q = () => {
      h.value = !0, g.value || (g.value = !0, l("open"));
    }, L = () => {
      if (h.value = !1, $.value = !1, !m.value) {
        R();
        return;
      }
      const A = q(m.value, o.format);
      A && !isNaN(A.getTime()) ? (m.value = C(A, o.format), l("update:modelValue", A), l("change", A), c.value = A) : m.value = H.value;
    }, G = (A) => {
      c.value = A, l("update:modelValue", A), l("change", A), o.range ? Array.isArray(A) && A[0] && A[1] && (m.value = `${C(A[0], o.format)} - ${C(A[1], o.format)}`, g.value = !1) : (m.value = C(A, o.format), g.value = !1);
    }, re = () => {
      o.disabled || (g.value = !g.value, g.value ? l("open") : l("close"));
    }, O = () => {
      g.value = !1, l("close");
    }, R = () => {
      c.value = null, m.value = "", $.value = !1, l("update:modelValue", null), l("change", null), l("clear");
    };
    return r({
      close: O,
      open: () => re(),
      clear: R
    }), (A, w) => ze((n(), a("div", {
      ref_key: "containerRef",
      ref: u,
      class: f(["relative", e.width, e.margin])
    }, [
      K(F(De), ye(I.value, {
        "model-value": H.value,
        "onUpdate:modelValue": E,
        "onClick:clear": R,
        dir: y.value,
        lang: x.value,
        label: e.label,
        prepend: e.prepend || "calendar",
        append: e.append,
        isOpen: g.value,
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
        control: te(({ attrs: z, events: N }) => [
          d("div", Xo, [
            ze(d("input", {
              ref_key: "inputRef",
              ref: p,
              "onUpdate:modelValue": w[0] || (w[0] = (V) => m.value = V),
              type: "text",
              placeholder: h.value ? e.placeholder : "",
              disabled: e.disabled,
              readonly: e.range,
              class: f([
                "w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                "focus:outline-none",
                "cursor-text"
              ]),
              onClick: w[1] || (w[1] = ee(() => {
              }, ["stop"])),
              onInput: Y,
              onFocus: Q,
              onBlur: (V) => {
                L(), N.blur(V);
              }
            }, null, 40, Jo), [
              [mt, m.value]
            ])
          ])
        ]),
        prepend: te(() => [...w[3] || (w[3] = [])]),
        _: 1
      }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "size", "disabled", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
      (n(), Z(Ye, { to: "body" }, [
        K(xe, { name: "fade" }, {
          default: te(() => [
            g.value ? (n(), a("div", {
              key: 0,
              class: f([
                "fixed mt-1 z-[9999] w-fit",
                e.menuClass
              ]),
              style: ue(B.value)
            }, [
              K(F(Gt), {
                modelValue: c.value,
                "onUpdate:modelValue": [
                  w[2] || (w[2] = (z) => c.value = z),
                  G
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
      [F(Lt), O]
    ]);
  }
}, Vt = /* @__PURE__ */ de(Qo, [["__scopeId", "data-v-7da6bb02"]]), Zo = ["aria-disabled", "onKeydown"], _o = ["id", "accept", "multiple", "disabled", "readonly", "required"], es = { class: "w-full flex items-center gap-2 sm:gap-3 flex-wrap" }, ts = { class: "" }, ls = { class: "text-xs text-input-text mt-1 hidden sm:block" }, ns = {
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
  setup(e, { emit: r }) {
    const t = e, l = r, o = M(null), s = M(!0), b = M(""), y = M([]), x = M([]), I = i(() => {
      const O = Array.isArray(t.errorMessages) ? t.errorMessages : [], R = Array.isArray(x.value) ? x.value : [];
      return [...O, ...R];
    });
    ge(
      () => t.modelValue,
      (O) => {
        y.value = g(O);
      },
      { immediate: !0 }
    );
    function g(O) {
      return (Array.isArray(O) ? O : []).map((A) => ({ file: A.file ?? A, preview: A.preview ?? null, _id: c() }));
    }
    function c() {
      return Math.random().toString(36).slice(2);
    }
    const m = i(() => [
      "w-full h-full flex items-center justify-between",
      "gap-2 sm:gap-3 px-2 sm:px-3",
      "cursor-pointer select-none transition",
      "bg-input-background"
    ]), p = i(() => {
      const O = t.accept && t.accept.length ? t.accept : "any file";
      return `${t.multiple ? "Upload multiple " : "Upload "}(${O}) • Max ${t.maxSizeMB}MB each`;
    });
    function u() {
      t.disabled || t.readonly || o.value?.click();
    }
    function $(O) {
      if (!O.target.files) return;
      const R = Array.from(O.target.files);
      H(R), O.target.value = "";
    }
    function h() {
      t.disabled || (s.value = !0);
    }
    function B() {
      t.disabled || (s.value = !0);
    }
    function C() {
      s.value = !1;
    }
    function q(O) {
      if (s.value = !1, t.disabled) return;
      const R = O.dataTransfer, A = R ? Array.from(R.files || []) : [];
      l("drop", A), H(A);
    }
    function H(O) {
      x.value = [];
      const R = [], A = t.maxSizeMB * 1024 * 1024, w = L(t.accept);
      for (const V of O) {
        if (V.size > A) {
          x.value.push(`${V.name} exceeds ${t.maxSizeMB}MB`), l("error", { type: "size", file: V });
          continue;
        }
        if (w.size && !G(V, w)) {
          x.value.push(`${V.name} type not allowed`), l("error", { type: "type", file: V });
          continue;
        }
        R.push(V);
      }
      if (!R.length) return;
      const z = R.map((V) => ({ file: V, preview: E(V), _id: c() })), N = t.multiple ? y.value.concat(z) : z.slice(0, 1);
      y.value = N, l("select", R), l("update:modelValue", N.map((V) => ({ file: V.file, preview: V.preview }))), l("change", N.map((V) => V.file));
    }
    function E(O) {
      if (!Y(O)) return null;
      try {
        return URL.createObjectURL(O);
      } catch {
        return null;
      }
    }
    function Y(O) {
      return /^image\//.test(O.type);
    }
    function Q(O) {
      const R = y.value.splice(O, 1);
      l("remove", R[0]?.file), l("update:modelValue", y.value.map((A) => ({ file: A.file, preview: A.preview }))), l("change", y.value.map((A) => A.file));
    }
    function L(O) {
      const R = /* @__PURE__ */ new Set();
      return O && O.split(",").map((A) => A.trim()).filter(Boolean).forEach((A) => R.add(A.toLowerCase())), R;
    }
    function G(O, R) {
      if (!R || !R.size) return !0;
      const A = O.type.toLowerCase(), w = O.name.toLowerCase().split(".").pop();
      for (const z of R)
        if (z.includes("/")) {
          const [N, V] = z.split("/"), [S, k] = A.split("/");
          if (V === "*") {
            if (N === S) return !0;
          } else if (z === A)
            return !0;
        } else if (z.startsWith(".") && w && z.slice(1) === w)
          return !0;
      return !1;
    }
    function re(O) {
      if (O < 1024) return `${O} B`;
      const R = O / 1024;
      return R < 1024 ? `${R.toFixed(1)} KB` : `${(R / 1024).toFixed(2)} MB`;
    }
    return (O, R) => {
      const A = me("Icon"), w = me("Button");
      return n(), a("div", {
        class: f([b.value, e.width])
      }, [
        K(F(De), ye(O.$props, {
          "persistent-hint": !!e.hint,
          error: I.value.length > 0,
          "is-open": s.value,
          clearable: !1
        }), {
          control: te(({ attrs: z }) => [
            d("div", {
              class: f(m.value),
              "aria-disabled": e.disabled,
              role: "button",
              tabindex: "0",
              onClick: u,
              onKeydown: [
                pe(ee(u, ["prevent"]), ["enter"]),
                pe(ee(u, ["prevent"]), ["space"])
              ],
              onDragenter: ee(h, ["prevent"]),
              onDragover: ee(B, ["prevent"]),
              onDragleave: ee(C, ["prevent"]),
              onDrop: ee(q, ["prevent"])
            }, [
              d("input", {
                id: z.id,
                ref_key: "inputRef",
                ref: o,
                type: "file",
                accept: e.accept,
                multiple: e.multiple,
                class: "hidden",
                disabled: e.disabled,
                readonly: z.readonly,
                required: z.required,
                onChange: $
              }, null, 40, _o),
              d("div", es, [
                K(A, {
                  name: "arrow-up-tray",
                  size: "16"
                }),
                d("div", ts, [
                  R[0] || (R[0] = d("div", { class: "text-sm text-input-text truncate" }, [
                    d("span", { class: "font-medium" }, "Click to upload"),
                    fe(" or drag and drop ")
                  ], -1)),
                  d("div", ls, T(p.value), 1)
                ])
              ]),
              K(w, {
                type: "button",
                size: "xs",
                disabled: e.disabled,
                rounded: e.rounded,
                class: "px-3 py-1.5 text-sm text-primaryText"
              }, {
                default: te(() => [...R[1] || (R[1] = [
                  fe(" Browse ", -1)
                ])]),
                _: 1
              }, 8, ["disabled", "rounded"])
            ], 42, Zo)
          ]),
          _: 1
        }, 16, ["persistent-hint", "error", "is-open"]),
        y.value.length ? (n(), a("div", ns, [
          (n(!0), a(oe, null, ie(y.value, (z, N) => (n(), a("div", {
            key: z._id,
            class: f(["flex items-center gap-3 p-2 border bg-color-1 ", e.border, e.rounded ? F(we)[e.rounded] : "rounded-md"])
          }, [
            e.showPreview && Y(z.file) ? (n(), a("div", rs, [
              d("img", {
                src: z.preview,
                alt: "preview",
                class: "w-full h-full object-cover",
                loading: "lazy"
              }, null, 8, as)
            ])) : v("", !0),
            d("div", os, [
              d("div", ss, T(z.file.name), 1),
              d("div", is, T(re(z.file.size)), 1)
            ]),
            d("button", {
              type: "button",
              class: "text-input-text hover:text-input-focus",
              onClick: (V) => Q(N)
            }, [...R[2] || (R[2] = [
              d("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-5"
              }, [
                d("path", {
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
  setup(e, { expose: r, emit: t }) {
    const l = t, o = e, s = ce("parentDir", ""), b = ce("parentLang", ""), y = i(() => o.dir || s), x = i(() => o.lang || b), I = i(() => {
      const k = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], j = {};
      return k.forEach((X) => {
        X in o && (j[X] = o[X]);
      }), j;
    }), g = M(null), c = M(!1), m = M(null), p = M(null), u = i(() => {
      if (o.modelValue === null || o.modelValue === "" || o.modelValue === void 0)
        return null;
      const k = parseFloat(o.modelValue);
      return isNaN(k) ? null : k;
    }), $ = i(() => u.value !== null && u.value <= o.min), h = i(() => u.value !== null && u.value >= o.max), B = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[o.align] || "text-left"), C = i(() => {
      const k = {
        xs: { button: "w-6 h-6", icon: "12", stackedButton: "px-1.5", stackedIcon: "10", affix: "text-xs px-1" },
        sm: { button: "w-7 h-7", icon: "14", stackedButton: "px-2", stackedIcon: "12", affix: "text-sm px-1.5" },
        md: { button: "w-8 h-8", icon: "16", stackedButton: "px-2.5", stackedIcon: "14", affix: "text-sm px-2" },
        lg: { button: "w-9 h-9", icon: "18", stackedButton: "px-3", stackedIcon: "16", affix: "text-base px-2" },
        xl: { button: "w-10 h-10", icon: "20", stackedButton: "px-3.5", stackedIcon: "18", affix: "text-lg px-2.5" }
      };
      return k[o.size] || k.md;
    }), q = i(() => {
      if (u.value === null) return "";
      let k = u.value;
      if (o.precision !== void 0 ? k = k.toFixed(o.precision) : k = String(k), o.thousandSeparator) {
        const j = o.thousandSeparator === !0 ? "," : o.thousandSeparator, X = k.split(".");
        X[0] = X[0].replace(/\B(?=(\d{3})+(?!\d))/g, j), k = X.join(o.decimalSeparator);
      } else o.decimalSeparator !== "." && (k = k.replace(".", o.decimalSeparator));
      return k;
    }), H = i(() => o.label && (!c.value || q.value) ? "" : o.placeholder), E = (k) => {
      if (k === "" || k === null || k === void 0) return null;
      let j = String(k);
      if (o.thousandSeparator) {
        const be = o.thousandSeparator === !0 ? "," : o.thousandSeparator;
        j = j.split(be).join("");
      }
      o.decimalSeparator !== "." && (j = j.replace(o.decimalSeparator, "."));
      const X = parseFloat(j);
      return isNaN(X) ? null : X;
    }, Y = (k) => k === null ? null : Math.min(Math.max(k, o.min), o.max), Q = (k) => k === null || o.precision === void 0 ? k : parseFloat(k.toFixed(o.precision)), L = (k) => {
      if (k === "-" || k === o.decimalSeparator || k === "-" + o.decimalSeparator)
        return;
      const j = E(k);
      c.value || A(j);
    }, G = (k) => {
      c.value = !1;
      const j = k.target.value;
      let X = E(j);
      X !== null && (X = Y(X), X = Q(X)), l("update:modelValue", X), l("blur", k), l("change", X);
    }, re = (k) => {
      c.value = !0, l("focus", k);
    }, O = (k) => {
      if (o.disabled || o.readonly) return;
      k.key === "ArrowUp" ? (k.preventDefault(), w()) : k.key === "ArrowDown" ? (k.preventDefault(), z()) : k.key === "Enter" && G(k);
      const j = ["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"], X = /^[0-9]$/.test(k.key), be = k.key === o.decimalSeparator || k.key === ".", Ae = k.key === "-" && o.allowNegative, ve = k.ctrlKey || k.metaKey;
      !j.includes(k.key) && !X && !be && !Ae && !ve && k.preventDefault();
    }, R = (k) => {
      !o.mouseWheel || o.disabled || o.readonly || !c.value || (k.preventDefault(), k.deltaY < 0 ? w() : z());
    }, A = (k) => {
      k !== null && (k = Y(k), k = Q(k)), l("update:modelValue", k), l("change", k);
    }, w = () => {
      if (o.disabled || o.readonly || h.value) return;
      let k = (u.value ?? 0) + o.step;
      k = Y(k), k = Q(k), l("update:modelValue", k), l("change", k);
    }, z = () => {
      if (o.disabled || o.readonly || $.value) return;
      let k = (u.value ?? 0) - o.step;
      k = Y(k), k = Q(k), l("update:modelValue", k), l("change", k);
    }, N = (k) => {
      o.disabled || o.readonly || (p.value = setTimeout(() => {
        m.value = setInterval(() => {
          k === "increment" ? w() : z();
        }, 75);
      }, 400));
    }, V = () => {
      p.value && (clearTimeout(p.value), p.value = null), m.value && (clearInterval(m.value), m.value = null);
    }, S = () => {
      l("update:modelValue", null), l("change", null);
    };
    return r({
      focus: () => g.value?.focus(),
      blur: () => g.value?.blur(),
      select: () => g.value?.select(),
      increment: w,
      decrement: z
    }), (k, j) => {
      const X = me("Icon");
      return n(), Z(F(De), ye(I.value, {
        "model-value": q.value,
        "onUpdate:modelValue": L,
        "onClick:clear": S,
        dir: y.value,
        lang: x.value,
        readonly: e.readonly,
        disabled: e.disabled,
        clearable: e.clearable,
        focused: c.value
      }), Re({
        control: te(({ attrs: be, events: Ae }) => [
          d("div", gs, [
            e.showControls && e.controlsPosition === "stacked-left" ? (n(), a("div", ms, [
              d("button", {
                type: "button",
                disabled: e.disabled || h.value,
                class: f([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  C.value.stackedButton,
                  e.disabled || h.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: w,
                onMousedown: j[4] || (j[4] = (ve) => N("increment")),
                onMouseup: V,
                onMouseleave: V
              }, [
                K(X, {
                  name: "chevron-up",
                  size: C.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, ps),
              d("button", {
                type: "button",
                disabled: e.disabled || $.value,
                class: f([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  C.value.stackedButton,
                  e.disabled || $.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: z,
                onMousedown: j[5] || (j[5] = (ve) => N("decrement")),
                onMouseup: V,
                onMouseleave: V
              }, [
                K(X, {
                  name: "chevron-down",
                  size: C.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, vs)
            ])) : v("", !0),
            e.prefix ? (n(), a("span", {
              key: 1,
              class: f(["ui-text-secondary select-none", C.value.affix])
            }, T(e.prefix), 3)) : v("", !0),
            d("input", {
              ref_key: "inputRef",
              ref: g,
              value: q.value,
              type: "text",
              inputmode: "decimal",
              placeholder: H.value,
              disabled: e.disabled,
              readonly: e.readonly,
              class: f([
                "flex-1 w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                B.value,
                e.disabled ? "cursor-not-allowed" : "",
                e.readonly ? "cursor-default" : ""
              ]),
              onInput: j[6] || (j[6] = (ve) => L(ve.target.value)),
              onBlur: (ve) => {
                G(ve), Ae.blur?.(ve);
              },
              onFocus: (ve) => {
                re(ve), Ae.focus?.(ve);
              },
              onKeydown: O,
              onWheel: R
            }, null, 42, ys),
            e.suffix ? (n(), a("span", {
              key: 2,
              class: f(["ui-text-secondary select-none", C.value.affix])
            }, T(e.suffix), 3)) : v("", !0),
            e.showControls && e.controlsPosition === "stacked-right" ? (n(), a("div", bs, [
              d("button", {
                type: "button",
                disabled: e.disabled || h.value,
                class: f([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  C.value.stackedButton,
                  e.disabled || h.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: w,
                onMousedown: j[7] || (j[7] = (ve) => N("increment")),
                onMouseup: V,
                onMouseleave: V
              }, [
                K(X, {
                  name: "chevron-up",
                  size: C.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, hs),
              d("button", {
                type: "button",
                disabled: e.disabled || $.value,
                class: f([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  C.value.stackedButton,
                  e.disabled || $.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: z,
                onMousedown: j[8] || (j[8] = (ve) => N("decrement")),
                onMouseup: V,
                onMouseleave: V
              }, [
                K(X, {
                  name: "chevron-down",
                  size: C.value.stackedIcon
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
            d("button", {
              type: "button",
              disabled: e.disabled || $.value,
              class: f([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-l",
                C.value.button,
                e.disabled || $.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: z,
              onMousedown: j[0] || (j[0] = (be) => N("decrement")),
              onMouseup: V,
              onMouseleave: V,
              onTouchstart: j[1] || (j[1] = ee((be) => N("decrement"), ["prevent"])),
              onTouchend: V
            }, [
              K(X, {
                name: "minus",
                size: C.value.icon
              }, null, 8, ["size"])
            ], 42, cs)
          ]),
          key: "0"
        } : void 0,
        e.showControls && e.controlsPosition === "sides" ? {
          name: "append",
          fn: te(() => [
            d("button", {
              type: "button",
              disabled: e.disabled || h.value,
              class: f([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-r",
                C.value.button,
                e.disabled || h.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: w,
              onMousedown: j[2] || (j[2] = (be) => N("increment")),
              onMouseup: V,
              onMouseleave: V,
              onTouchstart: j[3] || (j[3] = ee((be) => N("increment"), ["prevent"])),
              onTouchend: V
            }, [
              K(X, {
                name: "plus",
                size: C.value.icon
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
  setup(e, { expose: r, emit: t }) {
    const l = e, o = ce("parentDir", ""), s = ce("parentLang", ""), b = i(() => l.dir || o), y = i(() => l.lang || s), x = M(!1), I = i(() => x.value ? "text" : "password"), g = i(() => {
      const Q = ["label", "hint", "persistentHint", "disabled", "readonly", "required", "error", "errorMessages", "clearable", "size", "id", "prepend", "append", "isOpen", "bg", "border", "textColor", "rounded", "dir", "lang", "width", "rules", "errorMessage", "messages", "hideDetails", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], L = {};
      return Q.forEach((G) => {
        G in l && (L[G] = l[G]);
      }), L;
    }), c = t, m = M(null), p = M(null), u = M(!1), $ = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), h = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), B = (Q) => {
      const L = Q.target.value;
      c("update:modelValue", L);
    }, C = (Q) => {
      u.value = !0, c("focus", Q);
    }, q = (Q) => {
      u.value = !1, c("blur", Q);
    }, H = (Q) => {
      c("enter", l.modelValue);
    }, E = () => {
      c("update:modelValue", ""), c("clear"), m.value?.focus();
    };
    return r({ focus: () => {
      m.value?.focus();
    }, clear: E }), (Q, L) => {
      const G = me("Icon");
      return n(), a("div", {
        ref_key: "containerRef",
        ref: p,
        class: f(["relative", e.containerClass, e.width])
      }, [
        K(F(De), ye(g.value, {
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
          id: $.value,
          prepend: e.prepend,
          append: e.append,
          "is-open": u.value,
          "onClick:clear": E,
          bg: e.bg,
          border: e.border,
          "text-color": e.textColor,
          rounded: e.rounded,
          dir: b.value,
          lang: y.value,
          width: e.width,
          rules: e.rules
        }), Re({
          control: te(({ attrs: re, events: O }) => [
            d("div", ks, [
              e.prefix ? (n(), a("span", Ss, T(e.prefix), 1)) : v("", !0),
              d("input", ye({
                ref_key: "inputRef",
                ref: m
              }, re, pt(O, !0), {
                type: e.type === "password" ? I.value : e.type,
                value: e.modelValue,
                placeholder: u.value && !e.modelValue ? e.placeholder : "",
                class: h.value,
                onInput: B,
                onKeydown: pe(H, ["enter"]),
                onFocus: C,
                onBlur: q
              }), null, 16, Cs),
              e.suffix ? (n(), a("span", $s, T(e.suffix), 1)) : v("", !0)
            ])
          ]),
          _: 2
        }, [
          e.loading || e.type === "password" ? {
            name: "append",
            fn: te(() => [
              e.type === "password" && x.value ? (n(), Z(G, {
                key: 0,
                onClick: L[0] || (L[0] = (re) => x.value = !1),
                size: F(Me)[e.size],
                name: "eye",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : v("", !0),
              e.type === "password" && !x.value ? (n(), Z(G, {
                key: 1,
                onClick: L[1] || (L[1] = (re) => x.value = !0),
                size: F(Me)[e.size],
                name: "eye-slash",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : v("", !0),
              e.loading ? (n(), a("svg", zs, [...L[2] || (L[2] = [
                d("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                d("path", {
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
  setup(e, { expose: r, emit: t }) {
    const l = e, o = ce("parentDir", ""), s = ce("parentLang", ""), b = i(() => l.dir || o), y = i(() => l.lang || s), x = t, I = M(null), g = M(null), c = M(!1);
    let m = null;
    const p = i(() => l.id || `search-${Math.random().toString(36).substr(2, 9)}`), u = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), $ = (E) => {
      const Y = E.target.value;
      x("update:modelValue", Y), clearTimeout(m), m = setTimeout(() => {
        x("input", Y), x("search", Y);
      }, l.debounce);
    }, h = (E) => {
      c.value = !0, x("focus", E);
    }, B = (E) => {
      c.value = !1, x("blur", E);
    }, C = (E) => {
      x("enter", l.modelValue), x("search", l.modelValue);
    }, q = () => {
      x("update:modelValue", ""), x("clear"), I.value?.focus();
    }, H = () => {
      I.value?.focus();
    };
    return $e(() => {
      clearTimeout(m);
    }), r({ focus: H, clear: q }), (E, Y) => (n(), a("div", {
      ref_key: "containerRef",
      ref: g,
      class: f(["relative", e.containerClass, e.width])
    }, [
      K(F(De), {
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
        id: p.value,
        prepend: e.prepend,
        append: e.append,
        "is-open": c.value,
        "onClick:clear": q,
        bg: e.bg,
        border: e.border,
        "text-color": e.textColor,
        rounded: e.rounded,
        dir: b.value,
        lang: y.value,
        width: e.width,
        rules: e.rules
      }, Re({
        control: te(({ attrs: Q, events: L }) => [
          d("input", ye({
            ref_key: "inputRef",
            ref: I
          }, Q, pt(L, !0), {
            type: "search",
            value: e.modelValue,
            placeholder: c.value && !e.modelValue || !e.label && !e.modelValue ? e.placeholder : "",
            class: u.value,
            onInput: $,
            onKeydown: pe(C, ["enter"]),
            onFocus: h,
            onBlur: B
          }), null, 16, Bs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            Y[0] || (Y[0] = d("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              d("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              d("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ], -1))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["model-value", "label", "hint", "persistent-hint", "disabled", "readonly", "required", "error", "error-messages", "clearable", "size", "id", "prepend", "append", "is-open", "bg", "border", "text-color", "rounded", "dir", "lang", "width", "rules"])
    ], 2));
  }
}, Vs = /* @__PURE__ */ de(Is, [["__scopeId", "data-v-47a0ae0a"]]), Ts = {
  class: /* @__PURE__ */ f(["flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
}, Ls = ["id", "disabled", "required", "dir", "placeholder"], Ms = {
  key: 0,
  class: /* @__PURE__ */ f(["absolute left-0 right-8 px-3 truncate pointer-events-none text-gray-400"])
}, As = {
  key: 1,
  class: /* @__PURE__ */ f(["absolute left-0 right-8 px-3 truncate pointer-events-none"])
}, Ps = {
  key: 2,
  class: "absolute inset-y-0 left-3 right-14 flex items-center gap-1 overflow-hidden"
}, Ds = { class: "truncate max-w-[100px]" }, Es = { class: "p-1.5" }, Os = {
  key: 0,
  class: /* @__PURE__ */ f(["px-2.5 py-1.5 ui-text-secondary text-center text-sm rounded-lg"])
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
  setup(e, { expose: r, emit: t }) {
    const l = t, o = M(""), s = M(null), b = M(null), y = M(null), x = M({ position: "fixed" });
    M("");
    const I = M(!1), g = M(!1), c = M(null), m = M([]);
    M([]);
    const p = e, u = ce("parentDir", ""), $ = ce("parentLang", ""), h = ce("formContext", null), B = ce("api", null), C = i(() => p.dir || u), q = i(() => p.lang || $), H = i(() => {
      const U = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "multiple", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], J = {};
      return U.forEach((ne) => {
        ne in p && (J[ne] = p[ne]);
      }), J;
    }), E = M(!1), Y = i(() => p.url && m.value.length > 0 ? m.value : p.items), Q = async () => {
      if (p.url && !(p.cacheItems && m.value.length > 0)) {
        g.value = !0, c.value = null;
        try {
          let U;
          if (B)
            U = await B.get(p.url);
          else {
            const se = await fetch(p.url);
            if (!se.ok) throw new Error(`HTTP error! status: ${se.status}`);
            U = { data: await se.json() };
          }
          const J = U.data;
          let ne = null;
          if (Array.isArray(J))
            ne = J;
          else if (J.data && Array.isArray(J.data))
            ne = J.data;
          else if (J.items && Array.isArray(J.items))
            ne = J.items;
          else if (J.results && Array.isArray(J.results))
            ne = J.results;
          else
            for (const se in J)
              if (Array.isArray(J[se])) {
                ne = J[se];
                break;
              }
          if (!ne)
            throw new Error("No array found in response");
          m.value = ne;
        } catch (U) {
          console.error("Error fetching items:", U), c.value = U.message || "Failed to load items";
        } finally {
          g.value = !1;
        }
      }
    };
    Be(() => {
      p.eager && p.url && Q();
    });
    const L = (U) => {
      I.value = !0, l("focus", U);
    }, G = (U) => {
      I.value = !1, l("blur", U);
    }, re = (U) => {
      l("update:modelValue", U);
    }, O = (U) => {
      l("enter", p.modelValue), l("search", p.modelValue);
    }, R = () => {
      ve(), s.value?.focus();
    }, A = i(() => [
      "bg-transparent outline-none border-none flex-1 min-w-0 max-w-auto",
      "placeholder:text-neutral-300",
      "focus:outline-none",
      // For multiple select with badges, make input flexible to fit remaining space
      p.multiple && w.value.length > 0 ? "flex-1 min-w-0" : "w-full",
      !p.multiple && z.value && !o.value ? "text-transparent" : "",
      p.searchable ? "cursor-text" : "no-caret invisible cursor-pointer"
    ]), w = i(() => p.multiple ? Array.isArray(p.modelValue) ? p.modelValue : [] : p.modelValue !== null && p.modelValue !== void 0 ? [p.modelValue] : []), z = i(() => {
      const U = Y.value.find((J) => String(S(J)) === String(p.modelValue));
      return U ? V(U) : "";
    });
    i(() => p.multiple ? w.value.length > 0 ? `${w.value.length} selected` : "" : z.value);
    const N = i(() => o.value ? Y.value.filter((U) => V(U).toLowerCase().includes(o.value.toLowerCase())) : Y.value), V = (U) => U ? typeof U == "string" || typeof U == "number" ? U.toString() : typeof p.itemTitle == "function" ? p.itemTitle(U) : U[p.itemTitle] || "" : "", S = (U) => {
      if (!U) return "";
      if (typeof U == "string" || typeof U == "number") return U;
      if (typeof p.itemValue == "function") return p.itemValue(U);
      const J = U[p.itemValue];
      return J !== void 0 ? J : U;
    }, k = (U) => {
      const J = Y.value.find((ne) => String(S(ne)) === String(U));
      return J ? V(J) : U.toString();
    }, j = (U) => w.value.some((J) => String(J) === String(U)), X = (U) => {
      const J = p.returnObject ? U : S(U);
      if (p.multiple) {
        let ne = [...w.value];
        const se = S(U), Ce = ne.findIndex((ke) => String(ke) === String(se));
        Ce > -1 ? ne.splice(Ce, 1) : ne.push(se), l("update:modelValue", ne);
      } else
        l("update:modelValue", J), l("change", J), l("select", U), E.value = !1, o.value = "";
    }, be = (U) => {
      if (!p.multiple) {
        He();
        return;
      }
      He();
    }, Ae = (U) => {
      if (p.multiple) {
        const J = w.value.filter((ne) => String(ne) !== String(U));
        l("update:modelValue", J), l("change", J);
      }
    }, ve = () => {
      const U = p.multiple ? [] : "";
      l("update:modelValue", U), l("change", U), l("clear");
    }, Je = async () => {
      p.disabled || (E.value = !E.value, E.value ? (p.url && !p.eager && await Q(), l("open"), p.searchable && Le(() => {
        s.value?.focus();
      })) : (l("close"), o.value = ""));
    }, He = () => {
      if (E.value = !1, o.value = "", h?.validateOn?.value) {
        const U = h.validateOn.value;
        (U === "blur" || Array.isArray(U) && U.includes("blur")) && Le(() => {
        });
      }
      l("close");
    };
    ge(E, async (U) => {
      if (!U) {
        o.value = "";
        return;
      }
      await Le(), rt();
    });
    function rt() {
      if (!b.value) return;
      const U = b.value.getBoundingClientRect(), J = 4, ne = window.innerHeight - U.bottom - J, se = U.top - J, Ce = 80, ke = ne < Ce && se > ne;
      x.value = {
        position: "fixed",
        left: `${U.left}px`,
        width: p.dropdownWidth || `${U.width}px`,
        zIndex: 9999,
        overflowY: "auto",
        ...ke ? {
          bottom: `${window.innerHeight - U.top + J}px`,
          maxHeight: `${Math.min(se, 240)}px`
        } : {
          top: `${U.bottom + J}px`,
          maxHeight: `${Math.max(Math.min(ne, 240), Ce)}px`
        }
      };
    }
    return r({
      close: He,
      open: () => Je(),
      clear: ve,
      refresh: Q,
      focus: () => {
        p.searchable && E.value && s.value?.focus();
      }
    }), (U, J) => {
      const ne = me("Icon");
      return ze((n(), a("div", {
        ref_key: "triggerRef",
        ref: b,
        class: f(["relative group", e.width, e.margin])
      }, [
        K(F(De), ye(H.value, {
          "model-value": e.modelValue,
          "onUpdate:modelValue": re,
          dir: C.value,
          lang: q.value,
          label: e.label,
          prepend: e.prepend,
          append: e.append,
          isOpen: E.value,
          size: e.size,
          onClick: Je,
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
          control: te(({ attrs: se, events: Ce }) => [
            d("div", Ts, [
              ze(d("input", {
                "onUpdate:modelValue": J[0] || (J[0] = (ke) => o.value = ke),
                id: se.id,
                disabled: se.disabled,
                required: se.required,
                dir: se.dir,
                type: "text",
                size: "1",
                placeholder: I.value && !o.value && !z.value || !o.value && !e.label ? e.placeholder : "",
                class: f(A.value),
                onFocus: L,
                onBlur: G,
                onKeydown: pe(O, ["enter"])
              }, null, 42, Ls), [
                [mt, o.value]
              ]),
              !z.value && !e.multiple && !o.value && !e.label ? (n(), a("div", Ms, T(e.placeholder), 1)) : v("", !0),
              z.value && !e.multiple && !o.value ? (n(), a("div", As, T(z.value), 1)) : v("", !0),
              e.multiple && w.value.length > 0 ? (n(), a("div", Ps, [
                w.value.length < 2 ? (n(!0), a(oe, { key: 0 }, ie(w.value, (ke) => (n(), a("div", { key: ke }, [
                  d("div", {
                    class: f(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap", e.textColor, e.border, e.rounded ? F(we)[e.rounded] : ""])
                  }, [
                    d("div", Ds, T(k(ke)), 1),
                    K(ne, {
                      onClick: ee((bt) => Ae(ke), ["stop"]),
                      name: "x-mark",
                      type: "outline",
                      size: "10",
                      color: "text-current"
                    }, null, 8, ["onClick"])
                  ], 2)
                ]))), 128)) : (n(), a("div", {
                  key: 1,
                  class: f(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap flex-shrink-0", e.textColor, e.border, e.rounded ? F(we)[e.rounded] : ""])
                }, [
                  d("div", null, T(w.value.length) + " selected", 1)
                ], 2))
              ])) : v("", !0)
            ])
          ]),
          append: te(() => [
            e.append ? (n(), Z(ne, {
              key: 1,
              name: e.append,
              type: "outline",
              size: "16",
              class: "text-input-border"
            }, null, 8, ["name"])) : (n(), Z(ne, {
              key: 0,
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: f(["transition-transform duration-200", E.value ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"]))
          ]),
          _: 1
        }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "size", "disabled", "readonly", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
        (n(), Z(Ye, { to: "body" }, [
          K(xe, { name: "fade" }, {
            default: te(() => [
              E.value ? (n(), a("div", {
                key: 0,
                ref_key: "dropdownRef",
                ref: y,
                class: f([
                  "shadow-lg z-[9999] overflow-hidden",
                  e.bg ?? "ui-bg-color",
                  e.border ? "border " + e.border : "border border-color",
                  e.rounded ? F(we)[e.rounded] : "rounded-lg",
                  e.menuClass
                ]),
                style: ue({ ...x.value, ...e.menuStyle })
              }, [
                d("ul", Es, [
                  N.value.length === 0 ? (n(), a("li", Os, [
                    D(U.$slots, "no-data", {}, () => [
                      J[2] || (J[2] = fe("No items found", -1))
                    ], !0)
                  ])) : v("", !0),
                  (n(!0), a(oe, null, ie(N.value, (se, Ce) => (n(), a("li", {
                    key: S(se),
                    onMousedown: (ke) => {
                      ke.preventDefault(), X(se);
                    },
                    class: f([
                      "px-2.5 py-1.5 cursor-pointer transition flex items-center text-sm rounded-lg ui-text-color",
                      j(S(se)) ? e.selectedItemClass || "bg-primary/10 text-primary font-medium" : e.itemClass || "hover:bg-color-1",
                      e.itemHoverClass
                    ])
                  }, [
                    D(U.$slots, "item", {
                      item: se,
                      index: Ce,
                      selected: j(S(se))
                    }, () => [
                      d("div", Ns, [
                        e.multiple ? (n(), Z(F(Et), {
                          key: 0,
                          "model-value": j(S(se)),
                          value: Ce,
                          label: V(se),
                          required: !1,
                          error: !1,
                          onClick: J[1] || (J[1] = ee(() => {
                          }, ["stop"]))
                        }, null, 8, ["model-value", "value", "label"])) : v("", !0),
                        e.multiple ? v("", !0) : (n(), a("span", Rs, T(V(se)), 1)),
                        !e.multiple && j(S(se)) ? (n(), a("svg", Hs, [...J[3] || (J[3] = [
                          d("path", {
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
        [F(Lt), [be, { ignore: [y.value] }]]
      ]);
    };
  }
}, qs = /* @__PURE__ */ de(Us, [["__scopeId", "data-v-f9464775"]]), Fs = ["value", "placeholder", "rows", "maxlength"], Ws = {
  __name: "Textarea",
  props: {
    modelValue: { type: [String, Number], default: "" },
    label: { type: [String, Object], default: "" },
    placeholder: { type: String, default: "text ..." },
    hint: { type: String, default: "" },
    error: { type: String, default: "" },
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
  setup(e, { expose: r, emit: t }) {
    const l = e, o = ce("parentDir", ""), s = ce("parentLang", ""), b = i(() => l.dir || o), y = i(() => l.lang || s), x = t, I = M(null), g = M(null), c = M(!1), m = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), p = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), u = (H) => {
      const E = H.target.value;
      x("update:modelValue", E);
    }, $ = (H) => {
      c.value = !0, x("focus", H);
    }, h = (H) => {
      c.value = !1, x("blur", H);
    }, B = (H) => {
      x("enter", l.modelValue);
    }, C = () => {
      x("update:modelValue", ""), x("clear"), I.value?.focus();
    };
    return r({ focus: () => {
      I.value?.focus();
    }, clear: C }), (H, E) => (n(), a("div", {
      ref_key: "containerRef",
      ref: g,
      class: f(["relative", e.containerClass, e.width])
    }, [
      K(F(De), ye(H.$props, {
        "model-value": e.modelValue,
        error: !!e.error || e.errorMessages.length > 0,
        clearable: e.clearable && !e.loading,
        id: m.value,
        "is-open": c.value,
        "onClick:clear": C,
        dir: b.value,
        lang: y.value,
        rules: e.rules
      }), Re({
        control: te(({ attrs: Y, events: Q }) => [
          d("textarea", ye({
            ref_key: "inputRef",
            ref: I
          }, Y, pt(Q, !0), {
            type: "text",
            value: e.modelValue,
            placeholder: c.value && !e.modelValue ? e.placeholder : "",
            class: p.value,
            rows: e.rows,
            maxlength: e.maxlength,
            onInput: u,
            onKeydown: pe(B, ["enter"]),
            onFocus: $,
            onBlur: h
          }), null, 16, Fs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            E[0] || (E[0] = d("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              d("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              d("path", {
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
}, Ks = /* @__PURE__ */ de(Ws, [["__scopeId", "data-v-8f88b0b8"]]), lt = /* @__PURE__ */ Ie({
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    name: {},
    type: { default: "solid" },
    size: { default: 24 },
    color: { default: "currentColor" }
  },
  setup(e) {
    const r = e, t = Ft(), l = (x) => x.replace(/-([a-z])/g, (I, g) => g.toUpperCase()).replace(/(?:^|_|\s|-)(\w)/g, (I, g) => g.toUpperCase()).replace(/Icon$/, "") + "Icon", o = i(() => l(r.name)), s = i(
      () => it({
        loader: async () => {
          const I = (r.type === "solid" ? await import("./index-BeQxidt5.js") : await import("./index-CdjTVJ3l.js"))[o.value];
          if (!I)
            throw new Error(`Icon "${o.value}" not found in ${r.type} icons`);
          return I;
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
    ), b = (x) => x ? /(?:^|\s)(?:text-|fill-|stroke-|bg-|ring-|border-)/.test(x) : !1, y = i(() => {
      const x = /^\d+(\.\d+)?$/.test(String(r.size)) ? `${r.size}px` : String(r.size), g = ["hero-icon", b(r.color) ? r.color : "", t.class].filter(Boolean), c = typeof t.style == "object" && t.style ? t.style : {}, { class: m, style: p, ...u } = t;
      return {
        ...u,
        class: g,
        style: {
          ...c,
          width: x,
          height: x,
          minWidth: x,
          maxWidth: x,
          minHeight: x,
          maxHeight: x,
          ...b(r.color) ? {} : { color: r.color }
        }
      };
    });
    return (x, I) => (n(), a("span", Wt(Kt(y.value)), [
      (n(), Z(Oe(s.value)))
    ], 16));
  }
}), Gs = {
  UiButton: ml,
  UiRadio: Sl,
  UiRadioGroup: Il,
  UiRadioItem: Ml,
  UiSwitch: Nl,
  UiAppBar: Xl,
  UiAvatar: Pt,
  UiBadge: Ql,
  UiBanner: on,
  UiBreadcrumbs: vn,
  UiCard: hn,
  UiConfirmDialog: $n,
  UiDivider: In,
  UiDropdown: Ln,
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
  UiBase: De,
  UiCheckbox: Et,
  UiChip: Ot,
  UiChipGroup: jt,
  UiDatepicker: Vt,
  UiDatePicker: Vt,
  UiFile: ds,
  UiInputNumber: ws,
  UiInputText: yt,
  UiSearchInput: Vs,
  UiSelect: qs,
  UiTextarea: Ks,
  UiIcon: lt
}, Ys = {
  install(e) {
    for (const [r, t] of Object.entries(Gs)) {
      e.component(r, t);
      const l = r.replace(/^Ui/, "");
      e.component(l, t);
    }
  }
};
function ei(e) {
  const r = i(
    () => typeof e == "boolean" ? e : Te.value
  ), t = i(() => r.value ? "rtl" : "ltr");
  return { isRtl: r, rtlClass: t };
}
const Tt = rl(), ti = {
  install(e, r = {}) {
    ol(r), e.provide("snackbar", Tt), e.config.globalProperties.$snackbar = Tt, e.use(Ys), e.use(Yt), e.use(Xt), e.directive("tooltip", ll);
  }
};
export {
  Xl as AppBar,
  Pt as Avatar,
  Ql as Badge,
  on as Banner,
  De as Base,
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
  Ln as Dropdown,
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
  Ml as RadioItem,
  Vs as SearchInput,
  qs as Select,
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
  Xe as useI18n,
  ei as useRtl,
  rl as useSnackbar,
  _s as useUiConfig
};
//# sourceMappingURL=index.js.map
