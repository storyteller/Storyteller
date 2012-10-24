using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Bugs
{
    [TestFixture]
    public class MethodFactDoesNotUpdateTheCounts
    {
        [Test]
        public void a_method_that_returns_a_false_boolean_is_a_fact_and_should_be_incrementing_wrongs()
        {
            new MethodFactFixture()["ThisMethodIsFalse"].Execute(new Step()).Counts.ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void a_method_that_returns_a_true_boolean_is_a_fact_and_should_be_incrementing_rights()
        {
            new MethodFactFixture()["ThisMethodIsTrue"].Execute(new Step()).Counts.ShouldEqual(1, 0, 0, 0);
        }
    }

    public class MethodFactFixture : Fixture
    {
        public bool ThisMethodIsFalse()
        {
            return false;
        }

        public bool ThisMethodIsTrue()
        {
            return true;
        }
    }
}