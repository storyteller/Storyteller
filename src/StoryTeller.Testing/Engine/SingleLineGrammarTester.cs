using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class SingleLineGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            Step step = new Step().With("arg1:a,arg2:b,returnValue:a = b");
            grammar = new SampleGrammar();
            grammar.Execute(step);
        }

        #endregion

        private SampleGrammar grammar;

        [Test, ExpectedException(ExpectedMessage = "There is no suitable public method for this Grammar")]
        public void creating_a_single_line_grammar_without_a_suitable_method_will_throw_exception()
        {
            new InvalidSingleLineGrammar();
        }

        [Test]
        public void execute_before_then_the_inner_grammar_then_the_after()
        {
            grammar.ExecutionSteps.ToArray().ShouldEqual(new[] {"Before", "Execute", "After"});
        }

        [Test]
        public void gets_the_inner_cells()
        {
            grammar.GetCells().Count.ShouldEqual(3);
        }
    }

    public class SampleGrammar : SingleLineGrammar
    {
        public List<string> ExecutionSteps = new List<string>();

        protected override void afterExecute()
        {
            ExecutionSteps.Add("After");
        }

        protected override void beforeExecute()
        {
            ExecutionSteps.Add("Before");
        }

        public string Go(string arg1, string arg2)
        {
            ExecutionSteps.Add("Execute");
            return arg1 + "=" + arg2;
        }
    }

    public class InvalidSingleLineGrammar : SingleLineGrammar
    {
    }
}