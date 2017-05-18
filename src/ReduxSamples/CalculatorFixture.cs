using Storyteller.Redux;
using StoryTeller;

namespace ReduxSamples
{
    public class CalculatorFixture : ReduxFixture
    {
        [SendJson("add")]
        public void Add(int operand)
        {
            
        }

        [SendJson("subtract", Format = "Subtract {operand}")]
        public void Subtract(int operand)
        {
            
        }


        [SendJson("multiply")]
        public void Multiply(int operand)
        {

        }

        // SAMPLE: CheckJsonValue
        public IGrammar CheckValue()
        {
            return CheckJsonValue<int>("$.number", "The current number should be {number}");
        }
        // ENDSAMPLE
    }
}