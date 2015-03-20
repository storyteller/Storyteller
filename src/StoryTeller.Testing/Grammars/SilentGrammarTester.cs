using System;
using FubuTestingSupport;
using NUnit.Framework;
using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars
{
    [TestFixture]
    public class SilentGrammarTester
    {
        [Test]
        public void compile_just_returns_the_silent_flyweight()
        {
            new SilentGrammar(1, c => { }).Compile(new Fixture(), CellHandling.Basic())
                .ShouldBeTheSameAs(Silent.Flyweight);
        }

        [Test]
        public void create_plan()
        {
            Action<ISpecContext> action = c => { };
            var grammar = new SilentGrammar(2, action);
            var step = new Step("foo");

            var plan = grammar.CreatePlan(step, new FixtureLibrary()).ShouldBeOfType<SilentAction>();

            plan.Position.ShouldEqual(2);
            plan.Action.ShouldBeTheSameAs(action);
            plan.Node.ShouldBeTheSameAs(step);
        }
    }
}