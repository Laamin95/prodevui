<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps<{
  class?: string
}>()
</script>

<template>
  <div class="relative w-full overflow-auto rounded-lg border border-color-3">
    <table
      class="w-full caption-bottom text-sm"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
</template>
