using System;
using System.Threading.Tasks;
using Alba;

namespace StoryTeller.AspNetCore
{
    public abstract class AspNetCoreFixture : Fixture
    {
        public ISystemUnderTest SystemUnderTest
        {
            get
            {
                if (Context == null)
                {
                    throw new InvalidOperationException("This property is only available during the execution of a specification");
                }

                return Context.State.Retrieve<ISystemUnderTest>();
            }
        }

        protected Task<IScenarioResult> Scenario(Action<Scenario> configure)
        {
            return SystemUnderTest.Scenario(configure);
        }
    }
}
