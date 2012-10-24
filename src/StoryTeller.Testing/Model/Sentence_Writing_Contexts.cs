using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Assertions;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{

    [TestFixture]
    public class sentence_validating_a_step
    {
        [Test]
        public void all_attributes_exist_and_no_grammar_errors()
        {
            Sentence sentence = Sentence.For("{a} + {b} == {c}", Cell.For<int>("a"), Cell.For<int>("b"),
                                             Cell.For<int>("c"));

            Step step = new Step().With("a:1,b:2,c:3");

            sentence.Validate(step).ShouldEqual(StepValidationStatus.Valid);
        }

        [Test]
        public void extra_attributes_but_no_missing_or_grammar_errors_is_a_warning()
        {
            Sentence sentence = Sentence.For("{a} + {b} == {c}", Cell.For<int>("a"), Cell.For<int>("b"),
                                             Cell.For<int>("c"));

            Step step = new Step().With("a:1,b:2,c:3,d:4");

            sentence.Validate(step).ShouldEqual(StepValidationStatus.Warning);
        }

        [Test]
        public void extra_attributes_plus_one_missing_is_an_error()
        {
            Sentence sentence = Sentence.For("{a} + {b} == {c}", Cell.For<int>("a"), Cell.For<int>("b"),
                                             Cell.For<int>("c"));

            Step step = new Step().With("b:2,c:3,d:4");

            sentence.Validate(step).ShouldEqual(StepValidationStatus.Error);
        }

        [Test]
        public void grammar_errors_and_a_missing_input_should_be_an_error()
        {
            // a and b are not in the template, so they are hidden data
            Sentence sentence = Sentence.For("== {c}", Cell.For<int>("a"), Cell.For<int>("b"), Cell.For<int>("c"));

            Step step = new Step().With("a:1,b:2");

            sentence.Validate(step).ShouldEqual(StepValidationStatus.Error);
        }

        [Test]
        public void grammar_errors_but_all_input_should_show_up_as_warning()
        {
            // a and b are not in the template, so they are hidden data
            Sentence sentence = Sentence.For("== {c}", Cell.For<int>("a"), Cell.For<int>("b"), Cell.For<int>("c"));

            Step step = new Step().With("a:1,b:2,c:3");

            sentence.Validate(step).ShouldEqual(StepValidationStatus.Warning);
        }
    }

    [TestFixture]
    public class when_creating_an_example_for_a_fact
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            cell = Cell.For<bool>("returnValue");
            cell.IsResult = true;
            cell.IsBooleanResult().ShouldBeTrue();


            sentence = new Sentence("The answer should be true", new[] { cell });
        }

        #endregion

        private Sentence sentence;
        private Cell cell;

        [Test]
        public void the_example_step_should_not_have_any_attributes()
        {
            sentence.CreateExample().Values.Count.ShouldEqual(0);
        }
    }



}