<!--Title:Running the Documentation Website Locally-->
<!--Url:running-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> The documentation generation features of Storyteller are admittedly not as mature as the specification functionality. At this point, the file watching that triggers the auto-reloading is not perfectly reliable or complete. We expect this behavior to improve before the official 3.0 release later in 2015.</div>


Use the `st doc-run` application to see live previews of your documentation as you author content. The browser will reload whenever changes are detected to topic files. The Storyteller team plans to extend the file watching and reloading to:

1. Rebuilding code samples when files change. This is "done," but the file watching never seems to be reliable yet

1. Reloading the topic navigation structure when new files are added or `order.txt` files are changed

<[command-usage:st/doc-run]>
The `st doc-run` command will start a small embedded website application and open your default browser to the documentation root.
<[/command-usage:st/doc-run]>

## Auto- and Force- Refresh Content

Storyteller is using file system watching to detect changes to code files that may contain samples and any file under the running `/documentation`
root folder. Storyteller *should* be auto-refreshing the browser whenever it detects changes or finishes parsing code files for samples. Because it's an
imperfect world in the realm of file watchers and because the code sample scanning isn't always the fastest thing in the world, **Storyteller provides the _force refresh_ command to re-read the entire topic file structure and all code files for samples. In any browser page for the documentation, use the 
`CTRL+SHIFT+R` command to trigger the _force refresh_. Do note that the code sample scanning especially is an asynchronous operation that can be time consuming.

**In the worst case scenario, you may need to stop and restart the `st doc-run` command to pick up new navigation structures.**


## Opening the Underlying File

At any page from the browser when the documentation website is running, you can use the keyboard shortcut `CTRL+SHIFT+E` to try to open the underlying file for the current screen in your default editor for `*.md` files or `*.htm` files for the `splash.htm` file.
