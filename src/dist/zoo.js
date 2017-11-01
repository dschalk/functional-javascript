var addC = a => b => ret(a+b)

function eq(mon1, mon2) {
  if (mon1.id === mon2.id && mon1.x === mon2.x) return true;
  return false;
}


console.log(eq((b => ret(3+b)),addC(3)))






