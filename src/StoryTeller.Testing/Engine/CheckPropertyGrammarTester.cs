using System;
using FubuCore.Conversion;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class when_writing_a_checkpropertygrammar
    {
        [Test]
        public void create_a_grammar_structure()
        {
            CheckPropertyGrammar grammar = CheckPropertyGrammar.For<CheckPropertyTarget>(x => x.Age);
            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();

            sentence.ShouldEqual(Sentence.For("Age should be {Age}", Cell.For<int>("Age")));
        }

        [Test]
        public void create_a_grammar_structure_for_a_nullable_date()
        {
            CheckPropertyGrammar grammar = CheckPropertyGrammar.For<CheckPropertyTarget>(x => x.LastTime);
            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();

            sentence.Cells[0].IsResult.ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_checking_a_property_and_the_expected_is_missing : CheckPropertyGrammarExecuteFixture
    {
        protected override void beforeEach()
        {
            theExpectedValueIs(null);
            theActualValueIs(25);
        }

        [Test]
        public void exception_text_should_include_a_note_about_age_being_missing()
        {
            results.ExceptionText.Contains("\"Age\" is not defined.");
        }

        [Test]
        public void should_have_a_syntax_error()
        {
            theCounts.SyntaxErrors.ShouldEqual(1);
        }

        [Test]
        public void the_property_should_be_in_error()
        {
            results.IsInException("Age").ShouldBeTrue();
        }
    }


    [TestFixture]
    public class when_checking_a_property_that_throws_an_exception : CheckPropertyGrammarExecuteFixture
    {
        protected override void beforeEach()
        {
            thePropertyThrowsException();
        }

        [Test]
        public void captures_the_exception_text()
        {
            // the test harness is rigged to throw a NotImplementedException
            results.ExceptionText.Contains("NotImplementedException");
        }

        [Test]
        public void counts_should_have_incremented_an_exception()
        {
            theCounts.Exceptions.ShouldEqual(1);
        }

        [Test]
        public void the_property_is_in_error()
        {
            results.IsInException("Age").ShouldBeTrue();
        }
    }


    [TestFixture]
    public class when_checking_a_single_property_for_an_incorrect_value : CheckPropertyGrammarExecuteFixture
    {
        protected override void beforeEach()
        {
            theExpectedValueIs(30);
            theActualValueIs(33);
        }

        [Test]
        public void should_record_the_actual_value()
        {
            results.ActualDisplay("Age").ShouldEqual(33);
        }

        [Test]
        public void the_property_in_the_step_should_not_be_in_exception()
        {
            results.IsInException("Age").ShouldBeFalse();
        }

        [Test]
        public void the_wrongs_should_be_incremented()
        {
            theCounts.Rights.ShouldEqual(0);
            theCounts.Wrongs.ShouldEqual(1);
        }
    }


    [TestFixture]
    public class when_checking_a_single_property_for_a_matching_value : CheckPropertyGrammarExecuteFixture
    {
        protected override void beforeEach()
        {
            theActualValueIs(32);
            theExpectedValueIs(32);
        }

        [Test]
        public void should_record_the_actual_value()
        {
            results.ActualDisplay("Age").ShouldEqual(32);
        }

        [Test]
        public void the_property_in_the_step_should_not_be_in_exception()
        {
            results.IsInException("Age").ShouldBeFalse();
        }

        [Test]
        public void the_rights_should_be_incremented()
        {
            theCounts.Rights.ShouldEqual(1);
        }
    }


    [TestFixture]
    public class the_cell_should_be_is_result
    {
        [Test]
        public void is_result_is_true()
        {
            CheckPropertyGrammar.For<Address>(x => x.Address1).GetCell().IsResult.ShouldBeTrue();
        }
    }


    public abstract class CheckPropertyGrammarExecuteFixture
    {
        protected TestContext context;
        protected CheckPropertyGrammar grammar;
        protected Step theStep;


        protected Counts theCounts { get { return context.Counts; } }

        [SetUp]
        public void SetUp()
        {
            grammar = CheckPropertyGrammar.For<CheckPropertyTarget>(x => x.Age);
            theStep = new Step("grammar");
            context = new TestContext();

            beforeEach();

            then();
        }

        protected StepResults results
        {
            get
            {
                return context.ResultsFor(theStep);
            }
        }

        protected abstract void beforeEach();

        protected void theLastTargetIsNull()
        {
            context.CurrentObject = null;
        }

        protected void theLastObjectIsThis(object something)
        {
            context.CurrentObject = something;
        }

        protected void theExpectedValueIs(object value)
        {
            theStep.With("Age", value);
        }

        protected void thePropertyThrowsException()
        {
            context.CurrentObject = new ExceptionCheckPropertyTarget();
        }

        protected void theActualValueIs(int age)
        {
            context.CurrentObject = new CheckPropertyTarget
            {
                Age = age
            };
        }

        protected void then()
        {
            grammar.Execute(theStep, context);
        }
    }

    public class CheckPropertyTarget
    {
        public virtual int Age { get; set; }

        public DateTime? LastTime { get; set; }
    }

    public class ExceptionCheckPropertyTarget : CheckPropertyTarget
    {
        public override int Age { get { throw new NotImplementedException(); } set { base.Age = value; } }
    }
}