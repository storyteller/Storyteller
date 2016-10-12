using Baseline;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using Xunit;

namespace StoryTeller.Testing.Model.Persistence
{
    public class loading_fixture_with_markdown
    {
        [Fact]
        public void reads_title()
        {
            var result = FixtureReader.ReadFrom(@"# a title");
            result.title.ShouldBe("a title");
        }

        [Fact]
        public void reads_sentence()
        {
            var result = FixtureReader.ReadFrom(@"
## a key
### a title");
            result.grammars.ShouldNotBeNull();
            result.grammars.Length.ShouldBe(1);
            result.grammars[0].ShouldBeOfType<Sentence>();
            result.grammars[0].As<Sentence>().format.ShouldBe("a title");
            result.grammars[0].As<Sentence>().key.ShouldBe("a key");
        }

        [Fact]
        public void reads_sentence_cells()
        {
            var result = FixtureReader.ReadFrom(@"
## a key
|first|default|");
            result.grammars.ShouldNotBeNull();
            result.grammars.Length.ShouldBe(1);
            result.grammars[0].ShouldBeOfType<Sentence>();

            var sentence = result.grammars[0].As<Sentence>();
            sentence.cells.ShouldNotBeNull();
            sentence.cells.Length.ShouldBe(1);

            var cell = sentence.cells[0];
            cell.Key.ShouldBe("first");
            cell.DefaultValue.ShouldBe("default");
        }

        [Fact]
        public void reads_sentence_cells_with_options()
        {
            var result = FixtureReader.ReadFrom(@"
## a key
|first|default|hello, goodbye, ciao|");
            result.grammars.ShouldNotBeNull();
            result.grammars.Length.ShouldBe(1);
            result.grammars[0].ShouldBeOfType<Sentence>();

            var sentence = result.grammars[0].As<Sentence>();
            sentence.cells.ShouldNotBeNull();
            sentence.cells.Length.ShouldBe(1);

            var cell = sentence.cells[0];
            cell.Key.ShouldBe("first");
            cell.options.ShouldNotBeNull();
            cell.options.Length.ShouldBe(3);
            cell.options[0].value.ShouldBe("hello");
            cell.options[1].value.ShouldBe("goodbye");
            cell.options[2].value.ShouldBe("ciao");
        }

        [Fact(Skip = "not handled yet")]
        public void reads_sentence_cells_with_quoted_options()
        {
            var result = FixtureReader.ReadFrom(@"
## a key
### a title
|first|default|hello, ""goodbye, friend"", ciao|");
            result.grammars.ShouldNotBeNull();
            result.grammars.Length.ShouldBe(1);
            result.grammars[0].ShouldBeOfType<Sentence>();

            var sentence = result.grammars[0].As<Sentence>();
            sentence.cells.ShouldNotBeNull();
            sentence.cells.Length.ShouldBe(1);

            var cell = sentence.cells[0];
            cell.Key.ShouldBe("first");
            cell.options.ShouldNotBeNull();
            cell.options.Length.ShouldBe(3);
            cell.options[0].value.ShouldBe("hello");
            cell.options[1].value.ShouldBe("goodbye, friend");
            cell.options[2].value.ShouldBe("ciao");
        }

        [Fact]
        public void reads_sentence_cells_with_editor()
        {
            var result = FixtureReader.ReadFrom(@"
## a key
### a title
|first|||text|");
            result.grammars.ShouldNotBeNull();
            result.grammars.Length.ShouldBe(1);
            result.grammars[0].ShouldBeOfType<Sentence>();

            var sentence = result.grammars[0].As<Sentence>();
            sentence.cells.ShouldNotBeNull();
            sentence.cells.Length.ShouldBe(1);

            var cell = sentence.cells[0];
            cell.Key.ShouldBe("first");
            cell.editor.ShouldBe("text");
        }

        [Fact]
        public void reads_sentence_cells_with_result()
        {
            var result = FixtureReader.ReadFrom(@"
## a key
### a title
|first||||result|");
            result.grammars.ShouldNotBeNull();
            result.grammars.Length.ShouldBe(1);
            result.grammars[0].ShouldBeOfType<Sentence>();

            var sentence = result.grammars[0].As<Sentence>();
            sentence.cells.ShouldNotBeNull();
            sentence.cells.Length.ShouldBe(1);

            var cell = sentence.cells[0];
            cell.Key.ShouldBe("first");
            cell.result.ShouldBe("result");
        }

        [Fact]
        public void reads_table()
        {
            var result = FixtureReader.ReadFrom(@"
## a key
### a title
|table|col1|");
            result.grammars.ShouldNotBeNull();
            result.grammars.Length.ShouldBe(1);
            result.grammars[0].ShouldBeOfType<Table>();

            var table = result.grammars[0].As<Table>();
            table.cells.ShouldNotBeNull();
            table.cells.Length.ShouldBe(1);

            var cell = table.cells[0];
            cell.Key.ShouldBe("col1");
        }
    }
}
