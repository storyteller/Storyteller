using FubuTestingSupport;
using NUnit.Framework;
using StoryTeller.Conversion;

namespace StoryTeller.Testing.Conversion
{
    [TestFixture]
    public class StringConstrucutorConversionProviderTester
    {
        private readonly StringConverterProvider provider = new StringConverterProvider();

        [Test]
        public void provide_instance_with_string_constructor() {
            var @object = provider.ConverterFor(typeof(TestKlass)).ShouldNotBeNull();

            var result = @object ("Sample");

            result.ShouldNotBeNull ().ShouldBeOfType<TestKlass> ()
                .S.ShouldEqual ("Sample");
        }

        [Test]
        public void return_null_for_invalid_class() {
            var @object = provider.ConverterFor(typeof(TestKlass2));
            @object.ShouldBeNull ();
        }


        public class TestKlass {
            public string S;

            public TestKlass(string s) {
                this.S = s;
            }
        }

        public class TestKlass2 {
        }
    }
}

