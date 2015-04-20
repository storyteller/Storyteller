using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class HierarchyLoaded : ClientMessage
    {
        public Suite hierarchy;

        public HierarchyLoaded() : base("hierarchy-loaded")
        {
        }

        protected bool Equals(HierarchyLoaded other)
        {
            return Equals(hierarchy, other.hierarchy);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((HierarchyLoaded) obj);
        }

        public override int GetHashCode()
        {
            return (hierarchy != null ? hierarchy.GetHashCode() : 0);
        }
    }
}