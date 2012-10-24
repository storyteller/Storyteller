using HtmlTags;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    public static class TagSpecifications
    {
        public static HtmlTag ShouldHaveClass(this HtmlTag tag, string clazz)
        {
            tag.HasClass(clazz).ShouldBeTrue();
            return tag;
        }

        public static HtmlTag ShouldHaveAtt(this HtmlTag tag, string attName, string attValue)
        {
            tag.Attr(attName).ShouldEqual(attValue);
            return tag;
        }
    }

    [TestFixture]
    public class TextboxBuilderTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            builder = new TextboxBuilder();
            grammar = new GrammarTag(new Sentence());
        }

        #endregion

        private TextboxBuilder builder;
        private GrammarTag grammar;

        private CellTag forCell(Cell cell)
        {
            return builder.AddCell(grammar, cell);
        }

        [Test]
        public void when_writing_the_validation_attributes_for_an_integer_cell()
        {
            forCell(Cell.For<int>("num")).ShouldHaveClass(GrammarConstants.INTEGER).ShouldHaveAtt(GrammarConstants.MAX,
                                                                                                  int.MaxValue.ToString());
        }

        [Test]
        public void when_writing_the_validation_attributes_for_an_long_cell()
        {
            forCell(Cell.For<long>("num")).ShouldHaveClass(GrammarConstants.INTEGER).ShouldHaveAtt(GrammarConstants.MAX,
                                                                                                   long.MaxValue.
                                                                                                       ToString());
        }

        [Test]
        public void when_writing_the_validation_for_a_double_cell()
        {
            CellTag tag = forCell(Cell.For<double>("num"));
            tag.ShouldHaveClass(GrammarConstants.NUMBER).ShouldHaveAtt(GrammarConstants.MAX_LENGTH, "19");
        }


        [Test]
        public void when_writing_the_validation_for_a_float_cell()
        {
            CellTag tag = forCell(Cell.For<float>("num"));
            tag.ShouldHaveClass(GrammarConstants.NUMBER).ShouldHaveAtt(GrammarConstants.MAX_LENGTH, "19");
        }
    }
}