using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core
{
    public interface IGrammar
    {
        void WarmUp(ConverterFactory converters);
        IExecutionPlan CreatePlan(Step step);
        string Key { get; }

        GrammarModel Metadata();
    }

    public interface IExecutionPlan
    {
        void Execute(ISpecContext context);
    }
}