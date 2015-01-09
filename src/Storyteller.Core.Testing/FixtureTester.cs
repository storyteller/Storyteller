using FubuTestingSupport;
using NUnit.Framework;

namespace Storyteller.Core.Testing
{
    [TestFixture]
    public class FixtureTester
    {
        [Test]
        public void hidden_when_marked_with_Hidden()
        {
            new HiddenFixture().IsHidden()
                .ShouldBeTrue();
        }

        [Test]
        public void not_hidden_without_the_attribute()
        {
            new NotHiddenFixture().IsHidden()
                .ShouldBeFalse();
        }


        [Test]
        public void get_the_name_using_convention_if_the_alias_as_attribute_does_not_exist()
        {
            new TargetedReflectionFixture().Key.ShouldEqual("TargetedReflection");
        }

        public class TargetedReflectionFixture : Fixture
        {
            
        }

        [Test]
        public void get_the_name_using_the_alias_attribute_if_it_exists()
        {
            new SecondFixture().Key.ShouldEqual("TheSecondFixture");
        }

        public class SecondFixture : Fixture
        {
            public SecondFixture()
            {
                Key = "TheSecondFixture";
            }
        }

        public class NotHiddenFixture : Fixture
        {
            
        }

        [Hidden]
        public class HiddenFixture : Fixture
        {
        }
    }

    
}   