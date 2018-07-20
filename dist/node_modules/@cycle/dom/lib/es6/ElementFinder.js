import { ScopeChecker } from './ScopeChecker';
import { getFullScope, getSelectors } from './utils';
import { matchesSelector } from './matchesSelector';
function toElArray(input) {
    return Array.prototype.slice.call(input);
}
var ElementFinder = /** @class */ (function () {
    function ElementFinder(namespace, isolateModule) {
        this.namespace = namespace;
        this.isolateModule = isolateModule;
    }
    ElementFinder.prototype.call = function (rootElement) {
        var namespace = this.namespace;
        var selector = getSelectors(namespace);
        if (!selector) {
            return [rootElement];
        }
        var fullScope = getFullScope(namespace);
        var scopeChecker = new ScopeChecker(fullScope, this.isolateModule);
        var topNode = fullScope
            ? this.isolateModule.getElement(fullScope) || rootElement
            : rootElement;
        var topNodeMatchesSelector = !!fullScope && !!selector && matchesSelector(topNode, selector);
        return toElArray(topNode.querySelectorAll(selector))
            .filter(scopeChecker.isDirectlyInScope, scopeChecker)
            .concat(topNodeMatchesSelector ? [topNode] : []);
    };
    return ElementFinder;
}());
export { ElementFinder };
//# sourceMappingURL=ElementFinder.js.map