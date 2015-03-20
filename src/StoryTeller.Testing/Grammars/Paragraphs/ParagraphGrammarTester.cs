using System.Linq;
using NUnit.Framework;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Paragraphs;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Paragraphs
{
    [TestFixture]
    public class ParagraphGrammarTester
    {
        [Test]
        public void do_adds_a_silent_grammar_at_the_right_position()
        {
            var paragraph = new ParagraphGrammar("Something");
            paragraph.Children.Any().ShouldBeFalse();

            paragraph.Do(c => {});

            paragraph.Children[0].ShouldBeOfType<SilentGrammar>()
                .Position.ShouldEqual(0);


            paragraph.Do(c => { });
            paragraph.Do(c => { });
            paragraph.Do(c => { });

            paragraph.Children[1].ShouldBeOfType<SilentGrammar>().Position.ShouldEqual(1);
            paragraph.Children[2].ShouldBeOfType<SilentGrammar>().Position.ShouldEqual(2);
            paragraph.Children[3].ShouldBeOfType<SilentGrammar>().Position.ShouldEqual(3);

        }

        [Test]
        public void sets_the_key_for_all_children()
        {
            var paragraph = new ParagraphGrammar("Something");
            paragraph.Do(c => { });
            paragraph.Do(c => { });
            paragraph.Do(c => { });

            paragraph.Key = "Foo";

            paragraph.Children[0].Key.ShouldEqual("Foo:0");
            paragraph.Children[1].Key.ShouldEqual("Foo:1");
            paragraph.Children[2].Key.ShouldEqual("Foo:2");
        }

        [Test]
        public void surfaces_all_the_child_errors()
        {
            var child1 = new Sentence();
            child1.AddError(new GrammarError());
            child1.AddError(new GrammarError());

            var child2 = new Sentence();
            child2.AddError(new GrammarError());
            child2.AddError(new GrammarError());

            var paragraph = new Paragraph(new GrammarModel[] {child1, child2});
            paragraph.errors.Length.ShouldEqual(4);
        }
    }
}