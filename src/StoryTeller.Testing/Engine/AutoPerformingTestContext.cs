using System;
using System.Collections.Generic;
using FubuCore;
using FubuCore.Conversion;
using FubuCore.Formatting;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    public class AutoPerformingTestContext : ITestContext
    {
        #region ITestContext Members

        public IEnumerable<Type> StartupActionTypes
        {
            get { throw new NotImplementedException(); }
        }

        public object CurrentObject { get; set; }

        public bool Matches(object expected, object actual)
        {
            return new EquivalenceChecker().IsEqual(expected, actual);
        }

        public void Store<T>(T data)
        {
        }

        public T Retrieve<T>()
        {
            throw new NotImplementedException();
        }

        public object Retrieve(Type type)
        {
            throw new NotImplementedException();
        }

        public virtual void IncrementRights()
        {
        }

        public virtual void IncrementWrongs()
        {
        }

        public virtual void IncrementExceptions()
        {
        }

        public virtual void IncrementSyntaxErrors()
        {
        }

        public void ExecuteWithFixture<T>(StepLeaf leaf, ITestPart exceptionTarget) where T : IFixture, new()
        {
        }

        public void RunStep(IGrammar grammar, IStep step)
        {
        }

        public void PerformAction(IStep step, GrammarAction action)
        {
            try
            {
                action(step, this);
            }
            catch (Exception ex)
            {
                IncrementExceptions();
                ResultsFor(step).CaptureException(ex.ToString());
            }
        }

        private readonly Cache<ITestPart, StepResults> _results = new Cache<ITestPart, StepResults>(step => new StepResults());
        public StepResults ResultsFor(ITestPart part)
        {
            return _results[part];
        }

        public Stringifier Stringifier
        {
            get { return new Stringifier(); }
        }

        public string GetDisplay(object value)
        {
            return new Stringifier().GetString(value);
        }

        public Counts Counts
        {
            get { return new Counts(); }
        }

        public string TraceText
        {
            get { throw new NotImplementedException(); }
        }

        public void Trace(string text)
        {
            throw new NotImplementedException();
        }

        public IGrammar FindGrammar(string grammarKey)
        {
            throw new NotImplementedException();
        }

        public void LoadFixture(string fixtureKey, ITestPart part)
        {
            throw new NotImplementedException();
        }

        public void LoadFixture(IFixture fixture, ITestPart part)
        {
            throw new NotImplementedException();
        }

        public void LoadFixture<T>(ITestPart part) where T : IFixture, new()
        {
            throw new NotImplementedException();
        }

        public void RevertFixture(ITestPart part)
        {
            throw new NotImplementedException();
        }

        public IFixture RetrieveFixture<T>() where T : IFixture, new()
        {
            throw new NotImplementedException();
        }

        public IFixture RetrieveFixture(string fixtureName)
        {
            throw new NotImplementedException();
        }

        public IObjectConverter Finder { get; set; }

        #endregion
    }
}