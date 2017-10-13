using System;
using System.Linq;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Commands
{
    
    [Description("Use to validate specifications for syntax errors or missing grammars or fixtures")]
    public class ValidateCommand : OaktonCommand<StorytellerInput>
    {
        public override bool Execute(StorytellerInput input)
        {
            var running = RunningSystem.Create(input.System);
            var library = input.BuildFixturesWithOverrides(running.RecycledMessage);

            

            var specs = HierarchyLoader.ReadHierarchy(input.SpecPath).GetAllSpecs().ToArray();

            SpecificationPostProcessor.PostProcessAll(specs, running.Fixtures);

            var errored = specs.Where(x => x.errors.Any()).ToArray();

            if (errored.Any())
            {
                ConsoleWriter.Write(ConsoleColor.Red, "Errors Detected!");

                foreach (var errorSpec in errored)
                {
                    ConsoleWriter.Write(ConsoleColor.Yellow, errorSpec.Filename);
                    foreach (var error in errorSpec.errors)
                    {
                        Console.WriteLine( $"{error.location.Join(" / ")} -> {error.message}");
                    }
                }

                return false;
            }
            else
            {
                ConsoleWriter.Write(ConsoleColor.Green, "No validation errors or missing data detected in this project");
                return true;
            }
        }
    }
}
