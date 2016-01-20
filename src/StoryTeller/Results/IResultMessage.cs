namespace StoryTeller.Results
{
    public interface IResultMessage : IBatchedMessage
    {
        void Tabulate(Counts counts);

        // ReSharper disable once InconsistentNaming
        string id { get; set; }

        string type { get; }

        string spec { get; set; }
    }
}