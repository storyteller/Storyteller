using System;
using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;

namespace StoryTeller.Model
{
    // TODO -- Make an Ordered property here

    [Serializable]
    public class SetVerification : Table
    {
        public SetVerification()
        {
        }

        public SetVerification(string label, string leafName, IList<Cell> cells)
            : base(label, leafName, new List<Cell>(cells))
        {
        }

        public SetVerification(string label, string leafName, params Cell[] cells)
            : base(label, leafName, cells)
        {
        }

        public bool Ordered { get; set; }

        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            visitor.SetVerification(this, step);
        }

        public bool Equals(SetVerification obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;

            if (!Equals(obj.Label, Label)) return false;
            if (!Equals(obj.LeafName, LeafName)) return false;

            if (Cells.Count != obj.Cells.Count) return false;

            for (int i = 0; i < Cells.Count; i++)
            {
                if (!Cells[i].Equals(obj.Cells[i])) return false;
            }

            return true;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(SetVerification)) return false;
            return Equals((SetVerification)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (Label != null ? Label.GetHashCode() : 0);
                result = (result * 397) ^ (LeafName != null ? LeafName.GetHashCode() : 0);
                result = (result * 397) ^ (Cells != null ? Cells.GetHashCode() : 0);
                return result;
            }
        }
    }
}