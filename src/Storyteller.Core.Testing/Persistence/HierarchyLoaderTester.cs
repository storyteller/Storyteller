using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Persistence;

namespace Storyteller.Core.Testing.Persistence
{
    [TestFixture]
    public class HierarchyLoaderTester
    {
        [Test]
        public void read_a_spec_node()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecNode(path);

            spec.name.ShouldEqual("Check properties");
            spec.lifecycle.ShouldEqual("Acceptance");
            spec.id.ShouldEqual("123456");
            spec.filename.ShouldEqual(path);
        }
    }
}