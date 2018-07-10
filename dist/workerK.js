



sortFactors = ar => ar.sort(function(x,y) {
  return (x - y);
});

  function pNums(pr, h, n) {
  var i, j, pr = [];
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
var primeNums = p => x => {
  var q = p[p.length - 1];
  var arr = pNums(p, q, x); 
  // for (var i = q - 1; i < Math.ceil(x+1)+1; i+=1) if (isPrime(i)) arr.push(i);
  var artie = p.concat(arr)
  return artie;
}  

onmessage = function(m) {
  var a = m.data[0];
  var b = Math.sqrt(m.data[1]);
  postMessage(primeNums(a)(b));
}  





