using System;
using System.IO;
using System.Linq;
using Baseline;
using NSubstitute;
using Shouldly;
using StoryTeller;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;
using ST.Client;
using Xunit;

namespace dotnet_storyteller.Testing
{
    public class fixture_overrides_for_set_verifications
    {
        private readonly string theFixtureDirectory = Path.GetTempPath().AppendPath(Guid.NewGuid().ToString());
        private readonly IClientConnector theClient = Substitute.For<IClientConnector>();
        private FixtureController theController;
        private readonly FixtureLibrary theSystemFixtures = new FixtureLibrary();
        private FixtureLibrary _combined;

        public fixture_overrides_for_set_verifications()
        {
            Directory.CreateDirectory(theFixtureDirectory);
            theController = new FixtureController(theClient, new StubFixtureFileWatcher());
            theController.StartWatching(theFixtureDirectory);
        }

        public void Dispose()
        {
            try
            {
                Directory.Delete(theFixtureDirectory, true);
            }
            catch (Exception)
            {
                // Nothing
            }
        }

        private void writeFile(string key, string markdown)
        {
            var file = theFixtureDirectory.AppendPath(key + ".md");
            new FileSystem().WriteStringToFile(file, markdown);
        }



        private void overrides<T>(string markdown) where T : Fixture, new()
        {
            var key = new T().Key;

            writeFile(key, markdown);
        }

        private FixtureLibrary theCombinedFixtures
        {
            get
            {
                if (_combined == null)
                {
                    theController.RecordSystemFixtures(theSystemFixtures);
                    theController.ReloadFixtures();

                    _combined = FixtureLibrary.From(theController.CombinedFixtures());
                }

                return _combined;
            }
        }

        [Fact]
        public void only_in_the_markdown()
        {
            writeFile("CheckSets", @"
## TheStatesShouldBe
### The States should be
|set|Name|Abbreviation|


");

            var @set = theCombinedFixtures.Models["CheckSets"]
                .FindGrammar("TheStatesShouldBe").ShouldBeOfType<SetVerification>();

            @set.title.ShouldBe("The States should be");
        }

        [Fact]
        public void override_title_and_cell_properties_of_an_existing_set()
        {
            overrides<CheckSetsFixture>(@"
## TheStatesShouldBe
### The States should be
|set    |Name           |Abbreviation|
|default|Texas          |TX          |
|options|Texas, Missouri|TX, MO      |

");
            theSystemFixtures.Models["CheckSets"] = new CheckSetsFixture().Compile(CellHandling.Basic());

            var @set = theCombinedFixtures.Models["CheckSets"]
                .FindGrammar("TheStatesShouldBe").ShouldBeOfType<SetVerification>();

            @set.title.ShouldBe("The States should be");

            @set.cells.Single(x => x.Key == "Name").DefaultValue.ShouldBe("Texas");
            @set.cells.Single(x => x.Key == "Abbreviation").DefaultValue.ShouldBe("TX");
        }


    }

    public class CheckSetsFixture : Fixture
    {
        public IGrammar CheckSets()
        {
            return VerifySetOf(() => new State[0])
                .Titled("Original Title")
                .MatchOn(x => x.Name, x => x.Abbreviation);

        }
    }

    public class State
    {
        public string Name { get; set; }
        public string Abbreviation { get; set; }
    }
}