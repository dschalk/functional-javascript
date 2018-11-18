


  qFunc = a => b => c => {
      console.log('qfB.ar.length', qfB.ar.length)
      var a = qfB.ar[0];
      var b = qfB.ar[2];
      var c = qfB.ar[4];
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
          Cow1 = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          Cow2 = `x = ${aa} and x = ${bb}`;
          // console.log("Cow1 and Cow2", Cow1, Cow2);
      }
      if (!(aa === aa)) {
          Cow1 = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          Cow2 = '';
          // console.log("Cow1 and Cow2", Cow1, Cow2);
      }
      qfB = mBnd(true);
  }

function qF9 () {
	if (qfB.ar.length > 4) {
		console.log("WOW!")
	    qFunc(qfB.ar[0])(qfB.ar[2])(qfB.ar[4]) 
    }
	else console.log("qfB.ar.length", qfB.ar.length)
};

qfB.run(toInt(e.target.value))(qF9);
qfB.run(toInt(e.target.value))(qF9);
qfB.run(toInt(e.target.value))(qF9);


 
