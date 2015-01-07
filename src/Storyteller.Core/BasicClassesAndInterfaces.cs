using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core
{
    public interface IGrammar
    {
        IExecutionPlan CreatePlan(Step step);
        string Key { get; }

        GrammarModel Compile(Conversions conversions);
    }

    public interface IFixture
    {
        bool IsHidden();

        FixtureModel Compile(Conversions conversions);
    }

    public interface IExecutionPlan
    {
        void Execute(ISpecContext context);
    }
}