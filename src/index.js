'use strict';

const co = require('co');
const http = require('./utils/http');

const API = 'https://www.devrant.io/api';

/* eslint new-cap: 0 */

/**
 * Throws an error when a search term is missing.
 *
 * @private
 */
function _noRantIdError() {
	throw new Error('A rant id is required, for example 43511');
}

/**
 * Throws an error when a search term is missing.
 *
 * @private
 */
function _noSearchTermError() {
	throw new Error('A search term is required, for example "javascript"');
}

/**
 * Throws an error when a username is missing.
 *
 * @private
 */
function _noUsernameError() {
	throw new Error('A username is required, for example "dfox"');
}

/**
 * Retrieve the user id associated with the devRant
 * username.
 *
 * @private
 *
 * @param  {String} username - the devRant username
 *
 * @return {Promise} Resolves with the user id
 */
function _getIdByUsername(username) {
	const url = `${API}/get-user-id`;
	const params = {
		app: 3,
		username
	};

	return http
		.GET(url, params)
		.then(data => data.user_id);
}

/**
 * Retrieve a single rant from devRant. Use this method to
 * retrieve a rant with its full text and comments.
 *
 * @param  {String} id - the rant id
 *
 * @return {Promise} Resolves with the fetched rant
 */
function rant(id = _noRantIdError()) {
	const url = `${API}/devrant/rants/${id}`;
	const params = { app: 3 };

	return http.GET(url, params);
}

/**
 * Retrieve rants from devRant.
 *
 * @param  {Object} options - sort (by `algo`, `recent` or `top`), limit and skip
 *
 * @return {Promise} Resolves with the fetched rants
 */
function rants({
	sort = 'algo',
	limit = 50,
	skip = 0
} = {}) {
	const url = `${API}/devrant/rants`;
	const params = {
		app: 3,
		sort, limit, skip
	};

	return http
		.GET(url, params)
		.then(data => data.rants);
}

/**
 * Retrieve rants from devRant that match a specific search
 * term.
 *
 * @param  {String} term - the search term
 *
 * @return {Promise} Resolves with the fetched rants
 */
function search(term = _noSearchTermError()) {
	const url = `${API}/devrant/search`;
	const params = {
		app: 3,
		term
	};

	return http
		.GET(url, params)
		.then(data => data.results);
}

/**
 * Retrieve the profile of a devRant user by username.
 *
 * @param  {String} username - the devRant username
 *
 * @return {Promise} Resolves with the fetched user profile
 */
function profile(username = _noUsernameError()) {
	return co(function *resolveUsername() {
		const userId = yield _getIdByUsername(username);
		const url = `${API}/users/${userId}`;
		const params = { app: 3	};

		return http
			.GET(url, params)
			.then(data => data.profile);
	});
}

module.exports = { rant, rants, search, profile };
