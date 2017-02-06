<!--Title:Creating Complex Objects-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> The techniques shown in this topic may be more effective in your problem domain by using intermediate classes or types built just for easy Storyteller usage that are then used as an input to whatever complex data your application actually uses.</div>


Over its lifetime (Storyteller has been in continous usage since 2009), Storyteller has been most valuable over classic xUnit testing tools when the specification domain is data intensive. As stated in the <[linkto:documentation/using/best_practices]>, the Storyteller team strongly recommends that all the necessary system state should be set up in the specification itself. To that end, Storyteller exposes a pair of helper methods on the `Fixture` class to quickly create <[linkto:documentation/engine/grammars/paragraphs;title=paragraph]> grammars to set up complex objects:

1. `Fixture.CreateObject<T>()` -- the user is in charge of telling Storyteller how to initialize the object
1. `Fixture.CreateNewObject<T>()` -- which is just syntactical sugar to call a default constructor on the type "T"

Both of these methods are helpers to create specialized <[linkto:documentation/engine/grammars/paragraphs;title=paragraph grammars]> and can also be used to create <[linkto:documentation/engine/grammars/tables;title=table grammars]> as well.

## Building Simple Objects with Setter Properties

If you need to quickly build very simple objects like data transfer objects (DTO's) that have a public, no-arg constructor and expose public properties, you can use the `Fixture.CreateNewObject<T>` method to build objects of "T".

For example, let's say that our problem domain includes the idea of an _Address_ that is represented by a simple type like this below:

<[sample:address]>

The simplest possible way to put together a grammar that builds out a single `Address` object is this:

<[sample:create-new-object-with-all-primitive-props]>

In usage, that results in html like this:

<[spec:Create Objects/Set Up a Single Address]>


If you are logically asking _okay, but where did my new Address object go?_, it's now available as `Fixture.CurrentObject`. See <[linkto:documentation/engine/state]> for more information on that.

There are a couple other options to be more selective about the properties that get selected:

* An overload of `SetAllPrimitiveProperties(Func<PropertyInfo, bool>)` that allows you to filter which properties should be set.
* `SetAllPrimitivePropertiesSpecificToThisType()` -- only use properties that are defined on the Type of the object being created, so that you filter out any settable properties from base classes. 
* `SetProperties()` as shown below allows you to explicitly pick which properties to use in one method call:

<[sample:using-set-properties-list]>

## Specifying and Customizing Properties

<div class="alert alert-info" role="alert"><strong>Note!</strong> At this point, Storyteller only supports public properties with setters in this syntax, but supporting public fields will be supported in the future. </div>

When and if you want more control over the <[linkto:documentation/engine/cells;title=Cell's]> in the object creation grammars, you can use this syntax instead to more explicitly select and configure the data collection:

<[sample:create-new-object-with-explicit-props]>



## Using as the Basis for a Table

<div class="alert alert-info" role="alert"><strong>Note!</strong> This usage has been very common and frequently useful in the projects that use Storyteller for testing. The Storyteller team very strongly recommends that you supply default values for the cells so that the columns can be optional when using tabular data setup.</div>

It is also possible to expose the `CreateObject`/`CreateNewObject` grammars in tabular form to quickly build a set of data using the `AsTable(title)` extension method.

In the case below, I am taking the grammar that was built in the previous section on customizing properties, and exposing that grammar as a table like this:

<[sample:using-create-object-as-table]>

Used in a specification, our original `CreateNewObject` paragraph turns into a table like this one:

<[spec:Create Objects/As Table]>



## Options for More Complicated Object Creation

All the examples above involved Storyteller calling a no argument, public constructor function for the type of object being created. While this has been effective for simple data structures like data transfer objects (DTO's), other objects will need to be created in some other way. That is okay, because Storyteller's `Fixture.CreateObject()` mechanism has some other mechanisms shown below to handle these cases. 

The Storyteller team is considering some improvements to the mechanisms shown below and there may be some easier, cleaner alternatives in the future. Your feedback or suggestions would be welcome.


## Using a Sentence Grammar to Initialize

You can use another <[linkto:documentation/engine/grammars/sentences;title=sentence grammar]> with the `LoadObjectBy = [grammar]` syntax to do the initial creation of the object within the `CreateObject` grammar as long as it will set the newly created object on `Fixture.CurrentObject`. 

Below is a sample:

<[sample:using-load-object-by]>

In usage, the grammar above looks like this:

<[spec:Create Objects/Using LoadObjectBy]>




## Initialize the Object Yourself

Another option is to just silently initialize the object yourself with the `ObjectIs = Func<ISpecContext, T>` syntax shown below:

<[sample:using-object-is]>

The `ObjectIs` step of the grammar is executed, but not part of the rendered html for the grammar. A specification using the grammar in the sample above looks like this below:

<[spec:Create Objects/Using ObjectIs]>


## Altering the Object without Using Properties

By no means will using settable properties be the only way you will ever need for configuring objects. As a "catch all" solution for everything else, Storyteller exposes the `WithInput` syntax shown below to collect a single <[linkto:documentation/engine/cells;title=cell]> of information and use that to alter the subject of the `CreateObject` grammar with a user-supplied `Action`. That syntax is demonstrated below:

<[sample:using-with-input]>

In the sample above, the input for "street" is a string, but you can also use the generic arguments to the `WithInput<T>()` to use any type that Storyteller can <[linkto:documentation/engine/cells/conversion;title=convert]>.

In usage, the grammar we built above renders as this:

<[spec:Create Objects/Using WithInput]>

## "Silent" Actions with the Subject

Sooner or later you need to actually do something with the object you just created. The `Do(Action<T>)` method allows you to add a "silent" grammar to carry out user-supplied actions on the newly built subject.

The following code is an example: 

<[sample:do-something-with-the-object-being-created]>



