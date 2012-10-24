using System.Collections.Generic;
using FubuCore.Conversion;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Testing;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class ActionGrammarTester
    {
        [Test]
        public void builds_sentence()
        {
            var grammar = new TestActionGrammar();
            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();
            sentence.ShouldEqual(new Sentence("Increment by {number}", new[] {Cell.For<int>("number")}));
        }

        [Test]
        public void execute_picks_up_the_correct_cell()
        {
            var grammar = new TestActionGrammar();
            Step step = new Step().With("number", "43");

            grammar.Execute(step);

            TestActionGrammar.Count.ShouldEqual(43);
        }

        [Test]
        public void GetCells()
        {
            var grammar = new TestActionGrammar();
            IList<Cell> cells = grammar.GetCells();

            cells.Count.ShouldEqual(1);

            cells[0].ShouldEqual(new Cell("number", typeof (int)));
        }
    }

    [TestFixture]
    public class ServiceActionGrammarTester
    {
        [Test]
        public void use_default_values()
        {
            var grammar = new TestServiceActionGrammar();
            grammar.DefaultValue = "5";
            grammar.GetCells()[0].DefaultValue.ShouldEqual("5");
        }

        [Test]
        public void create_a_grammar_structure()
        {
            var grammar = new TestServiceActionGrammar();
            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();
            sentence.ShouldEqual(Sentence.For("do something with {number}", new Cell("number", typeof (double))));
        }

        [Test]
        public void execute_picks_up_the_correct_cell()
        {
            var context = new TestContext();
            var service = MockRepository.GenerateMock<IService>();
            context.Store(service);

            var grammar = new TestServiceActionGrammar();
            Step step = new Step().With("number", "43.1");


            grammar.Execute(step, context);

            service.AssertWasCalled(x => x.DoSomething(43.1));
        }

        [Test]
        public void GetCells()
        {
            var grammar = new TestServiceActionGrammar();
            IList<Cell> cells = grammar.GetCells();

            cells.Count.ShouldEqual(1);

            cells[0].ShouldEqual(new Cell("number", typeof (double)));
        }

        private TestResult runStep(IStep step)
        {
            ActionsFixture.Reset();

            var test = new Test("something");
            var section = new Section("Actions");
            section.Add(step);
            test.Add(section);

            var runner = new TestRunner();
            return runner.RunTest(new TestExecutionRequest(test, new TestStopConditions()));
        }

        [Test]
        public void run_from_the_fixture_expression_with_no_inputs()
        {
            ActionsFixture.Count.ShouldEqual(0);

            var step = new Step("Increment");
            runStep(step);

            ActionsFixture.Count.ShouldEqual(1);
        }

        [Test]
        public void run_from_fixture_expression_with_an_input()
        {
            ActionsFixture.Count.ShouldEqual(0);

            var step = new Step("IncrementBy").With("count", 3);
            runStep(step);

            ActionsFixture.Count.ShouldEqual(3);

        }

        [Test]
        public void run_from_fixture_expression_with_an_input_that_uses_the_test_context()
        {
            IncrementalNumber.Count = 0;

            var step = new Step("IncrementByStored").With("count", 5);
            runStep(step);

            IncrementalNumber.Count.ShouldEqual(5);
        }


        [Test]
        public void run_from_fixture_expression_with_an_input_that_uses_the_test_context_2()
        {
            IncrementalNumber.Count = 0;

            var step = new Step("IncrementByStored2").With("count", 5);
            runStep(step);

            IncrementalNumber.Count.ShouldEqual(5);
        }
    }

    public class IncrementalNumber
    {
        public static int Count = 0;

        public void Increment(int count)
        {
            Count += count;
        }
    }

    public class ActionsFixture : Fixture
    {
        public static void Reset()
        {
            Count = 0;
        }

        public static int Count = 0;

        public ActionsFixture()
        {
            this["Increment"] = Do("increment by 1", () => Count++);
            this["IncrementBy"] = Do<int>("increment by {count}", i => Count += i);
            this["IncrementByStored"] = Do<int>("Increment service by {count}",
                                                    (i, c) => c.Retrieve<IncrementalNumber>().Increment(i));

            this["IncrementByStored2"] = Do<int, IncrementalNumber>("Increment service by {count}",
                                                                    (i, number) => number.Increment(i));
        }
    }

    public class TestActionGrammar : ActionGrammar<int>
    {
        public static ITestContext Context;
        public static int Count;

        public TestActionGrammar()
            : base("Increment by {number}", execute)
        {
        }

        protected static void execute(int value, ITestContext context)
        {
            Count += value;
            Context = context;
        }
    }

    public interface IService
    {
        void DoSomething(double value);
    }

    public class TestServiceActionGrammar : ServiceActionGrammar<IService, double>
    {
        public TestServiceActionGrammar()
            : base("number", "do something with {number}")
        {
            DefaultValue = "something";
        }

        protected override void execute(IService service, double value)
        {
            service.DoSomething(value);
        }
    }

    [TestFixture]
    public class SimpleGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            wasExecuted = false;

            grammar = new ActionGrammar("Some Text", () => wasExecuted = true);
        }

        #endregion

        private bool wasExecuted;
        private ActionGrammar grammar;

        [Test]
        public void description_does_not_blow_up()
        {
            grammar.Description.ShouldEqual("Some Text");
        }

        [Test]
        public void executing_should_call_the_inner_grammar_action()
        {
            grammar.Execute(new Step());

            wasExecuted.ShouldBeTrue();
        }

        [Test]
        public void the_text_should_be_what_was_supplied_in_the_constructor()
        {
            grammar.Template.ShouldEqual("Some Text");
        }
    }
}