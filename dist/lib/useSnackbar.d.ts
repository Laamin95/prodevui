import { Ref, ShallowRef } from 'vue';
export interface SnackbarOptions {
    message?: string;
    title?: string;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    icon?: string;
    action?: string;
    timeout?: number;
    position?: 'top' | 'bottom';
    closeable?: boolean;
    showProgress?: boolean;
    multiline?: boolean;
    onAction?: (() => void) | null;
}
export interface SnackbarEntry {
    id: number;
    isVisible: Ref<boolean>;
    options: Required<SnackbarOptions>;
    close: () => void;
}
export interface SnackbarInstance {
    snackbars: ShallowRef<SnackbarEntry[]>;
    show: (options: SnackbarOptions) => SnackbarEntry;
    success: (message: string, options?: SnackbarOptions) => SnackbarEntry;
    error: (message: string, options?: SnackbarOptions) => SnackbarEntry;
    warning: (message: string, options?: SnackbarOptions) => SnackbarEntry;
    info: (message: string, options?: SnackbarOptions) => SnackbarEntry;
}
export declare function useSnackbar(): SnackbarInstance;
export declare const snackbar: {
    show: (options: SnackbarOptions) => SnackbarEntry;
    success: (message: string, options?: SnackbarOptions | undefined) => SnackbarEntry;
    error: (message: string, options?: SnackbarOptions | undefined) => SnackbarEntry;
    warning: (message: string, options?: SnackbarOptions | undefined) => SnackbarEntry;
    info: (message: string, options?: SnackbarOptions | undefined) => SnackbarEntry;
};
