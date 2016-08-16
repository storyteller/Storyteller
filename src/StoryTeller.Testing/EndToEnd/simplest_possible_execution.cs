using System;
using System.Collections.Generic;
using Xunit;

namespace StoryTeller.Testing.EndToEnd
{
    public class SimpleActionFixture : Fixture
    {
        public static IList<string> Messages = new List<string>();

        public static bool BlowUpInTearDown = false;
        public static bool BlowUpInSetUp = false;

        public SimpleActionFixture()
        {
            this["Do1"] = Do("Do1", c => Messages.Add("Do1"));
            this["Do2"] = Do("Do2", c => Messages.Add("Do2"));
            this["Do3"] = Do("Do3", c => Messages.Add("Do3"));

            this["Ex"] = Do("Ex", c => { throw new DivideByZeroException("Bad!"); });
            this["Critical"] = Do("Ex", c => { throw new StorytellerCriticalException("Critical!"); });
            this["Catastrophic"] = Do("Ex", c => { throw new StorytellerCatastrophicException("Catastrophic!"); });
        }

        public override void SetUp()
        {
            if (BlowUpInSetUp)
            {
                throw new Exception("I blew up in SetUp()");
            }

            Messages.Add("SetUp");
        }

        public override void TearDown()
        {
            if (BlowUpInTearDown)
            {
                throw new Exception("I blew up in TearDown()");
            }

            Messages.Add("TearDown");
        }
    }

    public class simplest_possible_execution : SpecRunningContext
    {
        public simplest_possible_execution()
        {
            SimpleActionFixture.BlowUpInSetUp = false;
            SimpleActionFixture.BlowUpInTearDown = false;
        }



        [Fact]
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

        [Fact]
        public void stop_if_setup_blows_up()
        {
            SimpleActionFixture.BlowUpInSetUp = true;

            execute(@"
Name: Simple Actions
=> SimpleAction#1
* Do1#2
* Do2#3
* Do3#4

");


            CountsShouldBe(0, 0, 1, 0);

            Step("2").ShouldNotHaveExecuted();
            Step("3").ShouldNotHaveExecuted();
            Step("4").ShouldNotHaveExecuted();
        }

        [Fact]
        public void stop_if_teardown_blows_up()
        {
            SimpleActionFixture.BlowUpInTearDown = true;

            execute(@"
Name: Simple Actions
=> SimpleAction#1
* Do1#2
* Do2#3
* Do3#4

=> SimpleAction#5
* Do1#6
* Do2#7
* Do3#8

");


            CountsShouldBe(0, 0, 1, 0);

            TheStepsThatExecutedWere("2", "3", "4");
        }

        [Fact]
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

        [Fact]
        public void continues_on_normal_exception()
        {
            execute(@"
Name: Normal Exception
=> SimpleAction
* Ex#1
* Do1#2
* Do2#3
* Do3#4
");

            Step("1").ErrorContains("DivideByZeroException");

            TheStepsThatExecutedWere("1", "2", "3", "4");
        }

        [Fact]
        public void would_stop_on_a_critical_exception()
        {
            execute(@"
Name: Normal Exception
=> SimpleAction
* Ex#1
* Do1#2
* Critical#3
* Do3#4
");

            Step("3").ErrorContains("Critical!");

            TheStepsThatExecutedWere("1", "2", "3");
        }


        [Fact]
        public void would_stop_on_a_catastrophic_exception()
        {
            execute(@"
Name: Normal Exception
=> SimpleAction
* Ex#1
* Do1#2
* Catastrophic#3
* Do3#4
");

            Step("3").ErrorContains("Catastrophic!");

            TheStepsThatExecutedWere("1", "2", "3");
        }
    }
}