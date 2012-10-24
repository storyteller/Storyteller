using System;
using StoryTeller.Model;

namespace StoryTeller.Execution
{
    [Serializable]
    public class BinaryRecycleFinished
    {
        private readonly FixtureLibrary _library;
        private readonly DateTime _time = DateTime.Now;

        public BinaryRecycleFinished(FixtureLibrary library)
        {
            _library = library;
        }

        public FixtureLibrary Library { get { return _library; } }
        public DateTime Time { get { return _time; } }
    }

    [Serializable]
    public class BinaryRecycleFailure
    {
        public string ErrorMessage { get; set; }
    }

    [Serializable]
    public class BinaryRecycleStarted
    {
    }

    [Serializable]
    public class BinaryRecycleMessage
    {
        public string Message { get; set; }

        public bool Equals(BinaryRecycleMessage other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.Message, Message);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(BinaryRecycleMessage)) return false;
            return Equals((BinaryRecycleMessage)obj);
        }

        public override int GetHashCode()
        {
            return (Message != null ? Message.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return string.Format("Recycling: {0}", Message);
        }
    }

    [Serializable]
    public class BinaryRecycleProcess
    {
        public string FixtureName { get; set; }
        public int Total { get; set; }
        public int Index { get; set; }

        public override string ToString()
        {
            return string.Format("Reading {0}, {1} of {2}", FixtureName, Total, Index);
        }

        public bool Equals(BinaryRecycleProcess other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.FixtureName, FixtureName) && other.Total == Total && other.Index == Index;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(BinaryRecycleProcess)) return false;
            return Equals((BinaryRecycleProcess)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (FixtureName != null ? FixtureName.GetHashCode() : 0);
                result = (result * 397) ^ Total;
                result = (result * 397) ^ Index;
                return result;
            }
        }
    }
}