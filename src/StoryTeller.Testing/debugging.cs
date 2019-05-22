using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Baseline;
using Newtonsoft.Json.Schema;
using Samples.Fixtures;
using Samples.Fixtures.Api;
using Shouldly;
using Xunit;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing
{
    
    public class debugging
    {
        [Fact]
        public void parse_a_date()
        {
            DateTime time = DateTime.MinValue;
            DateTime.TryParse("1/1/1974", out time);
            Console.WriteLine(time);

        }

        [Fact]
        public void serialize_a_specification()
        {
            var spec = new Specification
            {
                Tags = new string[]{"a", "b", "c"}
            };

            var json = JsonSerialization.ToJson(spec);
        }

        [Fact]
        public void serialize_fixtures()
        {
            var library = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());

            // CreateLocation
            // AddressVerification

            var fixtureModels = library.Models.GetAll().ToArray();

            var json = JsonSerialization.ToJson(fixtureModels);

            var models = JsonSerialization.Deserialize<FixtureModel[]>(json);

            models.Each(x => Debug.WriteLine(x.key));
        }

        [Fact]
        public void should_use_the_explicit_title_of_an_embedded_grammar()
        {
            var fixture = new FakeEmbeddedFixture();
            var model = fixture.Compile(CellHandling.Basic());

            var grammar = model.FindGrammar("Embedded").ShouldBeOfType<EmbeddedSection>();

            grammar.title.ShouldBe("I wanna do some math");
            grammar.TitleOrFormat().ShouldBe("I wanna do some math");
        }

        [Fact]
        public void should_use_the_embedded_grammar_title_in_the_forward()
        {
            var fixture = new FakeEmbeddedFixture();
            var model = fixture.Compile(CellHandling.Basic());
            
            var grammar = model.FindGrammar("BuildUp").ShouldBeOfType<EmbeddedSection>();
            grammar.title.ShouldBe("Gimme an Address");

        }

        public class FakeEmbeddedFixture : Fixture
        {
            public IGrammar Embedded()
            {
                return Embed<CalculatorFixture>("I wanna do some math");
            }

            public IGrammar BuildUp()
            {
                return Build<Address>("Gimme an Address").With<AddressModelFixture>()
                                                         .Forward(c => { });
            }
        }

        
    }
}
