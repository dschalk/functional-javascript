import { VNode } from './interfaces';
import { EventDelegator } from './EventDelegator';
export declare class IsolateModule {
    private isolatedElements;
    private eventDelegators;
    constructor(isolatedElements: Map<string, Element>);
    private setScope(elm, scope);
    private removeScope(scope);
    private cleanupVNode({data, elm});
    getIsolatedElement(scope: string): Element | undefined;
    isIsolatedElement(elm: Element): string | boolean;
    addEventDelegator(scope: string, eventDelegator: EventDelegator): void;
    reset(): void;
    createModule(): {
        create(oldVNode: VNode, vNode: VNode): void;
        update(oldVNode: VNode, vNode: VNode): void;
        remove(vNode: VNode, cb: Function): void;
        destroy(vNode: VNode): void;
    };
}
