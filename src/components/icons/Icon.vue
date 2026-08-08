<template>
  <span v-bind="outerAttrs">
    <component :is="IconAsyncComponent" />
  </span>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import { computed, useAttrs, defineAsyncComponent } from "vue";

defineOptions({ inheritAttrs: false })

interface Props {
  name: string;
  type?: "solid" | "outline";
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

const IconAsyncComponent = computed(() =>
  defineAsyncComponent({
    loader: async () => {
      const pack =
        props.type === "solid"
          ? await import("@heroicons/vue/24/solid")
          : await import("@heroicons/vue/24/outline");
      const icon = (pack as any)[iconName.value];
      if (!icon)
        throw new Error(`Icon "${iconName.value}" not found in ${props.type} icons`);
      return icon as Component;
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
      ...(!isTailwindColorClass(props.color) ? { color: props.color } : {}),
    },
  }
})
</script>
