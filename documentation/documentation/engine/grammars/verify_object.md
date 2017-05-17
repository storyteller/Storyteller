<!--Title:Verifying Object State-->

If you need to assert the values of several object properties in one logical step, the `Fixture.VerifyPropertiesOf<T>()` method is a helper to quickly put together a <[linkto:documentation/engine/grammars/paragraphs;title=paragraph grammer]> to verify multiple properties.

Using the same `Address` type from the previous section (<[linkto:{previous}]>), you could build a grammar like this one:

<[sample:using-verify-properties-of]>

In usage, a specification using that grammar will render results like this below:

<[spec-result:Create Objects/Using VerifyProperties]>

You can use multiple "dots" in the call to `Check(expression)` and even verify the result of a method with no arguments. So `Check(o => o.Property1.Property2.Property3)` or `Check(o => o.IsActive())` are both valid. As of now, only properties and methods are supported. Support for fields will be added later.



