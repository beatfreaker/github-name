#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var meow = require('meow');
var githubName = require('./');

var cli = meow({
	help: [
		'Usage',
		' > github-name <name>',
		'',
		'Examples',
		' > github-name beatfreaker',
		' ' + logSymbols.error + ' Unavailable',
		' > github-name dasjduieh',
		' ' + logSymbols.success + ' Available',
		''
	]
});

if (cli.input.length === 0) {
	console.error('User Name is required');
	process.exit(1);
}

githubName(cli.input[0], function (err, isAvailable) {
	if (err) {
		console.log(err.message);
		process.exit(1);
	}
	console.log(isAvailable ? logSymbols.success + ' Available' : logSymbols.error + ' Unavailable');
});
