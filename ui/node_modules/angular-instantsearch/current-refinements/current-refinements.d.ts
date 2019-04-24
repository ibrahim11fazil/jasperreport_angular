import { BaseWidget } from '../base-widget';
export declare type CurrentRefinementsState = {
    attributes: {};
    clearAllClick: Function;
    clearAllURL: Function;
    createURL: Function;
    refine: Function;
    refinements: {}[];
};
export declare class NgAisCurrentRefinements extends BaseWidget {
    instantSearchParent: any;
    clearRefinements: 'before' | 'after' | boolean;
    clearRefinementsLabel: string;
    transformItems?: Function;
    onlyListedAttributes: boolean;
    clearsQuery: boolean;
    attributes: {
        name: string;
        label: string;
    }[];
    state: CurrentRefinementsState;
    readonly isHidden: boolean;
    readonly refinements: any;
    readonly json: string;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    handleClick(event: MouseEvent, refinement: {}): void;
    handleClearAllClick(event: MouseEvent): void;
}
