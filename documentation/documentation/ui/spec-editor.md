<!--Title:The Specification Editor-->
<!--Url:spec-editor-->

Individual specifications can be reviewed, edited, and executed from the Specification Editor page. The page is layed out as a title and command bar at top, and a representation of the specification below in one of three modes:

1. Preview -- a read only view rendering of a specification perfect for reviewing and documenting a specification. Accessed by either clicking the "Preview" button at the top right or by the `ctrl + 1` keyboard shortcut

1. Editor -- an editable rendering of the specification. Accessed by clicking the "Editor" button at the top right or by the `ctrl + 2` keyboard shortcut

1. Results -- A rendering of the specification with any results. Accessed by clicking the "Results" button at the top right or by the `ctrl + 3` keyboard shortcut.

When you access a specification from the <[linkto:documentation/ui/spec-explorer]> screen, you will be taken to the results view for the specification if it exists, or otherwise to the editor view.


## Status Bar

If the specification is currently queued, executing, or has a recorded resort, a status bar is shown underneath the title and command bar like this one below from a specification with failures:

<[img:content/images/editing/status-bar.png;Status Bar with Failures]>

<[img:content/images/editing/status-bar-success.png;Status Bar with a Success]>

The status bar tells you the resulting counts if any, and when the specification was last executed in local machine time.



## Running, Saving, and Undo/Redo Changes

At the top left of the screen, just below the specification title, is a series of buttons providing contextual actions on a specification.

<[img:content/images/editing/spec-commands.png;The Command Bar]>

From left to right, the buttons are:

1. The "Play" button queues the specification for execution. This button is disabled if the specification is executing or queued.

1. The save button is enabled if there are any outstanding changes to the specification. When the specification is saved, an alert will momentarily appear below the specification title.

1. Undo and Redo buttons to rollback any unsaved changes or to reapply changes that were previously rolled back. 



## Preview the Specification

The preview screen is the cleanest, most readable way to view the content of a specification. This mode is intended to be used for reviewing and documenting the expected behavior of the system under test.

<[img:content/images/editing/preview.png;The Preview Screen]>








## The Results Mode

The results view will display the specification with all the results rendered as:

1. Successful facts, assertions, and set matches in green
1. Unsuccessful facts, assertions, and set matches in red
1. Errors in yellow

At the bottom of the specification results is a table for the performance timings of the specification execution, the `Debug.WriteLine()` tracing from .Net, and any custom logging output. See <[linkto:documentation/instrumentation]> for more information on using this feature.

<[img:content/images/editing/results.png;The Results View]>

If the specification is currently executing, the results view updates incrementally to reflect the status of the current execution.


## Changing the Lifecycle

The lifecycle of a specification can be altered by toggling the "Acceptance" or "Regression" button on the top right of the specification page. The current lifecycle is shown on the button. Unlike Storyteller 1-2, you do need to explicitly save the specification after changing the lifecycle.



## Editing a Specification


<div class="alert alert-info" role="alert"><strong>Note!</strong> The Storyteller team has invested a great amount of time trying to make the specification editing as keyboard-centric and efficient in the same manner as the best coding IDE's. We strongly recommend that you learn the keyboard shortcut list from the "Help" menu in the shell to make specification editing be more mechanically efficient.
</div>

The editor screen is divided into two vertical panes. The left pane holds the specification outline explained in a later section and contextual controls related to the active section in the main pane. The main pane at the right holds all the controls necessary to add or delete sections, steps, and comments and edit the information in the specification.

<[img:content/images/editing/editor.png;The Editor View]>

The maximum retry count for the specification can be edited by changing the textbox at the top left of the contextual pane.


Individual cells in the specification are edited by either textbox's, checkbox's, or select box's depending on the type of cell. Only the active cell is shown in an editable form. All other cells are in a "preview" mode to enhance the legibility of the specification while editing (this was a major shortcoming in Storyteller 1-2).

<[img:content/images/editing/editing-cells.png;Editing Cells]>




