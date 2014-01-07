var iframe = document.getElementById('sandbox-frame');

iframeWindow = iframe.contentWindow;

window.addEventListener('message', function(e) {
    var data= e.data,
        key = data.key;

    console.log('[sandbox-frame-bridge.js] Post Message request key ' + key);

    switch (key) {
        case 'extension-baseurl':
            extensionBaseUrl(data);
            break;

        case 'upnp-discover':
            upnpDiscover(data);
            break;

        case 'upnp-browse':
            upnpBrowse(data);
            break;

        case 'play-media':
            playMedia(data);
            break;

        case 'download-media':
            downloadMedia(data);
            break;

        case 'cancel-download':
            cancelDownload(data);
            break;

        default:
            console.log('[sandbox-frame-bridge.js] unidentified key for Post Message: "' + key + '"');
    }
}, false);

function extensionBaseUrl(data) {
    // data.result = chrome.extension.getURL('/'); //OUTDATED
    data.result = window.location.hostname;

    iframeWindow.postMessage(data, '*');
}
