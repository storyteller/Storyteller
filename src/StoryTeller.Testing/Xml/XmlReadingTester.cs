using System.Linq;
using System.Xml;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Persistence;

namespace StoryTeller.Testing.Xml
{
    [TestFixture]
    public class when_reading_a_comment
    {
        [Test]
        public void create_a_comment_object_for_a_Comment_node()
        {
            XmlElement element = new XmlDocument().WithRoot("Comment").WithFormattedText("some text");
            new TestReader().ReadPart(element).ShouldBeOfType<Comment>().Text.ShouldEqual("some text");
        }

        [Test]
        public void read_a_comment_from_directly_under_the_test_node()
        {
            string commentText = "some text in the comment";

            XmlDocument doc = new XmlDocument().Configure(x =>
            {
                x.WithRoot("Test").WithAtt("name", "something")
                    .AddElement("Comment").InnerText = commentText;
            });

            var reader = new TestReader();
            Test test = reader.ReadTest(doc.DocumentElement);

            var comment = test.Parts[0].ShouldBeOfType<Comment>();
            comment.Text.ShouldEqual(commentText);
        }
    }

    [TestFixture]
    public class when_reading_a_step
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            XmlElement element =
                new XmlDocument().WithRoot("Grammar1")
                    .WithAttributes("name:Jeremy,email:jeremy@jeremy.com,phone:555-555-5555").With(root =>
                    {
                        root.AddElement("ChildSection").With(x =>
                        {
                            x.AddElement("child1").WithAttributes("a:1,b:2,c:3");
                            x.AddElement("child2");
                            x.AddElement("child3").AddElement("grandchild").With(elem =>
                            {
                                elem.AddElement("g1").WithAttributes("d:4,e:5");
                                elem.AddElement("g2");
                            });
                        });
                    });

