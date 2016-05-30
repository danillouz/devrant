'use strict';

const chai = require('chai');
const devRant = require('../../src');
const expect = chai.expect;

describe('.search(term)', function () {
	it('throws an error with missing search term', function () {
		try {
			devRant.search();
		} catch (err) {
			expect(err).to.exist;
			expect(err.message).to.equal('A search term is required, for example "javascript"');
		}
	});
});
