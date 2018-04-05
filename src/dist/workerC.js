





function pNums(start, n, primes) {
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

function small (primes, v) {
  return primes.slice(0, primes.indexOf(primes.find(e => e > v)));
};

function primeNums (p,x) {
  var q = p[p.length - 1];
  if (q > x) return small(p,x)
  else {
    var arr = pNums(q,x,p); 
  // for (var i = q - 1; i < Math.ceil(x+1)+1; i+=1) if (isPrime(i)) arr.push(i);
    return p.concat(arr);
  }
};

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
  console.log('In onmesage in workerH.js')
  var a = m.data[0];
  var b = parseInt(m.data[1],10);
  postMessage(g(a)(b));
}


/* function pNums(start, n) {
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

function small (primes, v) {
  return primes.slice(0, primes.indexOf(primes.find(e => e > v)));
};

function primeNums (p,x) {
  var q = p[p.length - 1], r = Math.ceil(x/2); 
  console.log('In primeNums --- q, r, (r>q)', q, x, (q > x))
  if (q > r) return small(p,r);
  else {
    var z = pNums(q,x);
    p.pop();
    return p.concat(z);
  }
};  

function pfactors (prms, n) {
  var ar = [];
    prms.map(p => {
      while (n/p === Math.floor(n/p)) {
        console.log('In pfactors --- p', p);
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
} */
  
