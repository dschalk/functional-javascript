  import {h, p, span, h1, h2, h3, pre, br, div, label, input, hr, makeDOMDriver} from '@cycle/dom';
  import Cycle from '@cycle/xstream-run';
  // import {makeHTTPDriver} from '@cycle/http';
  import code from './code.js';
  import { run } from './cycle-run.js';


function createWebSocket(path) {
    var host = window.location.hostname;
    if (host === '')
        host = 'localhost';
    var uri = 'wss://' + host + ':3055' + path;
    var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;

    return new Socket(uri);
}
// socket = createWebSocket('/');

// socket = "MozWebSocket" in window ? new MozWebSocket('ws://127.0.0.1:3055/') : 
socket = new WebSocket('ws://127.0.0.1:3055/');
// socket = new WebSocket('wss://127.0.0.1:3055/');

function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)},
    stop: () => { socket.close() }
  });
};

socket.onclose = function (event) {
    console.log('<><><> ALERT - socket is closing. <><><> ', event);
};

  login();
  function login () {
    console.log('00000000000000000000000000000000 Entering login', socket.readyState);
    setTimeout(function () {
      if (socket.readyState === 1) {
        console.log('readyState is',socket.readyState);
        var v = Math.random().toString().substring(5);
        var v2 = v.toString().substring(2);
        var v2 = "password"
        playerName = v;
        playerGroup = "solo";
        pMname.ret(v);
        pMoldName.ret(v);
        pMgroup.ret('solo');
        gameMonad.run([0,0,0,[],[7,7,7,7],v,"solo"]);
        var combo = v + '<o>' + v2;
        socket.send('CC#$42' + combo );
        pMcombo.ret(combo);
        pMclicked.ret([]);
        socket.send(`GZ#$42,solo,${v}`);
      }
      else {
        login();
      }
    },1000 )
  }

  function main(sources) {
   console.log('0^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got to main()');

   const messages$ = sources.WS.map( e => {
     var v = e.data.split(',')
     var group = v[1]
     var sender =  v[2];
     var extra = v[3];
     var extra2 = v[4];

     mMZ9.bnd( () => {
       // pMname.ret(sender);
     });

     mMZ10.bnd( () => {
       if (sender === pMname.x) {
         gameMonad.run([v[7], v[8], 0, [], [v[3], v[4], v[5], v[6]]]);
       }
       else gameMonad.run([, , , [], [v[3], v[4], v[5], v[6]]]);
     });

     mMZ11.bnd( () => {
       console.log('The message arrived', messages$);
       var message = v.slice(3,v.length).join(', ');
       var str = v[2] + ': ' + message;
       messages.unshift(h('span', str ), h('br'));
       console.log('The message was typeof ar', typeof str );
     });

     mMZ12.bnd( () => {
       mMgoals2.ret('The winner is ' + v[2]);
       setTimeout( function () {mMgoals2.ret('')},700);
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
         console.log('In mMZ15.bnd ar, arr, arr2, and arr3 are', ar, arr, arr2, arr3),
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
         mMregister.ret('The password you entered is not the password that is registered for ' + tempName + '.' );
         mMshowRegister.ret('inline');
       }
     });

     mMZ17.bnd( () => {                          // Prefix GZ#$42
       var newStr = extra.substring(0, extra.length-3);
       newStr = newStr.replace(/<@><@>/g, "<@>");
       newStr = newStr.replace(/↵/g, '');
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

     mMZ20.bnd( () => {                         // Prefix GD#$42  DELETE A COMMENT
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

     mMZ27.bnd( () => {
       mMZ38.release(v[3]);
     });

     mMZ28.bnd( () => {
       if (playerName === sender) mMZ40.release(v[3]);
       else console.log('message from sender to BC#$42')
     });

     ret(v[0])
    .bnd(next, 'CC#$42', mMZ9)
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
    .bnd(next, 'BB#$42', mMZ27)  // works in conjunction with it4
    .bnd(next, 'BC#$42', mMZ28)  // works in conjunction with it4
   });

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
    var index = parseInt(e.target.parentElement.id, 10);
    var w = e.target.value.split(",");
    var nu = pMname.x + "<o>" + w.join('<<>>');
    var old = commentMonad.s[1].slice(index,index+1)[0];
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
  var count = (str.match(/,/g) || []).length;
  if (count === 0) nameMess = "Please enter a name, a comma, and a password";
  else if (count > 1) nameMess = "Commas are not allowed in names or passwords";
  else nameMess = '';
  var art = str.split(',');
  if (e.keyCode === 13) {
    mMerror.ret('');
    if (art.length != 2) {
      mMerror.ret(' There should be one and only one comma' );
      return;
    }
    else {
      var name = art[0];
      tempName = name;
      var x = art.join('<o>');
      mMshowRegister.ret('none');
      pMname.bnd(backupMonad.ret)
      pMname.ret(name);
      playerName = name;
      console.log('pMname.x is', pMname.x );
      console.log(pMname.x === playerName);
      socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`); }
      setTimeout(function () {
        socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
      },700);
  }
});

console.log("Wake up, you horse's ass");

    var groupPress$ = sources.DOM
        .select('input#group').events('keypress');

    var groupPressAction$ = groupPress$.map(e => {
      if (e.keyCode === 13 && e.target.value ) {
        var g = e.target.value.replace(/,/g, '');
        send("CO#$42", g);
        gameMonad.run([0,0,0,[],[0,0,0,0],,g]);
        socket.send(`TI#$42,${g},${pMname.x}`);
        setTimeout ( () => send("CO#$42", g),500);
      }
    });

var messagePress$ = sources.DOM
    .select('input.inputMessage').events('keydown');

var messagePressAction$ = messagePress$.map(function (e) {
    if (e.keyCode === 13) {
        socket.send(`CD#$42,${pMgroup.x},${pMname.x},${e.target.value}`);
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
});

//******************************************************** MATRIX

/*
var rNumsDS = [0,1,2,3]
console.log('rNumsDS', rNumsDS);
var rADS = [];

var rDataDS = [
  h('button#mR0', 0 ),
  h('button#mR1', 1 ),
  h('button#mR2', 2 ),
  h('button#mR3', 3 )
];

function rFuncDS (j,k,r) {
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  return r;
}  

function makeRDS (arr) {
  var r = arr.slice();
  return [
    h('button#mR0', r[0] ), 
    h('button#mR2', r[1] ),
    h('button#mR1', r[2] ), 
    h('button#mR3', r[3] ) 
  ];
};
*/

var indexDS = 0;

var m80$ = sources.DOM
.select('#mR0').events('click')
.map(e => {
  console.log("e is",e);
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m81$ = sources.DOM
.select('button#mR1.mR').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m82$ = sources.DOM
.select('#mR2.mR').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m83$ = sources.DOM
.select('button#mR3').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m84$ = sources.DOM
.select('button#mR4').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m85$ = sources.DOM
.select('button#mR5').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m86$ = sources.DOM
.select('button#mR6').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m87$ = sources.DOM
.select('button#mR7').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m88$ = sources.DOM
.select('button#mR8').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m89$ = sources.DOM
.select('button#mR9').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m810$ = sources.DOM
.select('button#mR10').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m811$ = sources.DOM
.select('button#mR11').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m812$ = sources.DOM
.select('button#mR12').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
   rExchange (rADS[0], rADS[1]); 
   rADS = [];
  }
});

var m813$ = sources.DOM
.select('button#mR13').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m814$ = sources.DOM
.select('button#mR14').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4)));
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});

var m815$ = sources.DOM
.select('button#mR15').events('click')
.map(e => {
  rADS.push(toInt(e.target.id.slice(2,4))); 
  if (rADS.length === 2) {
    mMindexDS.ret(mMindexDS.x + 1);
    rExchange (rADS[0], rADS[1]); 
    rADS = [];
  }
});
function rGridFunc (a=rADS, i=mMindexDS) {
  i.ret(i.x + 1);
  rExchange (a[0], a[1]); 
  a = [];
};

var gridCh$ = sources.DOM
.select('#gridInput').events('change');

/*function rExchange (k,n,ar=rNumsDS,AR=ArrDS) {
  var a = ar[k];
  ar[k] = ar[n];
  ar[n] = a;
  return makeRDS(rNumsDS);
}; */

var backCl$ = sources.DOM
  .select('#gridBack').events('click')

var bAction$ = backCl$.map(() => {
  if(mMindexDS.x > 0) {
    mMindexDS.ret(mMindexDS.x - 1);
    console.log("Blow me");
    rNumsDS = ArrDS[mMindexDS.x].slice();
  };
});

var forwardCl$ = sources.DOM
  .select('#gridForward').events('click')

var fAction$ = forwardCl$.map(() => {
  if(mMindexDS.x+1 < ArrDS.length) {
    mMindexDS.ret(mMindexDS.x + 1);
    rNumsDS = ArrDS[mMindexDS.x].slice();
  };
});






//*********************** ZULU ********************************* END MATRIX




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
    gameMonad.run([,,,a,b,,]);
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
    gameMonad.run([,,e.target.innerHTML,,,,]);
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

// ******************************************************************** <><><><><><> -> End Demos
    var itterPress$ = sources.DOM
        .select('#itter').events('keypress');
    var itterADSction$ = itterPress$.map(e => {
      if (e.keyCode === 13) {
        itterResult = h('div', styleFunc(["#FFD700",,"16px",,,]), bind(pInt(e.target.value))(v => v)(() => mMZ23.bnd(v => v*v*v))(()=>3)(x => mMZ23.release(3)+x)(q => q*q/ar[1])(terminate).join(', ') );
      }
    });

    var doublePress$ = sources.DOM
        .select('#double').events('keypress');

    var doubleAction$ = doublePress$.map(e => {
      var dRes = "";
      if (e.keyCode === 13) {
        bind(3)
        (cubeP)(addP(3))(c=>ar[1]
        .then(v => v - 75 + c*ar[0]))(terminate)
        .map(v => v.then ? v.then(s => 
        dRes = dRes + s + ', ') : dRes = dRes + v + ', ')  
      }
    });
    
    // ******************************************************************** <><><><><><> -> End Demos

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

      var printingPress$ = sources.DOM
          .select('input#demo2').events('keydown');

      var demo2Action$ = printingPress$.map(function (e) { 
        if (e.target.value === '') return;
        if (e.keyCode === 13) {
        Bind.bind1 = [];
        bind1(e.target.value)(cubeP)
        (() => idP(Bind.bind1[0]-Bind.bind1[1])) 
        (v=>addP(Bind.bind1[1])(v))
        };
      });


      // *******************************************n****************************** ENDOM iginal Fibonacci END

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START PRIME FIB
var topPrime = 2;
var fS = [2]
var pFS = [2];


      
const workerB$ = sources.WWB.map(m => {
  if (m.data[3] === 'color') {
    fill1Monad.ret(m.data[0]);
    fill2Monad.ret(m.data[1]);
    fill3Monad.ret(m.data[2]);
    mMprimeBlurb.ret(m.data[5]);
    mMfibBlurb.ret(m.data[4]);
    mMprimeFibBlurb.ret(m.data[6]);
  }
  else {
    fS = m.data[1].join(', '); 
    pFS = m.data[2].join(', ');
    mMelapsed.ret(elapsed(m.data[3]))
    if (m.data[0].length > primeState2.length) {
      primeState2 = m.data[0];
      fibState = m.data[1];
      prFibState = m.data[2];
      var topP = primeState2.slice(-1);
      topPrime = topP.toString();
    }
  }
});

