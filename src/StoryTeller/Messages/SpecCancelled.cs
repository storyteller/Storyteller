namespace StoryTeller.Messages
{
    public class SpecCancelled : ClientMessage
    {
        public string id;

        public SpecCancelled(string id) : base("spec-cancelled")
        {
            this.id = id;
        }

        protected bool Equals(SpecCancelled other)
        {
            return string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecCancelled) obj);
        }

        public override int GetHashCode()
        {
            return (id != null ? id.GetHashCode() : 0);
        }
    }
}