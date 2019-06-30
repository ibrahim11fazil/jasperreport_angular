import { BaseWidget } from '../base-widget';
export declare type RatingMenuState = {
    createURL: Function;
    hasNoResults: boolean;
    items: {}[];
    refine: Function;
};
export declare class NgAisRatingMenu extends BaseWidget {
    instantSearchParent: any;
    andUpLabel: string;
    attribute: string;
    max?: number;
    state: RatingMenuState;
    readonly isHidden: boolean;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    handleClick(event: MouseEvent, value: string): void;
}
