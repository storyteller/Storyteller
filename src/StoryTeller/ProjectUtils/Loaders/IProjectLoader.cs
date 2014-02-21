using StoryTeller.Workspace;

namespace StoryTeller.ProjectUtils.Loaders
{
    public interface IProjectLoader
    {
        bool Matches(string path);
        IProject Load(string path);
    }
}