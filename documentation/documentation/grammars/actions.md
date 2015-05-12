<!--Title:Carrying out Actions-->
<!--Url:actions-->

The classic strategy for completely self-contained specifications is _[arrange, act, assert](http://c2.com/cgi/wiki?ArrangeActAssert)_. 

Let's say that you need to be write some specifications for a new batch process (hey, they do still exist and it was the first thing I thought of when I was writing this page). At some point in the specification you need to kick off the batch job and wait for it to complete before you execute any assertions against the outcome.

## Explicit Actions 

You can explicitly state when the action is happening in your specification with an explicit action method grammar like this below:

<[sample:explicit-action-in-fixture]>

Which would lead to a specification like this:

<[spec:Actions/Explicit Action]>

## Implicit Actions

<div class="alert alert-info" role="alert">Any exceptions thrown in the `SetUp()` or `TearDown()` methods would be surfaced into the generated results html. </div>

Quite frequently, our teams find that specications read much more cleanly if actions like kicking off a batch process or navigating a browser to a certain page or starting up an embedded web server are handled implicitly off stage.

In the case of the batch process, you might opt to handle kicking off the batch process in the `SetUp()` method of your Fixture class like this:

<[sample:implicit-action-in-setup]>

Which leads to a specification like this below:

<[spec:Actions/Implicit Action]>

Storyteller supports both styles, but the Storyteller team recommends making your specifications as declarative as possible both to make the specifications quicker to author and easier to understand later. Don't fall into the trap of trying to use Storyteller like an xUnit tool.



