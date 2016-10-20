<!--Title:Profiles-->

<div class="alert alert-info" role="alert">
<strong>Note!</strong> As of now, there is no way to change the profile without stopping and starting the Storyteller application.

</div>



A couple years back we hacked the idea of "profiles" into Storyteller 2 as a way to crudely do matrix testing against multiple browsers with a large Storyteller suite by just passing the browser name we wanted to use as a command line parameter. This functionality was standardized and simplified for Storyteller 3.

The Storyteller command line application allows you to pass an optional _Profile_ as an optional flag when launching the application with usage like this:

<pre>
st run src/Specifications --profile PhantomJS

-- or --

st open src/Specifications --profile Firefox
</pre>

In your own application code, either in a custom <[linkto:documentation/engine/system_under_test;title=ISystem]> or in  <[linkto:documentation/engine/fixtures;title=Fixture]> classes, you can find the current profile used to lauch the application -- if one exists -- with this syntax (taken from some Storyteller testing code where we were testing timeouts):

<[sample:using-project-current-profile]>

If you are running the interactive specification tool, the profile name will be shown in parantheses next to the system name in the top of the browser page.

What might this be good for?
* The original usage was to supply the name of the browser that WebDriver should use in tests against a web application
* It has been useful in internal Storyteller testing for simulating failure conditions
* Opting into heavier tracing for better debugging that might be too slow to run normally

