using System;
using System.Threading.Tasks;
using FubuCore;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Testing
{
    public class TestingContext
    {
        static TestingContext()
        {
            var fixture = new StoryTeller.Samples.Fixtures.SentenceFixture();
            _library = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());
        }

        private static readonly Task<FixtureLibrary> _library;

        private static readonly Lazy<Suite> _hierarchy = new Lazy<Suite>(() =>
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs");

            return HierarchyLoader.ReadHierarchy(path);

        }); 

        public static FixtureLibrary Library
        {
            get
            {
                _library.Wait();
                if (_library.IsFaulted)
                {
                    throw _library.Exception;
                }

                return _library.Result;
            }
        }

        public static Suite Hierarchy
        {
            get { return _hierarchy.Value; }
        }

    }
}