require 'json'

APIKEY = ENV['api_key'].nil? ? '' : ENV['api_key']

TEMPLATE_VERSION = "1.0.0"

BUILD_VERSION = "5.1.0"
COMPILE_TARGET = ENV['config'].nil? ? "debug" : ENV['config']
RESULTS_DIR = "results"
tc_build_number = ENV["APPVEYOR_BUILD_NUMBER"]
build_revision = tc_build_number || Time.new.strftime('5%H%M')
build_number = "#{BUILD_VERSION}.#{build_revision}"
BUILD_NUMBER = build_number

CI = ENV["CI"].nil? ? false : true

task :ci => [:default, :specifications, :pack, :appVeyorPush]

task :default => [:jstests, :test, :templates]


desc "Prepares the working directory for a new build"
task :clean do
	#TODO: do any other tasks required to clean/prepare the working directory
	FileUtils.rm_rf RESULTS_DIR
	FileUtils.rm_rf 'artifacts'

	mkdir 'artifacts'
end


desc "Installs npm packages and builds the bundles"
task :npm do
	sh "yarn install"
	sh "yarn run build-client" unless CI
	sh "yarn run build-client:prod" if CI
end

desc "Runs Javascript Tests"
task :jstests => [:npm] do
	sh "yarn run test" unless CI
	sh "yarn run test:prod" if CI
end


desc 'Compile the code'
task :compile => [:clean, :npm] do
	sh "dotnet restore src"
end

desc 'Run the unit tests'
task :test => [:compile] do
  Dir.mkdir RESULTS_DIR

  platform = OS.mac? ? "-f netcoreapp2.0" : ""

  sh "dotnet test src/Storyteller.Testing/Storyteller.Testing.csproj -f netcoreapp2.0"
  sh "dotnet test src/StorytellerDocGen.Testing/StorytellerDocGen.Testing.csproj #{platform}"
  #sh "dotnet test src/IntegrationTests --framework net46"
  #sh "dotnet test src/IntegrationTests --framework netcoreapp2.0"

  #sh "dotnet run --project src/Specifications/Specifications.csproj --framework netcoreapp2.0 -- run src/Specifications --validate"

end

desc 'Only runs .Net related tests'
task :dotnet do
	sh "dotnet test src/Storyteller.Testing --framework netcoreapp2.0"
	sh "dotnet test src/StorytellerDocGen.Testing"
end


desc 'Build and test templates'
task :templates => [:clean] do
    

	Dir.chdir "templates/Storyteller.Specifications" do
		sh "nuget pack storytellerspecs.nuspec -Version #{TEMPLATE_VERSION}"
	end

	if Dir.exists? 'template-target'
		FileUtils.rm_rf 'template-target'
	end
	Dir.mkdir 'template-target'

	Dir.chdir "template-target" do
		sh "dotnet new -i ../templates/Storyteller.Specifications/Storyteller.Specifications.#{TEMPLATE_VERSION}.nupkg"
		sh "dotnet new storyteller"
		sh "dotnet restore"
		sh "dotnet run -- run"
	end
end


desc 'Build Nuspec packages'
task :pack do
	sh "dotnet pack src/Storyteller -o ./../../artifacts --configuration Release"
	sh "dotnet pack src/Storyteller.AspNetCore -o ./../../artifacts --configuration Release --version-suffix #{build_revision}"
	sh "dotnet pack src/Storyteller.Redux -o ./../../artifacts --configuration Release --version-suffix #{build_revision}"
	sh "dotnet pack src/Storyteller.RDBMS -o ./../../artifacts --configuration Release --version-suffix #{build_revision}"
	sh "dotnet pack src/Storyteller.TestRail -o ./../../artifacts --configuration Release --version-suffix #{build_revision}"
	sh "dotnet pack src/dotnet-storyteller -o ./../../artifacts --configuration Release"
	sh "dotnet pack src/dotnet-stdocs -o ./../../artifacts --configuration Release "
end

desc "Pushes the Nuget's to MyGet"
task :push do
	#sh "nuget.exe push artifacts/*.nupkg -ApiKey #{APIKEY} -NonInteractive -Source https://www.myget.org/F/storyteller/ "
end

