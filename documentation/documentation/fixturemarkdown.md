<!--title: Working with the Fixture Markdown-->

A big new feature and capability in Storyteller 4.0 is the ability to design your <[linkto:documentation/engine/fixtures]> language in pure
[markdown text](http://daringfireball.net/projects/markdown/). The Fixture markdown files can either model all new fixtures or grammars, or override how already
coded grammars are rendered in preview and results views and how they are edited. Effectively, this gives developers
a way to keep the actual Fixture code cleaner by moving things like selection lists and titles out of the C# code.

You can:

* Define Fixture's with markdown files and author specifications in the editing tool without having to write any code first
* Use the Fixture markdown files to override how already coded grammars are rendered and edited to achieve more human readable specifications
* From the <[linkto:documentation/ui/language;title=Fixtures and Grammars]> page, you can generate skeleton code for any
  grammars that are not yet implemented
* Export Fixture markdown files from the existing code

## Fixture Markdown Files

The Fixture markdown files are persisted in the `/Fixtures` folder directly under your project root directory with the `*.md`
file extension.

Say you have a Fixture class like this one:

<[sample:SimpleFixture]>

The naming convention for the files is [Fixture key].md, so if you exported the markdown for the Fixture above, you'd get the following in a file named
`Simple.md` like this:

```
# This is the title that will be shown in the specs
```

The title of the Fixture that's shown in the section headers of the rendered specification can be specified by a markdown
H1 element like: `# your title` on the first line of the markdown file. This element is optional and will just default to the key of 
the Fixture class ("Simple");

## Declaring Grammars

<div class="alert alert-success"><b>Note!</b> This feature was designed first and foremost to enable human
editing of these markdown files, so many details are completely optional.</div>

Let's say that we have a Fixture with the key "Calculator." You might have a grammar to specify the starting number in the main
calculator window. In markdown, that would look something like:

```
## StartWith
### Start with {number}
``` 

If you previewed the "missing" code for that Fixture in the <[linkto:documentation/ui/language;title=Fixtures and Grammars]> page,
you'd see generated code like this:

<[sample:Generated.CalculatorFixture]>

A couple notes about the markdown and the generated code:

* The `##` header is read as the key of a <[linkto:documentation/engine/grammars;title=grammar]>
* The `###` header is considered to be title or textual format in the case of <[linkto:documentation/engine/grammars/sentences]> grammars that is used to rendered
  the grammar in visualizations of the specification. It's the equivalent to using the `[FormatAs("Start with {number}")]`
  attribute in the C# code for the Fixture.
* It's possible to leave all the details about rendering the grammar in the markdown file and omit that from
  the Fixture code (notice that there's no `[FormatAs("")]` usage in the code sample above)
* If the `###` title/header/format is omitted, Storyteller infers the title by splitting the grammar key by [Pascal case](http://wiki.c2.com/?PascalCase),
  so if you only had the line `## PressTheEnterKey`, the derived title/header/format would be "Press The Enter Key"
* If the `##` grammar key is omitted, Storyteller will derive the grammar key by effectively reversing the transformation in the previous bullet point. so
  if you only had the line `### Press the enter key`, the grammar key is derived as "PressTheEnterKey."
  
All grammars have to start with either the `##` or `###` headers in the markdown file. The default grammar type is to be a Sentence, but there is
additional syntax to define other types of grammars.

## Cell Behavior

<div class="alert alert-success"><b>Note!</b> You don't have to make the pipe bar characters line up, but I formatted it all nice and neat for the docs;)</div>

<[linkto:documentation/engine/cells]> are the inputs to grammars. The markdown syntax allows you to control all of the options
for how individual cells are handled in the specification rendering and editing. The previous section demonstrates the simplest way to define a 
Sentence grammar in markdown. Now, let's define a default value of "5" for the `number` cell from the `StartWith` sample:

```
## StartWith
### Start with {number}
|sentence|number|
|default |5     |
``` 

When Storyteller sees a markdown pipe bar table, it parses the table with the following rules:

* The first column of the first row declares what the type of grammar is with the valid values being: "sentence", "table", "set", or "ordered-set"_
* Any additional columns in the first row designate the "cell" within the grammar.
* Subsequent rows start with the cell property name: "default", "header", "options", "editor", "result". The values in the columns to the right apply
  to the cells

Here's an example of controlling the header values for a Table grammar:

```
## decisions
### decisions
|table  |FirstName |LastName |FullName |LastNameFirst|
|header |First Name|Last Name|Full Name|Last, First  |
```

**Do note that cell names cannot have any spaces. Think "valid C# variable names" here.**

To specify option values in a cell, you can either do something like this:

```
## PlayerPositionIs
|table  |name|position      |
|options|    |LB, QB, RB, WR|
```

In the case above, the "position" cell in the "PlayerPositionIs" grammar would be edited with a 
dropdown box in the editor with the options "LB", "QB", "RB", and "WR." If you want key/display
type semantics, you can use this syntax:

```
## PlayerPositionIs
|table  |name|position                                                        |
|options|    |Linebacker=LB, Quarterback=QB, Running Back=RB, Wide Receiver=WR|
```

**Note that blank cells in the pipe bar table are ignored**

To override the choice of editor: "text" is the default, "boolean", "bigtext" or "big-text", and "select" is inferred
for you if you have any options for that cell. An example is:

```
## ThisFactIs
### This fact should be {istrue}
|sentence|istrue |
|editor  |boolean|
```

Finally, **strictly to aid the code generation**, you can optionally define which cells
should be treated as expected results:

```
## Adding
### Adding {x} to {y} should be {returnValue}
|sentence|x    |y    |returnValue|
|result  |false|false|true       |
```

The default is "false." The generated code would be:

<[sample:DesignGrammarWithResults]>

If there is more than one result cell, Storyteller will use "out" parameters instead of a return value.


## Sentence Grammars

<[linkto:documentation/engine/grammars/sentences]> are described by the pattern:

```
## Key
### Format
|sentence|cell1|cell2        |
|default |     |default value|
```

Do note that only one of the `##` or `###` headers is mandatory, and the pipe bar table for cell overrides
is completely optional.

## Fact Grammars

Fact grammars are defined in markdown with this syntax:

```
## TheConfirmationEmailWasSent
### The confirmation email was sent
fact
```

The presence of the line "fact" right underneath the key and title tells Storyteller to treat this as a "Fact" grammer.

The generated code would be:

<[sample:FactGrammarDesignedByMarkdown]>

## Table Grammars

To design a <[linkto:documentation/engine/grammars/tables;title=Table grammar]>, use this markdown syntax:

```
## NumberTable
### Adding some numbers together
|table |x    |y    |sum |product|
|header|X    |Y    |X+Y |X*Y    |
|result|false|false|true|true   |
```

That will generate a table grammar that will look like this in the specifications:

|X  |Y  |X+Y|X*Y|
|5  |5  |10 |25 |
|2  |3  |5  |6  |

The generated code for the grammar above would be:

<[sample:TableDesignedByMarkdown]>

## Set Verifications

<[linkto:documentation/engine/grammars/sets;title=Set Verification grammars]> are defined just like Table's in the section above,
but the top left cell would read either "set" or "ordered-set" depending on the grammar.

An example would be:

```
## PrimeNumbers
## The first 5 prime numbers should be
|ordered-set|number|
```

Which would result in this skeleton code:

<[sample:SetDesignedByMarkdown]>

*I know the code above is ugly as sin, but hey, it's better than having to write it all out by hand!*

## Embedded Sections

This one is easy. <[linkto:documentation/engine/grammars/embedded_section;title=Embedded Section grammars]> can be defined as just:

```
## DoSomeMath
### Now do some math
embeds Math
```

This would be interpreted as an embedded section with the key "DoSomeMath" that embeds
the "Match" Fixture. 

## Paragraph Grammars

*The Storyteller team recommends that you use this feature sparingly just because of the extra complexity it involves.*

To build a <[linkto:documentation/engine/grammars/paragraphs;title=Paragraph grammar]> in markdown, you define the child
grammars as an `*` bullet list, with any cell overrides in a table directly underneath the child declaration:

```
## Key
### Title of your paragraph
* First child grammar title/format/# text
|table|column1|column2|
* Second child grammar
* Third child grammar
```

Storyteller can generate code for the paragraph grammar itself, and the child grammars as `[Hidden]` grammars. 