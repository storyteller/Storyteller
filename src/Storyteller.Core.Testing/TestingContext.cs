using System.Threading.Tasks;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing
{
    public class TestingContext
    {
        private static readonly Task<FixtureLibrary> _library = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());

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