require 'erb'

class NUnitRunner
	include FileTest

	def initialize(paths)
		@sourceDir = paths.fetch(:source, 'source')
		@resultsDir = paths.fetch(:results, 'results')
		@compileTarget = paths.fetch(:compilemode, 'debug')

		if ENV["teamcity.dotnet.nunitlauncher"] # check if we are running in TeamCity
			# We are not using the TeamCity nunit launcher. We use NUnit with the TeamCity NUnit Addin which needs tO be copied to our NUnit addins folder
			# http://blogs.jetbrains.com/teamcity/2008/07/28/unfolding-teamcity-addin-for-nunit-secrets/
			# The teamcity.dotnet.nunitaddin environment variable is not available until TeamCity 4.0, so we hardcode it for now
			@teamCityAddinPath = ENV["teamcity.dotnet.nunitaddin"] ? ENV["teamcity.dotnet.nunitaddin"] : 'c:/TeamCity/buildAgent/plugins/dotnetPlugin/bin/JetBrains.TeamCity.NUnitAddin-NUnit'
			cp @teamCityAddinPath + '-2.4.7.dll', 'tools/nunit/addins'
		end
		
		@nunitExe = 'tools/nunit/nunit-console.exe /nologo /nothread'
	end
	
	def executeTests(assemblies, additionalCommandLine='')
		Dir.mkdir @resultsDir unless exists?(@resultsDir)
		
		assemblies.each do |assem|
			file = File.expand_path("#{@sourceDir}/#{assem}/bin/#{@compileTarget}/#{assem}.dll")
			sh "#{@nunitExe} #{file} #{additionalCommandLine}"
		end
	end
end

class MSBuildRunner
	def self.compile(attributes)
		compileTarget = attributes.fetch(:compilemode, 'debug')
	    solutionFile = attributes[:solutionfile]
	    
	    attributes[:projFile] = solutionFile;
	    attributes[:properties] = ["Configuration=#{compileTarget}"];
	    attributes[:extraSwitches] = ["maxcpucount:2", "v:m", "t:rebuild"]
		
		self.runProjFile(attributes);
	end
	
	def self.runProjFile(attributes)
		version = attributes.fetch(:clrversion, 'v4.0.30319')
		compileTarget = attributes.fetch(:compilemode, 'debug')
	    projFile = attributes[:projFile]
		
		frameworkDir = File.join(ENV['windir'].dup, 'Microsoft.NET', 'Framework', version)
		msbuildFile = File.join(frameworkDir, 'msbuild.exe')
		
		properties = attributes.fetch(:properties, [])
		
		switchesValue = ""
		
		properties.each do |prop|
			switchesValue += " /property:#{prop}"
		end	
		
		extraSwitches = attributes.fetch(:extraSwitches, [])	
		
		extraSwitches.each do |switch|
			switchesValue += " /#{switch}"
		end	
		
		targets = attributes.fetch(:targets, [])
		targetsValue = ""
		targets.each do |target|
			targetsValue += " /t:#{target}"
		end
		
		sh "#{msbuildFile} #{projFile} #{targetsValue} #{switchesValue}"
	end
end

class DocuRunner
	def self.document(attributes)
		assemblies = attributes.fetch(:assemblies, [])
		output = attributes[:output]
		templates = attributes[:templates]
		
		outputArg = (output.nil?) ? '' : "--output=#{output}"
		templatesArg = (templates.nil?) ? '' : "--templates=#{templates}"
	
		sh "tools\\docu\\docu.exe #{assemblies.join(' ')} #{outputArg} #{templatesArg}" unless assemblies.empty?
	end
end

class AspNetCompilerRunner
	def self.compile(attributes)
		
		webPhysDir = attributes.fetch(:webPhysDir, '')
		webVirDir = attributes.fetch(:webVirDir, '')
		
		frameworkDir = File.join(ENV['windir'].dup, 'Microsoft.NET', 'Framework', 'v4.0.30319')
		aspNetCompiler = File.join(frameworkDir, 'aspnet_compiler.exe')

		sh "#{aspNetCompiler} -nologo -p #{webPhysDir} -v #{webVirDir}"
	end
end

class AsmInfoBuilder
	def initialize(buildnumber, properties)
		@properties = properties;
		
		@properties['Version'] = @properties['InformationalVersion'] = buildnumber;
	end


	
	def write(file)
		template = %q{
using System;
using System.Reflection;
using System.Runtime.InteropServices;

<% @properties.each {|k, v| %>
[assembly: Assembly<%=k%>Attribute("<%=v%>")]
<% } %>
		}.gsub(/^    /, '')
		  
	  erb = ERB.new(template, 0, "%<>")
	  
	  File.open(file, 'w') do |file|
		  file.puts erb.result(binding) 
	  end
	end
end

class InstallUtilRunner
	def installServices(services, parameters)
		services.each do |service|
			params = ""
			parameters.each_pair {|key, value| params = params + "/" + key + "=" + value + " "}
			sh "tools/installutil /i #{params} #{service}"
		end
	end
	
	def uninstallServices(services)
		services.each do |service|
			begin
				sh "tools/installutil /u #{service}"
			rescue Exception => e
				puts 'IGNORING ERROR: ' + e
			end
		end
	end
end