using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests.Outline;

namespace StoryTeller.UserInterface.Testing.UI.Tests.Outline
{
    [TestFixture]
    public class when_creating_a_test_node : TestTreeBuilderContext
    {
        protected override void theContextIs()
        {
            treeBuilder.StartTest(theTest);
        }

        [Test]
        public void create_test_node()
        {
            assertCurrentNode(theTest, Icon.Test, theTest.Name);
        }

        [Test]
        public void the_test_node_should_be_in_the_stack()
        {
            treeBuilder.LastNode.ShouldBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    [TestFixture]
    public class when_creating_a_comment_node : TestTreeBuilderContext
    {
        private Comment theComment;

        protected override void theContextIs()
        {
            treeBuilder.StartTest(theTest);
            theComment =
                new Comment(
                    "a;sldfj;lasdfjl;adfjl;asdjfl;afjl;dsjlasjfldjl;l;adhljhgkhgkhkgjhasdgs;kajsdgashfkjahkjskashfajkskadjsfkahlkadhfla");

            treeBuilder.Comment(theComment);
        }

        [Test]
        public void should_create_the_outline_node_for_the_comment()
        {
            assertCurrentNode(theComment, Icon.Comment, theComment.Text.TrimToLength(40, "..."));
        }

        [Test]
        public void should_put_the_full_text_of_the_comment_on_the_tooltip_of_the_node()
        {
            treeBuilder.LastNode.ToolTip.ShouldEqual(theComment.Text);
        }

        [Test]
        public void the_comment_node_should_be_attached_to_the_test_node()
        {
            treeBuilder.LastNode.ParentNode.Part.ShouldBeTheSameAs(theTest);
        }

        [Test]
        public void should_add_the_rearrange_commands_onto_this_node()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, theTest, theComment));
        }

        [Test]
        public void the_new_node_should_not_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    [TestFixture]
    public class when_adding_an_invalid_section_to_the_outline : TestTreeBuilderContext
    {
        private Section section;

        protected override void theContextIs()
        {
            treeBuilder.StartTest(theTest);
            section = new Section("wrong");
            treeBuilder.InvalidSection(section);
        }

        [Test]
        public void should_build_the_node()
        {
            assertCurrentNode(section, Icon.Invalid, section.FixtureName);
        }

