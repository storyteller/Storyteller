using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Model
{
    [TestFixture]
    public class ErrorGrammarTester
    {
        [Test]
        public void create_an_error_grammar_adds_error_to_itself()
        {
            var grammar = new ErrorGrammar("Bad!");

            grammar.errors.Single().error.ShouldEqual("Bad!");
        }

        [Test]
        public void create_plan_just_returns_itself()
        {
            var grammar = new ErrorGrammar("Bad!");
            grammar.As<IGrammar>().CreatePlan(null)
                .ShouldBeTheSameAs(grammar);
        }

        [Test]
        public void compile_just_returns_itself()
        {
            var grammar = new ErrorGrammar("Bad!");
            grammar.As<IGrammar>().Compile(null)
                .ShouldBeTheSameAs(grammar);
        }

        [Test]
        public void execute()
        {
            var context = new SpecContext();

            var grammar = new ErrorGrammar("Bad!");
            grammar.key = "foo";
            grammar.As<IExecutionPlan>().Execute(context);

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.status.ShouldEqual(ResultStatus.error);
            result.error.ShouldContain("Grammar 'foo' had an error:");
            result.error.ShouldContain("Bad!");
        }
    }
}