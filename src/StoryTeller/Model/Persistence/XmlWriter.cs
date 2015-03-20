using System.Collections.Generic;
using System.Xml;
using FubuCore;
using FubuCore.Configuration;

namespace StoryTeller.Model.Persistence
{
    public class XmlWriter : XmlConstants
    {
        public static XmlDocument WriteToXml(Specification specification)
        {
            var document = new XmlDocument();
            var root = WriteSpecRoot(specification, document);

            WriteBody(specification, root);

            return document;
        }

        public static void WriteBody(Specification specification, XmlElement root)
        {
            specification.Children.Each(child =>
            {
                if (child is Comment)
                {
                    root.WriteComment(TypeExtensions.As<Comment>(child));
                }

                if (child is Section)
                {
                    root.WriteSection(TypeExtensions.As<Section>(child));
                }
            });
        }


        public static XmlElement WriteSpecRoot(Specification specification, XmlDocument document)
        {
            var root = document.WithRoot(Spec);
            root.SetAttribute(Id, specification.id);
            root.SetAttribute(MaxRetries, specification.MaxRetries.ToString());
            root.SetAttribute(TagsAtt, specification.Tags.Join(", "));
            root.SetAttribute(LifecycleAtt, specification.Lifecycle.ToString());
            root.SetAttribute(Name, specification.Name);

            return root;
        }

        
    }
}