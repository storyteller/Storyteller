using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;

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
            }).Message.ShouldEqual("You stink!");
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
            }).Message.ShouldEqual("Bad!");
        }

        [Test]
        public void fail_with_boolean()
        {
            StoryTellerAssert.Fail(false, "anything");

            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail(true, "Not good");
            }).Message.ShouldEqual("Not good");
        }

        [Test]
        public void fail_with_string_builder()
        {
            StoryTellerAssert.Fail(false, () => "bad");

            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                StoryTellerAssert.Fail(true, () => "*{0}*".ToFormat("Bad"));
            }).Message.ShouldEqual("*Bad*");
        }
    }
}