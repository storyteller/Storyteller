using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core
{
    public interface IFixture
    {
        bool IsHidden();

        FixtureModel Compile(CellHandling conversions);

        IGrammar GrammarFor(string key);

        string Key { get; }
        ISpecContext Context { get; set; }
        void SetUp();
        void TearDown();
    }
}