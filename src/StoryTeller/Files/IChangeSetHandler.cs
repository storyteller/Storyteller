namespace StoryTeller.Files
{
    public interface IChangeSetHandler
    {
        void Handle(ChangeSet changes);
    }
}