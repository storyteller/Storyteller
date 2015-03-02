using System;
using System.Linq;
using System.Runtime.InteropServices;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine.Batching;
using Storyteller.Core.Equivalence;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine
{
    public class SpecRunner<T> : IDisposable where T : ISystem, new()
    {
        private readonly T _system;
        private readonly FixtureLibrary _library;

        public SpecRunner()
        {
            _system = new T();
            var handling = new CellHandling(new EquivalenceChecker(), new Conversions(_system.ConversionProviders()));
            var task = FixtureLibrary.CreateForAppDomain(handling);
            task.Wait(15.Seconds());

            _library = task.Result;
        }

        public void Dispose()
        {
            _system.Dispose();
        }

        public readonly StopConditions StopConditions = new StopConditions();


        public SpecResults Execute(Specification specification)
        {
            var plan = specification.CreatePlan(_library);
            var timings = new Timings();
            timings.Start(specification);

            IExecutionContext execution = null;

            using (timings.Subject("Context", "Creation"))
            {
                execution = _system.CreateContext();
            }

            var context = new SpecContext(specification, timings, new NulloResultObserver(), StopConditions,
                execution.Services);

            var executor = new SynchronousExecutor(context);
            plan.AcceptVisitor(executor);



            execution.Dispose();
            context.Dispose();

            return context.FinalizeResults();
        }
    }
}