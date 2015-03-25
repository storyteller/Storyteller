var args = require('yargs').argv;
var buildNumber = args.buildNumber || '0';
var buildVersion = '3.0.0.' + buildNumber;
var revision = args.git || 'unknown';
var config = args.config || 'Debug';

var assemblyInfo = require('./assemblyInfo');
assemblyInfo(buildVersion, revision);

require('./compile')(config);
require('./fixie')(config);

