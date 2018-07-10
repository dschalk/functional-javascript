import { Stream, MemoryStream } from 'xstream';
import { Driver } from '@cycle/run';
import { HTTPSource, ResponseStream, RequestOptions, RequestInput, Response } from './interfaces';
export declare function optionsToSuperagent(rawReqOptions: RequestOptions): any;
export declare function createResponse$(reqInput: RequestInput): Stream<Response>;
export declare type ResponseMemoryStream = MemoryStream<Response> & ResponseStream;
export declare function makeHTTPDriver(): Driver<Stream<RequestInput>, HTTPSource>;
