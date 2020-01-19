using Shouldly;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class CompoundResourceLoaderTester
    {
        [Fact]
        public void empty_builder_list_returns_an_empty_string()
        {
            var loader = new CompoundResourceLoader();
            loader.Read().ShouldBeEmpty();
        }
        
        [Fact]
        public void single_builder_returns_the_single_builder_result()
        {
            var loader = new CompoundResourceLoader()
                .AddLoader(new VirtualFileLoader("test"));
            loader.Read().ShouldBe("test");
        }
        
        [Fact]
        public void multiple_builder_returns_the_builder_joined_by_default_delimiter()
        {
            var loader = new CompoundResourceLoader()
                .AddLoader(new VirtualFileLoader("test"))
                .AddLoader(new VirtualFileLoader("test"));
            loader.Read().ShouldBe("test\n\ntest");
        }
        
        [Fact]
        public void multiple_builder_returns_the_builder_joined_by_set_delimiter()
        {
            var loader = new CompoundResourceLoader("\n")
                .AddLoader(new VirtualFileLoader("test"))
                .AddLoader(new VirtualFileLoader("test"));
            loader.Read().ShouldBe("test\ntest");
        }
    }
}
