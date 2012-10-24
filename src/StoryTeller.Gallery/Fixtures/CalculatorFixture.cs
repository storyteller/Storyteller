using System.Threading;
using StoryTeller.Engine;
using StoryTeller.Gallery.Application;

namespace StoryTeller.Gallery.Fixtures
{
    public class CalculatorFixture : Fixture
    {
        private readonly Calculator _calculator = new Calculator();

        public CalculatorFixture()
        {
            this["CheckTableData"] = new TabularDataChecker();
        }

        [FormatAs("Start with {value}")]
        public void StartWith(double value)
        {
            _calculator.Value = value;
        }

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

        [FormatAs("The value should be {value}")]
        [return: AliasAs("value")]
        public double TheValueShouldBe()
        {
            return _calculator.Value;
        }


        [FormatAs("Adding {x} to {y} should equal {returnValue}")]
        public double AddingNumbersTogether(double x, double y)
        {
            _calculator.Value = x;
            _calculator.Add(y);
            return _calculator.Value;
        }

        [ExposeAsTable("The sum of two columns should be")]
        [return: AliasAs("sum")]
        public double AddingNumbersTogetherAsTable(double x, double y)
        {
            _calculator.Value = x;
            _calculator.Add(y);
            return _calculator.Value;
        }
    }


    public class TabularDataChecker : DecisionTableGrammar
    {
        private double _x;
        private double _y;

        public double X { set { _x = value; } }

        public double Y { set { _y = value; } }

        public double Sum { get { return _x + _y; } }

        public double Product { get { return _x*_y; } }
    }
}