import { Driver } from '@cycle/run';
import { Module } from 'snabbdom/modules/module';
import { Stream } from 'xstream';
import { MainDOMSource } from './MainDOMSource';
import { VNode } from 'snabbdom/vnode';
import 'es6-map/implement';
export interface DOMDriverOptions {
    modules?: Array<Module>;
}
declare function makeDOMDriver(container: string | Element | DocumentFragment, options?: DOMDriverOptions): Driver<Stream<VNode>, MainDOMSource>;
export { makeDOMDriver };
