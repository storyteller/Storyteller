var path = require('path');
var fs = require('fs');

function findPath() {
  // msbuild = '"C:\Program Files (x86)\MSBuild\14.0\Bin\msbuild.exe"'
  var file = path.join('C:', 'Program Files (x86)', 'MSBuild', '14.0', 'Bin', 'MSBuild.exe');
  if (fs.existsSync(file)) return file;

  console.log('Could not find ' + file + ', falling through');

  file = path.join('C:', 'Program Files', 'MSBuild', '14.0', 'Bin/MSBuild.exe');
  if (fs.existsSync(file)){
    return file;
  }

  console.log('Could not find ' + file + ', falling through');



  return path.join('C:', 'Program Files (x86)', 'MSBuild', '12.0', 'Bin/MSBuild.exe');


};

var exec = require('child_process').spawnSync;

function ilrepack(target){
  // ILMerge.exe /out:src/StoryTeller/bin/release/StoryTeller.dll /lib:src/StoryTeller/bin/release /target:library /targetplatform:v4 /internalize /ndebug src/StoryTeller/bin/release/StoryTeller.dll src/StoryTeller/bin/release/Newtonsoft.Json.dll

  var executable = path.join('packages', 'ILRepack', 'tools', 'ILRepack.exe');
  var folder = path.join('src', 'Storyteller', 'bin', target);
  var lib = '/lib:' + folder;
  
  var out = '/out:' + path.join(folder, 'Storyteller.dll');

  console.log('ILRepack Newtonsoft, FubuCore, and HtmlTags');
  var output = exec(executable, [lib, out, path.join(folder, 'Storyteller.dll'), path.join(folder, 'Newtonsoft.Json.dll'), path.join(folder, 'Baseline.dll'), path.join(folder, 'HtmlTags.dll'), '/internalize']);
  if (output.status != 0){
    console.log(output.stdout.toString());
    throw new Error('Failed in ilrepack');
  }
}

module.exports = function(target){
  var executable = findPath();
  var sln = path.join('src', 'Storyteller.sln');
  var config = '/property:Configuration=' + target;

  console.log('Compiling...');
  var output = exec(executable, [sln, '/target:Clean,Build', config]);
  if (output.status != 0){
    for (key in output){
      console.log(key + ' = ' + output[key]);
    }

    throw new Error('Failed to compile!');
  }

  ilrepack(target);
}

