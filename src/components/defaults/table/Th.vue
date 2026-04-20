<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  sortable?: boolean
  sortDirection?: 'asc' | 'desc' | null
  align?: 'left' | 'center' | 'right'
}>()

const emit = defineEmits<{
  (e: 'sort'): void
}>()

const alignClass = computed(() => ({
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}[props.align ?? 'left']))
</script>

<template>
  <th
    class="h-11 px-4 align-middle text-xs font-semibold uppercase tracking-wider ui-text-secondary whitespace-nowrap"
    :class="[
      alignClass,
      sortable ? 'cursor-pointer select-none hover:text-foreground group' : '',
    ]"
    v-bind="$attrs"
    @click="sortable ? emit('sort') : undefined"
  >
    <div class="inline-flex items-center gap-1">
      <slot />
      <!-- Sort indicator -->
      <span v-if="sortable" class="ml-1 flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
        <svg
          v-if="sortDirection === 'asc'"
          class="w-3 h-3 opacity-100 text-primary"
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        <svg
          v-else-if="sortDirection === 'desc'"
          class="w-3 h-3 opacity-100 text-primary"
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        <svg
          v-else
          class="w-3 h-3"
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
    </div>
  </th>
</template>
