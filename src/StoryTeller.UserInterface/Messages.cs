using StoryTeller.Domain;

namespace StoryTeller.UserInterface
{
    public class RenameTestRequest
    {
        public string NewName { get; set; }
        public Test Test { get; set; }

        public bool Equals(RenameTestRequest other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.NewName, NewName) && Equals(other.Test, Test);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (RenameTestRequest)) return false;
            return Equals((RenameTestRequest) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((NewName != null ? NewName.GetHashCode() : 0)*397) ^ (Test != null ? Test.GetHashCode() : 0);
            }
        }
    }

    public class TestRenamed
    {
        public Test Test { get; set; }

        public bool Equals(TestRenamed other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.Test, Test);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TestRenamed)) return false;
            return Equals((TestRenamed) obj);
        }

        public override int GetHashCode()
        {
            return (Test != null ? Test.GetHashCode() : 0);
        }
    }


    public class DeleteTestMessage
    {
        private readonly Suite _parent;
        private readonly Test _test;

        public DeleteTestMessage(Test test)
        {
            _test = test;
            _parent = test.Parent;
        }

        public Suite Parent { get { return _parent; } }

        public Test Test { get { return _test; } }

        public bool Equals(DeleteTestMessage other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other._test, _test);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (DeleteTestMessage)) return false;
            return Equals((DeleteTestMessage) obj);
        }

        public override int GetHashCode()
        {
            return (_test != null ? _test.GetHashCode() : 0);
        }
    }


    public class SaveTestMessage
    {
        private readonly Test _test;

        public SaveTestMessage(Test test)
        {
            _test = test;
        }

        public Test Test { get { return _test; } }

        public bool Equals(SaveTestMessage obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._test, _test);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (SaveTestMessage)) return false;
            return Equals((SaveTestMessage) obj);
        }

        public override int GetHashCode()
        {
            return (_test != null ? _test.GetHashCode() : 0);
        }
    }

    public class UserScreenActivation
    {
    }

    public class OpenItemMessage
    {
        private readonly INamedItem _item;

        public OpenItemMessage(INamedItem item)
        {
            _item = item;
        }

        public INamedItem Item { get { return _item; } }

        public bool Equals(OpenItemMessage other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other._item, _item);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (OpenItemMessage)) return false;
            return Equals((OpenItemMessage) obj);
        }

        public override int GetHashCode()
        {
            return (_item != null ? _item.GetHashCode() : 0);
        }
    }

    public class SuiteAddedMessage
    {
        public Suite NewSuite { get; set; }

        public bool Equals(SuiteAddedMessage other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.NewSuite, NewSuite);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (SuiteAddedMessage)) return false;
            return Equals((SuiteAddedMessage) obj);
        }

        public override int GetHashCode()
        {
            return (NewSuite != null ? NewSuite.GetHashCode() : 0);
        }
    }

    public class TestAddedMessage
    {
        public TestAddedMessage(Test test)
        {
            Test = test;
        }

        public Test Test { get; set; }

        public bool Equals(TestAddedMessage obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Test, Test);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TestAddedMessage)) return false;
            return Equals((TestAddedMessage) obj);
        }

        public override int GetHashCode()
        {
            return (Test != null ? Test.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return string.Format("Test: {0}", Test);
        }
    }
}