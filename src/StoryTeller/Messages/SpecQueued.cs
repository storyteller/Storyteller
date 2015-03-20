namespace StoryTeller.Messages
{
    public class SpecQueued : ClientMessage
    {
        public string id;

        public SpecQueued(string id) : base("spec-queued")
        {
            this.id = id;
        }

        protected bool Equals(SpecQueued other)
        {
            return string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecQueued) obj);
        }

        public override int GetHashCode()
        {
            return (id != null ? id.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return string.Format("SpecQueued: {0}", id);
        }
    }
}