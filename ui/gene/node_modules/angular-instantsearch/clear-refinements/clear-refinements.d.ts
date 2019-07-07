import { BaseWidget } from '../base-widget';
import { noop } from '../utils';
export declare class NgAisClearRefinements extends BaseWidget {
    instantSearchParent: any;
    buttonLabel: string;
    clearsQuery: boolean;
    excludeAttributes: string[];
    state: {
        hasRefinements: boolean;
        refine: typeof noop;
    };
    readonly isHidden: boolean;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    handleClick(event: MouseEvent): void;
}
