<!--Title:Embedded Sections-->
<!--Url:embedded_section-->

A useful technique with Storyteller is to use an _Embedded Section_ that allows you to embed the usage of one Fixture into the usage of a second Fixture. 

To make this concrete, let's say that you have a Fixture to interact with the main page of a web application portal project. The main page probably has several distinct areas of functionality, including a modal popup that allows a user to set their usage preferences. When you design your specification language for the application portal, you con't necessarily want to include the language for the preferences directly into your main Fixture. Instead, you create a second Fixture just to interact with the preferences popup like so:

<[sample:preferences-fixture]>

To embed that `PreferencesFixture` into the main application fixture, you use the `Fixture.Embed&lt;T&gt;(title)` method to create an embedded section like this:

<[sample:exposing-embedded-section]>

In usage, the embedded section looks like a nested box within the section that contains it, like this:

<[spec:Glossary/Embedded Section]>

The `Before()` and `After()` methods are optional. In both cases, the signature takes in an `Action<ISpecContext>` that
will be executed every time the embedded section grammar is executed.


## Possible Usages

* To reuse grammar functionality across logical areas
* A team at my shop uses embedded sections to describe sections in a big, branching questionaire
* Interacting with a modal or popup dialog in a user interface testing project
* To specify a complex message for API testing
* To specify variable options without cluttering up the main Fixture

## Before and After Actions

<div class="alert alert-info"><b>Note!</b> As of 4.2, Storyteller also allows you to use asynchronous actions as the "Before" and
"After" actions</div>

When you create an _Embedded Section_ grammar, you can specify actions that will be executed before and after the steps in the embedded section. Note that the `Before()` action is executed before the nested Fixture's `SetUp()` method. Likewise, the `After()` method is executed after the nested Fixture's `TearDown()` method.

<[sample:using-before-and-after-actions-in-embedded-fixtures]>
