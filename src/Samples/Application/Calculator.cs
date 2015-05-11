namespace Samples.Application
{
    // SAMPLE: Calculator
    public class Calculator
    {
        public double Value { get; set; }

        public void MultiplyBy(double value)
        {
            Value *= value;
        }

        public void DivideBy(double value)
        {
            Value /= value;
        }

        public void Add(double value)
        {
            Value += value;
        }

        public void Subtract(double value)
        {
            Value -= value;
        }
    }
    // ENDSAMPLE
}