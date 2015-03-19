using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Engine.Batching;
using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using StoryTeller.Samples;

namespace Storyteller.Core.Testing
{
    [TestFixture, Explicit]
    public class performance_tuning
    {
        private readonly string _folder = ".".ToFullPath()
            .ParentDirectory().ParentDirectory().ParentDirectory()
            .AppendPath("Storyteller.Samples", "Specs");

        private Suite _hierarchy;
        private SpecNode[] _allSpecs;

        [TestFixtureSetUp]
        public void SetUp()
        {
            _hierarchy = HierarchyLoader.ReadHierarchy(_folder);
            _allSpecs = _hierarchy.GetAllSpecs().ToArray();
        }

        [Test]
        public void run_everything_crudely()
        {
            var system = new GrammarSystem();
            var task = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());
            task.Wait();

            var library = task.Result;

            var observer = new NulloResultObserver();
            var stopConditions = new StopConditions();

            _allSpecs.Each(node =>
            {
                var spec = XmlReader.ReadFromFile(node.Filename);
                var plan = spec.CreatePlan(library);

                using (var execution = system.CreateContext())
                {
                    var context = new SpecContext(spec, null, observer, stopConditions, execution.Services);
                    var executor = new SynchronousExecutor(context);
                    plan.AcceptVisitor(executor);

                    Debug.WriteLine(node.path + ": " + context.Counts);
                }
            });
        }

        [Test]
        public void run_everything_with_the_new_batch_runner()
        {
            var system = new GrammarSystem();
            var observer = new BatchObserver();
            var task = observer.MonitorBatch(_allSpecs);

            var executionMode = new BatchExecutionMode(observer);
            var engine = new SpecificationEngine(system, new SpecRunner(executionMode, system), new NulloObserver());
            _allSpecs.Each(x => engine.Enqueue(SpecExecutionRequest.For(x)));

            engine.Start(new StopConditions());

            task.Wait();
        }
    }
}