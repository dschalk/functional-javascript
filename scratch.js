

  oneAction$ = qF1$.map(function (e) {
      if (e.keyCode === 13) {
          var z = e.target.value.split(",");
          var a = z[0];
          var b = z[1];
          var c = z[2];
          var ar = a.map(x=>toInt(x));
          Bind[r.a] = [];
          qR1 = r.b(a)(b)(c)
              (()=>(-f(r)[1] - Math.sqrt(f(r)[1]*f(r)[1] - 
              4*f(r)[0]*f(r)[2]))/(2*f(r)[0]))().pop()
          Bind[r.a] = [];
          qR2 = r.b(a[0])(a[1])(a[2])
              (()=>(-f(r)[1] + Math.sqrt(f(r)[1]*f(r)[1] - 
              4*f(r)[0]*f(r)[2]))/(2*f(r)[0]))().pop()
          document.getElementById('qF1').value = null;
      }
  });


