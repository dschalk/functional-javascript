import { Stream } from 'xstream';
import { HTTPSource, RequestInput } from './interfaces';
export declare function isolateSource(httpSource: HTTPSource, scope: string | null): HTTPSource;
export declare function isolateSink(request$: Stream<RequestInput | string>, scope: string | null): Stream<RequestInput>;
