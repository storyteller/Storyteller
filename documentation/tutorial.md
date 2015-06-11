<!--Title:Tutorial-->

Storyteller is a tool for creating automated tests against your system that generate specification documents and correlated results, both in human readable HTML.

<[spec-result:Splash/Splash]>

Storyteller is certainly **not** a replacement for xUnit tools, but does fit nicely as a tool for executable specifications (or Behavior Driven Development if you will) or for technical facing integration tests. 

## Executable Specifications

One of the most pernicious sources of wasted effort and project failures in software development is the result of vaguely worded or insufficiently detailed requirements. Far too many times in my own career I have found myself arguing with business analysts or testers because they simply interpreted a requirements document differently than the developers did when they built the code.

We believe that the practice of _[Executable Specifications](http://agilemodeling.com/essays/executableSpecifications.htm)_ makes for a superior form of requirements by forcing the stakeholders and development team members to agree on detailed scenarios that can be unambiguously verified against the running system. 



## Is Storyteller a tool for Behavior Driven Development?

If you think of Behavior Driven Development (BDD) as a process to create effective communication between the business stakeholders or users and the development team, then yes, Storyteller can be used for BDD. If BDD conjures up bad memories of awkward, high ceremony .Net tools with goofy fluent interfaces that hurt to use, then nope, Storyteller is just a testing tool with pretty output.

## Authoring your First Storyteller Specification

Let's say that we're writing a simple calculator application like this one -- but pretend it's not actually implemented for the sake of this tutorial:

<[sample:Calculator]>

The "Calculator" application is the "system under test" in Storyteller nomenclature. To describe the desired behavior of our Calculator application, you could design a <[linkto:documentation/language;title=specification language]> like this Storyteller specification below:

<[spec:Calculator/Adding and Subtracting Numbers]>

To actually implement the specification language we designed above in C# code that exercises our `Calculator` application, we would write a "Fixture" class like this:

<[sample:CalculatorFixture]>

When you execute the specification from above with Storyteller -- assuming that our Calculator application actually works -- the resulting html in our results report will be:


<[spec-result:Calculator/Adding and Subtracting Numbers]>