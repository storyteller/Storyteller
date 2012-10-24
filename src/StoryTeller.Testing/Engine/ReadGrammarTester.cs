using System;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class ReadGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            whatWasRead = 0;
            grammar = new ReadGrammar<int>("var", x => whatWasRead = x);
        }

        #endregion

        private int whatWasRead;
        private ReadGrammar<int> grammar;

        [Test]
        public void execute_happy_path()
        {
            Step step = new Step("some grammar").With("var", "13");
            grammar.Execute(step).ShouldEqual(0, 0, 0, 0);

            whatWasRead.ShouldEqual(13);
        }

        [Test]
        public void execute_sad_path_syntax_failure()
        {
            Step step = new Step("some grammar").With("var", "aa");
            grammar.Execute(step).ShouldEqual(0, 0, 0, 1);
        }

        [Test]
        public void execute_with_exceptions()
        {
            grammar = new ReadGrammar<int>("var", x => { throw new NotImplementedException(); });

            Step step = new Step("some grammar").With("var", "1");
            grammar.Execute(step).ShouldEqual(0, 0, 1, 0);
        }
    }
}