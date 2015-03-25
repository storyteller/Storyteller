var path = require('path');
var fs = require('fs');

function findPath() {
  var folder = path.join('C:', 'Program Files', 'MSBuild', '12.0', 'Bin/MSBuild.exe');
  if (fs.exists(folder)){
    return folder;
  }
  else {
    return path.join('C:', 'Program Files (x86)', 'MSBuild', '12.0', 'Bin/MSBuild.exe');
  }

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

