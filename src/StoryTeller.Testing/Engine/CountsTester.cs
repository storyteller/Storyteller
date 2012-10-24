using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class CountsTester
    {
        [Test]
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

            count1.Rights.ShouldEqual(9);
            count1.Wrongs.ShouldEqual(7);
            count1.Exceptions.ShouldEqual(14);
            count1.SyntaxErrors.ShouldEqual(21);

            count2.Rights.ShouldEqual(7);
            count2.Wrongs.ShouldEqual(4);
            count2.Exceptions.ShouldEqual(10);
            count2.SyntaxErrors.ShouldEqual(14);
        }

        [Test]
        public void counts_are_all_zero_on_construction()
        {
            var counts = new Counts();

            counts.Wrongs.ShouldEqual(0);
            counts.Rights.ShouldEqual(0);
            counts.Exceptions.ShouldEqual(0);
            counts.SyntaxErrors.ShouldEqual(0);
        }

        [Test]
        public void increment_rights()
        {
            var counts = new Counts();
            counts.IncrementRights();
            counts.Rights.ShouldEqual(1);

            counts.IncrementRights();
            counts.Rights.ShouldEqual(2);

            counts.IncrementRights();
            counts.Rights.ShouldEqual(3);
        }

        [Test]
        public void increment_wrongs()
        {
            var counts = new Counts();
            counts.IncrementWrongs();
            counts.Wrongs.ShouldEqual(1);

            counts.IncrementWrongs();
            counts.Wrongs.ShouldEqual(2);

            counts.IncrementWrongs();
            counts.Wrongs.ShouldEqual(3);
        }

        [Test]
        public void is_success()
        {
            new Counts
            {
                Rights = 4,
                Exceptions = 0,
                SyntaxErrors = 0,
                Wrongs = 0
            }.WasSuccessful().ShouldBeTrue();
            new Counts
            {
                Rights = 4,
                Exceptions = 1,
                SyntaxErrors = 0,
                Wrongs = 0
            }.WasSuccessful().ShouldBeFalse();
            new Counts
            {
                Rights = 4,
                Exceptions = 0,
                SyntaxErrors = 1,
                Wrongs = 0
            }.WasSuccessful().ShouldBeFalse();
            new Counts
            {
                Rights = 4,
                Exceptions = 0,
                SyntaxErrors = 0,
                Wrongs = 1
            }.WasSuccessful().ShouldBeFalse();
            new Counts
            {
                Rights = 4,
                Exceptions = 1,
                SyntaxErrors = 0,
                Wrongs = 1
            }.WasSuccessful().ShouldBeFalse();
            new Counts
            {
                Rights = 0,
                Exceptions = 1,
                SyntaxErrors = 0,
                Wrongs = 0
            }.WasSuccessful().ShouldBeFalse();
        }

        [Test]
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