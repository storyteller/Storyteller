using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class SpecNodeChanged : ClientMessage
    {
        public SpecNodeChanged() : base("spec-node-changed")
        {
        }

        public SpecNode node;

        protected bool Equals(SpecNodeChanged other)
        {
            return Equals(node, other.node);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecNodeChanged) obj);
        }

        public override int GetHashCode()
        {
            return (node != null ? node.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return string.Format("Node changed: {0}", node);
        }
    }
}