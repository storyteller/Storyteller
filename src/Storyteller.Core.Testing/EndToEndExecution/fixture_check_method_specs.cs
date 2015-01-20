using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.EndToEndExecution
{
    [TestFixture]
    public class fixture_check_method_specs : SpecRunningContext
    {
        [Test]
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

        [Test]
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

        [Test]
        public void build_grammar()
        {
            var model = ModelFor<Sentence>("CheckGrammar", "CheckSimple");
            model.format.ShouldEqual("text should be {text}");
            var cell = model.cells.Single();
            cell.Key.ShouldEqual("text");
            cell.Type.ShouldEqual(typeof (string));
            cell.output.ShouldBeTrue();
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