# ts-number-range

This package provides two type aliases which allow you to create number ranges easier.

## limitiations

**Be aware that this is not a real solution, but a workaround which only works in a very limited range in respect to the bounds
of the range. 41 is the current maximum recursion depth, so the max range is 0 | 1 | ... | 40.** 

## Types

```typescript
import { NumbersToN, NrRange } from "ts-number-range";

// type is equivalent to `0 | 1 | 2 | 3 | 4`
let a: NumbersToN<5>;

// type is equivalent to `4 | 5 | 6 | 7`
let b: NrRange<4, 8>
```

## TypeScript 4.5 Tail-Recursion elimination

With TypeScript 4.5-beta a type tail-recursion elimination was introduced.
Luckily the provided typings are in the correct form which enables this feature and allows a much greater range.

A quick test resulted in a range from 0 | ... | 997:

![Example error message](readme-media/with-tail-rec.png?raw=true "With tail recursion elimination")

So now ranges work for a greater offset too:

![Example error for a range](readme-media/number-range.png?raw=true "Range with great offset")
