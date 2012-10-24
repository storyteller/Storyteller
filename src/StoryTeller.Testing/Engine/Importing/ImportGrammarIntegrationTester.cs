using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Importing;

namespace StoryTeller.Testing.Engine.Importing
{
    [TestFixture]
    public class ImportGrammarIntegrationTester
    {
        [SetUp]
        public void SetUp()
        {
            StateFixture.RunningTotal = 0;
        }

        private void runTest(string key, string stepValues)
        {
            StateFixture.RunningTotal = 0;
            var test = new Test("something");
            test.Add(new Section("Imports").WithStep(key, stepValues));

            TestUtility.RunTest(test);
        }

        [Test]
        public void run_a_simple_imported_grammar()
        {
            runTest("SetTo", "value:11");
            StateFixture.RunningTotal.ShouldEqual(11);
        }

        [Test]
        public void run_a_curried_grammar()
        {
            runTest("SetTo12", "");
            StateFixture.RunningTotal.ShouldEqual(12);
        }

        [Test]
        public void the_imported_grammar_is_able_to_access_test_context_and_retrieve_methods()
        {
            runTest("SetTo12", "");

            StateFixture.MyFoo.ShouldBeTheSameAs(ImportsFixture.MyFoo);
        }
    }

    public class ImportsFixture : Fixture
    {
        public static MyFoo MyFoo;

        public override void SetUp(ITestContext context)
        {
            MyFoo = new MyFoo();
            context.Store(MyFoo);
        }

        public ImportsFixture()
        {
            this["SetTo"] = Import<StateFixture>("SetTo");
            this["SetTo12"] = Import<StateFixture>("SetTo").Curry(new CurryAction(){
                Template = "Set to 12",
                DefaultValues = "value:12"
            });
        }
    }

    public class MyFoo{}

    public class StateFixture : Fixture
    {
        public static int RunningTotal;
        public static MyFoo MyFoo;

    
        public void SetTo(int value)
        {
            MyFoo = Retrieve<MyFoo>();

            RunningTotal = value;
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