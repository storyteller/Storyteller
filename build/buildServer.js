var args = require('yargs').argv;
var buildNumber = args.buildNumber || '0';
var buildVersion = '3.0.0.' + buildNumber;
var revision = args.git || 'unknown';
var config = args.config || 'Debug';

var publish = args.publish || false;

var assemblyInfo = require('./assemblyInfo');
assemblyInfo(buildVersion, revision);

require('./compile')(config);
require('./fixie')(config);

if (publish){
	var exec = require('child_process').execSync;
	var cmd = 'ripple publish ' + buildVersion + ' ' + args.apikey + ' -s source https://www.myget.org/F/fubumvc-edge';
	var output = exec('ripple publish ')
}
