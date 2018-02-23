
/*

function getInlineJS() {
    var js = $('[type="javascript/worker"]').text();
    var blob = new Blob([js], {"type": "text/plain"});
    return URL.createObjectURL(blob);
}

var worker_list = [];
var worker_num = 3;
var pause_count = null;

function create_workers() {
    var index;
    for (index = 0; index < worker_num; index++) {
        var web_worker = new Worker(getInlineJS());
        var counter_selector = '#counter' + (index + 1);
        (function(selector) {
            web_worker.onmessage = function(event) {
                var paused = event.data['paused'];
                if (paused) {
                    pause_count++;
                }
                if (pause_count == worker_num) {
                    // At this point we know the workers have all stopped
                    $('#pause_count').text(pause_count);
                }
                var counter = event.data['counter'];
                $(selector).text(counter);
            }
        })(counter_selector);
        worker_list.push(web_worker);
    }
}


// * Send a bogus message to get the workers to send their counters

function update_counters() {
    var index;
    for (index = 0; index < worker_num; index++) {
        var message = {'index': index};
        worker_list[index].postMessage(message);
    }
}


// * Send the pause flag to the workers
// * @param pause_state

function pause_counters(pause_state) {
    var index;
    for (index = 0; index < worker_num; index++) {
        var message = {'pause_flag': pause_state};
        worker_list[index].postMessage(message);
    }
}

var pause_state = false;
$(document).ready(function() {
    create_workers();
    setInterval(update_counters, 1000);
    $('#pause').on('click', function() {
        pause_state = !pause_state;
        if (pause_state) {
            pause_count = 0;
        }
        else {
            $('#pause_count').text('');
        }
        pause_counters(pause_state);
        $('#pause').text(pause_state ? 'Start' : 'Stop');
    });
});
function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}   */

onmessage = m => {
  console.log('In workerJ.js onmessage', 'm.data: ', m.data);
  postMessage(m.data); 
};









