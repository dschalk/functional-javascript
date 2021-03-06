
    // onChange = require('on-change');
    // import ws from 'ws';
    import {EventEmitter} from 'events';
    import {h,p,span,h1,h2,h3,pre,a,br,div,label,input,hr,makeDOMDriver} from '@cycle/dom';
    import {clone} from 'ramda';
    import {run} from '@cycle/xstream-run';
    import code from '../code.js';
    // import { Sum, Product, Max, Min, Any, All, Pair, Fn } from "../monoid";
          diffRender = () => document.getElementById('diffRender').click();


    // import ASQ from 'asynquence';
    // import {makeHTTPDriver} from '@cycle/http';
    // import {require} from "requirejs";
    // compose = require('folktale/core/lambda/compose');

    // socket = new WebSocket("ws://localhost:3055");
    // socket = new WebSocket("ws://68.38.136.86:3055?");
    // socket = new WebSocket("ws://142.93.205.167:3055");
    socket = new WebSocket("ws://schalk.net:3055");
    // socket = new WebSocket("ws://schalk.site:3055");
    // ws = new WebSocket("ws://echo.websocket.org");

EventEmitter = EventEmitter;
// ?ASQ = ASQ;
console.log("************************** h and clone *****************"),
    h = h;   // For use in monad.js

    clone = clone;
    console.log(clone);
console.log(" END ************************** h and clone ***************** EBD"),

  bNode = function bNode(arr) {
      var x = styl(arr.length);
      var node = h('div#bNode', [
        h('button#0.num', {
          style: {
            display: x[0]
          }
        }, ' ' + arr[0] + ' '),
        h('button#1.num', {
          style: {
            display: x[1]
          }
        }, ' ' + arr[1] + ' '),
        h('button#2.num', {
          style: {
            display: x[2]
          }
        }, ' ' + arr[2] + ' '),
        h('button#3.num', {
          style: {
            display: x[3]
          }
        }, ' ' + arr[3] + ' ')
      ]);
      return node;
    };

    MonadState.prototype.dec = function () {
      this.s[1] -= 1;
      buttonNode = bNode(this.s[0][this.s[1]][4]);
      socket.send(`CG#$42,${pMgroup.x},${pMname.x},${
      this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
      window[this.id] = this;
      return this;
    };

    MonadState.prototype.inc = function () {
      this.s[1] += 1
      buttonNode = bNode(this.s[0][this.s[1]][4]);
      socket.send(`CG#$42,${pMgroup.x},${pMname.x},${this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
      window[this.id] = this;
      return this;
    };

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
      var result = calc(ar[0], op, ar[1]);
      ar
      if (result === 18 || result === 20) {
        score(result);
      } else {
        var a = gameMonad.fetch4().slice();
        a.push(result);
        gameMonad.run([, , 0, [], a, , ]);
      }
    };

    function process(a) { //Assembles the HTML for display.
      var arr = a;
      commentMonad.html = [];
      var n = -1;
      arr.map(a => {
        var x = a.split("<o>");
        if (x.length != 2) x = ['malfunction', '8888']
        x[1] = x[1].replace(/<<>>/g, ',');
        var show = showFunc(x[0], pMname.x);
        n += 1;
        commentMonad.html.push(h('div#' + n, [
          h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
          h('br'),
          h('textarea#commit', {
            props: {
              cols: 55,
              rows: 2
            },
            style: {
              display: show
            }
          }, x[1]),
          h('button#deleteB', {
            props: {
              innerHTML: 'delete'
            },
            style: {
              display: show,
              fontSize: 14
            }
          }),
          h('br'),
          h('span', '***************************************************************')
        ]))
      })
    }

    function pfactors(primes, n) {
      var ar = [];
      while (n != 1) {
        primes.map(p => {
          if (n / p === Math.floor(n / p)) {
            ar.push(p);
            n = n / p;
          };
        })
      }
      return ar;
    }

    MonadState3.prototype.init = function (str) { // All comments delivered on load.
      this.s[0] = str;
      this.s[1] = this.s[0].split("<@>");
      this.s[1] = this.s[1].filter(v => (v != ""));
      result444 = process(this.s[1]);
    }

    MonadState3.prototype.append = function (str) {
      this.s[0] = this.s[0] + str;
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      process(this.s[1]);
    }

    MonadState3.prototype.edit = function (num, txt) {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      this.s[1].splice(num, 1, txt);
      this.s[0] = this.s[1].join("<@>");
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      console.log('this.s[1]', this.s[1]);
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      process(this.s[1]);
    };

    MonadState3.prototype.remove = function (num) {
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      console.log(this.s[1]);
      this.s[1] = this.s[1].filter(v => v !== '');
      console.log(this.s[1]);
      this.s[1].splice(num, 1);
      console.log(this.s[1]);
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      this.s[0] = this.s[1].join("<@>");
      process(this.s[1]);
    };

    MonadState3.prototype.init = function (str) { // All comments delivered on load.
      this.s[0] = str;
      this.s[1] = this.s[0].split("<@>");
      this.s[1] = this.s[1].filter(v => (v != ""));
      result444 = process(this.s[1]);
    }

    MonadState3.prototype.append = function (str) {
      this.s[0] = this.s[0] + str;
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      process(this.s[1]);
    }

    MonadState3.prototype.edit = function (num, txt) {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      this.s[1].splice(num, 1, txt);
      this.s[0] = this.s[1].join("<@>");
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      console.log('this.s[1]', this.s[1]);
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      process(this.s[1]);
    };

    MonadState3.prototype.remove = function (num) {
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      console.log(this.s[1]);
      this.s[1] = this.s[1].filter(v => v !== '');
      console.log(this.s[1]);
      this.s[1].splice(num, 1);
      console.log(this.s[1]);
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      this.s[0] = this.s[1].join("<@>");
      process(this.s[1]);
    };

    it7 = string => {
      callOrder = callOrder > 14 ? 1 : callOrder + 1;
      if (callOrder === 1) start77 = Date.now();

      factorsRes.push(callOrder + "  ");
      window["E" + callOrder] = string;
      if (callOrder === 15) {
        m43_ = 'Elapsed time: ' + (`${Date.now()}` - start77) + " ms";
      }
    };

  it7_b = () => mMZ53.bnd(string => {
      m43_.push(string);
      m43_.push(h('br'));
  });

  function z60 (ar,string) {
      m43_.push(string);
      m43_.push(h('div', ));
      diffRender();
  };

