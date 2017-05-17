<!--title: Validating Json Data -->

<div class="alert alert-info"><b>Note!</b> This feature was added in Storyteller 4.2</div>

While it may be easier in many
cases to deserialize the Json string into a .Net object and validate against that, in other cases you may only have
the raw Json. Fortunately, Storyteller now includes a base class called `JsonComparisonFixture` that you can subclass in your
Storyteller specification project to verify the expected values within a JSON document. Behind the scenes, `JsonComparisonFixture` heavily uses the [JSONPath support in Newtonsoft.Json](http://www.newtonsoft.com/json/help/html/QueryJsonSelectTokenJsonPath.htm) to pick out values within the Json structure.

For a quick example, here's a simplistic sample that verifies the contents of a simple `Address` Json document:

<[sample:AddressJsonFixture]>

## Checking a Single Typed Value

To verify a single value in a Json document, use the `CheckJsonValue()` method shown below to create a declarative grammar:

<[sample: CheckJsonValue]>

Simple types are extracted from the Json document, parsed to the declared type, and then compared. String's just do an exact comparison to the raw Json value. Finally, any other type is deserialized via Newtonsoft.Json from the Json object matching the
specified JSONPath. An example of this is verifying an array of integers like this:

<[sample:CheckNumberArray]>

In usage, that grammar looks like this in a sample specification:

<[spec-result:Checking Json/Checking Arrays]>

## Checking Json Values in a Table

As a shortcut, if you're fine exposing JSONPath expressions directly into your Storyteller specification visualization, you can
use this built in grammar as shown in this specification:

<[spec-result:Checking Json/Simple Value Checks]>

In the underlying markdown file, the usage of the _Check Json Values_ grammar used above looks like this:

```
# Simple Value Checks

[SampleJson]
|> CheckJsonValues
    [table]
    |path   |returnValue|
    |$.color|red        |
    |$.order|1          |
    |$.color|wrong      |
    |$.order|wrong      |


```

## Set Verification of Set Elements

`JsonComparisonFixture` also contains a way to utilize Storyteller's <[linkto:documentation/engine/grammars/sets;title=set verification]> capability within Json documents. Here's a sample grammar that uses this functionality:

<[sample:CheckPeople]>

Which is going to look like a normal set verification table in the results of a specification:

<[spec-result:Checking Json/Set Verification on Children Elements]>


## Deep Assertions

To do a deep assertion of an element within the Json document to an expected Json structure, you can use the 
`assertDeepJsonEquals()` method to do a semantic comparison (using Newtonsoft.Json behind the scenes):

<[sample:deep-json-comparison]>

If the comparison fails, you'll see the actual and expected values in the specification results:

<[spec-result:Checking Json/Deep Child Comparison]>

## Other Helpers

`JsonComparisonFixture` includes a couple utility methods and properties:

* `deserialize<T>(path)` -- deserializes the Json object or value found at the JSONPath to the designated type T. 
* `JsonSerializerSettings` -- use this to control the Newtonsoft.Json serialization within the current `Fixture`
* `StoreJson(json)` -- load the Json data you want to verify
* `JObject` -- if you're familiar with Newtonsoft's DOM model, you can directly utilize the topmost `JObject` node for the current Json document