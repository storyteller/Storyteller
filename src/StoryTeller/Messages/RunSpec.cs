using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Messages
{

    public class RunSpec : ClientMessage
    {
        public RunSpec() : base("run-spec")
        {
        }

        public string id;
        public Specification spec;
        public string revision;

        public ExecutionMode mode = ExecutionMode.normal;
    }
}