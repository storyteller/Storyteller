using System.Collections.Generic;
using System.Linq;
using HtmlTags;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    [TestFixture]
    public class SentenceWriterTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            grammarTag = new GrammarTag(new Sentence
            {
                Name = "Math"
            });
        }

        #endregion

        private GrammarTag grammarTag;

        [Test]
        public void write_text()
        {
            var writer = new SentenceWriter(grammarTag, new CellBuilderLibrary());

            writer.Label(new Label("some text"));

            HtmlTag span = grammarTag.Children.First();

            span.TagName().ShouldEqual("span");
            span.Text().ShouldEqual("some text");
        }
    }

    [TestFixture]
    public class when_writing_a_select
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var grammarTag = new GrammarTag(new Sentence
            {
                Name = "Math"
            });

            Cell cell = Cell.For<string>("name");
            cell.SelectionValues = new List<string>
            {
                "Jeremy",
                "Josh",
                "Chad"
            };

            var writer = new SentenceWriter(grammarTag, new CellBuilderLibrary());
            writer.Input(new TextInput(cell));

            select = grammarTag.Children.First();
        }

        #endregion

        private HtmlTag select;

        [Test]
        public void has_all_the_options()
        {
            select.Children.Count.ShouldEqual(3);
            select.Children.Count(x => x.Text() == "Jeremy").ShouldEqual(1);
            select.Children.Count(x => x.Text() == "Josh").ShouldEqual(1);
            select.Children.Count(x => x.Text() == "Chad").ShouldEqual(1);

            select.Children[0].Attr("value").ShouldEqual("Jeremy");
        }

        [Test]
        public void should_have_class_for_the_cell_name()
        {
            select.HasClass("name").ShouldBeTrue();
        }

        [Test]
        public void should_have_metadata_for_the_cell_name()
        {
            select.MetaData(GrammarConstants.KEY).ShouldEqual("name");
        }

        [Test]
        public void should_have_the_class_cell()
        {
            select.HasClass(GrammarConstants.CELL).ShouldBeTrue();
        }

        [Test]
        public void should_have_the_required_tag()
        {
            select.HasClass(GrammarConstants.REQUIRED).ShouldBeTrue();
        }

        [Test]
        public void should_write_a_select()
        {
            select.ShouldNotBeNull();
            select.TagName().ShouldEqual("select");
        }
    }

    [TestFixture]
    public class when_writing_a_textbox
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            tag = null;
            grammarTag = new GrammarTag(new Sentence
            {
                Name = "Math"
            });

            cell = new Cell("name", typeof(string));

            writer = new SentenceWriter(grammarTag, new CellBuilderLibrary());
        }

        #endregion

        private Cell cell;
        private SentenceWriter writer;
        private HtmlTag tag;
        private GrammarTag grammarTag;

        private HtmlTag theTag
        {
            get
            {
                if (tag == null)
                {
                    writer.Input(new TextInput(cell));
                    tag = grammarTag.Children.First();
                }

                return tag;
            }
        }

        [Test]
        public void has_the_cell_class()
        {
            theTag.HasClass(GrammarConstants.CELL).ShouldBeTrue();
        }

        [Test]
        public void has_the_cell_name_as_a_class()
        {
            theTag.HasClass(cell.Key).ShouldBeTrue();
        }

        [Test]
        public void has_the_cell_name_as_a_metadata_key()
        {
            theTag.MetaData(GrammarConstants.KEY).ShouldEqual(cell.Key);
        }

        [Test]
        public void should_be_required()
        {
            theTag.HasClass(GrammarConstants.REQUIRED).ShouldBeTrue();
        }

        [Test]
        public void writes_a_textbox()
        {
            theTag.TagName().ShouldEqual("input");
            theTag.Attr("type").ShouldEqual("text");
        }
    }


    [TestFixture]
    public class when_writing_a_full_sentence
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            FixtureLibrary library = FixtureGraph.Library;
            grammarTag =
                new GrammarTag(library.FixtureFor(typeof(SentenceTargetFixture).GetFixtureAlias()).GrammarFor("Go"));
            var writer = new SentenceWriter(grammarTag, new CellBuilderLibrary());

            writer.Write();
        }

        #endregion

        private GrammarTag grammarTag;

        public class SentenceTargetFixture : Fixture
        {
            [FormatAs("{name} is a {job}")]
            public void Go(string name, [SelectionValues("Janitor", "CEO")] string job)
            {
            }
        }

        [Test]
        public void should_have_all_the_children()
        {
            grammarTag.Children[0].TagName().ShouldEqual("input");
            grammarTag.Children[1].TagName().ShouldEqual("span");
            grammarTag.Children[2].TagName().ShouldEqual("select");
        }

        [Test]
        public void the_sentence_tag_has_the_sentence_class()
        {
            grammarTag.HasClass(GrammarConstants.SENTENCE).ShouldBeTrue();
        }
    }
}