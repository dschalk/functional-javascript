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

login();
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
      prm6(124999);
    }
    else {
      login();
    }
  },300 )
}

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
   mMZ27.bnd( () => {        
     console.log('In mMZ27 OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO --- v[3] is', v[3])
     mMZ37.release(v[3]);
   });
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
  .bnd(next, 'BB#$42', mMZ27)  // works in conjunction with prm4
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
    console.log('In workerB stream in the main thread. m, m[3] ', m, m.data[3] );
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
  console.log('&&&&&>>> >>  factorsAction$. e is', e );
    var factors = [];
    mMfactors3.ret('');
    if (e.keyCode === 13) {
      var num = e.target.value;
      if (!num.match(/^[0-9]+$/)) {
        mMfactors3.ret('This works only if you enter a number. ' + num + ' is not a number');
      }
      else {
        var n = parseInt(num, 10);
        workerC.postMessage([primesMonad.s, [n]]);
        bind(n)(prm5)(split2)(pop)(largest)(terminate).pop().then(x => m777.ret(x)); 
      }   
    }
  });



//******************************************************************* workerG

  var clearClick$ = sources.DOM
      .select('button#clear_P').events('click')
      .map(() => m778_RESULT = h('div', ""));

  const factorsRecursion = n => bind(50)(cubeC)(prm4)
  (prm6)(() => { if (n < 15) factorsRecursion(n+1)});
  
  var factors2Press$ = sources.DOM
      .select('button#factors_P').events('click');

  var factors2Action$ = factors2Press$.map(function (e) {
    console.log('&&&&&>>> >> in factors2action$. e is', e );
    var factors = [];
    mMfactors3.ret('');
    factorsRecursion(0);
  });

var result778 = x => h('div', [
  m778_RESULT,  
  h('br'),
  h('span', bigBlue, x[3] ),
  h('span', bigGreen, x[0] ),
  h('span', bigBlue, x[4] ),
  h('span', bigRed, x[5] ),
]);

var m778_RESULT = h('div', '' );

