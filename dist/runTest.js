
var obbb1 = Compose();
var obbb2 = Compose();
var obbb3 = Compose();
var obbb4 = Compose();
var obbb5 = Compose();
var obbb6 = Compose();
var obbb7 = Compose();
var obbb8 = Compose();
var obbb9 = Compose();

function runCompTest (k) {
    var obbb1 = Compose([k, k*k]);
    obbb1.run(fork(obbb1))(x=>x*x);
    console.log("obbb1.ar is", obbb1.ar);

    var obbb2 = Compose(obbb1.ar);
    obbb2.run(fork(obbb2))(incC(obbb2))(x=>x*x);
    console.log("obbb2.ar is", obbb2.ar);

    var obbb3 = Compose(obbb2.ar);
    obbb3.run(fork(obbb3))(incC(obbb3))(x=>x*x);
    console.log("obbb3.ar is", obbb3.ar);

    var obbb4 = Compose(obbb3.ar);
    obbb4.run(fork(obbb4))(incC(obbb4))(x=>x*x);
    console.log("obbb4.ar is", obbb4.ar);       

    var obbb5 = Compose(obbb4.ar);
    obbb5.run(fork(obbb5))(incC(obbb5))(x=>x*x);
    console.log("obbb5.ar is", obbb5.ar);

    obbb6 = Compose(obbb5.ar);
    obbb6.run(fork(obbb6))(incC(obbb6))(square3)(v => mMZ56.release(v));
    setTimeout(() => obbb6.ar.pop(), 3200 );
    console.log("obbb6.ar is", obbb6.ar);

    obbb7 = Compose(obbb6.ar);
    mMZ56.bnd(val => obbb7.run(val)(incC(obbb7))(square3))
    console.log("obbb7.ar is", obbb7.ar);
};

