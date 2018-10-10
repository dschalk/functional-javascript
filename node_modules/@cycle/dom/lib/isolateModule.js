"use strict";
var MapPolyfill = require('es6-map');
var IsolateModule = (function () {
    function IsolateModule(isolatedElements) {
        this.isolatedElements = isolatedElements;
        this.eventDelegators = new MapPolyfill();
    }
    IsolateModule.prototype.setScope = function (elm, scope) {
        this.isolatedElements.set(scope, elm);
    };
    IsolateModule.prototype.removeScope = function (scope) {
        this.isolatedElements.delete(scope);
    };
    IsolateModule.prototype.cleanupVNode = function (_a) {
        var data = _a.data, elm = _a.elm;
        data = data || {};
        var scope = data.isolate || '';
        var isCurrentElm = this.isolatedElements.get(scope) === elm;
        if (scope && isCurrentElm) {
            this.removeScope(scope);
            if (this.eventDelegators.get(scope)) {
                this.eventDelegators.set(scope, []);
            }
        }
    };
    IsolateModule.prototype.getIsolatedElement = function (scope) {
        return this.isolatedElements.get(scope);
    };
    IsolateModule.prototype.isIsolatedElement = function (elm) {
        var iterator = this.isolatedElements.entries();
        for (var result = iterator.next(); !!result.value; result = iterator.next()) {
            var _a = result.value, scope = _a[0], element = _a[1];
            if (elm === element) {
                return scope;
            }
        }
        return false;
    };
    IsolateModule.prototype.addEventDelegator = function (scope, eventDelegator) {
        var delegators = this.eventDelegators.get(scope);
        if (!delegators) {
            delegators = [];
            this.eventDelegators.set(scope, delegators);
        }
        delegators[delegators.length] = eventDelegator;
    };
    IsolateModule.prototype.reset = function () {
        this.isolatedElements.clear();
    };
    IsolateModule.prototype.createModule = function () {
        var self = this;
        return {
            create: function (oldVNode, vNode) {
                var _a = oldVNode.data, oldData = _a === void 0 ? {} : _a;
                var elm = vNode.elm, _b = vNode.data, data = _b === void 0 ? {} : _b;
                var oldScope = oldData.isolate || "";
                var scope = data.isolate || "";
                if (scope) {
                    if (oldScope) {
                        self.removeScope(oldScope);
                    }
                    self.setScope(elm, scope);
                    var delegators = self.eventDelegators.get(scope);
                    if (delegators) {
                        for (var i = 0, len = delegators.length; i < len; ++i) {
                            delegators[i].updateTopElement(elm);
                        }
                    }
                    else if (delegators === void 0) {
                        self.eventDelegators.set(scope, []);
                    }
                }
                if (oldScope && !scope) {
                    self.removeScope(scope);
                }
            },
            update: function (oldVNode, vNode) {
                var _a = oldVNode.data, oldData = _a === void 0 ? {} : _a;
                var elm = vNode.elm, _b = vNode.data, data = _b === void 0 ? {} : _b;
                var oldScope = oldData.isolate || "";
                var scope = data.isolate || "";
                if (scope && scope !== oldScope) {
                    if (oldScope) {
                        self.removeScope(oldScope);
                    }
                    self.setScope(elm, scope);
                }
                if (oldScope && !scope) {
                    self.removeScope(scope);
                }
            },
            remove: function (vNode, cb) {
                self.cleanupVNode(vNode);
                cb();
            },
            destroy: function (vNode) {
                self.cleanupVNode(vNode);
            },
        };
    };
    return IsolateModule;
}());
exports.IsolateModule = IsolateModule;
//# sourceMappingURL=isolateModule.js.map