namespace StoryTeller.UserInterface.Dialogs
{
    public interface IDialogLauncher
    {
        void LaunchForCommand<TCommand>(TCommand command);
        void LaunchForCommand<TCommand>();
        void LaunchDialog(ICommandDialog window);
    }
}