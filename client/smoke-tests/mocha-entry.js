require('./../component-tests/phantomjs-polyfill');
require('./../component-tests/regexp-polyfill');
//provide TestUtils as a global
global.TestUtils = require('react-addons-test-utils');

require('./test-all-specs-can-be-opened-in-editor-mode.js');
require('./test-all-specs-can-be-opened-in-preview-mode.js');
require('./test-all-specs-can-open-results-view.js');
