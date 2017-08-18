<!--title: TestRail -->

The `Storyteller.TestRail` library is available on Nuget. The integration is currently very basic. 

Following the steps below will result in a Jira style experience where you can link your specs to Test Cases in TestRail simply by putting their Test Case ID (aka "C" Number) into the names of your specifications. The integration will run only when kicked off from the CLI's `run` command and will result in a "Test Run" being generated in TestRail for all specs in the batch that are linked to a Test Case. As the specs execute their status will be updated in TestRail with a simple pass/fail.
### Integrating TestRail w/ Your Spec Suite
The package contains a few classes you'll need to integrated with TestRail. The first is the `TestRailClient` which is used to interact with the TestRail API. It requires you to pass the Url of the TestRail server along with credentials:

```
var testRailClient = new TestRailClient(url, username, password);
```

The second is a `TestRailRunLogger` which will create the "Test Run" in TestRail at the beginning of a batch run. It requires you to pass in an `ITestRailClient` instance along with some settings. The TestRail Project ID is required in order for it to create the Test Run. It needs to be registered as a event listener which can be done in the constructor of your `ISystem` implementation:

```
var testRailRunLogger = new TestRailRunLogger(testRailClient, new TestRailRunLoggerSettings(projectId));
EventAggregator.Messaging.AddListener(testRailRunLogger);
```

The last part is the `TestRailCaseResultLoggingExtension` which will add results to the Test Run for the tests cases as their corresponding spec executes. This needs registered as an extension in the `ISystem.Start()` method:

```
var handling = CellHandling.Basic();
handling.Extensions.Add(new TestRailCaseResultLoggingExtension(testRailClient));
```

At this point you can begin establishing links between the your specs and test cases in TestRail by adding the corresponding "C#" in the name of the spec in the following format: "[C#]". For example, "My Spec [C1]" would link to Case C1 in TestRail. If no test cases are found in the batch run then no Run will be created in TestRail.
### Customization
Currently there is one customization hook for this extension. When you create the `TestRailRunLoggerSettings` you can pass in your own implementation of `ITestRailRunNameGenerator` which is used to generate the name of the Test Run that will be created in TestRail. The default implementation simply uses the current date. For example, "8/8/2017 12:57:13 PM".

### Getting your specs into TestRail
Getting your specs, especially if you have a lot of them, into TestRail can be a pain. To assist with this migration there is a small utility called [StoryTeller.TestRail.Sync]("https://github.com/JarrodJ83/StoryTeller.TestRail.Sync") to sync your specs to TestRail.