using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class DoGrammarTester
    {
        [Test]
        public void calls_the_action_upon_execute()
        {
            var address = new Address();
            var grammar = new DoGrammar((s, c) => c.CurrentObject = address);

            var context = new TestContext();
            grammar.Execute(new Step(), context);

            context.CurrentObject.ShouldBeTheSameAs(address);
        }

        [Test]
        public void creates_a_dogrammar_structure()
        {
            var grammar = new DoGrammar((s, c) => { });
            grammar.ToStructure(null).ShouldBeOfType<DoGrammarStructure>();
        }
    }
}