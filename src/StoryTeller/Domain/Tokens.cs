using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.Execution;

namespace StoryTeller.Domain
{
    public class Token
    {
        public ITestPart Part { get; set; }
        public string Description { get; set; }

        public bool Equals(Token other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.Part, Part) && Equals(other.Description, Description);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Token)) return false;
            return Equals((Token)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Part != null ? Part.GetHashCode() : 0) * 397) ^
                       (Description != null ? Description.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Part: {0}, Path: {1}", Part, Description);
        }
    }

    public class TestProgression : IEnumerable<Token>
    {
        private readonly Test _test;
        private readonly List<Token> _tokens = new List<Token>();
        private readonly Counts _counts;
        private Token _current;
        private int _progress;

        public TestProgression()
            : this(new Test("FAKE"), new Counts())
        {
        }


        public TestProgression(Test test, Counts counts)
        {
            _current = new Token
            {
                Part = null,
                Description = "Test:  " + test.LocatorPath()
            };
            _test = test;
            _counts = counts;
            test.AcceptVisitor(new TokenizeTestVisitor(this));
        }

        public int Progress { get { return _progress; } }

        public int Count { get { return _tokens.Count; } }

        public Token this[int index] { get { return _tokens[index]; } }

        #region IEnumerable<Token> Members

        public IEnumerator<Token> GetEnumerator()
        {
            return _tokens.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        #endregion

        public void IncrementProgress(ITestPart part)
        {
            _progress++;
        }

        public void AddToken(Token token)
        {
            _tokens.Add(token);
        }

        public int OneBasedIndexOf(ITestPart part)
        {
            int index = _tokens.FindIndex(t => t.Part == part);
            if (index >= 0)
            {
                return index + 1;
            }

            throw new ArgumentOutOfRangeException("Could not find this Part in the TokenizedTest");
        }

        public string PathOf(ITestPart part)
        {
            Token token = tokenFor(part);

            return token.Description;
        }

        private Token tokenFor(ITestPart part)
        {
            Token token = _tokens.Find(t => t.Part == part);
            if (token == null)
            {
                throw new ArgumentOutOfRangeException("Could not find this Part in the TokenizedTest");
            }
            return token;
        }


        public void Start(ITestPart part)
        {
            _current = tokenFor(part);
        }

        public TestStatusMessage BuildStatus()
        {
            return new TestStatusMessage
            {
                CompletedSteps = _progress,
                Counts = _counts,
                CurrentActivity = _current.Description,
                TestPath = _test.LocatorPath(),
                TotalSteps = Count,
                IsRunning = true
            };
        }
    }

    public class TokenizeTestVisitor : ITestVisitor
    {
        private readonly Stack<string> _sectionNames = new Stack<string>();
        private readonly TestProgression _testProgression;

        public TokenizeTestVisitor(TestProgression testProgression)
        {
            _testProgression = testProgression;
        }

        private string path { get { return _sectionNames.ToArray().Reverse().ToArray().Join("/"); } }

        #region ITestVisitor Members

        public void RunStep(IStep step)
        {
            var token = new Token
            {
                Part = step,
                Description = "Step:  {0}/{1}".ToFormat(path, step.GrammarKey)
            };

            _testProgression.AddToken(token);

            withName(step.GrammarKey, () => step.EachLeaf(readLeaf));
        }

        public void WriteTags(Tags tags)
        {
            
        }

        public void WriteComment(Comment comment)
        {
        }

        public void StartSection(Section section)
        {
            var token = new Token
            {
                Part = section,
                Description = "Section:  " + section.FixtureName
            };

            _sectionNames.Push(section.FixtureName);
            _testProgression.AddToken(token);
        }

        public void EndSection(Section section)
        {
            _sectionNames.Pop();
        }

        #endregion

        private void withName(string name, Action action)
        {
            _sectionNames.Push(name);

            action();

            _sectionNames.Pop();
        }

        private void readLeaf(string name, StepLeaf leaf)
        {
            withName(name, () => { leaf.AllSteps().Each(RunStep); });
        }
    }
}