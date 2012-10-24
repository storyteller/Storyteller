using System;
using FubuCore;

namespace StoryTeller.Engine
{
    [Serializable]
    public class Frame
    {
        private string _exceptionText = String.Empty;
        private Frame _next;
        public string ExceptionText { get { return _exceptionText; } }

        public bool HasErrors()
        {
            return _exceptionText != String.Empty;
        }

        public void Clear()
        {
            _next = null;
            _exceptionText = String.Empty;
        }

        public void AppendException(string text)
        {
            if (_exceptionText != String.Empty)
            {
                _exceptionText += "\n";
            }

            _exceptionText += text;
        }

        public Frame Next()
        {
            if (_next == null)
            {
                _next = new Frame();
            }

            return _next;
        }

        public void Collapse()
        {
            if (_next != null)
            {
                _next.Collapse();

                if (_next.ExceptionText.IsNotEmpty())
                {
                    AppendException(_next.ExceptionText);
                }
            }

            _next = null;            
        }
    }
}