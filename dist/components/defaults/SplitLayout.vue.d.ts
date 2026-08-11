interface Props {
    leftWidth?: number | string;
    appBarOffset?: number;
    bleed?: boolean;
    leftClass?: string;
    rightClass?: string;
    minWidth?: number;
    maxWidth?: number;
}
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    left?: (props: typeof __VLS_1) => any;
} & {
    right?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    leftWidth: number | string;
    appBarOffset: number;
    bleed: boolean;
    leftClass: string;
    rightClass: string;
    minWidth: number;
    maxWidth: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
