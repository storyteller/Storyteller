using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Assertions;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class when_accepting_grammar_visitor
    {
        [Test]
        public void call_the_correct_method()
        {
            var visitor = MockRepository.GenerateMock<IGrammarVisitor>();
            var step = new Step("grammar");

            var table = new Table();

            table.AcceptVisitor(visitor, step);

            visitor.AssertWasCalled(x => x.Table(table, step));
        }
    }






    [TestFixture]
    public class when_creating_an_example
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            table = new Table("The Label", "rows", new List<Cell>
            {
                Cell.For<string>("name"),
                Cell.For<int>("age")
            });

            step = table.CreateExample();
        }

        #endregion

        private IStep step;
        private Table table;

        [Test]
        public void should_have_an_attribute_for_each_column()
        {
            IStep child = step.LeafFor(table.LeafName).AllSteps()[0];
            child.Values.Count.ShouldEqual(2);
            child.Has("name").ShouldBeTrue();
            child.Has("age").ShouldBeTrue();
        }

        [Test]
        public void should_have_the_child_step()
        {
            step.LeafFor(table.LeafName).AllSteps().Count.ShouldBeGreaterThan(0);
        }
    }


    [TestFixture]
    public class when_determining_the_inputs_for_display
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            cells = new[]
            {
                Cell.For<int>("a"),
                Cell.For<int>("b"),
                Cell.For<int>("c"),
                Cell.For<int>("d"),
                Cell.For<int>("e"),
            };

            cells[3].DefaultValue = "5";
            cells[4].DefaultValue = "6";


            steps = new List<IStep>
            {
                new Step().With("a:1,b:2,c:3,d:4,e:5"),
                new Step().With("a:2,b:3,c:4,d:6,e:6"),
                new Step().With("a:3,b:4,c:5,d:6,e:7"),
                new Step().With("a:4,b:5,c:6,d:7,e:8"),
            };

            table = new Table("something", "Leaf", cells);
        }

        #endregion

        private Cell[] cells;
        private List<IStep> steps;
        private Table table;

        private StepLeaf toLeaf(string props)
        {
            var leaf = new StepLeaf();
            Step child = new Step().With(props);
            leaf.Add(child);

            return leaf;
        }

        [Test]
        public void get_hidden_display_1()
        {
            StepLeaf leaf = toLeaf("a:1,b:2,c:3");
            table.HiddenInputs(leaf).ShouldEqual(new[] { "d", "e" });
        }

        [Test]
        public void get_hidden_display_2()
        {
            StepLeaf leaf = toLeaf("a:1,b:2,c:3,d:4");
            table.HiddenInputs(leaf).ShouldEqual(new[] { "e" });
        }

        [Test]
        public void get_inputs_for_display_when_no_optional_atts_are_used()
        {
            StepLeaf leaf = toLeaf("a:1,b:2,c:3");
            IEnumerable<TextInput> inputs = table.InputsToDisplay(leaf);

            inputs.Select(x => x.Cell.Key).ToArray().ShouldEqual(new[] { "a", "b", "c" });
        }

        [Test]
        public void get_inputs_for_display_with_some_of_the_optional_atts_used()
        {
            StepLeaf leaf = toLeaf("a:1,b:2,c:3,d:4");
            IEnumerable<TextInput> inputs = table.InputsToDisplay(leaf);

            inputs.Select(x => x.Cell.Key).ToArray().ShouldEqual(new[] { "a", "b", "c", "d" });
        }

        [Test]
        public void mandatory_cells_should_always_be_shown_even_if_a_value_is_missing_in_step()
        {
            StepLeaf leaf = toLeaf("a:1");
            IEnumerable<TextInput> inputs = table.InputsToDisplay(leaf);

            inputs.Select(x => x.Cell.Key).ToArray().ShouldEqual(new[] { "a", "b", "c" });
        }
    }

    [TestFixture]
    public class when_setting_the_default_value_for_a_key
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            leaf = new StepLeaf();
            leaf.AddNewStep();
            leaf.AddNewStep();
            leaf.AddNewStep();
            leaf.AddNewStep();

            Cell b = Cell.For<int>("b");
            b.DefaultValue = "2";
            Cell a = Cell.For<int>("a");
            a.DefaultValue = "3";

            table = new Table("some label", "row", a, b);

            table.SetDefaultValueFor("b", leaf);
        }

        #endregion

        private StepLeaf leaf;
        private Table table;

        [Test]
        public void the_attribute_for_each_step_in_the_leaf_should_be_the_default_value_of_that_cell()
        {
            leaf.AllSteps()[0].Get("b").ShouldEqual("2");
            leaf.AllSteps()[1].Get("b").ShouldEqual("2");
            leaf.AllSteps()[2].Get("b").ShouldEqual("2");
            leaf.AllSteps()[3].Get("b").ShouldEqual("2");
        }
    }
}