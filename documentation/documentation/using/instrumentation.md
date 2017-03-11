<!--Title:Instrumenting and Performance Logging-->
<!--Url:instrumentation-->

Since it is an imperfect world, Storyteller specifications will sometimes fail -- and since Storyteller is generally used for integration scenarios and expressed in high level language that purposely disconnected from the code artifacts, it has been difficult from time to time (read: frequently) to trouble shoot failing specifications. At the same time, Storyteller usage has suffered in the past from performance problems and long testing times. While the Storyteller team has invested a lot of time into performance optimizations in Storyteller itself, the 3.0 release has added some long overdue tooling to measure and expose the performance characteristics of the specifications so that teams **can identify where the real throughput problems really are**.

<div class="alert alert-info" role="alert"><strong>Note!</strong> Sometime after the official Storyteller 3.0 release, the team would like to investigating an execution mode that allows you to walk through all the specification steps manually to try to make debugging specification failures easier than it is today.
</div>

## StoryTellerAssert

<div class="alert alert-success"><b>Note:</b> Storyteller 4.0 will treat the text message to any 
overload of <code>StorytellerAssert.Fail()</code> as markdown.</div>

The original means of adding more contextual information about specification failures is the old `StoryTellerAssert` static class, with its usage shown below:

<[sample:using-storyteller-assert]>

While you can always just throw an exception in a grammar to provide more information about invalid conditions, using this functionality will allow you to add readable contextual error messages into the html results to help explain failures without adding an ugly .Net stacktrace.

A classic example of using `StoryTellerAssert` is if you have a grammar that is supposed to select a given value in a select box on the screen. If the element is hidden, does not exist, or the desired value is not part of the options, use `StoryTellerAssert` to make the normally quiet grammar fail with some kind of contextual explanation of why that action is invalid for easier debugging later.

Try not to use <code>StoryTellerAssert</code> in place of <[linkto:documentation/engine/grammars/assertions;title=assertions]> or <[linkto:documentation/engine/grammars/facts;title=facts]> -- especially when that results in much more work on your part. 


## Performance Tracing

Out of the box, Storyteller tracks the runtime of each grammar and silent action within the Fixture classes. If you want
to add your own timing records to the performance tracing, you can use the new `ISpecRecord.Timings.Record()` method
introduced in Storyteller 4.1:

<[sample:custom-performance-records]>

In the past, this functionality has been used to record:

* HTTP requests handled by the application during a specification
* Messages handled by a service bus
* Page navigations when using Selenium/WebDriver


## Exception Formatters

New to Storyteller 4.0 is the ability to tell Storyteller how to format the display of an exception that is caught during the 
execution of the specification. The default is still to just dump the full stacktrace, but if you want to get better results, you
can override the formatting for individual `Exception` types like these unit tests:

<[sample:custom_exception_formatting]>

Note that you can register the exception formatting anywhere because `ExceptionFormatting` is just a static class,
but idiomatically you probably want those calls in your `ISystem` or maybe in the static initializer of your
`Fixture` classes.

If it's easier or useful, you can throw a custom failure exception that inherits from the `StorytellerFailureException`
like this sample below that returns a markdown string representing the error:

<[sample:MarkdownFailureException]>


## Debug Output


If you are compiling to the `Debug` profile in your local work, any calls to .Net's built in `Debug.WriteLine()` 
during the execution of a specification will show up in a section at the very bottom of the specification results html.

If you are targetting any Netstandard target with the CoreCLR, you have to use `Trace.WriteLine()` instead. But don't worry,
because there's now a `Fixture.Trace(string)` function in Storyteller itself that wallpapers over the different like so:

<[sample:Fixture.Trace]>

The sample below is from the internal specifications on the documentation generation that I introduced to trouble shoot a failing specification one day:

<div data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:2"><h3 data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:2.0">Debug Output</h3><div data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:2.1"><pre class="debug-output">Loading topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\blue.md
Parsing topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\blue.md
Loading topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\index.md
Parsing topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\index.md
Loading topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\lightbrown.md
Parsing topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\lightbrown.md
Loading topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\purple.md
Parsing topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\purple.md
Loading topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\red.md
Parsing topic file C:\Users\jeremill\AppData\Local\Temp\fc517eaa-8c3b-4d2f-8dc3-e4d0e923bed4\red.md
</pre></div><hr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:2.2"></div>



## Exceptions

Because we have had some periodic trouble with exceptions not being surfaced correctly through the html results (we swear this is fixed now), there's a built in results tab that just shows the stacktraces for every .Net exception detected by Storyteller during a specification run.

## Custom Logging

<div class="alert alert-info" role="alert"><strong>Note!</strong> The Storyteller HTML rendering uses <a href="http://getbootstrap.com">Bootstrap</a> for all of its styling. You can assume that Bootstrap styles are loaded into any html rendering of your custom html to take advantage of Bootstrap styling.
</div>

