

  
var pNums = start => n => {
  var store  = [], i, j, primes = [];
  for (i = start; i <= n; ++i) {
    if (!store [i]) {
      primes.push(i);
      for (j = i << 1; j <= n; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}

sortFactors = ar => ar.sort(function(x,y) {
  return (x - y);
});

onmessage = function(m) {
  var a = m.data;
  postMessage(g(a)(b));
}




