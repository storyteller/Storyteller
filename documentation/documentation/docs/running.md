<!--Title:Running the Documentation Website Locally-->
<!--Url:running-->

<div class="alert alert-info" role="alert"><strong>Note!</strong> The documentation generation features of Storyteller are admittedly not as mature as the specification functionality. At this point, the file watching that triggers the auto-reloading is not perfectly reliable or complete. We expect this behavior to improve before the official 3.0 release later in 2015.</div>


Use the `st doc-run` application to see live previews of your documentation as you author content. The browser will reload whenever changes are detected to topic files. The Storyteller team plans to extend the file watching and reloading to:

1. Rebuilding code samples when files change. This is "done," but the file watching never seems to be reliable yet

1. Reloading the topic navigation structure when new files are added or `order.txt` files are changed

<[command-usage:st/doc-run]>
The `st doc-run` command will start a small embedded website application and open your default browser to the documentation root.
<[/command-usage:st/doc-run]>
