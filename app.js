window.addEventListener('message', function(e) {
	var data = e.data,
		key = data.key;

	if (data.deffered && data.result) {
		console.log("[app.js] Post Message replied to : " + key + "\n" , data);
		// data.success(data.result)
	} else {
		console.warn("[app.js] Post Message replied with no result to : " + key + "\n" , e);
	}

}, false);

// window.top.postMessage({key: "testing"}, '*');