f23 = () => {
    var bind = Comp().run;
    m44_ = m45_ = time = '';
    for (let n = 1; n < 16; n += 1) {
        start78 = Date.now();
        bind(145)(x => x**3)(it4_b)(it6_b);
        mMZ53.bnd(string => {
            m43_.push(string);
            m43_.push(h('br'));
            if (n == 15) {
                time = Date.now() - start78;;
                m44_ = 'Elapsed time: ' + car + ' ms';
                m45_ = `The largest cached prime number is ${primeState.slice(-1)}`;
            }
        })
    }
}

 f27 = () => {
    [...Array(15)].map(() => {
        Comp([100])(it4_c)(it6_d)(it7_b)(it7)
    })
}

    function websocketsDriver() {
      return xs.create({
        start: listener => {
          socket.onmessage = msg => listener.next(msg)
        },
        stop: () => {
          socket.close()
        }
      });
    }

    socket.onclose = function (event) {
      console.log('<><><> ALERT - socket is closing. <><><> ', event);
    };

    login();

    function login() {
      console.log('00000000000000000000000000000000 Entering login', socket.readyState);
      setTimeout(function () {
        if (socket.readyState === 1) {
          console.log('readyState is', socket.readyState);
          var v = Math.random().toString().substring(5);
          var v2 = v.toString().substring(2);
          var v2 = "password"
          playerName = v;
          playerGroup = "solo";
          pMname.ret(v);
          pMoldName.ret(v);
          pMgroup.ret('solo');
          gameMonad.run([0, 0, 0, [],
            [7, 7, 7, 7], v, "solo"
          ]);
          var combo = v + '<o>' + v2;
          socket.send('CC#$42' + combo);
          pMcombo.ret(combo);
          pMclicked.ret([]);
          socket.send(`GZ#$42,solo,${v}`);
        } else {
          login();
        }
      }, 1000)
    }

    function main(sources) {
      console.log('0^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got to main()');

      const messages$ = sources.WS.map(e => {
        var v = e.data.split(',');
        var group = v[1]
        var sender = v[2];
        var extra = v[3];
        var extra2 = v[4];

        mMZ9.bnd(() => {
          console.log("sender is", sender);
          console.log("extra is", extra);
          console.log("The full message is", e);
          console.log("v is", v);
        });

        mMZ10.bnd(() => {
          if (sender === pMname.x) {
            gameMonad.run([v[7], v[8], 0, [],
              [v[3], v[4], v[5], v[6]]
            ]);
          } else gameMonad.run([, , , [],
            [v[3], v[4], v[5], v[6]]
          ]);
        });

        mMZ11.bnd(() => {
          console.log('The message arrived', messages$);
          var message = v.slice(3, v.length).join(', ');
          var str = v[2] + ': ' + message;
          messages.unshift(h('span', str), h('br'));
          console.log('The message was typeof ar', typeof str);
        });

        mMZ12.bnd(() => {
          mMgoals2.ret('The winner is ' + v[2]);
          setTimeout(function () {
            mMgoals2.ret('')
          }, 700);
        });

        mMZ13.bnd(() => {
          mMgoals2.ret('A player named ' + v[2] +
            ' is currently logged in. Page will refresh in 4 seconds.')
          refresh()
        });

        mMZ14.bnd(() => {
          var ar = e.data.split("<$>")[1];
          console.log("In mZ14.bnd - - ar is", ar);
          console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzztaskMonad', taskMonad);
          return taskMonad.init(ar);
        });

        mMZ15.bnd(() => {
          var ar = [];
          var arr = v[3].slice();
          var arr2 = arr.split("<$!$>");
          var arr3 = arr2.map(v => {
            console.log('In mMZ15.bnd ar, arr, arr2, and arr3 are', ar, arr, arr2, arr3),
              ar.push(v);
            ar.push(h('br'));
          });
          gameData = ar;
        });

        mMZ16.bnd(() => { // Prefix RR#$42
          var str = mMcommentStr.x;
          if (extra2 === "code1") {
            mMregister.ret('The registered name ' + extra + ' and the associated password were recognized. ');
            socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
          }
          if (extra2 === "code2") {
            mMregister.ret('The new name ' + extra + ' was registered.');
            socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
          }
          if (extra2 === "code3") {
            pMname.ret(sender);
            mMregister.ret('The password you entered is not the password that is registered for ' + tempName + '.');
            mMshowRegister.ret('inline');
          }
        });

        mMZ17.bnd(() => { // Prefix GZ#$42
          var newStr = extra.substring(0, extra.length - 3);
          newStr = newStr.replace(/<@><@>/g, "<@>");
          newStr = newStr.replace(/↵/g, '');
          if (newStr === "") return;
          commentMonad.init(newStr);
        });

        mMZ18.bnd(() => { // Prefix GN#$42  NEW COMMENT
          commentMonad.append(extra);
        });

        mMZ19.bnd(() => { // Prefix GE#$42  EDIT A COMMENT
          commentMonad.edit(extra, extra2);
          console.log('In mMZ19 to edit a comment. <><><><><><><> extra, extra2:', extra, extra2);
        });

        mMZ20.bnd(() => { // Prefix GD#$42  DELETE A COMMENT
          commentMonad.remove(parseInt(extra, 10));
        });
        // ******************************************************* TASKS
        mMZ21.bnd(() => { // add a new a task
          console.log('ooooooooooooooooooo New task from the server', extra);
          taskMonad.append(extra);
        });

        mMZ22.bnd(() => { // edit a task
          taskMonad.edit(v[3], v[4]);
        });

        mMZ23.bnd(() => {
          console.log('In mMZ23 -- v[3] is', v[3]);
          taskMonad.toggle(v[3]);
        });

        mMZ24.bnd(() => { //Delete a task
          taskMonad.delete(v[3]);
        });

        mMZ25.bnd(() => { // Receive tasks when group changes
          console.log('QQQQQQ  Bingo! extra is QQQQQQQWWWWWWWWWWQQQQQQQQ in mMZ25.bnd. ', extra);
          taskMonad.html = taskMonad.init(extra);
        });

        mMZ27.bnd(() => {
          mMZ38.release(v[3]);
        });

        mMZ28.bnd(() => {
          console.log("Message from the server to mMZ28.bnd-- v[3] is", v[3]);
          if (playerName === sender) {mMZ40.release(v[3]); mMZ57.release(v[3]);}
          else console.log('message from sender to BC#$42')
        });

        mMZ29.bnd(() => {
          console.log("Message from the server to mMZ29.bnd-- v[3] is", v[3]);
          if (playerName === sender) {mMZ41.release(v[3]); mMZ58.release(v[3]) }
        });

        mMZ30.bnd(() => {
          if (playerName === v[2]) {
                mMZ42.release(v[3]);
            }
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
            .bnd(next, 'TA#$42', mMZ21) // Automatic task list load on group change
            .bnd(next, 'TE#$42', mMZ22) // edit a task
            .bnd(next, 'TT#$42', mMZ23) // chechbox
            .bnd(next, 'TX#$42', mMZ24) // delete button
            .bnd(next, 'TI#$42', mMZ25) // group change
            .bnd(next, 'BB#$42', mMZ27) // works in conjunction with it4
            .bnd(next, 'BC#$42', mMZ28) // works in conjunction with it4
            .bnd(next, 'BD#$42', mMZ29) // works in conjunction with it4_b
            .bnd(next, 'BE#$42', mMZ30) // works in conjunction with it4_c
        });

        function next(x, y, instance) {
          if (x == y) {
            instance.release();
          }
          return ret(x);
        };

        var mBind$ = sources.DOM.select("#makeBind").events("click");

        var mBindAction$ = mBind$.map(() => bindTest());

        var itterResult = h('div', 'ready');
        var doubleResult = h('div', 'ready');

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
          var old = commentMonad.s[1].slice(index, index + 1)[0];
          socket.send(`GD#$42,${pMgroup.x},${pMname.x},${index},${old}`);
        });

        var editB$ = sources.DOM
          .select('textarea#commit').events('keydown');

        var editBAction$ = editB$.map(function (e) {
          if (e.keyCode == 13) {
            var index = parseInt(e.target.parentElement.id, 10);
            var w = e.target.value.split(",");
            var nu = pMname.x + "<o>" + w.join('<<>>');
            var old = commentMonad.s[1].slice(index, index + 1)[0];
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
              mMerror.ret(' There should be one and only one comma');
              return;
            } else {
              var name = art[0];
              pMname.ret(art[0]);
              tempName = name;
              var x = art.join('<o>');
              mMshowRegister.ret('none');
              playerName = name;
              console.log('pMname.x is', pMname.x);
              console.log(pMname.x === playerName);
              socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`);
            }
            setTimeout(function () {
              socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
            }, 700);
          }
        });

        var groupPress$ = sources.DOM
          .select('input#group').events('keypress');

        var groupPressAction$ = groupPress$.map(e => {
          if (e.keyCode === 13 && e.target.value) {
            var g = e.target.value.replace(/,/g, '');
            pMgroup.ret(g);
            send("CO#$42", g);
            gameMonad.run([0, 0, 0, [],
              [0, 0, 0, 0], , g
            ]);
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

        var updatePlayers = function updatePlayers(data) {
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

        var m80Action$ = m80Change$.map(() => {});

        //****************************************************************** START MATRIX
        var indexDS = 0;

        function rMatrixF(a) {
          var cw1 = Math.sqrt(a[0] * a[5] + a[1] * a[4]);
          var cw2 = Math.sqrt(a[2] * a[7] + a[3] * a[6]);
          var cw3 = Math.sqrt(a[8] * a[13] + a[9] * a[12]);
          var cw4 = Math.sqrt(a[10] * a[15] + a[14] * a[11]);
          var cw = Math.sqrt(cw1 * cw4 + cw2 * cw3);
          return cw
        }



        var rNumsDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

        var ArrDS = [
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        ];

        function makeRDS(arr) {
          var r = arr;
          return [
            h('button#mR0.mR', r[0]),
            h('button#mR1.mR', r[1]),
            h('button#mR2.mR', r[2]),
            h('button#mR3.mR', r[3]),
            h('button#mR4.mR', r[4]),
            h('button#mR5.mR', r[5]),
            h('button#mR6.mR', r[6]),
            h('button#mR7.mR', r[7]),
            h('button#mR8.mR', r[8]),
            h('button#mR9.mR', r[9]),
            h('button#mR10.mR', r[10]),
            h('button#mR11.mR', r[11]),
            h('button#mR12.mR', r[12]),
            h('button#mR13.mR', r[13]),
            h('button#mR14.mR', r[14]),
            h('button#mR15.mR', r[15])
          ];
        };

        var rDataDS = [
          h('button#mR0.mR', 0),
          h('button#mR1.mR', 1),
          h('button#mR2.mR', 2),
          h('button#mR3.mR', 3),
          h('button#mR4.mR', 4),
          h('button#mR5.mR', 5),
          h('button#mR6.mR', 6),
          h('button#mR7.mR', 7),
          h('button#mR8.mR', 8),
          h('button#mR9.mR', 9),
          h('button#mR10.mR', 10),
          h('button#mR11.mR', 11),
          h('button#mR12.mR', 12),
          h('button#mR13.mR', 13),
          h('button#mR14.mR', 14),
          h('button#mR15.mR', 15)
        ];

        function rExchange(j, k, rN = rNumsDS, AR = ArrDS, rD = rDataDS, i = mMindexDS) {
          console.log("In rExchange i is", i);
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

        var rNuS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var rGrid$ = rNuS => xs.of(rNuS);

        function gridDriver() {
          return xs.create({
            start: listener => {
              rGrid$ = ar => listener.next(ar)
            },
            stop: () => {}
          })
        };

        function rExDS([, rN = rNumsDS, AR = ArrDS, rD = rDataDS, i = mMindexDS]) {
          console.log("In rExchange i is", i);
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


        function rClick() {
          document.getElementById('rNums').click()
        };

        var indexDS = 0;

        var m80$ = sources.DOM
          .select('#mR0').events('click')
          .map(e => {
            console.log("e is", e);
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m81$ = sources.DOM
          .select('button#mR1.mR').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m82$ = sources.DOM
          .select('#mR2.mR').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m83$ = sources.DOM
          .select('button#mR3').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m84$ = sources.DOM
          .select('button#mR4').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m85$ = sources.DOM
          .select('button#mR5').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m86$ = sources.DOM
          .select('button#mR6').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m87$ = sources.DOM
          .select('button#mR7').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m88$ = sources.DOM
          .select('button#mR8').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m89$ = sources.DOM
          .select('button#mR9').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m810$ = sources.DOM
          .select('button#mR10').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m811$ = sources.DOM
          .select('button#mR11').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m812$ = sources.DOM
          .select('button#mR12').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m813$ = sources.DOM
          .select('button#mR13').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m814$ = sources.DOM
          .select('button#mR14').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        var m815$ = sources.DOM
          .select('button#mR15').events('click')
          .map(e => {
            rADS.push(toInt(e.target.id.slice(2, 4)));
            if (rADS.length === 2) {
              mMindexDS.ret(mMindexDS.x + 1);
              rExchange(rADS[0], rADS[1]);
              rADS = [];
            }
          });

        function rGridFunc(a = rADS, i = mMindexDS) {
          i.ret(i.x + 1);
          rExchange(a[0], a[1]);
          a = [];
        };

        var gridCh$ = sources.DOM
          .select('#gridInput').events('change');

        var backCl$ = sources.DOM
          .select('#gridBack').events('click')

        var bAction$ = backCl$.map(() => {
          if (mMindexDS.x > 0) {
            mMindexDS.ret(mMindexDS.x - 1);
            rNumsDS = ArrDS[mMindexDS.x].slice();
          };
        });

        var forwardCl$ = sources.DOM
          .select('#gridForward').events('click')

        var fAction$ = forwardCl$.map(() => {
          if (mMindexDS.x + 1 < ArrDS.length) {
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
          if (gameMonad.fetch3().length < 2) {
            var a = gameMonad.fetch3();
            var b = gameMonad.fetch4();
            a.push(b.splice(e.target.id, 1)[0]);
            gameMonad.run([, , , a, b, , ]);
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
          } else {
            gameMonad.run([, , e.target.innerHTML, , , , ]);
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

        var nextInt$ = sources.DOM.select('#pr1').events('click')
        .map(e => {proxyResult = count.next});

        var prevInt$ = sources.DOM.select('#pr2').events('click')
        .map(e => {proxyResult = count.previous});

        var primeInts$ = sources.DOM.select('#pr3').events('click')
        .map(e => {proxyResult = count.factorial});

        var factorialInt$ = sources.DOM.select('#pr4').events('click')
        .map(e => {proxyResult = count.primes});

        var allInts$ = sources.DOM.select('#pr5').events('click')
        .map(e => {proxyResult = count.ints});


        var fibNums$ = sources.DOM.select('#fibNum').events('keypress')
        .map(e => {
            if (e.keyCode === 13) {
                F_17 = f17(Math.abs(Math.floor(toInt(e.target.value))));
                F_18 = f17(Math.abs(Math.floor(toInt(e.target.value))),0,1,true);
            }
        });

        // ******************************************************************** <><><><><><> -> End Demos
        var itterPress$ = sources.DOM
          .select('#itter').events('keypress');
        var itterADSction$ = itterPress$.map(e => {
          if (e.keyCode === 13) {
            itterResult = h('div', styleFunc(["#FFD700", , "16px", , , ]), bind(pInt(e.target.value))(v => v)(() => mMZ23.bnd(v => v * v * v))(() => 3)(x => mMZ23.release(3) + x)(q => q * q / ar[1])(terminate).join(', '));
          }
        });

        var doublePress$ = sources.DOM
          .select('#double').events('keypress');

        var doubleAction$ = doublePress$.map(e => {
          var dRes = "";
          if (e.keyCode === 13) {
            bind(3)
              (cubeP)(addP(3))(c => ar[1]
                .then(v => v - 75 + c * ar[0]))(terminate)
              .map(v => v.then ? v.then(s =>
                dRes = dRes + s + ', ') : dRes = dRes + v + ', ')
          }
        });

        // ******************************************************************** <><><><><><> -> End Demos

  var fib2 = function fib2(v) {
    if (v[2] > 1) {
      mMfib.ret([v[1], v[0] + v[1], v[2] - 1]);
    } else {
      mM19.ret(v[0]);
    }
  };

  var fibPress$ = sources.DOM
    .select('input#code').events('keydown');

  var fibPressAction$ = fibPress$.map(function (e) {
    if (e.target.value === '') {
      return;
    };
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
        (() => idP(Bind.bind1[0] - Bind.bind1[1]))
        (v => addP(Bind.bind1[1])(v))
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
    } else {
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
    } else {
      workerB.postMessage([primeState2, fibState, prFibState, n]);
    }
  });

  var clearprimes$ = sources.DOM
    .select('#clearprimes').events('click')
    .map(() => mMres.ret([mMres.x[0], '', mMres.x[2], mMres.x[3]]));


  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Begin Easy


  //******************************************************************* worker
  m42_RES = [];
  m43_RES = [];

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
    console.log("Message from workerG", m);
    m778_RESULT = result778(m.data);
    mMZ38.release(m.data);

  });

  /*workerL$ = sources.WWM.map(m => {
    mMZ53.release(m.data[1]);
    mMZ58.release(m.data[1]);
    var w = m.data[0][m.data[0].length - 1];
    if (m.data[0].length > primeState.length) primeState = m.data[0];
  }); */

  var clearClick8$ = sources.DOM
    .select('button.clear_R').events('click')
    .map(() => {
      m43_ = [];
    })

  var factorsClick8$ = sources.DOM
    .select('button#factors_R1').events('click');

  var factorsAction8$ = factorsClick8$.map(e => {
    E1 = E2 = E3 = E4 = E5 = E6 = E7 = E8 = E9 = E10 = E11 = E12 = E13 = E14 = E15 = null;
      var i = 0;
      console.log("walapoluza!")
      factorsRes = [];
      m44_ = m45_ = '';
      factorsFunc(100);
  });

  var factorsClick82$ = sources.DOM
    .select('button#factors_R2').events('click');

  var factorsAction82$ = factorsClick82$.map(e => {
    E1 = E2 = E3 = E4 = E5 = E6 = E7 = E8 = E9 = E10 = E11 = E12 = E13 = E14 = E15 = null;
      var i = 0;
      console.log("walapoluza!")
      factorsRes = [];
      m44_ = m45_ = '';
      factorsFunc(1000);
  });

  var factorsClick83$ = sources.DOM
    .select('button#factors_R3').events('click');

  var factorsAction83$ = factorsClick83$.map(e => {
    E1 = E2 = E3 = E4 = E5 = E6 = E7 = E8 = E9 = E10 = E11 = E12 = E13 = E14 = E15 = null;
      var i = 0;
      console.log("walapoluza!")
      factorsRes = [];
      m44_ = m45_ = '';
      factorsFunc(10000);
  });

  var factorsClick84$ = sources.DOM
    .select('button#factors_R4').events('click');

  var factorsAction84$ = factorsClick84$.map(e => {
    E1 = E2 = E3 = E4 = E5 = E6 = E7 = E8 = E9 = E10 = E11 = E12 = E13 = E14 = E15 = null;
      var i = 0;
      console.log("walapoluza!")
      factorsRes = [];
      m44_ = m45_ = '';
      factorsFunc(100000);
  });

    var factorsClick85$ = sources.DOM
    .select('button#factors_R5').events('click');

  var factorsAction85$ = factorsClick85$.map(e => {
    E1 = E2 = E3 = E4 = E5 = E6 = E7 = E8 = E9 = E10 = E11 = E12 = E13 = E14 = E15 = null;
      var i = 0;
      console.log("walapoluza!")
      factorsRes = [];
      m44_ = m45_ = '';
      factorsFunc(1000000);
  });

    var factorsClick86$ = sources.DOM
    .select('#factors_R6').events('click');

    var factorsClick87$ = sources.DOM
    .select('#factors_R7').events('click');

  var aplusClick$ = sources.DOM
    .select('button#aplus').events('click')
    .map(() => {
      _count.add_a
    });

  var aminusClick$ = sources.DOM
    .select('button#aminus').events('click')
    .map(() => {
      _count.subtract_a
    });

  var bplusClick$ = sources.DOM
    .select('button#bplus').events('click')
    .map(() => {
      _count.add_b
    });

  var bminusClick$ = sources.DOM
    .select('button#bminus').events('click')
    .map(() => {
      _count.subtract_b
    });

  var resetStateClick$ = sources.DOM
    .select('button#resetState').events('click')
    .map(() => {
      _count.resetState
    });

  var setStateA$ = sources.DOM
    .select('#stateA').events('keyup')
    .map(e => {
          _state.a = toFloat(e.target.value);
          _count.go;
    })

  var setStateB$ = sources.DOM
    .select('#stateB').events('keyup')
    .map(e => {
          _state.b = toFloat(e.target.value);
          _count.go;
    })






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

  /*
  workerL$ = sources.WWL.map(m => {
    mMZ53.release(m.data[1]);
    var w = m.data[0][m.data[0].length - 1];
    if (m.data[0].length > primeState.length) primeState = m.data[0];
  });

  workerM$ = sources.WWM.map(m => {
    mMZ53.release(m.data[1]);
    mMZ58.release(m.data[1]);
    var w = m.data[0][m.data[0].length - 1];
    if (m.data[0].length > primeState.length) primeState = m.data[0];
  });
  */

  workerO$ = sources.WWO.map(m => {
    it7(m.data);
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

  mMZ41.bnd(v => {
    workerL.postMessage([primeState, v])
  });

  mMZ42.bnd(v => {
    workerO.postMessage([v])
  });

  const result778 = x => h('div', [
    m778_RESULT,
    h('br'),
    h('span', bigBlue, x[3]),
    h('span', bigGreen, x[0]),
    h('span', bigBlue, x[4]),
    h('span', bigRed, x[5]),
  ]);

  var m778_RESULT = h('div', '');

  const result779 = x => h('div', [
    m779_RESULT,
    h('br'),
    h('span', bigBlue, x[3]),
    h('span', bigGreen, x[0]),
    h('span', bigBlue, x[4]),
    h('span', bigRed, x[5]),
  ]);

  var m779_RESULT = h('div', '');


  var mMZ33Func = x => mMZ33
    .bnd(x => {
      mMt32 = new Monad(x, 'mMt32');
      mMt33.ret(x + ' cubed is ' + x * x * x)
      mMZ33Func(x + 1);
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
    var k = Math.floor(Math.random() * 5) + 1;
    if (ar[0] > 10 || ar[1] > 10) {
      diffRender();
      return;
    }
    setTimeout(() => {
      if (n <= k) {
        ppStyle = !ppStyle;
        incF$(n);
        ping(n + 1)(ar);
        diffRender();
      } else if (n % 2 === 0) {
        ar[0] += 1;
        m67_RESULT = h('pre', ppYR, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  `)
        ping(0)(ar);
        diffRender();
      } else {
        ar[1] += 1
        m67_RESULT = h('pre', ppY, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  `);
        ping(0)(ar);
        diffRender();
      }
    }, 500);
  }

  var pingD = a => b => c => h('div', [
    h('pre', a, ` ping        ---> `),
    h('pre', b, `                 <---        pong `),
    h('pre', `          -- SCORE: ping: ` + c[0] + ` pong: ` + c[1]),
  ]);

  m67_RESULT = pingD(_A1)(_A3)([3, 2]);

  PingpongMaker = (name) => {
    var a = _A1;
    var b = _A3;
    var c = [0, 0];
    var n = 0;
    var bool = true;
    var k = Math.floor(Math.random() * 7) + 1;
    return function train() {
      if (c[0] > 10 || c[1] > 10) return;
      var ms = 400;
      if (a === _A3) {
        a = _A1;
        b = _A3
      } else if (a === _A1) {
        a = _A3;
        b = _A2
      };
      if (n <= k) {
        n += 1;
        window[name] = pingD(a)(b)(c);
        diffRender();
      } else if (n % 2 === 0) {
        ms = 600
        n = 0
        c[0] += 1;
        window[name] = pingD(_A1)(_A3)(c);
        diffRender();
        k = Math.floor(Math.random() * 7) + 1;
      } else if (n % 2 === 1) {
        ms = 600;
        n = 0;
        c[1] += 1;
        window[name] = pingD(_A3)(_A2)(c);
        diffRender();
        k = Math.floor(Math.random() * 7) + 1;
      }
      setTimeout(function () {
        train();
      }, ms);
    }
  }

  var makeDisplay = a => b => c => h('div', [
      h('pre', a, ` ping        ---> `),
      h('pre', b, `                 <---        pong `),
      h('pre', `          -- SCORE: ping: ` + c[0] + ` pong: ` + c[1]),
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

  var pingScore = [0, 0];

  pp4 = () => {
    var a = _A3;
    var b = _A2;
    var c = _A3;
    var d = [0, 0];
    var random = 0;
    var turns = 0;
    var bool = true;
    var car;
    var ms = 300;
    return car = () => {
      bool = !bool;
      pingCompute(bool)(a)(b)(c)
      diffRender()
      if (random === 0) random = Math.floor(Math.random() * 11) + 1; // New serve flag "random === 0" detected.
      setTimeout(function () {
        if (pingScore[0] >= 11 || pingScore[1] >= 11) {
          diffRender()
          turns = 0;
          random = 0;
          pingScore = [0, 0];
        };
        if (turns >= random && turns % 2 === 0) {
          pingScore[0] += 1;
          turns = 0;
          random = 0; // A signal to compute a new random number when the next message comes in.
          diffRender()
        }
        if (turns >= random && turns % 2 === 1) {
          pingScore[1] += 1;
          turns = 0;
          random = 0;
          diffRender()
        }
        ms = (turns < random) ? 300 : 900;
        turns += 1;
        diffRender()
        car()
      }, ms)
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

        pingScore = [0, 0];
        pingScore2 = [0, 0];
        pingScore3 = [0, 0];
        // ***************************** start message from workerI

        const otherP = bool => a => b => c => {
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

        // var fredButton = h('button#fredButton', "fredButton");
        var diffR = h('button#diffRender', "diffRender");

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

        // **********************************************************************

        var bindBD$ = sources.BD.map(m => console.log("Say what?", m))

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
            var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
            if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
              mMfactors7.ret('It works only if you enter two integers separated by a comma.');
              return;
            } else {
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
            } else primes = primeState;
            workerE.postMessage([primes, n]);
          }
        });

        const workerE$ = sources.WWE.map(m => {
          mMfactors.ret(m.data[1]);
        });

        var factorsP_b$ = sources.DOM
          .select('input#factors_5b').events('keyup');

        var fA_b$ = factorsP_b$.map(function (e) {
          mMfactors7.ret('');
          var factors = [];
          if (e.keyCode === 13) {
            var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
            console.log('In fA$ ar is', ar);
            if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
              mMfactors7.ret('It works only if you enter two integers separated by a comma.');
              return;
            } else {
              workerF.postMessage([primesMonad.s, ar, decompMonad.s]);
            }
          }
        });

        const workerF$ = sources.WWF.map(m => {
          console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -> Back in the main thread. m is', m);
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
          var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
          if (e.keyCode === 13) {
            if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
              mMfactors7.ret('It works only if you enter two integers separated by a comma.');
              return;
            } else {
              mMfactors800.ret(simpleWay(ar[0], ar[1]));
            }
          }
        });

function Comp ( AR = [] )  {
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    if (x === null || x === NaN || x === undefined) x = f_('stop').pop();
    if (x instanceof Filt) {
      var z = ar.pop();
      if (x.filt(z)) x = z; else ar = [];
    }
    else if (x instanceof Promise) x.then(y =>
      {if (y != undefined && y !== false && y === y &&
      y.name !== "f_" && y.name !== "stop" ) {
      ar.push(y);
      diffRender();
    }})
    else if (x != undefined && x !== false && x === x &&
      x.name !== "f_" && x.name !== "stop" ) {
      ar.push(x);
      diffRender();
    };
    function f_ (func) {
      if (func === 'stop') return ar;
      else if (typeof func !== "function") p = func;
      else if (x instanceof Promise) p = x.then(v => func(v));
      else p = func(x);
      return run(p);
    };
    return f_;
  })(x)
}


        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDOM prime factors END
        // ?<>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START traversal
        document.onload = function (event) {
          console.log('onload event: ', event);
          diffRender = () => document.getElementById('diffRender').click();
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

        var solve = function solve() {
          var g = makeBind();
          mMZ3.bnd(a => {
            g = g.b(a)
            mMquad4.ret('');
            mMquad6.ret('');
            mMquad5.ret(a + " * x * x ")
            mMZ3.bnd(b => {
              mMquad6.ret(b + ' * x ')
              mMZ3.bnd(c => {
                mMtemp.ret([a, b, c])
                  .bnd(gMap, qS4, 'mMtemp2')
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
                      " * " + x + " + " + p(c).text + " = 0")
                    mMquad6.ret(p(a).text + " * " + y + " * " + y + " + " + p(b).text +
                      " * " + y + " + " + p(c).text + " = 0")
                    solve(); // Continuing the endless loop.
                  })
              })
            })
          })
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


  var trip9 = function (x) {
      var original_f = x;
      var f = x;
      return function g (d) {
           f = f(d);
          if ( typeof f === "number") {
              console.log("Result: ", f);
              f = original_f;
            }
  }
  }
  var foo9 = trip9( (a) =>(b) => (c) => a+b+c )


  foo(4);
  foo(5);
  foo(6);

  foo(7);
  foo(8);
  foo(9);


   // **************************************************** START mBnd demo

   var dem3$ = sources.DOM
      .select('#dem3').events('keypress');

   var oneAction$ = dem3$.map(e => {
        if (e.keyCode === 13) {
            obR.push(e.target.value);
            e.target.value = null;
        }
    });

   var dem4$ = sources.DOM
      .select('#dem4').events('keypress');

    var twoAction$ = dem4$.map(e => {
        if (e.keyCode === 13) {
            fu_4(e.target.value);
            e.target.value = null;
        }
    });

    var dem5$ = sources.DOM
      .select('#dem5').events('keypress');

    var threeAction$ = dem5$.map(e => {
        if (e.keyCode === 13) {
            ann27 (e.target.value);
            e.target.value = null;
        }
    });

    var dem0$ = sources.DOM
      .select('#dem0').events('keypress');

    var zeroAction$ = dem0$.map(e => {
        if (e.keyCode === 13) {
            console.log("dem0 is providing", e.target.value, "to obS");
            obS.push(e.target.value);
            e.target.value = null;
        }
    });

    var dem6$ = sources.DOM
      .select('#dem6').events('keypress');

    var fourAction$ = dem6$.map(e => {
        if (e.keyCode === 13) {
            push3 (_arQuad, e.target.value);
            e.target.value = null;
        }
    });

    var dem8$ = sources.DOM
      .select('#dem8').events('keypress');

    var eightAction$ = dem8$.map(e => {
        console.log('In dem8');
        if (e.keyCode === 13) {
            runT(toFloat(e.target.value));
            // e.target.value = null;
        }
    });

  /*
    var dem6$ = sources.DOM
      .select('#dem6').events('keypress');

    oneAction$ = dem6$.map(e => {
        if (e.keyCode === 13) {
            ann27(e.target.value);
            e.target.value = null;
        }
    });
  */

   // ******************************************BEGIN TODO LIST



        var task2 = function task2(str) {
          socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
        };

        function comment2(str) {
          socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
        };


        var foo$ = sources.DOM
          .select('#foocow').events('keypress');

        var fooAction$ = foo$.map(function (e) {
          if (e.keyCode === 13) {
              runFoo(toInt(e.target.value));
          }
        });

        // *****************************************END TODO LIST
        var captionClick$ = sources.DOM
          .select('#caption').events('click');

        var captionClickAction$ = captionClick$.map(function () {
          (get(mMcaptionDiv) === 'none') ?
          mMcaptionDiv.ret('block'):
            mMcaptionDiv.ret('none')
        });

        var gameClick$ = sources.DOM
          .select('#game').events('click');

        var gameClickAction$ = gameClick$.map(function () {
          (get(mMgameDiv) === 'none') ?
          mMgameDiv.ret('block'):
            mMgameDiv.ret('none')
        });

        var clearPicked$ = sources.DOM
          .select('#clear').events('click');

        var clearADSction$ = clearPicked$.map(() => {
          gameMonad.clearPicked();
        });

        var elemB$ = sources.DOM.select('input#group').events('keypress')
          .map(e => {
            mM10.ret(e.target.value);
            pMgroup.ret(e.target.value);
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
          console.log('In boxAction$ -- e is', e);
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          var index = parseInt(e.target.parentElement.id, 10);
          var task = taskMonad.s[1].slice(index, index + 1)[0];
          var old = task;
          var ar = task.split("<$>");
          ar = ar.filter(v => v !== "");
          ar[1] = ar[1] === "false" ? "true" : "false"
          var newTask = ar.join("<$>");
          socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
        });

        var cbx2$ = sources.DOM.select('.cbx2').events('click');

        var cbx2Action$ = cbx2$.map(e => {
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('In cbxAction$ -- e is', e);
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          var index = parseInt(e.target.parentNode.id, 10);
          var task = taskMonad.s[1].slice(index, index + 1)[0];
          var old = task;
          var ar = task.split("<$>");
          ar = ar.filter(v => v !== "");
          ar[1] = ar[1] === "false" ? "true" : "false"
          var newTask = ar.join("<$>");
          socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
        });





        var boxAction$ = box$.map(e => {
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('In boxAction$ -- e is', e);
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          var index = parseInt(e.target.parentElement.id, 10);
          var task = taskMonad.s[1].slice(index, index + 1)[0];
          var old = task;
          var ar = task.split("<$>");
          ar = ar.filter(v => v !== "");
          ar[1] = ar[1] === "false" ? "true" : "false"
          var newTask = ar.join("<$>");
          socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
        });

        var cbx2$ = sources.DOM.select('.cbx2').events('click');

        var cbx2Action$ = cbx2$.map(e => {
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('In cbxAction$ -- e is', e);
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          var index = parseInt(e.target.parentNode.id, 10);
          var task = taskMonad.s[1].slice(index, index + 1)[0];
          var old = task;
          var ar = task.split("<$>");
          ar = ar.filter(v => v !== "");
          ar[1] = ar[1] === "false" ? "true" : "false"
          var newTask = ar.join("<$>");
          socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
        });


        // Clicking the DELETE button.


        var deleteClick$ = sources.DOM
          .select('#deleteTask').events('click');

        var deleteAction$ = deleteClick$.map(function (e) {
          var index = parseInt(e.target.parentNode.id, 10);
          var old = taskMonad.s[1].slice(index, index + 1)[0];
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
            } else {
              var x = ar.shift();
              var y = ar.shift();
              var z = ar.join("<<>>")
              var result = z + '<$>' + 'false' + '<$>' + x + '<$>' + y
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
            if (diffRend < 50) {
              diffRend += 1
            } else diffRend = 0;
          });

        var diffR2$ = sources.DOM
          .select('#diff').events('click')
          .map(() => {
            if (diffRend < 50) {
              diffRend += 1
            } else diffRend = 0;
          });

        var diffRendClick$ = sources.DOM
          .select('input#change').events('click')
          .map(e => {
            console.log('diffRend changed <C><C>< Click Click Click ><C><C> --> --> e is', e);
          })

        var diffRendChange$ = sources.DOM
          .select('input#chang').events('onChange')
          .map(e => {
            console.log('__cow__ changed <C><C>< Change ><C><C> --> --> e.target.value is', e.target.value);
          })

        var res8$ = result_8$.map(() => {
          res8_Style = res8_HIDE;
          setTimeout(() => {
            res8_Style = res8_SHOW, 4600;
            diffRender()
          }, 4200);
          RESULT_8 = [];
          bind(1)(addP(2))(cubeC)(addC(3))(multC(2))(multP(3))
            (addC(30))(multC(1 / 10))(terminate).slice(1, 8).map(v => v.then(z => {;
              RESULT_8.push(z.x + ' ');
              console.log(RESULT_8);
              diffRender()
            }))
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
            runTestResult = runT(toInt(e.target.value));
          }
        });



        var calcStream$ = xs.merge(  zeroAction$,twoAction$, threeAction$, eightAction$, fourAction$, setStateA$, setStateB$, aplusClick$, aminusClick$, bplusClick$, bminusClick$, resetStateClick$, fibNums$, nextInt$, prevInt$, primeInts$, factorialInt$, allInts$, fooAction$, oneAction$, mBindAction$, gridCh$, fAction$, bAction$, m80$, m81$, m82$, m83$, m84$, m85$, m86$, m87$, m88$, m89$, m810$, m811$, m812$, m813$, m814$, m815$, pingpong$, test5Action$, test7Action$, diffRendChange$, diffRendClick$, demo2Action$, bindBD$, doubleAction$, itterADSction$, fredGo$, fredAction$, diffR$, diffR2$, res8$, m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prADSction$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, workerI$, clearClick$, clearClick8$, workerG$, workerH$, workerO$, clearADSction$, factorsAction$, factorsAction8$, factorsAction82$, factorsAction83$, factorsAction84$, factorsAction85$, factors2Action$, factors3Action$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$)

      return {
        DOM: calcStream$.map(() => {
          return h('div.main', [ // 1 bracket

h('div.image_3', [
  h('img.image_2', { props: { src: "logo.svg" }}),
  h('span', ' '),
  h('a', { props: { href: "https://cycle.js.org/", target: "_blank" }}, 'A Cycle.js application')
]),
h('div', { style: { textAlign: "center", fontWeight: "bold" }}, [
  h('br'),
  h('div', {
    style: { fontSize: "32px", color: "rgb(130,170,18", textAlign: "center" }}, 'JAVASCRIPT And FUNCTIONAL PROGRAMMING'),
]),
h('br'),
h('div', styleFunc(["rgb(180,180,56)",, "27px", "italic", ,"center" ]), 'Harness vs. Limit the Power of Functions' ),
h('br'),

                        h('div.content', [ // 2 brackets  main -> content ->

h('span.tao', ' This is a ' ),

                      h('a', {props: {href:"https://cycle.js.org/", target: "_blank" }}, 'Cycle.js' ),

h('span', ' application working in conjunction with a modified '),

                      h('a', {props: {href:"https://www.haskell.org/#step3", target: "_blank" }}, 'Haskell ' ),

h('a.a2', {props: {href: "http://hackage.haskell.org/package/wai-websockets-3.0.1.2/docs/Network-Wai-Handler-WebSockets.html", target: "_blank" }}, 'Wai WebSockets' ),

h('span', ' server, each on its own ' ),

                      h('a', {props: {href:"https://lists.ubuntu.com/archives/ubuntu-announce/2018-April/000231.html", target: "_blank" }}, 'Ubuntu 18.04' ),

                      h('a.a2', {props: {href: "https://www.digitalocean.com/", target: "_blank" }}, ' Digital Ocean' ),

h('span', ' droplet. The JavaScript is plain, unrestricted ' ),

                     h('a', {props: {href:"https://www.ecma-international.org/ecma-262/", target: "_blank" }}, 'ECMAScript 2019' ),
h('span', ' transpiled with ' ),
                      h('a', {props: {href:"https://babeljs.io/", target: "_blank" }}, 'Babel' ),

h('span', ' and bundled by ' ),
                      h('a', {props: {href:"https://webpack.js.org/concepts/", target: "_blank" }}, 'Webpack' ),
h('span', '.' ),
h('br'),
        // index_01  **************************************************** START INTRO

h('br'),
h('span.tao', ' According to ' ),
h('a', {props: {href: "https://www.geeksforgeeks.org/functional-programming-paradigm/", target: "_blank" }}, 'Geeks for Geeks' ),

h('span', ' \"Functional programming is a programming paradigm in which we try to bind everything in pure mathematical functions style.\" Some of the example code is written in JavaScript. The article is a good-enough primer on the functional programming paradigm. As for "we try to bind everything in pure mathematical funcions style", in the case of JavaScrip I would add: "But don\'t try too hard". '),
h('br'),
h('h3', 'Functional Programming And Common Sense'),
h('p', ' The easiest functions to comprehend, debug, and maintain depend ONLY on their arguments and do nothing other than: (1) return values and (2) cause side effects external to the programs they inhabit. Keeping things simple in this manner happens to resemble the purity and referential transparency of strictly functional languages like Haskell.  ' ),
h('h3', 'There\'s No Need To Impose The Entire Functional Programming Paradigm On Javascript' ),
h('span.tao', ' Mutating values inside of functions promotes efficiency by not leaving dead clones for the garbage collector or building elaborate treis cluttered with trash that the garbage collector can\'t reach. Type checks can be added on an ad hoc basis with if-then statements or ' ),
h('a',{props: {href: "https://www.typescriptlang.org/", target: "_blank" }}, 'Typescript' ),
h('span', ' wherever you find them useful. Screening user input in web applications is a good example. You can write maintainable, bug-free code without sacrificing any of the breath-taking possibilities incipient in plain ' ),
                     h('a', {props: {href:"https://www.ecma-international.org/ecma-262/", target: "_blank" }}, 'ECMAScript 2019' ),
h('br'),
h('h3', 'Comp() A Conveniently Tweakable Template'),
h('p', ' "Comp" (below) facilitates the composition of functions which might include promises or filters. I offer it to you as a tweakable template. If your enumerable collections or asynchronous streams don\'t include promises or filters, you can easily remove those features and, perhaps, replace them with code to suit your needs. And, of course, you might devise a better way to do what Comp() does. I encourage you to share your thoughts with me at >>  dev3216@protonmail.com  <<. Your suggestions, experiences, and thoughts will be appreciated.  ' ),

h('pre',  `function Comp ( AR = [] )  {
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    if (x === null || x === NaN ||
      x === undefined) x = f_('stop').pop();
    if (x instanceof Filt) {
      var z = ar.pop();
      if (x.filt(z)) x = z; else ar = [];
    }
    else if (x instanceof Promise) x.then(y =>
      {if (y != undefined && typeof y !== "boolean"
        && y === y && y.name !== "f_" && y.name !== "stop" ) {
      ar.push(y);
      diffRender()
    }})
    else if (x != undefined && x === x && x !== false
      && x.name !== "f_" && x.name !== "stop" ) {
      ar.push(x);
      diffRender()
    };
    function f_ (func) {
      if (func === 'stop' || func === 'S') return ar;
      else if (func === 'finish' || func === 'F') return Object.freeze(ar);
      else if (typeof func !== "function") p = func;
      else if (x instanceof Promise) p = x.then(v => func(v));
      else p = func(x);
      return run(p);
    };
    return f_;
  })(x)
} ` ),
h('pre', `funct

function resume (f) {return f(f('stop').pop())}
   // Removes and replaces the last item in "ar".

function fork (g,f) {return g(f('stop').slice(-1)[0] )}
   // Doesn\t affect f but picks up where f left off

function shortFork (g,f) {
  if (g.constructor !== String) {
    console.log("The first parameter of shortFork must ",
      "be a string but it is:",g);
    return "Type Error: The first parameter of " +
      "shortFork must be a string"
  }
  this[g] = Comp(f('stop').slice(-1));
  return this[g];
 }

function longFork (g,f) {
  if (g.constructor !== String) {
    console.log("The first parameter of longFork ",
      "must be a string but it is:",g);
    return "Type Error: The first parameter " +
     "of longFork must be a string"
  }
   this[g] = Comp(f('stop').slice());
   return this[g];
} ` ),

    h('p', ' Let "val1, val2, ..., valN" be any JavaScript values ("val2, val3, ..., valN-1" will usually be functions operating on val1). Then foo = Comp(val1)(val2) ... (valN) has the following properties:  ' ),
                                    h('div', {style: {color: "#eeeeff" }}, [

      h('p', '(1) foo\'s constructor is f_(). The closure Comp() is up the prototype chain from foo, giving foo access to the array "ar" as long as foo exists. ' ),
      h('p', '(2) Entries that are functions operate on previously returned values (or the resolution values of returned Promises) from left to right,' ),
      h('p', '(3) There are no default type restrictions on val1, val2, ... valN. If a value v is a function, there are no default restrictions on the type of v\'s argument or the type of v\'s return value. Type constraints can easily be enforced with a few lines of additional code. '),
      h('p', '(4) foo\'s arguments have access to the return values, resolution values of returned promises, and everything else in the array "ar". ' ),
      h('p', '(5) Let const bar = Comp(foo(\'stop\')). Then bar inherits foo\'s "ar". bar\'s "ar" can grow without affecting foo\'s "ar". The expression "const bar = Comp(\'finish\')) assures that nothing can ever mutate foo\'s "ar". ' ),
      h('p', ' (6) CAUTION: The exprnession "foo(\'finish\')" freezes foo\'s "ar". After that, foo\'s "ar" can still be augmented by creating functions as shown in example "4" or using the function "fork".  ' ),
      h('span', '(7) Unless it is frozen, foo can accept new arguments with the expression "resume(foo)". This is one way foo() can process ' ),
      h('span', {style: {color: "#ffaaff" }}, ' asynchronous streams. ' ),
      h('br'),
h('p', ' Here are some examples of resuming and forking:  ' ),
h('pre',  `var foo = Comp();
resume(foo)(3)(x=>x**3);
resume(foo)(x=>x+3)(x=>x**2)("finish");
var bar = Comp();
fork(bar,foo)(x=>x/100)(x=>x*3);
bar('stop'); // [900, 9, 27
longFork('bar',foo);
bar('stop'); // Now bar is [3, 27, 30, 900]
shortFork("star",foo); // star was not defined
star("stop"); // [900] star was defined in shortFork
foo("stop");  // [3, 27, 30, 900]  frozen.  ` ),
h('h3', 'Anonymous Computations' ),
      h('span', ' Sequences of functions can be run anonymously. For example, these expressions: "Comp()(4)(x=>x**4)(x=>x/2**4)(\'stop\')" and "Comp([4])(x=>x**4)(x=>x/2**4)(\'stop\')" both return "[4, 256, 16]". ' ),
      h('h3', 'Transducer-like Computations '),
      h('span', '(9)  Arays can undergo multiple transformations, including filters, with only one traversal and no intermediate arrays (see Demonstration 2). The algorithm bears little resemblance to mainstream transducers, such as ' ),
  h('a', {props: {href: "https://ramdajs.com/docs/#transduce",}}, "Ramda transduce."),
  h('span', ' The Comp() algorithm doesn\'t rely on reducing functions like Array.prototype.reduce. ' ),

h('pre', {style: {color: "#ffbbff"}}, `  ` )
                                                 ])
                                               ]),


                              h('div.content2', [


h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), '   Demonstration 1 - Branching Sequence Acrobatics'),

