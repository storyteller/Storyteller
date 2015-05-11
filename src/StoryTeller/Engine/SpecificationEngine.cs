using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Model;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine
{
    public interface ISpecificationEngine
    {
        void Enqueue(SpecExecutionRequest request);
        void CancelRunningSpec(string id);
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
                if (request.IsCancelled)
                {
                    return;
                }

                observer.SpecStarted(request);
                var results = _runner.Execute(request, _executionQueue );

                if (!request.IsCancelled && results != null)
                {
                    // TODO -- combine the two things here?
                    request.SpecExecutionFinished(results);
                    observer.SpecFinished(request);
                }
            });

        }

        public void Dispose()
        {
            _system.Dispose();
            _executionQueue.Dispose();
            if (_planning != null) _planning.Dispose();
            if (_reader != null) _reader.Dispose();
        }

        public void Enqueue(SpecExecutionRequest request)
        {
            if (request.Specification.SpecType == SpecType.header)
            {
                _reader.Enqueue(request);
            }
            else
            {
                _planning.Enqueue(request);
            }

           
        }

        public void CancelRunningSpec(string id)
        {
            _runner.Cancel(id);
        }

        private Task<SystemRecycled> tryToStart()
        {
            CellHandling cellHandling = null;
            try
            {
                cellHandling = _system.Start();
            }
            catch (Exception ex)
            {
                var message = new SystemRecycled
                {
                    success = false,
                    fixtures = new FixtureModel[0],
                    system_name = _system.ToString(),
                    name = Path.GetFileName(AppDomain.CurrentDomain.BaseDirectory),
                    error = ex.ToString()
                };

                return Task.FromResult(message);
            }

            return FixtureLibrary.CreateForAppDomain(cellHandling)
                .ContinueWith(t =>
                {
                    var library = t.Result;

                    startTheConsumingQueues(library);

                    return new SystemRecycled
                    {
                        success = true,
                        fixtures = library.Models.GetAll().ToArray(),
                        system_name = _system.ToString(),
                        name = Path.GetFileName(AppDomain.CurrentDomain.BaseDirectory)
                    };
                });

            
        }

        private void startTheConsumingQueues(FixtureLibrary library)
        {
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
        }

        public void Start(StopConditions stopConditions)
        {
            _runner.UseStopConditions(stopConditions);
            _executionQueue.Start();

            tryToStart().ContinueWith(t => EventAggregator.SendMessage(t.Result));
        }

    }
}