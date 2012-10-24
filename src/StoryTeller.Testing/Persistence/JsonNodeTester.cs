using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuCore.Util;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Persistence;

namespace StoryTeller.Testing.Persistence
{
    [TestFixture]
    public class JsonNodeTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void for_each_attribute()
        {
            var cache = new Cache<string, string>
            {
                OnMissing = key =>
                {
                    Assert.Fail(key + " does not exist");
                    return null;
                }
            };

            var node = new JsonNode("Test");
            node.InnerText = "something";

            node["a"] = "1";
            node["b"] = "2";
            node["c"] = "3";


            node.ForEachAttribute((key, value) => cache[key] = value);

            cache.Count.ShouldEqual(3);
            cache["a"].ShouldEqual("1");
            cache["b"].ShouldEqual("2");
            cache["c"].ShouldEqual("3");
        }

        [Test]
        public void for_each_child()
        {
            var node = new JsonNode("Test");
            node.AddChild("a");
            node.AddChild("b");
            node.AddChild("c");

            var list = new List<string>();

            node.ForEachChild(x => list.Add(x.Name));

            list.ShouldHaveTheSameElementsAs("a", "b", "c");
        }

        [Test]
        public void get_the_name()
        {
            var node = new JsonNode("Test");
            node.Name.ShouldEqual("Test");
        }

        [Test]
        public void is_comment()
        {
            new JsonNode("anything").IsComment().ShouldBeFalse();
            new JsonNode(Comment.COMMENT).IsComment().ShouldBeTrue();
        }

        [Test]
        public void read_and_write_attributes()
        {
            var node = new JsonNode("Test");
            node["name"].ShouldBeEmpty();

            node["name"] = "Jeremy";

            node["name"].ShouldEqual("Jeremy");

            //var test = DataMother.MathProject().LoadTests().GetAllTests().First();
        }

        [Test]
        public void read_and_write_inner_text()
        {
            var node = new JsonNode("Test");

            node.InnerText = "something";
            node.InnerText.ShouldEqual("something");
        }

        [Test]
        public void reading_a_non_existent_attribute_returns_empty_string_to_mimic_XmlNode()
        {
            var node = new JsonNode("Test");
            node["unknown"].ShouldEqual("");
        }

        [Test]
        public void write_a_second_test()
        {
            var section = new Section("AutoDispatchConfiguration");
            Test test = new Test("AutoDispatchRules").With(section);

            Step step1 = section.AddStep("IfPriorityEquals").With("priority", "High");
            StepLeaf leaf1 = step1.LeafFor("AndOr");
            leaf1.Add(new Step("AndStatusEquals").With("status", "Open"));
            leaf1.Add(new Step("AndTitleEquals").With("title", "This one"));

            StepLeaf leaf2 = step1.LeafFor("AutoDispatchAction");
            leaf2.Add(new Step("AssignToUser").With("user", "annieAgent"));

            var node = new JsonNode("Test");

            var visitor = new WriterVisitor(test, node);
            visitor.Write();

            Debug.WriteLine(node.ToJson());
        }

        [Test]
        public void write_a_test()
        {
            Test test = DataMother.MathProject().LoadTests().GetAllTests().First();
            var node = new JsonNode("Test");

            var visitor = new WriterVisitor(test, node);
            visitor.Write();

            Debug.WriteLine(node.ToJson());
        }
    }
}