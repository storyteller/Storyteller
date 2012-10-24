using System;
using System.Collections.Generic;
using StoryTeller.Engine;
using StoryTeller.Engine.Constraints;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    public class StubFixture : IFixture
    {
        public IEnumerable<IGrammar> Grammars { get { throw new NotImplementedException(); } }

        #region IFixture Members

        public ITestContext Context { get; set; }

        public bool HasGrammar(string key)
        {
            throw new NotImplementedException();
        }

        public void ForEachGrammar(Action<string, IGrammar> action)
        {
        }

        public void SetUp(ITestContext context)
        {
        }

        public void TearDown()
        {
        }

        public string Title { get; set; }

        public IPolicies Policies { get { return new Policies(); } }

        public IEnumerable<GrammarError> Errors { get { return new GrammarError[0]; } }

        public IGrammar this[string key] { get { throw new NotImplementedException(); } set { throw new NotImplementedException(); } }

        public string Name { get { return "Stub"; } }

        public string Description { get { return string.Empty; } }

        #endregion
    }
}