var path = require('path');

module.exports = function(target){
    var path = require('path');
    var executable = path.join(
        'packages',
        'Fixie',
        'lib',
        'net45',
        'Fixie.Console.exe'
    );

    var dll = path.join(
        'src',
        'Storyteller.Testing',
        'bin',
        target,
        'Storyteller.Testing.dll'
    );

    var exec = require('child_process').execSync;

    var cmd = executable + ' ' + dll + ' --NUnitXml TestResult.xml';
	console.log('Running: ' + cmd);

	var output = exec(cmd);
	console.log(output.toString());
}