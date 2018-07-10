import { Stream } from 'xstream';
import { IsolateModule } from './isolateModule';
export interface CycleDOMEvent extends Event {
    propagationHasBeenStopped?: boolean;
    ownerTarget?: Element;
}
/**
 * Attaches an actual event listener to the DOM root element,
 * handles "destinations" (interested DOMSource output subjects), and bubbling.
 */
export declare class EventDelegator {
    private topElement;
    eventType: string;
    useCapture: boolean;
    isolateModule: IsolateModule;
    private destinations;
    private roof;
    private domListener;
    constructor(topElement: Element, eventType: string, useCapture: boolean, isolateModule: IsolateModule);
    private bubble(rawEvent);
    private matchEventAgainstDestinations(el, ev);
    private capture(ev);
    addDestination(subject: Stream<Event>, namespace: Array<string>, destinationId: number): void;
    createDestinationId(): number;
    removeDestinationId(destinationId: number): void;
    private patchEvent(event);
    private mutateEventCurrentTarget(event, currentTargetElement);
    updateTopElement(newTopElement: Element): void;
}
