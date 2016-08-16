using System.Collections.Generic;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Sets
{
    
    public class UnorderedSetMatcherTester
    {
        public UnorderedSetMatcherTester()
        {
            _expected.Clear();
            _actual.Clear();
            theResult = null;
        }


        private readonly IList<StepValues> _expected = new List<StepValues>();
        private readonly IList<StepValues> _actual = new List<StepValues>();
        private SetVerificationResult theResult;

        private void expectedRow(string id, int x, int y)
        {
            var values = new StepValues(id);
            values.Store("x", x);
            values.Store("y", y);

            _expected.Add(values);
        }

        private void actualRow(int x, int y)
        {
            var values = new StepValues(null);
            values.Store("x", x);
            values.Store("y", y);

            _actual.Add(values);
        }

        private void afterMatching()
        {
            var comparer = new UnorderedSetMatcher();
            var cells = new Cell[] {Cell.For<int>("x"), Cell.For<int>("y")};

            theResult = comparer.Match(cells, _expected, _actual);
        }

        [Fact]
        public void exact_match()
        {
            expectedRow("a", 1, 2);
            expectedRow("b", 2, 3);
            expectedRow("c", 3, 4);

            actualRow(1, 2);
            actualRow(2, 3);
            actualRow(3, 4);

            afterMatching();

            theResult.matches.ShouldHaveTheSameElementsAs("a", "b", "c");
            theResult.extras.ShouldBeEmpty();
            theResult.missing.ShouldBeEmpty();
        }

        [Fact]
        public void unordered_but_still_matching()
        {
            expectedRow("c", 3, 4);
            expectedRow("a", 1, 2);
            expectedRow("b", 2, 3);
            

            actualRow(1, 2);
            actualRow(3, 4);
            actualRow(2, 3);

            afterMatching();

            theResult.matches.OrderBy(x => x).ShouldHaveTheSameElementsAs("a", "b", "c");
            theResult.extras.ShouldBeEmpty();
            theResult.missing.ShouldBeEmpty();
        }

        [Fact]
        public void one_missing()
        {
            expectedRow("a", 1, 2);
            expectedRow("b", 2, 3);
            expectedRow("c", 3, 4);

            actualRow(1, 2);
            //actualRow(2, 3);
            actualRow(3, 4);

            afterMatching();

            theResult.matches.ShouldHaveTheSameElementsAs("a", "c");
            theResult.extras.ShouldBeEmpty();
            theResult.missing.Single().ShouldBe("b");
        }

        [Fact]
        public void one_missing_un_ordered()
        {
            expectedRow("a", 1, 2);
            expectedRow("c", 3, 4);
            expectedRow("b", 2, 3);

            actualRow(3, 4);
            actualRow(1, 2);
            //actualRow(2, 3);
            

            afterMatching();

            theResult.matches.ShouldHaveTheSameElementsAs("a", "c");
            theResult.extras.ShouldBeEmpty();
            theResult.missing.Single().ShouldBe("b");
        }


        [Fact]
        public void one_extra()
        {
            expectedRow("a", 1, 2);
            expectedRow("b", 2, 3);
            expectedRow("c", 3, 4);

            actualRow(1, 2);
            actualRow(2, 3);
            actualRow(3, 4);
            actualRow(5, 6);

            afterMatching();

            theResult.matches.ShouldHaveTheSameElementsAs("a", "b", "c");
            var extra = theResult.extras.Single();

            extra["x"].ShouldBe(5.ToString());
            extra["y"].ShouldBe(6.ToString());

            theResult.missing.ShouldBeEmpty();
        }


        [Fact]
        public void one_extra_unordered()
        {
            expectedRow("c", 3, 4);
            expectedRow("a", 1, 2);
            expectedRow("b", 2, 3);

            actualRow(5, 6);
            actualRow(1, 2);
            actualRow(2, 3);
            actualRow(3, 4);
            

            afterMatching();

            theResult.matches.OrderBy(x => x).ShouldHaveTheSameElementsAs("a", "b", "c");
            var extra = theResult.extras.Single();

            extra["x"].ShouldBe(5.ToString());
            extra["y"].ShouldBe(6.ToString());

            theResult.missing.ShouldBeEmpty();
        }
    }
}