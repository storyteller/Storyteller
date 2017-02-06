using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using StoryTeller.Engine;

namespace StoryTeller
{
    public class AggregateLineExecution : ILineExecution
    {
        private readonly ILineExecution[] _lines;

        public AggregateLineExecution(IEnumerable<ILineExecution> lines)
        {
            if (lines == null || !lines.Any())
            {
                throw new ArgumentNullException(nameof(lines));
            }

            _lines = lines.ToArray();
            Id = lines.First().Id;

        }

        public async Task ExecuteAsync(SpecContext context, CancellationToken cancellation)
        {
            foreach (var line in _lines)
            {
                await line.ExecuteAsync(context, cancellation).ConfigureAwait(false);
            }
        }

        public int Count()
        {
            return _lines.Length;
        }

        public void AcceptVisitor(ILineStepGatherer gatherer)
        {
            gatherer.Line(this);
        }

        public void Execute(SpecContext context)
        {
            foreach (var line in _lines)
            {
                line.Execute(context);
            }
        }

        public object Position { get; set; } = null;
        public string Id { get; }
    }
}