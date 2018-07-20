import { FantasyObservable } from '@cycle/run';
import { DOMSource, EventsFnOptions } from './DOMSource';
export declare type MockConfig = {
    [name: string]: FantasyObservable | MockConfig;
};
export declare class MockedDOMSource implements DOMSource {
    private _mockConfig;
    private _elements;
    constructor(_mockConfig: MockConfig);
    elements(): any;
    element(): any;
    events(eventType: string, options?: EventsFnOptions): any;
    select(selector: string): MockedDOMSource;
    isolateSource(source: MockedDOMSource, scope: string): MockedDOMSource;
    isolateSink(sink: any, scope: string): any;
}
export declare function mockDOMSource(mockConfig: MockConfig): MockedDOMSource;
