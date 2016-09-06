using System;
using System.Collections.Generic;
using System.IO;
using System.Xml;
using Baseline;

namespace StoryTeller.Util
{
    public static class XmlExtensions
    {
        public static XmlElement With(this XmlElement node, Action<XmlElement> action)
        {
            action(node);
            return node;
        }

        public static XmlDocument FromFile(this XmlDocument document, string fileName)
        {
            using (var stream = new FileStream(fileName, FileMode.Open))
            {
                document.Load(stream);
            }

            return document;
        }

        public static XmlDocument XmlFromFileWithRoot(this string fileName, string root)
        {
            if (File.Exists(fileName))
            {
                return new XmlDocument().FromFile(fileName);
            }

            var document = new XmlDocument();
            document.WithRoot(root);

            return document;
        }

        public static XmlElement WithRoot(this XmlDocument document, string elementName)
        {
            var element = document.CreateElement(elementName);
            document.AppendChild(element);

            return element;
        }


        public static XmlDocument WithXmlText(this XmlDocument document, string xml)
        {
            document.LoadXml(xml);

            return document;
        }

        public static XmlElement WithFormattedText(this XmlElement element, string text)
        {
            var section = element.OwnerDocument.CreateCDataSection(text);
            element.AppendChild(section);

            return element;
        }

        public static XmlElement AddElement(this XmlNode element, string name)
        {
            var child = element.OwnerDocument.CreateElement(name);
            element.AppendChild(child);

            return child;
        }

        public static void AddComment(this XmlNode element, string text)
        {
            var comment = element.OwnerDocument.CreateComment(text);
            element.AppendChild(comment);
        }

        public static XmlElement AddElement(this XmlNode element, string name, Action<XmlElement> action)
        {
            var child = element.OwnerDocument.CreateElement(name);
            element.AppendChild(child);

            action(child);

            return child;
        }

        public static XmlElement WithInnerText(this XmlElement node, string text)
        {
            node.InnerText = text;
            return node;
        }

        public static XmlElement WithAtt(this XmlElement element, string key, string attValue)
        {
            element.SetAttribute(key, attValue);
            return element;
        }

        public static XmlElement WithAttributes(this XmlElement element, string text)
        {
            var atts = text.Split(',');
            foreach (string att in atts)
            {
                var parts = att.Split(':');

                element.WithAtt(parts[0].Trim(), parts[1].Trim());
            }

            return element;
        }

        public static void SetAttributeOnChild(this XmlElement element, string childName, string attName,
                                               string attValue)
        {
            var childElement = element[childName];
            if (childElement == null)
            {
                childElement = element.AddElement(childName);
            }

            childElement.SetAttribute(attName, attValue);
        }

        public static XmlElement WithProperties(this XmlElement element, Dictionary<string, string> properties)
        {
            foreach (var pair in properties)
            {
                element.SetAttribute(pair.Key, pair.Value);
            }

            return element;
        }

        public static XmlElement WithProperties(this XmlElement element, LightweightCache<string, string> properties)
        {
            properties.Each((k, v) => element.SetAttribute(k, v));

            return element;
        }

        public static void ForEachElement(this XmlNode node, Action<XmlElement> action)
        {
            foreach (XmlNode child in node.ChildNodes)
            {
                var element = child as XmlElement;
                if (element != null)
                {
                    action(element);
                }
            }
        }
    }
}