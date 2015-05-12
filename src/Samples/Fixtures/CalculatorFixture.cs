using Samples.Application;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Samples.Fixtures
{
    public class CalculatorFixture : Fixture
    {
        private readonly Calculator _calculator = new Calculator();

        // SAMPLE: start-with-sentence
        [FormatAs("Start with {value}")]
        public void StartWith(double value)
        {
            _calculator.Value = value;
        }
        // ENDSAMPLE

        [FormatAs("Add {value}")]
        public void Add(double value)
        {
            _calculator.Add(value);
        }

        [FormatAs("Subtract {value}")]
        public void Subtract(double value)
        {
            _calculator.Subtract(value);
        }

        [FormatAs("Multiply by {value}")]
        public void MultiplyBy(double value)
        {
            _calculator.MultiplyBy(value);
        }

        [FormatAs("Divide by {value}")]
        public void DivideBy(double value)
        {
            _calculator.DivideBy(value);
        }

        // SAMPLE: the-value-should-be-sentence
        [FormatAs("The value should be {value}")]
        public double TheValueShouldBe()
        {
            return _calculator.Value;
        }
        // ENDSAMPLE


        // SAMPLE: multiple-inputs-sentence
        [FormatAs("Adding {x} to {y} should equal {returnValue}")]
        public double AddingNumbersTogether(double x, double y)
        {
            _calculator.Value = x;
            _calculator.Add(y);
            return _calculator.Value;
        }
        // ENDSAMPLE

        [ExposeAsTable("The sum of two columns should be")]
        [return: AliasAs("sum")]
        public double AddingNumbersTogetherAsTable(double x, double y)
        {
            _calculator.Value = x;
            _calculator.Add(y);
            return _calculator.Value;
        }

        // SAMPLE: sentence-with-output-parameters
        [FormatAs("For X={X} and Y={Y}, the Sum should be {Sum} and the Product should be {Product}")]
        public void SumAndProduct(int X, int Y, out int Sum, out int Product)
        {
            Sum = X + Y;
            Product = X * Y;
        }
        // ENDSAMPLE

        [ExposeAsTable("Sum and Product Operations")]
        public void Operations(int X, int Y, out int Sum, out int Product)
        {
            Sum = X + Y;
            Product = X*Y;
        }
    }

}