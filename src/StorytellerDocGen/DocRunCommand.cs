using System;
using System.Diagnostics;
using Oakton;
using StoryTeller;

namespace StorytellerDocGen
{
    [Description("Run the documentation in a live mode", Name = "doc-run")]
    public class DocRunCommand : OaktonCommand<DocInput>
    {
        public override bool Execute(DocInput input)
        {
            var settings = input.ToSettings();

            using (var project = new DocProject(settings))
            {
                using (var server = project.LaunchRunner())
                {
                    ProcessLauncher.GotoUrl(project.BaseAddress);


                    tellUsersWhatToDo(project.BaseAddress);
                    ConsoleKeyInfo key = Console.ReadKey();
                    while (key.Key != ConsoleKey.Q)
                    {
                        Console.WriteLine();
                        Console.WriteLine("Shutting down the Storyteller documentation preview runner....");
                        Console.WriteLine();
                    }
                }
            }

            return true;
        }

        private static void tellUsersWhatToDo(string url)
        {
            ConsoleWriter.Write(ConsoleColor.Cyan, "Website available at " + url);


            Console.WriteLine("Press 'q' to quit");
        }
    }
}