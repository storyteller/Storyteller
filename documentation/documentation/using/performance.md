<!--title: Performance Thresholds -->

Storyteller 4.0 introduced a new feature to designate performance thresholds that are enforced when specifications
execute. In effect, this means that you can have Storyteller fail a specification that while passing functionally,
ran slower than your desired threshold.

The easiest way to use this feature is with the `[PerfLimit]` attribute on grammar methods within `Fixture` classes
like this:

<[sample:PerfLimitAttribute]>

Today, the `[PerfLimit]` attribute can be used on Sentence, Fact, and SetVerification grammars. The `[PerfLimit]` attribute
can also be used against the individual rows within a Table grammar. Storyteller doesn't yet support a performance threshold
against Paragraph's or Embedded Section grammars.

Performance threshold violations are shown in the specification results both inline and with an aggregated summary at the 
top of the page like this:

<[spec-result:Miscellaneous/Performance Thresholds]>

## Threshold Policies

You can also use the static `PerformancePolicies` class to express additional performance thresholds that are applied conventionally
at the end of the specification run:

<[sample:PerformancePolicies]>
