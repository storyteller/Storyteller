<!--Title:Sentences-->

The simplest and most commonly used type of Grammar is just a single line within a Specification called a _Sentence_.

## A Sample Specification Using Sentences

Again visiting the problem domain of writing our own Calculator software, we could use Sentence grammars to specify the multiplication and addition features like so:

<[spec-result:Calculator/Using Sentences]>

## Using Fixture Methods

The simplest way to write a _Sentence_ grammar is to just add a public method to a Fixture class that either returns a single value or has a `void` signature. 

The "Starts with {number}" sentence used in the specification above looks like:

<[sample:start-with-sentence]>

The `[FormatAs]` attribute value specifies how the Sentence grammar will be rendered into HTML output. The syntax is to replace `{parameter name}` with the value of that method parameter in the HTML display. If you leave off the `[FormatAs]` attribute, Storyteller will just use the method signature as the format. In the case above, that format would be `StartsWith({number})`.

<div class="alert alert-info" role="alert">In earlier versions of Storyteller the formatting had to be specified in the C# Fixture code. Before 3.0 is officially released, there will be a mechanism to specify the formatting language in the user interface client before or after the Fixture code is written. </div>


## Asserting Values with the Return Value

There is _some_ value in writing smoke tests just to see if the system blows up when you perform actions, but sooner or later you probably want to check some state or value returned from the system. You can use a Sentence method to assert on a single value like the `TheValueShouldBe` grammar used in the sample Specification above:

<[sample:the-value-should-be-sentence]>

If the expected value does not match the returned value from the grammar method, the results output will look like this:

<[spec-result:Calculator/Bad Values]>



## Using Output Parameters

New in Storyteller 3.0 is the ability to use output parameters to specify multiple value assertions in a single Sentence method. Below is an example:

<[sample:multiple-inputs-sentence]>

Used in a specification, that grammar would look like this:

<[spec-result:Calculator/Using Output Parameters in a Sentence]>



See also:
* <[linkto:documentation/engine/grammars/actions]>
* <[linkto:documentation/engine/grammars/assertions]>
* <[linkto:documentation/engine/grammars/facts]>
* <[linkto:documentation/engine/grammars/custom]>
