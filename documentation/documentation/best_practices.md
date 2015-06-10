<!--Title:Automated Testing Best Practices-->

The Storyteller team has over a decade of experience in building system-level integration tests and business-facing executable specifications. As such, the Storyteller team has developed some strong opinions about how this kind of testing is best accomplished and those opinions naturally guided the feature set and approach of Storyteller.

## Executable Specifications

One of the most pernicious sources of wasted effort and project failures in software development is the result of vaguely worded or insufficiently detailed requirements. Far too many times in my own career I have found myself arguing with business analysts or testers because they simply interpreted a requirements document differently than the developers did when they built the code.

We believe that the practice of _Executable Specifications_ makes for a superior form of requirements by forcing the stakeholders and development team members to agree on detailed scenarios that can be unambiguously verified against the running system. 



## Continuous Integration

Automated tests that are never or seldom executed are likely to be useless and possibly even a burden on a development team. The Storyteller specifications can provide a level of value as a regression test suite, but only if they are executed frequently. 

The Storyteller team recommends that your team runs the Storyteller suite on every checkin as part of your continuous integration strategy. If the Storyteller regression run becomes too slow for the main build, we recommend executing the Storyteller suite as a cascading build and possibly splitting up your Storyteller execution to a separate build per suite.


## Whitebox vs. Blackbox Testing

The Storyteller team strongly believes that whitebox tests are far more efficient in terms of team effort to author than blackbox tests. We also believe that whitebox tests are frequently more effective in finding problems in your system - especially for functional testing - because they tend to be much more focused in scope and frequently faster. 

We do believe that there is value in having *some* blackbox tests, but we believe these blackbox tests should be about finding problems in integrations and infrastructure whereas the whitebox tests should be used to verify the desired functionality.

Our philosophy is that the act of testing is more about reducing project risk by finding and removing problems from your system rather than trying to verify that the system is completely perfect.


## Go in through the "Front Door" of your System

The system state for specifications should, *as much as feasible*, be done by using the actual internal services and 



* Self-contained specs
* Set up your own state
* Go in through the front door
* Only set up data that's germane to the spec
* Be declarative
* Separate the Expression of the Specification from the Innards
* Treat it as a Specification/Living Documentation
