import { Directive } from 'vue';
export type Placement = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipOptions {
    text?: string | Object;
    placement?: Placement;
    arrow?: boolean;
    openOnHover?: boolean;
    openOnFocus?: boolean;
    openOnClick?: boolean;
    showDelay?: number;
    hideDelay?: number;
    offset?: {
        x?: number;
        y?: number;
    };
    disabled?: boolean;
}
export declare const tooltipDirective: Directive<HTMLElement, string | TooltipOptions>;
export default tooltipDirective;
