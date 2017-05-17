<!--Title:Verifying Object State-->

If you need to assert the values of several object properties in one logical step, the `Fixture.VerifyPropertiesOf<T>()` method is a helper to quickly put together a <[linkto:documentation/engine/grammars/paragraphs;title=paragraph grammer]> to verify multiple properties.

Using the same `Address` type from the previous section (<[linkto:{previous}]>), you could build a grammar like this one:

<[sample:using-verify-properties-of]>

In usage, a specification using that grammar will render results like this below:

<[spec-result:Create Objects/Using VerifyProperties]>

You can use multiple "dots" in the call to `Check(expression)` and even verify the result of a method with no arguments. So `Check(o => o.Property1.Property2.Property3)` or `Check(o => o.IsActive())` are both valid. As of now, only properties and methods are supported. Support for fields will be added later.

## CheckModelFixture<T>

New in Storyteller 4.2 is a helper `Fixture` class called `CheckModelFixture` that smoothes out a little bit of friction in
creating a Fixture that needs to make several assertions against the state of a model object.

Here's an example against a simple Address DTO:

<[sample:ModelForwardingFixture]>

Without doing anything else, `CheckModelFixture<T>` will add grammars to verify the values of all public properties or fields of
the model type ("T"). To some degree, `CheckModelFixture<T>` can also guess at deeper properties or fields on intermediate objects. For example, if your `Address` had an `Area` property that in turn exposed properties:

<[sample:AddressAndArea]>

`CheckModelFixture<Address>` would be smart enough to add a grammar to check the value of the `Address.Area.Name` property. Do note that the auto-discovery of grammar's **does** apply to `Array` types, but any property or field that returns a different enumerable of any kind is not automatically used. There's nothing
stopping you from adding additional grammars to your own `CheckModelFixture<T>` to verify child collections of the model.



