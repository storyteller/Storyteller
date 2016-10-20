<!--Title:Data Conversion within Specifications-->
<!--Url:conversion-->


<div class="alert alert-info" role="alert"><strong>Note!</strong> The type conversion is all new in Storyteller 3.0 and has no dependencies on external libraries other than the .Net CLR itself. The change was made as a minor performance improvement over the older mechanism from FubuCore and with the desire to eliminate direct coupling to external libraries for easier adoption.</div>

Specifications are largely created by entering text into the editor and stored on disk as Xml (I know, but backward compatibility mattered). Storyteller 3 features a new conversion function to help convert the raw string data into the correct Types your fixture and grammar code needs to execute. 

Even though the subsystem and this topic both use the "Conversion" nomenclature, the resolution from a raw string to the real value in actual usage has been:

1. Doing a straight conversion from a string to a scalar value like a number
1. Parsing text to create a more complex object to make specifications more terse
1. Using the raw text to lookup data in the system under test using the system's persistence infrastructure
1. Creating missing system data on the fly if it did not already exist

The conversion subsystem supports the most common Cell types out of the box, but also provides a couple of extension points that _should_ accomodate any need.

## What's in the Box?


Out of the box, the conversions can handle converting raw string input to .Net types for:

* Strings -- with the small caveat that "NULL" and "EMPTY" have special meaning as a _null_ value and an empty, zero length string
* Every number type in .Net using the default `int.Parse()` method in .Net
* Booleans -- uses a case insensitive match on "true" or "false"
* Enumerations -- converts based on the string option name for the value
* Nullable&lt;T&gt; -- assuming that Storyteller knows how to convert a string to whatever "T" is. "NULL" is converted to a null value.
* Array of T -- again, assuming that Storyteller understands how to convert a string to the type "T", this conversion works by treating the raw text as a comma delimited string of values.
* ctor(string) -- Any concrete type that has a public constructor function with a single parameter that takes in a string can be converted by calling that constructor function with the raw value. Or "NULL" to denote a null value.
* DateTimes -- more on this below.


## By ctor(string)

A very powerful mechanism in Storyteller's conversion subsystem is the ability to just call a public constructor of a Type that accepts a single string argument. 

From the unit tests in the Storyteller code, we have a type called `Color` that exposes a public constructor matching this criteria:

<[sample:creating-color-by-ctor]>

In action, the conversion code selects the "call ctor(string)" strategy and this test below passes:

<[sample:string-ctor-in-action]>

The inspiration for this feature was taken from a software system that tracked steel members. We frequently used a value type called `Dimension` that was frequently described in short hand like: `1 x 1 x 36` that expressed the physical cross section and length of a steel piece. That type looked something like this:

<[sample:dimensions]>

Using this conversion may allow you to express hierarchical data in a concise, more readable format than you would be able to achieve by strictly supplying raw values for every raw property of a type.

You can think of this pattern as a built in [interpreter pattern](http://en.wikipedia.org/wiki/Interpreter_pattern) -- crude as it may be.




## Custom Conversions

Custom conversions come in two different flavors, with the simpler version being the `IConversionProvider` shown below:

<[sample:IConversionProvider]>

Internally, Storyteller treats all the conversion providers as a [chain of responsibility](http://en.wikipedia.org/wiki/Chain-of-responsibility_pattern) such that the first provider that "knows" how to handle a type provides the actual conversion strategy as a simple `Func<string, object>` func. User supplied providers are evaluated before the built in providers.

A sample provider is the `EnumerationConversion` taken from the Storyteller code itself that handles any .Net Enumeration type:

<[sample:EnumerationConversion]>


## Runtime Conversions

<div class="alert alert-info" role="alert">

Internally, Storyteller can apply the non-runtime conversions as a kind of "warmup" task to get a specification ready to execute before passing control to the actual specification engine. This was done as a performance optimization in the 3.0 release because of throughput issues in a very large project using an older version. Runtime conversions have to be delayed until the specification is executing, so there is a small performance penalty.

</div>

The more complex extension point is the `IRuntimeConverter` that is allowed to use anything exposed by the `ISpecContext`, including system services, to do the conversion/location/resolution from raw text to the requested type.

The signature is shown below:

<[sample:IRuntimeConverter]>

A sample usage from the internal unit tests is shown below:

<[sample:PlayerConverter]>


## Registering Custom Converters

Part of the signature of a custom `ISystem` is to return a `CellHandling` object that holds everything Storyteller needs to know in order to, well, handle all the cells in the specification system -- including any custom conversions.

The `Conversions` property of `CellHandling` allows you to add custom `IConversionProvider` and `IRuntimeConverter` types and objects as in this sample below:

<[sample:registering-custom-runtime-converter]>

## DateTimes

<div class="alert alert-info" role="alert">

The "TODAY +/- #" nomenclature was invented to deal with common business logic that dealt with relative dates. The original Storyteller team felt that using this nomenclature made the specifications easier to understand in terms of the desired logic by using relative dates than it was to use hard coded dates. Plus it helps you set up test data for relative date logic like "send an email if the open issue is more than 45 days old" that can be expressed in test setup as "IssueDate = TODAY - 46."

</div>

Date and time logic is so common that Storyteller has some special handling for expressing dates. The following rules in order of precedence are available:

1. "[Day of the Week] [24 hour time]." -- So that "Wednesday 14:30" translates as 2:30 PM on the first Wednesday in the future. If today's day matches the day of the week, it select today's date.
1. "TODAY" -- equivalent to DateTime.Today()
1. "TODAY+#" or "TODAY-#" -- equivalent to DateTime.Today().Add(#.Days()). 
1. [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) formatted dates
1. The default .Net DateTime.Parse(text) method
