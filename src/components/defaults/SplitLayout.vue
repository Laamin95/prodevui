<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue'

interface Props {
  leftWidth?: number | string
  appBarOffset?: number
  bleed?: boolean
  leftClass?: string
  rightClass?: string
  minWidth?: number
  maxWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  leftWidth: 320,
  appBarOffset: 64,
  bleed: true,
  leftClass: '',
  rightClass: '',
  minWidth: 200,
  maxWidth: 640,
})

const containerStyle = computed(() => ({
  height: `calc(100vh - ${props.appBarOffset}px)`,
}))

// ── Drag-to-resize ───────────────────────────────────────────────────────────

const initialWidth = typeof props.leftWidth === 'number'
  ? props.leftWidth
  : parseInt(props.leftWidth as string) || 320

const currentWidth = ref(initialWidth)
const isDragging   = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const leftStyle = computed(() => ({
  width:    `${currentWidth.value}px`,
  minWidth: `${currentWidth.value}px`,
}))

function startDrag(e: MouseEvent) {
  isDragging.value = true
  e.preventDefault()
}

function onDrag(e: MouseEvent) {
  if (!containerRef.value) return
  const rect     = containerRef.value.getBoundingClientRect()
  const newWidth = e.clientX - rect.left
  currentWidth.value = Math.max(props.minWidth, Math.min(newWidth, Math.min(props.maxWidth, rect.width - 300)))
}

function stopDrag() {
  isDragging.value = false
}

onBeforeUnmount(() => {
  isDragging.value = false
})
</script>

<template>
  <div
    ref="containerRef"
    :class="['flex overflow-hidden', bleed ? '-mx-6 -my-5' : '', isDragging ? 'select-none' : '']"
    :style="containerStyle"
  >
    <!-- Left panel — resizable -->
    <div
      :class="['flex-shrink-0 flex flex-col overflow-hidden', leftClass]"
      :style="leftStyle"
    >
      <slot name="left" />
    </div>

    <!-- Drag handle -->
    <div
      class="relative flex-shrink-0 w-[5px] cursor-col-resize group z-10"
      @mousedown="startDrag"
    >
      <div
        class="absolute inset-y-0 left-[2px] w-px bg-[var(--border-color)] transition-colors"
        :class="isDragging ? '!bg-primary !w-[2px] !left-[1.5px]' : 'group-hover:!bg-primary'"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        :class="isDragging ? '!opacity-100' : ''"
      >
        <span v-for="i in 4" :key="i" class="w-[3px] h-[3px] rounded-full bg-primary block" />
      </div>
    </div>

    <!-- Right panel -->
    <div :class="['flex-1 min-w-0 flex flex-col overflow-hidden', rightClass]">
      <slot name="right" />
    </div>

    <!-- Full-screen overlay during drag — owns the cursor and absorbs all mouse events -->
    <Teleport to="body">
      <div
        v-if="isDragging"
        class="fixed inset-0 z-[9999] cursor-col-resize"
        @mousemove="onDrag"
        @mouseup="stopDrag"
      />
    </Teleport>
  </div>
</template>
