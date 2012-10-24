using System;
using System.Collections.Generic;
using System.Xml;
using FubuCore;
using FubuCore.Util;
using StoryTeller.Domain;

namespace StoryTeller.Persistence
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
            document.Load(fileName);
            return document;
        }

        public static XmlElement WithRoot(this XmlDocument document, string elementName)
        {
            XmlElement element = document.CreateElement(elementName);
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
            XmlCDataSection section = element.OwnerDocument.CreateCDataSection(text);
            element.AppendChild(section);

            return element;
        }

        public static XmlElement AddElement(this XmlNode element, string name)
        {
            XmlElement child = element.OwnerDocument.CreateElement(name);
            element.AppendChild(child);

            return child;
        }

        public static void AddComment(this XmlNode element, string text)
        {
            XmlComment comment = element.OwnerDocument.CreateComment(text);
            element.AppendChild(comment);
        }

        public static XmlElement AddElement(this XmlNode element, string name, Action<XmlElement> action)
        {
            XmlElement child = element.OwnerDocument.CreateElement(name);
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
            string[] atts = text.Split(',');
            foreach (string att in atts)
            {
                string[] parts = att.Split(':');

                element.WithAtt(parts[0].Trim(), parts[1].Trim());
            }

            return element;
        }

        public static void SetAttributeOnChild(this XmlElement element, string childName, string attName,
                                               string attValue)
        {
            XmlElement childElement = element[childName];
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

        public static XmlElement WithProperties(this XmlElement element, Cache<string, string> properties)
        {
            properties.Each((k, v) =>
            {
                if (v.IsEmpty()) return;

                element.SetAttribute(k, v);
            });

            return element;
        }

        public static void ForEachElement(this XmlNode node, Action<XmlElement> action)
        {
            foreach (XmlNode child in node.ChildNodes)
            {
                if (child.NodeType == XmlNodeType.Element || child.NodeType == XmlNodeType.Comment)
                {
                    var element = child as XmlElement;
                    if (element != null)
                    {
                        action(element);
                    }
                }
            }
        }

        public static void ForEachAttribute(this XmlNode element, Action<string, string> action)
        {
            foreach (XmlAttribute attribute in element.Attributes)
            {
                action(attribute.Name, attribute.InnerText);
            }
        }

        public static bool IsComment(this XmlNode node)
        {
            return node.Name == Comment.COMMENT || node.NodeType == XmlNodeType.Comment;
        }
    }
}