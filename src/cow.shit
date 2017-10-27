import {run} from '@cycle/xstream-run';
import {h, p, span, h1, h2, h3, pre, br, div, label, input, hr, makeDOMDriver} from '@cycle/dom';
import code from './code.js';
// import {EventEmitter} from 'events'
console.log('If you can read this you are in main.js <@><@><@><@><@><@><@><@>');
var textA = h('textarea', 'You bet!' );
var formA = h('form#horses', 'You bet!' );

socket.addEventListener('message', function (event) {
  console.log('<$><$><$><$><$><$><$><$><$> $$ Message from server: event.data ', event.data);
});
console.log(xs);
/*
var stream = xs.periodic(1000)
  .filter(i => i % 2 === 0)
  .map(i => i * i)
  .endWhen(xs.periodic(5000).take(1))
*/
(async function hello() {
  await wait(2000);
  console.log('*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*');
  console.log( 'Hello Nurse, you beautiful woman.' );
  console.log('*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*');
})()

function login () {
  console.log('000000000000000000000000000000000000000000000 Entering login', socket.readyState);
  setTimeout(function () {
  if (socket.readyState === 1) {
    console.log('readyState is',socket.readyState);
    var v = Math.random().toString().substring(5);
    var v2 = v.toString().substring(2);
    var v2 = "password"
    pMname.ret(v);
    pMoldName.ret(v);
    pMgroup.ret('solo');
    var combo = v + '<o>' + v2;
    socket.send('CC#$42' + combo );
    pMcombo.ret(combo);
    pMclicked.ret([]);
    socket.send(`GZ#$42,solo,${v}`);
  }
  else {
    login();
  }
  },500 );
}

login();

