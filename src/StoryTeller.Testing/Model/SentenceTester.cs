using System;
using Shouldly;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class SentenceTester
    {
        private FixtureModel fixture = new MySentencesFixture().Compile(CellHandling.Basic());

        [Fact]
        public void build_sample_step_with_no_cells()
        {
            var step = fixture.FindGrammar("Go").ToSampleStep();

            step.Key.ShouldBe("Go");
            step.Values.Count.ShouldBe(0);
        }

        [Fact]
        public void build_sample_step_with_cells_that_have_a_default()
        {
            var step = fixture.FindGrammar("DoMore").ToSampleStep();
            step.Values["number"].ShouldBe("5");
        }

        [Fact]
        public void build_sample_step_with_cells_without_default()
        {
            var step = fixture.FindGrammar("WriteText").ToSampleStep();
            step.Values["text"].ShouldBe("text");
        }

        [Fact]
        public void fact_grammar_is_a_fact()
        {
            fixture.FindGrammar("ThisIsSo")
                .ShouldBeOfType<Sentence>()
                .fact
                .ShouldBeTrue();
        }

        [Fact]
        public void generate_missing_code_for_fact_grammar()
        {
            var code = fixture.FindGrammar("ThisIsSo").ToMissingCode();

            code.ShouldContain("public bool ThisIsSo()");
        }

        public class MySentencesFixture : Fixture
        {
            public MySentencesFixture()
            {

            }

            public bool ThisIsSo()
            {
                return true;
            }

            [FormatAs("Go do something")]
            public void Go()
            {

            }

            [FormatAs("do {number} times")]
            public void DoMore([Default("5")] int number)
            {

            }

            public void WriteText([Editor("bigtext")]string text)
            {

            }

            public void PickACard([SelectionValues("Queen of Diamonds", "King of Hearts", "Ace of Spades")]string card)
            {

            }

            public void PickState([SelectionList("states")]string state)
            {

            }


        }
    }
}