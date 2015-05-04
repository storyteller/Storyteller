using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class SpecData : ClientMessage
    {
        public SpecData() : base("spec-data")
        {
        }

        public string id;
        public Specification data;
        public SpecExecutionCompleted[] results;
    }
}