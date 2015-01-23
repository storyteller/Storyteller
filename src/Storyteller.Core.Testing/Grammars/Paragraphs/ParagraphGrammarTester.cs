using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Grammars;
using Storyteller.Core.Grammars.Paragraphs;

namespace Storyteller.Core.Testing.Grammars.Paragraphs
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
    }
}