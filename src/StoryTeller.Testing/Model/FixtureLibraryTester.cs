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