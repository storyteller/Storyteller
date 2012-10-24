using System.Xml;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Persistence;
using System.Linq;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class TestConverterTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            theConverter = new TestConverter(new TestReader(), new TestWriter());
        }

        #endregion

        private TestConverter theConverter;

        [Test]
        public void apply_changes_integrated_tester()
        {
            // I'm starting with a test with 2 comments, removing one comment
            // from the xml, then converting back to the test.  The test should
            // only have one comment afterwards
            var test = new Test("test1", x =>
            {
                x.Add(new Comment("some text"));
                x.Add(new Comment("some other text"));
            });

            string xml = theConverter.ToXml(test);
            var doc = new XmlDocument();
            doc.LoadXml(xml);
            doc.DocumentElement.RemoveChild(doc.DocumentElement.LastChild);

            theConverter.ApplyXmlChanges(test, doc);

            test.Parts.Count.ShouldEqual(1);
        }

        [Test]
        public void apply_json_changes_integrated_tester()
        {
            // I'm starting with a test with 2 comments, adding one comment
            // from the json, then converting back to the test.  The test should
            // only have the new comment afterwards
            var test = new Test("test1", x =>
            {
                x.Add(new Comment("some text"));
                x.Add(new Comment("some other text"));
            });

            var test2 = test.Clone("something");
            test2.Add(new Comment("another"));

            var json = new TestWriter().WriteToJson(test2);

            theConverter.ApplyJsonChanges(test, json);
            test.Parts.Count.ShouldEqual(3);
            test.Parts.Last().ShouldBeOfType<Comment>().Text.ShouldEqual("another");
        }

        [Test]
        public void Clone()
        {
            var test = new Test("test1");
            test.Section("a");
            test.Section("b");
            test.Section("c");


            Test test2 = theConverter.Clone(test);
            test2.Name.ShouldEqual("Clone of test1");
            test2.Parts.Count.ShouldEqual(3);
        }
    }
}