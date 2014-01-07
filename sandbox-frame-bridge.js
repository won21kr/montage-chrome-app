var iframe = document.getElementById('sandbox-frame');

iframeWindow = iframe.contentWindow;

window.addEventListener('message', function(e) {
    var data = e.data,
        key = data.key;

    console.log('[sandbox-frame-bridge.js] Post Message request for ' + key + ' ... ');

    switch (key) {

        case 'xhr-file':
            xhrFile(data);
            break;

        default:
            console.log('[sandbox-frame-bridge.js] unidentified Post Message for "' + key + '" ... ');
    }
}, false);

function xhrFile(message) {
    var filename = message.params.filename;

    var request = new XMLHttpRequest();

    request.onload = function() {
        message.result = this.responseText
        iframeWindow.postMessage(message, '*');
    };

    request.open("GET", filename, true);
    request.send();
}
