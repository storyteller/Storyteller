using Storyteller.Core.Model;

namespace Storyteller.Core.Messages
{
    public class RunSpec : ClientMessage
    {
        public RunSpec() : base("run-spec")
        {
        }

        public string id;
        public Specification spec;
    }
}