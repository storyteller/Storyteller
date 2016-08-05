namespace ST.Files
{
    public interface IChangeSetHandler
    {
        void Handle(ChangeSet changes);
    }
}