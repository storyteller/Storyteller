using System;
using Baseline;
using Shouldly;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class Sentence_code_generation
    {
        private string theCode;

        public Sentence_code_generation()
        {
            var model = new TestbedFixture().Compile(CellHandling.Basic());
            model.IsMissing = true;
            model.grammars.Each(x => x.IsMissing = true);
            theCode = model.missingCode;
        }

        [Fact]
        public void can_generate_signature_for_simple_sentence_with_no_results()
        {
            theCode.ShouldContain("public void Simple()");
        }

        [Fact]
        public void generate_a_sentence_with_a_return_value()
        {
            theCode.ShouldContain("[return: AliasAs(\"value\")]");
            theCode.ShouldContain("public string TheValueShouldBe()");
        }

        [Fact]
        public void generate_a_sentence_with_multiple_inputs()
        {
            theCode.ShouldContain("public void WithArguments(string one, string two)");
        }

        [Fact]
        public void generate_with_an_assertion_that_has_inputs()
        {
            theCode.ShouldContain("[return: AliasAs(\"returnValue\")]");
            theCode.ShouldContain("public string SumShouldBe(string X, string Y)");
        }

        [Fact]
        public void generate_with_multiple_outputs()
        {
            theCode.ShouldContain("public void MultipleOuts(string X, string Y, out string Sum, out string Product)");
        }
    }

    public class TestbedFixture : Fixture
    {
        public void Simple()
        {

        }

        public void WithArguments(string one, string two)
        {

        }

        [return: AliasAs("value")]
        public string TheValueShouldBe()
        {
            return "Hello";
        }

        public int SumShouldBe(int X, int Y)
        {
            return X + Y;
        }

        public void MultipleOuts(int X, int Y, out int Sum, out int Product)
        {
            throw new NotImplementedException();
        }
    }
}