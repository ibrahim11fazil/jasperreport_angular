import { BaseWidget } from '../base-widget';
export declare type RefinementListState = {
    canRefine: boolean;
    canToggleShowMore: boolean;
    createURL: Function;
    isShowingMore: boolean;
    items: {}[];
    refine: Function;
    toggleShowMore: Function;
    searchForItems: Function;
    isFormSearch: boolean;
};
export declare class NgAisRefinementList extends BaseWidget {
    instantSearchParent: any;
    showMoreLabel: string;
    showLessLabel: string;
    transformItems?: Function;
    searchable?: boolean;
    searchPlaceholder: string;
    attribute: string;
    operator: 'or' | 'and';
    limit: number | string;
    showMoreLimit: number | string;
    sortBy: string[] | ((item: object) => number);
    state: RefinementListState;
    readonly isHidden: boolean;
    constructor(instantSearchParent: any);
    readonly items: any;
    ngOnInit(): void;
    refine(event: MouseEvent, item: {
        isRefined: boolean;
        value: string;
    }): void;
}
