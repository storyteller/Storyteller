<!--Title:Crafting the Specification Language-->
<!--Url:language-->

TODO(Write some content!)

* Design the language up front
* Guide the user a little bit
* make the language be declarative, in terms of the business need and functionality, try to hide technical concers like "start the web server" and "delete all the files"
* avoid imperative coding, don't treat Storyteller like an overweight xUnit tool

## Flow versus Table Style Specifications

-- put a spec here

## Comments

From the very beginning, Storyteller has allowed users to embed purely textual prose before or after grammar steps into the specification documents. If you take the approach of using Storyteller to create system specifications as living documentation rather than just using Storyteller as an integration testing tool, comments are an invaluable tool to provide better explanations and descriptions of the desired system behavior.

The specification below uses several comments to identify test cases.

<[spec:Calculator/Using Sentences]>

Right now, comments are only pure text. If there is sufficient demand, Storyteller may add support for markdown in comments and possibly the ability to embed snippets of code or server supplied information in comments.
