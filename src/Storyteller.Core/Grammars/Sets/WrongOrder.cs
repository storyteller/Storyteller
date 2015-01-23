namespace Storyteller.Core.Grammars.Sets
{
    public class WrongOrder
    {
        public int actual;
        public string id;

        public WrongOrder(string id, int actual)
        {
            this.id = id;
            this.actual = actual;
        }

        protected bool Equals(WrongOrder other)
        {
            return actual == other.actual && string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((WrongOrder) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return (actual*397) ^ (id != null ? id.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Order: {0}, Id: {1}", actual, id);
        }
    }
}