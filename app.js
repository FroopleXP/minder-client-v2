var app = require('app'),
	BrowserWindow = require('browser-window'),
	isOnline = require('is-online');

app.on('ready', function() {

	// Creating the main window object
	var mainWindow = new BrowserWindow({
		"width": 500,
		"height": 600,
		"resizable": false
	});

	mainWindow.setMenuBarVisibility(false);

	// Checking if the User has an Internet Connection
	isOnline(function(err, online) {
	
		if (online) { // They're connected!

			mainWindow.loadUrl('http://localhost:1337');

		} else if (!online) { // They're not connected!

			mainWindow.loadUrl('file://' + __dirname + '/views/err/no_connection.html');

		}

	});

 
});