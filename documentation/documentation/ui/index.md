<!--Title:The Specification Editor and Interactive Runner-->
<!--Url:ui-->


<div class="alert alert-success" role="alert"><strong>Note!</strong> As of Storyteller 4.0, you can use the editing tool on Windows on .Net 4.6 projects,
and any platform that supports the new CoreCLR.</div>

Storyteller comes with an embedded web application to author and interactively execute specifications with a rich client. To launch the application, use the `dotnet storyteller open` 
command described below. See <[linkto:documentation/getting_started]> for more information about the command line tooling tool distributed with Storyteller.

For specific instructions on using the interactive specification tool, see the following topics:

<[TableOfContents]>

To launch the specification editor from a command line, type the command `st open [path]` where _[path]_ is the project directory of the specification project you want to load. Other options to control how the testing AppDomain is constructed and other explicit overrides are described below:

## dotnet storyteller open

<[command-usage:dotnet storyteller/open]>

<[/command-usage:dotnet storyteller/open]>


