using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Sets
{
    public interface Goer
    {
        void Call();
    }

    [TestFixture]
    public class when_verifying_a_set_of_data_and_the_function_blows_up_before_it_can_be_called
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            grammar =
                Fixture.VerifyStringList(() => { throw new NotImplementedException(); }).Titled(
                    "The list of strings should be").LeafNameIs("row").Grammar();

            step = new Step("anything").WithChildren("row", new Step(), new Step(), new Step());

            var context = new TestContext();

            grammar.Execute(step, context);
            counts = context.Counts;

            rowResults = context.ResultsFor(step).GetResult<IList<SetRow>>(grammar.LeafName);
            stepResults = context.ResultsFor(step);
        }

        #endregion

        private SetVerificationGrammar grammar;
        private Step step;
        private Counts counts;
        private IList<SetRow> rowResults;
        private StepResults stepResults;

        [Test]
        public void all_the_rows_are_wrong_because_they_are_missing()
        {
            counts.Wrongs.ShouldEqual(3);
        }

        [Test]
        public void all_the_steps_should_be_missing()
        {
            rowResults.Count(x => x.Result == SetMatch.Missing)
                .ShouldEqual(3);
        }

        [Test]
        public void the_counts_should_show_an_exception()
        {
            counts.Exceptions.ShouldEqual(1);
        }

        [Test]
        public void the_exception_should_be_recorded_at_the_step_level()
        {
            stepResults.ExceptionText.ShouldContain("NotImplementedException");
        }
    }


}