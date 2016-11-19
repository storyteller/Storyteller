using System;
using System.IO;
using System.Linq;
using Baseline;
using NSubstitute;
using Shouldly;
using StoryTeller.Model;
using ST.Client;
using Xunit;

namespace StoryTeller.Testing.ST
{
    public class fixture_overrides_for_paragraphs : IDisposable
    {
        private readonly string theFixtureDirectory = Path.GetTempPath().AppendPath(Guid.NewGuid().ToString());
        private readonly IClientConnector theClient = Substitute.For<IClientConnector>();
        private FixtureController theController;
        private readonly FixtureLibrary theSystemFixtures = new FixtureLibrary();
        private FixtureLibrary _combined;

        public fixture_overrides_for_paragraphs()
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
        public void get_paragraph_for_fixture_that_does_not_exist()
        {
            writeFile("Target", @"
# The target fixture

## MyParagraph
* A
* B
* C

");

            var paragraph = theCombinedFixtures.Models["Target"].FindGrammar("MyParagraph")
                .ShouldBeOfType<Paragraph>();

            paragraph.children[0].TitleOrFormat().ShouldBe("A");
            paragraph.children[1].TitleOrFormat().ShouldBe("B");
            paragraph.children[2].TitleOrFormat().ShouldBe("C");
        }

        [Fact]
        public void can_override_just_the_title()
        {
            var fixture = new MyParagraphsFixture();

            overrides<MyParagraphsFixture>(@"
# The target fixture

## MyParagraph
### A better title in the override
* Better A Title
");

            theSystemFixtures.Models[fixture.Key] = fixture.Compile(CellHandling.Basic());

            var paragraph = theCombinedFixtures.Models[fixture.Key].FindGrammar(nameof(MyParagraphsFixture.MyParagraph))
                .ShouldBeOfType<Paragraph>();

            paragraph.title.ShouldBe("A better title in the override");
        }

        [Fact]
        public void can_override_just_some_of_the_children()
        {
            var fixture = new MyParagraphsFixture();

            overrides<MyParagraphsFixture>(@"
# The target fixture

## MyParagraph
### A better title in the override
* Better A Title
* Better B Title
");

            theSystemFixtures.Models[fixture.Key] = fixture.Compile(CellHandling.Basic());

            var paragraph = theCombinedFixtures.Models[fixture.Key].FindGrammar(nameof(MyParagraphsFixture.MyParagraph))
                .ShouldBeOfType<Paragraph>();

            paragraph.children[0].TitleOrFormat().ShouldBe("Better A Title");
            paragraph.children[1].TitleOrFormat().ShouldBe("Better B Title");

            // original title
            paragraph.children[2].TitleOrFormat().ShouldBe("C");
        }


        [Fact]
        public void can_skip_silents_just_fine()
        {
            var fixture = new MyParagraphsFixture();

            overrides<MyParagraphsFixture>(@"
# The target fixture

## HasSilents
### A better title in the override
* Better A Title
* Better B Title
");

            theSystemFixtures.Models[fixture.Key] = fixture.Compile(CellHandling.Basic());

            var paragraph = theCombinedFixtures.Models[fixture.Key].FindGrammar(nameof(MyParagraphsFixture.HasSilents))
                .ShouldBeOfType<Paragraph>();

            paragraph.children.Select(x => x.TitleOrFormat())
                .ShouldHaveTheSameElementsAs("SILENT", "Better A Title", "SILENT", "Better B Title", "SILENT", "C", "SILENT");
        }

        [Fact]
        public void multiple_paragraphs()
        {
            writeFile("Moving", "# Moving Around Some");

            writeFile("Paragraphs", $@"
# Paragraphs

## AllSentences
* Go south
* Go north
* Go west

## WithAnEmbed
* Go left
* Move around
embeds Moving

## WithTable
* Go forward
* Movements
|table|Direction|Distance|

## WithSet
* Go back
* Movements should be
|set|Direction|Distance|
");

            theCombinedFixtures.Models["Paragraphs"].grammars.Select(x => x.key)
                .Where(x => x != "TODO")
                .ShouldHaveTheSameElementsAs("AllSentences", "WithAnEmbed", "WithTable", "WithSet");

            // TODO -- test that WithAnEmbed has an embed
        }
    }

    public class MyParagraphsFixture : Fixture
    {
        public IGrammar MyParagraph()
        {
            return Paragraph("Original Title", _ =>
            {
                _ += Do("A", c => { });
                _ += Do("B", c => { });
                _ += Do("C", c => { });
            });
        }

        public IGrammar HasSilents()
        {
            return Paragraph("Original Title", _ =>
            {
                _ += context => { };
                _ += Do("A", c => { });
                _ += context => { };
                _ += Do("B", c => { });
                _ += context => { };
                _ += Do("C", c => { });
                _ += context => { };
            });
        }
    }
}