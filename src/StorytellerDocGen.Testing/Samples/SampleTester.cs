using System;
using Baseline;
using Shouldly;
using StorytellerDocGen.Samples;
using Xunit;

namespace StorytellerDocGen.Testing.Samples
{
    
    public class SampleTester
    {
        [Fact]
        public void append()
        {
            var snippet = new Sample("the sample");
            snippet.Append("something", 5);

            snippet.Text.ShouldBe("something" + Environment.NewLine);
            snippet.Start.ShouldBe(5);
            snippet.End.ShouldBe(5);

            snippet.Append("else", 6);
            snippet.Append("and more", 7);

            snippet.Start.ShouldBe(5);
            snippet.End.ShouldBe(7);

            snippet.Text.ShouldBe(@"something{0}else{0}and more{0}".ToFormat(Environment.NewLine).TrimStart());
            
        }
    }
}