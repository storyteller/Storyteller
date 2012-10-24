using StoryTeller.Domain;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Projects
{
    public interface IProjectController : IStartable
    {
        bool LoadProject(ProjectToken projectToken);
        void StartNewProject(IProject project);
        void CreateNewProject();
        void LoadExistingProject();
        void SaveProject(IProject project);
    }
}