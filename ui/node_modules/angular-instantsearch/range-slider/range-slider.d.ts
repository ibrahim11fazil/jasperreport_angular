import { BaseWidget } from '../base-widget';
export declare type RangeSliderState = {
    range: {
        min: number;
        max: number;
    };
    refine: Function;
    start: number[];
};
export declare class NgAisRangeSlider extends BaseWidget {
    instantSearchParent: any;
    sliderContainer: any;
    pips: boolean;
    tooltips: boolean;
    attribute: string;
    min?: number | string;
    max?: number | string;
    precision: number | string;
    state: RangeSliderState;
    private slider;
    readonly step: number;
    constructor(instantSearchParent: any);
    ngOnInit(): void;
    updateState: (state: any, isFirstRendering: boolean) => void;
    handleChange: (values: string[] | number[]) => void;
    formatTooltip: (value: number) => string;
}
