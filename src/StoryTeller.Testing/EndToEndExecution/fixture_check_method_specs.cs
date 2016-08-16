using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Model;

namespace StoryTeller.Testing.EndToEndExecution
{
    
    public class fixture_check_method_specs : SpecRunningContext
    {
        [Fact]
        public void check_simple()
        {
            execute(@"
Name: Test Run
=> CheckGrammar
* CheckSimple#1: text=right
* CheckSimple#2: text=wrong
");

            Step("1").Cell("text").Succeeded();
            Step("2").Cell("text").FailedWithActual("right");
        }

        [Fact]
        public void check_against_context()
        {
            execute(@"
Name: Test Run
=> CheckGrammar
* SetText: text=right
* CheckContext#1: text=right
* CheckContext#2: text=wrong
");

            Step("1").Cell("text").Succeeded();
            Step("2").Cell("text").FailedWithActual("right");
        }

        [Fact]
        public void build_grammar()
        {
            var model = ModelFor<Sentence>("CheckGrammar", "CheckSimple");
            model.format.ShouldBe("text should be {text}");
            var cell = model.cells.Single();
            cell.Key.ShouldBe("text");
            cell.Type.ShouldBe(typeof (string));
            ShouldBeTestExtensions.ShouldBe(cell.output, true);
        }
    }



    public class CheckGrammarFixture : Fixture
    {
        

        public CheckGrammarFixture()
        {
            this["CheckSimple"] = Check("text", () => "right");
            this["SetText"] = Do<string>("Set text to {text}", (text, c) => c.State.Store("text", text));
            this["CheckContext"] = Check("text", c => c.State.Retrieve<string>("text"));


        }
    }
}