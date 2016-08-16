using System;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Model;

namespace StoryTeller.Testing
{
    
    public class InvalidFixtureTester
    {
        [Fact]
        public void creates_the_grammar_error()
        {
            var ex = new DivideByZeroException("No!");
            var fixture = new InvalidFixture(typeof (FixtureThatBlowsUp), ex);

            var model = fixture.Compile(null);
            var error = model.errors.Single();

            error.error.ShouldBe(ex.ToString());
            error.message.ShouldBe("Fixture StoryTeller.Testing.FixtureThatBlowsUp could not be loaded");
        }

        [Fact]
        public void invalid_fixtures_are_trapped_inside_the_creation_of_fixture_library()
        {
            TestingContext.Library.Fixtures["ThatBlowsUp"].ShouldBeOfType<InvalidFixture>();
            TestingContext.Library.Models["ThatBlowsUp"].errors.Single()
                .error.ShouldContain("Cannot do this thing");
        }
    }

    public class FixtureThatBlowsUp : Fixture
    {
        public FixtureThatBlowsUp()
        {
            throw new DivideByZeroException("Cannot do this thing");
        }
    }
}