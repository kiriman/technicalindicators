import { Indicator, IndicatorInput } from '../indicator/indicator';
export declare class MACDInput extends IndicatorInput {
    period: number;
    values: number[];
    SimpleMAOscillator: boolean;
    SimpleMASignal: boolean;
    fastPeriod: number;
    slowPeriod: number;
    signalPeriod: number;
    constructor(period: number, values: number[]);
}
export declare class MACDOutput {
    MACD?: number;
    signal?: number;
    histogram?: number;
}
export declare class MACD extends Indicator {
    result: MACDOutput[];
    generator: IterableIterator<MACDOutput | undefined>;
    constructor(input: MACDInput);
    static calculate(input: MACDInput): MACDOutput[];
    nextValue(price: number): MACDOutput | undefined;
}