h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', '  ' ),

h('p#proxy2', ' Entering a number "n" in one of the boxes on the right causes runT(n) to execute. Here are the definitions of fork(), id(), powP, and runT(): ' ),

h('pre', {style: {color: "#eebcbb" }}, `

var fork = f => string => {
    return window[string] = Comp(f(
      'stop')
    );
}
var iD = t => async b => {
  await wait(t*1000)
  return b;
}

var powP = a => b => async c => {
  await wait(b*1000)
  return c**a;
} ` ),
h('br'),
h('pre', {style: {color: "#aaccee" }}, `function runT (k) {
orb1 = Comp();
orb2 = Comp();
orb3 = Comp();
orb4 = Comp();
orb5 = Comp();
orb6 = Comp();
orb7 = Comp();
orb8 = Comp();
var orbit_1 = "In about eight seconds, orb5 will do something shocking.
It will remove the last element from orb2.ar and replace it with
its square root. Oh well, it\'s all inside of runT()." ' ),

h('p', {style: {color: "#aaccee" }}, ' var orbit_2 = "Soon, orb6 will
obtain copies of the last three elements of orb2 and perform
some computations. Then it will display \"THE END\". `  ),

h('pre', `orb1 = Comp([k])(cubeP)(() =>
  fork(orb2,orb1)()(x=>x+k)(squareP)(multP(1/100))(addP(1))(powP(4)(1))(() =>
    fork(orb3,orb1)(x=>x+k)(x=>x/10)(x=>x+1)(cubeP)(() =>
      orb4(orbit_1)(() => iD(7)(false))(() =>
        orb5(orb2(\'stop\').pop())(powP(1/2)(3))(x =>
          orb2(x))(() =>
            orb6(orbit_2)(iD(7)(false))(() =>
              orb7(orb2(\'stop\').slice(-3,-2)[0])
              (iD(1)(orb2(\'stop\').slice(-2,-1)[0]))
              (iD(1)(orb2(\'stop\').slice(-1)[0]))(powP(1/2)(1))
              (addP(1))(powP(3)(1))(iD(4)("THE END"))))))))
}; `   ),
h('p', ' The nesting isn\'t necessary, but it is a convenient way to set the delays. Othersise, all of the delays would have to begin when runT is called.  '),

                                             ]),
                                    h('div', {style: {marginRight: "2%", width: "45%" }},   [
h('br'),

h('br'),

                h('input#dem8', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),

h('div', 'orb1.ar is [' + orb1('stop').join(', ') + ']' ),
h('div', 'orb2.ar is [' + orb2('stop').join(', ') + ']' ),
h('div', 'orb3.ar is [' + orb3('stop').join(', ') + ']' ),
h('br'),
h('div', orb4('stop').join(', ')),
h('br'),
h('div', 'orb5.ar is [' + orb5('stop').join(', ') + ']' ),
h('br'),
h('div', orb6('stop').join(', ')),
h('br'),
h('div', 'orb7.ar is [' + orb7('stop').join(', ') + '  ]' ),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br')

                                  ])
                                  ]),



      h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Demonstration 2 - Efficient Array Transformations' ),




                        h('div', {style: {display: "flex" }}, [
                        h('div', {style: {marginRight: "2%", width: "50%" }}, [

h('p', 'The demonstration on the right shows the results of processing an array through multiple calls to its map and filter methods, using Comp(), or using a transducer. The results are identical, but Comp() and transducers need to traverse only the initial array only one time. The Array map and filter methods return new arrays each time they are called. This can be a performance problem where very large arrays are involved.   ' ),

h('p', ' obS does what proxies do, only more directly and efficiently. obS.push always returns "undefined", without the quotation marks, but when called on some number there might be no side-effects, Called on the same number again the same number again and the DOM gets refreshed with the results of four computations. The following is cut and pasted from the Chrome Console:  ' ),
h('pre', `obS.push(27)
undefined

obS.push(27)
monad.js:4354 dotResult is (6) [1001, 1081, 1625, 3401, 7561, 15641]
monad.js:4363 cleanF(res2) is (6) [1001, 1081, 1625, 3401, 7561, 15641]
monad.js:4364 cleanF(res3) is (6) [1001, 1081, 1625, 3401, 7561, 15641]
monad.js:4380 transducerResult is (6) [1001, 1081, 1625, 3401, 7561, 15641]
undefined ` ),
h('p', ' You can try it on the right. Here\'s the definition: ' ),
h('pre', `var obS  = { ar: [] };

obS.push = function (x) {
  this.ar.push(x);
  if (this.ar.length === 1) E_E = "Now specify an upper bound. The number you enter will be multiplied by 1000."
  if (this.ar.length === 2) {
    compTest3(this.ar[0], this.ar[1]);
    this.ar.length = 0;
    E_E = "Specify an array length: ";
  }
};

function compTest3 (k, n) {

var test9 = ltTest(k*1000).filt
var ar7b = [...Array(Math.abs(n)).keys()];

var res4 = ar7b
.filter(v => (v % 2 === 1))
.map(x => x**4)
.map(x => x+3)
.map(x => x-3)
.map(x => Math.sqrt(x))
// console.log("res4 is", res4);

var dotResult = res4
.map(v=>v*v)
.map(v=>v+1000)
.filter(v => v < k*1000);
console.log("dotResult is", dotResult);

var td1 = x => Comp([x])(isOdd)(v=>v**4)(v=>v+3)(v=>(v-3)/Math.sqrt(v-3))('stop').pop()
var td2 = y => Comp([y])(v=>v*v)(v=>v+1000)(test9)('stop').pop()

var res1 = ar7b.map(x => td1(x));
var res2 = res1.map(y => td2(y));
var res3 = ar7b.map(z => td2(td1(z)));

console.log("cleanF(res2) is", cleanF(res2));
console.log("cleanF(res3) is", cleanF(res3));

var xform = compose(
  tdFilter(x=>x%2===1),
  tdMap(x => x**4),
  tdMap(x => x+3),
  tdMap(x => x-3),
  tdMap(x => Math.sqrt(x))
)
var xform2 = compose(
  tdMap(x=>x*x),
  tdMap(x=>x+1000),
  tdFilter(x => x < k*1000)
);

var transducerResult = ar7b.reduce(xform(xform2(concat)),[] );
console.log("transducerResult is", transducerResult);

  A_A = dotResult.join( );
  B_B = cleanF(res2).join( );
  C_C = cleanF(res3).join( );
  D_D = cleanF(transducerResult).join( );
}, `),


                                           ]),
    h('div', {style: {marginRight: "2%", width: "50%", fontSize: "18px" }},   [

      h('br'),
      h('span', {style: {color: "#aaffff"}}, 'Enter numbers under 300 for fast results'),
      h('br'),
      h('br'),
E_E,
                                h('input#dem0', {
                                  style: {
                                    height: "15px",
                                    color: "blue",
                                    fontSize: "18px"
                                  }
                                }),
                                h('br'),
                                h('br'),

h('br'),
h('span.dex', 'Using the Array Prototype Dot Method:' ),
h('span', {style: {color: "#ffabab"}}, A_A ),
h('br'),
h('br'),
h('span.dex', 'Using Comp() With Two Array Traversals: ' ),
h('span', {style: {color: "#ffabab"}}, B_B ),
h('br'),
h('br'),
h('span.dex', 'Using Comp() With Only One Array Traversal: ' ),
h('span', {style: {color: "#ffabab"}}, C_C ),
h('br'),
h('br'),
h('span.dex', 'Using a Transducer: ' ),
h('span', {style: {color: "#ffabab"}}, D_D ),
]),
h('br'),
]),



