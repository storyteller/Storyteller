using System;
using System.Reflection;
using FubuCore.Reflection;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Reflection;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    public class Dooer
    {
        public int Age;
        public string Name;

        public void DoSomethingWith(string name, int age)
        {
            Age = age;
            Name = name;
        }

        [FormatAs("{name} is {age}")]
        public void DoSomethingWith2(string name, int age)
        {
            Age = age;
            Name = name;
        }

        public void MethodThatThrowsException()
        {
            throw new NotImplementedException();
        }

        public void MethodThatDoesNothing()
        {
        }
    }

    [TestFixture]
    public class ReflectionActionTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            _testContext = new TestContext();
        }

        #endregion

        private Counts theCounts { get { return _testContext.Counts; } }

        private TestContext _testContext;

        [Test]
        public void creates_grammar_structure()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.DoSomethingWith2(null, 34), dooer);
            MethodInfo method = ReflectionHelper.GetMethod<Dooer>(x => x.DoSomethingWith2(null, 34));


            var sentence = action.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();
            sentence.ShouldEqual(Sentence.For(method.GetTemplate(), Cell.For<string>("name"), Cell.For<int>("age")));
        }

        [Test]
        public void execute_the_void_action_and_missing_an_argument()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.DoSomethingWith(null, 34), dooer);

            var step = new Step("something", x => { x.Set("name", "Josh"); });

            action.Execute(step, _testContext);

            _testContext.ResultsFor(step).ExceptionText.Contains("\"age\" is not defined.");
            theCounts.SyntaxErrors.ShouldEqual(1);
        }

        [Test]
        public void execute_the_void_action_that_would_catch_an_exception()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.MethodThatThrowsException(), dooer);

            var step = new Step();
            var results = action.Execute(step);

            results.Results.ExceptionText.ShouldContain("NotImplementedException");
            results.Counts.ShouldEqual(0, 0, 1, 0);
        }

        [Test]
        public void execute_the_void_action_with_a_parse_error()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.DoSomethingWith(null, 34), dooer);

            var step = new Step("something", x =>
            {
                x.Set("name", "Josh");
                x.Set("age", "not a number");
            });

            action.Execute(step, _testContext);
            var results = _testContext.ResultsFor(step);

            results.ExceptionText.Contains("System.FormatException : Input string was not in a correct format");
            results.ExceptionText.Contains("\"age\" is malformed or invalid");
        }

        [Test]
        public void execute_the_void_action_with_all_the_arguments()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.DoSomethingWith(null, 34), dooer);

            var step = new Step("something", x =>
            {
                x.Set("name", "Josh");
                x.Set("age", "32");
            });

            action.Execute(step, _testContext);

            dooer.Age.ShouldEqual(32);
            dooer.Name.ShouldEqual("Josh");
        }

        [Test]
        public void executing_with_an_exception_in_the_target_method_increments_the_exception_count()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.MethodThatThrowsException(), dooer);
            var step = new Step("a");

            action.Execute(step, _testContext);

            theCounts.Exceptions.ShouldEqual(1);
        }

        [Test]
        public void get_template_for_the_method_if_attribute_is_found()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.DoSomethingWith2(null, 34), dooer);

            action.Template.ShouldEqual("{name} is {age}");
        }

        [Test]
        public void get_template_for_the_method_if_no_attribute_is_found()
        {
            var dooer = new Dooer();
            ActionMethodGrammar action = ActionMethodGrammar.Create(x => x.DoSomethingWith(null, 34), dooer);

            action.Template.ShouldEqual("DoSomethingWith {name}, {age}");
        }
    }
}