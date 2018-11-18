
var test6 = z => w  => {
  var z = Bind("z");
  var ar = arBind["z"];
  return z(w)(cubeP)(addP(3))(squareP)
  (x=>addP(x)(-30*ar[1]))
  (s=>idP(Math.floor(s/ar[2])))
  (x=>idP(x+Math.floor(ar[0]*ar[1]*
    (ar[2]/ar[3]))))(); 
};

