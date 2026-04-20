<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <tbody
    class="[&_tr:last-child]:border-0 divide-y divide-color-3"
    v-bind="$attrs"
  >
    <slot />
  </tbody>
</template>
