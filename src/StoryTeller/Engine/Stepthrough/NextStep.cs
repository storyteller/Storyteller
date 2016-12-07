using StoryTeller.Messages;

namespace StoryTeller.Engine.Stepthrough
{
    public class NextStep : ClientMessage
    {
        public string id;
        public object position;
        public string spec;

        public NextStep(string spec, ILineExecution next) : this()
        {
            id = next.Id;
            position = next.Position;
            this.spec = spec;
        }

        public NextStep() : base("next-step")
        {
        }
    }

}