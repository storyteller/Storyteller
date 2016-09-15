using System;
using System.Diagnostics;

namespace StoryTeller
{
    public static class ProcessLauncher
    {
        public static void GotoUrl(string url)
        {
            try
            {
                Process.Start(url);
            }
            catch (Exception)
            {
                try
                {
                    Process.Start(new ProcessStartInfo
                    {
                        UseShellExecute = false,
                        FileName = "open",
                        Arguments = url
                    });

                }
                catch (Exception)
                {
                    try
                    {
                        Process.Start(new ProcessStartInfo
                        {
                            UseShellExecute = false,
                            CreateNoWindow = false,
                            FileName = "cmd.exe",
                            Arguments = url
                        });
                    }
                    catch (System.Exception e2)
                    {
                        Console.WriteLine(e2);

                        ConsoleWriter.Write(ConsoleColor.Yellow, "Unable to launch the browser to " + url);
                        // Nothing
                    }

                }
            }





        }
    }
}