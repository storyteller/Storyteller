using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public class SpecChanged : ClientMessage
    {
        public SpecChanged() : base("spec-changed")
        {
        }

        public SpecNode node;

        protected bool Equals(SpecChanged other)
        {
            return Equals(node, other.node);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecChanged) obj);
        }

        public override int GetHashCode()
        {
            return (node != null ? node.GetHashCode() : 0);
        }
    }
}