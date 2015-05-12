<!--Title:Terminology-->
<!--Url:terminology-->



## Specification
A _Specification_ is a single document describing some expected behavior of the system under test. For the 3.0 release, Storyteller has replaced the older _Test_ nomenclature with _Specification_.

## Suites
StoryTeller projects are organized into Suite’s of closely related specifications. Every specification must be in a suite (an historical quirk that we may eliminate soon).


## Grammar

Before you write specifications, you need a vocabulary to express the actions and assertions you want to use against the system under test. The implementation of the specification language is referred to as _Grammars_. See <[linkto:documentation/grammars]> for more information

## Fixture
A closely related collection of grammars implemented in a single class. In common usage, you will create a separate Fixture for each individual screen or service in your system. See <[linkto:documentation/fixtures]> for more information.

## Sentence
A type of grammar that is expressed in a single line. A sentence can have zero to many inputs. Sentences can also be used to assert a fact or check one or more expected values. The small specification below uses three different Sentence grammars:

<[spec:Glossary/Sentences]>

See <[linkto:documentation/grammars/sentences]> for more information.

## Fact
A special _Sentence_ with no inputs that simply declares that a fact about the current state of the system should be true. See <[linkto:documentation/grammars/facts]>.

## Table
A grammar expressed as in tabular form. Table’s can be used to set up input state or express decision trees. Table’s are valuable for example driven tests and are analagous to the old FitNesse [ColumnFixture](http://fitnesse.org/FitNesse.UserGuide.FixtureGallery.BasicFitFixtures.ColumnFixture) or [RowFixture](http://fitnesse.org/FitNesse.UserGuide.FixtureGallery.BasicFitFixtures.RowFixture). 

The specification below shows the usage of a Table grammar to set up system state:

<[spec:Glossary/Using a Table]>

See <[linkto:documentation/grammars/tables]>.

## Set Verification
Set Verification grammars are a special type of Table that can be used to specify the expected contents of some sort of tabular data.

The specification below shows the usage of a Set Verification:

<[spec:Glossary/Sets]>

See <[linkto:documentation/grammars/sets]>.



## Embedded Section

An Embedded Section is a grammar that nests a different Fixture within the parent Section. The canonical example is testing a screen that opens a dialog box during its operation. Within the Fixture for the parent screen, you may want an Embedded Section grammar to open and then manipulate the modal dialog box. 

The specification below shows an example usage of an Embedded Section:

<[spec:Glossary/Embedded Section]>

See <[linkto:documentation/grammars/embedded_section]>.

## Paragraph
A grammar that expresses a macro of other grammars. Use a Paragraph anytime you find yourself repeating the same basic sequence of steps or if you want to force a consistent structure in your specifications. 

The specification below shows a sample usage of a Paragraph to create a reusable "composite" grammar to enter credentials to the login screen of the system under test:

<[spec:Glossary/Paragraph]>

See <[linkto:documentation/grammars/paragraphs]>.

## Section
A Section is just a region that invokes a specified Fixture.

<[spec:Glossary/Section]>

## Step
A Step is the invocation of a single Grammar within a Specification.

## A Sample Specification

<[spec:Glossary/Glossary Definitions]>
