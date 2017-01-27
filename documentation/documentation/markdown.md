<!--title:Working with the Specification Markdown-->

Storyteller throughout its life has been very tool-centric and even required you to be able to
run the system under test in order to author or preview specifications. In 4.0, Storyteller fully embraced
[markdown text](https://en.wikipedia.org/wiki/Markdown) -- with some additions -- as its mechanism for persisting 
and parsing specifications. 

It is possible, and maybe even desirable, for the folks (developers, testers, business folks, analysts, etc.) 
determining the acceptance tests to simply write a markdown file that describes the desired behavior without having
to mess with Storyteller at all. 

The developers could then take that markdown text and use it as a Storyteller specification **as is** for a stand in. 
When the Storyteller engine executes that specification and detects that there are no Storyteller steps of any kind, 
it will fail the specfication with a simple message stating that the specification isn't implemented.

The hope is that this new markdown format makes it much easier for non-technical folks and even developers to write
specifications upfront without being tripped up by technical issues. At the worst, it should make it much easier for
users to make the specifications more human readable by just annotating the underlying markdown file.

## Specification Title

The title of the specification should just be an H1 element in the first line of the specification like this specification titled
"A very important specification":

```
# A very important specification
```


## Specification Metadata

Most users aren't going to care about this at all, but Storyteller does track some metadata in the markdown near the top
that follows the convention "key -> value" like this:

```
-> id = 4c93dbcb-e1d8-409b-ba27-a8a8be432b13
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2016-10-14T15:08:36.9809024-05:00
-> tags = 

```



## Declaring Sections

To declare the <[linkto:documentation/engine/fixtures;title=Fixture]> to use in a given section of the specification, 
wrap the key of that fixture in square brackets to denote that you are starting a new section. If you were using
a `CalculatorFixture`, that would look like this:

```
# Bad Values


This is the start of a new section 
[Calculator]

Punching in values to the calculator

|> StartWith value=3
|> MultiplyBy value=2

This value is wrong and the specification should fail

|> TheValueShouldBe value=7
~~~
```

The three squiggles above denote the end of the section. This marker is **not required**, but you might have to help
Storyteller out once in a while by giving it an explicit hint where the section ends.


## Declaring Steps

Invocations of <[linkto:documentation/engine/grammars;title=Grammar's]> in a specfication are called "Steps."
You denote the start of a step like this:

```
|> [grammar key] [cell]=[value], [cell]=[value]
```


For a simple example, let's say that we're using this grammar from a fixture class called `CalculatorFixture` 
below in one of our specifications:

<[sample:start-with-sentence]>

To use this grammar in a step I would use this syntax following the pattern:

```
# Adding and Subtracting Numbers

[Calculator]
|> StartWith value=5
```


Or if I wanted to simplify that syntax when I'm writing the specification by hand, I can rely on Storyteller to assume the
order of the cell values and omit the [key]=[value] syntax for this:


```
# Adding and Subtracting Numbers

[Calculator]
|> StartWith 5
```

_I frequently see the characters '|>' in technical documentation to denote that it's a command line statement, 
and what I was thinking was that calling a grammar is analogous to running commands at the command line.
That and it wasn't a meaningful symbol in markdown;) -- Jeremy_




## Tables or Sets

<div class="alert alert-info"><b>Note!</b> 
In the places where Storyteller uses meaningful whitespace, the actual number of indented spaces
doesn't matter. The only thing that does is whether subsequent lines have the same indentation or not
</div>

For tabular data from <[linkto:documentation/engine/grammars/tables;title=Table]> 
or <[linkto:documentation/engine/grammars/sets;title=Verification Sets]>, you can use a
markdown pipe delimited table to express the tabular data. 

To make this concrete, say you have this specification that uses a table:

<[spec:Tables/Table with Options]>

The markdown for this specification is shown below:

```
# Table with Options

[Tables]
|> TableWithLotsOfOptions
    [table]
    |player      |position|
    |Nolan Ryan  |Pitcher |
    |Willy Mays  |Outfield|
    |Johnny Bench|Catcher |



```

A couple notes about this syntax:

* Behind the scenes (and occasionally in front of users), Storyteller stores the row data for a table
  in a child section of the step matching an expected key. In the sample above, the `TableWithLotsOfOptions`
  grammar expects a section with the name `table`. To denote the beginning of a child section to a step, 
  just wrap the section key name with square brackets ('[' and ']') **and indent that line** 4 additional characters
  to tell Storyteller that this section is a child section of the previous step.

* It is whitespace sensitive, meaning that rows that start with a '|' character that have the same
  indention as the "[table]" section header are considered to be part of that section.

* For grammars that only need a single child section (i.e., anything that isn't a Paragraph with multiple table grammar children),
  you can omit the child section header.

* The first table line denotes key values. Be careful not to be using the headings

* Other than the indention at the left, whitespace is ignored throughout the pipebar tables -- i.e. you don't have to get
  the alignment perfect for it to work.


At the absolute simplest, you can write this by hand:

```
# Table with Options

[Tables]
|> TableWithLotsOfOptions
    |player      |position|
    |Nolan Ryan  |Pitcher |
    |Willy Mays  |Outfield|
    |Johnny Bench|Catcher |

```


## Adding descriptive prose or comments

<div class="alert alert-success"><b>Note!</b> Storyteller treats comment text as markdown in 4.0, so feel free to use
any commonly valid markdown syntax in your comment prose in specifications.</div>

This one is easy, any line of text in the specification file that isn't recognized by Storyteller as being
specification data is just treated as a comment within the specification. 

The following specification has a couple comments:

<[spec:Calculator/Bad Values]>

the markdown text is:

```
# Bad Values

[Calculator]

Punching in values to the calculator

|> StartWith value=3
|> MultiplyBy value=2

This value is wrong and the specification should fail

|> TheValueShouldBe value=7

```





## Embedded Sections

This specification uses an embedded section grammar called "Preferences":

<[spec:Glossary/Embedded Section]>

To denote the child section for the embed, the markdown still follows the basic syntax of "[key]" to denote
the start of an embedded section:

```
# Embedded Section

[Glossary]

An "Embedded Section" allows you to embed a Section for another Fixture inside the parent Section like so

|> Preferences
    [Preferences]

    "Preferences" is an entirely different Fixture that contains all the grammars you would use to alter the current user's preferences

    |> EnableGPS enabled=true
    |> EnableNotifications enabled=true

~~~
```

Again, Storyteller is using meaningful whitespace to know that since the steps for "EnableGPS" and 
"EnableNotifications" have the same indentation as "[Preferences]," they are part of that section rather
than being pulled into the "Glossary" parent section.




