﻿using System.Linq;
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
        public void should_store_the_new_specification()
        {
            theHierarchy.Specifications["embeds"].ShouldBeTheSameAs(theNew);
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