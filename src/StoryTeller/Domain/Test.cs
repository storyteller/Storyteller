using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.Persistence;
using StoryTeller.Workspace;

namespace StoryTeller.Domain
{
    public class Test : INamedItem, ITestPart, IPartHolder
    {
        protected readonly ITestPartCollection _parts;
        private string _fileName;
        private Lifecycle _lifecycle = Lifecycle.Acceptance;
        private string _name;

        public Test(string name, string suiteName, ITestPartCollection parts)
        {
            _parts = parts;
            _name = name;
            SuiteName = suiteName;
            NumberOfRetries = 5;
        }

        public Test(string name) : this(name, string.Empty, new DefaultTestPartcollection())
        {
        }


        public Test(string name, Action<Test> initialization)
            : this(name)
        {
            initialization(this);
        }

        public Lifecycle Lifecycle
        {
            get { return _lifecycle; }
            set { _lifecycle = value; }
        }

        public TestResult LastResult { get; set; }

        public string SuiteName { get; set; }
        public Suite Parent { get; private set; }
        public int NumberOfRetries { get; set; }
        public void SetParent(Suite parent)
        {
            Parent = parent;
            SuiteName = parent == null ? string.Empty : 
                string.Format("{0}/{1}", parent.GetProjectName(), 
                            parent.GetPath().Locator);
            SuiteName = SuiteName.Trim('/');
        }

        public string FileName
        {
            get
            {
                string filename = determineFilename();

                TPath path = GetPath();

                return Path.Combine(path.GetContainingFolder(), filename);
            }
            set { _fileName = value; }
        }

        private string determineFilename()
        {
            if (_fileName.IsNotEmpty())
            {
                return _fileName;
            }

            string filename = Name + ".xml";

            if(filename.Contains(" "))
            {
                filename = filename.Replace(' ', '_');
            }
            return filename;
        }

        public string WorkspaceName
        {
            get
            {
                if (Parent == null) return string.Empty;

                return GetPath().Workspace;
            }
        }


        public IList<ITestPart> Parts
        {
            get { return _parts.GetList(); }
        }

        public IEnumerable<ITestPart> Children
        {
            get { return _parts; }
        }

        public int StepCount()
        {
            return 0;
        }
        
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;

                Path.GetInvalidFileNameChars().Each(x => { _name = _name.Replace(x, ' '); });
            }
        }

        public TPath GetPath()
        {
            if (Parent is Suite)
            {
                return Parent.GetPath().Append(Name);
            }

            return new TPath(Name);
        }

        public IEnumerable<Test> AllTests
        {
            get { yield return this; }
        }


        public void AcceptVisitor(ITestVisitor visitor)
        {
            _parts.Each(x => x.AcceptVisitor(visitor));
        }

        public Tags AddTags(string text)
        {
            var tags = _parts.GetList().OfType<Tags>().FirstOrDefault();
            if (tags == null)
            {
                _parts.Add(new Tags(text));
            }
            else
            {
                tags.AddTag(text);
            }

            return tags;
        }


        public Tags GetTags()
        {
            var tags = _parts.GetList().OfType<Tags>();
            List<string> list = new List<string>();
            foreach(Tags setOfTags in tags)
            {
                list.AddRange(setOfTags.AllTags);
            }
            return new Tags(string.Join(",", list));
        }

        public void Toggle()
        {
            _lifecycle = Lifecycle == Lifecycle.Acceptance
                             ? Lifecycle.Regression
                             : Lifecycle.Acceptance;
        }

        public Test LifecycleIs(Lifecycle lifecycle)
        {
            _lifecycle = lifecycle;
            return this;
        }


        public Test Section<T>(Action<Section> action) where T : IFixture, new()
        {
            Section section = Domain.Section.For<T>();
            _parts.Add(section);

            action(section);

            return this;
        }


        public Section Section(string fixureName)
        {
            var section = new Section(fixureName);
            _parts.Add(section);

            return section;
        }

        public Test WithCounts(int rights, int wrongs, int syntaxErrors, int exceptions)
        {
            if (LastResult == null) LastResult = new TestResult {Counts = new Counts()};
            LastResult.Counts.Rights = rights;
            LastResult.Counts.Wrongs = wrongs;
            LastResult.Counts.SyntaxErrors = syntaxErrors;
            LastResult.Counts.Exceptions = exceptions;

            return this;
        }

        public Comment AddComment(string text)
        {
            var comment = new Comment
                              {
                                  Text = text
                              };
            _parts.Add(comment);

            return comment;
        }

        public bool Equals(Test obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Name, Name) && Equals(obj.SuiteName, SuiteName);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (Test)) return false;
            return Equals((Test) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Name != null ? Name.GetHashCode() : 0)*397) ^
                       (SuiteName != null ? SuiteName.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Name: {0}, Suite: {1}", Name, SuiteName);
        }

        public void RemoveParts(Predicate<ITestPart> filter)
        {
            _parts.RemoveAll(filter);
        }

        public string GetStatus()
        {
            if (!HasResult()) return string.Empty;

            if (LastResult.Counts.WasSuccessful())
            {
                return "Succeeded with {0} in {1} seconds".ToFormat(LastResult.Counts, LastResult.ExecutionTime);
            }

            return "Failed with {0} in {1} seconds".ToFormat(LastResult.Counts, LastResult.ExecutionTime);
        }

        public bool HasResult()
        {
            return LastResult != null;
        }

        public bool WasSuccessful()
        {
            return HasResult() ? LastResult.Counts.WasSuccessful() : false;
        }

        public void ApplyChanges(Test otherTest)
        {
            lock (_parts)
            {
                _parts.Clear();
                _parts.AddRange(otherTest._parts);
            }
        }

        public void Reset()
        {
            LastResult = null;
        }

        public bool IsEmpty()
        {
            return _parts.Find(p => p is Section) == null;
        }

        public string LocatorPath()
        {
            return GetPath().Locator;
        }

        public void Add(Section section)
        {
            _parts.Add(section);
        }

        public Test With(Section section)
        {
            Add(section);
            return this;
        }

        public Test Clone(string name)
        {
            XmlDocument document = new TestWriter().Write(this);
            Test clone = new TestReader().ReadTest(document.DocumentElement);
            clone.Name = name;

            return clone;
        }

        public void Add(Comment comment)
        {
            _parts.Add(comment);
        }

        public bool IsInWorkspace(string workspace)
        {
            if (Parent == null) return false;
            return GetPath().Workspace == workspace;
        }
    }
}