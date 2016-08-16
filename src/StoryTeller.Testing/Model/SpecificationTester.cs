using System;
using System.Diagnostics;
using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Model
{
    
    public class SpecificationTester
    {
        [Fact]
        public void is_full_by_default()
        {
            new Specification().SpecType
                .ShouldBe(SpecType.full);
        }

        [Fact]
        public void read_spec_data_from_header_mode()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            var spec = HierarchyLoader.ReadSpecHeader(path);
            spec.Children.Any().ShouldBeFalse();

            spec.SpecType.ShouldBe(SpecType.header);

            spec.ReadBody();

            spec.SpecType.ShouldBe(SpecType.full);

            spec.Children.Any().ShouldBeTrue();


        }

        [Fact]
        public void serializes_fine()
        {
            var spec = new Specification();
            var c1 = new Comment();
            spec.Children.Add(c1);
            var section1 = new Section("Foo");
            var s1 = section1.AddStep("foo1");
            var s2 = section1.AddStep("foo1");
            var s3 = section1.AddStep("foo1");


            var section2 = s3.AddCollection("rows");
            var s4 = section2.AddStep("r1");
            var s5 = section2.AddStep("r1");
            var s6 = section2.AddStep("r1");

            spec.Children.Add(section1);
            var c2 = new Comment();
            spec.Children.Add(c2);

            var json = JsonSerialization.ToJson(spec, true);

            Debug.WriteLine(json);
        }

        [Fact]
        public void can_find_all_children()
        {
            var spec = new Specification();
            var c1 = new Comment();
            spec.Children.Add(c1);
            var section1 = new Section("Foo");
            var s1 = section1.AddStep("foo1");
            var s2 = section1.AddStep("foo1");
            var s3 = section1.AddStep("foo1");


            var section2 = s3.AddCollection("rows");
            var s4 = section2.AddStep("r1");
            var s5 = section2.AddStep("r1");
            var s6 = section2.AddStep("r1");

            spec.Children.Add(section1);
            var c2 = new Comment();
            spec.Children.Add(c2);

            var nodes = spec.AllNodes();

            // All comments, steps, sections, and the spec itself
            nodes.Count().ShouldBe(11);

            nodes.ShouldContain(spec);
            nodes.ShouldContain(section1);
            nodes.ShouldContain(section2);
            nodes.ShouldContain(c1);
            nodes.ShouldContain(c2);
            nodes.ShouldContain(s1);
            nodes.ShouldContain(s2);
            nodes.ShouldContain(s3);
            nodes.ShouldContain(s4);
            nodes.ShouldContain(s5);
            nodes.ShouldContain(s6);
        }

        [Fact]
        public void needs_renumbering_negative()
        {
            var spec = new Specification();
            var c1 = new Comment();
            spec.Children.Add(c1);
            var section1 = new Section("Foo");
            var s1 = section1.AddStep("foo1");
            var s2 = section1.AddStep("foo1");
            var s3 = section1.AddStep("foo1");


            var section2 = s3.AddCollection("rows");
            var s4 = section2.AddStep("r1");
            var s5 = section2.AddStep("r1");
            var s6 = section2.AddStep("r1");

            spec.Children.Add(section1);
            var c2 = new Comment();
            spec.Children.Add(c2);

            spec.NeedsToBeRenumbered().ShouldBeFalse();
        }


        [Fact]
        public void needs_renumbering_is_true_because_there_are_duplicate_ids()
        {
            var spec = new Specification();
            var c1 = new Comment();
            spec.Children.Add(c1);
            var section1 = new Section("Foo");
            var s1 = section1.AddStep("foo1");
            var s2 = section1.AddStep("foo1");
            var s3 = section1.AddStep("foo1");


            var section2 = s3.AddCollection("rows");
            var s4 = section2.AddStep("r1");
            var s5 = section2.AddStep("r1");
            var s6 = section2.AddStep("r1");

            s4.id = s5.id = s6.id = Guid.NewGuid().ToString();

            spec.Children.Add(section1);
            var c2 = new Comment();
            spec.Children.Add(c2);

            spec.NeedsToBeRenumbered().ShouldBeTrue();
        }

        [Fact]
        public void apply_renumbering()
        {
            var spec = new Specification();
            var c1 = new Comment();
            spec.Children.Add(c1);
            var section1 = new Section("Foo");
            var s1 = section1.AddStep("foo1");
            var s2 = section1.AddStep("foo1");
            var s3 = section1.AddStep("foo1");


            var section2 = s3.AddCollection("rows");
            var s4 = section2.AddStep("r1");
            var s5 = section2.AddStep("r1");
            var s6 = section2.AddStep("r1");

            s4.id = s5.id = s6.id = Guid.NewGuid().ToString();

            spec.Children.Add(section1);
            var c2 = new Comment();
            spec.Children.Add(c2);

            spec.ApplyRenumbering();

            s4.id.ShouldNotBe(s5.id);
            s5.id.ShouldNotBe(s6.id);
            s4.id.ShouldNotBe(s6.id);
        }

        [Fact]
        public void clear_breakpoints()
        {
            var specification = new Specification();
            var breakpoint1 = new Breakpoint("1", null);
            var breakpoint2 = new Breakpoint("2", null);
            specification.Breakpoints = new[] {breakpoint1, breakpoint2,};

            specification.ClearBreakpoints();

            specification.Breakpoints.Any().ShouldBeFalse();
        }

        [Fact]
        public void set_breakpoint()
        {
            var breakpoint1 = new Breakpoint("1", null);
            var breakpoint2 = new Breakpoint("2", null);

            var specification = new Specification();

            specification.SetBreakpoint(breakpoint1);
            specification.SetBreakpoint(breakpoint2);

            specification.SetBreakpoint(breakpoint1);
            specification.SetBreakpoint(breakpoint2);

            specification.Breakpoints.ShouldHaveTheSameElementsAs(breakpoint1, breakpoint2);
        }

        [Fact]
        public void remove_breakpoint()
        {
            var breakpoint1 = new Breakpoint("1", null);
            var breakpoint2 = new Breakpoint("2", null);

            var specification = new Specification();

            specification.SetBreakpoint(breakpoint1);
            specification.SetBreakpoint(breakpoint2);

            specification.RemoveBreakpoint(breakpoint1);

            specification.Breakpoints.Single()
                .ShouldBe(breakpoint2);
        }

        [Fact]
        public void matches_breakpoint()
        {
            var breakpoint1 = new Breakpoint("1", null);
            var breakpoint2 = new Breakpoint("2", 0);

            var specification = new Specification();

            specification.SetBreakpoint(breakpoint1);
            specification.SetBreakpoint(breakpoint2);

            specification.MatchesBreakpoint("3", null).ShouldBeFalse();
            specification.MatchesBreakpoint("2", 1).ShouldBeFalse();
            specification.MatchesBreakpoint("2", 0).ShouldBeTrue();
            specification.MatchesBreakpoint("1", null).ShouldBeTrue();

        }
    }
}