h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Demonstration 3 - Compose() Stress Test '  ),


                       h('div', {style: {display: "flex" }}, [
                        h('div', {style: {marginRight: "2%", width: "50%" }}, [

h('br'),
h('p', ' To see the demonstration, Click "GO" or enter a number and then re-enter it several times. idP() and squareP() are the identity and square functions delayed in ES6 Promises. ' ),

h('pre', `

function test4 (w) {
    var f = Comp([w]);
    return f(cubeP)
    (x=>idP(x+f('stop')[0]))(squareP)
    (() => idP(f('stop')[2]**3))
    (x=>idP(x/f('stop')[3]))
    (x=>idP(x-f('stop')[1]))('stop')
}; `),
h('p', ' In test4 (above), "f (\'stop\')" refers to the current state of the array held in the Comp() closure that returned "f" ' ),
h('pre', `function test5 (n) {
    var x = toInt(n);
    _C0 = test4(x+0);
    _C1 = test4(x+1);
    _C2 = test4(x+2);
    _C3 = test4(x+3);
    _C4 = test4(x+4);
    _C5 = test4(x+5);
    _C6 = test4(x+6);
    _C7 = test4(x+7);
    _C8 = test4(x+8;
} ` ),
                                           ]),
                           h('div', {style: {marginRight: "2%", width: "50%" }},   [

                h('br'),

                h('div', `${_C0.join(", ")}`),
                h('div', `${_C1.join(", ")}`),
                h('div', `${_C2.join(", ")}`),
                h('div', `${_C3.join(", ")}`),
                h('div', `${_C4.join(", ")}`),
                h('div', `${_C5.join(", ")}`),
                h('div', `${_C6.join(", ")}`),
                h('div', `${_C7.join(", ")}`),
                h('div', `${_C8.join(", ")}`),
                h('br'),
                h('span', ' value of n --> '),
                h('input#test5', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),
                h('button#makeBind', {
                  style: {
                    fontSize: '17px',
                    marginLeft: "7%"
                  }
                }, 'GO'),
                h('br'),
                h('br'),
h('p', ' In test4, Comp() returns arrays located in separate addresses in memory, so it\'s no surprise that nearly simultaneous calls to tes4 don\'t clash with one another, or that restarted incomplete sequences don\'t trip over themselves. ' ),
h('p', ' The variables prefixed by "_C" are permanent fixtures of the virtual DOM. The side effect of repeatedly changing their values while test4 executes can\'t cause any mischief because the mutations occur in the virtual DOM. The mutations do nothing but trigger Snabdom\'s diff and render routine. Functional programming and Cycle.js are a good match, especially when (as is the case here) there are no callback functions in the virtual DOM.  ' ),
                h('br')

                                           ])
                                           ]),






