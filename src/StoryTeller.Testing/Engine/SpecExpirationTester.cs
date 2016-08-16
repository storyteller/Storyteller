using System;
using Baseline;
using Xunit;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    public class SpecExpirationTester : InteractionContext<SpecExpiration>
    {
        private Specification _theSpec = new Specification();


        [Fact]
        public void it_returns_false_if_there_is_no_expiration_period()
        {
            _theSpec.ExpirationPeriod = 0;
            ClassUnderTest.IsExpired(_theSpec).ShouldBeFalse();
        }

        [Fact]
        public void it_returns_false_if_we_are_within_the_expiration_period()
        {
            _theSpec.ExpirationPeriod = 6;
            _theSpec.LastUpdated = DateTime.UtcNow.Subtract(100.Milliseconds());

            ClassUnderTest.IsExpired(_theSpec).ShouldBeFalse();
        }

        [Fact]
        public void it_returns_true_if_the_expiration_time_has_passed()
        {
            LocalSystemTime = new DateTime(2015, 7, 6);
            _theSpec.ExpirationPeriod = 6;
            _theSpec.LastUpdated = new DateTime(2015, 1, 5);
            ClassUnderTest.IsExpired(_theSpec).ShouldBeTrue();
        }
    }
}