import { vnode } from 'snabbdom/vnode';
import { SCOPE_PREFIX, isClassOrId } from './utils';
function totalIsolateSource(source, scope) {
    return source.select(SCOPE_PREFIX + scope);
}
function siblingIsolateSource(source, scope) {
    return source.select(scope);
}
export function isolateSource(source, scope) {
    if (scope === ':root') {
        return source;
    }
    else if (isClassOrId(scope)) {
        return siblingIsolateSource(source, scope);
    }
    else {
        return totalIsolateSource(source, scope);
    }
}
export function siblingIsolateSink(sink, scope) {
    return sink.map(function (node) {
        return node
            ? vnode(node.sel + scope, node.data, node.children, node.text, node.elm)
            : node;
    });
}
export function totalIsolateSink(sink, fullScope) {
    return sink.map(function (node) {
        if (!node) {
            return node;
        }
        // Ignore if already had up-to-date full scope in vnode.data.isolate
        if (node.data && node.data.isolate) {
            var isolateData = node.data.isolate;
            var prevFullScopeNum = isolateData.replace(/(cycle|\-)/g, '');
            var fullScopeNum = fullScope.replace(/(cycle|\-)/g, '');
            if (isNaN(parseInt(prevFullScopeNum)) ||
                isNaN(parseInt(fullScopeNum)) ||
                prevFullScopeNum > fullScopeNum) {
                // > is lexicographic string comparison
                return node;
            }
        }
        // Insert up-to-date full scope in vnode.data.isolate, and also a key if needed
        node.data = node.data || {};
        node.data.isolate = fullScope;
        if (typeof node.key === 'undefined') {
            node.key = SCOPE_PREFIX + fullScope;
        }
        return node;
    });
}
//# sourceMappingURL=isolate.js.map