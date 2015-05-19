<!--Title:Integration with Continuous Integration-->
<!--Url:ci-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> The batch running of specifications in continuous integration scenarios is significantly different in Storyteller 3 as a direct result of poor experiences with earlier versions. Besides some internal performance optimization, Storyteller 3 tries to be much more aggressive in failing fast in continuous integration to prevent runaway builds and provide faster feedback for teams that depend on Storyteller for regression testing. </div>


Storyteller specifications can be executed from the command line tool with the `st run` command. You may either run all the specifications (for smaller projects or faster systems), or run one suite of specifications at a time. 

## Fast Build, Slow Build

In usage over the years, I will run the Storyteller specifications as part of the normal automated build for a codebase **if they _feel_ fast enough**. Since Storyteller is going to be more frequently used for integration testing, the Storyteller specifications can easily become slower or intolerably long running for the kind of quick feedback you want in your normal automated build. In this common case, the Storyteller team recommends a _cascading build_ where your normal build runs first with your "fast" tests, then on success triggers a secondary build to run the Storyteller specifications. 

The reasoning is to create more effective and quicker feedback cycles. A team using a cascading build may follow a policy of waiting on the fast build before continuing any work after a push to source control, but only deal with the slower, cascading build when and if it fails.




## Critical and Catastropic Exceptions

Storyteller 3 introduces two new exceptions that you can choose to throw yourself:

1. `StorytellerCriticalException` -- tells Storyteller that the current specification cannot possibly succeed and causes Storyteller to stop executing the specification wherever it's at. Internally, Storyteller treats any failure in `Fixture.SetUp()` or `Fixture.TearDown()` as a critical exception. A classic example is using Storyteller to test a web application where a section of a specification starts by trying to open the application to a certain Url. If the web server returns an error on the request, Storyteller should not bother to try to find the expected elements on the screen. It should fail quickly with a clear indication that it was unable to load the web page.
1. `StorytellerCatastropicException` -- tells Storyteller that the current system under test is in an invalid state and to stop trying to execute anything else. You can throw this exception yourself if you detect something like an unavailable database connection that makes the system unusable. Internally, Storyteller throws this exception if the `ISystem` fails to start or if it cannot create an `IExecutionContext`.

See <[linkto:documentation/system_under_test]> for more information.



## Retries

I hate to tell you this, but it is somewhat likely that your Storyteller specifications are going to fail sometimes in your continuous integration runs. It's also somewhat likely that you may hit specifications that are consistently reliable -- especially when you are testing against any kind of system that involves a lot of asynchronous operations like just about any modern web application. To this end, the original Storyteller team adopted the idea of "retries," where a specification that fails can be retried a configured number of times (we got this idea from jQuery as I recall).

This "retry" capability has produced very mixed results in real usage. In the early days of [Selenium](http://www.seleniumhq.org) when the browser automation was so unreliable, the retry capability made our automated testing much more useful. Today, the retry capability is still valuable when we use Storyteller against asynchronous messaging systems. That being said, the retry capability in older versions of Storyteller has also been detrimental when it too aggressively tries to retry specifications that have no chance of ever succeeding or when the system under test itself is in an invalid state -- often hitting the timeout for each specification on each retry.

To that end, Storyteller 3 changes the retry policy a bit to [fail faster](http://en.wikipedia.org/wiki/Fail-fast):
* The retry count **as of now** is specified per specification with the default being no retries. This [may change later](https://github.com/DarthFubuMVC/StoryTeller2/issues/151) based on our shop's experience with Storyteller 3. For now, however, the attitude we are taking is that retries are a potentially harmful property that must be explicitly enabled.
* Specifications marked as _Acceptance_ will never be retried.
* If in the course of executing a Specification the Storyteller engine hits a "critical" or "catastropic" exception, the specification will no longer be retried even if it has not exceeded its maxiumum number of retries. A "critical" exception is any failure from a `Fixture.SetUp()`, `Fixture.TearDown()`, or the `StorytellerCriticalException` being thrown by grammars. 
* If the system under test itself fails to start or cannot create an execution context, the entire batch of specifications is aborted, but the results are still shown.

TODO(see instrumentation, which should involve exception throwing now too)


TODO(link to the lifecycle topic when it exists)

## Lifecycle

Storyteller has always treated _Acceptance_ and _Regression_ specifications somewhat differently in the command line execution. _Acceptance_ specifications are executed strictly for informational purposes, are never retried in the case of failures, and do not count toward the success or failure of the execution run. _Regression_ specifications on the other hand can be retried and any number of _Regression_ failures will cause the `st run` command to return a non-zero return code denoting a failure.


## Results

The specification execution results are written to a single html file with **no other file dependencies**. In continuous integration scenarios, you would want to have this file written to a place where your CI server will save this file as an artifact tagged to the build. For example, my teams write the Storyteller results to an `/artifacts` folder and configure our TeamCity build server to automatically store any file written to that directory as build artifacts. Most CI servers today will allow you to expose this html file from the build server website to browse the results.

The results page is a single page application with a tabular summary view of all the specifications executed, how long each took to execute, the high level result counts, and the number of retries. From the summary, you can drill into individual specifications by clicking on the specification name.

## Command Usage

<[command-usage:st/run]>
The `st run` command allows you to run specifications from an optimized batch mode from the command line. This command will also optionally dump out a couple additional  reports about the specifications that executed that may be useful for custom reporting or performance optimization. The CSV option is a dump of the performance tracing across all the specifications. The JSON dump is a raw dump of the Storyteller runtime model for the specifications. 
<[/command-usage:st/run]>
