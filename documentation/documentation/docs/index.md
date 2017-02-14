<!--Title:Living Documentation Generation-->
<!--Url:docs-->

<div class="alert alert-info"><b>Note!</b> This functionality used to reside in the ST.exe tool in Storyteller 3.0, 
but was separated out in the Storyteller 4 release cycle</div>

_StorytellerDocGen_ is a separate tool that provides the means to author and 
publish "Living Documentation" for code-centric projects. The documentation authoring and publishing is somewhat 
inspired by [Read The Docs](http://readthedocs.org). The primary philosophy guiding this tooling has been to 
make it as easy as possible to keep the documentation synchronized with the API it documents and quick to update.

StorytellerDocGen is distributed in the `dotnet_stdocs` Nuget package.

See [How I’m Documenting OSS Projects](https://jeremydmiller.com/2016/01/05/how-im-documenting-oss-projects/) 
from Jeremy's blog.


The Storyteller documentation consists of four small applications:

1. An embedded web application in the `dotnet stdocs` tool (`dotnet stdocs run`) distributed with StorytellerDocGen that provides an auto-reloading preview of the documentation.

1. A command line tool (`dotnet stdocs export`) bundled into `dotnet stdocs` that generates static html from your raw documentation that can be published on the web (the Storyteller documentation is hosted in [GitHub Pages](https://pages.github.com)) or in a form that is browsable from the file system so that the content could be included in downloadable packages.

1. A command line tool (`dotnet stdocs seed`) bundled into `dotnet stdocs` to quickly generate the shell of a documentation structure.

1. A simplistic command to write out the skeleton of a new documentation project at `dotnet stdocs new`.

Documentation content is written the the popular [Markdown syntax](http://daringfireball.net/projects/markdown/syntax) with some Storyteller specific customizations for navigation elements, embedding code samples, or Storyteller specifications. 

To learn more about what the documentation generation capabilities of Storyteller are, see these topics:

<[TableOfContents]>