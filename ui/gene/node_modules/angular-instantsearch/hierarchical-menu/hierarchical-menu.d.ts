import { BaseWidget } from '../base-widget';
export declare type HierarchicalMenuState = {
    createURL: Function;
    items: {}[];
    refine: Function;
};
export declare class NgAisHierarchicalMenu extends BaseWidget {
    instantSearchParent: any;
    transformItems?: Function;
    attributes: string[];
    separator?: string;
    rootPath?: string;
    showParentLevel?: boolean;
    limit?: number | string;
    sortBy?: string[] | ((item: object) => number);
    state: HierarchicalMenuState;
    readonly isHidden: boolean;
    readonly items: any;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
}
