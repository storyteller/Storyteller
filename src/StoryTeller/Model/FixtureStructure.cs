using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.Engine.Constraints;


namespace StoryTeller.Model
{
    public interface IFixtureStructure
    {
        string FixtureClassName { get; set; }
        string FixtureNamespace { get; set; }
        int GrammarCount { get; }
        IPolicies Policies { get; set; }
        IEnumerable<GrammarError> Errors { get; }
        IEnumerable<GrammarStructure> Grammars { get; }
        bool IsAFixture();
        Section CreateExample();
        GrammarStructure GrammarFor(string grammarKey);
        void AddStructure(string grammarKey, GrammarStructure structure);
        IEnumerable<GrammarStructure> TopLevelGrammars();
        IEnumerable<GrammarStructure> PossibleGrammarsFor(IPartHolder holder);
        bool HasGrammar(string key);
        bool Equals(FixtureStructure obj);
        void LogError(Exception exception);
        void LogError(GrammarError error);
        bool CanChoose(Test test);
        bool IsSingleSelection();
        bool IsMandatoryAutoSelectGrammar(GrammarStructure structure);
        bool HasGrammarErrors();
    }

    [Serializable]
    public class FixtureStructure : IFixtureNode, IFixtureStructure
    {
        private readonly List<GrammarError> _errors = new List<GrammarError>();
        private readonly string _name;
        private readonly Cache<string, GrammarStructure> _structures = new Cache<string, GrammarStructure>();
        private IPolicies _policies = new Policies();

        
        public FixtureStructure()
            : this(Guid.NewGuid().ToString())
        {
            // TESTING ONLY
        }

        public FixtureStructure(string name)
        {
            _name = name;
            Label = name;
        }

        public void ReadFrom(IFixture fixture, FixtureLibrary library)
        {
            FixtureClassName = fixture.GetType().FullName;
            FixtureNamespace = fixture.GetType().Namespace;
            Policies = fixture.Policies;
            Description = fixture.Description;
            Label = fixture.Title.IsEmpty() ? Name : fixture.Title;

            fixture.Errors.Each(x =>
            {
                x.Node = this;
                LogError(x);
            });

            fixture.ForEachGrammar((key, grammar) => readGrammar(grammar, key, library));   
        }

        private void readGrammar(IGrammar grammar, string key, FixtureLibrary library)
        {
            GrammarStructure structure = grammar.ToStructure(library);
            structure.Description = grammar.Description;

            AddStructure(key, structure);
        }

        public string FixtureClassName { get; set; }
        public string FixtureNamespace { get; set; }
        public int GrammarCount { get { return _structures.Count; } }
        public IPolicies Policies { get { return _policies; } set { _policies = value; } }

        public bool IsAFixture()
        {
            return !string.IsNullOrEmpty(FixtureClassName);
        }

        #region IFixtureNode Members

        public void ModifyExampleTest(Test example)
        {
            example.Name = Label;
            example.RemoveParts(x =>
            {
                var section = x as Section;
                return section == null ? true : section.FixtureName != _name;
            });
        }

        [Obsolete("Wanna kill this")]
        public IEnumerable<GrammarError> AllErrors()
        {
            foreach (GrammarError error in _errors)
            {
                yield return error;
            }

            foreach (GrammarStructure structure in _structures)
            {
                foreach (GrammarError error in structure.AllErrors())
                {
                    yield return error;
                }
            }
        }

        public IEnumerable<GrammarError> Errors
        {
            get
            {
                return _errors;
            }
        }

        public string Label { get; set; }

        public string Description { get; set; }

        public string Name { get { return _name; } }

        public TPath GetPath()
        {
            return new TPath(_name);
        }

        public IEnumerable<Test> AllTests
        {
            get { throw new NotImplementedException(); }
        }

        #endregion

        public Section CreateExample()
        {
            var section = new Section(_name);
            _structures.Each(x => section.Add(x.CreateExample()));

            return section;
        }

        public GrammarStructure GrammarFor(string grammarKey)
        {
            return _structures[grammarKey];
        }

        public void AddStructure(string grammarKey, GrammarStructure structure)
        {
            structure.Name = grammarKey;
            structure.Parent = this;
            _structures[grammarKey] = structure;
        }

        public IEnumerable<GrammarStructure> TopLevelGrammars()
        {
            return _structures.Where(x => Policies.CanChooseGrammar(x.Name, new IStep[0])).OrderBy(x => x.Label);
        }

        public IEnumerable<GrammarStructure> PossibleGrammarsFor(IPartHolder holder)
        {
            IList<IStep> preceeding = holder.AllSteps();
            return _structures.Where(x => Policies.CanChooseGrammar(x.Name, preceeding)).OrderBy(x => x.Label);
        }


        public bool HasGrammar(string key)
        {
            return _structures.Has(key);
        }

        public IEnumerable<GrammarStructure> Grammars
        {
            get
            {
                return _structures.GetAll();
            }
        }

        public bool Equals(FixtureStructure obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._name, _name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (FixtureStructure)) return false;
            return Equals((FixtureStructure) obj);
        }

        public override int GetHashCode()
        {
            return (_name != null ? _name.GetHashCode() : 0);
        }

        public void LogError(Exception exception)
        {
            var error = new GrammarError
            {
                ErrorText = exception.ToString(),
                Message = "Fixture '{0}' could not be loaded".ToFormat(_name),
                Node = this
            };

            _errors.Add(error);
        }

        public void LogError(GrammarError error)
        {
            _errors.Add(error);
        }

        public bool CanChoose(Test test)
        {
            return _policies.CanChooseFixture(test);
        }

        public bool IsSingleSelection()
        {
            return _policies.SelectionMode == SelectionMode.Single;
        }

        public bool IsMandatoryAutoSelectGrammar(GrammarStructure structure)
        {
            if (_policies.SelectionMode != SelectionMode.MandatoryAutoSelect) return false;

            return structure.Name == _policies.AutoSelectGrammarKey;
        }

        public bool HasGrammarErrors()
        {
            return _structures.GetAll().Any(x => x.AllErrors().Any());
        }
    }
}