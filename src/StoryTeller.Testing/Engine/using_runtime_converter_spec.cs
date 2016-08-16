using Xunit;
using StoryTeller.Results;

namespace StoryTeller.Testing.Engine
{
    
    public class using_runtime_converter_spec : SpecRunningContext
    {
        [Fact]
        public void can_use_a_runtime_converter()
        {
            execute(@"
=> Player
* PositionIs
  -> table
  *Row#1: Player=Justin Houston, Position=LB
");

            Step("1").StatusWas(ResultStatus.ok);
            Step("1").Cell("Position").Succeeded();
        }
    }
}