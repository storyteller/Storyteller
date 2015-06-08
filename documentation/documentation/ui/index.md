<!--Title:The Specification Editor and Interactive Runner-->
<!--Url:ui-->


<div class="alert alert-warning" role="alert"><strong>Warning!</strong> As of now, Storyteller 3.0 is only running on Windows. Additionally, our usage of the Katana web server requires users to have administrative privileges in order to use the embedded web application (there's an annoying workaround to this issue, but we'd rather just replace Katana than describe it). Before Storyteller 3.0 is officially released, we will be replacing Katana with NOWIN -- an alternative that does not require elevated privileges. We will also ensure that Storyteller 3.0 is completely usable on OSX and Linux via Mono.
</div>

Storyteller comes with an embedded web application to author and interactively execute specifications with a rich client. To launch the application, use the `st open` command from described below. See <[linkto:documentation/getting_started]> for more information about the `ST.exe` tool distributed with Storyteller.

For specific instructions on using the interactive specification tool, see the following topics:

<[TableOfContents]>

To launch the specification editor from a command line, type the command `st open [path]` where _[path]_ is the project directory of the specification project you want to load. Other options to control how the testing AppDomain is constructed and other explicit overrides are described below:

## st open

<[command-usage:st/open]>

<[/command-usage:st/open]>


