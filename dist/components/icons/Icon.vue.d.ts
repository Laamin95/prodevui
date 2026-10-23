interface Props {
    name: string;
    /** `mini` = 20px solid, `micro` = 16px solid (Heroicons' own names). */
    type?: "solid" | "outline" | "mini" | "micro";
    size?: number | string;
    color?: string;
}
declare const __VLS_export: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: number | string;
    color: string;
    type: "solid" | "outline" | "mini" | "micro";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
