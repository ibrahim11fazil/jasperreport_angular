import { BaseWidget } from '../base-widget';
export declare type ResultsPerPageState = {
    items: {}[];
    refine: Function;
};
export declare class NgAisHitsPerPage extends BaseWidget {
    instantSearchParent: any;
    items: {
        value: number;
        label: string;
        default?: boolean;
    }[];
    state: ResultsPerPageState;
    readonly isHidden: boolean;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
}
