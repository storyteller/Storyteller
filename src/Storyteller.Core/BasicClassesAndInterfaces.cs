using System.Collections;
using System.Collections.Generic;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface IGrammar
    {
        IExecutionStep CreatePlan(Step step);

        GrammarModel Compile(Conversions conversions);
    }

    public interface ILineGrammar
    {
        IEnumerable<CellResult> Execute(StepValues values, ISpecContext context);
    }

    public interface IFixture
    {
        bool IsHidden();

        FixtureModel Compile(Conversions conversions);

        IGrammar GrammarFor(string key);

        string Key { get; }
        ISpecContext Context { get; set; }
        void SetUp();
        void TearDown();
    }

    

    public interface IExecutionStep
    {
        int Count();
        void AcceptVisitor(ISpecExecutor executor);
    }

    public interface ISpecExecutor
    {
        void Line(ILineExecution execution);
        void Composite(ICompositeExecution execution);
        void Action(ISilentAction action);
    }

   

    public interface ICompositeExecution : IExecutionStep
    {
        IExecutionStep[] Steps { get; }
    }

    public interface ISilentAction : IExecutionStep
    {
        void Execute(ISpecContext context);
    }

    public interface ILineExecution : IExecutionStep
    {
        void Execute(ISpecContext context);
    }
}