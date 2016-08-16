using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model.Persistence
{
    
    public class HierarchyLoaderTester
    {
        [Fact]
        public void read_a_spec_node()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecHeader(path);

            spec.name.ShouldBe("Check properties");
            spec.Lifecycle.ShouldBe(Lifecycle.Acceptance);
            spec.id.ShouldBe("general1"); 
            spec.Filename.ShouldBe(path);

           
            spec.MaxRetries.ShouldBe(3);
        }

        [Fact]
        public void the_spec_type_should_be_header_after_loading_a_spec_as_header()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecHeader(path);

            spec.SpecType.ShouldBe(SpecType.header);
        }

        [Fact]
        public void can_read_max_retries()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecHeader(path);

            spec.MaxRetries.ShouldBe(3);
        }

        [Fact]
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

        [Fact]
        public void SuitePathOf_spec_path()
        {
            var hierarchy = TestingContext.Hierarchy.ToHierarchy();
            hierarchy.Suites["General"].Specifications.Each(x =>
            {
                x.SuitePath().ShouldBe("General");
            });
        }

        [Fact]
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


        [Fact]
        public void convert_the_top_suite_to_a_hierarchy_gets_the_specs()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs");


            var hierarchy = HierarchyLoader.ReadHierarchy(path).ToHierarchy();

            hierarchy.Specifications["embeds"].ShouldNotBeNull();
            hierarchy.Specifications["sentence1"].ShouldNotBeNull();
            hierarchy.Specifications["sentence2"].ShouldNotBeNull();
        }

        [Fact]
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