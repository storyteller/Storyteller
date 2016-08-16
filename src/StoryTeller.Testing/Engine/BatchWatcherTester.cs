using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    
    public class BatchWatcherTester
    {
        [Fact]
        public void complete_immediately_with_no_specs()
        {
            var watcher = new BatchWatcher(Enumerable.Empty<Specification>());
            watcher.Task.IsCompleted.ShouldBeTrue();
            watcher.Task.Result.ShouldBe(Enumerable.Empty<BatchRecord>());
        }

        [Fact]
        public void does_not_complete_until_all_specs_are_handled()
        {
            var specs = new[]
            {
                new Specification(),
                new Specification(),
                new Specification()
            };
            var watcher = new BatchWatcher(specs);
            watcher.Task.IsCompleted.ShouldBeFalse();

            var results = specs.Select(x => new SpecResults()).ToArray();

            var specPlans = specs.Select(x =>
            {
                return new SpecificationPlan(Enumerable.Empty<CompositeExecution>())
                {
                    Specification = x
                };
            }).ToArray();

            for (var i = 0; i < specs.Length; i++)
            {
                watcher.SpecHandled(specPlans[i], results[i]);

                if (i < specs.Length - 1)
                {
                    watcher.Task.IsCompleted.ShouldBeFalse();
                }
            }

            watcher.Task.IsCompleted.ShouldBeTrue();
            var records = watcher.Task.Result;

            records.Select(x => x.results).ShouldBe(results);
            records.Select(x => x.specification).ShouldBe(specs);
        }
    }
}