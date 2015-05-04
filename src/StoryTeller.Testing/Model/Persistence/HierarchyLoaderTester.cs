using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model.Persistence
{
    [TestFixture]
    public class HierarchyLoaderTester
    {
        [Test]
        public void read_a_spec_node()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecNode(path);

            spec.name.ShouldBe("Check properties");
            spec.Lifecycle.ShouldBe(Lifecycle.Acceptance);
            spec.id.ShouldBe("general1"); 
            spec.Filename.ShouldBe(path);

           
            spec.MaxRetries.ShouldBe(3);
        }

        [Test]
        public void the_spec_type_should_be_header_after_loading_a_spec_as_header()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecNode(path);

            spec.SpecType.ShouldBe(SpecType.header);
        }

        [Test]
        public void can_read_max_retries()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecNode(path);

            spec.MaxRetries.ShouldBe(3);
        }

        [Test]
        public void read_an_entire_suite()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs");


            var hierarchy = HierarchyLoader.ReadHierarchy(path);

            hierarchy.suites.Select(x => x.name)
                .ShouldHaveTheSameElementsAs("Embedded", "General", "Paragraphs", "Sentences", "Sets", "Tables");

            /*
            var serializer = new Newtonsoft.Json.JsonSerializer();
            var writer = new StringWriter();
            serializer.Serialize(writer, hierarchy);

            var json = writer.ToString();

            Debug.WriteLine(json);
             * */
        }

        [Test]
        public void SuitePathOf_spec_path()
        {
            var hierarchy = TestingContext.Hierarchy.ToHierarchy();
            hierarchy.Suites["General"].specs.Each(x =>
            {
                x.SuitePath().ShouldBe("General");
            });
        }

        [Test]
        public void convert_the_top_suite_to_a_hierarchy_gets_the_suites()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs");


            var hierarchy = HierarchyLoader.ReadHierarchy(path).ToHierarchy();

            hierarchy.Suites[string.Empty].ShouldNotBeNull();
            hierarchy.Suites[string.Empty].suites.Count().ShouldBe(6);

            hierarchy.Suites.Select(x => x.path)
                .ShouldHaveTheSameElementsAs("", "Embedded", "General", "Paragraphs", "Sentences", "Sets", "Tables");
        }


        [Test]
        public void convert_the_top_suite_to_a_hierarchy_gets_the_specs()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs");


            var hierarchy = HierarchyLoader.ReadHierarchy(path).ToHierarchy();

            hierarchy.Nodes["embeds"].ShouldNotBeNull();
            hierarchy.Nodes["sentence1"].ShouldNotBeNull();
            hierarchy.Nodes["sentence2"].ShouldNotBeNull();
        }

        [Test, Explicit]
        public void pretty_print_for_sample_data()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs");


            var hierarchy = HierarchyLoader.ReadHierarchy(path);

            var json = JsonSerialization.ToJson(hierarchy).FormatJson();
            Debug.WriteLine(json);
        }
    }
}