import { BaseWidget } from '../base-widget';
export declare type BreadcrumbState = {
    createURL: Function;
    items: BreadcrumbItem[];
    refine: Function;
};
export declare type BreadcrumbItem = {
    name: string;
    value: string;
};
export declare class NgAisBreadcrumb extends BaseWidget {
    instantSearchParent: any;
    attributes: string[];
    rootPath?: string;
    readonly isHidden: boolean;
    readonly items: {
        separator: boolean;
        isLast: boolean;
        name: string;
        value: string;
    }[];
    state: BreadcrumbState;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    handleClick(event: MouseEvent, item: BreadcrumbItem): void;
}
