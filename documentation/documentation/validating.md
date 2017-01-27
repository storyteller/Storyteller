<!--title: Troubleshooting Storyteller Problems-->

## Validating Specification Data

To troubleshoot specifications that might be missing required information or have
missing <[linkto:documentation/engine/fixtures;title=Fixture's]> or <[linkto:documentation/engine/grammars;title=Grammar's]>
without actually executing the specifications, Storyteller 4.0 comes with a new extension to the old `run` command to documentation
just that with the new _--validate_ flag:

```
dotnet storyteller run --validate
```

If there are no missing fixtures, grammars, or cell values in any of your specifications, you'll
get this message and the application will exit successfully:

```
No validation errors or missing data detected in this project
```

If Storyteller can detect any problems with the specifications, it will write out a textual report to 
the console output detailing all of the problems that it can find and the process will return and
exit code of 1 to denote a failure.

## System Startup Problems

Assuming that you're using Storyteller with the dotnet CLI, if Storyteller isn't able to start up your system (the dreaded "Recycle Failure" message in the UI), 
go to the command line at the root of your Storyteller specification project and type:

```
dotnet run -- test
```

The command above will try to bootstrap the system directly and report any problems to the console output.

