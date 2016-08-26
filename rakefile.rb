COMPILE_TARGET = ENV['config'].nil? ? "debug" : ENV['config']
RESULTS_DIR = "results"
BUILD_VERSION = '3.0.0'

NUGET_KEY = ENV['api_key']

include FileUtils
include FileTest

tc_build_number = ENV["BUILD_NUMBER"]
build_revision = tc_build_number || Time.new.strftime('5%H%M')
build_number = "#{BUILD_VERSION}.#{build_revision}"
BUILD_NUMBER = build_number 

task :ci => [:default, :integration_test, :publish]

task :default => [:test, :mocha]

desc "Prepares the working directory for a new build"
task :clean do
	#TODO: do any other tasks required to clean/prepare the working directory
	FileUtils.rm_rf RESULTS_DIR
	FileUtils.rm_rf 'artifacts'
	Dir.mkdir 'artifacts'

	Dir.mkdir RESULTS_DIR
end

desc "Update the version information for the build"
task :version do
  asm_version = build_number
  
  begin
    commit = `git log -1 --pretty=format:%H`
  rescue
    commit = "git unavailable"
  end
  puts "##teamcity[buildNumber '#{build_number}']" unless tc_build_number.nil?
  puts "Version: #{build_number}" if tc_build_number.nil?
  
  options = {
	:description => 'Storyteller -- Executable Specifications and Living Documents for .Net',
	:product_name => 'Storyteller',
	:copyright => 'Copyright 2008-2015 Jeremy D. Miller, Steve Matney, Ron Lloyd, et al. All rights reserved.',
	:trademark => commit,
	:version => asm_version,
	:file_version => build_number,
	:informational_version => asm_version
	
  }
  
  puts "Writing src/CommonAssemblyInfo.cs..."
	File.open('src/CommonAssemblyInfo.cs', 'w') do |file|
		file.write "using System.Reflection;\n"
		file.write "using System.Runtime.InteropServices;\n"
		file.write "[assembly: AssemblyProduct(\"#{options[:product_name]}\")]\n"
		file.write "[assembly: AssemblyCopyright(\"#{options[:copyright]}\")]\n"
		file.write "[assembly: AssemblyTrademark(\"#{options[:trademark]}\")]\n"
		file.write "[assembly: AssemblyVersion(\"#{options[:version]}\")]\n"
		file.write "[assembly: AssemblyFileVersion(\"#{options[:file_version]}\")]\n"
		file.write "[assembly: AssemblyInformationalVersion(\"#{options[:informational_version]}\")]\n"
	end
end

desc 'Compile the code'
task :compile => [:npm, :clean, :version] do
	sh "dotnet restore src/Storyteller.Testing"
	sh "dotnet restore src/Storyteller.Samples"
	sh "dotnet restore src/Specifications"
	sh "dotnet restore src/Samples"
	sh "dotnet build src/Storyteller.Testing"
end

desc 'Run the unit tests'
task :test => [:compile] do
	sh "dotnet test src/Storyteller.Testing"
end

desc 'Build Nuspec packages'
task :pack => [:compile] do
	sh "dotnet pack src/Storyteller --output artifacts --version-suffix #{build_revision}"
end

task :publish => [:pack] do
	#sh "nuget.exe push artifacts/Storyteller.#{build_number}-alpha.nupkg #{NUGET_KEY} "
end


desc "Delegates to npm install and builds the javascript for diagnostics"
task :npm do
	sh 'npm install'
	sh 'npm run build-client'
end

desc "Runs all the client side tests"
task :mocha => [:npm] do
	sh 'npm run test'
end

desc "Run the storyteller specifications"
task :storyteller => [:compile] do
	sh "dotnet run --project src/ST run src/FubuMVC.IntegrationTesting --retries 3 --results-path artifacts/stresults.htm --build #{COMPILE_TARGET}"
end

desc "Run the storyteller specifications"
task :samples do
	sh "dotnet run --project src/ST open src/Samples"
end

desc "Run the storyteller specifications"
task :specifications do
	sh "dotnet run --project src/ST open src/Specifications"
end



desc "Launches VS to the Storyteller solution file"
task :sln do
	sh "start src/Storyteller.sln"
end

def copyOutputFiles(fromDir, filePattern, outDir)
	Dir.glob(File.join(fromDir, filePattern)){|file|		
		copy(file, outDir) if File.file?(file)
	} 
end

def waitfor(&block)
	checks = 0
	until block.call || checks >10 
		sleep 0.5
		checks += 1
	end
	raise 'waitfor timeout expired' if checks > 10
end

def cleanDirectory(dir)
	if exists?(dir)
		puts 'Cleaning directory ' + dir
		FileUtils.rm_rf dir;
		waitfor { !exists?(dir) }
	end
	
	if dir == 'artifacts'
		Dir.mkdir 'artifacts'
	end
end

def cleanFile(file)
	File.delete file unless !File.exist?(file)
end
