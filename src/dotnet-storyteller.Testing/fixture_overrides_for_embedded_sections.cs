using System;
using System.IO;
using System.Linq;
using Baseline;
using NSubstitute;
using Shouldly;
using StoryTeller;
using StoryTeller.Model;
using ST.Client;
using Xunit;

namespace dotnet_storyteller.Testing
{
    public class fixture_overrides_for_embedded_sections : IDisposable
    {
        private readonly string theFixtureDirectory = Path.GetTempPath().AppendPath(Guid.NewGuid().ToString());
        private readonly IClientConnector theClient = Substitute.For<IClientConnector>();
        private FixtureController theController;
        private readonly FixtureLibrary theSystemFixtures = new FixtureLibrary();
        private FixtureLibrary _combined;

        public fixture_overrides_for_embedded_sections()
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
        public void both_fixtures_in_markdown_only()
        {
            writeFile("Actions", @"
## GoLeft
### Go left
");

            writeFile("Master", @"
## MoveAround
### Move Around
embeds Actions
");
            var grammar = theCombinedFixtures.Models["Master"]
                .FindGrammar("MoveAround").ShouldBeOfType<EmbeddedSection>();

            grammar.ShouldNotBeNull();
            grammar.fixture.FindGrammar("GoLeft")
                .ShouldBeOfType<Sentence>();
        }


        [Fact]
        public void embed_grammar_in_markdown_fixture_implemented()
        {
            writeFile("Master", @"
## MoveAround
### Move Around
embeds Actions
");

            theSystemFixtures.Models["Actions"] = new ActionsFixture().Compile(CellHandling.Basic());

            var grammar = theCombinedFixtures.Models["Master"]
                .FindGrammar("MoveAround").ShouldBeOfType<EmbeddedSection>();

            grammar.fixture.grammars.Select(x => x.key).Where(x => x != "TODO").OrderBy(x => x)
                .ShouldHaveTheSameElementsAs("GoForward", "GoLeft", "GoRight");

        }

        [Fact]
        public void can_override_the_title_of_the_embedded_grammar()
        {
            writeFile("Master", @"
## MoveAround
### Move Around
embeds Actions
");

            theSystemFixtures.Models["Actions"] = new ActionsFixture().Compile(CellHandling.Basic());
            theSystemFixtures.Models["Master"] = new MasterFixture().Compile(CellHandling.Basic());

            var grammar = theCombinedFixtures.Models["Master"]
                .FindGrammar("MoveAround").ShouldBeOfType<EmbeddedSection>();

            grammar.title.ShouldBe("Move Around");
        }

        [Fact]
        public void embedded_fixture_exists_in_code_but_has_overrides()
        {
            writeFile("Master", @"
## MoveAround
### Move Around
embeds Actions
");

            writeFile("Actions", @"
## GoLeft
### Go left

## GoBack
### Go back
");

            theSystemFixtures.Models["Actions"] = new ActionsFixture().Compile(CellHandling.Basic());

            var grammar = theCombinedFixtures.Models["Master"]
                .FindGrammar("MoveAround").ShouldBeOfType<EmbeddedSection>();

            grammar.fixture.FindGrammar("GoLeft").ShouldBeOfType<Sentence>()
                .format.ShouldBe("Go left");

            grammar.fixture.FindGrammar("GoBack").ShouldBeOfType<Sentence>()
                .format.ShouldBe("Go back");

            grammar.fixture.FindGrammar("GoRight").ShouldNotBeNull();
            grammar.fixture.FindGrammar("GoForward").ShouldNotBeNull();
        }

    }

    public class MasterFixture : Fixture
    {
        public IGrammar MoveAround()
        {
            return Embed<ActionsFixture>("Some title");
        }
    }

    public class ActionsFixture : Fixture
    {
        public void GoRight()
        {
            
        }

        public void GoLeft()
        {
            
        }

        public void GoForward()
        {
            
        }
    }
}