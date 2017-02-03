<!--title: System Under Test Lifecycle-->

The Storyteller specification editor tool automatically starts up the <[linkto:documentation/engine/system_under_test;title=system under test]> to get 
it ready for running specifications. To make Storyteller more efficient to use, you're able to change your system under test or Fixture code
and have the Storyteller user interface "recycle" the system to be able to run specifications against the new build -- without having to restart
the entire Storyteller UI. In this case, "recycle" means that Storyteller will:

1. Call `ISystem.Dispose()` on the currently running <[linkto:documentation/engine/system_under_test;title=system under test]> to shut it down
   gracefully
1. Shut down the `dotnet run` process if you're using the dotnet CLI or otherwise, unloads the separate `AppDomain` where the system under test was running
1. Start a new process or `AppDomain` for the system under test
1. Bootstrap the newly built version of your system under test and let the Storyteller UI know when it's ready

Do note that the mechanics and timing of events is a little different from using AppDomain's with .Net 4.6 to using the dotnet CLI. See the later topics
in this page for a discussion of both.


## Recycling Manually

To trigger Storyteller to recycle your system on demand, there's a command at the top right of the UI:

<[img:content/images/recycle-system-command.png;Manually trigger a system recycle]>

If you prefer keyboard centric workflows, you can use `ctrl + shift + b` to trigger the system recycling.

## Recycle Status in the UI

To give users some indication of whether or not they're running specifications against the latest version of the local code,
the Storyteller UI shows the time of the last system recycle in the status bar at the top right:

<[img:content/images/recycle-before.png;When the system was last recycled]>

When Storyteller is in the middle of a system recycle, that indication will show as "Recycling..." with a spinner. If the system recycle
fails for any reason, that indication will turn red with "Recycle Failure." If this happens, clicking on the failure will bring up the
captured error.

To see more information about the running system, click on the "Recycled at..." indicator to see the system properties -- but this is
much more important with the AppDomain mechanics.


## Dotnet CLI Mechanics

<div class="alert alert-success"><b>Note!</b> You do not have to worry about compiling your Storyteller project with the dotnet CLI 
because the dotnet run command does that for you.</div>

If you are using the dotnet CLI mechanics (the default in Storyteller 4.0), Storyteller cannot today auto-detect changes to your code
and trigger the recycle command for you. Not to worry though, because the mechanics are somewhat simpler just because of how
the dotnet run command does compilations for you.

Do note that inside an individual specification page, you can choose to recycle the system then run that specification with the
`ctrl + 2` keyboard shortcut. Likewise, you can choose to recycle then start the <[linkto:documentation/ui/stepthrough;title=stepthrough mode]> for that
specification with the `ctrl + 4` keyboard shortcut.


## AppDomain Mechanics

<div class="alert alert-warning"><b>Note!</b> When using the older AppDomain mechanics, you have to do the compilation of your Storyteller project yourself</div>

If you are using Storyteller in its `dotnet storyteller open --app-domain` mode with .Net 4.6, the Storyteller UI watches for any changes
to files with the extensions `*.dll`, `*.exe`, or `*.config` and automatically triggers a system recycle. In effect, what this means is that
if you recompile your Storyteller specification project, the running instance of the Storyteller UI should quickly recycle the system.
It's an imperfect world of course, so sometimes the file system watcher will miss the file change and you might still have to recycle 
the system manually.