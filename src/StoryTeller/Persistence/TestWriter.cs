using System.Xml;
using StoryTeller.Domain;

namespace StoryTeller.Persistence
{
    public interface ITestWriter
    {
        XmlDocument Write(Test test);
        void WriteToFile(Test test, string fileName);
        string WriteToJson(Test test);
    }

    public class TestWriter : ITestWriter
    {
        #region ITestWriter Members

        public string WriteToJson(Test test)
        {

            var node = new JsonNode("Test");
            node["Name"] = test.Name;
            node["SuiteName"] = test.SuiteName;

            new WriterVisitor(test, node).Write();

            return node.ToJson();
        } 


        public XmlDocument Write(Test test)
        {
            var document = new XmlDocument();

            var node = new TestXmlNode(document.WithRoot("Test"));
            new WriterVisitor(test, node).Write();

            return document;
        }

        public void WriteToFile(Test test, string fileName)
        {
            using (var writer = new XmlTextWriter(fileName, null)
            {
                Formatting = Formatting.Indented
            })
            {
                XmlDocument document = Write(test);
                document.Save(writer);
            }
        }

        #endregion
    }
}