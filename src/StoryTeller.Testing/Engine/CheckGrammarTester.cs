using System;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class CheckGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            step = new Step("grammar").With("value", "4");
            grammar = new CheckGrammar<int>("value", () => 4);
        }

        #endregion

        private Step step;
        private CheckGrammar<int> grammar;

        [Test]
        public void happy_path_execute_with_matching_values()
        {
            grammar.Execute(step).ShouldEqual(1, 0, 0, 0);
        }

        [Test]
        public void sad_path_with_exception()
        {
            grammar = new CheckGrammar<int>("value", () => { throw new NotImplementedException(); });

            StepExecutionResult results = grammar.Execute(step);
            results.Counts.ShouldEqual(0, 0, 1, 0);
            results.Results.HasErrors().ShouldBeTrue();
        }

        [Test]
        public void sad_path_with_incorrect_data()
        {
            step.Values["value"] = "5";

            grammar.Execute(step).ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void sad_path_with_syntax_error()
        {
            step.Values["value"] = "abc";
            grammar.Execute(step).ShouldEqual(0, 0, 0, 1);
        }
    }
}