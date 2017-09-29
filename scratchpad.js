

function fmap (f, mon) {
  return ret((f(mon.x)),mon.id);
} 

let v = ret(3,'v')
let v2 = fmap (cube,m)
console.log(m)


