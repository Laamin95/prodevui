<template>
  <span v-bind="outerAttrs">
    <component :is="IconAsyncComponent" />
  </span>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import { computed, useAttrs, defineAsyncComponent } from "vue";

defineOptions({ inheritAttrs: false })

/**
 * Heroicons ships four variants, each drawn on its own pixel grid:
 *   24/outline, 24/solid, 20/solid (mini), 16/solid (micro)
 *
 * Drawing a 24-grid icon at 16px scales it by 2/3, which lands every edge on a
 * fractional device pixel and makes the icon look blurry. So the pack is picked
 * to match the rendered size rather than always reaching for the 24 one.
 *
 * Only `solid` has small variants — there is no 16px or 20px outline — so an
 * outline icon below 24px keeps the 24 artwork and instead gets a compensated
 * stroke width (see strokeWidth below) to stop the line going sub-pixel.
 */
type Pack = "o24" | "s24" | "s20" | "s16";

interface Props {
  name: string;
  /** `mini` = 20px solid, `micro` = 16px solid (Heroicons' own names). */
  type?: "solid" | "outline" | "mini" | "micro";
  size?: number | string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "solid",
  size: 24,
  color: "currentColor",
});

const attrs = useAttrs();

const normalizeName = (str: string) =>
  str
    .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    .replace(/(?:^|_|\s|-)(\w)/g, (_, c) => c.toUpperCase())
    .replace(/Icon$/, "") + "Icon";

const iconName = computed(() => normalizeName(props.name));

/** Numeric pixel size, or null when the caller passed something like "1em". */
const pxSize = computed(() => {
  const n = Number(props.size);
  return Number.isFinite(n) && n > 0 ? n : null;
});

/**
 * Packs to try, best fit first. The smaller solid packs are not complete — 16
 * is missing a handful of icons the others have — so each chain falls back to
 * a larger pack rather than rendering the error glyph.
 */
const packChain = computed<Pack[]>(() => {
  if (props.type === "outline") return ["o24"];
  if (props.type === "micro") return ["s16", "s20", "s24"];
  if (props.type === "mini") return ["s20", "s24"];

  const n = pxSize.value;
  if (n !== null) {
    if (n <= 16) return ["s16", "s20", "s24"];
    if (n <= 20) return ["s20", "s24"];
  }
  return ["s24"];
});

async function loadPack(pack: Pack): Promise<Record<string, Component>> {
  switch (pack) {
    case "o24": return (await import("@heroicons/vue/24/outline")) as any;
    case "s20": return (await import("@heroicons/vue/20/solid")) as any;
    case "s16": return (await import("@heroicons/vue/16/solid")) as any;
    default:    return (await import("@heroicons/vue/24/solid")) as any;
  }
}

const IconAsyncComponent = computed(() =>
  defineAsyncComponent({
    loader: async () => {
      for (const pack of packChain.value) {
        const icon = (await loadPack(pack))[iconName.value];
        if (icon) return icon as Component;
      }
      throw new Error(`Icon "${iconName.value}" not found in ${props.type} icons`);
    },
    loadingComponent: defineAsyncComponent(
      async () => (await import("@heroicons/vue/24/outline")).ArrowPathIcon
    ),
    errorComponent: defineAsyncComponent(
      async () => (await import("@heroicons/vue/24/solid")).ExclamationTriangleIcon
    ),
    delay: 200,
    timeout: 5000,
  })
);

/**
 * Outline artwork is authored at 24px with a 1.5 stroke. Scaled down, that
 * stroke shrinks with it — 1.125px at 18px, 0.875px at 14px — and a sub-pixel
 * stroke is drawn at reduced alpha, which reads as faint and fuzzy rather than
 * thin. Scale the stroke back up so it never renders below ~1.25px.
 *
 * Returns null at 20px and above, where the default 1.5 already clears that.
 */
const strokeWidth = computed(() => {
  if (props.type !== "outline") return null;
  const n = pxSize.value;
  if (n === null || n >= 20) return null;
  return +((1.25 * 24) / n).toFixed(3);
});

const isTailwindColorClass = (value?: string) =>
  value ? /(?:^|\s)(?:text-|fill-|stroke-|bg-|ring-|border-)/.test(value) : false;

// The outer <span> owns size, color, and all parent attrs.
// HeroIcons are plain render functions that do not spread $attrs to the SVG,
// so we cannot pass size/style through Vue props — we use a CSS selector
// (.hero-icon > svg) instead to style the SVG directly.
const outerAttrs = computed(() => {
  const sizePx = /^\d+(\.\d+)?$/.test(String(props.size)) ? `${props.size}px` : String(props.size)
  const colorClass = isTailwindColorClass(props.color) ? props.color : ""
  const classes = ["hero-icon", colorClass, attrs.class].filter(Boolean)
  const parentStyle = typeof attrs.style === "object" && attrs.style ? attrs.style as Record<string, string> : {}
  const { class: _c, style: _s, ...rest } = attrs as Record<string, unknown>
  return {
    ...rest,
    class: classes,
    style: {
      ...parentStyle,
      width: sizePx,
      height: sizePx,
      minWidth: sizePx,
      maxWidth: sizePx,
      minHeight: sizePx,
      maxHeight: sizePx,
      // Read by the .hero-icon > svg rule; overridable per instance.
      ...(strokeWidth.value !== null ? { "--hero-stroke": String(strokeWidth.value) } : {}),
      ...(!isTailwindColorClass(props.color) ? { color: props.color } : {}),
    },
  }
})
</script>
