  import {h, p, span, h1, h2, h3, pre, br, div, label, input, hr, makeDOMDriver} from '@cycle/dom';
  import Cycle from '@cycle/xstream-run';
  // import {makeHTTPDriver} from '@cycle/http';
  import code from "./code";
  import { run } from './cycle-run.js';


console.log('socket', socket);

// socket = new WebSocket(hws://localhost:3055h);
// socket = new WebSocket("ws://localhost:3055");
socket = new WebSocket("ws://204.48.16.214:3055");
// socket = new WebSocket(hws://142.93.205.167:3055h);
// socket = new WebSocket(hws://schalk.net:3055h);
// socket = new WebSocket(hws://schalk.site:3055h);
// socket = new WebSocket(hws://localhost:3055h);
//  ws = new WebSocket(hws://echo.websocket.orgh);

function bNode (arr) {
  var x = styl(arr.length);
  var node = h('div#bNode', [
    h('button#0.num', { style: { display: x[0] }}, ' ' + arr[0] + ' '),
    h('button#1.num', { style: { display: x[1] }}, ' ' + arr[1] + ' '),
    h('button#2.num', { style: { display: x[2] }}, ' ' + arr[2] + ' '),
    h('button#3.num', { style: { display: x[3] }}, ' ' + arr[3] + ' ')
  ]);
  return node;
}

MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice(),
  playerName = pMname.x,
  playerGroup = pMgroup.x
]) {
  pMscore.ret(score);
  pMgoals.ret(goals);
  pMgroup.ret(playerGroup);
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display, playerName, playerGroup])
  this.s = newState;
  buttonNode = bNode(display);
  return window['gameMonad'] = new MonadState('gameMonad', newState);
}

function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);ar
  if (result === 18 || result === 20) {
    score(result);
  }
  else {
    var a = gameMonad.fetch4().slice();
    a.push(result);
    gameMonad.run([,,0,[],a,,]);
  }
};

function process (a) { //Assembles the HTML for display.
  var arr = a;
  commentMonad.html = [];
  var n = -1;
  arr.map(a => { 
    var x = a.split(h<o>h);
    if (x.length != 2) x = ['malfunction', '8888']
    x[1] = x[1].replace(/<<>>/g, ',');
    var show = showFunc(x[0], pMname.x);
    n+=1;
    commentMonad.html.push(h('div#'+n, [
      h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, h,h)),
      h('br'),
      h('textarea#commit', {props: {cols: 55, rows: 2},
         style: {display: show }}, x[1]),
      h('button#deleteB', {props: {innerHTML: 'delete'}, style: {display: show, fontSize:14}}),
      h('br' ),
      h('span', '***************************************************************')
    ]))
  })
}

function pfactors (primes, n) {
  var ar = [];
  while (n != 1) {
    primes.map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  }
  return ar;
}

MonadState3.prototype.init = function (str) { // All comments delivered on load.
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != hh));
  result444 = process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split("<@>").filter(v => (v != hh));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split("<@>").filter(v => (v != hh));
  console.log('this.s[1]',this.s[1]);  
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  console.log(this.s[1]);
  this.s[1] = this.s[1].filter(v => v!== '');
  console.log(this.s[1]);
  this.s[1].splice(num,1);
  console.log(this.s[1]);
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  this.s[0] = this.s[1].join("<@>");
  process(this.s[1]);
};

MonadState3.prototype.init = function (str) { // All comments delivered on load.
  this.s[0] = str;
  this.s[1] = this.s[0].split("<@>");
  this.s[1] = this.s[1].filter(v => (v != hh));
  result444 = process(this.s[1]);
}

MonadState3.prototype.append = function (str) {
  this.s[0] = this.s[0] + str;
  this.s[1] = this.s[0].split("<@>").filter(v => (v != hh));
  process(this.s[1]);
}

MonadState3.prototype.edit = function (num,txt) {
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  this.s[1].splice(num,1,txt);
  this.s[0] = this.s[1].join("<@>");
  this.s[1] = this.s[0].split("<@>").filter(v => (v != hh));
  console.log('this.s[1]',this.s[1]);  
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
  process(this.s[1]);
};

MonadState3.prototype.remove = function (num) {
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  console.log(this.s[1]);
  this.s[1] = this.s[1].filter(v => v!== '');
  console.log(this.s[1]);
  this.s[1].splice(num,1);
  console.log(this.s[1]);
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
  this.s[0] = this.s[1].join("<@>");
  process(this.s[1]);
};

