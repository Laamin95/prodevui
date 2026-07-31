<template>
  <button :class="buttonClasses" :disabled="disabled || loading" @click="handleClick">

    <!-- Prepend Icon -->
    <span v-if="($slots.prepend || prependIcon) || loading" class="mr-2">
      <!-- Loader -->
      <span v-if="loading" class="loader " />
      <slot v-if="!loading" name="prepend">
        <Icon v-if="prependIcon" :name="prependIcon" type="outline" :size="iconSizes[props.size]" color="text-current" :class="iconClass" />
      </slot>
    </span>

    <!-- Label -->
    <span class="whitespace-nowrap " >
      <slot>
        <Icon v-if="icon" :name="icon" type="mini" :size="iconSizes[props.size]" color="text-current" :class="iconClass" />
        <div v-if="!icon">
          {{ displayLabel }}
        </div>
      </slot>
    </span>

    <!-- Append Icon -->
    <span v-if="$slots.append || appendIcon" class="ml-2">
      
      <slot name="append">
        <Icon
          v-if="appendIcon"
          :name="appendIcon"
          type="outline"
          :size="iconSizes[props.size]"
          :class="iconClass"
          stroke="currentColor"
          color="text-current"
        />
      </slot>
    </span>
  </button>
</template>

<script setup>
  import { computed, inject, provide, ref } from 'vue'
  import { Icon } from '../../'
  import { sizes, iconSizes, roundedMap, colorMap } from '../../lib/componentConfig'
  import { getDefault } from '../../lib/config'

  const { t, setLanguage } = inject('i18n', { t: (key) => key, setLanguage: () => {} })

  const emit = defineEmits(['click'])

  const injectedLang = inject('parentLang', '')
  const currentLang = computed(() => {
    return props.lang ? props.lang : injectedLang
  })

  const props = defineProps({
    variant: {
      type: String,
      default: () => getDefault('Button', 'variant')
    },
    color: {
      type: String,
      default: () => getDefault('Button', 'color')
    },
    size: {
      type: String,
      default: () => getDefault('Button', 'size')
    },
    rounded: {
      type: String,
      default: () => getDefault('Button', 'rounded')
    },
    iconClass: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    prependIcon: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: ''
    },
    padding: {
      type: Boolean,
      default: false // true = force IconPadding, false = no padding on icon-only buttons
    },
    lang: {
      type: String,
      default: '' // Component-level language override
    }
  })

  const IconPadding = {
    xs:  'p-2',
    sm:  'p-1.5',
    md:  'p-2',
    lg:  'p-2.5',
    xl:  'p-3',
  }

  const variantClasses = computed(() => {
    // Classes only for layout/structure, colors handled by buttonThemeStyles
    return colorMap[props.color] ? colorMap[props.color][props.variant] : colorMap['primary'][props.variant]
    // return 'transition-all'
  })

  const buttonClasses = computed(() => [
    'inline-flex items-center justify-center font-medium transition-all select-none',
    props.padding ? IconPadding[props.size] : (props.icon ? '' : sizes[props.size]),
    roundedMap[props.rounded],
    variantClasses.value,
    props.block ? 'w-full' : '',
    currentLang.value === 'dv' ? 'faruma' : '',
    props.disabled || props.loading ? 'opacity-90 cursor-not-allowed' : 'cursor-pointer'
  ])

  const handleClick = event => {
    if (!props.disabled && !props.loading) emit('click', event)
  }
  // Check if label is a translation key like 'buttons.submit'
  const displayLabel = computed(() => {
    if (!props.label) {
      return t('buttons.submit', currentLang.value)
    }

    // Check if label starts with 'buttons.' and try to translate it
    if (props.label.startsWith('buttons.')) {
      const translatedValue = t(props.label, currentLang.value)
      // If translation exists and is different from the key, use it
      if (translatedValue !== props.label) {
        return translatedValue
      }
    }

    // Otherwise, use the label as-is
    return props.label
  })
</script>

<style scoped>
  /* Simple Loader */
  .loader {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-top-color: currentColor;
    border-radius: 50%;
    animation: btn-spin 0.7s linear infinite;
    vertical-align: middle;
    flex-shrink: 0;
  }

  @keyframes btn-spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
