using System.Collections.Generic;
using System.Xml;
using FubuCore;
using FubuCore.Configuration;

namespace Storyteller.Core.Model.Persistence
{
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
                    root.WriteComment(TypeExtensions.As<Comment>(child));
                }

                if (child is Section)
                {
                    root.WriteSection(TypeExtensions.As<Section>(child));
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
}