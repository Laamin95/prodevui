<script setup lang="ts">
defineProps<{
  cols?: number
  rows?: number
}>()
</script>

<template>
  <tr
    v-for="r in (rows ?? 5)"
    :key="r"
    class="border-b border-color-3 animate-pulse"
  >
    <td
      v-for="c in (cols ?? 4)"
      :key="c"
      class="px-4 py-3"
    >
      <div class="h-4 rounded bg-color-2" :style="{ width: `${55 + Math.floor(((r * 7 + c * 3) % 5) * 10)}%` }" />
    </td>
  </tr>
</template>
