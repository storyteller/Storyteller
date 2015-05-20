<!--Title:Managing State during Execution-->

<div class="alert alert-warning" role="alert"><strong>Warning!</strong> Only one instance of each Fixture class is created and shared across all specification executions in a Storyteller process -- so please use caution when storing specification state with any private fields or properties inside <code>Fixture</code> classes</div>

<div class="alert alert-info" role="alert"><strong>Note!</strong> The API for storing and retrieving state across <code>Fixture</code> objects is a breaking change in 3.0 from earlier versions. This was done to conceptually untangle state management from any running application container. </div>

While many if not most specifications will be authored with the grammars in a single `Fixture`, it is very possible and frequently desirable to use multiple `Fixture` sections within a specification body. Fortunately, Storyteller has a mechanism in `Fixture's` to store and retrieve object state within the execution of a specification.


## Using Fixture.Context.State

The Fixture class exposes a state bag reachable by `Fixture.Context.State` with the signature below:

<[sample:IState]>

The `Context` property on `Fixture` is available during specification execution and refers to the currently executing specification. This object is shared by all `Fixture` objects being used during the execution of a specification.

The `State` object bag can store and retrieve data by either type or by the combination of type and a string name.

<div class="alert alert-info" role="alert"><strong>Note!</strong> Any objects stored inside a <code>State</code> object that implement the <code>IDisposable</code> interface will be disposed by Storyteller at the end of executing the specification. </div>

## An Example of Passing State Between Fixtures

Here is a typical usage of the state bag. Let's say that you are working on an invoicing application where your invoices are made up of many details that are themselves complicated. 

<[sample:invoice-invoice-detail]>

Pretend that the class below is much more complicated than it really is;-).

<[sample:sets-invoice-detail]>

With Storyteller's mantra of self-contained specifications in mind, you need some `Fixture's` to construct new `Invoice` and `InvoiceDetail` objects. If an `InvoiceDetail` was sufficiently complicated, I would probably choose to:
1. Create a `Fixture` completely dedicated to creating a single detail 
1. Create a `Fixture` to set up the state of a single `Invoice`
1. Use the invoice detail `Fixture` as an <[linkto:documentation/engine/grammars/embedded_section;title=embedded section]> within a `Fixture` for the `Invoice` setup.

The missing piece of the list above is how to attach the `InvoiceDetail` objects created inside the embedded section to the new `Invoice` object created by the parent `Fixture`, and that is where the `Context.State` becomes useful.

First, here's what the `Fixture` for the parent `Invoice` setup might look like:

<[sample:store-object-in-state]>

Notice how it creates a new `Invoice` object in its `SetUp()` method and stores that in the contextual state? The next piece is the `Fixture` to set up a detail:

<[sample:read-object-from-state]>

An `InvoiceDetail` object is created in the `TheDetailIs` grammar method and immediately added to the `Invoice` object retrieved from contextual state that was put there by the `InvoiceFixture` in its `SetUp()` method.

## The "Current Object"

Some of the built in grammar types in Storyteller quietly depend on a special property slot that is reachable from any `Fixture` class as `Fixture.Context.State.CurrentObject`, or a shorthand `CurrentObject` that gets to the same data.

<[sample:using-current-object]>

