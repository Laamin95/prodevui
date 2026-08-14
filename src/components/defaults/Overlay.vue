<template>
  <Teleport to="body">
    <Transition :name="transitionName">
      <div v-if="show" :class="['fixed inset-0 flex items-center justify-center', zIndex]">
        <!-- Overlay -->
        <div
          class="absolute inset-0 transition-opacity duration-300 bg-black/30 backdrop-blur-sm"
          :class="overlayClass"
          @click="attemptClose"
        />

        <!-- Modal using Card -->
        <Transition :name="transitionName">
          <Card
            v-if="show"
            :title="title"
            :card-class="[effectiveCardClass, modalClass, shake && 'animate-shake']"
            :bg="cardBg"
            :text-color="bodyTextColor"
            :rounded="rounded"
            :border="border"
            :header-class="headerClass"
            :footer-class="footerClass"
            :width="effectiveWidth"
            @click.stop
          >
            <!-- Header slot from parent -->
            <template v-if="$slots.header" #header>
              <slot name="header" />
            </template>

            <!-- Body/Content slot from parent -->
            <div class="flex-1 pt-2" style="overflow-x: clip;" :class="contentClass">
                <button
                  v-if="closebutton"
                  type="button"
                  class="absolute top-3 right-4 z-10 text-ui-text-secondary hover:text-ui-text-primary transition-colors"
                  @click="show = false"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
                <slot />
            </div>

            <!-- Footer slot from parent -->
            <template v-if="$slots.footer" #footer>
              <slot name="footer" />
            </template>
          </Card>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    persistent: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'center'
    },
    overlayClass: {
      type: String,
      default: ''
    },
    modalClass: {
      type: String,
      default: ''
    },
    headerClass: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    },
    footerClass: {
      type: String,
      default: ''
    },
    headerTextSize: {
      type: String,
      default: 'text-lg font-semibold'
    },
    cardBg: {
      type: String,
      default: 'ui-bg-color'
    },
    rounded: {
      type: String
    },
    border: {
      type: String,
      default: 'ui-border-color'
    },
    bodyTextColor: {
      type: String,
    },
    closebutton: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'md:w-[800px] w-[600px]'
    },
    zIndex: {
      type: String,
      default: 'z-50'
    },
    mobileFull: {
      type: Boolean,
      default: true
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const show = computed({
    get: () => props.modelValue,
    set: v => emit('update:modelValue', v)
  })

  const shake = ref(false)

  function attemptClose() {
    if (props.persistent) {
      shake.value = true
      setTimeout(() => (shake.value = false), 400)
      return
    }
    show.value = false
  }

  function onEsc(e) {
    if (e.key === 'Escape' && show.value && !props.persistent) {
      attemptClose()
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', onEsc)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onEsc)
  })

  const transitionName = computed(() => {
    return `${props.transition ?? 'center'}`
  })

  // Mobile-fullscreen helpers
  // On mobile (< sm = < 640px) the modal fills the whole screen.
  // We use Tailwind's ! (important) modifier so these overrides win over Card's
  // own rounded / height defaults. sm: breakpoint classes override the base ones
  // at 640px+ because a min-width media query beats the base rule when both
  // carry !important.
  const effectiveCardClass = computed(() => {
    if (props.fullscreen) return 'h-screen rounded-none'
    if (!props.mobileFull) return 'mx-4 max-h-screen'
    return '!h-screen !rounded-none !mx-0 sm:!h-auto sm:!max-h-[90vh] sm:!rounded-xl sm:!mx-4'
  })

  const effectiveWidth = computed(() => {
    if (props.fullscreen) return 'w-full'
    if (!props.mobileFull) return props.width
    // Full width only below the `sm` breakpoint; `props.width` drives every
    // wider viewport. `max-sm:!w-full` is a static class so Tailwind's JIT
    // emits it (classes assembled at runtime are never seen by the scanner,
    // which is why the previous approach left modals stuck at !w-full).
    return `max-sm:!w-full ${props.width}`
  })
</script>

