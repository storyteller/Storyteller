require('./../component-tests/phantomjs-polyfill');
require('./../component-tests/regexp-polyfill');
//provide TestUtils as a global
global.TestUtils = require('react-addons-test-utils');

require('./../components/editing/component-loader');

//require all modules beginning with 'test-' from the current
//directory and its immediate subdirectories
var testsContext = require.context('.', true, /^.\/test-/);

testsContext.keys().forEach(testsContext)
