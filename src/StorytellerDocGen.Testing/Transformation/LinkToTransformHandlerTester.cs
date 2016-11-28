using Shouldly;
using StorytellerDocGen.Transformation;
using Xunit;

namespace StorytellerDocGen.Testing.Transformation
{
    public class LinkToTransformHandlerTester
    {
        [Fact]
        public void already_absolute()
        {
            LinkToTransformHandler.ToAbsoluteKey("d/e/f","a/b/c")
                .ShouldBe("a/b/c");
        }


        [Fact]
        public void relative_path()
        {
            LinkToTransformHandler.ToAbsoluteKey("d/e/f", "./a")
                .ShouldBe("d/e/a");
        }

        [Fact]
        public void relative_path_going_up()
        {
            LinkToTransformHandler.ToAbsoluteKey("d/e/f", "./../g")
                .ShouldBe("d/g");
        }
    }
}