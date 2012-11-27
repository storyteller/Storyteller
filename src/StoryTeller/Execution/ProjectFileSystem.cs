using System;
using System.Collections.Generic;
using FubuCore;

namespace StoryTeller.Execution
{
    public static class ProjectFileSystem
    {
        static ProjectFileSystem()
        {
            RootFolder = AppDomain.CurrentDomain.BaseDirectory.AppendPath("Tests");
        }

        public static string RootFolder { get; set; }

        public static IEnumerable<string> FindFiles(FileSet search)
        {
            return new FileSystem().FindFiles(RootFolder, search);
        }
    }
}