import { BaseWidget } from '../base-widget';
export declare class NgAisStats extends BaseWidget {
    instantSearchParent: any;
    template: any;
    state: {
        hitPerPage: number;
        nbHits: number;
        nbPages: number;
        page: number;
        processingTimeMS: number;
        query: string;
    };
    readonly templateContext: {
        state: {
            hitPerPage: number;
            nbHits: number;
            nbPages: number;
            page: number;
            processingTimeMS: number;
            query: string;
        };
    };
    constructor(instantSearchParent: any);
}
