# ts-number-range

This package provides two type aliases which allow you to create number ranges easier.

## Types

```typescript
import { NumbersToN, NrRange } from "ts-number-range";

// type is equivalent to `0 | 1 | 2 | 3 | 4`
let a: NumbersToN<5>;

// type is equivalent to `4 | 5 | 6 | 7`
let b: NrRange<4, 8>
```