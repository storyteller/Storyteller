<!--title: ASP.Net Core Systems -->

`Storyteller.AspNetCore` is an addon Nuget library you can use to quickly add bootstrapping and system lifecycle
management for ASP.Net Core applications. See [Using Storyteller with ASP.Net Core Systems](https://jeremydmiller.com/2017/04/18/using-storyteller-with-asp-net-core-systems/) for a blog post that lays out the vision for this Nuget. This library heavily uses the [Alba](http://jasperfx.github.io/alba/) library for bootstrapping and running requests through the ASP.Net Core system.

## Bootstrapping an ASP.Net Core System

The `Storyteller.AspNetCore` library contains a new base class called `AspNetCoreSystem` to simplify using Storyteller against ASP.Net Core systems. Here's a very simple, "Hello, World" level example:

<[sample:HelloWorldAspNetCoreSystem]>

You can apply additional configuration of your ASP.Net Core system beyond or in addition to a `Startup` class by
using the [Alba functionality](http://jasperfx.github.io/alba/documentation/bootstrapping/) for bootstrapping and configuring
a running ASP.Net Core. For example, you might add additional middleware for detailed logging or override services
in the application's IoC container.

## IoC Container Integration

Within any `Fixture` in a specifications project that uses `AspNetCoreSystem`, the calls to `Fixture.Retrieve<T>()` delegates
to the underlying application's IoC container.


## Specification Lifecycle Hooks

In addition, there are template methods that can be overridden in a subclasses of `AspNetCoreSystem` for specification lifecycle
events:

<[sample:AspNetCoreSystem-template-methods]>

## Using AspNetCoreFixture

While you can always spin up an [HttpClient](https://msdn.microsoft.com/en-us/library/system.net.http.httpclient(v=vs.118).aspx) instance in a Storyteller `Fixture` to exercise your HTTP endpoints, you can instead use [Alba's Scenario](http://jasperfx.github.io/alba/documentation/bootstrapping/) support to programmatically execute HTTP requests without hitting the actual server and using its functionality to work with the response.

Let's say that we've built the obligatory "Hello, World" ASP.Net Core application. To drive that system in a Storyteller specification, we might have this method within a class that inherits from `AspNetCoreFixture`:

<[sample:async-grammar-sample]>

## Instrumentation and Logging

The `AspNetCoreSystem` adds some additional middleware to your configured ASP.Net Core system to record information about HTTP requests being executed during specifications. This information is exposed both in the _Performance_ tab in the Storyteller HTML
results and on an additional tab called _Http Requests_ where more information about the request is displayed.

See Jeremy's blog post [Using Storyteller with ASP.Net Core Systems](https://jeremydmiller.com/2017/04/18/using-storyteller-with-asp-net-core-systems/) for examples of this functionality, including a recipe for defining <[linkto:documentation/using/performance;title=performance criteria]> against
HTTP requests.



