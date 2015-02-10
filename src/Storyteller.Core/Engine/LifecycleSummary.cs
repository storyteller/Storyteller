using Storyteller.Core.Model;

namespace Storyteller.Core.Engine
{
    public class LifecycleSummary
    {
        public Lifecycle Lifecycle;
        public int Successful;
        public int Failed;

        public override string ToString()
        {
            return string.Format("Lifecycle: {0}, {1} successful, {2} failed", Lifecycle, Successful, Failed);
        }
    }
}