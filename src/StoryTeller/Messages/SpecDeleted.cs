using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class SpecDeleted : ClientMessage
    {
        public SpecDeleted(Suite hierarchy, string id) : base("spec-deleted")
        {
            this.hierarchy = hierarchy;
            this.id = id;
        }

        public Suite hierarchy { get; set; }
        public string id { get; set; }

        protected bool Equals(SpecDeleted other)
        {
            return Equals(hierarchy, other.hierarchy) && string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecDeleted) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((hierarchy != null ? hierarchy.GetHashCode() : 0)*397) ^ (id != null ? id.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return $"Spec Deleted: {id}";
        }
    }
}