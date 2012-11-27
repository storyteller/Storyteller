using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Samples;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.Execution
{

    [TestFixture]
    public class when_the_system_type_name_is_null_or_empty
    {
        private FixtureAssembly fa;

        [SetUp]
        public void SetUp()
        {
            fa = new FixtureAssembly();
        }

        [Test]
        public void the_system_should_be_nullo_system()
        {
            fa.System.ShouldBeOfType<NulloSystem>();
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
            fa.System.ShouldBeOfType<GrammarSystem>();
        }
    }
}