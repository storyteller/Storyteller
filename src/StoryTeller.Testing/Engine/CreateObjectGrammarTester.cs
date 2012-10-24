using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class CreateObjectGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            grammar = new CreateObjectGrammar<CreateObjectGrammarTarget, string>(
                "name",
                name => new CreateObjectGrammarTarget
                {
                    Name = name
                });

            grammar.DefaultValue = "Case";

            context = new TestContext();
        }

        #endregion

        private CreateObjectGrammar<CreateObjectGrammarTarget, string> grammar;
        private TestContext context;

        [Test]
        public void happy_path_creates_the_object_and_puts_it_on_the_TestContext()
        {
            Step step = new Step().With("name", "Josh");
            grammar.Execute(step, context);

            context.CurrentObject.ShouldBeOfType<CreateObjectGrammarTarget>()
                .Name.ShouldEqual("Josh");
        }

        [Test]
        public void happy_path_does_not_increment_the_counts()
        {
            Step step = new Step().With("name", "Josh");
            grammar.Execute(step, context);

            context.Counts.ShouldEqual(0, 0, 0, 0);
            context.CurrentObject.ShouldBeOfType<CreateObjectGrammarTarget>()
                .Name.ShouldEqual("Josh");
        }

        [Test]
        public void uses_the_default_value_when_the_step_value_is_undefined()
        {
            var step = new Step();


            grammar.Execute(step, context);

            context.CurrentObject.ShouldBeOfType<CreateObjectGrammarTarget>()
                .Name.ShouldEqual(grammar.DefaultValue);
        }
    }

    public class CreateObjectGrammarTarget
    {
        public string Name { get; set; }

        public bool Equals(CreateObjectGrammarTarget obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Name, Name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (CreateObjectGrammarTarget)) return false;
            return Equals((CreateObjectGrammarTarget) obj);
        }

        public override int GetHashCode()
        {
            return (Name != null ? Name.GetHashCode() : 0);
        }
    }
}