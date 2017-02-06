<!--Title:Crafting the Specification Language-->
<!--Url:language-->

The Storyteller team urges users to treat Storyteller as a means to create [executable specifications](http://c2.com/cgi/wiki?TestsAreAnExecutableSpecification) that describe what your system is **supposed** to do before you develop features and later act as _living documentation_ about your system during its lifetime. To that end, Storyteller is designed with the express goal of making the rendered specification output as human readable and understandable to developers, testers, and non-technical team members as possible.

See also:

<[TableOfContents]>

## Designing the Language Upfront

We recommend that any Storyteller usage starts with an effort to first determine _how_ your team wants to express the specification for any new work. Our recommendations for doing this are:


* Design your specification language on paper or on a white board first before firing up Storyteller. Focus on how you would like to best express the specification first, then try to map that language onto <[linkto:documentation/engine/fixtures;title=fixtures]> and <[linkto:documentation/engine/grammars;title=grammars]> that will implement the language.
* If at all possible, design the specification language collaboratively with developers, testers, and the business contacts all involved. One of the primary goals of the "executable specification" process is to eliminate the waste so frequently encountered in software projects when team members interpret ambiguously written requirements documents differently. The more you remove ambiguity from your specifications and establish a shared vision of new functionality, the better off your team is going to be in the end.
* Make the language be as declarative as possible and expressed in terms of the goal of the specification. Remove purely technical details that are not germane to the meaning of the specification. Aggressively use `Fixture.SetUp()/TearDown()` methods to handle technical setup and cleanup tasks.
* Try to decouple the expression of the specification from the implementation details of the underlying system. This is important to try to prevent your specifications from being brittle later by being too coupled to the implementation details when you inevitably have to make design or architectural changes to your system.
* Avoid imperative coding, don't treat Storyteller like an overweight xUnit tool


<div class="alert alert-info" role="alert"><strong>Note!</strong> The Storyteller team wants to extend the specification editor tooling with the ability to define the language "on the fly" without having to first write any .Net code for the official 3.0 release, but that functionality does not exist outside of a spiral bound notebook yet.  </div>


## Flow versus Table Style Specifications

Storyteller was strongly influenced by the ["Framework for integrated test"](http://en.wikipedia.org/wiki/Framework_for_integrated_test) (FIT) tool that first introduced the idea of trying to collect detailed specifications from non-developers in a way such that those specifications could later be turned into automated tests. In the early days of Extreme Programming, there was a lot of discussion about how to best use FIT, specifically how to best express [executable specifications](http://c2.com/cgi/wiki?TestsAreAnExecutableSpecification). 

FIT was originally all about trying to get users to express requirements in tables (using Excel spreadsheets, html tables, and later a Wiki format in FitNesse) and it was good, because the table formats allowed you to express things succinctly and clearly as examples of how inputs should result in expected outcomes. But of course, the declarative table formats just do not cover every possibility, so FIT introduced better support for "flow based" tests that read much more like plain language. That being said, the FIT community (and the Storyteller team), recommends that you favor table-based specifications whenever possible.

For more context, see (A FIT `DoFixture` is analagous to a Storyteller "Sentence" and a FIT `ColumnFixture` is a Storyteller "Table"):
* [Flow-style vs. declarative-style Fit fixtures](http://testingreflections.com/node/2721)
* ["mumble test business rules mumble" by James Shore](http://www.jamesshore.com/Blog/mumble-test-business-rules-mumble.html)



To make this concrete, look at how this specification against a calculator application can be expressed in two different ways:

<[spec:Calculator/Flow vs Table]>

Storyteller supports both flow- and table-based expression of specifications and you can mix and match your style in a single specification. 

## Comments

From the very beginning, Storyteller has allowed users to embed purely textual prose before or after grammar steps into the specification documents. If you take the approach of using Storyteller to create system specifications as living documentation rather than just using Storyteller as an integration testing tool, comments are an invaluable tool to provide better explanations and descriptions of the desired system behavior.

The specification below uses several comments to identify test cases.

<[spec:Calculator/Using Sentences]>

Right now, comments are only pure text. If there is sufficient demand, Storyteller may add support for markdown in comments and possibly the ability to embed snippets of code or server supplied information in comments.
