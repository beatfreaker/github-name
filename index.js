'use strict';
var got = require('got');

module.exports = function (userName, callback) {
	if (!(typeof userName === 'string' && userName.length !== 0)) {
		throw new Error('User Name required');
	}
	got('https://api.github.com/users/' + userName.toLowerCase(), function (err, data) {
		if (err) {
		    if (err.statusCode === 404) {
		        callback(null, true)
		        return;
		    }
			callback(err);
			return;
		}
		var jsonObject = JSON.parse(data);
		if (jsonObject.hasOwnProperty('login')) {
			callback(null, false);
			return;
		}
	});
};