var it7 = () => mMZ52.bnd(string => {
  callOrder = callOrder > 24 ? 1 : callOrder + 1;
  if (callOrder === 1) start77 = Date.now(); 
  m42_.push(callOrder);
  m42_.push(string)
  m42_.push(h('br'));
  if (callOrder === 25) m42_.push('Elapsed time: ' + (Date.now() - start77));
});

var funcP = () => {
  var fred = [];
  bind(1)(addP(2))(cubeC)(addC(3))(multP(2))(multC(3))
  (addC(30))(multP(1/5))(it4)(it6)(it7)(terminate).slice(1,9)
  .map(v => v.then(q => {
    fred.push(q.x);
    freday = fred.join(' ')
    diffRender()
  }))
}

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
        var v2 = hpasswordh
        playerName = v;
        playerGroup = hsoloh;
        pMname.ret(v);
        pMoldName.ret(v);
        pMgroup.ret('solo');
        gameMonad.run([0,0,0,[],[7,7,7,7],v,hsoloh]);
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
       console.log("sender is ", sender);
       console.log("extra is", extra);
       console.log("The full message s", e);
       console.log("v is", v);
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
       var ar = e.data.split(h<$>h)[1];
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
       if (extra2 === hcode1h) {
         mMregister.ret('The registered name ' + extra + ' and the associated password were recognized. ' );
         socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',"<@>"' + str);
       }
       if (extra2 === hcode2h) {
         mMregister.ret('The new name ' + extra + ' was registered.' );
         socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',"<@>"' + str);
       }
       if (extra2 === hcode3h) {
         pMname.ret(sender);
         mMregister.ret('The password you entered is not the password that is registered for ' + tempName + '.' );
         mMshowRegister.ret('inline');
       }
     });

     mMZ17.bnd( () => {                          // Prefix GZ#$42
       var newStr = extra.substring(0, extra.length-3);
       newStr = newStr.replace(/"<@>""<@>"/g, "<@>");
       newStr = newStr.replace(/↵/g, '');
       if (newStr === hh) return;
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
       console.log('In mMZ23 -- v[3] is', v[3]);
       taskMonad.toggle(v[3]);
     });

     mMZ24.bnd( () => {        //Delete a task
       taskMonad.delete(v[3]);
     });

     mMZ25.bnd( () => {        // Receive tasks when group changes
       console.log('QQQQQQ  Bingo! extra is QQQQQQQWWWWWWWWWWQQQQQQQQ in mMZ25.bnd. ',extra);
       taskMonad.html = taskMonad.init(extra);
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

var itterResult = h('div', 'ready' );
var doubleResult = h('div', 'ready' );

var comment$ = sources.DOM.select('#comment').events('keydown');

var commentAction$ = comment$.map(e => {
  if (e.keyCode == 13) {
    e.preventDefault();
    var comment = e.target.value.replace(/,/g, "<<>>");
    comment = pMname.x + h<o>h + comment
    socket.send(`GN#$42,${pMgroup.x},${pMname.x},"<@>"${comment}"<@>"`);
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
    var w = e.target.value.split(h,h);
    var nu = pMname.x + h<o>h + w.join('<<>>');
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
      pMname.ret(art[0]);
      tempName = name;
      var x = art.join('<o>');
      mMshowRegister.ret('none');
      playerName = name;
      console.log('pMname.x is', pMname.x );
      console.log(pMname.x === playerName);
      socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`); }
      setTimeout(function () {
        socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
      },700);
  }
});

    var groupPress$ = sources.DOM
        .select('input#group').events('keypress');

    var groupPressAction$ = groupPress$.map(e => {
      if (e.keyCode === 13 && e.target.value ) {
        var g = e.target.value.replace(/,/g, '');
        send("CO#$42", g);
        gameMonad.run([0,0,0,[],[0,0,0,0],,g]);
        socket.send(`TI#$42,${g},${pMname.x}`);
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
  var namesL = data.split(h<br>h);
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


//****************************************************************** START MATRIX
var indexDS = 0;

function rMatrixF (a) {
  var cw1 = Math.sqrt(a[0]*a[5] + a[1]*a[4]);
  var cw2 = Math.sqrt(a[2]*a[7] + a[3]*a[6]);
  var cw3 = Math.sqrt(a[8]*a[13] + a[9]*a[12]);
  var cw4 = Math.sqrt(a[10]*a[15] + a[14]*a[11]);
  var cw = Math.sqrt(cw1*cw4 + cw2*cw3);
  return cw
}



var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var ArrDS = [ [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ];

function makeRDS (arr) {
  var r = arr;
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
};

var rDataDS = [
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
  h('button#mR15.mR', 15 )
];

function rExchange (j, k, rN=rNumsDS, AR=ArrDS, rD = rDataDS, i = mMindexDS) {
  console.log("In Exchange --  i is", i);
  var r = rN;
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  console.log(r);
  var g = r.slice();
  AR.splice(i.x, 0, g);
  console.log(AR)
  rD = makeRDS(r); 
  return rD;
} 

var horseDS = rDataDS;
//****************************************************************** END MATRIX

var rNuS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var rGrid$ = rNuS => xs.of(rNuS);

function gridDriver () {
  return xs.create({
    start: listener => { rGrid$ = ar => listener.next(ar)},
    stop: () => {}
  })
};

/*  Highest possible number: 17.3
 *  rNumsDS: 6, 9, 4, 11, 8, 7, 10, 5, 2, 13, 0, 15, 12, 3, 14, 1
    rMatrixF(rNumsDS: 17.3160677686392   */

function rExDS ([, rN=rNumsDS, AR=ArrDS, rD = rDataDS, i = mMindexDS]) {
  console.log("In Exchange --  i is", i);
  var j = ar[0];
  var k = ar[1];
  var r = rN;
  var a = r[j];
  r[j] = r[k];
  r[k] = a;
  console.log(r);
  var g = r.slice();
  AR.splice(i.x, 0, g);
  console.log(AR)
  rD = makeRDS(r); 
  return rD;
} 


function rClick () {document.getElementById('rNums').click()};

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
      var dRes = hh;
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
  if (m.data) {console.log('GOOD m.data')} else { return hcowh }
    if (m.target) {console.log('GOOD m.target')} else { return hshith }
      if (m.data[1]) {console.log('GOOD m.data[1]')} else { return 'donkey'}
        if (m.target.ar2) {console.log('GOOD m.data.ar2')} else { return 'dung'}

});

function bind (x, ar=[]) {
  var ar = ar;
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === hterminateh) return ar;
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
          z = hThe prime factors of h + x + h are h + sortFactors(factors).join(', ')
        }
        else z = x + h is a prime numberh
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

       if (m.data) {console.log('GOOD m.data')} else { return hcowh }
       if (m.target) {console.log('GOOD m.target')} else { return hshith }
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
          diffRender();
        }
        else if (n % 2 === 0) {
          ar[0]+=1;
          m67_RESULT = h('pre', ppYR, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  ` )
          ping(0)(ar);
          diffRender();
        }
        else {
          ar[1]+=1
          m67_RESULT = h('pre', ppY, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  ` );
          ping(0)(ar);
          diffRender();
        }
      },500);
    }  

