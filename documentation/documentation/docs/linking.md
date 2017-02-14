<!--Title: Linking to Other Topics-->

Storyteller has a custom syntax to link to other topics in a topic file just to handle the various url modes in previewing and publishing.

In all the use cases shown below, you can find samples in Storyteller's own [layout.htm](https://github.com/storyteller/Storyteller/blob/master/documentation/layout.htm) file that specifies the layout of this website.

In its simplest form, you will use a syntax like:

<code>&lt;[linkto:documentation/docs/authoring]&gt;</code>

Which will render this: <[linkto:documentation/docs/authoring]>. The default output will be a link to that topic with the proper Url and using that topic's title as the link text.

The path after the colon is effectively the relative path from the documentation root to the topic file, minus the `.md` extension. `index.md` files are referenced by just its parent directory.


## Relative Links

You can also relative links in the `<[linkto:path]>` structure. If the path starts with a forward slash
like this:

<code>&lt;[linkto:/authoring]&gt;</code>.

Assuming that there is another topic with the file name `authoring.md` in the same directory as the current topic file,
you'll get the same link. StorytellerDocGen can respond to paths like `/../other` as well.


## Override the Link Title

To override the link text, use a format like this:

<code>&lt;[linkto:documentation/docs/authoring;title=A different link description]&gt;</code>, which renders: <[linkto:documentation/docs/authoring;title=A different link description]>.

## Customize the Link Rendering

You can override the construction of the link html by explicitly defining the html template in the directive usage like this one sample that is taken from Storyteller's [own documentation layout.htm](https://github.com/storyteller/Storyteller/blob/master/documentation/layout.htm#L60-L61).

<code>&lt;[linkto:{previous};&lt;li&gt;&lt;a href="{href}" title="{title}"&gt;Previous&lt;/a&gt;</li&gt;]></code>

The substitutions are just common handlebars kind of templating for the line ({href}) and the title ({title}).


## Link to the Next Topic

As part of your `layout.htm` file, you may want to have a link to the next topic if one exists. If you are on the very last topic in the structure, you don't want that topic to render at all. In that case, use the text `{next}` as the topic key.


## Link to the Previous Topic

Likewise, you can create a link to the previous topic by using `{previous}` as the topic identifier.
