'use strict';

const mocha = require('mocha');
const coMocha = require('co-mocha');

coMocha(mocha);

require('./unit/rant');
require('./unit/rants');
require('./unit/search');
require('./unit/profile');

require('./functional/http');
