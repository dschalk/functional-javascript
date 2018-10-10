import { VNode } from 'snabbdom/vnode';
import { EventDelegator } from './EventDelegator';
export declare class IsolateModule {
    private elementsByFullScope;
    /**
     * A Map where keys are full scope strings and values are many delegators
     * for that scope. The only reason why this data structure is here is to
     * be able to update the origin element inside those delegators.
     * The delegators are never created in this class.
     */
    private delegatorsByFullScope;
    /**
     * A registry of full scopes representing scopes that are currently
     * being updated in delegators or elements. This is useful to avoid
     * cleaning up data structures for an element that is being *replaced*,
     * not *removed* in the virtual DOM.
     */
    private fullScopesBeingUpdated;
    /**
     * A registry that keeps track of all the nodes that are removed from
     * the virtual DOM in a single patch. Those nodes are cleaned once snabbdom
     * has finished patching the DOM.
     */
    private vnodesBeingRemoved;
    constructor();
    private cleanupVNode({data, elm});
    getElement(fullScope: string): Element | undefined;
    getFullScope(elm: Element): string;
    addEventDelegator(fullScope: string, eventDelegator: EventDelegator): void;
    reset(): void;
    createModule(): {
        create(oldVNode: VNode, vNode: VNode): void;
        update(oldVNode: VNode, vNode: VNode): void;
        destroy(vNode: VNode): void;
        remove(vNode: VNode, cb: Function): void;
        post(): void;
    };
}
