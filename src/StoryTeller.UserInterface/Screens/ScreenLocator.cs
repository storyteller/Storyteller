namespace StoryTeller.UserInterface.Screens
{
    public class ScreenLocator<T> : IScreenLocator<T>
    {
        private readonly T _subject;

        public ScreenLocator(T subject)
        {
            _subject = subject;
        }

        #region IScreenSubject<T> Members

        public bool Matches(IScreen screen)
        {
            var specific = screen as IScreen<T>;
            if (specific == null) return false;

            return specific.Subject.Equals(_subject);
        }

        public IScreen CreateScreen(IScreenFactory factory)
        {
            return factory.Build(_subject);
        }

        #endregion

        public bool Equals(ScreenLocator<T> other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other._subject, _subject);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (ScreenLocator<T>)) return false;
            return Equals((ScreenLocator<T>) obj);
        }

        public override int GetHashCode()
        {
            return _subject.GetHashCode();
        }
    }
}