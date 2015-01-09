using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using FubuCore;
using FubuCore.Reflection;
using FubuCore.Util;
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
            GetType().GetMethods(BindingFlags.Public | BindingFlags.Instance).Where(methodFromThis).Each(method =>
            {
                string grammarKey = method.GetKey();
                if (_grammars.Has(grammarKey)) return;
                
                try
                {
                    IGrammar grammar = GrammarBuilder.BuildGrammar(method, this);
                    this[grammarKey] = grammar;
                }
                catch (Exception e)
                {
                    throw;
                    /*
                    _errors.Add(new GrammarError
                    {
                        ErrorText = e.ToString(),
                        Message =
                            "Could not create Grammar '{0}' of Fixture '{1}'".ToFormat(grammarKey,
                                                                                       GetType().GetFixtureAlias())
                    });
                     * */
                }
            });

            var grammars = _grammars.GetAllKeys().Select(key =>
            {
                var grammar = _grammars[key];
                var model =  grammar.Compile(conversions);
                model.key = key;

                return model;
            }).ToArray();

            return new FixtureModel(Key)
            {
                grammars = grammars
            };
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
                Type declaringType = method.GetBaseDefinition().DeclaringType;
                if (_ignoredTypes.Contains(declaringType))
                {
                    return false;
                }
            }

            return true;
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

    public static class MethodExtensions
    {
        public static string GetKey(this MethodInfo method)
        {
            var att = method.GetAttribute<AliasAsAttribute>();
            return att == null ? method.Name : att.Alias;
        }
    }
}