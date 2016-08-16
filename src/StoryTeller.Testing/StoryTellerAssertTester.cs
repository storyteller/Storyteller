using Baseline;
using Xunit;
using Shouldly;

namespace StoryTeller.Testing
{
    
    public class StoryTellerAssertTester
    {
        [Fact]
        public void fail_directly()
        {
            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail("You stink!");
            }).Message.ShouldBe("You stink!");
        }

        [Fact]
        public void does_not_fail_conditionally()
        {
            StoryTellerAssert.Fail(() => false, "Bad!");
        }

        [Fact]
        public void does_fail_conditionally()
        {
            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail(() => true, "Bad!");
            }).Message.ShouldBe("Bad!");
        }

        [Fact]
        public void fail_with_boolean()
        {
            StoryTellerAssert.Fail(false, "anything");

            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail(true, "Not good");
            }).Message.ShouldBe("Not good");
        }

        [Fact]
        public void fail_with_string_builder()
        {
            StoryTellerAssert.Fail(false, () => "bad");

            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail(true, () => "*{0}*".ToFormat("Bad"));
            }).Message.ShouldBe("*Bad*");
        }
    }
}