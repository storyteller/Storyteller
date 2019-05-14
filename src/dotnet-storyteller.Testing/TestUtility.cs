using System;
using System.Diagnostics;

namespace dotnet_storyteller.Testing
{
    public static class TestUtility
    {
        public static void CleanUpHangingProcesses()
        {
            cleanUp("StoryTeller.Gallery");
            cleanUp("StoryTeller.Samples");
            cleanUp("BadSystem");
            cleanUp("BlowsUp");
        }

        private static void cleanUp(string name)
        {
            foreach (var process in Process.GetProcessesByName(name))
            {
                Console.WriteLine($"Killing a hanging {name} process");
                process.Kill();
            }
        }
    }
}