## The Specification Outline and Step "Containers"

The specification itself, top level sections, tables, and embedded sections can all act as "containers" that are composed of simpler steps. Inside the specification editor, only one container can be active at any one time. The contextual controls in the left pane of the editor are dependent upon the active container:

* Specification -- the left pane will have a list of all the available `Fixture` types by title to add a section to the bottom of the specification. There is also a link to add a comment directly to the specification itself.

* Section -- the left pane will have a list of all the available `Grammar's` in the `Fixture` used by that section as well as a link to add a comment

* Embedded Section -- the left pane will have a list of all the available `Grammar's` in the `Fixture` used by that embedded section as well as a link to add a comment.

* Table -- if there are any optional columns, you will see a small control to turn optional columns on or off within that table



You can activate a container by either:

1. Click or tab into a cell directly within that container to make that cell the active cell
1. Click the "add steps or comments..." link at the bottom of a section or the "add sections or comments..." link at the bottom of the specification
1. Use the specification outline explained below

The outline structure of the containers within a specification is shown in a tree list control at the top left of the contextual pane:

<[img:content/images/editing/outline.png;The Specification Outline]>

The active container will be shown in bold. Clicking on any other container title in this control will make that container be the active container.





## Adding Sections

Starting from a new specification, the most likely first step will be to add the first section. The initial state will look something like this:

<[img:content/images/editing/initial-state.png;Initial Specification State]>

In the contextual pane you can see that there is list of all the available `Fixture's` ordered by title. You can add a section by clicking on one of the fixture titles or by using the lookup control for adding sections in the main pane as shown below: 


<[img:content/images/editing/lookup-section.png;Adding a new Section via Lookup]>




## Adding Steps to a Section

Once a section is the active container, you can add steps to a section by using the contextual controls for each grammar in the contextual pane on the left as shown in this example:

<[img:content/images/editing/add-step-contextual-menu.png;Add a step from the contextual menu on the left]>

Or by using the lookup control at the bottom of the section in the main pane. If the section is not active, you will see a placeholder link at the bottom like this image below:

<[img:content/images/editing/add-step-1.png;The 'add steps or comments' placeholder]>

After clicking on this link, you should now see a lookup textbox that you can use to add new steps (or comments) by typing out the title or sentence format of an available grammar as shown in the next image:

<[img:content/images/editing/add-step-2.png;WHAT?]>


## Deleting Steps, Sections, or Comments

Any step, section, or comment in the specification body can be removed by clicking the 'X' icon at the top left of the item as shown below.

<[img:content/images/editing/deleting.png;Deleting]>

## Adding Comments

Comments can be added to the active container by either via the add section or add step lookup controls as shown below:

<[img:content/images/editing/new-comment.png;New Comment via the Lookup]>

Or by the contextual links in the left pane for an active container:

<[img:content/images/editing/new-comment-2.png;New Comment via the Contextual Links]>

## Reordering Steps or Sections

Sections, comments, and steps can be reordered within their parent container by using keyboard shortcuts:


1. Reorder steps or sections by moving the active step or section up with `ctrl + alt + up` or `ctrl + pageup`
1. Reorder steps or sections by moving the active step or section down with `ctrl + alt + down` or `ctrl + pagedown`

## Renaming the Specification

The specification name can be edited by clicking on the specification name and editing the text. As with all changes, the specification is not automatically saved.

<[img:content/images/editing/editing-spec-name.png;Renaming the Specification]>



## Working with Tables

Table and Set Verification grammars have their own controls for editing. A table editor looks like this:

<[img:content/images/editing/editing-table.png;Editing Tables]>

Each row has an `X` icon to delete an individual row and an icon that will clone the row when clicked. At the bottom is an "Add Row" link that when clicked, will add a new row to the bottom of the table.

When a table with optional columns is the active container, a contextual control to toggle these columns on and off is shown in the left pane:

<[img:content/images/editing/optional-columns.png;Toggling Optional Columns]>


