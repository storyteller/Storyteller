<!--Title:Getting Started-->
<!--Url:getting_started-->

<div class="alert alert-success" role="alert"><strong>Storyteller runs everywhere now!</strong> Storyteller 4.0 supports the CoreCLR and now runs on Mac OSX or any other operating system that has
CoreCLR support.
</div>

<div class="alert alert-info" role="alert"><strong>Note!</strong> Storyteller 4.0 fully embraces the new dotnet CLI with an additional package for
using Storyteller 4.0 with "classic" csproj files. There is a separate section for information about using Storyteller 3.0 as the setup steps
have changed</div>

This document describes how to install and intialize your Storyteller specfication project. For more specific documentation, see:

* <[linkto:documentation/using/ci]>
* <[linkto:documentation/ui]>

If you prefer to just see working code, take a look at the [Storyteller Quickstart repository](https://github.com/storyteller/quickstarts) to see minimal
Storyteller setups for projects using Netstandard2 applications with the [dotnet CLI](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/) or .Net 4.6 projects using the classic *.csproj file format.

You can find Storyteller 5 used in the [Jasper open source project](http://github.com/jasperfx/jasper).

You can also find Storyteller 4 used in these open source projects:

* [Marten](https://github.com/JasperFx/marten)
* [Alba](https://github.com/JasperFx/alba)


## Storyteller 5.0

For Netstandard 2 projects using Visual Studio.Net 2017 and the dotnet cli, we strongly recommend using Storyteller 5.0.

To get started on a new Storyteller 5.0 specification project, this is the minimal csproj file with the correct references
and the `dotnet storyteller` command line setup. Just save exactly this text as `MYPROJECT.csproj` where "MYPROJECT" is the name
you want to use for your new Storyteller specification project.


```
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>netcoreapp2.0</TargetFramework>
    <OutputType>EXE</OutputType>
  </PropertyGroup>
  <ItemGroup>
    <DotNetCliToolReference Include="dotnet-storyteller" Version="5.0.0" />
  </ItemGroup>
  <ItemGroup>
    <PackageReference Include="StoryTeller" Version="5.0.0" />
  </ItemGroup>
</Project>
```

See the [updated quickstart project for dotnet cli usage](https://github.com/storyteller/quickstarts/tree/master/dotnet-cli) as well.

From the command line in your project directory, you now have two commands (after running `dotnet restore` at least once):

1. `dotnet run` -- runs all the specifications in the console. This is what you'll
   use in your continuous integration builds. See <[linkto:documentation/using/ci]> for more information on all the sub commands.
1. `dotnet storyteller` -- opens the Storyteller specification editor application for your project. See <[linkto:documentation/ui]> for more information



## Storyteller 3 & 4

In Storyteller 3.0 and 4.0, it consists of two logical parts:

1. The actual Storyteller library you need to reference in order to write specifications
1. A command line tool that runs Storyteller specifications and provides the interactive specification website tool 
   (ST.exe in 3.0, `dotnet storyteller` in 4.0, or `StorytellerRunnerCsProj` for 4.0 + classic csproj files).


## Storyteller 4.0

<div class="alert alert-info" role="alert"><strong>Note!</strong> This section applies to .Net projects that use either project.json 
project files or the new MSBuild file formats with Visual Studio 2017. This section will not apply to projects that use the original
*.csproj build system. 
</div>

If your codebase has supports the new dotnet cli, the setup steps are to:

1. Create a new **console application** project for the Storyteller specifications in your solution
1. Install the `Storyteller` Nuget as a dependency
1. Add the `dotnet-storyteller` Nuget as a CLI tool extension 
1. In the `Program.Main()` entry point of your Storyteller specification project, use the `StorytellerAgent` class to connect
   your system under test to the Storyteller engine with code like this:

<[sample:Program.Main.Default]>

For more complex [system under test's](https://en.wikipedia.org/wiki/System_under_test), you will probably want to use a custom `ISystem` like this:

<[sample:Program.Main.CustomSystem]>

See <[linkto:documentation/engine/system_under_test]> for more information.

There is a [sample quickstart project on GitHub](https://github.com/storyteller/quickstarts/tree/master/dotnet-cli) that shows a 
minimal Storyteller setup for the new dotnet CLI mechanism. 

Using the csproj format [*.csproj]
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp1.0</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Storyteller" Version="*"/>
    <PackageReference Include="dotnet-storyteller" Version="*"/>
    <DotNetCliToolReference Include="dotnet-storyteller" Version="*" />
  </ItemGroup>
</Project>


The [project.json](https://github.com/storyteller/quickstarts/blob/master/dotnet-cli/project.json) file
for that project is this:

```
{
  "version": "1.0.0-*",
  "buildOptions": {
    "emitEntryPoint": true
  },

  "dependencies": {
    "Storyteller": "4.0.0-alpha-463"
  },

  "tools": {
    "dotnet-storyteller": {
      "version": "1.0.0-alpha-463",
      "imports": [ "dnxcore50" ]
    }
  },

  "frameworks": {
    "net46": {},
    "netcoreapp1.0": {
      "dependencies": {
        "Microsoft.NETCore.App": {
          "type": "platform",
          "version": "1.0.1"
        }
      },
      "imports": "dnxcore50"
    }
  }
}
```

Once the steps above are complete, you're ready to start writing <[linkto:documentation/engine/fixtures]> and specifications. To launch the Storyteller
specification runner, open up the command prompt tool of your choice, change the directory to the root of your Storyteller specification project,
and type `dotnet storyteller open` and go to town.

See <[linkto:documentation/using/ci]> for more information on using `dotnet storyteller`.


## Storyteller 4.0 with "classic" MSBuild Projects

You can still use Storyteller 4.0 without the dotnet CLI. In this case, the setup steps are to:

1. Create a new class library for your Storyteller specifications
1. Install the `Storyteller` 4.* Nuget to your new project
1. Install the `StorytellerRunnerCsproj` Nuget *somewhere* in your solution
1. Optionally, you may want to add a script of some sort to delegate to the executable
   distributed in `StorytellerRunnerCsproj` Nuget package like this one:

```
packages\StorytellerRunnerCsproj.4.0.0.463\tools\StorytellerRunner.exe %* --app-domain
```

So that you can issue commands like:

```
# Open the Storyteller editor website tool
storyteller open

# Run the specifications from the command line
storyteller run
```

**Do note that the --app-domain flag is mandatory in order to use Storyteller 4.0 without the dotnet CLI.** 






## Storyteller 3.0

[Storyteller 3 is **only** distributed via Nuget](http://nuget.org/packages/storyteller). Storyteller 3.* only supports classic *.csproj projects
targetting .Net 4.6. To set up a Storyteller 3.* specification project:

1. Create a new **class library** project -- if you opt for a separate project. I frequently reuse the unit testing library for Storyteller specifications
   just to avoid creating additional projects
1. Add a reference to the Storyteller 3.0 Nuget to that project
1. **Optionally**, you can add a custom <[linkto:documentation/engine/system_under_test;title=ISystem]> to your Storyteller specification project. You don't 
   need to do anything explicitly to get Storyteller to pick it up if there is only one `ISystem` class in the codebase. You can override the choice of ISystem used
   through a command line switch.
1. Assuming that you are using Nuget for package management, you might want to add a small script to delegate to the Storyteller command line
   tooling like this little Windows batch file:

```
packages\Storyteller.3.0.1\tools\ST.exe %*
```

So that you can issue commands like:

```
# Open the Storyteller editor website tool
storyteller open

# Run the specifications from the command line
storyteller run
```

Your script will vary from what's above based on your version of Storyteller and the path to your exploded Nuget packages. Protip: the Storyteller team
thinks that [Paket](https://fsprojects.github.io/Paket/) makes this set up simpler.

<div class="alert alert-info" role="alert"><strong>Note!</strong> Storyteller 3.0 is a little more intelligent in how it creates the <code>AppDomain</code> for execution. It is no longer necessary to copy the <code>*.config</code> file to the output directory for the configuration file to be picked up by Storyteller. You're welcome Andrew.
</div>

Unless you specify the configuration file name explicitly with `st run --config [file name]`, Storyteller determines the configuration file for the execution `AppDomain` by first looking for a file named `app.config`, then `web.config` to use as the configuration file when spawning the new `AppDomain`.

For the private bin path of the execution `AppDomain`, Storyteller uses this precedence:
1. If the user uses the `st run [path] --build [Debug/Release]` or `st open [path] --build [Debug/Release]` flag, use that build profile
1. If the folder `/bin/Debug` exists, use that folder as the private bin path
1. If the folder `/bin/Release` exists, use that folder
1. Use `/bin`

My typical workflow with .Net projects is to work locally using the _Debug_ target. Once in a while I may compile to the _Release_ target just to test Nuget publishing locally, but _Debug_ is where most of my work happens. On the build server though, I compile with _Release_ and need Storyteller to execute the specifications using the binaries compiled to the `/bin/Release` folder. Because most of my work is done with _Debug_, but an older set of _Release_ build artifacts may be hanging around on the file system, I have changed to precedence to default to _Debug_.





## Using the Command Line Tools

The command line tools (`ST.exe` in Storyteller 3.0, or `dotnet storyteller` in 4.0, or `StorytellerRunner.exe` without the dotnet CLI)
generally follows Unix idioms for command line usage that tools like `git` or `npm` use for their command line syntax, so:

* `dotnet storyteller` exposes multiple commands identified by the second word of the signature, so `dotnet storyteller run` or `dotnet storyteller open` are valid commands. 
* Optional flags are used like: `--word [value]` or `-w [value]` as a shorthand
* Boolean flags can be used like: `--open` or `-o`. 
* If there are multiple boolean optional flags, the `-abc` usage is the equivalent to `-a -b -c`

You can query the command line usage with the command `dotnet storyteller ?` or `dotnet storyteller help` to see all the commands that are available.

<pre>

----------------------------------------------------------------------------------------------------------------------------------

  Available commands:
----------------------------------------------------------------------------------------------------------------------------------

        convert -> Converts the persisted specifications from the 1.0-3.0 Xml format to the 4.0 markdown format
  dump-fixtures -> Exports all of the Fixture definitions to markdown for review or using within the headless mode
         export -> Exports a visualization of all of the specifications to disk
           open -> Opens the specification editor web tool
            run -> Run a suite of StoryTeller tests
----------------------------------------------------------------------------------------------------------------------------------
</pre>

You can also query the exact usage of a single command with the syntax like `st ? run` to display the usage of the `st run` command.



## How Storyteller Persists Specifications

Storyteller 4.0 introduces a new (hopefully human readable and editable) markdown based persistence mechanism in place of the old Xml format from Storyteller <= 3.0. 
See <[linkto:documentation/converting]> or <[linkto:documentation/language/markdown]> for more information.

Storyteller 4.0 persists specifications as markdown files in the `/Specs` folder directly under the root of your Storyteller project, with subfolders to represent the suite structure. Storyteller will create this directory on demand if it does not already exist the first time it needs to persist a new specification or top level suite. Storyteller will happily create this folder for you if it does not already exist.








