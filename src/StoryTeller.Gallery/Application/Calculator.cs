namespace StoryTeller.Gallery.Application
{
    public interface ICalculator
    {
        double Value { get; set; }
        void MultiplyBy(double value);
        void DivideBy(double value);
        void Add(double value);
        void Subtract(double value);
    }

    public class Calculator : ICalculator
    {
        private double _value;

        #region ICalculator Members

        public double Value { get { return _value; } set { _value = value; } }

        public void MultiplyBy(double value)
        {
            _value *= value;
        }

        public void DivideBy(double value)
        {
            _value /= value;
        }

        public void Add(double value)
        {
            _value += value;
        }

        public void Subtract(double value)
        {
            _value -= value;
        }

        #endregion
    }
}