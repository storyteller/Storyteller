using System;
using System.Linq;
using System.Threading.Tasks;
using FubuCore;
using FubuMVC.Core.Services;
using NUnit.Framework;
using Shouldly;
using ST.Docs.Samples;
using StructureMap;

namespace StoryTeller.Testing.ST.Docs.Samples
{
    [TestFixture]
    public class SampleBuilderTester
    {
        // SAMPLE: sample-sample-building-test
        [Test]
        public void try_it_out_on_this()
        {
            // I wrote a comment here

            using (var container = Container.For<SampleRegistry>())
            {
                var builder = container.GetInstance<ISampleBuilder>();
                var path = AppDomain.CurrentDomain.BaseDirectory.ParentDirectory().ParentDirectory();

                var tasks = builder.ScanFolder(path).ToArray();
                Task.WaitAll(tasks);

                var cache = container.GetInstance<ISampleCache>();

                var sample = cache.Find("sample-sample-building-test");
                sample.Language.ShouldBe("csharp");
                sample.Text.ShouldContain("// I wrote a comment here");
            }
        }
        // ENDSAMPLE

        [Test, Explicit("Too flakey with timings to be in C#")]
        public void try_to_find_a_new_snippet_in_a_changed_file()
        {
            var folder = AppDomain.CurrentDomain.BaseDirectory.AppendPath(Guid.NewGuid().ToString());
            var file = folder.AppendPath("fake.cs");

            new FileSystem().WriteStringToFile(file, @"
// SAMPLE: fake-sample
var x = 1;
// ENDSAMPLE

");


            using (var container = Container.For<SampleRegistry>())
            {
                var builder = container.GetInstance<ISampleBuilder>();

                var tasks = builder.ScanFolder(folder).ToArray();
                Task.WaitAll(tasks);

                builder.EnableWatching();

                var cache = container.GetInstance<ISampleCache>();

                Wait.Until(() =>
                {
                    return cache.Find("fake-sample").Text.Contains("var x = 1;");
                });

                var sample = cache.Find("fake-sample");
                sample.Text.ShouldContain("var x = 1;");
                
                new FileSystem().WriteStringToFile(file, @"
// SAMPLE: fake-sample
var x = 2;
// ENDSAMPLE

");

                Wait.Until(() =>
                {
                    return cache.Find("fake-sample").Text.Contains("var x = 2;");
                })
                .ShouldBeTrue();

                
            }

        }
    }
}