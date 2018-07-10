/**
 * Returns the larger of two numbers.
 *
 * @this {number}
 * @example Basic Usage
 *
 * ```javascript
 * 8::max(-1) // returns 8
 * 4::max(7) // returns 7
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.max = max;

function max(b) {
    return Math.max(this, b);
}

;