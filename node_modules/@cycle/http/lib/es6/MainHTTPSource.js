import { isolateSource, isolateSink } from './isolate';
import { adapt } from '@cycle/run/lib/adapt';
var MainHTTPSource = /** @class */ (function () {
    function MainHTTPSource(_res$$, _name, _namespace) {
        if (_namespace === void 0) { _namespace = []; }
        this._res$$ = _res$$;
        this._name = _name;
        this._namespace = _namespace;
        this.isolateSource = isolateSource;
        this.isolateSink = isolateSink;
    }
    MainHTTPSource.prototype.filter = function (predicate, scope) {
        var filteredResponse$$ = this._res$$.filter(function (r$) { return predicate(r$.request); });
        return new MainHTTPSource(filteredResponse$$, this._name, scope === undefined ? this._namespace : this._namespace.concat(scope));
    };
    MainHTTPSource.prototype.select = function (category) {
        var res$$ = category
            ? this._res$$.filter(function (res$) { return res$.request && res$.request.category === category; })
            : this._res$$;
        var out = adapt(res$$);
        out._isCycleSource = this._name;
        return out;
    };
    return MainHTTPSource;
}());
export { MainHTTPSource };
//# sourceMappingURL=MainHTTPSource.js.map