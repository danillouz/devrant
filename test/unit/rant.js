'use strict';

const chai = require('chai');
const devRant = require('../../src');
const expect = chai.expect;

describe('.rant(id)', function () {
	it('throws an error with missing rant id', function () {
		try {
			devRant.rant();
		} catch (err) {
			expect(err).to.exist;
			expect(err.message).to.equal('A rant id is required, for example 43511');
		}
	});
});