const workerG$ = sources.WWG.map(m => {
  m778_RESULT = result778(m.data);
});

  const ping$ = sources.PP.map(x => {
    m66_RESULT = x;
  })

  var ppFna = n => h('p', {style: {color: 'red', marginLeft: '0px'}}, 'ping' + n);
  var ppFnb = n => h('p', {style: {color: 'yellow', marginLeft: '12%'}}, 'PONG' + n);

  var pingpong$ = sources.DOM
      .select('button#pingpong').events('click').map(() => ping(-5));

  var pingpongRecursion = n => ar => bind(n,ar)(ppFna)(pause)(ppFnb)(() => {
    if (n < 15) pingpongRecursion(n+1,ar)
    bind(n+1,ar)(ppFna)(pause)(ppFnb)(terminate)
  });

  var result66 = async n => {}
    
    
  var pingpongAction$ = pingpong$.map(function (e) {
  /*  console.log('&&&&&>>> >> in pingpongAction$. e is', e );
    m66_RESULT = result66(-5);
    console.log('&&&&&>>> >> in pingpongAction$. m66_RESULT is', m66_RESULT ); */
  });


  // **********************************************************************
    
    

    const workerC$ = sources.WWC.map(m => {
      console.log('Back in the main thread. m is', m );
      mMfactors.ret(m.data[0]);
      mMfactors23.ret(m.data[1]);
      mMZ39.release(m.data[1]);
      window['primesMonad'] = new MonadState('primesMonad', m.data[2]);
    });

    function prom (n) {
      setTimeout(() => {workerC.postMessage([primesMonad.s, [n]])},20 );
      return new Promise ((resolve,reject) => {
        resolve ( sources.WWC.map(e => console.log(e.data[1]))) 
      });
    };

    prom(66);
    prom(66);
    prom(66);
    prom(66);
    prom(66);

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
    const largestFactor = x => bind(1111111)(prm5)(split2)(largest)(terminate).pop()
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


  // ******************************************BEGIN TODO LIST

      var task2 = function task2(str) {
          socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
      };

      function comment2(str) {
          socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
      };

   
  // *****************************************END TODO LIST
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

    factorsRecursion(0);

    var calcStream$ = xs.merge( ping$, pingpongAction$, m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prAction$, factorsAction_b$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, clearClick$, workerG$, clearAction$, factorsAction$, factors2Action$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$);
    return { DOM: calcStream$.map(() => {
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
  h('span.tao', ' (1) To show how "monads", which are objects created by statements such as ' ),
  h('span', {style: {color: '#ef7732'}}, 'm = new Monad(a,"m").' ),
  h('span', ' can promote efficiency, maintainability, and robustness in front-end web applications. Using bind(), functions that take arguments of all kinds and return promises, monads, or any other type of values can be linked with one another in pipelines that are unaffected by external mutations and which produce no side effects until the final result is computed. ' ),
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
  h('h', ' You are automatically logged in with randomly generated s as your user name and password. Your group is the non-group "solo". '),
  h('p', ' You can select a persistent name and password. These will make it possible for you to return later to delete or edit comments that you might have saved. '),
  h('p#gameIntro', ' The demonstration section also has a text box where you can create or join groups. Changing groups resets your game score and goal tally to zeros. ' ),
        h('span.tao', ' The game code is fairly concise and intuitive. A quick walk-through is presented at.' ),
  h('a', { props: { href: '#gameCode' } }, 'here'),
  h('span', '. To see monadic functionality at work, I suggest that you take a look at the section captioned ' ),
  h('a', { props: { href: '#asyncExplanation' } }, 'Asynchronous Processes'),
  h('br'),
  h('p', ' But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of pure, chainable functions, such as the functions in the Underscore and Jquery libraries, understanding our monads might elevate you to the comfort zone you seek. ' ),
  h('h3', 'The Game'),
  h('p', 'People who are in the same group, other than the default non-group named "solo", share the same todo list, chat messages, and simulated dice game. '),
  h('p', ' Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then emptied and the application is ready to start accumulating a new history. '),
  h('p', ' Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. As mentioned above, Knowing your password facilitates revising or removing comments.' ),
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
  h('br'),  
  h('span', '_____________________________________________________________________________________'),  
  h('br'),  
  h('br'),  
  h('div.content', [
  h('h2', 'Monads' ),  




    h('p', ' For purposes of this discussion, "monads" are objects "m" for which "m instanceof Monad" returns true. In the JavaScript sense of "instantiate", var mon = new Monad(0,"mon") instantiates a monad named "mon" which encapsulates the value x. In other words, mon.id === "mon" and mon.x === 0 both return true'),
  h('h', ' The functions bind() and ret() make the monads useful. Here are their definitions: '),
  h('pre', {style: {color: "lightBlue"}}, `  function bind (x, arr=[]) {
      this.ar = arr;
      this.ar.push(x instanceof Monad ? x.x : x)
      if (this.ar.length === 0) this.ar = [x];
      return function debug8 (func) {
        if (func.name === "terminate") return ar;
        if (x instanceof Promise) {
          var p = x.then(v => func(v.x));
          return bind(p,this.ar)
        }
        if (x instanceof Monad) return bind(func(x.x),this.ar);
        return bind(func(x),this.ar);
      };
    };  
    
    function ret (val = 0, id = "retDefault") {
        return window[id] = new Monad(val, id);
      } ` ),
  h('p', ' As is apparent from the definition, bind() is recursive and completely polymorphic. If bind()\'s argument is not a promise or a monad, bind() returns "bind(func(x),this.ar)". The array "ar" accumulates results along a sequence of computations. "terminate" causes "ar" to be returned at the end of a chain.'), 
  h('p', ' The definition of bind() speaks for itself more articulately the following description, but for what it\'s worth, here it is:  For any value "p" and arrays "ar", "ar2", and "ar3", the invisible function that stands ready to operate on the function ahead of bind(p,ar) in a chain is named "debug8". In the simple case of synchronous code, if the function ahead of bind(p,ar) - in other words, debug8\'s argument - is "func", bind(p,ar)(func) returns debug8 which returns bind(func(p,ar2)) which returns debug8, ready to continue the chain. If the next link is func2, bind(func2(func(p,ar),ar2),ar3) is called, returning debug8, ready to accept the next function in the chain. ' ),
  h('p', ' A description of what bind() does with promises isn\'t likely to be helpful. Too many words would be needed. Some examples below show it in action, waiting for websocket messages and web worker messages in a single chain. '),

  h('p#chain', ' The functions bind() and ret() are similar in some ways to >>= (pronounced "bind") and "return" in the Haskell programming language. Functions used in chains of computations can take a JavaScript value and return a monad, the way Haskell does. But when computations are linked using the JavaScript bind(), there is no restriction on what can be returned by the functions in each succeeding link. This is an example of unharnessed JavaScript\'s potential for creativity and confusion.  '),
    
  h('p', ' bind() facilitates the linking of synchronous functions and promises in the same chain. In the functions below, the suffix "C" is for curried functions that return ordinary values and "P" if for functions that return promises. '),

  h('pre', {style: {color: 'lightBlue'}},  `  bind(3)(cubeP)(squareC)(addC(-727))
    (squareP)(cubeC)(x => console.log(x))  // 64  `),
    
  h('p', ' The sequence ran almost to completion in 67 microseconds and then waited 4 seconds before displaying "64" - 2 seconds for bind(3)(cubeP)(squareC)(addC(-727)) to execute then an additional 2-seconds (waiting for squareP to resolve) before running to completion. Under the hood, bind() linked the promises by using the Promises "then" method, which always returns a promise. bind() does not use promises until the first promise is encountered. '),
  h('p', ' Here is bind()\'s fundamental requirement: '),
  h('p', {style: {color: "yellow"}}, 'USE FUNCTIONS THAT TAKE ONLY ONE ARGUMENT'),
  h('p', ' The function add(), defined below, takes only one argument and returns a function. Here\'s how it works: '),
  h('span.tao',  '  var add = a => b => a+b '),
  h('br'),

  h('span.tao',  '  var add3 = add(3)  '),
  h('br'),

  h('span', greentao, '  add3( " cows") '),

  h('span', 'returns'),


  h('span', red, ' "3 cows" '),
  h('br'),

  h('span', greentao, ' add3(4) '),


  h('span', 'returns'),
  h('span', red, ' 7'),
  h('br'),
  h('br'),
  h('span.tao', ' Here\'s the Chrome console test of function that returns a function that returns another function: '),
  h('br'),
  h('br'),
  h('span', 'define:' ), 
  h('pre', blue, `  var addCid = a => b => c => ret(a+b,c): `),  
  h('span', 'run:' ), 
  h('pre', green, `  addCid(5)(1000)('myMonad') `),  
  h('span', 'returns:' ),  
  h('pre', red,  `  Monad {x: 1005, id: "myMonad"} `),  
  h('span.tao', ' In functional programming, the pattern f = a => b => c => d is prefered over f(a,b,c) {return d}. All Haskell functions follow this pattern, not even needing parentheses. Define add() by '), h('span', green, 'add a b = a+b'), h('span', ' and run '),h('span', green, 'add 3 4.'), h('span', ' Haskell compilers return '), h('span', red, '7'), h('span', '.' ),
  h('span', ' This is the functional way. It is the only sensible way to use the monads presented on this page. '),
  h('br'),  
  h('br'),  
  h('a', {props: {href: '#top'}}, 'Back to the top'),  
  h('br'),  
  h('br'),  
  h('span.tao', {style: {color: "#d8ef7c", fontSize: "17px" }},   'Types:'),
  h('span.tao', ' When writing code, I pay attention to types and sometimes type-check to avoid crashes and for the convenience people using my websites. For example, if a user enters the wrong type of data it is helpful to display a message explaining why nothing is happening. This is a good way to prevent sockets from disconnecting in Websockets applications. I like exploring the possibilities of JavaScript, so I prefer ad hoc type checking over writing code in a strongly typed language that compiles to JavaScript.  '),
  h('br'),  
  h('h3', 'More about monads'),   
  h('p', ' The result of every computation in a chain of synchronous functions is available to every computation that comes after it. This can be seen in the next example: ' ),  
    
  h('pre', {style: {fontSize: "12px"}}, `  bind(1)(addC(2))(cubeC)(addC(3))
    (multC(this.ar[1]))(multC(this.ar[1]))
    (addC(30))(multC(1/ar[3]))(terminate)
     // [1, 3, 27, 30, 90, 270, 300, 10] `),
  h('p', ' Or, equivalently: ' ),
  h('pre', {style: {fontSize: "12px"}}, `  bind(1)(v=>ret(v+2))(v=>ret(v*v*v))(v=>ret(v+3))
    (v=>ret(v*(ar[1])))(v=>ret(v*(ar[1])))(v=>ret(v+30))
    (v=>ret(v*(1/ar[3])))(terminate)
     // [1, 3, 27, 30, 90, 270, 300, 10] `),
  h('p', ' Or to get only the final result: ' ),
  h('pre', {style: {fontSize: "12px"}},  `  bind(1)(addC(2))(cubeC)(addC(3))(multC(ar[1]))(multC(ar[1]))
    (addC(30))(multC(1/ar[3]))(terminate).pop()  // 10  ` ),
  h('p', {style: {fontSize: "12px"}}, 'addC, and multC (above) pass anonymous monads along linked sequences of computations. They are defined as follows: ' ), 
  h('pre', `    const addC = a => b => ret(a+b);
      const multC = a => b => ret(a*b); ` ),
  h('h2', 'Asynchronous Functions' ),
  h('h3', 'Cycle.js Time ' ),
  h('p', ' As stated above, the monads do not depend on Cycle.js. This section is for anyone who happens to be interested in how the monads achieve reactivity in this Cycle.js application.' ),
  h('p', ' Here\'s the sequence four linked functions that we will analyze and then execute in the live demonstration below:'),
  h('pre', `  bind(50)(cubeC)(prm4)(prm6)  `)  ,
  h('p', ' When the code runs, a websockets socket requests and obtains a random five or six-figure number from the server. Then a web worker message requests the prime decompensation of the number obtained through the socket. When the data arrives, Snabbdom is prompted to modify the DOM to reflect the current value of vnode 778_RESULT. '),
  h('p', ' A driver (Cycle.js terminology) puts messages sent by workerC into an xstream stream of messages. That stream is transformed in the main application function (named "main") into another stream which is merged with other streams to form the stream that triggers Snabbdom\'s diff and render routine. ' ),
  h('p', ' The trigger stream causes Snabbdom to implement the side effects of each individual stream transformation process. One of those streams is workerG$, the stream that listens for messages from the WWC driver. Each time a message from workerG arrives, workerG$ is aumented, adding the next instructions for updating 778_RESULT. Here is the definition of workerGDriver:  ' ),
  h('pre', `  function workerGDriver () {
      return xs.create({
        start: listener => { workerG.onmessage = msg => listener.next(msg)},
        stop: () => { workerG.terminate() }
      });
    }; `),
  h('p', ' Clicking the button causes factorsRecursion(0) to execute. Here\'s the code: '),  
  h('pre', blue,  `  const factorsRecursion = n => bind(50)(cubeC)(prm4)
    (prm6)(() => { if (n < 15) factorsRecursion(n+1)}); `),
  h('p', 'result778(m.data) is called each time a message from workerG arrives. The definition of result778 is:   ' ),
  h('pre', blue, `var result778 = x => h('div', [
      m778_RESULT,  
      h('br'),
      h('span', bigBlue, x[3] ),
      h('span', bigGreen, x[0] ),
      h('span', bigBlue, x[4] ),
      h('span', bigRed, x[5] ),
  ]); `),
  h('p', ' The stream that listens for workerG messages adds to the vnode m778_RESULT as follows: '),
  h('pre', `const workerG$ = sources.WWG.map(m => {
      m778_RESULT = result778(m.data);
      primesMonad = new MonadState('primesMonad', m.data[2]);
  }); `),
  h('p', ' Here are some of the other functions that make this work: '),
  h('pre', `  var factors2Press$ = sources.DOM
      .select('button#factors_P').events('click');

    var factors2Action$ = factors2Press$.map(function (e) {
      var factors = [];
      mMfactors3.ret('');
      bind(50)(cubeC)(prm4)(prm6)
    });

    const prm4 = x => {
      socket.send('BB#$42,pMgroup,pMname,' + x);
      return new Promise( (resolve, reject) => {
         mMZ37.bnd((y) => {  // Released by incoming websockets message 
           resolve(ret(y));
         }) 
      })                         
    }

    mMZ27.bnd( () => {       // Incoming message prefix is BB#$42 
      mMZ37.release(v[3]);   // releases prm6 (below)
    });
     
    const prm6 = x => {  // x is the random number returned by the server.
      workerG.postMessage([primesMonad.s, [x]]); 
      return "Done";  // The returned data is processed in workerG$ (above).
       }  ` ),
  h('pre', bigGreen, `const factorsRecursion = n => bind(50)(cubeC)(prm4)
  (prm6)(pause)(() => { if (n < 15) factorsRecursion(n+1)}); `),
  h('span', ' Click the button below to execute '),
  h('span', bigRed, 'factorsRecursion(0)' ),
  h('br'),
  h('br'),
  h('button#factors_P', {style: {fontSize: '12px'}},  'decompose fifteen random numbers'),
  h('span', "~~~~~"),  
  h('button#clear_P', {style: {fontSize: '12px', marginLeft: "0"}},  'clear results'), 
  h('br'),
  m778_RESULT,  
  h('p', ' m777_RESULT is a permanent fixture of the virtual DOM. workerG$ is merged into the stream that triggers Snabbdom\'s diff and render routine, so when a mew message from workerG triggers augmentation of workerG$, the resulting side effects seen and heard in the browser. '),
  

h('h3', 'Reactivity in Cycle.js'),

  h('span.tao', ' Reactivity occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andr Staltz\' '),
  h('a', { props: { href: "https://egghead.io/courses/cycle-js-fundamentals", target: "_blank" } }, ' Overview of Cycle.js.'),
  h('span', ' Its elegance might take your breath away. ' ),
  h('br' ),
  h('p', ' Let\'s take a look at how the ping pong example works in this Cycle.js application. JavaScript\'s mutable variables come in handy here. The variable "m66_RESULT" is a permanent fixture in the Snabbdom description of the virtual DOM. Click the button below and see what happens while its value changes fifteen times. '),

  h('button#pingpong', {style: {fontSize: '14px', marginLeft: "0"}}, 'start pingpong' ),
  m66_RESULT,  

    
h('p', ' pingpongDriver() (defined below) makes this work. '),

h('pre', blue, `  function pingpongDriver () {
    return xs.create({
      start: listener => { PINGPONG = msg => listener
        .next(pingpongTog(msg))},
      stop: () => {}
    });
  };
        
  var PINGPONG = n => xs.of(pingpongTog(n)); 

  var ppStyle = false;

  var pingpongTog = n => ppStyle === true ? 
    h('p', {style: {color: 'red', marginLeft: '0px'}}, 'ping ' + n) : 
    h('p', {style: {color: 'yellow', marginLeft: '42%'}}, 'PONG ' + n) ` ), 

  h('p', 'run(main, sources) is the crucial Cycle.js application function. sources contains the drivers. sources.PP = pingpongDriver is one of the drivers consumed by run() and made available in main() so information can be sent back to run. Round and round it goes. Here is the definition of ping$. ' ),
  h('pre', `  const ping$ = sources.PP.map(x => {  
    m66_RESULT = x;
  }) ` ),
h('p', ' In the demonstration, ping$ mutates m66_RESULT fifteen times thereby altering the virtual DOM fifteen times. Each change prompts Snabbdom to execute its diff and render procedure, updating what is shown in the browser fifteen times. ' ), 
h('p', ' When a user clicks the pingpong buttom, the DOM driver responds by calling ping(-5) as follows: '),
 h('pre', `  var pingpong$ = sources.DOM.select('button#pingpong').
   events('click').map(() => ping(-5)); ` ),
h('p', ' And here\'s ping(): ' ),
h('pre', `  var ping = mMZ32.bnd((n) => {  // Button click causes ping(-5) to run.
    setTimeout(() => {
      ppStyle = !ppStyle;        // ppStyle is toggled here.
      PINGPONG(n);
      if (n < 10) {  
        ping(n+1); 
      }  
    },500 )
  }) ` ), 

  h('span.tao', ' The monads do not depend on Cycle.js. They can be used in React, Node, and all other browser-based applications. I happen to prefer Cycle.js working in conjunction with a Haskell Websockets server. ' ),
  h('br'),
  h('br'),
  h('span.tao', 'This project was created by and is actively maintained by me, David Schalk. The code repository is at '),
  h('a', { props: { href: "https://github.com/dschalk/monads-in-JavaScript", target: "_blank" } }, 'monads-in-JavaScript'),
  h('span', ' You can comment at ' ),
  h('a', { props: { href: 'https://redd.it/60c2xx' }}, 'Reddit' ),
  h('span', ' or in the Comments section near the end of this page ' ),
  h('br' ),
  h('br' ),
  h('a', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom', ),
  h('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,' ),
  h('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and learning so many supporting files are included as scripts in the index.html page. ' ),

  h('br' ),

  h('h2', 'Alternative Monad Functionality' ),
  h('p', ' Instances of Monad can also link by means of the method "bnd()". It, along with the method "ret()", were made available as follows: ' ),
  h('pre',  {style: {color: "rgb(236, 242, 186)"   }}, `  Monad.prototype.bnd = function (func, ...args) {
      var m = func(this.x, ...args)
      var ID;
      if (m instanceof Monad) {
        ID = testPrefix(args, this.id);
        window[ID] = new Monad(m.x, ID);
        return window[ID];
      }
      else return m;
    };

    Monad.prototype.ret = function (a) {
      return window[this.id] = new Monad(a, this.id);
    };
       
    function testPrefix (x,y) {
       var t = y;  // y is the id of the monad calling testPrefix
       if (Array.isArray(x)) {
        x.map(v => {
          if (typeof v == 'string' && v.charAt() == '$') {
             t = v.slice(1);  // Remove "$"
          }
        })
      }
      return t;
    }; ` ),
  h('p', ' This is less functional than using bind() in that it doesn\'t pass functions down the chain but instead, it passes objects with exposed methods. But it has appealing features. Look how values move along the chain until, at the end they combine to yield 42. Explicitly passing values down the line lambda style is impossible with bind(); but with bind(), all functions have access to ar where they can find the values of every monad returned by previous functions. '),
  h('p', 'The code below resembles a lambda calculus expression, and the lambda calculus is the essence of functional programming, residing close to the eternal Tao. But intermediate functions along a linked chain of computations can instantiate monads in the global space, a feature which can be convenient and which doesn\'t have to be dangerous; but a function that uses this feature is not pure and impure functions are anathema to functional programming. ' ),
  h('pre', `  ret(2).bnd(v => add(v,1).bnd(cube).bnd(p => add(p,3)
    .bnd(() => ret(p/3).bnd(add,3).bnd(z => [v,p,z,v*p-z]))))
      // [1,27,12,42] ` ),
  h('h2', 'Comparison With Haskell'),
  h('span.tao', ' Values v that satisfy "v instanceof Monad" (called "monads" in this discussion) are very different from the Haskell monads, but they are similar in that both behave like the monads of category theory without actually being category theory monads. See ' ),
  h('a', { props: { href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/", target: "_blank" } }, 'Hask is not a category.'),
      h('span', ' by Andrej Bauer and the ' ),
      h('a', { props: { href: '#discussion' } }, 'Discussion'),
      h('span', ' below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws (see below) helps instill confidence that the monads are robust, versatile, and reliable tools for isolating and chaining sequences of JavaScript functions. ' ),
  h('br'),
  h('h3', 'Haskell Monad Laws' ),  
  h('p', {style: {fontStyle: 'italic'}}, ' By the way, these laws are just suggestions in the Haskell programming language. They are, nevertheless, universally respected by authors of robust, well-behaved Haskell code. '  ),
  h('div', 'Left Identity ' ),
  h('pre', `  m.ret(v).bnd(f, ...args).x === f(v, ...args).x

    ret(v).bnd(f, ...args).x === f(v, ...args).x
  bind(a)(ret)(func, ...args)(terminate).pop() === f(a, ...args).x

    Haskell monad law: (return x) >>= f \u2261 f x  ` ),
  h('div#discussion', ' Right Identity  ' ),
  h('pre', `  m.bnd(m.ret) === m  For all m where 
      (m.constructor === Monad) === true    

    bind(a)(func, ...args)(ret)(terminate).pop() === func(a, ...args).x
    // (ret) has no effect on either side of the function.
    bind(3)(ret)(add,5)(ret)(terminate).pop() === add(3,5).x

    Haskell monad law: m >>= return \u2261 m `  ),

  h('div', ' Commutivity  ' ),

  h('pre', `  eq(m.bnd(f, ...args).bnd(g, ...args), 
    m.bnd(v => f(v, ...args).bnd(g, ...args)))

    eq(bind(ret(v))(f, ...args)(g, ...args)(terminate),
     bind(ret(3,'m'))(x => f(x, ...args))(g, ...args)(terminate))

    Haskell: (m >>= f) >>= g \u2261 m >>= ( \\x -> (f x >>= g) ) `),

  h('span',  {style: {fontSize: "18px", fontStyle: "italic"}}, 'Examples demonstrating commutivity' ),
  h('pre', `  eq(bind(ret(3))(ret)(cube)(ret)(terminate),
      bind(ret(3))(cube)(terminate)) 
    
    eq(m.ret(3).bnd(ret).bnd(cube).
      bnd(ret),m.ret(3).bnd(cube)) ` ),  
  h('p', ' The above relationships prove nothing, but they do suggest that the monads will turn out to be flexible and robust. The demonstrations below bear this out. ' ),
  h('a', { props: { href: '#top' } }, 'Back To The Top'),
  h('h3', ' Discussion ' ),
  h('span.tao', ' The Haskell statement ' ),
  h('span.turk6', `f \u2261 g` ),
  h('span', ' returns True if and only if f x == g x for all Haskell values x in the domains of f and g. That is what eq() tests for, in addition to identity of id attributes. In JavaScript, "==" and "===" return false for identical objects that are in different locations in memory.' ),
  h('br'),
  h('br'),
  h('span.tao',' The Haskell programming language borrowed the term "monad" from the branch of mathematics known as category theory. This was appropriate because Haskell monads, along with the function return and the "bind" operator >>=, behave quite a bit like category theory monads, and the inspiration for them came out of category theory. For Haskell monads to actually be category theory monads, they would need to reside in a category-theory category. They don\'t, although the Haskell mystique tends to give newcomers to the language the impression that they do. See ' ),
  h('a', { props: { href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/", target: "_blank" } }, 'Hask is not a category.'),
  h('br' ),
  h('p', ' Research into ways of defining a Haskell category appears to be ongoing. This research involves tinkering with special constraints, omitted features, and definitions of morphisms that are not Haskell functions. When a definition of the category is established, Haskell monads are then shown to be, in some contrived context, category-theory monads. Devising such schemes are instructive academic exercises, but I think application developers will always want and need tools which lie outside of the closed space of any category. ' ),
  h('p', ' However, imitating definitions and patterns found in category theory, as Haskell does in defining the functor, monoid, and monad type classes, was a stroke of genius that vastly enriched the Haskell programming language and brought it into the mainstream as a viable alternative to java, c++, etc.  This website runs efficiently on a Haskell websockets server. The modified Haskell Wai Websockets server has proven to be extraordinarily easy to maintain as new requirements become necessary. For example, modifying the server to send chat messages and shared todo lists only to members of the same group was a trivial task. It required just a few lines of no-brainer pattern-matching code. ' ),
  h('span.tao', ' Other JavaScript monad schemes mirror type theory and Haskell with their type constructors and monads that operate on types. Examples include '),
  h('a', {props: {href: "https://curiosity-driven.org/monads-in-javascript"}}, "Curiosity-Driven" ),
  h('span', ' and ' ),  
  h('a', {props: {href: "https://github.com/fantasyland/fantasy-land"}}, "Fantasy Land." ),
  h('br' ),
  h('br' ),
  h('span', ' For me, superimposing such abstractions over JavaScript takes too much versatility away from it. It is easy to include some type checking code in function definitions where it is thought to be helpful. For example, if someone enters inappropriate data in a form, a message explaining the mistake can be displayed. I enjoy the freedom and built-in polymorphism of JavaScript as it is. Call me an anarchist. ' ),

   // ***************************************** START MONAD
   // ***************************************** END MONAD
     code.cycle,
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
  h('p', ' ' ),
   // ************** OOOOOOOOOOOOOO ********    BEGIN ASYNC


  h('h2#asyncExplanation', ' Asynchronous Processes ' ),

  h('a', { props: { href: '#gameIntro' } }, 'Back to the first set of demonstrations.'),
      code.async1,

  h('br'),
  h('span', mMfibBlurb.x ),
  h('span', [
    h('svg', {attrs: {width: 50, height: 50}}, [
      h('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill1Monad.x }})
    ])
  ]),

  h('span', mMprimeBlurb.x  ),
  h('span', [
    h('svg', {attrs: {width: 50, height: 50}}, [
      h('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill2Monad.x }})
    ])
  ]),

  h('span', mMprimeFibBlurb.x ),
  h('span', [
    h('svg', {attrs: {width: 50, height: 50}}, [
      h('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill3Monad.x }})
    ])
  ]),
  h('br'),

  h('p.red',  'The elapsed time is ' + mMelapsed.x + ' milliseconds.' ),
  h('input#fib92'),
  h('br'),
  h('br'),
  h('span#PF_7.red6', 'Fibonacci Numbers'),
  h('br'),
  h('span#PF_9.turk', mMres.x[0]  ),
  h('br'),
  h('span#PF_8.red6', 'Prime Fibonacci Numbers'),
  h('br'),
  h('span#primeFibs.turk', mMres.x[2]  ),
  h('br'),
  h('span#PF_21.red6', 'The largest generated prime number.'),
  h('br'),
  h('span#PF_22.turk', mMres.x[1]  ),
  h('br'),
  h('h3', ' Promises and async/await are not needed ' ),
  h('p', ' Because this code is running in Cycle.js, waiting for websockets messages to come in and waiting for time consuming procedures to complete without blocking is easily accomplished without using promises or async/await. Drivers stand ready to process websockets and web worker messages. '),   

  h('p', ' The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9\'s, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:' ),
  h('input#factors_1'),
  h('br'),
  h('br'),
  h('span', mMfactors.x ),
  h('span.tao3', mMfactors23.x ),

  h('p', ' Next, two comma-separated numbers are decomposed into arrays of their prime factors, and those arrays are used to compute their lowest common multiple (lcm). For example, the lcm of 6 and 9 is 18 because 3*6 and 2*9 are both 18. The lcm of the denominators of two fractions is useful in fraction arithmetic; specifically, addition and subtraction. On my desktop computer, two seven digit numbers resulted in a lag of a few seconds when prime numbers had not been previously generated. ' ),

  h('input#factors_5'),
  h('br'),
  h('br'),
  h('div.tao3', mMfactors7.x ),
  h('span', `The least common multiple of  ${mMfactors8.x[0]} and ${mMfactors8.x[1]} is ` ),
  h('span.tao3', `${mMfactors8.x[2]}` ),
  h('br'),
  h('span', `The largest common factor of ${mMfactors8.x[0]} and ${mMfactors8.x[1]} is ` ),
  h('span.tao3', `${mMfactors8.x[3]}` ),
  h('br'),
  h('div', `TEST: ${mMfactors8.x[0]} * ${mMfactors8.x[1]} === ${mMfactors8.x[2]} * ${mMfactors8.x[3]} `  ),
  h('span', 'RESULT: ' ),
  h('span.tao3', `${ (mMfactors8.x[0]  *  mMfactors8.x[1])  ===  (mMfactors8.x[2]  *  mMfactors8.x[3]) }` ),
    h('h3', ' The Easy Way ' ),
    h('p', ' This has been a demonstration of MonadState and MonadState transformers. If you really want the least common multiple or the largest common factor of two positive integers, there is no need to generate prime numbers. The next and final demonstration in this section does not use a web worker. The computations block the main thread, but only for a few microseconds.' ),
    h('br' ),
    h('input#factors800'),
    h('br' ),
    h('span', `The least common multiple of  ${mMfactors800.x[0]} and ${mMfactors800.x[1]} is ` ),
    h('span.tao3', `${mMfactors800.x[2]}` ),
    h('br'),
    h('span', `The largest common factor of ${mMfactors800.x[0]} and ${mMfactors800.x[1]} is ` ),
    h('span.tao3', `${mMfactors800.x[3]}` ),
    h('br'),
    h('div', `TEST: ${mMfactors800.x[0]} * ${mMfactors800.x[1]} === ${mMfactors800.x[2]} * ${mMfactors800.x[3]} `  ),
    h('span', 'RESULT: ' ),
    h('span.tao3', `${ (mMfactors800.x[0]  *  mMfactors800.x[1])  ===  (mMfactors800.x[2]  *  mMfactors800.x[3]) }` ),
  h('p', ' The code for the previous demonstrations is available at the Github repository, and will soon be available here in an appendix. primesMonad and the functions primarily involved in its transformation are shown below: ' ),
    code.primes,
    h('p', ' primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code: ' ),
    code.primes3,
  h('p', ' The user\'s selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling: ' ),
      code.primes4,
  h('p', ' execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB. ' ),
      code.primes2,









  h('h2', 'MonadItter'),
  h('p', ' As shown in the "Monads" section (above), the definition of MonadItter is: ' ),  
  code.monadIt,
  h('p', ' MonadItter instances don\'t link to one another. They exist to facilitate the work of instances of Monad, MonadState, etc. Here\'s how they work: '),
  h('p', 'For any instance of MonadItter, say "it", "it.bnd(func)" causes it.p === func. Calling the method "it.release(...args)" causes p(...args) to run, possibly with arguments supplied by the caller. '),
  h('p',' MonadItter instances control the routing of incoming websockets messages. In one of the demonstrations below, they behave much like ES2015 iterators.'),
  h('h3', ' A Basic Itterator '),
  h('p', 'The following example illustrates the use of release() with an argument. It also shows a lambda expressions being provided as an argument for the method mMZ1.bnd() (thereby becoming the value of mMZ1.p), and then mMZ1.release providing an arguments for the function mMZ1.p. The code is shown beneith the following two buttons. '),
  h('button#testZ', 'mMZ1.release(1)'),
  h('p.code2', mMt3.x  ) ,
  h('span', 'Refresh button: '),
  h('button#testQ', 'mMt1.ret(0) '),
  h('br'),
      code.testZ,
  h('span.tao', ' The expression mMt3.x sits permanently in the Motorcycle virtual DOM description. You can call '),
  h('span.green', 'mMZ2.release(v)'),
  h('span', ' by entering a value for v below: '),
  h('br'),
  h('span', 'Please enter an integer here: '),
  h('input#testW'),
  h('p', ' cube() is defined in the Monad section (above). If you click "mMZ1.release(1)" several times, the code (above) will run several times, each time with v === 1. The result, mMt3.x, is shown below the button. mMZ1.p (bnd()\'s argument) remains constant while mMZ1.release(1) is repeatedly called, incrementing the number being cubed each time. '),
                    h('p', ' Here is another example. It demonstrates lambda expressions passing values to a remote location for use in a computation. If you enter three numbers consecutively below, call them a, b, and c, then the quadratic equation will be used to find solutions for a*x**2 + b*x + c = 0. The a, b, and c you select might not have a solution. If a and b are positive numbers, you are likely to see solutions if c is a negative number. For example, 12, 12, and -24 yields the solutions 1 and -2. '),
  h('p#quad4.red2', mMquad4.x  ),
  h('p#quad5.red2', mMquad5.x  ),
  h('p#quad6.red2', mMquad6.x  ),
  h('p', 'Run mMZ3.release(v) three times for three numbers. The numbers are a, b, and c in ax*x + b*x + c = 0. Remember to press <ENTER> after each number. '),
  h('input#quad'),
  h('p', 'Here is the code:'),
  code.quad,
  h('p', ' fmap (above) facilitated using qS4 in a monadic sequence. qS4 returns an array, not an instance of Monad, but fmap lifts qS4 into the monadic sequence. '),
  h('p', ' The function solve() is recursive. It invokes itself after release() executes three times. The expression "solve()" resets solve to the top, where mMZ3.p becomes a function containing two nested occurrances of mMZ3.bnd. After mMZ3.release() executes, mMZ3.p becomes the function that is the argument to the next occurrance of mMZ3.bnd. That function contains yet another occurrance of mMZ3.bnd. MonadItter is syntactic sugar for nested callbacks. ' ),










    h('h2', ' MonadEr - An Error-Catching Monad ' ),
    h('p', ' Instances of MonadEr function much the same as instances of Monad, but when an instance of MonadEr encounters an error, it ceases to perform any further computations. Instead, it passes through every subsequent stage of a sequence of MonadEr expressions, reporting where it is and repeating the error message. It will continue to do this until it is re-instantiated or until its bnd() method runs on the function clean(). ' ),
    h('p', 'Functions used as arguments to the MonadEr bnd() method can be placed in quotation marks to prevent the browser engine from throwing reference errors. Arguments can be protected in the same manner. Using MonadEr can prevent the silent proliferation of NaN results in math computations, and can prevent browser crashes due to attempts to evaluate undefined variables. ' ),
    h('p.tao1b', ' The monad laws hold for MonadEr instances. The following relationships were verified in the Chrome console: ' ),
    h('pre', `    ret3(0,'t',[])  // t is now an instance of MonadEr with t.x = 0 and t.e = [].

      t.ret(3).bnd(cube3).x === cube(3).x
      ret3(3).bnd(cube3).x === cube3(3).x

      t.bnd(t.ret) === t
      t.bnd(ret) === t

      t.ret(0).bnd(add3, 3).bnd(cube3).x ===
      t.ret(0).bnd(v => add3(v,3).bnd(cube3)).x  ` ),

    h('h2', {style: {color: "red" }}, 'Comments' ),
   
    h('div#com2',  { style: { display: abcde} }, ), 
    h('p', ' When this page loads in the browser, a user name is automatically generated in order to establish a unique Websocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password. ' ),
    h('p', 'The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made. '),
    h('p', ' If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again. ' ),
    h('br'),  
    h('h3', 'Register' ),
    h('span.red', mMregister.x ),
    h('input.register', {style: {display: mMshowRegister.x }} ),
    h('br' ),
    h('br' ),
    h('h3', 'COMMENTS' ),
    h('textarea#comment', '' ),
    h('br' ),
    h('br' ),
    h('div', mMcomments.x ),
    h('br'),
    h('br'),  
    h('p', ' When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. '), 
    h('p', ' When a comment is created, modified, or deleted, a websockets message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js. ' ),
  h('p', ' The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger. ' ),
  h('p', ' commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Here he entire Comments.js file: ' ),
  h('pre', `function showFunc (name, name2) 
{return name == name2 ? 'inline-block' : 'none'}

var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
};

var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

MonadState3.prototype.html = [];

MonadState3.prototype.init = function (str) { // fetch all comments
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  this.s[1] = this.s[1].filter(v => v!== '');
  this.s[1].splice(num,1);
  this.s[0] = this.s[1].join("<@>");
  this.html = process(this.s[1]);
  return this.html;
};

function process (a) { //Assembles the HTML for display.
  var arr = a;
  mMcomments.ret([]);
  var n = -1;
  arr.map(a => { 
    console.log('In arr.map - - - - - - - a is ', a );
    var x = a.split("<o>");
    if (x.length != 2) x = ['malfunction', '8888']
    console.log('In arr.map o o o o o o o x is ', x );  
    x[1] = x[1].replace(/<<>>/g, ',');
    show = showFunc(x[0], pMname.x);
    n+=1;
    mMcomments.bnd(push, h('div#'+n, [
      h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
      h('br'),
      h('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      h('button#deleteB', {props: {innerHTML: 'delete'}, 
     style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
} ` ),

  h('p', ' *************************************************************************************** ' ),
  h('h3', 'Haskell Time'),
  h('p', ' This page is for front end developers, but in case anyone is interested, here are the server functions responsible for deleting or amending a comment: ' ),
  h('pre', `  removeOne _ []                 = []
  removeOne x (y:ys) | x == y    = ys
                     | otherwise = y : removeOne x ys

  changeOne :: Text -> Text -> [Text] -> [Text]
  changeOne _ _ []                 = []
  changeOne z x (y:ys) | x == y    = z : ys
                       | otherwise = y : changeOne z x ys ` ),

  h('a', ' Every message sent to the server is a comma separated string beginning with a prefex, then a group, and then a name. Comma separated items after that are named extra and extra2. ' ),
  h('p', ' The code below is responsible for dealing with comments. As in the browser, websockets messages are dealt with according to their six charachter prefixes. extra and extra2 are the only pertinent data since comments go to all groups ' ),  
  h('pre', `else if "GZ#$42" \`T.isPrefixOf\` msg              
                  -- FETCH AND BROADCAST ALL COMMENTS ON BROWSER LOAD
   then                                
       do
           st <- atomically $ readTVar state
           broadcast ("GZ#$42," \`mappend\` group \`mappend\` "," 
             \`mappend\` sender \`mappend\` "," \`mappend\` comments ) st

else if "GN#$42" \`T.isPrefixOf\` msg 
                  -- RECEIVE A NEW COMMENT, UPDATE THE FILE AND THE TVAR,
                  --  AND BROADCAST THE NEW COMMENT 
   then
       do
           old <- atomically $ readTVar comms
           lk <- atomically L.new
           let c = old \`mappend\` (T.replace (at \`mappend\` at) at extra) 
           let new = T.replace (at \`mappend\` at) at c -- cleanup
           L.with lk $ TIO.writeFile xcomments new -- lock on writing
           atomically $ writeTVar comms new
           st <- atomically $ readTVar state
           broadcast ("GN#$42," \`mappend\` group \`mappend\` ","
               \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

 else if "GD#$42" \`T.isPrefixOf\` msg      -- DELETE A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = removeOne extra2 b
            let d = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments d
            atomically $ writeTVar comms d
            st <- atomically $ readTVar state
            broadcast ("GD#$42," \`mappend\` group \`mappend\` ","
              \`mappend\` sender \`mappend\` "," \`mappend\` extra) st
                
 else if "GE#$42" \`T.isPrefixOf\` msg      -- EDIT A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = changeOne extra3 extra2 b
            let txt = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments txt
            atomically $ writeTVar comms txt
            st <- atomically $ readTVar state
            broadcast ("GE#$42," \`mappend\` group \`mappend\` com
              \`mappend\` sender \`mappend\` com \`mappend\` extra \`mappend\` com
                 \`mappend\` extra3) st   ` ),
  h('a', { props: { href: '#top' } }, 'Back To The Top'),
  h('br'),  
  h('h3', 'Feedback From the Error Monad' ),  
  h('br'),  
  h('img.image', {props: {src: "error2.png"}}  ),
  h('div#gameCode', ),
  h('br'),
  h('h2', 'Appendix A - The Game Code' ),
  h('pre', `function MonadState(g, state) {
  console.log(g,'called MonadState with', state);
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
}; ` ),
  h('a', {props: {href: '#gameIntro'}}, 'Back to the first group of demonstrations.'),  
  h('p'),
  h('pre', `MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice()
]) {
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display])
   console.log("[score, goals, operator, picked, display]",
     [score, goals, operator, picked, display]);
  this.s = newState;
  buttonNode = bNode(display);
  return window['gameMonad'] = new MonadState('gameMonad', newState);
}

var gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[1,2,3,4]],
      [0,0,0,[],[0,0,0,0]]],1 ]);  ` ),
  h('p', ' Here is the code that controls what happens when a player clicks a number or an operator: '),
  h('pre', `  var numClickAction$ = numClick$.map(e => {
    if (gameMonad.fetch3().length < 2)  {
      var a = gameMonad.fetch3();
      var b = gameMonad.fetch4();
      a.push(b.splice(e.target.id, 1)[0]);
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
  });  `),
  h('p', ' Notice the empty spaces in the arguments to gameMonad.run(). gameMonad.run()\'s argument is an array to facilitate calling it with default values. In numClickAction$ we are not changing the score, goals, or operator. The default values of these parameters are their current values. In opClickAction$, we are changing only one thing, the operator. Everything else stays as it is. ' ),
  h('p', ' When two numbers and an operator have been selected, control passes to updateCalc(). Here\'s the code: ' ),


  h('pre', `function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);ar
  if (result === 18 || result === 20) {
    score(result);
  }
  else {
    var a = gameMonad.fetch4().slice();
    a.push(result);
    gameMonad.run([,,0,[],a]);  // Display the result and 
                                // reset the operator and selected values.
  }
};

function score(result) {
    var sc = parseInt(gameMonad.fetch0());
    var sco = result === 18 ? sc + 3 : sc + 1;
    var scor = sco % 5 === 0 ? sco + 5 : sco;
    var goals = gameMonad.fetch1();
    if (scor === 25 && gameMonad.fetch1() === "2") {  // The player wins.
        mMindex.ret(0);
        gameMonad = new MonadState('gameMonad', 
           [[[0,0,0,[],[0,0,0,0]],[0,0,0,[][0,0,0,0]]],0]);
        socket.send(\`CE#$42,${pMgroup.x},${pMname.x}\`);  
        // Ask the server to announce the winner to the entire group
        newRoll(0,0);
    }
    else if (scor === 25) {
      newRoll(0, parseInt(goals,10) + 1);
    }
    else newRoll(scor, goals);   // No increase in the number of goals.
};   ` ),
 h('span.tao', ' Additional code is available at' ),
 h('a', { props: { href: "https://github.com/dschalk/monads-in-JavaScript", 
   target: "_blank" } }, 'monads-in-JavaScript.'),
  h('p', '.'),
  h('p'),

  h('h3', 'Appendix B - Curried Functions Used In Several Demonstrations'),
  h('pre', `  function square (v) {
    return ret(v*v)
  };

  function cube (v, id) {
    return ret(v*v*v, id);
  };

  function add (a, b, id) {
    return ret((parseInt(a,10) + parseInt(b,10)),id);
  };

  const divCinverse = a => b => ret(e/b);
  const divC = a => b => ret(b/a);
  const addC = a => b => ret(a+b);
  const cubeC = v => ret(v*v*v);
  const multC = a => b => ret(a*b);
  const doubleC = a => ret(a+a);
  const squareC = a => ret(a*a);
  const sqrtC = a => ret(Math.sqrt(a));

async function squareP (x) {
  await wait(2000) 
  return ret(x*x);
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

const divPinverse = a => async b => {
  await wait (2000)
  return ret(a/b);
}

const divP = a => async b => {
  await wait (2000)
  return ret(b/a);
}

const sqrtP = async a => {
  await wait (2000)
  return ret(Math.sqrt(a));
}

const doubleP = async a => {
  await wait (2000)
  return ret(a+a);
}

const addP = x => async y => {
  await wait(2000) 
  return ret(x + y);
}

const multP = x => async y => {
  await wait(2000) 
  return ret(x * y);
}

async function cubeP (x) {
  await wait(2000) 
  return ret(x*x*x);
} `),

h('p'),
h('h3', 'Appendix C - Further Reading ' ),
h('p', ' Here is a good resource: '),
h('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know Javascript by Kyle Simpson'),  
h('span', ' You can support the open-source digital version of this book with Patreon at the above address or purchase hard copies from O\Reily, Amazon, etc. ' ),
h('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know Javascript'),  
h('span', ' is the thinking developer\'s answer to ' ),
h('a',   {props: {href: "http://shop.oreilly.com/product/9780596517748.do", target: "_blank" }},  ' "JavaScript: The Good Parts" by Douglas Crockford ' ),
h('span', ', which has long been revered as a "must read" JavaScript book. Kyle Simpson recommends learning to use potentially dangerous code intelligently while Douglas Crockford advocates never using it at all. I think the phrase "eval is evil" stems from Crockford\'s book. I find eval() to be very useful from time to time. Kyle Simpson teaches programmers how to safely tap the full potential of JavaScript. ' ),  
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
  WWG: workerGDriver,
  WW: workerDriver,
  PP: pingpongDriver
}

run(main, sources);

