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

    console.log('Starting the Fixie tests');
    var exec = require('child_process').spawnSync;

      var output = exec(executable, [dll, '--NUnitXml', 'TestResult.xml']);
      
      if (output.status != 0){
        console.log(output.stdout.toString());
        throw new Error('Fixie tests failed@');
      }
      else {
        console.log('Fixie tests succeeded!');
      }
}