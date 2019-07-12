using Markdig.Extensions.Footnotes;
using Shouldly;
using StoryTeller.CSV;
using Xunit;

namespace StoryTeller.Testing.Csv
{
    public class CsvFileTester
    {
        [Theory]
        [InlineData("foo", "foo")]
        [InlineData("foo,", "\"foo,\"")]
        [InlineData(",foo", "\",foo\"")]
        [InlineData("\"foo\"", "\"\"\"foo\"\"\"")]
        [InlineData("foo,bar", "\"foo,bar\"")]
        public void escape_data(string raw, string expected)
        {
            CsvFile.Escape(raw).ShouldBe(expected);
        }

        [Fact]
        public void write_data()
        {
            var file = new CsvFile();
            file.WriteValues("1", "2", "3");
            file.WriteValues("a", "b", "c");
            file.WriteValues("foo", "bar", "foo,bar");
            
            file.Contents().Trim().ShouldBe(@"
1,2,3
a,b,c
foo,bar,'foo,bar'
".Trim().Replace("'", "\""));
        }
    }
}