h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Demonstration 4 '  ),

                              h('div', {style: {display: "flex" }},  [
                              h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' It is easy to add functionality to the array method "push" without altering Array.prototype.push or using a proxy. The quadratic formula runs on accumulated numbers every third time obR.push() is called. Here\'s the code:  ' ),

h('pre', `var obR  = { ar: [] };

obR.push = function (x) {
  var temp;
  this.ar.push(x);
  if (this.ar.length > 2) {
    quadF(a[0])(a[1])(a[2]);
    this.ar = [];
  }
};  ` ),

h('p', ' obR.push(n) executes when a user enters a number "n". ' ),

h('pre', `  var quadF = a => b => c => {
      let ar = [];
      let d = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      let e = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (d === d) {
          ar.push(\`\${a}*x*x + \${b}*x + \${c} = 0 has the following solutions:\`);
          ar.push(\`x = \${d} and x = \${e}\`);
      }
      else {
          ar.push(\`\${a}*x*x + \${b}*x + \${c} = 0 has no solution\`);
          ar.push('');
      }
      return ar;
  } ` ),


                                                              ]),
                                        h('div', {style: {marginLeft: "3%", marginRight: "2%", width: "50%" }},   [



h('p', ' Enter three coefficients for a quadratic equation, ONE NUMBER AT A TIME. obR() executes on each number you enter. The third entry will trigger execution of quadMaker on your selections. To see some solutions, enter "1" then "3" then "2" or "1" then "2" then "-3". ' ),

                h('input#dem3', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),

                h('div', {style: {color: "#ffabab"}}, [
                h('br'),
                _oB_[0],
                h('br'),
                _oB_[1],
                h('br'),
                h('br'),   ]),

                                                          ])
                                                          ]),







