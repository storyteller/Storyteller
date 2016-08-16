using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.Importing;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Importing
{
    
    public class importing_and_currying_grammars_specs : SpecRunningContext
    {
        [Fact]
        public void execute_an_import_without_currying()
        {
            execute(@"
=> TestImports
* SetTo#1: value=15
* SetValueIs#2: value=15

");
            CountsShouldBe(1, 0, 0, 0);

            Step("2").Cell("value").Succeeded();
        }

        [Fact]
        public void running_a_curried_imported_step()
        {
            execute(@"
=> TestImports
* SetTo12
* SetValueIs#2: value=12
");

            CountsShouldBe(1, 0, 0, 0);

            Step("2").Cell("value").Succeeded();
        }

        [Fact]
        public void curry_builds_the_model()
        {
            var sentence = ModelFor<Sentence>("TestImports", "SetTo12");
            sentence.format.ShouldBe("Set to 12");
            sentence.cells.Any().ShouldBe(false);
        }

        [Fact]
        public void currying_selects_the_right_cells()
        {
            ModelFor<Sentence>("Curried", "Curried1")
                .cells.Select(x => x.Key).ShouldHaveTheSameElementsAs("a", "c");

            ModelFor<Sentence>("Curried", "Curried2")
                .cells.Select(x => x.Key).ShouldHaveTheSameElementsAs("b", "c");
        }
    }

    public class TestImportsFixture : Fixture
    {
        public static MyFoo MyFoo;

        public override void SetUp()
        {
            MyFoo = new MyFoo();
            Context.State.Store(MyFoo);
        }

        public TestImportsFixture()
        {
            this["SetTo"] = Import<StateFixture>("SetTo");
            this["SetValueIs"] = Import<StateFixture>("SetValueIs");

            this["SetTo12"] = Import<StateFixture>("SetTo")
                .Curry().Template("Set to 12")
                .Defaults("value:12");
        }
    }

    public class MyFoo
    {
    }

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


    public class CurriedFixture : Fixture
    {
        public string A;
        public string B;
        public string C;
        public string D;

        public CurriedFixture()
        {
            this["Curried1"] = Curry("Go1").Template("{a} to the {c}").Defaults("b:5");
            this["Curried2"] = Curry(this["Go1"]).Template("{b} and {c}").Defaults("a:3");
        }

        public void Go1(string a, string b, string c, [Default("4")] string d)
        {
            A = a;
            B = b;
            C = c;
            D = d;
        }

        public void Go2(string a, string b, [Default("4")] string c, [Default("4")] string d)
        {
            A = a;
            B = b;
            C = c;
            D = d;
        }
    }
}