var configBuilder = require('./util/karma-config-builder');

module.exports = configBuilder('./client/component-tests/mocha-entry.js');
