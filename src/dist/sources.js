
var connection;

function createWebSocket(path) {
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
};

function workerBDriver () {
  return xs.create({
    start: listener => { workerB.onmessage = msg => listener.next(msg)},
    stop: () => { workerB.terminate() }
  });
};

function workerCDriver () {
  return xs.create({
    start: listener => { workerC.onmessage = msg => listener.next(msg)},
    stop: () => { workerC.terminate() }
  });
};

function workerDDriver () {
  return xs.create({
    start: listener => { workerD.onmessage = msg => listener.next(msg)},
    stop: () => { workerD.terminate() }
  });
};

function workerEDriver () {
  return xs.create({
    start: listener => { workerE.onmessage = msg => listener.next(msg)},
    stop: () => { workerE.terminate() }
  });
};

function workerFDriver () {
  return xs.create({
    start: listener => { workerF.onmessage = msg => listener.next(msg)},
    stop: () => { workerF.terminate() }
  });
};

function workerGDriver () {
  return xs.create({
    start: listener => { workerG.onmessage = msg => listener.next(msg)},
    stop: () => { workerG.terminate() }
  });
};

function workerDriver () {
  return xs.create({
    start: listener => { worker.onmessage = msg => listener.next(msg)},
    stop: () => { worker.terminate() }
  });
};

var ppStyle = true;
var pingpongTog;
var pingpongTog = n => ppStyle === true ? h('p', {style: {color: 'red', marginLeft: '0px'}}, 'ping ' + n) : h('p', {style: {color: 'yellow', marginLeft: '42%'}}, 'PONG ' + n) 

var PINGPONG = n => xs.of(pingpongTog(n));

function pingpongDriver () {
  return xs.create({
    start: listener => { PINGPONG = msg => listener.next(pingpongTog(msg))},
    stop: () => { workerB.terminate() }
  });
};

socket.onclose = function (event) {
    console.log('<><><> ALERT - socket is closing. <><><> ', event);
};



/*function eM2Driver () {
  return xs.create({
    start: listener => { mM2.on = msg => listener.next(msg)},
    stop: () => { mM2.removeAllListeners() }
  });
};

function mMstreamDriver () {
  return xs.create({
    start: listener => { mMstream.x.on = msg => listener.next(msg)},
    stop: () => { mMstream.removeAllListeners() }
  });
};*/



const sources = {
  WS: websocketsDriver,
  WWB: workerBDriver,
  WWC: workerCDriver,
  WWD: workerDDriver,
  WWE: workerEDriver,
  WWF: workerFDriver,
  WWG: workerGDriver,
  WW: workerDriver
}

















