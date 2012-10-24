using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class FactGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            returnsTrue = false;
            grammar = new FactGrammar(() => returnsTrue, theText);
        }

        #endregion

        private bool returnsTrue;
        private FactGrammar grammar;
        private const string theText = "the text stating this fact";

        [Test]
        public void run_when_the_fact_is_false()
        {
            returnsTrue = false;
            grammar.Execute(new Step()).ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void run_when_the_fact_is_true()
        {
            returnsTrue = true;
            grammar.Execute(new Step()).ShouldEqual(1, 0, 0, 0);
        }

        [Test]
        public void run_with_a_test_context_func()
        {
            var context = new TestContext();
            var service = new ServiceInContext(){
                Count = 2
            };
            context.Store(service);

            var fact = new FactGrammar(c => c.Retrieve<ServiceInContext>().Count == 2, "the count should be 2");

            fact.Execute(new Step(), context);
            context.Counts.ShouldEqual(1, 0, 0, 0);

            service.Count = 3;
            context.Counts.Reset();

            fact.Execute(new Step(), context);
            context.Counts.ShouldEqual(0, 1, 0, 0);
        }

        public class ServiceInContext
        {
            public int Count;
        }
    }
}