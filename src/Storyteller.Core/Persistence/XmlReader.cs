using System;
using System.Collections.Generic;
using System.Xml;
using FubuCore;
using FubuCore.Configuration;
using Storyteller.Core.Model;

namespace Storyteller.Core.Persistence
{
    /*
     * 
     * 
     * TODO -->
     * 1.) New utility for XmlElement.ReadId() that gives you a default if empty
     * 2.) Test reading top level of spec
     * 3.) Test reading comment at teh top
     * 4.) Test reading a section at the top
     * 5.) Test reading a comment in a section
     * 6.) Test reading step values
     * 7.) Test reading a collection in a step
     * 8.) read a step within a collection within a step
     * 9.) go 2 deep just for fun?
     * 10.) go to writing!
     * 
     * 
     * 
     * 
     * 
     */

    public class XmlConstants
    {
        public const string LifecycleAtt = "lifecycle";
        public const string MaxRetries = "maxRetries";
        public const string Id = "id";
        public const string TagsAtt = "tags";
        public const string Comment = "Comment";
        public const string Spec = "Spec";
    }

    public class XmlWriter : XmlConstants
    {
        public static XmlDocument WriteToXml(Specification specification)
        {
            var document = new XmlDocument();
            var root = writeSpecRoot(specification, document);

            specification.Children.Each(child =>
            {
                if (child is Comment)
                {
                    root.WriteComment(child.As<Comment>());
                }

                if (child is Section)
                {
                    root.WriteSection(child.As<Section>());
                }
            });

            return document;
        }

        private static XmlElement writeSpecRoot(Specification specification, XmlDocument document)
        {
            var root = document.WithRoot(Spec);
            root.SetAttribute(Id, specification.Id);
            root.SetAttribute(MaxRetries, specification.MaxRetries.ToString());
            root.SetAttribute(TagsAtt, specification.Tags.Join(", "));
            root.SetAttribute(LifecycleAtt, specification.Lifecycle.ToString());

            return root;
        }
    }

    public static class XmlExtensions
    {
        public static string ReadId(this XmlElement element)
        {
            var id = element.GetAttribute(XmlConstants.Id);
            return id.IsEmpty() ? Guid.NewGuid().ToString() : id;
        }

        public static void WriteComment(this XmlElement parent, Comment comment)
        {
            parent.AddElement(XmlConstants.Comment)
                .InnerText = comment.Text;
        }

        public static void WriteSection(this XmlElement parent, Section section)
        {
            var sectionElement = parent.AddElement(section.Key);
            section.Children.Each(child =>
            {
                if (child is Comment)
                {
                    sectionElement.WriteComment(child.As<Comment>());
                }

                if (child is Section)
                {
                    sectionElement.WriteStep(child.As<Step>());
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

    public class XmlReader : XmlConstants
    {
        public static Specification ReadFromFile(string path)
        {
            var document = new XmlDocument().FromFile(path);
            return ReadFromXml(document);
        }

        public static Specification ReadFromXml(XmlDocument document)
        {
            var spec = new Specification();
            var top = document.DocumentElement;
            spec.Name = top.GetAttribute("name");

            var lifecycle = top.GetAttribute(LifecycleAtt);
            spec.Lifecycle = lifecycle.IsEmpty()
                ? Lifecycle.Acceptance
                : Enum.Parse(typeof (Lifecycle), lifecycle).As<Lifecycle>();

            spec.Id = top.ReadId();
            var maxRetries = top.GetAttribute(MaxRetries);
            spec.MaxRetries = maxRetries.IsEmpty() ? 0 : int.Parse(maxRetries);

            var tags = top.GetAttribute(TagsAtt);
            if (tags.IsNotEmpty())
            {
                spec.Tags.AddRange(tags.ToDelimitedArray());
            }


            top.ForEachElement(element =>
            {
                if (element.Name == Comment)
                {
                    spec.Children.Add(ReadComment(element));
                }
                else
                {
                    spec.Children.Add(ReadSection(element));
                }
            });

            return spec;
        }

        public static Section ReadSection(XmlElement element)
        {
            var section = new Section(element.Name) {Id = element.GetAttribute(Id)};

            element.ForEachElement(child =>
            {
                if (child.Name == Comment)
                {
                    section.Children.Add(ReadComment(child));
                }
                else
                {
                    section.Children.Add(ReadStep(child));                    
                }
            });


            return section;
        }

        public static Step ReadStep(XmlElement child)
        {
            var step = new Step(child.Name) {Id = child.ReadId()};

            foreach (XmlAttribute att in child.Attributes)
            {
                if (att.Name == "isStep") break; // Old detritus

                step.Values[att.Name] = att.Value;
            }

            child.ForEachElement(collection =>
            {
                var section = ReadSection(collection);
                step.Collections[collection.Name] = section;
            });

            return step;
        }

        private static Comment ReadComment(XmlElement element)
        {
            return new Comment{Id = element.ReadId(), Text = element.InnerText};
        }
    }
}