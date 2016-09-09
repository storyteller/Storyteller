using System;
using System.Reflection;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Samples;
using StoryTeller.Samples.Fixtures;

namespace StoryTeller.Testing
{
    public class TestingContext
    {
        static TestingContext()
        {
            _library = new Lazy<FixtureLibrary>(() =>
            {
                try
                {
                    var fixture = new SentenceFixture();
                    return FixtureLibrary.CreateForAppDomain(new GrammarSystem().Start());
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.ToString());
                    throw;
                }
            });


        }

        private static readonly Lazy<Suite> _hierarchy = new Lazy<Suite>(() => HierarchyLoader.ReadHierarchy(SpecFolder));

        public static string SpecFolder = FindParallelDirectory("Storyteller.Samples").AppendPath("Specs");
        private static readonly Lazy<FixtureLibrary> _library;


        public static FixtureLibrary Library => _library.Value;

        public static Suite Hierarchy => _hierarchy.Value;

        public static Specification FindSpecification(string id)
        {
            return XmlReader.ReadFromFile(Hierarchy.ToHierarchy().Specifications[id].Filename);
        }

        public static string FindParallelDirectory(string projectName)
        {
            var path = AppContext.BaseDirectory;
            while (!path.EndsWith("src"))
            {
                path = path.ParentDirectory();
            }

            path = path.AppendPath(projectName);

            return path;
        }

        public static string FindProjectFolder()
        {
            var path = ".".ToFullPath();
            while (!path.EndsWith("Storyteller.Testing", StringComparison.OrdinalIgnoreCase))
            {
                path = path.ParentDirectory();
            }

            return path;
        }

        public static string FindClientFolder()
        {
            var path = ".".ToFullPath();
            while (!path.EndsWith("src"))
            {
                path = path.ParentDirectory();
            }

            path = path.ParentDirectory().AppendPath("client");

            return path;
        }

    }
}