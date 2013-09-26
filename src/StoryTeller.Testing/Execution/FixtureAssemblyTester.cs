using System;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using Examples;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Samples;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.Execution
{
    [TestFixture]
    public class FixtureAssembly_construction_from_Project
    {
        [Test]
        public void copies_the_root_and_assembly_names()
        {
            var project = new Project
            {
                ProjectFolder = Path.Combine("src", "Foo"),
            };

            var assembly = new FixtureAssembly(project);
            assembly.RootFolder.ShouldEqual(project.GetTestFolder());
            assembly.AssemblyName.ShouldEqual("Foo");
        }

        [Test]
        public void can_find_candidate_types()
        {
            var types = new FixtureAssembly().FindSystemTypes();
            types.ShouldContain(typeof(FooSystem));
            types.ShouldContain(typeof(BarSystem));

        }

        
    }

    public class FooSystem : NulloSystem
    {
        
    }

    public class BarSystem : NulloSystem
    {
        
    }

    [TestFixture]
    public class when_the_system_is_not_specified_and_there_is_only_on_in_the_assembly
    {
        [Test]
        public void use_the_single_type_from_the_named_assembly()
        {
            var fa = new FixtureAssembly
            {
                AssemblyName = typeof (ExampleSystem).Assembly.GetName().Name
            };

            fa.DetermineSystemType().ShouldEqual(typeof (ExampleSystem));
            fa.FindSystem().ShouldBeOfType<ExampleSystem>();
        }
    }

    [TestFixture]
    public class when_the_system_is_not_specified_and_one_is_found
    {
        [Test]
        public void use_the_single_type()
        {
            var fa = MockRepository.GenerateMock<FixtureAssembly>();
            var types = new Type[] {typeof (BarSystem)};
            fa.Stub(x => x.FindSystemTypes()).Return(types);

            fa.FindSystem().ShouldBeOfType<BarSystem>();
        }
    }

    [TestFixture]
    public class when_the_system_type_name_is_null_or_empty_and_there_are_multiple_candidates
    {
        private FixtureAssembly fa;

        [SetUp]
        public void SetUp()
        {
            fa = new FixtureAssembly();
            fa.FindSystemTypes().Count().ShouldBeGreaterThan(1);
        }

        [Test]
        public void the_system_should_be_nullo_system()
        {
            fa.FindSystem().ShouldBeOfType<NulloSystem>();
        }
    }

    [TestFixture]
    public class when_the_system_type_is_specified
    {
        private FixtureAssembly fa;

        [SetUp]
        public void SetUp()
        {
            fa = new FixtureAssembly(new Project()
            {
                ProjectFolder = "root",
                SystemTypeName = typeof(GrammarSystem).AssemblyQualifiedName
            });
        }

        [Test]
        public void fixture_assembly_does_capture_the_root_folder()
        {
            fa.RootFolder.ShouldNotBeEmpty();
        }

        [Test]
        public void the_system_type_should_be_the_type_specified()
        {
            fa.FindSystem().ShouldBeOfType<GrammarSystem>();
        }
    }
}