using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using FubuCore.Reflection;
using FubuCore.Util;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core
{
    public class Fixture : IFixture
    {
        private static readonly List<Type> _ignoredTypes = new List<Type>
        {
            typeof (object),
            typeof (Fixture)
        };

        // TODO -- need to set this
        public string Title;
        private readonly Cache<string, IGrammar> _grammars;

        public Fixture()
        {
            _grammars = new Cache<string, IGrammar>(findGrammar);
            Key = GetType().Name.Replace("Fixture", "");
        }

        [IndexerName("Grammars")]
        public IGrammar this[string key]
        {
            get { return _grammars[key]; }
            set { _grammars[key] = value; }
        }

        public bool IsHidden()
        {
            return GetType().HasAttribute<HiddenAttribute>();
        }

        public FixtureModel Compile(Conversions conversions)
        {
            throw new NotImplementedException();
        }

        public IGrammar GrammarFor(string key)
        {
            return _grammars[key];
        }

        public string Key { get; protected set; }

        // TODO -- can handle missing grammars
        private IGrammar findGrammar(string key)
        {
            throw new NotImplementedException();
        }
    }
}