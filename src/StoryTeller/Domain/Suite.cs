using System;
using System.Collections.Generic;
using System.Linq;

namespace StoryTeller.Domain
{
    public class Suite : INamedItem, IComparable<Suite>
    {
        private readonly List<Suite> _suites = new List<Suite>();
        private readonly List<Test> _tests = new List<Test>();

        // Testing only
        public Suite()
            : this(Guid.NewGuid().ToString())
        {
        }

        public Suite(string name)
        {
            Name = name;
        }

        public Suite Parent { get; set; }

        public Suite[] ChildSuites { get { return _suites.OrderBy(x => x.Name).ToArray(); } }

        public Test[] Tests { get { return _tests.ToArray(); } }

        #region IComparable<Suite> Members

        public int CompareTo(Suite other)
        {
            if (other == null) return 0;
            return Name.CompareTo(other.Name);
        }

        #endregion

        #region INamedItem Members

        public string Name { get; set; }

        public virtual TPath GetPath()
        {
            var path = new TPath(Name);
            Suite parent = Parent;
            while (parent != null && !(parent is Hierarchy))
            {
                path = path.Push(parent.Name);
                parent = parent.Parent;
            }

            return path;
        }

        public virtual string GetProjectName()
        {
            Suite parent = Parent;
            string name = null;
            while (parent != null)
            {
                name = parent.Name;
                parent = parent.Parent;
            }
            return name;
        }

        IEnumerable<Test> INamedItem.AllTests
        {
            get { return GetAllTests(); }
        }

        #endregion

        public string GetFolder()
        {
            return GetPath().GetFolder();
        }

        public void AddTest(Test test)
        {
            test.SetParent(this);
            _tests.Add(test);
        }

        public void AddSuite(Suite suite)
        {
            suite.Parent = this;
            _suites.Add(suite);
        }

        public bool Contains(Test test)
        {
            if (_tests.Contains(test))
            {
                return true;
            }

            foreach (Suite child in _suites)
            {
                if (child.Contains(test)) return true;
            }

            return false;
        }

        public bool Contains(Suite child)
        {
            return _suites.Contains(child);
        }

        public Suite FindSuite(string name)
        {
            var path = new TPath(name);
            return FindSuite(path);
        }

        public Suite FindSuite(TPath path)
        {
            if (path.IsEnd)
            {
                return _suites.FirstOrDefault(x => x.Name == path.Name);
            }

            Suite child = FindSuite(path.Next);
            return child == null ? null : child.FindSuite(path.Pop());
        }

        public Test FindTest(string name)
        {
            var path = new TPath(name);
            return FindTest(path);
        }

        private Test FindTest(TPath path)
        {
            if (path.IsEnd)
            {
                return _tests.FirstOrDefault(x => x.Name == path.Name);
            }

            Suite child = FindSuite(path.Next);
            return child == null ? null : child.FindTest(path.Pop());
        }

        protected Suite findOrCreateSuite(TPath path)
        {
            Suite child = FindSuite(path.Next);
            if (child == null)
            {
                child = new Suite(path.Next);
                AddSuite(child);
            }

            return path.IsEnd ? child : child.findOrCreateSuite(path.Pop());
        }

        public override string ToString()
        {
            return string.Format("Suite:{0}", Name);
        }

        public Suite Add(Action<AddExpression> action)
        {
            action(new AddExpression(this));
            return this;
        }

        public IEnumerable<Test> GetAllTests()
        {
            var visitor = new TestGatherer();

            new SuiteNavigator().Visit(this, visitor);

            return visitor.Tests;
        }

        public void Remove(Test test)
        {
            _tests.Remove(test);
        }

        public bool Equals(Suite other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.Name, Name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (Suite)) return false;
            return Equals((Suite) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Name != null ? Name.GetHashCode() : 0)*397) ^ (Parent != null ? Parent.GetHashCode() : 0);
            }
        }

        #region Nested type: AddExpression

        public class AddExpression
        {
            private readonly Suite _parent;

            public AddExpression(Suite parent)
            {
                _parent = parent;
            }

            public Suite Suite(string suiteName)
            {
                var child = new Suite(suiteName);
                _parent.AddSuite(child);

                return child;
            }
        }

        #endregion

        #region Nested type: TestGatherer

        public class TestGatherer : IHierarchyVisitor
        {
            private readonly List<Test> _tests = new List<Test>();

            public List<Test> Tests { get { return _tests; } }

            #region IHierarchyVisitor Members

            public void StartSuite(Suite suite)
            {
            }

            public void EndSuite(Suite suite)
            {
            }

            public void Test(Test test)
            {
                _tests.Add(test);
            }

            #endregion
        }

        #endregion

    }
}