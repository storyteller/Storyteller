using System;
using Baseline;
using StoryTeller;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.Markdown;
using StoryTeller.Samples;
using StoryTeller.Samples.Fixtures;

namespace dotnet_storyteller.Testing
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
                    var factFixture = new FactFixture();
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

        public static string SpecFolder = FindParallelDirectory("Storyteller.Samples").AppendPath("Specs");
        private static readonly Lazy<FixtureLibrary> _library;


        public static FixtureLibrary Library => _library.Value;

        public static Suite Hierarchy => _hierarchy.Value;

        public static Specification FindSpecification(string id)
        {
            return MarkdownReader.ReadFromFile(Hierarchy.ToHierarchy().Specifications[id].Filename);
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
    
    public class FactFixture : Fixture
    {
        public static bool IsSo = false;

        public FactFixture()
        {
            this["CheckIsSo"] = Fact("Check is so")
                .VerifiedBy(() => IsSo);

            this["CheckIsNotSo"] = Fact("Check is not so")
                .VerifiedBy(() => !IsSo);

            this["SetState"] 
                = Do<string>("Set state to {state}", (text, c) => c.State.Store("state", text));


            this["StateIsTexas"] =
                Fact("Check that the state is Texas")
                    .VerifiedBy(c => c.State.Retrieve<string>("state") == "Texas");


            this["ServiceIsOn"] = Fact("Check service is on")
                .VerifiedBy<CheckService>(s => s.On);

            this["ServiceIsOff"] = Fact("Check service is off")
                .VerifiedBy<CheckService>(s => !s.On);
        }
    }
    
    public class CheckService
    {
        public bool On;
    }
}