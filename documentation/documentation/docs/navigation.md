<!--Title:Creating a Navigation Structure-->
<!--Url:navigation-->

Storyteller supports the idea of a hierarchical navigation structure that is inferred from the structure of the files in the `/documentation` folder. 



## Explicitly Order Topics in a Directory

To override the default ordering of topics, create a file named `order.txt` in that directory and simply list the file names *without the .md* extension of the topics in that directory in the order in which you wish the navigation to flow. Any files that are not part of the `order.txt` file are simply put at the end by sorting on their title.

As an example, consider the topic you're reading right now. This file is called "navigation.md" and is in Storyteller's GitHub repository [here with all its sibling files](https://github.com/storyteller/Storyteller/tree/master/documentation/documentation/docs). To create the navigation order in what we hope is a logical narrative, we used an [order.txt](https://github.com/storyteller/Storyteller/blob/master/documentation/documentation/docs/order.txt) file to configure the ordering like so:

<pre>
getting_started
authoring
navigation
outlines
samples
theme
running
export
</pre>


