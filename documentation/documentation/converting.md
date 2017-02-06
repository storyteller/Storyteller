<!--title:Converting from Storyteller 3.0 to 4.0-->


## Converting 3.0 Xml Spec Files to 4.0 Markdown Spec Files

Storyteller 4.0 introduces a new standard, text based format for persisting specifications that
can roughly be described as "Markdown with some Storyteller-specific stuff mixed in." See 
<[linkto:documentation/language/markdown]> for specifics on the new file format.

To convert your 3.0 specs to the new 4.0 format, run this command from the root of your
Storyteller project:

```
dotnet storyteller convert
```

Or run the `convert` command from the `StorytellerRunner.exe` tool in the `StorytellerRunnerCsproj` 
Nuget if you're not using the dotnet CLI.

See <[linkto:documentation/getting_started]> for more information on setting up the `dotnet storyteller` tool
for your project.


## Breaking Changes

Right now the only breaking API change is that Storyteller is using the [Baseline](https://github.com/JasperFx/baseline) version 
of `Conversions`, and the Storyteller `IRuntimeConverter`'s are now registered against `CellHandling`. See
<[linkto:documentation/engine/cells/conversion]> for more information.