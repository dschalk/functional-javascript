 function onCh(obj) {
    const h = {
        set (obj, prop, value) {
            console.log("Firebug", obj);
            return Reflect.set(obj, prop, value);
        },
    };
    return new Proxy(obj, h);
}
var ob = onCh([1,2,3,4,5]);
console.log(ob);
return ob;


