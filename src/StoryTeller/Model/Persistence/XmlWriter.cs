using System.Xml;
using Baseline;
using StoryTeller.Util;

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
                    root.WriteComment(child.As<Comment>());
                }

                if (child is Section)
                {
                    root.WriteSection(child.As<Section>());
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
            root.SetAttribute(Name, specification.name);
            root.SetAttribute(LastUpdated, specification.LastUpdated.ToLongDateString());
            root.SetAttribute(ExpirationPeriod, specification.ExpirationPeriod.ToString());

            return root;
        }

        
    }
}
