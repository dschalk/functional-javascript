import xs from 'xstream';
import { adapt } from '@cycle/run/lib/adapt';
import { MainHTTPSource } from './MainHTTPSource';
import * as superagent from 'superagent';
function preprocessReqOptions(reqOptions) {
    reqOptions.withCredentials = reqOptions.withCredentials || false;
    reqOptions.redirects =
        typeof reqOptions.redirects === 'number' ? reqOptions.redirects : 5;
    reqOptions.method = reqOptions.method || "get";
    return reqOptions;
}
export function optionsToSuperagent(rawReqOptions) {
    var reqOptions = preprocessReqOptions(rawReqOptions);
    if (typeof reqOptions.url !== "string") {
        throw new Error("Please provide a `url` property in the request options.");
    }
    var lowerCaseMethod = (reqOptions.method || 'GET').toLowerCase();
    var sanitizedMethod = lowerCaseMethod === "delete" ? "del" : lowerCaseMethod;
    var request = superagent[sanitizedMethod](reqOptions.url);
    if (typeof request.redirects === "function") {
        request = request.redirects(reqOptions.redirects);
    }
    if (reqOptions.type) {
        request = request.type(reqOptions.type);
    }
    if (reqOptions.send) {
        request = request.send(reqOptions.send);
    }
    if (reqOptions.accept) {
        request = request.accept(reqOptions.accept);
    }
    if (reqOptions.query) {
        request = request.query(reqOptions.query);
    }
    if (reqOptions.withCredentials) {
        request = request.withCredentials();
    }
    if (reqOptions.agent) {
        request = request.key(reqOptions.agent.key);
        request = request.cert(reqOptions.agent.cert);
    }
    if (typeof reqOptions.user === 'string' &&
        typeof reqOptions.password === 'string') {
        request = request.auth(reqOptions.user, reqOptions.password);
    }
    if (reqOptions.headers) {
        for (var key in reqOptions.headers) {
            if (reqOptions.headers.hasOwnProperty(key)) {
                request = request.set(key, reqOptions.headers[key]);
            }
        }
    }
    if (reqOptions.field) {
        for (var key in reqOptions.field) {
            if (reqOptions.field.hasOwnProperty(key)) {
                request = request.field(key, reqOptions.field[key]);
            }
        }
    }
    if (reqOptions.attach) {
        for (var i = reqOptions.attach.length - 1; i >= 0; i--) {
            var a = reqOptions.attach[i];
            request = request.attach(a.name, a.path, a.filename);
        }
    }
    if (reqOptions.responseType) {
        request = request.responseType(reqOptions.responseType);
    }
    if (reqOptions.ok) {
        request = request.ok(reqOptions.ok);
    }
    return request;
}
export function createResponse$(reqInput) {
    return xs.create({
        start: function startResponseStream(listener) {
            try {
                var reqOptions_1 = normalizeRequestInput(reqInput);
                this.request = optionsToSuperagent(reqOptions_1);
                if (reqOptions_1.progress) {
                    this.request = this.request.on('progress', function (res) {
                        res.request = reqOptions_1;
                        listener.next(res);
                    });
                }
                this.request.end(function (err, res) {
                    if (err) {
                        if (err.response) {
                            err.response.request = reqOptions_1;
                        }
                        listener.error(err);
                    }
                    else {
                        res.request = reqOptions_1;
                        listener.next(res);
                        listener.complete();
                    }
                });
            }
            catch (err) {
                listener.error(err);
            }
        },
        stop: function stopResponseStream() {
            if (this.request && this.request.abort) {
                this.request.abort();
            }
        },
    });
}
function softNormalizeRequestInput(reqInput) {
    var reqOptions;
    try {
        reqOptions = normalizeRequestInput(reqInput);
    }
    catch (err) {
        reqOptions = { url: 'Error', _error: err };
    }
    return reqOptions;
}
function normalizeRequestInput(reqInput) {
    if (typeof reqInput === 'string') {
        return { url: reqInput };
    }
    else if (typeof reqInput === 'object') {
        return reqInput;
    }
    else {
        throw new Error("Observable of requests given to HTTP Driver must emit " +
            "either URL strings or objects with parameters.");
    }
}
function requestInputToResponse$(reqInput) {
    var response$ = createResponse$(reqInput).remember();
    var reqOptions = softNormalizeRequestInput(reqInput);
    if (!reqOptions.lazy) {
        response$.addListener({
            next: function () { },
            error: function () { },
            complete: function () { },
        });
    }
    response$ = adapt(response$);
    Object.defineProperty(response$, 'request', {
        value: reqOptions,
        writable: false,
    });
    return response$;
}
export function makeHTTPDriver() {
    function httpDriver(request$, name) {
        var response$$ = request$.map(requestInputToResponse$);
        var httpSource = new MainHTTPSource(response$$, name, []);
        response$$.addListener({
            next: function () { },
            error: function () { },
            complete: function () { },
        });
        return httpSource;
    }
    return httpDriver;
}
//# sourceMappingURL=http-driver.js.map