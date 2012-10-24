using System;
using System.Collections.Generic;

namespace StoryTeller.UserInterface.Editing
{
    public class VersionHistory
    {
        private readonly Stack<string> _previous = new Stack<string>();
        private readonly Stack<string> _forward = new Stack<string>();

        public void Record(string json)
        {
            _previous.Push(json);
            _forward.Clear();
        }

        public void Revert()
        {
            string json = _previous.Pop();
            _forward.Push(json);
        }

        public void Forward()
        {
            string json = _forward.Pop();
            _previous.Push(json);
        }

        public string Current
        {
            get
            {
                return _previous.Peek();
            }
        }

        public bool CanGoBack
        {
            get
            {
                return _previous.Count > 1;
            }
        }


        public bool CanGoForward
        {
            get
            {
                return _forward.Count > 0;
            }
        }
    }
}