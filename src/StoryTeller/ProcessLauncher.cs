using System;
using System.Diagnostics;
using Microsoft.DotNet.InternalAbstractions;

namespace StoryTeller
{
    public static class ProcessLauncher
    {
        public static void GotoUrl(string url)
        {
            try
            {
                if (RuntimeEnvironment.OperatingSystemPlatform == Platform.Windows)
                {
                    Process.Start(url);
                }
                else
                {
                    Console.WriteLine("Trying to open file " + url);

                    Process.Start(new ProcessStartInfo
                    {
                        UseShellExecute = false,
                        FileName = "open",
                        Arguments = url
                    });
                }
            }
            catch (Exception)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, "Unable to launch the browser to " + url);
            }

        }

        public static void OpenFile(string file)
        {
            GotoUrl(file);
        }
    }
}