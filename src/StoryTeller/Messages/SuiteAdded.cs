namespace StoryTeller.Messages
{
    public class SuiteAdded : ClientMessage
    {
        public SuiteAdded() : base("suite-added")
        {
        }

        public string path;

        protected bool Equals(SuiteAdded other)
        {
            return string.Equals(path, other.path);
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
            return (path != null ? path.GetHashCode() : 0);
        }
    }


}