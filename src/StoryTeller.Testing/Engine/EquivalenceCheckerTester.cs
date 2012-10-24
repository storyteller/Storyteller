using System;
using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class EquivalenceCheckerTester
    {
        private EquivalenceChecker checker;

        [SetUp]
        public void SetUp()
        {
            checker = new EquivalenceChecker();
        }

        [Test]
        public void expected_is_null()
        {
            checker.IsEqual(null, "a").ShouldBeFalse();
            checker.IsEqual(null, null).ShouldBeTrue();
        }

        [Test]
        public void check_a_string()
        {
            checker.IsEqual("a", "a").ShouldBeTrue();
            checker.IsEqual("a", "b").ShouldBeFalse();
        }

        [Test]
        public void use_equatable_if_possible()
        {
            var address1 = new EQAddress(){City = "Austin"};
            var address2 = new EQAddress(){City = "Austin"};
            var address3 = new EQAddress(){City = "Dallas"};
                
            checker.IsEqual(address1, address2).ShouldBeTrue();
            checker.IsEqual(address1, address3).ShouldBeFalse();
        }

        [Test]
        public void arrays_are_checked_independently_of_order()
        {
            var strings1 = new string[] {"a", "b", "c"};
            var strings2 = new string[] {"b", "c", "a"};
            var strings3 = new string[] {"b", "c", "d"};
            var strings4 = new string[] {"c", "b", "d"};
        
            checker.IsEqual(strings1, strings2).ShouldBeTrue();
            checker.IsEqual(strings3, strings4).ShouldBeTrue();
            checker.IsEqual(strings1, strings3).ShouldBeFalse();
        }
    }

    public class EQAddress : IEquatable<EQAddress>
    {
        public string City { get; set; }

        public bool Equals(EQAddress other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.City, City);
        }

        public override bool Equals(object obj)
        {
            return false;
        }

        public override int GetHashCode()
        {
            return (City != null ? City.GetHashCode() : 0);
        }
    }
}