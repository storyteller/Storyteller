using System;
using System.Collections.Generic;
using Xunit;
using Shouldly;
using StoryTeller.Equivalence;

namespace StoryTeller.Testing.Equivalence
{
    
    public class EquivalenceCheckerTester
    {
        private readonly EquivalenceChecker checker = new EquivalenceChecker();


        [Fact]
        public void expected_is_null()
        {
            checker.IsEqual(null, "a").ShouldBe(false);
            checker.IsEqual(null, null).ShouldBe(true);
        }

        [Fact]
        public void check_a_string()
        {
            checker.IsEqual("a", "a").ShouldBe(true);
            checker.IsEqual("a", "b").ShouldBe(false);
        }

        [Fact]
        public void use_equatable_if_possible()
        {
            var address1 = new EQAddress(){City = "Austin"};
            var address2 = new EQAddress(){City = "Austin"};
            var address3 = new EQAddress(){City = "Dallas"};
                
            checker.IsEqual(address1, address2).ShouldBe(true);
            checker.IsEqual(address1, address3).ShouldBe(false);
        }

        [Fact]
        public void arrays_are_checked_independently_of_order()
        {
            var strings1 = new string[] {"a", "b", "c"};
            var strings2 = new string[] {"b", "c", "a"};
            var strings3 = new string[] {"b", "c", "d"};
            var strings4 = new string[] {"c", "b", "d"};
        
            checker.IsEqual(strings1, strings2).ShouldBe(true);
            checker.IsEqual(strings3, strings4).ShouldBe(true);
            checker.IsEqual(strings1, strings3).ShouldBe(false);
        }

        [Fact]
        public void lists_are_checked_independently_of_order()
        {
            var strings1 = new List<string> { "a", "b", "c" };
            var strings2 = new List<string> { "b", "c", "a" };
            var strings3 = new List<string> { "b", "c", "d" };
            var strings4 = new List<string> { "c", "b", "d" };

            checker.IsEqual(strings1, strings2).ShouldBe(true);
            checker.IsEqual(strings3, strings4).ShouldBe(true);
            checker.IsEqual(strings1, strings3).ShouldBe(false);
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