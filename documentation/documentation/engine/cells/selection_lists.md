<!--Title:Selection Lists-->
<!--Url:selection_lists-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> 

The selection list usage is somewhat improved - but different - than the earlier usage in Storyteller 1-2. Referring to a named list versus supplying the actual values inline is now two distinctly different usages (`SelectionList` vs. `SelectionValues`). In addition, Storyteller 3 now supports lists of "display/value" pairs to make more readable specification text.

</div>

Storyteller allows you to create user-defined lists of valid values to a Cell for an improved editor experience. These lists can be defined directly on a Cell or referenced by list name to values defined at either the containing `Fixture` level or from a custom `ISystem.`


## Defining Lists Directly to a Cell

You can add selection lists directly to a cell with the `[SelectionList(name of list)]` or `[SelectionValues(value1, value2, ...)]` attributes for grammars that call methods:

<[sample:selection-values-cell]>

You can also use the `SelectionList()` and `SelectionValues()` methods on `ICellExpression` to add selection values to other kinds of grammars:

<[sample:using-cell-expression]>

As of Storyteller 4.1, you can also add any of the attributes on the Type of an argument being passed to a grammar.

Here's an example from the Storyteler.Selenium addon (may still be forthcoming when you read this):

<[sample:using-selection-list-on-arguments]>

In the case above, `NamedElement` refers to a Selenium element in a list in each selenium-aware Fixture class. To make the selection list for the Fixture appear in the editor, I added the `[SelectionList]` attribute directly to the 
`NamedElement` class.

A grammar that uses this is shown below:

<[sample:using-NamedElement]>


## Fixture Wide Lists

You can also define named option lists to a Fixture class like this:

<[sample:selection-lists-in-fixture]>



## System Wide Lists

Lists can also be defined or built in a custom `ISystem` like this:

<[sample:registering-custom-runtime-converter]>

## What does it look like?

In usage, using a selection list looks like this in the specification editor:


<table class="table table-bordered table-hover" id="2e87da8f-d2bb-45a0-a375-39e38e3f9564" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1"><thead data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0"><tr data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.0"><th class=" bg-primary" colspan="3" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.0.0"><a title="Remove this step or section" class="delete" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.0.0.0"><i class="fa fa-fw fa-close" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.0.0.0.0"></i></a><span data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.0.0.1">Player Positions</span></th></tr><tr data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.1"><th data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.1.0"></th><th data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.1.1:$Player">Player</th><th data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.0.1.1:$Position">Position</th></tr></thead><tbody data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1"><tr id="0e66e6c1-241d-407b-a0e7-553228d10622" class="table-editor-row active" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0"><td data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.0"><a title="Remove this step or section" class="delete" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.0.0"><i class="fa fa-fw fa-close" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.0.0.0"></i></a><a class="clone-table-row" title="Clone this row" href="#" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.0.1"><i class="fa fa-fw fa-copy" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.0.1.0"></i></a></td><td data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Player"><span tabindex="0" role="button" data-cell="Player" class="cell label label-default" title="Player" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Player.$Player">Justin Houston</span></td><td data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Position"><select type="text" tabindex="0" class="cell active-cell mousetrap" data-cell="Position" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Position.$Position"><option selected="" value="LB" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Position.$Position.0">LB</option><option value="OL" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Position.$Position.1">OL</option><option value="DL" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Position.$Position.2">DL</option><option value="WR" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Position.$Position.3">WR</option><option value="RB" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.1.0.1:$Position.$Position.4">RB</option></select></td></tr></tbody><tfoot data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.2"><tr data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.2.0"><td colspan="3" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.2.0.0"><a tabindex="0" title="Click to add a new row to this table, or use alt+ins" class="add-table-step" href="#" data-reactid=".0.1.$spec-editorruntime-converter=2editing.1.1.2:0.1.0:1.2.0.0.0">Add Row</a></td></tr></tfoot></table>


