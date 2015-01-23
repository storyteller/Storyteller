using Storyteller.Core.Engine;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Testing.Samples.Fixtures
{
    public class SampleSystem : NulloSystem
    {
        public SampleSystem()
        {
            Services.Add(new SomeService());
        }
    }

    public class ServiceFixture : Fixture
    {
        [FormatAs("Set the value to {value}")]
        public void Set(int value)
        {
            Context.Service<SomeService>().SetValue(value);
        }

        [FormatAs("The value should be {value}")]
        public int Check()
        {
            return Context.Service<SomeService>().Value();
        }
    }

    public class SomeService
    {
        private int _value;

        public void SetValue(int value)
        {
            _value = value;
        }

        public int Value()
        {
            return _value;
        }
    }
}