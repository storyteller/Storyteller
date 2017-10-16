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

        [Fact]
        public void configures_break_on_exceptions_true()
        {
            new RunInput
            {
                BreakOnExceptionsFlag = true
            }.ConfigureProject();
            
            Project.CurrentProject.StopConditions.BreakOnExceptions.ShouldBeTrue();
        }
        
        [Fact]
        public void configures_break_on_exceptions_false()
        {
            var input = new RunInput();
            
            // default value
            input.BreakOnExceptionsFlag.ShouldBeFalse();
            
            input.ConfigureProject();

            Project.CurrentProject.StopConditions.BreakOnExceptions.ShouldBeFalse();
        }
        
        [Fact]
        public void configures_break_on_wrongs_true()
        {
            new RunInput
            {
                BreakOnWrongsFlag = true
            }.ConfigureProject();
            
            Project.CurrentProject.StopConditions.BreakOnWrongs.ShouldBeTrue();
        }
        
        [Fact]
        public void configures_break_on_wrongs_false()
        {
            var input = new RunInput();
            
            // default value
            input.BreakOnWrongsFlag.ShouldBeFalse();
            
            input.ConfigureProject();

            Project.CurrentProject.StopConditions.BreakOnWrongs.ShouldBeFalse();
        }
    }
}
