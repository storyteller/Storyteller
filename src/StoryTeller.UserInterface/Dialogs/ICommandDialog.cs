namespace StoryTeller.UserInterface.Dialogs
{
    public interface ICommandDialog
    {
        string Title { get; }
    }

    public interface ICommandDialog<TCommand> : ICommandDialog
    {
    }
}