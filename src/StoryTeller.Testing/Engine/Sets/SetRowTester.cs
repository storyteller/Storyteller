using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Sets
{
    [TestFixture]
    public class SetRowTester
    {
        private RowValueMatcher matcher;
        private SetRow row1;
        private SetRow row2;

        [SetUp]
        public void SetUp()
        {
            matcher = new RowValueMatcher(new TestContext());
            row1 = new SetRow();
            row2 = new SetRow();
        }

        [Test]
        public void matches_is_true_when_the_matcher_has_overriden_comparison_mechanism()
        {
            matcher.RegisterMatcher<string>("name", (one, two) => two.StartsWith(one));

            row1.Values["name"] = "Jeremy";
            row2.Values["name"] = "Jeremy Miller";

            row1.Matches(matcher, row2).ShouldBeTrue();
        }

        [Test]
        public void matches_is_false_when_the_matcher_has_overriden_the_comparison_mechanism()
        {
            matcher.RegisterMatcher<string>("name", (one, two) => two.StartsWith(one));

            row1.Values["name"] = "Jeremy";
            row2.Values["name"] = "Max Miller";

            row1.Matches(matcher, row2).ShouldBeFalse();
        }



        [Test]
        public void matches_is_true_with_two_properties()
        {
            row1.Values["a"] = row2.Values["a"] = 1;
            row1.Values["b"] = row2.Values["b"] = 2;
        
            row1.Matches(matcher, row2).ShouldBeTrue();
        }

        [Test]
        public void never_matches_if_there_are_missing_values()
        {
            row1.Values["a"] = row2.Values["a"] = 1;
            row1.Values["b"] = row2.Values["b"] = 2;

            row1.MissingValues = true;

            row1.Matches(matcher, row2).ShouldBeFalse();
        }

        [Test]
        public void matches_is_false_for_two_properties()
        {
            row1.Values["a"] = row2.Values["a"] = 1;
            row1.Values["b"] = 2;
            row2.Values["b"] = 3;

            row1.Matches(matcher, row2).ShouldBeFalse();
        }

        [Test]
        public void matches_is_false_when_a_property_is_missing_in_the_expected()
        {
            row1.Values["a"] = row2.Values["a"] = 1;
            row1.Values["b"] = 2;
            //row2.Values["b"] = 2;

            row1.Matches(matcher, row2).ShouldBeFalse();
        }
    }
}