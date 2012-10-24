using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class ConfigureObjectGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            grammar1 = new ConfigureObjectGrammar<ConfiguredObject, int>("age", (o, age) => o.Age = age);
            grammar2 = new ConfigureObjectGrammar<ConfiguredObject, string>("name", (o, name) => o.Name = name);
            grammar2.DefaultValue = "Han Solo";

            context = new TestContext();
            target = new ConfiguredObject();

            context.CurrentObject = target;
        }

        #endregion

        private ConfigureObjectGrammar<ConfiguredObject, int> grammar1;
        private ConfigureObjectGrammar<ConfiguredObject, string> grammar2;
        private TestContext context;
        private ConfiguredObject target;

        [Test]
        public void simple_valid_case_of_configure_object_working()
        {
            Step step = new Step().With("age", 45);
            grammar1.Execute(step, context);

            target.Age.ShouldEqual(45);
        }

        [Test]
        public void simple_valid_case_should_not_increment_any_of_the_counts()
        {
            Step step = new Step().With("age", 45);
            grammar1.Execute(step, context);
            context.Counts.ShouldEqual(0, 0, 0, 0);
        }

        [Test]
        public void using_a_default_value()
        {
            var step = new Step();
            grammar2.Execute(step, context);

            target.Name.ShouldEqual(grammar2.DefaultValue);
        }
    }


    public class ConfiguredObject
    {
        public int Age { get; set; }
        public string Name { get; set; }
    }
}