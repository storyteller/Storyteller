using System;
using System.Linq;
using FubuCore;
using Xunit;
using Shouldly;
using ST.Docs.Samples;

namespace StoryTeller.Testing.ST.Docs.Samples
{
    
    public class RubySampleScannerTester
    {
        private SampleCache theSamples = new SampleCache();


        private void scan(string text)
        {
            var file = new FakeFile(text);
            var reader = new SampleReader(file, new RubySampleScanner(), theSamples);

            reader.Start();
        }

        [Fact]
        public void determine_name()
        {
            var scanner = new RubySampleScanner();

            scanner.DetermineName("# SAMPLE: States").ShouldBe("States");
            scanner.DetermineName("     # SAMPLE: States").ShouldBe("States");
            scanner.DetermineName("    # SAMPLE: States").ShouldBe("States");
            scanner.DetermineName("Texas").ShouldBeNull();
            scanner.DetermineName("SAMPLE:").ShouldBeNull();
        }

        [Fact]
        public void is_at_end()
        {
            var scanner = new RubySampleScanner();
            scanner.IsAtEnd("# ENDSAMPLE").ShouldBeTrue();

            scanner.IsAtEnd("# SAMPLE: States").ShouldBeFalse();
            scanner.IsAtEnd("Texas").ShouldBeFalse();
            scanner.IsAtEnd("ENDSAMPLE").ShouldBeFalse();
            scanner.IsAtEnd("// Something else").ShouldBeFalse();
        }

        [Fact]
        public void find_easy()
        {
            scan(@"
foo
bar

Missouri
Kansas
# SAMPLE: States
Texas
Arkansas
Oklahoma
Wisconsin
# ENDSAMPLE
Connecticut
New York
");

            var snippet = theSamples.All().Single();
            snippet.Name.ShouldBe("States");
            
            snippet.Text.TrimEnd().ShouldBe(@"Texas{0}Arkansas{0}Oklahoma{0}Wisconsin".ToFormat(Environment.NewLine));
            
            snippet.Start.ShouldBe(7);
            snippet.End.ShouldBe(10);

            snippet.Language.ShouldBe("ruby");
        }

        [Fact]
        public void find_multiples()
        {
            scan(@"
foo
bar

Missouri
Kansas
# SAMPLE: States
Texas
Arkansas
Oklahoma
Wisconsin
# ENDSAMPLE
Connecticut
New York

# SAMPLE: Names
Jeremy
Jessica
Natalie
Max
Lindsey
# ENDSAMPLE
");

            var snippet1 = theSamples.Find("States");
            snippet1.Name.ShouldBe("States");

            snippet1.Text.TrimEnd().ShouldBe(@"Texas{0}Arkansas{0}Oklahoma{0}Wisconsin".ToFormat(Environment.NewLine));

            snippet1.Start.ShouldBe(7);
            snippet1.End.ShouldBe(10);

            var snippet2 = theSamples.Find("Names");
            snippet2.Name.ShouldBe("Names");
            snippet2.Start.ShouldBe(16);
            snippet2.End.ShouldBe(20);

            snippet2.Text.ShouldBe(@"Jeremy{0}Jessica{0}Natalie{0}Max{0}Lindsey{0}".ToFormat(Environment.NewLine).TrimStart());
        }

        
    }

}