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
                observer.SpecStarted(request);
                var results = _runner.Execute(request, _executionQueue);

                // TODO -- watch for some kind of catastropic exception here?
                // TODO -- combine the two things here?
                request.SpecExecutionFinished(results);
                observer.SpecFinished(request);
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