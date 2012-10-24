using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Importing;
using Rhino.Mocks;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Importing

{
    [TestFixture]
    public class ProxyGrammarTester : InteractionContext<ProxyGrammar>
    {
        [Test]
        public void description_should_delegate()
        {
            var theDescription = "some description";
            MockFor<IGrammar>().Expect(x => x.Description).Return(theDescription);

            ClassUnderTest.Description.ShouldEqual(theDescription);
        }

        [Test]
        public void execute_should_delegate()
        {
            var theStep = new Step();
            var theContext = new TestContext();
            ClassUnderTest.Execute(theStep, theContext);

            MockFor<IGrammar>().AssertWasCalled(x => x.Execute(theStep, theContext));
        }

        [Test]
        public void to_structure_delegates_to_the_inner_grammar()
        {
            var library = new FixtureLibrary();
            var sentence = new Sentence();
            MockFor<IGrammar>().Expect(x => x.ToStructure(library)).Return(sentence);

            ClassUnderTest.ToStructure(library).ShouldBeTheSameAs(sentence);
        }
    }
}