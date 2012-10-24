using System;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Projects
{
    public interface IProjectPersistor
    {
        IProject LoadFromFile(string filename);
        void SaveHistory(IProjectHistory history);
        IProjectHistory LoadHistory();
        void SaveProject(IProject project);
    }

    public class ProjectPersistor : IProjectPersistor
    {
        public static readonly string HISTORY_FILE = "history.xml";
        private readonly FileSystem _system = new FileSystem();

        #region IProjectPersistor Members

        public IProject LoadFromFile(string filename)
        {
            return Project.LoadFromFile(filename);
        }

        public void SaveHistory(IProjectHistory history)
        {
            _system.PersistToFile(history, HISTORY_FILE);
        }

        public IProjectHistory LoadHistory()
        {
            try
            {
                return _system.FileExists(HISTORY_FILE)
                           ? _system.LoadFromFile<ProjectHistory>(HISTORY_FILE)
                           : new ProjectHistory();
            }
            catch (Exception)
            {
                return new ProjectHistory();
            }
        }

        public void SaveProject(IProject project)
        {
            _system.PersistToFile(project, project.FileName);
        }

        #endregion

        public static void DeleteHistoryFile()
        {
            new FileSystem().DeleteFile(HISTORY_FILE);
        }
    }
}