h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 5 '),


h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' Of course, a proxy works too, only less efficiently and less transparently with more lines of code.    ' ),

h('pre',  `var  _arQuad = [];

function push3 (ar, x) {
  ar.push(x);
  return ar
};

push3 = new Proxy(push3, {
  apply: function(a, b, c) {
    if (c[0].length === 2) {
      _oC_ = quadF(c[0][0])(c[0][1])(c[1]);
      _arQuad = [];
    }
  return Reflect.apply(a,b,c);
  }
}); ` ),

                                                              ]),
                                      h('div', {style: {marginRight: "2%", width: "50%" }},   [


h('p', ' Enter three coefficients for a quadratic equation, ONE NUMBER AT A TIME. Your entries will be routed to push3(). ' ),
                h('input#dem6', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),

                h('div', {style: {color: "#ffabab"}}, [
                h('br'),
                _oC_[0],
                h('br'),
                _oC_[1],
                h('br'),
                h('br'),   ]),

h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('span', ' More proxy demonstrations are at ' ),
h('a', {props: {href: "#proxies" }}, 'Fun With Proxies' ),
h('span', '. ' )


                                        ])
                                        ])
                                       ]),

h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 5'),

                                              h('div.content2', [

h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' Here is another approach to function composition, featuring rapid-fire redefinition of a parameter "v" by functions in an array ("ar"). "v" and "ar" are available to every function in "ar". In the example, we see "v => ar[3](v)" and "y => y - x" where y is the previously computed value and x is the starting value. A more elaborate version could be made to handle asynchronous code. "f_86", "foo", and runFoo are shown below. ' ),
h('p', ' Enter a number "n" on the right to call "runFoo(n)". ' ),
h('pre', `    var f_86 = v => t => {
        var ar = [v];
        t.map(g => ar.push(v=g(v)));
         return ar
    }; ` ),

h('pre', {style: {color: "#8ffc95"}}, `    var foo = x => f_86(x)([v=>v**3, v=>v+x,
      v=>v**2,v=>ar[3](v),v=>v**(1/4),
      v=>v-x,v=>Math.round(v**(1/3))]); ` ),

h('pre', `    function runFoo (n) {
        foocow_0 = foo(n+0));
        foocow_1 = foo(n+1));
        foocow_2 = foo(n+2));
        foocow_3 = foo(n+3));
        foocow_4 = foo(n+4));
        foocow_5 = foo(n+5));
        foocow_6 = foo(n+6));
        foocow_7 = foo(n+7));
        foocow_8 = foo(n+8));
    } ` )

                                           ]),
                                           h('div',  [
h('br'),

h('div', 'Enter a number "n" below to see the result of "runFoo" executing on nine numbers' ),
  h('br'),
h('input#foocow',    ),
  h('br'),
  h('br'),
h('div', `${foocow_0.join(", ")}`),
h('div', `${foocow_1.join(", ")}`),
h('div', `${foocow_2.join(", ")}`),
h('div', `${foocow_3.join(", ")}`),
h('div', `${foocow_4.join(", ")}`),
h('div', `${foocow_5.join(", ")}`),
h('div', `${foocow_6.join(", ")}`),
h('div', `${foocow_7.join(", ")}`)

                                                             ])
                                                             ])
                                                             ]),

                                                            h('div.content', [


h('p', ' This website demonstrates the tremendous potential of unconstrained JavaScript. Programming with enforced types, enforced purity of functions, enforced immutability, and the routing of all side effects to the virtual DOM seems akin to joining a Catholic religious order and taking a vow of poverty, chastity, and obedience. So it might surprise you to know that I am enthusiastic about functional programming and greatly enjoy working on the Haskell WebSocket server associated with this site.' ),
h('span.tao', ' The ' ),
h('a', {props: {href:"https://github.com/fantasyland/fantasy-land", target: "_blank" }}, 'Fantasyland' ),
h('span', ' algebraic javascript specification is an admirable achievement. People who are familiar with Haskell can jump right in and start coding with familiar monads and functors borrowed from the Haskell ' ),
h('a', {props: {href: "http://hackage.haskell.org/package/base-4.12.0.0/docs/Prelude.html", target: "_blank"}}, 'Prelude module' ),
h('span', '. The '  ),
h('a', {props: {href:"https://github.com/origamitower/folktale", target: "_blank" }}, 'Folktale' ),
h('span', ' library also succeeds in implementing an API similar to the Haskell Prelude module. But when my goal is providing a robust, pleasing user interface for the Web, I like having all the power and possibilities of unrestricted ECMAScript 2018 at my disposal. Checking the types of user input and providing helpful suggestions as needed is easy to accomplish with simple "If then" blocks.   ' ),
h('br'),
h('br'),


  h('span.tao', ' If I had to use a library for function composition, perhaps in some team project, I would choose '),
  h('a', {props: {href: "https://ramdajs.com/docs/#pipe",}}, "Ramda pipe"),
  h('a', {props: {href: "https://ramdajs.com/docs/#compose"}}, 'Ramda compose' ),
  h('span', '. I feel more solidly in control using Comp() and variations with different names. The variations might have fewer features, more features, or Comp() with a tweak or two for testing. It took time to achieve this modest level of control over unrestricted JavaScript, but I think it was time well spent. I prefer being a JavaScript whisperer over ignoring its so-called "bad parts" and stifling its dynamic potential. . ' ),
  h('br'),
  h('br'),
  h('span.tao', 'This project was created by and is actively maintained by David Schalk. The code repository is at '),
  h('a', {
    props: {
      href: "https://github.com/dschalk/functional-javascript",
      target: "_blank"
    }
  }, 'functional-javascript'),
  h('span', '. The Comments section hasn\'t functioned ever since I removed the section with a game, shared todo list, and text messaging section. Users could create or sign into an existing group and choose usernames and passwords. The removed parts of this page functioned flawlessly but used more lines of code than necessary to make a few points. '),
                    ]),
