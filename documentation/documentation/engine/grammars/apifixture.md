<!--title: Model In, Model Out Operations with ApiFixture-->

New in Storyteller 4.2 is a helper `Fixture` class called `ApiFixture` that helps for testing API's in your code that take in
an input model as an argument and produce a separate resource model. This feature was built for testing HTTP API's and "request/reply" functionality in service bus applications.

<[sample:SampleApiFixture]>

In usage, a specification using `SampleApiFixture` looks like this:

<[spec-result:Model In Model Out API/Using ApiFixture]>

So there's a couple things going on under the covers. First, `ApiFixture` uses the <[linkto:documentation/engine/grammars/modelfixture;title=ModelFixture]> functionality
to build the input model in an <[linkto:documentation/engine/grammars/embedded_section;title=embedded section]> and
automatically transfer that input back to the containing `ApiFixture.Model` property. From there,
`ApiFixture` itself is a <[linkto:documentation/engine/grammars/verify_object;title=CheckModelFixture]> that automatically adds grammars
to verify public properties and fields on the resource or output type. 

`ApiFixture` comes in two flavors. Using a custom `ModelFixture<TInput>` like this:

<[sample:ApiFixtureComplex]>

And a simpler version for cases where the default `ModelFixture<TInput>` is sufficient:

<[sample:ApiFixtureSimple]>

