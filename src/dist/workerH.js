

function pNums(start, n) {
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

function isPrime(n) {
   var m = Math.ceil(Math.sqrt(n));
   for (var i=2;i<=m;i++) if (n%i==0) return false;
   return true;
}

function primeNums (p,x) {
  var q = p[p.length - 1];
  var arr = pNums(q,x); 
  // for (var i = q - 1; i < Math.ceil(x+1)+1; i+=1) if (isPrime(i)) arr.push(i);
  arr = p.concat(arr)
  return arr
}  

function pfactors (prms, n) {
  var ar = [];
    prms.map(p => {
      while (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  return ar;
}

sortFactors = ar => ar.sort(function(x,y) {
  return (x - y);
});

var g = p => x => {
  var primes = primeNums(p,x);
  var factors = pfactors(primes,x);
  var z;
  if (factors.length > 1) {
    z = "The prime factors of " + x + " are " + sortFactors(factors).join(', ')
  }
  else z = x + " is a prime number"
  return [primes, z];
}
  
onmessage = function(m) {
  var a = m.data[0];
  var b = parseInt(m.data[1],10);
  postMessage(g(a)(b));
}









