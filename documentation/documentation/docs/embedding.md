<!--title: Embedding Storyteller Specifications-->

You can also embed [Storyteller](http://storyteller.github.io) specifications into published StorytellerDocGen websites -- and that's used very heavily inside
of Storyteller's own documentation. 

The syntax within <[linkto:documentation/docs/authoring;title=topic markdown files]> to embed specifications is this:

<code>&lt;[spec:Suite Name/Child Suite Name/Specification Title]&gt;</code>

To embed the results, use this directive:

<code>&lt;[spec-result:Assertions/Asserting Values]&gt;</code>


## Setting it Up

There are just two requirements:

1. You will need to execute your specifications and export the results to a JSON file where the documentation
   generation can find it (explained in the next section)
1. Your topic pages will require some reference to a Bootstrap stylesheet and the `embed.js` script (also shown in all
   following section). 


You will need to use a couple of the bundled client assets to render the specifications





## Exporting Specifications and Their Results

To export the specifications, use the `--dump` flag to write the JSON representation of the specifications and Their
results to a place where StorytellerDocGen can find them like this example:

```
dotnet storyteller run src/YourSpecificationProject --dump documentation/content/samples.specs.json
```

StorytellerDocGen will treat any file following the convention `*.specs.json` as a source of specifications
data. Assuming that the specification paths are unique, there's nothing stopping you from using multiple
`*.spec.json` files from different specification projects.

See <[linkto:documentation/using/ci;title=dotnet storyteller run]> for more information on the command line
usage.

## Web Asset Requirements

If you use the <[linkto:documentation/docs/getting_started;title=dotnet stdocs new]> command to set up your documentation project,
you'll get all of these assets set up for you in the `layout.htm` file. The two big requirements are to have
some reference to [Bootstrap](http://getbootstrap.com/) like this:

```
<script type='text/javascript' src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
```

In order to render the Storyteller specifications and results, you will need a reference to this bundled script:

```
<[script:content/embed.js]>
```

That script is the minimal subset of the Storyteller React.js application needed to do the rendering and displays.


## Example of Embedding a Specification

The declaration <code>&lt;[spec:Assertions/Asserting Values]&gt;</code> will render this:

<[spec:Assertions/Asserting Values]>

## Example of Embedding Specification Results

The declaration <code>&lt;[spec-result:Assertions/Asserting Values]&gt;</code> will render this:

<[spec-result:Assertions/Asserting Values]>
