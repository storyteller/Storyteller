using System;
using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class SpecSaved : ClientMessage
    {
        public SpecSaved() : base("spec-saved")
        {
        }

        public Specification spec;
        public string lastSaved = DateTime.Now.ToString("T");

        protected bool Equals(SpecSaved other)
        {
            return Equals(spec, other.spec);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecSaved) obj);
        }

        public override int GetHashCode()
        {
            return (spec != null ? spec.GetHashCode() : 0);
        }
    }
}