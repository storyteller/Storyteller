using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks.Constraints;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.Grammars
{
    [TestFixture]
    public class FixtureLibraryTester
    {
        [Test]
        public void builds_for_all_the_non_hidden_fixtures()
        {
            var task = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());
            
            task.Wait();

            var library = task.Result;

            library.Fixtures["Open"].ShouldBeOfType<OpenFixture>();

            // aliased fixture

            library.Fixtures["HanSolo"].ShouldBeOfType<AliasedFixture>();

            library.Fixtures.Has(new SecretFixture().Key).ShouldBeFalse();
        }

        [Test]
        public void build_for_fixture_that_blows_up()
        {
            var compiled = FixtureLibrary.CreateCompiledFixture(CellHandling.Basic(), typeof (FixtureThatBlowsUp));
            compiled.Model.implementation.ShouldEqual(typeof (FixtureThatBlowsUp).FullName);
        }
    }

    [Hidden]
    public class SecretFixture : Fixture
    {
        
    }

    public class OpenFixture : Fixture
    {
        
    }

    public class AliasedFixture : Fixture
    {
        public AliasedFixture()
        {
            Key = "HanSolo";
        }
    }
}