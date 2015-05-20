<!--Title:Tables-->
<!--Url:tables-->

Storyteller is at its best when you are able to express your specifications as declarative tables. In practice, teams use _Table_ grammars to set up input data for specifications and to express decision tables with each row representing a use case of inputs and expected outcomes.



## As a Single Method

The easiest way to create a _Table_ grammar is to decorate a public method in a `Fixture` class with the `[ExposeAsTable]` attribute.

Let's say that we want to create a table that verifies that .Net can successfully add two integers together. We can write a table grammar like this one below:

<[sample:using-expose-as-table-attribute]>

In usage, the results of that grammar would look like this: 

<[spec-result:Tables/Using [ExposeAsTable]]>

Some things to note:
* The method is executed for every row of the table
* Normal method parameters are treated as inputs
* The return value of a method, if there is one, is treated as an expectation
* Any output parameters of the method are also treated as an expectation
* By default, the header string in the table column is the name of the parameter, but that can be overridden as shown in the next section



## Overriding Headers and Cells

Assuming that you are using a method as the basic for a _Table_ grammar, you can use the [Header] attribute to override the header for that parameter in the rendered html.

<[sample:overriding-table-options]>

See <[linkto:documentation/engine/cells]> and <[linkto:documentation/engine/cells/selection_lists]> for more information;


## Before and After Actions

You may find scenarios where you want to execute some kind of action before or after all of the rows in a _Table_ are processed. The easiest way to accomplish that is to create two grammars:

1. A sentence grammar that performs the action for each row
1. A table grammar built in a second method that wraps the first sentence grammar in a table and registers _before_ and _after_ actions.

The grammars below demonstrate this usage:

<[sample:before-and-after-actions-on-table-grammar]>

In action, those two grammars are just a table:

<[spec:Tables/Before and After Actions]>


## From a Paragraph

The `AsTable(the title of the table grammar)` usage above can also be used against a _Paragraph_ grammar if it only consists of _Sentence_ grammars. This ability is frequently exploited for special cases of _Paragraph's_ that either set up a new object for a test input or verify the state of some objects in your system.

Here's a contrived example taken from the internal tests in Storyteller itself:

<[sample:paragraph-with-grammars-built-inline]>

In usage, the grammar above will render to this:

<[spec:Tables/Using a Paragraph]>




## Using DecisionTableGrammar

Finally, there is an older mechanism for creating decision tables with multiple inputs and outputs that has been retained for the sake of backward compatibility. If you are starting fresh with Storyteller 3.0, we recommend simply using Sentence methods with multiple output parameters if you want to assert on multiple columns in the same table.

That being said, the legacy mechanism is to create a subclass of `DecisionTableGrammar` like this one:

<[sample:using-a-decision-table-grammar]>

And then add that grammar to a Fixture class like this:

<[sample:adding-the-decision-table]>

The html rendering of the grammar above will be:

<[spec-result:Tables/Decision Table]>

Things to note:
1. All public properties are _Cell's_ in the grammar. Fields are not supported
1. Properties with a getter are considered to be expectations
1. Properties with a setter only are considered to be inputs
1. There are two virtual methods `beforeLine()` and `afterLine()` that can be implemented to perform actions before or after every single row is executed