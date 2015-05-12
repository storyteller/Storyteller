<!--Title:Asserting Values-->
<!--Url:assertions-->

It's just not a specification if you are not asserting that some value is an expected value, and Storyteller has you covered. 

## Sentence Methods

The classical approach is to assert on the value returned from a sentence method on a fixture like the example below:

<[sample:the-value-should-be-sentence]>

New to Storyteller 3.* is the ability to assert against C# output parameters so that you can make multiple assertions from one Sentence like this example below:

<[sample:sentence-with-output-parameters]>

## Equality Checking

At this time, Storyteller does a simple equality check using the value returned from the Sentence method compared against the expected value specified as a string in the specification converted to the same type as the value returned from the method.

Out of the box, Storyteller has a couple means of doing equality checks in order of precedence:

1. For an array, check that the length of the actual value is the same as the expected value and that the element at each position matches
1. For a `List<T>`, do a similar check
1. Lastly, fall through to using `expected.Equals(actual)`

<div class="alert alert-info" role="alert">The Storyteller team would like to support some type of configurable checking in the future, but this has not yet been added. Storyteller will also support customizable equality checking extensibility in the future.</div>



## Formatting

By default, the return value of an assertion sentence grammar is `returnValue`, but you can customize this to something more meaningful in two ways:

1. Decorate the return value with an alias attribute like `[return: AliasAs("sum")]`
1. Specify the desired name of the return value cell in the sentence format as the last cell. In this case Storyteller will use the last value that does not match any of the input parameters of the method as the cell name of the return value.



## Decision Tables

Any assertion sentence grammar can be turned into a tabular decision tree by decorating the method with an `[ExposeAsTable("the title")]` attribute like this example below: 

<[sample:sentence-with-output-parameters]>

See <[linkto:documentation/grammars/tables]> for more information.

## Assertions in Action

The results of a specification using all of the assertion grammars shown above will look like this:

<[spec-result:Assertions/Asserting Values]>