A relatively new feature in Storyteller is the ability to add custom HTML to the results report. We originally built this functionality to use Storyteller against a system with quite a bit of distributed messaging where we would write a threaded history of the messages sent, received, and handled by the service bus endpoints during the execution. That has been successful enough that Storyteller 3.0 has formalized and generalized that mechanism. 

We are now using the instrumentation extensibility shown below to log the HTTP requests handled by our web application during specifications so that our teams have a much better understanding of just what is going on inside of the system during specification execution. We are also using the custom logging of HTTP requests and service bus message handling to understand where there may be opportunities for performance improvement by combining or batching up HTTP requests made from our client to our server.

The entry point to customized logging is the small `IReporting` service exposed off of `ISpecContext.Reporting`:

<[sample:IReporting]>

The `ISpecContext` service is available as the `Context` property inside of `Fixture` classes where it can be used by any <[linkto:documentation/engine/grammars;title=grammar code]> like in this <[linkto:documentation/engine/grammars/sentences]>:

<[sample:logging-fixture]>

The reporting is also accessible in the `IExecutionContext.AfterExecution()` method. We exploit this method to add contextual information from the application's own diagnostics at the end of each specification.

<[sample:IExecutionContext]>

Another usage of custom reporting to gather up html results in a single section is to use your own `IReport` implementation:


<[sample:ireporter]>

A custom `IReport` from Storyteller's internal tests is shown below:

<[sample:custom-IReporter]>

In usage, you can share a custom `IReport` between grammars and fixtures by using this syntax below:

<[sample:using-custom-reporter-in-fixture]>

Not that it's very interesting, but here is the html that gets added to the very bottom of the specification results from the logging shown above:

<div data-reactid=".0.1.$spec-editorsentence4=2results.1.2:3"><h3 data-reactid=".0.1.$spec-editorsentence4=2results.1.2:3.0">Some Numbers</h3><div data-reactid=".0.1.$spec-editorsentence4=2results.1.2:3.1"><ul class="list-group"><li class="list-group-item">5</li><li class="list-group-item">19</li><li class="list-group-item">17</li></ul></div><hr data-reactid=".0.1.$spec-editorsentence4=2results.1.2:3.2"></div>






## Using the Specification Timing

New for Storyteller 3.0 is some tracing for the performance of the steps within a specification. At the bottom of specification results html you should find a table of data like this one from an internal Storyteller specification:


<div data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1"><hr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.0"><h5 data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.1"><span data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.1.0">Execution Timing </span><small data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.1.1">all timings in milliseconds</small></h5><table class="table table-striped" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2"><tbody><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.0"><th data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.0.0">Type</th><th data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.0.1">Subject</th><th data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.0.2">Start</th><th data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.0.3">End</th><th data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.0.4">Duration</th></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:0"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:0.0">Specification</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:0.1">Navigation structure for a single directory without explicit ordering</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:0.2">0</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:0.3">23</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:0.4">23</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:1"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:1.0">Context</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:1.1">Creation</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:1.2">2</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:1.3">4</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:1.4">2</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:2"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:2.0">Fixture</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:2.1">TopicFolder:SetUp</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:2.2">4</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:2.3">4</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:2.4">0</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:3"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:3.0">Grammar</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:3.1">TheTopicsAre:Row</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:3.2">4</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:3.3">9</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:3.4">5</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:4"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:4.0">Grammar</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:4.1">TheTopicsAre:Row</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:4.2">9</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:4.3">12</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:4.4">3</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:5"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:5.0">Grammar</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:5.1">TheTopicsAre:Row</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:5.2">12</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:5.3">12</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:5.4">0</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:6"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:6.0">Grammar</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:6.1">TheTopicsAre:Row</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:6.2">12</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:6.3">13</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:6.4">1</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:7"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:7.0">Grammar</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:7.1">TheTopicsAre:Row</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:7.2">13</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:7.3">20</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:7.4">7</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:8"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:8.0">Grammar</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:8.1">rows</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:8.2">20</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:8.3">23</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:8.4">3</td></tr><tr data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:9"><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:9.0">Fixture</td><td data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:9.1">TopicFolder:TearDown</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:9.2">23</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:9.3">23</td><td class="number-cell" data-reactid=".0.1.$spec-editorb2bf7c97-5c10-454e-a068-8f9256376467=2results.1.2:1.2.1:9.4">0</td></tr></tbody></table></div>

This table tracks the time in milliseconds spent in each step by grammar and all the "silent actions" like creating the execution context and `Fixture.SetUp()/TearDown()` methods that happen behind the scenes.

## Exporting the Performance Data

To make it easier to spot and diagnose performance and throughput problems with the Storyteller specifications and probably the application itself, Storyteller allows you to dump the performance data shown above to file formats suitable for analysis by other tools.

The raw performance data can be exported from the `st run` in a CSV format suitable for easy import to a spreadsheet or database with the `--csv` flag like this: `st run [directory] --csv [file name].

The same performance data can be exported to a JSON format with `st run [directory] --json [file name].


