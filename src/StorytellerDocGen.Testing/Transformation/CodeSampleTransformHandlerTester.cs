using Shouldly;
using StorytellerDocGen.Samples;
using StorytellerDocGen.Transformation;
using Xunit;

namespace StorytellerDocGen.Testing.Transformation
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