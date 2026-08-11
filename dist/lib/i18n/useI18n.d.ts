export declare const useI18n: () => {
    t: (key: string, lang?: string) => any;
    setLanguage: (lang: string) => void;
    language: import('vue').ComputedRef<string>;
};
