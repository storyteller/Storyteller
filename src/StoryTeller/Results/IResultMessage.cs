using StoryTeller.Messages;

namespace StoryTeller.Results
{
    public interface IResultMessage : IBatchedMessage, UsedByUserInterface
    {
        void Tabulate(Counts counts);

        // ReSharper disable once InconsistentNaming
        string id { get; set; }

        string type { get; }

        string spec { get; set; }
    }
}