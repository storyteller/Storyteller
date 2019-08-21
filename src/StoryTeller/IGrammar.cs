using System;
using StoryTeller.Model;
using StoryTeller.NewEngine;

namespace StoryTeller
{
    public interface IGrammar
    {
        [Obsolete("Goes away in v6")]
        IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false);
        
        
        void CreatePlan(ExecutionPlan plan, Step step, FixtureLibrary library, bool inTable = false);

        GrammarModel Compile(Fixture fixture, CellHandling cells);

        string Key { get; set; }

        bool IsHidden { get; set; }

        long MaximumRuntimeInMilliseconds { get; set; }
    }
}
