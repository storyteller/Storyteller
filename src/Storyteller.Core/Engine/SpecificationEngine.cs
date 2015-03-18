using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Storyteller.Core.Model;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    public interface ISpecificationEngine
    {
        void Enqueue(SpecExecutionRequest request);
    }

    public class SpecificationEngine : IDisposable, ISpecificationEngine
    {
        private readonly ConsumingQueue _executionQueue;
        private ConsumingQueue _planning;
        private ConsumingQueue _reader;
        private readonly ISpecRunner _runner;
        private readonly ISystem _system;

        public SpecificationEngine(ISystem system, ISpecRunner runner, IExecutionObserver observer)
        {
            _system = system;
            _runner = runner;

            _executionQueue = new ConsumingQueue(request =>
            {
                var timings = request.StartNewTimings();
                IExecutionContext execution = null;
                try
                {
                    observer.SpecStarted(request);

                    using (timings.Subject("Context", "Creation"))
                    {
                        execution = _system.CreateContext();

                        // TODO -- log a catastrophic error here.
                        // TODO -- makes a good argument for doing the SpecContext creation here!!!!.
                    }

                    var task = _runner.Execute(request, execution, _executionQueue, timings).ContinueWith(t =>
                    {
                        // TODO -- tag the context or plan if timed out?
                        // TODO -- tag the plan as having an attempt?

                        // Shut down several things here
                        t.Result.Dispose();
                        request.SpecExecutionFinished(t.Result);
                    });

                    // TODO -- should have a timeout on it anyway, but things still fail
                    // connect the timeout to the stop conditions
                    task.Wait();
                }
                finally
                {
                    execution.Dispose();
                    observer.SpecFinished(request);
                }
            });

        }

        public void Dispose()
        {
            _system.Dispose();
            _executionQueue.Dispose();
            _planning.Dispose();
            _reader.Dispose();
        }

        public void Enqueue(SpecExecutionRequest request)
        {
            if (request.Specification == null)
            {
                _reader.Enqueue(request);
            }
            else
            {
                _planning.Enqueue(request);
            }

           
        }


        public void Start(StopConditions stopConditions)
        {
            _runner.UseStopConditions(stopConditions);

            var cellHandling = CellHandling.ForSystem(_system);

            var warmup = _system
                .Warmup()
                .ContinueWith(t =>
                {
                    if (!t.IsFaulted)
                    {
                        _executionQueue.Start();
                    }
                    else
                    {
                        throw t.Exception;
                    }
                });

            var fixtures = FixtureLibrary.CreateForAppDomain(cellHandling)
                .ContinueWith(t =>
                {
                    var library = t.Result;
                    _planning = new ConsumingQueue(request =>
                    {
                        request.CreatePlan(library);
                        _executionQueue.Enqueue(request);
                    });

                    _reader = new ConsumingQueue(request =>
                    {
                        request.ReadXml();
                        _planning.Enqueue(request);
                    });

                    _reader.Start();
                    _planning.Start();

                    return t.Result;
                });

            Task.WhenAll(warmup, fixtures).ContinueWith(t =>
            {
                var message = new SystemRecycled
                {
                    success = true,
                    fixtures = fixtures.Result.Models.GetAll().ToArray(),
                    system_name = _system.ToString(),
                    name = Path.GetFileName(AppDomain.CurrentDomain.BaseDirectory)
                };

                if (warmup.IsFaulted)
                {
                    message.success = false;
                    message.error = warmup.Exception.Flatten().InnerExceptions.Select(x => x.ToString()).Join("\n\n");
                }

                EventAggregator.SendMessage(message);

                return message;
            });


        }

    }
}