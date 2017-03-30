using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using StoryTeller;
using StoryTeller.Json;

namespace Storyteller.Redux
{
    public class ReduxSpecContext
    {
        private readonly ISpecContext _context;
        private readonly IList<Waiter> _waiters = new List<Waiter>();
        private int _revision;

        public string CurrentState { get; set; }

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
                foreach (var waiter in _waiters.ToArray())
                {
                    waiter.Finish(_revision);
                }
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

        public void UpdateState(JToken token)
        {
            var json = token["state"].ToString();


            CurrentState = json;
            Revision = token["revision"].ToObject<int>();
            _context.State.StoreJson(json);
        }
    }
}