import { BaseWidget } from '../base-widget';
export declare class NgAisInfiniteHits extends BaseWidget {
    instantSearchParent: any;
    template?: any;
    showMoreLabel: string;
    transformItems?: Function;
    state: {
        hits: {}[];
        isLastPage: boolean;
        showMore: Function;
        results: {};
    };
    constructor(instantSearchParent: any);
    showMore(event: MouseEvent): void;
    updateState: (state: any, isFirstRendering: boolean) => void;
}
