<!--title: Async Grammars -->

Storyteller was originally conceived and built in that more innocent time where most of your code was completely synchronous and multi-threading was somewhat rare. Flash forward to today, and we're all writing a lot more asynchronous code than ever before and it was time for Storyteller to get with the program.

To that end, Storyteller now allows you to build grammars that return `Task` objects, and Storyteller will take care
of handling the Task within the execution pipeline so you don't have to. Right now the only options for asynchronous grammars are
<[linkto:documentation/engine/grammars/sentences;title=Sentence grammars]>.

Below is a sample from the forthcoming ASP.Net Core application extensions for Storyteller that exercises a "Hello, World"
HTTP endpoint:

<[sample:async-grammar-sample]>

As of right now (4.0), Storyteller supports methods that return:

* `Task` to perform an action asynchronously
* `Task<bool>` for asynchronous <[linkto:documentation/engine/grammars/facts;title=Fact grammars]>
* `Task<T>` where "T" is an expected value that you want to assert upon