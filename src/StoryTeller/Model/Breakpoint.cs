namespace StoryTeller.Model
{
    public class Breakpoint
    {
        public string id;
        public object position;

        public Breakpoint()
        {
        }

        public Breakpoint(string id, object position)
        {
            this.id = id;
            this.position = position;
        }

        public bool Matches(ILineExecution execution)
        {
            return execution.Position == position && execution.Id == id;
        }

        protected bool Equals(Breakpoint other)
        {
            return string.Equals(id, other.id) && Equals(position, other.position);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Breakpoint)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((id != null ? id.GetHashCode() : 0) * 397) ^ (position != null ? position.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return $"Breakpoint, Id: {id}, Position: {position}";
        }

        public bool Matches(string id, object position)
        {
            if (this.id != id) return false;

            if (this.position == null) return position == null;

            return this.position.Equals(position);
        }
    }
}