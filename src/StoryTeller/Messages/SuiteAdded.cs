using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class SuiteAdded : ClientMessage
    {
        public readonly Suite hierarchy;

        public SuiteAdded(Suite hierarchy) : base("suite-added")
        {
            this.hierarchy = hierarchy;
        }

        protected bool Equals(SuiteAdded other)
        {
            return Equals(hierarchy, other.hierarchy);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SuiteAdded) obj);
        }

        public override int GetHashCode()
        {
            return (hierarchy != null ? hierarchy.GetHashCode() : 0);
        }
    }


}