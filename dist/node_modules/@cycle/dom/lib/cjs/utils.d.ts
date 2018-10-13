export declare function isClassOrId(str: string): boolean;
export declare function isDocFrag(el: Element | DocumentFragment): el is DocumentFragment;
export declare const SCOPE_PREFIX = "$$CYCLEDOM$$-";
export declare function checkValidContainer(container: Element | DocumentFragment | string): void;
export declare function getValidNode(selectors: Element | DocumentFragment | string): Element | DocumentFragment | null;
/**
 * The full scope of a namespace is the "absolute path" of scopes from
 * parent to child. This is extracted from the namespace, filter only for
 * scopes in the namespace.
 */
export declare function getFullScope(namespace: Array<String>): string;
export declare function getSelectors(namespace: Array<String>): string;
