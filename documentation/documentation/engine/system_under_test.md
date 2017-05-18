<!--Title:Connecting Storyteller to your System-->
<!--Url:system_under_test-->

Storyteller needs to be able to interract with your actual [system under test](https://en.wikipedia.org/wiki/System_under_test). 
While Storyteller **can** be used to test against a running application that is initialized separately, most of the time
you'll opt to have Storyteller be able to spin up your system on demand as part of running or editing specifications. 
Storyteller also needs to be able to shut your system down cleanly so that you can swiftly make code changes and rerun specifications.

Storyteller can bootstrap a system with one of two mechanisms:

1. In a separate [AppDomain](https://msdn.microsoft.com/en-us/library/2bh4z9hs(v=vs.110).aspx). 
1. In a completely separate process launched by using the [dotnet run](https://docs.microsoft.com/en-us/dotnet/articles/core/preview3/tools/dotnet-run) command against the specification project

Storyteller 3.0 can only support the separate `AppDomain` mechanism. Storyteller 4.0 by default uses the separate
process approach, but you can opt into using the `AppDomain` approach against a .Net 4.6 application with the 
`--app-domain` switch from the command line if you are running `dotnet storyteller run` or `dotnet storyteller open`.

In both cases, Storyteller uses the `ISystem` interface described in the next section to control the system under test's
lifecycle.

## Understanding the ISystem Interface

The hook in your code that Storyteller uses to govern this lifecycle is the `ISystem` interface shown below." 

<[sample:ISystem]>

<div class="alert alert-info"><b>Note!</b> It's not mandatory to supply an <code>ISystem</code> implementation 
to use Storyteller against codebases that don't require any kind of bootstrapping.</div>

The `ISystem` interface only has four methods:
1. `Start() : CellHandling` -- this is a hook to do any kind of system bootstrapping or activation and an opportunity to put together any custom cell conversions and system wide selection lists. This method is only called **once** each time the testing `AppDomain` is loaded.
1. `CreateContext() : IExecutionContext` -- this method is executed as the first step in executing a specification. Use this method to perform any globally applicable state setup actions that will apply to all specifications.
1. `Dispose()` -- Clean up after yourself! This method is called when the Storyteller application is shut down and anytime Storyteller tries to recycle the system under test.
1. `Warmup() : Task` -- For systems that might need a little head start in bootstrapping, this method gives Storyteller a chance to "warm up" the system under test before you run any actual specifications

The `IExecutionContext` only lives for the lifetime of a specification execution and is disposed immediately after the specification runs. The `Dispose()` method is called even if the specification times out or aborts early with a critical exception.

<[sample:IExecutionContext]>

Use the `Dispose()` method to do any kind of global state cleanup between specification runs. The `BeforeExecution(ISpecContext)` and `AfterExecution(ISpecContext)` methods can be used to do any kind of per specification set up, clean up, or even to log additional errors and failures for non-functional concerns like performance.

<div class="alert alert-info" role="warning"><strong>Note!</strong> Make sure that the <code>Dispose()</code> method for your <code>ISystem</code> is thorough in how it shuts down the system to release resources like file locks, database connections, or network ports. Failing to do this when Storyteller tries to reload the system under test for new changes will cause you no end of grief. And yes, that's the voice of experience talking.
</div>

## Writing a Custom ISystem for your Application

You *can* just implement the `ISystem` and `IExecutionContext` interfaces shown above, but as of Storyteller 4.1 you can also subclass the `SimpleSystem` class and override any of the methods shown below:

<[sample:custom-system-using-SimpleSystem]>

## Using the Separate Process Approach

`AppDomain`'s were dropped from the CoreCLR and won't make a reappearance until Netstandard 2.0. Rather than wait for that
release, Storyteller 4.0 adopted a new default strategy to run the system under test in a separate process triggered from
the `dotnet run` command. To use this approach, you need to make your Storyteller project a console application, and in
your `Program.Main()` entry point, delegate to the new `StorytellerAgent` class like this:

<[sample:Program.Main.Default]>

If you had a custom `ISystem` for your application (named `GrammarSystem` in this case), 
bootstrapping your application would look like this:

<[sample:Program.Main.CustomSystem]>

Storyteller is no longer able to "auto restart" the running system under test when binaries change. 
If you are relying on the separate process approach, your workflow is to just recycle or restart the 
system under test through the Storyteller explorer. There are keyboard shortcuts available to restart the 
application before rerunning a specification. Do remember that dotnet run will trigger a compilation
if necessary, so you can make your changes to code files and immediately recycle Storyteller's system
under test.

See <[linkto:documentation/ui/shell]> for more information on how to trigger the system recycling.



## Using the AppDomain Approach

<div class="alert alert-info" role="warning"><strong>Note!</strong> You can disable the file watching of binaries
with the <i>--disable-auto-recycle</i> command line switch in any call to <code>dotnet open</code>. 
</div>


Like most testing tools in .Net, the Storyteller application has to open a second .Net `AppDomain` in order to load the application assemblies 
where they are deployed. This second `AppDomain` uses _[shadow copying](https://msdn.microsoft.com/en-us/library/ms404279(v=vs.110).aspx)_ 
so that Storyteller can remain open as you recompile new changes in the system under test. Storyteller uses a file system 
watcher to watch for all changes to files with the `.dll`, `.exe`, or `.config` file extensions. When Storyteller detects changes to these files, Storyteller attempts to:

1. Gracefully shutdown the system under test
1. Unload the running `AppDomain` for the system under test
1. Spin up a new `AppDomain` to load the new system binaries
1. Start the system under test again


You can always explicitly tell Storyteller which `ISystem` class to use as a flag to the <[linkto:documentation/using/ci;title=st run]> or <[linkto:documentation/ui;title=st open]> commands. Otherwise, Storyteller uses these rules to determine the `ISytem` -- or punt.

1. If there are no concrete `ISystem` classes in any assembly in the AppDomain, Storyteller uses a default, _nullo_ system and happily loads all of your `Fixture` classes.
1. If there is exactly one concrete `ISystem` class in the AppDomain, Storyteller uses that one.
1. If there is more than one concrete `ISystem` class in the AppDomain, Storyteller will throw an exception asking you to explicitly specify which one you want to use.




## Custom Conversion Providers, Selection Lists, and Extensions

Custom conversion providers and system wide selection lists can be added in the `ISystem.Start()` method. The `CellHandling` class below exposes methods to add and configure lists and conversions:

<[sample:CellHandling]>

To add <[linkto:documentation/engine/extensions;title=extensions]> to your specification system, just add them to the `CellHandling.Extensions` list
like so:

<[sample:Adding-an-Extension]>








