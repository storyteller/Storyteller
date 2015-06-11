<!--Title:Living Documentation Generation-->
<!--Url:docs-->

The secondary feature set of Storyteller is the means to author and publish "Living Documentation" for code-centric projects. The documentation authoring and publishing is somewhat inspired by Read The Docs](http://readthedocs.org). The primary philosophy guiding this tooling has been to make it as easy as possible to keep the documentation synchronized with the API it documents and quick to update.


The Storyteller documentation consists of three small applications:

1. An embedded web application in the `ST.exe` tool (`st doc-run`) distributed with Storyteller that provides an auto-reloading preview of the documentation.

1. A command line tool (`st doc-export`) bundled into `ST.exe` that generates static html from your raw documentation that can be published on the web (the Storyteller documentation is hosted in [GitHub Pages](https://pages.github.com)) or in a form that is browsable from the file system so that the content could be included in downloadable packages.

1. A command line tool (`st doc-seed`) bundled into `ST.exe` to quickly generate the shell of a documentation structure.

Documentation content is written the the popular [Markdown syntax](http://daringfireball.net/projects/markdown/syntax) with some Storyteller specific customizations for navigation elements, embedding code samples, or Storyteller specifications. 

To learn more about what the documentation generation capabilities of Storyteller are, see these topics:

<[TableOfContents]>