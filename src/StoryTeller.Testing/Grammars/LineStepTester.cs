using NSubstitute;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using Xunit;

namespace StoryTeller.Testing.Grammars
{
    public class LineStepTester
    {
        [Fact]
        public void default_stepthrough_is_into()
        {
            var step = new LineStep(new StepValues("something"), Substitute.For<ILineGrammar>());
            step.Stepthrough.ShouldBe(StepthroughStyle.Into);
        }
    }
}