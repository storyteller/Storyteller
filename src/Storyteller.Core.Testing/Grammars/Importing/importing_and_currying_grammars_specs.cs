using NUnit.Framework;
using Storyteller.Core.Grammars;
using Storyteller.Core.Grammars.Importing;

namespace Storyteller.Core.Testing.Grammars.Importing
{
    [TestFixture]
    public class importing_and_currying_grammars_specs : SpecRunningContext
    {
        [Test]
        public void execute_an_import_without_currying()
        {
            execute(@"
=> Imports
* SetTo#1: value=15
* SetValueIs#2: value=15

");
            CountsShouldBe(1, 0, 0, 0);

            Step("2").Cell("value").Succeeded();
        }
    }

    public class ImportsFixture : Fixture
    {
        public static MyFoo MyFoo;

        public override void SetUp()
        {
            MyFoo = new MyFoo();
            Context.State.Store(MyFoo);
        }

        public ImportsFixture()
        {
            this["SetTo"] = Import<StateFixture>("SetTo");
            this["SetValueIs"] = Import<StateFixture>("SetValueIs");

            this["SetTo12"] = Import<StateFixture>("SetTo").Curry(new CurryAction()
            {
                Template = "Set to 12",
                DefaultValues = "value:12"
            });
        }
    }

    public class MyFoo { }

    public class StateFixture : Fixture
    {
        public static int RunningTotal;
        public static MyFoo MyFoo;


        public void SetTo(int value)
        {
            MyFoo = Context.State.Retrieve<MyFoo>();

            RunningTotal = value;
        }

        [FormatAs("The running total is {value}")]
        public int SetValueIs()
        {
            return RunningTotal;
        }

        public void AddNumbers(int x, int y, int z)
        {
            RunningTotal += x + y + z;
        }

        public void AddAndMultiply(int x, int y)
        {
            RunningTotal += x;
            RunningTotal += y;
        }
    }
}