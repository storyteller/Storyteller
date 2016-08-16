using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Paragraphs;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Paragraphs
{
    
    public class ParagraphGrammarTester
    {
        [Fact]
        public void do_adds_a_silent_grammar_at_the_right_position()
        {
            var paragraph = new ParagraphGrammar("Something");
            ShouldBeTestExtensions.ShouldBe(paragraph.Children.Any(), false);

            paragraph.Do(c => {});

            paragraph.Children[0].ShouldBeOfType<SilentGrammar>()
                .Position.ShouldBe(0);


            paragraph.Do(c => { });
            paragraph.Do(c => { });
            paragraph.Do(c => { });

            paragraph.Children[1].ShouldBeOfType<SilentGrammar>().Position.ShouldBe(1);
            paragraph.Children[2].ShouldBeOfType<SilentGrammar>().Position.ShouldBe(2);
            paragraph.Children[3].ShouldBeOfType<SilentGrammar>().Position.ShouldBe(3);

        }

        [Fact]
        public void sets_the_key_for_all_children()
        {
            var paragraph = new ParagraphGrammar("Something");
            paragraph.Do(c => { });
            paragraph.Do(c => { });
            paragraph.Do(c => { });

            paragraph.Key = "Foo";

            paragraph.Children[0].Key.ShouldBe("Foo:0");
            paragraph.Children[1].Key.ShouldBe("Foo:1");
            paragraph.Children[2].Key.ShouldBe("Foo:2");
        }

        [Fact]
        public void surfaces_all_the_child_errors()
        {
            var child1 = new Sentence();
            child1.AddError(new GrammarError());
            child1.AddError(new GrammarError());

            var child2 = new Sentence();
            child2.AddError(new GrammarError());
            child2.AddError(new GrammarError());

            var paragraph = new Paragraph(new GrammarModel[] {child1, child2});
            paragraph.errors.Length.ShouldBe(4);
        }
    }
}