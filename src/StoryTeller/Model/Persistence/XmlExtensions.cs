using System;
using System.IO;
using System.Linq;
using System.Xml;
using Baseline;
using StoryTeller.Util;

namespace StoryTeller.Model.Persistence
{
    public static class XmlExtensions
    {
#if !NET46
        public static void Save(this XmlDocument document, string file)
        {
            using (var stream = new FileStream(file, FileMode.Create))
            {
                document.Save(stream);
                stream.Flush();
            }
        }
#endif


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
            var sectionElement = parent.AddElement(XmlConvert.EncodeName(section.Key));
            sectionElement.SetAttribute(XmlConstants.Id, section.id);

            if (section.ActiveCells.Count > 0)
            {
                var activeCellString = section.ActiveCells.Select(x => "{0}={1}".ToFormat(x.Key, x.Value)).Join(",");
                sectionElement.SetAttribute(XmlConstants.ActiveCells, activeCellString);
            }


            section.Children.Each(child =>
            {
                if (child is Comment)
                {
                    sectionElement.WriteComment(child.As<Comment>());
                }

                if (child is Step)
                {
                    sectionElement.WriteStep(child.As<Step>());
                }
            });
        }

        public static void WriteStep(this XmlElement parent, Step step)
        {
            var element = parent.AddElement(XmlConvert.EncodeName(step.Key));
            step.Values.Each(pair => element.SetAttribute(XmlConvert.EncodeName(pair.Key), pair.Value));

            step.Collections.Each(element.WriteSection);
        }
    }
}