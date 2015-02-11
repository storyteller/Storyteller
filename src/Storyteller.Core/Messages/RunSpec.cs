using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public class RunSpec : ClientMessage
    {
        public RunSpec() : base("run-spec")
        {
        }

        public string id;
    }
}