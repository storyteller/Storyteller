<!--Title:Connecting Storyteller to the System under Test-->
<!--Url:system_under_test-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> Unlike Storyteller 1-2, exposing a custom <code>ISystem</code> is no longer mandatory if you decide you do not need one -- especially if you just want to try Storyteller out. For any kind of significant system, the Storyteller team recommends that you build a custom <code>ISystem</code> in order to cleanly control your system's start up and teardown.
</div>

Like most testing tools in .Net, the Storyteller application has to open a second .Net `AppDomain` in order to load the application assemblies where they are deployed. This second `AppDomain` uses shadow copying so that Storyteller can remain open as you recompile new changes in the system under test. Storyteller uses a file system watcher to watch for all changes to files with the `.dll`, `.exe`, or `.config` file extensions. When Storyteller detects changes to these files, Storyteller attempts to:

1. Gracefully shutdown the system under test
1. Unload the running `AppDomain` for the system under test
1. Spin up a new `AppDomain` to load the new system binaries
1. Start the system under test again


The hook in your code that Storyteller uses to govern this lifecycle is the `ISystem` interface shown below." 

<[sample:ISystem]>

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


## How does Storyteller determine the ISystem?

You can always explicitly tell Storyteller which `ISystem` class to use as a flag to the <[linkto:documentation/ci;title=st run]> or <[linkto:documentation/ui;title=st open]> commands. Otherwise, Storyteller uses these rules to determine the `ISytem` -- or punt.

1. If there are no concrete `ISystem` classes in any assembly in the AppDomain, Storyteller uses a default, _nullo_ system and happily loads all of your `Fixture` classes.
1. If there is exactly one concrete `ISystem` class in the AppDomain, Storyteller uses that one.
1. If there is more than one concrete `ISystem` class in the AppDomain, Storyteller will throw an exception asking you to explicitly specify which one you want to use.




## Custom Conversion Providers and Selection Lists

Custom conversion providers and system wide selection lists can be added in the `ISystem.Start()` method. The `CellHandling` class below exposes methods to add and configure lists and conversions:

<[sample:CellHandling]>


