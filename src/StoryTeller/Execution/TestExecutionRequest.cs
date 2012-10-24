using System;
using StoryTeller.Domain;
using StoryTeller.Persistence;

namespace StoryTeller.Execution
{
    [Serializable]
    public class TestExecutionRequest
    {
        // TODO -- leave this here!
        private bool _breakOnExceptions;
        private bool _breakOnWrongs;
        [NonSerialized] private Test _test;
        private string _testJson;
        private int _timeoutInSeconds;

        public TestExecutionRequest()
        {
            TimeoutInSeconds = 60;
        }

        public TestExecutionRequest(Test test, TestStopConditions conditions)
            : this()
        {
            Test = test;
            TimeoutInSeconds = conditions.TimeoutInSeconds;
            BreakOnExceptions = conditions.BreakOnExceptions;
            BreakOnWrongs = conditions.BreakOnWrongs;
        }

        public Test Test
        {
            get
            {
                if (_test == null)
                {
                    _test = new TestReader().ReadFromJson(_testJson);
                }
                return _test;
            }
            set
            {
                _test = value;
                _testJson = new TestWriter().WriteToJson(value);
            }
        }

        public int TimeoutInSeconds { get { return _timeoutInSeconds; } set { _timeoutInSeconds = value; } }

        public bool BreakOnExceptions { get { return _breakOnExceptions; } set { _breakOnExceptions = value; } }

        public bool BreakOnWrongs { get { return _breakOnWrongs; } set { _breakOnWrongs = value; } }

        public bool Equals(TestExecutionRequest other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other._test, _test) && other.TimeoutInSeconds == TimeoutInSeconds &&
                   other.BreakOnExceptions.Equals(BreakOnExceptions) && other.BreakOnWrongs.Equals(BreakOnWrongs);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TestExecutionRequest)) return false;
            return Equals((TestExecutionRequest) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (_test != null ? _test.GetHashCode() : 0);
                result = (result*397) ^ TimeoutInSeconds;
                result = (result*397) ^ BreakOnExceptions.GetHashCode();
                result = (result*397) ^ BreakOnWrongs.GetHashCode();
                return result;
            }
        }
    }
}