using Xunit;
using Shouldly;

namespace StoryTeller.Testing.Engine
{
    
    public class CountsTester
    {
        [Fact]
        public void assert_success_success()
        {
            // Nothing should happen
            new Counts(1, 0, 0, 0).AssertSuccess();
        }

        [Fact]
        public void assert_success_failure()
        {
            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                new Counts(1, 1, 0, 0).AssertSuccess();
            });
        }

        [Fact]
        public void add_two_counts()
        {
            var count1 = new Counts
            {
                Rights = 2,
                Wrongs = 3,
                Exceptions = 4,
                SyntaxErrors = 7
            };
            var count2 = new Counts
            {
                Rights = 7,
                Wrongs = 4,
                Exceptions = 10,
                SyntaxErrors = 14
            };

            count1.Add(count2);

            count1.Rights.ShouldBe(9);
            count1.Wrongs.ShouldBe(7);
            count1.Exceptions.ShouldBe(14);
            count1.SyntaxErrors.ShouldBe(21);

            count2.Rights.ShouldBe(7);
            count2.Wrongs.ShouldBe(4);
            count2.Exceptions.ShouldBe(10);
            count2.SyntaxErrors.ShouldBe(14);
        }

        [Fact]
        public void counts_are_all_zero_on_construction()
        {
            var counts = new Counts();

            counts.Wrongs.ShouldBe(0);
            counts.Rights.ShouldBe(0);
            counts.Exceptions.ShouldBe(0);
            counts.SyntaxErrors.ShouldBe(0);
        }

        [Fact]
        public void is_success()
        {
            ShouldBeTestExtensions.ShouldBe(new Counts
            {
                Rights = 4,
                Exceptions = 0,
                SyntaxErrors = 0,
                Wrongs = 0
            }.WasSuccessful(), true);
            ShouldBeTestExtensions.ShouldBe(new Counts
            {
                Rights = 4,
                Exceptions = 1,
                SyntaxErrors = 0,
                Wrongs = 0
            }.WasSuccessful(), false);
            ShouldBeTestExtensions.ShouldBe(new Counts
            {
                Rights = 4,
                Exceptions = 0,
                SyntaxErrors = 1,
                Wrongs = 0
            }.WasSuccessful(), false);
            ShouldBeTestExtensions.ShouldBe(new Counts
            {
                Rights = 4,
                Exceptions = 0,
                SyntaxErrors = 0,
                Wrongs = 1
            }.WasSuccessful(), false);
            ShouldBeTestExtensions.ShouldBe(new Counts
            {
                Rights = 4,
                Exceptions = 1,
                SyntaxErrors = 0,
                Wrongs = 1
            }.WasSuccessful(), false);
            ShouldBeTestExtensions.ShouldBe(new Counts
            {
                Rights = 0,
                Exceptions = 1,
                SyntaxErrors = 0,
                Wrongs = 0
            }.WasSuccessful(), false);
        }

        [Fact]
        public void reset_clears_all_counts_to_zero()
        {
            var count1 = new Counts
            {
                Rights = 2,
                Wrongs = 3,
                Exceptions = 4,
                SyntaxErrors = 7
            };
            count1.Reset();

            count1.ShouldEqual(0, 0, 0, 0);
        }
    }
}