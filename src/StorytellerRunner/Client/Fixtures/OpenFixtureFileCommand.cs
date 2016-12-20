using System;
using System.Diagnostics;
using System.IO;
using Oakton;
using StoryTeller;
using StoryTeller.Messages;

namespace ST.Client.Fixtures
{
    public class OpenFixtureFileCommand : Command<OpenFixtureFile>
    {
        public override void HandleMessage(OpenFixtureFile message, IApplication app)
        {
            var file = app.Fixtures.FileFor(message.key);

            if (message.export || !File.Exists(file))
            {
                app.Fixtures.Export(message.key);
            }

            try
            {
                Console.WriteLine("Trying to open a file editor to " + file);
                ProcessLauncher.GotoUrl(file);
            }
            catch (Exception e)
            {

                ConsoleWriter.Write(ConsoleColor.Yellow, "Unable to start an editor for file " + file);
            }
        }
    }
}