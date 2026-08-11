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
    rounded?: string;
    /** Default size for all components: 'xs' | 'sm' | 'md' | 'lg' | 'xl' */
    size?: string;
    /** Default color for all components: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'gray' */
    color?: string;
    /** Default variant for all components: 'contained' | 'outlined' | 'text' | 'tonal' */
    variant?: string;
}
export interface UiConfig {
    /** Global defaults applied to all components */
    defaults?: UiDefaultsConfig;
    /** Per-component overrides (component name without Ui prefix) */
    components?: Record<string, Partial<UiDefaultsConfig>>;
}
/**
 * Define UI package configuration.
 * Returns a config object to pass to `app.use(ui, config)`.
 */
export declare function defineUiConfig(config?: UiConfig): UiConfig;
/**
 * Called internally by the plugin's install() to apply user config.
 */
export declare function applyConfig(config: UiConfig): void;
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
export declare function getDefault<K extends keyof UiDefaultsConfig>(componentName: string, prop: K): Required<UiDefaultsConfig>[K];
/**
 * Read-only access to the full config (for debugging / advanced use).
 */
export declare function useUiConfig(): {
    readonly defaults: {
        readonly rounded: string;
        readonly size: string;
        readonly color: string;
        readonly variant: string;
    };
    readonly components: {
        readonly [x: string]: {
            readonly rounded?: string
            /** Default size for all components: 'xs' | 'sm' | 'md' | 'lg' | 'xl' */
             | undefined;
            readonly size?: string
            /** Default color for all components: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'gray' */
             | undefined;
            readonly color?: string
            /** Default variant for all components: 'contained' | 'outlined' | 'text' | 'tonal' */
             | undefined;
            readonly variant?: string | undefined;
        };
    };
};
