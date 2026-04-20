<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  align?: 'left' | 'center' | 'right'
  muted?: boolean
  mono?: boolean
}>()

const alignClass = computed(() => ({
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}[props.align ?? 'left']))
</script>

<template>
  <td
    class="px-4 py-3 align-middle"
    :class="[
      alignClass,
      muted ? 'ui-text-secondary text-xs' : '',
      mono ? 'font-mono text-xs' : '',
    ]"
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>
