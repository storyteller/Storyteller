function StringBuilder(text){
	this.text = text || '';

	this.appendLine = function(text){
		if (arguments.length == 0){
			this.text = this.text + '\n';
			return;
		}

		this.text = this.text + text + '\n';
	}


	return this;
}

module.exports = function(buildVersion, revision){
	var builder = new StringBuilder();
	builder.appendLine('using System.Reflection;');
	builder.appendLine('using System.Runtime.InteropServices;');
	builder.appendLine('[assembly: AssemblyProduct("Storyteller 3")]');

	// TODO -- append the current year on this
	builder.appendLine('[assembly: AssemblyCopyright("Copyright Jeremy D. Miller, Brandon Behrens, Andrew Kharlamov 2008 - 2015")]');
	builder.appendLine('[assembly: AssemblyVersion("' + buildVersion + '")]');
	builder.appendLine('[assembly: AssemblyFileVersion("' + buildVersion + '")]');
	builder.appendLine('[assembly: AssemblyInformationalVersion("' + revision + '")]');

	var fs = require('fs');
	fs.writeFileSync("src/CommonAssemblyInfo.cs", builder.text);
	console.log('Wrote the CommonAssemblyInfo.cs file for buildVersion ' + buildVersion);
}


