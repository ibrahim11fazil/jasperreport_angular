import { BaseWidget } from '../base-widget';
export declare type NumericSelectorState = {
    currentRefinement?: string | null;
    options: {}[];
    refine: Function;
};
export declare class NgAisNumericSelector extends BaseWidget {
    instantSearchParent: any;
    attribute: string;
    operator: '<' | '<=' | '=' | '>=' | '>' | '!=';
    items: {
        value: number;
        label: string;
    }[];
    state: NumericSelectorState;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
}
