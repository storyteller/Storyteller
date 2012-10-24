using System;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Model
{
    [Serializable]
    public class TextInput : SentencePart
    {
        private readonly Cell _cell;

        public TextInput(Cell cell)
        {
            _cell = cell;
        }

        public Cell Cell { get { return _cell; } }

        #region SentencePart Members

        public void AcceptVisitor(ISentenceVisitor visitor)
        {
            visitor.Input(this);
        }

        #endregion

        public bool Equals(TextInput obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._cell, _cell);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TextInput)) return false;
            return Equals((TextInput) obj);
        }

        public override int GetHashCode()
        {
            return (_cell != null ? _cell.GetHashCode() : 0);
        }

        public bool IsOptional()
        {
            return _cell.DefaultValue.IsNotEmpty();
        }
    }
}