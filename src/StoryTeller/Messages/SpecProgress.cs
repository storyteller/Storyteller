using StoryTeller.Results;

namespace StoryTeller.Messages
{
    public class SpecProgress : ClientMessage, IBatchedMessage, UsedByUserInterface
    {
        public string id;
        public Counts counts;
        public int step;
        public int total;

        public SpecProgress(string id, Counts counts, int step, int total) : base("spec-progress")
        {
            this.id = id;
            this.counts = counts;
            this.step = step;
            this.total = total;
        }
    }
}