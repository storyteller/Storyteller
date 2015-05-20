<!--Title:Asserting Facts-->
<!--Url:facts-->

Frequently you'll want to simply make an assertion that an expected fact about your system is true. Storyteller provides a variation on the basic Sentence grammar that lets you simply assert on a single boolean condition.


## As a Fixture Method

The easiest implementation is to use a grammar method on your Fixture classes that returns a boolean value **without adding the return value into the Sentence format** like these methods below:

<[sample:fact-methods]>

## As a Lambda Declaration

You also have the option of declaring a Fact grammar programmatically on a `Fixture` class as in this code below:

<[sample:fact-programmatic]>


## Providing more Context on Failures

For a success, simply turning the line green and tabulating the _rights_ is good enough. For detected failures, you may want to add more contextual information to the specification output to help you solve any failures. While you can always throw an exception to get the extra information into the results, a cleaner, more controlled way is to use the `StoryTellerAssert` class to add contextual information without all the overhead of a stacktrace.

Below is a sample:

<[sample:fact-more-information]>

See <[linkto:documentation/instrumentation]>

## Facts in Action

If you were to use all the fact grammars shown above, the output would look like this below:

<[spec-result:Facts/Facts in Action]>


