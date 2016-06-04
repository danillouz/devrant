# devRant
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

[npm-image]: https://img.shields.io/badge/npm-v0.0.5-blue.svg
[npm-url]: https://www.npmjs.com/package/devrant
[travis-image]: https://travis-ci.org/danillouz/devrant.svg?branch=master
[travis-url]: https://travis-ci.org/danillouz/devrant

Unofficial wrapper for the **public** [devRant](https://www.devrant.io/) API.

![devRant](https://raw.githubusercontent.com/danillouz/devrant/master/img/devrant.png "devRant")

## Requirements
You need node version **6** or greater.

## Installation
`npm i -S devrant`

## Interface
This module exposes methods to fetch rants (posts) from
devRant and to fetch the profile of a devRant user by
username.

## devRant Display Requirements
When displaying the contents of a rant fetched from the
[devRant](https://www.devrant.io/) API, it is **required**
to credit the author of a rant by displaying their devRant
username.

## Syntax
```javascript
devRant
  .rants()
  .then()
  .catch();
```

## Methods
After requiring the module, the following methods can be
used:

| METHOD | ARGUMENTS | RETURNS | DESCRIPTION |
| --- | --- | --- | --- |
| [rant](#rantid) | Yes | `Promise` | Retrieve a single rant from devRant. Use this method to retrieve a rant with its full text and comments. The retrieved rant is a [Full Rant Object](#rant-object-full). |
| [rants](#rantsoptions) | Optional | `Promise` | Retrieve rants from devRant. The retrieved rants are [Simple Rant Objects](#rant-object-simple). |
| [search](#searchterm) | Yes | `Promise` | Retrieve rants from devRant that match a specific search term. The retrieved rants are [Simple Rant Objects](#rant-object-simple). |
| [profile](#profileusername) | Yes | `Promise` | Retrieve the profile of a devRant user by username. The retrieved profile is a [Profile Object](#profile-object). |

### .rant(id)
Retrieve a single rant from devRant. Use this method to retrieve a rant
with its full text and comments.

The retrieved rant is a [Full Rant Object](#rant-object-full).

###### Arguments
| NAME | TYPE | DESCRIPTION |
| --- | --- | --- | --- |
| id  | Number | The rant id. For example `43511`. |

###### Returns
`Promise`.

### .rants(options)
Retrieve rants from devRant.

By providing an options Object as an argument, it's possible
to sort by `algo`, `recent` and `top` rants. As well as
limiting and skipping the amount of rants to be fetched.

The retrieved rants are [Simple Rant Objects](#rant-object-simple).

###### Arguments
| NAME | TYPE | DESCRIPTION |
| --- | --- | --- | --- |
| options  | Object  | **Optional**. The [options](#options) to control the rants to be fetched. When omitted, `50` rants of type `algo` will be fetched and `0` rants will be skipped. |

###### Options
| OPTIONS KEY | TYPE | DESCRIPTION |
| --- | --- | --- | --- |
| sort  | String  | **Optional**. The type of rants to be fetched. Must be `algo`, `recent` or `top`. When omitted, it defaults to `algo`. |
| limit | Number | **Optional**. The amount of rants to be fetched. When omitted, it defaults to `50`. |
| skip | Number | **Optional**. The amount of rants to be skipped. When omitted, it defaults to `0`. |

###### Returns
`Promise`.

### .search(term)
Retrieve rants from devRant that match a specific search
term.

The retrieved rants are [Simple Rant Objects](#rant-object-simple).

###### Arguments
| NAME | TYPE | DESCRIPTION |
| --- | --- | --- | --- |
| term  | String  | The search term used to match specific rants. For example `javascript`, `xcode`, `wk2`, `devrant`, etc. |

###### Returns
`Promise`.

### .profile(username)
Retrieve the profile of a devRant user by username.

The retrieved profile is a [Profile Object](#profile-object).

###### Arguments
| NAME | TYPE | DESCRIPTION |
| --- | --- | --- | --- |
| username  | String  | The devRant username. For example `danillouz`, `dfox`, `localhost`, etc. |

###### Returns
`Promise`.

## Rant Object Simple
```json
{
  "id": 43511,
  "text": "when people think you know everything...",
  "num_upvotes": 38,
  "num_downvotes": 1,
  "score": 37,
  "created_time": 1464610498,
  "attached_image": {
    "url": "https://d1fvlyhrbsf219.cloudfront.net/devrant/rant/r_43511_uQDW4.jpg",
    "width": 600,
    "height": 300
  },
  "num_comments": 5,
  "tags": [ ],
  "vote_state": 0,
  "user_id": 15601,
  "user_username": "Mung00se",
  "user_score": 272
}
```

## Rant Object Full
```json
{
  "rant": {
    "id": 43511,
    "text": "when people think you know everything...",
    "num_upvotes": 39,
    "num_downvotes": 1,
    "score": 38,
    "created_time": 1464610498,
    "attached_image": {
      "url": "https://d1fvlyhrbsf219.cloudfront.net/devrant/rant/r_43511_uQDW4.jpg",
      "width": 600,
      "height": 300
    },
    "num_comments": 5,
    "tags": [ ],
    "vote_state": 0,
    "user_id": 15601,
    "user_username": "Mung00se",
    "user_score": 273
  },
  "comments": [
    {
      "id": 43529,
      "rant_id": 43511,
      "body": "But at some point we all do it.",
      "num_upvotes": 2,
      "num_downvotes": 0,
      "score": 2,
      "created_time": 1464611516,
      "vote_state": 0,
      "user_id": 505,
      "user_username": "Jumpshot44",
      "user_score": 2233
    }
  ],
  "success": true
}
```

## Profile Object
```json
{
  "username": "danillouz",
  "score": 207,
  "about": "I spend too much time tweaking my terminal and color schemes..",
  "location": "The Netherlands",
  "created_time": 1463432703,
  "skills": "Node.js, JavaScript, mongoDB, GraphQL, ObjectiveC, Go",
  "github": "danillouz",
  "content": {
    "content": {
      "rants": [
        {
          "id": 38898,
          "text": "Me and my team are working on a system where we depend on a component that was built by a different dev team and hasn't been integration tested yet, because it's that new. This is how it's going..",
          "num_upvotes": 35,
          "num_downvotes": 0,
          "score": 35,
          "created_time": 1464211080,
          "attached_image": {
            "url": "https://d1fvlyhrbsf219.cloudfront.net/devrant/rant/r_38898_Z93E9.gif",
            "width": 380,
            "height": 230
          },
          "num_comments": 2,
          "tags": [
            "teams",
            "integration-testing",
            "dependencies"
          ],
          "vote_state": 0,
          "user_id": 27942,
          "user_username": "danillouz",
          "user_score": 207
        }
      ],
      "upvoted": [
        {
          "id": 42586,
          "text": "My office desk",
          "num_upvotes": 65,
          "num_downvotes": 0,
          "score": 65,
          "created_time": 1464530939,
          "attached_image": {
            "url": "https://d1fvlyhrbsf219.cloudfront.net/devrant/rant/r_42586_9jWtu.jpg",
            "width": 800,
            "height": 600
          },
          "num_comments": 18,
          "tags": [
            "mydesk"
          ],
          "vote_state": 0,
          "user_id": 13541,
          "user_username": "dvlpr",
          "user_score": 104
        }
      ],
      "comments": [
        {
          "id": 41422,
          "rant_id": 41065,
          "body": "@xroad Hodor",
          "num_upvotes": 3,
          "num_downvotes": 0,
          "score": 3,
          "created_time": 1464425475,
          "vote_state": 0,
          "user_id": 27942,
          "user_username": "danillouz",
          "user_score": 207
        }
      ]
    },
    "counts": {
      "rants": 5,
      "upvoted": 37,
      "comments": 16
    }
  }
}
```

## Examples
- [Rant](#fetch-rant-with-id-43511)
- [Rants with Options](#fetch-10-rants-of-type-top-and-skip-the-first-10)
- [Rants Default](#fetch-50-rants-of-type-algo-and-skip-0-by-using-default-behavior)
- [Search](#fetch-all-rants-that-match-the-search-term-javascript)
- [Profile](#fetch-the-profile-of-the-devrant-user-with-username-dfox)

#### Fetch rant with id `43511`
```javascript
'use strict';

const devRant = require('devrant');

devRant
  .rant(43511)
  .then(function receiveRant(rant) {
    console.log('rant: ', rant);
  })
  .catch(function errorHandler(err) {
    console.log('err: ', err.message);
  });
```

#### Fetch `10` rants of type `top` and skip the first `10`
```javascript
const devRant = require('devrant');

devRant
  .rants({
	sort: 'top',
	limit: 10,
	skip: 10
  })
  .then(function receiveRants(rants) {
    console.log('rants: ', rants);
  })
  .catch(function errorHandler(err) {
    console.log('err: ', err.message);
  });
```

#### Fetch `50` rants of type `algo` and skip `0` by using default behavior
```javascript
'use strict';

const devRant = require('devrant');
const co = require('co');

function algoRants() {
  return co(function *fetchRants() {	  
    const rants = yield devRant.rants();

    console.log(`rants: ${rants}`);
  });
}

algoRants();
```

#### Fetch all rants that match the search term `javascript`
```javascript
'use strict';

const devRant = require('devrant');
const co = require('co');

function search(term) {
  return co(function *searchRants() {	  
    const rants = yield devRant.search(term);

    console.log(`rants: ${rants}`);
  });
}

search('javascript');
```

#### Fetch the profile of the devRant user with username `dfox`
```javascript
'use strict';

const devRant = require('devrant');
const co = require('co');

function getProfile(username) {
  return co(function *fetchProfile() {	  
    const profile = yield devRant.profile(username);

    console.log(`profile: ${profile}`);
  });
}

getProfile('dfox');
```
