using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using FubuCore;
using StoryTeller.Engine;

namespace StoryTeller.Domain
{
    public class Section : ITestPart, IPartHolder
    {
        private readonly List<ITestPart> _parts = new List<ITestPart>();
        private FixtureLoader _loader;

        private Section()
        {
        }

        public Section(string fixtureName)
        {
            _loader = new FixtureKeyLoader(fixtureName, this);
        }

        public IList<ITestPart> Parts
        {
            get { return _parts; }
        }

        public string Description { get; set; }

        public string FixtureName { get { return _loader.GetName(); } }

        public string Label { get; set; }


        #region ITestPart Members

        public void AcceptVisitor(ITestVisitor visitor)
        {
            visitor.StartSection(this);

            _parts.ForEach(x => x.AcceptVisitor(visitor));

            visitor.EndSection(this);
        }

        public int StepCount()
        {
            return _parts.Sum(x => x.StepCount());
        }

        public IEnumerable<ITestPart> Children
        {
            get
            {
                foreach (ITestPart child in _parts)
                {
                    yield return child;

                    foreach (ITestPart descendent in child.Children)
                    {
                        yield return descendent;
                    }
                }
            }
        }

        #endregion

        public static Section For<T>() where T : IFixture, new()
        {
            var section = new Section();
            section._loader = new FixtureLoader<T>(section);

            return section;
        }

        public static Section For<T>(IList<ITestPart> list) where T : IFixture, new()
        {
            Section section = For<T>();
            section._parts.AddRange(list);

            return section;
        }

        public void StartFixture(ITestContext context)
        {
            _loader.LoadFixture(context);
        }

        public Section WithStep(string key, string data)
        {
            Step step = new Step(key).With(data);
            _parts.Add(step);

            return this;
        }

        public Section WithStep(string key, Action<Step> action)
        {
            var step = new Step(key);
            _parts.Add(step);

            action(step);

            return this;
        }

        public Section WithStep(string key)
        {
            var step = new Step(key);
            _parts.Add(step);

            return this;
        }

        public string GetName()
        {
            return Label ?? _loader.GetName();
        }

        public Section WithComment(string text)
        {
            var comment = new Comment
            {
                Text = text
            };
            _parts.Add(comment);

            return this;
        }

        public Section WithDescription(string text)
        {
            Description = text;
            return this;
        }



        public override string ToString()
        {
            return string.Format("Section: {0}", GetName());
        }

        #region Nested type: FixtureKeyLoader

        internal class FixtureKeyLoader : FixtureLoader
        {
            private readonly string _fixtureName;
            private readonly Section _section;

            public FixtureKeyLoader(string fixtureName, Section section)
            {
                _fixtureName = fixtureName;
                _section = section;
            }

            #region FixtureLoader Members

            public void LoadFixture(ITestContext context)
            {
                context.LoadFixture(_fixtureName, _section);
            }

            public string GetName()
            {
                return _fixtureName;
            }

            #endregion
        }

        #endregion

        #region Nested type: FixtureLoader

        internal interface FixtureLoader
        {
            void LoadFixture(ITestContext context);
            string GetName();
        }

        internal class FixtureLoader<T> : FixtureLoader where T : IFixture, new()
        {
            private readonly Section _section;

            public FixtureLoader(Section section)
            {
                _section = section;
            }

            #region FixtureLoader Members

            public void LoadFixture(ITestContext context)
            {
                context.LoadFixture<T>(_section);
            }

            public string GetName()
            {
                return typeof(T).GetFixtureAlias();
            }

            #endregion

        }

        #endregion
    }
}