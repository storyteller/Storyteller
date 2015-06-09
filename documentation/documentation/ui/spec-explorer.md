<!--Title:The Specification Explorer-->
<!--Url:spec-explorer-->

The "Specification Explorer" is the main view of the Storyteller specification editor and provides a pretty typical tree view of all the specifications in the project. The suite nodes in the specification explorer can be expanded or collapsed by clicking the <i class="fa fa-fw fa-caret-down" data-reactid=".0.1.$1af4afe3-a926-4abe-bd27-c3ae23409a5e.1.1:$Embedded.0.0.0"></i> or <i class="fa fa-fw fa-caret-right" data-reactid=".0.1.$1af4afe3-a926-4abe-bd27-c3ae23409a5e.1.1:$Embedded.0.0.0"></i> icons.

The specification explorer consists of a tree view component displaying all the suites and specifications and a vertical pane on the left that contains the controls to filter the specification tree or perform batched operations on the specifications shown on the tree.

<h5><strong>The Specification Explorer page</strong></h5>
<img src="<[url:content/images/spec-explorer.png]>" width="100%"/>

## Specification State

The display of the specification leaves in the tree view will change to denote status. The table below demonstrates the different specification states:

<table class="table">

<tr>
	<th>Description</th>
	<th>Display</th>
</tr>
<tr>
	<td>No results, not running or queued</td>
	<td><i class="fa fa-circle-o"></i> [Specification Name]</td>
</tr>
<tr>
	<td>Last execution succeeded</td>
	<td><i class="fa fa-check text-success"></i> [Specification Name]</td>
</tr>
<tr>
	<td>Last execution failed</td>
	<td><i class="fa fa-exclamation-circle text-danger"></i> [Specification Name]</td>
</tr>
<tr>
	<td>Queued</td>
	<td><i class="fa fa-circle-o"> [Specification Name]</i></td>
</tr>
<tr>
	<td>Running with no conclusive results</td>
	<td><i class="fa fa-spinner fa-spin"></i> <strong>[Specification Name]</strong></td>
</tr>
<tr>
	<td>Running successfully</td>
	<td><i class="fa fa-spinner fa-spin text-success"></i> <strong>[Specification Name]</strong></td>
</tr>
<tr>
	<td>Running with failures</td>
	<td><i class="fa fa-spinner fa-spin text-danger"></i> <strong>[Specification Name]</strong></td>
</tr>

</table>



## Filtering

The specification tree can be filtered by any combination of result state (none, any, successful, or failed) and specification lifecycle (any, acceptance, or regression) using the filter button groups in the left of the specification editor screen.


## Adding a new Top Level Suite

To add a new top-level suite, click the "new suite" link just to the right of the title "All Specifications" at the top of the tree view to bring up the modal dialog for adding a suite. Note that you can only add top level suites when you are on the home page of the specification explorer.

<h5><strong>The add suite dialog</strong></h5>
<img src="<[url:content/images/new-suite.png]>" width="100%"/>


## Adding Child Suites

Click the "new child suite" link just to the right of any suite node in the tree view to open up the modal dialog for adding child suites.

<h5><strong>The add a child suite dialog</strong></h5>
<img src="<[url:content/images/new-child-suite.png]>" width="100%"/>

## Adding Specifications

Click the "new spec" link to the right of any suite node to bring up a modal dialog to add a specification to that suite.

<h5><strong>The new specification dialog</strong></h5>
<img src="<[url:content/images/new-specification.png]>" width="100%"/>

## Cloning an Existing Specification

Clicking the "clone" link to the right of any Specification leaf in the tree will bring up a modal dialog to enter the name for the new Specification. When cloning a specification, Storyteller copies the entire structure of the original Specification but *always sets the lifecycle of the new specification to "Acceptance"*.

<h5><strong>Clone a specification dialog</strong></h5>
<img src="<[url:content/images/clone-specification.png]>" width="100%"/>

## Deleting Specifications

Click the "delete" link to the right of any Specification to delete it.

## Navigate to a Suite

In the tree view, click on the name of any suite to drill down into the specifications for only that suite.

## Running Specifications

To run all the specifications shown in the tree view, click the "Run All" link at the top left of the specification explorer page. This command will only run the specifications that meet the currently selected filter.

To run one specification at a time, just click the "run" link to the right of any specification leaf.

## Navigating to a Specification

In the tree view, click on the name of any specification to navigate to the <[linkto:documentation/ui/spec-editor]> page for that specification.

## Batch Changing Specification Lifecycle

At any point, you can change the lifecycle of all the specifications currently in the tree view by clicking either the "Mark as Acceptance" or the "Mark as Regression" buttons. These commands honor the current specification filter. Do note that you will still have to persist the changes to any specifications that are already loaded. Use the "Save All Changes" link at the top to persist all outstanding changes.

