/**
 * Returns the modulo of two numbers.
 *
 * @this {number}
 * @example Basic Usage
 *
 * ```javascript
 * 8::mod(2) // returns 0
 * 4::mod(3) // returns 1
 * 5::mod(3) // returns 2
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mod = mod;

function mod(b) {
    return this % b;
}

;