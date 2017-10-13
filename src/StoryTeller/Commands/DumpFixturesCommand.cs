using System;
using System.IO;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model.Persistence.DSL;

namespace StoryTeller.Commands
{


    [Oakton.Description("Exports all of the Fixture definitions to markdown for review or using within the headless mode", Name = "dump-fixtures")]
    public class DumpFixturesCommand : OaktonCommand<StorytellerInput>
    {
        public override bool Execute(StorytellerInput input)
        {
            if (!Directory.Exists(input.FixturePath))
            {
                Console.WriteLine("Creating directory " + input.FixturePath);
                Directory.CreateDirectory(input.FixturePath);
            }
            
            var running = RunningSystem.Create(input.System);
            using (running.System)
            {
                var fixtures = input.BuildFixturesWithOverrides(running.RecycledMessage);
                
                foreach (var fixture in fixtures)
                {
                    var file = input.FixturePath.AppendPath(fixture.key + ".md");
                    try
                    {
                        FixtureWriter.Write(fixture, file);
                    }
                    catch (Exception e)
                    {
                        ConsoleWriter.Write(ConsoleColor.Red, $"Could not export fixture {fixture.key}");
                        ConsoleWriter.Write(ConsoleColor.Yellow, e.ToString());
                    }
                }
                
            }


            return true;
        }


    }
}