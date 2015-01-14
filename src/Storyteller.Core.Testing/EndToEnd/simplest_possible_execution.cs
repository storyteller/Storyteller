using NUnit.Framework;

namespace Storyteller.Core.Testing.EndToEnd
{
    public class SimpleActionFixture : Fixture
    {
        public SimpleActionFixture()
        {
            
        }
    }

    public class simplest_possible_execution : SpecRunningContext
    {
        [Test, Ignore("NOT READY YET")]
        public void run_actions()
        {
            execute(@"
Name: Simple Actions
=> SimpleAction
* Do1#1
* Do2#2
* Do3#3

");

            Step("1").ShouldHaveExecuted();
            Step("2").ShouldHaveExecuted();
            Step("3").ShouldHaveExecuted();

        }
    }
}