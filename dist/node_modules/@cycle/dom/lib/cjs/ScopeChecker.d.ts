import { IsolateModule } from './IsolateModule';
export declare class ScopeChecker {
    private fullScope;
    private isolateModule;
    constructor(fullScope: string, isolateModule: IsolateModule);
    /**
     * Checks whether the given element is *directly* in the scope of this
     * scope checker. Being contained *indirectly* through other scopes
     * is not valid. This is crucial for implementing parent-child isolation,
     * so that the parent selectors don't search inside a child scope.
     */
    isDirectlyInScope(leaf: Element): boolean;
}
