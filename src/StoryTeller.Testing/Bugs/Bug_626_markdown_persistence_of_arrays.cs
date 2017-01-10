using System;
using Baseline;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.Markdown;
using StoryTeller.Remotes.Messaging;
using Xunit;

namespace StoryTeller.Testing.Bugs
{
    public class Bug_626_markdown_persistence_of_arrays
    {
        [Fact]
        public void read_file()
        {
            var spec = MarkdownReader.ReadFromText(@"
# Use an array argument

-> id = e0e4da7a-4d0a-41c6-940b-c9ed654194d2
-> lifecycle = Acceptance
-> max-retries = 0
-> last-updated = 2017-01-07T15:55:20.5381011Z
-> tags = 

[Array]
|> TheNameArrayShouldBe
``` names
Hank, Tom, Todd
```

|> FibonacciSeries
``` numbers
1,1,2,3
```

~~~
");

            var section = spec.Children[0].As<Section>();

            section.Children[0].As<Step>().StagedValues.ShouldBeNull();


            section.Children[0].As<Step>().Values["names"].ShouldBe("Hank, Tom, Todd");
            section.Children[1].As<Step>().Values["numbers"].ShouldBe("1,1,2,3");
        }
    }
}