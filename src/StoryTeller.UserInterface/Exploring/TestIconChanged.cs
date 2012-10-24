using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    public class TestIconChanged
    {
        private readonly Icon _icon;
        private readonly Test _test;

        public TestIconChanged(Test test, Icon icon)
        {
            _test = test;
            _icon = icon;
        }

        public Test Test { get { return _test; } }

        public Icon Icon { get { return _icon; } }

        public bool Equals(TestIconChanged obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._test, _test) && Equals(obj._icon, _icon);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TestIconChanged)) return false;
            return Equals((TestIconChanged) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((_test != null ? _test.GetHashCode() : 0)*397) ^ (_icon != null ? _icon.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Test: {0}, Icon: {1}", _test, _icon);
        }
    }
}