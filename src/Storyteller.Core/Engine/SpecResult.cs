using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    public class SpecResult
    {
        public SpecNode node;
        public Counts counts;

        public bool WasSuccessful()
        {
            return counts.WasSuccessful();
        }
    }
}