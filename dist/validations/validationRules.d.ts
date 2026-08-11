type ValidationResult = true | string | Record<string, string>;
declare const rules: {
    required: (value: unknown) => ValidationResult;
    email: (value: string) => ValidationResult;
    min: (min: number) => (value: string) => ValidationResult;
    max: (max: number) => (value: string) => ValidationResult;
    numeric: (value: unknown) => ValidationResult;
    nid: (country: string) => (value: string) => ValidationResult;
    customPattern: (conditionFn: () => boolean, pattern: string, errorMsg?: string) => (value: string) => ValidationResult;
};
export default rules;
