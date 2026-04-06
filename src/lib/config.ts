import { reactive, readonly } from 'vue'

/**
 * UI Package Configuration
 *
 * Consumers define their config and pass it to the plugin:
 *
 * ```ts
 * import ui, { defineUiConfig } from 'ui-package'
 *
 * const config = defineUiConfig({
 *   defaults: {
 *     rounded: 'lg',
 *     size: 'md',
 *     color: 'primary',
 *     variant: 'contained',
 *   },
 *   // Per-component overrides
 *   components: {
 *     Button: { rounded: 'full', color: 'primary' },
 *     Card: { rounded: 'xl' },
 *     InputText: { rounded: 'lg', size: 'sm' },
 *   }
 * })
 *
 * app.use(ui, config)
 * ```
 */

export interface UiDefaultsConfig {
  /** Default border radius for all components: 'none' | 'd' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' */
  rounded?: string
  /** Default size for all components: 'xs' | 'sm' | 'md' | 'lg' | 'xl' */
  size?: string
  /** Default color for all components: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'gray' */
  color?: string
  /** Default variant for all components: 'contained' | 'outlined' | 'text' | 'tonal' */
  variant?: string
}

export interface UiConfig {
  /** Global defaults applied to all components */
  defaults?: UiDefaultsConfig
  /** Per-component overrides (component name without Ui prefix) */
  components?: Record<string, Partial<UiDefaultsConfig>>
}

// Internal defaults
const BUILT_IN_DEFAULTS: Required<UiDefaultsConfig> = {
  rounded: 'd',
  size: 'md',
  color: 'primary',
  variant: 'contained',
}

// Reactive global config — components read from this
const globalConfig = reactive<{
  defaults: Required<UiDefaultsConfig>
  components: Record<string, Partial<UiDefaultsConfig>>
}>({
  defaults: { ...BUILT_IN_DEFAULTS },
  components: {},
})

/**
 * Define UI package configuration.
 * Returns a config object to pass to `app.use(ui, config)`.
 */
export function defineUiConfig(config: UiConfig = {}): UiConfig {
  return config
}

/**
 * Called internally by the plugin's install() to apply user config.
 */
export function applyConfig(config: UiConfig) {
  if (config.defaults) {
    Object.assign(globalConfig.defaults, config.defaults)
  }
  if (config.components) {
    Object.assign(globalConfig.components, config.components)
  }
}

/**
 * Get the resolved default value for a prop on a specific component.
 *
 * Resolution order:
 *   1. Component-level override (config.components.Button.rounded)
 *   2. Global default (config.defaults.rounded)
 *   3. Built-in fallback ('d')
 *
 * Usage inside a component:
 *   const rounded = getDefault('Button', 'rounded')  // e.g. 'lg'
 */
export function getDefault<K extends keyof UiDefaultsConfig>(
  componentName: string,
  prop: K,
): Required<UiDefaultsConfig>[K] {
  // Check component-level override first
  const componentOverride = globalConfig.components[componentName]
  if (componentOverride && componentOverride[prop] !== undefined) {
    return componentOverride[prop] as Required<UiDefaultsConfig>[K]
  }
  // Fall back to global default
  return globalConfig.defaults[prop]
}

/**
 * Read-only access to the full config (for debugging / advanced use).
 */
export function useUiConfig() {
  return readonly(globalConfig)
}
