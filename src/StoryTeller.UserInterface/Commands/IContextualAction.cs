namespace StoryTeller.UserInterface.Commands
{
    public interface IContextualAction
    {
        Icon Icon { get; }
        string Description { get; }
        bool Enabled { get; }
        void Execute();
    }

    public interface IContextualAction<T> : IContextualAction
    {
    }

    public abstract class ContextualAction<T> : IContextualAction<T>
    {
        private readonly string _description;
        private readonly Icon _icon;
        private readonly T _subject;

        protected ContextualAction(T subject, Icon icon, string description)
        {
            _subject = subject;
            _icon = icon;
            _description = description;
        }

        protected T subject { get { return _subject; } }

        #region IContextualAction<T> Members

        public Icon Icon { get { return _icon; } }

        public string Description { get { return _description; } }

        public abstract bool Enabled { get; }
        public abstract void Execute();

        #endregion
    }
}