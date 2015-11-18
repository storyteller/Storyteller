<!--Title:Getting Started-->
<!--Url:getting_started-->

<div class="alert alert-warning" role="alert"><strong>Warning!</strong> As of now, Storyteller 3.0 is only running on Windows. Before Storyteller 3.0 is officially released, we will ensure that Storyteller 3.0 is completely usable on OSX and Linux via Mono and/or the CoreCLR.
</div>

<div class="alert alert-info" role="alert"><strong>Note!</strong> Making the "getting started" story much simpler and easier than earlier versions has been a major goal of the Storyteller 3.0 release. The old "project.xml" file from Storyteller 1-2 is now gone. 3.0 has replaced the upfront configuration with a combination of out of the box defaults and command line flags for explicit overrides.
</div>

This document describes how to install and intialize your Storyteller specfication project. For more specific documentation, see:
* <[linkto:documentation/ci]>
* <[linkto:documentation/ui]>

## Installing Storyteller

At this time (3.0 alpha), [Storyteller is **only** distributed via Nuget](http://nuget.org/packages/storyteller) with the mandatory command line tool described below included into the `/tools` directory. 

For the final release and a subsequent move to the new DNX platform, the team is considering using Chocolately on Windows and Brew on OSX to distribute the `ST.exe` command line tool. Depending on the timeline, the new command line support in the DNX platform may end up being the best solution in the future.

## Storyteller's Architecture

Storyteller consists of just two deployed elements:
1. The `Storyteller.dll` library that you must reference to implement <[linkto:documentation/engine/fixtures;title=Fixture's]>, <[linkto:documentation/engine/grammars;title=Grammars]>, and any custom <[linkto:documentation/engine/system_under_test;title=ISystem]>.
1. The `ST.exe` command line tool in the `/tools` folder of the distributed Nuget that implements a batch specification runner, an embedded web application ("The Specification Editor") for interactive work against the specifications, and tooling to author and publish static documentation (not coincidentally what was used to create this website).



## Using the Command Line Tool

The `ST.exe` tool generally follows Unix idioms for command line usage that tools like `git` or `npm` use for their command line syntax, so:
* `ST.exe` exposes multiple commands identified by the second word of the signature, so `st run` or `st open` are valid commands. 
* Optional flags are used like: `--word [value]` or `-w [value]` as a shorthand
* Boolean flags can be used like: `--open` or `-o`. 
* If there are multiple boolean optional flags, the `-abc` usage is the equivalent to `-a -b -c`

You can query the command line usage with the command `st ?` or `st help` to see all the commands that are available.

<pre>
    doc-export -> Export a documentation project to static html
       doc-run -> Run the documentation in a live mode
      doc-seed -> Seeds a topic file structure from an outline.txt file
          open -> Opens the specification editor web tool
           run -> Run a suite of StoryTeller tests
</pre>

You can also query the exact usage of a single command with the syntax like `st ? run` to display the usage of the `st run` command.



## Enabling Storyteller Execution

The only mandatory thing you have to do to setup a Storyteller project today is to add a reference to the `Storyteller.dll` to the .Net project that is going to hold your `Fixture` and the optional `ISystem` class. Technically, Storyteller does not depend on any actual Visual Studio.Net project file or VS.Net itself but you will typically want to use a VS.Net project just for convenience. 

Like most .Net testing tools, the Storyteller batch running and interative specification editor tools have to open a second `AppDomain` with "shadow copying" enabled where the actual specification execution takes place. Storyteller assumes that the project directory is layed out in the idiomatic VS.Net manner:

* An application configuration file at the root.
* A subdirectory for the binary assemblies -- this subdirectory **must** contain the `Storyteller.dll` assembly. 
* A `/Specs` folder where Storyteller will persist the actual specifications (more on this below). 

<div class="alert alert-info" role="alert"><strong>Note!</strong> Storyteller 3.0 is a little more intelligent in how it creates the <code>AppDomain</code> for execution. It is no longer necessary to copy the <code>*.config</code> file to the output directory for the configuration file to be picked up by Storyteller. You're welcome Andrew.
</div>

Unless you specify the configuration file name explicitly with `st run --config [file name]`, Storyteller determines the configuration file for the execution `AppDomain` by first looking for a file named `app.config`, then `web.config` to use as the configuration file when spawning the new `AppDomain`.

For the private bin path of the execution `AppDomain`, Storyteller uses this precedence:
1. If the user uses the `st run [path] --build [Debug/Release]` or `st open [path] --build [Debug/Release]` flag, use that build profile
1. If the folder `/bin/Debug` exists, use that folder as the private bin path
1. If the folder `/bin/Release` exists, use that folder
1. Use `/bin`

My typical workflow with .Net projects is to work locally using the _Debug_ target. Once in a while I may compile to the _Release_ target just to test Nuget publishing locally, but _Debug_ is where most of my work happens. On the build server though, I compile with _Release_ and need Storyteller to execute the specifications using the binaries compiled to the `/bin/Release` folder. Because most of my work is done with _Debug_, but an older set of _Release_ build artifacts may be hanging around on the file system, I have changed to precedence to default to _Debug_.



<div class="alert alert-info" role="alert"><strong>Note!</strong> The <code>AppDomain</code> mechanics discussed above will not apply when Storyteller is moved to the DNX platform. The Storyteller team is not quite sure about the details of how Storyteller will work on DNX, but we are committed to making that happen in the 2015 calendar year.
</div>


## How Storyteller Persists Specifications

Storyteller persists specifications as Xml files in the `/Specs` folder directly under the root of your Storyteller project, with subfolders to represent the suite structure. Storyteller will create this directory on demand if it does not already exist the first time it needs to persist a new specification or top level suite.

<div class="alert alert-info" role="alert"><strong>Note!</strong> Why, you might ask, use Xml files and not JSON, YAML, or even an inferred Javascript syntax that we've kicked around over the years? The main answer is simply backward compatibility with Storyteller 1-2. The primary developer on Storyteller also has the uncool opinion that Xml formats are easier to edit by hand for deeply nested document structures than JSON. The hope of the Storyteller team is that the new 3.0 user interface for editing specifications is good enough that users do not often feel the need to get into the raw Xml.
</div>







