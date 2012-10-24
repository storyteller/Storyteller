using System;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    [Serializable]
    public class Label : SentencePart
    {
        private readonly string _text;

        public Label(string text)
        {
            _text = text;
        }

        public string Text { get { return _text; } }

        #region SentencePart Members

        public void ConfigureEditor(IStepEditor editor)
        {
            editor.Text(_text);
        }

        public void AcceptVisitor(ISentenceVisitor visitor)
        {
            visitor.Label(this);
        }

        #endregion

        public bool Equals(Label obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._text, _text);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Label)) return false;
            return Equals((Label)obj);
        }

        public override int GetHashCode()
        {
            return (_text != null ? _text.GetHashCode() : 0);
        }
    }
}