using System;
using Shouldly;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class Paragraph_code_generation
    {
        private readonly Paragraph theParagraph = new Paragraph
        {
            key = "TheParagraph",
            title = "The Paragraph"
        };

        [Fact]
        public void with_sentence_children()
        {
            theParagraph.AddChild(new Sentence {format = "Go left"});
            theParagraph.AddChild(new Sentence {format = "Go right"});

            var code = theParagraph.ToMissingCode();

            code.ShouldContain("[StoryTeller.Hidden]");
            code.ShouldContain("public void TheParagraph_1()");
            code.ShouldContain("public void TheParagraph_2()");
            code.ShouldContain("public StoryTeller.IGrammar TheParagraph()");
            code.ShouldContain("return Paragraph(\"The Paragraph\", _ => {");

            code.ShouldContain("_ += this[\"TheParagraph_1\"];");
            code.ShouldContain("_ += this[\"TheParagraph_2\"];");

            
        }

        [Fact]
        public void can_generate_code_for_empty_paragraph_just_in_case()
        {
            theParagraph.ToMissingCode().ShouldNotBeNull();
        }

        [Fact]
        public void with_table_child()
        {
            theParagraph.AddChild(new Sentence { format = "Go left" });
            theParagraph.AddChild(new Sentence { format = "Go right" });

            var table = new Table
            {
                title = "Some Table",
                cells = new Cell[] {new Cell {Key = "One"}, new Cell { Key = "Two" }, new Cell { Key = "Three" }, }
            };


            theParagraph.AddChild(table);

            var code = theParagraph.ToMissingCode();

            code.ShouldContain(@"
        [StoryTeller.Hidden]
        [StoryTeller.Grammars.Tables.ExposeAsTable(""Some Table"")]
");
        }

        [Fact]
        public void with_set_child()
        {
            theParagraph.AddChild(new Sentence { format = "Go left" });
            theParagraph.AddChild(new Sentence { format = "Go right" });

            var @set = new SetVerification
            {
                title = "Some Table",
                cells = new Cell[] { new Cell { Key = "One" }, new Cell { Key = "Two" }, new Cell { Key = "Three" }, }
            };

            


            theParagraph.AddChild(@set);
            var code = theParagraph.ToMissingCode();

            code.ShouldContain(@"
        [StoryTeller.Hidden]
        public StoryTeller.IGrammar TheParagraph_3()
        {
            return VerifySetOf(getTheParagraph_3Rows)");
        }

        [Fact]
        public void with_embed_child()
        {

            var embed = new EmbeddedSection
            {
                fixture = new FixtureModel("Something"),
                title = "Do a bunch of things"
            };

            embed.ToMissingCode(true).ShouldContain("[StoryTeller.Hidden]");
        }
    }
}
