<!--Title:Exporting the Documentation-->
<!--Url:export-->

Storyteller provides the `dotnet stdocs export` (`st doc-export` in Storyteller 3.*) command to generate static html content from your documentation project and persist the files to a directory of your choosing. The documentation can be generated in one of two styles:

1. _Website_ - Designed for [GitHub Pages](https://pages.github.com) hosting using **organization websites** that resolve to a root URL like _http://storyteller.github.io_. Asset file links for images, stylesheets, and scripts are absolute urls assuming that the documentation is hosted at the root of a url. Topic files are saved as `index.html` under a folder structure reflecting the desired url. See this very documentation published in [storyteller.github.io](https://github.com/storyteller/storyteller.github.io) for an example.

1. _ProjectWebsite_ - Designed for [GitHub Pages](https://pages.github.com) hosting using **project websites** that resolve to a root URL like _http://jasperfx.github.io/marten_. If you use this mode, you will also have to provide the GitHub project name for the Url construction using the `--project` flag (`dotnet stdocs export ProjectWebsite --project marten`). **Do watch that the project URL for gh-pages is case sensitive!** Asset file links for images, stylesheets, and scripts are absolute urls assuming that the documentation is hosted at rooted at the location "/[project name]". 

1. _FileDump_ - Designed to make the generated documentation navigable directly on the file system. This mode was designed for file downloads and possibly embedding the documentation inside a Nuget package. Client asset links are all relative.



<[command-usage:dotnet stdocs/export]>
The `dotnet stdocs export` command allows you generate and publish the documentation to a directory of your choosing. Even though it is optional, we do recommend that you supply your product's version number like so: `st doc-export -v 3.0`. You may want to more tightly control where Storyteller should scan for code samples to speed up the publishing process.
<[/command-usage:dotnet stdocs/export]>
