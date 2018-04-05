









function bind (x, ar=[]) {
  var ar = ar;
  ar.push(x)
  return function debug8 (func) {
    var p = func(x);
    return bind(p, ar);
  };
};


onmessage = function(m) {
  console.log('In workerB. m is', m);
  var ar = m.data.slice();
  importScripts('script2.js');
  var x = Date.now();

  postMessage(['red', 'yellow', 'yellow', 'color', 
    'computing fibs', 'pending', 'pending']);
  // fpTransformer(execF(ar[1]), ar[0], x);
  bind(ar[1])(execF)(fpFunc(ar[0])(x));
}

