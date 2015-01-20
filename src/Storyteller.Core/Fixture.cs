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
using Storyteller.Core.Grammars.Lines;
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

        public ISpecContext Context { get; set; }

        public virtual void SetUp()
        {
        }

        public virtual void TearDown()
        {
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

        /// <summary>
        /// Creates a simple Sentence grammar with no inputs that executes an Action lambda
        /// </summary>
        /// <param name="text"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static ActionGrammar Do(string text, Action<ISpecContext> action)
        {
            return new ActionGrammar(text, action);
        }

        /// <summary>
        /// Creates a simple Sentence grammar with one input that executes an Action<T> lambda"/>.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="template"></param>
        /// <param name="action"></param>
        /// <example>
        /// this["simple"] = Do<int>("Add {x} to our number", x => count += x);
        /// </example>
        /// <returns></returns>
        public static ActionGrammar<T> Do<T>(string template, Action<T> action)
        {
            return new ActionGrammar<T>(template, (x, context) => action(x));
        }

        /// <summary>
        /// Creates a simple Sentence grammar with one input that executes an Action<T, ITestContext> lambda
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="template"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static ActionGrammar<T> Do<T>(string template, Action<T, ISpecContext> action)
        {
            return new ActionGrammar<T>(template, action);
        }

        /// <summary>
        /// Creates a simple Sentence grammar with one input that invokes a Lambda against a service object registered
        /// in the current ITestContext.
        /// </summary>
        /// <typeparam name="TInput"></typeparam>
        /// <typeparam name="TService"></typeparam>
        /// <param name="template"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static ActionGrammar<TInput> Do<TInput, TService>(string template, Action<TInput, TService> action)
        {
            return new ActionGrammar<TInput>(template, (input, c) => action(input, c.Service<TService>()));
        }

    }
}