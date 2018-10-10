/**
 * Returns the negation of the boolean.
 *
 * @this {boolean} The boolean to negate.
 * @example Basic Usage
 *
 * ```javascript
 * true::not() // false
 * false::not() // true
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.not = not;

function not() {
  return !this;
}

;