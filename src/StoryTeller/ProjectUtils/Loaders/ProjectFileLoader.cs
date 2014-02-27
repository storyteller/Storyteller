using System.IO;
using FubuCore;
using StoryTeller.Workspace;

namespace StoryTeller.ProjectUtils.Loaders
{
    public class ProjectFileLoader : IProjectLoader
    {
        private readonly IFileSystem _fileSystem;

        public ProjectFileLoader(IFileSystem fileSystem)
        {
            _fileSystem = fileSystem;
        }

        public bool Matches(string path)
        {
            return _fileSystem.IsFile(path);
        }

        public IProject Load(string path)
        {
            var project = _fileSystem.LoadFromFile<Project>(path);
            project.ProjectFolder = Path.GetDirectoryName(path);
            project.FileName = path;

            return project;
        }
    }
}