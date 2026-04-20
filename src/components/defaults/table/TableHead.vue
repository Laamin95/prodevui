<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <thead
    class="bg-color-1 [&_tr]:border-b [&_tr]:border-color-3"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
