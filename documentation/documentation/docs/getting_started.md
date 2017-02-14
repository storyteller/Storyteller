<!--Title: Getting Started with Documentation Generation-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> The command line approach in Storyteller generally assumes that you will be executing the commands from the root directory of your code repository. </div>

<div class="alert alert-info" role="alert"><strong>Note!</strong> When the native compilation story in .Net CoreCLR matures, we will also look to distribute
StorytellerDocGen as standalone executables per platform. </div>

The _StorytellerDocGen_ tool lives in the `dotnet stdocs` extension to the .Net CLI. Today, the easiest way to consume that 
is to create a small project at the root of your codebase repository like [this example taken from the Marten project](https://github.com/JasperFx/marten/blob/master/project.json)
using the project.json format:

```
{
	"name": "Documentation",
	"frameworks":{
	    "netcoreapp1.0": {
			  "dependencies": {
				  "NETStandard.Library": "1.6.0",
				  "Microsoft.NETCore.App": {
					  "type": "platform",
					  "version": "1.0.0"
				  }
			  },
			  "imports": [
				  "dnxcore50"
			  ]
      }
    },
	
	"tools":{
		"dotnet-stdocs": {
			"version":  "1.0.0",
			"imports": ["dnxcore50"]
		}
	}
}
```

Once that's in place, you can run the `dotnet stdocs new` command to seed the very basic structure that 
StorytellerDocGen needs:

* `layout.htm` - Establishes the standard layout for the topic pages in your documentation website. See <[linkto:documentation/docs/theme]>.
* `splash.htm` - The home page for the website. You can opt to delete this and replace it with an `index.md` file
  to just take advantage of your standard layout
* `/content` - Several css and js files for layout. Nothing here is absolutely necessary



## Setting up StorytellerDocGen by Hand

As a concrete example, the source files for this documentation [is on GitHub](https://github.com/storyteller/Storyteller/tree/master/documentation).

To get started with the living documentation generation, create a file structure in your code repository like this below:

* /documentation - A folder at the root of your code repository that holds all the content files and assets for the documentation. This folder name is only the default idiom, but using this name and location makes the `ST.exe` commands a little easier to use.

* /documentation/content - Put any css, images, or javascript files used in your documentation. Any files in the `/content` folder are automatically included when publishing your documentation

* /documentation/layout.htm - Establishes the general page layout for the topic files in your documentation project. See <[linkto:documentation/docs/theme]> for more information on working with custom layouts.

* /documentation/splash.htm or /documentation/index.md - One way or another you need a home page for your published documentation. If you just want a simple file that uses your standard layout, use `index.md` directly underneath `/documentation`. If you have more web design ability than I do (and who doesn't?), you can opt for a `splash.htm` file. The `splash.htm` file still supports the same custom transforms described in <[linkto:documentation/docs/authoring]>.
