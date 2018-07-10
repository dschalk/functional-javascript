/**
 * Returns the absolute value of the number.
 *
 * @this {number}
 * @example Basic Usage
 *
 * ```javascript
 * (-3)::abs() // returns 3
 * 2::abs() // returns 2
 * 0::abs() // returns 0
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abs = abs;

function abs() {
  return Math.abs(this);
}

;