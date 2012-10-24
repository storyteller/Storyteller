using System;
using StoryTeller.Engine;

namespace StoryTeller.Samples.Grammars
{
    public class ServiceFixture : Fixture
    {
        public ServiceFixture()
        {
            this["Set"] = new SetValueOnSomeService();
            this["Check"] = new CheckValueOnSomeService();
        }

        public override void SetUp(ITestContext context)
        {
            context.Store(new SomeService());
        }
    }

    public class SetValueOnSomeService : ServiceActionGrammar<SomeService, int>
    {
        public SetValueOnSomeService() : base("value", "Set the value to {value}")
        {
        }

        protected override void execute(SomeService service, int value)
        {
            service.SetValue(value);
        }
    }

    public class CheckValueOnSomeService : ServiceAssertionGrammar<SomeService, int>
    {
        public CheckValueOnSomeService() : base("value", "The value should be {value}")
        {
        }

        protected override object getActualValue(SomeService service)
        {
            return service.Value();
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