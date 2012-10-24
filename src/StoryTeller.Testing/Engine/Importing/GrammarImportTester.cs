using System;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Importing;
using Rhino.Mocks;
using StoryTeller.Samples;

namespace StoryTeller.Testing.Engine.Importing
{
    [TestFixture]
    public class GrammarImportTester : InteractionContext<GrammarImport>
    {
        private MathFixture fixture;

        protected override void beforeEach()
        {
            _grammar = null;
            fixture = new MathFixture();
            ClassUnderTest.FixtureName = "Math";

            MockFor<ITestContext>().Stub(x => x.RetrieveFixture(ClassUnderTest.FixtureName)).Return(fixture);
        }

        private IGrammar _grammar;
        private IGrammar theGrammarFound
        {
            get
            {
                if (_grammar == null)
                {
                    _grammar = ClassUnderTest.FindGrammar(MockFor<ITestContext>());
                }

                return _grammar;
            }
        }

        [Test]
        public void do_a_straight_import_if_there_is_no_currying()
        {
            ClassUnderTest.GrammarKey = "StartWith";

            theGrammarFound.ShouldBeTheSameAs(fixture["StartWith"]);
        }

        [Test]
        public void create_a_curried_grammar_import()
        {
            ClassUnderTest.GrammarKey = "StartWith";
            ClassUnderTest.CurryAction = new CurryAction(){
                DefaultValues = "starting:5",
                Template = "Start with 5"
            };

            CurriedLineGrammar grammar = theGrammarFound.ShouldBeOfType<CurriedLineGrammar>();
            grammar.Inner.ShouldBeTheSameAs(fixture["StartWith"]);
            grammar.Template.ShouldEqual("Start with 5");

            // Verifying that the curried grammar has the default values
            grammar.Execute(new Step());

            fixture.TheValueShouldBe().ShouldEqual(5);
        }


    }
}