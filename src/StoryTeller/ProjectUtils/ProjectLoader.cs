using System.Collections.Generic;
using System.Linq;
using FubuCore;
using StoryTeller.ProjectUtils.Loaders;
using StoryTeller.Workspace;
using FileSystem = FubuCore.FileSystem;

namespace StoryTeller.ProjectUtils
{
    public class ProjectLoader
    {
        public static IEnumerable<IProjectLoader> Loaders
        {
            get { return loaders ?? _defaultLoaders; }
        }

        private static readonly IEnumerable<IProjectLoader> _defaultLoaders =
            new List<IProjectLoader>
            {
                new ProjectDirectoryLoader(new FileSystem()),
                new ProjectFileLoader(new FileSystem())
            };

        private static IEnumerable<IProjectLoader> loaders;

        public static void UseLoaders(IEnumerable<IProjectLoader> stubLoaders)
        {
            loaders = stubLoaders;
        }

        public static IProject Load(string path, string compileTarget, string profile)
        {
            IProject project = Loaders.First(x => x.Matches(path))
                .Load(path);

            if (compileTarget.IsNotEmpty())
            {
                project.CompileTarget = compileTarget;
            }

            if (profile.IsNotEmpty())
            {
                project.Profile = profile;
            }

            return project;
        }

        public static void ResetLoaders()
        {
            loaders = null;
        }
    }
}