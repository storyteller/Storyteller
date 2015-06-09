<!--Title:The Application Shell-->

## The Navigation Bar

At the top of each page is a navigation bar split into two horizontal lines. The top bar (in black) has these options from left to right:

1. The _Storyteller 3_ name is a link back to the entry page
1. The name of the active <[linkto:documentation/engine/system_under_test]>. If the editor tool was launched with a "profile" from the command line options, that profile will be shown after the system name in parantheses. Clicking the system name will reload the main <[linkto:documentation/ui/spec-explorer;title=specification editor]>.
1. A link to <[linkto:documentation/ui/language;title=Fixtures and Grammars]> to explore and review the specification language of the current project
1. The "Documentation" link will open this website in another tab
1. The _Commands_ menu with options discussed in sections below



## Reloading Specifications

Storyteller *should* automatically reload any specification data that changes on the file system, but to force the editor to reload all the specification data from the file system, use the `Reload All Specs from Disk` menu option under the _Commands_ menu at the top right of the user interface.

## Force the System Under Test to Recycle

Again, Storyteller attempts to recycle the system under test AppDomain anytime it detects changes to files under the `/bin` directory with the `.dll`, `.exe`, or `.config` file extensions, it's not perfect. If the file watching fails to detect changes or you just want to manually force the system under test to reload, use the `Recycle System` command under the _Commands_ menu at the top right of the user interface.

## Clearing all Results

To clear any existing results in the specification editor and explorer views, use the `Clear All Results` menu option under the _Commands_ menu at the top right of the user interface.


## The Status Bar

The second navigation bar in light gray immediately below the navigation bar has links for the system status and help:

1. A link for "Save All Changes" appears if any specifications have local, unsaved changes.
1. The number of specifications in the execution queue. This link is not shown if the queue is empty.
1. A count of grammar errors with the specification language if there are any problems detected. See the section below on Grammar Errors.
1. A link for the status of the system under test. If the system is still being loaded or recycled, the text will read "Recycling" with a spinning icon. If the system is in a ready state, the link text will read something like "Recycled at [time]" telling you when the system was last loaded. Clicking this link will bring up the system properties modal window explained below.
1. _Search_ for a specfication or suite. More information below.
1. The _Help_ link will open a modal window listing the available keyboard shortcuts. Use "ctrl+/" as a shortcut to bring up this window at any time.



## System Properties

Clicking the "Recyled at [time]" menu will bring up a modal dialog explaining how Storyteller has built the testing AppDomain to connect to the system under test that will look like this sample:

<dl class="dl-horizontal" data-reactid=".3l.1.0.0.1:0.0"><dt data-reactid=".3l.1.0.0.1:0.0.0">System Name</dt><dd data-reactid=".3l.1.0.0.1:0.0.1">StoryTeller.Samples.GrammarSystem</dd><dt data-reactid=".3l.1.0.0.1:0.0.2:0">ConfigFile</dt><dd data-reactid=".3l.1.0.0.1:0.0.2:1">C:\code\storyteller\src\Storyteller.Samples\App.config</dd><dt data-reactid=".3l.1.0.0.1:0.0.2:2">BaseDirectory</dt><dd data-reactid=".3l.1.0.0.1:0.0.2:3">C:\code\storyteller\src\Storyteller.Samples</dd><dt data-reactid=".3l.1.0.0.1:0.0.2:4">BinPath</dt><dd data-reactid=".3l.1.0.0.1:0.0.2:5">bin\Debug</dd><dt data-reactid=".3l.1.0.0.1:0.0.2:6">Profile</dt><dd data-reactid=".3l.1.0.0.1:0.0.2:7">Safari</dd></dl>

In previous usage, the selection of the AppDomain configuration file and/or the bin path for loading assemblies has caused some confusion. Use this dialog to see what Storyteller is doing behind the scenes.

If there are any errors encountered when trying to load or recycle the system under test, the "Recycled at [time]" link will turn red with a message that the system is in an invalid state. In that case, the system properties dialog will also show the exception text that Storyteller encountered when the system failed. The link will also show errors when the Storyteller engine fails to create an `IExecutionContext` at the beginning of a specification run. If this happens, Storyteller will not be able to execute any specifications until the system is recycled without any errors.


## Grammar Errors

<div class="alert alert-info" role="alert"><strong>Note!</strong> The Storyteller team recommends that you try to fix any "grammar errors" as soon as they come up. Some errors are only problems in how a grammar would render, but even than can make a specification harder to understand and troubleshoot.
</div>

If there are any errors detected in the specification language when the system under test is loaded or recycled, the status bar will display a link for grammar errors with a count. Clicking this link will take you to a page that lists all the problems detected, which `Fixture` has the error, and if applicable, which `Grammar`. 



## Search for Specifications or Suites

Clicking the "Search" link in the status bar, or using the `ctrl+n` or `ctrl+shift+f` keyboard shortcuts, will bring up a modal dialog with a single typeahead textbox to search for a specification or suite by name. The functionality is patterned after IntelliJ/ReSharper's `ctrl-n` finder function.


## Queue Count and Execution Queue

Clicking the queue count link will open a new page just showing what specifications are executing and queued for execution. This page provides buttons to cancel specifications one by one or to cancel all the specifications in the queue.

## Progress Bar


<div class="alert alert-info" role="alert"><strong>Note!</strong> Creating a better look and feel for the progress bar would be an awesome pull request if anyone is interested;-)
</div>


If a specification is currently executing, a 3rd bar will be shown at the top of the page just below the status bar. The progress bar attempts to show the current progress of any running specification and a button to cancel the current specification. 



