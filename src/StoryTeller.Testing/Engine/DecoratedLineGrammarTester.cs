using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class DecoratedLineGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            stepHistory.Clear();

            var simple = new ActionGrammar("Inner", () => stepHistory.Add("INNER"));
            grammar = new DecoratedLineGrammar(simple)
            {
                Before = (s, c) => stepHistory.Add("Before"),
                After = (s, c) => stepHistory.Add("After"),
                Prefix = "Pre ",
                Suffix = " Post"
            };
        }

        #endregion

        private readonly List<string> stepHistory = new List<string>();
        private DecoratedLineGrammar grammar;

        [Test]
        public void executing_the_grammar_runs_the_before_then_the_inner_grammar_then_the_after()
        {
            grammar.Execute(new Step());

            stepHistory.Count.ShouldEqual(3);
            stepHistory[0].ShouldEqual("Before");
            stepHistory[1].ShouldEqual("INNER");
            stepHistory[2].ShouldEqual("After");
        }

        [Test]
        public void the_template_should_contain_the_prefix_and_suffix_and_the_inner_template()
        {
            grammar.Template.ShouldEqual("Pre Inner Post");
        }
    }
}