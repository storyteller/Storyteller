<!--title:Stepthrough Mode for Debugging-->

<div class="alert alert-success">If you're looking for one singular reason to upgrade Storyteller from
3.0 to 4.0 or to switch over from some other tool, the stepthrough mode is just that.</div>

The **biggest** new feature for Storyteller 4.0 is the ability to execute specifications in an
interactive "stepthrough" mode to more easily troubleshoot and debug specifications that are failing.
The stepthrough mode supports the familiar debugger concepts of _breakpoints_, _run next_, _run to breakpoint_,
or _run to the end_.

## Kicking off the Stepthrough Mode

<div class="alert alert-info"><b>Note!</b> If there are any specifications queued up for execution, the stepthrough
request will go into the same queue and will not start until the other specifications in front of it are finished.</div>

To start the stepthrough execution of a specification, there's a new button in the top left of the 
<[linkto:documentation/ui/spec-editor;title=specification editor]> that starts running a specification
in stepthrough mode:

<[img:content/images/stepthrough/kickoff-stepthrough.png;Starting the stepthrough mode]>

You can also trigger the stepthrough mode from a specification editor page with keyboard shortcuts:

1. `ctrl + shift + s` or `ctrl + 3` to queue up the stepthrough of the current specification
1. `ctrl + 4` to <[linkto:documentation/ui/system;title=recycle the system]> and queue up the current specification for stepthrough


## Understanding the Progress

First off, Storyteller will show a progress bar across the top of the page for the current specification:

<[img:content/images/stepthrough/status-bar.png;The status bar during stepthrough]>

If you navigate away from the specification editor page, you can use the progress bar to navigate right back to the 
specification that's running in stepthrough mode. You can also cancel the running execution from the same status bar.

Storyteller will highlight the current step (i.e., what is about to be executed) in navy blue like this:

<[img:content/images/stepthrough/initial-section-setup.png]>

One way or another, the Storyteller UI is placing a small control bar right into the highlighted step rendering
just to make them easier to find on the page.

Do note that the stepthrough mode shows normally "hidden" steps like `Fixture.Setup()` or `Fixture.Teardown()`
to give you a chance to step into those operations during the stepthrough process.



## Breakpoints

You can toggle breakpoints within the specification by clicking inside of any open circle at the left of a 
line in the specification. Active breakpoints show as a solid red circle like this:

<[img:content/images/stepthrough/setting-breakpoint.png]>

You can clear all the existing breakpoints with this button in the stepthrough control bar:

<[img:content/images/stepthrough/clear-all-breakpoints.png;Clear all breakpoints]>


## Run the Next Step

To execute **only** the next specification step, click the button shown below or use the `F10` key:

<[img:content/images/stepthrough/run-next.png]>


## Run to a Breakpoint

To run all the steps up to the next breakpoint, use the button shown below or use the `F8` key:

<[img:content/images/stepthrough/run-to-breakpoint.png]>

If there are no breakpoints left before the end of the specification, this will just run the rest of the 
specification.

## Run to the End

To just say "go ahead and finish running this specification," click the button below or use the `shift + F10`
keyboard shortcut:

<[img:content/images/stepthrough/run-to-end.png]>

The Storyteller UI will navigate to the results page for the current specification when the stepthrough is complete.

## Stop the Stepthrough Execution

To stop the stepthrough execution, click this button or use the link in the progress bar at the top of the page:

<[img:content/images/stepthrough/stop-execution.png]>

