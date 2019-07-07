import { BaseWidget } from '../base-widget';
export declare type MenuState = {
    canRefine: boolean;
    canToggleShowMore: boolean;
    createURL: Function;
    isShowingMore: boolean;
    items: {}[];
    refine: Function;
    toggleShowMore: Function;
};
export declare class NgAisMenu extends BaseWidget {
    instantSearchParent: any;
    showMoreLabel: string;
    showLessLabel: string;
    transformItems?: Function;
    attribute: string;
    limit?: number | string;
    showMoreLimit?: number | string;
    sortBy?: string[] | ((item: object) => number);
    state: MenuState;
    readonly isHidden: boolean;
    readonly showMoreClass: any;
    readonly items: any;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    handleClick(event: MouseEvent, value: string): void;
}
