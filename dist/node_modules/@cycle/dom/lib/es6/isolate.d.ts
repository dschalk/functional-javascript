import { Stream } from 'xstream';
import { VNode } from 'snabbdom/vnode';
import { DOMSource } from './DOMSource';
export declare function isolateSource<S extends DOMSource>(source: S, scope: string): S;
export declare function siblingIsolateSink(sink: Stream<VNode | null | undefined>, scope: string): Stream<VNode | null | undefined>;
export declare function totalIsolateSink(sink: Stream<VNode | null | undefined>, fullScope: string): Stream<VNode | null | undefined>;
