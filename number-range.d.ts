// derived from the tuples

type _NumbersToNRec<
    Nr extends number,
    Counter extends any[],
    Accumulator extends number
    > =
    Counter['length'] extends Nr ?
        Accumulator :
        _NumbersToNRec<Nr, [any, ...Counter], Accumulator | Counter['length']>;

/**
 * Results in a type of `0 | 1 | 2 | ... | (N - 1)`. If Nr is 0 the resulting type is never.
 */
export type NumbersToN<
    Nr extends number
    > =
    Nr extends Nr ?
        number extends Nr ?
            number :
            Nr extends 0 ?
                never :
                _NumbersToNRec<Nr, [], 0> :
        never;

/**
 * Results in a type of `Start | (Start + 1) | (Start + 2) | ... | (End - 2) | (End - 1)`. End is exclusive but can just
 * be added by `NrRange<Start,End> | End` if desired so
 */
export type NrRange<
    Start extends number,
    End extends number
    > =
    Exclude<NumbersToN<End>, NumbersToN<Start>>;