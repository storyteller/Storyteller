using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class ServiceAssertionGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void create_a_grammar_structure()
        {
            var grammar = new TestServiceAssertionGrammar();
            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();
            sentence.ShouldEqual(Sentence.For("The Color should be {Color}", Cell.For<string>("Color")));
        }

        [Test]
        public void execute_records_the_actual()
        {
            var context = new TestContext();
            var target = new ServiceTarget
            {
                Color = "Red"
            };

            context.Store(target);

            var step = new Step();

            var grammar = new TestServiceAssertionGrammar();
            grammar.Execute(step, context);
            context.Counts.SyntaxErrors.ShouldEqual(1);
            context.ResultsFor(step).GetActual("Color").ShouldEqual("Red");
        }

        [Test]
        public void GetCells()
        {
            IList<Cell> cells = new TestServiceAssertionGrammar().GetCells();
            cells.Count.ShouldEqual(1);
            cells[0].ShouldEqual(new Cell("Color", typeof(string)));
            cells[0].IsResult.ShouldBeTrue();
        }
    }


    public class TestServiceAssertionGrammar : ServiceAssertionGrammar<ServiceTarget, string>
    {
        public TestServiceAssertionGrammar()
            : base("Color", "The Color should be {Color}")
        {
        }

        protected override object getActualValue(ServiceTarget service)
        {
            return service.Color;
        }
    }

    public class ServiceTarget
    {
        public string Color { get; set; }
    }
}