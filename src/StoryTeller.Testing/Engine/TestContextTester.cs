using System;
using System.Collections.Generic;
using System.Diagnostics;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Samples;
using StoryTeller.Samples.Grammars;
using StructureMap;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    public class StubTestPart : ITestPart
    {
        public void AcceptVisitor(ITestVisitor visitor)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ITestPart> Children
        {
            get { throw new NotImplementedException(); }
        }

        public int StepCount()
        {
            throw new NotImplementedException();
        }
    }

    [TestFixture]
    public class when_TestContext_is_building_a_fixture
    {
        [Test]
        public void should_store_itself_on_the_fixture_as_the_test_context()
        {
            var context = new TestContext();
            var fixture = context.RetrieveFixture<SentenceFixture>();
            fixture.ShouldBeOfType<SentenceFixture>().Context.ShouldBeTheSameAs(context);
            
        }
    }

    [TestFixture]
    public class TestContextTester
    {
        [Test]
        public void can_retrieve_its_own_test()
        {
            var execution = new SimpleExecutionContext();
            var test = new Test("soemthing");
            var context = new TestContext(execution, test, new ConsoleListener());


            context.Retrieve(typeof (Test)).ShouldBeTheSameAs(test);
            context.Retrieve<Test>().ShouldBeTheSameAs(test);
        }

        [Test]
        public void can_retrieve_its_own_execution_context()
        {
            var execution = new SimpleExecutionContext();
            var context = new TestContext(execution, new Test("soemthing"), new ConsoleListener());

            context.Retrieve<IExecutionContext>().ShouldBeTheSameAs(execution);
            context.Retrieve(typeof (IExecutionContext)).ShouldBeTheSameAs(execution);
        }


        [Test]
        public void get_string_for_null()
        {
            var context = new TestContext();
            context.GetDisplay(null).ShouldEqual(Step.NULL);
        }

        [Test]
        public void retrieving_ITestContext_always_returns_itself()
        {
            var context = new TestContext();
            context.Retrieve<ITestContext>().ShouldBeTheSameAs(context);
        }

        [Test]
        public void get_string_for_DbNull()
        {
            var context = new TestContext();
            context.GetDisplay(DBNull.Value).ShouldEqual(Step.NULL);
        }

        [Test]
        public void get_string_for_empty_string()
        {
            var context = new TestContext();
            context.GetDisplay(string.Empty).ShouldEqual(Step.BLANK);
        }

        [Test]
        public void call_fixture_setup_when_loading_a_fixture()
        {
            var fixture = MockRepository.GenerateMock<IFixture>();
            var context = new TestContext();
            context.LoadFixture(fixture, new StubTestPart());

            
            fixture.AssertWasCalled(x => x.SetUp(context));
        }

        [Test]
        public void sets_the_context_on_the_fixture_when_loading_a_fixture()
        {
            var fixture = MockRepository.GenerateMock<IFixture>();
            var context = new TestContext();
            context.LoadFixture(fixture, new StubTestPart());


            fixture.AssertWasCalled(x => x.Context = context);
        }

        [Test]
        public void calls_listener_end_section()
        {
            var context = new TestContext();

            var listener = MockRepository.GenerateMock<ITestObserver>();

            listener.Expect(x => x.CanContinue(null)).Return(true).IgnoreArguments().Repeat.Any();

            context.Listener = listener;


            var section = new Section("Math");
            context.CallOn<ITestVisitor>(x => x.StartSection(section));
            context.CallOn<ITestVisitor>(x => x.EndSection(section));

            listener.AssertWasCalled(x => x.FinishSection(section));
        }

        [Test]
        public void calls_listener_start_section()
        {
            var context = new TestContext();
            var listener = MockRepository.GenerateMock<ITestObserver>();
            context.Listener = listener;

            listener.Expect(x => x.CanContinue(null)).Return(true).IgnoreArguments().Repeat.Any();

            var section = new Section("Math");
            context.CallOn<ITestVisitor>(x => x.StartSection(section));

            listener.AssertWasCalled(x => x.StartSection(section));
        }

        [Test]
        public void catch_all_exception_on_grammar_adds_exception_count_and_exception_text()
        {
            var step = new Step("the step");
            var context = new TestContext();
            IGrammar grammar = context.SetupMockGrammar(step.GrammarKey);

            grammar.Expect(x => x.Execute(step, context))
                .Throw(new NotImplementedException());

            context.RunStep(step);

            context.Counts.ShouldEqual(0, 0, 1, 0);

            context.ResultsFor(step).ExceptionText.ShouldContain("NotImplementedException");
        }


        [Test]
        public void catch_the_storyteller_exception_on_grammar_adds_exception_count_and_exception_message_only()
        {
            var step = new Step("the step");

            var grammar = new GrammarThatAssertsFailure();
            var fixture = MockRepository.GenerateMock<IFixture>();
            fixture.Stub(x => x[step.GrammarKey]).Return(grammar);

            var context = new TestContext();
            context.LoadFixture(fixture, new StubTestPart());

            context.RunStep(step);

            context.Counts.ShouldEqual(0, 0, 1, 0);

            context.ResultsFor(step).ExceptionText.ShouldEqual("I don't want to run");
        }


        [Test]
        public void context_should_tell_a_fixture_that_it_is_finished_at_the_end()
        {
            var fixture1 = MockRepository.GenerateMock<IFixture>();
            var fixture2 = MockRepository.GenerateMock<IFixture>();

            var context = new TestContext();
            context.LoadFixture(fixture1, new StubTestPart());
            fixture1.AssertWasNotCalled(x => x.TearDown());

            context.LoadFixture(fixture2, new StubTestPart());
            fixture1.AssertWasNotCalled(x => x.TearDown());
            fixture2.AssertWasNotCalled(x => x.TearDown());


            context.RevertFixture(new StubTestPart());
            fixture1.AssertWasNotCalled(x => x.TearDown());
            fixture2.AssertWasCalled(x => x.TearDown());

            context.RevertFixture(new StubTestPart());
            fixture1.AssertWasCalled(x => x.TearDown());
        }

        [Test]
        public void ending_a_section_should_tell_the_previous_fixture_to_finish()
        {
            var fixture1 = MockRepository.GenerateMock<IFixture>();
            var context = new TestContext();
            context.LoadFixture(fixture1, new StubTestPart());

            ((ITestVisitor)context).EndSection(new Section("something"));

            fixture1.AssertWasCalled(x => x.TearDown());
        }


        [Test]
        public void increment_exceptions()
        {
            var test = new Test("some test");
            var context = new TestContext(new SimpleExecutionContext(), test, new ConsoleListener());

            context.IncrementExceptions();

            context.Counts.ShouldEqual(0, 0, 1, 0);
        }

        [Test]
        public void increment_rights()
        {
            var test = new Test("some test");
            var context = new TestContext(new SimpleExecutionContext(), test, new ConsoleListener());

            context.IncrementRights();

            context.Counts.ShouldEqual(1, 0, 0, 0);
        }


        [Test]
        public void increment_syntax_errors()
        {
            var test = new Test("some test");
            var context = new TestContext(new SimpleExecutionContext(), test, new ConsoleListener());

            context.IncrementSyntaxErrors();

            context.Counts.ShouldEqual(0, 0, 0, 1);
        }

        [Test]
        public void increment_wrongs()
        {
            var test = new Test("some test");
            var context = new TestContext(new SimpleExecutionContext(), test, new ConsoleListener());

            context.IncrementWrongs();

            context.Counts.ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void load_and_revert_fixtures()
        {
            var context = new TestContext();

            context.LoadFixture<ArithmeticFixture>(new StubTestPart());
            context.CurrentFixture.ShouldBeOfType<ArithmeticFixture>();

            context.LoadFixture<SomethingFixture>(new StubTestPart());
            context.CurrentFixture.ShouldBeOfType<SomethingFixture>();

            context.RevertFixture(new StubTestPart());

            context.CurrentFixture.ShouldBeOfType<ArithmeticFixture>();
        }


        [Test]
        public void load_fixture_directly_and_find_object_off_of_it()
        {
            var context = new TestContext();

            context.LoadFixture(new SomethingElseFixture(), new StubTestPart());

            context.FindGrammar("Go").ShouldBeOfType<ValueCheckMethod>();
        }

        [Test]
        public void log_exception_from_section_setup()
        {
            var fixture = MockRepository.GenerateMock<IFixture>();
            var context = new TestContext();

            var exception = new NotImplementedException();
            fixture.Expect(x => x.SetUp(context)).Throw(exception);

            var step = new Step();
            context.LoadFixture(fixture, step);

            context.Counts.Exceptions.ShouldEqual(1);
            context.ResultsFor(step).ExceptionText.ShouldContain(exception.ToString());
        }

        [Test, ExpectedException(typeof(ArgumentNullException))]
        public void revert_fixture_should_throw_an_exception_if_log_action_is_null()
        {
            new TestContext().RevertFixture(null);
        }

        [Test]
        public void reverting_a_fixture_with_an_exception_in_teardown_increments_exceptions_and_captures_the_exception()
        {
            var fixture = MockRepository.GenerateMock<IFixture>();
            var exception = new NotImplementedException();
            fixture.Expect(x => x.TearDown()).Throw(exception);

            var context = new TestContext();
            var section = new Section("something");

            context.LoadFixture(fixture, section);
            context.RevertFixture(section);

            context.ResultsFor(section).ExceptionText.ShouldEqual(exception.ToString());

            context.Counts.Exceptions.ShouldEqual(1);
        }

        [Test]
        public void run_a_step()
        {
            var step = new Step("the step");

            var context = new TestContext();
            IGrammar grammar = context.SetupMockGrammar(step.GrammarKey);

            context.RunStep(step);

            grammar.AssertWasCalled(x => x.Execute(step, context));
        }

        [Test]
        public void running_a_step_logs_the_start_and_end_of_the_grammar()
        {
            var step = new Step("the step");

            var listener = MockRepository.GenerateMock<ITestObserver>();
            listener.Expect(x => x.CanContinue(null)).Return(true).IgnoreArguments().Repeat.Any();


            var context = new TestContext(new SimpleExecutionContext(),new Test("Fake"), listener);
            IGrammar grammar = context.SetupMockGrammar(step.GrammarKey);

            context.RunStep(step);

            listener.AssertWasCalled(x => x.StartStep(step));
            listener.AssertWasCalled(x => x.FinishStep(step));
        }

        [Test]
        public void stop_test_if_the_test_observer_trips_off_the_cannot_continue_condition()
        {
            Test test = new Test("something").With(Section.For<SomethingFixture>()
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                                                       .WithStep("DoSomething")
                );

            var observer = new MockTestObserver
            {
                StepsAllowed = 3
            };
            var context = new TestContext(new SimpleExecutionContext(), test, observer);
            context.Execute();

            observer.StepsRun.ShouldEqual(3);
            observer.StepsRun = 0;

            observer.StepsAllowed = 2;

            context.Execute();
            observer.StepsRun.ShouldEqual(2);

            observer.StepsRun = 0;
            observer.StepsAllowed = 200;

            context.Execute();
            observer.StepsRun.ShouldEqual(10);
        }


        [Test]
        public void store_and_retrieve()
        {
            var context = new TestContext();
            var data = new SomeContext();

            context.Store(data);

            context.Retrieve<SomeContext>().ShouldBeTheSameAs(data);
        }

        [Test]
        public void store_and_retrieve_backs_up_by_the_system()
        {
            var returnValue = new SomethingThatDoesNotExist();

            var execution = new SimpleExecutionContext();
            execution.Services.Add<ISomethingThatDoesNotExist>(returnValue);
            var context = new TestContext(execution, new Test("a"), new ConsoleListener());

            context.Retrieve(typeof (ISomethingThatDoesNotExist)).ShouldBeTheSameAs(returnValue);
            context.Retrieve<ISomethingThatDoesNotExist>().ShouldBeTheSameAs(returnValue);
        }

        [Test, ExpectedException(typeof(ArgumentNullException))]
        public void throw_argument_not_null_exception_when_the_log_action_is_null()
        {
            var fixture = MockRepository.GenerateMock<IFixture>();
            var context = new TestContext();
            context.LoadFixture(fixture, null);
        }
    }

    public interface ISomethingThatDoesNotExist{}
    public class SomethingThatDoesNotExist : ISomethingThatDoesNotExist {}

    [TestFixture, Explicit]
    public class when_visiting_fixtures
    {
        [Test]
        public void capture_trace_and_debug_messages_to_the_Test_object()
        {
            var test = new TracedTest();
            test.ConsoleMessage("console1");
            test.DebugMessage("debug1");
            test.ConsoleMessage("console2");
            test.DebugMessage("debug2");


            var context = new TestContext(new SimpleExecutionContext(), test, new ConsoleListener());
            context.Execute();

            context.TraceText.ShouldContain("console1");
            context.TraceText.ShouldContain("console2");
            context.TraceText.ShouldContain("debug1");
            context.TraceText.ShouldContain("debug2");
        }

    }

    public class TracedTest : Test
    {
        public TracedTest()
            : base("whatever")
        {
        }

        public void ConsoleMessage(string trace)
        {
            var part = new ConsoleTracePart(trace);
            _parts.Add(part);
        }

        public void DebugMessage(string trace)
        {
            var part = new DebugTracePart(trace);
            _parts.Add(part);
        }
    }


    public class FixtureThatBlowsUpFixture : Fixture
    {
        public static Exception Exception = new NotImplementedException();

        public FixtureThatBlowsUpFixture()
        {
            throw Exception;
        }
    }


    public class MockTestObserver : ITestObserver
    {
        public int StepsAllowed { get; set; }
        public int StepsRun { get; set; }

        #region ITestObserver Members

        public void StartTest(Test test, Counts counts)
        {
            StepsRun = 0;
        }

        public void StartSection(Section section)
        {
        }

        public void FinishSection(Section section)
        {
        }

        public void StartStep(IStep step)
        {
        }

        public void FinishStep(IStep step)
        {
            StepsRun++;
        }

        public void FinishTest(Test test)
        {
        }

        public void Exception(string exceptionString)
        {
        }

        public bool CanContinue(Counts counts)
        {
            return StepsRun < StepsAllowed;
        }

        public void FinishTestRetries(Test test)
        {
            
        }

        #endregion
    }


public class SomeContext
{
}

public class SomethingFixture : Fixture
{
    public static int RunCount;

    public void DoSomething()
    {
        RunCount++;
    }
}

[AliasAs("TheSomethingElse")]
public class SomethingElseFixture : Fixture
{
    public string Go()
    {
        return string.Empty;
    }
}

public class ConsoleTracePart : ITestPart
{
    private readonly string _message;

    public ConsoleTracePart(string message)
    {
        _message = message;
    }

    #region ITestPart Members

    public virtual void AcceptVisitor(ITestVisitor visitor)
    {
        Console.WriteLine(_message);
    }

    public int StepCount()
    {
        return 0;
    }

    public IEnumerable<ITestPart> Children { get { return new ITestPart[0]; } }

    #endregion
}

public class DebugTracePart : ConsoleTracePart
{
    private readonly string _debugMessage;

    public DebugTracePart(string message)
        : base(message)
    {
        _debugMessage = message;
    }

    public override void AcceptVisitor(ITestVisitor visitor)
    {
        Debug.WriteLine(_debugMessage);
    }
}
}