import { BaseWidget } from '../base-widget';
export declare type ToggleState = {
    createURL: Function;
    refine: Function;
    value: {
        name?: string;
        count?: number;
        isRefined?: boolean;
    };
};
export declare class NgAisToggle extends BaseWidget {
    instantSearchParent: any;
    attribute: string;
    label: string;
    values: {
        on?: boolean;
        off?: boolean;
    };
    state: ToggleState;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    handleClick(event: MouseEvent): void;
}
