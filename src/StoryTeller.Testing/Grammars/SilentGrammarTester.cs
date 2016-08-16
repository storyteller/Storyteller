using System;
using Xunit;
using Shouldly;
using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars
{
    
    public class SilentGrammarTester
    {
        [Fact]
        public void compile_just_returns_the_silent_flyweight()
        {
            new SilentGrammar(1, c => { }).Compile(new Fixture(), CellHandling.Basic())
                .ShouldBeTheSameAs(Silent.Flyweight);
        }

        [Fact]
        public void create_plan()
        {
            Action<ISpecContext> action = c => { };
            var grammar = new SilentGrammar(2, action);
            var step = new Step("foo");

            var plan = grammar.CreatePlan(step, new FixtureLibrary()).ShouldBeOfType<SilentAction>();

            plan.Position.ShouldBe(2);
            plan.Action.ShouldBeTheSameAs(action);
            plan.Node.ShouldBeTheSameAs(step);
        }
    }
}