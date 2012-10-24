using System.Xml;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Persistence;

namespace StoryTeller.Testing.Xml
{
    [TestFixture]
    public class when_writing_a_test
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var test = new Test("a test name");
            test.AddComment("more text");
            test.Section("Address").WithDescription("the address section")
                .WithStep("grammar1", "a:1,b:2,c:3")
                .WithStep("grammar2", "d:4,e:5")
                .WithStep("grammar3", "f:6")
                .WithComment("a bunch of text");

            test.Section("Contact")
                .WithStep("grammar4", "g:7,h:8")
                .WithStep("grammar5", step =>
                {
                    step.With("i:9,j:10");
                    step.WithChildren("child1", new Step("g6").With("t:1,v:2"), new Step("g7"));
                    step.WithChildren("child2", new Step("g8"), new Step("g9"));
                });


            XmlDocument document = new TestWriter().Write(test);

            element = document.DocumentElement;
        }

        #endregion

        private XmlElement element;

        [Test]
        public void should_have_a_node_for_each_section_plus_the_comment_for_the_description_and_a_user_comment()
        {
            element.ChildNodes.Count.ShouldEqual(4);
            element.ChildNodes[0].Name.ShouldEqual("Comment");
            element.ChildNodes[2].Name.ShouldEqual("Address");
            element.ChildNodes[3].Name.ShouldEqual("Contact");
        }

        [Test]
        public void should_have_a_step_node_for_each_step_in_a_section()
        {
            XmlElement sectionElement = element["Address"];
            sectionElement.ChildNodes.Count.ShouldEqual(4);

            sectionElement.ChildNodes[0].Name.ShouldEqual("grammar1");
            sectionElement.ChildNodes[1].Name.ShouldEqual("grammar2");
            sectionElement.ChildNodes[2].Name.ShouldEqual("grammar3");
            sectionElement.ChildNodes[3].Name.ShouldEqual(Comment.COMMENT);
        }

        [Test]
        public void should_have_the_test_name_in_the_top_node()
        {
            element.AttributeShouldEqual("name", "a test name");
        }

        [Test]
        public void should_have_written_a_comment_node_at_the_top_of_the_test()
        {
            XmlNode child = element.ChildNodes[0];
            child.Name.ShouldEqual(Comment.COMMENT);
            child.InnerText.ShouldEqual("more text");
        }

        [Test]
        public void should_have_written_a_comment_within_Address_fixture_section()
        {
            XmlNode commentElement = element.SelectSingleNode("Address").LastChild;
            commentElement.InnerText.ShouldEqual("a bunch of text");
        }

        [Test]
        public void should_have_written_an_xml_comment_for_the_address_section()
        {
            element.OuterXml.ShouldContain("<!--the address section-->");
        }

        [Test]
        public void should_have_written_children_nodes_of_step_with_children_steps()
        {
            element.SelectSingleNode("Contact/grammar5").Should(x =>
            {
                x.ShouldNotBeNull();
                x.CountOfChildNodesShouldBe(2);
                x.ChildNodes[0].ShouldHaveName("child1").FirstChild.ShouldHaveAttributes("t:1,v:2");
                x.ChildNodes[1].ShouldHaveName("child2");
            });
        }

        [Test]
        public void should_have_xml_attribute_for_each_step_value()
        {
            XmlNode grammarElement = element.ChildNodes[2].FirstChild;
            grammarElement.Attributes.Count.ShouldEqual(3);
            grammarElement.AttributeShouldEqual("a", "1");
            grammarElement.AttributeShouldEqual("b", "2");
            grammarElement.AttributeShouldEqual("c", "3");
        }

        [Test]
        public void tagName_of_a_grammar_element_should_be_the_grammar_key()
        {
            XmlNode grammarElement = element.ChildNodes[2].FirstChild;
            grammarElement.Name.ShouldEqual("grammar1");
        }

        [Test]
        public void the_root_node_should_be_test()
        {
            element.Name.ShouldEqual("Test");
        }
    }
}