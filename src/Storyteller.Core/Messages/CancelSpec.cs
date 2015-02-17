namespace Storyteller.Core.Messages
{
    public class CancelSpec : ClientMessage
    {
        public CancelSpec() : base("cancel-spec")
        {
        }

        public string id;
    }

    public class CancelAllSpecs : ClientMessage
    {
        public CancelAllSpecs()
            : base("cancel-all-specs")
        {
        }

        public string[] list;
    }

    public class RunSpecs : ClientMessage
    {
        public RunSpecs()
            : base("run-specs")
        {
        }

        public string[] list;
    }
}