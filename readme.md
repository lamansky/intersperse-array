# intersperse-array

Interjects a value between each array item.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i intersperse-array
```

## API

The module exports a single function.

### Parameters

1. Bindable: `arr` (array)
2. Optional: `separator` (function or any): A value to interleave between each item in `arr`, or a callback that generates such a value. If `separator` is a function, it will be passed four arguments: the index of the first item, the first item itself, the index of the second item, and the second item itself. The callback’s return value will be inserted between the first and second items.

### Return Value

An array of the values from `arr`, interleaved with values as determined by `separator`.

## Example

```javascript
const intersperse = require('intersperse-array')

intersperse(['work', 'work'], 'break') // ['work', 'break', 'work']
intersperse([1, 3, 5], (index1, value1, index2, value2) => value1 + value2) // [1, 4, 3, 8, 5]

// Supports the bind operator
[1, 2, 3]::intersperse((i1, val1) => val1 + 0.5) // [1, 1.5, 2, 2.5, 3]
```

## Related

* [intersperse-iterable](https://github.com/lamansky/intersperse-iterable)
