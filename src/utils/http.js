'use strict';

const url = require('url');
const fetch = require('node-fetch');
const debug = require('debug');

const log = debug('devrant:http');

/**
 * Makes an HTTP GET request for a specific URI.
 *
 * @param {String} uri    - the request URI
 * @param {Object} params - the request query parameters
 *
 * @return {Promise} resolves with the HTTP response
 */
function GET(uri, params) {
	const reqUrl = `${uri}${url.format({ query: params })}`;

	log(`request URL: ${reqUrl}`);

	return fetch(reqUrl)
		.then(function handleGetRequest(res) {
			const status = res.status;
			const statusText = res.statusText;

			log(`status code: ${status}`);
			log(`status text: ${statusText}`);

			if (status !== 200) {
				const err = new Error(`Request failed: ${statusText}`);

				err.status = status;

				throw err;
			}

			return res.json();
		})
		.catch(err => {
			log('catched err: ', err);

			throw err;
		});
}

module.exports = { GET };
