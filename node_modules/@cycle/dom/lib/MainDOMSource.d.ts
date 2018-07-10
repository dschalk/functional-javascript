import { StreamAdapter } from '@cycle/base';
import { Stream } from 'xstream';
import { DOMSource, EventsFnOptions } from './DOMSource';
import { VNode } from './interfaces';
import { IsolateModule } from './isolateModule';
import { EventDelegator } from './EventDelegator';
export declare class MainDOMSource implements DOMSource {
    private _rootElement$;
    private _sanitation$;
    private _runStreamAdapter;
    private _namespace;
    _isolateModule: IsolateModule;
    _delegators: Map<string, EventDelegator>;
    private _name;
    constructor(_rootElement$: Stream<Element>, _sanitation$: Stream<{}>, _runStreamAdapter: StreamAdapter, _namespace: Array<string>, _isolateModule: IsolateModule, _delegators: Map<string, EventDelegator>, _name: string);
    elements(): any;
    readonly namespace: Array<string>;
    select(selector: string): DOMSource;
    events(eventType: string, options?: EventsFnOptions): any;
    dispose(): void;
    private __JANI_EVAKALLIO_WE_WILL_MISS_YOU_PLEASE_COME_BACK_EVENTUALLY;
    isolateSource: (source: DOMSource, scope: string) => DOMSource;
    isolateSink: (sink: Stream<VNode>, scope: string) => Stream<VNode>;
}
