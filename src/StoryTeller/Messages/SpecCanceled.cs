namespace StoryTeller.Messages
{
    public class SpecCanceled : ClientMessage
    {
        public string id;

        public SpecCanceled(string id) : base("spec-canceled")
        {
            this.id = id;
        }

        protected bool Equals(SpecCanceled other)
        {
            return string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecCanceled) obj);
        }

        public override int GetHashCode()
        {
            return (id != null ? id.GetHashCode() : 0);
        }
    }
}