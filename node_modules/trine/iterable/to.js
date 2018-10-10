/**
 * Unwraps the iterator into a collection.
 *
 * @this {Iterable<iT>}
 * @param Type The constructor for the collection type.
 * @example Arrays
 *
 * ```javascript
 * [1,2,3].map(function () {
 *   return this * 2;
 * })::to(Array) // returns [2, 4, 6]
 * ```
 *
 * @example Objects
 *
 * ```javascript
 * [{id: "a"}, {id: "b"}].map(function () {
 *   return [this.id, this];
 * })::to(Object); // returns { a: { id: "a" }, b: { id: "b"} }
 * ```
 *
 * @example Strings
 *
 * ```javascript
 * "foo".split("").reverse()::to(String) // "oof"
 *
 *
 * @example Other Collections
 *
 * ```javascript
 * [2.5, 3.5]::to(Uint16Array) // returns Uint16Array [2, 3]
 * ["foo", "bar", "foo"]::to(Set) // returns Set ["foo", "bar"]
 * [["x", "y"], ["z", "n"]]::to(Map) // returns Map { "x": "y", "z": "n" }
 * ```
*/
"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.to = to;

function to(Type) {
    switch (Type) {
        case Array:
            return [].concat(_toConsumableArray(this));
        case Object:
            return [].concat(_toConsumableArray(this)).reduce(function (accumulation, entry) {
                return _extends({}, accumulation, _defineProperty({}, entry[0], entry[1]));
            }, {});
        case String:
            return [].concat(_toConsumableArray(this)).join("");
        default:
            return new Type([].concat(_toConsumableArray(this)));
    }
}

;