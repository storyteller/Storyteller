var gulp = require('gulp');

gulp.task('default', ['test']);

// 
gulp.task('ci', ['test']);

var args = require('yargs').argv,
    assemblyInfo = require('gulp-dotnet-assembly-info');

var buildNumber = args.buildNumber || '0';
var buildVersion = '3.0.0.' + buildNumber;
var revision = args.git || 'unknown';

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

var run = require('gulp-run');

gulp.task('restore', function(){
    run('paket restore').exec();
});

var msbuild = require('gulp-msbuild');

gulp.task('build', ['assemblyInfo', 'restore'], function() {
	var config = args.config || 'Debug';

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

var nunit = require('gulp-nunit-runner');

gulp.task('test', ['build'], function () {
    return gulp
        .src(['**/bin/**/StoryTeller.Testing.dll'], { read: false })
        .pipe(nunit({
        	executable: 'packages/NUnit.Runners/tools/nunit-console.exe'
        }));
});



gulp.task('pack', ['build'], function(){
	var cmd = 'ripple local-nuget -v ' + buildVersion;

	run(cmd).exec();
});

gulp.task('publish', ['test'], function(){
	var cmd = 'ripple publish -v ' + buildVersion + ' ' + args.apikey + ' --server https://www.myget.org/F/fubumvc-edge';

	run(cmd).exec();
});

gulp.task('sln', function(){
	run('src/Storyteller.sln').exec();
});