<!--Title: Getting Started with Documentation Generation-->

See <[linkto:documentation/getting_started]> for instructions on downloading and running Storyteller.

<div class="alert alert-info" role="alert"><strong>Note!</strong> The command line approach in Storyteller generally assumes that you will be executing the commands from the root directory of your code repository. </div>

As a concrete example, the source files for this documentation [is on GitHub](https://github.com/storyteller/Storyteller/tree/master/documentation).

To get started with the living documentation generation, create a file structure in your code repository like this below:

* /documentation - A folder at the root of your code repository that holds all the content files and assets for the documentation. This folder name is only the default idiom, but using this name and location makes the `ST.exe` commands a little easier to use.

* /documentation/content - Put any css, images, or javascript files used in your documentation. Any files in the `/content` folder are automatically included when publishing your documentation

* /documentation/layout.htm - Establishes the general page layout for the topic files in your documentation project. See <[linkto:documentation/docs/theme]> for more information on working with custom layouts.

* /documentation/splash.htm or /documentation/index.md - One way or another you need a home page for your published documentation. If you just want a simple file that uses your standard layout, use `index.md` directly underneath `/documentation`. If you have more web design ability than I do (and who doesn't?), you can opt for a `splash.htm` file. The `splash.htm` file still supports the same custom transforms described in <[linkto:documentation/docs/authoring]>.

