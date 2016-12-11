using StoryTeller.Messages;

namespace StoryTeller.Engine.Stepthrough
{
    public class NextStep : ClientMessage, UsedByUserInterface
    {
        public string id;
        public string position;
        public string spec;

        public NextStep(string spec, ILineExecution next) : this()
        {
            id = next.Id;
            position = next.Position?.ToString();
            this.spec = spec;
        }

        public NextStep() : base("next-step")
        {
        }
    }

}