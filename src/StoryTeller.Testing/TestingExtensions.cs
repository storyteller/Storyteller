using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Testing.Engine;

namespace StoryTeller.Testing
{
    public class StepExecutionResult
    {
        public IStepResults Results { get; set; }
        public Counts Counts { get; set; }
    }

    /// <summary>
    /// All strictly for testing
    /// </summary>
    public static class TestingExtensions
    {
        public static StepExecutionResult Execute(this IGrammar grammar, IStep step)
        {
            var context = new TestContext();

            grammar.Execute(step, context);

            return new StepExecutionResult
            {
                Counts = context.Counts,
                Results = context.ResultsFor(step)
            };
        }

        public static T Mock<T>(this TestContext context) where T : class
        {
            var mock = MockRepository.GenerateMock<T>();
            context.Store(mock);

            return mock;
        }

        public static IGrammar SetupMockGrammar(this TestContext context, string stepName)
        {
            var fixture = MockRepository.GenerateMock<IFixture>();
            var grammar = MockRepository.GenerateMock<IGrammar>();
            fixture.Stub(x => x[stepName]).Return(grammar);
            context.LoadFixture(fixture, new StubTestPart());

            return grammar;
        }

        public static void HandleMessage<T>(this object listener, T message)
        {
            ((IListener<T>)listener).Handle(message);
        }
    }
}