using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using Is = Rhino.Mocks.Constraints.Is;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class TableGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            step = new Step();

            step.LeafFor("record")
                .WithStep("a:1,b:2")
                .WithStep("a:3,b:4")
                .WithStep("a:5,b:6");

            inner = MockRepository.GenerateMock<LineGrammar>();
            grammar = new TableGrammar(inner, "record");

            grammar.LabelName = "some label";
        }

        #endregion

        private Step step;
        private TableGrammar grammar;
        private LineGrammar inner;


        [Test]
        public void create_the_Table()
        {
            var cells = new List<Cell>
            {
                new Cell("a", typeof (string)),
                new Cell("b", typeof (int)),
                Cell.For<Address>("address")
            };
            inner.Stub(x => x.GetCells()).Return(cells);


            var table = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Table>();

            var expected = new Table(grammar.LabelName, "record",
                                     new[] {new Cell("a", typeof (string)), new Cell("b", typeof (int)), new Cell("address", typeof(string))});
            table.ShouldEqual(expected);
        }

        [Test]
        public void executing_the_table_grammar_will_execute_the_inner_grammar_for_each_child_row()
        {
            grammar.Execute(step);

            step.LeafFor("record").AllSteps().Each(childStep =>
            {
                inner.AssertWasCalled(x => x.Execute(childStep, null),
                                      x => { x.Constraints(Is.Same(childStep), Is.Anything()); });
            });
        }

    }


    [TestFixture]
    public class before_and_after_tester_for_table
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            step = new Step();
            StepLeaf leaf = step.LeafFor("record");

            leaf.Add(new Step().With("a:1,b:2"));
            leaf.Add(new Step().With("a:3,b:4"));
            leaf.Add(new Step().With("a:5,b:6"));

            inner = new RecordingGrammar();
            grammar = new TableGrammar(inner.As<IGrammarWithCells>(), "record")
                .Before(() => inner.Numbers.Add("0"))
                .After(() => inner.Numbers.Add("7"));

            grammar.LabelName = "some label";

            grammar.Execute(step);
        }

        #endregion

        private Step step;
        private RecordingGrammar inner;
        private TableGrammar grammar;

        [Test]
        public void all_the_steps_should_be_called()
        {
            inner.Numbers.ShouldHaveTheSameElementsAs((IEnumerable<string>) new[] {"0", "1", "3", "5", "7"});
        }

        [Test]
        public void should_have_called_the_after_action_after_all_the_steps()
        {
            inner.Numbers.Last().ShouldEqual("7");
        }

        [Test]
        public void should_have_called_the_before_the_steps()
        {
            inner.Numbers[0].ShouldEqual("0");
        }
    }

    public class RecordingGrammar : IGrammarWithCells
    {
        public List<string> Numbers = new List<string>();

        #region IGrammarWithCells Members

        public string Description { get { throw new NotImplementedException(); } }

        public void Execute(IStep containerStep, ITestContext context)
        {
            Numbers.Add(containerStep.Get("a"));
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            throw new NotImplementedException();
        }

        public IList<Cell> GetCells()
        {
            return new List<Cell>();
        }

        public void ExecuteCurriedStep(IStep step, ITestContext context)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}