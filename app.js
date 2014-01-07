GlobalPostMessage.request({
    key: 'xhr-file',
    params: {filename: 'package.json'},
    success: function(data) {
        console.log("[app.js] Post Message replied to xhr-file: \n" + data);
    }
});
