<!--Title:The Specification Lifecycle-->

<div class="alert alert-info" role="alert">
I grew up in the era of Saturday morning cartoons and I vividly remember the old Schoolhouse Rock videos. If you are of my generation, just think about a bill singing about becoming a law and I think you'll get the gist of this subject pretty well.
</div>

<div class="alert alert-warning" role="alert">
This idea of a "lifecycle" and how it impacts Storyteller as a regression testing tool has confused and tripped up teams in the past. Please make sure you understand why and how this is used within Storyteller.
</div>

Years ago I worked in a shop that was one of the pioneers of Extreme Programming. One of the processes we used on some projects was to treat our business facing automated acceptance tests as having two states in the iteration lifecycle:

1. _Acceptance_ -- the specification is a declaration of what is supposed to happen, but may be a work in progress. 
1. _Regression_ -- the work described in the specification is supposed to be complete and should never fail.


Today, Storyteller formalizes this lifecyle in its <[linkto:documentation/ci;title=continuous integration support]>. When specifications are first created in the editing tool, a specification will have its lifecycle set to _Acceptance_ to mark it as a work in progress that will not cause build failures when the Storyteller specifications are executed in the batch mode. When the development team is satisfied that the functionality of a specification is "done," the team should mark that specification as _Regression_ so that Storyteller treats that specification as a mandatory check in the system.



