using System;
using System.Collections.Generic;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Equivalence;

namespace StoryTeller.Testing.Equivalence
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
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(null, "a"), false);
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(null, null), true);
        }

        [Test]
        public void check_a_string()
        {
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual("a", "a"), true);
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual("a", "b"), false);
        }

        [Test]
        public void use_equatable_if_possible()
        {
            var address1 = new EQAddress(){City = "Austin"};
            var address2 = new EQAddress(){City = "Austin"};
            var address3 = new EQAddress(){City = "Dallas"};
                
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(address1, address2), true);
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(address1, address3), false);
        }

        [Test]
        public void arrays_are_checked_independently_of_order()
        {
            var strings1 = new string[] {"a", "b", "c"};
            var strings2 = new string[] {"b", "c", "a"};
            var strings3 = new string[] {"b", "c", "d"};
            var strings4 = new string[] {"c", "b", "d"};
        
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(strings1, strings2), true);
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(strings3, strings4), true);
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(strings1, strings3), false);
        }

        [Test]
        public void lists_are_checked_independently_of_order()
        {
            var strings1 = new List<string> { "a", "b", "c" };
            var strings2 = new List<string> { "b", "c", "a" };
            var strings3 = new List<string> { "b", "c", "d" };
            var strings4 = new List<string> { "c", "b", "d" };

            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(strings1, strings2), true);
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(strings3, strings4), true);
            ShouldBeTestExtensions.ShouldBe(checker.IsEqual(strings1, strings3), false);
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