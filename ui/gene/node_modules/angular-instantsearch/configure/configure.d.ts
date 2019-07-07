import { KeyValueDiffers } from '@angular/core';
import { BaseWidget } from '../base-widget';
import { SearchParameters } from '../instantsearch/instantsearch';
export declare class NgAisConfigure extends BaseWidget {
    private differs;
    instantSearchParent: any;
    private internalSearchParameters;
    private differ;
    state: {
        refine: Function;
    };
    constructor(differs: KeyValueDiffers, instantSearchParent: any);
    searchParameters: SearchParameters;
    ngOnInit(): void;
    ngDoCheck(): void;
}
