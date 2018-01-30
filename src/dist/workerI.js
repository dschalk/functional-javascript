







var pingScore = ar => ar.filter(v => v === true);
var pongScore = ar => ar.filter(v => v === false);

var count = [];
var random = 0;
var turns = 0;
var bool = false;

onmessage = () => {
  if (random === 0) random = Math.floor(Math.random() * 6)+1;  // New serve flag "random === 0" detected.
  if ( pingScore(count).length > 10 || pongScore(count).length > 10) {   // Game over. Reset everything.
    random = 0;
    turns = 0;
    count = [];
    postMessage('game over');
  }
  else {
    setTimeout( function () {
      console.log('In workerI -- pingScore(count).length, pongScore(score).length, random, turns ', pingScore(count).length, pongScore(count).length, random, turns );
      
      if (turns >= random) {   // Somebody scored a point. workerI$ will update the display.
        console.log(' In workerI  turns >= random turns % 2, turns, random', turns % 2, turns, random);
        if (turns % 2 === 0) {bool = false; count.push(false); postMessage(false);}
        if (turns % 2 === 1) {bool = true; count.push(true); postMessage(true);}
        turns = 0;
        random = 0;  // A signal to compute a new random number when the next message comes in.
      } 
      if (turns < random) {
        turns+=1;
        postMessage(null) 
      }
    }, 500 )
  }
}









