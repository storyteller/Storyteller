<!--Title:Verifying Sets-->
<!--Url:sets-->

<div class="alert alert-info" role="alert"><strong>Info</strong> The Storyteller team and the shops we work in tend to use document databases or ORM's for persistence, so for the moment the raw `DataTable` set verification from earlier versions has been left out of Storyteller 3. This feature will be added back in at a later time. See the <a href="https://github.com/DarthFubuMVC/StoryTeller2/issues/67">GitHub issue here</a>.</div>


One of the most powerful features of Storyteller is the ability to declaratively compare a set of expected results against the system state and report back:

1. Which expected items were matched to the actual results
1. Which expected items were missing from the actual results
1. Items in the actual results that were unexpected
1. Optionally, verify an exact order of the items between the expected items and the actual values

## Arrays

The tabular forms of set verifications shown below are more powerful and detailed in how they display data, but a much more terse form is to simply assert against a .Net `Array` type just like you'd assert against other values.

Below is an example `Fixture` that contains a pair of Sentence grammars to verify a string array and an integer array:

<[sample:set-checking-with-arrays]>

In usage, the results of a specification using the fixture above will look like this:

<[spec-result:Sets/Arrays]>

Some things to note:
1. The equivalence check is order specific. The two arrays have to be the same length and contain the same elements in the same order
1. Only `Array`'s are supported at this time
1. Storyteller _knows_ how to convert a string into an array of some type by treating the raw string as a comma delimited string, then converting the raw string values into the element type.
1. You can verify an array of any .Net type that Storyteller knows how to convert or parse from a string -- including your own application types
1. The results are shown using the ToString() method of the inner element type. **Do consider using custom ToString() methods to provide more information in the case of specification failures**.

See <[linkto:documentation/cells/conversion]> for more information on how the conversion process works.


## String Lists

If you'd rather express an expected set in rows, you can use the `VerifyStringList()` mechanism in `Fixture` classes to expose a special _Set Verification_ for sets of strings.

The code below shows how to use this syntax to create a grammar that will verify a set of string data:

<[sample:sets-name-list]>

Note that set verifications can explicitly choose to enforce the exact order of the results, or do an unordered comparison by default. 

<div class="alert alert-info" role="alert"><strong>Info</strong> The Storyteller team's advice is to always use unordered set comparisons if you do not care about the order of the actual data just to remove a little bit of friction from your usage.</div>

In usage, the string list verification behaves like this sample specification below:

<[spec-result:Sets/String Lists]>


## Object Sets

The `VerifySetOf()` mechanism on `Fixture` classes enables you to write grammars to express the qualities of an expected set of data by testing individual values of the data items in the actual result.

Let's say that you're building an invoicing system of some kind and you have a simple class to represent details like this (the very earliest version of Storyteller was originally conceived during a project on legal invoicing software that used the older [FitNesse](http://fitnesse.org) tool):

<[sample:sets-invoice-detail]>

You could write some simple set comparisons with against that `InvoiceDetail` object with grammars like this code sample below:

<[sample:sets-fixture]>

The grammars above in action will render html results like so:

<[spec-result:Sets/Object Sets]>

## Tips for using Set Verifications Successfully

1. Since the world doesn't always conform to simple object structures, consider using intermediate types in your _Set Verification_ grammars just to translate the actual system data to something that's easier to consume inside of Storyteller.
1. Do take advantage of Storyteller's ability to customize string conversions so that you can specify more complex types in _Set Verification_ columns.
1. The `Compare(x => [expression])` and `MatchOn(x => [expression], x => [expression]) syntax can support following multiple properties and methods. So `Compare(x => x.Detail.Name)` is valid syntax that can be used inside of Storyteller. 