h('h1', '___________________________________________________________'),
h('div.content', [
h('div#bind'),

h('br'),
h('h3', 'MonadItter' ),

h('pre', `var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
        return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
        return this.p = func;
};
}; `),
h('p', ' MonadItter instances provide a simple, reliable way of responding to events. In this application, incoming WebSockets messages have unique six-character prefixes. When a comma separated message "e" arrives from the server, "v = e.data.split(\',\')" splits the payload into an array named "v". v[0] determines which MonadItter instance is released. For example, when a message with v[0] === \'BE#$42\' arrives, mMZ30.release is called on: ' ),

h('pre', `mMZ30.bnd(() => {
    if (playerName === v[2]) {
        mMZ42.release(v[3]);
    }
}); ` ),
  h('p', ' v[2] is the playerName of the user who initiated the interaction with the server. If the person who initiated the interaction receives the message, "mMZ42.release(v[3])" is called, sending the pseudo-random number received from the server to a web worker that sends back the number\'s prime decomposition. Here\'s the result: ' ),

  h('p', ' Currently the game and shared todo list is removed, along with the ability to join or create a group or create a user name and password. Some of the underlying boilerplate remains in the application in anticipation of bring those features back.'),


h('h3', 'Asynchronous Demo featuring WebSockets and Web Worker Coodination '),
h('p', ' Click a button (below) to send 100, 1000, 10,000, 100,000, or 1,000,000 to the server fifteen times in rapid succession. fifteen psuedo-random numbers will be returned and routed to a Web Worker by means of a MonadItter instance. The web worker will return each number\'s prime decomposition.'),
  h('br')
]),
h('div.content3', [
  h('br'),
  h('button#factors_R1', { style: { fontSize: '20px' }}, ' .   100   . ' ),
  h('br'),
  h('button#factors_R2', { style: { fontSize: '20px' }}, ' .   1000   . ' ),
  h('br'),
  h('button#factors_R3', { style: { fontSize: '20px' }}, ' .   10,000   . ' ),
  h('br'),
  h('button#factors_R4', { style: { fontSize: '20px' }}, ' .   100,000   . ' ),
  h('br'),
  h('button#factors_R5', { style: { fontSize: '20px' }}, ' .   1,000,000   . ' ),
  h('br'),
  h('br'),
  E1,
  h('br'),
  E2,
  h('br'),
  E3,
  h('br'),
  E4,
  h('br'),
  E5,
  h('br'),
  E6,
  h('br'),
  E7,
  h('br'),
  E8,
  h('br'),
  E9,
  h('br'),
  E10,
  h('br'),
  E11,
  h('br'),
  E12,
  h('br'),
  E13,
  h('br'),
  E14,
  h('br'),
  E15,
  h('br'),
  h('br'),
  h('div', {style: {color: "#ffbbbb" }}, `${m43_}` )
]),

h('div.content', [

  // h('div.demo_1', {style: {fontSize: "20px", color: "#ffffbb"}},  m43_), h('br'), /* h('div.demo_1', {style: {fontSize: "15px"}}, m44_), h('br'),
  h('div.demo_1', {style: {fontSize: "15px"}}, m45_),
  h('br'),

          h('p', ' MonadItter instances trap incoming WebSocket messages based on their six-digit prefixes and redirect them according to their intended purposes. No error checking is needed. If a prefix is not recognized, the message falls through and is disregarded. This is how incoming WebSocket messages are parsed: '),
h('pre',   {style: {color: "#aaffff"}}, `        const messages$ = sources.WS.map(e => {
        var v = e.data.split(',')
        // console.log("ret(v[0])", ret(v[0]));
        var group = v[1]
        var sender = v[2];
        var extra = v[3];
        var extra2 = v[4];

        mMZ9.bnd(() => {
          console.log("sender is", sender);
          console.log("extra is", extra);
          console.log("The full message is", e);
          console.log("v is", v);
        });

        mMZ10.bnd(() => {
          if (sender === pMname.x) {
            gameMonad.run([v[7], v[8], 0, [],
              [v[3], v[4], v[5], v[6]]
            ]);
          } else gameMonad.run([, , , [],
            [v[3], v[4], v[5], v[6]]
          ]);
        });
               . . .

        mMZ30.bnd(() => {
          if (playerName === sender) mMZ42.release(v[3]);
          else console.log('message from sender to BE#$42')
        });
      }; ` ),

h('p', ' I still haven\'t discussed the function "ret()". It is similar to "pure" and "return" in Haskell in that it encapsulates a value in an instance of "Monad2()", an abbreviated version of "Monad()". Instances of Monad2 are objects "m" with values "m.x" and functions "m.bnd" that operate on functions "f" and return similar object with values m.x\' = f(x). Here\'s the definition of Monad2: ' ),

h('pre', `  function Monad2(z = 0) {
      this.x = z;
  };

  Monad2.prototype.ret = a => new Monad2(a);
  Monad2.prototype.bnd = function (func, ...args) {
      return func(this.x, ...args)
} ` ),
h('p', ' And here\'s the definition of "ret()": ' ),
h('pre', `  function ret (val = 0) {
      return new Monad2(val);
  }; ` ),
h('p', ' The names "Monad" and Monad2" were selected during a time when I was toying with the idea of isolating side effects in linked objects. I borrowed some terminology from the Haskell programming language, but similarities between Haskell monads and my JavaScript monads are pretty superficial. Sure, composing my "monads" involves a monad A operating on some function "f" that returns a "monad" B with value f(A.x), but the types of A and B are "object" and the constructors are Monad. Haskell monads encapsulate composed transformations of values to values possibly having different types. ' ),

          h('h3', 'Reactivity'),
          h('span.tao', ' Reactivity can be achieved in many ways, including: plain JavaScript and HTML event listeners, BaconJs, RxJS,  occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andrew Staltz\' '),
          h('a', {props: {
              href: "https://egghead.io/courses/cycle-js-fundamentals",
              target: "_blank"}
          }, ' Overview of Cycle.js.'),
          h('span', ' Its elegance of its core concept is breathtaking. '),
          h('br'),
          h('br'),
          h('a.tao', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom'),

          h('span', ', '),
          h('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,'),
          h('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and fun so many of its functions and variable definitions are included in scripts in the index.html page. "var" is used instead of "const" in order to facilitate experimentation. '),
          h('br'),

          h('p', ' The next interactive demonstration accepts user input and executes the following statement in a web worker: '),
          h('pre', `bind(ar[1])(execF)(fpFunc(ar[0])(x)); `),
          h('span', ' The parameters are defined in the '),
          h('a', {props: {href: "#fp" }}, 'appendix'),
          h('span', '. '),
          h('br'),
h('pre', {
  style: {
    color: "red",
    fontStyle: "italic"
  }
}, `Red Indicates An Ongoing Computation`),

h('pre', `Fibonacci numbers   Prime Numbers   Prime Fibonacci Numbers `),

h('span', mMfibBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill1Monad.x
      }
    })
  ])
]),

h('span', mMprimeBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill2Monad.x
      }
    })
  ])
]),

h('span', mMprimeFibBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill3Monad.x
      }
    })
  ])
]),
h('br'),
h('br'),
h('p.red', 'The elapsed time is ' + mMelapsed.x + ' milliseconds.'),
h('input#fib92'),
h('br'),
h('br'),
h('span#PF_7.red6', 'Fibonacci Numbers'),
h('br'),
h('span#PF_9.turk', fS),
h('br'),
h('span#PF_8.red6', 'Prime Fibonacci Numbers'),
h('br'),
h('span#primeFibs.turk', pFS),
h('br'),
h('span#PF_21.red6', 'The largest generated prime number.'),
h('br'),
h('span.turk', topPrime),
h('br'),
h('h3', ' Promises are not needed '),
h('p', ' Asynchronous code can be handled without reliance on ECMAScript 2015 promises either explicitly or implicitly (e.g. using async/await). Cycle.js drivers eliminate any need to explicitly use functions from a reactive library, but xstream is an integral component of Cycle.js unless you choose most.js or RxJS. '),

h('p', ' The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9\'s, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:'),
h('input#factors_1'),
h('br'),
h('br'),
h('span', mMfactors.x),
h('span.tao3', mMfactors23.x),
h('p', ' primesMonad and the functions primarily involved in its transformation are shown below: '),
code.primes,
h('p', ' primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code: '),
code.primes3,
h('p', ' The user\'s selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling: '),
code.primes4,
h('p', ' execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB. '),
code.primes2,

