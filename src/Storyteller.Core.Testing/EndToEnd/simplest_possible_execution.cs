using NUnit.Framework;
using Rhino.Mocks;

namespace Storyteller.Core.Testing.EndToEnd
{
    public class SimpleActionFixture : Fixture
    {
        public SimpleActionFixture()
        {
            this["Do1"] = Do("Do1", c => { });
            this["Do2"] = Do("Do2", c => { });
            this["Do3"] = Do("Do3", c => { });
        }
    }

    public class simplest_possible_execution : SpecRunningContext
    {
        [Test]
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