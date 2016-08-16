using Xunit;
using Shouldly;
using ST.Docs.Samples;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace StoryTeller.Testing.ST.Docs.Transformation
{
    public class CodeSampleTransformHandlerTester
    {
        [Fact]
        public void sample_hit()
        {
            var cache = new SampleCache();
            cache.AddOrReplace(new Sample("Good"));

            var handler = new CodeSampleTransformHandler(cache);

            handler.TagForSample("Good")
                .ShouldBeOfType<SampleTag>();


        }

        [Fact]
        public void sample_miss()
        {
            var cache = new SampleCache();
            cache.AddOrReplace(new Sample("Good"));

            var handler = new CodeSampleTransformHandler(cache);

            handler.TagForSample("NotGood")
                .ShouldBeOfType<MissingSampleTag>();
        }
    }
}