var fibKeyPress5$ = sources.DOM
    .select('input#fib92').events('keyup');

var primeFib$ = fibKeyPress5$.map(num => {
  var n = num.target.value;
  var j = Math.sqrt(n);
  var k = primeState2.slice(-1)[0];
  if (k > j) {
    var t = Date.now();
    var fibs = fibState.slice(0, fibState.indexOf(fibState.find(e => e > n)));
    fS = fibs.join(', ');
    var prFibs = fibs.filter(n => prFibState.indexOf(n) !== -1);                  
    pFS = prFibs.join(', ');
    mMelapsed.ret(elapsed(t));
    diffRender();
  }
  else { 
    workerB.postMessage([primeState2, fibState, prFibState, n]);
  }
});

var clearprimes$ = sources.DOM
  .select('#clearprimes').events('click')
  .map(() => mMres.ret([mMres.x[0], '', mMres.x[2], mMres.x[3]]));


    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Begin Easy


    //******************************************************************* worker
      m42_RES = [];


var clearClick$ = sources.DOM
    .select('button.clear_P').events('click')
    .map(e => {
      m42_RESULT = [];
      m42_RESULT2 = [];
    })

var factors2Press$ = sources.DOM
    .select('button.factors_P').events('click');

var factors2Action$ = factors2Press$.map(function (e) {
  var factors = [];
  mMfactors3.ret('');
  bind(65)(cubeC)(it4)(it6)(it7);
});

workerG$ = sources.WWG.map(m => {
  m778_RESULT = result778(m.data);
  mMZ38.release(m.data);
  if (m.data) {console.log('GOOD m.data')} else { return "cow" }
    if (m.target) {console.log('GOOD m.target')} else { return "shit" }
      if (m.data[1]) {console.log('GOOD m.data[1]')} else { return 'donkey'}
        if (m.target.ar2) {console.log('GOOD m.data.ar2')} else { return 'dung'}

});

function bind (x, ar=[]) {
  var ar = ar;
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    var p;
    if (x instanceof Promise) {
      p = x.then(v => func(v));
    }
    else p = func(x);
    return bind(p, ar);
  };
};

      var clearClick7$ = sources.DOM
          .select('button.clear_Q').events('click')
          .map((() => {
            m42_ = [];
          }))
  

      var factorsClick7$ = sources.DOM
        .select('button#factors_Q').events('click');

      var factorsAction7$ = factorsClick7$.map( e => {
        m42_ = [];
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);


        bind(145)(x=>x*x*x)(it4)(it6)(it7);

        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
        bind(145)(x=>x*x*x)(it4)(it6)(it7);
      });
      

   /*      var sortFactors = ar => ar.sort(function(x,y) {
        return (x - y);
      });

      workerH$ = sources.WWH.map(m => {
        console.log('m.data <D><D><D><D><D><D> ', m.data);
        var promes = m.data[0];
        var factors = m.data[1];
        var p = primeState.concat(primes);
        var z;
        if (factors.length > 1) {
          z = "The prime factors of " + x + " are " + sortFactors(factors).join(', ')
        }
        else z = x + " is a prime number"
        mMZ52.release(z);
      });
*/

      workerH$ = sources.WWH.map(m => {
        mMZ52.release(m.data[1]);
        var w = m.data[0][m.data[0].length - 1];
        if (m.data[0].length > primeState.length) primeState = m.data[0];
      });   
  
      var factors3Press$ = sources.DOM
          .select('input#factors').events('keypress');

      var factors3Action$ = factors3Press$.map(function (e) {
          if (e.keyCode === 13) {
          bind(e.target.value)(it8);
        }
      });

      mMZ40.bnd(v => {
        workerH.postMessage([primeState, v])
      });

    /*  workerH$ = sources.WWH.map(m => {
        console.log('<0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0> In workerH$ m is', m);
        mMZ40.release(m.data);
        // mMZ40.bnd(v => console.log(reduceMult(v), reducePlus));
      });

       if (m.data) {console.log('GOOD m.data')} else { return "cow" }
       if (m.target) {console.log('GOOD m.target')} else { return "shit" }
       if (m.data[1]) {console.log('GOOD m.data[1]')} else { return 'donkey'}
       if (m.target.ar2) {console.log('GOOD m.data.ar2')} else { return 'dung'} */

      const result778 = x => h('div', [
        m778_RESULT,
        h('br'),
        h('span', bigBlue, x[3] ),
        h('span', bigGreen, x[0] ),
        h('span', bigBlue, x[4] ),
        h('span', bigRed, x[5] ),
      ]);

      var m778_RESULT = h('div', '' );


        var mMZ33Func = x => mMZ33
          .bnd(x => {
            mMt32 = new Monad(x,'mMt32');
            mMt33.ret(x + ' cubed is ' + x*x*x)
            mMZ33Func(x+1);
          });

        mMZ33Func(0);

        var testZ = sources.DOM
            .select('#testZ').events('click');

        var testZAction$ = testZ.map(function () {
            mMZ33.release(mMt32.x + 1);
        });

        var testQ = sources.DOM
            .select('#testQ').events('click');

        var testQAction$ = testQ.map(() => {
          mMZ33.release(0);
          diffRender();
        });

        var testW = sources.DOM
            .select('#testW').events('keypress');

        var testWAction$ = testW.map(function (e) {
            if (e.keyCode === 13) {
                mMZ33.release(parseInt(e.target.value, 10));
                diffRender();
            }
        });
//*********************************** pingpong ***************  START

var makeDisplay = a => b => c => h('div', [
  h('pre', a, ` ping        ---> `), 
  h('pre', b, `                 <---        pong `), 
  h('pre',  `          -- SCORE: ping: ` + c[0]  + ` pong: ` + c[1]  ),
]),

pingCompute = bool => aa => bb => cc =>
  dd => {
  var a;
  var b;
  if (a === "serve") {
    a = _A3;

  }
  var a = aa = bool ? _A1 : _A3;
  var b = aa = bool ? _A3 : _A2;
  pingDisplay = makeDisplay(a)(b)(cc)(d);
};

var pingScore = [0,0];

pp4 = ()  => {
  var a = _A3;
  var b = _A2;
  var c = _A3;
  var d = [0,0];
  var random = 0;
  var turns = 0;
  var bool = true;
  var car;
  var ms = 300;
  return car = () => {
    bool = !bool;
    pingCompute(bool)(a)(b)(c)
    diffRender()
    if (random === 0) random = Math.floor(Math.random() * 11)+1;  // New serve flag "random === 0" detected.
    setTimeout( function () {
      if (pingScore[0] >= 11 || pingScore[1] >= 11) { 
        diffRender() 
        turns = 0;
        random = 0;
        pingScore = [0,0];
      };
        if (turns >= random && turns % 2 === 0) {
          pingScore[0]+=1; 
          turns = 0;
          random = 0;  // A signal to compute a new random number when the next message comes in.
          diffRender()
        }
        if (turns >= random && turns % 2 === 1) {
          pingScore[1]+=1; 
          turns = 0;
          random = 0;       
          diffRender()
        } 
        ms = (turns < random) ? 300 : 900;
        turns+=1;
        diffRender()
        car()
    },ms )          
  }
};


// ***************************** start click    

  var pingpong$ = sources.DOM
  .select('button.pingpong').events('click')
  .map(() => {
  PingpongMaker('m67_RESULT')(); 
  PingpongMaker('m68_RESULT')(); 
  PingpongMaker('m69_RESULT')();   
  });


// ******************************* end click    

pingScore = [0,0];
pingScore2 = [0,0];
pingScore3 = [0,0];
// ***************************** start message from workerI    

const otherP = bool => a => b => c =>  {  
  if (typeof bool !== 'boolean') {
    window[a] = window[a] === _A3 ? _A1 : _A3
    window[b] = window[a] === _A3 ? _A2 : _A3
    diffRender()
    return;
  }
  if (bool) {
    window[a] = _A1;
    window[b] = _A3;
    window[c][0] += 1;
    diffRender();
    return;
  }
  window[a] = _A3;
  window[b] = _A2;
  window[c][1] += 1;
  diffRender();
};

const workerI$ = sources.WWI.map(m => { 

  if (m.data === "game over") return;
  otherP(m.data)('ping43')('ping44')('pingScore');
  otherP(m.data)('ping45')('ping46')('pingScore2');
  otherP(m.data)('ping47')('ping48')('pingScore3');
  workerI.postMessage(m.data);
  diffRender();
}); 


// ***************************** end message from workerI    

var pinpon4$ = sources.DOM
    .select('button.pingpong4').events('click')

var pingpong4$ = pinpon4$.map(() => {
 
  pp4('ping43')('ping44')('pingScr1');
 // pp4('ping45')('ping46')('pingScr2'); 
 // pp4('ping47')('ping48')('pingScr3');
});

