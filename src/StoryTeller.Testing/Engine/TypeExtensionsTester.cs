using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class TypeExtensionsTester
    {
        [Test]
        public void get_alias_for_a_fixture_class_with_an_attribute()
        {
            typeof (SomethingElseFixture).GetFixtureAlias().ShouldEqual("TheSomethingElse");
        }

        [Test]
        public void get_alias_for_a_fixture_class_with_no_attribute()
        {
            typeof (SomethingFixture).GetFixtureAlias().ShouldEqual("Something");
        }
    }
}