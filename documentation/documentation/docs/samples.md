<!--Title:Embedding Code Samples-->
<!--Url:samples-->

<div class="alert alert-success"><b>Note!</b> StorytellerDocGen "levels" the indention of the code samples
now, so there's no need to override how your IDE formats the code to look decent in the documentation.</div>

The primary author of Storyteller once had a very bad experience when a huge technical documentation effort failed to keep pace with an evolving codebase. To eliminate that issue permanently, Storyteller supports a feature where you can pull code samples from the actual codebase at documentation generation time to *keep the documentation in sync with a changing API*.

## How it Works

Storyteller simply scans code files looking for comments that match this basic pattern (for C#):

<pre>
// SAMPLE: [SnippetName]

Some C# CODE

// ENDSAMPLE
</pre>

In the usage above, the text after _// SAMPLE:_ is the name of the snippet we'll refer to later.  The <code>// SAMPLE:</code> and <code>// ENDSAMPLE</code> comments establish the boundaries of a code snippet within the larger code file. 

When the Storyteller documentation preview mode or publishing is running, Storyteller reads all the code files in the directories you specified to search (or `/src` as the default) looking for code sample comments.

As part of the <[linkto:documentation/docs/authoring;title=topic generation]>, code samples are embedded into the markdown files like this:

<code>&lt;[sample:registering-custom-runtime-converter]&gt;</code>

That code above is rendered into a topic page using the [Prism.js](http://prismjs.com) library to look like this:

<[sample:registering-custom-runtime-converter]>

## Enabling Samples in your Project

To enable the code sample formatting with Prism.js, you need to reference both prism.js and prism.css. See the [Prism.js](http://prismjs.com) website to build out your own version or grab [the ones from Storyteller](https://github.com/storyteller/Storyteller/tree/master/documentation/content) to use the same theme shown above.

## Language Support

The language support is relatively easy to extend if there's a missing language you would want to use -- and we would be happy to take pull requests for it. For the moment, the languages below are the only ones supported (Ruby, Razor, and Spark were cut from the previous tooling this was taken from).

## C#

Storyteller will look in files with the extension *.cs for snippets that follow this pattern:

<pre>
// SAMPLE: [SnippetName]
Some C# CODE
// ENDSAMPLE
</pre>

## Javascript

Storyteller will look in files with the extension *.js for snippets that follow this pattern:

<pre>
// SAMPLE: [SnippetName]
Some JavaScript Code
// ENDSAMPLE
</pre>

## Html

Storyteller will look in files with the extension *.htm or *.html for snippets that follow this pattern:

<pre>
&lt;!-- SAMPLE: [SnippetName] --&gt;
Some Html markup
&lt;!-- ENDSAMPLE --&gt;
</pre>


## Xml

Storyteller will look in files with the extension *.xml for snippets that follow this pattern:

<pre>
&lt;!-- SAMPLE: [SnippetName] --&gt;
Xml Data
&lt;!-- ENDSAMPLE --&gt;
</pre>


## CSS

Storyteller will look in files with the extension *.css for snippets that follow this pattern:

<pre>
/* SAMPLE: [SnippetName] */
Stylesheet Markup
/* ENDSAMPLE */
</pre>
