var gulp = require('gulp');

gulp.task('default', []);

gulp.task('ci', []);

var args = require('yargs').argv,
    assemblyInfo = require('gulp-dotnet-assembly-info');


gulp.task('assemblyInfo', function() {
	// TODO -- get the build number from CI if it exists

	var buildVersion = '3.0.0';

	// TODO -- get the git commit version in here

    return gulp
        .src('src/CommonAssemblyInfo.cs')
        .pipe(assemblyInfo({
            version: buildVersion,
            fileVersion: buildVersion,
        }))
        .pipe(gulp.dest('src'));
});

var run = require('gulp-run');

gulp.task('restore', function(){
    run('paket restore').exec();
});

var msbuild = require('gulp-msbuild');

// TODO -- need to make it smart enough to use Debug later
// and override at CI time
gulp.task('build', ['assemblyInfo', 'restore'], function() {
    return gulp
        .src('**/*.sln')
        .pipe(msbuild({
            toolsVersion: 12.0,
            targets: ['Clean', 'Build'],
            errorOnFail: true,
            stdout: true,
            configuration: 'Debug'
        }));
});

var nunit = require('gulp-nunit-runner');

gulp.task('test', ['build'], function () {
    return gulp
        .src(['**/bin/**/StoryTeller.Testing.dll'], { read: false })
        .pipe(nunit({
        	executable: 'packages/NUnit.Runners/tools/nunit-console.exe'
            //teamcity: true
        }));
});