import { TemplateRef } from '@angular/core';
import { BaseWidget } from '../base-widget';
export declare class NgAisHits extends BaseWidget {
    instantSearchParent: any;
    template?: TemplateRef<any>;
    transformItems?: Function;
    state: {
        hits: {}[];
        results: {};
    };
    constructor(instantSearchParent: any);
    updateState: (state: any, isFirstRendering: boolean) => void;
}
