import { StreamAdapter } from '@cycle/base';
import xs from 'xstream';
import { VNode } from './interfaces';
export declare function makeTransposeVNode(runStreamAdapter: StreamAdapter): (vnode: VNode) => xs<VNode>;
