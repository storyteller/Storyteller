using System.Collections;
using System.Collections.Generic;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;

namespace Storyteller.Core.Testing.EndToEnd
{
    public class SimpleActionFixture : Fixture
    {
        public static IList<string> Messages = new List<string>();
        
        public SimpleActionFixture()
        {
            this["Do1"] = Do("Do1", c => Messages.Add("Do1"));
            this["Do2"] = Do("Do2", c => Messages.Add("Do2"));
            this["Do3"] = Do("Do3", c => Messages.Add("Do3"));
        }

        public override void SetUp()
        {
            Messages.Add("SetUp");
        }

        public override void TearDown()
        {
            Messages.Add("TearDown");
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

        [Test]
        public void setup_and_teardown_are_called_before_and_after_nested_steps()
        {
            SimpleActionFixture.Messages.Clear();

            execute(@"
Name: Simple Actions
=> SimpleAction
* Do1#1
* Do2#2
* Do3#3
");

            SimpleActionFixture.Messages.ShouldHaveTheSameElementsAs("SetUp", "Do1", "Do2", "Do3", "TearDown");


        }
    }
}