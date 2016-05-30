'use strict';

const chai = require('chai');
const devrant = require('../../src');
const expect = chai.expect;

describe('.search(term)', function () {
	it('throws an error with missing search term', function () {
		try {
			devrant.search();
		} catch (err) {
			expect(err).to.exist;
			expect(err.message).to.equal('A search term is required, for example "javascript"');
		}
	});
});