        [Test]
        public void should_set_an_informative_message_on_the_tooltip()
        {
            treeBuilder.LastNode.ToolTip.ShouldEqual(section.FixtureName + " is not a valid Fixture name");
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, theTest, section));
        }

        [Test]
        public void should_NOT_setup_any_part_adders_on_this_node()
        {
            nodeBuilder.AssertWasNotCalled(x => x.ConfigurePartAdders(null, null, null), x => x.IgnoreArguments());
        }

        [Test]
        public void the_new_node_should_not_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    [TestFixture]
    public class when_adding_a_valid_section_to_the_outline : TestTreeBuilderContext
    {
        private FixtureStructure fixture;
        private Section section;

        protected override void theContextIs()
        {
            treeBuilder.StartTest(theTest);
            fixture = theLibrary.FixtureFor("Math");

            fixture.FixtureClassName = "Math Classname";
            fixture.Label = "the title of this fixture";

            section = new Section(fixture.Name);

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, fixture);
        }

        [Test]
        public void the_node_should_be_added_to_the_tree()
        {
            assertCurrentNode(section, Icon.Section, fixture.Label);
        }

        [Test]
        public void the_tooltip_should_reflect_the_type_of_the_fixture()
        {
            treeBuilder.CurrentNode.ToolTip.ShouldEqual(fixture.FixtureClassName);
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.CurrentNode, theTest, section));
        }

        [Test]
        public void should_set_up_the_part_adders_on_this_node()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigurePartAdders(treeBuilder.CurrentNode, fixture, section));
        }

        [Test]
        public void the_new_node_should_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldBeTheSameAs(treeBuilder.CurrentNode);
        }

        [Test]
        public void ending_a_section_should_pop_the_section_node_off_the_stack()
        {
            treeBuilder.EndSection(section);
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }



    [TestFixture]
    public class when_adding_a_sentence_to_a_section : TestTreeBuilderContext
    {
        private Sentence sentence;
        private Step step;
        private Section section;

        protected override void theContextIs()
        {
            sentence = Sentence.For("Add {x} to {y}", Cell.For<int>("x"), Cell.For<int>("y"));
            sentence.Name = "adding";
            step = new Step().With("x", 1).With("y", 2);

            treeBuilder.StartTest(theTest);

            section = new Section("Math");

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, new FixtureStructure("Math"));

            treeBuilder.Sentence(sentence, step);
        }

        [Test]
        public void uses_the_node_builder_to_write_the_text()
        {
            nodeBuilder.AssertWasCalled(x => x.WriteSentenceText(treeBuilder.LastNode, sentence, step));
        }

        [Test]
        public void the_node_is_added_to_the_tree()
        {
            assertCurrentNode(step, Icon.Sentence, string.Empty);
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, section, step));
        }

        [Test]
        public void the_new_node_should_not_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    [TestFixture]
    public class when_writing_an_invalid_grammar_in_a_section : TestTreeBuilderContext
    {
        private Step step;
        private Section section;

        protected override void theContextIs()
        {
            step = new Step().With("x", 1).With("y", 2);

            treeBuilder.StartTest(theTest);

            section = new Section("Math");

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, new FixtureStructure("Math"));

            treeBuilder.InvalidGrammar("Adding", step);
        }

        [Test]
        public void the_node_should_be_added_to_the_tree()
        {
            assertCurrentNode(step, Icon.Invalid, "Invalid Grammar (Adding)");
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, section, step));
        }

        [Test]
        public void the_new_node_should_not_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    [TestFixture]
    public class when_writing_a_table_in_a_section : TestTreeBuilderContext
    {
        private Step step;
        private Section section;
        private Table table;

        protected override void theContextIs()
        {
            step = new Step().With("x", 1).With("y", 2);

            treeBuilder.StartTest(theTest);

            section = new Section("Math");

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, new FixtureStructure("Math"));

            table = new Table("the label of this grammar", "leaf1");

            treeBuilder.Table(table, step);
        }

        [Test]
        public void the_node_should_be_added_to_the_tree()
        {
            assertCurrentNode(step, Icon.Table, table.Label);
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, section, step));
        }

        [Test]
        public void the_new_node_should_not_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }



    [TestFixture]
    public class when_writing_a_set_verification_in_a_section : TestTreeBuilderContext
    {
        private Step step;
        private Section section;
        private SetVerification @set;

        protected override void theContextIs()
        {
            step = new Step().With("x", 1).With("y", 2);

            treeBuilder.StartTest(theTest);

            section = new Section("Math");

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, new FixtureStructure("Math"));

            set = new SetVerification("the label of this grammar", "leaf1");

            treeBuilder.SetVerification(set, step);
        }

        [Test]
        public void the_node_should_be_added_to_the_tree()
        {
            assertCurrentNode(step, Icon.SetVerification, set.Label);
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, section, step));
        }

        [Test]
        public void the_new_node_should_not_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    [TestFixture]
    public class when_writing_a_paragraph_in_a_section : TestTreeBuilderContext
    {
        private Step step;
        private Section section;
        private Paragraph paragraph;

        protected override void theContextIs()
        {
            step = new Step().With("x", 1).With("y", 2);

            treeBuilder.StartTest(theTest);

            section = new Section("Math");

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, new FixtureStructure("Math"));

            paragraph = new Paragraph("the label of this paragraph", new List<GrammarStructure>());
            treeBuilder.StartParagraph(paragraph, step);
        }

        [Test]
        public void the_node_should_be_added_to_the_tree()
        {
            assertCurrentNode(step, Icon.Paragraph, paragraph.Label);
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, section, step));
        }

        [Test]
        public void paragraph_should_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldBeTheSameAs(treeBuilder.CurrentNode);
        }

        [Test]
        public void ending_a_paragraph_should_pop_the_paragraph_off_the_stack()
        {
            treeBuilder.EndParagraph(paragraph, step);
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    [TestFixture]
    public class when_writing_grammars_underneath_a_paragraph : TestTreeBuilderContext
    {
        private Step step;
        private Section section;
        private Paragraph paragraph;

        protected override void theContextIs()
        {
            step = new Step().With("x", 1).With("y", 2);

            treeBuilder.StartTest(theTest);

            section = new Section("Math");

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, new FixtureStructure("Math"));

            paragraph = new Paragraph("the label of this paragraph", new List<GrammarStructure>());
            treeBuilder.StartParagraph(paragraph, step);
        }

        [Test]
        public void writing_a_sentence_should_not_add_rearrange_commands()
        {
            var sentence = new Sentence();
            treeBuilder.Sentence(sentence, step);

            nodeBuilder.AssertWasNotCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, null, step));
        }

        [Test]
        public void writing_a_table_should_not_add_rearrange_commands()
        {
            var table = new Table();
            treeBuilder.Table(table, step);

            nodeBuilder.AssertWasNotCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, null, step));
        }

        [Test]
        public void adding_an_embedded_section_then_a_sentence_under_a_paragraph_should_still_have_adder_commands()
        {
            var embedded = new EmbeddedSection(new FixtureStructure("Embed"), "the label", "embed");
            treeBuilder.StartEmbeddedSection(embedded, step);

            var sentence = new Sentence();
            var sentenceStep = new Step();
            treeBuilder.Sentence(sentence, sentenceStep);

            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, embedded.LeafFor(step), sentenceStep));
        }
    }

    [TestFixture]
    public class when_writing_an_embedded_section_to_a_section : TestTreeBuilderContext
    {
        private Step step;
        private Section section;
        private EmbeddedSection embedded;
        private FixtureStructure theFixture;

        protected override void theContextIs()
        {
            step = new Step().With("x", 1).With("y", 2);

            treeBuilder.StartTest(theTest);

            section = new Section("Math");

            treeBuilder.StartTest(theTest);
            treeBuilder.StartSection(section, new FixtureStructure("Math"));

            theFixture = new FixtureStructure("new");
            embedded = new EmbeddedSection(theFixture, "the label of embedded", "embedded");
            treeBuilder.StartEmbeddedSection(embedded, step);
        }

        [Test]
        public void the_node_should_be_added_to_the_tree()
        {
            assertCurrentNode(step, Icon.EmbeddedSection, embedded.Label);
        }

        [Test]
        public void should_setup_the_rearrange_commands()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigureRearrangeCommands(treeBuilder.LastNode, section, step));
        }

        [Test]
        public void paragraph_should_be_on_the_stack()
        {
            treeBuilder.LastNode.ShouldBeTheSameAs(treeBuilder.CurrentNode);
        }

        [Test]
        public void the_step_leaf_of_the_step_for_the_embedded_section_should_be_the_holder_on_the_current_node()
        {
            treeBuilder.CurrentNode.Holder.ShouldBeTheSameAs(embedded.LeafFor(step));
        }

        [Test]
        public void should_configure_part_adder_commands_to_the_embedded_sectino_node()
        {
            nodeBuilder.AssertWasCalled(x => x.ConfigurePartAdders(treeBuilder.LastNode, theFixture, embedded.LeafFor(step)));
        }

        [Test]
        public void ending_an_embedded_section_should_pop_the_node_off_the_stack()
        {
            treeBuilder.EndEmbeddedSection(embedded, step);
            treeBuilder.LastNode.ShouldNotBeTheSameAs(treeBuilder.CurrentNode);
        }
    }

    
    public abstract class TestTreeBuilderContext
    {
        protected Test theTest;
        protected FixtureLibrary theLibrary;
        protected IOutlineConfigurer nodeBuilder;
        protected OutlineTreeBuilder treeBuilder;

        protected void assertCurrentNode(ITestPart part, Icon icon, string text)
        {
            OutlineNode outlineNode = treeBuilder.LastNode;
            outlineNode.Part.ShouldBeTheSameAs(part);
            outlineNode.Icon.ShouldEqual(icon);
            outlineNode.HeaderText().ShouldEqual(text);
        }

        [SetUp]
        public void SetUp()
        {
            theTest = new Test("something");
            theLibrary = new FixtureLibrary();

            nodeBuilder = MockRepository.GenerateMock<IOutlineConfigurer>();

            treeBuilder = new OutlineTreeBuilder(theTest, theLibrary, nodeBuilder);

            theContextIs();
        }

        protected abstract void theContextIs();

    }
}