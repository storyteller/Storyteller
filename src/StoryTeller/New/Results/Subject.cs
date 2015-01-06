namespace StoryTeller.New.Results
{
    public class Subject
    {
        public string spec;
        public string identifier; // can be id.cell, id, or id.setup or id.teardown

        public Subject()
        {
        }

        protected bool Equals(Subject other)
        {
            return string.Equals(spec, other.spec) && string.Equals(identifier, other.identifier);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Subject) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((spec != null ? spec.GetHashCode() : 0)*397) ^ (identifier != null ? identifier.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Spec: {0}, Identifier: {1}", spec, identifier);
        }
    }
}