var pingD = a => b => c => h('div', [
  h('pre', a, ` ping        ---> `), 
  h('pre', b, `                 <---        pong `), 
  h('pre',  `          -- SCORE: ping: ` + c[0]  + ` pong: ` + c[1]  ),
]);

m67_RESULT = pingD(_A1)(_A3)([3,2]); 

PingpongMaker = (name) => {
  var a = _A1;
  var b = _A3;
  var c = [0,0];
  var n = 0;
  var bool = true;
  var k = Math.floor(Math.random() * 7)+1;
  return function train () {
    if (c[0] > 10 || c[1] > 10) return;
    var ms = 400;
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

var makeDisplay = a => b => c => h('div', [
  h('pre', a, ` ping        ---> `), 
  h('pre', b, `                 <---        pong `), 
  h('pre',  `          -- SCORE: ping: ` + c[0]  + ` pong: ` + c[1]  ),
]),

pingCompute = bool => aa => bb => cc =>
  dd => {
  var a;
  var b;
  if (a === hserveh) {
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
    if (random === 0) random = Math.floor(Math.random() * 11)+1;  // New serve flag hrandom === 0h detected.
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

        var fredButton = h('button#fredButton', hfredButtonh);
        var diffR = h('button#diffRender', hdiffRenderh);

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
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('In boxAction$ -- e is', e );
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    var index = parseInt(e.target.parentElement.id, 10);
    var task = taskMonad.s[1].slice(index,index+1)[0];
    var old = task;
    var ar = task.split(h<$>h);
    ar = ar.filter(v => v !== hh);
    ar[1] = ar[1] === hfalseh ? htrueh : hfalseh
    var newTask = ar.join(h<$>h);
    socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
  });

  var cbx2$ = sources.DOM.select('.cbx2').events('click');

  var cbx2Action$ = cbx2$.map(e => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('In cbxAction$ -- e is', e );
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    var index = parseInt(e.target.parentNode.id, 10);
    var task = taskMonad.s[1].slice(index,index+1)[0];
    var old = task;
    var ar = task.split(h<$>h);
    ar = ar.filter(v => v !== hh);
    ar[1] = ar[1] === hfalseh ? htrueh : hfalseh
    var newTask = ar.join(h<$>h);
    socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
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
      var old = taskMonad.s[1][index];
      var ar = old.split(h<$>h);
      var newAr = e.target.value.split(',');
      var newString = newAr.join("<<>>");
      ar.shift();
      ar.unshift(newString);
      var newTask = ar.join(h<$>h);
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
        socket.send(`TA#$42,${pMgroup.x},${pMname.x},${result}"<@>"`)
      }
    }
  });

  console.log('Getting close to calcStream@');

  var chatClick$ = sources.DOM
      .select('#chat2').events('click')
      .map(() => showChatDiv = showChatDiv === hnoneh ? hblockh : hnoneh)

   var todoClick$ = sources.DOM
      .select('#todoButton').events('click')
      .map(() => showTodoDiv = showTodoDiv === hnoneh ? hblockh : hnoneh)

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
h('img.image_2', {props: {src: hlogo.svgh }}  ),
h('span', ' ' ),
h('a', { props: { href: "https://cycle.js.org/h, target: h_blank" } }, 'A Cycle.js application')    ]),


 h('div', {style: {textAlign:"center", fontWeight: "bold"}}, [
   h('br'),  
   h('div', {style: {fontSize: h25pxh, color: "#FFD700",textAlign: "center"}}, 'Composing Functions In JavaScript'),
   h('br')
]),
 h('div.content', [

 h('span.tao', ' Let "O" be an object containing methods "f1" and "f2" such that f1    
   
   Functions inside of objects (where they are called hmethodsh of the containing object) are routinely composed by by having them return objects containing methods. Primative value strings can invoke the methods of the String object. Similarly, number primitives can invoke Number\'s methods. For example, '),
 h('pre#disc', `  
  "car".replace("c","f").concat(" away")  // "far away"

  ((2 + 2).toString() + 1) * 1 + 1  // 42  `),
 h('span.tao', ' jQuerry and Lodash are examples of libraries that use objects whose methods return similar objects with altered values. Later, I will demonstrate objects that that I call hmonadsh. The simplest ones inherits from '),


 h('a', {props: {href: "#mon"}}, "Monad2" ),
 h('span#smile', ', hold single values. and have only two methods. It\'s power stems from from the method "bnd" which operates on functions that operate on the calling monad\'s value. If the results are encapsulated in monads,"m.bnd(f1).bnd(f2).bnd ... fn" compose '),    
 h('br'),
 h('br'),
 h('span.tao', ' Before delving into monads, let\'s see how easy it is to compose functions without craming them into objects. Let bind() be a function that inherits from '),
 h('a', {props: {href: h#Bind3h}}, hBindh ),
 h('span', '. Syntax consists of calling hbind(x)h for some value hxh and then naming or defining the functions to be composed on hxh. A \h(terminate)\h flag at the end causes an array of return values (or resolution values of Promises) to be returned. Consider:' ), 
 h('br'),
 h('br'),
 h('div', styleFunc([h#FFD700h,h3%h,h21pxh,,,]), 'bind(x)(functiona1)(function2) ... (functionN)'),
         h('br'),

         h('span', styleFunc([h#d3ead5h,,h18pxh,,,]), 'where '),
         h('pre', styleFunc([h#FFD700h,,h18pxh,,,]), `  x can be any value,

  there are no restrictions on the functions\' argument types, 

  there are no restrictions on the functions\' return value types,

  functions can even return promises,

  functions have built-in access to all prior functions\' return values,

  functions have built-in access to all prior promises\' resolution values. `),
         h('span#lion', '' ),





ES6 compose:

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
  );

var example = compose(
val => { console.log(1); return `1<${val}>`; },
val => { console.log(2); return `2<${val}>`; },
val => { console.log(3); return `3<${val}>`; }
);


console.log(example('hello'),
example('hellooo'), example('truck'), example('woman'))
