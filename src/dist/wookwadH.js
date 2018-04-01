












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
  console.log('In pNums <D><D><D> primes:', primes);
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
  // arr = p.concat(arr)
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
  return ([primes,factors]);
}
  
onmessage = function(m) {
  var a = m.data[0];
  var b = parseInt(m.data[1],10);
  postMessage(g(a)(b));

}
/*


store = [];
primes = [];

function pNums(st, n) {
  var i, j, pr = [], st = [];
  for (i = st; i <= n; ++i) {
    if (!st[i]) {
      pr.push(i);
      for (j = i << 1; j <= n; j += i) {
        st[j] = true;
      }
    }
  }
  return pr;
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
  artie = p.concat(arr)
  return [arr,artie];
}  

function pfactors (prms, n) {
  var ar = [];
    prms.map(p => {
      while (n/p === (n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  return ar;
}

sortFactors = ar => ar.sort(function(x,y) {
  return (x - y);
});
var g = p => x => { var z = primeNums(p,x);
  var arty = z[0];
  var primes = z[1];
  var factors = pfactors(primes,x);
  var z;
  if (factors.length > 1) {
    z = "The prime factors of " + x + " are " + sortFactors(factors).join(', ')
  }
  else z = x + " is a prime number"
  console.log('In workerH.js workerH.js workerH.js <W>W<W>W<W> > -> p,x,arty,primes: ', p,x,arty,primes);

  return [primes, z, arty];
}
  
onmessage = function(m) {
  var a = m.data[0];
  var b = Math.sqrt(m.data[1]);
  postMessage(g(a)(b));
}  
*/








