import { Stream, MemoryStream } from 'xstream';
import { DOMSource, EventsFnOptions } from './DOMSource';
export declare class BodyDOMSource implements DOMSource {
    private _name;
    constructor(_name: string);
    select(selector: string): BodyDOMSource;
    elements(): MemoryStream<Array<HTMLBodyElement>>;
    element(): MemoryStream<HTMLBodyElement>;
    events(eventType: string, options?: EventsFnOptions): Stream<Event>;
}
