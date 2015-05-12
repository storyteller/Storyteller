<!--Title:'Macros' with Paragraph Grammars-->
<!--Url:paragraphs-->

<div class="alert alert-info" role="alert">There are some specialized versions of the _Paragraph_ grammar for setting up data or making a series of property verifications that are shown elsewhere.</div>

Storyteller was largely envisioned as a replacement for the older [FitNesse](http://fitnesse.org) tool. One of the aggravations that the Storyteller team had when using FitNesse years ago was the sheer repetiveness of having to repeat the same basic steps in different specifications. To alleviate that pain, Storyteller was designed from the very beginning to support the idea of "Composite" grammars that allowed you to specify a series of steps that have to be performed together and possibly in a certain order.

The _Paragraph_ grammar can include any number of grammars of all types. A simple example is entering credentials into a login screen. You typically need to enter a user name and a login, then click a login button or hit enter to submit the credentials. We can use a _Paragraph_ grammar to batch up the single logical operation from individual grammars like so:

<[sample:login-paragraph]>

In usage, the grammar above looks like this:

<[spec:Glossary/Paragraph]>

The grammars added to the paragraph can refer to other grammars in the current Fixture or grammars built on the spot. The code below is a sample of this from Storyteller's own integration tests:

<[sample:paragraph-with-grammars-built-inline]>

## Silent Grammars

It's frequently useful to execute some kind of operation before, after, or between the individual grammars within a _Paragraph_. Storyteller exposes the idea of a _Silent Grammar_ for exactly this usage. The following sample rebuilds the _Paragraph_ grammar from above, but this time using a silent action to click the login button:

<[sample:implicit-login-with-silent-action]>

Silent grammars can be added to a _Paragraph_ with the signatures:

1. `Action`
1. `Action<ISpecContext>` -- see <[linkto:documentation/context]> for more information











