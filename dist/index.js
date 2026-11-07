import { computed as i, ref as L, watch as pe, shallowRef as Nt, triggerRef as xt, readonly as Rt, reactive as tt, inject as ge, createElementBlock as a, openBlock as r, normalizeClass as m, createCommentVNode as b, createElementVNode as f, renderSlot as E, createBlock as Z, unref as q, toDisplayString as I, createTextVNode as me, Fragment as se, renderList as de, withModifiers as ee, createVNode as K, Transition as ke, withCtx as te, provide as Ke, toRef as et, resolveComponent as ve, normalizeStyle as ce, onMounted as Ve, onBeforeUnmount as Be, withDirectives as Ie, vShow as je, defineComponent as Te, useSlots as nt, nextTick as Ae, Teleport as Xe, withKeys as be, vModelText as mt, resolveDynamicComponent as Ne, createSlots as Ue, onUpdated as Ht, isRef as wt, createStaticVNode as Ut, mergeProps as xe, getCurrentInstance as Ft, toHandlers as pt, useAttrs as qt, defineAsyncComponent as it, normalizeProps as Wt, guardReactiveProps as Kt } from "vue";
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
    const s = o || ut.value, x = l.split(".");
    let h = kt[s];
    for (const k of x)
      h = h?.[k];
    return h || l;
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
}, Se = {
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
  const t = n.tooltipEl, l = e.getBoundingClientRect(), o = t.getBoundingClientRect(), s = window.scrollX || window.pageXOffset, x = window.scrollY || window.pageYOffset, h = _t(n.options.placement || "top"), k = n.options.offset?.x ?? 0, z = n.options.offset?.y ?? 0, y = n.options.arrow ? 8 : 0;
  let g = 0, u = 0;
  switch (h) {
    case "top":
      g = l.top + x - o.height - y - z, u = l.left + s + l.width / 2 - o.width / 2 + k;
      break;
    case "bottom":
      g = l.bottom + x + y + z, u = l.left + s + l.width / 2 - o.width / 2 + k;
      break;
    case "left":
      g = l.top + x + l.height / 2 - o.height / 2 + z, u = l.left + s - o.width - y - k;
      break;
    case "right":
      g = l.top + x + l.height / 2 - o.height / 2 + z, u = l.right + s + y + k;
      break;
  }
  if (t.style.top = `${g}px`, t.style.left = `${u}px`, t.style.visibility = "", n.options.arrow && n.arrowEl) {
    const d = n.arrowEl;
    switch (d.style.width = "8px", d.style.height = "8px", h) {
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
    l.unwatchLanguage = s, l.handlers.mouseover = (x) => {
      l.options.openOnHover && dt(e, l, "hover");
    }, l.handlers.mouseout = (x) => {
      if (!l.options.openOnHover) return;
      const h = x.relatedTarget;
      h && e.contains(h) || qe(l);
    }, l.handlers.focusin = () => l.options.openOnFocus && dt(e, l, "focus"), l.handlers.focusout = () => l.options.openOnFocus && qe(l), l.handlers.click = () => {
      l.options.openOnClick && (l.open ? qe(l) : dt(e, l, "click"));
    }, l.handlers.docClick = (x) => {
      if (!l.open) return;
      const h = x.target;
      l.tooltipEl && l.tooltipEl.contains(h) || e.contains(h) || qe(l);
    }, l.handlers.keydown = (x) => {
      x.key === "Escape" && qe(l);
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
}, Re = Nt([]);
let nl = 0, ct = null;
function rl() {
  if (ct)
    return ct;
  const e = (x) => {
    const h = ++nl, k = L(!0), z = () => {
      k.value = !1, setTimeout(() => {
        const g = Re.value.findIndex((u) => u.id === h);
        g > -1 && (Re.value.splice(g, 1), xt(Re));
      }, 300);
    }, y = {
      id: h,
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
    return Re.value.push(y), xt(Re), y.options.timeout > 0 && setTimeout(() => {
      z();
    }, y.options.timeout), y;
  }, s = {
    snackbars: Re,
    show: e,
    success: (x, h = {}) => e({ message: x, variant: "success", icon: "success", ...h }),
    error: (x, h = {}) => e({ message: x, variant: "error", icon: "error", ...h }),
    warning: (x, h = {}) => e({ message: x, variant: "warning", icon: "warning", ...h }),
    info: (x, h = {}) => e({ message: x, variant: "info", icon: "info", ...h })
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
function we(e, n) {
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
    const { t, setLanguage: l } = ge("i18n", { t: (p) => p, setLanguage: () => {
    } }), o = n, s = ge("parentLang", ""), x = i(() => h.lang ? h.lang : s), h = e, k = {
      xs: "p-2",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
      xl: "p-3"
    }, z = i(() => We[h.color] ? We[h.color][h.variant] : We.primary[h.variant]), y = i(() => [
      "inline-flex items-center justify-center font-medium transition-all select-none",
      h.padding ? k[h.size] : h.icon ? "" : vt[h.size],
      Se[h.rounded],
      z.value,
      h.block ? "w-full" : "",
      x.value === "dv" ? "faruma" : "",
      h.disabled || h.loading ? "opacity-90 cursor-not-allowed" : "cursor-pointer"
    ]), g = (p) => {
      !h.disabled && !h.loading && o("click", p);
    }, u = i(() => {
      if (!h.label)
        return t("buttons.submit", x.value);
      if (h.label.startsWith("buttons.")) {
        const p = t(h.label, x.value);
        if (p !== h.label)
          return p;
      }
      return h.label;
    });
    return (p, d) => (r(), a("button", {
      class: m(y.value),
      disabled: e.disabled || e.loading,
      onClick: g
    }, [
      p.$slots.prepend || e.prependIcon || e.loading ? (r(), a("span", il, [
        e.loading ? (r(), a("span", ul)) : b("", !0),
        e.loading ? b("", !0) : E(p.$slots, "prepend", { key: 1 }, () => [
          e.prependIcon ? (r(), Z(q(lt), {
            key: 0,
            name: e.prependIcon,
            type: "outline",
            size: q(Pe)[h.size],
            color: "text-current",
            class: m(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : b("", !0)
        ], !0)
      ])) : b("", !0),
      f("span", dl, [
        E(p.$slots, "default", {}, () => [
          e.icon ? (r(), Z(q(lt), {
            key: 0,
            name: e.icon,
            type: "mini",
            size: q(Pe)[h.size],
            color: "text-current",
            class: m(e.iconClass)
          }, null, 8, ["name", "size", "class"])) : b("", !0),
          e.icon ? b("", !0) : (r(), a("div", cl, I(u.value), 1))
        ], !0)
      ]),
      p.$slots.append || e.appendIcon ? (r(), a("span", fl, [
        E(p.$slots, "append", {}, () => [
          e.appendIcon ? (r(), Z(q(lt), {
            key: 0,
            name: e.appendIcon,
            type: "outline",
            size: q(Pe)[h.size],
            class: m(e.iconClass),
            stroke: "currentColor",
            color: "text-current"
          }, null, 8, ["name", "size", "class"])) : b("", !0)
        ], !0)
      ])) : b("", !0)
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
    const t = e, l = n, o = L(null), s = i(() => t.items.map((w) => typeof w != "object" || w === null ? {
      label: String(w),
      value: w,
      description: "",
      disabled: !1
    } : {
      label: w[t.itemLabel] || "",
      value: w[t.itemValue] ?? w,
      description: w[t.itemDescription] || "",
      disabled: w[t.itemDisabled] || !1
    })), x = (w) => t.modelValue === null || t.modelValue === void 0 ? !1 : typeof w == "object" && typeof t.modelValue == "object" ? JSON.stringify(w) === JSON.stringify(t.modelValue) : t.modelValue === w, h = (w) => {
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
    }), y = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return w[t.size] || w.md;
    }), g = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return w[t.size] || w.md;
    }), u = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return w[t.size] || w.md;
    }), p = i(() => {
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
    }), d = (w, $) => {
      const S = $ || t.disabled;
      return t.error ? x(w) ? "border-red-500 text-red-500" : "border-red-500 hover:border-red-600" : S ? x(w) ? "border-gray-400 text-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : x(w) ? p.value.selected : p.value.unselected;
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
      class: m(["relative", e.margin])
    }, [
      e.groupLabel ? (r(), a("label", {
        key: 0,
        class: m([
          "block mb-2 font-medium ui-text-primary",
          g.value
        ])
      }, [
        me(I(e.groupLabel) + " ", 1),
        e.required ? (r(), a("span", pl, "*")) : b("", !0)
      ], 2)) : b("", !0),
      f("div", {
        class: m([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ]),
        role: "radiogroup",
        "aria-label": e.groupLabel
      }, [
        (r(!0), a(se, null, de(s.value, (S, F) => (r(), a("label", {
          key: S.value,
          class: m([
            "inline-flex items-start gap-3 cursor-pointer select-none group",
            S.disabled || e.disabled ? "opacity-50 cursor-not-allowed" : "",
            e.labelPosition === "left" ? "flex-row-reverse" : ""
          ]),
          onClick: ee((N) => !S.disabled && !e.disabled && h(S.value), ["prevent"])
        }, [
          f("div", {
            class: m([
              "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
              k.value,
              d(S.value, S.disabled)
            ])
          }, [
            K(ke, { name: "scale" }, {
              default: te(() => [
                x(S.value) ? (r(), a("div", {
                  key: 0,
                  class: m([
                    "rounded-full bg-current transition-all duration-200",
                    z.value,
                    C(S.disabled)
                  ])
                }, null, 2)) : b("", !0)
              ]),
              _: 2
            }, 1024),
            o.value === S.value ? (r(), a("div", bl)) : b("", !0)
          ], 2),
          S.label || S.description ? (r(), a("div", hl, [
            S.label ? (r(), a("span", {
              key: 0,
              class: m([
                "ui-text-primary leading-tight transition-colors",
                y.value,
                !S.disabled && !e.disabled ? "group-hover:text-primary" : ""
              ])
            }, I(S.label), 3)) : b("", !0),
            S.description ? (r(), a("span", {
              key: 1,
              class: m([
                "ui-text-secondary mt-0.5",
                u.value
              ])
            }, I(S.description), 3)) : b("", !0)
          ])) : b("", !0)
        ], 10, yl))), 128))
      ], 10, vl),
      e.error ? (r(), a("p", xl, [
        $[0] || ($[0] = f("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          f("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        me(" " + I(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : b("", !0),
      e.hint && !e.error ? (r(), a("p", wl, I(e.hint), 1)) : b("", !0)
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
    return (s, x) => (r(), a("div", {
      class: m(["relative", e.margin]),
      role: "radiogroup",
      "aria-label": e.label
    }, [
      e.label ? (r(), a("label", {
        key: 0,
        class: m([
          "block mb-2 font-medium ui-text-primary",
          o.value
        ])
      }, [
        me(I(e.label) + " ", 1),
        e.required ? (r(), a("span", $l, "*")) : b("", !0)
      ], 2)) : b("", !0),
      f("div", {
        class: m([
          "flex",
          e.inline ? "flex-row flex-wrap gap-x-6 gap-y-2" : "flex-col gap-2"
        ])
      }, [
        E(s.$slots, "default")
      ], 2),
      e.error ? (r(), a("p", zl, [
        x[0] || (x[0] = f("svg", {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          f("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        me(" " + I(typeof e.error == "string" ? e.error : "Please select an option"), 1)
      ])) : b("", !0),
      e.hint && !e.error ? (r(), a("p", Bl, I(e.hint), 1)) : b("", !0)
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
    const t = e, l = ge("radioGroup", null), o = n, s = i(() => l ? l.modelValue.value === t.value : !1), x = () => {
      l && l.select(t.value), o("update:modelValue", t.value), o("change", t.value);
    }, h = i(() => {
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
    }), z = i(() => {
      const d = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return d[t.size] || d.md;
    }), y = i(() => {
      const d = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return d[t.size] || d.md;
    }), g = i(() => {
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
    }), p = i(() => t.disabled ? s.value ? "border-gray-400 cursor-not-allowed" : "border-gray-300 bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : s.value ? g.value.selected : g.value.unselected);
    return (d, C) => (r(), a("label", {
      class: m([
        "inline-flex items-start gap-3 cursor-pointer select-none group",
        e.disabled ? "opacity-50 cursor-not-allowed" : "",
        e.labelPosition === "left" ? "flex-row-reverse" : "",
        e.margin
      ]),
      onClick: C[0] || (C[0] = ee((w) => !e.disabled && x(), ["prevent"]))
    }, [
      f("div", {
        class: m([
          "relative flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200",
          h.value,
          p.value
        ])
      }, [
        K(ke, { name: "scale" }, {
          default: te(() => [
            s.value ? (r(), a("div", {
              key: 0,
              class: m([
                "rounded-full transition-all duration-200",
                k.value,
                u.value
              ])
            }, null, 2)) : b("", !0)
          ]),
          _: 1
        })
      ], 2),
      e.label || e.description || d.$slots.default ? (r(), a("div", Vl, [
        e.label || d.$slots.default ? (r(), a("span", {
          key: 0,
          class: m([
            "ui-text-primary leading-tight transition-colors",
            z.value,
            e.disabled ? "" : "group-hover:text-primary"
          ])
        }, [
          E(d.$slots, "default", {}, () => [
            me(I(e.label), 1)
          ], !0),
          e.required ? (r(), a("span", Tl, "*")) : b("", !0)
        ], 2)) : b("", !0),
        e.description ? (r(), a("span", {
          key: 1,
          class: m([
            "ui-text-secondary mt-0.5",
            y.value
          ])
        }, I(e.description), 3)) : b("", !0)
      ])) : b("", !0)
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
    }), h = i(() => {
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
    }), y = i(() => {
      const w = {
        xs: "w-2 h-2",
        sm: "w-2.5 h-2.5",
        md: "w-3 h-3",
        lg: "w-3.5 h-3.5",
        xl: "w-4 h-4"
      };
      return w[t.size] || w.md;
    }), g = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return w[t.size] || w.md;
    }), u = i(() => {
      const w = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return w[t.size] || w.md;
    }), p = i(() => {
      const w = {
        primary: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500"
      };
      return w[t.color] || w.primary;
    }), d = i(() => {
      const w = {
        primary: "text-primary",
        success: "text-green-500",
        warning: "text-yellow-500",
        danger: "text-red-500",
        info: "text-blue-500"
      };
      return w[t.color] || w.primary;
    }), C = i(() => t.error ? o.value ? "bg-red-500" : "bg-red-200 dark:bg-red-900/30" : t.disabled || t.loading ? o.value ? "bg-gray-400 dark:bg-gray-600" : "bg-gray-200 dark:bg-gray-700" : o.value ? p.value : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600");
    return (w, $) => (r(), a("div", {
      class: m(["relative", e.margin])
    }, [
      f("label", {
        class: m([
          "inline-flex items-center gap-3 cursor-pointer select-none group",
          e.disabled || e.loading ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : "",
          e.reverse ? "justify-between w-full" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        f("div", {
          class: m([
            "relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out rounded-full",
            x.value,
            C.value,
            !e.disabled && !e.loading ? "cursor-pointer" : "cursor-not-allowed"
          ])
        }, [
          f("span", {
            class: m([
              "absolute inline-flex items-center justify-center bg-white rounded-full shadow-md transition-all duration-200 ease-in-out",
              h.value,
              k.value
            ])
          }, [
            e.loading ? (r(), a("svg", {
              key: 0,
              class: m(["animate-spin text-gray-400", z.value]),
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [...$[0] || ($[0] = [
              f("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              f("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])], 2)) : b("", !0),
            K(ke, { name: "fade" }, {
              default: te(() => [
                o.value && !e.loading && e.showIcons ? (r(), a("svg", {
                  key: 0,
                  class: m([z.value, d.value]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...$[1] || ($[1] = [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "3",
                    d: "M5 13l4 4L19 7"
                  }, null, -1)
                ])], 2)) : b("", !0)
              ]),
              _: 1
            }),
            K(ke, { name: "fade" }, {
              default: te(() => [
                !o.value && !e.loading && e.showIcons ? (r(), a("svg", {
                  key: 0,
                  class: m([z.value, "text-gray-400"]),
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...$[2] || ($[2] = [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "3",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ])], 2)) : b("", !0)
              ]),
              _: 1
            })
          ], 2),
          e.inset ? (r(), a("span", Al, [
            f("span", {
              class: m(["transition-opacity duration-200", o.value ? "opacity-100" : "opacity-0"])
            }, [
              (r(), a("svg", {
                class: m([y.value, "text-white"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...$[3] || ($[3] = [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])], 2))
            ], 2),
            f("span", {
              class: m(["transition-opacity duration-200", o.value ? "opacity-0" : "opacity-100"])
            }, [
              (r(), a("svg", {
                class: m([y.value, "text-gray-400"]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...$[4] || ($[4] = [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M6 18L18 6M6 6l12 12"
                }, null, -1)
              ])], 2))
            ], 2)
          ])) : b("", !0)
        ], 2),
        e.label || e.description || w.$slots.default ? (r(), a("div", Pl, [
          e.label || w.$slots.default ? (r(), a("span", {
            key: 0,
            class: m([
              "ui-text-primary leading-tight transition-colors",
              g.value,
              !e.disabled && !e.loading ? "group-hover:text-primary" : ""
            ])
          }, [
            E(w.$slots, "default", {}, () => [
              me(I(e.label), 1)
            ], !0),
            e.required ? (r(), a("span", Dl, "*")) : b("", !0)
          ], 2)) : b("", !0),
          e.description ? (r(), a("span", {
            key: 1,
            class: m([
              "ui-text-secondary mt-0.5",
              u.value
            ])
          }, I(e.description), 3)) : b("", !0)
        ])) : b("", !0)
      ], 2),
      e.error ? (r(), a("p", El, [
        $[5] || ($[5] = f("svg", {
          class: "w-4 h-4 flex-shrink-0",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          f("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        ], -1)),
        me(" " + I(typeof e.error == "string" ? e.error : ""), 1)
      ])) : b("", !0),
      e.hint && !e.error ? (r(), a("p", Ol, I(e.hint), 1)) : b("", !0)
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
    }), h = {
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
    }), y = i(() => {
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
    }), g = i(() => {
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
    }), u = i(() => {
      const S = {
        "top-left": "-top-0.5 -left-0.5",
        "top-right": "-top-0.5 -right-0.5",
        "bottom-left": "-bottom-0.5 -left-0.5",
        "bottom-right": "-bottom-0.5 -right-0.5"
      };
      return S[t.dotPosition] || S["bottom-right"];
    }), p = i(() => {
      const S = {
        success: "bg-success",
        error: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
        primary: "bg-primary",
        secondary: "bg-secondary"
      };
      return S[t.dotColor] || S.success;
    }), d = i(() => ({
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
      const N = ve("Icon");
      return r(), a("div", {
        class: m([
          "inline-flex items-center justify-center flex-shrink-0 relative",
          "font-medium select-none overflow-hidden",
          s.value,
          k.value,
          z.value,
          e.bordered && "ring-2 ring-offset-2",
          y.value,
          e.clickable && "cursor-pointer hover:opacity-80 transition-opacity",
          e.containerClass
        ]),
        style: ce(e.containerStyle),
        onClick: $
      }, [
        e.src && !o.value ? (r(), a("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          class: m(["w-full h-full object-cover", e.imageClass]),
          onError: w
        }, null, 42, Rl)) : e.icon ? (r(), Z(N, {
          key: 1,
          name: e.icon,
          size: h[t.size],
          color: "text-current"
        }, null, 8, ["name", "size"])) : e.initials || e.name ? (r(), a("span", {
          key: 2,
          class: m(["uppercase font-semibold", x.value])
        }, I(C.value), 3)) : (r(), Z(N, {
          key: 3,
          name: "user",
          size: h[t.size],
          color: "text-current"
        }, null, 8, ["size"])),
        e.dot || e.badge ? (r(), a("span", {
          key: 4,
          class: m([
            "absolute rounded-full",
            u.value,
            g.value,
            p.value,
            e.badge && "flex items-center justify-center text-xs font-bold text-white"
          ]),
          style: ce(d.value)
        }, [
          e.badge ? (r(), a("span", Hl, I(e.badge), 1)) : b("", !0)
        ], 6)) : b("", !0),
        E(S.$slots, "default", {}, void 0, !0)
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
      const V = new ResizeObserver(s);
      l.value && V.observe(l.value), n.collapseOnScroll && window.addEventListener("scroll", k, { passive: !0 }), Be(() => {
        V.disconnect(), n.collapseOnScroll && window.removeEventListener("scroll", k), t && t.unregister("appBar", n.id);
      });
    });
    let x = 0;
    const h = L("");
    function k() {
      const V = window.scrollY, G = V - x;
      x = V, V > 0 && G > 0 ? h.value = "-translate-y-12 opacity-95" : h.value = "";
    }
    const z = i(() => n.rtl ? ["actions", "nav", "prepend"] : ["prepend", "nav", "actions"]), y = i(() => n.rtl ? "flex-row-reverse" : "flex-row"), g = i(() => n.rtl ? "mr-2" : ""), u = i(() => n.rtl ? "mr-2" : "ml-2"), p = i(() => {
      const V = n.titleAlign;
      return n.rtl ? {
        center: "justify-center text-center w-full",
        left: "justify-end text-right w-full",
        right: ""
      }[V] : {
        center: "justify-center text-center w-full",
        right: "justify-end text-right w-full",
        left: ""
      }[V];
    }), d = i(
      () => n.rtl ? "hidden md:flex md:mr-6 md:space-x-4 items-center" : "hidden md:flex md:ml-6 md:space-x-4 items-center"
    ), C = i(() => n.rtl ? "space-x-2 space-x-reverse" : "space-x-2"), w = i(() => n.rtl ? "left-0" : "right-0"), $ = L(!1), S = () => $.value = !$.value, F = i(() => n.shadow ? n.shadow : n.elevation ? `shadow-${n.elevation}` : ""), N = i(() => typeof n.zIndex == "string" && n.zIndex.startsWith("z-") ? n.zIndex : "z-30"), A = i(() => typeof n.zIndex == "number" ? { zIndex: n.zIndex } : void 0), Y = i(() => n.dense ? "py-1" : ""), X = L(!1);
    return (V, G) => {
      const ie = ve("Icon");
      return r(), a("header", {
        ref_key: "el",
        ref: l,
        "data-component": "appbar",
        dir: e.rtl ? "rtl" : "ltr",
        class: m([
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
          Y.value,
          h.value
        ]),
        style: ce([e.customStyle, A.value])
      }, [
        f("div", {
          class: m(["w-full flex items-center justify-between", y.value, e.dense ? "h-12" : "h-16"])
        }, [
          (r(!0), a(se, null, de(z.value, (O) => (r(), a(se, { key: O }, [
            O === "prepend" ? (r(), a("div", {
              key: 0,
              class: m(["flex items-center", g.value])
            }, [
              E(V.$slots, "prepend"),
              e.drawer || e.menu ? (r(), a("button", {
                key: 0,
                onClick: G[0] || (G[0] = (R) => V.$emit("toggle-drawer")),
                class: "inline-flex items-center justify-center .vts-pa-2 rounded-md"
              }, [
                E(V.$slots, "drawer-icon", {}, () => [
                  K(ie, {
                    name: "bars-3",
                    size: "24",
                    color: "text-gray-600"
                  })
                ])
              ])) : b("", !0),
              f("div", {
                class: m(["flex-shrink-0 flex items-center", u.value, p.value])
              }, [
                E(V.$slots, "title", {}, () => [
                  f("span", {
                    class: m(["font-semibold", e.titleClass])
                  }, I(e.title), 3)
                ])
              ], 2)
            ], 2)) : b("", !0),
            O === "nav" ? (r(), a("nav", {
              key: 1,
              class: m(d.value)
            }, [
              E(V.$slots, "nav")
            ], 2)) : b("", !0),
            O === "actions" ? (r(), a("div", {
              key: 2,
              class: m(["flex items-center", C.value])
            }, [
              E(V.$slots, "actions"),
              e.overflowActions.length ? (r(), a("div", ql, [
                f("button", {
                  onClick: S,
                  class: "p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                }, [
                  K(ie, {
                    name: "ellipsis-vertical",
                    size: "20"
                  })
                ]),
                $.value ? (r(), a("div", {
                  key: 0,
                  class: m(["absolute vts-mt-2 w-40 rounded shadow-lg z-50 bg-color-1", w.value])
                }, [
                  f("ul", null, [
                    (r(!0), a(se, null, de(e.overflowActions, (R, J) => (r(), a("li", { key: J }, [
                      f("button", {
                        onClick: R.onClick,
                        class: "w-full flex gap-2 text-left px-4 py-2 hover:bg-color-2"
                      }, [
                        R.icon ? (r(), a("span", Kl, [
                          K(ie, {
                            name: R.icon
                          }, null, 8, ["name"])
                        ])) : b("", !0),
                        me(" " + I(R.label), 1)
                      ], 8, Wl)
                    ]))), 128))
                  ])
                ], 2)) : b("", !0)
              ])) : b("", !0),
              E(V.$slots, "append")
            ], 2)) : b("", !0)
          ], 64))), 128))
        ], 2),
        Ie(f("div", Gl, [
          f("div", Yl, [
            E(V.$slots, "mobile-nav")
          ])
        ], 512), [
          [je, X.value]
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
    }), h = i(() => {
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
    }), y = i(() => {
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
    }), g = i(() => t.dotColor && {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      error: "bg-error",
      warning: "bg-warning",
      info: "bg-info"
    }[t.dotColor] || "bg-current"), u = i(() => t.uppercase ? "uppercase" : ""), p = (C) => {
      t.clickable && l("click", C);
    }, d = (C) => {
      l("close", C);
    };
    return (C, w) => {
      const $ = ve("Icon");
      return r(), a("span", {
        class: m([
          "inline-flex items-center justify-center font-medium transition-all",
          o.value,
          k.value,
          z.value,
          e.bordered && "ring-1 ring-offset-1",
          y.value,
          e.clickable && "cursor-pointer hover:opacity-80",
          e.dot && "pl-1.5",
          e.containerClass
        ]),
        style: ce(e.containerStyle),
        onClick: p
      }, [
        e.dot ? (r(), a("span", {
          key: 0,
          class: m([
            "rounded-full mr-1.5",
            x.value,
            g.value
          ])
        }, null, 2)) : b("", !0),
        e.icon && e.iconPosition === "left" ? (r(), Z($, {
          key: 1,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: m(["flex-shrink-0", e.content && "mr-1"])
        }, null, 8, ["name", "type", "size", "class"])) : b("", !0),
        e.content || C.$slots.default ? (r(), a("span", {
          key: 2,
          class: m(u.value)
        }, [
          E(C.$slots, "default", {}, () => [
            me(I(e.content), 1)
          ], !0)
        ], 2)) : b("", !0),
        e.icon && e.iconPosition === "right" ? (r(), Z($, {
          key: 3,
          name: e.icon,
          type: e.iconType,
          size: s.value,
          class: m(["flex-shrink-0", e.content && "ml-1"])
        }, null, 8, ["name", "type", "size", "class"])) : b("", !0),
        e.closeable ? (r(), a("button", {
          key: 4,
          type: "button",
          onClick: ee(d, ["stop"]),
          class: m([
            "ml-1 flex-shrink-0 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
            h.value
          ]),
          "aria-label": "Remove badge"
        }, [
          K($, {
            name: "x-mark",
            type: e.iconType,
            size: s.value
          }, null, 8, ["type", "size"])
        ], 2)) : b("", !0)
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
    rounded: { type: String, default: () => we("Banner", "rounded") },
    // none | sm | md | lg
    elevation: { type: Boolean, default: !0 },
    outlined: { type: Boolean, default: !1 },
    dense: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "close", "dismiss"],
  setup(e, { expose: n, emit: t }) {
    const l = e, o = t, s = L(l.modelValue), x = L(100);
    let h = null, k = null;
    pe(() => l.modelValue, (N) => {
      s.value = N, N && l.timeout && S();
    });
    const z = i(() => l.icon), y = i(() => {
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
      return N.push(A[l.variant]), l.outlined ? N.push("border-t-4") : N.push("border-t"), l.elevation && N.push("shadow-md"), N.push(Se[l.rounded]), N;
    }), g = i(() => [
      "flex items-start gap-3",
      l.dense ? "p-3" : "p-4"
    ]), u = i(() => [
      "font-semibold",
      l.dense ? "text-sm" : "text-base"
    ]), p = i(() => [
      l.dense ? "text-xs" : "text-sm",
      "mt-1"
    ]), d = i(() => [
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
        const Y = Date.now() - N;
        x.value = Math.max(0, 100 - Y / A * 100);
      }, 10)), h = setTimeout(() => {
        $(), o("dismiss");
      }, l.timeout);
    }, F = () => {
      h && (clearTimeout(h), h = null), k && (clearInterval(k), k = null), x.value = 100;
    };
    return Ve(() => {
      s.value && l.timeout && S();
    }), Be(() => {
      F();
    }), n({ close: $ }), (N, A) => (r(), Z(ke, {
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
          class: m(y.value),
          role: "alert"
        }, [
          f("div", {
            class: m(g.value)
          }, [
            N.$slots.prepend || z.value ? (r(), a("div", Zl, [
              E(N.$slots, "prepend", {}, () => [
                z.value === "info" ? (r(), a("svg", _l, [...A[0] || (A[0] = [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : z.value === "success" ? (r(), a("svg", en, [...A[1] || (A[1] = [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : z.value === "warning" ? (r(), a("svg", tn, [...A[2] || (A[2] = [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : z.value === "error" ? (r(), a("svg", ln, [...A[3] || (A[3] = [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])])) : b("", !0)
              ], !0)
            ])) : b("", !0),
            f("div", nn, [
              e.title || N.$slots.title ? (r(), a("div", {
                key: 0,
                class: m(u.value)
              }, [
                E(N.$slots, "title", {}, () => [
                  me(I(e.title), 1)
                ], !0)
              ], 2)) : b("", !0),
              e.message || N.$slots.default ? (r(), a("div", {
                key: 1,
                class: m(p.value)
              }, [
                E(N.$slots, "default", {}, () => [
                  me(I(e.message), 1)
                ], !0)
              ], 2)) : b("", !0)
            ]),
            N.$slots.actions || e.closeable ? (r(), a("div", rn, [
              E(N.$slots, "actions", {}, void 0, !0),
              e.closeable ? (r(), a("button", {
                key: 0,
                onClick: $,
                class: m(d.value),
                "aria-label": "Close banner"
              }, [...A[4] || (A[4] = [
                f("svg", {
                  class: "h-4 w-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])], 2)) : b("", !0)
            ])) : b("", !0)
          ], 2),
          e.timeout && e.showProgress ? (r(), a("div", {
            key: 0,
            class: m(C.value),
            style: ce(w.value)
          }, null, 6)) : b("", !0)
        ], 2)) : b("", !0)
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
      const y = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return y[t.size] || y.md;
    }), s = i(() => {
      const y = {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3"
      };
      return y[t.size] || y.md;
    }), x = i(() => {
      const y = {
        default: "text-ui-text-secondary hover:underline",
        muted: "text-ui-text-secondary/70 hover:text-ui-text-secondary hover:underline",
        bold: "text-ui-text-color font-medium hover:underline"
      };
      return y[t.variant] || y.default;
    }), h = i(() => {
      const y = {
        default: "text-ui-text-color font-medium",
        muted: "text-ui-text-secondary",
        bold: "text-ui-text-color font-semibold"
      };
      return y[t.variant] || y.default;
    }), k = i(() => "text-ui-text-secondary/50"), z = (y, g) => {
      y.disabled || (l("item-click", { item: y, index: g }), l("click", { item: y, index: g }));
    };
    return (y, g) => {
      const u = ve("Icon");
      return r(), a("nav", {
        "aria-label": e.ariaLabel,
        class: m([
          "flex items-center",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        f("ol", {
          class: m([
            "flex items-center flex-wrap",
            o.value,
            s.value
          ])
        }, [
          e.showHome ? (r(), a("li", un, [
            f("a", {
              href: e.homeHref,
              onClick: g[0] || (g[0] = ee((p) => z({ label: "Home", href: e.homeHref, icon: e.homeIcon }, 0), ["prevent"])),
              class: m([
                "inline-flex items-center transition-colors",
                x.value,
                "hover:text-primary"
              ])
            }, [
              K(u, {
                name: e.homeIcon,
                size: 16,
                color: "text-current"
              }, null, 8, ["name"])
            ], 10, dn),
            f("span", {
              class: m(["mx-2", k.value])
            }, [
              e.separatorIcon ? (r(), Z(u, {
                key: 0,
                name: e.separatorIcon,
                size: 12,
                color: "text-current"
              }, null, 8, ["name"])) : (r(), a("span", cn, I(e.separator), 1))
            ], 2)
          ])) : b("", !0),
          (r(!0), a(se, null, de(e.items, (p, d) => (r(), a("li", {
            key: d,
            class: "flex items-center"
          }, [
            E(y.$slots, "item", {
              item: p,
              index: d,
              isLast: d === e.items.length - 1
            }, () => [
              d !== e.items.length - 1 && !p.disabled ? (r(), a("a", {
                key: 0,
                href: p.href || "#",
                onClick: ee((C) => z(p, d), ["prevent"]),
                class: m([
                  "inline-flex items-center gap-2 transition-colors",
                  x.value,
                  "hover:text-primary",
                  p.class
                ])
              }, [
                p.icon ? (r(), Z(u, {
                  key: 0,
                  name: p.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : b("", !0),
                f("span", null, I(p.label), 1)
              ], 10, fn)) : (r(), a("span", {
                key: 1,
                class: m([
                  "inline-flex items-center gap-2",
                  h.value,
                  p.disabled && "opacity-50 cursor-not-allowed",
                  p.class
                ]),
                "aria-current": d === e.items.length - 1 ? "page" : void 0
              }, [
                p.icon ? (r(), Z(u, {
                  key: 0,
                  name: p.icon,
                  size: 14,
                  color: "text-current"
                }, null, 8, ["name"])) : b("", !0),
                f("span", {
                  class: m(e.truncate && "truncate max-w-[200px]")
                }, I(p.label), 3)
              ], 10, gn))
            ], !0),
            d !== e.items.length - 1 ? (r(), a("span", {
              key: 0,
              class: m(["mx-2", k.value]),
              "aria-hidden": "true"
            }, [
              E(y.$slots, "separator", {}, () => [
                e.separatorIcon ? (r(), Z(u, {
                  key: 0,
                  name: e.separatorIcon,
                  size: 12,
                  color: "text-current"
                }, null, 8, ["name"])) : (r(), a("span", mn, I(e.separator), 1))
              ], !0)
            ], 2)) : b("", !0)
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
    })), x = i(() => o.value == "dv" ? "faruma" : ""), h = i(() => Ge(t.labels, o.value, ""));
    return (k, z) => (r(), a("div", {
      dir: l.value !== "" ? l.value : "",
      class: m([x.value, e.margin, e.border, q(Se)[e.rounded], e.shadow, e.cardClass, e.width, e.bg, "relative"])
    }, [
      k.$slots.header || e.title || e.labels && (e.labels.en.title !== "" || e.labels.dv.title !== "") ? (r(), a("div", bn, [
        E(k.$slots, "header", {}, () => [
          f("div", {
            class: m([e.headerClass, e.headerBg, e.headerPadding, q(Qt)[e.rounded], e.headerBd, e.headerText, "overflow-hidden"])
          }, [
            f("h3", {
              class: m([e.titleClass, e.headerTextSize])
            }, I(h.value.title ? h.value.title : t.title), 3)
          ], 2)
        ])
      ])) : b("", !0),
      f("div", {
        class: m([e.bodyClass, e.padding, e.textColor, e.textSize])
      }, [
        E(k.$slots, "default", { attrs: s.value }, () => [
          me(I(h.value.body ? h.value.body : ""), 1)
        ])
      ], 2),
      k.$slots.footer ? (r(), a("div", {
        key: 1,
        class: m([e.footerClass, e.footerBg, e.footerText, e.footerTextSize, e.footerBd, e.footerMargin, e.footerPadding, q(Zt)[e.rounded]])
      }, [
        E(k.$slots, "footer", {}, () => [
          me(I(h.value.footer ? h.value.footer : ""), 1)
        ])
      ], 2)) : b("", !0)
    ], 10, yn));
  }
}, He = L(null);
function xn() {
  function e(l) {
    const o = typeof l == "string" ? { message: l } : l;
    return new Promise((s) => {
      He.value = { options: o, resolve: s };
    });
  }
  function n() {
    He.value?.resolve(!0), He.value = null;
  }
  function t() {
    He.value?.resolve(!1), He.value = null;
  }
  return { pending: He, confirm: e, accept: n, dismiss: t };
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
    })[s.value] ?? "trash"), h = i(() => ({
      danger: "text-red-500",
      warning: "text-yellow-500",
      info: "text-blue-500"
    })[s.value] ?? "text-red-500"), k = i(() => {
      const y = {
        danger: "bg-red-100 dark:bg-red-900/30",
        warning: "bg-yellow-100 dark:bg-yellow-900/30",
        info: "bg-blue-100 dark:bg-blue-900/30"
      };
      return y[s.value] ?? y.danger;
    }), z = i(() => ({ danger: "danger", warning: "warning", info: "primary" })[s.value] ?? "danger");
    return (y, g) => {
      const u = ve("Icon"), p = ve("Button"), d = ve("Overlay");
      return r(), Z(d, {
        "model-value": o.value,
        persistent: !1,
        width: "md:w-[420px] w-[90vw]",
        "z-index": "z-[200]",
        "onUpdate:modelValue": q(l)
      }, {
        footer: te(() => [
          f("div", Cn, [
            K(p, {
              label: q(n)?.options.cancelLabel ?? "Cancel",
              variant: "outlined",
              color: "gray",
              "prepend-icon": "x-mark",
              size: "sm",
              onClick: q(l)
            }, null, 8, ["label", "onClick"]),
            K(p, {
              label: q(n)?.options.confirmLabel ?? "Confirm",
              color: z.value,
              "prepend-icon": "check",
              size: "sm",
              onClick: q(t)
            }, null, 8, ["label", "color", "onClick"])
          ])
        ]),
        default: te(() => [
          f("div", wn, [
            f("div", {
              class: m(["flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0", k.value])
            }, [
              K(u, {
                name: x.value,
                size: 28,
                color: h.value
              }, null, 8, ["name", "color"])
            ], 2),
            q(n)?.options.title ? (r(), a("h3", kn, I(q(n).options.title), 1)) : b("", !0),
            f("p", Sn, I(q(n)?.options.message), 1)
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
        const g = {
          none: "",
          xs: "mx-1",
          sm: "mx-2",
          md: "mx-4",
          lg: "mx-6",
          xl: "mx-8"
        };
        return g[n.spacing] || g.md;
      } else {
        const g = {
          none: "",
          xs: "my-1",
          sm: "my-2",
          md: "my-4",
          lg: "my-6",
          xl: "my-8"
        };
        return g[n.spacing] || g.md;
      }
    }), x = i(() => `${n.inset ? n.orientation === "vertical" ? "my-4" : "mx-4" : ""}`), h = i(() => {
      if (n.orientation === "vertical") {
        const g = {
          thin: "w-px",
          medium: "w-0.5",
          thick: "w-1"
        };
        return g[n.thickness] || g.thin;
      } else {
        const g = {
          thin: "h-px",
          medium: "h-0.5",
          thick: "h-1"
        };
        return g[n.thickness] || g.thin;
      }
    }), k = i(() => {
      const g = {
        default: "bg-color-3 border-color-3",
        dashed: "border-color-3 border-dashed",
        dotted: "border-color-3 border-dotted",
        thick: "bg-color-3 border-color-3",
        gradient: "bg-gradient-to-r from-transparent via-color-3 to-transparent"
      }, u = g[n.variant] || g.default;
      if (n.variant === "dashed" || n.variant === "dotted") {
        const p = n.orientation === "vertical" ? "border-l" : "border-t";
        return `${u} ${p}`;
      }
      return u;
    }), z = i(() => n.color ? n.variant === "dashed" || n.variant === "dotted" ? { borderColor: n.color } : { backgroundColor: n.color } : {}), y = i(() => {
      const g = n.orientation === "vertical" ? "py-2" : "px-4", u = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg"
      };
      return `${g} ${u[n.textSize] || u.sm} text-ui-text-secondary font-medium`;
    });
    return (g, u) => (r(), a("div", {
      class: m([
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
        class: m(["flex-shrink-0", y.value])
      }, [
        E(g.$slots, "default", {}, () => [
          me(I(e.text), 1)
        ], !0)
      ], 2)) : b("", !0),
      f("div", {
        class: m([
          "flex-grow",
          x.value,
          h.value,
          k.value,
          e.orientation === "vertical" && "h-full"
        ]),
        style: ce(z.value)
      }, null, 6),
      l.value && e.orientation === "horizontal" && e.position === "center" ? (r(), a("div", {
        key: 1,
        class: m(["flex-shrink-0", y.value])
      }, [
        E(g.$slots, "default", {}, () => [
          me(I(e.text), 1)
        ], !0)
      ], 2)) : b("", !0),
      l.value && e.orientation === "horizontal" ? (r(), a("div", {
        key: 2,
        class: m([
          "flex-grow",
          x.value,
          h.value,
          k.value
        ]),
        style: ce(z.value)
      }, null, 6)) : b("", !0),
      l.value && e.orientation === "horizontal" && e.position === "right" ? (r(), a("div", {
        key: 3,
        class: m(["flex-shrink-0", y.value])
      }, [
        E(g.$slots, "default", {}, () => [
          me(I(e.text), 1)
        ], !0)
      ], 2)) : b("", !0)
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
    const l = e, o = t, s = L(l.modelValue), x = L(null), h = L(null), k = L({}), z = i(() => {
      const A = We[l.color] || We.gray;
      return A[l.variant] || A.contained;
    }), y = i(() => [
      "inline-flex items-center justify-center font-medium transition-all cursor-pointer select-none",
      l.icon ? "" : vt[l.size],
      Se[l.rounded],
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      z.value,
      l.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    ]), g = i(() => [
      "fixed z-50 ui-bg-color",
      "border border-color shadow-lg",
      Se[l.rounded],
      "p-1.5",
      "overflow-auto"
    ]), u = i(() => [
      "relative flex cursor-pointer select-none items-center",
      Se[l.rounded],
      "px-2.5 py-1.5 text-sm outline-none transition-colors",
      "hover:bg-color-1 ui-text-color",
      "focus:bg-color-2",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    ]);
    pe(() => l.modelValue, (A) => {
      s.value = A, A && Ae(() => $());
    });
    const p = () => {
      l.disabled || (s.value = !s.value, o("update:modelValue", s.value), s.value ? (o("opened"), Ae(() => $())) : o("closed"));
    }, d = () => {
      l.disabled || s.value || (s.value = !0, o("update:modelValue", !0), o("opened"), Ae(() => $()));
    }, C = () => {
      s.value && (s.value = !1, o("update:modelValue", !1), o("closed"));
    }, w = (A) => {
      o("select", A), l.closeOnContentClick && C();
    }, $ = () => {
      if (!x.value || !h.value) return;
      const A = x.value.getBoundingClientRect(), Y = h.value.getBoundingClientRect(), X = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      let V = A.bottom + l.offsetY, G = A.left + l.offsetX;
      const ie = V + Y.height > X.height, O = G + Y.width > X.width;
      ie && (V = A.top - Y.height - l.offsetY), l.align === "right" ? G = A.right - Y.width + l.offsetX : l.align === "center" && (G = A.left + A.width / 2 - Y.width / 2 + l.offsetX), O && (G = X.width - Y.width - 8), G < 8 && (G = 8);
      const R = l.width === "auto" ? `${Math.max(A.width, parseInt(l.minWidth))}px` : typeof l.width == "number" ? `${l.width}px` : l.width;
      k.value = {
        position: "fixed",
        top: `${V}px`,
        left: `${G}px`,
        width: R,
        minWidth: `${l.minWidth}px`,
        maxHeight: `${l.maxHeight}px`,
        zIndex: 50 + l.elevation
      };
    }, S = (A) => {
      x.value && !x.value.contains(A.target) && h.value && !h.value.contains(A.target) && C();
    }, F = () => {
      l.openOnHover && d();
    }, N = () => {
      l.openOnHover && C();
    };
    return Ve(() => {
      document.addEventListener("click", S), window.addEventListener("scroll", $, !0), window.addEventListener("resize", $), l.openOnHover && x.value && (x.value.addEventListener("mouseenter", F), x.value.addEventListener("mouseleave", N));
    }), Be(() => {
      document.removeEventListener("click", S), window.removeEventListener("scroll", $, !0), window.removeEventListener("resize", $), l.openOnHover && x.value && (x.value.removeEventListener("mouseenter", F), x.value.removeEventListener("mouseleave", N));
    }), n({ open: d, close: C, toggle: p }), (A, Y) => (r(), a(se, null, [
      f("div", {
        ref_key: "triggerRef",
        ref: x,
        onClick: p,
        class: "inline-block"
      }, [
        E(A.$slots, "trigger", {}, () => [
          f("button", {
            class: m(y.value)
          }, [
            E(A.$slots, "label", {}, () => [
              me(I(e.label), 1)
            ], !0),
            (r(), a("svg", {
              class: m(["ml-2 h-4 w-4 transition-transform", { "rotate-180": s.value }]),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...Y[0] || (Y[0] = [
              f("path", {
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
        K(ke, {
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
              ref: h,
              style: ce(k.value),
              class: m(g.value)
            }, [
              E(A.$slots, "default", {}, () => [
                (r(!0), a(se, null, de(e.items, (X, V) => (r(), a("div", {
                  key: V,
                  onClick: (G) => w(X),
                  class: m(u.value)
                }, I(X.label || X), 11, Vn))), 128))
              ], !0)
            ], 6)) : b("", !0)
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
    const { language: t } = ge("i18n", { language: L("en"), t: (y) => y, setLanguage: () => {
    } }), l = {
      xs: "text-xs  px-2   py-1",
      sm: "text-xs  px-2.5 py-1.5",
      md: "text-sm  px-2.5 py-1.5",
      lg: "text-sm  px-3   py-2",
      xl: "text-base px-3  py-2.5"
    }, o = e, s = n, x = i(() => [
      "relative flex cursor-pointer select-none items-center gap-2",
      "outline-none transition-colors",
      Se[o.rounded],
      l[o.size] ?? l.md,
      o.disabled ? "pointer-events-none opacity-50" : "hover:bg-color-1 ui-text-color focus:bg-color-2",
      o.active ? "bg-color-2 ui-text-color" : ""
    ]), h = () => {
      o.disabled || s("select");
    }, k = i(() => {
      let y = "";
      return o.lang != "" ? y = o.lang : o.dir == "rtl" ? y = "dv" : o.dir == "ltr" ? y = "en" : y = t.value, console.log("selectLanguage in Card222:", y), y === "dv" ? "dv" : "en";
    });
    i(() => k.value == "dv" ? "faruma" : "");
    const z = i(() => Ge(o.label, k.value, o.label));
    return (y, g) => {
      const u = ve("Icon");
      return r(), a("div", {
        onClick: h,
        class: m(x.value),
        role: "menuitem",
        tabindex: e.disabled ? -1 : 0
      }, [
        y.$slots.prepend || e.prependIcon ? (r(), a("span", An, [
          E(y.$slots, "prepend", {}, () => [
            e.prependIcon ? (r(), Z(u, {
              key: 0,
              name: e.prependIcon,
              type: "outline",
              size: q(Pe)[o.size],
              color: "text-current"
            }, null, 8, ["name", "size"])) : b("", !0)
          ])
        ])) : b("", !0),
        f("span", Pn, [
          E(y.$slots, "default", {}, () => [
            me(I(z.value), 1)
          ])
        ]),
        y.$slots.append || e.appendIcon ? (r(), a("span", Dn, [
          E(y.$slots, "append", {}, () => [
            e.appendIcon ? (r(), Z(u, {
              key: 0,
              name: e.appendIcon,
              type: "outline",
              size: q(Pe)[o.size],
              stroke: "currentColor",
              color: "text-current"
            }, null, 8, ["name", "size"])) : b("", !0)
          ])
        ])) : b("", !0)
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
    rounded: { type: String, default: () => we("Expansion", "rounded") }
  },
  emits: ["update:modelValue", "change", "action-click"],
  setup(e, { emit: n }) {
    const t = e, l = n;
    nt();
    const o = L(t.modelValue), s = i({
      get: () => t.exclusive ? o.value : t.modelValue,
      set: (g) => {
        o.value = g, l("update:modelValue", g);
      }
    });
    function x(g) {
      if (t.clickable) {
        if (t.exclusive)
          s.value = s.value === g ? -1 : g;
        else {
          const u = Array.isArray(s.value) ? [...s.value] : [], p = u.indexOf(g);
          p > -1 ? u.splice(p, 1) : u.push(g), s.value = u;
        }
        l("change", {
          index: g,
          item: t.items[g],
          active: s.value === g
        });
      }
    }
    function h(g, u, p) {
      l("action-click", {
        action: g.id || g.label,
        item: u,
        index: p
      }), g.callback && g.callback(u, p);
    }
    function k(g) {
      const u = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-color-3 text-ui-text-color hover:bg-color-4",
        outline: "border border-color text-ui-text-color hover:bg-color-1",
        ghost: "text-primary hover:bg-color-1",
        danger: "bg-error text-white hover:bg-error/90"
      };
      return u[g || "secondary"] || u.secondary;
    }
    function z(g) {
      g.style.height = "0", g.offsetHeight, g.style.height = g.scrollHeight + "px";
    }
    function y(g) {
      g.style.height = "0";
    }
    return (g, u) => {
      const p = ve("Icon");
      return r(), a("div", {
        class: m([
          "border overflow-hidden transition-all duration-300",
          e.border,
          e.rounded ? q(Se)[e.rounded] : "",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        (r(!0), a(se, null, de(e.items, (d, C) => (r(), a("div", {
          key: d.id ?? C,
          class: m([
            "border-b ui-border-color last:border-b-0 transition-all",
            s.value === C && "bg-color-1"
          ])
        }, [
          f("button", {
            onClick: (w) => x(C),
            onKeydown: [
              be(ee((w) => x(C), ["prevent"]), ["enter"]),
              be(ee((w) => x(C), ["prevent"]), ["space"])
            ],
            "aria-expanded": s.value === C,
            "aria-controls": `panel-${C}`,
            class: m(["w-full flex items-center justify-between px-6 py-4 text-left transition-all hover:bg-color-1", [
              s.value === C ? "bg-color-1" : "bg-color-2",
              e.clickable && "cursor-pointer"
            ]])
          }, [
            e.hasLeftIcon ? (r(), a("div", jn, [
              E(g.$slots, "left-icon", {
                item: d,
                index: C
              }, () => [
                f("div", Nn, I(C + 1), 1)
              ], !0)
            ])) : b("", !0),
            f("div", Rn, [
              f("h3", Hn, I(d.title), 1),
              d.subtitle ? (r(), a("p", Un, I(d.subtitle), 1)) : b("", !0)
            ]),
            d.badge || d.rightIcon ? (r(), a("div", Fn, [
              d.badge ? (r(), Z(q(jt), {
                key: 0,
                chips: d.badge,
                size: "small",
                class: "px-2 py-1 text-xs font-medium rounded-full"
              }, null, 8, ["chips"])) : b("", !0),
              d.rightIcon ? (r(), a("div", qn, [
                f("i", {
                  class: m(["text-lg", d.rightIcon])
                }, null, 2)
              ])) : b("", !0)
            ])) : b("", !0),
            K(p, {
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: m(["transition-transform duration-200", s.value === C ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"])
          ], 42, On),
          K(ke, {
            name: "expand",
            onEnter: z,
            onLeave: y
          }, {
            default: te(() => [
              s.value === C ? (r(), a("div", {
                key: 0,
                id: `panel-${C}`,
                class: "overflow-hidden"
              }, [
                f("div", Kn, [
                  E(g.$slots, "content", {
                    item: d,
                    index: C
                  }, () => [
                    me(I(d.content), 1)
                  ], !0),
                  d.actions || g.$slots.actions ? (r(), a("div", Gn, [
                    E(g.$slots, "actions", {
                      item: d,
                      index: C
                    }, () => [
                      (r(!0), a(se, null, de(d.actions, (w) => (r(), a("button", {
                        key: w.label,
                        onClick: ($) => h(w, d, C),
                        class: m([
                          "px-4 py-2 text-sm font-medium rounded-md transition-all",
                          k(w.variant)
                        ])
                      }, I(w.label), 11, Yn))), 128))
                    ], !0)
                  ])) : b("", !0)
                ])
              ], 8, Wn)) : b("", !0)
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
    const t = e, l = n, o = L(""), s = L(""), x = L(!1), h = i(() => document.documentElement.classList.contains("dark")), k = i(() => t.sections && t.sections.length > 0);
    function z() {
      o.value && (l("newsletter-submit", {
        email: o.value
      }), x.value = !1, s.value = "Thanks for subscribing!", o.value = "", setTimeout(() => {
        s.value = "";
      }, 3e3));
    }
    function y() {
      document.documentElement.classList.toggle("dark"), l("theme-toggle", h.value);
    }
    return (g, u) => {
      const p = ve("Icon");
      return r(), a("footer", {
        class: m([
          "border-t border-color transition-colors duration-300",
          "bg-color-2 text-ui-text-color",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        f("div", Qn, [
          k.value ? (r(), a("div", Zn, [
            (r(!0), a(se, null, de(e.sections, (d) => (r(), a("div", {
              key: d.title,
              class: "space-y-4"
            }, [
              d.title ? (r(), a("h3", _n, I(d.title), 1)) : b("", !0),
              f("ul", er, [
                (r(!0), a(se, null, de(d.links, (C) => (r(), a("li", {
                  key: C.label
                }, [
                  f("a", {
                    href: C.href,
                    target: C.target,
                    rel: C.rel,
                    class: "text-sm text-ui-text-secondary hover:text-primary transition-colors duration-200"
                  }, I(C.label), 9, tr)
                ]))), 128))
              ]),
              d.social ? (r(), a("div", lr, [
                (r(!0), a(se, null, de(d.social, (C) => (r(), a("a", {
                  key: C.icon,
                  href: C.href,
                  title: C.label,
                  target: C.target,
                  rel: "noopener noreferrer",
                  class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-color-3 text-ui-text-color hover:bg-primary hover:text-white transition-all duration-200"
                }, [
                  K(p, {
                    name: C.icon,
                    size: 16,
                    color: "text-current"
                  }, null, 8, ["name"])
                ], 8, nr))), 128))
              ])) : b("", !0)
            ]))), 128))
          ])) : b("", !0),
          e.newsletter ? (r(), a("div", rr, [
            f("div", ar, [
              f("h3", or, I(e.newsletter.title || "Subscribe to our newsletter"), 1),
              f("p", sr, I(e.newsletter.description || "Get updates delivered to your inbox."), 1),
              f("form", {
                onSubmit: ee(z, ["prevent"]),
                class: "flex gap-2"
              }, [
                Ie(f("input", {
                  "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
                  type: "email",
                  placeholder: "Enter your email",
                  class: "flex-1 px-3 py-2 text-sm border border-color rounded-md bg-color-1 text-ui-text-color placeholder-ui-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                  required: ""
                }, null, 512), [
                  [mt, o.value]
                ]),
                u[1] || (u[1] = f("button", {
                  type: "submit",
                  class: "px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-200"
                }, " Subscribe ", -1))
              ], 32),
              s.value ? (r(), a("p", {
                key: 0,
                class: m(["text-xs mt-2", x.value ? "text-error" : "text-success"])
              }, I(s.value), 3)) : b("", !0)
            ])
          ])) : b("", !0),
          u[2] || (u[2] = f("div", { class: "border-t border-color" }, null, -1))
        ]),
        f("div", ir, [
          f("div", ur, [
            f("div", dr, [
              f("p", cr, I(e.copyright || `© ${(/* @__PURE__ */ new Date()).getFullYear()} All rights reserved.`), 1),
              e.bottomLinks ? (r(), a("div", fr, [
                (r(!0), a(se, null, de(e.bottomLinks, (d) => (r(), a("a", {
                  key: d.label,
                  href: d.href,
                  class: "text-xs text-ui-text-secondary hover:text-primary transition-colors duration-200"
                }, I(d.label), 9, gr))), 128))
              ])) : b("", !0),
              e.showThemeSwitcher ? (r(), a("div", mr, [
                f("button", {
                  onClick: y,
                  class: "p-2 rounded-md hover:bg-color-2 transition-colors",
                  title: h.value ? "Light mode" : "Dark mode"
                }, [
                  K(p, {
                    name: h.value ? "sun" : "moon",
                    size: 18,
                    color: "text-current"
                  }, null, 8, ["name"])
                ], 8, pr)
              ])) : b("", !0)
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
    const l = e, o = t, s = tt(/* @__PURE__ */ new Map()), x = tt({}), h = tt({}), k = ($, S) => {
      s.set($, S), h[$] = !1;
    }, z = ($) => {
      s.delete($), delete x[$], delete h[$], C();
    }, y = async () => {
      let $ = !0;
      Object.keys(x).forEach((S) => delete x[S]);
      for (const [S, F] of s.entries())
        F?.validate && (h[S] = !0, await F.validate() || ($ = !1));
      return C(), { valid: $, errors: { ...x } };
    }, g = () => {
      for (const [$, S] of s.entries())
        S?.reset && S.reset();
      u();
    }, u = () => {
      for (const [$, S] of s.entries())
        S?.resetValidation && S.resetValidation();
      Object.keys(x).forEach(($) => delete x[$]), Object.keys(h).forEach(($) => h[$] = !1), C();
    }, p = ($, S, F) => {
      h[$] = !0, S ? delete x[$] : x[$] = F, C();
    }, d = i(() => Array.from(s.keys()).every((S) => h[S] === !0) && Object.keys(x).length === 0), C = () => {
      Ae(() => {
        l.modelValue !== null && o("update:modelValue", d.value);
      });
    }, w = async () => {
      const $ = await y();
      o("submit", $);
    };
    return Ke("formContext", {
      register: k,
      unregister: z,
      validate: p,
      validateOn: i(() => l.validateOn)
    }), n({
      validate: y,
      reset: g,
      resetValidation: u,
      isValid: d
    }), ($, S) => (r(), a("form", {
      onSubmit: ee(w, ["prevent"])
    }, [
      E($.$slots, "default", {
        isValid: d.value,
        validate: y,
        reset: g,
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
      class: m(`border border-color-3 rounded-lg ${e.color} w-full relative p-4`)
    }, [
      e.title ? (r(), a("div", hr, [
        f("span", xr, I(e.title), 1)
      ])) : b("", !0),
      E(n.$slots, "default")
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
      E(l.$slots, "sidebar"),
      E(l.$slots, "appbar"),
      f("main", {
        class: "",
        style: ce(t.value)
      }, [
        f("div", Sr, [
          E(l.$slots, "default")
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
    })), l = typeof n.leftWidth == "number" ? n.leftWidth : parseInt(n.leftWidth) || 320, o = L(l), s = L(!1), x = L(null), h = i(() => ({
      width: `${o.value}px`,
      minWidth: `${o.value}px`
    }));
    function k(g) {
      s.value = !0, g.preventDefault();
    }
    function z(g) {
      if (!x.value) return;
      const u = x.value.getBoundingClientRect(), p = g.clientX - u.left;
      o.value = Math.max(n.minWidth, Math.min(p, Math.min(n.maxWidth, u.width - 300)));
    }
    function y() {
      s.value = !1;
    }
    return Be(() => {
      s.value = !1;
    }), (g, u) => (r(), a("div", {
      ref_key: "containerRef",
      ref: x,
      class: m(["flex overflow-hidden", e.bleed ? "-mx-6 -my-5" : "", s.value ? "select-none" : ""]),
      style: ce(t.value)
    }, [
      f("div", {
        class: m(["flex-shrink-0 flex flex-col overflow-hidden", e.leftClass]),
        style: ce(h.value)
      }, [
        E(g.$slots, "left")
      ], 6),
      f("div", {
        class: "relative flex-shrink-0 w-[5px] cursor-col-resize group z-10",
        onMousedown: k
      }, [
        f("div", {
          class: m(["absolute inset-y-0 left-[2px] w-px bg-[var(--border-color)] transition-colors", s.value ? "!bg-primary !w-[2px] !left-[1.5px]" : "group-hover:!bg-primary"])
        }, null, 2),
        f("div", {
          class: m(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", s.value ? "!opacity-100" : ""])
        }, [
          (r(), a(se, null, de(4, (p) => f("span", {
            key: p,
            class: "w-[3px] h-[3px] rounded-full bg-primary block"
          })), 64))
        ], 2)
      ], 32),
      f("div", {
        class: m(["flex-1 min-w-0 flex flex-col overflow-hidden", e.rightClass])
      }, [
        E(g.$slots, "right")
      ], 2),
      (r(), Z(Xe, { to: "body" }, [
        s.value ? (r(), a("div", {
          key: 0,
          class: "fixed inset-0 z-[9999] cursor-col-resize",
          onMousemove: z,
          onMouseup: y
        }, null, 32)) : b("", !0)
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
    const l = e, o = t, s = L(null), x = L(""), h = L([]), k = L(!1), z = i({
      get: () => l.railExpanded,
      set: (M) => o("update:railExpanded", M)
    }), y = i({
      get: () => l.modelValue,
      set: (M) => o("update:modelValue", M)
    }), g = i(() => l.permanent || l.rail ? !0 : y.value), u = i(() => !l.rail || l.expandOnHover && k.value ? !1 : !z.value);
    pe(u, (M) => {
      o("update:collapsed", M);
    });
    const p = i(() => u.value ? typeof l.railWidth == "number" ? `${l.railWidth}px` : l.railWidth : typeof l.width == "number" ? `${l.width}px` : l.width);
    pe(p, (M) => {
      o("update:width", M);
    }, { immediate: !0 }), Ke("navWidth", p);
    const d = i(() => {
      const M = {
        width: p.value
      };
      if (l.appBarOffset) {
        const j = typeof l.appBarOffset == "number" ? `${l.appBarOffset}px` : l.appBarOffset;
        M.top = j, M.height = `calc(100vh - ${j})`;
      }
      return M;
    }), C = i(() => {
      const M = [
        "fixed bottom-0 z-40 flex flex-col",
        "bg-color-1 ui-text-secondary"
      ];
      return l.location === "right" ? M.push("right-0") : M.push("left-0"), l.bordered && (M.push(l.location === "right" ? "border-l" : "border-r"), M.push("border-color-3")), (l.elevated || l.temporary) && M.push("shadow-lg"), l.floating && M.push("m-4 rounded-lg"), l.color && M.push(l.color), M;
    }), w = i(() => l.location === "right" ? "slide-right" : "slide-left"), $ = i(() => {
      let M = l.items;
      if (x.value) {
        const j = x.value.toLowerCase();
        M = l.items.filter((le) => {
          const B = le.label?.toLowerCase().includes(j), v = le.children?.some(
            (c) => c.label?.toLowerCase().includes(j)
          );
          return B || v;
        });
      }
      if (l.groupBy) {
        const j = {};
        return M.forEach((le) => {
          const B = le[l.groupBy] || "Other";
          j[B] || (j[B] = { title: B, items: [] }), j[B].items.push(le);
        }), Object.values(j);
      }
      return [{ title: null, items: M }];
    }), S = () => {
      y.value = !0, o("open");
    }, F = () => {
      l.permanent || (y.value = !1, o("close"));
    }, N = () => {
      y.value ? F() : S();
    }, A = () => {
      o("update:railExpanded", !z.value);
    };
    let Y = null, X = null;
    const V = () => {
      Y && (clearTimeout(Y), Y = null), X && (clearTimeout(X), X = null);
    }, G = () => {
      if (l.expandOnHover && l.rail) {
        V();
        const M = Number(l.hoverDelay) || 0;
        Y = setTimeout(() => {
          k.value = !0;
        }, M);
      }
    }, ie = () => {
      if (l.expandOnHover && l.rail) {
        V();
        const M = Number(l.hoverDelay) || 0;
        X = setTimeout(() => {
          k.value = !1;
        }, M);
      }
    }, O = (M) => {
      if (o("item-click", M), M.children) {
        const j = h.value.indexOf(M.id);
        j > -1 ? h.value.splice(j, 1) : h.value.push(M.id);
        return;
      }
      (l.closeOnClick || l.temporary) && F();
    }, R = (M) => {
      M.key === "Escape" && (l.temporary || l.persistent) && F();
    };
    function J() {
      if (l.items)
        for (const M of l.items)
          M.children && M.children.some((j) => j.active) && (h.value.includes(M.id) || h.value.push(M.id));
    }
    return pe(() => l.items, J, { deep: !0 }), Ve(() => {
      J(), document.addEventListener("keydown", R);
    }), Be(() => {
      V(), document.removeEventListener("keydown", R);
    }), n({ open: S, close: F, toggle: N, isCollapsed: u }), (M, j) => {
      const le = ve("Icon");
      return r(), a("div", zr, [
        K(ke, { name: "fade" }, {
          default: te(() => [
            y.value && e.temporary ? (r(), a("div", {
              key: 0,
              class: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
              onClick: F
            })) : b("", !0)
          ]),
          _: 1
        }),
        K(ke, { name: w.value }, {
          default: te(() => [
            Ie(f("nav", {
              ref_key: "navRef",
              ref: s,
              class: m(C.value),
              style: ce({ ...d.value, transition: "width 300ms ease-in-out" }),
              onMouseenter: G,
              onMouseleave: ie
            }, [
              M.$slots.prepend || e.avatarName ? (r(), a("div", {
                key: 0,
                class: m(["flex items-center gap-2 border-b border-color-3 w-full min-w-0", u.value ? "justify-center px-2 py-4" : "px-4 py-4 overflow-hidden"])
              }, [
                E(M.$slots, "prepend", {}, () => [
                  f("div", {
                    class: m(["flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700", u.value ? "" : "flex-1 min-w-0 overflow-hidden"])
                  }, [
                    e.avatarName ? (r(), Z(Pt, {
                      key: 0,
                      name: e.avatarName || "",
                      size: "sm",
                      variant: "primary",
                      class: "flex-shrink-0"
                    }, null, 8, ["name"])) : b("", !0),
                    e.avatarName && !u.value ? (r(), a("span", Br, I(e.avatarName), 1)) : b("", !0)
                  ], 2)
                ], !0),
                e.rail && !e.temporary && !u.value ? (r(), a("button", {
                  key: 0,
                  onClick: A,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 transition-colors",
                  "aria-label": "Toggle navigation width"
                }, [
                  (r(), a("svg", {
                    class: m(["fill-gray-600 dark:fill-gray-200 w-3", e.location === "right" ? "rotate-180" : ""]),
                    xmlns: "http://www.w3.org/2000/svg",
                    "shape-rendering": "geometricPrecision",
                    "text-rendering": "geometricPrecision",
                    "image-rendering": "optimizeQuality",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    viewBox: "0 0 512 389.24"
                  }, [...j[1] || (j[1] = [
                    f("path", {
                      "fill-rule": "nonzero",
                      d: "M0 0h275.1v50.04H0V0zm361.79 115.14 54.44 54.44H0v50.04h416.2l-54.41 54.41 35.39 35.39L512 194.6v-.03l-35.39-35.36-79.43-79.46-35.39 35.39zM0 339.2h275.1v50.04H0V339.2z"
                    }, null, -1)
                  ])], 2))
                ])) : b("", !0),
                !e.permanent && !e.rail ? (r(), a("button", {
                  key: 1,
                  onClick: F,
                  class: "flex-shrink-0 p-1.5 rounded-md hover:bg-color-2 ui-text-secondary hover:text-foreground transition-colors",
                  "aria-label": "Close navigation"
                }, [
                  K(le, {
                    name: "x-mark",
                    size: "18"
                  })
                ])) : b("", !0)
              ], 2)) : b("", !0),
              e.filterable && !u.value ? (r(), a("div", Ir, [
                f("div", Vr, [
                  K(q(yt), {
                    modelValue: x.value,
                    "onUpdate:modelValue": j[0] || (j[0] = (B) => x.value = B),
                    type: "text",
                    placeholder: e.searchPlaceholder,
                    prepend: "magnifying-glass"
                  }, null, 8, ["modelValue", "placeholder"])
                ])
              ])) : b("", !0),
              f("div", Tr, [
                e.items && e.items.length ? (r(!0), a(se, { key: 0 }, de($.value, (B, v) => (r(), a(se, { key: v }, [
                  B.title ? (r(), a("div", {
                    key: 0,
                    class: m([
                      "flex items-center gap-2 px-3 py-2",
                      u.value ? "justify-center" : ""
                    ])
                  }, [
                    u.value ? (r(), a("div", Lr)) : (r(), a("span", Mr, I(B.title), 1))
                  ], 2)) : b("", !0),
                  f("ul", Ar, [
                    (r(!0), a(se, null, de(B.items, (c) => (r(), a("li", {
                      key: c.id || c.label
                    }, [
                      (r(), Z(Ne(c.href ? "a" : "div"), {
                        href: c.href,
                        onClick: ee((T) => O(c), ["prevent"]),
                        class: m([
                          "group flex items-center gap-3 w-full text-sm font-medium transition-colors",
                          u.value ? "justify-center px-2 py-2.5" : "px-3 py-2",
                          c.active ? "bg-color-4 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                          q(Se)[e.rounded],
                          c.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                        ]),
                        title: u.value ? c.label : void 0
                      }, {
                        default: te(() => [
                          c.icon ? (r(), a("span", Pr, [
                            K(le, {
                              name: c.icon,
                              size: "20"
                            }, null, 8, ["name"])
                          ])) : b("", !0),
                          Ie(f("span", { class: "truncate" }, I(c.label), 513), [
                            [je, !u.value]
                          ]),
                          Ie(f("span", { class: "ml-auto flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-600" }, I(c.badge), 513), [
                            [je, c.badge && !u.value]
                          ]),
                          Ie(K(le, {
                            name: "chevron-right",
                            size: "16",
                            class: m(["ml-auto transition-transform", h.value.includes(c.id) ? "rotate-90" : ""])
                          }, null, 8, ["class"]), [
                            [je, c.children && !u.value]
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href", "onClick", "class", "title"])),
                      K(ke, { name: "collapse" }, {
                        default: te(() => [
                          c.children && h.value.includes(c.id) && !u.value ? (r(), a("ul", {
                            key: 0,
                            class: m([e.location === "left" ? "mt-1 ml-4 pl-3 border-l border-color-3 space-y-1" : "mt-1 mr-4 pr-3 border-r border-color-3 space-y-1"])
                          }, [
                            (r(!0), a(se, null, de(c.children, (T) => (r(), a("li", {
                              key: T.id || T.label
                            }, [
                              (r(), Z(Ne(T.href ? "a" : "div"), {
                                href: T.href,
                                onClick: ee((P) => O(T), ["prevent"]),
                                class: m([
                                  "flex items-center gap-3 w-full px-3 py-2 text-sm transition-colors",
                                  T.active ? "bg-color-3 ui-text-secondary" : "ui-text-secondary hover:bg-color-1",
                                  q(Se)[e.rounded],
                                  T.disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
                                ])
                              }, {
                                default: te(() => [
                                  T.icon ? (r(), Z(le, {
                                    key: 0,
                                    name: T.icon,
                                    size: "18"
                                  }, null, 8, ["name"])) : b("", !0),
                                  f("span", Dr, I(T.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["href", "onClick", "class"]))
                            ]))), 128))
                          ], 2)) : b("", !0)
                        ]),
                        _: 2
                      }, 1024)
                    ]))), 128))
                  ])
                ], 64))), 128)) : E(M.$slots, "default", { key: 1 }, void 0, !0)
              ]),
              M.$slots.append ? (r(), a("div", Er, [
                E(M.$slots, "append", {}, void 0, !0)
              ])) : b("", !0)
            ], 38), [
              [je, g.value]
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
      set: (g) => l("update:modelValue", g)
    }), s = L(!1);
    function x() {
      if (t.persistent) {
        s.value = !0, setTimeout(() => s.value = !1, 400);
        return;
      }
      o.value = !1;
    }
    function h(g) {
      g.key === "Escape" && o.value && !t.persistent && x();
    }
    Ve(() => {
      document.addEventListener("keydown", h);
    }), Be(() => {
      document.removeEventListener("keydown", h);
    });
    const k = i(() => `${t.transition ?? "center"}`), z = i(() => t.fullscreen ? "h-screen rounded-none" : t.mobileFull ? "!h-screen !rounded-none !mx-0 sm:!h-auto sm:!max-h-[90vh] sm:!rounded-xl sm:!mx-4" : "mx-4 max-h-screen"), y = i(() => t.fullscreen ? "w-full" : t.mobileFull ? `max-sm:!w-full ${t.width}` : t.width);
    return (g, u) => {
      const p = ve("Card");
      return r(), Z(Xe, { to: "body" }, [
        K(ke, { name: k.value }, {
          default: te(() => [
            o.value ? (r(), a("div", {
              key: 0,
              class: m(["fixed inset-0 flex items-center justify-center", e.zIndex])
            }, [
              f("div", {
                class: m(["absolute inset-0 transition-opacity duration-300 bg-black/30 backdrop-blur-sm", e.overlayClass]),
                onClick: x
              }, null, 2),
              K(ke, { name: k.value }, {
                default: te(() => [
                  o.value ? (r(), Z(p, {
                    key: 0,
                    title: e.title,
                    "card-class": [z.value, e.modalClass, s.value && "animate-shake"],
                    bg: e.cardBg,
                    "text-color": e.bodyTextColor,
                    rounded: e.rounded,
                    border: e.border,
                    "header-class": e.headerClass,
                    "footer-class": e.footerClass,
                    width: y.value,
                    onClick: u[1] || (u[1] = ee(() => {
                    }, ["stop"]))
                  }, Ue({
                    default: te(() => [
                      f("div", {
                        class: m(["flex-1 pt-2", e.contentClass]),
                        style: { "overflow-x": "clip" }
                      }, [
                        e.closebutton ? (r(), a("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-3 right-4 z-10 text-ui-text-secondary hover:text-ui-text-primary transition-colors",
                          onClick: u[0] || (u[0] = (d) => o.value = !1)
                        }, [...u[2] || (u[2] = [
                          f("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "size-5"
                          }, [
                            f("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18 18 6M6 6l12 12"
                            })
                          ], -1)
                        ])])) : b("", !0),
                        E(g.$slots, "default")
                      ], 2)
                    ]),
                    _: 2
                  }, [
                    g.$slots.header ? {
                      name: "header",
                      fn: te(() => [
                        E(g.$slots, "header")
                      ]),
                      key: "0"
                    } : void 0,
                    g.$slots.footer ? {
                      name: "footer",
                      fn: te(() => [
                        E(g.$slots, "footer")
                      ]),
                      key: "1"
                    } : void 0
                  ]), 1032, ["title", "card-class", "bg", "text-color", "rounded", "border", "header-class", "footer-class", "width"])) : b("", !0)
                ]),
                _: 3
              }, 8, ["name"])
            ], 2)) : b("", !0)
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
      set: (V) => o("update:modelValue", V)
    }), x = i(() => {
      const V = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      };
      return V[l.size] || V.md;
    }), h = i(() => {
      const V = {
        sm: "w-8 h-8 min-w-[32px]",
        md: "w-10 h-10 min-w-[40px]",
        lg: "w-12 h-12 min-w-[48px]"
      };
      return V[l.size] || V.md;
    }), k = i(() => {
      const V = {
        sm: 14,
        md: 16,
        lg: 20
      };
      return V[l.size] || V.md;
    }), z = i(() => {
      const V = {
        sm: "gap-1",
        md: "gap-1.5",
        lg: "gap-2"
      };
      return V[l.size] || V.md;
    }), y = i(() => {
      const V = {
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg"
      };
      return V[l.size] || V.md;
    }), g = i(() => "border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"), u = i(() => {
      const V = {
        default: "bg-primary text-white border-primary",
        primary: "bg-primary text-white border-primary",
        outline: "bg-primary text-white border-primary"
      };
      return V[l.variant] || V.default;
    }), p = i(() => {
      const V = {
        default: "bg-color-2 text-ui-text-color border-color",
        primary: "bg-transparent text-ui-text-color border-color",
        outline: "bg-transparent text-ui-text-color border-color"
      };
      return V[l.variant] || V.default;
    }), d = i(() => "hover:bg-color-3 hover:border-color-3"), C = i(() => "opacity-50 cursor-not-allowed"), w = i(() => {
      const V = [], G = l.totalPages, ie = s.value, O = l.maxVisiblePages;
      if (G <= O)
        for (let R = 1; R <= G; R++)
          V.push(R);
      else {
        V.push(1);
        const R = Math.floor(O / 2);
        let J = ie - R, M = ie + R;
        J < 2 && (J = 2, M = O - 1), M > G - 1 && (M = G - 1, J = G - O + 2), J > 2 && V.push("...");
        for (let j = J; j <= M; j++)
          V.push(j);
        M < G - 1 && V.push("..."), V.push(G);
      }
      return V;
    }), $ = i(() => (s.value - 1) * l.perPage + 1), S = i(() => {
      const V = s.value * l.perPage;
      return V > l.totalItems ? l.totalItems : V;
    }), F = (V) => {
      V === s.value || V < 1 || V > l.totalPages || l.disabled || (s.value = V, o("change", V), o("page-change", V));
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
    }), (V, G) => {
      const ie = ve("Icon");
      return r(), a("nav", {
        "aria-label": e.ariaLabel,
        class: m([
          "flex items-center justify-center",
          e.containerClass
        ]),
        style: ce(e.containerStyle)
      }, [
        f("ul", {
          class: m([
            "flex items-center",
            x.value,
            z.value
          ])
        }, [
          e.showFirstLast ? (r(), a("li", Hr, [
            f("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: G[0] || (G[0] = (O) => F(1)),
              class: m([
                "inline-flex items-center justify-center transition-all",
                h.value,
                g.value,
                s.value === 1 || e.disabled ? C.value : d.value,
                e.rounded && y.value
              ]),
              "aria-label": e.firstText || "First page"
            }, [
              e.firstText ? (r(), a("span", Fr, I(e.firstText), 1)) : (r(), Z(ie, {
                key: 0,
                name: "chevron-double-left",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Ur)
          ])) : b("", !0),
          e.showPrevNext ? (r(), a("li", qr, [
            f("button", {
              type: "button",
              disabled: s.value === 1 || e.disabled,
              onClick: N,
              class: m([
                "inline-flex items-center justify-center transition-all",
                h.value,
                g.value,
                s.value === 1 || e.disabled ? C.value : d.value,
                e.rounded && y.value
              ]),
              "aria-label": e.prevText || "Previous page"
            }, [
              e.prevText ? (r(), a("span", Kr, I(e.prevText), 1)) : (r(), Z(ie, {
                key: 0,
                name: "chevron-left",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Wr)
          ])) : b("", !0),
          (r(!0), a(se, null, de(w.value, (O) => (r(), a("li", { key: O }, [
            O === "..." ? (r(), a("span", {
              key: 0,
              class: m([
                "inline-flex items-center justify-center",
                h.value,
                "text-ui-text-secondary"
              ])
            }, " ... ", 2)) : (r(), a("button", {
              key: 1,
              type: "button",
              disabled: e.disabled,
              onClick: (R) => F(O),
              class: m([
                "inline-flex items-center justify-center transition-all font-medium",
                h.value,
                g.value,
                O === s.value ? u.value : p.value,
                e.rounded && y.value,
                !e.disabled && O !== s.value && d.value
              ]),
              "aria-label": `Page ${O}`,
              "aria-current": O === s.value ? "page" : void 0
            }, I(O), 11, Gr))
          ]))), 128)),
          e.showPrevNext ? (r(), a("li", Yr, [
            f("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: A,
              class: m([
                "inline-flex items-center justify-center transition-all",
                h.value,
                g.value,
                s.value === e.totalPages || e.disabled ? C.value : d.value,
                e.rounded && y.value
              ]),
              "aria-label": e.nextText || "Next page"
            }, [
              e.nextText ? (r(), a("span", Jr, I(e.nextText), 1)) : (r(), Z(ie, {
                key: 0,
                name: "chevron-right",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Xr)
          ])) : b("", !0),
          e.showFirstLast ? (r(), a("li", Qr, [
            f("button", {
              type: "button",
              disabled: s.value === e.totalPages || e.disabled,
              onClick: G[1] || (G[1] = (O) => F(e.totalPages)),
              class: m([
                "inline-flex items-center justify-center transition-all",
                h.value,
                g.value,
                s.value === e.totalPages || e.disabled ? C.value : d.value,
                e.rounded && y.value
              ]),
              "aria-label": e.lastText || "Last page"
            }, [
              e.lastText ? (r(), a("span", _r, I(e.lastText), 1)) : (r(), Z(ie, {
                key: 0,
                name: "chevron-double-right",
                size: k.value,
                type: e.iconType
              }, null, 8, ["size", "type"]))
            ], 10, Zr)
          ])) : b("", !0)
        ], 2),
        e.showPageInfo ? (r(), a("div", {
          key: 0,
          class: m([
            "ml-4 text-ui-text-secondary",
            x.value
          ])
        }, " Page " + I(s.value) + " of " + I(e.totalPages), 3)) : b("", !0),
        e.showTotalInfo && e.totalItems ? (r(), a("div", {
          key: 1,
          class: m([
            "ml-4 text-ui-text-secondary",
            x.value
          ])
        }, I($.value) + "-" + I(S.value) + " of " + I(e.totalItems), 3)) : b("", !0)
      ], 14, Rr);
    };
  }
}, ta = /* @__PURE__ */ fe(ea, [["__scopeId", "data-v-862a1617"]]), la = { class: "relative" }, na = ["aria-hidden"], ra = {
  class: "flex h-full flex-col",
  style: { minHeight: "100vh" }
}, aa = { class: "flex items-center justify-between px-4 py-3" }, oa = { class: "flex items-center gap-2" }, sa = {
  key: 0,
  class: /* @__PURE__ */ m(["pa-2"]),
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
      const D = t.location === "left";
      return t.rail && !t.modelValue && !M.value || t.rail && t.modelValue && !M.value ? D ? "chevron-right" : "chevron-left" : D ? "chevron-left" : "chevron-right";
    });
    const l = n, o = L(!!t.modelValue), s = L(null), x = L(t.items ? [...t.items] : []), h = L("");
    pe(
      () => t.items,
      (D) => {
        x.value = t.items ? [...t.items] : [];
      }
    ), pe(
      () => t.overlayAppBar,
      (D) => {
        ue();
      }
    );
    const k = i(() => {
      if (!t.items) return [];
      if (!h.value || h.value.trim().length === 0) return x.value;
      const D = h.value.toLowerCase();
      return x.value.filter((_) => String(_.label || _.name || "").toLowerCase().includes(D) || _.tags && String(_.tags).toLowerCase().includes(D));
    }), z = i(() => {
      if (!t.items) return [];
      if (!t.groupBy) return [{ group: null, items: k.value }];
      const D = {}, _ = typeof t.groupBy == "function" ? t.groupBy : (ne) => ne[t.groupBy];
      return k.value.forEach((ne) => {
        const W = _(ne) || "Ungrouped";
        D[W] || (D[W] = []), D[W].push(ne);
      }), Object.keys(D).map((ne) => ({ group: ne, items: D[ne] }));
    }), y = L({});
    pe(z, (D) => {
      D.forEach((_) => {
        const ne = String(_.group || "Ungrouped");
        y.value[ne] === void 0 && (y.value[ne] = !!t.groupDefaultOpen);
      });
    });
    function g(D) {
      if (!t.collapsibleGroups) return !0;
      const _ = String(D || "Ungrouped");
      return !!y.value[_];
    }
    function u(D) {
      if (!t.collapsibleGroups) return;
      const _ = String(D || "Ungrouped");
      y.value[_] = !y.value[_], l("group-toggle", { group: D, open: y.value[_] });
    }
    function p(D, _) {
      const ne = t.groupParents && _ ? t.groupParents[_] : void 0;
      (!ne || !ne.href) && (D.preventDefault(), u(_));
    }
    function d(D, _) {
      if (!_) return;
      const ne = t.groupParents && _ ? t.groupParents[_] : void 0;
      (D.key === "Enter" || D.key === " ") && (!ne || !ne.href) && (D.preventDefault(), D.stopPropagation(), u(_));
    }
    function C() {
      const D = s.value;
      if (!D) return;
      D.querySelectorAll("li").forEach((W) => {
        const oe = W.querySelector("svg");
        oe && !oe.classList.contains("rail-icon") && oe.classList.add("rail-icon"), Array.from(W.childNodes).forEach((Me) => {
          if (Me.nodeType === Node.TEXT_NODE) {
            const Ee = Me.textContent?.trim();
            if (Ee && Ee.length) {
              const _e = document.createElement("span");
              _e.className = "rail-label", _e.textContent = Ee, W.replaceChild(_e, Me);
            }
          } else if (Me.nodeType === Node.ELEMENT_NODE) {
            const Ee = Me;
            if (Ee.classList.contains("rail-label") || Ee.classList.contains("rail-icon")) return;
            Array.from(Ee.childNodes).forEach((at) => {
              if (at.nodeType === Node.TEXT_NODE) {
                const ot = at.textContent?.trim();
                if (ot && ot.length) {
                  const st = document.createElement("span");
                  st.className = "rail-label", st.textContent = ot, Ee.replaceChild(st, at);
                }
              }
            });
          }
        });
      }), D.querySelectorAll(":scope > a, :scope > button").forEach((W) => {
        W.classList.contains("nav-drawer-link") || W.classList.add("nav-drawer-link");
        const oe = W.parentElement;
        if (oe && oe.tagName.toLowerCase() !== "li") {
          const $e = document.createElement("li");
          $e.className = "nav-drawer-item", oe.replaceChild($e, W), $e.appendChild(W);
        }
      });
    }
    let w = null, $ = null, S = null;
    function F(D, _ = x.value) {
      return D == null ? -1 : _.findIndex((ne) => String(ne.id) === String(D));
    }
    function N(D) {
      w = D.id;
    }
    function A(D) {
      if ($ = D.id, D.event && D.event.clientY !== void 0) {
        const _ = document.querySelector(`[data-drawer-item-id='${D.id}']`);
        if (_) {
          const ne = _.getBoundingClientRect(), W = ne.top + ne.height / 2;
          S = D.event.clientY < W ? "before" : "after";
        }
      } else
        S = "after";
    }
    function Y(D) {
      if (!t.items || !t.draggable) return;
      const _ = D.sourceId !== void 0 ? D.sourceId : w, ne = D.id;
      if (!_ || !ne || String(_) === String(ne)) return;
      const W = F(_), oe = F(ne);
      if (W === -1 || oe === -1) return;
      const $e = [...x.value], [Me] = $e.splice(W, 1);
      $e.splice(oe, 0, Me), x.value = $e, l("update:items", $e), l("reorder", { items: $e }), w = null, $ = null, S = null;
    }
    function X(D) {
      s.value && (s.value.contains(D.target) || v());
    }
    pe(
      () => t.modelValue,
      (D) => {
        o.value = !!D, Ze();
      }
    ), pe(
      () => t.permanent,
      (D) => {
        Ze();
      }
    ), pe(o, (D) => {
      l("update:modelValue", D), l(D ? "open" : "close");
    });
    const V = i(() => t.permanent ? !0 : o.value), G = () => {
      t.permanent || (o.value = !1);
    }, ie = () => {
      t.closeOnScrimClick && G();
    }, O = (D) => {
      D.key === "Escape" && (t.temporary || t.persistent) && G();
    };
    Ve(() => {
      document.addEventListener("keydown", O), document.addEventListener("click", X), C();
    }), Ht(() => {
      C();
    }), Be(() => {
      document.removeEventListener("keydown", O), document.removeEventListener("click", X), window.removeEventListener("resize", Ce);
    });
    let R = null;
    function J(D) {
      return Array.from(D.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'));
    }
    pe(V, (D) => {
      if (D && (t.temporary || t.persistent)) {
        const _ = s.value;
        if (!_) return;
        const ne = J(_);
        ne.length ? ne[0].focus() : (_.setAttribute("tabindex", "-1"), _.focus()), R = (W) => {
          if (W.key !== "Tab") return;
          const oe = J(_);
          if (!oe.length) return;
          const $e = oe[0], Me = oe[oe.length - 1];
          W.shiftKey && document.activeElement === $e ? (W.preventDefault(), Me.focus()) : !W.shiftKey && document.activeElement === Me && (W.preventDefault(), $e.focus());
        }, document.addEventListener("keydown", R);
      } else
        R && (document.removeEventListener("keydown", R), R = null);
      C();
    });
    const M = L(!1), j = i(() => t.rail ? !0 : !!(t.hoverExpand || t.expandOnHover));
    let le;
    const B = () => {
      j.value && (le && window.clearTimeout(le), M.value = !0);
    }, v = () => {
      j.value && (le = window.setTimeout(() => {
        M.value = !1;
      }, 150));
    }, c = i(() => t.rail && !M.value), T = i(() => t.location === "right" ? "right-0" : "left-0"), P = i(() => c.value ? typeof t.railWidth == "number" ? `w-[${t.railWidth}px]` : String(t.railWidth) : typeof t.width == "number" ? `w-[${t.width}px]` : String(t.width)), U = i(() => {
      const D = ["fixed", "h-full", "overflow-hidden", "flex", "flex-col"];
      return t.isStuck && D.push("top-0"), t.location === "right" ? D.push("right-0") : D.push("left-0"), t.rail && D.push("transition-all"), pe(
        () => t.rail,
        (_) => {
          C();
        }
      ), D.join(" ");
    }), he = i(() => t.rail ? "drawer-rail" : ""), re = i(() => t.rail && !c.value ? "drawer-expanded" : ""), ye = i(() => !(t.rail && c.value)), De = i(() => t.location === "right" ? "translate-x-full" : "-translate-x-full"), rt = i(() => t.zIndex !== void 0 && typeof t.zIndex == "string" && t.zIndex.startsWith("z-") ? t.zIndex : t.overlayAppBar ? "z-50" : "z-10"), H = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex };
    }), Q = i(() => {
      if (t.zIndex !== void 0 && typeof t.zIndex == "number")
        return { zIndex: t.zIndex - 1 };
    }), ae = L(0), ue = () => {
      if (!t.appBarOffset && t.overlayAppBar) {
        ae.value = 0;
        return;
      }
      if (t.appBarHeight !== void 0 && t.appBarHeight !== null) {
        if (typeof t.appBarHeight == "number") ae.value = t.appBarHeight;
        else if (typeof t.appBarHeight == "string") {
          const D = Number(String(t.appBarHeight).replace(/px$/i, ""));
          ae.value = Number.isFinite(D) ? D : 0;
        }
        console.log("Using provided appBarHeight for top padding:", ae.value);
        return;
      }
      if (typeof document < "u") {
        const D = document.querySelector('[data-component="appbar"]');
        if (!D) {
          ae.value = 0;
          return;
        }
        const _ = D.getBoundingClientRect();
        ae.value = Math.round(_.height), console.log("Computed top padding for drawer:", ae.value);
      }
    };
    ue();
    let ze;
    const Ce = () => {
      ze && window.clearTimeout(ze), ze = window.setTimeout(() => {
        ue();
      }, 100);
    };
    Ve(() => {
      window.addEventListener("resize", Ce);
    }), Be(() => {
      window.removeEventListener("resize", Ce);
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
      const D = new ResizeObserver(Ze);
      Fe.value && D.observe(Fe.value), Be(() => {
        D.disconnect(), Qe && Qe.unregister("drawer", t.id);
      });
    }), (D, _) => {
      const ne = ve("Icon");
      return r(), a("div", la, [
        V.value && e.temporary ? (r(), a("div", {
          key: 0,
          class: m(["fixed inset-0", bt.value]),
          style: ce([Q.value]),
          onClick: ie
        }, null, 6)) : b("", !0),
        f("nav", {
          ref_key: "navRef",
          ref: s,
          class: m([
            rt.value,
            t.location === "right" ? "border-l" : "border",
            "border-color-2 transform transition-transform duration-200 ease-in-out",
            U.value,
            T.value,
            he.value,
            re.value,
            e.color,
            P.value,
            !V.value && !e.permanent ? De.value : "translate-x-0"
          ]),
          style: ce([H.value, ae.value ? { paddingTop: ae.value + "px" } : void 0]),
          "aria-hidden": !V.value && !e.permanent,
          onClick: B
        }, [
          f("div", ra, [
            f("div", aa, [
              ye.value ? E(D.$slots, "prepend", { key: 0 }, () => [
                _[1] || (_[1] = f("span", { class: "font-semibold" }, "Menu", -1))
              ], !0) : b("", !0),
              f("div", oa, [
                E(D.$slots, "append", {}, void 0, !0),
                !e.permanent && !e.temporary ? (r(), a("button", sa, [
                  e.location === "left" && !q(Le) && c.value && !e.rail ? (r(), Z(ne, {
                    key: 0,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : b("", !0),
                  e.location === "left" && !q(Le) && !e.rail && !c.value ? (r(), Z(ne, {
                    key: 1,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : b("", !0),
                  e.location === "right" && q(Le) && !e.rail && c.value ? (r(), Z(ne, {
                    key: 2,
                    name: "chevron-left",
                    class: "fill-color-4",
                    size: "20"
                  })) : b("", !0),
                  e.location === "right" && q(Le) && !e.rail && !c.value ? (r(), Z(ne, {
                    key: 3,
                    name: "chevron-right",
                    class: "fill-color-4",
                    size: "20"
                  })) : b("", !0)
                ])) : b("", !0),
                e.temporary ? (r(), a("button", {
                  key: 1,
                  onClick: G,
                  class: m(["ml-2 rounded p-2"]),
                  "aria-label": "Close drawer"
                }, [
                  K(ne, {
                    name: "x-mark",
                    class: "fill-color-4 hover:fill-color-3",
                    size: "20"
                  })
                ])) : b("", !0)
              ])
            ]),
            f("div", ia, [
              t.items ? (r(), a("div", ua, [
                t.filterable && !(t.rail && c.value) ? (r(), a("div", da, [
                  K(q(yt), {
                    prepend: "magnifying-glass",
                    label: "Search",
                    modelValue: h.value,
                    "onUpdate:modelValue": _[0] || (_[0] = (W) => h.value = W),
                    placeholder: t.searchPlaceholder
                  }, null, 8, ["modelValue", "placeholder"])
                ])) : b("", !0),
                (r(!0), a(se, null, de(z.value, (W) => (r(), a("div", {
                  key: W.group,
                  class: m(["py-2", c.value ? "py-1" : ""])
                }, [
                  W.group ? (r(), a("div", {
                    key: 0,
                    class: m(["group-header px-3 pt-3 pb-1 text-lg uppercase flex items-center justify-between", D.groupHeaderStyles, c.value ? "pt-1 pb-0 px-1" : ""]),
                    role: "button",
                    tabindex: t.collapsibleGroups ? 0 : -1,
                    onClick: ee((oe) => u(W.group), ["prevent"]),
                    onKeydown: [
                      be(ee((oe) => u(W.group), ["prevent"]), ["enter"]),
                      be(ee((oe) => u(W.group), ["prevent"]), ["space"])
                    ],
                    "aria-expanded": g(W.group)
                  }, [
                    f("span", fa, [
                      t.renderGroupParent ? (r(), Z(Ne(t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].href ? "a" : "button"), {
                        key: 0,
                        href: t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].href || void 0,
                        class: "group-parent flex items-center gap-3 px-0 py-0 w-full text-left",
                        onClick: ee((oe) => p(oe, W.group), ["stop"]),
                        onKeydown: (oe) => d(oe, W.group)
                      }, {
                        default: te(() => [
                          t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].icon ? (r(), a("span", ga, [
                            K(ne, {
                              name: t.groupParents[W.group].icon,
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : t.groupIcons && t.groupIcons[W.group] ? (r(), a("span", ma, [
                            K(ne, {
                              name: t.groupIcons[W.group],
                              size: "18"
                            }, null, 8, ["name"])
                          ])) : b("", !0),
                          !t.rail || !c.value ? (r(), a("span", {
                            key: 2,
                            class: m(["text-lg uppercase", D.groupHeaderStyles])
                          }, I(t.groupParents && t.groupParents[W.group] && t.groupParents[W.group].label || W.group), 3)) : b("", !0)
                        ]),
                        _: 2
                      }, 1064, ["href", "onClick", "onKeydown"])) : (r(), a(se, { key: 1 }, [
                        t.groupIcons && t.groupIcons[W.group] ? (r(), a("span", pa, [
                          K(ne, {
                            name: t.groupIcons[W.group],
                            size: "18"
                          }, null, 8, ["name"])
                        ])) : b("", !0),
                        !t.rail || !c.value ? (r(), a("span", {
                          key: 1,
                          class: m(["text-lg uppercase", D.groupHeaderStyles])
                        }, I(W.group), 3)) : b("", !0)
                      ], 64))
                    ]),
                    t.collapsibleGroups && (!t.rail || !c.value) ? (r(), a("button", {
                      key: 0,
                      onClick: ee((oe) => u(W.group), ["stop", "prevent"]),
                      onKeydown: [
                        be(ee((oe) => u(W.group), ["stop", "prevent"]), ["enter"]),
                        be(ee((oe) => u(W.group), ["stop", "prevent"]), ["space"])
                      ],
                      class: m(["px-2 py-1 rounded focus:outline-none", D.groupHeaderStyles]),
                      style: { opacity: 0.7 },
                      "aria-expanded": g(W.group)
                    }, [
                      K(ne, {
                        name: "chevron-down",
                        size: "16",
                        class: m({ "rotate-180": g(W.group) })
                      }, null, 8, ["class"])
                    ], 42, va)) : b("", !0)
                  ], 42, ca)) : b("", !0),
                  Ie(f("ul", {
                    class: m(["py-1", c.value ? "py-0" : ""])
                  }, [
                    (r(!0), a(se, null, de(W.items, (oe) => (r(), Z(q(Dt), {
                      key: oe.id,
                      id: oe.id,
                      href: oe.href,
                      draggable: t.draggable && !oe.disabled,
                      dragging: String(q(w)) === String(oe.id),
                      "is-drag-over": String(q($)) === String(oe.id),
                      "drag-pos": q(S),
                      onDragstart: N,
                      onDragover: A,
                      onDragleave: ($e) => {
                        String(q($)) === String(oe.id) && (wt($) ? $.value = null : $ = null, wt(S) ? S.value = null : S = null);
                      },
                      onDrop: Y
                    }, {
                      default: te(() => [
                        oe.icon ? (r(), Z(ne, {
                          key: 0,
                          name: oe.icon,
                          size: "20",
                          class: "rail-icon mr-2"
                        }, null, 8, ["name"])) : b("", !0),
                        f("span", ya, I(oe.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["id", "href", "draggable", "dragging", "is-drag-over", "drag-pos", "onDragleave"]))), 128))
                  ], 2), [
                    [je, g(W.group)]
                  ])
                ], 2))), 128))
              ])) : (r(), a("div", ba, [
                E(D.$slots, "default", {}, void 0, !0)
              ]))
            ]),
            f("div", ha, [
              E(D.$slots, "footer", {}, void 0, !0)
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
    const t = e, l = n, o = (z) => {
      t.draggable && (z.dataTransfer.setData("text/plain", String(t.id)), l("dragstart", { id: t.id, event: z }));
    }, s = (z) => {
      t.draggable && l("dragover", { id: t.id, event: z });
    }, x = (z) => {
      l("dragleave", { id: t.id, event: z });
    }, h = (z) => {
      const y = z.dataTransfer.getData("text/plain");
      l("drop", { id: t.id, sourceId: y, event: z });
    }, k = (z) => {
      l("click", { id: t.id, event: z });
    };
    return (z, y) => (r(), a("li", {
      "data-drawer-item-id": e.id,
      draggable: e.draggable,
      class: m([
        "nav-drawer-item flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors",
        "hover:bg-color-2",
        e.dragging ? "opacity-50" : "",
        e.isDragOver && e.dragPos === "before" ? "border-t-2 border-color-1" : "",
        e.isDragOver && e.dragPos === "after" ? "border-b-2 border-color-1" : ""
      ]),
      onDragstart: o,
      onDragover: ee(s, ["prevent"]),
      onDragleave: x,
      onDrop: ee(h, ["prevent"]),
      onClick: k
    }, [
      e.href ? (r(), a("a", {
        key: 0,
        href: e.href,
        class: "flex items-center w-full"
      }, [
        E(z.$slots, "default", {}, void 0, !0)
      ], 8, Sa)) : E(z.$slots, "default", { key: 1 }, void 0, !0)
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
    const x = i(() => {
      const y = {
        default: "bg-color-2 text-ui-text-color border-color",
        success: "bg-green-50 text-success border-green-400",
        error: "bg-red-50 text-error border-red-400",
        warning: "bg-yellow-50 text-warning border-yellow-400",
        info: "bg-blue-50 text-info border-blue-400"
      };
      return y[t.variant] || y.default;
    }), h = i(() => {
      if (t.icon && !["success", "error", "warning", "info"].includes(t.icon))
        return t.icon;
      const y = {
        success: "check-circle",
        error: "x-circle",
        warning: "exclamation-triangle",
        info: "information-circle",
        default: "bell"
      };
      return y[t.variant] || y.default;
    }), k = () => {
      l("update:modelValue", !1), l("close");
    }, z = () => {
      l("action"), t.onAction && t.onAction();
    };
    return pe(() => t.modelValue, (y) => {
      if (y && t.showProgress && t.timeout > 0) {
        o.value = 100;
        const g = 50, u = 100 / t.timeout * g;
        s = setInterval(() => {
          o.value -= u, o.value <= 0 && (clearInterval(s), o.value = 0);
        }, g);
      }
    }, { immediate: !0 }), Be(() => {
      s && clearInterval(s);
    }), (y, g) => {
      const u = ve("Icon");
      return r(), Z(ke, {
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
            class: m([
              "min-w-[300px] max-w-md rounded-lg shadow-lg border",
              "flex items-start gap-3 pointer-events-auto",
              x.value,
              e.multiline ? "flex-col p-4" : "items-center px-4 py-3"
            ]),
            role: "alert"
          }, [
            e.icon || e.variant !== "default" ? (r(), a("div", $a, [
              K(u, {
                name: h.value,
                size: 20,
                color: "text-current"
              }, null, 8, ["name"])
            ])) : b("", !0),
            f("div", za, [
              e.title ? (r(), a("h3", Ba, I(e.title), 1)) : b("", !0),
              f("p", {
                class: m(["text-sm", e.multiline ? "" : "truncate"])
              }, I(e.message), 3)
            ]),
            e.action ? (r(), a("button", {
              key: 1,
              onClick: z,
              class: "flex-shrink-0 px-3 py-1 text-sm font-medium rounded hover:bg-black/10 transition-colors"
            }, I(e.action), 1)) : b("", !0),
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
            ])) : b("", !0),
            e.showProgress && e.timeout > 0 ? (r(), a("div", Ia, [
              f("div", {
                class: "h-full bg-current transition-all ease-linear",
                style: ce({ width: o.value + "%" })
              }, null, 4)
            ])) : b("", !0)
          ], 2)) : b("", !0)
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
    } }), l = e, o = i(() => l.rtl ?? Le.value), s = nt(), x = i(() => !!s.item), h = i(() => !!s.default), k = i(() => l.dotSize === "sm" ? 10 : l.dotSize === "lg" ? 16 : 12), z = i(() => l.gap ?? 16);
    function y(d) {
      if (l.direction === "horizontal") return "bottom";
      if (l.side === "one")
        return o.value ? "right" : "left";
      const w = (l.alternate ? d % 2 === 0 : !0) ? "left" : "right";
      return o.value ? w === "left" ? "right" : "left" : w;
    }
    function g(d) {
      return l.direction === "horizontal" ? {} : l.side === "one" ? {
        maxWidth: "100%",
        marginLeft: "0",
        marginRight: "0",
        marginInlineStart: z.value + "px",
        marginInlineEnd: "0"
      } : y(d) === "left" ? {
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
    const p = n;
    return (d, C) => (r(), a("div", {
      class: m(["relative ui-text-color", [
        e.direction === "vertical" ? "py-2" : "py-6 px-2"
      ]])
    }, [
      f("div", {
        class: m([
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
        (r(!0), a(se, null, de(e.items, (w, $) => (r(), a("div", {
          key: w.id ?? $,
          class: m([
            "relative clear-both",
            e.condensed ? "mb-3" : "mb-6"
          ])
        }, [
          f("div", {
            class: m([
              "absolute rounded-full border border-solid shadow-sm",
              u(w),
              e.side === "one" ? o.value ? "right-0" : "left-0" : "left-1/2 -translate-x-1/2"
            ]),
            style: ce({
              width: k.value + "px",
              height: k.value + "px",
              borderColor: "var(--color-1)",
              top: "0.5rem"
            })
          }, null, 6),
          f("div", {
            class: m([
              "border border-color-2 rounded-md py-3 px-4 transition-all",
              "align-" + e.align,
              e.clickable ? "cursor-pointer hover:shadow-md" : "",
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg"
            ]),
            style: ce({
              background: "var(--color-2)",
              ...g($)
            }),
            role: "group",
            tabindex: "0",
            onClick: (S) => p("item-click", { item: w, index: $ }),
            onKeydown: [
              be(ee((S) => p("item-click", { item: w, index: $ }), ["prevent"]), ["enter"]),
              be(ee((S) => p("item-click", { item: w, index: $ }), ["prevent"]), ["space"])
            ]
          }, [
            x.value ? E(d.$slots, "item", {
              key: 0,
              item: w,
              index: $
            }, void 0, !0) : h.value ? E(d.$slots, "default", {
              key: 1,
              item: w,
              index: $
            }, void 0, !0) : (r(), a(se, { key: 2 }, [
              w.title ? (r(), a("div", Aa, I(w.title), 1)) : b("", !0),
              w.time ? (r(), a("div", Pa, I(w.time), 1)) : b("", !0),
              w.content ? (r(), a("div", Da, I(w.content), 1)) : b("", !0)
            ], 64))
          ], 46, La)
        ], 2))), 128))
      ])) : (r(), a("div", {
        key: 1,
        class: m(["flex gap-6 items-start justify-between relative", [e.equalizeCards ? "items-stretch" : ""]])
      }, [
        (r(!0), a(se, null, de(e.items, (w, $) => (r(), a("div", {
          key: w.id ?? $,
          class: "relative flex flex-col flex-1 pt-6"
        }, [
          f("div", {
            class: m([
              "absolute rounded-full border border-solid shadow-sm left-1/2 -translate-x-1/2 top-0",
              u(w)
            ]),
            style: ce({
              width: k.value + "px",
              height: k.value + "px",
              borderColor: "var(--color-1)"
            })
          }, null, 6),
          f("div", {
            class: m([
              "border border-solid border-color rounded-md py-3 px-4 mt-4 transition-all",
              "align-" + e.align,
              e.elevation === 0 ? "shadow-none" : e.elevation === 1 ? "shadow-sm" : e.elevation === 2 ? "shadow-md" : "shadow-lg",
              e.equalizeCards ? "flex-1" : ""
            ]),
            style: { background: "var(--color-2)" },
            role: "group",
            tabindex: "0",
            onClick: (S) => p("item-click", { item: w, index: $ }),
            onKeydown: [
              be(ee((S) => p("item-click", { item: w, index: $ }), ["prevent"]), ["enter"]),
              be(ee((S) => p("item-click", { item: w, index: $ }), ["prevent"]), ["space"])
            ]
          }, [
            x.value ? E(d.$slots, "item", {
              key: 0,
              item: w,
              index: $
            }, void 0, !0) : h.value ? E(d.$slots, "default", {
              key: 1,
              item: w,
              index: $
            }, void 0, !0) : (r(), a(se, { key: 2 }, [
              w.title ? (r(), a("div", Oa, I(w.title), 1)) : b("", !0),
              w.time ? (r(), a("div", ja, I(w.time), 1)) : b("", !0),
              w.content ? (r(), a("div", Na, I(w.content), 1)) : b("", !0)
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
      f("div", Fa, [
        E(t.$slots, "opposite", {}, void 0, !0)
      ]),
      e.hideDot ? b("", !0) : (r(), a("div", {
        key: 0,
        class: "v-timeline-item__dot rounded-full mt-3",
        style: ce({ background: e.color })
      }, [
        E(t.$slots, "icon", {}, () => [
          e.icon ? (r(), a("span", qa, I(e.icon), 1)) : b("", !0)
        ], !0)
      ], 4)),
      f("div", Wa, [
        E(t.$slots, "default", {}, void 0, !0)
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
    )), s = L(`tabs-${Math.random().toString(36).substr(2, 9)}`), x = L(t.modelValue), h = L(null), k = L(!1), z = L(!1), y = i(() => Le.value), g = i(() => t.scrollable), u = i(() => g.value ? t.vertical ? "overflow-y-auto" : "overflow-x-auto" : "overflow-visible"), p = ["default", "pills"], d = i(() => ({ left: "self-start", center: "self-center", right: "self-end" })[t.align] || "self-start"), C = i(() => ({ left: "justify-start", center: "justify-center", right: "justify-end" })[t.align] || "justify-start"), w = i(() => t.vertical || t.fullWidth ? "" : p.includes(t.variant) ? d.value : C.value), $ = i(() => {
      const v = [];
      return t.variant === "default" ? t.vertical ? v.push("inline-flex flex-col h-auto items-stretch rounded-lg bg-color-2 p-1 ui-text-secondary") : v.push("inline-flex h-10 items-center rounded-lg bg-color-2 p-1 ui-text-secondary") : t.variant === "outline" ? t.vertical ? v.push("flex flex-col space-y-1 border-r border-color-3 pr-4") : v.push("flex border-b border-color-3") : t.variant === "pills" ? (v.push("flex gap-2"), t.vertical && v.push("flex-col")) : t.variant === "underline" && (t.vertical ? v.push("flex flex-col space-y-1 border-r-2 border-color-3 pr-4") : v.push("flex border-b-2 border-color-3")), t.fullWidth && !t.vertical && v.push("w-full"), w.value && v.push(w.value), v.join(" ");
    }), S = i(() => t.variant === "default" ? t.fullWidth ? "w-full" : "" : t.variant === "outline" || t.variant === "underline" ? t.vertical ? "" : t.fullWidth ? "w-full" : "inline-flex" : ""), F = i(() => g.value && t.contentHeight ? "flex-1 min-w-0 min-h-0 overflow-auto" : "flex-1 min-w-0"), N = i(() => {
      const v = {
        sm: "text-xs px-2.5 py-1.5",
        default: "text-sm px-3 py-2",
        lg: "text-base px-4 py-2.5"
      };
      return v[t.size] || v.default;
    }), A = i(() => {
      const v = {
        sm: "h-3.5 w-3.5",
        default: "h-4 w-4",
        lg: "h-5 w-5"
      };
      return v[t.size] || v.default;
    }), Y = i(() => {
      const v = {
        sm: "h-4 min-w-4 px-1 text-[10px]",
        default: "h-5 min-w-5 px-1.5 text-xs",
        lg: "h-6 min-w-6 px-2 text-xs"
      };
      return v[t.size] || v.default;
    }), X = (v) => {
      const c = x.value === v, P = o.value[v]?.disabled || t.disabled;
      let U = "font-medium ";
      return t.fullWidth && !t.vertical && (U += "flex-1 "), t.vertical && (U += "w-full justify-start "), t.variant === "default" ? (U += "rounded-md ", c ? U += "bg-color-1 ui-text-color shadow-sm " : P || (U += "hover:bg-color-3 hover:ui-text-color ")) : t.variant === "outline" ? t.vertical ? (U += "rounded-md border border-transparent ", c ? U += "border-color-3 bg-color-1 ui-text-color shadow-sm " : P || (U += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : (U += "border-b-2 -mb-[2px] rounded-none ", c ? U += "border-primary ui-text-color " : P || (U += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : t.variant === "pills" ? (U += "rounded-full ", c ? U += "bg-primary text-white shadow-sm " : P || (U += "ui-text-secondary hover:ui-text-color hover:bg-color-2 ")) : t.variant === "underline" && (t.vertical ? (U += "border-r-2 -mr-[2px] rounded-none pr-4 ", c ? U += "border-primary ui-text-color " : P || (U += "border-transparent ui-text-secondary hover:ui-text-color hover:border-color-4 ")) : (U += "border-b-2 -mb-[2px] rounded-none ", c ? U += "border-primary ui-text-color " : P || (U += "border-transparent ui-text-secondary hover:ui-text-color "))), U;
    }, V = (v) => {
      const c = String(v?.badgeVariant || "").toLowerCase();
      return c.includes("error") || c.includes("danger") || c.includes("red") ? "bg-red-500 text-white" : c.includes("success") || c.includes("green") ? "bg-green-500 text-white" : c.includes("warning") || c.includes("yellow") ? "bg-yellow-500 text-white" : c.includes("info") || c.includes("blue") ? "bg-blue-500 text-white" : c.includes("secondary") ? "bg-color-3 ui-text-color" : "bg-primary text-white";
    }, G = i(() => {
      const v = {
        sm: "mt-3",
        default: "mt-4",
        lg: "mt-6"
      };
      return t.vertical ? "pl-0" : v[t.size] || v.default;
    }), ie = (v) => {
      o.value[v]?.disabled || t.disabled || (x.value = v, l("update:modelValue", v), l("change", v), g.value && Ae(() => {
        const T = document.getElementById(`tab-${s.value}-${v}`), P = h.value;
        if (T && P) {
          const U = T.offsetLeft, he = U + T.offsetWidth, re = P.scrollLeft, ye = re + P.clientWidth;
          U < re ? P.scrollTo({ left: U - 8, behavior: "smooth" }) : he > ye && P.scrollTo({ left: he - P.clientWidth + 8, behavior: "smooth" });
        }
      }));
    }, O = (v) => {
      l("close", v);
    }, R = (v, c) => {
      l("keydown", v, c);
      const T = o.value.length;
      let P = c;
      const U = (he, re) => {
        let ye = he;
        for (let De = 0; De < T; De++)
          if (ye = (ye + re + T) % T, !o.value[ye]?.disabled)
            return ye;
        return he;
      };
      switch (v.key) {
        case "ArrowDown":
          t.vertical && (v.preventDefault(), P = U(c, 1));
          break;
        case "ArrowUp":
          t.vertical && (v.preventDefault(), P = U(c, -1));
          break;
        case "ArrowRight":
          t.vertical || (v.preventDefault(), P = U(c, y.value ? -1 : 1));
          break;
        case "ArrowLeft":
          t.vertical || (v.preventDefault(), P = U(c, y.value ? 1 : -1));
          break;
        case "Home":
          v.preventDefault(), P = U(-1, 1);
          break;
        case "End":
          v.preventDefault(), P = U(T, -1);
          break;
      }
      P !== c && (ie(P), document.getElementById(`tab-${s.value}-${P}`)?.focus());
    }, J = (v) => {
      if (!h.value || !g.value) return;
      const c = Math.max(200, h.value.clientWidth * 0.5);
      h.value.scrollBy({ left: v * c, behavior: "smooth" });
    }, M = () => {
      if (!h.value || !g.value) {
        k.value = !1, z.value = !1;
        return;
      }
      const { scrollLeft: v, scrollWidth: c, clientWidth: T } = h.value;
      k.value = v > 0, z.value = v < c - T - 10;
    };
    pe(
      () => t.modelValue,
      (v) => {
        x.value = v;
      }
    );
    let j = null;
    const le = () => {
      !h.value || !g.value || (Ae(M), h.value.addEventListener("scroll", M), typeof ResizeObserver < "u" && (j = new ResizeObserver(M), j.observe(h.value)));
    }, B = () => {
      h.value && h.value.removeEventListener("scroll", M), j && (j.disconnect(), j = null);
    };
    return pe(g, (v) => {
      B(), v && le();
    }), Ve(() => {
      g.value && le();
    }), Be(() => {
      B();
    }), (v, c) => (r(), a("div", {
      id: s.value,
      dir: y.value ? "rtl" : "ltr",
      class: m([
        e.vertical ? "flex flex-row gap-6" : "flex flex-col",
        e.scrollable && e.contentHeight ? e.contentHeight : "",
        e.scrollable ? "" : "h-auto"
      ])
    }, [
      f("div", {
        ref_key: "scrollContainer",
        ref: h,
        role: "tablist",
        "aria-orientation": e.vertical ? "vertical" : "horizontal",
        "aria-label": e.ariaLabel,
        class: m([
          "relative flex-shrink-0",
          u.value,
          $.value
        ])
      }, [
        f("div", {
          class: m([
            "flex",
            e.vertical ? "flex-col space-y-1" : e.scrollable ? "flex-row whitespace-nowrap" : "flex-row flex-wrap",
            S.value
          ])
        }, [
          (r(!0), a(se, null, de(o.value, (T, P) => (r(), a("button", {
            id: `tab-${s.value}-${P}`,
            key: P,
            role: "tab",
            type: "button",
            "aria-selected": x.value === P,
            "aria-controls": `panel-${s.value}-${P}`,
            tabindex: x.value === P ? 0 : -1,
            disabled: T.disabled || e.disabled,
            class: m([
              "relative inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-50",
              N.value,
              X(P)
            ]),
            onClick: (U) => ie(P),
            onKeydown: (U) => R(U, P)
          }, [
            T.icon ? (r(), Z(Ne(T.icon), {
              key: 0,
              class: m(A.value)
            }, null, 8, ["class"])) : b("", !0),
            f("span", null, I(T.label), 1),
            T.badge ? (r(), a("span", {
              key: 1,
              class: m([
                "inline-flex items-center justify-center rounded-full text-xs font-medium",
                Y.value,
                V(T)
              ])
            }, I(T.badge), 3)) : b("", !0),
            e.closable && !T.disabled ? (r(), a("button", {
              key: 2,
              type: "button",
              "aria-label": `Close ${T.label}`,
              class: "ml-1 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              onClick: ee((U) => O(P), ["stop"])
            }, [...c[2] || (c[2] = [
              f("svg", {
                class: "h-3.5 w-3.5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, Qa)) : b("", !0)
          ], 42, Ja))), 128))
        ], 2),
        !e.vertical && e.scrollable && e.showScrollButtons && (k.value || z.value) ? (r(), a("div", Za, [
          k.value ? (r(), a("button", {
            key: 0,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: c[0] || (c[0] = (T) => J(-1))
          }, [...c[3] || (c[3] = [
            f("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ])])) : b("", !0),
          z.value ? (r(), a("button", {
            key: 1,
            type: "button",
            class: "inline-flex items-center justify-center rounded-md h-7 w-7 ui-text-secondary hover:ui-text-primary hover:bg-color-3 transition-colors",
            onClick: c[1] || (c[1] = (T) => J(1))
          }, [...c[4] || (c[4] = [
            f("svg", {
              class: "h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ])])) : b("", !0)
        ])) : b("", !0)
      ], 10, Xa),
      f("div", {
        class: m(F.value)
      }, [
        (r(!0), a(se, null, de(o.value, (T, P) => (r(), a(se, { key: P }, [
          !e.lazy || x.value === P ? Ie((r(), a("div", {
            key: 0,
            id: `panel-${s.value}-${P}`,
            role: "tabpanel",
            "aria-labelledby": `tab-${s.value}-${P}`,
            tabindex: 0,
            class: m(["focus-visible:outline-none", G.value])
          }, [
            E(v.$slots, `content-${P}`, { tab: T }, () => [
              me(I(T.content), 1)
            ])
          ], 10, _a)), [
            [je, x.value === P]
          ]) : b("", !0)
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
        f("path", {
          d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
          stroke: "currentColor",
          "stroke-width": "2",
          fill: "currentColor"
        }, null, -1)
      ])])),
      f("span", ro, I(n.value ? "Switch to light mode" : "Switch to dark mode"), 1)
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
      class: m(["flex items-center justify-between gap-4", e.bg, e.border, q(Se)[e.rounded], e.padding, e.margin, e.width, e.height, e.elevation])
    }, [
      E(n.$slots, "title", {}, () => [
        e.title ? (r(), a("h1", {
          key: 0,
          class: m([n.textClass ?? "text-2xl font-semibold md:text-nowrap md:whitespace-nowrap"])
        }, I(e.title), 3)) : b("", !0)
      ]),
      E(n.$slots, "default")
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
      f("table", xe({ class: "w-full caption-bottom text-sm" }, n.$attrs), [
        E(n.$slots, "default")
      ], 16)
    ]));
  }
}), co = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "TableHead",
  setup(e) {
    return (n, t) => (r(), a("thead", xe({ class: "bg-color-1 [&_tr]:border-b [&_tr]:border-color-3" }, n.$attrs), [
      E(n.$slots, "default")
    ], 16));
  }
}), fo = /* @__PURE__ */ Te({
  inheritAttrs: !1,
  __name: "TableBody",
  setup(e) {
    return (n, t) => (r(), a("tbody", xe({ class: "[&_tr:last-child]:border-0 divide-y divide-color-3" }, n.$attrs), [
      E(n.$slots, "default")
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
      E(n.$slots, "default")
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
      onClick: x[0] || (x[0] = (h) => e.sortable ? l("sort") : void 0)
    }), [
      f("div", po, [
        E(s.$slots, "default"),
        e.sortable ? (r(), a("span", vo, [
          e.sortDirection === "asc" ? (r(), a("svg", yo, [...x[1] || (x[1] = [
            f("path", {
              "fill-rule": "evenodd",
              d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.sortDirection === "desc" ? (r(), a("svg", bo, [...x[2] || (x[2] = [
            f("path", {
              "fill-rule": "evenodd",
              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : (r(), a("svg", ho, [...x[3] || (x[3] = [
            f("path", { d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" }, null, -1),
            f("path", {
              "fill-rule": "evenodd",
              d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])]))
        ])) : b("", !0)
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
      E(l.$slots, "default")
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
      f("td", {
        colspan: e.colspan ?? 99,
        class: "px-4 py-12 text-center"
      }, [
        f("div", So, [
          n.$slots.icon ? b("", !0) : (r(), a("svg", Co, [...t[0] || (t[0] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75c-.621 0-1.125.504-1.125 1.125"
            }, null, -1)
          ])])),
          E(n.$slots, "icon"),
          f("span", $o, I(e.message ?? "No results found."), 1),
          E(n.$slots, "default")
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
    return (n, t) => (r(!0), a(se, null, de(e.rows ?? 5, (l) => (r(), a("tr", {
      key: l,
      class: "border-b border-color-3 animate-pulse"
    }, [
      (r(!0), a(se, null, de(e.cols ?? 4, (o) => (r(), a("td", {
        key: o,
        class: "px-4 py-3"
      }, [
        f("div", {
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
}, Oe = {
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
    const { language: t } = ge("i18n", { language: L("en"), t: (v) => v, setLanguage: () => {
    } }), l = nt(), o = n, s = e, x = ge("formContext", null), k = Ft()?.uid, z = L(!1), y = L(!1), g = L([]), u = L(!1), p = i(() => s.focused !== void 0 ? s.focused : z.value), d = i(() => {
      if (s.error === !0 || s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0) return !0;
      if (s.errorMessage && s.errorMessage !== "") {
        if (Array.isArray(s.errorMessage))
          return s.errorMessage.length > 0;
        if (typeof s.errorMessage == "string")
          return s.errorMessage.trim() !== "";
      }
      return !!(u.value && g.value && g.value.length > 0);
    }), C = i(() => s.required ? !0 : Array.isArray(s.rules) && s.rules.includes(ft.required)), w = i(() => s.modelValue === null || s.modelValue === void 0 || s.modelValue === "" ? !1 : Array.isArray(s.modelValue) ? s.modelValue.length > 0 : (typeof s.modelValue == "boolean", !0)), $ = i(() => {
      const v = [];
      return s.errorMessages && Array.isArray(s.errorMessages) && s.errorMessages.length > 0 && v.push(...s.errorMessages), s.errorMessage && (Array.isArray(s.errorMessage) && s.errorMessage.length > 0 ? v.push(...s.errorMessage) : typeof s.errorMessage == "string" && s.errorMessage.trim() !== "" && v.push(s.errorMessage)), u.value && g.value && g.value.length > 0 && v.push(...g.value), v;
    });
    function S() {
      if (g.value = [], !s.rules || s.rules.length === 0) return !0;
      for (const v of s.rules) {
        const c = v(s.modelValue);
        c !== !0 && g.value.push(c);
      }
      return g.value.length === 0;
    }
    const F = i(() => {
      let v = "";
      return s.dir == "rtl" || s.lang == "dv" ? v = "rtl" : s.dir == "ltr" || s.lang == "en" ? v = "ltr" : v = "", v;
    }), N = i(() => {
      let v = "";
      return s.lang != "" ? v = s.lang : s.dir == "rtl" ? v = "dv" : s.dir == "ltr" ? v = "en" : v = t.value, v === "dv" ? "dv" : "en";
    }), A = i(() => N.value == "dv" ? "faruma" : ""), Y = i(() => {
      let v = Ge(s.label, N.value, "");
      return typeof v == "object" && v !== null && "label" in v ? v : null;
    }), X = i(() => {
      const v = {
        disabled: s.disabled,
        readonly: s.readonly,
        value: s.modelValue,
        required: C.value,
        "aria-invalid": d.value,
        dir: F.value
      };
      return s.id && (v.id = s.id), v;
    }), V = {
      input: (v) => j(v.target ? v.target.value : v),
      focus: J,
      blur: M,
      change: (v) => o("change", v.target ? v.target.value : v)
    }, G = i(() => z.value || w.value || s.isOpen ? "-top-[1px]" : "top-[48%]"), ie = i(() => {
      let v = "", c = "";
      return s.size === "xs" ? (c = "text-xs", v = s.prepend || l.prepend ? "inset-4" : "inset-3") : s.size === "sm" ? (c = "text-sm", v = s.prepend || l.prepend ? "inset-8" : "inset-3") : s.size === "md" ? (c = "text-md", v = s.prepend || l.prepend ? "inset-10" : "inset-3") : s.size === "lg" ? (c = "text-lg", v = s.prepend || l.prepend ? "inset-12" : "inset-3") : s.size === "xl" ? (c = "text-lg", v = s.prepend || l.prepend ? "inset-14" : "inset-3") : (c = "text-sm", v = s.prepend || l.prepend ? "inset-8" : "inset-3"), (p.value || w.value || s.isOpen) && (N.value === "dv" ? v = "right-8" : v = "left-8", c = "text-xs"), v + " " + c;
    }), O = i(() => {
      const v = ["absolute flex gap-1 px-2 items-center transition-all pointer-events-none h-[1px]", ie.value, G.value];
      return p.value || w.value || s.isOpen ? v.push("bg-inherit") : v.push("bg-transparent"), d.value ? v.push("text-error") : p.value ? v.push("border-input-focus-border") : v.push("text-input-text"), v;
    }), R = i(() => {
      if (s.hideDetails) return [];
      if (d.value) return $.value;
      if (s.messages) {
        if (Array.isArray(s.messages))
          return s.messages.filter((v) => v && v.trim && v.trim() !== "");
        if (typeof s.messages == "string" && s.messages.trim() !== "")
          return [s.messages];
      }
      return s.hint && s.hint.trim() !== "" && (s.persistentHint || p.value) ? [s.hint] : [];
    });
    function J(v) {
      z.value = !0, o("focus", v);
    }
    function M(v) {
      if (z.value = !1, u.value = !0, x?.validateOn?.value) {
        const c = x.validateOn.value;
        if (c === "blur" || Array.isArray(c) && c.includes("blur")) {
          const P = S();
          x.validate && x.validate(k, P, g.value);
        }
      } else
        S();
      o("blur", v);
    }
    function j(v) {
      o("update:modelValue", v);
    }
    function le() {
      g.value = [], y.value = !1, u.value = !1;
    }
    const B = () => {
      const v = s.multiple ? [] : "";
      o("update:modelValue", v), o("change", v), o("click:clear");
    };
    return Ve(() => {
      x && x.register(k, {
        validate: () => {
          const v = S(), c = v ? [] : g.value;
          return x.validate && x.validate(k, v, c), v;
        },
        reset: () => {
          o("update:modelValue", s.multiple ? [] : ""), le();
        },
        resetValidation: () => {
          g.value = [], y.value = !1;
        }
      });
    }), pe(
      () => s.isOpen,
      (v, c) => {
        if (c === !0 && v === !1) {
          u.value = !0;
          const T = S();
          x?.validate && x.validate(k, T, g.value);
        }
      }
    ), Be(() => {
      x && x.unregister(k);
    }), (v, c) => {
      const T = ve("Icon");
      return r(), a("div", {
        dir: F.value !== "" ? F.value : "",
        class: m([A.value, e.margin, e.width, "group/select overflow-visible "])
      }, [
        f("div", {
          class: m([
            "relative border focus:outline-none transition cursor-pointer flex items-center justify-between gap-2 ",
            e.width,
            s.height || q(Jt)[e.size],
            q(vt)[e.size],
            d.value ? "border-red-500" : ` ${e.border}`,
            e.disabled ? "bg-color-2 cursor-not-allowed" : `${e.bg} ${e.hover} ${e.focus}`,
            e.isOpen && !d.value ? "border-color-4" : "",
            !e.isOpen && !d.value ? "border-color-2" : "",
            e.rounded ? q(Se)[e.rounded] : "",
            e.textColor
          ])
        }, [
          e.label ? (r(), a("div", {
            key: 0,
            class: m(O.value),
            "aria-hidden": "true"
          }, [
            me(I(Y.value ? Y.value.label : e.label) + " ", 1),
            C.value ? (r(), a("span", Vo, "*")) : b("", !0)
          ], 2)) : b("", !0),
          f("div", To, [
            v.$slots.prepend || e.prepend ? (r(), a("div", Mo, [
              E(v.$slots, "prepend", {}, () => [
                K(T, {
                  size: q(Pe)[e.size],
                  name: e.prepend,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : b("", !0),
            f("div", Lo, [
              E(v.$slots, "control", {
                attrs: X.value,
                events: V
              })
            ])
          ]),
          f("div", Ao, [
            e.clearable && w.value && !e.disabled ? (r(), a("button", {
              key: 0,
              class: "hover:text-input-focus-border text-input-text flex items-center invisible group-hover/select:visible transition-all cursor-pointer",
              title: "Clear selection",
              type: "button",
              onClick: ee(B, ["stop"])
            }, [...c[0] || (c[0] = [
              f("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-4"
              }, [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ])])) : b("", !0),
            v.$slots.append || e.append ? (r(), a("div", Po, [
              E(v.$slots, "append", {}, () => [
                K(T, {
                  size: q(Pe)[e.size],
                  name: e.append,
                  type: e.iconType == "outline" ? "outline" : "solid",
                  color: e.iconColor
                }, null, 8, ["size", "name", "type", "color"])
              ])
            ])) : b("", !0)
          ])
        ], 2),
        R.value.length ? (r(), a("div", {
          key: 0,
          class: m(["mt-1 text-xs", N.value === "dv" ? "text-right" : "text-left", "ui-text-secondary"])
        }, [
          (r(!0), a(se, null, de(R.value, (P, U) => (r(), a("div", {
            key: U,
            class: m(d.value ? "text-red-500" : "")
          }, I(q(Ge)(P, N.value, "")), 3))), 128))
        ], 2)) : b("", !0)
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
      let p;
      if (Array.isArray(t.modelValue)) {
        p = [...t.modelValue];
        const d = p.indexOf(t.value);
        d === -1 ? p.push(t.value) : p.splice(d, 1);
      } else
        p = t.modelValue === t.trueValue ? t.falseValue : t.trueValue;
      l("update:modelValue", p), l("change", p);
    }, x = i(() => {
      const p = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
      };
      return p[t.size] || p.md;
    }), h = i(() => {
      const p = {
        xs: "w-2.5 h-2.5",
        sm: "w-3 h-3",
        md: "w-3.5 h-3.5",
        lg: "w-4 h-4",
        xl: "w-5 h-5"
      };
      return p[t.size] || p.md;
    }), k = i(() => {
      const p = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      };
      return p[t.size] || p.md;
    }), z = i(() => {
      const p = {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      };
      return p[t.size] || p.md;
    }), y = i(() => {
      const p = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded",
        lg: "rounded-lg",
        full: "rounded-full"
      };
      return p[t.rounded] || p.md;
    }), g = i(() => {
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
    }), u = i(() => t.error ? o.value || t.indeterminate ? "bg-red-500 border-red-500" : "border-red-500 hover:border-red-600" : o.value || t.indeterminate ? g.value.checked : t.disabled ? "border-color-3 bg-color-2" : g.value.unchecked);
    return (p, d) => (r(), a("div", {
      class: m(["relative", e.margin])
    }, [
      f("label", {
        class: m([
          "inline-flex items-start gap-3 cursor-pointer select-none",
          e.disabled ? "opacity-50 cursor-not-allowed" : "",
          e.labelPosition === "left" ? "flex-row-reverse" : ""
        ]),
        onClick: ee(s, ["prevent"])
      }, [
        f("div", {
          class: m([
            "flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200",
            x.value,
            y.value,
            u.value,
            e.disabled ? "cursor-not-allowed" : "cursor-pointer"
          ])
        }, [
          K(ke, { name: "scale" }, {
            default: te(() => [
              o.value && !e.indeterminate ? (r(), a("svg", {
                key: 0,
                class: m(["text-white", h.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...d[0] || (d[0] = [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 13l4 4L19 7"
                }, null, -1)
              ])], 2)) : b("", !0)
            ]),
            _: 1
          }),
          K(ke, { name: "scale" }, {
            default: te(() => [
              e.indeterminate ? (r(), a("svg", {
                key: 0,
                class: m(["text-white", h.value]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...d[1] || (d[1] = [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "3",
                  d: "M5 12h14"
                }, null, -1)
              ])], 2)) : b("", !0)
            ]),
            _: 1
          })
        ], 2),
        e.label || e.description || p.$slots.default ? (r(), a("div", Do, [
          e.label || p.$slots.default ? (r(), a("span", {
            key: 0,
            class: m([
              "ui-text-color leading-tight",
              k.value
            ])
          }, [
            E(p.$slots, "default", {}, () => [
              me(I(e.label), 1)
            ], !0),
            e.required ? (r(), a("span", Eo, "*")) : b("", !0)
          ], 2)) : b("", !0),
          e.description ? (r(), a("span", {
            key: 1,
            class: m([
              "ui-text-secondary mt-0.5",
              z.value
            ])
          }, I(e.description), 3)) : b("", !0)
        ])) : b("", !0)
      ], 2),
      e.error ? (r(), a("p", Oo, I(typeof e.error == "string" ? e.error : ""), 1)) : b("", !0),
      e.hint && !e.error ? (r(), a("p", jo, I(e.hint), 1)) : b("", !0)
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
    }), s = i(() => t.rounded === "none" ? "rounded-none" : t.rounded === "sm" ? "rounded-sm" : t.rounded === "md" ? "rounded-md" : t.rounded === "lg" ? "rounded-lg" : t.rounded === "xl" ? "rounded-xl" : "rounded-full"), x = i(() => {
      if (t.bgColor || t.textColor || t.borderColor) {
        const w = t.bgColor || "bg-gray-100", $ = t.textColor || "text-gray-800", S = t.borderColor ? `border ${t.borderColor}` : "";
        return t.variant === "outlined" ? `bg-transparent ${$} border ${S || "border-gray-300"}` : `${w} ${$} ${S}`;
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
      }, C = d[t.color];
      return C && C[t.variant] ? C[t.variant] : t.color ? t.color : d.primary.default;
    }), h = i(() => {
      const d = "font-medium";
      return t.textClass ? `${d} ${t.textClass}` : d;
    }), k = i(() => {
      const d = {
        small: "w-3 h-3",
        default: "w-4 h-4",
        large: "w-5 h-5"
      };
      return d[t.size] || d.default;
    }), z = i(() => {
      const d = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return `${d[t.size] || d.default} rounded-full object-cover`;
    }), y = i(() => {
      const d = {
        small: "w-4 h-4",
        default: "w-5 h-5",
        large: "w-6 h-6"
      };
      return d[t.size] || d.default;
    }), g = i(() => {
      const d = {
        small: "w-2.5 h-2.5",
        default: "w-3 h-3",
        large: "w-3.5 h-3.5"
      };
      return d[t.size] || d.default;
    }), u = () => {
      !t.disabled && t.clickable && l("click");
    }, p = () => {
      t.disabled || l("close");
    };
    return (d, C) => (r(), a("div", {
      class: m([
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
      onClick: u,
      onKeydown: [
        be(u, ["enter"]),
        be(ee(u, ["prevent"]), ["space"])
      ]
    }, [
      d.$slots.prepend || e.avatar || e.prependIcon ? (r(), a("div", Ho, [
        E(d.$slots, "prepend", {}, () => [
          e.avatar ? (r(), a("img", {
            key: 0,
            src: e.avatar,
            alt: e.avatarAlt,
            class: m(z.value)
          }, null, 10, Uo)) : e.prependIcon ? (r(), Z(Ne(e.prependIcon), {
            key: 1,
            class: m(k.value)
          }, null, 8, ["class"])) : (r(), a("svg", {
            key: 2,
            class: m(k.value),
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [...C[0] || (C[0] = [
            f("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }, null, -1),
            f("path", { d: "M12 6v6l4 2" }, null, -1)
          ])], 2))
        ], !0)
      ])) : b("", !0),
      f("div", Fo, [
        f("span", {
          class: m(["truncate", h.value])
        }, [
          E(d.$slots, "default", {}, () => [
            me(I(e.label), 1)
          ], !0)
        ], 2)
      ]),
      d.$slots.append || e.appendIcon || e.closable ? (r(), a("div", qo, [
        E(d.$slots, "append", {}, () => [
          e.closable ? (r(), a("button", {
            key: 0,
            type: "button",
            class: m([
              "inline-flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-1",
              y.value
            ]),
            disabled: e.disabled,
            onClick: ee(p, ["stop"]),
            onKeydown: [
              be(ee(p, ["stop"]), ["enter"]),
              be(ee(p, ["stop", "prevent"]), ["space"])
            ]
          }, [
            (r(), a("svg", {
              class: m(g.value),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...C[1] || (C[1] = [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              }, null, -1)
            ])], 2))
          ], 42, Wo)) : e.appendIcon ? (r(), Z(Ne(e.appendIcon), {
            key: 1,
            class: m(k.value)
          }, null, 8, ["class"])) : b("", !0)
        ], !0)
      ])) : b("", !0)
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
      const y = {
        none: "gap-0",
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3",
        xl: "gap-4"
      };
      return y[t.gap] || y.md;
    }), s = i(() => {
      const y = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return y[t.justify] || y.start;
    }), x = (y, g) => typeof y == "object" && y[t.itemKey] ? y[t.itemKey] : typeof y == "object" && y.id ? y.id : g, h = (y) => typeof y == "string" ? y : typeof y == "object" ? y[t.itemText] || y.text || y.label || y.name || "" : String(y), k = (y, g) => {
      l("chip-click", { groupName: t.groupName, chip: y, index: g });
    }, z = (y, g) => {
      const u = [...t.chips];
      u.splice(g, 1), l("chip-close", { chip: y, index: g }), l("update:chips", u);
    };
    return (y, g) => (r(), a("div", {
      class: m([
        "flex flex-wrap",
        o.value,
        s.value,
        e.containerClass
      ]),
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      (r(!0), a(se, null, de(e.chips, (u, p) => (r(), Z(q(Ot), {
        key: x(u, p),
        label: h(u),
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
        onClick: (d) => k(u, p),
        onClose: (d) => z(u, p)
      }, Ue({ _: 2 }, [
        y.$slots.chip ? {
          name: "default",
          fn: te((d) => [
            E(y.$slots, "chip", xe({ ref_for: !0 }, { ...d, chip: u, index: p }), void 0, !0)
          ]),
          key: "0"
        } : void 0,
        y.$slots.prepend ? {
          name: "prepend",
          fn: te((d) => [
            E(y.$slots, "prepend", xe({ ref_for: !0 }, { ...d, chip: u, index: p }), void 0, !0)
          ]),
          key: "1"
        } : void 0,
        y.$slots.append ? {
          name: "append",
          fn: te((d) => [
            E(y.$slots, "append", xe({ ref_for: !0 }, { ...d, chip: u, index: p }), void 0, !0)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["label", "variant", "color", "size", "rounded", "clickable", "closable", "disabled", "avatar", "avatar-alt", "prepend-icon", "append-icon", "chip-class", "text-class", "bg-color", "text-color", "border-color", "onClick", "onClose"]))), 128))
    ], 10, Go));
  }
}, jt = /* @__PURE__ */ fe(Yo, [["__scopeId", "data-v-045fbbbb"]]), Xo = {
  class: /* @__PURE__ */ m(["flex-1", "flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
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
    const l = t, o = e, s = ge("parentDir", ""), x = ge("parentLang", "");
    ge("formContext", null);
    const h = i(() => o.dir || s), k = i(() => o.lang || x), z = i(() => {
      const B = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], v = {};
      return B.forEach((c) => {
        c in o && (v[c] = o[c]);
      }), v;
    }), y = L(!1), g = L(o.modelValue), u = L(""), p = L(null), d = L(null), C = L(null), w = L(!1), $ = L(!1), S = L({ position: "fixed", zIndex: 9999 }), F = () => {
      if (!d.value) return;
      const B = d.value.getBoundingClientRect();
      S.value = {
        position: "fixed",
        top: `${B.bottom + 4}px`,
        left: `${B.left}px`,
        zIndex: 9999
      };
    }, N = () => {
      y.value || (F(), y.value = !0, l("open"));
    }, A = (B, v) => {
      if (!B) return "";
      const c = new Date(B);
      if (isNaN(c.getTime())) return "";
      const T = c.getFullYear(), P = String(c.getMonth() + 1).padStart(2, "0"), U = String(c.getDate()).padStart(2, "0"), he = String(c.getHours()).padStart(2, "0"), re = String(c.getMinutes()).padStart(2, "0");
      String(c.getSeconds()).padStart(2, "0");
      let ye = v.replace("yyyy", T).replace("MM", P).replace("dd", U);
      return o.enableTimePicker && (ye += ` ${he}:${re}`), ye;
    }, Y = (B, v) => {
      if (!B) return null;
      const c = B.split(" "), T = c[0], P = c[1];
      let U = null;
      const he = v.includes("/") ? "/" : v.includes("-") ? "-" : "/", re = T.split(he);
      if (v.startsWith("dd") ? re.length >= 3 && (U = new Date(re[2], re[1] - 1, re[0])) : v.startsWith("MM") ? re.length >= 3 && (U = new Date(re[2], re[0] - 1, re[1])) : v.startsWith("yyyy") && re.length >= 3 && (U = new Date(re[0], re[1] - 1, re[2])), U && P && o.enableTimePicker) {
        const ye = P.split(":");
        ye.length >= 2 && (U.setHours(parseInt(ye[0], 10) || 0), U.setMinutes(parseInt(ye[1], 10) || 0), ye.length === 3 && U.setSeconds(parseInt(ye[2], 10) || 0));
      }
      return U;
    }, X = i(() => {
      if (!o.modelValue) return "";
      if (o.range) {
        if (!Array.isArray(o.modelValue)) return "";
        const [B, v] = o.modelValue;
        return !B || !v ? "" : `${A(B, o.format)} - ${A(v, o.format)}`;
      }
      return A(o.modelValue, o.format);
    });
    pe(() => o.modelValue, (B) => {
      g.value = B, u.value = X.value;
    }, { immediate: !0 }), pe(g, (B) => {
      B && !isNaN(new Date(B).getTime()) && !w.value && Ae(() => {
        u.value = A(B, o.format);
      });
    });
    const V = (B) => {
    }, G = (B) => {
      w.value = !0, u.value = B.target.value;
      const v = o.format.includes("/") ? "/" : o.format.includes("-") ? "-" : "/", c = u.value.split(" ")[0].split(v);
      if (c.length === 3 && c.every((T) => T.length > 0)) {
        let T;
        if (o.format.startsWith("dd") || o.format.startsWith("MM") ? T = c[2] : o.format.startsWith("yyyy") && (T = c[0]), T && T.length === 4) {
          const P = Y(u.value, o.format);
          P && !isNaN(P.getTime()) && (g.value = new Date(P.getTime()));
        }
      }
    }, ie = () => {
      $.value = !0, N();
    }, O = () => {
      $.value = !1;
      const B = w.value;
      if (w.value = !1, !B) {
        u.value = X.value;
        return;
      }
      if (!u.value) {
        le();
        return;
      }
      const v = Y(u.value, o.format);
      v && !isNaN(v.getTime()) ? (u.value = A(v, o.format), l("update:modelValue", v), l("change", v), g.value = v) : u.value = X.value;
    }, R = (B) => {
      g.value = B, l("update:modelValue", B), l("change", B), o.range ? Array.isArray(B) && B[0] && B[1] && (u.value = `${A(B[0], o.format)} - ${A(B[1], o.format)}`, J()) : (u.value = A(B, o.format), J());
    }, J = () => {
      y.value && (y.value = !1, l("close"));
    }, M = (B) => {
      const v = C.value;
      return !v || !B ? !1 : typeof B.composedPath == "function" ? B.composedPath().includes(v) : B.target instanceof Node && v.contains(B.target);
    }, j = (B) => {
      M(B) || J();
    }, le = () => {
      g.value = null, u.value = "", w.value = !1, l("update:modelValue", null), l("change", null), l("clear");
    };
    return n({
      close: J,
      open: N,
      clear: le
    }), (B, v) => Ie((r(), a("div", {
      ref_key: "containerRef",
      ref: d,
      class: m(["relative", e.width, e.margin])
    }, [
      K(q(Oe), xe(z.value, {
        "model-value": X.value,
        "onUpdate:modelValue": V,
        "onClick:clear": le,
        dir: h.value,
        lang: k.value,
        label: e.label,
        prepend: e.prepend || "calendar",
        append: e.append,
        isOpen: y.value,
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
        control: te(({ attrs: c, events: T }) => [
          f("div", Xo, [
            Ie(f("input", {
              ref_key: "inputRef",
              ref: p,
              "onUpdate:modelValue": v[0] || (v[0] = (P) => u.value = P),
              type: "text",
              placeholder: $.value ? e.placeholder : "",
              disabled: e.disabled,
              readonly: e.range,
              class: m([
                "w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                "focus:outline-none",
                "cursor-text"
              ]),
              onClick: v[1] || (v[1] = ee(() => {
              }, ["stop"])),
              onInput: G,
              onFocus: ie,
              onBlur: (P) => {
                O(), T.blur(P);
              }
            }, null, 40, Jo), [
              [mt, u.value]
            ])
          ])
        ]),
        prepend: te(() => [...v[3] || (v[3] = [])]),
        _: 1
      }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "size", "disabled", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
      (r(), Z(Xe, { to: "body" }, [
        K(ke, { name: "fade" }, {
          default: te(() => [
            y.value ? (r(), a("div", {
              key: 0,
              ref_key: "panelRef",
              ref: C,
              class: m([
                "w-fit",
                e.menuClass
              ]),
              style: ce({ ...S.value, ...e.menuStyle })
            }, [
              K(q(Gt), {
                modelValue: g.value,
                "onUpdate:modelValue": [
                  v[2] || (v[2] = (c) => g.value = c),
                  R
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
            ], 6)) : b("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2)), [
      [q(Mt), j]
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
    const t = e, l = n, o = L(null), s = L(!0), x = L(""), h = L([]), k = L([]), z = i(() => {
      const O = Array.isArray(t.errorMessages) ? t.errorMessages : [], R = Array.isArray(k.value) ? k.value : [];
      return [...O, ...R];
    });
    pe(
      () => t.modelValue,
      (O) => {
        h.value = y(O);
      },
      { immediate: !0 }
    );
    function y(O) {
      return (Array.isArray(O) ? O : []).map((J) => ({ file: J.file ?? J, preview: J.preview ?? null, _id: g() }));
    }
    function g() {
      return Math.random().toString(36).slice(2);
    }
    const u = i(() => [
      "w-full h-full flex items-center justify-between",
      "gap-2 sm:gap-3 px-2 sm:px-3",
      "cursor-pointer select-none transition",
      "bg-input-background"
    ]), p = i(() => {
      const O = t.accept && t.accept.length ? t.accept : "any file";
      return `${t.multiple ? "Upload multiple " : "Upload "}(${O}) • Max ${t.maxSizeMB}MB each`;
    });
    function d() {
      t.disabled || t.readonly || o.value?.click();
    }
    function C(O) {
      if (!O.target.files) return;
      const R = Array.from(O.target.files);
      N(R), O.target.value = "";
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
    function F(O) {
      if (s.value = !1, t.disabled) return;
      const R = O.dataTransfer, J = R ? Array.from(R.files || []) : [];
      l("drop", J), N(J);
    }
    function N(O) {
      k.value = [];
      const R = [], J = t.maxSizeMB * 1024 * 1024, M = V(t.accept);
      for (const B of O) {
        if (B.size > J) {
          k.value.push(`${B.name} exceeds ${t.maxSizeMB}MB`), l("error", { type: "size", file: B });
          continue;
        }
        if (M.size && !G(B, M)) {
          k.value.push(`${B.name} type not allowed`), l("error", { type: "type", file: B });
          continue;
        }
        R.push(B);
      }
      if (!R.length) return;
      const j = R.map((B) => ({ file: B, preview: A(B), _id: g() })), le = t.multiple ? h.value.concat(j) : j.slice(0, 1);
      h.value = le, l("select", R), l("update:modelValue", le.map((B) => ({ file: B.file, preview: B.preview }))), l("change", le.map((B) => B.file));
    }
    function A(O) {
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
    function X(O) {
      const R = h.value.splice(O, 1);
      l("remove", R[0]?.file), l("update:modelValue", h.value.map((J) => ({ file: J.file, preview: J.preview }))), l("change", h.value.map((J) => J.file));
    }
    function V(O) {
      const R = /* @__PURE__ */ new Set();
      return O && O.split(",").map((J) => J.trim()).filter(Boolean).forEach((J) => R.add(J.toLowerCase())), R;
    }
    function G(O, R) {
      if (!R || !R.size) return !0;
      const J = O.type.toLowerCase(), M = O.name.toLowerCase().split(".").pop();
      for (const j of R)
        if (j.includes("/")) {
          const [le, B] = j.split("/"), [v, c] = J.split("/");
          if (B === "*") {
            if (le === v) return !0;
          } else if (j === J)
            return !0;
        } else if (j.startsWith(".") && M && j.slice(1) === M)
          return !0;
      return !1;
    }
    function ie(O) {
      if (O < 1024) return `${O} B`;
      const R = O / 1024;
      return R < 1024 ? `${R.toFixed(1)} KB` : `${(R / 1024).toFixed(2)} MB`;
    }
    return (O, R) => {
      const J = ve("Icon"), M = ve("Button");
      return r(), a("div", {
        class: m([x.value, e.width])
      }, [
        K(q(Oe), xe(O.$props, {
          "persistent-hint": !!e.hint,
          error: z.value.length > 0,
          "is-open": s.value,
          clearable: !1
        }), {
          control: te(({ attrs: j }) => [
            f("div", {
              class: m(u.value),
              "aria-disabled": e.disabled,
              role: "button",
              tabindex: "0",
              onClick: d,
              onKeydown: [
                be(ee(d, ["prevent"]), ["enter"]),
                be(ee(d, ["prevent"]), ["space"])
              ],
              onDragenter: ee(w, ["prevent"]),
              onDragover: ee($, ["prevent"]),
              onDragleave: ee(S, ["prevent"]),
              onDrop: ee(F, ["prevent"])
            }, [
              f("input", {
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
              f("div", es, [
                K(J, {
                  name: "arrow-up-tray",
                  size: "16"
                }),
                f("div", ts, [
                  R[0] || (R[0] = f("div", { class: "text-sm text-input-text truncate" }, [
                    f("span", { class: "font-medium" }, "Click to upload"),
                    me(" or drag and drop ")
                  ], -1)),
                  f("div", ls, I(p.value), 1)
                ])
              ]),
              K(M, {
                type: "button",
                size: "xs",
                disabled: e.disabled,
                rounded: e.rounded,
                class: "px-3 py-1.5 text-sm text-primaryText"
              }, {
                default: te(() => [...R[1] || (R[1] = [
                  me(" Browse ", -1)
                ])]),
                _: 1
              }, 8, ["disabled", "rounded"])
            ], 42, Zo)
          ]),
          _: 1
        }, 16, ["persistent-hint", "error", "is-open"]),
        h.value.length ? (r(), a("div", ns, [
          (r(!0), a(se, null, de(h.value, (j, le) => (r(), a("div", {
            key: j._id,
            class: m(["flex items-center gap-3 p-2 border bg-color-1 ", e.border, e.rounded ? q(Se)[e.rounded] : "rounded-md"])
          }, [
            e.showPreview && Y(j.file) ? (r(), a("div", rs, [
              f("img", {
                src: j.preview,
                alt: "preview",
                class: "w-full h-full object-cover",
                loading: "lazy"
              }, null, 8, as)
            ])) : b("", !0),
            f("div", os, [
              f("div", ss, I(j.file.name), 1),
              f("div", is, I(ie(j.file.size)), 1)
            ]),
            f("button", {
              type: "button",
              class: "text-input-text hover:text-input-focus",
              onClick: (B) => X(le)
            }, [...R[2] || (R[2] = [
              f("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-5"
              }, [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18 18 6M6 6l12 12"
                })
              ], -1)
            ])], 8, us)
          ], 2))), 128))
        ])) : b("", !0)
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
    const l = t, o = e, s = ge("parentDir", ""), x = ge("parentLang", ""), h = i(() => o.dir || s), k = i(() => o.lang || x), z = i(() => {
      const c = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], T = {};
      return c.forEach((P) => {
        P in o && (T[P] = o[P]);
      }), T;
    }), y = L(null), g = L(!1), u = L(null), p = L(null), d = i(() => {
      if (o.modelValue === null || o.modelValue === "" || o.modelValue === void 0)
        return null;
      const c = parseFloat(o.modelValue);
      return isNaN(c) ? null : c;
    }), C = i(() => d.value !== null && d.value <= o.min), w = i(() => d.value !== null && d.value >= o.max), $ = i(() => ({
      left: "text-left",
      center: "text-center",
      right: "text-right"
    })[o.align] || "text-left"), S = i(() => {
      const c = {
        xs: { button: "w-6 h-6", icon: "12", stackedButton: "px-1.5", stackedIcon: "10", affix: "text-xs px-1" },
        sm: { button: "w-7 h-7", icon: "14", stackedButton: "px-2", stackedIcon: "12", affix: "text-sm px-1.5" },
        md: { button: "w-8 h-8", icon: "16", stackedButton: "px-2.5", stackedIcon: "14", affix: "text-sm px-2" },
        lg: { button: "w-9 h-9", icon: "18", stackedButton: "px-3", stackedIcon: "16", affix: "text-base px-2" },
        xl: { button: "w-10 h-10", icon: "20", stackedButton: "px-3.5", stackedIcon: "18", affix: "text-lg px-2.5" }
      };
      return c[o.size] || c.md;
    }), F = i(() => {
      if (d.value === null) return "";
      let c = d.value;
      if (o.precision !== void 0 ? c = c.toFixed(o.precision) : c = String(c), o.thousandSeparator) {
        const T = o.thousandSeparator === !0 ? "," : o.thousandSeparator, P = c.split(".");
        P[0] = P[0].replace(/\B(?=(\d{3})+(?!\d))/g, T), c = P.join(o.decimalSeparator);
      } else o.decimalSeparator !== "." && (c = c.replace(".", o.decimalSeparator));
      return c;
    }), N = i(() => o.label && (!g.value || F.value) ? "" : o.placeholder), A = (c) => {
      if (c === "" || c === null || c === void 0) return null;
      let T = String(c);
      if (o.thousandSeparator) {
        const U = o.thousandSeparator === !0 ? "," : o.thousandSeparator;
        T = T.split(U).join("");
      }
      o.decimalSeparator !== "." && (T = T.replace(o.decimalSeparator, "."));
      const P = parseFloat(T);
      return isNaN(P) ? null : P;
    }, Y = (c) => c === null ? null : Math.min(Math.max(c, o.min), o.max), X = (c) => c === null || o.precision === void 0 ? c : parseFloat(c.toFixed(o.precision)), V = (c) => {
      if (c === "-" || c === o.decimalSeparator || c === "-" + o.decimalSeparator)
        return;
      const T = A(c);
      g.value || J(T);
    }, G = (c) => {
      g.value = !1;
      const T = c.target.value;
      let P = A(T);
      P !== null && (P = Y(P), P = X(P)), l("update:modelValue", P), l("blur", c), l("change", P);
    }, ie = (c) => {
      g.value = !0, l("focus", c);
    }, O = (c) => {
      if (o.disabled || o.readonly) return;
      c.key === "ArrowUp" ? (c.preventDefault(), M()) : c.key === "ArrowDown" ? (c.preventDefault(), j()) : c.key === "Enter" && G(c);
      const T = ["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"], P = /^[0-9]$/.test(c.key), U = c.key === o.decimalSeparator || c.key === ".", he = c.key === "-" && o.allowNegative, re = c.ctrlKey || c.metaKey;
      !T.includes(c.key) && !P && !U && !he && !re && c.preventDefault();
    }, R = (c) => {
      !o.mouseWheel || o.disabled || o.readonly || !g.value || (c.preventDefault(), c.deltaY < 0 ? M() : j());
    }, J = (c) => {
      c !== null && (c = Y(c), c = X(c)), l("update:modelValue", c), l("change", c);
    }, M = () => {
      if (o.disabled || o.readonly || w.value) return;
      let c = (d.value ?? 0) + o.step;
      c = Y(c), c = X(c), l("update:modelValue", c), l("change", c);
    }, j = () => {
      if (o.disabled || o.readonly || C.value) return;
      let c = (d.value ?? 0) - o.step;
      c = Y(c), c = X(c), l("update:modelValue", c), l("change", c);
    }, le = (c) => {
      o.disabled || o.readonly || (p.value = setTimeout(() => {
        u.value = setInterval(() => {
          c === "increment" ? M() : j();
        }, 75);
      }, 400));
    }, B = () => {
      p.value && (clearTimeout(p.value), p.value = null), u.value && (clearInterval(u.value), u.value = null);
    }, v = () => {
      l("update:modelValue", null), l("change", null);
    };
    return n({
      focus: () => y.value?.focus(),
      blur: () => y.value?.blur(),
      select: () => y.value?.select(),
      increment: M,
      decrement: j
    }), (c, T) => {
      const P = ve("Icon");
      return r(), Z(q(Oe), xe(z.value, {
        "model-value": F.value,
        "onUpdate:modelValue": V,
        "onClick:clear": v,
        dir: h.value,
        lang: k.value,
        readonly: e.readonly,
        disabled: e.disabled,
        clearable: e.clearable,
        focused: g.value
      }), Ue({
        control: te(({ attrs: U, events: he }) => [
          f("div", gs, [
            e.showControls && e.controlsPosition === "stacked-left" ? (r(), a("div", ms, [
              f("button", {
                type: "button",
                disabled: e.disabled || w.value,
                class: m([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  S.value.stackedButton,
                  e.disabled || w.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: M,
                onMousedown: T[4] || (T[4] = (re) => le("increment")),
                onMouseup: B,
                onMouseleave: B
              }, [
                K(P, {
                  name: "chevron-up",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, ps),
              f("button", {
                type: "button",
                disabled: e.disabled || C.value,
                class: m([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  S.value.stackedButton,
                  e.disabled || C.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: j,
                onMousedown: T[5] || (T[5] = (re) => le("decrement")),
                onMouseup: B,
                onMouseleave: B
              }, [
                K(P, {
                  name: "chevron-down",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, vs)
            ])) : b("", !0),
            e.prefix ? (r(), a("span", {
              key: 1,
              class: m(["ui-text-secondary select-none", S.value.affix])
            }, I(e.prefix), 3)) : b("", !0),
            f("input", {
              ref_key: "inputRef",
              ref: y,
              value: F.value,
              type: "text",
              inputmode: "decimal",
              placeholder: N.value,
              disabled: e.disabled,
              readonly: e.readonly,
              class: m([
                "flex-1 w-full bg-transparent outline-none border-none",
                "placeholder:text-gray-400",
                $.value,
                e.disabled ? "cursor-not-allowed" : "",
                e.readonly ? "cursor-default" : ""
              ]),
              onInput: T[6] || (T[6] = (re) => V(re.target.value)),
              onBlur: (re) => {
                G(re), he.blur?.(re);
              },
              onFocus: (re) => {
                ie(re), he.focus?.(re);
              },
              onKeydown: O,
              onWheel: R
            }, null, 42, ys),
            e.suffix ? (r(), a("span", {
              key: 2,
              class: m(["ui-text-secondary select-none", S.value.affix])
            }, I(e.suffix), 3)) : b("", !0),
            e.showControls && e.controlsPosition === "stacked-right" ? (r(), a("div", bs, [
              f("button", {
                type: "button",
                disabled: e.disabled || w.value,
                class: m([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3 border-b border-color-3",
                  S.value.stackedButton,
                  e.disabled || w.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: M,
                onMousedown: T[7] || (T[7] = (re) => le("increment")),
                onMouseup: B,
                onMouseleave: B
              }, [
                K(P, {
                  name: "chevron-up",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, hs),
              f("button", {
                type: "button",
                disabled: e.disabled || C.value,
                class: m([
                  "flex-1 flex items-center justify-center transition-colors",
                  "hover:bg-color-3",
                  S.value.stackedButton,
                  e.disabled || C.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                ]),
                onClick: j,
                onMousedown: T[8] || (T[8] = (re) => le("decrement")),
                onMouseup: B,
                onMouseleave: B
              }, [
                K(P, {
                  name: "chevron-down",
                  size: S.value.stackedIcon
                }, null, 8, ["size"])
              ], 42, xs)
            ])) : b("", !0)
          ])
        ]),
        _: 2
      }, [
        e.showControls && e.controlsPosition === "sides" ? {
          name: "prepend",
          fn: te(() => [
            f("button", {
              type: "button",
              disabled: e.disabled || C.value,
              class: m([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-l",
                S.value.button,
                e.disabled || C.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: j,
              onMousedown: T[0] || (T[0] = (U) => le("decrement")),
              onMouseup: B,
              onMouseleave: B,
              onTouchstart: T[1] || (T[1] = ee((U) => le("decrement"), ["prevent"])),
              onTouchend: B
            }, [
              K(P, {
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
            f("button", {
              type: "button",
              disabled: e.disabled || w.value,
              class: m([
                "flex items-center justify-center transition-colors",
                "hover:bg-color-3 rounded-r",
                S.value.button,
                e.disabled || w.value ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              ]),
              onClick: M,
              onMousedown: T[2] || (T[2] = (U) => le("increment")),
              onMouseup: B,
              onMouseleave: B,
              onTouchstart: T[3] || (T[3] = ee((U) => le("increment"), ["prevent"])),
              onTouchend: B
            }, [
              K(P, {
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
    const l = e, o = ge("parentDir", ""), s = ge("parentLang", ""), x = i(() => l.dir || o), h = i(() => l.lang || s), k = L(!1), z = i(() => k.value ? "text" : "password"), y = i(() => {
      const X = ["label", "hint", "persistentHint", "disabled", "readonly", "required", "error", "errorMessages", "clearable", "size", "id", "prepend", "append", "isOpen", "bg", "border", "textColor", "rounded", "dir", "lang", "width", "rules", "errorMessage", "messages", "hideDetails", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], V = {};
      return X.forEach((G) => {
        G in l && (V[G] = l[G]);
      }), V;
    }), g = t, u = L(null), p = L(null), d = L(!1), C = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), w = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), $ = (X) => {
      const V = X.target.value;
      g("update:modelValue", V);
    }, S = (X) => {
      d.value = !0, g("focus", X);
    }, F = (X) => {
      d.value = !1, g("blur", X);
    }, N = (X) => {
      g("enter", l.modelValue);
    }, A = () => {
      g("update:modelValue", ""), g("clear"), u.value?.focus();
    };
    return n({ focus: () => {
      u.value?.focus();
    }, clear: A }), (X, V) => {
      const G = ve("Icon");
      return r(), a("div", {
        ref_key: "containerRef",
        ref: p,
        class: m(["relative", e.containerClass, e.width])
      }, [
        K(q(Oe), xe(y.value, {
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
          "is-open": d.value,
          "onClick:clear": A,
          bg: e.bg,
          border: e.border,
          "text-color": e.textColor,
          rounded: e.rounded,
          dir: x.value,
          lang: h.value,
          width: e.width,
          rules: e.rules
        }), Ue({
          control: te(({ attrs: ie, events: O }) => [
            f("div", ks, [
              e.prefix ? (r(), a("span", Ss, I(e.prefix), 1)) : b("", !0),
              f("input", xe({
                ref_key: "inputRef",
                ref: u
              }, ie, pt(O, !0), {
                type: e.type === "password" ? z.value : e.type,
                value: e.modelValue,
                placeholder: d.value && !e.modelValue ? e.placeholder : "",
                class: w.value,
                onInput: $,
                onKeydown: be(N, ["enter"]),
                onFocus: S,
                onBlur: F
              }), null, 16, Cs),
              e.suffix ? (r(), a("span", $s, I(e.suffix), 1)) : b("", !0)
            ])
          ]),
          _: 2
        }, [
          e.loading || e.type === "password" ? {
            name: "append",
            fn: te(() => [
              e.type === "password" && k.value ? (r(), Z(G, {
                key: 0,
                onClick: V[0] || (V[0] = (ie) => k.value = !1),
                size: q(Pe)[e.size],
                name: "eye",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : b("", !0),
              e.type === "password" && !k.value ? (r(), Z(G, {
                key: 1,
                onClick: V[1] || (V[1] = (ie) => k.value = !0),
                size: q(Pe)[e.size],
                name: "eye-slash",
                type: e.iconType == "outline" ? "outline" : "solid"
              }, null, 8, ["size", "type"])) : b("", !0),
              e.loading ? (r(), a("svg", zs, [...V[2] || (V[2] = [
                f("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                f("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : b("", !0)
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
    const l = e, o = ge("parentDir", ""), s = ge("parentLang", ""), x = i(() => l.dir || o), h = i(() => l.lang || s), k = t, z = L(null), y = L(null), g = L(!1);
    let u = null;
    const p = i(() => l.id || `search-${Math.random().toString(36).substr(2, 9)}`), d = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), C = (A) => {
      const Y = A.target.value;
      k("update:modelValue", Y), clearTimeout(u), u = setTimeout(() => {
        k("input", Y), k("search", Y);
      }, l.debounce);
    }, w = (A) => {
      g.value = !0, k("focus", A);
    }, $ = (A) => {
      g.value = !1, k("blur", A);
    }, S = (A) => {
      k("enter", l.modelValue), k("search", l.modelValue);
    }, F = () => {
      k("update:modelValue", ""), k("clear"), z.value?.focus();
    }, N = () => {
      z.value?.focus();
    };
    return Be(() => {
      clearTimeout(u);
    }), n({ focus: N, clear: F }), (A, Y) => (r(), a("div", {
      ref_key: "containerRef",
      ref: y,
      class: m(["relative", e.containerClass, e.width])
    }, [
      K(q(Oe), {
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
        id: p.value,
        prepend: e.prepend,
        append: e.append,
        "is-open": g.value,
        "onClick:clear": F,
        bg: e.bg,
        border: e.border,
        "text-color": e.textColor,
        rounded: e.rounded,
        dir: x.value,
        lang: h.value,
        width: e.width,
        rules: e.rules
      }, Ue({
        control: te(({ attrs: X, events: V }) => [
          f("input", xe({
            ref_key: "inputRef",
            ref: z
          }, X, pt(V, !0), {
            type: "search",
            value: e.modelValue,
            placeholder: g.value && !e.modelValue || !e.label && !e.modelValue ? e.placeholder : "",
            class: d.value,
            onInput: C,
            onKeydown: be(S, ["enter"]),
            onFocus: w,
            onBlur: $
          }), null, 16, Bs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            Y[0] || (Y[0] = f("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              f("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              f("path", {
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
  class: /* @__PURE__ */ m(["flex", "items-center", "gap-2", "justify-between", "w-full", "h-full"])
}, Ms = ["id", "disabled", "required", "dir", "placeholder"], Ls = {
  key: 0,
  class: /* @__PURE__ */ m(["absolute left-0 right-8 px-3 truncate pointer-events-none text-gray-400"])
}, As = {
  key: 1,
  class: /* @__PURE__ */ m(["absolute left-0 right-8 px-3 truncate pointer-events-none"])
}, Ps = {
  key: 2,
  class: "absolute inset-y-0 left-3 right-14 flex items-center gap-1 overflow-hidden"
}, Ds = { class: "truncate max-w-[100px]" }, Es = { class: "p-1.5" }, Os = {
  key: 0,
  class: /* @__PURE__ */ m(["px-2.5 py-1.5 ui-text-secondary text-center text-sm rounded-lg"])
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
    const l = t, o = L(""), s = L(null), x = L(null), h = L(null), k = L({ position: "fixed" });
    L("");
    const z = L(!1), y = L(!1), g = L(null), u = L([]);
    L([]);
    const p = e, d = ge("parentDir", ""), C = ge("parentLang", ""), w = ge("formContext", null), $ = ge("api", null), S = i(() => p.dir || d), F = i(() => p.lang || C), N = i(() => {
      const H = ["modelValue", "label", "dir", "placeholder", "prepend", "append", "disabled", "readonly", "required", "clearable", "multiple", "errorMessages", "rounded", "size", "border", "textColor", "bg", "width", "hint", "lang", "rules", "error", "errorMessage", "messages", "hideDetails", "id", "height", "margin", "hover", "focus", "bgColorVariant", "borderColorVariant", "textColorVariant", "labelTextSize", "iconType", "labelTextColor"], Q = {};
      return H.forEach((ae) => {
        ae in p && (Q[ae] = p[ae]);
      }), Q;
    }), A = L(!1), Y = i(() => p.url && u.value.length > 0 ? u.value : p.items), X = async () => {
      if (p.url && !(p.cacheItems && u.value.length > 0)) {
        y.value = !0, g.value = null;
        try {
          let H;
          if ($)
            H = await $.get(p.url);
          else {
            const ue = await fetch(p.url);
            if (!ue.ok) throw new Error(`HTTP error! status: ${ue.status}`);
            H = { data: await ue.json() };
          }
          const Q = H.data;
          let ae = null;
          if (Array.isArray(Q))
            ae = Q;
          else if (Q.data && Array.isArray(Q.data))
            ae = Q.data;
          else if (Q.items && Array.isArray(Q.items))
            ae = Q.items;
          else if (Q.results && Array.isArray(Q.results))
            ae = Q.results;
          else
            for (const ue in Q)
              if (Array.isArray(Q[ue])) {
                ae = Q[ue];
                break;
              }
          if (!ae)
            throw new Error("No array found in response");
          u.value = ae;
        } catch (H) {
          console.error("Error fetching items:", H), g.value = H.message || "Failed to load items";
        } finally {
          y.value = !1;
        }
      }
    };
    Ve(() => {
      p.eager && p.url && X();
    });
    const V = (H) => {
      z.value = !0, l("focus", H);
    }, G = (H) => {
      z.value = !1, l("blur", H);
    }, ie = (H) => {
      l("update:modelValue", H);
    }, O = (H) => {
      l("enter", p.modelValue), l("search", p.modelValue);
    }, R = () => {
      re(), s.value?.focus();
    }, J = i(() => [
      "bg-transparent outline-none border-none flex-1 min-w-0 max-w-auto",
      "placeholder:text-neutral-300",
      "focus:outline-none",
      // For multiple select with badges, make input flexible to fit remaining space
      p.multiple && M.value.length > 0 ? "flex-1 min-w-0" : "w-full",
      !p.multiple && j.value && !o.value ? "text-transparent" : "",
      p.searchable ? "cursor-text" : "no-caret invisible cursor-pointer"
    ]), M = i(() => p.multiple ? Array.isArray(p.modelValue) ? p.modelValue : [] : p.modelValue !== null && p.modelValue !== void 0 ? [p.modelValue] : []), j = i(() => {
      const H = Y.value.find((Q) => String(v(Q)) === String(p.modelValue));
      return H ? B(H) : "";
    });
    i(() => p.multiple ? M.value.length > 0 ? `${M.value.length} selected` : "" : j.value);
    const le = i(() => o.value ? Y.value.filter((H) => B(H).toLowerCase().includes(o.value.toLowerCase())) : Y.value), B = (H) => H ? typeof H == "string" || typeof H == "number" ? H.toString() : typeof p.itemTitle == "function" ? p.itemTitle(H) : H[p.itemTitle] || "" : "", v = (H) => {
      if (!H) return "";
      if (typeof H == "string" || typeof H == "number") return H;
      if (typeof p.itemValue == "function") return p.itemValue(H);
      const Q = H[p.itemValue];
      return Q !== void 0 ? Q : H;
    }, c = (H) => {
      const Q = Y.value.find((ae) => String(v(ae)) === String(H));
      return Q ? B(Q) : H.toString();
    }, T = (H) => M.value.some((Q) => String(Q) === String(H)), P = (H) => {
      const Q = p.returnObject ? H : v(H);
      if (p.multiple) {
        let ae = [...M.value];
        const ue = v(H), ze = ae.findIndex((Ce) => String(Ce) === String(ue));
        ze > -1 ? ae.splice(ze, 1) : ae.push(ue), l("update:modelValue", ae);
      } else
        l("update:modelValue", Q), l("change", Q), l("select", H), A.value = !1, o.value = "";
    }, U = (H) => {
      if (!p.multiple) {
        De();
        return;
      }
      De();
    }, he = (H) => {
      if (p.multiple) {
        const Q = M.value.filter((ae) => String(ae) !== String(H));
        l("update:modelValue", Q), l("change", Q);
      }
    }, re = () => {
      const H = p.multiple ? [] : "";
      l("update:modelValue", H), l("change", H), l("clear");
    }, ye = async () => {
      p.disabled || (A.value = !A.value, A.value ? (p.url && !p.eager && await X(), l("open"), p.searchable && Ae(() => {
        s.value?.focus();
      })) : (l("close"), o.value = ""));
    }, De = () => {
      if (A.value = !1, o.value = "", w?.validateOn?.value) {
        const H = w.validateOn.value;
        (H === "blur" || Array.isArray(H) && H.includes("blur")) && Ae(() => {
        });
      }
      l("close");
    };
    pe(A, async (H) => {
      if (!H) {
        o.value = "";
        return;
      }
      await Ae(), rt();
    });
    function rt() {
      if (!x.value) return;
      const H = x.value.getBoundingClientRect(), Q = 4, ae = window.innerHeight - H.bottom - Q, ue = H.top - Q, ze = 80, Ce = ae < ze && ue > ae;
      k.value = {
        position: "fixed",
        left: `${H.left}px`,
        width: p.dropdownWidth || `${H.width}px`,
        zIndex: 9999,
        overflowY: "auto",
        ...Ce ? {
          bottom: `${window.innerHeight - H.top + Q}px`,
          maxHeight: `${Math.min(ue, 240)}px`
        } : {
          top: `${H.bottom + Q}px`,
          maxHeight: `${Math.max(Math.min(ae, 240), ze)}px`
        }
      };
    }
    return n({
      close: De,
      open: () => ye(),
      clear: re,
      refresh: X,
      focus: () => {
        p.searchable && A.value && s.value?.focus();
      }
    }), (H, Q) => {
      const ae = ve("Icon");
      return Ie((r(), a("div", {
        ref_key: "triggerRef",
        ref: x,
        class: m(["relative group", e.width, e.margin])
      }, [
        K(q(Oe), xe(N.value, {
          "model-value": e.modelValue,
          "onUpdate:modelValue": ie,
          dir: S.value,
          lang: F.value,
          label: e.label,
          prepend: e.prepend,
          append: e.append,
          isOpen: A.value,
          size: e.size,
          onClick: ye,
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
          control: te(({ attrs: ue, events: ze }) => [
            f("div", Ts, [
              Ie(f("input", {
                "onUpdate:modelValue": Q[0] || (Q[0] = (Ce) => o.value = Ce),
                id: ue.id,
                disabled: ue.disabled,
                required: ue.required,
                dir: ue.dir,
                type: "text",
                size: "1",
                placeholder: z.value && !o.value && !j.value || !o.value && !e.label ? e.placeholder : "",
                class: m(J.value),
                onFocus: V,
                onBlur: G,
                onKeydown: be(O, ["enter"])
              }, null, 42, Ms), [
                [mt, o.value]
              ]),
              !j.value && !e.multiple && !o.value && !e.label ? (r(), a("div", Ls, I(e.placeholder), 1)) : b("", !0),
              j.value && !e.multiple && !o.value ? (r(), a("div", As, I(j.value), 1)) : b("", !0),
              e.multiple && M.value.length > 0 ? (r(), a("div", Ps, [
                M.value.length < 2 ? (r(!0), a(se, { key: 0 }, de(M.value, (Ce) => (r(), a("div", { key: Ce }, [
                  f("div", {
                    class: m(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap", e.textColor, e.border, e.rounded ? q(Se)[e.rounded] : ""])
                  }, [
                    f("div", Ds, I(c(Ce)), 1),
                    K(ae, {
                      onClick: ee((bt) => he(Ce), ["stop"]),
                      name: "x-mark",
                      type: "outline",
                      size: "10",
                      color: "text-current"
                    }, null, 8, ["onClick"])
                  ], 2)
                ]))), 128)) : (r(), a("div", {
                  key: 1,
                  class: m(["px-2 py-0.5 text-xs flex items-center gap-1 border border-dashed whitespace-nowrap flex-shrink-0", e.textColor, e.border, e.rounded ? q(Se)[e.rounded] : ""])
                }, [
                  f("div", null, I(M.value.length) + " selected", 1)
                ], 2))
              ])) : b("", !0)
            ])
          ]),
          append: te(() => [
            e.append ? (r(), Z(ae, {
              key: 1,
              name: e.append,
              type: "outline",
              size: "16",
              class: "text-input-border"
            }, null, 8, ["name"])) : (r(), Z(ae, {
              key: 0,
              name: "chevron-down",
              type: "outline",
              size: "16",
              class: m(["transition-transform duration-200", A.value ? "rotate-180" : "", "text-input-border"])
            }, null, 8, ["class"]))
          ]),
          _: 1
        }, 16, ["model-value", "dir", "lang", "label", "prepend", "append", "isOpen", "size", "disabled", "readonly", "required", "bg", "border", "text-color", "rounded", "width", "hint", "persistent-hint", "rules"]),
        (r(), Z(Xe, { to: "body" }, [
          K(ke, { name: "fade" }, {
            default: te(() => [
              A.value ? (r(), a("div", {
                key: 0,
                ref_key: "dropdownRef",
                ref: h,
                class: m([
                  "shadow-lg z-[9999] overflow-hidden",
                  e.bg ?? "ui-bg-color",
                  e.border ? "border " + e.border : "border border-color",
                  e.rounded ? q(Se)[e.rounded] : "rounded-lg",
                  e.menuClass
                ]),
                style: ce({ ...k.value, ...e.menuStyle })
              }, [
                f("ul", Es, [
                  le.value.length === 0 ? (r(), a("li", Os, [
                    E(H.$slots, "no-data", {}, () => [
                      Q[2] || (Q[2] = me("No items found", -1))
                    ], !0)
                  ])) : b("", !0),
                  (r(!0), a(se, null, de(le.value, (ue, ze) => (r(), a("li", {
                    key: v(ue),
                    onMousedown: (Ce) => {
                      Ce.preventDefault(), P(ue);
                    },
                    class: m([
                      "px-2.5 py-1.5 cursor-pointer transition flex items-center text-sm rounded-lg ui-text-color",
                      T(v(ue)) ? e.selectedItemClass || "bg-primary/10 text-primary font-medium" : e.itemClass || "hover:bg-color-1",
                      e.itemHoverClass
                    ])
                  }, [
                    E(H.$slots, "item", {
                      item: ue,
                      index: ze,
                      selected: T(v(ue))
                    }, () => [
                      f("div", Ns, [
                        e.multiple ? (r(), Z(q(Et), {
                          key: 0,
                          "model-value": T(v(ue)),
                          value: ze,
                          label: B(ue),
                          required: !1,
                          error: !1,
                          onClick: Q[1] || (Q[1] = ee(() => {
                          }, ["stop"]))
                        }, null, 8, ["model-value", "value", "label"])) : b("", !0),
                        e.multiple ? b("", !0) : (r(), a("span", Rs, I(B(ue)), 1)),
                        !e.multiple && T(v(ue)) ? (r(), a("svg", Hs, [...Q[3] || (Q[3] = [
                          f("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.5 12.75l6 6 9-13.5"
                          }, null, -1)
                        ])])) : b("", !0)
                      ])
                    ], !0)
                  ], 42, js))), 128))
                ])
              ], 6)) : b("", !0)
            ]),
            _: 3
          })
        ]))
      ], 2)), [
        [q(Mt), [U, { ignore: [h.value] }]]
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
    const l = e, o = ge("parentDir", ""), s = ge("parentLang", ""), x = i(() => l.dir || o), h = i(() => l.lang || s), k = t, z = L(null), y = L(null), g = L(!1), u = i(() => l.id || `input-${Math.random().toString(36).substr(2, 9)}`), p = i(() => [
      "w-full bg-transparent outline-none border-none",
      "placeholder:text-gray-400",
      "focus:outline-none"
    ]), d = (N) => {
      const A = N.target.value;
      k("update:modelValue", A);
    }, C = (N) => {
      g.value = !0, k("focus", N);
    }, w = (N) => {
      g.value = !1, k("blur", N);
    }, $ = (N) => {
      k("enter", l.modelValue);
    }, S = () => {
      k("update:modelValue", ""), k("clear"), z.value?.focus();
    };
    return n({ focus: () => {
      z.value?.focus();
    }, clear: S }), (N, A) => (r(), a("div", {
      ref_key: "containerRef",
      ref: y,
      class: m(["relative", e.containerClass, e.width])
    }, [
      K(q(Oe), xe(N.$props, {
        "model-value": e.modelValue,
        error: !!e.error || e.errorMessages.length > 0,
        clearable: e.clearable && !e.loading,
        id: u.value,
        "is-open": g.value,
        "onClick:clear": S,
        dir: x.value,
        lang: h.value,
        rules: e.rules
      }), Ue({
        control: te(({ attrs: Y, events: X }) => [
          f("textarea", xe({
            ref_key: "inputRef",
            ref: z
          }, Y, pt(X, !0), {
            type: "text",
            value: e.modelValue,
            placeholder: g.value && !e.modelValue ? e.placeholder : "",
            class: p.value,
            rows: e.rows,
            maxlength: e.maxlength,
            onInput: d,
            onKeydown: be($, ["enter"]),
            onFocus: C,
            onBlur: w
          }), null, 16, qs)
        ]),
        _: 2
      }, [
        e.loading ? {
          name: "append",
          fn: te(() => [
            A[0] || (A[0] = f("svg", {
              class: "animate-spin h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              f("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              f("path", {
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
    const n = e, t = qt(), l = (u) => u.replace(/-([a-z])/g, (p, d) => d.toUpperCase()).replace(/(?:^|_|\s|-)(\w)/g, (p, d) => d.toUpperCase()).replace(/Icon$/, "") + "Icon", o = i(() => l(n.name)), s = i(() => {
      const u = Number(n.size);
      return Number.isFinite(u) && u > 0 ? u : null;
    }), x = i(() => {
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
    async function h(u) {
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
          for (const u of x.value) {
            const p = (await h(u))[o.value];
            if (p) return p;
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
    ), z = i(() => {
      if (n.type !== "outline") return null;
      const u = s.value;
      return u === null || u >= 20 ? null : +(1.25 * 24 / u).toFixed(3);
    }), y = (u) => u ? /(?:^|\s)(?:text-|fill-|stroke-|bg-|ring-|border-)/.test(u) : !1, g = i(() => {
      const u = /^\d+(\.\d+)?$/.test(String(n.size)) ? `${n.size}px` : String(n.size), d = ["hero-icon", y(n.color) ? n.color : "", t.class].filter(Boolean), C = typeof t.style == "object" && t.style ? t.style : {}, { class: w, style: $, ...S } = t;
      return {
        ...S,
        class: d,
        style: {
          ...C,
          width: u,
          height: u,
          minWidth: u,
          maxWidth: u,
          minHeight: u,
          maxHeight: u,
          // Read by the .hero-icon > svg rule; overridable per instance.
          ...z.value !== null ? { "--hero-stroke": String(z.value) } : {},
          ...y(n.color) ? {} : { color: n.color }
        }
      };
    });
    return (u, p) => (r(), a("span", Wt(Kt(g.value)), [
      (r(), Z(Ne(k.value)))
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
  UiBase: Oe,
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
  Oe as Base,
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
  we as getDefault,
  xn as useConfirm,
  Je as useI18n,
  ei as useRtl,
  rl as useSnackbar,
  _s as useUiConfig
};
//# sourceMappingURL=index.js.map
