using System.Threading.Tasks;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing
{
    public class TestingContext
    {
        static TestingContext()
        {
            var fixture = new StoryTeller.Samples.Fixtures.SentenceFixture();
            _library = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());
        }

        private static readonly Task<FixtureLibrary> _library;

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

    }
}