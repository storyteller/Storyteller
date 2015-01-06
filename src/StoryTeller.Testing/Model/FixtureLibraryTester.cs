using System;
using System.Collections.Generic;
using FubuCore.Conversion;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Samples;
using System.Linq;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class FixtureLibraryTester
    {
        [Test]
        public void create_example_test()
        {
            var test = new Test("test1");
            test.Section("a");
            test.Section("b");
            test.Section("c");

            new FixtureLibrary().ModifyExampleTest(test);
            test.Name.ShouldEqual("All Fixtures");
            test.Parts.ShouldHaveTheSameElementsAs<ITestPart>(test.Parts);
        }

        [Test]
        public void description()
        {
            new FixtureLibrary().Description.ShouldBeEmpty();
        }

        [Test]
        public void Title()
        {
            new FixtureLibrary().Label.ShouldEqual("All Fixtures");
        }
    }

}