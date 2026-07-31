<template>
  <Overlay
    :model-value="show"
    :persistent="false"
    width="md:w-[420px] w-[90vw]"
    @update:model-value="dismiss"
  >
    <!-- Body -->
    <div class="px-3 pt-6 pb-2 flex flex-col items-center text-center gap-3">
      <!-- Coloured icon circle -->
      <div :class="['flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0', iconBgClass]">
        <Icon :name="iconName" :size="28" :color="iconColor" />
      </div>

      <!-- Title (optional) -->
      <h3 v-if="pending?.options.title" class="text-base font-semibold leading-snug">
        {{ pending.options.title }}
      </h3>

      <!-- Message -->
      <p class="text-sm ui-text-secondary leading-relaxed">
        {{ pending?.options.message }}
      </p>
    </div>

    <!-- Footer buttons -->
    <template #footer>
      <div class="flex justify-end gap-2 px-3 py-4">
        <Button
          :label="pending?.options.cancelLabel ?? 'Cancel'"
          variant="outlined"
          color="gray"
          prepend-icon="x-mark"
          size="sm"
          @click="dismiss"
        />
        <Button
          :label="pending?.options.confirmLabel ?? 'Confirm'"
          :color="confirmColor"
          prepend-icon="check"
          size="sm"
          @click="accept"
        />
      </div>
    </template>
  </Overlay>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useConfirm } from '../../lib/useConfirm'

const { pending, accept, dismiss } = useConfirm()

const show = computed(() => !!pending.value)

const variant = computed(() => pending.value?.options.variant ?? 'danger')

const iconName = computed(() => {
  const map: Record<string, string> = {
    danger:  'trash',
    warning: 'exclamation-triangle',
    info:    'information-circle',
  }
  return map[variant.value] ?? 'trash'
})

const iconColor = computed(() => {
  const map: Record<string, string> = {
    danger:  'text-red-500',
    warning: 'text-yellow-500',
    info:    'text-blue-500',
  }
  return map[variant.value] ?? 'text-red-500'
})

const iconBgClass = computed(() => {
  const map: Record<string, string> = {
    danger:  'bg-red-100 dark:bg-red-900/30',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30',
    info:    'bg-blue-100 dark:bg-blue-900/30',
  }
  return map[variant.value] ?? map.danger
})

const confirmColor = computed(() => {
  const map: Record<string, string> = { danger: 'danger', warning: 'warning', info: 'primary' }
  return map[variant.value] ?? 'danger'
})
</script>
