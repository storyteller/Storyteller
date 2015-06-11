<!--Title:Automated Testing Best Practices-->

The Storyteller team has over a decade of experience in building system-level integration tests and business-facing executable specifications. As such, the Storyteller team has developed some strong opinions about how this kind of testing is best accomplished and those opinions naturally guided the feature set and approach of Storyteller.




## Continuous Integration

Automated tests that are never or seldom executed are likely to be useless and possibly even a burden on a development team trying to keep that test code up to date with architectural changes. Even worse, automated tests that are not constantly executed are not really trustworthy *because you no longer know if test failures are real or just because the application structure changed*. The Storyteller specifications can provide a level of value as a regression test suite, but only if they are executed frequently.

The Storyteller team recommends that your team runs the Storyteller suite on every checkin as part of your continuous integration strategy. If the Storyteller regression run becomes too slow for the main build, we recommend executing the Storyteller suite as a cascading build and possibly splitting up your Storyteller execution to a separate build per suite.

It's an ugly world out there in software development land, and from time to time your Storyteller regression specifications will fail. When that happens, it's best if it's easy to correlate the new failures to the history of commits to your code. 


## Whitebox vs. Blackbox Testing

The Storyteller team strongly believes that whitebox tests are far more efficient in terms of team effort to author than blackbox tests. We also believe that whitebox tests are frequently more effective in finding problems in your system - especially for functional testing - because they tend to be much more focused in scope and frequently faster. 

We do believe that there is value in having *some* blackbox tests, but we believe these blackbox tests should be about finding problems in technical integrations and infrastructure whereas the whitebox tests should be used to verify the desired functionality.

Our philosophy is that the act of testing is more about reducing project risk by finding and removing problems from your system rather than trying to verify that the system is completely perfect.

For another explanation of this thinking, see [Jeremy's Only Rule of Testing](http://jeremydmiller.com/2012/10/11/test-with-the-finest-grai/).

## Don't Test Business Logic Through the User Interface

Automating tests against a user interface has to be one of the most difficult and complex undertakings in all of software development. And while teams have been successful using Storyteller to automate tests against UI's, we strongly recommend that you **do not test business logic and rules through your UI**. What does this mean? For example:

* Test complex logic by having Storyteller call into the service layer instead of the UI
* Have Storyteller directly exercise validation rules if they are complex enough to warrant their own tests
* Use [Subcutaneous Tests](http://martinfowler.com/bliki/SubcutaneousTest.html) even to test some UI behavior if your architecture supports that
* Make HTTP calls directly against the endpoints in a web application instead of trying to automate the browser is that can be useful

The general rule we encourage in test automation is to use the "quickest feedback cycle that tells you something useful about your system" -- and user interface testing can easily be much slower and more brittle than other types of automated testing.


## Go in through the "Front Door" of your System

We believe that the system state for specifications (the "arrange" part of "arrange, act, assert") should, *as much as feasible*, be done by using the actual internal services of the application instead of trying to work around the application code by writing directly to an underlying database. 

Why do we say this?

* Shoehorning data directly into the database can easily circumnavigate programmatic validation in your application leading to tests that are breaking for scenarios that are very unlikely in real life (I spent countless hours arguing with testers early in my career over this one). 
* When automation testers create "shadow" data access tooling that parallels the real application code, you suddenly have more coupling to the details of the application's implementation that are not obvious to the development team. I have frequently seen automated tests using parallel data access strategies break when the application persistence strategy or database schema changed as the project progressed.
* It's nice to find problems in the real data access code too


## Specifications should be Self Contained

We strongly believe that specifications should be responsible for setting up whatever input state they require. Having automated tests rely on some sort of shared, static data set to be set up by something else, somewhere has been very brittle in our experience. Shared testing data sets can easily cause more harm than good when you find yourself wanting to add new data for a new test that ends up breaking other tests. As much as possible, we think you should strive for specifications that are completely isolated from the other specifications. 

In our opinion, having the test input in the same Storyteller specification as the expected results makes the specifications much easier to understand because the cause and effects are in the same place. Because of this philosophy, the Storyteller team has deeply invested in features that make setting up the system state as easy to express as possible.

## Only Express Facts that are Germane to the Specification

Try not to allow too many technical implementation details leak into the *expression* of the specification. Hide details like starting up a web server, or executing a command line for batch programming, or initializing a polling system behind the language of the specification. Remember that you ideally want Storyteller specifications to act as system documentation. We also recommend that the Storyteller specifications be as decoupled from the details of the system architecture as possible so as to not hinder the evolution of your architecture. Put another way, you want to be able to change your system architecture and have the expressed goal of the Specification remain the same.


For data setup, using Storyteller can make tests easier to understand by making data setup much more declarative than it would be if you were writing raw SQL scripts or writing directly to a data access layer. We advise you to be aggressive with default values in your fixtures and to quietly set up fields in the Fixture code that are required by your database constraints, but are not really relevant to your specification.

See [My Opinions on Data Setup for Functional Tests](http://jeremydmiller.com/2013/01/26/my-opinions-on-data-setup-for-functional-tests/) for more explanation of this thinking.



