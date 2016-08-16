using Xunit;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars.Reflection
{
    
    public class FactCheckMethod_specs : SpecRunningContext
    {
        [Fact]
        public void run_positive_and_negative()
        {
            execute(@"
=> ComplexFact
* BiggerThan10#1: number=11
* BiggerThan10#2: number=10

");

            Step("1").StatusWas(ResultStatus.success);
            Step("2").StatusWas(ResultStatus.failed);
        }
    }

    public class ComplexFactFixture : Fixture
    {
        [FormatAs("{number} > 10")]
        public bool BiggerThan10(int number)
        {
            return number > 10;
        }
    }
}