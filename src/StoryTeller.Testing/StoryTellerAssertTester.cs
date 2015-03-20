using FubuCore;
using NUnit.Framework;
using Shouldly;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class StoryTellerAssertTester
    {
        [Test]
        public void fail_directly()
        {
            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail("You stink!");
            }).Message.ShouldBe("You stink!");
        }

        [Test]
        public void does_not_fail_conditionally()
        {
            StoryTellerAssert.Fail(() => false, "Bad!");
        }

        [Test]
        public void does_fail_conditionally()
        {
            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail(() => true, "Bad!");
            }).Message.ShouldBe("Bad!");
        }

        [Test]
        public void fail_with_boolean()
        {
            StoryTellerAssert.Fail(false, "anything");

            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail(true, "Not good");
            }).Message.ShouldBe("Not good");
        }

        [Test]
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