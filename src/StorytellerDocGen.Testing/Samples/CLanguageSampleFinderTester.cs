using System;
using System.IO;
using System.Linq;
using Baseline;
using Shouldly;
using StorytellerDocGen.Samples;
using StoryTeller.Files;
using Xunit;

namespace StorytellerDocGen.Testing.Samples
{
    
    public class CLanguageSampleFinderTester
    {
        private SampleCache theSamples = new SampleCache();

        private void scan(string text)
        {
            var file = new FakeFile(text);
            var reader = new SampleReader(file, new CLangSampleScanner("cs", "csharp"), theSamples);

            reader.Start();
        }

        [Fact]
        public void determine_name()
        {
            var scanner = new CLangSampleScanner("cs", "csharp");

            scanner.DetermineName("// SAMPLE: States").ShouldBe("States");
            scanner.DetermineName("     // SAMPLE: States").ShouldBe("States");
            scanner.DetermineName("    // SAMPLE: States").ShouldBe("States");
            scanner.DetermineName("Texas").ShouldBeNull();
            scanner.DetermineName("SAMPLE:").ShouldBeNull();
        }

        [Fact]
        public void is_at_end()
        {
            var scanner = new CLangSampleScanner("cs", "csharp");
            scanner.IsAtEnd("// ENDSAMPLE").ShouldBeTrue();

            scanner.IsAtEnd("// SAMPLE: States").ShouldBeFalse();
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
// SAMPLE: States
Texas
Arkansas
Oklahoma
Wisconsin
// ENDSAMPLE
Connecticut
New York
");

            var snippet = theSamples.All().Single();
            snippet.Name.ShouldBe("States");
            
            snippet.Text.TrimEnd().ShouldBe(@"Texas{0}Arkansas{0}Oklahoma{0}Wisconsin".ToFormat(Environment.NewLine));
            
            snippet.Start.ShouldBe(7);
            snippet.End.ShouldBe(10);

            snippet.Language.ShouldBe("csharp");
        }

        [Fact]
        public void find_multiples()
        {
            scan(@"
foo
bar

Missouri
Kansas
// SAMPLE: States
Texas
Arkansas
Oklahoma
Wisconsin
// ENDSAMPLE
Connecticut
New York

// SAMPLE: Names
Jeremy
Jessica
Natalie
Max
Lindsey
// ENDSAMPLE
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

    public class FakeFile : IFileReference
    {
        private readonly StringWriter _writer = new StringWriter();

        public FakeFile()
        {
        }

        public FakeFile(string text)
        {
            _writer.WriteLine(text.Trim());
        }

        public void Append(string text)
        {
            _writer.WriteLine(text);
        }


        public string ReadContents()
        {
            return _writer.ToString();
        }

        public void ReadContents(Action<Stream> action)
        {
            throw new NotImplementedException();
        }

        public void ReadLines(Action<string> read)
        {
            _writer.ToString().ReadLines(read);
        }

        public long Length()
        {
            throw new NotImplementedException();
        }

        public string Etag()
        {
            throw new NotImplementedException();
        }

        public DateTime LastModified()
        {
            throw new NotImplementedException();
        }

        public string Path
        {
            get; set;
        }

        public string Provenance
        {
            get { return "TheApp"; }
        }

        public string ProvenancePath
        {
            get { throw new NotImplementedException(); }
            set { throw new NotImplementedException(); }
        }

        public string RelativePath
        {
            get; set;
        }
    }
}