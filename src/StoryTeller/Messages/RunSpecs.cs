using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class RunSpecs : ClientMessage
    {
        public RunSpecs()
            : base("run-specs")
        {
        }

        public string[] list;
        public Specification[] specs;
    }
}