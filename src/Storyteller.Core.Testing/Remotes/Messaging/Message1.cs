namespace Storyteller.Core.Testing.Remotes.Messaging
{
    public class Message1
    {
        public string Name { get; set; }

        protected bool Equals(Message1 other)
        {
            return string.Equals(Name, other.Name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Message1) obj);
        }

        public override int GetHashCode()
        {
            return (Name != null ? Name.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return string.Format("Name: {0}", Name);
        }
    }
}