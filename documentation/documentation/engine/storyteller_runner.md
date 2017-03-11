<!--title:Running Specs from your IDE-->

<div class="alert alert-info">There will be a "dotnet test" adapter for Storyteller in the VS 2017 timeframe that will make the following samples mostly unnecessary, but we're waiting for more VS 2017 adoption and stabilization.</div>

Storyteller specifications will fail and there will be times when you're really going to want to be able to debug through your code while a Storyteller specification is running. While you can always attach a debugger to the running system under test when
the Storyteller UI is running, it's a faster feedback cycle to be able to just start and run your specification from whatever IDE you are using.

<div class="alert alert-info">In all cases, the code shown in this topic must be contained within your Storyteller specification project.</div>

To that end, Storyteller 4.1 (re)introduces the `StorytellerRunner` class that you can use to execute Storyteller specifications from the IDE. If your Storyteller specification project does not have any kind of custom `ISystem` (i.e., you kick it off with `StorytellerAgent.Run(args)`), you can use this syntax:

<[sample:using-storytellerrunner-with-basic]>

I use the venerable [TestDriven.Net](http://www.testdriven.net/) tool to run unit tests inside of Visual Studio.Net. One of its nifty
features is the ability to run any arbitrary method in your code as well as run the method in the debugger. You may instead opt to add a unit testing tool like [xUnit](http://xunit.github.io/) and kick off Storyteller specifications from a unit test where you have many more options for running the code.

If you are using a custom `ISystem`, use the syntax shown below to bootstrap the runner:

<[sample:StorytellerRunner-with-custom-ISystem]>





