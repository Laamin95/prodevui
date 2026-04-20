<script setup lang="ts">
defineProps<{
  colspan?: number | string
  message?: string
  icon?: string
}>()
</script>

<template>
  <tr>
    <td
      :colspan="colspan ?? 99"
      class="px-4 py-12 text-center"
    >
      <div class="flex flex-col items-center gap-2 ui-text-secondary">
        <svg
          v-if="!$slots.icon"
          class="w-8 h-8 opacity-40"
          fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75c-.621 0-1.125.504-1.125 1.125" />
        </svg>
        <slot name="icon" />
        <span class="text-sm">{{ message ?? 'No results found.' }}</span>
        <slot />
      </div>
    </td>
  </tr>
</template>
