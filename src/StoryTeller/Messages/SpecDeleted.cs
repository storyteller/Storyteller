namespace StoryTeller.Messages
{
    public class SpecDeleted : ClientMessage
    {
        public SpecDeleted() : base("spec-deleted")
        {
        }

        public string id { get; set; }

        protected bool Equals(SpecDeleted other)
        {
            return string.Equals(id, other.id);
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
            return (id != null ? id.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return string.Format("Spec Deleted: {0}", id);
        }
    }
}