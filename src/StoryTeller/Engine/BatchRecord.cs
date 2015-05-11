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
            return string.Format("Spec {0}, results: {1}, was aborted: {2}", specification.path, results.Counts, results.WasAborted);
        }
    }
}