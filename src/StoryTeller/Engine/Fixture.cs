using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Runtime.CompilerServices;
using FubuCore;
using FubuCore.Reflection;
using FubuCore.Util;
using StoryTeller.Assertions;
using StoryTeller.DSL;
using StoryTeller.Engine.Constraints;
using StoryTeller.Engine.Importing;
using StoryTeller.Engine.Reflection;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    [AliasAs("Fixture")]
    public class Fixture : IFixture
    {
        private static readonly List<Type> _types = new List<Type>
        {
            typeof (object),
            typeof (Fixture)
        };

        private readonly List<GrammarError> _errors = new List<GrammarError>();
        private readonly Cache<string, IGrammar> _grammars = new Cache<string, IGrammar>();
        private readonly Policies _policies = new Policies();

        private readonly Cache<string, List<string>> _selectionLists =
            new Cache<string, List<string>>(x => new List<string>());

        public ITestContext Context { get; set; }

        public T Retrieve<T>()
        {
            if (Context == null) throw new InvalidOperationException("This method can only be called when the Fixture is being used in a spec.  Cannot be used in the ctor function");
            return Context.Retrieve<T>();
        }

        public void Store<T>(T subject)
        {
            if (Context == null) throw new InvalidOperationException("This method can only be called when the Fixture is being used in a spec.  Cannot be used in the ctor function");
            Context.Store(subject);
        }

        public Fixture()
        {
            _grammars.OnAddition = readGrammar;

            MethodExtensions.ForAttribute<HiddenAttribute>(GetType(), x => Policies.IsPrivate = true);
            MethodExtensions.ForAttribute<TagAttribute>(GetType(), x => x.Tags.Each(t => Policies.Tag(t)));

            GetType().GetMethods(BindingFlags.Public | BindingFlags.Instance).Where(methodFromThis).Each(method =>
            {
                string grammarKey = method.GetKey();
                try
                {
                    IGrammar grammar = GrammarBuilder.BuildGrammar(method, this);
                    this[grammarKey] = grammar;

                    MethodExtensions.ForAttribute<HiddenAttribute>(method, x => _policies.HideGrammar(grammarKey));
                    MethodExtensions.ForAttribute<TagAttribute>(method,
                                                                x => x.Tags.Each(t => _policies.Tag(grammarKey, t)));
                }
                catch (Exception e)
                {
                    _errors.Add(new GrammarError
                    {
                        ErrorText = e.ToString(),
                        Message =
                            "Could not create Grammar '{0}' of Fixture '{1}'".ToFormat(grammarKey,
                                                                                       GetType().GetFixtureAlias())
                    });
                }
            });
        }

        public int GrammarCount { get { return _grammars.Count; } }

        #region IFixture Members

        public string Title { get; set; }

        [IndexerName("Grammars")]
        public IGrammar this[string key] { get
        {
            StoryTellerAssert.Fail(!_grammars.Has(key), "Fixture {0} does not have a grammar named {1}".ToFormat(Name, key));
            
            return _grammars[key];
        } set { _grammars[key] = value; } }

        public void ForEachGrammar(Action<string, IGrammar> action)
        {
            _grammars.Each(action);
        }

        public virtual void SetUp(ITestContext context)
        {
        }

        public virtual void TearDown()
        {
        }

        public IPolicies Policies { get { return _policies; } }

        public IEnumerable<GrammarError> Errors { get { return _errors; } }

        public string Name
        {
            get
            {
                var att = MethodExtensions.GetAttribute<AliasAsAttribute>(GetType());
                if (att != null)
                {
                    return att.Alias;
                }

                return GetType().Name.Replace("Fixture", "");
            }
        }

        public virtual string Description { get { return GetType().FullName; } }

        #endregion

        protected void MandatoryAutoSelectOfGrammar(string grammarKey)
        {
            Policies.AutoSelectGrammarKey = grammarKey;
            Policies.SelectionMode = SelectionMode.MandatoryAutoSelect;
        }

        private void readGrammar(IGrammar grammar)
        {
            grammar.CallOn<IGrammarWithCells>(x => { x.GetCells().Each(cell => cell.ReadLists(this)); });
        }

        private static bool methodFromThis(MethodInfo method)
        {
            if (_types.Contains(method.DeclaringType))
            {
                return false;
            }

            if (method.GetBaseDefinition() != null)
            {
                Type declaringType = method.GetBaseDefinition().DeclaringType;
                if (_types.Contains(declaringType))
                {
                    return false;
                }
            }

            return true;
        }

        public IList<string> SelectionValuesFor(string key)
        {
            return _selectionLists[key];
        }

        public bool HasGrammar(string key)
        {
            return _grammars.Has(key);
        }


        public Fixture With(Action<Fixture> action)
        {
            action(this);
            return this;
        }

        public static ParagraphGrammar Paragraph(string title, Action<CompositeGrammarBuilder> configure)
        {
            var grammar = new ParagraphGrammar(title);
            grammar.ConfigureSteps(configure);

            return grammar;
        }

        public static ParagraphGrammar InlineParagraph(string title, Action<CompositeGrammarBuilder> configure)
        {
            ParagraphGrammar grammar = Paragraph(title, configure);
            grammar.Style = EmbedStyle.Inline;

            return grammar;
        }

        // TODO: tests!
        public static VerifyDataTableExpression VerifyDataTable(Func<ITestContext, DataTable> dataSource)
        {
            return new VerifyDataTableExpression(dataSource);
        }

        public static VerifyDataTableExpression VerifyDataTable(Func<DataTable> dataSource)
        {
            return new VerifyDataTableExpression(c => dataSource());
        }

        // TODO: tests!
        public static VerifyDataTableExpression VerifyDataTable()
        {
            return new VerifyDataTableExpression();
        }

        // TODO: tests!
        public static VerifyStringListExpression VerifyStringList(Func<ITestContext, IEnumerable<string>> dataSource)
        {
            return new VerifyStringListExpression(dataSource);
        }

        public static VerifyStringListExpression VerifyStringList()
        {
            return new VerifyStringListExpression();
        }

        public static VerifyStringListExpression VerifyStringList(Func<IEnumerable<string>> dataSource)
        {
            return new VerifyStringListExpression(c => dataSource());
        }

        public static VerifySetExpression<T> VerifySetOf<T>(Func<ITestContext, IEnumerable<T>> dataSource)
        {
            return new VerifySetExpression<T>(dataSource);
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
            return new ActionGrammar<T>(template, action);
        }

        /// <summary>
        /// Creates a simple Sentence grammar with one input that executes an Action<T, ITestContext> lambda
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="template"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static ActionGrammar<T> Do<T>(string template, Action<T, ITestContext> action)
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
            return new ActionGrammar<TInput>(template, (input, c) => action(input, c.Retrieve<TService>()));
        }

        public static VerifySetExpression<T> VerifySetOf<T>(Func<IEnumerable<T>> dataSource)
        {
            return new VerifySetExpression<T>(c => dataSource());
        }

        public static ParagraphGrammar VerifyPropertiesOf<T>(string title,
                                                             Action<ObjectVerificationExpression<T>> action)
            where T : class
        {
            return new ParagraphGrammar(title).ConfigureSteps(x =>
            {
                x.VerifyPropertiesOf(action);
            });
        }


        // TODO: tests!
        public static EmbeddedSectionGrammar<T> Embed<T>(string label) where T : IFixture, new()
        {
            return new EmbeddedSectionGrammar<T>
            {
                Label = label
            };
        }


        // TODO: tests!
        public static EmbeddedSectionGrammar<T> Inline<T>(string label) where T : IFixture, new()
        {
            return new EmbeddedSectionGrammar<T>
            {
                Label = label,
                Style = EmbedStyle.Inline
            };
        }

        public static EmbeddedSectionGrammar<T> Embed<T>(string label, string leafName) where T : IFixture, new()
        {
            return new EmbeddedSectionGrammar<T>
            {
                Label = label
            }.LeafName(leafName);
        }

        // TODO: tests!
        public static ParagraphGrammar CreateObject<T>(string title, Action<ObjectConstructionExpression<T>> action)
        {
            var grammar = new ParagraphGrammar(title);
            var expression = new ObjectConstructionExpression<T>(grammar);
            action(expression);

            return grammar;
        }

        // TODO: tests!
        public static DoGrammar CreateNewObject<T>() where T : new()
        {
            GrammarAction createObject = (step, context) => context.CurrentObject = new T();
            return new DoGrammar(createObject);
        }

        public static ParagraphGrammar CreateNewObject<T>(Action<ObjectConstructionExpression<T>> action)
            where T : new()
        {
            var grammar = new ParagraphGrammar(CreateNewObject<T>());
            var expression = new ObjectConstructionExpression<T>(grammar);
            action(expression);


            return grammar;
        }

        public static DoGrammar Do(GrammarAction action)
        {
            return new DoGrammar(action);
        }

        /// <summary>
        /// Creates a "silent" grammar that executes an Action lambda.  This is only useful inside of "Paragraph"
        /// grammars
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public static DoGrammar Do(Action action)
        {
            return new DoGrammar((c, s) => action());
        }

        /// <summary>
        /// Creates a simple Sentence grammar with no inputs that executes an Action lambda
        /// </summary>
        /// <param name="text"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static ActionGrammar Do(string text, Action action)
        {
            return new ActionGrammar(text, action);
        }

        /// <summary>
        /// Creates a simple Sentence grammar with no inputs that executes a GrammarAction lambda that
        /// allows you access to both the current IStep and the ITestContext
        /// </summary>
        /// <param name="text"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static ActionGrammar Do(string text, GrammarAction action)
        {
            return new ActionGrammar(text, action);
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


        public static ActionGrammar<T> Read<T>(string key, Action<T> action)
        {
            return new ActionGrammar<T>("Read {" + key + "}", action);
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
            return new CheckGrammar<T>(key, result);
        }


        public void CheckProperty<T>(Expression<Func<T, object>> expression)
        {
            Accessor accessor = ReflectionHelper.GetAccessor(expression);
            this["Check" + accessor.Name] = new CheckPropertyGrammar(accessor);
        }

        public void AddSelectionValues(string key, params string[] values)
        {
            _selectionLists[key].AddRange(values);
        }

        public CurryGrammarExpression Curry(string key)
        {
            return Curry(this[key]);
        }

        public CurryGrammarExpression Curry(IGrammar inner)
        {
            return new CurryGrammarExpression(inner);
        }

        public ImportedGrammar Import<T>(string grammarKey)
        {
            var import = GrammarImport.For<T>(grammarKey);
            return new ImportedGrammar(import, () => Context);
        }

        #region Nested type: FactExpression

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
                return new FactGrammar(test, _title);
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
                return new FactGrammar(c => test(c.Retrieve<TService>()), _title);
            }
        }

        

        #endregion
    }

    public interface ICurryGrammarDefaultsExpression
    {
        /// <summary>
        /// Specify the curried values to the inner grammar
        /// in the format "key1:value1, key2:value2, key3:value3"
        /// </summary>
        /// <param name="defaultValues"></param>
        /// <returns></returns>
        IGrammar Defaults(string defaultValues);
    }

    public class CurryGrammarExpression : ICurryGrammarDefaultsExpression
    {
        private readonly IGrammarWithCells _inner;
        private string _template;

        public CurryGrammarExpression(IGrammar inner)
        {
            _inner = (IGrammarWithCells) inner;
        }

        public ICurryGrammarDefaultsExpression Template(string template)
        {
            _template = template;
            return this;
        }

        IGrammar ICurryGrammarDefaultsExpression.Defaults(string defaultValues)
        {
            return new CurriedLineGrammar(_template, _inner, defaultValues);
        }
    }

    public class CompositeFixture : Fixture
    {
        public CompositeFixture(params IFixture[] fixtures)
        {
            fixtures.Each(f => { f.ForEachGrammar((key, grammar) => this[key] = grammar); });
        }
    }
}