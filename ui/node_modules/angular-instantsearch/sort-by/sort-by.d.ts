import { BaseWidget } from '../base-widget';
export declare class NgAisSortBy extends BaseWidget {
    instantSearchParent: any;
    items: {
        name: string;
        label: string;
    }[];
    state: {
        currentRefinement: string | null;
        options: {}[];
        refine: Function;
    };
    constructor(instantSearchParent: any);
    ngOnInit(): void;
}
