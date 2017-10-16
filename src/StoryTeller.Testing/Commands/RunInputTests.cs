using Shouldly;
using StoryTeller.Commands;
using Xunit;

namespace StoryTeller.Testing.Commands
{
    public class RunInputTests
    {
        [Fact]
        public void configures_the_max_attempts()
        {
            new RunInput
            {
                MaxAttemptsFlag = 11
            }.ConfigureProject();
            
            Project.CurrentMaxRetries.ShouldBe(11);

        }

        [Fact]
        public void configures_the_timeout_at_the_spec_level()
        {
            new RunInput
            {
                TimeoutFlag = 33
            }.ConfigureProject();
            
            Project.CurrentProject.StopConditions.TimeoutInSeconds
                .ShouldBe(33);
        }
    }
}
