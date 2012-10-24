using System;
using System.Xml;
using FubuCore;
using StoryTeller.Domain;

namespace StoryTeller.Persistence
{
    public class TestXmlNode : INode
    {
        private readonly XmlElement _element;

        public TestXmlNode(XmlElement element)
        {
            _element = element;
        }

        #region INode Members

        public string InnerText { get { return _element.InnerText; } set { _element.InnerText = value; } }

        public string Name { get { return _element.Name; } }

        public void AddComment(string description)
        {
            _element.AddComment(description);
        }

        public INode AddChild(string name)
        {
            return new TestXmlNode(_element.AddElement(name));
        }

        public INode With(Action<INode> action)
        {
            action(this);
            return this;
        }

        public INode WithFormattedText(string text)
        {
            _element.WithFormattedText(text);
            return this;
        }

        public void ForEachChild(Action<INode> action)
        {
            _element.ForEachElement(x => action(new TestXmlNode(x)));
        }

        public bool IsTags()
        {
            return _element.Name == Tags.TAGS;
        }

        public bool IsComment()
        {
            return _element.IsComment();
        }

        public void ForEachAttribute(Action<string, string> action)
        {
            _element.ForEachAttribute(action);
        }

        public string this[string attName]
        {
            get { return _element.GetAttribute(attName); }
            set
            {
                if (value.IsEmpty()) return;
                _element.SetAttribute(attName, value);
            }
        }

        #endregion
    }
}