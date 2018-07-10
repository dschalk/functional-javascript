/**
 * Returns the subtraction of two numbers.
 *
 * @this {number}
 * @example Basic Usage
 *
 * ```javascript
 * 0::sub(5) // returns -5
 * 4::sub(1) // returns 3
 * 5::sub(-5) // returns 10
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sub = sub;

function sub(b) {
    return this - b;
}

;