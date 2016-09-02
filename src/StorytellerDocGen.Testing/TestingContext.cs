using System;
using Baseline;

namespace StorytellerDocGen.Testing
{
    public static class TestingContext
    {
        public static string FindParallelDirectory(string projectName)
        {
            var path = ".".ToFullPath();
            while (!path.EndsWith("src"))
            {
                path = path.ParentDirectory();
            }

            path = path.AppendPath(projectName);

            return path;
        }

        public static string FindProjectFolder()
        {
            var path = ".".ToFullPath();
            while (!path.EndsWith("Storyteller.Testing", StringComparison.OrdinalIgnoreCase))
            {
                path = path.ParentDirectory();
            }

            return path;
        }

        public static string FindClientFolder()
        {
            var path = ".".ToFullPath();
            while (!path.EndsWith("src"))
            {
                path = path.ParentDirectory();
            }

            path = path.ParentDirectory().AppendPath("client");

            return path;
        }
    }
}