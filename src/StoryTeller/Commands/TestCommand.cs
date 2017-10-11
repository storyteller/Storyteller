using System;
using System.Linq;
using Baseline.Dates;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Commands
{
    [Description("Try to start and warmup the system under test for diagnostics")]
    public class TestCommand : OaktonCommand<TestInput>
    {
        public override bool Execute(TestInput input)
        {
            try
            {
                var running = RunningSystem.Create(input.System);
                if (running.RecycledMessage.success)
                {
                    Console.WriteLine("Able to create the FixtureLibrary");
                }


                Console.WriteLine("System ready.");


                writeFixtures(running);
                


                Console.WriteLine("Trying the Warmup now...");

                var warmup = running.System.Warmup();

                warmup.Wait(1.Minutes());

                if (warmup.IsCompleted)
                {
                    ConsoleWriter.Write(ConsoleColor.Green, "StorytellerAgent started without any exceptions");
                }

                return true;
            }
            catch (Exception e)
            {
                StorytellerAgent.LogFailure(e);

                ConsoleWriter.Write(ConsoleColor.Red, "StorytellerAgent startup failed!");
                ConsoleWriter.Write(ConsoleColor.Yellow, e.ToString());

                return false;
            }
        }

        private static void writeFixtures(RunningSystem running)
        {
            if (running.RecycledMessage.fixtures.Any())
            {
                Console.WriteLine("Found Fixtures:");
                var i = 0;

                foreach (var fixture in running.RecycledMessage.fixtures)
                {
                    Console.WriteLine($"{(++i).ToString().PadLeft(3)}). {fixture.key} ({fixture.title})");
                }
            }
            else
            {
                Console.WriteLine("No fixtures found.");
            }
        }
    }
}