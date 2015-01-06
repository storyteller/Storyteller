using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using StoryTeller.Engine;
using StoryTeller.Model;

// SAMPLE:  IFixture
namespace StoryTeller
{
    public interface IFixture
    {
        string Name { get; }
        string Description { get; }

        [IndexerName("Grammar")]
        IGrammar this[string key] { get; set; }

        IEnumerable<GrammarError> Errors { get; }
        string Title { get; set; }
        ITestContext Context { get; set; }

        bool HasGrammar(string key);

        void ForEachGrammar(Action<string, IGrammar> action);

        void SetUp(ITestContext context);
        void TearDown();
    }
}
// END:  IFixture