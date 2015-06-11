<!--Title:Creating a Navigation Structure-->
<!--Url:navigation-->

Storyteller supports the idea of a hierarchical navigation structure that is inferred from the structure of the files in the `/documentation` folder. 

The navigation tree structure is derived using these rules:

1. The root folder and each child folder (`/content` is treated specially) is treated like a node within the tree with the `index.md` or `splash.htm` file considered to be the root of that node

1. Other topic files named with the pattern `[key].md` are additional topics that are nested directly underneath the `index.md` topic in that folder.

1. If there is a child folder, the `/[key]/index.md` topic node is nested directly underneath the parent folder's root. 

1. Child topics in a topic node directory are ordered by the title of the child topics unless there is an `order.txt` file as described below


## Explicit Topic Ordering with "Order.txt"


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

Child folders can be part of the ordering by just using the child folder name as the key in `order.txt`. See this [file ordering the Storyteller documentation](https://github.com/storyteller/Storyteller/blob/master/documentation/documentation/order.txt) that orders the [documentation topics](https://github.com/storyteller/Storyteller/tree/master/documentation/documentation) at [http://storyteller.github.io/documentation](http://storyteller.github.io/documentation).
