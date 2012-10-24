using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Security.Principal;
using System.Threading;
using FubuCore;
using FubuCore.Conversion;
using FubuCore.Formatting;
using FubuCore.Util;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public interface IExceptionTarget
    {
        void CaptureException(string exceptionText);
    }


    public interface ITestContext
    {
        object CurrentObject { get; set; }
        IObjectConverter Finder { get; }
        bool Matches(object expected, object actual);
        
        void Store<T>(T data);
        T Retrieve<T>();
        object Retrieve(Type type);

        void IncrementRights();
        void IncrementWrongs();
        void IncrementExceptions();
        void IncrementSyntaxErrors();

        void ExecuteWithFixture<T>(StepLeaf leaf, ITestPart exceptionTarget) where T : IFixture, new();
        void RunStep(IGrammar grammar, IStep step);

        void PerformAction(IStep step, GrammarAction action);

        StepResults ResultsFor(ITestPart part);
        string GetDisplay(object value);

        Counts Counts { get; }
        string TraceText { get; }
        void Trace(string text);






        // TODO -- ISP anyone?
        IGrammar FindGrammar(string grammarKey);
        void LoadFixture(string fixtureKey, ITestPart part);
        void LoadFixture(IFixture fixture, ITestPart part);
        void LoadFixture<T>(ITestPart part) where T : IFixture, new();
        void RevertFixture(ITestPart part);

        IFixture RetrieveFixture<T>() where T : IFixture, new();
        IFixture RetrieveFixture(string fixtureName);


    }

    public static class TestContextExtensions
    {
        public static void Configure<T>(this ITestContext context, Action<T> configure)
        {
            configure(context.Retrieve<T>());
        }

        public static T Current<T>(this ITestContext context)
        {
            return (T) context.CurrentObject;
        }

        public static void PerformAction(this ITestContext context, IStep step, Action action)
        {
            context.PerformAction(step, (c, s) => action());
        }
    }

    public interface ITestRun
    {
        void Abort();
    }


    public class TestContext : ITestContext, ITestVisitor
    {
        private readonly Stack<IFixture> _fixtures = new Stack<IFixture>();
        private readonly IExecutionContext _execution;
        private readonly Test _test;
        private readonly Lazy<IObjectConverter> _converter;





        [Obsolete]
        private bool _fixtureIsInvalid;
        private ITestObserver _listener;
        private IPrincipal _principal;
        private readonly Cache<ITestPart, StepResults> _results = new Cache<ITestPart,StepResults>(step => new StepResults());
        private readonly StringWriter _traceWriter = new StringWriter();
        private readonly Counts _counts = new Counts();

        public TestContext()
            : this(new SimpleExecutionContext(), new Test("FAKE"), new TraceListener())
        {
        }

        public TestContext(IExecutionContext execution, Test test, ITestObserver listener)
        {
            _execution = execution;
            _test = test;
            _listener = listener;

            _cache[typeof (IExecutionContext)] = execution;
            _cache[typeof (Test)] = test;

            _converter = new Lazy<IObjectConverter>(() => {
                return new ObjectConverter(_execution.Services, _execution.BindingRegistry.Converters);
            });
        }

        public string TraceText { get { return _traceWriter.GetStringBuilder().ToString(); } }

        public ITestObserver Listener { get { return _listener; } set { _listener = value; } }

        public Counts Counts { get { return _counts; } }

        [Obsolete("KIll")]
        public IFixture CurrentFixture { get { return _fixtures.Peek(); } }

        public Test Test { get { return _test; } }
        
        private bool shouldStop { 
            get
            {
                return !_listener.CanContinue(_counts);
            } 
        }

        #region IFixtureContext Members

        public void RevertFixture(ITestPart part)
        {
            if (_fixtureIsInvalid)
            {
                _fixtureIsInvalid = false;
                return;
            }

            if (part == null) throw new ArgumentNullException("part");

            IFixture fixture = _fixtures.Pop();
            if (fixture != null)
            {
                performAction(part, fixture.TearDown);
            }

            _fixtureIsInvalid = false;
        }

        public IFixture RetrieveFixture<T>() where T : IFixture, new()
        {
            return new T {Context = this};
        }

        public IFixture RetrieveFixture(string fixtureName)
        {
            var fixture = FixtureGraph.Current.Build(fixtureName);
            fixture.Context = this;

            return fixture;
        }

        public IGrammar FindGrammar(string grammarKey)
        {
            return CurrentFixture[grammarKey];
        }

        public void LoadFixture(string fixtureKey, ITestPart part)
        {
            var results = ResultsFor(part);

            try
            {
                var fixture = FixtureGraph.Current.Build(fixtureKey);
                LoadFixture(fixture, part);
            }
            catch (NonExistentFixtureException e)
            {
                _fixtureIsInvalid = true;
                _listener.Exception(e.ToString());

                results.CaptureException("Unable to find a Fixture named '{0}'".ToFormat(fixtureKey));
                IncrementSyntaxErrors();
            }
            catch (Exception e)
            {
                _fixtureIsInvalid = true;
                _listener.Exception(e.ToString());
                results.CaptureException(e.ToString());
                IncrementExceptions();
            }
        }

        public void LoadFixture<T>(ITestPart part) where T : IFixture, new()
        {
            var fixture = RetrieveFixture<T>();
            LoadFixture(fixture, part);
        }

        public void LoadFixture(IFixture fixture, ITestPart part)
        {
            if (part == null) throw new ArgumentNullException("part");

            performAction(part, () =>
            {
                fixture.Context = this;
                fixture.SetUp(this);
            });

            _fixtures.Push(fixture);
        }

        #endregion

        #region ITestContext Members

        public bool Matches(object expected, object actual)
        {
            return Retrieve<EquivalenceChecker>().IsEqual(expected, actual);
        }

        public string GetDisplay(object value)
        {
            if (value == null || value == DBNull.Value) return Step.NULL;
            if (string.Empty.Equals(value)) return Step.BLANK;

            return Retrieve<Stringifier>().GetString(value);
        }

        private readonly Cache<Type, object> _cache = new Cache<Type, object>(); 

        public virtual void Store<T>(T data)
        {
            _cache[typeof (T)] = data;
        }

        public T Retrieve<T>()
        {
            if (typeof(T) == typeof(ITestContext))
            {
                return (T)(this.As<object>());
            }

            if (_cache.Has(typeof(T)))
            {
                return (T)_cache[typeof (T)];
            }

            try
            {
                return _execution.Services.GetInstance<T>();
            }
            catch (Exception)
            {
                if (typeof(T).IsConcreteWithDefaultCtor())
                {
                    return (T) Activator.CreateInstance(typeof (T));
                }

                throw;
            }

        }


        public object Retrieve(Type type)
        {
            // backwards compatibility
            if (type == typeof(ITestContext)) return this;

            if (_cache.Has(type))
            {
                return _cache[type];
            }

            return _execution.Services.GetInstance(type);
        }

        public void IncrementRights()
        {
            Counts.IncrementRights();
        }

        public void IncrementWrongs()
        {
            Counts.IncrementWrongs();
        }

        [Obsolete("have this replaced with a method that takes in the exception text at the same time and goes to the result")]
        public void IncrementExceptions()
        {
            Counts.IncrementExceptions();
        }

        [Obsolete("see above")]
        public void IncrementSyntaxErrors()
        {
            Counts.IncrementSyntaxErrors();
        }

        public void ExecuteWithFixture<T>(StepLeaf leaf, ITestPart exceptionTarget) where T : IFixture, new()
        {
            LoadFixture<T>(exceptionTarget);

            leaf.AcceptVisitor(this);

            RevertFixture(exceptionTarget);
        }

        public object CurrentObject { get; set; }

        public void RunStep(IGrammar grammar, IStep step)
        {
            runStep(step, () => grammar.Execute(step, this));
        }

        public virtual void PerformAction(IStep step, GrammarAction action)
        {
            Action continuation = () => action(step, this);

            performAction(step, continuation);
        }

        private void performAction(ITestPart part, Action continuation)
        {
            try
            {
                continuation();
            }
            catch (Exception ex)
            {
                _listener.Exception(ex.ToString());
                IncrementExceptions();
                ResultsFor(part).CaptureException(ex.ToString());
            }
        }

        public StepResults ResultsFor(ITestPart part)
        {
            return _results[part];
        }


        public IObjectConverter Finder
        {
            get { return _converter.Value; }
        }

        #endregion

        #region ITestVisitor Members

        public void RunStep(IStep step)
        {
            if (shouldStop) return;

            storePrincipal();

            if (_fixtureIsInvalid) return;

            runStep(step, () =>
            {
                IGrammar grammar = FindGrammar(step.GrammarKey);
                grammar.Execute(step, this);
            });
        }

        void ITestVisitor.WriteTags(Tags tags)
        {
            // no-op;
        }

        void ITestVisitor.WriteComment(Comment comment)
        {
            // no-op;
        }

        void ITestVisitor.StartSection(Section section)
        {
            if (shouldStop) return;

            storePrincipal();

            _listener.StartSection(section);


            section.StartFixture(this);
        }

        void ITestVisitor.EndSection(Section section)
        {
            if (shouldStop) return;

            storePrincipal();

            RevertFixture(section);

            _listener.FinishSection(section);
        }

        #endregion

        private void runStep(IStep step, Action action)
        {
            _listener.StartStep(step);

            try
            {
                action();
            }
            catch (ThreadAbortException e)
            {
                // Timeout is logged elsewhere
                _listener.Exception(e.ToString());
            }
            catch (Exception e)
            {
                _listener.Exception(e.ToString());
                IncrementExceptions();
                ResultsFor(step).CaptureException(e.ToString());
            }

            _listener.FinishStep(step);
        }

        private void storePrincipal()
        {
            Thread.CurrentPrincipal = _principal;
        }


        public void Execute()
        {
            TextWriter originalConsole = Console.Out;
            var traceListener = new TextWriterTraceListener(_traceWriter);
            Debug.Listeners.Add(traceListener);
            
            //Console.SetOut(_traceWriter);


            try
            {
                _principal = Thread.CurrentPrincipal;

                executeParts();

                
            }
            finally
            {
                Debug.Listeners.Remove(traceListener);
                Console.SetOut(originalConsole);
            }
        }

        public void Trace(string text)
        {
            _traceWriter.WriteLine(text);
        }

        private void executeParts()
        {
            foreach (ITestPart part in _test.Parts)
            {
                part.AcceptVisitor(this);
                if (shouldStop)
                {
                    ResultsFor(_test).CaptureException("TestListener stopped the test before completion");
                    break;
                }
            }
        }

    }


}