

var onChange = (e,t)=>{
            const n = {
                get(e, t, o) {
                    try {
                        return new Proxy(e[t],n)
                    } catch (n) {
                        return Reflect.get(e, t, o)
                    }
                },
                defineProperty: (e,n,o)=>(t(),
                Reflect.defineProperty(e, n, o)),
                deleteProperty: (e,n)=>(t(),
                Reflect.deleteProperty(e, n))
            };
            return new Proxy(e,n)
        }


function Bind(str, bool = false) {
    arBind[str] = [];
    if (bool) {arBind[str] = onChange(arBind[str], () => diffRender())};
    var p;
    var _bind = function _bind(x) {
        if (x instanceof Promise) x.then(y => {
            arBind[str].push(y);
            diffRender();
        })
        else {
            arBind[str].push(x)
            diffRender();
        }
        return func => {
            if (func == undefined) return arBind[str];
            if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return _bind(p);
        };
    };
};
    
    _C0 = test6(b87())(x+0);
    _C1 = test6(b87())(x+1);
    _C2 = test6(b87())(x+2);
    _C3 = test6(b87())(x+3);
    _C4 = test6(b87())(x+4);
    _C5 = test6(b87())(x+5);
    _C6 = test6(b87())(x+6);
    _C7 = test6(b87())(x+7);
    _C8 = test6(b87())(x+8);
    
