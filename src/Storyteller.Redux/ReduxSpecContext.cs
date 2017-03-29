using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller;

namespace Storyteller.Redux
{

    public class ReduxSagaExtension
    {
        
    }

    public class ReduxSpecContext
    {
        private readonly ISpecContext _context;
        private readonly IList<Waiter> _waiters = new List<Waiter>();
        private int _revision;


        public string CurrentState;

        public ReduxSpecContext(ISpecContext context)
        {
            _context = context;
        }

        public int Revision
        {
            get { return _revision; }
            set
            {
                _revision = value;
                foreach (var waiter in _waiters)
                    waiter.Finish(_revision);
            }
        }

        public void ConsoleLog(string text)
        {
            _context.Reporting.ReporterFor<ConsoleLogReport>().Logs.Add(text);
        }

        public void RecordJsError(string text)
        {
            _context.Reporting.ReporterFor<JavascriptErrors>().Errors.Add(text);
        }

        public Task WaitForAnUpdate(Action action)
        {
            var waiter = new Waiter(Revision, _waiters);
            _waiters.Add(waiter);

            action();

            return waiter.Task;
        }
    }
}