using System.Collections.Generic;
using System.Reflection;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Lines;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing.Grammars
{
    public class declaring_grammars_with_attributes
    {
        [Fact]
        public void can_build_the_grammar_from_the_attribute()
        {
            var fixture = new FakeAttributeFixture();
            var grammar = fixture["Go"].ShouldBeOfType<FakeGrammar>();

            grammar.Fixture.ShouldBeTheSameAs(fixture);
            grammar.Method.Name.ShouldBe("Go");
        }
    }

    public class FakeAttributeFixture : Fixture
    {
        [Fake]
        public void Go()
        {
            
        }
    }

    public class FakeAttribute : GrammarAttribute
    {
        public override IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return new FakeGrammar(method, fixture);
        }
    }

    public class FakeGrammar : LineGrammar
    {
        public MethodInfo Method { get; }
        public Fixture Fixture { get; }

        public FakeGrammar(MethodInfo method, Fixture fixture)
        {
            Method = method;
            Fixture = fixture;
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            yield break;
        }

        protected override string format()
        {
            return "it's all good";
        }
    }
}