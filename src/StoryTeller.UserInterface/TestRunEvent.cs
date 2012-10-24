using StoryTeller.Domain;

namespace StoryTeller.UserInterface
{
    public enum TestState
    {
        NotQueued,
        Queued,
        Executing
    }

    public class TestRunEvent
    {
        private readonly TestState _state;
        private readonly Test _test;


        public TestRunEvent(Test test, TestState state)
        {
            _test = test;
            _state = state;
        }

        public bool IsRunning { get { return _state != TestState.NotQueued; } }

        public Test Test { get { return _test; } }
        public TestState State { get { return _state; } }
        public bool Completed { get; set; }

        public bool Equals(TestRunEvent other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other._test, _test) && Equals(other._state, _state) && other.Completed.Equals(Completed);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TestRunEvent)) return false;
            return Equals((TestRunEvent) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (_test != null ? _test.GetHashCode() : 0);
                result = (result*397) ^ _state.GetHashCode();
                result = (result*397) ^ Completed.GetHashCode();
                return result;
            }
        }

        public override string ToString()
        {
            return string.Format("Test: {0}, State: {1}", _test.Name, _state);
        }
    }
}