using StoryTeller;

namespace Samples.Fixtures
{
    public class ArrayFixture : Fixture
    {
        public ArrayFixture()
        {
            Title = "Comparing arrays";
        }

        [FormatAs("The array of names should be {names}")]
        public string[] TheNameArrayShouldBe()
        {
            return new string[] { "Han", "Luke", "Chewie" };
        }

        [FormatAs("The first 4 numbers in the Fibonacci sequence should be {numbers}")]
        public int[] FibonacciSeries()
        {
            return new int[] { 1, 1, 2, 3 };
        }

        [FormatAs("The names should be {names}")]
        public string[] ReturnsEmpty()
        {
            return new string[0];
        }
    }
}