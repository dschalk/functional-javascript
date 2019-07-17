
function showFunc (name, name2) {return name == name2 ? 'inline-block' : 'none'}
var result444;
var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
};

MonadState3.prototype.html = [];

var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

// Cut from the main page on July 17, 2019

h('span#comments'),
h('br'),
h('div#comment'),
h('h2', {
  style: {
    color: "red"
  }
}, 'Comments'),

h('a', {
  props: {
    href: '#top'
  }
}, 'Back to the top'),
h('div#com2', {
  style: {
    display: abcde
  }
}),
h('h3', 'User Names' ),
h('p', ' When this page loads in the browser, a user name is automatically generated in order to establish a unique WebSocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password. '),
h('p', 'The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made. '),
h('p', ' If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again. '),
h('br'),
h('h3', 'Register'),
h('span.red', mMregister.x),
h('input.register', {
  style: {
    display: mMshowRegister.x
  }
}),
h('br'),
h('br'),
h('h3', 'COMMENTS - One paragraph at a time.'),
h('textarea#comment', {
  style: {
    width: "60%",
    height: "90px"
  }
}, ''),
h('br'),
h('br'),
h('div', commentMonad.html),
h('p', ' When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. '),
h('p', ' When a comment is created, modified, or deleted, a WebSocket message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js. '),
h('p', ' The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger. '),
h('p', ' commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Immutability is necessary for game history traversal. Here is the entire Comments.js file: '),
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
  } `),
              h('a', { props: { href: '#top' }}, 'Back to the top'),
              h('p', ' *************************************************************************************** '),
