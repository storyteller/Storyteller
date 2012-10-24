using StoryTeller.Domain;

namespace StoryTeller.Engine.Sets
{
    public interface ISetColumn
    {
        Cell Cell { get; }
        void ReadExpected(ITestContext context, IStep step, SetRow row);
        void ReadActual(object target, SetRow row);
        void ConfigureMatcher(RowValueMatcher matcher);
    }
}