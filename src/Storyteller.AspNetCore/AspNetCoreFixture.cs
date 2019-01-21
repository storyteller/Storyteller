using System;
using System.Threading.Tasks;
using Alba;

namespace StoryTeller.AspNetCore
{
    public abstract class AspNetCoreFixture : Fixture
    {
        public SystemUnderTest SystemUnderTest
        {
            get
            {
                if (Context == null)
                {
                    throw new InvalidOperationException("This property is only available during the execution of a specification");
                }

                return Context.State.Retrieve<AspNetCoreSystem>().AlbaSystem;
            }
        }
        
        protected Task<IScenarioResult> Scenario(Action<Scenario> configure)
        {
            return SystemUnderTest.Scenario(configure);
        }
    }
}
