var path = require('path');

function findPath() {
  var version = '12.0';

  var is64Bit = true;

  if (version === '12.0' || version === '14.0') {
    var program_files = is64Bit ? 'Program Files (x86)' : 'Program Files';
    return path.join('C:', program_files, 'MSBuild', version, 'Bin/MSBuild.exe');
  }

  var windir = process.env.WINDIR;

  var framework = is64Bit ? 'Framework64' : 'Framework';
  return path.join(windir, 'Microsoft.Net', framework, version, 'MSBuild.exe');
};

module.exports = function(target){
  var exec = require('child_process').execSync;
  var cmd = '"' + findPath() + '" ' 
    + path.join('src', 'Storyteller.sln') 
    + ' /toolsversion:12.0 /target:Clean,Build /property:Configuration='
    + target;


  console.log('Running: ' + cmd);

  var output = exec(cmd);
  console.log(output.toString());
}

