using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Workspace;
using System.Linq;
using System.IO;

namespace StoryTeller.Testing.Workspace
{
    [TestFixture]
    public class LazyTestXmlReaderTester
    {
        private Test test;

        [SetUp]
        public void SetUp()
        {
            var path = Path.Combine ("..", "..", "..", "StoryTeller.Samples", "Tests", "Sentences", "Facts.xml");
            test = LazyTestXmlReader.ReadFromFile(path);
        }

        [Test]
        public void picks_up_the_name_from_the_xml()
        {
            test.Name.ShouldEqual("Facts");
        }

        [Test]
        public void picks_up_the_lifecycle_from_the_xml()
        {
            test.Lifecycle.ShouldEqual(Lifecycle.Regression);
        }

        [Test]
        public void can_load_the_parts_smoke_test()
        {
            test.Parts.Any().ShouldBeTrue();
        }
    }
}