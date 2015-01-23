using NUnit.Framework;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Testing.Grammars
{
    [TestFixture]
    public class CheckPropertyGrammar_specs : SpecRunningContext
    {
        [Test]
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
    }

    public class CheckPropertyFixture : Fixture
    {
        public CheckPropertyFixture()
        {
            this["Check"] = CheckPropertyGrammar.For<CheckPropertyTarget>(x => x.Name);
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