            step = (IStep) new TestReader().ReadPart(element);
        }

        #endregion

        private IStep step;

        private StepLeaf theLeaf { get { return step.LeafFor("ChildSection"); } }

        [Test]
        public void should_get_the_grammar_name()
        {
            step.GrammarKey.ShouldEqual("Grammar1");
        }

        [Test]
        public void should_have_children_steps()
        {
            theLeaf.AllSteps().Count().ShouldEqual(3);
        }

        [Test]
        public void should_have_read_all_three_properties()
        {
            step.Get("name").ShouldEqual("Jeremy");
            step.Get("email").ShouldEqual("jeremy@jeremy.com");
            step.Get("phone").ShouldEqual("555-555-5555");
        }

        [Test]
        public void should_pick_up_attributes_on_a_child_step()
        {
            theLeaf.AllSteps().First().Should(x =>
            {
                x.Get("a").ShouldEqual("1");
                x.Get("b").ShouldEqual("2");
                x.Get("c").ShouldEqual("3");
            });
        }

        [Test]
        public void should_pick_up_children_of_child()
        {
            IStep thirdChild = theLeaf.AllSteps().ToList()[2];

            StepLeaf childLeaf = thirdChild.LeafFor("grandchild");
            childLeaf.AllSteps().Count.ShouldEqual(2);
            childLeaf.AllSteps()[0].Get("d").ShouldEqual("4");
            childLeaf.AllSteps()[0].Get("e").ShouldEqual("5");
        }
    }

    [TestFixture]
    public class when_reading_a_section
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            XmlElement element = new XmlDocument().WithRoot("Address").With(x =>
            {
                x.AddElement("Grammar1").WithAttributes("name:Jeremy,email:jeremy@jeremy.com,phone:555-555-5555");
                x.AddElement("Grammar2").WithAttributes("name:Josh");
                x.AddElement("AGrammar").WithAttributes("cost:123.4");
            });

            section = new TestReader().ReadSection(element);
        }

        #endregion

        private Section section;

        [Test]
        public void got_the_correct_grammar_names_of_the_steps()
        {
            section.Parts[0].ShouldBeOfType<IStep>().GrammarKey.ShouldEqual("Grammar1");
            section.Parts[1].ShouldBeOfType<IStep>().GrammarKey.ShouldEqual("Grammar2");
            section.Parts[2].ShouldBeOfType<IStep>().GrammarKey.ShouldEqual("AGrammar");
        }

        [Test]
        public void has_a_step_for_each_child_node()
        {
            section.Parts.Count.ShouldEqual(3);
        }

        [Test]
        public void section_name_should_be_the_node_name()
        {
            section.FixtureName.ShouldEqual("Address");
        }
    }


    [TestFixture]
    public class reading_the_lifecycle
    {
        private Test readTestWhenLifecycleIs(string text)
        {
            XmlElement element = new XmlDocument().WithRoot("Test")
                .WithAtt("name", "the test name")
                .WithAtt("lifecycle", text);

            return new TestReader().ReadTest(element);
        }

        [Test]
        public void lifecycle_is_acceptance_by_default()
        {
            readTestWhenLifecycleIs(string.Empty).Lifecycle.ShouldEqual(Lifecycle.Acceptance);
        }

        [Test]
        public void read_acceptance_from_node()
        {
            readTestWhenLifecycleIs("Acceptance").Lifecycle.ShouldEqual(Lifecycle.Acceptance);
        }

        [Test]
        public void read_regression_from_node()
        {
            readTestWhenLifecycleIs(Lifecycle.Regression.ToString()).Lifecycle.ShouldEqual(Lifecycle.Regression);
        }
    }


    [TestFixture]
    public class when_reading_a_test
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            XmlElement element = new XmlDocument().WithRoot("Test")
                .WithAtt("name", "the test name")
                .With(elem =>
                {
                    elem.AddElement("Address").With(x =>
                    {
                        x.AddElement("Grammar1").WithAttributes("name:Jeremy,email:jeremy@jeremy.com,phone:555-555-5555");
                        x.AddElement("Grammar2").WithAttributes("name:Josh");
                        x.AddElement("AGrammar").WithAttributes("cost:123.4");
                    });


                    elem.AddElement("Site").With(x =>
                    {
                        x.AddElement("SiteGrammar1").WithAttributes("a:1,b:2");
                        x.AddElement("SiteGrammar2").WithAttributes("a:1,b:2");
                    });

                    elem.AddElement("Contact").With(x =>
                    {
                        x.AddElement("ContactGrammar1").WithAttributes("a:1,b:2");
                        x.AddElement("ContactGrammar2").WithAttributes("a:1,b:2");
                    });
                });

            test = new TestReader().ReadTest(element);
        }

        #endregion

        private Test test;

        [Test]
        public void should_have_read_the_name_from_the_top_root()
        {
            test.Name.ShouldEqual("the test name");
        }

        [Test]
        public void should_have_three_parts()
        {
            test.Parts.Count().ShouldEqual(3);
        }

        [Test]
        public void should_have_three_sections()
        {
            test.Parts[0].ShouldBeOfType<Section>().FixtureName.ShouldEqual("Address");
            test.Parts[1].ShouldBeOfType<Section>().FixtureName.ShouldEqual("Site");
            test.Parts[2].ShouldBeOfType<Section>().FixtureName.ShouldEqual("Contact");
        }

        [Test]
        public void the_first_section_has_a_step_with_attributes()
        {
            test.Parts[0].ShouldBeOfType<Section>().Parts[0].ShouldBeOfType<IStep>().Get("name").ShouldEqual("Jeremy");
        }

        [Test]
        public void the_first_section_should_have_steps()
        {
            test.Parts[0].ShouldBeOfType<Section>().Parts.Count.ShouldEqual(3);
        }
    }


    [TestFixture]
    public class when_reading_a_test_with_an_embedded_table
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test =
                TestUtility.ReadTest(
                    @"
<Test name='a test'>
    <Adding>
        <AddNumbersTogether>
            <Rows>
                <AddNumbersTogether x='1' y='2' returnValue='3'/>
                <AddNumbersTogether x='3' y='2' returnValue='5'/>
                <AddNumbersTogether x='2' y='2' returnValue='4'/>
                <AddNumbersTogether x='5' y='2' returnValue='7'/>
                <AddNumbersTogether x='10' y='2' returnValue='12'/>
                <AddNumbersTogether x='1' y='2' returnValue='4'/>
                <AddNumbersTogether x='3' y='2' returnValue='3'/>
                <AddNumbersTogether x='1' y='2' returnValue='3'/>
                <AddNumbersTogether x='1' y='2' returnValue='3'/>
            </Rows>
        </AddNumbersTogether>
    </Adding>

</Test>
");
        }

        #endregion

        private Test test;


        [Test]
        public void should_read_the_children_steps_of_a_step()
        {
            var section = test.Parts[0].ShouldBeOfType<Section>();
            section.Parts.Count.ShouldEqual(1);

            var step = section.Parts[0].ShouldBeOfType<Step>();

            step.LeafFor("Rows").AllSteps().Count.ShouldEqual(9);
        }
    }
}