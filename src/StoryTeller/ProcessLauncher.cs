using System;
using System.Diagnostics;
using System.IO;
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
#if NET46
                    Process.Start(url);
#else
                    Process.Start("cmd", $"/C start {url}");
#endif
                }
                else
                {
                    Console.WriteLine("Trying to open url " + url);

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


            try
            {
                if (RuntimeEnvironment.OperatingSystemPlatform == Platform.Windows)
                {
#if NET46
                    if (file.Contains(" "))
                        file = "\"" + file + "\"";
                    Process.Start(file);
#else


                    var workingDirectory = Baseline.StringExtensions.ParentDirectory(file);
//                    if (workingDirectory.Contains(" "))
//                    {
//                        workingDirectory = "\"" + workingDirectory + "\"";
//                    }

                    Process.Start(new ProcessStartInfo
                    {
                        UseShellExecute = false,
                        FileName = "cmd",
                        WorkingDirectory = workingDirectory,
                        Arguments = $"start /D {Path.GetFileName(file)}"
                    });
#endif
                }
                else
                {
                    Console.WriteLine("Trying to open file " + file);

                    if (file.Contains(" "))
                        file = "\"" + file + "\"";

                    Process.Start(new ProcessStartInfo
                    {
                        
                        UseShellExecute = false,
                        FileName = "open",
                        Arguments = file
                    });
                }
            }
            catch (Exception)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, "Unable to launch the browser to " + file);
            }
        }
    }
}