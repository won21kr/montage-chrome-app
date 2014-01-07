GlobalPostMessage.request({
    key: 'extension-baseurl',
    success: function(data) {
        console.log("[app.js] Post Message replied key extension-baseurl " + data);
    }
});
