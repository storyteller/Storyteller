using System;
using Baseline;
using Shouldly;
using StorytellerDocGen.Samples;
using Xunit;
using StringExtensions = StoryTeller.StringExtensions;

namespace StorytellerDocGen.Testing.Samples
{
    
    public class SampleTester
    {
        [Fact]
        public void append()
        {
            var sample = new Sample("the sample");
            sample.Append("something", 5);

            sample.Text.ShouldBe("something" + Environment.NewLine);
            sample.Start.ShouldBe(5);
            sample.End.ShouldBe(5);

            sample.Append("else", 6);
            sample.Append("and more", 7);

            sample.Start.ShouldBe(5);
            sample.End.ShouldBe(7);

            sample.Text.ShouldBe(@"something{0}else{0}and more{0}".ToFormat(Environment.NewLine).TrimStart());
            
        }

        [Fact]
        public void find_the_leading_spaces()
        {
            StringExtensions.LeadingSpaces("foo").ShouldBe(0);
            StringExtensions.LeadingSpaces(" foo").ShouldBe(1);
            StringExtensions.LeadingSpaces("  foo").ShouldBe(2);
            StringExtensions.LeadingSpaces("   foo").ShouldBe(3);
            StringExtensions.LeadingSpaces("    foo").ShouldBe(4);
        }

        [Fact]
        public void level_indention_with_none()
        {
            var sample = new Sample("something");
            sample.Append("something", 5);
            sample.Append("    else", 6);

            sample.Text.ShouldBe(@"something{0}    else{0}".ToFormat(Environment.NewLine).TrimStart());
        }

        [Fact]
        public void level_indention()
        {
            var sample = new Sample("something");
            sample.Append("    something", 5);
            sample.Append("        else", 6);

            sample.Text.ShouldBe(@"something{0}    else{0}".ToFormat(Environment.NewLine).TrimStart());
        }
    }


}