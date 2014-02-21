using System.IO;
using System.Linq;
using FubuCore;
using StoryTeller.Workspace;

namespace StoryTeller.ProjectUtils.Loaders
{
    public class ProjectDirectoryLoader : IProjectLoader
    {
        private readonly IFileSystem _fileSystem;

        public ProjectDirectoryLoader(IFileSystem fileSystem)
        {
            _fileSystem = fileSystem;
        }

        public bool Matches(string path)
        {
            return _fileSystem.DirectoryExists(path);
        }

        public IProject Load(string path)
        {
            var project = new Project
            {
                ProjectFolder = path,
                Name = Path.GetFileName(path)
            };

            var files = _fileSystem.FindFiles(path, FileSet.Shallow("*.config"));
            var candidates = files.Where(x => Path.GetFileName(x).EqualsIgnoreCase("App.config") || Path.GetFileName(x).EqualsIgnoreCase("Web.config"));
            if (candidates.Any())
            {
                project.ConfigurationFileName = candidates.First().ToFullPath();
            }
            else
            {
                var possibleFile = Path.GetFileName(path) + ".dll.config";
                candidates = _fileSystem.FindFiles(path, FileSet.Deep(possibleFile));
                if (candidates.Any())
                {
                    project.ConfigurationFileName = candidates.First().ToFullPath();
                }
            }


            // Auto-find the config file here.


            return project;
        
            
        }
    }
}