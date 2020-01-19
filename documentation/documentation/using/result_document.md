<!--Title:Building the Storyteller HTML Report-->

The resulting HTML document from running Storyteller is a self-contained report with all CSS and Javascript packaged inside the HTML file.  The **HtmlDocument** itself is assembled by **HtmlDocumentBuilder** out of a collection of builder object **IDocumentPartBuilder**.

## Default Behavior: DefaultDocumentBuilder / HtmlDocumentBuilder

**DefaulDocumentBuilder** the default implementation of **HtmlDocumentBuilder** assembles the report from the following internal assembly resources:

* JS : StoryTeller.batch-bundle.js
* CSS : Storyteller.stylesheets.bootstrap.min.css  (v 3.3.2)
* CSS : StoryTeller.stylesheets.storyteller.css
* CSS : StoryTeller.stylesheets.fixed-data-table.min.css

The best way to modify the generated report is to append additional builders to the **DefaultDocumentBuilder** using the **Add** method with any **IDocumentPartBuilder**.  

## Document Modification: IDocumentPartBuilder

When the report is being assembled, a **HtmlDocument** and **BatchRunResponse** is passed to each **IDocumentPartBuilder**  registered with the **HtmlDocumentBuilder** being executed.  Because the **HtmlDocument** is available, any coded behavior could be defined inside a **IDocumentPartBuilder**, including behaviors that replace/modify previous builder results.

### The build-in builders are:

* ReportPartBuilder - (*Required*) Creates the report data and container elements in the reports.
* StoryTellerTitleBuilder - Updates the **HtmlDocument** Title property.
* StyleTagBuilder - Creates a style tag from loaded content.
* ScriptTagBuilder - Creates a script tag from loaded content or uri.
* LinkTagBuilder - Creates a link tag from a uri.
* HtmlTagBuilder - A base level class for building self-appending **IDocumentPartBuilder** that are also **HtmlTag** implementations. **StyleTagBuilder**,  **ScriptTagBuilder** and **LinkTagBuilder** are examples of this.


## Content Resolution: IDocumentPartLoader

Many of the built-in **IDocumentPartBuilder** classes require some kind of content to be wrapped inside an **HtmlTag**.  The content is often stored in files either on the local file system or embedded into the assembly.  The **IDocumentPartLoader** exists to bridge the gap between these sources by expecting a **Read** method implementation that results in a content string.

### The build-in loaders are: 

* VirtualFileLoader - loads a given string as the loaded content, replaces needing a content file to load.
* LocalFileLoader - loads a file from the file system as the loaded content.
* ResourceFileLoader - loads an embedded resource from a given assembly as the loaded content.
* StoryTellerResourceLoader - loads an embedded resource from the storyteller assembly as the loaded content.

