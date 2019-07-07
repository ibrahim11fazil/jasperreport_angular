import { BaseWidget } from '../base-widget';
export declare type NumericRefinementListState = {
    createURL: Function;
    items: {}[];
    refine: Function;
};
export declare class NgAisNumericMenu extends BaseWidget {
    instantSearchParent: any;
    attribute: string;
    items: {
        name: string;
        start?: number;
        end?: number;
    }[];
    state: NumericRefinementListState;
    readonly isHidden: boolean;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    refine(event: MouseEvent, item: {
        value: string;
    }): void;
}
