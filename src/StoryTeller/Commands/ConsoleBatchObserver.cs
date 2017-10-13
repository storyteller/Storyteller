using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Commands
{
    public class ConsoleBatchObserver : IBatchObserver
    {
        private readonly int _total;
        private int _number = 0;
        private readonly int _padding;
        private readonly int _indent;

        public ConsoleBatchObserver(int total)
        {
            _total = total;
            _padding = _total.ToString().Length;
            _indent = _padding * 2 + 4;
        }

        public void SpecRequeued(SpecExecutionRequest request)
        {
            ConsoleWriter.WriteWithIndent(ConsoleColor.Yellow, _indent, $"==> Requeueing {request.Specification.path}");
        }

        public void SpecHandled(SpecExecutionRequest request, SpecResults results)
        {
            var message = $"{(++_number).ToString().PadLeft(_padding)}/{_total}). {request.Specification.path}";

            var color = results.Counts.WasSuccessful() ? ConsoleColor.Green : ConsoleColor.Red;
            
            ConsoleWriter.Write(color, message);
        }

    }
}