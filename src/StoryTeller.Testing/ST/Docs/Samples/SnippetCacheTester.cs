using NUnit.Framework;
using ST.Docs.Samples;

namespace StoryTeller.Testing.ST.Docs.Samples
{
    [TestFixture]
    public class SnippetCacheTester
    {
        [Test]
        public void find_by_bottle()
        {
            var cache = new SnippetCache();
            var snippet1 = new Snippet("a") {BottleName = "Foo"};
            cache.Add(snippet1);

            var snippet2 = new Snippet("a") {BottleName = "Bar"};
            cache.Add(snippet2);

            cache.FindByBottle("a", "Foo").ShouldBeTheSameAs(snippet1);
            cache.FindByBottle("a", "Bar").ShouldBeTheSameAs(snippet2);
            cache.FindByBottle("random", "Bar").ShouldBeNull();
            cache.FindByBottle("a", "Random").ShouldBeNull();
        }
    }
}