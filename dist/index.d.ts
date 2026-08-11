import { App } from 'vue';
import { UiConfig } from './lib/config';
export * from './components/index';
export { useSnackbar } from './lib/useSnackbar';
export { useConfirm } from './lib/useConfirm';
export type { ConfirmOptions } from './lib/useConfirm';
export { useI18n } from './lib/i18n/useI18n';
export { useRtl } from './lib/core/useRtl';
export { defineUiConfig, useUiConfig, getDefault } from './lib/config';
export type { UiConfig, UiDefaultsConfig } from './lib/config';
declare const _default: {
    install(app: App, config?: UiConfig): void;
};
export default _default;
