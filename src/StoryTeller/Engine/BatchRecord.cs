using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class BatchRecord
    {
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

        public override string ToString()
        {
            return $"Spec {specification.path}, results: {results.Counts}, was aborted: {results.WasAborted}";
        }
    }
}