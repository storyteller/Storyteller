using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using FubuCore;
using FubuCore.Reflection;
using FubuCore.Util;
using Storyteller.Core.Grammars;
using Storyteller.Core.Grammars.Importing;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Grammars.ObjectBuilding;
using Storyteller.Core.Grammars.Paragraphs;
using Storyteller.Core.Grammars.Sets;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Lists;

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

        public virtual FixtureModel Compile(CellHandling conversions)
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
                var model = _grammars[key].Compile(this, conversions);
                model.key = key;

                return model;
            });

            return new FixtureModel(Key)
            {
                title = Title ?? Key.SplitCamelCase(),
                grammars = grammars.ToArray(),
                implementation = GetType().FullName
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

        /// <summary>
        /// Creates a grammar that checks the single value returned by
        /// the Func[T].  Mostly useful for building up scripted
        /// grammars
        /// </summary>
        /// <example>
        /// return Script("Divide numbers", x =>
        /// {
        ///     x += Do(() => _first = _second = 0);
        ///     x += Read<double>("x", o => _first = o);
        ///     x += Read<double>("y", o => _second = o);
        ///     x += Check("product", () => _first/_second);
        /// }).AsTable("Subtract numbers");
        /// </example>
        /// <typeparam name="T"></typeparam>
        /// <param name="key"></param>
        /// <param name="result"></param>
        /// <returns></returns>
        public static CheckGrammar<T> Check<T>(string key, Func<T> result)
        {
            return Check(key, c => result());
        }

        /// <summary>
        /// Creates a grammar that checks the single value returned by
        /// the Func[T].  Mostly useful for building up scripted
        /// grammars
        /// </summary>
        /// <example>
        /// return Script("Divide numbers", x =>
        /// {
        ///     x += Do(() => _first = _second = 0);
        ///     x += Read<double>("x", o => _first = o);
        ///     x += Read<double>("y", o => _second = o);
        ///     x += Check("product", () => _first/_second);
        /// }).AsTable("Subtract numbers");
        /// </example>
        /// <typeparam name="T"></typeparam>
        /// <param name="key"></param>
        /// <param name="result"></param>
        /// <returns></returns>
        public static CheckGrammar<T> Check<T>(string key, Func<ISpecContext, T> result)
        {
            return new CheckGrammar<T>(key, result);
        }

        /// <summary>
        /// Use to create a simple "Fact" grammar that asserts
        /// that a condition is true
        /// </summary>
        /// <example>
        /// this["ThisFactIsTrue"] = Fact("This fact is always true").VerifiedBy(() => true);
        /// </example>
        /// <param name="title"></param>
        /// <returns></returns>
        protected FactExpression Fact(string title)
        {
            return new FactExpression(title);
        }

        public class FactExpression
        {
            private readonly string _title;

            public FactExpression(string title)
            {
                _title = title;
            }

            /// <summary>
            /// Register the Func that can be evaluated as a boolean
            /// to determine the success or failure of this Fact
            /// </summary>
            /// <param name="test"></param>
            /// <returns></returns>
            public IGrammar VerifiedBy(Func<bool> test)
            {
                return new FactGrammar(_title, c => test());
            }

            /// <summary>
            /// Register the Func that can be evaluated as a boolean
            /// to determine the success or failure of this Fact
            /// </summary>
            /// <param name="test"></param>
            /// <returns></returns>
            public IGrammar VerifiedBy(Func<ISpecContext, bool> test)
            {
                return new FactGrammar(_title, test);
            }

            /// <summary>
            /// Register the Func that works against
            /// a service in the TestContext that can be evaluated as a boolean
            /// to determine the success or failure of this Fact
            /// </summary>
            /// <param name="test"></param>
            /// <returns></returns>
            public IGrammar VerifiedBy<TService>(Func<TService, bool> test)
            {
                return new FactGrammar(_title,c => test(c.Service<TService>()));
            }
        }

        /// <summary>
        /// Creates a new embedded section grammar for the given title and fixture
        /// type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="title"></param>
        /// <returns></returns>
        public static EmbeddedSectionGrammar<T> Embed<T>(string title) where T : Fixture, new()
        {
            return new EmbeddedSectionGrammar<T>
            {
                Title = title
            };
        }

        /// <summary>
        /// Verify a list of string values
        /// </summary>
        /// <typeparam name="T">An application service that will be invoked to get the data</typeparam>
        /// <param name="dataSource"></param>
        /// <returns></returns>
        public static VerifyStringListExpression VerifyStringList<T>(Func<T, IEnumerable<string>> dataSource)
        {
            return VerifyStringList(c => dataSource(c.Service<T>()));
        }

        /// <summary>
        /// Verify a list of string values 
        /// </summary>
        /// <param name="dataSource"></param>
        /// <returns></returns>
        public static VerifyStringListExpression VerifyStringList(Func<ISpecContext, IEnumerable<string>> dataSource)
        {
            return new VerifyStringListExpression(dataSource);
        }

        /// <summary>
        /// Verify a list of string values
        /// </summary>
        /// <param name="dataSource"></param>
        /// <returns></returns>
        public static VerifyStringListExpression VerifyStringList(Func<IEnumerable<string>> dataSource)
        {
            return VerifyStringList(c => dataSource());
        }

        public static ParagraphGrammar CreateObject<T>(string title, Action<ObjectConstructionExpression<T>> action)
        {
            var grammar = new ParagraphGrammar(title);
            var expression = new ObjectConstructionExpression<T>(grammar);
            action(expression);

            return grammar;
        }


        public static ParagraphGrammar CreateNewObject<T>(string title, Action<ObjectConstructionExpression<T>> action)
            where T : new()
        {
            return CreateObject<T>(title, _ =>
            {
                _.ObjectIs = c => new T();
                action(_);
            });
        }

        public static ParagraphGrammar VerifyPropertiesOf<T>(string title,
                                                             Action<ObjectVerificationExpression<T>> action)
            where T : class
        {
            var grammar = new ParagraphGrammar(title);

            var builder = new ParagraphBuilder(grammar);

            builder.VerifyPropertiesOf(action);

            return grammar;
        }

        public static ParagraphGrammar Paragraph(string title, Action<ParagraphBuilder> configure)
        {
            var grammar = new ParagraphGrammar(title);
            var expression = new ParagraphBuilder(grammar);
            configure(expression);

            return grammar;
        }

        public static VerifySetExpression<T> VerifySetOf<T>(Func<ISpecContext, IEnumerable<T>> dataSource)
        {
            return new VerifySetExpression<T>(dataSource);
        }

        public static VerifySetExpression<T> VerifySetOf<T>(Func<IEnumerable<T>> dataSource)
        {
            return new VerifySetExpression<T>(c => dataSource());
        }

        // TODO -- add a UT for this. Copied from old code
        public static ActionGrammar<T> Read<T>(string key, Action<T> action)
        {
            return new ActionGrammar<T>("Read {" + key + "}", (x, context) => action(x));
        }

        public ImportedGrammar Import<T>(string grammarKey) where T : Fixture
        {
            var fixture = (T)FixtureLibrary.FixtureCache[typeof (T)];
            return new ImportedGrammar(fixture, fixture[grammarKey]);
        }

        public CurryGrammarExpression Curry(string key)
        {
            return Curry(this[key]);
        }

        public CurryGrammarExpression Curry(IGrammar inner)
        {
            return new CurryGrammarExpression(inner);
        }

        public void AddSelectionValues(string key, params string[] values)
        {
            Lists[key].AddValues(values);
        }

        public readonly Cache<string, OptionList> Lists = new Cache<string, OptionList>(key => new OptionList(key));

    }
}