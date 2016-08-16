using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars
{
    
    public class CheckPropertyGrammar_specs : SpecRunningContext
    {
        [Fact]
        public void execute()
        {
            execute(@"
=> CheckProperty
* SetName: name=Jeremy
* Check#1: Name=Jeremy
* Check#2: Name=Max

");

            CountsShouldBe(1, 1, 0, 0);

            Step("1").Cell("Name").Succeeded();
            Step("2").Cell("Name").FailedWithActual("Jeremy");
        }

        [Fact]
        public void building_the_model()
        {
            var model = ModelFor<Sentence>("CheckProperty", "Check");
            var cell = model.cells.Single();

            cell.header.ShouldBe("The Name");
            cell.DefaultValue.ShouldBe("Jeremy");
        }
    }

    public class CheckPropertyFixture : Fixture
    {
        public CheckPropertyFixture()
        {
            var grammar = CheckPropertyGrammar.For<CheckPropertyTarget>(x => x.Name);
            grammar.CellModifications.Header("The Name").DefaultValue("Jeremy");
            this["Check"] = grammar;
        }

        public void SetName(string name)
        {
            Context.State.CurrentObject = new CheckPropertyTarget {Name = name};
        }


    }

    public class CheckPropertyTarget
    {
        public string Name { get; set; }
    }
}