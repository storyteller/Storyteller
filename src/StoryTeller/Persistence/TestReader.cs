using System;
using System.IO;
using System.Xml;
using FubuCore;
using Newtonsoft.Json.Linq;
using StoryTeller.Domain;

namespace StoryTeller.Persistence
{
    public interface ITestReader
    {
        Test ReadFromFile(string fileName);
        Test ReadTest(XmlElement element);
        Test ReadTest(JObject jObject);
        Test ReadFromJson(string json);
    }


    public class TestReader : ITestReader, ITestFileReader
    {
        #region ITestReader Members

        public Test ReadFromFile(string fileName)
        {
            XmlDocument document = new XmlDocument().FromFile(fileName);
            XmlElement element = document.DocumentElement;
            Test test = ReadTest(element);
            test.FileName = Path.GetFileName(fileName);

            return test;
        }

        public Test ReadTest(XmlElement element)
        {
            var node = new TestXmlNode(element);
            return ReadTest(node);
        }

        public Test ReadTest(JObject jObject)
        {
            var node = new JsonNode(jObject);
            return ReadTest(node);
        }

        public Test ReadFromJson(string json)
        {
            JObject jObject = JObject.Parse(json);
            return ReadTest(jObject);
        }

        #endregion

        public Test ReadTest(INode element)
        {
            Test test = CreateTest(element, new DefaultTestPartcollection());

            element.ForEachChild(node => { readFromChildNode(node, test); });

            return test;
        }

        public static Test CreateTest(INode element, ITestPartCollection parts)
        {
            string name = element["name"];
            string suiteName = element["SuiteName"];
            //string tags = element[Tags.TAGS];
            
            var test = new Test(name, suiteName, parts);
            readLifecycle(test, element);
            return test;
        }

        private void readFromChildNode(INode node, Test test)
        {
            if (node.IsComment())
            {
                test.AddComment(node.InnerText);
            }
            else if (node.IsTags())
            {
                test.AddTags(node.InnerText);
            }
            else
            {
                Section section = ReadSection(node);
                test.Add(section);
            }
        }

        private static void readLifecycle(Test test, INode element)
        {
            string lifecycleString = element["lifecycle"];
            if (lifecycleString.IsEmpty()) return;

            var lifecycle = (Lifecycle) Enum.Parse(typeof (Lifecycle), lifecycleString, true);

            test.Lifecycle = lifecycle;
        }

        public ITestPart ReadPart(INode node)
        {
            ITestPart part;
            if (node.IsComment())
            {
                part = buildComment(node);
            }
            else if (node.IsTags())
            {
                part = buildTags(node);
            }
            else
            {
                part = buildStep(node);
            }
            return part;
        }

        public ITestPart ReadPart(XmlElement element)
        {
            return ReadPart(new TestXmlNode(element));
        }

        private static ITestPart buildTags(INode node)
        {
            return new Tags
            {
                Text = node.InnerText
            };
        }

        private static ITestPart buildComment(INode node)
        {
            return new Comment
            {
                Text = node.InnerText
            };
        }

        private ITestPart buildStep(INode node)
        {
            var step = new Step(node.Name);

            node.ForEachAttribute(step.Set);
            node.ForEachChild(sectionNode => addChildSteps(step, sectionNode));

            return step;
        }

        private void addChildSteps(IStep parent, INode sectionNode)
        {
            StepLeaf childSteps = parent.LeafFor(sectionNode.Name);

            sectionNode.ForEachChild(childStepNode =>
            {
                ITestPart child = ReadPart(childStepNode);
                childSteps.Add(child);
            });
        }

        public Section ReadSection(INode element)
        {
            var section = new Section(element.Name);
            var adder = new SectionAdder(section);

            element.ForEachChild(node =>
            {
                ITestPart part = ReadPart(node);
                part.AcceptVisitor(adder);
            });

            return section;
        }


        public Section ReadSection(XmlElement element)
        {
            return ReadSection(new TestXmlNode(element));
        }
    }

    public class SectionAdder : ITestVisitor
    {
        private readonly Section _section;

        public SectionAdder(Section section)
        {
            _section = section;
        }

        #region ITestVisitor Members

        public void RunStep(IStep step)
        {
            _section.Add(step);
        }

        public void WriteTags(Tags tags)
        {
            _section.Add(tags);
        }

        public void WriteComment(Comment comment)
        {
            _section.Add(comment);
        }

        public void StartSection(Section section)
        {
            throw new NotImplementedException();
        }

        public void EndSection(Section section)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}