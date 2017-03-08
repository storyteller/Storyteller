using System;
using System.Reflection;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.Markdown;
using StoryTeller.Samples;
using StoryTeller.Samples.Fixtures;
using StoryTeller.Testing.EndToEndExecution;

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
                    var library = FixtureLibrary.CreateForAppDomain(new GrammarSystem().Start());

                    // Need to force it to use this one instead of the FactFixture in the samples project
                    var factFixture = new StoryTeller.Testing.EndToEndExecution.FactFixture();
                    library.Models["Fact"] = factFixture.Compile(CellHandling.Basic());
                    library.Fixtures["Fact"] = factFixture;

                    return library;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.ToString());
                    throw;
                }
            });


        }

        private static readonly Lazy<Suite> _hierarchy = new Lazy<Suite>(() => HierarchyLoader.ReadHierarchy(SpecFolder));

        public static string SpecFolder = FindParallelDirectory("StoryTeller.Samples").AppendPath("Specs");
        private static readonly Lazy<FixtureLibrary> _library;


        public static FixtureLibrary Library => _library.Value;

        public static Suite Hierarchy => _hierarchy.Value;

        public static Specification FindSpecification(string id)
        {
            return MarkdownReader.ReadFromFile(Hierarchy.ToHierarchy().Specifications[id].Filename);
        }

        public static string FindParallelDirectory(string projectName)
        {
#if NET46
            var path = AppDomain.CurrentDomain.BaseDirectory;
#else
            var path = AppContext.BaseDirectory;
#endif

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