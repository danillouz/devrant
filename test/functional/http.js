'use strict';

const chai = require('chai');
const nock = require('nock');
const devrant = require('../../src');
const expect = chai.expect;
const domain = 'https://www.devrant.io/api/devrant';

describe('http', function () {
	it('200 status returns data', function *() {
		const id = 1;
		const fixture = { success: true };

		nock(domain)
			.get(`/rants/${id}`)
			.query(true)
			.reply(200, fixture);

		const res = yield devrant.rant(id);

		expect(res).to.deep.equal(fixture);

		nock.cleanAll();
	});

	it('non 200 status returns error Object', function *() {
		const status = 404;
		const id = 2;

		nock(domain)
			.get(`/rants/${id}`)
			.query(true)
			.reply(status);

		try {
			yield devrant.rant(id);
		} catch (err) {
			expect(err).to.exist;
			expect(err.message).to.equal('Request failed: Not Found');
			expect(err.status).to.equal(status);
		}

		nock.cleanAll();
	});
});
