using System;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Tests
{
    public abstract class TestMode
    {
        private readonly Mode _mode;

        protected TestMode(Mode mode)
        {
            _mode = mode;
        }

        public Mode Mode { get { return _mode; } }
        public abstract object ContentView { get; }

        public abstract void Refresh();

        public abstract bool IsEnabled(Test test);

        public virtual bool ApplyChanges()
        {
            return true;
        }
    }
}