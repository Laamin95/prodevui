export interface ConfirmOptions {
    title?: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    /** Controls icon colour and confirm button colour. Defaults to 'danger'. */
    variant?: 'danger' | 'warning' | 'info';
}
interface ConfirmState {
    options: ConfirmOptions;
    resolve: (value: boolean) => void;
}
export declare function useConfirm(): {
    pending: import('vue').Ref<{
        options: {
            title?: string | undefined;
            message: string;
            confirmLabel?: string | undefined;
            cancelLabel?: string
            /** Controls icon colour and confirm button colour. Defaults to 'danger'. */
             | undefined;
            variant?: "danger" | "warning" | "info" | undefined;
        };
        resolve: (value: boolean) => void;
    } | null, ConfirmState | {
        options: {
            title?: string | undefined;
            message: string;
            confirmLabel?: string | undefined;
            cancelLabel?: string
            /** Controls icon colour and confirm button colour. Defaults to 'danger'. */
             | undefined;
            variant?: "danger" | "warning" | "info" | undefined;
        };
        resolve: (value: boolean) => void;
    } | null>;
    confirm: (options: ConfirmOptions | string) => Promise<boolean>;
    accept: () => void;
    dismiss: () => void;
};
export {};
