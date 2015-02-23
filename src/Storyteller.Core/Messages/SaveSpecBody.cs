using Storyteller.Core.Model;

namespace Storyteller.Core.Messages
{
    public class SaveSpecBody : ClientMessage
    {
        public SaveSpecBody() : base("save-spec-body")
        {
        }

        public string id;
        public string revision;
        public Specification spec;
        public string time = DateTime.Now.ToString("t");
    }

    public class SpecBodySaved : ClientMessage
    {
        public SpecBodySaved() : base("spec-body-saved")
        {
        }

        public string id;
        public string revision;


        protected bool Equals(SpecBodySaved other)
        {
            return string.Equals(id, other.id) && string.Equals(revision, other.revision);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecBodySaved) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((id != null ? id.GetHashCode() : 0)*397) ^ (revision != null ? revision.GetHashCode() : 0);
            }
        }
    }
}