h('br'),
h('a', {
  props: {
    href: '#top'
  }
}, 'Back to the top'),

              h('h2', 'MonadItter'),
              h('p', ' As shown in the "Monads" section (above), the definition of MonadItter is: '),
              code.monadItter,
              h('p', ' MonadItter instances don\'t link to one another. They exist to facilitate the work of instances of Monad, MonadState, etc. Here\'s how they work: '),
              h('p', 'For any instance of MonadItter, say "it", "it.bnd(func)" causes it.p === func. Calling the method "it.release(...args)" causes p(...args) to run, possibly with arguments supplied by the caller. '),
              h('p', ' MonadItter instances control the routing of incoming WebSocket messages. In one of the demonstrations below, they behave much like ES2015 iterators.'),
              h('h3', ' A Basic Iterator '),
              h('p', 'The following example illustrates the use of release() with an argument. It also shows a lambda expressions being provided as an argument for the method mMZ1.bnd() (thereby becoming the value of mMZ1.p), and then mMZ1.release providing an arguments for the function mMZ1.p. The code is shown beneath the following two buttons. '),
              h('button#testZ', 'mMZ33.release(1)'),
              h('p', mMt33.x),
              h('span', 'Refresh button: '),
              h('button#testQ', 'mMt33.ret(0) '),
              h('span.tao', ' The expression mMt33.x sits permanently in the Motorcycle virtual DOM description. You can call '),
              h('span.green', 'mMZ33.release(v)'),
              h('span', ' by entering a value for v below: '),
              h('br'),
              h('span', 'Please enter an integer here: '),
              h('input#testW'),
              h('p', ' cube() is defined in the Monad section (above). If you click "mMZ1.release(1)" several times, the code (above) will run several times, each time with v === 1. The result, mMt3.x, is shown below the button. mMZ1.p (bnd()\'s argument) remains constant while mMZ1.release(1) is repeatedly called, incrementing the number being cubed each time. '),
              h('p', ' Here is another example. It demonstrates lambda expressions passing values to a remote location for use in a computation. If you enter three numbers consecutively below, call them a, b, and c, then the quadratic formula will be used to find solutions for a*x**2 + b*x + c = 0. The a, b, and c you select might not have a solution. If a and b are positive numbers, you are likely to see solutions if c is a negative number. For example, 12, 12, and -24 yields the solutions 1 and -2. '),

              h('p#quad4.red2', mMquad4.x),
              h('p#quad5.red2', mMquad5.x),
              h('p#quad6.red2', mMquad6.x),
              h('p', 'Run mMZ3.release(v) three times for three numbers. The numbers are a, b, and c in ax*x + b*x + c = 0. Remember to press <ENTER> after each number. '),
              h('input#quad'),
              h('p', ' The function "solve()" is at the center of the algorithm. See how mMZ3.bind() appears three times. Each time a user enters a number, say "x", mMZ3.release(x) executes. After the third number, solve calls itself so the process can start again. I prefer this approach over ES6 generators. Here\'s solve(): '),
              code.quad,
              h('p', ' And here are the supporting functions: '),
              code.quad2,
              h('p', ' fmap (above) facilitated using qS4 in a monadic sequence. qS4 returns an array, not an instance of Monad, but fmap lifts qS4 into the monadic sequence. '),
              h('p', ' The function solve() is recursive. It invokes itself after release() executes three times. The expression "solve()" resets solve to the top, where mMZ3.p becomes a function containing two nested occurrences of mMZ3.bnd. After mMZ3.release() executes, mMZ3.p becomes the function that is the argument to the next occurrence of mMZ3.bnd. That function contains yet another occurrence of mMZ3.bnd. MonadItter is syntactic sugar for nested callbacks. '),




              h('h3', ' Preserve Archives By Avoiding Mutation '),
              h('p', ' When you assign a variable to an array, for example "var arr = [1,2,3]", arr points to a location in memory. Suppose you want to preserve a record of previous values of arr. You can\'t do it with an array such as b below: '),
              h('pre', `    var arr = [1,2,3];
    var c = arr;
    var b = [arr];
    c.push(4);
    console.log(arr);   // [1,2,3,4]
    console.log(b[0]);  // [1,2,3,4] ` ),
              h('p', ' That didn\'t work because b[0] points to the same place in memory as arr and c. "arr.push(4)" mutated the value in arr\'s location and "b.push(arr)" added a copy. "b[0] == b[1]" returning true verifies that both elements of b point to the same place in memory because in JavaScript, the "==" operator on objects (including arrays) is defined to return true if and only if the objects\' '),
              h('p', ' Here is what happens when "arr.slice()" is pushed into b: '),
              h('pre', `  var arr = [1,2,3];
    var b = [arr.slice()];
    arr.push(4);
    b.push(arr.slice());
    console.log(b[0]);  // [1,2,3]
    console.log(b[1]);  // [1,2,3,4] `),
              h('p', ' Success! "arr.slice()" returned a copy of arr assigned to a new location in memory. It is anonymous, so the only way to access it is through b. b[0], b[1], and arr each have unique locations in memory so mutating one has no effect on the others. '),
              h('p', ' The sixteen-square grid below puts these concepts into practice. If you click two squares, they exchange locations on the grid. If you do this several times, the "BACK" and "FORWARD" buttons will display the result of each pair of clicks. '),
              h('div#donkey', makeRDS(ArrDS[mMindexDS.x])),
              h('br'),
              h('button#gridBack', 'back'),
              h('button#gridForward', 'forward'),
              h('p', "index: " + mMindexDS.x),
              h('p', "rNumsDS: " + rNumsDS.join(', ')),
              h('p', "rMatrixF(rNumsDS: " + rMatrixF(rNumsDS)),
              h('p', ' Reactivity is achieved in these demonstrations through Cycle.js rather than RxJS, Bacon, or something else that could work just as well, though perhaps not quite as elegantly. This section provides a glimpse of how I use (some might say, \"misuse\") Cycle.js. '),
              h('p', ' If you click any two numbers above they will exchange places with one another. The array "rNumsDS" keeps track of the positions of numbers on the grid. '),
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
      h('button#mR15.mR', 15 ) ]

      var ArrDS = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      ];  `),
              h('p', ' The following line of code is a fixture of the virtual DOM. It accounts for the sixteen-square grid shown above: '),
              h('pre', `  h('div#donkey', ArrDS[indexDS] ) `),
              h('p', ' If you begin exploring the demonstration by clicking the upper right square, this code in main() responds by placing the number 3 in rADS: '),
              h('pre', `  var m83$ = sources.DOM
    .select('button#mR3').events('click')
    .map(e => {
      rADS.push(toInt(e.target.id.slice(2,4)));
      if (rADS.x.length === 2) {
       rDataDS = rExchange (rADS[0], rADS[1]);
      }
    }) `),
              h('p', ' Then if you click the bottom right square (var m815), rADS expands to contain "3" and "15". This causes rExchange(3,15) to run and return the updated value of rDataDS. '),
              h('pre', `  function rExchange (k,n) {
      var a = rNumsDS[k];
      rNumsDS[k] = rNumsDS[n];
      rNumsDS[n] = a;
      rADS = [];
      return makeRDS(rNumsDS);
    } `),
              h('p', ' The last line of rExchange is a call to makeRDS, which is defined as follows: '),
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



              h('p', ' button#R9.mR has id "#R9" and formatting class "mR". When numbers are rearranged, the id\'s remain in fixed positions. '),
              h('p', ' The process is responsive because r83 and r815 are merged in the stream that feeds the virtual DOM; i.e., the stream returned by main() and fed back into main() by run(). Cycle.run(main, sources) is the last line of the front-end code. '),
              h('p#proxies', ' This code undoubtedly deviates from Cycle.js and functional programming recommended practices. After all, rNumsDS and rDataDS are global variables tracking the state of the grid. Cycle.js favors maintaining state in streams and functional aficionados eschew global variables, period. Me, I just like to make things work as neatly and efficiently as I can. Making a state stream would be a hassle and, since this is not a group effort, nobody is going to hijack my variable names. So, for now, grid state will hang out in global scope. '),

h('a', {props: {href: "#proxy2"}}, 'Back to the Demonstration 6' ),
h('h2', 'FUN WITH PROXIES' ),


h('p', ' Proxies can be useful for debugging, type checking, error handling, and more. Where they really shine is in reactive programming. Modern Firefox and Chrome browsers have supported them for quite some time and it seems inevitable that we will see more and more of them in production code. In this Cycle.js application, the virtual DOM diff & render procedure is provided by MobX, which is beginning the switch to reliance on ES6 Proxies for reactivity. autoRefresh() uses a proxy in conjunction with MobX to update the DOM each time a function composed with Bind(true) and mBnd(true) executes (see Demonstrations 1 and 2). The following demonstration features an empty object that seems to contain an invisible key named "attribute" along with invisible methods for which "attribute" is a parameter.' ),
h('pre', `   var count = {}

console.log(count.next);      // 1
console.log(count.next);      // 2
console.log(count.next);      // 3
console.log(count.next);      // 4
console.log(count.factorial); // 24 ` ),
h('p', ' What? Isn\'t count.next supposed to return "ReferenceError: next is not defined"? What\'s going on here? ' ),
h('div', {style: {fontSize: "28px", color: "red", textAlign: "center"}}, proxyResult ),
h('br'),


h('button#pr1', {style: {fontSize: "18px"}}, "count.next" ),
h('button#pr2', {style: {fontSize: "18px"}}, "count.previous" ),
h('button#pr3', {style: {fontSize: "18px"}}, "count.factorial" ),
h('br'),
h('br'),
h('button#pr4', {style: {fontSize: "18px"}}, "count.primes" ),
h('button#pr5', {style: {fontSize: "18px"}}, "count.ints" ),





  h('h3', {style: {color: "#bbee00"}}, 'Spreadsheet-like Behavior' ),
h('p', ' In spreadsheets, such as Microsoft\'s Excell, when a + b = c, changing a or b automatically changes c. Such behavior is easy to implement with proxies. ' ),

h('table', {style: {color: '#ffaa00', fontSize: '22px'}}, [
  h('tr', [
    h('td', "A"),
    h('td', _state.a) ]),

  h('tr', [
    h('td', "B"),
    h('td', _state.b) ]),

  h('tr', [
    h('td', "SUM"),
    h('td', _state.sum) ]),

  h('tr', [
    h('td', {style: {paddingRight: '23px'}}, "PRODUCT     "),
    h('td', _state.prod) ]) ]),

h('br', ),
h('br', ),

h('button#aplus', {style: {fontSize: '17px'}}, ' A + ' ),
h('button#aminus', {style: {fontSize: '17px'}}, ' A - ' ),
h('button#bplus', {style: {fontSize: '17px'}}, ' B + ' ),
h('button#bminus', {style: {fontSize: '17px'}}, ' B - ' ),
h('br', ),
h('br', ),
h('button#resetState', {style: {fontSize: '17px'}}, ' Reset ' ),
h('span',{style: {paddingLeft: '20px'}}, 'A :' ),
h('input#stateA', ),
h('span',{style: {paddingLeft: '20px'}}, 'B :' ),
h('input#stateB', ),
h('br'),
h('p', ' Here\'s the code: ' ),
h('pre', `  const _state = {a: 0, b: 0, sum: 0, prod: 0 }

  function add_a () {this.a += 1}
  function subtract_a () {this.a -= 1}

  function add_b () {this.b += 1}
  function subtract_b () {this.b -= 1}

  function set_a (x) {this.a = x};
  function set_b (z) {this.b = z};

  function sum () {this.sum = this.a + this.b}
  function prod () {this.prod = this.a * this.b}

  function resetState () {this.a=0;this.b=0;this.sum=0;this.prod=0};

  var handlerUpdate = {
      get: (a, b, c) => {
          if (b === "add_a") add_a.apply(_state)
          else if (b === "add_b") add_b.apply(_state)
          else if (b === "subtract_a") subtract_a.apply(_state)
          else if (b === "subtract_b") subtract_b.apply(_state)
          else if (b === "resetState") resetState.apply(_state)
          else if (b === "resetState") resetState.apply(_state)
          sum.apply(_state);
          prod.apply(_state);
          diffRender();
      }
  }

  const _count = new Proxy ({}, handlerUpdate); ` ),

h('p', ' ' ),
h('a', {props: {href: "#proxy2"}}, 'Back to the first demonstration' ),


            h('pre', `
var compose = (...fns) =>
fns.reduceRight((prevFn, nextFn) =>
  (...args) => nextFn(prevFn(...args)),
  value => value
);

var example = compose(
val => { console.log(1, val); return val**2; },
val => { console.log(2, val); return val+=4; },
val => { console.log(3, val); return val*=2; }); `),

            h('br'),
            h('br'),
            h('div#changeDisplay', [diffRend]),
            h('br'),
            h('button#diffRender', 'diffRender()'),
            h('br'),
            h('br'),
            h('br')
          ])
        ])
      })
    }
  }


  sources.DOM = makeDOMDriver('#main-container');
  sources.WS = websocketsDriver;
  sources.GD = gridDriver;

  run(main, sources);
