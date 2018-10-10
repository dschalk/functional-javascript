import { IsolateModule } from './IsolateModule';
export declare class ElementFinder {
    namespace: Array<string>;
    isolateModule: IsolateModule;
    constructor(namespace: Array<string>, isolateModule: IsolateModule);
    call(rootElement: Element): Array<Element>;
}
