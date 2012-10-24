using System;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Samples.Grammars;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    [TestFixture]
    public class FixtureTagTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixture = new FixtureStructure("Math");
        }

        #endregion

        private FixtureStructure fixture;


        [Test]
        public void the_first_child_should_be_a_comment_tag()
        {
            var tag = new FixtureTag(fixture);
            tag.Children.First().ShouldBeOfType<CommentTag>().ShouldHaveClass(GrammarConstants.COMMENT).ShouldHaveClass(
                GrammarConstants.STEP);
        }

        [Test]
        public void the_last_child_should_be_a_tags_tag()
        {
            var tag = new FixtureTag(fixture);
            tag.Children.Last().ShouldBeOfType<TagsTag>().ShouldHaveClass(GrammarConstants.TAGS).ShouldHaveClass(
                GrammarConstants.STEP);
        }

        [Test]
        public void write_a_div_with_the_id()
        {
            var tag = new FixtureTag(fixture);
            tag.TagName().ShouldEqual("div");

            tag.Id().ShouldEqual("Math");
        }

        [Test]
        public void do_not_write_remove_link_for_the_mandatory_autoselect_grammar()
        {
            var fixture =
                FixtureGraph.Library.FixtureFor("MandatorySelection");

            var fixtureTag = new FixtureTag(fixture);
            fixtureTag.Children.First(x => x.HasClass("StartWithTheNumber")).Children.Any(x => x is RemoveLinkTag).
                    ShouldBeFalse();
        }
    }

    [TestFixture]
    public class when_adding_a_structure_to_the_fixture_tag
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            sentence = new Sentence
            {
                Name = "Something"
            };

            var fixture = new FixtureStructure("Math");
            fixture.Policies.Tag(sentence.Name, "abc");
            fixture.Policies.Tag(sentence.Name, "def");
            fixture.Policies.Tag(Guid.NewGuid().ToString(), "tuv");

            fixtureTag = new FixtureTag(fixture);
            grammarTag = fixtureTag.Add(sentence);
        }

        #endregion

        private GrammarTag grammarTag;
        private FixtureTag fixtureTag;
        private Sentence sentence;

        [Test]
        public void should_add_the_child()
        {
            fixtureTag.Children.ShouldContain(grammarTag);
        }

        [Test]
        public void should_create_a_new_grammar_tag_for_that_grammar()
        {
            grammarTag.ShouldNotBeNull();
            grammarTag.Grammar.ShouldBeTheSameAs(sentence);
        }


        [Test]
        public void should_write_the_tags_on_the_grammar_as_classes_on_the_grammar_tag()
        {
            grammarTag.HasClass("abc").ShouldBeTrue();
            grammarTag.HasClass("def").ShouldBeTrue();
            grammarTag.HasClass("tuv").ShouldBeFalse();
        }
    }

    [TestFixture]
    public class when_adding_an_embedded_section_to_the_fixture_tag
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            FixtureLibrary library =
                FixtureGraph.Library;

            // Look for the EmbeddedChoicesFixture
            fixture = library.FixtureFor("EmbeddedChoices");
            fixtureTag = new FixtureTag(fixture);
        }

        #endregion

        private FixtureStructure fixture;
        private FixtureTag fixtureTag;

        private GrammarTag grammarTagFor(string key)
        {
            return fixtureTag.Children.First(x => (string) x.MetaData(GrammarConstants.KEY) == key) as GrammarTag;
        }

        [Test]
        public void should_write_the_embedded_and_section_classes()
        {
            GrammarStructure grammar = fixture.GrammarFor("Simple");
            GrammarTag grammarTag = grammarTagFor("Simple");

            grammarTag.ShouldHaveClass(GrammarConstants.EMBEDDED);
            grammarTag.ShouldHaveClass(GrammarConstants.SECTION);
        }

        [Test]
        public void should_write_the_fixture_name_of_the_embedded_section()
        {
            var grammar = SpecificationExtensions.As<EmbeddedSection>(fixture.GrammarFor("Simple"));
            GrammarTag grammarTag = grammarTagFor("Simple");

            grammarTag.MetaData(GrammarConstants.FIXTURE).ShouldEqual(grammar.Fixture.Name);
        }

        [Test]
        public void should_write_the_leaf_name()
        {
            GrammarStructure grammar = fixture.GrammarFor("Simple");
            GrammarTag grammarTag = grammarTagFor("Simple");

            grammarTag.MetaData(GrammarConstants.LEAF_NAME, SpecificationExtensions.As<EmbeddedSection>(grammar).LeafName);
        }

        [Test]
        public void should_write_the_selection_mode_to_the_grammar_tag()
        {
            var grammar = SpecificationExtensions.As<EmbeddedSection>(fixture.GrammarFor("Simple"));
            GrammarTag grammarTag = grammarTagFor("Simple");

            grammarTag.MetaData(GrammarConstants.SELECTION_MODE).ShouldEqual(
                grammar.Fixture.Policies.SelectionMode.ToString());
        }



        [Test]
        public void do_not_add_selector_if_it_is_a_mandatory_auto_select_fixture()
        {
            GrammarTag grammarTag = grammarTagFor("MandatorySelection");
            grammarTag.Children.Any(x => x.HasClass(GrammarConstants.GRAMMAR_SELECTOR)).ShouldBeFalse();
        }

        [Test]
        public void write_auto_select_key()
        {
            var grammar = SpecificationExtensions.As<EmbeddedSection>(fixture.GrammarFor("MandatorySelection"));
            GrammarTag grammarTag = grammarTagFor("MandatorySelection");
            grammarTag.MetaData(GrammarConstants.AUTO_SELECT_KEY).ShouldEqual(grammar.Fixture.Policies.AutoSelectGrammarKey);
        }
    }
}