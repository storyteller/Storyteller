<!--title: Extensions -->

Storyteller 4.2 added a new ability to apply additive, reusable extensions or add ons to a Storyteller specification project:

<[TableOfContents]>

## Using IExtension

Extensions are implementations of the `IExtension` interface shown below:

<[sample:IExtension]>

As a concrete example, here's the very early (and naive) version of a simplistic extension to add Selenium support to a running Storyteller project that just manages the lifecycle of the Selenium [IWebDriver](https://seleniumhq.github.io/selenium/docs/api/dotnet/) object being used in the specifications:

<[sample:SeleniumExtension]>

The extension has some value to establish a pattern of how the rather expensive Selenium IWebDriver object is
bootstrapped, applied to subsequent specifications, and a clean system under test shutdown -- which is absolutely vital
for iterating on automated tests and frequently ignored.

The `AfterEach(ISpecContext)` method shown above doesn't do anything in this case, but in other extensions it's been a great place
to add <[linkto:documentation/using/instrumentation;title=custom logging]> to the Storyteller results. 

Now, to apply an `IExtension`, you just need to add it to the `CellHandling.Extensions` list as you create your <[linkto:documentation/engine/system_under_test;title=ISystem]> for your Storyteller specification project.

Here's an example from Storyteller's internal sample project:

<[sample:Adding-an-Extension]>









