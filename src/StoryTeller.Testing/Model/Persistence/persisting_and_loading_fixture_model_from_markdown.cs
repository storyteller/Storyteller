using System;
using System.Dynamic;
using System.Linq;
using Shouldly;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using Xunit;

namespace StoryTeller.Testing.Model.Persistence
{
    public class persisting_and_loading_fixture_model_from_markdown
    {
        private void roundTrip<T>() where T : Fixture, new()
        {
            var fixture = new T();
            var model = fixture.Compile(CellHandling.Basic());

            var markdown1 = FixtureWriter.Write(model);

            
            Console.WriteLine("Fixture " + typeof(T).Name);
            Console.WriteLine("----------------------------------------------------------------");
            Console.WriteLine(markdown1);
            Console.WriteLine("----------------------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine();
            
            

            var model2 = FixtureReader.ReadFrom(markdown1);

            var markdown2 = FixtureWriter.Write(model2);

            var grammars1 = model.grammars.Where(x => x.key != "TODO").OrderBy(x => x.key).Select(x => x.key);
            var grammars2 = model2.grammars.OrderBy(x => x.key).Select(x => x.key);

            grammars2.ShouldHaveTheSameElementsAs(grammars1.ToArray());

            markdown2.ShouldBe(markdown1);
        }

        public class FixtureComparison
        {
            public FixtureModel Original { get; set; }
            public FixtureModel Read { get; set; }
        }

        [Fact]
        public void can_read_the_title()
        {
            roundTrip<OnlyTitleFixture>();
        }

        [Fact]
        public void can_deal_with_sentences()
        {
            roundTrip<SentencesFixture>();
        }

        [Fact]
        public void can_deal_with_tables()
        {
            roundTrip<TablesFixture>();
        }

        [Fact]
        public void can_deal_with_embedded_section()
        {
            roundTrip<EmbedsFixture>();
        }

        [Fact]
        public void can_deal_with_set_verifications()
        {
            roundTrip<SetsFixture>();
        }

        [Fact]
        public void can_round_trip_a_paragraph()
        {
            roundTrip<ParagraphFixture>();
        }
    }


    public class SetsFixture : Fixture
    {
        public IGrammar NotOrdered()
        {
            return VerifyStringList(() => new string[] {"a", "b", "c"})
                .Titled("Unordered Values");
        }

        public IGrammar Ordered()
        {
            return VerifyStringList(() => new string[] { "a", "b", "c" })
                .Titled("Unordered Values").Ordered();
        }
    }

    public class EmbedsFixture : Fixture
    {
        public IGrammar OnlyTitle()
        {
            return Embed<OnlyTitleFixture>("Only the facts maam");
        }
    }


    public class OnlyTitleFixture : Fixture
    {
        public OnlyTitleFixture()
        {
            Title = "My title is this";
        }
    }

    public class ParagraphFixture : Fixture
    {
        [Hidden]
        public void A() { }

        [Hidden]
        public void B() { }

        [Hidden]
        public void C() { }

        public IGrammar ABC()
        {
            return Paragraph("Do you know your abc's?", _ =>
            {
                _ += this["A"];
                _ += this["B"];
                _ += this["C"];
            });
        }
    }

    public class SentencesFixture : Fixture
    {
        public SentencesFixture()
        {
            
        }

        [FormatAs("Go do something")]
        public void Go()
        {
            
        }

        [FormatAs("do {number} times")]
        public void DoMore([Default("5")] int number)
        {
            
        }

        public void WriteText([Editor("bigtext")]string text)
        {
            
        }

        public void PickACard([SelectionValues("Queen of Diamonds", "King of Hearts", "Ace of Spades")]string card)
        {
            
        }

        public void PickState([SelectionList("states")]string state)
        {
            
        }

        
    }

    public class TablesFixture : Fixture
    {
        [ExposeAsTable("Add some numbers")]
        public void AddNumbers([Header("X")]int x, [Header("Y")]int y)
        {
            
        }
    }
}