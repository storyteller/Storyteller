using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Engine;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface IObserver
    {
        void SpecExecutionFinished(SpecificationPlan plan, ISpecContext context);
        void Handle<T>(T message) where T : IResultMessage;

        Task<IEnumerable<SpecResult>> MonitorBatch(IEnumerable<SpecNode> nodes);
        void SpecQueued(IEnumerable<SpecNode> nodes);
        void SpecQueued(SpecNode nodes);
    }

    public interface IBatchObserver : IObserver
    {
        void SpecRequeued(SpecificationPlan plan, ISpecContext context);
        void SpecHandled(SpecificationPlan plan, ISpecContext context);
    }
}