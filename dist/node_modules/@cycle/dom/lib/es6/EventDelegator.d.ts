import { Stream } from 'xstream';
import { IsolateModule } from './IsolateModule';
import { PreventDefaultOpt } from './fromEvent';
export interface CycleDOMEvent extends Event {
    propagationHasBeenStopped: boolean;
    ownerTarget: Element;
}
/**
 * Manages "Event delegation", by connecting an origin with multiple
 * destinations.
 *
 * Attaches a DOM event listener to the DOM element called the "origin",
 * and delegates events to "destinations", which are subjects as outputs
 * for the DOMSource. Simulates bubbling or capturing, with regards to
 * isolation boundaries too.
 */
export declare class EventDelegator {
    private origin;
    eventType: string;
    useCapture: boolean;
    isolateModule: IsolateModule;
    preventDefault: PreventDefaultOpt;
    private destinations;
    private listener;
    private _lastId;
    constructor(origin: Element, eventType: string, useCapture: boolean, isolateModule: IsolateModule, preventDefault?: PreventDefaultOpt);
    updateOrigin(newOrigin: Element): void;
    /**
     * Creates a *new* destination given the namespace and returns the subject
     * representing the destination of events. Is not referentially transparent,
     * will always return a different output for the same input.
     */
    createDestination(namespace: Array<string>): Stream<Event>;
    /**
     * Removes the destination that has the given id.
     */
    private removeDestination(id);
    private capture(ev);
    private bubble(rawEvent);
    private patchEvent(event);
    private matchEventAgainstDestinations(el, ev);
    private mutateEventCurrentTarget(event, currentTargetElement);
}
