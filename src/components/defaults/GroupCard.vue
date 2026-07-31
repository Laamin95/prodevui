<script setup>
defineProps({
  title: { type: String, default: '' },
  color: { type: String, default: 'bg-white' },
})
</script>

<template>
  <div :class="`border border-color-3 rounded-lg ${color} w-full relative p-4`">
    <div
      v-if="title"
      class="absolute flex px-2 items-center pointer-events-none h-[1px] -top-[1px] left-4 bg-inherit"
    >
      <span class="text-xs font-medium text-ui-text-secondary">{{ title }}</span>
    </div>
    <slot />
  </div>
</template>
