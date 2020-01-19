using Shouldly;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class VirtualFileLoaderTester
    {
        [Fact]
        public void null_return_emptry_string()
        {
            var loader = new VirtualFileLoader(null);
            loader.Read().ShouldBeEmpty();
        }
        
        [Fact]
        public void none_null_or_empty_return_text()
        {
            var loader = new VirtualFileLoader("test");
            loader.Read().ShouldBe("test");
        }
    }
}
