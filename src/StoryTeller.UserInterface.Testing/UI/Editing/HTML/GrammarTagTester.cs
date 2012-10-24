using System.Diagnostics;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    [TestFixture]
    public class GrammarTagTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void adding_a_close_link_adds_to_itself_if_there_is_no_header_tag()
        {
            var sentence = new Sentence
            {
                Name = "ThisGrammar",
                Parent = new FixtureStructure()
            };

            var tag = new GrammarTag(sentence);
            tag.AddDeleteLink();

            tag.Children.Last().ShouldBeOfType<RemoveLinkTag>();
        }

        [Test]
        public void adding_a_close_link_adds_to_the_header_tag_if_it_exists()
        {
            var sentence = new Sentence
            {
                Name = "ThisGrammar",
                Parent = new FixtureStructure()
            };

            var tag = new GrammarTag(sentence);
            var header = new HeaderTag();
            tag.Append(header);

            tag.AddDeleteLink();

            tag.Children.Count.ShouldEqual(1);

            Debug.WriteLine(tag.ToString());

            header.FirstChild().Children.Count(x => x is RemoveLinkTag).ShouldEqual(1);
        }

        [Test]
        public void has_the_meta_data_tag_for_key()
        {
            var sentence = new Sentence
            {
                Name = "ThisGrammar",
            };

            var tag = new GrammarTag(sentence);

            tag.MetaData(GrammarConstants.KEY).ShouldEqual(sentence.Name);
        }

        [Test]
        public void has_the_step_class()
        {
            var sentence = new Sentence
            {
                Name = "ThisGrammar",
            };

            var tag = new GrammarTag(sentence);

            tag.HasClass(GrammarConstants.STEP).ShouldBeTrue();
        }

        [Test]
        public void read_the_name_and_description()
        {
            var sentence = new Sentence
            {
                Name = "ThisGrammar",
            };

            var tag = new GrammarTag(sentence);

            tag.TagName().ShouldEqual("div");
            tag.HasClass(sentence.Name).ShouldBeTrue();
        }
    }
}