desc "Pushes the Nuget's to AppVeyor"
task :appVeyorPush do
  if !CI
    puts "Not on CI, skipping artifact upload"
    next
  end

  sh "appveyor PushArtifact templates/Storyteller.Specifications/Storyteller.Specifications.#{TEMPLATE_VERSION}.nupkg"

  Dir.glob('./artifacts/*.*') do |file|
    full_path = File.expand_path file
    full_path = full_path.gsub('/', '\\') if OS.windows?
    cmd = "appveyor PushArtifact #{full_path}"
    puts cmd
    sh cmd
  end
end

desc "Launches VS to the StructureMap solution file"
task :sln do
	sh "start src/Storyteller.sln"
end

"Gets the documentation assets ready"
task :prepare_docs => [:compile] do
	cp 'src/dotnet-storyteller/embed.js', 'documentation/content'
	cp 'client/public/stylesheets/storyteller.css', 'documentation/content/stylesheets'

	sh "dotnet run --project src/Samples/Samples.csproj --framework netcoreapp2.0 -- run --dump documentation/content/samples.specs.json --path src/Samples"

	sh 'dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.0 -- dump-usages "dotnet storyteller" "documentation/content/dotnet storyteller.usage.xml"'
	sh 'dotnet run --project src/Samples/Samples.csproj --framework netcoreapp2.0 -- dump-usages "dotnet run --" "documentation/content/agent.usage.xml"'
	sh 'dotnet run --project src/dotnet-stdocs/dotnet-stdocs.csproj --framework netcoreapp2.0 -- dump-usages "dotnet stdocs" "documentation/content/dotnet stdocs.usage.xml"'
end

"Launches the documentation project in editable mode"
task :docs => [:prepare_docs] do
	sh "dotnet run --project src/dotnet-stdocs/dotnet-stdocs.csproj --framework netcoreapp2.0 -- run -v #{BUILD_VERSION} --directory ././documentation"
end

"Exports the documentation to storyteller.github.io - requires Git access to that repo though!"
task :publish => [:prepare_docs] do
	if Dir.exists? 'doc-target'
		FileUtils.rm_rf 'doc-target'
	end

	sh "dotnet restore src/StoryTeller.sln"

	Dir.mkdir 'doc-target'
	sh "git clone https://github.com/storyteller/storyteller.github.io.git doc-target"


	sh "dotnet run --project src/dotnet-stdocs/dotnet-stdocs.csproj --framework netcoreapp2.0 -- export doc-target Website --version #{BUILD_VERSION}"

	Dir.chdir "doc-target" do
		sh "git add --all"
		sh "git commit -a -m \"Documentation Update for #{BUILD_VERSION}\" --allow-empty"
		sh "git push origin master"
	end




end

"Run the spec editor w/ samples"
task :samples do
	sh "dotnet run --framework netcoreapp2.0 --project src/dotnet-storyteller/dotnet-storyteller.csproj --path src/Storyteller.Samples"
end

"Run the spec editor w/ samples"
task :testbed do
	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework net46 --path src/Testbed"
end

"Run the spec editor w/ the documentation samples"
task :docsamples do
	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.1 --path src/Samples"
end

"Run the spec editor w/ the documentation samples"
task :rundocsamples do
	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.1 run src/Samples"
end

"Run the spec editor for Storyteller.Samples with hot reloading"
task :harness do
	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.0 --path src/Storyteller.Samples --hotreload"
end

"Run the specs against the documentation generation"
task :specifications do
	sh "dotnet run --project src/Specifications/Specifications.csproj --framework netcoreapp2.1 -- run"
end

"Run the database sample specs"
task :dbsamples do

	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.0 open src/DatabaseSamples"
end

"Run the selenium sample specs"
task :seleniumsamples do
	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.0 open src/Storyteller.Selenium.Samples"
end

"Run the aspnetcore sample specs"
task :aspnetcoresamples do
	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.0 --path src/Storyteller.AspNetCore.Samples -- open"
end

"Generate the database sample results"
task :dbsamplesresults do
	sh "dotnet run --project src/dotnet-storyteller/dotnet-storyteller.csproj --framework netcoreapp2.0 -- run src/DatabaseSamples --dump documentation/content/rdbms.specs.json"
end

def load_project_file(project)
  File.open(project) do |file|
    file_contents = File.read(file, :encoding => 'bom|utf-8')
    JSON.parse(file_contents)
  end
end

module OS
  def OS.windows?
    (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
  end

  def OS.mac?
   (/darwin/ =~ RUBY_PLATFORM) != nil
  end

  def OS.unix?
    !OS.windows?
  end

  def OS.linux?
    OS.unix? and not OS.mac?
  end
end
