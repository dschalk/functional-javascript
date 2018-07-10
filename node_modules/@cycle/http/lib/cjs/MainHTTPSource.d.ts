import { Stream, MemoryStream } from 'xstream';
import { HTTPSource } from './interfaces';
import { isolateSource, isolateSink } from './isolate';
import { Response, ResponseStream, RequestOptions } from './interfaces';
export declare class MainHTTPSource implements HTTPSource {
    private _res$$;
    private _name;
    private _namespace;
    constructor(_res$$: Stream<MemoryStream<Response> & ResponseStream>, _name: string, _namespace?: Array<string>);
    filter(predicate: (request: RequestOptions) => boolean, scope?: string): HTTPSource;
    select(category?: string): any;
    isolateSource: typeof isolateSource;
    isolateSink: typeof isolateSink;
}
