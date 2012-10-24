using System;
using System.Xml.Serialization;

namespace StoryTeller.Engine
{
    [Serializable]
    public class TestResult
    {
        public TestResult()
        {
            Counts = new Counts();
        }

        public string Html { get; set; }
        public Counts Counts { get; set; }
        [XmlAttribute] public double ExecutionTime { get; set; }
        [XmlAttribute]
        public string ExceptionText { get; set; }
        [XmlAttribute]
        public bool WasCancelled { get; set; }
        [XmlAttribute]
        public string Locator { get; set; }

        public string FullExceptionText { get; set; }
    }
}