// *********************************** pingpong ***************  FINISH

        const fred$ = sources.FD.map(e => {
          freday = e;
        })

        var frd$ = sources.DOM
            .select('div#fredB').events('click')

        var fredAction$ = frd$.map((e) => {
            freday = [];
            diffRender()
        });

        var fredGo$ = sources.DOM
            .select('button#fredB')
            .events('click')
            .map(() => {
              freday = [];
              funcP()
            });



      //******************************************* END pingpong END

      /*
      const redStyle = {style: {color: 'red', marginLeft: '20%', fontSize: '25px'}}
      const yellowStyle = {style: {color: 'yellow', marginLeft: '20%', fontSize:'25px'}}

        var pingpongRecursion = n => ar => bind(n,ar)(ppFna)(pause)(ppFnb)(() => {
          if (n < 15) pingpongRecursion(n+1,ar)
          bind(n+1,ar)(ppFna)(pause)(ppFnb)(terminate)
        });

        var ppFna = n => h('p', redStyle, 'ping' + n);
        var ppFnb = n => h('div', [h('br'),h('p', yellowStyle, 'PONG' + n)]);



          var pingpongAction$ = pingpong$.map(function (e) {  });

        */
          // **********************************************************************

  var bindBD$ = sources.BD.map(m => console.log("Say what?",m))

  const workerC$ = sources.WWC.map(m => {
    console.log('The message arriving from workerC is', m.data);
    mMfactors.ret(m.data[1]);
    var w = m.data[0][m.data[0].length - 1];
    if (m.data[0].length > primeState.length) primeState = m.data[0];
  });

  var factorsP$ = sources.DOM
    .select('input#factors_5').events('keyup');

  var fA$ = factorsP$.map(function (e) {
    mMfactors7.ret('');
    var factors = [];
    if (e.keyCode === 13) {
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
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
    mMfactors6.ret(m.data[0][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    mMfactors8.ret(m.data[1]);
  });


  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  End Easy
  const largestFactor = x => bind(1111111)(prm5)(split2)(largest)(terminate).pop()
  
    
    
  var factorsPress_b$ = sources.DOM
      .select('input#factors_1').events('keydown');

  var factorsAction$ = factorsPress_b$.map(function (num) {
    if (num.keyCode === 13) {
  var n = num.target.value;
  var j = Math.sqrt(n);
  var k = primeState.slice(-1)[0];
  if (k > j) {
    var primes = primeState.slice(0, primeState.indexOf(primeState.find(e => e > n)));
  }
  else primes = primeState;
  workerE.postMessage([primes, n]);
}});

  const workerE$ = sources.WWE.map(m => {
    mMfactors.ret(m.data[1]);
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
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -> Back in the main thread. m is', m );
    mMfactors6_b.ret(m.data[2][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    window['decompMonad'] = new MonadState('decompMonad', m.data[2], primes_state);
    mMfactors8_b.ret(m.data[1]);
  });

  var factorsP_c$ = sources.DOM
    .select('input#factors800').events('keyup');

  var fA_c$ = factorsP_c$.map(function (e) {
    mMfactors800.ret('');
    var factors = [];
    var ar = (e.target.value).split(',').map(v => parseInt(v,10));
    if (e.keyCode === 13) {
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
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

  var clearADSction$ = clearPicked$.map( () => {
    gameMonad.clearPicked();
  });

  var elemB$ = sources.DOM.select('input#group').events('keypress')
    .map(e => {
    mM10.ret(e.target.value);
    worker.postMessage([mM9.x, e.target.value]);
  });

  var pr$ = sources.DOM
      .select('#primeNumbers').events('keypress');

  var prADSction$ = pr$.map(function (e) {
      if (e.keyCode === 13) {
        worker.postMessage(["CE#$42", primesMonad.s, e.target.value]);
      }
  });


  // Clicking the checkbox to indicate that a task has been finished.
  var box$ = sources.DOM.select('.box').events('click');

  var boxAction$ = box$.map(e => {
    var index = parseInt(e.target.parentNode.id, 10);
    var task = taskMonad.s[1].slice(index,index+1)[0];
    var old = task;
    var ar = task.split("<$>");
    ar = ar.filter(v => v !== "");
    ar[1] = ar[1] === "false" ? "true" : "false"
    var newTask = ar.join("<$>");
    socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
  });

  var cbx2$ = sources.DOM.select('.cbx2').events('click');

  var cbx2Action$ = cbx2$.map(e => {
    var index = parseInt(e.target.parentNode.id, 10);
    var task = taskMonad.s[1].slice(index,index+1)[0];
    var old = task;
    var ar = task.split("<$>");
    ar = ar.filter(v => v !== "");
    ar[1] = ar[1] === "false" ? "true" : "false"
    var newTask = ar.join("<$>");
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
      ar.shift();
      ar.unshift(newString);
      var newTask = ar.join("<$>");
      socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
    }
  });

  var newTask$ = sources.DOM
      .select('input.newTask').events('keydown');

  var newTaskAction$ = newTask$.map(function (e) {
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

  console.log('Getting close to calcStream@');

  var chatClick$ = sources.DOM
      .select('#chat2').events('click')
      .map(() => showChatDiv = showChatDiv === "none" ? "block" : "none")

   var todoClick$ = sources.DOM
      .select('#todoButton').events('click')
      .map(() => showTodoDiv = showTodoDiv === "none" ? "block" : "none")

  var result_8$ = sources.DOM
      .select('#res8').events('click');

  var diffR$ = sources.DOM
      .select('#diffRender').events('click')
      .map(() => {
        if (diffRend < 50) {diffRend+=1}
        else diffRend = 0;
      });

   
  var diffRendChange$ = sources.DOM
      .select('input#change').events('onChange')
      .map(e => {
        console.log('diffRend changed <C><C>< Change ><C><C> --> --> e is', e );
      })

  var diffRendClick$ = sources.DOM
      .select('input#change').events('click')
      .map(e => {
        console.log('diffRend changed <C><C>< Click Click Click ><C><C> --> --> e is', e );
      })


  var res8$ = result_8$.map(() => {
    res8_Style = res8_HIDE;
    setTimeout(() => {res8_Style = res8_SHOW,4600;diffRender()},4200);
    RESULT_8 = [];
    bind(1)(addP(2))(cubeC)(addC(3))(multC(2))(multP(3))
    (addC(30))(multC(1/10))(terminate).slice(1,8).map(v => v.then(z => {
      ;RESULT_8.push(z.x+' ');console.log(RESULT_8);diffRender()}))
    });

  console.log('NOW WE ARE AT calcStream@');

  var test5Press$ = sources.DOM
    .select('input#test5').events('keypress');

  var test5Action$ = test5Press$.map(function (e) {
    if (e.keyCode === 13) {
      test5(e.target.value);
    }
  }); 


  var test7Press$ = sources.DOM
    .select('input#test7').events('keypress');

  var test7Action$ = test7Press$.map(function (e) {
    if (e.keyCode === 13) {
      runTestResult = runTest(toInt(e.target.value));
    }
  }); 

counter = function counter(n, acc = 0) {
  var _repeat = true;

  var _n, _acc;

  while (_repeat) {
    _repeat = false;

    if (n === 0) {
      return acc;
    } else {
      _n = n - 1
      _acc = acc + 1
      n = _n
      acc = _acc
      _repeat = true;
      continue;
    }
  }
}

var calcStream$ = xs.merge( gridCh$, fAction$, bAction$, m80$, m81$, m82$, m83$, m84$, m85$, m86$, m87$, m88$, m89$, m810$, m811$, m812$, m813$, m814$, m815$, pingpong$, test5Action$, test7Action$, diffRendChange$, diffRendClick$, demo2Action$, bindBD$, doubleAction$, itterADSction$, fredGo$, fredAction$, diffR$, res8$, m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prADSction$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, workerI$, clearClick$, clearClick7$, workerG$, workerH$, clearADSction$, factorsAction$, factorsAction7$, factorsClick7$, factors2Action$, factors3Action$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$) 

return { DOM: calcStream$.map(() => { 
  return h('div.main', [

h('div.image_3', [
h('img.image_2', {props: {src: "logo.svg" }}  ),
h('span', ' ' ),
h('a', { props: { href: "https://cycle.js.org/", target: "_blank" } }, 'A Cycle.js application')    ]),
h('div', {style: {textAlign:"center", fontWeight: "bold"}}, [
  h('br'),  
  h('div', {style: {fontSize: "25px", color: "#FFD700",textAlign: "center"}}, 'BETTER THAN MONADS'),
  h('div', styleFunc(['#FFF700',,'20px','italic',,'center']), 'Higher-Order Functions In JavaScript'),
]),
h('div.content', [


h('p', ' This project was originally titled "JavaScript Monads". My monads, like Category Theory monads and Haskell monads, are objects. Monads compose in the Haskell programming language by means of the ">>=" (pronounced "bind") operator. ' ),
h('p', '"Monad" is not defined in EcmaScript 2018. Loosely speaking, a JavaScript monad "m"(not a Category Theory monad) has a value "m.val" and composes by means of a method "m.b" that operate on functions, say "func1", that operates on m.val returning a monad "m2" such that m2.val is func1(m.val) or, in more sophistocated variations on the theme, func(m.val, ...args). Therefore m2.b(func2) results in a monad, let\'s call it "m3", with m3.val === func2(func(m.val)). "m" can have multiple methods that behave like "b". JQuery and Lodash objects are monads according to this definition. '),
h('span.tao', ' My monads are constricted, sort of Haskell-like variations on the theme. They have only one method that behaves like "m.b" (above) and a method "ret" that directly changes a monad\'s value to ret\'s argument. Others, including Douglas Crockford, author of '),
h('a', {props: {href: "http://shop.oreilly.com/product/9780596517748.do", target: "_blank" }}, 'Javascript: The Good Parts' ),  
h('span', ', have defined monads that are superficially even more Haskell-like. Mr. Crockford explained his in the video presentation ' ),
h('a', {props: {href: "https://www.reddit.com/r/haskell/comments/16rsb7/monads_and_gonads_talk_by_douglas_crockford/", target: "_blank" }}, '\"Monads And Gonads\"' ),  
h('span', '. ' ),
h('p', ' JavaScript has tremendous untapped potential. Procedures and values stored in objects such as String and Array is an essential language feature; but it is a rather pedestrian way of composing functions. JavaScript shines brightly when it works with higher-order functions instead of the ordinary objects. Case in point: compare Ramda (higher-order functions) with Underscore (objects). Or, more starkly and succinctly, compare composition using bind() (next paragraph) with any procedure that links objects à la monads. ' ),
h('h3', 'Composing With Higher-Order Functions' ),  
h('p', ' The examples below demonstrate function composition with functions instead of object methods. Syntax consists of calling "bind(x)" for some value "x" and then naming or defining the functions to be composed on "x". A \"(terminate)\" flag at the end causes the internal array of return values (or resolution values of Promises) to be returned. Consider:' ), 
h('div', styleFunc(["#FFD700","3%","21px",,,]), 'bind(x)(functiona1)(function2) ... (functionN)'),
        h('br'),

        h('span', styleFunc(["#d3ead5",,"18px",,,]), 'where '),
        h('pre', styleFunc(["#FFD700",,"18px",,,]), `  x can be any value,

  there are no restrictions on the functions\' argument types, 

  there are no restrictions on the functions\' return value types,

  functions can even return promises,

  functions have built-in access to all prior functions\' return values,

  functions have built-in access to all prior promises\' resolution values. `),
        h('span#lion', '' ),
        h('span.tao', styleFunc(["#d3ead5",'3%',"18px",,,]), ' Composition doesn\'t get more flexible and expressive than this. Calling bind(x)(function1)(function2)... creates a sequence of functions consuming functions and returning functions that consume functions. Here is the ' ),      
h('a', {props: {href: "#bind" }},  'definition of bind'),

]),

h('div#content2', [
h('div', {style: {width: '47%', fontSize: '15px', float: 'left'}}, [ // ((************ LEFT PANEL
h('br'),

h('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 1 - A Simple Example.'),
h('span.tao', ' If you understand why "result === Bind.foo" (below) returns true, you have a pretty good grasp of how foo and, more generally, ' ),
h('a', {props: {href: "#bind2" }},  "Bind" ),
h('span', ' work. ' ),
h('br'),
h('pre', `  var foo = Bind('foo');

  var result = foo(1)(v=>v+2)(v=>v*v*v)(v=>v+3)
  (v=>v*Bind.foo[1])(z=>z/Bind.foo[3] - 2)(terminate);
 
  console.log(result) // [1, 3, 27, 30, 90, 1]
  console.log(result === Bind.foo) // true  `),
h('p', ' In the demonstration on the right, enter a value for "x" in runTest(x) and see the result. ' ),
h('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 2 - WebSocket and worker messaging.'),

h('span.tao', ' The first demonstration consists of bind(145) followed by a math computation, a function that sends the computation result to the WebSocket server, a function that sends the WebSocket response to a web worker, and a function that uses the worker response to update the browser display and the prime number cache. '), 
h('p#defsReturn'),
h('span.tao', ' it4() and it6() are asynchronous functions that use "MonadItter" callback handlers in conjunction with Ecmascript 2015 promises. MonadItter is discussed in the '),
h('a', {props: {href: "#defs" }},  'appendix'),
h('span', '.' ),
h('br'),
h('p', ' After the first run, caching of prime numbers usually shortens execution time by around 80%. Run times on Firefox 59 are somewhat shorter than on Chrome 65 (both 64 bit) in my Ubuntu 17.10 desktop computer. ' ),



h('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 3 - avoiding clashes.'),
h('span', ' Demonstration 2 shows the results of computations run sequentially from top to bottom in columns from left to right. Nine similar functions run orthogonally to one another thanks to the constructor "Bind". Bind.bind1, Bind.bind2, ..., Bind.bind9 are inside of nine "div" elements in the virtual DOM. Demonstration 2 shows the arrays as they grow from empty to four-membered arrays. '),  
h('span', '. Here is the '), 
h('a', {props: {href: "#bind2" }},  "definition of Bind" ),
h('p', ' bind1 is a function. Bind.bind1 is an array not of the promises returned by each function, but rather it is an array of the values that are produced as each promise resolves. "Bind.bind1" is a permanent fixture in the virtual DOM description returned by main(). You can watch it and nine similar arrays as their lengths seem to increase in parallel by entering an integer in the right column.'),
h('p', ' Demonstration 2 shows that the nine sequences do not interfere with one another. They can\'t corrupt data outside of the namespace created by Bind, nor can they be corrupted by outside processes. '),  
  
h('span.tao', {style: {color: "#FFD700"}}, `"bind1(e.target.value)(cubeP)"` ),
h('span', ' cubes user inpup. The first element of each Bind array attribute (Bind.bind1, Bind.bind2, etc) is the a number that is encapsulated in a promise. The promise resolves after 1200 ms, providing its resolution value to cubeP. When cubeP resolves, its resolution value becomes the argument of the next promise\'s then method. The delayed identity function "idP" takes the difference of the original value and its cube as its argument. After this resolves, the original value\'s cube is added to its resolution value. '),
h('p#backToDem3', '     '), 
h('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 4 '),
h('span#backToDem2', ' This demonstration uses a closure named "PingpongMaker" instead of Bind to define clones of the function "ping". Three instances of ping operate independently of one another in the demonstration on the right. Here is '),
h('a', {props: {href: '#pingmaker'}}, 'more information about Demonstration 3.' ),
h('br'),
]),
h('div', {style: {width: '47%', fontSize: '15px', float: 'right'}}, [  // ********* RIGHT PANEL

h('h3', 'Demonstration 1' ),
h('pre', `  function demoFunc(x) {
    return foo(x)(v=>v+2)(v=>v*v*v)
    (v=>v+3)(v=>v*Bind.foo[1])
    (z=>z/Bind.foo[3] - 2)(terminate)
  };

  function runTest(x) {
    Bind.foo = [];
    var u = demoFunc(x); 
    return [u, u === Bind.foo]
  } ` ),

h('span', ' runTestResult = runTest(n): Enter n here --> '),
h('input#test7', {style: {height: "15px" }} ),
h('br'),
h('br'),
h('div', {style: {color: "#9fe0f4" }}, [
  h('span', "runTestResult[0]: " ),
  h('span', {style: {color: "red"}}, runTestResult[0].join(', ') ),
  h('br'),
  h('span', "runTestResult[1] === Bind.foo: " ),
  h('span', {style: {color: "red"}}, runTestResult[1].toString() )
]),

h('h3', 'Demonstration 2' ),
h('span', ' Click below to run bind(145)(x=>x\*x\*x)(it4)(it6)(it7) twenty-five times. The left column is the call order.'),
h('br'),
h('br'),
h('span', styleFunc(["rgb(7, 247, 247)","12%","20px",,,,,]), 'bind(145)(x=>x**3)(it4)(it6)(it7)'),
h('br'),
h('br'),
h('button#factors_Q', {style: {fontSize: '15px'}}, 'bind(145)(x=>x**3)(it4)(it6)(it7)'),
h('span', "~~"),
h('button.clear_Q', {style: {fontSize: '15px', marginLeft: "0"}},  'clear results'),
h('br'),
h('br'),
h('div#demo2', m42_ ),
h('br'),
h('br'),



h('h3', 'Demonstration 3' ),

h('pre', `bind1(n+0)(cubeP)(() => idP(Bind.bind1[0] -
Bind.bind1[1]))(v=>addP(Bind.bind1[1])(v));
bind2(n+1)(cubeP)(() => idP(Bind.bind2[0] -
Bind.bind2[1]))(v=>addP(Bind.bind2[1])(v)); 
  . . .
bind9(n+8)(cubeP)(() => idP(Bind.bind9j[0] -
Bind.bind9[1]))(v=>addP(Bind.bind9[1])(v)); `), 

h('div', 
  [ h('div', bigRed, Bind.bind1.join(', ') ),
    h('div', bigRed, Bind.bind2.join(', ') ),
    h('div', bigRed, Bind.bind3.join(', ') ),
    h('div', bigRed, Bind.bind4.join(', ') ),
    h('div', bigRed, Bind.bind5.join(', ') ),
    h('div', bigRed, Bind.bind6.join(', ') ),
    h('div', bigRed, Bind.bind7.join(', ') ),
    h('div', bigRed, Bind.bind8.join(', ') ),
    h('div', bigRed, Bind.bind9.join(', ') ), 
  ]
),

h('span', ' value of n --> '),
h('input#test5', {style: {height: "15px" }} ),
h('br'),

h('br'),
h('br'), 

h('h3', 'Demonstration 4' ),
h('br'),
h('button.pingpong', {style: {fontSize: '17px'}}, 'start pingpong'),
pingDisplay, 
h('br'),
h('br'),
h('br'),
h('br'),
  m67_RESULT,
h('br'),
  m68_RESULT,
h('br'),
  m69_RESULT,
h('br'),
h('br'),
  
h('br'),
h('br'),
h('br'),
]),
h('br'),
h('br'),
]),
h('br'),
h('br'),
h('h1', '_____________________________________________________________________' ),
h('br'),
h('div.content', [

h('br'),
h('br'),
h('span.tao', 'Functions that take multiple arguments should be curried, or else their arguments should be contained in single arrays or objects. This is a consequence of the fact that functions can only return single values, and those return values (or resolution values) are the arguments of the functions linked to their right sides. Here are functions that curry and reverse curry multi-argument functions: ' ),
h('a', {props: {href: "#curryDef"}}, "curry and reverseCurry " ),
h('span', ', and here is an example: ' ),
h('pre', `  curryReverse(parseInt)(6)("000111") === 43 // true;  
const toInt = curryReverse(parseInt)(6); // A curried function
toInt("000111") === 43 // true `),

h('span.tao', ' There are library functions, for example Lodash/fp\'s '),
h('br'),
h('a', {props: {href: "https://lodash.com/docs/4.17.4#flow"}}, "  .flow" ),
h('span', ' and Ramda\'s '),
h('a', {props: {href: "http://ramdajs.com/docs/#compose"}}, 'R.compose' ),
h('span', ', that facilitate simple function composition; i.e., each function\'s argument is the preceding function\'s return value. bind() does this while also giving every linked function along a chain access to the return values of every function, and the resolution values of every promise that precedes it.  '),
h('br'),
h('br'),

h('span.tao', 'This project was created by and is actively maintained by David Schalk. The code repository is at '),
h('a', { props: { href: "https://github.com/dschalk/functional-javascript", target: "_blank" }}, 'functional-javascript'),
h('span', '. Please leave a comment in the '),
h('a', {props: {href: "#comments"}}, 'comments'),
h('span', ' section near the end of this page. You can email me at pyschalk@gmail.com. '),
h('p', ' '),
h('p', ' The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history. All group members see other members\' scores decrease or increase as they navigate backwards and forwards. ' ),
  
h('p', ' Visitors to this site are automatically logged in with pseudo-randomly generated numbers as their user names and passwords. The default "group" is the non-group "solo". '),
h('p', ' You can select a persistent name and password. These will make it possible for you to return at any time and delete or edit your comments. '),
h('p#gameIntro', ' The demonstration section also has a text box where you can create or join a group by entering a group name. Changing groups resets your game score and goal tally to zeros. ' ),
      h('span.tao', ' The game code is fairly concise and intuitive. A quick walk-through is presented at.' ),
h('a', { props: { href: '#gameCode' } }, 'here'),
h('span', '. To see monadic functionality at work, I suggest that you take a look at the section captioned ' ),
h('a', { props: { href: '#asyncExplanation' } }, 'Asynchronous Processes'),
h('br'),
h('p', ' But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of functional programming, playing with bind() and the monads in the browser console might lift you into the comfort zone you seek. ' ),
h('h3', 'The Game'),
h('p', 'People who are in the same group, other than the default non-group named "solo", share the same todo list, chat messages, and simulated dice game. '),
h('p', ' Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then emptied and the application is ready to start accumulating a new history. '),
h('p', ' Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. As mentioned above, Knowing your password facilitates revising or removing comments.' ),


]),
h('h1', 'Game, Todo List, Text Messages' ),
h('div#gameDiv2', {style: { display: mMgameDiv2.x }}, [
h('div#leftPanel', {style: { display: mMgameDiv2.x }}, [
h('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time ROLL is clicked, one point is deducted. Three goals wins the game. The code is in an appendix.'),
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
h('p', ' Create a group or join an existing group. ' ),
h('span', 'Change group: '),
h('input#group', 'test' ),
h('p', mMsoloAlert.x ),
h('p', ' You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file. You can use this combination in the future to edit or delete your saved comments. ' ),
h('span.red', mMregister.x ),
h('p', {style: {color: "red"}}, nameMess ),
h('label', {style: {display: mMshowRegister.x }}, 'Register or log in here:'),
h('input.register', {style: {display: mMshowRegister.x }} ),
])]),
h('div#rightanel', { style: { display: 'block', float: 'right' } }, [
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
])
]),
h('br'),
h('br'),
h('h1', '________________________________________________' ),
h('div.content', [
h('a#bind', {props: {href: '#lion'}}, 'Back to the bind discussion.'),

h('p', 'CAUTION - SOME OF THE COMMENTARY AFTER THIS POINT STILL LAGS BEHIND RECENT REFACTORING.'),
h('p', ' bind() and similar functions are created by the constructor named "Bind". Here is Bind()\'s definition: '),
h('pre', {style: {color: "lightBlue"}}, `  function Bind (str) {
    Bind[str] = [];
    return function bindo ( x ) {
      if (x instanceof Promise) x.then(y => {
        Bind[str].push(y);
        diffRender();
      })
      else {
        Bind[str].push(x)
        diffRender();
      }
      return function debug8 (func) {
        var p;
        if (func.name === "terminate") return Bind[str];
        if (x instanceof Promise) {
          p = x.then(v => func(v));
        }
        else p = func(x);
        return bindo(p);
      };
    };
  }; ` ),
h('p', ' And here are the definitions of bind() and several similar functions: ' ),
h('pre', `  var bind = Bind("bind0");
  var bind1 = Bind("bind1");
  var bind2 = Bind("bind2");
  var bind3 = Bind("bind3");
  var bind4 = Bind("bind4");
  var bind5 = Bind("bind5");
  var bind6 = Bind("bind6");
  var bind7 = Bind("bind7");
  var bind8 = Bind("bind8");
  var bind9 = Bind("bind9"); ` ),
h('a', {props: {href: '#content2'}}, 'Back to the preview demos'),
h('p', italicYellow, ' Sequences beginning with bind() reveal exactly what is happening while sometimes hiding confusing conglomerations of nested promises intermingled with other types of functions. In other words, they provide a way out of "Callback Hell". '),
h('p#cycle'),
h('a', { props: { href: '#top' } }, 'Back To The Top'),
h('br'),
h('a', {props: {href: '#cyclet'}}, 'Async Procedures' ),
h('p', ' "h(\'div\', m42_RESULT)" is a permanent fixture in the Snabbdom virtual DOM that is returned by main() and updated by calcStream$. When it7() executes, Snabbdom performs its diff and render routine, updating the browser window. '),
h('p', ' The asynchronous functions in Demonstration 1 use monadItter instances mMZ40 and mMZ52 instead of Promises. Here\'s the definition of MonadItter: '),
h('pre', `  var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
      return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
      return this.p = func;
    };
  }; `),
h('p', ' When obtaining data from unreliable sources, adding error checking to MonadItter or using promises\' error- checking feature would be helpful. '),
h('h3', 'Reactivity In Cycle.js' ),
h('span.tao', ' Reactivity occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andrew Staltz\' '),
h('a', { props: { href: "https://egghead.io/courses/cycle-js-fundamentals", target: "_blank" } }, ' Overview of Cycle.js.'),
h('span', ' Its elegance might take your breath away. ' ),
h('br' ),
h('br' ),
h('a.tao', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom' ),
h('span', ', ' ),
h('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,' ),
h('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and fun so many of its functions and variable definitions are included in scripts in the index.html page. ' ),
h('br' ),

h('p', ' The next interactive demonstration accepts user input and executes the following statement in a web worker: ' ),
h('pre', `bind(ar[1])(execF)(fpFunc(ar[0])(x)); ` ),
h('span', ' The parameters are defined in the ' ),
h('a', {props: {href: "fp"}}, 'appendix' ),
h('span', '. ' ),
h('br'),
h('pre', {style: {color: "red", fontStyle: "italic"}} , `Red Indicates An Ongoing Computation` ),

h('pre', `Fibonacci numbers   Prime Numbers   Prime Fibonacci Numbers `), 

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
  h('br'),
  h('p.red',  'The elapsed time is ' + mMelapsed.x + ' milliseconds.' ),
  h('input#fib92'),
  h('br'),
  h('br'),
  h('span#PF_7.red6', 'Fibonacci Numbers'),
  h('br'),
  h('span#PF_9.turk', fS  ),
  h('br'),
  h('span#PF_8.red6', 'Prime Fibonacci Numbers'),
  h('br'),
  h('span#primeFibs.turk', pFS  ),
  h('br'),
  h('span#PF_21.red6', 'The largest generated prime number.'),
  h('br'),
  h('span.turk', topPrime  ),
  h('br'),
  h('h3', ' Promises are not needed ' ),
  h('p', ' Asynchronous code can be handled without reliance on Ecmascript 2015 promises either explicitly or implicitly (e.g. using async/await). Cycle.js drivers eliminate any need to explicitly use functions from a reactive library, but xstream is an integral component of Cycle.js unless you choose most.js or RxJS. ' ),

  h('p', ' The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9\'s, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:' ),
  h('input#factors_1'),
  h('br'),
  h('br'),
  h('span', mMfactors.x ),
  h('span.tao3', mMfactors23.x ),
  h('p', ' primesMonad and the functions primarily involved in its transformation are shown below: ' ),
    code.primes,
    h('p', ' primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code: ' ),
    code.primes3,
  h('p', ' The user\'s selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling: ' ),
      code.primes4,
  h('p', ' execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB. ' ),
      code.primes2,

h('h3', 'Type Checking' ),
h('p', ' Type checking is useful for avoiding runtime errors and for optimization of user interfaces. For example, if a user enters the wrong type of data it is helpful to display a message explaining why nothing is happening. Not allowing defective user input to be transmitted to a WebSocket server prevents sockets from disconnecting. Some developers like to superimpose strong typing over JavaScript or write code in a strongly typed language that compiles to JavaScript. I leave JavaScript (ES7, to be precise) as it is and check types only where user input is involved. If this project were a team effort, other team members might be users of functions I write so more extensive type-checking would be prudent.'),
h('br'),
h('a', {props: {href: '#top'}}, 'Back to the top'),
h('h3', 'Another Example'),
h('p', ' The result of every computation in a chain of synchronous functions is available to every computation that comes after it. This can be seen in the next example where the result of each computation is pushed into Bind.foo: ' ),
h('pre', `  var foo = Bind("foo"); 

  var result = foo(1)(v=>v+2)(v=>v*v*v)(v=>v+3)
  (v=>v*Bind.foo[1])(v=>v*Bind.foo[1])(v=>v+30)
  (v=>v*1/(Bind.foo[3]*2))(terminate)

  console.log(result) // [1, 3, 27, 30, 90, 270, 300, 5] 
  console.log(result === Bind.foo) // true  `),

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
        if (typeof v == 'string' && v.charADSt() == '$') {
           t = v.slice(1);  // Remove "$"
        }
      })
    }
    return t;
  }; ` ),
h('p', ' This is less functional than using bind() in that it doesn\'t pass functions down the chain but instead passes objects with exposed methods. But it has appealing features. Look how values move along the chain until, at the end they combine to yield 42. Explicitly passing values from function to function along a chain is impossible with bind(); but with bind(), all chained functions share an array of return values and the resolution values of returned promises. '),
h('br#itter'),
h('pre', `  ret(2).bnd(v => add(v,1)
  .bnd(cube).bnd(p => add(p,3)
  .bnd(() => ret(p/3).bnd(add,3)
  .bnd(z => v*z+p-v*p+z))))  //  9 ` ),
     // ************** OOOOOOOOOOOOOO ********    BEGIN ASYNC


  // h('asyncExplanation', ' Asynchronous Processes ' ),

  h('a', { props: { href: '#gameIntro' } }, 'Back to the first set of demonstrations.'),


  h('h2', 'MonadItter'),
  h('p', ' As shown in the "Monads" section (above), the definition of MonadItter is: ' ),
  code.monadIt,
  h('p', ' MonadItter instances don\'t link to one another. They exist to facilitate the work of instances of Monad, MonadState, etc. Here\'s how they work: '),
  h('p', 'For any instance of MonadItter, say "it", "it.bnd(func)" causes it.p === func. Calling the method "it.release(...args)" causes p(...args) to run, possibly with arguments supplied by the caller. '),
  h('p',' MonadItter instances control the routing of incoming WebSocket messages. In one of the demonstrations below, they behave much like ES2015 iterators.'),
  h('h3', ' A Basic Iterator '),
  h('p', 'The following example illustrates the use of release() with an argument. It also shows a lambda expressions being provided as an argument for the method mMZ1.bnd() (thereby becoming the value of mMZ1.p), and then mMZ1.release providing an arguments for the function mMZ1.p. The code is shown beneath the following two buttons. '),
  h('button#testZ', 'mMZ33.release(1)'),
  h('p', mMt33.x ),
  h('span', 'Refresh button: '),
  h('button#testQ', 'mMt33.ret(0) '),
  h('span.tao', ' The expression mMt33.x sits permanently in the Motorcycle virtual DOM description. You can call '),
  h('span.green', 'mMZ33.release(v)'),
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
  h('p', ' The function "solve()" is at the center of the algorithm. See how mMZ3.bind() appears three times. Each time a user enters a number, say "x", mMZ3.release(x) executes. After the third number, solve calls itself so the process can start again. I prefer this approach over ES6 generators. Here\'s solve(): '),
  code.quad,
  h('p', ' And here are the supporting functions: '),
  code.quad2,
  h('p', ' fmap (above) facilitated using qS4 in a monadic sequence. qS4 returns an array, not an instance of Monad, but fmap lifts qS4 into the monadic sequence. '),
  h('p', ' The function solve() is recursive. It invokes itself after release() executes three times. The expression "solve()" resets solve to the top, where mMZ3.p becomes a function containing two nested occurrences of mMZ3.bnd. After mMZ3.release() executes, mMZ3.p becomes the function that is the argument to the next occurrence of mMZ3.bnd. That function contains yet another occurrence of mMZ3.bnd. MonadItter is syntactic sugar for nested callbacks. ' ),

h('h3', ' Preserve Archives By Sidestepping Mutation '),
h('p', ' When you assign a variable to an array, for example "var arr = [1,2,3]", arr points to a location in memory. Suppose you want to preserve a record of previous values of arr. You might try saving them in an array like this: ' ),
h('pre', `  var arr = [1,2,3]
  var b = [arr];
  arr.push(4);
  b.push(arr);
  console.log(b[0]);  // [1,2,3,4]
  console.log(b[1]);  // [1,2,3,4]  
  b[0] == b[1]  // true` ),
h('p', ' That didn\'t work! b points to [arr] and arr still points to its original location in memory. "arr.push(4)" mutated the value in arr\'s location and "b.push(arr)" added a copy. "b[0] == b[1]" returning true verifies that both elements of b point to the same place in memory because in JavaScript, the "==" operator on objects (including arrays) is defined to return true if and only if the objects\' ' ),
h('p', ' Here is what happens when "arr.slice()" is pushed into b: ' ), 
h('pre', `  var arr = [1,2,3];
  var b = [arr.slice()];
  arr.push(4);
  b.push(arr.slice());
  console.log(b[0]);  // [1,2,3]
  console.log(b[1]);  // [1,2,3,4] ` ),
h('p', ' Success! "arr.slice()" returned a copy of arr assigned to a new location in memory. It is anonymous, so the only way to access it is through b. b[0], b[1], and arr each have unique locations in memory so mutating one has no effect on the others. ' ), 
h('p', ' The sixteen-square grid below puts these concepts into practice. If you click two squares, they exchange locations on the grid. If you do this several times, the "BACK" and "FORWARD" buttons will display the result of each pair of clicks. ' ),
h('div#donkey', makeRDS( ArrDS[mMindexDS.x] )),
h('br'),
h('button#gridBack', 'back' ),
h('button#gridForward', 'forward' ),
h('p', "index: " + mMindexDS.x  ),
h('p', "rNumsDS: " + rNumsDS.join(', ') ),
h('p', "rMatrixF(rNumsDS: " + rMatrixF(rNumsDS) ),
h('br'),
h('br'),
h('p', ' Reactivity is achieved in these demonstrations through Cycle.js rather than RxJS, Bacon, or something else that could work just as well, though perhaps not quite as elegantly. This section provides a glimpse of how I use (some might say, \"misuse\") Cycle.js. '),
h('p', ' If you click any two numbers above they will exchange places with one another. The array "rNumsDS" keeps track of the positions of numbers on the grid. ' ),
h('pre', `var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] `),
h('p', ' Each square on the grid is a button. This is the initial setup: '),
h('pre', `  var rDataDS = [
    h('button#mR0.mR', 0 ),
    h('button#mR1.mR', 1 ),
    h('button#mR2.mR', 2 ),
    h('button#mR3.mR', 3 ),
    h('button#mR4.mR', 4 ),
    h('button#mR5.mR', 5 ),
    h('button#mR6.mR', 6 ),
    h('button#mR7.mR', 7 ),
    h('button#mR8.mR', 8 ),
    h('button#mR9.mR', 9 ),
    h('button#mR10.mR', 10 ),
    h('button#mR11.mR', 11 ),
    h('button#mR12.mR', 12 ),
    h('button#mR13.mR', 13 ),
    h('button#mR14.mR', 14 ),
    h('button#mR15.mR', 15 ) ] ` ),
h('p', ' The following line of code is a fixture of the virtual DOM. It accounts for the sixteen-square grid shown above: ' ),
h('pre', `  h('div#donkey', ArrDS[indexDS] ) `),
h('p', ' If you begin exploring the demonstration by clicking the upper right square, this code in main() responds by placing the number 3 in rADS: ' ),
h('pre', `  var m83$ = sources.DOM
  .select('button#mR3').events('click')
  .map(e => {
    rADS.push(toInt(e.target.id.slice(2,4)));
    if (rADS.x.length === 2) {
     rDataDS = rExchange (rADS[0], rADS[1]); 
    }
  }) ` ),
h('p', ' Then if you click the bottom right square (var m815), rADS expands to contain "3" and "15". This causes rExchange(3,15) to run and return the updated value of rDataDS. ' ),
h('pre', `  function rExchange (k,n) {
    var a = rNumsDS[k];
    rNumsDS[k] = rNumsDS[n];
    rNumsDS[n] = a;
    rADS = [];
    return makeRDS(rNumsDS);
  } `),
h('p', ' The last line of rExchange is a call to makeRDS, which is defined as follows: ' ),
h('pre', `  function makeRDS (arr) {
    var r = arr.slice();
    return [
      h('button#mR0.mR', r[0] ), 
      h('button#mR1.mR', r[1] ),
      h('button#mR2.mR', r[2] ), 
      h('button#mR3.mR', r[3] ), 
      h('button#mR4.mR', r[4] ), 
      h('button#mR5.mR', r[5] ),
      h('button#mR6.mR', r[6] ), 
      h('button#mR7.mR', r[7] ), 
      h('button#mR8.mR', r[8] ), 
      h('button#mR9.mR', r[9] ),
      h('button#mR10.mR', r[10] ), 
      h('button#mR11.mR', r[11] ), 
      h('button#mR12.mR', r[12] ), 
      h('button#mR13.mR', r[13] ),
      h('button#mR14.mR', r[14] ), 
      h('button#mR15.mR', r[15] ) 
    ];
  } `),



h('p', ' button#R9.mR has id "#R9" and formatting class "mR". When numbers are rearranged, the id\'s remain in fixed positions. ' ),
h('p', ' The process is responsive because r83 and r815 are merged in the stream that feeds the virtual DOM; i.e., the stream returned by main() and fed back into main() by run(). Cycle.run(main, sources) is the last line of the front-end code. ' ),
h('p', ' This code undoubtedly deviates from Cycle.js and functional programming recommended practices. After all, rNumsDS and rDataDS are global variables tracking the state of the grid. Cycle.js favors maintaining state in streams and functional aficionados eschew global variables, period. Me, I just like to make things work as neatly and efficiently as I can. Making a state stream would be a hassle and, since this is not a group effort, nobody is going to hijack my variable names. So, for now, grid state will hang out in global scope. ' ),





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

  h('h3', 'Feedback From the Error Monad' ),
  h('span#comments' ),
  h('img.image', {props: {src: "error2.png"}}  ),
  h('div#comment'),
    h('h2', {style: {color: "red" }}, 'Comments' ),

  h('a', {props: {href: '#top'}}, 'Back to the top'),
    h('div#com2',  { style: { display: abcde} } ),
    h('p', ' When this page loads in the browser, a user name is automatically generated in order to establish a unique WebSocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password. ' ),
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
    h('div', commentMonad.html ),
    h('p', ' When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. '),
    h('p', ' When a comment is created, modified, or deleted, a WebSocket message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js. ' ),
  h('p', ' The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger. ' ),
  h('p', ' commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Immutability is necessary for game history traversal. Here is the entire Comments.js file: ' ),
  h('pre', `function showFunc (name, name2)
{return name == name2 ? 'inline-block' : 'none'}

var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
}  

bind2(n)(cubeP)(addP(3))(a=>a+ar[0]+ar[1]-18)(multP(1/3))
  (addP(-11))(()=>ar[1]+ar[2]+ar[3])(terminate) ;

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
    var x = a.split("<o>");
    if (x.length != 2) x = ['malfunction', '8888']
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
h('div#curryDef'),
h('br'),
h('pre', `function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function curryReverse(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args.reverse());
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

} `),

h('a', {props: {href: '#top'}}, 'Back to the top'),
  h('p', ' *************************************************************************************** ' ),

h('h3', ' STATEMENT OF DAVID SCHALK ' ),
h('p', styleFunc(["#a2f2e8",,"18px","italic",,]), 'Functional programming aficionados will have noticed by now that I do not scrupulously avoid mutation of variables, variables in global scope, functions that fish data from outside their scopes, or functions that produce side effects before they return. Is there method to my madness? Am I crazy like a fox? Or am I just setting bad examples with sloppy code? Here\'s what I say about all of that: '),
h('p', ' For me, functional programming is not a religious cult to whose dogmas I must scrupulously adhere. Mutating variables inside of functions can minimize lines of code and promote efficiency. The global variable that starts out as: '),
h('pre', `  var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] `),
h('p', ' feels elegant to me. It is a simple proxy for the sixteen square grid that never needs to be operated upon directly because the placement of its numbers are in one-to-one correspondence with the placement of its (rNumsDS\'s) elements. I could have tucked it away in an object or closure, but I like it so much that I dignified it with the designation "window.rNumsDS". I ignored an important rule. I did it more than once, and it isn\'t the only important rule I ignored. But in every case, there was an advantage (if only in efficiency), and I made sure that no harm could come from my deviations. ' ),
h('p', ' If I were working in a group, or providing something that would be maintained by anyone other than me, I would code by the book. I\'m not getting paid for this work; I\'m just having fun. Dig it! '),

  h('h3', 'Haskell Time'),
  h('p', ' This page is for front end developers, but in case anyone is interested, here are the server functions responsible for deleting or amending a comment: ' ),
  h('pre', `    removeOne _ []                 = []
  removeOne x (y:ys) | x == y    = ys
                     | otherwise = y : removeOne x ys

  changeOne :: Text -> Text -> [Text] -> [Text]
  changeOne _ _ []                 = []
  changeOne z x (y:ys) | x == y    = z : ys
                       | otherwise = y : changeOne z x ys ` ),

  h('a', ' Every message sent to the server is a comma separated string beginning with a prefix, then a group, and then a name. Comma separated items after that are named extra and extra2. ' ),
  h('p', ' The code belw is responsible for dealing with comments. As in the browser, WebSocket messages are dealt with according to their six character prefixes. extra and extra2 are the only pertinent data since comments go to all groups ' ),
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

  h('div#reactivity' ),
  h('br'),
  h('a', {props: {href: "#reactivity2"}}, 'Back to the pingpong demo' ),

  h('h3', 'Reactivity in Cycle.js'),

  h('p', ' The stream incF$ and the driver pingpongDriver() (both defined below) are essential components of the pingpong demonstration. '),

  h('pre', blue, `  var incF$ = n => xs.of(n);

    function pingpongDriver () {
      return xs.create({
        start: listener => {
          incF$ = k => listener.next(k)
        },
        stop: () => {}
      })
    };  `),
  h('p', ' Whenever the stream incF$() is called, the stream returned by pingpongDriver is augmented and that causes main() to return an object whose only element is a map from the stream calcStream$ to a virtual DOM node with many children. calcStream$ is produced by merging 48 streams together including ping$ resulting from ping(n) where "n" is the number supplied by pingpongDriver (a/k/a "sources.PP"). The first two lines of main()\'s return value are shown below. ' ),
  h('pre', `    return { DOM: calcStream$.map(() => {
      return h('div.main', [  ` ),


  h('p', ' merged into it. Each time main returns, Snabbdom\'s diff and render routine executes inside of run(sources,main). run(sources,main) calls main() and furnishes it with the listeners provided by the drivers. New events cause the cycle to repeat. ' ),
  h('p', ' ping(-5)([0,0]) is called when the pingpong button is clicked. Here\'s the relevant code:'),
  h('pre', `  var pingpong$ = sources.DOM
      .select(\'buttonr#ingpong\').events(\'click\').map(() => ping(0)([0,0]));

    var ppR = {style: {color: 'red',
      marginLeft: '5%', fontSize: "26"}};
    var ppY = {style: {color: 'yellow',
      marginLeft: '42%', fontSize: "26"}};
    var ppRY = {style: {color: 'yellow',
      marginLeft: '5%', fontSize: "26"}};
    var ppYR = {style: {color: 'red',
      marginLeft: '42%', fontSize: "26"}};

    var ppStyle = false;


    var ping = n => ar => {
      var k = Math.floor(Math.random() * 5)+1;
      if(ar[0] > 10 || ar[1] > 10) {
        diffRender();
        return;
      }
      setTimeout(() => {
        if (n <= k) {
          ppStyle = !ppStyle;
          incF$(n);
          ping(n+1)(ar);
        }
        else if (n % 2 === 0) {
          ar[0]+=1;
          m67_RESULT = h('pre', ppYR, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` )W
          ping(0)(ar);
        }
        else {
          ar[1]+=1
          m67_RESULT = h('pre', ppY, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` );
          ping(0)(ar);
        }
      }, 500 )
    }  ` ),
h('p', ' The function diffRender() forces Snabbdom to perform one last diff and render. It is defined as follows: ' ),
  h('pre', `  const diffRender = () => document.getElementById("testQ").click();`),
  h('p', ' The button "testQ" cubes the number 2 in the MonadItter demonstration. It was chosen because it does not significantly affect anything aside from forcing Snabbdom to update the DOM. '),

  h('p', ' The stream incF$ and the driver pingpongDrirun(main, sources) are the crucial Cycle.js application functions. sources contains the drivers. sources.PP = pingpongDriver is one of the drivers consumed by run() and made available in main() so information can be sent back to run. Round and round it goes. Here is the definition of ping$. ' ),

  h('span.tao', ' The monads do not depend on Cycle.js. They can be used in React, Node, and all other browser-based applications. I happen to prefer Cycle.js working in conjunction with a Haskell WebSocket server. ' ),
  h('br'),
  h('h2', 'Appendix A - The Game Code' ),
  h('pre', `function MonadState(g, state) {
  this.id = g;
  this.s = state;
};  ` ),
  h('a', {props: {href: '#gameIntro'}}, 'Back to the first group of demonstrations.'),
  h('p'),
  h('pre', `MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice()
  playerName = this.s[0][this.s[1]][5] ? this.s[0][this.s[1]][5].slice() : "nobody",
  playerGroup = this.s[0][this.s[1]][6] ? this.s[0][this.s[1]][6].slice() : "solo",
]) {
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display,playerName,playerGroup])
   console.log("[score, goals, operator, picked, display]",
     [score, goals, operator, picked, display,playerName,playerGroup]);
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
      gameMonad.run([,,,a,b,,]);
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
      gameMonad.run([,,e.target.innerHTML,,,,]);
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
    gameMonad.run([,,0,[],a,,]);  // Display the result and
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

  h('pre#wait', ` function square (v) {
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

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
} h('a#it4', {props: {href: '#top'}}, 'Back to the top'),

async function cubeP (x) {
  await wait(2000)
  return ret(x*x*x);
} 

const addP = x => async y => {
  await wait(2000)
  return ret(x + y);
}

async function squareP (x) {
  await wait(2000)
  return ret(x*x);
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

const multP = x => async y => {
  await wait(2000)
  return ret(x * y);
}

    `),

h('p'),
h('h3', 'Appendix C - Further Reading ' ),
h('p', ' Here is a good resource: '),
h('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know JavaScript by Kyle Simpson'),
h('span', ' You can support the open-source digital version of this book with Patreon at the above address or purchase hard copies from O\Reily, Amazon, etc. ' ),
h('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know JavaScript'),
h('span', ' is the thinking developer\'s answer to ' ),
h('a',   {props: {href: "http://shop.oreilly.com/product/9780596517748.do", target: "_blank" }},  ' "JavaScript: The Good Parts" by Douglas Crockford ' ),
h('p', ' That\'s not to say that Crockford isn\'t a thinking developer. He is a very bright guy. It\'s just that the so called "good parts" are a dumbed down subset of JavaScript that help keep people out of trouble when they don\'t feel inclined understand the JavaScript programming language. ' ),
h('span#cyclet', ', which has long been revered as a "must read" JavaScript book. Kyle Simpson recommends learning to use potentially dangerous code intelligently while Douglas Crockford advocates never using it at all. I think the phrase "eval is evil" stems from Crockford\'s book. I find eval() to be very useful from time to time. Kyle Simpson teaches programmers how to safely tap the full potential of JavaScript. ' ),
h('p#defs'),
h('br'),

h('a', {props: {href: '#lion'}}, 'Back to the bind discussion.'),
  
h('pre', h3Simulation, 'Asynchronous Processes - A deep dive into Demonstration 1' ),

h('p', ' Demonstration 1 begins with the click of a button with id "factors_Q" and ends with fifteen browser updates. The activity after each click is tied together by: ' ),
h('pre', `function bind (x, ar=[]) {
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    var p;
    if (x instanceof Promise) {
      p = x.then(v => func(v));
    }
    else p = func(x);
    return bind(p, ar);
  };
}; ` ),
h('p', ' Clicking the button with id "factors_Q" creates an event to which factorsClick7$ stream responds by prompting "bind(145)(x=>x*x*x)(it4)(it6)(it7)" to execute fifteen times. The factorsAction7$ stream flows into the virtual DOM where changes cause the Snabbdom diff and render process to update the browser. Here\'s some of the relevant code: ' ),
h('pre',  `var factorsClick7$ = sources.DOM
  .select('button#factors_Q').events('click');

var factorsAction7$ = factorsClick7$.map( e => {
  m42_ = [];

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);

  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
  bind(145)(x=>x*x*x)(it4)(it6)(it7);
}); ` ),
    
h('p', 'it4() sends the number 3,048,625 to the server which responds by sending back a pseudo-random number between 1 and 3,048,625. '),

h('pre', `var it4 = x => {
  if (socket.readyState === 1) socket
  .send(\`BC#$42,${pMgroup.x},${pMname.x},${x}\`);
} `),

h('p', 'WS is a driver defined as follows: ' ),

h('pre', `function createWebSocket(path) {
    var host = window.location.hostname;
    if (host === '')
        host = 'localhost';
    var uri = 'ws://' + host + ':3055' + path;
    var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

var socket = createWebSocket('/');

function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)}, 
    stop: () => { socket.close() }
  });
}; ` ),

h('p', ' The prefix "xs" designates the name space for the xstream library. ' ),

h('pre', `function main(sources) {
  const messages$ = sources.WS.map( e => {
    var v = e.data.split(',')  // The string arriving from the server is made into an array.
    ...
    ret(v[0]  // "ret" is defined below:
              // v[0] is the prefix of each message from the server.
    ...
    .bnd(next, 'BC#$42', mMZ28)  // Executes when a "BC$#42"-prefixed message arrives from the server

Instances of Monad2 encapsulate values. Here is the definition:

function Monad2(z = 0) {
  this.x = z;
};

Monad2.prototype.ret = a => new Monad2(a);

Monad2.prototype.bnd = function (func, ...args) {
  return func(this.x, ...args)
}

function ret (val = 0) {  // Similar to Monad2.prototype.ret
  return new Monad2(val);
} ` ),

h('p', ' Back to messages$: ' ),

h('pre', `ret(v[0])
...
  .bnd(next, 'BC#$42', mMZ28)  
 ) ` ),

h('p', ' When anything prefixed by mMZ28 comes in from the server, mMZ28.release executes, causing mMZ40.bnd(r) to execute, where "r" is the random number obtained from the Haskell server. ' ),

h('pre', `mMZ28.bnd( () => {
  mMZ40.release(v[3]);
}); ` ),

h('p', ' The cached prime numbers and the random number obtained from the server are then sent to workerH. it6 deviates from the functional principle of placing all extraneous data in the arguments. ' ),

h('pre', `var it6 = x => {
  mMZ40.bnd(x => workerH.postMessage([primesMonad.s[3], x])); ` ),

h('p', 'Here\'s the definition of workerH.js: ' ),

h('pre', `function isPrime(n) {
   var m = Math.sqrt(n);
   for (var i=2;i<=m;i++) if (n%i==0) return false;
   return true;
}

function primeNums (p,x) {
  var q = p[p.length - 1];
  var arr = []; 
  for (var i = q; i < Math.ceil(x+1); i+=1) if (isPrime(i)) arr.push(i);
  arr = p.concat(arr)
  return arr
}  

function pfactors (prms, n) {
  var ar = [];
    prms.map(p => {
      if (n/p === Math.floor(n/p)) {
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
  var a = m.data[0];
  var b = parseInt(m.data[1],10);
  postMessage(g(a)(b));
}  ` ),

h('p', ' "mMZ52.bnd(m => { ... " could have been placed anywhere. Putting it at the end of "bind(50)(x => x*x*x)(it4)(it6)(it7)"illustrates the flexibility of bind for the purposes of Example 1, but in production it would also make Demonstration 1 easier to understand by people responsible for maintaining the code. ' ),


h('h3', 'MonadItter'),
h('p', ' The MonadItter section of the page has a detailed discussion and live demonstrations. This is the definition: '),
h('pre', `  var MonadItter = function MonadItter() {
  this.p = function () {};
  this.release = function () {
    return this.p.apply(this, arguments);
  };
  this.bnd = function (func) {
    return this.p = func;
  };
}; `),
h('h3', 'Promises'),

h('p', ' As the definition of MonadItter shows, bnd() saves functions until release() causes them to execute. MonadItter instances are usually used on this webpage where promises, generators, and async/await could also do the job. '),
h('p', 'Here are the Promises-based functions prm4() and prm6() that can be substituted for it4() and it6() in the expression bind(145)(cubeC)(it4)(it6): '),
h('pre', `  const prm4 = x => {
  if (socket.readyState === 1) socket.send(\'BB#\$42,pMgroup,pMname,' + x);
  return new Promise( (resolve, reject) => {
     mMZ37.bnd((y) => resolve(ret(y)))
  })
}

const prm6 = x => {
  workerG.postMessage([primesMonad.s, [x]]);
  return "Done"
} `),

h('p', ' Error handling is easy when using MonadItter instances, and is entirely optional. '), 
h('p', ' After "bind(145)(cubeC)(it4)(it6)(it7) runs, the prime decomposition of the number it recieved arrives from workerG. The workerGDriver (sources.WWG) detects the message and adds it to the workerG$ stream. Here is the definition of workerGDriver:  ' ),
h('pre', `  function workerGDriver () {
  return xs.create({
    start: listener => { workerG.onmessage = msg => listener.next(msg)},
    stop: () => { workerG.terminate() }
  });
}; `),
h('p', ' Clicking the "decompose fifteen random numbers" button causes factorsRecursion(0) to execute. Here\'s the code: '),
h('pre', blue,  `  const factorsRecursion = n => bind(145)(cubeC)(it4)
  (it6)(() => { if (n < 15) factorsRecursion(n+1)}); `),
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
  h('pre', bigGreen, `const factorsRecursion = n => bind(145)(cubeC)(it4)
  (it6)(pause)(() => { if (n < 15) factorsRecursion(n+1)}); `),

h('pre', bigGold, `  var test5 = x => {
  var n = toInt(x);
  Bind.bind1 = []; 
  Bind.bind2 = []; 
  Bind.bind3 = []; 
  
  bind1(n+0)(cubeP)(() => idP(Bind.bind1[0] -
  Bind.bind1[1]))(v=>addP(Bind.bind1[1])(v));

  bind2(n+1)(cubeP)(() => idP(Bind.bind2[0] -
  Bind.bind2[1]))(v=>addP(Bind.bind2[1])(v)); 

  bind3(n+2)(cubeP)(() => idP(Bind.bind3[0] -
  Bind.bind3[1]))(v=>addP(Bind.bind3[1])(v));} `), 
h('span#bind2', ''),
h('a', {props: {href: '#demo2'}}, 'Back to Demonstration 2'),

h('pre',  `function Bind (str) {
  Bind[str] = [];
  return function bindo ( x ) {
    if (x instanceof Promise) x.then(y => {
      Bind[str].push(y);
      diffRender();
      console.log(Bind[str]);
    })
    else {
      Bind[str].push(x)
      diffRender();
    }
    console.log(Bind[str]);
    return function debug8 (func) {
      var p;
      if (func.name === "terminate") return Bind[str];
      if (x instanceof Promise) {
        p = x.then(v => func(v));
      }
      else p = func(x);
      return bindo(p);
    };
  };
};

var bind$ = n => xs.of(n);

function bindDriver () {
  return xs.create({
    start: listener => { bind$ = a => listener.next(a) },
    stop: () => {}
  })
};

var bind1 = Bind("bind1");
var bind2 = Bind("bind2");
var bind3 = Bind("bind3");
var bind4 = Bind("bind4");
var bind5 = Bind("bind5");
var bind6 = Bind("bind6");
var bind7 = Bind("bind7");
var bind8 = Bind("bind8");
var bind9 = Bind("bind9"); ` ),





h('p#pingmaker', ' ' ),

h('a', {props: {href: '#backToDem2'}}, 'Back to Demonstration 2'),
h('br'),
h('br'),
h('p', ' This is the code involved in the pingpong demonstration. PingpongMaker\'s argument creates a namespace. The demonstration features three such namespaces. It verifies that each game proceeds with its own state, oblivious of the states of the other two games in progress. Bind uses its closure to achieve a similar effect. ' ),
h('pre',  `var pingD = a => b => c => h('div', [
  h('pre', a, \` ping        ---> \`), 
  h('pre', b, \`                 <---        pong \`), 
  h('pre',  \`          -- SCORE: ping: \` + c[0]  + \` pong: \` + c[1]  ),
]);

var PingpongMaker = (name) => {
  var a = _A1;
  var b = _A3;
  var c = [0,0];
  var n = 0;
  var bool = true;
  var k = Math.floor(Math.random() * 7)+1;
  return function train () {
    if (c[0] > 10 || c[1] > 10) return;
    var ms = 400;
    console.log('a.style.color, b.style.color, c', a.style.display, b.style.display, c);
    if (a === _A3) {a = _A1; b = _A3}
    else if (a === _A1) {a = _A3; b = _A2};
    if (n <= k) {
      n+=1;
      window[name] = pingD(a)(b)(c);
      diffRender();
    }
    else if (n % 2 === 0) {
      ms = 1200
      n = 0
      c[0]+=1;
      window[name] = pingD(_A1)(_A3)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    else if (n % 2 === 1) {
      ms = 1200;
      n = 0;
      c[1]+=1;
      window[name] = pingD(_A3)(_A2)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    setTimeout( function () {
      train();
    },ms );
  }
}  

PingpongMaker('m67_RESULT')
PingpongMaker('m68_RESULT')
PingpongMaker('m69_RESULT')  `),

h('p#monads', ' m67_RESULT, m68_RESULT, and m69_RESULT are permanent fixtures in the virtual DOM description returned by main()'),

h('a', {props: {href: '#top'}}, 'Back to the top'),
  h('br'),
h('h2', 'The >>= operator'),
h('p', ' The definition of >>= (pronounced "bind") used below is a variation that uses monads. As you see, encapsulating values in monads works smoothly, but adds nothing of value. Useful monads are in the Haskell server on the backend of this web page. Here it is: ' ), 
h('pre', `operator >>= left 11 = (left, right) => {
  return #\`\${right}(\${left}.x)\`;
}; `),
h('span', ' >>= and expressions using >>= are compiled to JavaScript code with help from the ' ), 
h('a', {props: {href: "https://www.sweetjs.org/"}}, 'sweet.js library'),
h('span', '.' ),

h('h3', 'Simple Functions' ),  

h('p', ' The sweet.js code (orange color) below compiles to the golden Javascript code beneith it: '),
h('span', 'sweet.js' ),
h('pre', {style: {color: 'orange' }}, `function Monad2(z) {
  this.x = z;
};

function ret (v) {
  return new Monad2(v);
}

var cube = x => ret(x*x*x);
var add = a => b => ret(a+b);
var square = v => ret(v*v); 

operator >>= left 11 = (left, right) => {
  return #\`\${left}.then(\${v => right(v)})\`;
};  

ret(3) >>= cube >>= add(3) >>= square >>= Math.sqrt ), ` ),

h('span', 'JavaScript' ),
h('pre', {style: {color: "#FFD700", fontSize: "15"}}, `function Monad2(z_146) {
  this.x = z_146;
} 

function ret(v_147) {
  return new Monad2(v_147);
}

var cube_139 = (x_148) => ret(x_148 * x_148 * x_148);
var add_140 = (a_149) => (b_150) => ret(a_149 + b_150);
var square_141 = (v_151) => ret(v_151 * v_151);

Math.sqrt(square_141(add_140(3)(cube_139(ret(3).x).x).x).x);
  // 30  ` ),
h('p', ' Notice how sweet.js changes the names of the functions and variables to prevent name clashes. ' ),

h('h3', 'Functions That Carry State' ),
h('p', ' The following sweet.js code (orange color) compiles to the golden JavaScript code benieth it: ' ),
h('span', 'sweet.js' ),
h('pre', {style: {color: 'orange' }}, `'lang sweet.js';

function Monad2(z) {
  this.x = z;
};

function ret (v) {
  return new Monad2(v);
}

var id = x => ret(x[0], x[1]);
var cube = x => ret([x[0]*x[0]*x[0], x[1].concat(x[0]*x[0]*x[0])]);
var square = x => ret([x[0]*x[0], x[1].concat(x[0]*x[0])]);
var add = a => b => ret([a+b[0], b[1].concat(a+b[0])]);

operator >>= left 11 = (left, right) => {
  return #\`\${right}(\${left}.x)\`;
};

var a = (ret([3, []]) >>= cube >>= add(3) >>= square).x[1].reduce( (a,b) => a+b );

var b = ( ret([0, []]) >>= add(3) >>= cube >>= 
(x => add(x[1][1])([x[1][1],x[1]])) >>=
(x => add(x[0])([-4 * x[1][0], x[1]]))).x[1]

console.log(a);

console.log(b); ` ),

h('span', 'JavaScript' ),
h('pre', `function Monad2(z_10) {
  this.x = z_10;
}
function ret(v_11) {
  return new Monad2(v_11);
}
var id_0 = x_12 => ret(x_12[0], x_12[1]);

var cube_1 = x_13 => ret([x_13[0] * x_13[0] * x_13[0], x_13[1].concat(x_13[0] * x_13[0] * x_13[0])]);

var square_2 = x_14 => ret([x_14[0] * x_14[0], x_14[1].concat(x_14[0] * x_14[0])]);
var add_3 = a_15 => b_16 => ret([a_15 + b_16[0], b_16[1].concat(a_15 + b_16[0])]);
var a_8 = square_2(add_3(3)(cube_1(ret([3, []]).x).x).x).x[1].reduce((a_17, b_18) => a_17 + b_18);

var b_9 = (x_19 => add_3(x_19[0])([-4 * x_19[1][0], x_19[1]]))((x_20 => add_3(x_20[1][1])([x_20[1][1], x_20[1]]))(cube_1(add_3(3)(ret([0, []]).x).x).x).x).x[1];

console.log("a_8);

console.log(b_9);  ` ),
  h('br'),

h('br' ),
      h('p', ' Snabbdom, xstream, and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimention and learning. ' ),
      h('span.italic', ' Instances of Monad and Monad2 aren\'t Category Theory monads. They are inspired by Haskell monads which, in turn, are inspired by Category Theory. The modified subset of the Haskell Programming Language named "Hask" has true Category Theory monads, but the restrictions on Haskell necessay to make Hask a true Category render it nearly useless. ' ), 
h('p', ' Taking inspiration from Category Theory and replicating, to the extent feasable, some of its essential features was the stroke of genius that lifted Haskell into the realm of robust enterprise ready programming languages. Compilers that could infer types and reliably implement fail-safe programs made Haskell the language of choice for several large banks. Now Haskell runs the back ends of a great variety of websites, including websites supporting lots of traffic for major enterprises. The "Functional JavaScript" site that you are on right now has a Cycle.js front end and a Haskell websocket server in the back. It is proving to be very robust, reliable, and easily adaptable to the changing needs of this project. ' ),
      h('a', { props: { href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/", target: "_blank" } }, 'Hask is not a category.'),
          h('span', ' by Andrej Bauer and the ' ),
          h('a', { props: { href: '#discussion' } }, 'Discussion'),
          h('span', ' below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws (see below) helps instill confidence that the monads are robust, versatile, and reliable tools for isolating and chaining sequences of javascript functions. ' ),
          h('p', ' The demonstrations include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history (all group members see your score decrease or increase as you navegate backwards and forwards). Monads are shown performing lengthy mathematical computations asycronously in web workers. Monads encapsulate state. The error checking monad carries occurances of NaN and runtime errors through sequences of computations much like the Haskell Maybe monad. ' ),






  code.monad,


h('span.tao', ' As discussed ' ),
h('a', {props: {href: "#haskell"}}, 'above' ), 
h('span', ', The Haskell Programming Language (which supports this website\'s server) draws inspiration from Category theory, but contains no rigorous category theory objects or morphisms.'),
h('span', ' As discussed ' ),
h('a', {props: {href: "#haskell"}}, 'below' ), 
h('span', ', tHaskell Programming Language, which supports the back end of this website, draws inspiration from Category theory, but that is as far as it goes. '),

h('h3', 'More Random Snippits' ),
h('p', '  Libraries and language modifications that impose constraints such as immutability, universal purity of functions, and strict typing can be useful, but this project takes a different approach. The JavaScript used herein is plain, unadorned, unrestricted Ecamascript 2018. ' ),
h('p', ' Objects are cloned so past states remain accessible but they are mutated inside of functions for efficiency and to keep the stack from overflowing. Functions ordinarily don\'t interact with the environments outside of their scopes but methods might cause side effects in the objects that contain them. "Functional programming" in this project is about using all that the language offers to create functions that streamline applications and make them readable, maintainable, and robust. Just be sure to cause side effects, alter the contents of specific addresses in memory, and define global variables with the utmost restraint and care.' ),






  h('button#fredButton', fredButton ),
h('a', {props: {href: '#top'}}, 'Back to the top'),
  h('br'),
  h('input#change', diffRend ),
  h('div#changeDisplay', [diffRend] ),
  h('button#diffRender', 'diffRender()' ),
  h('br'),
  h('br'),
  h('br')
        ])
      ]) 
    })
  }
}

diffRender = () => document.getElementById('diffRender').click();
sources.DOM = makeDOMDriver('#main-container');
sources.WS = websocketsDriver;
sources.GD = gridDriver;

Cycle.run(main, sources);



