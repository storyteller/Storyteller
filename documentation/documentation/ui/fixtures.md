<!--title: Fixture & Grammar Explorer-->

<div class="alert alert-info"><b>Note!</b> This feature was completely rewritten in Storyteller 4.0
with quite a bit more useful functionality</div>

The _Fixture & Grammar Explorer_ gives you a one stop shop for previewing, editing, and generating <[linkto:documentation/engine/fixtures]>
and <[linkto:documentation/engine/grammars]>. You can navigate directly to this page with the "Fixtures and Grammars" link
in the top bar of the UI:

<[img:content/images/fixtures/navigate.png;Navigation to the Fixture & Grammar Explorer]>

## Fixtures

The fixture & grammar explorer shows a table of all the known Fixture's in the system. This is in effect,
a union of the <[linkto:documentation/fixturemarkdown;title=Fixture's described by markdown]> and the coded Fixture classes.

<[img:content/images/fixtures/fixture-explorer.png;The fixture explorer]>

From left to right, the columns in the grid shown above:

1. The _Errors_ column shows a count of how many grammars are malformed or misconfigured. 
1. The _Missing_ column shows a count of how many grammars are specified in the markdown, but not implemented in the code
1. The _Fixture Title_ column is the heading for the Fixture. Click on this column to drill into the details of each Fixture.
1. _Implementation_ is the full name of the .Net class for the Fixture if one exists
1. In the _Commands_ column, the _Edit_ link attempts to open up the existing markdown file for the Fixture in your default
   editor for markdown. The _Export_ link will tell Storyteller to export a new markdown file for the Fixture that
   represents a merged union of the coded Fixture and any markdown overrides. 

 <[img:content/images/fixtures/missing-code-number.png;A fixture with missing grammars]>
  

## Exporting and Reloading Fixtures

Storyteller tries hard to watch the relevant files in a Storyteller project to know when to reload
the Fixture markdown files. If things are working perfectly, you can edit the Fixture markdown files
and see the Storyteller UI update in near real time. That being said, there are plenty of times when you'll 
need to kickstart Storyteller into reloading Fixture files or to export all the existing Fixture classes 
into their markdown representation for easy editing:

<[img:content/images/fixtures/fixture-commands.png;Commands for reloading or exporting Fixture's]>

In order from top to bottom,

1. _Reload/Recycle Everything!_ recycles the entire system and reloads the Fixture markdown files
1. _Reload Fixtures_ forces Storyteller to reload all the Fixture markdown files to apply any outstanding changes
1. _Export Fixture Language_ exports all known Fixture's to markdown files in the `/Fixtures` folder


## Fixture Explorer

If you click through to the Fixture page from the Fixture Explorer grid, you can review how all the grammars in 
the Fixture will be rendered in the specification preview:

<[img:content/images/fixtures/preview.png;Fixture usage in the specification preview]>

Preview how the grammars will be rendered in the specification editor pages:

<[img:content/images/fixtures/editor-preview.png;Fixture usage in the editor page]>

If there are any grammars defined in the Fixture markdown file, you will see skeleton code to implement those
grammars in the _Missing Code_ tab:

<[img:content/images/fixtures/missing-code-preview.png;Skeleton code to generate Fixture classes]>

Or if there are no missing grammars, you'll see this:

<[img:content/images/fixtures/missing-code.png;No missing grammars]>

Finally, you can see what the grammar usage would be within the <[linkto:documentation/markdown;title=specification markdown files]>
with a sample specification:

<[img:content/images/fixtures/markdown-sample.png;Sample usage of this Fixture in markdown]>




