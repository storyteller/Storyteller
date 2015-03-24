var gulp = require('gulp');

gulp.task('default', ['test']);


var args = require('yargs').argv,
    assemblyInfo = require('gulp-dotnet-assembly-info');

var buildNumber = args.buildNumber || '0';
var buildVersion = '3.0.0.' + buildNumber;
var revision = args.git || 'unknown';
var config = args.config || 'Debug';

gulp.task('assemblyInfo', function() {
    return gulp
        .src('src/CommonAssemblyInfo.cs')
        .pipe(assemblyInfo({
            version: buildVersion,
            fileVersion: buildVersion,
            informationalVersion: revision,
            company: 'Jeremy D. Miller, Brandon Behrens, Andrew Kharlamov'
        }))
        .pipe(gulp.dest('src'));
});

var child_process = require('child_process');



var msbuild = require('gulp-msbuild');

gulp.task('build', ['assemblyInfo'], function() {
    return gulp
        .src('**/*.sln')
        .pipe(msbuild({
            toolsVersion: 12.0,
            targets: ['Clean', 'Build'],
            errorOnFail: true,
            stdout: true,
            configuration: config
        }));
});

gulp.task('test', ['build'], function(){
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
        config,
        'Storyteller.Testing.dll'
    );

    var output = child_process.spawnSync(executable, [dll, '--NUnitXml', 'TestResult.xml']);

    console.log(output.stdout.toString());

    if (output.status != 0) throw new Error('Fixie tests failed!');
});

