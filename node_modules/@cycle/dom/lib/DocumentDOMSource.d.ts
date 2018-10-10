import { StreamAdapter } from '@cycle/base';
import { DOMSource, EventsFnOptions } from './DOMSource';
export declare class DocumentDOMSource implements DOMSource {
    private _runStreamAdapter;
    private _name;
    constructor(_runStreamAdapter: StreamAdapter, _name: string);
    select(selector: string): DOMSource;
    elements(): any;
    events(eventType: string, options?: EventsFnOptions): any;
}
