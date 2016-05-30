'use strict';

const chai = require('chai');
const sinon = require('sinon');
const devRant = require('../../src');
const http = require('../../src/utils/http');
const expect = chai.expect;

describe('.rants(options)', function () {
	it('sets default values with missing options', function () {
		const httpStub = sinon.spy(http, 'GET');

		devRant.rants();

		const [ args ] = httpStub.args;
		const params = args[1];

		expect(params).to.deep.equal({
			app: 3,
			sort: 'algo',
			limit: 50,
			skip: 0
		});

		httpStub.restore();
	});
});
