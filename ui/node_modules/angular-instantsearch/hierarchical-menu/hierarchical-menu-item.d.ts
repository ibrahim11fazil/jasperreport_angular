export declare type HierarchicalMenuItem = {
    value: string;
    label: string;
    count: number;
    isRefined: boolean;
    data: HierarchicalMenuItem[];
};
export declare class NgAisHierarchicalMenuItem {
    lvl: number;
    refine: (string: any) => void;
    createURL: (string: any) => string;
    item: HierarchicalMenuItem;
    cx: (element?: string, subElement?: string) => string;
    getItemClass(item: any): string;
    getListClass(item: any): string;
    isArray(potentialArray: any): boolean;
    handleClick(event: MouseEvent, item: HierarchicalMenuItem): void;
}
