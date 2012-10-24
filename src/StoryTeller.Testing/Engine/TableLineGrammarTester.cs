using System.Collections.Generic;
using System.Linq;
using FubuCore.Util;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class when_building_and_executing_a_TableLineGrammar
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            target = new BeforeAndAfterTarget();
            grammar = new TableLineGrammar(target);

            step = new Step().With("FirstName:Jeremy,LastName:Miller,Age:23,State:TX");

            StepExecutionResult execute = grammar.Execute(step);
            results = execute.Results;
            counts = execute.Counts;
        }

        #endregion

        private BeforeAndAfterTarget target;
        private TableLineGrammar grammar;
        private Step step;
        private Counts counts;
        private IStepResults results;

        [Test]
        public void should_have_called_the_after_method_on_the_target_after_setting_values()
        {
            target.AfterWasCalled.ShouldBeTrue();
        }

        [Test]
        public void should_have_called_the_before_method_on_the_target_before_setting_any_other_values()
        {
            target.BeforeWasCalled.ShouldBeTrue();
        }

        [Test]
        public void should_have_cells_for_the_inputs_and_outputs()
        {
            IList<Cell> cells = grammar.GetCells();
            cells.ShouldHaveTheSameElementsAs(Cell.For<string>("FirstName"), Cell.For<int>("Age"),
                                              Cell.For<string>("LastName"), Cell.For<string>("State"));

            cells[0].IsResult.ShouldBeFalse();
            cells[1].IsResult.ShouldBeTrue();
            cells[2].IsResult.ShouldBeFalse();
            cells[3].IsResult.ShouldBeTrue();
        }

        [Test]
        public void should_have_recorded_actual_values_on_the_step()
        {
            results.GetActual("Age").ShouldEqual(target.Age);
            results.GetActual("State").ShouldEqual(target.State);
        }

        [Test]
        public void should_have_recorded_one_right_and_one_wrong()
        {
            counts.ShouldEqual(1, 1, 0, 0);
        }

        [Test]
        public void should_have_set_the_setter_values_on_the_target_object()
        {
            target.Values["FirstName"].ShouldEqual("Jeremy");
            target.Values["LastName"].ShouldEqual("Miller");
        }

        [Test]
        public void should_respect_the_default_value()
        {
            grammar.GetCells().First(x => x.Key == "Age").DefaultValue.ShouldEqual(45);
        }
    }


    public class BeforeAndAfterTarget : IBeforeAndAfter
    {
        public bool AfterWasCalled;
        public bool BeforeWasCalled;
        public Cache<string, object> Values = new Cache<string, object>();

        public string FirstName { set { Values["FirstName"] = value; } }

        [Default("45")]
        public int Age { get { return 35; } }

        public string LastName { set { Values["LastName"] = value; } }

        public string State { get { return "TX"; } }

        #region IBeforeAndAfter Members

        public void BeforeLine()
        {
            Values.Count.ShouldEqual(0);
            BeforeWasCalled = true;
        }

        public void AfterLine()
        {
            Values.Count.ShouldEqual(2);
            AfterWasCalled = true;
        }

        #endregion
    }
}