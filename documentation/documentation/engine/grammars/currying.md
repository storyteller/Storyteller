<!--Title:Importing and Currying Grammars-->
<!--Url:reuse-->

Storyteller provides a couple mechanisms to reuse grammars across fixtures or even within the same fixture:

1. Subclass a `Fixture` with inheritance. 
1. Use <[linkto:documentation/grammars/embedded_section]>
1. Use _Currying_ to use an existing grammar in a more specific way. Shown below.
1. Use the `Fixture.Import()` method shown below



## Currying for More Expressiveness

<div class="alert alert-info" role="alert">What we're calling <i>Currying</i> in Storyteller is probably more accurately an example of <i>partial application</i> from Functional Programming. Mea culpa, but "curry" is shorter and we're keeping it for now. See <a href="http://raganwald.com/2013/03/07/currying-and-partial-application.html">Raganwald on the difference between currying and partial application.</a> </div>


Let's say that you're working on an invoicing system again. A common task in your Storyteller project will be to set up an `Invoice` object with all its various properties. In some cases you definitely want to explicitly specify all of the Invoice's properties. In other cases, the only thing that matters for the specification is that an Invoice is open or fulfilled. Since one of the Storyteller's deepest held ideas is that only information germane to a specification should be expressed in a specification, Storyteller provides a feature called _grammar currying_ to allow you to supply less information to an existing grammar.

The generic grammar for setting up an Invoice and a curried version to set up an open invoice.

<[sample:currying-a-grammar-for-expressiveness]>

In usage, you can see the difference between the more generic grammar and the specific, curried grammar. 

<[spec:Currying/Currying]>

The goal of grammar currying was to make the expression of the specifications more declarative and easier to understand without requiring users to duplicate grammar code.


## Importing Grammars

Storyteller also supports a mechanism to import a grammar from one fixture into another:

<[sample:import-grammar-example]>

When using an imported grammar, the `ISpecContext` for the current specification is available on the original Fixture object, but you **cannot depend on the `SetUp()` and `TearDown()` methods to be called on the original Fixture.**  