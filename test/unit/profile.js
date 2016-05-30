'use strict';

const chai = require('chai');
const devRant = require('../../src');
const expect = chai.expect;

describe('.profile(username)', function () {
	it('throws an error with missing username', function () {
		try {
			devRant.profile();
		} catch (err) {
			expect(err).to.exist;
			expect(err.message).to.equal('A username is required, for example "dfox"');
		}
	});
});
