import { BaseWidget } from '../base-widget';
import { noop } from '../utils';
export declare class NgAisPagination extends BaseWidget {
    instantSearchParent: any;
    showFirst: boolean;
    showLast: boolean;
    showPrevious: boolean;
    showNext: boolean;
    padding: number | string;
    totalPages?: number | string;
    state: {
        createURL: typeof noop;
        currentRefinement: number;
        nbHits: number;
        nbPages: number;
        refine: typeof noop;
    };
    readonly pages: any;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    refine(event: MouseEvent, page: number): void;
}
