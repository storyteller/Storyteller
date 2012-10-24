using System.Xml;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Persistence;

namespace StoryTeller.Testing.Persistence
{
    [TestFixture]
    public class XmlTestWriterTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void should_write_out_the_lifecycle()
        {
            var test = new Test("name");
            XmlDocument document = new TestWriter().Write(test);

            document.DocumentElement.GetAttribute("lifecycle").ShouldEqual(test.Lifecycle.ToString());
        }
    }
}