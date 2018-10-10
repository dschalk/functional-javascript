"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sortAlphabeticallyBy = sortAlphabeticallyBy;
var marked0$0 = [sortAlphabeticallyBy].map(_regeneratorRuntime.mark);

var _sortAlphabetically = require("./sortAlphabetically");

var _map = require("./map");

/**
 * Yields the items of the iterator sorted by a given comparator.
 *
 * @this {Iterable<T>}
 * @ntime Engine-specific
 * @dspace Engine-specific
 * @example Basic Usage
 *
 * ```javascript
 * [{
 *   value: "foo",
 * }, {
 *   value: "bar",
 * }]::sortAlphabeticallyBy(function () {
 *   return this.value;
 * }) // yields { value: "bar" }, { value: "foo" }
 * ```
*/

function sortAlphabeticallyBy(transformer) {
    var _context;

    return _regeneratorRuntime.wrap(function sortAlphabeticallyBy$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.delegateYield((_context = (_context = _map.map.call(this, function () {
                    var string = transformer.call(this);
                    return { value: this, toString: function toString() {
                            return string;
                        } };
                }), _sortAlphabetically.sortAlphabetically).call(_context), _map.map).call(_context, function () {
                    return this.value;
                }), "t0", 1);

            case 1:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;