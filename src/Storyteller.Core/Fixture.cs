using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using FubuCore;
using FubuCore.Reflection;
using FubuCore.Util;
using Storyteller.Core;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars;
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
            GetType().GetMethods(BindingFlags.Public | BindingFlags.Instance).Where(methodFromThis).Each(method =>
            {
                var grammarKey = method.GetKey();
                if (_grammars.Has(grammarKey)) return;

                var grammar = GrammarBuilder.BuildGrammar(method, this);
                this[grammarKey] = grammar;
            });

            var grammars = _grammars.GetAllKeys().Select(key =>
            {
                var model = _grammars[key].Compile(conversions);
                model.key = key;

                return model;
            });

            return new FixtureModel(Key)
            {
                title = Title ?? Key.SplitCamelCase(),
                grammars = grammars.ToArray()
            };
        }

        public IGrammar GrammarFor(string key)
        {
            return _grammars[key];
        }

        public string Key { get; protected set; }

        private IGrammar findGrammar(string key)
        {
            var method = GetType().GetMethod(key);


            if (method == null)
            {
                return new MissingGrammar(key);
            }

            return GrammarBuilder.BuildGrammar(method, this);
        }

        private static bool methodFromThis(MethodInfo method)
        {
            if (method.Name == "TODO") return true;

            if (_ignoredTypes.Contains(method.DeclaringType))
            {
                return false;
            }

            if (method.GetBaseDefinition() != null)
            {
                var declaringType = method.GetBaseDefinition().DeclaringType;
                if (_ignoredTypes.Contains(declaringType))
                {
                    return false;
                }
            }

            return true;
        }
    }
}

