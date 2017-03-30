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

        [SendJson("subtract")]
        public void Subtract(int operand)
        {
            
        }


        [SendJson("multiply")]
        public void Multiply(int operand)
        {

        }

        public IGrammar CheckValue()
        {
            return CheckValue<int>("$.number", "The current number should be {number}");
        }
    }
}