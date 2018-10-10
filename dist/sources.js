
var connection;
var sources;
var _AR_ = [];

/*
function createWebSocket(path) {
    var host = window.location.hostname;
    if (host === '')
        host = 'localhost';
    var uri = 'ws://' + host + ':3055' + path;
    var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;

    return new Socket(uri);
}
var socket = createWebSocket('/');
*/

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

function workerHDriver () {
  return xs.create({
    start: listener => { workerH.onmessage = msg => listener.next(msg)},
    stop: () => { workerH.terminate() }
  });
};

function workerIDriver () {
  return xs.create({
    start: listener => { workerI.onmessage = msg => listener.next(msg)},
    stop: () => { workerI.terminate() }
  });
};

function workerJDriver () {
  return xs.create({
    start: listener => { workerJ.onmessage = msg => listener.next(msg)},
    stop: () => { workerJ.terminate() }
  });
};

function workerKDriver () {
  return xs.create({
    start: listener => { workerK.onmessage = msg => listener.next(msg)},
    stop: () => { workerK.terminate() }
  });
};

function workerLDriver () {
  return xs.create({
    start: listener => { workerL.onmessage = msg => listener.next(msg)},
    stop: () => { workerL.terminate() }
  });
};

function workerMDriver () {
  return xs.create({
    start: listener => { workerM.onmessage = msg => listener.next(msg)},
    stop: () => { workerM.terminate() }
  });
};

function workerNDriver () {
  return xs.create({
    start: listener => { workerN.onmessage = msg => listener.next(msg)},
    stop: () => { workerN.terminate() }
  });
};


function workerDriver () {
  return xs.create({
    start: listener => { worker.onmessage = msg => listener.next(msg)},
    stop: () => { worker.terminate() }
  });
};

var incF$ = n => xs.of(n);

function pingpongDriver () {
  console.log('pingpongDriver is executing');
  return xs.create({
    start: listener => { incF$ = k => listener.next(k)},
    stop: () => {}
  })
};

var freddy$ = n => xs.of(n);

function fredDriver () {
  return xs.create({
    start: listener => { freddy$ = k => listener.next(k)},
    stop: () => {}
  })
};

var RESULT_bind = [];
 
var bind$ = n => xs.of(n);

function bindDriver () {
  return xs.create({
    start: listener => { bind$ = a => listener.next(a) },
    stop: () => {}
  })
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


sources = {
  WWB: workerBDriver,
  WWC: workerCDriver,
  WWD: workerDDriver,
  WWE: workerEDriver,
  WWF: workerFDriver,
  WWG: workerGDriver,
  WWH: workerHDriver,
  WWI: workerIDriver,
  WWJ: workerJDriver,
  WWK: workerKDriver,
  WWL: workerLDriver,
  WWM: workerMDriver,
  WWN: workerNDriver,
  WW: workerDriver,
  PP: pingpongDriver,
  FD: fredDriver,
  BD: bindDriver
}


















