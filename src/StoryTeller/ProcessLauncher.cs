using System;
using System.Diagnostics;
using Platform = Microsoft.DotNet.InternalAbstractions.Platform;
using RuntimeEnvironment = Microsoft.DotNet.InternalAbstractions.RuntimeEnvironment;

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
#if NET46
                    Process.Start(url);
#else
                    Process.Start("cmd", $"/C start {url}");
#endif
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