<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps<{
  selected?: boolean
}>()
</script>

<template>
  <tr
    class="border-b border-color-3 transition-colors"
    :class="[
      selected ? 'bg-color-2' : 'hover:bg-color-1/60',
    ]"
    :data-state="selected ? 'selected' : undefined"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
