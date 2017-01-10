using System;
using Baseline;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.Markdown;
using StoryTeller.Remotes.Messaging;
using Xunit;

namespace StoryTeller.Testing.Bugs
{
    public class Bug_494_unicode_characters_in_the_initial_json
    {
        [Fact]
        public void serialize_a_spec_with_extended_charactors()
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
é, à, ç
```

|> FibonacciSeries
``` numbers
1,1,2,3
```

~~~
");

            var section = spec.Children[0].As<Section>();

            section.Children[0].As<Step>().Values["names"].ShouldBe("é, à, ç");

            var json = JsonSerialization.ToCleanJson(spec);

            json.ShouldContain("é, à, ç");

        }
    }
}