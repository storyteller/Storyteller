<!--title: CheckModelFixture-->

New in Storyteller 4.2 is a helper `Fixture` class called `CheckModelFixture` that smoothes out a little bit of friction in
creating a Fixture that needs to make several assertions against the state of a model object.

Here's an example against a simple Address DTO:

<[sample:ModelForwardingFixture]>

Without doing anything else, `CheckModelFixture<T>` will add grammars to verify the values of all public properties or fields of
the model type ("T"). To some degree, `CheckModelFixture<T>` can also guess at deeper properties or fields on intermediate objects. For example, if your `Address` had an `Area` property that in turn exposed properties:

<[sample:AddressAndArea]>

`CheckModelFixture<Address>` would be smart enough to add a grammar to check the value of the `Address.Area.Name` property. Do note that the auto-discovery of grammar's **does** apply to `Array` types, but any property or field that returns a different enumerable of any kind is not automatically used. There's nothing
stopping you from adding additional grammars to your own `CheckModelFixture<T>` to verify child collections of the model.