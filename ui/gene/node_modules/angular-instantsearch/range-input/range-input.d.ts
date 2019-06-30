import { BaseWidget } from '../base-widget';
export declare type NumericRangeState = {
    range: {
        min?: number;
        max?: number;
    };
    refine: Function;
    start: number[];
};
export declare class NgAisRangeInput extends BaseWidget {
    instantSearchParent: any;
    currency: string;
    separator: string;
    submitLabel: string;
    attribute: string;
    min?: number | string;
    max?: number | string;
    precision: number | string;
    minInputValue?: number | string;
    maxInputValue?: number | string;
    readonly step: number;
    state: NumericRangeState;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    handleChange(event: any, type: string): void;
    handleSubmit(event: MouseEvent | KeyboardEvent): void;
}
