using System.Xml;
using StoryTeller.Persistence;

namespace StoryTeller.Domain
{
    public static class TestExtensions
    {
        public static XmlDocument ToXml(this Test test)
        {
            return new TestWriter().Write(test);
        }
    }
}