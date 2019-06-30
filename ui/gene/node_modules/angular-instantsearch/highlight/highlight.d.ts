export declare class NgAisHighlight {
    attribute: string;
    hit: {
        _highlightResult?: {};
        label?: string;
        highlighted?: string;
    };
    tagName: string;
    cx: (element?: string, subElement?: string) => string;
    readonly content: any;
    replaceWithTagName(value: string): string;
}
