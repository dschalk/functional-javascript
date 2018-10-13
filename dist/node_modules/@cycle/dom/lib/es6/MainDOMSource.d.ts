import { Stream, MemoryStream } from 'xstream';
import { DOMSource, EventsFnOptions } from './DOMSource';
import { DocumentDOMSource } from './DocumentDOMSource';
import { BodyDOMSource } from './BodyDOMSource';
import { siblingIsolateSink } from './isolate';
import { IsolateModule } from './IsolateModule';
import { EventDelegator } from './EventDelegator';
export interface SpecialSelector {
    body: BodyDOMSource;
    document: DocumentDOMSource;
}
export declare class MainDOMSource implements DOMSource {
    private _rootElement$;
    private _sanitation$;
    private _namespace;
    _isolateModule: IsolateModule;
    _delegators: Map<string, EventDelegator>;
    private _name;
    constructor(_rootElement$: Stream<Element>, _sanitation$: Stream<null>, _namespace: Array<string>, _isolateModule: IsolateModule, _delegators: Map<string, EventDelegator>, _name: string);
    private _elements();
    elements(): MemoryStream<Array<Element>>;
    element(): MemoryStream<Element>;
    readonly namespace: Array<string>;
    select<T extends keyof SpecialSelector>(selector: T): SpecialSelector[T];
    select(selector: string): MainDOMSource;
    events(eventType: string, options?: EventsFnOptions): Stream<Event>;
    dispose(): void;
    isolateSource: (source: MainDOMSource, scope: string) => MainDOMSource;
    isolateSink: typeof siblingIsolateSink;
}
