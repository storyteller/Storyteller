<!--Title: Cells-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> Cell's in Stortyteller are <b>not</b> limited to being scalar or simple value types like strings or numbers or date's. If Storyteller "knows" how to convert or locate an object type from a string, that type can be used as a a Cell. See <[linkto:documentation/engine/cells/conversion]> for more information.</div>


If you had a sentence grammar (explained below) with the template "Enter the user name {username}", the value _username_ is a _Cell_ used to collect information from a user. The template above would result in this bit of html in the specification editor:

<div class="sentence"><span>Enter the user name </span><input type="text" size="10" placeholder="username" tabindex="0" class="cell active-cell mousetrap" data-cell="username"></div>

<br />

Cells can be either inputs (the "Arrange" or "Act" portion of a specification) or assertion values that will be verified as an expectation against an actual value (the "Assert" part of a specification). As discussed in the following sections, Cell's can be customized to provide better usability in the user inferface tooling or html rendering.

## Asserting Values

[Smoke tests](http://en.wikipedia.org/wiki/Smoke_testing_(software)) that simply prove that an operation does not blow up with exceptions can be useful, but sooner or later you will probably want to assert that some value or state in the system under test matches your expectation. In Storyteller, some Cell's can act as assertions to compare the expected value input by the specification author against the actual value. Revisiting the Calculator problem domain from the tutorial, the html results for successful, failed, and invalid cell assertions are shown in the sample specification below:

<[spec-result:Calculator/Assertions]>

In the case of invalid data, you can click on the yellow cell to see a popup modal with the full error message for the conversion failure.

See <[linkto:documentation/engine/grammars/assertions]> for more information.


## Customizing Cells

<div class="alert alert-info" role="alert">

The original goal of Storyteller was to correct what we felt were usability flaws with FitNesse for specification authoring. Our hope was that we could make the Storyteller user interface do much more to guide the usage of the grammar language with fewer user input errors -- but do that without losing any flexibility in the expression of the grammar language. 

</div>

You can customize Cell appearance and editing in a couple different ways:

1. Header -- change the heading for Cell's within tabular grammars
1. Editor -- change the editor control that Storyteller uses for the cell in the specification editor. This isn't terribly useful **now** as the only choices are the default textbox, select lists, and a checkbox for boolean values, but the plan is for more options in the future.
1. Selection lists and values -- To guide the usage in the editor, you can force the user to provide Cell inputs from a selection list. See <[linkto:documentation/engine/cells/selection_lists]> for much more information.
1. Default Values -- You can supply a default value for a Cell as a string. The immediate benefit is to make specification editing quicker if you can live with the default values. Also see <[linkto:documentation/engine/grammars/tables]> for more information about using optional columns in table grammars.

## Customizing via Attributes

For grammars that call a fixture method directly, you can use .Net attributes on the method parameters (including the return value using the `return:` prefix) like this example of a table grammar:

<[sample:overriding-table-options]>

In the html rendering, a specification using that grammar looks like this:

<[spec:Tables/Table with Options]>

The available attributes are:

1. `[DefaultValue(value)]` to specify the default value for a cell
1. `[Header(the heading)]` to specify the header value displayed in tables
1. `[return: AliasAs(cell alias)]` to override the cell name for the return value of a method
1. `[Editor(editor type)]` to override the editor selection for a cell
1. `[SelectionList(list name)]` to specify a named list of selection values
1. `[SelectionValues(values)]` to directly specify a list of selection values for this list

## Customizing Cells Programmatically

<div class="alert alert-info" role="alert">

For users familiar with Storyteller 1.0-2.0, the syntax shown below is brand new to 3.0 to address the complaints about inconsistency and missing options in the various kinds of grammars.

</div>

For the grammars (set verifications, some kinds of tables, paragraphs) that are defined through some kind of fluent interface, Storyteller 3.0 introduces the `ICellExpression` syntax to customize cell properties:

<[sample:ICellExpression]>

In usage, the cell expression is used as part of a [fluent interface](http://martinfowler.com/bliki/FluentInterface.html) like this example from a set verification grammar:

<[sample:using-cell-expression]>


## Default Editors

There are only a couple built in rules (for now) for how Storyteller selects an editor for a cell:

* If a cell type is an enumeration type, use a select editor with all the possible values for that enumeration. (**This was a very common request for 3.0**).
* If a cell type is a boolean, use a checkbox as the editor
* If a cell has either a named selection list or selection values, use a select box
* Otherwise, use a textbox that grows or shrinks to the size of the cell value (a big improvement for 3.0 in the opinion of this author).

