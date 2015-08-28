'use strict';
var test = require('tape');
var githubName = require('./');
test('Testing GitHub username availability', function (t) {
	t.plan(1);
	githubName('dserijdk', function (err, isAvailable) {
		t.equal(true, isAvailable, 'Both value matched');
	});
});

test('Testing GitHub username unavailability', function (t) {
	t.plan(1);
	githubName('beatfreaker', function (err, isAvailable) {
		t.equal(false, isAvailable, 'Both value matched');
	});
});
