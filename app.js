var app = require('app'),
	BrowserWindow = require('browser-window'),
	isOnline = require('is-online');

app.on('ready', function() {

	// Checking if the User has an Internet Connection
	isOnline(function(err, online) {
		if (err) throw err;
		console.log(online);
	});

	var mainWindow = new BrowserWindow({
		width: 500,
		height: 600
	});

	mainWindow.loadUrl('file://' + __dirname + '/views/login.html');
 
});