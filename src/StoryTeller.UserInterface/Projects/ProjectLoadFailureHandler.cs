using StoryTeller.UserInterface.Dialogs;
using StoryTeller.UserInterface.Handlers;

namespace StoryTeller.UserInterface.Projects
{
    public interface IProjectLoadFailureHandler : IStartable, IHandler
    {
        string ErrorText { get; }
        void Handle(ProjectLoadFailureMessage projectLoadFailureMessage);
        ProjectToken ProjectToken { get; }
    }

    public class ProjectLoadFailureHandler : IListener<ProjectLoadFailureMessage>, IProjectLoadFailureHandler
    {
        private readonly IDialogLauncher _launcher;

        public ProjectLoadFailureHandler(IDialogLauncher launcher)
        {
            _launcher = launcher;
        }

        public void Handle(ProjectLoadFailureMessage projectLoadFailureMessage)
        {
            ErrorText = projectLoadFailureMessage.ErrorMessage;
            ProjectToken = projectLoadFailureMessage.ProjectToken;
            _launcher.LaunchForCommand<IProjectLoadFailureHandler>(this);
        }

        public ProjectToken ProjectToken { get; private set; }

        public void Start()
        {
        }

        public string ErrorText { get; private set; }
    }
}