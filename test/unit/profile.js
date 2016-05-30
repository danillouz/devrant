'use strict';

const chai = require('chai');
const devrant = require('../../src');
const expect = chai.expect;

describe('.profile(username)', function () {
	it('throws an error with missing username', function () {
		try {
			devrant.profile();
		} catch (err) {
			expect(err).to.exist;
			expect(err.message).to.equal('A username is required, for example "dfox"');
		}
	});
});
