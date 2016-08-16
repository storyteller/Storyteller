using System;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Samples;

namespace StoryTeller.Testing
{
    public class TestingContext
    {
        static TestingContext()
        {
            var fixture = new StoryTeller.Samples.Fixtures.SentenceFixture();
            Library = FixtureLibrary.CreateForAppDomain(new GrammarSystem().Start());
        }

        private static readonly Lazy<Suite> _hierarchy = new Lazy<Suite>(() => HierarchyLoader.ReadHierarchy(SpecFolder));

        public static string SpecFolder = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
            .AppendPath("Storyteller.Samples", "Specs");


        public static FixtureLibrary Library { get; }

        public static Suite Hierarchy => _hierarchy.Value;

        public static Specification FindSpecification(string id)
        {
            return XmlReader.ReadFromFile(Hierarchy.ToHierarchy().Specifications[id].Filename);
        }

    }
}