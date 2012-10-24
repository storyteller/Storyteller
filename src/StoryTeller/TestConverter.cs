using System;
using System.IO;
using System.Text;
using System.Xml;
using StoryTeller.Domain;
using StoryTeller.Html;
using StoryTeller.Model;
using StoryTeller.Persistence;

namespace StoryTeller
{
    public interface ITestConverter
    {
        Test Clone(Test test);
        Test TestFromXml(string xml);
        string ToXml(Test test);
        void ApplyXmlChanges(Test test, XmlDocument xml);

        string ToPreview(FixtureLibrary library, Test test);
        string ToJson(Test test);
        void ApplyJsonChanges(Test test, string json);
        void ApplyXmlChanges(Test test, string xml);
    }

    public class TestConverter : ITestConverter
    {
        public static readonly string INVALID_XML = "Invalid Xml";

        private readonly ITestReader _reader;
        private readonly ITestWriter _writer;

        public TestConverter()
            : this(new TestReader(), new TestWriter())
        {
        }

        public TestConverter(ITestReader reader, ITestWriter writer)
        {
            _reader = reader;
            _writer = writer;
        }

        #region ITestConverter Members

        public Test Clone(Test test)
        {
            XmlDocument xml = _writer.Write(test);
            Test clone = _reader.ReadTest(xml.DocumentElement);
            clone.Name = "Clone of " + test.Name;

            return clone;
        }

        public Test TestFromXml(string xml)
        {
            var document = new XmlDocument();
            document.LoadXml(xml);

            return _reader.ReadTest(document.DocumentElement);
        }

        public string ToXml(Test test)
        {
            XmlDocument document = _writer.Write(test);
            var sb = new StringBuilder();
            var textWriter = new StringWriter(sb);
            var writer = new XmlTextWriter(textWriter)
            {
                Formatting = Formatting.Indented
            };
            document.WriteContentTo(writer);

            return sb.ToString();
        }

        public void ApplyXmlChanges(Test test, string xml)
        {
            XmlDocument document = null;

            try
            {
                document = new XmlDocument();
                document.LoadXml(xml);
            }
            catch (Exception ex)
            {
                throw new ApplicationException(INVALID_XML, ex);
            }

            ApplyXmlChanges(test, document);
        }

        public void ApplyXmlChanges(Test test, XmlDocument xml)
        {
            Test newTest = _reader.ReadTest(xml.DocumentElement);
            test.ApplyChanges(newTest);
        }

        public string ToPreview(FixtureLibrary library, Test test)
        {
            return new HtmlWriter(library).WritePreview(test).ToString();
        }

        public string ToJson(Test test)
        {
            return new TestWriter().WriteToJson(test);
        }

        public void ApplyJsonChanges(Test test, string json)
        {
            Test newTest = _reader.ReadFromJson(json);
            test.ApplyChanges(newTest);
        }

        #endregion
    }
}