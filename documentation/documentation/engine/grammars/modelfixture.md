<!--title: Configuring Input Models with ModelFixture -->


Storyteller 4.2 added a new `Fixture` type called `ModelFixture<T>` that can be used to set up complex object models
necessary for test data input in your specifications. This feature is closely related to <[linkto:documentation/engine/grammars/create_object]> (and shares some code).

Using the inevitable `Address` model, we might have a fixture like this:

<[sample:AddressModelFixture]>

By default, the `ModelFixture<T>` class will generate grammars to set the values of all public properties or fields where
Storyteller "knows" how to convert a raw string into that type. If a property or field type is another model object,
`ModelFixture<T>` will add grammars for the deeper properties. To make that concrete, say you have an `Address` model like
this:

<[sample:AddressAndArea]>

In the case above, `ModelFixture<Address>` would add a grammar to set the value of the `Address.Area.Name` property.

Do note that you can add any other kind of grammar to your `ModelFixture<T>` for more complex object setup.

## Attaching the Model

`ModelFixture<T>` has a property named `Model` that stores the model object being configured. If your model type has a
public, no argument constructor, `ModelFixture<T>` will automatically create one at the beginning of each usage of that
fixture. Otherwise, you would need an additional grammar to attach the model:

<[sample:SpecialModelFixture]>

