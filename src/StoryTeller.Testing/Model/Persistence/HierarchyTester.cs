using System.Linq;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Testing.Model.Persistence
{
    [TestFixture]
    public class when_replacing_a_specification
    {
        private Hierarchy theHierarchy;
        private Specification theOriginal;
        private Specification theNew;

        [SetUp]
        public void SetUp()
        {
            theHierarchy = HierarchyLoader.ReadHierarchy(TestingContext.SpecFolder).ToHierarchy();

            theOriginal = theHierarchy.Specifications["embeds"];
            theNew = theOriginal.Clone();
            theNew.path = null;
            theNew.id = theOriginal.id; // gets a new id by default

            theHierarchy.Replace(theNew);
        }

        [Test]
        public void remove_a_spec_that_exists()
        {
            var expected = theHierarchy.Specifications["embeds"];

            var removed = theHierarchy.RemoveSpec("embeds");

            expected.ShouldBeSameAs(removed);

            theHierarchy.Specifications.Has("embeds").ShouldBeFalse();

            // There is only the one spec in Embeds to begin with
            theHierarchy.Suites["Embedded"].specs.Length.ShouldBe(0);
        }

        [Test]
        public void try_to_remove_a_spec_that_does_not_exist()
        {
            theHierarchy.RemoveSpec("non existent").ShouldBeNull();
        }

        [Test]
        public void should_store_the_new_specification()
        {
            theHierarchy.Specifications["embeds"].ShouldBeTheSameAs(theNew);
        }

        [Test]
        public void the_new_specification_should_have_the_same_file_name_as_the_original()
        {
            theNew.Filename.ShouldBe(theOriginal.Filename);
        }

        [Test]
        public void the_old_spec_is_no_longer_held_by_the_suite()
        {
            theHierarchy.Suites[theOriginal.SuitePath()].specs
                .Any(x => ReferenceEquals(x, theOriginal))
                .ShouldBeFalse();
        }
        
        [Test]
        public void the_new_spec_is_in_the_parent_suite()
        {
            theHierarchy.Suites[theOriginal.SuitePath()].specs
                .Any(x => ReferenceEquals(x, theNew))
                .ShouldBeTrue();
        }

        [Test]
        public void the_new_spec_should_know_its_suite_path()
        {
            theNew.SuitePath().ShouldBe(theOriginal.SuitePath());
        }
    }
}