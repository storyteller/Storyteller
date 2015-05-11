var path = require('path');

module.exports = function(target){
    var executable = path.join(
        'src',
        'ST',
        'bin',
        target,
        'ST.exe'
    );

    console.log('Running the internal Specifications');

    var exec = require('child_process').spawnSync;

    var output = exec(executable, ['run', 'src/Specifications']);
    console.log(output.stdout.toString());

    if (output.status != 0){
    	throw new Error('Storyteller Specifications failed!');
    }
}