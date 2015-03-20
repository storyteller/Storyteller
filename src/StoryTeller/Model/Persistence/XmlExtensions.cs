using System;
using System.Collections.Generic;
using System.Xml;
using FubuCore;
using FubuCore.Configuration;

namespace StoryTeller.Model.Persistence
{
    public static class XmlExtensions
    {
        public static string ReadId(this XmlElement element)
        {
            var id = element.GetAttribute(XmlConstants.Id);
            return id.IsEmpty() ? Guid.NewGuid().ToString() : id;
        }

        public static void WriteComment(this XmlElement parent, Comment comment)
        {
            parent.AddElement(XmlConstants.Comment).WithAtt(XmlConstants.Id, comment.id)
                .InnerText = comment.Text;
        }

        public static void WriteSection(this XmlElement parent, Section section)
        {
            var sectionElement = parent.AddElement(section.Key);
            sectionElement.SetAttribute(XmlConstants.Id, section.id);

            section.Children.Each(child =>
            {
                if (child is Comment)
                {
                    sectionElement.WriteComment(TypeExtensions.As<Comment>(child));
                }

                if (child is Step)
                {
                    sectionElement.WriteStep(TypeExtensions.As<Step>(child));
                }
            });
        }

        public static void WriteStep(this XmlElement parent, Step step)
        {
            var element = parent.AddElement(step.Key);
            step.Values.Each(pair => element.SetAttribute(pair.Key, pair.Value));

            step.Collections.Each(element.WriteSection);
        }
    }
}