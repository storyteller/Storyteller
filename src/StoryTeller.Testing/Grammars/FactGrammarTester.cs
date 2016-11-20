using Shouldly;
using StoryTeller.Grammars;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Grammars
{
    public class FactGrammarTester
    {
        [Fact]
        public void marks_the_compiled_Sentence_as_a_fact()
        {
            var fact = new FactGrammar("This is so", c => true);

            var sentence = fact.Compile(new Fixture(), CellHandling.Basic())
                .ShouldBeOfType<Sentence>();


            sentence.fact.ShouldBeTrue();

        }
    }
}