using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore.Conversion;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Model
{
    [Serializable]
    public class FixtureDto
    {
        public string Name;
        public string Namespace;
        public string Fullname;

        public bool Equals(FixtureDto other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.Name, Name) && Equals(other.Namespace, Namespace) && Equals(other.Fullname, Fullname);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (FixtureDto)) return false;
            return Equals((FixtureDto) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (Name != null ? Name.GetHashCode() : 0);
                result = (result*397) ^ (Namespace != null ? Namespace.GetHashCode() : 0);
                result = (result*397) ^ (Fullname != null ? Fullname.GetHashCode() : 0);
                return result;
            }
        }
    }

    [Serializable]
    public class FixtureLibrary : IFixtureNode
    {
        private readonly Cache<string, FixtureStructure> _fixtures =
            new Cache<string, FixtureStructure>(key => new FixtureStructure(key)
            {
                Description = key
            });

        public FixtureDto[] AllFixtures { get; set; }
        public IEnumerable<FixtureStructure> ActiveFixtures { get { return _fixtures.OrderBy(x => x.Name); } }

        #region IFixtureNode Members

        public string Name { get { return "Fixtures"; } }

        public TPath GetPath()
        {
            return TPath.Empty;
        }

        public IEnumerable<Test> AllTests
        {
            get { throw new NotImplementedException(); }
        }

        public void ModifyExampleTest(Test example)
        {
            example.Name = Label;
        }

        public IEnumerable<GrammarError> AllErrors()
        {
            var list = new List<GrammarError>();
            _fixtures.Each(x => list.AddRange(x.AllErrors()));
            return list;
        }

        public string Label { get { return "All Fixtures"; } }

        public string Description { get { return string.Empty; } }

        #endregion

        public FixtureStructure FixtureFor(string name)
        {
            return _fixtures[name];
        }

        public IFixtureNode Find(TPath path)
        {
            if (path.IsRoot)
            {
                return this;
            }

            FixtureStructure fixture = FixtureFor(path.Next);

            return path.IsEnd ? fixture : (IFixtureNode) fixture.GrammarFor(path.Pop().Next);
        }

        public IEnumerable<FixtureStructure> PossibleFixturesFor(Test test)
        {
            return _fixtures.Where(x => x.CanChoose(test)).OrderBy(x => x.Name);
        }

        public bool HasErrors()
        {
            foreach (FixtureStructure graph in _fixtures)
            {
                if (graph.AllErrors().Count() > 0)
                {
                    return true;
                }
            }

            return false;
        }

        public bool HasFixture(string fixtureName)
        {
            return _fixtures.Has(fixtureName);
        }

        public FixtureStructure BuildTopLevelGraph()
        {
            var fixture = new FixtureStructure("Test");
            fixture.Policies.SelectionMode = SelectionMode.OneOrMore;
            fixture.Policies.AddGrammarText = "Add Section";

            _fixtures.Where(x => !x.Policies.IsPrivate).Each(x =>
            {
                var grammar = new EmbeddedSection(x, x.Label ?? x.Name, x.Name);
                grammar.Style = EmbedStyle.TitledAndIndented;
                fixture.AddStructure(x.Name, grammar);
            });

            return fixture;
        }
    }
}