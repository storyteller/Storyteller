using ShadeTree.Validation;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Projects
{
    public interface IProjectScreen
    {
        void BindTo(Project project);
        void ShowErrorMessages(ProjectValidationMessages notification);
    }
}