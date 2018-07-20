import { Stream, MemoryStream } from 'xstream';
import { DOMSource, EventsFnOptions } from './DOMSource';
export declare class DocumentDOMSource implements DOMSource {
    private _name;
    constructor(_name: string);
    select(selector: string): DocumentDOMSource;
    elements(): MemoryStream<Array<Document>>;
    element(): MemoryStream<Document>;
    events(eventType: string, options?: EventsFnOptions): Stream<Event>;
}
