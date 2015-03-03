using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    public class BatchRecord
    {
        public SpecNode header;
        public SpecResults results;
        public Specification specification;

        public bool WasSuccessful()
        {
            return results.Counts.WasSuccessful();
        }

        public bool HasResults()
        {
            return results != null;
        }
    }
}