function main(sources) {
 console.log('0^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got this far');

 const messages$ = sources.WS.map( e => {
   console.log(e);
   var v = e.data.split(',')
   var group = v[1]
   var sender =  v[2];
   var extra = v[3];
   var extra2 = v[4];
   console.log('In messages$ - - v is', v );

   mMZ10.bnd( () => {
     if (sender === pMname.x) {
       gameMonad.run([v[7], v[8], 0, [], [v[3], v[4], v[5], v[6]]]);
     }
     else gameMonad.run([, , , [], [v[3], v[4], v[5], v[6]]]);
   });

   mMZ11.bnd( () => {
     console.log('The message arrived', messages);
     var message = v.slice(3,v.length).join(', ');
     var str = v[2] + ': ' + message;
     messages.unshift(h('span', str ), h('br'));
     console.log('The message was typeof ar', typeof str );
   });

   mMZ12.bnd( () => {
     mMgoals2.ret('The winner is ' + v[2]);
     setTimeout( function () {mMgoals2.ret('')},7000);
   });

   mMZ13.bnd( () => {
     mMgoals2.ret('A player named ' + v[2] +
       ' is currently logged in. Page will refresh in 4 seconds.')
     refresh() });

   mMZ14.bnd( () => {
     var ar = e.data.split("<$>")[1];
     console.log("In mZ14.bnd - - ar is", ar);
     console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzztaskMonad',taskMonad);
     return taskMonad.init(ar);
   });

   mMZ15.bnd( () => {
     var ar = [];
     var arr = v[3].slice();
     var arr2 = arr.split("<$!$>");
     var arr3  = arr2.map(v => {
       ar.push(v);
       ar.push(h('br'));
     });
     gameData = ar;
   });
    
   mMZ16.bnd( () => {                          // Prefix RR#$42
     var str = mMcommentStr.x;
     if (extra2 === "code1") {
       mMregister.ret('The registered name ' + extra + ' and the associated password were recognized. ' ); 
       socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
     } 
     if (extra2 === "code2") {
       mMregister.ret('The new name ' + extra + ' was registered.' );  
       socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
     }
     if (extra2 === "code3") {
       pMname.ret(sender);
       mMregister.ret('The password you entered is not the password that is registered for ' + extra + '.' ); 
     }
   });

   mMZ17.bnd( () => {                          // Prefix GZ#$42
     console.log('GZ comments coming in. extra is',extra);
     var newStr = extra.substring(0, extra.length-3);
     newStr = newStr.replace(/<@><@>/g, "<@>");
     newStr = newStr.replace(/↵/g, '');
     console.log('GZ comments coming in. newStr is',newStr);
     if (newStr === "") return;
     commentMonad.init(newStr);
   });

   mMZ18.bnd( () => {                          // Prefix GN#$42  NEW COMMENT
     commentMonad.append(extra);
   });

   mMZ19.bnd( () => {                          // Prefix GE#$42  EDIT A COMMENT
     commentMonad.edit(extra, extra2);
     console.log('In mMZ19 to edit a comment. <><><><><><><> extra, extra2:',extra,extra2);
   });

   mMZ20.bnd( () => {                          
     commentMonad.remove(parseInt(extra,10));
   });
  // ******************************************************* TASKS
   mMZ21.bnd( () => {        // add a new a task
     console.log('ooooooooooooooooooo New task from the server', extra);
     taskMonad.append(extra);
   });

   mMZ22.bnd( () => {        // edit a task
     taskMonad.edit(v[3],v[4]);
   });

   mMZ23.bnd( () => {        
     taskMonad.toggle(v[3]+1);
   });

   mMZ24.bnd( () => {        //Delete a task
     taskMonad.delete(v[3]);
   });

   mMZ25.bnd( () => {        // Receive tasks when group changes
     console.log('QQQQQQQQQQQQQWWWWWWWWWWQQQQQQQQ in mMZ25.bnd. extra is ',extra);

     taskMonad.init(extra);
   });
   
   mMZ26.bnd( () => {
     stateArray = [];
     var ar = extra.split("<@>")
     console.log('------- ar is',ar);
     ar.forEach(v => stateArray.push(h('div', v )))
   })

 ret(v[0])
  .bnd(next, 'CA#$42', mMZ10) // Dice roll
  .bnd(next, 'CD#$42', mMZ11)
  .bnd(next, 'CE#$42', mMZ12)
  .bnd(next, 'EE#$42', mMZ13)
  .bnd(next, 'TD#$42', mMZ14)
  .bnd(next, 'NN#$42', mMZ15)
  .bnd(next, 'RR#$42', mMZ16)
  .bnd(next, 'GZ#$42', mMZ17) // Comments automatically arrive after the app loads
  .bnd(next, 'GN#$42', mMZ18)
  .bnd(next, 'GE#$42', mMZ19)
  .bnd(next, 'GD#$42', mMZ20)
  .bnd(next, 'TA#$42', mMZ21)  // Automatic task list load on group change
  .bnd(next, 'TE#$42', mMZ22)  // edit a task
  .bnd(next, 'TT#$42', mMZ23)  // chechbox
  .bnd(next, 'TX#$42', mMZ24)  // delete button
  .bnd(next, 'TI#$42', mMZ25)  // group change
  .bnd(next, 'ST#$42', mMZ26)  // server state
 });

 console.log('1^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got this far');
function next(x, y, instance, z) {
  if (x == y) {
      instance.release(z);
  }
  return ret(x);
};
 
/*
async function waitP (f, args) {
  var z = await (p);
  m80.ret(z);
  console.log(m80.x);
  return m80.x;
}

console.log('m80.x',m80.x);

 function bind (x, ar = [], args) {
    this.ar = ar;
    var xano = "Charles"
    ar.push(x);
    if (ar.length === 0) ar = [x];
    console.log('Entering bind. x and ar are',x,ar);
    return function debug8 (func, args=[]) {

      if (func.name === "terminate") return ar;
       
      if (func(x, ...args) instanceof Promise) {
        console.log('bind: func(x, ...args) instanceof Promise');
        return async () => {
          await waitP(func(x, ...args))
          return bind(m80, ar);
        }
      }
      
      var y = func(x, ...args) 
      
      if (func(x, ...args) instanceof Monad) {
        console.log('bind: y is a monad. y.x and ar',y.x,ar);
        return bind(y.x, ar);
      }

      else {
        console.log('bind: func(x, ...args) is not a Monad or a Promise. y',y);
        return bind(y, ar);
      }
    };
  };  
*/

var comment$ = sources.DOM.select('#comment').events('keydown');

var commentAction$ = comment$.map(e => {
  if (e.keyCode == 13) {
    e.preventDefault();
    console.log('In commentAction$ eeeeeeeeeeeeeeeee e is', e );
    var comment = e.target.value.replace(/,/g, "<<>>");
    comment = pMname.x + "<o>" + comment
    socket.send(`GN#$42,${pMgroup.x},${pMname.x},<@>${comment}<@>`);
  }
});

var deleteClick2$ = sources.DOM
    .select('#deleteB').events('click');

var deleteAction2$ = deleteClick2$.map(function (e) {
    var index = parseInt(e.target.parentElement.id, 10);
    var old = commentMonad.s[1].slice(index,index+1)[0];
    socket.send(`GD#$42,${pMgroup.x},${pMname.x},${index},${old}`);
});

var editB$ = sources.DOM
    .select('textarea#commit').events('keydown');

var editBAction$ = editB$.map( function (e) {
  if (e.keyCode == 13) {
    console.log("!!! <MAGNOLIA BLOSSOMS> !!! we are in editBAction$");
    console.log('Here is e',e);
    var index = parseInt(e.target.parentElement.id, 10);
    var w = e.target.value.split(",");
    var nu = pMname.x + "<o>" + w.join('<<>>');
    var old = commentMonad.s[1].slice(index,index+1)[0];
    console.log('This goes to the server from editBAction$',index,old,nu+'<@>');
    socket.send(`GE#$42,${pMgroup.x},${pMname.x},${index},${old},${nu}`);
  }
})

var abcde = 'inline';
var fghij = 'inline';

  var registerPress$ = sources.DOM
      .select('input.register').events('keypress');

  var registerPressAction$ = registerPress$.map(e => {
    mMerror.ret('');
    var str = e.target.value;
    var ar = str.split(',');
    if (e.keyCode === 13) {
      mMerror.ret('');
      if (ar.length != 2) {
        mMerror.ret(' There should be one and only one comma' );
        return;
      }
      else {
        var name = ar[0];
        var x = ar.join('<o>');
        mMshowRegister.ret('none');
        pMname.bnd(backupMonad.ret)
        console.log('In registerPressAction$. str and ar are', str, ar );
        pMname.ret(name);
        console.log('pMname.x is', pMname.x );
        socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`); }
        setTimeout(function () {
          socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
        },700);
    }
  });

  var groupPress$ = sources.DOM
      .select('input#group').events('keypress');

  var groupPressAction$ = groupPress$.map(e => {
    if (e.keyCode === 13) {
      gameMonad.s[0] = [];
      gameMonad.s[1] = -1;
      pMscore.ret(0);
      pMgoals.ret(0);
      socket.send(`CO#$42,${pMgroup.x},${pMname.x},${e.target.value}`);
      pMgroup.ret(e.target.value);
      gameMonad.run([0,0,0,[],[0,0,0,0]]);
      socket.send(`TI#$42,${e.target.value},${pMname.x}`);
    }
  });

  var messagePress$ = sources.DOM
      .select('input.inputMessage').events('keydown');

  var messagePressAction$ = messagePress$.map(function (e) {
      if (e.keyCode === 13) {
          socket.send(`CD#$42,${pMgroup.x},${pMname.x},${e.target.value}`);
          console.log('In messagePressAction$ pMname.x is', pMname.x );
          console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
          e.target.value = '';
      }
  });

  var updatePlayers = function updatePlayers (data) {
    sMplayers.s.clear();
    var namesL = data.split("<br>");
    namesList = namesL.slice(1);
    updateScore(namesList);
    namesList.forEach(player => sMplayers.s.add(player.trim()));
  }

  function updateScore(v) {
    var g = [];
    for (let k of v) {
        g.push(h('div', '  ' + k));
    };
    return g
  };

  var m80Change$ = sources.DOM
    .select('#m80').events('change');

  var m80Action$ = m80Change$.map(() => {
    console.log('Hot dog, we got a live one. m80.x is', m80.x);
  });

  var rollClick$ = sources.DOM
    .select('#roll').events('click');

  var rollClickAction$ = rollClick$.map(() => {
    var a = gameMonad.fetch0() - 1;
    var b = gameMonad.fetch1();
    socket.send(`CA#$42,${pMgroup.x},${pMname.x},6,6,12,20,${a},${b}`);
  });

  var numClick$ = sources.DOM
      .select('.num').events('click');

  var numClickAction$ = numClick$.map(e => {
    if (gameMonad.fetch3().length < 2)  {
      var a = gameMonad.fetch3();
      var b = gameMonad.fetch4();
      a.push(b.splice(e.target.id, 1)[0]);
      console.log('In numClickAction$ - - - gameMonad.index and gameMonad.s ', gameMonad.index, gameMonad.s );
      gameMonad.run([,,,a,b]);
      if (a.length === 2 && gameMonad.fetch2() != 0) {
        updateCalc(a, gameMonad.fetch2())
      }
    }
  }).startWith([0, 0, 0, 0]);

  var opClick$ = sources.DOM
      .select('.op').events('click');

  var opClickAction$ = opClick$.map(e => {
    var s3 = gameMonad.fetch3();
    if (s3.length === 2) {
      updateCalc(s3, e.target.innerHTML);
    }
    else {
      gameMonad.run([,,e.target.innerHTML,,]);
    }
  });

var forwardClick$ = sources.DOM
  .select('#ahead.tao1').events('click')

var backClick$ = sources.DOM
  .select('#back.tao100').events('click');

var backAction$ = backClick$.map(() => {
  if (gameMonad.s[1] > 0) {
    gameMonad.dec();
  }
});

var forwardAction$ = forwardClick$.map(() => {
  if (gameMonad.s[1] < gameMonad.s[0].length - 1) {
    gameMonad.inc();
  }
});

  var fib2 = function fib2(v) {
      if (v[2] > 1) {
          mMfib.ret([v[1], v[0] + v[1], v[2] - 1]);
      }
      else {
          mM19.ret(v[0]);
      }
  };

  var fibPress$ = sources.DOM
      .select('input#code').events('keydown');

  var fibPressAction$ = fibPress$.map(function (e) { if (e.target.value === '') {
          return;
      }
      ;
      if (e.keyCode === 13) {
          mM21.ret(e.target.value);
          fib2([0, 1, e.target.value]);
      }
  });
  // *******************************************n****************************** ENDOM iginal Fibonacci END
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START PRIME FIB

  const workerB$ = sources.WWB.map(m => {
    console.log('In workerB$ stream in the main thread. m, m[3] ', m, m.data[3] );
    if (m.data[3] === 'color') {
      fill1Monad.ret(m.data[0]);
      fill2Monad.ret(m.data[1]);
      fill3Monad.ret(m.data[2]);
      mMprimeBlurb.ret(m.data[5]);
      mMfibBlurb.ret(m.data[4]);
      mMprimeFibBlurb.ret(m.data[6]);
    }
    else {
      console.log('m.data[3] ********************', m.data[3] );
      mMelapsed.ret(elapsed(m.data[0][3]))
      .bnd(v =>  console.log(v));
      mMres.ret(m.data[0])
      window['primesMonad'] = new MonadState('primesMonad', m.data[1], primes_state);
    }
  });

  var fibKeyPress5$ = sources.DOM
      .select('input#fib92').events('keyup');

  var primeFib$ = fibKeyPress5$.map(e => {
    workerB.postMessage([primesMonad.s, e.target.value]);
  });

  var clearprimes$ = sources.DOM
    .select('#clearprimes').events('click')
    .map(() => mMres.ret([mMres.x[0], '', mMres.x[2], mMres.x[3]]));


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Begin Easy

  var factorsPress$ = sources.DOM
      .select('input#factors_1').events('keydown');
  var factorsAction$ = factorsPress$.map(function (e) {
  console.log('&&&&&>>> ^ ^ ^   * * *   >>Cordial greetings from factorsAction$. e is', e );
    var factors = [];
    mMfactors3.ret('');
    if (e.keyCode === 13) {
      var num = e.target.value;
      if (!num.match(/^[0-9]+$/)) {
        mMfactors3.ret('This works only if you enter a number. ' + num + ' is not a number');
      }
      else {
        var n = parseInt(num, 10);
        workerC.postMessage([primesMonad.s, n]);
      }
    }
  });

  const workerC$ = sources.WWC.map(m => {
    console.log('Back in the main thread. m is', m );
    mMfactors.ret(m.data[0]);
    mMfactors23.ret(m.data[1]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[2]);
  });


  var factorsP$ = sources.DOM
    .select('input#factors_5').events('keyup');

  var fA$ = factorsP$.map(function (e) {
    mMfactors7.ret('');
    var factors = [];
    if (e.keyCode === 13) {
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
      console.log('In fA$ ar is', ar );
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
        //workerD.postMessage([primesMonad.s, ar, mMfactors6.x]);
        workerD.postMessage([primesMonad.s, ar, decompMonad.s, 'Happy, happy']);
      }
    }
  });

  const workerD$ = sources.WWD.map(m => {
    console.log('Back in the main thread. m is', m );
    mMfactors6.ret(m.data[0][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    mMfactors8.ret(m.data[1]);
  });


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  End Easy

  var factorsPress_b$ = sources.DOM
      .select('input#factors_1b').events('keydown');

  var factorsAction_b$ = factorsPress_b$.map(function (e) {
  console.log('Cordial greetings from factorsAction$_b$. e is', e );
    var factors = [];
    mMfactors3_b.ret('');
    if (e.keyCode === 13) {
      var num = e.target.value;
      if (!num.match(/^[0-9]+$/)) {
        mMfactors3_b.ret('This works only if you enter a number. ' + num + ' is not a number');
      }
      else {
        var n = parseInt(num, 10);
        workerE.postMessage([primesMonad.s, n, decompMonad.s]);
      }
    }
  });

  const workerE$ = sources.WWE.map(m => {
    // console.log('Back in the main thread. m is', m );
    mMfactors_b.ret(m.data[0]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[1]);
    window['decompMonad'] = new MonadState('decompMonad', m.data[2]);
  });

  var factorsP_b$ = sources.DOM
    .select('input#factors_5b').events('keyup');

  var fA_b$ = factorsP_b$.map(function (e) {
    mMfactors7.ret('');
    var factors = [];
    if (e.keyCode === 13) {
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
      console.log('In fA$ ar is', ar );
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
        workerF.postMessage([primesMonad.s, ar, decompMonad.s]);
      }
    }
  });

  const workerF$ = sources.WWF.map(m => {
    console.log('Back in the main thread. m is', m );
    mMfactors6_b.ret(m.data[2][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    window['decompMonad'] = new MonadState('decompMonad', m.data[2], primes_state);
    mMfactors8_b.ret(m.data[1]);
  });

    var factorsP_c$ = sources.DOM
      .select('input#factors800').events('keyup');

    var fA_c$ = factorsP_c$.map(function (e) {
      console.log('In fa_c$ *************************************************************'),
      mMfactors800.ret('');
      var factors = [];
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
      if (e.keyCode === 13) {
        console.log('In fA_c$ ar is', ar );
        if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
          mMfactors7.ret('It works only if you enter two integers separated by a comma.');
          return;
        }
      else {
        console.log('In fA_c$ else block. ar is', ar );
        mMfactors800.ret(simpleWay(ar[0], ar[1]));
        }
      }
    });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDOM prime factors END
  // ?<>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START traversal
  document.onload = function (event) {
    console.log('onload event: ', event);
    mMitterfib5.release(200);
  }

    // document.getElementById('login').focus();
  // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< ENDOM traversal
  // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START Itterator


   mMZ1.bnd(v => mMt1
  .bnd(add,v).bnd(w => {
    mMt1.ret(w)
    .bnd(cube)
    .bnd(x => mMt3.ret(w + ' cubed is ' + x))}));

  mMZ2.bnd(v => cube(v)
  .bnd(w => mMt3.ret(v + ' cubed is ' + w)));

  var testZ = sources.DOM
      .select('#testZ').events('click');

  var testZAction$ = testZ.map(function () {
      mMZ1.release(1);
  });

  var testQ = sources.DOM
      .select('#testQ').events('click');

  var testQAction$ = testQ.map(() => {
    mMt1.ret(0)
    .bnd(v => mMZ2.release(v))});

  var testW = sources.DOM
      .select('#testW').events('keypress');

  var testWAction$ = testW.map(function (e) {
      if (e.keyCode === 13) {
          mMZ2.release(e.target.value);
      }
  });

function gMap(x, f, id) {
  var mon = new Monad(f(x), id);
  window[id] = mon;
  return mon;
}

  var solve = function solve () {
     mMZ3.bnd(a => {
     mMquad4.ret('');
     mMquad6.ret('');
     mMquad5.ret(a + " * x * x ")
     mMZ3.bnd(b => {
     mMquad6.ret(b + ' * x ')
     mMZ3.bnd(c => {
     mMtemp.ret([a,b,c])
    .bnd(gMap, qS4,'mMtemp2')
    .bnd(result => {
      let x = result[0]
      let y = result[1]
      if (x === 0) {
        mMquad5.ret('No solution', mMtemp)
        mMquad6.ret(' ');
        solve();
        return;
      }
      if (y === 0) {
        mMquad5.ret('No solution')
        mMquad6.ret(' ')
        solve();
        return;
      };
      mMquad4.ret("Solutiions for " + a + ", " + b + " and " + c + " are " + x + " and  " + y)
      mMquad5.ret(p(a).text + " * " + x + " * " + x + " + " + p(b).text +
              " * " + x + " " + p(c).text + " = 0")
      mMquad6.ret(p(a).text + " * " + y + " * " + y + " + " + p(b).text +
              " * " + y + " " + p(c).text + " = 0")
      solve();   // Continuing the endless loop.
      }) }) }) })
  };
  solve();

  var quad$ = sources.DOM
      .select('#quad').events('keypress');

  var quadAction$ = quad$.map(function (e) {
      if (e.keyCode === 13) {
          mMZ3.release(e.target.value);
          document.getElementById('quad').value = null;
      }
  });


// *******************************************************************BEGIN TODO LIST

    var task2 = function task2(str) {
        socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
    };

    function comment2(str) {
        socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
    };

 
// **********************************************************************END TODO LIST
     var captionClick$ = sources.DOM
        .select('#caption').events('click');

    var captionClickAction$ = captionClick$.map(function () {
        (get(mMcaptionDiv)  === 'none') ?
            mMcaptionDiv.ret('block') :
            mMcaptionDiv.ret('none')
    });

    var gameClick$ = sources.DOM
        .select('#game').events('click');

    var gameClickAction$ = gameClick$.map(function () {
        (get(mMgameDiv)  === 'none') ?
            mMgameDiv.ret('block') :
            mMgameDiv.ret('none')
    });

    var clearPicked$ = sources.DOM
        .select('#clear').events('click');

    var clearAction$ = clearPicked$.map( () => {
      gameMonad.clearPicked();
    });

var elemB$ = sources.DOM.select('input#message2').events('keyup')
  .map(e => {
  mM10.ret(e.target.value);
  worker.postMessage([mM9.x, e.target.value]);
});

var pr$ = sources.DOM
    .select('#primeNumbers').events('keypress');

var prAction$ = pr$.map(function (e) {
    if (e.keyCode === 13) {
      worker.postMessage(["CE#$42", primesMonad.s, e.target.value]);
    }
});


// Clicking the checkbox to indicate that a task has been finished.
var box$ = sources.DOM.select('.box').events('click');

var boxAction$ = box$.map(e => {
  console.log('+++++++ PROGRESS OF boxAction$ ++++++ .box was clicked');
  var index = parseInt(e.target.parentNode.id, 10);
  console.log(index);
  console.log(taskMonad.s[1].slice(index,index+1) );
  var task = taskMonad.s[1].slice(index,index+1)[0];
  console.log('task:',task);
  var old = task;
  var ar = task.split("<$>");
  ar = ar.filter(v => v !== "");
  ar[1] = ar[1] === "false" ? "true" : "false"
  var newTask = ar.join("<$>");
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ In boxAction$. newTask is',newTask);
  socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
});

var cbx2$ = sources.DOM.select('.cbx2').events('click');

var cbx2Action$ = cbx2$.map(e => {
  console.log('+++++++ PROGRESS OF cbx2Action$ ++++++ .cbx2 was clicked');
  var index = parseInt(e.target.parentNode.id, 10);
  console.log(index);
  console.log(taskMonad.s[1].slice(index,index+1) );
  var task = taskMonad.s[1].slice(index,index+1)[0];
  console.log('task:',task);
  var old = task;
  var ar = task.split("<$>");
  ar = ar.filter(v => v !== "");
  ar[1] = ar[1] === "false" ? "true" : "false"
  var newTask = ar.join("<$>");
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ In cbx2Action$. newTask is',newTask);
  socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
});


// Clicking the DELETE button.


var deleteClick$ = sources.DOM
    .select('#deleteTask').events('click');

var deleteAction$ = deleteClick$.map(function (e) {
  var index = parseInt(e.target.parentNode.id, 10);
  var old = taskMonad.s[1].slice(index,index+1)[0];
  socket.send(`TX#$42,${pMgroup.x},${pMname.x},${index},${old}`);
});

// Editing a task.

var edit$ = sources.DOM
    .select('#edit2').events('keypress');

var editAction$ = edit$.map(function (e) {
  var arr;
  var str;
  if (e.keyCode === 13) {
    var index = parseInt(e.target.parentElement.id, 10);
    var old = taskMonad.s[1].slice(index,index+1)[0];
    var ar = old.split("<$>");
    var newAr = e.target.value.split(',');
    var newString = newAr.join("<<>>");
    console.log('()()()()()()()() In editAction$. ar is', ar);
    ar.shift();
    console.log('()()()()()()()() In editAction$. ar is', ar);
    ar.unshift(newString);
    console.log('()()()()()()()() In editAction$. ar is', ar);
    var newTask = ar.join("<$>");
    console.log('4.3.2.1. >> In editAction$.index, old and newTask are',index,old,newTask);
    socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
  }
});

var newTask$ = sources.DOM
    .select('input.newTask').events('keydown');

var newTaskAction$ = newTask$.map(function (e) {
  console.log("-------------ONE TWO THREE In newTaskAction$. e is",e);
  if (e.keyCode === 13) {
  var alert = '';
      var ar = e.target.value.split(',');
    if (ar.length < 2) {
      mMalert.ret('You should enter responsible party then a comma then a task');
      return;
    }
    else {
      var x = ar.shift();
      var y = ar.shift();
      var z = ar.join("<<>>")
      var result = z + '<$>' + 'false' +'<$>' + x + '<$>' + y
      socket.send(`TA#$42,${pMgroup.x},${pMname.x},${result}<@>`) 
    }
  }
});

console.log('Just before calcStream@');

var chatClick$ = sources.DOM
    .select('#chat2').events('click')
    .map(() => showChatDiv = showChatDiv === "none" ? "block" : "none")

 var todoClick$ = sources.DOM
    .select('#todoButton').events('click')
    .map(() => showTodoDiv = showTodoDiv === "none" ? "block" : "none")

  var calcStream$ = xs.merge( m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prAction$, factorsAction_b$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, clearAction$, factorsAction$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$);
  return {
  DOM: calcStream$.map(function () {
  return h('div.main', [

    h('div.image_3', [
    h('img.image_2', {props: {src: "logo.svg" }}  ),
    h('span', ' ' ),
    h('a', { props: { href: "https://cycle.js.org/", target: "_blank" } }, 'A Cycle.js application') ]),
    h('div', {style: {textAlign:"center", fontWeight: "bold"}}, [
      h('div', {style: {fontSize: "20px", color: "#f7f700"}}, 'FUNCTIONAL REACTIVE PROGRAMMING'),
      h('br'),
      h('div', {style: {fontSize: "18px", fontStyle: "italic", color: "#07f7f7"}},'WITH CUSTOM MONADS AND CYCLE.JS' ) ]),
      h('br'),
h('div.content', [
h('p', ' I am publishing this page mainly: ' ),
h('span.tao', ' (1) To show how "monads", which are objects created by expressions such as ' ),
h('span', {style: {color: '#ef7732'}}, '\"m = new Monad(a,b).\"' ),
h('span', ' can promote efficiency, maintainability, and robustness in front-end web applications. Functions that return promises, monads, and other values can be linked with one another in a single chain of encapsulated procedures that produce only one side effect which occurs at the end of the chain ' ),
h('a', { props: { href: '#chain' } }, 'Linked Procedures.'),
h('br'),
h('p', ' (2) To help people who are interested in acclimating their thought processes to functional and reactive ways of programming. In order to feel comfortable with functional, reactive code, I think novices and seasoned programmers alike need to grow new synaptic connections in their brains. This comes with practice. ' ),
h('pre', {style: {fontStyle: "italic", color: "#f7f700" }},`      Understanding without practice
      adrift in a sea of confusion. 
      understanding with practice
      smooth sailing through every challenge ` ),
h('p', ' This is the definition of Monad: ' ),
h('pre', {style: { color: "rgb(181, 244, 240)" }},   `    function Monad(z = 'default', ID = 'tempMonad') {
      this.x = z;
      this.id = ID;
    }; ` ),
h('p', ' Before explaining how the monads work, I invite you to try out some examples of monads in action.'), 

h('h2', ' A Few Monad Demonstrations ' ),
h('p', ' The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history. All group members see your score decrease or increase as you navigate backwards and forwards. ' ),
      h('span.tao', ' The game code is fairly concise and intuitive. A quick walk-through is presented at.' ),
      h('a', { props: { href: '#gameExplanation' } }, 'here'),
      h('span', '. To see monadic functionality at work, I suggest that you take a look at the section captioned ' ),
      h('a', { props: { href: '#asyncExplanation' } }, 'Asynchronous Processes'),
      h('br'),
      h('p', ' But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of pure, chainable functions, such as the functions in the Underscore and Jquery libraries, understanding our monads might elevate you to the comfort zone you seek. ' ),
h('h3', 'The Game'),
h('p', 'People who are in the same group, other than the default group named "solo", share the same todo list, chat messages, and simulated dice game. In order to see any of these, you must establish a unique identity on the server by logging in. The websockets connection terminates if the first message the server receives does not come from the sign in form. You can enter any random numbers, letters, or special characters you like. The server checks only to make sure someone hasn\'t already signed in with the sequence you have selected. If you log in with a name that is already in use, a message will appear and this page will be re-loaded in the browser after a four-second pause. '),
h('p', ' Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then erased and the application is ready to start accumulating a new history. '),
h('p', ' Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. Knowing your password facilitates leaving comments which you can later revise or remove.' ),
h('br') ]),
h('hr.len90', {style: { display: mMgameDiv2.x }}, ),
h('br.len90', {style: { display: mMgameDiv2.x }}, ),
h('div.heading',  {style: { display: mMgameDiv2.x }}, 'Game, Todo List, Text Messages' ),

h('div#gameDiv2', {style: { display: mMgameDiv2.x }}, [
  h('br'),
  h('div#leftPanel', {style: { display: mMgameDiv2.x }}, [
    h('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time RL is clicked, one point is deducted. Three goals wins the game. The code is in an appendix.'),
    h('p', {style: {color:'red', fontSize:  '20px'}}, mMgoals2.x ),
    buttonNode,
    h('br'),
    h('button#4.op', 'add'),
    h('button#5.op', 'subtract'),
    h('button#6.op', 'mult'),
    h('button#7.op', 'div'),
    h('button#8.op', 'concat'),
    h('br'),  
    h('br'),  
    h('div#dice', { style: { display: mMdice.x } }, [
      h('button#roll.tao1', 'ROLL'),
      h('button#back.tao100', 'BACK'),
      h('button#ahead.tao1', 'FORWARD'),
      h('div.tao', `Selected numbers: ${gameMonad.fetch3().join(', ')}` ),
      h('div.tao', `Operator: ${gameMonad.fetch2()} ` ),
      h('div.tao', 'Index: ' + gameMonad.s[1] ),
      h('button#clear', 'Clear selected numbers' ),
      h('p', ' When traversing the game history, any time there are two selected numbers and a selected operator, a computation will be performed. You can clear the selected numbers and substitute others, and if you don\'t want a selected operator you can select another one.'),
          h('span', 'Change group: '),
          h('input#group', 'test' ),
      h('p', mMsoloAlert.x ),
      h('p', ' You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file. You can use this combination in the future to edit or delete your saved comments. ' ),
      h('span.red', mMregister.x ),
      h('label', {style: {display: mMshowRegister.x }}, 'Register or log in here:'),
      h('input.register', {style: {display: mMshowRegister.x }},),
    ])
  ]),

  h('div#rightPanel', { style: { display: 'block' } }, [
    h('br'),
    h('br'),
    h('br'),
    h('br'),
    h('br'),
    h('br'),
    h('button#todoButton.cow', 'TOGGLE TODO_LIST'),
    h('br'),
    h('br'),
    h('button#chat2.cow', 'TOGGLE CHAT'),
    h('br'),
    h('br'),
    h('br'),
    h('span', '__________________________________________ ' ),
    h('div', {style: {fontSize: "14 px"}}, 'Name: ' + pMname.x ),
    h('div', {style: {fontSize: "14 px"}}, 'Group: ' + pMgroup.x ),
    h('br'),
    h('div', {style: {fontSize: "14 px"}}, gameData),
    h('br'),
    h('div#a100', ' _____________________________________ ' ),
    h('p.italic', ' Join group "t" if you want to see some previously created tasks. ' ),
    h('div',  { style: { display: showTodoDiv } }, [
      h('div', taskMonad.html ),
      h('div', 'Enter author, responsible person, and task here: '),
      h('input.newTask') ]),
    h('br'),
    h('span#alert', mMalert.x ),
    h('br'),
    h('span#alert2'),

    h('br'),
    h('div#chatDiv', { style: { display: showChatDiv } }, [
      h('div#messages', [
        h('span', 'Message: '),
        h('input.inputMessage'),
        h('div', messages  ),
        h('br'),
      ])
    ])
]),
h('br'),  
h('br'),  
h('span#m80', m80.x),
h('br'),  
h('br'),  
h('span', '_____________________________________________________________________________________'),  
h('br'),  
h('br'),  
h('div.content', [
h('h2', 'Monads' ),  




  h('p', ' As mentioned above, "monads" are objects "m" for which m "instanceof Monad" returns true. Using "instance" in the JavaScript sense of the word, monads are are instances of Monad. var x = new Monad(0,"x") instantiates a monad named "x" whose value (x attribute) is 0. '),
h('p', ' Later, I will show you the two methods that I added to Monad.prototype. They facilitate chaining computations in the traditional JavaScript way, using internal methods rather than external functions. But first I will present the less object oriented, more Haskell-like way to link computations. ' ),
h('p#chain', ' The functions bind() and ret() are similar in some ways to >>= (known as "bind") and return in the Haskell programming language. But here, in this astonishingly chaotic world of JavaScript, there is only one type of monad. Functions used in chains of computations operate on only one type: every possible JavaScript value. Add to that the fact that values returned by chained functions can be any JavaScript value and you see an example of the potential for creativity and confusion of plain vanilla JavaScript. '),
  
h('p', ' bind() facilitates the linking of synchronous functions and promises in the same chain. The functions below have either the "C" suffix, the "M" suffixfix, or the "P" suffix. "C" designates a curried function that returns an ordinary value. "M" indicates a curried function that returns a monad. And "P" indicates a curried function that returns a promise. The definitions are in Appendix B. All three varieties are used in the sequence below: '),
h('pre', `
ind(100)(divM(10))(addC(6))(sqrtC)(multP(10))(addC(37))(divC(11))
(multP(3))(doubleC)(terminate).pop().then(v => console.log(v))

06:11:52.151 monad.js:153 bind: y is a monad. y.x and ar 10 [100]

06:11:52.151 monad.js:157 bind: func(x, ...args) is not a Monad or a Promise. 
y and ar are 16 (2) [100, 10]

06:11:52.152 monad.js:157 bind: func(x, ...args) is not a Monad or a Promise. 
y and ar are 4 (3) [100, 10, 16]

06:11:52.153 monad.js:157 bind: func(x, ...args) is not a Monad or a Promise. 
y and ar are Promise {[[PromiseStatus]]: "pending", 
[[PromiseValue]]: undefined} 
(4) [100, 10, 16, 4]

06:11:52.153 monad.js:147 bind: x is Promise {[[PromiseStatus]]: "pending",

[[PromiseValue]]: undefined}

06:11:52.154 monad.js:148 bind: ar is (6) [100, 10, 16, 4, Promise, Promise]

06:11:52.154 monad.js:147 bind: x is Promise {[[PromiseStatus]]: "pending",
[[PromiseValue]]: undefined}

06:11:52.155 monad.js:148 bind: ar is 
(8) [100, 10, 16, 4, Promise, Promise, Promise, Promise]

06:11:52.155 monad.js:147 bind: x is Promise {[[PromiseStatus]]: "pending",
[[PromiseValue]]: undefined}

06:11:52.155 monad.js:148 bind: ar is 
(10) [100, 10, 16, 4, Promise, Promise, Promise, Promise, Promise, Promise]

06:11:52.156 monad.js:147 bind: x is Promise {[[PromiseStatus]]: "pending",
[[PromiseValue]]: undefined} `),
h('span', {style: {fontStyle: "italic"}}, 'Expanded View ar Showing Resolved Values:' ),
h('br'),  
h('pre', `06:11:52.156 monad.js:148 bind: ar is (12) [100, 10, 16, 4, Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise]
0: 100
1: 10
const multM = a => b => ret(a*b);
  const doubleM = a => ret(a+a);
  const squareM = a => ret(a*a);
  const sqrtM = a => ret(Math.sqrt(a));

  const addC2 = a => b => c => ret(a+b,c);
  var double = function double(v) {
      return v + v;
  }; `),

  h('p'),
  h('p'),
  h('p')
          ])
        ])
      ])
    })
  }
}

const sources = {
  DOM: makeDOMDriver('#main-container'),
  WS: websocketsDriver,
  WWB: workerBDriver,
  WWC: workerCDriver,
  WWD: workerDDriver,
  WWE: workerEDriver,
  WWF: workerFDriver,
  WW: workerDriver
}
run(main, sources);

