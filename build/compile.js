var path = require('path');
var fs = require('fs');

function findPath() {
  var file = path.join('C:', 'Windows', 'Microsoft.NET', 'Framework', 'v4.0.30319', 'MSBuild.exe');
  if (fs.existsSync(file)) return file;

  console.log('Could not find ' + file + ', falling through');

  file = path.join('C:', 'Program Files', 'MSBuild', '12.0', 'Bin/MSBuild.exe');
  if (fs.existsSync(file)){
    return file;
  }

  console.log('Could not find ' + file + ', falling through');



  return path.join('C:', 'Program Files (x86)', 'MSBuild', '12.0', 'Bin/MSBuild.exe');


};

var exec = require('child_process').execSync;

function ilrepack(target){
  var executable = path.join('packages', 'ILRepack', 'tools', 'ILRepack.exe');
  var lib = path.join('src', 'Storyteller', 'bin', target);
  
  var out = path.join(lib, 'Storyteller.dll');
  var ref = path.join(lib, 'Newtonsoft.Json.dll');

  var cmd = executable + ' /lib:' + lib + ' /out:' + out + ' ' + ref;

  console.log('Running: ' + cmd);

  var output = exec(cmd);
  console.log(output.toString());
}

module.exports = function(target){
  
  var cmd = '"' + findPath() + '" ' 
    + path.join('src', 'Storyteller.sln') 
    + '  /target:Clean,Build /property:Configuration='
    + target;


  console.log('Running: ' + cmd);

  var output = exec(cmd);
  console.log(output.toString());

  ilrepack(target);
}

