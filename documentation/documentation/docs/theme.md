<!--Title:Documentation Skinning-->
<!--Url:theme-->

Storyteller requires a `layout.htm` file at the root directory of the documentation. This file is used to specify the standard layout for all the topics in your documentation project. At runtime, Storyteller renders topic content by processing the directives in the `layout.htm` file for navigation elements, linking to client side assets, and rendering the topic content. The `layout.htm` file has a similar function to master pages in server side web rendering tools like Razor or Spark.

For an example, see [the layout for this documentation website](https://github.com/storyteller/Storyteller/blob/master/documentation/layout.htm).

See <[linkto:documentation/docs/linking]> for an explanation of how to use the preprocessed directives for navigation elements.

Also see <[linkto:documentation/docs/images]> for working with images.


## Inner Content

To place the actual content of a topic file within the layout, use this directive: <code>&lt;[inner]&gt;</code>.



## Topic Title

To embed the title of the current topic, use <code>&lt;[title]&gt;</code>


## Version

To embed the version of the product passed to the `st doc-run` or `st doc-export` commands, use <code>&lt;[version]&gt;</code>


## Root Url

To embed the url to the root of the documentation project, use <code>&lt;[RootUrl]&gh;</code>.


<div class="alert alert-info" role="alert"><strong>Note!</strong> The directives for images, styles, and scripts are only necessary for assets bundled directly into the documentation export. These directives are applied differently depending upon whether the documentation is running in the live preview, exported for website hosting, or exported for local file system browsing. If you are linking to assets from another website, you do not need these directives.

</div>


## Edit on GitHub Link

You can add a link to edit the current documentation topic in GitHub (or any other hosting provider) by using the `<[FilePath]>` transform like this example shown below that is taken from the Storyteller documentation itself:

<pre>
&lt;a 
	href="https://github.com/storyteller/storyteller/blob/master/documentation/&lt;[FilePath]&gt;"  
	class="text-muted fa fa-github" 
	&gt; Edit on GitHub&lt;/a&gt;
</pre>

This usage results in the following html:

<a href="https://github.com/storyteller/storyteller/blob/master/documentation/<[FilePath]>"  class="text-muted fa fa-github" style="margin-top: 10px"> Edit on GitHub</a>

I used [font-awesome](http://fortawesome.github.io/Font-Awesome/) for the icon above, but that is neither required nor in the box for the Storyteller documentation.


## CSS Files

To link to CSS files with Storyteller's pathing rules in exports, use this syntax:


<code>&lt;[css:content/bootstrap.min.css]&gt;</code>

The path in `css:[path]` should be relative to the root of the documentation directory. 

## Script Files

To link to script files with Storyteller's pathing rules in exports, use this syntax:

<code>&lt;[script:content/prism.js]&gt;</code>


## Topic Breadcrumbs

To use a breadcrumbs element from [Bootstrap](http://getbootstrap.com), use this syntax:

<code>&lt;[Breadcrumbs]&gt;</code>
