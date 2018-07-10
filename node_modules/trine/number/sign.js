/**
 * Returns the sign of the number, indicating whether the number is positive, negative or zero.
 *
 * @this {number}
 * @example Basic Usage
 *
 * ```javascript
 * 0::sign() // returns 0
 * 4::sign() // returns 1
 * (-5)::sign() // returns -1
 * ```
*/
"use strict";

var _Math$sign = require("babel-runtime/core-js/math/sign")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = sign;

function sign() {
  return _Math$sign(this);
}

;